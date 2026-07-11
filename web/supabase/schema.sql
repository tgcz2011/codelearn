-- ============================================================
-- CodeLearn — Supabase Schema + RLS + 管理员判定 + 触发器
-- 可直接在 Supabase SQL Editor 整体执行（幂等）
-- ============================================================
-- 设计要点：
--   1. 所有表启用 RLS；策略用 TO authenticated/anon + 所有权谓词，避免 BOLA
--   2. UPDATE 策略同时含 USING 与 WITH CHECK，防止 user_id 被改写
--   3. SECURITY DEFINER 函数体内均含 auth.uid()/is_admin() 校验
--   4. is_admin() 用 SECURITY DEFINER 以避免在 profiles RLS 策略中递归
--   5. 普通用户无法修改 is_admin/disabled 字段（BEFORE UPDATE 触发器拦截）
-- ============================================================

create extension if not exists "uuid-ossp";

-- ============================================================
-- 1. profiles
-- ============================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text not null default '',
  is_admin boolean not null default false,
  disabled boolean not null default false,
  created_at timestamptz not null default now()
);

comment on table public.profiles is '用户资料，注册时由触发器自动创建';

-- ============================================================
-- 2. courses / chapters / lessons
-- ============================================================
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null default '',
  language text not null,
  difficulty text not null default 'beginner'
    check (difficulty in ('beginner', 'intermediate', 'advanced'))
);

create table if not exists public.chapters (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  "order" integer not null default 0
);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references public.chapters(id) on delete cascade,
  title text not null,
  "order" integer not null default 0,
  content_md text not null default '',
  example_code text not null default '',
  exercise text not null default '',
  expected_output text not null default ''
);

create index if not exists idx_chapters_course on public.chapters(course_id);
create index if not exists idx_lessons_chapter on public.lessons(chapter_id);

-- ============================================================
-- 3. user_progress
-- ============================================================
create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  completed boolean not null default false,
  completed_at timestamptz,
  code_snapshot text,
  unique (user_id, lesson_id)
);

create index if not exists idx_progress_user on public.user_progress(user_id);

-- ============================================================
-- 4. ai_quota
-- ============================================================
create table if not exists public.ai_quota (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date_used date not null,
  count integer not null default 0,
  "limit" integer not null default 50,
  unique (user_id, date_used)
);

create index if not exists idx_quota_user_date on public.ai_quota(user_id, date_used);

-- ============================================================
-- 5. user_api_keys
-- ============================================================
create table if not exists public.user_api_keys (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  provider text not null,
  encrypted_key text not null,
  created_at timestamptz not null default now(),
  unique (user_id, provider)
);

create index if not exists idx_apikeys_user on public.user_api_keys(user_id);

-- ============================================================
-- 函数：is_admin() —— 管理员判定
-- SECURITY DEFINER 以避免在 profiles RLS 策略中递归调用自身
-- 仅返回当前用户的 is_admin 布尔值，不泄露他人数据
-- ============================================================
create or replace function public.is_admin()
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  result boolean;
begin
  select p.is_admin into result
  from public.profiles p
  where p.id = auth.uid()
  limit 1;
  return coalesce(result, false);
end;
$$;

-- ============================================================
-- 函数：handle_new_user() —— 新用户注册自动创建 profile
-- SECURITY DEFINER：注册时用户尚无 profiles 写权限
-- ============================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data->>'display_name', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 函数：protect_profile_admin_fields() —— 阻止普通用户篡改 is_admin/disabled
-- ============================================================
create or replace function public.protect_profile_admin_fields()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    if new.is_admin is distinct from old.is_admin then
      raise exception 'Permission denied: cannot modify is_admin';
    end if;
    if new.disabled is distinct from old.disabled then
      raise exception 'Permission denied: cannot modify disabled';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_admin_fields on public.profiles;
create trigger protect_profile_admin_fields
  before update on public.profiles
  for each row execute function public.protect_profile_admin_fields();

-- ============================================================
-- 函数：increment_ai_quota() —— 递增用户 AI 额度
-- SECURITY DEFINER：RLS 禁止用户直接写 ai_quota，由本函数代理递增
-- 体内校验 p_user_id = auth.uid()，防止篡改他人额度
-- ============================================================
create or replace function public.increment_ai_quota(
  p_user_id uuid,
  p_date date,
  p_count integer
)
returns public.ai_quota
language plpgsql
security definer
set search_path = public
as $$
declare
  result public.ai_quota;
