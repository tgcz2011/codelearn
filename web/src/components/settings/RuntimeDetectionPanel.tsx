/**
 * 运行时检测面板（Task 8 SubTask 8.7）。
 *
 * 在设置页展示本机运行时检测结果：
 * - 各语言卡片（语言名 + 检测到✓/未检测到✗ + 版本 + 路径）
 * - "重新检测"按钮
 * - 手动指定路径输入框（覆盖自动检测，存 localStorage）
 * - 非 Tauri 环境显示"此功能仅在桌面端可用"提示
 *
 * 独立组件，避免与 Task 7 的 AI 设置面板冲突。
 */

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { isTauri, useRuntimeDetection } from '@/hooks/useTauri'
import { RUNTIME_OVERRIDES_KEY } from '@/runner/native'
import type { RuntimeInfo } from '@/runner/native'

/** 语言显示名映射 */
const LANGUAGE_LABELS: Record<string, string> = {
  python: 'Python',
  javascript: 'JavaScript (Node)',
  typescript: 'TypeScript (tsc/tsx)',
  go: 'Go',
}

/** localStorage 中手动覆盖路径的类型 */
type RuntimeOverrides = Record<string, string>

/** 读取 localStorage 中的手动覆盖路径 */
function loadOverrides(): RuntimeOverrides {
  try {
    const raw = localStorage.getItem(RUNTIME_OVERRIDES_KEY)
    return raw ? (JSON.parse(raw) as RuntimeOverrides) : {}
  } catch {
    return {}
  }
}

/** 写入手动覆盖路径到 localStorage */
function saveOverrides(overrides: RuntimeOverrides): void {
  try {
    localStorage.setItem(RUNTIME_OVERRIDES_KEY, JSON.stringify(overrides))
  } catch {
    // localStorage 不可用时静默忽略
  }
}

/** 单个语言检测卡片 */
function RuntimeCard({
  language,
  info,
  override,
  onOverrideChange,
}: {
  language: string
  info: RuntimeInfo | undefined
  override: string
  onOverrideChange: (value: string) => void
}) {
  const detected = Boolean(info)
  const label = LANGUAGE_LABELS[language] ?? language
  const version = info?.version ?? ''

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-800">{label}</span>
          {detected ? (
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
              ✓ 检测到
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 ring-1 ring-inset ring-slate-200">
              ✗ 未检测到
            </span>
          )}
        </div>
        {version && (
          <span className="text-xs text-slate-500">v{version}</span>
        )}
      </div>

      {detected && info && (
        <p className="mt-2 truncate text-xs text-slate-400" title={info.path}>
          {info.path}
        </p>
      )}

      <div className="mt-3">
        <Input
          label="手动指定路径（覆盖自动检测）"
          type="text"
          placeholder={detected ? info?.path ?? '输入可执行文件路径' : '输入可执行文件路径'}
          value={override}
          onChange={(e) => onOverrideChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default function RuntimeDetectionPanel() {
  const { runtimes, loading, error, refresh } = useRuntimeDetection(false)
  const [overrides, setOverrides] = useState<RuntimeOverrides>({})
  const [tauri, setTauri] = useState(false)

  useEffect(() => {
    setTauri(isTauri())
    setOverrides(loadOverrides())
  }, [])

  // Tauri 环境下首次自动检测
  useEffect(() => {
    if (tauri) {
      void refresh()
    }
  }, [tauri, refresh])

  const handleOverrideChange = (language: string, value: string) => {
    const next = { ...overrides, [language]: value }
    setOverrides(next)
    saveOverrides(next)
  }

  // 渲染四门语言的卡片（无论是否检测到）
  const languages = ['python', 'javascript', 'typescript', 'go']

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-800">运行时检测</h3>
          <p className="mt-0.5 text-sm text-slate-500">
            检测本机已安装的解释器/编译器，桌面端优先使用本机运行时执行代码
          </p>
        </div>
        {tauri && (
          <Button
            variant="secondary"
            loading={loading}
            onClick={() => void refresh()}
          >
            重新检测
          </Button>
        )}
      </div>

      {!tauri ? (
        <div className="mt-4 rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
          此功能仅在桌面端可用。请在 Tauri 桌面应用中查看本机运行时检测。
        </div>
      ) : (
        <>
          {error && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              检测失败：{error}
            </div>
          )}

          {loading && runtimes.length === 0 ? (
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-500" />
              正在检测本机运行时…
            </div>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {languages.map((lang) => (
                <RuntimeCard
                  key={lang}
                  language={lang}
                  info={runtimes.find((r) => r.language === lang)}
                  override={overrides[lang] ?? ''}
                  onOverrideChange={(v) => handleOverrideChange(lang, v)}
                />
              ))}
            </div>
          )}

          <p className="mt-3 text-xs text-slate-400">
            提示：手动指定的路径保存在浏览器本地，会覆盖自动检测结果。清空输入框可恢复自动检测。
          </p>
        </>
      )}
    </div>
  )
}
