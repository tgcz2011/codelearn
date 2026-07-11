/**
 * 实时订阅服务接口
 *
 * 抽象实时数据订阅（如进度同步、协作通知）。业务层只依赖本接口，
 * 不直接调用任何后端 SDK 的实时 API。
 */

/** 订阅过滤器：指定监听的表和行级过滤条件 */
export interface RealtimeFilter {
  /** 表名，如 "user_progress" */
  table: string
  /** 行级过滤，如 "user_id=eq.xxx"（可选） */
  filter?: string
}

/** Postgres 变更事件载荷 */
export interface RealtimePayload {
  event: 'INSERT' | 'UPDATE' | 'DELETE' | '*'
  table: string
  schema: string
  old_record?: Record<string, unknown>
  record?: Record<string, unknown>
}

export interface RealtimeService {
  /**
   * 订阅指定表的数据变更。
   * @param channel 频道名（唯一标识，重复订阅会替换旧订阅）
   * @param filter 过滤器：指定表名和行级过滤
   * @param callback 收到变更时调用
   * @returns 取消订阅函数
   */
  subscribe(
    channel: string,
    filter: RealtimeFilter,
    callback: (payload: RealtimePayload) => void,
  ): () => void
  /** 取消所有已建立的订阅 */
  unsubscribeAll(): void
}
