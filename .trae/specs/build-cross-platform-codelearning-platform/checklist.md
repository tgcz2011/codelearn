# Checklist

## 基础设施
- [ ] 仓库已初始化并推送到 `https://github.com/tgcz2011/codelearn`
- [ ] monorepo 目录结构清晰（web / src-tauri / courses / go-runner / .github）
- [ ] 前端项目可 `pnpm dev` 正常启动
- [ ] ESLint + Prettier 配置完成

## Supabase 后端
- [ ] schema SQL 已编写并可在 Supabase 执行
- [ ] RLS 策略已配置（普通用户只读自己数据，管理员全读）
- [ ] 管理员角色判定逻辑可用
- [ ] Supabase 客户端封装支持环境变量配置
- [ ] 免费层限额已记录（5万 MAU / 500MB DB / 1GB Storage / 50万 Edge Function 调用 / 200万 Realtime 消息）
- [ ] 1 周不活跃暂停的保活方案已实施（心跳 / cron ping）

## 服务抽象层（可迁移性）
- [ ] `DataRepository` 接口已定义（纯 TS，不依赖 SDK）
- [ ] `AuthService` 接口已定义（signUp/signIn/signOut/getSession/onAuthChange）
- [ ] `StorageService` 接口已定义（上传/下载）
- [ ] `RealtimeService` 接口已定义（subscribe/unsubscribe）
- [ ] `serviceContainer` 依赖注入容器实现，按 `DATA_BACKEND` 注册实现
- [ ] `SupabaseRepository` / `SupabaseAuthService` / `SupabaseStorageService` / `SupabaseRealtimeService` 四个实现完成
- [ ] 业务层（store/hooks/组件）只依赖接口，无 Supabase SDK 直接引用
- [ ] "如何添加新后端实现"文档已编写（含 Neon 迁移示例）
- [ ] 环境变量 `DATA_BACKEND` 切换可用

## 认证与用户管理
- [ ] 注册/登录页面可用
- [ ] 路由守卫生效（未登录不可访问学习页）
- [ ] 登录态持久化
- [ ] 管理员后台可查看/禁用用户、重置额度

## 编辑器与代码执行
- [ ] `LanguageRunner` 接口已定义，含 `NativeRunner` / `WasmRunner` / `RemoteRunner` 三类基类
- [ ] Monaco Editor 集成完成，支持语言/主题切换
- [ ] HTML/CSS/JS 可在 iframe 内执行并预览（WasmRunner）
- [ ] TypeScript 可在浏览器内编译并执行（WasmRunner）
- [ ] Python 可通过 Pyodide 执行，首次加载后缓存（WasmRunner）
- [ ] `LanguageRunnerRegistry` 可按 languageId + 运行环境选择 runner
- [ ] RunPanel 正确显示输出/预览/错误，并标注执行方式（本机/WASM/远程）

## Go 执行服务
- [ ] Go HTTP 服务可执行代码并返回输出
- [ ] 有超时和内存限制
- [ ] 已部署到免费 PaaS
- [ ] 前端 GoRemoteRunner 调用成功，失败时有回退

## 课程内容
- [ ] 课程数据模型已定义
- [ ] HTML/CSS/JS/TS/Python/Go 各有 3+ 章预写课程
- [ ] 课程目录页/详情页/学习页可用
- [ ] 学习页三栏布局（讲解+编辑器+练习）正常
- [ ] 进度可持久化并跨平台同步

## AI 辅助
- [ ] `AIProvider` 接口已定义
- [ ] OpenAI 兼容 Provider 可调用
- [ ] AI 提示功能（渐进式，不给直接答案）
- [ ] 代码解释功能
- [ ] AI 动态练习生成
- [ ] 免费额度计数生效
- [ ] 自定义 API Key 设置可用并加密存储
- [ ] PaymentService 接口和充值 UI 占位已预留（不实现支付）

## Tauri 桌面端
- [ ] src-tauri 项目可 `tauri dev` 启动
- [ ] 运行时检测 Rust 命令 `detect_runtimes` 可返回本机 python3/node/tsc/go 列表（含版本/路径）
- [ ] 代码执行 Rust 命令 `run_native` 可启动进程并捕获 stdout/stderr，超时杀进程
- [ ] 各语言 `NativeRunner` 可调用本机运行时执行代码，输出到项目内 RunPanel（不打开外部程序）
- [ ] 本机未安装运行时时自动回退 WasmRunner / GoRemoteRunner
- [ ] RunPanel 显示执行方式标签（本机 Python 3.x / WASM / 远程）
- [ ] 设置页"运行时检测"面板可用（展示结果、手动指定路径、重新检测）
- [ ] 桌面端 vs Web 端环境检测与条件渲染正确（`isTauri`）

## 国际化与主题
- [ ] 中/英文切换可用，文案全部提取
- [ ] 语言偏好持久化
- [ ] 亮/暗主题切换可用
- [ ] Monaco 主题跟随全局主题

## 移动端
- [ ] iOS/Android Tauri mobile 项目可构建
- [ ] 编辑器触屏优化
- [ ] 移动端导航适配

## CI/CD
- [ ] GitHub Actions workflow 在 push 到 main 时触发
- [ ] Web 静态资源构建成功
- [ ] macOS dmg 构建成功
- [ ] Windows msi/exe 构建成功
- [ ] 自动创建 GitHub Release 并上传产物
- [ ] 每次代码改动都推送并触发构建

## 模块化与扩展性
- [ ] `LanguageRunner` 接口文档清晰（含 NativeRunner / WasmRunner / RemoteRunner 三类实现说明）
- [ ] 新增语言只需实现接口，无需改核心代码
- [ ] `AIProvider` 接口可扩展其他 AI 服务
- [ ] 课程内容与代码分离，可独立更新
- [ ] 后端服务接口（DataRepository/Auth/Storage/Realtime）可扩展其他实现，未来迁移不改业务代码
