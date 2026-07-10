//go:build !windows

package main

import (
	"os/exec"
	"syscall"
)

// applyProcessGroup 把子进程放入独立进程组（Setpgid），并设置 cmd.Cancel
// 使 context 超时时杀掉整个进程组（含子进程派生的孙进程），避免进程泄漏。
//
// 在 Linux / macOS 上 syscall.SysProcAttr.Setpgid 可用；Windows 上为 no-op
// （见 proc_windows.go），使用默认进程终止行为。
func applyProcessGroup(cmd *exec.Cmd) {
	cmd.SysProcAttr = &syscall.SysProcAttr{Setpgid: true}
	// Cancel 在 context 超时被调用；此时 cmd.Process 已启动，PID 有效。
	// 负 PID 表示向整个进程组发送信号。
	cmd.Cancel = func() error {
		return syscall.Kill(-cmd.Process.Pid, syscall.SIGKILL)
	}
}
