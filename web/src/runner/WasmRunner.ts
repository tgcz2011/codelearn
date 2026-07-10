import type { LanguageRunner } from './LanguageRunner'
import type { RunOptions, RunResult, RunnerOutput } from './types'

/**
 * 浏览器内 WASM / iframe 执行基类。
 *
 * 子类在 `runWasm` 中实现具体执行逻辑（如 iframe srcdoc、Pyodide）。
 * 默认 modeLabel 为 "WASM"，子类可在 runWasm 内覆写为更具体的标签
 * （如 "浏览器预览"）。
 */
export abstract class WasmRunner implements LanguageRunner {
  abstract readonly languageId: string
  abstract readonly displayName: string

  protected abstract runWasm(code: string, options?: RunOptions): Promise<RunnerOutput>

  async run(code: string, options?: RunOptions): Promise<RunResult> {
    const result = await this.runWasm(code, options)
    // 子类可在 runWasm 内设置更具体的 modeLabel（如 "浏览器预览"），否则默认 "WASM"
    return { ...result, mode: 'wasm', modeLabel: result.modeLabel ?? 'WASM' }
  }
}
