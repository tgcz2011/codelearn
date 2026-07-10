# src-tauri

Tauri 2.0 桌面端（Rust 后端）。

本目录将在 **Task 8** 中初始化，预计包含：

- `tauri.conf.json` — Tauri 配置（窗口、应用标识、构建产物等）
- `src/main.rs` / `src/lib.rs` — Rust 后端入口
- `Cargo.toml` — Rust 依赖声明
- `capabilities/` — Tauri 权限配置
- 原生运行时检测命令 `detect_runtimes`（扫描 PATH 中的 python3/node/tsc/go）
- 代码执行命令 `run_native(language, code, timeout)`（启动子进程，捕获 stdout/stderr，超时杀进程）

> 当前为占位目录，本期（Task 1）只创建目录结构，不进行实际开发。
