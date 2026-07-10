/**
 * AppProviders：统一包裹 i18n 与主题副作用。
 *
 * ========================= 接入说明（main.tsx） =========================
 * 在 main.tsx 中用 AppProviders 包裹 RouterProvider（或 App）：
 *
 *   import AppProviders from '@/providers/AppProviders'
 *   import { RouterProvider } from 'react-router-dom'   // 若 Task 3 已接入路由
 *
 *   ReactDOM.createRoot(...).render(
 *     <React.StrictMode>
 *       <AppProviders>
 *         <RouterProvider router={router} />
 *         {/* 若尚未接入路由，可临时直接渲染 <App /> *\/}
 *       </AppProviders>
 *     </React.StrictMode>,
 *   )
 *
 * 说明：
 * - <I18nextProvider> 提供 i18n 实例（同时 import '@/i18n' 触发初始化）
 * - ThemeApplier 调用 useTheme()，在主题变化时把 'dark' 类同步到 <html>
 * =====================================================================
 */
import type { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/i18n'
import { useTheme } from '@/hooks/useTheme'

function ThemeApplier({ children }: { children: ReactNode }) {
  useTheme()
  return <>{children}</>
}

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeApplier>{children}</ThemeApplier>
    </I18nextProvider>
  )
}
