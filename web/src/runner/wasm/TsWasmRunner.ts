import { WasmRunner } from '../WasmRunner'
import type { RunOptions, RunnerOutput } from '../types'
import { runJsInIframe } from './JsWasmRunner'

/**
 * TypeScript 执行器：动态 import `typescript` 包，用 ts.transpileModule
 * 把 TS 转成 JS，再复用 JsWasmRunner 在 iframe 中执行。
 *
 * typescript 包较大（~10MB），通过动态 import 按需加载，不进首屏 bundle
 * （vite.config.ts 已在 optimizeDeps.exclude 中排除）。
 */
export class TsWasmRunner extends WasmRunner {
  readonly languageId = 'typescript'
  readonly displayName = 'TypeScript'

  protected async runWasm(code: string, options?: RunOptions): Promise<RunnerOutput> {
    let transpiled: string
    try {
      // 动态加载 typescript 编译器，按需加载避免首屏体积
      const ts = await import('typescript')
      const result = ts.transpileModule(code, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.None,
          // 学习场景下关闭严格的类型检查报错，仅做转译；
          // 类型错误会在编辑器（Monaco）侧提示，不阻断运行
          noEmitOnError: false,
          isolatedModules: true,
        },
        reportDiagnostics: false,
      })
      transpiled = result.outputText
    } catch (e) {
      return {
        stdout: '',
        stderr: '',
        error: `TypeScript 转译失败：${e instanceof Error ? e.message : String(e)}`,
        exitCode: 1,
      }
    }

    return runJsInIframe(transpiled, options)
  }
}

export const tsWasmRunner = new TsWasmRunner()