begin
  if p_user_id is distinct from auth.uid() then
    raise exception 'Permission denied: can only increment own quota';
  end if;

  insert into public.ai_quota (user_id, date_used, count, "limit")
  values (p_user_id, p_date, p_count, 50)
  on conflict (user_id, date_used)
  do update set count = public.ai_quota.count + p_count
  returning * into result;

  return result;
end;
$$;

-- ============================================================
-- 函数：reset_ai_quota() —— 管理员重置用户 AI 额度
-- SECURITY DEFINER + is_admin() 校验
-- ============================================================
create or replace function public.reset_ai_quota(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'Permission denied: admin only';
  end if;
  delete from public.ai_quota where user_id = p_user_id;
end;
$$;

-- ============================================================
-- RLS 策略
-- ============================================================

-- ---- profiles：自己可读可改（仅 display_name），管理员可读全部可改全部 ----
alter table public.profiles enable row level security;

drop policy if exists "profiles_select_self_or_admin" on public.profiles;
create policy "profiles_select_self_or_admin" on public.profiles
  for select to authenticated
  using (id = (select auth.uid()) or public.is_admin());

drop policy if exists "profiles_update_self_or_admin" on public.profiles;
create policy "profiles_update_self_or_admin" on public.profiles
  for update to authenticated
  using (id = (select auth.uid()) or public.is_admin())
  with check (id = (select auth.uid()) or public.is_admin());

-- ---- courses / chapters / lessons：所有人可读，仅 service_role 可写 ----
alter table public.courses enable row level security;
drop policy if exists "courses_read_all" on public.courses;
create policy "courses_read_all" on public.courses
  for select to anon, authenticated
  using (true);

alter table public.chapters enable row level security;
drop policy if exists "chapters_read_all" on public.chapters;
create policy "chapters_read_all" on public.chapters
  for select to anon, authenticated
  using (true);

alter table public.lessons enable row level security;
drop policy if exists "lessons_read_all" on public.lessons;
create policy "lessons_read_all" on public.lessons
  for select to anon, authenticated
  using (true);

-- ---- user_progress：自己可读写删 ----
alter table public.user_progress enable row level security;

drop policy if exists "progress_select_self" on public.user_progress;
create policy "progress_select_self" on public.user_progress
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "progress_insert_self" on public.user_progress;
create policy "progress_insert_self" on public.user_progress
  for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "progress_update_self" on public.user_progress;
create policy "progress_update_self" on public.user_progress
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "progress_delete_self" on public.user_progress;
create policy "progress_delete_self" on public.user_progress
  for delete to authenticated
  using (user_id = (select auth.uid()));

-- ---- ai_quota：自己可读，不可直接写（由 increment_ai_quota/reset_ai_quota RPC 代理）----
alter table public.ai_quota enable row level security;

drop policy if exists "quota_select_self" on public.ai_quota;
create policy "quota_select_self" on public.ai_quota
  for select to authenticated
  using (user_id = (select auth.uid()));

-- ---- user_api_keys：自己可读写删 ----
alter table public.user_api_keys enable row level security;

drop policy if exists "apikeys_select_self" on public.user_api_keys;
create policy "apikeys_select_self" on public.user_api_keys
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "apikeys_insert_self" on public.user_api_keys;
create policy "apikeys_insert_self" on public.user_api_keys
  for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "apikeys_update_self" on public.user_api_keys;
create policy "apikeys_update_self" on public.user_api_keys
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "apikeys_delete_self" on public.user_api_keys;
create policy "apikeys_delete_self" on public.user_api_keys
  for delete to authenticated
  using (user_id = (select auth.uid()));

-- ============================================================
-- 安全修复：撤销 SECURITY DEFINER 函数的公开执行权限
-- ============================================================

-- 触发器函数：仅被触发器调用，不需要任何角色通过 RPC 执行
revoke execute on function public.handle_new_user() from anon, authenticated;
revoke execute on function public.protect_profile_admin_fields() from anon, authenticated;

-- 内部辅助函数：被 RLS 策略内部调用，不需要通过 RPC 直接调用
revoke execute on function public.is_admin() from anon, authenticated;

-- 业务函数：撤销 anon（未登录用户不应调用），保留 authenticated
revoke execute on function public.increment_ai_quota(p_user_id uuid, p_date date, p_count integer) from anon;
revoke execute on function public.reset_ai_quota(p_user_id uuid) from anon;
