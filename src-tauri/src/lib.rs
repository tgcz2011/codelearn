//! CodeLearn Tauri 2.0 桌面端后端。
//!
//! 暴露两个 invoke 命令：
//! - `detect_runtimes`: 扫描本机 PATH 中的 python3/python/node/tsc/go，返回版本与路径
//! - `run_native`: 将代码写入临时文件，调用本机解释器/编译器执行，捕获 stdout/stderr，
//!   超时杀进程（参考 go-runner 的 proc_unix/proc_windows 进程组模式）
//!
//! 前端（web/src/runner/native）通过 `@tauri-apps/api/core` 的 invoke 调用这两条命令，
//! 在桌面端优先用本机运行时执行代码；非 Tauri 环境降级到 WasmRunner/RemoteRunner。
//!
//! 使用 tauri-plugin-localhost 通过 http://localhost:9527 提供前端资源，
//! 解决 macOS WKWebView 在 tauri:// 协议下 fetch 外部 API 报 "Load failed" 的问题。

mod execute;
mod runtime;

use execute::run_native;
use runtime::detect_runtimes;
use tauri::{webview::WebviewWindowBuilder, WebviewUrl};

/// 本地 localhost 服务器端口
const LOCALHOST_PORT: u16 = 9527;

/// 注册所有 Tauri 命令并启动应用。
///
/// 前端通过 `invoke('detect_runtimes')` 与 `invoke('run_native', { ... })` 调用。
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_localhost::Builder::new(LOCALHOST_PORT).build())
        .invoke_handler(tauri::generate_handler![detect_runtimes, run_native])
        .setup(move |app| {
            // 开发模式使用 Vite dev server，生产模式使用 localhost 插件
            let url = if cfg!(debug_assertions) {
                "http://localhost:5173".parse().unwrap()
            } else {
                format!("http://localhost:{}", LOCALHOST_PORT).parse().unwrap()
            };
            WebviewWindowBuilder::new(app, "main".to_string(), WebviewUrl::External(url))
                .title("CodeLearn")
                .inner_size(1280.0, 800.0)
                .min_inner_size(900.0, 600.0)
                .resizable(true)
                .build()?;
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
