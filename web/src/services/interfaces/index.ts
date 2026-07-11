/**
 * 服务抽象层统一出口
 *
 * 业务层应仅从本文件导入接口与类型，保证不依赖任何后端 SDK。
 */
export type {
  AiQuota,
  Chapter,
  Course,
  CourseDifficulty,
  Lesson,
  ReviewScheduleItem,
  UserApiKey,
  UserProfile,
  UserProgress,
} from './types'
export type { DataRepository } from './DataRepository'
export type { AuthService, AuthSession } from './AuthService'
export type { StorageService } from './StorageService'
export type { RealtimeService, RealtimeFilter, RealtimePayload } from './RealtimeService'
