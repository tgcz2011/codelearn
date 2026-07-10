# CodeLearn 跨平台编程学习平台 Spec

## Why

好的编程教程/平台大多收费，初学者门槛高。本项目目标是构建一个**完全免费（自托管）、跨平台、带 AI 辅助、模块化**的编程学习平台，覆盖 Web / Mac / Windows / Android / iOS，让任何人都能零成本系统学习 HTML、CSS、JS、TS、Python、Go。

## 核心技术选型决策（含利弊）

### 决策 1：跨平台框架 → Tauri 2.0（Rust）

| 方案 | 优点 | 缺点 |
|------|------|------|
| **Tauri 2.0（推荐）** | 一套 Rust 后端 + 一套 Web 前端覆盖桌面+移动端；体积比 Electron 小 90%（~10MB vs ~150MB）；用系统原生 WebView 不捆绑 Chromium；Rust 后端可做本地 IDE 检测、文件系统操作；官方支持自动更新 | 移动端（iOS/Android）生态仍在成熟期，部分原生 API 需自己写插件；社区比 Electron 小 |
| Electron + Capacitor | 桌面生态成熟；前端用 React/Vue 即可 | 体积大；移动端要 Capacitor 另接一套，实际是两套壳；内存占用高 |
| Flutter | 真正单代码库全平台；移动端体验最佳 | Web 端嵌入 Monaco 编辑器困难（要用 HtmlElementView 包一层）；桌面 IDE 检测需写平台通道；与 Web WASM 生态融合差 |
| 各平台原生（Swift/C#/Kotlin）+ Web | 各平台体验最佳 | 4+ 套代码库，功能/风格难统一，维护成本极高，违背需求 1 |

**结论：Tauri 2.0。** 满足"功能风格统一 + Rust 编写后端 + 桌面端可做原生解释器/编译器检测"的全部要求，且体积小、不捆绑 Chromium。

### 决策 2：数据库 → Supabase（推荐）

数据来源：Supabase 官方定价页 + billing FAQ、Neon 官方定价页（2026-07 重新核验）。

**Supabase Free 完整免费层明细：**
- 数据库：500 MB / 项目，共享 CPU + 500 MB RAM，**1 周不活跃后暂停**（恢复需手动点 dashboard），2 个活跃项目，无自动备份，无 PITR，无 branching，5 GB egress
- Auth：**用户总数无限**，**5 万 MAU**，含匿名登录、Social OAuth、Custom SMTP、Basic MFA、Auth Hooks（Custom JWT / 自定义邮件短信）、Third-Party MAU 5 万；无 SAML SSO、无泄露密码防护、无单会话限制
- Storage：**1 GB**，5 GB cached egress，**单文件最大 50 MB**，Basic CDN，无图像变换
- Realtime：Postgres Changes 订阅、**200 并发峰值连接**、**200 万条消息/月**、单消息最大 256 KB
- Edge Functions（Deno）：**50 万次调用/月**
- Dashboard：团队成员无限，访问角色 Owner/Admin/Developer
- 日志保留：1 天

**Neon Free 完整免费层明细：**
- 数据库：**100 个项目**，**0.5 GB 存储/项目**，**100 CU-hrs/月/项目**（compute 单位小时），最大 2 CU（8 GB RAM），支持 Autoscaling / Branching / Read Replicas
- 暂停策略：**计算自动 scale-to-zero（非硬暂停），下次连接自动唤醒**；100 CU-hrs 月额度用尽才停
- 时间旅行恢复：6 小时
- Neon Auth：**6 万 MAU**（较新，功能不及 Supabase Auth 完整）
- 无内置 Storage / Realtime / Edge Functions，需另接 S3/R2、第三方 Realtime、单独 Functions 平台

**对比表：**

| 维度 | Supabase Free | Neon Free |
|------|---------------|-----------|
| 数据库存储 | 500 MB / 项目 | 0.5 GB / 项目（持平） |
| 项目数 | 2 个活跃 | **100 个**（Neon 胜） |
| 计算额度 | 不限（共享 500MB RAM） | 100 CU-hrs/月（扣完停） |
| 暂停策略 | **1 周不活跃硬暂停**（需手动恢复） | scale-to-zero 自动唤醒（Neon 体验更好） |
| Auth MAU | 5 万 | 6 万（Neon 略多） |
| Auth 功能完整度 | **完整**（OAuth/匿名/SMTP/MFA/Hooks） | 较新，功能较少 |
| 文件存储 | **1 GB 内置** | 无（需另接） |
| Realtime | **内置（200 并发 / 200 万消息）** | 无（需另接） |
| Edge Functions | **50 万次/月内置（Deno）** | 无（需另接） |
| 自动备份/恢复 | 无 | 6 小时时间旅行（Neon 胜） |
| Branching | 无 | **有**（Neon 胜） |

