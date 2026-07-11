/**
 * 课程详情页
 *
 * 由 router 引入：`import { CourseDetailPage } from '@/pages/course/CourseDetailPage'`
 * 路由路径：/course/:slug
 *
 * 两栏布局：
 * - 左：章节树（可切换章节），显示每章完成进度
 * - 右：当前章节下的课节列表，点击进入学习页
 */
import { useState, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCourseBySlug } from '@/courses'
import { useProgressStore } from '@/store/progressStore'
import CourseSidebar from '@/components/course/CourseSidebar'

export function CourseDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const course = useMemo(() => getCourseBySlug(slug), [slug])

  const [activeChapterIdx, setActiveChapterIdx] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const loadProgress = useProgressStore((s) => s.loadProgress)
  const isCompleted = useProgressStore((s) => s.isCompleted)

  // 切换课程时加载进度并重置到第一章
  useEffect(() => {
    if (slug) {
      void loadProgress(slug)
    }
    setActiveChapterIdx(0)
  }, [slug]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-slate-500">课程不存在</p>
          <Link
            to="/courses"
            className="mt-2 inline-block text-sm text-blue-600 hover:underline"
          >
            ← 返回课程列表
          </Link>
        </div>
      </div>
    )
  }

  const activeChapter = course.chapters[activeChapterIdx] ?? course.chapters[0]

  /** 统计一组课节中已完成数 */
  const countCompleted = (lessonIds: string[]): number => {
    return lessonIds.filter((id) => isCompleted(id)).length
  }

  /** 统计课程总完成数 */
  const totalLessons = course.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)
  const totalCompleted = course.chapters.reduce(
    (sum, ch) => sum + countCompleted(ch.lessons.map((l) => l.id)),
    0,
  )

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <CourseSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* 顶部课程信息 */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              aria-label="打开课程目录"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              目录
            </button>
            <span className="text-slate-300">|</span>
            <Link
              to="/courses"
              className="text-sm text-slate-400 hover:text-slate-600"
            >
              ← 课程列表
            </Link>
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{course.title}</h1>
              <p className="mt-1 text-sm text-slate-500">{course.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">学习进度</div>
              <div className="text-lg font-semibold text-blue-600">
                {totalCompleted} / {totalLessons}
              </div>
            </div>
          </div>
          {/* 进度条 */}
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-500 transition-all"
              style={{
                width: `${totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      </header>

      {/* 两栏：章节树 + 课节列表 */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-px overflow-hidden bg-slate-200">
        {/* 左栏：章节树 */}
        <aside className="w-64 shrink-0 overflow-auto bg-white p-4">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            章节目录
          </h2>
          <ul className="space-y-1">
            {course.chapters.map((ch, idx) => {
              const done = countCompleted(ch.lessons.map((l) => l.id))
              const total = ch.lessons.length
              const isActive = idx === activeChapterIdx
              return (
                <li key={ch.id}>
                  <button
                    type="button"
                    onClick={() => setActiveChapterIdx(idx)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                      isActive
                        ? 'bg-blue-50 font-medium text-blue-700'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="truncate">
                      <span className="mr-1.5 text-slate-400">{idx + 1}.</span>
                      {ch.title}
                    </span>
                    <span
                      className={`ml-2 shrink-0 rounded-full px-1.5 py-0.5 text-xs ${
                        done === total
                          ? 'bg-green-100 text-green-600'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {done}/{total}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </aside>

        {/* 右栏：当前章节的课节列表 */}
        <main className="flex-1 overflow-auto bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-800">
            {activeChapter.title}
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            共 {activeChapter.lessons.length} 个课节
          </p>

          <ul className="mt-5 space-y-2">
            {activeChapter.lessons.map((lesson, idx) => {
              const done = isCompleted(lesson.id)
              return (
                <li key={lesson.id}>
                  <Link
                    to={`/lesson/${lesson.id}`}
                    className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50/40"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                          done
                            ? 'bg-green-500 text-white'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {done ? '✓' : idx + 1}
                      </span>
                      <span className="text-sm font-medium text-slate-700">
                        {lesson.title}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">学习 →</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </main>
      </div>
    </div>
  )
}

export default CourseDetailPage
