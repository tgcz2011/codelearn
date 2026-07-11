/**
 * 全局课程目录侧边栏
 *
 * 需求4：做一个课程目录，用户忘了可以回看。
 *
 * 可折叠的抽屉式侧边栏，展示所有课程 → 章节 → 课节的树形结构。
 * - 当前课节高亮
 * - 已完成课节显示 ✓
 * - 点击任意课节直接跳转
 * - 支持课程间切换
 *
 * 在 LessonPage 顶部通过按钮触发开关。
 */
import { useState, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { courses } from '@/courses'
import { useProgressStore } from '@/store/progressStore'

interface CourseSidebarProps {
  /** 当前打开状态 */
  open: boolean
  /** 关闭回调 */
  onClose: () => void
}

/** 语言图标 */
const LANGUAGE_ICONS: Record<string, string> = {
  html: '📄',
  css: '🎨',
  javascript: '📜',
  typescript: '🔷',
  python: '🐍',
  go: '🐹',
  java: '☕',
  rust: '🦀',
  c: '🔧',
  'c++': '⚙️',
}

export default function CourseSidebar({ open, onClose }: CourseSidebarProps) {
  const location = useLocation()
  const isCompleted = useProgressStore((s) => s.isCompleted)

  // 从 URL 提取当前 lesson id（/lesson/:id）
  const currentLessonId = useMemo(() => {
    const match = location.pathname.match(/^\/lesson\/(.+)$/)
    return match ? match[1] : ''
  }, [location.pathname])

  // 默认展开当前课节所属的课程
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(() => {
    const initial = new Set<string>()
    for (const course of courses) {
      const hasCurrent = course.chapters.some((ch) =>
        ch.lessons.some((l) => l.id === currentLessonId),
      )
      if (hasCurrent) initial.add(course.id)
    }
    // 默认展开第一门课程
    if (initial.size === 0 && courses.length > 0) {
      initial.add(courses[0].id)
    }
    return initial
  })

  const toggleCourse = (courseId: string) => {
    setExpandedCourses((prev) => {
      const next = new Set(prev)
      if (next.has(courseId)) {
        next.delete(courseId)
      } else {
        next.add(courseId)
      }
      return next
    })
  }

  /** 统计课程完成进度 */
  const getProgress = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId)
    if (!course) return { done: 0, total: 0 }
    let done = 0
    let total = 0
    for (const ch of course.chapters) {
      for (const l of ch.lessons) {
        total++
        if (isCompleted(l.id)) done++
      }
    }
    return { done, total }
  }

  return (
    <>
      {/* 遮罩层 */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/30 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* 侧边栏抽屉 */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-80 flex-col bg-white shadow-xl transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* 头部 */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-3">
          <h2 className="text-sm font-semibold text-slate-800">📚 课程目录</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="关闭目录"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 课程树 */}
        <div className="flex-1 overflow-y-auto px-2 py-2">
          {courses.map((course) => {
            const icon = LANGUAGE_ICONS[course.language] ?? '📘'
            const expanded = expandedCourses.has(course.id)
            const { done, total } = getProgress(course.id)
            const pct = total > 0 ? Math.round((done / total) * 100) : 0

            return (
              <div key={course.id} className="mb-1">
                {/* 课程标题行 */}
                <button
                  type="button"
                  onClick={() => toggleCourse(course.id)}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-slate-50"
                >
                  <span className="text-base">{icon}</span>
                  <span className="flex-1 truncate font-medium text-slate-700">
                    {course.title}
                  </span>
                  <span className="shrink-0 text-xs text-slate-400">
                    {done}/{total}
                  </span>
                  <svg
                    className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform ${expanded ? 'rotate-90' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* 进度条 */}
                {expanded && (
                  <div className="mx-3 mb-1 h-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}

                {/* 章节和课节 */}
                {expanded && (
                  <div className="ml-3 border-l border-slate-100 pl-2">
                    {course.chapters.map((chapter) => (
                      <div key={chapter.id} className="mb-1">
                        <div className="px-2 py-1 text-xs font-medium text-slate-400">
                          {chapter.title}
                        </div>
                        {chapter.lessons.map((lesson, lIdx) => {
                          const completed = isCompleted(lesson.id)
                          const isCurrent = lesson.id === currentLessonId
                          return (
                            <Link
                              key={lesson.id}
                              to={`/lesson/${lesson.id}`}
                              onClick={onClose}
                              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition ${
                                isCurrent
                                  ? 'bg-blue-50 font-medium text-blue-700'
                                  : 'text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                                  completed
                                    ? 'bg-green-500 text-white'
                                    : 'bg-slate-100 text-slate-400'
                                }`}
                              >
                                {completed ? '✓' : lIdx + 1}
                              </span>
                              <span className="truncate">{lesson.title}</span>
                            </Link>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* 底部链接 */}
        <div className="shrink-0 border-t border-slate-200 px-4 py-3">
          <Link
            to="/courses"
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-600"
          >
            ← 返回课程列表
          </Link>
        </div>
      </aside>
    </>
  )
}
