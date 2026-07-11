/**
 * 认证状态管理（Zustand）
 *
 * - 通过 services.authService 监听登录态变化，不直接 import 任何后端 SDK。
 * - 使用 persist 中间件持久化 user 基本信息（仅 id/email，不含敏感数据）。
 * - loading 标记初始会话恢复过程，供路由守卫判断是否等待。
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { services } from '@/services/container'
import type { AuthSession, LinkedIdentity } from '@/services/interfaces'

export interface AuthUser {
  id: string
  email: string
}

export interface AuthState {
  user: AuthUser | null
  isAdmin: boolean
  loading: boolean
  /** 后端是否可用（未配置 Supabase 时为 false，用于友好提示） */
  backendAvailable: boolean
  /** 当前用户已绑定的身份列表（邮箱/GitHub 等） */
  identities: LinkedIdentity[]
  initAuth: () => Promise<void>
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signUp: (
    email: string,
    password: string,
  ) => Promise<{ error: string | null }>
  signInWithOAuth: (provider: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  /** 内部：根据会话刷新 user/isAdmin */
  applySession: (session: AuthSession) => Promise<void>
  /** 拉取当前用户已绑定的身份列表 */
  refreshIdentities: () => Promise<void>
  /** 当前用户主动绑定 GitHub（需已登录） */
  linkGitHub: () => Promise<{ error: string | null }>
  /** 解绑指定身份（保留至少一个） */
  unlinkIdentity: (identityId: string) => Promise<{ error: string | null }>
}

/** 判断错误是否为后端未配置类（环境变量缺失/网络不可达） */
function isBackendUnavailable(error: unknown): boolean {
  const msg =
    typeof error === 'object' && error !== null && 'message' in error
      ? String((error as { message: unknown }).message)
      : String(error)
  return (
    msg.includes('Failed to fetch') ||
    msg.includes('NetworkError') ||
    msg.includes('fetch') ||
    msg.includes('placeholder') ||
    msg.includes('Invalid API key') ||
    msg.includes('JWT')
  )
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAdmin: false,
      loading: true,
      backendAvailable: true,
      identities: [],

      applySession: async (session) => {
        if (session.user) {
          let admin = false
          try {
            admin = await services.authService.isAdmin()
          } catch {
            admin = false
          }
          set({ user: session.user, isAdmin: admin, loading: false })
          // 同步进度 store 的 userId，启动实时同步 + 全量加载进度
          const { useProgressStore } = await import('./progressStore')
          useProgressStore.getState().setUserId(session.user.id)
          // 同步复习 store 的 userId，加载复习计划 + 订阅实时变更
          const { useReviewStore } = await import('./reviewStore')
          useReviewStore.getState().setUserId(session.user.id)
          // 登录后异步拉取已绑定的身份列表（不阻塞主流程）
          void get().refreshIdentities()
        } else {
          set({ user: null, isAdmin: false, loading: false, identities: [] })
          // 退出登录：重置进度 store 为本地模式
          const { useProgressStore } = await import('./progressStore')
          useProgressStore.getState().setUserId('local-user')
          // 退出登录：重置复习 store 为本地模式
          const { useReviewStore } = await import('./reviewStore')
          useReviewStore.getState().setUserId('local-user')
        }
      },

      refreshIdentities: async () => {
        try {
          const list = await services.authService.getLinkedIdentities()
          set({ identities: list })
        } catch {
          // 静默失败：身份列表非关键路径
        }
      },

      linkGitHub: async () => {
        try {
          const { error } = await services.authService.linkGitHub()
          if (error) {
            set({ backendAvailable: !isBackendUnavailable(error) })
            return { error }
          }
          // 成功时浏览器会被重定向，无需本地刷新
          return { error: null }
        } catch (e) {
          set({ backendAvailable: !isBackendUnavailable(e) })
          return { error: formatError(e) }
        }
      },

      unlinkIdentity: async (identityId) => {
        try {
          const { error } =
            await services.authService.unlinkIdentity(identityId)
          if (error) return { error }
          // 解绑成功后刷新身份列表
          await get().refreshIdentities()
          return { error: null }
        } catch (e) {
          return { error: formatError(e) }
        }
      },

      initAuth: async () => {
        // 启动时恢复会话
        try {
          const session = await services.authService.getSession()
          await get().applySession(session)
        } catch (e) {
          // 后端不可用：标记并结束 loading，避免路由守卫永久卡住
          set({
            user: null,
            isAdmin: false,
            loading: false,
            backendAvailable: !isBackendUnavailable(e),
          })
        }
        // 订阅后续登录态变化
        try {
          services.authService.onAuthChange((session) => {
            void get().applySession(session)
          })
        } catch {
          // onAuthChange 失败时静默处理，已通过 getSession 设过状态
        }
      },

      signIn: async (email, password) => {
        try {
          const { error } = await services.authService.signIn(email, password)
          if (error) {
            set({ backendAvailable: !isBackendUnavailable(error) })
            return { error }
          }
          // 成功后立即拉取会话刷新 store（onAuthChange 也会触发，这里加速）
          try {
            const session = await services.authService.getSession()
            await get().applySession(session)
          } catch {
            // 忽略：onAuthChange 会兜底
          }
          return { error: null }
        } catch (e) {
          set({ backendAvailable: !isBackendUnavailable(e) })
          return { error: formatError(e) }
        }
      },

      signUp: async (email, password) => {
        try {
          const { error } = await services.authService.signUp(email, password)
          if (error) {
            set({ backendAvailable: !isBackendUnavailable(error) })
            return { error }
          }
          return { error: null }
        } catch (e) {
          set({ backendAvailable: !isBackendUnavailable(e) })
          return { error: formatError(e) }
        }
      },

      signInWithOAuth: async (provider) => {
        try {
          const { error } = await services.authService.signInWithOAuth(provider)
          if (error) {
            set({ backendAvailable: !isBackendUnavailable(error) })
            return { error }
          }
          // OAuth 重定向后会自动通过 onAuthChange 恢复会话
          return { error: null }
        } catch (e) {
          set({ backendAvailable: !isBackendUnavailable(e) })
          return { error: formatError(e) }
        }
      },

      signOut: async () => {
        try {
          await services.authService.signOut()
        } catch {
          // 忽略登出失败，仍清理本地状态
        }
        set({ user: null, isAdmin: false, identities: [] })
      },
    }),
    {
      name: 'codelearn-auth',
      // 仅持久化 user 基本信息，不含 isAdmin/loading（运行时重新判定）
      partialize: (state) => ({ user: state.user }),
    },
  ),
)

/** 将后端错误归一化为可读字符串 */
function formatError(e: unknown): string {
  if (isBackendUnavailable(e)) {
    return '后端未配置或不可达，请检查 Supabase 配置。'
  }
  const msg =
    typeof e === 'object' && e !== null && 'message' in e
      ? String((e as { message: unknown }).message)
      : String(e)
  return msg
}
