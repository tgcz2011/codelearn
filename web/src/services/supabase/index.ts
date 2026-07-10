/**
 * Supabase 后端实现工厂
 *
 * 装配四个 Supabase 实现并返回一个完整的 ServiceContainer。
 * 由 services/container.ts 在 DATA_BACKEND=supabase 时调用。
 */
import type { ServiceContainer } from '../container'
import { SupabaseAuthService } from './SupabaseAuthService'
import { SupabaseRealtimeService } from './SupabaseRealtimeService'
import { SupabaseRepository } from './SupabaseRepository'
import { SupabaseStorageService } from './SupabaseStorageService'

export function createSupabaseServices(): ServiceContainer {
  return {
    repository: new SupabaseRepository(),
    authService: new SupabaseAuthService(),
    storageService: new SupabaseStorageService(),
    realtimeService: new SupabaseRealtimeService(),
  }
}

export { supabase } from './client'
export { SupabaseAuthService } from './SupabaseAuthService'
export { SupabaseRealtimeService } from './SupabaseRealtimeService'
export { SupabaseRepository } from './SupabaseRepository'
export { SupabaseStorageService } from './SupabaseStorageService'
