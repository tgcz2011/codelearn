/**
 * 课程内容数据模型（本地内容定义）
 *
 * 与 web/src/services/interfaces/types.ts 中的 Course/Chapter/Lesson 对齐，
 * 但这是本地课程内容定义，比服务端类型更丰富。
 *
 * 课程结构：每节课分为三个阶段
 *   1. 学习阶段：content_md（Markdown 讲解）
 *   2. 示例阶段：examples（多个可运行示例 + 解释）
 *   3. 练习阶段：exercises（多个练习题，含提示）+ 干净的 playground
 *
 * 课程数据放在项目根 /courses 目录，通过 web/src/courses/index.ts re-export 给前端使用。
 * 这样无后端也能正常展示课程内容（离线优先）。
 */

/** 课程难度等级 */
export type CourseDifficulty = 'beginner' | 'intermediate' | 'advanced'

/** 练习题类型 */
export type ExerciseType = 'output-match' | 'unit-test' | 'open-ended'

/** 示例代码 */
export interface Example {
  /** 示例标题 */
  title: string
  /** 可运行的示例代码 */
  code: string
  /** 示例解释说明 */
  explanation: string
}

/** 练习题 */
export interface Exercise {
  /** 练习类型：输出匹配 / 单元测试 / 开放式 */
  type: ExerciseType
  /** 练习题目描述 */
  prompt: string
  /** 起始代码（学员在此基础上补全，练习阶段显示干净的 playground） */
  starter_code: string
  /** 预期输出，用于自动判定（output-match 类型必填） */
  expected_output?: string
  /** 提示列表（按难度递进） */
  hints: string[]
}

/** 旧格式练习题（迁移用，不依赖新 Exercise 接口） */
export interface LegacyExercise {
  prompt: string
  starter_code: string
  expected_output: string
}

/** 课时（一节课） */
export interface LessonContent {
  id: string
  title: string
  /** 课时在章节内的排序，从 0 开始 */
  order: number
  /** 学习阶段：讲解内容（Markdown，中文） */
  content_md: string
  /** 示例阶段：多个可运行示例（新格式；旧数据用 example_code） */
  examples?: Example[]
  /** 练习阶段：多个练习题（新格式；旧数据用 exercise） */
  exercises?: Exercise[]
  /** 真实情境描述（将本课知识放入真实开发场景） */
  realWorldScenario?: string
  /** 旧格式兼容字段（迁移用，新数据不需要） */
  example_code?: string
  exercise?: LegacyExercise
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
  /** 编程语言标识，对应 runner 的 languageId */
  language: string
  difficulty: CourseDifficulty
  chapters: ChapterContent[]
}

/**
 * 将旧格式 lesson（example_code + exercise）规范化为新格式（examples + exercises）。
 * 新格式数据直接返回，旧格式数据自动转换。
 */
export function normalizeLesson(lesson: LessonContent): Required<Pick<LessonContent, 'examples' | 'exercises'>> {
  // 新格式：已有 examples 和 exercises 数组
  if (lesson.examples && lesson.examples.length > 0) {
    return { examples: lesson.examples, exercises: lesson.exercises ?? [] }
  }

  // 旧格式兼容：从 example_code 和 exercise 转换
  const examples: Example[] = lesson.example_code
    ? [{ title: '示例', code: lesson.example_code, explanation: '' }]
    : []

  const legacyExercise: LegacyExercise | undefined = lesson.exercise
  const exercises: Exercise[] = legacyExercise
    ? [{
        type: 'output-match' as ExerciseType,
        prompt: legacyExercise.prompt,
        starter_code: legacyExercise.starter_code,
        expected_output: legacyExercise.expected_output,
        hints: [],
      }]
    : []

  return { examples, exercises }
}
