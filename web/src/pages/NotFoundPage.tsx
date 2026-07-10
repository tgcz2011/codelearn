/**
 * 404 页面
 */
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <p className="text-5xl font-bold text-slate-300">404</p>
      <h1 className="mt-3 text-xl font-semibold text-slate-800">
        页面不存在
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        你访问的页面不存在或已被移除。
      </p>
      <Link to="/" className="mt-6">
        <Button>返回首页</Button>
      </Link>
    </div>
  )
}
