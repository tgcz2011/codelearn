/**
 * 学习页
 *
 * 由 router 引入：`import { LessonPage } from '@/pages/course/LessonPage'`
 * 路由路径：/lesson/:id
 *
 * 三栏布局：
 * - 左：课节标题 + content_md 讲解（MarkdownRenderer）
 * - 中：CodeEditor（加载 exercise.starter_code）
 * - 右：RunPanel（运行按钮调 getRunner(language).run(code)）
 * - 顶部：上一课/下一课导航、"标记完成"按钮
 */
import { useState, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { findLesson } from '@/courses'
import type { CourseContent } from '@/courses'
import { getRunner } from '@/runner'
import type { RunResult } from '@/runner'
import CodeEditor from '@/components/editor/CodeEditor'
import RunPanel from '@/components/runner/RunPanel'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import AiHintButton from '@/components/ai/AiHintButton'
import AiExplainButton from '@/components/ai/AiExplainButton'
import AiExerciseGenerator from '@/components/ai/AiExerciseGenerator'
import { useProgressStore } from '@/store/progressStore'
import { useAuth } from '@/hooks/useAuth'

/**
 * 将课程语言映射到 runner / 编辑器语言。
 * CSS 代码以 HTML 文档形式编写（内联 <style>），通过 HTML runner 渲染预览。
 */
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

  const [code, setCode] = useState('')
  const [result, setResult] = useState<RunResult | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  const markComplete = useProgressStore((s) => s.markComplete)
  const isCompleted = useProgressStore((s) => s.isCompleted)
  const { user } = useAuth()

  // 课节切换时重置代码和结果
  useEffect(() => {
    if (found?.lesson) {
      setCode(found.lesson.exercise.starter_code)
      setResult(null)
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

  // 自动判定：输出是否匹配预期
  const isPassed =
    result != null &&
    (result.stdout.trim() === lesson.exercise.expected_output.trim() ||
      (result.output != null && result.output.includes(lesson.exercise.expected_output)))

  const handleRun = async () => {
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
      const res = await runner.run(code)
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

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      {/* 顶部导航栏 */}
      <header className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 py-2">
        <div className="flex items-center gap-3">
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
          {/* 上一课 */}
          {prevId ? (
            <Link
              to={`/lesson/${prevId}`}
              className="rounded-md px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
            >
              ← 上一课
            </Link>
          ) : (
            <span className="rounded-md px-3 py-1.5 text-sm text-slate-300">← 上一课</span>
          )}

          {/* AI 助手：提示 / 解释 / 再来一题 */}
          <div className="flex items-center gap-1.5 border-x border-slate-200 px-2">
            <AiHintButton
              lessonTitle={lesson.title}
              code={code}
              userId={user?.id}
            />
            <AiExplainButton
              code={code}
              language={runnerLanguage}
              userId={user?.id}
            />
            <AiExerciseGenerator
              language={runnerLanguage}
              topic={lesson.title}
              userId={user?.id}
              onGenerated={(ex) => setCode(ex.starterCode)}
            />
          </div>

          {/* 标记完成 */}
          <button
            type="button"
            onClick={handleMarkComplete}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition ${
              done
                ? 'bg-green-100 text-green-700'
                : 'bg-slate-900 text-white hover:bg-slate-700'
            }`}
          >
            {done ? '✓ 已完成' : '标记完成'}
          </button>

          {/* 下一课 */}
          {nextId ? (
            <Link
              to={`/lesson/${nextId}`}
              className="rounded-md px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
            >
              下一课 →
            </Link>
          ) : (
            <span className="rounded-md px-3 py-1.5 text-sm text-slate-300">下一课 →</span>
          )}
        </div>
      </header>

      {/* 三栏内容区 */}
      <div className="flex flex-1 gap-px overflow-hidden bg-slate-200">
        {/* 左栏：讲解内容 */}
        <div className="w-80 shrink-0 overflow-auto bg-white p-4">
          <h1 className="mb-3 text-lg font-bold text-slate-800">{lesson.title}</h1>
          <MarkdownRenderer content={lesson.content_md} />

          {/* 练习说明 */}
          <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-3">
            <h3 className="mb-1 text-sm font-semibold text-blue-800">📝 练习</h3>
            <p className="text-sm text-blue-700">{lesson.exercise.prompt}</p>
            <div className="mt-2 text-xs text-blue-500">
              预期输出：<code className="rounded bg-blue-100 px-1 py-0.5">{lesson.exercise.expected_output}</code>
            </div>
          </div>

          {/* 通过提示 */}
          {isPassed && (
            <div className="mt-3 rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="text-sm font-medium text-green-700">
                ✅ 输出正确！可以标记完成或继续下一课。
              </p>
            </div>
          )}

          {/* 示例代码参考 */}
          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-slate-500 hover:text-slate-700">
              查看示例代码
            </summary>
            <pre className="mt-2 overflow-auto rounded-lg bg-slate-900 p-3 text-xs leading-relaxed text-slate-100">
              {lesson.example_code}
            </pre>
          </details>
        </div>

        {/* 中栏：代码编辑器 */}
        <div className="flex flex-1 flex-col bg-white">
          <div className="border-b border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500">
            代码编辑器 · {runnerLanguage.toUpperCase()}
          </div>
          <div className="flex-1">
            <CodeEditor
              value={code}
              onChange={setCode}
              language={runnerLanguage}
              height="100%"
            />
          </div>
        </div>

        {/* 右栏：运行结果 */}
        <div className="w-96 shrink-0 bg-white">
          <RunPanel result={result} onRun={handleRun} isRunning={isRunning} />
        </div>
      </div>
    </div>
  )
}

export default LessonPage
