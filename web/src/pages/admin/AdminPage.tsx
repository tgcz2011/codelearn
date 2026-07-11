/**
 * 管理员后台框架
 *
 * 侧边栏导航：用户管理（余额/封禁）、课程管理、额度配置、模型配置、数据库管理。
 * 内容区按当前选中菜单渲染对应组件。
 */
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import BalanceManagement from './BalanceManagement'
import DatabaseManagement from './DatabaseManagement'
import CourseManagement from './CourseManagement'
import QuotaConfig from './QuotaConfig'
import ModelConfig from './ModelConfig'

type MenuKey = 'users' | 'database' | 'courses' | 'quota' | 'models'

interface MenuItem {
  key: MenuKey
  label: string
  desc: string
}

const MENUS: MenuItem[] = [
  { key: 'users', label: '用户与额度', desc: '查看用户余额、充值、设置额度、封禁/解封' },
  { key: 'courses', label: '课程管理', desc: '查看课程统计、控制可见性' },
  { key: 'quota', label: '额度配置', desc: '配置新用户默认额度' },
  { key: 'models', label: '模型配置', desc: 'AI 融合、代码执行计价、models.dev 同步、自定义模型' },
  { key: 'database', label: '数据库管理', desc: '重置数据库（测试用）' },
]

export default function AdminPage() {
  const [active, setActive] = useState<MenuKey>('users')

  const current = MENUS.find((m) => m.key === active)!

  let content: ReactNode
  if (active === 'users') {
    content = <BalanceManagement />
  } else if (active === 'database') {
    content = <DatabaseManagement />
  } else if (active === 'courses') {
    content = <CourseManagement />
  } else if (active === 'quota') {
    content = <QuotaConfig />
  } else if (active === 'models') {
    content = <ModelConfig />
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
                  onClick={() => setActive(m.key)}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${
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
