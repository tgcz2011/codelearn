# 迁移后端 / 添加新数据库实现

本文档说明 CodeLearn 的后端抽象层设计，以及如何将后端从 Supabase 迁移到 Neon（或其他实现）。得益于 Repository 抽象层，**迁移时业务层零改动**，只需提供新的接口实现并在容器中注册。

## 架构说明：为什么用 Repository 抽象层

CodeLearn 的设计目标之一是"给未来迁移数据库留好余地"。为此，所有后端能力（数据访问、认证、文件存储、实时订阅）都被抽象为四个接口：

- `DataRepository` — 持久化数据访问（用户、课程、进度、额度、API Key）
- `AuthService` — 注册 / 登录 / 会话 / 管理员判定
- `StorageService` — 对象存储上传 / 下载 / 删除
- `RealtimeService` — 实时数据订阅

业务层（React 组件、Hooks、AI 服务等）**只依赖接口类型**，从不直接 import 任何后端 SDK（如 `@supabase/supabase-js`）。依赖注入由 `services/container.ts` 统一装配。

依赖方向：

```
业务层（components / hooks / ai / store）
        │  只依赖接口
        ▼
services/interfaces/  ← 纯数据契约，不依赖任何后端 SDK
        │
        ▼  （容器按环境变量装配具体实现）
services/container.ts
        │  唯一允许 import 具体后端实现的位置
        ▼
services/supabase/  （或 services/neon/ 等新实现）
```

当前唯一允许 import 具体后端 SDK 的位置是 `services/container.ts` 与 `services/<backend>/` 目录。这意味着添加新后端时，改动被隔离在 `services/` 目录内，业务层零改动。

## 四个核心接口

接口定义位于 `web/src/services/interfaces/`。

### 实体类型（`interfaces/types.ts`）

纯数据契约，不依赖任何后端 SDK：

```ts
export interface UserProfile {
  id: string
  email: string
  display_name: string
  is_admin: boolean
  disabled: boolean
  created_at: string
}

export type CourseDifficulty = 'beginner' | 'intermediate' | 'advanced'

export interface Course {
  id: string; slug: string; title: string; description: string
  language: string; difficulty: CourseDifficulty; chapters: Chapter[]
}
export interface Chapter { id: string; course_id: string; title: string; order: number; lessons: Lesson[] }
export interface Lesson {
  id: string; chapter_id: string; title: string; order: number
  content_md: string; example_code: string; exercise: string; expected_output: string
}

export interface UserProgress {
  id: string; user_id: string; lesson_id: string
  completed: boolean; completed_at: string | null; code_snapshot: string | null
}

export interface AiQuota {
  id: string; user_id: string; date_used: string; count: number; limit: number
}

export interface UserApiKey {
  id: string; user_id: string; provider: string
  encrypted_key: string; created_at: string
}
```

### DataRepository（`interfaces/DataRepository.ts`）

抽象所有持久化数据访问：

```ts
export interface DataRepository {
  // ---- 用户 ----
  getProfile(userId: string): Promise<UserProfile | null>
  updateProfile(userId: string, data: Partial<UserProfile>): Promise<UserProfile>
  listUsers(): Promise<UserProfile[]>                      // 仅管理员
  setUserDisabled(userId: string, disabled: boolean): Promise<void>  // 仅管理员

  // ---- 课程 ----
  listCourses(): Promise<Course[]>
  getCourse(slug: string): Promise<Course | null>
  getLesson(lessonId: string): Promise<Lesson | null>

  // ---- 学习进度 ----
  getProgress(userId: string, lessonId: string): Promise<UserProgress | null>
  saveProgress(userId: string, lessonId: string, data: Partial<UserProgress>): Promise<UserProgress>

  // ---- AI 额度 ----
  getAiQuota(userId: string, date: string): Promise<AiQuota | null>
  incrementAiQuota(userId: string, date: string, count: number): Promise<AiQuota>
  resetAiQuota(userId: string): Promise<void>              // 仅管理员

  // ---- 用户 API Key ----
  getUserApiKey(userId: string, provider: string): Promise<UserApiKey | null>
  saveUserApiKey(userId: string, provider: string, encryptedKey: string): Promise<void>
}
```

### AuthService（`interfaces/AuthService.ts`）

抽象注册/登录/会话/管理员判定：

```ts
export interface AuthSession {
  user: { id: string; email: string } | null
}

export interface AuthService {
  signUp(email: string, password: string): Promise<{ error: string | null }>
  signIn(email: string, password: string): Promise<{ error: string | null }>
  signOut(): Promise<void>
  getSession(): Promise<AuthSession>
  /** 订阅认证状态变化，返回取消订阅函数 */
  onAuthChange(callback: (session: AuthSession) => void): () => void
  /** 判断当前登录用户是否为管理员 */
  isAdmin(): Promise<boolean>
}
```

