import type { CourseContent } from './types'

/**
 * JavaScript 入门到进阶课程（8 章，32 课时）
 *
 * JS 代码通过 JsWasmRunner 在 sandbox iframe 中执行。
 * console.log/info/warn/error 输出被捕获为 stdout：
 *   - 字符串、数字、布尔通过 String() 转换（字符串不带引号）
 *   - 对象/数组通过 JSON.stringify（数组如 [1,2,3]，对象如 {"a":1}）
 *   - 多个参数用空格连接，每条 log 末尾自动换行
 * 同步代码的输出会先于 "done" 信号到达，可被可靠捕获；
 * 异步回调（Promise.then / setTimeout）的输出不会被捕获，
 * 因此异步相关练习多采用同步可验证形式或 open-ended。
 * expected_output 与 console.log 输出文本对应（不含末尾换行）。
 */
export const javascriptCourse: CourseContent = {
  id: 'course-javascript',
  slug: 'javascript',
  title: 'JavaScript 入门到进阶',
  description:
    '从变量、函数到异步编程与 DOM 操作，系统学习 JavaScript 核心语法与浏览器编程，' +
    '涵盖经典面试题与真实工程场景，完成课程后可独立开发前端交互应用。',
  language: 'javascript',
  difficulty: 'beginner',
  chapters: [
    // ================================================================
    // 第 1 章：JavaScript 入门
    // ================================================================
    {
      id: 'js-ch1',
      title: 'JavaScript 入门',
      order: 0,
      lessons: [
        {
          id: 'js-ch1-l1',
          title: '变量与数据类型',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'JavaScript 是一门动态类型、弱类型、解释执行的编程语言，运行在浏览器和 Node.js 等环境中。' +
            '所谓"动态类型"，是指变量在声明时无需指定类型，类型在运行时确定，且同一变量可在不同时刻持有不同类型的值，' +
            '这与 Java、C# 等静态类型语言截然不同。所谓"弱类型"，是指 JS 会在运算时自动进行隐式类型转换，' +
            '例如 `1 + "2"` 会得到字符串 `"12"`。理解这两点，是掌握 JS 类型系统的钥匙。\n\n' +
'在现代 JS（ES6+）中，声明变量有三种方式：`var`、`let` 和 `const`。' +
            '`var` 是早期语法，存在变量提升（hoisting）和函数作用域等问题，现代代码应尽量避免使用；' +
            '`let` 声明可重新赋值的块级作用域变量；`const` 声明不可重新赋值的块级作用域常量（但对象内部仍可修改）。' +
            '`let` 和 `const` 是 ES2015 引入的，解决了 `var` 的诸多设计缺陷，是现代 JS 的基石。\n\n' +
            '业界推荐的原则是"默认用 const，需要修改时才用 let"。' +
            '这样能在编写时就明确哪些变量不应被改变，减少意外修改带来的 bug。' +
            '这一原则在函数式编程和 React 等框架中被广泛践行——不可变数据能显著降低状态管理的复杂度。\n\n' +
            '## 语法说明\n\n' +
            '变量声明的完整语法如下：\n\n' +
            '```js\n' +
            'var 变量名 = 初值;      // 函数作用域，可提升，可重复声明\n' +
            'let 变量名 = 初值;      // 块级作用域，不可重复声明，可重新赋值\n' +
            'const 变量名 = 初值;    // 块级作用域，必须初始化，不可重新赋值\n' +
            '```\n\n' +
            '`let` 和 `const` 声明的变量具有"暂时性死区（TDZ）"特性：从作用域开始到声明语句之间，访问该变量会抛出 ReferenceError，' +
            '而非像 `var` 那样返回 undefined。`const` 声明时必须立即赋值，否则会语法错误。' +
            '三者都是块级作用域（`{}` 内有效），而 `var` 是函数作用域。\n\n' +
            '## 类型系统一览\n\n' +
            'JS 有七种基本类型（Primitive）和引用类型，下表汇总了所有类型及其 `typeof` 返回值：\n\n' +
            '| 类型 | 分类 | 说明 | typeof 返回值 | 示例 |\n' +
            '|------|------|------|-------------|------|\n' +
            '| number | 基本 | 整数与浮点统一 | "number" | `42`, `3.14` |\n' +
            '| string | 基本 | 字符串 | "string" | `"hello"` |\n' +
            '| boolean | 基本 | 布尔 | "boolean" | `true`, `false` |\n' +
            '| null | 基本 | 空值 | "object"（历史遗留） | `null` |\n' +
            '| undefined | 基本 | 未定义 | "undefined" | `let x` |\n' +
            '| symbol | 基本 | 唯一符号 | "symbol" | `Symbol()` |\n' +
            '| bigint | 基本 | 大整数 | "bigint" | `10n` |\n' +
            '| object | 引用 | 对象/数组 | "object" | `{}`, `[]` |\n' +
            '| function | 引用 | 函数（也是对象） | "function" | `function(){}` |\n\n' +
            '`typeof` 运算符返回类型的字符串名称，是判断基本类型最常用的工具。' +
            '引用类型主要是 `object`（对象）和 `function`（函数也是对象）。\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. const 与 let 的区别\n' +
            'const PI = 3.14159       // 常量，不可重新赋值\n' +
            'let count = 0            // 变量，可重新赋值\n' +
            'count = count + 1        // 合法\n' +
            '// PI = 3                // 报错：Assignment to constant variable\n' +
            'console.log(PI, count)   // 3.14159 1\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. typeof 判断类型\n' +
            'console.log(typeof 42)           // number\n' +
            'console.log(typeof "hello")      // string\n' +
            'console.log(typeof true)         // boolean\n' +
            'console.log(typeof undefined)    // undefined\n' +
            'console.log(typeof null)         // object（历史遗留缺陷！）\n' +
            'console.log(typeof [])           // object（数组也是对象）\n' +
            'console.log(typeof function(){}) // function\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. const 与对象的可变性\n' +
            'const user = { name: "小明" }\n' +
            'user.name = "小红"   // 合法：修改属性，不是重新赋值\n' +
            'user.age = 20        // 合法：新增属性\n' +
            'console.log(user)    // { name: "小红", age: 20 }\n' +
            '// user = {}          // 报错：const 不能重新赋值\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **`typeof null` 返回 `"object"`**：这是语言早期遗留的设计缺陷（null 在内存中的低位标志位与对象相同），' +
            '   不能用它判断 null，应使用 `value === null`。\n' +
            '2. **判断数组用 `Array.isArray()`**：因为 `typeof []` 同样返回 `"object"`。' +
            '   `arr instanceof Array` 在跨 iframe 时会失效，因此 `Array.isArray` 是首选。\n' +
            '3. **const 锁定的是"绑定"而非"值不可变"**：const 声明的对象，其属性仍可增删改。' +
            '   若需要完全不可变，可用 `Object.freeze(user)`（注意 freeze 是浅冻结，嵌套对象仍可修改）。\n' +
            '4. **暂时性死区（TDZ）**：`let`/`const` 声明的变量在声明前访问会报 ReferenceError，不像 `var` 返回 undefined。\n' +
            '5. **避免使用 var**：var 的变量提升和函数作用域会导致"变量泄漏"和"循环变量共享"等经典 bug，现代代码一律用 let/const。\n\n' +
            '## 实际应用\n\n' +
            '在前端应用中，配置常量（如 API 地址、主题色、路由表）通常用 const 声明，避免运行时被意外覆盖。' +
            '而用户输入、计数器等会变化的状态则用 let。' +
            '善用 const 能让团队成员快速识别哪些值是"不可变约定"，降低协作时的认知负担。' +
            '在 React 中，组件内部状态用 useState 管理，而不会重新赋值的派生值则用 const。\n\n' +
            '## 扩展知识\n\n' +
            '- **`Object.freeze()` 与深冻结**：`Object.freeze()` 只冻结一层，嵌套对象仍可修改。' +
            '  实现深冻结需递归调用 freeze。\n' +
            '- **`BigInt`**：当数字超过 `Number.MAX_SAFE_INTEGER`（2^53 - 1）时，普通 number 会丢失精度，' +
            '  此时用 `BigInt`（如 `9007199254740993n`）可精确表示任意大整数。\n' +
            '- **`Symbol`**：用于创建全局唯一值，常作为对象的私有属性键，避免属性名冲突。\n' +
            '- **变量提升细节**：`var` 声明会被提升到函数顶部，但赋值不会提升；`let`/`const` 不会提升（TDZ 保护）。',
          examples: [
            {
              title: 'let 与 const',
              code:
                'const name = "小明"  // 常量，不可重新赋值\n' +
                'let age = 18         // 变量，可重新赋值\n' +
                'age = 19             // 合法\n' +
                'console.log(name, age)',
              explanation:
                'const 声明的 name 不能再被重新赋值，let 声明的 age 可以。' +
                '默认用 const 让代码意图更清晰，需要变更时才改用 let。',
            },
            {
              title: 'typeof 判断类型',
              code:
                'const n = 42\n' +
                'const s = "hello"\n' +
                'const b = true\n' +
                'const u = undefined\n' +
                'const arr = [1, 2, 3]\n' +
                'console.log(typeof n)      // number\n' +
                'console.log(typeof s)      // string\n' +
                'console.log(typeof b)      // boolean\n' +
                'console.log(typeof u)      // undefined\n' +
                'console.log(typeof arr)    // object（数组也是对象）',
              explanation:
                'typeof 对基本类型能准确返回类型名，但对数组、null 都返回 "object"。' +
                '因此判断数组应使用 Array.isArray(arr)，判断 null 用 x === null。',
            },
            {
              title: 'const 与对象的可变性',
              code:
                'const user = { name: "小明" }\n' +
                'user.name = "小红"   // 合法：修改属性，不是重新赋值\n' +
                'user.age = 20        // 合法：新增属性\n' +
                'console.log(user.name, user.age)',
              explanation:
                'const 锁定的是变量绑定，即不能让 user 指向新对象，但对象本身的属性仍可修改。' +
                '若需要完全不可变，可用 Object.freeze(user)。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 const 声明变量 city 赋值为 "北京"，用 console.log 输出它。',
              starter_code: 'const city = ___\nconsole.log(city)',
              expected_output: '北京',
              hints: [
                '字符串用双引号包裹，例如 "北京"',
                '完整写法：const city = "北京"',
                '注意不要漏掉分号或引号',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明变量 count 赋值为数字 10，用 typeof 检查并输出它的类型。',
              starter_code: 'const count = ___\nconsole.log(typeof count)',
              expected_output: 'number',
              hints: [
                '数字 10 不需要引号',
                '把 ___ 替换为 10',
                '答案就是数字 10',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Array.isArray 判断 [1, 2] 是否为数组，输出结果。',
              starter_code: 'console.log(Array.isArray(___))',
              expected_output: 'true',
              hints: [
                '传入一个数组字面量',
                '把 ___ 替换为 [1, 2]',
                '数组字面量用方括号包裹',
              ],
            },
          ],
          realWorldScenario:
            '在前端应用中，配置常量（如 API 地址、主题色、路由表）通常用 const 声明，' +
            '避免运行时被意外覆盖。而用户输入、计数器等会变化的状态则用 let。' +
            '善用 const 能让团队成员快速识别哪些值是"不可变约定"，降低协作时的认知负担。',
        },
        {
          id: 'js-ch1-l2',
          title: '运算符',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '运算符是操纵数据的语法结构，是表达式的基本构件。JS 的运算符种类丰富，包括算术、比较、逻辑、赋值、位、三元等。' +
            '理解每种运算符的行为和优先级，是写出正确、可读表达式的前提。\n\n' +
            '算术运算符包括 `+ - * / %`（取余）和 `**`（幂）。其中 `+` 既能做数字加法，又能做字符串拼接——' +
            '当任一操作数是字符串时，`+` 会把另一个也转成字符串拼接。这个"双栖"特性是很多隐式 bug 的根源，' +
            '因此拼接字符串时推荐用模板字面量反引号。`%` 取余常用于判断奇偶、周期性逻辑；`**` 是 ES2016 引入的幂运算符。\n\n' +
            '## 语法说明\n\n' +
            '比较运算符有两组：`==`（宽松相等，会做类型转换）和 `===`（严格相等，不转换类型）。' +
            '业界铁律是"始终用 ===，禁用 =="，因为 `0 == ""`、`null == undefined` 这类隐式转换' +
            '极易引发难以排查的 bug。`!==` 是严格不等。还有 `< > <= >=` 等大小比较运算符。\n\n' +
            '逻辑运算符 `&&`（与）、`||`（或）、`!`（非）返回的并非布尔值，而是操作数本身——' +
            '这是 JS 的"短路求值"特性。`a || b`：a 真则返回 a，否则返回 b；' +
            '`a && b`：a 假则返回 a，否则返回 b。常用于设置默认值（`const x = input || "默认"`）' +
            '和条件执行（`cond && doSomething()`）。ES2020 还引入了 `??`（空值合并），仅在左侧为 null/undefined 时取右侧。\n\n' +
            '## 运算符分类表\n\n' +
            '| 类别 | 运算符 | 说明 | 示例 |\n' +
            '|------|--------|------|------|\n' +
            '| 算术 | `+ - * /` | 加减乘除 | `7 + 3` → 10 |\n' +
            '| 算术 | `%` | 取余 | `7 % 3` → 1 |\n' +
            '| 算术 | `**` | 幂 | `2 ** 10` → 1024 |\n' +
            '| 算术 | `++` `--` | 自增自减 | `let i=0; i++` |\n' +
            '| 比较 | `===` `!==` | 严格相等/不等（推荐） | `1 === 1` → true |\n' +
            '| 比较 | `==` `!=` | 宽松相等/不等（不推荐） | `1 == "1"` → true |\n' +
            '| 比较 | `< > <= >=` | 大小比较 | `3 < 5` → true |\n' +
            '| 逻辑 | `&&` | 与（短路） | `a && b` |\n' +
            '| 逻辑 | `\\|\\|` | 或（短路） | `a \\|\\| b` |\n' +
            '| 逻辑 | `!` | 非 | `!true` → false |\n' +
            '| 逻辑 | `??` | 空值合并 | `null ?? "x"` → "x" |\n' +
            '| 三元 | `? :` | 条件表达式 | `x ? a : b` |\n' +
            '| 赋值 | `= += -= ...` | 赋值与复合赋值 | `x += 1` |\n' +
            '| 位 | `& \\| ^ ~ << >>` | 位运算 | `5 & 3` → 1 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 算术与取余\n' +
            'console.log(7 + 3)   // 10\n' +
            'console.log(7 - 3)   // 4\n' +
            'console.log(7 * 3)   // 21\n' +
            'console.log(7 / 2)   // 3.5（整数除法结果仍是浮点）\n' +
            'console.log(7 % 3)   // 1（取余，常用于判断奇偶）\n' +
            'console.log(2 ** 10) // 1024（幂运算）\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 严格相等 vs 宽松相等\n' +
            'console.log(1 === 1)            // true\n' +
            'console.log(1 === "1")          // false（类型不同直接不等）\n' +
            'console.log(1 == "1")           // true（隐式转换，不推荐！）\n' +
            'console.log(null === undefined) // false\n' +
            'console.log(null == undefined)  // true（仅此一例例外）\n' +
            'console.log(0 === false)        // false\n' +
            'console.log(NaN === NaN)        // false（NaN 不等于自身）\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 逻辑短路、空值合并与三元\n' +
            'const name = ""\n' +
            'const display = name || "匿名"   // 空字符串为假，返回 "匿名"\n' +
            'console.log(display)             // 匿名\n' +
            'const age = 20\n' +
            'const status = age >= 18 ? "成年" : "未成年"\n' +
            'console.log(status)              // 成年\n' +
            '// ?? 与 || 的区别：?? 只拦截 null/undefined，不拦截 0 和 ""\n' +
            'console.log(0 || "默认")   // 默认（0 是假值）\n' +
            'console.log(0 ?? "默认")   // 0（0 不是 null/undefined）\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **始终用 `===`，禁用 `==`**：`==` 的隐式转换规则极其复杂（涉及 ToNumber、ToPrimitive 等），是 bug 温床。' +
            '   唯一可接受 `==` 的场景是判断 `x == null`（同时覆盖 null 和 undefined）。\n' +
            '2. **`+` 的双栖行为**：`1 + 2` 得 3，但 `"1" + 2` 得 `"12"`。从表单取到的值都是字符串，累加前务必先 `Number()` 转换。\n' +
            '3. **短路求值返回的是操作数本身**：`||` 和 `&&` 不返回布尔值，而是参与运算的值。这在设置默认值时很实用，但也容易误用。\n' +
            '4. **`??` 与 `||` 的区别**：`||` 把所有假值（0、""、false）都当假，而 `??` 只在 null/undefined 时取右侧。' +
            '   当 0 或 "" 是有效值时，必须用 `??`。\n' +
            '5. **运算符优先级**：复杂表达式推荐用括号显式标明意图，避免依赖记忆优先级表。\n\n' +
            '## 实际应用\n\n' +
            '设置默认值是逻辑运算符最常见的场景：`const pageSize = input || 10`。' +
            '条件渲染时三元运算符让 JSX 更紧凑：`{isLoading ? <Spinner /> : <Content />}`。' +
            '判断奇偶用 `n % 2 === 0`；分页计算用 `Math.floor(offset / limit)`。' +
            '在表单校验中，`&&` 短路常用于"满足条件才执行校验"：`value && validate(value)`。\n\n' +
            '## 扩展知识\n\n' +
            '- **`??=` 逻辑空赋值（ES2021）**：`x ??= defaultValue` 等价于 `x = x ?? defaultValue`，仅在 x 为 null/undefined 时赋值。\n' +
            '- **`&&=` 和 `||=`**：类似的复合逻辑赋值运算符。\n' +
            '- **位运算的妙用**：`~` 取反、`>>` 右移可用于快速取整（`~~3.7` → 3），但可读性差，不推荐在生产代码中使用。\n' +
            '- **比较运算的字符串规则**：字符串比较按字典序（Unicode 码点），`"10" < "9"` 为 true，因为字符 "1" < "9"。',
          examples: [
            {
              title: '算术与取余',
              code:
                'console.log(7 + 3)   // 10\n' +
                'console.log(7 - 3)   // 4\n' +
                'console.log(7 * 3)   // 21\n' +
                'console.log(7 / 2)   // 3.5\n' +
                'console.log(7 % 3)   // 1（取余）\n' +
                'console.log(2 ** 10) // 1024（幂）',
              explanation:
                'JS 中整数除法结果仍是浮点（7/2=3.5），不像某些语言会截断。' +
                '% 取余常用于判断奇偶、周期性逻辑。** 是 ES2016 的幂运算符。',
            },
            {
              title: '严格相等 vs 宽松相等',
              code:
                'console.log(1 === 1)    // true\n' +
                'console.log(1 === "1")  // false（类型不同）\n' +
                'console.log(1 == "1")   // true（隐式转换，不推荐）\n' +
                'console.log(null === undefined) // false\n' +
                'console.log(0 === false)        // false',
              explanation:
                '=== 不做类型转换，类型不同直接返回 false，结果可预测。' +
                '== 会先把两边转成同类型再比较，规则复杂易错，现代代码应避免使用。',
            },
            {
              title: '逻辑短路与三元',
              code:
                'const name = ""\n' +
                'const display = name || "匿名"   // 空字符串为假，返回 "匿名"\n' +
                'console.log(display)\n' +
                'const age = 20\n' +
                'const status = age >= 18 ? "成年" : "未成年"\n' +
                'console.log(status)',
              explanation:
                '|| 用于默认值：左边为假值（空串、0、null、undefined、NaN、false）时返回右边。' +
                '三元运算符让简单的条件赋值更紧凑，但复杂分支仍应使用 if/else。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '计算 17 除以 5 的余数，用 console.log 输出结果。',
              starter_code: 'console.log(17 ___ 5)',
              expected_output: '2',
              hints: [
                '取余运算符是 %',
                '把 ___ 替换为 %',
                '17 % 5 的结果是 2',
              ],
            },
            {
              type: 'output-match',
              prompt: '用三元运算符：变量 score 为 75，大于等于 60 输出 "及格"，否则输出 "不及格"。',
              starter_code:
                'const score = 75\n' +
                'console.log(score >= 60 ___ "及格" : "不及格")',
              expected_output: '及格',
              hints: [
                '三元运算符格式：条件 ? 真值 : 假值',
                '把 ___ 替换为 ?',
                '完整：score >= 60 ? "及格" : "不及格"',
              ],
            },
            {
              type: 'output-match',
              prompt: '用严格相等判断 0 与 false 是否相等，输出结果（应为 false）。',
              starter_code: 'console.log(0 ___ false)',
              expected_output: 'false',
              hints: [
                '严格相等用 ===，不做类型转换',
                '把 ___ 替换为 ===',
                '0 是数字，false 是布尔，类型不同故为 false',
              ],
            },
          ],
          realWorldScenario:
            '在表单校验逻辑中，运算符组合出业务规则：例如"用户名非空且长度 6-20"写作 ' +
            '`name && name.length >= 6 && name.length <= 20`。' +
            '用 || 设置默认值（`const page = query.page || 1`）是前端分页组件的常见写法。' +
            '理解短路求值能让你写出更简洁的条件逻辑。',
        },
        {
          id: 'js-ch1-l3',
          title: '字符串操作',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '字符串是 JS 中最常用的数据类型之一，用于表示文本。字符串可用单引号、双引号或反引号（模板字面量）包裹。' +
            '模板字面量（反引号）支持在字符串中嵌入表达式 `${name}`，是多行字符串和字符串拼接的现代首选。' +
            '它让代码比传统的 `"你好, " + name` 更易读，尤其适合拼接 HTML 或长文本。\n\n' +
            '字符串是不可变的（immutable）：所有"修改"字符串的方法都返回新字符串，原字符串不变。' +
            '这意味着对字符串的频繁拼接在循环中会产生大量中间字符串，性能敏感场景应考虑用数组 `push` + `join` 替代。\n\n' +
            '## 语法说明\n\n' +
            '字符串字面量的三种写法：\n\n' +
            '```js\n' +
            'const s1 = "双引号"\n' +
            'const s2 = "单引号"\n' +
            'const s3 = `模板字面量，可嵌入 ${1 + 2} 表达式，\n还能换行`\n' +
            '```\n\n' +
            '模板字面量中 `${}` 内可放任意 JS 表达式（变量、函数调用、三元运算等），结果会被自动转为字符串。\n\n' +
            '## 常用方法与属性表\n\n' +
            '| 方法/属性 | 语法 | 说明 | 返回值 |\n' +
            '|-----------|------|------|--------|\n' +
            '| length | `s.length` | 字符串长度（属性，非方法） | number |\n' +
            '| charAt | `s.charAt(i)` | 获取索引处字符 | string |\n' +
            '| charCodeAt | `s.charCodeAt(i)` | 获取字符的 Unicode 码点 | number |\n' +
            '| indexOf | `s.indexOf(str)` | 查找子串首次出现位置 | number（找不到 -1） |\n' +
            '| lastIndexOf | `s.lastIndexOf(str)` | 从后往前查找 | number |\n' +
            '| includes | `s.includes(str)` | 是否包含子串 | boolean |\n' +
            '| startsWith | `s.startsWith(str)` | 是否以子串开头 | boolean |\n' +
            '| endsWith | `s.endsWith(str)` | 是否以子串结尾 | boolean |\n' +
            '| slice | `s.slice(start, end)` | 截取子串（含头不含尾） | string |\n' +
            '| substring | `s.substring(start, end)` | 类似 slice（不支持负数） | string |\n' +
            '| substr | `s.substr(start, len)` | 按长度截取（已废弃） | string |\n' +
            '| toUpperCase | `s.toUpperCase()` | 转大写 | string |\n' +
            '| toLowerCase | `s.toLowerCase()` | 转小写 | string |\n' +
            '| split | `s.split(sep)` | 按分隔符拆成数组 | string[] |\n' +
            '| replace | `s.replace(old, new)` | 替换首个匹配（可用正则） | string |\n' +
            '| replaceAll | `s.replaceAll(old, new)` | 替换所有匹配 | string |\n' +
            '| trim | `s.trim()` | 去除首尾空白 | string |\n' +
            '| trimStart/trimEnd | `s.trimStart()` | 去除首部/尾部空白 | string |\n' +
            '| repeat | `s.repeat(n)` | 重复 n 次 | string |\n' +
            '| padStart/padEnd | `s.padStart(len, str)` | 头/尾填充到指定长度 | string |\n' +
            '| concat | `s.concat(s2)` | 拼接字符串（少用，+ 更直观） | string |\n' +
            '| at | `s.at(i)` | 获取索引处字符（支持负数） | string |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 模板字面量与多行字符串\n' +
            'const name = "小明"\n' +
            'const age = 18\n' +
            'const intro = `我叫${name}，今年${age}岁`\n' +
            'console.log(intro)  // 我叫小明，今年18岁\n' +
            'const html = `<ul>\n  <li>${name}</li>\n</ul>`\n' +
            'console.log(html)   // 原生支持多行\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 常用字符串方法\n' +
            'const s = "Hello World"\n' +
            'console.log(s.length)            // 11\n' +
            'console.log(s.toUpperCase())     // HELLO WORLD\n' +
            'console.log(s.slice(0, 5))       // Hello（含头不含尾）\n' +
            'console.log(s.slice(-5))         // World（负数从末尾算）\n' +
            'console.log(s.indexOf("World"))  // 6\n' +
            'console.log(s.includes("ello"))  // true\n' +
            'console.log(s.startsWith("Hel")) // true\n' +
            'console.log(s.replace("World", "JS")) // Hello JS\n' +
            'console.log("  hi  ".trim())     // hi\n' +
            'console.log("5".padStart(3, "0"))// 005（补零）\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 回文判断（经典面试题）\n' +
            'function isPalindrome(s) {\n' +
            '  // 反转字符串后与原串比较\n' +
            '  const reversed = s.split("").reverse().join("")\n' +
            '  return s === reversed\n' +
            '}\n' +
            'console.log(isPalindrome("level"))  // true\n' +
            'console.log(isPalindrome("hello"))  // false\n' +
            'console.log(isPalindrome("abba"))   // true\n' +
            '// 进阶版：处理大小写和标点\n' +
            'function isPalindromePro(s) {\n' +
            '  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "")\n' +
            '  return clean === clean.split("").reverse().join("")\n' +
            '}\n' +
            'console.log(isPalindromePro("A man, a plan, a canal: Panama")) // true\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **`length` 是属性不是方法**：`s.length` 不加括号，写成 `s.length()` 会报错。\n' +
            '2. **`slice` 含头不含尾**：`s.slice(0, 5)` 取索引 0~4 共 5 个字符。负数索引从末尾算（`-1` 是最后一个字符）。\n' +
            '3. **`indexOf` 找不到返回 -1**：不要用 `if (s.indexOf("x"))` 判断是否存在，因为索引 0 也是 falsy。应使用 `includes` 或 `indexOf(...) !== -1`。\n' +
            '4. **`replace` 只替换第一个匹配**：要替换所有匹配需用 `replaceAll` 或正则 `/g` 标志：`s.replace(/old/g, "new")`。\n' +
            '5. **字符串不可变**：`s.toUpperCase()` 不会改变 s，而是返回新字符串，必须接收返回值。\n' +
            '6. **`+` 拼接的隐式转换**：`"a" + 1` 得 `"a1"`，但 `"2" - 1` 得 `1`（减法会转数字），这种不对称极易引发 bug。\n\n' +
            '## 实际应用\n\n' +
            '实现搜索过滤功能时，字符串方法是核心工具：先用 `trim()` 清理输入，' +
            '再用 `toLowerCase()` 把关键词和目标文本都转小写做大小写不敏感匹配，' +
            '最后用 `includes()` 判断是否包含。例如 `user.name.toLowerCase().includes(keyword)` ' +
            '是搜索框过滤列表的典型写法。模板字面量则用于动态生成 HTML 列表项。' +
            '`padStart` 常用于格式化时间（`String(mm).padStart(2, "0")`）和编号补零。\n\n' +
            '## 扩展知识\n\n' +
            '- **字符串与数组互转**：`str.split("")` 拆成字符数组，`arr.join("")` 合并回字符串。这是处理字符的经典套路。\n' +
            '- **正则表达式与字符串**：`match`、`matchAll`、`search` 方法配合正则可实现强大的文本提取与校验。\n' +
            '- **Unicode 与代理对**：含 emoji 的字符串 `length` 会大于视觉字符数，因为 emoji 占两个码元（代理对）。' +
            '  遍历应用 `for...of`（按码点）而非 `for` 按索引。\n' +
            '- **标签模板**：模板字面量可作为函数参数（标签函数），用于安全转义 HTML 或国际化，是模板字面量的高级用法。',
          examples: [
            {
              title: '模板字面量',
              code:
                'const name = "小明"\n' +
                'const age = 18\n' +
                'const intro = `我叫${name}，今年${age}岁`\n' +
                'console.log(intro)\n' +
                'const multi = `第一行\n' +
                '第二行`\n' +
                'console.log(multi)',
              explanation:
                '模板字面量用反引号包裹，${} 内可放任意表达式。它还原生支持多行字符串，' +
                '无需用 \\n 拼接，是拼接 HTML 模板和长文本的最佳选择。',
            },
            {
              title: '常用字符串方法',
              code:
                'const s = "Hello World"\n' +
                'console.log(s.length)          // 11\n' +
                'console.log(s.toUpperCase())   // HELLO WORLD\n' +
                'console.log(s.slice(0, 5))     // Hello\n' +
                'console.log(s.indexOf("World"))// 6\n' +
                'console.log(s.includes("ello"))// true\n' +
                'console.log(s.replace("World", "JS"))',
              explanation:
                'length 是属性不是方法（不加括号）。slice(0,5) 含头不含尾。' +
                'indexOf 找不到返回 -1，常用于判断是否存在。这些方法都返回新字符串，不改原串。',
            },
            {
              title: '回文判断（经典面试题）',
              code:
                'function isPalindrome(s) {\n' +
                '  // 反转字符串后与原串比较\n' +
                '  const reversed = s.split("").reverse().join("")\n' +
                '  return s === reversed\n' +
                '}\n' +
                'console.log(isPalindrome("level"))  // true\n' +
                'console.log(isPalindrome("hello"))  // false\n' +
                'console.log(isPalindrome("abba"))   // true',
              explanation:
                'split("") 拆成字符数组，reverse() 反转，join("") 重新拼成字符串。' +
                '这是字符串与数组互转的经典应用，也是面试高频题。' +
                '进阶版会处理大小写和标点：先 toLowerCase 再正则去除非字母数字。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用模板字面量拼接：变量 name 为 "小红"，输出 "你好, 小红"。',
              starter_code:
                'const name = "小红"\n' +
                'console.log(`你好, ${___}`)',
              expected_output: '你好, 小红',
              hints: [
                '在 ${} 中放入变量名 name',
                '把 ___ 替换为 name',
                '模板字面量用 ${} 嵌入变量',
              ],
            },
            {
              type: 'output-match',
              prompt: '把字符串 "hello" 转成大写并输出。',
              starter_code: 'console.log("hello".___())',
              expected_output: 'HELLO',
              hints: [
                '转大写的方法是 toUpperCase',
                '把 ___ 替换为 toUpperCase',
                '方法调用要加括号',
              ],
            },
            {
              type: 'output-match',
              prompt: '判断字符串 "racecar" 是否为回文，输出 true 或 false。',
              starter_code:
                'const s = "racecar"\n' +
                'const reversed = s.split("").reverse().join("")\n' +
                'console.log(s ___ reversed)',
              expected_output: 'true',
              hints: [
                '判断相等用 ===',
                '把 ___ 替换为 ===',
                'racecar 反转后仍是 racecar，故相等',
              ],
            },
          ],
          realWorldScenario:
            '实现搜索过滤功能时，字符串方法是核心工具：先用 trim() 清理输入，' +
            '再用 toLowerCase() 把关键词和目标文本都转小写做大小写不敏感匹配，' +
            '最后用 includes() 判断是否包含。例如 `user.name.toLowerCase().includes(keyword)` ' +
            '是搜索框过滤列表的典型写法。模板字面量则用于动态生成 HTML 列表项。',
        },
        {
          id: 'js-ch1-l4',
          title: '类型转换',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            'JS 是弱类型语言，会在运算时自动做隐式类型转换，这被称为"类型强制（coercion）"。' +
            '隐式转换规则复杂：`1 + "2"` 得到 `"12"`（字符串拼接），但 `"2" - 1` 得到 `1`（数字减法）。' +
            '这种不可预测性是 bug 的温床，因此推荐显式转换，让代码意图明确。\n\n' +
            '类型转换分为两类：**隐式转换**（由运算符触发，如 `+`、`==`、`if` 条件）和**显式转换**（开发者主动调用转换函数）。' +
            '理解转换规则是写出健壮 JS 代码的关键——许多看似"诡异"的 bug 都源于对隐式转换的误解。\n\n' +
            '## 语法说明\n\n' +
            '显式转换的三大工具：`Number(value)` 转数字、`String(value)` 转字符串、`Boolean(value)` 转布尔。' +
            '此外还有 `parseInt(str, radix)` 和 `parseFloat(str)` 用于解析字符串。' +
            '数字转字符串也可用 `n.toString()` 或模板字面量；转布尔可用 `!!x` 双重否定。\n\n' +
            '```js\n' +
            'Number(value)     // 转数字\n' +
            'String(value)     // 转字符串\n' +
            'Boolean(value)    // 转布尔\n' +
            'parseInt(str, 10) // 解析整数（基数建议传 10）\n' +
            'parseFloat(str)   // 解析浮点\n' +
            'value.toString()  // 对象转字符串方法\n' +
            '!!value           // 双重否定转布尔\n' +
            '```\n\n' +
            '## 转换规则表\n\n' +
            '### Number() 转换规则\n\n' +
            '| 输入 | 结果 | 说明 |\n' +
            '|------|------|------|\n' +
            '| `Number("42")` | 42 | 纯数字字符串 |\n' +
            '| `Number("3.14")` | 3.14 | 浮点字符串 |\n' +
            '| `Number("")` | 0 | 空字符串转为 0 |\n' +
            '| `Number("  ")` | 0 | 纯空白转为 0 |\n' +
            '| `Number("42px")` | NaN | 含非数字字符 |\n' +
            '| `Number("abc")` | NaN | 非数字字符串 |\n' +
            '| `Number(true)` | 1 | 布尔转数字 |\n' +
            '| `Number(false)` | 0 | 布尔转数字 |\n' +
            '| `Number(null)` | 0 | null 转 0 |\n' +
            '| `Number(undefined)` | NaN | undefined 转 NaN |\n' +
            '| `Number([])` | 0 | 空数组转 0 |\n' +
            '| `Number([5])` | 5 | 单元素数组取元素 |\n' +
            '| `Number({})` | NaN | 对象转 NaN |\n\n' +
            '### 假值（falsy）与真值（truthy）\n\n' +
            '| 值 | 布尔结果 | 备注 |\n' +
            '|----|----------|------|\n' +
            '| `false` | false | 假值 |\n' +
            '| `0` | false | 数字零（含 -0、0n） |\n' +
            '| `""` | false | 空字符串 |\n' +
            '| `null` | false | 空值 |\n' +
            '| `undefined` | false | 未定义 |\n' +
            '| `NaN` | false | 非数字 |\n' +
            '| `[]` | true | 空数组是真值（陷阱！） |\n' +
            '| `{}` | true | 空对象是真值 |\n' +
            '| `"0"` | true | 字符串零是真值 |\n' +
            '| `"false"` | true | 非空字符串都是真值 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 显式类型转换\n' +
            'console.log(Number("42"))      // 42\n' +
            'console.log(Number("3.14"))    // 3.14\n' +
            'console.log(Number(""))        // 0\n' +
            'console.log(Number("abc"))     // NaN\n' +
            'console.log(String(42))        // "42"\n' +
            'console.log(String(true))      // "true"\n' +
            'console.log(Boolean(0))        // false\n' +
            'console.log(Boolean("hello"))  // true\n' +
            'console.log(!!0)               // false（双重否定转布尔）\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 假值与真值的陷阱\n' +
            'console.log(Boolean([]))        // true（空数组是真值！）\n' +
            'console.log(Boolean({}))        // true（空对象是真值）\n' +
            'console.log(Boolean("0"))       // true（字符串零是真值）\n' +
            'console.log(Boolean("false"))   // true（非空字符串都是真值）\n' +
            '// 判断数组是否为空应用 length\n' +
            'const arr = []\n' +
            'if (arr.length === 0) console.log("空数组")  // 正确写法\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. parseInt 与 parseFloat\n' +
            'console.log(parseInt("42px", 10))   // 42（从开头解析到非数字为止）\n' +
            'console.log(parseInt("3.99", 10))   // 3（截断小数）\n' +
            'console.log(parseFloat("3.99元"))   // 3.99（保留小数）\n' +
            'console.log(parseFloat("3.14e2"))   // 314（支持科学计数法）\n' +
            '// NaN 的判断：不能用 === NaN\n' +
            'console.log(NaN === NaN)            // false（NaN 不等于自身！）\n' +
            'console.log(Number.isNaN(NaN))      // true（正确的判断方式）\n' +
            'console.log(Number.isNaN("abc"))    // false（Number.isNaN 严格判断）\n' +
            'console.log(isNaN("abc"))           // true（全局 isNaN 会先转数字，不推荐）\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **判断 NaN 必须用 `Number.isNaN()`**：`NaN === NaN` 为 false，全局 `isNaN()` 会先转数字再判断（`isNaN("abc")` 为 true），有误导性。\n' +
            '2. **空数组是真值**：`if ([])` 为真，判断数组空否应用 `arr.length === 0`。\n' +
            '3. **`Number("")` 得 0**：空字符串转数字是 0，而非 NaN，这在表单校验中容易出 bug。若空输入应视为无效，需单独判断。\n' +
            '4. **`parseInt` 始终传基数 10**：不传基数时旧浏览器可能按八进制解析（如 `"08"` 得 0），现代虽已修复但仍建议显式传 10。\n' +
            '5. **`+` 的隐式拼接**：表单值是字符串，`price1 + price2` 会拼接而非相加。计算前务必 `Number()` 转换。\n' +
            '6. **`==` 的隐式转换**：`null == undefined` 为 true，`0 == ""` 为 true，规则复杂，统一用 `===`。\n\n' +
            '## 实际应用\n\n' +
            '处理表单输入时，所有从 input 元素取到的 value 都是字符串。' +
            '计算金额时必须先 `Number(priceInput.value)` 转数字，否则 `"10" + "20"` 会变成 `"1020"`。' +
            '校验必填项常用 `if (!input.trim())` 利用空字符串的假值特性。' +
            '理解类型转换是写出正确前端逻辑的关键，能避免大量"看起来对却算错"的 bug。' +
            '在数据可视化中，从 API 拿到的数值可能是字符串，绘制图表前需统一转换。\n\n' +
            '## 扩展知识\n\n' +
            '- **`+` 一元运算符转数字**：`+"42"` 得 42，`+""` 得 0，`+"abc"` 得 NaN，是 `Number()` 的简写。\n' +
            '- **`~~` 双重按位取反转整数**：`~~3.7` 得 3，`~~"42"` 得 42，但仅适用 32 位整数范围，超出会出错。\n' +
            '- **ToPrimitive 抽象操作**：对象转基本类型时会调用 `valueOf` 和 `toString`，理解它能解释 `[] + []` 得 `""` 等怪异现象。\n' +
            '- **Symbol.toPrimitive**：自定义对象转基本类型的行为，是 ES6 引入的精细控制机制。',
          examples: [
            {
              title: '显式类型转换',
              code:
                'console.log(Number("42"))      // 42\n' +
                'console.log(Number("3.14"))    // 3.14\n' +
                'console.log(Number(""))        // 0\n' +
                'console.log(Number("abc"))     // NaN\n' +
                'console.log(String(42))        // "42"\n' +
                'console.log(Boolean(0))        // false\n' +
                'console.log(Boolean("hello"))  // true',
              explanation:
                'Number/String/Boolean 是显式转换的首选。注意空字符串转数字得 0，' +
                '非数字字符串得 NaN。Boolean 把假值转为 false，其余为 true。',
            },
            {
              title: '假值与真值',
              code:
                '// 6 个假值\n' +
                'console.log(Boolean(false))     // false\n' +
                'console.log(Boolean(0))         // false\n' +
                'console.log(Boolean(""))        // false\n' +
                'console.log(Boolean(null))      // false\n' +
                'console.log(Boolean(undefined)) // false\n' +
                'console.log(Boolean(NaN))       // false\n' +
                '// 常见"看似假其实真"的值\n' +
                'console.log(Boolean([]))        // true（空数组是真值！）\n' +
                'console.log(Boolean("0"))       // true（字符串零是真值）',
              explanation:
                '空数组、空对象、字符串 "0" 都是真值，这是常见陷阱。' +
                '判断数组是否为空应用 arr.length === 0，而非 if (arr)。' +
                '判断字符串数字用 Number(x) 后再比较。',
            },
            {
              title: 'parseInt 与 parseFloat',
              code:
                'console.log(parseInt("42px", 10))   // 42\n' +
                'console.log(parseInt("3.99", 10))   // 3（截断小数）\n' +
                'console.log(parseFloat("3.99元"))   // 3.99\n' +
                'console.log(Number.isNaN(NaN))      // true\n' +
                'console.log(NaN === NaN)            // false（NaN 不等于自身）',
              explanation:
                'parseInt 从开头解析到非数字为止，适合解析带单位的值如 "42px"。' +
                'parseFloat 保留小数。判断 NaN 必须用 Number.isNaN，因为 NaN !== NaN。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Number 把字符串 "100" 转成数字，输出结果。',
              starter_code: 'console.log(Number(___))',
              expected_output: '100',
              hints: [
                '把 ___ 替换为字符串 "100"',
                '字符串需要双引号',
                'Number("100") 得到数字 100',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Boolean 判断空字符串 "" 是否为真值，输出结果（应为 false）。',
              starter_code: 'console.log(Boolean(___))',
              expected_output: 'false',
              hints: [
                '把 ___ 替换为空字符串 ""',
                '空字符串是假值',
                'Boolean("") 返回 false',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 parseInt 把 "88px" 解析为数字（基数 10），输出结果。',
              starter_code: 'console.log(parseInt("88px", ___))',
              expected_output: '88',
              hints: [
                '基数参数传 10',
                '把 ___ 替换为 10',
                'parseInt 从开头解析数字部分',
              ],
            },
          ],
          realWorldScenario:
            '处理表单输入时，所有从 input 元素取到的 value 都是字符串。' +
            '计算金额时必须先 Number(priceInput.value) 转数字，否则 "10" + "20" 会变成 "1020"。' +
            '校验必填项常用 `if (!input.trim())` 利用空字符串的假值特性。' +
            '理解类型转换是写出正确前端逻辑的关键，能避免大量"看起来对却算错"的 bug。',
        },
      ],
    },
    // ================================================================
    // 第 2 章：控制流
    // ================================================================
    {
      id: 'js-ch2',
      title: '控制流',
      order: 1,
      lessons: [
        {
          id: 'js-ch2-l1',
          title: 'if / else',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '控制流（Control Flow）决定程序"按什么顺序执行"。`if` 语句是最基础的条件分支结构，' +
            '让程序能根据不同条件执行不同代码路径。没有控制流，程序只能从上到下线性执行，无法做出任何判断。\n\n' +
            '`if` 语句的完整语法：`if (条件) { ... } else if (条件2) { ... } else { ... }`。' +
            '条件会被隐式转为布尔值——因此理解假值（0、空串、null、undefined、NaN、false）至关重要。' +
            '花括号 `{}` 定义代码块，虽然单条语句可省略花括号，但业界规范要求始终使用，避免歧义和后续维护时的 bug。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 基本形式\n' +
            'if (条件) {\n' +
            '  // 条件为真时执行\n' +
            '} else if (条件2) {\n' +
            '  // 条件2 为真时执行\n' +
            '} else {\n' +
            '  // 以上都不满足时执行\n' +
            '}\n' +
            '```\n\n' +
            '`else if` 用于多分支链式判断，按顺序匹配第一个为真的分支，命中后不再检查后续条件。' +
            '当分支较多且判断的是同一个变量的多个值时，`switch` 往往比长串 if/else if 更清晰。' +
            '条件表达式应尽量简洁，复杂逻辑可提前用变量命名（"解释性变量"），提升可读性。\n\n' +
            '## 控制流语句对照表\n\n' +
            '| 语句 | 用途 | 特点 | 适用场景 |\n' +
            '|------|------|------|----------|\n' +
            '| if | 单条件判断 | 最基础 | 简单条件 |\n' +
            '| if/else | 二选一 | 两个分支 | 是/否逻辑 |\n' +
            '| else if | 多分支链 | 顺序匹配 | 范围判断、多条件 |\n' +
            '| switch | 离散值分支 | 严格相等匹配 | 枚举值、状态机 |\n' +
            '| 三元 `? :` | 表达式二选一 | 有返回值 | 简单赋值 |\n' +
            '| 逻辑短路 `\\|\\|` `&&` | 默认值/条件执行 | 返回操作数 | 简洁默认值 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 成绩等级判断（else if 链）\n' +
            'const score = 85\n' +
            'if (score >= 90) {\n' +
            '  console.log("优秀")\n' +
            '} else if (score >= 80) {\n' +
            '  console.log("良好")\n' +
            '} else if (score >= 60) {\n' +
            '  console.log("及格")\n' +
            '} else {\n' +
            '  console.log("不及格")\n' +
            '}\n' +
            '// 输出：良好（顺序很重要，必须从高到低）\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 利用假值简化判断\n' +
            'const name = ""\n' +
            'if (!name) {\n' +
            '  console.log("请输入姓名")\n' +
            '} else {\n' +
            '  console.log("你好, " + name)\n' +
            '}\n' +
            '// 等价的短路写法\n' +
            'const input = ""\n' +
            'const display = input || "默认名"\n' +
            'console.log(display)  // 默认名\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 三元运算符替代简单 if/else\n' +
            'const age = 20\n' +
            'const status = age >= 18 ? "成年" : "未成年"\n' +
            'console.log(status)  // 成年\n' +
            '// 嵌套三元（不推荐，可读性差）\n' +
            'const level = score >= 90 ? "A" : score >= 80 ? "B" : "C"\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **用 `=` 代替 `===`**：`if (x = 5)` 实际是赋值后判断 x（5 为真值），条件永远为真，这是经典错误。' +
            '   可通过 yoda 写法 `if (5 === x)` 规避，或启用 ESLint 的 `no-cond-assign` 规则。\n' +
            '2. **假值陷阱**：`if (count)` 在 count 为 0 时为假，可能不符合预期。判断数字是否存在应用 `if (count !== undefined)`，' +
            '   判断非空字符串用 `if (str !== "")`，判断数组用 `if (arr.length > 0)`。\n' +
            '3. **始终用花括号**：即使单条语句也写花括号，避免后续添加语句时遗漏花括号导致 bug。\n' +
            '4. **else if 的顺序**：范围判断必须从高到低或从低到高，否则会被前面的分支提前命中。\n' +
            '5. **避免嵌套过深**：超过 3 层嵌套的 if 应考虑用提前 return（卫语句）或策略模式重构。\n\n' +
            '## 实际应用\n\n' +
            '在权限控制中，if/else 是核心：`if (user.role === "admin")` 决定是否显示管理入口，' +
            '`else if (user.role === "vip")` 控制 VIP 功能。' +
            '特性开关（feature flag）也常写成 `if (config.enableNewUI) { ... }`。' +
            '表单校验中，卫语句模式（guard clause）让校验逻辑清晰：`if (!email) return "邮箱必填"`，避免深层嵌套。\n\n' +
            '## 扩展知识\n\n' +
            '- **卫语句（Guard Clause）**：用提前 return 替代嵌套 if，让"快乐路径"保持在主流程。' +
            '  例如 `if (!user) return; ...` 比 `if (user) { ... }` 更易读。\n' +
            '- **策略模式**：当 if/else 分支过多时，可用对象映射替代：`const strategies = { add: fn1, del: fn2 }; strategies[action]()`。\n' +
            '- **可选链 `?.`**：`if (user?.profile?.name)` 安全访问深层属性，避免 `if (user && user.profile && user.profile.name)` 的冗长写法。\n' +
            '- **Yoda 条件**：把常量放左边 `if (5 === x)`，历史上用于防 `=` 误写，现代 lint 已能检测，风格因人而异。',
          examples: [
            {
              title: '成绩等级判断',
              code:
                'const score = 85\n' +
                'if (score >= 90) {\n' +
                '  console.log("优秀")\n' +
                '} else if (score >= 80) {\n' +
                '  console.log("良好")\n' +
                '} else if (score >= 60) {\n' +
                '  console.log("及格")\n' +
                '} else {\n' +
                '  console.log("不及格")\n' +
                '}',
              explanation:
                'else if 链按顺序匹配，命中第一个满足条件的分支后跳出。' +
                '顺序很重要：必须从高到低判断，否则 85 也会先满足 >= 60。',
            },
            {
              title: '利用假值简化判断',
              code:
                'const name = ""\n' +
                'if (!name) {\n' +
                '  console.log("请输入姓名")\n' +
                '} else {\n' +
                '  console.log("你好, " + name)\n' +
                '}\n' +
                '// 等价的短路写法\n' +
                'const input = ""\n' +
                'const display = input || "默认名"\n' +
                'console.log(display)',
              explanation:
                '!name 利用空字符串的假值特性，等价于 name === "" || name === null || name === undefined。' +
                '这种写法简洁但要注意：name 为 0 也会被当作"未输入"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '判断变量 age（值为 20）：大于等于 18 输出 "成年"，否则输出 "未成年"。',
              starter_code:
                'const age = 20\n' +
                'if (___) {\n' +
                '  console.log("成年")\n' +
                '} else {\n' +
                '  console.log("未成年")\n' +
                '}',
              expected_output: '成年',
              hints: [
                '条件是 age >= 18',
                '把 ___ 替换为 age >= 18',
                '用 >= 表示大于等于',
              ],
            },
            {
              type: 'output-match',
              prompt: '判断变量 num（值为 -5）：大于 0 输出 "正"，小于 0 输出 "负"，否则输出 "零"。',
              starter_code:
                'const num = -5\n' +
                'if (num > 0) {\n' +
                '  console.log("正")\n' +
                '} else if (num < 0) {\n' +
                '  console.log(___)\n' +
                '} else {\n' +
                '  console.log("零")\n' +
                '}',
              expected_output: '负',
              hints: [
                '小于 0 时输出 "负"',
                '把 ___ 替换为 "负"',
                '注意字符串要双引号',
              ],
            },
          ],
          realWorldScenario:
            '在权限控制中，if/else 是核心：`if (user.role === "admin")` 决定是否显示管理入口，' +
            '`else if (user.role === "vip")` 控制 VIP 功能。' +
            '特性开关（feature flag）也常写成 `if (config.enableNewUI) { ... }`。' +
            '合理的分支结构让应用能根据用户身份和环境动态呈现不同行为。',
        },
        {
          id: 'js-ch2-l2',
          title: 'switch',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '`switch` 语句适合对一个表达式的多个离散值进行分支判断。语法：' +
            '`switch (expr) { case 值1: ...; break; case 值2: ...; break; default: ... }`。' +
            '它比长串 if/else if 更清晰，常用于处理动作类型、状态机、菜单选项等场景。' +
            '当判断条件是"变量等于某个具体值"而非范围时，switch 是首选。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            'switch (表达式) {\n' +
            '  case 值1:\n' +
            '    // 匹配值1时执行\n' +
            '    break\n' +
            '  case 值2:\n' +
            '  case 值3:\n' +
            '    // 值2和值3共用此段（刻意贯穿）\n' +
            '    break\n' +
            '  default:\n' +
            '    // 所有 case 都不匹配时执行\n' +
            '}\n' +
            '```\n\n' +
            '`case` 匹配使用严格相等（===），不会做类型转换——`switch ("1")` 不会匹配 `case 1`。' +
            '`break` 跳出 switch；若忘记 break，会"贯穿（fall-through）"继续执行下一个 case 的代码，' +
            '这是 switch 最常见的 bug 来源。多个 case 共用同一段代码时刻意省略 break 是合法的，' +
            '但应加注释说明是有意为之。\n\n' +
            '## switch 各部分说明\n\n' +
            '| 组成部分 | 说明 | 是否必需 |\n' +
            '|----------|------|----------|\n' +
            '| switch (expr) | 要判断的表达式 | 是 |\n' +
            '| case 值: | 与 expr 严格相等比较的分支标签 | 至少一个 |\n' +
            '| break | 跳出 switch，防止贯穿 | 否（但通常需要） |\n' +
            '| default | 所有 case 不匹配时的兜底分支 | 否（推荐写） |\n' +
            '| return | 在函数内可直接 return 替代 break | 否 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 星期判断\n' +
            'const day = 3\n' +
            'switch (day) {\n' +
            '  case 1: console.log("星期一"); break\n' +
            '  case 2: console.log("星期二"); break\n' +
            '  case 3: console.log("星期三"); break\n' +
            '  case 4: console.log("星期四"); break\n' +
            '  case 5: console.log("星期五"); break\n' +
            '  default: console.log("周末")\n' +
            '}\n' +
            '// 输出：星期三\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 刻意贯穿：多个 case 共用代码\n' +
            'const month = 7\n' +
            'switch (month) {\n' +
            '  case 3: case 4: case 5:\n' +
            '    console.log("春季"); break\n' +
            '  case 6: case 7: case 8:\n' +
            '    console.log("夏季"); break  // month=7 命中夏季\n' +
            '  case 9: case 10: case 11:\n' +
            '    console.log("秋季"); break\n' +
            '  default:\n' +
            '    console.log("冬季")\n' +
            '}\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. Redux reducer 中的经典应用\n' +
            'function counter(state = 0, action) {\n' +
            '  switch (action.type) {\n' +
            '    case "INCREMENT":\n' +
            '      return state + 1\n' +
            '    case "DECREMENT":\n' +
            '      return state - 1\n' +
            '    case "RESET":\n' +
            '      return 0\n' +
            '    default:\n' +
            '      return state  // 未知 action 返回原 state\n' +
            '  }\n' +
            '}\n' +
            'console.log(counter(5, { type: "INCREMENT" }))  // 6\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **忘记 break 导致贯穿**：这是 switch 最常见的 bug。每个 case 后务必写 break，除非刻意贯穿。\n' +
            '2. **case 用严格相等**：`switch ("1")` 不匹配 `case 1`，类型不同会直接跳到 default。\n' +
            '3. **default 通常放最后**：虽然语法上 default 可放任意位置，但放最后最符合阅读习惯。\n' +
            '4. **在函数中可用 return 替代 break**：return 直接退出函数，无需额外 break。\n' +
            '5. **switch 比较的是表达式值**：case 后必须是常量值，不能写 `case x > 5:`（这不是离散值判断）。\n\n' +
            '## 实际应用\n\n' +
            '在 Redux 等 state 管理库中，reducer 函数几乎总是用 switch 处理不同的 action type，' +
            '这是 switch 最经典的工程应用。理解 switch 的贯穿机制对阅读这类代码至关重要。' +
            '路由匹配、消息类型分发、游戏状态机等场景也广泛使用 switch。' +
            '现代代码中，有时用对象映射（lookup table）替代 switch，例如 `{ add: fn1, del: fn2 }[action]()`，' +
            '在分支极多时更简洁。但 switch 的可读性在中等数量分支时仍最佳，且性能稳定。\n\n' +
            '## 扩展知识\n\n' +
            '- **对象映射替代 switch**：`const handlers = { add: (a,b)=>a+b, sub: (a,b)=>a-b }; handlers[op](x, y)`，' +
            '  分支多时比 switch 更易扩展，新增分支只需加一个键值对。\n' +
            '- **Map 替代 switch**：当键不是字符串时，可用 Map 存储处理函数。\n' +
            '- **switch true 模式**：`switch (true) { case x > 90: ...; case x > 60: ... }` 可用于范围判断，' +
            '  但可读性不如 if/else if，属于非主流写法。\n' +
            '- **fall-through 的合法用途**：合并相同处理的 case 是贯穿的唯一合法场景，应注释说明"刻意贯穿"。',
          examples: [
            {
              title: '星期判断',
              code:
                'const day = 3\n' +
                'switch (day) {\n' +
                '  case 1: console.log("星期一"); break\n' +
                '  case 2: console.log("星期二"); break\n' +
                '  case 3: console.log("星期三"); break\n' +
                '  case 4: console.log("星期四"); break\n' +
                '  case 5: console.log("星期五"); break\n' +
                '  default: console.log("周末")\n' +
                '}',
              explanation:
                'switch 根据 day 的值跳到匹配的 case，break 防止贯穿。' +
                'default 处理所有未列出的值。这里 day=3 输出"星期三"。',
            },
            {
              title: 'Redux 风格的 reducer',
              code:
                'function reducer(state, action) {\n' +
                '  switch (action.type) {\n' +
                '    case "ADD":\n' +
                '      return state + 1\n' +
                '    case "RESET":\n' +
                '      return 0\n' +
                '    default:\n' +
                '      return state\n' +
                '  }\n' +
                '}\n' +
                'console.log(reducer(5, { type: "ADD" }))    // 6\n' +
                'console.log(reducer(5, { type: "RESET" }))  // 0\n' +
                'console.log(reducer(5, { type: "OTHER" }))  // 5',
              explanation:
                '这是状态管理库中最经典的 switch 用法：根据 action.type 决定如何更新状态。' +
                'default 返回原 state 是 reducer 的必备兜底，确保未知 action 不破坏状态。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: 'switch 判断变量 color（值为 "red"）：case "red" 输出 "红色"，default 输出 "其他"。',
              starter_code:
                'const color = "red"\n' +
                'switch (color) {\n' +
                '  case "red":\n' +
                '    console.log(___)\n' +
                '    break\n' +
                '  default:\n' +
                '    console.log("其他")\n' +
                '}',
              expected_output: '红色',
              hints: [
                '在 case "red" 中输出 "红色"',
                '把 ___ 替换为 "红色"',
                '记得 break 防止贯穿',
              ],
            },
            {
              type: 'output-match',
              prompt: 'switch 判断变量 op（值为 "x"）：case "x" 输出 3*4 的结果 12，default 输出 0。',
              starter_code:
                'const op = "x"\n' +
                'switch (op) {\n' +
                '  case "x":\n' +
                '    console.log(3 * 4)\n' +
                '    break\n' +
                '  default:\n' +
                '    console.log(___)\n' +
                '}',
              expected_output: '12',
              hints: [
                'default 分支输出 0',
                '把 ___ 替换为 0',
                '本题 case "x" 命中，输出 12',
              ],
            },
          ],
          realWorldScenario:
            '在 Redux/Vuex 等状态管理中，reducer 通过 switch action.type 处理不同动作：' +
            'ADD_TODO、TOGGLE_TODO、DELETE_TODO 各对应一个 case。' +
            '这种"一个函数处理所有动作"的模式让状态变化可追踪、可测试。' +
            'default 返回原状态确保未知动作不会污染状态树，是函数式编程的精髓应用。',
        },
        {
          id: 'js-ch2-l3',
          title: 'for 循环',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '`for` 循环是已知次数迭代的首选：`for (初始化; 条件; 更新) { 循环体 }`。' +
            '三部分用分号分隔：初始化执行一次，条件每次迭代前求值，更新每次迭代后执行。' +
            '`for (let i = 0; i < n; i++)` 是最常见的计数循环模式。用 let 声明 i 保证块作用域，' +
            '避免 var 的函数作用域导致的闭包陷阱。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            'for (初始化; 循环条件; 更新语句) {\n' +
            '  // 循环体\n' +
            '}\n' +
            '\n' +
            '// 执行顺序：初始化 → 条件? → 循环体 → 更新 → 条件? → 循环体 → 更新 → ...\n' +
            '```\n\n' +
            '三段式均可省略（但分号要保留），如 `for (;;) {}` 是死循环。' +
            '初始化和更新可以是多个表达式（逗号分隔）：`for (let i=0, j=10; i<j; i++, j--)`。\n\n' +
            '## 循环类型对照表\n\n' +
            '| 循环形式 | 语法 | 适用场景 | 特点 |\n' +
            '|----------|------|----------|------|\n' +
            '| for | `for(let i=0;i<n;i++)` | 已知次数迭代 | 经典计数循环 |\n' +
            '| for...of | `for(const x of arr)` | 遍历可迭代对象 | 取值，ES6 |\n' +
            '| for...in | `for(const k in obj)` | 遍历对象键 | 取键名（含原型） |\n' +
            '| forEach | `arr.forEach(fn)` | 数组遍历 | 无 break/return |\n' +
            '| while | `while(条件)` | 未知次数迭代 | 先判后做 |\n' +
            '| do...while | `do{}while(条件)` | 至少执行一次 | 先做后判 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 求和循环\n' +
            'let sum = 0\n' +
            'for (let i = 1; i <= 10; i++) {\n' +
            '  sum += i\n' +
            '}\n' +
            'console.log(sum)  // 55\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. FizzBuzz（经典面试题）\n' +
            'for (let i = 1; i <= 15; i++) {\n' +
            '  if (i % 15 === 0) console.log("FizzBuzz")\n' +
            '  else if (i % 3 === 0) console.log("Fizz")\n' +
            '  else if (i % 5 === 0) console.log("Buzz")\n' +
            '  else console.log(i)\n' +
            '}\n' +
            '// 必须先判断 15，否则 15 会被 3 的分支提前命中\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 嵌套循环：九九乘法表片段\n' +
            'for (let i = 1; i <= 3; i++) {\n' +
            '  for (let j = 1; j <= i; j++) {\n' +
            '    console.log(`${j}x${i}=${i * j}`)\n' +
            '  }\n' +
            '}\n' +
            '// 输出：1x1=1 / 1x2=2 2x2=4 / 1x3=3 2x3=6 3x3=9\n' +
            '```\n\n' +
            '```js\n' +
            '// 4. for...of 遍历数组（现代写法）\n' +
            'const fruits = ["苹果", "香蕉", "橘子"]\n' +
            'for (const fruit of fruits) {\n' +
            '  console.log(fruit)\n' +
            '}\n' +
            '// for...of 取的是值，不需要索引时比传统 for 更简洁\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **用 let 而非 var 声明循环变量**：var 是函数作用域，在闭包中会导致"所有迭代共享同一个 i"的经典 bug。let 是块作用域，每次迭代有独立副本。\n' +
            '2. **嵌套循环性能**：嵌套层数过深会显著降低可读性（"箭头型代码"），时间复杂度是 O(n²)，大规模数据要注意性能。\n' +
            '3. **缓存数组长度**：`for (let i=0, len=arr.length; i<len; i++)` 在老旧引擎上有微小优化，现代 JS 引擎已自动优化。\n' +
            '4. **for...in 遍历对象**：`for...in` 遍历的是键名（包括原型链上的可枚举属性），遍历数组不推荐用它（顺序无保证且会遍历自定义属性）。\n' +
            '5. **forEach 不能 break**：`forEach` 无法用 break 跳出或 continue 跳过，需要提前退出时用 for 或 for...of。\n\n' +
            '## 实际应用\n\n' +
            '渲染列表是前端最常见场景：`for (let i = 0; i < items.length; i++)` 遍历数据生成 DOM。' +
            '虽然现代框架用 map 替代手写循环，但底层逻辑一致。' +
            'FizzBuzz 这类题训练的是"用循环 + 条件处理批量数据"的思维，' +
            '这种思维在批量处理用户列表、生成分页、渲染表格时无处不在。' +
            '循环与数组方法（map/filter/forEach）的选择：需要 return 新数组用 map，' +
            '需要副作用（如打印、修改外部变量）用 for 或 forEach。\n\n' +
            '## 扩展知识\n\n' +
            '- **`for...of` 与可迭代协议**：`for...of` 可遍历任何实现 `Symbol.iterator` 的对象（数组、字符串、Map、Set、NodeList 等）。\n' +
            '- **`for...in` 的陷阱**：会遍历原型链上的可枚举属性，应配合 `hasOwnProperty` 或用 `Object.keys()` 替代。\n' +
            '- **性能对比**：大规模遍历中，传统 `for` 循环通常最快，`for...of` 次之，`forEach` 因函数调用开销略慢（差距很小）。\n' +
            '- **生成器与 `for...of`**：生成器函数 `function*` 产生的迭代器可用 `for...of` 消费，实现惰性求值。',
          examples: [
            {
              title: '求和循环',
              code:
                'let sum = 0\n' +
                'for (let i = 1; i <= 10; i++) {\n' +
                '  sum += i\n' +
                '}\n' +
                'console.log(sum)  // 55',
              explanation:
                'i 从 1 到 10，每次累加到 sum。let i 保证块作用域。' +
                '这是最基础的计数循环，理解三段式（初始化、条件、更新）是掌握循环的关键。',
            },
            {
              title: 'FizzBuzz（经典面试题）',
              code:
                'for (let i = 1; i <= 15; i++) {\n' +
                '  if (i % 15 === 0) console.log("FizzBuzz")\n' +
                '  else if (i % 3 === 0) console.log("Fizz")\n' +
                '  else if (i % 5 === 0) console.log("Buzz")\n' +
                '  else console.log(i)\n' +
                '}',
              explanation:
                '必须先判断 15（即同时被 3 和 5 整除），否则 15 会被 3 的分支提前命中输出 "Fizz"。' +
                '这道题考察的是条件优先级和取余运算的理解，是面试高频题。',
            },
            {
              title: '嵌套循环：九九乘法表片段',
              code:
                'for (let i = 1; i <= 3; i++) {\n' +
                '  for (let j = 1; j <= i; j++) {\n' +
                '    console.log(`${j}x${i}=${i * j}`)\n' +
                '  }\n' +
                '}',
              explanation:
                '外层控制行，内层控制列。i=1 时内层跑 1 次，i=2 时跑 2 次，形成三角形。' +
                '嵌套循环时间复杂度是 O(n²)，大规模数据时要注意性能。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 for 循环计算 1 到 100 的和，输出结果。',
              starter_code:
                'let sum = 0\n' +
                'for (let i = 1; i <= ___; i++) {\n' +
                '  sum += i\n' +
                '}\n' +
                'console.log(sum)',
              expected_output: '5050',
              hints: [
                '循环到 100，把 ___ 替换为 100',
                '条件是 i <= 100',
                '1 加到 100 的和是 5050',
              ],
            },
            {
              type: 'output-match',
              prompt: 'FizzBuzz：i 从 1 到 5，能被 3 整除输出 "Fizz"，能被 5 整除输出 "Buzz"，' +
                '能被 15 整除输出 "FizzBuzz"，否则输出 i。每行一个，共 5 行。',
              starter_code:
                'for (let i = 1; i <= 5; i++) {\n' +
                '  if (i % 15 === 0) console.log("FizzBuzz")\n' +
                '  else if (i % 3 === 0) console.log("Fizz")\n' +
                '  else if (i % 5 === 0) console.log("Buzz")\n' +
                '  else console.log(___)\n' +
                '}',
              expected_output: '1\n2\nFizz\n4\nBuzz',
              hints: [
                '否则分支输出数字 i 本身',
                '把 ___ 替换为 i',
                '1 输出 1，2 输出 2，3 输出 Fizz，4 输出 4，5 输出 Buzz',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 for 循环输出 1 到 5 中所有的偶数，每行一个。',
              starter_code:
                'for (let i = 1; i <= 5; i++) {\n' +
                '  if (i % 2 === 0) {\n' +
                '    console.log(___)\n' +
                '  }\n' +
                '}',
              expected_output: '2\n4',
              hints: [
                '输出当前的偶数 i',
                '把 ___ 替换为 i',
                '1 到 5 的偶数是 2 和 4',
              ],
            },
          ],
          realWorldScenario:
            '渲染列表是前端最常见场景：`for (let i = 0; i < items.length; i++)` 遍历数据生成 DOM。' +
            '虽然现代框架用 map 替代手写循环，但底层逻辑一致。' +
            'FizzBuzz 这类题训练的是"用循环 + 条件处理批量数据"的思维，' +
            '这种思维在批量处理用户列表、生成分页、渲染表格时无处不在。',
        },
        {
          id: 'js-ch2-l4',
          title: 'while 与 break/continue',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`while (条件) { 循环体 }` 在条件为真时重复执行，适合迭代次数不确定的场景：' +
            '如"直到找到目标"、"反复重试直到成功"。`do { 循环体 } while (条件)` 至少执行一次，' +
            '适合"先做一次再判断"的逻辑（如菜单交互、输入校验）。两者的区别在于判断时机：while 先判后做，do-while 先做后判。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            'while (条件) {\n' +
            '  // 条件为真时重复执行\n' +
            '}\n' +
            '\n' +
            'do {\n' +
            '  // 至少执行一次\n' +
            '} while (条件)\n' +
            '```\n\n' +
            '`break` 立即跳出当前循环，常用于"找到即停"的搜索场景。' +
            '`continue` 跳过本次迭代剩余部分，直接进入下一次，常用于过滤某些不需要处理的元素。' +
            '在嵌套循环中，break 只跳出最内层；若需跳出外层，可用带标签的 break（`label: for...`）。\n\n' +
            '## 循环控制语句表\n\n' +
            '| 语句 | 作用 | 说明 |\n' +
            '|------|------|------|\n' +
            '| break | 跳出当前循环 | 不再执行后续迭代 |\n' +
            '| continue | 跳过本次迭代 | 直接进入下一次迭代 |\n' +
            '| return | 退出函数 | 在函数中等价于 break + 返回值 |\n' +
            '| label break | 跳出指定标签的循环 | `outer: for...` + `break outer` |\n' +
            '| throw | 抛出异常 | 也可中断循环，但语义不同 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. while 倒计时\n' +
            'let n = 3\n' +
            'while (n > 0) {\n' +
            '  console.log(n)\n' +
            '  n--\n' +
            '}\n' +
            'console.log("发射!")\n' +
            '// 输出：3 2 1 发射!\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. break 找到即停\n' +
            'const nums = [3, 7, 2, 8, 5]\n' +
            'let found = -1\n' +
            'for (let i = 0; i < nums.length; i++) {\n' +
            '  if (nums[i] > 5) {\n' +
            '    found = nums[i]\n' +
            '    break  // 找到第一个就停\n' +
            '  }\n' +
            '}\n' +
            'console.log(found)  // 7\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. continue 跳过偶数\n' +
            'for (let i = 1; i <= 6; i++) {\n' +
            '  if (i % 2 === 0) continue  // 跳过偶数\n' +
            '  console.log(i)  // 输出：1 3 5\n' +
            '}\n' +
            '```\n\n' +
            '```js\n' +
            '// 4. 斐波那契数列（经典面试题，迭代版）\n' +
            'function fib(n) {\n' +
            '  if (n < 2) return n\n' +
            '  let a = 0, b = 1\n' +
            '  let i = 2\n' +
            '  while (i < n) {\n' +
            '    const next = a + b\n' +
            '    a = b\n' +
            '    b = next\n' +
            '    i++\n' +
            '  }\n' +
            '  return b\n' +
            '}\n' +
            'console.log(fib(10))  // 55\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **死循环风险**：while 循环最大的风险是死循环——若条件永远为真且循环体内不改变条件，程序会卡死。' +
            '   必须确保循环体内有让条件最终为假的逻辑。本平台的 JS 运行器有 5 秒超时保护，' +
            '   但在生产环境死循环会冻结整个页面，是严重的线上事故。\n' +
            '2. **do-while 至少执行一次**：即使条件一开始就为假，do-while 也会执行一次循环体，这与 while 不同。\n' +
            '3. **break 只跳出最内层**：嵌套循环中 break 只影响最内层循环，跳出外层需用带标签的 break。\n' +
            '4. **continue 在 while 中要小心**：`continue` 会跳到条件判断，若更新语句在 continue 之后会被跳过，可能导致死循环。\n' +
            '5. **实际开发中推荐用函数 + return 替代标签 break**：把循环封装成函数，用 return 提前退出，可读性更好。\n\n' +
            '## 实际应用\n\n' +
            '轮询和重试是 while 的典型工程场景：例如"每隔一段时间请求接口，直到拿到结果或超时"。' +
            '重试逻辑常写作 `while (retries-- > 0 && !success) { try { ... } catch { ... } }`。' +
            'break 用于"找到目标就停止搜索"，continue 用于"跳过不符合条件的记录"，' +
            '这些控制在数据处理管道中无处不在。while 的"按条件循环"特性' +
            '让它在处理"未知长度"数据（如链表遍历、流式读取）时比 for 更自然。\n\n' +
            '## 扩展知识\n\n' +
            '- **带标签的 break**：`outer: for(...) { for(...) { break outer } }` 可跳出多层循环，但可读性争议大。\n' +
            '- **迭代器与 while**：手动调用 `iterator.next()` 配合 while 可精细控制迭代过程，是生成器消费的底层方式。\n' +
            '- **指数退避重试**：用 while 实现重试时，延迟时间应指数增长（`delay *= 2`），避免压垮服务端。\n' +
            '- **while(true) + break 模式**：`while(true) { if (条件) break }` 是无限循环 + 条件退出的常见模式，等价于 do-while 但更灵活。',
          examples: [
            {
              title: 'while 倒计时',
              code:
                'let n = 3\n' +
                'while (n > 0) {\n' +
                '  console.log(n)\n' +
                '  n--\n' +
                '}\n' +
                'console.log("发射!")',
              explanation:
                '每次循环 n 减 1，直到 n 为 0 时条件 n > 0 为假退出。' +
                '注意 n-- 必须在循环体内，否则会死循环。',
            },
            {
              title: 'break 找到即停',
              code:
                'const nums = [3, 7, 2, 8, 5]\n' +
                'let found = -1\n' +
                'for (let i = 0; i < nums.length; i++) {\n' +
                '  if (nums[i] > 5) {\n' +
                '    found = nums[i]\n' +
                '    break  // 找到第一个就停\n' +
                '  }\n' +
                '}\n' +
                'console.log(found)  // 7',
              explanation:
                'break 让循环在找到第一个大于 5 的元素后立即停止，避免不必要的遍历。' +
                '这是"短路搜索"的核心，在大数据集上能显著提升性能。',
            },
            {
              title: '斐波那契数列（经典面试题）',
              code:
                'function fib(n) {\n' +
                '  if (n < 2) return n\n' +
                '  let a = 0, b = 1\n' +
                '  let i = 2\n' +
                '  while (i < n) {\n' +
                '    const next = a + b\n' +
                '    a = b\n' +
                '    b = next\n' +
                '    i++\n' +
                '  }\n' +
                '  return b\n' +
                '}\n' +
                'console.log(fib(10))  // 55',
              explanation:
                '用 while 迭代计算斐波那契，避免递归的栈溢出风险。a、b 滚动保存前两项。' +
                '迭代版时间 O(n)、空间 O(1)，是面试中最优的写法。fib(0)=0, fib(1)=1, fib(10)=55。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 while 循环：n 从 1 开始，每次乘 2，直到 n 大于 8 时停止，' +
                '输出循环结束时 n 的值（应为 16）。',
              starter_code:
                'let n = 1\n' +
                'while (n <= 8) {\n' +
                '  n = n * ___\n' +
                '}\n' +
                'console.log(n)',
              expected_output: '16',
              hints: [
                '每次乘 2，把 ___ 替换为 2',
                'n 依次为 1, 2, 4, 8, 16；当 n=8 时仍满足 <=8，再乘 2 得 16',
                '循环在 n=16 时条件 16<=8 为假退出',
              ],
            },
            {
              type: 'output-match',
              prompt: '在数组 [1, 2, 3, 4, 5] 中用 for + break 找到第一个大于 3 的元素，输出它。',
              starter_code:
                'const arr = [1, 2, 3, 4, 5]\n' +
                'let result = null\n' +
                'for (let i = 0; i < arr.length; i++) {\n' +
                '  if (arr[i] > 3) {\n' +
                '    result = arr[i]\n' +
                '___\n' +
                '  }\n' +
                '}\n' +
                'console.log(result)',
              expected_output: '4',
              hints: [
                '找到后用 break 跳出循环',
                '把 ___ 替换为 break',
                '第一个大于 3 的元素是 4',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 while 计算斐波那契数列第 7 项（fib(0)=0, fib(1)=1），' +
                '参考示例的迭代写法，输出 fib(7) 的结果。',
              starter_code:
                'function fib(n) {\n' +
                '  if (n < 2) return n\n' +
                '  let a = 0, b = 1\n' +
                '  let i = 2\n' +
                '  while (i < n) {\n' +
                '    const next = a + b\n' +
                '    a = b\n' +
                '    b = ___\n' +
                '    i++\n' +
                '  }\n' +
                '  return b\n' +
                '}\n' +
                'console.log(fib(7))',
              expected_output: '13',
              hints: [
                'b 应更新为新算出的 next',
                '把 ___ 替换为 next',
                'fib 序列：0,1,1,2,3,5,8,13，fib(7)=13',
              ],
            },
          ],
          realWorldScenario:
            '轮询和重试是 while 的典型工程场景：例如"每隔一段时间请求接口，直到拿到结果或超时"。' +
            '重试逻辑常写作 `while (retries-- > 0 && !success) { try { ... } catch { ... } }`。' +
            'break 用于"找到目标就停止搜索"，continue 用于"跳过不符合条件的记录"，' +
            '这些控制在数据处理管道中无处不在。',
        },
      ],
    },
    // ================================================================
    // 第 3 章：函数
    // ================================================================
    {
      id: 'js-ch3',
      title: '函数',
      order: 2,
      lessons: [
        {
          id: 'js-ch3-l1',
          title: '函数声明与表达式',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '函数是 JS 中"一等公民"（first-class citizen）——可以作为变量赋值、作为参数传递、作为返回值返回。' +
            '这种特性是 JS 高级编程（回调、高阶函数、闭包、函数式编程）的基石。' +
            '理解函数是一等公民是掌握 JS 高级特性的前提。\n\n' +
            '声明函数有两种主要形式：函数声明 `function fn() {}` 和函数表达式 `const fn = function() {}`。' +
            '两者的核心区别在于"提升（hoisting）"：函数声明在编译阶段整体提升，可在定义前调用；' +
            '函数表达式只提升变量声明，赋值留在原位，调用必须在赋值之后。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 函数声明（提升）\n' +
            'function 函数名(参数1, 参数2) {\n' +
            '  // 函数体\n' +
            '  return 返回值\n' +
            '}\n' +
            '\n' +
            '// 2. 函数表达式（不提升赋值）\n' +
            'const 函数名 = function(参数) {\n' +
            '  return 返回值\n' +
            '}\n' +
            '\n' +
            '// 3. 命名函数表达式（便于调试栈追踪）\n' +
            'const fn = function myFn() { /* myFn 仅函数内可见 */ }\n' +
            '```\n\n' +
            '函数通过 `return` 返回值；若无 return 或 return 后无值，返回 undefined。' +
            '函数参数在 JS 中是灵活的：传多了忽略多余的，传少了未传的为 undefined。' +
            '这既是便利也需谨慎——应做参数校验或用默认值。函数通过 `fn(args)` 调用，' +
            '返回值可直接用于表达式：`const r = fn(1) + fn(2)`。\n\n' +
            '## 函数定义方式对照表\n\n' +
            '| 方式 | 语法 | 是否提升 | 适用场景 |\n' +
            '|------|------|----------|----------|\n' +
            '| 函数声明 | `function fn(){}` | 整体提升 | 工具函数、模块方法 |\n' +
            '| 函数表达式 | `const fn = function(){}` | 仅变量提升 | 回调、按顺序定义 |\n' +
            '| 箭头函数 | `const fn = () => {}` | 仅变量提升 | 简短回调、继承 this |\n' +
            '| 方法简写 | `{ method(){} }` | 随对象 | 对象/类方法 |\n' +
            '| IIFE | `(function(){})()` | 立即执行 | 隔离作用域（旧） |\n' +
            '| new Function | `new Function("a","return a")` | 运行时构造 | 极少用（eval 类） |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 函数声明 vs 表达式（提升差异）\n' +
            'console.log(add(3, 4))  // 7（函数声明提升，可定义前调用）\n' +
            'function add(a, b) {\n' +
            '  return a + b\n' +
            '}\n' +
            '\n' +
            '// console.log(multiply(3, 4))  // 报错：赋值前不能调用\n' +
            'const multiply = function (a, b) {\n' +
            '  return a * b\n' +
            '}\n' +
            'console.log(multiply(3, 4))  // 12\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 函数作为参数（回调 / 高阶函数）\n' +
            'function apply(arr, fn) {\n' +
            '  const result = []\n' +
            '  for (let i = 0; i < arr.length; i++) {\n' +
            '    result.push(fn(arr[i]))\n' +
            '  }\n' +
            '  return result\n' +
            '}\n' +
            'const doubled = apply([1, 2, 3], function (x) { return x * 2 })\n' +
            'console.log(doubled)  // [2,4,6]\n' +
            '// 这就是 map 的本质：接收函数，对每个元素应用\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 函数作为返回值（工厂函数）\n' +
            'function multiplier(factor) {\n' +
            '  return function (n) {\n' +
            '    return n * factor\n' +
            '  }\n' +
            '}\n' +
            'const double = multiplier(2)\n' +
            'const triple = multiplier(3)\n' +
            'console.log(double(5), triple(5))  // 10 15\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **函数声明提升让代码顺序更灵活，但也可能让执行流难以追踪**：现代风格指南（如 Airbnb）建议优先用函数表达式 + const，让"定义即赋值"的顺序明确，避免提升带来的困惑。\n' +
            '2. **参数灵活性是双刃剑**：传少了为 undefined，传多了被忽略。生产代码应做参数校验或用默认值，避免 undefined 引发的运行时错误。\n' +
            '3. **return 后的值**：`return;` 返回 undefined，`return value;` 返回 value。注意 return 后换行会被 ASI 自动加分号导致返回 undefined。\n' +
            '4. **函数声明 vs 表达式的选择**：工具函数、独立模块用声明；回调、按序定义用表达式。两种写法都应熟练。\n' +
            '5. **命名函数表达式便于调试**：`const fn = function namedFn(){}` 中 namedFn 仅函数内部可见，但调用栈会显示这个名字，利于排错。\n\n' +
            '## 实际应用\n\n' +
            '在前端工具库中，函数声明用于定义工具方法（如 formatDate、formatCurrency）。' +
            '回调函数是事件处理的基础：addEventListener 第二参数就是一个函数。' +
            '高阶函数（接收函数作为参数）让代码高度复用——例如封装一个通用的"重试"函数，' +
            '接收任意异步操作和重试次数，体现了函数式编程的强大表达力。' +
            '几乎所有异步编程和函数式编程都建立在"函数作为值传递"这一基础之上。\n\n' +
            '## 扩展知识\n\n' +
            '- **IIFE（立即调用函数表达式）**：`(function(){ ... })()` 在 ES6 模块前是隔离作用域的主要手段，现在已被块作用域和模块取代。\n' +
            '- **高阶函数**：接收函数作为参数或返回函数的函数，如 map、filter、reduce、compose、curry。\n' +
            '- **纯函数**：相同输入永远产生相同输出且无副作用，是函数式编程和 React（reducer）的核心概念。\n' +
            '- **函数的 `name` 属性**：`fn.name` 返回函数名，命名函数表达式和推断赋值的函数都有 name，利于调试。',
          examples: [
            {
              title: '函数声明 vs 表达式',
              code:
                '// 函数声明：提升，可在定义前调用\n' +
                'console.log(add(3, 4))  // 7\n' +
                'function add(a, b) {\n' +
                '  return a + b\n' +
                '}\n' +
                '\n' +
                '// 函数表达式：不提升赋值\n' +
                'const multiply = function (a, b) {\n' +
                '  return a * b\n' +
                '}\n' +
                'console.log(multiply(3, 4))  // 12',
              explanation:
                'add 是函数声明，整体提升，故可在定义前调用。multiply 是表达式，' +
                'const 提升但赋值不提升，调用必须在赋值之后。现代代码推荐表达式风格。',
            },
            {
              title: '函数作为参数（回调）',
              code:
                'function apply(arr, fn) {\n' +
                '  const result = []\n' +
                '  for (let i = 0; i < arr.length; i++) {\n' +
                '    result.push(fn(arr[i]))\n' +
                '  }\n' +
                '  return result\n' +
                '}\n' +
                'const doubled = apply([1, 2, 3], function (x) { return x * 2 })\n' +
                'console.log(doubled)  // [2,4,6]',
              explanation:
                '函数作为参数传递给另一个函数，这种"高阶函数"模式是 JS 的核心。' +
                'apply 接收一个函数 fn 并对数组每个元素应用它——这就是 map 的本质。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写函数 greet，接收 name，返回 "你好, " + name。调用 greet("世界") 并输出。',
              starter_code:
                'function greet(name) {\n' +
                '  return ___\n' +
                '}\n' +
                'console.log(greet("世界"))',
              expected_output: '你好, 世界',
              hints: [
                '返回 "你好, " + name',
                '把 ___ 替换为 "你好, " + name',
                '字符串拼接用 +',
              ],
            },
            {
              type: 'output-match',
              prompt: '写函数 square(n) 返回 n 的平方。调用 square(9) 并输出结果。',
              starter_code:
                'const square = function (n) {\n' +
                '  return ___\n' +
                '}\n' +
                'console.log(square(9))',
              expected_output: '81',
              hints: [
                '平方是 n * n',
                '把 ___ 替换为 n * n',
                '9 的平方是 81',
              ],
            },
            {
              type: 'output-match',
              prompt: '写函数 rectangleArea(w, h) 返回矩形面积 w * h。调用 rectangleArea(5, 6) 输出。',
              starter_code:
                'function rectangleArea(w, h) {\n' +
                '  return ___\n' +
                '}\n' +
                'console.log(rectangleArea(5, 6))',
              expected_output: '30',
              hints: [
                '面积 = 宽 * 高',
                '把 ___ 替换为 w * h',
                '5 乘 6 等于 30',
              ],
            },
          ],
          realWorldScenario:
            '在前端工具库中，函数声明用于定义工具方法（如 formatDate、formatCurrency）。' +
            '回调函数是事件处理的基础：addEventListener 第二参数就是一个函数。' +
            '高阶函数（接收函数作为参数）让代码高度复用——例如封装一个通用的"重试"函数，' +
            '接收任意异步操作和重试次数，体现了函数式编程的强大表达力。',
        },
        {
          id: 'js-ch3-l2',
          title: '箭头函数',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '箭头函数是 ES6 引入的简洁函数语法：`const fn = (参数) => { 函数体 }`。' +
            '当只有一个参数时可省略括号，当函数体只有一句 return 时可省略花括号和 return：' +
            '`const square = n => n * n`。这种简洁让回调函数（如 map、filter 的参数）写起来更清爽。' +
            '箭头函数是现代 JS 中最常用的函数定义方式。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 完整形式\n' +
            'const add = (a, b) => { return a + b }\n' +
            '\n' +
            '// 单表达式简写（省略 {} 和 return）\n' +
            'const add = (a, b) => a + b\n' +
            '\n' +
            '// 单参数省略括号\n' +
            'const square = n => n * n\n' +
            '\n' +
            '// 无参数需空括号\n' +
            'const greet = () => "hello"\n' +
            '\n' +
            '// 返回对象字面量需加括号（避免与函数体混淆）\n' +
            'const makeUser = (name) => ({ name: name, age: 0 })\n' +
            '```\n\n' +
            '箭头函数与传统函数的关键区别在于 `this`：箭头函数没有自己的 this，' +
            '它从外层词法作用域继承 this。这解决了回调中 this 丢失的经典痛点——' +
            '在 ES5 中，setTimeout 回调里的 this 不再指向对象，需用 `var self = this` 或 bind 修正；' +
            '箭头函数天然继承外层 this，让代码更直观。\n\n' +
            '## 箭头函数 vs 普通函数对照表\n\n' +
            '| 特性 | 普通函数 | 箭头函数 |\n' +
            '|------|----------|----------|\n' +
            '| this 绑定 | 调用时确定（动态） | 定义时继承外层（静态） |\n' +
            '| arguments 对象 | 有 | 无（用 rest 参数替代） |\n' +
            '| new 调用 | 可作为构造函数 | 不能用 new |\n' +
            '| prototype 属性 | 有 | 无 |\n' +
            '| yield | 可作生成器 | 不能 |\n' +
            '| 语法 | 较冗长 | 简洁 |\n' +
            '| 适用 | 对象方法、构造函数 | 回调、短函数 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 箭头函数简写\n' +
            'const add = (a, b) => a + b\n' +
            'const square = n => n * n\n' +
            'const greet = name => `你好, ${name}`\n' +
            'console.log(add(3, 4))      // 7\n' +
            'console.log(square(5))      // 25\n' +
            'console.log(greet("小明"))  // 你好, 小明\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 箭头函数与 this（继承外层 this）\n' +
            'function Timer() {\n' +
            '  this.count = 0\n' +
            '  this.start = function () {\n' +
            '    const tick = () => {\n' +
            '      this.count++  // 箭头函数继承 start 的 this\n' +
            '      console.log(this.count)\n' +
            '    }\n' +
            '    tick()\n' +
            '  }\n' +
            '}\n' +
            'new Timer().start()  // 1\n' +
            '// 若 tick 用普通 function，this 会是 undefined（严格模式）\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 箭头函数作为回调（map/filter/reduce）\n' +
            'const nums = [1, 2, 3, 4]\n' +
            'const doubled = nums.map(n => n * 2)\n' +
            'const evens = nums.filter(n => n % 2 === 0)\n' +
            'const sum = nums.reduce((acc, n) => acc + n, 0)\n' +
            'console.log(doubled)  // [2,4,6,8]\n' +
            'console.log(evens)    // [2,4]\n' +
            'console.log(sum)      // 10\n' +
            '```\n\n' +
            '```js\n' +
            '// 4. 返回对象字面量需加括号\n' +
            'const makePoint = (x, y) => ({ x, y })\n' +
            'console.log(makePoint(1, 2))  // { x: 1, y: 2 }\n' +
            '// 不加括号会被解析为函数体标签，导致错误\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **箭头函数不适合作为对象方法**：`{ method: () => this }` 中 this 不指向对象，而是外层作用域。对象方法推荐用方法简写 `{ method() {} }`。\n' +
            '2. **不能用 new 调用**：箭头函数没有 `[[Construct]]` 内部方法，`new ArrowFn()` 会报错。\n' +
            '3. **没有 arguments 对象**：箭头函数内访问 arguments 会取到外层的 arguments，需用 rest 参数 `...args` 替代。\n' +
            '4. **返回对象字面量要加括号**：`x => { a: 1 }` 会被解析为函数体（标签 a），应写 `x => ({ a: 1 })`。\n' +
            '5. **选择箭头还是普通函数的规则**：需要"外层 this"用箭头，需要"自身 this"用普通函数。\n\n' +
            '## 实际应用\n\n' +
            '在 React 函数组件中，事件处理几乎都用箭头函数：`onClick={() => setCount(c => c + 1)}`，' +
            '因为箭头函数继承了组件的 this（虽然函数组件无 this，但避免了 bind 问题）。' +
            '数组方法配合箭头函数是处理列表数据的标配：从用户列表过滤出 VIP、把商品映射为卡片配置，' +
            '都是一行箭头函数的事。箭头函数让"数据变换"表达得像数学公式一样优雅。\n\n' +
            '## 扩展知识\n\n' +
            '- **箭头函数不能作生成器**：`function*` 语法与箭头函数不兼容，生成器必须用普通 function。\n' +
            '- **箭头函数与柯里化**：`const add = a => b => a + b` 是柯里化的简洁写法，箭头函数让多层返回更易读。\n' +
            '- **this 绑定规则总结**：普通函数 this 由调用方式决定（默认、隐式、显式、new），箭头函数 this 由定义位置决定。\n' +
            '- **性能**：箭头函数和普通函数性能几乎无差异，选择依据应是 this 行为和可读性，而非性能。',
          examples: [
            {
              title: '箭头函数简写',
              code:
                'const add = (a, b) => a + b\n' +
                'const square = n => n * n\n' +
                'const greet = name => `你好, ${name}`\n' +
                'console.log(add(3, 4))      // 7\n' +
                'console.log(square(5))      // 25\n' +
                'console.log(greet("小明"))  // 你好, 小明',
              explanation:
                '单参数省括号，单 return 语句省花括号和 return 关键字。' +
                '这让简单的工具函数和回调写法极其简洁，是函数式编程的好搭档。',
            },
            {
              title: '箭头函数与 this',
              code:
                'function Timer() {\n' +
                '  this.count = 0\n' +
                '  // 箭头函数继承外层 this，指向 Timer 实例\n' +
                '  this.start = function () {\n' +
                '    const tick = () => {\n' +
                '      this.count++\n' +
                '      console.log(this.count)\n' +
                '    }\n' +
                '    tick()\n' +
                '  }\n' +
                '}\n' +
                'new Timer().start()  // 1',
              explanation:
                '若 tick 用普通 function，this 会是 undefined（严格模式）或 window，导致 this.count 报错。' +
                '箭头函数继承 start 的 this（即 Timer 实例），完美解决回调中 this 丢失问题。',
            },
            {
              title: '箭头函数作为回调',
              code:
                'const nums = [1, 2, 3, 4]\n' +
                'const doubled = nums.map(n => n * 2)\n' +
                'const evens = nums.filter(n => n % 2 === 0)\n' +
                'const sum = nums.reduce((acc, n) => acc + n, 0)\n' +
                'console.log(doubled)  // [2,4,6,8]\n' +
                'console.log(evens)    // [2,4]\n' +
                'console.log(sum)      // 10',
              explanation:
                '箭头函数让数组方法的回调极其简洁。map/filter/reduce 是函数式编程三剑客，' +
                '配合箭头函数几乎成了现代 JS 的标志性写法。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用箭头函数写 add(a, b) 返回 a + b。调用 add(10, 20) 输出结果。',
              starter_code:
                'const add = (a, b) => ___\n' +
                'console.log(add(10, 20))',
              expected_output: '30',
              hints: [
                '返回 a + b',
                '把 ___ 替换为 a + b',
                '箭头函数单表达式可省略 return',
              ],
            },
            {
              type: 'output-match',
              prompt: '用箭头函数写 isEven(n) 返回 n 是否为偶数（布尔值）。调用 isEven(8) 输出。',
              starter_code:
                'const isEven = n => ___\n' +
                'console.log(isEven(8))',
              expected_output: 'true',
              hints: [
                '偶数判断：n % 2 === 0',
                '把 ___ 替换为 n % 2 === 0',
                '该表达式返回布尔值 true/false',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 map + 箭头函数把 [1, 2, 3] 每个元素乘以 3，输出结果数组。',
              starter_code:
                'const arr = [1, 2, 3]\n' +
                'const result = arr.map(n => ___)\n' +
                'console.log(result)',
              expected_output: '[3,6,9]',
              hints: [
                '每个元素乘 3',
                '把 ___ 替换为 n * 3',
                '数组输出格式为 [3,6,9]',
              ],
            },
          ],
          realWorldScenario:
            '在 React 函数组件中，事件处理几乎都用箭头函数：`onClick={() => setCount(c => c + 1)}`，' +
            '因为箭头函数继承了组件的 this（虽然函数组件无 this，但避免了 bind 问题）。' +
            '数组方法配合箭头函数是处理列表数据的标配：从用户列表过滤出 VIP、把商品映射为卡片配置，' +
            '都是一行箭头函数的事。箭头函数让"数据变换"表达得像数学公式一样优雅。',
        },
        {
          id: 'js-ch3-l3',
          title: '参数与默认值',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'ES6 引入的默认参数让函数参数缺失时有合理默认值：`function fn(a, b = 10) {}`。' +
            '当 b 未传或显式传 undefined 时使用默认值 10。这替代了旧代码中 `b = b || 10` 的写法，' +
            '更清晰且不会把 0、空串等假值误判为缺失。默认参数让函数接口更健壮，降低调用方的心智负担。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 默认参数\n' +
            'function fn(a, b = 10, c = "默认") {\n' +
            '  // b 未传或传 undefined 时为 10\n' +
            '  // c 未传或传 undefined 时为 "默认"\n' +
            '}\n' +
            '\n' +
            '// rest 参数（收集剩余参数为数组）\n' +
            'function fn(first, ...rest) {\n' +
            '  // rest 是真数组，包含 first 之后的所有参数\n' +
            '}\n' +
            '\n' +
            '// spread 展开运算符（数组展开为独立参数）\n' +
            'Math.max(...[1, 2, 3])  // 等价于 Math.max(1, 2, 3)\n' +
            '```\n\n' +
            'rest 参数 `...args` 把剩余参数收集为数组，替代了旧的 arguments 对象' +
            '（arguments 是类数组，非真数组，且箭头函数无 arguments）。' +
            'rest 参数是真数组，可直接用数组方法，是处理可变参数的现代方案。' +
            '注意 rest 必须是最后一个参数。\n\n' +
            '与之相对的 spread 展开运算符 `...`（同符号，不同语境）把数组展开为逗号分隔的值：' +
            '`Math.max(...[1, 2, 3])` 等价于 `Math.max(1, 2, 3)`。' +
            '它在函数调用、数组拼接、数组拷贝中极其常用。rest 是"收"，spread 是"散"，' +
            '理解这个对立能让你灵活处理参数与数组的转换。\n\n' +
            '## 参数特性对照表\n\n' +
            '| 特性 | 语法 | 说明 | 触发默认值 |\n' +
            '|------|------|------|------------|\n' +
            '| 默认参数 | `b = 10` | 缺失时用默认值 | 未传或传 undefined |\n' +
            '| rest 参数 | `...args` | 收集剩余参数为数组 | - |\n' +
            '| spread 展开 | `...arr` | 数组展开为独立参数 | - |\n' +
            '| 解构默认值 | `{ a = 1 } = {}` | 解构时设默认 | 属性为 undefined |\n' +
            '| arguments | `arguments` | 旧式类数组参数 | - |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 默认参数\n' +
            'function greet(name, greeting = "你好") {\n' +
            '  return `${greeting}, ${name}`\n' +
            '}\n' +
            'console.log(greet("小明"))          // 你好, 小明\n' +
            'console.log(greet("小红", "嗨"))    // 嗨, 小红\n' +
            'console.log(greet("小刚", undefined)) // 你好, 小刚（undefined 触发默认值）\n' +
            'console.log(greet("小强", null))    // null, 小强（null 不触发默认值）\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. rest 参数（可变参数求和）\n' +
            'function sum(...nums) {\n' +
            '  return nums.reduce((a, b) => a + b, 0)\n' +
            '}\n' +
            'console.log(sum(1, 2, 3))       // 6\n' +
            'console.log(sum(1, 2, 3, 4, 5)) // 15\n' +
            '\n' +
            '// rest 与固定参数组合\n' +
            'function log(tag, ...args) {\n' +
            '  console.log(tag, args)\n' +
            '}\n' +
            'log("info", 1, 2, 3)  // info [1, 2, 3]\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. spread 展开调用与数组合并\n' +
            'const nums = [3, 1, 4, 1, 5]\n' +
            'console.log(Math.max(...nums))  // 5（展开为参数）\n' +
            'const a = [1, 2]\n' +
            'const b = [3, 4]\n' +
            'console.log([...a, ...b])       // [1,2,3,4]（合并数组）\n' +
            'const copy = [...nums]          // 浅拷贝数组\n' +
            'console.log(copy)\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **只有 undefined 触发默认值**：传 null、0、空串都不会用默认值。这与旧式 `b = b || 10` 不同（后者会把 0、"" 也当缺失）。\n' +
            '2. **默认参数在调用时求值**：每次调用都会重新求值默认表达式，`b = []` 每次产生新数组，不像 Python 的可变默认参数陷阱。\n' +
            '3. **rest 必须是最后一个参数**：`function fn(...rest, last)` 会语法错误。\n' +
            '4. **箭头函数无 arguments**：箭头函数内访问 arguments 取的是外层的，需用 rest 参数替代。\n' +
            '5. **spread 是浅展开**：`[...arr]` 只复制一层，嵌套数组仍是引用。\n\n' +
            '## 实际应用\n\n' +
            '设计可配置函数时常组合默认参数与解构：`function fetch(url, { method = "GET", timeout = 5000 } = {})`，' +
            '让调用方只传关心的选项，其余用默认。rest 参数常用于"转发参数"，如包装器函数把参数原样传给底层 API。' +
            'spread 则用于合并配置对象、展开依赖数组，是日常工程的高频操作。' +
            '默认参数、rest、spread 三者组合，让 JS 的参数处理能力接近 Python 等语言，是现代函数式 API 设计的基础。\n\n' +
            '## 扩展知识\n\n' +
            '- **默认参数可引用前面的参数**：`function fn(a, b = a * 2)` 中 b 默认值为 a 的两倍，但后面的参数不能引用前面的默认参数之外的同级变量声明。\n' +
            '- **解构默认值**：`function fn({ x = 0, y = 0 } = {})` 是配置对象的标准写法，每个属性都能独立设默认。\n' +
            '- **rest/spread 用于对象（ES2018）**：`{ ...obj }` 浅拷贝对象，`const { a, ...rest } = obj` 收集剩余属性。\n' +
            '- **arguments 的遗留问题**：arguments 是类数组（有 length 无数组方法），需 `Array.from(arguments)` 转换，现代代码应直接用 rest。',
          examples: [
            {
              title: '默认参数',
              code:
                'function greet(name, greeting = "你好") {\n' +
                '  return `${greeting}, ${name}`\n' +
                '}\n' +
                'console.log(greet("小明"))          // 你好, 小明\n' +
                'console.log(greet("小红", "嗨"))    // 嗨, 小红',
              explanation:
                'greeting 未传时用默认值 "你好"。注意只有传 undefined 才触发默认值，传 null 会用 null。' +
                '默认参数让函数在不同调用场景下都有合理行为。',
            },
            {
              title: 'rest 参数',
              code:
                'function sum(...nums) {\n' +
                '  return nums.reduce((a, b) => a + b, 0)\n' +
                '}\n' +
                'console.log(sum(1, 2, 3))       // 6\n' +
                'console.log(sum(1, 2, 3, 4, 5)) // 15',
              explanation:
                '...nums 把所有参数收集成真数组，可直接用 reduce。相比 arguments，rest 是真数组更方便。' +
                '这是实现可变参数函数的标准方式。',
            },
            {
              title: 'spread 展开调用',
              code:
                'const nums = [3, 1, 4, 1, 5]\n' +
                'console.log(Math.max(...nums))  // 5\n' +
                'const a = [1, 2]\n' +
                'const b = [3, 4]\n' +
                'console.log([...a, ...b])       // [1,2,3,4]',
              explanation:
                '...nums 把数组展开为独立参数传给 Math.max。' +
            '[...a, ...b] 用 spread 合并数组，比 a.concat(b) 更直观，是现代合并数组的首选。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写函数 greet(name, greeting = "你好")，返回 `${greeting}, ${name}`。' +
                '调用 greet("小红")（不传第二个参数）输出结果。',
              starter_code:
                'function greet(name, greeting = "你好") {\n' +
                '  return `${greeting}, ${___}`\n' +
                '}\n' +
                'console.log(greet("小红"))',
              expected_output: '你好, 小红',
              hints: [
                '模板中嵌入 name 变量',
                '把 ___ 替换为 name',
                '不传 greeting 时用默认值 "你好"',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 rest 参数写 sum(...nums)，返回所有参数之和。调用 sum(1, 2, 3, 4) 输出。',
              starter_code:
                'function sum(...nums) {\n' +
                '  return nums.reduce((a, b) => a + b, ___)\n' +
                '}\n' +
                'console.log(sum(1, 2, 3, 4))',
              expected_output: '10',
              hints: [
                'reduce 的初始值传 0',
                '把 ___ 替换为 0',
                '1+2+3+4 = 10',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 spread 把数组 [4, 2, 8, 6] 展开传给 Math.max，输出最大值。',
              starter_code:
                'const nums = [4, 2, 8, 6]\n' +
                'console.log(Math.max(___))',
              expected_output: '8',
              hints: [
                '展开数组用 ...nums',
                '把 ___ 替换为 ...nums',
                'Math.max 返回最大值 8',
              ],
            },
          ],
          realWorldScenario:
            '设计可配置函数时常组合默认参数与解构：`function fetch(url, { method = "GET", timeout = 5000 } = {})`，' +
            '让调用方只传关心的选项，其余用默认。rest 参数常用于"转发参数"，如包装器函数把参数原样传给底层 API。' +
            'spread 则用于合并配置对象、展开依赖数组，是日常工程的高频操作。',
        },
        {
          id: 'js-ch3-l4',
          title: '闭包',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '闭包（Closure）是 JS 中最核心也最难懂的概念之一。简单说，闭包是"函数与其词法环境的组合"——' +
            '内层函数可以访问外层函数的变量，即使外层函数已执行完毕。' +
            '这是因为函数在定义时就"记住"了它出生时的作用域，而非调用时的作用域。' +
            '理解闭包是掌握模块化、私有变量、高阶函数的关键。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            'function outer() {\n' +
            '  let 私有变量 = 0           // 外层变量\n' +
            '  return function inner() {\n' +
            '    私有变量++               // 内层函数访问外层变量\n' +
            '    return 私有变量\n' +
            '  }\n' +
            '  // outer 执行完毕后，私有变量不会被回收\n' +
            '  // 因为返回的 inner 仍然引用它（这就是闭包）\n' +
            '}\n' +
            '```\n\n' +
            '闭包的本质是：函数持有对其词法作用域中变量的引用，使得这些变量不会随外层函数执行结束而被垃圾回收。' +
            '每次调用外层函数都会创建一个全新的闭包环境，互不干扰。\n\n' +
            '## 闭包常见应用模式\n\n' +
            '| 模式 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| 私有变量 | 用闭包隐藏内部状态 | 计数器、缓存 |\n' +
            '| 工厂函数 | 配置化生成函数 | makeAdder(base) |\n' +
            '| 模块模式 | 封装公共/私有 API | IIFE + 返回对象 |\n' +
            '| 柯里化 | 分步传参 | add(a)(b) |\n' +
            '| 记忆化 | 缓存计算结果 | memoize |\n' +
            '| 事件处理 | 保留回调上下文 | addEventListener |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 计数器闭包（私有变量）\n' +
            'function createCounter() {\n' +
            '  let count = 0  // 私有变量，外部无法直接访问\n' +
            '  return function () {\n' +
            '    count++\n' +
            '    return count\n' +
            '  }\n' +
            '}\n' +
            'const c = createCounter()\n' +
            'console.log(c())  // 1\n' +
            'console.log(c())  // 2\n' +
            'console.log(c())  // 3\n' +
            '// count 只能通过 c 操作，无法直接访问，实现封装\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 工厂函数 makeAdder（配置化生成函数）\n' +
            'function makeAdder(base) {\n' +
            '  return function (n) {\n' +
            '    return base + n\n' +
            '  }\n' +
            '}\n' +
            'const add10 = makeAdder(10)\n' +
            'const add20 = makeAdder(20)\n' +
            'console.log(add10(5))  // 15\n' +
            'console.log(add20(5))  // 25\n' +
            '// add10 和 add20 是两个独立闭包，各自记住不同的 base\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. let 解决循环闭包陷阱\n' +
            'const fns = []\n' +
            'for (let i = 0; i < 3; i++) {\n' +
            '  fns.push(() => i)\n' +
            '}\n' +
            'console.log(fns[0]())  // 0\n' +
            'console.log(fns[1]())  // 1\n' +
            'console.log(fns[2]())  // 2\n' +
            '// let 让每次迭代产生新的 i 绑定；若用 var，三个函数都返回 3\n' +
            '```\n\n' +
            '```js\n' +
            '// 4. 模块模式（IIFE 封装私有/公共 API）\n' +
            'const counter = (function () {\n' +
            '  let count = 0  // 私有\n' +
            '  return {\n' +
            '    increment: () => { count++; return count },\n' +
            '    reset: () => { count = 0 }\n' +
            '  }\n' +
            '})()\n' +
            'console.log(counter.increment())  // 1\n' +
            'console.log(counter.increment())  // 2\n' +
            'counter.reset()\n' +
            'console.log(counter.increment())  // 1\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **var 的循环闭包陷阱**：在 for 循环中用 var 声明 i，所有闭包共享同一个 i（最终值）。用 let 解决（每次迭代创建新绑定），或用 IIFE 立即执行捕获当前值。\n' +
            '2. **内存占用**：闭包会持有外层变量引用，导致这些变量不会被回收。长期存活的闭包（如事件监听器）可能造成内存泄漏，应及时解绑。\n' +
            '3. **闭包不是"复制"而是"引用"**：闭包引用的是变量本身，而非值的快照。外层变量改变时，闭包内看到的也变。\n' +
            '4. **不要在构造函数中过度用闭包**：每个实例会创建新的闭包，方法应放在 prototype 上共享以节省内存。\n' +
            '5. **ES6 class 私有字段**：`#x` 语法提供了类内私有字段，部分场景可替代闭包封装，但闭包仍是函数式封装的首选。\n\n' +
            '## 实际应用\n\n' +
            '闭包的经典应用是计数器：外层函数定义一个局部变量 count，返回内层函数操作 count。' +
            '外部无法直接访问 count，只能通过返回的函数间接操作——这就实现了"私有变量"。' +
            '在 ES6 class 私有字段（#x）出现前，闭包是实现封装的主要手段，至今仍是函数式封装的首选。' +
            '工厂函数是闭包的常见模式：`makeAdder(base)` 返回一个加 base 的函数。' +
            '每次调用 makeAdder 都创建一个独立的闭包，互不干扰。' +
            '这种"配置化生成函数"的思想在 lodash 等工具库中随处可见，例如 `_.partial`、`_.curry`。' +
            '闭包让函数能"携带状态"，是面向对象之外的另一种状态管理方式。\n\n' +
            '## 扩展知识\n\n' +
            '- **记忆化（Memoization）**：用闭包缓存函数计算结果，避免重复计算，是性能优化的经典手段。\n' +
            '- **柯里化（Currying）**：`add(a)(b)(c)` 把多参数函数转为逐个接收的函数链，依赖闭包保存已传参数。\n' +
            '- **垃圾回收与闭包**：只要闭包存在，其引用的变量就不会被 GC；移除闭包引用（置 null）才能释放。\n' +
            '- **V8 的闭包优化**：现代引擎会分析闭包实际使用的变量，只保留被引用的变量，未引用的会被回收（"逃逸分析"）。',
          examples: [
            {
              title: '计数器闭包',
              code:
                'function createCounter() {\n' +
                '  let count = 0  // 私有变量，外部无法直接访问\n' +
                '  return function () {\n' +
                '    count++\n' +
                '    return count\n' +
                '  }\n' +
                '}\n' +
                'const c = createCounter()\n' +
                'console.log(c())  // 1\n' +
                'console.log(c())  // 2\n' +
                'console.log(c())  // 3',
              explanation:
                '返回的函数记住了 count，每次调用累加。count 像"私有变量"，只能通过 c 操作。' +
                '这是封装和数据隐藏的经典模式，无需 class 即可实现。',
            },
            {
              title: '工厂函数 makeAdder',
              code:
                'function makeAdder(base) {\n' +
                '  return function (n) {\n' +
                '    return base + n\n' +
                '  }\n' +
                '}\n' +
                'const add10 = makeAdder(10)\n' +
                'const add20 = makeAdder(20)\n' +
                'console.log(add10(5))  // 15\n' +
                'console.log(add20(5))  // 25',
              explanation:
                'add10 和 add20 是两个独立闭包，各自记住不同的 base。' +
                '这就是"配置化生成函数"：同一逻辑，不同参数生成特化版本，是函数式编程的精髓。',
            },
            {
              title: 'let 解决循环闭包陷阱',
              code:
                'const fns = []\n' +
                'for (let i = 0; i < 3; i++) {\n' +
                '  fns.push(() => i)\n' +
                '}\n' +
                'console.log(fns[0]())  // 0\n' +
                'console.log(fns[1]())  // 1\n' +
                'console.log(fns[2]())  // 2',
              explanation:
                'let 让每次迭代产生新的 i 绑定，每个箭头函数记住各自的 i。' +
                '若用 var，三个函数都会返回 3（共享同一个 i 的最终值）。这是面试常考的闭包陷阱。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写 createCounter 闭包（参考示例），创建 c = createCounter()，调用两次 c()，' +
                '第二次的返回值应是多少？直接调用并输出 c() 第二次的结果。',
              starter_code:
                'function createCounter() {\n' +
                '  let count = 0\n' +
                '  return function () {\n' +
                '    count++\n' +
                '    return count\n' +
                '  }\n' +
                '}\n' +
                'const c = createCounter()\n' +
                'c()\n' +
                'console.log(c())',
              expected_output: '2',
              hints: [
                '第一次 c() 返回 1，第二次返回 2',
                '不需要填空，理解闭包的累加行为',
                'count 从 0 开始，调用两次后为 2',
              ],
            },
            {
              type: 'output-match',
              prompt: '写工厂函数 makeMultiplier(factor)，返回一个把参数乘以 factor 的函数。' +
                '创建 double = makeMultiplier(2)，调用 double(7) 输出结果。',
              starter_code:
                'function makeMultiplier(factor) {\n' +
                '  return function (n) {\n' +
                '    return factor * ___\n' +
                '  }\n' +
                '}\n' +
                'const double = makeMultiplier(2)\n' +
                'console.log(double(7))',
              expected_output: '14',
              hints: [
                '返回 factor 乘以 n',
                '把 ___ 替换为 n',
                '2 乘 7 等于 14',
              ],
            },
            {
              type: 'output-match',
              prompt: '用闭包实现 once(fn)：返回的函数只执行 fn 一次，之后再调用返回首次结果。' +
                '参考下方代码补全，使得第二次调用返回首次结果 42。',
              starter_code:
                'function once(fn) {\n' +
                '  let called = false\n' +
                '  let result\n' +
                '  return function (...args) {\n' +
                '    if (!called) {\n' +
                '      result = fn(...args)\n' +
                '      called = ___\n' +
                '    }\n' +
                '    return result\n' +
                '  }\n' +
                '}\n' +
                'const f = once(() => 42)\n' +
                'console.log(f())\n' +
                'console.log(f())',
              expected_output: '42\n42',
              hints: [
                '执行后应标记 called 为 true',
                '把 ___ 替换为 true',
                '两次调用都返回 42',
              ],
            },
          ],
          realWorldScenario:
            '模块模式是闭包的工程应用：用 IIFE 包裹一段代码，暴露公共 API，隐藏私有变量和方法。' +
            '在 ES Module 普及前，这是 JS 模块化的主流方案（如 jQuery 的源码结构）。' +
            '即使今天，闭包仍用于：缓存函数结果（memoize）、节流防抖、单例工厂。' +
            'React 的 useState Hook 本质也是闭包——每次渲染捕获当时的 state，是闭包思想的现代体现。',
        },
      ],
    },
    // ================================================================
    // 第 4 章：数组
    // ================================================================
    {
      id: 'js-ch4',
      title: '数组',
      order: 3,
      lessons: [
        {
          id: 'js-ch4-l1',
          title: '数组方法 map / filter / reduce',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'map、filter、reduce 是函数式处理数组的"三剑客"，是现代 JS 必备技能。' +
            '它们都遵循"不可变"原则——返回新数组/新值，不修改原数组，这是函数式编程的核心思想。' +
            '掌握这三者，你就掌握了 80% 的前端数据处理场景。\n\n' +
            '## 方法说明\n\n' +
            '| 方法 | 作用 | 回调返回值 | 返回结果 | 是否修改原数组 |\n' +
            '|------|------|------------|----------|----------------|\n' +
            '| map | 变换每个元素 | 新元素 | 新数组（等长） | 否 |\n' +
            '| filter | 筛选元素 | 布尔值 | 新数组（可能更短） | 否 |\n' +
            '| reduce | 归约为单值 | 累加器 | 任意类型值 | 否 |\n' +
            '| forEach | 遍历 | 任意（忽略） | undefined | 否 |\n' +
            '| find | 查找首个 | 布尔值 | 首个匹配元素 | 否 |\n' +
            '| some | 是否存在满足 | 布尔值 | 布尔值 | 否 |\n' +
            '| every | 是否全部满足 | 布尔值 | 布尔值 | 否 |\n' +
            '| flatMap | map 后扁平一层 | 数组 | 新数组 | 否 |\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// map：变换\n' +
            'arr.map((元素, 索引, 原数组) => 新元素)\n' +
            '\n' +
            '// filter：筛选\n' +
            'arr.filter((元素, 索引, 原数组) => 布尔值)\n' +
            '\n' +
            '// reduce：归约\n' +
            'arr.reduce((累加器, 当前元素, 索引, 原数组) => 新累加器, 初始值)\n' +
            '```\n\n' +
            '`map(fn)` 对每个元素应用 fn，返回新数组（长度不变），用于"变换"数据。' +
            '`filter(fn)` 保留 fn 返回真的元素，返回新数组，用于"筛选"数据。' +
            '`reduce(fn, init)` 是最强大也最灵活的：把数组"归约"为单个值。' +
            'fn 接收 (累加器, 当前元素)，返回新的累加器。它能实现求和、扁平化、分组、' +
            '甚至可以用 reduce 实现 map 和 filter。初始值 init 很重要——不传时用第一个元素，' +
            '空数组不传初始值会报错。\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. map 变换\n' +
            'const nums = [1, 2, 3, 4]\n' +
            'const doubled = nums.map(n => n * 2)\n' +
            'const squared = nums.map(n => n * n)\n' +
            'console.log(doubled)  // [2,4,6,8]\n' +
            'console.log(squared)  // [1,4,9,16]\n' +
            '// 把对象数组映射为属性数组\n' +
            'const users = [{name:"小明"}, {name:"小红"}]\n' +
            'console.log(users.map(u => u.name))  // ["小明","小红"]\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. filter 筛选\n' +
            'const nums = [1, 2, 3, 4, 5, 6]\n' +
            'const evens = nums.filter(n => n % 2 === 0)\n' +
            'const big = nums.filter(n => n > 3)\n' +
            'console.log(evens)  // [2,4,6]\n' +
            'console.log(big)    // [4,5,6]\n' +
            '// 过滤对象数组\n' +
            'const products = [{price:50}, {price:200}, {price:30}]\n' +
            'console.log(products.filter(p => p.price > 40))  // [{price:50},{price:200}]\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. reduce 求和、分组、扁平化\n' +
            'const nums = [1, 2, 3, 4]\n' +
            'console.log(nums.reduce((acc, n) => acc + n, 0))  // 10\n' +
            '\n' +
            '// 按属性分组\n' +
            'const people = [{role:"a",name:"x"}, {role:"b",name:"y"}, {role:"a",name:"z"}]\n' +
            'const grouped = people.reduce((acc, p) => {\n' +
            '  (acc[p.role] = acc[p.role] || []).push(p.name)\n' +
            '  return acc\n' +
            '}, {})\n' +
            'console.log(grouped)  // { a: ["x","z"], b: ["y"] }\n' +
            '\n' +
            '// 递归扁平化嵌套数组\n' +
            'function flatten(arr) {\n' +
            '  return arr.reduce((acc, item) =>\n' +
            '    acc.concat(Array.isArray(item) ? flatten(item) : item), [])\n' +
            '}\n' +
            'console.log(flatten([1, [2, [3, 4]], 5]))  // [1,2,3,4,5]\n' +
            '```\n\n' +
            '```js\n' +
            '// 4. 链式调用（数据流水线）\n' +
            'const orders = [{item:"书",price:30,qty:2}, {item:"笔",price:5,qty:10}, {item:"本",price:8,qty:3}]\n' +
            'const total = orders\n' +
            '  .filter(o => o.price * o.qty > 20)   // 过滤金额>20\n' +
            '  .map(o => o.price * o.qty)           // 算每项金额\n' +
            '  .reduce((sum, n) => sum + n, 0)      // 求总和\n' +
            'console.log(total)  // 110（书60 + 本0... 实际按条件算）\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **reduce 不传初始值的陷阱**：空数组不传初始值会报错 `Reduce of empty array with no initial value`。建议始终传初始值。\n' +
            '2. **链式调用的性能**：`filter().map().reduce()` 会遍历多次，大数据集可用单次 reduce 替代以提升性能。\n' +
            '3. **map 回调必须有返回值**：忘记 return 会得到 `[undefined, undefined, ...]`，这是常见错误。\n' +
            '4. **不要在 map 中做副作用**：map 的语义是"变换"，副作用（如修改外部变量、打印）应放在 forEach 中。\n' +
            '5. **reduce 可实现一切**：reduce 能实现 map、filter、find 等，但可读性不如专用方法，仅在需要灵活归约时使用。\n\n' +
            '## 实际应用\n\n' +
            '前端数据处理几乎离不开这三个方法。例如电商页面：从商品列表 filter 出在售商品，' +
            'map 成卡片配置对象，reduce 计算总价。搜索过滤功能本质就是 `items.filter(i => i.name.includes(keyword))`。' +
            '数据可视化时，原始 API 数据经多步 map/filter/reduce 流水线变换成图表所需格式。' +
            '链式调用让数据变换流水线化：`arr.filter(...).map(...).reduce(...)`，' +
            '从原始数据一步步过滤、转换、汇总，每一步意图清晰。这种声明式写法比 for 循环更易读，' +
            '也更容易测试和并行化。\n\n' +
            '## 扩展知识\n\n' +
            '- **`flat()` 与 `flatMap()`**：`arr.flat(n)` 扁平化 n 层（默认 1），`flatMap` 是 map + flat(1) 的组合，比先 map 再 flat 更高效。\n' +
            '- **reduce 实现 map/filter**：reduce 是最通用的数组方法，可用它实现 map 和 filter，理解这一点能加深对函数式编程的理解。\n' +
            '- **不可变性与纯函数**：map/filter/reduce 不修改原数组，符合纯函数原则，利于 React 状态管理（永远返回新数组而非 mutate）。\n' +
            '- **并行化潜力**：函数式数据变换天然适合并行处理（如 Web Worker），因为无共享状态副作用。',
          examples: [
            {
              title: 'map 变换',
              code:
                'const nums = [1, 2, 3, 4]\n' +
                'const doubled = nums.map(n => n * 2)\n' +
                'const squared = nums.map(n => n * n)\n' +
                'console.log(doubled)  // [2,4,6,8]\n' +
                'console.log(squared)  // [1,4,9,16]',
              explanation:
                'map 对每个元素应用函数，返回等长新数组。原数组不变。' +
                '常用于"把数据从一种形态映射为另一种"，如把用户列表映射为姓名列表。',
            },
            {
              title: 'filter 筛选',
              code:
                'const nums = [1, 2, 3, 4, 5, 6]\n' +
                'const evens = nums.filter(n => n % 2 === 0)\n' +
                'const big = nums.filter(n => n > 3)\n' +
                'console.log(evens)  // [2,4,6]\n' +
                'console.log(big)    // [4,5,6]',
              explanation:
                'filter 保留回调返回真的元素。常用于按条件筛选数据，如过滤出 VIP 用户、' +
            '过滤掉已完成的任务。返回新数组，不修改原数组。',
            },
            {
              title: 'reduce 求和与数组扁平化',
              code:
                'const nums = [1, 2, 3, 4]\n' +
                'const sum = nums.reduce((acc, n) => acc + n, 0)\n' +
                'console.log(sum)  // 10\n' +
                '\n' +
                '// 经典面试题：递归扁平化嵌套数组\n' +
                'function flatten(arr) {\n' +
                '  return arr.reduce((acc, item) =>\n' +
                '    acc.concat(Array.isArray(item) ? flatten(item) : item), [])\n' +
                '}\n' +
                'console.log(flatten([1, [2, [3, 4]], 5]))  // [1,2,3,4,5]',
              explanation:
                'reduce 第一个参数是累加器，第二个是当前元素，返回值成为下一次的累加器。' +
            '初始值 0 是求和的起点。flatten 用 reduce 递归 concat，是面试高频题。' +
            '现代 JS 可直接用 arr.flat(Infinity) 替代手写递归。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 map 把 [1, 2, 3, 4] 每个元素加 10，输出结果数组。',
              starter_code:
                'const arr = [1, 2, 3, 4]\n' +
                'const result = arr.map(n => ___)\n' +
                'console.log(result)',
              expected_output: '[11,12,13,14]',
              hints: [
                '每个元素加 10',
                '把 ___ 替换为 n + 10',
                '数组输出为 [11,12,13,14]',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 filter 从 [1, 2, 3, 4, 5, 6] 中筛选出大于 3 的元素，输出结果。',
              starter_code:
                'const arr = [1, 2, 3, 4, 5, 6]\n' +
                'const result = arr.filter(n => ___)\n' +
                'console.log(result)',
              expected_output: '[4,5,6]',
              hints: [
                '条件是 n > 3',
                '把 ___ 替换为 n > 3',
                '大于 3 的有 4, 5, 6',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 reduce 计算 [10, 20, 30, 40] 的和，初始值 0，输出结果。',
              starter_code:
                'const arr = [10, 20, 30, 40]\n' +
                'const sum = arr.reduce((acc, n) => acc + n, ___)\n' +
                'console.log(sum)',
              expected_output: '100',
              hints: [
                '初始值传 0',
                '把 ___ 替换为 0',
                '10+20+30+40 = 100',
              ],
            },
          ],
          realWorldScenario:
            '前端数据处理几乎离不开这三个方法。例如电商页面：从商品列表 filter 出在售商品，' +
            'map 成卡片配置对象，reduce 计算总价。搜索过滤功能本质就是 `items.filter(i => i.name.includes(keyword))`。' +
            '数据可视化时，原始 API 数据经多步 map/filter/reduce 流水线变换成图表所需格式。' +
            '掌握这三者，你就掌握了 80% 的前端数据处理场景。',
        },
        {
          id: 'js-ch4-l2',
          title: '数组遍历',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '遍历数组有多种方式，各有适用场景。选择正确的遍历方式能让代码既正确又优雅。' +
            '理解每种遍历方法的语义边界是工程素养的体现。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 传统 for（索引控制，可 break）\n' +
            'for (let i = 0; i < arr.length; i++) { console.log(arr[i]) }\n' +
            '\n' +
            '// 2. for...of（遍历值，可 break，推荐）\n' +
            'for (const v of arr) { console.log(v) }\n' +
            '\n' +
            '// 3. forEach（声明式，不可 break）\n' +
            'arr.forEach((v, i) => console.log(v))\n' +
            '\n' +
            '// 4. entries() 同时取索引和值\n' +
            'for (const [i, v] of arr.entries()) { console.log(i, v) }\n' +
            '```\n\n' +
            '传统 `for` 提供索引控制，适合需要索引或提前终止（break）的场景。' +
            '`forEach(fn)` 是声明式遍历，更简洁但不能 break/continue（要 break 用 for...of 或 some/every）。' +
            '`for...of` 是 ES6 遍历可迭代对象的语法，既能 break 又简洁，是遍历值的首选。\n' +
            '`for...in` 是遍历对象"键"的，不应用于数组——它会遍历原型链上的可枚举属性，' +
            '且不保证顺序，是常见误用。\n\n' +
            '## 遍历方法对照表\n\n' +
            '| 方法 | 取值/索引 | 可 break | 可 continue | 返回值 | 适用场景 |\n' +
            '|------|-----------|----------|-------------|--------|----------|\n' +
            '| for | 都可 | 是 | 是 | - | 索引控制、提前终止 |\n' +
            '| for...of | 值 | 是 | 是 | - | 遍历值（推荐） |\n' +
            '| forEach | 值+索引 | 否 | 否 | undefined | 简单遍历副作用 |\n' +
            '| map | 值+索引 | 否 | 否 | 新数组 | 变换 |\n' +
            '| for...in | 键 | 是 | 是 | - | 对象（非数组） |\n' +
            '| entries() | 索引+值 | 是 | 是 | - | 需同时取索引值 |\n\n' +
            '## 查找与判断方法表\n\n' +
            '| 方法 | 作用 | 返回值 | 找不到时 |\n' +
            '|------|------|--------|----------|\n' +
            '| indexOf(v) | 查找值首次出现索引 | 索引 | -1 |\n' +
            '| lastIndexOf(v) | 从后查找 | 索引 | -1 |\n' +
            '| find(fn) | 首个满足条件的元素 | 元素 | undefined |\n' +
            '| findIndex(fn) | 首个满足条件的索引 | 索引 | -1 |\n' +
            '| findLast(fn) | 从后找首个满足元素 | 元素 | undefined |\n' +
            '| includes(v) | 是否包含 | 布尔 | false |\n' +
            '| some(fn) | 是否存在满足 | 布尔 | false |\n' +
            '| every(fn) | 是否全部满足 | 布尔 | true |\n' +
            '| at(i) | 按索引取值（支持负数） | 元素 | undefined |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 三种遍历对比\n' +
            'const arr = ["a", "b", "c"]\n' +
            'for (const v of arr) { console.log(v) }      // a b c\n' +
            'arr.forEach((v, i) => console.log(i + ":" + v))  // 0:a 1:b 2:c\n' +
            'for (let i = 0; i < arr.length; i++) { console.log(arr[i].toUpperCase()) }  // A B C\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 查找方法\n' +
            'const users = [\n' +
            '  { name: "小明", age: 20 },\n' +
            '  { name: "小红", age: 17 },\n' +
            '  { name: "小刚", age: 25 }\n' +
            ']\n' +
            'console.log(users.find(u => u.age >= 18).name)      // 小明\n' +
            'console.log(users.findIndex(u => u.age >= 18))       // 0\n' +
            'console.log(users.some(u => u.age < 18))             // true\n' +
            'console.log(users.every(u => u.age >= 18))           // false\n' +
            'console.log(users.includes(users[0]))                // true\n' +
            'console.log(["a","b"].indexOf("b"))                  // 1\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. for...of + break 提前终止\n' +
            'const nums = [1, 2, 3, 4, 5]\n' +
            'let firstBig = null\n' +
            'for (const n of nums) {\n' +
            '  if (n > 3) { firstBig = n; break }\n' +
            '}\n' +
            'console.log(firstBig)  // 4\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **forEach 不能 break**：forEach 无法用 break 跳出或 continue 跳过，需要提前退出时用 for...of 或 some/every（`arr.some(v => { if(...) return true })`）。\n' +
            '2. **for...in 不要用于数组**：它会遍历原型链可枚举属性，且不保证顺序。遍历数组用 for...of。\n' +
            '3. **find 返回的是元素引用**：修改返回的元素会改原数组中的对象（引用类型）。\n' +
            '4. **includes vs indexOf**：includes 返回布尔更直观，且能正确判断 NaN（`[NaN].includes(NaN)` 为 true，而 indexOf 为 -1）。\n' +
            '5. **性能**：大数据量遍历 for 最快，forEach/map 次之。但可读性往往比微优化更重要，日常开发优先选语义清晰的方法，性能瓶颈处再用 for 优化。\n\n' +
            '## 实际应用\n\n' +
            '渲染列表时遍历数据生成 DOM：`data.forEach(item => list.appendChild(render(item)))`。' +
            '搜索功能用 find 定位选中项，用 some 判断列表是否有匹配项决定显示"无结果"提示。' +
            '表单批量校验用 every：`fields.every(f => f.valid)` 决定能否提交。' +
            '查找元素有多个方法：`indexOf(v)` 返回首次出现的索引，' +
            '`find(fn)` 返回第一个满足条件的元素，`findIndex(fn)` 返回其索引，' +
            '`includes(v)` 判断是否包含。判断数组是否"存在满足条件的元素"用 `some(fn)`，' +
            '判断"是否全部满足"用 `every(fn)`——这两个方法在表单校验中极常用。\n\n' +
            '## 扩展知识\n\n' +
            '- **`some` 的 break 技巧**：`arr.some(v => { if(v>3) return true })` 利用 some 遇 true 停止的特性模拟 break。\n' +
            '- **`at()` 支持负索引**：`arr.at(-1)` 取最后一个元素，比 `arr[arr.length-1]` 更直观。\n' +
            '- **`findLast` / `findLastIndex`（ES2023）**：从数组末尾向前查找，弥补 find 只能从头找的不足。\n' +
            '- **迭代器协议**：for...of 底层调用对象的 `Symbol.iterator` 方法，自定义对象可实现该协议被 for...of 遍历。',
          examples: [
            {
              title: '三种遍历对比',
              code:
                'const arr = ["a", "b", "c"]\n' +
                '// for...of 遍历值（推荐）\n' +
                'for (const v of arr) {\n' +
                '  console.log(v)\n' +
                '}\n' +
                '// forEach 带索引\n' +
                'arr.forEach((v, i) => console.log(i + ":" + v))\n' +
                '// 传统 for\n' +
                'for (let i = 0; i < arr.length; i++) {\n' +
                '  console.log(arr[i].toUpperCase())\n' +
                '}',
              explanation:
                'for...of 最简洁且支持 break。forEach 不支持 break 但写法简单。' +
                '传统 for 适合需要索引控制和性能优化的场景。三者各有适用场景。',
            },
            {
              title: '查找方法',
              code:
                'const users = [\n' +
                '  { name: "小明", age: 20 },\n' +
                '  { name: "小红", age: 17 },\n' +
                '  { name: "小刚", age: 25 }\n' +
                ']\n' +
                'const adult = users.find(u => u.age >= 18)\n' +
                'console.log(adult.name)             // 小明\n' +
                'const adultIdx = users.findIndex(u => u.age >= 18)\n' +
                'console.log(adultIdx)               // 0\n' +
                'console.log(users.some(u => u.age < 18))   // true\n' +
                'console.log(users.every(u => u.age >= 18)) // false',
              explanation:
                'find 返回第一个满足条件的元素，findIndex 返回其索引。' +
                'some 只要有一个满足就 true，every 必须全部满足才 true。' +
                '这些方法在表单校验、权限判断中极其常用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 forEach 遍历 [10, 20, 30]，每个元素单独一行输出。',
              starter_code:
                'const arr = [10, 20, 30]\n' +
                'arr.forEach(n => console.log(___))',
              expected_output: '10\n20\n30',
              hints: [
                '输出当前元素 n',
                '把 ___ 替换为 n',
                'forEach 会对每个元素调用回调',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 find 在 [{name:"a",v:1},{name:"b",v:2}] 中找到 v 为 2 的元素，输出其 name。',
              starter_code:
                'const arr = [{ name: "a", v: 1 }, { name: "b", v: 2 }]\n' +
                'const found = arr.find(x => x.v === ___)\n' +
                'console.log(found.name)',
              expected_output: 'b',
              hints: [
                '查找 v 等于 2 的元素',
                '把 ___ 替换为 2',
                '该元素的 name 是 "b"',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 some 判断 [1, 2, 3, 4] 中是否存在大于 3 的元素，输出结果。',
              starter_code:
                'const arr = [1, 2, 3, 4]\n' +
                'console.log(arr.some(n => n > ___))',
              expected_output: 'true',
              hints: [
                '判断是否存在大于 3 的元素',
                '把 ___ 替换为 3',
                'some 只要有一个满足就返回 true',
              ],
            },
          ],
          realWorldScenario:
            '渲染列表时遍历数据生成 DOM：`data.forEach(item => list.appendChild(render(item)))`。' +
            '搜索功能用 find 定位选中项，用 some 判断列表是否有匹配项决定显示"无结果"提示。' +
            '表单批量校验用 every：`fields.every(f => f.valid)` 决定能否提交。' +
            '理解不同遍历方法的语义，能让你用最贴切的 API 表达意图，代码自解释。',
        },
        {
          id: 'js-ch4-l3',
          title: '数组解构',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '解构赋值（Destructuring）是 ES6 的强大特性，能从数组中"按位置提取"值到变量：' +
            '`const [a, b] = [1, 2]` 让 a=1, b=2。这比传统的 `const a = arr[0]; const b = arr[1]` 简洁得多，' +
            '尤其适合交换变量、提取函数返回的多值、处理正则匹配结果。' +
            '解构让"从复合结构取值"变得声明式且直观。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 基本解构\n' +
            'const [a, b, c] = [1, 2, 3]        // a=1, b=2, c=3\n' +
            '\n' +
            '// 跳过元素（逗号占位）\n' +
            'const [first, , third] = [1, 2, 3] // first=1, third=3\n' +
            '\n' +
            '// 默认值\n' +
            'const [x = 99] = []                // x=99\n' +
            '\n' +
            '// rest 收集剩余\n' +
            'const [head, ...tail] = [1, 2, 3]  // head=1, tail=[2,3]\n' +
            '\n' +
            '// 嵌套解构\n' +
            'const [[a], [b]] = [[1], [2]]      // a=1, b=2\n' +
            '\n' +
            '// 交换变量\n' +
            '[a, b] = [b, a]\n' +
            '```\n\n' +
            '解构支持跳过元素（用逗号占位）、默认值、嵌套、rest 模式。' +
            '这些组合让解构能应对复杂的提取需求。\n\n' +
            '## 解构特性表\n\n' +
            '| 特性 | 语法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 基本解构 | `[a, b] = arr` | 按位置赋值 |\n' +
            '| 跳过元素 | `[a, , c]` | 逗号占位 |\n' +
            '| 默认值 | `[a = 10]` | 缺失时用默认 |\n' +
            '| rest 收集 | `[a, ...rest]` | 剩余收集为数组 |\n' +
            '| 嵌套 | `[[a], [b]]` | 多层结构提取 |\n' +
            '| 交换 | `[a, b] = [b, a]` | 无需临时变量 |\n' +
            '| 函数参数 | `function fn([a, b])` | 参数位置解构 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 基本解构、跳过、默认值\n' +
            'const [a, b, c] = [1, 2, 3]\n' +
            'console.log(a, b, c)  // 1 2 3\n' +
            'const [first, , third] = [10, 20, 30]\n' +
            'console.log(first, third)  // 10 30\n' +
            'const [x = 99] = []\n' +
            'console.log(x)  // 99\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 交换变量与 rest 收集\n' +
            'let a = 1, b = 2\n' +
            '[a, b] = [b, a]  // 一行交换，无需临时变量\n' +
            'console.log(a, b)  // 2 1\n' +
            'const [head, ...tail] = [1, 2, 3, 4]\n' +
            'console.log(head)  // 1\n' +
            'console.log(tail)  // [2,3,4]\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 函数返回多值 + 解构接收（Go 风格）\n' +
            'function fetchUser() {\n' +
            '  return [{ name: "小明", age: 20 }, null]  // [data, error]\n' +
            '}\n' +
            'const [user, error] = fetchUser()\n' +
            'console.log(user.name)  // 小明\n' +
            '```\n\n' +
            '```js\n' +
            '// 4. 正则匹配结果解构\n' +
            'const [full, year, month] = "2024-03".match(/(\\d+)-(\\d+)/)\n' +
            'console.log(full, year, month)  // 2024-03 2024 03\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **解构是浅拷贝**：基本类型复制值，引用类型复制引用，修改解构出的对象会影响原数组中的对象。\n' +
            '2. **缺失元素为 undefined**：`const [a, b] = [1]` 中 b 为 undefined，可用默认值 `b = 0` 处理。\n' +
            '3. **rest 必须在最后**：`const [...rest, last] = arr` 语法错误，rest 只能是最后一个模式。\n' +
            '4. **交换需已有变量**：`[a, b] = [b, a]` 中 a、b 必须已声明（let），const 声明的不能重新赋值。\n' +
            '5. **解构 null/undefined 会报错**：`const [a] = null` 抛出 TypeError，因为无法对 null 做模式匹配。\n\n' +
            '## 实际应用\n\n' +
            'React Hooks 大量使用数组解构：`const [count, setCount] = useState(0)`，' +
            'useState 返回 [状态, 设置函数]，解构后命名使用。这是函数组件管理状态的核心模式。' +
            '处理正则匹配 `const [full, group] = str.match(re)`、解析坐标 `[x, y] = point` 等场景，' +
            '解构让多值提取一目了然。' +
            '交换变量是解构最优雅的应用：`[a, b] = [b, a]` 一行完成，无需临时变量。' +
            '函数返回多值时，约定返回数组再用解构接收：`const [data, error] = await fetch()`，' +
            '这是 Go 风格错误处理在 JS 中的体现。\n\n' +
            '## 扩展知识\n\n' +
            '- **解构的本质是模式匹配**：左侧的模式与右侧结构对应，匹配的值被赋给对应变量。理解这个心智模型，再复杂的解构都能轻松拆解。\n' +
            '- **对象解构**：`const { name, age } = user` 按属性名提取，比数组解构更常用，详见对象章节。\n' +
            '- **函数参数解构**：`function fn({ x, y })` 让函数参数自文档化，是配置对象的标准写法。\n' +
            '- **解构与默认值组合**：`function fn([a = 0, b = 1] = [])` 实现位置参数可选，但对象解构通常更清晰。',
          examples: [
            {
              title: '基本解构',
              code:
                'const [a, b, c] = [1, 2, 3]\n' +
                'console.log(a, b, c)  // 1 2 3\n' +
                '// 跳过元素\n' +
                'const [first, , third] = [10, 20, 30]\n' +
                'console.log(first, third)  // 10 30\n' +
                '// 默认值\n' +
                'const [x = 99] = []\n' +
                'console.log(x)  // 99',
              explanation:
                '解构按位置匹配。逗号占位跳过元素。未匹配到时用默认值。' +
                '这让从数组取值变得声明式，特别适合处理固定结构的数据。',
            },
            {
              title: '交换变量与 rest 收集',
              code:
                'let a = 1, b = 2\n' +
                '[a, b] = [b, a]  // 一行交换，无需临时变量\n' +
                'console.log(a, b)  // 2 1\n' +
                'const [head, ...tail] = [1, 2, 3, 4]\n' +
                'console.log(head)  // 1\n' +
                'console.log(tail)  // [2,3,4]',
              explanation:
                '交换变量是解构的经典应用，无需第三个临时变量。' +
                'rest 模式 ...tail 收集剩余元素为数组，常用于"取首元素，其余作为列表"的场景。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '解构数组 [5, 6] 到变量 a 和 b，输出 a + b 的结果。',
              starter_code:
                'const [a, b] = [5, 6]\n' +
                'console.log(a + ___)',
              expected_output: '11',
              hints: [
                '输出 a + b',
                '把 ___ 替换为 b',
                '5 + 6 = 11',
              ],
            },
            {
              type: 'output-match',
              prompt: '解构 [1, 2, 3, 4]，取第一个为 first，用 rest 收集其余为 rest，' +
                '输出 rest 的长度。',
              starter_code:
                'const [first, ...rest] = [1, 2, 3, 4]\n' +
                'console.log(rest.___)',
              expected_output: '3',
              hints: [
                '求数组长度用 length 属性',
                '把 ___ 替换为 length',
                'rest 是 [2,3,4]，长度 3',
              ],
            },
            {
              type: 'output-match',
              prompt: '用解构交换 a=10, b=20 的值，交换后输出 a。',
              starter_code:
                'let a = 10, b = 20\n' +
                '[a, b] = [___, ___]\n' +
                'console.log(a)',
              expected_output: '20',
              hints: [
                '交换：[a, b] = [b, a]',
                '把两个 ___ 分别替换为 b 和 a',
                '交换后 a 变成 20',
              ],
            },
          ],
          realWorldScenario:
            'React Hooks 大量使用数组解构：`const [count, setCount] = useState(0)`，' +
            'useState 返回 [状态, 设置函数]，解构后命名使用。这是函数组件管理状态的核心模式。' +
            '处理正则匹配 `const [full, group] = str.match(re)`、解析坐标 `[x, y] = point` 等场景，' +
            '解构让多值提取一目了然。',
        },
        {
          id: 'js-ch4-l4',
          title: 'spread 与 rest',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            'spread 展开运算符 `...` 是 ES6 最实用的特性之一，虽与 rest 同符号但语义相反。' +
            '区分 spread 与 rest 的关键看"位置"：在调用/字面量处（展开）是 spread，在定义/赋值左侧（收集）是 rest。' +
            '这个区分是理解两者用法的关键。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// spread（展开）：用在调用和字面量处\n' +
            'Math.max(...[1, 2, 3])        // 展开为数组参数\n' +
            'const merged = [...a, ...b]   // 展开合并数组\n' +
            'const copy = [...arr]         // 展开拷贝数组\n' +
            'const obj = { ...src }        // 展开拷贝对象（ES2018）\n' +
            '\n' +
            '// rest（收集）：用在函数定义和赋值左侧\n' +
            'function fn(...args) {}       // 收集参数为数组\n' +
            'const [head, ...rest] = arr   // 收集剩余元素\n' +
            'const { a, ...others } = obj  // 收集剩余属性\n' +
            '```\n\n' +
            '在数组字面量中，`[...a, ...b]` 展开数组拼接，替代 `a.concat(b)`。' +
            '在函数调用中，`fn(...arr)` 把数组展开为参数，替代 `fn.apply(null, arr)`。' +
            '浅拷贝数组：`const copy = [...arr]`，简洁直观。spread 让"数组与参数"的转换变得自然。\n\n' +
            '## spread/rest 用法对照表\n\n' +
            '| 场景 | 形式 | 语义 | 示例 |\n' +
            '|------|------|------|------|\n' +
            '| 函数调用 | `fn(...arr)` | 展开 | `Math.max(...[1,2])` |\n' +
            '| 数组字面量 | `[...a, ...b]` | 展开 | 合并数组 |\n' +
            '| 数组拷贝 | `[...arr]` | 展开 | 浅拷贝 |\n' +
            '| 对象字面量 | `{ ...obj }` | 展开 | 浅拷贝对象 |\n' +
            '| 字符串 | `[..."abc"]` | 展开 | 拆字符数组 |\n' +
            '| 函数定义 | `function(...a)` | 收集 | rest 参数 |\n' +
            '| 数组解构 | `[a, ...r]` | 收集 | 剩余元素 |\n' +
            '| 对象解构 | `{ a, ...r }` | 收集 | 剩余属性 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. spread 合并与拷贝\n' +
            'const a = [1, 2]\n' +
            'const b = [3, 4]\n' +
            'const merged = [...a, ...b]\n' +
            'console.log(merged)  // [1,2,3,4]\n' +
            'const copy = [...a]\n' +
            'copy.push(99)\n' +
            'console.log(a)    // [1,2]（原数组不变）\n' +
            'console.log(copy) // [1,2,99]\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 字符串拆字符与函数调用\n' +
            'const chars = [..."hello"]\n' +
            'console.log(chars)  // ["h","e","l","l","o"]\n' +
            'const nums = [3, 1, 4]\n' +
            'console.log(Math.max(...nums))  // 4\n' +
            'console.log(Math.min(...nums))  // 1\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 对象 spread（合并配置）\n' +
            'const defaults = { theme: "light", lang: "zh", timeout: 5000 }\n' +
            'const userConfig = { theme: "dark", timeout: 3000 }\n' +
            'const finalConfig = { ...defaults, ...userConfig }\n' +
            'console.log(finalConfig)  // { theme:"dark", lang:"zh", timeout:3000 }\n' +
            '// 后展开的覆盖前面同名的属性\n' +
            '```\n\n' +
            '```js\n' +
            '// 4. rest 收集\n' +
            'function sum(...nums) { return nums.reduce((a, b) => a + b, 0) }\n' +
            'console.log(sum(1, 2, 3))  // 6\n' +
            'const [head, ...tail] = [1, 2, 3, 4]\n' +
            'console.log(head, tail)  // 1 [2,3,4]\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **spread 是浅拷贝**：只展开一层，嵌套数组/对象仍是引用。`[...[1, [2]]]` 得到 `[1, [2]]`，内层数组仍共享引用。深拷贝需要递归或 `JSON.parse(JSON.stringify())`。\n' +
            '2. **对象 spread 只复制可枚举自有属性**：原型链上的属性不会被复制。\n' +
            '3. **spread 顺序决定覆盖**：`{ ...a, ...b }` 中 b 的同名属性覆盖 a，用于"默认值 + 用户配置"合并。\n' +
            '4. **rest 必须在最后**：函数参数和解构中，rest 都只能是最后一个。\n' +
            '5. **spread 不可用于非可迭代对象**：`...42` 会报错，因为数字不可迭代。对象 spread（ES2018）是特殊例外，不要求可迭代。\n\n' +
            '## 实际应用\n\n' +
            '合并配置是 spread 的高频场景：`const finalConfig = { ...defaultConfig, ...userConfig }`，' +
            '用户配置覆盖默认值。React 中合并 state：`setState({ ...state, count: state.count + 1 })`。' +
            '把 DOM NodeList 转成数组以使用数组方法：`[...document.querySelectorAll(".item")]`。' +
            'spread 让"组合"操作变得极其简洁，是现代 JS 代码的标志性写法。' +
            '经典应用：合并数组、复制数组、把 NodeList 转 Array、把字符串拆成字符。\n\n' +
            '## 扩展知识\n\n' +
            '- **对象 rest/spread（ES2018）**：`{ ...obj }` 浅拷贝对象，`const { a, ...rest } = obj` 收集剩余属性。\n' +
            '- **深拷贝替代方案**：`structuredClone(obj)`（现代浏览器原生）可深拷贝含循环引用的对象，优于 JSON 方案。\n' +
            '- **spread 与 Set 去重**：`[...new Set([1,1,2])]` 得 `[1,2]`，是数组去重的惯用写法。\n' +
            '- **性能**：大数组 spread 拷贝比 Array.from 慢一些，但可读性更好；超大数据集考虑循环拷贝。',
          examples: [
            {
              title: 'spread 合并与拷贝',
              code:
                'const a = [1, 2]\n' +
                'const b = [3, 4]\n' +
                'const merged = [...a, ...b]\n' +
                'console.log(merged)  // [1,2,3,4]\n' +
                'const copy = [...a]\n' +
                'copy.push(99)\n' +
                'console.log(a)    // [1,2]（原数组不变）\n' +
                'console.log(copy) // [1,2,99]',
              explanation:
                'spread 合并数组比 concat 更直观。`[...a]` 创建浅拷贝，修改 copy 不影响 a。' +
                '注意这是浅拷贝，嵌套对象仍是共享引用。',
            },
            {
              title: '字符串拆字符与函数调用',
              code:
                '// 把字符串拆成字符数组\n' +
                'const chars = [..."hello"]\n' +
                'console.log(chars)  // ["h","e","l","l","o"]\n' +
                '// 展开数组作为函数参数\n' +
                'const nums = [3, 1, 4]\n' +
                'console.log(Math.max(...nums))  // 4\n' +
                'console.log(Math.min(...nums))  // 1',
              explanation:
                '字符串是可迭代对象，spread 把它拆成字符数组，比 "hello".split("") 更语义化。' +
                'Math.max 不接受数组，用 spread 展开是传数组给可变参函数的标准技巧。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 spread 合并 [1, 2] 和 [3, 4] 为新数组，输出结果。',
              starter_code:
                'const a = [1, 2]\n' +
                'const b = [3, 4]\n' +
                'const merged = [___, ___]\n' +
                'console.log(merged)',
              expected_output: '[1,2,3,4]',
              hints: [
                '展开 a 和 b：[...a, ...b]',
                '把两个 ___ 分别替换为 ...a 和 ...b',
                'spread 把数组展开为元素',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 spread 拷贝 [1, 2, 3] 为 copy，向 copy 添加 4，输出 copy。',
              starter_code:
                'const arr = [1, 2, 3]\n' +
                'const copy = [...arr, ___]\n' +
                'console.log(copy)',
              expected_output: '[1,2,3,4]',
              hints: [
                '添加元素 4',
                '把 ___ 替换为 4',
                'copy 应为 [1,2,3,4]',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 spread 把字符串 "abc" 拆成字符数组，输出结果。',
              starter_code:
                'const chars = [..."___"]\n' +
                'console.log(chars)',
              expected_output: '["a","b","c"]',
              hints: [
                '把字符串 "abc" 放入展开',
                '把 ___ 替换为 abc',
                'spread 把字符串拆成字符',
              ],
            },
          ],
          realWorldScenario:
            '合并配置是 spread 的高频场景：`const finalConfig = { ...defaultConfig, ...userConfig }`，' +
            '用户配置覆盖默认值。React 中合并 state：`setState({ ...state, count: state.count + 1 })`。' +
            '把 DOM NodeList 转成数组以使用数组方法：`[...document.querySelectorAll(".item")]`。' +
            'spread 让"组合"操作变得极其简洁，是现代 JS 代码的标志性写法。',
        },
      ],
    },
    // ================================================================
    // 第 5 章：对象
    // ================================================================
    {
      id: 'js-ch5',
      title: '对象',
      order: 4,
      lessons: [
        {
          id: 'js-ch5-l1',
          title: '对象基础',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '对象（Object）是 JavaScript 中最重要的引用类型，用于存储键值对（key-value pairs）集合。' +
            '在 JS 中，对象是组织数据的基本单位——用户、商品、配置、API 响应都用对象表示。' +
            '对象之所以存在，是因为现实世界的数据往往是结构化的：一个用户有姓名、年龄、邮箱等多个属性，' +
            '用对象可以把这些相关数据打包在一起，便于传递和管理。\n\n' +
            '对象字面量 `{ name: "小明", age: 20 }` 是最常见的创建方式。键（key）是字符串（或 Symbol），' +
            '值（value）可以是任意类型，包括函数、数组、其他对象。当属性值为函数时，该属性称为"方法"。' +
            'ES6 之后，对象还支持计算属性名、方法简写、属性简写等便捷语法。\n\n' +
            '理解对象的关键在于三件事：一是属性访问方式（点表示法与方括号），二是引用语义（赋值传递引用而非副本），' +
            '三是属性的动态性（可随时增删改）。掌握这三点，就能正确操作绝大多数对象场景。' +
            '对象适合表示"实体"——有多个属性的个体；而数组适合表示"列表"——同类型元素的有序集合。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 对象字面量创建\n' +
            'const user = {\n' +
            '  name: "小明",          // 字符串值\n' +
            '  age: 20,               // 数字值\n' +
            '  "favorite-color": "蓝色", // 含连字符的键需引号\n' +
            '  greet() { return "hi" } // 方法简写\n' +
            '}\n' +
            '\n' +
            '// 2. 属性访问两种方式\n' +
            'user.name              // 点表示法（键须是合法标识符）\n' +
            'user["favorite-color"] // 方括号（任意字符串键）\n' +
            'const key = "age"\n' +
            'user[key]              // 方括号 + 变量（动态键）\n' +
            '\n' +
            '// 3. 属性的增删改\n' +
            'user.email = "xm@test.com"  // 添加\n' +
            'user.age = 21               // 修改\n' +
            'delete user.email           // 删除\n' +
            '\n' +
            '// 4. 判断属性是否存在\n' +
            '"name" in user              // true（含继承属性）\n' +
            'user.hasOwnProperty("name") // true（仅自身属性）\n' +
            '\n' +
            '// 5. 可选链安全访问\n' +
            'obj?.user?.address?.city    // 任一层 null/undefined 返回 undefined\n' +
            '```\n\n' +
            '## 方法/属性表格\n\n' +
            '| 操作 | 语法 | 说明 | 返回值 |\n' +
            '|------|------|------|--------|\n' +
            '| 点访问 | `obj.key` | 键须为合法标识符 | 属性值 |\n' +
            '| 方括号访问 | `obj["key"]` | 任意字符串键 | 属性值 |\n' +
            '| 动态键访问 | `obj[var]` | 变量作为键 | 属性值 |\n' +
            '| 添加/修改 | `obj.key = val` | 不存在则添加，存在则修改 | 赋值 |\n' +
            '| 删除 | `delete obj.key` | 移除自身属性 | true/false |\n' +
            '| 判断存在 | `"key" in obj` | 含原型链属性 | true/false |\n' +
            '| 判断自有 | `obj.hasOwnProperty("key")` | 仅自身属性 | true/false |\n' +
            '| 可选链 | `obj?.key` | 安全访问 | 值或 undefined |\n' +
            '| 取所有键 | `Object.keys(obj)` | 自有可枚举键 | 字符串数组 |\n' +
            '| 取所有值 | `Object.values(obj)` | 自有可枚举值 | 数组 |\n' +
            '| 取键值对 | `Object.entries(obj)` | 自有可枚举对 | [[k,v],...] |\n' +
            '| 合并 | `Object.assign({}, a, b)` | 浅合并 | 新对象 |\n' +
            '| 冻结 | `Object.freeze(obj)` | 不可改不可删 | 被冻结对象 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 创建与基本访问\n' +
            'const user = {\n' +
            '  name: "小明",\n' +
            '  age: 20,\n' +
            '  "favorite-color": "蓝色"\n' +
            '}\n' +
            'console.log(user.name)              // 小明（点表示法）\n' +
            'console.log(user["favorite-color"]) // 蓝色（方括号）\n' +
            'const key = "age"\n' +
            'console.log(user[key])              // 20（动态键）\n' +
            'user.email = "xm@test.com"          // 动态添加\n' +
            'console.log(user.email)             // xm@test.com\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 嵌套对象与可选链\n' +
            'const data = {\n' +
            '  user: { name: "小明", address: { city: "北京" } }\n' +
            '}\n' +
            'console.log(data.user.address.city)  // 北京\n' +
            '// 可选链避免报错\n' +
            'const data2 = { user: null }\n' +
            'console.log(data2.user?.address?.city)  // undefined（而非报错）\n' +
            'console.log("name" in data.user)        // true\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 引用语义演示\n' +
            'const a = { x: 1 }\n' +
            'const b = a        // b 和 a 指向同一对象\n' +
            'b.x = 2\n' +
            'console.log(a.x)   // 2（a 也被改了！）\n' +
            '// 浅拷贝避免共享\n' +
            'const c = { ...a } // 展开拷贝\n' +
            'c.x = 99\n' +
            'console.log(a.x)   // 2（a 不受影响）\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **引用语义是最大坑点**：`const b = a; b.x = 2` 会改变 a.x，因为两者指向同一对象。' +
            '要避免需浅拷贝 `{ ...obj }` 或深拷贝 `structuredClone(obj)`。\n' +
            '2. **点表示法限制**：键含空格、连字符、数字开头等特殊字符时不能用点表示法，必须用方括号。' +
            '`obj.1key` 会报错，应用 `obj["1key"]`。\n' +
            '3. **访问不存在的属性返回 undefined**：`obj.notExist` 返回 undefined 而非报错，' +
            '但继续访问深层会报错（`obj.notExist.x` 抛 TypeError）。可选链 `?.` 解决此问题。\n' +
            '4. **`in` 与 `hasOwnProperty` 区别**：`in` 检查原型链，`hasOwnProperty` 只检查自身属性。' +
            '遍历自有属性优先用 `hasOwnProperty` 或 `Object.keys()`。\n' +
            '5. **键会被转为字符串**：`obj[1]` 和 `obj["1"]` 是同一个属性，数字键自动转字符串。' +
            'Symbol 是唯一的例外，Symbol 键不会被转为字符串。\n' +
            '6. **属性顺序**：ES2015+ 规定整数键按升序排列，字符串键按添加顺序排列。' +
            '依赖顺序时应使用数组而非对象。\n\n' +
            '## 实际应用\n\n' +
            '用户资料、商品信息、API 响应都是对象。例如用户对象 `{ id, name, email, role, profile: { avatar, bio } }`。' +
            '前端状态管理（Redux/MobX）本质是操作对象树。理解引用语义尤其重要——' +
            '修改 state 必须返回新对象（不可变更新），否则框架检测不到变化，这是 React 性能优化的核心。\n\n' +
            '配置合并是另一高频场景：`const finalConfig = { ...defaultConfig, ...userConfig }`，' +
            '用户配置覆盖默认值。处理 API 响应时常用可选链安全取值：`res?.data?.items?.[0]`，' +
            '避免因字段缺失而崩溃。对象是 JS 数据建模的基石，掌握它才能写出可维护的业务代码。\n\n' +
            '## 扩展知识\n\n' +
            '- **属性简写（ES6）**：当键名与变量名相同时可简写，`{ name, age }` 等价于 `{ name: name, age: age }`。\n' +
            '- **计算属性名**：`{ [key]: value }` 允许用变量作为键，常用于动态构建对象。\n' +
            '- **Object.create()**：基于指定原型创建对象，是实现原型继承的底层方式。\n' +
            '- **Map vs Object**：Map 允许任意类型键（含对象），保持插入顺序，适合频繁增删的场景；' +
            'Object 键只能是字符串/Symbol，适合静态结构数据。\n' +
            '- **深拷贝方案**：`structuredClone(obj)`（现代浏览器原生）可深拷贝含循环引用的对象，' +
            '优于 `JSON.parse(JSON.stringify())`（后者会丢失函数、undefined、Symbol、循环引用报错）。',
          examples: [
            {
              title: '创建与访问',
              code:
                'const user = {\n' +
                '  name: "小明",\n' +
                '  age: 20,\n' +
                '  "favorite-color": "蓝色"  // 含连字符的键需引号\n' +
                '}\n' +
                'console.log(user.name)              // 点表示法\n' +
                'console.log(user["favorite-color"]) // 方括号（特殊键）\n' +
                'const key = "age"\n' +
                'console.log(user[key])              // 动态键\n' +
                'user.email = "xm@test.com"          // 动态添加\n' +
                'console.log(user.email)',
              explanation:
                '点表示法适合常规键，方括号适合特殊字符键和动态键。' +
                '动态添加属性直接赋值即可。理解两种访问方式能灵活应对各种场景。',
            },
            {
              title: '嵌套与可选链',
              code:
                'const data = {\n' +
                '  user: { name: "小明", address: { city: "北京" } }\n' +
                '}\n' +
                'console.log(data.user.address.city)  // 北京\n' +
                '// 可选链安全访问，避免报错\n' +
                'const data2 = { user: null }\n' +
                'console.log(data2.user?.address?.city)  // undefined（而非报错）\n' +
                'console.log("name" in data.user)       // true（判断属性存在）',
              explanation:
                '可选链 ?. 在访问深层属性时若遇到 null/undefined 直接返回 undefined，避免抛错。' +
                'in 运算符判断属性是否存在（含继承属性），hasOwnProperty 只判断自身属性。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建对象 person，含属性 name 为 "小明"、age 为 20。输出 person.name。',
              starter_code:
                'const person = {\n' +
                '  name: "小明",\n' +
                '  age: ___\n' +
                '}\n' +
                'console.log(person.name)',
              expected_output: '小明',
              hints: [
                'age 赋值为 20',
                '把 ___ 替换为 20',
                '本题输出 person.name 即 "小明"',
              ],
            },
            {
              type: 'output-match',
              prompt: '对象 data 含嵌套 { user: { score: 95 } }，输出 data.user.score。',
              starter_code:
                'const data = { user: { score: 95 } }\n' +
                'console.log(data.___.score)',
              expected_output: '95',
              hints: [
                '访问 data.user.score',
                '把 ___ 替换为 user',
                'user 是嵌套对象的键',
              ],
            },
            {
              type: 'output-match',
              prompt: '用方括号访问含特殊字符的键：对象 { "a-b": 7 }，输出键 "a-b" 的值。',
              starter_code:
                'const obj = { "a-b": 7 }\n' +
                'console.log(obj[___])',
              expected_output: '7',
              hints: [
                '方括号内传字符串 "a-b"',
                '把 ___ 替换为 "a-b"',
                '含连字符的键必须用方括号访问',
              ],
            },
          ],
          realWorldScenario:
            '用户资料、商品信息、API 响应都是对象。例如用户对象 `{ id, name, email, role, profile: { avatar, bio } }`。' +
            '前端状态管理（Redux/MobX）本质是操作对象树。理解引用语义尤其重要——' +
            '修改 state 必须返回新对象（不可变更新），否则框架检测不到变化，这是 React 性能优化的核心。',
        },
        {
          id: 'js-ch5-l2',
          title: '属性与方法',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '对象的属性值为函数时称为"方法"（method）。方法是对象的行为——属性描述"是什么"，方法描述"能做什么"。' +
            '例如 `user` 对象有 `name` 属性（是什么）和 `greet()` 方法（能做什么）。方法通过 `this` 访问所属对象的其他属性，' +
            '这是面向对象编程的基础。this 的指向是 JS 最复杂的概念之一，取决于调用方式而非定义方式。\n\n' +
            'ES6 提供方法简写：`{ greet() {} }` 等价于 `{ greet: function() {} }`，让对象字面量更紧凑。' +
            '计算属性名（computed property）允许用变量作为键：`{ [key]: value }`，让动态构建对象变得方便。' +
            '属性简写则当键名与变量名相同时可省略：`{ name }` 等价于 `{ name: name }`。这些 ES6 语法是现代代码的默认写法。\n\n' +
            '遍历对象有专用 API：`Object.keys/values/entries`，它们只返回自身可枚举属性，比 `for...in` 更安全（后者含原型链）。' +
            '合并对象可用 `Object.assign()` 或 spread `{...a, ...b}`。这些静态方法让对象的操作变得系统化、可预测。' +
            '掌握它们能避免手写循环、减少出错。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 方法定义的三种写法\n' +
            'const obj = {\n' +
            '  // 方法简写（ES6，推荐）\n' +
            '  greet() { return "hi" },\n' +
            '  // 传统函数表达式\n' +
            '  greet2: function() { return "hi" },\n' +
            '  // 箭头函数（注意：没有自己的 this）\n' +
            '  greet3: () => "hi"\n' +
            '}\n' +
            '\n' +
            '// 2. this 指向所属对象\n' +
            'const user = {\n' +
            '  name: "小明",\n' +
            '  greet() { return `你好，我是${this.name}` }\n' +
            '}\n' +
            'user.greet()  // this 指向 user\n' +
            '\n' +
            '// 3. 计算属性名\n' +
            'const field = "score"\n' +
            'const student = { name: "小红", [field]: 95 }\n' +
            '\n' +
            '// 4. 属性简写\n' +
            'const name = "小明", age = 20\n' +
            'const user2 = { name, age }  // 等价于 { name: name, age: age }\n' +
            '\n' +
            '// 5. 遍历对象\n' +
            'Object.keys(obj)     // ["k1","k2",...] 键数组\n' +
            'Object.values(obj)   // [v1,v2,...] 值数组\n' +
            'Object.entries(obj)  // [["k1",v1],...] 键值对数组\n' +
            '\n' +
            '// 6. 合并对象\n' +
            'Object.assign({}, a, b)  // 浅合并到新对象\n' +
            'const merged = { ...a, ...b }  // spread 合并\n' +
            '```\n\n' +
            '## 方法/属性表格\n\n' +
            '| 方法/语法 | 参数 | 返回值 | 说明 |\n' +
            '|-----------|------|--------|------|\n' +
            '| 方法简写 | 无 | 函数 | `{ greet() {} }` 紧凑定义 |\n' +
            '| 计算属性名 | `[表达式]` | 动态键 | `{ [key]: val }` 运行时求值 |\n' +
            '| 属性简写 | 变量名 | 键值对 | `{ name }` 等价 `{ name: name }` |\n' +
            '| `Object.keys(o)` | 对象 | string[] | 自有可枚举键 |\n' +
            '| `Object.values(o)` | 对象 | any[] | 自有可枚举值 |\n' +
            '| `Object.entries(o)` | 对象 | [string,any][] | 键值对数组 |\n' +
            '| `Object.fromEntries(arr)` | 键值对数组 | 对象 | entries 的逆操作 |\n' +
            '| `Object.assign(t, ...s)` | 目标, 源 | 目标 | 浅合并到 target |\n' +
            '| `Object.freeze(o)` | 对象 | 对象 | 冻结（不可改删） |\n' +
            '| `Object.seal(o)` | 对象 | 对象 | 密封（可改不可增删） |\n' +
            '| `Object.getPrototypeOf(o)` | 对象 | 原型 | 获取原型 |\n' +
            '| `Object.defineProperty(o,k,desc)` | 对象,键,描述符 | 对象 | 精确定义属性 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 方法简写与 this\n' +
            'const user = {\n' +
            '  name: "小明",\n' +
            '  greet() {\n' +
            '    return `你好，我是${this.name}`\n' +
            '  }\n' +
            '}\n' +
            'console.log(user.greet())  // 你好，我是小明\n' +
            '// 注意：把方法赋给变量后 this 丢失\n' +
            'const fn = user.greet\n' +
            'console.log(fn())  // 你好，我是undefined（this 不再指向 user）\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. Object.keys / values / entries 遍历\n' +
            'const user = { name: "小明", age: 20, city: "北京" }\n' +
            'console.log(Object.keys(user))    // ["name","age","city"]\n' +
            'console.log(Object.values(user))  // ["小明",20,"北京"]\n' +
            'console.log(Object.entries(user)) // [["name","小明"],["age",20],["city","北京"]]\n' +
            '// 遍历键值（推荐方式）\n' +
            'for (const [k, v] of Object.entries(user)) {\n' +
            '  console.log(k + ": " + v)\n' +
            '}\n' +
            '// Object.fromEntries 逆向构建\n' +
            'const arr = [["a", 1], ["b", 2]]\n' +
            'console.log(Object.fromEntries(arr))  // { a: 1, b: 2 }\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 计算属性名动态构建对象\n' +
            'const field = "score"\n' +
            'const student = {\n' +
            '  name: "小红",\n' +
            '  [field]: 95,         // 动态键\n' +
            '  ["grade_" + 1]: "A"  // 表达式作为键\n' +
            '}\n' +
            'console.log(student.score)    // 95\n' +
            'console.log(student.grade_1)  // A\n' +
            '// 实用：把数组转为以 id 为键的对象映射\n' +
            'const users = [{ id: 1, name: "A" }, { id: 2, name: "B" }]\n' +
            'const userMap = Object.fromEntries(users.map(u => [u.id, u]))\n' +
            'console.log(userMap[1].name)  // A（O(1) 查找）\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **箭头函数没有自己的 this**：对象方法不要用箭头函数，否则 `this` 不指向对象而是外层作用域。' +
            '箭头函数适合回调，不适合做对象方法。\n' +
            '2. **this 指向取决于调用方式**：`obj.method()` 中 this 指向 obj；' +
            '把方法赋给变量后调用 `const fn = obj.method; fn()` 中 this 是 undefined（严格模式）或全局对象。\n' +
            '3. **Object.keys 只返回自身可枚举属性**：不含原型链上的属性，也不含 Symbol 键。' +
            '获取 Symbol 键用 `Object.getOwnPropertySymbols()`。\n' +
            '4. **Object.assign 是浅合并**：嵌套对象仍是引用共享，深合并需手动递归或用 lodash.merge。\n' +
            '5. **Object.freeze 只是浅冻结**：顶层属性不可改，但嵌套对象仍可改。深冻结需递归 freeze。\n' +
            '6. **属性简写要求键名与变量名一致**：`{ name }` 中 name 必须是已定义的变量，否则报错。\n\n' +
            '## 实际应用\n\n' +
            '对象方法广泛用于封装行为：计数器 `{ count: 0, increment() { this.count++ } }`、' +
            '购物车 `{ items: [], add(item) {}, total() {} }`。计算属性名常用于根据数据动态生成键，' +
            '如把数组转成以 id 为键的查找表（lookup table），将 O(n) 查找优化为 O(1)。\n\n' +
            'Object.entries 配合 map/filter 让对象也能享受函数式数据处理：' +
            '`Object.entries(config).filter(([k,v]) => typeof v === "string")`。' +
            '配置合并是 Object.assign/spread 的高频场景：`{ ...defaults, ...overrides }`。' +
            '这些模式在前端状态管理、API 数据处理、配置系统中无处不在。\n\n' +
            '## 扩展知识\n\n' +
            '- **getter/setter**：`{ get name() {}, set name(v) {} }` 定义访问器属性，可在读写时执行逻辑。\n' +
            '- **Object.defineProperty**：精确定义属性的可枚举、可配置、可写性，是 Vue2 响应式的底层原理。\n' +
            '- **Proxy**：ES6 代理对象，拦截对象操作（读、写、删等），是 Vue3 响应式的底层原理，比 defineProperty 更强大。\n' +
            '- **Object.hasOwn()**：ES2022 新增，替代 `hasOwnProperty`，更安全（防止对象覆盖该方法）。\n' +
            '- **性能**：Object.keys/values/entries 返回数组有创建开销，超高频遍历可缓存结果。' +
            'Map 在频繁增删场景下性能优于 Object。',
          examples: [
            {
              title: '方法简写与 this',
              code:
                'const user = {\n' +
                '  name: "小明",\n' +
                '  greet() {\n' +
                '    return `你好，我是${this.name}`\n' +
                '  }\n' +
                '}\n' +
                'console.log(user.greet())  // 你好，我是小明',
              explanation:
                'greet() 是方法简写，this 指向 user（通过 user.greet() 调用）。' +
                'this.name 访问同对象的 name 属性。注意 this 的指向取决于调用方式，后面会详讲。',
            },
            {
              title: 'Object.keys / values / entries',
              code:
                'const user = { name: "小明", age: 20, city: "北京" }\n' +
                'console.log(Object.keys(user))    // ["name","age","city"]\n' +
                'console.log(Object.values(user))  // ["小明",20,"北京"]\n' +
                'console.log(Object.entries(user)) // [["name","小明"],["age",20],["city","北京"]]\n' +
                '// 遍历键值\n' +
                'for (const [k, v] of Object.entries(user)) {\n' +
                '  console.log(k + ": " + v)\n' +
                '}',
              explanation:
                '这三个方法只返回自身可枚举属性，不含原型链。entries 返回的二元组数组配合解构，' +
                '是遍历对象键值的标准方式，比 for...in 更安全可靠。',
            },
            {
              title: '计算属性名',
              code:
                'const field = "score"\n' +
                'const student = {\n' +
                '  name: "小红",\n' +
                '  [field]: 95,         // 动态键\n' +
                '  ["grade_" + 1]: "A"  // 表达式作为键\n' +
                '}\n' +
                'console.log(student.score)    // 95\n' +
                'console.log(student.grade_1)  // A',
              explanation:
                '计算属性名用 [表达式] 作为键，运行时求值。常用于根据变量动态生成对象结构，' +
                '如把数组转为以某字段为键的对象映射，提升查找性能。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '对象 counter 有方法 increment()，调用时让 count 加 1 并返回新值。' +
                '创建后调用 increment() 一次，输出结果。',
              starter_code:
                'const counter = {\n' +
                '  count: 0,\n' +
                '  increment() {\n' +
                '    this.count = this.count + ___\n' +
                '    return this.count\n' +
                '  }\n' +
                '}\n' +
                'console.log(counter.increment())',
              expected_output: '1',
              hints: [
                '每次加 1',
                '把 ___ 替换为 1',
                'count 从 0 加 1 得 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Object.keys 获取 {a:1, b:2, c:3} 的所有键，输出键数组的长度。',
              starter_code:
                'const obj = { a: 1, b: 2, c: 3 }\n' +
                'console.log(Object.keys(obj).___)',
              expected_output: '3',
              hints: [
                '求数组长度用 length',
                '把 ___ 替换为 length',
                '该对象有 3 个键',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Object.values 获取 {x:10, y:20, z:30} 的所有值，用 reduce 求和，输出结果。',
              starter_code:
                'const obj = { x: 10, y: 20, z: 30 }\n' +
                'const sum = Object.values(obj).reduce((a, b) => a + b, ___)\n' +
                'console.log(sum)',
              expected_output: '60',
              hints: [
                'reduce 初始值传 0',
                '把 ___ 替换为 0',
                '10+20+30 = 60',
              ],
            },
          ],
          realWorldScenario:
            '数据建模是对象方法的核心应用。例如购物车对象 `{ items: [], add(item){...}, total(){...} }`，' +
            '把数据和行为封装在一起。把列表转成映射对象提升查找性能：' +
            '`Object.fromEntries(users.map(u => [u.id, u]))` 后可用 usersById[id] O(1) 查找。' +
            'Object.entries 配合 map 让对象变换变得声明式，是处理配置和状态树的利器。',
        },
        {
          id: 'js-ch5-l3',
          title: '对象解构',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '对象解构（Object Destructuring）是 ES6 引入的语法，按"键名"从对象中提取值到变量：' +
            '`const { name, age } = user` 让 name=user.name, age=user.age。' +
            '这比 `const name = user.name; const age = user.age` 简洁得多，是处理对象数据的首选方式。' +
            '解构存在的目的是让数据提取更声明式、更简洁，减少重复的对象属性访问。\n\n' +
            '对象解构与数组解构的关键区别：对象解构按键名匹配（与顺序无关），数组解构按位置匹配。' +
            '这意味着 `const { age, name } = user` 和 `const { name, age } = user` 结果相同——' +
            '变量名必须与键名一致才能匹配。如需不同变量名，可用重命名语法 `const { name: fullName } = user`。\n\n' +
            '解构支持默认值、嵌套解构、剩余模式，组合起来非常强大。函数参数解构是它最强大的应用——' +
            '让函数接收"选项对象"并直接解构，实现具名可选参数，是现代库 API 设计的事实标准。' +
            '掌握解构能让你写出更声明式、更健壮的代码。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 基本解构\n' +
            'const { name, age } = user  // name=user.name, age=user.age\n' +
            '\n' +
            '// 2. 重命名：把 user.name 赋给变量 fullName\n' +
            'const { name: fullName } = user\n' +
            '\n' +
            '// 3. 默认值：user.age 为 undefined 时用 18\n' +
            'const { age = 18 } = user\n' +
            '\n' +
            '// 4. 重命名 + 默认值组合\n' +
            'const { name: fullName = "匿名" } = user\n' +
            '\n' +
            '// 5. 嵌套解构：提取 data.user.name\n' +
            'const { user: { name } } = data\n' +
            '\n' +
            '// 6. 剩余模式：收集剩余属性\n' +
            'const { name, ...rest } = user  // rest 含除 name 外的所有属性\n' +
            '\n' +
            '// 7. 函数参数解构（具名可选参数）\n' +
            'function fetch(url, { method = "GET", timeout = 5000 } = {}) {\n' +
            '  // method, timeout 有默认值，= {} 保证不传第二参数时不报错\n' +
            '}\n' +
            '```\n\n' +
            '## 解构语法对照表\n\n' +
            '| 语法 | 作用 | 示例 | 说明 |\n' +
            '|------|------|------|------|\n' +
            '| 基本解构 | 按键名提取 | `{ name, age } = user` | 变量名须与键名一致 |\n' +
            '| 重命名 | 改变量名 | `{ name: fullName }` | user.name → fullName |\n' +
            '| 默认值 | 缺失时用默认 | `{ age = 18 }` | 仅 undefined 触发 |\n' +
            '| 重命名+默认值 | 组合 | `{ name: fn = "匿名" }` | 两者可同时用 |\n' +
            '| 嵌套解构 | 提取深层 | `{ user: { name } }` | 直达深层属性 |\n' +
            '| 剩余模式 | 收集其余 | `{ name, ...rest }` | rest 是剩余属性对象 |\n' +
            '| 函数参数 | 具名可选 | `fn({ a, b = 2 } = {})` | 现代API设计标准 |\n' +
            '| 动态键解构 | 变量键名 | `const { [key]: val } = obj` | ES6 计算属性解构 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 基本解构与重命名默认值\n' +
            'const user = { name: "小明", age: 20, city: "北京" }\n' +
            'const { name, age } = user\n' +
            'console.log(name)  // 小明\n' +
            'console.log(age)   // 20\n' +
            '// 重命名 + 默认值\n' +
            'const { name: fullName = "匿名", email = "无" } = user\n' +
            'console.log(fullName)  // 小明\n' +
            'console.log(email)     // 无（user 无 email，用默认）\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 嵌套解构与剩余模式\n' +
            'const data = { user: { name: "小明", address: { city: "北京" } } }\n' +
            'const { user: { name, address: { city } } } = data\n' +
            'console.log(name)  // 小明\n' +
            'console.log(city)  // 北京\n' +
            '// 剩余模式\n' +
            'const { name: n, ...others } = user\n' +
            'console.log(others)  // { age: 20, city: "北京" }\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 函数参数解构（具名可选参数）\n' +
            'function createUser({ name, age = 18, role = "user" } = {}) {\n' +
            '  return { name, age, role }\n' +
            '}\n' +
            'console.log(createUser({ name: "小明" }))         // { name:"小明", age:18, role:"user" }\n' +
            'console.log(createUser({ name: "小红", age: 20 })) // { name:"小红", age:20, role:"user" }\n' +
            'console.log(createUser())                          // { name:undefined, age:18, role:"user" }\n' +
            '// = {} 保证不传参数时不报错\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **变量名须与键名一致**：`const { name } = user` 提取的是 user.name，变量名必须是 name。' +
            '若想用不同变量名必须用重命名语法 `{ name: fullName }`。\n' +
            '2. **默认值仅在 undefined 时触发**：`{ age = 18 }` 当 user.age 是 null、0、"" 时不会用默认值，' +
            '只有 undefined 才用。这是与 Python 等语言的区别。\n' +
            '3. **解构不存在的深层属性会报错**：`const { a: { b } } = {}` 报错，因为 a 是 undefined 不能继续解构。' +
            '可用默认值 `{ a: { b } = {} } = {}` 避免。\n' +
            '4. **函数参数解构记得加 `= {}`**：不传参数时 `{ name } = undefined` 会报错，' +
            '加 `= {}` 保证默认空对象。\n' +
            '5. **已声明变量解构要加括号**：`let name; { name } = obj` 会报错（被解析为块语句），' +
            '应写 `({ name } = obj)`。\n' +
            '6. **解构是浅拷贝**：嵌套对象解构后仍是引用，修改会影响原对象。\n\n' +
            '## 实际应用\n\n' +
            '函数参数解构是现代 API 设计的事实标准：axios `axios.get(url, { params, headers })`、' +
            'React 组件 `function Card({ title, children, onClick })`、lodash `_.merge(obj, { deep = true } = {})`。' +
            '具名可选参数比位置参数更易读、更灵活，调用方只需传关心的选项。\n\n' +
            '解构还用于：提取模块导出 `const { useState, useEffect } = React`、' +
            '处理 API 响应 `const { data: { results, total } } = response`、' +
            '交换变量 `[a, b] = [b, a]`（数组解构）。在 React 中，props 解构是组件函数的第一行。' +
            '掌握解构能显著减少样板代码，提升可读性。\n\n' +
            '## 扩展知识\n\n' +
            '- **解构与迭代**：数组解构底层使用迭代器协议，因此可解构任何可迭代对象（Set、Map、字符串、generator）。\n' +
            '- **默认值表达式惰性求值**：`{ x = expensiveFn() }` 中 expensiveFn 只在 x 为 undefined 时才执行。\n' +
            '- **解构用于 JSON**：`const { name, email } = await res.json()` 一行提取 API 数据。\n' +
            '- **深度默认值**：`const { a = { b: 1 } } = obj` 整个 a 缺失时用默认对象，常用于配置。\n' +
            '- **性能**：解构在 V8 中已高度优化，与手动属性访问性能相当，可放心使用。',
          examples: [
            {
              title: '基本对象解构',
              code:
                'const user = { name: "小明", age: 20, city: "北京" }\n' +
                'const { name, age } = user\n' +
                'console.log(name)  // 小明\n' +
                'console.log(age)   // 20\n' +
                '// 重命名 + 默认值\n' +
                'const { name: fullName = "匿名", email = "无" } = user\n' +
                'console.log(fullName)  // 小明\n' +
                'console.log(email)     // 无（user 无 email，用默认）',
              explanation:
                '按键名提取。重命名用 `原名: 新名`。默认值在原值为 undefined 时生效。' +
                '这让从对象取值既灵活又安全，避免访问不存在的属性得到 undefined。',
            },
            {
              title: '函数参数解构',
              code:
                'function createUser({ name, age = 18, role = "user" } = {}) {\n' +
                '  return `${name}, ${age}岁, 角色:${role}`\n' +
                '}\n' +
                'console.log(createUser({ name: "小明" }))           // 小明, 18岁, 角色:user\n' +
                'console.log(createUser({ name: "小红", role: "admin" }))',
              explanation:
                '参数解构让函数接收具名选项，调用方只传需要的字段。= {} 防止不传参时报错。' +
                '这是现代 API 设计的标准模式，让函数接口既灵活又自文档化。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '解构对象 {name:"小明", age:20} 到变量 name 和 age，输出 name。',
              starter_code:
                'const user = { name: "小明", age: 20 }\n' +
                'const { name, age } = ___\n' +
                'console.log(name)',
              expected_output: '小明',
              hints: [
                '解构的目标是 user 对象',
                '把 ___ 替换为 user',
                '解构按键名提取 name',
              ],
            },
            {
              type: 'output-match',
              prompt: '解构 {x:1, y:2}，把 y 重命名为 yAxis，输出 yAxis 的值。',
              starter_code:
                'const point = { x: 1, y: 2 }\n' +
                'const { y: yAxis } = point\n' +
                'console.log(___)',
              expected_output: '2',
              hints: [
                '输出重命名后的变量 yAxis',
                '把 ___ 替换为 yAxis',
                'yAxis 即 point.y = 2',
              ],
            },
            {
              type: 'output-match',
              prompt: '函数 greet({ name, greeting = "你好" }) 返回 `${greeting}, ${name}`。' +
                '调用 greet({ name: "小红" }) 输出结果。',
              starter_code:
                'function greet({ name, greeting = "你好" }) {\n' +
                '  return `${greeting}, ${___}`\n' +
                '}\n' +
                'console.log(greet({ name: "小红" }))',
              expected_output: '你好, 小红',
              hints: [
                '模板中嵌入 name',
                '把 ___ 替换为 name',
                'greeting 未传用默认值 "你好"',
              ],
            },
          ],
          realWorldScenario:
            'React 组件 props 解构是日常：`function UserCard({ name, age, avatar = "" })`，' +
            '直接从 props 取出字段并设默认值，让组件接口清晰。' +
            'API 请求函数 `fetchData({ url, method = "GET", headers = {} })` 让调用方按需传参。' +
            '对象解构让"配置驱动"的代码风格成为可能，是现代前端开发的基石。',
        },
        {
          id: 'js-ch5-l4',
          title: 'this 与绑定',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`this` 是 JavaScript 中最容易混淆的概念。与其他语言（如 Java、Python）的 `this` 不同，' +
            'JS 的 this 不是固定指向实例的，它的值在函数"调用时"确定，而非定义时，取决于调用方式。' +
            '这种动态绑定设计源于 JS 早期的原型继承机制，虽然灵活但也带来了许多困惑。\n\n' +
            'this 存在的意义是让函数能访问"宿主对象"——同一个函数被不同对象调用时，this 指向不同对象，' +
            '实现方法复用。例如 `obj1.getName()` 和 `obj2.getName()` 调用同一个函数，this 分别指向 obj1 和 obj2。' +
            '理解 this 的关键在于认清它绑定的是"调用时的上下文"，而非"定义时的归属"。\n\n' +
            '掌握 this 需要理解四种调用模式、三种显式绑定方法（call/apply/bind）、箭头函数的词法 this，' +
            '以及 this 丢失的经典陷阱。这些知识是阅读源码、排查 bug、设计面向对象代码的必备基础。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 四种调用模式决定 this 指向\n' +
            '// (1) 普通函数调用：this 是 undefined（严格模式）或 window/global\n' +
            'function fn() { console.log(this) }\n' +
            'fn()  // undefined（严格模式）\n' +
            '\n' +
            '// (2) 方法调用：this 是调用该方法的对象\n' +
            'const obj = { name: "小明", greet() { return this.name } }\n' +
            'obj.greet()  // this 指向 obj\n' +
            '\n' +
            '// (3) 构造函数调用：this 是 new 创建的新对象\n' +
            'function Person(name) { this.name = name }\n' +
            'const p = new Person("小明")  // this 指向新对象 p\n' +
            '\n' +
            '// (4) 显式绑定：call/apply/bind 指定 this\n' +
            'fn.call(obj, arg1, arg2)   // 立即调用，this 为 obj\n' +
            'fn.apply(obj, [arg1, arg2]) // 立即调用，参数是数组\n' +
            'const bound = fn.bind(obj)   // 返回新函数，this 永久绑定\n' +
            'bound()  // this 始终为 obj\n' +
            '\n' +
            '// 2. 箭头函数：没有自己的 this，继承外层词法 this\n' +
            'const obj2 = {\n' +
            '  name: "小明",\n' +
            '  greet: () => this.name  // this 是定义时的外层 this，不是 obj2\n' +
            '}\n' +
            '```\n\n' +
            '## this 绑定规则表\n\n' +
            '| 调用模式 | 语法 | this 指向 | 示例 |\n' +
            '|----------|------|-----------|------|\n' +
            '| 普通函数 | `fn()` | undefined/window | `function f(){return this}` |\n' +
            '| 方法调用 | `obj.fn()` | obj | `user.greet()` |\n' +
            '| 构造函数 | `new Fn()` | 新创建对象 | `new Person()` |\n' +
            '| call | `fn.call(obj, a, b)` | obj | `fn.call(user, 1, 2)` |\n' +
            '| apply | `fn.apply(obj, [a,b])` | obj | `fn.apply(user, [1,2])` |\n' +
            '| bind | `fn.bind(obj)` 返回新函数 | obj（永久） | `const b = fn.bind(user)` |\n' +
            '| 箭头函数 | `() => {}` | 外层词法 this | 继承定义处 this |\n' +
            '| 事件回调 | `el.addEventListener` | 触发元素 | this 是 el |\n\n' +
            '## call/apply/bind 对比表\n\n' +
            '| 方法 | 是否立即调用 | 参数形式 | this 是否可变 | 主要用途 |\n' +
            '|------|-------------|----------|--------------|----------|\n' +
            '| call | 是 | 逐个传 | 一次性 | 借用方法 |\n' +
            '| apply | 是 | 数组传 | 一次性 | 借用方法（数组参数） |\n' +
            '| bind | 否（返回新函数） | 逐个传 | 永久固定 | 固化 this 做回调 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. this 的四种指向\n' +
            'const user = { name: "小明", greet() { return this.name } }\n' +
            'console.log(user.greet())  // 小明（方法调用）\n' +
            '\n' +
            'function show() { return typeof this }\n' +
            'console.log(show())  // object（非严格模式指向 window）\n' +
            '\n' +
            'function Person(name) { this.name = name }\n' +
            'const p = new Person("小红")\n' +
            'console.log(p.name)  // 小红（构造函数）\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. call/apply/bind 显式绑定\n' +
            'function greet(greeting, punct) {\n' +
            '  return greeting + ", " + this.name + punct\n' +
            '}\n' +
            'const user = { name: "小明" }\n' +
            'console.log(greet.call(user, "你好", "！"))   // 你好, 小明！\n' +
            'console.log(greet.apply(user, ["你好", "！"])) // 你好, 小明！\n' +
            'const bound = greet.bind(user, "你好")  // 预设 greeting\n' +
            'console.log(bound("。"))  // 你好, 小明。\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. this 丢失陷阱与解决方案\n' +
            'const obj = { name: "小明", greet() { return this.name } }\n' +
            '// 陷阱：赋值后 this 丢失\n' +
            'const fn = obj.greet\n' +
            'console.log(fn())  // undefined（this 不再是 obj）\n' +
            '// 方案1：bind 固化 this\n' +
            'const bound = obj.greet.bind(obj)\n' +
            'console.log(bound())  // 小明\n' +
            '// 方案2：箭头函数包裹\n' +
            'const wrapped = () => obj.greet()\n' +
            'console.log(wrapped())  // 小明\n' +
            '// 方案3：直接在回调中用箭头函数\n' +
            '// btn.addEventListener("click", () => obj.greet())\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **this 丢失是最常见陷阱**：把方法赋值给变量或作为回调传递时，this 会丢失。' +
            '解决方案：bind 固化、箭头函数包裹、或在方法内用箭头函数（继承 this）。\n' +
            '2. **箭头函数没有自己的 this**：箭头函数继承外层词法 this，不能用作对象方法（this 不指向对象）。' +
            '选择规则：需要外层 this 用箭头，需要自身 this（方法、构造函数）用普通 function。\n' +
            '3. **箭头函数不能 new**：箭头函数没有 [[Construct]]，`new (() => {})` 会报错。\n' +
            '4. **bind 的 this 不可被 call/apply 改变**：bind 返回的函数，this 永久固定，再次 call 也无效。\n' +
            '5. **严格模式影响 this**：严格模式下普通函数 this 是 undefined，非严格模式是 window/global。' +
            'ES 模块默认严格模式。\n' +
            '6. **new 绑定优先级最高**：`new (fn.bind(obj))()` 中 this 是新对象而非 obj。\n\n' +
            '## 实际应用\n\n' +
            'this 在实际开发中无处不在：事件回调 `el.addEventListener("click", handler)` 中 this 是元素；' +
            '构造函数用 this 初始化实例属性；类方法中 this 指向实例。' +
            'React 类组件中 this 绑定是经典难点——事件处理函数需在 constructor 中 bind 或用箭头函数类属性。\n\n' +
            'call/apply 常用于借用方法：`Array.prototype.slice.call(arguments)` 把类数组转真数组、' +
            '`Math.max.apply(null, arr)` 求数组最大值（现多用 `Math.max(...arr)`）。' +
            'bind 常用于固化 this 做回调：`setTimeout(this.tick.bind(this), 1000)`。' +
            '理解 this 是阅读任何 JS 源码的前提，也是面试高频考点。\n\n' +
            '## 扩展知识\n\n' +
            '- **new.target**：函数内 `new.target` 检测是否被 new 调用，可用于禁止构造函数当普通函数调用。\n' +
            '- **箭头函数也没有 arguments**：箭头函数继承外层 arguments，如需类参数用 rest 参数 `...args`。\n' +
            '- **this 绑定优先级**：new > 显式(bind/call/apply) > 隐式(方法调用) > 默认(普通调用)。\n' +
            '- **软绑定**：`Function.prototype.softBind`（非标准）允许 this 被再次显式绑定，介于默认与硬绑定之间。\n' +
            '- **类（class）中的 this**：class 方法默认严格模式，方法单独调用时 this 是 undefined 而非 window。',
          examples: [
            {
              title: 'this 的四种指向',
              code:
                '// 1. 方法调用：this 是对象\n' +
                'const user = { name: "小明", greet() { return this.name } }\n' +
                'console.log(user.greet())  // 小明\n' +
                '\n' +
                '// 2. 普通函数：严格模式 this 是 undefined\n' +
                'function show() { return typeof this }\n' +
                'console.log(show())  // object（非严格模式指向 window）\n' +
                '\n' +
                '// 3. 构造函数：this 是新对象\n' +
                'function Person(name) { this.name = name }\n' +
                'console.log(new Person("小红").name)  // 小红',
              explanation:
                'this 在调用时确定。方法调用指向对象，普通函数指向 undefined/window，' +
                '构造函数指向 new 创建的新对象。这是 this 四种规则的核心。',
            },
            {
              title: 'bind 解决 this 丢失',
              code:
                'const user = {\n' +
                '  name: "小明",\n' +
                '  greet() { return "你好, " + this.name }\n' +
                '}\n' +
                '// 直接赋值会丢失 this\n' +
                'const fn = user.greet\n' +
                'console.log(typeof fn())  // this 丢失，name 为 undefined\n' +
                '// bind 固化 this\n' +
                'const bound = user.greet.bind(user)\n' +
                'console.log(bound())  // 你好, 小明',
              explanation:
                '把方法赋值给变量再调用，this 不再是 user。bind(user) 返回一个 this 永久绑定的函数，' +
                '无论怎么调用 this 都不变。这是回调中保住 this 的标准方案。',
            },
            {
              title: '箭头函数继承 this',
              code:
                'function Timer() {\n' +
                '  this.count = 0\n' +
                '}\n' +
                'Timer.prototype.tick = function () {\n' +
                '  // 箭头函数继承外层 this（Timer 实例）\n' +
                '  const inc = () => { this.count++; return this.count }\n' +
                '  console.log(inc())\n' +
                '}\n' +
                'new Timer().tick()  // 1',
              explanation:
                '若 inc 用普通 function，this 会丢失。箭头函数继承 tick 的 this（Timer 实例），' +
                '完美解决回调中 this 问题。这是箭头函数最重要的特性之一。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '对象 obj = { v: 10, get() { return this.v } }，调用 obj.get() 输出结果。',
              starter_code:
                'const obj = { v: 10, get() { return this.v } }\n' +
                'console.log(obj.___())',
              expected_output: '10',
              hints: [
                '调用 get 方法',
                '把 ___ 替换为 get',
                '方法调用时 this 指向 obj',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 bind 把 obj.greet 的 this 固化为 obj，调用绑定后的函数输出结果。' +
                '对象 obj = { name: "小明", greet() { return "hi," + this.name } }。',
              starter_code:
                'const obj = { name: "小明", greet() { return "hi," + this.name } }\n' +
                'const bound = obj.greet.___(obj)\n' +
                'console.log(bound())',
              expected_output: 'hi,小明',
              hints: [
                '用 bind 绑定 this',
                '把 ___ 替换为 bind',
                'bind 返回 this 固化的新函数',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全箭头函数，使它返回外层 this.value。' +
                '对象 box = { value: 42, peek() { const f = () => this.value; return f() } }，' +
                '调用 box.peek() 输出。',
              starter_code:
                'const box = {\n' +
                '  value: 42,\n' +
                '  peek() {\n' +
                '    const f = () => this.___\n' +
                '    return f()\n' +
                '  }\n' +
                '}\n' +
                'console.log(box.peek())',
              expected_output: '42',
              hints: [
                '访问 value 属性',
                '把 ___ 替换为 value',
                '箭头函数继承 peek 的 this（box）',
              ],
            },
          ],
          realWorldScenario:
            '事件处理中 this 丢失是高频问题。`el.addEventListener("click", obj.handler)` 点击时 ' +
            'handler 内的 this 是 el 而非 obj，导致 this.method 报错。' +
            '解决方案：`obj.handler.bind(obj)` 或 `() => obj.handler()`。' +
            '理解 this 让你能正确编写事件回调、定时器回调、Promise 回调，是进阶 JS 开发者的必备知识。',
        },
      ],
    },
    // ================================================================
    // 第 6 章：异步编程
    // ================================================================
    {
      id: 'js-ch6',
      title: '异步编程',
      order: 5,
      lessons: [
        {
          id: 'js-ch6-l1',
          title: 'Promise',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'Promise 是 JavaScript 异步编程的现代基础，代表一个"未来会有值"的对象。它有三种状态：' +
            'pending（进行中）、fulfilled（已完成）、rejected（已失败）。状态一旦从 pending 变为 fulfilled 或 rejected，' +
            '就不可逆转——这被称为"已落定"（settled）。Promise 的不可变性让它比回调更可靠、更易组合。\n\n' +
            'Promise 之所以存在，是为了解决传统回调地狱（callback hell）的问题。在 Promise 之前，' +
            '异步操作通过嵌套回调实现，多层嵌套导致代码难以阅读和维护（"金字塔厄运"）。' +
            'Promise 通过链式调用让异步流程线性化：`p.then(a => ...).then(b => ...).catch(e => ...)`，' +
            '每一步返回新 Promise，使异步步骤可串联，逻辑更清晰。\n\n' +
            '理解 Promise 的关键是认清"同步"与"异步"的边界：执行器函数（传入 new Promise 的函数）是同步执行的，' +
            '但 then/catch/finally 的回调是异步执行的（作为微任务）。这意味着 new Promise 时执行器立即运行，' +
            '但 then 的回调在当前同步代码完成后才执行。掌握这一时序是正确使用 Promise 的前提。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 创建 Promise\n' +
            'const p = new Promise((resolve, reject) => {\n' +
            '  // 执行器函数：同步执行\n' +
            '  if (成功) {\n' +
            '    resolve(value)  // 状态 → fulfilled\n' +
            '  } else {\n' +
            '    reject(error)   // 状态 → rejected\n' +
            '  }\n' +
            '})\n' +
            '\n' +
            '// 2. 消费 Promise\n' +
            'p.then(value => {\n' +
            '  // fulfilled 时执行（异步微任务）\n' +
            '}).catch(error => {\n' +
            '  // rejected 时执行\n' +
            '}).finally(() => {\n' +
            '  // 无论成功失败都执行\n' +
            '})\n' +
            '\n' +
            '// 3. 快捷创建\n' +
            'Promise.resolve(42)   // 已 fulfilled 的 Promise\n' +
            'Promise.reject(err)   // 已 rejected 的 Promise\n' +
            '\n' +
            '// 4. 链式调用（每个 then 返回新 Promise）\n' +
            'fetch(url)\n' +
            '  .then(res => res.json())\n' +
            '  .then(data => render(data))\n' +
            '  .catch(err => console.error(err))\n' +
            '\n' +
            '// 5. 组合器\n' +
            'Promise.all([p1, p2, p3])        // 全部 fulfilled 才 fulfilled\n' +
            'Promise.race([p1, p2, p3])       // 最快一个决定结果\n' +
            'Promise.allSettled([p1, p2, p3]) // 等全部落定，不抛错\n' +
            'Promise.any([p1, p2, p3])        // 最快一个 fulfilled\n' +
            '```\n\n' +
            '## Promise 方法表\n\n' +
            '| 方法 | 参数 | 返回值 | 说明 |\n' +
            '|------|------|--------|------|\n' +
            '| `new Promise(executor)` | (resolve, reject) => {} | Promise | 创建，执行器同步执行 |\n' +
            '| `.then(onFulfilled, onRejected)` | 成功回调, 失败回调 | 新 Promise | 处理结果 |\n' +
            '| `.catch(onRejected)` | 失败回调 | 新 Promise | 捕获错误 |\n' +
            '| `.finally(onFinally)` | 回调 | 新 Promise | 无论成败都执行 |\n' +
            '| `Promise.resolve(v)` | 值/Promise | Promise | 创建已 fulfilled |\n' +
            '| `Promise.reject(e)` | 错误 | Promise | 创建已 rejected |\n' +
            '| `Promise.all(arr)` | Promise 数组 | Promise | 全部成功才成功 |\n' +
            '| `Promise.race(arr)` | Promise 数组 | Promise | 最快一个决定 |\n' +
            '| `Promise.allSettled(arr)` | Promise 数组 | Promise | 等全部落定 |\n' +
            '| `Promise.any(arr)` | Promise 数组 | Promise | 最快成功者 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 执行器同步执行，then 回调异步\n' +
            'console.log("1. 开始")\n' +
            'const p = new Promise((resolve) => {\n' +
            '  console.log("2. 执行器运行")  // 同步执行\n' +
            '  resolve(42)\n' +
            '})\n' +
            'console.log("3. 结束")\n' +
            'p.then(v => console.log("4. then:", v))  // 异步微任务，最后执行\n' +
            '// 输出顺序：1 → 2 → 3 → 4\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 链式调用与值传递\n' +
            'Promise.resolve(1)\n' +
            '  .then(x => x + 1)       // 2\n' +
            '  .then(x => x * 3)       // 6\n' +
            '  .then(x => console.log(x))  // 6\n' +
            '// then 回调的返回值成为下一个 then 的输入\n' +
            '// 返回 Promise 则会"展开"等待其落定\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 错处理与快捷创建\n' +
            'Promise.reject("出错了")\n' +
            '  .catch(err => {\n' +
            '    console.log("捕获:", err)  // 捕获: 出错了\n' +
            '    return "恢复了"            // catch 返回值让链恢复\n' +
            '  })\n' +
            '  .then(v => console.log(v))  // 恢复了\n' +
            '// Promise.resolve/reject 快捷创建\n' +
            'console.log(Promise.resolve(42) instanceof Promise)  // true\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **状态不可逆**：Promise 一旦从 pending 变为 fulfilled/rejected 就不可再改变。' +
            '多次 resolve/reject 只有第一次生效。\n' +
            '2. **执行器是同步的，then 回调是异步的**：new Promise 的函数立即执行，' +
            '但 then 的回调作为微任务在当前同步代码后执行。这是常见面试考点。\n' +
            '3. **then 返回新 Promise**：链式调用中每个 then 返回新 Promise，不是原来的。' +
            '返回普通值会自动包成 resolved Promise。\n' +
            '4. **catch 等同于 then(null, onRejected)**：但 catch 能捕获链中任何一步的错误，推荐用 catch。\n' +
            '5. **Promise.all 任一失败即失败**：一个 reject 会导致整个 all 立即 reject，其他结果被忽略。' +
            '需"全部等完"用 allSettled。\n' +
            '6. **微任务优先级高于宏任务**：Promise.then（微任务）先于 setTimeout（宏任务）执行。' +
            '理解事件循环和微任务队列是掌握异步时序的关键。\n\n' +
            '## 实际应用\n\n' +
            'Promise 是现代异步编程的基础：fetch API 返回 Promise、async/await 基于 Promise、' +
            'Node.js 的 fs.promises 用 Promise 替代回调。实际开发中，' +
            'Promise.all 用于并行请求加速：`Promise.all([fetchUsers(), fetchPosts()])` 同时请求两个接口；' +
            'Promise.race 用于超时控制：`Promise.race([fetch(url), timeout(5000)])` 5 秒超时。\n\n' +
            '链式调用让多步异步流程清晰：`fetch(url).then(res => res.json()).then(data => render(data))`。' +
            '错误统一在 catch 处理，避免每层回调都写错误判断。理解 Promise 是阅读任何现代 JS 代码的前提。\n\n' +
            '## 扩展知识\n\n' +
            '- **微任务与宏任务**：Promise.then/catch/finally 是微任务，setTimeout/setInterval 是宏任务。' +
            '每次宏任务后清空所有微任务再执行下一宏任务。\n' +
            '- **Promise 链的值穿透**：then 不传回调时，值会"穿透"传给下一个有回调的 then。\n' +
            '- **Promise.allSettled（ES2020）**：等全部落定，返回 [{status, value/reason}, ...]，不抛错。\n' +
            '- **Promise.any（ES2021）**：最快一个 fulfilled 就 fulfilled，全部 reject 才 reject。\n' +
            '- **可取消的 Promise**：Promise 本身不可取消，可用 AbortController 实现取消（fetch 支持）。',
          examples: [
            {
              title: '执行器同步执行',
              code:
                '// 执行器函数（传入 new Promise 的函数）是同步执行的\n' +
                'console.log("1. 开始")\n' +
                'const p = new Promise((resolve) => {\n' +
                '  console.log("2. 执行器运行")\n' +
                '  resolve(42)\n' +
                '})\n' +
                'console.log("3. 结束")\n' +
                '// 以下 then 回调是异步的，输出不会被本环境捕获\n' +
                'p.then(v => console.log("4. 异步:", v))',
              explanation:
                '执行器在 new Promise 时同步运行，故 1、2、3 都能被捕获且顺序确定。' +
                'then 的回调进入微任务队列，在同步代码（含 done 信号）之后才执行，无法被本平台捕获。' +
                '理解"执行器同步、回调异步"是掌握 Promise 的关键。',
            },
            {
              title: 'Promise 的类型与状态',
              code:
                'console.log(typeof Promise)              // function\n' +
                'console.log(typeof Promise.resolve(1))   // object\n' +
                'console.log(Promise.resolve(42) instanceof Promise)  // true\n' +
                'console.log(Promise.resolve(42).then instanceof Function) // true',
              explanation:
                'Promise 是构造函数（typeof 为 function）。Promise.resolve() 返回已完成的 Promise 对象。' +
                '这些同步检查能在练习中验证对 Promise 类型的理解，无需依赖异步回调。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建一个 Promise，执行器内同步输出 "执行中" 并 resolve()。再输出 "完成"。' +
                '最终应输出两行（执行器同步运行）。',
              starter_code:
                'new Promise((resolve) => {\n' +
                '  console.log("执行中")\n' +
                '  resolve()\n' +
                '})\n' +
                'console.log(___)',
              expected_output: '执行中\n完成',
              hints: [
                '在最后输出 "完成"',
                '把 ___ 替换为 "完成"',
                '执行器同步先输出"执行中"，再输出"完成"',
              ],
            },
            {
              type: 'output-match',
              prompt: '输出 typeof Promise 的结果。',
              starter_code: 'console.log(___ Promise)',
              expected_output: 'function',
              hints: [
                '用 typeof 运算符',
                '把 ___ 替换为 typeof',
                'Promise 是构造函数，typeof 为 function',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Promise.resolve(42) instanceof Promise 判断其是否为 Promise 实例，输出结果。',
              starter_code: 'console.log(Promise.resolve(42) ___ Promise)',
              expected_output: 'true',
              hints: [
                '用 instanceof 判断实例',
                '把 ___ 替换为 instanceof',
                'Promise.resolve 返回 Promise 实例',
              ],
            },
          ],
          realWorldScenario:
            '在改造旧代码时，常把基于回调的 API 包装成 Promise：' +
            '`const readFile = (path) => new Promise((resolve, reject) => fs.readFile(path, (err, data) => err ? reject(err) : resolve(data)))`。' +
            '这样就能用 then/catch 或 async/await 处理，告别回调地狱。' +
            '理解 Promise 的状态机和执行器同步特性，是设计可靠异步 API 的基础。',
        },
        {
          id: 'js-ch6-l2',
          title: 'async / await',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            'async/await 是 ES2017 引入的异步语法糖，让异步代码看起来像同步代码。' +
            '`async function fn() {}` 声明异步函数，它总是返回 Promise——返回值会被自动包成 resolved Promise。' +
            '在 async 函数内用 `await promise` 暂停执行直到 Promise 落定，并拿到结果值。' +
            '这让异步流程可用 try/catch 处理错误，比 .catch() 更直观。async/await 本质是 Promise 的语法糖。\n\n' +
            'async/await 之所以重要，是因为它让异步代码的"结构"与同步代码一致：顺序执行、循环、条件判断、' +
            '错误处理都可以用熟悉的同步语法表达。在 async/await 之前，Promise 链虽然比回调地狱好，' +
            '但仍有"链式思维"的认知负担——每一步都是 then 回调，循环和条件处理需要额外技巧。' +
            'async/await 消除了这些负担，让开发者能专注于业务逻辑而非异步控制流。\n\n' +
            '关键限制：await 只能在 async 函数内使用（顶层 await 是 ES2022 特性，需模块环境）。' +
            '在非模块环境（如普通脚本）需用 async IIFE `(async () => { ... })()` 包裹。' +
            '理解 async 函数"调用即返回 Promise"这一同步事实，是掌握 async/await 的起点。' +
            'async 函数的执行是同步开始、异步返回的——函数体遇到 await 才暂停。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. async 函数声明（总是返回 Promise）\n' +
            'async function fn() {\n' +
            '  return 42  // 自动包成 Promise.resolve(42)\n' +
            '}\n' +
            'fn()  // 返回 Promise，resolved 为 42\n' +
            '\n' +
            '// 箭头函数形式\n' +
            'const fn2 = async () => 42\n' +
            '\n' +
            '// 2. await 暂停等待\n' +
            'async function getData() {\n' +
            '  const res = await fetch(url)   // 等待 Promise 落定\n' +
            '  const data = await res.json() // 等待解析完成\n' +
            '  return data\n' +
            '}\n' +
            '\n' +
            '// 3. 错误处理用 try/catch\n' +
            'async function safe() {\n' +
            '  try {\n' +
            '    const data = await riskyOp()\n' +
            '    return data\n' +
            '  } catch (err) {\n' +
            '    console.log("出错:", err)\n' +
            '    return null\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '// 4. 并行执行用 Promise.all\n' +
            'async function parallel() {\n' +
            '  // 不要逐个 await，否则串行慢\n' +
            '  const [users, posts] = await Promise.all([\n' +
            '    fetchUsers(),\n' +
            '    fetchPosts()\n' +
            '  ])\n' +
            '}\n' +
            '\n' +
            '// 5. async IIFE（非模块环境包裹）\n' +
            '(async () => {\n' +
            '  const data = await fetchData()\n' +
            '  console.log(data)\n' +
            '})()\n' +
            '```\n\n' +
            '## async/await 关键特性表\n\n' +
            '| 特性 | 语法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| async 函数 | `async function fn() {}` | 总是返回 Promise |\n' +
            '| async 箭头 | `const fn = async () => {}` | 箭头函数也可 async |\n' +
            '| await | `await promise` | 暂停等待 Promise 落定 |\n' +
            '| 错误处理 | `try { await ... } catch(e) {}` | 捕获 reject |\n' +
            '| 返回值 | `return x` | 自动包成 resolve(x) |\n' +
            '| 抛错 | `throw err` | 变成 reject(err) |\n' +
            '| 并行 | `await Promise.all([...])` | 并发执行 |\n' +
            '| 顶层 await | `await x`（模块顶层） | ES2022，仅模块环境 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. async 函数返回 Promise（同步可观察）\n' +
            'async function fetchData() {\n' +
            '  return 42  // 自动包成 Promise.resolve(42)\n' +
            '}\n' +
            'const p = fetchData()\n' +
            'console.log(p instanceof Promise)  // true（同步可见）\n' +
            'console.log(typeof fetchData)       // function\n' +
            '// async 函数抛错变成 reject\n' +
            'async function fail() { throw "错误" }\n' +
            'fail().catch(e => console.log(e))  // 错误\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. await 串行执行（顺序可控）\n' +
            'async function sequential() {\n' +
            '  const a = await Promise.resolve(1)  // 等 1 完成\n' +
            '  const b = await Promise.resolve(2)  // 再等 2 完成\n' +
            '  return a + b  // 3\n' +
            '}\n' +
            'sequential().then(r => console.log(r))  // 3\n' +
            '// 注意：串行 await 比并行慢，无依赖时用 Promise.all\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 并行执行与错误处理\n' +
            'async function parallel() {\n' +
            '  try {\n' +
            '    const [u, p] = await Promise.all([\n' +
            '      Promise.resolve("用户"),\n' +
            '      Promise.resolve("文章")\n' +
            '    ])\n' +
            '    return u + ":" + p  // 用户:文章\n' +
            '  } catch (e) {\n' +
            '    return "失败"\n' +
            '  }\n' +
            '}\n' +
            'parallel().then(r => console.log(r))  // 用户:文章\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **await 只能在 async 函数内**：在普通函数中使用 await 会语法报错。' +
            '顶层 await（ES2022）需模块环境（type="module"）。\n' +
            '2. **async 函数返回 Promise 是同步事实**：`async function f(){return 42}; f()` 立即返回 Promise，' +
            '但函数体内 await 后的代码是异步执行的。\n' +
            '3. **串行 await 比并行慢**：`const a = await f1(); const b = await f2()` 是串行等待；' +
            '无依赖时应 `const [a,b] = await Promise.all([f1(), f2()])` 并行。\n' +
            '4. **await 的错误用 try/catch**：`try { await p } catch(e) {}` 捕获 p 的 reject，' +
            '比 .catch() 更符合同步思维。\n' +
            '5. **async 函数的返回值自动包 Promise**：`return 42` 变成 resolve(42)；' +
            '`throw err` 变成 reject(err)；`return promise` 则直接返回该 promise（不双层包装）。\n' +
            '6. **forEach 中 await 无效**：`arr.forEach(async x => await f(x))` 不会等待。' +
            '应改用 `for...of` 循环或 `Promise.all(arr.map(f))`。\n\n' +
            '## 实际应用\n\n' +
            'async/await 是现代 JS 异步编程的主流方式。fetch 请求：' +
            '`async function load() { const res = await fetch(url); const data = await res.json() }`。' +
            '批量并行加载：`const results = await Promise.all(urls.map(url => fetch(url)))`。' +
            '顺序处理带依赖的步骤：先登录拿 token，再用 token 请求数据，每步 await。\n\n' +
            'React 中 async/await 用于 useEffect 数据获取、事件处理函数。Node.js 中间件大量使用 async/await。' +
            '错误处理用 try/catch 统一捕获，比 Promise 链的 .catch() 更直观。' +
            'async/await 让异步代码的可读性接近同步代码，是团队协作和代码维护的巨大改进。\n\n' +
            '## 扩展知识\n\n' +
            '- **顶层 await（ES2022）**：在 ES 模块顶层可直接 `await`，无需 IIFE 包裹，用于动态导入、初始化等。\n' +
            '- **for await...of**：异步迭代，遍历异步可迭代对象（如 Node.js 的 stream）。\n' +
            '- **async generator**：`async function* gen() { yield await fetch() }` 生成异步序列。\n' +
            '- **并发控制**：`p-limit` 等库控制并发数，避免 Promise.all 一次性发太多请求。\n' +
            '- **错误边界**：React 中 async 函数的错误不会被 ErrorBoundary 捕获（异步错误），需手动 try/catch。',
          examples: [
            {
              title: 'async 函数返回 Promise',
              code:
                'async function fetchData() {\n' +
                '  return 42  // 自动包成 Promise.resolve(42)\n' +
                '}\n' +
                '// 调用 async 函数立即返回 Promise（同步可见）\n' +
                'const p = fetchData()\n' +
                'console.log(p instanceof Promise)  // true\n' +
                'console.log(typeof fetchData)       // function',
              explanation:
                'async 函数无论返回什么，都被包成 Promise。调用它立即得到 Promise 对象，这一步同步可见。' +
                '因此能用 instanceof 验证，无需等待异步结果。这是 async 函数的核心同步特性。',
            },
            {
              title: 'await 的概念（参考代码）',
              code:
                '// 注意：await 后的输出本环境无法捕获，此为概念演示\n' +
                'async function getUser() {\n' +
                '  // await 暂停直到 Promise 落定，拿到值\n' +
                '  const data = await Promise.resolve({ name: "小明" })\n' +
                '  return data.name\n' +
                '}\n' +
                'console.log("调用前")\n' +
                'getUser().then(name => console.log(name))  // 异步，无法捕获\n' +
                'console.log("调用后")',
              explanation:
                'await 让异步代码看起来像同步：const data = await ... 像普通赋值。' +
                '"调用前"和"调用后"同步输出可被捕获，中间的 await 和 then 回调是异步的。' +
                '在真实环境（Node/浏览器控制台）所有输出都会出现，本沙箱只捕获同步部分。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '声明 async function f() { return 42 }，调用 f() 并用 instanceof 判断是否为 Promise，输出结果。',
              starter_code:
                'async function f() { return 42 }\n' +
                'console.log(f() ___ Promise)',
              expected_output: 'true',
              hints: [
                '用 instanceof 判断',
                '把 ___ 替换为 instanceof',
                'async 函数总是返回 Promise',
              ],
            },
            {
              type: 'output-match',
              prompt: '输出 typeof 一个 async 函数 的结果。函数 f 定义为 async function f() {}。',
              starter_code:
                'async function f() {}\n' +
                'console.log(___ f)',
              expected_output: 'function',
              hints: [
                '用 typeof 判断类型',
                '把 ___ 替换为 typeof',
                'async 函数本质仍是 function 类型',
              ],
            },
            {
              type: 'open-ended',
              prompt: '写一个 async 函数 fetchUser(id)，内部用 await 等待一个 Promise（可用 Promise.resolve 模拟），' +
                '返回用户对象 { id, name }。注意：本练习为开放题，不需要输出匹配。',
              starter_code:
                'async function fetchUser(id) {\n' +
                '  // 用 await 等待 Promise.resolve({ id, name: "用户" + id })\n' +
                '  // 返回该对象\n' +
                '\n' +
                '}',
              hints: [
                '在函数内写 const user = await Promise.resolve({ id, name: "用户" + id })',
                '然后 return user',
                '完整：const user = await Promise.resolve({ id, name: "用户" + id }); return user',
              ],
            },
          ],
          realWorldScenario:
            'API 调用序列是 async/await 的典型场景：先 await 登录拿 token，再 await 用 token 请求用户数据，' +
            '最后 await 加载用户详情。用 async/await 写成顺序代码，比层层嵌套的回调或长串 .then() 链清晰得多。' +
            '配合 try/catch 统一处理任一步的失败，让错误处理与业务逻辑解耦。' +
            '这是现代前端数据层（React Query、SWR）底层的工作方式。',
        },
        {
          id: 'js-ch6-l3',
          title: 'fetch API',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'fetch 是浏览器原生的 HTTP 请求 API，基于 Promise 设计。`fetch(url)` 返回 Promise，' +
            'resolve 时给 Response 对象。Response 需再调用 `.json()`、`.text()` 等方法解析正文，' +
            '这些方法本身也返回 Promise。fetch 是现代前端与后端通信的标准方式，替代了旧的 XMLHttpRequest。\n\n' +
            'fetch 之所以成为标准，是因为它统一、简洁、基于 Promise。XMLHttpRequest 是事件驱动的回调风格，' +
            '代码冗长且难以组合；fetch 用 Promise 链/async-await 表达，更符合现代 JS 风格。' +
            'fetch 还支持流式读取、请求/响应拦截（通过 Service Worker）、AbortController 取消等高级特性。\n\n' +
            '理解 fetch 的关键是认清它"两层异步"的结构：第一层 await fetch() 得到 Response（响应头已到），' +
            '第二层 await response.json() 解析响应体。这是因为 HTTP 响应是流式的——头和体分批到达。' +
            '掌握这一模型才能正确使用 fetch，避免在 Response 对象上直接取数据的常见错误。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. GET 请求（最简形式）\n' +
            'fetch("/api/users")\n' +
            '  .then(res => res.json())  // 解析 JSON\n' +
            '  .then(data => console.log(data))\n' +
            '\n' +
            '// 2. POST 请求（带选项）\n' +
            'fetch("/api/users", {\n' +
            '  method: "POST",\n' +
            '  headers: { "Content-Type": "application/json" },\n' +
            '  body: JSON.stringify({ name: "小明" })  // body 必须是字符串\n' +
            '})\n' +
            '\n' +
            '// 3. async/await 写法（推荐）\n' +
            'async function getUsers() {\n' +
            '  const res = await fetch("/api/users")\n' +
            '  const data = await res.json()\n' +
            '  return data\n' +
            '}\n' +
            '\n' +
            '// 4. 健壮的错误处理（关键模式）\n' +
            'async function safeFetch(url) {\n' +
            '  const res = await fetch(url)\n' +
            '  if (!res.ok) {  // 4xx/5xx 不会自动 reject！\n' +
            '    throw new Error(`HTTP ${res.status}`)\n' +
            '  }\n' +
            '  return res.json()\n' +
            '}\n' +
            '\n' +
            '// 5. 完整 options\n' +
            'fetch(url, {\n' +
            '  method: "POST",        // GET/POST/PUT/DELETE\n' +
            '  headers: { ... },      // 请求头\n' +
            '  body: JSON.stringify(data), // 请求体\n' +
            '  credentials: "include",// 携带 cookie\n' +
            '  signal: controller.signal // 取消信号\n' +
            '})\n' +
            '```\n\n' +
            '## fetch options 与 Response 方法表\n\n' +
            '| option/方法 | 类型 | 说明 |\n' +
            '|-------------|------|------|\n' +
            '| `method` | string | GET/POST/PUT/DELETE/PATCH |\n' +
            '| `headers` | object | 请求头键值对 |\n' +
            '| `body` | string | 请求体（须字符串化） |\n' +
            '| `credentials` | string | cookie 策略（same-origin/include/omit） |\n' +
            '| `signal` | AbortSignal | 取消请求 |\n' +
            '| `mode` | string | cors/no-cors/same-origin |\n' +
            '| `res.ok` | boolean | 状态码 200-299 |\n' +
            '| `res.status` | number | HTTP 状态码 |\n' +
            '| `res.headers` | Headers | 响应头 |\n' +
            '| `res.json()` | Promise<any> | 解析为 JSON |\n' +
            '| `res.text()` | Promise<string> | 解析为文本 |\n' +
            '| `res.blob()` | Promise<Blob> | 解析为二进制 |\n' +
            '| `res.formData()` | Promise<FormData> | 解析为表单 |\n' +
            '| `res.clone()` | Response | 克隆响应 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. GET 请求与解析\n' +
            'fetch("/api/users")\n' +
            '  .then(response => response.json())  // 解析 JSON\n' +
            '  .then(data => console.log(data))\n' +
            '  .catch(err => console.error("请求失败:", err))\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. POST 请求提交 JSON\n' +
            'fetch("/api/users", {\n' +
            '  method: "POST",\n' +
            '  headers: { "Content-Type": "application/json" },\n' +
            '  body: JSON.stringify({ name: "小明", age: 20 })\n' +
            '})\n' +
            '  .then(res => res.json())\n' +
            '  .then(data => console.log("创建成功:", data))\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 健壮封装（检查 ok + 错误处理）\n' +
            'async function api(url, options) {\n' +
            '  const res = await fetch(url, options)\n' +
            '  if (!res.ok) {\n' +
            '    const err = await res.json().catch(() => ({}))\n' +
            '    throw new Error(err.message || `HTTP ${res.status}`)\n' +
            '  }\n' +
            '  return res.json()\n' +
            '}\n' +
            '// 使用\n' +
            'api("/api/users").then(console.log).catch(console.error)\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **4xx/5xx 不会 reject**：fetch 只在网络错误（断网、DNS 失败）时 reject，HTTP 错误状态码不会。' +
            '必须手动检查 `res.ok` 或 `res.status`，这是最常见的 fetch 陷阱。\n' +
            '2. **body 必须是字符串**：传对象会报错，需 `JSON.stringify(data)`。' +
            'Content-Type 要设 `application/json` 让后端正确解析。\n' +
            '3. **两层异步**：`await fetch()` 得 Response，再 `await res.json()` 解析体。' +
            '直接对 Response 取值是错的——它只是响应头，不含体。\n' +
            '4. **默认不携带 cookie**：跨域请求需 `credentials: "include"` 才发 cookie。' +
            '同源默认携带（same-origin）。\n' +
            '5. **CORS 限制**：跨域请求需后端设置 CORS 头，否则浏览器拦截。' +
            '开发环境可用代理（如 Vite 的 server.proxy）绕过。\n' +
            '6. **响应体只能读一次**：`res.json()` 后再调用会报错。需多次读取用 `res.clone()`。\n\n' +
            '## 实际应用\n\n' +
            'fetch 是前端与后端通信的基础。实际项目中常封装统一请求函数：' +
            '处理 token 注入、错误拦截、loading 状态、重试逻辑。React 中用 useEffect + async/await 获取数据，' +
            'Vue 中用 async setup 或 watchEffect。文件上传用 FormData：' +
            '`const fd = new FormData(); fd.append("file", file); fetch(url, { method:"POST", body: fd })`。\n\n' +
            '注意：本平台沙箱受限，实际 fetch 可能被同源策略拦截，练习为开放式参考代码。' +
            '在真实项目中，fetch 配合 async/await 是数据请求的主流方案，也是 React Query、SWR 等' +
            '数据层库的底层基础。掌握 fetch 是前端开发的核心技能。\n\n' +
            '## 扩展知识\n\n' +
            '- **AbortController 取消**：`const c = new AbortController(); fetch(url, {signal: c.signal}); c.abort()` 取消请求。\n' +
            '- **请求拦截**：Service Worker 可拦截 fetch 请求，实现离线缓存、请求修改。\n' +
            '- **流式读取**：`res.body.getReader()` 逐块读取，适合大文件下载/流式处理。\n' +
            '- **axios vs fetch**：axios 自动转换 JSON、错误状态码 reject、拦截器；fetch 更原生但需手动封装。\n' +
            '- **超时处理**：`Promise.race([fetch(url), timeout(5000)])` 实现超时，或用 AbortController。',
          examples: [
            {
              title: 'GET 请求（参考代码）',
              code:
                '// 概念演示：实际运行需真实后端\n' +
                'fetch("/api/users")\n' +
                '  .then(response => response.json())  // 解析 JSON\n' +
                '  .then(data => console.log(data))\n' +
                '  .catch(err => console.error("请求失败:", err))',
              explanation:
                'fetch 返回 Promise，then 链式处理。response.json() 异步解析正文为 JS 对象。' +
                'catch 捕获网络错误，但不捕获 4xx/5xx——需手动检查 response.ok。',
            },
            {
              title: 'POST 请求与错误检查',
              code:
                '// 概念演示：健壮的 fetch 封装\n' +
                'async function createUser(data) {\n' +
                '  const res = await fetch("/api/users", {\n' +
                '    method: "POST",\n' +
                '    headers: { "Content-Type": "application/json" },\n' +
                '    body: JSON.stringify(data)  // body 必须是字符串\n' +
                '  })\n' +
                '  if (!res.ok) {  // 4xx/5xx 不会自动 reject，需手动检查\n' +
                '    throw new Error("HTTP " + res.status)\n' +
                '  }\n' +
                '  return await res.json()  // 解析响应正文\n' +
                '}\n' +
                '// 调用示例（参考，实际需真实后端）\n' +
                '// createUser({ name: "小明" }).then(u => console.log(u)).catch(e => console.error(e))',
              explanation:
                'POST 需配置 method、headers、body。body 必须是字符串，对象用 JSON.stringify。' +
                'response.ok 在 2xx 时为 true，否则需手动抛错让 catch 处理。' +
                '这是封装 fetch 的标准模式，也是 React/Vue 数据层的基础。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt:
                '写一个函数 getUser(id)，使用 fetch GET 请求 "/api/users/" + id，' +
                '返回解析后的 JSON。要求：检查 response.ok，不 ok 时抛出 Error("用户不存在")。' +
                '用 async/await 写。',
              starter_code:
                'async function getUser(id) {\n' +
                '  // 在此写 fetch 请求\n' +
                '}\n',
              hints: [
                '用 await fetch("/api/users/" + id) 拿 Response',
                'if (!res.ok) throw new Error("用户不存在")，再 return await res.json()',
                '完整：const res = await fetch("/api/users/" + id); if (!res.ok) throw new Error("用户不存在"); return await res.json()',
              ],
            },
            {
              type: 'open-ended',
              prompt:
                '写一个函数 postJSON(url, data)，向指定 url 发 POST 请求，body 是 data 的 JSON 字符串，' +
                'Content-Type 为 application/json，返回解析后的 JSON 响应。',
              starter_code:
                'async function postJSON(url, data) {\n' +
                '  // 在此写代码\n' +
                '}\n',
              hints: [
                '配置 method、headers、body 三个选项',
                'body 用 JSON.stringify(data)',
                '完整：const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return await res.json()',
              ],
            },
          ],
          realWorldScenario:
            '前端应用几乎都要调后端 API：登录后拉用户信息、提交表单、加载列表等。' +
            'fetch 是这些场景的标准工具。常见模式是封装一个 request 函数，统一处理 baseURL、' +
            '鉴权头、JSON 序列化、错误检查和重试。例如 React 项目里常在 useEffect 中 fetch 数据，' +
            '或用 React Query / SWR 这类库（它们底层都是 fetch）。理解 fetch 的 ok 检查、' +
            'JSON 解析、错误传播，是写出可靠数据层的前提。',
        },
        {
          id: 'js-ch6-l4',
          title: '错误处理',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '异步代码的错误处理比同步更复杂，因为错误可能在不同时机抛出。同步代码用 try/catch 即可；' +
            '异步回调需要 Promise 的 catch；async/await 可以用 try/catch（语法糖，更友好）。' +
            '核心原则：异步操作的错误必须被捕获并处理，否则变成未处理的 rejection（unhandled rejection），' +
            '在现代浏览器会打印警告甚至导致脚本终止。\n\n' +
            '错误处理之所以重要，是因为异步操作（网络请求、文件读取、数据库查询）天然不可靠——' +
            '网络会断、服务器会宕、数据会格式错误。健壮的错误处理是生产级应用的必需品，' +
            '而非可选项。一个未处理的 rejection 可能导致整个页面白屏、功能失效、用户体验崩溃。' +
            '理解异步错误处理的几种模式，是写出可靠前端代码的关键。\n\n' +
            '异步错误处理有三个层次：语法层（try/catch 与 .catch）、组合层（Promise.all/allSettled）、' +
            '策略层（重试、降级、熔断）。掌握这三层，才能应对从简单脚本到复杂应用的各种错误场景。' +
            '本节聚焦语法层与组合层，策略层属于工程实践。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 同步错误：try/catch\n' +
            'try {\n' +
            '  const data = JSON.parse(str)\n' +
            '} catch (e) {\n' +
            '  console.log("解析失败:", e.message)\n' +
            '}\n' +
            '\n' +
            '// 2. Promise 错误：.catch()\n' +
            'fetch(url)\n' +
            '  .then(res => res.json())\n' +
            '  .catch(err => console.log("请求失败:", err))  // 捕获链中任何错误\n' +
            '  .then(() => console.log("继续执行"))           // catch 后可继续\n' +
            '\n' +
            '// 3. async/await 错误：try/catch\n' +
            'async function safe() {\n' +
            '  try {\n' +
            '    const res = await fetch(url)\n' +
            '    const data = await res.json()\n' +
            '    return data\n' +
            '  } catch (err) {\n' +
            '    console.log("出错:", err)\n' +
            '    return null  // 降级返回\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '// 4. Promise.all（任一失败即失败）\n' +
            'try {\n' +
            '  const [a, b] = await Promise.all([req1(), req2()])\n' +
            '} catch (e) { /* 任一失败 */ }\n' +
            '\n' +
            '// 5. Promise.allSettled（等全部落定，不抛错）\n' +
            'const results = await Promise.allSettled([req1(), req2()])\n' +
            '// [{ status: "fulfilled", value }, { status: "rejected", reason }]\n' +
            'results.forEach(r => {\n' +
            '  if (r.status === "fulfilled") console.log(r.value)\n' +
            '  else console.log("失败:", r.reason)\n' +
            '})\n' +
            '```\n\n' +
            '## 错误处理方式对比表\n\n' +
            '| 方式 | 适用场景 | 语法 | 特点 |\n' +
            '|------|----------|------|------|\n' +
            '| try/catch | 同步、async/await | `try { await p } catch(e) {}` | 符合同步思维 |\n' +
            '| .catch() | Promise 链 | `p.then().catch()` | 链式，可恢复 |\n' +
            '| .then(null, onRejected) | Promise 链 | `p.then(null, fn)` | catch 的等价写法 |\n' +
            '| Promise.all | 全部成功才成功 | `Promise.all([...])` | 任一失败即失败 |\n' +
            '| Promise.allSettled | 等全部落定 | `Promise.allSettled([...])` | 不抛错，返回状态 |\n' +
            '| window.onerror | 全局兜底 | `window.onerror = fn` | 捕获未处理错误 |\n' +
            '| unhandledrejection | 异步兜底 | `addEventListener("unhandledrejection")` | 捕获未处理 rejection |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. try/catch 处理 await\n' +
            'async function safeRun() {\n' +
            '  try {\n' +
            '    const data = await Promise.reject("出错了")\n' +
            '    return data\n' +
            '  } catch (err) {\n' +
            '    console.log("捕获:", err)  // 捕获: 出错了\n' +
            '    return "默认值"  // 降级\n' +
            '  }\n' +
            '}\n' +
            'safeRun().then(r => console.log(r))  // 默认值\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. .catch 后可继续（恢复执行）\n' +
            'Promise.reject("失败")\n' +
            '  .catch(err => {\n' +
            '    console.log("捕获:", err)\n' +
            '    return "恢复值"  // catch 的返回值让链恢复\n' +
            '  })\n' +
            '  .then(v => console.log("继续:", v))  // 继续: 恢复值\n' +
            '// 注意：catch 后若不返回值（undefined），then 也会执行\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. allSettled 处理部分失败\n' +
            'async function fetchAll() {\n' +
            '  const results = await Promise.allSettled([\n' +
            '    Promise.resolve("数据1"),\n' +
            '    Promise.reject("失败2"),\n' +
            '    Promise.resolve("数据3")\n' +
            '  ])\n' +
            '  const success = results\n' +
            '    .filter(r => r.status === "fulfilled")\n' +
            '    .map(r => r.value)\n' +
            '  console.log(success)  // ["数据1", "数据3"]\n' +
            '}\n' +
            'fetchAll()\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **未处理的 rejection 是隐患**：await 的 Promise reject 但没有 try/catch，' +
            '会变成 unhandledrejection 事件，浏览器警告、Node.js 可能崩溃。务必捕获。\n' +
            '2. **catch 后链可恢复**：`.catch(err => "恢复值")` 返回值让后续 then 正常执行。' +
            '若 catch 中再 throw，则继续向后传递错误。\n' +
            '3. **Promise.all 任一失败即整体失败**：一个 reject 导致整个 all 立即 reject，' +
            '其他 Promise 结果被忽略。需"部分失败不影响整体"用 allSettled。\n' +
            '4. **async 函数的 throw 变成 reject**：`async function f(){ throw err }` 等价于 ' +
            '返回 `Promise.reject(err)`，调用方需 .catch 或 try/catch。\n' +
            '5. **错误冒泡**：Promise 链中未被 catch 的错误会一直向后传递，直到被 catch 或变成 unhandledrejection。' +
            '在链尾加 .catch 是好习惯。\n' +
            '6. **同步错误不能跨 async 边界捕获**：`async function f(){ setTimeout(() => throw err) }` ' +
            '中的 setTimeout 错误不会被 f 的 try/catch 捕获，需在回调内部处理。\n\n' +
            '## 实际应用\n\n' +
            '生产级前端的错误处理策略：① 重试（网络抖动重试 1-2 次，指数退避）；' +
            '② 降级（用缓存数据或默认值）；③ 通知用户（toast/弹窗友好提示）；' +
            '④ 记录日志（上报 Sentry 等错误监控）。通常封装统一的请求拦截器：' +
            'fetch 封装里统一检查 res.ok、统一 catch、统一 toast。\n\n' +
            'React 有 ErrorBoundary 捕获组件渲染错误（但捕获不了异步错误）。' +
            '全局兜底用 `window.addEventListener("unhandledrejection", handler)` 捕获漏网的 rejection。' +
            '错误处理是软件健壮性的核心，良好的错误处理能让应用在异常情况下仍保持可用。\n\n' +
            '## 扩展知识\n\n' +
            '- **重试模式**：`async function retry(fn, times) { for(let i=0;i<times;i++) try{return await fn()}catch{} }`。\n' +
            '- **指数退避**：重试间隔递增（1s, 2s, 4s），避免雪崩，常用 p-retry 库。\n' +
            '- **熔断器模式**：连续失败超阈值时"熔断"（直接返回失败），一段时间后"半开"试探。' +
            '- **全局错误上报**：Sentry、Bugsnag 等服务自动捕获并上报未处理错误。\n' +
            '- **ErrorBoundary 限制**：React ErrorBoundary 不捕获事件回调、setTimeout、async 错误，需手动 try/catch。',
          examples: [
            {
              title: 'try/catch 处理 await',
              code:
                '// 概念演示：try/catch 包裹 await\n' +
                'async function safeRun() {\n' +
                '  try {\n' +
                '    // 模拟可能失败的异步操作\n' +
                '    const val = await Promise.reject(new Error("模拟失败"))\n' +
                '    console.log("不会执行:", val)\n' +
                '  } catch (e) {\n' +
                '    console.log("捕获到:", e.message)  // 同步执行？不，catch 回调是异步\n' +
                '  }\n' +
                '}\n' +
                'safeRun()  // 调用（输出不会被沙箱捕获，仅供参考）\n' +
                'console.log("调用已发起")  // 这行会被捕获',
              explanation:
                'try/catch 包裹 await，被 reject 的 Promise 错误会被 catch 捕获。' +
                '注意 safeRun 内的 console.log 是异步执行的（await 后），沙箱可能捕获不到；' +
                '最后的同步 log 会被捕获。这正是异步与同步输出的区别。',
            },
            {
              title: 'Promise.allSettled 部分失败容错',
              code:
                '// 概念演示：allSettled 容忍部分失败\n' +
                'const tasks = [\n' +
                '  Promise.resolve("成功1"),\n' +
                '  Promise.reject(new Error("失败2")),\n' +
                '  Promise.resolve("成功3")\n' +
                ']\n' +
                'Promise.allSettled(tasks).then(results => {\n' +
                '  // results 是同步可遍历的数组（但 then 回调异步，沙箱可能捕获不到）\n' +
                '  results.forEach(r => {\n' +
                '    if (r.status === "fulfilled") console.log("ok:", r.value)\n' +
                '    else console.log("err:", r.reason.message)\n' +
                '  })\n' +
                '})\n' +
                'console.log("allSettled 已发起")  // 同步，会被捕获',
              explanation:
                'Promise.allSettled 等所有 Promise 落定（无论成功失败），返回带 status 字段的结果数组。' +
                '比 Promise.all 更适合"部分失败可接受"的场景，如批量加载多个资源。' +
                '注意 then 回调内输出异步，沙箱捕获不到——这是异步练习的共性限制。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt:
                '写一个函数 fetchWithRetry(url, times)，用 fetch 请求 url，' +
                '若失败（reject 或 !res.ok）则重试，最多重试 times 次。全部失败则抛出最后一次的错误。' +
                '用 async/await + try/catch 实现。',
              starter_code:
                'async function fetchWithRetry(url, times) {\n' +
                '  // 在此写重试逻辑\n' +
                '}\n',
              hints: [
                '用 for 循环尝试 times 次，try { return await fetch(url) } catch { continue }',
                '注意最后一次失败要 throw，不能 continue',
                '参考：for (let i = 0; i < times; i++) { try { const r = await fetch(url); if (r.ok) return r; } catch(e) { if (i === times - 1) throw e; } }',
              ],
            },
            {
              type: 'open-ended',
              prompt:
                '写一个函数 loadAll(urls)，用 Promise.allSettled 并发请求多个 url，' +
                '返回成功的结果数组（过滤掉 rejected 的）。只关心 fetch 本身成功即可，不用 res.json()。',
              starter_code:
                'async function loadAll(urls) {\n' +
                '  // 在此写代码\n' +
                '}\n',
              hints: [
                '用 Promise.allSettled(urls.map(u => fetch(u)))',
                '遍历 results，过滤 status === "fulfilled"，取 value',
                '参考：const results = await Promise.allSettled(urls.map(u => fetch(u))); return results.filter(r => r.status === "fulfilled").map(r => r.value)',
              ],
            },
          ],
          realWorldScenario:
            '真实应用的 API 调用从不会 100% 成功：网络抖动、服务端 500、超时、CORS 拦截都会发生。' +
            '生产级前端必须有完善的错误处理：请求封装里加重试（应对偶发网络错误）、' +
            'UI 层加错误边界和降级 UI（显示"加载失败，点击重试"）、全局加错误上报（Sentry 等）。' +
            'Promise.allSettled 适合批量加载（如首屏并发请求多个接口，部分失败不阻塞整体渲染）。' +
            '这些模式是前端工程化的基本功，也是面试高频考点。',
        },
      ],
    },
    // ================================================================
    // 第 7 章：DOM 操作
    // ================================================================
    {
      id: 'js-ch7',
      title: 'DOM 操作',
      order: 6,
      lessons: [
        {
          id: 'js-ch7-l1',
          title: '选择元素',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'DOM（Document Object Model）是浏览器把 HTML 解析成的树形对象，JS 通过 DOM API 操作页面。' +
            'DOM 树的根是 `document`，每个 HTML 标签成为一个元素节点（Element node），文本成为文本节点。' +
            '理解 DOM 的树形结构是操作页面的基础——`document.body` 包含所有可见内容，' +
            '`element.parentNode` 访问父节点，`element.children` 访问子元素。\n\n' +
            '选择元素是 DOM 操作的第一步。最常用的现代方法是 `document.querySelector(selector)` ' +
            '和 `document.querySelectorAll(selector)`，前者返回第一个匹配元素（没匹配返回 null），' +
            '后者返回 NodeList（类数组，可 forEach）。selector 用 CSS 选择器语法，' +
            '如 `"#id"`、`".class"`、`"div"`、`"[data-id]"`，与 CSS 选择器完全一致。\n\n' +
            'DOM API 之所以重要，是因为它是 JS 与页面交互的唯一桥梁——无论用 React/Vue 等框架，' +
            '最终都通过 DOM API 渲染页面。理解原生 DOM API 既是日常开发的基础，也是理解框架底层的前提。' +
            '虽然现代项目多用框架（虚拟 DOM），但表单操作、第三方库集成、动态插入内容仍需直接操作 DOM。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 现代选择方法（推荐）\n' +
            'document.querySelector("#id")        // 单个，CSS 选择器\n' +
            'document.querySelector(".class")     // 第一个匹配\n' +
            'document.querySelectorAll("div")     // 所有匹配，返回 NodeList\n' +
            'document.querySelector("[data-id]")  // 属性选择器\n' +
            'document.querySelector("div > p.active")  // 组合选择器\n' +
            '\n' +
            '// 2. 传统选择方法\n' +
            'document.getElementById("id")            // id 不带 #\n' +
            'document.getElementsByClassName("item")  // 返回 HTMLCollection（动态）\n' +
            'document.getElementsByTagName("div")     // 返回 HTMLCollection（动态）\n' +
            '\n' +
            '// 3. 关系导航\n' +
            'el.parentNode          // 父节点\n' +
            'el.children            // 子元素集合\n' +
            'el.nextElementSibling  // 下一个兄弟\n' +
            'el.previousElementSibling // 上一个兄弟\n' +
            '\n' +
            '// 4. NodeList 遍历\n' +
            'const items = document.querySelectorAll(".item")\n' +
            'items.forEach(el => console.log(el))  // NodeList 可 forEach\n' +
            '// NodeList 转数组以用更多方法\n' +
            '[...items].filter(el => el.checked)\n' +
            '```\n\n' +
            '## 选择方法对比表\n\n' +
            '| 方法 | 返回类型 | 是否动态 | 参数 | 说明 |\n' +
            '|------|----------|----------|------|------|\n' +
            '| `querySelector(sel)` | Element/null | - | CSS 选择器 | 第一个匹配 |\n' +
            '| `querySelectorAll(sel)` | NodeList | 静态 | CSS 选择器 | 所有匹配 |\n' +
            '| `getElementById(id)` | Element/null | - | id（不带#） | 按 id 查找 |\n' +
            '| `getElementsByClassName(c)` | HTMLCollection | 动态 | 类名 | 按类名查找 |\n' +
            '| `getElementsByTagName(t)` | HTMLCollection | 动态 | 标签名 | 按标签查找 |\n' +
            '| `el.closest(sel)` | Element/null | - | CSS 选择器 | 最近的匹配祖先 |\n' +
            '| `el.matches(sel)` | boolean | - | CSS 选择器 | 是否匹配选择器 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. querySelector 选择元素\n' +
            'const title = document.querySelector("h1")  // 第一个 h1\n' +
            'const items = document.querySelectorAll(".item")  // 所有 .item\n' +
            'console.log(title)  // 元素对象或 null\n' +
            'items.forEach(el => console.log(el.textContent))\n' +
            '// 组合选择器\n' +
            'const active = document.querySelector("nav .active")\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. closest 与 matches\n' +
            'const btn = document.querySelector("button")\n' +
            '// closest 找最近的匹配祖先（含自身）\n' +
            'const card = btn.closest(".card")  // 按钮所在的 .card 容器\n' +
            '// matches 判断是否匹配选择器\n' +
            'if (btn.matches("[data-action=delete]")) {\n' +
            '  console.log("删除按钮")\n' +
            '}\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. NodeList 遍历与转换\n' +
            'const checkboxes = document.querySelectorAll("input[type=checkbox]")\n' +
            '// forEach 直接遍历\n' +
            'checkboxes.forEach(cb => cb.checked = true)\n' +
            '// 转数组用 filter/map\n' +
            'const checked = [...checkboxes].filter(cb => cb.checked)\n' +
            'console.log(checked.length)\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **HTMLCollection 是动态的，NodeList（querySelectorAll）是静态的**：' +
            '遍历 HTMLCollection 时增删元素会导致索引变化，容易出错。需遍历用 querySelectorAll。\n' +
            '2. **getElementById 不带 #**：`getElementById("id")` 而非 `getElementById("#id")`，' +
            '这是与 querySelector 的区别，新手常犯。\n' +
            '3. **querySelector 没匹配返回 null**：直接访问 null 的属性会报错，' +
            '需判空 `if (el) el.textContent = "..."` 或用可选链 `el?.textContent`。\n' +
            '4. **closest 从自身开始找**：`el.closest(".card")` 包含 el 自身，若 el 本身匹配则返回 el。\n' +
            '5. **querySelectorAll 返回的是静态快照**：之后 DOM 变化不会反映到已获取的 NodeList。' +
            '需实时集合用 getElementsByClassName。\n' +
            '6. **选择器性能**：ID 选择器最快（getElementById），复杂组合选择器较慢。' +
            '超高频操作可缓存选择结果。\n\n' +
            '## 实际应用\n\n' +
            'DOM 选择是前端开发的基础：表单验证 `document.querySelector("form").checkValidity()`、' +
            '事件委托 `list.addEventListener("click", e => { const item = e.target.closest(".item") })`、' +
            '动态 UI 更新 `document.querySelector("#count").textContent = count`。' +
            '第三方库集成常需直接操作 DOM（如地图、图表库的容器）。\n\n' +
            '注意：本平台沙箱 iframe 限制了 DOM 操作（无可见文档），练习为 open-ended 参考代码。' +
            '在真实项目中，虽然 React/Vue 等框架封装了 DOM 操作（虚拟 DOM），' +
            '但理解原生 DOM API 是排查问题、优化性能、集成第三方库的必备知识。\n\n' +
            '## 扩展知识\n\n' +
            '- **事件委托**：利用冒泡，在父元素监听子元素事件，`e.target.closest(sel)` 判断来源，' +
            '避免给每个子元素绑定监听器。\n' +
            '- **MutationObserver**：监听 DOM 变化（增删改），用于响应式框架、无限滚动等场景。\n' +
            '- **IntersectionObserver**：监听元素是否进入视口，用于懒加载、无限滚动。\n' +
            '- **Shadow DOM**：Web Components 的封装机制，querySelector 不穿透 Shadow DOM 边界。\n' +
            '- **性能**：频繁 DOM 查询有性能开销，可缓存 `const el = document.querySelector(...)` 复用。',
          examples: [
            {
              title: 'querySelector 选择元素（参考）',
              code:
                '// 概念演示：实际运行需真实 HTML 文档\n' +
                'const title = document.querySelector("h1")  // 第一个 h1\n' +
                'const items = document.querySelectorAll(".item")  // 所有 .item\n' +
                'console.log(title)  // 元素对象或 null\n' +
                'items.forEach(el => console.log(el.textContent))',
              explanation:
                'querySelector 返回第一个匹配元素或 null，querySelectorAll 返回静态 NodeList 可 forEach。' +
                'selector 用 CSS 选择器语法。这是现代 DOM 查询的标准方式。',
            },
            {
              title: 'getElementById 与 getElementsByClassName',
              code:
                '// 概念演示：传统选择方法\n' +
                'const header = document.getElementById("header")  // id 不带 #\n' +
                'const buttons = document.getElementsByClassName("btn")  // 动态集合\n' +
                'console.log(header)\n' +
                'for (let i = 0; i < buttons.length; i++) {\n' +
                '  console.log(buttons[i].tagName)  // HTMLCollection 不能 forEach，用 for\n' +
                '}',
              explanation:
                'getElementById 返回单个元素（id 不带 #）。getElementsByClassName 返回 HTMLCollection，' +
                '是动态的（DOM 变化会反映到集合），且没有 forEach 方法，需用 for 循环或 Array.from 转换。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt:
                '写一段代码：选择页面上所有 class 为 "todo-item" 的元素，打印它们的 textContent。' +
                '用 querySelectorAll 和 forEach 实现。',
              starter_code:
                '// 在此写代码\n',
              hints: [
                '用 document.querySelectorAll(".todo-item")',
                'forEach 接收回调，参数是元素',
                '参考：document.querySelectorAll(".todo-item").forEach(el => console.log(el.textContent))',
              ],
            },
          ],
          realWorldScenario:
            '选择元素是所有前端交互的起点：找到按钮才能绑定点击、找到输入框才能读值、找到列表才能渲染。' +
            'React/Vue 等框架用数据驱动视图，底层仍依赖 DOM API。理解选择器（id、class、属性、' +
            '后代、伪类）让你能用 CSS 思维精准定位元素，也是调试 DOM 问题的基础。' +
            '现代项目还常配合 data-* 属性做测试钩子（如 [data-testid="submit"])。',
        },
        {
          id: 'js-ch7-l2',
          title: '修改内容与样式',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '选中元素后，最常用的操作是修改内容和样式。读改文本用 `el.textContent`（纯文本，自动转义 HTML，' +
            '推荐）或 `el.innerHTML`（HTML 字符串，可注入标签但有 XSS 风险，慎用）。' +
            '读改属性用 `el.getAttribute(name)` / `el.setAttribute(name, value)`，' +
            '或直接 `el.id`、`el.href`、`el.value` 等标准属性。' +
            'data-* 属性用 `el.dataset.key`（自动转驼峰，data-user-id → dataset.userId）。\n\n' +
            '修改样式有两种方式：① 行内样式 `el.style.color = "red"`（驼峰命名，background-color → backgroundColor）；' +
            '② 切换 class `el.classList.add("active")` / `.remove` / `.toggle` / `.contains`（推荐，' +
            '把样式逻辑留在 CSS 里，JS 只切换状态）。class 操作比直接改 style 更易维护，' +
            '是工程化项目的标准做法。\n\n' +
            'DOM 操作之所以需要谨慎，是因为它涉及安全（XSS）、性能（重排重绘）、可维护性（结构/样式分离）。' +
            'innerHTML 是 XSS 的主要入口——用户输入直接拼接 innerHTML 会被执行。' +
            '频繁 DOM 修改触发重排（layout）和重绘（paint），影响性能。' +
            '理解这些约束才能写出安全、高效、可维护的 DOM 代码。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 修改内容\n' +
            'el.textContent = "纯文本"    // 安全，HTML 自动转义\n' +
            'el.innerHTML = "<b>粗体</b>" // 解析 HTML（有 XSS 风险）\n' +
            'el.innerText = "可见文本"     // 考虑 CSS（慢，少用）\n' +
            '\n' +
            '// 2. 修改属性\n' +
            'el.setAttribute("data-id", "42")\n' +
            'el.getAttribute("data-id")    // "42"\n' +
            'el.removeAttribute("data-id")\n' +
            'el.dataset.id                 // data-id 的便捷访问\n' +
            'el.dataset.userId             // data-user-id → 驼峰\n' +
            '\n' +
            '// 3. 行内样式\n' +
            'el.style.color = "red"\n' +
            'el.style.backgroundColor = "#f0f0f0"  // 驼峰命名\n' +
            'el.style.cssText = "color:red;font-size:16px"  // 批量设置\n' +
            '\n' +
            '// 4. classList 操作（推荐）\n' +
            'el.classList.add("active")      // 添加\n' +
            'el.classList.remove("active")   // 移除\n' +
            'el.classList.toggle("active")   // 切换（有则删无则加）\n' +
            'el.classList.contains("active") // 是否包含\n' +
            'el.classList.replace("old", "new") // 替换\n' +
            '\n' +
            '// 5. 创建与插入元素\n' +
            'const div = document.createElement("div")\n' +
            'div.textContent = "新元素"\n' +
            'parent.appendChild(div)      // 追加到末尾\n' +
            'parent.insertBefore(div, ref) // 插到 ref 前\n' +
            'parent.prepend(div)          // 插到最前\n' +
            'div.remove()                 // 移除\n' +
            '```\n\n' +
            '## DOM 操作 API 表\n\n' +
            '| 操作 | API | 说明 |\n' +
            '|------|-----|------|\n' +
            '| 文本 | `el.textContent` | 纯文本，安全 |\n' +
            '| HTML | `el.innerHTML` | 解析 HTML，XSS 风险 |\n' +
            '| 属性读 | `el.getAttribute(name)` | 任意属性 |\n' +
            '| 属性写 | `el.setAttribute(name, val)` | 任意属性 |\n' +
            '| data-* | `el.dataset.key` | 自动驼峰 |\n' +
            '| 行内样式 | `el.style.prop` | 驼峰命名 |\n' +
            '| 批量样式 | `el.style.cssText` | 字符串 |\n' +
            '| 添加类 | `el.classList.add(c)` | - |\n' +
            '| 移除类 | `el.classList.remove(c)` | - |\n' +
            '| 切换类 | `el.classList.toggle(c)` | 返回布尔 |\n' +
            '| 判断类 | `el.classList.contains(c)` | 返回布尔 |\n' +
            '| 创建 | `document.createElement(tag)` | 新元素 |\n' +
            '| 追加 | `parent.appendChild(child)` | 末尾 |\n' +
            '| 插入 | `parent.insertBefore(new, ref)` | ref 前 |\n' +
            '| 移除 | `el.remove()` | 自身移除 |\n' +
            '| 替换 | `parent.replaceChild(new, old)` | 替换 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 修改文本与属性\n' +
            'const el = document.querySelector("#title")\n' +
            'el.textContent = "新标题"  // 安全，纯文本\n' +
            'el.setAttribute("data-id", "42")\n' +
            'console.log(el.dataset.id)  // "42"\n' +
            'console.log(el.getAttribute("data-id"))  // "42"\n' +
            '// data-user-id → dataset.userId\n' +
            'el.setAttribute("data-user-id", "u1")\n' +
            'console.log(el.dataset.userId)  // "u1"\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. classList 切换样式（推荐）\n' +
            'const btn = document.querySelector("button")\n' +
            'btn.classList.add("active")\n' +
            'btn.classList.toggle("loading")  // 切换\n' +
            'if (btn.classList.contains("active")) {\n' +
            '  console.log("按钮激活")\n' +
            '}\n' +
            '// 行内样式（少用，优先用 class）\n' +
            'btn.style.color = "white"\n' +
            'btn.style.backgroundColor = "blue"\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 动态创建列表\n' +
            'const list = document.querySelector("#list")\n' +
            'const fruits = ["苹果", "香蕉", "橙子"]\n' +
            'fruits.forEach(name => {\n' +
            '  const li = document.createElement("li")\n' +
            '  li.textContent = name  // 安全，不用 innerHTML\n' +
            '  li.classList.add("fruit-item")\n' +
            '  list.appendChild(li)\n' +
            '})\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **innerHTML 有 XSS 风险**：用户输入直接拼 innerHTML 会被执行恶意脚本。' +
            '应优先用 textContent，必须用 HTML 时用 DOMPurify 等库消毒。\n' +
            '2. **textContent vs innerHTML**：textContent 只设纯文本（HTML 标签被转义显示），' +
            'innerHTML 会解析 HTML 标签。安全优先用 textContent。\n' +
            '3. **style 用驼峰命名**：CSS 的 `background-color` 对应 `el.style.backgroundColor`，' +
            '连字符属性都转驼峰。\n' +
            '4. **classList 优于直接改 style**：把样式逻辑放 CSS，JS 只切 class，' +
            '结构/样式分离，更易维护和主题切换。\n' +
            '5. **频繁 DOM 修改影响性能**：每次修改可能触发重排（layout）和重绘（paint）。' +
            '批量修改用 DocumentFragment 或先脱离文档再改。' +
            '6. **innerHTML 重建子树**：`el.innerHTML = "..."` 会销毁所有子元素并重建，' +
            '丢失事件监听、丢失输入状态。增量更新用 createElement + appendChild。\n\n' +
            '## 实际应用\n\n' +
            'DOM 修改是构建动态 UI 的核心：表单验证显示错误 `errEl.textContent = "请输入邮箱"`、' +
            '动态加载列表 `data.forEach(item => { const li = createElement("li"); li.textContent = item })`、' +
            '主题切换 `document.body.classList.toggle("dark")`。' +
            'class 切换是状态管理的轻量方案——active/disabled/loading 等状态用 class 表达。\n\n' +
            '注意：本平台沙箱无可见文档，练习为 open-ended 参考代码。' +
            '在现代框架项目中，DOM 修改多由框架处理（虚拟 DOM diff），但理解原生 API 有助于排查问题。' +
            '第三方库集成（如 CodeMirror、Monaco 编辑器）仍需直接操作 DOM。\n\n' +
            '## 扩展知识\n\n' +
            '- **DocumentFragment**：轻量文档片段，批量插入元素时先加入 fragment 再一次性 appendChild，' +
            '减少重排次数，提升性能。\n' +
            '- **cloneNode**：`el.cloneNode(true)` 深拷贝元素及子树，用于模板复用。\n' +
            '- **replaceWith**：`el.replaceWith(newEl)` 用新元素替换自身，比 replaceChild 更直观。\n' +
            '- **insertAdjacentHTML**：`el.insertAdjacentHTML("beforeend", html)` 在指定位置插入 HTML，' +
            '比 innerHTML 更灵活（但仍需注意 XSS）。\n' +
            '- **重排与重绘**：重排（layout）开销大于重绘（paint）。批量修改样式、用 transform 替代 top/left 可优化。',
          examples: [
            {
              title: '修改文本与属性（参考）',
              code:
                '// 概念演示：实际运行需真实文档\n' +
                'const el = document.querySelector("#title")\n' +
                'el.textContent = "新标题"  // 安全，纯文本\n' +
                'el.setAttribute("data-id", "42")\n' +
                'console.log(el.dataset.id)  // "42"\n' +
                'console.log(el.getAttribute("data-id"))  // "42"',
              explanation:
                'textContent 设置纯文本（HTML 自动转义，防 XSS）。setAttribute/dataset 读写 data-* 属性。' +
                'dataset 自动把 data-user-id 映射为 dataset.userId（驼峰）。',
            },
            {
              title: 'classList 切换样式（推荐）',
              code:
                '// 概念演示：用 class 控制样式\n' +
                'const btn = document.querySelector("#btn")\n' +
                'btn.classList.add("active")      // 添加\n' +
                'btn.classList.remove("disabled") // 移除\n' +
                'btn.classList.toggle("open")     // 切换（有则删，无则加）\n' +
                'if (btn.classList.contains("active")) {\n' +
                '  console.log("按钮已激活")\n' +
                '}',
              explanation:
                'classList 提供 add/remove/toggle/contains 四个方法，比 className 字符串拼接更安全清晰。' +
                '把样式逻辑放在 CSS class 里，JS 只切换 class，是工程化项目的标准做法，便于维护和主题切换。',
            },
            {
              title: '创建与插入元素',
              code:
                '// 概念演示：动态构建列表\n' +
                'const list = document.querySelector("#list")\n' +
                'const fruits = ["苹果", "香蕉", "橘子"]\n' +
                'fruits.forEach(name => {\n' +
                '  const li = document.createElement("li")\n' +
                '  li.textContent = name  // 用 textContent 防注入\n' +
                '  li.classList.add("item")\n' +
                '  list.appendChild(li)  // 追加到末尾\n' +
                '})',
              explanation:
                'createElement 创建元素，appendChild 追加。用 textContent 设置内容避免 XSS。' +
                '逐个构建比 innerHTML 拼接字符串更安全，且不会破坏已有事件监听器（innerHTML 会重建子树）。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt:
                '写一段代码：选择 id 为 "msg" 的元素，把它的 textContent 改成 "加载完成"，' +
                '并给它添加 class "success"。',
              starter_code:
                '// 在此写代码\n',
              hints: [
                '用 document.querySelector("#msg") 选中元素',
                '设置 el.textContent 和 el.classList.add',
                '参考：const el = document.querySelector("#msg"); el.textContent = "加载完成"; el.classList.add("success")',
              ],
            },
            {
              type: 'open-ended',
              prompt:
                '写一个函数 appendItem(listId, text)，向 id 为 listId 的 ul 追加一个 li，' +
                'li 的 textContent 为 text，class 为 "item"。',
              starter_code:
                'function appendItem(listId, text) {\n' +
                '  // 在此写代码\n' +
                '}\n',
              hints: [
                '用 document.createElement("li") 创建元素',
                '设置 textContent 和 classList.add，再 appendChild',
                '参考：const li = document.createElement("li"); li.textContent = text; li.classList.add("item"); document.getElementById(listId).appendChild(li)',
              ],
            },
          ],
          realWorldScenario:
            '修改内容和样式是动态 UI 的核心：表单验证后显示错误提示、点击按钮切换加载状态、' +
            '收到新数据后往列表追加条目。Todo 应用的"添加待办"就是 createElement + textContent + ' +
            'appendChild 的组合。用 classList 切换 class 控制样式，能让样式逻辑留在 CSS 里，' +
            '便于主题切换和响应式。记住：永远用 textContent 而非 innerHTML 设置用户输入，防 XSS。',
        },
        {
          id: 'js-ch7-l3',
          title: '事件监听',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '事件是浏览器响应用户交互的机制：点击、输入、滚动、键盘等都会触发事件。' +
            '绑定事件监听用 `el.addEventListener(type, listener)`，type 是事件名（如 "click"、"input"），' +
            'listener 是回调函数，事件发生时被调用，参数是事件对象 event。' +
            '一个元素可绑定多个监听器，按添加顺序触发。事件驱动是 JS 在浏览器中的核心运行模式。\n\n' +
            '事件机制之所以重要，是因为它让页面能"响应"用户——没有事件，页面只是静态文档。' +
            '所有 UI 交互（点击按钮、提交表单、拖拽、键盘快捷键）都通过事件实现。' +
            '理解事件模型（捕获→目标→冒泡）、事件对象、事件委托，是构建交互式前端的基础。' +
            '即使使用 React/Vue 等框架（它们封装了事件处理），底层仍是 addEventListener。\n\n' +
            '事件处理的关键概念包括：事件流三阶段（捕获、目标、冒泡）、事件对象（target/currentTarget）、' +
            '默认行为阻止（preventDefault）、冒泡阻止（stopPropagation）、事件委托（利用冒泡）。' +
            '掌握这些概念才能处理从简单点击到复杂交互的各种场景。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 绑定事件监听\n' +
            'el.addEventListener("click", function(event) {\n' +
            '  console.log("被点击")\n' +
            '})\n' +
            '// 同一元素可绑多个监听器\n' +
            'el.addEventListener("click", handler2)\n' +
            '\n' +
            '// 2. 事件对象关键属性\n' +
            'el.addEventListener("click", (e) => {\n' +
            '  e.target         // 实际触发元素（可能为子元素）\n' +
            '  e.currentTarget  // 绑定监听器的元素（=== el）\n' +
            '  e.type           // "click"\n' +
            '  e.preventDefault()    // 阻止默认行为\n' +
            '  e.stopPropagation()   // 阻止冒泡\n' +
            '})\n' +
            '\n' +
            '// 3. 事件流三阶段\n' +
            'el.addEventListener("click", handler, false)  // 冒泡阶段（默认）\n' +
            'el.addEventListener("click", handler, true)   // 捕获阶段\n' +
            '\n' +
            '// 4. 移除监听（必须传同一函数引用）\n' +
            'el.removeEventListener("click", handler)\n' +
            '\n' +
            '// 5. 选项对象（替代第三参数布尔）\n' +
            'el.addEventListener("click", handler, {\n' +
            '  once: true,        // 只触发一次后自动移除\n' +
            '  passive: true,     // 不调 preventDefault（性能优化）\n' +
            '  capture: false     // 冒泡阶段\n' +
            '})\n' +
            '```\n\n' +
            '## 常见事件类型与对象属性表\n\n' +
            '| 事件类型 | 事件名 | 关键属性 | 说明 |\n' +
            '|----------|--------|----------|------|\n' +
            '| 鼠标 | click/dblclick | clientX, clientY, button | 点击/双击 |\n' +
            '| 鼠标 | mousedown/mouseup | clientX, button | 按下/释放 |\n' +
            '| 鼠标 | mousemove | clientX, clientY | 移动 |\n' +
            '| 鼠标 | mouseenter/mouseleave | relatedTarget | 进入/离开（不冒泡） |\n' +
            '| 鼠标 | mouseover/mouseout | relatedTarget | 进入/离开（冒泡） |\n' +
            '| 键盘 | keydown/keyup | key, code, ctrlKey, shiftKey | 按键 |\n' +
            '| 表单 | input/change | target.value | 输入/改变 |\n' +
            '| 表单 | submit | target (form) | 提交（preventDefault 阻止） |\n' +
            '| 表单 | focus/blur | target | 聚焦/失焦 |\n' +
            '| UI | scroll | target | 滚动 |\n' +
            '| UI | resize | target | 窗口大小变化 |\n' +
            '| 拖拽 | drag/drop | dataTransfer | 拖拽 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 绑定点击事件\n' +
            'const btn = document.querySelector("#btn")\n' +
            'btn.addEventListener("click", function(event) {\n' +
            '  console.log("被点击了")\n' +
            '  console.log(event.target)         // 触发元素\n' +
            '  console.log(event.currentTarget)  // btn（绑定者）\n' +
            '})\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 阻止默认行为与冒泡\n' +
            'const form = document.querySelector("form")\n' +
            'form.addEventListener("submit", (e) => {\n' +
            '  e.preventDefault()  // 阻止表单提交刷新页面\n' +
            '  // 用 AJAX 提交\n' +
            '})\n' +
            'const inner = document.querySelector(".inner")\n' +
            'inner.addEventListener("click", (e) => {\n' +
            '  e.stopPropagation()  // 阻止冒泡到父元素\n' +
            '})\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. once 选项与移除监听\n' +
            '// once: 只触发一次\n' +
            'btn.addEventListener("click", () => {\n' +
            '  console.log("只触发一次")\n' +
            '}, { once: true })\n' +
            '// 移除监听需同一函数引用\n' +
            'function handler() { console.log("click") }\n' +
            'btn.addEventListener("click", handler)\n' +
            'btn.removeEventListener("click", handler)  // 必须传 handler 不是新函数\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **removeEventListener 需同一函数引用**：匿名函数无法移除，因为每次创建都是新引用。' +
            '需移除的监听器必须用具名函数。\n' +
            '2. **target vs currentTarget**：target 是实际触发元素（可能为子元素），' +
            'currentTarget 是绑定监听器的元素。事件委托时用 target 判断来源。\n' +
            '3. **preventDefault vs stopPropagation**：preventDefault 阻止默认行为（如链接跳转、表单提交），' +
            'stopPropagation 阻止冒泡（不影响默认行为）。两者独立。\n' +
            '4. **箭头函数与 this**：事件回调中箭头函数的 this 是外层 this（非元素），' +
            '普通 function 的 this 是 currentTarget。需 this 用普通函数或用 currentTarget。\n' +
            '5. **mouseenter 不冒泡，mouseover 冒泡**：鼠标进出事件，mouseenter/leave 不冒泡（只触发自身），' +
            'mouseover/out 冒泡（子元素也触发）。事件委托需用冒泡版本。\n' +
            '6. **passive 优化滚动**：scroll/touch 事件设 `{ passive: true }` 告知浏览器不会 preventDefault，' +
            '让滚动更流畅。\n\n' +
            '## 实际应用\n\n' +
            '事件监听是前端交互的核心：按钮点击 `btn.addEventListener("click", handler)`、' +
            '表单提交 `form.addEventListener("submit", e => { e.preventDefault(); validate() })`、' +
            '键盘快捷键 `document.addEventListener("keydown", e => { if (e.ctrlKey && e.key === "s") save() })`、' +
            '滚动加载 `window.addEventListener("scroll", throttle(handler, 200))`。\n\n' +
            '注意：本平台沙箱无真实交互，练习为 open-ended 参考代码。在真实项目中，' +
            '所有 UI 框架底层都基于 addEventListener。React 用合成事件（统一代理），Vue 用模板指令（@click），' +
            '但本质相同。理解原生事件模型是排查交互问题的基础。\n\n' +
            '## 扩展知识\n\n' +
            '- **事件委托**：利用冒泡，父元素监听子元素事件，详见下节。是处理动态列表的标准模式。\n' +
            '- **CustomEvent**：`new CustomEvent("my-event", { detail: data })` 自定义事件，用于组件通信。\n' +
            '- **防抖与节流**：高频事件（input/scroll/resize）用 debounce/throttle 限制触发频率。\n' +
            '- **passive 事件**：`{ passive: true }` 优化滚动性能，告知浏览器不调 preventDefault。\n' +
            '- **事件循环**：事件回调作为宏任务执行，Promise 微任务优先于事件回调。',
          examples: [
            {
              title: '绑定点击事件（参考）',
              code:
                '// 概念演示：实际运行需真实文档\n' +
                'const btn = document.querySelector("#btn")\n' +
                'btn.addEventListener("click", function(event) {\n' +
                '  console.log("被点击了")\n' +
                '  console.log("目标元素:", event.target.tagName)\n' +
                '  console.log("绑定元素:", event.currentTarget.id)\n' +
                '})',
              explanation:
                'addEventListener 绑定监听器，事件发生时调用回调，参数是 event 对象。' +
                'target 是实际触发的元素（可能是子元素），currentTarget 是绑定监听器的元素。' +
                '一个元素可绑多个监听器，按顺序触发。',
            },
            {
              title: '阻止默认行为与冒泡',
              code:
                '// 概念演示：表单提交拦截\n' +
                'const form = document.querySelector("#form")\n' +
                'form.addEventListener("submit", function(event) {\n' +
                '  event.preventDefault()  // 阻止表单默认提交跳转\n' +
                '  console.log("用 JS 处理表单，不跳转")\n' +
                '  // 此处可 fetch 提交或校验\n' +
                '})\n' +
                '// 阻止冒泡：子元素点击不触发父元素监听\n' +
                'const inner = document.querySelector("#inner")\n' +
                'inner.addEventListener("click", function(event) {\n' +
                '  event.stopPropagation()  // 阻止冒泡到父元素\n' +
                '  console.log("仅内部处理")\n' +
                '})',
              explanation:
                'preventDefault 阻止浏览器默认行为（表单提交、链接跳转、右键菜单等）。' +
                'stopPropagation 阻止事件冒泡到父元素。这两个方法是精细控制事件流程的关键。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt:
                '写一段代码：选择 id 为 "myBtn" 的按钮，绑定 click 事件，点击时在控制台打印 "clicked"。' +
                '用 addEventListener。',
              starter_code:
                '// 在此写代码\n',
              hints: [
                '用 document.querySelector("#myBtn") 选中按钮',
                'addEventListener("click", 回调函数)',
                '参考：document.querySelector("#myBtn").addEventListener("click", () => console.log("clicked"))',
              ],
            },
            {
              type: 'open-ended',
              prompt:
                '写一段代码：拦截 id 为 "myForm" 的表单的 submit 事件，阻止默认提交，打印 "已拦截"。',
              starter_code:
                '// 在此写代码\n',
              hints: [
                'addEventListener("submit", 回调)，回调里调 event.preventDefault()',
                '注意回调参数是 event',
                '参考：document.querySelector("#myForm").addEventListener("submit", e => { e.preventDefault(); console.log("已拦截") })',
              ],
            },
          ],
          realWorldScenario:
            '事件监听是所有前端交互的基石：按钮点击、表单提交、输入实时校验、滚动加载更多、' +
            '键盘快捷键。现代框架（React 的 onClick、Vue 的 @click）底层都是 addEventListener。' +
            '理解 event.target（实际触发元素）和 currentTarget（绑定元素）的区别，能处理"点的是子元素' +
            '但监听绑在父元素"的场景。preventDefault 是 SPA 路由和 AJAX 表单的基础——拦截默认跳转，' +
            '改用 JS 处理。',
        },
        {
          id: 'js-ch7-l4',
          title: '事件委托',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '事件委托（Event Delegation）是利用事件冒泡机制，把多个子元素的事件统一委托给父元素处理。' +
            '不给每个子元素单独绑监听器，而是在父元素绑一个，用 event.target 判断实际触发的是哪个子元素。' +
            '这是处理"动态增删的列表项"等场景的标准模式，也是前端工程的高频最佳实践。\n\n' +
            '为什么需要事件委托？① 性能：100 个列表项绑 100 个监听器不如父元素绑 1 个，减少内存和初始化开销；' +
            '② 动态元素：后续新增的子元素无需重新绑监听器，自动被父元素委托覆盖——这是最大优势；' +
            '③ 统一处理：逻辑集中在一处，易维护。典型场景：ul 里的 li 点击、table 里的行点击、' +
            '动态加载的卡片列表、聊天消息列表。\n\n' +
            '事件委托的精髓在于"事件冒泡"——子元素的事件会冒泡到父元素。因此父元素能"感知"子元素的事件。' +
            '这把"多对多"的监听关系简化为"一对一"（父元素一个监听器处理所有子元素）。' +
            '理解冒泡机制是掌握事件委托的前提，也是前端性能优化的重要技巧。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 事件委托基本模式\n' +
            'const list = document.querySelector("#list")\n' +
            'list.addEventListener("click", function(event) {\n' +
            '  // closest 找最近的匹配祖先（含自身）\n' +
            '  const item = event.target.closest(".item")\n' +
            '  if (!item) return  // 点到非目标区域，忽略\n' +
            '  // 处理点击\n' +
            '  console.log("点击了:", item.dataset.id)\n' +
            '})\n' +
            '\n' +
            '// 带操作类型的委托（data-action）\n' +
            'list.addEventListener("click", (e) => {\n' +
            '  const btn = e.target.closest("[data-action]")\n' +
            '  if (!btn) return\n' +
            '  const action = btn.dataset.action  // delete/edit/view\n' +
            '  const id = btn.closest(".item").dataset.id\n' +
            '  switch (action) {\n' +
            '    case "delete": deleteItem(id); break\n' +
            '    case "edit": editItem(id); break\n' +
            '  }\n' +
            '})\n' +
            '```\n\n' +
            '## 事件委托 vs 直接绑定对比表\n\n' +
            '| 特性 | 直接绑定（每个子元素） | 事件委托（父元素） |\n' +
            '|------|----------------------|-------------------|\n' +
            '| 监听器数量 | N 个（每子元素一个） | 1 个（父元素） |\n' +
            '| 内存开销 | 大 | 小 |\n' +
            '| 动态新增元素 | 需重新绑定 | 自动覆盖 |\n' +
            '| 动态删除元素 | 需移除监听 | 自动失效 |\n' +
            '| 逻辑集中度 | 分散 | 集中 |\n' +
            '| 实现复杂度 | 简单 | 略复杂（需 closest） |\n' +
            '| 适用场景 | 少量静态元素 | 大量/动态元素 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 列表事件委托（经典模式）\n' +
            'const list = document.querySelector("#list")\n' +
            'list.addEventListener("click", function(event) {\n' +
            '  // closest 找最近的 li（处理 target 是 li 内子元素的情况）\n' +
            '  const li = event.target.closest("li")\n' +
            '  if (!li) return  // 点到 ul 空白处\n' +
            '  console.log("点击了:", li.textContent)\n' +
            '  li.classList.toggle("selected")\n' +
            '})\n' +
            '// 即使后续新增 li 也自动有事件处理\n' +
            'const newLi = document.createElement("li")\n' +
            'newLi.textContent = "新项"\n' +
            'list.appendChild(newLi)  // 自动有点击处理\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. data-action 模式（多操作委托）\n' +
            'document.querySelector(".toolbar").addEventListener("click", (e) => {\n' +
            '  const btn = e.target.closest("[data-action]")\n' +
            '  if (!btn) return\n' +
            '  const { action, id } = btn.dataset\n' +
            '  if (action === "delete") {\n' +
            '    if (confirm("确定删除？")) deleteItem(id)\n' +
            '  } else if (action === "edit") {\n' +
            '    editItem(id)\n' +
            '  }\n' +
            '})\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 对比：无委托（需手动绑定每个）\n' +
            '// 不推荐：动态新增需重新绑定\n' +
            'document.querySelectorAll(".item").forEach(item => {\n' +
            '  item.addEventListener("click", () => {\n' +
            '    console.log(item.dataset.id)\n' +
            '  })\n' +
            '})\n' +
            '// 新增元素需再次绑定\n' +
            'const newItem = document.createElement("div")\n' +
            'newItem.className = "item"\n' +
            'newItem.addEventListener("click", () => { ... })  // 麻烦\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **用 closest 而非直接判断 target**：target 可能是子元素的深层节点（如 li 内的 span），' +
            '直接判断 `e.target.matches("li")` 会漏。closest 从 target 往上找最近匹配，更可靠。\n' +
            '2. **判断 closest 返回 null**：点到非目标区域（如列表空白处）时 closest 返回 null，' +
            '必须 `if (!item) return` 避免 null 报错。\n' +
            '3. **不冒泡事件无法委托**：focus/blur 不冒泡，需用 focusin/focusout（冒泡版本）。' +
            'mouseenter/leave 不冒泡，需用 mouseover/out。\n' +
            '4. **性能权衡**：事件委托把处理逻辑集中，但每次点击都需 closest 遍历。' +
            '元素层级很深时 closest 开销增大，超深层嵌套慎用。\n' +
            '5. **委托不适合所有场景**：少量静态元素直接绑定更简单清晰。' +
            '委托的优势在"大量"或"动态"元素场景。\n' +
            '6. **stopPropagation 会破坏委托**：子元素若调 stopPropagation 阻止冒泡，父元素的委托监听器不会触发。\n\n' +
            '## 实际应用\n\n' +
            '事件委托是真实工程的必备技能：动态列表（聊天消息、商品列表、评论）点击处理、' +
            '表格行操作（编辑/删除/查看按钮）、工具栏按钮统一处理、表单字段实时验证。' +
            'data-action 模式让 HTML 声明操作类型，JS 统一处理，是前后端分离项目的常见模式。\n\n' +
            '注意：本平台沙箱无真实交互，练习为 open-ended 参考代码。' +
            '在真实项目中，事件委托大幅简化动态 UI 的事件处理。React 等框架在事件处理上' +
            '也采用了类似委托思路（React 17 前委托到 document，之后委托到根容器）。' +
            '理解事件委托是面试高频题，也是衡量前端工程能力的标志之一。\n\n' +
            '## 扩展知识\n\n' +
            '- **React 合成事件**：React 把所有事件委托到根容器（React 17+），模拟事件委托，统一跨浏览器。\n' +
            '- **data-action 模式**：HTML 声明 `data-action="delete"`，JS 用 closest 找到并 switch 处理，解耦视图与逻辑。\n' +
            '- **事件委托与性能**：大量元素场景，委托从 O(n) 监听器降为 O(1)，显著节省内存。\n' +
            '- **不冒泡事件的替代**：focus/blur 不冒泡，用 focusin/focusout（冒泡版）实现委托。\n' +
            '- **MutationObserver 配合**：动态元素增删时，委托无需重新绑定，这是它优于直接绑定的核心优势。',
          examples: [
            {
              title: '列表事件委托（经典模式）',
              code:
                '// 概念演示：ul 委托处理 li 点击\n' +
                'const list = document.querySelector("#list")\n' +
                'list.addEventListener("click", function(event) {\n' +
                '  // closest 找最近的 li（处理 target 是 li 内子元素的情况）\n' +
                '  const li = event.target.closest("li")\n' +
                '  if (!li) return  // 点到 li 外的区域，忽略\n' +
                '  console.log("点击了:", li.textContent)\n' +
                '  console.log("data-id:", li.dataset.id)\n' +
                '})\n' +
                '// 之后动态新增的 li 也会自动被处理，无需重新绑定',
              explanation:
                '父元素绑一个监听器，用 event.target.closest("li") 找到实际点击的 li。' +
                '动态新增的 li 自动被覆盖，无需重新绑定。这是处理动态列表的标准模式，性能和可维护性都好。',
            },
            {
              title: '带选择器的委托封装',
              code:
                '// 概念演示：通用委托工具函数\n' +
                'function delegate(parent, selector, type, handler) {\n' +
                '  parent.addEventListener(type, function(event) {\n' +
                '    const el = event.target.closest(selector)\n' +
                '    if (!el) return\n' +
                '    if (!parent.contains(el)) return  // 确保是 parent 的后代\n' +
                '    handler.call(el, event)  // 把 this 指向匹配元素\n' +
                '  })\n' +
                '}\n' +
                '// 用法：delegate(list, "li.item", "click", function(e) { console.log(this.textContent) })',
              explanation:
                '封装一个通用委托函数，参数为父元素、子选择器、事件类型、回调。' +
                '回调内 this 指向匹配的子元素，便于操作。这种封装在 jQuery 时代就有（on 的委托写法），' +
                '现代原生 JS 同样适用。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt:
                '写一段代码：在 id 为 "todoList" 的 ul 上绑 click 事件委托，点击 li 时打印该 li 的 textContent。' +
                '用 event.target.closest("li") 处理子元素点击，非 li 点击要忽略。',
              starter_code:
                '// 在此写代码\n',
              hints: [
                'addEventListener("click", 回调)，回调里 const li = event.target.closest("li")',
                'if (!li) return 跳过非 li 点击',
                '参考：document.querySelector("#todoList").addEventListener("click", e => { const li = e.target.closest("li"); if (!li) return; console.log(li.textContent) })',
              ],
            },
            {
              type: 'open-ended',
              prompt:
                '写一个通用委托函数 delegate(parent, selector, type, handler)，在 parent 上监听 type 事件，' +
                '当 event.target 匹配 selector（用 closest）时调用 handler，handler 内 this 指向匹配元素。',
              starter_code:
                'function delegate(parent, selector, type, handler) {\n' +
                '  // 在此写代码\n' +
                '}\n',
              hints: [
                'parent.addEventListener(type, function(event) { ... })',
                '回调里 const el = event.target.closest(selector); if (!el) return; handler.call(el, event)',
                '参考答案见本节第二个示例',
              ],
            },
          ],
          realWorldScenario:
            '事件委托是动态 UI 的核心模式：Todo 列表的删除按钮、商品列表的加购、聊天消息的操作菜单。' +
            '不委托的话，每次新增 li 都要重新绑监听器，删除时还要解绑，既繁琐又易内存泄漏。' +
            '委托让父元素统一处理，新增元素自动覆盖。这是构建 Todo 应用、无限滚动列表、' +
            '动态表格的标准手法，也是面试高频考点（"如何给 1000 个按钮绑点击"）。',
        },
      ],
    },
    // ================================================================
    // 第 8 章：进阶主题
    // ================================================================
    {
      id: 'js-ch8',
      title: '进阶主题',
      order: 7,
      lessons: [
        {
          id: 'js-ch8-l1',
          title: '模块 import/export',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'ES 模块（ESM）是 JavaScript 官方的模块系统，用 `export` 导出、`import` 导入。' +
            '模块让代码拆分成独立文件，便于复用和维护。每个 .js/.ts 文件默认是一个模块（有自己的作用域）。' +
            '在 HTML 中用 `<script type="module" src="...">` 加载。Node.js 现代项目（package.json 设 "type": "module"）也用 ESM。\n\n' +
            '模块系统之所以是现代 JS 工程的基石，是因为它解决了三个核心问题：' +
            '① 作用域隔离——每个模块有独立作用域，避免全局污染；' +
            '② 依赖管理——显式声明依赖关系，工具可分析依赖树；' +
            '③ 复用与组合——功能封装为模块，按需导入组合。' +
            '在 ESM 之前，JS 用 CommonJS（Node.js）、AMD（RequireJS）、UMD 等非标准方案，ESM 统一了一切。\n\n' +
            '理解 ESM 的关键是区分"命名导出"与"默认导出"：命名导出可以有多个，导入时名字须一致；' +
            '默认导出每模块一个，导入时名字自定义。另外 ESM 的导入是"活绑定"（live binding）——' +
            '导出方修改值，导入方看到最新值，这与 CommonJS 的值拷贝不同。掌握这些差异才能正确使用模块。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 命名导出（export）\n' +
            'export const PI = 3.14159\n' +
            'export function add(a, b) { return a + b }\n' +
            'export class User { }\n' +
            '// 或统一导出\n' +
            'export { add, PI }\n' +
            '\n' +
            '// 2. 默认导出（每模块一个）\n' +
            'export default function multiply(a, b) { return a * b }\n' +
            'export default class App { }\n' +
            '\n' +
            '// 3. 导入（import）\n' +
            'import { PI, add } from "./math.js"        // 命名导入\n' +
            'import multiply from "./math.js"           // 默认导入（无花括号）\n' +
            'import multiply, { PI, add } from "./math" // 默认 + 命名\n' +
            'import * as Math from "./math.js"          // 全部导入为命名空间\n' +
            'import { add as plus } from "./math.js"    // 重命名\n' +
            'import "./polyfill.js"                     // 仅执行副作用\n' +
            '\n' +
            '// 4. 动态导入（返回 Promise）\n' +
            'const mod = await import("./heavy.js")  // 按需加载\n' +
            'mod.default  // 默认导出\n' +
            '\n' +
            '// 5. 重导出（barrel 文件）\n' +
            'export { add } from "./math.js"\n' +
            'export * from "./utils.js"\n' +
            '```\n\n' +
            '## 导出/导入方式对比表\n\n' +
            '| 方式 | 导出语法 | 导入语法 | 特点 |\n' +
            '|------|----------|----------|------|\n' +
            '| 命名导出 | `export const x` | `import { x }` | 多个，名字须一致 |\n' +
            '| 默认导出 | `export default x` | `import x` | 一个，名字自定义 |\n' +
            '| 全部导入 | - | `import * as Mod` | 命名空间对象 |\n' +
            '| 重命名 | - | `import { x as y }` | 避免命名冲突 |\n' +
            '| 副作用 | - | `import "./mod"` | 仅执行不取值 |\n' +
            '| 动态导入 | - | `import("./mod")` | 返回 Promise |\n' +
            '| 重导出 | `export { x } from` | - | barrel 文件 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 命名导出与导入（参考，沙箱不支持多文件）\n' +
            '// 文件 math.js\n' +
            'export const PI = 3.14159\n' +
            'export function add(a, b) { return a + b }\n' +
            'export default function multiply(a, b) { return a * b }\n' +
            '\n' +
            '// 文件 main.js\n' +
            '// import multiply, { PI, add } from "./math.js"\n' +
            '// console.log(PI, add(1, 2), multiply(3, 4))  // 3.14159 3 12\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 重命名与命名空间导入\n' +
            '// import { add as plus } from "./math.js"\n' +
            '// import * as Math from "./math.js"\n' +
            '// console.log(Math.PI, Math.add(1, 2), Math.default(3, 4))\n' +
            '// 默认导出在命名空间中是 default 属性\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 动态导入（路由懒加载）\n' +
            '// async function loadPage(route) {\n' +
            '//   const mod = await import(`./pages/${route}.js`)\n' +
            '//   return mod.default  // 默认导出的页面组件\n' +
            '// }\n' +
            '// barrel 文件（index.js 统一导出）\n' +
            '// export { add } from "./math.js"\n' +
            '// export { formatDate } from "./date.js"\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **命名导入名字须一致**：`import { add }` 中 add 必须与导出名一致，否则报错。' +
            '重命名用 `import { add as plus }`。\n' +
            '2. **默认导入无花括号**：`import User from "./mod"` 不带花括号，名字自定义。' +
            '混用：`import User, { util } from "./mod"`（默认在前，命名在后）。\n' +
            '3. **导入路径须带扩展名（浏览器）**：浏览器中 `import "./mod.js"` 需完整扩展名；' +
            '打包工具（Vite/webpack）可省略。Node.js ESM 也需扩展名或配置。\n' +
            '4. **导入是活绑定**：导出方修改值，导入方看到最新值。这与 CommonJS 的值拷贝不同，' +
            '是 ESM 的设计特性。\n' +
            '5. **ESM 顶层 this 是 undefined**：非模块脚本顶层 this 是 window，ESM 是 undefined。' +
            'ESM 默认严格模式（无需 "use strict"）。\n' +
            '6. **顶层 await 仅 ESM 支持**：`await` 在模块顶层可用（ES2022），但普通脚本不支持。\n\n' +
            '## 实际应用\n\n' +
            '模块是现代 JS 工程的基石：React 组件 `export default function App()`、' +
            '工具函数库 `export function debounce() {}`、路由懒加载 `const Home = lazy(() => import("./Home"))`、' +
            'barrel 文件 `export * from "./components"` 统一导出。' +
            'Tree-shaking（摇树优化）依赖 ESM 的静态结构——打包工具分析 import/export，移除未用代码。\n\n' +
            '注意：本平台沙箱不支持 ESM（单文件执行），练习为 open-ended 参考代码。' +
            '在真实项目中，所有现代前端项目都用 ESM。Node.js 也逐步从 CommonJS 迁向 ESM。' +
            '理解 ESM 是使用 Vite、webpack、Rollup 等打包工具的前提。\n\n' +
            '## 扩展知识\n\n' +
            '- **CommonJS vs ESM**：CommonJS 用 require/module.exports，值拷贝，同步加载；' +
            'ESM 用 import/export，活绑定，静态分析（支持 tree-shaking）。\n' +
            '- **动态导入**：`import()` 返回 Promise，用于按需加载、路由懒加载、减少首屏包体积。\n' +
            '- **Tree-shaking**：打包工具利用 ESM 静态结构，移除未使用的导出，减小包体积。' +
            'CommonJS 因动态特性无法 tree-shake。\n' +
            '- **import map**：浏览器原生模块映射，`{ "imports": { "react": "url" } }`，无需打包用裸导入。\n' +
            '- **循环依赖**：ESM 支持循环依赖（活绑定特性），但应避免，可能导致初始化顺序问题。',
          examples: [
            {
              title: '命名导出与导入（参考）',
              code:
                '// 文件 math.js（参考，沙箱不支持多文件）\n' +
                'export const PI = 3.14159\n' +
                'export function add(a, b) { return a + b }\n' +
                'export default function multiply(a, b) { return a * b }\n' +
                '\n' +
                '// 文件 main.js\n' +
                '// import multiply, { PI, add } from "./math.js"  // 默认 + 命名\n' +
                '// console.log(PI, add(1, 2), multiply(3, 4))',
              explanation:
                '命名导出用 export 前缀，导入用花括号 { } 按名取。默认导出用 export default，' +
                '导入不用花括号，名字自定义。可同时有命名导出和一个默认导出。这是模块组织代码的基础。',
            },
            {
              title: '动态导入（懒加载）',
              code:
                '// 概念演示：按需加载模块\n' +
                '// import("./heavyModule.js").then(mod => {\n' +
                '//   mod.run()  // 模块加载完成后调用\n' +
                '// })\n' +
                '\n' +
                '// 用 async/await 更清晰\n' +
                '// async function loadAndRun() {\n' +
                '//   const mod = await import("./heavyModule.js")\n' +
                '//   mod.run()\n' +
                '// }',
              explanation:
                'import() 返回 Promise，模块加载完成后 resolve。用于按需加载：路由懒加载、' +
                '大组件延迟加载、条件加载（如只在需要时加载图表库）。是性能优化（减少首屏体积）的关键手段。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt:
                '假设有一个文件 utils.js，导出一个函数 format(date) 和一个常量 VERSION。' +
                '写一行 import 语句，在 main.js 中同时导入这两个（命名导入）。',
              starter_code:
                '// 在此写 import 语句\n',
              hints: [
                '命名导入用花括号：import { 名字 } from "路径"',
                '多个名字用逗号分隔',
                '参考：import { format, VERSION } from "./utils.js"',
              ],
            },
            {
              type: 'open-ended',
              prompt:
                '写一个模块 user.js 的内容：默认导出一个 User 类（有 constructor(name) 和 greet() 方法），' +
                '同时命名导出一个常量 DEFAULT_ROLE = "guest"。',
              starter_code:
                '// user.js 内容\n',
              hints: [
                'export default class User { ... }，export const DEFAULT_ROLE = "guest"',
                'greet 方法可返回 "你好，我是" + this.name',
                '参考：export const DEFAULT_ROLE = "guest"; export default class User { constructor(name){this.name=name} greet(){return "你好，我是"+this.name} }',
              ],
            },
          ],
          realWorldScenario:
            '模块化是工程化项目的基础：把工具函数放 utils.js、API 请求放 api.js、组件放各自文件，' +
            '通过 import 组装。Webpack/Vite 等打包工具基于 ESM 做依赖分析和 Tree Shaking（移除未用导出）。' +
            '路由懒加载用动态 import() 按需加载页面，大幅减少首屏体积。理解 ESM 是参与任何现代前端项目的前提。',
        },
        {
          id: 'js-ch8-l2',
          title: '类与继承',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            'ES6 的 `class` 是基于原型链的语法糖，让面向对象写法更接近传统语言。' +
            '定义类：`class Name { constructor() {} method() {} }`。' +
            'constructor 是构造函数，new 时自动调用。方法定义在类体内（不用 function 关键字）。' +
            '类本质仍是函数和原型，class 让写法更清晰。class 之于原型，如同箭头函数之于 function——语法糖而非新机制。\n\n' +
            '类之所以重要，是因为它是组织"复杂状态与行为"的工具。当对象有多个相关属性和方法时，' +
            '用类把它们封装在一起，比散落的函数和对象更清晰。例如 User 类封装 name/email 和 login/logout 方法，' +
            'Animal 类封装 name/sound 和 speak 方法。类还支持继承（复用代码）、多态（重写方法）、' +
            '封装（私有字段），是面向对象编程的基础。\n\n' +
            '理解 JS 类的关键是认清它"本质是原型"：`class Foo {}` 等价于 `function Foo() {}` + ' +
            '`Foo.prototype.method = function() {}`。class 只是更清晰的语法，没有引入新的继承机制。' +
            '但 class 带来了私有字段（#name）、静态方法、getter/setter 等现代特性，让 JS OOP 更完整。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 基本类定义\n' +
            'class Animal {\n' +
            '  constructor(name) {       // 构造函数，new 时调用\n' +
            '    this.name = name        // 实例属性\n' +
            '  }\n' +
            '  speak() {                 // 实例方法（在原型上）\n' +
            '    return this.name + " 发出声音"\n' +
            '  }\n' +
            '  static create(name) {     // 静态方法（在类上）\n' +
            '    return new Animal(name)\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '// 2. 继承\n' +
            'class Dog extends Animal {\n' +
            '  constructor(name, breed) {\n' +
            '    super(name)             // 必须先调 super（使用 this 前）\n' +
            '    this.breed = breed\n' +
            '  }\n' +
            '  speak() {                  // 重写父类方法\n' +
            '    return super.speak() + "（汪汪）"  // super 调用父类\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '// 3. 私有字段（ES2022）\n' +
            'class User {\n' +
            '  #password                // 私有字段声明\n' +
            '  constructor(name, pwd) {\n' +
            '    this.name = name\n' +
            '    this.#password = pwd   // 私有，外部不可访问\n' +
            '  }\n' +
            '  checkPassword(input) { return input === this.#password }\n' +
            '}\n' +
            '\n' +
            '// 4. getter/setter 与类字段\n' +
            'class Counter {\n' +
            '  count = 0                 // 类字段（实例属性初始化）\n' +
            '  get value() { return this.count }       // getter\n' +
            '  set value(v) { this.count = v }         // setter\n' +
            '}\n' +
            '```\n\n' +
            '## 类的特性对比表\n\n' +
            '| 特性 | 语法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 构造函数 | `constructor() {}` | new 时调用 |\n' +
            '| 实例方法 | `method() {}` | 在原型上，实例共享 |\n' +
            '| 实例属性 | `this.prop = v` | 每实例独立 |\n' +
            '| 类字段 | `prop = v` | 实例属性初始化（ES2022） |\n' +
            '| 静态方法 | `static method()` | 在类上，非实例 |\n' +
            '| 静态字段 | `static prop = v` | 类属性 |\n' +
            '| 私有字段 | `#field` | 外部不可访问 |\n' +
            '| 私有方法 | `#method() {}` | 外部不可调用 |\n' +
            '| getter | `get prop() {}` | 读取时执行 |\n' +
            '| setter | `set prop(v) {}` | 赋值时执行 |\n' +
            '| 继承 | `extends` | 子类继承父类 |\n' +
            '| super | `super()` / `super.method()` | 调用父类 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. 类与继承\n' +
            'class Animal {\n' +
            '  constructor(name) { this.name = name }\n' +
            '  speak() { return this.name + " 发出声音" }\n' +
            '}\n' +
            'class Dog extends Animal {\n' +
            '  constructor(name) { super(name) }\n' +
            '  speak() { return super.speak() + "（汪汪）" }\n' +
            '}\n' +
            'const d = new Dog("旺财")\n' +
            'console.log(d.speak())  // 旺财 发出声音（汪汪）\n' +
            'console.log(d instanceof Dog)    // true\n' +
            'console.log(d instanceof Animal) // true（继承链）\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 静态方法与工厂模式\n' +
            'class User {\n' +
            '  constructor(name) { this.name = name }\n' +
            '  static create(name) { return new User(name) }  // 工厂方法\n' +
            '  static admin() { return new User("admin") }\n' +
            '}\n' +
            'const u = User.create("小明")  // 不需 new，通过静态方法\n' +
            'console.log(u.name)  // 小明\n' +
            'console.log(User.admin().name)  // admin\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 私有字段与 getter/setter\n' +
            'class BankAccount {\n' +
            '  #balance = 0  // 私有字段\n' +
            '  get balance() { return this.#balance }  // 只读 getter\n' +
            '  deposit(amount) {\n' +
            '    if (amount <= 0) throw new Error("金额需正数")\n' +
            '    this.#balance += amount\n' +
            '  }\n' +
            '}\n' +
            'const acc = new BankAccount()\n' +
            'acc.deposit(100)\n' +
            'console.log(acc.balance)  // 100（通过 getter）\n' +
            '// console.log(acc.#balance)  // 报错！私有不可访问\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **子类 constructor 必须先调 super**：在使用 this 前必须 `super(args)`，否则报错。' +
            '因为子类的 this 由父类构造函数初始化。\n' +
            '2. **class 默认严格模式**：类体内默认严格模式，无需 "use strict"。' +
            '方法内 this 在单独调用时是 undefined（非 window）。\n' +
            '3. **class 必须用 new 调用**：`Foo()` 不带 new 会报错（普通函数可以）。' +
            '这是 class 与 function 构造的区别。\n' +
            '4. **私有字段以 # 开头**：`#name` 是私有，`this.#name` 内部可访问，外部不可。' +
            '这是 ES2022 的真正私有（不同于约定式的 _name 下划线）。\n' +
            '5. **类字段是实例属性**：`count = 0` 等价于在 constructor 中 `this.count = 0`，每实例独立。' +
            '静态字段 `static count = 0` 是类属性，所有实例共享。\n' +
            '6. **方法在原型上**：实例方法定义在 `Class.prototype` 上，所有实例共享同一方法，' +
            '不重复创建。这是内存优化，也是原型链的体现。\n\n' +
            '## 实际应用\n\n' +
            '类是组织复杂状态与行为的工具：React 类组件 `class App extends Component`、' +
            'Node.js 自定义错误 `class ApiError extends Error`、数据模型 `class User { constructor(data) {} }`、' +
            '工具类 `class Logger { static log() {} }`。类让相关代码高内聚，是大型项目的组织基础。\n\n' +
            '本节练习可在沙箱运行（同步）。虽然现代前端多用函数式组件（React Hooks），' +
            '但类仍在后端（NestJS）、数据模型、工具库中广泛使用。理解 class 和原型链是' +
            '阅读源码、设计 API 的必备知识。类的继承、多态、封装是面向对象设计的核心。\n\n' +
            '## 扩展知识\n\n' +
            '- **原型链本质**：`class` 编译为 `function` + `prototype` 赋值，`extends` 用 `Object.setPrototypeOf`。\n' +
            '- **抽象类**：JS 无原生抽象类，靠约定（构造时检查 `new.target === AbstractClass` 抛错模拟）。\n' +
            '- **Mixin 模式**：`Object.assign(Target.prototype, Mixin)` 实现多继承替代方案。\n' +
            '- **私有方法**：`#method() {}` ES2022 私有方法，或用 WeakMap 模拟（旧方案）。\n' +
            '- **静态初始化块**：`static { ... }` ES2022，类加载时执行一次，用于复杂静态初始化。',
          examples: [
            {
              title: '类与继承',
              code:
                '// 基类\n' +
                'class Animal {\n' +
                '  constructor(name) { this.name = name }\n' +
                '  speak() { return this.name + " 发出声音" }\n' +
                '}\n' +
                '\n' +
                '// 子类继承\n' +
                'class Dog extends Animal {\n' +
                '  constructor(name, breed) {\n' +
                '    super(name)  // 必须先调 super，才能用 this\n' +
                '    this.breed = breed\n' +
                '  }\n' +
                '  speak() {  // 重写父类方法\n' +
                '    return super.speak() + "（汪汪）"  // super 复用父类\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                'const d = new Dog("旺财", "金毛")\n' +
                'console.log(d.speak())  // 旺财 发出声音（汪汪）\n' +
                'console.log(d instanceof Animal)  // true（继承关系）',
              explanation:
                'extends 实现继承，super(name) 调用父类构造函数（子类 constructor 中必须先调 super 才能用 this）。' +
                '子类可重写方法，用 super.method() 复用父类逻辑。instanceof 能判断继承链上的类型。',
            },
            {
              title: '静态方法与私有字段',
              code:
                'class User {\n' +
                '  #password  // 私有字段，外部不可访问\n' +
                '  constructor(name, pwd) {\n' +
                '    this.name = name\n' +
                '    this.#password = pwd\n' +
                '  }\n' +
                '  static create(name) {  // 静态方法（工厂）\n' +
                '    return new User(name, "default")\n' +
                '  }\n' +
                '  check(pwd) { return pwd === this.#password }\n' +
                '}\n' +
                '\n' +
                'const u = User.create("小明")  // 静态方法调用\n' +
                'console.log(u.name)  // 小明\n' +
                'console.log(u.check("default"))  // true\n' +
                '// console.log(u.#password)  // 语法错误，私有字段不可外部访问',
              explanation:
                'static 定义静态方法，通过类名调用（不需实例）。# 开头是私有字段，类外部无法访问，' +
                '实现真正的封装。静态方法常做工厂模式（如 User.create），私有字段保护内部状态。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt:
                '定义一个类 Rectangle，constructor 接收 width 和 height，有一个方法 area() 返回面积（width * height）。' +
                '然后 new Rectangle(3, 4)，调用 area() 并打印结果。',
              starter_code:
                '// 在此定义类并调用\n',
              expected_output: '12',
              hints: [
                'class Rectangle { constructor(w, h) { this.width = w; this.height = h } area() { return this.width * this.height } }',
                'const r = new Rectangle(3, 4); console.log(r.area())',
                '面积是 3 * 4 = 12',
              ],
            },
            {
              type: 'output-match',
              prompt:
                '定义基类 Shape 有方法 describe() 返回 "我是一个形状"。定义子类 Circle extends Shape，' +
                'constructor 接收 radius，重写 describe() 返回 "半径" + radius + "的圆"。' +
                'new Circle(5)，调用 describe() 并打印。',
              starter_code:
                '// 在此定义类并调用\n',
              expected_output: '半径5的圆',
              hints: [
                'class Shape { describe() { return "我是一个形状" } }',
                'class Circle extends Shape { constructor(r){super(); this.radius=r} describe(){return "半径"+this.radius+"的圆"} }',
                'const c = new Circle(5); console.log(c.describe())',
              ],
            },
          ],
          realWorldScenario:
            '类用于封装"状态 + 行为"：用户管理（User 类含登录/登出）、购物车（Cart 类含 add/remove/total）、' +
            '游戏角色（Character 类含 move/attack）。继承构建类型体系：Animal → Dog/Cat，' +
            'Component → Button/Input。React 的 class 组件、Three.js 的对象、Node.js 的流都是类的应用。' +
            '私有字段让封装更安全，静态方法做工厂和工具。理解 OOP 是组织复杂前端逻辑的关键。',
        },
        {
          id: 'js-ch8-l3',
          title: 'Symbol 与 Proxy',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'Symbol 是 ES6 引入的第七种基本类型，表示"唯一且不可变"的值。' +
            '创建：`const s = Symbol("描述")`——注意 Symbol 前不能加 new（它不是构造函数，是值）。' +
            '每个 Symbol 值都唯一：`Symbol() === Symbol()` 为 false，即使描述相同。' +
            'Symbol 主要用途是作为对象属性键，避免与其它键冲突（尤其第三方库扩展对象时）。\n\n' +
            'Symbol 之所以存在，是因为 JS 对象的键只能是字符串或 Symbol。在 Symbol 之前，' +
            '所有键都是字符串，第三方库扩展对象时容易键名冲突。Symbol 的唯一性让它成为"无冲突键"——' +
            '每个 Symbol 都不同，即使描述相同也不会冲突。这让库可以安全地为对象添加"内部"属性，' +
            '不会与用户属性或其它库的属性冲突。\n\n' +
            'Proxy 是 ES6 的元编程特性，能"代理"一个对象，拦截对其属性的操作（get/set/has/delete 等）。' +
            '创建：`new Proxy(target, handler)`，handler 定义"陷阱"（trap）函数，如 `get(obj, key)` ' +
            '拦截读取、`set(obj, key, value)` 拦截赋值。Proxy 是 Vue 3 响应式系统、' +
            'MobX 等状态管理库的底层原理，让"数据变化自动触发更新"成为可能。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. Symbol 基础\n' +
            'const s1 = Symbol("id")      // 描述仅用于调试\n' +
            'const s2 = Symbol("id")      // 描述相同但值不同\n' +
            's1 === s2  // false\n' +
            'typeof s1  // "symbol"\n' +
            '\n' +
            '// 2. Symbol 作为属性键（隐藏属性）\n' +
            'const id = Symbol("id")\n' +
            'const obj = { [id]: 123, name: "小明" }\n' +
            'Object.keys(obj)              // ["name"]（不含 Symbol）\n' +
            'Object.getOwnPropertySymbols(obj)  // [Symbol(id)]\n' +
            '\n' +
            '// 3. Symbol.for 全局注册\n' +
            'const a = Symbol.for("shared")\n' +
            'const b = Symbol.for("shared")\n' +
            'a === b  // true（全局注册，相同 key 返回同一 Symbol）\n' +
            '\n' +
            '// 4. 内置 Symbol（协议）\n' +
            'class Range {\n' +
            '  *[Symbol.iterator]() { yield 1; yield 2; yield 3 }\n' +
            '}\n' +
            '[...new Range()]  // [1, 2, 3]\n' +
            '\n' +
            '// 5. Proxy 基础\n' +
            'const handler = {\n' +
            '  get(target, key) { return key in target ? target[key] : "默认值" },\n' +
            '  set(target, key, value) { target[key] = value; return true }\n' +
            '}\n' +
            'const proxy = new Proxy({}, handler)\n' +
            '```\n\n' +
            '## Symbol 与 Proxy 关键 API 表\n\n' +
            '| API | 说明 | 示例 |\n' +
            '|-----|------|------|\n' +
            '| `Symbol(desc)` | 创建唯一 Symbol | `Symbol("id")` |\n' +
            '| `Symbol.for(key)` | 全局注册 Symbol | `Symbol.for("shared")` |\n' +
            '| `Symbol.keyFor(sym)` | 取全局 Symbol 的 key | `Symbol.keyFor(s)` |\n' +
            '| `Object.getOwnPropertySymbols(o)` | 取对象的 Symbol 键 | `[Symbol(id)]` |\n' +
            '| `Symbol.iterator` | 迭代协议 | `obj[Symbol.iterator] = ...` |\n' +
            '| `Symbol.toPrimitive` | 类型转换协议 | 自定义对象转原始值 |\n' +
            '| `new Proxy(target, handler)` | 创建代理 | 拦截对象操作 |\n' +
            '| `handler.get` | 拦截读取 | `get(t, k) {}` |\n' +
            '| `handler.set` | 拦截赋值 | `set(t, k, v) {}` |\n' +
            '| `handler.has` | 拦截 in | `has(t, k) {}` |\n' +
            '| `handler.deleteProperty` | 拦截 delete | `deleteProperty(t, k) {}` |\n' +
            '| `Reflect.get/set` | 默认行为 | 配合 Proxy 使用 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. Symbol 唯一性与隐藏属性\n' +
            'const s1 = Symbol("id")\n' +
            'const s2 = Symbol("id")\n' +
            'console.log(s1 === s2)  // false（唯一）\n' +
            'const id = Symbol("id")\n' +
            'const obj = { [id]: 123, name: "小明" }\n' +
            'console.log(Object.keys(obj))  // ["name"]（Symbol 隐藏）\n' +
            'console.log(obj[id])  // 123\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. 内置 Symbol（迭代器协议）\n' +
            'class Range {\n' +
            '  constructor(start, end) { this.start = start; this.end = end }\n' +
            '  *[Symbol.iterator]() {\n' +
            '    for (let i = this.start; i <= this.end; i++) yield i\n' +
            '  }\n' +
            '}\n' +
            'const r = new Range(1, 3)\n' +
            'console.log([...r])  // [1, 2, 3]（可展开）\n' +
            'for (const v of r) console.log(v)  // 1 2 3（可 for...of）\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. Proxy 数据校验\n' +
            'const validator = {\n' +
            '  set(target, key, value) {\n' +
            '    if (key === "age" && (value < 0 || value > 150)) {\n' +
            '      throw new Error("年龄无效")\n' +
            '    }\n' +
            '    target[key] = value\n' +
            '    return true  // set 必须返回 true\n' +
            '  }\n' +
            '}\n' +
            'const user = new Proxy({}, validator)\n' +
            'user.age = 20   // 正常\n' +
            '// user.age = 200  // 报错：年龄无效\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **Symbol 不能 new**：`new Symbol()` 报错，Symbol 是值不是构造函数。' +
            '直接调用 `Symbol("desc")` 创建。\n' +
            '2. **Symbol 描述仅用于调试**：`Symbol("id")` 的 "id" 不是 id，仅用于 console 显示。' +
            '两个 `Symbol("id")` 仍不同。\n' +
            '3. **Symbol.for 是全局共享的**：`Symbol.for("key")` 返回全局注册的 Symbol，' +
            '相同 key 返回同一 Symbol（跨模块共享）。普通 Symbol 每次都新创建。\n' +
            '4. **Symbol 属性不被常规遍历**：for...in、Object.keys、JSON.stringify 都跳过 Symbol 键。' +
            '需用 `Object.getOwnPropertySymbols()` 获取。\n' +
            '5. **Proxy 的 set 必须返回 true**：严格模式下 set trap 返回 false 会报错。' +
            '返回 true 表示设置成功。\n' +
            '6. **Proxy 不能代理非对象**：target 必须是对象。Proxy 也不支持直接代理原始值（需包装）。\n\n' +
            '## 实际应用\n\n' +
            'Symbol 的实际用途：库内部属性（如 React 的 ref 标记）、迭代协议（`Symbol.iterator` 让对象可 for...of）、' +
            '类型转换协议（`Symbol.toPrimitive`）。Symbol.for 用于跨模块共享常量。' +
            'Proxy 的实际用途：Vue 3 响应式（`reactive()` 用 Proxy 拦截 get/set 触发更新）、' +
            '数据校验（set 时验证）、日志（记录属性访问）、默认值（get 不存在返回默认）。\n\n' +
            '本节练习可在沙箱运行（同步）。Proxy + Reflect 是现代框架的基石——Vue 3 用它实现响应式，' +
            '替代了 Vue 2 的 Object.defineProperty（后者无法监听属性增删、数组索引修改）。' +
            '理解 Symbol 和 Proxy 是进阶前端、阅读框架源码的关键。\n\n' +
            '## 扩展知识\n\n' +
            '- **Reflect 对象**：`Reflect.get/set/has` 提供 Proxy trap 的默认行为，配合 Proxy 使用更规范。\n' +
            '- **Symbol.asyncIterator**：异步迭代协议，`for await...of` 使用，Node.js stream 基于。\n' +
            '- **Proxy vs Object.defineProperty**：Proxy 能监听属性增删、数组操作；defineProperty 不能。' +
            '这是 Vue 3 改用 Proxy 的原因。\n' +
            '- **Proxy 的 13 种 trap**：get/set/has/deleteProperty/ownKeys/apply/construct 等，全面拦截。\n' +
            '- **可撤销 Proxy**：`Proxy.revocable(target, handler)` 创建可撤销代理，revoke() 后访问报错。',
          examples: [
            {
              title: 'Symbol 唯一性与隐藏属性',
              code:
                '// Symbol 的唯一性\n' +
                'const s1 = Symbol("id")\n' +
                'const s2 = Symbol("id")\n' +
                'console.log(s1 === s2)  // false，即使描述相同\n' +
                'console.log(typeof s1)  // symbol\n' +
                '\n' +
                '// 作为属性键，不被常规遍历发现\n' +
                'const obj = { name: "小明" }\n' +
                'obj[Symbol("secret")] = "隐藏数据"\n' +
                'console.log(Object.keys(obj))  // ["name"]，不含 Symbol 键\n' +
                'console.log(JSON.stringify(obj))  // {"name":"小明"}\n' +
                'console.log(Object.getOwnPropertySymbols(obj).length)  // 1',
              explanation:
                'Symbol 值唯一（即使描述相同也不等）。作为属性键时不被 for...in、Object.keys、JSON.stringify 发现，' +
                '是"隐藏"属性。要用 Object.getOwnPropertySymbols 才能取到。适合做内部元数据或避免键冲突。',
            },
            {
              title: 'Proxy 拦截属性操作',
              code:
                '// 用 Proxy 实现数据校验\n' +
                'const validator = {\n' +
                '  set(target, key, value) {\n' +
                '    if (key === "age" && (typeof value !== "number" || value < 0)) {\n' +
                '      throw new Error("age 必须是非负数")\n' +
                '    }\n' +
                '    target[key] = value  // 实际赋值\n' +
                '    return true  // set 必须返回 true 表示成功\n' +
                '  },\n' +
                '  get(target, key) {\n' +
                '    if (key in target) return target[key]\n' +
                '    return "属性不存在"  // 默认值\n' +
                '  }\n' +
                '}\n' +
                'const user = new Proxy({}, validator)\n' +
                'user.age = 18  // 合法\n' +
                'console.log(user.age)  // 18\n' +
                'console.log(user.foo)  // 属性不存在\n' +
                'try { user.age = -1 } catch (e) { console.log("校验失败:", e.message) }',
              explanation:
                'Proxy 的 set 陷阱拦截赋值，可做校验（不合法抛错）。get 陷阱拦截读取，可返回默认值。' +
                'set 必须返回 true。这是 Vue 3 响应式系统的底层原理——拦截 get 收集依赖，拦截 set 触发更新。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt:
                '创建两个 Symbol：const a = Symbol("x")，const b = Symbol("x")。打印 a === b 的结果。',
              starter_code:
                'const a = Symbol("x")\n' +
                'const b = Symbol("x")\n' +
                '// 在此打印比较结果\n',
              expected_output: 'false',
              hints: [
                '用 console.log(a === b)',
                '每个 Symbol 都是唯一的，即使描述相同',
                '结果是 false',
              ],
            },
            {
              type: 'open-ended',
              prompt:
                '用 Proxy 创建一个对象，使其读取不存在的属性时返回 0（而不是 undefined）。' +
                '提示：在 get 陷阱里判断 key in target，不存在则返回 0。',
              starter_code:
                'const obj = new Proxy({}, {\n' +
                '  // 在此写 get 陷阱\n' +
                '})\n',
              hints: [
                'get(target, key) { if (key in target) return target[key]; return 0 }',
                '注意 get 陷阱签名是 (target, key, receiver)',
                '参考：const obj = new Proxy({}, { get(target, key) { return key in target ? target[key] : 0 } })',
              ],
            },
          ],
          realWorldScenario:
            'Symbol 用于避免属性键冲突：第三方库扩展对象时用 Symbol 键不会覆盖用户属性；' +
            '内置 Symbol.iterator 让自定义对象可被 for...of 遍历（实现迭代器协议）。' +
            'Proxy 是现代响应式系统的基石：Vue 3 用 Proxy 拦截数据访问实现响应式（替代 Vue 2 的 Object.defineProperty），' +
            'MobX、Solid.js 也用 Proxy。理解 Proxy 能看懂这些框架的源码，也能自己实现状态管理、数据校验、日志等中间层。',
        },
        {
          id: 'js-ch8-l4',
          title: '设计模式与常用工具函数',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '设计模式是前人总结的代码组织经验，解决反复出现的问题。JS 常用模式：' +
            '① 单例模式（全局唯一实例，如登录态管理）；② 工厂模式（用函数/静态方法创建对象，隐藏构造细节）；' +
            '③ 观察者/发布订阅模式（事件系统、Promise、响应式库的基础）；④ 策略模式（用对象映射替代 if/else）。' +
            '模式不是教条，而是工具——理解其解决的问题比死记结构更重要。\n\n' +
            '设计模式之所以重要，是因为它们是"经过验证的解决方案"。面对"如何保证全局唯一"、"如何解耦事件发送与接收"、' +
            '"如何根据不同策略执行不同逻辑"等问题，模式提供了成熟的思路。掌握模式能让你写出更可维护、' +
            '更易扩展的代码，也是团队协作的共同语言——说"这里用单例"比描述实现细节更高效。\n\n' +
            '本节还聚焦两个高频面试题与工程必备工具：debounce（防抖）和 throttle（节流），以及深拷贝。' +
            '它们综合运用了闭包、定时器、引用类型等核心知识，是检验 JS 功底的经典题。' +
            '理解它们的实现原理，比记住 API 更有价值——因为面试要手写，工程要定制。\n\n' +
            '## 语法说明\n\n' +
            '```js\n' +
            '// 1. 单例模式\n' +
            'class Singleton {\n' +
            '  static instance = null\n' +
            '  static getInstance() {\n' +
            '    if (!Singleton.instance) Singleton.instance = new Singleton()\n' +
            '    return Singleton.instance\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '// 2. 观察者模式\n' +
            'class EventEmitter {\n' +
            '  constructor() { this.events = {} }\n' +
            '  on(event, fn) { (this.events[event] ||= []).push(fn) }\n' +
            '  emit(event, data) { (this.events[event] || []).forEach(fn => fn(data)) }\n' +
            '  off(event, fn) { this.events[event] = (this.events[event]||[]).filter(f => f !== fn) }\n' +
            '}\n' +
            '\n' +
            '// 3. debounce（防抖）\n' +
            'function debounce(fn, delay) {\n' +
            '  let timer = null\n' +
            '  return function(...args) {\n' +
            '    clearTimeout(timer)\n' +
            '    timer = setTimeout(() => fn.apply(this, args), delay)\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '// 4. throttle（节流）\n' +
            'function throttle(fn, interval) {\n' +
            '  let last = 0\n' +
            '  return function(...args) {\n' +
            '    const now = Date.now()\n' +
            '    if (now - last >= interval) {\n' +
            '      fn.apply(this, args)\n' +
            '      last = now\n' +
            '    }\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '// 5. 深拷贝\n' +
            'function deepClone(obj, seen = new WeakMap()) {\n' +
            '  if (obj === null || typeof obj !== "object") return obj\n' +
            '  if (seen.has(obj)) return seen.get(obj)  // 处理循环引用\n' +
            '  const clone = Array.isArray(obj) ? [] : {}\n' +
            '  seen.set(obj, clone)\n' +
            '  for (const key of Reflect.ownKeys(obj)) {\n' +
            '    clone[key] = deepClone(obj[key], seen)\n' +
            '  }\n' +
            '  return clone\n' +
            '}\n' +
            '```\n\n' +
            '## 设计模式与工具函数表\n\n' +
            '| 模式/函数 | 用途 | 关键点 | 典型场景 |\n' +
            '|-----------|------|--------|----------|\n' +
            '| 单例模式 | 全局唯一实例 | static instance | 登录态、配置 |\n' +
            '| 工厂模式 | 隐藏构造细节 | 函数返回对象 | 根据类型创建 |\n' +
            '| 观察者模式 | 事件解耦 | on/emit/off | 事件系统 |\n' +
            '| 策略模式 | 替代 if/else | 对象映射 | 多策略选择 |\n' +
            '| debounce | 防抖 | clearTimeout + setTimeout | 搜索输入 |\n' +
            '| throttle | 节流 | 时间戳间隔 | 滚动/resize |\n' +
            '| deepClone | 深拷贝 | 递归 + WeakMap | 避免引用共享 |\n' +
            '| curry | 柯里化 | 返回函数 | 参数复用 |\n' +
            '| memoize | 记忆化 | 缓存结果 | 计算优化 |\n\n' +
            '## 代码示例\n\n' +
            '```js\n' +
            '// 1. debounce 防抖（面试高频）\n' +
            'function debounce(fn, delay) {\n' +
            '  let timer = null  // 闭包保存定时器\n' +
            '  return function(...args) {\n' +
            '    clearTimeout(timer)  // 清除上一个\n' +
            '    timer = setTimeout(() => fn.apply(this, args), delay)\n' +
            '  }\n' +
            '}\n' +
            '// 测试：连续调用只执行最后一次\n' +
            'const log = debounce((v) => console.log("执行:", v), 100)\n' +
            'log(1); log(2); log(3)  // 只有 log(3) 在 100ms 后执行\n' +
            '```\n\n' +
            '```js\n' +
            '// 2. throttle 节流\n' +
            'function throttle(fn, interval) {\n' +
            '  let last = 0\n' +
            '  return function(...args) {\n' +
            '    const now = Date.now()\n' +
            '    if (now - last >= interval) {\n' +
            '      fn.apply(this, args)\n' +
            '      last = now\n' +
            '    }\n' +
            '  }\n' +
            '}\n' +
            '// 测试：每 100ms 最多执行一次\n' +
            'const log = throttle(() => console.log("执行"), 100)\n' +
            '// 连续快速调用，每 100ms 执行一次\n' +
            '```\n\n' +
            '```js\n' +
            '// 3. 观察者模式（简易 EventEmitter）\n' +
            'class EventEmitter {\n' +
            '  constructor() { this.events = {} }\n' +
            '  on(event, fn) { (this.events[event] ||= []).push(fn); return this }\n' +
            '  emit(event, data) { (this.events[event] || []).forEach(fn => fn(data)) }\n' +
            '}\n' +
            'const bus = new EventEmitter()\n' +
            'bus.on("login", (user) => console.log("登录:", user))\n' +
            'bus.emit("login", "小明")  // 登录: 小明\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **debounce vs throttle 别混淆**：debounce 是"停止后才执行"（搜索框），' +
            'throttle 是"固定间隔执行一次"（滚动）。两者都限制频率，但策略不同。\n' +
            '2. **闭包是 debounce/throttle 的核心**：timer/last 变量通过闭包保存，' +
            '每次调用返回的函数都访问同一个 timer/last。理解闭包才能手写这两个函数。\n' +
            '3. **深拷贝要处理循环引用**：对象相互引用会导致无限递归，用 WeakMap 记录已拷贝对象，' +
            '遇到已拷贝的直接返回引用。\n' +
            '4. **JSON 深拷贝的局限**：`JSON.parse(JSON.stringify())` 不支持函数、undefined、Symbol、' +
            '循环引用、Date（变字符串）、RegExp（变空对象）。健壮方案需递归处理。\n' +
            '5. **现代深拷贝方案**：`structuredClone(obj)` 浏览器原生，支持循环引用、Date、RegExp 等，' +
            '但不支持函数。\n' +
            '6. **单例在 JS 中的简化**：ES 模块本身就是单例（每个模块只执行一次），' +
            '导出的对象即单例，无需手写 Singleton 类。\n\n' +
            '## 实际应用\n\n' +
            'debounce 用于搜索框（输入停止后才请求 API）、按钮防重复点击、窗口 resize（停止后才重算布局）。' +
            'throttle 用于滚动事件（scroll 限频）、鼠标移动（mousemove 限频）、动画帧控制。' +
            'Lodash 提供 `_.debounce` 和 `_.throttle`，但面试要求手写。' +
            '观察者模式是 EventEmitter、Redux、RxJS 的基础——任何"状态变化通知"场景都可用。\n\n' +
            '深拷贝用于避免引用共享：React state 更新需返回新对象（不可变更新）、' +
            '函数参数保护（防止函数内修改影响原对象）。' +
            '这些工具函数综合运用了闭包、定时器、引用类型、递归等核心知识，' +
            '是面试高频题，也是日常工程的基础设施。本节练习可在沙箱运行。\n\n' +
            '## 扩展知识\n\n' +
            '- **curry 柯里化**：`add(1)(2)(3)` 逐步传参，用闭包累积参数，用于参数复用。\n' +
            '- **memoize 记忆化**：缓存函数结果，相同输入返回缓存值，用于计算优化（如斐波那契）。\n' +
            '- **lodash 工具库**：提供 debounce/throttle/cloneDeep/merge 等数百个工具函数，工程必备。\n' +
            '- **策略模式**：`const strategies = { A: () => {}, B: () => {} }; strategies[type]()` 替代 if/else。\n' +
            '- **组合优于继承**：现代 JS 倾向组合（小函数组合）而非深层继承，更灵活易维护。',
          examples: [
            {
              title: 'debounce 防抖（面试高频）',
              code:
                '// 防抖：连续调用只执行最后一次\n' +
                'function debounce(fn, delay) {\n' +
                '  let timer = null  // 闭包保存定时器\n' +
                '  return function(...args) {\n' +
                '    clearTimeout(timer)  // 清除上一个，重新计时\n' +
                '    timer = setTimeout(() => {\n' +
                '      fn.apply(this, args)  // 保持 this 和参数\n' +
                '    }, delay)\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                '// 演示（注意：setTimeout 回调异步，沙箱捕获不到输出，仅参考）\n' +
                'const search = debounce(text => console.log("搜索:", text), 300)\n' +
                'search("a"); search("ab"); search("abc")  // 只有 300ms 后执行一次 "搜索: abc"\n' +
                'console.log("debounce 已设置")  // 这行同步，会被捕获',
              explanation:
                'debounce 用闭包保存 timer，每次调用清除上一个定时器重设新的。只有停止调用 delay 毫秒后才真正执行。' +
                '常用于搜索输入（用户停止输入才搜索）、窗口 resize（停止调整才重算布局）。是面试高频题。',
            },
            {
              title: 'throttle 节流（面试高频）',
              code:
                '// 节流：每隔固定时间最多执行一次\n' +
                'function throttle(fn, interval) {\n' +
                '  let last = 0  // 上次执行时间\n' +
                '  return function(...args) {\n' +
                '    const now = Date.now()\n' +
                '    if (now - last >= interval) {  // 距上次足够久\n' +
                '      last = now\n' +
                '      fn.apply(this, args)\n' +
                '    }\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                '// 用闭包测试节流逻辑（同步可验证）\n' +
                'const log = throttle(msg => console.log(msg), 100)\n' +
                'log("第一次"); log("第二次")  // 同步连续调，第二次被跳过（时间不够）\n' +
                'console.log("throttle 已调用")',
              explanation:
                'throttle 用时间戳记录上次执行，距上次不足 interval 则跳过。确保高频事件（滚动、鼠标移动）' +
                '不会触发太多次，保证性能。与 debounce 区别：throttle 限频（会执行多次），debounce 只执行最后一次。',
            },
            {
              title: '深拷贝（处理循环引用）',
              code:
                '// 健壮的深拷贝\n' +
                'function deepClone(obj, seen = new WeakMap()) {\n' +
                '  if (obj === null || typeof obj !== "object") return obj  // 基本类型\n' +
                '  if (seen.has(obj)) return seen.get(obj)  // 处理循环引用\n' +
                '  if (obj instanceof Date) return new Date(obj)\n' +
                '  if (obj instanceof RegExp) return new RegExp(obj)\n' +
                '  const clone = Array.isArray(obj) ? [] : {}\n' +
                '  seen.set(obj, clone)  // 记录，防循环\n' +
                '  for (const key of Reflect.ownKeys(obj)) {  // 含 Symbol 键\n' +
                '    clone[key] = deepClone(obj[key], seen)\n' +
                '  }\n' +
                '  return clone\n' +
                '}\n' +
                '\n' +
                'const original = { a: 1, nested: { b: 2 }, arr: [1, { x: 3 }] }\n' +
                'original.self = original  // 循环引用\n' +
                'const copy = deepClone(original)\n' +
                'console.log(copy.a, copy.nested.b, copy.arr[1].x)  // 1 2 3\n' +
                'console.log(copy.nested !== original.nested)  // true，独立副本\n' +
                'console.log(copy.arr !== original.arr)  // true',
              explanation:
                '深拷贝递归复制所有层级。用 WeakMap 记录已拷贝对象，处理循环引用（否则无限递归栈溢出）。' +
                '处理 Date/RegExp 特殊类型。Reflect.ownKeys 包含 Symbol 键。比 JSON 方案更健壮（支持循环引用、Date 等）。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt:
                '实现一个 debounce(fn, delay) 函数：返回的新函数在连续调用时只执行最后一次，' +
                '每次调用重置 delay 计时。用闭包保存 timer，clearTimeout + setTimeout 实现。',
              starter_code:
                'function debounce(fn, delay) {\n' +
                '  // 在此实现\n' +
                '}\n',
              hints: [
                'let timer = null; return function(...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay) }',
                '注意用 apply 保持 this，用 ...args 透传参数',
                '参考答案见本节第一个示例',
              ],
            },
            {
              type: 'open-ended',
              prompt:
                '实现一个 throttle(fn, interval) 函数：返回的新函数在 interval 毫秒内最多执行一次。' +
                '用时间戳（Date.now）记录上次执行时间判断。',
              starter_code:
                'function throttle(fn, interval) {\n' +
                '  // 在此实现\n' +
                '}\n',
              hints: [
                'let last = 0; return function(...args) { const now = Date.now(); if (now - last >= interval) { last = now; fn.apply(this, args) } }',
                '关键是记录上次执行时间 last',
                '参考答案见本节第二个示例',
              ],
            },
            {
              type: 'open-ended',
              prompt:
                '实现一个 deepClone(obj) 函数，递归深拷贝对象/数组。要求处理循环引用（用 WeakMap）。' +
                '基本类型直接返回，数组创建 []，对象创建 {}。',
              starter_code:
                'function deepClone(obj, seen = new WeakMap()) {\n' +
                '  // 在此实现\n' +
                '}\n',
              hints: [
                '先判断 null 或 typeof !== "object" 直接返回；if (seen.has(obj)) return seen.get(obj)',
                '创建 clone（Array.isArray ? [] : {}），seen.set(obj, clone)，遍历键递归赋值',
                '参考答案见本节第三个示例',
              ],
            },
          ],
          realWorldScenario:
            'debounce/throttle 是前端性能优化的必备工具：搜索框 debounce（停止输入才搜索，减少请求）、' +
            'resize/scroll 事件 throttle（限频避免卡顿）、按钮防连击（debounce 防重复提交）。' +
            '深拷贝用于状态管理（如 Redux 重置状态、撤销/重做栈保存快照）。' +
            '观察者模式是 Promise、事件系统、响应式库的基础。这些工具函数几乎每个前端项目都有，' +
            '也是面试必考——能徒手写出 debounce/throttle/deepClone 是中高级前端的基本功。',
        },
      ],
    },
  ],
}