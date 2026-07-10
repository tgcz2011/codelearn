# 后端迁移指南：如何添加新的数据后端实现

CodeLearn 的业务层**只依赖服务接口，不直接调用任何后端 SDK**。这是项目最关键的可迁移性设计：从 Supabase 迁移到 Neon、PlanetScale 或任何其他后端时，**业务层代码零改动**，只需新增一份接口实现并在 `serviceContainer` 中注册。

## 1. 四个核心接口

所有接口定义在 `web/src/services/interfaces/`，均为纯 TypeScript 接口，**不导入任何 SDK**：

| 接口 | 文件 | 职责 |
| --- | --- | --- |
| `DataRepository` | `DataRepository.ts` | 持久化数据 CRUD（用户/课程/进度/额度/API Key） |
| `AuthService` | `AuthService.ts` | 注册/登录/登出/会话/管理员判定 |
| `StorageService` | `StorageService.ts` | 文件上传/下载/删除 |
| `RealtimeService` | `RealtimeService.ts` | 实时频道订阅 |

实体类型（`UserProfile` / `Course` / `Chapter` / `Lesson` / `UserProgress` / `AiQuota` / `UserApiKey`）定义在 `types.ts`。

> **铁律**：`interfaces/` 目录下的任何文件都不得出现 `import ... from '@supabase/...'` 或其他 SDK 导入。业务层（组件、store、hook）只能从 `@/services/interfaces` 或 `@/services/container` 导入。

## 2. serviceContainer 依赖注入机制

`web/src/services/container.ts` 是唯一允许 import 具体后端实现的位置：

```
业务层 ──> services 单例（container.ts）──> 接口（interfaces/）
                                         │
                          按 VITE_DATA_BACKEND 装配实现
                                         │
                          ┌──────────────┴──────────────┐
                          ▼                             ▼
                   ./supabase（Supabase 实现）    ./neon（未来 Neon 实现）
```

- `initServices()`：读取 `import.meta.env.VITE_DATA_BACKEND`（默认 `'supabase'`），在 switch 中装配对应实现，幂等。
- `services`：模块级单例，业务层通过 `services.repository.xxx()` / `services.authService.signIn()` 调用。
- `useServices()`：React 便捷 Hook。

### 切换后端

在 `web/.env` 中设置：

```bash
VITE_DATA_BACKEND=supabase   # 当前
# VITE_DATA_BACKEND=neon     # 未来
```

无需改任何业务代码。

## 3. 添加新后端的步骤（以 Neon 为例）

### 步骤 1：安装 SDK

```bash
pnpm add @neondatabase/serverless
```

### 步骤 2：创建实现目录

```
web/src/services/neon/
├── client.ts              # Neon SQL 客户端单例
├── NeonRepository.ts      # 实现 DataRepository
├── NeonAuthService.ts     # 实现 AuthService（Neon 无内置 Auth，需自建或对接第三方）
├── NeonStorageService.ts  # 实现 StorageService（如对接 S3/R2）
├── NeonRealtimeService.ts # 实现 RealtimeService（如对接 WebSocket/Ably）
└── index.ts               # 导出 createNeonServices()
```

> 注意：Neon 是纯 Postgres，不提供 Auth/Storage/Realtime。这些能力需组合第三方服务（如 Auth0 + S3 + Ably）。接口设计已将它们解耦，可分别实现。

### 步骤 3：实现接口

每个实现类用 `implements XxxService` 声明，确保类型安全。

### 步骤 4：导出工厂函数

`web/src/services/neon/index.ts`：

```typescript
import type { ServiceContainer } from '../container'
import { NeonAuthService } from './NeonAuthService'
import { NeonRealtimeService } from './NeonRealtimeService'
import { NeonRepository } from './NeonRepository'
import { NeonStorageService } from './NeonStorageService'

export function createNeonServices(): ServiceContainer {
  return {
    repository: new NeonRepository(),
    authService: new NeonAuthService(),
    storageService: new NeonStorageService(),
    realtimeService: new NeonRealtimeService(),
  }
}
```

### 步骤 5：在 container.ts 注册

```typescript
import { createNeonServices } from './neon'
// ...
switch (backend) {
  case 'supabase':
    _container = createSupabaseServices()
    break
  case 'neon':
    _container = createNeonServices()  // 新增
    break
  default:
    throw new Error(`Unsupported VITE_DATA_BACKEND: "${backend}"`)
}
```

### 步骤 6：切换环境变量

```bash
VITE_DATA_BACKEND=neon
```

完成。业务层零改动。

## 4. NeonRepository 实现骨架（伪代码）

