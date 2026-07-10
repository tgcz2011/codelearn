/**
 * AI 高层服务封装（SubTask 7.3）
 *
 * 职责：
 * 1. 选择 Provider：优先使用用户自定义 Key（localStorage），其次平台共享 Key（环境变量）。
 * 2. 在调用前校验额度（仅共享 Key 消耗额度，自定义 Key 不消耗）。
 * 3. 暴露 getHint / explainCode / generateExercise 三个业务方法。
 *
 * 安全权衡：本期用户自定义 API Key 存储在 localStorage（key: 'codelearn_ai_key'），
 * 不上传后端。优点：无需后端即可使用，符合"免费自托管"目标。
 * 风险：localStorage 中的 Key 会暴露在同源 XSS 攻击下。
 * 生产环境应改为后端代理转发 + AES 加密存储，前端不持有明文 Key。
 */
import type {
  AIProvider,
  ChatMessage,
  ChatResult,
  ExerciseResult,
} from './AIProvider'
import {
  OpenAICompatibleProvider,
  DEFAULT_BASE_URL,
  DEFAULT_MODEL,
} from './OpenAICompatibleProvider'
import { HINT_SYSTEM_PROMPT, EXPLAIN_SYSTEM_PROMPT } from './prompts'
import { checkQuota, consumeQuota } from './QuotaService'

/** localStorage 中存储自定义 Key 的键名 */
const STORAGE_KEY = 'codelearn_ai_key'

/** 自定义 Key 存储结构 */
export interface StoredAiKey {
  baseUrl: string
  apiKey: string
  model: string
}

/** 未配置任何 Key 时的错误提示 */
export const NO_KEY_ERROR = '请先在设置中配置 AI API Key。'
/** 共享额度用尽时的错误提示 */
export const QUOTA_EMPTY_ERROR =
  '今日免费额度已用完，可在设置中填写自己的 API Key 继续使用。'

// ---- 自定义 Key 本地存储 ----

/** 读取本地存储的自定义 Key；不存在或格式错误返回 null */
export function loadCustomKey(): StoredAiKey | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as unknown
    if (typeof parsed !== 'object' || parsed === null) return null
    const o = parsed as { apiKey?: unknown; baseUrl?: unknown; model?: unknown }
    if (typeof o.apiKey !== 'string' || !o.apiKey) return null
    return {
      apiKey: o.apiKey,
      baseUrl:
        typeof o.baseUrl === 'string' && o.baseUrl ? o.baseUrl : DEFAULT_BASE_URL,
      model:
        typeof o.model === 'string' && o.model ? o.model : DEFAULT_MODEL,
    }
  } catch {
    return null
  }
}

/** 保存自定义 Key 到 localStorage */
export function saveCustomKey(key: StoredAiKey): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(key))
}

/** 清除本地存储的自定义 Key */
export function clearCustomKey(): void {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(STORAGE_KEY)
}

/** 是否已配置自定义 Key */
export function hasCustomKey(): boolean {
  return loadCustomKey() !== null
}

// ---- Provider 选择 ----

interface ResolvedProvider {
  provider: AIProvider
  /** true = 用户自定义 Key（不消耗额度）；false = 平台共享 Key（消耗额度） */
  isCustom: boolean
}

/**
 * 解析当前可用的 Provider。
 * 优先自定义 Key，其次平台共享 Key，均无则返回 null。
 */
export function resolveProvider(): ResolvedProvider | null {
  // 1. 用户自定义 Key（localStorage）
  const custom = loadCustomKey()
  if (custom) {
    return {
      provider: new OpenAICompatibleProvider({
        baseUrl: custom.baseUrl,
        apiKey: custom.apiKey,
        defaultModel: custom.model,
      }),
      isCustom: true,
    }
  }
  // 2. 平台共享 Key（环境变量）
  const sharedKey = import.meta.env.VITE_AI_API_KEY
  if (sharedKey) {
    const baseUrl =
      import.meta.env.VITE_AI_BASE_URL || DEFAULT_BASE_URL
    return {
      provider: new OpenAICompatibleProvider({
        baseUrl,
        apiKey: sharedKey,
        defaultModel: DEFAULT_MODEL,
      }),
      isCustom: false,
    }
  }
  return null
}

