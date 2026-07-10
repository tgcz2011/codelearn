/**
 * AI 提示按钮（SubTask 7.3 / 接入 LessonPage）
 *
 * 点击调用 AIService.getHint，在弹窗中展示渐进式提示。
 * 本地维护请求次数 attempt，多次点击提示会逐步深入。
 */
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { aiService } from '@/ai'
import AiResultModal from './AiResultModal'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export interface AiHintButtonProps {
  lessonTitle: string
  code: string
  userId?: string
}

export default function AiHintButton({
  lessonTitle,
  code,
  userId,
}: AiHintButtonProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [attempt, setAttempt] = useState(0)

  const handleClick = async () => {
    const nextAttempt = attempt + 1
    setAttempt(nextAttempt)
    setOpen(true)
    setLoading(true)
    setError(undefined)
    setContent('')
    const result = await aiService.getHint({
      lessonTitle,
      userCode: code,
      attemptCount: nextAttempt,
      userId,
    })
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
        className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2.5 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-200"
      >
        💡 {t('ai.hint')}
      </button>

      <AiResultModal
        open={open}
        title={t('ai.hintTitle')}
        loading={loading}
        error={error}
        onClose={() => setOpen(false)}
      >
        <MarkdownRenderer content={content} />
      </AiResultModal>
    </>
  )
}
