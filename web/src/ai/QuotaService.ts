/**
 * AI 免费额度计数服务（SubTask 7.6）
 *
 * 所有数据访问通过 services.repository，不直接 import @supabase/supabase-js。
 * 计费策略：
 *   - 使用用户自定义 API Key 调用：不消耗平台额度（由 AIService 在调用前判断）。
 *   - 使用平台共享 Key 调用：消耗每日额度，超额返回错误。
 *   - Supabase 未配置/不可达（本地模式）：返回无限额度，不限制使用。
 *
 * 默认每日上限 50 次（本期硬编码，后续可由管理员配置）。
 */
import { services } from '@/services/container'

/** 每日免费额度上限（硬编码） */
export const DAILY_LIMIT = 50

/** UI 展示用的额度状态 */
export interface QuotaStatus {
  /** 今日已用次数 */
  used: number
  /** 每日上限 */
  limit: number
  /** 剩余次数（unlimited 时与 limit 相同） */
  remaining: number
  /** 是否为本地模式（后端不可用，不限制） */
  unlimited: boolean
}

/** 当日日期字符串 YYYY-MM-DD（UTC） */
export function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

/**
 * 查询剩余额度。
 * Supabase 未配置/不可达时返回 Infinity（本地模式不限制）。
 */
export async function checkQuota(userId: string): Promise<number> {
  try {
    const quota = await services.repository.getAiQuota(userId, todayStr())
    const used = quota?.count ?? 0
    return Math.max(0, DAILY_LIMIT - used)
  } catch {
    // 后端未配置或不可达：本地模式不限制
    return Infinity
  }
}

/**
 * 消耗额度。
 * Supabase 未配置/不可达时静默忽略（本地模式无需计量）。
 */
export async function consumeQuota(
  userId: string,
  count = 1,
): Promise<void> {
  try {
    await services.repository.incrementAiQuota(userId, todayStr(), count)
  } catch {
    // 本地模式静默忽略
  }
}

/**
 * 查询额度状态（供 UI 展示）。
 * 后端不可达时返回 unlimited=true。
 */
export async function getQuotaStatus(userId: string): Promise<QuotaStatus> {
  try {
    const quota = await services.repository.getAiQuota(userId, todayStr())
    const used = quota?.count ?? 0
    return {
      used,
      limit: DAILY_LIMIT,
      remaining: Math.max(0, DAILY_LIMIT - used),
      unlimited: false,
    }
  } catch {
    return {
      used: 0,
      limit: DAILY_LIMIT,
      remaining: DAILY_LIMIT,
      unlimited: true,
    }
  }
}
