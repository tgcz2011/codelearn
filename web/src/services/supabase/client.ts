/**
 * Supabase 客户端单例
 *
 * 仅在 ./supabase 目录内使用，业务层不直接引用本文件或 @supabase/supabase-js。
 *
 * 缺少环境变量时不抛错——用占位值创建 client 并标记 isSupabaseConfigured=false，
 * 让页面可以正常渲染；用户调用认证/数据 API 时会收到网络错误，但不会白屏。
 */
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/** Supabase 是否已正确配置（环境变量存在且非占位值） */
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes('your-project') &&
    !supabaseAnonKey.includes('your-supabase'),
)

export const supabase: SupabaseClient = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
)
