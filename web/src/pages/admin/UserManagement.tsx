/**
 * 用户管理（管理员）
 *
 * 调用 services.repository.listUsers() 列出用户，
 * 提供 禁用/启用、重置 AI 额度 操作。
 * 后端未配置/接口报错时友好提示，不白屏。
 */
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { services } from '@/services/container'
import type { UserProfile } from '@/services/interfaces'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

type ActionTarget = { id: string; field: 'disabled' | 'quota' }

export default function UserManagement() {
  const [users, setUsers] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState<ActionTarget | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const list = await services.repository.listUsers()
      setUsers(list)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      // 后端未配置或无权限时给出友好提示
      if (
        msg.includes('Failed to fetch') ||
        msg.includes('fetch') ||
        msg.includes('placeholder')
      ) {
        setError('后端未配置或不可达，无法加载用户列表。')
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

  async function toggleDisabled(user: UserProfile) {
    setBusy({ id: user.id, field: 'disabled' })
    try {
      await services.repository.setUserDisabled(user.id, !user.disabled)
      setUsers((prev) =>
        prev.map((u) =>
          u.id === user.id ? { ...u, disabled: !u.disabled } : u,
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

  async function resetQuota(user: UserProfile) {
    setBusy({ id: user.id, field: 'quota' })
    try {
      await services.repository.resetAiQuota(user.id)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setError(`重置额度失败：${msg}`)
    } finally {
      setBusy(null)
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

  if (users.length === 0) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
        <p className="text-sm text-slate-500">暂无用户</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <Th>邮箱</Th>
            <Th>显示名</Th>
            <Th>管理员</Th>
            <Th>状态</Th>
            <Th>注册时间</Th>
            <Th className="text-right">操作</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {users.map((u) => (
            <tr key={u.id} className="hover:bg-slate-50">
              <Td className="font-medium text-slate-800">{u.email}</Td>
              <Td>{u.display_name || '-'}</Td>
              <Td>
                {u.is_admin ? (
                  <Badge className="bg-violet-100 text-violet-700">是</Badge>
                ) : (
                  <span className="text-slate-400">否</span>
                )}
              </Td>
              <Td>
                {u.disabled ? (
                  <Badge className="bg-red-100 text-red-700">已禁用</Badge>
                ) : (
                  <Badge className="bg-emerald-100 text-emerald-700">
                    正常
                  </Badge>
                )}
              </Td>
              <Td className="text-slate-500">
                {new Date(u.created_at).toLocaleDateString()}
              </Td>
              <Td className="text-right">
                <div className="inline-flex gap-2">
                  <Button
                    variant={u.disabled ? 'secondary' : 'danger'}
                    loading={
                      busy?.id === u.id && busy.field === 'disabled'
                    }
                    onClick={() => void toggleDisabled(u)}
                    className="px-2.5 py-1 text-xs"
                  >
                    {u.disabled ? '启用' : '禁用'}
                  </Button>
                  <Button
                    variant="secondary"
                    loading={busy?.id === u.id && busy.field === 'quota'}
                    onClick={() => void resetQuota(u)}
                    className="px-2.5 py-1 text-xs"
                  >
                    重置额度
                  </Button>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
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
