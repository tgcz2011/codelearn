/**
 * 数据库管理（仅管理员）
 *
 * 功能：
 * - 重置数据库：清空所有用户进度、AI 额度、非管理员用户
 *   用于测试阶段的兼容性问题快速重置
 */
import { useState } from 'react'
import { services } from '@/services/container'

export default function DatabaseManagement() {
  const [confirming, setConfirming] = useState(false)
  const [confirmText, setConfirmText] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const EXPECTED_TEXT = '确认重置'

  async function handleReset() {
    setLoading(true)
    setMessage(null)
    try {
      const result = await services.repository.resetDatabase()
      setMessage({
        type: 'success',
        text: `${result.message}（已删除 ${result.deletedUsers} 个非管理员用户）`,
      })
      setConfirming(false)
      setConfirmText('')
    } catch (e) {
      setMessage({
        type: 'error',
        text: e instanceof Error ? e.message : '重置失败，请重试',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {message && (
        <div
          className={`rounded-md p-3 text-sm ${
            message.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* 重置数据库 */}
      <div className="rounded-lg border border-red-200 bg-red-50 p-5">
        <h3 className="text-sm font-semibold text-red-800">重置数据库</h3>
        <p className="mt-1 text-xs text-red-600">
          清空所有用户的学习进度、AI 额度、API keys，并删除所有非管理员用户。
          管理员账号和课程内容不受影响。此操作不可撤销，请谨慎使用。
        </p>

        {!confirming ? (
          <button
            type="button"
            onClick={() => setConfirming(true)}
            className="mt-3 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            重置数据库
          </button>
        ) : (
          <div className="mt-3 space-y-3">
            <p className="text-xs text-red-700">
              请输入 <code className="rounded bg-red-100 px-1 py-0.5 font-mono">{EXPECTED_TEXT}</code> 以确认：
            </p>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="w-full rounded-md border border-red-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
              placeholder={EXPECTED_TEXT}
            />
            <div className="flex gap-2">
              <button
                type="button"
                disabled={confirmText !== EXPECTED_TEXT || loading}
                onClick={handleReset}
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? '重置中...' : '确认重置'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setConfirming(false)
                  setConfirmText('')
                }}
                className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
              >
                取消
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
