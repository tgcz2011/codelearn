/**
 * AI 动态练习生成器（SubTask 7.5）
 *
 * 点击「再来一题」调用 AIService.generateExercise 生成一道练习题，
 * 在弹窗中展示题目与起始代码，并提供「加载到编辑器」按钮交给父组件应用。
 */
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { aiService } from '@/ai'
import type { ExerciseData } from '@/ai'
import AiResultModal from './AiResultModal'
import Button from '@/components/ui/Button'

export interface AiExerciseGeneratorProps {
  /** 编程语言标识 */
  language: string
  /** 练习主题（默认取语言名） */
  topic?: string
  /** 难度：beginner / intermediate / advanced */
  level?: string
  userId?: string
  /** 生成后回调，父组件将 starterCode 载入编辑器 */
  onGenerated: (exercise: ExerciseData) => void
}

export default function AiExerciseGenerator({
  language,
  topic,
  level = 'beginner',
  userId,
  onGenerated,
}: AiExerciseGeneratorProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [exercise, setExercise] = useState<ExerciseData | null>(null)
  const [error, setError] = useState<string | undefined>(undefined)

  const handleClick = async () => {
    setOpen(true)
    setLoading(true)
    setError(undefined)
    setExercise(null)
    const result = await aiService.generateExercise({
      topic: topic || language,
      level,
      language,
      userId,
    })
    setLoading(false)
    if (result.error) {
      setError(result.error)
    } else {
      setExercise(result.exercise)
    }
  }

  const handleLoad = () => {
    if (exercise) {
      onGenerated(exercise)
      setOpen(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => void handleClick()}
        className="inline-flex items-center gap-1 rounded-md bg-violet-100 px-2.5 py-1.5 text-xs font-medium text-violet-700 transition hover:bg-violet-200"
      >
        🎲 {t('ai.exercise')}
      </button>

      <AiResultModal
        open={open}
        title={t('ai.exerciseTitle')}
        loading={loading}
        error={error}
        onClose={() => setOpen(false)}
        footer={
          exercise ? (
            <div className="flex justify-end">
              <Button variant="primary" onClick={handleLoad}>
                {t('ai.loadToEditor')}
              </Button>
            </div>
          ) : undefined
        }
      >
        {exercise && (
          <div className="space-y-3">
            <div>
              <div className="mb-1 text-xs font-medium text-slate-500">
                {t('ai.exercise')}（{language}）
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                {exercise.prompt}
              </p>
              {exercise.expectedOutput && (
                <p className="mt-1 text-xs text-slate-500">
                  {t('ai.expectedOutput')}：
                  <code className="ml-1 rounded bg-slate-100 px-1 py-0.5">
                    {exercise.expectedOutput}
                  </code>
                </p>
              )}
            </div>
            {exercise.starterCode && (
              <div>
                <div className="mb-1 text-xs font-medium text-slate-500">
                  {t('ai.starterCode')}
                </div>
                <pre className="overflow-auto rounded-lg bg-slate-900 p-3 text-xs leading-relaxed text-slate-100">
                  {exercise.starterCode}
                </pre>
              </div>
            )}
          </div>
        )}
      </AiResultModal>
    </>
  )
}