### StorageService（`interfaces/StorageService.ts`）

抽象对象存储：

```ts
export interface StorageService {
  upload(path: string, file: File | Blob): Promise<{ url: string }>
  download(path: string): Promise<Blob>
  delete(path: string): Promise<void>
}
```

### RealtimeService（`interfaces/RealtimeService.ts`）

抽象实时订阅：

```ts
export interface RealtimeService {
  subscribe(channel: string, callback: (payload: unknown) => void): () => void
  unsubscribeAll(): void
}
```

> 统一出口见 `interfaces/index.ts`，业务层应仅从该文件导入接口与类型。

## 服务容器与依赖注入

`web/src/services/container.ts` 是装配中心：

```ts
export interface ServiceContainer {
  repository: DataRepository
  authService: AuthService
  storageService: StorageService
  realtimeService: RealtimeService
}

let _container: ServiceContainer | null = null

export function initServices(): ServiceContainer {
  if (_container) return _container

  const backend = (
    import.meta.env.VITE_DATA_BACKEND ?? 'supabase'
  ).toLowerCase()

  switch (backend) {
    case 'supabase':
      _container = createSupabaseServices()
      break
    default:
      throw new Error(
        `Unsupported VITE_DATA_BACKEND: "${backend}". Supported: "supabase".`,
      )
  }
  return _container
}

export const services: ServiceContainer = initServices()
```

切换机制：
- 通过环境变量 `VITE_DATA_BACKEND` 选择后端实现，默认 `supabase`。
- 每个后端实现提供一个工厂函数（如 `createSupabaseServices()`），返回一个完整的 `ServiceContainer`。
- `services` 是模块加载时初始化的单例，业务层通过 `services.repository.xxx()` 或 `useServices()` Hook 调用。
- 容器幂等：重复调用 `initServices()` 返回同一实例。

业务层使用示例：

```ts
import { services } from '@/services/container'
import { useServices } from '@/services/container'

// 在非组件代码中
const profile = await services.repository.getProfile(userId)

// 在 React 组件中
const { authService } = useServices()
await authService.signIn(email, password)
```

## 迁移示例：迁移到 Neon

Neon 是 Serverless Postgres，本身只提供数据库，不提供 Auth / Storage / Realtime。因此迁移到 Neon 时：
- `DataRepository` → 用 `@neondatabase/serverless` 实现（最直接，Postgres 兼容 schema）
- `AuthService` → 需另选认证方案（如自建 JWT / 接入 Clerk / Auth0），实现 `AuthService` 接口
- `StorageService` → 需另选对象存储（如 S3 / R2），实现 `StorageService` 接口
- `RealtimeService` → Neon 暂无原生 Realtime，可用 WebSocket / Pusher / Supabase Realtime 单独保留，或实现为 no-op

下面以 `DataRepository` 与 `AuthService` 为例演示完整步骤。

### 第 1 步：安装依赖

```bash
cd web
pnpm add @neondatabase/serverless
# 认证方案示例：用 jose 自签 JWT（或接入 Clerk / Auth0）
pnpm add jose
```

### 第 2 步：实现 NeonRepository（实现 DataRepository）

创建 `web/src/services/neon/NeonRepository.ts`。Neon 是 Postgres，可直接复用 `web/supabase/schema.sql` 的建表语句（去掉 Supabase 专属的 `auth.users` 外键与触发器，改为自管 users 表或保留 Supabase Auth 仅迁移数据层）。

