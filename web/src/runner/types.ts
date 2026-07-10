/**
 * 代码执行 Runner 共享类型（Task 4 SubTask 4.1 定义，为整个 runner 模块的基础契约）。
 *
 * 执行方式分三类：
 * - native: 桌面本机运行时（Task 8 通过 Tauri 调用本地解释器/编译器）
 * - wasm:   浏览器内 WASM / iframe 执行（Task 4 实现）
 * - remote: 后端服务执行（Task 5 实现，如 Go）
 */

/** 执行方式：本机运行时 / 浏览器 WASM / 远程后端服务 */
export type ExecutionMode = 'native' | 'wasm' | 'remote'

/**
 * 兼容别名：等价于 ExecutionMode。
 * 早期 Task 5 代码曾使用 RunnerMode 命名，保留别名以便过渡，新代码请用 ExecutionMode。
 */
export type RunnerMode = ExecutionMode

/** 代码执行结果。RunPanel 据此渲染输出与执行方式标签。 */
export interface RunResult {
  /** 标准输出 */
  stdout: string
  /** 标准错误（含编译/运行时错误） */
  stderr: string
  /** HTML 预览等内容（由 HtmlWasmRunner 等填充） */
  output?: string
  /** 执行层错误描述（如超时、服务不可用、加载失败），无错省略 */
  error?: string
  /** 进程退出码；未真正运行（如服务不可用）时可省略或为 -1 */
  exitCode?: number
  /** 实际使用的执行方式（由基类 run() 统一填充） */
  mode: ExecutionMode
  /** 执行方式展示标签，如 "本机 Python 3.11" / "WASM" / "浏览器预览" / "远程" */
  modeLabel?: string
  /** 执行耗时（毫秒） */
  durationMs?: number
}

/** 代码执行的可选参数 */
export interface RunOptions {
  /** 运行超时（毫秒），不同 runner 默认值不同 */
  timeoutMs?: number
  /** 运行时标准输入 */
  stdin?: string
}

/**
 * Runner 内部执行结果：不含 `mode`（由各类基类 `run()` 统一填充）。
 * 子类的 runNative / runWasm / runRemote 返回此类型，基类负责补上 mode 与默认 modeLabel。
 */
export type RunnerOutput = Omit<RunResult, 'mode'>
