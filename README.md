# CodeLearn

> 免费、跨平台、AI 辅助的编程学习平台。

CodeLearn 是一个开源的编程学习平台，支持 **Web / macOS / Windows / Android / iOS** 全平台。内置 Monaco 代码编辑器与多种代码执行方式（桌面端本机运行时 / 浏览器 WASM / 远程服务），并提供 AI 辅助提示、代码解释与动态练习生成能力。后端基于 Supabase（Auth + Postgres + Storage + Realtime），通过 Repository 抽象层封装，可平滑迁移到 Neon 等其他实现。

- GitHub 仓库：<https://github.com/tgcz2011/codelearn>
- 在线演示：<https://tgcz2011.github.io/codelearn/>

## 功能特性

- **9 门语言课程**：HTML / CSS / JavaScript / TypeScript / Python / Go / Java / Rust / C/C++，离线优先的课程内容（无需后端即可浏览）。
- **三阶段学习流程**：每节课分为「学习 → 示例 → 练习」三个阶段，先讲解知识点，再展示多个可运行示例，最后在干净的 playground 中做练习题（含逐步提示与自动判定）。
- **课程目录侧边栏**：全局可折叠的课程树形目录，随时回看任意课节，支持跨课程导航。
- **遗忘曲线复习**：基于 SM-2 间隔重复算法，自动安排复习计划，抗遗忘。
- **跨设备进度同步**：基于 Supabase Realtime，mac / Windows / Web / 移动端进度实时同步。
- **全平台覆盖**：Web 端浏览器即用；桌面端（macOS / Windows）基于 Tauri 2.0；移动端（Android / iOS）基于 Tauri Mobile。
- **三种代码执行模式**：
  - `native` 桌面端本机运行时（Tauri 调用本机 python3 / node / tsx / go）
  - `wasm` 浏览器内 WASM / iframe 执行（Pyodide、浏览器内 TS 编译器、HTML 预览）
  - `remote` 远程服务执行（通过 Supabase Edge Function 代理 OnlineCompiler.io，支持 Python / Go / TypeScript / Java / C / C++ / Rust）
- **AI 辅助**：渐进式提示、代码解释、动态练习生成；平台共享 Key（每日免费额度）+ 用户自定义 Key（OpenAI / DeepSeek / Ollama 等 OpenAI 兼容协议）。
- **多种登录方式**：邮箱密码注册登录 + GitHub OAuth 第三方登录。
- **自动管理员**：第一个注册的用户自动成为管理员，拥有用户管理和数据库管理面板。
- **多用户管理**：学习进度云端同步、管理员用户管理（启用/禁用、额度重置）、数据库重置（测试阶段）。
- **国际化（i18n）**：中文 / English 双语，localStorage 持久化。
- **主题切换**：亮色 / 暗色 / 跟随系统。

## 技术栈

| 层 | 技术 |
| --- | --- |
| 桌面端 / 移动端壳 | Tauri 2.0（Rust 后端） |
| 前端 | React 18 + TypeScript + Vite 5 + TailwindCSS 3 |
| 状态管理 | Zustand |
| 代码编辑器 | Monaco Editor（@monaco-editor/react） |
| 后端 / 数据 | Supabase（Auth + Postgres + Storage + Realtime），通过服务抽象层解耦，可迁移 |
| 代码执行 | WASM（Pyodide / 浏览器内 TS 编译器 / iframe）/ 本机运行时（Tauri）/ 远程 Go 服务 |
| 国际化 | react-i18next + i18next |
| AI | OpenAI 兼容接口（fetch 手写，不依赖 SDK） |
| 包管理 | pnpm workspaces（monorepo） |
| CI/CD | GitHub Actions（Web / macOS / Windows / Android 自动构建发布） |

## 项目结构

