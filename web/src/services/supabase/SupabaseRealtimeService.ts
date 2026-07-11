/**
 * Supabase 实时服务实现
 *
 * 实现 RealtimeService 接口，封装 supabase.channel 订阅。
 * 支持按表名和行级过滤订阅 Postgres 变更。
 */
import { supabase } from './client'
import type { RealtimeFilter, RealtimePayload, RealtimeService } from '../interfaces'

export class SupabaseRealtimeService implements RealtimeService {
  private channels: Map<string, ReturnType<typeof supabase.channel>> = new Map()

  subscribe(
    channel: string,
    filter: RealtimeFilter,
    callback: (payload: RealtimePayload) => void,
  ): () => void {
    // 若已存在同名频道先移除，避免重复订阅
    if (this.channels.has(channel)) {
      supabase.removeChannel(this.channels.get(channel)!)
      this.channels.delete(channel)
    }

    const filterConfig = {
      event: '*' as const,
      schema: 'public' as const,
      table: filter.table,
      ...(filter.filter ? { filter: filter.filter } : {}),
    }

    const ch = supabase
      .channel(channel)
      .on('postgres_changes', filterConfig, (payload: { eventType: string; table: string; schema: string; old_record?: Record<string, unknown>; new_record?: Record<string, unknown> }) => {
        callback({
          event: payload.eventType as RealtimePayload['event'],
          table: payload.table,
          schema: payload.schema,
          old_record: payload.old_record,
          record: payload.new_record,
        })
      })
      .subscribe()

    this.channels.set(channel, ch)

    return () => {
      supabase.removeChannel(ch)
      this.channels.delete(channel)
    }
  }

  unsubscribeAll(): void {
    for (const ch of this.channels.values()) {
      supabase.removeChannel(ch)
    }
    this.channels.clear()
  }
}
