/**
 * 用量统计页
 *
 * 展示 API 调用统计：
 * - 汇总卡片：总调用次数、总费用、输入/输出 Tokens
 * - 按类型/提供商/模型分组的明细表
 * - 近 30 天每日用量表
 * - 管理员可切换"管理员视图"查看全部用户统计
 *
 * 通过 supabase.rpc 调用后端聚合函数，前端不再二次聚合。
 */
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { supabase } from '@/services/supabase/client'
import { useAuthStore } from '@/store/authStore'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

interface UsageStat {
  call_type: string | null
  provider: string | null
  model: string | null
  call_count: number
  input_tokens: number
  output_tokens: number
  cost: number
  is_custom: boolean | null
  user_email: string | null
}

interface DailyUsage {
  date: string
  call_count: number
  cost: number
}

/** 从未知值中提取数字，容错字符串/undefined */
function num(v: unknown): number {
  if (typeof v === 'number') return v
  if (typeof v === 'string' && v !== '') {
    const n = Number(v)
    return Number.isFinite(n) ? n : 0
  }
  return 0
}

/** 从原始行中按候选键名提取第一个非空值 */
function pick(row: Record<string, unknown>, keys: string[]): unknown {
  for (const k of keys) {
    if (row[k] !== undefined && row[k] !== null) return row[k]
  }
  return undefined
}

function normalizeStat(row: Record<string, unknown>): UsageStat {
  return {
    call_type: (pick(row, ['call_type', 'callType', 'type']) as string) ?? null,
    provider: (pick(row, ['provider']) as string) ?? null,
    model: (pick(row, ['model', 'model_id', 'modelId']) as string) ?? null,
    call_count: num(pick(row, ['call_count', 'callCount', 'calls', 'total_calls'])),
    input_tokens: num(
      pick(row, ['input_tokens', 'inputTokens', 'prompt_tokens', 'promptTokens']),
    ),
    output_tokens: num(
      pick(row, ['output_tokens', 'outputTokens', 'completion_tokens', 'completionTokens']),
    ),
    cost: num(pick(row, ['cost', 'total_cost', 'totalCost'])),
    is_custom: (pick(row, ['is_custom', 'isCustom', 'custom']) as boolean) ?? null,
    user_email:
      (pick(row, ['user_email', 'userEmail', 'email']) as string) ?? null,
  }
}

function normalizeDaily(row: Record<string, unknown>): DailyUsage {
  return {
    date: String(pick(row, ['date', 'day', 'd']) ?? ''),
    call_count: num(pick(row, ['call_count', 'callCount', 'calls'])),
    cost: num(pick(row, ['cost', 'total_cost', 'totalCost'])),
  }
}

