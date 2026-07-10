# syntax=docker/dockerfile:1
# ============================================================
# CodeLearn Go 代码执行服务 Dockerfile
# ============================================================
# 重要：本服务在运行时需要 `go` 工具链来编译用户提交的代码，
# 因此最终镜像必须保留 Go 工具链，不能使用纯 alpine（那样 go build 不可用）。
# 故采用多阶段构建：builder 编译 go-runner 自身，runtime 仍基于 golang:1.22-alpine。
# ============================================================

# ===== Stage 1: builder（编译 go-runner 服务自身）=====
FROM golang:1.22-alpine AS builder
WORKDIR /src
COPY go.mod ./
COPY . .
# 静态构建 go-runner 二进制（CGO_ENABLED=0 便于 alpine 运行；trimpath/ldflags 减体积）
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-s -w" -o /out/go-runner .

# ===== Stage 2: runtime（保留 Go 工具链以编译用户代码）=====
FROM golang:1.22-alpine AS runtime
# ca-certificates：用户代码若发 HTTPS 请求需要；tzdata：时区正确
RUN apk add --no-cache ca-certificates tzdata \
    && adduser -D -u 10001 app

# 拷贝 go-runner 二进制
COPY --from=builder /out/go-runner /usr/local/bin/go-runner

# 运行时编译用户代码需要的可写目录（GOCACHE / GOTMPDIR / GOMODCACHE）
ENV GOCACHE=/tmp/go-cache \
    GOTMPDIR=/tmp/go-tmp \
    GOMODCACHE=/tmp/go-modcache \
    PORT=8080
RUN mkdir -p /tmp/go-cache /tmp/go-tmp /tmp/go-modcache \
    && chown -R app:app /tmp/go-cache /tmp/go-tmp /tmp/go-modcache

USER app
EXPOSE 8080
# 健康检查：alpine 自带 busybox wget
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1:${PORT:-8080}/health || exit 1

ENTRYPOINT ["go-runner"]
