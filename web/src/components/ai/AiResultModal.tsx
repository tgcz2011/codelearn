/**
 * AI 结果展示弹窗（共享组件）
 *
 * 用于「提示」「解释」「练习」三类 AI 交互的统一结果展示容器。
 * 提供 loading / error / 内容区三种状态，内容由 children 渲染。
 */
import type { ReactNode } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import Spinner from '@/components/ui/Spinner'

export interface AiResultModalProps {
  open: boolean
  title: string
  loading?: boolean
  error?: string
  onClose: () => void
  /** 自定义底部操作区（如「加载到编辑器」按钮） */
  footer?: ReactNode
  children?: ReactNode
}

export default function AiResultModal({
  open,
  title,
  loading = false,
  error,
  onClose,
  footer,
  children,
}: AiResultModalProps) {
  const { t } = useTranslation()
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 标题栏 */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-3">
          <h3 className="text-base font-semibold text-slate-800">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('common.close')}
            className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            ✕
          </button>
        </div>

        {/* 内容区 */}
        <div className="flex-1 overflow-auto px-5 py-4">
          {loading && (
            <div className="flex items-center gap-2 py-8 text-sm text-slate-500">
              <Spinner size={18} />
              {t('ai.thinking')}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700">
              {error}
            </div>
          )}

          {!loading && !error && children}
        </div>

        {/* 底部操作区 */}
        {footer && (
          <div className="shrink-0 border-t border-slate-200 px-5 py-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
