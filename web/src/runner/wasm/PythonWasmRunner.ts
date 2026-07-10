import { WasmRunner } from '../WasmRunner'
import type { RunOptions, RunnerOutput } from '../types'

/** Pyodide CDN 版本与加载入口 */
const PYODIDE_VERSION = '0.26.2'
const PYODIDE_BASE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`
const PYODIDE_SCRIPT_URL = `${PYODIDE_BASE_URL}pyodide.js`

/** Pyodide 实例的最小类型约束（避免引入 any） */
interface PyodideInstance {
  runPythonAsync(code: string): Promise<unknown>
  runPython(code: string): unknown
  setStdout(options: { batched: (s: string) => void }): void
  setStderr(options: { batched: (s: string) => void }): void
}

/** 加载 Pyodide 的全局函数签名 */
type LoadPyodideFn = (config: { indexURL: string }) => Promise<PyodideInstance>

/** 单例缓存：首次加载后复用，避免重复下载 WASM */
let pyodidePromise: Promise<PyodideInstance> | undefined

/**
 * 加载 Pyodide 脚本并初始化实例（单例）。
 * - 通过 script 标签从 CDN 加载 pyodide.js（不打进 bundle）
 * - 首次加载较慢（下载 + 初始化 WASM），后续复用实例
 * - 在加载期间，调用方（RunPanel）的 isRunning 会保持 true，即 "loading"
 */
function loadPyodideOnce(): Promise<PyodideInstance> {
  if (pyodidePromise) return pyodidePromise
  pyodidePromise = (async () => {
    await ensureScriptLoaded()
    const loadPyodide = readLoadPyodide()
    if (!loadPyodide) throw new Error('Pyodide 加载失败：loadPyodide 不可用')
    return loadPyodide({ indexURL: PYODIDE_BASE_URL })
  })().catch((e) => {
    // 加载失败时清除缓存，允许下次重试
    pyodidePromise = undefined
    throw e
  })
  return pyodidePromise
}

function ensureScriptLoaded(): Promise<void> {
  const existing = document.querySelector<HTMLScriptElement>('script[data-pyodide]')
  if (existing) {
    // 已存在则等待其 load 事件（或已加载完成直接 resolve）
    return existing.dataset.loaded === 'true'
      ? Promise.resolve()
      : waitForScript(existing)
  }
  const script = document.createElement('script')
  script.src = PYODIDE_SCRIPT_URL
  script.async = true
  script.dataset.pyodide = 'true'
  document.head.appendChild(script)
  return waitForScript(script)
}

function waitForScript(script: HTMLScriptElement): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true'
      resolve()
    })
    script.addEventListener('error', () => {
      reject(new Error('Pyodide 脚本加载失败，请检查网络连接'))
    })
  })
}

function readLoadPyodide(): LoadPyodideFn | undefined {
  const w = window as unknown as { loadPyodide?: LoadPyodideFn }
  return w.loadPyodide
}

/**
 * Python 执行器：在浏览器内通过 Pyodide（WASM）运行 Python。
 *
 * - 单例缓存 Pyodide 实例，首次加载从 CDN 拉取
 * - 用 setStdout / setStderr 捕获输出
 * - 异常（语法错误 / 运行时错误）的 traceback 计入 stderr
 */
export class PythonWasmRunner extends WasmRunner {
  readonly languageId = 'python'
  readonly displayName = 'Python'

  protected async runWasm(code: string, _options?: RunOptions): Promise<RunnerOutput> {
    // 注：Pyodide 在主线程同步执行 WASM，无法中断，故暂不支持 timeoutMs。
    // 超时控制留待 Task 8 本机运行时或 Web Worker 方案实现。
    let pyodide: PyodideInstance
    try {
      pyodide = await loadPyodideOnce()
    } catch (e) {
      return {
        stdout: '',
        stderr: '',
        error: `Pyodide 加载失败：${e instanceof Error ? e.message : String(e)}`,
        exitCode: 1,
      }
    }

    let stdout = ''
    let stderr = ''
    pyodide.setStdout({ batched: (s: string) => (stdout += s) })
    pyodide.setStderr({ batched: (s: string) => (stderr += s) })

    try {
      await pyodide.runPythonAsync(code)
      return { stdout, stderr, exitCode: stderr ? 1 : 0 }
    } catch (e) {
      // runPythonAsync 抛出的 JS 异常携带 Python traceback 文本
      const msg = e instanceof Error ? e.message : String(e)
      stderr += msg
      return { stdout, stderr, exitCode: 1 }
    }
  }
}

export const pythonWasmRunner = new PythonWasmRunner()
