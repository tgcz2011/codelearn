/**
 * Supabase 数据仓储实现
 *
 * 实现DataRepository 接口，封装所有表读写。
 * 注意：ai_quota 的递增通过 RPC（security definer 函数）完成，
 * 因为 RLS 策略禁止用户直接写入 ai_quota 表。
 */
import { supabase } from './client'
import type { DataRepository } from '../interfaces'
import type {
  AiQuota,
  Course,
  Lesson,
  ReviewScheduleItem,
  UserApiKey,
  UserProfile,
  UserProgress,
} from '../interfaces'

// ---- DB 行类型（与 schema.sql 列名对应，snake_case）----
interface ProfileRow {
  id: string
  email: string
  display_name: string
  is_admin: boolean
  disabled: boolean
  created_at: string
}

interface LessonRow {
  id: string
  chapter_id: string
  title: string
  order: number
  content_md: string
  example_code: string
  exercise: string
  expected_output: string
}

interface ChapterRow {
  id: string
  course_id: string
  title: string
  order: number
  lessons: LessonRow[]
}

interface CourseRow {
  id: string
  slug: string
  title: string
  description: string
  language: string
  difficulty: Course['difficulty']
  chapters: ChapterRow[]
}

interface ProgressRow {
  id: string
  user_id: string
  lesson_id: string
  completed: boolean
  completed_at: string | null
  code_snapshot: string | null
}

interface QuotaRow {
  id: string
  user_id: string
  date_used: string
  count: number
  limit: number
}

interface ApiKeyRow {
  id: string
  user_id: string
  provider: string
  encrypted_key: string
  created_at: string
}

interface ReviewScheduleRow {
  id: string
  user_id: string
  lesson_id: string
  easiness_factor: number
  interval_days: number
  repetition_count: number
  next_review_date: string
  last_review_date: string | null
  quality: number | null
  created_at: string
  updated_at: string
}

// ---- 映射函数 ----
const toProfile = (r: ProfileRow): UserProfile => ({ ...r })
const toLesson = (r: LessonRow): Lesson => ({ ...r })
const toCourse = (r: CourseRow): Course => ({
  ...r,
  chapters: (r.chapters ?? [])
    .map((c) => ({
      ...c,
      lessons: (c.lessons ?? [])
        .slice()
        .sort((a, b) => a.order - b.order)
        .map(toLesson),
    }))
    .slice()
    .sort((a, b) => a.order - b.order),
})
const toProgress = (r: ProgressRow): UserProgress => ({ ...r })
const toQuota = (r: QuotaRow): AiQuota => ({ ...r })
const toApiKey = (r: ApiKeyRow): UserApiKey => ({ ...r })
const toReview = (r: ReviewScheduleRow): ReviewScheduleItem => ({
  id: r.id,
  user_id: r.user_id,
  lesson_id: r.lesson_id,
  easiness_factor: r.easiness_factor,
  interval_days: r.interval_days,
  repetition_count: r.repetition_count,
  next_review_date: r.next_review_date,
  last_review_date: r.last_review_date,
  quality: r.quality,
})