```ts
import { neon } from '@neondatabase/serverless'
import type { DataRepository } from '../interfaces'
import type {
  AiQuota, Course, Lesson, UserApiKey, UserProfile, UserProgress,
} from '../interfaces'

export class NeonRepository implements DataRepository {
  private readonly sql: ReturnType<typeof neon>

  constructor(databaseUrl: string) {
    this.sql = neon(databaseUrl)
  }

  async getProfile(userId: string): Promise<UserProfile | null> {
    const rows = await this.sql`SELECT * FROM profiles WHERE id = ${userId}`
    return (rows[0] as UserProfile) ?? null
  }

  async updateProfile(userId: string, data: Partial<UserProfile>): Promise<UserProfile> {
    // 注意：仅允许更新 display_name，禁止篡改 is_admin / disabled（业务层校验 + DB 触发器）
    const name = data.display_name
    const rows = await this.sql`
      UPDATE profiles SET display_name = ${name} WHERE id = ${userId} RETURNING *
    `
    return rows[0] as UserProfile
  }

  async listUsers(): Promise<UserProfile[]> {
    return await this.sql`SELECT * FROM profiles ORDER BY created_at` as UserProfile[]
  }

  async setUserDisabled(userId: string, disabled: boolean): Promise<void> {
    await this.sql`UPDATE profiles SET disabled = ${disabled} WHERE id = ${userId}`
  }

  async listCourses(): Promise<Course[]> { /* ... */ }
  async getCourse(slug: string): Promise<Course | null> { /* ... */ }
  async getLesson(lessonId: string): Promise<Lesson | null> { /* ... */ }

  async getProgress(userId: string, lessonId: string): Promise<UserProgress | null> { /* ... */ }
  async saveProgress(userId: string, lessonId: string, data: Partial<UserProgress>): Promise<UserProgress> { /* ... */ }

  async getAiQuota(userId: string, date: string): Promise<AiQuota | null> {
    const rows = await this.sql`
      SELECT * FROM ai_quota WHERE user_id = ${userId} AND date_used = ${date}::date
    `
    return (rows[0] as AiQuota) ?? null
  }

  async incrementAiQuota(userId: string, date: string, count: number): Promise<AiQuota> {
    // 对应 schema.sql 的 increment_ai_quota() RPC 逻辑
    const rows = await this.sql`
      INSERT INTO ai_quota (user_id, date_used, count, "limit")
      VALUES (${userId}, ${date}::date, ${count}, 50)
      ON CONFLICT (user_id, date_used)
      DO UPDATE SET count = ai_quota.count + ${count}
      RETURNING *
    `
    return rows[0] as AiQuota
  }

  async resetAiQuota(userId: string): Promise<void> {
    await this.sql`DELETE FROM ai_quota WHERE user_id = ${userId}`
  }

  async getUserApiKey(userId: string, provider: string): Promise<UserApiKey | null> { /* ... */ }
  async saveUserApiKey(userId: string, provider: string, encryptedKey: string): Promise<void> { /* ... */ }
}
```

> 提示：Neon 的 `neon()` 返回的是一个带标签模板字面量的 SQL 函数，参数自动参数化，天然防 SQL 注入。批量查询与表关联需手写 SQL（无 Supabase 的内嵌关联，需逐表查询或 JOIN）。

### 第 3 步：实现 NeonAuthService（实现 AuthService）

Neon 无内置 Auth，以下用 `jose` 自签 JWT 演示接口实现（生产建议直接接入 Clerk / Auth0 等托管 Auth，再适配为本接口）。

```ts
import { SignJWT, jwtVerify } from 'jose'
import type { AuthService, AuthSession } from '../interfaces'

const SECRET = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET ?? 'dev-secret')
const TOKEN_KEY = 'codelearn_token'

export class NeonAuthService implements AuthService {
  async signUp(email: string, password: string): Promise<{ error: string | null }> {
    // 1. 校验邮箱未注册；2. bcrypt 哈希密码；3. 写入 users 表
    // 此处仅演示接口形状，实际需后端代理（前端不应持有哈希密钥）
    return { error: '请在后端代理完成注册（前端不应直接写库做认证）' }
  }

  async signIn(email: string, password: string): Promise<{ error: string | null }> {
    // 1. 查库校验密码哈希；2. 签发 JWT 存 localStorage
    const token = await new SignJWT({ email })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt().setExpirationTime('7d').sign(SECRET)
    localStorage.setItem(TOKEN_KEY, token)
    return { error: null }
  }

  async signOut(): Promise<void> {
    localStorage.removeItem(TOKEN_KEY)
  }

  async getSession(): Promise<AuthSession> {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) return { user: null }
    try {
      const { payload } = await jwtVerify(token, SECRET)
      return { user: { id: payload.sub ?? '', email: payload.email as string } }
    } catch {
      return { user: null }
    }
  }

  onAuthChange(callback: (session: AuthSession) => void): () => void {
    // 自建 Auth 无原生事件，可用 storage 事件 + 自定义 EventTarget 模拟
    const handler = () => { this.getSession().then(callback) }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }

  async isAdmin(): Promise<boolean> {
    const session = await this.getSession()
    if (!session.user) return false
    // 查 profiles 表的 is_admin 字段
    return false // 实现省略
  }
}
```

### 第 4 步：实现 StorageService 与 RealtimeService

按同样方式实现 `NeonStorageService`（如用 S3 / Cloudflare R2）与 `NeonRealtimeService`（如用 WebSocket / Pusher，或暂实现为 no-op）：

```ts
import type { RealtimeService } from '../interfaces'

// Neon 无原生 Realtime 的最小 no-op 实现（功能降级，不影响其他能力）
export class NoopRealtimeService implements RealtimeService {
  subscribe(_channel: string, _callback: (payload: unknown) => void): () => void {
    return () => {} // 取消订阅 no-op
  }
  unsubscribeAll(): void { /* no-op */ }
}
```

