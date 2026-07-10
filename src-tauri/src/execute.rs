//! 本机代码执行（Task 8 SubTask 8.3）。
//!
//! `run_native` 将代码写入临时文件，按语言调起本机解释器/编译器执行，
//! 捕获 stdout/stderr，超时杀进程。设计参考 go-runner 的进程组模式：
//! - Unix：子进程独立进程组（Setpgid），超时向进程组发 SIGKILL，连带孙进程一起清理
//! - Windows：用 taskkill /PID /T 递归终止进程树（Windows 无进程组语义）
//!
//! 输出截断：stdout/stderr 各 1MB，避免大输出撑爆 IPC 与前端。

use std::fs;
use std::path::PathBuf;
use std::process::{Command, Stdio};
use std::time::Duration;

use serde::{Deserialize, Serialize};
use wait_timeout::ChildExt;

/// stdout / stderr 截断上限（1 MiB）。
const MAX_OUTPUT_BYTES: usize = 1024 * 1024;

/// 前端 invoke('run_native', { language, code, timeoutMs }) 的参数。
/// serde rename_all=camelCase 让 JS 用驼峰、Rust 用蛇形，两边都自然。
#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RunNativeArgs {
    language: String,
    code: String,
    #[serde(default = "default_timeout_ms")]
    timeout_ms: u64,
}

fn default_timeout_ms() -> u64 {
    10_000
}

/// 执行结果，返回给前端。字段与前端 RunnerOutput 对齐。
/// camelCase 序列化让 JS 直接拿到 exitCode / durationMs。
#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RunResult {
    pub stdout: String,
    pub stderr: String,
    pub exit_code: i32,
    pub duration_ms: u64,
    pub error: Option<String>,
}

/// Tauri 命令：在本机执行代码。
#[tauri::command]
pub fn run_native(args: RunNativeArgs) -> Result<RunResult, String> {
    execute(&args.language, &args.code, args.timeout_ms)
        .map_err(|e| format!("run_native 执行失败：{e}"))
}

/// 实际执行逻辑。
fn execute(language: &str, code: &str, timeout_ms: u64) -> Result<RunResult, String> {
    let (file_name, mut cmd) = build_command(language)?;
    let temp_dir = std::env::temp_dir().join("codelearn_native");
    fs::create_dir_all(&temp_dir).map_err(|e| format!("创建临时目录失败：{e}"))?;
    let file_path = temp_dir.join(&file_name);

    // 写入代码文件
    fs::write(&file_path, code).map_err(|e| format!("写入临时文件失败：{e}"))?;

    // defer 清理：无论成功失败都删临时文件
    struct TempGuard(PathBuf);
    impl Drop for TempGuard {
        fn drop(&mut self) {
            let _ = fs::remove_file(&self.0);
        }
    }
    let _guard = TempGuard(file_path.clone());

    // 配置子进程
    cmd.stdin(Stdio::null())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped());
    apply_process_group(&mut cmd);

    let start = std::time::Instant::now();
    let mut child = cmd.spawn().map_err(|e| format!("启动进程失败：{e}"))?;

    // 在独立线程中排空 stdout/stderr，避免管道缓冲区（~64KB）写满后
    // 子进程阻塞写 → wait_timeout 永不返回的死锁（如 for 循环大量 print）。
    let stdout_handle = child.stdout.take();
    let stderr_handle = child.stderr.take();
    let stdout_thread =
        std::thread::spawn(move || read_and_truncate(stdout_handle));
    let stderr_thread =
        std::thread::spawn(move || read_and_truncate(stderr_handle));

    let timeout = Duration::from_millis(timeout_ms);
    let exit_status = match child.wait_timeout(timeout) {
        Ok(Some(status)) => status,
        Ok(None) => {
            // 超时：杀进程（组）
            kill_process_tree(child.id());
            // 再 wait 一下收回资源
            let _ = child.wait();
            // 即使超时也尝试回收已产生的输出（线程会随 pipe 关闭而退出）
            let stdout = stdout_thread.join().unwrap_or_default();
            let stderr = stderr_thread.join().unwrap_or_default();
            return Ok(RunResult {
                stdout,
                stderr,
                exit_code: 124,
                duration_ms: start.elapsed().as_millis() as u64,
                error: Some(format!("执行超时（{timeout_ms}ms）")),
            });
        }
        Err(e) => return Err(format!("等待进程失败：{e}")),
    };

    let duration_ms = start.elapsed().as_millis() as u64;
    let exit_code = exit_status.code().unwrap_or(-1);

    // 子进程退出后 pipe 关闭，reader 线程随即 join 返回
    let stdout = stdout_thread.join().unwrap_or_default();
    let stderr = stderr_thread.join().unwrap_or_default();

    Ok(RunResult {
        stdout,
        stderr,
        exit_code,
        duration_ms,
        error: None,
    })
}

