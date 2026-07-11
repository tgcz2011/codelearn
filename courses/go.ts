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
            '每个 Go 程序都从 `package main` 开始，`func main()` 是程序的入口函数。' +
            '`import "fmt"` 导入标准库的格式化输入输出包，`fmt.Println()` 打印一行文本并自动换行。' +
            'Go 用花括号 `{}` 划分代码块，语句以分号结尾——但 Go 的编译器会在每行末尾自动插入分号，' +
            '所以你通常不需要手写分号。注意左花括号 `{` 必须与函数声明在同一行，这是 Go 的强制规范。' +
            '\n\n' +
            '`fmt` 包提供三种常用输出函数：`Print`（不换行）、`Println`（自动换行，参数间加空格）、' +
            '`Printf`（格式化输出）。`Printf` 使用格式化动词：`%d` 整数、`%s` 字符串、`%f` 浮点数、' +
            '`%t` 布尔、`%v` 通用格式、`%T` 打印类型。这些动词让你精确控制输出格式。' +
            '\n\n' +
            'Go 是静态类型、编译型语言。代码先编译成机器码再执行，运行速度接近 C 语言，' +
            '同时具备垃圾回收和内置并发支持。Go 的设计目标是"简单、高效、可靠"——' +
            '语法简洁（关键字只有 25 个），编译速度快，适合构建大规模后端服务和云原生应用。' +
            '\n\n' +
            '在在线编译器中我们直接写单文件代码，但理解 `go mod`、`go build`、`go run` 等命令对真实项目至关重要。' +
            '`go run main.go` 直接编译并运行，`go build` 生成可执行文件。Go 强制要求：未使用的导入和变量会编译报错，' +
            '这强制开发者保持代码整洁。',
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
            '`package main` 声明这是一个可执行程序包（而不是库）。`import` 导入标准库或其他包，' +
            '单行导入用 `import "fmt"`，多行导入用圆括号批量声明。Go 不允许导入未使用的包——' +
            '如果导入了却没有用到，编译器会直接报错，这是 Go 强制代码整洁的设计。' +
            '\n\n' +
            'Go 的可见性规则很简单：**首字母大写的标识符是导出的**（公开，可被外部包访问），' +
            '首字母小写的标识符是未导出的（私有，仅包内可见）。例如 `fmt.Println` 的 `P` 大写，' +
            '所以可以从外部调用；`fmt` 包内部的私有函数外部无法访问。' +
            '\n\n' +
            '常用标准库：`fmt`（格式化 I/O）、`strings`（字符串操作）、`strconv`（字符串与类型转换）、' +
            '`math`（数学函数）、`os`（操作系统交互）、`time`（时间处理）。导入时可以给包起别名，' +
            '例如 `import f "fmt"` 后用 `f.Println` 调用，但一般只在包名冲突时才用。' +
            '\n\n' +
            '理解包的概念是组织大型 Go 项目的基础。一个项目通常有多个包，每个包是一个目录，' +
            '通过 `go mod` 管理模块依赖。第三方包通过 `go get` 下载，例如 `go get github.com/xxx/yyy`。',
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
            'Go 用 `var name type = value` 声明变量，也可以用短变量声明 `name := value`（自动推断类型，' +
            '只能在函数内部使用）。短变量声明是 Go 最常用的变量声明方式，简洁高效。' +
            '`var` 声明通常用于需要显式指定类型、零值初始化或包级变量的场景。' +
            '\n\n' +
            '`const` 声明常量，常量在编译时确定，运行时不可修改。Go 的常量可以是无类型的（如 `const pi = 3.14`），' +
            '在需要时自动适配上下文类型。`iota` 是 Go 特有的常量计数器，在 `const` 块中从 0 开始，' +
            '每新增一行自动加 1，常用于定义枚举值。' +
            '\n\n' +
            'Go 是静态类型语言，变量类型在编译时确定，一旦声明就不能改变。未显式初始化的变量会被赋予' +
            '**零值**：数值类型为 0、布尔为 false、字符串为空串 ""、指针为 nil。零值机制让变量始终有确定的初始状态，' +
            '避免了"未初始化变量"导致的未定义行为。' +
            '\n\n' +
            'Go 支持多重赋值和类型推断：`a, b := 1, 2` 同时声明两个变量，`a, b = b, a` 交换两个变量的值。' +
            '这种简洁的语法让代码更易读。',
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
            'Go 的基本数据类型包括：整数（`int`、`int8`、`int64`、`uint` 等）、浮点数（`float32`、`float64`）、' +
            '布尔（`bool`）、字符串（`string`）。日常编程中 `int` 和 `float64` 是最常用的数值类型，' +
            '它们的大小跟随平台（64 位系统上 int 是 64 位）。' +
            '\n\n' +
            'Go **不支持隐式类型转换**——不同类型之间运算必须显式转换。`int` 和 `float64` 不能直接相加，' +
            '必须用 `float64(intVar)` 或 `int(floatVar)` 转换。这个设计虽然略显繁琐，但避免了' +
            '许多因隐式转换导致的精度丢失和 bug，让代码意图更清晰。' +
            '\n\n' +
            '字符串是只读的字节序列（UTF-8 编码）。`len(s)` 返回字节数（不是字符数），' +
            '中文字符通常占 3 个字节。要按 Unicode 字符（rune）处理，需要转换。' +
            '布尔类型只有 `true` 和 `false` 两个值，Go 不会把 0/1 当作布尔值。' +
            '\n\n' +
            '类型转换语法是 `T(v)`，例如 `float64(5)` 把整数 5 转为浮点数，`string(65)` 把数字转为字符。' +
            '字符串与其他类型转换常用 `strconv` 包，如 `strconv.Itoa(42)` 整数转字符串、`strconv.Atoi("42")` 字符串转整数。',
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
            'Go 的 `if` 语句不需要圆括号包裹条件，但花括号 `{}` 是必须的——即使只有一行代码。' +
            '这是 Go 强制的代码规范，避免了" dangling else"和单行 if 的歧义。' +
            '条件可以是任何返回布尔值的表达式。' +
            '\n\n' +
            'Go 的 if 支持初始化语句：`if 初始化; 条件 { }`。初始化语句中声明的变量' +
            '作用域仅限于该 if 语句（包括 else 分支）。这在"先检查再使用"的场景非常方便，' +
            '例如 `if err := doSomething(); err != nil { }`。' +
            '\n\n' +
            '`else if` 用于多分支判断，`else` 处理所有其他情况。Go 没有 Python 那样的 `elif`，' +
            '用 `else if` 两个单词。注意 if/else if/else 的左花括号都必须与关键字同行。' +
            '\n\n' +
            'Go 不支持三元运算符 `? :`，所有条件判断都用 if。这是 Go 刻意简化语法的设计，' +
            '避免一行写过于复杂的表达式。',
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
            'Go 只有一个循环关键字：`for`。它承担了其他语言中 for、while、do-while 三种循环的职责。' +
            '最常见的形式是 `for 初始化; 条件; 后置 { }`，例如 `for i := 0; i < 10; i++ { }`。' +
            '\n\n' +
            '省略初始化和后置就是 while 风格：`for 条件 { }`。省略所有部分 `for { }` 是无限循环，' +
            '需要用 `break` 跳出或 `return` 退出函数。Go 没有 while 关键字，统一用 for。' +
            '\n\n' +
            '`range` 关键字用于遍历切片、数组、map、字符串。`for index, value := range 切片 { }` ' +
            '同时获取索引和值；不需要索引时用 `_` 忽略：`for _, v := range nums { }`。' +
            '\n\n' +
            'FizzBuzz 是经典的编程入门题：遍历 1 到 N，能被 3 整除输出 "Fizz"，能被 5 整除输出 "Buzz"，' +
            '能被 15 整除输出 "FizzBuzz"，否则输出数字本身。它考察循环、条件、取余运算的综合运用。',
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
            'Go 的 `switch` 比其他语言更灵活。基本形式 `switch 表达式 { case 值1: ... case 值2: ... default: ... }`。' +
            '与 C/Java 不同，**Go 的 case 默认不穿透**（no fallthrough），匹配一个 case 执行完就自动跳出，' +
            '不需要写 `break`。如果确实需要继续执行下一个 case，用 `fallthrough` 关键字显式声明。' +
            '\n\n' +
            '一个 case 可以匹配多个值，用逗号分隔：`case 1, 2, 3:` 表示匹配 1 或 2 或 3。' +
            '这让 switch 处理多值分支非常简洁。`default` 处理所有未匹配的情况。' +
            '\n\n' +
            'Go 的 switch 可以不带表达式，此时每个 case 写一个布尔条件，相当于 if/else if 的链式写法但更清晰：' +
            '`switch { case score >= 90: ... case score >= 60: ... }`。这种"无表达式 switch"在多条件判断时比 if/else 更易读。' +
            '\n\n' +
            'switch 也支持初始化语句：`switch x := getValue(); x { case ... }`，变量作用域限于 switch 块。',
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
            '`defer` 用于延迟执行一个函数调用，被 defer 的函数会在当前函数返回时才执行。' +
            'defer 最常见的用途是资源释放——打开文件后 defer 关闭、加锁后 defer 解锁，' +
            '确保无论函数从哪条路径返回（正常返回或 panic），资源都能被正确释放。' +
            '\n\n' +
            '多个 defer 按**后进先出（LIFO）**的顺序执行——最后 defer 的最先执行，像栈一样。' +
            '这很合理：通常后获取的资源依赖先获取的资源，释放时要反向进行（先关文件再释放锁）。' +
            '\n\n' +
            'defer 的一个重要细节：**defer 语句的参数在 defer 时立即求值**，而不是在函数执行时。' +
            '例如 `defer fmt.Println(x)` 中的 x 在 defer 那一刻就被计算并固定，即使后面 x 改变了，' +
            'defer 执行时仍输出旧值。如果 defer 一个闭包，则闭包内的变量在执行时才读取。' +
            '\n\n' +
            'defer 虽然方便但有微小性能开销，在热点路径的紧密循环中应避免滥用。' +
            '但在资源管理和错误恢复场景，defer 是 Go 代码可靠性的重要保障。',
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
            'Go 用 `func 函数名(参数列表) 返回类型 { 函数体 }` 定义函数。参数和返回值都需声明类型。' +
            '多个参数同类型时可简写：`func add(a, b int) int`。函数是 Go 的一等公民，可以作为参数传递、' +
            '作为返回值、赋值给变量。' +
            '\n\n' +
            'Go 的特色是**多返回值**——一个函数可以返回多个值。最经典的模式是 `(结果, error)`：' +
            '函数正常返回结果和 nil，出错返回零值和 error。调用方必须检查 error 是否为 nil，' +
            '这是 Go 错误处理的基础范式。`_` 可以忽略不需要的返回值。' +
            '\n\n' +
            '返回值可以命名（named return），在函数开头声明返回变量名，函数体直接赋值，最后用裸 `return` 返回。' +
            '命名返回值适合复杂函数，让返回意图更清晰，但过度使用裸 return 会降低可读性。' +
            '\n\n' +
            '递归是函数调用自身的技巧，经典例子是斐波那契数列：`fib(n) = fib(n-1) + fib(n-2)`，' +
            '边界条件 `fib(0)=0, fib(1)=1`。递归把复杂问题分解为同类小问题，但要注意栈深度和重复计算。',
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
            '可变参数函数用 `...类型` 接收任意数量的参数，例如 `func sum(nums ...int) int`。' +
            '在函数内部，`nums` 是一个 `[]int` 切片。调用时可以传多个参数 `sum(1,2,3)`，' +
            '也可以把切片展开传入 `sum(nums...)`（注意三个点）。可变参数必须是函数的最后一个参数。' +
            '\n\n' +
            '闭包（closure）是引用了外部变量的匿名函数。闭包"捕获"定义时所在作用域的变量，' +
            '即使外部函数已返回，闭包仍能访问和修改这些变量。闭包常用于创建工厂函数、' +
            '状态保持、回调函数等场景。' +
            '\n\n' +
            'Go 的函数本身是值类型，可以赋值给变量、作为参数传递、作为返回值。' +
            '高阶函数（接收函数作为参数或返回函数的函数）让代码更灵活，' +
            '例如 `map`、`filter`、`reduce` 风格的数据处理。' +
            '\n\n' +
            '一个经典闭包例子是计数器工厂：`makeCounter()` 返回一个每次调用都自增的函数。' +
            '闭包捕获的 count 变量对外部不可见，实现了类似私有变量的封装。',
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
            '匿名函数是没有名字的函数，语法 `func(参数) 返回类型 { 函数体 }`。' +
            '匿名函数可以赋值给变量、立即调用、作为参数传递。它本质上是一个函数字面量（function literal），' +
            '在 Go 中等价于闭包。' +
            '\n\n' +
            '立即调用的匿名函数（IIFE，Immediately Invoked Function Expression）在定义后紧跟参数列表直接调用：' +
            '`func(x int) int { return x*x }(5)`。IIFE 常用于隔离作用域、初始化复杂变量、' +
            '或在 main 执行前做一次性计算。' +
            '\n\n' +
            '匿名函数作为参数传递构成高阶函数。例如 `apply(f func(int) int, x int) int` 接收一个函数和参数，' +
            '把函数应用到参数上。这种模式让算法与具体运算解耦——同一套 apply 框架可以套用 double、square、' +
            'add100 等不同函数。' +
            '\n\n' +
            '匿名函数是 goroutine 的常见载体：`go func() { ... }()` 启动一个并发任务。' +
            '掌握匿名函数是理解 Go 并发和回调机制的前提。',
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
            'Go 的 `init` 函数是特殊的初始化函数，在每个包加载时自动执行，且在 `main` 函数之前。' +
            '一个文件可以有多个 init 函数，它们按声明顺序执行。init 函数没有参数也没有返回值，' +
            '不能被显式调用——由 Go 运行时自动触发。' +
            '\n\n' +
            'init 的执行顺序是：先初始化包级变量（按依赖和声明顺序），再执行 init 函数（按声明顺序），' +
            '最后执行 main。如果导入了其他包，被导入包的 init 先执行。这个顺序保证依赖项在使用前已就绪。' +
            '\n\n' +
            'init 常用于：注册驱动（如数据库驱动通过 init 自动注册）、初始化全局配置、' +
            '校验环境变量、设置日志组件、预计算常量等。它让包在被使用前完成必要的准备工作，' +
            '调用方无需手动初始化。' +
            '\n\n' +
            '虽然 init 很方便，但过度使用会让初始化逻辑隐式化、难以测试。现代 Go 实践倾向于' +
            '减少 init 的副作用，改用显式的初始化函数（如 `Setup()`）让调用方明确控制。' +
            '但理解 init 机制对阅读标准库和第三方库源码必不可少。',
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
            'Go 的数组 `[N]类型` 是固定长度的序列，例如 `[3]int{1,2,3}`。数组长度是类型的一部分，' +
            '`[3]int` 和 `[4]int` 是不同类型。数组是值类型——赋值和传参会复制整个数组，这在多数场景' +
            '并不理想，所以日常编程中更常用切片。' +
            '\n\n' +
            '切片 `[]类型` 是动态长度的序列，底层引用一个数组。切片是引用类型，赋值和传参共享底层数据，' +
            '修改会相互影响。`make([]type, len, cap)` 创建切片，`append` 追加元素（可能触发扩容），' +
            '`len` 取长度，`cap` 取容量。切片的 `s[low:high]` 语法截取子切片（含 low 不含 high）。' +
            '\n\n' +
            '切片扩容机制：当 append 超过容量时，Go 分配更大的底层数组并复制数据。' +
            '扩容策略在 Go 1.18 后对小切片采用更平滑的增长，减少内存浪费。理解 len/cap 的区别' +
            '能避免意外的性能问题和内存泄漏（子切片持有大数组引用）。' +
            '\n\n' +
            '二分查找是切片上的经典算法：在有序切片中每次取中间元素比较，缩小一半搜索范围，' +
            '时间复杂度 O(log n)。它要求切片有序，是查找问题的基石。',
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
            '`map` 是 Go 的键值对（哈希表）类型，声明 `map[键类型]值类型`。' +
            '用 `make(map[K]V)` 创建空 map，或用字面量 `map[string]int{"a": 1}` 初始化。' +
            'map 是引用类型，赋值共享底层数据。map 的键必须是可比较的类型（支持 == 运算），' +
            '如 string、int、bool，不能用切片、map、函数作为键。' +
            '\n\n' +
            '访问不存在的键返回值类型的零值（不会 panic）。要区分"键不存在"和"值为零值"，' +
            '用双返回值：`v, ok := m[key]`，ok 为 false 表示键不存在。这是 Go map 的惯用模式。' +
            '`delete(m, key)` 删除键值对。' +
            '\n\n' +
            '遍历 map 用 `for k, v := range m`。注意 map 的遍历顺序是**随机的**——Go 故意随机化遍历顺序，' +
            '防止开发者依赖顺序。如果需要有序遍历，应先把键收集到切片排序后再遍历。' +
            '\n\n' +
            '词频统计（word count）是 map 的经典应用：遍历单词列表，用 map 累计每个单词的出现次数。',
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
            'Go 的字符串是**只读的字节序列**，底层用 UTF-8 编码。`len(s)` 返回字节数（不是字符数），' +
            '所以 `len("Go语言")` 是 8（G=1, o=1, 语=3 字节, 言=3 字节），而不是 4。' +
            '这个细节在处理中文、emoji 等 Unicode 字符时容易踩坑。' +
            '\n\n' +
            '`rune` 是 Go 处理 Unicode 字符的类型（本质是 int32 的别名）。一个 rune 代表一个 Unicode 码点。' +
            '把字符串转为 `[]rune` 后，每个元素是一个字符，`len([]rune(s))` 才是真正的字符数。' +
            '遍历字符串用 `for i, r := range s`，r 是 rune 类型，i 是字节索引（不是字符索引）。' +
            '\n\n' +
            '`strings` 包提供丰富的字符串操作：`strings.Split`（分割）、`strings.Join`（拼接）、' +
            '`strings.Contains`（包含）、`strings.HasPrefix`（前缀）、`strings.Replace`（替换）。' +
            '`strconv` 包处理字符串与数值的相互转换。' +
            '\n\n' +
            '回文判断是字符串的经典问题：判断字符串正读反读是否相同。由于中文是多字节，' +
            '必须先转为 `[]rune` 再比较，否则按字节比较会出错。',
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
            '指针保存变量的内存地址。Go 用 `&` 取地址（`&x` 得到 x 的指针），`*` 解引用（`*p` 取指针指向的值）。' +
            'Go 的指针相比 C 简化了：没有指针运算（不能 `p++` 移动指针），这避免了指针越界等安全隐患。' +
            '指针让函数能修改外部变量，避免大结构体的复制开销。' +
            '\n\n' +
            '函数传参默认是值传递——复制一份传入。如果要在函数内修改外部变量，必须传指针：' +
            '`func increment(n *int) { *n++ }`。调用时 `increment(&x)` 传入 x 的地址。' +
            '这是 Go 中"输出参数"的常见方式。' +
            '\n\n' +
            '`new(T)` 分配一个 T 类型的零值并返回其指针（`*T`）。例如 `p := new(int)` 得到 `*int`，' +
            '`*p` 初始为 0。new 较少直接使用，因为 `:=` 配合 `&` 更直观。' +
            '\n\n' +
            'Go 的指针默认是 nil（空指针），对 nil 指针解引用会 panic。Go 没有 C 的 `->` 运算符，' +
            '通过指针访问字段自动解引用：`p.Field` 等价于 `(*p).Field`。理解指针是掌握结构体方法和接口的基础。',
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
            '`struct` 是 Go 把多个字段聚合在一起的复合类型。语法 `type 结构体名 struct { 字段 }`。' +
            '结构体是值类型——赋值和传参会复制所有字段。Go 没有类（class），结构体 + 方法是面向对象的核心。' +
            '\n\n' +
            '结构体初始化有三种方式：按字段名（`Person{Name:"小明", Age:20}`，推荐，顺序无关）、' +
            '按位置（`Person{"小明", 20}`，必须按定义顺序）、零值初始化（`Person{}` 所有字段为零值）。' +
            '按字段名初始化最安全，字段增删不会破坏现有代码。' +
            '\n\n' +
            '用 `.` 访问字段：`p.Name`。结构体可以嵌套——一个结构体的字段类型是另一个结构体，' +
            '表达"拥有"关系。`%+v` 格式化输出带字段名，`%v` 只输出值。' +
            '\n\n' +
            'Go 的结构体标签（tag）是用反引号包裹的元数据，常用于 JSON、数据库映射：' +
            '`Name string \`json:"name"\``。标签在运行时通过反射读取，是 Go 与外部世界对接的桥梁。',
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
            'Go 的方法是绑定到特定类型上的函数。语法 `func (接收者) 方法名(参数) 返回值 { }`。' +
            '接收者写在 func 和方法名之间，相当于 this/self。接收者可以是值类型 `func (r Rectangle)` ' +
            '或指针类型 `func (r *Rectangle)`，这决定了方法是否能修改接收者。' +
            '\n\n' +
            '值接收者：方法操作的是接收者的副本，无法修改原对象。适合只读方法（如计算面积）。' +
            '指针接收者：方法操作的是接收者的指针，可以修改原对象，且避免大结构体复制。' +
            '通常建议：如果某些方法需要指针接收者，整个类型的方法集统一用指针接收者。' +
            '\n\n' +
            'Go 自动处理值/指针的方法调用：`r.Area()` 中 r 是值或指针都能调用，编译器自动取地址或解引用。' +
            '这让你写代码时不必纠结于值还是指针，调用语法一致。' +
            '\n\n' +
            '方法让数据和行为绑定，是面向对象封装的体现。结合接口（下一节），方法实现了 Go 风格的多态。',
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
            'Go 没有"继承"，而是用**嵌入（embedding）**实现代码复用。把一个结构体作为另一个结构体的' +
            '匿名字段，内嵌类型的字段和方法会被"提升"到外层结构体，可以直接访问。这是 Go "组合优于继承"哲学的体现。' +
            '\n\n' +
            '嵌入语法：在结构体中只写类型名不写字段名，例如 `type Dog struct { Animal }`。' +
            'Dog 直接拥有 Animal 的字段和方法，`dog.Name`、`dog.Speak()` 都可用。' +
            '同时仍可用 `dog.Animal.Speak()` 显式访问内嵌类型。' +
            '\n\n' +
            '方法提升规则：内嵌类型的值接收者方法提升为外层的值接收者方法，指针接收者方法同理。' +
            '外层可以重写（覆盖）内嵌类型的方法，调用时优先用外层的。这模拟了"重写"但不引入继承的复杂层级。' +
            '\n\n' +
            '组合是构建复杂系统的核心模式：把小而专注的类型组合成大类型，每个部分可独立测试和复用。' +
            '相比深层继承树，组合让依赖关系扁平、清晰，避免"脆弱基类"问题。',
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
            '接口是方法签名的集合。`type 接口名 interface { 方法 }` 定义接口。Go 的接口是**隐式实现**的——' +
            '一个类型只要实现了接口定义的所有方法，就自动满足该接口，无需 `implements` 声明。' +
            '这是 Go 区别于 Java 的"鸭子类型"，让接口与实现解耦。' +
            '\n\n' +
            '接口值持有"具体值 + 具体类型"两部分。调用接口方法时动态分派到具体类型的方法。' +
            '空接口 `interface{}`（Go 1.18 后可写 `any`）没有任何方法，任何类型都满足它，' +
            '类似 Java 的 Object，用于处理任意类型（如 JSON 解析未知结构）。' +
            '\n\n' +
            '类型断言 `v, ok := i.(T)` 从接口值取出具体类型，ok 表示是否成功。' +
            '类型选择 `switch v := i.(type)` 根据接口值的具体类型分支处理。' +
            '接口让代码面向抽象编程，便于测试时用 mock 替换真实实现。' +
            '\n\n' +
            '在 REST API 设计中，常用接口定义 Handler：`type Handler interface { ServeHTTP(...) }`，' +
            '不同路由注册不同的实现，框架统一调用接口方法。这是依赖倒置原则的体现。',
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
            'Go 的错误处理哲学是"把错误作为值"。函数通过返回 `error` 类型表示失败，调用方必须显式检查。' +
            '`error` 是一个内置接口，任何实现了 `Error() string` 方法的类型都是 error。' +
            '用 `errors.New("消息")` 或 `fmt.Errorf("格式", 参数)` 创建错误。' +
            '\n\n' +
            '惯用模式：`result, err := doSomething(); if err != nil { return err }`。' +
            'Go 鼓励尽早返回错误（快速失败），避免深层嵌套。虽然 `if err != nil` 显得繁琐，' +
            '但它让错误处理路径清晰可见，强制开发者思考每一个可能的失败点。' +
            '\n\n' +
            '`panic` 用于不可恢复的严重错误（如数组越界、空指针解引用），会导致程序崩溃并打印堆栈。' +
            '`recover` 在 defer 中捕获 panic，让程序从崩溃中恢复。panic 不应作为常规错误处理手段——' +
            '预期内的错误应该用 error 返回，只有真正"不该发生"的情况才 panic。' +
            '\n\n' +
            'recover 必须在 defer 函数中直接调用才有效。常见模式是包装一个 safe-run 函数，' +
            '在 defer 中 recover，使 panic 不至于传播到上层导致整个服务崩溃。',
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
            '`goroutine` 是 Go 的轻量级线程，用 `go` 关键字启动：`go 函数调用()`。' +
            'goroutine 由 Go 运行时调度，初始栈仅几 KB，可以轻松创建数十万个 goroutine。' +
            '相比操作系统线程，goroutine 极轻量，是 Go 并发的核心优势。' +
            '\n\n' +
            'goroutine 与主函数并发执行，主函数返回时所有 goroutine 会被强制终止。' +
            '因此需要同步机制等待 goroutine 完成——`sync.WaitGroup` 是最常用的工具：' +
            '`wg.Add(1)` 增加计数，goroutine 内 `defer wg.Done()` 减少，`wg.Wait()` 阻塞直到全部完成。' +
            '\n\n' +
            '多个 goroutine 并发访问共享变量会导致**数据竞争**（race condition），结果不可预测。' +
            '解决方法是用 `sync.Mutex` 互斥锁保护共享变量：`mu.Lock()` 加锁，`mu.Unlock()` 解锁。' +
            '也可以用 channel 通信（下一节）替代共享内存，这是 Go 推崇的"通过通信共享内存"。' +
            '\n\n' +
            '启动 goroutine 时要注意闭包捕获循环变量的问题。Go 1.22+ 已修复循环变量复用问题，' +
            '每次迭代会创建新变量，但仍建议显式传参以避免歧义。',
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
            '`channel` 是 goroutine 间通信的管道，是 Go 并发编程的核心。`make(chan 类型)` 创建无缓冲通道，' +
            '`make(chan 类型, 容量)` 创建带缓冲通道。发送 `ch <- 值`，接收 `值 := <-ch`。' +
            '无缓冲通道发送和接收必须同步（会阻塞直到另一方就绪），常用于 goroutine 间同步握手。' +
            '\n\n' +
            '带缓冲通道在缓冲区未满时发送不阻塞，未空时接收不阻塞，适合解耦生产者和消费者的速率。' +
            '`close(ch)` 关闭通道，表示不再发送数据。接收方可用 `v, ok := <-ch` 判断通道是否已关闭，' +
            '或用 `for v := range ch` 遍历直到关闭。' +
            '\n\n' +
            'Go 的并发信条是"不要通过共享内存通信，而是通过通信共享内存"。channel 让数据在 goroutine 间' +
            '安全传递，避免显式加锁。单向通道 `chan<- int`（只发）和 `<-chan int`（只收）能在类型层面' +
            '约束通道方向，防止误用。' +
            '\n\n' +
            '并发求和是 channel 的经典应用：把任务拆分给多个 goroutine 并行计算，' +
            '每个 goroutine 把部分结果发送到 channel，主 goroutine 汇总。',
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
            '`select` 语句让 goroutine 同时等待多个 channel 操作。语法类似 switch，但每个 case 是一个 channel 操作。' +
            'select 会随机选择一个就绪的 case 执行；如果多个 case 同时就绪，随机选一个以防饥饿。' +
            '如果没有 case 就绪且有 `default`，执行 default（非阻塞模式）。' +
            '\n\n' +
            'select 常用于：超时控制（`case <-time.After(...)`）、多路复用（同时监听多个 channel）、' +
            '非阻塞收发（配合 default）。超时控制是 select 最实用的场景——防止 goroutine 永久阻塞，' +
            '保证服务响应性。' +
            '\n\n' +
            'worker pool（工作池）是经典的并发模式：固定数量的 worker goroutine 从 jobs channel ' +
            '取任务处理，结果写入 results channel。这种模式控制并发度、避免 goroutine 失控膨胀、' +
            '复用 goroutine 减少创建开销。`close(jobs)` 通知所有 worker 任务结束（`for range` 退出）。' +
            '\n\n' +
            '数据管道（pipeline）把多个处理 stage 串联：每个 stage 是一组 goroutine，用 channel 连接。' +
            'select 在管道中用于多路合并、超时、取消信号传播。这是构建流式处理系统的基础。',
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
            '`fmt` 包是格式化输入输出的核心。`Printf` 的常用动词：`%d` 整数、`%s` 字符串、`%f` 浮点、' +
            '`%t` 布尔、`%v` 通用（自动推断）、`%+v` 带字段名、`%#v` Go 语法、`%T` 类型、`%%` 百分号。' +
            '`Sprintf` 返回格式化字符串（不打印），常用于构造消息。`Fprintf` 写入 io.Writer。' +
            '\n\n' +
            '`io` 包定义了 `Reader` 和 `Writer` 接口，是 Go I/O 抽象的基石。`io.ReadAll(r)` 读取全部内容，' +
            '`strings.NewReader` 把字符串转为 Reader，`bytes.Buffer` 是可变字节缓冲。' +
            '几乎所有 I/O（文件、网络、压缩）都实现 Reader/Writer，可以无缝组合。' +
            '\n\n' +
            '`os` 包提供操作系统交互：`os.Args` 获取命令行参数、`os.Getenv`/`os.Setenv` 读写环境变量、' +
            '`os.Exit` 退出程序、`os.Stdin/os.Stdout/os.Stderr` 标准流。配置管理常用环境变量，' +
            '让同一份代码在不同环境（开发/测试/生产）表现不同行为。' +
            '\n\n' +
            '理解 fmt/io/os 是构建 CLI 工具和读取配置的基础。`io.Copy` 在 Reader 和 Writer 间高效复制数据，' +
            '是文件下载、流处理的核心。',
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
            'Go 的文件操作主要通过 `os` 和 `bufio` 包。`os.WriteFile(name, data, perm)` 一步写入文件，' +
            '`os.ReadFile(name)` 一步读取整个文件，这是最简单的 API（Go 1.16+）。' +
            '`os.Create` 创建/打开文件返回 `*os.File`，`os.Open` 只读打开。' +
            '\n\n' +
            '`*os.File` 实现了 io.Reader/Writer，可以用 `f.WriteString`、`f.Read`、`bufio.NewScanner` ' +
            '逐行读取。记得用 `defer f.Close()` 关闭文件，避免文件描述符泄漏。' +
            '`os.OpenFile` 支持以指定标志（追加、读写、创建）和权限打开文件。' +
            '\n\n' +
            '文件权限用 Unix 权限位表示：`0644` 表示所有者读写、组和其他人只读。' +
            '`strings.Split(content, "\\n")` 按行分割，`strings.Join` 拼接。' +
            '\n\n' +
            '文件处理器（file processor）是常见的后端任务：读取输入文件、逐行/逐块转换、写入输出文件。' +
            '日志分析、CSV 处理、数据清洗都遵循这个模式。',
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
            '`encoding/json` 是 Go 处理 JSON 的标准库。`json.Marshal(v)` 把 Go 值编码为 JSON 字节切片，' +
            '`json.Unmarshal(data, &v)` 把 JSON 解码到 Go 值。结构体字段默认用字段名作为 JSON 键（首字母大写），' +
            '用结构体标签可以自定义：`Name string \`json:"name"\`` 让键变成小写 "name"。' +
            '\n\n' +
            'JSON 与结构体的映射规则：只有导出字段（首字母大写）会被编码。标签控制键名，' +
            '`json:"-"` 表示忽略该字段，`json:"name,omitempty"` 在值为零值时省略。' +
            '指针类型 nil 编码为 null。map 和切片直接对应 JSON 对象和数组。' +
            '\n\n' +
            '`json.NewEncoder(w).Encode(v)` 流式编码到 io.Writer，`json.NewDecoder(r).Decode(&v)` ' +
            '流式解码，适合处理 HTTP 请求/响应体或大文件。' +
            '\n\n' +
            'JSON 是现代 Web API 的通用数据格式。掌握 Go 的 JSON 编解码是构建 RESTful API、' +
            '对接第三方服务、处理配置文件的基础技能。',
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
            'Go 内置 `testing` 包，测试代码与生产代码同目录，测试文件以 `_test.go` 结尾。' +
            '测试函数签名为 `func TestXxx(t *testing.T)`，名称必须以 `Test` 开头，参数为 `*testing.T`。' +
            '用 `go test` 命令运行测试，Go 会自动发现并执行所有 Test 函数。' +
            '这种"语言级测试支持"让 Go 项目天然具备可测试性，无需第三方框架。' +
            '\n\n' +
            '`t.Errorf()` 报告失败但继续执行后续断言（适合收集多个错误）；' +
            '`t.Fatalf()` 报告失败并立即停止当前测试函数（适合前置条件失败时短路）。' +
            '`t.Log()` 输出调试信息（仅在 `-v` 模式显示）。' +
            '**表驱动测试**（table-driven test）是 Go 社区推崇的模式：把测试用例组织成切片，' +
            '用 `for range` 遍历执行，避免为每个用例写重复的测试函数。' +
            '\n\n' +
            '基准测试函数签名为 `func BenchmarkXxx(b *testing.B)`，循环 `b.N` 次测量性能。' +
            '`b.N` 由 testing 框架自动调整——先跑 1 次，再跑 100、10000……直到获得稳定数据。' +
            '`b.ResetTimer()` 重置计时器（排除初始化开销），`b.ReportAllocs()` 报告内存分配次数。' +
            '用 `go test -bench=.` 运行基准测试。在在线编译器中无法运行 `go test`，' +
            '但我们可以用 `func main` 模拟测试模式，学习断言与表驱动的写法。' +
            '\n\n' +
            '好的测试遵循 AAA 模式：Arrange（准备）、Act（执行）、Assert（断言）。' +
            '测试名应描述被测行为，如 `TestAdd_PositiveNumbers`。' +
            '一个测试函数只测一个行为，失败信息要清晰——`t.Errorf("got %d, want %d", got, want)"` ' +
            '让失败原因一目了然。测试覆盖率用 `go test -cover` 查看。',
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