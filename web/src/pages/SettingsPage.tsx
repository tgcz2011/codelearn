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
  const { user, signOut } = useAuth()
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
