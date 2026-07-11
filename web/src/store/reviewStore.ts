/**
 * 遗忘曲线复习状态管理（zustand store）
 *
 * 职责：
 * - 管理当前用户的复习计划条目（基于 SM-2 间隔重复算法）
 * - 通过 services.repository 持久化到 review_schedule 表
 * - 通过 services.realtimeService 订阅 review_schedule 表变更，实现跨设备实时同步
 * - Supabase 未配置时降级为纯本地内存模式（不持久化，不报错）
 *
 * SM-2 算法：
 * - quality >= 3 视为回忆成功，间隔按 1 → 6 → round(interval * EF) 递增
 * - quality < 3 视为遗忘，重置 repetition_count 与 interval
 * - Easiness Factor 按公式调整，下限 1.3
 *
 * 不直接 import @supabase/supabase-js，通过 DataRepository / RealtimeService 接口访问后端。
 * 与 progressStore 同模式：用动态 import 获取仓储/实时服务，避免循环依赖。
 */
import { create } from 'zustand'
import type {
  DataRepository,
  RealtimeService,
  RealtimePayload,
  ReviewScheduleItem,
} from '@/services/interfaces'

/** 复习条目（store 内部使用的精简结构） */
export interface ReviewItem {
  lesson_id: string
  easiness_factor: number
  interval_days: number
  repetition_count: number
  next_review_date: string
  last_review_date: string | null
}

/** localStorage key：本地复习缓存（纯本地模式/离线兜底） */
const LS_KEY = 'codelearn_reviews'

/** 从 localStorage 读取本地复习缓存 */
function loadLocalReviews(): ReviewItem[] {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? (JSON.parse(raw) as ReviewItem[]) : []
  } catch {
    return []
  }
}

/** 写入 localStorage 本地复习缓存 */
function saveLocalReviews(data: ReviewItem[]): void {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data))
  } catch {
    // localStorage 不可用时忽略
  }
}

/** 将仓储层实体映射为 store 内部结构 */
function toReviewItem(r: ReviewScheduleItem): ReviewItem {
  return {
    lesson_id: r.lesson_id,
    easiness_factor: r.easiness_factor,
    interval_days: r.interval_days,
    repetition_count: r.repetition_count,
    next_review_date: r.next_review_date,
    last_review_date: r.last_review_date,
  }
}

