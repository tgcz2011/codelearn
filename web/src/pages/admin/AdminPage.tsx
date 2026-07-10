/**
 * 管理员后台框架
 *
 * 侧边栏导航：用户管理（已实现）、课程管理（占位）、额度配置（占位）。
 * 内容区按当前选中菜单渲染对应组件。
 */
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import UserManagement from './UserManagement'

type MenuKey = 'users' | 'courses' | 'quota'

interface MenuItem {
  key: MenuKey
  label: string
  desc: string
  enabled: boolean
}

const MENUS: MenuItem[] = [
  { key: 'users', label: '用户管理', desc: '查看与禁用用户、重置额度', enabled: true },
  { key: 'courses', label: '课程管理', desc: 'Task 6 实现', enabled: false },
  { key: 'quota', label: '额度配置', desc: 'Task 7 实现', enabled: false },
]

export default function AdminPage() {
  const [active, setActive] = useState<MenuKey>('users')

  const current = MENUS.find((m) => m.key === active)!

  let content: ReactNode
  if (active === 'users') {
    content = <UserManagement />
  } else {
    content = (
      <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <p className="text-sm text-slate-500">{current.desc}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-slate-800">管理后台</h1>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
              CodeLearn
            </span>
          </div>
          <Link
            to="/"
            className="text-sm text-slate-500 hover:text-slate-800 hover:underline"
          >
            返回首页
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6">
        {/* 侧边栏 */}
        <nav className="w-48 shrink-0">
          <ul className="space-y-1">
            {MENUS.map((m) => (
              <li key={m.key}>
                <button
                  type="button"
                  disabled={!m.enabled}
                  onClick={() => setActive(m.key)}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${
                    active === m.key
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {m.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* 内容区 */}
        <main className="min-w-0 flex-1">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-slate-800">
              {current.label}
            </h2>
            <p className="text-xs text-slate-500">{current.desc}</p>
          </div>
          {content}
        </main>
      </div>
    </div>
  )
}
