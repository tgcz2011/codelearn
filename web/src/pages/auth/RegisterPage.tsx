/**
 * 注册页
 *
 * 邮箱+密码注册，确认密码，调用 services.authService（经 authStore）。
 * 成功后提示去邮箱验证（取决于 Supabase 配置；若自动登录则跳转首页）。
 * 后端未配置时捕获错误并提示，不白屏。
 */
import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { signUp, backendAvailable } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setInfo(null)
    if (!email || !password) {
      setError('请输入邮箱和密码')
      return
    }
    if (password.length < 6) {
      setError('密码至少 6 位')
      return
    }
    if (password !== confirm) {
      setError('两次输入的密码不一致')
      return
    }
    setSubmitting(true)
    const { error } = await signUp(email, password)
    setSubmitting(false)
    if (error) {
      setError(error)
      return
    }
    // 注册成功：默认提示去邮箱验证；若 Supabase 配置为自动确认则尝试跳转首页
    setInfo('注册成功，请前往邮箱完成验证后登录。')
    window.setTimeout(() => navigate('/login'), 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-800">创建账号</h1>
          <p className="mt-1 text-sm text-slate-500">开始你的编程学习之旅</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-7">
            {!backendAvailable && (
              <div className="rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-700 ring-1 ring-inset ring-amber-200">
                后端未配置或不可达，注册将无法完成。请配置 Supabase 环境变量。
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
              autoComplete="new-password"
              placeholder="至少 6 位"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              name="confirm"
              type="password"
              label="确认密码"
              autoComplete="new-password"
              placeholder="再次输入密码"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            {error && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-xs text-red-700 ring-1 ring-inset ring-red-200">
                {error}
              </p>
            )}
            {info && (
              <p className="rounded-md bg-emerald-50 px-3 py-2 text-xs text-emerald-700 ring-1 ring-inset ring-emerald-200">
                {info}
              </p>
            )}

            <Button
              type="submit"
              loading={submitting}
              className="w-full"
              disabled={submitting}
            >
              注册
            </Button>

            <p className="text-center text-sm text-slate-500">
              已有账号？{' '}
              <Link
                to="/login"
                className="font-medium text-slate-900 hover:underline"
              >
                登录
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </div>
  )
}
