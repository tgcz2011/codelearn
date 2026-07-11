/**
 * 余额管理（管理员）
 *
 * 列出所有用户余额，支持：
 * - 充值（增加余额）
 * - 设置余额（直接设定为指定值）
 * - 封禁 / 解封用户
 *
 * 通过 supabase.rpc 调用后端 admin_* 函数。
 * 管理员账号不可被封禁（按钮禁用）。
 */
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { supabase } from '@/services/supabase/client'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

interface BalanceRow {
  user_id: string
  email: string
  display_name: string
  balance: number
  total_recharged: number
  total_consumed: number
  is_banned: boolean
  is_admin: boolean
  created_at: string
}

function num(v: unknown): number {
  if (typeof v === 'number') return v
  if (typeof v === 'string' && v !== '') {
    const n = Number(v)
    return Number.isFinite(n) ? n : 0
  }
  return 0
}

function pick(row: Record<string, unknown>, keys: string[]): unknown {
  for (const k of keys) {
    if (row[k] !== undefined && row[k] !== null) return row[k]
  }
  return undefined
}

function normalizeRow(row: Record<string, unknown>): BalanceRow {
  return {
    user_id: String(pick(row, ['user_id', 'userId', 'id']) ?? ''),
    email: String(pick(row, ['email', 'user_email', 'userEmail']) ?? '-'),
    display_name: String(pick(row, ['display_name', 'displayName', 'name']) ?? ''),
    balance: num(pick(row, ['balance', 'current_balance', 'currentBalance'])),
    total_recharged: num(
      pick(row, ['total_recharged', 'totalRecharged', 'recharged']),
    ),
    total_consumed: num(
      pick(row, ['total_consumed', 'totalConsumed', 'consumed']),
    ),
    is_banned: Boolean(pick(row, ['is_banned', 'isBanned', 'banned', 'disabled']) ?? false),
    is_admin: Boolean(pick(row, ['is_admin', 'isAdmin', 'admin']) ?? false),
    created_at: String(pick(row, ['created_at', 'createdAt', 'registered_at']) ?? ''),
  }
}

type EditMode = 'recharge' | 'set'

