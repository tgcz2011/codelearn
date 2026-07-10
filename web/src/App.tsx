/**
 * 应用根组件
 *
 * 职责：
 * 1. 启动时调用 initAuth() 恢复会话并订阅认证状态变化。
 * 2. 桌面端（Tauri）启动时检测本机运行时并注册 NativeRunner（Task 8）。
 * 3. 渲染路由树（路由定义在 @/router）。
 * 4. 移动端在底部渲染 BottomNav 替代页面内导航（Task 10）。
 *
 * main.tsx 用 <BrowserRouter> 包裹本组件；Task 9 在外层套 i18n provider。
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useRuntimeDetection } from '@/hooks/useTauri'
import { useMobile } from '@/hooks/useMobile'
import AppRoutes from '@/router'
import BottomNav from '@/components/layout/BottomNav'

/** 不显示底部导航的路径（登录/注册页） */
const HIDE_BOTTOM_NAV = ['/login', '/register']

function App() {
  const { initAuth } = useAuth()
  // Task 8: 桌面端启动时检测本机运行时（python/node/tsc/go），
  // 检测结果注册到 Registry，使 getRunner(id, 'desktop') 优先用本机运行时。
  // 非 Tauri 环境下 useRuntimeDetection 内部 isTauri() 返回 false，no-op。
  useRuntimeDetection()
  const isMobile = useMobile()
  const location = useLocation()

  useEffect(() => {
    void initAuth()
  }, [initAuth])

  const showBottomNav =
    isMobile && !HIDE_BOTTOM_NAV.includes(location.pathname)

  return (
    <>
      <AppRoutes />
      {showBottomNav && <BottomNav />}
      {/* 移动端底部导航占位，防止内容被遮挡 */}
      {showBottomNav && <div className="h-14 md:hidden" />}
    </>
  )
}

export default App
