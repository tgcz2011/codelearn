# 如何添加新编程语言

本文档说明如何在 CodeLearn 中添加一门新的编程语言支持。CodeLearn 的代码执行能力通过 `LanguageRunner` 接口抽象，新增语言只需实现对应 Runner 并在 Registry 注册，业务层零改动。

## 架构概览

代码执行模块位于 `web/src/runner/`，核心组成：

```
web/src/runner/
├── types.ts            # 共享类型：ExecutionMode / RunResult / RunOptions / RunnerOutput
├── LanguageRunner.ts   # 语言执行器接口（上层唯一依赖）
├── NativeRunner.ts     # 桌面本机运行时基类（abstract）
├── WasmRunner.ts       # 浏览器 WASM / iframe 执行基类（abstract）
├── RemoteRunner.ts     # 后端服务执行基类（abstract）
├── Registry.ts         # 注册表：按 languageId 注册 + 按运行环境选择 Runner
├── index.ts            # 模块公共出口
├── native/             # NativeRunner 子类（python/javascript/typescript/go）
├── wasm/               # WasmRunner 子类（html/js/ts/python）
└── remote/             # RemoteRunner 子类（go）
```

执行方式分三类（`ExecutionMode`）：

| Mode | 含义 | 适用环境 | 示例 |
| --- | --- | --- | --- |
| `native` | 桌面本机运行时，通过 Tauri invoke 调用本机解释器/编译器 | 仅 desktop（Tauri） | python3 / node / tsx / go run |
| `wasm` | 浏览器内 WASM / iframe 执行 | web + desktop | Pyodide / iframe srcdoc / 浏览器内 TS 编译器 |
| `remote` | 后端服务执行，前端 POST 代码到 HTTP 服务 | web + desktop | go-runner |

环境选择规则（见 `Registry.getRunner`）：
- **web**：`wasm ?? remote`（优先 WASM，无则回退远程）
- **desktop**：`native ?? wasm ?? remote`（优先本机运行时，未检测到则回退）

## LanguageRunner 接口

所有代码执行能力都通过该接口暴露，上层（课程学习页 / RunPanel）只依赖此接口，不感知具体实现。

```ts
// web/src/runner/LanguageRunner.ts
import type { RunOptions, RunResult } from './types'

export interface LanguageRunner {
  readonly languageId: string
  readonly displayName: string
  run(code: string, options?: RunOptions): Promise<RunResult>
  /** 可选：返回可预览内容（如 HTML 字符串），由调用方决定何时渲染 */
  preview?(code: string): RunResult
}
```

相关类型（`web/src/runner/types.ts`）：

```ts
export type ExecutionMode = 'native' | 'wasm' | 'remote'

export interface RunResult {
  stdout: string
  stderr: string
  output?: string        // HTML 预览等内容
  error?: string         // 执行层错误描述
  exitCode?: number
  mode: ExecutionMode    // 由基类 run() 统一填充
  modeLabel?: string     // 如 "本机 Python 3.11" / "WASM" / "远程"
  durationMs?: number
}

export interface RunOptions {
  timeoutMs?: number
  stdin?: string
}

// 子类返回类型（不含 mode，由基类补全）
export type RunnerOutput = Omit<RunResult, 'mode'>
```

## 三类基类

三个基类都实现 `LanguageRunner`，把 `mode` 字段的填充收口到基类 `run()`，子类只需实现一个 `runNative` / `runWasm` / `runRemote` 方法。

### NativeRunner（桌面本机运行时）

```ts
// web/src/runner/NativeRunner.ts
export abstract class NativeRunner implements LanguageRunner {
  abstract readonly languageId: string
  abstract readonly displayName: string
  protected abstract runNative(code: string, options?: RunOptions): Promise<RunnerOutput>
  async run(code: string, options?: RunOptions): Promise<RunResult> {
    const result = await this.runNative(code, options)
    return { ...result, mode: 'native' }
  }
}
```

子类的 `runNative` 通过 Tauri `invoke('run_native', { language, code, timeoutMs })` 调用 Rust 侧命令执行本机代码。Rust 侧（`src-tauri/src/execute.rs`）会按 `language` 字段构建命令（如 `python3 main.py` / `node main.js` / `tsx main.ts` / `go run main.go`）。

> Web 端不会实例化 NativeRunner。仅在 `isTauri()` 为 true 时由 `Registry.initNativeRunners` 注册。

### WasmRunner（浏览器 WASM / iframe）

