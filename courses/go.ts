import type { CourseContent } from './types'

/**
 * Go 入门课程（7 章 28 节）
 *
 * Go 代码通过 OnlineCompiler.io 以 go-1.26 编译器执行。
 * fmt.Println / fmt.Print / fmt.Printf 输出被捕获为 stdout，expected_output 与输出文本对应（不含末尾换行）。
 * 每段代码必须是完整可编译的 Go 程序（含 package main 和 func main）。
 */
export const goCourse: CourseContent = {
  id: 'course-go',
  slug: 'go',
  title: 'Go 入门',
  description: '从 Hello World 到 goroutine 并发，系统学习 Go 语言核心语法、复合类型、接口与并发编程，写出简洁高效的后端代码。',
  language: 'go',
  difficulty: 'beginner',
  chapters: [
    // ================================================================
    // 第 1 章：Go 入门
    // ================================================================
    {
      id: 'go-ch1',
      title: 'Go 入门',
      order: 0,
      lessons: [
        {
          id: 'go-ch1-l1',
          title: 'Hello World 与基本结构',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '每个 Go 程序都从 `package main` 开始，`func main()` 是程序的入口函数。' +
            '`import "fmt"` 导入标准库的格式化输入输出包，`fmt.Println()` 打印一行文本并自动换行。' +
            'Go 用花括号 `{}` 划分代码块，语句以分号结尾——但 Go 的编译器会在每行末尾自动插入分号，' +
            '所以你通常不需要手写分号。注意左花括号 `{` 必须与函数声明在同一行，这是 Go 的强制规范。' +
            '\n\n' +
            'Go 是静态类型、编译型语言。代码先编译成机器码再执行，运行速度接近 C 语言，' +
            '同时具备垃圾回收和内置并发支持。Go 的设计目标是"简单、高效、可靠"——' +
            '语法简洁（关键字只有 25 个），编译速度快，适合构建大规模后端服务和云原生应用。' +
            '与 Python/JavaScript 的动态类型不同，Go 在编译期确定所有类型，错误早发现。' +
            '\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            'package main                    // 包声明，main 表示可执行程序\n' +
            '\n' +
            'import (                        // 导入声明\n' +
            '    "fmt"\n' +
            '    "strings"\n' +
            ')\n' +
            '\n' +
            'func main() {                   // 入口函数，无参数无返回值\n' +
            '    fmt.Println("Hello")        // 语句\n' +
            '}\n' +
            '```\n\n' +
            '| fmt 函数 | 说明 | 示例 |\n' +
            '|----------|------|------|\n' +
            '| `Print(args...)` | 输出不换行 | `fmt.Print("a", "b")` |\n' +
            '| `Println(args...)` | 输出后换行，参数间加空格 | `fmt.Println("a", "b")` |\n' +
            '| `Printf(format, args...)` | 格式化输出 | `fmt.Printf("%d", 1)` |\n' +
            '| `Sprintf(format, args...)` | 返回格式化字符串 | `s := fmt.Sprintf("%d", 1)` |\n' +
            '| `Fprintf(w, format, args...)` | 写入 Writer | `fmt.Fprintf(os.Stdout, "...")` |\n' +
            '\n' +
            '| 格式化动词 | 含义 | 示例 |\n' +
            '|------------|------|------|\n' +
            '| `%d` | 整数 | `fmt.Printf("%d", 42)` |\n' +
            '| `%s` | 字符串 | `fmt.Printf("%s", "go")` |\n' +
            '| `%f` | 浮点数 | `fmt.Printf("%f", 3.14)` |\n' +
            '| `%.2f` | 保留两位小数 | `fmt.Printf("%.2f", 3.14159)` |\n' +
            '| `%t` | 布尔 | `fmt.Printf("%t", true)` |\n' +
            '| `%v` | 通用格式（任何类型） | `fmt.Printf("%v", obj)` |\n' +
            '| `%+v` | 通用 + 字段名 | `fmt.Printf("%+v", struct)` |\n' +
            '| `%#v` | Go 语法表示 | `fmt.Printf("%#v", x)` |\n' +
            '| `%T` | 类型 | `fmt.Printf("%T", x)` |\n' +
            '| `%x` / `%o` / `%b` | 十六/八/二进制 | `fmt.Printf("%x", 255)` |\n' +
            '| `%c` | 字符（rune） | `fmt.Printf("%c", 65)` |\n' +
            '| `%q` | 带引号字符串 | `fmt.Printf("%q", "go")` |\n' +
            '| `%%` | 字面 % | `fmt.Printf("100%%")` |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：Hello World 与格式化输出\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    fmt.Println("Hello, Go!")\n' +
            '\n' +
            '    name := "Go"\n' +
            '    year := 2009\n' +
            '    fmt.Printf("%s 诞生于 %d 年\\n", name, year)\n' +
            '    fmt.Printf("类型: %T, 布尔: %t\\n", year, true)\n' +
            '    fmt.Printf("浮点: %.2f\\n", 3.14159)\n' +
            '}\n' +
            '```\n\n' +
            '示例 2：Print/Println/Printf 区别\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    fmt.Print("不换行")\n' +
            '    fmt.Print("继续")\n' +
            '    fmt.Println("换行了")\n' +
            '    fmt.Println("新的一行")\n' +
            '\n' +
            '    // Println 参数间自动加空格\n' +
            '    fmt.Println("a", "b", "c")   // a b c\n' +
            '}\n' +
            '```\n\n' +
            '示例 3：Sprintf 拼接字符串\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    // Sprintf 返回格式化字符串，不打印\n' +
            '    msg := fmt.Sprintf("用户 %s（ID:%d）登录", "Alice", 42)\n' +
            '    fmt.Println(msg)\n' +
            '\n' +
            '    // 构建日志行\n' +
            '    for i := 1; i <= 3; i++ {\n' +
            '        log := fmt.Sprintf("[INFO] 第 %d 次重试", i)\n' +
            '        fmt.Println(log)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **左花括号必须在同一行**：`func main()\\n{` 会编译错误——Go 自动分号插入会在 `)` 后加分号。' +
            '这是 Go 最著名的"风格强制"。\n' +
            '2. **未使用的导入和变量报错**：`import "fmt"` 但不用 fmt 会编译失败；' +
            '声明变量不使用也报错——这保持代码整洁，但开发时需注意。\n' +
            '3. **Println 参数间加空格**：`fmt.Println("a", "b")` 输出 "a b"，' +
            '而 `fmt.Print("a", "b")` 输出 "ab"——注意区别。\n' +
            '4. **Printf 需手动 \\n**：`Printf` 不自动换行，需在格式串末尾加 `\\n`；' +
            '忘加会导致输出粘连。\n' +
            '5. **格式动词与类型匹配**：`%d` 配字符串会输出 `%!d(string=go)`，' +
            '不确定类型时用 `%v` 通用格式。\n' +
            '6. **字符串只能双引号/反引号**：双引号支持转义，反引号（原始字符串）不支持转义；' +
            '单引号用于字符（rune）而非字符串。\n' +
            '7. **go run vs go build**：`go run` 编译到临时目录并运行（适合开发）；' +
            '`go build` 生成可执行文件（适合部署）。\n\n' +
            '## 实际应用\n\n' +
            '- **CLI 工具**：fmt.Print/Println 是终端交互的基础，几乎所有命令行工具都用。\n' +
            '- **日志**：简单日志用 fmt.Printf；生产用 log/slog 结构化日志。\n' +
            '- **调试输出**：`fmt.Printf("%+v\\n", struct)` 打印结构体字段便于排查。\n' +
            '- **报表生成**：Sprintf 拼接格式化文本，生成 CSV/报告行。\n' +
            '- **Web 响应**：`fmt.Fprintf(w, "...")` 写入 HTTP ResponseWriter。\n\n' +
            '## 扩展知识\n\n' +
            '- **go mod**：`go mod init 模块名` 初始化模块，生成 go.mod 管理依赖；' +
            '`go get` 添加第三方包。\n' +
            '- **go fmt / goimports**：自动格式化代码和导入——Go 强制统一风格，' +
            '团队无需争论格式。\n' +
            '- **go vet**：静态检查，发现 Printf 格式串与参数不匹配等可疑代码。\n' +
            '- **log 包**：标准库 log 比 fmt 多了时间戳和换行；log/slog 是 1.21+ 的结构化日志。\n' +
            '- **gofmt 的设计哲学**：Go 认为"一种格式"比"可配置格式"更好——' +
            '省去风格争论，所有 Go 代码看起来一致。\n' +
            '- **在线编译器限制**：本平台用 OnlineCompiler.io 执行 Go，' +
            '支持单文件 main package；真实项目用 go mod 多包组织。',
          examples: [
            {
              title: 'Hello World',
              code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
              explanation:
                '最简单的 Go 程序。`package main` 声明可执行程序包，`func main()` 是入口函数。' +
                '`fmt.Println` 打印一行文本并自动换行。字符串用双引号包裹。',
            },
            {
              title: '格式化输出',
              code: `package main

import "fmt"

func main() {
    name := "Go"
    year := 2009
    fmt.Printf("%s 诞生于 %d 年\\n", name, year)
    fmt.Printf("类型: %T, 布尔: %t\\n", year, true)
    fmt.Printf("浮点: %.2f\\n", 3.14159)
}`,
              explanation:
                '`Printf` 用格式化动词填充字符串：`%s` 字符串、`%d` 整数、`%T` 打印类型、' +
                '`%t` 布尔、`%.2f` 保留两位小数。`\\n` 是换行符。输出三行。',
            },
            {
              title: 'Print、Println、Printf 的区别',
              code: `package main

import "fmt"

func main() {
    fmt.Print("不换行")
    fmt.Print("继续")
    fmt.Println("换行了")
    fmt.Println("新的一行")
}`,
              explanation:
                '`Print` 输出后不换行，`Println` 输出后自动换行且参数间加空格。' +
                '第一行输出"不换行继续换行了"，第二行输出"新的一行"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 fmt.Println 输出 "我爱 Go"。',
              starter_code: `package main

import "fmt"

func main() {
    fmt.Println(___)
}`,
              expected_output: '我爱 Go',
              hints: [
                'fmt.Println 的参数是一个字符串字面量',
                '字符串用双引号包裹',
                '答案: "我爱 Go"',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明变量 name 赋值为 "Go"，用 fmt.Printf 输出 "你好，Go"（用 %s 占位符）。',
              starter_code: `package main

import "fmt"

func main() {
    name := "Go"
    fmt.Printf("你好，%s\\n", ___)
}`,
              expected_output: '你好，Go',
              hints: [
                '%s 会被后面的参数替换',
                '把变量 name 作为 Printf 的参数',
                '答案: name',
              ],
            },
          ],
          realWorldScenario:
            '开发命令行工具（CLI）或 Web 服务时，第一个功能通常是输出欢迎信息或日志。fmt.Println 是 Go 最基础的输出方式，几乎所有终端交互、日志打印都依赖 fmt 包。理解格式化输出对于生成报表、调试信息、记录日志至关重要。',
        },
        {
          id: 'go-ch1-l2',
          title: '包与导入',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '包（package）是 Go 语言组织代码的基本单元，类似于 Python 的模块、Java 的包、Node 的模块。' +
            '每个 Go 源文件的第一行（除了注释）必须是 `package` 声明，指明它属于哪个包。' +
            'Go 通过包来管理命名空间、控制可见性、复用代码，是构建大型项目的基础。\n\n' +
            '`package main` 是一个特殊声明，表示这是一个**可执行程序**的入口包，必须包含一个 `main` 函数。' +
            '其他所有包都是**库包**，可以被 main 包或其他库包导入使用，但不能直接运行。' +
            '一个可执行程序有且仅有一个 main 包，编译后会生成可执行文件。\n\n' +
            '`import` 语句用于导入其他包。Go 严格区分"声明"和"使用"——**导入但未使用的包会导致编译错误**，' +
            '这是 Go 强制代码整洁、避免无用依赖的设计哲学。这与 Python、Java 等语言允许未使用 import 不同，' +
            '初学者常因此报错，但长期来看能保持代码库干净。\n\n' +
            'Go 的**可见性规则**极其简单却非常强大：**标识符首字母大写 = 导出（公开），首字母小写 = 未导出（私有）**。' +
            '没有 public/private/protected 关键字，全凭首字母大小写决定。例如 `fmt.Println` 的 `P` 大写所以可外部调用，' +
            '`fmt` 内部的私有函数外部无法访问。这种设计让代码读起来一目了然，无需查找修饰符。\n\n' +
            '一个目录下的所有 `.go` 文件必须属于同一个包（除 `_test.go` 测试文件用 `package xxx_test`）。' +
            '包名通常与目录名一致，但可以不同。包导入时用的是**导入路径**（如 `github.com/user/project/pkg`），' +
            '调用时用的是**包名**（如 `pkg.Func()`），二者不必相同。\n\n' +
            '## 语法说明\n\n' +
            '**package 声明语法**：\n\n' +
            '```go\n' +
            '// 单文件 package 声明\n' +
            'package main        // 可执行程序入口包\n' +
            'package utils       // 库包，名为 utils\n' +
            'package utils_test  // 黑盒测试包（仅用于 _test.go）\n' +
            '```\n\n' +
            '**import 语法**：\n\n' +
            '```go\n' +
            '// 1. 单行导入\n' +
            'import "fmt"\n\n' +
            '// 2. 批量导入（推荐，gofmt 会自动转成这种）\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "strings"\n' +
            '    "os"\n' +
            ')\n\n' +
            '// 3. 别名导入（解决包名冲突）\n' +
            'import (\n' +
            '    f "fmt"               // 别名为 f，用 f.Println 调用\n' +
            '    str "strings"         // 别名为 str\n' +
            ')\n\n' +
            '// 4. 点导入（直接用导出名，不推荐，易污染命名空间）\n' +
            'import . "fmt"           // 可直接写 Println("hi") 而非 fmt.Println\n\n' +
            '// 5. 下划线导入（仅执行包的 init() 函数，不调用其导出内容）\n' +
            'import _ "github.com/lib/pq"   // 注册数据库驱动\n' +
            '```\n\n' +
            '| 导入形式 | 语法 | 用途 | 推荐度 |\n' +
            '|----------|------|------|--------|\n' +
            '| 单行导入 | `import "fmt"` | 仅导入 1 个包 | ⭐⭐ |\n' +
            '| 批量导入 | `import ( ... )` | 导入多个包（推荐） | ⭐⭐⭐⭐⭐ |\n' +
            '| 别名导入 | `import f "fmt"` | 包名冲突或简化 | ⭐⭐⭐ |\n' +
            '| 点导入 | `import . "fmt"` | 省略包名前缀 | ⭐（易出 bug） |\n' +
            '| 下划线导入 | `import _ "pkg"` | 触发 init() 注册副作用 | ⭐⭐⭐⭐ |\n\n' +
            '**常用标准库速查表**：\n\n' +
            '| 标准库 | 用途 | 常用导出 |\n' +
            '|--------|------|----------|\n' +
            '| `fmt` | 格式化 I/O | Println, Printf, Sprintf, Scanf |\n' +
            '| `strings` | 字符串操作 | ToUpper, ToLower, Contains, Split, Join, Replace |\n' +
            '| `strconv` | 字符串与基本类型转换 | Atoi, Itoa, ParseFloat, FormatInt |\n' +
            '| `math` | 数学函数 | Sqrt, Pow, Pi, Abs, Floor, Ceil |\n' +
            '| `os` | 操作系统交互 | Args, Getenv, Open, Exit, Stdout |\n' +
            '| `time` | 时间处理 | Now, Sleep, Time, Duration, Format |\n' +
            '| `io` | I/O 基础接口 | Reader, Writer, Copy, ReadFull |\n' +
            '| `bufio` | 缓冲 I/O | NewScanner, NewReader, Writer |\n' +
            '| `errors` | 错误处理 | New, Is, As, Unwrap |\n' +
            '| `log` | 日志 | Println, Fatal, Panic |\n' +
            '| `sort` | 掇序 | Ints, Strings, Slice, Search |\n' +
            '| `encoding/json` | JSON 编解码 | Marshal, Unmarshal, NewEncoder |\n' +
            '| `net/http` | HTTP 服务/客户端 | Get, Post, Handle, ListenAndServe |\n' +
            '| `context` | 上下文传递/取消 | WithCancel, WithTimeout, Background |\n\n' +
            '**模块管理命令**（go mod）：\n\n' +
            '```bash\n' +
            'go mod init github.com/user/project   # 初始化模块，生成 go.mod\n' +
            'go get github.com/xxx/yyy@latest      # 下载第三方包并添加依赖\n' +
            'go get github.com/xxx/yyy@v1.2.3      # 指定版本\n' +
            'go mod tidy                           # 清理未使用依赖、补全缺失依赖\n' +
            'go mod download                       # 仅下载依赖到本地缓存\n' +
            'go list -m all                        # 列出所有依赖\n' +
            'go mod vendor                         # 将依赖复制到 vendor 目录\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：批量导入并使用多个标准库**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "strings"\n' +
            '    "strconv"\n' +
            '    "math"\n' +
            ')\n\n' +
            'func main() {\n' +
            '    // strings 包：字符串处理\n' +
            '    s := strings.ToUpper("hello")\n' +
            '    fmt.Println("大写:", s)  // HELLO\n\n' +
            '    // strconv 包：字符串与数字互转\n' +
            '    n, err := strconv.Atoi("42")  // 字符串转 int\n' +
            '    if err != nil {\n' +
            '        fmt.Println("转换失败:", err)\n' +
            '        return\n' +
            '    }\n' +
            '    fmt.Println("数字:", n, "平方:", n*n)\n\n' +
            '    // math 包：数学计算\n' +
            '    fmt.Printf("根号2 = %.4f\\n", math.Sqrt2)\n' +
            '    fmt.Printf("Pi   = %.4f\\n", math.Pi)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：别名导入解决包名冲突**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "math/rand"   // 标准库的 rand\n' +
            '    crand "crypto/rand"  // 加密安全 rand，别名 crand\n' +
            ')\n\n' +
            'func main() {\n' +
            '    // math/rand 用于普通随机数（不安全，快）\n' +
            '    fmt.Println("伪随机数:", rand.Intn(100))\n\n' +
            '    // crypto/rand 用于密码学（安全，慢）\n' +
            '    b := make([]byte, 8)\n' +
            '    _, _ = crand.Read(b)\n' +
            '    fmt.Printf("安全随机字节: %x\\n", b)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：下划线导入触发 init() 注册**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "database/sql"\n' +
            '    "fmt"\n' +
            '    _ "github.com/lib/pq"   // 仅执行 init()，注册 postgres 驱动\n' +
            ')\n\n' +
            'func main() {\n' +
            '    // 这里用 "postgres" 驱动名，但代码里不直接引用 lib/pq 包\n' +
            '    db, err := sql.Open("postgres", "host=localhost dbname=test")\n' +
            '    if err != nil {\n' +
            '        fmt.Println("连接失败:", err)\n' +
            '        return\n' +
            '    }\n' +
            '    fmt.Println("数据库驱动已注册:", db.Driver().Open)\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **导入未使用的包会编译失败**：Go 编译器强制要求所有 import 必须被使用，这是为了避免无用依赖堆积。' +
            '如果只是临时想保留导入，可用 `import _ "pkg"` 改成下划线导入，或干脆删掉。\n\n' +
            '2. **循环导入（import cycle）是 Go 的禁忌**：如果 A 导入 B、B 又导入 A，编译会失败且难以绕开。' +
            '解决方法：抽取公共代码到第三个包、用接口解耦、或将共用类型放到独立的子包。这是 Go 项目架构设计的核心约束。\n\n' +
            '3. **包名应简短、小写、单数**：标准库都是 `fmt`、`strings`、`http` 这样的简短小写名。' +
            '不要用 `StringUtils`、`MyPackage` 这种 Java 风格。包名应能从导入路径推断出来，例如 `github.com/x/stringsutil` 应叫 `stringsutil`。\n\n' +
            '4. **可见性规则要牢记**：首字母大写 = 公开，小写 = 私有。**包内所有文件共享私有标识符**，' +
            '不是文件级私有。初学者常误以为同包不同文件之间需要大写才能访问，其实不需要。\n\n' +
            '5. **包级变量初始化顺序**：先执行所有导入包的 `init()` 函数（按导入顺序），再执行本包的包级变量初始化，最后执行本包的 `init()` 函数，最后才执行 `main()`。' +
            '`init()` 函数每个文件可以有多个，按声明顺序执行。\n\n' +
            '6. **不要用点导入（`import . "fmt"`）**：虽然能省略包名前缀，但会污染当前包命名空间，' +
            '易与本地标识符冲突，且降低代码可读性。仅在测试中为了简化 mock 才偶尔使用。\n\n' +
            '7. **go.mod 中的模块路径决定导入路径**：`go mod init github.com/user/proj` 之后，' +
            '该模块内所有包的导入路径都以 `github.com/user/proj` 开头。修改模块路径需同时改所有 import，' +
            '可用 `gofmt -r` 或 IDE 重构工具批量替换。\n\n' +
            '8. **vendor 目录优先级高于模块缓存**：如果项目根有 `vendor/` 目录，`go build` 会优先用 vendor 中的依赖。' +
            '`go mod vendor` 会重新生成 vendor。CI 中常用 vendor 保证构建可复现。\n\n' +
            '## 实际应用\n\n' +
            '在真实项目中，包是代码组织的基本单位。一个 Web 服务通常按职责拆包：\n\n' +
            '```\n' +
            'project/\n' +
            '├── go.mod\n' +
            '├── main.go              # package main，入口\n' +
            '├── internal/            # internal 目录限制访问范围\n' +
            '│   ├── handler/         # HTTP 路由处理\n' +
            '│   ├── service/         # 业务逻辑\n' +
            '│   ├── repository/      # 数据访问\n' +
            '│   └── model/           # 数据结构定义\n' +
            '├── pkg/                 # 可被外部复用的公共代码\n' +
            '│   └── logger/\n' +
            '└── api/                 # 对外 API 定义（protobuf 等）\n' +
            '```\n\n' +
            '`internal/` 是 Go 编译器特殊处理的目录，**只能被其父模块内的包导入**，外部模块无法引用，' +
            '是封装私有代码的官方推荐方式。`pkg/` 是社区约定俗成的"可复用包"目录（非强制）。\n\n' +
            '数据库驱动、配置解析库、日志库等几乎都用下划线导入触发自注册：\n' +
            '```go\n' +
            'import (\n' +
            '    _ "github.com/go-sql-driver/mysql"   // 注册 mysql 驱动\n' +
            '    _ "github.com/jackc/pgx/v5/stdlib"   // 注册 pgx 驱动\n' +
            ')\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**模块版本与语义化版本**：Go 模块遵循 SemVer，格式 `vMAJOR.MINOR.PATCH`。' +
            'v2 及以上版本的导入路径必须带版本后缀，例如 `github.com/user/lib/v2`，否则无法引用。' +
            '这是 Go 处理破坏性变更的官方机制——新旧版本可以共存。\n\n' +
            '**go.sum 与模块校验**：`go.sum` 记录所有依赖的哈希值，用于验证下载内容未被篡改。' +
            'CI 中应提交 `go.mod` 和 `go.sum`，但不要手动编辑。`go mod verify` 可校验缓存完整性。\n\n' +
            '**GOPROXY 与私有模块**：默认 `GOPROXY=https://proxy.golang.org,direct`。' +
            '国内常设 `GOPROXY=https://goproxy.cn,direct` 加速。私有模块可在 `GOPRIVATE` 环境变量中配置，' +
            '如 `GOPRIVATE=git.company.com,*` 跳过代理与校验。\n\n' +
            '**包初始化顺序深入**：\n' +
            '1. 所有导入包按导入顺序初始化（深度优先）\n' +
            '2. 包级变量按声明顺序初始化（依赖在前）\n' +
            '3. 文件内多个 `init()` 按出现顺序执行\n' +
            '4. 多文件包的 `init()` 执行顺序由文件名字典序决定（不保证，不要依赖）\n\n' +
            '**Go 1.21+ 的工具链管理**：`go.mod` 中的 `toolchain` 指令可锁定 Go 版本，' +
            '`GOTOOLCHAIN=auto` 时会自动下载对应版本。CI 中应显式指定 Go 版本避免意外升级。',
          examples: [
            {
              title: '导入多个包',
              code: `package main

import (
    "fmt"
    "strings"
)

func main() {
    s := strings.ToUpper("hello")
    fmt.Println(s)
}`,
              explanation:
                '用圆括号批量导入多个包。`strings.ToUpper` 将字符串转为大写。' +
                '输出：HELLO。',
            },
            {
              title: '使用 math 包',
              code: `package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Println(math.Sqrt(16))
    fmt.Println(math.Pi)
}`,
              explanation:
                '`math.Sqrt` 计算平方根（16 的平方根是 4），`math.Pi` 是圆周率常量。' +
                '注意 math 包的函数需要 float64 参数。输出：4 和 3.141592653589793。',
            },
            {
              title: '给包起别名',
              code: `package main

import (
    f "fmt"
    s "strings"
)

func main() {
    f.Println(s.Repeat("Go", 3))
}`,
              explanation:
                '`import f "fmt"` 给 fmt 包起别名为 f，之后用 `f.Println` 调用。' +
                '`strings.Repeat("Go", 3)` 重复字符串 3 次。输出：GoGoGo。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '导入 strings 包，用 strings.Repeat("Go", 3) 输出重复 3 次的字符串。',
              starter_code: `package main

import (
    "fmt"
    "strings"
)

func main() {
    fmt.Println(strings.Repeat("Go", ___))
}`,
              expected_output: 'GoGoGo',
              hints: [
                'strings.Repeat 第二个参数是重复次数',
                '重复 3 次',
                '答案: 3',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 strings.ToLower 把 "HELLO" 转成小写并输出。',
              starter_code: `package main

import (
    "fmt"
    "strings"
)

func main() {
    s := strings.ToLower("HELLO")
    fmt.Println(___)
}`,
              expected_output: 'hello',
              hints: [
                'ToLower 已经把结果存到变量 s',
                '打印变量 s',
                '答案: s',
              ],
            },
          ],
          realWorldScenario:
            '在真实项目中，包是代码组织的基本单位。一个 Web 服务可能拆分为 handler 包（路由处理）、model 包（数据模型）、service 包（业务逻辑）。理解导入和可见性规则，才能正确地跨包调用函数、避免循环依赖。strings 包在处理用户输入、清洗数据时几乎每天都会用到。',
        },
        {
          id: 'go-ch1-l3',
          title: '变量与常量',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '变量是程序存储数据的"盒子"，常量是"封死的盒子"——一旦赋值运行时不可修改。' +
            'Go 作为静态类型语言，每个变量都有确定的类型，编译器在编译期就知道它占多少字节、能做什么操作。' +
            '这与 Python 的动态类型形成鲜明对比：Python 变量是"标签"，可以随时贴到不同类型的对象上；' +
            'Go 变量是"槽位"，类型固定，只能装对应类型的数据。\n\n' +
            'Go 提供两种变量声明方式：**`var` 声明**（完整、显式）和**短变量声明 `:=`**（简洁、自动推断）。' +
            '短变量声明只能在函数内部使用，是日常编码最常用的形式；`var` 用于包级变量、需要显式指定类型、' +
            '或需要零值初始化的场景。这种"双轨制"既保证了灵活性，又让代码风格在不同场景下自然分化。\n\n' +
            '**零值机制**是 Go 的重要设计：未显式初始化的变量会被自动赋予该类型的零值——数值为 0、布尔为 false、' +
            '字符串为 `""`、指针/切片/map/chan/func/interface 为 `nil`。这避免了 C 语言中"未初始化变量包含垃圾值"的隐患，' +
            '让 Go 程序的行为更可预测、更安全。\n\n' +
            '常量（`const`）在编译时确定值，运行时不可修改。Go 常量有一个独特特性：**可以是无类型字面量**，' +
            '在赋值或运算时自动适配上下文类型。例如 `const pi = 3.14` 既是 float64 上下文下的 3.14，' +
            '也能在 `int(pi)` 表达式中工作。`iota` 是 Go 特有的常量计数器，专门用于定义枚举序列，' +
            '解决了 Go 没有 enum 关键字的问题。\n\n' +
            '## 语法说明\n\n' +
            '**变量声明语法**：\n\n' +
            '```go\n' +
            '// 1. var 完整声明\n' +
            'var name type           // 仅声明，使用零值\n' +
            'var name type = value   // 显式类型 + 初始值\n' +
            'var name = value        // 省略类型，自动推断\n' +
            'var name1, name2 type   // 同类型多变量\n' +
            'var (                   // 批量声明\n' +
            '    name1 type = value1\n' +
            '    name2      = value2\n' +
            ')\n\n' +
            '// 2. 短变量声明（仅函数内）\n' +
            'name := value           // 自动推断类型\n' +
            'a, b := 1, "hello"      // 多变量，可不同类型\n' +
            'a, b := b, a            // 交换值（注意 := 要求左侧至少一个新变量）\n' +
            '```\n\n' +
            '| 声明方式 | 语法 | 适用位置 | 推荐场景 |\n' +
            '|----------|------|----------|----------|\n' +
            '| var 完整 | `var x int = 5` | 包级 + 函数内 | 显式类型、包级变量 |\n' +
            '| var 推断 | `var x = 5` | 包级 + 函数内 | 包级变量推断类型 |\n' +
            '| var 零值 | `var x int` | 包级 + 函数内 | 需要零值初始化 |\n' +
            '| 短声明 | `x := 5` | **仅函数内** | 局部变量（最常用） |\n' +
            '| 批量 | `var ( ... )` | 包级 + 函数内 | 多变量集中声明 |\n\n' +
            '**常量声明语法**：\n\n' +
            '```go\n' +
            '// 单个常量\n' +
            'const pi = 3.14159\n' +
            'const greeting string = "你好"   // 显式类型\n\n' +
            '// 批量声明\n' +
            'const (\n' +
            '    StatusOK = 200\n' +
            '    StatusNotFound = 404\n' +
            '    StatusError = 500\n' +
            ')\n\n' +
            '// iota 枚举计数器\n' +
            'const (\n' +
            '    Sunday    = iota   // 0\n' +
            '    Monday             // 1（iota 自动+1）\n' +
            '    Tuesday            // 2\n' +
            '    Wednesday          // 3\n' +
            '    Thursday           // 4\n' +
            '    Friday             // 5\n' +
            '    Saturday           // 6\n' +
            ')\n\n' +
            '// iota 高级用法：位运算定义权限位\n' +
            'const (\n' +
            '    Read    = 1 << iota   // 1 (001)\n' +
            '    Write                 // 2 (010)\n' +
            '    Execute               // 4 (100)\n' +
            ')\n' +
            '```\n\n' +
            '**零值对照表**：\n\n' +
            '| 类型 | 零值 | 说明 |\n' +
            '|------|------|------|\n' +
            '| int, int8, int64, uint 等 | `0` | 所有整数类型 |\n' +
            '| float32, float64 | `0.0` | 浮点零 |\n' +
            '| complex64, complex128 | `0+0i` | 复数零 |\n' +
            '| bool | `false` | 布尔假 |\n' +
            '| string | `""` | 空字符串 |\n' +
            '| pointer | `nil` | 空指针 |\n' +
            '| slice, map, chan | `nil` | 空引用类型 |\n' +
            '| func, interface | `nil` | 空函数/接口 |\n' +
            '| array | 元素各自的零值 | 数组按元素零值 |\n' +
            '| struct | 字段各自零值 | 结构体字段零值 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：var 与短变量声明的各种用法**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            '// 包级变量必须用 var，不能用 :=\n' +
            'var version = "1.0.0"\n' +
            'var (\n' +
            '    appName    = "CodeLearn"\n' +
            '    maxWorkers = 10\n' +
            '    debugMode  = false\n' +
            ')\n\n' +
            'func main() {\n' +
            '    // 函数内推荐用 :=\n' +
            '    name := "小明"\n' +
            '    age := 20\n' +
            '    height := 1.75\n\n' +
            '    // 显式类型声明（需要时）\n' +
            '    var score float64 = 95.5\n' +
            '    var isActive bool = true\n\n' +
            '    // 多变量同时声明\n' +
            '    x, y, z := 1, 2, 3\n\n' +
            '    fmt.Println(name, age, height, score, isActive)\n' +
            '    fmt.Println("坐标:", x, y, z)\n' +
            '    fmt.Println("全局:", version, appName, maxWorkers, debugMode)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：iota 定义枚举与位运算权限**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            '// 用 iota 定义星期枚举\n' +
            'const (\n' +
            '    Sunday = iota\n' +
            '    Monday\n' +
            '    Tuesday\n' +
            '    Wednesday\n' +
            '    Thursday\n' +
            '    Friday\n' +
            '    Saturday\n' +
            ')\n\n' +
            '// 位运算定义文件权限\n' +
            'const (\n' +
            '    Read    = 1 << iota   // 1 (二进制 001)\n' +
            '    Write                 // 2 (二进制 010)\n' +
            '    Execute               // 4 (二进制 100)\n' +
            ')\n\n' +
            'func main() {\n' +
            '    fmt.Println("Sunday =", Sunday, "Saturday =", Saturday)\n\n' +
            '    // 组合权限：可读可写不可执行\n' +
            '    perm := Read | Write  // 1 | 2 = 3\n' +
            '    fmt.Printf("权限值: %d (二进制 %b)\\n", perm, perm)\n' +
            '    fmt.Println("可读?", perm&Read != 0)\n' +
            '    fmt.Println("可执行?", perm&Execute != 0)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：多重赋值、交换与零值演示**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func swap(a, b int) (int, int) {\n' +
            '    return b, a  // 多返回值\n' +
            '}\n\n' +
            'func main() {\n' +
            '    // 多重赋值\n' +
            '    a, b := 10, 20\n' +
            '    fmt.Println("交换前:", a, b)  // 10 20\n\n' +
            '    // 直接交换\n' +
            '    a, b = b, a\n' +
            '    fmt.Println("交换后:", a, b)  // 20 10\n\n' +
            '    // 函数返回多值\n' +
            '    x, y := swap(100, 200)\n' +
            '    fmt.Println("函数交换:", x, y)  // 200 100\n\n' +
            '    // 零值演示\n' +
            '    var n int      // 0\n' +
            '    var s string   // ""\n' +
            '    var f float64  // 0\n' +
            '    var p *int     // nil\n' +
            '    fmt.Printf("零值: n=%d s=%q f=%v p=%v\\n", n, s, f, p)\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **短变量声明 `:=` 只能在函数内使用**：包级变量必须用 `var`。尝试在函数外用 `:=` 会编译错误。' +
            '这是 Go 语法层面的硬性限制。\n\n' +
            '2. **`:=` 要求左侧至少有一个新变量**：`a, b := 1, 2` 声明新变量；但 `a, b := 3, 4`（当 a、b 已存在）会报错 "no new variables on left side of :="，应改用 `a, b = 3, 4`。' +
            '常见于 `:=` 重新赋值时的陷阱，比如 `f, err := os.Open()` 在循环中重复使用。\n\n' +
            '3. **常量不能取地址**：`const x = 5; p := &x` 编译失败，因为常量没有运行时存储位置。常量是编译期字面值。\n\n' +
            '4. **常量无类型化要小心**：`const x = 1 << 60` 在 32 位平台作为 int 会溢出。如果常量可能跨平台使用，' +
            '应显式指定类型，如 `const x int64 = 1 << 60`。\n\n' +
            '5. **iota 在每个 const 块重置为 0**：不同 const 块的 iota 互不影响。同一 const 块内，iota 在每一行（不管是否使用）都+1。' +
            '如果中间有空行或 `_`，iota 仍会继续递增。\n\n' +
            '6. **变量遮蔽（shadowing）**：内部作用域声明的同名变量会遮蔽外部变量，导致"看起来改了其实没改"的 bug。' +
            '建议开启 `go vet -shadow` 或使用 linter 检测。例如：\n' +
            '```go\n' +
            'var x = 10\n' +
            'if true {\n' +
            '    x := 20   // 这是新变量，不是外部 x！\n' +
            '    fmt.Println(x)  // 20\n' +
            '}\n' +
            'fmt.Println(x)  // 仍然是 10\n' +
            '```\n\n' +
            '7. **Go 没有未使用变量警告，而是编译错误**：声明但未使用的局部变量会导致编译失败。' +
            '临时调试时可改成 `_ = unused` 绕过，但生产代码应删除。\n\n' +
            '8. **零值不等于未定义**：Go 没有"未定义"状态，所有变量都有确定值（要么显式赋值，要么零值）。' +
            '这意味着 `var p *int` 后 `p == nil` 是确定的，不会像 C 那样是随机地址。\n\n' +
            '## 实际应用\n\n' +
            '**配置管理**：常量用于不会变化的配置值，变量用于运行时状态：\n\n' +
            '```go\n' +
            'const (\n' +
            '    MaxConnections = 100\n' +
            '    DefaultTimeout = 30  // 秒\n' +
            '    APIVersion     = "v1"\n' +
            ')\n\n' +
            'var (\n' +
            '    requestCount int\n' +
            '    currentUser  string\n' +
            '    startTime    = time.Now()\n' +
            ')\n' +
            '```\n\n' +
            '**状态码与错误码定义**：用 iota 定义状态机或错误码，自动编号且易于扩展：\n\n' +
            '```go\n' +
            'const (\n' +
            '    StatusPending = iota\n' +
            '    StatusActive\n' +
            '    StatusSuspended\n' +
            '    StatusDeleted\n' +
            ')\n\n' +
            'func StatusName(s int) string {\n' +
            '    return [...]string{"待审核", "活跃", "暂停", "已删除"}[s]\n' +
            '}\n' +
            '```\n\n' +
            '**权限位运算**：在文件系统、API 权限设计中，用位运算组合权限非常高效：\n\n' +
            '```go\n' +
            'const (\n' +
            '    PermRead    = 1 << iota   // 1\n' +
            '    PermWrite                // 2\n' +
            '    PermDelete               // 4\n' +
            '    PermShare                // 8\n' +
            ')\n\n' +
            '// 用户权限：可读、可写、可分享\n' +
            'userPerm := PermRead | PermWrite | PermShare  // 11\n\n' +
            '// 检查是否有删除权限\n' +
            'canDelete := userPerm&PermDelete != 0  // false\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**无类型常量的精度**：Go 无类型常量在编译期有任意精度，可以做超大数运算：\n' +
            '```go\n' +
            'const Big = 1 << 100   // 远超 int64 范围\n' +
            '// 但赋值给变量时会溢出：var n = Big 编译失败\n' +
            '// 用法：const Half = Big >> 1  // 仍是无类型常量，合法\n' +
            '```\n\n' +
            '**iota 高级技巧**：\n' +
            '```go\n' +
            '// 跳过 0，从 1 开始\n' +
            'const (\n' +
            '    _  = iota   // 跳过 0\n' +
            '    KB = 1 << (10 * iota)  // 1 << 10 = 1024\n' +
            '    MB                      // 1 << 20\n' +
            '    GB                      // 1 << 30\n' +
            ')\n\n' +
            '// 自定义表达式\n' +
            'const (\n' +
            '    a = iota * 2   // 0, 2, 4, 6...\n' +
            '    b              // 2\n' +
            '    c              // 4\n' +
            ')\n' +
            '```\n\n' +
            '**Go 1.18+ 泛型与变量**：泛型函数中变量类型由参数推断，无需显式声明：\n' +
            '```go\n' +
            'func First[T any](s []T) T {\n' +
            '    return s[0]  // T 由调用方推断\n' +
            '}\n' +
            'n := First([]int{1, 2, 3})  // n 自动是 int\n' +
            '```\n\n' +
            '**与 Python 的对比**：Python 用 `x = 5` 动态绑定，Go 用 `x := 5` 静态声明。' +
            'Python 的 `x = 5; x = "hello"` 合法，Go 中 `x := 5; x := "hello"` 编译错误（类型不匹配）。' +
            'Go 的严格性换来的是更好的性能、更早的错误发现、更好的 IDE 支持。',
          examples: [
            {
              title: 'var 声明与短变量声明',
              code: `package main

import "fmt"

func main() {
    var name string = "小明"
    var age int = 20
    city := "北京"
    fmt.Println(name, age, city)
}`,
              explanation:
                '`var name string = "小明"` 显式声明类型并赋值；`city := "北京"` 短变量声明，编译器自动推断为 string。' +
                '输出：小明 20 北京。',
            },
            {
              title: '常量与 iota',
              code: `package main

import "fmt"

const (
    Sunday = iota
    Monday
    Tuesday
    Wednesday
)

func main() {
    fmt.Println(Sunday, Monday, Tuesday, Wednesday)
}`,
              explanation:
                '`iota` 在 const 块中从 0 开始递增。Sunday=0、Monday=1、Tuesday=2、Wednesday=3。' +
                '这是 Go 定义枚举的惯用方式。输出：0 1 2 3。',
            },
            {
              title: '多重赋值与交换',
              code: `package main

import "fmt"

func main() {
    a, b := 10, 20
    fmt.Println(a, b)
    a, b = b, a
    fmt.Println(a, b)
}`,
              explanation:
                '`a, b := 10, 20` 同时声明两个变量；`a, b = b, a` 交换两者的值，无需临时变量。' +
                '输出：10 20，然后 20 10。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用短变量声明 age 赋值为 25，输出它。',
              starter_code: `package main

import "fmt"

func main() {
    age := 25
    fmt.Println(___)
}`,
              expected_output: '25',
              hints: [
                '变量已经声明为 age',
                '把变量名传给 Println',
                '答案: age',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明常量 pi = 3.14，用 Printf 输出 "pi = 3.14"（保留两位小数）。',
              starter_code: `package main

import "fmt"

func main() {
    const pi = 3.14
    fmt.Printf("pi = %.2f\\n", ___)
}`,
              expected_output: 'pi = 3.14',
              hints: [
                '把常量 pi 作为 Printf 的参数',
                '常量名就是 pi',
                '答案: pi',
              ],
            },
          ],
          realWorldScenario:
            '在配置管理中，常量用于定义不会变化的值（如版本号、最大连接数、API 路径），变量用于存储运行时状态（如请求数、当前用户）。iota 常用于定义状态码、错误码、权限级别等枚举。零值机制让服务启动时所有配置都有安全默认值，避免空指针异常。',
        },
        {
          id: 'go-ch1-l4',
          title: '基本数据类型',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            'Go 是强类型语言，每个变量都有明确的类型，编译器在编译期完成所有类型检查。' +
            'Go 的基本数据类型设计原则是"少而精"——没有 Python 那样灵活的隐式转换，也没有 Java 那样庞大的类型层级，' +
            '而是用一套简洁的类型系统覆盖绝大多数场景。这种设计让代码更易读、更安全，性能也更好。\n\n' +
            'Go 的基本类型分四大类：**整数类型**（int/uint 系列、byte、rune）、**浮点类型**（float32/float64、complex）、' +
            '**布尔类型**（bool）、**字符串类型**（string）。日常编程中 `int` 和 `float64` 是最常用的数值类型，' +
            '它们在 64 位平台分别是 64 位整数和 64 位浮点，性能最佳。\n\n' +
            'Go **不支持隐式类型转换**——这是与 Python/JavaScript 截然不同的设计。`int` 和 `float64` 不能直接运算，' +
            '必须显式写 `float64(i)` 转换。虽然略显繁琐，但避免了无数因隐式转换导致的精度丢失、符号扩展、' +
            'nil 比较等 bug。这个设计在大型项目、团队协作中价值巨大——读代码时类型关系一目了然。\n\n' +
            '字符串是 Go 中比较特殊的类型：它是**不可变的字节序列**（不是字符序列），默认 UTF-8 编码。' +
            '`len("中文")` 返回 6（字节数），不是 2（字符数）。要按字符（rune）处理需用 `[]rune(s)` 或 `range` 遍历。' +
            '这种"字节视角"让 Go 在处理二进制数据、网络协议时非常高效，但处理 Unicode 文本时需要小心。\n\n' +
            '## 语法说明\n\n' +
            '**完整类型表**：\n\n' +
            '| 类别 | 类型 | 说明 | 默认零值 |\n' +
            '|------|------|------|----------|\n' +
            '| 布尔 | `bool` | true/false | false |\n' +
            '| 整数 | `int` | 平台相关（64位系统为 int64） | 0 |\n' +
            '| 整数 | `int8` | 8位有符号 -128~127 | 0 |\n' +
            '| 整数 | `int16` | 16位有符号 | 0 |\n' +
            '| 整数 | `int32` | 32位有符号（rune 别名） | 0 |\n' +
            '| 整数 | `int64` | 64位有符号 | 0 |\n' +
            '| 整数 | `uint` | 平台相关无符号 | 0 |\n' +
            '| 整数 | `uint8` | 8位无符号（byte 别名）0~255 | 0 |\n' +
            '| 整数 | `uintptr` | 存放指针的无符号整数 | 0 |\n' +
            '| 浮点 | `float32` | 32位 IEEE754 | 0.0 |\n' +
            '| 浮点 | `float64` | 64位 IEEE754（默认） | 0.0 |\n' +
            '| 复数 | `complex64` | 两个 float32 | 0+0i |\n' +
            '| 复数 | `complex128` | 两个 float64（默认） | 0+0i |\n' +
            '| 字符 | `byte` | uint8 别名 | 0 |\n' +
            '| 字符 | `rune` | int32 别名（Unicode 码点） | 0 |\n' +
            '| 字符串 | `string` | 只读字节序列 | "" |\n\n' +
            '**类型转换语法**：\n\n' +
            '```go\n' +
            'T(v)   // 把 v 转换为 T 类型\n\n' +
            '// 数值类型互转\n' +
            'var i int = 42\n' +
            'var f float64 = float64(i)   // int -> float64\n' +
            'var n int = int(f)            // float64 -> int（截断小数）\n' +
            'var u uint = uint(i)          // int -> uint\n\n' +
            '// 字符串与数值互转（用 strconv 包）\n' +
            'import "strconv"\n' +
            's := strconv.Itoa(42)              // int -> string，得 "42"\n' +
            'n, err := strconv.Atoi("42")       // string -> int，得 42\n' +
            's := strconv.FormatFloat(3.14, \'f\', 2, 64)  // float -> string\n' +
            'f, err := strconv.ParseFloat("3.14", 64)     // string -> float\n\n' +
            '// 字符与字符串互转\n' +
            's := string(65)              // 整数 -> 字符串，得 "A"（按 Unicode 码点）\n' +
            'b := byte(\'A\')              // 字符 -> byte，得 65\n' +
            'r := []rune("中文")           // 字符串 -> rune 切片\n' +
            's := string([]rune{20013, 25991})  // rune 切片 -> 字符串\n' +
            '```\n\n' +
            '**字符串操作常用函数**：\n\n' +
            '| 函数/操作 | 作用 | 示例 |\n' +
            '|-----------|------|------|\n' +
            '| `len(s)` | 字节长度 | `len("Go")` = 2 |\n' +
            '| `s[i]` | 取第 i 个字节 | `"Go"[0]` = 71 (\'G\') |\n' +
            '| `s + t` | 拼接 | `"a" + "b"` = "ab" |\n' +
            '| `strings.ToUpper(s)` | 转大写 | `"ab"` -> "AB" |\n' +
            '| `strings.ToLower(s)` | 转小写 | `"AB"` -> "ab" |\n' +
            '| `strings.Contains(s, sub)` | 是否包含 | `Contains("hello", "ell")` = true |\n' +
            '| `strings.HasPrefix(s, p)` | 前缀判断 | `HasPrefix("Go", "G")` = true |\n' +
            '| `strings.Split(s, sep)` | 分割 | `Split("a,b,c", ",")` = ["a","b","c"] |\n' +
            '| `strings.Join(arr, sep)` | 连接 | `Join(["a","b"], "-")` = "a-b" |\n' +
            '| `strings.Replace(s, old, new, n)` | 替换 | n=-1 全部替换 |\n' +
            '| `[]rune(s)` | 转 rune 切片 | 按字符处理中文 |\n' +
            '| `range s` | 遍历 rune | `for i, r := range s` |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：基本类型与格式化输出**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    var i int = 42\n' +
            '    var u uint = 100\n' +
            '    var f float64 = 3.14\n' +
            '    var b bool = true\n' +
            '    var s string = "Go"\n' +
            '    var r rune = \'中\'  // 单字符用单引号\n' +
            '    var by byte = 255\n\n' +
            '    fmt.Printf("int=%d uint=%d float=%f bool=%t\\n", i, u, f, b)\n' +
            '    fmt.Printf("string=%s rune=%c byte=%d\\n", s, r, by)\n' +
            '    fmt.Printf("类型: %T %T %T %T\\n", i, f, b, s)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：类型转换与精度问题**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "strconv"\n' +
            ')\n\n' +
            'func main() {\n' +
            '    // 整数除法 vs 浮点除法\n' +
            '    a, b := 3, 2\n' +
            '    fmt.Println("整数除法:", a/b)                    // 1（截断）\n' +
            '    fmt.Println("浮点除法:", float64(a)/float64(b)) // 1.5\n\n' +
            '    // float -> int 截断小数（不是四舍五入）\n' +
            '    f := 3.99\n' +
            '    fmt.Println("float转int:", int(f))  // 3\n\n' +
            '    // 字符串与数字互转\n' +
            '    n, err := strconv.Atoi("42")\n' +
            '    if err != nil {\n' +
            '        fmt.Println("转换失败")\n' +
            '    } else {\n' +
            '        fmt.Println("字符串转数字:", n+8)  // 50\n' +
            '    }\n' +
            '    fmt.Println("数字转字符串:", strconv.Itoa(42)+".")  // "42."\n\n' +
            '    // 大整数溢出\n' +
            '    var big int8 = 127\n' +
            '    big++   // 溢出，变成 -128\n' +
            '    fmt.Println("int8 溢出:", big)  // -128\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：字符串字节与 rune 的区别**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    s := "Go中文"\n\n' +
            '    // 按字节遍历（容易出 bug）\n' +
            '    fmt.Println("字节数:", len(s))  // 8（G=1, o=1, 中=3, 文=3）\n' +
            '    for i := 0; i < len(s); i++ {\n' +
            '        fmt.Printf("%d: %d %q\\n", i, s[i], s[i])\n' +
            '    }\n\n' +
            '    // 按 rune 遍历（推荐）\n' +
            '    fmt.Println("\\n按字符遍历:")\n' +
            '    runes := []rune(s)\n' +
            '    fmt.Println("字符数:", len(runes))  // 4\n' +
            '    for i, r := range runes {\n' +
            '        fmt.Printf("%d: %c (码点 %d)\\n", i, r, r)\n' +
            '    }\n\n' +
            '    // 截取字符串（按字节，可能切断中文）\n' +
            '    fmt.Println("\\n前4字节:", s[:4])  // "Go中" (3+1，正好切断"文")\n' +
            '    // 安全截取：先转 rune\n' +
            '    fmt.Println("前3字符:", string([]rune(s)[:3]))  // "Go中"\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **没有隐式转换，所有跨类型运算必须显式转换**：`int + float64` 编译错误，必须写 `float64(int) + float64`。' +
            '即使是 `int` 与 `int64` 也不能直接运算，必须 `int64(i) + j`。\n\n' +
            '2. **整数除法截断小数**：`3 / 2` 结果是 1 不是 1.5。需要浮点结果时至少一个操作数是浮点：`3.0 / 2` 或 `float64(3)/2`。\n\n' +
            '3. **`int` 大小依赖平台**：在 32 位平台是 int32，64 位平台是 int64。跨平台代码若依赖具体大小，应显式用 `int64`/`int32`。' +
            '切片长度、数组索引通常用 `int`，不要随意转换。\n\n' +
            '4. **整数溢出不会 panic，会回绕**：`int8` 的 127 + 1 = -128。金融、ID 生成等场景要用 `math/big` 或检测溢出。' +
            'Go 1.13+ 提供 `math.AddOverflow`、`math.MulOverflow` 检测函数。\n\n' +
            '5. **`string(n)` 不是数字转字符串**：`string(65)` 得到 `"A"`（按 Unicode 码点），不是 `"65"`。' +
            '数字转字符串用 `strconv.Itoa(n)` 或 `fmt.Sprintf("%d", n)`。这是初学者最常踩的坑。\n\n' +
            '6. **浮点比较不能用 `==`**：由于浮点精度，`0.1 + 0.2 != 0.3`。比较浮点应用 `math.Abs(a-b) < 1e-9`。' +
            '金额计算应避免 float，用整数（分）或 decimal 库。\n\n' +
            '7. **字符串不可变**：`s[0] = \'H\'` 编译错误。要修改需转 `[]byte`：`b := []byte(s); b[0] = \'H\'; s = string(b)`。' +
            '频繁修改字符串应考虑 `strings.Builder`。\n\n' +
            '8. **`len(s)` 返回字节数不是字符数**：处理中文、emoji 时要注意。`len("😀")` = 4（UTF-8 4 字节）。' +
            '要字符数用 `utf8.RuneCountInString(s)` 或 `len([]rune(s))`。\n\n' +
            '9. **byte 和 rune 是别名**：`byte = uint8`，`rune = int32`。`\'A\'` 是 rune（int32），`s[0]` 是 byte（uint8）。' +
            '二者混用要转换。\n\n' +
            '## 实际应用\n\n' +
            '**HTTP 请求参数解析**：从 URL/query 解析的字符串需要转数字：\n\n' +
            '```go\n' +
            'import (\n' +
            '    "net/http"\n' +
            '    "strconv"\n' +
            ')\n\n' +
            'func handler(w http.ResponseWriter, r *http.Request) {\n' +
            '    ageStr := r.URL.Query().Get("age")\n' +
            '    age, err := strconv.Atoi(ageStr)  // 字符串转 int\n' +
            '    if err != nil {\n' +
            '        http.Error(w, "age 必须是整数", 400)\n' +
            '        return\n' +
            '    }\n' +
            '    if age < 0 || age > 150 {\n' +
            '        http.Error(w, "年龄非法", 400)\n' +
            '        return\n' +
            '    }\n' +
            '    // 用 age 做业务...\n' +
            '}\n' +
            '```\n\n' +
            '**金额计算避免浮点精度**：用整数（分）存储：\n\n' +
            '```go\n' +
            '// 价格以分为单位（int），避免 float 精度问题\n' +
            'type Money int64  // 199 表示 1.99 元\n\n' +
            'func (m Money) String() string {\n' +
            '    return fmt.Sprintf("%d.%02d元", m/100, m%100)\n' +
            '}\n\n' +
            'func main() {\n' +
            '    price := Money(199)   // 1.99 元\n' +
            '    qty := 3\n' +
            '    total := price * Money(qty)  // 597，即 5.97 元\n' +
            '    fmt.Println(total)  // "5.97元"\n' +
            '}\n' +
            '```\n\n' +
            '**Unicode 文本处理**：处理多语言文本时用 rune：\n\n' +
            '```go\n' +
            'func reverseRunes(s string) string {\n' +
            '    r := []rune(s)\n' +
            '    for i, j := 0, len(r)-1; i < j; i, j = i+1, j-1 {\n' +
            '        r[i], r[j] = r[j], r[i]\n' +
            '    }\n' +
            '    return string(r)\n' +
            '}\n\n' +
            'fmt.Println(reverseRunes("你好Go"))  // "oG好你"\n' +
            '// 如果按 byte 反转会切断中文字节，产生乱码\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**类型别名 vs 类型定义**：\n' +
            '```go\n' +
            'type MyInt = int    // 类型别名，MyInt 和 int 完全相同，可互转\n' +
            'type MyInt2 int      // 类型定义，MyInt2 是新类型，与 int 不能隐式互转\n' +
            '```\n' +
            '别名（`=`）用于兼容性（如 `byte = uint8`），定义（无 `=`）用于创建语义不同的新类型。\n\n' +
            '**字符串与字节切片的零拷贝**：`string(b)` 和 `[]byte(s)` 会拷贝数据以保证字符串不可变。' +
            'Go 1.3+ 编译器优化了某些场景（如 `for i := 0; i < len(s); i++ { b := s[i] }`）。' +
            '性能敏感场景可用 `unsafe` 包做零拷贝，但极其危险，不推荐。\n\n' +
            '**math/big 处理大数**：超过 int64 范围的整数用 `big.Int`：\n' +
            '```go\n' +
            'import "math/big"\n' +
            'a := big.NewInt(1)\n' +
            'a.Lsh(a, 100)  // 1 << 100\n' +
            'fmt.Println(a)  // 1267650600228229401496703205376\n' +
            '```\n\n' +
            '**strings.Builder 高效拼接**：循环中拼接字符串不要用 `+`，用 `strings.Builder`：\n' +
            '```go\n' +
            'var b strings.Builder\n' +
            'for i := 0; i < 1000; i++ {\n' +
            '    b.WriteString("item")\n' +
            '}\n' +
            'result := b.String()  // 仅一次内存分配\n' +
            '```\n\n' +
            '**与 Python 的对比**：Python 中 `1 + 1.0` 隐式转换为 float，Go 中需显式 `float64(1) + 1.0`；' +
            'Python 字符串可变（`s[0] = "H"` 在 CPython 不行但语义上是不可变），Go 字符串编译期强制不可变；' +
            'Python 的 `len("中")` = 1（字符数），Go 的 `len("中")` = 3（字节数）。',
          examples: [
            {
              title: '基本类型演示',
              code: `package main

import "fmt"

func main() {
    var i int = 42
    var f float64 = 3.14
    var b bool = true
    var s string = "Go"
    fmt.Printf("int=%d float=%f bool=%t string=%s\\n", i, f, b, s)
}`,
              explanation:
                '声明四种基本类型变量并用 Printf 格式化输出。`%d` 整数、`%f` 浮点、`%t` 布尔、`%s` 字符串。' +
                '输出：int=42 float=3.140000 bool=true string=Go。',
            },
            {
              title: '类型转换',
              code: `package main

import "fmt"

func main() {
    a := 3
    b := 2
    fmt.Println(a / b)
    fmt.Println(float64(a) / float64(b))
}`,
              explanation:
                '整数除法 `3/2` 结果为 1（截断小数）。`float64(a)/float64(b)` 转为浮点除法，结果为 1.5。' +
                'Go 不允许 int 和 float64 直接运算，必须显式转换。输出：1 和 1.5。',
            },
            {
              title: '零值',
              code: `package main

import "fmt"

func main() {
    var i int
    var f float64
    var b bool
    var s string
    fmt.Println("默认值:", i, f, b, "["+s+"]")
}`,
              explanation:
                '未初始化的变量自动获得零值：int=0、float64=0、bool=false、string=""（空串）。' +
                '用 "["+s+"]" 包裹空串让空字符串可见。输出：默认值: 0 0 false []。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '把整数 a=3、b=2 转为 float64 后做浮点除法，输出 1.5。',
              starter_code: `package main

import "fmt"

func main() {
    a := 3
    b := 2
    result := float64(a) / float64(___)
    fmt.Println(result)
}`,
              expected_output: '1.5',
              hints: [
                '需要把 b 也转换为 float64',
                '类型转换语法: float64(变量)',
                '答案: b',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明布尔 isGo=true 和字符串 name="Go"，用 Printf 输出 "Go 好用: true"。',
              starter_code: `package main

import "fmt"

func main() {
    isGo := true
    name := "Go"
    fmt.Printf("%s 好用: %t\\n", name, ___)
}`,
              expected_output: 'Go 好用: true',
              hints: [
                '%t 用于输出布尔值',
                '把布尔变量 isGo 作为参数',
                '答案: isGo',
              ],
            },
          ],
          realWorldScenario:
            '在处理用户输入或数据库字段时，类型转换无处不在：从 HTTP 请求解析的字符串需要转成 int/float 才能计算；金额计算必须用 float64 或专门的 decimal 类型避免精度丢失。Go 的显式转换强制开发者思考类型边界，从源头减少因类型混用导致的 bug，这在金融、计费等对精度敏感的系统中尤为重要。',
        },
      ],
    },
    // ================================================================
    // 第 2 章：控制流
    // ================================================================
    {
      id: 'go-ch2',
      title: '控制流',
      order: 1,
      lessons: [
        {
          id: 'go-ch2-l1',
          title: 'if / else',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'if/else 是编程中最基础的条件分支结构：根据条件的真假执行不同的代码块。' +
            'Go 的 if 语句设计遵循"少即是多"的哲学——去掉了其他语言中常见的圆括号、三元运算符，' +
            '强制花括号，让代码风格高度统一，减少团队协作中的风格争议。\n\n' +
            'Go if 语句的几个独特设计：**条件不加圆括号**（`if x > 0` 而非 `if (x > 0)`）、' +
            '**花括号必须**（即使单行也不能省）、**左花括号必须与关键字同行**（不能换行）。' +
            '这些规则不是建议，而是编译器强制要求——违反会直接编译失败。这种"语法强制"消除了' +
            'dangling else、单行 if bug 等经典陷阱。\n\n' +
            'Go if 的杀手锏是**初始化语句**：`if 初始化; 条件 { }`。这让你可以在判断前先执行一个语句（通常是声明变量），' +
            '该变量作用域仅限于整个 if/else 块。这在错误处理中极为常用：`if err := doSomething(); err != nil { ... }`，' +
            '既避免了 err 污染外部作用域，又让代码紧凑。\n\n' +
            'Go 刻意**没有三元运算符 `? :`**。在 C/Java 中 `int x = a > b ? a : b` 一行搞定，' +
            'Go 必须写 4 行 if/else。这是 Go 团队的设计取舍：避免一行写过于复杂的表达式，让代码更易读。' +
            '虽然有时显得啰嗦，但调试时更清晰。\n\n' +
            '## 语法说明\n\n' +
            '**基本语法**：\n\n' +
            '```go\n' +
            '// 1. 基本形式\n' +
            'if 条件 {\n' +
            '    // 条件为 true 时执行\n' +
            '}\n\n' +
            '// 2. if/else\n' +
            'if 条件 {\n' +
            '    // true\n' +
            '} else {\n' +
            '    // false\n' +
            '}\n\n' +
            '// 3. 多分支 else if\n' +
            'if 条件1 {\n' +
            '    // ...\n' +
            '} else if 条件2 {\n' +
            '    // ...\n' +
            '} else if 条件3 {\n' +
            '    // ...\n' +
            '} else {\n' +
            '    // 所有条件都不满足\n' +
            '}\n\n' +
            '// 4. 带初始化语句（Go 特色）\n' +
            'if 初始化语句; 条件 {\n' +
            '    // 初始化语句中声明的变量在此可用\n' +
            '}\n\n' +
            '// 5. 嵌套 if\n' +
            'if x > 0 {\n' +
            '    if x > 100 {\n' +
            '        // 大正数\n' +
            '    } else {\n' +
            '        // 小正数\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '| 语法形式 | 示例 | 用途 |\n' +
            '|----------|------|------|\n' +
            '| 基本 if | `if x > 0 { }` | 单条件判断 |\n' +
            '| if/else | `if x > 0 { } else { }` | 二选一 |\n' +
            '| else if 链 | `if ... else if ... else` | 多条件分支 |\n' +
            '| 带初始化 | `if v := get(); v > 0 { }` | 限定变量作用域 |\n' +
            '| 嵌套 if | `if a { if b { } }` | 复合条件 |\n\n' +
            '**条件表达式规则**：\n\n' +
            '```go\n' +
            '// 条件必须是布尔类型（bool），不能是其他类型隐式转换\n' +
            'if true { }          // OK\n' +
            'if 1 { }             // 编译错误！Go 不会把 1 当 true\n' +
            'if nil { }           // 编译错误！nil 不是 bool\n' +
            'if x != nil { }      // OK，显式比较\n\n' +
            '// 逻辑运算符\n' +
            'if a > 0 && b > 0 { }    // 且\n' +
            'if a > 0 || b > 0 { }    // 或\n' +
            'if !(x > 0) { }          // 非\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：基础 if/else 与多分支**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    age := 18\n' +
            '    if age >= 18 {\n' +
            '        fmt.Println("成年")\n' +
            '    } else {\n' +
            '        fmt.Println("未成年")\n' +
            '    }\n\n' +
            '    // 多分支成绩评定\n' +
            '    score := 85\n' +
            '    if score >= 90 {\n' +
            '        fmt.Println("优秀")\n' +
            '    } else if score >= 80 {\n' +
            '        fmt.Println("良好")\n' +
            '    } else if score >= 60 {\n' +
            '        fmt.Println("及格")\n' +
            '    } else {\n' +
            '        fmt.Println("不及格")\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：带初始化语句（错误处理常用模式）**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "strconv"\n' +
            ')\n\n' +
            'func main() {\n' +
            '    // num 作用域仅限 if/else 块\n' +
            '    if num := 15; num%2 == 0 {\n' +
            '        fmt.Println(num, "是偶数")\n' +
            '    } else {\n' +
            '        fmt.Println(num, "是奇数")\n' +
            '    }\n' +
            '    // fmt.Println(num)  // 编译错误：num 超出作用域\n\n' +
            '    // 经典错误处理模式\n' +
            '    if n, err := strconv.Atoi("42"); err != nil {\n' +
            '        fmt.Println("转换失败:", err)\n' +
            '        return\n' +
            '    } else {\n' +
            '        fmt.Println("转换成功:", n+8)  // 50\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：复杂条件与提前返回**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            '// 验证用户信息\n' +
            'func validateUser(name string, age int, email string) string {\n' +
            '    // 提前返回（guard clause），避免深层嵌套\n' +
            '    if name == "" {\n' +
            '        return "姓名不能为空"\n' +
            '    }\n' +
            '    if age < 0 || age > 150 {\n' +
            '        return "年龄非法"\n' +
            '    }\n' +
            '    if len(email) < 5 || !contains(email, "@") {\n' +
            '        return "邮箱格式错误"\n' +
            '    }\n' +
            '    // 主逻辑\n' +
            '    if age < 18 {\n' +
            '        return "未成年用户注册成功"\n' +
            '    }\n' +
            '    return "成年用户注册成功"\n' +
            '}\n\n' +
            'func contains(s string, sub string) bool {\n' +
            '    for i := 0; i <= len(s)-len(sub); i++ {\n' +
            '        if s[i:i+len(sub)] == sub {\n' +
            '            return true\n' +
            '        }\n' +
            '    }\n' +
            '    return false\n' +
            '}\n\n' +
            'func main() {\n' +
            '    fmt.Println(validateUser("小明", 20, "xm@example.com"))\n' +
            '    fmt.Println(validateUser("", 20, "xm@example.com"))\n' +
            '    fmt.Println(validateUser("小红", 200, "xm@example.com"))\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **左花括号必须在同一行**：`if x > 0\\n{` 会编译失败。Go 自动插入分号会在 `{` 前加分号导致错误。' +
            '这是 Go 最常见的初学者错误。\n\n' +
            '2. **花括号不能省略**：即使单行代码，`if x > 0 fmt.Println(x)` 也会编译错误。必须 `if x > 0 { fmt.Println(x) }`。' +
            '这避免了 Apple 的 goto fail 那种 bug。\n\n' +
            '3. **条件必须是 bool 类型**：Go 不会像 Python/JavaScript 那样做隐式真值转换。`if 1`、`if nil`、`if "hello"` 都是编译错误。' +
            '必须显式写 `if x != nil`、`if len(s) > 0`。\n\n' +
            '4. **else if 链按顺序匹配**：一旦某个条件为真，后续分支不再判断。所以条件顺序很重要，' +
            '通常从严格到宽松（如先判断 >=90，再 >=80，再 >=60）。\n\n' +
            '5. **带初始化的 if 变量作用域**：变量仅在 if/else 块内可见。如果想在外部使用，' +
            '必须在 if 外声明：`var err error; if err = f(); err != nil { }`。\n\n' +
            '6. **避免深层嵌套**：超过 3 层嵌套的 if 难以阅读。推荐用"提前返回"（guard clause）重构：\n' +
            '```go\n' +
            '// 不推荐：深层嵌套\n' +
            'if user != nil {\n' +
            '    if user.IsActive {\n' +
            '        if user.HasPermission {\n' +
            '            // 业务逻辑\n' +
            '        }\n' +
            '    }\n' +
            '}\n\n' +
            '// 推荐：提前返回\n' +
            'if user == nil { return }\n' +
            'if !user.IsActive { return }\n' +
            'if !user.HasPermission { return }\n' +
            '// 业务逻辑\n' +
            '```\n\n' +
            '7. **没有三元运算符**：`x := a > b ? a : b` 在 Go 中要写：\n' +
            '```go\n' +
            'var x int\n' +
            'if a > b {\n' +
            '    x = a\n' +
            '} else {\n' +
            '    x = b\n' +
            '}\n' +
            '```\n\n' +
            '8. **if/else 中的 break/continue**：在循环内的 if 中用 break 跳出循环，continue 跳过本次。' +
            '但 if 本身不参与 break/continue 的语义。\n\n' +
            '## 实际应用\n\n' +
            '**HTTP 请求处理中的条件判断**：\n\n' +
            '```go\n' +
            'func handler(w http.ResponseWriter, r *http.Request) {\n' +
            '    // 方法判断\n' +
            '    if r.Method != "POST" {\n' +
            '        http.Error(w, "仅支持 POST", 405)\n' +
            '        return\n' +
            '    }\n\n' +
            '    // 认证检查\n' +
            '    if token := r.Header.Get("Authorization"); token == "" {\n' +
            '        http.Error(w, "未授权", 401)\n' +
            '        return\n' +
            '    }\n\n' +
            '    // 参数校验\n' +
            '    if err := r.ParseForm(); err != nil {\n' +
            '        http.Error(w, "参数错误", 400)\n' +
            '        return\n' +
            '    }\n\n' +
            '    // 主业务...\n' +
            '}\n' +
            '```\n\n' +
            '**错误处理是 Go 的核心模式**：`if err != nil` 是 Go 代码中出现频率最高的语句之一：\n\n' +
            '```go\n' +
            'file, err := os.Open("config.json")\n' +
            'if err != nil {\n' +
            '    log.Fatal("无法打开配置文件:", err)\n' +
            '}\n' +
            'defer file.Close()\n\n' +
            'data, err := io.ReadAll(file)\n' +
            'if err != nil {\n' +
            '    log.Fatal("读取失败:", err)\n' +
            '}\n' +
            '```\n\n' +
            '**配置分支**：根据环境变量切换行为：\n\n' +
            '```go\n' +
            'func getDBURL() string {\n' +
            '    env := os.Getenv("APP_ENV")\n' +
            '    if env == "production" {\n' +
            '        return "postgres://prod-db:5432/app"\n' +
            '    } else if env == "staging" {\n' +
            '        return "postgres://staging-db:5432/app"\n' +
            '    } else {\n' +
            '        return "postgres://localhost:5432/dev"\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**switch 替代长 else if 链**：当条件分支超过 3 个时，switch 更清晰：\n' +
            '```go\n' +
            'switch {\n' +
            'case score >= 90:\n' +
            '    grade = "优秀"\n' +
            'case score >= 80:\n' +
            '    grade = "良好"\n' +
            'case score >= 60:\n' +
            '    grade = "及格"\n' +
            'default:\n' +
            '    grade = "不及格"\n' +
            '}\n' +
            '```\n\n' +
            '**类型断言与 if**：结合 `v, ok := x.(T)` 做类型判断：\n' +
            '```go\n' +
            'var i interface{} = "hello"\n' +
            'if s, ok := i.(string); ok {\n' +
            '    fmt.Println("是字符串:", s)\n' +
            '} else {\n' +
            '    fmt.Println("不是字符串")\n' +
            '}\n' +
            '```\n\n' +
            '**短路求值**：`&&` 和 `||` 是短路求值。`if a != nil && a.x > 0` 中，若 `a` 为 nil，' +
            '不会访问 `a.x`，避免空指针。利用短路可避免昂贵的判断：`if fast && slow()` 中若 fast 为 false 就跳过 slow()。\n\n' +
            '**与 Python 的对比**：Python 用 `if x:` 接受任意类型的真值测试，Go 要求显式 bool；' +
            'Python 有 `elif`，Go 用 `else if`；Python 有三元 `a if cond else b`，Go 没有；' +
            'Python 不强制缩进/花括号，Go 强制花括号且必须在同行。',
          examples: [
            {
              title: '基本 if/else',
              code: `package main

import "fmt"

func main() {
    age := 18
    if age >= 18 {
        fmt.Println("成年")
    } else {
        fmt.Println("未成年")
    }
}`,
              explanation:
                '条件 `age >= 18` 为 true 时执行第一个分支。注意花括号必须同行，条件不加圆括号。' +
                '输出：成年。',
            },
            {
              title: 'if 带初始化语句',
              code: `package main

import "fmt"

func main() {
    if num := 15; num%2 == 0 {
        fmt.Println("偶数")
    } else {
        fmt.Println("奇数")
    }
}`,
              explanation:
                '`num := 15` 在 if 中初始化，作用域仅限于整个 if/else。`num%2` 取余数判断奇偶。' +
                '15 是奇数，输出：奇数。',
            },
            {
              title: '多分支成绩评定',
              code: `package main

import "fmt"

func main() {
    score := 85
    if score >= 90 {
        fmt.Println("优秀")
    } else if score >= 80 {
        fmt.Println("良好")
    } else if score >= 60 {
        fmt.Println("及格")
    } else {
        fmt.Println("不及格")
    }
}`,
              explanation:
                '`else if` 处理多个条件分支，从上到下依次判断，命中一个就跳出。85 分属于"良好"。' +
                '输出：良好。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '判断 n=8 是偶数还是奇数，补全 else 关键字，输出 "偶数"。',
              starter_code: `package main

import "fmt"

func main() {
    n := 8
    if n%2 == 0 {
        fmt.Println("偶数")
    } ___ {
        fmt.Println("奇数")
    }
}`,
              expected_output: '偶数',
              hints: [
                'if 的相反分支用哪个关键字',
                '偶数的相反是奇数',
                '答案: else',
              ],
            },
            {
              type: 'output-match',
              prompt: '比较 a=15 和 b=23，输出较大的数（23）。',
              starter_code: `package main

import "fmt"

func main() {
    a, b := 15, 23
    if a > b {
        fmt.Println(a)
    } else {
        fmt.Println(___)
    }
}`,
              expected_output: '23',
              hints: [
                'a < b 时应输出 b',
                'else 分支打印较小的那个变量',
                '答案: b',
              ],
            },
          ],
          realWorldScenario:
            '在 Web 服务中，if/else 用于请求校验和权限控制：判断用户是否登录、是否有权限访问某资源、参数是否合法。if 带初始化的写法在错误处理中极为常见——`if err != nil` 是 Go 代码中出现频率最高的模式之一。理解条件分支是编写业务逻辑的基础。',
        },
        {
          id: 'go-ch2-l2',
          title: 'for 循环与 FizzBuzz',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '循环是让计算机重复执行代码的核心结构。Go 在循环设计上极其简洁——**只有一个 `for` 关键字**，' +
            '承担了其他语言中 for、while、do-while 三种循环的全部职责。这种"一个关键字统治一切"的设计' +
            '减少了语法负担，让 Go 代码风格高度统一。\n\n' +
            'Go 的 for 有四种形式：**C 风格 for**（`for init; cond; post`）、**while 风格**（`for cond`）、' +
            '**无限循环**（`for`）、**range 遍历**（`for k, v := range x`）。一种语法覆盖所有循环场景，' +
            '无需记忆多个关键字。这与 Python 区分 for/while、Java 区分 for/while/do-while 形成对比。\n\n' +
            '`range` 是 Go 遍历集合的利器。它可以遍历切片、数组、map、字符串、channel，' +
            '返回索引（或键）和值两个变量。range 遍历字符串时是按 **rune**（Unicode 字符）而非字节，' +
            '这是处理中文等 UTF-8 文本的安全方式。\n\n' +
            'FizzBuzz 是编程入门的经典题：遍历 1 到 N，能被 3 整除输出 "Fizz"，能被 5 整除输出 "Buzz"，' +
            '能被 15 整除输出 "FizzBuzz"，否则输出数字本身。它看似简单，却综合考察了循环、条件、' +
            '取余、字符串拼接的综合能力，是面试中的经典热身题，据说很多应聘者都写不对。\n\n' +
            '## 语法说明\n\n' +
            '**for 的四种形式**：\n\n' +
            '```go\n' +
            '// 1. C 风格 for（最常见）\n' +
            'for i := 0; i < 10; i++ {\n' +
            '    fmt.Println(i)\n' +
            '}\n\n' +
            '// 2. while 风格（省略 init 和 post）\n' +
            'n := 10\n' +
            'for n > 0 {\n' +
            '    fmt.Println(n)\n' +
            '    n--\n' +
            '}\n\n' +
            '// 3. 无限循环（省略所有）\n' +
            'for {\n' +
            '    if shouldStop() {\n' +
            '        break\n' +
            '    }\n' +
            '    doWork()\n' +
            '}\n\n' +
            '// 4. range 遍历\n' +
            'for index, value := range slice {\n' +
            '    fmt.Println(index, value)\n' +
            '}\n' +
            '```\n\n' +
            '| 形式 | 语法 | 等价于 |\n' +
            '|------|------|--------|\n' +
            '| C 风格 | `for i := 0; i < n; i++ { }` | C/Java 的 for |\n' +
            '| while 风格 | `for cond { }` | while (cond) |\n' +
            '| 无限循环 | `for { }` | while (true) |\n' +
            '| range | `for i, v := range x { }` | Python 的 for ... in |\n\n' +
            '**range 在不同类型上的行为**：\n\n' +
            '| 遍历对象 | 第一个返回值 | 第二个返回值 |\n' +
            '|----------|--------------|--------------|\n' +
            '| 数组/切片 `[]T` | 索引 int | 元素 T |\n' +
            '| 字符串 string | 字节偏移 int | rune（Unicode 字符） |\n' +
            '| map `map[K]V` | 键 K | 值 V |\n' +
            '| channel `chan T` | 元素 T | 无（只有一个返回值） |\n\n' +
            '**循环控制语句**：\n\n' +
            '```go\n' +
            'break       // 跳出当前循环\n' +
            'continue    // 跳过本次，进入下一次\n' +
            'break label // 跳出到指定标签（跳出外层循环）\n' +
            'continue label  // 跳到外层循环的下一次\n\n' +
            '// 标签示例（跳出外层循环）\n' +
            'outer:\n' +
            '    for i := 0; i < 3; i++ {\n' +
            '        for j := 0; j < 3; j++ {\n' +
            '            if i*j > 2 {\n' +
            '                break outer   // 直接跳出外层\n' +
            '            }\n' +
            '        }\n' +
            '    }\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：求和、阶乘与 while 风格**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    // 1 到 5 求和\n' +
            '    sum := 0\n' +
            '    for i := 1; i <= 5; i++ {\n' +
            '        sum += i\n' +
            '    }\n' +
            '    fmt.Println("1到5的和:", sum)  // 15\n\n' +
            '    // 5 的阶乘\n' +
            '    fact := 1\n' +
            '    for i := 1; i <= 5; i++ {\n' +
            '        fact *= i\n' +
            '    }\n' +
            '    fmt.Println("5! =", fact)  // 120\n\n' +
            '    // while 风格：倒数\n' +
            '    n := 5\n' +
            '    for n > 0 {\n' +
            '        fmt.Print(n, " ")\n' +
            '        n--\n' +
            '    }\n' +
            '    fmt.Println()  // 5 4 3 2 1\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：range 遍历各种集合**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    // 遍历切片\n' +
            '    fruits := []string{"苹果", "香蕉", "橙子"}\n' +
            '    for i, f := range fruits {\n' +
            '        fmt.Printf("%d: %s\\n", i, f)\n' +
            '    }\n\n' +
            '    // 只需要值，忽略索引\n' +
            '    for _, f := range fruits {\n' +
            '        fmt.Print(f, " ")\n' +
            '    }\n' +
            '    fmt.Println()\n\n' +
            '    // 遍历字符串（按 rune）\n' +
            '    for i, r := range "Go中文" {\n' +
            '        fmt.Printf("%d: %c ", i, r)\n' +
            '    }\n' +
            '    fmt.Println()  // 0: G 1: o 2: 中 5: 文\n\n' +
            '    // 遍历 map（顺序随机）\n' +
            '    ages := map[string]int{"小明": 20, "小红": 22}\n' +
            '    for name, age := range ages {\n' +
            '        fmt.Printf("%s: %d\\n", name, age)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：FizzBuzz 完整实现**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    for i := 1; i <= 15; i++ {\n' +
            '        // 关键：先判断 15（公倍数），再单独判断\n' +
            '        if i%15 == 0 {\n' +
            '            fmt.Println("FizzBuzz")\n' +
            '        } else if i%3 == 0 {\n' +
            '            fmt.Println("Fizz")\n' +
            '        } else if i%5 == 0 {\n' +
            '            fmt.Println("Buzz")\n' +
            '        } else {\n' +
            '            fmt.Println(i)\n' +
            '        }\n' +
            '    }\n' +
            '}\n' +
            '// 输出：1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **Go 没有 while 关键字**：用 `for cond { }` 代替 `while (cond)`。' +
            '用 `for { }` 代替 `while (true)`。初学者要适应这个统一。\n\n' +
            '2. **for 循环的左花括号必须在同一行**：与 if 一样，`for i := 0; i < 10; i++\\n{` 编译失败。\n\n' +
            '3. **`i++` 和 `i--` 是语句不是表达式**：不能写 `j := i++`，也不能写 `++i`（Go 没有前缀自增）。' +
            '这避免了 C/C++ 中 `i++ + ++i` 这种未定义行为。\n\n' +
            '4. **range 复制问题**：range 遍历切片时，value 是元素的**副本**，修改 value 不影响原切片。' +
            '要修改原切片用索引：`for i := range s { s[i] = ... }`。Go 1.22+ 每次循环用新变量，' +
            '解决了闭包捕获的经典 bug。\n\n' +
            '5. **range 字符串返回 rune**：`for i, r := range "中文"` 中 i 是字节偏移（0, 3），r 是 rune。' +
            '不要假设 i 是字符索引。\n\n' +
            '6. **map 遍历顺序随机**：Go 故意随机化 map 的遍历顺序，避免开发者依赖顺序。' +
            '需要有序遍历要先排序 keys：`sort.Strings(keys)`。\n\n' +
            '7. **break 只跳出最内层循环**：要跳出外层用标签 `break outer`。' +
            '初学者常误以为 break 能跳出所有循环。\n\n' +
            '8. **避免在循环中创建闭包捕获循环变量**（Go 1.21 及以前）：\n' +
            '```go\n' +
            '// Go 1.21 及以前：所有 goroutine 捕获的是同一个 i（最后值为 3）\n' +
            'for i := 0; i < 3; i++ {\n' +
            '    go func() { fmt.Println(i) }()  // 可能输出 3 3 3\n' +
            '}\n\n' +
            '// 修复方法 1：传参\n' +
            'for i := 0; i < 3; i++ {\n' +
            '    go func(i int) { fmt.Println(i) }(i)\n' +
            '}\n\n' +
            '// Go 1.22+：每次循环 i 是新变量，无需修复\n' +
            '```\n\n' +
            '## 实际应用\n\n' +
            '**批处理数据**：遍历数据集逐条处理：\n\n' +
            '```go\n' +
            'func processUsers(users []User) []Result {\n' +
            '    results := make([]Result, 0, len(users))\n' +
            '    for _, u := range users {\n' +
            '        if !u.IsActive {\n' +
            '            continue  // 跳过非活跃用户\n' +
            '        }\n' +
            '        r := processOne(u)\n' +
            '        results = append(results, r)\n' +
            '    }\n' +
            '    return results\n' +
            '}\n' +
            '```\n\n' +
            '**分页拉取 API**：while 风格循环直到无更多数据：\n\n' +
            '```go\n' +
            'page := 1\n' +
            'for {\n' +
            '    items, hasMore := fetchPage(page)\n' +
            '    for _, item := range items {\n' +
            '        process(item)\n' +
            '    }\n' +
            '    if !hasMore {\n' +
            '        break\n' +
            '    }\n' +
            '    page++\n' +
            '}\n' +
            '```\n\n' +
            '**重试机制**：带退避的重试循环：\n\n' +
            '```go\n' +
            'for attempt := 0; attempt < 3; attempt++ {\n' +
            '    err := doWork()\n' +
            '    if err == nil {\n' +
            '        break  // 成功，退出重试\n' +
            '    }\n' +
            '    if attempt < 2 {\n' +
            '        time.Sleep(time.Duration(attempt+1) * time.Second)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**Go 1.22+ 的 for 变量语义变化**：Go 1.22 之前，`for i := 0; ...` 中的 i 在整个循环中是同一个变量，' +
            '导致 goroutine 捕获时全是最后一个值。Go 1.22 改为每次迭代创建新变量，解决了这个经典坑。' +
            '这是 Go 历史上为数不多的语义破坏性变更。\n\n' +
            '**for range 性能**：range 切片时，编译器会优化为索引访问。但 range 大 struct 切片时，' +
            'value 是副本会有拷贝开销。性能敏感场景可只取索引：`for i := range s { v := &s[i] }`。\n\n' +
            '**label 的合理使用**：label 通常用于跳出多层循环。过度使用 label 会让代码像 goto 一样难以理解。' +
            '能用提前返回或重构函数替代时，优先重构。\n\n' +
            '**for 与 channel 配合**：`for v := range ch` 会持续从 channel 读数据，直到 channel 关闭。' +
            '这是 Go 并发编程中消费端的标准模式：\n' +
            '```go\n' +
            'for v := range ch {\n' +
            '    process(v)  // ch 关闭后循环自动结束\n' +
            '}\n' +
            '```\n\n' +
            '**与 Python 的对比**：Python 用 `for x in iterable`，Go 用 `for _, x := range iter`；' +
            'Python 有 `while`、`for`、`enumerate`、`zip`，Go 统一用 `for` + `range`；' +
            'Python 的 `range(10)` 生成序列，Go 的 `range` 只能遍历已有集合（不能生成序列）。',
          examples: [
            {
              title: '求和循环',
              code: `package main

import "fmt"

func main() {
    sum := 0
    for i := 1; i <= 5; i++ {
        sum += i
    }
    fmt.Println(sum)
}`,
              explanation:
                '`for i := 1; i <= 5; i++` 循环 5 次，每次把 i 累加到 sum。1+2+3+4+5=15。输出：15。',
            },
            {
              title: 'range 遍历切片',
              code: `package main

import "fmt"

func main() {
    fruits := []string{"苹果", "香蕉", "橙子"}
    for index, fruit := range fruits {
        fmt.Println(index, fruit)
    }
}`,
              explanation:
                '`range` 同时返回索引和元素。遍历切片输出每个元素的下标和值。' +
                '输出：0 苹果、1 香蕉、2 橙子（三行）。',
            },
            {
              title: 'FizzBuzz',
              code: `package main

import "fmt"

func main() {
    for i := 1; i <= 15; i++ {
        if i%15 == 0 {
            fmt.Println("FizzBuzz")
        } else if i%3 == 0 {
            fmt.Println("Fizz")
        } else if i%5 == 0 {
            fmt.Println("Buzz")
        } else {
            fmt.Println(i)
        }
    }
}`,
              explanation:
                '经典 FizzBuzz。先判断 15（3 和 5 的公倍数），再判断 3 和 5。' +
                '输出 1、2、Fizz、4、Buzz、Fizz、7、8、Fizz、Buzz、11、Fizz、13、14、FizzBuzz（共 15 行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 for 循环计算 1 到 100 的和，输出结果（5050）。',
              starter_code: `package main

import "fmt"

func main() {
    sum := 0
    for i := 1; i <= ___; i++ {
        sum += i
    }
    fmt.Println(sum)
}`,
              expected_output: '5050',
              hints: [
                '循环上界是 100',
                'i <= 100',
                '答案: 100',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全 FizzBuzz 中能被 3 整除时输出的字符串，使 1 到 15 输出正确结果。',
              starter_code: `package main

import "fmt"

func main() {
    for i := 1; i <= 15; i++ {
        if i%3 == 0 && i%5 == 0 {
            fmt.Println("FizzBuzz")
        } else if i%3 == 0 {
            fmt.Println(___)
        } else if i%5 == 0 {
            fmt.Println("Buzz")
        } else {
            fmt.Println(i)
        }
    }
}`,
              expected_output: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',
              hints: [
                '能被 3 整除时输出哪个词',
                'FizzBuzz 中代表 3 的部分',
                '答案: "Fizz"',
              ],
            },
          ],
          realWorldScenario:
            '循环是批量处理数据的核心。在批处理任务中遍历数据集逐条处理、在 Web 服务中分页拉取 API、在 ETL 流水线中转换记录——都依赖 for 循环。range 遍历在处理 JSON 数组、数据库查询结果时无处不在。FizzBuzz 虽简单，却综合考察了循环、条件、取余，是面试中的经典热身题。',
        },
        {
          id: 'go-ch2-l3',
          title: 'switch',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'switch 是多路分支结构，比 if/else if 链更适合"一个值对应多种处理"的场景。' +
            'Go 的 switch 在设计上比 C/Java 的 switch 更安全、更灵活，去掉了几个常见的坑，同时增加了几个新特性。\n\n' +
            'Go switch 的核心改进：**case 默认不穿透**（no fallthrough）。在 C/Java 中，case 匹配后若不写 break，' +
            '会继续执行下一个 case 的代码，这是无数 bug 的根源。Go 反转了这个默认行为——case 执行完自动跳出，' +
            '需要穿透时显式写 `fallthrough`。这一改动让 switch 的行为更符合直觉，也消忘了忘记 break 的 bug。\n\n' +
            'Go switch 的其他增强：**多值匹配**（`case 1, 2, 3:`）、**无表达式 switch**（`switch { case cond: }`，' +
            '相当于 if/else if 链但更整洁）、**初始化语句**（`switch x := f(); x { }`）、**类型 switch**（' +
            '配合 interface 做类型断言）。这些特性让 switch 成为 Go 中比 if 更强大的分支工具。\n\n' +
            'switch 适合"多分支选择"，if 适合"少量条件判断"。经验法则：超过 3 个 else if 时，改用 switch。' +
            'switch 的 case 标签更醒目，匹配逻辑更清晰，且未来新增分支不会破坏现有条件顺序。\n\n' +
            '## 语法说明\n\n' +
            '**switch 的五种形式**：\n\n' +
            '```go\n' +
            '// 1. 表达式 switch（最常见）\n' +
            'switch 表达式 {\n' +
            'case 值1:\n' +
            '    // 表达式 == 值1 时执行\n' +
            'case 值2, 值3:    // 多值匹配\n' +
            '    // 表达式 == 值2 或 值3\n' +
            'default:\n' +
            '    // 所有 case 都不匹配\n' +
            '}\n\n' +
            '// 2. 无表达式 switch（条件分支）\n' +
            'switch {\n' +
            'case 条件1:\n' +
            '    // 条件1 为 true\n' +
            'case 条件2:\n' +
            '    // 条件2 为 true\n' +
            'default:\n' +
            '    // 所有条件都为 false\n' +
            '}\n\n' +
            '// 3. 带初始化语句\n' +
            'switch x := getValue(); x {\n' +
            'case 1:\n' +
            '    // x 作用域限于 switch\n' +
            '}\n\n' +
            '// 4. 类型 switch（配合 interface）\n' +
            'var i interface{} = "hello"\n' +
            'switch v := i.(type) {\n' +
            'case string:\n' +
            '    fmt.Println("字符串:", v)\n' +
            'case int:\n' +
            '    fmt.Println("整数:", v)\n' +
            'default:\n' +
            '    fmt.Println("未知类型")\n' +
            '}\n\n' +
            '// 5. fallthrough 强制穿透\n' +
            'switch x {\n' +
            'case 1:\n' +
            '    doA()\n' +
            '    fallthrough   // 强制执行下一个 case 的代码\n' +
            'case 2:\n' +
            '    doB()\n' +
            '}\n' +
            '```\n\n' +
            '| switch 形式 | 用途 | 等价于 |\n' +
            '|------------|------|--------|\n' +
            '| 表达式 switch | 一个值多分支 | if/else if 等值判断 |\n' +
            '| 无表达式 switch | 多条件分支 | if/else if 条件判断 |\n' +
            '| 带初始化 switch | 局部变量 + 分支 | if init; cond |\n' +
            '| 类型 switch | interface 类型断言 | if v, ok := x.(T) |\n' +
            '| fallthrough | 强制穿透 | C/Java 默认行为 |\n\n' +
            '**case 语法规则**：\n\n' +
            '```go\n' +
            '// 1. 多值匹配，逗号分隔\n' +
            'case 1, 2, 3:\n\n' +
            '// 2. case 可以是表达式（编译期常量或运行时值都行）\n' +
            'case len(s) > 10:\n\n' +
            '// 3. case 后不需要 break（自动跳出）\n' +
            'case 1:\n' +
            '    doA()\n' +
            '    // 自动跳出，不会执行 case 2\n' +
            'case 2:\n' +
            '    doB()\n\n' +
            '// 4. fallthrough 强制执行下一个 case（无条件）\n' +
            'case 1:\n' +
            '    doA()\n' +
            '    fallthrough  // 执行 case 2 的代码，即使值不匹配\n' +
            'case 2:\n' +
            '    doB()\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：基本 switch 与多值匹配**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    // 基本 switch\n' +
            '    day := 3\n' +
            '    switch day {\n' +
            '    case 1:\n' +
            '        fmt.Println("星期一")\n' +
            '    case 2:\n' +
            '        fmt.Println("星期二")\n' +
            '    case 3:\n' +
            '        fmt.Println("星期三")\n' +
            '    case 4, 5:\n' +
            '        fmt.Println("星期四或五")\n' +
            '    default:\n' +
            '        fmt.Println("周末")\n' +
            '    }\n\n' +
            '    // 季节判断（多值匹配）\n' +
            '    month := 7\n' +
            '    switch month {\n' +
            '    case 3, 4, 5:\n' +
            '        fmt.Println("春")\n' +
            '    case 6, 7, 8:\n' +
            '        fmt.Println("夏")\n' +
            '    case 9, 10, 11:\n' +
            '        fmt.Println("秋")\n' +
            '    case 12, 1, 2:\n' +
            '        fmt.Println("冬")\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：无表达式 switch 与初始化语句**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    // 无表达式 switch：成绩评定\n' +
            '    score := 85\n' +
            '    switch {\n' +
            '    case score >= 90:\n' +
            '        fmt.Println("A 优秀")\n' +
            '    case score >= 80:\n' +
            '        fmt.Println("B 良好")\n' +
            '    case score >= 60:\n' +
            '        fmt.Println("C 及格")\n' +
            '    default:\n' +
            '        fmt.Println("D 不及格")\n' +
            '    }\n\n' +
            '    // 带初始化的 switch\n' +
            '    switch n := 15; {\n' +
            '    case n < 0:\n' +
            '        fmt.Println("负数")\n' +
            '    case n == 0:\n' +
            '        fmt.Println("零")\n' +
            '    case n < 100:\n' +
            '        fmt.Println("小正数")\n' +
            '    default:\n' +
            '        fmt.Println("大正数")\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：类型 switch 与 fallthrough**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func describe(i interface{}) string {\n' +
            '    // 类型 switch：自动断言并绑定变量\n' +
            '    switch v := i.(type) {\n' +
            '    case int:\n' +
            '        return fmt.Sprintf("整数 %d", v)\n' +
            '    case string:\n' +
            '        return fmt.Sprintf("字符串 %q（长度 %d）", v, len(v))\n' +
            '    case bool:\n' +
            '        if v {\n' +
            '            return "真"\n' +
            '        }\n' +
            '        return "假"\n' +
            '    case nil:\n' +
            '        return "nil"\n' +
            '    default:\n' +
            '        return fmt.Sprintf("未知类型 %T", v)\n' +
            '    }\n' +
            '}\n\n' +
            'func main() {\n' +
            '    fmt.Println(describe(42))\n' +
            '    fmt.Println(describe("hello"))\n' +
            '    fmt.Println(describe(true))\n' +
            '    fmt.Println(describe(nil))\n' +
            '    fmt.Println(describe(3.14))\n\n' +
            '    // fallthrough 演示\n' +
            '    x := 1\n' +
            '    switch x {\n' +
            '    case 1:\n' +
            '        fmt.Print("一 ")\n' +
            '        fallthrough\n' +
            '    case 2:\n' +
            '        fmt.Print("二 ")\n' +
            '        fallthrough\n' +
            '    case 3:\n' +
            '        fmt.Print("三")\n' +
            '    }\n' +
            '    // 输出：一 二 三\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **case 默认不穿透**：与 C/Java 不同，Go 的 case 执行完自动跳出，不需要 break。' +
            '这是 Go 对 C 设计的改进，消除了忘记 break 的经典 bug。需要穿透用 `fallthrough`。\n\n' +
            '2. **fallthrough 是无条件穿透**：`fallthrough` 会直接执行下一个 case 的代码体，' +
            '**不会判断下一个 case 的条件**。这与 C 的隐式穿透语义一致，但需要显式声明，更安全。\n\n' +
            '3. **fallthrough 必须是 case 块的最后一条语句**：不能在 fallthrough 后写代码，编译错误。' +
            '也不能用在类型 switch 中。\n\n' +
            '4. **case 值不需要是常量**：Go 的 case 可以是运行时表达式，如 `case len(s) > 10:`。' +
            'C/Java 的 case 只能是编译期常量。\n\n' +
            '5. **case 值类型必须与 switch 表达式类型匹配**：`switch x` 中 x 是 int，case 就必须是 int。' +
            '不同类型会编译错误。\n\n' +
            '6. **default 可省略**：如果没有 default 且所有 case 都不匹配，switch 直接结束，什么都不执行。' +
            'default 通常用于错误处理或兜底逻辑。\n\n' +
            '7. **case 块不需要花括号**：case 后直接写代码，不需要 `{ }`。但 case 之间是独立作用域，' +
            '一个 case 中声明的变量在另一个 case 中不可见。\n\n' +
            '8. **类型 switch 的变量绑定**：`switch v := i.(type)` 中 v 在每个 case 中自动绑定对应类型。' +
            '在 `case int:` 中 v 是 int，在 `case string:` 中 v 是 string，无需手动断言。\n\n' +
            '9. **无表达式 switch 的 case 必须是布尔表达式**：`switch { case x > 0: }`，case 后写条件。' +
            '第一个为 true 的 case 被执行，后续不再判断。\n\n' +
            '## 实际应用\n\n' +
            '**HTTP 方法路由**：根据请求方法分发：\n\n' +
            '```go\n' +
            'func handler(w http.ResponseWriter, r *http.Request) {\n' +
            '    switch r.Method {\n' +
            '    case "GET":\n' +
            '        getHandler(w, r)\n' +
            '    case "POST":\n' +
            '        createHandler(w, r)\n' +
            '    case "PUT":\n' +
            '        updateHandler(w, r)\n' +
            '    case "DELETE":\n' +
            '        deleteHandler(w, r)\n' +
            '    default:\n' +
            '        http.Error(w, "方法不支持", 405)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**错误码映射**：根据错误码返回不同 HTTP 状态：\n\n' +
            '```go\n' +
            'func statusCode(err error) int {\n' +
            '    switch err {\n' +
            '    case ErrNotFound:\n' +
            '        return 404\n' +
            '    case ErrUnauthorized:\n' +
            '        return 401\n' +
            '    case ErrForbidden:\n' +
            '        return 403\n' +
            '    case ErrConflict:\n' +
            '        return 409\n' +
            '    default:\n' +
            '        return 500\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**阶梯定价**：用无表达式 switch 实现阶梯计费：\n\n' +
            '```go\n' +
            'func shippingCost(weight float64) float64 {\n' +
            '    switch {\n' +
            '    case weight <= 0:\n' +
            '        return 0\n' +
            '    case weight <= 1:\n' +
            '        return 10  // 1kg 内 10 元\n' +
            '    case weight <= 5:\n' +
            '        return 10 + (weight-1)*5  // 超出部分每 kg 5 元\n' +
            '    case weight <= 20:\n' +
            '        return 30 + (weight-5)*3\n' +
            '    default:\n' +
            '        return 75 + (weight-20)*2\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**switch 与 if/else if 的性能**：在 Go 中，switch 和 if/else if 性能基本相同。' +
            '编译器可能对 case 值是常量的 switch 做跳转表优化，但差异极小。选择依据是可读性而非性能。\n\n' +
            '**fallthrough 的罕见用法**：fallthrough 在实践中很少用，因为通常意味着逻辑设计有问题。' +
            '一个合理场景是"前缀处理"：case 1 处理通用逻辑后 fallthrough 到 case 2 处理特定逻辑。\n\n' +
            '**类型 switch 与 errors.As**：Go 1.13+ 的错误处理常用类型 switch：\n' +
            '```go\n' +
            'var pathErr *fs.PathError\n' +
            'switch {\n' +
            'case errors.As(err, &pathErr):\n' +
            '    // 文件系统错误\n' +
            'case errors.Is(err, context.Canceled):\n' +
            '    // 取消错误\n' +
            'default:\n' +
            '    // 其他错误\n' +
            '}\n' +
            '```\n\n' +
            '**switch 跨 case 声明变量**：每个 case 是独立作用域，可以声明同名变量：\n' +
            '```go\n' +
            'switch x {\n' +
            'case 1:\n' +
            '    result := computeA()\n' +
            '    fmt.Println(result)\n' +
            'case 2:\n' +
            '    result := computeB()  // 合法，独立作用域\n' +
            '    fmt.Println(result)\n' +
            '}\n' +
            '```\n\n' +
            '**与 Python 的对比**：Python 3.10 之前没有 switch，用 if/elif 或字典分发；' +
            'Python 3.10+ 的 match/case 类似 Go 的 switch 但更强（支持结构匹配）；' +
            'Go 的 case 不穿透，Python 的 match 也是；Go 有类型 switch，Python 用 isinstance + if。',
          examples: [
            {
              title: '基本 switch',
              code: `package main

import "fmt"

func main() {
    day := 3
    switch day {
    case 1:
        fmt.Println("星期一")
    case 2:
        fmt.Println("星期二")
    case 3:
        fmt.Println("星期三")
    default:
        fmt.Println("其他")
    }
}`,
              explanation:
                'switch 匹配 day 的值，命中 case 3 输出"星期三"后自动跳出，不需要 break。' +
                '输出：星期三。',
            },
            {
              title: '多值 case',
              code: `package main

import "fmt"

func main() {
    month := 7
    switch month {
    case 3, 4, 5:
        fmt.Println("春")
    case 6, 7, 8:
        fmt.Println("夏")
    case 9, 10, 11:
        fmt.Println("秋")
    case 12, 1, 2:
        fmt.Println("冬")
    }
}`,
              explanation:
                '一个 case 用逗号匹配多个值。7 属于 6,7,8（夏季）。输出：夏。' +
                '不需要 default 时可以省略。',
            },
            {
              title: '无表达式 switch',
              code: `package main

import "fmt"

func main() {
    score := 85
    switch {
    case score >= 90:
        fmt.Println("A")
    case score >= 80:
        fmt.Println("B")
    case score >= 60:
        fmt.Println("C")
    default:
        fmt.Println("D")
    }
}`,
              explanation:
                'switch 不带表达式时，每个 case 是一个布尔条件，从上到下匹配第一个为 true 的。' +
                '85 >= 80 输出 B。相当于 if/else if 但更整洁。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全夏季分支的输出字符串，使 month=7 输出 "夏"。',
              starter_code: `package main

import "fmt"

func main() {
    month := 7
    switch month {
    case 3, 4, 5:
        fmt.Println("春")
    case 6, 7, 8:
        fmt.Println(___)
    case 9, 10, 11:
        fmt.Println("秋")
    case 12, 1, 2:
        fmt.Println("冬")
    }
}`,
              expected_output: '夏',
              hints: [
                '夏季对应哪个汉字',
                '夏天',
                '答案: "夏"',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全无表达式 switch 的及格分数线，使 score=75 输出 "C"。',
              starter_code: `package main

import "fmt"

func main() {
    score := 75
    switch {
    case score >= 90:
        fmt.Println("A")
    case score >= 80:
        fmt.Println("B")
    case score >= ___:
        fmt.Println("C")
    default:
        fmt.Println("D")
    }
}`,
              expected_output: 'C',
              hints: [
                '及格线通常是 60 分',
                '75 >= 60 才会输出 C',
                '答案: 60',
              ],
            },
          ],
          realWorldScenario:
            'switch 在处理状态机、路由分发、错误码映射时极为常用。例如 Web 框架根据 HTTP 方法（GET/POST/PUT/DELETE）分发到不同处理函数；游戏服务器根据玩家状态执行不同逻辑；API 网关根据错误码返回不同的 HTTP 响应。无表达式 switch 让复杂的多条件业务规则（如阶梯定价、会员等级）比 if/else 更清晰可维护。',
        },
        {
          id: 'go-ch2-l4',
          title: 'defer',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`defer` 是 Go 独有的延迟执行机制：被 defer 的函数调用会被压入栈中，在**当前函数返回时**才执行。' +
            '这个看似简单的特性解决了资源管理中的一个核心难题——如何确保资源在任何返回路径下都被正确释放。\n\n' +
            '在 C/Java 等语言中，资源释放依赖程序员手动在每个 return 前写 close/unlock，极易遗漏。' +
            'Go 的 defer 把"释放"紧跟"获取"声明，无论函数有 1 个还是 100 个 return，defer 都会执行。' +
            '这种"获取-延迟释放"配对的写法让资源泄漏几乎不可能发生，是 Go 代码高可靠性的重要保障。\n\n' +
            'defer 的执行时机：**函数返回时**，无论是正常 return、panic 导致的崩溃，还是 runtime 调用。' +
            'defer 在 return 语句之后、函数真正返回之前执行。这意味着 defer 可以修改命名返回值，' +
            '也可以用于 panic 恢复（配合 recover）。\n\n' +
            '多个 defer 按 **LIFO（后进先出）**顺序执行——像栈一样，最后 defer 的最先执行。' +
            '这个设计很合理：通常后获取的资源依赖先获取的资源，释放时要反向（先关文件再释放锁，' +
            '不能反过来）。LIFO 顺序天然匹配资源的依赖关系。\n\n' +
            '## 语法说明\n\n' +
            '**defer 基本语法**：\n\n' +
            '```go\n' +
            'defer 函数调用   // 延迟到函数返回时执行\n\n' +
            '// 1. defer 内置函数\n' +
            'defer fmt.Println("bye")\n' +
            'defer file.Close()\n' +
            'defer mu.Unlock()\n\n' +
            '// 2. defer 自定义函数\n' +
            'defer cleanup()\n\n' +
            '// 3. defer 匿名函数（闭包）\n' +
            'defer func() {\n' +
            '    fmt.Println("清理:", resource)\n' +
            '}()\n\n' +
            '// 4. defer 带参数（参数立即求值）\n' +
            'defer fmt.Println("x =", x)  // x 的值在 defer 时就固定\n\n' +
            '// 5. defer 方法\n' +
            'defer db.Close()  // defer 也可以是方法调用\n' +
            '```\n\n' +
            '| defer 用法 | 语法 | 参数求值时机 |\n' +
            '|-----------|------|--------------|\n' +
            '| 函数调用 | `defer f()` | defer 时 |\n' +
            '| 方法调用 | `defer obj.M()` | defer 时 |\n' +
            '| 闭包 | `defer func() { }()` | 执行时 |\n' +
            '| 带参数 | `defer f(x)` | defer 时固定 x |\n' +
            '| 无参闭包 | `defer func() { use(x) }()` | 执行时读 x |\n\n' +
            '**defer 执行规则**：\n\n' +
            '```go\n' +
            'func example() {\n' +
            '    // 1. 参数立即求值\n' +
            '    x := 10\n' +
            '    defer fmt.Println("A:", x)  // 输出 10，即使 x 后续改变\n' +
            '    x = 20\n' +
            '    defer fmt.Println("B:", x)  // 输出 20\n\n' +
            '    // 2. 闭包延迟读取\n' +
            '    y := 1\n' +
            '    defer func() { fmt.Println("C:", y) }()  // 输出 2，读取最终值\n' +
            '    y = 2\n\n' +
            '    // 3. LIFO 顺序：C, B, A\n' +
            '}\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：LIFO 执行顺序演示**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    fmt.Println("开始")\n' +
            '    defer fmt.Println("延迟1")\n' +
            '    defer fmt.Println("延迟2")\n' +
            '    defer fmt.Println("延迟3")\n' +
            '    fmt.Println("结束")\n' +
            '    // 输出顺序：开始 结束 延迟3 延迟2 延迟1\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：参数立即求值 vs 闭包延迟读取**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    x := 10\n' +
            '    // 参数在 defer 时立即求值，固定为 10\n' +
            '    defer fmt.Println("参数求值:", x)\n' +
            '    x = 20\n\n' +
            '    // 闭包在执行时才读取 y\n' +
            '    y := 1\n' +
            '    defer func() {\n' +
            '        fmt.Println("闭包读取:", y)  // 输出 2\n' +
            '    }()\n' +
            '    y = 2\n\n' +
            '    fmt.Println("当前 x =", x)  // 20\n' +
            '    // 返回时输出：闭包读取: 2，参数求值: 10\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：资源管理实战（文件、锁、recover）**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "os"\n' +
            '    "sync"\n' +
            ')\n\n' +
            '// 文件操作：defer 保证文件一定关闭\n' +
            'func readFile(path string) error {\n' +
            '    file, err := os.Open(path)\n' +
            '    if err != nil {\n' +
            '        return err  // 即使这里返回，后续无需担心文件关闭\n' +
            '    }\n' +
            '    defer file.Close()  // 紧跟 Open，保证任何路径都关闭\n\n' +
            '    // 读取并处理...\n' +
            '    return nil\n' +
            '}\n\n' +
            '// 锁操作：defer 保证解锁\n' +
            'var mu sync.Mutex\n' +
            'var counter int\n\n' +
            'func increment() {\n' +
            '    mu.Lock()\n' +
            '    defer mu.Unlock()  // 任何返回路径都解锁，避免死锁\n' +
            '    counter++\n' +
            '    if counter > 100 {\n' +
            '        return  // 即使提前返回，锁也会释放\n' +
            '    }\n' +
            '}\n\n' +
            '// panic 恢复：defer + recover\n' +
            'func safeRun() {\n' +
            '    defer func() {\n' +
            '        if r := recover(); r != nil {\n' +
            '            fmt.Println("捕获 panic:", r)\n' +
            '        }\n' +
            '    }()\n' +
            '    panic("出错了！")\n' +
            '}\n\n' +
            'func main() {\n' +
            '    safeRun()  // 输出：捕获 panic: 出错了！\n' +
            '    fmt.Println("继续执行")\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **defer 参数立即求值**：`defer fmt.Println(x)` 中的 x 在 defer 时就被计算并固定。' +
            '如果想在执行时读取最新值，用闭包：`defer func() { fmt.Println(x) }()`。\n\n' +
            '2. **defer 在 return 之后执行**：defer 不会改变 return 语句的执行，但可以修改命名返回值。' +
            '```go\n' +
            'func f() (result int) {\n' +
            '    defer func() { result *= 2 }()  // 修改命名返回值\n' +
            '    return 5  // 先返回 5，defer 把 result 改成 10，最终返回 10\n' +
            '}\n' +
            '```\n\n' +
            '3. **defer 有性能开销**：defer 会记录调用信息到 defer 链表，有微小开销。' +
            'Go 1.14+ 对 defer 做了内联优化，开销很小。但极端性能敏感的循环中仍应避免 defer。\n\n' +
            '4. **defer 在循环中要小心**：循环中 defer 不会在每次迭代后执行，而是累积到函数返回时一起执行，' +
            '可能导致资源长时间不释放。应在循环体内用闭包包裹：\n' +
            '```go\n' +
            'for _, path := range paths {\n' +
            '    func() {\n' +
            '        f, _ := os.Open(path)\n' +
            '        defer f.Close()  // 在闭包返回时关闭\n' +
            '        process(f)\n' +
            '    }()\n' +
            '}\n' +
            '```\n\n' +
            '5. **defer 不能在 nil 指针上调用方法**：`var p *T; defer p.Close()` 会 panic。' +
            '要先判空：`if p != nil { defer p.Close() }`。\n\n' +
            '6. **defer 顺序是 LIFO**：后 defer 的先执行。资源释放顺序要与获取顺序相反。' +
            '通常写代码时按获取顺序 defer，自动得到正确的释放顺序。\n\n' +
            '7. **defer 的参数会被复制**：`defer f(x)` 中 x 是值拷贝。如果 x 是指针或引用类型，' +
            '修改指向的内容会影响 defer 中的值。\n\n' +
            '8. **recover 只能在 defer 函数中有效**：直接调用 recover() 返回 nil。' +
            '必须 `defer func() { recover() }()` 这种形式才能捕获 panic。\n\n' +
            '## 实际应用\n\n' +
            '**文件操作**：defer 是文件操作的标准搭档：\n\n' +
            '```go\n' +
            'func processFile(path string) ([]byte, error) {\n' +
            '    file, err := os.Open(path)\n' +
            '    if err != nil {\n' +
            '        return nil, err\n' +
            '    }\n' +
            '    defer file.Close()  // 保证关闭\n\n' +
            '    return io.ReadAll(file)\n' +
            '}\n' +
            '```\n\n' +
            '**数据库事务**：defer Rollback 防止连接泄漏：\n\n' +
            '```go\n' +
            'func transferMoney(db *sql.DB, from, to int, amount float64) error {\n' +
            '    tx, err := db.Begin()\n' +
            '    if err != nil {\n' +
            '        return err\n' +
            '    }\n' +
            '    defer tx.Rollback()  // 失败时回滚，成功时 Commit 后 Rollback 无害\n\n' +
            '    // 执行 SQL...\n' +
            '    if err := tx.Commit(); err != nil {\n' +
            '        return err\n' +
            '    }\n' +
            '    return nil\n' +
            '}\n' +
            '```\n\n' +
            '**HTTP 中间件计时**：defer 在请求开始时记录时间，结束时计算耗时：\n\n' +
            '```go\n' +
            'func timingMiddleware(next http.Handler) http.Handler {\n' +
            '    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n' +
            '        start := time.Now()\n' +
            '        defer func() {\n' +
            '            log.Printf("%s %s 耗时 %v", r.Method, r.URL.Path, time.Since(start))\n' +
            '        }()\n' +
            '        next.ServeHTTP(w, r)\n' +
            '    })\n' +
            '}\n' +
            '```\n\n' +
            '**并发安全**：defer 保证锁释放，避免死锁：\n\n' +
            '```go\n' +
            'var (\n' +
            '    mu      sync.Mutex\n' +
            '    balance int\n' +
            ')\n\n' +
            'func deposit(amount int) {\n' +
            '    mu.Lock()\n' +
            '    defer mu.Unlock()  // 即使 panic 也会解锁\n' +
            '    balance += amount\n' +
            '}\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**defer 实现原理**：Go 编译器把 defer 转换为对 `runtime.deferproc` 的调用，' +
            '把 defer 记录压入 goroutine 的 defer 链表。函数返回时调用 `runtime.deferreturn` 按链表逆序执行。' +
            'Go 1.14+ 引入开放编码（open-coded defer），对常见场景做内联优化，几乎零开销。\n\n' +
            '**defer 与 panic/recover 的关系**：panic 会沿调用栈向上传播，每层的 defer 都会执行。' +
            'recover 只能在 defer 函数中调用，用于"捕获" panic 阻止传播。这是 Go 错误恢复的唯一机制：\n' +
            '```go\n' +
            'func safeDiv(a, b int) (result int, err error) {\n' +
            '    defer func() {\n' +
            '        if r := recover(); r != nil {\n' +
            '            err = fmt.Errorf("除零错误")\n' +
            '        }\n' +
            '    }()\n' +
            '    return a / b, nil  // b=0 时 panic，被 defer 捕获\n' +
            '}\n' +
            '```\n\n' +
            '**defer 修改命名返回值**：可以在 defer 中修改命名返回值，常用于错误包装：\n' +
            '```go\n' +
            'func operation() (err error) {\n' +
            '    defer func() {\n' +
            '        if err != nil {\n' +
            '            err = fmt.Errorf("operation 失败: %w", err)  // 包装错误\n' +
            '        }\n' +
            '    }()\n' +
            '    // ...\n' +
            '    return nil\n' +
            '}\n' +
            '```\n\n' +
            '**Go 1.21+ 的 log.Cleanup**：标准库新增 log/slog 包，配合 defer 做日志清理：\n' +
            '```go\n' +
            'defer logger.Sync()  // 确保日志刷新到磁盘\n' +
            '```\n\n' +
            '**与 Python 的对比**：Python 用 try/finally 实现类似效果，但 finally 块需要包裹整个函数体；' +
            'Go 的 defer 紧跟资源获取，更简洁。Python 的 with 语句（上下文管理器）是另一种资源管理方式，' +
            'Go 没有直接对应物，但 defer 模式可以模拟。',
          examples: [
            {
              title: 'defer 的 LIFO 顺序',
              code: `package main

import "fmt"

func main() {
    fmt.Println("开始")
    defer fmt.Println("延迟1")
    defer fmt.Println("延迟2")
    defer fmt.Println("延迟3")
    fmt.Println("结束")
}`,
              explanation:
                'defer 在 main 返回时按 LIFO 顺序执行：延迟3、延迟2、延迟1。' +
                '输出顺序：开始、结束、延迟3、延迟2、延迟1（5 行）。',
            },
            {
              title: 'defer 参数立即求值',
              code: `package main

import "fmt"

func main() {
    x := 10
    defer fmt.Println("defer 时 x =", x)
    x = 20
    fmt.Println("main 时 x =", x)
}`,
              explanation:
                'defer 时 x 的值 10 被立即固定，即使之后 x 改成 20，defer 仍输出 10。' +
                '输出：main 时 x = 20，然后 defer 时 x = 10（2 行）。',
            },
            {
              title: 'defer 闭包与循环',
              code: `package main

import "fmt"

func main() {
    for i := 0; i < 3; i++ {
        defer func(n int) {
            fmt.Println(n)
        }(i)
    }
}`,
              explanation:
                '通过把 i 作为参数传入匿名函数，每个 defer 捕获当时的 i 值。' +
                'main 返回时按 LIFO 输出：2、1、0（3 行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '为第二条打印加上 defer 关键字，使 "2" 延迟到 main 结束时输出。最终输出 "1\\n3\\n4\\n5\\n2"。',
              starter_code: `package main

import "fmt"

func main() {
    fmt.Println("1")
    ___ fmt.Println("2")
    fmt.Println("3")
    fmt.Println("4")
    fmt.Println("5")
}`,
              expected_output: '1\n3\n4\n5\n2',
              hints: [
                '哪个关键字让函数延迟到返回时执行',
                'defer 后跟函数调用',
                '答案: defer',
              ],
            },
            {
              type: 'output-match',
              prompt: 'defer 参数立即求值：x 初始为 10，defer 打印 x，之后改 x=20。补全 defer 关键字，使最终输出 "x = 20\\nx = 10"。',
              starter_code: `package main

import "fmt"

func main() {
    x := 10
    ___ fmt.Println("x =", x)
    x = 20
    fmt.Println("x =", x)
}`,
              expected_output: 'x = 20\nx = 10',
              hints: [
                '让第一行打印延迟到函数返回',
                '用 defer 关键字',
                '答案: defer',
              ],
            },
          ],
          realWorldScenario:
            'defer 是 Go 资源管理的核心机制。在文件操作中 `defer file.Close()` 确保文件必定关闭；在数据库事务中 `defer tx.Rollback()` 防止连接泄漏；在并发编程中 `defer mu.Unlock()` 保证锁一定释放，避免死锁。无论函数从哪条分支返回甚至 panic，defer 都会执行，这让 Go 代码在异常路径下依然可靠，是构建高可用服务的基石。',
        },
      ],
    },
    // ================================================================
    // 第 3 章：函数
    // ================================================================
    {
      id: 'go-ch3',
      title: '函数',
      order: 2,
      lessons: [
        {
          id: 'go-ch3-l1',
          title: '函数定义与多返回值',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '函数是组织代码、复用逻辑的基本单元。Go 的函数设计简洁而强大：支持多返回值、命名返回值、' +
            '闭包、可变参数，同时保持语法清晰。函数在 Go 中是**一等公民**——可以赋值给变量、作为参数传递、' +
            '作为返回值，这让 Go 能写出函数式风格的代码。\n\n' +
            'Go 函数的语法：`func 函数名(参数列表) 返回类型 { 函数体 }`。参数和返回值都必须声明类型，' +
            'Go 是静态类型语言。多个同类型参数可简写：`func add(a, b int) int`。这种简写在多参数函数中' +
            '能显著减少冗余。\n\n' +
            'Go 的招牌特性是**多返回值**。一个函数可以返回多个值，最经典的模式是 `(result, error)`：' +
            '成功返回结果和 nil，失败返回零值和 error。这取代了其他语言中的异常机制——Go 显式地把错误' +
            '作为值返回，强制调用方处理。这种"错误即值"的设计是 Go 错误处理哲学的核心，' +
            '`if err != nil` 是 Go 代码中最常见的模式。\n\n' +
            '命名返回值（named return）是 Go 的另一个特色：在函数签名中声明返回变量名，函数体中直接赋值，' +
            '最后用裸 `return` 返回。命名返回值在函数开头就被初始化为零值，适合复杂函数让返回意图更清晰，' +
            '也方便 defer 修改返回值。但过度使用裸 return 会让返回逻辑不明显，应谨慎。\n\n' +
            '递归是函数调用自身的技巧，常用于树形结构遍历、分治算法。Go 的递归与数学定义高度一致，' +
            '但要注意栈深度（默认 1GB，足够深）和重复计算（可用记忆化优化）。\n\n' +
            '## 语法说明\n\n' +
            '**函数定义语法**：\n\n' +
            '```go\n' +
            '// 1. 基本函数\n' +
            'func add(a, b int) int {\n' +
            '    return a + b\n' +
            '}\n\n' +
            '// 2. 多返回值\n' +
            'func divmod(a, b int) (int, int) {\n' +
            '    return a / b, a % b\n' +
            '}\n\n' +
            '// 3. 命名返回值\n' +
            'func split(sum int) (x, y int) {\n' +
            '    x = sum * 4 / 9\n' +
            '    y = sum - x\n' +
            '    return  // 裸 return，使用当前 x、y 的值\n' +
            '}\n\n' +
            '// 4. 可变参数\n' +
            'func sum(nums ...int) int {\n' +
            '    total := 0\n' +
            '    for _, n := range nums {\n' +
            '        total += n\n' +
            '    }\n' +
            '    return total\n' +
            '}\n\n' +
            '// 5. 无返回值\n' +
            'func greet(name string) {\n' +
            '    fmt.Println("Hello,", name)\n' +
            '}\n\n' +
            '// 6. 函数作为参数（高阶函数）\n' +
            'func apply(f func(int) int, x int) int {\n' +
            '    return f(x)\n' +
            '}\n\n' +
            '// 7. 函数作为返回值\n' +
            'func multiplier(factor int) func(int) int {\n' +
            '    return func(x int) int {\n' +
            '        return x * factor\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '| 函数形式 | 语法 | 用途 |\n' +
            '|----------|------|------|\n' +
            '| 普通函数 | `func f(a int) int { }` | 基础形式 |\n' +
            '| 多返回值 | `func f() (int, error) { }` | 结果+错误模式 |\n' +
            '| 命名返回 | `func f() (x int) { return }` | 复杂函数、defer 修改 |\n' +
            '| 可变参数 | `func f(nums ...int) { }` | 任意数量参数 |\n' +
            '| 无返回 | `func f() { }` | 副作用操作 |\n' +
            '| 高阶函数 | `func f(g func()) { }` | 回调、策略模式 |\n' +
            '| 闭包 | `func() { }` 匿名函数 | 状态捕获 |\n\n' +
            '**多返回值与错误处理模式**：\n\n' +
            '```go\n' +
            '// 标准错误返回模式\n' +
            'func parseAge(s string) (int, error) {\n' +
            '    age, err := strconv.Atoi(s)\n' +
            '    if err != nil {\n' +
            '        return 0, fmt.Errorf("无效年龄: %w", err)\n' +
            '    }\n' +
            '    if age < 0 || age > 150 {\n' +
            '        return 0, errors.New("年龄超出范围")\n' +
            '    }\n' +
            '    return age, nil\n' +
            '}\n\n' +
            '// 调用\n' +
            'age, err := parseAge("25")\n' +
            'if err != nil {\n' +
            '    log.Fatal(err)\n' +
            '}\n' +
            '// 用 _ 忽略不需要的返回值\n' +
            '_, err = parseAge("abc")  // 只关心错误\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：基本函数、多返回值与命名返回值**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func add(a, b int) int { return a + b }\n\n' +
            '// 多返回值：商和余数\n' +
            'func divmod(a, b int) (int, int) {\n' +
            '    return a / b, a % b\n' +
            '}\n\n' +
            '// 命名返回值\n' +
            'func split(sum int) (x, y int) {\n' +
            '    x = sum * 4 / 9\n' +
            '    y = sum - x\n' +
            '    return  // 裸 return\n' +
            '}\n\n' +
            'func main() {\n' +
            '    fmt.Println("3+4 =", add(3, 4))\n\n' +
            '    q, r := divmod(17, 5)\n' +
            '    fmt.Printf("17÷5 = %d 余 %d\\n", q, r)\n\n' +
            '    x, y := split(17)\n' +
            '    fmt.Printf("split(17) = %d, %d\\n", x, y)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：函数作为值与高阶函数**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "strings"\n' +
            ')\n\n' +
            '// 函数作为参数\n' +
            'func apply(nums []int, f func(int) int) []int {\n' +
            '    result := make([]int, len(nums))\n' +
            '    for i, n := range nums {\n' +
            '        result[i] = f(n)\n' +
            '    }\n' +
            '    return result\n' +
            '}\n\n' +
            'func main() {\n' +
            '    nums := []int{1, 2, 3, 4, 5}\n\n' +
            '    // 传入匿名函数\n' +
            '    squares := apply(nums, func(n int) int { return n * n })\n' +
            '    fmt.Println("平方:", squares)\n\n' +
            '    doubles := apply(nums, func(n int) int { return n * 2 })\n' +
            '    fmt.Println("翻倍:", doubles)\n\n' +
            '    // 函数赋值给变量\n' +
            '    upper := strings.ToUpper\n' +
            '    fmt.Println(upper("hello"))\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：递归与错误处理**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "errors"\n' +
            '    "fmt"\n' +
            ')\n\n' +
            '// 斐波那契递归\n' +
            'func fibonacci(n int) int {\n' +
            '    if n < 2 {\n' +
            '        return n\n' +
            '    }\n' +
            '    return fibonacci(n-1) + fibonacci(n-2)\n' +
            '}\n\n' +
            '// 带错误的除法\n' +
            'func safeDiv(a, b float64) (float64, error) {\n' +
            '    if b == 0 {\n' +
            '        return 0, errors.New("除数不能为零")\n' +
            '    }\n' +
            '    return a / b, nil\n' +
            '}\n\n' +
            '// 阶乘递归\n' +
            'func factorial(n int) int {\n' +
            '    if n <= 1 {\n' +
            '        return 1\n' +
            '    }\n' +
            '    return n * factorial(n-1)\n' +
            '}\n\n' +
            'func main() {\n' +
            '    // 斐波那契前 10 项\n' +
            '    fmt.Print("Fib: ")\n' +
            '    for i := 0; i < 10; i++ {\n' +
            '        fmt.Printf("%d ", fibonacci(i))\n' +
            '    }\n' +
            '    fmt.Println()\n\n' +
            '    // 阶乘\n' +
            '    fmt.Println("5! =", factorial(5))\n\n' +
            '    // 安全除法\n' +
            '    if result, err := safeDiv(10, 0); err != nil {\n' +
            '        fmt.Println("错误:", err)\n' +
            '    } else {\n' +
            '        fmt.Println("结果:", result)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **多返回值必须全部接收或用 _ 忽略**：`f()` 返回 2 个值，不能只接收 1 个。' +
            '要么 `a, b := f()`，要么 `a, _ := f()`，要么 `_, _ = f()`。\n\n' +
            '2. **命名返回值的裸 return 要慎用**：在长函数中用裸 return 会让返回值不明确。' +
            '推荐在函数末尾显式 `return x, y`，或仅在函数很短时用裸 return。\n\n' +
            '3. **命名返回值会被初始化为零值**：`func f() (x int, err error)` 中 x 和 err 在函数开始时就是 0 和 nil。' +
            '可以利用这个特性简化错误返回：出错的分支只需 `return`（带零值）。\n\n' +
            '4. **函数参数是值传递**：Go 中所有参数都是值拷贝。传指针可以修改原变量，传值不会。' +
            '切片、map、channel 虽然看似引用传递，实际是传了底层数据结构的指针拷贝。\n\n' +
            '5. **递归要注意栈深度**：Go 默认栈可动态增长（从 2KB 开始），通常不会栈溢出。' +
            '但极深递归（百万级）仍可能耗尽内存。尾递归优化在 Go 中不保证，深递归应改用循环。\n\n' +
            '6. **递归的重复计算问题**：朴素斐波那契 `fib(40)` 要算几亿次，因为 fib(2)、fib(3) 被反复计算。' +
            '用记忆化（memoization）或改用迭代可大幅优化：\n' +
            '```go\n' +
            'var memo = map[int]int{}\n' +
            'func fib(n int) int {\n' +
            '    if n < 2 { return n }\n' +
            '    if v, ok := memo[n]; ok { return v }\n' +
            '    memo[n] = fib(n-1) + fib(n-2)\n' +
            '    return memo[n]\n' +
            '}\n' +
            '```\n\n' +
            '7. **函数类型显式声明**：复杂函数签名可用 `type` 定义：`type Handler func(int) error`。' +
            '这让代码更可读，也方便作为接口方法。\n\n' +
            '8. **Go 没有默认参数和命名参数**：不支持 `func f(x int = 5)` 或 `f(x=5)`。' +
            '需要默认参数的效果用可选结构体或 builder 模式模拟。\n\n' +
            '## 实际应用\n\n' +
            '**标准库的 (result, error) 模式**：几乎所有可能失败的 Go 函数都遵循这个模式：\n\n' +
            '```go\n' +
            '// 字符串转整数\n' +
            'n, err := strconv.Atoi("42")\n\n' +
            '// 打开文件\n' +
            'file, err := os.Open("config.json")\n\n' +
            '// HTTP 请求\n' +
            'resp, err := http.Get("https://api.example.com")\n\n' +
            '// JSON 解析\n' +
            'var user User\n' +
            'err := json.Unmarshal(data, &user)\n\n' +
            '// 数据库查询\n' +
            'rows, err := db.Query("SELECT * FROM users")\n' +
            '```\n\n' +
            '**HTTP Handler 函数签名**：Go 标准库的 HTTP 处理函数是函数类型的典型应用：\n\n' +
            '```go\n' +
            '// Handler 是一个函数类型\n' +
            'type HandlerFunc func(http.ResponseWriter, *http.Request)\n\n' +
            '// 自定义 handler\n' +
            'func homeHandler(w http.ResponseWriter, r *http.Request) {\n' +
            '    fmt.Fprintf(w, "欢迎！")\n' +
            '}\n\n' +
            'http.HandleFunc("/", homeHandler)\n' +
            '```\n\n' +
            '**树形结构递归遍历**：文件目录树是递归的经典场景：\n\n' +
            '```go\n' +
            'func walkDir(path string, depth int) {\n' +
            '    indent := strings.Repeat("  ", depth)\n' +
            '    entries, _ := os.ReadDir(path)\n' +
            '    for _, e := range entries {\n' +
            '        fmt.Printf("%s%s\\n", indent, e.Name())\n' +
            '        if e.IsDir() {\n' +
            '            walkDir(filepath.Join(path, e.Name()), depth+1)\n' +
            '        }\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**函数式编程风格**：Go 不是函数式语言，但支持闭包和高阶函数，能写出类似 map/filter/reduce 的代码：\n' +
            '```go\n' +
            'func Map[T, U any](s []T, f func(T) U) []U {\n' +
            '    result := make([]U, len(s))\n' +
            '    for i, v := range s {\n' +
            '        result[i] = f(v)\n' +
            '    }\n' +
            '    return result\n' +
            '}\n' +
            'squares := Map([]int{1,2,3}, func(n int) int { return n*n })\n' +
            '```\n\n' +
            '**init 函数**：每个包可以有多个 `func init()`，在包加载时自动执行，常用于注册、初始化。' +
            'init 函数无参数无返回值，不能手动调用。\n\n' +
            '**Go 1.18+ 泛型函数**：Go 支持泛型，让函数能处理多种类型：\n' +
            '```go\n' +
            'func Max[T int | float64](a, b T) T {\n' +
            '    if a > b { return a }\n' +
            '    return b\n' +
            '}\n' +
            'Max(1, 2)       // int\n' +
            'Max(1.5, 2.5)   // float64\n' +
            '```\n\n' +
            '**defer 与命名返回值配合**：defer 可以修改命名返回值，常用于错误包装：\n' +
            '```go\n' +
            'func operation() (result int, err error) {\n' +
            '    defer func() {\n' +
            '        if err != nil {\n' +
            '            result = -1  // 出错时设默认值\n' +
            '        }\n' +
            '    }()\n' +
            '    // ...\n' +
            '    return 42, nil\n' +
            '}\n' +
            '```\n\n' +
            '**与 Python 的对比**：Python 用 `def f(a, b=5, *args, **kwargs)` 支持默认参数、关键字参数；' +
            'Go 没有这些，只有可变参数。Python 用异常处理错误，Go 用多返回值。' +
            'Python 函数是对象，Go 函数也是一等公民，但 Go 的闭包语法更简洁（`func() { }()`）。',
          examples: [
            {
              title: '基本函数',
              code: `package main

import "fmt"

func add(a, b int) int {
    return a + b
}

func main() {
    fmt.Println(add(3, 4))
}`,
              explanation:
                '`func add(a, b int) int` 定义加法函数，a 和 b 都是 int 类型，返回 int。' +
                '输出：7。',
            },
            {
              title: '多返回值（商和余数）',
              code: `package main

import "fmt"

func divmod(a, b int) (int, int) {
    return a / b, a % b
}

func main() {
    q, r := divmod(17, 5)
    fmt.Println(q, r)
}`,
              explanation:
                '`divmod` 同时返回商和余数。`q, r := divmod(17, 5)` 接收两个返回值。' +
                '17/5=3 余 2。输出：3 2。',
            },
            {
              title: '斐波那契递归',
              code: `package main

import "fmt"

func fibonacci(n int) int {
    if n < 2 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

func main() {
    nums := []int{}
    for i := 0; i < 10; i++ {
        nums = append(nums, fibonacci(i))
    }
    fmt.Println(nums)
}`,
              explanation:
                '递归实现斐波那契。边界 n<2 返回 n，否则返回前两项之和。前 10 项：' +
                '0 1 1 2 3 5 8 13 21 34。输出：[0 1 1 2 3 5 8 13 21 34]。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义函数 square 返回 n 的平方，调用 square(6) 输出 36。',
              starter_code: `package main

import "fmt"

func square(n int) int {
    return n * ___
}

func main() {
    fmt.Println(square(6))
}`,
              expected_output: '36',
              hints: [
                '平方是 n 乘以自身',
                'return n * n',
                '答案: n',
              ],
            },
            {
              type: 'output-match',
              prompt: '调用 fibonacci(10) 输出第 10 项的值（55）。',
              starter_code: `package main

import "fmt"

func fibonacci(n int) int {
    if n < 2 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

func main() {
    fmt.Println(fibonacci(___))
}`,
              expected_output: '55',
              hints: [
                'fibonacci(10) 的值是多少',
                '前 10 项: 0 1 1 2 3 5 8 13 21 34，第 10 项是 55',
                '答案: 10',
              ],
            },
          ],
          realWorldScenario:
            '多返回值是 Go 后端开发的核心范式。每个可能失败的操作都返回 (result, error)：数据库查询返回 (rows, err)、HTTP 请求返回 (resp, err)、JSON 解析返回 (data, err)。这种"把错误作为值"的设计让错误处理路径清晰可见，强制开发者显式处理每一个可能的失败点。递归则常用于树形结构遍历（如解析嵌套 JSON、文件目录树）。',
        },
        {
          id: 'go-ch3-l2',
          title: '可变参数与闭包',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '可变参数（variadic）函数可以接收任意数量的参数，是 Go 处理"不确定个数参数"的标准方式。' +
            '语法 `func f(args ...T)` 让 args 在函数内成为 `[]T` 切片。`fmt.Printf` 就是可变参数函数的' +
            '典型代表——你可以传任意数量的参数给它格式化输出。\n\n' +
            '可变参数的本质是**语法糖**：调用 `sum(1, 2, 3)` 会被编译器转换为 `sum([]int{1, 2, 3})`。' +
            '在函数内部，`nums` 就是一个普通的 `[]int` 切片，可以用 range 遍历、用 len 取长度。' +
            '理解这一点就能正确使用可变参数。\n\n' +
            '闭包（closure）是 Go 函数式编程的核心：**匿名函数 + 捕获外部变量 = 闭包**。' +
            '闭包"记住"了定义时所在作用域的变量，即使外部函数已返回，闭包仍能访问和修改这些变量。' +
            '这让闭包能携带状态，是实现计数器、工厂函数、回调、中间件等模式的基础。\n\n' +
            'Go 中函数是**一等公民**——可以赋值给变量、作为参数传递、作为返回值。' +
            '高阶函数（接收函数作为参数或返回函数的函数）让代码更灵活，能写出 map/filter/reduce 风格的' +
            '数据处理管道。Go 1.18+ 的泛型进一步增强了高阶函数的表达力。\n\n' +
            '闭包的变量捕获是**按引用**的——闭包不复制变量值，而是引用原变量。这意味着闭包对捕获变量的修改' +
            '会影响外部，多个闭包可以共享同一变量。这也是循环变量捕获 bug 的根源（Go 1.22 已修复）。\n\n' +
            '## 语法说明\n\n' +
            '**可变参数语法**：\n\n' +
            '```go\n' +
            '// 定义可变参数函数\n' +
            'func sum(nums ...int) int {\n' +
            '    // nums 的类型是 []int\n' +
            '    total := 0\n' +
            '    for _, n := range nums {\n' +
            '        total += n\n' +
            '    }\n' +
            '    return total\n' +
            '}\n\n' +
            '// 调用方式\n' +
            'sum(1, 2, 3)           // 传多个参数\n' +
            'sum()                   // 不传参数，nums 是空切片\n' +
            'nums := []int{1, 2, 3}\n' +
            'sum(nums...)            // 展开切片传入\n\n' +
            '// 混合固定参数和可变参数\n' +
            'func printf(format string, args ...interface{}) (int, error) {\n' +
            '    // format 是固定参数，args 是可变参数\n' +
            '}\n' +
            '```\n\n' +
            '**闭包语法**：\n\n' +
            '```go\n' +
            '// 1. 匿名函数赋值给变量\n' +
            'add := func(a, b int) int { return a + b }\n' +
            'add(1, 2)  // 3\n\n' +
            '// 2. 立即调用（IIFE）\n' +
            'result := func(x int) int { return x * x }(5)  // 25\n\n' +
            '// 3. 闭包捕获外部变量\n' +
            'func makeCounter() func() int {\n' +
            '    count := 0\n' +
            '    return func() int {\n' +
            '        count++  // 捕获并修改 count\n' +
            '        return count\n' +
            '    }\n' +
            '}\n\n' +
            '// 4. 闭包作为回调\n' +
            'func forEach(nums []int, f func(int)) {\n' +
            '    for _, n := range nums {\n' +
            '        f(n)\n' +
            '    }\n' +
            '}\n\n' +
            '// 5. 高阶函数：函数作为返回值\n' +
            'func multiplier(factor int) func(int) int {\n' +
            '    return func(x int) int {\n' +
            '        return x * factor  // 捕获 factor\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '| 概念 | 语法 | 特点 |\n' +
            '|------|------|------|\n' +
            '| 可变参数 | `func f(args ...T)` | args 是 []T 切片 |\n' +
            '| 切片展开 | `f(slice...)` | 把切片传给可变参数 |\n' +
            '| 匿名函数 | `func() { }` | 无名字的函数字面量 |\n' +
            '| IIFE | `func() { }()` | 定义后立即调用 |\n' +
            '| 闭包 | 匿名函数 + 捕获变量 | 携带状态 |\n' +
            '| 高阶函数 | `func f(g func())` | 接收/返回函数 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：可变参数函数**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func sum(nums ...int) int {\n' +
            '    total := 0\n' +
            '    for _, n := range nums {\n' +
            '        total += n\n' +
            '    }\n' +
            '    return total\n' +
            '}\n\n' +
            'func max(nums ...int) int {\n' +
            '    if len(nums) == 0 {\n' +
            '        return 0  // 处理空切片\n' +
            '    }\n' +
            '    m := nums[0]\n' +
            '    for _, n := range nums[1:] {\n' +
            '        if n > m {\n' +
            '            m = n\n' +
            '        }\n' +
            '    }\n' +
            '    return m\n' +
            '}\n\n' +
            'func main() {\n' +
            '    fmt.Println(sum(1, 2, 3))           // 6\n' +
            '    fmt.Println(sum(1, 2, 3, 4, 5))     // 15\n' +
            '    fmt.Println(sum())                   // 0\n\n' +
            '    nums := []int{10, 20, 30}\n' +
            '    fmt.Println(sum(nums...))            // 60\n\n' +
            '    fmt.Println(max(3, 7, 2, 9, 4))      // 9\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：闭包计数器与工厂函数**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            '// 计数器工厂\n' +
            'func makeCounter() func() int {\n' +
            '    count := 0\n' +
            '    return func() int {\n' +
            '        count++\n' +
            '        return count\n' +
            '    }\n' +
            '}\n\n' +
            '// 加法器工厂\n' +
            'func makeAdder(x int) func(int) int {\n' +
            '    return func(y int) int {\n' +
            '        return x + y\n' +
            '    }\n' +
            '}\n\n' +
            'func main() {\n' +
            '    counter := makeCounter()\n' +
            '    fmt.Println(counter())  // 1\n' +
            '    fmt.Println(counter())  // 2\n' +
            '    fmt.Println(counter())  // 3\n\n' +
            '    add5 := makeAdder(5)\n' +
            '    add10 := makeAdder(10)\n' +
            '    fmt.Println(add5(3))    // 8\n' +
            '    fmt.Println(add10(3))   // 13\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：高阶函数 map/filter/reduce**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func mapInts(nums []int, f func(int) int) []int {\n' +
            '    result := make([]int, len(nums))\n' +
            '    for i, n := range nums {\n' +
            '        result[i] = f(n)\n' +
            '    }\n' +
            '    return result\n' +
            '}\n\n' +
            'func filterInts(nums []int, pred func(int) bool) []int {\n' +
            '    var result []int\n' +
            '    for _, n := range nums {\n' +
            '        if pred(n) {\n' +
            '            result = append(result, n)\n' +
            '        }\n' +
            '    }\n' +
            '    return result\n' +
            '}\n\n' +
            'func reduceInts(nums []int, init int, f func(int, int) int) int {\n' +
            '    acc := init\n' +
            '    for _, n := range nums {\n' +
            '        acc = f(acc, n)\n' +
            '    }\n' +
            '    return acc\n' +
            '}\n\n' +
            'func main() {\n' +
            '    nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}\n\n' +
            '    // 平方\n' +
            '    squares := mapInts(nums, func(n int) int { return n * n })\n' +
            '    fmt.Println("平方:", squares)\n\n' +
            '    // 过滤偶数\n' +
            '    evens := filterInts(nums, func(n int) bool { return n%2 == 0 })\n' +
            '    fmt.Println("偶数:", evens)\n\n' +
            '    // 求和\n' +
            '    total := reduceInts(nums, 0, func(a, b int) int { return a + b })\n' +
            '    fmt.Println("总和:", total)\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **可变参数必须是最后一个参数**：`func f(a int, b ...string)` 合法，`func f(b ...string, a int)` 编译错误。\n\n' +
            '2. **可变参数在函数内是切片**：`nums ...int` 在函数内是 `[]int`，不要混淆。' +
            '`len(nums)`、`nums[i]`、`range nums` 都是切片操作。\n\n' +
            '3. **展开切片用 `...`**：`f(slice...)` 把切片元素展开传给可变参数。' +
            '注意是三个点，且只能用于可变参数调用。\n\n' +
            '4. **可变参数传 nil 是合法的**：`f()` 不传参数时，nums 是空切片（不是 nil）。' +
            '但显式 `f(nil...)` 会传 nil 切片，要注意区别。\n\n' +
            '5. **闭包按引用捕获变量**：闭包不复制变量，而是引用。修改闭包内的捕获变量会影响外部。' +
            '多个闭包共享同一变量时要注意同步。\n\n' +
            '6. **循环变量捕获陷阱**（Go 1.21 及以前）：\n' +
            '```go\n' +
            '// 错误：所有闭包捕获同一个 i（最终值为 3）\n' +
            'for i := 0; i < 3; i++ {\n' +
            '    funcs = append(funcs, func() { fmt.Println(i) })\n' +
            '}\n' +
            '// 修复：在循环内创建副本\n' +
            'for i := 0; i < 3; i++ {\n' +
            '    i := i  // 创建新变量遮蔽外层 i\n' +
            '    funcs = append(funcs, func() { fmt.Println(i) })\n' +
            '}\n' +
            '// Go 1.22+ 自动修复，无需手动处理\n' +
            '```\n\n' +
            '7. **闭包可能导致变量逃逸到堆**：闭包捕获的局部变量会从栈"逃逸"到堆，增加 GC 压力。' +
            '性能敏感场景要评估闭包的开销。\n\n' +
            '8. **可变参数与 interface{} 混用**：`func f(args ...interface{})` 可以接收任意类型，' +
            '但调用方需要类型断言。`fmt.Printf` 就是这种模式。\n\n' +
            '## 实际应用\n\n' +
            '**fmt.Printf 是可变参数的经典案例**：\n\n' +
            '```go\n' +
            '// Printf 的签名\n' +
            'func Printf(format string, args ...interface{}) (int, error)\n\n' +
            'fmt.Printf("姓名: %s, 年龄: %d\\n", "小明", 20)\n' +
            'fmt.Printf("平均分: %.2f\\n", 85.5)\n' +
            '```\n\n' +
            '**HTTP 中间件链**：闭包是中间件的基础：\n\n' +
            '```go\n' +
            'func Logger(next http.Handler) http.Handler {\n' +
            '    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n' +
            '        start := time.Now()\n' +
            '        next.ServeHTTP(w, r)  // 捕获 next\n' +
            '        log.Printf("%s %s %v", r.Method, r.URL, time.Since(start))\n' +
            '    })\n' +
            '}\n\n' +
            'func Auth(next http.Handler) http.Handler {\n' +
            '    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n' +
            '        if !checkAuth(r) {\n' +
            '            http.Error(w, "未授权", 401)\n' +
            '            return\n' +
            '        }\n' +
            '        next.ServeHTTP(w, r)  // 捕获 next\n' +
            '    })\n' +
            '}\n\n' +
            '// 链式调用\n' +
            'http.Handle("/", Logger(Auth(homeHandler)))\n' +
            '```\n\n' +
            '**goroutine 与闭包**：并发编程中闭包捕获参数：\n\n' +
            '```go\n' +
            'for _, url := range urls {\n' +
            '    url := url  // Go 1.21 及以前需要这行\n' +
            '    go func() {\n' +
            '        fetch(url)  // 捕获 url\n' +
            '    }()\n' +
            '}\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**Go 1.18+ 泛型高阶函数**：泛型让 map/filter/reduce 类型安全：\n' +
            '```go\n' +
            'func Map[T, U any](s []T, f func(T) U) []U {\n' +
            '    result := make([]U, len(s))\n' +
            '    for i, v := range s {\n' +
            '        result[i] = f(v)\n' +
            '    }\n' +
            '    return result\n' +
            '}\n' +
            'squares := Map([]int{1,2,3}, func(n int) int { return n*n })\n' +
            'names := Map(users, func(u User) string { return u.Name })\n' +
            '```\n\n' +
            '**slices 包（Go 1.21+）**：标准库提供泛型切片操作，替代手写 map/filter：\n' +
            '```go\n' +
            'import "slices"\n' +
            'slices.Sort(nums)\n' +
            'slices.Contains(nums, 5)\n' +
            'slices.Reverse(nums)\n' +
            '```\n\n' +
            '**闭包实现状态机**：闭包可以携带状态，实现简单的状态机：\n' +
            '```go\n' +
            'func makeToggle() func() bool {\n' +
            '    state := false\n' +
            '    return func() bool {\n' +
            '        state = !state\n' +
            '        return state\n' +
            '    }\n' +
            '}\n' +
            'toggle := makeToggle()\n' +
            'toggle()  // true\n' +
            'toggle()  // false\n' +
            'toggle()  // true\n' +
            '```\n\n' +
            '**闭包与内存泄漏**：闭包捕获大对象会阻止其被 GC 回收，可能导致内存泄漏。' +
            '长时间存活的闭包（如全局回调）要小心捕获范围。\n\n' +
            '**与 Python 的对比**：Python 的 `*args`/`**kwargs` 类似可变参数，但更灵活（支持关键字）；' +
            'Python 闭包用 `nonlocal` 声明修改捕获变量，Go 闭包可直接修改；' +
            'Python 有 lambda（只能单表达式），Go 匿名函数可以多行。',
          examples: [
            {
              title: '可变参数求和',
              code: `package main

import "fmt"

func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

func main() {
    fmt.Println(sum(1, 2, 3))
    fmt.Println(sum(1, 2, 3, 4, 5))
    nums := []int{10, 20, 30}
    fmt.Println(sum(nums...))
}`,
              explanation:
                '`nums ...int` 让函数接收任意数量 int。函数内 nums 是切片。' +
                '`sum(nums...)` 用三个点把切片展开传给可变参数。输出：6、15、60（三行）。',
            },
            {
              title: '闭包计数器',
              code: `package main

import "fmt"

func makeCounter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

func main() {
    counter := makeCounter()
    fmt.Println(counter())
    fmt.Println(counter())
    fmt.Println(counter())
}`,
              explanation:
                '`makeCounter` 返回的闭包捕获了 count 变量。每次调用 counter() 都让 count 自增并返回。' +
                'count 对外部不可见，相当于私有状态。输出：1、2、3（三行）。',
            },
            {
              title: '闭包捕获变量',
              code: `package main

import "fmt"

func makeAdder(x int) func(int) int {
    return func(y int) int {
        return x + y
    }
}

func main() {
    add5 := makeAdder(5)
    add10 := makeAdder(10)
    fmt.Println(add5(3))
    fmt.Println(add10(3))
}`,
              explanation:
                '`makeAdder(5)` 返回一个"加 5"的函数，`makeAdder(10)` 返回"加 10"的函数。' +
                '每个闭包独立捕获自己的 x。输出：8、13（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全可变参数 max 函数的比较条件，使 max(3,7,2,9,4) 输出 9。',
              starter_code: `package main

import "fmt"

func max(nums ...int) int {
    m := nums[0]
    for _, n := range nums[1:] {
        if ___ {
            m = n
        }
    }
    return m
}

func main() {
    fmt.Println(max(3, 7, 2, 9, 4))
}`,
              expected_output: '9',
              hints: [
                '当当前元素比已知的最大值大时更新',
                '比较 n 和 m',
                '答案: n > m',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全闭包 adder，使 makeAdder(5) 返回的函数 add5(10) 输出 15。',
              starter_code: `package main

import "fmt"

func makeAdder(x int) func(int) int {
    return func(y int) int {
        return x + ___
    }
}

func main() {
    add5 := makeAdder(5)
    fmt.Println(add5(10))
}`,
              expected_output: '15',
              hints: [
                '闭包返回 x + 参数',
                '第二个参数是 y',
                '答案: y',
              ],
            },
          ],
          realWorldScenario:
            '可变参数在日志库（fmt.Printf 就是可变参数）、配置构造器、聚合查询中很常见。闭包是函数式编程的基础，在 Web 框架中用于中间件链——每个中间件返回一个包装了下一层的闭包；在并发编程中用于 goroutine 内捕获循环变量。高阶函数让数据处理管道（map/filter/reduce）更优雅，是构建流式处理系统的核心抽象。',
        },
        {
          id: 'go-ch3-l3',
          title: '匿名函数',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '匿名函数（anonymous function）是没有名字的函数字面量，语法 `func(参数) 返回类型 { 函数体 }`。' +
            '它可以在定义处直接使用、赋值给变量、作为参数传递。在 Go 中，匿名函数与闭包（closure）' +
            '几乎是同义词——任何匿名函数都可能捕获外部变量形成闭包。\n\n' +
            'Go 的匿名函数比 Python 的 lambda 更强大：lambda 只能是单表达式，Go 匿名函数可以有完整的函数体、' +
            '多行语句、循环、条件、甚至返回多个值。这让 Go 的函数式编程更实用，复杂的逻辑都能用匿名函数封装。\n\n' +
            'IIFE（立即调用函数表达式）是匿名函数的特殊用法：定义后紧跟 `()` 直接调用。' +
            '`result := func(x int) int { return x * x }(5)` 一步完成定义和调用。' +
            'IIFE 常用于隔离作用域、初始化复杂变量、执行一次性计算，避免污染外部作用域。\n\n' +
            '匿名函数是 Go 并发和回调机制的基石。`go func() { ... }()` 启动 goroutine，' +
            '`http.HandleFunc("/", func(w, r) { ... })` 注册 HTTP 处理函数，' +
            '`time.AfterFunc(d, func() { ... })` 设置定时回调。掌握匿名函数是理解现代 Go 编程的前提。\n\n' +
            '## 语法说明\n\n' +
            '**匿名函数语法**：\n\n' +
            '```go\n' +
            '// 1. 基本形式\n' +
            'func(参数列表) 返回类型 { 函数体 }\n\n' +
            '// 2. 赋值给变量\n' +
            'add := func(a, b int) int { return a + b }\n' +
            'add(1, 2)  // 3\n\n' +
            '// 3. 立即调用（IIFE）\n' +
            'result := func(x int) int {\n' +
            '    sum := 0\n' +
            '    for i := 1; i <= x; i++ {\n' +
            '        sum += i\n' +
            '    }\n' +
            '    return sum\n' +
            '}(100)  // 计算 1 到 100 的和\n\n' +
            '// 4. 作为函数参数\n' +
            'func apply(f func(int) int, x int) int {\n' +
            '    return f(x)\n' +
            '}\n' +
            'apply(func(n int) int { return n * 2 }, 5)  // 10\n\n' +
            '// 5. 作为函数返回值\n' +
            'func makeHandler() func() {\n' +
            '    return func() { fmt.Println("处理请求") }\n' +
            '}\n\n' +
            '// 6. 启动 goroutine\n' +
            'go func(msg string) {\n' +
            '    fmt.Println(msg)\n' +
            '}("异步执行")\n' +
            '```\n\n' +
            '| 用法 | 语法 | 场景 |\n' +
            '|------|------|------|\n' +
            '| 赋值给变量 | `f := func() { }` | 复用匿名函数 |\n' +
            '| IIFE | `func() { }()` | 一次性计算、隔离作用域 |\n' +
            '| 作为参数 | `f(func() { })` | 回调、策略模式 |\n' +
            '| 作为返回值 | `return func() { }` | 工厂、闭包 |\n' +
            '| goroutine | `go func() { }()` | 并发任务 |\n' +
            '| defer | `defer func() { }()` | 资源清理、recover |\n\n' +
            '**函数类型**：\n\n' +
            '```go\n' +
            '// 函数类型由参数和返回值决定\n' +
            'type Handler func(http.ResponseWriter, *http.Request)\n' +
            'type Mapper func(int) int\n' +
            'type Predicate func(int) bool\n\n' +
            '// 可以作为参数和返回值类型\n' +
            'func compose(f, g Mapper) Mapper {\n' +
            '    return func(x int) int { return f(g(x)) }\n' +
            '}\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：赋值、IIFE 与作用域隔离**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func main() {\n' +
            '    // 赋值给变量\n' +
            '    double := func(n int) int { return n * 2 }\n' +
            '    fmt.Println(double(21))   // 42\n\n' +
            '    // IIFE：一次性计算\n' +
            '    result := func(x int) int {\n' +
            '        sum := 0\n' +
            '        for i := 1; i <= x; i++ {\n' +
            '            sum += i\n' +
            '        }\n' +
            '        return sum\n' +
            '    }(10)\n' +
            '    fmt.Println("1到10的和:", result)  // 55\n\n' +
            '    // IIFE 隔离作用域\n' +
            '    x := 10\n' +
            '    {\n' +
            '        x := x * 2  // 新作用域的 x，不影响外部\n' +
            '        fmt.Println("内部 x:", x)  // 20\n' +
            '    }\n' +
            '    fmt.Println("外部 x:", x)  // 10\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：高阶函数与回调**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func apply(f func(int) int, x int) int {\n' +
            '    return f(x)\n' +
            '}\n\n' +
            'func forEach(nums []int, action func(int)) {\n' +
            '    for _, n := range nums {\n' +
            '        action(n)\n' +
            '    }\n' +
            '}\n\n' +
            'func main() {\n' +
            '    // 不同函数传给同一个 apply\n' +
            '    fmt.Println(apply(func(n int) int { return n * 2 }, 21))   // 42\n' +
            '    fmt.Println(apply(func(n int) int { return n + 100 }, 5)) // 105\n' +
            '    fmt.Println(apply(func(n int) int { return n * n }, 9))   // 81\n\n' +
            '    // 回调：遍历时打印每个元素\n' +
            '    nums := []int{1, 2, 3, 4, 5}\n' +
            '    forEach(nums, func(n int) {\n' +
            '        fmt.Printf("%d ", n*n)\n' +
            '    })\n' +
            '    fmt.Println()\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：goroutine 与 defer 中的匿名函数**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "sync"\n' +
            ')\n\n' +
            'func main() {\n' +
            '    var wg sync.WaitGroup\n' +
            '    for i := 1; i <= 3; i++ {\n' +
            '        wg.Add(1)\n' +
            '        // goroutine 中用匿名函数\n' +
            '        go func(n int) {\n' +
            '            defer wg.Done()\n' +
            '            fmt.Printf("任务 %d 完成\\n", n)\n' +
            '        }(i)\n' +
            '    }\n' +
            '    wg.Wait()\n' +
            '    fmt.Println("所有任务完成")\n\n' +
            '    // defer 中的匿名函数（recover）\n' +
            '    safeDiv := func(a, b int) (result int) {\n' +
            '        defer func() {\n' +
            '            if r := recover(); r != nil {\n' +
            '                result = 0  // panic 时返回 0\n' +
            '            }\n' +
            '        }()\n' +
            '        return a / b\n' +
            '    }\n' +
            '    fmt.Println(safeDiv(10, 0))  // 0，不 panic\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **匿名函数必须有函数体**：`func() {}` 不能只写签名。即使是空函数体也要有 `{}`。\n\n' +
            '2. **IIFE 必须跟 `()`**：`func() { }` 只是定义，不调用。`func() { }()` 才是立即调用。' +
            '传参：`func(x int) { }(5)`。\n\n' +
            '3. **匿名函数的类型是函数类型**：`func(int) int` 是一个类型。两个同签名的匿名函数' +
            '可以互相赋值，类型相同。\n\n' +
            '4. **goroutine 中的匿名函数要传参**：`go func() { use(i) }()` 在 Go 1.21 及以前会捕获循环变量 i 的最终值。' +
            '安全做法是传参：`go func(i int) { use(i) }(i)`。Go 1.22+ 自动修复。\n\n' +
            '5. **defer 匿名函数用于 recover**：`defer func() { recover() }()` 是唯一能捕获 panic 的方式。' +
            '直接 `defer recover()` 不起作用，因为 recover 必须在 defer 函数中调用。\n\n' +
            '6. **匿名函数可读性**：复杂的匿名函数（几十行）会降低可读性。如果匿名函数太长，' +
            '应抽取为命名函数。一般原则：超过 10 行就考虑抽取。\n\n' +
            '7. **函数类型零值是 nil**：`var f func(int) int` 的 f 是 nil，调用 nil 函数会 panic。' +
            '调用前要判空：`if f != nil { f(1) }`。\n\n' +
            '8. **匿名函数捕获变量是按引用**：闭包捕获外部变量后，修改闭包内的变量会影响外部。' +
            '如果不想被修改，先复制一份：`x := x; f := func() { use(x) }`。\n\n' +
            '## 实际应用\n\n' +
            '**HTTP 路由处理**：Web 框架中匿名函数是 handler 的标准形式：\n\n' +
            '```go\n' +
            'http.HandleFunc("/api/users", func(w http.ResponseWriter, r *http.Request) {\n' +
            '    switch r.Method {\n' +
            '    case "GET":\n' +
            '        json.NewEncoder(w).Encode(getUsers())\n' +
            '    case "POST":\n' +
            '        var u User\n' +
            '        json.NewDecoder(r.Body).Decode(&u)\n' +
            '        createUser(u)\n' +
            '    }\n' +
            '})\n' +
            '```\n\n' +
            '**goroutine 启动**：并发任务几乎都用匿名函数封装：\n\n' +
            '```go\n' +
            '// 异步发送邮件\n' +
            'go func(to, subject, body string) {\n' +
            '    if err := sendEmail(to, subject, body); err != nil {\n' +
            '        log.Printf("邮件发送失败: %v", err)\n' +
            '    }\n' +
            '}(user.Email, "欢迎", "注册成功！")\n' +
            '```\n\n' +
            '**回调机制**：事件处理、定时任务：\n\n' +
            '```go\n' +
            '// 定时任务\n' +
            'time.AfterFunc(5*time.Minute, func() {\n' +
            '    cleanupExpiredSessions()\n' +
            '})\n\n' +
            '// 排序回调\n' +
            'sort.Slice(users, func(i, j int) bool {\n' +
            '    return users[i].Age < users[j].Age\n' +
            '})\n' +
            '```\n\n' +
            '**配置初始化**：IIFE 用于初始化复杂变量：\n\n' +
            '```go\n' +
            'var config = func() Config {\n' +
            '    data, err := os.ReadFile("config.json")\n' +
            '    if err != nil {\n' +
            '        return DefaultConfig\n' +
            '    }\n' +
            '    var c Config\n' +
            '    json.Unmarshal(data, &c)\n' +
            '    return c\n' +
            '}()  // 包级变量初始化时执行\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**函数类型作为接口**：Go 接口可以包含方法，函数类型可以通过实现方法来满足接口：\n' +
            '```go\n' +
            'type Handler interface {\n' +
            '    ServeHTTP(int) string\n' +
            '}\n\n' +
            'type HandlerFunc func(int) string\n\n' +
            'func (f HandlerFunc) ServeHTTP(n int) string {\n' +
            '    return f(n)  // 让函数类型实现接口\n' +
            '}\n' +
            '```\n' +
            '这是 `http.HandlerFunc` 的设计模式，让普通函数能作为 http.Handler 使用。\n\n' +
            '**函数组合**：高阶函数可以组合简单函数为复杂逻辑：\n' +
            '```go\n' +
            'func compose[A, B, C any](f func(B) C, g func(A) B) func(A) C {\n' +
            '    return func(a A) C { return f(g(a)) }\n' +
            '}\n' +
            '\n' +
            'square := func(x int) int { return x * x }\n' +
            'inc := func(x int) int { return x + 1 }\n' +
            'squareAfterInc := compose(square, inc)  // 先+1再平方\n' +
            'fmt.Println(squareAfterInc(4))  // 25\n' +
            '```\n\n' +
            '**闭包与内存**：每个闭包会分配堆内存存储捕获的变量。高频创建闭包（如循环中）' +
            '可能产生 GC 压力。性能敏感场景考虑用结构体 + 方法替代。\n\n' +
            '**与 Python 的对比**：Python 的 lambda 只能单表达式，Go 匿名函数可多行；' +
            'Python 用 `lambda x: x*2`，Go 用 `func(x int) int { return x*2 }`；' +
            'Python 没有原生的 IIFE 习惯，Go 的 IIFE 常用于初始化；' +
            'Python 的装饰器基于函数作为参数，Go 用中间件模式实现类似效果。',
          examples: [
            {
              title: '赋值匿名函数',
              code: `package main

import "fmt"

func main() {
    double := func(n int) int {
        return n * 2
    }
    fmt.Println(double(21))
    fmt.Println(double(50))
}`,
              explanation:
                '把匿名函数赋值给变量 double，之后像普通函数一样调用。' +
                '输出：42、100（两行）。',
            },
            {
              title: '立即调用（IIFE）',
              code: `package main

import "fmt"

func main() {
    result := func(x int) int {
        return x * x
    }(5)
    fmt.Println(result)
}`,
              explanation:
                '匿名函数定义后紧跟 `(5)` 立即调用，参数 5 传入，返回 25。' +
                'IIFE 适合一次性计算。输出：25。',
            },
            {
              title: '函数作为参数',
              code: `package main

import "fmt"

func apply(f func(int) int, x int) int {
    return f(x)
}

func main() {
    double := func(n int) int { return n * 2 }
    fmt.Println(apply(double, 21))
    fmt.Println(apply(func(n int) int { return n + 100 }, 5))
}`,
              explanation:
                '`apply` 接收一个函数和一个 int，把函数应用到 int 上。' +
                '第一次传入 double 得到 42，第二次传入匿名"加 100"函数得到 105。输出：42、105（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全匿名函数，使 double(21) 输出 42。',
              starter_code: `package main

import "fmt"

func main() {
    double := func(n int) int {
        return n * ___
    }
    fmt.Println(double(21))
}`,
              expected_output: '42',
              hints: [
                '翻倍就是乘以 2',
                'return n * 2',
                '答案: 2',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全 apply 调用的第二个参数，使 apply(square, 9) 输出 81。',
              starter_code: `package main

import "fmt"

func apply(f func(int) int, x int) int {
    return f(x)
}

func main() {
    result := apply(func(n int) int {
        return n * n
    }, ___)
    fmt.Println(result)
}`,
              expected_output: '81',
              hints: [
                '9 的平方是 81',
                '传入 9 作为参数',
                '答案: 9',
              ],
            },
          ],
          realWorldScenario:
            '匿名函数在现代 Go 后端无处不在。HTTP 框架的路由处理常用匿名函数：`http.HandleFunc("/api", func(w, r) { ... })`。goroutine 启动几乎都用匿名函数封装并发逻辑。回调机制（如定时任务、事件监听、Promise 风格的异步回调）都依赖把匿名函数作为参数传递。掌握匿名函数让代码更灵活、更声明式。',
        },
        {
          id: 'go-ch3-l4',
          title: 'init 函数',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`init` 函数是 Go 包初始化机制的核心：每个包加载时自动执行，且在 `main` 函数之前。' +
            'init 让包在被使用前完成必要的准备工作（注册驱动、初始化配置、校验环境），调用方无需手动初始化。' +
            '这是 Go "零配置开箱即用"设计的体现——导入包即就绪。\n\n' +
            'init 函数的特殊性：**无参数无返回值**、**不能手动调用**、**由 Go 运行时自动触发**。' +
            '一个文件可以有多个 init 函数（按声明顺序执行），一个包的多个文件也都可能有 init。' +
            '这种"声明式初始化"让包的初始化逻辑分散在各自文件中，无需集中管理。\n\n' +
            'init 的执行顺序是 Go 初始化机制的核心：\n' +
            '1. **导入包的初始化先于本包**（深度优先，按导入顺序）\n' +
            '2. **包级变量按依赖顺序初始化**（被依赖的先初始化）\n' +
            '3. **init 函数按声明顺序执行**（同文件按出现顺序，跨文件按文件名字典序）\n' +
            '4. **最后执行 main 函数**\n\n' +
            '这个顺序保证：使用某变量时它已初始化、调用某包时它已就绪。这是 Go 程序可靠性的基础。\n\n' +
            'init 的经典应用是**自注册模式**：数据库驱动、HTTP 处理器、协议解析器等通过 init 自动注册，' +
            '调用方只需 `import _ "driver"` 触发注册，无需知道具体注册逻辑。' +
            '这是 Go 实现"插件化"的标准方式，database/sql 的驱动体系就基于此。\n\n' +
            '## 语法说明\n\n' +
            '**init 函数语法**：\n\n' +
            '```go\n' +
            '// 基本形式：无参数无返回值\n' +
            'func init() {\n' +
            '    // 初始化逻辑\n' +
            '}\n\n' +
            '// 一个文件可以有多个 init\n' +
            'func init() {\n' +
            '    fmt.Println("第一个 init")\n' +
            '}\n\n' +
            'func init() {\n' +
            '    fmt.Println("第二个 init")\n' +
            '}\n\n' +
            '// 不能有参数或返回值（编译错误）\n' +
            '// func init(x int) { }      // 错误\n' +
            '// func init() int { }       // 错误\n' +
            '// init()                    // 错误：不能手动调用\n' +
            '```\n\n' +
            '**初始化顺序**：\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            '// 1. 包级变量先初始化（按声明顺序，考虑依赖）\n' +
            'var a = computeA()\n' +
            'var b = computeB()\n\n' +
            'func computeA() int {\n' +
            '    fmt.Println("computeA")\n' +
            '    return 1\n' +
            '}\n\n' +
            'func computeB() int {\n' +
            '    fmt.Println("computeB")\n' +
            '    return 2\n' +
            '}\n\n' +
            '// 2. init 函数在变量之后执行\n' +
            'func init() {\n' +
            '    fmt.Println("init, a =", a, "b =", b)\n' +
            '}\n\n' +
            '// 3. main 最后执行\n' +
            'func main() {\n' +
            '    fmt.Println("main")\n' +
            '}\n' +
            '// 输出顺序：computeA computeB init main\n' +
            '```\n\n' +
            '| 初始化阶段 | 顺序 | 说明 |\n' +
            '|-----------|------|------|\n' +
            '| 导入包 init | 最先 | 深度优先，按 import 顺序 |\n' +
            '| 包级变量 | 其次 | 按声明顺序，考虑依赖 |\n' +
            '| 本包 init | 再次 | 同文件按出现顺序，跨文件按文件名 |\n' +
            '| main 函数 | 最后 | 程序入口 |\n\n' +
            '**自注册模式**：\n\n' +
            '```go\n' +
            '// driver/postgres/postgres.go\n' +
            'package postgres\n\n' +
            'import "database/sql"\n\n' +
            'func init() {\n' +
            '    sql.Register("postgres", &PostgresDriver{})\n' +
            '}\n\n' +
            '// main.go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "database/sql"\n' +
            '    _ "myapp/driver/postgres"  // 触发 init 注册\n' +
            ')\n\n' +
            'func main() {\n' +
            '    db, _ := sql.Open("postgres", "...")  // 已注册\n' +
            '}\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：基本 init 与执行顺序**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'var config string\n\n' +
            'func init() {\n' +
            '    config = "production"\n' +
            '    fmt.Println("init: 配置已加载")\n' +
            '}\n\n' +
            'func main() {\n' +
            '    fmt.Println("main: 运行模式 =", config)\n' +
            '}\n' +
            '// 输出：\n' +
            '// init: 配置已加载\n' +
            '// main: 运行模式 = production\n' +
            '```\n\n' +
            '**示例 2：多个 init 与变量初始化顺序**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import "fmt"\n\n' +
            'func init() {\n' +
            '    fmt.Println("init A")\n' +
            '}\n\n' +
            'var x = computeX()\n\n' +
            'func computeX() int {\n' +
            '    fmt.Println("computeX")\n' +
            '    return 42\n' +
            '}\n\n' +
            'func init() {\n' +
            '    fmt.Println("init B, x =", x)\n' +
            '}\n\n' +
            'func main() {\n' +
            '    fmt.Println("main")\n' +
            '}\n' +
            '// 输出顺序：computeX init A init B main\n' +
            '// 注意：包级变量 x 在所有 init 之前初始化\n' +
            '```\n\n' +
            '**示例 3：init 用于环境检查与驱动注册**\n\n' +
            '```go\n' +
            'package main\n\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "os"\n' +
            ')\n\n' +
            'var (\n' +
            '    workers    int\n' +
            '    dbURL      string\n' +
            '    debugMode  bool\n' +
            ')\n\n' +
            'func init() {\n' +
            '    // 从环境变量读取配置\n' +
            '    if w := os.Getenv("WORKERS"); w != "" {\n' +
            '        fmt.Sscanf(w, "%d", &workers)\n' +
            '    } else {\n' +
            '        workers = 4  // 默认值\n' +
            '    }\n' +
            '    dbURL = os.Getenv("DB_URL")\n' +
            '    if dbURL == "" {\n' +
            '        dbURL = "localhost:5432/dev"\n' +
            '    }\n' +
            '    debugMode = os.Getenv("DEBUG") == "true"\n' +
            '}\n\n' +
            'func init() {\n' +
            '    // 第二个 init：校验配置\n' +
            '    if workers <= 0 {\n' +
            '        panic("workers 必须大于 0")\n' +
            '    }\n' +
            '    fmt.Printf("配置就绪: workers=%d db=%s debug=%v\\n",\n' +
            '        workers, dbURL, debugMode)\n' +
            '}\n\n' +
            'func main() {\n' +
            '    fmt.Println("启动服务，workers =", workers)\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **init 不能有参数和返回值**：`func init()` 是唯一合法签名。任何参数或返回值都是编译错误。\n\n' +
            '2. **init 不能手动调用**：`init()` 在 main 中调用会编译错误。init 只由运行时触发。\n\n' +
            '3. **一个文件可以有多个 init**：它们按声明顺序执行。这在不同代码段需要分别初始化时有用。\n\n' +
            '4. **跨文件 init 顺序不保证**：同包不同文件的 init 执行顺序由文件名字典序决定，但 Go 规范' +
            '不保证这一点。不要依赖跨文件 init 的顺序，应让 init 相互独立。\n\n' +
            '5. **init 中可以修改包级变量**：包级变量先初始化，init 可以读取和修改它们。' +
            '这是 init 的主要用途之一。\n\n' +
            '6. **init 中 panic 会导致程序退出**：如果 init 中 panic，程序无法启动。' +
            'init 中的错误检查应谨慎，必要时用 log.Fatal 而非 panic。\n\n' +
            '7. **避免在 init 中做复杂逻辑**：init 难以测试、难以错误处理。复杂初始化应放到' +
            '显式的 `Setup()` 函数中，由 main 调用。\n\n' +
            '8. **init 的副作用是全局的**：init 修改的全局状态在整个程序生命周期内有效。' +
            '这让单元测试难以隔离，因为 import 包就触发 init。\n\n' +
            '9. **下划线导入触发 init**：`import _ "pkg"` 只执行 pkg 的 init，不绑定包名。' +
            '这是自注册模式的标准写法。\n\n' +
            '## 实际应用\n\n' +
            '**数据库驱动注册**：database/sql 的驱动体系基于 init 自注册：\n\n' +
            '```go\n' +
            '// github.com/go-sql-driver/mysql/driver.go\n' +
            'package mysql\n\n' +
            'func init() {\n' +
            '    sql.Register("mysql", &MySQLDriver{})\n' +
            '}\n\n' +
            '// 用户代码\n' +
            'import (\n' +
            '    "database/sql"\n' +
            '    _ "github.com/go-sql-driver/mysql"  // 注册 mysql 驱动\n' +
            ')\n\n' +
            'func main() {\n' +
            '    db, err := sql.Open("mysql", "user:pass@/dbname")\n' +
            '    // 无需手动注册，驱动已就绪\n' +
            '}\n' +
            '```\n\n' +
            '**配置预加载**：从环境变量或文件加载配置：\n\n' +
            '```go\n' +
            'var config Config\n\n' +
            'func init() {\n' +
            '    data, err := os.ReadFile("config.json")\n' +
            '    if err != nil {\n' +
            '        config = DefaultConfig\n' +
            '        return\n' +
            '    }\n' +
            '    json.Unmarshal(data, &config)\n' +
            '}\n' +
            '```\n\n' +
            '**HTTP 路由注册**：注册处理器：\n\n' +
            '```go\n' +
            'func init() {\n' +
            '    http.HandleFunc("/api/users", usersHandler)\n' +
            '    http.HandleFunc("/api/orders", ordersHandler)\n' +
            '    http.HandleFunc("/api/health", healthHandler)\n' +
            '}\n' +
            '```\n\n' +
            '**日志组件初始化**：\n\n' +
            '```go\n' +
            'func init() {\n' +
            '    log.SetFlags(log.LstdFlags | log.Lshortfile)\n' +
            '    log.SetOutput(os.Stdout)\n' +
            '    if os.Getenv("LOG_FILE") != "" {\n' +
            '        f, _ := os.OpenFile(os.Getenv("LOG_FILE"),\n' +
            '            os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)\n' +
            '        log.SetOutput(f)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '## 扩展知识\n\n' +
            '**init 的执行时机**：Go 运行时在 `runtime.main` 中调用 `main_init()` 触发所有 init。' +
            '每个包的 init 只执行一次（即使被多次导入）。这是通过 sync.Once 实现的。\n\n' +
            '**测试中的 init**：运行 `go test` 时，被测包的 init 会执行，测试包 `_test.go` 中的 init 也会执行。' +
            '测试 init 在被测包 init 之后、测试函数之前。可以利用 init 准备测试数据。\n\n' +
            '**init vs 全局变量初始化**：\n' +
            '```go\n' +
            '// 用全局变量初始化\n' +
            'var config = loadConfig()  // 简单场景适用\n\n' +
            '// 用 init 初始化（可含错误处理）\n' +
            'var config Config\n' +
            'func init() {\n' +
            '    c, err := loadConfig()\n' +
            '    if err != nil {\n' +
            '        log.Fatal(err)\n' +
            '    }\n' +
            '    config = c\n' +
            '}\n' +
            '```\n\n' +
            '**现代 Go 的 init 实践**：社区逐渐倾向于减少 init 的副作用：\n' +
            '- 复杂初始化用显式 `Setup()` 函数，由 main 调用\n' +
            '- init 仅用于无法避免的注册（如 database/sql 驱动）\n' +
            '- 避免在 init 中读文件、连网络、做复杂计算\n' +
            '- 全局可变状态用依赖注入替代，便于测试\n\n' +
            '**与 Python 的对比**：Python 模块导入时执行顶层代码，相当于 Go 的包级变量初始化 + init；' +
            'Python 没有显式的 init 函数，模块顶层代码就是初始化逻辑；' +
            'Go 的 init 更显式、更可控，Python 的方式更灵活但易产生副作用。',
          examples: [
            {
              title: '基本 init',
              code: `package main

import "fmt"

var config string

func init() {
    config = "production"
    fmt.Println("初始化配置:", config)
}

func main() {
    fmt.Println("运行模式:", config)
}`,
              explanation:
                'init 在 main 之前执行，设置 config 变量。main 直接使用已初始化的 config。' +
                '输出：初始化配置: production，然后 运行模式: production（两行）。',
            },
            {
              title: '多个 init 与变量初始化顺序',
              code: `package main

import "fmt"

func init() {
    fmt.Println("init A")
}

var x = computeX()

func computeX() int {
    fmt.Println("computeX")
    return 42
}

func init() {
    fmt.Println("init B, x =", x)
}

func main() {
    fmt.Println("main")
}`,
              explanation:
                '执行顺序：包级变量 x 先初始化（computeX 输出），然后两个 init 按声明顺序执行，最后 main。' +
                '输出：computeX、init A、init B, x = 42、main（四行）。',
            },
            {
              title: 'init 用于配置检查',
              code: `package main

import "fmt"

var workers int

func init() {
    workers = 4
    fmt.Printf("启动 %d 个工作协程\\n", workers)
}

func main() {
    fmt.Printf("正在处理任务，使用 %d 个协程\\n", workers)
}`,
              explanation:
                'init 设置工作协程数并打印启动信息，main 使用该配置。' +
                '输出：启动 4 个工作协程，然后 正在处理任务，使用 4 个协程（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: 'init 函数已把 greeting 设为 "你好"，在 main 中输出它。',
              starter_code: `package main

import "fmt"

var greeting string

func init() {
    greeting = "你好"
}

func main() {
    fmt.Println(___)
}`,
              expected_output: '你好',
              hints: [
                'init 已经设置了哪个变量',
                '打印 greeting',
                '答案: greeting',
              ],
            },
            {
              type: 'output-match',
              prompt: '两个 init 依次输出 "A" 和 "B"，main 输出 "C"，补全 main 的输出，使最终结果为 "A\\nB\\nC"。',
              starter_code: `package main

import "fmt"

func init() {
    fmt.Println("A")
}

func init() {
    fmt.Println("B")
}

func main() {
    fmt.Println(___)
}`,
              expected_output: 'A\nB\nC',
              hints: [
                'main 应该输出最后一个字符',
                '字符串 "C"',
                '答案: "C"',
              ],
            },
          ],
          realWorldScenario:
            'init 在真实项目中用于包的自动注册机制。最经典的例子是数据库驱动：`import _ "github.com/lib/pq"` 导入 PostgreSQL 驱动，驱动的 init 函数自动向 database/sql 注册自己，调用方无需手动注册。日志库、配置加载器、编解码器也常通过 init 完成自注册。理解 init 机制是阅读开源框架源码、理解"为什么 import 就能用"的关键。',
        },
      ],
    },
    // ================================================================
    // 第 4 章：复合数据类型
    // ================================================================
    {
      id: 'go-ch4',
      title: '复合数据类型',
      order: 3,
      lessons: [
        {
          id: 'go-ch4-l1',
          title: '数组与切片',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'Go 的**数组（array）**是固定长度的序列，长度是类型的一部分——`[3]int` 和 `[4]int` 是完全不同的类型。' +
            '数组是值类型，赋值和传参会**复制整个数组**，这在多数场景并不理想，所以日常 Go 编程中数组出场率很低，更常用的是切片。\n\n' +
            '为何要保留数组？数组是切片和很多容器类型的**底层存储单元**。当你需要固定大小的数学向量（如 3D 坐标 `[3]float64`）、' +
            'SHA-256 哈希结果 `[32]byte`、缓存行对齐等场景时，数组的值语义反而是优势——复制即隔离，无需担心共享。\n\n' +
            '**切片（slice）**是动态长度的序列，底层引用一个数组。切片是 Go 中使用频率最高的数据结构：处理数据库查询结果、' +
            'JSON 数组、批量任务队列、缓冲区管理都靠切片。切片是引用类型，赋值和传参共享底层数据，修改会相互影响——' +
            '这是 Go 区别于很多语言的特性，理解它对写出无 bug 代码至关重要。\n\n' +
            '何时用数组、何时用切片？**99% 的场景用切片**。仅当长度编译期已知且不可变、或需要值语义隔离时才用数组。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 数组声明\n' +
            'var a [3]int                      // 长度 3，零值 [0 0 0]\n' +
            'b := [3]int{1, 2, 3}              // 字面量\n' +
            'c := [...]int{1, 2, 3, 4}         // ... 自动推断长度为 4\n' +
            'd := [2]string{"hello", "world"}\n' +
            '\n' +
            '// 切片声明\n' +
            'var s []int                       // nil 切片，len=0 cap=0\n' +
            's1 := []int{1, 2, 3}              // 字面量\n' +
            's2 := make([]int, 5)              // len=5 cap=5，元素零值\n' +
            's3 := make([]int, 5, 10)          // len=5 cap=10\n' +
            '\n' +
            '// 截取：s[low:high:max]，含 low 不含 high\n' +
            'sub := s1[1:3]                    // [2 3]\n' +
            'head := s1[:2]                    // 前两个\n' +
            'tail := s1[2:]                    // 从索引 2 到末尾\n' +
            'full := s1[:]                     // 全部\n' +
            '\n' +
            '// 追加：返回新切片，可能扩容\n' +
            's = append(s, 10)                 // 追加一个元素\n' +
            's = append(s, 1, 2, 3)            // 追加多个\n' +
            's = append(s, other...)           // 追加另一个切片\n' +
            '```\n\n' +
            '| 操作 | 语法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 长度 | `len(s)` | 当前元素个数 |\n' +
            '| 容量 | `cap(s)` | 底层数组从切片起点到末尾的容量 |\n' +
            '| 追加 | `append(s, x...)` | 追加元素，超过 cap 时扩容 |\n' +
            '| 截取 | `s[low:high]` | 含 low 不含 high，共享底层数组 |\n' +
            '| 三索引 | `s[low:high:max]` | 限制新切片 cap 为 max-low |\n' +
            '| 复制 | `copy(dst, src)` | 复制元素，返回复制数量 |\n' +
            '| 删除 | `s = append(s[:i], s[i+1:]...)` | 删除索引 i 处元素 |\n' +
            '| 清空 | `s = s[:0]` | 长度归零但保留底层数组 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：数组是值类型，切片是引用类型**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func modifyArr(a [3]int) {\n' +
            '    a[0] = 999 // 修改副本，不影响原数组\n' +
            '}\n' +
            '\n' +
            'func modifySlc(s []int) {\n' +
            '    s[0] = 999 // 修改底层数组，原切片受影响\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    arr := [3]int{1, 2, 3}\n' +
            '    modifyArr(arr)\n' +
            '    fmt.Println(arr) // [1 2 3]\n' +
            '\n' +
            '    slc := []int{1, 2, 3}\n' +
            '    modifySlc(slc)\n' +
            '    fmt.Println(slc) // [999 2 3]\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：切片扩容观察 len/cap 变化**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    s := make([]int, 0)\n' +
            '    for i := 0; i < 10; i++ {\n' +
            '        s = append(s, i)\n' +
            '        fmt.Printf("len=%d cap=%d\\n", len(s), cap(s))\n' +
            '    }\n' +
            '}\n' +
            '// 输出（cap 变化：1 2 4 4 8 8 8 8 16 16，扩容翻倍）\n' +
            '```\n\n' +
            '**示例 3：切片截取的"内存泄漏"陷阱与三索引切片**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    big := make([]int, 1000000) // 巨大数组\n' +
            '    small := big[0:10]          // 只用 10 个，但底层数组仍是 100 万！\n' +
            '    fmt.Println(len(small), cap(small)) // 10 1000000\n' +
            '\n' +
            '    // 正确做法：用三索引切片限制 cap，或用 copy\n' +
            '    safe := big[0:10:10]         // cap 也限制为 10\n' +
            '    fmt.Println(len(safe), cap(safe))   // 10 10\n' +
            '\n' +
            '    // 或者完整复制\n' +
            '    copyied := make([]int, 10)\n' +
            '    copy(copyied, big[:10])\n' +
            '}\n' +
            '```\n\n' +
            '**示例 4：删除元素与插入元素**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func remove(s []int, i int) []int {\n' +
            '    return append(s[:i], s[i+1:]...) // 删除索引 i\n' +
            '}\n' +
            '\n' +
            'func insert(s []int, i, v int) []int {\n' +
            '    s = append(s, 0)               // 扩容一位\n' +
            '    copy(s[i+1:], s[i:])           // 后移\n' +
            '    s[i] = v                       // 插入\n' +
            '    return s\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    s := []int{1, 2, 3, 4, 5}\n' +
            '    s = remove(s, 2)               // 删除 3\n' +
            '    fmt.Println(s)                 // [1 2 4 5]\n' +
            '    s = insert(s, 1, 99)           // 在索引 1 插入 99\n' +
            '    fmt.Println(s)                 // [1 99 2 4 5]\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **数组长度是类型的一部分**：`[3]int` 和 `[4]int` 无法互相赋值，也无法传给同一个函数参数。\n' +
            '2. **切片的 nil 与空切片不同**：`var s []int`（nil，无底层数组）和 `s := []int{}`（空切片，有非 nil header）在 `len` 都为 0，但 `s == nil` 判断不同。JSON 序列化时 nil 序列化为 `null`，空切片序列化为 `[]`。\n' +
            '3. **append 可能返回新底层数组**：扩容后旧切片与新切片不再共享底层数据，这是隐式 bug 高发区。\n' +
            '4. **子切片持有大数组引用导致内存泄漏**：如示例 3，解决方案是三索引切片 `s[low:high:max]` 或 `copy`。\n' +
            '5. **range 遍历的是副本**：`for i, v := range s` 中 v 是元素副本，修改 v 不影响切片；Go 1.22 前 v 在循环间复用地址（同一变量），Go 1.22+ 每次循环新建变量。\n' +
            '6. **append 跨容量边界的行为变化**：未超 cap 时原地修改（共享底层数组可见），超 cap 时分配新数组（旧切片看不到修改）。\n' +
            '7. **并发不安全**：多 goroutine 同时 append 同一切片会数据竞争，需用 sync.Mutex 或 channel。\n' +
            '8. **大切片传参用指针**：虽然切片 header 仅 24 字节（指针+len+cap），但若函数内修改需传指针避免多次扩容丢失。\n' +
            '9. **预分配容量提升性能**：已知最终大小时 `make([]T, 0, n)` 预分配，避免多次扩容复制。\n\n' +
            '## 实际应用\n\n' +
            '**1. 批量数据处理**：数据库查询结果 `rows.Scan` 进切片、HTTP 接口返回 JSON 数组、日志批量写入——' +
            '切片是这些场景的标准容器。\n\n' +
            '```go\n' +
            '// 数据库查询收集结果\n' +
            'var users []User\n' +
            'for rows.Next() {\n' +
            '    var u User\n' +
            '    rows.Scan(&u.ID, &u.Name)\n' +
            '    users = append(users, u)\n' +
            '}\n' +
            '```\n\n' +
            '**2. 缓冲区管理**：`io.Read` 接受 `[]byte` 缓冲区，bufio.Scanner 用切片暂存行数据，' +
            '网络包处理用切片分片避免拷贝。\n\n' +
            '**3. 二分查找**：在有序切片中 O(log n) 查找，是 IP 库查询、时间序列索引、字典查找、' +
            '数据库 B+ 树叶子节点内查找的基石算法。\n\n' +
            '## 扩展知识\n\n' +
            '**切片内部结构**：切片 header 是一个 3 字段结构体——`{pointer 指向底层数组, len, cap}`。' +
            '传切片时复制这 24 字节（64 位机），底层数组共享。\n\n' +
            '**扩容策略演进**：Go 1.18 之前小切片扩容直接翻倍，大切片（>1024）扩容 1.25 倍；' +
            'Go 1.18+ 改用更平滑的增长曲线，介于翻倍和 1.25 倍之间，减少内存碎片。\n\n' +
            '**copy 函数的妙用**：`copy` 返回实际复制的元素数（取 src 和 dst 长度的最小值），' +
            '可用于在重叠区间安全搬运数据。\n\n' +
            '**泛型切片操作（Go 1.18+）**：`slices` 标准库包提供 `slices.Sort`、`slices.Contains`、`slices.Index` 等泛型函数，' +
            '无需手写 `for` 循环。\n\n' +
            '**与 Python list 对比**：Python list 是动态数组（自动扩容），Go 切片机制类似但更透明——' +
            '你能看到 len/cap、能控制底层数组共享。Python list 元素是对象引用（异构），Go 切片元素是同类型连续存储，更省内存更 cache 友好。',
          examples: [
            {
              title: '数组与切片',
              code: `package main

import "fmt"

func main() {
    var arr [3]int = [3]int{1, 2, 3}
    slc := []int{4, 5, 6}
    fmt.Println(arr, slc)
    fmt.Println(len(arr), len(slc))
}`,
              explanation:
                '`[3]int` 是定长数组，`[]int` 是切片。两者语法相近但类型不同。' +
                '输出：[1 2 3] [4 5 6]，然后 3 3（两行）。',
            },
            {
              title: '切片追加与截取',
              code: `package main

import "fmt"

func main() {
    nums := []int{10, 20, 30, 40, 50}
    fmt.Println(nums[1:4])
    nums = append(nums, 60)
    fmt.Println(nums)
    fmt.Println(len(nums))
}`,
              explanation:
                '`nums[1:4]` 截取索引 1 到 3（不含 4），得到 [20 30 40]。append 追加 60。' +
                '输出：[20 30 40]、[10 20 30 40 50 60]、6（三行）。',
            },
            {
              title: '二分查找',
              code: `package main

import "fmt"

func binarySearch(nums []int, target int) int {
    low, high := 0, len(nums)-1
    for low <= high {
        mid := (low + high) / 2
        if nums[mid] == target {
            return mid
        } else if nums[mid] < target {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}

func main() {
    nums := []int{2, 4, 6, 8, 10, 12, 14}
    fmt.Println(binarySearch(nums, 10))
    fmt.Println(binarySearch(nums, 5))
}`,
              explanation:
                '在有序切片中二分查找。每次取中间元素比较，缩小范围。找到 10 返回索引 4；' +
                '5 不存在返回 -1。输出：4、-1（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 range 遍历切片求和，使 [10,20,30,40] 输出 100。',
              starter_code: `package main

import "fmt"

func main() {
    nums := []int{10, 20, 30, 40}
    sum := 0
    for _, n := range nums {
        sum += ___
    }
    fmt.Println(sum)
}`,
              expected_output: '100',
              hints: [
                'range 返回的元素值是 n',
                '把每个元素累加到 sum',
                '答案: n',
              ],
            },
            {
              type: 'output-match',
              prompt: '在有序切片中查找 10，补全目标参数，使输出索引 4。',
              starter_code: `package main

import "fmt"

func binarySearch(nums []int, target int) int {
    low, high := 0, len(nums)-1
    for low <= high {
        mid := (low + high) / 2
        if nums[mid] == target {
            return mid
        } else if nums[mid] < target {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}

func main() {
    nums := []int{2, 4, 6, 8, 10, 12, 14}
    fmt.Println(binarySearch(nums, ___))
}`,
              expected_output: '4',
              hints: [
                '要查找的目标值是 10',
                '10 在切片中的索引是 4',
                '答案: 10',
              ],
            },
          ],
          realWorldScenario:
            '切片是 Go 中使用频率最高的数据结构。处理数据库查询结果、JSON 数组、批量任务队列都用切片。append 的自动扩容让切片成为动态数组的理想选择。二分查找在有序数据检索（如 IP 库查询、时间序列索引、字典查找）中是基础算法。理解切片的引用语义和扩容机制，是写出高性能、无内存泄漏 Go 代码的关键。',
        },
        {
          id: 'go-ch4-l2',
          title: 'map',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '`map` 是 Go 的**键值对（哈希表）**类型，声明 `map[键类型]值类型`。它提供 O(1) 平均时间的插入、' +
            '查找、删除，是后端开发最核心的数据结构之一——缓存、配置、计数、分组、索引、去重都离不开 map。\n\n' +
            '为何需要 map？数组和切片用整数索引，但现实问题常需要用字符串、复合键查找：用户 ID 查用户对象、' +
            '商品 SKU 查库存、URL path 查路由处理函数。map 让你用任意可比较类型作键，实现"字典"语义。\n\n' +
            '何时用 map？当你需要**快速按键查找**、**键唯一**、**无需顺序**时。若需有序遍历或范围查询，应考虑' +
            '排序切片+二分、或第三方有序 map、或数据库索引。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 声明与创建\n' +
            'var m map[string]int           // nil map，不能直接写！\n' +
            'm1 := make(map[string]int)     // 空 map，可读写\n' +
            'm2 := make(map[string]int, 100) // 预分配 100 容量提示\n' +
            'm3 := map[string]int{"a": 1, "b": 2} // 字面量初始化\n' +
            '\n' +
            '// 增删改查\n' +
            'm1["x"] = 10                  // 设置（键不存在则新增）\n' +
            'v := m1["x"]                  // 读取（不存在返回零值）\n' +
            'v, ok := m1["x"]              // 读取 + 存在性（ok 模式）\n' +
            'delete(m1, "x")               // 删除键\n' +
            '\n' +
            '// 遍历（顺序随机！）\n' +
            'for k, v := range m3 {\n' +
            '    fmt.Println(k, v)\n' +
            '}\n' +
            '```\n\n' +
            '| 操作 | 语法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 创建 | `make(map[K]V)` | 创建空可读写 map |\n' +
            '| 预分配 | `make(map[K]V, n)` | 提示容量，减少 rehash |\n' +
            '| 字面量 | `map[K]V{...}` | 初始化 |\n' +
            '| 设置 | `m[k] = v` | 键存在则更新，不存在则新增 |\n' +
            '| 读取 | `v := m[k]` | 不存在返回零值 |\n' +
            '| 存在检查 | `v, ok := m[k]` | ok=false 表示键不存在 |\n' +
            '| 删除 | `delete(m, k)` | 键不存在时不报错 |\n' +
            '| 长度 | `len(m)` | 键值对数量 |\n' +
            '| 遍历 | `for k, v := range m` | 顺序随机 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：基本增删改查与 ok 模式**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    m := map[string]int{"数学": 90, "语文": 85, "英语": 92}\n' +
            '    fmt.Println(m["数学"])      // 90\n' +
            '    m["体育"] = 88              // 新增\n' +
            '    delete(m, "语文")           // 删除\n' +
            '    fmt.Println(m["语文"])      // 0（零值，已删除）\n' +
            '    fmt.Println(len(m))         // 3\n' +
            '\n' +
            '    // ok 模式区分"不存在"和"零值"\n' +
            '    v, ok := m["体育"]\n' +
            '    fmt.Println(v, ok)          // 88 true\n' +
            '    v, ok = m["不存在"]\n' +
            '    fmt.Println(v, ok)          // 0 false\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：词频统计（经典应用）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "sort"\n' +
            '    "strings"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    text := "go is great and go is fast and go is simple"\n' +
            '    counts := make(map[string]int)\n' +
            '    for _, w := range strings.Fields(text) {\n' +
            '        counts[w]++ // 不存在时零值 0 自增\n' +
            '    }\n' +
            '\n' +
            '    // 有序输出：收集键排序\n' +
            '    keys := make([]string, 0, len(counts))\n' +
            '    for k := range counts {\n' +
            '        keys = append(keys, k)\n' +
            '    }\n' +
            '    sort.Strings(keys)\n' +
            '    for _, k := range keys {\n' +
            '        fmt.Printf("%s: %d\\n", k, counts[k])\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：map 作为集合（set）实现**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Set struct {\n' +
            '    m map[string]struct{}\n' +
            '}\n' +
            '\n' +
            'func NewSet() *Set {\n' +
            '    return &Set{m: make(map[string]struct{})}\n' +
            '}\n' +
            'func (s *Set) Add(v string)     { s.m[v] = struct{}{} }\n' +
            'func (s *Set) Remove(v string)  { delete(s.m, v) }\n' +
            'func (s *Set) Has(v string) bool {\n' +
            '    _, ok := s.m[v]\n' +
            '    return ok\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    s := NewSet()\n' +
            '    s.Add("apple")\n' +
            '    s.Add("banana")\n' +
            '    fmt.Println(s.Has("apple"))  // true\n' +
            '    fmt.Println(s.Has("grape"))  // false\n' +
            '}\n' +
            '```\n\n' +
            '**示例 4：map 值为切片（分组聚合）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    students := []struct {\n' +
            '        name string\n' +
            '        grade int\n' +
            '    }{\n' +
            '        {"Alice", 3}, {"Bob", 2}, {"Carol", 3}, {"Dave", 2},\n' +
            '    }\n' +
            '\n' +
            '    // 按年级分组\n' +
            '    groups := make(map[int][]string)\n' +
            '    for _, s := range students {\n' +
            '        groups[s.grade] = append(groups[s.grade], s.name)\n' +
            '    }\n' +
            '\n' +
            '    for grade, names := range groups {\n' +
            '        fmt.Printf("Grade %d: %v\\n", grade, names)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **nil map 不能写**：`var m map[string]int` 是 nil，`m["x"] = 1` 会 panic；必须先 `make`。但 nil map 可以读（返回零值）。\n' +
            '2. **键必须是可比较类型**：string、int、bool、指针、channel、接口、数组（固定长度）可作键；切片、map、函数不可作键（无法 ==）。结构体若所有字段都可比较则也可作键。\n' +
            '3. **遍历顺序随机**：Go 故意随机化，防止依赖顺序。需要有序遍历必须先收集键排序。\n' +
            '4. **并发不安全**：多 goroutine 同时读写 map 会 panic（`concurrent map writes`），需用 `sync.Mutex` 或 `sync.RWMutex` 保护，或用 `sync.Map`。\n' +
            '5. **零值陷阱**：访问不存在的键返回零值，无法区分"键不存在"和"值就是零值"——必须用 `v, ok := m[k]` 模式。\n' +
            '6. **map 不是引用计数**：map 不像 Python 有引用计数，没有任何方式获取 map 的"容量"（`cap(m)` 非法）。\n' +
            '7. **delete 不会缩容**：删除大量键后内存不会自动释放，若需释放需新建 map 复制需要的键。\n' +
            '8. **结构体作键要小心**：结构体含指针字段时，== 比较的是指针值而非指向内容，可能导致意外。\n\n' +
            '## 实际应用\n\n' +
            '**1. 缓存系统**：Redis 客户端本地缓存、HTTP 响应缓存、计算结果记忆化——map 是最直接的内存缓存。\n\n' +
            '```go\n' +
            'var cache = make(map[string][]byte)\n' +
            'var mu sync.RWMutex\n' +
            'func get(key string) ([]byte, bool) {\n' +
            '    mu.RLock()\n' +
            '    defer mu.RUnlock()\n' +
            '    v, ok := cache[key]\n' +
            '    return v, ok\n' +
            '}\n' +
            '```\n\n' +
            '**2. 配置管理**：YAML/JSON 配置解析为 `map[string]interface{}`，路由表 `map[string]HandlerFunc`，' +
            '依赖注入容器 `map[reflect.Type]interface{}`。\n\n' +
            '**3. 数据聚合（GROUP BY）**：按城市统计用户数、按商品类目统计销量、日志按错误码计数——' +
            '词频统计是其最简形态，搜索引擎倒排索引是其工业级延伸。\n\n' +
            '**4. 去重**：用 `map[T]struct{}` 实现集合，O(1) 判断元素是否存在。\n\n' +
            '## 扩展知识\n\n' +
            '**map 内部实现**：Go map 用哈希表+链地址法（bucket 数组，每个 bucket 存 8 个 KV）。' +
            '负载因子超过阈值（6.5）时触发扩容（翻倍或同容量整理）。每个 bucket 内部还缓存了 top hash 加速比较。\n\n' +
            '**sync.Map 适用场景**：读多写少、或多个独立 goroutine 写不同键时，`sync.Map` 比加锁 map 更高效。' +
            '但其 API 较繁琐（`Load/Store/LoadOrStore/Delete`），且写入开销大。\n\n' +
            '**map 的内存布局**：map 的值不能取地址（`&m[k]` 非法），因为 rehash 后地址会变。' +
            '这也是为何 map 的值类型不能直接修改字段——必须先取出来改完再放回。\n\n' +
            '**泛型 map 操作（Go 1.18+ / 1.21+）**：`maps` 标准库包提供 `maps.Clone`、`maps.Copy`、`maps.Equal`、' +
            '`maps.Keys`、`maps.Values` 等泛型函数，简化常见操作。\n\n' +
            '**与 Python dict 对比**：Python dict 是有序哈希表（3.7+ 保证插入顺序），Go map 顺序随机；' +
            'Python dict 键需可哈希（`__hash__`），Go map 键需可比较（`==`）；Python dict 有 `get(k, default)`，' +
            'Go 用 ok 模式；Python 用 `set`，Go 用 `map[T]struct{}`。',
          examples: [
            {
              title: 'map 基本操作',
              code: `package main

import "fmt"

func main() {
    m := map[string]int{"数学": 90, "语文": 85, "英语": 92}
    fmt.Println(m["数学"])
    m["体育"] = 88
    delete(m, "语文")
    fmt.Println(m["语文"])
    fmt.Println(len(m))
}`,
              explanation:
                '创建、读取、设置、删除 map。删除后访问"语文"返回零值 0。' +
                '最终 map 有 3 项（数学、英语、体育）。输出：90、0、3（三行）。',
            },
            {
              title: '检查键是否存在',
              code: `package main

import "fmt"

func main() {
    m := map[string]int{"a": 1, "b": 2}
    v, ok := m["a"]
    fmt.Println(v, ok)
    v, ok = m["c"]
    fmt.Println(v, ok)
}`,
              explanation:
                '`v, ok := m[key]` 中 ok 表示键是否存在。a 存在返回 1 true；c 不存在返回 0 false。' +
                '输出：1 true、0 false（两行）。',
            },
            {
              title: '词频统计',
              code: `package main

import (
    "fmt"
    "strings"
)

func main() {
    text := "go is great and go is fast"
    words := strings.Fields(text)
    counts := make(map[string]int)
    for _, w := range words {
        counts[w]++
    }
    fmt.Println(counts["go"])
    fmt.Println(counts["is"])
}`,
              explanation:
                '`strings.Fields` 按空白分割字符串为单词切片。`counts[w]++` 累计词频（不存在时零值 0 自增）。' +
                'go 出现 2 次，is 出现 2 次。输出：2、2（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '从 map 中取出 "香蕉" 的数量并输出（5）。',
              starter_code: `package main

import "fmt"

func main() {
    m := map[string]int{"苹果": 3, "香蕉": 5, "橙子": 2}
    fmt.Println(m[___])
}`,
              expected_output: '5',
              hints: [
                '访问 map 用 m[键]',
                '键是字符串 "香蕉"',
                '答案: "香蕉"',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全词频统计的累加，使 "go" 出现 3 次。',
              starter_code: `package main

import (
    "fmt"
    "strings"
)

func main() {
    text := "go go go is is great"
    words := strings.Fields(text)
    counts := make(map[string]int)
    for _, w := range words {
        counts[___]++
    }
    fmt.Println(counts["go"])
}`,
              expected_output: '3',
              hints: [
                '对每个单词 w 累加计数',
                'counts[w]++',
                '答案: w',
              ],
            },
          ],
          realWorldScenario:
            'map 是后端开发的核心数据结构。缓存系统用 map 存储 key-value（如 Redis 客户端的本地缓存）；配置管理用 map 加载 YAML/JSON 配置；数据聚合用 map 做 GROUP BY 统计（如按城市统计用户数、按商品类目统计销量）。词频统计是搜索引擎倒排索引、日志分析、推荐系统特征工程的雏形。理解 map 的零值行为和 ok 模式能避免"键不存在"导致的隐性 bug。',
        },
        {
          id: 'go-ch4-l3',
          title: '字符串与 rune',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'Go 的字符串是**只读的字节序列**，底层用 UTF-8 编码。这是 Go 字符串最关键的特性——' +
            '它不是字符数组，而是字节切片。`len(s)` 返回**字节数**（不是字符数），' +
            '所以 `len("Go语言")` 是 8（G=1, o=1, 语=3 字节, 言=3 字节），而不是 4。' +
            '这个细节在处理中文、emoji 等 Unicode 字符时是最常见的踩坑点。\n\n' +
            '为何这样设计？字符串作为字节序列意味着：(1) 字符串不可变（只读）；(2) UTF-8 编码天然兼容 ASCII；' +
            '(3) 字符串内存紧凑（无 4 字节 rune 浪费）；(4) `len` 是 O(1)。代价是访问第 N 个"字符"需要 O(N) 解码。\n\n' +
            '`rune` 是 Go 处理 Unicode 字符的类型（本质是 `int32` 的别名）。一个 rune 代表一个 Unicode 码点。' +
            '把字符串转为 `[]rune` 后，每个元素是一个字符，`len([]rune(s))` 才是真正的字符数。' +
            '`byte` 是 `uint8` 的别名，代表单个字节——`[]byte(s)` 得到字节切片。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 字符串基础\n' +
            's := "Hello"\n' +
            'b := byte(\'A\')       // byte 是 uint8 别名\n' +
            'r := rune(\'你\')      // rune 是 int32 别名\n' +
            '\n' +
            '// 长度\n' +
            'n := len(s)                // 字节数\n' +
            'm := utf8.RuneCountInString(s) // 字符数（不分配，高效）\n' +
            'p := len([]rune(s))        // 字符数（会分配切片）\n' +
            '\n' +
            '// 遍历（range 自动解码 UTF-8）\n' +
            'for i, r := range s {      // i 是字节索引，r 是 rune\n' +
            '    fmt.Printf("%d: %c\\n", i, r)\n' +
            '}\n' +
            '\n' +
            '// 按字节遍历\n' +
            'for i := 0; i < len(s); i++ {\n' +
            '    fmt.Printf("%x ", s[i]) // 字节值\n' +
            '}\n' +
            '\n' +
            '// 字符串与字节切片互转\n' +
            'bs := []byte(s)   // 复制一份（字符串不可变，需复制）\n' +
            's2 := string(bs)  // 字节转回字符串（也会复制）\n' +
            '\n' +
            '// 字符串与 rune 切片互转\n' +
            'rs := []rune(s)   // 解码为码点\n' +
            's3 := string(rs)  // 编码回字符串\n' +
            '```\n\n' +
            '| 概念 | 类型 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 字节 | `byte` (`uint8`) | 1 字节，原始存储单元 |\n' +
            '| 码点 | `rune` (`int32`) | 1 个 Unicode 字符 |\n' +
            '| 字符串 | `string` | 只读 UTF-8 字节序列 |\n' +
            '| `len(s)` | - | 返回字节数 |\n' +
            '| `[]byte(s)` | `[]byte` | 转为字节切片（复制） |\n' +
            '| `[]rune(s)` | `[]rune` | 转为码点切片（解码+复制） |\n' +
            '| `range s` | - | 自动解码，i 是字节索引，r 是 rune |\n\n' +
            '| strings 包函数 | 说明 |\n' +
            '|----------------|------|\n' +
            '| `strings.Split(s, sep)` | 按 sep 分割为切片 |\n' +
            '| `strings.Join(slice, sep)` | 用 sep 拼接切片 |\n' +
            '| `strings.Contains(s, sub)` | 是否包含子串 |\n' +
            '| `strings.HasPrefix(s, p)` | 是否有前缀 |\n' +
            '| `strings.HasSuffix(s, s)` | 是否有后缀 |\n' +
            '| `strings.Index(s, sub)` | 子串首次位置，-1 不存在 |\n' +
            '| `strings.Replace(s, old, new, n)` | 替换 n 次，-1 全替换 |\n' +
            '| `strings.ToLower(s)` / `ToUpper` | 大小写转换 |\n' +
            '| `strings.TrimSpace(s)` | 去首尾空白 |\n' +
            '| `strings.Fields(s)` | 按空白分割为单词切片 |\n\n' +
            '| strconv 包函数 | 说明 |\n' +
            '|----------------|------|\n' +
            '| `strconv.Itoa(i)` | int 转 string |\n' +
            '| `strconv.Atoi(s)` | string 转 int（返回 int, error） |\n' +
            '| `strconv.FormatFloat(f, fmt, prec, bits)` | float 转 string |\n' +
            '| `strconv.ParseFloat(s, bits)` | string 转 float |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：字节数 vs 字符数**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "unicode/utf8"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    s := "Go语言"\n' +
            '    fmt.Println(len(s))                        // 8（字节数）\n' +
            '    fmt.Println(utf8.RuneCountInString(s))     // 4（字符数，高效）\n' +
            '    fmt.Println(len([]rune(s)))                // 4（字符数，会分配）\n' +
            '\n' +
            '    emoji := "🎉🚀"\n' +
            '    fmt.Println(len(emoji))                     // 8（每个 emoji 4 字节）\n' +
            '    fmt.Println(utf8.RuneCountInString(emoji))  // 2\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：range 遍历字符串（字节索引 vs 字符）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    s := "Hi你好"\n' +
            '    for i, r := range s {\n' +
            '        fmt.Printf("字节索引=%d 字符=%c 码点=U+%04X\\n", i, r, r)\n' +
            '    }\n' +
            '    // H(0) i(1) 你(2) 好(5)——"你"占 3 字节，所以"好"的索引是 5\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：中文字符串按字符截取（安全截断）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func substr(s string, start, length int) string {\n' +
            '    runes := []rune(s)\n' +
            '    if start < 0 || start >= len(runes) {\n' +
            '        return ""\n' +
            '    }\n' +
            '    end := start + length\n' +
            '    if end > len(runes) {\n' +
            '        end = len(runes)\n' +
            '    }\n' +
            '    return string(runes[start:end])\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    s := "Go语言编程"\n' +
            '    fmt.Println(substr(s, 2, 2)) // 语言\n' +
            '    fmt.Println(s[:4])            // 直接字节截取中文会乱码！\n' +
            '}\n' +
            '```\n\n' +
            '**示例 4：回文判断（双指针）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func isPalindrome(s string) bool {\n' +
            '    runes := []rune(s) // 必须转 rune，否则中文按字节比较出错\n' +
            '    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {\n' +
            '        if runes[i] != runes[j] {\n' +
            '            return false\n' +
            '        }\n' +
            '    }\n' +
            '    return true\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    fmt.Println(isPalindrome("上海自来水来自海上")) // true\n' +
            '    fmt.Println(isPalindrome("hello"))             // false\n' +
            '    fmt.Println(isPalindrome("abcba"))             // true\n' +
            '}\n' +
            '```\n\n' +
            '**示例 5：strings 包常用操作**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "strings"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    s := "Go,Golang,Go"\n' +
            '    parts := strings.Split(s, ",")\n' +
            '    fmt.Println(parts)                       // [Go Golang Go]\n' +
            '    fmt.Println(strings.Join(parts, "-"))    // Go-Golang-Go\n' +
            '    fmt.Println(strings.Contains(s, "lang")) // true\n' +
            '    fmt.Println(strings.Count(s, "Go"))      // 3\n' +
            '    fmt.Println(strings.Replace(s, "Go", "Java", 1)) // Java,Golang,Go\n' +
            '    fmt.Println(strings.ReplaceAll(s, "Go", "Java")) // Java,Javalang,Java\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **`len(s)` 是字节数不是字符数**：处理中文/emoji 必须用 `utf8.RuneCountInString` 或 `[]rune`。这是最常见的新手 bug。\n' +
            '2. **字符串不可变**：不能 `s[0] = \'h\'`；要修改必须 `bs := []byte(s); bs[0] = \'h\'; s = string(bs)`。\n' +
            '3. **按字节截取中文会乱码**：`s[:4]` 可能截断一个 3 字节的中文字符产生乱码，必须转 `[]rune` 再截取。\n' +
            '4. **range 的索引是字节索引**：`for i, r := range s` 中 i 跳跃式增长（按 UTF-8 编码长度），不是连续 0,1,2。\n' +
            '5. **`[]byte(s)` 和 `string(b)` 都会复制内存**：字符串不可变所以转换需复制。高频转换用 `strings.Builder` 或 `bytes.Buffer`。\n' +
            '6. **字符串拼接用 `+` 性能差**：循环中拼接应用 `strings.Builder`（Go 1.10+），它内部管理字节切片避免反复分配。\n' +
            '7. **`==` 比较字符串按字节**：Go 字符串 `==` 是逐字节比较，O(n) 但常被优化（先比长度、指针）。\n' +
            '8. **字符串包含 \\0 不截断**：Go 字符串可以包含 null 字节（不像 C），`len` 包含 \\0。\n' +
            '9. **rune 字面量用单引号**：`\'a\'` 是 rune（int32），`"a"` 是 string。`\'a\' == 97`。\n\n' +
            '## 实际应用\n\n' +
            '**1. 国际化文本处理**：中文按字符截断（前端显示省略号）、emoji 长度校验（用户名/签名）、' +
            '混合字符宽度计算（终端对齐）——都必须基于 rune 而非字节。\n\n' +
            '**2. 日志/CSV/配置解析**：`strings.Split`、`strings.Fields`、`strings.TrimSpace` 是文本解析三剑客。' +
            '处理一行日志、一个 CSV 行、一段配置都离不开它们。\n\n' +
            '```go\n' +
            '// 解析日志行：[2024-01-01] INFO user=42 msg=login\n' +
            'parts := strings.Fields(line)\n' +
            'timestamp := strings.Trim(parts[0], "[]")\n' +
            'level := parts[1]\n' +
            '```\n\n' +
            '**3. 搜索高亮与文本分析**：`strings.Contains` 做关键词过滤、`strings.Index` 定位插入点、' +
            '回文判断的双指针技巧用于 DNA 序列比对、文本相似度计算。\n\n' +
            '**4. URL/HTTP 处理**：解析 query 参数、提取 path、校验前缀 `http://`——strings 包是 HTTP 后端日常工具。\n\n' +
            '## 扩展知识\n\n' +
            '**UTF-8 编码原理**：UTF-8 是变长编码——ASCII 字符 1 字节，中文/西欧字符 2-3 字节，emoji 4 字节。' +
            '首字节的前导 1 的个数表示该字符占几个字节。这种设计让 ASCII 与 UTF-8 完全兼容，且具有自同步性（' +
            '从任意字节开始向后扫描能找到下一个字符起点）。\n\n' +
            '**strings.Builder 高效拼接**：Go 1.10+ 推荐 `strings.Builder`，它用 `[]byte` 管理且禁止拷贝（`WriteString` 直接 append）。\n\n' +
            '```go\n' +
            'var b strings.Builder\n' +
            'for i := 0; i < 1000; i++ {\n' +
            '    b.WriteString("item")\n' +
            '}\n' +
            'result := b.String() // 一次分配\n' +
            '```\n\n' +
            '**strings.NewReader**：把字符串包装成 `io.Reader`，便于传入需要 Reader 的 API（如 `io.Copy`、`http.Post`）。\n\n' +
            '**rune 与码点 vs 字形簇**：一个 Unicode 码点（rune）不等于一个"视觉字符"——' +
            '如 `é` 可能是单个码点 U+00E9，也可能是 e + 组合重音两个码点。处理视觉字符需用 `golang.org/x/text/unicode/norm` ' +
            '或第三方字形簇库。\n\n' +
            '**与 Python 字符串对比**：Python3 字符串是 Unicode 字符序列（`len("Go语言")`==4），Go 字符串是字节序列（`len`==8）；' +
            'Python 用 `ord`/`chr`，Go 用 `rune`/`%c`；Python 字符串可变切片返回新串，Go 字符串同样不可变；' +
            'Python 用 `split`/`join`，Go 的 `strings` 包 API 几乎对应。',
          examples: [
            {
              title: '字节数与字符数',
              code: `package main

import "fmt"

func main() {
    s := "Go语言"
    fmt.Println(len(s))
    fmt.Println(len([]rune(s)))
}`,
              explanation:
                '`len(s)` 是字节数 8（Go 各 1 字节，语、言各 3 字节）。' +
                '`len([]rune(s))` 转为 rune 切片后是字符数 4。输出：8、4（两行）。',
            },
            {
              title: 'range 遍历字符串',
              code: `package main

import "fmt"

func main() {
    for i, r := range "Hi你好" {
        fmt.Printf("%d: %c\\n", i, r)
    }
}`,
              explanation:
                '`range` 字符串时返回字节索引 i 和 rune r。`%c` 把 rune 格式化为字符。' +
                'H(0)、i(1)、你(2)、好(5)——注意"好"的索引是 5（"你"占 3 字节）。输出四行。',
            },
            {
              title: '回文判断',
              code: `package main

import "fmt"

func isPalindrome(s string) bool {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        if runes[i] != runes[j] {
            return false
        }
    }
    return true
}

func main() {
    fmt.Println(isPalindrome("上海自来水来自海上"))
    fmt.Println(isPalindrome("hello"))
}`,
              explanation:
                '把字符串转为 rune 切片，双指针从头尾向中间比较。"上海自来水来自海上"正反相同返回 true，' +
                '"hello"不是回文返回 false。输出：true、false（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '把 "Hello世界" 转为 rune 切片并输出字符数（7）。',
              starter_code: `package main

import "fmt"

func main() {
    s := "Hello世界"
    fmt.Println(len([]___(s)))
}`,
              expected_output: '7',
              hints: [
                '哪个类型代表一个 Unicode 字符',
                'rune 是 int32 的别名，表示码点',
                '答案: rune',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全回文判断，使 "上海自来水来自海上" 输出 true。',
              starter_code: `package main

import "fmt"

func isPalindrome(s string) bool {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        if runes[i] != runes[___] {
            return false
        }
    }
    return true
}

func main() {
    fmt.Println(isPalindrome("上海自来水来自海上"))
}`,
              expected_output: 'true',
              hints: [
                '双指针从两端向中间，右指针是哪个变量',
                'j 是右端索引',
                '答案: j',
              ],
            },
          ],
          realWorldScenario:
            '字符串处理在后端无处不在：解析 URL 参数、清洗用户输入、处理 CSV/日志文本、实现搜索高亮。理解字节与 rune 的区别对中文/国际化应用至关重要——按字节截断中文会产生乱码，按 rune 截断才安全。回文判断的双指针技巧广泛用于文本分析、DNA 序列比对等场景。strings 包是 Go 后端开发每天必用的工具。',
        },
        {
          id: 'go-ch4-l4',
          title: '指针',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '指针保存变量的**内存地址**。Go 用 `&` 取地址（`&x` 得到 x 的指针），`*` 解引用（`*p` 取指针指向的值）。' +
            '指针让函数能修改外部变量、避免大结构体的复制开销，是理解 Go 结构体方法和接口的基础。\n\n' +
            'Go 的指针相比 C **大幅简化**：没有指针运算（不能 `p++` 移动指针），这从语言层面消除了指针越界、' +
            '野指针、缓冲区溢出等安全隐患。Go 的指针更像是"安全的引用"，而非 C 的"原始地址算术"。\n\n' +
            '为何需要指针？Go 函数传参默认是**值传递**——复制一份传入。这保证了函数无副作用（修改不影响原值），' +
            '但也意味着：(1) 大结构体复制开销大；(2) 函数无法修改外部变量。指针解决了这两个问题——传指针只复制 8 字节地址，' +
            '且函数通过指针能修改外部状态。\n\n' +
            '何时用指针？(1) 函数需修改外部变量；(2) 结构体较大（>64 字节）避免复制；(3) 结构体方法需修改 receiver；' +
            '(4) 实现接口时需统一值/指针类型。何时用值？(1) 小结构体（如坐标 Point）；(2) 不可变数据；' +
            '(3) map/slice 本身就是引用类型，无需传指针。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 取地址与解引用\n' +
            'x := 42\n' +
            'p := &x       // p 是 *int，保存 x 的地址\n' +
            'v := *p       // 解引用，v == 42\n' +
            '*p = 100      // 通过指针修改 x，x 变成 100\n' +
            '\n' +
            '// 指针类型声明\n' +
            'var p1 *int          // nil 指针\n' +
            'p2 := &x             // *int\n' +
            '\n' +
            '// new 函数：分配零值并返回指针\n' +
            'p3 := new(int)       // *int，*p3 == 0\n' +
            'p4 := new(struct{ X int }) // *struct{...}\n' +
            '\n' +
            '// 通过指针修改外部变量\n' +
            'func increment(n *int) {\n' +
            '    *n++           // 解引用后自增\n' +
            '}\n' +
            '\n' +
            '// 结构体指针的字段访问（自动解引用）\n' +
            'type User struct{ Name string }\n' +
            'u := &User{Name: "Alice"}\n' +
            'u.Name = "Bob"      // 等价于 (*u).Name，自动解引用\n' +
            '\n' +
            '// 指针的指针\n' +
            'var pp **int = &p    // pp 指向 p，p 指向 x\n' +
            '```\n\n' +
            '| 操作 | 语法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 取地址 | `&x` | 得到 x 的指针 `*T` |\n' +
            '| 解引用 | `*p` | 取/改指针指向的值 |\n' +
            '| 空指针 | `nil` | 指针零值 |\n' +
            '| 分配 | `new(T)` | 返回 `*T`，指向零值 |\n' +
            '| 字段访问 | `p.Field` | 自动解引用 `(*p).Field` |\n' +
            '| 方法调用 | `p.Method()` | 自动解引用 |\n' +
            '| 比较 | `p == nil` | 指针可与 nil 比较 |\n' +
            '| 比较 | `p1 == p2` | 同类型指针可比（指向同地址才相等） |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：取地址、解引用、通过指针修改**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    x := 42\n' +
            '    p := &x\n' +
            '    fmt.Println(p)    // 0xc0000b2000（地址，每次不同）\n' +
            '    fmt.Println(*p)   // 42\n' +
            '    *p = 100          // 通过指针改 x\n' +
            '    fmt.Println(x)    // 100\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：用指针让函数修改外部变量**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func increment(n *int) {\n' +
            '    *n = *n + 1 // 必须传指针才能改外部变量\n' +
            '}\n' +
            '\n' +
            'func swap(a, b *int) {\n' +
            '    *a, *b = *b, *a // 通过指针交换两个变量的值\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    x := 10\n' +
            '    increment(&x)\n' +
            '    fmt.Println(x) // 11\n' +
            '\n' +
            '    a, b := 1, 2\n' +
            '    swap(&a, &b)\n' +
            '    fmt.Println(a, b) // 2 1\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：new 函数与结构体指针**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Point struct {\n' +
            '    X, Y int\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    p := new(int)\n' +
            '    fmt.Println(*p)  // 0（零值）\n' +
            '    *p = 100\n' +
            '    fmt.Println(*p)  // 100\n' +
            '\n' +
            '    // 结构体指针\n' +
            '    pt := &Point{X: 3, Y: 4}\n' +
            '    pt.X = 10         // 自动解引用，等价于 (*pt).X = 10\n' +
            '    fmt.Println(pt.X) // 10\n' +
            '\n' +
            '    // new 创建结构体指针\n' +
            '    pt2 := new(Point)\n' +
            '    fmt.Println(pt2)  // &{0 0}（零值）\n' +
            '}\n' +
            '```\n\n' +
            '**示例 4：nil 指针与 panic 防护**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func safePrint(p *int) {\n' +
            '    if p == nil {     // 使用前检查 nil\n' +
            '        fmt.Println("nil 指针")\n' +
            '        return\n' +
            '    }\n' +
            '    fmt.Println(*p)\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    var p *int         // nil 指针\n' +
            '    safePrint(p)       // nil 指针（不 panic）\n' +
            '\n' +
            '    x := 42\n' +
            '    safePrint(&x)      // 42\n' +
            '\n' +
            '    // *p 会 panic：runtime error: invalid memory address\n' +
            '    // defer/recover 可捕获 panic\n' +
            '}\n' +
            '```\n\n' +
            '**示例 5：指针接收者 vs 值接收者**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Counter struct{ n int }\n' +
            '\n' +
            'func (c *Counter) Inc() { c.n++ } // 指针接收者：能修改\n' +
            'func (c Counter) Get() int { return c.n } // 值接收者：只读\n' +
            '\n' +
            'func main() {\n' +
            '    c := &Counter{}\n' +
            '    c.Inc()\n' +
            '    c.Inc()\n' +
            '    fmt.Println(c.Get()) // 2\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **没有指针运算**：Go 不允许 `p++`、`p+1`、`p[i]`（指针当数组用）。这消除了 C 中大量的指针越界 bug。\n' +
            '2. **nil 指针解引用会 panic**：`var p *int; *p` 直接 panic（`runtime error: invalid memory address`）。' +
            '使用指针前应检查 `if p != nil`，或用 defer/recover 兜底。\n' +
            '3. **不能取常量/字面量的地址**：`&42`、`&"hello"` 非法。必须先赋给变量。但 `&Point{1,2}`（复合字面量）合法。\n' +
            '4. **不能取 map 元素的地址**：`&m["k"]` 非法，因为 map rehash 后地址会变。\n' +
            '5. **不能取 slice 元素的地址后跨 append**：`p := &s[0]; s = append(s, x); *p` 可能无效（扩容后旧地址失效）。\n' +
            '6. **Go 没有 `->` 运算符**：结构体指针访问字段统一用 `.`，编译器自动解引用。\n' +
            '7. **new vs make**：`new(T)` 返回 `*T` 指向零值（用于值类型和结构体）；`make` 只用于 slice/map/channel 且返回值类型（非指针）。\n' +
            '8. **指针接收者 vs 值接收者一致性**：一个类型的方法集，指针接收者包含值接收者方法，反之不成立。实现接口时要注意。\n' +
            '9. **逃逸分析影响性能**：返回局部变量地址会让其"逃逸"到堆（编译器自动堆分配）。Go 的逃逸分析会决定分配在栈还是堆。\n\n' +
            '## 实际应用\n\n' +
            '**1. 结构体方法**：90% 的结构体方法用指针接收者——既能修改字段又避免复制。这是 Go 中指针最常见的用途。\n\n' +
            '```go\n' +
            'func (u *User) UpdateName(name string) {\n' +
            '    u.Name = name // 修改字段\n' +
            '}\n' +
            '```\n\n' +
            '**2. 并发共享状态**：goroutine 间共享数据通过指针（配合 `sync.Mutex` 保证安全）。' +
            'channel 传指针要格外小心——确保不会有多个 goroutine 同时访问。\n\n' +
            '**3. 性能优化**：大结构体传参用指针避免复制。但小结构体（<64 字节）传值可能更快（cache 友好、避免逃逸）。\n\n' +
            '**4. 可选参数与 nil 检查**：函数接受 `*T` 表示"可选"，调用方传 nil 表示无值，函数内检查 nil。' +
            '这替代了其他语言的 null/Optional。\n\n' +
            '**5. 链表/树等数据结构**：节点包含 `next *Node`、`left *TreeNode` 等指针字段，构建递归数据结构。\n\n' +
            '## 扩展知识\n\n' +
            '**栈 vs 堆分配**：Go 编译器通过逃逸分析决定变量分配在栈还是堆。栈分配零开销（函数返回自动回收），' +
            '堆分配需 GC 回收。返回局部变量地址会触发逃逸到堆——但这在 Go 中是安全的（GC 会管理）。\n\n' +
            '```go\n' +
            'func newInt() *int {\n' +
            '    x := 42\n' +
            '    return &x // x 逃逸到堆，安全（不像 C 会悬空指针）\n' +
            '}\n' +
            '```\n\n' +
            '**unsafe.Pointer**：`unsafe` 包提供绕过类型系统的指针转换（如 `*int` 转 `*float64`），' +
            '用于底层性能优化、与 C 互操作。日常编程绝不应使用，它破坏了 Go 的内存安全保证。\n\n' +
            '**指针与接口**：接口内部已包含指针（接口值是 type+pointer），所以接口通常不需要传 `*Interface`。' +
            '但若结构体方法是指针接收者，则必须传 `&struct` 给接口。\n\n' +
            '**GC 与指针**：Go 的并发标记清除 GC 追踪所有堆上指针。指针越少 GC 压力越小——' +
            '这也是为何 Go 推荐值类型（小结构体、数组）以减少指针。\n\n' +
            '**与 C/Python 指针对比**：C 指针可运算、需手动管理内存（malloc/free）；Go 指针不可运算、有 GC 自动管理。' +
            'Python 没有显式指针（一切皆对象引用），但 Python 的"引用"语义类似 Go 的指针（共享、可变）。' +
            'Go 在"值语义的安全"和"指针的高效"之间给了开发者显式选择权。',
          examples: [
            {
              title: '取地址与解引用',
              code: `package main

import "fmt"

func main() {
    x := 42
    p := &x
    fmt.Println(p)
    fmt.Println(*p)
    *p = 100
    fmt.Println(x)
}`,
              explanation:
                '`&x` 取 x 的地址赋给 p（*int 类型）。`*p` 解引用读取值 42。`*p = 100` 通过指针修改 x。' +
                '输出：地址（每次不同）、42、100。第一行地址不固定，后两行确定。',
            },
            {
              title: '用指针修改外部变量',
              code: `package main

import "fmt"

func increment(n *int) {
    *n = *n + 1
}

func main() {
    x := 10
    increment(&x)
    fmt.Println(x)
}`,
              explanation:
                '传指针让函数能修改外部变量。`increment(&x)` 把 x 的地址传入，函数内 `*n++` 修改 x。' +
                'x 从 10 变成 11。输出：11。',
            },
            {
              title: 'new 函数',
              code: `package main

import "fmt"

func main() {
    p := new(int)
    fmt.Println(*p)
    *p = 100
    fmt.Println(*p)
}`,
              explanation:
                '`new(int)` 分配一个 int 零值并返回指针。`*p` 初始为 0（零值），赋值后变 100。' +
                '输出：0、100（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '解引用指针 p 输出 x 的值（42）。',
              starter_code: `package main

import "fmt"

func main() {
    x := 42
    p := &x
    fmt.Println(*___)
}`,
              expected_output: '42',
              hints: [
                'p 是指向 x 的指针',
                '解引用用 *p',
                '答案: p',
              ],
            },
            {
              type: 'output-match',
              prompt: '通过指针调用 addOne 让 count 自增，使输出 6。',
              starter_code: `package main

import "fmt"

func addOne(n *int) {
    *n = *n + 1
}

func main() {
    count := 5
    addOne(___)
    fmt.Println(count)
}`,
              expected_output: '6',
              hints: [
                '函数需要 count 的地址',
                '取地址用 &',
                '答案: &count',
              ],
            },
          ],
          realWorldScenario:
            '指针在 Go 中无处不在。结构体方法常用指针接收者避免复制大对象并允许修改字段；并发编程中 goroutine 间共享状态需要指针（配合 mutex 保证安全）；性能敏感场景用指针避免大结构体复制的开销。理解指针是写出高效 Go 代码的必修课——它让你在"值复制的安全"和"指针的高效"之间做出正确权衡。',
        },
      ],
    },
    // ================================================================
    // 第 5 章：结构体与方法
    // ================================================================
    {
      id: 'go-ch5',
      title: '结构体与方法',
      order: 4,
      lessons: [
        {
          id: 'go-ch5-l1',
          title: 'struct 定义',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '`struct` 是 Go 把多个字段聚合在一起的**复合类型**。语法 `type 结构体名 struct { 字段 }`。' +
            '结构体是 Go 建模现实世界的核心工具——用户、订单、商品、配置、API 请求/响应都用结构体表示。' +
            'Go 没有类（class），**结构体 + 方法 = Go 的面向对象**。\n\n' +
            '为何要 struct？散落的变量（`name, age, email`）难以管理、传递、序列化。结构体把它们组织成' +
            '一个有意义的整体——`User{Name, Age, Email}` 一目了然，便于传参、存储、JSON 序列化。' +
            '这对应数据库表的一行、JSON 对象的一个实例、领域模型的一个实体。\n\n' +
            '结构体是**值类型**——赋值和传参会复制所有字段。这与 map/slice（引用类型）不同。' +
            '值类型的好处是隔离（修改副本不影响原值），代价是大结构体复制开销。这正是为何需要指针（上一章）。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 基本定义\n' +
            'type Person struct {\n' +
            '    Name string\n' +
            '    Age  int\n' +
            '}\n' +
            '\n' +
            '// 同类型字段简写\n' +
            'type Point struct {\n' +
            '    X, Y, Z float64 // 三个都是 float64\n' +
            '}\n' +
            '\n' +
            '// 三种初始化方式\n' +
            'p1 := Person{Name: "小明", Age: 20} // 按字段名（推荐，顺序无关）\n' +
            'p2 := Person{"小明", 20}            // 按位置（必须按定义顺序）\n' +
            'p3 := Person{}                     // 零值初始化（Name="", Age=0）\n' +
            'p4 := Person{Name: "小红"}         // 部分初始化（Age=0 零值）\n' +
            '\n' +
            '// 字段访问与修改\n' +
            'p1.Age = 21\n' +
            'fmt.Println(p1.Name)\n' +
            '\n' +
            '// 嵌套结构体（组合）\n' +
            'type Address struct {\n' +
            '    City, Province string\n' +
            '}\n' +
            'type User struct {\n' +
            '    Name    string\n' +
            '    Addr    Address // User "拥有" Address\n' +
            '}\n' +
            'u := User{Name: "小红", Addr: Address{City: "上海", Province: "上海"}}\n' +
            'fmt.Println(u.Addr.City) // 链式访问\n' +
            '\n' +
            '// 结构体标签（tag）—— 反引号包裹的元数据\n' +
            'type Product struct {\n' +
            '    ID    int    `json:"id" db:"product_id"`\n' +
            '    Name  string `json:"name"`\n' +
            '    Price float64 `json:"price,omitempty"`\n' +
            '}\n' +
            '```\n\n' +
            '| 初始化方式 | 语法 | 说明 |\n' +
            '|-----------|------|------|\n' +
            '| 按字段名 | `T{Name: v}` | 推荐，顺序无关，字段增删不破坏 |\n' +
            '| 按位置 | `T{v1, v2}` | 必须按定义顺序，字段增删易出错 |\n' +
            '| 零值 | `T{}` | 所有字段零值 |\n' +
            '| 部分初始化 | `T{Name: v}` | 未指定字段取零值 |\n' +
            '| 取地址 | `&T{...}` | 返回 `*T`，常用于方法链 |\n\n' +
            '| 格式化动词 | 输出 |\n' +
            '|-----------|------|\n' +
            '| `%v` | `{小明 20}`（仅值） |\n' +
            '| `%+v` | `{Name:小明 Age:20}`（带字段名） |\n' +
            '| `%#v` | `main.Person{Name:"小明", Age:20}`（Go 语法） |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：定义、初始化、访问**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Person struct {\n' +
            '    Name string\n' +
            '    Age  int\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    p := Person{Name: "小明", Age: 20}\n' +
            '    fmt.Println(p.Name, p.Age)        // 小明 20\n' +
            '    fmt.Printf("%+v\\n", p)            // {Name:小明 Age:20}\n' +
            '    p.Age = 21\n' +
            '    fmt.Println(p.Age)                // 21\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：结构体是值类型（赋值即复制）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Point struct{ X, Y int }\n' +
            '\n' +
            'func modify(p Point) {\n' +
            '    p.X = 999 // 修改副本，不影响原值\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    p1 := Point{X: 1, Y: 2}\n' +
            '    p2 := p1            // 复制\n' +
            '    p2.X = 100\n' +
            '    fmt.Println(p1, p2) // {1 2} {100 2}\n' +
            '\n' +
            '    modify(p1)\n' +
            '    fmt.Println(p1)     // {1 2}（未受影响）\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：嵌套结构与 JSON 标签**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "encoding/json"\n' +
            '    "fmt"\n' +
            ')\n' +
            '\n' +
            'type Address struct {\n' +
            '    City     string `json:"city"`\n' +
            '    Province string `json:"province"`\n' +
            '}\n' +
            '\n' +
            'type User struct {\n' +
            '    ID   int     `json:"id"`\n' +
            '    Name string  `json:"name"`\n' +
            '    Addr Address `json:"address"`\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    u := User{ID: 1, Name: "小红", Addr: Address{City: "上海", Province: "上海"}}\n' +
            '    data, _ := json.Marshal(u)\n' +
            '    fmt.Println(string(data))\n' +
            '    // {"id":1,"name":"小红","address":{"city":"上海","province":"上海"}}\n' +
            '}\n' +
            '```\n\n' +
            '**示例 4：匿名结构体（一次性使用）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    // 不需预先 type 定义，直接使用\n' +
            '    p := struct {\n' +
            '        Name string\n' +
            '        Age  int\n' +
            '    }{Name: "临时", Age: 18}\n' +
            '    fmt.Printf("%+v\\n", p) // {Name:临时 Age:18}\n' +
            '\n' +
            '    // 常用于解析不确定结构的 JSON\n' +
            '    config := struct {\n' +
            '        Host string\n' +
            '        Port int\n' +
            '    }{Host: "localhost", Port: 8080}\n' +
            '    fmt.Println(config.Host, config.Port)\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **字段名首字母决定可见性**：大写（`Name`）= 导出（公开），小写（`name`）= 未导出（包内私有）。JSON 序列化只能序列化导出字段。\n' +
            '2. **按位置初始化易出错**：字段顺序变更会静默破坏所有按位置初始化的代码。**始终用按字段名初始化**。\n' +
            '3. **零值是有意义的**：Go 没有 null 字段，零值（0、""、false、nil）是合法初始状态。设计结构体时应让零值可用（如 `sync.Mutex` 零值即可用）。\n' +
            '4. **结构体不能包含自身**：`type T struct{ x T }` 非法（无限大小）。但可包含自身的指针 `type T struct{ next *T }`（链表节点）。\n' +
            '5. **标签用反引号**：`\`json:"name"\``，不能用双引号包裹。`omitempty` 表示零值时省略该字段。\n' +
            '6. **空结构体 `struct{}`**：占 0 字节，常用于 `map[T]struct{}` 做集合、`chan struct{}` 做信号。\n' +
            '7. **结构体比较**：若所有字段都可比较，结构体可用 `==` 比较。含切片/map/函数字段的结构体不可比较。\n' +
            '8. **字段对齐与内存布局**：字段顺序影响内存占用（对齐填充）。把大类型放前面、小类型紧凑排列可省内存。\n\n' +
            '## 实际应用\n\n' +
            '**1. 数据库模型**：结构体对应数据库表的一行，字段对应列，标签指定列名和约束。\n\n' +
            '```go\n' +
            'type User struct {\n' +
            '    ID        int64     `json:"id" db:"id"`\n' +
            '    Name      string    `json:"name" db:"name"`\n' +
            '    Email     string    `json:"email" db:"email"`\n' +
            '    CreatedAt time.Time `json:"created_at" db:"created_at"`\n' +
            '}\n' +
            '```\n\n' +
            '**2. API 请求/响应 DTO**：Web 框架（Gin、Echo）用结构体 + JSON 标签自动绑定请求体、序列化响应。\n\n' +
            '**3. 配置对象**：YAML/TOML/JSON 配置反序列化为结构体，类型安全且自文档化。\n\n' +
            '**4. 领域模型**：DDD 中的实体（Entity）和值对象（Value Object）都用结构体表达，配合方法封装业务逻辑。\n\n' +
            '## 扩展知识\n\n' +
            '**结构体内存布局**：Go 结构体字段按声明顺序连续存储，但会有对齐填充（alignment padding）。' +
            '例如 `struct{ a bool; b int64 }` 在 64 位机上占 16 字节（bool 后填充 7 字节对齐 int64），' +
            '而 `struct{ b int64; a bool }` 仅占 9 字节（+7 填充到 16）。`unsafe.Sizeof` 查看实际大小。\n\n' +
            '**空结构体 `struct{}` 的妙用**：0 字节大小，用于 channel 信号（`chan struct{}`）、set 实现（`map[K]struct{}`）、' +
            '方法接收者无需数据（`type Handler struct{}`）。\n\n' +
            '**结构体标签的多用途**：除 JSON 外，还有 `db`（sqlx）、`validate`（go-playground/validator）、' +
            '`gorm`（ORM）、`yaml`、`xml` 等。多个标签用空格分隔。\n\n' +
            '**构造函数约定**：Go 没有构造函数关键字，约定用 `NewXxx()` 工厂函数返回 `*Xxx`：' +
            '`func NewUser(name string) *User { return &User{Name: name} }`。\n\n' +
            '**与 Python class 对比**：Python class 有 `__init__`、继承、类方法、属性装饰器等丰富特性；' +
            'Go struct 极简——只有字段，行为靠方法（下节）。Python class 实例是引用（类似 Go 指针），' +
            'Go struct 默认是值。Go 的"组合优于继承"哲学避免了继承层的脆弱性。',
          examples: [
            {
              title: '定义并初始化结构体',
              code: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{Name: "小明", Age: 20}
    fmt.Println(p.Name, p.Age)
    fmt.Printf("%+v\\n", p)
}`,
              explanation:
                '`type Person struct` 定义结构体。按字段名初始化。`%+v` 输出带字段名。' +
                '输出：小明 20，然后 {Name:小明 Age:20}（两行）。',
            },
            {
              title: '三种初始化方式',
              code: `package main

import "fmt"

type Point struct {
    X, Y int
}

func main() {
    p1 := Point{X: 1, Y: 2}
    p2 := Point{3, 4}
    p3 := Point{}
    fmt.Println(p1, p2, p3)
}`,
              explanation:
                'p1 按字段名、p2 按位置、p3 零值。`X, Y int` 是同类型字段的简写。' +
                '输出：{1 2} {3 4} {0 0}（一行）。',
            },
            {
              title: '嵌套结构体',
              code: `package main

import "fmt"

type Address struct {
    City string
}

type User struct {
    Name    string
    Address Address
}

func main() {
    u := User{Name: "小红", Address: Address{City: "上海"}}
    fmt.Println(u.Name, u.Address.City)
}`,
              explanation:
                'User 包含 Address 字段，表达"用户拥有地址"。访问嵌套字段用 `u.Address.City`。' +
                '输出：小红 上海。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '访问并输出 Person 的 Age 字段（20）。',
              starter_code: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{Name: "小明", Age: 20}
    fmt.Println(p.Name, p.___)
}`,
              expected_output: '小明 20',
              hints: [
                '年龄字段叫什么',
                '访问字段用 p.字段名',
                '答案: Age',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Printf 输出书籍信息，补全价格字段，使输出 "Go语言圣经 由 张三 编写，价格 59.9"。',
              starter_code: `package main

import "fmt"

type Book struct {
    Title  string
    Author string
    Price  float64
}

func main() {
    b := Book{Title: "Go语言圣经", Author: "张三", Price: 59.9}
    fmt.Printf("%s 由 %s 编写，价格 %.1f\\n", b.Title, b.Author, b.___)
}`,
              expected_output: 'Go语言圣经 由 张三 编写，价格 59.9',
              hints: [
                '价格字段是 Price',
                '访问 b.Price',
                '答案: Price',
              ],
            },
          ],
          realWorldScenario:
            '结构体是 Go 建模现实世界的工具。在 Web 开发中，用户、订单、商品都用结构体表示，对应数据库表的一行。API 请求/响应体用带 JSON 标签的结构体定义，框架自动完成序列化。DTO（数据传输对象）、领域模型、配置对象都是结构体。掌握结构体是构建任何 Go 应用的第一步——它把散落的数据组织成有意义的整体。',
        },
        {
          id: 'go-ch5-l2',
          title: '方法',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            'Go 的**方法（method）**是绑定到特定类型上的函数。语法 `func (接收者) 方法名(参数) 返回值 { }`。' +
            '接收者写在 func 和方法名之间，相当于其他语言的 `this`/`self`。方法让数据和行为绑定，' +
            '是 Go 面向对象封装的体现——结构体持有状态，方法定义行为。\n\n' +
            '为何要方法而不只用函数？方法让调用形式更自然：`r.Area()` 比 `Area(r)` 更符合直觉，' +
            'IDE 自动补全更友好，且方法集是实现接口的前提（下节）。方法把"操作某类型数据的函数"语义化、组织化。\n\n' +
            '接收者有两种：**值接收者** `func (r Rectangle)` 和**指针接收者** `func (r *Rectangle)`。' +
            '这是 Go 方法最关键的设计决策——值接收者操作副本（只读），指针接收者操作原对象（可改）。' +
            '选择原则：(1) 需修改 receiver 用指针；(2) 大结构体避免复制用指针；(3) 小结构体只读可用值；' +
            '(4) 一个类型的方法集应统一（要么全值、要么全指针，避免混用）。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            'type Rectangle struct {\n' +
            '    Width, Height float64\n' +
            '}\n' +
            '\n' +
            '// 值接收者：只读，操作副本\n' +
            'func (r Rectangle) Area() float64 {\n' +
            '    return r.Width * r.Height\n' +
            '}\n' +
            'func (r Rectangle) Perimeter() float64 {\n' +
            '    return 2 * (r.Width + r.Height)\n' +
            '}\n' +
            '\n' +
            '// 指针接收者：可修改，操作原对象\n' +
            'func (r *Rectangle) Scale(factor float64) {\n' +
            '    r.Width *= factor\n' +
            '    r.Height *= factor\n' +
            '}\n' +
            'func (r *Rectangle) SetWidth(w float64) {\n' +
            '    r.Width = w\n' +
            '}\n' +
            '\n' +
            '// 调用（Go 自动取地址/解引用）\n' +
            'r := Rectangle{Width: 3, Height: 4}\n' +
            'r.Scale(2)        // 等价于 (&r).Scale(2)，自动取地址\n' +
            'fmt.Println(r.Area())\n' +
            '\n' +
            'p := &Rectangle{Width: 5, Height: 6}\n' +
            'p.Area()          // 等价于 (*p).Area()，自动解引用\n' +
            '```\n\n' +
            '| 特性 | 值接收者 `(r T)` | 指针接收者 `(r *T)` |\n' +
            '|------|-----------------|---------------------|\n' +
            '| 修改原对象 | 否（操作副本） | 是 |\n' +
            '| 复制开销 | 每次调用复制整个结构体 | 只复制 8 字节指针 |\n' +
            '| 适用场景 | 只读、小结构体 | 需修改、大结构体 |\n' +
            '| 方法集 | T 的方法集 = 值方法 | *T 的方法集 = 值方法+指针方法 |\n' +
            '| 接口实现 | T 实现接口需值方法 | *T 实现 T 和 *T 的方法 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：值接收者（只读计算）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Rectangle struct {\n' +
            '    Width, Height float64\n' +
            '}\n' +
            '\n' +
            'func (r Rectangle) Area() float64 {\n' +
            '    return r.Width * r.Height\n' +
            '}\n' +
            '\n' +
            'func (r Rectangle) Perimeter() float64 {\n' +
            '    return 2 * (r.Width + r.Height)\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    r := Rectangle{Width: 5, Height: 3}\n' +
            '    fmt.Println(r.Area())       // 15\n' +
            '    fmt.Println(r.Perimeter())  // 16\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：指针接收者（修改状态）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Counter struct{ count int }\n' +
            '\n' +
            'func (c *Counter) Increment() {\n' +
            '    c.count++ // 指针接收者，能修改原对象\n' +
            '}\n' +
            '\n' +
            'func (c *Counter) Reset() {\n' +
            '    c.count = 0\n' +
            '}\n' +
            '\n' +
            'func (c Counter) Get() int {\n' +
            '    return c.count // 值接收者，只读\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    c := &Counter{}\n' +
            '    c.Increment()\n' +
            '    c.Increment()\n' +
            '    c.Increment()\n' +
            '    fmt.Println(c.Get()) // 3\n' +
            '    c.Reset()\n' +
            '    fmt.Println(c.Get()) // 0\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：值/指针接收者混合与自动转换**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Rectangle struct{ W, H float64 }\n' +
            '\n' +
            'func (r Rectangle) Area() float64 { return r.W * r.H } // 值\n' +
            '\n' +
            'func (r *Rectangle) Scale(f float64) { // 指针\n' +
            '    r.W *= f\n' +
            '    r.H *= f\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    // 值调用指针方法：Go 自动取地址\n' +
            '    r := Rectangle{W: 3, H: 4}\n' +
            '    r.Scale(2) // (&r).Scale(2)\n' +
            '    fmt.Println(r.W, r.H, r.Area()) // 6 8 48\n' +
            '\n' +
            '    // 指针调用值方法：Go 自动解引用\n' +
            '    p := &Rectangle{W: 5, H: 6}\n' +
            '    fmt.Println(p.Area()) // (*p).Area() -> 30\n' +
            '}\n' +
            '```\n\n' +
            '**示例 4：方法链（Builder 模式）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type StringBuilder struct {\n' +
            '    parts []string\n' +
            '}\n' +
            '\n' +
            'func (s *StringBuilder) Add(str string) *StringBuilder {\n' +
            '    s.parts = append(s.parts, str)\n' +
            '    return s // 返回自身以支持链式调用\n' +
            '}\n' +
            '\n' +
            'func (s *StringBuilder) Build() string {\n' +
            '    result := ""\n' +
            '    for _, p := range s.parts {\n' +
            '        result += p\n' +
            '    }\n' +
            '    return result\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    s := &StringBuilder{}\n' +
            '    result := s.Add("Hello").Add(", ").Add("World").Add("!").Build()\n' +
            '    fmt.Println(result) // Hello, World!\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **值/指针接收者一致性**：一个类型的方法应统一用值或指针。混用会导致接口实现混乱（值类型的方法集不含指针方法）。\n' +
            '2. **指针接收者是惯例**：大结构体、需修改、或实现接口时，默认用指针接收者。Go 标准库大部分结构体方法用指针。\n' +
            '3. **值调用指针方法的前提**：值必须可寻址（addressable）。`Rectangle{3,4}.Scale(2)` 编译错误（字面量不可寻址），必须先赋给变量。\n' +
            '4. **方法名可与字段同名**：但不推荐，易混淆。`type T struct{ Name string }; func (t T) Name() string` 合法但风格差。\n' +
            '5. **方法不能用于基本类型**：不能给 `int` 定义方法（除非 `type MyInt int` 自定义类型）。这是为何 Go 用 `len(s)` 而非 `s.Length()`。\n' +
            '6. **方法集与接口**：值类型 T 的方法集只含值接收者方法；指针类型 *T 的方法集含两者。这影响接口实现——若接口有指针方法，只有 *T 满足。\n' +
            '7. **nil 指针可调用方法**：指针接收者方法可在 nil 上调用（需方法内检查 nil），这是 Go 的特性（如链表尾部）。\n' +
            '8. **方法表达式与方法值**：`f := r.Area` 是方法值（绑定接收者）；`f := Rectangle.Area` 是方法表达式（需显式传接收者）。\n\n' +
            '## 实际应用\n\n' +
            '**1. 领域模型的行为**：电商 Order 有 `Total()`、`ApplyDiscount()`、`Ship()`；User 有 `Validate()`、`UpdateProfile()`——' +
            '方法让业务对象自带行为，代码更内聚。\n\n' +
            '```go\n' +
            'func (o *Order) Total() float64 {\n' +
            '    sum := 0.0\n' +
            '    for _, item := range o.Items {\n' +
            '        sum += item.Price * float64(item.Qty)\n' +
            '    }\n' +
            '    return sum\n' +
            '}\n' +
            '```\n\n' +
            '**2. Builder 模式**：复杂对象构建用方法链（如示例 4），可读性强。`http.Server{}`、`strings.Builder` 都用此模式。\n\n' +
            '**3. 实现标准接口**：实现 `Stringer` 接口（`String() string`）自定义打印；实现 `error` 接口（`Error() string`）自定义错误；' +
            '实现 `json.Marshaler` 自定义序列化。\n\n' +
            '**4. mock 测试**：方法 + 接口让依赖可替换。生产用真实 DB 实现，测试用 mock 实现，解耦且可测。\n\n' +
            '## 扩展知识\n\n' +
            '**方法集规则**：\n' +
            '- 类型 `T` 的方法集 = 所有值接收者方法\n' +
            '- 类型 `*T` 的方法集 = 值接收者方法 + 指针接收者方法\n' +
            '- 接口变量只能持有满足其方法集的值。若接口含指针方法，只有 `*T` 满足\n\n' +
            '**方法值与方法表达式（Go 1.4+）**：\n' +
            '```go\n' +
            'r := Rectangle{3, 4}\n' +
            'f := r.Area   // 方法值：已绑定 r\n' +
            'f()           // 调用，返回 12\n' +
            '\n' +
            'g := Rectangle.Area  // 方法表达式：未绑定\n' +
            'g(r)                  // 显式传 r，返回 12\n' +
            '```\n\n' +
            '**nil 接收者**：指针接收者方法在 nil 上调用不 panic（除非方法内解引用）。这可用于"nil 对象"模式：' +
            '`func (n *Node) Next() *Node { if n == nil { return nil }; return n.next }`，让链表遍历无需 nil 检查。\n\n' +
            '**泛型方法限制**：Go 泛型方法不能在类型参数上定义额外约束（接收者的类型参数约束必须与类型定义一致）。\n\n' +
            '**与 Python 方法对比**：Python 方法第一个参数是 `self`（显式），Go 接收者写在 `( )` 内（更显眼）；' +
            'Python 方法绑定实例（描述符协议），Go 方法值绑定接收者；Python 没有"值/指针接收者"区分（一切皆引用），' +
            'Go 必须显式选择——这给性能调优提供了空间，但也增加了认知负担。',
          examples: [
            {
              title: '值接收者方法',
              code: `package main

import "fmt"

type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func main() {
    r := Rectangle{Width: 5, Height: 3}
    fmt.Println(r.Area())
}`,
              explanation:
                '`func (r Rectangle) Area()` 是值接收者方法，计算面积。5×3=15。' +
                '值接收者适合只读计算。输出：15。',
            },
            {
              title: '指针接收者方法',
              code: `package main

import "fmt"

type Counter struct {
    count int
}

func (c *Counter) Increment() {
    c.count++
}

func main() {
    c := &Counter{count: 0}
    c.Increment()
    c.Increment()
    fmt.Println(c.count)
}`,
              explanation:
                '`func (c *Counter) Increment()` 是指针接收者方法，能修改 c.count。' +
                '调用两次后 count 变 2。输出：2。',
            },
            {
              title: '方法改变状态',
              code: `package main

import "fmt"

type Rectangle struct {
    W, H float64
}

func (r *Rectangle) Scale(factor float64) {
    r.W *= factor
    r.H *= factor
}

func (r Rectangle) Area() float64 {
    return r.W * r.H
}

func main() {
    r := Rectangle{W: 3, H: 4}
    r.Scale(2)
    fmt.Println(r.W, r.H)
    fmt.Println(r.Area())
}`,
              explanation:
                'Scale 用指针接收者修改 W、H（放大 2 倍变为 6、8），Area 用值接收者计算面积（48）。' +
                '输出：6 8、48（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全面积方法，使 4×5 的矩形输出 20。',
              starter_code: `package main

import "fmt"

type Rectangle struct {
    W, H int
}

func (r Rectangle) Area() int {
    return r.W * r.___
}

func main() {
    r := Rectangle{W: 4, H: 5}
    fmt.Println(r.Area())
}`,
              expected_output: '20',
              hints: [
                '面积 = 宽 × 高',
                '高度字段是 H',
                '答案: H',
              ],
            },
            {
              type: 'output-match',
              prompt: '调用指针接收者方法 Scale(2) 放大矩形，使 W、H 变为 6 8。',
              starter_code: `package main

import "fmt"

type Rectangle struct {
    W, H float64
}

func (r *Rectangle) Scale(factor float64) {
    r.W *= factor
    r.H *= factor
}

func main() {
    r := Rectangle{W: 3, H: 4}
    r.___(2)
    fmt.Println(r.W, r.H)
}`,
              expected_output: '6 8',
              hints: [
                '放大方法叫什么',
                '方法名是 Scale',
                '答案: Scale',
              ],
            },
          ],
          realWorldScenario:
            '方法让业务对象自带行为。电商系统中 Order 类型有 `Total()` 计算总价、`ApplyDiscount()` 应用折扣、`Ship()` 发货等方法；用户系统 User 有 `Validate()` 校验、`UpdateProfile()` 更新资料。值接收者用于查询计算，指针接收者用于修改状态——这个区分让代码意图清晰。结合接口，方法还能实现依赖注入和 mock 测试，是构建可维护后端的关键。',
        },
        {
          id: 'go-ch5-l3',
          title: '嵌入与组合',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'Go 没有"继承"，而是用**嵌入（embedding）**实现代码复用。把一个结构体作为另一个结构体的**匿名字段**，' +
            '内嵌类型的字段和方法会被"提升"到外层结构体，可以直接访问。这是 Go "组合优于继承"哲学的体现。\n\n' +
            '为何选择组合而非继承？继承（如 Java/Python 的 class 继承）构建深层类型层级，带来"脆弱基类"问题——' +
            '修改父类可能破坏所有子类。组合让依赖扁平、清晰：每个组件独立实现、可替换、可测试。' +
            'Go 的嵌入是"语法糖"——编译器把内嵌类型的字段方法提升，但本质是组合而非 is-a 关系。\n\n' +
            '嵌入 vs 普通字段：普通字段 `type User struct { Addr Address }` 需 `u.Addr.City` 访问；' +
            '嵌入字段 `type User struct { Address }` 则 `u.City` 直接访问（提升）。嵌入还提升方法，这是普通字段没有的。\n\n' +
            '何时用嵌入？(1) 复用公共字段（如 BaseModel 的 ID/CreatedAt）；(2) 复用方法（如 Logger 的 Log）；' +
            '(3) 模拟 mixin。何时用普通字段？当你只想持有引用、不需提升字段方法时。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 基本嵌入\n' +
            'type Animal struct {\n' +
            '    Name string\n' +
            '}\n' +
            'func (a Animal) Speak() string { return a.Name + " 发出声音" }\n' +
            '\n' +
            'type Dog struct {\n' +
            '    Animal      // 匿名字段（嵌入），字段名就是类型名\n' +
            '    Breed string\n' +
            '}\n' +
            '\n' +
            '// 字段提升：d.Name 等价于 d.Animal.Name\n' +
            '// 方法提升：d.Speak() 等价于 d.Animal.Speak()\n' +
            'd := Dog{Animal: Animal{Name: "旺财"}, Breed: "金毛"}\n' +
            'd.Name        // 旺财\n' +
            'd.Speak()     // 旺财 发出声音\n' +
            'd.Animal.Name // 显式访问（也可）\n' +
            '\n' +
            '// 多重嵌入\n' +
            'type Logger struct{}\n' +
            'func (l Logger) Log(msg string) { fmt.Println(msg) }\n' +
            '\n' +
            'type Validator struct{}\n' +
            'func (v Validator) Validate(s string) bool { return len(s) > 0 }\n' +
            '\n' +
            'type Service struct {\n' +
            '    Logger     // 嵌入 Logger，获得 Log 方法\n' +
            '    Validator  // 嵌入 Validator，获得 Validate 方法\n' +
            '}\n' +
            's := Service{}\n' +
            's.Log("启动")       // 提升\n' +
            's.Validate("hello") // 提升\n' +
            '\n' +
            '// 方法重写（覆盖）\n' +
            'func (d Dog) Speak() string { // 重写，调用时优先用外层\n' +
            '    return d.Name + " 汪汪"\n' +
            '}\n' +
            '```\n\n' +
            '| 特性 | 嵌入（匿名字段） | 普通字段 |\n' +
            '|------|----------------|----------|\n' +
            '| 字段提升 | 是（`d.Name`） | 否（`u.Addr.City`） |\n' +
            '| 方法提升 | 是（`d.Speak()`） | 否 |\n' +
            '| 显式访问 | `d.Animal.Name` | `u.Addr.City` |\n' +
            '| 字段名 | 类型名 | 自定义名 |\n' +
            '| 多重嵌入 | 支持（mixin） | 支持 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：基本嵌入（字段+方法提升）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Animal struct{ Name string }\n' +
            '\n' +
            'func (a Animal) Speak() string { return a.Name + " 发出声音" }\n' +
            '\n' +
            'type Dog struct {\n' +
            '    Animal\n' +
            '    Breed string\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    d := Dog{Animal: Animal{Name: "旺财"}, Breed: "金毛"}\n' +
            '    fmt.Println(d.Name)    // 旺财（提升）\n' +
            '    fmt.Println(d.Speak()) // 旺财 发出声音（提升）\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：方法重写（覆盖提升的方法）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Animal struct{ Name string }\n' +
            'func (a Animal) Speak() string { return a.Name + " 发出声音" }\n' +
            '\n' +
            'type Dog struct{ Animal }\n' +
            'func (d Dog) Speak() string { return d.Name + " 汪汪汪" } // 重写\n' +
            '\n' +
            'type Cat struct{ Animal }\n' +
            'func (c Cat) Speak() string { return c.Name + " 喵喵喵" } // 重写\n' +
            '\n' +
            'func main() {\n' +
            '    d := Dog{Animal: Animal{Name: "旺财"}}\n' +
            '    c := Cat{Animal: Animal{Name: "咪咪"}}\n' +
            '    fmt.Println(d.Speak()) // 旺财 汪汪汪\n' +
            '    fmt.Println(c.Speak()) // 咪咪 喵喵喵\n' +
            '    fmt.Println(d.Animal.Speak()) // 旺财 发出声音（显式调原方法）\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：多重嵌入（mixin 模式）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Logger struct{}\n' +
            'func (l Logger) Log(msg string) { fmt.Println("[LOG]", msg) }\n' +
            '\n' +
            'type Validator struct{}\n' +
            'func (v Validator) Validate(s string) bool { return len(s) > 0 }\n' +
            '\n' +
            'type Cache struct{ data map[string]string }\n' +
            'func (c *Cache) Get(k string) (string, bool) { v, ok := c.data[k]; return v, ok }\n' +
            'func (c *Cache) Set(k, v string) { c.data[k] = v }\n' +
            '\n' +
            'type Service struct {\n' +
            '    Logger     // 混入日志\n' +
            '    Validator  // 混入校验\n' +
            '    *Cache     // 混入缓存（指针嵌入）\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    s := &Service{Cache: &Cache{data: make(map[string]string)}}\n' +
            '    s.Log("服务启动")\n' +
            '    fmt.Println(s.Validate("hello")) // true\n' +
            '    s.Set("k1", "v1")\n' +
            '    v, _ := s.Get("k1")\n' +
            '    fmt.Println(v) // v1\n' +
            '}\n' +
            '```\n\n' +
            '**示例 4：复用公共字段（BaseModel）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "time"\n' +
            ')\n' +
            '\n' +
            'type BaseModel struct {\n' +
            '    ID        int64\n' +
            '    CreatedAt time.Time\n' +
            '    UpdatedAt time.Time\n' +
            '}\n' +
            '\n' +
            'type User struct {\n' +
            '    BaseModel // 复用公共字段\n' +
            '    Name  string\n' +
            '    Email string\n' +
            '}\n' +
            '\n' +
            'type Product struct {\n' +
            '    BaseModel // 复用公共字段\n' +
            '    Name  string\n' +
            '    Price float64\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    u := User{\n' +
            '        BaseModel: BaseModel{ID: 1, CreatedAt: time.Now()},\n' +
            '        Name:  "小红",\n' +
            '        Email: "xh@example.com",\n' +
            '    }\n' +
            '    fmt.Println(u.ID, u.Name, u.CreatedAt) // 字段提升\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **嵌入是组合不是继承**：`Dog` 嵌入 `Animal` 不意味着 `Dog is Animal`。`Dog` 是 `Animal` 的组合，类型不同。`var a Animal = Dog{}` 编译错误。\n' +
            '2. **字段名冲突**：多重嵌入时若两个类型有同名字段，必须显式指定 `d.Logger.Log` 否则编译错误（歧义）。\n' +
            '3. **方法冲突**：同上，两个嵌入类型有同名方法会歧义，需显式调用。外层重写可解决单层冲突。\n' +
            '4. **指针嵌入 vs 值嵌入**：`type T struct{ *Other }` 嵌入指针，需先初始化 Other 否则 nil 调用方法 panic。\n' +
            '5. **提升方法接收者类型不变**：内嵌类型的值接收者方法提升为外层的值接收者方法，指针方法同理。不会因嵌入而改变。\n' +
            '6. **嵌入接口**：结构体可嵌入接口（`type T struct{ Reader }`），表示"T 持有一个 Reader"，常用于装饰器模式。\n' +
            '7. **不要为"继承"而嵌入**：嵌入应表达"has-a"（拥有）而非"is-a"。若逻辑上是 is-a，Go 的做法是定义共享接口。\n' +
            '8. **零值嵌入**：嵌入类型也有零值。`Dog{}` 的 `Animal` 部分是零值（Name=""）。\n\n' +
            '## 实际应用\n\n' +
            '**1. 公共字段复用**：数据库模型的 BaseModel（ID/CreatedAt/UpdatedAt）被各表模型嵌入，避免重复定义。\n\n' +
            '**2. 能力混入（mixin）**：HTTP handler 服务组合 Logger、Metrics、Auth、Cache 等能力，按需挑选。\n\n' +
            '```go\n' +
            'type APIHandler struct {\n' +
            '    Logger    // 日志能力\n' +
            '    Metrics   // 监控能力\n' +
            '    Auth      // 鉴权能力\n' +
            '    DB *sql.DB\n' +
            '}\n' +
            '```\n\n' +
            '**3. 装饰器模式**：嵌入接口 + 包装增强。如 `type LoggingReader struct { io.Reader }` 在 Read 时加日志。\n\n' +
            '**4. 框架扩展**：嵌入标准库类型扩展行为。如 `type MyBuf struct { bytes.Buffer }` 加自定义方法。\n\n' +
            '## 扩展知识\n\n' +
            '**嵌入的字段名**：嵌入字段的名字就是类型名（不含包名）。`type T struct{ Animal }` 的字段名是 `Animal`。' +
            '若两个包有同名类型，需用包名前缀区分或显式命名字段。\n\n' +
            '**嵌入与接口的关系**：嵌入让结构体"获得"方法，这些方法计入其方法集，可用于满足接口。' +
            '这是为何嵌入能实现"通过组合获得接口能力"。\n\n' +
            '**嵌入接口的妙用**：`struct{ io.Reader }` 持有一个 Reader 接口，可在构造时注入任意 Reader 实现（装饰器、mock）。\n\n' +
            '```go\n' +
            'type LoggedReader struct {\n' +
            '    io.Reader // 嵌入接口\n' +
            '    Logger\n' +
            '}\n' +
            'func (r *LoggedReader) Read(p []byte) (int, error) {\n' +
            '    n, err := r.Reader.Read(p) // 调用嵌入的 Reader\n' +
            '    r.Log("read bytes")\n' +
            '    return n, err\n' +
            '}\n' +
            '```\n\n' +
            '**与继承对比**：\n' +
            '- 继承（is-a）：子类是父类，可多态替换，但层级深、脆弱\n' +
            '- 嵌入（has-a）：外层拥有内嵌，不能多态替换，但扁平、灵活\n' +
            '- Go 的哲学：用接口表达 is-a（多态），用嵌入表达 has-a（复用）\n\n' +
            '**与 Python 继承对比**：Python `class Dog(Animal)` 是继承，Dog 是 Animal 子类；' +
            'Go `type Dog struct{ Animal }` 是组合，Dog 拥有 Animal。Python 子类调 `super().speak()`，' +
            'Go 外层调 `d.Animal.Speak()`。Python 支持多继承，Go 嵌入可多重但语义不同。',
          examples: [
            {
              title: '结构体嵌入',
              code: `package main

import "fmt"

type Animal struct {
    Name string
}

func (a Animal) Speak() string {
    return a.Name + " 发出声音"
}

type Dog struct {
    Animal
    Breed string
}

func main() {
    d := Dog{Animal: Animal{Name: "旺财"}, Breed: "金毛"}
    fmt.Println(d.Name)
    fmt.Println(d.Speak())
}`,
              explanation:
                'Dog 嵌入 Animal，Animal 的 Name 字段和 Speak 方法被提升。' +
                '`d.Name` 和 `d.Speak()` 直接可用。输出：旺财、旺财 发出声音（两行）。',
            },
            {
              title: '提升的方法',
              code: `package main

import "fmt"

type Engine struct {
    Power int
}

func (e Engine) Start() string {
    return "引擎启动，功率 " + fmt.Sprintf("%d", e.Power)
}

type Car struct {
    Engine
    Brand string
}

func main() {
    c := Car{Engine: Engine{Power: 150}, Brand: "特斯拉"}
    fmt.Println(c.Brand)
    fmt.Println(c.Power)
    fmt.Println(c.Start())
}`,
              explanation:
                'Car 嵌入 Engine，Power 字段和 Start 方法都提升到 Car。' +
                '输出：特斯拉、150、引擎启动，功率 150（三行）。',
            },
            {
              title: '组合多个类型',
              code: `package main

import "fmt"

type Logger struct{}

func (l Logger) Log(msg string) {
    fmt.Println("[LOG]", msg)
}

type Validator struct{}

func (v Validator) Validate(s string) bool {
    return len(s) > 0
}

type Service struct {
    Logger
    Validator
}

func main() {
    s := Service{}
    s.Log("服务启动")
    fmt.Println(s.Validate("hello"))
}`,
              explanation:
                'Service 同时组合 Logger 和 Validator，拥有两者的方法。' +
                '这模拟了"混入"（mixin）。输出：[LOG] 服务启动、true（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: 'Car 嵌入 Engine，直接访问提升的 Power 字段，输出 150。',
              starter_code: `package main

import "fmt"

type Engine struct {
    Power int
}

type Car struct {
    Engine
    Brand string
}

func main() {
    c := Car{Engine: Engine{Power: 150}, Brand: "特斯拉"}
    fmt.Println(c.___)
}`,
              expected_output: '150',
              hints: [
                'Engine 的 Power 字段被提升到 Car',
                '直接用 c.Power',
                '答案: Power',
              ],
            },
            {
              type: 'output-match',
              prompt: 'Derived 嵌入 Base，调用提升的 Hello 方法，输出 "Hello from Base"。',
              starter_code: `package main

import "fmt"

type Base struct{}

func (b Base) Hello() string { return "Hello from Base" }

type Derived struct {
    Base
}

func main() {
    d := Derived{}
    fmt.Println(d.___())
}`,
              expected_output: 'Hello from Base',
              hints: [
                'Base 的 Hello 方法被提升',
                '直接调用 d.Hello()',
                '答案: Hello',
              ],
            },
          ],
          realWorldScenario:
            '组合是构建大型 Go 服务的架构基石。一个 HTTP handler 服务可以组合 Logger（日志）、Metrics（监控）、Auth（鉴权）、Cache（缓存）等多个能力，每个能力独立实现、可替换、可测试。这种"横向组合"比纵向继承更灵活——你可以为不同服务按需挑选组合不同的能力。数据库模型也常用嵌入复用公共字段（如 CreatedAt、UpdatedAt 的 BaseModel 被各表模型嵌入）。',
        },
        {
          id: 'go-ch5-l4',
          title: '接口 interface',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '接口（interface）是**方法签名的集合**。`type 接口名 interface { 方法 }` 定义接口。' +
            'Go 的接口是**隐式实现**的——一个类型只要实现了接口定义的所有方法，就自动满足该接口，' +
            '无需 `implements` 声明。这是 Go 区别于 Java 的"鸭子类型"（duck typing），让接口与实现彻底解耦。\n\n' +
            '为何要接口？接口让你**面向抽象编程**——函数参数用接口而非具体类型，就能接受任何实现该接口的类型。' +
            '这带来：(1) 多态（同一接口不同实现）；(2) 可测试性（mock 替换真实实现）；(3) 解耦（调用方不依赖具体实现）；' +
            '(4) 可扩展（新增实现无需改调用方）。这是依赖倒置原则（DIP）的体现。\n\n' +
            'Go 接口的核心哲学：**"接口由消费者定义"**。不同于 Java 在实现侧声明 implements，Go 的接口由使用方定义——' +
            '你写一个函数需要 `Reader`，就定义一个只含 `Read` 方法的接口，任何有 Read 方法的类型都能传入。' +
            '这鼓励小接口（io.Reader、io.Writer 各仅一个方法）和组合。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 定义接口\n' +
            'type Shape interface {\n' +
            '    Area() float64\n' +
            '    Perimeter() float64\n' +
            '}\n' +
            '\n' +
            '// 隐式实现（无 implements 关键字）\n' +
            'type Rectangle struct{ W, H float64 }\n' +
            'func (r Rectangle) Area() float64      { return r.W * r.H }\n' +
            'func (r Rectangle) Perimeter() float64 { return 2 * (r.W + r.H) }\n' +
            '// Rectangle 自动满足 Shape 接口！\n' +
            '\n' +
            'type Circle struct{ R float64 }\n' +
            'func (c Circle) Area() float64      { return 3.14 * c.R * c.R }\n' +
            'func (c Circle) Perimeter() float64 { return 2 * 3.14 * c.R }\n' +
            '// Circle 也自动满足 Shape\n' +
            '\n' +
            '// 使用接口（多态）\n' +
            'func printShape(s Shape) {\n' +
            '    fmt.Printf("面积=%.2f 周长=%.2f\\n", s.Area(), s.Perimeter())\n' +
            '}\n' +
            '\n' +
            '// 空接口（any）\n' +
            'var i interface{} = 42      // 任意类型\n' +
            'var j any = "hello"         // Go 1.18+ 别名\n' +
            '\n' +
            '// 类型断言\n' +
            'v, ok := i.(int)            // ok=true, v=42\n' +
            's, ok := i.(string)         // ok=false, s=""\n' +
            '\n' +
            '// 类型选择\n' +
            'switch v := i.(type) {\n' +
            'case int:    fmt.Println("int", v)\n' +
            'case string: fmt.Println("string", v)\n' +
            'default:     fmt.Println("unknown", v)\n' +
            '}\n' +
            '\n' +
            '// 接口组合\n' +
            'type ReadWriter interface {\n' +
            '    Reader  // 嵌入接口\n' +
            '    Writer\n' +
            '}\n' +
            '```\n\n' +
            '| 概念 | 语法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 定义 | `type I interface{...}` | 方法签名集合 |\n' +
            '| 实现 | 隐式 | 实现 all 方法即满足 |\n' +
            '| 空接口 | `interface{}` / `any` | 任意类型 |\n' +
            '| 类型断言 | `v, ok := i.(T)` | 取出具体类型 |\n' +
            '| 类型选择 | `switch v := i.(type)` | 按类型分支 |\n' +
            '| 接口组合 | 嵌入多个接口 | 组合小接口 |\n' +
            '| nil 接口 | `var i I` | 类型=nil 值=nil |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：定义与实现接口（多态）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Shape interface {\n' +
            '    Area() float64\n' +
            '}\n' +
            '\n' +
            'type Circle struct{ R float64 }\n' +
            'func (c Circle) Area() float64 { return 3.14 * c.R * c.R }\n' +
            '\n' +
            'type Rectangle struct{ W, H float64 }\n' +
            'func (r Rectangle) Area() float64 { return r.W * r.H }\n' +
            '\n' +
            'func printArea(s Shape) {\n' +
            '    fmt.Printf("面积: %.2f\\n", s.Area())\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    printArea(Circle{R: 5})         // 面积: 78.50\n' +
            '    printArea(Rectangle{W: 3, H: 4}) // 面积: 12.00\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：类型断言与类型选择**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func describe(i interface{}) {\n' +
            '    switch v := i.(type) {\n' +
            '    case int:\n' +
            '        fmt.Printf("整数 %d\\n", v)\n' +
            '    case string:\n' +
            '        fmt.Printf("字符串 %q (长度 %d)\\n", v, len(v))\n' +
            '    case []int:\n' +
            '        fmt.Printf("int 切片 %v (长度 %d)\\n", v, len(v))\n' +
            '    default:\n' +
            '        fmt.Printf("未知类型 %T: %v\\n", v, v)\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    describe(42)\n' +
            '    describe("hello")\n' +
            '    describe([]int{1, 2, 3})\n' +
            '    describe(3.14)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：接口组合（io.Reader + io.Writer）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type Reader interface {\n' +
            '    Read(p []byte) (n int, err error)\n' +
            '}\n' +
            'type Writer interface {\n' +
            '    Write(p []byte) (n int, err error)\n' +
            '}\n' +
            'type ReadWriter interface {\n' +
            '    Reader // 组合\n' +
            '    Writer\n' +
            '}\n' +
            '\n' +
            '// 实现 ReadWriter\n' +
            'type Buffer struct{ data []byte }\n' +
            'func (b *Buffer) Read(p []byte) (int, error) {\n' +
            '    n := copy(p, b.data)\n' +
            '    b.data = b.data[n:]\n' +
            '    return n, nil\n' +
            '}\n' +
            'func (b *Buffer) Write(p []byte) (int, error) {\n' +
            '    b.data = append(b.data, p...)\n' +
            '    return len(p), nil\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    var rw ReadWriter = &Buffer{}\n' +
            '    rw.Write([]byte("hello"))\n' +
            '    buf := make([]byte, 5)\n' +
            '    rw.Read(buf)\n' +
            '    fmt.Println(string(buf)) // hello\n' +
            '}\n' +
            '```\n\n' +
            '**示例 4：用接口实现 mock 测试**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            '// 定义接口\n' +
            'type UserStore interface {\n' +
            '    Get(id int) string\n' +
            '}\n' +
            '\n' +
            '// 真实实现\n' +
            'type DBStore struct{}\n' +
            'func (d *DBStore) Get(id int) string {\n' +
            '    return fmt.Sprintf("用户%d（来自数据库）", id)\n' +
            '}\n' +
            '\n' +
            '// Mock 实现（用于测试）\n' +
            'type MockStore struct{}\n' +
            'func (m *MockStore) Get(id int) string {\n' +
            '    return "mock用户"\n' +
            '}\n' +
            '\n' +
            '// 依赖接口，不依赖具体实现\n' +
            'func greetUser(store UserStore, id int) {\n' +
            '    fmt.Println("欢迎，" + store.Get(id))\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    greetUser(&DBStore{}, 1)   // 生产\n' +
            '    greetUser(&MockStore{}, 1) // 测试\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **接口是隐式的**：无 implements，实现方甚至不知道接口存在。这有时让"谁实现了什么"不直观，需用工具（如 `implements`）辅助。\n' +
            '2. **空接口 `interface{}`/`any` 慎用**：丢失类型安全，需类型断言取值。优先用具体接口或泛型（Go 1.18+）。\n' +
            '3. **nil 接口 vs nil 值**：`var i interface{} = nil` 是 nil 接口（类型=nil 值=nil）；`var p *int; var i interface{} = p` 是非 nil 接口（类型=*int 值=nil）——这种"接口非 nil 但值为 nil"是经典 bug。\n' +
            '4. **指针 vs 值实现接口**：若方法集含指针接收者方法，只有 `*T` 满足接口，`T` 不满足。\n' +
            '5. **接口零值是 nil**：未赋值的接口变量是 nil，调用其方法会 panic。\n' +
            '6. **接口不要太大**：Go 哲学推崇小接口（1-3 方法）。大接口违反 ISP（接口隔离原则）。用组合构建大接口。\n' +
            '7. **类型断言不加 ok 会 panic**：`v := i.(int)` 若 i 不是 int 会 panic。安全做法是 `v, ok := i.(int)`。\n' +
            '8. **接口值不可比较（若含不可比较类型）**：接口内部含切片/map 时 `==` 会 panic。\n' +
            '9. **编译期 vs 运行时**：Go 接口是运行时动态分派（类似虚函数表），有微小开销。性能极致场景可用泛型（编译期单态化）。\n\n' +
            '## 实际应用\n\n' +
            '**1. 标准库 io 生态**：`io.Reader`、`io.Writer`、`io.Closer`、`io.ReadWriter` 等小接口是 Go 最重要的抽象。' +
            '文件、网络、压缩、加密都实现这些接口，可任意组合（如 `io.TeeReader`）。\n\n' +
            '**2. HTTP Handler**：`type Handler interface { ServeHTTP(ResponseWriter, *Request) }`——所有路由处理函数实现此接口，框架统一调度。\n\n' +
            '**3. sort.Interface**：实现 `Len()`、`Less(i,j)`、`Swap(i,j)` 三个方法即可用 `sort.Sort`。这是接口驱动标准库的典范。\n\n' +
            '**4. 依赖注入与测试**：service 依赖 `UserStore` 接口，生产注入 DBStore，测试注入 MockStore——无需修改 service 代码。\n\n' +
            '**5. error 接口**：`type error interface{ Error() string }`。任何实现 `Error() string` 的类型都是错误，可自定义丰富错误信息。\n\n' +
            '## 扩展知识\n\n' +
            '**接口内部结构**：接口值是两个指针——`(type, value)`（类型描述符指针 + 数据指针）。' +
            'nil 接口是两者皆 nil。这就是为何"接口持有 nil 指针"不等于 nil 接口。\n\n' +
            '**空接口与 any**：Go 1.18 引入 `any` 作为 `interface{}` 的别名，语义更清晰。推荐新代码用 `any`。\n\n' +
            '**类型断言的性能**：类型断言有运行时类型检查开销。高频场景可用泛型（编译期确定类型）或类型 switch（编译器优化）。\n\n' +
            '**接口的 nil 陷阱详解**：\n' +
            '```go\n' +
            'func returnsError() error {\n' +
            '    var p *MyError // nil\n' +
            '    return p       // 返回非 nil 接口！（type=*MyError, value=nil）\n' +
            '}\n' +
            'if err := returnsError(); err != nil { // err 非 nil！进入分支\n' +
            '    // 意外执行\n' +
            '}\n' +
            '```\n' +
            '解决方案：显式返回 nil，或返回具体 error 类型前检查。\n\n' +
            '**隐式接口的优缺点**：优点——解耦（实现方无需引用接口）、灵活（可后置定义接口）；' +
            '缺点——不直观（无 implements 声明）、重构难（删方法可能静默破坏接口满足）。\n\n' +
            '**与 Java/Python 接口对比**：Java 接口需显式 implements（编译期检查），Go 隐式（更灵活但弱保证）；' +
            'Python 用 abc/duck typing（运行时检查），Go 编译期保证接口方法存在（但运行时才确定接口满足）。' +
            'Go 的"消费者定义接口"哲学催生了 io.Reader 这样的小而美接口生态。',
          examples: [
            {
              title: '定义与实现接口',
              code: `package main

import "fmt"

type Shape interface {
    Area() float64
}

type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return 3.14 * c.Radius * c.Radius
}

type Square struct {
    Side float64
}

func (s Square) Area() float64 {
    return s.Side * s.Side
}

func printArea(s Shape) {
    fmt.Println(s.Area())
}

func main() {
    printArea(Circle{Radius: 2})
    printArea(Square{Side: 3})
}`,
              explanation:
                'Circle 和 Square 都实现了 Area() 方法，自动满足 Shape 接口。' +
                'printArea 接收 Shape 接口，可传入任何实现了 Area 的类型。' +
                '输出：12.56、9（两行）。',
            },
            {
              title: '接口多态',
              code: `package main

import "fmt"

type Speaker interface {
    Speak() string
}

type Cat struct{}

func (c Cat) Speak() string { return "喵喵" }

type Duck struct{}

func (d Duck) Speak() string { return "嘎嘎" }

func main() {
    animals := []Speaker{Cat{}, Duck{}, Cat{}}
    for _, a := range animals {
        fmt.Println(a.Speak())
    }
}`,
              explanation:
                '接口切片 `[]Speaker` 存放不同具体类型，遍历时多态调用各自的方法。' +
                '输出：喵喵、嘎嘎、喵喵（三行）。',
            },
            {
              title: 'REST API 处理器模式',
              code: `package main

import "fmt"

type Handler interface {
    ServeHTTP(method, path string)
}

type HelloHandler struct{}

func (h HelloHandler) ServeHTTP(method, path string) {
    fmt.Printf("处理 %s %s -> 返回 Hello\\n", method, path)
}

type ByeHandler struct{}

func (h ByeHandler) ServeHTTP(method, path string) {
    fmt.Printf("处理 %s %s -> 返回 Bye\\n", method, path)
}

func route(h Handler, method, path string) {
    h.ServeHTTP(method, path)
}

func main() {
    route(HelloHandler{}, "GET", "/hello")
    route(ByeHandler{}, "GET", "/bye")
}`,
              explanation:
                'Handler 接口定义统一处理方法，不同 handler 实现各自逻辑。route 函数接收接口，' +
                '实现路由分发。这是 Web 框架的核心模式。输出两行处理日志。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全方法名，使 Robot 实现 Greeter 接口，输出 "你好，我是小明"。',
              starter_code: `package main

import "fmt"

type Greeter interface {
    Greet() string
}

type Robot struct {
    Name string
}

func (r Robot) ___() string {
    return "你好，我是" + r.Name
}

func main() {
    g := Robot{Name: "小明"}
    fmt.Println(g.Greet())
}`,
              expected_output: '你好，我是小明',
              hints: [
                '接口要求的方法名是什么',
                '方法名要和接口定义一致',
                '答案: Greet',
              ],
            },
            {
              type: 'output-match',
              prompt: '用接口切片存放多种动物，补全接口类型，使输出 "喵喵\\n嘎嘎\\n喵喵"。',
              starter_code: `package main

import "fmt"

type Speaker interface {
    Speak() string
}

type Cat struct{}

func (c Cat) Speak() string { return "喵喵" }

type Duck struct{}

func (d Duck) Speak() string { return "嘎嘎" }

func main() {
    animals := []___{Cat{}, Duck{}, Cat{}}
    for _, a := range animals {
        fmt.Println(a.Speak())
    }
}`,
              expected_output: '喵喵\n嘎嘎\n喵喵',
              hints: [
                '切片的元素类型应该是哪个接口',
                'Cat 和 Duck 都满足 Speaker',
                '答案: Speaker',
              ],
            },
          ],
          realWorldScenario:
            '接口是 Go 构建可测试、可扩展系统的核心。在 building a REST API handler 时，定义 Handler 接口让路由层与业务层解耦，便于单元测试时注入 mock handler。数据库访问层用接口抽象，测试时替换为内存实现。支付系统定义 PaymentGateway 接口，支持支付宝/微信/Stripe 多实现切换。接口让依赖倒置成为可能——高层模块不依赖低层细节，都依赖抽象，这是 SOLID 原则在 Go 中的落地。',
        },
      ],
    },
    // ================================================================
    // 第 6 章：错误处理与并发
    // ================================================================
    {
      id: 'go-ch6',
      title: '错误处理与并发',
      order: 5,
      lessons: [
        {
          id: 'go-ch6-l1',
          title: 'error 与 panic/recover',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'Go 的错误处理哲学是**"把错误作为值"**。函数通过返回 `error` 类型表示失败，调用方必须显式检查。' +
            '这与 Java/C++ 的 try-catch 异常机制截然不同——Go 认为"显式优于隐式"，错误应该像普通值一样被处理、传递、组合，' +
            '而不是被抛出后悄悄在调用栈上层冒泡。这种设计让 Go 代码的错误处理路径在源码中清晰可见，' +
            '阅读函数调用就能立刻知道它可能失败以及如何处理。\n\n' +
            '`error` 是 Go 的一个内置接口，定义极其简单：`type error interface { Error() string }`。' +
            '任何实现了 `Error() string` 方法的类型都满足 error 接口。这意味着你可以自定义错误类型，' +
            '携带比一条消息更丰富的信息（错误码、堆栈、原始 cause 等）。`errors.New("消息")` 创建一个最简单的错误，' +
            '`fmt.Errorf("格式", 参数)` 创建带格式化消息的错误——后者是日常最常用的构造方式。\n\n' +
            '惯用的错误检查模式是 `result, err := doSomething(); if err != nil { return err }`。' +
            'Go 鼓励**尽早返回**（快速失败），避免深层嵌套——这叫"happy path 靠左"风格。虽然 `if err != nil` 显得繁琐，' +
            '但它让错误处理路径清晰可见，强制开发者思考每一个可能的失败点。在 Go 中，忽略 error 会被 lint 工具警告，' +
            '这是一种"语言文化层面"的对正确性的强制。\n\n' +
            '`panic` 用于**不可恢复的严重错误**，如数组越界、空指针解引用、类型断言失败、不可恢复的初始化失败。' +
            'panic 会导致程序崩溃并打印完整堆栈。`recover` 在 defer 中捕获 panic，让程序从崩溃中恢复。' +
            'panic **不应作为常规错误处理手段**——预期内的错误（用户输入错误、网络超时、文件不存在）应该用 error 返回，' +
            '只有真正"不该发生"的情况（编程错误、不变量被破坏）才 panic。把 panic 当 exception 用是 Go 的反模式。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 1. 创建错误\n' +
            'err1 := errors.New("除数不能为零")\n' +
            'err2 := fmt.Errorf("用户 %d 不存在", uid)        // 格式化\n' +
            '\n' +
            '// 2. 返回错误的函数签名\n' +
            'func divide(a, b float64) (float64, error) {\n' +
            '    if b == 0 {\n' +
            '        return 0, errors.New("除数不能为零")\n' +
            '    }\n' +
            '    return a / b, nil  // 成功时 err 返回 nil\n' +
            '}\n' +
            '\n' +
            '// 3. 标准检查模式（happy path 靠左）\n' +
            'result, err := divide(10, 2)\n' +
            'if err != nil {\n' +
            '    return err  // 直接向上传递\n' +
            '}\n' +
            '// 使用 result ...\n' +
            '\n' +
            '// 4. 自定义错误类型（携带更多上下文）\n' +
            'type NotFoundError struct {\n' +
            '    Resource string\n' +
            '    ID       int\n' +
            '}\n' +
            'func (e *NotFoundError) Error() string {\n' +
            '    return fmt.Sprintf("%s %d 不存在", e.Resource, e.ID)\n' +
            '}\n' +
            '\n' +
            '// 5. 错误包装（Go 1.13+）\n' +
            'if err := loadConfig(); err != nil {\n' +
            '    return fmt.Errorf("启动失败: %w", err)  // %w 包装原错误\n' +
            '}\n' +
            '\n' +
            '// 6. 错误解包与判断\n' +
            'var nfe *NotFoundError\n' +
            'if errors.As(err, &nfe) { /* err 是 *NotFoundError */ }\n' +
            'if errors.Is(err, os.ErrNotExist) { /* 文件不存在 */ }\n' +
            '\n' +
            '// 7. panic 与 recover\n' +
            'defer func() {\n' +
            '    if r := recover(); r != nil {\n' +
            '        log.Println("捕获 panic:", r)\n' +
            '    }\n' +
            '}()\n' +
            'panic("不该发生的情况")\n' +
            '```\n\n' +
            '| 错误构造方式 | 用法 | 适用场景 |\n' +
            '|------------|------|--------|\n' +
            '| `errors.New` | `errors.New("消息")` | 静态消息，最简单 |\n' +
            '| `fmt.Errorf` | `fmt.Errorf("格式", args)` | 动态消息，日常首选 |\n' +
            '| `fmt.Errorf + %w` | `fmt.Errorf("上下文: %w", err)` | 包装原错误，保留 cause |\n' +
            '| 自定义类型 | `type X struct{}` + `Error() string` | 携带错误码/上下文 |\n' +
            '| sentinel 错误 | `var ErrXxx = errors.New(...)` | 可用 `errors.Is` 判断 |\n\n' +
            '| 错误检查/判断 | 用法 | 说明 |\n' +
            '|-----------|------|------|\n' +
            '| `if err != nil` | 直接判空 | 最基础 |\n' +
            '| `errors.Is` | `errors.Is(err, sentinel)` | 判断是否为某哨兵错误（含包装链） |\n' +
            '| `errors.As` | `errors.As(err, &target)` | 提取某类型的错误 |\n' +
            '| `errors.Unwrap` | `errors.Unwrap(err)` | 解包一层 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：标准 error 返回与检查**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "errors"\n' +
            '    "fmt"\n' +
            ')\n' +
            '\n' +
            'func divide(a, b float64) (float64, error) {\n' +
            '    if b == 0 {\n' +
            '        return 0, errors.New("除数不能为零")\n' +
            '    }\n' +
            '    return a / b, nil\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    if r, err := divide(10, 0); err != nil {\n' +
            '        fmt.Println("错误:", err)\n' +
            '    } else {\n' +
            '        fmt.Println("结果:", r)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：自定义错误类型 + errors.As**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "errors"\n' +
            '    "fmt"\n' +
            ')\n' +
            '\n' +
            'type ValidationError struct {\n' +
            '    Field   string\n' +
            '    Message string\n' +
            '}\n' +
            '\n' +
            'func (e *ValidationError) Error() string {\n' +
            '    return fmt.Sprintf("字段 %s 校验失败: %s", e.Field, e.Message)\n' +
            '}\n' +
            '\n' +
            'func validateAge(age int) error {\n' +
            '    if age < 0 || age > 150 {\n' +
            '        return &ValidationError{Field: "age", Message: "超出合理范围"}\n' +
            '    }\n' +
            '    return nil\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    err := validateAge(-1)\n' +
            '    var ve *ValidationError\n' +
            '    if errors.As(err, &ve) {\n' +
            '        fmt.Println("字段:", ve.Field, "原因:", ve.Message)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：panic + recover 安全包装**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func safeRun(f func()) (err error) {\n' +
            '    defer func() {\n' +
            '        if r := recover(); r != nil {\n' +
            '            err = fmt.Errorf("panic: %v", r)  // 把 panic 转为 error\n' +
            '        }\n' +
            '    }()\n' +
            '    f()\n' +
            '    return nil\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    err := safeRun(func() {\n' +
            '        fmt.Println("开始任务")\n' +
            '        panic("任务崩溃")\n' +
            '    })\n' +
            '    fmt.Println("返回错误:", err)\n' +
            '    fmt.Println("程序继续运行")\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **错误必须显式检查**：忽略返回的 error 是 Go 中最常见的 bug 来源。`_ = doSomething()` 等于"我不在乎失败"，' +
            '生产代码几乎不应出现。\n' +
            '2. **不要把 panic 当异常用**：业务错误（输入校验、记录不存在）一律用 error，panic 留给编程错误和不可恢复的初始化失败。\n' +
            '3. **recover 必须在 defer 中直接调用**：在普通函数里调用 recover 永远返回 nil；只有 defer 函数体内直接调才有效。\n' +
            '4. **error 是 nil 时才能用**：返回 `*MyError` 而非 error 接口时，nil 指针装进接口会变成非 nil（坑）。统一返回 error 接口类型。\n' +
            '5. **错误包装用 `%w` 而非 `%v`**：`%v` 丢失原错误的 cause 链，`errors.Is/As` 失效；`%w` 保留包装关系。\n' +
            '6. **哨兵错误用 `var ErrXxx = errors.New(...)`**：导出后调用方可用 `errors.Is(err, ErrXxx)` 精确判断，避免字符串比较。\n' +
            '7. **每层加上下文**：传递错误时用 `fmt.Errorf("加载用户 %d: %w", uid, err)` 加上当前层的语义，最终日志能定位整条调用链。\n' +
            '8. **recover 不能恢复死锁/栈溢出**：runtime fatal 不会被 recover 捕获，不要指望 recover 救所有崩溃。\n\n' +
            '## 实际应用\n\n' +
            '**1. HTTP 中间件统一 panic 恢复**：Gin/Echo 等框架都有 `Recovery` 中间件，把单个请求的 panic 转成 500 响应，' +
            '避免拖垮整个服务。这是 panic/recover 在生产中最正当的用途。\n\n' +
            '**2. 分层错误传递**：repo 层返回 `sql.ErrNoRows`，service 层包装为 `fmt.Errorf("查询用户 %d: %w", id, err)`，' +
            'handler 层用 `errors.Is(err, sql.ErrNoRows)` 决定返回 404 还是 500。\n\n' +
            '**3. 校验错误集合**：自定义 `ValidationErrors []ValidationError`，一次性返回多个字段校验错误，前端按字段展示。\n\n' +
            '**4. 初始化失败 panic**：`regexp.MustCompile` 在正则非法时 panic——因为编译期就该发现，运行时再失败是程序错误。\n\n' +
            '## 扩展知识\n\n' +
            '**Go 1.13 错误处理革命**：引入 `errors.Is`、`errors.As`、`errors.Unwrap` 和 `%w` 动词，让 error 支持' +
            '包装链（wrap chain）。`errors.Is` 沿包装链判断是否匹配哨兵，`errors.As` 沿链提取特定类型——这是现代 Go 错误处理的基石。\n\n' +
            '**panic 的运行时机制**：panic 会立即停止当前函数，依次执行已注册的 defer（LIFO），如果某 defer 中 recover 了，' +
            'panic 停止传播；否则继续向上层函数传播，最终终止整个 goroutine。未 recover 的 panic 会打印堆栈到 stderr 并退出码 2。\n\n' +
            '**与 try-catch 的对比**：Java 异常是"控制流"，可能被任意上层 catch，调用图不透明；Go error 是值，必须在签名中声明，' +
            '调用方必须处理，控制流线性。Go 牺牲了简洁性换来可读性和可维护性——这是 Go 团队经过深思熟虑的取舍。\n\n' +
            '**golang.org/x/xerrors**：标准库 errors 包的增强版实验包，提供 `Wrap`/`Frame` 等带堆栈的能力。' +
            '日常 `fmt.Errorf + %w` 已足够，需要更多调试信息时可考虑第三方库如 `pkg/errors`、`go-fault`。\n\n' +
            '**`panic(err)` 的反模式**：有些 Java 转 Go 的人写 `panic(err)` 代替 `return err`，这是反模式——' +
            '会让程序在任意位置崩溃、跳过 defer 清理逻辑、无法被上层优雅处理。永远用 error 返回业务失败。',
          examples: [
            {
              title: '返回并检查 error',
              code: `package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("除数不能为零")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("错误:", err)
    } else {
        fmt.Println("结果:", result)
    }
}`,
              explanation:
                'divide 返回 (float64, error)。除数为零时返回错误。调用方检查 err != nil 并处理。' +
                '输出：错误: 除数不能为零。',
            },
            {
              title: 'panic 与 recover',
              code: `package main

import "fmt"

func riskyFunc() {
    fmt.Println("riskyFunc 开始")
    panic("出错了")
}

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("主函数捕获:", r)
        }
    }()
    riskyFunc()
    fmt.Println("不会执行")
}`,
              explanation:
                'riskyFunc 中 panic，传播到 main 的 defer 被 recover 捕获。"不会执行"不会运行。' +
                '输出：riskyFunc 开始、主函数捕获: 出错了（两行）。',
            },
            {
              title: '安全调用包装',
              code: `package main

import "fmt"

func safeRun(f func()) {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("安全捕获:", r)
        }
    }()
    f()
}

func main() {
    safeRun(func() {
        fmt.Println("执行任务")
        panic("任务失败")
    })
    fmt.Println("程序继续运行")
}`,
              explanation:
                'safeRun 用 defer recover 包装任意函数，panic 被捕获后程序继续。' +
                '输出：执行任务、安全捕获: 任务失败、程序继续运行（三行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '检查 divide 的返回错误，补全条件变量，使除零时输出 "有错误"。',
              starter_code: `package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("除数为零")
    }
    return a / b, nil
}

func main() {
    _, err := divide(10, 0)
    if ___ != nil {
        fmt.Println("有错误")
    }
}`,
              expected_output: '有错误',
              hints: [
                '检查哪个变量是否非空',
                '错误变量是 err',
                '答案: err',
              ],
            },
            {
              type: 'output-match',
              prompt: '在 defer 中用 recover 捕获整数除零 panic，使 safeDivide(10,0) 返回 -1。',
              starter_code: `package main

import "fmt"

func safeDivide(a, b int) (result int) {
    defer func() {
        if r := ___(); r != nil {
            result = -1
        }
    }()
    return a / b
}

func main() {
    fmt.Println(safeDivide(10, 0))
}`,
              expected_output: '-1',
              hints: [
                '在 defer 中捕获 panic 用哪个内置函数',
                'recover() 返回 panic 的值',
                '答案: recover',
              ],
            },
          ],
          realWorldScenario:
            '错误处理是后端服务健壮性的命脉。每个外部调用（数据库、HTTP、文件 IO）都可能失败，必须用 error 显式处理。Web 服务通常在中间件统一捕获 panic（用 recover），防止单个请求的 panic 拖垮整个服务，返回 500 而非崩溃。日志库、监控告警都依赖 error 传递失败信息。Go 的"错误即值"理念虽然代码量大，但让系统的失败处理路径可追溯、可测试，是构建高可用服务的基础。',
        },
        {
          id: 'go-ch6-l2',
          title: 'goroutine',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '`goroutine` 是 Go 的**轻量级线程**，用 `go` 关键字启动：`go 函数调用()`。' +
            'goroutine 由 Go 运行时（runtime）调度在少量操作系统线程之上（M:N 调度），' +
            '初始栈仅 2KB 左右且可按需增长，因此可以轻松创建数十万甚至上百万个 goroutine。' +
            '相比操作系统线程（每个动辄几 MB 栈），goroutine 极轻量，这是 Go 并发的核心优势，' +
            '也是 Go 被称为"天生为并发而生"的语言的根本原因。\n\n' +
            'goroutine 与启动它的函数并发执行。**主函数返回时所有 goroutine 会被强制终止**——' +
            'main 一退出，整个进程结束，未完成的 goroutine 来不及收尾。因此需要同步机制等待 goroutine 完成。' +
            '`sync.WaitGroup` 是最常用的工具：`wg.Add(1)` 增加计数，goroutine 内 `defer wg.Done()` 减少，' +
            '`wg.Wait()` 阻塞直到计数归零。另一种同步方式是 channel（下一节），用接收阻塞等待。\n\n' +
            '多个 goroutine 并发访问共享变量会导致**数据竞争**（race condition），结果不可预测。' +
            '例如 1000 个 goroutine 执行 `count++`，无保护时结果通常 < 1000，因为 `count++` 不是原子操作' +
            '（读-改-写三步会交错）。解决方法有两种：一是用 `sync.Mutex` 互斥锁保护共享变量' +
            '（`mu.Lock()` 加锁，`mu.Unlock()` 解锁）；二是用 channel 通信替代共享内存，' +
            '这是 Go 推崇的**"通过通信共享内存，而不是通过共享内存通信"**。\n\n' +
            '启动 goroutine 时要注意**闭包捕获循环变量**的问题。Go 1.22+ 已修复循环变量复用问题，' +
            '每次迭代会创建新变量，但旧版本下所有 goroutine 可能共享同一个 i（值都是循环结束值）。' +
            '为了兼容性和清晰性，建议始终把循环变量作为参数显式传入：`go func(n int) { ... }(i)`。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 1. 启动 goroutine\n' +
            'go someFunc()              // 函数\n' +
            'go func() { ... }()        // 匿名函数立即调用\n' +
            'go func(x int) { ... }(42) // 带参数，避免闭包捕获问题\n' +
            '\n' +
            '// 2. WaitGroup 等待\n' +
            'var wg sync.WaitGroup\n' +
            'for i := 0; i < n; i++ {\n' +
            '    wg.Add(1)            // 计数 +1（必须在 goroutine 外调用）\n' +
            '    go func(i int) {\n' +
            '        defer wg.Done()   // 计数 -1\n' +
            '        // 工作 ...\n' +
            '    }(i)\n' +
            '}\n' +
            'wg.Wait()                 // 阻塞直到计数归零\n' +
            '\n' +
            '// 3. Mutex 互斥锁\n' +
            'var (\n' +
            '    mu    sync.Mutex\n' +
            '    count int\n' +
            ')\n' +
            'mu.Lock()\n' +
            'count++                   // 临界区\n' +
            'mu.Unlock()\n' +
            '\n' +
            '// 4. RWMutex 读写锁（读多写少时优于 Mutex）\n' +
            'var rw sync.RWMutex\n' +
            'rw.RLock()    // 读锁，多个读可并发\n' +
            '// 读操作 ...\n' +
            'rw.RUnlock()\n' +
            'rw.Lock()     // 写锁，独占\n' +
            '// 写操作 ...\n' +
            'rw.Unlock()\n' +
            '\n' +
            '// 5. Once 单次执行（懒加载、单例）\n' +
            'var (\n' +
            '    once sync.Once\n' +
            '    inst  *Config\n' +
            ')\n' +
            'func GetConfig() *Config {\n' +
            '    once.Do(func() { inst = loadConfig() })\n' +
            '    return inst\n' +
            '}\n' +
            '```\n\n' +
            '| sync 包工具 | 用途 | 关键方法 |\n' +
            '|-----------|------|--------|\n' +
            '| `sync.WaitGroup` | 等待一组 goroutine 完成 | `Add`、`Done`、`Wait` |\n' +
            '| `sync.Mutex` | 互斥锁（读写都独占） | `Lock`、`Unlock` |\n' +
            '| `sync.RWMutex` | 读写锁（读共享，写独占） | `RLock`/`RUnlock`、`Lock`/`Unlock` |\n' +
            '| `sync.Once` | 单次执行（懒加载） | `Do` |\n' +
            '| `sync.Cond` | 条件变量 | `Wait`/`Signal`/`Broadcast` |\n' +
            '| `sync.Map` | 并发安全 map | `Load`/`Store`/`Delete` |\n' +
            '| `sync.Pool` | 对象池（减少 GC 压力） | `Get`/`Put` |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：WaitGroup 等待多个 goroutine**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "sync"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    var wg sync.WaitGroup\n' +
            '    for i := 1; i <= 3; i++ {\n' +
            '        wg.Add(1)\n' +
            '        go func(n int) {\n' +
            '            defer wg.Done()\n' +
            '            fmt.Printf("任务 %d 完成\\n", n)\n' +
            '        }(i)\n' +
            '    }\n' +
            '    wg.Wait()\n' +
            '    fmt.Println("全部完成")\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：Mutex 保护共享变量**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "sync"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    var (\n' +
            '        mu    sync.Mutex\n' +
            '        count int\n' +
            '        wg    sync.WaitGroup\n' +
            '    )\n' +
            '    for i := 0; i < 1000; i++ {\n' +
            '        wg.Add(1)\n' +
            '        go func() {\n' +
            '            defer wg.Done()\n' +
            '            mu.Lock()\n' +
            '            count++\n' +
            '            mu.Unlock()\n' +
            '        }()\n' +
            '    }\n' +
            '    wg.Wait()\n' +
            '    fmt.Println(count) // 1000\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：sync.Once 懒加载单例**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "sync"\n' +
            ')\n' +
            '\n' +
            'type Config struct{ Env string }\n' +
            '\n' +
            'var (\n' +
            '    cfg  *Config\n' +
            '    once sync.Once\n' +
            ')\n' +
            '\n' +
            'func GetConfig() *Config {\n' +
            '    once.Do(func() {\n' +
            '        fmt.Println("加载配置（仅一次）")\n' +
            '        cfg = &Config{Env: "production"}\n' +
            '    })\n' +
            '    return cfg\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    for i := 0; i < 3; i++ {\n' +
            '        fmt.Println(GetConfig().Env)\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **不要在 goroutine 内 Add**：`wg.Add(1)` 必须在 `go` 之前调用，否则可能 Wait 时 Add 还没执行，导致提前返回。\n' +
            '2. **defer wg.Done()**：用 defer 保证即使 panic 也能减计数，避免 Wait 永久阻塞。\n' +
            '3. **数据竞争用 `-race` 检测**：`go run -race main.go`、`go test -race ./...` 能在运行时发现竞态，是 CI 必备。\n' +
            '4. **goroutine 泄漏**：goroutine 阻塞在 channel 收发而无人解救，会永久占用资源。设计时确保有退出路径（close channel、context cancel）。\n' +
            '5. **不要假设执行顺序**：goroutine 调度顺序不确定，依赖顺序的代码是 bug。需要顺序就显式同步。\n' +
            '6. **锁粒度尽量小**：锁住整个函数会退化成串行，只锁住真正访问共享变量的临界区。\n' +
            '7. **避免死锁**：不要在持有一个锁时再去获取另一个锁；按固定顺序获取多把锁。\n' +
            '8. **闭包捕获循环变量**：Go 1.22+ 已修复，但显式传参 `go func(i int){...}(i)` 仍是最佳实践，兼容旧版本。\n' +
            '9. **goroutine 没有 ID**：Go 故意不暴露 goroutine ID，避免依赖 ID 的"线程本地"反模式。需要请求上下文用 context 传递。\n\n' +
            '## 实际应用\n\n' +
            '**1. Web 服务器每请求一 goroutine**：Go 的 net/http 为每个 HTTP 请求自动启动一个 goroutine 处理，' +
            '单机轻松支撑数十万并发连接。C10K/C100K 问题在 Go 中几乎不存在。\n\n' +
            '**2. 并行批处理**：拉取 100 个 API，串行需 100s，用 goroutine 并发只需最慢的一个时长。用 WaitGroup + worker 池控制并发度。\n\n' +
            '**3. 后台任务**：日志清理、定时同步、消息推送等后台 worker 用 goroutine 长期运行，配合 context 实现优雅退出。\n\n' +
            '**4. 懒加载单例**：数据库连接池、配置对象用 sync.Once 保证全局只初始化一次，且线程安全。\n\n' +
            '## 扩展知识\n\n' +
            '**GMP 调度模型**：Go 运行时用 G（goroutine）、M（操作系统线程）、P（处理器，逻辑 CPU）三抽象调度。' +
            '每个 P 有一个本地 goroutine 队列，M 从 P 队列取 G 执行。当某 P 队列空时，会从其他 P 偷一半 G（work stealing），' +
            '保证负载均衡。`runtime.GOMAXPROCS(n)` 设置 P 的数量（默认=CPU 核数）。\n\n' +
            '**goroutine 的栈增长**：goroutine 初始栈 2KB，函数调用需要更多空间时自动扩容（最多 1GB），' +
            '收缩由 GC 触发。这种"按需增长"机制让 goroutine 既轻量又能处理深度递归。\n\n' +
            '**`go func` 的隐患**：匿名 goroutine 没有名字、没有返回值、难以追踪。生产代码建议用命名的函数或包装器，' +
            '带上 panic recovery 和日志，便于排查。`errgroup.Group`（golang.org/x/sync/errgroup）能收集 goroutine 的 error，' +
            '是并发任务管理的推荐工具。\n\n' +
            '**context 包**：goroutine 间传递取消、超时、值。`context.WithCancel`/`WithTimeout` 创建可取消的 context，' +
            'goroutine 内 `select { case <-ctx.Done(): return }` 响应取消。这是 Go 并发"可控退出"的标准方案，' +
            '几乎所有生产级 goroutine 都应接收 context。\n\n' +
            '**与 Python async 的对比**：Python asyncio 用事件循环 + await 协程，需 async/await 传染整个调用链；' +
            'Go goroutine 是抢占式调度的"线程"，普通同步代码就能并发，心智负担低。代价是运行时复杂度高、' +
            'GOMAXPROCS 调度可能抢占。',
          examples: [
            {
              title: '启动 goroutine',
              code: `package main

import "fmt"

func main() {
    done := make(chan bool)
    go func() {
        fmt.Println("goroutine 执行")
        done <- true
    }()
    <-done
    fmt.Println("main 结束")
}`,
              explanation:
                '`go func() { ... }()` 启动一个 goroutine。用 channel 等待它完成，避免 main 提前退出。' +
                '输出：goroutine 执行、main 结束（两行）。',
            },
            {
              title: 'WaitGroup 等待多个 goroutine',
              code: `package main

import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            fmt.Println("任务", n, "完成")
        }(i)
    }
    wg.Wait()
    fmt.Println("全部完成")
}`,
              explanation:
                '启动 3 个 goroutine，WaitGroup 等待全部完成。注意把 i 作为参数传入闭包。' +
                '输出三行"任务 N 完成"（顺序不定），然后"全部完成"。',
            },
            {
              title: 'Mutex 保护共享变量',
              code: `package main

import (
    "fmt"
    "sync"
)

func main() {
    var mu sync.Mutex
    count := 0
    var wg sync.WaitGroup
    for i := 0; i < 100; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            mu.Lock()
            count++
            mu.Unlock()
        }()
    }
    wg.Wait()
    fmt.Println(count)
}`,
              explanation:
                '100 个 goroutine 并发自增 count，用 Mutex 保证安全。无锁会丢更新导致结果 <100，' +
                '加锁后结果稳定为 100。输出：100。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 channel 等待 goroutine，补全接收表达式，使输出 "来自 goroutine"。',
              starter_code: `package main

import "fmt"

func main() {
    ch := make(chan string)
    go func() {
        ch <- "来自 goroutine"
    }()
    msg := <-___
    fmt.Println(msg)
}`,
              expected_output: '来自 goroutine',
              hints: [
                '从哪个 channel 接收消息',
                '接收语法: <-ch',
                '答案: ch',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全 WaitGroup 的等待调用，使 100 个 goroutine 累加后输出 5050。',
              starter_code: `package main

import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    sum := 0
    var mu sync.Mutex
    for i := 1; i <= 100; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            mu.Lock()
            sum += n
            mu.Unlock()
        }(i)
    }
    ___
    fmt.Println(sum)
}`,
              expected_output: '5050',
              hints: [
                '等待所有 goroutine 完成用哪个方法',
                'wg.Wait()',
                '答案: wg.Wait()',
              ],
            },
          ],
          realWorldScenario:
            'goroutine 让 Go 天生适合高并发服务。一个 Web 服务器为每个请求启动一个 goroutine，单机轻松支撑数十万并发连接（C10K/C100K 问题在 Go 中几乎不存在）。在批处理系统中，用 goroutine 并发拉取多个 API、并行处理数据，能成倍缩短耗时。但并发也带来数据竞争风险——生产环境务必用 `go run -race` 检测竞态。理解 goroutine 和同步原语是写出高性能、安全后端的核心能力。',
        },
        {
          id: 'go-ch6-l3',
          title: 'channel',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '`channel` 是 goroutine 间通信的管道，是 Go 并发编程的核心。Go 的并发信条是' +
            '**"不要通过共享内存通信，而是通过通信共享内存"**——channel 就是这条信条的载体。' +
            '与共享变量 + 锁相比，channel 让数据在 goroutine 间**安全传递所有权**，避免显式加锁，' +
            '代码更易推理、更少竞态。channel 是并发安全的，多个 goroutine 同时收发无需额外同步。\n\n' +
            '`make(chan 类型)` 创建无缓冲通道，`make(chan 类型, 容量)` 创建带缓冲通道。' +
            '发送 `ch <- 值`，接收 `值 := <-ch`。**无缓冲通道**的发送和接收必须同步——发送方会阻塞' +
            '直到有接收方就绪，反之亦然。这像一次"同步握手"（rendezvous），常用于 goroutine 间' +
            '确定性同步，保证发送时接收方已在等待。\n\n' +
            '**带缓冲通道**在缓冲区未满时发送不阻塞，未空时接收不阻塞，适合解耦生产者和消费者的速率。' +
            '想象一个传送带：生产者把产品放上去（缓冲区满则等待），消费者从另一端取（缓冲区空则等待）。' +
            '缓冲大小是工程权衡——太大掩盖背压问题、占用内存，太小退化为同步。常见选择是 0（同步）' +
            '或 1（解耦一步），偶尔按 worker 数或吞吐需求设置。\n\n' +
            '`close(ch)` 关闭通道，表示不再发送数据。接收方可用 `v, ok := <-ch` 判断通道是否已关闭' +
            '（`ok` 为 false 表示已关闭且缓冲已空），或用 `for v := range ch` 遍历直到关闭——这是' +
            '消费通道最优雅的写法。**关闭 channel 是发送方的责任**，接收方不应关闭。\n\n' +
            '单向通道 `chan<- int`（只发）和 `<-chan int`（只收）能在类型层面约束通道方向，防止误用。' +
            '通常函数参数用单向通道：生产者返回 `<-chan int`，消费者接收 `chan<- int`，编译器帮你检查。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 1. 创建\n' +
            'ch1 := make(chan int)        // 无缓冲\n' +
            'ch2 := make(chan int, 5)     // 缓冲容量 5\n' +
            'ch3 := make(chan struct{})   // 信号通道（0 字节）\n' +
            '\n' +
            '// 2. 收发\n' +
            'ch <- 42          // 发送\n' +
            'v := <-ch         // 接收\n' +
            'v, ok := <-ch     // 接收并判断是否关闭\n' +
            '<-ch               // 接收丢弃\n' +
            '\n' +
            '// 3. 关闭与遍历\n' +
            'close(ch)                     // 关闭（仅发送方调用）\n' +
            'for v := range ch { ... }     // 遍历直到关闭\n' +
            '\n' +
            '// 4. 单向通道\n' +
            'func producer() <-chan int { /* 返回只收通道 */ }\n' +
            'func consumer(in <-chan int) { /* 只能接收 */ }\n' +
            'func sink(out chan<- int) { /* 只能发送 */ }\n' +
            '\n' +
            '// 5. nil channel 的妙用\n' +
            'var nilCh chan int  // nil channel\n' +
            '// nilCh <- 1   // 永久阻塞\n' +
            '// <-nilCh      // 永久阻塞\n' +
            '// 在 select 中用 nil channel 禁用某个 case\n' +
            '```\n\n' +
            '| 操作 | 无缓冲 | 缓冲未满 | 缓冲已满 | 已关闭 |\n' +
            '|------|--------|---------|---------|-------|\n' +
            '| 发送 | 阻塞到有接收 | 立即返回 | 阻塞到有空位 | panic |\n' +
            '| 接收 | 阻塞到有发送 | 立即返回 | 立即返回 | 返回零值，`ok=false` |\n' +
            '| 关闭 | 唤醒所有等待者 | 唤醒所有等待者 | 唤醒所有等待者 | panic（重复关闭）|\n\n' +
            '| 操作 | 语法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 创建 | `make(chan T, n)` | n=0 无缓冲，n>0 有缓冲 |\n' +
            '| 发送 | `ch <- v` | 阻塞或立即返回 |\n' +
            '| 接收 | `v := <-ch` | 阻塞或立即返回 |\n' +
            '| 关闭 | `close(ch)` | 只发方调用 |\n' +
            '| 长度 | `len(ch)` | 缓冲区当前元素数 |\n' +
            '| 容量 | `cap(ch)` | 缓冲区容量 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：无缓冲通道同步**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    done := make(chan struct{})\n' +
            '    go func() {\n' +
            '        fmt.Println("工作完成")\n' +
            '        close(done)  // 通知主 goroutine\n' +
            '    }()\n' +
            '    <-done  // 阻塞等待通知\n' +
            '    fmt.Println("主函数继续")\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：带缓冲通道 + close + range**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func main() {\n' +
            '    ch := make(chan int, 3)\n' +
            '    go func() {\n' +
            '        for i := 1; i <= 5; i++ {\n' +
            '            ch <- i * i  // 缓冲满会阻塞\n' +
            '        }\n' +
            '        close(ch)  // 必须关闭，否则 range 死锁\n' +
            '    }()\n' +
            '    for v := range ch {\n' +
            '        fmt.Println(v)  // 1 4 9 16 25\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：并发求和（fan-in 模式）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func sumPart(nums []int, ch chan<- int) {\n' +
            '    s := 0\n' +
            '    for _, n := range nums {\n' +
            '        s += n\n' +
            '    }\n' +
            '    ch <- s\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    nums := make([]int, 100)\n' +
            '    for i := range nums {\n' +
            '        nums[i] = i + 1\n' +
            '    }\n' +
            '    ch := make(chan int, 2)\n' +
            '    go sumPart(nums[:50], ch)   // 前 50 项\n' +
            '    go sumPart(nums[50:], ch)   // 后 50 项\n' +
            '    total := <-ch + <-ch\n' +
            '    fmt.Println(total)  // 5050\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **向已关闭 channel 发送会 panic**：`close` 后再 `ch <- v` 直接崩溃。只有"发送方"应关闭，且确保无其他发送方。\n' +
            '2. **重复关闭会 panic**：close 已关闭的 channel 会 panic。多个发送方时用 sync.Once 关闭，或让 GC 回收。\n' +
            '3. **range 死锁**：`for v := range ch` 要求最终 close(ch)，否则循环永不结束，goroutine 泄漏。\n' +
            '4. **不要拷贝 channel**：channel 是引用类型，传参即共享。但 channel 本身不能拷贝（`copy` 一个 chan 是错误）。\n' +
            '5. **缓冲大小不是性能旋钮**：缓冲只是为了解耦速率波动，调大不会让程序更快，反而掩盖背压、占内存。0 和 1 是常见选择。\n' +
            '6. **nil channel 的用途**：nil channel 的收发永久阻塞，在 select 中用 nil 禁用某 case 是高级技巧。\n' +
            '7. **channel vs mutex**：channel 内部用 mutex 实现，性能略低于直接 mutex。但 channel 表达"数据流"，mutex 表达"临界区"，' +
            '语义不同。简单共享计数器用 mutex/atomic，复杂数据流用 channel。\n' +
            '8. **不要用 channel 当队列**：channel 适合 goroutine 间传递，不适合做持久队列。需要持久化用 Redis、Kafka 等。\n\n' +
            '## 实际应用\n\n' +
            '**1. 生产者-消费者**：爬虫把 URL 发到 channel，多个 worker goroutine 消费。缓冲通道平衡抓取和解析速率。\n\n' +
            '**2. fan-out / fan-in**：fan-out 把任务分发给多个 worker；fan-in 把多个 worker 的结果汇总到一个 channel。这是并行处理的标准模式。\n\n' +
            '**3. 信号与通知**：`chan struct{}` 用 close 发广播（多个接收者同时解除阻塞），用于"取消信号"、"完成通知"。\n\n' +
            '**4. pipeline 数据流水线**：stage1 → chan → stage2 → chan → stage3，每个 stage 一组 goroutine。' +
            '日志处理、ETL、流式计算都是这个模型。\n\n' +
            '**5. 限流**：`chan struct{}` 容量 N 作为令牌桶，请求前 `ch <- struct{}{}`（满则阻塞），完成 `<-ch`。\n\n' +
            '## 扩展知识\n\n' +
            '**channel 的内部结构**：channel 是一个 hchan struct，包含环形缓冲区（buffer）、发送/等待队列（sendq/recvq）、' +
            '互斥锁。无缓冲 channel 的 sendq/recvq 存放阻塞的 goroutine；带缓冲的优先用 buffer，buffer 满才入 sendq。\n' +
            '理解内部结构能解释为什么"无缓冲 channel 收发同步"。\n\n' +
            '**fan-in 多路合并模式**：多个输入 channel 合并到一个输出 channel。用 select + goroutine 实现：' +
            '为每个输入 channel 启动一个 goroutine，把数据转发到输出 channel。所有 goroutine 完成后关闭输出 channel（用 WaitGroup 协调）。\n\n' +
            '**"or-channel" 取消模式**：把多个 done channel 合并成一个，任一完成即取消。用递归 select 实现，是 context 包取消的底层思想。\n\n' +
            '**channel 的方向性契约**：API 设计中返回 `<-chan T` 表明"我只发不收"，参数 `chan<- T` 表明"我只收不发"。' +
            '这种类型层面的约束让并发代码更安全，编译器替你检查误用。\n\n' +
            '**与 CSP 模型的关系**：Go 的并发灵感来自 Hoare 的 CSP（Communicating Sequential Processes）。' +
            'CSP 把并发抽象为"进程通过通道通信"，进程本身没有共享状态。Go 把 CSP 实用化——goroutine 是 process，channel 是 channel。' +
            '理解 CSP 有助于写出更"Go 风"的并发代码。',
          examples: [
            {
              title: '无缓冲通道',
              code: `package main

import "fmt"

func main() {
    ch := make(chan string)
    go func() {
        ch <- "你好"
    }()
    msg := <-ch
    fmt.Println(msg)
}`,
              explanation:
                'goroutine 发送 "你好" 到无缓冲通道，main 接收。无缓冲通道收发同步。' +
                '输出：你好。',
            },
            {
              title: '带缓冲通道',
              code: `package main

import "fmt"

func main() {
    ch := make(chan int, 3)
    ch <- 1
    ch <- 2
    ch <- 3
    fmt.Println(<-ch)
    fmt.Println(<-ch)
    fmt.Println(<-ch)
}`,
              explanation:
                '容量 3 的缓冲通道可存 3 个值，发送不阻塞。按 FIFO 顺序接收。' +
                '输出：1、2、3（三行）。',
            },
            {
              title: '并发求和',
              code: `package main

import "fmt"

func main() {
    nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    ch := make(chan int)
    go func() {
        sum := 0
        for _, n := range nums[:5] {
            sum += n
        }
        ch <- sum
    }()
    go func() {
        sum := 0
        for _, n := range nums[5:] {
            sum += n
        }
        ch <- sum
    }()
    total := <-ch + <-ch
    fmt.Println(total)
}`,
              explanation:
                '两个 goroutine 分别求前半段（1-5=15）和后半段（6-10=40）的和，' +
                '通过 channel 汇总。total = 15+40 = 55。输出：55。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '从 channel 接收 goroutine 发送的 42 并输出。',
              starter_code: `package main

import "fmt"

func main() {
    ch := make(chan int)
    go func() {
        ch <- 42
    }()
    fmt.Println(<-___)
}`,
              expected_output: '42',
              hints: [
                '从哪个 channel 接收',
                '接收: <-ch',
                '答案: ch',
              ],
            },
            {
              type: 'output-match',
              prompt: '汇总两个 goroutine 的部分和，补全第二次接收，使 1-100 的和输出 5050。',
              starter_code: `package main

import "fmt"

func main() {
    ch := make(chan int)
    go func() {
        sum := 0
        for i := 1; i <= 50; i++ {
            sum += i
        }
        ch <- sum
    }()
    go func() {
        sum := 0
        for i := 51; i <= 100; i++ {
            sum += i
        }
        ch <- sum
    }()
    total := <-ch + <___
    fmt.Println(total)
}`,
              expected_output: '5050',
              hints: [
                '第二次接收也从同一个 channel',
                '接收语法: <-ch',
                '答案: -ch',
              ],
            },
          ],
          realWorldScenario:
            'channel 是构建并发数据管道的胶水。在 concurrent data pipeline 中，数据流经多个 stage：读取 → 解析 → 转换 → 写入，每个 stage 是一个 goroutine，用 channel 连接。生产者-消费者模式用缓冲通道平衡速率差异。任务队列用 channel 分发工作给 worker 池。爬虫系统用 channel 限制并发数、收集结果。理解 channel 让你用"通信"而非"加锁"的方式组织并发，写出更安全、更易推理的并发程序。',
        },
        {
          id: 'go-ch6-l4',
          title: 'select 与 worker pool',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`select` 语句让 goroutine **同时等待多个 channel 操作**。语法类似 switch，但每个 case 是一个 channel 操作。' +
            'select 会随机选择一个就绪的 case 执行；如果多个 case 同时就绪，**随机**选一个以防饥饿（避免某个 case 永远抢不到）。' +
            '如果没有 case 就绪且有 `default`，执行 default（非阻塞模式）；没有 default 则阻塞直到某个 case 就绪。' +
            'select 是 Go 并发编程中"多路复用"的核心工具，几乎所有的复杂并发逻辑都离不开它。\n\n' +
            'select 最实用的场景是**超时控制**——`case <-time.After(d)`。防止 goroutine 因下游慢响应永久阻塞，' +
            '保证服务响应性。一个 HTTP 请求若 3 秒内无响应，就返回超时——这是后端服务健壮性的基础。' +
            '配合 context.WithTimeout 可以在整条调用链上传播超时。\n\n' +
            '另一个高频场景是**非阻塞收发**：`case v := <-ch:` + `default:` 检查 channel 是否有数据，无则走默认逻辑。' +
            '这让你写"尽力而为"的逻辑——有数据就处理，没有就做别的。轮询 + select 是常见的轻量调度模式。\n\n' +
            '**worker pool（工作池）** 是经典并发模式：固定数量的 worker goroutine 从 jobs channel 取任务处理，' +
            '结果写入 results channel。这种模式控制并发度（防止 goroutine 失控膨胀）、复用 goroutine（减少创建开销）、' +
            '提供背压（jobs 满则生产者阻塞）。`close(jobs)` 通知所有 worker 任务结束（`for range` 退出）。' +
            'worker pool 是生产环境最常用的并发结构——数据库连接池、HTTP 客户端池、消息队列消费者都是它的变体。\n\n' +
            '**数据管道（pipeline）** 把多个处理 stage 串联：每个 stage 是一组 goroutine，用 channel 连接。' +
            'select 在管道中用于多路合并（fan-in）、超时、取消信号传播。这是构建流式处理系统的基础——' +
            '日志聚合、ETL、实时计算都是 pipeline 模式。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 1. 基本 select\n' +
            'select {\n' +
            'case v := <-ch1:\n' +
            '    // ch1 就绪\n' +
            'case ch2 <- 42:\n' +
            '    // ch2 发送成功\n' +
            'default:\n' +
            '    // 无 case 就绪（非阻塞）\n' +
            '}\n' +
            '\n' +
            '// 2. 超时控制\n' +
            'select {\n' +
            'case res := <-result:\n' +
            '    return res, nil\n' +
            'case <-time.After(3 * time.Second):\n' +
            '    return nil, errors.New("超时")\n' +
            '}\n' +
            '\n' +
            '// 3. 非阻塞收发\n' +
            'select {\n' +
            'case v := <-ch:\n' +
            '    fmt.Println("收到", v)\n' +
            'default:\n' +
            '    fmt.Println("无数据")\n' +
            '}\n' +
            '\n' +
            '// 4. 退出信号 + 工作\n' +
            'for {\n' +
            '    select {\n' +
            '    case <-ctx.Done():\n' +
            '        return  // 收到取消信号\n' +
            '    case job := <-jobs:\n' +
            '        process(job)\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            '// 5. worker pool 模式\n' +
            'func worker(id int, jobs <-chan Job, results chan<- Result) {\n' +
            '    for j := range jobs {\n' +
            '        results <- process(j)\n' +
            '    }\n' +
            '}\n' +
            '// 启动 N 个 worker\n' +
            'for w := 0; w < N; w++ {\n' +
            '    go worker(w, jobs, results)\n' +
            '}\n' +
            '```\n\n' +
            '| select 用法 | 形式 | 典型场景 |\n' +
            '|-----------|------|--------|\n' +
            '| 多路接收 | `case <-ch1: case <-ch2:` | fan-in 合并 |\n' +
            '| 超时 | `case <-time.After(d):` | 防永久阻塞 |\n' +
            '| 非阻塞 | `default:` | 探测/轮询 |\n' +
            '| 取消信号 | `case <-ctx.Done():` | 优雅退出 |\n' +
            '| 发送超时 | `case ch <- v: case <-time.After(d):` | 限流背压 |\n\n' +
            '| 并发模式 | 结构 | 用途 |\n' +
            '|---------|------|------|\n' +
            '| worker pool | N worker + jobs/results chan | 控制并发度 |\n' +
            '| pipeline | stage1 → chan → stage2 → chan | 流式处理 |\n' +
            '| fan-out | 1 producer → N consumer | 并行消费 |\n' +
            '| fan-in | N producer → 1 merger | 结果合并 |\n' +
            '| pub-sub | close(ch) 广播 | 通知多接收者 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：select 超时控制**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "time"\n' +
            ')\n' +
            '\n' +
            'func slowOperation() <-chan string {\n' +
            '    ch := make(chan string)\n' +
            '    go func() {\n' +
            '        time.Sleep(200 * time.Millisecond)\n' +
            '        ch <- "完成"\n' +
            '    }()\n' +
            '    return ch\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    select {\n' +
            '    case res := <-slowOperation():\n' +
            '        fmt.Println("结果:", res)\n' +
            '    case <-time.After(100 * time.Millisecond):\n' +
            '        fmt.Println("超时")\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：worker pool**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func worker(jobs <-chan int, results chan<- int) {\n' +
            '    for j := range jobs {\n' +
            '        results <- j * j  // 处理任务：求平方\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    jobs := make(chan int, 10)\n' +
            '    results := make(chan int, 10)\n' +
            '    // 启动 3 个 worker\n' +
            '    for w := 0; w < 3; w++ {\n' +
            '        go worker(jobs, results)\n' +
            '    }\n' +
            '    // 派发 5 个任务\n' +
            '    for j := 1; j <= 5; j++ {\n' +
            '        jobs <- j\n' +
            '    }\n' +
            '    close(jobs)  // 通知 worker 无更多任务\n' +
            '    // 收集结果\n' +
            '    sum := 0\n' +
            '    for r := 0; r < 5; r++ {\n' +
            '        sum += <-results\n' +
            '    }\n' +
            '    fmt.Println(sum)  // 55 (1+4+9+16+25)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：pipeline 流水线**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func generate(nums ...int) <-chan int {\n' +
            '    out := make(chan int)\n' +
            '    go func() {\n' +
            '        defer close(out)\n' +
            '        for _, n := range nums {\n' +
            '            out <- n\n' +
            '        }\n' +
            '    }()\n' +
            '    return out\n' +
            '}\n' +
            '\n' +
            'func square(in <-chan int) <-chan int {\n' +
            '    out := make(chan int)\n' +
            '    go func() {\n' +
            '        defer close(out)\n' +
            '        for n := range in {\n' +
            '            out <- n * n\n' +
            '        }\n' +
            '    }()\n' +
            '    return out\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    out := square(generate(1, 2, 3, 4))\n' +
            '    sum := 0\n' +
            '    for v := range out {\n' +
            '        sum += v\n' +
            '    }\n' +
            '    fmt.Println(sum)  // 30 (1+4+9+16)\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **select 中 case 必须是 channel 操作**：普通表达式不能作为 case。case 既可以是接收 `case v := <-ch:` 也可以是发送 `case ch <- v:`。\n' +
            '2. **随机选择避免饥饿**：多个 case 同时就绪时 select 随机选一个，不会因为顺序导致某个 case 永远抢不到。这是设计上的优点。\n' +
            '3. **default 让 select 非阻塞**：有 default 时若没有 case 就绪立即走 default；无 default 则阻塞。慎用 default 进入忙等循环。\n' +
            '4. **time.After 会泄漏**：每次调用 `time.After` 都创建一个定时器，若 case 提前返回定时器仍在运行直到触发（GC 才回收）。' +
            '高频场景用 `time.NewTimer` 手动 Stop，或用 context.WithTimeout。\n' +
            '5. **nil channel 禁用 case**：把某 channel 设为 nil，select 中对应 case 永远不就绪，相当于动态启停 case。\n' +
            '6. **worker pool 的并发度**：worker 数 = 并发度上限。设太多压垮下游（DB 连接），设太少浪费 CPU。通常按资源上限（DB 连接池大小）设置。\n' +
            '7. **pipeline 要 close**：每个 stage 用 `defer close(out)` 保证上游结束后下游的 `range` 能正常退出，避免 goroutine 泄漏。\n' +
            '8. **goroutine 泄漏检测**：用 `runtime.NumGoroutine()` 监控，或用 pprof goroutine profile 排查泄漏。\n\n' +
            '## 实际应用\n\n' +
            '**1. HTTP 请求超时**：每个外部 API 调用用 select + time.After 限制最大耗时，超时则返回 504。这是微服务健壮性的基础。\n\n' +
            '**2. 任务队列 worker pool**：消息队列消费者启动固定 worker 池处理消息，控制并发度防止压垮数据库。worker 数 = DB 连接池大小。\n\n' +
            '**3. 流式 ETL pipeline**：读取 CSV → 解析 → 校验 → 转换 → 写入 DB，每个 stage 一组 goroutine，用 channel 串联。背压自动传播。\n\n' +
            '**4. 优雅退出**：服务收到 SIGTERM 时 close(done channel)，所有 worker 的 `select { case <-done: return }` 退出。配合 WaitGroup 等待收尾。\n\n' +
            '**5. 限流**：`select { case <-limiter: doWork(); case <-time.After(...): }` 令牌桶限流，控制请求速率。\n\n' +
            '## 扩展知识\n\n' +
            '**context 包与 select**：`context.WithCancel`/`WithTimeout` 返回的 ctx 有 `Done() <-chan struct{}` 方法，' +
            '配合 select 实现跨 goroutine 的取消传播。整个调用链上层 cancel，所有下层 select 立刻响应。这是 Go 并发"可控退出"的标准方案。\n\n' +
            '**errgroup + pipeline**：`golang.org/x/sync/errgroup` 提供 `Group.Go` 和 `Group.WithContext`，' +
            '任一 goroutine 返回 error 自动 cancel context，其他 goroutine 通过 select 响应退出。这是构建可错误传播 pipeline 的利器。\n\n' +
            '**背压（backpressure）与 worker pool**：当 worker 跟不上生产者，jobs channel 满会让生产者阻塞——这就是背压，' +
            '自动防止内存爆炸。无缓冲 channel 是最强背压（同步），缓冲 channel 提供一定弹性。\n\n' +
            '**fan-out 顺序问题**：多个 worker 并发处理任务，结果到达 results channel 顺序不固定。需要顺序结果时给任务加 index，' +
            '收集后按 index 排序，或用 `sync.Map` 按需取。\n\n' +
            '**与 actor 模型的对比**：Erlang/Akka 的 actor 模型每个 actor 有独立邮箱，消息异步；Go channel 是显式的"管道"，' +
            '可以多对多。channel 更灵活但需要手动管理，actor 模型更封装但耦合 actor 抽象。Go 选择 channel 是为了"组合性"。',
          examples: [
            {
              title: '基本 select',
              code: `package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    go func() {
        time.Sleep(10 * time.Millisecond)
        ch1 <- "来自 ch1"
    }()
    go func() {
        time.Sleep(20 * time.Millisecond)
        ch2 <- "来自 ch2"
    }()
    for i := 0; i < 2; i++ {
        select {
        case msg := <-ch1:
            fmt.Println(msg)
        case msg := <-ch2:
            fmt.Println(msg)
        }
    }
}`,
              explanation:
                'select 同时监听 ch1 和 ch2，哪个先就绪处理哪个。ch1 先就绪（10ms < 20ms）。' +
                '循环两次接收两条消息，ch1 先输出。第一行通常是"来自 ch1"。',
            },
            {
              title: 'select 超时控制',
              code: `package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)
    go func() {
        time.Sleep(100 * time.Millisecond)
        ch <- "完成"
    }()
    select {
    case msg := <-ch:
        fmt.Println(msg)
    case <-time.After(50 * time.Millisecond):
        fmt.Println("超时")
    }
}`,
              explanation:
                'goroutine 100ms 后才发数据，但 select 的超时设为 50ms，先触发超时分支。' +
                '输出：超时。这是防止 goroutine 永久阻塞的关键模式。',
            },
            {
              title: 'worker pool 工作池',
              code: `package main

import "fmt"

func worker(jobs <-chan int, results chan<- int) {
    for j := range jobs {
        results <- j * j
    }
}

func main() {
    jobs := make(chan int, 5)
    results := make(chan int, 5)
    for w := 0; w < 3; w++ {
        go worker(jobs, results)
    }
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)
    sum := 0
    for r := 0; r < 5; r++ {
        sum += <-results
    }
    fmt.Println(sum)
}`,
              explanation:
                '3 个 worker 并发处理 5 个任务（求平方）。close(jobs) 通知 worker 无更多任务。' +
                '汇总所有结果：1+4+9+16+25=55。输出：55。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: 'channel 为空时走 default 分支，补全关键字，使输出 "无数据"。',
              starter_code: `package main

import "fmt"

func main() {
    ch := make(chan int, 1)
    select {
    case v := <-ch:
        fmt.Println(v)
    ___:
        fmt.Println("无数据")
    }
}`,
              expected_output: '无数据',
              hints: [
                'select 中"其他情况"用哪个关键字',
                '类似 switch 的 default',
                '答案: default',
              ],
            },
            {
              type: 'output-match',
              prompt: '遍历 pipeline 输出 channel 汇总平方和，补全 range 表达式，使输出 30。',
              starter_code: `package main

import "fmt"

func generate(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for _, n := range nums {
            out <- n
        }
    }()
    return out
}

func square(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for n := range in {
            out <- n * n
        }
    }()
    return out
}

func main() {
    out := square(generate(1, 2, 3, 4))
    sum := 0
    for v := range ___ {
        sum += v
    }
    fmt.Println(sum)
}`,
              expected_output: '30',
              hints: [
                '遍历哪个输出 channel',
                'square 返回的 out',
                '答案: out',
              ],
            },
          ],
          realWorldScenario:
            'select 和 worker pool 是高并发服务的标配。在 implementing a worker pool 时，固定数量的 worker 从任务队列消费请求，控制并发度防止资源耗尽，这是数据库连接池、HTTP 请求池的通用模式。超时控制让服务对慢依赖（卡住的数据库、超时的下游 API）保持健壮。concurrent data pipeline 用 select 合并多个数据源、传播取消信号，是实时数据处理、日志聚合、ETL 系统的核心架构。掌握 select 是写出生产级并发 Go 程序的标志。',
        },
      ],
    },
    // ================================================================
    // 第 7 章：标准库与工程实践
    // ================================================================
    {
      id: 'go-ch7',
      title: '标准库与工程实践',
      order: 6,
      lessons: [
        {
          id: 'go-ch7-l1',
          title: 'fmt / io / os',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '`fmt`、`io`、`os` 是 Go 标准库中三个最基础、最高频使用的包，它们共同构成了 CLI 工具、日志系统、' +
            '配置加载、文件/网络处理的基石。掌握这三个包几乎是每个 Go 程序员的必修课——任何 Go 程序都逃不开输入输出和操作系统交互。\n\n' +
            '`fmt` 包是**格式化输入输出**的核心。它提供三组对称的函数：Print/Scan（控制台）、Sprint/Sscan（字符串）、' +
            'Fprint/Fscan（任意 io.Writer/Reader）。`Printf` 的格式化"动词"（verb）是核心——`%d` 整数、`%s` 字符串、' +
            '`%f` 浮点、`%t` 布尔、`%v` 通用（自动推断）、`%+v` 带字段名、`%#v` Go 语法、`%T` 类型、`%%` 百分号。' +
            '`Sprintf` 返回格式化字符串（不打印），常用于构造消息、错误。`Fprintf` 写入 io.Writer——这是日志库的底层。\n\n' +
            '`io` 包定义了 `Reader` 和 `Writer` 接口，是 Go **I/O 抽象的基石**。`io.Reader` 只有一个方法 `Read(p []byte) (n int, err error)`，' +
            '`io.Writer` 只有 `Write(p []byte) (n int, err error)`。这两个极简接口让"文件、网络、压缩流、加密流、内存 buffer"' +
            '可以无缝组合——任何实现 Reader 的都能被任何实现 Writer 的消费。`io.ReadAll(r)` 一次性读取全部内容，' +
            '`io.Copy(dst, src)` 在 Reader 和 Writer 间高效复制（文件下载、流处理的核心）。\n\n' +
            '`os` 包提供**操作系统交互**：`os.Args` 获取命令行参数、`os.Getenv`/`os.Setenv` 读写环境变量、' +
            '`os.Exit` 退出程序（注意不执行 defer）、`os.Stdin/os.Stdout/os.Stderr` 标准流、`os.Open`/`os.Create` 文件操作。' +
            '配置管理常用环境变量——让同一份代码在不同环境（开发/测试/生产）表现不同行为，这是 12-factor app 的核心理念。\n\n' +
            '理解 fmt/io/os 是构建 CLI 工具和读取配置的基础。Go 的接口设计哲学——"小接口、组合大能力"——' +
            '在 io 包体现得淋漓尽致：Reader/Writer/Closer/Seeker 等小接口组合出 io.ReadWriteCloser 等大接口。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 1. fmt 格式化\n' +
            'fmt.Printf("整数: %d\\n", 42)\n' +
            'fmt.Printf("浮点: %.2f\\n", 3.14159)  // 两位小数\n' +
            'fmt.Printf("字符串: %s\\n", "Go")\n' +
            'fmt.Printf("布尔: %t\\n", true)\n' +
            'fmt.Printf("类型: %T\\n", 42)         // int\n' +
            'fmt.Printf("通用: %v\\n", user)       // 自动推断\n' +
            'fmt.Printf("带字段: %+v\\n", user)    // {Name:小明 Age:20}\n' +
            'fmt.Printf("Go语法: %#v\\n", user)    // main.User{Name:"小明", Age:20}\n' +
            'fmt.Printf("百分号: %%\\n")\n' +
            '\n' +
            's := fmt.Sprintf("用户 %s，%d 岁", name, age)  // 返回字符串\n' +
            'n, err := fmt.Fprintf(w, "日志: %s", msg)      // 写入 io.Writer\n' +
            '\n' +
            '// 2. io.Reader / Writer\n' +
            'r := strings.NewReader("hello")  // 字符串转 Reader\n' +
            'data, _ := io.ReadAll(r)         // 读全部\n' +
            '\n' +
            'buf := &bytes.Buffer{}           // 可变字节 buffer\n' +
            'buf.WriteString("hi")\n' +
            '\n' +
            'io.Copy(dst, src)                // 高效复制（流式）\n' +
            '\n' +
            '// 3. os 包\n' +
            'args := os.Args                 // []string，args[0] 是程序名\n' +
            'port := os.Getenv("PORT")        // 读取环境变量\n' +
            'os.Setenv("MODE", "prod")        // 设置环境变量\n' +
            'os.Exit(1)                       // 退出（不执行 defer！）\n' +
            '\n' +
            'fmt.Fprintln(os.Stderr, "错误信息")  // 写标准错误\n' +
            '```\n\n' +
            '| fmt 动词 | 含义 | 示例 |\n' +
            '|---------|------|------|\n' +
            '| `%d` | 整数 | `42` |\n' +
            '| `%s` | 字符串 | `Go` |\n' +
            '| `%f` / `%.2f` | 浮点 | `3.14` |\n' +
            '| `%t` | 布尔 | `true` |\n' +
            '| `%v` | 通用（自动推断） | `{小明 20}` |\n' +
            '| `%+v` | 带字段名 | `{Name:小明 Age:20}` |\n' +
            '| `%#v` | Go 语法 | `main.User{...}` |\n' +
            '| `%T` | 类型 | `int` |\n' +
            '| `%x` / `%X` | 十六进制 | `2a` / `2A` |\n' +
            '| `%o` / `%b` | 八进制 / 二进制 | `52` / `101010` |\n' +
            '| `%c` | 字符（Unicode 码点） | `A` |\n' +
            '| `%p` | 指针地址 | `0xc0000b2000` |\n' +
            '| `%e` / `%g` | 科学计数法 | `1.000000e+02` |\n' +
            '| `%%` | 百分号字面量 | `%` |\n\n' +
            '| fmt 函数族 | 输出目标 | 典型用途 |\n' +
            '|----------|--------|--------|\n' +
            '| `Println` / `Printf` / `Print` | 控制台（stdout） | 调试、CLI 输出 |\n' +
            '| `Sprintln` / `Sprintf` / `Sprint` | 返回字符串 | 构造消息、错误 |\n' +
            '| `Fprintln` / `Fprintf` / `Fprint` | io.Writer | 日志库、写文件/网络 |\n' +
            '| `Scanln` / `Scanf` / `Scan` | 从 stdin 读 | 交互式输入 |\n\n' +
            '| io 核心类型/函数 | 用途 |\n' +
            '|---------------|------|\n' +
            '| `io.Reader` 接口 | `Read(p []byte) (n, err)` |\n' +
            '| `io.Writer` 接口 | `Write(p []byte) (n, err)` |\n' +
            '| `io.Closer` 接口 | `Close() error` |\n' +
            '| `io.ReadAll(r)` | 一次读取全部 |\n' +
            '| `io.Copy(dst, src)` | 流式复制（高效） |\n' +
            '| `io.MultiReader` | 串联多个 Reader |\n' +
            '| `io.TeeReader` | 读时同时写入（日志/监控） |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：fmt 格式化动词**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'type User struct{ Name string; Age int }\n' +
            '\n' +
            'func main() {\n' +
            '    u := User{Name: "小明", Age: 20}\n' +
            '    fmt.Printf("整数: %d\\n", 42)\n' +
            '    fmt.Printf("浮点: %.2f\\n", 3.14159)\n' +
            '    fmt.Printf("类型: %T\\n", u)\n' +
            '    fmt.Printf("通用: %v\\n", u)\n' +
            '    fmt.Printf("带字段: %+v\\n", u)\n' +
            '    fmt.Printf("Go语法: %#v\\n", u)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：io.Reader 与 io.Copy**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "bytes"\n' +
            '    "fmt"\n' +
            '    "io"\n' +
            '    "strings"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    r := strings.NewReader("Hello, IO World!")\n' +
            '    var buf bytes.Buffer\n' +
            '    io.Copy(&buf, r)             // 流式复制到 buffer\n' +
            '    fmt.Println(buf.String())    // Hello, IO World!\n' +
            '\n' +
            '    // ReadAll 一次读取\n' +
            '    r2 := strings.NewReader("Go")\n' +
            '    data, _ := io.ReadAll(r2)\n' +
            '    fmt.Println(string(data))    // Go\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：os 环境变量与参数**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "os"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    // 命令行参数\n' +
            '    fmt.Println("程序:", os.Args[0])\n' +
            '    if len(os.Args) > 1 {\n' +
            '        fmt.Println("参数:", os.Args[1])\n' +
            '    }\n' +
            '    // 环境变量\n' +
            '    os.Setenv("APP_MODE", "production")\n' +
            '    os.Setenv("APP_PORT", "8080")\n' +
            '    fmt.Println("模式:", os.Getenv("APP_MODE"))\n' +
            '    fmt.Println("端口:", os.Getenv("APP_PORT"))\n' +
            '    fmt.Println("不存在:", os.Getenv("NOT_SET"))  // 空字符串\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **`os.Exit` 不执行 defer**：直接调用 `os.Exit(n)` 会跳过所有 defer，资源不会清理。需要清理时用 `return` 让 main 自然退出。\n' +
            '2. **`os.Getenv` 不区分"未设置"和"空值"**：都返回空字符串。需要区分用 `os.LookupEnv`（返回 value, ok）。\n' +
            '3. **`%v` vs `%+v` vs `%#v`**：调试用 `%+v`（带字段名），需要可复制粘贴的 Go 语法用 `%#v`。\n' +
            '4. **`fmt.Sprintf` 性能**：每次都反射 + 分配。热路径用 `strconv.Itoa`、`strings.Builder` 更快。\n' +
            '5. **io.Reader.Read 不保证读满**：`Read(p)` 可能只读 len(p) 的一部分就返回，需要循环读或用 `io.ReadFull`/`io.ReadAll`。\n' +
            '6. **不要忽略 error**：`fmt.Fprintf` 返回 (n, err)，写网络/文件可能失败。生产代码应检查。\n' +
            '7. **stdout vs stderr**：正常输出走 stdout，错误/日志走 stderr。管道和重定向时区分重要（`go run . > out.txt 2> err.txt`）。\n' +
            '8. **os.Args vs flag 包**：简单参数用 os.Args，复杂选项用 flag 包（支持 -name=value 形式和帮助）。\n\n' +
            '## 实际应用\n\n' +
            '**1. 日志库**：基于 `fmt.Fprintf(os.Stderr, ...)` 或 `log` 包，写入文件或 stdout。生产用 zap/zerolog 等' +
            '高性能库，但底层都是 io.Writer。\n\n' +
            '**2. CLI 工具**：`os.Args` 解析参数、`os.Exit` 设置退出码、`fmt.Println` 输出结果。配合 flag 包做选项解析。\n\n' +
            '**3. 配置加载**：`os.Getenv` 读取环境变量（数据库连接串、API 密钥、端口）。这是 12-factor app 的推荐做法，Kubernetes/Docker 部署都依赖环境变量。\n\n' +
            '**4. 流式数据处理**：`io.Copy` 在 Reader 和 Writer 间高效复制——文件下载、HTTP 响应体处理、压缩/解压都基于此。\n\n' +
            '**5. 数据流组合**：`io.TeeReader` 读时同时写入（用于日志记录、监控拷贝），`io.MultiReader` 串联多个源。\n\n' +
            '## 扩展知识\n\n' +
            '**`fmt.Sprintf` 与 `strings.Builder` 的性能**：Sprintf 用反射、每次分配新字符串，热路径循环中性能差。' +
            '`strings.Builder` 的 `WriteString` + `String()` 避免 copy，性能高 5-10 倍。批量拼接字符串务必用 Builder。\n\n' +
            '**`io.Reader` 的"组合哲学"**：`io.LimitReader(r, n)` 限制最多读 n 字节，`io.MultiReader(r1, r2)` 串联，' +
            '`io.TeeReader(r, w)` 读时复制到 w。这些"装饰器"让单一功能的 Reader 通过组合实现复杂行为，是 Go 接口设计的典范。\n\n' +
            '**`bufio` 包**：提供缓冲 I/O。`bufio.Scanner` 逐行读取大文件不占内存，`bufio.Writer` 批量写入减少系统调用。' +
            '处理大文件时优先用 bufio 而非直接 Read/Write。\n\n' +
            '**`log` 包**：标准库的日志包，基于 `fmt.Fprintf` + 互斥锁。`log.SetOutput(w)` 重定向到文件，`log.SetFlags(log.LstdFlags | log.Lshortfile)` 加时间戳和文件位置。生产环境一般换 zap/zerolog。\n\n' +
            '**`os/exec` 包**：执行外部命令。`exec.Command("ls", "-l").Output()` 运行命令并捕获输出。是构建 CLI 包装器、调用系统工具的基础。\n\n' +
            '**12-factor app 配置管理**：把配置存环境变量，代码通过 `os.Getenv` 读取。优点：部署不变更代码、' +
            '不同环境（dev/staging/prod）用不同环境变量、Kubernetes ConfigMap/Secret 原生支持。',
          examples: [
            {
              title: 'fmt 格式化动词',
              code: `package main

import "fmt"

func main() {
    fmt.Printf("整数: %d\\n", 42)
    fmt.Printf("浮点: %.2f\\n", 3.14159)
    fmt.Printf("字符串: %s\\n", "Go")
    fmt.Printf("布尔: %t\\n", true)
    fmt.Printf("类型: %T\\n", 42)
}`,
              explanation:
                '演示常用格式化动词。`%.2f` 保留两位小数，`%T` 打印变量类型。' +
                '输出五行：整数 42、浮点 3.14、字符串 Go、布尔 true、类型 int。',
            },
            {
              title: 'io.Reader 读取',
              code: `package main

import (
    "fmt"
    "io"
    "strings"
)

func main() {
    r := strings.NewReader("Hello, IO!")
    data, _ := io.ReadAll(r)
    fmt.Println(string(data))
}`,
              explanation:
                '`strings.NewReader` 把字符串包装成 Reader，`io.ReadAll` 读取全部字节。' +
                '输出：Hello, IO!。Reader 抽象让字符串、文件、网络流用同一套接口处理。',
            },
            {
              title: 'os 环境变量',
              code: `package main

import (
    "fmt"
    "os"
)

func main() {
    os.Setenv("APP_MODE", "production")
    os.Setenv("APP_PORT", "8080")
    fmt.Println("模式:", os.Getenv("APP_MODE"))
    fmt.Println("端口:", os.Getenv("APP_PORT"))
}`,
              explanation:
                '`os.Setenv` 设置环境变量，`os.Getenv` 读取。环境变量是 12-factor app 配置管理的推荐方式。' +
                '输出：模式: production、端口: 8080（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Sprintf 构造 "Go v1.26" 并输出。',
              starter_code: `package main

import "fmt"

func main() {
    name := "Go"
    version := 1.26
    msg := fmt.Sprintf("%s v%.2f", name, version)
    fmt.Println(___)
}`,
              expected_output: 'Go v1.26',
              hints: [
                'Sprintf 的结果存在哪个变量',
                '打印 msg',
                '答案: msg',
              ],
            },
            {
              type: 'output-match',
              prompt: '设置环境变量 LANG 为 Go 并读取输出，补全 Getenv 参数。',
              starter_code: `package main

import (
    "fmt"
    "os"
)

func main() {
    os.Setenv("LANG", "Go")
    fmt.Println("语言:", os.Getenv(___))
}`,
              expected_output: '语言: Go',
              hints: [
                '读取哪个环境变量名',
                '变量名是 "LANG"',
                '答案: "LANG"',
              ],
            },
          ],
          realWorldScenario:
            'fmt/io/os 是每个 Go 程序员的日常工具。日志库基于 fmt.Fprintf 写入文件或 stdout；CLI 工具用 os.Args 解析命令行参数、os.Exit 设置退出码；配置加载用 os.Getenv 读取环境变量（数据库连接串、API 密钥、服务端口）。io.Reader/Writer 的组合能力让"文件→压缩→加密→网络"的数据流可以用一行 io.Copy 串联，体现了 Go 接口设计的优雅。',
        },
        {
          id: 'go-ch7-l2',
          title: '文件操作',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            'Go 的文件操作主要通过 `os` 和 `bufio` 包。`os.WriteFile(name, data, perm)` 一步写入文件，' +
            '`os.ReadFile(name)` 一步读取整个文件——这是最简单的 API（Go 1.16+ 引入，替代了旧的 ioutil）。' +
            '小文件处理用这两个一行函数最方便；大文件需要流式处理时用 `os.Open` + `bufio.Scanner` 逐行读取。' +
            '理解"何时用哪个 API"是文件操作的关键。\n\n' +
            '`os.Create` 创建/截断文件返回 `*os.File`（可读写），`os.Open` 只读打开已存在文件。' +
            '`*os.File` 实现了 io.Reader/Writer/Closer 等接口，可以用 `f.WriteString`、`f.Read`、' +
            '`bufio.NewScanner` 逐行读取。**务必用 `defer f.Close()` 关闭文件**，避免文件描述符泄漏——' +
            '长时间运行的服务一旦 fd 耗尽（`ulimit -n`）就再也打不开文件。\n\n' +
            '`os.OpenFile` 是最灵活的打开方式，支持以指定**标志**（只读、读写、追加、创建、截断等）和**权限**打开文件。' +
            '例如 `os.OpenFile("app.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)` 是日志追加写入的常用模式。' +
            '标志常量与 Unix open(2) 系统调用对应，掌握它们能精确控制文件行为。\n\n' +
            '文件权限用 Unix 权限位表示：`0644`（八进制）表示所有者读写、组和其他人只读。' +
            '第一位 0 表示八进制字面量，后续三位分别对应用户/组/其他的 rwx。`0600` 是常见私有文件权限（仅所有者可读写），' +
            '配置文件、密钥文件应使用 `0600` 防止其他用户读取。\n\n' +
            '文件处理器（file processor）是后端常见任务：读取输入文件、逐行/逐块转换、写入输出文件。' +
            '日志分析、CSV 处理、数据清洗都遵循这个模式。`bufio.Scanner` 逐行处理 GB 级大文件几乎不占内存，' +
            '这是 Go 文件 I/O 的优雅之处。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 1. 一行读写（小文件首选）\n' +
            'os.WriteFile("a.txt", []byte("hello"), 0644)  // 写\n' +
            'data, err := os.ReadFile("a.txt")              // 读\n' +
            '\n' +
            '// 2. 打开/创建（需要流式或多次操作）\n' +
            'f, _ := os.Create("b.txt")    // 创建（截断）\n' +
            'f, _ := os.Open("b.txt")       // 只读打开\n' +
            'defer f.Close()\n' +
            '\n' +
            '// 3. OpenFile 灵活打开\n' +
            'f, _ := os.OpenFile("app.log",\n' +
            '    os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)\n' +
            '\n' +
            '// 4. 写入\n' +
            'f.WriteString("一行\\n")\n' +
            'f.Write([]byte("字节"))\n' +
            '\n' +
            '// 5. 逐行读取（大文件首选）\n' +
            'f, _ := os.Open("big.log")\n' +
            'defer f.Close()\n' +
            'scanner := bufio.NewScanner(f)\n' +
            'for scanner.Scan() {\n' +
            '    line := scanner.Text()  // 当前行（不含 \\n）\n' +
            '    // 处理 line\n' +
            '}\n' +
            'if err := scanner.Err(); err != nil { /* 处理错误 */ }\n' +
            '\n' +
            '// 6. 文件信息\n' +
            'info, _ := os.Stat("a.txt")\n' +
            'info.Size()       // 字节数\n' +
            'info.ModTime()    // 修改时间\n' +
            'info.IsDir()      // 是否目录\n' +
            '\n' +
            '// 7. 文件管理\n' +
            'os.Remove("a.txt")              // 删除\n' +
            'os.Mkdir("dir", 0755)           // 创建目录\n' +
            'os.MkdirAll("a/b/c", 0755)      // 递归创建\n' +
            'os.Rename("old", "new")         // 重命名/移动\n' +
            '```\n\n' +
            '| os.OpenFile 标志 | 含义 |\n' +
            '|---------------|------|\n' +
            '| `os.O_RDONLY` | 只读 |\n' +
            '| `os.O_WRONLY` | 只写 |\n' +
            '| `os.O_RDWR` | 读写 |\n' +
            '| `os.O_CREATE` | 不存在则创建 |\n' +
            '| `os.O_TRUNC` | 存在则截断为 0 |\n' +
            '| `os.O_APPEND` | 追加写入（不覆盖） |\n' +
            '| `os.O_EXCL` | 与 O_CREATE 一起用，文件必须不存在 |\n' +
            '| `os.O_SYNC` | 同步 I/O（每次写都 flush 到磁盘） |\n\n' +
            '| 常用权限 | 含义 |\n' +
            '|---------|------|\n' +
            '| `0644` | 所有者读写，组/其他只读 |\n' +
            '| `0600` | 仅所有者读写（私密文件、密钥） |\n' +
            '| `0755` | 所有者全部权限，组/其他可执行（目录、可执行文件） |\n' +
            '| `0666` | 所有人可读写（默认） |\n' +
            '| `0400` | 仅所有者只读 |\n\n' +
            '| os 文件 API | 用途 | 何时用 |\n' +
            '|-----------|------|------|\n' +
            '| `os.ReadFile` | 一次读全部 | 小文件 |\n' +
            '| `os.WriteFile` | 一次写全部 | 小文件，覆盖写 |\n' +
            '| `os.Open` | 只读打开 | 流式读 |\n' +
            '| `os.Create` | 创建/截断 | 写新文件 |\n' +
            '| `os.OpenFile` | 灵活打开 | 追加、读写、指定标志 |\n' +
            '| `bufio.Scanner` | 逐行读 | 大文件、日志 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：一行读写文件**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "os"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    // 一行写入\n' +
            '    os.WriteFile("greeting.txt", []byte("Hello, 文件!"), 0644)\n' +
            '    // 一行读取\n' +
            '    data, _ := os.ReadFile("greeting.txt")\n' +
            '    fmt.Println(string(data))  // Hello, 文件!\n' +
            '    os.Remove("greeting.txt")\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：追加写入日志**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "os"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    f, _ := os.OpenFile("app.log",\n' +
            '        os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)\n' +
            '    defer f.Close()\n' +
            '    f.WriteString("[INFO] 服务启动\\n")\n' +
            '    f.WriteString("[ERROR] 数据库连接失败\\n")\n' +
            '\n' +
            '    // 读回验证\n' +
            '    data, _ := os.ReadFile("app.log")\n' +
            '    fmt.Print(string(data))\n' +
            '    os.Remove("app.log")\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：bufio.Scanner 逐行处理**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "bufio"\n' +
            '    "fmt"\n' +
            '    "os"\n' +
            '    "strings"\n' +
            ')\n' +
            '\n' +
            'func main() {\n' +
            '    content := "苹果\\n香蕉\\n橙子"\n' +
            '    os.WriteFile("fruits.txt", []byte(content), 0644)\n' +
            '\n' +
            '    f, _ := os.Open("fruits.txt")\n' +
            '    defer f.Close()\n' +
            '\n' +
            '    scanner := bufio.NewScanner(f)\n' +
            '    count := 0\n' +
            '    for scanner.Scan() {\n' +
            '        line := strings.ToUpper(scanner.Text())\n' +
            '        fmt.Println(line)\n' +
            '        count++\n' +
            '    }\n' +
            '    fmt.Println("行数:", count)\n' +
            '    os.Remove("fruits.txt")\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **必须 defer Close**：打开文件后立刻 `defer f.Close()`，否则 fd 泄漏。长时间运行的服务一旦 fd 耗尽会"too many open files"。\n' +
            '2. **defer 在函数返回时才执行**：循环里开文件不能用 defer（要等函数结束才关），应该用立即关闭或封装成函数。\n' +
            '3. **检查 error**：`os.Open` 失败返回 nil 文件指针，继续用会 panic。永远 `f, err := os.Open(...); if err != nil { return err }`。\n' +
            '4. **bufio.Scanner 默认行长度限制 64KB**：超长行（如压缩过的 JSON）会扫描失败。用 `scanner.Buffer(buf, maxLen)` 增大。\n' +
            '5. **os.WriteFile 是覆盖写**：每次都截断文件重写。要追加用 `os.OpenFile` + `O_APPEND`。\n' +
            '6. **WriteString vs Write**：WriteString 接受 string，Write 接受 []byte。前者更方便，性能略优（避免 string→[]byte 转换）。\n' +
            '7. **路径分隔符**：Go 用 `/` 作为路径分隔符（Windows 也兼容 `/`）。拼路径用 `filepath.Join` 而非字符串拼接。\n' +
            '8. **临时文件用 os.CreateTemp**：`os.CreateTemp("", "prefix-*.txt")` 创建唯一临时文件，避免并发冲突。\n\n' +
            '## 实际应用\n\n' +
            '**1. 日志系统**：用 `os.OpenFile` + `O_APPEND` 追加写日志，配合 logrotate 滚动。生产环境一般用 lumberjack 库自动切割。\n\n' +
            '**2. 配置加载**：读 JSON/YAML 配置文件，`os.ReadFile` 一次读取后 `json.Unmarshal` 解析。\n\n' +
            '**3. CSV/日志分析**：`bufio.Scanner` 逐行读 GB 级日志，统计错误数、提取关键字段，几乎不占内存。\n\n' +
            '**4. ETL 数据处理**：读取输入文件 → 逐行清洗转换 → 写入输出文件或数据库。文件处理器是后端基础任务。\n\n' +
            '**5. 文件上传/下载**：HTTP 服务器接收上传文件用 `io.Copy(dstFile, r.Body)` 流式落盘，避免内存爆炸。\n\n' +
            '**6. 报表生成**：查询数据库 → 用 encoding/csv 写 CSV → 返回下载链接。\n\n' +
            '## 扩展知识\n\n' +
            '**`bufio` 包的更多能力**：`bufio.Reader` 提供缓冲读（减少系统调用）、`ReadString(delim)` 读到分隔符、' +
            '`ReadBytes(delim)` 类似但返回 []byte。`bufio.Writer` 提供 `Flush()` 显式刷新缓冲——务必 Flush 否则数据可能未落盘。\n\n' +
            '**`filepath` 包**：跨平台路径操作。`filepath.Join("a", "b", "c.txt")` 拼路径（自动处理分隔符），' +
            '`filepath.Walk` 递归遍历目录树，`filepath.Glob` 模式匹配文件，`filepath.Clean` 规范化路径。\n\n' +
            '**`io.Copy` 流式复制**：`io.Copy(dst, src)` 从 src 读到 dst，内部用 32KB 缓冲区循环读写，内存占用恒定。' +
            '文件下载、视频转码、大文件复制都基于此。`io.CopyBuffer` 可自定义缓冲区。\n\n' +
            '**原子写入（避免半写文件）**：先写临时文件 `tmp.txt`，写完 `os.Rename(tmp, target)`——rename 在同一文件系统是原子的，' +
            '保证读到的要么是旧版本要么是新版本，不会是半写状态。配置文件热更新常用此模式。\n\n' +
            '**文件锁**：`flock` 系统调用或 `github.com/gofrs/flock` 库。多进程访问同一文件时用文件锁避免冲突。' +
            '单进程内用 Mutex 即可。\n\n' +
            '**内存映射 mmap**：`golang.org/x/exp/mmap` 把文件映射到内存，适合随机访问大文件（如数据库）。' +
            '比 Read/Write 快但复杂，需手动管理映射生命周期。',
          examples: [
            {
              title: '写入并读取文件',
              code: `package main

import (
    "fmt"
    "os"
)

func main() {
    os.WriteFile("test.txt", []byte("Hello 文件"), 0644)
    data, _ := os.ReadFile("test.txt")
    fmt.Println(string(data))
    os.Remove("test.txt")
}`,
              explanation:
                '`os.WriteFile` 写入字节切片，`os.ReadFile` 读取全部内容。最后 `os.Remove` 删除文件。' +
                '输出：Hello 文件。',
            },
            {
              title: '追加写入多行',
              code: `package main

import (
    "fmt"
    "os"
)

func main() {
    f, _ := os.Create("log.txt")
    f.WriteString("第一行\\n")
    f.WriteString("第二行\\n")
    f.Close()
    data, _ := os.ReadFile("log.txt")
    fmt.Print(string(data))
    os.Remove("log.txt")
}`,
              explanation:
                '`os.Create` 创建文件，`WriteString` 写入字符串。两行内容用 \\n 分隔。' +
                '`fmt.Print` 原样输出（含换行）。输出：第一行、第二行（两行）。',
            },
            {
              title: '文件处理器（行统计）',
              code: `package main

import (
    "fmt"
    "os"
    "strings"
)

func main() {
    content := "苹果\\n香蕉\\n橙子\\n葡萄"
    os.WriteFile("fruits.txt", []byte(content), 0644)
    data, _ := os.ReadFile("fruits.txt")
    lines := strings.Split(string(data), "\\n")
    fmt.Println("行数:", len(lines))
    fmt.Println("内容:", strings.Join(lines, ", "))
    os.Remove("fruits.txt")
}`,
              explanation:
                '写入水果列表，读回后按 \\n 分割成行。4 行水果。`strings.Join` 用逗号重新拼接。' +
                '输出：行数: 4、内容: 苹果, 香蕉, 橙子, 葡萄（两行）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写入 "Hello Go" 后读回并输出，补全 ReadFile 的文件名。',
              starter_code: `package main

import (
    "fmt"
    "os"
)

func main() {
    os.WriteFile("data.txt", []byte("Hello Go"), 0644)
    data, _ := os.ReadFile(___)
    fmt.Println(string(data))
    os.Remove("data.txt")
}`,
              expected_output: 'Hello Go',
              hints: [
                '读取的文件名要和写入一致',
                '文件名是 "data.txt"',
                '答案: "data.txt"',
              ],
            },
            {
              type: 'output-match',
              prompt: '统计文件行数，补全 lines 变量，使输出 4。',
              starter_code: `package main

import (
    "fmt"
    "os"
    "strings"
)

func main() {
    content := "a\\nb\\nc\\nd"
    os.WriteFile("lines.txt", []byte(content), 0644)
    data, _ := os.ReadFile("lines.txt")
    lines := strings.Split(string(data), "\\n")
    fmt.Println(len(___))
    os.Remove("lines.txt")
}`,
              expected_output: '4',
              hints: [
                '统计哪个变量的长度',
                '分割后的行列表是 lines',
                '答案: lines',
              ],
            },
          ],
          realWorldScenario:
            'file processor 是后端常见任务。日志分析器读取 GB 级日志文件逐行解析统计；ETL 工具读取 CSV/JSON 文件清洗转换后写入数据库；报表生成器把查询结果写成 Excel/CSV 供下载。Go 的文件 API 简洁高效，bufio.Scanner 能逐行处理大文件而不占内存。理解文件操作是构建批处理系统、配置加载、数据导入导出功能的基础，几乎是每个后端服务的必备能力。',
        },
        {
          id: 'go-ch7-l3',
          title: 'JSON 编解码',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '`encoding/json` 是 Go 处理 JSON 的标准库。JSON（JavaScript Object Notation）是现代 Web API 的' +
            '**通用数据格式**——REST API 的请求/响应体、配置文件、消息队列载荷、NoSQL 存储几乎都用 JSON。' +
            '掌握 Go 的 JSON 编解码是构建 Web 服务、对接第三方 API、处理配置的基础技能。Go 的 encoding/json ' +
            '通过**反射**实现结构体与 JSON 的自动映射，配合**结构体标签**定制字段名和行为，既类型安全又灵活。\n\n' +
            '`json.Marshal(v)` 把 Go 值编码为 JSON 字节切片（`[]byte`），`json.Unmarshal(data, &v)` 把 JSON 解码到 Go 值（传指针）。' +
            '这是最基础的两条 API。结构体字段默认用**字段名作为 JSON 键**（首字母大写），但前端约定通常用 snake_case 或 camelCase，' +
            '这时用结构体标签自定义：`Name string \`json:"name"\`` 让键变成 "name"。标签是反引号包裹的元数据，' +
            '用反射在运行时读取。\n\n' +
            'JSON 与结构体的映射规则：**只有导出字段（首字母大写）会被编码**——小写字段被忽略。标签控制键名，' +
            '`json:"-"` 表示忽略该字段（敏感信息如密码），`json:"name,omitempty"` 在值为零值时省略该字段（让 JSON 更紧凑），' +
            '`json:"name,string"` 把数字字段编为 JSON 字符串（前端大数精度问题常用）。指针类型 nil 编码为 JSON null。' +
            'map 和切片直接对应 JSON 对象和数组。\n\n' +
            '`json.NewEncoder(w).Encode(v)` 流式编码到 io.Writer，`json.NewDecoder(r).Decode(&v)` 流式解码——' +
            '适合处理 HTTP 请求/响应体或大文件，避免一次性加载到内存。HTTP handler 里通常用 `json.NewDecoder(r.Body).Decode(&req)`' +
            '解析请求体，`json.NewEncoder(w).Encode(resp)` 写响应体。\n\n' +
            'JSON 编解码的"魔法"全在反射和标签——理解这两点能解释所有行为。生产环境建议始终用结构体 + 标签，' +
            '避免用 `map[string]interface{}`（失去类型安全）。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 1. 基本编解码\n' +
            'data, err := json.Marshal(v)        // 编码：Go → []byte\n' +
            'err = json.Unmarshal(data, &v)      // 解码：[]byte → Go（传指针）\n' +
            '\n' +
            '// 2. 结构体标签\n' +
            'type User struct {\n' +
            '    ID       int    `json:"id"`                    // 重命名键\n' +
            '    Name     string `json:"name"`\n' +
            '    Email    string `json:"email,omitempty"`       // 零值时省略\n' +
            '    Password string `json:"-"`                     // 永远忽略\n' +
            '    Age      int    `json:"age,string"`            // 编为 JSON 字符串\n' +
            '    CreatedAt time.Time `json:"created_at"`\n' +
            '}\n' +
            '\n' +
            '// 3. 流式编解码\n' +
            'json.NewEncoder(w).Encode(v)        // 编码到 io.Writer\n' +
            'json.NewDecoder(r).Decode(&v)       // 从 io.Reader 解码\n' +
            '\n' +
            '// 4. 缩进输出（调试用）\n' +
            'data, _ := json.MarshalIndent(v, "", "  ")  // 2 空格缩进\n' +
            '\n' +
            '// 5. 解码未知结构\n' +
            'var m map[string]interface{}\n' +
            'json.Unmarshal(data, &m)  // 任意 JSON → map\n' +
            '\n' +
            '// 6. 自定义编解码（实现 Marshaler/Unmarshaler 接口）\n' +
            'type Money struct{ Cents int }\n' +
            'func (m Money) MarshalJSON() ([]byte, error) {\n' +
            '    return []byte(fmt.Sprintf(`{"usd":%.2f}`, float64(m.Cents)/100)), nil\n' +
            '}\n' +
            '```\n\n' +
            '| Go 类型 | JSON 类型 | 说明 |\n' +
            '|---------|----------|------|\n' +
            '| `struct` | object | 字段→键 |\n' +
            '| `map[string]T` | object | 动态键 |\n' +
            '| `[]T` / array | array | 切片/数组 |\n' +
            '| `string` | string | |\n' +
            '| `int`/`float64` | number | |\n' +
            '| `bool` | true/false | |\n' +
            '| `nil` 指针 | null | |\n' +
            '| `time.Time` | RFC3339 字符串 | 默认行为 |\n\n' +
            '| 标签选项 | 含义 | 示例 |\n' +
            '|---------|------|------|\n' +
            '| `json:"name"` | 重命名键 | `Name \`json:"name"\`` |\n' +
            '| `json:"-"` | 忽略字段 | `Password \`json:"-"\`` |\n' +
            '| `omitempty` | 零值时省略 | `Email \`json:",omitempty"\`` |\n' +
            '| `string` | 编为字符串 | `Age \`json:",string"\`` |\n' +
            '| `json:",inline"` | 嵌入结构体展开 | Go 1.20+ |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：结构体编码与标签**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "encoding/json"\n' +
            '    "fmt"\n' +
            ')\n' +
            '\n' +
            'type User struct {\n' +
            '    ID       int    `json:"id"`\n' +
            '    Name     string `json:"name"`\n' +
            '    Email    string `json:"email,omitempty"`\n' +
            '    Password string `json:"-"`\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    u := User{ID: 1, Name: "小明", Password: "secret"}\n' +
            '    data, _ := json.Marshal(u)\n' +
            '    fmt.Println(string(data))\n' +
            '    // {"id":1,"name":"小明"}\n' +
            '    // Email 省略（空串零值），Password 忽略\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：解码到结构体**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "encoding/json"\n' +
            '    "fmt"\n' +
            ')\n' +
            '\n' +
            'type User struct {\n' +
            '    ID   int    `json:"id"`\n' +
            '    Name string `json:"name"`\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    raw := []byte(`{"id":1,"name":"小红","extra":"ignored"}`)\n' +
            '    var u User\n' +
            '    json.Unmarshal(raw, &u)\n' +
            '    fmt.Printf("%+v\\n", u)  // {ID:1 Name:小红}\n' +
            '    // 多余字段 "extra" 被忽略\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：流式编解码（HTTP 模式）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "encoding/json"\n' +
            '    "fmt"\n' +
            '    "strings"\n' +
            ')\n' +
            '\n' +
            'type Request struct {\n' +
            '    Action string `json:"action"`\n' +
            '    Data   int    `json:"data"`\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    // 模拟 HTTP 请求体\n' +
            '    body := strings.NewReader(`{"action":"create","data":42}`)\n' +
            '\n' +
            '    var req Request\n' +
            '    json.NewDecoder(body).Decode(&req)\n' +
            '    fmt.Printf("收到: %+v\\n", req)\n' +
            '\n' +
            '    // 模拟 HTTP 响应\n' +
            '    var buf strings.Builder\n' +
            '    json.NewEncoder(&buf).Encode(map[string]string{"status": "ok"})\n' +
            '    fmt.Println(buf.String())\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **只有导出字段会被编码**：小写首字母的字段被静默忽略。新手常见 bug——以为字段在 JSON 里但实际没有。\n' +
            '2. **Unmarshal 传指针**：`json.Unmarshal(data, &v)` 必须传指针，否则无法写入 v。\n' +
            '3. **多余字段默认忽略**：JSON 有结构体没有的字段会被丢弃。需要严格匹配用 `json.NewDecoder` + `DisallowUnknownFields`。\n' +
            '4. **数字精度问题**：JSON number 默认解码为 float64，大整数（如 64 位 ID）会丢精度。用 `json.Number` 或 `json.Decoder.UseNumber()`。\n' +
            '5. **time.Time 默认 RFC3339**：编解码为 `"2026-07-11T10:30:00Z"` 格式。自定义格式实现 MarshalJSON/UnmarshalJSON。\n' +
            '6. **nil 指针 vs 零值**：`*User` 的 nil 编码为 null；`User{}` 编码为 `{"name":"",...}`。前端约定区分 null 和空对象时注意。\n' +
            '7. **omitempty 的"零值"判断**：0、""、false、nil、空切片/ map 都算零值会被省略。需要区分"0 和缺失"时用指针 `*int`。\n' +
            '8. **循环引用会栈溢出**：结构体相互引用（A 含 *B，B 含 *A）会让 Marshal 无限递归。用 ID 引用代替指针。\n' +
            '9. **性能**：encoding/json 基于反射，性能一般。超高频场景考虑 jsoniter、easyjson、sonic 等代码生成或 SIMD 库。\n\n' +
            '## 实际应用\n\n' +
            '**1. RESTful API**：Gin/Echo 等框架用 `c.ShouldBindJSON(&req)` 自动解码请求体，`c.JSON(200, resp)` 编码响应。结构体标签 = API 数据契约。\n\n' +
            '**2. 配置文件**：JSON 配置 + `os.ReadFile` + `json.Unmarshal` 加载。配合环境变量覆盖实现分层配置。\n\n' +
            '**3. 微服务通信**：gRPC 用 protobuf，但 REST/gateway 用 JSON。HTTP API、消息队列载荷常用 JSON。\n\n' +
            '**4. 数据库 JSON 列**：PostgreSQL/MySQL 支持 JSON 列，Go 端用 `json.Marshal` 序列化结构体存入，读取时 Unmarshal。\n\n' +
            '**5. 日志结构化**：把日志字段编为 JSON 行（`{"level":"info","msg":"...","ts":"..."}`），便于 ELK 等日志系统检索。\n\n' +
            '**6. 缓存序列化**：Redis 存对象时 `json.Marshal` 后 SET，GET 后 Unmarshal。\n\n' +
            '## 扩展知识\n\n' +
            '**`json.RawMessage` 延迟解码**：当 JSON 中某字段类型不确定或需要分两步解码时，用 `json.RawMessage`（本质是 []byte）' +
            '先存原始字节，后续按需 Unmarshal。常用于"根据 type 字段决定 data 字段类型"的多态场景。\n\n' +
            '**`json.Number` 精度保持**：默认 number 解码为 float64 丢精度。`dec := json.NewDecoder(r); dec.UseNumber()` 让数字保留为 json.Number（字符串），' +
            '按需转 int64/float64。处理大整数 ID 必备。\n\n' +
            '**自定义 MarshalJSON/UnmarshalJSON**：实现 `MarshalJSON() ([]byte, error)` 和 `UnmarshalJSON([]byte) error` 接口，完全控制编解码。' +
            '常用于自定义时间格式、加密字段、单位转换（如 Money 把 cents 编为 {"usd": 12.34}）。\n\n' +
            '**`json:"-,omitempty"` 的坑**：`json:"-"` 表示忽略，但 `json:"-,"`（注意逗号）表示键名是 "-"。新手容易混淆。\n\n' +
            '**高性能 JSON 库**：encoding/json 用反射，性能基准约 100MB/s。jsoniter 兼容 API 但快 3-4 倍；' +
            'easyjson 用代码生成，无反射，快 5-10 倍；sonic（字节开源）用 SIMD，在 amd64 上极快。极致性能场景可替换。\n\n' +
            '**与 Python json 的对比**：Python json 把对象解码为 dict，丢失类型信息；Go 解码到结构体，类型安全且自文档化。' +
            'Go 的结构体标签让 API 契约清晰——看一眼结构体就知道 JSON 长什么样，这是 Go 的优势。',
          examples: [
            {
              title: '编码结构体为 JSON',
              code: `package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{Name: "小明", Age: 20}
    data, _ := json.Marshal(p)
    fmt.Println(string(data))
}`,
              explanation:
                '`json.Marshal` 把结构体编码为 JSON。无标签时键名=字段名（首字母大写）。' +
                '输出：{"Name":"小明","Age":20}。',
            },
            {
              title: '解码 JSON 到结构体',
              code: `package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string
    Age  int
}

func main() {
    data := []byte(\`{"Name":"小红","Age":18}\`)
    var p Person
    json.Unmarshal(data, &p)
    fmt.Println(p.Name, p.Age)
}`,
              explanation:
                '`json.Unmarshal` 把 JSON 字节解码到结构体（传指针）。字段按名称匹配。' +
                '输出：小红 18。',
            },
            {
              title: '用结构体标签自定义键名',
              code: `package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}

func main() {
    p := Person{Name: "小刚", Age: 22}
    data, _ := json.Marshal(p)
    fmt.Println(string(data))
}`,
              explanation:
                '结构体标签 \`json:"name"\` 让 JSON 键变为小写。这是对接前端约定键名的标准做法。' +
                '输出：{"name":"小刚","age":22}。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '把带标签的结构体编码为 JSON 并输出，补全变量，使输出 \'{"name":"小明","age":20}\'。',
              starter_code: `package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}

func main() {
    p := Person{Name: "小明", Age: 20}
    data, _ := json.Marshal(p)
    fmt.Println(string(___))
}`,
              expected_output: '{"name":"小明","age":20}',
              hints: [
                'Marshal 的结果存在哪个变量',
                'JSON 字节切片是 data',
                '答案: data',
              ],
            },
            {
              type: 'output-match',
              prompt: '把 JSON 解码到结构体并输出 Name，补全 Unmarshal 的目标指针。',
              starter_code: `package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}

func main() {
    data := []byte(\`{"name":"小红","age":18}\`)
    var p Person
    json.Unmarshal(data, &___)
    fmt.Println(p.Name)
}`,
              expected_output: '小红',
              hints: [
                'Unmarshal 需要目标变量的指针',
                'p 的地址是 &p',
                '答案: p',
              ],
            },
          ],
          realWorldScenario:
            'JSON 是 Web 开发的通用语言。REST API 的请求体和响应体都是 JSON——Go 的结构体标签让 API 数据契约清晰可维护。' +
            '配置文件常用 JSON 存储（替代 YAML）。微服务间通信也常用 JSON 作为序列化格式。掌握 encoding/json 是 Go Web 开发的基础技能。',
        },
        {
          id: 'go-ch7-l4',
          title: '测试与基准测试',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            'Go 内置 `testing` 包，把测试作为**语言一等公民**——无需安装 pytest、JUnit 等外部框架，' +
            '`go test` 命令开箱即用。测试代码与生产代码**同目录**，测试文件以 `_test.go` 结尾。' +
            '测试函数签名为 `func TestXxx(t *testing.T)`，名称必须以 `Test` 开头，参数为 `*testing.T`。' +
            'Go 工具链自动发现并执行所有 Test 函数。这种"语言级测试支持"让 Go 项目天然具备可测试性，' +
            '是 Go 工程文化的重要组成部分——标准库本身就有极高的测试覆盖率。\n\n' +
            '`t.Errorf()` 报告失败但**继续执行**后续断言（适合收集多个错误一次看完）；' +
            '`t.Fatalf()` 报告失败并**立即停止**当前测试函数（适合前置条件失败时短路，比如数据库连接失败就别测查询了）。' +
            '`t.Log()` 输出调试信息（仅在 `-v` 模式显示）。`t.Skip()` 跳过测试（用于环境不满足时）。' +
            '断言风格简洁——`if got != want { t.Errorf(...) }`，没有 assertEqual 等"语法糖"，但极清晰。\n\n' +
            '**表驱动测试**（table-driven test）是 Go 社区推崇的模式：把测试用例组织成匿名结构体切片，' +
            '用 `for range` 遍历执行，避免为每个用例写重复的测试函数。新增用例只需在切片中加一行——' +
            '这是 Go 标准库源码中最常见的测试写法。配合 `t.Run(tt.name, func(t *testing.T) {...})` 子测试，' +
            '每个用例独立报告、可单独 `go test -run TestX/用例名` 运行。\n\n' +
            '基准测试函数签名为 `func BenchmarkXxx(b *testing.B)`，循环 `b.N` 次测量性能。' +
            '`b.N` 由 testing 框架自动调整——先跑 1 次，再跑 100、10000……直到获得稳定数据。' +
            '`b.ResetTimer()` 重置计时器（排除初始化开销），`b.ReportAllocs()` 报告内存分配次数。' +
            '用 `go test -bench=.` 运行基准测试。在在线编译器中无法运行 `go test`，' +
            '但可以用 `func main` 模拟测试模式，学习断言与表驱动的写法。\n\n' +
            '好的测试遵循 **AAA 模式**：Arrange（准备）、Act（执行）、Assert（断言）。' +
            '测试名应描述被测行为，如 `TestAdd_PositiveNumbers`。一个测试函数只测一个行为，' +
            '失败信息要清晰——`t.Errorf("got %d, want %d", got, want)` 让失败原因一目了然。' +
            '测试覆盖率用 `go test -cover` 查看。\n\n' +
            '## 语法说明\n\n' +
            '```go\n' +
            '// 文件：math_test.go\n' +
            'package math\n' +
            '\n' +
            'import "testing"\n' +
            '\n' +
            '// 1. 基本单元测试\n' +
            'func TestAdd(t *testing.T) {\n' +
            '    got := Add(2, 3)\n' +
            '    want := 5\n' +
            '    if got != want {\n' +
            '        t.Errorf("Add(2,3) = %d, want %d", got, want)\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            '// 2. 表驱动测试（推荐）\n' +
            'func TestAdd_Table(t *testing.T) {\n' +
            '    tests := []struct {\n' +
            '        name string\n' +
            '        a, b int\n' +
            '        want int\n' +
            '    }{\n' +
            '        {"正数", 2, 3, 5},\n' +
            '        {"零", 0, 0, 0},\n' +
            '        {"负数", -1, 1, 0},\n' +
            '        {"大数", 1000000, 1, 1000001},\n' +
            '    }\n' +
            '    for _, tt := range tests {\n' +
            '        t.Run(tt.name, func(t *testing.T) {\n' +
            '            got := Add(tt.a, tt.b)\n' +
            '            if got != tt.want {\n' +
            '                t.Errorf("got %d, want %d", got, tt.want)\n' +
            '            }\n' +
            '        })\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            '// 3. 基准测试\n' +
            'func BenchmarkAdd(b *testing.B) {\n' +
            '    for i := 0; i < b.N; i++ {\n' +
            '        Add(2, 3)\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            '// 4. 示例测试（同时是文档）\n' +
            'func ExampleAdd() {\n' +
            '    fmt.Println(Add(2, 3))\n' +
            '    // Output: 5\n' +
            '}\n' +
            '```\n\n' +
            '| testing.T 方法 | 用途 |\n' +
            '|--------------|------|\n' +
            '| `t.Errorf(fmt, args)` | 报告失败，继续执行 |\n' +
            '| `t.Fatalf(fmt, args)` | 报告失败，立即停止 |\n' +
            '| `t.Logf(fmt, args)` | 调试日志（-v 显示） |\n' +
            '| `t.Skip(reason)` | 跳过测试 |\n' +
            '| `t.Run(name, func)` | 子测试 |\n' +
            '| `t.Parallel()` | 标记可并行执行 |\n' +
            '| `t.Helper()` | 标记辅助函数（错误定位到调用方） |\n' +
            '| `t.Cleanup(func)` | 注册清理函数（类似 defer） |\n\n' +
            '| go test 命令 | 用途 |\n' +
            '|-----------|------|\n' +
            '| `go test` | 运行当前包测试 |\n' +
            '| `go test ./...` | 运行所有包测试 |\n' +
            '| `go test -v` | 显示详细输出 |\n' +
            '| `go test -run TestX` | 只运行匹配的测试 |\n' +
            '| `go test -cover` | 显示覆盖率 |\n' +
            '| `go test -bench=.` | 运行基准测试 |\n' +
            '| `go test -race` | 启用竞态检测 |\n' +
            '| `go test -coverprofile=c.out` | 生成覆盖率文件 |\n' +
            '| `go tool cover -html=c.out` | 可视化覆盖率报告 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：单元测试模式（用 main 模拟）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            '// Add 返回两数之和\n' +
            'func Add(a, b int) int { return a + b }\n' +
            '\n' +
            '// 模拟 testing.T.Errorf 的断言函数\n' +
            'func assertEqual(name string, got, want int) {\n' +
            '    if got != want {\n' +
            '        fmt.Printf("%s 失败: got %d, want %d\\n", name, got, want)\n' +
            '    } else {\n' +
            '        fmt.Printf("%s 通过\\n", name)\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            'func main() {\n' +
            '    assertEqual("正数相加", Add(2, 3), 5)\n' +
            '    assertEqual("零相加", Add(0, 0), 0)\n' +
            '    assertEqual("负数相加", Add(-1, 1), 0)\n' +
            '}\n' +
            '```\n\n' +
            '**示例 2：表驱动测试**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import "fmt"\n' +
            '\n' +
            'func Multiply(a, b int) int { return a * b }\n' +
            '\n' +
            'func main() {\n' +
            '    // 用例组织成切片\n' +
            '    tests := []struct {\n' +
            '        name string\n' +
            '        a, b int\n' +
            '        want int\n' +
            '    }{\n' +
            '        {"2x3", 2, 3, 6},\n' +
            '        {"0x5", 0, 5, 0},\n' +
            '        {"负数", -1, 4, -4},\n' +
            '        {"大数", 100, 100, 10000},\n' +
            '    }\n' +
            '    passed := 0\n' +
            '    for _, tt := range tests {\n' +
            '        got := Multiply(tt.a, tt.b)\n' +
            '        if got != tt.want {\n' +
            '            fmt.Printf("%s 失败: got %d, want %d\\n", tt.name, got, tt.want)\n' +
            '        } else {\n' +
            '            fmt.Printf("%s 通过\\n", tt.name)\n' +
            '            passed++\n' +
            '        }\n' +
            '    }\n' +
            '    fmt.Printf("通过 %d/%d\\n", passed, len(tests))\n' +
            '}\n' +
            '```\n\n' +
            '**示例 3：基准测试模式（用 main 模拟）**\n\n' +
            '```go\n' +
            'package main\n' +
            '\n' +
            'import (\n' +
            '    "fmt"\n' +
            '    "time"\n' +
            ')\n' +
            '\n' +
            'func Concat(a, b string) string { return a + b }\n' +
            '\n' +
            'func main() {\n' +
            '    // 模拟 b.N 循环\n' +
            '    iterations := 1000000\n' +
            '    start := time.Now()\n' +
            '    for i := 0; i < iterations; i++ {\n' +
            '        Concat("Hello, ", "World!")\n' +
            '    }\n' +
            '    elapsed := time.Since(start)\n' +
            '    nsPerOp := elapsed.Nanoseconds() / int64(iterations)\n' +
            '    fmt.Printf("%d 次迭代，总耗时 %v，平均 %d ns/op\\n",\n' +
            '        iterations, elapsed, nsPerOp)\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **测试文件必须 `_test.go` 结尾**：否则 `go test` 不识别。测试文件与生产代码同包同目录。\n' +
            '2. **测试函数必须 `Test` 开头 + 参数 `*testing.T`**：否则不被识别为测试。Benchmark 函数以 `Benchmark` 开头。\n' +
            '3. **`t.Errorf` vs `t.Fatalf`**：Errorf 继续执行（收集多错误），Fatalf 立即停止（前置失败短路）。' +
            '前置条件（如打开文件）失败用 Fatalf，断言用 Errorf。\n' +
            '4. **基准测试必须循环 `b.N`**：不循环或固定次数会导致测量不准。框架会调整 b.N 直到稳定。\n' +
            '5. **`b.ResetTimer()` 排除初始化**：循环前的准备工作（建大 slice 等）不计入耗时。\n' +
            '6. **测试名描述行为**：`TestAdd_PositiveNumbers` 比 `TestAdd1` 更清晰。失败时一眼知道哪个场景挂了。\n' +
            '7. **失败信息要可诊断**：`t.Errorf("got %d, want %d", got, want)` 比单纯 `t.Error("失败")` 强百倍。\n' +
            '8. **不要测试语言/标准库**：测 `len([]int{1,2,3}) == 3` 是浪费——测你自己的业务逻辑。\n' +
            '9. **竞态测试 `-race`**：CI 必须跑 `go test -race ./...`，能在运行时发现数据竞争。\n' +
            '10. **测试覆盖率不是越高越好**：80% 是合理目标，100% 不现实且边际收益低。关键路径必须覆盖。\n\n' +
            '## 实际应用\n\n' +
            '**1. CI/CD 流水线**：每次 push/PR 触发 `go test ./... -race -cover`，测试不通过禁止合并。这是工程质量的底线。\n\n' +
            '**2. 表驱动测试覆盖率**：一个表驱动测试覆盖边界条件（0、负数、空、大数、极值），比 10 个独立测试函数更简洁。\n\n' +
            '**3. 基准测试驱动优化**：重构前跑基准记录基线，重构后对比——"凭感觉优化"是反工程，数据驱动才是正道。\n\n' +
            '**4. Mock 与依赖注入**：把外部依赖（DB、HTTP）抽象为接口，测试时注入 mock 实现。Go 推荐"接口小、组合大"的风格。\n\n' +
            '**5. 黄金文件测试**：把期望输出存为 `testdata/*.golden` 文件，测试时对比实际输出。适合复杂格式（代码生成器、报表）。\n\n' +
            '**6. 大厂覆盖率要求**：腾讯、字节、Google 等公司的 Go 服务通常要求 80%+ 测试覆盖率才允许上线，关键服务要求 90%+。\n\n' +
            '## 扩展知识\n\n' +
            '**`testify` 第三方断言库**：`github.com/stretchr/testify` 提供 `assert.Equal(t, got, want)` 等"语法糖"断言，' +
            '比裸 `if got != want` 简洁。但 Go 团队倾向于原生 if 风格——清晰且无依赖。社区两派都有人用。\n\n' +
            '**`t.Parallel()` 并行测试**：调用 `t.Parallel()` 标记测试可与其他并行测试同时运行，加速大测试套件。' +
            '注意共享状态必须加锁或用 `t.TempDir()` 隔离。\n\n' +
            '**`t.Run` 子测试**：表驱动测试用 `t.Run(tt.name, func(t *testing.T) {...})` 创建子测试，' +
            '每个用例独立报告、可单独运行 `go test -run TestX/正数`。失败定位更精确。\n\n' +
            '**`Example` 函数**：`func ExampleFoo()` + `// Output: 期望输出` 既是测试又是文档（出现在 godoc 中）。' +
            '适合展示 API 用法，文档与代码同步更新不会过时。\n\n' +
            '**Fuzzing 模糊测试（Go 1.18+）**：`func FuzzXxx(f *testing.F)` 自动生成随机输入测试函数，发现边界 bug。' +
            '`go test -fuzz=FuzzXxx` 运行。适合解析器、序列化等输入广泛的函数。\n\n' +
            '**`httptest` 包**：测试 HTTP handler 不启动真实服务器——`httptest.NewRecorder()` 记录响应、' +
            '`httptest.NewRequest("GET", "/path", body)` 构造请求。是 Web 服务测试的标准工具。\n\n' +
            '**`gomock`/`mockery` mock 生成**：基于接口自动生成 mock 实现，配合 `go:generate` 指令。' +
            '复杂依赖（多个外部服务）的单元测试必备。简单场景手写 fake 实现也行。\n\n' +
            '**测试金字塔**：底层多单元测试（快、多）、中层少集成测试（中、中）、顶层极少 E2E 测试（慢、少）。' +
            'Go 的快速编译和并行测试让单元测试层特别高效。',
          examples: [
            {
              title: '单元测试模式（用 main 模拟）',
              code: `package main

import "fmt"

// Add 返回两数之和
func Add(a, b int) int {
    return a + b
}

// assertEqual 模拟测试断言
func assertEqual(name string, got, want int) {
    if got != want {
        fmt.Printf("%s 失败: got %d, want %d\\n", name, got, want)
    } else {
        fmt.Printf("%s 通过\\n", name)
    }
}

func main() {
    assertEqual("正数相加", Add(2, 3), 5)
    assertEqual("零相加", Add(0, 0), 0)
    assertEqual("负数相加", Add(-1, 1), 0)
}`,
              explanation:
                '在真实项目中，assertEqual 的逻辑由 `testing.T.Errorf` 完成，' +
                '这里用 fmt.Printf 模拟。三个用例全部通过——输出三行"通过"。' +
                '真实测试文件命名为 add_test.go，用 `go test` 运行。',
            },
            {
              title: '表驱动测试',
              code: `package main

import "fmt"

func Multiply(a, b int) int {
    return a * b
}

func main() {
    // 表驱动测试：用例组织成切片
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"2x3", 2, 3, 6},
        {"0x5", 0, 5, 0},
        {"负数", -1, 4, -4},
    }
    for _, tt := range tests {
        got := Multiply(tt.a, tt.b)
        if got != tt.want {
            fmt.Printf("%s 失败: got %d, want %d\\n", tt.name, got, tt.want)
        } else {
            fmt.Printf("%s 通过\\n", tt.name)
        }
    }
}`,
              explanation:
                '表驱动测试把所有用例放在匿名结构体切片中，`for range` 遍历执行。' +
                '新增用例只需在切片中加一行，无需复制整个测试函数。' +
                '这是 Go 社区最推崇的测试模式，标准库源码中随处可见。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全 assertEqual 调用，测试 Subtract(10, 3) 是否等于 7。输出"减法测试 通过"。',
              starter_code: `package main

import "fmt"

func Subtract(a, b int) int {
    return a - b
}

func assertEqual(name string, got, want int) {
    if got == want {
        fmt.Printf("%s 通过\\n", name)
    }
}

func main() {
    assertEqual("减法测试", Subtract(10, 3), ___)
}`,
              expected_output: '减法测试 通过',
              hints: [
                'Subtract(10, 3) 的结果是 7',
                'want 参数应该是期望值',
                '答案: 7',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全表驱动测试的断言条件，当 got 等于 want 时输出"测试通过"。',
              starter_code: `package main

import "fmt"

func main() {
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"2x3", 2, 3, 6},
    }
    for _, tt := range tests {
        got := tt.a * tt.b
        if got ___ tt.want {
            fmt.Println("测试通过")
        }
    }
}`,
              expected_output: '测试通过',
              hints: [
                '比较两个值是否相等用 == 运算符',
                'if 条件应该是 got == tt.want',
                '答案: ==',
              ],
            },
          ],
          realWorldScenario:
            '测试是生产级代码的基石。Go 标准库的 testing 包让测试成为语言一等公民——无需安装 pytest、JUnit 等外部框架。' +
            '在真实项目中，表驱动测试让新增用例只需加一行数据，CI/CD 流水线用 `go test ./...` 自动运行全部测试。' +
            '基准测试帮助在重构时量化性能变化，避免"凭感觉优化"。腾讯、字节等大厂的 Go 服务要求 80% 以上测试覆盖率才允许上线。',
        },
      ],
    },
  ],
};