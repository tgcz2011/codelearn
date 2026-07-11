-- 管理员设置表 + 额度配置 + 课程可见性
-- 幂等：可重复执行

-- ============================================================
-- 1. app_settings 表（全局键值对配置）
-- ============================================================
create table if not exists public.app_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references public.profiles(id)
);

alter table public.app_settings enable row level security;

-- 所有人可读配置（额度上限等非敏感信息）
drop policy if exists "settings_read_all" on public.app_settings;
create policy "settings_read_all" on public.app_settings
  for select to anon, authenticated using (true);

-- 仅管理员可写
drop policy if exists "settings_write_admin" on public.app_settings;
create policy "settings_write_admin" on public.app_settings
  for all to authenticated
  using (exists (select 1 from public.profiles where id = auth.uid() and is_admin))
  with check (exists (select 1 from public.profiles where id = auth.uid() and is_admin));

-- ============================================================
-- 2. 初始化默认配置
-- ============================================================
insert into public.app_settings (key, value) values
  ('ai_daily_limit', '50'::jsonb),
  ('course_visibility', '{}'::jsonb)
on conflict (key) do nothing;

-- ============================================================
-- 3. admin RPC：设置全局 AI 每日额度上限
-- ============================================================
create or replace function public.set_ai_daily_limit(p_limit integer)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
begin
  select is_admin into v_is_admin from public.profiles where id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  if p_limit < 1 or p_limit > 10000 then
    raise exception 'Limit must be between 1 and 10000';
  end if;

  update public.app_settings
  set value = to_jsonb(p_limit), updated_at = now(), updated_by = auth.uid()
  where key = 'ai_daily_limit';

  return jsonb_build_object('success', true, 'limit', p_limit);
end;
$$;

-- ============================================================
-- 4. admin RPC：获取全局 AI 每日额度上限
-- ============================================================
create or replace function public.get_ai_daily_limit()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_limit integer;
begin
  select (value::text)::integer into v_limit
  from public.app_settings
  where key = 'ai_daily_limit';

  return coalesce(v_limit, 50);
end;
$$;

-- ============================================================
-- 5. admin RPC：设置课程可见性
--    p_language => 'html' | 'css' | ... | 'all'
--    p_visible => true | false
-- ============================================================
create or replace function public.set_course_visibility(p_language text, p_visible boolean)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
  v_current jsonb;
begin
  select is_admin into v_is_admin from public.profiles where id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  select value into v_current from public.app_settings where key = 'course_visibility';

  v_current := coalesce(v_current, '{}'::jsonb);
  v_current := v_current || jsonb_build_object(p_language, p_visible);

  update public.app_settings
  set value = v_current, updated_at = now(), updated_by = auth.uid()
  where key = 'course_visibility';

  return jsonb_build_object('success', true, 'visibility', v_current);
end;
$$;

-- ============================================================
-- 6. 公开 RPC：获取课程可见性配置（所有用户可调用）
-- ============================================================
create or replace function public.get_course_visibility()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_value jsonb;
begin
  select value into v_value from public.app_settings where key = 'course_visibility';
  return coalesce(v_value, '{}'::jsonb);
end;
$$;

-- ============================================================
-- 7. admin RPC：获取课程统计数据（每门课的完成人数）
-- ============================================================
create or replace function public.get_course_stats()
returns table(
  lesson_id text,
  completed_count bigint
)
language plpgsql
security definer
set search_path = public
as $$
begin
  -- 仅管理员可调用
  if not coalesce((select is_admin from public.profiles where id = auth.uid()), false) then
    raise exception 'Permission denied: admin only';
  end if;

  return query
  select up.lesson_id, count(*)::bigint as completed_count
  from public.user_progress up
  where up.completed = true
  group by up.lesson_id;
end;
$$;