```
CodeLearn/
├── web/                # React 前端（Vite + TS + TailwindCSS）
│   ├── src/
│   │   ├── ai/         # AI 服务（Provider / Quota / Payment）
│   │   ├── components/ # UI 组件（编辑器、AI、设置、布局、课程目录侧边栏）
│   │   ├── courses/    # 课程数据 re-export（指向根 /courses）
│   │   ├── hooks/      # 自定义 Hooks（auth / theme / mobile / tauri）
│   │   ├── i18n/       # 国际化（zh / en）
│   │   ├── pages/      # 页面（auth / course / review / admin / settings）
│   │   ├── runner/     # 代码执行 Runner（native / wasm / remote + Registry）
│   │   ├── services/   # 服务抽象层（interfaces / supabase 实现 / container）
│   │   └── store/      # Zustand 状态（auth / progress / review / theme）
│   ├── supabase/       # schema.sql（建表 + RLS + 触发器）
│   └── .env.example    # 前端环境变量示例
├── src-tauri/          # Tauri 2.0 桌面端（Rust 后端）
│   └── src/            # lib.rs / runtime.rs（运行时检测）/ execute.rs（本机执行）
├── courses/            # 课程内容数据（9 语言，离线优先）
├── supabase/
│   ├── functions/      # Edge Function（run-code 代理 OnlineCompiler.io）
│   └── migrations/     # 数据库迁移（安全修复 / admin / Realtime / 复习系统）
├── docs/               # 扩展文档（添加语言 / 迁移后端）
├── .github/workflows/  # CI/CD（ci.yml 检查 / release.yml 发布）
├── package.json        # monorepo 根配置（pnpm workspaces）
└── pnpm-workspace.yaml # pnpm 工作区声明
```

## 快速开始

### 环境要求

- **Node.js** >= 22
- **pnpm**：`npm install -g pnpm`（项目使用 pnpm@11）
- **Rust**（仅桌面端开发需要）：通过 <https://rustup.rs> 安装，stable 通道
- **Tauri 2.0 系统依赖**：参见 <https://tauri.app/start/prerequisites/>
- **本机运行时**（桌面端 native 执行，可选）：`python3` / `node` / `tsx`（`npm i -g tsx`）/ `go`
- **Supabase CLI**（部署 Edge Function 需要）：`npm install -g supabase`

### 克隆与安装

```bash
git clone https://github.com/tgcz2011/codelearn.git
cd codelearn

# 在仓库根目录安装依赖（会自动安装 web 工作区）
pnpm install
```

### 配置环境变量

复制示例文件并填入真实值：

```bash
cp web/.env.example web/.env
```

编辑 `web/.env`，至少填入 Supabase 配置（见下节）。完整变量说明见 [`web/.env.example`](web/.env.example)。

### Supabase 配置

CodeLearn 使用 Supabase 提供 Auth、Postgres、Storage、Realtime 能力。

1. **创建项目**：前往 <https://supabase.com> 新建一个项目。
2. **执行 Schema**：在 Supabase Dashboard → **SQL Editor** 中，按顺序粘贴并执行以下 SQL 文件：
   - [`web/supabase/schema.sql`](web/supabase/schema.sql) — 基础表结构（profiles / user_progress / ai_quota / user_api_keys）、RLS 策略、触发器
   - [`supabase/migrations/`](supabase/migrations/) 目录下的所有迁移文件 — 安全修复、自动管理员、Realtime、数据库重置、遗忘曲线复习系统
3. **确认 RLS**：schema.sql 已为所有表配置行级安全策略。无需额外操作。
4. **填入凭证**：在 Supabase Dashboard → **Project Settings → API** 中复制：
   - `Project URL` → 填入 `web/.env` 的 `VITE_SUPABASE_URL`
   - `anon public` key → 填入 `VITE_SUPABASE_ANON_KEY`
5. **第一个注册的用户自动成为管理员**：无需手动设置。第一个注册的账号会自动获得 admin 权限，可访问 `/admin` 管理面板。

