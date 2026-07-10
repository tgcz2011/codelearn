import type { LanguageRunner } from './LanguageRunner'
import type { RunOptions, RunResult, RunnerOutput } from './types'

/**
 * 后端服务执行基类（Task 4 SubTask 4.1 三类基类之一）。
 *
 * 子类在 `runRemote` 中调用远程 HTTP 服务执行代码（如 Task 5 的 Go runner）。
 * 基类 `run` 负责统一补充 `mode: 'remote'` 与默认 `modeLabel: '远程'`；
 * 子类可在返回结果中设置更具体的 modeLabel（如 "服务不可用"），基类会保留。
 */
export abstract class RemoteRunner implements LanguageRunner {
  abstract readonly languageId: string
  abstract readonly displayName: string

  protected abstract runRemote(
    code: string,
    options?: RunOptions,
  ): Promise<RunnerOutput>

  async run(code: string, options?: RunOptions): Promise<RunResult> {
    const result = await this.runRemote(code, options)
    return { ...result, mode: 'remote', modeLabel: result.modeLabel ?? '远程' }
  }
}