**结论：Supabase。** 理由：
1. 本项目需要 Auth（多用户+管理员）、文件存储（用户代码/课程资源）、Realtime（进度/通知）、Edge Functions（轻量后端逻辑）—— Supabase 一站式全包，**Neon 只是纯 Postgres，需另接 3-4 个服务**，免费层集成成本高。
2. Supabase 免费层对本项目初期足够：5 万 MAU、500MB 数据库、1GB 存储、50 万 Edge Function 调用、200 万 Realtime 消息。
3. **Supabase 风险**：1 周不活跃会硬暂停。缓解方案：Tauri 桌面端定时心跳保活；或用免费 cron 服务（cron-job.org / GitHub Actions schedule）每小时 ping 一次；后续可迁到自托管 Postgres（Supabase 开源可自部署）。
4. **Neon 优势**（供后续参考）：若后期只需纯数据库 + 更好分支能力，可考虑迁 Neon。

### 决策 3：Web 端代码执行（WASM）

| 语言 | 执行方案 | 难度 | 说明 |
|------|----------|------|------|
| HTML/CSS/JS | 浏览器原生 iframe 沙箱 | 易 | 无需 WASM，`<iframe srcdoc>` 即可实时预览 |
| TypeScript | 浏览器内 TS 编译器（WASM） | 中 | 官方 `typescript` 包可在浏览器跑，编译为 JS 后同上执行 |
| Python | **Pyodide（WASM）** | 中 | CPython 编译为 WASM，成熟项目，~10MB 首次加载，支持 pip 安装纯 Python 包 |
| Go | **后端执行（Supabase Edge Functions 无法跑 Go 编译器，需独立轻量服务）** | 高 | Go 编译器编译为 WASM 体积过大（>50MB）且实验性。**推荐**：部署一个轻量 Go 执行微服务（可在免费 PaaS 如 Fly.io/Render 跑），或用 Wasm Go Playground 的公开 API。**告知用户：纯浏览器内跑 Go 目前不现实，需后端辅助** |

**Rust 编写 WASM 的可行性**：用户提到"推荐用 Rust 编写"。经查，用 Rust 写 WASM 运行时来跑 Python/Go 并不现实（Pyodide 已是最佳方案）。Rust 的角色是 **Tauri 后端**（本地解释器/编译器检测、文件系统、进程管理、代码执行），而非重写语言运行时。这样既用上 Rust，又不重复造轮子。

### 决策 4：桌面端"原生解释器/编译器"策略（用户澄清后修正）

经用户澄清，"原生 IDE"实际指**解释器/编译器（interpreter/compiler）**：桌面端优先调用用户本机已安装的语言运行时来**解析执行代码**，自动查找其安装位置；找不到则回退到 WASM。**所有输出/预览仍在项目内界面（RunPanel）显示**，不打开外部程序。

| 方案 | 优点 | 缺点 |
|------|------|------|
| **原生运行时优先 + WASM 回退（推荐）** | 桌面端用本机真实工具链，执行速度快、兼容性好（如本机 Python 能 import 任意已装包）；Web/移动端用 WASM；统一 `LanguageRunner` 接口屏蔽差异 | 需为每种语言维护检测规则；本机环境差异可能影响可复现性 |
| 全部用 WASM | 各端行为完全一致 | 桌面端性能差；Pyodide 不支持需 C 扩展的包；Go 纯 WASM 不现实 |
| 全部用后端执行 | 各端一致 | 依赖后端服务，违背"免费/自托管"目标；延迟高；后端压力大 |

