-- ============================================================
-- 启用 user_progress 表的 Realtime（实时同步）
-- ============================================================

-- 将 user_progress 表加入 realtime publication
alter publication supabase_realtime add table public.user_progress;