/** 判断当前是否已配置可用的 AI Provider（供 UI 提示） */
export function isAiConfigured(): boolean {
  return resolveProvider() !== null
}

// ---- 额度辅助 ----

/** 共享 Key 且有用户标识时校验额度；不足返回错误信息，否则返回 null */
async function assertSharedQuota(
  resolved: ResolvedProvider,
  userId?: string,
): Promise<string | null> {
  if (resolved.isCustom) return null // 自定义 Key 不消耗额度
  if (!userId) return null // 无用户标识无法计量，允许使用
  const remaining = await checkQuota(userId)
  if (remaining <= 0) return QUOTA_EMPTY_ERROR
  return null
}

/** 共享 Key 且有用户标识时扣除 1 次额度 */
async function consumeSharedQuota(
  resolved: ResolvedProvider,
  userId?: string,
): Promise<void> {
  if (resolved.isCustom || !userId) return
  await consumeQuota(userId, 1)
}

// ---- 业务方法 ----

/** getHint 入参 */
export interface GetHintParams {
  lessonTitle: string
  userCode: string
  /** 学员请求提示的次数（越大提示越深入） */
  attemptCount: number
  userId?: string
}

/** explainCode 入参 */
export interface ExplainCodeParams {
  code: string
  language: string
  userId?: string
}

/** generateExercise 入参 */
export interface GenerateExerciseParams {
  topic: string
  level: string
  language: string
  userId?: string
}

export class AIService {
  /** 渐进式提示 */
  async getHint(params: GetHintParams): Promise<ChatResult> {
    const resolved = resolveProvider()
    if (!resolved) return { content: '', error: NO_KEY_ERROR }
    const quotaError = await assertSharedQuota(resolved, params.userId)
    if (quotaError) return { content: '', error: quotaError }

    const messages: ChatMessage[] = [
      { role: 'system', content: HINT_SYSTEM_PROMPT },
      {
        role: 'user',
        content: `课程：${params.lessonTitle}\n这是我第 ${params.attemptCount} 次请求提示。\n\n我目前的代码：\n\`\`\`\n${params.userCode || '(还没有写代码)'}\n\`\`\`\n\n请给我一个提示。`,
      },
    ]
    const result = await resolved.provider.chat(messages, {
      temperature: 0.5,
    })
    if (!result.error) {
      await consumeSharedQuota(resolved, params.userId)
    }
    return result
  }

  /** 代码解释 */
  async explainCode(params: ExplainCodeParams): Promise<ChatResult> {
    const resolved = resolveProvider()
    if (!resolved) return { content: '', error: NO_KEY_ERROR }
    const quotaError = await assertSharedQuota(resolved, params.userId)
    if (quotaError) return { content: '', error: quotaError }

    const messages: ChatMessage[] = [
      { role: 'system', content: EXPLAIN_SYSTEM_PROMPT },
      {
        role: 'user',
        content: `请解释以下 ${params.language} 代码：\n\`\`\`${params.language}\n${params.code}\n\`\`\``,
      },
    ]
    const result = await resolved.provider.chat(messages, {
      temperature: 0.3,
    })
    if (!result.error) {
      await consumeSharedQuota(resolved, params.userId)
    }
    return result
  }

  /** 动态生成练习题 */
  async generateExercise(
    params: GenerateExerciseParams,
  ): Promise<ExerciseResult> {
    const resolved = resolveProvider()
    if (!resolved) {
      return { exercise: { prompt: '', starterCode: '' }, error: NO_KEY_ERROR }
    }
    const quotaError = await assertSharedQuota(resolved, params.userId)
    if (quotaError) {
      return { exercise: { prompt: '', starterCode: '' }, error: quotaError }
    }
    const result = await resolved.provider.generateExercise(
      params.topic,
      params.level,
      params.language,
    )
    if (!result.error) {
      await consumeSharedQuota(resolved, params.userId)
    }
    return result
  }
}

/** AI 服务单例 */
export const aiService = new AIService()
