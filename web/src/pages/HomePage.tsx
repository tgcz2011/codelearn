/**
 * 首页（受保护）
 *
 * 登录后的落地页，提供到课程、设置、管理后台的入口。
 * 课程列表/详情由 Task 6 实现，此处仅占位入口。
 */
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'

export default function HomePage() {
  const { user, isAdmin, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-slate-800">CodeLearn</h1>
          <div className="flex items-center gap-3">
            {isAdmin && (
              <Link
                to="/admin"
                className="text-sm text-slate-500 hover:text-slate-800 hover:underline"
              >
                管理后台
              </Link>
            )}
            <Link
              to="/settings"
              className="text-sm text-slate-500 hover:text-slate-800 hover:underline"
            >
              设置
            </Link>
            <span className="text-sm text-slate-500">{user?.email}</span>
            <Button variant="secondary" onClick={() => void signOut()}>
              退出登录
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            欢迎回来{user ? `，${user.email}` : ''}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            免费、跨平台、AI 辅助的编程学习平台。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/courses">
              <Button>进入课程</Button>
            </Link>
            <Link to="/settings">
              <Button variant="secondary">个人设置</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
