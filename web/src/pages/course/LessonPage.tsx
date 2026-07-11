/**
 * 学习页（三阶段学习流程）
 *
 * 路由路径：/lesson/:id
 *
 * 三阶段结构：
 * 1. 学习阶段：Markdown 讲解 + 真实情境
 * 2. 示例阶段：多个可运行示例 + 解释
 * 3. 练习阶段：干净 playground + 题目 + 提示 + 自动判定
 *
 * 顶部：阶段切换 stepper + 上一课/下一课导航 + 标记完成
 */
import { useState, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { findLesson, normalizeLesson } from '@/courses'
import type { CourseContent, Exercise } from '@/courses'
import { getRunner } from '@/runner'
import type { RunResult } from '@/runner'
import CodeEditor from '@/components/editor/CodeEditor'
import RunPanel from '@/components/runner/RunPanel'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import AiHintButton from '@/components/ai/AiHintButton'
import AiExplainButton from '@/components/ai/AiExplainButton'
import AiExerciseGenerator from '@/components/ai/AiExerciseGenerator'
import CourseSidebar from '@/components/course/CourseSidebar'
import { useProgressStore } from '@/store/progressStore'
import { useAuth } from '@/hooks/useAuth'

type Phase = 'learn' | 'examples' | 'practice'

/** 将课程语言映射到 runner / 编辑器语言 */
function toRunnerLanguage(courseLanguage: string): string {
  if (courseLanguage === 'css') return 'html'
  return courseLanguage
}

/** 获取课程内所有课节的扁平列表（用于上一课/下一课导航） */
function getFlatLessonIds(course: CourseContent): string[] {
  return course.chapters.flatMap((ch) => ch.lessons.map((l) => l.id))
}

export function LessonPage() {
  const { id = '' } = useParams<{ id: string }>()
  const found = useMemo(() => findLesson(id), [id])

  const [phase, setPhase] = useState<Phase>('learn')
  const [code, setCode] = useState('')
  const [result, setResult] = useState<RunResult | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0)
  const [shownHints, setShownHints] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const markComplete = useProgressStore((s) => s.markComplete)
  const isCompleted = useProgressStore((s) => s.isCompleted)
  const { user } = useAuth()

  // 课节切换时重置状态
  useEffect(() => {
    if (found?.lesson) {
      setPhase('learn')
      setResult(null)
      setCurrentExerciseIdx(0)
      setShownHints(0)
      const { exercises } = normalizeLesson(found.lesson)
      if (exercises.length > 0) {
        setCode(exercises[0].starter_code)
      } else {
        setCode('')
      }
    }
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!found) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-slate-500">课节不存在</p>
          <Link to="/courses" className="mt-2 inline-block text-sm text-blue-600 hover:underline">
            ← 返回课程列表
          </Link>
        </div>
      </div>
    )
  }

  const { course, lesson } = found
  const runnerLanguage = toRunnerLanguage(course.language)
  const flatIds = getFlatLessonIds(course)
  const currentIndex = flatIds.indexOf(lesson.id)
  const prevId = currentIndex > 0 ? flatIds[currentIndex - 1] : null
  const nextId = currentIndex < flatIds.length - 1 ? flatIds[currentIndex + 1] : null
  const done = isCompleted(lesson.id)

  const { examples, exercises } = normalizeLesson(lesson)
  const currentExercise: Exercise | undefined = exercises[currentExerciseIdx]

  // 自动判定：输出是否匹配预期
  const isPassed =
    result != null &&
    currentExercise?.expected_output &&
    (result.stdout.trim() === currentExercise.expected_output.trim() ||
      (result.output != null && result.output.includes(currentExercise.expected_output)))

  const handleRun = async (codeToRun?: string) => {
    const runner = getRunner(runnerLanguage, 'web')
    if (!runner) {
      setResult({
        stdout: '',
        stderr: '',
        error: `不支持的语言：${runnerLanguage}`,
        mode: 'wasm',
      })
      return
    }
    setIsRunning(true)
    try {
      const res = await runner.run(codeToRun ?? code)
      setResult(res)
    } catch (e) {
      setResult({
        stdout: '',
        stderr: '',
        error: e instanceof Error ? e.message : String(e),
        mode: 'wasm',
      })
    } finally {
      setIsRunning(false)
    }
  }

  const handleMarkComplete = () => {
    markComplete(lesson.id, code)
  }

  const handleExerciseChange = (idx: number) => {
    setCurrentExerciseIdx(idx)
    setShownHints(0)
    setResult(null)
    if (exercises[idx]) {
      setCode(exercises[idx].starter_code)
    }
  }

  const phases: { key: Phase; label: string; icon: string }[] = [
    { key: 'learn', label: '学习', icon: '📖' },
    { key: 'examples', label: '示例', icon: '💡' },
    { key: 'practice', label: '练习', icon: '✏️' },
  ]

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <CourseSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* 顶部导航栏 */}
      <header className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 py-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            aria-label="打开课程目录"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            目录
          </button>
          <span className="text-slate-300">|</span>
          <Link
            to={`/course/${course.slug}`}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            ← {course.title}
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-sm font-medium text-slate-700">{lesson.title}</span>
        </div>

        <div className="flex items-center gap-2">
          {prevId ? (
            <Link to={`/lesson/${prevId}`} className="rounded-md px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100">
              ← 上一课
            </Link>
          ) : (
            <span className="rounded-md px-3 py-1.5 text-sm text-slate-300">← 上一课</span>
          )}

          <button
            type="button"
            onClick={handleMarkComplete}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition ${
              done ? 'bg-green-100 text-green-700' : 'bg-slate-900 text-white hover:bg-slate-700'
            }`}
          >
            {done ? '✓ 已完成' : '标记完成'}
          </button>

          {nextId ? (
            <Link to={`/lesson/${nextId}`} className="rounded-md px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100">
              下一课 →
            </Link>
          ) : (
            <span className="rounded-md px-3 py-1.5 text-sm text-slate-300">下一课 →</span>
          )}
        </div>
      </header>

      {/* 阶段切换 stepper */}
      <div className="flex shrink-0 items-center gap-1 border-b border-slate-200 bg-white px-4 py-2">
        {phases.map((p, idx) => (
          <div key={p.key} className="flex items-center">
            <button
              type="button"
              onClick={() => setPhase(p.key)}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition ${
                phase === p.key
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <span>{p.icon}</span>
              {p.label}
              {p.key === 'examples' && examples.length > 0 && (
                <span className="ml-1 rounded-full bg-slate-200 px-1.5 text-xs text-slate-600">{examples.length}</span>
              )}
              {p.key === 'practice' && exercises.length > 0 && (
                <span className="ml-1 rounded-full bg-slate-200 px-1.5 text-xs text-slate-600">{exercises.length}</span>
              )}
            </button>
            {idx < phases.length - 1 && <span className="mx-1 text-slate-300">→</span>}
          </div>
        ))}
      </div>

      {/* 阶段内容 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 学习阶段 */}
        {phase === 'learn' && (
          <div className="flex-1 overflow-auto bg-white p-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-4 text-2xl font-bold text-slate-800">{lesson.title}</h1>
              <MarkdownRenderer content={lesson.content_md} />

              {/* 真实情境 */}
              {lesson.realWorldScenario && (
                <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <h3 className="mb-2 text-sm font-semibold text-amber-800">🌍 真实情境</h3>
                  <p className="text-sm text-amber-700">{lesson.realWorldScenario}</p>
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setPhase('examples')}
                  className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                >
                  查看示例 →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 示例阶段 */}
        {phase === 'examples' && (
          <div className="flex flex-1 gap-px overflow-hidden bg-slate-200">
            {/* 示例列表 */}
            <div className="w-72 shrink-0 overflow-auto bg-white p-4">
              <h2 className="mb-3 text-sm font-semibold text-slate-700">示例代码</h2>
              {examples.length === 0 ? (
                <p className="text-sm text-slate-400">本节暂无示例</p>
              ) : (
                <div className="space-y-2">
                  {examples.map((ex, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setCode(ex.code)
                        setResult(null)
                      }}
                      className="block w-full rounded-md border border-slate-200 p-3 text-left hover:border-slate-300 hover:bg-slate-50"
                    >
                      <p className="text-sm font-medium text-slate-700">{ex.title}</p>
                      <p className="mt-1 text-xs text-slate-400 line-clamp-2">{ex.explanation}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 代码 + 运行结果 */}
            <div className="flex flex-1 flex-col bg-white">
              <div className="flex flex-1 flex-col">
                <div className="border-b border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500">
                  示例代码 · {runnerLanguage.toUpperCase()}
                </div>
                <div className="flex-1">
                  <CodeEditor value={code} onChange={setCode} language={runnerLanguage} height="100%" />
                </div>
              </div>
              <div className="h-64 shrink-0 border-t border-slate-200">
                <RunPanel result={result} onRun={() => handleRun()} isRunning={isRunning} />
              </div>
            </div>

            {/* 示例解释 */}
            {examples.length > 0 && (
              <div className="w-72 shrink-0 overflow-auto bg-white p-4">
                <h3 className="mb-2 text-sm font-semibold text-slate-700">解释说明</h3>
                <p className="text-sm text-slate-600">
                  {examples.find((e) => e.code === code)?.explanation || '选择左侧示例查看解释'}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => handleRun()}
                    disabled={isRunning}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-50"
                  >
                    {isRunning ? '运行中...' : '▶ 运行示例'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPhase('practice')}
                    className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                  >
                    开始练习 →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 练习阶段 */}
        {phase === 'practice' && (
          <div className="flex flex-1 gap-px overflow-hidden bg-slate-200">
            {/* 左栏：题目 + 提示 */}
            <div className="w-80 shrink-0 overflow-auto bg-white p-4">
              {/* 练习选择器 */}
              {exercises.length > 1 && (
                <div className="mb-4 flex flex-wrap gap-1">
                  {exercises.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleExerciseChange(idx)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                        currentExerciseIdx === idx
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      第 {idx + 1} 题
                    </button>
                  ))}
                </div>
              )}

              {currentExercise ? (
                <>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded bg-blue-200 px-1.5 py-0.5 text-xs text-blue-800">
                        {currentExercise.type === 'output-match' ? '输出匹配' : currentExercise.type === 'unit-test' ? '单元测试' : '开放式'}
                      </span>
                    </div>
                    <h3 className="mb-1 text-sm font-semibold text-blue-800">📝 题目</h3>
                    <p className="text-sm text-blue-700">{currentExercise.prompt}</p>
                    {currentExercise.expected_output && (
                      <div className="mt-2 text-xs text-blue-500">
                        预期输出：<code className="rounded bg-blue-100 px-1 py-0.5">{currentExercise.expected_output}</code>
                      </div>
                    )}
                  </div>

                  {/* 提示 */}
                  {currentExercise.hints.length > 0 && (
                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-slate-700">💡 提示</h3>
                        {shownHints < currentExercise.hints.length && (
                          <button
                            type="button"
                            onClick={() => setShownHints((n) => n + 1)}
                            className="text-xs text-blue-600 hover:underline"
                          >
                            显示提示 ({shownHints}/{currentExercise.hints.length})
                          </button>
                        )}
                      </div>
                      <div className="space-y-2">
                        {currentExercise.hints.slice(0, shownHints).map((hint, idx) => (
                          <div key={idx} className="rounded-md bg-amber-50 p-2 text-xs text-amber-700">
                            {idx + 1}. {hint}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 通过提示 */}
                  {isPassed && (
                    <div className="mt-3 rounded-lg border border-green-200 bg-green-50 p-3">
                      <p className="text-sm font-medium text-green-700">✅ 输出正确！可以标记完成或继续下一课。</p>
                    </div>
                  )}

                  {/* AI 助手 */}
                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <h3 className="mb-2 text-sm font-semibold text-slate-700">AI 助手</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <AiHintButton lessonTitle={lesson.title} code={code} userId={user?.id} />
                      <AiExplainButton code={code} language={runnerLanguage} userId={user?.id} />
                      <AiExerciseGenerator
                        language={runnerLanguage}
                        topic={lesson.title}
                        userId={user?.id}
                        onGenerated={(ex) => setCode(ex.starterCode)}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-sm text-slate-400">本节暂无练习题</p>
              )}
            </div>

            {/* 中栏：干净的 playground */}
            <div className="flex flex-1 flex-col bg-white">
              <div className="border-b border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500">
                Playground · {runnerLanguage.toUpperCase()}
              </div>
              <div className="flex-1">
                <CodeEditor value={code} onChange={setCode} language={runnerLanguage} height="100%" />
              </div>
            </div>

            {/* 右栏：运行结果 */}
            <div className="w-96 shrink-0 bg-white">
              <RunPanel result={result} onRun={() => handleRun()} isRunning={isRunning} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LessonPage