> 不配置 Supabase 也能启动应用：课程内容离线可用，AI 服务在"本地模式"下不限制额度（后端不可达时静默降级）。仅用户登录、进度同步、额度计量等需后端的功能不可用。

### OnlineCompiler.io 代码执行服务（API Key 配置）

Python / Go / TypeScript / Java / C / C++ / Rust 的代码通过 OnlineCompiler.io 远程执行。API Key 存储在服务端，用户无需配置。

1. **获取 API Key**：前往 <https://www.onlinecompiler.io> 注册并获取 API Key。
2. **设置 Edge Function Secret**（在项目根目录执行）：
   ```bash
   # 安装 Supabase CLI（如未安装）
   npm install -g supabase

   # 登录并关联项目
   supabase login
   supabase link --project-ref your-project-ref

   # 设置 API Key（不会暴露给前端）
   supabase secrets set ONLINECOMPILER_API_KEY=your-api-key
   ```
3. **部署 Edge Function**：
   ```bash
   supabase functions deploy run-code
   ```
4. **验证**：登录后尝试运行任意课程的示例代码，应返回执行结果。

> 安全设计：API Key 仅存在 Supabase Edge Function 的 secret 中，前端永远接触不到。Edge Function 验证用户 JWT，仅已登录用户可调用。支持 compiler 白名单和代码长度限制。

### GitHub OAuth 登录

1. **创建 GitHub OAuth App**：前往 GitHub → Settings → Developer settings → OAuth Apps → New OAuth App。
   - Homepage URL: `http://localhost:5173`（开发）或你的生产域名
   - Authorization callback URL: `https://your-project.supabase.co/auth/v1/callback`
2. **在 Supabase 中配置**：Dashboard → Authentication → Providers → GitHub，填入 Client ID 和 Client Secret。
3. **启用**：打开 GitHub provider 开关。
4. 登录页和注册页会显示"使用 GitHub 登录/注册"按钮。

### AI 服务配置（可选）

AI 辅助功能（提示、代码解释、练习生成）使用 OpenAI 兼容协议。

- **平台共享 Key**（推荐）：在 `web/.env` 中设置 `VITE_AI_API_KEY` 和 `VITE_AI_BASE_URL`，学员共享额度。
- **用户自定义 Key**：学员在「设置」页填写自己的 Key，不消耗平台额度。
- 兼容 OpenAI / DeepSeek / Ollama 等任何遵循 OpenAI Chat Completions 协议的端点。

### 启动开发

```bash
# Web 端开发服务器（浏览器访问 http://localhost:5173）
pnpm dev

# 桌面端开发（Tauri，需 Rust 与系统依赖；自动拉起前端 dev server）
pnpm tauri dev
```

> `pnpm tauri dev` 实际执行 `tauri dev`，由 `src-tauri/tauri.conf.json` 的 `beforeDevCommand` 自动启动 `pnpm --filter web dev`。

## 构建与发布

### Web 构建

```bash
pnpm build        # 等价于 pnpm --filter web build（tsc --noEmit && vite build）
pnpm preview      # 本地预览构建产物
```

产物输出到 `web/dist/`。

### 桌面端构建

```bash
pnpm tauri build  # 产出 macOS .dmg / Windows .msi + .exe
```

产物位于 `src-tauri/target/release/bundle/`。

### 移动端构建

移动端需先初始化（仅一次），并安装对应平台 SDK（Android SDK / NDK 或 Xcode）：

```bash
# Android
pnpm tauri:android:init    # 初始化 Android 工程（仅一次）
pnpm tauri:android:dev     # 连接设备/模拟器开发
pnpm tauri:android:build   # 构建 APK

# iOS（仅 macOS 主机）
pnpm tauri:ios:init        # 初始化 iOS 工程（仅一次）
pnpm tauri:ios:dev
pnpm tauri:ios:build
```

