//! 本机运行时检测（Task 8 SubTask 8.2）。
//!
//! 扫描 PATH 与各平台常见安装路径，检测 python3/python、node、tsc、go，
//! 并执行 `<runtime> --version` 解析版本号。返回的 `RuntimeInfo` 供前端：
//! - 在设置页"运行时检测"面板展示（Task 8.7）
//! - 为 NativeRunner 生成 modeLabel（如 "本机 Python 3.11"）（Task 8.4）
//!
//! 设计要点：
//! - 不依赖 `which` crate，手写 PATH 扫描 + 平台分隔符（`:` Unix / `;` Windows），
//!   减少依赖体积且能覆盖非 PATH 的常见安装路径（Homebrew / pyenv / nvm / volta）
//! - 每个 runtime 返回至多一条（第一个找到的）；未找到则不出现在结果列表中
//! - 版本解析容错：取 `--version` 输出第一行，正则/空格提取版本号；失败则留空

use std::path::PathBuf;
use std::process::Command;

use serde::Serialize;

/// 检测到的本机运行时信息。前端通过 invoke('detect_runtimes') 获取。
#[derive(Debug, Clone, Serialize)]
pub struct RuntimeInfo {
    /// 语言标识，与前端 languageId 对齐：python / javascript / typescript / go
    pub language: String,
    /// 版本号，如 "3.11.6" / "v20.10.0"；解析失败为空串
    pub version: String,
    /// 可执行文件绝对路径
    pub path: String,
}

/// Tauri 命令：检测本机已安装的运行时。
///
/// 同步扫描（IO 量小，version 探测 4 个进程），前端在 loading 态展示即可。
#[tauri::command]
pub fn detect_runtimes() -> Result<Vec<RuntimeInfo>, String> {
    Ok(scan_runtimes())
}

/// 实际检测逻辑，与 Tauri 解耦便于测试。
fn scan_runtimes() -> Vec<RuntimeInfo> {
    let mut result = Vec::new();

    // Python: 优先 python3，回退 python
    if let Some(info) = detect_one("python", &["python3", "python"]) {
        result.push(info);
    }
    // JavaScript: node
    if let Some(info) = detect_one("javascript", &["node"]) {
        result.push(info);
    }
    // TypeScript: tsc（npx tsc 亦可，但这里只认可直接执行的 tsc）
    if let Some(info) = detect_one("typescript", &["tsc"]) {
        result.push(info);
    }
    // Go: go
    if let Some(info) = detect_one("go", &["go"]) {
        result.push(info);
    }

    result
}

/// 检测单个语言：在 candidates 里找第一个存在的可执行文件，
/// 再执行 `<path> --version` 解析版本。
fn detect_one(language: &str, candidates: &[&str]) -> Option<RuntimeInfo> {
    let path = find_executable(candidates)?;
    let version = query_version(&path).unwrap_or_default();
    Some(RuntimeInfo {
        language: language.to_string(),
        version,
        path: path.to_string_lossy().into_owned(),
    })
}

/// 在 PATH 与平台常见路径中查找第一个存在的可执行文件。
/// candidates 按优先级排序，找到即返回。
fn find_executable(candidates: &[&str]) -> Option<PathBuf> {
    let search_dirs = search_path_dirs();

    for &name in candidates {
        // 1. 先尝试 PATH 直接命中（含扩展名处理）
        if let Some(found) = lookup_in_dirs(name, &search_dirs) {
            return Some(found);
        }
        // 2. 平台特定常见路径兜底
        for extra in platform_extra_paths(name) {
            if extra.is_file() {
                return Some(extra);
            }
        }
    }
    None
}

/// 解析 PATH 环境变量得到搜索目录列表。
fn search_path_dirs() -> Vec<PathBuf> {
    let path = match std::env::var("PATH") {
        Ok(p) => p,
        Err(_) => return Vec::new(),
    };
    let sep = if cfg!(windows) { ';' } else { ':' };
    path.split(sep).map(PathBuf::from).collect()
}

/// 在给定目录列表中查找可执行文件，Windows 下自动补 .exe/.cmd/.bat 扩展名。
fn lookup_in_dirs(name: &str, dirs: &[PathBuf]) -> Option<PathBuf> {
    let extensions: &[&str] = if cfg!(windows) {
        &["", ".exe", ".cmd", ".bat", ".COM"]
    } else {
        &[""]
    };

    for dir in dirs {
        for ext in extensions {
            let candidate = dir.join(format!("{name}{ext}"));
            if is_executable(&candidate) {
                return Some(candidate);
            }
        }
    }
    None
}

/// 判断路径是否为可执行文件（Unix 检查 x 位，Windows 检查文件存在）。
fn is_executable(path: &PathBuf) -> bool {
    #[cfg(unix)]
    {
        use std::os::unix::fs::PermissionsExt;
        match std::fs::metadata(path) {
            Ok(meta) => meta.is_file() && (meta.permissions().mode() & 0o111 != 0),
            Err(_) => false,
        }
    }
    #[cfg(windows)]
    {
        path.is_file()
    }
    #[cfg(not(any(unix, windows)))]
    {
        path.is_file()
    }
}

