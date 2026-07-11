/**
 * 模型配置（管理员）
 *
 * 四大功能板块：
 * 1. AI 融合配置：启用/关闭、评审模型、候选模型列表，通过 set_ai_fusion_config 保存
 * 2. 代码执行计价：每美元可调用次数，调用 admin_set_code_exec_price
 * 3. models.dev 同步：拉取 https://models.dev/api.json，展示可用模型数
 * 4. 模型配置表：查看 / 新增自定义模型（写入 model_config 表）
 */
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { supabase } from '@/services/supabase/client'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

interface FusionConfig {
  enabled: boolean
  judge_model: string
  candidate_models: string[]
}

interface ModelConfigRow {
  id: string | number
  provider: string
  model_id: string
  display_name: string
  context_length: number
  input_price: number
  output_price: number
}

function num(v: unknown): number {
  if (typeof v === 'number') return v
  if (typeof v === 'string' && v !== '') {
    const n = Number(v)
    return Number.isFinite(n) ? n : 0
  }
  return 0
}

function str(v: unknown, fallback = ''): string {
  if (v === undefined || v === null) return fallback
  return String(v)
}

function pick(row: Record<string, unknown>, keys: string[]): unknown {
  for (const k of keys) {
    if (row[k] !== undefined && row[k] !== null) return row[k]
  }
  return undefined
}

function normalizeModel(row: Record<string, unknown>): ModelConfigRow {
  return {
    id: (pick(row, ['id', 'model_id', 'modelId']) as string | number) ?? '',
    provider: str(pick(row, ['provider'])),
    model_id: str(pick(row, ['model_id', 'modelId', 'id'])),
    display_name: str(pick(row, ['display_name', 'displayName', 'name'])),
    context_length: num(pick(row, ['context_length', 'contextLength'])),
    input_price: num(pick(row, ['input_price', 'inputPrice', 'price_input'])),
    output_price: num(pick(row, ['output_price', 'outputPrice', 'price_output'])),
  }
}

