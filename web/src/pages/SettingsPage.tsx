/**
 * 设置页
 *
 * - AI API Key 管理（Task 7）：base_url / api_key / model / 测试连接 / 保存到 localStorage。
 * - 额度展示与充值入口（Task 7）：显示今日已用额度，充值弹窗占位。
 * - 主题/语言切换：Task 9 实现。
 *
 * 自定义 Key 安全权衡：仅保存在本地浏览器 localStorage，不上传后端。
 * 详见 web/src/ai/AIService.ts 顶部注释。
 */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useTranslation } from '@/hooks/useTranslation'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import RechargeDialog from '@/components/ai/RechargeDialog'
import {
  loadCustomKey,
  saveCustomKey,
  clearCustomKey,
  resolveProvider,
  getQuotaStatus,
  OpenAICompatibleProvider,
  DEFAULT_BASE_URL,
  DEFAULT_MODEL,
} from '@/ai'
import type { QuotaStatus } from '@/ai'

export default function SettingsPage() {
  const {
    user,
    signOut,
    identities,
    refreshIdentities,
    linkGitHub,
    unlinkIdentity,
  } = useAuth()
  const { t } = useTranslation()

  const [baseUrl, setBaseUrl] = useState(DEFAULT_BASE_URL)
  const [apiKey, setApiKey] = useState('')
  const [model, setModel] = useState(DEFAULT_MODEL)

  const [testing, setTesting] = useState(false)
  const [testMsg, setTestMsg] = useState<{ ok: boolean; text: string } | null>(
    null,
  )
  const [savedMsg, setSavedMsg] = useState(false)

  const [quota, setQuota] = useState<QuotaStatus | null>(null)
  const [rechargeOpen, setRechargeOpen] = useState(false)

  // 账号关联相关状态
  const [linking, setLinking] = useState(false)
  const [unlinkingId, setUnlinkingId] = useState<string | null>(null)
  const [linkMsg, setLinkMsg] = useState<{
    ok: boolean
    text: string
  } | null>(null)

  // 初始化：从 localStorage 读取已保存的配置
  useEffect(() => {
    const stored = loadCustomKey()
    if (stored) {
      setBaseUrl(stored.baseUrl)
      setApiKey(stored.apiKey)
      setModel(stored.model)
    }
  }, [])

  // 拉取额度（仅共享 Key 模式有意义；本地模式显示无限）
  useEffect(() => {
    if (!user?.id) return
    let cancelled = false
    void (async () => {
      const status = await getQuotaStatus(user.id)
      if (!cancelled) setQuota(status)
    })()
    return () => {
      cancelled = true
    }
  }, [user?.id])

  // 进入设置页时刷新已绑定身份列表（OAuth 回调也会刷新）
  useEffect(() => {
    if (user?.id) void refreshIdentities()
  }, [user?.id, refreshIdentities])

  const hasGitHub = identities.some((i) => i.provider === 'github')
  const hasEmail = identities.some((i) => i.provider === 'email')
  const canUnlink = identities.length > 1

  async function handleLinkGitHub() {
    setLinking(true)
    setLinkMsg(null)
    const { error } = await linkGitHub()
    setLinking(false)
    if (error) {
      setLinkMsg({ ok: false, text: error })
    } else {
      setLinkMsg({
        ok: true,
        text: '正在跳转 GitHub 完成授权，回调后将自动绑定到当前账号。',
      })
    }
  }

  async function handleUnlink(identityId: string, label: string) {
    if (!canUnlink) {
      setLinkMsg({
        ok: false,
        text: '无法解绑最后一个身份，至少需要保留一种登录方式。',
      })
      return
    }
    if (!window.confirm(`确定要解绑「${label}」吗？解绑后将无法用该方式登录。`)) {
      return
    }
    setUnlinkingId(identityId)
    setLinkMsg(null)
    const { error } = await unlinkIdentity(identityId)
    setUnlinkingId(null)
    if (error) {
      setLinkMsg({ ok: false, text: error })
    } else {
      setLinkMsg({ ok: true, text: '已解绑该身份。' })
    }
  }

  const isCustom = Boolean(loadCustomKey())
  const configured = resolveProvider() !== null

  const handleSave = () => {
    if (!apiKey.trim()) return
    saveCustomKey({
      baseUrl: baseUrl.trim() || DEFAULT_BASE_URL,
      apiKey: apiKey.trim(),
      model: model.trim() || DEFAULT_MODEL,
    })
    setSavedMsg(true)
    setTestMsg(null)
    setTimeout(() => setSavedMsg(false), 2000)
  }

  const handleClear = () => {
    clearCustomKey()
    setApiKey('')
    setBaseUrl(DEFAULT_BASE_URL)
    setModel(DEFAULT_MODEL)
    setTestMsg(null)
    setSavedMsg(false)
  }

  const handleTest = async () => {
    if (!apiKey.trim()) {
      setTestMsg({ ok: false, text: t('ai.notConfigured') })
      return
    }
    setTesting(true)
    setTestMsg(null)
    // 用当前表单值（未保存）临时构造 provider 测试
    const provider = new OpenAICompatibleProvider({
      baseUrl: baseUrl.trim() || DEFAULT_BASE_URL,
      apiKey: apiKey.trim(),
      defaultModel: model.trim() || DEFAULT_MODEL,
    })
    const result = await provider.chat(
      [
        { role: 'user', content: 'ping' },
      ],
      { maxTokens: 8 },
    )
    setTesting(false)
    if (result.error) {
      setTestMsg({ ok: false, text: `${t('ai.testFail')}：${result.error}` })
    } else {
      setTestMsg({ ok: true, text: t('ai.testOk') })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="text-sm text-slate-500 hover:text-slate-800 hover:underline"
          >
            ← {t('common.back')}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-6 px-4 py-10">
        {/* AI 设置 */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">
            {t('ai.settings')}
          </h2>
          <p className="mt-1 text-sm text-slate-500">{t('ai.settingsDesc')}</p>

          {/* 当前状态 */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 ring-1 ring-inset ${
                isCustom
                  ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                  : configured
                    ? 'bg-sky-50 text-sky-700 ring-sky-200'
                    : 'bg-amber-50 text-amber-700 ring-amber-200'
              }`}
            >
              {isCustom
                ? t('ai.customKey')
                : configured
                  ? t('ai.sharedKey')
                  : t('ai.notConfigured')}
            </span>

            {quota && (
              <span className="text-slate-500">
                {quota.unlimited
                  ? t('ai.quotaUnlimited')
                  : t('ai.quotaUsed', {
                      used: quota.used,
                      limit: quota.limit,
                    })}
              </span>
            )}

            {!quota?.unlimited && (
              <button
                type="button"
                onClick={() => setRechargeOpen(true)}
                className="rounded px-2 py-0.5 text-slate-500 underline-offset-2 hover:text-slate-700 hover:underline"
              >
                {t('ai.recharge')}
              </button>
            )}
          </div>

          {/* 表单 */}
          <div className="mt-5 space-y-4">
            <Input
              label={t('ai.baseUrl')}
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder={DEFAULT_BASE_URL}
              name="ai-base-url"
            />
            <Input
              label={t('ai.apiKey')}
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              name="ai-api-key"
              autoComplete="off"
            />
            <Input
              label={t('ai.model')}
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder={DEFAULT_MODEL}
              name="ai-model"
            />

            {testMsg && (
              <p
                className={`text-xs ${testMsg.ok ? 'text-emerald-600' : 'text-red-600'}`}
              >
                {testMsg.text}
              </p>
            )}
            {savedMsg && (
              <p className="text-xs text-emerald-600">{t('ai.saved')}</p>
            )}

            <div className="flex flex-wrap gap-2">
              <Button variant="primary" onClick={handleSave} disabled={!apiKey.trim()}>
                {t('ai.save')}
              </Button>
              <Button
                variant="secondary"
                onClick={() => void handleTest()}
                loading={testing}
                disabled={!apiKey.trim()}
              >
                {testing ? t('ai.testing') : t('ai.testConnection')}
              </Button>
              {isCustom && (
                <Button variant="ghost" onClick={handleClear}>
                  {t('ai.clear')}
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* 主题/语言切换占位 */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">
            {t('common.info')}
          </h2>
          <div className="mt-4 rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
            主题与语言切换 — Task 9 实现
          </div>
        </section>

        {/* 账号关联 */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">账号关联</h2>
          <p className="mt-1 text-sm text-slate-500">
            将邮箱账号与 GitHub 账号绑定后，可用任一方式登录同一账号，学习进度与余额共享。
          </p>

          {linkMsg && (
            <p
              className={`mt-3 rounded-md px-3 py-2 text-xs ring-1 ring-inset ${
                linkMsg.ok
                  ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                  : 'bg-red-50 text-red-700 ring-red-200'
              }`}
            >
              {linkMsg.text}
            </p>
          )}

          {/* 已绑定身份列表 */}
          <div className="mt-4 space-y-2">
            {/* 邮箱 */}
            <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
                  @
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-800">邮箱</p>
                  <p className="text-xs text-slate-500">
                    {hasEmail
                      ? identities.find((i) => i.provider === 'email')?.email ||
                        user?.email ||
                        '已绑定'
                      : '未绑定'}
                  </p>
                </div>
              </div>
              {hasEmail && (
                <Button
                  variant="ghost"
                  className="px-3 py-1.5 text-xs"
                  loading={
                    unlinkingId ===
                    identities.find((i) => i.provider === 'email')?.identityId
                  }
                  disabled={!canUnlink || unlinkingId !== null}
                  onClick={() =>
                    void handleUnlink(
                      identities.find((i) => i.provider === 'email')!
                        .identityId,
                      '邮箱',
                    )
                  }
                >
                  解绑
                </Button>
              )}
            </div>

            {/* GitHub */}
            <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-800">GitHub</p>
                  <p className="text-xs text-slate-500">
                    {hasGitHub
                      ? identities.find((i) => i.provider === 'github')
                          ?.displayName ||
                        identities.find((i) => i.provider === 'github')
                          ?.email ||
                        '已绑定'
                      : '未绑定'}
                  </p>
                </div>
              </div>
              {hasGitHub ? (
                <Button
                  variant="ghost"
                  className="px-3 py-1.5 text-xs"
                  loading={
                    unlinkingId ===
                    identities.find((i) => i.provider === 'github')?.identityId
                  }
                  disabled={!canUnlink || unlinkingId !== null}
                  onClick={() =>
                    void handleUnlink(
                      identities.find((i) => i.provider === 'github')!
                        .identityId,
                      'GitHub',
                    )
                  }
                >
                  解绑
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className="px-3 py-1.5 text-xs"
                  loading={linking}
                  disabled={linking}
                  onClick={() => void handleLinkGitHub()}
                >
                  绑定 GitHub
                </Button>
              )}
            </div>
          </div>

          {/* 冲突说明 */}
          <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
            <p className="font-semibold">冲突处理说明</p>
            <ul className="mt-1 space-y-0.5">
              <li>
                • 若 GitHub
                账号的邮箱已被其他账号占用，需先在该账号解绑，或换一个 GitHub
                账号。
              </li>
              <li>
                • 若你之前用 GitHub
                直接登录生成了独立账号（同邮箱不同
                ID），请先登录该 GitHub 账号解绑，再用邮箱登录后重新绑定。
              </li>
              <li>• 至少保留一个身份，否则账号将无法登录。</li>
            </ul>
          </div>
        </section>

        {/* 账号 */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">
            {t('common.appName')}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {user?.email ?? '-'}
          </p>
          <div className="mt-4">
            <Button variant="danger" onClick={() => void signOut()}>
              {t('common.logout')}
            </Button>
          </div>
        </section>
      </main>

      <RechargeDialog
        open={rechargeOpen}
        onClose={() => setRechargeOpen(false)}
      />
    </div>
  )
}
