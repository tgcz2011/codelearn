//go:build windows

package main

import "os/exec"

// applyProcessGroup 在 Windows 上为 no-op：Windows 没有类 Unix 进程组语义，
// 使用 exec.Cmd 默认的进程终止行为（context 超时时 Go 自动 Kill 进程）。
func applyProcessGroup(cmd *exec.Cmd) {}
