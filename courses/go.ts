import type { CourseContent } from './types'

/**
 * Go 入门课程（3 章）
 *
 * Go 代码通过 RemoteRunner 发送到 go-runner 后端服务编译执行。
 * fmt.Println 输出被捕获为 stdout。expected_output 与输出文本对应。
 * 每段代码必须是完整可编译的 Go 程序（含 package main 和 func main）。
 */
export const goCourse: CourseContent = {
  id: 'course-go',
  slug: 'go',
  title: 'Go 入门',
  description: '学习 Go 语言基础：程序结构、变量控制流、函数与基本数据结构，开启后端编程之旅。',
  language: 'go',
  difficulty: 'beginner',
  chapters: [
    {
      id: 'go-ch1',
      title: 'Hello World 与基本结构',
      order: 0,
      lessons: [
        {
          id: 'go-ch1-l1',
          title: '第一个 Go 程序',
          order: 0,
          content_md:
            '每个 Go 程序都从 `package main` 开始，`func main()` 是入口函数。' +
            '`import "fmt"` 导入格式化输出包，' +
            '`fmt.Println()` 打印一行并换行。',
          example_code:
            'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, Go!")\n}',
          exercise: {
            prompt: '编写 Go 程序，用 fmt.Println 输出 "我爱 Go"。',
            starter_code:
              'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println(___)\n}',
            expected_output: '我爱 Go',
          },
        },
        {
          id: 'go-ch1-l2',
          title: '包与导入',
          order: 1,
          content_md:
            '`package main` 声明可执行程序包。`import` 导入标准库，' +
            '可用圆括号批量导入。`fmt` 用于格式化 I/O，' +
            '`strings` 提供字符串操作函数。',
          example_code:
            'package main\n\nimport (\n    "fmt"\n    "strings"\n)\n\nfunc main() {\n    s := strings.ToUpper("hello")\n    fmt.Println(s)\n}',
          exercise: {
            prompt: '导入 strings 包，用 strings.Repeat("Go", 3) 输出重复 3 次的字符串。',
            starter_code:
              'package main\n\nimport (\n    "fmt"\n    "strings"\n)\n\nfunc main() {\n    fmt.Println(strings.___("Go", 3))\n}',
            expected_output: 'GoGoGo',
          },
        },
      ],
    },
    {
      id: 'go-ch2',
      title: '变量与控制流',
      order: 1,
      lessons: [
        {
          id: 'go-ch2-l1',
          title: '变量与常量',
          order: 0,
          content_md:
            '`var name type` 声明变量，`name := value` 短变量声明（自动推断类型）。' +
            '`const` 声明常量。Go 是静态类型语言，' +
            '变量类型在编译时确定。',
          example_code:
            'package main\n\nimport "fmt"\n\nfunc main() {\n    var name string = "小明"\n    age := 20\n    const pi = 3.14\n    fmt.Println(name, age, pi)\n}',
          exercise: {
            prompt: '用短变量声明 age 为 25，用 fmt.Println 输出它。',
            starter_code:
              'package main\n\nimport "fmt"\n\nfunc main() {\n    age := ___\n    fmt.Println(age)\n}',
            expected_output: '25',
          },
        },
        {
          id: 'go-ch2-l2',
          title: 'if 与 for',
          order: 1,
          content_md:
            'Go 的 `if` 不需要圆括号，`if 条件 { }`。' +
            '`for` 是唯一的循环关键字：`for i := 0; i < n; i++ { }`。' +
            'Go 没有 while，用 `for 条件 { }` 代替。',
          example_code:
            'package main\n\nimport "fmt"\n\nfunc main() {\n    sum := 0\n    for i := 1; i <= 5; i++ {\n        sum += i\n    }\n    fmt.Println(sum)\n}',
          exercise: {
            prompt: '用 for 循环计算 1 到 10 的和，输出结果。',
            starter_code:
              'package main\n\nimport "fmt"\n\nfunc main() {\n    sum := 0\n    for i := 1; i <= ___; i++ {\n        sum += i\n    }\n    fmt.Println(sum)\n}',
            expected_output: '55',
          },
        },
      ],
    },
    {
      id: 'go-ch3',
      title: '函数与基本数据结构',
      order: 2,
      lessons: [
        {
          id: 'go-ch3-l1',
          title: '函数定义',
          order: 0,
          content_md:
            '`func 函数名(参数 类型) 返回类型 { }` 定义函数。' +
            'Go 支持多返回值，常用 `(结果, error)` 模式。' +
            '函数是一等公民，可作为参数传递。',
          example_code:
            'package main\n\nimport "fmt"\n\nfunc add(a int, b int) int {\n    return a + b\n}\n\nfunc main() {\n    fmt.Println(add(3, 4))\n}',
          exercise: {
            prompt: '定义函数 double(n int) int，返回 n * 2。在 main 中调用 double(21) 并输出。',
            starter_code:
              'package main\n\nimport "fmt"\n\nfunc double(n int) int {\n    return ___\n}\n\nfunc main() {\n    fmt.Println(double(21))\n}',
            expected_output: '42',
          },
        },
        {
          id: 'go-ch3-l2',
          title: '数组与切片',
          order: 1,
          content_md:
            '数组 `[N]类型` 固定长度，切片 `[]类型` 动态长度（更常用）。' +
            '`make([]type, n)` 创建切片，`append` 追加元素，' +
            '`len` 获取长度，`range` 遍历。',
          example_code:
            'package main\n\nimport "fmt"\n\nfunc main() {\n    nums := []int{1, 2, 3}\n    nums = append(nums, 4)\n    total := 0\n    for _, n := range nums {\n        total += n\n    }\n    fmt.Println(total)\n}',
          exercise: {
            prompt: '创建切片 nums := []int{10, 20, 30}，用 range 遍历求和，输出结果。',
            starter_code:
              'package main\n\nimport "fmt"\n\nfunc main() {\n    nums := []int{10, 20, 30}\n    total := 0\n    for _, n := range nums {\n        total += ___\n    }\n    fmt.Println(total)\n}',
            expected_output: '60',
          },
        },
      ],
    },
  ],
}
