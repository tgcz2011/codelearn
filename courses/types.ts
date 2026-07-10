/**
 * 课程内容数据模型（本地内容定义）
 *
 * 与 web/src/services/interfaces/types.ts 中的 Course/Chapter/Lesson 对齐，
 * 但这是本地课程内容定义，比服务端类型更丰富：
 * - lesson.exercise 是结构化对象（含 prompt/starter_code/expected_output），
 *   而非服务端的单一字符串
 *
 * 课程数据放在项目根 /courses 目录，通过 web/src/courses/index.ts re-export 给前端使用。
 * 这样无后端也能正常展示课程内容（离线优先）。
 */

/** 课程难度等级 */
export type CourseDifficulty = 'beginner' | 'intermediate' | 'advanced'

/** 练习题 */
export interface Exercise {
  /** 练习题目描述 */
  prompt: string
  /** 起始代码（学员在此基础上补全） */
  starter_code: string
  /** 预期输出，用于自动判定是否完成 */
  expected_output: string
}

/** 课时（一节课） */
export interface LessonContent {
  id: string
  title: string
  /** 课时在章节内的排序，从 0 开始 */
  order: number
  /** 讲解内容（Markdown，中文） */
  content_md: string
  /** 示例代码（可真实运行） */
  example_code: string
  /** 练习题 */
  exercise: Exercise
}

/** 章节 */
export interface ChapterContent {
  id: string
  title: string
  /** 章节在课程内的排序，从 0 开始 */
  order: number
  lessons: LessonContent[]
}

/** 课程 */
export interface CourseContent {
  id: string
  /** URL slug，如 "html"、"python" */
  slug: string
  title: string
  description: string
  /** 编程语言标识，对应 runner 的 languageId：html/css/javascript/typescript/python/go */
  language: string
  difficulty: CourseDifficulty
  chapters: ChapterContent[]
}
