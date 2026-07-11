/**
 * 课程列表页
 *
 * 由 router 引入：`import { CoursesPage } from '@/pages/course/CoursesPage'`
 * 路由路径：/courses
 *
 * 展示所有可用课程（六门语言），点击卡片进入课程详情。
 */
import { Link } from 'react-router-dom'
import { courses } from '@/courses'
import type { CourseContent, CourseDifficulty } from '@/courses'

/** 语言图标映射 */
const LANGUAGE_ICONS: Record<string, string> = {
  html: '📄',
  css: '🎨',
  javascript: '📜',
  typescript: '🔷',
  python: '🐍',
  go: '🐹',
  cpp: '⚙️',
  java: '☕',
  rust: '🦀',
}

/** 难度标签：文案 + 颜色 */
const DIFFICULTY_LABELS: Record<CourseDifficulty, { text: string; cls: string }> = {
  beginner: { text: '入门', cls: 'bg-green-100 text-green-700' },
  intermediate: { text: '进阶', cls: 'bg-yellow-100 text-yellow-700' },
  advanced: { text: '高级', cls: 'bg-red-100 text-red-700' },
}

/** 统计课程总课节数 */
function countLessons(course: CourseContent): number {
  return course.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)
}

export function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页头 */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="text-3xl font-bold text-slate-800">课程中心</h1>
          <p className="mt-2 text-slate-500">
            选择一门语言开始学习，从入门到实战，边学边练。
          </p>
        </div>
      </header>

      {/* 课程卡片网格 */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const icon = LANGUAGE_ICONS[course.language] ?? '📘'
            const diff = DIFFICULTY_LABELS[course.difficulty]
            const lessonCount = countLessons(course)
            return (
              <Link
                key={course.id}
                to={`/course/${course.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              >
                {/* 图标 + 难度 */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{icon}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${diff.cls}`}>
                    {diff.text}
                  </span>
                </div>

                {/* 标题 */}
                <h2 className="mt-4 text-lg font-semibold text-slate-800 group-hover:text-blue-600">
                  {course.title}
                </h2>

                {/* 描述 */}
                <p className="mt-1.5 line-clamp-2 text-sm text-slate-500">
                  {course.description}
                </p>

                {/* 统计信息 */}
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                  <span>{course.chapters.length} 章</span>
                  <span>·</span>
                  <span>{lessonCount} 课节</span>
                </div>

                {/* 进入按钮 */}
                <div className="mt-4 text-sm font-medium text-blue-600">
                  开始学习 →
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default CoursesPage
