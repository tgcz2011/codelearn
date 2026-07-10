# go-runner

CodeLearn 的 Go 代码执行后端服务（**Task 5**）。

提供轻量 HTTP 服务，接收用户提交的 Go 代码，在沙箱中编译执行，返回 `stdout` / `stderr` / 退出码。前端 `GoRemoteRunner`（`web/src/runner/remote/GoRemoteRunner.ts`）通过 `VITE_GO_RUNNER_URL` 调用本服务；服务不可用时前端回退展示预写输出。

> 为什么需要后端：Go 编译器编译为 WASM 体积过大（>50MB）且实验性，纯浏览器内执行 Go 目前不现实，故部署一个轻量后端服务。

## 端点

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET`  | `/health` | 健康检查，返回 `{"status":"ok"}` |
| `POST` | `/run`    | 执行 Go 代码 |

### `POST /run`

请求体（JSON）：

```json
{
  "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"hello\")\n}",
  "stdin": "",
  "timeoutMs": 10000
}
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `code` | string | 是 | Go 源码（`package main`） |
| `stdin` | string | 否 | 运行时标准输入 |
| `timeoutMs` | number | 否 | 运行超时（毫秒），默认 10000，上限 30000 |

响应体（JSON）：

```json
{
  "stdout": "hello\n",
  "stderr": "",
  "exitCode": 0,
  "durationMs": 312,
  "error": ""
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `stdout` | string | 标准输出（>1MB 截断并追加 `[output truncated]`） |
| `stderr` | string | 标准错误/编译错误（>1MB 截断） |
| `exitCode` | number | 进程退出码；超时/信号终止为 -1 |
| `durationMs` | number | 编译+运行总耗时（毫秒） |
| `error` | string | 运行期错误（超时、信号等），无则省略 |

## 安全与资源限制

- **临时目录**：每次执行用 `os.MkdirTemp` 创建独立临时目录，用完即删（`defer os.RemoveAll`）。
- **超时**：编译超时 15s；运行超时默认 10s、上限 30s。超时杀整个进程组（`Setpgid` + `SIGKILL`）。
- **输出截断**：`stdout` / `stderr` 各最大 1MiB，超出按 UTF-8 边界安全截断并追加 `\n[output truncated]`。
- **并发限制**：用 channel 信号量限制同时执行数（默认 10，`MAX_CONCURRENT` 可调），超限返回 503。
- **内存限制**：Linux 下可通过 `MEM_LIMIT_MB` 环境变量对子进程施加 `RLIMIT_AS`（默认关闭，因 Go 运行时预保留大块虚拟内存，过低会误伤）。**生产环境建议用 Docker `--memory` / cgroup 限制**，更可靠。

## 本地运行

前置：本机已安装 Go 1.22+。

```bash
cd go-runner
go run main.go
# 默认监听 :8080
```

快速测试：

```bash
# 健康检查
curl http://localhost:8080/health
# => {"status":"ok"}

# 执行代码
curl -X POST http://localhost:8080/run \
  -H 'Content-Type: application/json' \
  -d '{"code":"package main\n\nimport \"fmt\"\n\nfunc main(){ fmt.Println(\"hello\") }"}'
# => {"stdout":"hello\n","stderr":"","exitCode":0,"durationMs":...,"error":""}
```

## 环境变量

| 变量 | 默认 | 说明 |
|------|------|------|
| `PORT` | `8080` | 监听端口（Fly.io / Render 会自动注入） |
| `MAX_CONCURRENT` | `10` | 最大并发执行数 |
| `ALLOWED_ORIGINS` | （空，允许所有源） | CORS 白名单，逗号分隔，如 `https://a.com,https://b.com` |
| `MEM_LIMIT_MB` | `0`（关闭） | Linux 子进程内存上限（MB）；注意 Go 运行时虚拟内存特性 |

## 部署

### Docker（本地验证镜像）

```bash
cd go-runner
docker build -t codelearn-go-runner .
docker run -p 8080:8080 --rm codelearn-go-runner
```

> ⚠️ 最终镜像基于 `golang:1.22-alpine`（保留 Go 工具链），因为服务需要在运行时用 `go build` 编译用户代码。纯 `alpine` 镜像没有 `go` 命令，无法工作。

### Fly.io

1. 安装 `flyctl`：https://fly.io/docs/flyctl/install/
2. `flyctl login`
3. 若 `codelearn-go-runner` 已被占用，改 `fly.toml` 里的 `app` 名为你的唯一名
4. `flyctl deploy`
5. 部署后拿到 `https://codelearn-go-runner.fly.dev`，填入前端 `.env` 的 `VITE_GO_RUNNER_URL`

`fly.toml` 已配置 `auto_stop_machines = true` 以节省免费额度（无流量自动停机，有请求自动唤醒）。

### Render

1. Render 控制台 → New → Blueprint，选本仓库根目录
2. Render 自动读取 `render.yaml` 创建 free 层 web service
3. 部署后拿到 `https://codelearn-go-runner.onrender.com`，填入前端 `VITE_GO_RUNNER_URL`

> 免费层有冷启动延迟（~30s 唤醒）和资源限制，生产请升级。

## 项目结构

```
go-runner/
├── main.go            # HTTP 服务、路由、CORS、请求/响应结构
├── execute.go         # 编译+执行逻辑、超时、输出截断
├── proc_unix.go       # 进程组（Linux/macOS）
├── proc_windows.go    # 进程组 no-op（Windows）
├── rlimit_linux.go    # 内存 RLIMIT_AS（Linux，默认关闭）
├── rlimit_other.go    # 内存限制 no-op（非 Linux）
├── go.mod
├── Dockerfile         # 多阶段构建
├── fly.toml           # Fly.io 部署配置
└── render.yaml        # Render 部署配置
```

## 约束

- 仅使用 Go 标准库，不引第三方框架。
- 本期仅支持标准库代码（`go mod init runner` 为 best-effort；第三方依赖因无网络下载暂不支持）。
- 不实际部署，仅准备服务代码与部署配置文件。
