//go:build linux

package main

import (
	"fmt"
	"os/exec"
	"syscall"
)

// applyMemLimit 在子进程启动后对其施加 RLIMIT_AS 内存上限（best-effort）。
//
// ⚠️ Go 运行时虚拟内存注意事项：
// Go 运行时会预保留大块虚拟地址空间（arena），即使在 RSS 很小时虚拟内存也很大。
// 因此 RLIMIT_AS 对 Go 程序可能过于激进——设置过低会导致子进程启动即崩溃
// （"fatal error: out of memory" 或 sigsegv）。
//
// 出于上述原因，本限制默认**关闭**（MEM_LIMIT_MB=0 或未设置），仅在显式配置时启用。
//
// 生产环境强烈建议用 Docker `--memory` / cgroup 限制，比 RLIMIT_AS 更可靠。
// 例如：docker run --memory=256m ...
func applyMemLimit(cmd *exec.Cmd) error {
	if cmd.Process == nil {
		return fmt.Errorf("process not started")
	}
	limitMB := envInt("MEM_LIMIT_MB", 0)
	if limitMB <= 0 {
		return nil // 默认关闭，避免误伤 Go 运行时
	}
	limitBytes := uint64(limitMB) << 20
	rl := &syscall.Rlimit{
		Cur: limitBytes,
		Max: limitBytes,
	}
	return syscall.Prlimit(cmd.Process.Pid, syscall.RLIMIT_AS, rl, nil)
}