### CI/CD 自动发布

仓库内置两条 GitHub Actions 工作流：

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml)：PR 与非 main 分支 push 时触发，运行 `pnpm lint` + `pnpm build` 检查。
- [`.github/workflows/release.yml`](.github/workflows/release.yml)：push 到 `main`、推送 `v*` tag 或手动触发时构建并发布：
  - Web 构建打包为 `codelearn-web.zip`
  - macOS 构建 `.dmg`、Windows 构建 `.msi` + `.exe`
  - Android 构建（可选，`continue-on-error`，未签名不阻断流水线）
  - 自动创建 GitHub Release 并上传全平台产物（tag 触发为正式版，main 触发为 `dev-<sha>` 预发布）

**CI 环境变量配置**（重要）：

由于 `.env` 文件在 `.gitignore` 中，CI 构建时需要通过 GitHub 仓库变量注入环境变量：

```bash
# 在 GitHub 仓库 → Settings → Secrets and variables → Actions → Variables 中添加：
gh variable set VITE_SUPABASE_URL --body "https://your-project.supabase.co"
gh variable set VITE_SUPABASE_ANON_KEY --body "your-anon-key"
gh variable set VITE_DATA_BACKEND --body "supabase"
```

> 注意：`VITE_SUPABASE_ANON_KEY` 是公开的 anon key（受 RLS 保护），不是 service_role key，可以安全地放在仓库变量中。

发布新版本：`git tag v0.2.0 && git push origin v0.2.0`，流水线会自动构建并发布。

## 部署

### Web 静态托管

`web/dist/` 是纯静态产物，可部署到任意静态托管：

- **Vercel / Netlify**：连接 GitHub 仓库，构建命令 `pnpm build`，输出目录 `web/dist`。
- **GitHub Pages**：将 `web/dist` 推送到 `gh-pages` 分支，或用 Actions 上传。
- 注意：前端通过 `import.meta.env.VITE_*` 读取环境变量，需在托管平台配置对应构建变量。

### Go Runner 远程服务

Go 代码需由远程服务执行（Go 编译器编译为 WASM 体积过大，浏览器内执行不现实）。部署见 [`go-runner/README.md`](go-runner/README.md)：

- **Fly.io**：`cd go-runner && flyctl deploy`，部署后将地址填入 `VITE_GO_RUNNER_URL`。
- **Render**：控制台导入仓库，自动读取 `render.yaml` 创建 free 层服务。
- **Docker**：`cd go-runner && docker build -t codelearn-go-runner . && docker run -p 8080:8080 --rm codelearn-go-runner`。

部署后拿到服务地址（如 `https://codelearn-go-runner.fly.dev`），填入 `web/.env` 的 `VITE_GO_RUNNER_URL`。

## 文档

- [添加新编程语言](docs/adding-a-language.md) — LanguageRunner 接口、三类基类与注册流程
- [迁移后端 / 添加新数据库实现](docs/migrating-backend.md) — Repository 抽象层与 Neon 迁移示例
- [Supabase Schema](web/supabase/schema.sql) — 数据表、RLS 策略、触发器
- [数据库迁移](supabase/migrations/) — 安全修复、自动管理员、Realtime、复习系统等迁移脚本
- [Edge Function](supabase/functions/run-code/) — 代码执行代理（OnlineCompiler.io），API Key 服务端存储
- [课程内容格式](courses/types.ts) — CourseContent / LessonContent 类型定义与新旧格式兼容

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动前端开发服务器 |
| `pnpm build` | 类型检查 + 构建生产产物 |
| `pnpm lint` | 运行 ESLint |
| `pnpm format` | 运行 Prettier 格式化 |
| `pnpm preview` | 预览构建产物 |
| `pnpm tauri dev` | 桌面端开发（Tauri） |
| `pnpm tauri build` | 桌面端构建（dmg/msi/exe） |

## License

GPL-3.0
