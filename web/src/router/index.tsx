/**
 * 路由配置
 *
 * 使用 <Routes> 声明式路由（搭配 main.tsx 中的 <BrowserRouter>）。
 * - /login、/register：公开页面
 * - / 及其余业务页：经 ProtectedRoute 守卫，未登录跳转 /login
 * - /admin：额外要求管理员权限
 * - 课程页：/courses、/course/:slug、/lesson/:id（Task 6 实现）
 *
 * 注：initAuth() 在 App.tsx 中调用以恢复会话；ProtectedRoute 依赖 store.loading。
 */
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '@/components/router/ProtectedRoute'
import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import HomePage from '@/pages/HomePage'
import CoursesPage from '@/pages/course/CoursesPage'
import CourseDetailPage from '@/pages/course/CourseDetailPage'
import LessonPage from '@/pages/course/LessonPage'
import SettingsPage from '@/pages/SettingsPage'
import AdminPage from '@/pages/admin/AdminPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>
      {/* 公开页面 */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* 受保护页面 */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <CoursesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/course/:slug"
        element={
          <ProtectedRoute>
            <CourseDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lesson/:id"
        element={
          <ProtectedRoute>
            <LessonPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />

      {/* 管理员页面 */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute requireAdmin>
            <AdminPage />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
