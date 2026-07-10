/**
 * 路由守卫
 *
 * - 普通受保护路由：未登录跳转 /login（保留来源 location）。
 * - 管理员路由：非管理员跳转首页。
 * - 初始 loading 时显示加载态，避免误判为未登录。
 *
 * 通过 services.authService（经 authStore）判定状态，不直接 import 后端 SDK。
 */
import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import Spinner from '@/components/ui/Spinner'

export interface ProtectedRouteProps {
  children: ReactNode
  /** 是否要求管理员权限 */
  requireAdmin?: boolean
}

export default function ProtectedRoute({
  children,
  requireAdmin = false,
}: ProtectedRouteProps) {
  const location = useLocation()
  const { isAuthenticated, isAdmin, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <Spinner size={32} />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
