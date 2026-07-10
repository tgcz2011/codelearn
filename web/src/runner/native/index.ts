/**
 * 桌面端本机运行时 Runner 模块出口（Task 8 SubTask 8.4）。
 *
 * 工厂 createNativeRunners 根据检测结果构造四个 NativeRunner 实例，
 * 返回 languageId → NativeRunner 映射，供 Registry.initNativeRunners 注册。
 */

import type { LanguageRunner } from '../LanguageRunner'
import type { RuntimeInfo } from './types'
import {
  PythonNativeRunner,
  JsNativeRunner,
  TsNativeRunner,
  GoNativeRunner,
} from './NativeRunners'

export type { RuntimeInfo } from './types'
export { RUNTIME_OVERRIDES_KEY } from './types'
export {
  PythonNativeRunner,
  JsNativeRunner,
  TsNativeRunner,
  GoNativeRunner,
} from './NativeRunners'

/**
 * 根据检测结果创建 NativeRunner 映射。
 *
 * @param runtimes  detect_runtimes 返回的运行时列表
 * @returns  languageId → NativeRunner 映射；仅包含检测到运行时的语言
 *
 * 未检测到运行时的语言不会出现在映射中，Registry.getRunner 会自动回退到 WasmRunner/RemoteRunner。
 */
export function createNativeRunners(
  runtimes: RuntimeInfo[],
): Map<string, LanguageRunner> {
  const map = new Map<string, LanguageRunner>()

  for (const rt of runtimes) {
    switch (rt.language) {
      case 'python':
        map.set('python', new PythonNativeRunner(rt))
        break
      case 'javascript':
        map.set('javascript', new JsNativeRunner(rt))
        break
      case 'typescript':
        map.set('typescript', new TsNativeRunner(rt))
        break
      case 'go':
        map.set('go', new GoNativeRunner(rt))
        break
      // 其他语言忽略
    }
  }

  return map
}
