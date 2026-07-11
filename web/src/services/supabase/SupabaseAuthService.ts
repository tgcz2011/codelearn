/**
 * Supabase 认证服务实现
 *
 * 实现 AuthService 接口，封装 supabase.auth 全部调用。
 * 包含账号关联能力（邮箱 ↔ GitHub 绑定/解绑）：
 *   - linkGitHub(): 已登录用户主动绑定 GitHub，跳转 OAuth 同意页
 *   - getLinkedIdentities(): 拉取当前用户所有身份（email/github/...）
 *   - unlinkIdentity(): 解绑指定身份（保留至少一个，防止锁死账号）
 *
 * 冲突处理：未登录时 GitHub OAuth 若命中已存在邮箱账号，
 * Supabase 在未开启「Automatic Linking」时会返回错误；
 * 由调用方根据 error 文案提示用户「先邮箱登录后再到设置中绑定 GitHub」。
 */
import { supabase } from './client'
import type { AuthSession, AuthService, LinkedIdentity } from '../interfaces'

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

  // ============================================================
  // 账号关联
  // ============================================================

  async getLinkedIdentities(): Promise<LinkedIdentity[]> {
    const { data, error } = await supabase.auth.getUserIdentities()
    if (error || !data?.identities) return []

    return data.identities.map((id) => ({
      // 优先用 identity_id（新字段），回退到 id（旧字段）
      identityId: id.identity_id ?? id.id,
      provider: id.provider,
      email:
        (id.identity_data?.email as string | undefined) ??
        null,
      displayName:
        (id.identity_data?.full_name as string | undefined) ??
        (id.identity_data?.user_name as string | undefined) ??
        (id.identity_data?.name as string | undefined) ??
        null,
      createdAt: id.created_at ?? null,
      lastSignInAt: id.last_sign_in_at ?? null,
    }))
  }

  async linkGitHub(): Promise<{ error: string | null }> {
    // 已登录用户调用 linkIdentity：跳转 GitHub 同意页，回调后身份被加到当前 user
    const { error } = await supabase.auth.linkIdentity({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/settings`,
      },
    })
    if (error) {
      // 常见冲突：当前邮箱账号已绑定过该 GitHub，或 GitHub 邮箱已被其他账号占用
      return { error: this.normalizeLinkError(error.message) }
    }
    // 成功时浏览器会被重定向到 GitHub，再回调 /settings
    return { error: null }
  }

  async unlinkIdentity(identityId: string): Promise<{ error: string | null }> {
    // 保护：至少保留一个身份，避免账号无法登录
    const { data, error: fetchErr } = await supabase.auth.getUserIdentities()
    if (fetchErr) {
      return { error: fetchErr.message }
    }
    if (!data || data.identities.length <= 1) {
      return {
        error: '无法解绑最后一个身份，至少需要保留一种登录方式。',
      }
    }

    // unlinkIdentity 需要完整的 UserIdentity 对象，按 id 查找
    const target = data.identities.find(
      (i) => (i.identity_id ?? i.id) === identityId,
    )
    if (!target) {
      return { error: '未找到指定的身份记录，可能已被解绑。' }
    }

    const { error } = await supabase.auth.unlinkIdentity(target)
    if (error) {
      return { error: error.message }
    }
    return { error: null }
  }

  /** 将 Supabase 关联错误归一化为中文友好提示 */
  private normalizeLinkError(msg: string): string {
    const lower = msg.toLowerCase()
    if (lower.includes('already') && lower.includes('linked')) {
      return '该 GitHub 账号已绑定到当前用户，无需重复绑定。'
    }
    if (lower.includes('identity') && lower.includes('exists')) {
      return '该 GitHub 账号已被其他用户绑定，请先在对方账号解绑，或换一个 GitHub 账号。'
    }
    if (lower.includes('email') && lower.includes('already')) {
      return '该 GitHub 账号的邮箱已被其他账号占用。请先用该邮箱登录，再到「设置」中绑定 GitHub。'
    }
    return msg
  }
}
