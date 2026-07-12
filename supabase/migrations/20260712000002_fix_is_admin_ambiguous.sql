-- 修复 is_admin 列引用歧义问题
-- 问题：profiles 表有 is_admin 列，同时 public schema 中也有 is_admin() 函数
--       在 SECURITY DEFINER 函数中执行 select is_admin ... from public.profiles 时
--       PostgreSQL 无法确定 is_admin 是列引用还是函数调用，产生歧义
-- 修复方式：给 public.profiles 表加别名 p，所有 is_admin / id 列引用加 p. 前缀
-- 涉及迁移 7（admin_settings）和迁移 8（balance_stats_models）中的所有相关函数和 RLS 策略

-- ============================================================
-- 一、重新定义迁移 7 中的函数（3 处修复）
-- ============================================================

-- 1. set_ai_daily_limit —— 设置全局 AI 每日额度上限
create or replace function public.set_ai_daily_limit(p_limit integer)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
begin
  select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
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

-- 2. set_course_visibility —— 设置课程可见性
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
  select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
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

-- 3. get_course_stats —— 获取课程统计数据（每门课的完成人数）
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
  if not coalesce((select p.is_admin from public.profiles p where p.id = auth.uid()), false) then
    raise exception 'Permission denied: admin only';
  end if;

  return query
  select up.lesson_id, count(*)::bigint as completed_count
  from public.user_progress up
  where up.completed = true
  group by up.lesson_id;
end;
$$;

-- ============================================================
-- 二、重新定义迁移 8 中的函数（11 处修复）
-- ============================================================

