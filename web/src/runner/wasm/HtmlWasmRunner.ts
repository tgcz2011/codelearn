import { WasmRunner } from '../WasmRunner'
import type { RunOptions, RunResult, RunnerOutput } from '../types'

/**
 * HTML 执行器：用 iframe srcdoc 渲染 HTML/CSS/JS，实时预览。
 *
 * 支持 HTML（含内联 CSS / JS）。`run` 把代码原样作为预览内容返回，
 * 由 RunPanel 用 sandbox iframe 渲染。`preview` 同步返回 HTML 字符串。
 */
export class HtmlWasmRunner extends WasmRunner {
  readonly languageId = 'html'
  readonly displayName = 'HTML'

  protected async runWasm(code: string, _options?: RunOptions): Promise<RunnerOutput> {
    return {
      stdout: '',
      stderr: '',
      output: code,
      exitCode: 0,
      // 覆写基类默认的 "WASM"，标注为浏览器预览
      modeLabel: '浏览器预览',
    }
  }

  /** 同步返回 HTML 字符串供调用方预览渲染 */
  preview(code: string): RunResult {
    return {
      stdout: '',
      stderr: '',
      output: code,
      exitCode: 0,
      mode: 'wasm',
      modeLabel: '浏览器预览',
    }
  }
}

export const htmlWasmRunner = new HtmlWasmRunner()