export default function StatsPage() {
  const isAdmin = useAuthStore((s) => s.isAdmin)

  const [includeCustom, setIncludeCustom] = useState(false)
  const [adminView, setAdminView] = useState(false)
  const [stats, setStats] = useState<UsageStat[]>([])
  const [daily, setDaily] = useState<DailyUsage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rpcName = adminView ? 'admin_get_usage_stats' : 'get_user_usage_stats'
      const [statsRes, dailyRes] = await Promise.all([
        supabase.rpc(rpcName, { pIncludeCustom: includeCustom }),
        supabase.rpc('get_usage_timeseries', { pDays: 30 }),
      ])
      if (statsRes.error) throw statsRes.error
      if (dailyRes.error) throw dailyRes.error
      const rawStats = (statsRes.data ?? []) as Record<string, unknown>[]
      const rawDaily = (dailyRes.data ?? []) as Record<string, unknown>[]
      setStats(rawStats.map(normalizeStat))
      setDaily(
        rawDaily
          .map(normalizeDaily)
          .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)),
      )
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      if (
        msg.includes('Failed to fetch') ||
        msg.includes('function') && msg.includes('does not exist')
      ) {
        setError('后端统计函数不可用，请确认数据库已部署相关 RPC。')
      } else {
        setError(`加载失败：${msg}`)
      }
    } finally {
      setLoading(false)
    }
  }, [adminView, includeCustom])

  useEffect(() => {
    void load()
  }, [load])

  // 汇总：从已加载的明细行累加
  const summary = useMemo(() => {
    return stats.reduce(
      (acc, r) => {
        acc.calls += r.call_count
        acc.cost += r.cost
        acc.inputTokens += r.input_tokens
        acc.outputTokens += r.output_tokens
        return acc
      },
      { calls: 0, cost: 0, inputTokens: 0, outputTokens: 0 },
    )
  }, [stats])

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
        <Button variant="secondary" className="mt-3" onClick={() => void load()}>
          重试
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 顶部控制栏 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={includeCustom}
              onChange={(e) => setIncludeCustom(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-400"
            />
            包含自定义模型
          </label>
          {isAdmin && (
            <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={adminView}
                onChange={(e) => setAdminView(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-400"
              />
              管理员视图（全部用户）
            </label>
          )}
        </div>
        <Button
          variant="secondary"
          className="px-3 py-1.5 text-xs"
          onClick={() => void load()}
        >
          刷新
        </Button>
      </div>

      {/* 汇总卡片 */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <SummaryCard label="总调用次数" value={summary.calls.toLocaleString()} />
        <SummaryCard
          label="总费用 ($)"
          value={summary.cost.toFixed(4)}
          accent="text-emerald-600"
        />
        <SummaryCard
          label="输入 Tokens"
          value={summary.inputTokens.toLocaleString()}
        />
        <SummaryCard
          label="输出 Tokens"
          value={summary.outputTokens.toLocaleString()}
        />
      </div>

      {/* 明细表 */}
      <div className="rounded-lg border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-800">调用明细</h3>
          <p className="mt-0.5 text-xs text-slate-500">
            按类型 / 提供商 / 模型分组
          </p>
        </div>
        {stats.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-400">
            暂无调用记录
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <Th>类型</Th>
                  <Th>提供商</Th>
                  <Th>模型</Th>
                  <Th className="text-right">调用次数</Th>
                  <Th className="text-right">输入 Tokens</Th>
                  <Th className="text-right">输出 Tokens</Th>
                  <Th className="text-right">费用 ($)</Th>
                  <Th>自定义</Th>
                  {adminView && <Th>用户</Th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {stats.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <Td className="font-medium text-slate-800">
                      {r.call_type ?? '-'}
                    </Td>
                    <Td>{r.provider ?? '-'}</Td>
                    <Td className="text-slate-600">{r.model ?? '-'}</Td>
                    <Td className="text-right tabular-nums">
                      {r.call_count.toLocaleString()}
                    </Td>
                    <Td className="text-right tabular-nums">
                      {r.input_tokens.toLocaleString()}
                    </Td>
                    <Td className="text-right tabular-nums">
                      {r.output_tokens.toLocaleString()}
                    </Td>
                    <Td className="text-right tabular-nums">
                      {r.cost.toFixed(4)}
                    </Td>
                    <Td>
                      {r.is_custom ? (
                        <Badge className="bg-amber-100 text-amber-700">是</Badge>
                      ) : (
                        <span className="text-slate-400">否</span>
                      )}
                    </Td>
                    {adminView && (
                      <Td className="text-slate-500">{r.user_email ?? '-'}</Td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 每日用量表 */}
      <div className="rounded-lg border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-800">每日用量（近 30 天）</h3>
        </div>
        {daily.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-400">
            暂无每日数据
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <Th>日期</Th>
                  <Th className="text-right">调用次数</Th>
                  <Th className="text-right">费用 ($)</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {daily.map((d) => (
                  <tr key={d.date} className="hover:bg-slate-50">
                    <Td className="font-medium text-slate-700">{d.date}</Td>
                    <Td className="text-right tabular-nums">
                      {d.call_count.toLocaleString()}
                    </Td>
                    <Td className="text-right tabular-nums">
                      {d.cost.toFixed(4)}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

function SummaryCard({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent?: string
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className={`mt-1 text-xl font-semibold ${accent ?? 'text-slate-800'}`}>
        {value}
      </p>
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
