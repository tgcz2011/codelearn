/**
 * 登录页
 *
 * 邮箱+密码登录，调用 services.authService（经 authStore）。
 * 错误友好提示；预留 OAuth 入口（点击暂提示"即将支持"）。
 * 后端未配置时捕获错误并提示，不白屏。
 */
import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'

export default function LoginPage() {
  const navigate = useNavigate()
  const { signIn, backendAvailable } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setToast(null)
    if (!email || !password) {
      setError('请输入邮箱和密码')
      return
    }
    setSubmitting(true)
    const { error } = await signIn(email, password)
    setSubmitting(false)
    if (error) {
      setError(error)
      return
    }
    navigate('/')
  }

  function handleOAuth() {
    setToast('即将支持')
    window.setTimeout(() => setToast(null), 2000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-800">CodeLearn</h1>
          <p className="mt-1 text-sm text-slate-500">登录你的账号</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-7">
            {!backendAvailable && (
              <div className="rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-700 ring-1 ring-inset ring-amber-200">
                后端未配置或不可达，登录将无法完成。请配置 Supabase 环境变量。
              </div>
            )}
            <Input
              name="email"
              type="email"
              label="邮箱"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="password"
              type="password"
              label="密码"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-xs text-red-700 ring-1 ring-inset ring-red-200">
                {error}
              </p>
            )}
            {toast && (
              <p className="rounded-md bg-slate-100 px-3 py-2 text-xs text-slate-600">
                {toast}
              </p>
            )}

            <Button
              type="submit"
              loading={submitting}
              className="w-full"
              disabled={submitting}
            >
              登录
            </Button>

            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-xs text-slate-400">
                  或
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={handleOAuth}
            >
              OAuth 登录
            </Button>

            <p className="text-center text-sm text-slate-500">
              还没有账号？{' '}
              <Link
                to="/register"
                className="font-medium text-slate-900 hover:underline"
              >
                注册
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </div>
  )
}