**运行时检测策略（Rust 后端）：**
- 扫描 `PATH` + 各平台常见安装路径，返回 `Vec<RuntimeInfo { language, version, path }>`
- Python：`python3` / `python`；Mac 额外查 `/usr/bin/python3`、`/opt/homebrew/bin/python3`、pyenv；Windows 查 `%LOCALAPPDATA%\Programs\Python\`、`%USERPROFILE%\AppData\Local\Microsoft\WindowsApps\python3.exe`
- Node/JS：`node`；nvm/volta 路径
- TypeScript：`tsc`（或用 `npx tsc`）
- Go：`go run`
- HTML/CSS：无需运行时，浏览器渲染

**执行流程（统一 `LanguageRunner` 接口）：**
1. 桌面端：`NativeRunner`（Rust `Command::new` 启动进程，捕获 stdout/stderr，超时杀进程）→ 输出到项目内 RunPanel
2. 本机未安装该运行时：自动回退 `WasmRunner`（Pyodide / TS Compiler / iframe）
3. Web/移动端：始终用 `WasmRunner`
4. Go：桌面端若有 `go` 用本机；否则调后端 Go 执行服务；再否则展示预写输出

### 决策 5：课程策略 → 混合模式（推荐）

| 方案 | 优点 | 缺点 |
|------|------|------|
| 全部预写 | 质量可控；离线可用；不依赖 AI | 无法个性化；维护工作量大；内容易过时 |
| 全部 AI 动态生成 | 个性化强；内容新鲜 | 依赖 AI 额度/网络；质量不稳定；首次学习路径不清晰 |
| **混合（推荐）** | 预写结构化主干课程（入门→进阶→精通，保证质量和路径清晰）；AI 动态生成练习题、个性化讲解、扩展阅读 | 需设计"主干+动态"衔接；AI 失败时需回退预写内容 |

### 决策 6：AI 集成

- **统一接口**：支持 OpenAI 兼容 API（覆盖 OpenAI、Claude via proxy、DeepSeek、本地 Ollama 等）
- **两种模式**：
  1. 自定义 API Key：用户填自己的 key，不限量（存在 Supabase，加密存储）
  2. 免费额度：平台提供共享 key，每日/每月限额（管理员可配置），用完提示充值或填自己的 key
- **充值接口**：预留 `PaymentService` 接口和 UI 占位，**本期不实现**，仅留 hook

### 决策 7：移动端

Tauri 2.0 Mobile（iOS/Android）共享同一 Web 前端 + Rust 后端。移动端无法访问本机运行时，直接用内置 Monaco 编辑器（触屏优化）+ WASM 执行。

### 决策 8：数据库可迁移性 → Repository 抽象层（为未来迁移留余地）

虽选 Supabase，但需为未来迁移（Neon / 自托管 Postgres / 其他）留好余地，避免业务代码与 Supabase SDK 强耦合。

| 方案 | 优点 | 缺点 |
|------|------|------|
| **Repository 抽象层（推荐）** | 业务逻辑只依赖 `DataRepository` 接口，不直接调 Supabase SDK；未来加 `NeonRepository` 即可迁移；Auth 也抽象成 `AuthService` 接口 | 多一层封装，初期工作量略增 |
| 直接用 Supabase SDK | 开发快 | 迁移时需改全部数据访问代码；与 Supabase 强耦合 |
| 用 ORM（Prisma/Drizzle）统一 | 跨数据库能力天然好 | Prisma 在浏览器/Tauri 环境支持有限；Edge Functions 用不了；增加体积 |

**架构设计：**
- `DataRepository` 接口：定义 `users / courses / lessons / user_progress / ai_quota / user_api_keys` 等实体的 CRUD 方法，纯 TS 接口，不依赖任何 SDK
- `SupabaseRepository`：实现 `DataRepository`，内部用 `@supabase/supabase-js`（含 RLS、Realtime 订阅）
- `AuthService` 接口：定义 `signUp / signIn / signOut / getSession / onAuthChange`，`SupabaseAuthService` 实现
- `StorageService` 接口：定义文件上传/下载，`SupabaseStorageService` 实现（未来可换 S3/R2）
- 业务层（store / hooks / 组件）只依赖接口，通过 `serviceContainer` 注入具体实现
- **迁移路径**：未来换 Neon 只需新增 `NeonRepository`（用 postgres driver 或 Drizzle）+ `NeonAuthService`（或接 Auth0/Clerk）+ `R2StorageService`，注册到 serviceContainer，业务代码零改动

**Realtime 的特殊处理**：Supabase Realtime 是专有能力，抽象成 `RealtimeService` 接口（`subscribe(channel, callback)`），`SupabaseRealtimeService` 实现；迁移到 Neon 时可用 Postgres LISTEN/NOTIFY 或第三方（Pusher/Ably）实现，业务层订阅逻辑不变。

**配置切换**：通过环境变量 `DATA_BACKEND=supabase|neon|...` 决定注入哪个实现，前端启动时初始化对应 serviceContainer。

## What Changes

- 新建跨平台编程学习平台 CodeLearn，仓库 `https://github.com/tgcz2011/codelearn`
- Web 端：React + Vite + Monaco + Pyodide + TS 编译器，部署到静态托管
- 桌面端：Tauri 2.0（Mac/Windows），复用 Web 前端 + Rust 后端做本机解释器/编译器检测与执行、文件系统
- 移动端：Tauri 2.0 Mobile（iOS/Android），复用 Web 前端，用 WASM 执行
- 后端：Supabase（Auth + Postgres + Storage + Edge Functions + Realtime），**通过 Repository 抽象层隔离，业务代码不直接依赖 Supabase SDK，为未来迁移 Neon/自托管留余地**
- 课程：预写 HTML/CSS/JS/TS/Python/Go 主干课程 + AI 动态练习
- AI：OpenAI 兼容接口，支持自定义 Key + 免费额度
- CI/CD：GitHub Actions 自动构建全平台 + 发布 Release
- 语言扩展接口：`LanguageRunner` 插件化（含 `NativeRunner` / `WasmRunner` / `RemoteRunner` 三种实现），新增语言只需实现接口
- 服务抽象接口：`DataRepository` / `AuthService` / `StorageService` / `RealtimeService`，通过 `serviceContainer` 注入，`DATA_BACKEND` 环境变量切换实现

