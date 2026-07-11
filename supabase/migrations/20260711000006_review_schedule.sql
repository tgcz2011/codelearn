-- ============================================================
-- 遗忘曲线复习计划表（SM-2 间隔重复算法）
--
-- 当用户完成课节时（user_progress.completed 翻转为 true），
-- 由触发器自动在 review_schedule 中创建复习条目。
-- 前端按 next_review_date <= today 加载待复习内容，
-- 并根据回忆质量（0-5）调整 Easiness Factor 与下次间隔。
-- ============================================================

create table if not exists public.review_schedule (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  easiness_factor real not null default 2.5,
  interval_days integer not null default 1,
  repetition_count integer not null default 0,
  next_review_date date not null default current_date,
  last_review_date date,
  quality integer,  -- 0-5 recall quality rating
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, lesson_id)
);

create index if not exists idx_review_user on public.review_schedule(user_id);
create index if not exists idx_review_next on public.review_schedule(user_id, next_review_date);

-- ============================================================
-- RLS：用户只能管理自己的复习计划
-- ============================================================
alter table public.review_schedule enable row level security;

drop policy if exists "review_select_self" on public.review_schedule;
create policy "review_select_self" on public.review_schedule
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "review_insert_self" on public.review_schedule;
create policy "review_insert_self" on public.review_schedule
  for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "review_update_self" on public.review_schedule;
create policy "review_update_self" on public.review_schedule
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "review_delete_self" on public.review_schedule;
create policy "review_delete_self" on public.review_schedule
  for delete to authenticated
  using (user_id = (select auth.uid()));

-- 启用实时订阅
alter publication supabase_realtime add table public.review_schedule;

-- ============================================================
-- 自动创建复习条目：课节首次完成时插入
-- SECURITY DEFINER：触发器由 user_progress 写入触发，
-- 此时用户拥有 user_progress 写权限，可直接写 review_schedule，
-- 但用 SECURITY DEFINER + RLS 友好；体内仅插入本人数据。
-- ============================================================
create or replace function public.auto_create_review()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.completed = true and (old.completed = false or old.completed is null) then
    insert into public.review_schedule (user_id, lesson_id, next_review_date)
    values (new.user_id, new.lesson_id, current_date + 1)
    on conflict (user_id, lesson_id) do nothing;
  end if;
  return new;
end; $$;

drop trigger if exists trigger_auto_create_review on public.user_progress;
create trigger trigger_auto_create_review
after insert or update on public.user_progress
for each row execute function public.auto_create_review();

-- 撤销 anon / authenticated 的直接执行权限（SECURITY DEFINER 函数）
revoke execute on function public.auto_create_review() from anon, authenticated;
