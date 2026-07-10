/**
 * 移动端检测 Hook（Task 10 SubTask 10.2）。
 *
 * 判定规则（满足任一即为移动端）：
 * 1. 窗口宽度 < 768px（Tailwind md 断点）
 * 2. 触屏设备（maxTouchPoints > 0 且匹配 coarse pointer 媒体查询）
 *
 * 响应式：监听 resize 与 pointer 媒体查询变化，自动更新。
 * SSR 安全：初始返回 false，挂载后修正。
 */

import { useEffect, useState } from 'react'

/** 移动端宽度断点（与 Tailwind md 断点一致） */
const MOBILE_BREAKPOINT = 768

function detectMobile(): boolean {
  if (typeof window === 'undefined') return false
  const narrow = window.innerWidth < MOBILE_BREAKPOINT
  const coarsePointer =
    window.matchMedia?.('(pointer: coarse)').matches ?? false
  const hasTouch = (navigator.maxTouchPoints ?? 0) > 0
  return narrow || (coarsePointer && hasTouch)
}

export function useMobile(): boolean {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(detectMobile())

    const onResize = () => setMobile(detectMobile())
    const mql = window.matchMedia?.('(pointer: coarse)')
    const onPointerChange = () => setMobile(detectMobile())

    window.addEventListener('resize', onResize)
    mql?.addEventListener('change', onPointerChange)
    return () => {
      window.removeEventListener('resize', onResize)
      mql?.removeEventListener('change', onPointerChange)
    }
  }, [])

  return mobile
}
