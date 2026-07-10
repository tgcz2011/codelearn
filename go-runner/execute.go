package main

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"syscall"
	"time"
)

// executeGo 编译并运行用户提交的 Go 代码，返回结构化结果。
//
// 流程：
//  1. 创建临时目录，写入 main.go
//  2. `go mod init runner`（best-effort，为未来支持第三方依赖预留；标准库代码无 module 也能编译）
//  3. `go build -o <binary> main.go`，编译超时 compileTimeoutSec
//  4. 运行编译产物，捕获 stdout/stderr，运行超时 runTimeoutSec（受 maxRunTimeoutSec 上限）
//  5. 输出超过 maxOutputBytes 截断并追加标记
//  6. 临时目录用完即删（defer）
func executeGo(parentCtx context.Context, code, stdin string, runTimeoutSec int) RunResponse {
	start := time.Now()
	resp := RunResponse{}

	// 1. 创建临时目录
	tmpDir, err := os.MkdirTemp("", "runner-*")
	if err != nil {
		resp.Error = "failed to create temp dir: " + err.Error()
		return resp
	}
	defer func() {
		_ = os.RemoveAll(tmpDir) // 临时目录用完即删
	}()

	srcPath := filepath.Join(tmpDir, "main.go")
	if err := os.WriteFile(srcPath, []byte(code), 0o644); err != nil {
		resp.Error = "failed to write source: " + err.Error()
		return resp
	}

	// 2. go mod init runner（best-effort：失败不阻断，标准库代码可直接编译）
	modCmd := exec.Command("go", "mod", "init", "runner")
	modCmd.Dir = tmpDir
	// module 初始化的 stderr 不回传给用户（属于环境噪声）。
	_ = modCmd.Run()

	// 3. 编译
	binPath := filepath.Join(tmpDir, "main")
	compileOut, cerr := runCommand(parentCtx, tmpDir, compileTimeoutSec, "", "go", "build", "-o", binPath, "main.go")
	if cerr.ExitCode != 0 || cerr.Err != nil {
		// 编译失败：编译错误在 stderr；exitCode 非 0。
		msg := string(compileOut)
		if cerr.Stderr != "" {
			if msg != "" {
				msg += "\n"
			}
			msg += cerr.Stderr
		}
		if cerr.Err != nil {
			if msg != "" {
				msg += "\n"
			}
			msg += cerr.Err.Error()
		}
		resp.Stderr = truncateOutput(msg)
		resp.ExitCode = 1
		if resp.Stderr == "" {
			resp.Stderr = "compilation failed"
		}
		resp.DurationMs = time.Since(start).Milliseconds()
		return resp
	}

	// 4. 运行
	runOut, runErr := runCommand(parentCtx, tmpDir, runTimeoutSec, stdin, binPath)
	resp.Stdout = truncateOutput(string(runOut))
	resp.Stderr = truncateOutput(runErr.Stderr)
	resp.ExitCode = runErr.ExitCode
	resp.DurationMs = time.Since(start).Milliseconds()

	if runErr.Err != nil {
		// 运行错误（含超时、信号终止）以 error 字段提示，stdout/stderr 仍返回已捕获内容。
		resp.Error = runErr.Err.Error()
	}
	return resp
}

// commandError 聚合子进程的错误信息：stderr、退出码、底层 error（如超时）。
type commandError struct {
	Stderr   string
	ExitCode int
	Err      error
}

// runCommand 在指定目录、超时与 stdin 下运行命令，返回 stdout 与错误聚合。
//
// 超时处理：用 context.WithTimeout 控制总时长，超时后进程会被 Kill。
// 子进程被杀后 Wait 返回 "signal: killed"，这里转换为更友好的 timeout 错误。
// 内存限制：Linux 下通过 applyMemLimit 在子进程启动后施加 RLIMIT_AS。
func runCommand(parentCtx context.Context, dir string, timeoutSec int, stdin string, name string, args ...string) ([]byte, commandError) {
	ctx, cancel := context.WithTimeout(parentCtx, time.Duration(timeoutSec)*time.Second)
	defer cancel()

	cmd := exec.CommandContext(ctx, name, args...)
	cmd.Dir = dir
	if stdin != "" {
		cmd.Stdin = strings.NewReader(stdin)
	}

	// 分离 stdout / stderr：stdout 单独 buffer，stderr 走 commandError。
	var stderrBuf bytes.Buffer
	var stdoutBuf bytes.Buffer
	cmd.Stdout = &stdoutBuf
	cmd.Stderr = &stderrBuf

	// 设置子进程进程组（便于超时时杀整个进程树）。
	applyProcessGroup(cmd)

	startErr := cmd.Start()
	if startErr != nil {
		return nil, commandError{Err: startErr}
	}

	// 子进程已启动，施加内存上限（best-effort，存在小窗口竞态；生产环境建议用 Docker --memory）。
	_ = applyMemLimit(cmd)

	waitErr := cmd.Wait()

	cerr := commandError{
		Stderr:   stderrBuf.String(),
		ExitCode: exitCodeFrom(waitErr),
		Err:      nil,
	}

	if ctx.Err() == context.DeadlineExceeded {
		cerr.Err = fmt.Errorf("execution timed out after %ds", timeoutSec)
		return stdoutBuf.Bytes(), cerr
	}
	if waitErr != nil && cerr.ExitCode == 0 {
		// 非 0 退出已由 ExitCode 体现，仅记录其它错误（如信号）。
		cerr.Err = waitErr
	}
	return stdoutBuf.Bytes(), cerr
}

// exitCodeFrom 从 *exec.ExitError 提取退出码；无错误返回 0，信号终止返回 -1。
func exitCodeFrom(err error) int {
	if err == nil {
		return 0
	}
	var ee *exec.ExitError
	if errors.As(err, &ee) {
		if status, ok := ee.Sys().(syscall.WaitStatus); ok {
			if status.Signaled() {
				return -1
			}
			return status.ExitStatus()
		}
		return ee.ExitCode()
	}
	return 0
}

// truncateOutput 把输出截断到 maxOutputBytes，超出则追加截断标记。
// 按字节截断时可能切断多字节 UTF-8 字符的尾部，这里用安全截断避免产生无效 rune。
func truncateOutput(s string) string {
	if len(s) <= maxOutputBytes {
		return s
	}
	// 回退到最后一个有效的 UTF-8 边界，避免输出乱码。
	cut := maxOutputBytes
	for cut > 0 && !utf8RuneStart(s[cut]) {
		cut--
	}
	return s[:cut] + "\n[output truncated]"
}

// utf8RuneStart 判断字节 b 是否为一个 UTF-8 字符的起始字节（非后续字节）。
func utf8RuneStart(b byte) bool {
	return b&0xC0 != 0x80
}
