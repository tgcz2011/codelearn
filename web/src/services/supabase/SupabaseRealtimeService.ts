/**
 * Supabase 实时服务实现
 *
 * 实现 RealtimeService 接口，封装 supabase.channel 订阅。
 */
import { supabase } from './client'
import type { RealtimeService } from '../interfaces'

export class SupabaseRealtimeService implements RealtimeService {
  private channels: Map<string, ReturnType<typeof supabase.channel>> = new Map()

  subscribe(channel: string, callback: (payload: unknown) => void): () => void {
    // 若已存在同名频道先移除，避免重复订阅
    if (this.channels.has(channel)) {
      supabase.removeChannel(this.channels.get(channel)!)
      this.channels.delete(channel)
    }

    const ch = supabase
      .channel(channel)
      .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
        callback(payload)
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
