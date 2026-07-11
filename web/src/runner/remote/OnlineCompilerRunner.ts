/**
 * OnlineCompilerRunner — 调用 OnlineCompiler.io Sync API 执行代码。
 *
 * 支持 12 种语言（Python/Go/TypeScript/C/C++/Java 等），通过 Vite dev server proxy 代理请求。
 * API key 不暴露在前端：存在 .env 的 ONLINECOMPILER_API_KEY 中（不带 VITE_ 前缀），
 * 由 vite.config.ts 的 server.proxy 自动注入 Authorization header。
 *
 * 行为：
 * - runRemote 向 /onlinecompiler-api/api/run-code-sync/ POST { compiler, code, input }
 * - 成功：返回 output/error/exitCode/durationMs，modeLabel="远程"
 * - 失败（网络错误 / 非 200 / 超时）：返回降级 RunnerOutput
 *
 * 安全设计：
 * - 生产环境（非 dev server）无 proxy，请求会失败并降级为 WASM 或显示"服务不可用"
 * - API key 永远不出现在前端构建产物中
 */

import { RemoteRunner } from '../RemoteRunner'
import type { RunOptions, RunnerOutput } from '../types'

/** OnlineCompiler.io Sync API 响应契约 */
interface OnlineCompilerResponse {
  output?: string
  error?: string
  status?: string
  exit_code?: number
  signal?: number | null
  time?: string
  total?: string
  memory?: string
}

/** languageId → OnlineCompiler compiler 标识符 映射 */
const COMPILER_MAP: Record<string, string> = {
  python: 'python-3.14',
  go: 'go-1.26',
  typescript: 'typescript-deno',
}

/** 默认超时（OnlineCompiler.io 上限 30 秒） */
const DEFAULT_TIMEOUT_MS = 30_000

/** 服务不可用时返回的降级结果 */
function unavailableResult(error: string): RunnerOutput {
  return {
    stdout: '',
    stderr: '',
    error,
    exitCode: -1,
    modeLabel: '服务不可用',
  }
}

export class OnlineCompilerRunner extends RemoteRunner {
  readonly languageId: string
  readonly displayName: string
  private readonly compiler: string

  constructor(languageId: string, displayName: string, compiler: string) {
    super()
    this.languageId = languageId
    this.displayName = displayName
    this.compiler = compiler
  }

  protected async runRemote(
    code: string,
    options?: RunOptions,
  ): Promise<RunnerOutput> {
    const timeoutMs = Math.min(options?.timeoutMs ?? DEFAULT_TIMEOUT_MS, DEFAULT_TIMEOUT_MS)
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)

    try {
      // 通过 Vite dev server proxy 请求，Authorization header 由 proxy 自动注入
      const resp = await fetch('/onlinecompiler-api/api/run-code-sync/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          compiler: this.compiler,
          code,
          input: options?.stdin ?? '',
        }),
        signal: controller.signal,
      })

      if (!resp.ok) {
        return unavailableResult(
          `OnlineCompiler 返回 ${resp.status}${resp.status === 404 ? '（proxy 未配置，请使用 vite dev 而非 vite preview）' : ''}`,
        )
      }

      const data = (await resp.json()) as OnlineCompilerResponse
      const durationMs = data.total ? Math.round(parseFloat(data.total) * 1000) : undefined

      return {
        stdout: data.output ?? '',
        stderr: data.error ?? '',
        exitCode: typeof data.exit_code === 'number' ? data.exit_code : 0,
        durationMs,
        error: data.status === 'error' ? data.error : undefined,
        modeLabel: '远程 (OnlineCompiler)',
      }
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') {
        return unavailableResult(`执行超时（${timeoutMs}ms）`)
      }
      return unavailableResult(
        `OnlineCompiler 服务不可用：${e instanceof Error ? e.message : String(e)}`,
      )
    } finally {
      clearTimeout(timer)
    }
  }
}

/** 各语言的 OnlineCompiler runner 单例 */
export const pythonOnlineCompiler = new OnlineCompilerRunner('python', 'Python', COMPILER_MAP.python)
export const goOnlineCompiler = new OnlineCompilerRunner('go', 'Go', COMPILER_MAP.go)
export const tsOnlineCompiler = new OnlineCompilerRunner('typescript', 'TypeScript', COMPILER_MAP.typescript)

/** 检查 OnlineCompiler proxy 是否可用（dev server 环境下为 true） */
export function isOnlineCompilerAvailable(): boolean {
  // 在 dev server 下 proxy 路径可用；生产构建（vite preview / GitHub Pages）下不可用
  return import.meta.env.DEV
}
