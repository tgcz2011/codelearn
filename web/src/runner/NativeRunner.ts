import type { LanguageRunner } from './LanguageRunner'
import type { RunOptions, RunResult, RunnerOutput } from './types'

/**
 * 桌面本机运行时基类。
 *
 * 本期（Task 4）只留抽象类与接口约定，具体 `runNative` 由 Task 8 实现：
 * 子类通过 Tauri invoke 调用 Rust 侧 `run_native` 命令，
 * 启动本地解释器/编译器（python3/node/tsc/go）执行代码并捕获输出。
 *
 * Web 端不会实例化 NativeRunner。
 */
export abstract class NativeRunner implements LanguageRunner {
  abstract readonly languageId: string
  abstract readonly displayName: string

  protected abstract runNative(code: string, options?: RunOptions): Promise<RunnerOutput>

  async run(code: string, options?: RunOptions): Promise<RunResult> {
    const result = await this.runNative(code, options)
    return { ...result, mode: 'native' }
  }
}
