/**
 * 模型目录服务（ModelCatalog）
 *
 * 职责：
 * 1. 从 models.dev 的开放 API（https://models.dev/api.json）拉取并解析各家 Provider 的模型配置。
 * 2. 将按 Provider 组织的嵌套结构“拍平”为一维 CatalogModel 数组，便于上层检索。
 * 3. 跨 Provider 聚合：同一模型名（name）可能由多个 Provider 提供、价格不同，
 *    提供 getMaxPriceModels 取每个模型名下“最大输入价 + 最大输出价”的条目（取最大值需求）。
 * 4. 提供成本计算工具：按 token 用量估算单次调用 USD 成本，以及代码执行的固定单次成本。
 *
 * 设计要点：
 * - 仅使用浏览器原生 fetch，不引入额外依赖。
 * - 内存缓存 10 分钟，避免高频请求外部 API。
 * - 网络错误或解析失败时返回空数组，调用方需自行处理空结果降级。
 * - 本文件自包含，不依赖项目内其他模块。
 */

// ---- 常量 ----

/** models.dev 拉取模型目录的 API 地址 */
const MODELS_DEV_API_URL = 'https://models.dev/api.json'

/** 内存缓存有效期：10 分钟（单位：毫秒） */
const CACHE_TTL_MS = 10 * 60 * 1000

/** 代码执行单次成本：$1 / 200 次 = $0.005/次 */
export const CODE_EXEC_COST_PER_CALL = 0.005

// ---- 类型定义 ----

/** 拍平后的单个模型目录条目 */
export interface CatalogModel {
  /** 唯一标识，格式 "provider/modelId"，例如 "openai/gpt-4o-mini" */
  id: string
  /** Provider 标识，例如 "openai" */
  provider: string
  /** Provider 展示名，例如 "OpenAI" */
  providerName: string
  /** 模型展示名，例如 "GPT-4o Mini"（跨 Provider 可能重名） */
  name: string
  /** API 基地址，例如 "https://api.openai.com/v1" */
  apiBase: string
  /** 该 Provider 要求的环境变量名，例如 "OPENAI_API_KEY" */
  envVar: string
  /** 上下文窗口长度（token 数） */
  contextLength: number
  /** 单次输出上限（token 数） */
  outputLimit: number
  /** 输入单价（每百万 token，USD） */
  inputPrice: number
  /** 输出单价（每百万 token，USD） */
  outputPrice: number
  /** 支持的输入模态，例如 ["text", "image"] */
  inputModalities: string[]
  /** 支持的输出模态，例如 ["text"] */
  outputModalities: string[]
  /** 是否支持推理（reasoning）模式，如 o1 / o3 系列 */
  reasoning: boolean
  /** 是否支持附件（attachment）输入 */
  attachment: boolean
}

// ---- models.dev API 原始结构的最小类型描述 ----
// 仅声明实际使用的字段，其余字段忽略；所有字段均视为可选以增强健壮性。

interface RawCost {
  input?: number
  output?: number
}

interface RawLimit {
  context?: number
  output?: number
}

interface RawModalities {
  input?: string[]
  output?: string[]
}

interface RawModel {
  id?: string
  name?: string
  cost?: RawCost
  limit?: RawLimit
  modalities?: RawModalities
  /** models.dev 部分模型带此字段标识推理能力 */
  reasoning?: boolean
  /** models.dev 部分模型带此字段标识附件能力 */
  attachment?: boolean
}

interface RawProvider {
  id?: string
  name?: string
  api?: string
  env?: string[]
  models?: Record<string, RawModel>
}

type RawCatalog = Record<string, RawProvider>

// ---- 内存缓存 ----

/** 缓存的内容：上次拉取到的拍平模型列表 */
let _cachedModels: CatalogModel[] | null = null
/** 缓存写入时间戳（毫秒） */
let _cachedAt = 0

// ---- 解析工具 ----