### 第 5 步：创建工厂并注册到 container

创建 `web/src/services/neon/index.ts`：

```ts
import type { ServiceContainer } from '../container'
import { NeonRepository } from './NeonRepository'
import { NeonAuthService } from './NeonAuthService'
import { NeonStorageService } from './NeonStorageService'
import { NoopRealtimeService } from './NeonRealtimeService'

export function createNeonServices(): ServiceContainer {
  const databaseUrl = import.meta.env.VITE_NEON_DATABASE_URL
  if (!databaseUrl) throw new Error('Missing VITE_NEON_DATABASE_URL')

  return {
    repository: new NeonRepository(databaseUrl),
    authService: new NeonAuthService(),
    storageService: new NeonStorageService(),
    realtimeService: new NoopRealtimeService(),
  }
}
```

在 `web/src/services/container.ts` 的 `switch` 中注册新分支：

```ts
import { createSupabaseServices } from './supabase'
import { createNeonServices } from './neon'   // 新增

export function initServices(): ServiceContainer {
  if (_container) return _container
  const backend = (import.meta.env.VITE_DATA_BACKEND ?? 'supabase').toLowerCase()

  switch (backend) {
    case 'supabase':
      _container = createSupabaseServices()
      break
    case 'neon':                               // 新增分支
      _container = createNeonServices()
      break
    default:
      throw new Error(
        `Unsupported VITE_DATA_BACKEND: "${backend}". Supported: "supabase", "neon".`,
      )
  }
  return _container
}
```

### 第 6 步：设置环境变量切换

在 `web/.env` 中设置：

```bash
VITE_DATA_BACKEND=neon
VITE_NEON_DATABASE_URL=postgres://user:pass@ep-xxx.region.aws.neon.tech/codelearn?sslmode=require
# 若自建 Auth
VITE_JWT_SECRET=your-jwt-secret
```

至此，业务层（组件、Hooks、AI 服务）零改动，后端已切换为 Neon。

## 注意事项

- **RLS 迁移**：Supabase 的行级安全（RLS）在数据库层强制"自己只能读写自己的数据"。迁移到 Neon 时，`schema.sql` 中的 RLS 策略仍是 Postgres 原生语法可继续使用，但需注意：
  - Supabase 的 `auth.uid()` 函数是 Supabase 专属，Neon 下需替换为自建函数（从 JWT / session 中取当前用户 id）。
  - `SECURITY DEFINER` 函数（`is_admin()` / `increment_ai_quota()` / `reset_ai_quota()`）可保留，但 `auth.uid()` 调用需替换。
  - 若自建 Auth 无数据库层 RLS，必须把所有权校验上移到 Repository 实现层（每个方法显式校验 `userId`），否则有 BOLA 风险。

- **Auth 迁移难点**：Supabase Auth 是托管服务，提供注册/登录/会话/邮件验证/第三方登录/OAuth/魔法链接等完整能力。迁移到自建 Auth 时：
  - 前端**不应**直接做密码哈希与写库（密钥泄露风险），应通过后端代理（Edge Function / 独立 API）完成。
  - `onAuthChange` 的实时性：Supabase 跨标签页自动同步会话；自建 Auth 需用 `storage` 事件 + 自定义 EventTarget 模拟。
  - 第三方登录（Google / GitHub）需重新对接 OAuth 流程。

- **Realtime 差异**：Supabase Realtime 基于 Postgres CDC，订阅表变更自动推送。Neon 暂无等价能力，可选方案：
  - 用 WebSocket 自建推送层
  - 接入 Pusher / Ably / Supabase Realtime（仅保留 Realtime 一项）
  - 暂实现为 no-op（进度同步降级为轮询或手动刷新），不影响其他核心功能

- **Storage 迁移**：Supabase Storage 是对象存储 + 公共 URL。迁移到 S3 / R2 时需自管 bucket 策略与签名 URL。当前业务层对 Storage 的使用较少，实现成本可控。

- **课程数据离线优先**：`DataRepository.listCourses/getCourse/getLesson` 在 Supabase 实现中查 DB，但前端 `web/src/courses/` 已 re-export 本地 `courses/` 数据作为离线兜底。迁移后即使 DB 无课程数据，离线内容仍可正常展示。

- **接口契约不可破**：迁移实现时必须完整实现接口的所有方法，返回类型与字段必须与 `interfaces/types.ts` 一致（字段名 snake_case，与 schema.sql 列名对应）。否则业务层类型检查会失败。

- **容器是唯一 import 后端 SDK 的位置**：新实现目录（`services/neon/`）内的文件可 import `@neondatabase/serverless` 等 SDK，但业务层不得直接 import 这些目录，必须通过 `services` 单例访问。这保证了未来再次迁移时改动仍被隔离。
