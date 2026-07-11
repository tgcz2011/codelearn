/**
 * AI 高层服务封装
 *
 * 职责：
 * 1. 选择 Provider：优先使用用户自定义 Key（localStorage），其次平台共享 Key（环境变量）。
 * 2. 金额制计费：共享 Key 调用消耗用户余额（USD），按实际 token 用量计费。
 * 3. 调用日志：每次调用都记录到 api_usage_log（含 token 用量、费用、模型信息）。
 * 4. 融合模式：可选启用，多个候选模型并行回答，由裁判模型选出最佳答案。
 *
 * 安全权衡：用户自定义 API Key 存储在 localStorage（key: 'codelearn_ai_key'），
 * 不上传后端。自定义 Key 调用不消耗平台余额，但仍会记录调用日志（is_custom_model=true）。
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
import {
  HINT_SYSTEM_PROMPT,
  EXPLAIN_SYSTEM_PROMPT,
  FUSION_JUDGE_PROMPT,
} from './prompts'
import {
  checkBalance,
  consumeBalance,
  logApiUsage,
  getFusionConfig,
} from './QuotaService'

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
/** 余额不足时的错误提示 */
export const BALANCE_EMPTY_ERROR = '余额不足，请联系管理员充值或配置自己的 API Key。'

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
  /** true = 用户自定义 Key（不消耗余额）；false = 平台共享 Key（消耗余额） */
  isCustom: boolean
  /** 使用的模型名 */
  model: string
  /** Provider 标识（用于日志） */
  providerName: string
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
      model: custom.model,
      providerName: custom.baseUrl,
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
      model: DEFAULT_MODEL,
      providerName: baseUrl,
    }
  }
  return null
}

/** 判断当前是否已配置可用的 AI Provider（供 UI 提示） */
export function isAiConfigured(): boolean {
  return resolveProvider() !== null
}

// ---- 计费辅助 ----

/**
 * 根据实际 token 用量计算成本。
 * 目前使用保守估算，未来可对接 models.dev 价格数据精确计算。
 */
function calculateActualCost(
  inputTokens: number,
  outputTokens: number,
): number {
  // 保守估算：输入 $2/1M，输出 $8/1M
  const inputCost = (inputTokens / 1_000_000) * 2
  const outputCost = (outputTokens / 1_000_000) * 8
  return inputCost + outputCost
}

/** 共享 Key 且有用户标识时校验余额；不足返回错误信息，否则返回 null */
async function assertBalance(
  resolved: ResolvedProvider,
  userId?: string,
  estimatedCost = 0.001,
): Promise<string | null> {
  if (resolved.isCustom) return null // 自定义 Key 不消耗余额
  if (!userId) return null // 无用户标识无法计量，允许使用
  const balance = await checkBalance(userId)
  if (balance <= 0 || balance < estimatedCost) return BALANCE_EMPTY_ERROR
  return null
}

/** 记录调用并扣减余额 */
async function recordAndCharge(
  resolved: ResolvedProvider,
  userId: string | undefined,
  callType: string,
  result: ChatResult,
): Promise<void> {
  if (!userId) return

  const inputTokens = result.inputTokens ?? 0
  const outputTokens = result.outputTokens ?? 0
  const cost = calculateActualCost(inputTokens, outputTokens)

  // 记录调用日志（自定义和共享都记录）
  await logApiUsage({
    userId,
    callType,
    provider: resolved.providerName,
    model: result.model ?? resolved.model,
    inputTokens,
    outputTokens,
    cost,
    isCustomModel: resolved.isCustom,
  })

  // 仅共享 Key 扣减余额
  if (!resolved.isCustom && cost > 0) {
    await consumeBalance(userId, cost)
  }
}

// ---- 融合模式 ----

