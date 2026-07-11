/**
 * 认证服务接口
 *
 * 抽象注册/登录/会话/管理员判定。业务层只依赖本接口，
 * 不直接调用任何后端 SDK 的认证 API。
 */

export interface AuthSession {
  user: { id: string; email: string } | null
}

/** 已绑定的第三方/邮箱身份 */
export interface LinkedIdentity {
  /** 身份记录主键（用于解绑） */
  identityId: string
  /** 提供方：'email' | 'github' | 'google' ... */
  provider: string
  /** 该身份下的邮箱（GitHub OAuth 通常会回带邮箱） */
  email: string | null
  /** 该身份下的展示名（如 GitHub 用户名） */
  displayName: string | null
  /** 绑定时间 */
  createdAt: string | null
  /** 最近一次登录时间 */
  lastSignInAt: string | null
}

export interface AuthService {
  signUp(email: string, password: string): Promise<{ error: string | null }>
  signIn(email: string, password: string): Promise<{ error: string | null }>
  /** 通过第三方 OAuth 登录（如 GitHub） */
  signInWithOAuth(provider: string): Promise<{ error: string | null }>
  signOut(): Promise<void>
  getSession(): Promise<AuthSession>
  /** 订阅认证状态变化，返回取消订阅函数 */
  onAuthChange(callback: (session: AuthSession) => void): () => void
  /** 判断当前登录用户是否为管理员 */
  isAdmin(): Promise<boolean>

  // ---- 账号关联（邮箱 ↔ GitHub 等绑定/解绑） ----
  /** 获取当前用户已绑定的所有身份 */
  getLinkedIdentities(): Promise<LinkedIdentity[]>
  /** 当前用户主动绑定 GitHub（需已登录，会跳转 OAuth 同意页） */
  linkGitHub(): Promise<{ error: string | null }>
  /** 解绑指定身份（保留至少一个，否则返回错误） */
  unlinkIdentity(identityId: string): Promise<{ error: string | null }>
}
