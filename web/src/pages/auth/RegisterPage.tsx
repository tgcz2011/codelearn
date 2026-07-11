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
import { normalizeOAuthError } from '@/utils/oauthError'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { signUp, signInWithOAuth, backendAvailable } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)
  const [oauthError, setOauthError] = useState<string | null>(null)
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

  async function handleGitHubOAuth() {
    setOauthError(null)
    const { error } = await signInWithOAuth('github')
    if (error) {
      setOauthError(normalizeOAuthError(error))
    }
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
            {oauthError && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-xs text-red-700 ring-1 ring-inset ring-red-200">
                {oauthError}
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

            <button
              type="button"
              onClick={handleGitHubOAuth}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              使用 GitHub 注册
            </button>

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
