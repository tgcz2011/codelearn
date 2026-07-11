-- ============================================================
-- 账号关联机制：邮箱 + GitHub 身份绑定
-- ============================================================
-- 设计要点：
--   1. 让 handle_new_user() 幂等：当 GitHub OAuth 因未开启自动关联
--      而新建 auth.users（同邮箱不同 id）时，profiles 不会重复插入
--   2. get_my_identities() RPC：前端展示当前用户已绑定的身份列表
--      （email / github 等），仅查 auth.identities 自身行
--   3. revoke execute from anon/authenticated：身份查询由 RPC 代理，
--      防止直接读取他人身份信息
-- ============================================================

-- ------------------------------------------------------------
-- 1. handle_new_user() 改为幂等：ON CONFLICT DO NOTHING
--    场景：测试阶段数据库重置后重新注册、或 OAuth 重试
-- ------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  user_count integer;
begin
  select count(*) into user_count from public.profiles;
  insert into public.profiles (id, email, display_name, is_admin)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data->>'display_name', ''),
    (user_count = 0)  -- 第一个用户自动设为 admin
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- ------------------------------------------------------------
-- 2. get_my_identities() —— 当前用户已绑定的身份列表
--    返回 provider / identity_id / created_at / email（如有）
--    前端据此展示「邮箱」「GitHub」标签与绑定/解绑按钮
-- ------------------------------------------------------------
create or replace function public.get_my_identities()
returns table (
  identity_id uuid,
  provider text,
  identity_data jsonb,
  created_at timestamptz,
  last_sign_in_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    return;
  end if;

  return query
    select
      i.id as identity_id,
      i.provider as provider,
      i.identity_data as identity_data,
      i.created_at as created_at,
      i.last_sign_in_at as last_sign_in_at
    from auth.identities i
    where i.user_id = auth.uid()
    order by i.created_at asc;
end;
$$;

-- 仅 authenticated 可调用（需登录才能查自己的身份）
revoke execute on function public.get_my_identities() from anon;
grant execute on function public.get_my_identities() to authenticated;

-- ------------------------------------------------------------
-- 3. get_my_primary_email() —— 返回当前用户的主邮箱（auth.users.email）
--    用于前端在「账号关联」卡片中展示主邮箱，即使当前是 GitHub 登录
-- ------------------------------------------------------------
create or replace function public.get_my_primary_email()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  result text;
begin
  if auth.uid() is null then
    return null;
  end if;

  select u.email into result
  from auth.users u
  where u.id = auth.uid()
  limit 1;

  return result;
end;
$$;

revoke execute on function public.get_my_primary_email() from anon;
grant execute on function public.get_my_primary_email() to authenticated;

-- ------------------------------------------------------------
-- 4. count_my_identities() —— 当前用户的身份数量
--    前端在「解绑」按钮上做保护：仅剩一个身份时不允许解绑
-- ------------------------------------------------------------
create or replace function public.count_my_identities()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  result integer;
begin
  if auth.uid() is null then
    return 0;
  end if;

  select count(*) into result
  from auth.identities i
  where i.user_id = auth.uid();

  return result;
end;
$$;

revoke execute on function public.count_my_identities() from anon;
grant execute on function public.count_my_identities() to authenticated;
