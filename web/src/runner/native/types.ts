/**
 * 桌面端本机运行时共享类型（Task 8）。
 *
 * RuntimeInfo 与 Rust 侧 runtime.rs 的 RuntimeInfo 结构对齐（serde camelCase）。
 */

/**
 * 检测到的本机运行时信息。
 * @field language  语言标识：python / javascript / typescript / go
 * @field version   版本号，如 "3.11.6"；解析失败为空串
 * @field path      可执行文件绝对路径
 */
export interface RuntimeInfo {
  language: string
  version: string
  path: string
}

/** localStorage key：用户手动指定的运行时路径覆盖 */
export const RUNTIME_OVERRIDES_KEY = 'codelearn_runtime_overrides'
