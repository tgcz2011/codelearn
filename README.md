# CodeLearn

> 免费、跨平台、AI 辅助的编程学习平台。

CodeLearn 是一个开源的编程学习平台，支持 **Web / macOS / Windows / Android / iOS** 全平台。内置 Monaco 代码编辑器与多种代码执行方式（桌面端本机运行时 / 浏览器 WASM / 远程服务），并提供 AI 辅助提示、代码解释与动态练习生成能力。后端基于 Supabase（Auth + Postgres + Storage + Realtime），通过 Repository 抽象层封装，可平滑迁移到 Neon 等其他实现。

- GitHub 仓库：<https://github.com/tgcz2011/codelearn>

## 功能特性

- **6 门语言课程**：HTML / CSS / JavaScript / TypeScript / Python / Go，离线优先的课程内容（无需后端即可浏览）。
- **全平台覆盖**：Web 端浏览器即用；桌面端（macOS / Windows）基于 Tauri 2.0；移动端（Android / iOS）基于 Tauri Mobile。
- **三种代码执行模式**：
  - `native` 桌面端本机运行时（Tauri 调用本机 python3 / node / tsx / go）
  - `wasm` 浏览器内 WASM / iframe 执行（Pyodide、浏览器内 TS 编译器、HTML 预览）
  - `remote` 远程后端服务执行（Go 代码由 go-runner 服务编译运行）
- **AI 辅助**：渐进式提示、代码解释、动态练习生成；平台共享 Key（每日免费额度）+ 用户自定义 Key（OpenAI / DeepSeek / Ollama 等 OpenAI 兼容协议）。
- **多用户管理**：邮箱注册登录、学习进度云端同步、管理员用户管理（启用/禁用、额度重置）。
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
│   │   ├── components/ # UI 组件（编辑器、AI、设置、布局）
│   │   ├── courses/    # 课程数据 re-export（指向根 /courses）
│   │   ├── hooks/      # 自定义 Hooks（auth / theme / mobile / tauri）
│   │   ├── i18n/       # 国际化（zh / en）
│   │   ├── pages/      # 页面（auth / course / admin / settings）
│   │   ├── runner/     # 代码执行 Runner（native / wasm / remote + Registry）
│   │   ├── services/   # 服务抽象层（interfaces / supabase 实现 / container）
│   │   └── store/      # Zustand 状态（auth / progress / theme）
│   ├── supabase/       # schema.sql（建表 + RLS + 触发器）
│   └── .env.example    # 前端环境变量示例
├── src-tauri/          # Tauri 2.0 桌面端（Rust 后端）
│   └── src/            # lib.rs / runtime.rs（运行时检测）/ execute.rs（本机执行）
├── courses/            # 课程内容数据（6 语言，离线优先）
├── go-runner/          # Go 代码执行远程服务（HTTP，Fly.io / Render 部署）
├── docs/               # 扩展文档（添加语言 / 迁移后端）
├── .github/workflows/  # CI/CD（ci.yml 检查 / release.yml 发布）
├── package.json        # monorepo 根配置（pnpm workspaces）
└── pnpm-workspace.yaml # pnpm 工作区声明
```

## 快速开始

### 环境要求

- **Node.js** >= 18（推荐 20）
- **pnpm**：`npm install -g pnpm`（项目使用 pnpm@11）
- **Rust**（仅桌面端开发需要）：通过 <https://rustup.rs> 安装，stable 通道
- **Tauri 2.0 系统依赖**：参见 <https://tauri.app/start/prerequisites/>
- **本机运行时**（桌面端 native 执行，可选）：`python3` / `node` / `tsx`（`npm i -g tsx`）/ `go`
- **Go 1.22+**（仅开发 go-runner 服务需要）

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
2. **执行 Schema**：在 Supabase Dashboard → **SQL Editor** 中，粘贴并执行 [`web/supabase/schema.sql`](web/supabase/schema.sql)。该脚本幂等，会创建 `profiles / courses / chapters / lessons / user_progress / ai_quota / user_api_keys` 七张表，启用 RLS，并创建 `is_admin()` / `handle_new_user()` / `increment_ai_quota()` / `reset_ai_quota()` 等函数与触发器。
3. **确认 RLS**：schema.sql 已为所有表配置行级安全策略（自己只能读写自己的数据，管理员可读全部）。无需额外操作。
4. **填入凭证**：在 Supabase Dashboard → **Project Settings → API** 中复制：
   - `Project URL` → 填入 `web/.env` 的 `VITE_SUPABASE_URL`
   - `anon public` key → 填入 `VITE_SUPABASE_ANON_KEY`
5. **（可选）设置管理员**：注册首个账号后，在 SQL Editor 中将其设为管理员：
   ```sql
   update public.profiles set is_admin = true where email = 'your@email.com';
   ```

> 不配置 Supabase 也能启动应用：课程内容离线可用，AI 服务在"本地模式"下不限制额度（后端不可达时静默降级）。仅用户登录、进度同步、额度计量等需后端的功能不可用。

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
- [Go Runner 服务](go-runner/README.md) — 远程 Go 执行服务的 API、安全限制与部署
- [Supabase Schema](web/supabase/schema.sql) — 数据表、RLS 策略、触发器

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

MIT