## Impact

- 新仓库，无历史代码影响
- 依赖外部服务：Supabase（需用户自行注册免费账号）、AI API（可选）
- Go 执行需额外轻量后端服务（免费 PaaS 部署）

## ADDED Requirements

### Requirement: 跨平台统一体验
系统 SHALL 在 Web、macOS、Windows、iOS、Android 上提供功能与视觉风格一致的应用，共享同一套 Web 前端代码。

#### Scenario: 用户在不同平台使用
- **GIVEN** 用户在任意受支持平台打开应用
- **THEN** 界面布局、课程内容、编辑器功能一致
- **AND** 用户账户和进度跨平台同步

### Requirement: Web 端 WASM 代码执行
系统 SHALL 在 Web/移动端通过 WASM 或浏览器原生 API 执行代码，输出在项目内 RunPanel 显示。

#### Scenario: 浏览器内运行 Python
- **WHEN** 用户在 Web 端编写并运行 Python 代码
- **THEN** 系统通过 Pyodide（WASM）执行并在 RunPanel 显示输出
- **AND** 首次加载 Pyodide 后缓存，后续运行无重复下载

#### Scenario: Go 代码执行
- **WHEN** 用户运行 Go 代码
- **THEN** 系统调用后端执行服务返回结果并在 RunPanel 显示
- **AND** 若后端不可用，提示用户并展示预写预期输出

### Requirement: 桌面端原生解释器/编译器检测与执行
系统 SHALL 在 macOS/Windows 桌面端自动检测本机已安装的语言解释器/编译器（python3/node/tsc/go），优先用本机运行时执行代码，所有输出在项目内 RunPanel 显示；本机未安装时回退到 WASM 执行。

#### Scenario: 桌面端检测到本机 Python
- **WHEN** 用户在桌面端运行 Python 代码且本机已装 python3
- **THEN** Rust 后端调用本机 python3 执行，捕获 stdout/stderr
- **AND** 输出在项目内 RunPanel 显示（不打开外部程序）
- **AND** 显示执行方式标签"本机 Python 3.x"

#### Scenario: 桌面端未检测到本机运行时
- **WHEN** 桌面端未发现该语言的本地运行时
- **THEN** 自动回退到 WASM 执行（Pyodide / TS Compiler / iframe）
- **AND** RunPanel 提示"未检测到本机 XX，已使用内置 WASM 运行"

#### Scenario: 运行时检测
- **WHEN** 桌面端启动或用户在设置页点击"重新检测"
- **THEN** Rust 后端扫描 PATH + 常见路径，返回各语言运行时列表（含版本号、路径）
- **AND** 设置页展示检测结果，用户可手动指定运行时路径

### Requirement: 多用户管理与管理员
系统 SHALL 提供用户注册/登录，区分普通用户与管理员角色，管理员可管理用户和课程。

#### Scenario: 管理员管理用户
- **GIVEN** 管理员已登录
- **WHEN** 访问管理后台
- **THEN** 可查看/禁用用户、重置额度、管理课程内容

#### Scenario: 普通用户学习
- **GIVEN** 普通用户已登录
- **WHEN** 进入课程
- **THEN** 进度自动保存到 Supabase，跨平台同步

### Requirement: AI 辅助功能
系统 SHALL 提供 AI 提示、代码解释、成品展示、个性化练习生成功能，支持自定义 API Key 和免费额度。

