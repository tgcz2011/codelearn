/**
 * 认证便捷 Hook
 *
 * 包装 authStore，提供业务组件常用的派生状态与操作。
 * 所有数据访问均经由 services.authService，不直接 import 后端 SDK。
 */
import { useAuthStore } from '@/store/authStore'

export function useAuth() {
  const user = useAuthStore((s) => s.user)
  const isAdmin = useAuthStore((s) => s.isAdmin)
  const loading = useAuthStore((s) => s.loading)
  const backendAvailable = useAuthStore((s) => s.backendAvailable)
  const signIn = useAuthStore((s) => s.signIn)
  const signUp = useAuthStore((s) => s.signUp)
  const signOut = useAuthStore((s) => s.signOut)
  const initAuth = useAuthStore((s) => s.initAuth)

  return {
    user,
    isAdmin,
    loading,
    backendAvailable,
    isAuthenticated: Boolean(user),
    signIn,
    signUp,
    signOut,
    initAuth,
  }
}
