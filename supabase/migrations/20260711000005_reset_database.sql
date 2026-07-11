-- ============================================================
-- 数据库重置函数（仅 admin 可调用）
-- 清空所有用户进度、AI 额度、API keys，删除非 admin 用户
-- 保留 admin 用户和课程内容
-- ============================================================

create or replace function public.reset_database()
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  admin_count integer;
  deleted_users integer;
begin
  -- 校验调用者为 admin
  if not public.is_admin() then
    raise exception 'Permission denied: admin only';
  end if;

  -- 统计 admin 数量（至少保留一个）
  select count(*) into admin_count from public.profiles where is_admin = true;

  -- 清空用户进度
  delete from public.user_progress;
  -- 清空 AI 额度
  delete from public.ai_quota;
  -- 清空用户 API keys
  delete from public.user_api_keys;

  -- 删除非 admin 用户的 profiles（级联删除 auth.users）
  delete from public.profiles where is_admin = false;
  get diagnostics deleted_users = row_count;

  -- 也删除非 admin 的 auth.users（profiles 级联已处理，这里兜底）
  delete from auth.users where id not in (
    select id from public.profiles where is_admin = true
  );

  return jsonb_build_object(
    'success', true,
    'deleted_users', deleted_users,
    'message', '数据库已重置：所有用户进度、AI额度、非管理员用户已清除'
  );
end;
$$;

-- 仅 admin 可通过 RPC 调用
revoke execute on function public.reset_database() from anon;
-- authenticated 可调用（函数体内校验 is_admin）
