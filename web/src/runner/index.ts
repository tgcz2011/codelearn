/**
 * 代码执行 runner 模块公共出口。
 *
 * 使用示例：
 * ```ts
 * import { getRunner, listLanguages } from '@/runner'
 * const runner = getRunner('python', 'web')
 * const result = await runner?.run('print("hi")')
 * ```
 */
export type { ExecutionMode, RunOptions, RunResult } from './types'
export type { LanguageRunner } from './LanguageRunner'
export { NativeRunner } from './NativeRunner'
export { WasmRunner } from './WasmRunner'
export { RemoteRunner } from './RemoteRunner'

export { getRunner, listLanguages, registerNativeRunner, initNativeRunners } from './Registry'
export type { LanguageInfo, RunEnv } from './Registry'

export { htmlWasmRunner, HtmlWasmRunner } from './wasm/HtmlWasmRunner'
export { jsWasmRunner, JsWasmRunner, runJsInIframe } from './wasm/JsWasmRunner'
export { tsWasmRunner, TsWasmRunner } from './wasm/TsWasmRunner'
export { pythonWasmRunner, PythonWasmRunner } from './wasm/PythonWasmRunner'
export { goRemoteRunner, GoRemoteRunner } from './remote/GoRemoteRunner'
