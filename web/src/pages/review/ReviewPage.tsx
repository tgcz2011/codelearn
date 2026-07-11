/**
 * 复习页（遗忘曲线 / SM-2 间隔重复）
 *
 * 路由路径：/review
 *
 * 展示今日到期的复习条目，用户可展开课节内容进行回顾，
 * 并根据回忆质量（0-5）评分，系统按 SM-2 算法调度下次复习时间。
 * 同时展示复习统计：总条目、今日待复习、即将复习。
 */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useReviewStore } from '@/store/reviewStore'
import type { ReviewItem } from '@/store/reviewStore'
import { findLesson } from '@/courses'
import MarkdownRenderer from '@/components/MarkdownRenderer'

/** 回忆质量评分选项（SM-2 quality 0-5） */
const QUALITY_OPTIONS: { value: number; label: string; hint: string }[] = [
  { value: 0, label: '完全忘了', hint: '毫无印象' },
  { value: 2, label: '模糊记得', hint: '有印象但想不起来' },
  { value: 3, label: '想了很久才记起', hint: '经过思考后回忆起来' },
  { value: 5, label: '轻松记起', hint: '完全不费力' },
]

/** 返回今日日期（YYYY-MM-DD，本地时区） */
function todayStr(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function ReviewPage() {
  const { user } = useAuth()
  const reviews = useReviewStore((s) => s.reviews)
  const loading = useReviewStore((s) => s.loading)
  const loadAllReviews = useReviewStore((s) => s.loadAllReviews)
  const submitReview = useReviewStore((s) => s.submitReview)

  /** 本次会话中已评分的课节：lessonId → 下次复习日期 */
  const [reviewed, setReviewed] = useState<Record<string, string>>({})
  /** 已展开进行回顾的课节 */
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (user?.id) {
      void loadAllReviews(user.id)
    }
  }, [user?.id, loadAllReviews])

  const today = todayStr()
  const dueReviews = reviews.filter((r) => r.next_review_date <= today)
  const upcoming = reviews.filter((r) => r.next_review_date > today)
  const pendingDue = dueReviews.filter((r) => !reviewed[r.lesson_id])

  const handleRate = async (lessonId: string, quality: number) => {
    await submitReview(lessonId, quality)
    const updated = useReviewStore
      .getState()
      .reviews.find((r) => r.lesson_id === lessonId)
    setReviewed((prev) => ({
      ...prev,
      [lessonId]: updated?.next_review_date ?? '',
    }))
  }

  const toggleExpand = (lessonId: string) => {
    setExpanded((prev) => ({ ...prev, [lessonId]: !prev[lessonId] }))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="text-sm text-slate-500 hover:text-slate-800 hover:underline"
          >
            ← 返回首页
          </Link>
          <h1 className="text-lg font-semibold text-slate-800">复习</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-8">
        {/* 统计卡片 */}
        <section className="grid grid-cols-3 gap-3">
          <StatCard label="总复习条目" value={reviews.length} />
          <StatCard
            label="今日待复习"
            value={pendingDue.length}
            highlight={pendingDue.length > 0}
          />
          <StatCard label="即将复习" value={upcoming.length} />
        </section>

        {/* 待复习列表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-slate-800">
            今日复习
          </h2>

          {loading ? (
            <p className="py-8 text-center text-sm text-slate-400">
              加载中…
            </p>
          ) : pendingDue.length === 0 ? (
            <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 py-10 text-center">
              <p className="text-sm text-slate-500">
                今天没有需要复习的内容！
              </p>
              <Link
                to="/courses"
                className="mt-3 inline-block text-sm text-blue-600 hover:underline"
              >
                去学习新课程 →
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {pendingDue.map((item) => (
                <DueCard
                  key={item.lesson_id}
                  item={item}
                  expanded={Boolean(expanded[item.lesson_id])}
                  onToggle={() => toggleExpand(item.lesson_id)}
                  onRate={(q) => void handleRate(item.lesson_id, q)}
                />
              ))}
            </ul>
          )}
        </section>

        {/* 已复习（本次会话） */}
        {Object.keys(reviewed).length > 0 && (
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-slate-800">
              已复习（本次）
            </h2>
            <ul className="space-y-2">
              {Object.entries(reviewed).map(([lessonId, nextDate]) => {
                const found = findLesson(lessonId)
                return (
                  <li
                    key={lessonId}
                    className="flex items-center justify-between rounded-md bg-green-50 px-3 py-2 text-sm"
                  >
                    <span className="text-slate-700">
                      ✓ {found?.lesson.title ?? lessonId}
                    </span>
                    <span className="text-xs text-green-700">
                      下次复习：{nextDate}
                    </span>
                  </li>
                )
              })}
            </ul>
          </section>
        )}

        {/* 即将复习 */}
        {upcoming.length > 0 && (
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-slate-800">
              即将复习
            </h2>
            <ul className="divide-y divide-slate-100">
              {upcoming.map((item) => {
                const found = findLesson(item.lesson_id)
                return (
                  <li
                    key={item.lesson_id}
                    className="flex items-center justify-between py-2 text-sm"
                  >
                    <span className="text-slate-600">
                      {found?.lesson.title ?? item.lesson_id}
                    </span>
                    <span className="text-xs text-slate-400">
                      {item.next_review_date}
                    </span>
                  </li>
                )
              })}
            </ul>
          </section>
        )}
      </main>
    </div>
  )
}