/** 融合模式：多个候选模型并行回答，裁判模型选出最佳 */
async function chatWithFusion(
  messages: ChatMessage[],
  primaryResolved: ResolvedProvider,
  callType: string,
  userId?: string,
): Promise<ChatResult> {
  const fusionConfig = await getFusionConfig()
  if (!fusionConfig.enabled || fusionConfig.candidateModels.length === 0) {
    // 融合未启用或无候选模型，走普通调用
    return primaryResolved.provider.chat(messages)
  }

  // 并行调用所有候选模型
  const candidateResults = await Promise.all(
    fusionConfig.candidateModels.map(async (modelId) => {
      // 候选模型用同一个 provider（共享 Key），只是切换模型
      const result = await primaryResolved.provider.chat(messages, {
        model: modelId,
      })
      return { modelId, result }
    }),
  )

  // 过滤掉出错的候选
  const validResults = candidateResults.filter(
    (r) => !r.result.error && r.result.content,
  )

  if (validResults.length === 0) {
    // 全部失败，返回第一个错误
    return candidateResults[0]?.result ?? { content: '', error: '所有候选模型均调用失败' }
  }

  if (validResults.length === 1) {
    // 只有一个成功，直接返回
    const winner = validResults[0]
    await recordAndCharge(primaryResolved, userId, callType, winner.result)
    return winner.result
  }

  // 调用裁判模型评估
  const judgeMessages: ChatMessage[] = [
    { role: 'system', content: FUSION_JUDGE_PROMPT },
    {
      role: 'user',
      content: validResults
        .map(
          (r, i) =>
            `--- 回答 ${i}（模型：${r.modelId}）---\n${r.result.content}`,
        )
        .join('\n\n'),
    },
  ]

  const judgeResult = await primaryResolved.provider.chat(judgeMessages, {
    model: fusionConfig.judgeModel || undefined,
    temperature: 0,
  })

  // 尝试解析裁判结果
  const judged = parseJudgeResult(judgeResult.content)
  if (judged && judged.bestIndex >= 0 && judged.bestIndex < validResults.length) {
    const winner = validResults[judged.bestIndex]
    // 记录所有候选调用 + 裁判调用
    for (const candidate of validResults) {
      await recordAndCharge(primaryResolved, userId, `${callType}_fusion_candidate`, candidate.result)
    }
    await recordAndCharge(primaryResolved, userId, `${callType}_fusion_judge`, judgeResult)
    return {
      content: judged.mergedAnswer || winner.result.content,
      inputTokens: winner.result.inputTokens,
      outputTokens: winner.result.outputTokens,
      model: winner.modelId,
    }
  }

  // 裁判解析失败，返回第一个有效结果
  const winner = validResults[0]
  for (const candidate of validResults) {
    await recordAndCharge(primaryResolved, userId, `${callType}_fusion_candidate`, candidate.result)
  }
  await recordAndCharge(primaryResolved, userId, `${callType}_fusion_judge`, judgeResult)
  return winner.result
}

/** 解析裁判模型的 JSON 输出 */
function parseJudgeResult(content: string): {
  bestIndex: number
  reason: string
  mergedAnswer: string
} | null {
  try {
    // 尝试提取 JSON
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (!jsonMatch) return null
    const parsed = JSON.parse(jsonMatch[0]) as {
      bestIndex?: unknown
      reason?: unknown
      mergedAnswer?: unknown
    }
    return {
      bestIndex: typeof parsed.bestIndex === 'number' ? parsed.bestIndex : 0,
      reason: typeof parsed.reason === 'string' ? parsed.reason : '',
      mergedAnswer:
        typeof parsed.mergedAnswer === 'string' ? parsed.mergedAnswer : '',
    }
  } catch {
    return null
  }
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
    const balanceError = await assertBalance(resolved, params.userId)
    if (balanceError) return { content: '', error: balanceError }

    const messages: ChatMessage[] = [
      { role: 'system', content: HINT_SYSTEM_PROMPT },
      {
        role: 'user',
        content: `课程：${params.lessonTitle}\n这是我第 ${params.attemptCount} 次请求提示。\n\n我目前的代码：\n\`\`\`\n${params.userCode || '(还没有写代码)'}\n\`\`\`\n\n请给我一个提示。`,
      },
    ]

    const result = await chatWithFusion(messages, resolved, 'hint', params.userId)
    if (!result.error) {
      await recordAndCharge(resolved, params.userId, 'hint', result)
    }
    return result
  }

  /** 代码解释 */
  async explainCode(params: ExplainCodeParams): Promise<ChatResult> {
    const resolved = resolveProvider()
    if (!resolved) return { content: '', error: NO_KEY_ERROR }
    const balanceError = await assertBalance(resolved, params.userId)
    if (balanceError) return { content: '', error: balanceError }

    const messages: ChatMessage[] = [
      { role: 'system', content: EXPLAIN_SYSTEM_PROMPT },
      {
        role: 'user',
        content: `请解释以下 ${params.language} 代码：\n\`\`\`${params.language}\n${params.code}\n\`\`\``,
      },
    ]

    const result = await chatWithFusion(messages, resolved, 'explain', params.userId)
    if (!result.error) {
      await recordAndCharge(resolved, params.userId, 'explain', result)
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
    const balanceError = await assertBalance(resolved, params.userId)
    if (balanceError) {
      return { exercise: { prompt: '', starterCode: '' }, error: balanceError }
    }

    // 练习题生成不走融合模式（需要结构化 JSON 输出）
    const result = await resolved.provider.generateExercise(
      params.topic,
      params.level,
      params.language,
    )
    if (!result.error) {
      // generateExercise 内部已调用 chat，记录日志
      // 由于 generateExercise 不返回 token 信息，这里记录基础日志
      await logApiUsage({
        userId: params.userId ?? '',
        callType: 'exercise',
        provider: resolved.providerName,
        model: resolved.model,
        inputTokens: 0,
        outputTokens: 0,
        cost: 0,
        isCustomModel: resolved.isCustom,
      })
      if (!resolved.isCustom) {
        // 共享 Key 扣减估算费用
        await consumeBalance(params.userId ?? '', 0.001)
      }
    }
    return result
  }
}

/** AI 服务单例 */
export const aiService = new AIService()
