/**
 * OAuth 错误归一化
 *
 * 将 Supabase / GitHub 在 OAuth 登录/注册时返回的错误信息，
 * 转换为对中文用户友好的提示，重点处理账号关联冲突场景：
 *   - 同邮箱已存在邮箱/密码账号 → 引导先邮箱登录后再绑定
 *   - 同 GitHub 已绑定到其他账号 → 引导换号或先解绑
 *   - 后端未配置 → 提示检查 Supabase 配置
 */
export function normalizeOAuthError(msg: string): string {
  const lower = msg.toLowerCase()

  // 后端未配置
  if (
    lower.includes('failed to fetch') ||
    lower.includes('networkerror') ||
    lower.includes('placeholder')
  ) {
    return '后端未配置或不可达，请检查 Supabase 配置。'
  }

  // 同邮箱已存在账号（最常见冲突）
  if (
    lower.includes('user already registered') ||
    lower.includes('user already exists') ||
    (lower.includes('email') && lower.includes('already'))
  ) {
    return (
      '该 GitHub 账号的邮箱已注册。请先用邮箱+密码登录，' +
      '再到「设置 → 账号关联」中绑定 GitHub，即可用 GitHub 登录同一账号。'
    )
  }

  // GitHub 账号已被其他用户绑定
  if (
    lower.includes('identity') &&
    (lower.includes('exists') || lower.includes('already'))
  ) {
    return '该 GitHub 账号已绑定到其他用户，请换一个 GitHub 账号，或先在原账号解绑。'
  }

  // 已登录状态下重复 OAuth
  if (lower.includes('already') && lower.includes('linked')) {
    return '该 GitHub 账号已绑定到当前用户，无需重复绑定。'
  }

  // Provider 未配置
  if (lower.includes('provider') && lower.includes('not enabled')) {
    return 'GitHub 登录未在 Supabase 后台启用，请联系管理员配置 GitHub OAuth。'
  }

  // 默认：返回原始信息
  return msg
}
