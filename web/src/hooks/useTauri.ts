/**
 * Tauri 环境检测与运行时初始化 hooks（Task 8 SubTask 8.6）。
 *
 * - isTauri(): 判断当前是否运行在 Tauri 桌面端（检测 __TAURI_INTERNALS__）
 * - useTauri(): 返回 isTauri 状态（响应式）
 * - useRuntimeDetection(): Tauri 环境下调用 detect_runtimes，初始化 NativeRunner 注册，
 *   返回 { runtimes, loading, error, refresh }
 *
 * 接入点：App.tsx 的 useEffect 中调用 useRuntimeDetection 初始化（见 App.tsx）。
 * 非 Tauri 环境下所有 hook 安全 no-op，不影响 web 端。
 */

import { useCallback, useEffect, useState } from 'react'
import { initNativeRunners } from '@/runner/Registry'
import type { RuntimeInfo } from '@/runner/native'

/**
 * 判断当前是否运行在 Tauri 桌面端。
 *
 * Tauri 2.0 在 window 上注入 __TAURI_INTERNALS__ 对象作为 invoke 桥梁。
 * 纯浏览器环境下此属性不存在，返回 false。
 */
export function isTauri(): boolean {
  return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window
}

/** 响应式获取 isTauri 状态（SSR 安全） */
export function useTauri(): boolean {
  const [tauri, setTauri] = useState(false)
  useEffect(() => {
    setTauri(isTauri())
  }, [])
  return tauri
}

interface RuntimeDetectionState {
  /** 检测到的运行时列表 */
  runtimes: RuntimeInfo[]
  /** 是否正在检测 */
  loading: boolean
  /** 检测错误信息 */
  error: string | null
  /** 手动触发重新检测 */
  refresh: () => void
}

/**
 * 运行时检测与 NativeRunner 初始化。
 *
 * 仅在 Tauri 环境下执行：
 * 1. invoke('detect_runtimes') 获取本机运行时列表
 * 2. 调用 initNativeRunners 注册到 Registry，使 getRunner(id, 'desktop') 优先返回 NativeRunner
 * 3. 返回 runtimes 供 UI 展示
 *
 * 非 Tauri 环境返回空列表 + loading=false，不执行任何副作用。
 */
export function useRuntimeDetection(autoInit = true): RuntimeDetectionState {
  const [runtimes, setRuntimes] = useState<RuntimeInfo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const detect = useCallback(async () => {
    if (!isTauri()) return
    setLoading(true)
    setError(null)
    try {
      const { invoke } = await import('@tauri-apps/api/core')
      const result = await invoke<RuntimeInfo[]>('detect_runtimes')
      setRuntimes(result)
      // 注册到 Registry，使桌面端 getRunner 优先使用本机运行时
      initNativeRunners(result)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (autoInit) {
      void detect()
    }
  }, [autoInit, detect])

  return { runtimes, loading, error, refresh: detect }
}
