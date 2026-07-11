-- 修复 Supabase Database Linter 安全建议
-- 问题：SECURITY DEFINER 函数被 anon/authenticated 角色通过 RPC 直接调用
-- 修复：REVOKE EXECUTE 权限，仅保留触发器/内部调用所需权限
--
-- 触发器函数（handle_new_user, protect_profile_admin_fields）：
--   仅被触发器调用，不需要任何角色通过 RPC 执行 → REVOKE FROM anon, authenticated
-- 内部辅助函数（is_admin）：
--   被 RLS 策略内部调用，不需要通过 RPC 直接调用 → REVOKE FROM anon, authenticated
-- 业务函数（increment_ai_quota, reset_ai_quota）：
--   increment_ai_quota: 被 authenticated 用户通过 RPC 调用，但 anon 不应调用 → REVOKE FROM anon
--   reset_ai_quota: 仅 admin 调用，但函数内部已校验 is_admin() → REVOKE FROM anon
--   （authenticated 保留执行权限，因为需要通过 RPC 调用）

-- 1. 触发器函数：完全撤销 anon 和 authenticated 的 EXECUTE 权限
-- 触发器以 SUPERUSER 身份运行，不受 EXECUTE 权限影响
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.protect_profile_admin_fields() FROM anon, authenticated;

-- 2. 内部辅助函数：完全撤销 anon 和 authenticated 的 EXECUTE 权限
-- is_admin 被 RLS 策略内部调用（SECURITY DEFINER 上下文），不需要外部 RPC 调用
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM anon, authenticated;

-- 3. 业务函数：
-- increment_ai_quota: 撤销 anon（未登录用户不应调用），保留 authenticated
REVOKE EXECUTE ON FUNCTION public.increment_ai_quota(p_user_id uuid, p_date date, p_count integer) FROM anon;
-- reset_ai_quota: 撤销 anon，保留 authenticated（函数内部用 is_admin() 校验管理员权限）
REVOKE EXECUTE ON FUNCTION public.reset_ai_quota(p_user_id uuid) FROM anon;