/** 返回今日日期（YYYY-MM-DD，本地时区） */
function todayStr(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** 计算从今日起增加 n 天后的日期（YYYY-MM-DD） */
function datePlusDays(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() + days)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/**
 * 懒加载 DataRepository。
 *
 * services.container 在模块加载时调用 initServices()，
 * 若 Supabase 未配置会创建占位 client（不抛错）。
 * 用动态 import 捕获模块加载异常，返回 null 表示后端不可用，降级为纯本地模式。
 */
let _repo: DataRepository | null | undefined
async function getRepo(): Promise<DataRepository | null> {
  if (_repo !== undefined) return _repo
  try {
    const { getRepository } = await import('@/services/container')
    _repo = getRepository()
    return _repo
  } catch {
    // Supabase 未配置（缺少环境变量），降级为纯本地模式
    _repo = null
    return null
  }
}

/**
 * 懒加载 RealtimeService。
 */
let _realtime: RealtimeService | null | undefined
async function getRealtime(): Promise<RealtimeService | null> {
  if (_realtime !== undefined) return _realtime
  try {
    const mod = await import('@/services/container')
    _realtime = mod.services.realtimeService
    return _realtime
  } catch {
    _realtime = null
    return null
  }
}

/** 当前 realtime 订阅的取消函数 */
let _unsubscribeRealtime: (() => void) | null = null

/** 复习 store 接口 */
export interface ReviewState {
  /** 全部复习条目（已加载的） */
  reviews: ReviewItem[]
  /** 当前用户 ID（未登录时为 'local-user'） */
  userId: string
  /** 是否正在加载 */
  loading: boolean

  /** 加载到期需要复习的条目（next_review_date <= today） */
  loadDueReviews: (userId: string) => Promise<void>
  /** 加载全部复习条目 */
  loadAllReviews: (userId: string) => Promise<void>
  /** 提交一次复习评分（quality 0-5），按 SM-2 计算下次间隔并同步后端 */
  submitReview: (lessonId: string, quality: number) => Promise<void>
  /** 返回到期待复习条目数量 */
  getDueCount: () => number
  /** 重置为本地模式（清空状态） */
  resetForUser: (userId: string) => void
  /** 设置当前用户 ID 并启动/停止实时同步 */
  setUserId: (userId: string) => void
}

export const useReviewStore = create<ReviewState>((set, get) => ({
  // 初始化时从 localStorage 读取本地缓存
  reviews: loadLocalReviews(),
  userId: 'local-user',
  loading: false,

  loadDueReviews: async (userId: string) => {
    set({ loading: true })

    const repo = await getRepo()
    if (!repo) {
      // 纯本地模式：用 localStorage 缓存的数据筛选到期项
      const today = todayStr()
      const due = loadLocalReviews().filter((r) => r.next_review_date <= today)
      set({ reviews: due, loading: false })
      return
    }

    try {
      const items = await repo.getDueReviews(userId)
      set({ reviews: items.map(toReviewItem), loading: false })
    } catch {
      set({ loading: false })
    }
  },

  loadAllReviews: async (userId: string) => {
    set({ loading: true })

    const repo = await getRepo()
    if (!repo) {
      set({ loading: false })
      return
    }

    try {
      const items = await repo.getAllReviews(userId)
      const reviews = items.map(toReviewItem)
      saveLocalReviews(reviews)
      set({ reviews, loading: false })
    } catch {
      set({ loading: false })
    }
  },

  submitReview: async (lessonId: string, quality: number) => {
    const { userId, reviews } = get()
    const existing = reviews.find((r) => r.lesson_id === lessonId)

    // ---- SM-2 算法 ----
    let ef = existing?.easiness_factor ?? 2.5
    let interval = existing?.interval_days ?? 1
    let repCount = existing?.repetition_count ?? 0

    if (quality >= 3) {
      if (repCount === 0) {
        interval = 1
      } else if (repCount === 1) {
        interval = 6
      } else {
        interval = Math.round(interval * ef)
      }
      repCount += 1
    } else {
      repCount = 0
      interval = 1
    }

    ef = Math.max(
      1.3,
      ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02),
    )

    const nextReviewDate = datePlusDays(interval)
    const lastReviewDate = todayStr()

    const updated: ReviewItem = {
      lesson_id: lessonId,
      easiness_factor: ef,
      interval_days: interval,
      repetition_count: repCount,
      next_review_date: nextReviewDate,
      last_review_date: lastReviewDate,
    }

    // 先更新本地状态（即时反馈）
    set((state) => {
      const others = state.reviews.filter((r) => r.lesson_id !== lessonId)
      const newReviews = [...others, updated]
      saveLocalReviews(newReviews)
      return { reviews: newReviews }
    })

    // 同步到后端
    const repo = await getRepo()
    if (!repo) return // 纯本地模式，不同步

    try {
      await repo.upsertReview(userId, lessonId, {
        easiness_factor: ef,
        interval_days: interval,
        repetition_count: repCount,
        next_review_date: nextReviewDate,
        last_review_date: lastReviewDate,
        quality,
      })
    } catch {
      // 后端写入失败时静默降级（本地状态已更新）
    }
  },

  getDueCount: () => {
    const today = todayStr()
    return get().reviews.filter((r) => r.next_review_date <= today).length
  },

  resetForUser: (userId: string) => {
    // 取消实时订阅
    if (_unsubscribeRealtime) {
      _unsubscribeRealtime()
      _unsubscribeRealtime = null
    }
    set({ reviews: [], userId, loading: false })
  },

  setUserId: (userId: string) => {
    set({ userId })

    // 取消旧的实时订阅
    if (_unsubscribeRealtime) {
      _unsubscribeRealtime()
      _unsubscribeRealtime = null
    }

    // 登录用户启动实时同步 + 全量加载复习条目
    if (userId !== 'local-user') {
      // 异步加载全部复习条目
      void get().loadAllReviews(userId)

      // 订阅 review_schedule 表变更（仅当前用户）
      void (async () => {
        const realtime = await getRealtime()
        if (!realtime) return

        _unsubscribeRealtime = realtime.subscribe(
          `review_schedule:${userId}`,
          { table: 'review_schedule', filter: `user_id=eq.${userId}` },
          (payload: RealtimePayload) => {
            const record = payload.record ?? payload.old_record
            const lessonId = record?.lesson_id as string | undefined
            if (!lessonId) return

            // 删除事件：移除本地条目
            if (payload.event === 'DELETE') {
              set((state) => {
                const newReviews = state.reviews.filter(
                  (r) => r.lesson_id !== lessonId,
                )
                saveLocalReviews(newReviews)
                return { reviews: newReviews }
              })
              return
            }

            // 新增/更新事件：用 record 同步本地条目
            const r = payload.record
            if (!r) return
            const item: ReviewItem = {
              lesson_id: r.lesson_id as string,
              easiness_factor: r.easiness_factor as number,
              interval_days: r.interval_days as number,
              repetition_count: r.repetition_count as number,
              next_review_date: r.next_review_date as string,
              last_review_date:
                (r.last_review_date as string | null | undefined) ?? null,
            }
            set((state) => {
              const others = state.reviews.filter(
                (x) => x.lesson_id !== lessonId,
              )
              const newReviews = [...others, item]
              saveLocalReviews(newReviews)
              return { reviews: newReviews }
            })
          },
        )
      })()
    } else {
      // 退出登录：清空内存状态
      set({ reviews: [] })
    }
  },
}))
