/**
 * 主题状态（亮 / 暗），基于 zustand + persist。
 *
 * - 持久化：localStorage key 'theme'
 * - 默认值：首次访问跟随系统 prefers-color-scheme
 * - 应用到 DOM：由 hooks/useTheme 在副作用中给 document.documentElement 加/移除 'dark' 类
 *   （配合 TailwindCSS darkMode: 'class'）
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

function getSystemTheme(): ThemeMode {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

interface ThemeState {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: getSystemTheme(),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
    }),
    {
      name: THEME_STORAGE_KEY,
      partialize: (s) => ({ theme: s.theme }),
    },
  ),
)
