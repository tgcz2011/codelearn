//go:build !linux

package main

import "os/exec"

// applyMemLimit 在非 Linux 平台为 no-op：RLIMIT_AS 是 Linux 特有能力。
//
// macOS 的 rlimit 语义不同且对 Go 程序不可靠（Go 运行时预保留大块虚拟内存）；
// Windows 无对应机制。生产环境请用容器（Docker `--memory`）限制内存。
func applyMemLimit(cmd *exec.Cmd) error {
	return nil
}
