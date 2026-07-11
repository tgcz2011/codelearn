/**
 * OnlineCompilerRunner — 通过 Supabase Edge Function 调用 OnlineCompiler.io API。
 *
 * 安全设计：
 * - API key 存在 Supabase Edge Function 的 secret 中（服务端），前端永远接触不到
 * - 前端调用 Supabase Edge Function URL，由 Edge Function 代理请求 OnlineCompiler.io
 * - Edge Function 验证用户 JWT，仅已登录用户可调用
 * - Web/桌面/移动端统一使用此通道，打开即用，无需用户配置任何 API key
 *
 * 行为：
 * - runRemote 向 `${SUPABASE_URL}/functions/v1/run-code` POST { compiler, code, input }
 * - 成功：返回 output/error/exitCode/durationMs，modeLabel="远程"
 * - 失败（未登录 / 网络错误 / 非 200 / 超时）：返回降级 RunnerOutput
 */

import { RemoteRunner } from '../RemoteRunner'
import type { RunOptions, RunnerOutput } from '../types'
import { supabase } from '@/services/supabase/client'

/** Edge Function 响应契约（与 OnlineCompiler.io Sync API 对齐） */
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

/** Edge Function 错误响应 */
interface ErrorResponse {
  error: string
}

/** languageId → OnlineCompiler compiler 标识符 映射 */
const COMPILER_MAP: Record<string, string> = {
  python: 'python-3.14',
  go: 'go-1.26',
  typescript: 'typescript-deno',
  java: 'java-jdk',
  c: 'c-gcc',
  cpp: 'cpp-gcc',
  rust: 'rust-1.87',
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

    // 获取当前用户的 access_token，传给 Edge Function 验证身份
    const { data: sessionData } = await supabase.auth.getSession()
    const accessToken = sessionData.session?.access_token

    if (!accessToken) {
      return unavailableResult('请先登录后使用代码执行功能')
    }

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)

    try {
      // 调用 Supabase Edge Function，API key 在服务端处理，前端不接触
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const resp = await fetch(`${supabaseUrl}/functions/v1/run-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          compiler: this.compiler,
          code,
          input: options?.stdin ?? '',
        }),
        signal: controller.signal,
      })

      if (!resp.ok) {
        const errData = (await resp.json().catch(() => ({}))) as ErrorResponse
        const hint = resp.status === 401
          ? '请重新登录'
          : resp.status === 502
            ? '代码执行服务暂时不可用'
            : errData.error || `服务返回 ${resp.status}`
        return unavailableResult(hint)
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
        `代码执行服务不可用：${e instanceof Error ? e.message : String(e)}`,
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
export const javaOnlineCompiler = new OnlineCompilerRunner('java', 'Java', COMPILER_MAP.java)
export const cOnlineCompiler = new OnlineCompilerRunner('c', 'C', COMPILER_MAP.c)
export const cppOnlineCompiler = new OnlineCompilerRunner('cpp', 'C++', COMPILER_MAP.cpp)
export const rustOnlineCompiler = new OnlineCompilerRunner('rust', 'Rust', COMPILER_MAP.rust)

/**
 * OnlineCompiler 是否可用。
 * 通过 Supabase Edge Function 调用，只要 Supabase 已配置即可用（不限 dev/prod）。
 */
export function isOnlineCompilerAvailable(): boolean {
  return Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY)
}