/** 统计小卡片 */
function StatCard({
  label,
  value,
  highlight,
}: {
  label: string
  value: number
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-4 text-center shadow-sm ${
        highlight
          ? 'border-amber-200 bg-amber-50'
          : 'border-slate-200 bg-white'
      }`}
    >
      <div
        className={`text-2xl font-bold ${
          highlight ? 'text-amber-700' : 'text-slate-800'
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-xs text-slate-500">{label}</div>
    </div>
  )
}

/** 待复习课节卡片 */
function DueCard({
  item,
  expanded,
  onToggle,
  onRate,
}: {
  item: ReviewItem
  expanded: boolean
  onToggle: () => void
  onRate: (quality: number) => void
}) {
  const found = findLesson(item.lesson_id)
  const lessonTitle = found?.lesson.title ?? item.lesson_id
  const courseTitle = found?.course.title

  return (
    <li className="rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-slate-800">
            {lessonTitle}
          </p>
          {courseTitle && (
            <p className="mt-0.5 truncate text-xs text-slate-400">
              {courseTitle}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="shrink-0 rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-700"
        >
          {expanded ? '收起' : '复习'}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-slate-100 bg-slate-50 p-4">
          {/* 课节内容回顾 */}
          {found?.lesson.content_md ? (
            <div className="mb-4 max-h-72 overflow-auto rounded-md bg-white p-3 text-sm">
              <MarkdownRenderer content={found.lesson.content_md} />
            </div>
          ) : (
            <p className="mb-4 text-sm text-slate-400">暂无可回顾的内容。</p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link
              to={`/lesson/${item.lesson_id}`}
              className="text-xs text-blue-600 hover:underline"
            >
              打开完整课程 →
            </Link>
            <span className="text-xs text-slate-400">
              上次复习：{item.last_review_date ?? '—'} · 已复习{' '}
              {item.repetition_count} 次
            </span>
          </div>

          {/* 评分按钮 */}
          <div className="mt-3">
            <p className="mb-2 text-xs font-medium text-slate-600">
              你对这节课的回忆程度？
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {QUALITY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onRate(opt.value)}
                  className="rounded-md border border-slate-200 bg-white px-2 py-2 text-center text-xs font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  <div>{opt.label}</div>
                  <div className="mt-0.5 text-[10px] text-slate-400">
                    {opt.hint}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  )
}

export default ReviewPage
