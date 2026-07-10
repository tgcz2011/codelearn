# Tasks

## Phase 1：基础设施与 Web 端 MVP

- [x] Task 1: 初始化仓库与项目脚手架
  - [x] SubTask 1.1: 初始化 monorepo 结构（`/web` 前端、`/src-tauri` 桌面端、`/courses` 课程内容、`/go-runner` Go 执行服务、`/.github/workflows` CI）
  - [x] SubTask 1.2: 初始化 React + Vite + TypeScript + TailwindCSS 前端项目
  - [x] SubTask 1.3: 配置 ESLint + Prettier + 路径别名
  - [x] SubTask 1.4: 接入 GitHub 仓库 `tgcz2011/codelearn`，写 `.gitignore`、`README.md`

- [x] Task 2: 服务抽象层 + Supabase 后端搭建
  - [x] SubTask 2.1: 定义服务抽象接口（`DataRepository` / `AuthService` / `StorageService` / `RealtimeService`），纯 TS 接口不依赖 SDK
  - [x] SubTask 2.2: 实现 `serviceContainer` 依赖注入容器，按 `DATA_BACKEND` 环境变量注册实现
  - [x] SubTask 2.3: 编写 Supabase schema SQL（users/profiles 扩展、courses、lessons、user_progress、ai_quota、user_api_keys 表）
  - [x] SubTask 2.4: 配置 RLS 策略（用户只能读写自己的数据；管理员可读全部）
  - [x] SubTask 2.5: 创建管理员角色判定逻辑（`is_admin` 字段或 `auth.users` metadata）
  - [x] SubTask 2.6: 实现 `SupabaseRepository` / `SupabaseAuthService` / `SupabaseStorageService` / `SupabaseRealtimeService`（实现上述接口），支持环境变量配置 URL/Key
  - [x] SubTask 2.7: 编写"如何添加新后端实现"文档（如 NeonRepository 实现指引，供未来迁移参考）

- [x] Task 3: 认证与用户管理
  - [x] SubTask 3.1: 实现注册/登录页面（邮箱+密码，预留 OAuth 入口），调用 `AuthService` 接口（不直接调 Supabase）
  - [x] SubTask 3.2: 实现路由守卫（未登录跳转登录页）
  - [x] SubTask 3.3: 实现用户 profile store（Zustand），持久化登录态，通过 `AuthService.onAuthChange` 监听
  - [x] SubTask 3.4: 实现管理员后台框架（用户列表、禁用、额度重置，调用 `DataRepository` 接口）

- [x] Task 4: 编辑器与代码执行（核心模块）
  - [x] SubTask 4.1: 定义 `LanguageRunner` 接口（`run(code): Promise<RunResult>`、`preview?`、`languageId`）及三类基类：`NativeRunner` / `WasmRunner` / `RemoteRunner`
  - [x] SubTask 4.2: 集成 Monaco Editor，封装 `CodeEditor` 组件（支持主题/语言切换）
  - [x] SubTask 4.3: 实现 `HtmlWasmRunner`（iframe srcdoc 实时预览 HTML/CSS/JS）
  - [x] SubTask 4.4: 实现 `JsWasmRunner`（iframe 内执行 JS，捕获 console 输出）
  - [x] SubTask 4.5: 实现 `TsWasmRunner`（浏览器内加载 typescript 编译器，转译后调用 JsWasmRunner）
  - [x] SubTask 4.6: 实现 `PythonWasmRunner`（动态加载 Pyodide CDN，执行并捕获 stdout/stderr，缓存实例）
  - [x] SubTask 4.7: 实现 `LanguageRunnerRegistry`，按 languageId + 运行环境（desktop/web）选择合适 runner
  - [x] SubTask 4.8: 实现 `RunPanel` 组件（显示输出/预览/错误 + 执行方式标签"本机/WASM/远程"）

- [x] Task 5: Go 代码执行后端服务
  - [x] SubTask 5.1: 用 Go 编写轻量 HTTP 服务（`POST /run` 接收代码，沙箱执行返回输出）
  - [x] SubTask 5.2: 加入超时、内存限制、输出截断
  - [x] SubTask 5.3: 部署到 Fly.io 或 Render 免费层
  - [x] SubTask 5.4: 前端实现 `GoRemoteRunner`（RemoteRunner 实现）调用该服务，失败时回退展示预写输出

- [x] Task 6: 课程内容与结构
  - [x] SubTask 6.1: 定义课程数据模型（Course → Chapter → Lesson，含讲解/示例代码/练习/预期输出）
  - [x] SubTask 6.2: 预写 HTML 入门课程（3-5 章）
  - [x] SubTask 6.3: 预写 CSS 入门课程（3-5 章）
  - [x] SubTask 6.4: 预写 JavaScript 入门到进阶课程（5-8 章）
  - [x] SubTask 6.5: 预写 TypeScript 进阶课程（3-5 章）
  - [x] SubTask 6.6: 预写 Python 入门到精通课程（6-10 章）
  - [x] SubTask 6.7: 预写 Go 入门课程（3-5 章）
  - [x] SubTask 6.8: 实现课程目录页 + 课程详情页 + 学习页（讲解+编辑器+练习三栏布局）
  - [x] SubTask 6.9: 实现进度持久化（完成章节写入 user_progress，通过 `DataRepository` 同步，不直接调 Supabase）

## Phase 2：AI 辅助与桌面端

