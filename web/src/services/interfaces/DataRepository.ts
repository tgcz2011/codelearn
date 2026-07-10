/**
 * 数据仓储接口
 *
 * 抽象所有持久化数据访问。业务层只依赖本接口，不直接导入任何后端 SDK。
 * 当后端从 Supabase 迁移到 Neon 或其他实现时，只需提供新的实现类即可。
 */
import type {
  AiQuota,
  Course,
  Lesson,
  UserApiKey,
  UserProfile,
  UserProgress,
} from './types'

export interface DataRepository {
  // ---- 用户 ----
  getProfile(userId: string): Promise<UserProfile | null>
  updateProfile(userId: string, data: Partial<UserProfile>): Promise<UserProfile>
  /** 列出全部用户（仅管理员可用） */
  listUsers(): Promise<UserProfile[]>
  /** 启用/禁用用户（仅管理员可用） */
  setUserDisabled(userId: string, disabled: boolean): Promise<void>

  // ---- 课程 ----
  listCourses(): Promise<Course[]>
  getCourse(slug: string): Promise<Course | null>
  getLesson(lessonId: string): Promise<Lesson | null>

  // ---- 学习进度 ----
  getProgress(userId: string, lessonId: string): Promise<UserProgress | null>
  saveProgress(
    userId: string,
    lessonId: string,
    data: Partial<UserProgress>,
  ): Promise<UserProgress>

  // ---- AI 额度 ----
  getAiQuota(userId: string, date: string): Promise<AiQuota | null>
  incrementAiQuota(
    userId: string,
    date: string,
    count: number,
  ): Promise<AiQuota>
  /** 重置某用户的 AI 额度（仅管理员可用） */
  resetAiQuota(userId: string): Promise<void>

  // ---- 用户 API Key ----
  getUserApiKey(userId: string, provider: string): Promise<UserApiKey | null>
  saveUserApiKey(
    userId: string,
    provider: string,
    encryptedKey: string,
  ): Promise<void>
}
