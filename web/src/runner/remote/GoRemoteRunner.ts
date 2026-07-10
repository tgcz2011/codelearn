/**
 * GoRemoteRunner — 调用 go-runner 后端服务执行 Go 代码（Task 5 SubTask 5.4）。
 *
 * 为什么需要远程：Go 编译器编译为 WASM 体积过大且实验性，纯浏览器内执行不现实，
 * 故 Web 端通过本 Runner 调用部署在 Fly.io / Render 的轻量 Go 执行服务。
 *
 * 行为：
 * - `runRemote` 向 `${VITE_GO_RUNNER_URL}/run` POST `{ code, stdin, timeoutMs }`
 * - 成功：返回后端的 stdout / stderr / exitCode / durationMs，modeLabel="远程"
 * - 失败（网络错误 / 非 200 / 未配置 URL / 超时）：返回降级 RunnerOutput，
 *   error 描述原因、modeLabel="服务不可用"，便于 RunPanel 提示用户
 *
 * 导出：`GoRemoteRunner` 类 + `goRemoteRunner` 单例实例。
 * `Registry.ts`（Task 4）通过 `goRemoteRunner` 单例注册 Go 语言。
 */

import { RemoteRunner } from '../RemoteRunner'
import type { RunOptions, RunnerOutput } from '../types'

/** go-runner 后端 `/run` 响应契约（见 go-runner/main.go RunResponse）。 */
interface GoRunResponse {
  stdout?: string
  stderr?: string
  exitCode?: number
  durationMs?: number
  error?: string
}

/** 默认运行超时（毫秒），与 go-runner 后端默认值对齐。 */
const DEFAULT_GO_TIMEOUT_MS = 10_000

/** 服务不可用时返回的降级结果（modeLabel 由基类补 mode 后保留） */
function unavailableResult(error: string): RunnerOutput {
  return {
    stdout: '',
    stderr: '',
    error,
    exitCode: -1,
    modeLabel: '服务不可用',
  }
}

export class GoRemoteRunner extends RemoteRunner {
  readonly languageId = 'go'
  readonly displayName = 'Go'

  protected async runRemote(
    code: string,
    options?: RunOptions,
  ): Promise<RunnerOutput> {
    const baseUrl = import.meta.env.VITE_GO_RUNNER_URL ?? ''
    if (!baseUrl) {
      return unavailableResult('Go 执行服务未配置（缺少 VITE_GO_RUNNER_URL）')
    }

    const timeoutMs = options?.timeoutMs ?? DEFAULT_GO_TIMEOUT_MS
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)

    try {
      const resp = await fetch(`${baseUrl}/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
          stdin: options?.stdin ?? '',
          timeoutMs,
        }),
        signal: controller.signal,
      })

      if (!resp.ok) {
        return unavailableResult(`Go 执行服务返回 ${resp.status}`)
      }

      const data = (await resp.json()) as GoRunResponse
      return {
        stdout: data.stdout ?? '',
        stderr: data.stderr ?? '',
        exitCode: typeof data.exitCode === 'number' ? data.exitCode : 0,
        durationMs: data.durationMs,
        error: data.error,
        modeLabel: '远程',
      }
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') {
        return unavailableResult(`执行超时（${timeoutMs}ms）`)
      }
      return unavailableResult(
        `Go 执行服务不可用：${e instanceof Error ? e.message : String(e)}`,
      )
    } finally {
      clearTimeout(timer)
    }
  }
}

/** Go 远程执行器单例，供 Registry 注册使用。 */
export const goRemoteRunner = new GoRemoteRunner()
