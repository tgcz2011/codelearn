/**
 * 额度配置（管理员）
 *
 * 配置新用户注册时的默认余额（USD 金额制）。
 * 直接读写 app_settings 表中的 default_balance 键。
 */
import { useCallback, useEffect, useState } from 'react'
import { supabase } from '@/services/supabase/client'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

export default function QuotaConfig() {
  const [balance, setBalance] = useState(1.0)
  const [originalBalance, setOriginalBalance] = useState(1.0)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error: qError } = await supabase
        .from('app_settings')
        .select('value')
        .eq('key', 'default_balance')
        .single()
      if (qError) throw qError
      const raw = data?.value
      let val = 1.0
      if (typeof raw === 'string') {
        val = Number(raw)
      } else if (typeof raw === 'number') {
        val = raw
      } else if (raw && typeof raw === 'object') {
        val = Number((raw as Record<string, unknown>).value ?? 1.0)
      }
      if (!Number.isFinite(val) || val < 0) val = 1.0
      setBalance(val)
      setOriginalBalance(val)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setError(`加载失败：${msg}`)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  async function handleSave() {
    if (balance < 0 || balance > 10000) {
      setError('默认余额必须在 0 ~ 10000 之间')
      return
    }
    setSaving(true)
    setError(null)
    setSuccess(false)
    try {
      const { error: uError } = await supabase
        .from('app_settings')
        .update({ value: balance.toString() })
        .eq('key', 'default_balance')
      if (uError) throw uError
      setOriginalBalance(balance)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setError(`保存失败：${msg}`)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Spinner />
      </div>
    )
  }

  const dirty = balance !== originalBalance

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {success && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm text-emerald-800">默认余额配置已保存</p>
        </div>
      )}

      {/* 默认余额配置卡片 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-800">新用户默认余额</h3>
        <p className="mt-1 text-xs text-slate-500">
          新用户注册时自动获得的余额（USD）。已有用户余额不受影响，请在「用户与额度」页面单独调整。
        </p>

        <div className="mt-4 flex items-end gap-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              默认余额（$）
            </label>
            <input
              type="number"
              min={0}
              max={10000}
              step="0.01"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              className="w-32 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
          </div>
          <div className="flex gap-2 pb-0.5">
            <Button
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => setBalance(1.0)}
            >
              默认 $1
            </Button>
            <Button
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => setBalance(5.0)}
            >
              $5
            </Button>
            <Button
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => setBalance(10.0)}
            >
              $10
            </Button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Button
            loading={saving}
            disabled={!dirty}
            onClick={() => void handleSave()}
            className="px-4 py-2 text-sm"
          >
            保存
          </Button>
          {dirty && (
            <span className="text-xs text-amber-600">有未保存的更改</span>
          )}
        </div>
      </div>

      {/* 说明卡片 */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h4 className="text-xs font-semibold text-slate-700">说明</h4>
        <ul className="mt-2 space-y-1 text-xs text-slate-500">
          <li>• 新用户注册时自动获得此处配置的余额（USD）</li>
          <li>• AI 调用按实际 token 用量计费（输入 + 输出分开计算）</li>
          <li>• 代码执行按 200 次/$1 计费（可在「模型配置」页面调整）</li>
          <li>• 用户在「设置」页配置自己的 API Key 后，调用不消耗平台余额</li>
          <li>• 余额不足时用户无法使用平台共享 Key，但仍可使用自定义 Key</li>
          <li>• 修改默认余额仅影响新注册用户，不影响已有用户</li>
        </ul>
      </div>
    </div>
  )
}