/** 安全读取数值：非有限数返回 fallback */
function toNumber(value: unknown, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

/** 安全读取字符串数组：非数组返回 fallback */
function toStringArray(value: unknown, fallback: string[] = []): string[] {
  if (!Array.isArray(value)) return fallback
  return value.filter((v): v is string => typeof v === 'string')
}

/**
 * 将 models.dev 的原始嵌套结构解析为拍平的 CatalogModel 数组。
 * 同一模型名（name）若出现在多个 Provider 下，会保留全部条目；
 * 跨 Provider 的“取最大值”聚合由 getMaxPriceModels 完成。
 */
function parseCatalog(raw: RawCatalog): CatalogModel[] {
  const result: CatalogModel[] = []

  for (const providerKey of Object.keys(raw)) {
    const provider = raw[providerKey]
    if (!provider || typeof provider !== 'object') continue

    const providerId = provider.id ?? providerKey
    const providerName = provider.name ?? providerKey
    const apiBase = provider.api ?? ''
    // env 为数组时取第一个作为该 Provider 的代表环境变量
    const envVar = Array.isArray(provider.env) && provider.env.length > 0
      ? provider.env[0]
      : ''

    const models = provider.models
    if (!models || typeof models !== 'object') continue

    for (const modelKey of Object.keys(models)) {
      const model = models[modelKey]
      if (!model || typeof model !== 'object') continue

      const modelId = model.id ?? modelKey
      const cost = model.cost ?? {}
      const limit = model.limit ?? {}
      const modalities = model.modalities ?? {}

      result.push({
        id: `${providerId}/${modelId}`,
        provider: providerId,
        providerName,
        name: model.name ?? modelId,
        apiBase,
        envVar,
        contextLength: toNumber(limit.context),
        outputLimit: toNumber(limit.output),
        inputPrice: toNumber(cost.input),
        outputPrice: toNumber(cost.output),
        inputModalities: toStringArray(modalities.input),
        outputModalities: toStringArray(modalities.output),
        reasoning: model.reasoning === true,
        attachment: model.attachment === true,
      })
    }
  }

  return result
}

// ---- 对外 API ----

/**
 * 拉取并解析 models.dev 模型目录。
 *
 * 行为：
 * - 命中内存缓存且未过期（10 分钟内）时直接返回缓存，避免重复网络请求。
 * - 否则发起 fetch；成功则解析、刷新缓存并返回；失败（网络错误 / 非 JSON / 解析异常）返回空数组。
 *
 * @returns 拍平后的模型列表；失败时返回 []
 */
export async function fetchModelCatalog(): Promise<CatalogModel[]> {
  // 1. 命中缓存直接返回
  if (_cachedModels && Date.now() - _cachedAt < CACHE_TTL_MS) {
    return _cachedModels
  }

  // 2. 拉取远程数据
  try {
    const response = await fetch(MODELS_DEV_API_URL, {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // HTTP 错误状态：视为失败，返回空数组
      return []
    }
    const raw = (await response.json()) as RawCatalog
    const parsed = parseCatalog(raw)

    // 3. 刷新缓存
    _cachedModels = parsed
    _cachedAt = Date.now()
    return parsed
  } catch {
    // 网络错误或 JSON 解析失败：优雅降级，返回空数组
    return []
  }
}

/**
 * 跨 Provider 聚合：按模型名（name）分组，每组返回一个条目，
 * 其 inputPrice / outputPrice 取该组所有 Provider 中的最大值（取最大值需求）。
 *
 * 其余字段（contextLength、outputLimit、modalities 等）取该组中
 * “输入价最大”的条目作为代表；若输入价并列，取首个命中。
 *
 * @param models 拍平后的完整模型列表（通常为 fetchModelCatalog 的返回值）
 * @returns 每个模型名一个条目，价格已取最大值
 */
export function getMaxPriceModels(models: CatalogModel[]): CatalogModel[] {
  if (!Array.isArray(models) || models.length === 0) return []

  // 按模型名分组，保留首次出现顺序
  const groups = new Map<string, CatalogModel[]>()
  for (const m of models) {
    const arr = groups.get(m.name)
    if (arr) {
      arr.push(m)
    } else {
      groups.set(m.name, [m])
    }
  }

  const result: CatalogModel[] = []
  for (const group of groups.values()) {
    // 单条直接入选
    if (group.length === 1) {
      result.push(group[0])
      continue
    }

    // 计算组内最大输入价 / 最大输出价
    let maxInput = Number.NEGATIVE_INFINITY
    let maxOutput = Number.NEGATIVE_INFINITY
    for (const m of group) {
      if (m.inputPrice > maxInput) maxInput = m.inputPrice
      if (m.outputPrice > maxOutput) maxOutput = m.outputPrice
    }

    // 代表条目：取输入价最大的那条（并列取首个），再覆盖价格为组内最大值
    const representative = group.reduce((best, cur) =>
      cur.inputPrice > best.inputPrice ? cur : best,
    )

    result.push({
      ...representative,
      inputPrice: maxInput,
      outputPrice: maxOutput,
    })
  }

  return result
}

/**
 * 按 token 用量估算单次调用成本（USD）。
 *
 * 公式：(inputTokens / 1_000_000) * inputPrice + (outputTokens / 1_000_000) * outputPrice
 *
 * @param model 含 inputPrice / outputPrice（每百万 token，USD）的模型条目
 * @param inputTokens 输入 token 数
 * @param outputTokens 输出 token 数
 * @returns 成本（USD）
 */
export function calculateCost(
  model: { inputPrice: number; outputPrice: number },
  inputTokens: number,
  outputTokens: number,
): number {
  const inputCost = (inputTokens / 1_000_000) * model.inputPrice
  const outputCost = (outputTokens / 1_000_000) * model.outputPrice
  return inputCost + outputCost
}