#### Scenario: 用户请求提示
- **WHEN** 用户在练习中点击"给我个提示"
- **THEN** AI 返回不直接给答案的渐进式提示
- **AND** 扣除对应免费额度（若用共享 key）

#### Scenario: 自定义 API Key
- **WHEN** 用户在设置中填入自己的 OpenAI 兼容 API Key
- **THEN** 后续 AI 调用使用用户自己的 key，不受免费额度限制

### Requirement: 课程体系（混合模式）
系统 SHALL 提供预写结构化主干课程（入门→进阶→精通），并支持 AI 动态生成个性化练习。

#### Scenario: 学习主干课程
- **WHEN** 用户进入某语言课程
- **THEN** 展示预写的章节列表，每章含讲解+示例+练习

#### Scenario: AI 生成个性化练习
- **WHEN** 用户完成某章节并请求更多练习
- **THEN** AI 根据用户掌握情况生成针对性练习题

### Requirement: 模块化与语言扩展接口
系统 SHALL 通过 `LanguageRunner` 接口抽象代码执行，新增语言只需实现该接口；执行后端分三类：`NativeRunner`（桌面端本机运行时）、`WasmRunner`（浏览器 WASM）、`RemoteRunner`（后端服务，用于 Go）。

#### Scenario: 添加新语言
- **GIVEN** 开发者要添加 Rust 语言支持
- **WHEN** 实现 `LanguageRunner` 接口（run/preview 方法 + 至少一种 Runner 实现）
- **THEN** 新语言自动出现在语言选择器和课程中，无需改动核心代码

### Requirement: 数据库与服务可迁移性
系统 SHALL 通过 `DataRepository` / `AuthService` / `StorageService` / `RealtimeService` 接口抽象后端服务，业务层只依赖接口不依赖具体 SDK，通过 `serviceContainer` 注入实现，支持 `DATA_BACKEND` 环境变量切换。

#### Scenario: 当前使用 Supabase
- **WHEN** 应用启动且 `DATA_BACKEND=supabase`
- **THEN** serviceContainer 注入 `SupabaseRepository` / `SupabaseAuthService` / `SupabaseStorageService` / `SupabaseRealtimeService`
- **AND** 业务层通过接口调用，无 Supabase SDK 直接引用

#### Scenario: 未来迁移到 Neon
- **GIVEN** 新增 `NeonRepository` + `NeonAuthService` + `R2StorageService` + `AblyRealtimeService` 实现
- **WHEN** 设置 `DATA_BACKEND=neon`
- **THEN** serviceContainer 注入新实现，业务代码零改动即可切换后端

### Requirement: 国际化与主题
系统 SHALL 支持中文/英文切换、亮色/暗色主题切换。

### Requirement: CI/CD 自动构建发布
系统 SHALL 在每次推送到 GitHub 主分支时通过 GitHub Actions 构建全平台产物并发布 Release。

#### Scenario: 推送代码后自动发布
- **WHEN** 代码推送到 `main` 分支（或打 tag）
- **THEN** GitHub Actions 构建 Web 静态资源、macOS dmg、Windows msi/exe、移动端包
- **AND** 自动发布到 GitHub Releases

## 首期支持语言

| 语言 | 执行方式 | 状态 |
|------|----------|------------|
| HTML | 浏览器 iframe | 首期 |
| CSS | 浏览器 iframe | 首期 |
| JavaScript | 浏览器 iframe | 首期 |
| TypeScript | 浏览器内 TS 编译器 → JS | 首期 |
| Python | Pyodide（WASM） | 首期 |
| Go | 后端执行服务 | 首期（后端辅助） |

## 技术栈总览

| 层 | 技术 |
|----|------|
| 前端 | React 18 + TypeScript + Vite + TailwindCSS + Monaco Editor |
| 桌面/移动壳 | Tauri 2.0（Rust 后端） |
| 代码执行 | `NativeRunner`（桌面本机运行时）/ `WasmRunner`（Pyodide/TS Compiler/iframe）/ `RemoteRunner`（Go 后端服务） |
| Go 执行 | 轻量 Go 微服务（Fly.io/Render 免费层） |
| 后端 BaaS | Supabase（Auth + Postgres + Storage + Edge Functions + Realtime） |
| 服务抽象层 | `DataRepository` / `AuthService` / `StorageService` / `RealtimeService` 接口 + `serviceContainer` 依赖注入，`DATA_BACKEND` 切换实现 |
| AI | OpenAI 兼容 API（fetch 调用） |
| CI/CD | GitHub Actions |
| i18n | react-i18next |
| 状态管理 | Zustand |
| 路由 | React Router |
