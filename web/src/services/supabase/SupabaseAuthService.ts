/**
 * Supabase 认证服务实现
 *
 * 实现 AuthService 接口，封装 supabase.auth 全部调用。
 */
import { supabase } from './client'
import type { AuthSession, AuthService } from '../interfaces'

export class SupabaseAuthService implements AuthService {
  async signUp(
    email: string,
    password: string,
  ): Promise<{ error: string | null }> {
    const { error } = await supabase.auth.signUp({ email, password })
    return { error: error ? error.message : null }
  }

  async signIn(
    email: string,
    password: string,
  ): Promise<{ error: string | null }> {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error: error ? error.message : null }
  }

  async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  async signInWithOAuth(provider: string): Promise<{ error: string | null }> {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider as 'github',
      options: {
        redirectTo: window.location.origin,
      },
    })
    return { error: error ? error.message : null }
  }

  async getSession(): Promise<AuthSession> {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (!session?.user) return { user: null }
    return {
      user: {
        id: session.user.id,
        email: session.user.email ?? '',
      },
    }
  }

  onAuthChange(callback: (session: AuthSession) => void): () => void {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      callback(
        session?.user
          ? { user: { id: session.user.id, email: session.user.email ?? '' } }
          : { user: null },
      )
    })
    // 返回取消订阅函数
    return () => data.subscription.unsubscribe()
  }

  async isAdmin(): Promise<boolean> {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (!session?.user) return false
    const { data, error } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', session.user.id)
      .maybeSingle()
    if (error) return false
    return Boolean(data?.is_admin)
  }
}
