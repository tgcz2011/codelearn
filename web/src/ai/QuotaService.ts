/**
 * AI 免费额度计数服务
 *
 * 计费策略：
 *   - 使用用户自定义 API Key 调用：不消耗平台额度（由 AIService 在调用前判断）。
 *   - 使用平台共享 Key 调用：消耗每日额度，超额返回错误。
 *   - Supabase 未配置/不可达（本地模式）：返回无限额度，不限制使用。
 *
 * 每日上限由管理员在后台「额度配置」页面设置，存储在 app_settings 表。
 * 默认 50 次/天。
 */
import { services } from '@/services/container'
import { supabase } from '@/services/supabase/client'

/** 默认每日免费额度上限（管理员可在后台修改） */
export const DEFAULT_DAILY_LIMIT = 50

/** 缓存的每日上限（避免每次调用都查库） */
let cachedLimit: number | null = null
let cacheExpiry = 0
const CACHE_TTL = 60_000 // 1 分钟缓存

/**
 * 获取当前每日额度上限（从数据库读取，带缓存）。
 * 后端不可达时返回默认值。
 */
export async function getDailyLimit(): Promise<number> {
  if (cachedLimit !== null && Date.now() < cacheExpiry) {
    return cachedLimit
  }
  try {
    const { data, error } = await supabase.rpc('get_ai_daily_limit')
    if (error) throw error
    cachedLimit = typeof data === 'number' ? data : DEFAULT_DAILY_LIMIT
    cacheExpiry = Date.now() + CACHE_TTL
    return cachedLimit
  } catch {
    return DEFAULT_DAILY_LIMIT
  }
}

/** 同步获取缓存的上限（可能为 null 表示未加载） */
export function getCachedDailyLimit(): number {
  return cachedLimit ?? DEFAULT_DAILY_LIMIT
}

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
    const limit = await getDailyLimit()
    return Math.max(0, limit - used)
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
    const limit = await getDailyLimit()
    return {
      used,
      limit,
      remaining: Math.max(0, limit - used),
      unlimited: false,
    }
  } catch {
    return {
      used: 0,
      limit: getCachedDailyLimit(),
      remaining: getCachedDailyLimit(),
      unlimited: true,
    }
  }
}
