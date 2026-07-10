/**
 * 实时订阅服务接口
 *
 * 抽象实时数据订阅（如进度同步、协作通知）。业务层只依赖本接口，
 * 不直接调用任何后端 SDK 的实时 API。
 */

export interface RealtimeService {
  /**
   * 订阅指定频道。callback 在收到推送时被调用。
   * 返回值是取消订阅函数，调用后停止接收该频道消息。
   */
  subscribe(channel: string, callback: (payload: unknown) => void): () => void
  /** 取消所有已建立的订阅 */
  unsubscribeAll(): void
}
