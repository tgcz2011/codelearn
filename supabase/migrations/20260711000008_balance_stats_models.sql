-- 金额制额度 + API调用日志 + 模型配置 + 融合配置 + 封禁
-- 测试阶段，可以重建

-- ============================================================
-- 1. user_balance 表（用户余额，金额制）
-- ============================================================
create table if not exists public.user_balance (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  balance numeric(12,6) not null default 0,
  total_recharged numeric(12,6) not null default 0,
  total_consumed numeric(12,6) not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.user_balance enable row level security;

drop policy if exists "balance_select_self" on public.user_balance;
create policy "balance_select_self" on public.user_balance
  for select to authenticated using (user_id = (select auth.uid()));

drop policy if exists "balance_select_admin" on public.user_balance;
create policy "balance_select_admin" on public.user_balance
  for select to authenticated
  using (exists (select 1 from public.profiles where id = auth.uid() and is_admin));

-- 写操作全部通过 RPC（SECURITY DEFINER）完成，不直接开放

-- ============================================================
-- 2. api_usage_log 表（API调用日志）
-- ============================================================
create table if not exists public.api_usage_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  call_type text not null,
  provider text not null default '',
  model text not null default '',
  input_tokens integer not null default 0,
  output_tokens integer not null default 0,
  cost numeric(12,6) not null default 0,
  is_custom_model boolean not null default false,
  include_in_stats boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists idx_usage_log_user_time on public.api_usage_log(user_id, created_at desc);
create index if not exists idx_usage_log_time on public.api_usage_log(created_at desc);
create index if not exists idx_usage_log_type on public.api_usage_log(call_type);

alter table public.api_usage_log enable row level security;

-- 自己可读自己的日志
drop policy if exists "usage_log_select_self" on public.api_usage_log;
create policy "usage_log_select_self" on public.api_usage_log
  for select to authenticated using (user_id = (select auth.uid()));

-- admin 可读所有日志
drop policy if exists "usage_log_select_admin" on public.api_usage_log;
create policy "usage_log_select_admin" on public.api_usage_log
  for select to authenticated
  using (exists (select 1 from public.profiles where id = auth.uid() and is_admin));

-- 用户可更新自己的 include_in_stats
drop policy if exists "usage_log_update_self" on public.api_usage_log;
create policy "usage_log_update_self" on public.api_usage_log
  for update to authenticated using (user_id = (select auth.uid()));

-- 插入通过 RPC 完成

-- ============================================================
-- 3. model_config 表（模型配置）
-- ============================================================
create table if not exists public.model_config (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  model_id text not null,
  display_name text not null,
  context_length integer not null default 128000,
  input_price numeric(10,4) not null default 0,
  output_price numeric(10,4) not null default 0,
  is_custom boolean not null default false,
  enabled boolean not null default true,
  created_at timestamptz not null default now(),
  unique(provider, model_id)
);

alter table public.model_config enable row level security;

-- 所有已登录用户可读
drop policy if exists "model_config_read" on public.model_config;
create policy "model_config_read" on public.model_config
  for select to authenticated using (true);

-- 仅 admin 可写
drop policy if exists "model_config_write_admin" on public.model_config;
create policy "model_config_write_admin" on public.model_config
  for all to authenticated
  using (exists (select 1 from public.profiles where id = auth.uid() and is_admin))
  with check (exists (select 1 from public.profiles where id = auth.uid() and is_admin));

-- ============================================================
-- 4. app_settings 默认值更新
-- ============================================================
insert into public.app_settings (key, value) values
  ('code_exec_price_rate', '{"calls_per_dollar": 200}'::jsonb),
  ('ai_fusion_config', '{"enabled": false, "judge_model": null, "candidate_models": []}'::jsonb),
  ('default_balance', '1.0000'::jsonb)
on conflict (key) do nothing;

-- ============================================================
-- 5. RPC：获取用户余额
-- ============================================================
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
    select is_admin into v_is_admin from public.profiles where id = auth.uid();
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

-- ============================================================
-- 6. RPC：admin 设置用户余额
-- ============================================================
create or replace function public.admin_set_user_balance(p_user_id uuid, p_balance numeric)
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

  insert into public.user_balance (user_id, balance, total_recharged, total_consumed, updated_at)
  values (p_user_id, p_balance, p_balance, 0, now())
  on conflict (user_id) do update
  set balance = p_balance, updated_at = now();

  return jsonb_build_object('success', true, 'balance', p_balance);
end;
$$;

-- ============================================================
-- 7. RPC：admin 充值（增加余额）
-- ============================================================
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
  select is_admin into v_is_admin from public.profiles where id = auth.uid();
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

-- ============================================================
-- 8. RPC：扣减余额（内部调用，消耗额度时使用）
-- ============================================================
create or replace function public.consume_balance(p_user_id uuid, p_amount numeric)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_balance numeric;
begin
  select balance into v_balance from public.user_balance where user_id = p_user_id;

  if v_balance is null then
    -- 没有余额记录，尝试从 app_settings 读取默认额度
    declare
      v_default numeric;
    begin
      select (value::text)::numeric into v_default from public.app_settings where key = 'default_balance';
      v_balance := coalesce(v_default, 1.0);

      insert into public.user_balance (user_id, balance, total_recharged, total_consumed, updated_at)
      values (p_user_id, v_balance, v_balance, 0, now())
      on conflict (user_id) do nothing;
    end;
  end if;

  if v_balance < p_amount then
    return jsonb_build_object('success', false, 'error', 'insufficient_balance', 'balance', v_balance);
  end if;

  update public.user_balance
  set balance = balance - p_amount,
      total_consumed = total_consumed + p_amount,
      updated_at = now()
  where user_id = p_user_id;

  return jsonb_build_object('success', true, 'balance', v_balance - p_amount);
end;
$$;

-- ============================================================
-- 9. RPC：记录 API 调用日志
-- ============================================================
create or replace function public.log_api_usage(
  p_user_id uuid,
  p_call_type text,
  p_provider text default '',
  p_model text default '',
  p_input_tokens integer default 0,
  p_output_tokens integer default 0,
  p_cost numeric default 0,
  p_is_custom_model boolean default false
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.api_usage_log (
    user_id, call_type, provider, model,
    input_tokens, output_tokens, cost, is_custom_model, include_in_stats
  ) values (
    p_user_id, p_call_type, p_provider, p_model,
    p_input_tokens, p_output_tokens, p_cost, p_is_custom_model, true
  );
end;
$$;

-- ============================================================
-- 10. RPC：获取用户使用统计
-- ============================================================
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
    select is_admin into v_is_admin from public.profiles where id = auth.uid();
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

-- ============================================================
-- 11. RPC：admin 获取全局使用统计
-- ============================================================
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
  select is_admin into v_is_admin from public.profiles where id = auth.uid();
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

-- ============================================================
-- 12. RPC：admin 获取所有用户余额列表
-- ============================================================
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
  select is_admin into v_is_admin from public.profiles where id = auth.uid();
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

-- ============================================================
-- 13. RPC：封禁/解封用户
-- ============================================================
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
  select is_admin into v_is_admin from public.profiles where id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'Permission denied: admin only';
  end if;

  -- 不能封禁其他 admin
  select is_admin into v_target_is_admin from public.profiles where id = p_user_id;
  if coalesce(v_target_is_admin, false) and p_banned then
    raise exception 'Cannot ban an admin user';
  end if;

  update public.profiles set disabled = p_banned where id = p_user_id;

  return jsonb_build_object('success', true, 'banned', p_banned);
end;
$$;

-- ============================================================
-- 14. RPC：获取/设置 AI 融合配置
-- ============================================================
create or replace function public.get_ai_fusion_config()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_value jsonb;
begin
  select value into v_value from public.app_settings where key = 'ai_fusion_config';
  return coalesce(v_value, '{"enabled": false, "judge_model": null, "candidate_models": []}'::jsonb);
end;
$$;

create or replace function public.set_ai_fusion_config(p_config jsonb)
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

  update public.app_settings
  set value = p_config, updated_at = now(), updated_by = auth.uid()
  where key = 'ai_fusion_config';

  return jsonb_build_object('success', true, 'config', p_config);
end;
$$;

-- ============================================================
-- 15. RPC：获取代码执行价格
-- ============================================================
create or replace function public.get_code_exec_price()
returns numeric
language plpgsql
security definer
set search_path = public
as $$
declare
  v_value jsonb;
  v_calls_per_dollar numeric;
begin
  select value into v_value from public.app_settings where key = 'code_exec_price_rate';
  v_calls_per_dollar := coalesce((v_value->>'calls_per_dollar')::numeric, 200);
  return 1.0 / v_calls_per_dollar;
end;
$$;

-- ============================================================
-- 16. RPC：admin 设置代码执行价格
-- ============================================================
create or replace function public.admin_set_code_exec_price(p_calls_per_dollar integer)
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

  update public.app_settings
  set value = jsonb_build_object('calls_per_dollar', p_calls_per_dollar),
      updated_at = now(), updated_by = auth.uid()
  where key = 'code_exec_price_rate';

  return jsonb_build_object('success', true, 'calls_per_dollar', p_calls_per_dollar);
end;
$$;

-- ============================================================
-- 17. RPC：获取每日用量时间序列（用于图表）
-- ============================================================
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
    select is_admin into v_is_admin from public.profiles where id = auth.uid();
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
-- 18. 触发器：新用户注册时自动创建余额记录
-- ============================================================
create or replace function public.auto_create_balance()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_default numeric;
begin
  select (value::text)::numeric into v_default from public.app_settings where key = 'default_balance';
  v_default := coalesce(v_default, 1.0);

  insert into public.user_balance (user_id, balance, total_recharged, total_consumed)
  values (new.id, v_default, v_default, 0)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_profile_create_balance on public.profiles;
create trigger on_profile_create_balance
  after insert on public.profiles
  for each row execute function public.auto_create_balance();
