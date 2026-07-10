import { memo } from 'react'
import type { ExecutionMode, RunResult } from '@/runner/types'

export interface RunPanelProps {
  /** 最近一次执行结果，null 表示尚未运行 */
  result: RunResult | null
  /** 点击运行回调 */
  onRun: () => void
  /** 是否正在运行（含 Pyodide 首次加载等） */
  isRunning: boolean
}

/** 执行方式 → 中文标签 + 颜色样式 */
const MODE_BADGE: Record<
  ExecutionMode,
  { label: string; className: string }
> = {
  native: {
    label: '本机',
    className: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  },
  wasm: {
    label: 'WASM',
    className: 'bg-sky-100 text-sky-700 ring-sky-200',
  },
  remote: {
    label: '远程',
    className: 'bg-violet-100 text-violet-700 ring-violet-200',
  },
}

function ModeBadge({ result }: { result: RunResult }) {
  const badge = MODE_BADGE[result.mode]
  const text = result.modeLabel ?? badge.label
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${badge.className}`}
    >
      {text}
    </span>
  )
}

function RunPanel({ result, onRun, isRunning }: RunPanelProps) {
  const hasOutput = Boolean(result?.output)
  const hasStdout = Boolean(result?.stdout)
  const hasStderr = Boolean(result?.stderr)
  const hasError = Boolean(result?.error)

  return (
    <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white">
      {/* 顶部工具栏 */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-700">输出</span>
          {result && <ModeBadge result={result} />}
          {result?.durationMs !== undefined && (
            <span className="text-xs text-slate-400">
              {result.durationMs} ms
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onRun}
          disabled={isRunning}
          className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              运行中
            </>
          ) : (
            <>
              <span aria-hidden>▶</span>
              运行
            </>
          )}
        </button>
      </div>

      {/* 内容区 */}
      <div className="flex-1 overflow-auto p-3">
        {!result && !isRunning && (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            点击运行查看输出
          </div>
        )}

        {isRunning && !result && (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-500" />
            正在执行…
          </div>
        )}

        {result && (
          <div className="space-y-3">
            {/* HTML 预览 */}
            {hasOutput && (
              <div>
                <div className="mb-1 text-xs font-medium text-slate-500">
                  预览
                </div>
                <iframe
                  title="运行结果预览"
                  // 仅允许脚本与表单，不带同源，保证沙箱隔离
                  sandbox="allow-scripts allow-forms allow-modals"
                  srcDoc={result.output}
                  className="h-64 w-full rounded border border-slate-200 bg-white"
                />
              </div>
            )}

            {/* stdout */}
            {hasStdout && (
              <div>
                <div className="mb-1 text-xs font-medium text-slate-500">
                  标准输出
                </div>
                <pre className="max-h-80 overflow-auto rounded-md bg-slate-900 p-3 text-xs leading-relaxed text-slate-100">
                  {result.stdout}
                </pre>
              </div>
            )}

            {/* stderr */}
            {hasStderr && (
              <div>
                <div className="mb-1 text-xs font-medium text-red-500">
                  标准错误
                </div>
                <pre className="max-h-80 overflow-auto rounded-md bg-red-950 p-3 text-xs leading-relaxed text-red-200">
                  {result.stderr}
                </pre>
              </div>
            )}

            {/* 执行层错误 */}
            {hasError && (
              <div>
                <div className="mb-1 text-xs font-medium text-red-500">
                  错误
                </div>
                <pre className="max-h-80 overflow-auto rounded-md border border-red-200 bg-red-50 p-3 text-xs leading-relaxed text-red-700">
                  {result.error}
                </pre>
              </div>
            )}

            {/* 空结果提示 */}
            {!hasOutput && !hasStdout && !hasStderr && !hasError && (
              <div className="py-6 text-center text-sm text-slate-400">
                执行完成（无输出）
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(RunPanel)
