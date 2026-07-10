// Package main 实现 CodeLearn 的 Go 代码执行后端服务（Task 5）。
//
// 仅使用 Go 标准库，提供两个端点：
//   - GET  /health — 健康检查
//   - POST /run    — 接收 Go 代码并在沙箱中编译执行，返回 stdout/stderr/退出码
//
// 安全策略：临时目录用完即删；编译与运行分别超时；输出截断；并发信号量；
// Linux 下对子进程施加 RLIMIT_AS 内存上限（生产环境建议用 Docker --memory）。
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

// ===== 可调参数（部分可经环境变量覆盖）=====

const (
	// 并发执行上限，防止恶意代码耗尽资源。
	defaultMaxConcurrent = 10
	// 编译超时（秒）。编译比运行慢，给宽裕一些。
	compileTimeoutSec = 15
	// 运行默认超时（秒）。
	defaultRunTimeoutSec = 10
	// 运行最大超时上限（秒），客户端传更大值会被截断。
	maxRunTimeoutSec = 30
	// stdout / stderr 各自最大字节数，超出截断。
	maxOutputBytes = 1 << 20 // 1 MiB
)

// 并发信号量（在 main 中初始化为带缓冲 channel）。
var runSem chan struct{}

// ===== 请求 / 响应结构 =====

// RunRequest 是 POST /run 的请求体。
type RunRequest struct {
	Code      string `json:"code"`
	Stdin     string `json:"stdin,omitempty"`
	TimeoutMs int    `json:"timeoutMs,omitempty"`
}

// RunResponse 是 POST /run 的响应体。
type RunResponse struct {
	Stdout     string `json:"stdout"`
	Stderr     string `json:"stderr"`
	ExitCode   int    `json:"exitCode"`
	DurationMs int64  `json:"durationMs"`
	Error      string `json:"error,omitempty"`
}

func main() {
	maxConcurrent := envInt("MAX_CONCURRENT", defaultMaxConcurrent)
	if maxConcurrent < 1 {
		maxConcurrent = defaultMaxConcurrent
	}
	runSem = make(chan struct{}, maxConcurrent)

	mux := http.NewServeMux()
	mux.HandleFunc("/health", healthHandler)
	mux.HandleFunc("/run", runHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	handler := withCORS(mux)
	log.Printf("go-runner listening on :%s (maxConcurrent=%d)", port, maxConcurrent)
	srv := &http.Server{
		Addr:              ":" + port,
		Handler:           handler,
		ReadHeaderTimeout: 30 * time.Second,
	}
	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatalf("server error: %v", err)
	}
}

// ===== 健康检查 =====

func healthHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}
	writeJSON(w, http.StatusOK, map[string]string{"status": "ok"})
}

// ===== /run 处理 =====

func runHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	var req RunRequest
	dec := json.NewDecoder(r.Body)
	dec.DisallowUnknownFields()
	if err := dec.Decode(&req); err != nil {
		writeJSON(w, http.StatusBadRequest, RunResponse{Error: "invalid request body: " + err.Error()})
		return
	}
	if strings.TrimSpace(req.Code) == "" {
		writeJSON(w, http.StatusBadRequest, RunResponse{Error: "code is required"})
		return
	}

	// 规范化运行超时（毫秒 → 秒，限制在 [1, maxRunTimeoutSec]）。
	runTimeoutSec := defaultRunTimeoutSec
	if req.TimeoutMs > 0 {
		runTimeoutSec = (req.TimeoutMs + 999) / 1000 // 向上取整
	}
	if runTimeoutSec < 1 {
		runTimeoutSec = 1
	}
	if runTimeoutSec > maxRunTimeoutSec {
		runTimeoutSec = maxRunTimeoutSec
	}

	// 并发限流：获取信号量，超时直接拒绝以防请求堆积。
	select {
	case runSem <- struct{}{}:
		defer func() { <-runSem }()
	default:
		writeJSON(w, http.StatusServiceUnavailable, RunResponse{
			Error: "server busy: too many concurrent executions",
		})
		return
	}

	resp := executeGo(r.Context(), req.Code, req.Stdin, runTimeoutSec)
	writeJSON(w, http.StatusOK, resp)
}

// ===== CORS 中间件 =====

// withCORS 给所有响应加上 CORS 头。允许的源由环境变量 ALLOWED_ORIGINS 控制
// （逗号分隔，默认 "*" 允许所有源，便于本地开发）。生产环境应显式配置白名单。
func withCORS(next http.Handler) http.Handler {
	allowed := strings.TrimSpace(os.Getenv("ALLOWED_ORIGINS"))
	var origins []string
	if allowed != "" {
		for _, o := range strings.Split(allowed, ",") {
			if o = strings.TrimSpace(o); o != "" {
				origins = append(origins, o)
			}
		}
	}
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		switch {
		case len(origins) == 0:
			w.Header().Set("Access-Control-Allow-Origin", "*")
		case containsOrigin(origins, origin):
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Vary", "Origin")
		default:
			// 源不在白名单：不写 Allow-Origin 头，浏览器会拒绝跨域读取。
		}
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Max-Age", "600")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func containsOrigin(origins []string, target string) bool {
	for _, o := range origins {
		if o == target {
			return true
		}
	}
	return false
}

// ===== 工具函数 =====

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}

// envInt 读取环境变量并解析为 int，失败或缺失返回 fallback。
func envInt(key string, fallback int) int {
	raw := strings.TrimSpace(os.Getenv(key))
	if raw == "" {
		return fallback
	}
	n, err := strconv.Atoi(raw)
	if err != nil {
		return fallback
	}
	return n
}
