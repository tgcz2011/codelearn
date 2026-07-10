/**
 * AI 代码解释按钮（SubTask 7.4）
 *
 * 点击调用 AIService.explainCode，在弹窗中逐段讲解当前编辑器代码。
 * 无代码时禁用。
 */
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { aiService } from '@/ai'
import AiResultModal from './AiResultModal'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export interface AiExplainButtonProps {
  code: string
  language: string
  userId?: string
}

export default function AiExplainButton({
  code,
  language,
  userId,
}: AiExplainButtonProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)

  const disabled = !code.trim()

  const handleClick = async () => {
    if (disabled) return
    setOpen(true)
    setLoading(true)
    setError(undefined)
    setContent('')
    const result = await aiService.explainCode({ code, language, userId })
    setLoading(false)
    if (result.error) {
      setError(result.error)
    } else {
      setContent(result.content)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => void handleClick()}
        disabled={disabled}
        className="inline-flex items-center gap-1 rounded-md bg-sky-100 px-2.5 py-1.5 text-xs font-medium text-sky-700 transition hover:bg-sky-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        📖 {t('ai.explain')}
      </button>

      <AiResultModal
        open={open}
        title={t('ai.explainTitle')}
        loading={loading}
        error={error}
        onClose={() => setOpen(false)}
      >
        <MarkdownRenderer content={content} />
      </AiResultModal>
    </>
  )
}
