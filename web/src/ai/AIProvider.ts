/**
 * AI Provider 抽象接口（SubTask 7.1）
 *
 * 业务层只依赖本接口，具体实现（如 OpenAICompatibleProvider）可替换。
 * 新增 Provider（如 Anthropic / 本地 LLM）时实现本接口即可，业务层零改动。
 */

/** 单条对话消息，遵循 OpenAI Chat Completions 的角色约定 */
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

/** 调用选项 */
export interface ChatOptions {
  temperature?: number
  maxTokens?: number
  model?: string
}

/** chat 调用结果：成功返回 content，失败返回 error */
export interface ChatResult {
  content: string
  error?: string
}

/** 生成的练习题结构 */
export interface ExerciseData {
  prompt: string
  starterCode: string
  expectedOutput?: string
}

/** generateExercise 调用结果 */
export interface ExerciseResult {
  exercise: ExerciseData
  error?: string
}

/** AI 能力提供者 */
export interface AIProvider {
  /** 多轮对话 / 单次问答 */
  chat(messages: ChatMessage[], options?: ChatOptions): Promise<ChatResult>
  /** 生成一道编程练习题 */
  generateExercise(
    topic: string,
    level: string,
    language: string,
  ): Promise<ExerciseResult>
}
