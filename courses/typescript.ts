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
            '## 概念详解\n\n' +
            'TypeScript 在 JavaScript 之上添加静态类型系统，变量、参数和返回值用 `: 类型` 进行标注。' +
            '基本类型包括 `string`、`number`、`boolean`，数组用 `number[]` 或 `Array<number>` 表示。' +
            '类型注解在编译后会被完全擦除，不增加任何运行时开销——TS 是"开发时"工具，编译后的 JS 与手写 JS 无异。\n\n' +
            'TS 的类型系统之所以重要，是因为 JS 是动态类型语言，类型错误只能在运行时暴露——' +
            '把字符串当数字相加、传错参数类型、访问不存在的属性，这些 bug 要等代码执行到才被发现，' +
            '调试成本高。TS 的静态类型在编写阶段（编辑器里）就能标红这些错误，大幅减少运行时 bug，' +
            '提升代码可维护性和团队协作效率。类型即文档——类型注解让函数签名自带说明，无需查文档。\n\n' +
            'TS 强大的类型推断让大多数时候无需手写类型——变量根据初值自动推断，但函数参数必须显式标注' +
            '（编译器无法猜测你的意图）。返回值类型通常可推断，但显式标注能在函数实现与调用签名偏离时及时报错，' +
            '推荐在公共 API 上标注返回类型。元组（tuple）`[string, number]` 表示固定长度和位置的数组，适合描述成对的数据。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 变量类型注解\n' +
            'let username: string = "小明"\n' +
            'let age: number = 25\n' +
            'let isActive: boolean = true\n' +
            'let nums: number[] = [1, 2, 3]       // 数字数组\n' +
            'let arr: Array<string> = ["a", "b"]  // 泛型数组写法\n' +
            'let pair: [string, number] = ["id", 1]  // 元组\n' +
            '\n' +
            '// 2. 函数参数与返回值\n' +
            'function add(a: number, b: number): number {\n' +
            '  return a + b\n' +
            '}\n' +
            '// 箭头函数\n' +
            'const greet = (name: string): string => "你好, " + name\n' +
            '\n' +
            '// 3. 类型推断（无需手写）\n' +
            'const count = 10        // 推断为 number\n' +
            'const name = "小明"     // 推断为 string\n' +
            'const items = [1, 2, 3] // 推断为 number[]\n' +
            '\n' +
            '// 4. void 与 never\n' +
            'function log(msg: string): void { console.log(msg) }  // 无返回值\n' +
            'function error(msg: string): never { throw new Error(msg) }  // 永不返回\n' +
            '```\n\n' +
            '## 基本类型对照表\n\n' +
            '| 类型 | 说明 | 示例 | 对应 JS |\n' +
            '|------|------|------|---------|\n' +
            '| `string` | 字符串 | `let s: string = "hi"` | string |\n' +
            '| `number` | 数字 | `let n: number = 42` | number |\n' +
            '| `boolean` | 布尔 | `let b: boolean = true` | boolean |\n' +
            '| `number[]` | 数字数组 | `let a: number[] = [1,2]` | Array |\n' +
            '| `Array<T>` | 泛型数组 | `Array<string>` | Array |\n' +
            '| `[T, U]` | 元组 | `[string, number]` | Array |\n' +
            '| `void` | 无返回值 | `function f(): void` | undefined |\n' +
            '| `never` | 永不返回 | `throw` / 无限循环 | - |\n' +
            '| `null` | null | `let n: null = null` | null |\n' +
            '| `undefined` | undefined | `let u: undefined` | undefined |\n' +
            '| `any` | 任意类型（慎用） | `let a: any = 1` | any |\n' +
            '| `unknown` | 安全的 any | `let u: unknown` | any |\n\n' +
            '## 代码示例\n\n' +
            '```ts\n' +
            '// 1. 基本类型标注\n' +
            'let username: string = "小明"\n' +
            'let age: number = 25\n' +
            'let isActive: boolean = true\n' +
            'console.log(username, age, isActive)  // 小明 25 true\n' +
            '// age = "abc"  // 报错：不能将 string 赋给 number\n' +
            '```\n\n' +
            '```ts\n' +
            '// 2. 函数参数与返回值类型\n' +
            'function add(a: number, b: number): number {\n' +
            '  return a + b\n' +
            '}\n' +
            'console.log(add(3, 4))  // 7\n' +
            '// add("3", 4)  // 报错："3" 不是 number\n' +
            '// 函数参数必须显式标注，返回值可推断\n' +
            'const multiply = (a: number, b: number) => a * b  // 返回值推断为 number\n' +
            '```\n\n' +
            '```ts\n' +
            '// 3. 类型推断与数组元组\n' +
            'const count = 10          // 推断为 number\n' +
            'const names: string[] = ["张三", "李四"]\n' +
            'const pair: [string, number] = ["id", 1]   // 元组\n' +
            'console.log(count)        // 10\n' +
            'console.log(names.length) // 2\n' +
            'console.log(pair[1])      // 1\n' +
            '// pair[0] = 99  // 报错：位置 0 须是 string\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **函数参数必须显式标注**：编译器无法从调用处推断参数意图，参数类型必须手写。' +
            '返回值可推断，但公共 API 推荐标注返回类型。\n' +
            '2. **类型注解编译后被擦除**：TS 编译为 JS 后类型完全消失，不增加运行时开销。' +
            '因此 TS 类型不能用于运行时判断（`typeof x === "number"` 是 JS 的 typeof，不是 TS 类型）。\n' +
            '3. **any 是逃生舱但应避免**：`any` 关闭类型检查，等于回到 JS。用 `unknown` 替代——' +
            '它接收任何值但使用前必须类型缩小（typeof/instanceof）。\n' +
            '4. **元组 vs 数组**：元组 `[string, number]` 固定长度和每位置类型；' +
            '数组 `number[]` 长度可变且元素同类型。元组适合成对数据（如 [key, value]）。\n' +
            '5. **let vs const 类型推断**：`let x = 10` 推断为 number（可变）；' +
            '`const x = 10` 推断为字面量类型 10（不可变）。`const` 的字面量推断是细节考点。\n' +
            '6. **严格模式**：`strict: true` 开启后 null/undefined 不能赋给其他类型，' +
            '需用联合类型 `string | null`。推荐始终开启严格模式。\n\n' +
            '## 实际应用\n\n' +
            '在重构遗留 JavaScript 项目时，逐步给函数参数和返回值添加类型注解是引入 TypeScript 的第一步——' +
            '能在不改运行逻辑的前提下立刻发现参数传错的 bug。配合编辑器红波浪线，重构时的回归错误大幅减少。' +
            'API 响应类型化：`interface User { id: number; name: string }`，让 `res.data.name` 有自动补全和类型检查。\n\n' +
            '类型注解是 TS 的核心价值：编辑器自动补全（输入 `user.` 弹出属性列表）、' +
            '重构安全（改属性名后所有引用标红）、接口契约（函数签名即文档）。' +
            '大型项目中，类型系统是团队协作的基石——它让"这个函数接收什么、返回什么"一目了然。\n\n' +
            '## 扩展知识\n\n' +
            '- **字面量类型**：`let x: "hello" | "world"` 限制为特定字符串，常用于联合类型和映射。\n' +
            '- **unknown vs any**：unknown 是类型安全的 any，使用前必须类型缩小；any 完全跳过检查。\n' +
            '- **类型断言**：`value as string` 或 `<string>value` 告诉编译器"我知道类型"，但应少用（绕过检查）。\n' +
            '- **const 断言**：`const x = [1, 2] as const` 推断为只读元组 `readonly [1, 2]`。\n' +
            '- **类型别名 vs interface**：`type` 可定义联合、交叉、原始类型别名；interface 专注对象形状，支持声明合并。',
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
            '## 概念详解\n\n' +
            '接口（interface）是 TypeScript 描述"对象形状"的核心工具，它列出属性名、类型以及可选/只读修饰，' +
            '形成一份契约：传入的对象必须满足这个结构，多余或缺失的必填属性都会在编译期报错。' +
            '与 Java/C# 的接口不同，TS 的接口属于"结构类型系统"——只要形状匹配就算兼容，无需显式 `implements`，这叫做"鸭子类型"。\n\n' +
            '接口存在的意义有三个：一是给"匿名对象字面量"一个可复用的名字，避免到处写 `typeof`；' +
            '二是约束函数参数和返回值，让重构和调用有 IDE 提示；' +
            '三是作为类型组合的基本单位，通过 `extends` 把多个小接口拼成大形状，比 type 联合更易读。' +
            '当你写 React 组件、定义 API 响应、设计函数签名时，几乎都离不开接口。\n\n' +
            '接口描述的是"形状"而非"实例"——它本身在运行时会被完全擦除，编译后的 JS 里看不到任何 interface 痕迹。' +
            '这意味着接口零运行时开销，纯粹是开发期的类型安全保障。当不确定对象结构、需要复用类型、或想表达"有这些方法的对象"时，就该用接口。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 基本接口：列出属性和类型\n' +
            'interface User {\n' +
            '  name: string\n' +
            '  age: number\n' +
            '  email?: string          // 可选属性\n' +
            '  readonly id: number     // 只读属性\n' +
            '}\n\n' +
            '// 2. 描述函数形状：在接口里写调用签名\n' +
            'interface Comparator {\n' +
            '  (a: number, b: number): number\n' +
            '  description?: string    // 函数对象上的额外属性\n' +
            '}\n\n' +
            '// 3. 继承：把多个接口组合起来\n' +
            'interface Animal { name: string }\n' +
            'interface Dog extends Animal { bark(): void }\n\n' +
            '// 4. 类实现接口\n' +
            'class Husky implements Dog {\n' +
            '  name = "二哈"\n' +
            '  bark() { console.log("汪！") }\n' +
            '}\n\n' +
            '// 5. 索引签名：允许任意键\n' +
            'interface StringMap {\n' +
            '  [key: string]: string\n' +
            '}\n' +
            '```\n\n' +
            '## 接口修饰符与关键字对照表\n\n' +
            '| 语法 | 含义 | 示例 | 编译期/运行时 |\n' +
            '|------|------|------|---------------|\n' +
            '| `prop: T` | 必填属性 | `name: string` | 编译期检查 |\n' +
            '| `prop?: T` | 可选属性 | `email?: string` | 编译期检查 |\n' +
            '| `readonly prop: T` | 只读属性 | `readonly id: number` | 编译期检查 |\n' +
            '| `[key: T]: U` | 索引签名 | `[key: string]: any` | 编译期检查 |\n' +
            '| `(args): R` | 调用签名 | `(a: number): void` | 编译期检查 |\n' +
            '| `new (args): T` | 构造签名 | `new (s: string): T` | 编译期检查 |\n' +
            '| `extends A, B` | 接口继承 | `interface C extends A, B` | 编译期检查 |\n' +
            '| `implements I` | 类实现接口 | `class X implements I` | 编译期检查 |\n' +
            '| 声明合并 | 同名自动合并 | 两个同名 interface | 编译期合并 |\n' +
            '| 全部 | 运行时擦除 | 编译后消失 | 零运行时开销 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：可选属性与多余属性检查。\n' +
            '```ts\n' +
            'interface User {\n' +
            '  name: string\n' +
            '  age: number\n' +
            '  email?: string\n' +
            '}\n\n' +
            '// 直接传字面量，多余属性会报错\n' +
            'function greet(u: User) { return `你好,${u.name}` }\n' +
            'console.log(greet({ name: "小明", age: 20 }))           // OK，email 可选\n' +
            '// greet({ name: "小红", age: 18, gender: "f" })        // 报错：gender 不在接口里\n' +
            '// greet({ name: "小刚" })                              // 报错：缺 age\n' +
            '```\n\n' +
            '示例二：只读属性与索引签名。\n' +
            '```ts\n' +
            'interface Point { readonly x: number; readonly y: number }\n' +
            'const p: Point = { x: 1, y: 2 }\n' +
            '// p.x = 5  // 报错：readonly 不能改\n' +
            'console.log(p.x + p.y)\n\n' +
            'interface Config { [key: string]: string | number; env: string }\n' +
            'const cfg: Config = { env: "prod", port: 3000, host: "0.0.0.0" }\n' +
            'console.log(cfg.env, cfg.port)\n' +
            '```\n\n' +
            '示例三：接口继承与声明合并。\n' +
            '```ts\n' +
            'interface Shape { color: string }\n' +
            'interface Shape { size: number }   // 同名合并\n' +
            'interface Square extends Shape { side: number }\n\n' +
            'const sq: Square = { color: "red", size: 10, side: 4 }\n' +
            'console.log(sq.color, sq.size, sq.side)\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **多余属性检查只对字面量生效**：直接传 `{ name: "x", extra: 1 }` 会报错，但先赋值给变量再传就不会，这是 TS 有意为之的"宽松"行为。\n' +
            '2. **可选属性访问要小心**：`email?: string` 在使用 `u.email.length` 时会提示可能 undefined，需用 `?.` 或判空。\n' +
            '3. **readonly 只在编译期生效**：运行时属性仍然可改，无法防御恶意代码；要真正不可变用 `Object.freeze`。\n' +
            '4. **索引签名会限制其他属性**：`[key: string]: number` 接口里所有具名属性也必须是 number 或其子类型。\n' +
            '5. **interface vs type**：两者都能描述对象形状，interface 支持声明合并、更易扩展，type 更适合联合和交叉；团队应统一风格。\n' +
            '6. **implements 不检查私有成员**：类实现接口时只校验公开成员，私有字段不参与兼容性检查。\n\n' +
            '## 实际应用\n\n' +
            '在 React 项目里，组件 props 几乎都用 interface 描述：`interface ButtonProps { label: string; onClick: () => void; disabled?: boolean }`，' +
            '让组件 API 在编辑器里有自动补全和类型检查，拼错 prop 名或传错类型立刻报错。\n\n' +
            '在 API 层，后端返回的数据结构用 interface 描述，配合 axios/fetch 的泛型 `axios.get<User>("/api/user")`，' +
            '让 `.then(user => user.name)` 全程有类型提示，避免拼错字段名。' +
            '当后端字段变动时，改一处 interface，所有调用点立即标红，是大型项目重构的基石。\n\n' +
            '## 扩展知识\n\n' +
            '- **类型兼容性**：TS 采用结构子类型，只要字段齐全就兼容，不需要显式继承；这叫"鸭子类型"。\n' +
            '- **接口继承多个**：`interface C extends A, B` 可一次继承多个接口，把分散的形状组合起来。\n' +
            '- **可调用 + 属性混合**：函数对象上的额外属性（如 `description`）也可写进接口，常见于库的设计。\n' +
            '- **构造签名**：`interface Clock { new (h: number, m: number): Date }` 描述可 new 的类，用于工厂模式。\n' +
            '- **泛型接口**：`interface Box<T> { value: T }` 让接口可复用，是 Container、Repository 等抽象的基础。',
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
            '## 概念详解\n\n' +
            '`type`（类型别名）是 TypeScript 给"任何类型"起名字的关键字——基本类型、联合类型、对象类型、函数类型、元组、字面量，统统可以命名。' +
            '与 interface 一样，它能在多数对象场景下描述形状；但 type 还能表达联合、交叉、条件、模板字面量等复杂类型，而 interface 只能描述对象和函数形状。\n\n' +
            'type 存在的意义在于"复用"和"组合"。当一段类型表达式反复出现（如 `string | number | null`），起个名字能让代码瞬间清爽；' +
            '当需要把多个类型合并成新的约束（如 `User & { token: string }`），type 是唯一的工具。' +
            '它也是工具类型（Utility Types）的基础——`Partial<T>`、`Pick<T,K>`、`Omit<T,K>` 本质上都是 type 别名。\n\n' +
            'interface 与 type 的核心差异在于：interface 支持声明合并（同名自动合并成员），type 不行——重复定义同名 type 会报错。' +
            '选择经验：描述对象或类的公开形状优先用 interface（可被 implements/extends，可合并扩展），' +
            '需要联合、工具类型、元组等复杂组合时用 type。两者在实际项目中经常混用，理解差异才能选对工具。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 基本别名\n' +
            'type ID = string | number\n' +
            'type Score = number\n' +
            'type Callback = (msg: string) => void\n\n' +
            '// 2. 对象形状（与 interface 等效）\n' +
            'type Point = { x: number; y: number }\n\n' +
            '// 3. 元组：固定长度与类型\n' +
            'type Pair = [string, number]\n\n' +
            '// 4. 字面量联合\n' +
            'type Status = "idle" | "loading" | "done" | "error"\n\n' +
            '// 5. 交叉类型：合并要求\n' +
            'type WithTimestamp = { createdAt: string }\n' +
            'type User = { id: ID; name: string } & WithTimestamp\n\n' +
            '// 6. 条件类型（高级）\n' +
            'type IsString<T> = T extends string ? "yes" : "no"\n' +
            '```\n\n' +
            '## type 与 interface 能力对照表\n\n' +
            '| 能力 | type | interface | 说明 |\n' +
            '|------|------|----------|------|\n' +
            '| 描述对象形状 | ✅ | ✅ | 两者等效 |\n' +
            '| 描述函数类型 | ✅ | ✅ | type 更简洁 |\n' +
            '| 联合类型 `A \\| B` | ✅ | ❌ | type 专属 |\n' +
            '| 交叉类型 `A & B` | ✅ | ❌ | type 专属（interface 靠 extends） |\n' +
            '| 元组类型 `[A, B]` | ✅ | ❌ | type 专属 |\n' +
            '| 字面量联合 `"a" \\| "b"` | ✅ | ❌ | type 专属 |\n' +
            '| 条件类型 `T extends U ? X : Y` | ✅ | ❌ | type 专属 |\n' +
            '| 模板字面量类型 | ✅ | ❌ | type 专属 |\n' +
            '| 声明合并 | ❌ | ✅ | interface 专属 |\n' +
            '| 类 implements | ✅ | ✅ | 两者都行 |\n' +
            '| 继承 | 靠交叉 `&` | 靠 `extends` | 风格不同 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：联合与字面量类型，构建有限状态。\n' +
            '```ts\n' +
            'type ID = string | number\n' +
            'type Status = "idle" | "loading" | "done" | "error"\n\n' +
            'function setStatus(s: Status) { console.log("状态切换到", s) }\n' +
            'setStatus("loading")\n' +
            '// setStatus("paused")  // 报错：paused 不在联合里\n' +
            '```\n\n' +
            '示例二：交叉类型组合多份契约。\n' +
            '```ts\n' +
            'type Timestamp = { createdAt: string; updatedAt: string }\n' +
            'type Entity = { id: number }\n' +
            'type Record = Entity & Timestamp\n\n' +
            'const r: Record = { id: 1, createdAt: "2026-01-01", updatedAt: "2026-07-01" }\n' +
            'console.log(r.id, r.createdAt)\n' +
            '```\n\n' +
            '示例三：函数类型别名 + 元组。\n' +
            '```ts\n' +
            'type Handler = (msg: string, code: number) => boolean\n' +
            'type Pair = [string, number]\n\n' +
            'const ok: Handler = (msg, code) => code === 0\n' +
            'const p: Pair = ["age", 18]\n' +
            'console.log(ok("成功", 0), p[0], p[1])\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **type 不能重复定义**：同名 type 会报 "Duplicate identifier"，而 interface 同名会合并——扩展第三方类型时这成了关键差异。\n' +
            '2. **对象形状 type 与 interface 等效但风格不同**：type 用 `=` 和分号，interface 用 `{}` 块；团队应统一选择。\n' +
            '3. **交叉类型会有冲突**：`{ a: string } & { a: number }` 在理论上是 never，实际中要避免设计冲突的交叉。\n' +
            '4. **联合类型用 `\\|`，注意优先级**：`string | number[]` 是 `string` 或 `number 数组`，要 `(string | number)[]` 才是数组。\n' +
            '5. **type 同样在运行时擦除**：所有 type 别名编译后消失，无法在运行时 `typeof` 判断联合分支，需用类型守卫。\n' +
            '6. **type 可被 `typeof` 与 `keyof` 组合**：`type Keys = keyof User` 是工具类型生成的起点。\n\n' +
            '## 实际应用\n\n' +
            '在 API 层用 type 给后端返回的复杂 JSON 结构起名（如 `type UserDTO = { id: string; profile: { name: string; age: number } }`），' +
            '让前后端契约一目了然，重构时类型变更能瞬间定位所有受影响的代码。\n\n' +
            '在状态管理中，type 联合字面量是表达"有限状态机"的最佳工具：' +
            '`type RequestState = { status: "idle" } | { status: "loading" } | { status: "done"; data: User[] } | { status: "error"; error: string }`，' +
            '这种"可辨识联合"让 TS 自动收窄类型，根据 status 访问对应字段时无需手动断言。\n\n' +
            '## 扩展知识\n\n' +
            '- **工具类型**：`Partial<T>`、`Required<T>`、`Pick<T,K>`、`Omit<T,K>`、`Record<K,V>` 等内置 type，是日常开发的高频工具。\n' +
            '- **映射类型**：`type Readonly<T> = { readonly [K in keyof T]: T[K] }`，可批量改造现有类型。\n' +
            '- **条件类型**：`T extends U ? X : Y` 是构建工具类型的基石，配合 `infer` 提取类型参数。\n' +
            '- **模板字面量类型**：`type EventName = \\`on${Capitalize<Event>}\\`` 可批量生成事件名字符串类型。\n' +
            '- **`as const` 断言**：让对象/数组推断出字面量类型，再配合 `typeof` 可零成本导出联合，是替代手写 enum 的现代写法。',
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
            '## 概念详解\n\n' +
            '字面量类型把"值本身"当作类型，如 `"asc" | "desc"`、`1 | 2 | 3`、`true`，精确限制变量只能取特定值。' +
            '联合类型 `A | B` 表示值可以是 A 或 B，配合字面量类型能表达枚举式取值，比 enum 更轻量、无运行时开销。' +
            '当联合的成员是对象时，通常加一个公共字面量字段（标签）便于类型守卫区分，这就是"可辨识联合"的基础。\n\n' +
            '字面量类型存在的意义是"收窄取值范围"。普通的 `string` 意味着任意字符串，拼写错误不会被发现；' +
            '而 `"GET" | "POST" | "PUT" | "DELETE"` 限制了可选值，拼成 `"PUTT"` 会编译报错，编辑器还能自动提示可选值。' +
            '它常用于配置项、状态机状态、API 方法名、表单 size、主题色等"有限取值"场景。\n\n' +
            '联合类型则让一个变量在不同分支表现不同类型，配合类型守卫（typeof、in、instanceof、字面量比较）可以安全处理。' +
            '注意：联合类型只能访问所有成员共有的属性——`string | number` 上调用 `.length` 会报错，因为 number 没有 length；' +
            '需要先用类型守卫收窄到具体成员，才能访问其特有属性。这是初学者最常踩的坑之一。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 字符串字面量联合\n' +
            'type Direction = "left" | "right" | "up" | "down"\n' +
            'type Method = "GET" | "POST" | "PUT" | "DELETE"\n\n' +
            '// 2. 数字字面量联合\n' +
            'type Dice = 1 | 2 | 3 | 4 | 5 | 6\n' +
            'type Bit = 0 | 1\n\n' +
            '// 3. 布尔字面量（其实就是 true | false）\n' +
            'type Truthy = true\n\n' +
            '// 4. 混合联合\n' +
            'type ID = string | number\n' +
            'type Response = User | Error | null\n\n' +
            '// 5. 可辨识联合：带公共标签字段\n' +
            'type Shape =\n' +
            '  | { kind: "circle"; radius: number }\n' +
            '  | { kind: "square"; size: number }\n' +
            '  | { kind: "rect"; w: number; h: number }\n' +
            '```\n\n' +
            '## 字面量与联合类型关键字对照表\n\n' +
            '| 形式 | 写法 | 含义 | 典型场景 |\n' +
            '|------|------|------|----------|\n' +
            '| 字符串字面量 | `"asc"` | 仅允许该字符串 | 配置项、状态 |\n' +
            '| 数字字面量 | `0 \\| 1` | 仅允许该数字 | 枚举替代 |\n' +
            '| 字面量联合 | `"a" \\| "b" \\| "c"` | 有限取值集 | API 方法、size |\n' +
            '| 类型联合 | `string \\| number` | 多类型之一 | ID、响应 |\n' +
            '| 可辨识联合 | `{ kind: "x"; ... } \\| { kind: "y"; ... }` | 带标签的对象联合 | 状态机、AST |\n' +
            '| 交叉类型 | `A & B` | 同时满足 A 和 B | 组合契约 |\n' +
            '| `null` / `undefined` 联合 | `T \\| null` | 可空值 | API 响应、可选属性 |\n' +
            '| 类型守卫收窄 | `if (typeof x === "string")` | 收窄到具体成员 | 访问特有属性 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：字面量联合限制取值，编辑器自动补全。\n' +
            '```ts\n' +
            'type Direction = "left" | "right" | "up" | "down"\n' +
            'function move(d: Direction) { console.log("向", d, "移动") }\n' +
            'move("left")\n' +
            '// move("leftt")  // 报错：leftt 不在联合里\n' +
            '```\n\n' +
            '示例二：可辨识联合 + 类型守卫，安全访问分支字段。\n' +
            '```ts\n' +
            'type Shape =\n' +
            '  | { kind: "circle"; radius: number }\n' +
            '  | { kind: "square"; size: number }\n\n' +
            'function area(s: Shape): number {\n' +
            '  if (s.kind === "circle") return Math.PI * s.radius ** 2  // 这里 s 是 circle\n' +
            '  return s.size * s.size                                    // 这里 s 是 square\n' +
            '}\n' +
            'console.log(area({ kind: "circle", radius: 2 }).toFixed(2))\n' +
            '```\n\n' +
            '示例三：联合类型收窄——只有共有属性可直接访问。\n' +
            '```ts\n' +
            'function format(v: string | number): string {\n' +
            '  // v.length  // 报错：number 没有 length\n' +
            '  if (typeof v === "string") return v.toUpperCase()  // 这里 v 是 string\n' +
            '  return v.toFixed(2)                                // 这里 v 是 number\n' +
            '}\n' +
            'console.log(format("abc"), format(3.14159))\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **联合只能访问共有属性**：`string | number` 上不能直接 `.length`，要用类型守卫收窄后再访问。\n' +
            '2. **字面量联合拼错会报错**：`"GET" | "POST"` 下传 `"PUTT"` 直接编译失败，这正是它比 string 安全的原因。\n' +
            '3. **可辨识联合的标签必须字面量**：`kind: string` 不行，必须是 `kind: "circle"` 这样的字面量类型才能收窄。\n' +
            '4. **`as const` 推断字面量**：`const x = "hi"` 推断为 `"hi"`，但 `let x = "hi"` 推断为 `string`；用 `as const` 强制字面量。\n' +
            '5. **联合类型与 `null`**：`User | null` 表示可能为空，访问属性前要判空，配合 `?.` 更安全。\n' +
            '6. **穷尽检查**：在 switch 可辨识联合时，default 分支赋值给 `never` 可让 TS 强制覆盖所有分支，新增分支时编译报错提醒。\n\n' +
            '## 实际应用\n\n' +
            '表单组件的 size 属性用字面量联合 `type Size = "small" | "medium" | "large"` 限制取值，编辑器自动提示可选值，拼错立刻报错——比用 string 安全得多。' +
            'HTTP 方法 `type Method = "GET" | "POST" | "PUT" | "DELETE"` 也是经典用法。\n\n' +
            '可辨识联合是 Redux/状态机的核心模式：`type Action = { type: "fetch" } | { type: "success"; data: User[] } | { type: "error"; error: string }`，' +
            'reducer 里根据 `action.type` 自动收窄，安全访问 `action.data` 或 `action.error`，无需手动断言。' +
            '编译器还能做"穷尽检查"——新增一个 action 类型却忘了处理，default 分支会报错。\n\n' +
            '## 扩展知识\n\n' +
            '- **`as const` 断言**：让对象/数组推断出字面量类型，`const colors = ["red", "green"] as const` 得到 `["red", "green"]` 而非 `string[]`。\n' +
            '- **`typeof` + `as const` 导出联合**：`type Color = typeof colors[number]` 可从常量数组反推字面量联合，是替代 enum 的现代写法。\n' +
            '- **模板字面量类型**：`type EventName = \\`on${Capitalize<Event>}\\``，可批量生成事件名字符串类型。\n' +
            '- **`never` 与穷尽检查**：把 switch 的 default 赋值给 `never` 类型变量，TS 会在遗漏分支时报错。\n' +
            '- **联合 vs 枚举**：字面量联合无运行时开销、tree-shaking 友好；enum 会生成真实对象，但支持反向映射，按需选择。',
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
            '## 概念详解\n\n' +
            '函数类型注解是 TypeScript 给 JavaScript 函数添加的"签名契约"，包括参数类型和返回值类型：`function f(a: number): string`。' +
            '返回值类型用 `: 类型` 标在参数列表之后；完整的函数类型用 `(参数: 类型) => 返回类型` 描述，可作为变量、参数、属性的标注。' +
            '`void` 表示函数没有返回值（或返回值被忽略），常用于回调、日志、事件处理函数。\n\n' +
            '函数类型存在的意义是"约束调用方与实现方"。调用方必须按签名传参，多传、少传、传错类型都会编译报错；' +
            '实现方返回值不符合标注也会报错。这让函数变成一份可执行的契约，重构时签名变更能瞬间定位所有不兼容的调用点。' +
            '函数作为参数（高阶函数）是函数式编程的核心，把回调类型写清楚，map、filter、reduce 等操作的类型就能自动推断。\n\n' +
            '箭头函数与 function 声明在类型上等价，都遵循相同的签名规则。返回值类型多数情况可由 TS 推断，' +
            '但在递归函数、复杂分支、公共 API、库的导出函数中显式标注更有价值——它能在实现意外返回错误类型时立即报警，' +
            '也让 IDE 在调用处显示精确的返回类型，避免 `any` 污染下游代码。建议公共函数和复杂逻辑都显式标返回类型。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 函数声明：参数 + 返回值类型\n' +
            'function greet(name: string): string {\n' +
            '  return "你好, " + name\n' +
            '}\n\n' +
            '// 2. 箭头函数 + 类型注解\n' +
            'const add = (a: number, b: number): number => a + b\n\n' +
            '// 3. 完整函数类型别名\n' +
            'type Mapper<T, U> = (item: T, index: number) => U\n' +
            'const toLen: Mapper<string, number> = (s) => s.length\n\n' +
            '// 4. void 返回类型\n' +
            'function log(msg: string): void { console.log(msg) }\n\n' +
            '// 5. 可选参数、默认值、剩余参数\n' +
            'function fmt(s: string, prefix?: string, sep = "-", ...tags: string[]): string {\n' +
            '  return (prefix ?? "") + sep + s + tags.join(",")\n' +
            '}\n\n' +
            '// 6. 函数重载：多签名 + 实现\n' +
            'function parse(s: string): number\n' +
            'function parse(s: string, radix: number): number\n' +
            'function parse(s: string, radix = 10): number { return parseInt(s, radix) }\n' +
            '```\n\n' +
            '## 函数类型关键字与修饰符对照表\n\n' +
            '| 语法 | 含义 | 示例 | 备注 |\n' +
            '|------|------|------|------|\n' +
            '| `param: T` | 必填参数 | `name: string` | 调用必须传 |\n' +
            '| `param?: T` | 可选参数 | `prefix?: string` | 必在必填之后 |\n' +
            '| `param = 默认值` | 默认值参数 | `sep = "-"` | 不传则用默认 |\n' +
            '| `...args: T[]` | 剩余参数 | `...tags: string[]` | 收集多余实参 |\n' +
            '| `: T`（返回） | 返回值类型 | `: string` | 标在参数列表后 |\n' +
            '| `: void` | 无返回值 | `: void` | 回调常见 |\n' +
            '| `: never` | 永不返回 | `: never` | 抛错/死循环 |\n' +
            '| `(a: T) => U` | 函数类型 | `Mapper<T, U>` | 用于变量/参数 |\n' +
            '| 重载 | 多签名 | `function f(s: string): number` | 实现签名对外不可见 |\n' +
            '| `this: T` | 显式 this | `this: User` | 不算正式参数 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：参数、返回值与 void。\n' +
            '```ts\n' +
            'function greet(name: string): string { return "你好, " + name }\n' +
            'function log(msg: string): void { console.log(msg) }\n' +
            'console.log(greet("TypeScript"))\n' +
            'log("无返回值")\n' +
            '// function bad(): void { return 1 }  // 报错：void 不能 return 值\n' +
            '```\n\n' +
            '示例二：高阶函数 + 回调类型自动推断。\n' +
            '```ts\n' +
            'function apply(arr: number[], fn: (n: number) => number): number[] {\n' +
            '  return arr.map(fn)\n' +
            '}\n' +
            'console.log(apply([1, 2, 3], n => n * 2))  // [ 2, 4, 6 ]\n' +
            '```\n\n' +
            '示例三：函数重载与可选/默认/剩余参数。\n' +
            '```ts\n' +
            'function fmt(s: string, prefix?: string, sep = "-", ...tags: string[]): string {\n' +
            '  return (prefix ?? "") + sep + s + (tags.length ? "[" + tags.join(",") + "]" : "")\n' +
            '}\n' +
            'console.log(fmt("data"))                  // -data\n' +
            'console.log(fmt("data", "log"))           // log-data\n' +
            'console.log(fmt("data", "log", ":", "a", "b"))  // log:data[a,b]\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **可选参数必须在必填之后**：`f(a?, b)` 报错，正确是 `f(a, b?)`；默认值参数同理。\n' +
            '2. **void 函数可 return undefined**：`void` 表示"返回值被忽略"，所以 `return undefined` 不报错，但 `return 1` 报错。\n' +
            '3. **回调返回 void 的特殊规则**：类型为 `() => void` 的回调里可以 return 任何值，TS 会忽略——这让 `forEach` 等回调更灵活。\n' +
            '4. **重载的签名顺序**：具体签名要在宽泛签名之前，否则永远匹配不到具体分支；实现签名对外不可见。\n' +
            '5. **箭头函数 vs function 的 this**：箭头函数没有自己的 this，function 声明有——类型注解相同时行为可能不同。\n' +
            '6. **显式返回类型防止意外 widening**：`function f() { return true }` 推断为 boolean，标 `: true` 可保持字面量类型。\n\n' +
            '## 实际应用\n\n' +
            '数组的 map/filter/reduce 都接受类型化的回调，例如 `users.map((u: User) => u.name)`——TS 能保证回调参数类型正确，并推断出返回数组类型，避免运行时 undefined 错误。这是类型安全 API 客户端的基础。\n\n' +
            '在库与 SDK 设计中，公共函数显式标注返回类型是行业惯例。React 的 `useState<T>` 返回 `[T, Dispatch<SetStateAction<T>>]`，' +
            '让调用方拿到精确的状态类型；express 的 `(req: Request, res: Response, next: NextFunction) => void` 让中间件有完整类型提示。' +
            '重载在 fetch 封装中常见：传 `{ json: true }` 返回对象，否则返回字符串，靠重载签名区分。\n\n' +
            '## 扩展知识\n\n' +
            '- **`this` 参数**：`function f(this: User, ...)` 显式声明 this 类型，配合 `--noImplicitThis` 防 this 类型丢失。\n' +
            '- **函数重载**：多签名 + 一个实现签名，常用于"同一函数多种调用形态"，如 jQuery API。\n' +
            '- **泛型函数**：`function id<T>(x: T): T` 让函数保留入参类型，是工具函数复用的关键。\n' +
            '- **`never` 返回类型**：用于永远抛错或死循环的函数，TS 会据此做收窄（如 `assertNever`）。\n' +
            '- **`Function` 类型**：避免直接用 `Function`（不安全，any-like），改用具体函数类型或 `(...args: any[]) => unknown`。',
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
            '## 概念详解\n\n' +
            '可选参数用 `?` 标记（如 `greeting?: string`），必须放在必填参数之后；调用时可省略，函数内得到 `undefined`。' +
            '默认参数用 `= 默认值`（如 `exp: number = 2`），调用时不传则用默认值；默认参数本身可选，无需再加 `?`。' +
            '默认参数的类型由默认值推断，也可显式标注。两者都让函数 API 更灵活，同时保持类型安全。\n\n' +
            '可选参数与默认参数的核心区别在于"函数内的类型"：可选参数在函数内是 `类型 | undefined`，必须处理 undefined 情况；' +
            '默认参数在函数内始终是具体类型（因为缺失时已有默认值），用起来更方便。' +
            '经验法则：优先用默认参数，除非需要区分"未传"和"传了 undefined"两种语义——前者用默认值，后者走特殊逻辑。\n\n' +
            '在实际 API 设计中，默认参数让常用调用简洁，例如 `request(url, method = "GET")`，绝大多数 GET 请求只需传 url，少数需要其他方法时再覆盖默认值。' +
            '可选参数则常用于"配置对象"的某个字段，如 `fetch(url, { timeout })` 里 timeout 可选、缺省时由系统决定。' +
            '理解两者的边界，能让函数签名既简洁又表达力强。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 可选参数：用 ? 标记，必须在必填之后\n' +
            'function greet(name: string, greeting?: string): string {\n' +
            '  return (greeting ?? "你好") + ", " + name\n' +
            '}\n\n' +
            '// 2. 默认参数：用 = 默认值，本身可选\n' +
            'function pow(base: number, exp: number = 2): number {\n' +
            '  return base ** exp\n' +
            '}\n\n' +
            '// 3. 默认参数显式标注类型\n' +
            'function create(name: string, role: string = "user"): string {\n' +
            '  return `${name} (${role})`\n' +
            '}\n\n' +
            '// 4. 区分"未传"与"传 undefined"\n' +
            'function update(id: number, data?: { name?: string }): void {\n' +
            '  if (data === undefined) return       // 完全没传\n' +
            '  // data.name 可能是 undefined（传了对象但没 name）\n' +
            '}\n\n' +
            '// 5. 默认参数引用前置参数\n' +
            'function range(start: number, end: number, step: number = end > start ? 1 : -1): number[] {\n' +
            '  const out: number[] = []\n' +
            '  for (let i = start; step > 0 ? i <= end : i >= end; i += step) out.push(i)\n' +
            '  return out\n' +
            '}\n' +
            '```\n\n' +
            '## 参数修饰符对照表\n\n' +
            '| 形式 | 写法 | 函数内类型 | 调用方可省略 | 典型用途 |\n' +
            '|------|------|-----------|--------------|----------|\n' +
            '| 必填参数 | `a: T` | `T` | 否 | 核心参数 |\n' +
            '| 可选参数 | `a?: T` | `T \\| undefined` | 是 | 次要配置 |\n' +
            '| 默认参数 | `a: T = v` | `T` | 是 | 常用默认值 |\n' +
            '| 剩余参数 | `...a: T[]` | `T[]` | 是 | 收集多余实参 |\n' +
            '| 解构默认值 | `{ a = 1 }: O` | `T` | 是 | 配置对象字段 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：可选参数需判空。\n' +
            '```ts\n' +
            'function greet(name: string, greeting?: string): string {\n' +
            '  return (greeting ?? "你好") + ", " + name\n' +
            '}\n' +
            'console.log(greet("小明"))         // 你好, 小明\n' +
            'console.log(greet("小红", "嗨"))   // 嗨, 小红\n' +
            '```\n\n' +
            '示例二：默认参数引用前置参数。\n' +
            '```ts\n' +
            'function slice(arr: number[], start = 0, end = arr.length): number[] {\n' +
            '  return arr.slice(start, end)\n' +
            '}\n' +
            'console.log(slice([1, 2, 3, 4]))     // [1,2,3,4]\n' +
            'console.log(slice([1, 2, 3, 4], 1))  // [2,3,4]\n' +
            'console.log(slice([1, 2, 3, 4], 1, 3)) // [2,3]\n' +
            '```\n\n' +
            '示例三：解构默认值——配置对象常用模式。\n' +
            '```ts\n' +
            'function fetch2(url: string, { method = "GET", timeout = 5000 }: {\n' +
            '  method?: string; timeout?: number\n' +
            '} = {}): void {\n' +
            '  console.log(method, url, timeout)\n' +
            '}\n' +
            'fetch2("/api")                          // GET /api 5000\n' +
            'fetch2("/api", { method: "POST" })      // POST /api 5000\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **可选参数必须在必填之后**：`f(a?, b)` 报错，正确是 `f(a, b?)`；默认参数、剩余参数同理放在末尾。\n' +
            '2. **可选参数要判空**：`greeting?: string` 在函数内是 `string | undefined`，直接 `.length` 会报错，用 `??`/`?.`/`if` 处理。\n' +
            '3. **默认参数天然可选**：`exp = 2` 无需 `?`，函数内永远是 number，无需判空，比可选参数好用。\n' +
            '4. **默认参数可引用前置参数**：`f(a, b = a * 2)` 合法，但只能引用左侧已声明的参数。\n' +
            '5. **传 `undefined` 触发默认值，传 `null` 不会**：`pow(2, undefined)` 用默认 2，但 `pow(2, null as any)` 会用 null。\n' +
            '6. **解构默认值需给整体默认 `{}`**：否则 `fetch2("/api")` 会因解构 undefined 报错；`{...} = {}` 让整体也可省略。\n\n' +
            '## 实际应用\n\n' +
            'API 请求函数 `request(url, method = "GET", data?)` 用默认方法和可选请求体，调用方只需传 url 即可发最简单的 GET，需要时再覆盖默认值——既灵活又有类型约束，避免每个调用点都写满参数。\n\n' +
            '在 React 组件中，props 的可选字段配合解构默认值是标配：' +
            '`function Button({ size = "medium", disabled = false }: ButtonProps) { ... }`，' +
            '让组件有合理默认值，使用方只关心需要覆盖的字段。库函数如 `axios.get(url, { timeout = 0 } = {})` 也用同样模式，' +
            '让配置对象的所有字段都可选且有默认值，调用极简。\n\n' +
            '## 扩展知识\n\n' +
            '- **解构默认值**：`function f({ a = 1, b = 2 } = {})` 让配置对象的每个字段都有默认值，是现代 API 设计的标配。\n' +
            '- **`undefined` 触发默认值**：显式传 `undefined` 会用默认值，但传 `null` 不会——这是 JS 规范行为，TS 同样遵循。\n' +
            '- **可选参数与可辨识联合**：用 `data?: { name?: string }` 时，需判断 data 是否传、name 是否有，两层判空。\n' +
            '- **默认参数与 tree-shaking**：默认值若是对象/数组字面量，每次调用会新建，注意引用类型默认值的陷阱（建议用 null + 内部判断）。\n' +
            '- **Builder 模式替代长参数列表**：当可选参数超过 4 个，改用配置对象 `{ method?, data?, timeout? }` 更清晰。',
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
            '## 概念详解\n\n' +
            'rest 参数用 `...参数: 类型[]` 收集剩余实参为数组，必须放在参数列表最后。' +
            '它的类型是数组，函数内可对它做数组操作（map、reduce、length、forEach）。' +
            '配合联合类型可收集多种类型：`...values: (string | number)[]`。rest 参数让函数支持可变参数，如求和、最大值、格式化等。\n\n' +
            'rest 参数存在的意义是"可变元数（variadic）"。它比"传入一个数组"更符合直觉调用——`sum(1, 2, 3)` 比 `sum([1, 2, 3])` 更自然。' +
            'rest 参数本质上把多个实参打包成数组，与展开运算符 `...`（把数组拆成多个参数）是一对逆操作：调用端 `...` 展开，定义端 `...` 收集。' +
            '在工具函数和日志库中，rest 参数几乎是标配——它让函数既能处理 1 个参数也能处理 100 个参数，API 统一简洁。\n\n' +
            'rest 参数之后不能再有必填参数，但 TypeScript 允许它出现在可选/默认参数之后。' +
            '当 rest 与联合类型结合时，可以收集异构数据；当与元组类型结合（如 `...args: [string, number]`），还能精确约束"固定几个 + 类型各异"的可变调用，这是类型化可变参数的高级用法。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 基本 rest 参数\n' +
            'function sum(...nums: number[]): number {\n' +
            '  return nums.reduce((a, b) => a + b, 0)\n' +
            '}\n\n' +
            '// 2. 必填 + rest 组合\n' +
            'function join(sep: string, ...parts: string[]): string {\n' +
            '  return parts.join(sep)\n' +
            '}\n\n' +
            '// 3. 联合类型 rest\n' +
            'function collect(...items: (string | number)[]): string {\n' +
            '  return items.map(String).join(",")\n' +
            '}\n\n' +
            '// 4. 元组类型 rest：约束固定形态的可变调用\n' +
            'function call(fn: string, ...args: [number, string?]): void {\n' +
            '  console.log(fn, args)\n' +
            '}\n\n' +
            '// 5. rest 元素（数组解构里的 ...）\n' +
            'const [head, ...tail] = [1, 2, 3, 4]  // head=1, tail=[2,3,4]\n' +
            '```\n\n' +
            '## rest 参数与其他参数形式对照表\n\n' +
            '| 形式 | 写法 | 函数内类型 | 位置 | 典型用途 |\n' +
            '|------|------|-----------|------|----------|\n' +
            '| 必填 | `a: T` | `T` | 任意 | 核心参数 |\n' +
            '| 可选 | `a?: T` | `T \\| undefined` | 必填之后 | 次要配置 |\n' +
            '| 默认 | `a: T = v` | `T` | 必填之后 | 常用默认值 |\n' +
            '| rest 数组 | `...a: T[]` | `T[]` | 列表最后 | 可变数量同类型 |\n' +
            '| rest 联合 | `...a: (A \\| B)[]` | `(A \\| B)[]` | 列表最后 | 异构收集 |\n' +
            '| rest 元组 | `...a: [A, B?]` | `[A, B?]` | 列表最后 | 固定形态可变 |\n' +
            '| 展开调用 | `f(...arr)` | — | 调用端 | 数组拆成实参 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：数字求和与最大值。\n' +
            '```ts\n' +
            'function sum(...nums: number[]): number {\n' +
            '  return nums.reduce((a, b) => a + b, 0)\n' +
            '}\n' +
            'function max(...nums: number[]): number {\n' +
            '  return Math.max(...nums)\n' +
            '}\n' +
            'console.log(sum(1, 2, 3, 4))     // 10\n' +
            'console.log(max(3, 7, 2, 9, 1))  // 9\n' +
            '```\n\n' +
            '示例二：必填 + rest，构建日期/路径。\n' +
            '```ts\n' +
            'function join(sep: string, ...parts: string[]): string {\n' +
            '  return parts.join(sep)\n' +
            '}\n' +
            'console.log(join("-", "2024", "01", "01"))  // 2024-01-01\n' +
            'console.log(join("/", "usr", "local", "bin")) // usr/local/bin\n' +
            '```\n\n' +
            '示例三：rest 与展开互为逆操作。\n' +
            '```ts\n' +
            'function pushAll(arr: number[], ...items: number[]): number[] {\n' +
            '  arr.push(...items)  // 展开成多个实参\n' +
            '  return arr\n' +
            '}\n' +
            'const extras = [5, 6]\n' +
            'console.log(pushAll([1, 2, 3], 4, ...extras))  // [1,2,3,4,5,6]\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **rest 必须在参数列表最后**：`f(...a, b)` 报错，正确是 `f(b, ...a)`；这是 JS 规范要求。\n' +
            '2. **rest 类型必须是数组**：`...a: number` 报错，必须是 `number[]` 或元组 `[number, string]`。\n' +
            '3. **rest 与展开互为逆操作**：定义端 `...` 收集成数组，调用端 `...` 把数组拆成实参，理解这点能灵活转换。\n' +
            '4. **rest 之后的 length 不可靠**：`function f(a, ...rest)` 的 `f.length` 是 1（只算必填，不含 rest）。\n' +
            '5. **联合 rest 要小心收窄**：`...items: (string | number)[]` 里每个元素都是联合，访问 `.length` 要先 typeof 判断。\n' +
            '6. **元组 rest 更精确**：`...args: [number, string?]` 约束"第 1 个 number、第 2 个可选 string"，比 `...args: any[]` 安全得多。\n\n' +
            '## 实际应用\n\n' +
            '日志库的 `log(level, ...messages)` 用 rest 收集任意条日志内容，再统一格式化输出——既保留调用方传任意参数的便利，又通过类型约束保证每条都是字符串/数字。printf 风格的格式化函数也依赖 rest。\n\n' +
            '在工具函数中，`Math.max(...nums)`、`Array.prototype.concat(...arrs)`、React 的 `createElement(type, ...children)` 都用 rest 收集可变参数。' +
            '前端事件总线 `emit(event, ...args)` 也用 rest，配合元组约束让 `emit("click", x: number, y: number)` 的参数类型与事件名联动——这是类型安全事件系统的核心模式。\n\n' +
            '## 扩展知识\n\n' +
            '- **rest 元素解构**：`const [head, ...tail] = arr` 把数组拆成首元素 + 剩余数组，tail 类型是 `number[]`。\n' +
            '- **rest 对象解构**：`const { a, ...rest } = obj` 收集剩余属性，常用于"排除某些字段"（如 `omit` 工具）。\n' +
            '- **元组 rest**：`...args: [number, string]` 让可变调用有精确类型，是类型化 emit/printf 的基础。\n' +
            '- **`Function.prototype.length`**：返回必填参数个数（不含 rest/默认值），可据此做反射式校验。\n' +
            '- **rest 与 apply**：旧代码用 `f.apply(null, arr)`，现代代码用 `f(...arr)`，更直观也更快。',
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
            '## 概念详解\n\n' +
            '函数重载为同一个函数提供多个类型签名，让 TS 根据入参类型选择正确的返回类型。' +
            '重载由若干"重载签名"加一个"实现签名"组成：重载签名声明对外可见的调用形态，实现签名包含函数体并兼容所有重载。' +
            '重载签名不能有函数体，只有实现签名才有；实现签名对外不可见，调用方只能匹配重载签名。\n\n' +
            '重载存在的意义是"精确的调用形态"。当参数形态差异大时（如传 string 返回对象、传数组返回数组），没有重载的话，' +
            'TS 只能用联合类型表示，调用方拿到 `对象 | 数组` 后还得自己做类型收窄，体验差。' +
            '重载让每个调用形态都有精确的返回类型，调用方无需断言，IDE 提示也更精准。它是库与 SDK 设计的高频工具。\n\n' +
            '重载的本质是"编译期多态"——同一函数名多种签名，TS 按实参类型静态选择匹配签名，运行时仍是同一个函数。' +
            '与面向对象语言的方法重载不同，TS 重载没有真正的分派机制，实现内部要自己用 typeof/instanceof/in 区分分支。' +
            '注意重载顺序：更具体的签名应放前面，因为 TS 按顺序匹配，宽泛签名放前面会让具体签名永远匹配不到。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 重载签名 1：传 string 返回 string\n' +
            'function reverse(input: string): string\n' +
            '// 重载签名 2：传 number[] 返回 number[]\n' +
            'function reverse(input: number[]): number[]\n' +
            '// 实现签名：用联合兼容所有重载，对外不可见\n' +
            'function reverse(input: string | number[]): string | number[] {\n' +
            '  if (typeof input === "string") return input.split("").reverse().join("")\n' +
            '  return input.slice().reverse()\n' +
            '}\n\n' +
            '// 重载与字面量/可选参数\n' +
            'function fetch2(url: string): Promise<unknown>\n' +
            'function fetch2(url: string, opts: { json: true }): Promise<object>\n' +
            'function fetch2(url: string, opts?: { json?: boolean }): Promise<unknown> {\n' +
            '  /* ... */ return null as any\n' +
            '}\n' +
            '```\n\n' +
            '## 重载组成与规则对照表\n\n' +
            '| 组成 | 作用 | 是否有函数体 | 对外可见 | 备注 |\n' +
            '|------|------|--------------|----------|------|\n' +
            '| 重载签名 | 描述一种调用形态 | 否 | ✅ | 可有多个 |\n' +
            '| 实现签名 | 兼容所有重载并提供函数体 | ✅ | ❌ | 只有一个 |\n' +
            '| 顺序 | 具体签名在前，宽泛在后 | — | — | TS 按顺序匹配 |\n' +
            '| 内部分支 | 用 typeof/instanceof/in 区分 | — | — | 运行时分派 |\n' +
            '| 联合返回 | 实现签名返回所有可能的联合 | — | — | 对外被重载覆盖 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：字符串或数组反转，返回类型精确。\n' +
            '```ts\n' +
            'function reverse(input: string): string\n' +
            'function reverse(input: number[]): number[]\n' +
            'function reverse(input: string | number[]): string | number[] {\n' +
            '  if (typeof input === "string") return input.split("").reverse().join("")\n' +
            '  return input.slice().reverse()\n' +
            '}\n' +
            'const s: string = reverse("abc")      // 精确 string\n' +
            'const a: number[] = reverse([1, 2, 3]) // 精确 number[]\n' +
            'console.log(s, a)\n' +
            '```\n\n' +
            '示例二：fetch 封装按 options 返回不同类型。\n' +
            '```ts\n' +
            'function fetch2(url: string): Promise<string>\n' +
            'function fetch2(url: string, opts: { json: true }): Promise<object>\n' +
            'function fetch2(url: string, opts?: { json?: boolean }): Promise<string | object> {\n' +
            '  return null as any  // 省略真实实现\n' +
            '}\n' +
            'const text = fetch2("/api")                       // string\n' +
            'const data = fetch2("/api", { json: true })       // object\n' +
            '```\n\n' +
            '示例三：重载顺序错误导致具体签名永不匹配。\n' +
            '```ts\n' +
            '// ❌ 错误顺序：宽泛在前\n' +
            'function bad(x: string | number): string          // 永远匹配这里\n' +
            'function bad(x: string): string                   // 永远匹配不到\n' +
            'function bad(x: string | number): string { return "" }\n\n' +
            '// ✅ 正确顺序：具体在前\n' +
            'function good(x: string): string\n' +
            'function good(x: number): string\n' +
            'function good(x: string | number): string { return String(x) }\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **实现签名对外不可见**：调用方只能匹配重载签名，传不符合任何重载的参数会报错，即便实现签名能接受。\n' +
            '2. **重载顺序很关键**：具体签名在前、宽泛签名在后，否则具体签名永远匹配不到，TS 会发 "This overload signature is not compatible" 警告。\n' +
            '3. **实现签名要兼容所有重载**：实现签名的参数类型必须是所有重载参数的联合（或超集），返回类型也必须能容纳所有重载的返回。\n' +
            '4. **运行时无分派**：TS 重载不是真正的多态，实现内部要手动用 typeof/instanceof/in 区分分支，忘记分支会导致错误返回。\n' +
            '5. **重载 vs 联合返回**：能用具名函数 + 联合返回 + 类型守卫解决时，不必用重载；重载适合"调用形态差异大、返回类型与入参强相关"的场景。\n' +
            '6. **重载与默认值/可选参数**：重载签名里不要写默认值，默认值写在实现签名里；可选参数可在重载签名中用 `?`。\n\n' +
            '## 实际应用\n\n' +
            'fetch 封装是重载的经典场景：`fetch2(url)` 返回字符串，`fetch2(url, { json: true })` 返回对象，' +
            '`fetch2(url, { responseType: "arraybuffer" })` 返回 ArrayBuffer。调用方根据传入的 options 拿到精确返回类型，无需手动断言。\n\n' +
            '在 DOM 库中，`document.querySelector("div")` 返回 `HTMLDivElement`、`querySelector(".x")` 返回 `Element`，' +
            '靠重载签名根据选择器字符串字面量返回不同元素类型。lodash 的 `_.get(obj, path, default)` 也用重载描述"传 default 时返回非空、不传时返回 T | undefined"。' +
            '重载让库的 API 表达力倍增，是高质量类型设计的标志。\n\n' +
            '## 扩展知识\n\n' +
            '- **方法重载**：类的方法也能重载，写法与函数重载一致，常用于工厂方法、解析方法。\n' +
            '- **重载与泛型**：`function f<T>(x: T): T` 配合重载能表达更复杂的类型关系，如 `Object.keys` 的重载。\n' +
            '- **`assertNever` 穷尽检查**：重载分支用 never 兜底，遗漏分支时编译报错，是类型安全分派的保障。\n' +
            '- **声明合并扩展重载**：interface 里的函数签名会与同名函数合并，可扩展第三方函数的重载。\n' +
            '- **重载 vs 可辨识联合**：可辨识联合（`{ kind }`）常比重载更易维护，新增分支时类型系统会强制处理；按场景选择。',
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
            '## 概念详解\n\n' +
            'TypeScript 的 class 在 ES6 类基础上增加类型注解：字段需声明类型，构造函数和方法的参数也需标注。' +
            '字段声明在类体内，如 `name: string`，可在构造函数中赋值，也可用 `= 默认值` 直接初始化。' +
            '`readonly` 修饰字段表示只读，只能在构造函数中赋值。类的实例类型就是类名本身，可作为参数和返回值类型。\n\n' +
            '类存在的意义是"把数据和操作绑定"。面向对象编程的核心是封装：字段（状态）+ 方法（行为）组成一个内聚单元，' +
            '通过类型保证字段始终是正确类型，通过访问控制（public/private/protected）隐藏内部细节。' +
            '领域模型、服务、控制器、React 组件（class 形式）、Node 中间件等都用类表达，配合继承和多态构建可扩展的架构。\n\n' +
            '静态成员（`static`）属于类本身而非实例，通过 `类名.成员` 访问，常用于工具方法和常量（如 `MathUtil.PI`）。' +
            'TS 特有的参数属性（constructor 参数加修饰符 `public`/`private`/`readonly`）能自动创建并赋值同名字段，大幅减少样板代码。' +
            '类是大型 TS 项目的骨架，理解字段、构造、方法、静态、参数属性是面向对象设计的第一步。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            'class Person {\n' +
            '  // 1. 字段声明（可带默认值/readonly）\n' +
            '  name: string\n' +
            '  readonly id: number = nextId()\n' +
            '  age: number\n\n' +
            '  // 2. 构造函数\n' +
            '  constructor(name: string, age: number) {\n' +
            '    this.name = name\n' +
            '    this.age = age\n' +
            '  }\n\n' +
            '  // 3. 方法\n' +
            '  greet(): string { return `你好, 我是${this.name}` }\n\n' +
            '  // 4. 参数属性：自动创建并赋值字段\n' +
            '  // constructor(public name: string, public age: number) {}\n\n' +
            '  // 5. 静态成员\n' +
            '  static species = "human"\n' +
            '  static create(name: string): Person { return new Person(name, 0) }\n' +
            '}\n\n' +
            '// 6. 访问器 getter/setter\n' +
            'class Account {\n' +
            '  private _balance = 0\n' +
            '  get balance(): number { return this._balance }\n' +
            '  set balance(v: number) { if (v >= 0) this._balance = v }\n' +
            '}\n' +
            '```\n\n' +
            '## 类成员修饰符对照表\n\n' +
            '| 修饰符 | 含义 | 可访问范围 | 典型用途 |\n' +
            '|--------|------|-----------|----------|\n' +
            '| `public`（默认） | 公开 | 任意 | 对外 API |\n' +
            '| `private` | 私有 | 仅类内 | 内部实现 |\n' +
            '| `protected` | 受保护 | 类内 + 子类 | 模板方法 |\n' +
            '| `readonly` | 只读 | 读取任意，赋值仅构造函数 | 不可变字段 |\n' +
            '| `static` | 静态 | 类本身（非实例） | 工具方法/常量 |\n' +
            '| `#field` | 真私有（ES） | 仅类内 | 强封装 |\n' +
            '| 参数属性 `public x: T` | 自动创建字段 | 同 public | 减少样板 |\n' +
            '| `get`/`set` | 访问器 | 任意 | 派生/校验属性 |\n' +
            '| `abstract` | 抽象 | 子类必须实现 | 模板类 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基本类 + 字段 + 构造 + 方法。\n' +
            '```ts\n' +
            'class Person {\n' +
            '  name: string\n' +
            '  age: number\n' +
            '  constructor(name: string, age: number) {\n' +
            '    this.name = name\n' +
            '    this.age = age\n' +
            '  }\n' +
            '  greet(): string { return "你好, 我是" + this.name }\n' +
            '}\n' +
            'console.log(new Person("小明", 20).greet())\n' +
            '```\n\n' +
            '示例二：参数属性——一行搞定字段+赋值。\n' +
            '```ts\n' +
            'class User {\n' +
            '  constructor(\n' +
            '    public name: string,\n' +
            '    public readonly id: number,\n' +
            '    private role: string = "user"\n' +
            '  ) {}\n' +
            '  info(): string { return `${this.id}:${this.name}(${this.role})` }\n' +
            '}\n' +
            'console.log(new User("张三", 1).info())  // 1:张三(user)\n' +
            '```\n\n' +
            '示例三：静态成员 + getter/setter。\n' +
            '```ts\n' +
            'class Counter {\n' +
            '  static instances = 0\n' +
            '  private _n = 0\n' +
            '  constructor() { Counter.instances++ }\n' +
            '  get n(): number { return this._n }\n' +
            '  set n(v: number) { if (v >= 0) this._n = v }\n' +
            '  inc() { this._n++ }\n' +
            '}\n' +
            'const c = new Counter()\n' +
            'c.inc(); c.inc(); c.n = 10\n' +
            'console.log(c.n, Counter.instances)  // 10 1\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **字段必须声明**：TS 要求类体内的字段显式声明类型（`name: string`），未声明就 `this.name = ...` 在 strict 下报错。\n' +
            '2. **`readonly` 只在编译期**：运行时仍可改，要真正不可变需 `Object.freeze` 或 `#` 私有 + getter。\n' +
            '3. **`private` vs `#`**：TS 的 `private` 是编译期检查，运行时可绕过；ES 的 `#field` 是真私有，更强但语法受限。\n' +
            '4. **参数属性简化样板**：`constructor(public x: T)` 等价于"声明字段 + 构造赋值"，但只在 constructor 参数上有效。\n' +
            '5. **`this` 类型**：方法返回 `this` 可实现链式调用，子类调用父类方法返回子类类型（多态 this）。\n' +
            '6. **`strictPropertyInitialization`**：开启后字段必须在构造函数中赋值，否则报错；可用 `!` 断言"我稍后赋值"绕过。\n\n' +
            '## 实际应用\n\n' +
            '领域模型用类表达，如 `class Order { readonly id; items: Item[]; total(): number }`——把数据和操作绑定，类型保证 items 始终是 Item 数组，业务方法集中维护，比散落的函数和对象更易于演进。\n\n' +
            '在 NestJS/TypeORM 后端中，Service、Controller、Entity 都是类，依赖注入靠装饰器 + 类型元数据实现。' +
            '前端的状态管理（如 MobX 的 Store）、工具类（如 HttpClient、Logger）、单例服务（如 `class AuthService { static instance }`）也用类。' +
            '理解字段、构造、方法、静态、参数属性、访问器，是构建可维护 TS 架构的基础。\n\n' +
            '## 扩展知识\n\n' +
            '- **抽象类 `abstract`**：`abstract class Shape { abstract area(): number }` 不能实例化，子类必须实现抽象方法，是模板方法模式的基础。\n' +
            '- **`implements` 接口**：类实现接口只校验公开成员，不强制内部实现，比继承更灵活。\n' +
            '- **多态 `this` 类型**：方法返回 `this` 让链式调用在子类中返回子类类型，是 Builder 模式的关键。\n' +
            '- **`#` 真私有字段**：ES2022 的强私有，运行时也无法访问，比 TS `private` 更安全，但无法被反射读取。\n' +
            '- **装饰器**：`@Injectable()`、`@Component` 等装饰类/方法/字段，是 NestJS、Angular、TypeORM 的元编程基础。',
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
            '## 概念详解\n\n' +
            '`class 子类 extends 父类` 实现继承，子类获得父类的字段和方法。' +
            '子类构造函数必须先调 `super()` 才能使用 this；子类可用 `super.方法()` 调用父类方法。' +
            '方法重写：子类定义同名方法覆盖父类，多态由此实现——同一调用，不同子类表现不同行为。继承建立"是什么"（is-a）的关系，如猫是动物。\n\n' +
            '多态存在的价值是"开闭原则"。把不同子类实例放进父类类型的数组，遍历调用同一方法时各自执行自己的实现；' +
            '新增子类无需修改调用方代码，只需新增一个子类即可扩展。这是面向对象设计应对"变化"的核心工具：' +
            '把变化的部分隔离到子类，把不变的部分留在父类。TS 检查重写的兼容性——子类方法签名需与父类兼容，否则报错。\n\n' +
            '继承与组合是两种复用思路。继承建立"是什么"的关系（猫是动物），慎用多层继承以免耦合过深；' +
            '组合建立"有什么"的关系（汽车有引擎），更灵活、运行时可替换。' +
            '现代设计趋势是"优先组合而非继承"，但继承在表达层级（如 React 的 class 组件、Exception 错误体系、AST 节点）和复用模板代码时仍有价值。' +
            '理解 super、重写、多态是阅读框架源码的基础。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            'class Animal {\n' +
            '  constructor(public name: string) {}\n' +
            '  speak(): string { return this.name + " 发出声音" }\n' +
            '}\n\n' +
            '// 1. extends 继承\n' +
            'class Dog extends Animal {\n' +
            '  // 子类构造必须先 super()\n' +
            '  constructor(name: string, public breed: string) {\n' +
            '    super(name)\n' +
            '  }\n' +
            '  // 2. 重写父类方法\n' +
            '  speak(): string { return this.name + " 汪汪叫" }\n' +
            '  // 3. super.method 复用父类逻辑\n' +
            '  info(): string { return super.speak() + " [" + this.breed + "]" }\n' +
            '}\n\n' +
            '// 4. 多态：父类类型装子类实例\n' +
            'const animals: Animal[] = [new Animal("x"), new Dog("旺财", "中华田园犬")]\n' +
            'animals.forEach(a => console.log(a.speak()))  // 各自调用\n' +
            '```\n\n' +
            '## 继承相关关键字对照表\n\n' +
            '| 关键字/语法 | 含义 | 位置 | 备注 |\n' +
            '|-------------|------|------|------|\n' +
            '| `extends` | 继承父类 | 类声明 | 单继承，只能一个父类 |\n' +
            '| `super()` | 调用父类构造 | 子类构造函数首行 | 必须在使用 this 前 |\n' +
            '| `super.method()` | 调用父类方法 | 子类方法内 | 复用父类逻辑 |\n' +
            '| 重写方法 | 同名方法 | 子类内 | 签名需兼容父类 |\n' +
            '| `implements` | 实现接口 | 类声明 | 只校验公开成员 |\n' +
            '| `abstract` | 抽象类/方法 | 类/方法声明 | 不能实例化，子类必须实现 |\n' +
            '| `protected` | 受保护成员 | 字段/方法 | 子类可访问 |\n' +
            '| `instanceof` | 类型判断 | 表达式 | 检查原型链 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基本继承 + 参数属性 + 重写。\n' +
            '```ts\n' +
            'class Animal {\n' +
            '  constructor(public name: string) {}\n' +
            '  speak(): string { return this.name + " 发出声音" }\n' +
            '}\n' +
            'class Dog extends Animal {\n' +
            '  speak(): string { return this.name + " 汪汪叫" }\n' +
            '}\n' +
            'console.log(new Dog("旺财").speak())  // 旺财 汪汪叫\n' +
            '```\n\n' +
            '示例二：super 复用父类逻辑。\n' +
            '```ts\n' +
            'class Base {\n' +
            '  constructor(public id: number) {}\n' +
            '  info(): string { return "Base#" + this.id }\n' +
            '}\n' +
            'class Sub extends Base {\n' +
            '  constructor(id: number, public tag: string) { super(id) }\n' +
            '  info(): string { return super.info() + "-" + this.tag }\n' +
            '}\n' +
            'console.log(new Sub(1, "A").info())  // Base#1-A\n' +
            '```\n\n' +
            '示例三：多态数组，统一调用各自实现。\n' +
            '```ts\n' +
            'class Shape { area(): number { return 0 } }\n' +
            'class Circle extends Shape {\n' +
            '  constructor(public r: number) { super() }\n' +
            '  area(): number { return Math.floor(Math.PI * this.r * this.r) }\n' +
            '}\n' +
            'class Square extends Shape {\n' +
            '  constructor(public s: number) { super() }\n' +
            '  area(): number { return this.s * this.s }\n' +
            '}\n' +
            'const shapes: Shape[] = [new Circle(2), new Square(3)]\n' +
            'console.log(shapes.map(s => s.area()))  // [ 12, 9 ]\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **子类构造必须先 `super()`**：在使用 `this` 前调用 `super(...)`，否则运行时 ReferenceError；TS 会在编译期提醒。\n' +
            '2. **重写签名要兼容**：子类方法的参数和返回类型需与父类兼容（参数可少、返回可更具体），否则报 "not compatible"。\n' +
            '3. **`super.method` 的 this 是子类实例**：调用父类方法时 this 仍是当前子类实例，可访问子类字段。\n' +
            '4. **单继承限制**：TS/JS 只支持单继承（一个 extends），要复用多份代码用组合或 mixin。\n' +
            '5. **`instanceof` 检查原型链**：`dog instanceof Animal` 为 true，多态判断常用，但深继承链性能略低。\n' +
            '6. **避免深继承**：超过 3 层的继承会让耦合过深，重构困难；优先组合 + 接口替代。\n\n' +
            '## 实际应用\n\n' +
            'UI 组件库中 `class BaseWidget` 提供通用渲染逻辑，`class Button extends BaseWidget`、`class Input extends BaseWidget` 各自重写 render 方法——一个 `BaseWidget[]` 数组统一管理，遍历调用 render 时多态生效，新增组件类型无需改动管理代码。\n\n' +
            '在错误处理中，`class AppError extends Error`、`class ValidationError extends AppError`、`class AuthError extends AppError` 形成错误体系，catch 时用 `instanceof` 区分类型做不同处理。' +
            'Node.js 的 Stream（Readable/Writable/Duplex/Transform）、React 的 SyntheticEvent、TypeORM 的 Repository<BaseEntity> 都靠继承建立层级。' +
            '理解 super、重写、多态，是阅读和扩展框架源码的基础。\n\n' +
            '## 扩展知识\n\n' +
            '- **抽象类 `abstract`**：`abstract class Shape { abstract area(): number }` 强制子类实现，是模板方法模式的载体。\n' +
            '- **Mixin 模式**：TS 可用 `class X extends mix(Base, TraitA, TraitB) {}` 实现多重复用，比接口 + 默认实现更灵活。\n' +
            '- **`implements` 多接口**：`class X implements A, B` 一次实现多个接口，弥补单继承的不足。\n' +
            '- **协变与逆变**：子类方法的参数类型可"逆变"（更宽泛）、返回类型可"协变"（更具体），TS 默认按此检查。\n' +
            '- **组合优于继承**：`class Car { constructor(private engine: Engine) }` 用持有替代继承，运行时可替换 engine，更解耦。',
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
            '## 概念详解\n\n' +
            'TypeScript 提供三种访问修饰符：`public`（默认，公开）、`private`（仅类内）、`protected`（类内与子类）。' +
            '修饰符控制成员可见性，是封装的关键。私有字段防止外部直接修改内部状态，强制通过方法交互。' +
            '构造函数参数加修饰符（`constructor(private x: number)`）可自动创建并赋值同名字段，称为参数属性，大幅减少样板代码。\n\n' +
            '访问修饰符存在的意义是"封装与信息隐藏"。把内部实现藏起来，只暴露稳定的公共 API，' +
            '这样内部重构不影响调用方，业务不变量（如余额非负）得到保障。例如把 balance 设为 private，' +
            '只暴露 deposit/withdraw 方法，外部就无法绕过校验直接改余额。这是面向对象设计应对"复杂性"的核心工具：' +
            '通过限制访问降低耦合，让代码更易维护和演进。\n\n' +
            'TS 4+ 也支持 `#field` 真正的运行时私有字段（ES 标准），与 `private` 不同：`private` 仅编译期检查，' +
            '运行时仍可通过 `(obj as any).balance` 绕过；`#field` 是运行时真正私有，无法绕过。' +
            '新代码优先用 `#field` 实现强封装，`private` 用于与旧代码兼容或需要装饰器/反射的场景。' +
            '`protected` 常用于"只给子类用的内部方法"，是模板方法模式的关键。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            'class BankAccount {\n' +
            '  // 1. public（默认）\n' +
            '  public id: number\n' +
            '  // 2. private：仅类内\n' +
            '  private balance: number\n' +
            '  // 3. protected：类内 + 子类\n' +
            '  protected log(msg: string) { console.log(msg) }\n' +
            '  // 4. readonly + 修饰符组合\n' +
            '  readonly createdAt: Date\n' +
            '  // 5. 参数属性：自动创建字段\n' +
            '  constructor(id: number, initial: number) {\n' +
            '    this.id = id\n' +
            '    this.balance = initial\n' +
            '    this.createdAt = new Date()\n' +
            '  }\n' +
            '}\n\n' +
            '// 6. # 真私有（ES2022）\n' +
            'class Counter {\n' +
            '  #count = 0\n' +
            '  inc() { this.#count++ }\n' +
            '  get count() { return this.#count }\n' +
            '}\n' +
            '```\n\n' +
            '## 访问修饰符对照表\n\n' +
            '| 修饰符 | 类内 | 子类 | 外部 | 运行时强制 | 备注 |\n' +
            '|--------|------|------|------|-----------|------|\n' +
            '| `public`（默认） | ✅ | ✅ | ✅ | 否 | 对外 API |\n' +
            '| `private` | ✅ | ❌ | ❌ | 否（编译期） | 内部实现 |\n' +
            '| `protected` | ✅ | ✅ | ❌ | 否（编译期） | 子类可用 |\n' +
            '| `#field` | ✅ | ❌ | ❌ | ✅（运行时） | ES 真私有 |\n' +
            '| `readonly` | 读✅/写构造 | 读✅/写构造 | 读✅/写❌ | 否 | 不可变 |\n' +
            '| 参数属性 `private x` | ✅ | ❌ | ❌ | 否 | 自动建字段 |\n' +
            '| `static` | 类本身 | — | 类本身 | 否 | 非实例 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：private 封装余额，强制走方法。\n' +
            '```ts\n' +
            'class BankAccount {\n' +
            '  private balance: number\n' +
            '  constructor(initial: number) { this.balance = initial }\n' +
            '  deposit(amount: number): void {\n' +
            '    if (amount <= 0) throw new Error("金额必须正数")\n' +
            '    this.balance += amount\n' +
            '  }\n' +
            '  getBalance(): number { return this.balance }\n' +
            '}\n' +
            'const acc = new BankAccount(100)\n' +
            'acc.deposit(50)\n' +
            'console.log(acc.getBalance())  // 150\n' +
            '// acc.balance = 999  // 报错：private\n' +
            '```\n\n' +
            '示例二：参数属性简写，一行搞定字段+赋值。\n' +
            '```ts\n' +
            'class User {\n' +
            '  constructor(public name: string, private age: number) {}\n' +
            '  info(): string { return this.name + "," + this.age }\n' +
            '}\n' +
            'console.log(new User("小明", 20).info())  // 小明,20\n' +
            '```\n\n' +
            '示例三：protected + 子类重写，模板方法模式。\n' +
            '```ts\n' +
            'class Logger {\n' +
            '  protected prefix(): string { return "[LOG]" }\n' +
            '  log(msg: string): void { console.log(this.prefix() + " " + msg) }\n' +
            '}\n' +
            'class VerboseLogger extends Logger {\n' +
            '  protected prefix(): string { return "[VERBOSE]" }\n' +
            '}\n' +
            'new VerboseLogger().log("hello")  // [VERBOSE] hello\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **`private` 只是编译期检查**：运行时 `(obj as any).balance` 仍可访问，要真私有用 `#field`。\n' +
            '2. **参数属性只能用在 constructor**：`constructor(public x: T)` 自动建字段，普通方法参数加修饰符无效。\n' +
            '3. **`protected` 不能在外部访问**：但子类内部可调，常用于"钩子方法"让子类定制父类流程。\n' +
            '4. **`#field` 与 `private` 不能同名**：`#x` 和 `private x` 是两个不同字段，混用会导致隐藏 bug。\n' +
            '5. **`readonly` 可与访问修饰符组合**：`readonly id: number` 或参数属性 `public readonly id: number`。\n' +
            '6. **`protected` 构造函数**：让类只能被继承实例化（不能直接 new），是抽象类的轻量替代。\n\n' +
            '## 实际应用\n\n' +
            '银行账户类把 balance 设为 private，只暴露 deposit/withdraw 方法校验金额——外部无法直接篡改余额，封装保证了业务不变量（余额不能为负等）。这是面向对象封装最经典的例子。\n\n' +
            '在 NestJS 中，Service 类的字段常是 private/readonly（如 `private readonly userRepo: UserRepository`），配合依赖注入让依赖不可变、不可外部替换。' +
            '前端状态管理（MobX 的 Store）用 private 字段 + getter 暴露派生值，防止外部直接改 state。' +
            '模板方法模式（父类定义流程、protected 钩子让子类定制）在框架设计中无处不在，如 React 的生命周期、Express 的中间件管线。\n\n' +
            '## 扩展知识\n\n' +
            '- **`#field` 真私有**：ES2022 标准，运行时也无法访问，比 `private` 更强，但无法被装饰器/反射读取。\n' +
            '- **`private` + 装饰器**：TypeORM/NestJS 用 `private readonly repo` 配合 `@Inject()`，依赖注入字段常是 private。\n' +
            '- **`protected` 构造函数**：让类只能通过子类实例化，是"抽象类"的轻量替代。\n' +
            '- **封装与不变量**：private 字段 + 校验方法 = 业务不变量保障，如"余额非负"、"年龄 0-150"。\n' +
            '- **不可变对象**：`readonly` 字段 + `Object.freeze` 实现真正的不可变，是函数式编程与并发的友好模式。',
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
            '## 概念详解\n\n' +
            '`abstract class` 抽象类不能被实例化，只能被继承。抽象类可包含抽象方法（无实现，子类必须实现）和具体方法（有默认实现）。' +
            '抽象方法 `abstract 方法名(): 返回类型` 定义契约，类似接口但能携带实现。' +
            '`class X implements Interface` 表示类满足接口形状，必须提供接口所有成员。' +
            '两者都是面向对象抽象的核心工具，但侧重点不同。\n\n' +
            '接口与抽象类的核心区别在于"能力 vs 实现"。接口描述"能做什么"（能力），是纯契约、无实现、可多实现；' +
            '抽象类描述"是什么"并提供部分实现，是单继承、可携带字段和具体方法。设计原则是：多用接口做能力抽象（小而可组合），' +
            '抽象类做共享实现（减少子类重复代码）。一个类只能继承一个抽象类，但可实现多个接口——接口更灵活，是 TS/Java 圈的主流选择。\n\n' +
            '接口与抽象类常组合使用：接口定义能力契约，抽象类提供基础实现，具体类继承抽象类并实现接口。' +
            '例如 `interface Repository<T> { find(id): T }` + `abstract class BaseRepo<T> implements Repository<T> { abstract find(id): T; log() {...} }` + `class UserRepo extends BaseRepo<User>`。' +
            '这是仓储模式、策略模式、模板方法模式等设计模式的基础结构，让代码既抽象又可复用。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 抽象类：abstract + 抽象方法 + 具体方法\n' +
            'abstract class Animal {\n' +
            '  abstract speak(): string              // 子类必须实现\n' +
            '  describe(): string {                  // 具体方法，子类直接复用\n' +
            '    return "我是动物，会" + this.speak()\n' +
            '  }\n' +
            '}\n\n' +
            '// 2. 类实现接口\n' +
            'interface Comparable {\n' +
            '  compareTo(other: this): number\n' +
            '}\n' +
            'class NumberBox implements Comparable {\n' +
            '  constructor(public value: number) {}\n' +
            '  compareTo(other: NumberBox): number { return this.value - other.value }\n' +
            '}\n\n' +
            '// 3. 接口 + 抽象类组合：接口定契约，抽象类给基础实现\n' +
            'interface Shape { area(): number }\n' +
            'abstract class AbstractShape implements Shape {\n' +
            '  abstract area(): number              // 留给子类\n' +
            '  name(): string { return "形状" }     // 默认实现\n' +
            '}\n' +
            'class Rect extends AbstractShape {\n' +
            '  constructor(public w: number, public h: number) { super() }\n' +
            '  area(): number { return this.w * this.h }\n' +
            '}\n' +
            '```\n\n' +
            '## 抽象类 vs 接口对照表\n\n' +
            '| 特性 | 抽象类 `abstract class` | 接口 `interface` |\n' +
            '|------|------------------------|------------------|\n' +
            '| 能否实例化 | 否 | 否（类型，非值） |\n' +
            '| 包含实现 | ✅（具体方法/字段） | ❌（纯描述） |\n' +
            '| 抽象方法 | ✅ `abstract m()` | ✅（默认全部抽象） |\n' +
            '| 多继承 | ❌（单继承） | ✅（可 implements 多个） |\n' +
            '| 字段 | ✅（带初始值） | ✅（只描述，无值） |\n' +
            '| 构造函数 | ✅ | ❌ |\n' +
            '| 运行时存在 | ✅（编译为真实类） | ❌（完全擦除） |\n' +
            '| 描述 | "是什么" + 部分实现 | "能做什么" |\n' +
            '| 适用场景 | 共享实现、模板方法 | 能力抽象、解耦契约 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：抽象类 + 模板方法。\n' +
            '```ts\n' +
            'abstract class Animal {\n' +
            '  abstract speak(): string\n' +
            '  describe(): string { return "我是动物，会" + this.speak() }\n' +
            '}\n' +
            'class Cat extends Animal {\n' +
            '  speak(): string { return "喵" }\n' +
            '}\n' +
            'console.log(new Cat().describe())  // 我是动物，会喵\n' +
            '// new Animal()  // 报错：抽象类不能实例化\n' +
            '```\n\n' +
            '示例二：接口 + `this` 类型，实现可比较对象。\n' +
            '```ts\n' +
            'interface Comparable {\n' +
            '  compareTo(other: this): number\n' +
            '}\n' +
            'class NumberBox implements Comparable {\n' +
            '  constructor(public value: number) {}\n' +
            '  compareTo(other: NumberBox): number { return this.value - other.value }\n' +
            '}\n' +
            'console.log(new NumberBox(5).compareTo(new NumberBox(3)))  // 2\n' +
            '```\n\n' +
            '示例三：接口 + 抽象类组合，仓储模式基础。\n' +
            '```ts\n' +
            'interface Repository<T> { find(id: string): T | null }\n' +
            'abstract class BaseRepo<T> implements Repository<T> {\n' +
            '  protected items = new Map<string, T>()\n' +
            '  abstract find(id: string): T | null\n' +
            '  save(id: string, t: T) { this.items.set(id, t) }\n' +
            '}\n' +
            'class UserRepo extends BaseRepo<{ name: string }> {\n' +
            '  find(id: string) { return this.items.get(id) ?? null }\n' +
            '}\n' +
            'const r = new UserRepo()\n' +
            'r.save("1", { name: "小明" })\n' +
            'console.log(r.find("1"))  // { name: "小明" }\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **抽象类不能实例化**：`new AbstractClass()` 报错，只能 `new SubClass()`；抽象方法必须由子类实现。\n' +
            '2. **接口无实现**：interface 只描述形状，所有方法都是"抽象"的，无法携带默认实现（除非用 `interface` + `type` 交叉或抽象类）。\n' +
            '3. **单继承多实现**：一个类只能 `extends` 一个抽象类，但可 `implements` 多个接口——优先用接口表达能力。\n' +
            '4. **`implements` 不继承实现**：`class X implements A` 只校验 X 有 A 的成员，不继承 A 的代码；要继承用 `extends`。\n' +
            '5. **`this` 类型**：接口里 `other: this` 表示"参数是当前类类型"，子类继承时自动收窄，是 Comparable/Cloneable 的关键。\n' +
            '6. **抽象类编译为真实类**：与 interface 不同，abstract class 编译后是真实 JS 类，有运行时存在，可做 `instanceof` 检查。\n\n' +
            '## 实际应用\n\n' +
            '仓储模式（Repository Pattern）定义 `interface Repository<T> { find(id): T; save(t): void }`，再用 `class UserRepo implements Repository<User>` 实现——业务代码依赖接口，可随时切换内存实现/数据库实现/远程实现，类型保证一致性。这就是"building a generic repository pattern"。\n\n' +
            '在 NestJS 中，`abstract class BaseController<T>` 提供通用 CRUD，子类 `class UserController extends BaseController<User>` 只需实现特有逻辑；' +
            '接口 `OnModuleInit`、`OnApplicationBootstrap` 让类实现生命周期钩子，框架按接口调用。' +
            '前端组件库也大量用接口（如 `interface IDisposable { dispose(): void }`）描述能力，抽象类（`abstract class BaseChart`）提供默认渲染逻辑。' +
            '掌握接口与抽象类的组合，是阅读和设计框架级代码的必备能力。\n\n' +
            '## 扩展知识\n\n' +
            '- **`this` 类型**：接口 `compareTo(other: this)` 让"与同类型比较"自动适配子类，是 Comparable/Cloneable 模式的关键。\n' +
            '- **接口继承类**：`interface I extends Class` 会把类的 public 成员纳入接口，常用于"拆出类的形状"。\n' +
            '- **抽象类与依赖注入**：NestJS 的 Provider 可用抽象类做 token，注入时按抽象类型，运行时给具体实现。\n' +
            '- **混合抽象与接口**：抽象类实现接口、把部分方法留抽象，是"模板方法 + 策略"组合的标配。\n' +
            '- **`new` 抽象类签名**：`abstract class C { abstract create(): C }` 配合工厂模式，让父类定义创建协议、子类决定具体类型。',
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
            '## 概念详解\n\n' +
            '泛型用 `<T>` 声明类型参数，让函数适配多种类型并保持类型关联。T 是类型占位符，调用时用具体类型替换（或由 TS 推断）。' +
            '泛型让"输入类型与输出类型相同"这类约束可表达，例如 `first<T>(arr: T[]): T` 返回的元素就是数组元素类型，而非 any。' +
            '泛型是 TS 类型系统最强大的特性之一，是工具函数、容器、Repository 等复用单元的基石。\n\n' +
            '泛型存在的意义是"类型层面的复用"。一个函数能处理多种类型，同时保留类型关联——这是 `any` 做不到的。' +
            '`any` 放弃类型检查，泛型保留类型关联：`identity<T>(v: T): T` 保证返回类型与入参相同，而 `any` 版本会丢失类型信息。' +
            '泛型的本质是"类型的参数化"，把类型当作参数传给函数，实现"写一次、类型安全地用于任意类型"。优先用泛型而非 any，是写出类型安全代码的关键。\n\n' +
            '可定义多个类型参数 `<T, U>`，常见于键值对、映射函数（如 `pair<K, V>(k: K, v: V): [K, V]`）。' +
            '泛型只在编译期存在，运行时被完全擦除——不能对 T 做 `instanceof` 检查，因为运行时 T 已不存在；' +
            '需要运行时类型判断时，要么传入构造函数（`ctor: new () => T`），要么用类型守卫。' +
            '理解泛型的擦除特性，能避免"在运行时依赖类型参数"的常见错误。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 单类型参数\n' +
            'function identity<T>(value: T): T { return value }\n\n' +
            '// 2. 显式指定类型参数\n' +
            'const n = identity<number>(42)\n\n' +
            '// 3. 多类型参数\n' +
            'function pair<K, V>(k: K, v: V): [K, V] { return [k, v] }\n\n' +
            '// 4. 泛型与数组/元组\n' +
            'function first<T>(arr: T[]): T | undefined { return arr[0] }\n\n' +
            '// 5. 约束泛型：T 必须有 length 字段\n' +
            'function len<T extends { length: number }>(x: T): number { return x.length }\n\n' +
            '// 6. 泛型与 keyof\n' +
            'function get<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key] }\n\n' +
            '// 7. 箭头函数泛型（TSX 里写 <T,>）\n' +
            'const id = <T,>(v: T): T => v\n' +
            '```\n\n' +
            '## 泛型函数形式对照表\n\n' +
            '| 形式 | 写法 | 含义 | 典型用途 |\n' +
            '|------|------|------|----------|\n' +
            '| 单参数 | `<T>(v: T): T` | 一个类型占位 | identity、first |\n' +
            '| 多参数 | `<K, V>(k: K, v: V)` | 多个占位 | pair、map |\n' +
            '| 约束 | `<T extends U>` | T 必须满足 U | len、get |\n' +
            '| keyof 约束 | `<K extends keyof T>` | K 是 T 的键 | get、pick |\n' +
            '| 默认类型 | `<T = string>` | 不传时默认 | 配置泛型 |\n' +
            '| 显式指定 | `f<number>(x)` | 手动指定 T | 推断不准时 |\n' +
            '| 箭头函数 | `<T,>(v: T) => v` | TSX 需逗号 | 函数组件 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：泛型 identity，保留入参类型。\n' +
            '```ts\n' +
            'function identity<T>(value: T): T { return value }\n' +
            'const n: number = identity(42)       // T 推断为 number\n' +
            'const s: string = identity("hi")     // T 推断为 string\n' +
            'const x = identity<number>(42)        // 显式指定\n' +
            'console.log(n, s, x)\n' +
            '```\n\n' +
            '示例二：泛型 + keyof，类型安全的属性访问。\n' +
            '```ts\n' +
            'function get<T, K extends keyof T>(obj: T, key: K): T[K] {\n' +
            '  return obj[key]\n' +
            '}\n' +
            'const user = { name: "小明", age: 20 }\n' +
            'const name: string = get(user, "name")  // 返回 string\n' +
            'const age: number = get(user, "age")    // 返回 number\n' +
            '// get(user, "email")  // 报错：email 不是 user 的键\n' +
            '```\n\n' +
            '示例三：泛型约束，要求 T 有 length。\n' +
            '```ts\n' +
            'function len<T extends { length: number }>(x: T): number {\n' +
            '  return x.length\n' +
            '}\n' +
            'console.log(len("hello"))      // 5\n' +
            'console.log(len([1, 2, 3]))    // 3\n' +
            '// len(42)  // 报错：number 没有 length\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **泛型运行时擦除**：不能 `instanceof T`，运行时 T 不存在；要运行时判断需传构造函数或类型守卫函数。\n' +
            '2. **优先推断而非显式指定**：多数情况 TS 能从入参推断 T，只有推断不准（如空数组）才显式 `<T>(...)`。\n' +
            '3. **泛型 vs any**：any 放弃检查，泛型保留关联——优先泛型，避免"假类型安全"。\n' +
            '4. **约束让泛型更具体**：`<T extends { length: number }>` 让 T 必须有 length，否则在 T 上访问 length 会报错。\n' +
            '5. **TSX 里箭头函数泛型要逗号**：`<T,>` 而非 `<T>`，否则被当作 JSX 标签解析。\n' +
            '6. **泛型可设默认类型**：`<T = string>` 让不传 T 时有默认，常用于配置类泛型。\n\n' +
            '## 实际应用\n\n' +
            '工具函数 `fetchJSON<T>(url): Promise<T>` 用泛型让调用方指定返回数据类型，`fetchJSON<User[]>("/users")` 返回强类型用户数组，避免每次手动断言。这是构建类型安全 API 客户端的核心技巧。\n\n' +
            '在工具类型中，`Partial<T>`、`Pick<T,K>`、`Omit<T,K>`、`Record<K,V>` 本质都是泛型类型别名；' +
            '`Array<T>`、`Promise<T>`、`Map<K,V>`、`Set<T>` 是泛型接口/类。' +
            'React 的 `useState<T>`、`useRef<T>`、`useContext<T>` 都用泛型让 hook 保留状态类型。' +
            'ORM 的 `Repository<T>`、`QueryBuilder<T>` 用泛型让查询结果强类型。' +
            '可以说，没有泛型就没有现代 TS 生态。\n\n' +
            '## 扩展知识\n\n' +
            '- **约束 `extends`**：`<T extends U>` 要求 T 满足 U 的形状，是泛型收窄的关键，常配合 keyof 使用。\n' +
            '- **`keyof` + 泛型**：`<K extends keyof T>` 让"属性名访问"类型安全，是 `get`/`pick`/`omit` 工具的基础。\n' +
            '- **条件类型**：`T extends U ? X : Y` 是泛型层面的"if"，配合 `infer` 提取类型参数，是高级工具类型的基石。\n' +
            '- **泛型默认值**：`<T = string>`、`<K extends keyof T = "id">` 让泛型更易用，调用方可省略类型参数。\n' +
            '- **泛型擦除与运行时类型**：需要运行时类型信息时，传构造函数 `ctor: new () => T` 或用 schema（zod/io-ts）保留类型与值的对应。',
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
            '## 概念详解\n\n' +
            '接口和类都能带类型参数。`interface Box<T> { value: T }`、`class Stack<T> { ... }` 让数据结构适配任意类型。' +
            '泛型类在整个类体内可用 T，字段、方法、构造函数都引用同一类型参数；实例化时传入具体类型 `new Stack<number>()`，也可省略让 TS 推断。' +
            '泛型接口常描述容器、仓储、工厂等通用结构，是"generic data structures"和"generic repository pattern"的基础。\n\n' +
            '泛型接口与类存在的意义是"数据结构的类型安全复用"。一套 Stack 实现既能存 number 又能存 User，' +
            '且类型安全——`Stack<number>.pop()` 返回 number，`Stack<User>.pop()` 返回 User，零运行时开销。' +
            'Repository<T> 定义对任意实体的增删改查，UserRepo 和 ProductRepo 共享同一接口形状，只是 T 不同，' +
            '业务代码依赖 `Repository<User>` 接口，可随时切换内存/数据库/远程实现。\n\n' +
            '泛型类配合泛型方法能表达更精细的类型关联，例如 `class Map<K, V> { get(key: K): V | undefined }`。' +
            '类级类型参数（K, V）在整个类体内共享，方法级类型参数（`method<U>(x: U)`) 只在方法内有效。' +
            '泛型让一套实现适配多种类型，零运行时开销（类型在编译期擦除），是类型安全与代码复用的双赢。' +
            '理解泛型接口与类，是阅读容器、ORM、Repository 等库源码的基础。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 泛型接口\n' +
            'interface Box<T> { value: T }\n' +
            'interface Repository<T> {\n' +
            '  find(id: string): T | null\n' +
            '  save(item: T): void\n' +
            '}\n\n' +
            '// 2. 泛型类\n' +
            'class Stack<T> {\n' +
            '  private items: T[] = []\n' +
            '  push(x: T): void { this.items.push(x) }\n' +
            '  pop(): T | undefined { return this.items.pop() }\n' +
            '}\n\n' +
            '// 3. 多类型参数类\n' +
            'class KVMap<K, V> {\n' +
            '  private m = new Map<K, V>()\n' +
            '  set(k: K, v: V) { this.m.set(k, v) }\n' +
            '  get(k: K): V | undefined { return this.m.get(k) }\n' +
            '}\n\n' +
            '// 4. 泛型类 + 泛型方法\n' +
            'class Transformer<T> {\n' +
            '  constructor(private data: T) {}\n' +
            '  map<U>(fn: (x: T) => U): U { return fn(this.data) }\n' +
            '}\n\n' +
            '// 5. 泛型接口默认类型\n' +
            'interface Fetcher<T = unknown> { fetch(): Promise<T> }\n' +
            '```\n\n' +
            '## 泛型接口与类形式对照表\n\n' +
            '| 形式 | 写法 | 含义 | 典型用途 |\n' +
            '|------|------|------|----------|\n' +
            '| 泛型接口 | `interface Box<T>` | 描述通用形状 | 容器、Repository |\n' +
            '| 泛型类 | `class Stack<T>` | 实现通用数据结构 | Stack、Queue、Tree |\n' +
            '| 多参数 | `class Map<K, V>` | 键值双类型 | KV 容器 |\n' +
            '| 类 + 方法泛型 | `class C<T> { m<U>(x) }` | 类级 + 方法级 | Transformer |\n' +
            '| 默认类型 | `interface F<T = unknown>` | 不传时默认 | 配置接口 |\n' +
            '| 约束 | `class C<T extends U>` | T 需满足 U | 限定元素类型 |\n' +
            '| 泛型继承 | `class C<T> extends B<T>` | 父类也泛型 | 基础仓库 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：泛型接口 Box + Repository。\n' +
            '```ts\n' +
            'interface Box<T> { value: T }\n' +
            'const b: Box<string> = { value: "hello" }\n' +
            'console.log(b.value)  // hello\n\n' +
            'interface Repository<T> {\n' +
            '  find(id: string): T | null\n' +
            '  save(item: T): void\n' +
            '}\n' +
            'class UserRepo implements Repository<{ name: string }> {\n' +
            '  private db = new Map<string, { name: string }>()\n' +
            '  find(id: string) { return this.db.get(id) ?? null }\n' +
            '  save(item: { name: string }) { this.db.set(item.name, item) }\n' +
            '}\n' +
            '```\n\n' +
            '示例二：泛型类 Stack，类型安全的栈。\n' +
            '```ts\n' +
            'class Stack<T> {\n' +
            '  private items: T[] = []\n' +
            '  push(x: T): void { this.items.push(x) }\n' +
            '  pop(): T | undefined { return this.items.pop() }\n' +
            '  size(): number { return this.items.length }\n' +
            '}\n' +
            'const s = new Stack<number>()\n' +
            's.push(1); s.push(2)\n' +
            'console.log(s.pop(), s.size())  // 2 1\n' +
            '```\n\n' +
            '示例三：泛型类 + 泛型方法，Transformer。\n' +
            '```ts\n' +
            'class Transformer<T> {\n' +
            '  constructor(private data: T) {}\n' +
            '  map<U>(fn: (x: T) => U): U { return fn(this.data) }\n' +
            '}\n' +
            'const t = new Transformer(10)\n' +
            'const doubled: number = t.map(x => x * 2)       // T=number, U=number\n' +
            'const text: string = t.map(x => `值是${x}`)      // T=number, U=string\n' +
            'console.log(doubled, text)  // 20 值是10\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **类级类型参数在类体内共享**：字段、方法、构造函数都能用 T，但静态成员不能用（static 属于类本身，与实例类型无关）。\n' +
            '2. **方法级类型参数独立**：`method<U>(x: U)` 的 U 只在该方法内有效，与类级 T 并列，常用于"转换类方法"。\n' +
            '3. **泛型类实例化时类型固定**：`new Stack<number>()` 后 push 字符串会报错，栈内元素类型已锁定为 number。\n' +
            '4. **泛型接口可多实现**：`class X implements A<T>, B<T>` 一次实现多个泛型接口，弥补单继承。\n' +
            '5. **泛型类继承泛型类**：`class UserRepo extends BaseRepo<User>` 父类也带类型参数，子类传入具体类型。\n' +
            '6. **默认类型参数**：`interface F<T = unknown>` 让不传 T 时有默认，调用更简洁，常见于库的设计。\n\n' +
            '## 实际应用\n\n' +
            '泛型数据结构 Stack/Queue/LinkedList 用 `<T>` 适配任意元素类型——一套实现既能存 number 又能存 User，类型安全且零运行时开销。这是泛型最经典的价值，也是"generic data structures"的精髓。\n\n' +
            '在 NestJS/TypeORM 中，`class Repository<T>` 提供对任意实体的增删改查，`userRepository.find()` 返回 `User[]`，`productRepository.find()` 返回 `Product[]`，类型与实体自动关联。' +
            '前端的状态管理（如 RxJS 的 `Observable<T>`、Redux Toolkit 的 `createSlice<State>`）也用泛型类/接口让状态类型流转。' +
            '理解泛型接口与类，是阅读和设计可复用库的核心能力。\n\n' +
            '## 扩展知识\n\n' +
            '- **泛型默认值**：`<T = string>` 让不传 T 时有默认，常用于配置接口、可选泛型。\n' +
            '- **泛型继承**：`class UserRepo extends BaseRepo<User>` 让父类的 T 在子类具象化，是 Repository 模式的标配。\n' +
            '- **泛型与静态成员**：静态成员不能引用类的类型参数 T（T 属于实例），要泛型静态用单独的泛型方法。\n' +
            '- **泛型工厂**：`function create<T>(ctor: new () => T): T` 用构造函数类型 `new () => T` 实现"传入类创建实例"，是依赖注入的基础。\n' +
            '- **泛型 + 装饰器**：TypeORM 的 `@Entity() class User` 配合 `Repository<User>` 让实体与仓库类型联动，是 ORM 的核心设计。',
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
            '## 概念详解\n\n' +
            '`extends` 约束泛型参数，限制可接受的类型范围。`<T extends SomeType>` 要求 T 必须满足 SomeType 的形状。' +
            '约束让泛型函数内可安全访问约束类型的成员，例如 `<T extends { length: number }>` 后可访问 `arg.length`。' +
            '没有约束的话，T 是完全未知类型，访问任何属性都会报错——约束是"在泛型里访问属性"的前提。\n\n' +
            '泛型约束存在的意义是"在灵活性与安全性之间找平衡"。无约束的 T 太宽泛，访问任何成员都报错；' +
            '具体类型又太死板，只能用于一种类型。约束让 T 限定在"满足某形状的一族类型"内，既灵活（适配 string/数组/任何有 length 的）又安全（保证有 length 可访问）。' +
            '约束让泛型既灵活又安全——比 any 强（有类型保证），比具体类型灵活（适配一族类型）。\n\n' +
            '`keyof` 操作符获取类型的所有键的联合，常用于约束"键属于某对象"：`<K extends keyof T>`。' +
            '这让 `get(obj, key)` 的 key 必须是 obj 的真实属性，拼错编译报错，返回类型 `T[K]` 精确对应属性类型。' +
            '约束还可以是构造函数类型 `new (...args) => T`，用于工厂函数创建实例；' +
            '或用 `infer` 在条件类型里"提取"类型参数。keyof + 约束是类型安全对象操作的基础，是 `get`/`pick`/`omit`/`Partial` 等工具的底层。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 接口约束：T 必须有 length\n' +
            'function len<T extends { length: number }>(arg: T): number {\n' +
            '  return arg.length\n' +
            '}\n\n' +
            '// 2. keyof 约束：K 必须是 T 的键\n' +
            'function get<T, K extends keyof T>(obj: T, key: K): T[K] {\n' +
            '  return obj[key]\n' +
            '}\n\n' +
            '// 3. 构造函数约束：用于工厂\n' +
            'function create<T>(Ctor: new (...args: any[]) => T): T {\n' +
            '  return new Ctor()\n' +
            '}\n\n' +
            '// 4. 类型参数互相约束\n' +
            'function copy<T, U extends T>(src: T, dest: U): U { return dest }\n\n' +
            '// 5. 约束到类/抽象类\n' +
            'function make<T extends Animal>(Ctor: new () => T): T { return new Ctor() }\n' +
            '```\n\n' +
            '## 泛型约束形式对照表\n\n' +
            '| 约束形式 | 写法 | 含义 | 典型用途 |\n' +
            '|----------|------|------|----------|\n' +
            '| 接口约束 | `<T extends { length: number }>` | T 有某形状 | len、size |\n' +
            '| keyof 约束 | `<K extends keyof T>` | K 是 T 的键 | get、pick |\n' +
            '| 构造函数 | `<T>(c: new () => T)` | c 可 new 出 T | 工厂、DI |\n' +
            '| 互约束 | `<T, U extends T>` | U 是 T 的子类型 | 复制、合并 |\n' +
            '| 类约束 | `<T extends Animal>` | T 是某类子类 | make、clone |\n' +
            '| 字面量约束 | `<T extends "a" \\| "b">` | T 是字面量联合 | 配置泛型 |\n' +
            '| 条件 + infer | `T extends Promise<infer U> ? U : T` | 提取内部类型 | Unwrap工具 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：length 约束，适配有长度的类型。\n' +
            '```ts\n' +
            'function len<T extends { length: number }>(arg: T): number {\n' +
            '  return arg.length\n' +
            '}\n' +
            'console.log(len("hello"))    // 5\n' +
            'console.log(len([1, 2, 3]))  // 3\n' +
            '// len(123)  // 报错：number 没有 length\n' +
            '```\n\n' +
            '示例二：keyof 约束，类型安全的属性访问。\n' +
            '```ts\n' +
            'function get<T, K extends keyof T>(obj: T, key: K): T[K] {\n' +
            '  return obj[key]\n' +
            '}\n' +
            'const user = { name: "小明", age: 20 }\n' +
            'const n: string = get(user, "name")   // 返回 string\n' +
            'const a: number = get(user, "age")    // 返回 number\n' +
            '// get(user, "email")  // 报错：email 不是 user 的键\n' +
            'console.log(n, a)\n' +
            '```\n\n' +
            '示例三：构造函数约束，工厂创建实例。\n' +
            '```ts\n' +
            'class Point { constructor(public x: number, public y: number) {} }\n' +
            'function create<T>(Ctor: new (x: number, y: number) => T): T {\n' +
            '  return new Ctor(1, 2)\n' +
            '}\n' +
            'const p = create(Point)\n' +
            'console.log(p.x, p.y)  // 1 2\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **无约束的 T 访问属性报错**：`<T>(x: T) => x.length` 报错，需 `<T extends { length: number }>` 才能访问 length。\n' +
            '2. **约束放宽灵活性**：约束越宽（`{ length: number }`）适配类型越多；越窄（`string`）适配越少但更具体，按需权衡。\n' +
            '3. **`T[K]` 索引访问类型**：keyof 约束后用 `T[K]` 取属性类型，返回类型与 key 精确对应，是 `get`/`pick` 的核心。\n' +
            '4. **构造函数约束的 `new () => T`**：是依赖注入和工厂模式的基础，让"传入类、创建实例"类型安全。\n' +
            '5. **类型参数互约束**：`<T, U extends T>` 让 U 必须是 T 的子类型，常用于"复制源到目标"。\n' +
            '6. **`infer` 提取类型**：`T extends Promise<infer U> ? U : T` 从 Promise 里提取 U，是 `Awaited<T>` 工具类型的实现原理。\n\n' +
            '## 实际应用\n\n' +
            '类型安全的对象取值函数 `get<T, K extends keyof T>(obj: T, key: K): T[K]`——key 必须是 obj 的真实属性，拼错编译报错，返回类型精确对应属性类型，彻底消灭 "Cannot read property of undefined"。这是日常开发中最高频的泛型约束用法。\n\n' +
            '在 ORM 中，`Repository<T>.findOne({ where: { id } })` 的 where 字段用 keyof 约束，保证查询字段是实体的真实属性；' +
            '前端表单库（如 react-hook-form）的 `register<K extends keyof T>(name: K)` 让字段名类型安全。' +
            'NestJS 的依赖注入用构造函数约束 `new (...args) => T` 实现"传入类、注入实例"。' +
            '理解泛型约束，是阅读和设计类型安全 API 的进阶能力。\n\n' +
            '## 扩展知识\n\n' +
            '- **`keyof` + `T[K]`**：组合使用让"属性名访问"完全类型安全，是 Pick/Omit/Record 工具的底层。\n' +
            '- **`infer` 提取**：`T extends Array<infer U> ? U : never` 从数组提取元素类型，是 Unwrap 工具的实现。\n' +
            '- **条件类型 + 约束**：`T extends string ? U : V` 是泛型层面的 if-else，配合约束构建高级工具类型。\n' +
            '- **约束到字面量联合**：`<T extends "GET" | "POST">` 让泛型只能取特定字面量，是类型安全 HTTP 客户端的设计。\n' +
            '- **递归约束**：`type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }` 用递归 + 约束实现深度只读。',
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
            '## 概念详解\n\n' +
            '条件类型 `T extends U ? X : Y` 根据类型关系做分支，类似运行时三元表达式但在类型层面。' +
            '常用于工具类型的实现，如 `type IsString<T> = T extends string ? true : false`。' +
            '条件类型让类型系统能"判断"和"分支"，表达能力大幅提升，是类型体操（type-level programming）的核心。\n\n' +
            '条件类型存在的意义是"类型层面的 if-else"。普通类型只能描述静态形状，条件类型能根据入参类型动态决定结果类型。' +
            '这让工具类型（Partial/Pick/Omit/Awaited）成为可能——它们都是用条件类型 + 映射类型实现的。' +
            '没有条件类型，TS 的类型系统就停留在"描述"层面；有了它，TS 的类型系统变成"可计算"的，能表达非常精巧的类型推导。\n\n' +
            '`infer` 在条件类型中"推断"并提取类型，如 `type Unpack<T> = T extends Promise<infer U> ? U : T` 提取 Promise 的元素类型。' +
            'infer 是类型体操的核心关键字，能在类型匹配时捕获子类型——从函数类型推断返回值/参数类型、从数组推断元素类型、从 Promise 推断内部类型，都依赖 infer。' +
            '条件类型对联合类型会"分发"求值（distributive），可递归使用。它是类型体操的基础，但生产中应以可读性为先，避免过度炫技。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 基本条件类型\n' +
            'type IsString<T> = T extends string ? true : false\n\n' +
            '// 2. infer 提取\n' +
            'type Unbox<T> = T extends Array<infer U> ? U : never\n' +
            'type Awaited<T> = T extends Promise<infer U> ? U : T\n\n' +
            '// 3. 联合分发：对联合的每个成员分别求值\n' +
            'type NonNull<T> = T extends null | undefined ? never : T\n\n' +
            '// 4. 条件类型递归\n' +
            'type DeepReadonly<T> = {\n' +
            '  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]\n' +
            '}\n\n' +
            '// 5. 多分支条件（嵌套）\n' +
            'type TypeName<T> =\n' +
            '  T extends string ? "string" :\n' +
            '  T extends number ? "number" :\n' +
            '  T extends boolean ? "boolean" :\n' +
            '  T extends undefined ? "undefined" :\n' +
            '  T extends Function ? "function" :\n' +
            '  "object"\n' +
            '```\n\n' +
            '## 条件类型关键字与形式对照表\n\n' +
            '| 形式 | 写法 | 含义 | 典型用途 |\n' +
            '|------|------|------|----------|\n' +
            '| 基本条件 | `T extends U ? X : Y` | 满足 U 则 X 否则 Y | IsString、TypeName |\n' +
            '| infer 提取 | `T extends Promise<infer U> ? U : T` | 捕获子类型 | Unbox、Awaited |\n' +
            '| 联合分发 | `T extends U ? ... : ...`（T 是联合） | 每个成员分别求值 | NonNull、Exclude |\n' +
            '| 递归 | `type R<T> = ... R<...> ...` | 自引用 | DeepReadonly、DeepPartial |\n' +
            '| 多分支 | 嵌套 `? :` | 类似 if-else 链 | TypeName |\n' +
            '| 阻止分发 | `[T] extends [U]` | 用元组阻止分发 | 精确判断联合 |\n' +
            '| never 短路 | `T extends U ? never : T` | 过滤成员 | Exclude、NonNullable |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基本条件类型，编译期判断。\n' +
            '```ts\n' +
            'type IsNumber<T> = T extends number ? "yes" : "no"\n' +
            'type A = IsNumber<42>       // "yes"\n' +
            'type B = IsNumber<"hi">     // "no"\n' +
            'const a: A = "yes"\n' +
            'const b: B = "no"\n' +
            'console.log(a, b)  // yes no\n' +
            '```\n\n' +
            '示例二：infer 提取 Promise/数组的内部类型。\n' +
            '```ts\n' +
            'type Unbox<T> = T extends Array<infer U> ? U : never\n' +
            'type Await<T> = T extends Promise<infer U> ? U : T\n\n' +
            'type Elem = Unbox<string[]>        // string\n' +
            'type Data = Await<Promise<number>> // number\n' +
            'const e: Elem = "x"\n' +
            'const d: Data = 5\n' +
            'console.log(e, d)  // x 5\n' +
            '```\n\n' +
            '示例三：联合分发 + never 过滤，实现 NonNullable。\n' +
            '```ts\n' +
            'type NonNull<T> = T extends null | undefined ? never : T\n' +
            'type R = NonNull<string | null | undefined>  // string\n' +
            '// 分发过程：string→string，null→never，undefined→never，联合去掉 never 得 string\n' +
            'const r: R = "ok"\n' +
            'console.log(r)  // ok\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **联合分发是默认行为**：`T extends U ? X : Y` 当 T 是联合时，每个成员分别判断再合并；要阻止分发用 `[T] extends [U]`。\n' +
            '2. **`never` 在分发中被过滤**：`never extends U ? X : Y` 直接得 never，不进入分支——这是 Exclude/NonNullable 的关键。\n' +
            '3. **`infer` 只能在条件类型的 extends 子句里**：不能单独使用，必须配合 `T extends Promise<infer U>` 这样的模式。\n' +
            '4. **递归深度有限**：TS 对递归类型有深度限制（约 50 层），过深的类型体操会报 "Type instantiation is excessively deep"。\n' +
            '5. **可读性优先**：条件类型能让代码极简但难懂，生产中应加注释、拆命名，避免"炫技型"类型让团队维护困难。\n' +
            '6. **`extends` 在条件类型里是"可赋值"判断**：`T extends U` 意为 T 能赋值给 U，不等同于面向对象的继承。\n\n' +
            '## 实际应用\n\n' +
            'React 组件库用条件类型推导 props：`type Props<T> = T extends string ? { value: T } : { data: T[] }`——给泛型组件传入不同类型时自动得到不同的 props 形状，API 极度贴合用法，这是高级类型体操的实战价值。\n\n' +
            '在工具类型中，`Awaited<T>` 用 `infer` 递归解包 Promise，让 `async function` 的返回类型自动展开；' +
            '`NonNullable<T>`、`Exclude<T,U>`、`Extract<T,U>` 都用条件类型 + 联合分发实现。' +
            'ORM 的 `QueryBuilder<T>` 用条件类型根据链式调用推导当前查询类型。' +
            '条件类型 + infer 是 TS 类型系统的"图灵完备"基石，能表达任意复杂的类型计算，但生产中应以可读性为先。\n\n' +
            '## 扩展知识\n\n' +
            '- **`infer` 多位置提取**：`T extends (a: infer A) => infer R ? [A, R] : never` 可同时提取参数和返回值类型。\n' +
            '- **阻止分发**：`[T] extends [U]` 用元组包裹阻止联合分发，用于"整体判断"而非逐成员判断。\n' +
            '- **模板字面量类型 + 条件**：`T extends \\`on${infer E}\\` ? E : never` 可从 "onClick" 提取 "Click"，是事件名映射的基础。\n' +
            '- **映射类型 + 条件**：`{ [K in keyof T]: T[K] extends Function ? T[K] : never }` 可过滤出函数属性，是类型体操常见模式。\n' +
            '- **`never` 的短路特性**：`never extends U ? X : Y` 直接得 never，配合分发可实现"过滤"效果，是 Exclude 的核心。',
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
            '## 概念详解\n\n' +
            '交叉类型 `A & B` 把多个类型合并为一个，结果同时拥有所有成员（逻辑与）。' +
            '常用于混入（mixin）：把多个能力的类型组合成一个完整对象的类型。' +
            '交叉类型对对象类型是"合并属性"，若同名属性类型冲突会产生 `never`。与联合类型对比：联合是"或"（取值范围扩大），交叉是"与"（合并要求增多）。\n\n' +
            '交叉类型存在的意义是"类型的组合"。当需要把多个小能力类型拼装成完整对象时，交叉让组合零成本——无需重新定义一个大接口。' +
            '例如把 `Timestamps`、`SoftDelete`、`Owned` 等能力类型交叉，按需拼装出 `User & Timestamps & SoftDelete` 的完整实体类型。' +
            '这与面向对象的继承不同：交叉是"水平组合"，继承是"垂直层级"。在现代 TS 代码中，交叉类型是组合复用的核心工具。\n\n' +
            '理解联合与交叉这对概念是掌握 TS 类型代数的基础。联合类型 `A | B` 的值可以是 A 或 B，交叉类型 `A & B` 的值必须同时满足 A 和 B。' +
            '交叉类型对对象是"并集属性"，对函数是"重载近似"（少见），对同名属性类型冲突会产生 never（如 `{ a: string } & { a: number }` 的 a 是 never）。' +
            '实际开发中，交叉类型配合 `Pick`/`Omit`/`Partial` 能实现非常灵活的类型组合。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 基本交叉：合并属性\n' +
            'interface Named { name: string }\n' +
            'interface Aged { age: number }\n' +
            'type Person = Named & Aged  // { name: string; age: number }\n\n' +
            '// 2. 多类型交叉：混入能力\n' +
            'type Timestamps = { createdAt: string; updatedAt: string }\n' +
            'type SoftDelete = { deletedAt?: string }\n' +
            'type Entity = { id: string } & Timestamps & SoftDelete\n\n' +
            '// 3. 同名冲突会产生 never\n' +
            'type Conflict = { a: string } & { a: number }  // { a: never }\n\n' +
            '// 4. 交叉 + 工具类型\n' +
            'type UserUpdate = Partial<User> & { id: string }  // 部分字段 + 必填 id\n\n' +
            '// 5. 与联合类型对比\n' +
            'type Maybe<T> = T | null      // 或：可为 null\n' +
            'type Full<T> = T & { _v: true }  // 与：附加标记\n' +
            '```\n\n' +
            '## 交叉 vs 联合对照表\n\n' +
            '| 特性 | 交叉类型 `A & B` | 联合类型 `A \\| B` |\n' +
            '|------|------------------|-------------------|\n' +
            '| 逻辑 | 与（同时满足） | 或（取其一） |\n' +
            '| 对象属性 | 合并（并集） | 只能访问共有属性 |\n' +
            '| 同名字段 | 冲突产生 never | 取最后声明的类型 |\n' +
            '| 值的要求 | 必须满足全部 | 满足任一即可 |\n' +
            '| 典型用途 | mixin、组合能力 | 可空、可辨识联合 |\n' +
            '| 与 interface extends | 等效（对象） | 无对应 |\n' +
            '| 运行时 | 擦除 | 擦除 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基本交叉，合并多个接口。\n' +
            '```ts\n' +
            'interface Named { name: string }\n' +
            'interface Aged { age: number }\n' +
            'type Person = Named & Aged\n' +
            'const p: Person = { name: "小明", age: 20 }\n' +
            'console.log(p.name, p.age)  // 小明 20\n' +
            '```\n\n' +
            '示例二：多能力混入，按需拼装实体。\n' +
            '```ts\n' +
            'type Timestamps = { createdAt: string; updatedAt: string }\n' +
            'type WithUser = { userId: string }\n' +
            'type SoftDelete = { deletedAt?: string }\n' +
            'type Record1 = { id: string } & Timestamps & WithUser & SoftDelete\n' +
            'const r: Record1 = { id: "1", createdAt: "now", updatedAt: "now", userId: "u1" }\n' +
            'console.log(r.id, r.userId)  // 1 u1\n' +
            '```\n\n' +
            '示例三：交叉 + Partial，实现"部分更新 + 必填主键"。\n' +
            '```ts\n' +
            'interface User { id: string; name: string; age: number }\n' +
            'type UserUpdate = Partial<User> & { id: string }\n' +
            'function update(u: UserUpdate) { console.log("更新", u.id, u.name) }\n' +
            'update({ id: "1", name: "新名字" })   // 只改 name，age 可省\n' +
            'update({ id: "2" })                    // 只传 id 也合法\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **同名冲突产生 never**：`{ a: string } & { a: number }` 的 a 是 never，实际中几乎无法创建该类型值，要避免设计冲突的交叉。\n' +
            '2. **交叉对象属性是并集**：`A & B` 的对象需同时有 A 和 B 的所有属性，缺一不可。\n' +
            '3. **交叉与 interface extends 等效**：对象类型的交叉可用 `interface C extends A, B` 替代，但 type 交叉还能用于非对象类型。\n' +
            '4. **函数交叉少见**：函数交叉表示"同时满足多签名"，近似重载，但实际调用不便，多见于库的类型定义。\n' +
            '5. **交叉类型可读性**：过多类型交叉会让类型难读，建议用 `type Alias = A & B` 起名，或改用具名 interface extends。\n' +
            '6. **`Partial<T> & { id: string }` 是常见模式**：表达"部分字段 + 必填主键"，用于更新接口。\n\n' +
            '## 实际应用\n\n' +
            '权限系统中 `type Admin = User & { permissions: string[] }` 把基础用户与权限能力交叉——Admin 同时具备 User 的信息和权限字段，无需重新定义全部属性，复用清晰。混入（mixin）模式也依赖交叉类型组合多个能力。\n\n' +
            '在 API 设计中，`type UserUpdate = Partial<User> & { id: string }` 表达"更新接口：id 必填、其他字段可选"；' +
            '在 ORM 中，`Entity & Timestamps & SoftDelete` 让实体按需混入审计字段，避免单一臃肿基类。' +
            '前端的高阶组件（HOC）props 也常用交叉：`type WrappedProps = OwnProps & InjectedProps`，把组件自有 props 与 HOC 注入的 props 合并。' +
            '理解交叉类型，是掌握类型组合与 mixin 模式的关键。\n\n' +
            '## 扩展知识\n\n' +
            '- **mixin 函数**：`function mixin<T extends new (...args) => any>(Base: T) { return class extends Base { extra() {} } }` 用类混入实现运行时组合，类型用交叉描述。\n' +
            '- **`Omit<T, K> & { [K]: U }`**：先删除某字段再添加同名字段，实现"字段类型覆盖"，是改写第三方类型的常见技巧。\n' +
            '- **交叉 vs 继承**：对象交叉等效于 `interface extends A, B`，但 type 交叉更通用（可含联合、字面量）。\n' +
            '- **`UniqueSymbol` 与交叉**：用 unique symbol 在交叉里做"品牌类型"（branded type），实现 nominal typing 的近似。\n' +
            '- **交叉类型与never**：`string & number` 是 never，因为没有任何值能同时是 string 和 number——这常用于"不可能状态"的表达。',
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
            '## 概念详解\n\n' +
            '映射类型 `[K in keyof T]` 遍历类型的键生成新类型，是构造工具类型的核心机制。' +
            '修饰符 `?`（可选）、`readonly`（只读）可在映射中添加（`+`，默认）或移除（`-`）：`-readonly` 去除只读，`-?` 去除可选。' +
            '映射类型让"批量变换类型"成为可能，避免重复手写每个属性——这是 TS 类型系统"可计算"的体现。\n\n' +
            '映射类型存在的意义是"类型的批量变换"。当你有一个 `User` 接口，想要"全部可选"、"全部只读"、"全部变 string"等变体时，' +
            '手写每个属性太啰嗦；映射类型一行 `[K in keyof T]: ...` 就能自动派生。' +
            '内置的 `Partial`、`Required`、`Pick`、`Omit`、`Readonly` 都是基于映射类型实现的——掌握映射类型等于掌握了"类型层面的循环"，能根据现有类型自动派生新类型。\n\n' +
            '映射类型的语法 `[K in keyof T]: NewType` 表示对 T 的每个键 K，生成同名的 NewType 字段。' +
            'NewType 可以引用 `T[K]`（原字段类型）做变换，如变可选（`T[K]?`）、变只读（`readonly T[K]`）、变字符串（`string`）。' +
            '映射类型配合条件类型，能表达极其复杂的类型变换——根据原字段类型决定新字段类型，是类型体操的核心技巧。' +
            '理解映射类型，是阅读 `Partial<T>`、`Readonly<T>` 等工具类型源码的基础。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 基本映射：遍历键\n' +
            'type Stringify<T> = { [K in keyof T]: string }\n\n' +
            '// 2. 加可选 +\n' +
            'type MyPartial<T> = { [K in keyof T]?: T[K] }\n\n' +
            '// 3. 加只读\n' +
            'type MyReadonly<T> = { readonly [K in keyof T]: T[K] }\n\n' +
            '// 4. 移除修饰符 -\n' +
            'type Concrete<T> = { [K in keyof T]-?: T[K] }       // 移除可选\n' +
            'type Mutable<T> = { -readonly [K in keyof T]: T[K] } // 移除只读\n\n' +
            '// 5. 配合条件类型\n' +
            'type FunctionsOnly<T> = {\n' +
            '  [K in keyof T]: T[K] extends Function ? T[K] : never\n' +
            '}\n\n' +
            '// 6. 键重映射（TS 4.4+）\n' +
            'type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }\n' +
            '```\n\n' +
            '## 映射类型修饰符与变体对照表\n\n' +
            '| 形式 | 写法 | 含义 | 等效内置 |\n' +
            '|------|------|------|----------|\n' +
            '| 加可选 | `[K in keyof T]?` | 所有字段可选 | `Partial<T>` |\n' +
            '| 移除可选 | `[K in keyof T]-?` | 所有字段必填 | `Required<T>` |\n' +
            '| 加只读 | `readonly [K in keyof T]` | 所有字段只读 | `Readonly<T>` |\n' +
            '| 移除只读 | `-readonly [K in keyof T]` | 所有字段可改 | — |\n' +
            '| 类型变换 | `[K in keyof T]: string` | 字段类型统一改 | `Stringify` |\n' +
            '| 条件映射 | `[K in keyof T]: T[K] extends ... ? ... : ...` | 按原类型分支 | 自定义 |\n' +
            '| 键重映射 | `[K in keyof T as NewKey]` | 改键名 | `Getters<T>` |\n' +
            '| 过滤键 | `[K in keyof T as T[K] extends U ? K : never]` | 按类型过滤键 | 自定义 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：MyPartial + MyReadonly，复刻内置工具。\n' +
            '```ts\n' +
            'type MyPartial<T> = { [K in keyof T]?: T[K] }\n' +
            'type MyReadonly<T> = { readonly [K in keyof T]: T[K] }\n' +
            'interface User { name: string; age: number }\n' +
            'const u: MyPartial<User> = { name: "小明" }   // age 可省\n' +
            'const p: MyReadonly<User> = { name: "小明", age: 20 }\n' +
            '// p.name = "x"  // 报错：readonly\n' +
            'console.log(u.name, p.age)  // 小明 20\n' +
            '```\n\n' +
            '示例二：移除修饰符 -? / -readonly。\n' +
            '```ts\n' +
            'type Concrete<T> = { [K in keyof T]-?: T[K] }\n' +
            'type Mutable<T> = { -readonly [K in keyof T]: T[K] }\n' +
            'interface Opt { a?: number; b?: string }\n' +
            'const o: Concrete<Opt> = { a: 1, b: "x" }  // a、b 都必填\n' +
            'interface Frozen { readonly x: number }\n' +
            'const f: Mutable<Frozen> = { x: 1 }\n' +
            'f.x = 2  // OK，只读被移除\n' +
            'console.log(o.a, f.x)\n' +
            '```\n\n' +
            '示例三：键重映射，生成 getter 方法集。\n' +
            '```ts\n' +
            'type Getters<T> = {\n' +
            '  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]\n' +
            '}\n' +
            'interface Person { name: string; age: number }\n' +
            'type PersonGetters = Getters<Person>\n' +
            '// { getName: () => string; getAge: () => number }\n' +
            'const g: PersonGetters = {\n' +
            '  getName: () => "小明",\n' +
            '  getAge: () => 20,\n' +
            '}\n' +
            'console.log(g.getName(), g.getAge())  // 小明 20\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **修饰符 + / -**：`+?`/`+readonly` 是默认（可省 +），`-?`/`-readonly` 是移除；用错会得到相反结果。\n' +
            '2. **映射类型不拷贝方法签名**：对类做映射会丢失方法，因为映射只保留属性形状；要保留方法用 `interface extends` 或手动写。\n' +
            '3. **键重映射需 TS 4.4+**：`[K in keyof T as NewKey]` 是较新语法，老版本不支持。\n' +
            '4. **`as never` 过滤键**：在键重映射里 `as T[K] extends U ? K : never` 可按值类型过滤键，是高级技巧。\n' +
            '5. **映射类型与条件类型组合**：`[K in keyof T]: T[K] extends ... ? ... : ...` 能按字段类型分支，是类型体操核心。\n' +
            '6. **`keyof T` 的顺序**：映射顺序按 keyof 结果，一般与定义顺序一致，但联合类型可能不保证。\n\n' +
            '## 实际应用\n\n' +
            '表单更新场景用映射类型把所有字段变可选 `Partial<FormValues>`，让 `patch(form, partialValues)` 只传需要改的字段——无需为每个字段写可选版本，类型自动生成。这是映射类型最日常的用途。\n\n' +
            '在 ORM 中，`Readonly<T>` 让实体只读、`Partial<T>` 用于更新 DTO、`Pick<T, K>` 用于投影查询；' +
            '前端表单库用映射类型生成 getter/setter（`Getters<T>`、`Setters<T>`），让状态访问类型安全。' +
            'API 客户端用 `Pick<User, "id" | "name">` 描述"列表接口只返回部分字段"，自动收窄类型。' +
            '映射类型是工具类型的基石，几乎每个 TS 项目都在间接使用它们。\n\n' +
            '## 扩展知识\n\n' +
            '- **键重映射 `as`**：`[K in keyof T as \\`get${Capitalize<K>}\\`]` 可批量改键名，是生成 getter/setter 的利器。\n' +
            '- **过滤键**：`[K in keyof T as T[K] extends Function ? K : never]` 只保留函数属性，是"按类型选键"的技巧。\n' +
            '- **`Pick<T, K>` / `Omit<T, K>`**：本质是映射 + 条件类型，`Pick` 用 `K in K extends keyof T`，`Omit` 用 `K in Exclude<keyof T, K>`。\n' +
            '- **`Record<K, V>`**：`{ [K in K]: V }`，当 K 是联合时生成多个键，是批量构造对象类型的工具。\n' +
            '- **递归映射**：`type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }` 实现深度只读，是类型体操入门题。',
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
            '## 概念详解\n\n' +
            'TypeScript 内置一组高频工具类型：`Partial<T>` 所有属性变可选；`Required<T>` 所有属性变必填（移除可选）。' +
            '`Pick<T, Keys>` 从 T 中选取指定键组成子类型；`Omit<T, Keys>` 排除指定键。' +
            '`Record<K, V>` 构造键为 K、值为 V 的对象类型。这些工具类型日常使用频率极高，能大幅减少重复定义。\n\n' +
            '工具类型存在的意义是"从已有类型派生新类型"。当同一份 `User` 在不同场景需要不同视图时（列表接口返回精简、详情返回完整、更新接口接收部分），' +
            '手写多份类型会重复且易脱节；用 `Pick`/`Omit`/`Partial` 从 `User` 派生，改 `User` 一处所有视图自动更新。' +
            '这与"DRY（不重复）"原则一脉相承，是 TS 类型系统应对"类型重复"的核心工具。\n\n' +
            'Pick 和 Omit 互为补充：Pick 选取需要的（白名单），Omit 排除不要的（黑名单）。' +
            'Record 适合构造字典/映射结构，如 `Record<string, number>` 表示任意字符串键到数字的映射。' +
            '灵活组合这些工具类型，能让类型定义既精确又不冗余。它们是 TS 项目的"日常工具箱"，几乎每个文件都在使用。' +
            '理解这些工具的实现（基于映射类型 + 条件类型），能帮你写出自己的工具类型。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. Partial<T>：所有字段可选\n' +
            'type P = Partial<{ a: string; b: number }>  // { a?: string; b?: number }\n\n' +
            '// 2. Required<T>：所有字段必填（移除 ?）\n' +
            'type R = Required<{ a?: string }>  // { a: string }\n\n' +
            '// 3. Pick<T, K>：选取指定键\n' +
            'type Preview = Pick<User, "id" | "name">  // { id: ...; name: ... }\n\n' +
            '// 4. Omit<T, K>：排除指定键\n' +
            'type CreateDTO = Omit<User, "id">  // User 去掉 id\n\n' +
            '// 5. Record<K, V>：构造键值映射\n' +
            'type Dict = Record<string, number>  // { [k: string]: number }\n\n' +
            '// 6. Readonly<T>：所有字段只读\n' +
            'type Frozen = Readonly<User>\n\n' +
            '// 7. 组合使用\n' +
            'type UpdateDTO = Partial<Omit<User, "id">> & { id: string }\n' +
            '```\n\n' +
            '## 内置工具类型对照表\n\n' +
            '| 工具类型 | 写法 | 作用 | 等效实现 | 典型用途 |\n' +
            '|----------|------|------|----------|----------|\n' +
            '| `Partial<T>` | `Partial<User>` | 全字段可选 | `{ [K in keyof T]?: T[K] }` | 更新 DTO |\n' +
            '| `Required<T>` | `Required<T>` | 全字段必填 | `{ [K in keyof T]-?: T[K] }` | 强制完整 |\n' +
            '| `Readonly<T>` | `Readonly<T>` | 全字段只读 | `{ readonly [K in keyof T]: T[K] }` | 不可变状态 |\n' +
            '| `Pick<T, K>` | `Pick<User, "id">` | 选取键 | `{ [P in K]: T[P] }` | 列表视图 |\n' +
            '| `Omit<T, K>` | `Omit<User, "id">` | 排除键 | `Pick<T, Exclude<keyof T, K>>` | 创建 DTO |\n' +
            '| `Record<K, V>` | `Record<string, T>` | 构造映射 | `{ [P in K]: V }` | 字典 |\n' +
            '| `Exclude<T, U>` | `Exclude<A\\|B, A>` | 联合排除 | `T extends U ? never : T` | 联合过滤 |\n' +
            '| `Extract<T, U>` | `Extract<A\\|B, A>` | 联合提取 | `T extends U ? T : never` | 联合筛选 |\n' +
            '| `NonNullable<T>` | `NonNullable<T>` | 去除 null/undefined | `T extends null\\|undefined ? never : T` | 可空收窄 |\n' +
            '| `ReturnType<F>` | `ReturnType<fn>` | 函数返回类型 | `F extends (...a) => infer R ? R : never` | 推导返回 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：Partial 更新，Pick 列表视图。\n' +
            '```ts\n' +
            'interface User { id: number; name: string; email: string }\n' +
            'type UserPreview = Pick<User, "id" | "name">       // 列表只返回 id+name\n' +
            'type UpdateDTO = Partial<Omit<User, "id">>          // 更新：排除 id，其余可选\n' +
            'function update(u: User, patch: UpdateDTO): User { return { ...u, ...patch } }\n' +
            'const list: UserPreview[] = [{ id: 1, name: "小明" }]\n' +
            'console.log(update({ id: 1, name: "x", email: "e" }, { name: "新名" }))\n' +
            '```\n\n' +
            '示例二：Omit 创建 DTO，排除后端生成字段。\n' +
            '```ts\n' +
            'interface Product { id: number; name: string; price: number; createdAt: string }\n' +
            'type CreateProduct = Omit<Product, "id" | "createdAt">  // 创建时不传 id 和时间戳\n' +
            'function create(p: CreateProduct): Product {\n' +
            '  return { ...p, id: Date.now(), createdAt: new Date().toISOString() }\n' +
            '}\n' +
            'console.log(create({ name: "书", price: 10 }))\n' +
            '```\n\n' +
            '示例三：Record 构造字典，类型安全的映射。\n' +
            '```ts\n' +
            'type Role = "admin" | "user" | "guest"\n' +
            'type Permissions = Record<Role, string[]>  // 每个角色对应权限数组\n' +
            'const perms: Permissions = {\n' +
            '  admin: ["read", "write", "delete"],\n' +
            '  user: ["read", "write"],\n' +
            '  guest: ["read"],\n' +
            '}\n' +
            'console.log(perms.admin)  // ["read","write","delete"]\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **`Omit` 不保留修饰符**：`Omit<User, "id">` 的结果字段是必填的普通字段，原 readonly/? 可能丢失（TS 4.5+ 改进）。\n' +
            '2. **`Pick` 的键必须是 keyof T**：`Pick<User, "email">` 合法，`Pick<User, "foo">` 报错，foo 不在 User 里。\n' +
            '3. **`Partial` 只变一层可选**：嵌套对象的字段不会递归变可选，要深度可选自定义 `DeepPartial<T>`。\n' +
            '4. **`Record<K, V>` 的 K 可联合**：`Record<"a" | "b", number>` 生成 `{ a: number; b: number }`，缺一报错。\n' +
            '5. **`ReturnType` 只对函数类型**：`ReturnType<typeof JSON.parse>` 得 `any`，`ReturnType<() => User>` 得 `User`。\n' +
            '6. **组合优于手写**：`Partial<Omit<User, "id">> & { id: string }` 比手写更新接口更易维护，改 User 自动同步。\n\n' +
            '## 实际应用\n\n' +
            'API 列表接口返回 `Pick<User, "id" | "name">` 的精简对象，详情接口返回完整 User——同一份 User 定义用 Pick 派生不同视图，避免维护多份重复类型。React 组件 props typing 也常用 Pick 从完整配置类型派生子组件所需的部分。\n\n' +
            '在表单系统中，`Partial<FormValues>` 让 patch 接口只传改动字段；`Omit<User, "id">` 让创建表单不显示 id（后端生成）；' +
            '`Record<Role, Permission[]>` 让权限映射类型安全，缺一个角色立即报错。' +
            '在状态管理中，`Readonly<State>` 让 reducer 外不可变，强制通过 action 修改。' +
            '这些工具类型是 TS 项目的"胶水"，几乎每个文件都在间接或直接使用。\n\n' +
            '## 扩展知识\n\n' +
            '- **`DeepPartial<T>`**：递归把所有嵌套字段变可选，常用于配置合并、深度 patch。\n' +
            '- **`DeepReadonly<T>`**：递归只读，让整个对象树不可变，是 Redux/不可变状态的标配。\n' +
            '- **`Mutable<T>`**：移除 readonly，反向于 `Readonly<T>`，需自定义（`-readonly [K in keyof T]`）。\n' +
            '- **`ReturnType` / `Parameters`**：从函数类型提取返回/参数类型，配合 `typeof fn` 用，是"从值反推类型"的关键。\n' +
            '- **`Awaited<T>`**：递归解包 Promise，让 `async function` 的 `ReturnType` 自动展开嵌套 Promise。',
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
            '## 概念详解\n\n' +
            '自定义工具类型（User-Defined Utility Types）是开发者通过组合映射类型、条件类型、`keyof`、`infer` 等机制构造的、可在项目内复用的类型函数。' +
            '当内置工具类型（`Partial`/`Pick`/`Omit` 等）无法表达项目特有的领域约束时，自定义工具类型便成为填补空白的手段，例如把嵌套对象全部变可选、提取函数返回值、生成 builder 链式方法等。\n\n' +
            '它存在的根本原因是：业务系统中类型模式高度重复。前端常需要"更新部分字段""提取表单字段""把后端 DTO 转成前端视图"等转换，手写这些类型既冗长又易错。' +
            '把转换逻辑封装成工具类型后，类型层与业务模型保持同步，修改一处即处处生效，符合 DRY（Don\'t Repeat Yourself）原则。\n\n' +
            '使用时机：当你发现两个以上的类型定义存在明显同构关系、或需要把一个类型按规则变换成另一个类型时，就该考虑提取工具类型。' +
            '生产实践中，DeepPartial、Mutable、GetKeys、MyReturn 等是高频自定义工具类型。务必以"够用且可读"为度，过度炫技会导致类型难以维护。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. DeepPartial：递归地使所有层级属性可选\n' +
            'type DeepPartial<T> = {\n' +
            '  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];\n' +
            '};\n\n' +
            '// 2. DeepReadonly：递归只读\n' +
            'type DeepReadonly<T> = {\n' +
            '  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];\n' +
            '};\n\n' +
            '// 3. Mutable：移除 readonly 修饰符（-readonly）\n' +
            'type Mutable<T> = { -readonly [K in keyof T]: T[K] };\n\n' +
            '// 4. GetKeys：提取对象类型的所有键（等同 keyof）\n' +
            'type GetKeys<T> = keyof T;\n\n' +
            '// 5. MyReturn：用 infer 提取函数返回值类型\n' +
            'type MyReturn<T extends (...args: any[]) => any> =\n' +
            '  T extends (...args: any[]) => infer R ? R : never;\n\n' +
            '// 6. KeysOfType：筛选出值为指定类型的键\n' +
            'type KeysOfType<T, V> = {\n' +
            '  [K in keyof T]: T[K] extends V ? K : never;\n' +
            '}[keyof T];\n' +
            '```\n\n' +
            '## 自定义工具类型对照表\n\n' +
            '| 工具类型 | 写法 | 作用 | 典型场景 |\n' +
            '|----------|------|------|----------|\n' +
            '| `DeepPartial<T>` | `{ [K in keyof T]?: ... }` 递归 | 所有层级属性可选 | 配置合并、深度更新 |\n' +
            '| `DeepReadonly<T>` | `readonly [K in keyof T]: ...` 递归 | 所有层级只读 | 不可变状态 |\n' +
            '| `Mutable<T>` | `{ -readonly [K in keyof T]: T[K] }` | 移除 readonly | 测试中改只读字段 |\n' +
            '| `GetKeys<T>` | `keyof T` | 提取键的联合类型 | 动态属性访问 |\n' +
            '| `MyReturn<T>` | `infer R` 提取返回值 | 等同内置 ReturnType | 自实现工具类型 |\n' +
            '| `KeysOfType<T,V>` | 映射 + 条件筛选 | 筛选值为 V 的键 | 提取所有方法名 |\n' +
            '| `NonUndefined<T>` | `T extends undefined ? never : T` | 排除 undefined | 严格可空校验 |\n' +
            '| `Nullable<T>` | `T \\| null` | 包装成可空 | 表达可选资源 |\n' +
            '| `Optional<T,K>` | `Omit<T,K> & Partial<Pick<T,K>>` | 指定键变可选 | 灵活字段可空 |\n' +
            '| `Paths<T>` | 递归路径字符串 | 生成嵌套路径联合 | 类型安全的 get |\n\n' +
            '## 代码示例\n\n' +
            '示例一：DeepPartial 用于配置深度合并。\n' +
            '```ts\n' +
            'type DeepPartial<T> = {\n' +
            '  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];\n' +
            '};\n\n' +
            'interface AppConfig {\n' +
            '  db: { host: string; port: number; user: string };\n' +
            '  cache: { ttl: number; maxSize: number };\n' +
            '}\n\n' +
            '// 部分覆盖：只改 port，其余字段保持原值\n' +
            'const override: DeepPartial<AppConfig> = {\n' +
            '  db: { port: 5432 },\n' +
            '  cache: { ttl: 60 },\n' +
            '};\n' +
            'console.log(override.db?.port); // 5432\n' +
            'console.log(override.cache?.ttl); // 60\n' +
            '```\n\n' +
            '示例二：Mutable 解锁只读字段用于单元测试。\n' +
            '```ts\n' +
            'type Mutable<T> = { -readonly [K in keyof T]: T[K] };\n\n' +
            'interface Point {\n' +
            '  readonly x: number;\n' +
            '  readonly y: number;\n' +
            '}\n\n' +
            'const p: Mutable<Point> = { x: 1, y: 2 };\n' +
            'p.x = 5;  // 不会报错，因为 Mutable 移除了 readonly\n' +
            'console.log(p.x); // 5\n' +
            '```\n\n' +
            '示例三：KeysOfType 提取所有方法名。\n' +
            '```ts\n' +
            'type KeysOfType<T, V> = {\n' +
            '  [K in keyof T]: T[K] extends V ? K : never;\n' +
            '}[keyof T];\n\n' +
            'class Service {\n' +
            '  name: string = "svc";\n' +
            '  fetch(): void {}\n' +
            '  save(): void {}\n' +
            '  count: number = 0;\n' +
            '}\n\n' +
            '// 筛选值为函数类型的键\n' +
            'type Methods = KeysOfType<Service, (...args: any[]) => any>;\n' +
            '// Methods 类型为 "fetch" \\| "save"\n' +
            'const m: Methods = "fetch";\n' +
            'console.log(m); // fetch\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **递归深度爆炸**：DeepPartial 等递归类型在嵌套对象很深或存在循环引用时，可能触发 TS 编译器深度限制。建议限制递归层数或避免自引用结构。\n' +
            '2. **`-readonly` 与 `+readonly`**：映射类型中 `-` 前缀移除修饰符，`+`（默认）添加。`-readonly` 用于 Mutable，`-?` 用于 Required。\n' +
            '3. **`infer` 只能在条件类型中**：`infer R` 必须出现在 `T extends ... ? infer R : never` 的 extends 子句中，不能独立使用。\n' +
            '4. **KeysOfType 不能直接得到键联合**：必须用 `[keyof T]` 索引访问才能把映射类型塌缩成联合类型，否则得到的是带 never 的对象类型。\n' +
            '5. **可读性优先于炫技**：复杂的递归工具类型对团队成员理解负担大，必要时拆成多个有名字的小工具类型，或加注释说明意图。\n' +
            '6. **性能考虑**：大型项目里过度复杂的工具类型会拖慢 IDE 提示和编译速度，遇到慢建议简化或缓存中间类型。\n\n' +
            '## 实际应用\n\n' +
            '类型安全的 builder 模式是自定义工具类型的经典应用：用映射类型为每个字段生成链式 setter 方法，build 方法返回完整对象，类型保证必填字段都设置过。' +
            '例如 `type Builder<T> = { [K in keyof T]: (v: T[K]) => Builder<T> } & { build(): T }`——每个字段一个链式方法，build 返回完整对象。这是"builder pattern with types"的精髓，在前端表单、SQL 构造器、查询 DSL 中广泛应用。\n\n' +
            '另一典型场景是 ORM/DTO 转换：后端返回的实体带 `id`、`createdAt` 等系统字段，前端提交时不需要这些。可以定义 `type CreateDTO<T> = Omit<T, "id" \\| "createdAt">`，配合 DeepPartial 实现部分更新 DTO。' +
            '这样后端模型变更时，前端类型自动跟随，避免遗漏。在 NestJS、TypeORM、Prisma 等框架中，类似模式非常常见。\n\n' +
            '## 扩展知识\n\n' +
            '- **`Paths<T>` 路径工具类型**：递归生成 `"a.b.c"` 形式的字符串联合，用于类型安全的 lodash.get / immer 路径访问。\n' +
            '- **`Tail<T>` 取元组尾部**：用 `T extends [any, ...infer Rest] ? Rest : []` 提取元组除首元素外的部分，函数式编程中常用。\n' +
            '- **`Awaited<T>` 拆 Promise**：递归地把 `Promise<Promise<X>>` 拆成 `X`，等价于内置 `Awaited`，理解它有助于掌握条件类型递归。\n' +
            '- **`UnionToIntersection<U>`**：用分配性条件类型把联合 `A \\| B` 转成交叉 `A & B`，是高级技巧，常用于把多个函数重载合并。\n' +
            '- **模板字面量类型 + 工具类型**：`type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }` 可自动生成 getter 名，配合映射类型的 `as` 重映射键，威力巨大。',
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
            '## 概念详解\n\n' +
            '类型守卫（Type Guard）是 TypeScript 提供的一种运行时检查机制，让编译器在某个分支内把联合类型收窄（narrowing）到具体成员。' +
            '常见守卫包括 `typeof v === "string"`、`instanceof Cat`、`"swim" in a`，三者分别用于基本类型、类实例、对象结构判别。' +
            '没有类型守卫，联合类型 `A | B` 只能访问 A 与 B 共有的属性，无法安全调用各自独有的方法。\n\n' +
            '它存在的意义在于：JS 是动态类型语言，运行时值的具体类型可能与编译期声明的联合类型不同。' +
            '类型守卫让你写出"运行时检查 + 编译期收窄"的代码——既保证运行安全，又保留类型信息，避免 `as` 强制断言和 `any` 退路。' +
            '掌握 narrowing 是写好联合类型代码的关键，也是判别联合（discriminated union）模式的基础。\n\n' +
            '使用场景：处理 API 返回的混合类型数据、表单字段可能为多种类型、事件处理中区分不同子类型、操作 DOM 节点区分 HTMLElement 子类等。' +
            '选择守卫的经验法则：基本类型用 `typeof`，类实例用 `instanceof`，对象结构差异用 `in`，复杂判断用自定义类型守卫（下一节）。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. typeof：检查基本类型\n' +
            'function process(v: string | number): string {\n' +
            '  if (typeof v === "string") return v.toUpperCase(); // v 收窄为 string\n' +
            '  return v.toFixed(2);  // v 收窄为 number\n' +
            '}\n\n' +
            '// 2. instanceof：检查类实例的原型链\n' +
            'class Cat { meow() { return "喵"; } }\n' +
            'class Dog { bark() { return "汪"; } }\n' +
            'function speak(a: Cat | Dog): string {\n' +
            '  if (a instanceof Cat) return a.meow();  // a 收窄为 Cat\n' +
            '  return a.bark();  // a 收窄为 Dog\n' +
            '}\n\n' +
            '// 3. in：检查属性是否存在于对象\n' +
            'interface Fish { swim(): string; }\n' +
            'interface Bird { fly(): string; }\n' +
            'function move(a: Fish | Bird): string {\n' +
            '  if ("swim" in a) return a.swim();  // a 收窄为 Fish\n' +
            '  return a.fly();  // a 收窄为 Bird\n' +
            '}\n\n' +
            '// 4. 与 else 分支配合：自动排除已检查的成员\n' +
            'function describe(v: string | number | boolean): string {\n' +
            '  if (typeof v === "string") return "文字: " + v;\n' +
            '  if (typeof v === "number") return "数字: " + v;\n' +
            '  return "布尔: " + v;  // 自动收窄为 boolean\n' +
            '}\n' +
            '```\n\n' +
            '## 类型守卫对照表\n\n' +
            '| 守卫形式 | 语法 | 适用场景 | 收窄结果 | 备注 |\n' +
            '|----------|------|----------|----------|------|\n' +
            '| `typeof` | `typeof v === "string"` | 基本类型判别 | string/number/boolean/undefined/object/function | 不能区分子类型，object 包括 null |\n' +
            '| `instanceof` | `v instanceof Cat` | 类实例判别 | 收窄到该类 | 检查原型链，需要构造函数 |\n' +
            '| `in` | `"swim" in v` | 对象结构判别 | 收窄到含该属性的成员 | 私有属性也检测 |\n' +
            '| `===` 字面量 | `v === "left"` | 字面量联合判别 | 收窄到该字面量 | 用于判别联合 |\n' +
            '| `== null` | `v == null` | 同时排除 null 和 undefined | 收窄为非空 | `==` 而非 `===` |\n' +
            '| 数组判别 | `Array.isArray(v)` | 数组与非数组判别 | 收窄为 Array | 唯一可靠的数组判别方式 |\n' +
            '| `!` 非空断言 | `v!.foo` | 排除 undefined/null | 不真正守卫，仅编译期 | 运行时不检查，慎用 |\n' +
            '| truthy 检查 | `if (v)` | 排除 falsy 值 | 排除 0/""/null/undefined/false | 注意 0 和 "" 也会被排除 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：typeof 处理混合类型 ID。\n' +
            '```ts\n' +
            'function formatId(id: string | number): string {\n' +
            '  if (typeof id === "string") {\n' +
            '    return id.padStart(8, "0");  // 字符串走补零\n' +
            '  }\n' +
            '  return "ID-" + id.toString().padStart(6, "0");  // 数字走前缀格式\n' +
            '}\n' +
            'console.log(formatId("abc"));   // 00000abc\n' +
            'console.log(formatId(42));      // ID-000042\n' +
            '```\n\n' +
            '示例二：instanceof 区分错误类型。\n' +
            '```ts\n' +
            'function handleError(err: TypeError | RangeError | Error): string {\n' +
            '  if (err instanceof TypeError) {\n' +
            '    return "类型错误: " + err.message;\n' +
            '  }\n' +
            '  if (err instanceof RangeError) {\n' +
            '    return "范围错误: " + err.message;\n' +
            '  }\n' +
            '  return "通用错误: " + err.message;\n' +
            '}\n' +
            'console.log(handleError(new TypeError("x is undefined")));\n' +
            '```\n\n' +
            '示例三：in 区分接口实现。\n' +
            '```ts\n' +
            'interface ApiSuccess<T> { data: T; status: 200; }\n' +
            'interface ApiError { error: string; status: 400; }\n' +
            'type ApiResponse<T> = ApiSuccess<T> | ApiError;\n\n' +
            'function handle<T>(res: ApiResponse<T>): string {\n' +
            '  if ("data" in res) {\n' +
            '    return "成功: " + JSON.stringify(res.data);\n' +
            '  }\n' +
            '  return "失败: " + res.error;\n' +
            '}\n' +
            'console.log(handle({ data: [1, 2], status: 200 }));\n' +
            'console.log(handle({ error: "未找到", status: 400 }));\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **`typeof null === "object"`**：JS 历史遗留问题，用 `=== null` 而非 `typeof` 区分 null。\n' +
            '2. **`typeof` 返回值是小写字符串**：必须是 `"string"` 而非 `"String"`，大小写敏感。\n' +
            '3. **`instanceof` 跨 iframe 失效**：不同 iframe/Window 的 Array 构造函数不同，`[] instanceof Array` 可能假阴性，应改用 `Array.isArray`。\n' +
            '4. **`in` 检测原型属性**：`"toString" in {}` 也为 true，因为它在原型链上。要排除原型属性需用 `Object.hasOwn`。\n' +
            '5. **narrowing 只在分支内有效**：函数闭包、异步回调中可能失效，因为 TS 无法保证闭包执行时类型未变。建议在闭包内重新断言或显式类型守卫。\n' +
            '6. **不要滥用 `as` 替代守卫**：`as` 是编译期断言不保证运行时类型，而守卫是真实运行时检查。能用守卫就用守卫。\n\n' +
            '## 实际应用\n\n' +
            '处理来自第三方 API 的混合数据（字符串或数字 ID）时，`typeof` 守卫让代码在两条分支分别安全处理——字符串走解析、数字直接用，无需 any 和强制断言。这是处理"不确定类型的外部数据"的标准手法。\n\n' +
            '另一典型场景是 DOM 操作：`document.querySelector` 返回 `Element | null`，配合 `instanceof HTMLInputElement` 可安全访问 `value` 属性；事件处理中 `event.target instanceof HTMLButtonElement` 让你安全拿到按钮特有属性，避免对泛化 `EventTarget` 强制断言。\n\n' +
            '## 扩展知识\n\n' +
            '- **判别联合（Discriminated Union）**：所有成员共享一个字面量字段（如 `status`/`type`/`kind`），TS 能根据该字段自动收窄，是最优雅的联合类型处理方式。\n' +
            '- **`switch (v.kind)` 收窄**：对判别联合用 switch 比 if-else 更清晰，且 TS 能保证所有 case 处理后 default 分支类型为 never（exhaustiveness check）。\n' +
            '- **`asserts` 关键字**：自定义守卫函数可声明 `asserts x is T`，调用后函数内后续代码自动收窄，常用于断言库。\n' +
            '- **`satisfies` 运算符**：TS 4.9+ 提供，让对象字面量在不拓宽类型的前提下满足某约束，可配合判别联合做更精确的收窄。\n' +
            '- **窄化反向操作 ` widening`**：字面量类型在赋值给变量时会被拓宽为基类型（`"a"` → `string`），用 `as const` 可阻止拓宽，配合守卫做更细的类型区分。',
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
            '## 概念详解\n\n' +
            '自定义类型守卫（User-Defined Type Guard）是一种返回类型为 `参数 is 类型` 的函数，让 TypeScript 在函数返回 true 时把参数收窄到指定类型。' +
            '形式如 `function isString(v: unknown): v is string { return typeof v === "string" }`。' +
            '类型谓词 `is` 是关键关键字，它把"运行时返回布尔"提升为"编译期类型收窄信号"，让任意检查函数都能成为类型守卫。\n\n' +
            '它存在的根本原因是：内置守卫（typeof/in/instanceof）只能表达简单判断，无法描述"对象含有某字段且字段类型正确""数组每个元素都是某类型"等复合规则。' +
            '自定义守卫让你把任意运行时校验逻辑封装成可复用的类型谓词函数，把"信任边界外"的数据安全引入类型系统。' +
            '这是构建类型安全 API 客户端、解析 JSON 配置、校验表单输入等场景的核心技术。\n\n' +
            '使用时机：当你需要校验来自 localStorage、网络 API、用户输入、JSON.parse 的数据，且这些数据类型在编译期无法保证时，就该用自定义守卫。' +
            '良好实践是：先 isObject 排除非对象，再检查必需字段是否存在且类型正确，必要时递归校验嵌套结构。' +
            '守卫函数命名约定：以 `is` 开头（`isString`/`isUser`/`isNumberArray`），语义清晰。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 基本类型谓词\n' +
            'function isString(v: unknown): v is string {\n' +
            '  return typeof v === "string";\n' +
            '}\n\n' +
            '// 2. 对象守卫：检查必需字段\n' +
            'interface User { name: string; age: number; }\n' +
            'function isUser(v: unknown): v is User {\n' +
            '  return typeof v === "object" && v !== null &&\n' +
            '    "name" in v && typeof (v as any).name === "string" &&\n' +
            '    "age" in v && typeof (v as any).age === "number";\n' +
            '}\n\n' +
            '// 3. 数组元素守卫\n' +
            'function isNumberArray(v: unknown): v is number[] {\n' +
            '  return Array.isArray(v) && v.every(x => typeof x === "number");\n' +
            '}\n\n' +
            '// 4. asserts 谓词：抛错而非返回布尔\n' +
            'function assertNonNull<T>(v: T | null | undefined): asserts v is T {\n' +
            '  if (v === null || v === undefined) throw new Error("空值");\n' +
            '}\n\n' +
            '// 5. 守卫组合：先 isObject 再 isUser\n' +
            'function isObject(v: unknown): v is Record<string, unknown> {\n' +
            '  return typeof v === "object" && v !== null;\n' +
            '}\n' +
            '```\n\n' +
            '## 类型谓词形式对照表\n\n' +
            '| 形式 | 语法 | 行为 | 典型用途 |\n' +
            '|------|------|------|----------|\n' +
            '| `is` 谓词 | `v is T` | 返回 true 时收窄为 T | 校验函数 |\n' +
            '| `asserts is` | `asserts v is T` | 不抛错时收窄为 T | 断言函数 |\n' +
            '| `asserts non-null` | `asserts v is NonNullable<T>` | 排除 null/undefined | 非空断言 |\n' +
            '| 联合收窄 | `v is A \\| B` | 收窄为联合 | 多类型判别 |\n' +
            '| 泛型守卫 | `<T>(v: T): v is Extract<T, X>` | 配合泛型收窄 | 高级用法 |\n' +
            '| 数组守卫 | `v is T[]` | 收窄为数组 | JSON 数组校验 |\n' +
            '| 字面量守卫 | `v is "left" \\| "right"` | 收窄为字面量联合 | 枚举值校验 |\n' +
            '| this 守卫 | `this is T` | 类方法中收窄 this | 链式 API |\n\n' +
            '## 代码示例\n\n' +
            '示例一：解析 localStorage 中的用户数据。\n' +
            '```ts\n' +
            'interface User { name: string; age: number; email?: string; }\n\n' +
            'function isUser(v: unknown): v is User {\n' +
            '  if (typeof v !== "object" || v === null) return false;\n' +
            '  const u = v as Record<string, unknown>;\n' +
            '  return typeof u.name === "string" && typeof u.age === "number";\n' +
            '}\n\n' +
            'const raw = localStorage.getItem("user");\n' +
            'if (raw) {\n' +
            '  const data: unknown = JSON.parse(raw);\n' +
            '  if (isUser(data)) {\n' +
            '    console.log("用户: " + data.name + ", 年龄: " + data.age);\n' +
            '  } else {\n' +
            '    console.log("数据格式错误");\n' +
            '  }\n' +
            '}\n' +
            '```\n\n' +
            '示例二：asserts 谓词实现非空断言。\n' +
            '```ts\n' +
            'function assertNonNull<T>(v: T | null | undefined, msg?: string): asserts v is T {\n' +
            '  if (v === null || v === undefined) {\n' +
            '    throw new Error(msg ?? "值为空");\n' +
            '  }\n' +
            '}\n\n' +
            'function getElement(id: string): HTMLElement | null {\n' +
            '  return document.getElementById(id);\n' +
            '}\n\n' +
            'const btn = getElement("submit");\n' +
            'assertNonNull(btn, "按钮不存在");\n' +
            '// 此处 btn 已收窄为 HTMLElement，可安全访问\n' +
            'btn.addEventListener("click", () => console.log("点击"));\n' +
            '```\n\n' +
            '示例三：数组元素守卫递归校验。\n' +
            '```ts\n' +
            'function isNumberArray(v: unknown): v is number[] {\n' +
            '  return Array.isArray(v) && v.every(x => typeof x === "number");\n' +
            '}\n\n' +
            'function sumUnknown(v: unknown): number | null {\n' +
            '  if (isNumberArray(v)) {\n' +
            '    return v.reduce((a, b) => a + b, 0);\n' +
            '  }\n' +
            '  return null;\n' +
            '}\n\n' +
            'console.log(sumUnknown([1, 2, 3]));     // 6\n' +
            'console.log(sumUnknown(["a", "b"]));    // null\n' +
            'console.log(sumUnknown("不是数组"));     // null\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **守卫返回值必须真实**：守卫函数声明 `v is T` 但运行时检查与 T 不一致时，TS 不会发现这个谎言，会导致运行时崩溃。务必保证谓词与检查逻辑一致。\n' +
            '2. **`unknown` 比 `any` 更适合做守卫入参**：`unknown` 强制使用前检查，而 `any` 会绕过类型系统，破坏守卫的意义。\n' +
            '3. **`asserts` 谓词不返回值**：与 `is` 不同，`asserts v is T` 的函数不返回布尔，而是"不抛错即视为通过"，调用后收窄。\n' +
            '4. **数组守卫注意空数组**：`v.every(x => typeof x === "number")` 对空数组返回 true，空数组是合法的 `number[]`，但若需要非空要额外检查 length。\n' +
            '5. **守卫不能跨界闭包**：守卫在闭包（如 `setTimeout` 回调）中可能失效，TS 无法保证异步执行时类型未变。建议在闭包内重新断言或显式捕获收窄后的变量。\n' +
            '6. **避免运行时与编译期类型不一致**：守卫检查的是运行时结构，而 TS 类型是编译期概念，两者不必然等同。例如 `v is User` 仅检查结构，不检查原型链。\n\n' +
            '## 实际应用\n\n' +
            '构建类型安全的 API 客户端：fetch 返回 `Promise<unknown>`（通过 `Response.json()`），用自定义守卫校验响应结构后才能安全访问字段。配合 zod、io-ts、class-validator 等运行时校验库，可以自动生成守卫函数，让"运行时校验"与"编译期类型"完全打通。\n\n' +
            '另一场景是表单校验：用户提交的数据是 `Record<string, unknown>`，用守卫逐字段校验后收窄为强类型 FormInput，再交给业务逻辑处理。这样校验与业务解耦，校验逻辑可复用、可测试。在 React 表单库（如 react-hook-form）中，resolvers 机制就是基于类似思想。\n\n' +
            '## 扩展知识\n\n' +
            '- **zod 与守卫**：zod 的 `.parse()` 返回已收窄的类型，`.safeParse()` 返回 `{ success: true, data: T } | { success: false, error }`，是工业级守卫方案。\n' +
            '- **io-ts 与守卫**：函数式风格的运行时校验库，`is` 函数自动生成守卫，配合 fp-ts 生态系统使用。\n' +
            '- **`satisfies` 与守卫配合**：TS 4.9+ 的 `satisfies` 运算符让对象字面量在不拓宽类型的前提下满足约束，可与守卫配合做编译期 + 运行期双重保证。\n' +
            '- **判别联合 + 守卫**：把数据形状用判别字段区分（如 `kind: "circle" | "square"`），配合 `v.kind === "circle"` 收窄，比手写复杂守卫更优雅。\n' +
            '- **性能考虑**：守卫函数每次调用都执行检查，对热路径（如渲染循环）要评估开销；可缓存校验结果或用编译期生成守卫减少重复检查。',
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
            '## 概念详解\n\n' +
            '可辨识联合（Discriminated Union，又称 Tagged Union）是给联合类型的每个成员加一个公共字面量字段（标签），让 TypeScript 在 switch/if 中根据标签值精确收窄到对应成员。' +
            '典型形式：`type Shape = { kind: "circle"; r: number } | { kind: "square"; s: number }`，`kind` 字段就是标签。' +
            '这是表达状态机、AST 节点、API 响应、表单字段等"有限种类"数据的标准模式，比普通联合更安全、更优雅。\n\n' +
            '它存在的意义：普通联合 `A | B` 当 A 与 B 结构相似时，`in` 检查可能误判，TS 也难以精确收窄；' +
            '可辨识联合用字面量标签强制每个成员有唯一身份，TS 能 100% 可靠地根据标签收窄。' +
            '配合 `switch + never` 穷尽检查（exhaustiveness check），新增成员时编译器会在 default 分支报错，把"忘记处理新情况"的运行时 bug 提前到编译期——这是相比普通联合的最大优势。\n\n' +
            '使用场景：UI 状态机（idle/loading/done/error）、Redux action 类型、AST 节点（Expression/Statement/Declaration）、API 响应（success/error/loading）、表单字段类型（text/number/select/checkbox）。' +
            '标签字段名通常用 `type`/`kind`/`state`/`status`/`tag`，全联合共用同一字段名，每个成员的标签值是唯一字面量。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 基本可辨识联合\n' +
            'type Shape =\n' +
            '  | { kind: "circle"; r: number }\n' +
            '  | { kind: "square"; s: number }\n' +
            '  | { kind: "rect"; w: number; h: number };\n\n' +
            'function area(sh: Shape): number {\n' +
            '  switch (sh.kind) {\n' +
            '    case "circle": return Math.floor(Math.PI * sh.r * sh.r);\n' +
            '    case "square": return sh.s * sh.s;\n' +
            '    case "rect": return sh.w * sh.h;\n' +
            '  }\n' +
            '}\n\n' +
            '// 2. 穷尽检查：用 never 保证所有情况都处理\n' +
            'function assertNever(x: never): never {\n' +
            '  throw new Error("未处理: " + x);\n' +
            '}\n' +
            'function describe(sh: Shape): string {\n' +
            '  switch (sh.kind) {\n' +
            '    case "circle": return "圆";\n' +
            '    case "square": return "方";\n' +
            '    case "rect": return "矩形";\n' +
            '    default: return assertNever(sh);  // 新增成员没处理会报错\n' +
            '  }\n' +
            '}\n\n' +
            '// 3. API 响应联合\n' +
            'type ApiResult<T> =\n' +
            '  | { status: "loading" }\n' +
            '  | { status: "success"; data: T }\n' +
            '  | { status: "error"; error: Error };\n' +
            '```\n\n' +
            '## 可辨识联合模式对照表\n\n' +
            '| 模式 | 标签字段 | 典型成员 | 用途 |\n' +
            '|------|----------|----------|------|\n' +
            '| 形状联合 | `kind` | circle/square/rect | 几何计算 |\n' +
            '| API 响应 | `status` | loading/success/error | 异步数据 |\n' +
            '| 状态机 | `state` | idle/loading/done | UI 流程 |\n' +
            '| Redux action | `type` | ADD/REMOVE/UPDATE | 状态管理 |\n' +
            '| AST 节点 | `type` | Expression/Statement | 编译器 |\n' +
            '| 表单字段 | `field` | text/number/select | 动态表单 |\n' +
            '| 通知 | `variant` | info/success/warning/error | UI 反馈 |\n' +
            '| 事件 | `name` | click/scroll/input | 事件系统 |\n' +
            '| 数据库操作 | `op` | create/update/delete | CRUD |\n' +
            '| 路由 | `path` | home/about/contact | 前端路由 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：异步请求状态机。\n' +
            '```ts\n' +
            'type RequestState<T> =\n' +
            '  | { status: "idle" }\n' +
            '  | { status: "loading" }\n' +
            '  | { status: "success"; data: T }\n' +
            '  | { status: "error"; error: string };\n\n' +
            'function render<T>(state: RequestState<T>): string {\n' +
            '  switch (state.status) {\n' +
            '    case "idle": return "等待开始";\n' +
            '    case "loading": return "加载中...";\n' +
            '    case "success": return "成功: " + JSON.stringify(state.data);\n' +
            '    case "error": return "错误: " + state.error;\n' +
            '  }\n' +
            '}\n' +
            'console.log(render({ status: "loading" }));\n' +
            'console.log(render({ status: "success", data: 42 }));\n' +
            '```\n\n' +
            '示例二：Redux action 类型。\n' +
            '```ts\n' +
            'type Action =\n' +
            '  | { type: "ADD"; payload: number }\n' +
            '  | { type: "SUB"; payload: number }\n' +
            '  | { type: "RESET" };\n\n' +
            'function reducer(state: number, action: Action): number {\n' +
            '  switch (action.type) {\n' +
            '    case "ADD": return state + action.payload;\n' +
            '    case "SUB": return state - action.payload;\n' +
            '    case "RESET": return 0;\n' +
            '  }\n' +
            '}\n' +
            'console.log(reducer(10, { type: "ADD", payload: 5 }));   // 15\n' +
            'console.log(reducer(10, { type: "RESET" }));              // 0\n' +
            '```\n\n' +
            '示例三：穷尽检查防止遗漏。\n' +
            '```ts\n' +
            'type Notification =\n' +
            '  | { variant: "info"; message: string }\n' +
            '  | { variant: "success"; message: string }\n' +
            '  | { variant: "warning"; message: string }\n' +
            '  | { variant: "error"; message: string; code: number };\n\n' +
            'function assertNever(x: never): never {\n' +
            '  throw new Error("未处理: " + x);\n' +
            '}\n\n' +
            'function getIcon(n: Notification): string {\n' +
            '  switch (n.variant) {\n' +
            '    case "info": return "ℹ️";\n' +
            '    case "success": return "✅";\n' +
            '    case "warning": return "⚠️";\n' +
            '    case "error": return "❌ (code " + n.code + ")";\n' +
            '    default: return assertNever(n);  // 漏处理任何成员都报错\n' +
            '  }\n' +
            '}\n' +
            'console.log(getIcon({ variant: "error", message: "失败", code: 500 }));\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **标签字段必须是字面量类型**：`kind: string` 不能收窄，必须是 `kind: "circle"` 这样的字面量联合。普通 string 无法作为判别字段。\n' +
            '2. **所有成员必须共享同一标签字段名**：如果一个用 `kind` 一个用 `type`，TS 无法识别为可辨识联合。\n' +
            '3. **穷尽检查要用 `never`**：default 分支把变量赋给 `never` 类型变量，TS 才能在新增成员时报错。直接 `default: return` 不会触发检查。\n' +
            '4. **标签值必须互斥**：两个成员不能有相同标签值，否则 TS 无法区分。每个成员的标签值应唯一。\n' +
            '5. **switch 比 if-else 更适合**：switch 配合穷尽检查是处理可辨识联合的惯用法，可读性和安全性都更好。\n' +
            '6. **重构友好**：新增/删除成员时，所有处理该联合的 switch 都会因穷尽检查报错，引导你逐一补全——这是可辨识联合的核心价值。\n\n' +
            '## 实际应用\n\n' +
            '前端状态管理：React 组件用 `useReducer` 时，action 类型用可辨识联合定义，reducer 用 switch 处理，新增 action 类型编译器立即提示所有需要更新的地方。Redux Toolkit、Zustand 等状态库都推荐这种模式。\n\n' +
            '另一场景是 API 客户端设计：后端返回的响应可能成功（带数据）或失败（带错误码），用 `ApiResult<T>` 联合表达，前端组件根据 status 渲染不同 UI（加载圈/数据/错误提示）。这种模式在 React Query、SWR、Apollo Client 等数据获取库中广泛使用，让"加载状态"与"数据/错误状态"在同一类型中表达，避免遗漏处理。\n\n' +
            '## 扩展知识\n\n' +
            '- **`satisfies` 与可辨识联合**：TS 4.9+ 的 `satisfies` 运算符让对象字面量在不拓宽类型的前提下满足可辨识联合约束，是构造联合成员的优雅方式。\n' +
            '- **模板字面量类型做标签**：用 `` type EventName = `on${Capitalize<string>}` `` 生成标签联合，配合可辨识联合做类型安全的事件系统。\n' +
            '- **可辨识联合与模式匹配**：TS 目前无原生模式匹配，但 switch + 穷尽检查是事实上的模式匹配；社区有 `ts-pattern` 库提供更强大的匹配语法。\n' +
            '- **可辨识联合的运行时校验**：从 API 接收的数据需要用守卫校验标签字段存在且值合法，才能安全地视为可辨识联合。zod 的 discriminatedUnion 是工业级方案。\n' +
            '- **递归可辨识联合**：AST 节点常是递归可辨识联合（如 Expression 包含 BinaryExpression，后者又包含 Expression），TS 完全支持这种自引用结构。',
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
            '## 概念详解\n\n' +
            '`never` 是 TypeScript 中表示"永不存在的值"的类型。永不返回的函数（抛错或无限循环）的返回类型是 `never`；' +
            '不可达的代码分支、不可能存在的交集（如 `string & number`）也求值为 `never`。' +
            'never 是所有类型的子类型（bottom type），可赋值给任何类型，但没有任何值能赋给 never（除 never 本身）。\n\n' +
            '它存在的意义：表达"不可能发生"的状态，让编译器帮你检查代码完备性。最经典的用法是穷尽检查（exhaustiveness check）——在 switch 的 default 分支把变量赋给 `never` 类型，若联合新增成员却忘了加 case，赋值会报错，把"忘记处理新情况"的运行时 bug 提前到编译期。' +
            '此外，never 在联合中会被自动忽略（`string | never` 等于 `string`），这使条件类型过滤成为可能。\n\n' +
            '使用场景：抛错的工具函数（`fail`/`throwError`）、穷尽检查的 default 分支、条件类型过滤（`Exclude`/`NonNullable`）、表达不可达状态。' +
            'never 让"不可能"在类型层显式表达，是类型安全的重要基石——掌握了 never，才能写出真正穷尽的 switch 和精确的条件类型。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 永不返回的函数\n' +
            'function fail(msg: string): never {\n' +
            '  throw new Error(msg);\n' +
            '}\n' +
            'function loop(): never {\n' +
            '  while (true) {}\n' +
            '}\n\n' +
            '// 2. 穷尽检查\n' +
            'type Color = "red" | "green" | "blue";\n' +
            'function name(c: Color): string {\n' +
            '  switch (c) {\n' +
            '    case "red": return "红";\n' +
            '    case "green": return "绿";\n' +
            '    case "blue": return "蓝";\n' +
            '    default:\n' +
            '      const x: never = c;  // 若 Color 新增成员，此处报错\n' +
            '      return x;\n' +
            '  }\n' +
            '}\n\n' +
            '// 3. 条件类型过滤\n' +
            'type WithoutNull<T> = T extends null ? never : T;\n' +
            'type R = WithoutNull<string | null>;  // string\n\n' +
            '// 4. 不可达交集\n' +
            'type Impossible = string & number;  // never\n' +
            '```\n\n' +
            '## never 类型用法对照表\n\n' +
            '| 用法 | 形式 | 行为 | 典型场景 |\n' +
            '|------|------|------|----------|\n' +
            '| 永不返回函数 | `function f(): never` | 函数不正常返回 | fail/throw 工具 |\n' +
            '| 穷尽检查 | `const x: never = v` | v 不是 never 时报错 | switch default |\n' +
            '| 条件过滤 | `T extends X ? never : T` | 排除 X 成员 | Exclude/NonNullable |\n' +
            '| 不可达分支 | `string & number` | 求值为 never | 类型矛盾检测 |\n' +
            '| 联合忽略 | `A \\| never` | 等于 A | 条件类型分发 |\n' +
            '| 返回值收窄 | `throw` 表达式 | 类型为 never | 提前退出 |\n' +
            '| assertNever | `function assertNever(x: never): never` | 抛错 + 收窄 | 工具函数 |\n' +
            '| 不可达断言 | `if (false) { const x: never = ... }` | 标记死代码 | 防御性编程 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：assertNever 工具函数。\n' +
            '```ts\n' +
            'function assertNever(x: never): never {\n' +
            '  throw new Error("未处理的值: " + x);\n' +
            '}\n\n' +
            'type Shape =\n' +
            '  | { kind: "circle"; r: number }\n' +
            '  | { kind: "square"; s: number };\n\n' +
            'function area(sh: Shape): number {\n' +
            '  switch (sh.kind) {\n' +
            '    case "circle": return Math.floor(Math.PI * sh.r * sh.r);\n' +
            '    case "square": return sh.s * sh.s;\n' +
            '    default: return assertNever(sh);  // 新增 kind 没处理会报错\n' +
            '  }\n' +
            '}\n' +
            'console.log(area({ kind: "circle", r: 2 }));\n' +
            '```\n\n' +
            '示例二：条件类型用 never 过滤成员。\n' +
            '```ts\n' +
            '// 自实现 Exclude：从 T 中排除 U 的成员\n' +
            'type MyExclude<T, U> = T extends U ? never : T;\n' +
            'type T1 = MyExclude<"a" | "b" | "c", "b">;  // "a" | "c"\n\n' +
            '// 自实现 NonNullable：排除 null 和 undefined\n' +
            'type MyNonNullable<T> = T extends null | undefined ? never : T;\n' +
            'type T2 = MyNonNullable<string | null | undefined>;  // string\n\n' +
            'const v: T1 = "a";\n' +
            'const w: T2 = "hello";\n' +
            'console.log(v, w);\n' +
            '```\n\n' +
            '示例三：throw 表达式收窄后续代码。\n' +
            '```ts\n' +
            'function getConfig(key: string): string {\n' +
            '  const v = process.env[key];\n' +
            '  if (v === undefined) {\n' +
            '    throw new Error("缺少环境变量: " + key);  // throw 类型为 never\n' +
            '  }\n' +
            '  // 此处 v 已收窄为 string（因为 throw 阻断了后续）\n' +
            '  return v.toUpperCase();\n' +
            '}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **never 函数不能有可达返回**：声明 `: never` 的函数如果有一条可达的正常返回路径，TS 会报错。确保函数一定抛错或无限循环。\n' +
            '2. **`throw` 表达式类型为 never**：`throw new Error()` 在表达式位置求值为 never，这让 `const x = cond ? value : throw ...` 中 x 的类型自动收窄。\n' +
            '3. **never 在联合中被忽略**：`string | never | number` 等于 `string | number`，这是条件类型过滤的基础。但 `string & never` 等于 never，交叉时不会忽略。\n' +
            '4. **穷尽检查的 default 必须赋值给 never**：直接 `default: return` 不会触发检查，必须 `const x: never = v; return x;` 或 `return assertNever(v)`。\n' +
            '5. **never 是所有类型的子类型**：never 可赋值给任何类型（`const x: string = fail()` 合法），但任何值（除 never）都不能赋给 never。\n' +
            '6. **`any` 不是 never**：`any` 会绕过类型检查，而 never 表示"不可能"，两者意义相反。不要用 any 替代 never 做穷尽检查。\n\n' +
            '## 实际应用\n\n' +
            '穷尽检查是 never 最实用的场景：在 Redux reducer、AST 解释器、状态机渲染函数中，用 `assertNever` 保证所有可辨识联合成员都被处理。新增成员时编译器立即提示所有需要补全的地方，避免运行时遗漏分支导致的 bug。这是大型项目维护可辨识联合的关键技术。\n\n' +
            '另一场景是工具函数设计：`fail(msg): never` 用于"不可能到达"的分支，既抛错又收窄后续类型；`unreachable(): never` 用于标记防御性死代码。配合可辨识联合，never 让"防御性编程"在类型层显式表达——若某分支真的被执行，说明类型定义有误，运行时抛错快速暴露问题。\n\n' +
            '## 扩展知识\n\n' +
            '- **`Exclude<T, U>` 与 `Extract<T, U>`**：内置工具类型，本质是条件类型 + never 过滤，分别排除/保留 U 的成员。\n' +
            '- **`NonNullable<T>`**：排除 null 和 undefined，等价于 `T extends null | undefined ? never : T`。\n' +
            '- **`ReturnType<T>` 与 `Parameters<T>`**：用 infer 提取函数返回值/参数类型，never 在其中用于"不匹配"分支。\n' +
            '- **bottom type 与 top type**：never 是 bottom（所有类型的子类型），unknown 是 top（所有类型的父类型），两者构成类型系统的极值。\n' +
            '- **never 与控制流分析**：TS 的控制流分析能识别 `throw`、`return`、`break` 等终止语句，把后续代码的类型求值为 never，从而收窄变量类型。',
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
            '## 概念详解\n\n' +
            'ES 模块（ECMAScript Module，简称 ESM）是现代 JavaScript/TypeScript 的标准模块系统，用 `export` 导出、`import` 导入。' +
            '默认导出 `export default`，命名导出 `export { x }` 或 `export const x`；导入命名导出 `import { x } from "./path"`，默认导出 `import x from "./path"`，重命名 `import { x as y }`。' +
            '模块是单文件作用域，不导出的内容外部不可见，避免了 CommonJS 时代全局污染、命名冲突等问题。\n\n' +
            '它存在的意义：JavaScript 早期没有原生模块系统，开发者用 IIFE、CommonJS（require）、AMD（define）等方案 workaround，导致生态碎片化。' +
            'ESM 在语言层标准化了模块语法，支持静态分析（编译期可知导入导出关系）、tree-shaking（构建时剔除未用代码）、顶层 await（顶层使用 await）、循环依赖处理等特性。' +
            '命名导出适合导出多个相关成员（工具函数集、常量集），默认导出适合导出模块的"主"成员（一个组件、一个类）。\n\n' +
            '使用场景：所有现代前端项目（React/Vue/Angular/Svelte）、Node.js（12+ 支持 ESM）、Deno（原生 ESM）、库开发（npm 包）。' +
            '一个模块只能有一个默认导出，但可有任意多个命名导出；可以同时使用两者。理解 import/export 后，真实项目中按功能拆分模块、按需导入，是组织大型代码库的基础。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 命名导出\n' +
            '// math.ts\n' +
            'export function add(a: number, b: number): number { return a + b; }\n' +
            'export const PI = 3.14;\n' +
            'export type ID = string | number;\n\n' +
            '// 2. 默认导出\n' +
            '// logger.ts\n' +
            'export default function log(msg: string): void { console.log(msg); }\n' +
            '// 也可：export default class { ... }\n' +
            '// 也可：const x = 1; export default x;\n\n' +
            '// 3. 导入命名导出\n' +
            'import { add, PI } from "./math";\n' +
            'import { add as plus } from "./math";  // 重命名\n' +
            'import { add, PI as P } from "./math";  // 部分重命名\n\n' +
            '// 4. 导入默认导出\n' +
            'import log from "./logger";  // 不加花括号\n' +
            'import myLog from "./logger";  // 名字可自定义\n\n' +
            '// 5. 全部导入为命名空间\n' +
            'import * as MathLib from "./math";\n' +
            'MathLib.add(1, 2);  // 通过属性访问\n\n' +
            '// 6. 副作用导入（仅执行模块，不导入值）\n' +
            'import "./polyfill";\n\n' +
            '// 7. 默认 + 命名混合导入\n' +
            'import log, { add } from "./mixed";\n' +
            '```\n\n' +
            '## 模块语法对照表\n\n' +
            '| 语法 | 写法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 命名导出 | `export const x = 1` | 导出变量 |\n' +
            '| 命名导出（声明后） | `export { x, y }` | 导出已声明变量 |\n' +
            '| 重命名导出 | `export { x as y }` | 导出时改名 |\n' +
            '| 默认导出 | `export default x` | 模块主成员，唯一 |\n' +
            '| 类型导出 | `export type T = ...` | 仅类型，运行时不存在 |\n' +
            '| 导入命名 | `import { x } from "./m"` | 按名导入 |\n' +
            '| 导入重命名 | `import { x as y }` | 导入时改名 |\n' +
            '| 导入默认 | `import x from "./m"` | 不加花括号 |\n' +
            '| 全部导入 | `import * as N from "./m"` | 命名空间对象 |\n' +
            '| 副作用导入 | `import "./m"` | 仅执行模块 |\n' +
            '| 动态导入 | `import("./m")` | 返回 Promise |\n' +
            '| 默认+命名 | `import d, { n } from "./m"` | 混合导入 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：命名导出与导入（注释演示多文件）。\n' +
            '```ts\n' +
            '// 文件 math.ts\n' +
            '// export function add(a: number, b: number): number { return a + b; }\n' +
            '// export const PI = 3.14;\n' +
            '//\n' +
            '// 文件 app.ts\n' +
            '// import { add, PI } from "./math";\n' +
            '// console.log(add(1, 2), PI);\n\n' +
            '// 单文件等效演示\n' +
            'function add(a: number, b: number): number { return a + b; }\n' +
            'const PI = 3.14;\n' +
            'console.log(add(1, 2), PI);  // 3 3.14\n' +
            '```\n\n' +
            '示例二：默认导出与命名空间导入。\n' +
            '```ts\n' +
            '// 文件 logger.ts\n' +
            '// export default function log(msg: string): void { console.log(msg); }\n' +
            '// export const LEVEL = { INFO: "info", ERROR: "error" };\n' +
            '//\n' +
            '// import log, { LEVEL } from "./logger";\n' +
            '// import * as LoggerNS from "./logger";\n' +
            '// log("消息");\n' +
            '// console.log(LEVEL.INFO);\n' +
            '// LoggerNS.default("命名空间默认");\n\n' +
            '// 单文件等效演示\n' +
            'function log(msg: string): void { console.log(msg); }\n' +
            'const LEVEL = { INFO: "info", ERROR: "error" };\n' +
            'log("默认导出");\n' +
            'console.log(LEVEL.INFO);  // info\n' +
            '```\n\n' +
            '示例三：动态导入（按需加载）。\n' +
            '```ts\n' +
            '// 动态导入返回 Promise，适合按需加载\n' +
            'async function loadMathModule() {\n' +
            '  // 真实项目中：const math = await import("./math");\n' +
            '  // 这里用对象模拟模块\n' +
            '  const math = {\n' +
            '    add: (a: number, b: number) => a + b,\n' +
            '    sub: (a: number, b: number) => a - b,\n' +
            '  };\n' +
            '  return math;\n' +
            '}\n\n' +
            'loadMathModule().then(m => {\n' +
            '  console.log(m.add(5, 3));  // 8\n' +
            '  console.log(m.sub(5, 3));  // 2\n' +
            '});\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **导入路径必须带扩展名（浏览器）**：浏览器中 ESM 导入路径需完整（`./math.js`），但 TS/打包工具中通常省略扩展名（`./math`）。\n' +
            '2. **默认导出导入时不加花括号**：`import log` 而非 `import { log }`，名字可自定义；命名导出必须加花括号且名字固定。\n' +
            '3. **`export type` 仅类型导出**：用 `export type` 导出的内容运行时不存在，导入时也要用 `import type`，避免打包进运行时代码。\n' +
            '4. **循环依赖要小心**：ESM 支持循环依赖，但执行顺序可能导致部分导出在初次访问时为 undefined。设计时尽量避免循环依赖。\n' +
            '5. **`import * as` 与默认导出**：默认导出会作为命名空间对象的 `default` 属性（`NS.default`），而非直接作为对象。\n' +
            '6. **tree-shaking 依赖静态导入**：`import { x }` 是静态的，打包工具能分析未用代码并剔除；动态 `import()` 不会被 tree-shake。\n\n' +
            '## 实际应用\n\n' +
            '真实项目中按功能拆分模块：`api/users.ts` 导出 `fetchUsers`、`components/Button.tsx` 默认导出组件、`utils/math.ts` 命名导出工具函数——import 按需引入，配合 tree-shaking 自动剔除未用代码，构建产物更小。这是现代前端工程的标配。\n\n' +
            '库开发中，入口文件（`index.ts`）通常 re-export 所有公共 API：`export * from "./moduleA"; export * from "./moduleB";`，让用户用 `import { foo } from "my-lib"` 统一导入。配合 `package.json` 的 `exports` 字段，可定义多入口（main/module/types/exports），支持不同环境（ESM/CJS/浏览器/Node）按需解析。\n\n' +
            '## 扩展知识\n\n' +
            '- **`import type` 与 `export type`**：TS 4.5+ 的 type-only 导入导出，明确表示仅类型，编译后被完全擦除，避免运行时副作用和循环依赖问题。\n' +
            '- **动态 import 与代码分割**：`import("./module")` 返回 Promise，配合 React.lazy、Vue 异步组件实现按需加载，减小首屏体积。\n' +
            '- **`package.json` 的 `exports` 字段**：现代 npm 包用 exports 定义子路径导入（`my-lib/utils`），封装内部结构，比传统 main 字段更灵活。\n' +
            '- **CommonJS 互操作**：Node 中 ESM 导入 CJS 用 default 导出（`import pkg from "cjs-module"`），CJS 导入 ESM 用动态 `await import()`，注意兼容性。\n' +
            '- **`import.meta`**：ESM 中可用 `import.meta.url` 获取模块 URL，`import.meta.env`（Vite）获取构建环境变量，比 CommonJS 的 `__dirname`/`__filename` 更通用。',
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
            '## 概念详解\n\n' +
            '命名空间（namespace）是 TypeScript 早期的模块方案，用 `namespace 名 { ... }` 把相关代码组织在一个逻辑容器内，通过 `export` 暴露成员，未 export 的成员是私有的。' +
            '命名空间可嵌套，用点访问 `Outer.Inner.fn()`；可跨文件合并（同名 namespace 自动合并）。' +
            '它本质是编译期生成 IIFE 的语法糖，运行时是一个全局对象。\n\n' +
            '它存在的历史原因：TypeScript 早于 ES 模块标准化，需要一种在语言层组织代码的方式，于是引入了内部模块（后改名 namespace）。' +
            'ES 模块成为标准后，namespace 在新代码中已不推荐——现代项目优先用 ES 模块。但 namespace 在两个场景仍有价值：单文件内组织相关工具（小型脚本）、声明文件（.d.ts）中描述全局库类型（如 `declare namespace JQuery {}`）。' +
            '理解 namespace 有助于阅读旧代码和库的类型定义。\n\n' +
            '使用场景：声明文件描述无类型的 JS 库、组织 .d.ts 中的复杂类型、单文件脚本内分组工具。' +
            'namespace 的优势是单文件内即可使用，无需模块解析配置；缺点是不支持 tree-shaking，跨文件组织不如 ES 模块清晰。' +
            '新代码强烈推荐 ES 模块，namespace 主要用于声明文件和兼容旧代码。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 基本命名空间\n' +
            'namespace Utils {\n' +
            '  export function double(n: number): number { return n * 2; }\n' +
            '  export const VERSION = "1.0";\n' +
            '  const privateVar = 42;  // 未 export，外部不可访问\n' +
            '}\n\n' +
            '// 2. 嵌套命名空间\n' +
            'namespace App {\n' +
            '  export namespace Math {\n' +
            '    export function square(n: number): number { return n * n; }\n' +
            '  }\n' +
            '  export namespace Config {\n' +
            '    export const env = "prod";\n' +
            '  }\n' +
            '}\n\n' +
            '// 3. 跨文件合并（同名 namespace 自动合并）\n' +
            '// 文件 a.ts: namespace App { export function fn1() {} }\n' +
            '// 文件 b.ts: namespace App { export function fn2() {} }\n' +
            '// 使用：App.fn1(); App.fn2();\n\n' +
            '// 4. 声明文件中的 namespace（描述全局库）\n' +
            '// types/jquery.d.ts\n' +
            'declare namespace JQuery {\n' +
            '  function ajax(url: string, settings?: object): void;\n' +
            '  interface AjaxSettings { method?: string; data?: unknown; }\n' +
            '}\n' +
            '```\n\n' +
            '## 命名空间特性对照表\n\n' +
            '| 特性 | 写法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 定义 | `namespace N { }` | 创建命名空间 |\n' +
            '| 导出成员 | `export const x` | 外部可访问 |\n' +
            '| 私有成员 | `const x`（无 export） | 外部不可访问 |\n' +
            '| 嵌套 | `namespace N { export namespace M {} }` | 层级组织 |\n' +
            '| 跨文件合并 | 同名 namespace | 自动合并成员 |\n' +
            '| 声明文件 | `declare namespace N {}` | 描述全局库 |\n' +
            '| 访问 | `N.member` | 点访问 |\n' +
            '| 类型导出 | `export interface T` | 命名空间内定义类型 |\n' +
            '| 别名 | `import X = N.M` | 给嵌套命名空间起短名 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基本命名空间与封装。\n' +
            '```ts\n' +
            'namespace Counter {\n' +
            '  let count = 0;  // 私有，外部不可访问\n' +
            '  export function inc(): number { return ++count; }\n' +
            '  export function get(): number { return count; }\n' +
            '  export function reset(): void { count = 0; }\n' +
            '}\n' +
            'console.log(Counter.inc());   // 1\n' +
            'console.log(Counter.inc());   // 2\n' +
            'console.log(Counter.get());   // 2\n' +
            'Counter.reset();\n' +
            'console.log(Counter.get());   // 0\n' +
            '```\n\n' +
            '示例二：嵌套命名空间组织层级工具。\n' +
            '```ts\n' +
            'namespace App {\n' +
            '  export namespace Math {\n' +
            '    export function square(n: number): number { return n * n; }\n' +
            '    export function cube(n: number): number { return n * n * n; }\n' +
            '  }\n' +
            '  export namespace Str {\n' +
            '    export function repeat(s: string, n: number): string {\n' +
            '      return s.repeat(n);\n' +
            '    }\n' +
            '  }\n' +
            '}\n' +
            'console.log(App.Math.square(4));   // 16\n' +
            'console.log(App.Math.cube(3));     // 27\n' +
            'console.log(App.Str.repeat("ab", 3));  // ababab\n' +
            '```\n\n' +
            '示例三：声明文件描述全局库。\n' +
            '```ts\n' +
            '// 假设这是 mylib.d.ts 声明文件\n' +
            'declare namespace MyLib {\n' +
            '  function init(config: { apiKey: string; debug?: boolean }): void;\n' +
            '  function track(event: string, props?: Record<string, unknown>): void;\n' +
            '  interface User { id: string; name: string; }\n' +
            '  const version: string;\n' +
            '}\n\n' +
            '// 使用时无需 import，直接用全局 MyLib\n' +
            '// MyLib.init({ apiKey: "abc123" });\n' +
            '// MyLib.track("login", { userId: "u1" });\n' +
            '// const u: MyLib.User = { id: "u1", name: "Tom" };\n' +
            '// console.log(MyLib.version);\n\n' +
            '// 单文件演示（模拟）\n' +
            'const MyLib = {\n' +
            '  version: "2.0",\n' +
            '  init: (config: { apiKey: string }) => console.log("init: " + config.apiKey),\n' +
            '};\n' +
            'MyLib.init({ apiKey: "abc123" });\n' +
            'console.log(MyLib.version);\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **新代码不要用 namespace**：ES 模块是现代标准，支持 tree-shaking、静态分析、明确依赖关系。namespace 是遗留方案，仅在声明文件和旧代码中合理。\n' +
            '2. **namespace 与 ES 模块不要混用**：在一个项目里要么全用 ES 模块，要么在必要时用 namespace，混用会导致依赖关系混乱、构建工具兼容性问题。\n' +
            '3. **跨文件合并需 `<reference>`**：旧代码中跨文件 namespace 合并可能需要 `/// <reference path="..." />` 指令，现代 TS 一般自动处理。\n' +
            '4. **namespace 是全局对象**：namespace 编译后会生成全局变量，可能污染全局命名空间。ES 模块则不会，每个模块是独立作用域。\n' +
            '5. **不支持 tree-shaking**：namespace 内的成员即使未用也会被打包，因为打包工具难以静态分析 namespace 的使用情况。\n' +
            '6. **`declare namespace` 用于声明文件**：在 .d.ts 中用 `declare namespace` 描述全局库类型，让无类型的 JS 库获得 TS 支持，无需改写源码。\n\n' +
            '## 实际应用\n\n' +
            '在声明文件（.d.ts）中用 namespace 描述全局库的类型，如 `declare namespace JQuery { ... }`——让旧版 JS 库在 TS 中获得类型提示，无需改写源码。这是 namespace 在现代项目中的主要用途。@types/jquery、@types/lodash 等类型包大量使用这种模式。\n\n' +
            '另一场景是大型声明文件组织：当库的类型定义非常复杂（如 React、Vue 的类型），用嵌套 namespace 组织相关类型（如 `React.FC`、`React.ReactNode`），比扁平的命名更清晰。配合 `import X = React.FC` 别名，可简化长路径访问。在 DefinitelyTyped 社区类型仓库中，这种模式很常见。\n\n' +
            '## 扩展知识\n\n' +
            '- **`import X = N.M` 别名**：给嵌套命名空间或长路径起短名，类似 ES 模块的 import as，但用于 namespace 和类型。\n' +
            '- **namespace 与模块的区别**：namespace 是编译期合并的全局对象，模块是独立作用域的文件；模块有明确依赖关系，namespace 靠全局变量隐式共享。\n' +
            '- **`declare global`**：在模块文件中用 `declare global {}` 扩展全局对象（如给 Window 加属性），比 namespace 更现代的全局扩展方式。\n' +
            '- **module augmentation**：用 `declare module "lib" {}` 扩展第三方库的类型，比 namespace 更灵活的运行时扩展机制。\n' +
            '- **`const enum` 与 namespace**：const enum 常与 namespace 配合，在 namespace 内定义 const enum 实现编译期内联枚举，减小运行时代码。',
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
            '## 概念详解\n\n' +
            '声明合并（Declaration Merging）是 TypeScript 的特性：同名 interface 自动合并为一个，所有成员并存；namespace 之间、namespace 与 function/class/interface 之间也能合并。' +
            'interface 合并时，同名成员若类型不一致会报错；namespace 合并时，后定义可访问先定义的导出成员。' +
            '这让你能"增量"扩展已有类型，无需修改原始定义。\n\n' +
            '它存在的意义：第三方库的类型定义往往无法覆盖所有使用场景，开发者需要在不改库源码的前提下扩展类型。' +
            '声明合并提供了官方机制：用 `declare module "lib" { interface X { 新字段 } }` 给库的接口加字段，用同名 interface 在项目中补充业务字段。' +
            'Express 的 `Request.user`、Vue 的 `$filters`、Jest 的 `expect.extend` 等扩展都依赖声明合并。\n\n' +
            '使用场景：扩展第三方库类型（Express Request 加 user 字段）、给全局对象加属性（Window 加自定义字段）、合并多份类型定义（按功能拆分到多文件再合并）、为库编写插件类型。' +
            '声明合并强大但需谨慎：过度使用会让类型定义分散多处、难以追踪。推荐在统一的类型扩展文件（如 `types/extensions.d.ts`）中集中做声明合并，避免散落各处。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. interface 合并\n' +
            'interface Box { size: number; }\n' +
            'interface Box { weight: number; }  // 合并：Box 现在有 size 和 weight\n' +
            'const b: Box = { size: 10, weight: 5 };\n\n' +
            '// 2. interface 合并的同名属性必须类型一致\n' +
            'interface User { name: string; }\n' +
            'interface User { name: string; age: number; }  // name 都是 string，OK\n' +
            '// interface User { name: number; }  // 报错：name 类型冲突\n\n' +
            '// 3. namespace 合并\n' +
            'namespace Animal {\n' +
            '  export const legs = 4;\n' +
            '}\n' +
            'namespace Animal {\n' +
            '  export function info(): string { return "腿数: " + legs; }\n' +
            '}\n\n' +
            '// 4. namespace 与 function 合并（函数对象挂属性）\n' +
            'function counter(): number { return counter.count; }\n' +
            'namespace counter {\n' +
            '  export let count = 0;\n' +
            '}\n\n' +
            '// 5. module augmentation（扩展第三方库）\n' +
            'declare module "express" {\n' +
            '  interface Request { user?: { id: string; name: string }; }\n' +
            '}\n\n' +
            '// 6. global augmentation（扩展全局对象）\n' +
            'declare global {\n' +
            '  interface Window { myAppVersion: string; }\n' +
            '}\n' +
            '```\n\n' +
            '## 声明合并形式对照表\n\n' +
            '| 合并形式 | 写法 | 行为 | 典型用途 |\n' +
            '|----------|------|------|----------|\n' +
            '| interface + interface | 同名 interface | 成员合并 | 增量扩展接口 |\n' +
            '| namespace + namespace | 同名 namespace | 导出合并 | 跨文件组织 |\n' +
            '| function + namespace | function + namespace N | 函数挂属性 | 函数对象加属性 |\n' +
            '| class + namespace | class + namespace N | 类挂静态属性 | 给类加静态 |\n' +
            '| enum + enum | 同名 enum | 成员合并（需 const） | 扩展枚举 |\n' +
            '| module augmentation | `declare module "lib"` | 扩展库类型 | 给 Express 加字段 |\n' +
            '| global augmentation | `declare global` | 扩展全局对象 | 给 Window 加属性 |\n' +
            '| interface + namespace | interface + namespace N | 接口挂属性 | 给接口加静态方法 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：interface 合并扩展业务字段。\n' +
            '```ts\n' +
            '// 基础用户类型（可能在 user.ts）\n' +
            'interface User {\n' +
            '  id: string;\n' +
            '  name: string;\n' +
            '}\n\n' +
            '// 业务扩展（可能在 profile.ts）\n' +
            'interface User {\n' +
            '  avatar?: string;\n' +
            '  bio?: string;\n' +
            '}\n\n' +
            '// 合并后 User 有 id/name/avatar/bio\n' +
            'const u: User = {\n' +
            '  id: "u1",\n' +
            '  name: "Tom",\n' +
            '  avatar: "https://example.com/a.png",\n' +
            '  bio: "开发者",\n' +
            '};\n' +
            'console.log(u.name, u.avatar);\n' +
            '```\n\n' +
            '示例二：module augmentation 扩展 Express。\n' +
            '```ts\n' +
            '// types/express.d.ts\n' +
            '// declare module "express-serve-static-core" {\n' +
            '//   interface Request {\n' +
            '//     user?: { id: string; name: string; role: string };\n' +
            '//   }\n' +
            '//   interface Response {\n' +
            '//     logError(err: Error): void;\n' +
            '//   }\n' +
            '// }\n\n' +
            '// 路由处理器中 req.user 类型可用\n' +
            '// import { Request, Response } from "express";\n' +
            '// function handler(req: Request, res: Response) {\n' +
            '//   if (req.user) console.log(req.user.name);\n' +
            '//   res.logError(new Error("test"));\n' +
            '// }\n\n' +
            '// 单文件模拟演示\n' +
            'interface Request { user?: { id: string; name: string }; }\n' +
            'const req: Request = { user: { id: "u1", name: "Tom" } };\n' +
            'console.log(req.user?.name);  // Tom\n' +
            '```\n\n' +
            '示例三：函数与 namespace 合并。\n' +
            '```ts\n' +
            'function counter(): number {\n' +
            '  return counter.count;\n' +
            '}\n' +
            'namespace counter {\n' +
            '  export let count = 0;\n' +
            '  export function reset(): void { count = 0; }\n' +
            '  export function inc(): void { count++; }\n' +
            '}\n\n' +
            'counter.inc();\n' +
            'counter.inc();\n' +
            'counter.inc();\n' +
            'console.log(counter());   // 3\n' +
            'counter.reset();\n' +
            'console.log(counter());   // 0\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **interface 合并的同名属性必须类型一致**：两个同名 interface 都声明了 `name`，类型必须相同，否则编译报错。这是为了避免静默的语义冲突。\n' +
            '2. **namespace 合并不能跨同名函数/类**：namespace 可与 function/class 合并，但合并后的 namespace 成员是函数/类对象的属性，不是独立命名空间。\n' +
            '3. **module augmentation 需在模块文件中**：`declare module "lib"` 必须在模块文件（有 import/export）中，纯脚本文件中的 declare module 可能不生效。\n' +
            '4. **global augmentation 需 `declare global`**：在模块文件中扩展全局对象必须用 `declare global {}`，不能直接写 `interface Window {}`。\n' +
            '5. **过度合并难追踪**：声明合并让类型定义分散多处，调试时难以确定某字段来自哪个文件。推荐集中在 `types/extensions.d.ts` 等文件中统一管理。\n' +
            '6. **enum 合并有限制**：普通 enum 合并可能报错，const enum 合并更灵活。多数场景应避免 enum 合并，改用 union 类型。\n\n' +
            '## 实际应用\n\n' +
            '扩展第三方库类型是声明合并最常见的实际应用。给 Express 的 Request 对象扩展 user 字段：`declare module "express-serve-static-core" { interface Request { user?: User } }`——声明合并让中间件挂载的 user 在所有路由处理器中类型可用，无需改 Express 源码。这是扩展第三方库类型的标准做法，在 Express、Fastify、Koa 等 Node.js 框架中广泛使用。\n\n' +
            '另一场景是 Vue/Jest 等库的插件类型扩展：Vue 的 `$filters`、`$toast` 等实例属性，Jest 的 `expect.extend` 自定义匹配器，都通过声明合并让框架核心类型感知插件 API。在 Vite 插件开发中，`declare module "vite" { interface UserConfig { ... } }` 让自定义配置项获得类型提示，提升开发者体验。\n\n' +
            '## 扩展知识\n\n' +
            '- **`declare module "lib"` 与 `declare module "lib/sub"`**：前者扩展库主类型，后者给库的子路径加类型，常用于给库的子模块扩展。\n' +
            '- **`import "lib"` 副作用导入与 module augmentation**：模块扩展文件需 `import "lib"` 让 TS 识别为对该库的扩展，否则可能不生效。\n' +
            '- **`declare global` 与 `declare namespace`**：前者扩展全局对象（Window/Array），后者声明全局命名空间（旧式全局库），新代码优先用前者。\n' +
            '- **interface 合并的函数重载**：同名 interface 的函数成员合并时，后面的重载排在前面，但签名冲突时以先定义的为准。\n' +
            '- **声明合并与 tree-shaking**：声明合并在编译期处理，运行时不产生额外代码，不影响打包体积，可放心用于类型扩展。',
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
            '## 概念详解\n\n' +
            '模块解析（Module Resolution）指 TypeScript 如何根据 import 路径找到对应文件。' +
            '经典策略有 classic 与 node 两种，现代 TS 还提供 bundler、node16、nodenext 等策略。' +
            '相对路径 `./x` 从当前文件目录直接定位；非相对路径 `x` 沿 node_modules 逐级向上查找。' +
            '`baseUrl` 与 `paths` 配置路径别名，如 `@/*` 映射到 `src/*`，让深层导入更简洁。\n\n' +
            '它存在的意义：不同环境（Node、浏览器、打包工具）的模块解析规则不同，TS 需要可配置的解析策略以匹配运行时行为。' +
            '理解模块解析有助于排查"找不到模块"错误——常见原因包括文件扩展名配置、package.json 的 types/module 字段缺失、node_modules 类型定义未安装等。' +
            '正确配置 tsconfig 的 moduleResolution 与 paths，并与 bundler（如 Vite/webpack）的别名同步，是中大型项目的基础设施。\n\n' +
            '使用场景：所有 TS 项目都需配置模块解析；中大型项目用路径别名简化深层导入；库开发需正确设置 package.json 的 main/module/types/exports 字段让消费者能解析。' +
            '现代 TS 推荐 `moduleResolution: "bundler"`，与 Vite/webpack 等打包工具的解析行为一致。' +
            '路径别名让深层目录的导入从 `../../../components/Button` 简化为 `@/components/Button`，移动文件时导入路径不变，重构成本大幅降低。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// tsconfig.json 关键配置\n' +
            '{\n' +
            '  "compilerOptions": {\n' +
            '    "moduleResolution": "bundler",  // 解析策略\n' +
            '    "baseUrl": ".",                  // 路径别名基准\n' +
            '    "paths": {\n' +
            '      "@/*": ["src/*"],              // @ 别名\n' +
            '      "@components/*": ["src/components/*"],\n' +
            '      "@utils/*": ["src/utils/*"]\n' +
            '    },\n' +
            '    "module": "ESNext",              // 输出模块格式\n' +
            '    "target": "ES2022"\n' +
            '  }\n' +
            '}\n\n' +
            '// 1. 相对路径导入\n' +
            'import { add } from "./utils/math";       // 同目录\n' +
            'import { sub } from "../utils/math";      // 上级目录\n' +
            'import { x } from "../../config";         // 多层上级\n\n' +
            '// 2. 别名导入\n' +
            'import { Button } from "@/components/Button";  // 映射到 src/components/Button\n' +
            'import { formatDate } from "@utils/date";      // 映射到 src/utils/date\n\n' +
            '// 3. 非相对路径导入（node_modules）\n' +
            'import { useState } from "react";         // 从 node_modules 解析\n' +
            'import _ from "lodash";                   // 默认导出\n\n' +
            '// 4. 类型导入\n' +
            'import type { User } from "./types";      // 仅类型，编译后擦除\n' +
            'import { type User, getUser } from "./api";  // 混合类型与值导入\n' +
            '```\n\n' +
            '## 模块解析策略对照表\n\n' +
            '| 策略 | 写法 | 行为 | 适用场景 |\n' +
            '|------|------|------|----------|\n' +
            '| classic | `moduleResolution: "classic"` | 旧策略，不查 node_modules | 旧 TS 项目 |\n' +
            '| node | `moduleResolution: "node"` | 模拟 Node.js CommonJS 解析 | Node 项目 |\n' +
            '| node16 | `moduleResolution: "node16"` | Node 16+ ESM/CJS 严格解析 | 现代 Node |\n' +
            '| nodenext | `moduleResolution: "nodenext"` | 同 node16，未来方向 | 新 Node 项目 |\n' +
            '| bundler | `moduleResolution: "bundler"` | 匹配打包工具行为 | Vite/webpack 前端 |\n' +
            '| 相对路径 | `./x` `../x` | 相对当前文件 | 项目内导入 |\n' +
            '| 别名路径 | `@/x`（需 paths 配置） | 通过 baseUrl+paths 映射 | 中大型项目 |\n' +
            '| 包路径 | `pkg` `pkg/sub` | 从 node_modules 解析 | 第三方库 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：路径别名配置与使用。\n' +
            '```ts\n' +
            '// tsconfig.json\n' +
            '// {\n' +
            '//   "compilerOptions": {\n' +
            '//     "baseUrl": ".",\n' +
            '//     "paths": {\n' +
            '//       "@/*": ["src/*"],\n' +
            '//       "@components/*": ["src/components/*"]\n' +
            '//     }\n' +
            '//   }\n' +
            '// }\n\n' +
            '// 项目结构：\n' +
            '// src/\n' +
            '//   components/Button.tsx\n' +
            '//   services/api.ts\n' +
            '//   pages/Home.tsx\n\n' +
            '// src/pages/Home.tsx 中导入\n' +
            '// 旧写法：import { Button } from "../components/Button";\n' +
            '// 别名写法：import { Button } from "@/components/Button";\n' +
            '//           import { api } from "@/services/api";\n\n' +
            '// 单文件演示\n' +
            'const Button = { label: "点击" };\n' +
            'const api = { fetch: () => "数据" };\n' +
            'console.log(Button.label);   // 点击\n' +
            'console.log(api.fetch());     // 数据\n' +
            '```\n\n' +
            '示例二：package.json 的类型字段（库开发）。\n' +
            '```ts\n' +
            '// 库的 package.json\n' +
            '// {\n' +
            '//   "name": "my-lib",\n' +
            '//   "main": "./dist/index.js",           // CommonJS 入口\n' +
            '//   "module": "./dist/index.mjs",        // ESM 入口\n' +
            '//   "types": "./dist/index.d.ts",        // 类型定义入口\n' +
            '//   "exports": {\n' +
            '//     ".": {\n' +
            '//       "types": "./dist/index.d.ts",\n' +
            '//       "import": "./dist/index.mjs",\n' +
            '//       "require": "./dist/index.js"\n' +
            '//     },\n' +
            '//     "./utils": {\n' +
            '//       "types": "./dist/utils.d.ts",\n' +
            '//       "import": "./dist/utils.mjs"\n' +
            '//     }\n' +
            '//   }\n' +
            '// }\n\n' +
            '// 消费者使用\n' +
            '// import { foo } from "my-lib";        // 主入口\n' +
            '// import { bar } from "my-lib/utils";  // 子路径\n' +
            '```\n\n' +
            '示例三：模块解析顺序演示。\n' +
            '```ts\n' +
            '// import "lodash" 的解析顺序：\n' +
            '// 1. ./node_modules/lodash\n' +
            '// 2. ../node_modules/lodash\n' +
            '// 3. ../../node_modules/lodash\n' +
            '// 4. ... 一直找到根目录 /node_modules/lodash\n' +
            '// 5. 找到后读 package.json 的 types/module/exports 字段\n' +
            '// 6. 定位类型定义文件（如 lodash.d.ts）\n\n' +
            '// 如果找不到类型定义，可安装 @types/lodash\n' +
            '// 或在 tsconfig 中设置 "noImplicitAny": false 临时绕过\n\n' +
            'console.log("模块解析顺序理解完毕");\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **paths 必须配合 baseUrl**：旧版 TS 要求 paths 与 baseUrl 一起使用，新版（5+）可省略 baseUrl，但为兼容性建议保留。\n' +
            '2. **paths 别名需同步 bundler**：TS 的 paths 只影响类型检查，运行时由 bundler 解析。Vite 需在 `vite.config.ts` 的 `resolve.alias` 配置相同别名，webpack 需在 `resolve.alias` 配置。\n' +
            '3. **`moduleResolution: "bundler"` 需配合 `module: "ESNext"`**：bundler 策略假设打包工具处理模块，不适用于 Node 直接运行。\n' +
            '4. **`import type` 避免运行时副作用**：纯类型导入用 `import type` 或 `import { type T }`，编译后完全擦除，避免循环依赖和打包冗余。\n' +
            '5. **找不到模块排查清单**：检查 tsconfig 的 moduleResolution、paths 配置；检查 node_modules 是否安装；检查库是否有 @types；检查 package.json 的 types 字段。\n' +
            '6. **`exports` 字段优先级**：现代 npm 包用 exports 封装内部结构，消费者只能导入 exports 暴露的路径，深层路径（如 `my-lib/dist/internal`）可能无法解析。\n\n' +
            '## 实际应用\n\n' +
            '中大型项目配置 `paths: { "@/*": ["src/*"] }` 后，`import { Button } from "@/components/Button"` 代替 `../../../components/Button`——移动文件时导入路径不变，重构成本大幅降低。配合 IDE 自动导入（VS Code 的 `typescript.preferences.importPathSpecifier`），开发体验极佳。Next.js、Nuxt、Vite 等框架默认配置了 `@` 别名。\n\n' +
            '库开发中，正确设置 package.json 的 `exports` 字段是让消费者顺利解析的关键。exports 定义了包的公共 API 入口，封装内部结构，支持条件导出（types/import/require）适应不同环境。配合 `tsup`、`unbuild` 等打包工具，可自动生成 ESM/CJS 双格式产物和类型定义，让库同时支持 Node、浏览器、打包工具等多种消费场景。\n\n' +
            '## 扩展知识\n\n' +
            '- **`moduleResolution: "node16"/"nodenext"`**：严格区分 ESM 和 CJS，要求 ESM 导入带扩展名，更适合现代 Node 项目，但迁移成本较高。\n' +
            '- **`paths` 与 `baseUrl` 的关系**：paths 是相对 baseUrl 解析的；新版 TS 可省略 baseUrl，paths 相对 tsconfig.json 所在目录解析。\n' +
            '- **`rootDirs`**：让 TS 把多个目录视为同一虚拟根，常用于测试与源码分离（src/ 和 tests/ 视为同根），简化导入路径。\n' +
            '- **`typeRoots` 与 `types`**：typeRoots 指定 @types 包的查找目录，types 限制只包含列出的类型包，避免全局污染。\n' +
            '- **`verbatimModuleSyntax`**：TS 5.0+ 的严格模式，强制 `import type` 与 `export type`，确保编译期与运行时语义一致，是未来推荐配置。',
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
            '## 概念详解\n\n' +
            'tsconfig.json 是 TypeScript 项目的配置核心，控制编译目标、模块系统、类型检查严格度等所有编译行为。' +
            '关键字段包括：`target`（输出 JS 版本）、`module`（模块系统）、`strict`（严格模式总开关）、`outDir`（输出目录）、`include/exclude`（编译范围）、`lib`（可用类型库如 ES2020/DOM）。' +
            '它是 TS 项目的"控制面板"，合理配置能在编译期捕获更多错误，同时保证产物兼容目标环境。\n\n' +
            '它存在的意义：TypeScript 的强大在于可配置的严格度——从"渐进增强"（允许 any、宽松检查）到"全面严格"（禁止 any、穷尽检查），不同项目可按需选择。' +
            'tsconfig 让团队统一编译行为，通过 `extends` 继承基础配置，CI 阶段拦截低质量代码。' +
            '例如 `target: "ES2020"` 保证输出兼容支持 ES2020 的环境，`module: "ESNext"` 配合打包工具，`sourceMap` 开启便于调试，`noEmit` 配合打包工具只做类型检查。\n\n' +
            '使用场景：所有 TS 项目都需 tsconfig；团队项目应统一配置并通过 extends 继承；库开发需配置 declaration 生成 .d.ts；monorepo 用 references 管理多项目依赖。' +
            '推荐开启 `strict`、`noUnusedLocals`、`noImplicitReturns`、`noFallthroughCasesInSwitch` 等严格选项——' +
            '任何隐式 any、未用变量、隐式 undefined 返回、switch 穿透都会编译失败，强制开发者写出类型完备的代码。\n\n' +
            '## 语法说明\n\n' +
            '```json\n' +
            '{\n' +
            '  "compilerOptions": {\n' +
            '    "target": "ES2020",              // 输出 JS 版本\n' +
            '    "module": "ESNext",              // 模块系统\n' +
            '    "moduleResolution": "bundler",   // 模块解析策略\n' +
            '    "lib": ["ES2020", "DOM"],        // 可用类型库\n' +
            '    "strict": true,                  // 严格模式总开关\n' +
            '    "noUnusedLocals": true,          // 禁止未用局部变量\n' +
            '    "noUnusedParameters": true,      // 禁止未用参数\n' +
            '    "noImplicitReturns": true,       // 禁止隐式 undefined 返回\n' +
            '    "noFallthroughCasesInSwitch": true, // 禁止 switch 穿透\n' +
            '    "exactOptionalPropertyTypes": true, // 精确可选属性\n' +
            '    "outDir": "./dist",              // 输出目录\n' +
            '    "rootDir": "./src",              // 源码根目录\n' +
            '    "sourceMap": true,               // 生成 sourceMap\n' +
            '    "declaration": true,             // 生成 .d.ts\n' +
            '    "noEmit": true,                  // 仅类型检查，不输出\n' +
            '    "skipLibCheck": true,            // 跳过 .d.ts 检查加速\n' +
            '    "esModuleInterop": true,         // CJS/ESM 互操作\n' +
            '    "baseUrl": ".",                  // 路径别名基准\n' +
            '    "paths": { "@/*": ["src/*"] }    // 路径别名\n' +
            '  },\n' +
            '  "include": ["src/**/*"],           // 编译范围\n' +
            '  "exclude": ["node_modules", "dist"] // 排除范围\n' +
            '}\n' +
            '```\n\n' +
            '## tsconfig 关键选项对照表\n\n' +
            '| 选项 | 作用 | 推荐值 | 说明 |\n' +
            '|------|------|--------|------|\n' +
            '| `target` | 输出 JS 版本 | ES2020 | 决定语法降级程度 |\n' +
            '| `module` | 模块系统 | ESNext | 配合打包工具 |\n' +
            '| `moduleResolution` | 解析策略 | bundler | 匹配打包工具 |\n' +
            '| `lib` | 类型库 | ES2020+DOM | 可用的全局类型 |\n' +
            '| `strict` | 严格总开关 | true | 开启所有严格检查 |\n' +
            '| `noUnusedLocals` | 禁未用变量 | true | 拦截死代码 |\n' +
            '| `noImplicitReturns` | 禁隐式返回 | true | 强制显式 return |\n' +
            '| `outDir` | 输出目录 | dist | 编译产物位置 |\n' +
            '| `sourceMap` | 调试映射 | true | 便于调试 |\n' +
            '| `declaration` | 生成 .d.ts | true（库） | 库开发必需 |\n' +
            '| `noEmit` | 仅类型检查 | true（前端） | 配合打包工具 |\n' +
            '| `skipLibCheck` | 跳过 .d.ts 检查 | true | 加速编译 |\n' +
            '| `esModuleInterop` | CJS 互操作 | true | 导入 CJS 模块 |\n' +
            '| `paths` | 路径别名 | @/* | 简化深层导入 |\n' +
            '| `extends` | 继承配置 | @tsconfig/... | 复用基础配置 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：严格模式拦截低质量代码。\n' +
            '```ts\n' +
            '// noImplicitAny: 参数必须标注类型\n' +
            'function len(s: string): number { return s.length; }\n' +
            'console.log(len("hello"));  // 5\n\n' +
            '// noUnusedLocals: 未用变量报错\n' +
            'function process() {\n' +
            '  const x = 1;  // 若 x 未使用，编译报错\n' +
            '  const y = 2;\n' +
            '  return y;\n' +
            '}\n' +
            'console.log(process());  // 2\n\n' +
            '// noImplicitReturns: 所有分支必须返回\n' +
            'function check(n: number): string {\n' +
            '  if (n > 0) return "正";\n' +
            '  if (n < 0) return "负";\n' +
            '  return "零";  // 不能省略，否则报错\n' +
            '}\n' +
            'console.log(check(0));  // 零\n' +
            '```\n\n' +
            '示例二：extends 继承基础配置。\n' +
            '```ts\n' +
            '// 基础配置 tsconfig.base.json\n' +
            '// {\n' +
            '//   "compilerOptions": {\n' +
            '//     "strict": true,\n' +
            '//     "target": "ES2020",\n' +
            '//     "module": "ESNext",\n' +
            '//     "moduleResolution": "bundler"\n' +
            '//   }\n' +
            '// }\n\n' +
            '// 项目配置 tsconfig.json\n' +
            '// {\n' +
            '//   "extends": "./tsconfig.base.json",\n' +
            '//   "compilerOptions": {\n' +
            '//     "outDir": "./dist",\n' +
            '//     "paths": { "@/*": ["src/*"] }\n' +
            '//   },\n' +
            '//   "include": ["src"]\n' +
            '// }\n\n' +
            'console.log("extends 配置完成");\n' +
            '```\n\n' +
            '示例三：库开发配置生成 .d.ts。\n' +
            '```ts\n' +
            '// 库的 tsconfig.json\n' +
            '// {\n' +
            '//   "compilerOptions": {\n' +
            '//     "target": "ES2020",\n' +
            '//     "module": "ESNext",\n' +
            '//     "strict": true,\n' +
            '//     "declaration": true,           // 生成 .d.ts\n' +
            '//     "declarationMap": true,        // 生成 .d.ts.map\n' +
            '//     "outDir": "./dist",\n' +
            '//     "sourceMap": true,\n' +
            '//     "skipLibCheck": true\n' +
            '//   },\n' +
            '//   "include": ["src"]\n' +
            '// }\n\n' +
            '// 编译后 dist/ 包含：\n' +
            '//   index.js（运行时代码）\n' +
            '//   index.d.ts（类型定义）\n' +
            '//   index.js.map（sourceMap）\n' +
            '//   index.d.ts.map（类型 sourceMap）\n' +
            'console.log("库配置完成");\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **`strict` 是多个选项的集合**：开启 strict 等同于开启 noImplicitAny、strictNullChecks、strictFunctionTypes、strictBindCallApply、strictPropertyInitialization、alwaysStrict、noImplicitThis、useUnknownInCatchVariables 等，是推荐的起点。\n' +
            '2. **`target` 与 `lib` 要匹配**：target 决定语法降级，lib 决定可用类型。target: ES2020 应配 lib: ["ES2020", "DOM"]，否则可能用了 ES2020 语法但类型库缺失。\n' +
            '3. **`noEmit` 与打包工具配合**：前端项目用 Vite/webpack 时，TS 只做类型检查（noEmit: true），打包工具处理实际编译和打包。\n' +
            '4. **`skipLibCheck` 加速但不彻底**：跳过 .d.ts 检查能大幅加速编译，但可能掩盖第三方类型定义的错误。生产构建可临时关闭。\n' +
            '5. **`esModuleInterop` 解决 CJS 互操作**：导入 CJS 模块（如 `import _ from "lodash"`）时需要 esModuleInterop，否则需用 `import * as _`。\n' +
            '6. **monorepo 用 `references`**：大型 monorepo 用 `references` 让 TS 理解项目间依赖，支持增量编译，大幅提升构建速度。\n\n' +
            '## 实际应用\n\n' +
            '团队项目通过统一的 tsconfig（开启 strict、noUnusedLocals、noImplicitReturns）在 CI 阶段拦截低质量代码——任何隐式 any、未用变量、隐式 undefined 返回都会编译失败，强制开发者写出类型完备的代码。配合 ESLint 的 TypeScript 规则（@typescript-eslint），可进一步检查代码风格和潜在 bug。\n\n' +
            '库开发中，tsconfig 的 `declaration: true` 生成 .d.ts 类型定义，让消费者获得类型提示；`declarationMap` 生成 .d.ts.map 让 IDE 能跳转到库的源码而非 .d.ts。配合 tsup、unbuild 等工具，可自动生成 ESM/CJS 双格式产物，发布到 npm 后支持多种消费场景。在 monorepo 中，用 `references` + `composite: true` 管理包间依赖，实现增量构建。\n\n' +
            '## 扩展知识\n\n' +
            '- **`@tsconfig/*` 官方推荐配置**：如 `@tsconfig/strictest` 提供最严格配置，`@tsconfig/create-react-app` 匹配 CRA，用 extends 继承省去手写。\n' +
            '- **`composite` 与 `references`**：monorepo 增量构建的关键，让 TS 把每个子项目视为独立编译单元，只重建变更部分。\n' +
            '- **`tsc --watch` 增量编译**：开发时用 watch 模式，只编译变更文件，比每次全量编译快得多。\n' +
            '- **`typeCheckingMode` 与 IDE**：VS Code 等 IDE 用 tsconfig 控制类型检查行为，可针对不同模式（开发/生产）用不同配置。\n' +
            '- **`tsBuildInfoFile`**：增量构建的缓存文件，配合 `incremental: true` 使用，记录上次编译状态，加速后续编译。',
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
            '## 概念详解\n\n' +
            '`strict: true` 是 TypeScript 严格模式的总开关，一键开启所有严格检查：noImplicitAny、strictNullChecks、strictFunctionTypes、strictBindCallApply、strictPropertyInitialization、alwaysStrict、noImplicitThis、useUnknownInCatchVariables。' +
            '其中 strictNullChecks 是最关键的子选项：null/undefined 不再自动属于任何类型，必须显式处理。' +
            '这从根本上消灭了"意外访问 null/undefined 的属性"这类最常见的运行时错误——JS 中最频繁的 bug 类型。\n\n' +
            '它存在的意义：JS 是弱类型语言，null/undefined 自动属于任何类型导致空指针错误频发。' +
            'TS 严格模式把 null/undefined 隔离为独立类型，强制开发者在访问可能为空的值前显式处理——用可选链 `?.`、非空断言 `!`、空值合并 `??` 或条件判断。' +
            '虽然增加编写负担，但大幅减少运行时空指针错误，是生产项目的标配。建议从一开始就开启 strict，避免后期迁移的痛苦。\n\n' +
            '使用场景：所有生产项目都应开启 strict；React 组件的可选 props、可选回调依赖 strictNullChecks 保证安全；API 响应中可能为 null 的字段需显式处理。' +
            '严格模式下，可能为 null 的值需用 `?.`（可选链）、`!`（非空断言）或条件判断处理后才能访问属性。' +
            '`??`（空值合并）提供默认值。非空断言 `!` 要慎用——它绕过检查，若值实际为 null 会运行时崩溃。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. strictNullChecks：null/undefined 是独立类型\n' +
            'function find(arr: number[], target: number): number | undefined {\n' +
            '  return arr.find(x => x === target);\n' +
            '}\n' +
            'const r = find([1, 2, 3], 2);\n' +
            '// r.toString()  // 报错：r 可能是 undefined\n' +
            'if (r !== undefined) {\n' +
            '  console.log(r.toString());  // OK，r 已收窄为 number\n' +
            '}\n\n' +
            '// 2. 可选链 ?.：安全访问嵌套属性\n' +
            'interface User { profile?: { name?: string; age?: number }; }\n' +
            'const u: User = {};\n' +
            'console.log(u.profile?.name);  // undefined（不报错）\n' +
            'console.log(u.profile?.age?.toString());  // undefined\n\n' +
            '// 3. 空值合并 ??：提供默认值\n' +
            'const name = u.profile?.name ?? "匿名";\n' +
            'console.log(name);  // 匿名\n\n' +
            '// 4. 非空断言 !：绕过 null 检查（慎用）\n' +
            'const arr: number[] = [1, 2, 3];\n' +
            'const first: number = arr[0]!;  // 断言非空\n' +
            'console.log(first);  // 1\n\n' +
            '// 5. strictPropertyInitialization：类属性必须初始化\n' +
            'class Service {\n' +
            '  private api: string;  // 报错：未初始化\n' +
            '  constructor() {\n' +
            '    this.api = "https://api.example.com";  // OK\n' +
            '  }\n' +
            '}\n' +
            '```\n\n' +
            '## 严格模式子选项对照表\n\n' +
            '| 子选项 | 作用 | 典型场景 |\n' +
            '|--------|------|----------|\n' +
            '| `noImplicitAny` | 禁止隐式 any | 参数必须标注类型 |\n' +
            '| `strictNullChecks` | null/undefined 独立类型 | 必须显式处理空值 |\n' +
            '| `strictFunctionTypes` | 严格函数类型检查 | 防止不安全赋值 |\n' +
            '| `strictBindCallApply` | 严格 bind/call/apply | 参数类型匹配 |\n' +
            '| `strictPropertyInitialization` | 类属性必须初始化 | 构造函数中赋值 |\n' +
            '| `alwaysStrict` | 输出 "use strict" | 严格模式运行 |\n' +
            '| `noImplicitThis` | 禁止隐式 this | 回调中 this 类型 |\n' +
            '| `useUnknownInCatchVariables` | catch 变量为 unknown | 错误处理需收窄 |\n' +
            '| `exactOptionalPropertyTypes` | 精确可选属性 | 区分 undefined 与缺失 |\n' +
            '| `noUnusedLocals` | 禁未用变量 | 拦截死代码 |\n' +
            '| `noImplicitReturns` | 禁隐式返回 | 强制显式 return |\n\n' +
            '## 代码示例\n\n' +
            '示例一：可选链处理深层嵌套数据。\n' +
            '```ts\n' +
            'interface ApiResponse {\n' +
            '  data?: {\n' +
            '    user?: {\n' +
            '      profile?: {\n' +
            '        name?: string;\n' +
            '        avatar?: string;\n' +
            '      };\n' +
            '    };\n' +
            '  };\n' +
            '}\n\n' +
            'const res: ApiResponse = {};\n\n' +
            '// 传统写法（冗长）\n' +
            'const name1 = res.data && res.data.user && res.data.user.profile\n' +
            '  ? res.data.user.profile.name\n' +
            '  : undefined;\n\n' +
            '// 可选链写法（简洁）\n' +
            'const name2 = res.data?.user?.profile?.name;\n' +
            'const avatar = res.data?.user?.profile?.avatar ?? "default.png";\n\n' +
            'console.log(name1);  // undefined\n' +
            'console.log(name2);  // undefined\n' +
            'console.log(avatar);  // default.png\n' +
            '```\n\n' +
            '示例二：strictPropertyInitialization 强制初始化。\n' +
            '```ts\n' +
            'class UserService {\n' +
            '  private api: string;        // 必须在构造函数初始化\n' +
            '  readonly version: string = "1.0";  // 直接初始化\n' +
            '  private cache?: Map<string, unknown>;  // 可选属性可不初始化\n\n' +
            '  constructor(apiUrl: string) {\n' +
            '    this.api = apiUrl;  // 构造函数中赋值\n' +
            '  }\n\n' +
            '  initCache(): void {\n' +
            '    this.cache = new Map();  // 延迟初始化\n' +
            '  }\n' +
            '}\n\n' +
            'const svc = new UserService("https://api.example.com");\n' +
            'console.log(svc.version);  // 1.0\n' +
            '```\n\n' +
            '示例三：useUnknownInCatchVariables 安全错误处理。\n' +
            '```ts\n' +
            'function parseJson(str: string): unknown {\n' +
            '  try {\n' +
            '    return JSON.parse(str);\n' +
            '  } catch (err) {\n' +
            '    // err 类型是 unknown（不是 any），必须收窄后才能访问属性\n' +
            '    if (err instanceof Error) {\n' +
            '      console.log("解析失败: " + err.message);\n' +
            '    } else {\n' +
            '      console.log("未知错误: " + String(err));\n' +
            '    }\n' +
            '    return null;\n' +
            '  }\n' +
            '}\n\n' +
            'const result = parseJson("{ invalid json }");\n' +
            'console.log(result);  // null\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **`!` 非空断言是逃生舱**：它绕过类型检查，若值实际为 null 会运行时崩溃。仅在确信非空时用（如刚检查过的 DOM 元素），生产代码尽量改用 `?.` 或条件判断。\n' +
            '2. **`??` 与 `||` 的区别**：`??` 只在 null/undefined 时取右侧，`||` 在所有 falsy 值（0/""/false）时取右侧。处理数字 0 或空字符串时要用 `??`。\n' +
            '3. **`?.` 不能用于赋值左侧**：`u.profile?.name = "Tom"` 是非法的，可选链只能用于读取，不能赋值。需要先确保 profile 存在。\n' +
            '4. **strictPropertyInitialization 的例外**：可选属性（带 `?`）、 definitenely assigned（用 `!:` 断言）可不初始化，但后者绕过检查需谨慎。\n' +
            '5. **`useUnknownInCatchVariables` 需收窄**：catch 的 err 是 unknown，必须用 `instanceof Error` 或类型守卫收窄后才能访问 message 等属性。\n' +
            '6. **后期开启 strict 迁移痛苦**：从宽松迁移到严格会暴露大量类型错误，建议新项目一开始就开启 strict，避免技术债。\n\n' +
            '## 实际应用\n\n' +
            'React 组件 props 中可选回调 `onClick?: () => void`，严格模式下调用前必须 `onClick?.()`——避免 "onClick is not a function" 运行时错误，类型系统强制处理了缺失情况。这是 React props typing 的日常，所有现代 React 项目都受益于 strictNullChecks。\n\n' +
            '另一场景是 API 响应处理：后端返回的数据中字段可能为 null（数据库 NULL、可选字段），用可辨识联合 + 可选链安全访问。配合 zod 等运行时校验库，能在编译期和运行期双重保证类型安全。在 NestJS、Express 后端中，DTO（Data Transfer Object）用 class-validator 装饰器声明约束，配合 strict 模式让请求/响应数据完全类型安全。\n\n' +
            '## 扩展知识\n\n' +
            '- **`exactOptionalPropertyTypes`**：区分 `name?: string`（属性可缺失）与 `name: string | undefined`（属性必须存在但值可为 undefined），是更精确的可选属性语义。\n' +
            '- **`strictFunctionTypes` 的逆变**：严格函数类型检查方法参数的逆变关系，防止把 `(x: Animal) => void` 赋给 `(x: Dog) => void` 这类不安全赋值。\n' +
            '- **`noUncheckedIndexedAccess`**：让 `arr[0]` 的类型为 `T | undefined`（而非 T），强制处理数组越界，是比 strict 更严格的选项。\n' +
            '- **类型安全的 DOM 操作**：`document.getElementById` 返回 `HTMLElement | null`，配合 `instanceof HTMLInputElement` 收窄后安全访问 `value`。\n' +
            '- **`satisfies` 与严格模式**：TS 4.9+ 的 `satisfies` 运算符让对象字面量在不拓宽类型的前提下满足约束，是严格模式下构造对象的安全方式。',
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
            '## 概念详解\n\n' +
            '装饰器（Decorator）是一种用 `@表达式` 语法给类、方法、属性、参数添加额外行为的特殊声明。' +
            '装饰器本质是高阶函数：接收目标对象，返回修改后的目标。类装饰器接收构造函数，方法装饰器接收目标对象、键、属性描述符，属性装饰器接收目标对象和键，参数装饰器接收目标对象、键、参数索引。' +
            '装饰器需要 `experimentalDecorators: true` 配置启用（TS 5 的 stage 3 装饰器标准略有不同）。\n\n' +
            '它存在的意义：面向对象编程中，类/方法/属性的核心逻辑与横切关注点（日志、缓存、校验、路由）常需分离。' +
            '装饰器提供声明式语法，把"附加行为"以元数据形式附加到类上，框架运行时读取这些元数据自动执行逻辑。' +
            '这避免了侵入核心逻辑，让代码更清晰、更易维护。在 NestJS、TypeORM、class-validator 等后端框架中广泛使用，是元编程的重要工具。\n\n' +
            '使用场景：NestJS 的 `@Controller`/`@Get` 声明路由，class-validator 的 `@IsString`/`@MinLength` 校验字段，TypeORM 的 `@Entity`/`@Column` 映射数据库表，Angular 的 `@Component`/`@Injectable` 声明组件和依赖。' +
            '装饰器把"声明式"的元数据附加到类上，框架在运行时读取这些元数据自动执行逻辑。' +
            '注：在线运行环境可能未启用装饰器配置，下方示例用"手动应用装饰器函数"的方式演示等效行为，@ 语法在注释中展示。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 类装饰器：接收构造函数，返回新构造函数\n' +
            'function log<T extends new (...args: any[]) => any>(Base: T): T {\n' +
            '  return class extends Base {\n' +
            '    constructor(...args: any[]) {\n' +
            '      super(...args);\n' +
            '      console.log("实例化: " + (Base as any).name);\n' +
            '    }\n' +
            '  };\n' +
            '}\n' +
            '@log\n' +
            'class A {}\n\n' +
            '// 2. 方法装饰器：接收 (目标, 键, 描述符)\n' +
            'function trace(target: any, key: string, desc: PropertyDescriptor) {\n' +
            '  const original = desc.value;\n' +
            '  desc.value = function (...args: any[]) {\n' +
            '    console.log("调用: " + key);\n' +
            '    return original.apply(this, args);\n' +
            '  };\n' +
            '}\n' +
            'class Calc {\n' +
            '  @trace\n' +
            '  double(n: number): number { return n * 2; }\n' +
            '}\n\n' +
            '// 3. 属性装饰器：接收 (目标, 键)\n' +
            'function readonly(target: any, key: string) {\n' +
            '  Object.defineProperty(target, key, { writable: false });\n' +
            '}\n' +
            'class C {\n' +
            '  @readonly\n' +
            '  x: number = 1;\n' +
            '}\n\n' +
            '// 4. 参数装饰器：接收 (目标, 键, 参数索引)\n' +
            'function required(target: any, key: string, idx: number) {\n' +
            '  console.log(`参数 ${idx} 标记为必填`);\n' +
            '}\n' +
            'class Service {\n' +
            '  greet(@required name: string): string { return "hi " + name; }\n' +
            '}\n\n' +
            '// 5. 装饰器工厂：返回装饰器函数，可传参\n' +
            'function logWith(prefix: string) {\n' +
            '  return function <T extends new (...args: any[]) => any>(Base: T): T {\n' +
            '    return class extends Base {\n' +
            '      constructor(...args: any[]) {\n' +
            '        super(...args);\n' +
            '        console.log(prefix + (Base as any).name);\n' +
            '      }\n' +
            '    };\n' +
            '  };\n' +
            '}\n' +
            '@logWith("[Class] ")\n' +
            'class B {}\n' +
            '```\n\n' +
            '## 装饰器类型对照表\n\n' +
            '| 类型 | 签名 | 接收参数 | 典型用途 |\n' +
            '|------|------|----------|----------|\n' +
            '| 类装饰器 | `(constructor: T) => T \\| void` | 构造函数 | 扩展/替换类 |\n' +
            '| 方法装饰器 | `(target, key, desc) => void` | 目标/键/描述符 | 拦截/包装方法 |\n' +
            '| 属性装饰器 | `(target, key) => void` | 目标/键 | 标记/修改属性 |\n' +
            '| 参数装饰器 | `(target, key, idx) => void` | 目标/键/索引 | 标记参数 |\n' +
            '| 访问器装饰器 | `(target, key, desc) => void` | 目标/键/描述符 | 拦截 getter/setter |\n' +
            '| 装饰器工厂 | `(...args) => 装饰器函数` | 自定义参数 | 可配置装饰器 |\n' +
            '| 元数据反射 | `Reflect.metadata` 配合 | 键/值 | 存储元数据 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：手动类装饰器（兼容在线环境）。\n' +
            '```ts\n' +
            '// @log 装饰器语法（需 experimentalDecorators）\n' +
            '// @log\n' +
            '// class A {}\n\n' +
            '// 等效手动应用：\n' +
            'function log<T extends new (...args: any[]) => any>(Base: T): T {\n' +
            '  return class extends Base {\n' +
            '    constructor(...args: any[]) {\n' +
            '      super(...args);\n' +
            '      console.log("实例化: " + (Base as any).name);\n' +
            '    }\n' +
            '  };\n' +
            '}\n' +
            'class A { constructor() {} }\n' +
            'const LoggedA = log(A);\n' +
            'new LoggedA();  // 实例化: A\n' +
            '```\n\n' +
            '示例二：方法装饰器实现日志追踪。\n' +
            '```ts\n' +
            'function trace(fn: Function): Function {\n' +
            '  return function (this: any, ...args: any[]) {\n' +
            '    console.log("调用方法，参数: " + JSON.stringify(args));\n' +
            '    const result = fn.apply(this, args);\n' +
            '    console.log("返回: " + result);\n' +
            '    return result;\n' +
            '  };\n' +
            '}\n\n' +
            'class Calc {\n' +
            '  double(n: number): number { return n * 2; }\n' +
            '}\n\n' +
            '// 手动应用装饰器（等效 @trace）\n' +
            'Calc.prototype.double = trace(Calc.prototype.double) as any;\n\n' +
            'const c = new Calc();\n' +
            'console.log(c.double(5));\n' +
            '// 调用方法，参数: [5]\n' +
            '// 返回: 10\n' +
            '// 10\n' +
            '```\n\n' +
            '示例三：装饰器工厂模拟校验。\n' +
            '```ts\n' +
            '// 装饰器工厂：返回装饰器函数，可传参\n' +
            'function minLen(min: number) {\n' +
            '  return function (target: any, key: string) {\n' +
            '    console.log(`字段 ${key} 最小长度: ${min}`);\n' +
            '  };\n' +
            '}\n\n' +
            'function isEmail(target: any, key: string) {\n' +
            '  console.log(`字段 ${key} 必须是邮箱`);\n' +
            '}\n\n' +
            '// 模拟 class-validator 用法\n' +
            'class UserDTO {\n' +
            '  name: string = "";\n' +
            '  email: string = "";\n' +
            '}\n\n' +
            '// 手动应用（等效 @minLen(2) @isEmail）\n' +
            'minLen(2)(UserDTO.prototype, "name");\n' +
            'isEmail(UserDTO.prototype, "email");\n' +
            'console.log("校验装饰器演示完成");\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **需 `experimentalDecorators` 配置**：TS 的旧版装饰器（experimentalDecorators）与 ES stage 3 装饰器标准不同，迁移需注意。TS 5+ 支持 stage 3 装饰器（无需 experimentalDecorators），但生态兼容性仍在过渡。\n' +
            '2. **装饰器执行顺序**：多个装饰器从下到上、从右到左应用（与函数组合顺序一致）。`@A @B class C` 等效 `A(B(C))`。\n' +
            '3. **方法装饰器修改描述符要谨慎**：直接改 `desc.value` 会替换原方法，确保保留原逻辑（如 `original.apply(this, args)`），否则破坏类行为。\n' +
            '4. **装饰器不能用于函数声明**：装饰器只能用于类及其成员，不能装饰独立函数。需要函数装饰时用高阶函数替代。\n' +
            '5. **元数据反射需 `reflect-metadata`**：用 `Reflect.metadata` 存储元数据需安装 `reflect-metadata` 包并在入口导入，TS 配置 `emitDecoratorMetadata: true` 自动生成类型元数据。\n' +
            '6. **性能考虑**：装饰器在类定义时执行一次，运行时无额外开销（除非装饰器逻辑本身有运行时代码）。但反射元数据读取有轻微开销，热路径慎用。\n\n' +
            '## 实际应用\n\n' +
            'NestJS 是装饰器最典型的应用场景：`@Controller("users")` 声明路由前缀，`@Get(":id")` 声明 GET 路由，`@Param("id")` 提取路径参数，`@Body()` 提取请求体。框架在启动时扫描所有装饰器，构建路由表，请求到来时自动分发。这种声明式风格让后端代码极度简洁，业务逻辑与路由/校验/依赖注入完全分离。\n\n' +
            '另一场景是 class-validator 配合 class-transformer 做表单校验：DTO 类用 `@IsString()`/`@IsEmail()`/`@MinLength(6)` 声明字段约束，请求到达时 `validate(dto)` 自动检查所有字段并返回错误列表。配合 TypeORM 的 `@Entity()`/`@Column()`，整个后端从数据库到 API 都用装饰器声明，是 NestJS + TypeORM 全栈开发的标配。\n\n' +
            '## 扩展知识\n\n' +
            '- **TS 5 stage 3 装饰器**：ES 标准化的装饰器语法，与 experimentalDecorators 不完全兼容，迁移需调整代码，是未来方向。\n' +
            '- **`emitDecoratorMetadata`**：自动为装饰目标生成类型元数据（design:type/design:paramtypes/design:returntype），NestJS 依赖注入依赖此特性。\n' +
            '- **`reflect-metadata` polyfill**：提供 `Reflect.defineMetadata`/`Reflect.getMetadata` API，是元数据反射的基础 polyfill。\n' +
            '- **NestJS 依赖注入**：`@Injectable()` 标记可注入类，`@Module()` 组织 providers，框架根据元数据自动解析依赖关系，是 IoC 容器的实现。\n' +
            '- **Angular 装饰器**：`@Component`/`@Directive`/`@Pipe`/`@Injectable` 是 Angular 的核心，编译器读取装饰器元数据生成组件定义，是 Angular 框架的基础。',
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
            '## 概念详解\n\n' +
            '类型体操（Type Gymnastics）指用 TypeScript 类型系统进行复杂类型计算，如递归、字符串解析、元组操作、数学运算等。' +
            '经典技巧包括：递归类型（`type Length<T extends any[]> = T["length"]`）、条件类型递归、`infer` 提取、模板字面量类型操作。' +
            'TS 4.1+ 的模板字面量类型让 `Uppercase<S>`、`Lowercase<S>`、`Capitalize<S>` 等内置工具可操作字符串字面量类型，开启了字符串级类型编程。\n\n' +
            '它存在的意义：TS 的类型系统是图灵完备的（理论上），能在编译期完成复杂的类型推导，让运行时类型完全精确。' +
            '类型体操培养对类型系统的深度理解，能写出极其精确的类型约束——例如类型安全的事件发射器用 `emit<K extends keyof Events>(e: K, ...args: Args<Events[K]>)` 实现，事件名和参数类型一一对应，类型错误的事件调用编译期暴露。' +
            '这是 TypeScript 相对其他语言的核心优势，广泛应用于 tRPC、Zod、Effect 等现代框架的内部实现。\n\n' +
            '使用场景：类型安全的 API 客户端（tRPC）、运行时校验库（zod/io-ts）、状态机类型约束、路由参数类型推导、表单字段类型联动。' +
            '生产中应以可读性为先，避免过度炫技——复杂的类型体操虽强大，但难以理解和维护。' +
            '好的工程实践是：核心工具类型做好注释，团队成员能看懂；过度复杂的类型推导考虑用代码生成或运行时校验替代。\n\n' +
            '## 语法说明\n\n' +
            '```ts\n' +
            '// 1. 元组长度（字面量类型，非 number）\n' +
            'type Length<T extends any[]> = T["length"];\n' +
            'type L = Length<[1, 2, 3]>;  // 3（字面量）\n\n' +
            '// 2. 字符串模板类型操作\n' +
            'type Upper = Uppercase<"hello">;       // "HELLO"\n' +
            'type Lower = Lowercase<"WORLD">;       // "world"\n' +
            'type Cap = Capitalize<"foo">;          // "Foo"\n' +
            'type Uncap = Uncapitalize<"Bar">;      // "bar"\n\n' +
            '// 3. infer 提取数组元素\n' +
            'type Flatten<T> = T extends Array<infer U> ? U : T;\n' +
            'type F = Flatten<string[]>;  // string\n' +
            'type F2 = Flatten<number>;   // number（非数组原样返回）\n\n' +
            '// 4. 递归类型：深度只读\n' +
            'type DeepReadonly<T> = {\n' +
            '  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];\n' +
            '};\n\n' +
            '// 5. 模板字面量类型：生成 getter 名\n' +
            'type Getters<T> = {\n' +
            '  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n' +
            '};\n' +
            'type UserGetters = Getters<{ name: string; age: number }>;\n' +
            '// { getName: () => string; getAge: () => number }\n\n' +
            '// 6. 联合分发\n' +
            'type ToArray<T> = T extends any ? T[] : never;\n' +
            'type R = ToArray<string | number>;  // string[] | number[]\n' +
            '```\n\n' +
            '## 类型体操技巧对照表\n\n' +
            '| 技巧 | 写法 | 作用 | 难度 |\n' +
            '|------|------|------|------|\n' +
            '| 元组长度 | `T["length"]` | 取元组长度字面量 | 初级 |\n' +
            '| infer 提取 | `T extends X ? infer U : never` | 提取类型组件 | 中级 |\n' +
            '| 递归类型 | `type R<T> = ... R<...>` | 递归处理嵌套 | 中级 |\n' +
            '| 模板字面量 | `` `get${Capitalize<K>}` `` | 生成字符串类型 | 中级 |\n' +
            '| 映射重映射 | `[K in keyof T as ...]` | 重命名键 | 中级 |\n' +
            '| 联合分发 | `T extends any ? ... : ...` | 对联合成员分别处理 | 中级 |\n' +
            '| 条件过滤 | `T extends U ? never : T` | 过滤联合成员 | 中级 |\n' +
            '| 累加递归 | 递归 + 元组拼接 | 编译期计数 | 高级 |\n' +
            '| 字符串解析 | 递归 infer 拆分 | 解析路径/查询串 | 高级 |\n' +
            '| 路径生成 | 递归模板字面量 | 生成嵌套路径联合 | 高级 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：Flatten 提取数组元素类型。\n' +
            '```ts\n' +
            '// 提取数组元素类型，非数组原样返回\n' +
            'type Flatten<T> = T extends Array<infer U> ? U : T;\n\n' +
            'type F1 = Flatten<string[]>;      // string\n' +
            'type F2 = Flatten<number[]>;      // number\n' +
            'type F3 = Flatten<boolean>;       // boolean（非数组）\n' +
            'type F4 = Flatten<(string | number)[]>;  // string | number\n\n' +
            'const f1: F1 = "hello";\n' +
            'const f3: F3 = true;\n' +
            'console.log(f1, f3);  // hello true\n' +
            '```\n\n' +
            '示例二：Getters 自动生成 getter 方法名。\n' +
            '```ts\n' +
            'type Getters<T> = {\n' +
            '  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n' +
            '};\n\n' +
            'interface User {\n' +
            '  name: string;\n' +
            '  age: number;\n' +
            '  email: string;\n' +
            '}\n\n' +
            'type UserGetters = Getters<User>;\n' +
            '// { getName: () => string; getAge: () => number; getEmail: () => string }\n\n' +
            'const getters: UserGetters = {\n' +
            '  getName: () => "Tom",\n' +
            '  getAge: () => 25,\n' +
            '  getEmail: () => "tom@example.com",\n' +
            '};\n' +
            'console.log(getters.getName());   // Tom\n' +
            'console.log(getters.getAge());     // 25\n' +
            '```\n\n' +
            '示例三：类型安全的事件发射器。\n' +
            '```ts\n' +
            '// 事件映射：事件名 -> 参数数组类型\n' +
            'interface Events {\n' +
            '  login: [userId: string, timestamp: number];\n' +
            '  logout: [userId: string];\n' +
            '  error: [code: number, message: string];\n' +
            '}\n\n' +
            '// 类型安全的 emit：事件名与参数一一对应\n' +
            'type EventEmitter<T> = {\n' +
            '  emit<K extends keyof T>(event: K, ...args: T[K]): void;\n' +
            '  on<K extends keyof T>(event: K, handler: (...args: T[K]) => void): void;\n' +
            '};\n\n' +
            'class MyEmitter implements EventEmitter<Events> {\n' +
            '  private handlers: { [K: string]: Function[] } = {};\n\n' +
            '  emit<K extends keyof Events>(event: K, ...args: Events[K]): void {\n' +
            '    (this.handlers[event as string] || []).forEach(h => h(...args));\n' +
            '  }\n\n' +
            '  on<K extends keyof Events>(event: K, handler: (...args: Events[K]) => void): void {\n' +
            '    if (!this.handlers[event as string]) this.handlers[event as string] = [];\n' +
            '    this.handlers[event as string].push(handler);\n' +
            '  }\n' +
            '}\n\n' +
            'const emitter = new MyEmitter();\n' +
            'emitter.on("login", (userId, ts) => {\n' +
            '  console.log(`用户 ${userId} 在 ${ts} 登录`);\n' +
            '});\n' +
            'emitter.emit("login", "u1", Date.now());\n' +
            '// emit("login", 123)  // 报错：参数类型不匹配\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **递归深度限制**：TS 编译器对递归类型有深度限制（约 50-100 层），超深递归会报 "Type instantiation is excessively deep"。避免无限递归或过深的嵌套。\n' +
            '2. **编译性能**：复杂的类型体操会拖慢 IDE 提示和编译速度，大型项目慎用。可用 `@ts-ignore` 或简化类型在热路径上妥协。\n' +
            '3. **可读性优先**：类型体操的代码对团队成员理解负担大，生产代码中应加详细注释说明意图，或拆成有名字的小工具类型。\n' +
            '4. **`infer` 只能在条件类型中**：`infer U` 必须在 `T extends ... ? infer U : ...` 的 extends 子句中，不能独立使用。\n' +
            '5. **联合分发是双刃剑**：`T extends any ? T[] : never` 会对联合分发，得到 `A[] | B[]` 而非 `(A | B)[]`。要阻止分发用 `[T] extends [any] ? ... : ...`。\n' +
            '6. **考虑运行时校验替代**：当类型体操过于复杂时，用 zod 等运行时校验库可能更可维护——校验 + 类型推导一举两得。\n\n' +
            '## 实际应用\n\n' +
            '类型安全的事件发射器是类型体操的经典应用：通过 `emit<K extends keyof Events>(e: K, ...args: Events[K])`，事件名和参数类型一一对应，传错参数编译期就被拦截。这种"在类型层面编程"的能力是 TypeScript 相对其他语言的核心优势，广泛应用于 Node.js EventEmitter、socket.io、React 组件事件系统等场景。\n\n' +
            '另一场景是 tRPC 的端到端类型安全 API：服务端用 `t.router({...})` 定义路由，客户端通过类型体操自动推导出请求参数和响应类型，调用时完全类型安全——传错参数或访问不存在字段都编译报错。配合 Zod 的输入校验，实现了"一次定义、前后端共享、编译期校验"的全栈类型安全，是现代 TypeScript 全栈开发的范式。\n\n' +
            '## 扩展知识\n\n' +
            '- **`Paths<T>` 路径工具类型**：递归生成 `"a.b.c"` 形式的字符串联合，用于类型安全的 lodash.get / immer 路径访问，是高级类型体操的代表。\n' +
            '- **`TupleSplit<T, N>`**：按位置拆分元组，常用于函数参数与剩余参数的分离，配合 `infer` 实现。\n' +
            '- **编译期数学运算**：用元组长度模拟加减乘除（如 `type Add<A, B> = [...A, ...B]["length"]`），是极端类型体操的例子，生产中很少用。\n' +
            '- **`type-fest` 库**：社区维护的工具类型集合，提供 `CamelCase`/`SnakeCase`/`SetOptional` 等大量实用类型，避免重复造轮子。\n' +
            '- **`ts-toolbelt` 与 `type-zoo`**：高级类型工具库，提供更丰富的类型操作，但复杂度高，适合库开发者使用。',
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