```ts
// web/src/runner/WasmRunner.ts
export abstract class WasmRunner implements LanguageRunner {
  abstract readonly languageId: string
  abstract readonly displayName: string
  protected abstract runWasm(code: string, options?: RunOptions): Promise<RunnerOutput>
  async run(code: string, options?: RunOptions): Promise<RunResult> {
    const result = await this.runWasm(code, options)
    return { ...result, mode: 'wasm', modeLabel: result.modeLabel ?? 'WASM' }
  }
}
```

子类在 `runWasm` 中实现具体执行逻辑（如 iframe `srcdoc`、Pyodide）。默认 `modeLabel` 为 `"WASM"`，子类可在返回结果中覆写为更具体标签（如 `"浏览器预览"`）。

### RemoteRunner（后端服务执行）

```ts
// web/src/runner/RemoteRunner.ts
export abstract class RemoteRunner implements LanguageRunner {
  abstract readonly languageId: string
  abstract readonly displayName: string
  protected abstract runRemote(code: string, options?: RunOptions): Promise<RunnerOutput>
  async run(code: string, options?: RunOptions): Promise<RunResult> {
    const result = await this.runRemote(code, options)
    return { ...result, mode: 'remote', modeLabel: result.modeLabel ?? '远程' }
  }
}
```

子类在 `runRemote` 中调用远程 HTTP 服务。服务不可用时返回降级结果（`modeLabel: '服务不可用'`），便于 RunPanel 提示用户。参考 `GoRemoteRunner`。

## 添加新语言的步骤

以添加一门新语言为例，需要改动 4 个位置：Runner 实现、Registry 注册、课程内容、i18n 文案。

### 第 1 步：创建 Runner 实现

根据该语言最适合的执行方式，选择继承 `WasmRunner`、`RemoteRunner` 或 `NativeRunner`（也可同时实现多种）。

- **浏览器可执行**（有 WASM 工具链或纯解释型）→ 继承 `WasmRunner`
- **仅后端可执行**（编译型、WASM 体积过大）→ 继承 `RemoteRunner`，并实现一个后端服务（参考 `go-runner/`）
- **桌面端本机执行**（桌面端优先用本机工具链）→ 继承 `NativeRunner`，并在 Rust 侧 `build_command` 增加分支

在 `web/src/runner/<mode>/` 下创建实现文件。例如 `web/src/runner/wasm/RustWasmRunner.ts`（伪代码见下文示例）。

### 第 2 步：在 Registry 中注册

编辑 `web/src/runner/Registry.ts`，导入新 Runner 并调用 `register`：

```ts
import { rustWasmRunner } from './wasm/RustWasmRunner'

register({ languageId: 'rust', displayName: 'Rust', wasm: rustWasmRunner })
```

`LanguageEntry` 支持 `wasm` / `remote` / `native` 三个可选字段，按需填入。注册后 `getRunner('rust', env)` 与 `listLanguages(env)` 会自动包含新语言。

### 第 3 步：编写课程内容

在 `courses/` 下新建课程文件（如 `courses/rust.ts`），导出一个 `CourseContent` 对象。课程数据模型定义在 `courses/types.ts`：

```ts
export interface CourseContent {
  id: string
  slug: string                    // URL slug，如 "rust"
  title: string
  description: string
  language: string                // 对应 runner 的 languageId
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  chapters: ChapterContent[]
}
```

每个 `LessonContent` 包含 `content_md`（Markdown 讲解）、`example_code`（可运行示例）、`exercise`（含 `prompt` / `starter_code` / `expected_output`）。`expected_output` 用于自动判定练习是否完成。

然后在 `courses/index.ts` 中导入并加入 `courses` 数组：

```ts
import { rustCourse } from './rust'
export const courses: CourseContent[] = [
  // ...已有课程
  rustCourse,
]
```

前端通过 `web/src/courses/index.ts` re-export 使用，无需后端即可离线展示。

### 第 4 步：添加 i18n 文案

在 `web/src/i18n/locales/zh.json` 与 `en.json` 中补充语言名称等文案（如课程列表展示、运行时标签）。若仅用 `displayName` 字段展示，可跳过此步；但涉及 UI 文案时需补全。

## 完整示例：添加 Rust 语言

假设 Rust 通过浏览器 WASM（如 wasm-pack 产物）执行。以下是关键文件伪代码。

### 1) Runner 实现 `web/src/runner/wasm/RustWasmRunner.ts`

