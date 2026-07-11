/**
 * 额度配置（管理员）
 *
 * 管理全局 AI 每日免费额度上限。
 * 通过 RPC 调用 set_ai_daily_limit / get_ai_daily_limit。
 */
import { useCallback, useEffect, useState } from 'react'
import { supabase } from '@/services/supabase/client'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

export default function QuotaConfig() {
  const [limit, setLimit] = useState(50)
  const [originalLimit, setOriginalLimit] = useState(50)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error: rpcError } = await supabase.rpc('get_ai_daily_limit')
      if (rpcError) throw rpcError
      const val = typeof data === 'number' ? data : 50
      setLimit(val)
      setOriginalLimit(val)
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
    if (limit < 1 || limit > 10000) {
      setError('额度上限必须在 1 ~ 10000 之间')
      return
    }
    setSaving(true)
    setError(null)
    setSuccess(false)
    try {
      const { error: rpcError } = await supabase.rpc('set_ai_daily_limit', {
        p_limit: limit,
      })
      if (rpcError) throw rpcError
      setOriginalLimit(limit)
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

  const dirty = limit !== originalLimit

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {success && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm text-emerald-800">额度配置已保存</p>
        </div>
      )}

      {/* 额度配置卡片 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-800">AI 每日免费额度</h3>
        <p className="mt-1 text-xs text-slate-500">
          平台共享 Key 用户每日可调用的 AI 次数上限。用户自定义 Key 不受此限制。
        </p>

        <div className="mt-4 flex items-end gap-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              每日上限（次）
            </label>
            <input
              type="number"
              min={1}
              max={10000}
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="w-32 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
          </div>
          <div className="flex gap-2 pb-0.5">
            <Button
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => setLimit(50)}
            >
              默认 50
            </Button>
            <Button
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => setLimit(100)}
            >
              100
            </Button>
            <Button
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => setLimit(9999)}
            >
              不限制
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
          <li>• 平台共享 Key 用户每天最多调用 {limit} 次 AI 功能（提示、代码解释、练习生成）</li>
          <li>• 用户在「设置」页配置自己的 API Key 后，调用不消耗平台额度</li>
          <li>• 每日 UTC 00:00 自动重置已用次数</li>
          <li>• 修改后立即生效，无需重启服务</li>
        </ul>
      </div>
    </div>
  )
}