export default function ModelConfig() {
  // ---- 融合配置 ----
  const [fusion, setFusion] = useState<FusionConfig>({
    enabled: false,
    judge_model: '',
    candidate_models: [],
  })
  const [candidateInput, setCandidateInput] = useState('')
  const [fusionLoading, setFusionLoading] = useState(true)
  const [fusionSaving, setFusionSaving] = useState(false)
  const [fusionError, setFusionError] = useState<string | null>(null)
  const [fusionSaved, setFusionSaved] = useState(false)

  // ---- 代码执行计价 ----
  const [callsPerDollar, setCallsPerDollar] = useState(200)
  const [priceSaving, setPriceSaving] = useState(false)
  const [priceError, setPriceError] = useState<string | null>(null)
  const [priceSaved, setPriceSaved] = useState(false)

  // ---- models.dev 同步 ----
  const [devCount, setDevCount] = useState<number | null>(null)
  const [devLoading, setDevLoading] = useState(false)
  const [devError, setDevError] = useState<string | null>(null)

  // ---- 模型配置表 ----
  const [models, setModels] = useState<ModelConfigRow[]>([])
  const [modelsLoading, setModelsLoading] = useState(true)
  const [modelsError, setModelsError] = useState<string | null>(null)

  // 新增模型表单
  const [newModel, setNewModel] = useState({
    provider: '',
    model_id: '',
    display_name: '',
    context_length: '',
    input_price: '',
    output_price: '',
  })
  const [adding, setAdding] = useState(false)
  const [addError, setAddError] = useState<string | null>(null)

  // ---- 加载融合配置 ----
  const loadFusion = useCallback(async () => {
    setFusionLoading(true)
    setFusionError(null)
    try {
      const { data, error: rpcError } = await supabase.rpc('get_ai_fusion_config')
      if (rpcError) throw rpcError
      const raw = (data ?? {}) as Record<string, unknown>
      const candidates = pick(raw, ['candidate_models', 'candidateModels', 'candidates'])
      setFusion({
        enabled: Boolean(pick(raw, ['enabled', 'enable']) ?? false),
        judge_model: str(pick(raw, ['judge_model', 'judgeModel'])),
        candidate_models: Array.isArray(candidates)
          ? (candidates as unknown[]).map((c) => String(c))
          : typeof candidates === 'string' && candidates
            ? candidates.split(',').map((s) => s.trim()).filter(Boolean)
            : [],
      })
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setFusionError(`加载融合配置失败：${msg}`)
    } finally {
      setFusionLoading(false)
    }
  }, [])

  // ---- 加载模型配置表 ----
  const loadModels = useCallback(async () => {
    setModelsLoading(true)
    setModelsError(null)
    try {
      const { data, error: qError } = await supabase
        .from('model_config')
        .select('*')
        .order('provider', { ascending: true })
      if (qError) throw qError
      const raw = (data ?? []) as Record<string, unknown>[]
      setModels(raw.map(normalizeModel))
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setModelsError(`加载模型列表失败：${msg}`)
    } finally {
      setModelsLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadFusion()
    void loadModels()
  }, [loadFusion, loadModels])

  // ---- 保存融合配置 ----
  async function saveFusion() {
    setFusionSaving(true)
    setFusionError(null)
    setFusionSaved(false)
    try {
      const { error: rpcError } = await supabase.rpc('set_ai_fusion_config', {
        pConfig: {
          enabled: fusion.enabled,
          judge_model: fusion.judge_model,
          candidate_models: fusion.candidate_models,
        },
      })
      if (rpcError) throw rpcError
      setFusionSaved(true)
      setTimeout(() => setFusionSaved(false), 3000)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setFusionError(`保存失败：${msg}`)
    } finally {
      setFusionSaving(false)
    }
  }

  // ---- 保存代码执行计价 ----
  async function savePrice() {
    if (callsPerDollar < 1) {
      setPriceError('每美元调用次数必须大于 0')
      return
    }
    setPriceSaving(true)
    setPriceError(null)
    setPriceSaved(false)
    try {
      const { error: rpcError } = await supabase.rpc('admin_set_code_exec_price', {
        pCallsPerDollar: callsPerDollar,
      })
      if (rpcError) throw rpcError
      setPriceSaved(true)
      setTimeout(() => setPriceSaved(false), 3000)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setPriceError(`保存失败：${msg}`)
    } finally {
      setPriceSaving(false)
    }
  }

  // ---- 同步 models.dev ----
  async function syncModelsDev() {
    setDevLoading(true)
    setDevError(null)
    try {
      const res = await fetch('https://models.dev/api.json')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as unknown
      let count = 0
      if (Array.isArray(data)) {
        count = data.length
      } else if (typeof data === 'object' && data !== null) {
        // 可能是 { providers: [...] } 或 { models: {...} } 等
        const obj = data as Record<string, unknown>
        const arr = obj.models ?? obj.providers ?? obj.data
        if (Array.isArray(arr)) count = arr.length
        else if (typeof arr === 'object' && arr !== null) {
          count = Object.keys(arr).length
        }
      }
      setDevCount(count)
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setDevError(`同步失败：${msg}`)
    } finally {
      setDevLoading(false)
    }
  }

  // ---- 新增自定义模型 ----
  async function addModel() {
    if (!newModel.provider.trim() || !newModel.model_id.trim()) {
      setAddError('提供商和模型 ID 不能为空')
      return
    }
    setAdding(true)
    setAddError(null)
    try {
      const { error: insertError } = await supabase.from('model_config').insert({
        provider: newModel.provider.trim(),
        model_id: newModel.model_id.trim(),
        display_name: newModel.display_name.trim() || newModel.model_id.trim(),
        context_length: newModel.context_length
          ? Number(newModel.context_length)
          : null,
        input_price: newModel.input_price ? Number(newModel.input_price) : null,
        output_price: newModel.output_price ? Number(newModel.output_price) : null,
      })
      if (insertError) throw insertError
      setNewModel({
        provider: '',
        model_id: '',
        display_name: '',
        context_length: '',
        input_price: '',
        output_price: '',
      })
      await loadModels()
    } catch (e) {
      const msg =
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message: unknown }).message)
          : String(e)
      setAddError(`添加失败：${msg}`)
    } finally {
      setAdding(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* 1. AI 融合配置 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-800">AI 融合配置</h3>
        <p className="mt-1 text-xs text-slate-500">
          配置多模型融合回答，由评审模型从候选模型输出中择优。
        </p>

        {fusionLoading ? (
          <div className="flex justify-center py-6">
            <Spinner />
          </div>
        ) : (
          <>
            {fusionError && (
              <p className="mt-3 text-xs text-red-600">{fusionError}</p>
            )}
            {fusionSaved && (
              <p className="mt-3 text-xs text-emerald-600">融合配置已保存</p>
            )}

            {/* 启用开关 */}
            <div className="mt-4">
              <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={fusion.enabled}
                  onChange={(e) =>
                    setFusion({ ...fusion, enabled: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-400"
                />
                启用 AI 融合
              </label>
            </div>

            {/* 评审模型 */}
            <div className="mt-4">
              <label className="mb-1 block text-xs font-medium text-slate-600">
                评审模型 (Judge Model)
              </label>
              <input
                type="text"
                value={fusion.judge_model}
                onChange={(e) =>
                  setFusion({ ...fusion, judge_model: e.target.value })
                }
                placeholder="例如：gpt-4o"
                className="w-full max-w-md rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>

            {/* 候选模型列表 */}
            <div className="mt-4">
              <label className="mb-1 block text-xs font-medium text-slate-600">
                候选模型
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={candidateInput}
                  onChange={(e) => setCandidateInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && candidateInput.trim()) {
                      setFusion({
                        ...fusion,
                        candidate_models: [
                          ...fusion.candidate_models,
                          candidateInput.trim(),
                        ],
                      })
                      setCandidateInput('')
                    }
                  }}
                  placeholder="输入模型 ID 后回车添加"
                  className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
                />
                <Button
                  variant="secondary"
                  className="px-3 py-2 text-xs"
                  onClick={() => {
                    if (!candidateInput.trim()) return
                    setFusion({
                      ...fusion,
                      candidate_models: [
                        ...fusion.candidate_models,
                        candidateInput.trim(),
                      ],
                    })
                    setCandidateInput('')
                  }}
                >
                  添加
                </Button>
              </div>
              {fusion.candidate_models.length > 0 && (
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {fusion.candidate_models.map((m, i) => (
                    <li
                      key={`${m}-${i}`}
                      className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
                    >
                      {m}
                      <button
                        type="button"
                        onClick={() =>
                          setFusion({
                            ...fusion,
                            candidate_models: fusion.candidate_models.filter(
                              (_, idx) => idx !== i,
                            ),
                          })
                        }
                        className="text-slate-400 hover:text-red-500"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-5">
              <Button
                loading={fusionSaving}
                onClick={() => void saveFusion()}
                className="px-4 py-2 text-sm"
              >
                保存融合配置
              </Button>
            </div>
          </>
        )}
      </div>

      {/* 2. 代码执行计价 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-800">代码执行计价</h3>
        <p className="mt-1 text-xs text-slate-500">
          配置每美元可执行的代码运行次数，影响用户代码执行扣费。
        </p>

        {priceError && (
          <p className="mt-3 text-xs text-red-600">{priceError}</p>
        )}
        {priceSaved && (
          <p className="mt-3 text-xs text-emerald-600">计价配置已保存</p>
        )}

        <div className="mt-4 flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              每美元调用次数
            </label>
            <input
              type="number"
              min={1}
              value={callsPerDollar}
              onChange={(e) => setCallsPerDollar(Number(e.target.value))}
              className="w-36 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
          </div>
          <div className="pb-2 text-sm text-slate-500">
            当前每次调用费用：
            <span className="font-medium text-slate-700">
              ${(1 / callsPerDollar).toFixed(4)}
            </span>
          </div>
          <Button
            loading={priceSaving}
            onClick={() => void savePrice()}
            className="px-4 py-2 text-sm"
          >
            保存
          </Button>
        </div>
      </div>

      {/* 3. models.dev 同步 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-800">同步 models.dev</h3>
        <p className="mt-1 text-xs text-slate-500">
          从 models.dev 拉取最新的可用模型列表。
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button
            variant="secondary"
            loading={devLoading}
            onClick={() => void syncModelsDev()}
            className="px-4 py-2 text-sm"
          >
            同步 models.dev
          </Button>
          {devCount !== null && (
            <span className="text-sm text-slate-600">
              可用模型数：
              <span className="font-semibold text-slate-800">
                {devCount.toLocaleString()}
              </span>
            </span>
          )}
          {devError && <span className="text-xs text-red-600">{devError}</span>}
        </div>
      </div>

      {/* 4. 模型配置表 + 新增表单 */}
      <div className="rounded-lg border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-800">已配置模型</h3>
        </div>

        {/* 新增表单 */}
        <div className="border-b border-slate-100 bg-slate-50 p-4">
          <p className="mb-3 text-xs font-medium text-slate-600">添加自定义模型</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
            <input
              type="text"
              placeholder="提供商"
              value={newModel.provider}
              onChange={(e) =>
                setNewModel({ ...newModel, provider: e.target.value })
              }
              className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
            <input
              type="text"
              placeholder="模型 ID"
              value={newModel.model_id}
              onChange={(e) =>
                setNewModel({ ...newModel, model_id: e.target.value })
              }
              className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
            <input
              type="text"
              placeholder="显示名"
              value={newModel.display_name}
              onChange={(e) =>
                setNewModel({ ...newModel, display_name: e.target.value })
              }
              className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
            <input
              type="number"
              placeholder="上下文长度"
              value={newModel.context_length}
              onChange={(e) =>
                setNewModel({ ...newModel, context_length: e.target.value })
              }
              className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
            <input
              type="number"
              step="0.000001"
              placeholder="输入价格 ($/1K)"
              value={newModel.input_price}
              onChange={(e) =>
                setNewModel({ ...newModel, input_price: e.target.value })
              }
              className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
            <input
              type="number"
              step="0.000001"
              placeholder="输出价格 ($/1K)"
              value={newModel.output_price}
              onChange={(e) =>
                setNewModel({ ...newModel, output_price: e.target.value })
              }
              className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Button
              loading={adding}
              onClick={() => void addModel()}
              className="px-3 py-1.5 text-xs"
            >
              添加模型
            </Button>
            {addError && <span className="text-xs text-red-600">{addError}</span>}
          </div>
        </div>

        {/* 模型列表 */}
        {modelsLoading ? (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        ) : modelsError ? (
          <div className="p-4 text-sm text-red-600">{modelsError}</div>
        ) : models.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-400">
            暂无已配置模型
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <Th>提供商</Th>
                  <Th>模型 ID</Th>
                  <Th>显示名</Th>
                  <Th className="text-right">上下文长度</Th>
                  <Th className="text-right">输入价格 ($/1K)</Th>
                  <Th className="text-right">输出价格 ($/1K)</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {models.map((m, i) => (
                  <tr key={`${m.provider}-${m.model_id}-${i}`} className="hover:bg-slate-50">
                    <Td className="font-medium text-slate-800">{m.provider}</Td>
                    <Td className="text-slate-600">{m.model_id}</Td>
                    <Td>{m.display_name || '-'}</Td>
                    <Td className="text-right tabular-nums">
                      {m.context_length > 0
                        ? m.context_length.toLocaleString()
                        : '-'}
                    </Td>
                    <Td className="text-right tabular-nums">
                      {m.input_price > 0 ? m.input_price.toFixed(6) : '-'}
                    </Td>
                    <Td className="text-right tabular-nums">
                      {m.output_price > 0 ? m.output_price.toFixed(6) : '-'}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

function Th({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <th
      className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 ${className}`}
    >
      {children}
    </th>
  )
}

function Td({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <td className={`px-4 py-3 text-sm text-slate-700 ${className}`}>{children}</td>
}
