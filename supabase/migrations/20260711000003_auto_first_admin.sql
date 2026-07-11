-- ============================================================
-- 第一个注册用户自动设为 admin
-- 修改 handle_new_user() 触发器：注册时检查 profiles 表是否为空，
-- 空则将新用户 is_admin 设为 true
-- ============================================================

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
  );
  return new;
end;
$$;

-- 触发器已存在，无需重建
-- revoke execute 保持不变（触发器内部调用不受 RPC 权限影响）
