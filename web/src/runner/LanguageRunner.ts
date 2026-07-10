import type { RunOptions, RunResult } from './types'

/**
 * 语言执行器接口。所有代码执行能力都通过该接口暴露，
 * 上层（课程学习页 / RunPanel）只依赖此接口，不感知具体实现。
 *
 * 三类基类：
 * - {@link NativeRunner} 桌面本机运行时（Task 8）
 * - {@link WasmRunner}   浏览器 WASM / iframe 执行（Task 4）
 * - {@link RemoteRunner} 后端服务执行（Task 5）
 */
export interface LanguageRunner {
  readonly languageId: string
  readonly displayName: string
  run(code: string, options?: RunOptions): Promise<RunResult>
  /** 可选：返回可预览内容（如 HTML 字符串），由调用方决定何时渲染 */
  preview?(code: string): RunResult
}