export class SupabaseRepository implements DataRepository {
  // ---- 用户 ----
  async getProfile(userId: string): Promise<UserProfile | null> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle()
    if (error) throw error
    return data ? toProfile(data as ProfileRow) : null
  }

  async updateProfile(
    userId: string,
    data: Partial<UserProfile>,
  ): Promise<UserProfile> {
    const { data: row, error } = await supabase
      .from('profiles')
      .update({
        display_name: data.display_name,
        // 仅允许用户更新展示名；is_admin/disabled 由管理员路径处理
      })
      .eq('id', userId)
      .select('*')
      .single()
    if (error) throw error
    return toProfile(row as ProfileRow)
  }

  async listUsers(): Promise<UserProfile[]> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    return (data as ProfileRow[]).map(toProfile)
  }

  async setUserDisabled(userId: string, disabled: boolean): Promise<void> {
    const { error } = await supabase
      .from('profiles')
      .update({ disabled })
      .eq('id', userId)
    if (error) throw error
  }

  // ---- 课程 ----
  async listCourses(): Promise<Course[]> {
    const { data, error } = await supabase
      .from('courses')
      .select('*, chapters(*, lessons(*))')
      .order('title', { ascending: true })
    if (error) throw error
    return (data as CourseRow[]).map(toCourse)
  }

  async getCourse(slug: string): Promise<Course | null> {
    const { data, error } = await supabase
      .from('courses')
      .select('*, chapters(*, lessons(*))')
      .eq('slug', slug)
      .maybeSingle()
    if (error) throw error
    return data ? toCourse(data as CourseRow) : null
  }

  async getLesson(lessonId: string): Promise<Lesson | null> {
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .eq('id', lessonId)
      .maybeSingle()
    if (error) throw error
    return data ? toLesson(data as LessonRow) : null
  }

  // ---- 学习进度 ----
  async getProgress(
    userId: string,
    lessonId: string,
  ): Promise<UserProgress | null> {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)
      .maybeSingle()
    if (error) throw error
    return data ? toProgress(data as ProgressRow) : null
  }

  async saveProgress(
    userId: string,
    lessonId: string,
    data: Partial<UserProgress>,
  ): Promise<UserProgress> {
    const payload = {
      user_id: userId,
      lesson_id: lessonId,
      completed: data.completed,
      completed_at: data.completed_at,
      code_snapshot: data.code_snapshot,
    }
    const { data: row, error } = await supabase
      .from('user_progress')
      .upsert(payload, { onConflict: 'user_id,lesson_id' })
      .select('*')
      .single()
    if (error) throw error
    return toProgress(row as ProgressRow)
  }

  // ---- AI 额度 ----
  async getAiQuota(userId: string, date: string): Promise<AiQuota | null> {
    const { data, error } = await supabase
      .from('ai_quota')
      .select('*')
      .eq('user_id', userId)
      .eq('date_used', date)
      .maybeSingle()
    if (error) throw error
    return data ? toQuota(data as QuotaRow) : null
  }

  async incrementAiQuota(
    userId: string,
    date: string,
    count: number,
  ): Promise<AiQuota> {
    // 通过 security definer 函数递增，绕过 RLS 写入限制
    const { data, error } = await supabase.rpc('increment_ai_quota', {
      p_user_id: userId,
      p_date: date,
      p_count: count,
    })
    if (error) throw error
    return toQuota(data as QuotaRow)
  }

  async resetAiQuota(userId: string): Promise<void> {
    const { error } = await supabase.rpc('reset_ai_quota', {
      p_user_id: userId,
    })
    if (error) throw error
  }

  // ---- 用户 API Key ----
  async getUserApiKey(
    userId: string,
    provider: string,
  ): Promise<UserApiKey | null> {
    const { data, error } = await supabase
      .from('user_api_keys')
      .select('*')
      .eq('user_id', userId)
      .eq('provider', provider)
      .maybeSingle()
    if (error) throw error
    return data ? toApiKey(data as ApiKeyRow) : null
  }

  async saveUserApiKey(
    userId: string,
    provider: string,
    encryptedKey: string,
  ): Promise<void> {
    const { error } = await supabase
      .from('user_api_keys')
      .upsert(
        {
          user_id: userId,
          provider,
          encrypted_key: encryptedKey,
        },
        { onConflict: 'user_id,provider' },
      )
    if (error) throw error
  }

  // ---- 遗忘曲线复习计划 ----
  async getAllReviews(userId: string): Promise<ReviewScheduleItem[]> {
    const { data, error } = await supabase
      .from('review_schedule')
      .select('*')
      .eq('user_id', userId)
      .order('next_review_date', { ascending: true })
    if (error) throw error
    return (data as ReviewScheduleRow[]).map(toReview)
  }

  async getDueReviews(userId: string): Promise<ReviewScheduleItem[]> {
    const today = new Date().toISOString().slice(0, 10)
    const { data, error } = await supabase
      .from('review_schedule')
      .select('*')
      .eq('user_id', userId)
      .lte('next_review_date', today)
      .order('next_review_date', { ascending: true })
    if (error) throw error
    return (data as ReviewScheduleRow[]).map(toReview)
  }

  async upsertReview(
    userId: string,
    lessonId: string,
    data: Partial<ReviewScheduleItem>,
  ): Promise<ReviewScheduleItem> {
    const payload = {
      user_id: userId,
      lesson_id: lessonId,
      easiness_factor: data.easiness_factor,
      interval_days: data.interval_days,
      repetition_count: data.repetition_count,
      next_review_date: data.next_review_date,
      last_review_date: data.last_review_date,
      quality: data.quality,
    }
    const { data: row, error } = await supabase
      .from('review_schedule')
      .upsert(payload, { onConflict: 'user_id,lesson_id' })
      .select('*')
      .single()
    if (error) throw error
    return toReview(row as ReviewScheduleRow)
  }

  // ---- 数据库管理 ----
  async resetDatabase(): Promise<{ success: boolean; deletedUsers: number; message: string }> {
    const { data, error } = await supabase.rpc('reset_database')
    if (error) throw error
    const result = data as { success: boolean; deleted_users: number; message: string }
    return {
      success: result.success,
      deletedUsers: result.deleted_users,
      message: result.message,
    }
  }
}
