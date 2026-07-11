/**
 * 课程管理（管理员）
 *
 * 展示所有课程的概览统计，并可控制课程的可见性。
 * 课程内容来自静态 TS 文件，统计数据来自数据库。
 */
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { courses } from '@/courses'
import { supabase } from '@/services/supabase/client'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

interface CourseStat {
  language: string
  title: string
  difficulty: string
  chapters: number
  lessons: number
  visible: boolean
  completedCount: number
}

export default function CourseManagement() {
  const [stats, setStats] = useState<CourseStat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [busyLang, setBusyLang] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      // 加载课程可见性配置
      let visMap: Record<string, boolean> = {}
      try {
        const { data: visData, error: visError } = await supabase.rpc(
          'get_course_visibility',
        )
        if (!visError && visData && typeof visData === 'object') {
          visMap = visData as Record<string, boolean>
        }
      } catch {
        // 后端不可达时使用默认值
      }

      // 加载课程完成统计
      const lessonStats: Record<string, number> = {}
      try {
        const { data: statsData, error: statsError } = await supabase.rpc(
          'get_course_stats',
        )
        if (!statsError && statsData) {
          for (const row of statsData as { lesson_id: string; completed_count: number }[]) {
            lessonStats[row.lesson_id] = row.completed_count
          }
        }
      } catch {
        // 后端不可达时统计为 0
      }

      // 从静态课程数据构建统计
      const courseStats: CourseStat[] = courses.map((c) => {
        const lessonCount = c.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)
        // 统计该课程所有 lesson 的完成总数
        const completedCount = c.chapters
          .flatMap((ch) => ch.lessons)
          .reduce((sum, l) => sum + (lessonStats[l.id] || 0), 0)

        return {
          language: c.language,
          title: c.title,
          difficulty: c.difficulty,
          chapters: c.chapters.length,
          lessons: lessonCount,
          visible: visMap[c.language] !== false, // 默认可见
          completedCount,
        }
      })

      setStats(courseStats)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setError(`加载失败：${msg}`)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  async function toggleVisibility(lang: string, current: boolean) {
    setBusyLang(lang)
    try {
      const { error: rpcError } = await supabase.rpc('set_course_visibility', {
        p_language: lang,
        p_visible: !current,
      })
      if (rpcError) throw rpcError

      setStats((prev) =>
        prev.map((s) =>
          s.language === lang ? { ...s, visible: !current } : s,
        ),
      )
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setError(`操作失败：${msg}`)
    } finally {
      setBusyLang(null)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-800">{error}</p>
        <Button
          variant="secondary"
          className="mt-3"
          onClick={() => void load()}
        >
          重试
        </Button>
      </div>
    )
  }

  const totalLessons = stats.reduce((sum, s) => sum + s.lessons, 0)
  const visibleCount = stats.filter((s) => s.visible).length
  const totalCompletions = stats.reduce((sum, s) => sum + s.completedCount, 0)

  return (
    <div className="space-y-4">
      {/* 概览统计 */}
      <div className="grid grid-cols-4 gap-3">
        <StatCard label="课程总数" value={stats.length} />
        <StatCard label="可见课程" value={visibleCount} />
        <StatCard label="课时总数" value={totalLessons} />
        <StatCard label="累计完成" value={totalCompletions} />
      </div>

      {/* 课程列表 */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <Th>课程</Th>
              <Th>语言</Th>
              <Th>难度</Th>
              <Th>章节</Th>
              <Th>课时</Th>
              <Th>完成数</Th>
              <Th>可见性</Th>
              <Th className="text-right">操作</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {stats.map((s) => (
              <tr key={s.language} className="hover:bg-slate-50">
                <Td className="font-medium text-slate-800">{s.title}</Td>
                <Td>
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600">
                    {s.language}
                  </code>
                </Td>
                <Td>
                  <Badge
                    className={
                      s.difficulty === 'beginner'
                        ? 'bg-emerald-100 text-emerald-700'
                        : s.difficulty === 'intermediate'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-rose-100 text-rose-700'
                    }
                  >
                    {s.difficulty === 'beginner'
                      ? '入门'
                      : s.difficulty === 'intermediate'
                        ? '中级'
                        : '高级'}
                  </Badge>
                </Td>
                <Td>{s.chapters}</Td>
                <Td>{s.lessons}</Td>
                <Td>{s.completedCount}</Td>
                <Td>
                  {s.visible ? (
                    <Badge className="bg-emerald-100 text-emerald-700">可见</Badge>
                  ) : (
                    <Badge className="bg-slate-200 text-slate-500">隐藏</Badge>
                  )}
                </Td>
                <Td className="text-right">
                  <Button
                    variant={s.visible ? 'danger' : 'secondary'}
                    loading={busyLang === s.language}
                    onClick={() => void toggleVisibility(s.language, s.visible)}
                    className="px-2.5 py-1 text-xs"
                  >
                    {s.visible ? '隐藏' : '显示'}
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 说明 */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h4 className="text-xs font-semibold text-slate-700">说明</h4>
        <ul className="mt-2 space-y-1 text-xs text-slate-500">
          <li>• 课程内容来自静态 TypeScript 文件，修改需提交代码</li>
          <li>• 隐藏课程后，该课程不再显示在课程列表中，但已学习进度的用户不受影响</li>
          <li>• "完成数"为所有用户在该课程中完成的课时总数</li>
        </ul>
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-800">{value}</p>
    </div>
  )
}

function Th({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <th
      className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 ${className}`}
    >
      {children}
    </th>
  )
}

function Td({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <td className={`px-4 py-3 text-sm text-slate-700 ${className}`}>{children}</td>
}

function Badge({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  )
}
