import type { CourseContent } from './types'

/**
 * TypeScript 进阶课程（8 章 32 节）
 *
 * TS 代码通过 TsWasmRunner 转译为 JS 后在 iframe 中执行，
 * 或通过 OnlineCompiler（typescript-deno）运行。
 * 类型错误不阻断运行（仅 Monaco 编辑器侧提示），console.log 输出被捕获为 stdout。
 * expected_output 与 console.log 输出文本对应（不含末尾换行）。
 * 模块与装饰器相关课程因在线环境为单文件，多文件/装饰器语法以注释展示，单文件等效演示。
 */
export const typescriptCourse: CourseContent = {
  id: 'course-typescript',
  slug: 'typescript',
  title: 'TypeScript 进阶',
  description: '从类型注解到泛型、工具类型与类型体操，系统学习 TypeScript 类型系统与工程实践。',
  language: 'typescript',
  difficulty: 'intermediate',
  chapters: [
    // ================================================================
    // 第 1 章：TypeScript 基础
    // ================================================================
    {
      id: 'ts-ch1',
      title: 'TypeScript 基础',
      order: 0,
      lessons: [
        {
          id: 'ts-ch1-l1',
          title: '基本类型注解',
          order: 0,
          content_md:
            'TypeScript 在 JavaScript 之上添加静态类型系统，变量、参数和返回值用 `: 类型` 进行标注。' +
            '基本类型包括 `string`、`number`、`boolean`，数组用 `number[]` 或 `Array<number>` 表示。' +
            '类型注解在编译后会被完全擦除，不增加任何运行时开销。' +
          '\n\n' +
            'TS 强大的类型推断让大多数时候无需手写类型——变量根据初值自动推断，但函数参数必须显式标注（编译器无法猜测你的意图）。' +
            '返回值类型通常可推断，但显式标注能在函数实现与调用签名偏离时及时报错，推荐在公共 API 上标注返回类型。' +
            '元组（tuple）`[string, number]` 表示固定长度和位置的数组，适合描述成对的数据。' +
          '\n\n' +
            '类型注解的核心价值是在编写阶段就发现错误：把字符串当数字相加、传错参数类型、访问不存在的属性，' +
            '这些在 JS 中要运行时才暴露的问题，TS 会在编辑器里立即标红。掌握基本类型注解是学习 TS 的第一步。',
          examples: [
            {
              title: '基本类型标注',
              code: `let username: string = "小明"
let age: number = 25
let isActive: boolean = true
console.log(username, age, isActive)`,
              explanation:
                '变量名后用 `: 类型` 标注。`console.log` 多参数以空格分隔输出，结果为 "小明 25 true"。' +
                '类型一旦标注就不能赋值为其他类型，例如 age = "abc" 会报错。',
            },
            {
              title: '函数参数与返回值类型',
              code: `function add(a: number, b: number): number {
  return a + b
}
console.log(add(3, 4))`,
              explanation:
                '参数 `a: number`、返回值 `: number` 标注在参数列表之后。' +
                '调用 add("3", 4) 会编译报错，把字符串和数字相加的隐患被消灭在编译期。',
            },
            {
              title: '类型推断与数组',
              code: `const count = 10          // 推断为 number
const names: string[] = ["张三", "李四"]
const pair: [string, number] = ["id", 1]   // 元组
console.log(count)
console.log(names.length)
console.log(pair[1])`,
              explanation:
                'count 不写类型也能推断为 number。names 是字符串数组。pair 是元组，第一个元素必须是 string，第二个必须是 number。' +
                '输出：10、2、1。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写一个函数 double，接收参数 n（类型为 number），返回 n * 2。调用 double(21) 并输出结果。',
              starter_code: `function double(n: ___): number {
  return n * 2
}
console.log(double(21))`,
              expected_output: '42',
              hints: [
                '参数 n 是数字类型',
                '数字类型的注解就是 number',
                '答案: number',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明数组 scores 类型为 number[]，赋值为 [90, 85, 78]，输出数组长度。',
              starter_code: `const scores: ___ = [90, 85, 78]
console.log(scores.length)`,
              expected_output: '3',
              hints: [
                '数字数组类型写成元素类型加方括号',
                '写法是 number[]',
                '答案: number[]',
              ],
            },
          ],
          realWorldScenario:
            '在重构遗留 JavaScript 项目时，逐步给函数参数和返回值添加类型注解是引入 TypeScript 的第一步——能在不改运行逻辑的前提下立刻发现参数传错的 bug。配合编辑器红波浪线，重构时的回归错误大幅减少。',
        },
        {
          id: 'ts-ch1-l2',
          title: '接口 interface',
          order: 1,
          content_md:
            '`interface` 定义对象的形状契约，列出属性名与类型。传入对象必须满足该结构，多余或缺失属性都会报错。' +
            '可选属性用 `?` 标记，只读属性用 `readonly` 修饰。' +
            'interface 描述的是"形状"而非"实例"，TS 的结构类型系统意味着只要形状匹配就算兼容，无需显式 implements。' +
          '\n\n' +
            '接口可以描述函数形状：`(a: number, b: number) => number` 写在 interface 内部表示可调用。' +
            '接口支持继承 `interface B extends A`，把多个接口组合成更丰富的形状。' +
            '类可以用 `implements` 声明实现某接口，保证类提供了接口要求的全部成员。' +
          '\n\n' +
            '接口还支持声明合并——同名 interface 会自动合并成员，这在扩展第三方类型时很有用。' +
            '在 React 中，组件 props 几乎都用 interface 描述，让组件 API 拥有自动补全和类型检查。',
          examples: [
            {
              title: '基本接口与可选属性',
              code: `interface User {
  name: string
  age: number
  email?: string        // 可选属性
}
function showUser(u: User): string {
  return u.name + ", " + u.age + "岁"
}
console.log(showUser({ name: "小明", age: 20 }))`,
              explanation:
                'email 带 `?` 表示可选，传不带 email 的对象也合法。函数返回拼接的字符串。' +
                '如果传入 { name: "小明" }（缺 age）会报错，因为 age 是必填。',
            },
            {
              title: '只读属性',
              code: `interface Point {
  readonly x: number
  readonly y: number
}
const p: Point = { x: 1, y: 2 }
// p.x = 5  // 报错：只读属性不能修改
console.log(p.x + p.y)`,
              explanation:
                '`readonly` 修饰的属性只能在对象创建时赋值，之后修改会编译报错。' +
                '这适合配置、坐标等一旦创建就不应改变的数据。输出 3。',
            },
            {
              title: '接口描述函数形状',
              code: `interface Comparator {
  (a: number, b: number): number
}
const cmp: Comparator = (a, b) => a - b
console.log(cmp(5, 3))`,
              explanation:
                'interface 内写 `(参数): 返回类型` 描述可调用对象的签名。' +
                '赋值箭头函数时 TS 会检查签名是否匹配，参数类型可省略（由接口推断）。输出 2。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义接口 Point，含 x 和 y 两个 number 属性。写函数 sum 返回 x + y。' +
                '调用 sum({ x: 3, y: 5 }) 输出结果。',
              starter_code: `interface Point {
  x: number
  y: number
}
function sum(p: ___): number {
  return p.x + p.y
}
console.log(sum({ x: 3, y: 5 }))`,
              expected_output: '8',
              hints: [
                '参数 p 应该是 Point 接口类型',
                '直接写接口名作为类型',
                '答案: Point',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义接口 User 含 name: string 和可选 age?: number。函数 getName 返回 name。' +
                '调用 getName({ name: "张三" }) 输出结果。',
              starter_code: `interface User {
  name: string
  age?: number
}
function getName(u: User): string {
  return u.___
}
console.log(getName({ name: "张三" }))`,
              expected_output: '张三',
              hints: [
                '函数要返回 u 的 name 属性',
                '用点语法访问属性',
                '答案: name',
              ],
            },
          ],
          realWorldScenario:
            'React 组件的 props 类型几乎都用 interface 描述——例如 interface ButtonProps { label: string; onClick: () => void; disabled?: boolean }，让组件 API 在编辑器里有自动补全和类型检查，拼错 prop 名或传错类型立刻报错。',
        },
        {
          id: 'ts-ch1-l3',
          title: '类型别名 type',
          order: 2,
          content_md:
            '`type` 创建类型别名，可以给任何类型起名字——基本类型、联合类型、对象类型、函数类型、元组都能命名。' +
            '与 interface 一样能描述对象形状，多数对象场景两者可互换。' +
            '但 type 还能表达联合、交叉、条件等复杂类型，而 interface 只能描述对象和函数形状。' +
          '\n\n' +
            'interface 支持声明合并（同名 interface 自动合并成员），type 不行——同名 type 重复定义会报错。' +
            '选择经验：描述对象或类的公开形状优先用 interface（可被 implements/extends，可合并扩展），' +
            '需要联合、工具类型、元组等复杂组合时用 type。' +
          '\n\n' +
            'type 配合联合类型能表达"取值之一"，配合交叉类型能"合并要求"，是构建领域模型和工具类型的基石。' +
            '实际项目中 type 与 interface 经常混用，理解差异才能选对工具。',
          examples: [
            {
              title: '基本别名与联合',
              code: `type ID = string | number
type Score = number
function getId(id: ID): ID {
  return id
}
console.log(getId(100))
console.log(getId("abc"))`,
              explanation:
                'ID 是 string 或 number 的联合别名，Score 是 number 的别名。' +
                '函数接收和返回 ID，传数字或字符串都合法。输出 100 和 abc。',
            },
            {
              title: '对象类型别名',
              code: `type Point = { x: number; y: number }
function distance(p: Point): number {
  return Math.sqrt(p.x * p.x + p.y * p.y)
}
console.log(distance({ x: 3, y: 4 }))`,
              explanation:
                'type 描述对象形状，写法与 interface 等效。多个属性用分号或换行分隔。' +
                'distance 计算 (3,4) 到原点的距离，输出 5。',
            },
            {
              title: '函数类型别名',
              code: `type Handler = (msg: string) => void
const log: Handler = (msg) => console.log(msg)
log("类型别名描述函数")`,
              explanation:
                'type 把函数签名 `(参数) => 返回类型` 命名。赋值箭头函数时参数类型可省略。' +
                'void 表示函数无返回值。输出 "类型别名描述函数"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义类型别名 ID = string | number。写函数 echo 接收 id: ID 返回 id。调用 echo(42) 输出结果。',
              starter_code: `type ID = string | number
function echo(id: ___): ID {
  return id
}
console.log(echo(42))`,
              expected_output: '42',
              hints: [
                '参数类型就是别名 ID',
                '直接使用 ID 作为类型',
                '答案: ID',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 type 定义 Point = { x: number; y: number }。写函数 mul 返回 x * y。' +
                '调用 mul({ x: 3, y: 4 }) 输出结果。',
              starter_code: `type Point = { x: number; y: number }
function mul(p: Point): number {
  return p.x * p.___
}
console.log(mul({ x: 3, y: 4 }))`,
              expected_output: '12',
              hints: [
                '返回 x 乘以 y',
                '访问 p 的 y 属性',
                '答案: y',
              ],
            },
          ],
          realWorldScenario:
            '在 API 层用 type 给后端返回的复杂 JSON 结构起名（如 type UserDTO = { id: string; profile: { name: string; age: number } }），让前后端契约一目了然，重构时类型变更能瞬间定位所有受影响的代码。',
        },
        {
          id: 'ts-ch1-l4',
          title: '字面量类型与联合类型',
          order: 3,
          content_md:
            '字面量类型把值本身当作类型，如 `"asc" | "desc"`、`1 | 2 | 3`，精确限制变量只能取特定值。' +
            '联合类型 `A | B` 表示值可以是 A 或 B，配合字面量类型能表达枚举式取值，比 enum 更轻量。' +
            '当联合的成员是对象时，通常加一个公共字面量字段（标签）便于类型守卫区分，这是可辨识联合的基础。' +
          '\n\n' +
            '字面量类型常用于配置项、状态机的状态、API 方法名等有限取值场景。' +
            '与 string 相比，`"GET" | "POST"` 限制了可选值，拼错会编译报错，编辑器还能自动提示可选值。' +
            '联合类型让一个变量在不同分支表现不同类型，配合类型守卫可以安全处理。' +
          '\n\n' +
            '注意：联合类型只能访问所有成员共有的属性。例如 `string | number` 上调用 `.length` 会报错，' +
            '因为 number 没有 length。需要先用类型守卫收窄到具体成员后才能访问其特有属性。',
          examples: [
            {
              title: '字符串字面量联合',
              code: `type Direction = "left" | "right" | "up" | "down"
function move(d: Direction): string {
  return "向" + d + "移动"
}
console.log(move("left"))`,
              explanation:
                'Direction 只接受四个字面量之一。move("left") 合法，move("leftt") 拼错会报错。' +
                '编辑器会提示可选值。输出 "向left移动"。',
            },
            {
              title: '数字字面量联合',
              code: `type Dice = 1 | 2 | 3 | 4 | 5 | 6
function roll(d: Dice): number {
  return d
}
console.log(roll(3))`,
              explanation:
                'Dice 限制为 1 到 6 的数字。传 0 或 7 会报错。这种"有限取值"类型在游戏、配置中很常见。输出 3。',
            },
            {
              title: '字面量联合用于状态',
              code: `type Status = "pending" | "success" | "error"
function label(s: Status): string {
  if (s === "pending") return "处理中"
  if (s === "success") return "成功"
  return "失败"
}
console.log(label("success"))`,
              explanation:
                'Status 表示三种请求状态。函数根据具体字面量返回中文标签。' +
                '相比用 string，类型系统保证不会传入 "succes" 这样的拼写错误。输出 "成功"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 type Color = "red" | "green" | "blue"。写函数 color 接收 Color，' +
                '"red" 返回 "红"，其他返回 "其他"。调用 color("red") 输出结果。',
              starter_code: `type Color = "red" | "green" | "blue"
function color(c: Color): string {
  if (c === "red") return "红"
  return ___
}
console.log(color("red"))`,
              expected_output: '红',
              hints: [
                'c 为 "red" 时已返回 "红"',
                '其他情况返回字符串字面量',
                '答案: "其他"',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 type OnOff = "on" | "off"。写函数 toggle 接收 OnOff，' +
                '"on" 返回 "开启"，"off" 返回 "关闭"。调用 toggle("on") 输出结果。',
              starter_code: `type OnOff = "on" | "off"
function toggle(s: OnOff): string {
  if (s === "on") return "开启"
  return ___
}
console.log(toggle("on"))`,
              expected_output: '开启',
              hints: [
                's 为 "on" 时返回 "开启"',
                'else 分支返回关闭状态的文案',
                '答案: "关闭"',
              ],
            },
          ],
          realWorldScenario:
            '表单组件的 size 属性用字面量联合 type Size = "small" | "medium" | "large" 限制取值，编辑器会自动提示可选值，拼错立刻报错——比用 string 安全得多。HTTP 方法 type Method = "GET" | "POST" | "PUT" | "DELETE" 也是经典用法。',
        },
      ],
    },
    // ================================================================
    // 第 2 章：函数类型
    // ================================================================
    {
      id: 'ts-ch2',
      title: '函数类型',
      order: 1,
      lessons: [
        {
          id: 'ts-ch2-l1',
          title: '函数类型注解',
          order: 0,
          content_md:
            '函数类型注解包括参数类型和返回值类型：`function f(a: number): string`。' +
            '返回值类型用 `: 类型` 标在参数列表之后。完整的函数类型用 `(参数: 类型) => 返回类型` 描述。' +
            '`void` 表示函数没有返回值（或返回值被忽略），常用于回调、日志、事件处理函数。' +
          '\n\n' +
            '函数作为参数（高阶函数）是函数式编程的核心。把回调的类型注解写清楚，能让 map、filter 等操作的类型自动推断。' +
            '例如 `arr.map((n: number) => n * 2)` 返回 number[]，无需手动标注返回数组类型。' +
            '箭头函数与 function 声明在类型上等价，都遵循相同的签名规则。' +
          '\n\n' +
            '返回值类型多数情况可推断，但在递归函数、复杂分支、公共 API 中显式标注更有价值——' +
            '它能在函数实现意外返回错误类型时立即报警，相当于一份可执行的契约。',
          examples: [
            {
              title: '参数与返回值类型',
              code: `function greet(name: string): string {
  return "你好, " + name
}
console.log(greet("TypeScript"))`,
              explanation:
                'name 是 string，返回 string。若 return 42 会报错。输出 "你好, TypeScript"。' +
                '显式标注返回类型让函数签名清晰，调用方无需看实现就知道返回什么。',
            },
            {
              title: 'void 返回类型',
              code: `function log(msg: string): void {
  console.log(msg)
}
log("无返回值函数")`,
              explanation:
                'void 表示函数不返回有意义的值。在 void 函数里 return 一个值会报错。' +
                '回调函数（如 forEach 的参数）通常是 void 返回。输出 "无返回值函数"。',
            },
            {
              title: '函数作为参数（回调类型）',
              code: `function apply(arr: number[], fn: (n: number) => number): number[] {
  return arr.map(fn)
}
console.log(apply([1, 2, 3], n => n * 2))`,
              explanation:
                '第二个参数 fn 是"接收 number 返回 number"的函数类型。传入 n => n * 2 后，' +
                'TS 知道 n 是 number，返回 number[]。输出 [ 2, 4, 6 ]。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写函数 square(n: number): number 返回 n * n。调用 square(6) 输出结果。',
              starter_code: `function square(n: number): number {
  return n ___ n
}
console.log(square(6))`,
              expected_output: '36',
              hints: [
                '平方是 n 乘以 n',
                '用乘法运算符 *',
                '答案: *',
              ],
            },
            {
              type: 'output-match',
              prompt: '写函数 sum(arr: number[], fn: (n: number) => number): number，对每个元素调用 fn 后求和。' +
                '调用 sum([1, 2, 3], n => n * 2) 输出结果（2 + 4 + 6）。',
              starter_code: `function sum(arr: number[], fn: (n: number) => number): number {
  return arr.reduce((a, n) => a + fn(___), 0)
}
console.log(sum([1, 2, 3], n => n * 2))`,
              expected_output: '12',
              hints: [
                'reduce 的回调要对每个元素 n 调用 fn',
                '把 n 传给 fn',
                '答案: n',
              ],
            },
          ],
          realWorldScenario:
            '数组的 map/filter/reduce 都接受类型化的回调，例如 users.map((u: User) => u.name)——TS 能保证回调参数类型正确，并推断出返回数组类型，避免运行时 undefined 错误。这是类型安全 API 客户端的基础。',
        },
        {
          id: 'ts-ch2-l2',
          title: '可选与默认参数',
          order: 1,
          content_md:
            '可选参数用 `?` 标记，必须放在必填参数之后。调用时可省略，函数内得到 undefined。' +
            '默认参数用 `= 默认值`，调用时不传则用默认值。默认参数本身可选，无需再加 `?`。' +
            '默认参数的类型由默认值推断，也可显式标注。' +
          '\n\n' +
            '可选参数和默认参数让函数 API 更灵活，同时保持类型安全。' +
            '两者的区别：可选参数在函数内是 `类型 | undefined`，必须处理 undefined 情况；' +
            '默认参数在函数内始终是具体类型（因为缺失时已有默认值），用起来更方便。' +
            '优先用默认参数，除非你需要区分"未传"和"传了 undefined"。' +
          '\n\n' +
            '在实际 API 设计中，默认参数让常用调用简洁，例如 `request(url, method = "GET")`，' +
            '绝大多数 GET 请求只需传 url，少数需要其他方法时再覆盖默认值。',
          examples: [
            {
              title: '可选参数',
              code: `function greet(name: string, greeting?: string): string {
  return (greeting || "你好") + ", " + name
}
console.log(greet("小明"))
console.log(greet("小红", "嗨"))`,
              explanation:
                'greeting 可选，未传时为 undefined，用 || 提供默认值。' +
                '注意可选参数必须在必填参数之后。输出 "你好, 小明" 和 "嗨, 小红"。',
            },
            {
              title: '默认参数',
              code: `function pow(base: number, exp: number = 2): number {
  return Math.pow(base, exp)
}
console.log(pow(3))
console.log(pow(2, 3))`,
              explanation:
                'exp 默认为 2，省略时算平方。函数内 exp 始终是 number（不会是 undefined）。' +
                '输出 9 和 8。',
            },
            {
              title: '默认参数与类型推断',
              code: `function createUser(name: string, role: string = "user"): string {
  return name + " (" + role + ")"
}
console.log(createUser("张三"))
console.log(createUser("李四", "admin"))`,
              explanation:
                'role 默认 "user"，类型推断为 string。大多数用户用默认角色，管理员覆盖为 "admin"。' +
                '输出 "张三 (user)" 和 "李四 (admin)"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写函数 say(name: string, word?: string)，word 缺省时用 "你好"。返回 word + ", " + name。' +
                '调用 say("小明") 输出结果。',
              starter_code: `function say(name: string, word?: string): string {
  return (word || ___) + ", " + name
}
console.log(say("小明"))`,
              expected_output: '你好,小明',
              hints: [
                'word 缺省时用默认问候语',
                '默认问候语是 "你好"',
                '答案: "你好"',
              ],
            },
            {
              type: 'output-match',
              prompt: '写函数 repeat(s: string, n: number = 2) 返回 s 重复 n 次。调用 repeat("ab") 输出结果。',
              starter_code: `function repeat(s: string, n: number = 2): string {
  return s.___(n)
}
console.log(repeat("ab"))`,
              expected_output: 'abab',
              hints: [
                '字符串有重复方法',
                '方法是 repeat',
                '答案: repeat',
              ],
            },
          ],
          realWorldScenario:
            'API 请求函数 request(url, method = "GET", data?) 用默认方法和可选请求体，调用方只需传 url 即可发最简单的 GET，需要时再覆盖默认值——既灵活又有类型约束，避免每个调用点都写满参数。',
        },
        {
          id: 'ts-ch2-l3',
          title: 'rest 参数',
          order: 2,
          content_md:
            'rest 参数用 `...参数: 类型[]` 收集剩余实参为数组，必须放在参数列表最后。' +
            'rest 参数类型是数组，函数内可对它做数组操作（map、reduce、length）。' +
            '配合联合类型可收集多种类型：`...values: (string | number)[]`。' +
          '\n\n' +
            'rest 参数让函数支持可变参数，如求和、最大值、格式化等。' +
            '它比"传入一个数组"更符合直觉调用——sum(1, 2, 3) 比 sum([1, 2, 3]) 更自然。' +
            'rest 参数本质上把多个实参打包成数组，与展开运算符 `...`（把数组拆成多个参数）是一对逆操作。' +
          '\n\n' +
            'rest 参数之后不能再有必填参数，但可以有默认值参数。' +
            '在工具函数和日志库中，rest 参数几乎是标配——它让函数既能处理 1 个参数也能处理 100 个参数，API 统一简洁。',
          examples: [
            {
              title: '数字求和',
              code: `function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0)
}
console.log(sum(1, 2, 3, 4))`,
              explanation:
                'nums 收集所有实参为 number[]。reduce 求和。调用可传任意多个数字。输出 10。',
            },
            {
              title: '字符串拼接',
              code: `function join(sep: string, ...parts: string[]): string {
  return parts.join(sep)
}
console.log(join("-", "2024", "01", "01"))`,
              explanation:
                'sep 是普通参数，parts 收集剩余字符串。join 用 sep 连接。输出 "2024-01-01"。' +
                '常用于构建路径、日期、ID 等。',
            },
            {
              title: '联合类型 rest',
              code: `function collect(...items: (string | number)[]): string {
  return items.map(String).join(",")
}
console.log(collect("a", 1, "b", 2))`,
              explanation:
                'items 是 string 或 number 的数组。map(String) 把每个元素转字符串。' +
                '输出 "a,1,b,2"。适合异构数据的收集与格式化。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写函数 max(...nums: number[]) 返回最大值。调用 max(3, 7, 2, 9, 1) 输出结果。',
              starter_code: `function max(...nums: number[]): number {
  return Math.max(...nums)
}
console.log(max(3, 7, 2, 9, ___))`,
              expected_output: '9',
              hints: [
                '观察传入的数字序列',
                '最后一个数字是 1',
                '答案: 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '写函数 concat(...strs: string[]) 返回所有字符串拼接结果。' +
                '调用 concat("I", "love", "TS") 输出结果。',
              starter_code: `function concat(...strs: string[]): string {
  return strs.___("")
}
console.log(concat("I", "love", "TS"))`,
              expected_output: 'IloveTS',
              hints: [
                '把字符串数组拼接成一个字符串',
                '用 join 方法，分隔符为空字符串',
                '答案: join',
              ],
            },
          ],
          realWorldScenario:
            '日志库的 log(level, ...messages) 用 rest 收集任意条日志内容，再统一格式化输出——既保留调用方传任意参数的便利，又通过类型约束保证每条都是字符串/数字。printf 风格的格式化函数也依赖 rest。',
        },
        {
          id: 'ts-ch2-l4',
          title: '函数重载',
          order: 3,
          content_md:
            '函数重载为同一个函数提供多个类型签名，让 TS 根据入参类型选择正确的返回类型。' +
            '重载由若干"重载签名"加一个"实现签名"组成。实现签名对外不可见，需兼容所有重载。' +
            '重载签名不能有函数体，只有实现签名才有。' +
          '\n\n' +
            '重载常用于参数形态差异大的工具函数，例如 `parse(input: string)` 返回对象、`parse(input: string[])` 返回数组。' +
            '没有重载的话，TS 只能用联合类型表示，调用方拿到 `对象 | 数组` 后还得自己做类型收窄，体验差。' +
            '重载让每个调用形态都有精确的类型。' +
          '\n\n' +
            '实现签名要用最宽泛的类型（如联合）兼容所有重载，内部通过 typeof/instanceof 区分分支。' +
            '注意重载顺序：更具体的签名应放前面，因为 TS 按顺序匹配。',
          examples: [
            {
              title: '字符串或数组反转',
              code: `function reverse(input: string): string
function reverse(input: number[]): number[]
function reverse(input: string | number[]): string | number[] {
  if (typeof input === "string") {
    return input.split("").reverse().join("")
  }
  return input.slice().reverse()
}
console.log(reverse("abc"))
console.log(reverse([1, 2, 3]))`,
              explanation:
                '两个重载签名让 reverse("abc") 返回 string，reverse([1,2,3]) 返回 number[]。' +
                '实现签名用联合类型，内部用 typeof 区分。输出 "cba" 和 [ 3, 2, 1 ]。',
            },
            {
              title: '根据参数类型取值',
              code: `function pick(obj: object, key: string): unknown
function pick(arr: object[], key: number): unknown
function pick(obj: object | object[], key: string | number): unknown {
  if (typeof key === "number") return (obj as object[])[key]
  return (obj as Record<string, unknown>)[key]
}
console.log(pick({ a: 1 }, "a"))`,
              explanation:
                '传对象和字符串键时按属性取值；传数组和数字索引时按下标取值。' +
                '两个重载分别描述两种用法，实现内用 typeof key 区分。输出 1。',
            },
            {
              title: '重载与字面量区分',
              code: `function format(v: string): string
function format(v: number): string
function format(v: string | number): string {
  return typeof v === "string" ? v.toUpperCase() : v.toFixed(2)
}
console.log(format("hi"))
console.log(format(3.14159))`,
              explanation:
                'string 输入返回大写字符串，number 输入返回保留两位小数的字符串。' +
                '重载让两种调用都有精确的返回类型 string。输出 "HI" 和 "3.14"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '重载函数 double：接收 number 返回 number（值翻倍），接收 string 返回 string（内容重复两次）。' +
                '调用 double("ab") 输出结果。',
              starter_code: `function double(v: number): number
function double(v: string): string
function double(v: number | string): number | string {
  if (typeof v === "string") return v + v
  return v * 2
}
console.log(double(___) as string)`,
              expected_output: 'abab',
              hints: [
                '要触发 string 重载，传字符串',
                '字符串字面量用双引号包裹',
                '答案: "ab"',
              ],
            },
            {
              type: 'output-match',
              prompt: '重载函数 first：接收 string 返回首字符 string，接收 number[] 返回首元素 number。' +
                '调用 first("hello") 输出结果。',
              starter_code: `function first(v: string): string
function first(v: number[]): number
function first(v: string | number[]): string | number {
  return v[0]
}
console.log(first(___) as string)`,
              expected_output: 'h',
              hints: [
                '要触发 string 重载，传字符串',
                '字符串 "hello" 的首字符是 h',
                '答案: "hello"',
              ],
            },
          ],
          realWorldScenario:
            '类型安全的 fetch 封装常重载 get<T>(url): Promise<T> 与 get(url): Promise<unknown>——传泛型时返回强类型数据，不传时返回 unknown 强制调用方断言，避免误用。这是构建类型安全 API 客户端的经典手法。',
        },
      ],
    },
    // ================================================================
    // 第 3 章：类
    // ================================================================
    {
      id: 'ts-ch3',
      title: '类',
      order: 2,
      lessons: [
        {
          id: 'ts-ch3-l1',
          title: '类的基础',
          order: 0,
          content_md:
            'TypeScript 的 class 在 ES6 类基础上增加类型注解：字段需声明类型，构造函数和方法的参数也需标注。' +
            '字段声明在类体内，如 `name: string`，可在构造函数中赋值，也可用 `= 默认值` 直接初始化。' +
            '`readonly` 修饰字段表示只读，只能在构造函数中赋值。' +
          '\n\n' +
            '类的实例类型就是类名本身，可作为参数和返回值类型。' +
            '静态成员（`static`）属于类本身而非实例，通过 `类名.成员` 访问，常用于工具方法和常量。' +
            'TS 的参数属性（constructor 参数加修饰符）能自动创建并赋值同名字段，大幅减少样板代码。' +
          '\n\n' +
            '类是面向对象编程的核心：把数据（字段）和操作（方法）绑定在一起，通过类型保证字段始终是正确类型。' +
            '领域模型、服务、控制器等都用类表达，配合继承和多态构建可扩展的架构。',
          examples: [
            {
              title: '基本类',
              code: `class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  greet(): string {
    return "你好, 我是" + this.name
  }
}
const p = new Person("小明", 20)
console.log(p.greet())`,
              explanation:
                '字段先声明类型，构造函数中赋值。方法 greet 返回字符串。' +
                'new Person(...) 创建实例。输出 "你好, 我是小明"。',
            },
            {
              title: '字段默认值与 readonly',
              code: `class Config {
  readonly version: string = "1.0"
  env: string
  constructor(env: string) {
    this.env = env
  }
}
const c = new Config("prod")
console.log(c.version, c.env)`,
              explanation:
                'version 有默认值且 readonly，创建后不可修改。env 在构造函数中赋值。' +
                '尝试 c.version = "2.0" 会报错。输出 "1.0 prod"。',
            },
            {
              title: '静态成员',
              code: `class MathUtil {
  static PI: number = 3.14
  static double(n: number): number {
    return n * 2
  }
}
console.log(MathUtil.PI)
console.log(MathUtil.double(5))`,
              explanation:
                'static 成员属于类，通过 MathUtil.PI 访问，无需实例化。' +
                '适合与实例无关的工具方法和常量。输出 3.14 和 10。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义类 Rectangle 有 width 和 height 字段，方法 area() 返回面积。' +
                '创建 new Rectangle(3, 4)，输出 area() 的结果。',
              starter_code: `class Rectangle {
  width: number
  height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
  area(): number {
    return this.width * this.___
  }
}
console.log(new Rectangle(3, 4).area())`,
              expected_output: '12',
              hints: [
                '面积是宽乘以高',
                '访问 height 字段',
                '答案: height',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义类 Counter 有 count 字段初值为 0，方法 inc() 让 count 加 1 并返回。' +
                '调用两次 inc() 后输出第二次返回值。',
              starter_code: `class Counter {
  count: number = 0
  inc(): number {
    this.count = this.count + ___
    return this.count
  }
}
const c = new Counter()
c.inc()
console.log(c.inc())`,
              expected_output: '1',
              hints: [
                '每次自增 1',
                '加上的数字是 1',
                '答案: 1',
              ],
            },
          ],
          realWorldScenario:
            '领域模型用类表达，如 class Order { readonly id; items: Item[]; total(): number }——把数据和操作绑定，类型保证 items 始终是 Item 数组，业务方法集中维护，比散落的函数和对象更易于演进。',
        },
        {
          id: 'ts-ch3-l2',
          title: '继承与多态',
          order: 1,
          content_md:
            '`class 子类 extends 父类` 实现继承，子类获得父类的字段和方法。' +
            '子类构造函数必须先调 `super()` 才能使用 this。子类可用 `super.方法()` 调用父类方法。' +
            '方法重写：子类定义同名方法覆盖父类，多态由此实现——同一调用，不同子类表现不同行为。' +
          '\n\n' +
            '多态的价值：把不同子类实例放进父类类型的数组，遍历调用同一方法时各自执行自己的实现。' +
            '这样新增子类无需修改调用方代码，符合开闭原则。' +
            'TS 检查重写的兼容性，子类方法签名需与父类兼容，否则报错。' +
          '\n\n' +
            '继承建立"是什么"的关系（猫是动物），慎用多层继承以免耦合过深。' +
            '优先组合而非继承是现代设计的趋势，但继承在表达"is-a"层级和复用模板代码时仍有价值。',
          examples: [
            {
              title: '基本继承与方法重写',
              code: `class Animal {
  constructor(public name: string) {}
  speak(): string {
    return this.name + " 发出声音"
  }
}
class Dog extends Animal {
  speak(): string {
    return this.name + " 汪汪叫"
  }
}
const d = new Dog("旺财")
console.log(d.speak())`,
              explanation:
                'Dog 继承 Animal 并重写 speak。constructor(public name) 是参数属性，自动创建字段。' +
                '调用 d.speak() 执行子类版本。输出 "旺财 汪汪叫"。',
            },
            {
              title: 'super 调用父类',
              code: `class Base {
  constructor(public id: number) {}
  info(): string {
    return "Base#" + this.id
  }
}
class Sub extends Base {
  constructor(id: number, public tag: string) {
    super(id)
  }
  info(): string {
    return super.info() + "-" + this.tag
  }
}
console.log(new Sub(1, "A").info())`,
              explanation:
                'Sub 构造函数先 super(id) 初始化父类字段，再用 this.tag。' +
                '重写的 info 调用 super.info() 复用父类逻辑再扩展。输出 "Base#1-A"。',
            },
            {
              title: '多态数组',
              code: `class Shape {
  area(): number { return 0 }
}
class Circle extends Shape {
  constructor(public r: number) { super() }
  area(): number { return Math.floor(Math.PI * this.r * this.r) }
}
class Square extends Shape {
  constructor(public s: number) { super() }
  area(): number { return this.s * this.s }
}
const shapes: Shape[] = [new Circle(2), new Square(3)]
console.log(shapes.map(s => s.area()))`,
              explanation:
                'Circle 和 Square 都重写 area。父类类型数组 Shape[] 装不同子类实例，' +
                '遍历调用 area 时多态生效，各自算自己的面积。输出 [ 12, 9 ]。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义类 Animal 有构造参数 name，方法 speak 返回 name + " 叫"。' +
                '子类 Cat 重写 speak 返回 name + " 喵喵叫"。创建 new Cat("咪")，输出 speak()。',
              starter_code: `class Animal {
  constructor(public name: string) {}
  speak(): string { return this.name + " 叫" }
}
class Cat extends Animal {
  speak(): string {
    return this.name + " 喵喵___"
  }
}
console.log(new Cat("咪").speak())`,
              expected_output: '咪 喵喵叫',
              hints: [
                '返回的字符串以"叫"结尾',
                '补全"叫"字',
                '答案: 叫',
              ],
            },
            {
              type: 'output-match',
              prompt: '父类 Vehicle 有 speed，方法 describe 返回 "速度" + speed。' +
                '子类 Car 重写 describe 返回 "汽车速度" + speed。创建 new Car(80)，输出 describe()。',
              starter_code: `class Vehicle {
  constructor(public speed: number) {}
  describe(): string { return "速度" + this.speed }
}
class Car extends Vehicle {
  describe(): string {
    return "汽车" + super.___()
  }
}
console.log(new Car(80).describe())`,
              expected_output: '汽车速度80',
              hints: [
                '复用父类 describe 返回 "速度80"',
                'super 调用 describe 方法',
                '答案: describe()',
              ],
            },
          ],
          realWorldScenario:
            'UI 组件库中 class BaseWidget 提供通用渲染逻辑，class Button extends BaseWidget、class Input extends BaseWidget 各自重写 render 方法——一个 BaseWidget[] 数组统一管理，遍历调用 render 时多态生效，新增组件类型无需改动管理代码。',
        },
        {
          id: 'ts-ch3-l3',
          title: '访问修饰符',
          order: 2,
          content_md:
            'TypeScript 提供三种访问修饰符：`public`（默认，公开）、`private`（仅类内）、`protected`（类内与子类）。' +
            '修饰符控制成员可见性，是封装的关键。私有字段防止外部直接修改内部状态，强制通过方法交互。' +
            '构造函数参数加修饰符（constructor(private x: number)）可自动创建并赋值同名字段，称为参数属性。' +
          '\n\n' +
            'TS 4+ 也支持 `#field` 真正的运行时私有字段（ES 标准），与 `private` 不同：private 仅编译期检查，' +
            '运行时仍可访问；#field 是运行时真正私有。新代码优先用 #field 实现强封装，private 用于与旧代码兼容。' +
            'protected 常用于"只给子类用的内部方法"。' +
          '\n\n' +
            '封装的核心收益：内部实现变化不影响外部调用方。例如把 balance 设为 private，' +
            '只暴露 deposit/withdraw 方法，外部就无法绕过校验直接改余额，业务不变量（如余额非负）得到保障。',
          examples: [
            {
              title: 'private 封装',
              code: `class BankAccount {
  private balance: number
  constructor(initial: number) {
    this.balance = initial
  }
  deposit(amount: number): void {
    this.balance += amount
  }
  getBalance(): number {
    return this.balance
  }
}
const acc = new BankAccount(100)
acc.deposit(50)
console.log(acc.getBalance())`,
              explanation:
                'balance 是 private，外部 acc.balance 直接访问会报错，只能通过 deposit/getBalance 操作。' +
                '这保证了余额修改受控。输出 150。',
            },
            {
              title: '参数属性简写',
              code: `class User {
  constructor(
    public name: string,
    private age: number
  ) {}
  info(): string {
    return this.name + "," + this.age
  }
}
console.log(new User("小明", 20).info())`,
              explanation:
                '构造函数参数加修饰符会自动创建同名字段，省去手动声明和赋值。' +
                'name 是 public（外部可访问），age 是 private。输出 "小明,20"。',
            },
            {
              title: 'protected 与子类',
              code: `class Logger {
  protected prefix(): string { return "[LOG]" }
  log(msg: string): void {
    console.log(this.prefix() + " " + msg)
  }
}
class VerboseLogger extends Logger {
  protected prefix(): string { return "[VERBOSE]" }
}
new VerboseLogger().log("hello")`,
              explanation:
                'prefix 是 protected，子类可重写而外部不可调用。VerboseLogger 重写 prefix 改前缀。' +
                'log 在父类定义，调用 this.prefix() 时多态生效。输出 "[VERBOSE] hello"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '类 Counter 有 private count 初值为 0，方法 inc() 让 count 加 1，方法 get() 返回 count。' +
                '创建实例后调用 inc() 两次，输出 get() 的结果。',
              starter_code: `class Counter {
  private count: number = 0
  inc(): void { this.count = this.count + 1 }
  get(): number { return this.___ }
}
const c = new Counter()
c.inc()
c.inc()
console.log(c.get())`,
              expected_output: '2',
              hints: [
                'get 返回私有字段 count',
                '直接返回 this.count',
                '答案: count',
              ],
            },
            {
              type: 'output-match',
              prompt: '用参数属性简写定义类 Product（public name: string, private price: number），' +
                '方法 info 返回 name + ":" + price。创建 new Product("书", 10)，输出 info()。',
              starter_code: `class Product {
  constructor(
    public name: string,
    private price: number
  ) {}
  info(): string {
    return this.name + ":" + this.___
  }
}
console.log(new Product("书", 10).info())`,
              expected_output: '书:10',
              hints: [
                '返回 name 加冒号加 price',
                '访问 price 字段',
                '答案: price',
              ],
            },
          ],
          realWorldScenario:
            '银行账户类把 balance 设为 private，只暴露 deposit/withdraw 方法校验金额——外部无法直接篡改余额，封装保证了业务不变量（余额不能为负等）。这是面向对象封装最经典的例子。',
        },
        {
          id: 'ts-ch3-l4',
          title: '抽象类与接口实现',
          order: 3,
          content_md:
            '`abstract class` 抽象类不能被实例化，只能被继承。抽象类可包含抽象方法（无实现，子类必须实现）和具体方法（有默认实现）。' +
            '抽象方法 `abstract 方法名(): 返回类型` 定义契约，类似接口但能携带实现。' +
            '`class X implements Interface` 表示类满足接口形状，必须提供接口所有成员。' +
          '\n\n' +
            '接口描述"能做什么"（能力），抽象类描述"是什么"并提供部分实现。' +
            '设计原则：多用接口做能力抽象（小而可组合），抽象类做共享实现（减少子类重复代码）。' +
            '一个类只能继承一个抽象类，但可实现多个接口——接口更灵活。' +
          '\n\n' +
            '接口与抽象类常组合使用：接口定义能力契约，抽象类提供基础实现，具体类继承抽象类并实现接口。' +
            '这是仓储模式、策略模式等设计模式的基础结构。',
          examples: [
            {
              title: '抽象类',
              code: `abstract class Animal {
  abstract speak(): string
  describe(): string {
    return "我是动物，会" + this.speak()
  }
}
class Cat extends Animal {
  speak(): string { return "喵" }
}
console.log(new Cat().describe())`,
              explanation:
                'Animal 不能 new，speak 是抽象方法由子类实现。describe 是具体方法，子类直接复用。' +
                'new Cat().describe() 调用父类 describe，内部 this.speak() 多态到 Cat。输出 "我是动物，会喵"。',
            },
            {
              title: '接口实现',
              code: `interface Comparable {
  compareTo(other: this): number
}
class NumberBox implements Comparable {
  constructor(public value: number) {}
  compareTo(other: NumberBox): number {
    return this.value - other.value
  }
}
console.log(new NumberBox(5).compareTo(new NumberBox(3)))`,
              explanation:
                'NumberBox 实现 Comparable 接口，必须提供 compareTo。`other: this` 表示参数是当前类型。' +
                '输出 2（5 - 3）。',
            },
            {
              title: '接口与抽象类组合',
              code: `interface Shape { area(): number }
abstract class AbstractShape implements Shape {
  abstract area(): number
  name(): string { return "形状" }
}
class Rect extends AbstractShape {
  constructor(public w: number, public h: number) { super() }
  area(): number { return this.w * this.h }
}
console.log(new Rect(2, 3).area())
console.log(new Rect(2, 3).name())`,
              explanation:
                'AbstractShape 实现 Shape 接口但把 area 留给子类，提供 name 默认实现。' +
                'Rect 继承 AbstractShape 并实现 area。输出 6 和 "形状"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '抽象类 Shape 有抽象方法 area()，子类 Circle 构造接收 r，area() 返回 Math.floor(3.14 * r * r)。' +
                '创建 new Circle(2)，输出 area()。',
              starter_code: `abstract class Shape {
  abstract area(): number
}
class Circle extends Shape {
  constructor(public r: number) { super() }
  area(): number {
    return Math.floor(3.14 * this.r * this.___)
  }
}
console.log(new Circle(2).area())`,
              expected_output: '12',
              hints: [
                '圆面积是 3.14 乘 r 乘 r',
                '访问 r 字段',
                '答案: r',
              ],
            },
            {
              type: 'output-match',
              prompt: '接口 Greetable 有 greet(): string，类 Person 实现它返回 "你好"。' +
                '创建 new Person()，输出 greet()。',
              starter_code: `interface Greetable {
  greet(): string
}
class Person implements Greetable {
  greet(): string {
    return ___
  }
}
console.log(new Person().greet())`,
              expected_output: '你好',
              hints: [
                'greet 返回字符串字面量',
                '返回 "你好"',
                '答案: "你好"',
              ],
            },
          ],
          realWorldScenario:
            '仓储模式（Repository Pattern）定义 interface Repository<T> { find(id): T; save(t): void }，再用 class UserRepo implements Repository<User> 实现——业务代码依赖接口，可随时切换内存实现/数据库实现/远程实现，类型保证一致性。这就是"building a generic repository pattern"。',
        },
      ],
    },
    // ================================================================
    // 第 4 章：泛型
    // ================================================================
    {
      id: 'ts-ch4',
      title: '泛型',
      order: 3,
      lessons: [
        {
          id: 'ts-ch4-l1',
          title: '泛型函数',
          order: 0,
          content_md:
            '泛型用 `<T>` 声明类型参数，让函数适配多种类型并保持类型关联。T 是类型占位符，调用时用具体类型替换（或由 TS 推断）。' +
            '泛型让"输入类型与输出类型相同"这类约束可表达，例如 first<T>(arr: T[]): T 返回的元素就是数组元素类型，而非 any。' +
            '泛型是 TS 类型系统最强大的特性之一。' +
          '\n\n' +
            '可定义多个类型参数 `<T, U>`，常见于键值对、映射函数。' +
            '泛型只在编译期存在，运行时被完全擦除——不能对 T 做 instanceof 检查，因为运行时 T 已不存在。' +
            '泛型的本质是"类型的参数化"，把类型当作参数传给函数，实现类型层面的复用。' +
          '\n\n' +
            '泛型与 any 的区别：any 放弃类型检查，泛型保留类型关联。' +
            'identity<T>(v: T): T 保证返回类型与入参类型相同，而 any 版本会丢失类型信息。' +
            '优先用泛型而非 any，是写出类型安全代码的关键。',
          examples: [
            {
              title: '泛型 identity',
              code: `function identity<T>(value: T): T {
  return value
}
console.log(identity(42))
console.log(identity("hi"))`,
              explanation:
                'T 由调用推断：identity(42) 的 T 是 number，identity("hi") 的 T 是 string。' +
                '返回类型与入参类型一致。输出 42 和 hi。',
            },
            {
              title: '泛型 first',
              code: `function first<T>(arr: T[]): T | undefined {
  return arr[0]
}
console.log(first([1, 2, 3]))
console.log(first(["a", "b"]))`,
              explanation:
                'T 推断为数组元素类型。first([1,2,3]) 返回 number | undefined，first(["a","b"]) 返回 string | undefined。' +
                '输出 1 和 a。',
            },
            {
              title: '多类型参数',
              code: `function pair<K, V>(k: K, v: V): [K, V] {
  return [k, v]
}
console.log(pair("age", 18))`,
              explanation:
                '两个类型参数 K 和 V，分别推断为 string 和 number。返回元组 [K, V]。' +
                '输出 [ "age", 18 ]。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写泛型函数 wrap<T>(v: T): T[] 返回 [v]。调用 wrap(7)，输出结果的长度。',
              starter_code: `function wrap<T>(v: T): T[] {
  return [___]
}
console.log(wrap(7).length)`,
              expected_output: '1',
              hints: [
                '返回包含 v 的单元素数组',
                '数组字面量写 [v]',
                '答案: v',
              ],
            },
            {
              type: 'output-match',
              prompt: '写泛型函数 last<T>(arr: T[]): T 返回最后一个元素。调用 last([1, 2, 3]) 输出结果。',
              starter_code: `function last<T>(arr: T[]): T {
  return arr[arr.___ - 1]
}
console.log(last([1, 2, 3]))`,
              expected_output: '3',
              hints: [
                '最后一个元素的索引是 length - 1',
                '访问 arr.length',
                '答案: length',
              ],
            },
          ],
          realWorldScenario:
            '工具函数 fetchJSON<T>(url): Promise<T> 用泛型让调用方指定返回数据类型，fetchJSON<User[]>("/users") 返回强类型用户数组，避免每次手动断言。这是构建类型安全 API 客户端的核心技巧。',
        },
        {
          id: 'ts-ch4-l2',
          title: '泛型接口与类',
          order: 1,
          content_md:
            '接口和类都能带类型参数。`interface Box<T> { value: T }`、`class Stack<T> { ... }` 让数据结构适配任意类型。' +
            '泛型类在整个类体内可用 T，字段、方法、构造函数都引用同一类型参数。' +
            '实例化泛型类时传入具体类型 new Stack<number>()，也可省略让 TS 推断。' +
          '\n\n' +
            '泛型接口常描述容器、仓储、工厂等通用结构。例如 Repository<T> 定义对任意实体的增删改查，' +
            'UserRepo 和 ProductRepo 共享同一接口形状，只是 T 不同。' +
            '这是"generic data structures"和"generic repository pattern"的基础。' +
          '\n\n' +
            '泛型类配合泛型方法能表达更精细的类型关联，例如 class Map<K, V> { get(key: K): V | undefined }。' +
            '泛型让一套实现适配多种类型，零运行时开销（类型在编译期擦除），是类型安全与代码复用的双赢。',
          examples: [
            {
              title: '泛型接口',
              code: `interface Box<T> {
  value: T
}
const b: Box<string> = { value: "hello" }
console.log(b.value)`,
              explanation:
                'Box<T> 描述装有 T 类型值的盒子。Box<string> 表示装字符串的盒子。' +
                'value 类型严格为 string。输出 hello。',
            },
            {
              title: '泛型类 Stack',
              code: `class Stack<T> {
  private items: T[] = []
  push(x: T): void { this.items.push(x) }
  pop(): T | undefined { return this.items.pop() }
  size(): number { return this.items.length }
}
const s = new Stack<number>()
s.push(1)
s.push(2)
console.log(s.pop(), s.size())`,
              explanation:
                'Stack<T> 是后进先出栈。new Stack<number>() 限定元素为 number。' +
                'push/pop 操作 T 类型。pop 后还剩 1 个元素。输出 2 和 1。',
            },
            {
              title: '泛型键值对',
              code: `class KVPair<K, V> {
  constructor(public key: K, public value: V) {}
  toString(): string {
    return String(this.key) + "=" + String(this.value)
  }
}
console.log(new KVPair("age", 20).toString())`,
              explanation:
                '两个类型参数 K 和 V。toString 用 String() 转任意类型为字符串。' +
                '输出 "age=20"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '泛型类 Box<T> 有 value: T 字段，方法 get() 返回 value。' +
                '创建 new Box(99)，输出 get() 的结果。',
              starter_code: `class Box<T> {
  value: T
  constructor(value: T) { this.value = value }
  get(): T { return this.___ }
}
console.log(new Box(99).get())`,
              expected_output: '99',
              hints: [
                'get 返回 value 字段',
                '返回 this.value',
                '答案: value',
              ],
            },
            {
              type: 'output-match',
              prompt: '泛型接口 Pair<T> { first: T; second: T }。写函数 add 返回 first + second。' +
                '调用 add({ first: 2, second: 3 }) 输出结果。',
              starter_code: `interface Pair<T> {
  first: T
  second: T
}
function add(p: Pair<number>): number {
  return p.first + p.___
}
console.log(add({ first: 2, second: 3 }))`,
              expected_output: '5',
              hints: [
                '返回 first 加 second',
                '访问 second 字段',
                '答案: second',
              ],
            },
          ],
          realWorldScenario:
            '泛型数据结构 Stack/Queue/LinkedList 用 <T> 适配任意元素类型——一套实现既能存 number 又能存 User，类型安全且零运行时开销。这是泛型最经典的价值，也是"generic data structures"的精髓。',
        },
        {
          id: 'ts-ch4-l3',
          title: '泛型约束',
          order: 2,
          content_md:
            '`extends` 约束泛型参数，限制可接受的类型范围。`<T extends SomeType>` 要求 T 必须满足 SomeType。' +
            '约束让泛型函数内可安全访问约束类型的成员，例如 `<T extends { length: number }>` 后可访问 arg.length。' +
            '没有约束的话，T 是完全未知类型，访问任何属性都会报错。' +
          '\n\n' +
            '`keyof` 操作符获取类型的所有键的联合，常用于约束"键属于某对象"：`<K extends keyof T>`。' +
            '这让 get(obj, key) 的 key 必须是 obj 的真实属性，拼错编译报错，返回类型精确对应属性类型。' +
            'keyof 是类型安全对象操作的基础。' +
          '\n\n' +
            '约束还可以是构造函数类型 `new (...args) => T`，用于工厂函数创建实例。' +
            '约束让泛型既灵活又安全——比 any 强（有类型保证），比具体类型灵活（适配一族类型）。',
          examples: [
            {
              title: 'length 约束',
              code: `function len<T extends { length: number }>(arg: T): number {
  return arg.length
}
console.log(len("hello"))
console.log(len([1, 2, 3]))`,
              explanation:
                'T 必须有 length 属性。string 和数组都满足，可传入。len(123) 会报错（数字无 length）。' +
                '输出 5 和 3。',
            },
            {
              title: 'keyof 约束',
              code: `function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
const user = { name: "小明", age: 20 }
console.log(get(user, "name"))`,
              explanation:
                'K 必须是 T 的键之一。get(user, "name") 合法，get(user, "email") 报错。' +
                '返回类型 T[K] 精确对应属性类型（这里是 string）。输出 "小明"。',
            },
            {
              title: '构造函数约束',
              code: `class Point { constructor(public x: number, public y: number) {} }
function create<T>(Ctor: new (x: number, y: number) => T): T {
  return new Ctor(1, 2)
}
const p = create(Point)
console.log(p.x, p.y)`,
              explanation:
                'Ctor 约束为"可 new 并接收两个 number 返回 T"的构造函数。' +
                'create(Point) 创建 Point 实例。输出 1 和 2。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写泛型函数 printLen<T extends { length: number }>(v: T) 返回 v.length。' +
                '调用 printLen("abc") 输出结果。',
              starter_code: `function printLen<T extends { length: number }>(v: T): number {
  return v.___
}
console.log(printLen("abc"))`,
              expected_output: '3',
              hints: [
                '返回 v 的 length 属性',
                '字符串有 length 属性',
                '答案: length',
              ],
            },
            {
              type: 'output-match',
              prompt: '写泛型函数 pick<T, K extends keyof T>(obj: T, k: K) 返回 obj[k]。' +
                '调用 pick({ a: 1, b: 2 }, "a") 输出结果。',
              starter_code: `function pick<T, K extends keyof T>(obj: T, k: K): T[K] {
  return obj[___]
}
console.log(pick({ a: 1, b: 2 }, "a"))`,
              expected_output: '1',
              hints: [
                '用方括号访问 obj 的 k 属性',
                'obj[k]',
                '答案: k',
              ],
            },
          ],
          realWorldScenario:
            '类型安全的对象取值函数 get<T, K extends keyof T>(obj: T, key: K): T[K]——key 必须是 obj 的真实属性，拼错编译报错，返回类型精确对应属性类型，彻底消灭 "Cannot read property of undefined"。这是日常开发中最高频的泛型约束用法。',
        },
        {
          id: 'ts-ch4-l4',
          title: '条件类型',
          order: 3,
          content_md:
            '条件类型 `T extends U ? X : Y` 根据类型关系做分支，类似运行时三元表达式但在类型层面。' +
            '常用于工具类型的实现，如 type IsString<T> = T extends string ? true : false。' +
            '条件类型让类型系统能"判断"和"分支"，表达能力大幅提升。' +
          '\n\n' +
            '`infer` 在条件类型中"推断"并提取类型，如 type Unpack<T> = T extends Promise<infer U> ? U : T 提取 Promise 的元素类型。' +
            'infer 是类型体操的核心关键字，能在类型匹配时捕获子类型。' +
            '例如从函数类型推断返回值类型、从数组推断元素类型，都依赖 infer。' +
          '\n\n' +
            '条件类型可递归（distributive），对联合类型会分发求值。' +
            '它是类型体操的基础，能表达非常精巧的类型推导，但生产中应以可读性为先，避免过度炫技。',
          examples: [
            {
              title: '基本条件类型',
              code: `type IsNumber<T> = T extends number ? "yes" : "no"
type A = IsNumber<42>
type B = IsNumber<"hi">
const a: A = "yes"
const b: B = "no"
console.log(a, b)`,
              explanation:
                'IsNumber<42> 求值为 "yes"，IsNumber<"hi"> 求值为 "no"。' +
                '条件类型在编译期完成判断，运行时只剩结果。输出 "yes no"。',
            },
            {
              title: 'infer 提取数组元素',
              code: `type Unbox<T> = T extends Array<infer U> ? U : never
type Elem = Unbox<string[]>
const e: Elem = "x"
console.log(e)`,
              explanation:
                'infer U 捕获数组的元素类型。Unbox<string[]> 求值为 string。' +
                '如果不是数组则求值为 never。输出 x。',
            },
            {
              title: '条件类型过滤',
              code: `type NonNull<T> = T extends null | undefined ? never : T
type R = NonNull<string | null>
const r: R = "ok"
console.log(r)`,
              explanation:
                '条件类型对联合分发：string 通过（保留），null 被过滤为 never。' +
                '最终 R 为 string。输出 ok。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 type IsString<T> = T extends string ? true : false。' +
                '声明 const v: IsString<"a"> = true，输出 v。',
              starter_code: `type IsString<T> = T extends string ? true : false
const v: IsString<"a"> = ___
console.log(v)`,
              expected_output: 'true',
              hints: [
                '"a" 是 string，所以 IsString<"a"> 求值为 true',
                '赋值布尔值 true',
                '答案: true',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 type ElementOf<T> = T extends (infer U)[] ? U : never。' +
                'type E = ElementOf<number[]>，声明 const n: E = 5，输出 n。',
              starter_code: `type ElementOf<T> = T extends (infer U)[] ? U : never
type E = ElementOf<number[]>
const n: E = ___
console.log(n)`,
              expected_output: '5',
              hints: [
                'E 是 number（数组的元素类型）',
                '赋值数字 5',
                '答案: 5',
              ],
            },
          ],
          realWorldScenario:
            'React 组件库用条件类型推导 props：type Props<T> = T extends string ? { value: T } : { data: T[] }——给泛型组件传入不同类型时自动得到不同的 props 形状，API 极度贴合用法，这是高级类型体操的实战价值。',
        },
      ],
    },
    // ================================================================
    // 第 5 章：高级类型
    // ================================================================
    {
      id: 'ts-ch5',
      title: '高级类型',
      order: 4,
      lessons: [
        {
          id: 'ts-ch5-l1',
          title: '交叉类型',
          order: 0,
          content_md:
            '交叉类型 `A & B` 把多个类型合并为一个，结果同时拥有所有成员（逻辑与）。' +
            '常用于混入（mixin）：把多个能力的类型组合成一个完整对象的类型。' +
            '交叉类型对对象类型是"合并属性"，若同名属性类型冲突会产生 never。' +
          '\n\n' +
            '与联合类型对比：联合是"或"（取值范围扩大），交叉是"与"（合并要求增多）。' +
            '联合类型 `A | B` 的值可以是 A 或 B，交叉类型 `A & B` 的值必须同时满足 A 和 B。' +
            '理解这对概念是掌握 TS 类型代数的基础。' +
          '\n\n' +
            '交叉类型在组合多个接口时特别有用：把 Timestamps、SoftDelete、Owned 等能力类型交叉，' +
            '按需拼装出完整的实体类型，避免定义一个臃肿的大接口。',
          examples: [
            {
              title: '基本交叉',
              code: `interface Named { name: string }
interface Aged { age: number }
type Person = Named & Aged
const p: Person = { name: "小明", age: 20 }
console.log(p.name, p.age)`,
              explanation:
                'Person 同时要有 name 和 age。交叉合并了两个接口的属性。' +
                '输出 "小明 20"。',
            },
            {
              title: '混入多个能力',
              code: `type Timestamps = { createdAt: string; updatedAt: string }
type WithUser = { userId: string }
type Record = { id: string } & Timestamps & WithUser
const r: Record = { id: "1", createdAt: "now", updatedAt: "now", userId: "u1" }
console.log(r.id, r.userId)`,
              explanation:
                '三个类型交叉，Record 必须包含所有字段。这种混入让实体按需组合能力。' +
                '输出 "1 u1"。',
            },
            {
              title: '函数类型交叉',
              code: `type LogFn = (msg: string) => void
type TagFn = (tag: string) => void
type Logger = LogFn & TagFn
const logger: Logger = ((msg: string) => console.log(msg)) as Logger
logger("混合日志")`,
              explanation:
                '函数交叉类型表示一个函数同时满足多个签名（重载的近似）。' +
                '实际中较少用，多见于库的类型定义。输出 "混合日志"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 type A = { x: number } 和 type B = { y: number }，type C = A & B。' +
                '声明 const c: C = { x: 1, y: 2 }，输出 c.x + c.y。',
              starter_code: `type A = { x: number }
type B = { y: number }
type C = A & B
const c: C = { x: 1, y: 2 }
console.log(c.x + c.___)`,
              expected_output: '3',
              hints: [
                '输出 x 加 y',
                '访问 c 的 y 属性',
                '答案: y',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 type HasId = { id: number } 和 type HasName = { name: string }，' +
                'type Item = HasId & HasName。声明 i = { id: 1, name: "a" }，输出 i.name。',
              starter_code: `type HasId = { id: number }
type HasName = { name: string }
type Item = HasId & HasName
const i: Item = { id: 1, name: "a" }
console.log(i.___)`,
              expected_output: 'a',
              hints: [
                '输出 name 属性',
                '访问 i.name',
                '答案: name',
              ],
            },
          ],
          realWorldScenario:
            '权限系统中 type Admin = User & { permissions: string[] } 把基础用户与权限能力交叉——Admin 同时具备 User 的信息和权限字段，无需重新定义全部属性，复用清晰。混入（mixin）模式也依赖交叉类型组合多个能力。',
        },
        {
          id: 'ts-ch5-l2',
          title: '映射类型',
          order: 1,
          content_md:
            '映射类型 `[K in keyof T]` 遍历类型的键生成新类型，是构造工具类型的核心机制。' +
            '修饰符 `?`（可选）、`readonly`（只读）可在映射中添加（+）或移除（-）：`-readonly` 去除只读，`-?` 去除可选。' +
            '映射类型让"批量变换类型"成为可能，避免重复手写每个属性。' +
          '\n\n' +
            '内置的 Partial、Required、Pick、Omit、Readonly 都是基于映射类型实现的。' +
            '掌握映射类型等于掌握了"类型层面的循环"，能根据现有类型自动派生新类型。' +
            '映射类型配合条件类型，能表达极其复杂的类型变换。' +
          '\n\n' +
            '映射类型的语法 `[K in keyof T]: NewType` 表示对 T 的每个键 K，生成同名的 NewType 字段。' +
            'NewType 可以引用 T[K]（原字段类型）做变换，如变可选、变只读、变字符串等。',
          examples: [
            {
              title: '所有属性变可选',
              code: `type MyPartial<T> = { [K in keyof T]?: T[K] }
interface User { name: string; age: number }
const u: MyPartial<User> = { name: "小明" }
console.log(u.name)`,
              explanation:
                'MyPartial 把 T 的所有属性变可选。MyPartial<User> 等同 Partial<User>。' +
                '只传 name 也合法。输出 "小明"。',
            },
            {
              title: '所有属性变只读',
              code: `type MyReadonly<T> = { readonly [K in keyof T]: T[K] }
interface Point { x: number; y: number }
const p: MyReadonly<Point> = { x: 1, y: 2 }
console.log(p.x, p.y)`,
              explanation:
                'MyReadonly 给每个属性加 readonly。修改 p.x 会报错。' +
                '输出 1 和 2。',
            },
            {
              title: '移除可选修饰',
              code: `type Concrete<T> = { [K in keyof T]-?: T[K] }
interface Opt { a?: number; b?: string }
const o: Concrete<Opt> = { a: 1, b: "x" }
console.log(o.a, o.b)`,
              explanation:
                '-? 移除可选修饰，所有属性变必填。Concrete<Opt> 要求 a 和 b 都必填。' +
                '输出 1 和 x。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 type Stringify<T> = { [K in keyof T]: string }，' +
                '把 interface Num { a: number } 转为 { a: string }。' +
                '声明 const s: Stringify<Num> = { a: "1" }，输出 s.a。',
              starter_code: `type Stringify<T> = { [K in keyof T]: string }
interface Num { a: number }
const s: Stringify<Num> = { a: "1" }
console.log(s.___)`,
              expected_output: '1',
              hints: [
                '输出 a 属性',
                '访问 s.a',
                '答案: a',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 type AllReadonly<T> = { readonly [K in keyof T]: T[K] }。' +
                'interface P { x: number }，声明 const p: AllReadonly<P> = { x: 1 }，输出 p.x。',
              starter_code: `type AllReadonly<T> = { readonly [K in keyof T]: T[K] }
interface P { x: number }
const p: AllReadonly<P> = { x: 1 }
console.log(p.___)`,
              expected_output: '1',
              hints: [
                '输出 x 属性',
                '访问 p.x',
                '答案: x',
              ],
            },
          ],
          realWorldScenario:
            '表单更新场景用映射类型把所有字段变可选 Partial<FormValues>，让 patch(form, partialValues) 只传需要改的字段——无需为每个字段写可选版本，类型自动生成。这是映射类型最日常的用途。',
        },
        {
          id: 'ts-ch5-l3',
          title: '内置工具类型 Partial/Required/Pick/Omit',
          order: 2,
          content_md:
            'TypeScript 内置一组高频工具类型：`Partial<T>` 所有属性变可选；`Required<T>` 所有属性变必填（移除可选）。' +
            '`Pick<T, Keys>` 从 T 中选取指定键组成子类型；`Omit<T, Keys>` 排除指定键。' +
            '`Record<K, V>` 构造键为 K、值为 V 的对象类型。' +
          '\n\n' +
            '这些工具类型日常使用频率极高，能大幅减少重复定义。' +
            '例如 API 列表返回 Pick<User, "id" | "name"> 的精简对象，详情返回完整 User——同一份 User 定义派生不同视图。' +
            '更新函数用 Partial<T> 接收部分字段，创建函数用完整 T。' +
          '\n\n' +
            'Pick 和 Omit 互为补充：Pick 选取需要的，Omit 排除不要的。' +
            'Record 适合构造字典/映射结构，如 Record<string, number> 表示任意字符串键到数字的映射。' +
            '灵活组合这些工具类型，能让类型定义既精确又不冗余。',
          examples: [
            {
              title: 'Partial 更新',
              code: `interface Todo { title: string; done: boolean }
function update(t: Todo, patch: Partial<Todo>): Todo {
  return { ...t, ...patch }
}
const t: Todo = { title: "学习", done: false }
console.log(update(t, { done: true }))`,
              explanation:
                'Partial<Todo> 让 patch 可传任意子集。展开运算符合并原对象和补丁。' +
                '输出 { title: "学习", done: true }。',
            },
            {
              title: 'Pick 选取',
              code: `interface User { id: number; name: string; email: string }
type UserPreview = Pick<User, "id" | "name">
const u: UserPreview = { id: 1, name: "小明" }
console.log(u.id, u.name)`,
              explanation:
                'Pick 从 User 选取 id 和 name 两个字段。UserPreview 只有这两个属性。' +
                '输出 1 和 "小明"。',
            },
            {
              title: 'Omit 排除',
              code: `interface Product { id: number; name: string; price: number }
type NewProduct = Omit<Product, "id">
const p: NewProduct = { name: "书", price: 10 }
console.log(p.name, p.price)`,
              explanation:
                'Omit 排除 id，NewProduct 创建时不需要传 id（id 通常由后端生成）。' +
                '输出 "书" 和 10。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Pick 从 interface User { name: string; age: number } 选取 name，得到类型 UserName。' +
                '声明 const n: UserName = { name: "张三" }，输出 n.name。',
              starter_code: `interface User { name: string; age: number }
type UserName = Pick<User, "name">
const n: UserName = { name: "张三" }
console.log(n.___)`,
              expected_output: '张三',
              hints: [
                '输出 name 属性',
                '访问 n.name',
                '答案: name',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Omit 从 interface Item { id: number; name: string } 排除 id，得到类型 NewItem。' +
                '声明 const i: NewItem = { name: "a" }，输出 i.name。',
              starter_code: `interface Item { id: number; name: string }
type NewItem = Omit<Item, "id">
const i: NewItem = { name: "a" }
console.log(i.___)`,
              expected_output: 'a',
              hints: [
                '输出 name 属性',
                '访问 i.name',
                '答案: name',
              ],
            },
          ],
          realWorldScenario:
            'API 列表接口返回 Pick<User, "id" | "name"> 的精简对象，详情接口返回完整 User——同一份 User 定义用 Pick 派生不同视图，避免维护多份重复类型。React 组件 props typing 也常用 Pick 从完整配置类型派生子组件所需的部分。',
        },
        {
          id: 'ts-ch5-l4',
          title: '自定义工具类型',
          order: 3,
          content_md:
            '组合映射类型、条件类型、keyof 可构造项目专属工具类型，复用领域类型逻辑。' +
            '常见自定义：DeepPartial<T>（深层可选）、Mutable<T>（去只读）、GetKeys<T>（提取键）等。' +
            '自定义工具类型让类型层抽象与业务对齐，减少手写重复。' +
          '\n\n' +
            '命名约定：工具类型用大写开头（PascalCase），语义清晰。' +
            '递归工具类型（如 DeepPartial）能处理嵌套结构，但要注意可读性和编译性能。' +
            '生产中应以"够用且可读"为度，避免过度炫技导致类型难以理解。' +
          '\n\n' +
            '类型安全的 builder 模式是自定义工具类型的经典应用：用映射类型为每个字段生成链式 setter 方法，' +
            'build 方法返回完整对象，类型保证必填字段都设置过。这是"builder pattern with types"的核心。',
          examples: [
            {
              title: 'DeepPartial 深层可选',
              code: `type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }
interface Config { db: { host: string; port: number } }
const c: DeepPartial<Config> = { db: { port: 5432 } }
console.log(c.db?.port)`,
              explanation:
                'DeepPartial 递归地把所有层级的属性变可选。c.db.port 可不传 host。' +
                '输出 5432。',
            },
            {
              title: 'Mutable 去只读',
              code: `type Mutable<T> = { -readonly [K in keyof T]: T[K] }
interface Point { readonly x: number; readonly y: number }
const p: Mutable<Point> = { x: 1, y: 2 }
p.x = 5
console.log(p.x)`,
              explanation:
                '-readonly 移除只读修饰，Mutable<Point> 的属性可修改。' +
                'p.x = 5 合法。输出 5。',
            },
            {
              title: '自定义返回值类型',
              code: `type MyReturn<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never
function fn(): number { return 42 }
type R = MyReturn<typeof fn>
const r: R = 42
console.log(r)`,
              explanation:
                'MyReturn 用 infer 提取函数返回值类型，等同内置 ReturnType。' +
                'R 为 number。输出 42。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 type Mutable<T> = { -readonly [K in keyof T]: T[K] }。' +
                'interface P { readonly x: number }，声明 const p: Mutable<P> = { x: 1 }，' +
                'p.x = 9 后输出 p.x。',
              starter_code: `type Mutable<T> = { -readonly [K in keyof T]: T[K] }
interface P { readonly x: number }
const p: Mutable<P> = { x: 1 }
p.x = ___
console.log(p.x)`,
              expected_output: '9',
              hints: [
                '把 p.x 赋值为 9',
                '赋值数字 9',
                '答案: 9',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 type Keys<T> = keyof T。type K = Keys<{ a: 1; b: 2 }>，' +
                '声明 const k: K = "a"，输出 k。',
              starter_code: `type Keys<T> = keyof T
type K = Keys<{ a: 1; b: 2 }>
const k: K = ___
console.log(k)`,
              expected_output: 'a',
              hints: [
                'K 是 "a" | "b" 的联合',
                '赋值字符串字面量 "a"',
                '答案: "a"',
              ],
            },
          ],
          realWorldScenario:
            '类型安全的 builder 模式用工具类型实现：type Builder<T> = { [K in keyof T]: (v: T[K]) => Builder<T> } & { build(): T }——每个字段一个链式方法，build 返回完整对象，类型保证必填字段都设置过。这是"builder pattern with types"的精髓。',
        },
      ],
    },
    // ================================================================
    // 第 6 章：类型守卫与 narrowing
    // ================================================================
    {
      id: 'ts-ch6',
      title: '类型守卫与 narrowing',
      order: 5,
      lessons: [
        {
          id: 'ts-ch6-l1',
          title: 'typeof / in / instanceof',
          order: 0,
          content_md:
            '类型守卫在运行时检查类型，让 TS 在分支内收窄（narrowing）类型。' +
            '`typeof v === "string"` 等检查让 TS 在 if 分支内把 v 当 string 处理。' +
            'typeof 适合基本类型：string、number、boolean、undefined、object、function。' +
          '\n\n' +
            '`instanceof` 检查类实例的原型链，适合区分类的实例。' +
            '`in` 检查属性是否存在于对象，适合区分有不同结构的对象联合。' +
            '三者各有适用场景：基本类型用 typeof，类实例用 instanceof，对象结构差异用 in。' +
          '\n\n' +
            '类型守卫让联合类型能被安全处理——在分支内收窄到具体成员后，可访问该成员的特有属性。' +
            '没有类型守卫，联合类型只能访问所有成员共有的属性，灵活性大减。',
          examples: [
            {
              title: 'typeof 区分基本类型',
              code: `function process(v: string | number): string {
  if (typeof v === "string") return v.toUpperCase()
  return v.toFixed(2)
}
console.log(process("hi"))
console.log(process(3.14159))`,
              explanation:
                'typeof v === "string" 分支内 v 是 string，可调用 toUpperCase。' +
                'else 分支 v 是 number，调用 toFixed。输出 "HI" 和 "3.14"。',
            },
            {
              title: 'instanceof 区分类',
              code: `class Cat { meow(): string { return "喵" } }
class Dog { bark(): string { return "汪" } }
function speak(a: Cat | Dog): string {
  if (a instanceof Cat) return a.meow()
  return a.bark()
}
console.log(speak(new Cat()))`,
              explanation:
                'instanceof Cat 分支内 a 是 Cat，可调用 meow。' +
                'else 分支 a 是 Dog。输出 "喵"。',
            },
            {
              title: 'in 区分对象结构',
              code: `interface Fish { swim(): string }
interface Bird { fly(): string }
function move(a: Fish | Bird): string {
  if ("swim" in a) return a.swim()
  return a.fly()
}
console.log(move({ swim: () => "游" }))`,
              explanation:
                'in 检查属性是否存在。"swim" in a 为真时 a 是 Fish，调用 swim。' +
                '输出 "游"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '函数 desc(v: string | number)，string 时返回 "文字"，number 时返回 "数字"。' +
                '调用 desc(42) 输出结果。',
              starter_code: `function desc(v: string | number): string {
  if (typeof v === "string") return "文字"
  return ___
}
console.log(desc(42))`,
              expected_output: '数字',
              hints: [
                'number 分支返回 "数字"',
                '返回字符串字面量',
                '答案: "数字"',
              ],
            },
            {
              type: 'output-match',
              prompt: '函数 hasAge(o: { name: string } | { name: string; age: number })，' +
                '用 in 检查有 age 时返回 o.age，否则返回 0。' +
                '调用 hasAge({ name: "a", age: 5 }) 输出结果。',
              starter_code: `function hasAge(o: { name: string } | { name: string; age: number }): number {
  if ("age" ___ o) return o.age
  return 0
}
console.log(hasAge({ name: "a", age: 5 }))`,
              expected_output: '5',
              hints: [
                'in 运算符检查属性存在',
                '写法是 "age" in o',
                '答案: in',
              ],
            },
          ],
          realWorldScenario:
            '处理来自第三方 API 的混合数据（字符串或数字 ID）时，typeof 守卫让代码在两条分支分别安全处理——字符串走解析、数字直接用，无需 any 和强制断言。这是处理"不确定类型的外部数据"的标准手法。',
        },
        {
          id: 'ts-ch6-l2',
          title: '自定义类型守卫',
          order: 1,
          content_md:
            '自定义类型守卫是返回 `参数 is 类型` 的函数，让 TS 在调用后收窄类型。' +
            '形式：function isString(v: unknown): v is string { return typeof v === "string" }。' +
            '类型谓词 `is` 让任意检查函数成为类型守卫，比 typeof 更灵活，可表达复杂判断。' +
          '\n\n' +
            '自定义类型守卫常用于校验外部数据（API 返回、JSON 解析）后安全使用。' +
            '例如从 localStorage 读取 JSON 后用 isUser(data) 校验，通过才能访问 data.name。' +
            '这把"运行时校验"与"编译期类型"打通，是构建类型安全 API 客户端的关键技术。' +
          '\n\n' +
            '类型守卫可以组合：先 isObject，再 isUser，层层校验。' +
            '也可以针对数组元素做守卫，如 isNumberArray 检查每个元素都是数字。' +
            '良好的类型守卫让"信任边界"外的数据安全进入类型系统。',
          examples: [
            {
              title: 'isString 守卫',
              code: `function isString(v: unknown): v is string {
  return typeof v === "string"
}
function print(v: string | number): string {
  if (isString(v)) return "字符串:" + v
  return "数字:" + v
}
console.log(print("hi"))
console.log(print(5))`,
              explanation:
                'isString 返回 v is string，调用后 TS 在 if 分支知道 v 是 string。' +
                '输出 "字符串:hi" 和 "数字:5"。',
            },
            {
              title: '对象守卫',
              code: `interface User { name: string; age: number }
function isUser(v: unknown): v is User {
  return typeof v === "object" && v !== null && "name" in v && "age" in v
}
const data: unknown = { name: "小明", age: 20 }
if (isUser(data)) console.log(data.name)`,
              explanation:
                'isUser 校验 data 是对象且有 name、age 字段。通过后 data 收窄为 User。' +
                '输出 "小明"。',
            },
            {
              title: '数组元素守卫',
              code: `function isNumberArray(v: unknown): v is number[] {
  return Array.isArray(v) && v.every(x => typeof x === "number")
}
const v: unknown = [1, 2, 3]
if (isNumberArray(v)) console.log(v.reduce((a, b) => a + b, 0))`,
              explanation:
                'isNumberArray 检查 v 是数组且每个元素是 number。通过后 v 是 number[]，可调用 reduce。' +
                '输出 6。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写函数 isNumber(v: unknown): v is number，用 typeof 判断。' +
                '函数 test(v: unknown) 用守卫，number 时返回 "是数字"，否则 "非数字"。' +
                '调用 test(5) 输出结果。',
              starter_code: `function isNumber(v: unknown): v is number {
  return typeof v === "number"
}
function test(v: unknown): string {
  if (isNumber(v)) return ___
  return "非数字"
}
console.log(test(5))`,
              expected_output: '是数字',
              hints: [
                'number 分支返回 "是数字"',
                '返回字符串字面量',
                '答案: "是数字"',
              ],
            },
            {
              type: 'output-match',
              prompt: '写守卫 hasLength(v: unknown): v is { length: number }，' +
                '检查 v 非 null 且有 length 属性。调用 hasLength("abc") 后输出 "ok"。',
              starter_code: `function hasLength(v: unknown): v is { length: number } {
  return v !== null && typeof v === "object" && "length" in v
}
function check(v: unknown): string {
  if (hasLength(v)) return "ok"
  return "no"
}
console.log(check("abc"))`,
              expected_output: 'ok',
              hints: [
                '注意 "abc" 是 string 不是 object，但 string 也有 length',
                '调整守卫：v !== null 且 (typeof v === "object" || typeof v === "string") 且有 length',
                '答案: 修改守卫条件为 typeof v === "string" || (typeof v === "object" && v !== null && "length" in v)',
              ],
            },
          ],
          realWorldScenario:
            '接收后端 JSON 后用 isUser(data) 守卫校验，通过后才能安全访问 data.name——把"运行时校验"与"编译期类型"打通，是构建类型安全 API 客户端的关键技术。typed safe fetch 的核心就是在 fetch 后用类型守卫校验响应。',
        },
        {
          id: 'ts-ch6-l3',
          title: '可辨识联合',
          order: 2,
          content_md:
            '可辨识联合（Discriminated Union）给联合的每个成员加一个公共字面量字段（标签），用 switch 区分。' +
            '标签字段（如 type: "circle"）让 TS 在 switch case 内精确收窄到对应成员。' +
            '可辨识联合是表达状态机、AST 节点、API 响应等"有限种类"数据的标准模式。' +
          '\n\n' +
            '配合 switch + never 穷尽检查，新增成员时编译器能提示遗漏分支。' +
            '例如新增一种形状却忘了在 area 函数处理，default 分支的 never 赋值会报错，把"忘记处理新情况"的运行时 bug 提前到编译期。' +
            '这是可辨识联合相比普通联合的最大优势。' +
          '\n\n' +
            '可辨识联合的标签字段名通常用 type、kind、state、status 等，全联合共用同一字段名。' +
            '每个成员的标签值是唯一的字面量，TS 据此收窄。',
          examples: [
            {
              title: '形状联合',
              code: `type Shape =
  | { kind: "circle"; r: number }
  | { kind: "square"; s: number }
function area(sh: Shape): number {
  switch (sh.kind) {
    case "circle": return Math.floor(Math.PI * sh.r * sh.r)
    case "square": return sh.s * sh.s
  }
}
console.log(area({ kind: "circle", r: 2 }))
console.log(area({ kind: "square", s: 3 }))`,
              explanation:
                'kind 是标签字段。case "circle" 内 sh 收窄为 { kind: "circle"; r: number }，可访问 r。' +
                '输出 12 和 9。',
            },
            {
              title: 'API 响应联合',
              code: `type Result =
  | { status: "ok"; data: number }
  | { status: "error"; msg: string }
function handle(r: Result): string {
  if (r.status === "ok") return "结果:" + r.data
  return "错误:" + r.msg
}
console.log(handle({ status: "ok", data: 42 }))
console.log(handle({ status: "error", msg: "失败" }))`,
              explanation:
                'status 是标签。ok 分支有 data，error 分支有 msg，各自字段不同。' +
                '输出 "结果:42" 和 "错误:失败"。',
            },
            {
              title: '状态机',
              code: `type State =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "done"; result: string }
function describe(s: State): string {
  switch (s.state) {
    case "idle": return "空闲"
    case "loading": return "加载中"
    case "done": return "完成:" + s.result
  }
}
console.log(describe({ state: "done", result: "ok" }))`,
              explanation:
                '每种状态携带不同字段：idle/loading 无额外字段，done 携带 result。' +
                'switch 内安全访问对应字段。输出 "完成:ok"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '可辨识联合 Shape = { kind: "circle"; r: number } | { kind: "square"; s: number }。' +
                '函数 area 用 switch，circle 返回 Math.floor(3.14 * r * r)，square 返回 s * s。' +
                '调用 area({ kind: "square", s: 4 }) 输出结果。',
              starter_code: `type Shape =
  | { kind: "circle"; r: number }
  | { kind: "square"; s: number }
function area(sh: Shape): number {
  switch (sh.kind) {
    case "circle": return Math.floor(3.14 * sh.r * sh.r)
    case "square": return sh.s * sh.___
  }
}
console.log(area({ kind: "square", s: 4 }))`,
              expected_output: '16',
              hints: [
                'square 面积是 s 乘 s',
                '访问 s 字段',
                '答案: s',
              ],
            },
            {
              type: 'output-match',
              prompt: '联合 Status = { state: "on" } | { state: "off" }。' +
                '函数 label 用 switch，"on" 返回 "开"，"off" 返回 "关"。' +
                '调用 label({ state: "on" }) 输出结果。',
              starter_code: `type Status = { state: "on" } | { state: "off" }
function label(s: Status): string {
  switch (s.state) {
    case "on": return "开"
    case "off": return ___
  }
}
console.log(label({ state: "on" }))`,
              expected_output: '开',
              hints: [
                'on 分支已返回 "开"',
                'off 分支返回 "关"（但本题调用 on）',
                '答案: "关"',
              ],
            },
          ],
          realWorldScenario:
            '类型安全状态机用可辨识联合描述状态 {state: "idle"} | {state: "loading"} | {state: "done", data: T} | {state: "error", err: string}——每个状态携带不同字段，switch 渲染对应 UI，类型保证不会在 idle 状态访问 data。这是"type-safe state machine"的标准实现。',
        },
        {
          id: 'ts-ch6-l4',
          title: 'never 类型',
          order: 3,
          content_md:
            '`never` 表示"永不存在的值"的类型：永不返回的函数（抛错或无限循环）返回 never。' +
            'never 是所有类型的子类型，可赋值给任何类型，但没有任何值能赋给 never。' +
            'never 常用于穷尽检查：switch 的 default 分支赋值 never，若遗漏成员编译报错。' +
          '\n\n' +
            '类型运算中不可达分支会产生 never，如 string & number（没有值能同时是 string 和 number）。' +
            '条件类型中过滤掉的成员也求值为 never（如 NonNull 把 null 映射为 never）。' +
            'never 在联合中会被自动忽略：string | never 就是 string。' +
          '\n\n' +
            '穷尽检查是 never 最实用的场景：在 switch 的 default 分支 `const x: never = value`，' +
            '如果联合新增了成员却忘了处理，value 不再是 never，赋值报错，立即提醒开发者补全分支。' +
            '这把"忘记处理新状态"的 bug 提前到编译期。',
          examples: [
            {
              title: '永不返回的函数',
              code: `function fail(msg: string): never {
  throw new Error(msg)
}
function loop(): never {
  while (true) {}
}
console.log("never 函数定义完成")`,
              explanation:
                'fail 抛错永不返回，loop 无限循环永不返回，两者返回类型是 never。' +
                'never 函数不能有可达的正常返回。输出 "never 函数定义完成"。',
            },
            {
              title: '穷尽检查',
              code: `type Color = "red" | "green" | "blue"
function name(c: Color): string {
  switch (c) {
    case "red": return "红"
    case "green": return "绿"
    case "blue": return "蓝"
    default:
      const x: never = c
      return x
  }
}
console.log(name("red"))`,
              explanation:
                'default 分支 c 应该是 never（所有 Color 都已处理）。若 Color 新增 "yellow" 却不加 case，' +
                'c 在 default 变成 "yellow"，赋值给 never 报错。输出 "红"。',
            },
            {
              title: 'never 在条件类型中过滤',
              code: `type WithoutNull<T> = T extends null ? never : T
type R = WithoutNull<string | null>
const r: R = "ok"
console.log(r)`,
              explanation:
                '条件类型分发：string 保留，null 映射为 never，never 在联合中被忽略。' +
                '最终 R 为 string。输出 "ok"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写函数 throwError(msg: string): never 抛出 new Error(msg)。' +
                '调用前先 console.log("开始")，输出第一行。',
              starter_code: `function throwError(msg: string): never {
  throw new Error(msg)
}
console.log(___)
throwError("出错")`,
              expected_output: '开始',
              hints: [
                '先输出 "开始" 再抛错',
                'console.log 的参数是 "开始"',
                '答案: "开始"',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 type NoUndefined<T> = T extends undefined ? never : T。' +
                'type R = NoUndefined<string | undefined>，声明 const r: R = "ok"，输出 r。',
              starter_code: `type NoUndefined<T> = T extends undefined ? never : T
type R = NoUndefined<string | undefined>
const r: R = ___
console.log(r)`,
              expected_output: 'ok',
              hints: [
                'R 是 string（undefined 被过滤）',
                '赋值 "ok"',
                '答案: "ok"',
              ],
            },
          ],
          realWorldScenario:
            '在 Redux reducer 的 switch 中，default 分支用 const _: never = action 做穷尽检查——新增 action 类型却忘了处理时，TS 立即报错指向遗漏处，把"忘记处理新状态"的运行时 bug 提前到编译期。这是大型状态管理必备的防御性编程。',
        },
      ],
    },
    // ================================================================
    // 第 7 章：模块与命名空间
    // ================================================================
    {
      id: 'ts-ch7',
      title: '模块与命名空间',
      order: 6,
      lessons: [
        {
          id: 'ts-ch7-l1',
          title: 'ES 模块 import/export',
          order: 0,
          content_md:
            'ES 模块用 `export` 导出、`import` 导入。默认导出 `export default`，命名导出 `export { x }` 或 `export const x`。' +
            '导入命名导出 `import { x } from "./path"`，默认导出 `import x from "./path"`，重命名 `import { x as y }`。' +
            '模块是单文件作用域，不导出的内容外部不可见，避免了全局污染。' +
          '\n\n' +
            'ES 模块是现代 JavaScript/TypeScript 的标准模块系统，支持静态分析和 tree-shaking（构建时剔除未用代码）。' +
            '命名导出适合导出多个相关成员，默认导出适合导出模块的"主"成员（如一个组件或类）。' +
            '一个模块只能有一个默认导出，但可有任意多个命名导出。' +
          '\n\n' +
            '注：在线运行环境为单文件，下方示例把多文件语法写在注释里，实际代码用单文件等效演示。' +
            '理解 import/export 后，真实项目中按功能拆分模块、按需导入，是组织大型代码库的基础。',
          examples: [
            {
              title: '命名导出与导入（注释演示多文件）',
              code: `// 文件 math.ts
// export function add(a: number, b: number): number { return a + b }
// export const PI = 3.14
//
// 文件 app.ts
// import { add, PI } from "./math"
// console.log(add(1, 2), PI)

// 单文件等效演示
function add(a: number, b: number): number { return a + b }
const PI = 3.14
console.log(add(1, 2), PI)`,
              explanation:
                '命名导出用 export 关键字，导入用 import { 名字 }。多文件中 add 和 PI 从 math.ts 导入。' +
                '单文件演示等效效果。输出 "3 3.14"。',
            },
            {
              title: '默认导出',
              code: `// 文件 logger.ts
// export default function log(msg: string) { console.log(msg) }
//
// import log from "./logger"
// log("默认导出")

// 单文件等效演示
function log(msg: string) { console.log(msg) }
log("默认导出")`,
              explanation:
                '默认导出用 export default，导入时不加花括号。一个模块只能一个默认导出。' +
                '输出 "默认导出"。',
            },
            {
              title: '重命名与全部导入',
              code: `// import * as MathLib from "./math"
// MathLib.add(1, 2)

// 单文件等效演示
const MathLib = {
  add: (a: number, b: number) => a + b,
  sub: (a: number, b: number) => a - b,
}
console.log(MathLib.add(5, 3))
console.log(MathLib.sub(5, 3))`,
              explanation:
                'import * as 把所有命名导出收到一个命名空间对象。也可 import { add as plus }。' +
                '输出 8 和 2。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '单文件模拟模块：定义函数 multiply(a, b) 返回 a * b，输出 multiply(3, 4)。',
              starter_code: `function multiply(a: number, b: number): number {
  return a * b
}
console.log(multiply(___, 4))`,
              expected_output: '12',
              hints: [
                'multiply(3, 4) 返回 12',
                '第一个参数是 3',
                '答案: 3',
              ],
            },
            {
              type: 'output-match',
              prompt: '用对象模拟命名空间 MathLib，含 add 方法返回 a + b。输出 MathLib.add(2, 3)。',
              starter_code: `const MathLib = {
  add: (a: number, b: number) => a + b
}
console.log(MathLib.___(2, 3))`,
              expected_output: '5',
              hints: [
                '调用 add 方法',
                '方法名是 add',
                '答案: add',
              ],
            },
          ],
          realWorldScenario:
            '真实项目中按功能拆分模块：api/users.ts 导出 fetchUsers、components/Button.tsx 默认导出组件——import 按需引入，配合 tree-shaking 自动剔除未用代码，构建产物更小。这是现代前端工程的标配。',
        },
        {
          id: 'ts-ch7-l2',
          title: '命名空间 namespace',
          order: 1,
          content_md:
            '命名空间用 `namespace 名 { }` 把相关代码组织在一个逻辑容器内，通过 `export` 暴露成员。' +
            '命名空间是 TS 早期的模块方案，现代项目优先用 ES 模块，但命名空间在单文件内组织工具仍方便。' +
            '命名空间可嵌套，用点访问 Outer.Inner.fn()。' +
          '\n\n' +
            '命名空间内未 export 的成员是私有的，外部不可访问，实现封装。' +
            '命名空间与 ES 模块不要混用——新代码推荐 ES 模块，命名空间主要用于声明文件（.d.ts）描述全局库类型。' +
            '理解命名空间有助于阅读旧代码和库的类型定义。' +
          '\n\n' +
            '命名空间的优势是单文件内即可使用，无需模块解析配置，适合小型工具脚本和类型声明。' +
            '缺点是不支持 tree-shaking，且跨文件组织不如 ES 模块清晰。',
          examples: [
            {
              title: '基本命名空间',
              code: `namespace Utils {
  export function double(n: number): number {
    return n * 2
  }
  export const VERSION = "1.0"
}
console.log(Utils.double(5))
console.log(Utils.VERSION)`,
              explanation:
                'Utils 命名空间内 export 的成员外部可访问。未 export 的私有。' +
                '输出 10 和 "1.0"。',
            },
            {
              title: '嵌套命名空间',
              code: `namespace App {
  export namespace Math {
    export function square(n: number): number { return n * n }
  }
}
console.log(App.Math.square(4))`,
              explanation:
                '命名空间可嵌套。App.Math.square 通过点访问。适合组织层级相关的工具。' +
                '输出 16。',
            },
            {
              title: '命名空间内私有',
              code: `namespace Counter {
  let count = 0
  export function inc(): number { return ++count }
  export function get(): number { return count }
}
console.log(Counter.inc())
console.log(Counter.inc())
console.log(Counter.get())`,
              explanation:
                'count 未 export，外部 Counter.count 不可访问，只能通过 inc/get 操作。' +
                '这是命名空间的封装能力。输出 1、2、2。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 namespace Tools，内 export 函数 add(a, b) 返回 a + b。输出 Tools.add(2, 3)。',
              starter_code: `namespace Tools {
  export function add(a: number, b: number): number {
    return a + b
  }
}
console.log(Tools.___(2, 3))`,
              expected_output: '5',
              hints: [
                '调用 add 方法',
                '方法名是 add',
                '答案: add',
              ],
            },
            {
              type: 'output-match',
              prompt: 'namespace Box 内 export const value = 10。输出 Box.value。',
              starter_code: `namespace Box {
  export const value: number = 10
}
console.log(Box.___)`,
              expected_output: '10',
              hints: [
                '访问 value 成员',
                '成员名是 value',
                '答案: value',
              ],
            },
          ],
          realWorldScenario:
            '在声明文件（.d.ts）中用 namespace 描述全局库的类型，如 declare namespace JQuery { ... }——让旧版 JS 库在 TS 中获得类型提示，无需改写源码。这是命名空间在现代项目中的主要用途。',
        },
        {
          id: 'ts-ch7-l3',
          title: '声明合并',
          order: 2,
          content_md:
            '声明合并指同名 interface 自动合并为一个，所有成员并存。namespace 也能与 interface/class 合并。' +
            'interface 合并：同名 interface 的成员被合并，重复的同名属性必须类型一致否则报错。' +
            'namespace 合并：同名 namespace 的导出成员合并，后定义可访问先定义的成员。' +
          '\n\n' +
            '声明合并常用于扩展第三方类型或库的定义。例如给 Express 的 Request 对象扩展 user 字段：' +
            'declare module "express" { interface Request { user?: User } }——合并后所有路由处理器中 req.user 类型可用。' +
            '这是在不改库源码的前提下增强类型的官方机制。' +
          '\n\n' +
            '声明合并强大但需谨慎：过度使用会让类型定义分散在多处，难以追踪。' +
            '推荐在统一的类型扩展文件（如 types/extensions.d.ts）中集中做声明合并，避免散落各处。',
          examples: [
            {
              title: 'interface 合并',
              code: `interface Box { size: number }
interface Box { weight: number }
const b: Box = { size: 10, weight: 5 }
console.log(b.size, b.weight)`,
              explanation:
                '两个同名 Box 自动合并，最终 Box 有 size 和 weight 两个属性。' +
                '输出 10 和 5。',
            },
            {
              title: 'namespace 合并',
              code: `namespace Animal {
  export const legs = 4
}
namespace Animal {
  export function info(): string {
    return "腿数:" + legs
  }
}
console.log(Animal.info())`,
              explanation:
                '两个同名 namespace 合并，后一个可访问前一个 export 的 legs。' +
                '输出 "腿数:4"。',
            },
            {
              title: 'namespace 与 function 合并',
              code: `function counter(): number { return counter.count }
namespace counter {
  export let count = 0
}
counter.count = 5
console.log(counter())`,
              explanation:
                '函数与同名 namespace 合并，函数对象上挂载 namespace 的导出属性。' +
                'counter.count = 5 后调用 counter() 返回 5。输出 5。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义两次 interface Item：第一次 { a: number }，第二次 { b: number }。' +
                '声明 const i: Item = { a: 1, b: 2 }，输出 i.a + i.b。',
              starter_code: `interface Item { a: number }
interface Item { b: number }
const i: Item = { a: 1, b: 2 }
console.log(i.a + i.___)`,
              expected_output: '3',
              hints: [
                '输出 a 加 b',
                '访问 b 属性',
                '答案: b',
              ],
            },
            {
              type: 'output-match',
              prompt: 'namespace Lib 内分两次分别 export const x = 1 和 export const y = 2。' +
                '输出 Lib.x + Lib.y。',
              starter_code: `namespace Lib {
  export const x = 1
}
namespace Lib {
  export const y = 2
}
console.log(Lib.x + Lib.___)`,
              expected_output: '3',
              hints: [
                '输出 x 加 y',
                '访问 y 成员',
                '答案: y',
              ],
            },
          ],
          realWorldScenario:
            '给 Express 的 Request 对象扩展 user 字段：declare module "express" { interface Request { user?: User } }——声明合并让中间件挂载的 user 在所有路由处理器中类型可用，无需改 Express 源码。这是扩展第三方库类型的标准做法。',
        },
        {
          id: 'ts-ch7-l4',
          title: '模块解析',
          order: 3,
          content_md:
            '模块解析指 TS 如何根据 import 路径找到对应文件。经典策略：classic 与 node（默认）。' +
            '相对路径 `./x` 直接定位文件；非相对路径 `x` 沿 node_modules 逐级查找。' +
            '`baseUrl` 与 `paths` 配置路径别名，如 `@/*` 映射到 `src/*`，让深层导入更简洁。' +
          '\n\n' +
            '理解模块解析有助于排查"找不到模块"错误。常见问题：文件扩展名（TS 允许 .ts 但需配置）、' +
            'package.json 的 types/module 字段、node_modules 中类型定义的查找。' +
            '正确配置 tsconfig paths 并与 bundler（如 Vite）的别名同步，是中大型项目的基础。' +
          '\n\n' +
            '现代 TS 推荐 `moduleResolution: "bundler"`，与 Vite/webpack 等打包工具的解析行为一致。' +
            '路径别名让深层目录的导入从 ../../../components/Button 简化为 @/components/Button，' +
            '移动文件时导入路径不变，重构成本大幅降低。',
          examples: [
            {
              title: '相对路径导入（注释演示）',
              code: `// import { add } from "./utils/math"
// 相对路径：从当前文件所在目录查找 utils/math.ts

// 单文件演示
function add(a: number, b: number): number { return a + b }
console.log(add(1, 2))`,
              explanation:
                '相对路径以 ./ 或 ../ 开头，相对当前文件定位。TS 会尝试 .ts、.tsx、/index.ts 等扩展。' +
                '输出 3。',
            },
            {
              title: '别名导入（注释演示）',
              code: `// tsconfig: { "paths": { "@/*": ["src/*"] } }
// import { api } from "@/services/api"
// 别名让深层路径更短

// 单文件演示
const api = { fetch: () => "数据" }
console.log(api.fetch())`,
              explanation:
                'paths 配置把 @/* 映射到 src/*，导入路径变短且移动文件不影响。' +
                '需同步配置 bundler 的别名。输出 "数据"。',
            },
            {
              title: '模块解析顺序（注释演示）',
              code: `// import "lodash"
// 解析顺序：当前 node_modules -> 上级 node_modules -> ... -> /node_modules
// 找 package.json 的 types/module 字段定位类型

console.log("模块解析理解完毕")`,
              explanation:
                '非相对路径导入沿 node_modules 逐级向上查找，直到根目录。' +
                '库的 package.json 中 types 字段指向类型定义文件。输出 "模块解析理解完毕"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '单文件模拟模块：定义函数 sub(a, b) 返回 a - b，输出 sub(10, 3)。',
              starter_code: `function sub(a: number, b: number): number {
  return a - b
}
console.log(sub(10, ___))`,
              expected_output: '7',
              hints: [
                'sub(10, 3) 返回 7',
                '第二个参数是 3',
                '答案: 3',
              ],
            },
            {
              type: 'output-match',
              prompt: '单文件模拟别名模块：const svc = { get: () => "ok" }，输出 svc.get()。',
              starter_code: `const svc = { get: () => "ok" }
console.log(svc.___())`,
              expected_output: 'ok',
              hints: [
                '调用 get 方法',
                '方法名是 get',
                '答案: get',
              ],
            },
          ],
          realWorldScenario:
            '中大型项目配置 paths: { "@/*": ["src/*"] } 后，import { Button } from "@/components/Button" 代替 ../../../components/Button——移动文件时导入路径不变，重构成本大幅降低。配合 IDE 自动导入，开发体验极佳。',
        },
      ],
    },
    // ================================================================
    // 第 8 章：实战与工程实践
    // ================================================================
    {
      id: 'ts-ch8',
      title: '实战与工程实践',
      order: 7,
      lessons: [
        {
          id: 'ts-ch8-l1',
          title: 'tsconfig 配置',
          order: 0,
          content_md:
            'tsconfig.json 是 TypeScript 项目的配置核心，控制编译目标、模块系统、类型检查严格度等。' +
            '关键字段：target（JS 版本）、module（模块系统）、strict（严格模式总开关）、outDir（输出目录）、' +
            'include/exclude（编译范围）。lib 指定可用的类型库（如 ES2020、DOM）。' +
          '\n\n' +
            '合理的 tsconfig 能在编译期捕获更多错误，同时保证产物兼容目标环境。' +
            '例如 target: "ES2020" 保证输出代码兼容支持 ES2020 的环境，module: "ESNext" 配合打包工具。' +
            'sourceMap 开启便于调试，noEmit 配合打包工具只做类型检查。' +
          '\n\n' +
            '团队项目应统一 tsconfig，并通过 extends 继承基础配置。' +
            '开启 strict、noUnusedLocals、noImplicitReturns 等严格选项，在 CI 阶段拦截低质量代码——' +
            '任何隐式 any、未用变量、隐式 undefined 返回都会编译失败。',
          examples: [
            {
              title: '基础配置示例（注释展示 JSON）',
              code: `// tsconfig.json 示例
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "module": "ESNext",
//     "strict": true,
//     "outDir": "dist",
//     "sourceMap": true
//   },
//   "include": ["src"]
// }

console.log("tsconfig 配置完成")`,
              explanation:
                'target 决定输出的 JS 版本，strict 开启所有严格检查，outDir 指定输出目录，' +
                'include 限定编译范围。输出 "tsconfig 配置完成"。',
            },
            {
              title: '严格选项演示',
              code: `// noImplicitAny: 禁止隐式 any，参数必须标注
function len(s: string): number { return s.length }
console.log(len("hello"))`,
              explanation:
                'noImplicitAny 下函数参数必须显式标注类型，否则报错。这避免了 any 滥用导致的类型安全缺失。' +
                '输出 5。',
            },
            {
              title: '路径别名配置（注释展示）',
              code: `// {
//   "baseUrl": ".",
//   "paths": { "@/*": ["src/*"] }
// }

// 等效使用
const path = "src/index.ts"
console.log(path)`,
              explanation:
                'baseUrl 是路径解析的基准，paths 定义别名映射。配置后 import "@/services/api" 等效 src/services/api。' +
                '输出 "src/index.ts"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写函数 trim(s: string): string 返回 s.trim()。调用 trim("  hi  ") 输出结果。',
              starter_code: `function trim(s: string): string {
  return s.___()
}
console.log(trim("  hi  "))`,
              expected_output: 'hi',
              hints: [
                '字符串的去除首尾空格方法',
                '方法是 trim',
                '答案: trim',
              ],
            },
            {
              type: 'output-match',
              prompt: '写函数 parse(n: string): number 返回 parseInt(n)。调用 parse("42") 输出结果。',
              starter_code: `function parse(n: string): number {
  return parseInt(___)
}
console.log(parse("42"))`,
              expected_output: '42',
              hints: [
                'parseInt 接收字符串参数',
                '传入参数 n',
                '答案: n',
              ],
            },
          ],
          realWorldScenario:
            '团队项目通过统一的 tsconfig（开启 strict、noUnusedLocals、noImplicitReturns）在 CI 阶段拦截低质量代码——任何隐式 any、未用变量、隐式 undefined 返回都会编译失败，强制开发者写出类型完备的代码。',
        },
        {
          id: 'ts-ch8-l2',
          title: '严格模式',
          order: 1,
          content_md:
            '`strict: true` 一键开启所有严格检查：noImplicitAny、strictNullChecks、strictFunctionTypes、strictBindCallApply 等。' +
            'strictNullChecks 是最关键的子选项：null/undefined 不再自动属于任何类型，必须显式处理。' +
            '这从根本上消灭了"意外访问 null/undefined 的属性"这类最常见的运行时错误。' +
          '\n\n' +
            '严格模式下，可能为 null 的值需用 `?.`（可选链）、`!`（非空断言）或条件判断处理后才能访问属性。' +
            '`??`（空值合并）提供默认值。这些操作符让 null 处理既安全又简洁。' +
            '非空断言 `!` 要慎用——它绕过检查，若值实际为 null 会运行时崩溃。' +
          '\n\n' +
            '严格模式虽增加编写负担，但大幅减少运行时空指针错误，是生产项目的标配。' +
            '建议从一开始就开启 strict，避免后期迁移的痛苦。React 组件的可选 props、可选回调都依赖 strictNullChecks 保证安全。',
          examples: [
            {
              title: 'strictNullChecks',
              code: `function find(arr: number[], target: number): number | undefined {
  return arr.find(x => x === target)
}
const r = find([1, 2, 3], 2)
console.log(r !== undefined ? "找到:" + r : "未找到")`,
              explanation:
                'find 可能返回 undefined，r 类型是 number | undefined。直接 r.toString() 会报错，必须先判空。' +
                '输出 "找到:2"。',
            },
            {
              title: '可选链与空值合并',
              code: `interface User { profile?: { name?: string } }
const u: User = {}
const name = u.profile?.name ?? "匿名"
console.log(name)`,
              explanation:
                '?. 在 profile 为 undefined 时短路返回 undefined（不报错）。?? 在左侧为 null/undefined 时取右侧默认值。' +
                'u 无 profile，name 为 "匿名"。输出 "匿名"。',
            },
            {
              title: '非空断言',
              code: `function get(arr: number[]): number {
  return arr[0]!
}
console.log(get([10, 20]))`,
              explanation:
                '! 告诉 TS"我确信这里非空"，绕过 null 检查。arr[0] 类型是 number | undefined，加 ! 后视为 number。' +
                '若实际为空会运行时崩溃，慎用。输出 10。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '函数 find(arr: number[], t: number) 返回 number | undefined。' +
                '调用 find([1, 2, 3], 2) 后用三元判断：找到输出 "yes"，否则 "no"。',
              starter_code: `function find(arr: number[], t: number): number | undefined {
  return arr.find(x => x === t)
}
const r = find([1, 2, 3], 2)
console.log(r !== undefined ? ___ : "no")`,
              expected_output: 'yes',
              hints: [
                '找到时输出 "yes"',
                '三元为真分支返回 "yes"',
                '答案: "yes"',
              ],
            },
            {
              type: 'output-match',
              prompt: '接口 Opt { name?: string }，const o: Opt = {}。输出 o.name ?? "默认"。',
              starter_code: `interface Opt { name?: string }
const o: Opt = {}
console.log(o.name ___ "默认")`,
              expected_output: '默认',
              hints: [
                '空值合并运算符',
                '用 ?? 提供默认值',
                '答案: ??',
              ],
            },
          ],
          realWorldScenario:
            'React 组件 props 中可选回调 onClick?: () => void，严格模式下调用前必须 onClick?.()——避免 "onClick is not a function" 运行时错误，类型系统强制处理了缺失情况。这是 React props typing 的日常。',
        },
        {
          id: 'ts-ch8-l3',
          title: '装饰器基础',
          order: 2,
          content_md:
            '装饰器是一种用 `@表达式` 语法给类、方法、属性、参数添加额外行为的特殊声明。' +
            '装饰器本质是高阶函数：接收目标对象，返回修改后的目标。类装饰器接收构造函数，方法装饰器接收目标对象、键、描述符。' +
            '装饰器需要 experimentalDecorators 配置启用（TS 5 的 stage 3 装饰器标准略有不同）。' +
          '\n\n' +
            '装饰器在 NestJS、TypeORM、类验证（class-validator）等后端框架中广泛使用，是元编程的重要工具。' +
            '例如 NestJS 的 @Controller、@Get 声明路由，class-validator 的 @IsString 校验字段。' +
            '装饰器把"声明式"的元数据附加到类上，框架在运行时读取这些元数据自动执行逻辑。' +
          '\n\n' +
            '注：在线运行环境可能未启用装饰器配置，下方示例用"手动应用装饰器函数"的方式演示等效行为，' +
            '@ 语法在注释中展示。理解装饰器原理后，在真实项目中用 @ 语法即可。',
          examples: [
            {
              title: '手动类装饰器（兼容在线环境）',
              code: `// @log 装饰器语法（需 experimentalDecorators）
// @log
// class A {}

// 等效手动应用：
function log<T extends new (...args: any[]) => any>(Base: T): T {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args)
      console.log("实例化:" + (Base as any).name)
    }
  }
}
class A { constructor() {} }
const LoggedA = log(A)
new LoggedA()`,
              explanation:
                'log 装饰器返回一个子类，在构造时打印实例化日志。手动应用 const LoggedA = log(A) 等效于 @log。' +
                '输出 "实例化:A"。',
            },
            {
              title: '方法装饰器（手动应用）',
              code: `function trace(fn: Function): Function {
  return function (this: any, ...args: any[]) {
    console.log("调用方法")
    return fn.apply(this, args)
  }
}
class Calc {
  double(n: number): number { return n * 2 }
}
Calc.prototype.double = trace(Calc.prototype.double) as any
console.log(new Calc().double(5))`,
              explanation:
                'trace 包装原方法，调用时先打印日志再执行原逻辑。手动应用到 prototype 方法。' +
                '输出 "调用方法" 和 10。',
            },
            {
              title: '简单属性标记（手动）',
              code: `function readonly(target: any, key: string): void {
  console.log("标记只读:" + key)
}
class C {
  x: number = 1
}
readonly(C.prototype, "x")
console.log("装饰器演示完成")`,
              explanation:
                '属性装饰器接收目标对象和属性键。手动调用 readonly 模拟 @readonly 标记。' +
                '输出 "标记只读:x" 和 "装饰器演示完成"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写函数 callFirst(fn: Function) 返回新函数，调用时先 console.log("start") 再返回 fn()。' +
                'const hi = () => 1，调用 callFirst(hi)()，输出结果。',
              starter_code: `function callFirst(fn: Function): Function {
  return function (this: any) {
    console.log(___)
    return fn()
  }
}
const hi = () => 1
callFirst(hi)()`,
              expected_output: 'start',
              hints: [
                '先输出 "start"',
                'console.log 的参数是 "start"',
                '答案: "start"',
              ],
            },
            {
              type: 'output-match',
              prompt: '写函数 tag(name: string) 返回 "标签:" + name。调用 tag("a") 输出结果。',
              starter_code: `function tag(name: string): string {
  return "标签:" + ___
}
console.log(tag("a"))`,
              expected_output: '标签:a',
              hints: [
                '返回 "标签:" 加 name',
                '拼接 name 参数',
                '答案: name',
              ],
            },
          ],
          realWorldScenario:
            'NestJS 控制器用 @Controller("users") @Get(":id") 装饰器声明路由——装饰器把元数据附加到类/方法，框架启动时扫描这些元数据自动注册路由处理器，让 Web 服务的声明式编程成为可能。TypeORM 的 @Entity @Column 也同理。',
        },
        {
          id: 'ts-ch8-l4',
          title: '类型体操入门',
          order: 3,
          content_md:
            '类型体操指用 TypeScript 类型系统进行复杂类型计算，如递归、字符串解析、元组操作等。' +
            '经典技巧：递归类型（type Length<T extends any[]> = T["length"]）、条件类型递归、infer 提取。' +
            '字符串模板类型 Uppercase<S>、Lowercase<S> 等内置工具可操作字符串字面量类型。' +
          '\n\n' +
            '类型体操培养对类型系统的深度理解，能写出极其精确的类型约束。' +
            '例如类型安全的事件发射器用类型体操实现 emit<K extends keyof Events>(e: K, ...args: Args<Events[K]>)——' +
            '事件名和参数类型一一对应，类型错误的事件调用编译期暴露。这是"type-safe event emitter"的核心。' +
          '\n\n' +
            '生产中应以可读性为先，避免过度炫技。复杂的类型体操虽强大，但难以理解和维护。' +
            '好的工程实践是：核心工具类型做好注释，团队成员能看懂；过度复杂的类型推导考虑用代码生成或运行时校验替代。',
          examples: [
            {
              title: '元组长度',
              code: `type Length<T extends any[]> = T["length"]
type L = Length<[1, 2, 3]>
const l: L = 3
console.log(l)`,
              explanation:
                'T["length"] 取元组的长度字面量类型。Length<[1, 2, 3]> 求值为 3（字面量类型，非 number）。' +
                '输出 3。',
            },
            {
              title: '字符串大写类型',
              code: `type Upper = Uppercase<"hello">
const u: Upper = "HELLO"
console.log(u)`,
              explanation:
                'Uppercase 是内置工具类型，把字符串字面量类型转为大写。Upper 只能赋值为 "HELLO"。' +
                '输出 "HELLO"。',
            },
            {
              title: '递归推断数组元素',
              code: `type Flatten<T> = T extends Array<infer U> ? U : T
type F = Flatten<string[]>
const f: F = "x"
console.log(f)`,
              explanation:
                'infer U 捕获数组元素类型。Flatten<string[]> 求值为 string；非数组则原样返回。' +
                '输出 x。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 type Len<T extends any[]> = T["length"]。type N = Len<[1, 2, 3, 4]>，' +
                '声明 const n: N = 4，输出 n。',
              starter_code: `type Len<T extends any[]> = T["length"]
type N = Len<[1, 2, 3, 4]>
const n: N = ___
console.log(n)`,
              expected_output: '4',
              hints: [
                'N 是 4（元组长度）',
                '赋值数字 4',
                '答案: 4',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 type Up = Uppercase<"abc">。声明 const s: Up = "ABC"，输出 s。',
              starter_code: `type Up = Uppercase<"abc">
const s: Up = "ABC"
console.log(s)`,
              expected_output: 'ABC',
              hints: [
                'Uppercase<"abc"> 的结果是 "ABC"',
                's 的类型是字面量 "ABC"，只能赋值为 "ABC"',
                '答案: "ABC"',
              ],
            },
          ],
          realWorldScenario:
            '类型体操（type gymnastics）在构建类型安全的事件发射器（type-safe event emitter）时大放异彩。' +
            '通过条件类型与映射类型，可以让 emit("login", payload) 的 payload 类型与 "login" 事件严格绑定——' +
            '传错参数类型在编译期就被拦截，而不是运行时抛错。这种"在类型层面编程"的能力是 TypeScript 相对其他语言的核心优势，' +
            '广泛应用于 tRPC、Zod、Effect 等现代 TypeScript 框架的内部实现。',
        },
      ],
    },
  ],
}
