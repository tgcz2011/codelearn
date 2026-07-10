/**
 * 桌面端本机运行时 Runner（Task 8 SubTask 8.4）。
 *
 * 四个 NativeRunner 子类分别对应 python / javascript / typescript / go，
 * 每个子类的 runNative 通过 Tauri invoke 调用 Rust 侧 `run_native` 命令，
 * 启动本机解释器/编译器执行代码，捕获 stdout/stderr/exitCode/durationMs。
 *
 * modeLabel 设为如 "本机 Python 3.11"，版本号来自 detect_runtimes 的检测结果
 * （由 createNativeRunners 工厂注入）。基类 run() 会补 mode:'native'。
 *
 * 非 Tauri 环境（纯浏览器）下 invoke 会抛错，故此类仅在 isTauri() 为 true 时注册。
 */

import { NativeRunner } from '../NativeRunner'
import type { RuntimeInfo } from './types'
import type { RunOptions, RunnerOutput } from '../types'

/** Rust 侧 run_native 命令返回的 JSON 契约（serde camelCase 序列化后）。 */
interface NativeRunResult {
  stdout: string
  stderr: string
  exitCode: number
  durationMs: number
  error: string | null
}

/** 默认执行超时 10 秒，与 Rust 侧 default_timeout_ms 对齐。 */
const DEFAULT_TIMEOUT_MS = 10_000

/**
 * 调用 Tauri invoke 执行本机代码。
 * 动态 import @tauri-apps/api/core：纯 web 环境下不会加载此依赖（tree-shaking 友好），
 * 仅在桌面端实际调用时才 import，避免 web 构建报错。
 */
async function invokeRunNative(
  language: string,
  code: string,
  timeoutMs: number,
): Promise<NativeRunResult> {
  const { invoke } = await import('@tauri-apps/api/core')
  return invoke<NativeRunResult>('run_native', { language, code, timeoutMs })
}

/** 将 Rust 返回映射为前端 RunnerOutput，补上 modeLabel。 */
function mapResult(
  raw: NativeRunResult,
  modeLabel: string,
): RunnerOutput {
  return {
    stdout: raw.stdout,
    stderr: raw.stderr,
    exitCode: raw.exitCode,
    durationMs: raw.durationMs,
    error: raw.error ?? undefined,
    modeLabel,
  }
}

/** 调用 invoke 失败时的降级结果 */
function errorResult(e: unknown, modeLabel: string): RunnerOutput {
  return {
    stdout: '',
    stderr: '',
    exitCode: -1,
    error: `本机执行失败：${e instanceof Error ? e.message : String(e)}`,
    modeLabel,
  }
}

/** 构造 modeLabel：如 "本机 Python 3.11.6" / "本机 Node 20.10.0" */
function buildLabel(displayName: string, version: string): string {
  const v = version ? ` ${version}` : ''
  return `本机 ${displayName}${v}`
}

/**
 * Python 本机运行时 Runner。
 * Rust 侧执行：python3 main.py
 */
export class PythonNativeRunner extends NativeRunner {
  readonly languageId = 'python'
  readonly displayName = 'Python'
  private readonly modeLabel: string

  constructor(runtime?: RuntimeInfo) {
    super()
    this.modeLabel = buildLabel('Python', runtime?.version ?? '')
  }

  protected async runNative(code: string, options?: RunOptions): Promise<RunnerOutput> {
    const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS
    try {
      const raw = await invokeRunNative('python', code, timeoutMs)
      return mapResult(raw, this.modeLabel)
    } catch (e) {
      return errorResult(e, this.modeLabel)
    }
  }
}

/**
 * JavaScript 本机运行时 Runner。
 * Rust 侧执行：node main.js
 */
export class JsNativeRunner extends NativeRunner {
  readonly languageId = 'javascript'
  readonly displayName = 'JavaScript'
  private readonly modeLabel: string

  constructor(runtime?: RuntimeInfo) {
    super()
    this.modeLabel = buildLabel('Node', runtime?.version ?? '')
  }

  protected async runNative(code: string, options?: RunOptions): Promise<RunnerOutput> {
    const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS
    try {
      const raw = await invokeRunNative('javascript', code, timeoutMs)
      return mapResult(raw, this.modeLabel)
    } catch (e) {
      return errorResult(e, this.modeLabel)
    }
  }
}

/**
 * TypeScript 本机运行时 Runner。
 * Rust 侧执行：tsx main.ts（esbuild 转译，速度快于 tsc + node）
 */
export class TsNativeRunner extends NativeRunner {
  readonly languageId = 'typescript'
  readonly displayName = 'TypeScript'
  private readonly modeLabel: string

  constructor(runtime?: RuntimeInfo) {
    super()
    this.modeLabel = buildLabel('TSX', runtime?.version ?? '')
  }

  protected async runNative(code: string, options?: RunOptions): Promise<RunnerOutput> {
    const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS
    try {
      const raw = await invokeRunNative('typescript', code, timeoutMs)
      return mapResult(raw, this.modeLabel)
    } catch (e) {
      return errorResult(e, this.modeLabel)
    }
  }
}

/**
 * Go 本机运行时 Runner。
 * Rust 侧执行：go run main.go
 */
export class GoNativeRunner extends NativeRunner {
  readonly languageId = 'go'
  readonly displayName = 'Go'
  private readonly modeLabel: string

  constructor(runtime?: RuntimeInfo) {
    super()
    this.modeLabel = buildLabel('Go', runtime?.version ?? '')
  }

  protected async runNative(code: string, options?: RunOptions): Promise<RunnerOutput> {
    const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS
    try {
      const raw = await invokeRunNative('go', code, timeoutMs)
      return mapResult(raw, this.modeLabel)
    } catch (e) {
      return errorResult(e, this.modeLabel)
    }
  }
}
