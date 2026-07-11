/**
 * 额度服务（金额制）
 *
 * 计费策略：
 *   - 使用用户自定义 API Key 调用：不消耗平台余额（由 AIService 在调用前判断）。
 *   - 使用平台共享 Key 调用：消耗用户余额（USD 金额制），余额不足返回错误。
 *   - Supabase 未配置/不可达（本地模式）：返回无限额度，不限制使用。
 *
 * 余额由管理员在后台「用户与额度」页面配置，存储在 user_balance 表。
 * 新用户注册时自动获得默认额度（由 app_settings.default_balance 配置）。
 */
import { supabase } from '@/services/supabase/client'

/** 默认余额（管理员可在后台修改） */
export const DEFAULT_BALANCE = 1.0

/** UI 展示用的额度状态 */
export interface QuotaStatus {
  /** 已消费金额（USD） */
  used: number
  /** 总充值金额（USD） */
  limit: number
  /** 剩余余额（USD） */
  remaining: number
  /** 是否为本地模式（后端不可用，不限制） */
  unlimited: boolean
}

/** 当日日期字符串 YYYY-MM-DD（UTC），保留用于向后兼容 */
export function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

/**
 * 查询用户余额状态（供 UI 展示）。
 * 后端不可达时返回 unlimited=true。
 */
export async function getQuotaStatus(userId: string): Promise<QuotaStatus> {
  try {
    const { data, error } = await supabase.rpc('get_user_balance', {
      pUserId: userId,
    })
    if (error) throw error
    // data 可能是数组（returns table）或单行
    const row = Array.isArray(data) && data.length > 0 ? data[0] : data
    if (!row) {
      return {
        used: 0,
        limit: DEFAULT_BALANCE,
        remaining: DEFAULT_BALANCE,
        unlimited: false,
      }
    }
    const balance = Number(row.balance ?? 0)
    const recharged = Number(row.total_recharged ?? 0)
    const consumed = Number(row.total_consumed ?? 0)
    return {
      used: consumed,
      limit: recharged,
      remaining: balance,
      unlimited: false,
    }
  } catch {
    return {
      used: 0,
      limit: DEFAULT_BALANCE,
      remaining: DEFAULT_BALANCE,
      unlimited: true,
    }
  }
}

/**
 * 查询用户剩余余额。
 * Supabase 未配置/不可达时返回 Infinity（本地模式不限制）。
 */
export async function checkBalance(userId: string): Promise<number> {
  try {
    const { data, error } = await supabase.rpc('get_user_balance', {
      pUserId: userId,
    })
    if (error) throw error
    const row = Array.isArray(data) && data.length > 0 ? data[0] : data
    if (!row) return DEFAULT_BALANCE
    return Number(row.balance ?? 0)
  } catch {
    return Infinity
  }
}

/**
 * 扣减用户余额。
 * Supabase 未配置/不可达时静默忽略（本地模式无需计量）。
 * @returns 扣减成功返回 true，余额不足返回 false
 */
export async function consumeBalance(
  userId: string,
  amount: number,
): Promise<boolean> {
  if (amount <= 0) return true
  try {
    const { data, error } = await supabase.rpc('consume_balance', {
      pUserId: userId,
      pAmount: amount,
    })
    if (error) throw error
    const row = Array.isArray(data) && data.length > 0 ? data[0] : data
    return Boolean(row?.success)
  } catch {
    return true
  }
}

/**
 * 记录 API 调用日志。
 * Supabase 未配置/不可达时静默忽略。
 */
export async function logApiUsage(params: {
  userId: string
  callType: string
  provider?: string
  model?: string
  inputTokens?: number
  outputTokens?: number
  cost?: number
  isCustomModel?: boolean
}): Promise<void> {
  try {
    await supabase.rpc('log_api_usage', {
      pUserId: params.userId,
      pCallType: params.callType,
      pProvider: params.provider ?? '',
      pModel: params.model ?? '',
      pInputTokens: params.inputTokens ?? 0,
      pOutputTokens: params.outputTokens ?? 0,
      pCost: params.cost ?? 0,
      pIsCustomModel: params.isCustomModel ?? false,
    })
  } catch {
    // 静默忽略
  }
}

/**
 * 获取 AI 融合配置。
 * 后端不可达时返回默认关闭状态。
 */
export async function getFusionConfig(): Promise<{
  enabled: boolean
  judgeModel: string
  candidateModels: string[]
}> {
  try {
    const { data, error } = await supabase.rpc('get_ai_fusion_config')
    if (error) throw error
    const raw = (data ?? {}) as Record<string, unknown>
    const candidates = raw.candidate_models ?? raw.candidateModels ?? []
    return {
      enabled: Boolean(raw.enabled ?? false),
      judgeModel: String(raw.judge_model ?? raw.judgeModel ?? ''),
      candidateModels: Array.isArray(candidates)
        ? (candidates as unknown[]).map((c) => String(c))
        : [],
    }
  } catch {
    return { enabled: false, judgeModel: '', candidateModels: [] }
  }
}

// ---- 向后兼容导出（旧接口，内部转为 balance 调用） ----

/** @deprecated 使用 checkBalance 代替 */
export async function checkQuota(userId: string): Promise<number> {
  return checkBalance(userId)
}

/** @deprecated 使用 consumeBalance 代替 */
export async function consumeQuota(
  _userId: string,
  _count = 1,
): Promise<void> {
  // 旧接口按次数扣减，新系统按金额扣减，这里不扣减
  // 实际扣减由 AIService 在调用后根据实际 token 用量执行
}

/** 默认每日上限（已废弃，保留导出避免编译错误） */
export const DEFAULT_DAILY_LIMIT = 50

/** @deprecated 金额制下不再使用每日上限 */
export async function getDailyLimit(): Promise<number> {
  return DEFAULT_DAILY_LIMIT
}

/** @deprecated */
export function getCachedDailyLimit(): number {
  return DEFAULT_DAILY_LIMIT
}
