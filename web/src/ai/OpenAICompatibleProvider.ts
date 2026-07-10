/**
 * OpenAI 兼容接口的 Provider 实现（SubTask 7.2）
 *
 * 使用标准 fetch 手写请求，不引入 openai SDK，减少依赖。
 * 兼容任何遵循 OpenAI Chat Completions 协议的端点：
 *   - OpenAI：https://api.openai.com/v1
 *   - DeepSeek：https://api.deepseek.com（或 .../v1）
 *   - Ollama：http://localhost:11434/v1
 *   - 其它自托管 vLLM / LM Studio 等
 */
import type {
  AIProvider,
  ChatMessage,
  ChatOptions,
  ChatResult,
  ExerciseData,
  ExerciseResult,
} from './AIProvider'
import { EXERCISE_SYSTEM_PROMPT } from './prompts'

/** 构造参数 */
export interface OpenAICompatibleConfig {
  /** 含版本路径的 base url，如 https://api.openai.com/v1 */
  baseUrl: string
  apiKey: string
  defaultModel: string
}

/** 请求超时（毫秒） */
const REQUEST_TIMEOUT_MS = 60_000

export class OpenAICompatibleProvider implements AIProvider {
  private readonly baseUrl: string
  private readonly apiKey: string
  private readonly defaultModel: string

  constructor(config: OpenAICompatibleConfig) {
    // 去除尾部斜杠，避免 //chat/completions
    this.baseUrl = config.baseUrl.replace(/\/+$/, '')
    this.apiKey = config.apiKey
    this.defaultModel = config.defaultModel
  }

  async chat(
    messages: ChatMessage[],
    options?: ChatOptions,
  ): Promise<ChatResult> {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
    try {
      const body: Record<string, unknown> = {
        model: options?.model ?? this.defaultModel,
        messages,
      }
      if (options?.temperature !== undefined) {
        body.temperature = options.temperature
      }
      if (options?.maxTokens !== undefined) {
        body.max_tokens = options.maxTokens
      }

      const res = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
        signal: controller.signal,
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        const text = await safeReadText(res)
        return { content: '', error: mapHttpError(res.status, text) }
      }

      const data: unknown = await res.json()
      const content = extractContent(data)
      if (content === null) {
        return { content: '', error: 'AI 返回格式异常，未能解析到内容。' }
      }
      return { content }
    } catch (e) {
      return { content: '', error: mapNetworkError(e) }
    } finally {
      clearTimeout(timer)
    }
  }

  async generateExercise(
    topic: string,
    level: string,
    language: string,
  ): Promise<ExerciseResult> {
    const messages: ChatMessage[] = [
      { role: 'system', content: EXERCISE_SYSTEM_PROMPT },
      {
        role: 'user',
        content: `主题：${topic}\n难度：${level}\n编程语言：${language}\n请生成一道练习题，只返回 JSON。`,
      },
    ]
    const { content, error } = await this.chat(messages, {
      temperature: 0.7,
    })
    if (error) {
      return { exercise: { prompt: '', starterCode: '' }, error }
    }
    return { exercise: parseExerciseJson(content) }
  }
}

// ---- 辅助函数 ----

/** 安全读取响应体文本（忽略读取失败） */
async function safeReadText(res: Response): Promise<string> {
  try {
    return await res.text()
  } catch {
    return ''
  }
}

/** 从 OpenAI 兼容响应中提取 choices[0].message.content */
function extractContent(data: unknown): string | null {
  if (typeof data !== 'object' || data === null) return null
  const choices = (data as { choices?: unknown }).choices
  if (!Array.isArray(choices) || choices.length === 0) return null
  const first = choices[0] as { message?: unknown } | undefined
  const message = first?.message
  if (typeof message !== 'object' || message === null) return null
  const content = (message as { content?: unknown }).content
  return typeof content === 'string' ? content : null
}

