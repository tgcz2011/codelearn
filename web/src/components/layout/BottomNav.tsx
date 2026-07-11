/**
 * 移动端底部导航栏（Task 10 SubTask 10.3）。
 *
 * 仅在移动端显示（由父组件通过 useMobile() 控制渲染）。
 * 使用 NavLink 实现当前页高亮，支持 iOS safe-area 底部留白。
 * 管理员可见「管理」入口。
 */
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from '@/hooks/useTranslation'
import { useAuth } from '@/hooks/useAuth'

interface NavItem {
  to: string
  labelKey: string
  icon: ReactNode
}

/** 内联 SVG 图标，避免引入额外图标库 */
function HomeIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v10h14V10" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h11a3 3 0 013 3v13H7a3 3 0 01-3-3V4z" />
      <path d="M4 17a3 3 0 013-3h11" />
    </svg>
  )
}

function ReviewIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0115-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 01-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

export default function BottomNav() {
  const { t } = useTranslation()
  const { isAdmin } = useAuth()

  const items: NavItem[] = [
    { to: '/', labelKey: 'nav.home', icon: <HomeIcon /> },
    { to: '/courses', labelKey: 'nav.courses', icon: <BookIcon /> },
    { to: '/review', labelKey: 'nav.review', icon: <ReviewIcon /> },
    { to: '/settings', labelKey: 'nav.settings', icon: <GearIcon /> },
  ]

  if (isAdmin) {
    items.push({ to: '/admin', labelKey: 'nav.admin', icon: <ShieldIcon /> })
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] transition ${
      isActive ? 'text-blue-600' : 'text-slate-500'
    }`

  return (
    <nav
      aria-label={t('mobile.bottomNavLabel')}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden"
    >
      {/* iOS safe-area 底部留白 */}
      <div className="flex items-stretch" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {items.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
            {item.icon}
            <span>{t(item.labelKey)}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
