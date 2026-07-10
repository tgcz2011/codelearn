/**
 * 主题便捷 hook：读取当前主题，并在变化时把 'dark' 类同步到 <html>。
 *
 * 在 AppProviders 内调用一次即可（也可在根组件调用）。
 */
import { useEffect } from 'react'
import { useThemeStore, type ThemeMode } from '@/store/themeStore'

function applyThemeClass(theme: ThemeMode): void {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (theme === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
}

export function useTheme(): ThemeMode {
  const theme = useThemeStore((s) => s.theme)
  useEffect(() => {
    applyThemeClass(theme)
  }, [theme])
  return theme
}