```typescript
import { neon } from '@neondatabase/serverless'
import type { DataRepository } from '../interfaces'
import type { UserProfile, Course, Lesson, UserProgress, AiQuota, UserApiKey } from '../interfaces'

const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL!)

export class NeonRepository implements DataRepository {
  async getProfile(userId: string): Promise<UserProfile | null> {
    const rows = await sql`SELECT * FROM profiles WHERE id = ${userId}`
    return rows[0] ?? null
  }

  async updateProfile(userId: string, data: Partial<UserProfile>): Promise<UserProfile> {
    const rows = await sql`
      UPDATE profiles SET display_name = ${data.display_name}
      WHERE id = ${userId} RETURNING *
    `
    return rows[0]
  }

  async listUsers(): Promise<UserProfile[]> {
    return await sql`SELECT * FROM profiles ORDER BY created_at DESC`
  }

  async setUserDisabled(userId: string, disabled: boolean): Promise<void> {
    await sql`UPDATE profiles SET disabled = ${disabled} WHERE id = ${userId}`
  }

  async listCourses(): Promise<Course[]> {
    // Neon 无关系展开，需手动组装 courses → chapters → lessons
    const courses = await sql`SELECT * FROM courses ORDER BY title`
    const chapters = await sql`SELECT * FROM chapters ORDER BY "order"`
    const lessons = await sql`SELECT * FROM lessons ORDER BY "order"`
    // 组装嵌套结构...
    return courses.map((c) => ({
      ...c,
      chapters: chapters
        .filter((ch) => ch.course_id === c.id)
        .map((ch) => ({
          ...ch,
          lessons: lessons.filter((l) => l.chapter_id === ch.id),
        })),
    }))
  }

  async getCourse(slug: string): Promise<Course | null> {
    const rows = await sql`SELECT * FROM courses WHERE slug = ${slug}`
    return rows[0] ?? null
  }

  async getLesson(lessonId: string): Promise<Lesson | null> {
    const rows = await sql`SELECT * FROM lessons WHERE id = ${lessonId}`
    return rows[0] ?? null
  }

  async getProgress(userId: string, lessonId: string): Promise<UserProgress | null> {
    const rows = await sql`
      SELECT * FROM user_progress WHERE user_id = ${userId} AND lesson_id = ${lessonId}
    `
    return rows[0] ?? null
  }

  async saveProgress(
    userId: string,
    lessonId: string,
    data: Partial<UserProgress>,
  ): Promise<UserProgress> {
    const rows = await sql`
      INSERT INTO user_progress (user_id, lesson_id, completed, completed_at, code_snapshot)
      VALUES (${userId}, ${lessonId}, ${data.completed}, ${data.completed_at}, ${data.code_snapshot})
      ON CONFLICT (user_id, lesson_id)
      DO UPDATE SET
        completed = EXCLUDED.completed,
        completed_at = EXCLUDED.completed_at,
        code_snapshot = EXCLUDED.code_snapshot
      RETURNING *
    `
    return rows[0]
  }

  async getAiQuota(userId: string, date: string): Promise<AiQuota | null> {
    const rows = await sql`
      SELECT * FROM ai_quota WHERE user_id = ${userId} AND date_used = ${date}
    `
    return rows[0] ?? null
  }

  async incrementAiQuota(userId: string, date: string, count: number): Promise<AiQuota> {
    const rows = await sql`
      INSERT INTO ai_quota (user_id, date_used, count, "limit")
      VALUES (${userId}, ${date}, ${count}, 50)
      ON CONFLICT (user_id, date_used)
      DO UPDATE SET count = ai_quota.count + ${count}
      RETURNING *
    `
    return rows[0]
  }

  async resetAiQuota(userId: string): Promise<void> {
    await sql`DELETE FROM ai_quota WHERE user_id = ${userId}`
  }

  async getUserApiKey(userId: string, provider: string): Promise<UserApiKey | null> {
    const rows = await sql`
      SELECT * FROM user_api_keys WHERE user_id = ${userId} AND provider = ${provider}
    `
    return rows[0] ?? null
  }

  async saveUserApiKey(userId: string, provider: string, encryptedKey: string): Promise<void> {
    await sql`
      INSERT INTO user_api_keys (user_id, provider, encrypted_key)
      VALUES (${userId}, ${provider}, ${encryptedKey})
      ON CONFLICT (user_id, provider)
      DO UPDATE SET encrypted_key = EXCLUDED.encrypted_key
    `
  }
}
```

> **差异提示**：
> - Neon 用参数化 SQL 模板字符串（`` sql`...${var}...` ``），Supabase 用查询构建器（`.from().eq()`）。
> - Neon 无关系自动展开，需手动组装嵌套实体（如 Course→Chapter→Lesson）。
> - Neon 无内置 Auth，`NeonAuthService` 需自行实现密码哈希（bcrypt）+ JWT 签发，或对接 Auth0/Clerk。
> - Neon 无 Storage/Realtime，需对接 S3/R2 + WebSocket/Ably。
> - Neon 的 RLS 需在应用层模拟（Neon 无 PostgREST 的 RLS），所有权限校验在 Repository 内用 WHERE 子句实现。

## 5. 验证迁移正确性

1. `pnpm lint` 通过 —— 无未使用变量、无 any 滥用。
2. `pnpm build`（tsc 类型检查）通过 —— 接口实现完整。
3. 确认 `interfaces/` 目录文件不包含任何 SDK import：
   ```bash
   grep -r "supabase\|neon\|@neondatabase" web/src/services/interfaces/
   # 应无输出
   ```
4. 业务层（`src/components`、`src/store` 等）不直接 import SDK：
   ```bash
   grep -r "@supabase" web/src/ --include="*.ts" --include="*.tsx" | grep -v "src/services/supabase"
   # 应无输出
   ```
