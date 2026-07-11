/**
 * 实体类型定义
 *
 * 这些类型是纯数据契约，不依赖任何后端 SDK（如 @supabase/supabase-js）。
 * 业务层只引用本文件与同目录下的接口，从而保证后端可迁移性。
 */

/** 用户资料 */
export interface UserProfile {
  id: string
  email: string
  display_name: string
  is_admin: boolean
  /** 是否被管理员禁用 */
  disabled: boolean
  created_at: string
}

/** 课程难度等级 */
export type CourseDifficulty = 'beginner' | 'intermediate' | 'advanced'

/** 课程 */
export interface Course {
  id: string
  slug: string
  title: string
  description: string
  language: string
  difficulty: CourseDifficulty
  chapters: Chapter[]
}

/** 章节 */
export interface Chapter {
  id: string
  course_id: string
  title: string
  /** 章节在课程内的排序，从 0 开始 */
  order: number
  lessons: Lesson[]
}

/** 课时（一节课） */
export interface Lesson {
  id: string
  chapter_id: string
  title: string
  /** 课时在章节内的排序，从 0 开始 */
  order: number
  /** 讲解内容（Markdown） */
  content_md: string
  /** 示例代码 */
  example_code: string
  /** 练习题描述 */
  exercise: string
  /** 练习预期输出，用于自动判定是否完成 */
  expected_output: string
}

/** 用户学习进度 */
export interface UserProgress {
  id: string
  user_id: string
  lesson_id: string
  completed: boolean
  completed_at: string | null
  /** 用户最后一次提交的代码快照 */
  code_snapshot: string | null
}

/** AI 调用额度（按用户/按日计数） */
export interface AiQuota {
  id: string
  user_id: string
  /** 使用日期，格式 YYYY-MM-DD */
  date_used: string
  count: number
  limit: number
}

/** 用户自定义 API Key（加密存储） */
export interface UserApiKey {
  id: string
  user_id: string
  /** 提供商标识，如 openai / deepseek / ollama */
  provider: string
  /** 加密后的 Key（本期用 base64 占位，生产应使用 AES） */
  encrypted_key: string
  created_at: string
}

/** 遗忘曲线复习计划条目（SM-2 间隔重复算法） */
export interface ReviewScheduleItem {
  id: string
  user_id: string
  lesson_id: string
  /** 难度系数，初始 2.5，根据回忆质量调整 */
  easiness_factor: number
  /** 下次复习间隔（天） */
  interval_days: number
  /** 已成功复习次数 */
  repetition_count: number
  /** 下次复习日期，YYYY-MM-DD */
  next_review_date: string
  /** 上次复习日期，YYYY-MM-DD */
  last_review_date: string | null
  /** 最近一次回忆质量评分 0-5 */
  quality: number | null
}