```ts
import { WasmRunner } from '../WasmRunner'
import type { RunOptions, RunnerOutput } from '../types'

export class RustWasmRunner extends WasmRunner {
  readonly languageId = 'rust'
  readonly displayName = 'Rust'

  protected async runWasm(code: string, options?: RunOptions): Promise<RunnerOutput> {
    try {
      // 1. 加载预编译的 Rust WASM 运行时（单例缓存，参考 PythonWasmRunner）
      const runtime = await loadRustRuntimeOnce()
      // 2. 将用户代码编译/执行，捕获 stdout/stderr
      const { stdout, stderr, exitCode } = await runtime.run(code)
      return { stdout, stderr, exitCode, modeLabel: 'WASM' }
    } catch (e) {
      return {
        stdout: '',
        stderr: '',
        exitCode: -1,
        error: `Rust WASM 执行失败：${e instanceof Error ? e.message : String(e)}`,
        modeLabel: 'WASM',
      }
    }
  }
}

export const rustWasmRunner = new RustWasmRunner()
```

### 2) Registry 注册（`web/src/runner/Registry.ts`）

```ts
import { rustWasmRunner } from './wasm/RustWasmRunner'

register({ languageId: 'rust', displayName: 'Rust', wasm: rustWasmRunner })
```

### 3) 课程内容 `courses/rust.ts`

```ts
import type { CourseContent } from './types'

export const rustCourse: CourseContent = {
  id: 'course-rust',
  slug: 'rust',
  title: 'Rust 入门',
  description: '学习 Rust 基础：变量、所有权、控制流。',
  language: 'rust',
  difficulty: 'beginner',
  chapters: [
    {
      id: 'rust-ch1',
      title: 'Hello World',
      order: 0,
      lessons: [
        {
          id: 'rust-ch1-l1',
          title: '第一个 Rust 程序',
          order: 0,
          content_md: 'Rust 用 `fn main()` 作为入口，`println!` 宏打印输出。',
          example_code: 'fn main() {\n    println!("Hello, Rust!");\n}',
          exercise: {
            prompt: '用 println! 输出 "我爱 Rust"。',
            starter_code: 'fn main() {\n    println!(___);\n}',
            expected_output: '我爱 Rust',
          },
        },
      ],
    },
  ],
}
```

在 `courses/index.ts` 中：

```ts
import { rustCourse } from './rust'
export const courses: CourseContent[] = [
  // ...
  rustCourse,
]
```

### 4)（可选）桌面端本机执行支持

若希望桌面端用本机 `rustc` 执行 Rust，需额外：

- 在 `src-tauri/src/runtime.rs` 的 `scan_runtimes()` 增加 `detect_one("rust", &["rustc"])`
- 在 `src-tauri/src/execute.rs` 的 `build_command()` 增加 `"rust" =>` 分支，执行 `rustc main.rs -o main && ./main`（或 `cargo script`）
- 在 `web/src/runner/native/NativeRunners.ts` 增加 `RustNativeRunner` 子类，并在 `createNativeRunners` 的 `switch` 增加 `case 'rust'`

## 注意事项

- **languageId 全局唯一**：Runner 的 `languageId` 必须与课程 `CourseContent.language` 一致，且与 Rust 侧 `build_command` 的 match 分支（native 执行时）一致。
- **基类已填充 mode**：子类返回的 `RunnerOutput` 不要设置 `mode` 字段，由基类 `run()` 统一补全（`NativeRunner` 补 `'native'`，`WasmRunner` 补 `'wasm'`，`RemoteRunner` 补 `'remote'`）。
- **modeLabel 覆写**：`WasmRunner` / `RemoteRunner` 基类会保留子类返回的 `modeLabel`，未设置时分别默认 `"WASM"` / `"远程"`。
- **降级策略**：远程/WASM 执行失败时应返回带 `error` 与 `modeLabel: '服务不可用'` 的降级 `RunnerOutput`，而非抛异常，便于 UI 友好提示（参考 `GoRemoteRunner`）。
- **WASM 资源加载**：WASM 运行时（如 Pyodide）体积大，务必用单例缓存（模块级 `let promise`），首次加载期间 RunPanel 的 `isRunning` 保持 true 作为 loading 态。
- **超时与输出截断**：`RunOptions.timeoutMs` 控制运行超时；Rust 侧与 go-runner 均将 stdout/stderr 截断到 1 MiB，新 RemoteRunner 后端服务应保持一致。
- **桌面端 NativeRunner 动态 import**：`@tauri-apps/api` 在纯 web 构建下不可用，NativeRunner 内部用 `await import('@tauri-apps/api/core')` 动态加载，避免 web 构建报错。新 NativeRunner 子类应沿用此模式。
