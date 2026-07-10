/**
 * 充值弹窗（SubTask 7.8 占位）
 *
 * 本期支付未接入，仅展示「即将开放」提示。
 * 接入支付时：将下方禁用按钮替换为调用 paymentService.createOrder 的真实流程，
 * 并在此弹窗内完成下单 → 跳转支付 → 轮询订单状态。
 */
import { useTranslation } from '@/hooks/useTranslation'
import Button from '@/components/ui/Button'

export interface RechargeDialogProps {
  open: boolean
  onClose: () => void
}

export default function RechargeDialog({
  open,
  onClose,
}: RechargeDialogProps) {
  const { t } = useTranslation()
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-slate-800">
          {t('ai.recharge')}
        </h3>
        <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-500">
          {t('ai.comingSoon')}
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            {t('common.close')}
          </Button>
          {/* 接入支付前禁用，避免误触发 */}
          <Button variant="primary" disabled>
            {t('ai.recharge')}
          </Button>
        </div>
      </div>
    </div>
  )
}
