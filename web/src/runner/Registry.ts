import type { LanguageRunner } from './LanguageRunner'
import { htmlWasmRunner } from './wasm/HtmlWasmRunner'
import { jsWasmRunner } from './wasm/JsWasmRunner'
import { tsWasmRunner } from './wasm/TsWasmRunner'
import { pythonWasmRunner } from './wasm/PythonWasmRunner'
import { pythonOnlineCompiler, goOnlineCompiler, tsOnlineCompiler, isOnlineCompilerAvailable } from './remote/OnlineCompilerRunner'
import { createNativeRunners } from './native'
import type { RuntimeInfo } from './native'

/** 运行环境：desktop（Tauri 桌面端）/ web（浏览器） */
export type RunEnv = 'desktop' | 'web'

export interface LanguageInfo {
  languageId: string
  displayName: string
}

interface LanguageEntry {
  languageId: string
  displayName: string
  /** 浏览器 WASM / iframe 执行器（Task 4） */
  wasm?: LanguageRunner
  /** 后端服务执行器（Task 5，如 Go） */
  remote?: LanguageRunner
  /** 桌面本机运行时（Task 8 通过 Tauri 注入） */
  native?: LanguageRunner
}

/** 按 languageId 索引的注册表（单例） */
const registry = new Map<string, LanguageEntry>()

function register(entry: LanguageEntry): void {
  registry.set(entry.languageId, entry)
}

// 注册：html/js 用 WasmRunner；python/go/typescript 同时注册 WasmRunner 和 OnlineCompiler remote
// OnlineCompiler 通过 Vite dev server proxy 调用，仅在 dev 模式下可用
register({ languageId: 'html', displayName: 'HTML', wasm: htmlWasmRunner })
register({ languageId: 'javascript', displayName: 'JavaScript', wasm: jsWasmRunner })
register({ languageId: 'typescript', displayName: 'TypeScript', wasm: tsWasmRunner, remote: tsOnlineCompiler })
register({ languageId: 'python', displayName: 'Python', wasm: pythonWasmRunner, remote: pythonOnlineCompiler })
register({ languageId: 'go', displayName: 'Go', remote: goOnlineCompiler })

/**
 * 按 languageId + 运行环境选择 runner。
 *
 * - web 环境：如果 OnlineCompiler 可用（dev server proxy），优先 remote；
 *   否则用 WasmRunner；go 无 wasm 实现，回退 RemoteRunner
 * - desktop 环境：优先 NativeRunner（Task 8 注入），没有回退 WasmRunner；
 *   go 回退 RemoteRunner
 *
 * 找不到时返回 undefined（上层应处理）。
 */
export function getRunner(
  languageId: string,
  env: RunEnv = 'web',
): LanguageRunner | undefined {
  const entry = registry.get(languageId)
  if (!entry) return undefined
  if (env === 'web') {
    // dev 模式下 OnlineCompiler proxy 可用时优先用 remote（比 WASM 更快更可靠）
    if (isOnlineCompilerAvailable() && entry.remote) {
      return entry.remote
    }
    return entry.wasm ?? entry.remote
  }
  return entry.native ?? entry.wasm ?? entry.remote
}

/**
 * 注册桌面端本机运行时（Task 8 调用）。
 * 桌面端启动时检测到本地解释器后，注入对应的 NativeRunner。
 */
export function registerNativeRunner(
  languageId: string,
  runner: LanguageRunner,
): void {
  const entry = registry.get(languageId)
  if (entry) {
    entry.native = runner
  }
}

/**
 * 批量初始化桌面端本机运行时（Task 8 SubTask 8.5）。
 *
 * 桌面端启动时调用：传入 detect_runtimes 的检测结果，
 * 由 createNativeRunners 构造各语言的 NativeRunner 并注册到 registry。
 *
 * - 仅注册检测到运行时的语言；未检测到的语言 native 字段保持 undefined，
 *   getRunner(languageId, 'desktop') 会自动回退到 wasm/remote
 * - 可安全重复调用（每次覆盖对应语言的 native runner）
 * - web 环境不调用此函数，不影响现有逻辑
 *
 * @param runtimes  detect_runtimes 返回的 RuntimeInfo 列表
 */
export function initNativeRunners(runtimes: RuntimeInfo[]): void {
  const runners = createNativeRunners(runtimes)
  for (const [languageId, runner] of runners) {
    registerNativeRunner(languageId, runner)
  }
}

/** 列出指定环境下可用的语言列表 */
export function listLanguages(env: RunEnv = 'web'): LanguageInfo[] {
  const result: LanguageInfo[] = []
  for (const entry of registry.values()) {
    const runner =
      env === 'web'
        ? entry.wasm ?? entry.remote
        : entry.native ?? entry.wasm ?? entry.remote
    if (runner) {
      result.push({ languageId: entry.languageId, displayName: entry.displayName })
    }
  }
  return result
}