/** 将 HTTP 状态码映射为友好错误信息 */
function mapHttpError(status: number, body: string): string {
  if (status === 401) return 'API Key 无效或未授权，请在设置中检查。'
  if (status === 403) return 'API Key 无访问权限，请在设置中检查。'
  if (status === 429) return '请求过于频繁（限流），请稍后再试。'
  if (status >= 500) return `AI 服务暂时不可用（${status}），请稍后再试。`
  // 尝试从 body 中提取 error.message
  const detail = extractErrorMessage(body)
  if (detail) return `AI 请求失败（HTTP ${status}）：${detail}`
  return `AI 请求失败（HTTP ${status}）。`
}

/** 从响应体文本中尝试提取 error.message 字段 */
function extractErrorMessage(body: string): string | null {
  if (!body) return null
  try {
    const obj = JSON.parse(body) as unknown
    if (typeof obj !== 'object' || obj === null) return null
    const err = (obj as { error?: unknown }).error
    if (typeof err === 'object' && err !== null) {
      const msg = (err as { message?: unknown }).message
      if (typeof msg === 'string') return msg
    }
    if (typeof err === 'string') return err
    return null
  } catch {
    return null
  }
}

/** 将网络/超时异常映射为友好错误信息 */
function mapNetworkError(e: unknown): string {
  if (e instanceof DOMException && e.name === 'AbortError') {
    return `AI 请求超时（${REQUEST_TIMEOUT_MS / 1000}s），请稍后再试。`
  }
  // fetch 网络层失败（DNS/连接拒绝/CORS）抛 TypeError
  if (e instanceof TypeError) {
    return '网络连接失败，请检查网络或 Base URL 配置。'
  }
  return e instanceof Error ? e.message : String(e)
}

/**
 * 容错解析练习题 JSON。
 * - 先尝试剥离 ```json 代码块；
 * - 再尝试截取首个 { 到末个 } 之间的子串；
 * - 全部失败时，把原文作为 prompt 返回（starterCode 留空）。
 */
function parseExerciseJson(content: string): ExerciseData {
  const jsonText = extractJson(content)
  if (jsonText) {
    try {
      const obj = JSON.parse(jsonText) as unknown
      if (typeof obj === 'object' && obj !== null) {
        const o = obj as {
          prompt?: unknown
          starterCode?: unknown
          starter_code?: unknown
          expectedOutput?: unknown
          expected_output?: unknown
        }
        const prompt = typeof o.prompt === 'string' ? o.prompt : ''
        const starterCode =
          typeof o.starterCode === 'string'
            ? o.starterCode
            : typeof o.starter_code === 'string'
              ? o.starter_code
              : ''
        const expectedOutput =
          typeof o.expectedOutput === 'string'
            ? o.expectedOutput
            : typeof o.expected_output === 'string'
              ? o.expected_output
              : undefined
        if (prompt) {
          return { prompt, starterCode, expectedOutput }
        }
      }
    } catch {
      // 落入兜底分支
    }
  }
  return { prompt: content.trim(), starterCode: '' }
}

/** 从可能含代码块/多余文字的内容中提取 JSON 字符串 */
function extractJson(content: string): string | null {
  const trimmed = content.trim()
  // 1. 剥离 ```json ... ``` 代码块
  const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i)
  const candidate = fence ? fence[1].trim() : trimmed
  // 2. 直接尝试
  try {
    JSON.parse(candidate)
    return candidate
  } catch {
    // 继续截取
  }
  // 3. 截取首个 { 到末个 }
  const start = candidate.indexOf('{')
  const end = candidate.lastIndexOf('}')
  if (start !== -1 && end !== -1 && end > start) {
    return candidate.slice(start, end + 1)
  }
  return null
}

/** 默认 base url，供设置页与 AIService 复用 */
export const DEFAULT_BASE_URL = 'https://api.openai.com/v1'
/** 默认模型，供设置页与 AIService 复用 */
export const DEFAULT_MODEL = 'gpt-4o-mini'