- [x] Task 7: AI 服务模块
  - [x] SubTask 7.1: 定义 `AIProvider` 接口（`chat(messages, options)`、`generateExercise(topic, level)`）
  - [x] SubTask 7.2: 实现 `OpenAICompatibleProvider`（支持 base_url + key 配置，覆盖 OpenAI/DeepSeek/Ollama）
  - [x] SubTask 7.3: 实现 AI 提示功能（渐进式 hint prompt，不给直接答案）
  - [x] SubTask 7.4: 实现代码解释功能（选中代码→AI 解释）
  - [x] SubTask 7.5: 实现 AI 动态练习生成（基于用户进度调用 generateExercise）
  - [x] SubTask 7.6: 实现免费额度计数（通过 `DataRepository` 读写 ai_quota，按用户/日计数，不直接调 Supabase）
  - [x] SubTask 7.7: 实现自定义 API Key 设置页（加密存储，通过 `DataRepository` 读写 user_api_keys）
  - [x] SubTask 7.8: 预留 `PaymentService` 接口和充值 UI 占位（不实现支付逻辑）

- [x] Task 8: Tauri 2.0 桌面端（原生解释器/编译器检测与执行）
  - [x] SubTask 8.1: 初始化 `src-tauri`（Rust 后端 + tauri.conf.json）
  - [x] SubTask 8.2: 实现运行时检测 Rust 命令 `detect_runtimes`（扫描 PATH + 各平台常见路径，返回 `Vec<RuntimeInfo { language, version, path }>`，覆盖 python3/node/tsc/go）
  - [x] SubTask 8.3: 实现代码执行 Rust 命令 `run_native(language, code, timeout)`（`Command::new` 启动进程，捕获 stdout/stderr，超时杀进程，返回结构化结果）
  - [x] SubTask 8.4: 实现各语言 `NativeRunner`（前端 TS 侧，调用 `run_native`，实现 `LanguageRunner` 接口）：`PythonNativeRunner` / `JsNativeRunner` / `TsNativeRunner` / `GoNativeRunner`
  - [x] SubTask 8.5: 实现 `LanguageRunnerRegistry` 桌面端选择逻辑：有本机运行时用 NativeRunner，否则回退 WasmRunner（Go 回退 RemoteRunner）
  - [x] SubTask 8.6: 实现桌面端 vs Web 端的环境检测与条件渲染（`isTauri`），RunPanel 显示执行方式标签
  - [x] SubTask 8.7: 实现设置页"运行时检测"面板（展示检测结果、手动指定路径、重新检测按钮）

## Phase 3：移动端、国际化与发布

- [x] Task 9: 国际化与主题
  - [x] SubTask 9.1: 接入 react-i18next，提取所有文案到 zh/en 资源文件
  - [x] SubTask 9.2: 实现语言切换器（中/英），持久化偏好
  - [x] SubTask 9.3: 实现亮/暗主题切换（TailwindCSS dark mode + 持久化）
  - [x] SubTask 9.4: Monaco Editor 主题跟随全局主题

- [x] Task 10: 移动端（Tauri Mobile）
  - [x] SubTask 10.1: 配置 iOS/Android Tauri mobile 项目
  - [x] SubTask 10.2: 移动端编辑器触屏优化（Monaco 配置 + 字号）
  - [x] SubTask 10.3: 移动端导航适配（底部 tab 替代侧栏）

- [x] Task 11: CI/CD 与发布
  - [x] SubTask 11.1: 编写 GitHub Actions workflow（push 到 main 时触发）
  - [x] SubTask 11.2: Web 构建步骤（Vite build → 上传静态资源到 GitHub Pages 或 Release）
  - [x] SubTask 11.3: macOS 构建步骤（Tauri build → dmg，需 macOS runner）
  - [x] SubTask 11.4: Windows 构建步骤（Tauri build → msi/exe，需 Windows runner）
  - [x] SubTask 11.5: 移动端构建步骤（可选，需签名证书，本期可只构建不签名）
  - [x] SubTask 11.6: 自动创建 GitHub Release 并上传全平台产物

- [x] Task 12: 文档与收尾
  - [x] SubTask 12.1: 编写 README（项目介绍、本地开发指南、Supabase 配置、部署说明）
  - [x] SubTask 12.2: 编写"如何添加新语言"扩展文档（LanguageRunner 接口说明）
  - [x] SubTask 12.3: 编写"如何迁移后端/添加新数据库实现"文档（DataRepository/AuthService/StorageService/RealtimeService 接口说明 + Neon 迁移示例）
  - [x] SubTask 12.4: 编写环境变量示例 `.env.example`（含 `DATA_BACKEND`、Supabase URL/Key、AI key、Go runner URL 等）

# Task Dependencies

- Task 1 → 所有后续任务依赖脚手架
- Task 2（含服务抽象层接口 + Supabase 实现）→ Task 3、Task 6.9、Task 7.6、Task 7.7 依赖抽象接口与 Supabase 实现
- Task 4 → Task 6 依赖编辑器（课程学习页要用）
- Task 5（Go runner）可与 Task 4 并行
- Task 7 依赖 Task 2（额度/Key 存储走 DataRepository）和 Task 4（AI 生成练习要能在编辑器跑）
- Task 8 依赖 Task 1、Task 4（桌面端复用 Web 前端）
- Task 9 可与 Task 7/8 并行
- Task 10 依赖 Task 8（Tauri 配置基础）
- Task 11 依赖全部功能任务完成
- Task 12 依赖 Task 11

# 可并行任务

- Task 2（服务抽象层+Supabase）与 Task 4（编辑器）可并行——Task 2.1/2.2（接口定义）先行，2.6（Supabase 实现）可与 Task 4 并行
- Task 5（Go 服务）独立，可全程并行
- Task 6.2-6.7（各语言课程内容）可并行编写
- Task 9（i18n/主题）可与 Phase 2 并行