-- 4. get_user_balance —— 获取用户余额
create or replace function public.get_user_balance(p_user_id uuid default null)
returns table(
  user_id uuid,
  balance numeric,
  total_recharged numeric,
  total_consumed numeric
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_target uuid;
  v_is_admin boolean;
begin
  v_target := coalesce(p_user_id, auth.uid());
  if v_target is null then
    raise exception 'Not authenticated';
  end if;

  -- 非 admin 只能查自己
  if v_target <> auth.uid() then
    select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
    if not coalesce(v_is_admin, false) then
      raise exception 'Permission denied';
    end if;
  end if;

  return query
  select ub.user_id, ub.balance, ub.total_recharged, ub.total_consumed
  from public.user_balance ub
  where ub.user_id = v_target;

  -- 如果没有记录，返回默认值
  if not found then
    return query
    select v_target, 0.0, 0.0, 0.0;
  end if;
end;
$$;

-- 5. admin_set_user_balance —— admin 设置用户余额
create or replace function public.admin_set_user_balance(p_user_id uuid, p_balance numeric)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
begin
  select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  insert into public.user_balance (user_id, balance, total_recharged, total_consumed, updated_at)
  values (p_user_id, p_balance, p_balance, 0, now())
  on conflict (user_id) do update
  set balance = p_balance, updated_at = now();

  return jsonb_build_object('success', true, 'balance', p_balance);
end;
$$;

-- 6. admin_add_user_balance —— admin 充值（增加余额）
create or replace function public.admin_add_user_balance(p_user_id uuid, p_amount numeric)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
  v_new_balance numeric;
begin
  select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  insert into public.user_balance (user_id, balance, total_recharged, total_consumed, updated_at)
  values (p_user_id, p_amount, p_amount, 0, now())
  on conflict (user_id) do update
  set balance = user_balance.balance + p_amount,
      total_recharged = user_balance.total_recharged + p_amount,
      updated_at = now()
  returning balance into v_new_balance;

  return jsonb_build_object('success', true, 'balance', v_new_balance);
end;
$$;

-- 7. get_user_usage_stats —— 获取用户使用统计
create or replace function public.get_user_usage_stats(
  p_user_id uuid default null,
  p_start_date date default null,
  p_end_date date default null,
  p_include_custom boolean default true
)
returns table(
  call_type text,
  provider text,
  model text,
  total_calls bigint,
  total_input_tokens bigint,
  total_output_tokens bigint,
  total_cost numeric,
  is_custom_model boolean
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_target uuid;
  v_is_admin boolean;
  v_start timestamptz;
  v_end timestamptz;
begin
  v_target := coalesce(p_user_id, auth.uid());
  if v_target is null then
    raise exception 'Not authenticated';
  end if;

  -- 非 admin 只能查自己
  if v_target <> auth.uid() then
    select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
    if not coalesce(v_is_admin, false) then
      raise exception 'Permission denied';
    end if;
  end if;

  v_start := coalesce(p_start_date::timestamptz, '1970-01-01'::timestamptz);
  v_end := coalesce(p_end_date::timestamptz, now() + interval '1 day');

  return query
  select
    aul.call_type,
    aul.provider,
    aul.model,
    count(*)::bigint as total_calls,
    coalesce(sum(aul.input_tokens), 0)::bigint as total_input_tokens,
    coalesce(sum(aul.output_tokens), 0)::bigint as total_output_tokens,
    coalesce(sum(aul.cost), 0)::numeric as total_cost,
    aul.is_custom_model
  from public.api_usage_log aul
  where aul.user_id = v_target
    and aul.created_at >= v_start
    and aul.created_at < v_end
    and (p_include_custom or not aul.is_custom_model)
    and aul.include_in_stats
  group by aul.call_type, aul.provider, aul.model, aul.is_custom_model
  order by total_cost desc;
end;
$$;

-- 8. admin_get_usage_stats —— admin 获取全局使用统计
create or replace function public.admin_get_usage_stats(
  p_start_date date default null,
  p_end_date date default null,
  p_include_custom boolean default true
)
returns table(
  user_id uuid,
  user_email text,
  call_type text,
  total_calls bigint,
  total_input_tokens bigint,
  total_output_tokens bigint,
  total_cost numeric,
  is_custom_model boolean
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
  v_start timestamptz;
  v_end timestamptz;
begin
  select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  v_start := coalesce(p_start_date::timestamptz, '1970-01-01'::timestamptz);
  v_end := coalesce(p_end_date::timestamptz, now() + interval '1 day');

  return query
  select
    aul.user_id,
    p.email,
    aul.call_type,
    count(*)::bigint as total_calls,
    coalesce(sum(aul.input_tokens), 0)::bigint as total_input_tokens,
    coalesce(sum(aul.output_tokens), 0)::bigint as total_output_tokens,
    coalesce(sum(aul.cost), 0)::numeric as total_cost,
    aul.is_custom_model
  from public.api_usage_log aul
  join public.profiles p on p.id = aul.user_id
  where aul.created_at >= v_start
    and aul.created_at < v_end
    and (p_include_custom or not aul.is_custom_model)
    and aul.include_in_stats
  group by aul.user_id, p.email, aul.call_type, aul.is_custom_model
  order by total_cost desc;
end;
$$;

-- 9. admin_list_balances —— admin 获取所有用户余额列表
create or replace function public.admin_list_balances()
returns table(
  user_id uuid,
  email text,
  display_name text,
  balance numeric,
  total_recharged numeric,
  total_consumed numeric,
  is_admin boolean,
  disabled boolean,
  created_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
begin
  select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  return query
  select
    p.id,
    p.email,
    p.display_name,
    coalesce(ub.balance, 0)::numeric,
    coalesce(ub.total_recharged, 0)::numeric,
    coalesce(ub.total_consumed, 0)::numeric,
    p.is_admin,
    p.disabled,
    p.created_at
  from public.profiles p
  left join public.user_balance ub on ub.user_id = p.id
  order by p.created_at desc;
end;
$$;

-- 10. admin_set_user_banned —— 封禁/解封用户
create or replace function public.admin_set_user_banned(p_user_id uuid, p_banned boolean)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
  v_target_is_admin boolean;
begin
  select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  -- 不能封禁其他 admin
  select p.is_admin into v_target_is_admin from public.profiles p where p.id = p_user_id;
  if coalesce(v_target_is_admin, false) and p_banned then
    raise exception 'Cannot ban an admin user';
  end if;

  update public.profiles as p set disabled = p_banned where p.id = p_user_id;

  return jsonb_build_object('success', true, 'banned', p_banned);
end;
$$;

-- 11. set_ai_fusion_config —— 设置 AI 融合配置
create or replace function public.set_ai_fusion_config(p_config jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
begin
  select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  update public.app_settings
  set value = p_config, updated_at = now(), updated_by = auth.uid()
  where key = 'ai_fusion_config';

  return jsonb_build_object('success', true, 'config', p_config);
end;
$$;

-- 12. admin_set_code_exec_price —— admin 设置代码执行价格
create or replace function public.admin_set_code_exec_price(p_calls_per_dollar integer)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
begin
  select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  update public.app_settings
  set value = jsonb_build_object('calls_per_dollar', p_calls_per_dollar),
      updated_at = now(), updated_by = auth.uid()
  where key = 'code_exec_price_rate';

  return jsonb_build_object('success', true, 'calls_per_dollar', p_calls_per_dollar);
end;
$$;

-- 13. get_usage_timeseries —— 获取每日用量时间序列（用于图表）
create or replace function public.get_usage_timeseries(
  p_user_id uuid default null,
  p_days integer default 30
)
returns table(
  date date,
  total_calls bigint,
  total_cost numeric,
  total_input_tokens bigint,
  total_output_tokens bigint
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_target uuid;
  v_is_admin boolean;
  v_start date;
begin
  v_target := coalesce(p_user_id, auth.uid());
  if v_target is null then
    raise exception 'Not authenticated';
  end if;

  if v_target <> auth.uid() then
    select p.is_admin into v_is_admin from public.profiles p where p.id = auth.uid();
    if not coalesce(v_is_admin, false) then
      raise exception 'Permission denied';
    end if;
  end if;

  v_start := current_date - p_days;

  return query
  select
    aul.created_at::date as date,
    count(*)::bigint as total_calls,
    coalesce(sum(aul.cost), 0)::numeric as total_cost,
    coalesce(sum(aul.input_tokens), 0)::bigint as total_input_tokens,
    coalesce(sum(aul.output_tokens), 0)::bigint as total_output_tokens
  from public.api_usage_log aul
  where aul.user_id = v_target
    and aul.created_at::date >= v_start
    and aul.include_in_stats
  group by aul.created_at::date
  order by date;
end;
$$;

-- ============================================================
-- 三、重新定义 RLS 策略（先 drop 再 create）
-- 给 profiles 表加别名 p，is_admin / id 列引用加 p. 前缀
-- ============================================================

-- 迁移 7：app_settings —— 仅管理员可写
drop policy if exists "settings_write_admin" on public.app_settings;
create policy "settings_write_admin" on public.app_settings
  for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- 迁移 8：user_balance —— admin 可读所有用户余额
drop policy if exists "balance_select_admin" on public.user_balance;
create policy "balance_select_admin" on public.user_balance
  for select to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- 迁移 8：api_usage_log —— admin 可读所有日志
drop policy if exists "usage_log_select_admin" on public.api_usage_log;
create policy "usage_log_select_admin" on public.api_usage_log
  for select to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- 迁移 8：model_config —— 仅 admin 可写
drop policy if exists "model_config_write_admin" on public.model_config;
create policy "model_config_write_admin" on public.model_config
  for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));