/// 返回某 runtime 名称在当前平台的常见非 PATH 安装路径（兜底用）。
fn platform_extra_paths(name: &str) -> Vec<PathBuf> {
    let home = std::env::var("HOME").unwrap_or_default();
    let home = if home.is_empty() {
        std::env::var("USERPROFILE").unwrap_or_default()
    } else {
        home
    };
    let h = PathBuf::from(&home);

    match name {
        "python3" | "python" => {
            let mut v = Vec::new();
            if cfg!(target_os = "macos") {
                v.push(PathBuf::from("/usr/bin/python3"));
                v.push(PathBuf::from("/opt/homebrew/bin/python3"));
                v.push(h.join(".pyenv/shims/python3"));
            }
            if cfg!(target_os = "linux") {
                v.push(PathBuf::from("/usr/bin/python3"));
                v.push(PathBuf::from("/usr/local/bin/python3"));
            }
            if cfg!(windows) {
                v.push(PathBuf::from(
                    r"C:\Python311\python.exe",
                ));
                v.push(PathBuf::from(
                    r"C:\Python310\python.exe",
                ));
                v.push(PathBuf::from(
                    r"C:\Python39\python.exe",
                ));
                // Microsoft Store python
                v.push(h.join("AppData/Local/Microsoft/WindowsApps/python3.exe"));
                v.push(h.join("AppData/Local/Microsoft/WindowsApps/python.exe"));
            }
            v
        }
        "node" => {
            let mut v = Vec::new();
            if cfg!(unix) {
                // nvm: $HOME/.nvm/versions/node/<ver>/bin/node —— 不枚举版本号，
                // 改为查 $HOME/.nvm/current/bin/node（nvm alias default 软链），
                // 若不存在则留给 PATH 兜底
                v.push(h.join(".nvm/current/bin/node"));
                // volta
                v.push(h.join(".volta/bin/node"));
            }
            if cfg!(windows) {
                v.push(h.join("AppData/Roaming/npm/node.exe"));
                v.push(h.join(".volta/bin/node.exe"));
            }
            v
        }
        "tsc" => {
            let mut v = Vec::new();
            if cfg!(unix) {
                v.push(h.join(".npm-global/bin/tsc"));
                v.push(h.join(".local/bin/tsc"));
                v.push(h.join("AppData/Roaming/npm/tsc"));
            }
            if cfg!(windows) {
                v.push(h.join("AppData/Roaming/npm/tsc.cmd"));
                v.push(h.join("AppData/Roaming/npm/node_modules/.bin/tsc.cmd"));
            }
            v
        }
        "go" => {
            let mut v = Vec::new();
            if cfg!(target_os = "macos") {
                v.push(PathBuf::from("/opt/homebrew/bin/go"));
                v.push(PathBuf::from("/usr/local/go/bin/go"));
            }
            if cfg!(target_os = "linux") {
                v.push(PathBuf::from("/usr/local/go/bin/go"));
                v.push(PathBuf::from("/usr/lib/go/bin/go"));
            }
            if cfg!(windows) {
                v.push(PathBuf::from(r"C:\Go\bin\go.exe"));
                v.push(h.join("go/bin/go.exe"));
            }
            v
        }
        _ => Vec::new(),
    }
}

/// 执行 `<path> --version`，取输出第一行解析版本号。
///
/// - python3 --version → "Python 3.11.6" → "3.11.6"
/// - node --version    → "v20.10.0"      → "20.10.0"
/// - tsc --version     → "Version 5.3.3" → "5.3.3"
/// - go version        → "go version go1.21.4 darwin/arm64" → "go1.21.4"
fn query_version(path: &PathBuf) -> Option<String> {
    let output = Command::new(path).arg("--version").output().ok()?;
    // go 用 `go version` 而非 `go --version`，但 `go --version` 在新版 go 也输出 "go1.21.4"。
    // 若 --version 无输出则尝试 `version` 子命令。
    let text = if output.stdout.is_empty() && path.file_name()?.to_string_lossy() == "go" {
        let alt = Command::new(path).arg("version").output().ok()?;
        String::from_utf8_lossy(&alt.stdout).into_owned()
    } else {
        String::from_utf8_lossy(&output.stdout).into_owned()
    };

    let first_line = text.lines().next().unwrap_or("").trim();
    Some(extract_version(first_line))
}

/// 从一行版本输出中提取版本号（形如 x.y.z 或 vx.y.z）。
fn extract_version(line: &str) -> String {
    // 找到第一个匹配 "数字.数字" 的子串
    let bytes = line.as_bytes();
    let mut start = None;
    let mut end = 0;
    for (i, &b) in bytes.iter().enumerate() {
        let is_digit = b.is_ascii_digit();
        let is_dot = b == b'.';
        if is_digit && start.is_none() {
            start = Some(i);
        }
        if start.is_some() && (is_digit || is_dot) {
            end = i + 1;
        } else if start.is_some() {
            break;
        }
    }
    match start {
        Some(s) if end > s => {
            let v = &line[s..end];
            // 去掉末尾多余的点
            v.trim_end_matches('.').to_string()
        }
        _ => String::new(),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn extract_python_version() {
        assert_eq!(extract_version("Python 3.11.6"), "3.11.6");
    }
    #[test]
    fn extract_node_version() {
        assert_eq!(extract_version("v20.10.0"), "20.10.0");
    }
    #[test]
    fn extract_tsc_version() {
        assert_eq!(extract_version("Version 5.3.3"), "5.3.3");
    }
    #[test]
    fn extract_go_version() {
        assert_eq!(extract_version("go version go1.21.4 darwin/arm64"), "1.21.4");
    }
}
