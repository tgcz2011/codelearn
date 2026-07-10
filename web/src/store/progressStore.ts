/**
 * 学习进度状态管理（zustand store）
 *
 * 职责：
 * - 管理当前用户的学习进度（哪些课节已完成）
 * - 通过 services.repository.saveProgress / getProgress 持久化到后端
 * - Supabase 未配置时（缺少 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY），
 *   services.container 初始化会抛错——此时仅更新本地内存 + localStorage，不报错
 *
 * 不直接 import @supabase/supabase-js，通过 DataRepository 接口访问后端。
 */
import { create } from 'zustand'
import type { DataRepository } from '@/services/interfaces'

/** localStorage key：本地进度缓存 */
const LS_KEY = 'codelearn_progress'

/** 从 localStorage 读取本地进度 */
function loadLocalProgress(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {}
  } catch {
    return {}
  }
}

/** 写入 localStorage 本地进度 */
function saveLocalProgress(data: Record<string, boolean>): void {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data))
  } catch {
    // localStorage 不可用时忽略
  }
}

/**
 * 懒加载 DataRepository。
 *
 * services.container 在模块加载时调用 initServices()，
 * 若 Supabase 未配置会直接抛错。用动态 import 捕获该错误，
 * 返回 null 表示后端不可用，降级为纯本地模式。
 */
let _repo: DataRepository | null | undefined
async function getRepo(): Promise<DataRepository | null> {
  if (_repo !== undefined) return _repo
  try {
    const mod = await import('@/services/container')
    _repo = mod.services.repository
    return _repo
  } catch {
    // Supabase 未配置（缺少环境变量），降级为纯本地模式
    _repo = null
    return null
  }
}

/** 进度 store 接口 */
export interface ProgressState {
  /** lessonId → 是否完成 */
  completed: Record<string, boolean>
  /** 当前用户 ID（未登录时为 'local-user'） */
  userId: string
  /** 是否正在加载 */
  loading: boolean

  /** 标记某课节完成 */
  markComplete: (lessonId: string, codeSnapshot?: string) => Promise<void>
  /** 加载某课程全部课节的进度 */
  loadProgress: (courseSlug: string) => Promise<void>
  /** 检查某课节是否已完成 */
  isCompleted: (lessonId: string) => boolean
  /** 设置当前用户 ID */
  setUserId: (userId: string) => void
}

/**
 * 获取某课程下所有 lesson 的 id 列表（从本地课程数据读取）。
 * 用动态 import 避免循环依赖。
 */
async function getLessonIds(courseSlug: string): Promise<string[]> {
  const { getCourseBySlug } = await import('@/courses')
  const course = getCourseBySlug(courseSlug)
  if (!course) return []
  return course.chapters.flatMap((ch) => ch.lessons.map((l) => l.id))
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  // 初始化时从 localStorage 读取本地缓存
  completed: loadLocalProgress(),
  userId: 'local-user',
  loading: false,

  markComplete: async (lessonId: string, codeSnapshot?: string) => {
    // 先更新本地状态（即时反馈）
    set((state) => {
      const completed = { ...state.completed, [lessonId]: true }
      saveLocalProgress(completed)
      return { completed }
    })

    // 尝试同步到后端
    const repo = await getRepo()
    if (!repo) return // 纯本地模式，不同步

    try {
      const { userId } = get()
      await repo.saveProgress(userId, lessonId, {
        completed: true,
        completed_at: new Date().toISOString(),
        code_snapshot: codeSnapshot ?? null,
      })
    } catch {
      // 后端写入失败时静默降级（本地状态已更新）
    }
  },

  loadProgress: async (courseSlug: string) => {
    set({ loading: true })

    const lessonIds = await getLessonIds(courseSlug)

    const repo = await getRepo()
    if (!repo) {
      // 纯本地模式：用 localStorage 缓存的数据
      set({ loading: false })
      return
    }

    try {
      const { userId } = get()
      const results = await Promise.all(
        lessonIds.map(async (id) => {
          try {
            const p = await repo.getProgress(userId, id)
            return [id, p?.completed ?? false] as const
          } catch {
            return [id, false] as const
          }
        }),
      )
      const completed: Record<string, boolean> = { ...get().completed }
      for (const [id, done] of results) {
        completed[id] = done
      }
      saveLocalProgress(completed)
      set({ completed, loading: false })
    } catch {
      set({ loading: false })
    }
  },

  isCompleted: (lessonId: string) => {
    return get().completed[lessonId] === true
  },

  setUserId: (userId: string) => {
    set({ userId })
  },
}))