export default function BalanceManagement() {
  const [rows, setRows] = useState<BalanceRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 行内编辑状态：当前编辑的 userId + 模式 + 输入值
  const [editing, setEditing] = useState<{
    userId: string
    mode: EditMode
    value: string
  } | null>(null)

  // 异步操作中状态
  const [busy, setBusy] = useState<{
    userId: string
    action: EditMode | 'ban'
  } | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error: rpcError } = await supabase.rpc('admin_list_balances')
      if (rpcError) throw rpcError
      const raw = (data ?? []) as Record<string, unknown>[]
      setRows(raw.map(normalizeRow))
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      if (msg.includes('Failed to fetch') || msg.includes('does not exist')) {
        setError('后端余额管理函数不可用，请确认已部署 admin_list_balances。')
      } else {
        setError(`加载失败：${msg}`)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  async function handleRecharge(user: BalanceRow, amount: number) {
    setBusy({ userId: user.user_id, action: 'recharge' })
    try {
      const { error: rpcError } = await supabase.rpc('admin_add_user_balance', {
        pUserId: user.user_id,
        pAmount: amount,
      })
      if (rpcError) throw rpcError
      setRows((prev) =>
        prev.map((r) =>
          r.user_id === user.user_id
            ? { ...r, balance: r.balance + amount, total_recharged: r.total_recharged + amount }
            : r,
        ),
      )
      setEditing(null)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setError(`充值失败：${msg}`)
    } finally {
      setBusy(null)
    }
  }

  async function handleSetBalance(user: BalanceRow, balance: number) {
    setBusy({ userId: user.user_id, action: 'set' })
    try {
      const { error: rpcError } = await supabase.rpc('admin_set_user_balance', {
        pUserId: user.user_id,
        pBalance: balance,
      })
      if (rpcError) throw rpcError
      setRows((prev) =>
        prev.map((r) =>
          r.user_id === user.user_id ? { ...r, balance } : r,
        ),
      )
      setEditing(null)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setError(`设置余额失败：${msg}`)
    } finally {
      setBusy(null)
    }
  }

  async function handleToggleBan(user: BalanceRow) {
    setBusy({ userId: user.user_id, action: 'ban' })
    try {
      const { error: rpcError } = await supabase.rpc('admin_set_user_banned', {
        pUserId: user.user_id,
        pBanned: !user.is_banned,
      })
      if (rpcError) throw rpcError
      setRows((prev) =>
        prev.map((r) =>
          r.user_id === user.user_id
            ? { ...r, is_banned: !r.is_banned }
            : r,
        ),
      )
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setError(`操作失败：${msg}`)
    } finally {
      setBusy(null)
    }
  }

  function submitEdit(user: BalanceRow) {
    if (!editing) return
    const val = Number(editing.value)
    if (!Number.isFinite(val) || val < 0) {
      setError('请输入有效的非负数字')
      return
    }
    if (editing.mode === 'recharge') {
      void handleRecharge(user, val)
    } else {
      void handleSetBalance(user, val)
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
        <Button variant="secondary" className="mt-3" onClick={() => void load()}>
          重试
        </Button>
      </div>
    )
  }

  // 汇总
  const totalUsers = rows.length
  const totalBalance = rows.reduce((s, r) => s + r.balance, 0)
  const totalConsumed = rows.reduce((s, r) => s + r.total_consumed, 0)

  return (
    <div className="space-y-4">
      {/* 汇总卡片 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-medium text-slate-500">用户总数</p>
          <p className="mt-1 text-xl font-semibold text-slate-800">
            {totalUsers.toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-medium text-slate-500">总余额 ($)</p>
          <p className="mt-1 text-xl font-semibold text-emerald-600">
            {totalBalance.toFixed(2)}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-medium text-slate-500">总消费 ($)</p>
          <p className="mt-1 text-xl font-semibold text-rose-600">
            {totalConsumed.toFixed(2)}
          </p>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
          <p className="text-sm text-slate-500">暂无用户</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <Th>邮箱</Th>
                  <Th>显示名</Th>
                  <Th className="text-right">余额 ($)</Th>
                  <Th className="text-right">总充值 ($)</Th>
                  <Th className="text-right">总消费 ($)</Th>
                  <Th>状态</Th>
                  <Th>注册时间</Th>
                  <Th className="text-right">操作</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {rows.map((u) => {
                  const isEditingThis = editing?.userId === u.user_id
                  const isBusyThis = busy !== null && busy.userId === u.user_id
                  return (
                    <tr key={u.user_id} className="hover:bg-slate-50">
                      <Td className="font-medium text-slate-800">{u.email}</Td>
                      <Td>{u.display_name || '-'}</Td>
                      <Td className="text-right tabular-nums font-medium text-emerald-700">
                        {u.balance.toFixed(2)}
                      </Td>
                      <Td className="text-right tabular-nums text-slate-500">
                        {u.total_recharged.toFixed(2)}
                      </Td>
                      <Td className="text-right tabular-nums text-slate-500">
                        {u.total_consumed.toFixed(2)}
                      </Td>
                      <Td>
                        {u.is_admin ? (
                          <Badge className="bg-violet-100 text-violet-700">
                            管理员
                          </Badge>
                        ) : u.is_banned ? (
                          <Badge className="bg-red-100 text-red-700">已封禁</Badge>
                        ) : (
                          <Badge className="bg-emerald-100 text-emerald-700">
                            正常
                          </Badge>
                        )}
                      </Td>
                      <Td className="text-slate-500">
                        {u.created_at
                          ? new Date(u.created_at).toLocaleDateString()
                          : '-'}
                      </Td>
                      <Td className="text-right">
                        <div className="flex flex-col items-end gap-1.5">
                          {/* 操作按钮行 */}
                          <div className="inline-flex gap-2">
                            <Button
                              variant="secondary"
                              className="px-2.5 py-1 text-xs"
                              disabled={isBusyThis}
                              onClick={() =>
                                setEditing({
                                  userId: u.user_id,
                                  mode: 'recharge',
                                  value: '',
                                })
                              }
                            >
                              充值
                            </Button>
                            <Button
                              variant="secondary"
                              className="px-2.5 py-1 text-xs"
                              disabled={isBusyThis}
                              onClick={() =>
                                setEditing({
                                  userId: u.user_id,
                                  mode: 'set',
                                  value: String(u.balance),
                                })
                              }
                            >
                              设置余额
                            </Button>
                            <Button
                              variant={u.is_banned ? 'secondary' : 'danger'}
                              className="px-2.5 py-1 text-xs"
                              disabled={u.is_admin || (isBusyThis && busy?.action === 'ban')}
                              loading={isBusyThis && busy?.action === 'ban'}
                              onClick={() => void handleToggleBan(u)}
                            >
                              {u.is_banned ? '解封' : '封禁'}
                            </Button>
                          </div>
                          {/* 行内编辑输入 */}
                          {isEditingThis && (
                            <div className="inline-flex items-center gap-1.5">
                              <input
                                type="number"
                                min={0}
                                step="0.01"
                                autoFocus
                                value={editing.value}
                                onChange={(e) =>
                                  setEditing({
                                    ...editing,
                                    value: e.target.value,
                                  })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') submitEdit(u)
                                  if (e.key === 'Escape') setEditing(null)
                                }}
                                className="w-24 rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
                                placeholder={
                                  editing.mode === 'recharge'
                                    ? '充值金额'
                                    : '新余额'
                                }
                              />
                              <Button
                                className="px-2 py-1 text-xs"
                                loading={
                                  isBusyThis &&
                                  (busy?.action === 'recharge' ||
                                    busy?.action === 'set')
                                }
                                onClick={() => submitEdit(u)}
                              >
                                确认
                              </Button>
                              <Button
                                variant="ghost"
                                className="px-2 py-1 text-xs"
                                onClick={() => setEditing(null)}
                              >
                                取消
                              </Button>
                            </div>
                          )}
                        </div>
                      </Td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
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
