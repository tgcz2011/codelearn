/**
 * 认证服务接口
 *
 * 抽象注册/登录/会话/管理员判定。业务层只依赖本接口，
 * 不直接调用任何后端 SDK 的认证 API。
 */

export interface AuthSession {
  user: { id: string; email: string } | null
}

export interface AuthService {
  signUp(email: string, password: string): Promise<{ error: string | null }>
  signIn(email: string, password: string): Promise<{ error: string | null }>
  signOut(): Promise<void>
  getSession(): Promise<AuthSession>
  /** 订阅认证状态变化，返回取消订阅函数 */
  onAuthChange(callback: (session: AuthSession) => void): () => void
  /** 判断当前登录用户是否为管理员 */
  isAdmin(): Promise<boolean>
}
