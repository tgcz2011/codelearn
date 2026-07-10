/**
 * 课程数据聚合导出
 *
 * 汇集所有语言的课程数据，提供统一的查询入口。
 * 前端通过 web/src/courses/index.ts re-export 本文件使用。
 */
import type { CourseContent } from './types'
import { htmlCourse } from './html'
import { cssCourse } from './css'
import { javascriptCourse } from './javascript'
import { typescriptCourse } from './typescript'
import { pythonCourse } from './python'
import { goCourse } from './go'

/** 全部课程列表 */
export const courses: CourseContent[] = [
  htmlCourse,
  cssCourse,
  javascriptCourse,
  typescriptCourse,
  pythonCourse,
  goCourse,
]

/** 按 slug 查找课程 */
export function getCourseBySlug(slug: string): CourseContent | undefined {
  return courses.find((c) => c.slug === slug)
}

/** 按 lesson id 查找课节及其所属课程与章节 */
export function findLesson(lessonId: string): {
  course: CourseContent
  lesson: CourseContent['chapters'][0]['lessons'][0]
} | null {
  for (const course of courses) {
    for (const chapter of course.chapters) {
      const lesson = chapter.lessons.find((l) => l.id === lessonId)
      if (lesson) return { course, lesson }
    }
  }
  return null
}

/** 获取某课程内所有课节的扁平列表（按章节和课节顺序） */
export function getFlatLessons(course: CourseContent): {
  lessonId: string
  lessonTitle: string
  chapterId: string
  chapterTitle: string
}[] {
  const result: { lessonId: string; lessonTitle: string; chapterId: string; chapterTitle: string }[] = []
  for (const chapter of course.chapters) {
    for (const lesson of chapter.lessons) {
      result.push({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        chapterId: chapter.id,
        chapterTitle: chapter.title,
      })
    }
  }
  return result
}

export type { CourseContent, ChapterContent, LessonContent, Exercise, CourseDifficulty } from './types'