/// 按语言构造执行命令。返回 (临时文件名, 已配置好参数的 Command)。
fn build_command(language: &str) -> Result<(String, Command), String> {
    match language {
        "python" => {
            let cmd = resolve_command("python3")
                .or_else(|| resolve_command("python"))
                .ok_or_else(|| "未找到 python 解释器（python3/python）".to_string())?;
            let mut c = Command::new(cmd);
            c.arg("main.py");
            Ok(("main.py".to_string(), c))
        }
        "javascript" => {
            let cmd = resolve_command("node")
                .ok_or_else(|| "未找到 node 运行时".to_string())?;
            let mut c = Command::new(cmd);
            c.arg("main.js");
            Ok(("main.js".to_string(), c))
        }
        "typescript" => {
            // 用 tsx 直接执行 TS，无需先 tsc 编译再 node，更适合学习场景。
            // tsx 内部用 esbuild 转译，速度远快于 tsc。
            // 回退：npx tsx（要求网络/缓存有 tsx 包）。
            let cmd = resolve_command("tsx")
                .ok_or_else(|| "未找到 tsx（请全局安装：npm i -g tsx）".to_string())?;
            let mut c = Command::new(cmd);
            c.arg("main.ts");
            Ok(("main.ts".to_string(), c))
        }
        "go" => {
            let cmd = resolve_command("go")
                .ok_or_else(|| "未找到 go 工具链".to_string())?;
            let mut c = Command::new(cmd);
            c.arg("run").arg("main.go");
            Ok(("main.go".to_string(), c))
        }
        other => Err(format!("不支持的语言：{other}")),
    }
}

/// 在 PATH 中查找可执行文件路径（复用 runtime.rs 的查找逻辑的简化版）。
/// 这里只查 PATH（detect_runtimes 已做全面扫描，执行时假定用户已确认运行时存在）。
fn resolve_command(name: &str) -> Option<PathBuf> {
    let path = std::env::var("PATH").ok()?;
    let sep = if cfg!(windows) { ';' } else { ':' };
    let exts: &[&str] = if cfg!(windows) {
        &["", ".exe", ".cmd", ".bat"]
    } else {
        &[""]
    };
    for dir in path.split(sep) {
        for ext in exts {
            let candidate = PathBuf::from(dir).join(format!("{name}{ext}"));
            if candidate.is_file() {
                return Some(candidate);
            }
        }
    }
    None
}

/// 读取子进程输出并截断到 MAX_OUTPUT_BYTES。
///
/// 关键：即使已截断也继续排空管道（丢弃多余数据），否则子进程写满管道
/// 缓冲区后会阻塞，导致 wait_timeout 无法正常返回。对标 go-runner 的
/// io.Copy 行为——读到 EOF 为止，只是前 1MB 保留、后续丢弃。
fn read_and_truncate<R: std::io::Read>(mut reader: Option<R>) -> String {
    let Some(ref mut r) = reader else {
        return String::new();
    };
    let mut buf = Vec::new();
    let mut chunk = vec![0u8; 8192];
    let mut truncated = false;
    loop {
        match r.read(&mut chunk) {
            Ok(0) => break,
            Ok(n) => {
                if !truncated {
                    buf.extend_from_slice(&chunk[..n]);
                    if buf.len() >= MAX_OUTPUT_BYTES {
                        buf.truncate(MAX_OUTPUT_BYTES);
                        truncated = true;
                    }
                }
                // 截断后继续读（丢弃），保持管道畅通让子进程能正常退出
            }
            Err(_) => break,
        }
    }
    String::from_utf8_lossy(&buf).into_owned()
}

// ===== 进程组 / 进程树终止（参考 go-runner proc_unix / proc_windows） =====

/// 为子进程设置独立进程组（Unix），使超时能杀整个进程树。
fn apply_process_group(cmd: &mut Command) {
    #[cfg(unix)]
    {
        use std::os::unix::process::CommandExt;
        // process_group(0) 让子进程成为新进程组 leader（pgid == pid），
        // 后续 kill(-pgid, SIGKILL) 可连带孙进程一起终止。
        // 对标 go-runner/proc_unix.go 的 SysProcAttr.Setpgid = true。
        cmd.process_group(0);
    }
    #[cfg(not(unix))]
    {
        // Windows 无进程组语义，靠 kill_process_tree 的 taskkill /T 递归终止
        let _ = cmd;
    }
}

/// 终止进程树。
/// - Unix：向进程组发 SIGKILL（负 PID），连带所有子进程
/// - Windows：taskkill /PID <pid> /T /F 递归终止进程树
fn kill_process_tree(pid: u32) {
    #[cfg(unix)]
    {
        // SAFETY: 负 pid 表示向进程组 pgid=pid 发信号。setpgid 已在子进程内执行，
        // 故子进程 pid == pgid。SIGKILL 不可被捕获/忽略，立即终止。
        unsafe {
            libc::kill(-(pid as i32), libc::SIGKILL);
        }
    }
    #[cfg(windows)]
    {
        let _ = Command::new("taskkill")
            .args(["/PID", &pid.to_string(), "/T", "/F"])
            .stdout(Stdio::null())
            .stderr(Stdio::null())
            .spawn()
            .and_then(|mut c| c.wait());
    }
    #[cfg(not(any(unix, windows)))]
    {
        let _ = pid;
    }
}
