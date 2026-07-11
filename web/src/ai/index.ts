/**
 * AI 模块统一出口
 *
 * 业务层仅从本文件导入，保证依赖方向清晰。
 */
export type {
  AIProvider,
  ChatMessage,
  ChatOptions,
  ChatResult,
  ExerciseData,
  ExerciseResult,
} from './AIProvider'
export {
  OpenAICompatibleProvider,
  DEFAULT_BASE_URL,
  DEFAULT_MODEL,
} from './OpenAICompatibleProvider'
export type { OpenAICompatibleConfig } from './OpenAICompatibleProvider'
export {
  HINT_SYSTEM_PROMPT,
  EXPLAIN_SYSTEM_PROMPT,
  EXERCISE_SYSTEM_PROMPT,
  FUSION_JUDGE_PROMPT,
} from './prompts'
export {
  AIService,
  aiService,
  resolveProvider,
  isAiConfigured,
  loadCustomKey,
  saveCustomKey,
  clearCustomKey,
  hasCustomKey,
  NO_KEY_ERROR,
  BALANCE_EMPTY_ERROR,
} from './AIService'
export type {
  StoredAiKey,
  GetHintParams,
  ExplainCodeParams,
  GenerateExerciseParams,
} from './AIService'
export {
  DEFAULT_BALANCE,
  DEFAULT_DAILY_LIMIT,
  getDailyLimit,
  getCachedDailyLimit,
  checkQuota,
  checkBalance,
  consumeQuota,
  consumeBalance,
  logApiUsage,
  getFusionConfig,
  getQuotaStatus,
  todayStr,
} from './QuotaService'
export type { QuotaStatus } from './QuotaService'
export {
  NotImplementedPaymentService,
  paymentService,
} from './PaymentService'
export type {
  PaymentService,
  OrderStatus,
  CreateOrderParams,
  CreateOrderResult,
  OrderStatusResult,
} from './PaymentService'
