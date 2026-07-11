//! CodeLearn Tauri 2.0 桌面端后端。
//!
//! 暴露两个 invoke 命令：
//! - `detect_runtimes`: 扫描本机 PATH 中的 python3/python/node/tsc/go，返回版本与路径
//! - `run_native`: 将代码写入临时文件，调用本机解释器/编译器执行，捕获 stdout/stderr，
//!   超时杀进程（参考 go-runner 的 proc_unix/proc_windows 进程组模式）
//!
//! 前端（web/src/runner/native）通过 `@tauri-apps/api/core` 的 invoke 调用这两条命令，
//! 在桌面端优先用本机运行时执行代码；非 Tauri 环境降级到 WasmRunner/RemoteRunner。

mod execute;
mod runtime;

use execute::run_native;
use runtime::detect_runtimes;

/// 注册所有 Tauri 命令并启动应用。
///
/// 前端通过 `invoke('detect_runtimes')` 与 `invoke('run_native', { ... })` 调用。
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![detect_runtimes, run_native])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
