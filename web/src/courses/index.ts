/**
 * 前端课程数据入口
 *
 * Re-export 根目录 /courses 的课程数据，供前端组件导入。
 * 这样组件只需 `import { courses } from '@/courses'` 即可获取全部课程，
 * 无后端时也能离线展示课程内容。
 *
 * 路由引入示例（由 Task 3 router 配置）：
 *   import { CoursesPage } from '@/pages/course/CoursesPage'
 *   import { CourseDetailPage } from '@/pages/course/CourseDetailPage'
 *   import { LessonPage } from '@/pages/course/LessonPage'
 */
export {
  courses,
  getCourseBySlug,
  findLesson,
  getFlatLessons,
  normalizeLesson,
} from '../../../courses'
export type {
  CourseContent,
  ChapterContent,
  LessonContent,
  Exercise,
  Example,
  ExerciseType,
  CourseDifficulty,
  LegacyExercise,
} from '../../../courses'
