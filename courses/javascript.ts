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
            'JavaScript 是一门动态类型、解释执行的编程语言，运行在浏览器和 Node.js 等环境中。' +
            '在现代 JS 中，声明变量有三种方式：`var`、`let` 和 `const`。' +
            '`var` 是早期语法，存在变量提升和函数作用域等问题，现代代码应尽量避免使用；' +
            '`let` 声明可重新赋值的变量；`const` 声明不可重新赋值的常量（但对象内部仍可修改）。\n\n' +
            '业界推荐的原则是"默认用 const，需要修改时才用 let"。' +
            '这样能在编写时就明确哪些变量不应被改变，减少意外修改带来的 bug。' +
            'const 声明的对象，其属性仍然可以增删改——const 锁定的是"绑定"而非"值不可变"。\n\n' +
            'JS 有七种基本类型（Primitive）：`number`（数字，整数和浮点统一）、`string`（字符串）、' +
            '`boolean`（布尔）、`null`（空值）、`undefined`（未定义）、`symbol`（符号）、`bigint`（大整数）。' +
            '引用类型主要是 `object`（对象）和 `function`（函数也是对象）。' +
            '`typeof` 运算符返回类型的字符串名称，是判断基本类型最常用的工具。\n\n' +
            '需要注意的是 `typeof null` 返回 `"object"`，这是语言早期遗留的设计缺陷，' +
            '不能用它判断 null（应使用 `=== null`）。' +
            '判断数组要用 `Array.isArray()`，因为 `typeof []` 同样返回 `"object"`。' +
            '理解类型系统是写出健壮 JS 代码的基础。',
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
            '运算符是操纵数据的语法结构。JS 的算术运算符包括 `+ - * / %`（取余），' +
            '其中 `+` 既能做数字加法，又能做字符串拼接——当任一操作数是字符串时，`+` 会把另一个也转成字符串拼接。' +
            '这个"双栖"特性是很多隐式 bug 的根源，因此拼接字符串时推荐用模板字面量 `` ` ``。\n\n' +
            '比较运算符有两组：`==`（宽松相等，会做类型转换）和 `===`（严格相等，不转换类型）。' +
            '业界铁律是"始终用 ===，禁用 =="，因为 `0 == ""`、`null == undefined` 这类隐式转换' +
            '极易引发难以排查的 bug。`!==` 是严格不等。还有 `< > <= >=` 等大小比较。\n\n' +
            '逻辑运算符 `&&`（与）、`||`（或）、`!`（非）返回的并非布尔值，而是操作数本身——' +
            '这是 JS 的"短路求值"特性。`a || b`：a 真则返回 a，否则返回 b；' +
            '`a && b`：a 假则返回 a，否则返回 b。常用于设置默认值（`const x = input || "默认"`）' +
            '和条件执行（`cond && doSomething()`）。\n\n' +
            '三元运算符 `条件 ? 真值 : 假值` 是 if/else 的表达式形式，适合简单的二选一赋值。' +
            '运算符优先级决定了表达式的求值顺序，复杂表达式推荐用括号显式标明意图，避免依赖记忆优先级表。',
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
            '字符串是 JS 中最常用的数据类型之一。字符串可用单引号、双引号或反引号（模板字面量）包裹。' +
            '模板字面量 `` `你好, ${name}` `` 支持在字符串中嵌入表达式，是多行字符串和字符串拼接的现代首选。' +
            '它让代码比传统的 `"你好, " + name` 更易读，尤其适合拼接 HTML 或长文本。\n\n' +
            '字符串是不可变的：所有"修改"字符串的方法都返回新字符串，原字符串不变。' +
            '常用属性和方法：`length` 获取长度，`slice(start, end)` 截取子串，' +
            '`indexOf(str)` 查找子串位置（找不到返回 -1），`includes(str)` 判断是否包含，' +
            '`toUpperCase()`/`toLowerCase()` 转大小写，`split(sep)` 按分隔符拆成数组，' +
            '`replace(old, new)` 替换，`trim()` 去除首尾空白。\n\n' +
            '字符串可以通过 `[]` 或 `charAt()` 按索引访问单个字符，索引从 0 开始。' +
            '遍历字符串字符可用 `for...of`。`+` 拼接字符串时要注意隐式转换：`"a" + 1` 得到 `"a1"`。' +
            '处理用户输入时，`trim()` 几乎是必做的清理步骤，否则前导空格会导致校验失败。\n\n' +
            '字符串与数组的转换很常用：`str.split("")` 把字符串拆成字符数组，' +
            '`arr.join("")` 把数组合并成字符串。经典面试题"判断回文"就是用这个思路：' +
            '把字符串反转后与原串比较。掌握字符串方法能让你高效处理文本数据。',
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
            'JS 是弱类型语言，会在运算时自动做隐式类型转换，这被称为"类型强制（coercion）"。' +
            '隐式转换规则复杂：`1 + "2"` 得到 `"12"`（字符串拼接），但 `"2" - 1` 得到 `1`（数字减法）。' +
            '这种不可预测性是 bug 的温床，因此推荐显式转换，让代码意图明确。\n\n' +
            '显式转换的三大工具：`Number(value)` 转数字、`String(value)` 转字符串、`Boolean(value)` 转布尔。' +
            'Number("42") 得 42，Number("") 得 0，Number("abc") 得 NaN（非数字）。' +
            '判断 NaN 不能用 `=== NaN`（NaN 不等于自身），要用 `Number.isNaN()`。' +
            '数字转字符串也可用 `n.toString()` 或模板字面量。\n\n' +
            'JS 中有 6 个"假值（falsy）"：`false`、`0`、`""`、`null`、`undefined`、`NaN`。' +
            '其余所有值都是"真值（truthy）"，包括 `[]`（空数组）、`{}`（空对象）、`"0"`（字符串零）。' +
            '理解假值对条件判断至关重要：`if (count)` 在 count 为 0 时为假，可能不符合预期。' +
            '用 `Boolean(x)` 或 `!!x` 可显式转布尔。\n\n' +
            '解析字符串为数字有两个全局函数：`parseInt(str, radix)` 和 `parseFloat(str)`。' +
            'parseInt 会从开头解析到非数字字符为止，第二个参数 radix 应始终传 10（避免旧浏览器的八进制问题）。' +
            '处理表单输入（永远是字符串）时，类型转换是连接用户输入与业务逻辑的桥梁。',
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
            '控制流决定程序"按什么顺序执行"。`if` 语句是最基础的条件分支：' +
            '`if (条件) { ... } else if (条件2) { ... } else { ... }。' +
            '条件会被隐式转为布尔值——因此理解假值（0、空串、null、undefined、NaN、false）至关重要。' +
            '花括号 `{}` 定义代码块，虽然单条语句可省略花括号，但业界规范要求始终使用，避免歧义。\n\n' +
            '`else if` 用于多分支链式判断，按顺序匹配第一个为真的分支。' +
            '当分支较多且判断的是同一个变量的多个值时，`switch` 往往比长串 if/else if 更清晰。' +
            '条件表达式应尽量简洁，复杂逻辑可提前用变量命名，提升可读性。\n\n' +
            '常见陷阱：用 `=`（赋值）代替 `===`（比较）会导致条件永远为真，这是经典错误。' +
            '部分 lint 工具会强制 if 条件为比较表达式。另外，`if (x = 5)` 实际是赋值后判断 x（5 为真值），' +
            '可通过 yoda 写法 `if (5 === x)` 规避。现代开发推荐启用 ESLint 的 no-cond-assign 规则。\n\n' +
            '条件赋值可用三元运算符替代简单 if/else，但嵌套三元会严重损害可读性，应避免。' +
            '合理的控制流让程序逻辑清晰、易于测试和维护。',
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
            '`switch` 语句适合对一个表达式的多个离散值进行分支判断。语法：' +
            '`switch (expr) { case 值1: ...; break; case 值2: ...; break; default: ... }`。' +
            '它比长串 if/else if 更清晰，常用于处理动作类型、状态机、菜单选项等场景。\n\n' +
            '`case` 匹配使用严格相等（===），不会做类型转换。' +
            '`break` 跳出 switch；若忘记 break，会"贯穿（fall-through）"继续执行下一个 case 的代码，' +
            '这是 switch 最常见的 bug 来源。多个 case 共用同一段代码时刻意省略 break 是合法的，' +
            '但应加注释说明是有意为之。\n\n' +
            '`default` 是所有 case 都不匹配时的兜底分支，相当于 else，通常放在最后（但不强制）。' +
            '在 Redux 等 state 管理库中，reducer 函数几乎总是用 switch 处理不同的 action type，' +
            '这是 switch 最经典的工程应用。理解 switch 的贯穿机制对阅读这类代码至关重要。\n\n' +
            '现代代码中，有时用对象映射（lookup table）替代 switch，例如 `{ add: fn1, del: fn2 }[action]()`，' +
            '在分支极多时更简洁。但 switch 的可读性在中等数量分支时仍最佳，且性能稳定。',
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
            '`for` 循环是已知次数迭代的首选：`for (初始化; 条件; 更新) { 循环体 }`。' +
            '三部分用分号分隔：初始化执行一次，条件每次迭代前求值，更新每次迭代后执行。' +
            '`for (let i = 0; i < n; i++)` 是最常见的计数循环模式。用 let 声明 i 保证块作用域，' +
            '避免 var 的函数作用域导致的闭包陷阱。\n\n' +
            '循环可以嵌套，但嵌套层数过深会显著降低可读性（"箭头型代码"）。' +
            '二维数组遍历、九九乘法表是经典嵌套场景。性能上，循环内应避免重复计算，' +
            '如把 `arr.length` 缓存到变量（现代 JS 引擎已优化，但仍是好习惯）。' +
            '`for...of` 是遍历可迭代对象（数组、字符串）的现代写法，更简洁。\n\n' +
            '经典面试题 FizzBuzz 是 for 循环的入门挑战：遍历 1 到 n，能被 3 整除输出 "Fizz"，' +
            '能被 5 整除输出 "Buzz"，能被 15 整除输出 "FizzBuzz"，否则输出数字本身。' +
            '它考察的是条件顺序——必须先判断 15，否则会被 3 或 5 提前命中。' +
            '这类题虽简单，却是筛选基础编程能力的有效标尺。\n\n' +
            '循环与数组方法（map/filter/forEach）的选择：需要 return 新数组用 map，' +
            '需要副作用（如打印、修改外部变量）用 for 或 forEach。理解何时用哪种循环是工程素养的体现。',
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
            '`while (条件) { 循环体 }` 在条件为真时重复执行，适合迭代次数不确定的场景：' +
            '如"直到找到目标"、"反复重试直到成功"。`do { 循环体 } while (条件)` 至少执行一次，' +
            '适合"先做一次再判断"的逻辑（如菜单交互、输入校验）。两者的区别在于判断时机：while 先判后做，do-while 先做后判。\n\n' +
            'while 循环最大的风险是死循环：若条件永远为真且循环体内不改变条件，程序会卡死。' +
            '因此必须确保循环体内有让条件最终为假的逻辑。本平台的 JS 运行器有 5 秒超时保护，' +
            '但在生产环境死循环会冻结整个页面，是严重的线上事故。\n\n' +
            '`break` 立即跳出当前循环，常用于"找到即停"的搜索场景。' +
            '`continue` 跳过本次迭代剩余部分，直接进入下一次，常用于过滤某些不需要处理的元素。' +
            '在嵌套循环中，break 只跳出最内层；若需跳出外层，可用带标签的 break（`label: for...`），' +
            '但实际开发中更推荐用函数 + return 实现提前退出，可读性更好。\n\n' +
            '经典面试题：斐波那契数列用 while 计算不超过某上限的项。while 的"按条件循环"特性' +
            '让它在处理"未知长度"数据（如链表遍历、流式读取）时比 for 更自然。' +
            '掌握 while 与 for 的选择能让你写出更贴合问题本质的循环。',
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
            '函数是 JS 中"一等公民"——可以作为变量赋值、作为参数传递、作为返回值返回。' +
            '声明函数有两种主要形式：函数声明 `function fn() {}` 和函数表达式 `const fn = function() {}`。' +
            '两者的核心区别在于"提升（hoisting）"：函数声明在编译阶段整体提升，可在定义前调用；' +
            '函数表达式只提升变量声明，赋值留在原位，调用必须在赋值之后。\n\n' +
            '函数声明提升让代码顺序更灵活，但也可能让执行流难以追踪。' +
            '现代风格指南（如 Airbnb）建议优先用函数表达式 + const，让"定义即赋值"的顺序明确，' +
            '避免提升带来的困惑。但函数声明在工具函数、独立模块中仍很常见，两种写法都应熟练。\n\n' +
            '函数通过 `return` 返回值；若无 return 或 return 后无值，返回 undefined。' +
            '函数参数在 JS 中是灵活的：传多了忽略多余的，传少了未传的为 undefined。' +
            '这既是便利也需谨慎——应做参数校验或用默认值。函数通过 `fn(args)` 调用，' +
            '返回值可直接用于表达式：`const r = fn(1) + fn(2)`。\n\n' +
            '理解函数是一等公民是掌握 JS 高级特性（回调、高阶函数、闭包）的前提。' +
            '几乎所有异步编程和函数式编程都建立在"函数作为值传递"这一基础之上。',
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
            '箭头函数是 ES6 引入的简洁函数语法：`const fn = (参数) => { 函数体 }`。' +
            '当只有一个参数时可省略括号，当函数体只有一句 return 时可省略花括号和 return：' +
            '`const square = n => n * n`。这种简洁让回调函数（如 map、filter 的参数）写起来更清爽。' +
            '箭头函数是现代 JS 中最常用的函数定义方式。\n\n' +
            '箭头函数与传统函数的关键区别在于 `this`：箭头函数没有自己的 this，' +
            '它从外层词法作用域继承 this。这解决了回调中 this 丢失的经典痛点——' +
            '在 ES5 中，setTimeout 回调里的 this 不再指向对象，需用 `var self = this` 或 bind 修正；' +
            '箭头函数天然继承外层 this，让代码更直观。\n\n' +
            '但也正因如此，箭头函数不适合作为对象方法（this 不会指向对象）和构造函数（不能用 new）。' +
            '对象方法推荐用方法简写 `{ method() {} }`，需要动态 this 的场景用普通 function。' +
            '选择箭头还是普通函数的规则：需要"外层 this"用箭头，需要"自身 this"用普通函数。\n\n' +
            '箭头函数也不能用 arguments 对象（用 rest 参数 ...args 替代）。' +
            '掌握箭头函数能让你写出更现代、更简洁的代码，但要理解其 this 行为才能避免陷阱。',
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
            'ES6 引入的默认参数让函数参数缺失时有合理默认值：`function fn(a, b = 10) {}`。' +
            '当 b 未传或显式传 undefined 时使用默认值 10。这替代了旧代码中 `b = b || 10` 的写法，' +
            '更清晰且不会把 0、空串等假值误判为缺失。默认参数让函数接口更健壮，降低调用方的心智负担。\n\n' +
            'rest 参数 `...args` 把剩余参数收集为数组：`function fn(first, ...rest) {}`。' +
            '它替代了旧的 arguments 对象（arguments 是类数组，非真数组，且箭头函数无 arguments）。' +
            'rest 参数是真数组，可直接用数组方法，是处理可变参数的现代方案。' +
            '注意 rest 必须是最后一个参数。\n\n' +
            '与之相对的 spread 展开运算符 `...`（同符号，不同语境）把数组展开为逗号分隔的值：' +
            '`Math.max(...[1, 2, 3])` 等价于 `Math.max(1, 2, 3)`。' +
            '它在函数调用、数组拼接、数组拷贝中极其常用。rest 是"收"，spread 是"散"，' +
            '理解这个对立能让你灵活处理参数与数组的转换。\n\n' +
            '默认参数、rest、spread 三者组合，让 JS 的参数处理能力接近 Python 等语言。' +
            '它们是现代函数式 API 设计的基础，几乎所有工具库都大量使用这些特性。',
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
            '闭包是 JS 中最核心也最难懂的概念之一。简单说，闭包是"函数与其词法环境的组合"——' +
            '内层函数可以访问外层函数的变量，即使外层函数已执行完毕。' +
            '这是因为函数在定义时就"记住"了它出生时的作用域，而非调用时的作用域。' +
            '理解闭包是掌握模块化、私有变量、高阶函数的关键。\n\n' +
            '闭包的经典应用是计数器：外层函数定义一个局部变量 count，返回内层函数操作 count。' +
            '外部无法直接访问 count，只能通过返回的函数间接操作——这就实现了"私有变量"。' +
            '在 ES6 class 私有字段（#x）出现前，闭包是实现封装的主要手段，至今仍是函数式封装的首选。\n\n' +
            '工厂函数是闭包的常见模式：`makeAdder(base)` 返回一个加 base 的函数。' +
            '每次调用 makeAdder 都创建一个独立的闭包，互不干扰。' +
            '这种"配置化生成函数"的思想在 lodash 等工具库中随处可见，例如 `_.partial`、`_.curry`。' +
            '闭包让函数能"携带状态"，是面向对象之外的另一种状态管理方式。\n\n' +
            '闭包的常见陷阱：在 for 循环中用 var 声明 i，所有闭包共享同一个 i（最终值）。' +
            '用 let 解决（每次迭代创建新绑定），或用 IIFE 立即执行捕获当前值。' +
            '理解这个陷阱能避免事件绑定中"所有回调都拿到最后一个值"的经典 bug。',
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
            'map、filter、reduce 是函数式处理数组的"三剑客"，是现代 JS 必备技能。' +
            '`map(fn)` 对每个元素应用 fn，返回新数组（长度不变），用于"变换"数据。' +
            '`filter(fn)` 保留 fn 返回真的元素，返回新数组，用于"筛选"数据。' +
            '两者都不修改原数组（不可变），符合函数式编程原则。\n\n' +
            '`reduce(fn, init)` 是最强大也最灵活的：把数组"归约"为单个值。' +
            'fn 接收 (累加器, 当前元素)，返回新的累加器。它能实现求和、扁平化、分组、' +
            '甚至可以用 reduce 实现 map 和 filter。初始值 init 很重要——不传时用第一个元素，' +
            '空数组不传初始值会报错。求和、计数、找最值是 reduce 的常见用法。\n\n' +
            '链式调用让数据变换流水线化：`arr.filter(...).map(...).reduce(...)`，' +
            '从原始数据一步步过滤、转换、汇总，每一步意图清晰。这种声明式写法比 for 循环更易读，' +
            '也更容易测试和并行化。但要注意性能——大数据集多次遍历可能不如单次 for 高效，' +
            '工程中需在可读性与性能间权衡。\n\n' +
            '经典面试题"数组扁平化"可用 reduce 递归实现：`arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])`。' +
            '理解 reduce 的关键是把它看作"用 fn 把数组折叠成一个值"，这个值可以是数字、对象、数组甚至函数。',
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
            '遍历数组有多种方式，各有适用场景。传统 `for (let i = 0; i < arr.length; i++)` ' +
            '提供索引控制，适合需要索引或提前终止（break）的场景。`forEach(fn)` 是声明式遍历，' +
            '更简洁但不能 break/continue（要 break 用 for...of 或 some/every）。' +
            '`for...of` 是 ES6 遍历可迭代对象的语法，既能 break 又简洁，是遍历值的首选。\n\n' +
            '`for...in` 是遍历对象"键"的，不应用于数组——它会遍历原型链上的可枚举属性，' +
            '且不保证顺序，是常见误用。遍历数组索引可用 `arr.forEach((v, i) => ...)` 或 `arr.entries()`：' +
            '`for (const [i, v] of arr.entries())`，同时拿到索引和值。' +
            '选择正确的遍历方式能让代码既正确又优雅。\n\n' +
            '查找元素有多个方法：`indexOf(v)` 返回首次出现的索引（找不到 -1），' +
            '`find(fn)` 返回第一个满足条件的元素，`findIndex(fn)` 返回其索引，' +
            '`includes(v)` 判断是否包含（返回布尔）。判断数组是否"存在满足条件的元素"用 `some(fn)`，' +
            '判断"是否全部满足"用 `every(fn)`——这两个方法在表单校验中极常用。\n\n' +
            '性能上，大数据量遍历 for 最快，forEach/map 次之。但可读性往往比微优化更重要，' +
            '日常开发优先选语义清晰的方法，性能瓶颈处再用 for 优化。理解每种遍历的语义边界是工程素养。',
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
            '解构赋值是 ES6 的强大特性，能从数组中"按位置提取"值到变量：' +
            '`const [a, b] = [1, 2]` 让 a=1, b=2。这比传统的 `const a = arr[0]; const b = arr[1]` 简洁得多，' +
            '尤其适合交换变量、提取函数返回的多值、处理正则匹配结果。' +
            '解构让"从复合结构取值"变得声明式且直观。\n\n' +
            '解构支持跳过元素（用逗号占位）：`const [first, , third] = [1, 2, 3]` 得 first=1, third=3。' +
            '支持默认值：`const [a = 10] = []` 得 a=10。支持嵌套：`const [[a], [b]] = [[1], [2]]`。' +
            'rest 模式可收集剩余：`const [first, ...rest] = [1, 2, 3]` 得 first=1, rest=[2,3]。' +
            '这些组合让解构能应对复杂的提取需求。\n\n' +
            '交换变量是解构最优雅的应用：`[a, b] = [b, a]` 一行完成，无需临时变量。' +
            '函数返回多值时，约定返回数组再用解构接收：`const [data, error] = await fetch()`，' +
            '这是 Go 风格错误处理在 JS 中的体现。解构也让函数参数更灵活——配合默认值，' +
            '能实现"位置参数可选"的效果。\n\n' +
            '解构的本质是"模式匹配"——左侧的模式与右侧结构对应，匹配的值被赋给对应变量。' +
            '理解这个心智模型，再复杂的解构都能轻松拆解。',
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
            'spread 展开运算符 `...` 是 ES6 最实用的特性之一，虽与 rest 同符号但语义相反。' +
            '在数组字面量中，`[...a, ...b]` 展开数组拼接，替代 `a.concat(b)`。' +
            '在函数调用中，`fn(...arr)` 把数组展开为参数，替代 `fn.apply(null, arr)`。' +
            '浅拷贝数组：`const copy = [...arr]`，简洁直观。spread 让"数组与参数"的转换变得自然。\n\n' +
            'rest 参数 `...args` 在函数定义中收集剩余参数为数组（见第三章）。' +
            '在解构中 `[first, ...rest]` 收集剩余元素。区分 spread 与 rest 的关键看"位置"：' +
            '在调用/字面量处（展开）是 spread，在定义/赋值左侧（收集）是 rest。' +
            '这个区分是理解两者用法的关键。\n\n' +
            'spread 是浅拷贝——只展开一层，嵌套数组/对象仍是引用。' +
            '`[...[1, [2]]]` 得到 `[1, [2]]`，内层数组仍共享引用。' +
            '深拷贝需要递归或 `JSON.parse(JSON.stringify())`（见第 8 章深克隆）。' +
            '理解浅拷贝的边界能避免"修改副本影响原数组"的隐蔽 bug。\n\n' +
            '经典应用：合并数组、复制数组、把 NodeList 转 Array（`[...document.querySelectorAll("div")]`）、' +
            '把字符串拆成字符（`[..."hello"]` 得 `["h","e","l","l","o"]`）。' +
            'spread 是现代 JS 中使用频率最高的运算符之一，掌握它能让代码大幅简化。',
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
            '对象是 JS 中最重要的引用类型，用于存储键值对集合。对象字面量 `{ name: "小明", age: 20 }` ' +
            '是最常见的创建方式。键是字符串（或 Symbol），值可以是任意类型，包括函数、数组、其他对象。' +
            '对象是 JS 组织数据的基本单位——用户、商品、配置、API 响应都用对象表示。\n\n' +
            '访问属性有两种方式：点表示法 `obj.name`（键是合法标识符时）和方括号 `obj["name"]`（键含特殊字符或动态时）。' +
            '方括号支持变量作为键：`const key = "name"; obj[key]`，这在动态属性访问时必不可少。' +
            '属性可以动态添加（`obj.newProp = 1`）和删除（`delete obj.prop`）。' +
            '判断属性是否存在用 `in` 运算符或 `obj.hasOwnProperty(prop)`。\n\n' +
            '对象可以嵌套：`{ user: { name: "小明", address: { city: "北京" } } }`，' +
            '通过链式访问 `obj.user.address.city` 取深层值。可选链 `?.`（ES2020）能安全访问深层属性：' +
            '`obj?.user?.address?.city`，任一层为 null/undefined 时返回 undefined 而非报错，' +
            '是处理深层嵌套数据的现代标配。\n\n' +
            '对象是引用类型——赋值和传参传递的是引用而非副本。`const b = a; b.x = 2` 会改变 a.x。' +
            '这是新手最常踩的坑：修改"副本"影响了原对象。要避免需浅拷贝（{...obj}）或深拷贝。' +
            '理解引用语义是正确操作对象的前提。',
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
            '对象的属性值为函数时称为"方法"。ES6 提供方法简写：`{ greet() {} }` 等价于 `{ greet: function() {} }`。' +
            '方法通过 `this` 访问所属对象的其他属性：`this.name`。this 的指向是 JS 最复杂的概念之一，' +
            '取决于调用方式（见下节）。方法简写让对象字面量更紧凑，是现代代码的默认写法。\n\n' +
            '计算属性名（computed property）允许用变量作为键：`{ [key]: value }`。' +
            '这让动态构建对象变得方便：`const field = "name"; const obj = { [field]: "小明" }` 得 `{ name: "小明" }`。' +
            '常用于根据数据动态生成对象键，如把数组转成以 id 为键的对象映射（lookup table）。\n\n' +
            '遍历对象有专用 API：`Object.keys(obj)` 返回自身可枚举键的数组，' +
            '`Object.values(obj)` 返回值的数组，`Object.entries(obj)` 返回 [键, 值] 二元组数组。' +
            '它们让对象也能享受数组方法的便利：`Object.entries(obj).map(...)`。' +
            '遍历对象推荐 `for (const [key, value] of Object.entries(obj))`，比 for...in 更安全（不含原型链）。\n\n' +
            '`Object.assign(target, ...sources)` 把多个源对象合并到 target，常用于浅合并配置。' +
            '现代代码更多用 spread `{...a, ...b}` 实现合并（返回新对象，不修改原对象），更符合不可变风格。',
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
            '对象解构按"键名"提取值到变量：`const { name, age } = user` 让 name=user.name, age=user.age。' +
            '这比 `const name = user.name; const age = user.age` 简洁得多，是处理对象数据的首选方式。' +
            '对象解构按键匹配（与顺序无关），数组解构按位置匹配——这是两者的核心区别。\n\n' +
            '重命名：`const { name: fullName } = user` 把 user.name 赋给变量 fullName。' +
            '默认值：`const { age = 18 } = user` 当 user.age 为 undefined 时用 18。' +
            '两者可组合：`const { name: fullName = "匿名" } = user`。' +
            '嵌套解构：`const { user: { name } } = data` 提取 data.user.name，能直达深层属性。\n\n' +
            '函数参数解构是对象解构最强大的应用——让函数接收"选项对象"并直接解构：' +
            '`function fetch(url, { method = "GET", timeout = 5000 } = {}) {}`。' +
            '调用方 `fetch("/api", { method: "POST" })` 只传关心的选项，其余用默认。' +
            '这种"具名可选参数"模式是现代库 API 设计的事实标准，jQuery、axios、lodash 都采用。\n\n' +
            '解构还能用于交换变量（数组解构）、提取模块导出、处理 React props。' +
            '理解解构能让你写出更声明式、更健壮的代码，是 ES6 必备技能。',
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
            '`this` 是 JS 中最容易混淆的概念。它的值在函数"调用时"确定，而非定义时，' +
            '取决于调用方式。四种调用模式：1) 普通函数调用，this 是 undefined（严格模式）或 window；' +
            '2) 方法调用 `obj.fn()`，this 是 obj；3) 构造函数 `new Fn()`，this 是新创建的对象；' +
            '4) call/apply/bind 显式指定 this。理解这四种模式是掌握 this 的关键。\n\n' +
            '`bind`/`call`/`apply` 都能显式指定 this。`fn.call(obj, arg1, arg2)` 立即调用，this 为 obj；' +
            '`fn.apply(obj, [args])` 同 call 但参数是数组；`fn.bind(obj)` 返回一个 this 永久绑定到 obj 的新函数，不立即调用。' +
            'bind 常用于"固化 this"——把方法作为回调传递时防止 this 丢失。' +
            'call/apply 用于"借用"方法，如 `Array.prototype.slice.call(arguments)`。\n\n' +
            'this 丢失是经典陷阱：把对象方法赋值给变量再调用，this 就不再是原对象。' +
            '`const fn = obj.method; fn()` 此时 this 是 undefined/window。' +
            '回调中 this 丢失更常见：`btn.addEventListener("click", obj.method)` 点击时 this 是 btn 而非 obj。' +
            '解决方案：用 bind（`obj.method.bind(obj)`）或箭头函数（`() => obj.method()`）。\n\n' +
            '箭头函数没有自己的 this，继承外层词法作用域的 this。这让它特别适合做回调——' +
            '无需担心 this 被改变。但这也意味着箭头函数不能用作构造函数，也不适合需要动态 this 的方法。' +
            '选择规则：需要外层 this 用箭头，需要自身 this（方法、构造函数）用普通 function。',
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
            'Promise 是 JS 异步编程的现代基础，代表一个"未来会有值"的对象。它有三种状态：' +
            'pending（进行中）、fulfilled（已完成）、rejected（已失败）。状态一旦确定就不可逆。' +
            'Promise 解决了传统回调地狱（callback hell）的问题，让异步代码可通过链式调用表达，逻辑更清晰。\n\n' +
            '创建 Promise：`new Promise((resolve, reject) => { ... })`。' +
            '注意传入的"执行器函数"是同步执行的——这意味着在 new Promise 时，' +
            '执行器内的代码立即运行。这让我们能在练习中观察到执行器内的 console.log 输出。' +
            'resolve(value) 把状态变为 fulfilled，reject(err) 变为 rejected。' +
            '消费 Promise 用 `.then(onFulfilled)` 和 `.catch(onRejected)`，但它们的回调是异步执行的（微任务）。\n\n' +
            'Promise 链式调用让异步流程线性化：`p.then(a => ...).then(b => ...).catch(e => ...)`。' +
            '每个 then 返回新 Promise，使异步步骤可串联。但要注意：then 回调中的 console.log ' +
            '是异步执行的，本平台的同步运行环境无法捕获其输出——这是异步练习需要特别处理的地方。' +
            '因此 Promise 练习多聚焦于同步可观察的部分（执行器、typeof、instanceof）。\n\n' +
            '`Promise.all`（全部完成才完成）、`Promise.race`（最快一个决定）、`Promise.allSettled`（等全部落定）' +
            '是处理多个 Promise 的组合器。`Promise.resolve(v)` 和 `Promise.reject(e)` 是创建已落定 Promise 的快捷方式。' +
            '理解 Promise 是学习 async/await 的前提，后者本质是 Promise 的语法糖。',
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
            'async/await 是 ES2017 引入的异步语法糖，让异步代码看起来像同步代码。' +
            '`async function fn() {}` 声明异步函数，它总是返回 Promise——返回值会被自动包成 resolved Promise。' +
            '在 async 函数内用 `await promise` 暂停执行直到 Promise 落定，并拿到结果值。' +
            '这让异步流程可用 try/catch 处理错误，比 .catch() 更直观。\n\n' +
            '关键限制：await 只能在 async 函数内使用（顶层 await 是 ES2022 特性，需模块环境）。' +
            '本平台的运行环境是普通脚本，顶层 await 不可用，需用 async IIFE `(async () => { ... })()` 包裹。' +
            '但 IIFE 内的 await 后续代码是异步的，其 console.log 无法被同步捕获。' +
            '因此 async/await 练习侧重于理解其同步可观察的特性（如 async 函数返回 Promise）。\n\n' +
            'async 函数调用立即返回 Promise，这一步是同步的。`async function f() { return 42 }; f()` 返回一个 ' +
            'resolved 为 42 的 Promise。可用 `f() instanceof Promise` 验证。await 的语义是"暂停等待"，' +
            '但在练习环境中我们聚焦于"async 函数即返回 Promise 的函数"这一同步事实。\n\n' +
            '错误处理用 try/catch：`try { const r = await op() } catch(e) { ... }`，' +
            'await 的 Promise reject 会被 catch 捕获。这比 .catch() 链更符合同步思维。' +
            'async/await 让异步代码的结构（顺序、循环、错误处理）与同步代码一致，大幅降低认知负担，' +
            '是现代 JS 异步编程的主流方式。',
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
            'fetch 是浏览器原生的 HTTP 请求 API，基于 Promise 设计。`fetch(url)` 返回 Promise，' +
            'resolve 时给 Response 对象。Response 需再调用 `.json()`、`.text()` 等方法解析正文，' +
            '这些方法本身也返回 Promise。fetch 是现代前端与后端通信的标准方式，替代了旧的 XMLHttpRequest。\n\n' +
            'GET 请求最简单：`fetch("/api/users").then(r => r.json()).then(data => ...)`。' +
            'POST 请求需配置 options：`fetch("/api/users", { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) })`。' +
            '注意 body 必须是字符串，对象要 JSON.stringify。headers 设置内容类型让后端正确解析。\n\n' +
            'fetch 的一个常见陷阱：它只在网络错误时 reject，HTTP 状态码 4xx/5xx 不会 reject！' +
            '必须手动检查 `response.ok`（状态码 200-299 为 true）或 `response.status`。' +
            '因此健壮的 fetch 封装通常这样写：先判断 ok，不 ok 就抛错，让 catch 处理。' +
            '这是处理 API 错误的关键模式。\n\n' +
            '注意：本平台沙箱 iframe 受限，实际 fetch 可能不可用或被同源策略拦截。' +
            '因此本节练习为开放式，重在掌握 fetch 的用法模式，而非实际运行。' +
            '在真实项目里，fetch 配合 async/await 是数据请求的主流方案，' +
            '也是 React/Vue 等框架数据层的基础。',
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
            '异步代码的错误处理比同步更复杂，因为错误可能在不同时机抛出。同步代码用 try/catch 即可；' +
            '异步回调需要 Promise 的 catch；async/await 可以用 try/catch（语法糖，更友好）。' +
            '核心原则：异步操作的错误必须被捕获并处理，否则变成未处理的 rejection，' +
            '在现代浏览器会打印警告甚至导致脚本终止。\n\n' +
            'Promise 的错误处理：`.catch(onRejected)` 等价于 `.then(null, onRejected)`。' +
            'catch 后还能继续 then（恢复执行）。`Promise.all` 中任一 reject 则整体 reject——' +
            '若希望部分失败不影响整体，用 `Promise.allSettled`，它等所有都落定，' +
            '返回 [{ status: "fulfilled", value }, { status: "rejected", reason }]。\n\n' +
            'async/await 的错误处理用 try/catch，语法与同步代码一致，这是它最大的优点。' +
            '注意：await 的 Promise 若 reject 且没 try/catch，会变成未处理 rejection。' +
            '建议对可能失败的 await 包 try/catch，或在调用处的 .catch 中处理。\n\n' +
            '错误处理策略：① 重试（网络抖动重试 1-2 次）；② 降级（缓存数据或默认值）；' +
            '③ 通知用户（toast/弹窗）；④ 记录日志（上报错误监控）。' +
            '生产级前端通常封装统一的错误边界和请求拦截器。本节练习为 open-ended，' +
            '重在掌握 try/catch 与 .catch 的用法模式。',
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
            'DOM（Document Object Model）是浏览器把 HTML 解析成的树形对象，JS 通过 DOM API 操作页面。' +
            '选择元素是 DOM 操作的第一步。最常用的现代方法是 `document.querySelector(selector)` ' +
            '和 `document.querySelectorAll(selector)`，前者返回第一个匹配元素（没匹配返回 null），' +
            '后者返回 NodeList（类数组，可 forEach）。selector 用 CSS 选择器语法，如 `"#id"`、`".class"`、`"div"`、`"[data-id]"`。\n\n' +
            '传统方法：`document.getElementById(id)`（返回单个，注意 id 不带 #）、' +
            '`getElementsByClassName`、`getElementsByTagName`（返回动态 HTMLCollection）。' +
            '现代代码推荐 querySelector 系列，语法统一、更灵活。' +
            '注意 HTMLCollection 是动态的（DOM 变化会反映到集合），而 querySelectorAll 返回的是静态 NodeList。\n\n' +
            '选择到元素后，可进一步操作：读改属性（getAttribute/setAttribute）、' +
            '读改内容（textContent/innerHTML）、增删类（classList）、设置样式（style）。' +
            '本平台沙箱 iframe 限制了 DOM 操作（无可见文档），因此本节练习为 open-ended，' +
            '重在掌握选择器 API 的用法模式。在真实浏览器环境中，这些是日常开发的基础。',
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
            '选中元素后，最常用的操作是修改内容和样式。读改文本用 `el.textContent`（纯文本，自动转义 HTML，' +
            '推荐）或 `el.innerHTML`（HTML 字符串，可注入标签但有 XSS 风险，慎用）。' +
            '读改属性用 `el.getAttribute(name)` / `el.setAttribute(name, value)`，' +
            '或直接 `el.id`、`el.href`、`el.value` 等标准属性。' +
            'data-* 属性用 `el.dataset.key`（自动转驼峰，data-user-id → dataset.userId）。\n\n' +
            '修改样式有两种方式：① 行内样式 `el.style.color = "red"`（驼峰命名，background-color → backgroundColor）；' +
            '② 切换 class `el.classList.add("active")` / `.remove` / `.toggle` / `.contains`（推荐，' +
            '把样式逻辑留在 CSS 里，JS 只切换状态）。class 操作比直接改 style 更易维护，' +
            '是工程化项目的标准做法。\n\n' +
            '创建和插入元素：`document.createElement(tag)` 创建新元素，' +
            '`parent.appendChild(child)` 追加到末尾，`parent.insertBefore(newEl, refEl)` 插到某元素前，' +
            '`el.remove()` 移除元素。`parent.innerHTML = "..."` 可批量替换内容但会重建子树（性能差、' +
            '有 XSS 风险），推荐用 createElement + appendChild 逐个构建。\n\n' +
            '本平台沙箱无可见文档，练习为 open-ended。在真实项目中，这些 API 是构建动态 UI 的核心。',
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
            '事件是浏览器响应用户交互的机制：点击、输入、滚动、键盘等都会触发事件。' +
            '绑定事件监听用 `el.addEventListener(type, listener)`，type 是事件名（如 "click"、"input"），' +
            'listener 是回调函数，事件发生时被调用，参数是事件对象 event。' +
            '一个元素可绑定多个监听器，按添加顺序触发。\n\n' +
            '事件对象 event 包含关键信息：`event.target`（实际触发元素）、`event.currentTarget`（绑定监听器的元素）、' +
            '`event.type`（事件类型）、`event.preventDefault()`（阻止默认行为，如阻止表单提交/链接跳转）、' +
            '`event.stopPropagation()`（阻止冒泡）。鼠标事件有 clientX/clientY，键盘事件有 key/code。\n\n' +
            '事件流分三阶段：捕获（从 document 往下）→ 目标 → 冒泡（从目标往上）。' +
            '默认在冒泡阶段触发监听器（第三参数 false 或省略）。设第三参数 true 可在捕获阶段触发。' +
            '大多数场景用冒泡即可，捕获较少用。理解冒泡是事件委托的基础。\n\n' +
            '移除监听用 `el.removeEventListener(type, listener)`——注意必须传同一个函数引用，' +
            '匿名函数无法移除。本平台沙箱无真实交互，练习为 open-ended。事件监听是前端交互的核心，' +
            '所有 UI 框架底层都基于它。',
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
            '事件委托（Event Delegation）是利用事件冒泡机制，把多个子元素的事件统一委托给父元素处理。' +
            '不給每个子元素单独绑监听器，而是在父元素绑一个，用 event.target 判断实际触发的是哪个子元素。' +
            '这是处理"动态增删的列表项"等场景的标准模式。\n\n' +
            '为什么需要事件委托？① 性能：100 个列表项绑 100 个监听器不如父元素绑 1 个；' +
            '② 动态元素：后续新增的子元素无需重新绑监听器，自动被父元素委托覆盖；' +
            '③ 统一处理：逻辑集中在一处，易维护。典型场景：ul 里的 li 点击、table 里的行点击、' +
            '动态加载的卡片。\n\n' +
            '实现要点：在父元素绑监听器，回调里用 `event.target.closest(selector)` 找到匹配的子元素。' +
            'closest 从 target 往上找最近匹配祖先（含自身），返回元素或 null。用它而非直接判断 target，' +
            '能处理"target 是子元素深层节点"的情况。还要判断 `event.target.matches(selector)` ' +
            '或 closest 是否非空，避免点到非目标区域。\n\n' +
            '事件委托是面试高频题，也是真实工程必备技能。本节练习为 open-ended，重在掌握委托模式。',
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
            'ES 模块（ESM）是 JS 官方的模块系统，用 `export` 导出、`import` 导入。' +
            '模块让代码拆分成独立文件，便于复用和维护。每个 .js/.ts 文件默认是一个模块（有自己的作用域）。' +
            '在 HTML 中用 `<script type="module" src="...">` 加载。Node.js 现代项目（package.json 设 "type": "module"）也用 ESM。\n\n' +
            '导出有两种：① 命名导出 `export const foo = 1; export function bar() {}`，' +
            '导入用 `import { foo, bar } from "./mod"`（名字必须一致，可用 as 重命名）；' +
            '② 默认导出 `export default class User {}`，每个模块只能一个默认导出，' +
            '导入用 `import User from "./mod"`（名字自定义，不带花括号）。' +
            '命名导出适合工具函数库，默认导出适合"模块即一个主功能"（如一个类）。\n\n' +
            '导入语法变体：`import * as Mod from "./mod"`（全部导入为命名空间对象）、' +
            '`import { foo as f } from "./mod"`（重命名）、`import "./mod"`（仅执行副作用，不取导出）。' +
            '动态导入 `import("./mod")` 返回 Promise，用于按需加载（路由懒加载、动态加载大库）。\n\n' +
            '注意：ESM 顶层 this 是 undefined（非模块是 window）。导入是"活的绑定"——' +
            '导出方修改值，导入方看到最新值（不同于 CommonJS 的值拷贝）。' +
            '本平台沙箱不支持 ESM（单文件执行），练习为 open-ended。模块是现代 JS 工程的基石。',
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
            'ES6 的 `class` 是基于原型链的语法糖，让面向对象写法更接近传统语言。' +
            '定义类：`class Name { constructor() {} method() {} }`。' +
            'constructor 是构造函数，new 时自动调用。方法定义在类体内（不用 function 关键字）。' +
            '类本质仍是函数和原型，class 让写法更清晰。\n\n' +
            '继承用 `extends`：`class Dog extends Animal {}`。子类用 `super` 调用父类：' +
            '`super(args)` 在 constructor 中调用父类构造函数（必须在使用 this 前调用），' +
            '`super.method()` 调用父类方法。子类可重写父类方法（同名覆盖），也可用 super 复用父类逻辑。\n\n' +
            '静态方法用 `static` 关键字：`class User { static create(name) { return new User(name) } }`，' +
            '通过 `User.create("x")` 调用（不需实例化）。静态方法常作为工厂方法或工具函数。' +
            '私有字段用 `#name`（ES2022）：`class User { #name; constructor(n){this.#name=n} }`，' +
            '外部无法访问 #name，实现真正的封装。\n\n' +
            'getter/setter 用 `get`/`set` 关键字：`get name() { return this.#name }`。' +
            '类字段语法（ES2022）：`class Foo { count = 0; }` 直接在类体内初始化实例属性。' +
            '类是组织复杂状态与行为的工具，也是面试常考点。本节练习可在沙箱运行（同步）。',
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
            'Symbol 是 ES6 引入的第七种基本类型，表示"唯一且不可变"的值。' +
            '创建：`const s = Symbol("描述")`——注意 Symbol 前不能加 new（它不是构造函数，是值）。' +
            '每个 Symbol 值都唯一：`Symbol() === Symbol()` 为 false，即使描述相同。' +
            'Symbol 主要用途是作为对象属性键，避免与其它键冲突（尤其第三方库扩展对象时）。\n\n' +
            'Symbol 作为属性键不会被 `for...in`、`Object.keys()`、`JSON.stringify` 遍历到——它是"隐藏"的。' +
            '要用 `Object.getOwnPropertySymbols(obj)` 才能取到。这让 Symbol 适合做"内部"属性或元数据。' +
            '内置 Symbol（如 `Symbol.iterator`、`Symbol.toPrimitive`）用于自定义对象的迭代、类型转换等协议——' +
            '这是 JS 实现"鸭子类型协议"的方式。\n\n' +
            'Proxy 是 ES6 的元编程特性，能"代理"一个对象，拦截对其属性的操作（get/set/has/delete 等）。' +
            '创建：`new Proxy(target, handler)`，handler 定义"陷阱"（trap）函数，如 `get(obj, key)` ' +
            '拦截读取、`set(obj, key, value)` 拦截赋值。Proxy 是 Vue 3 响应式系统、' +
            'MobX 等状态管理库的底层原理。\n\n' +
            'Proxy 典型用途：数据校验（set 时验证值）、日志（记录属性访问）、响应式（set 时通知更新）、' +
            '默认值（get 不存在属性时返回默认）。配合 Reflect 对象（Reflect.get/set 提供默认行为）使用更规范。' +
            '本节练习可在沙箱运行（同步）。',
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
            '设计模式是前人总结的代码组织经验，解决反复出现的问题。JS 常用模式：' +
            '① 单例模式（全局唯一实例，如登录态管理）；② 工厂模式（用函数/静态方法创建对象，隐藏构造细节）；' +
            '③ 观察者/发布订阅模式（事件系统、Promise、响应式库的基础）；④ 策略模式（用对象映射替代 if/else）。' +
            '模式不是教条，而是工具——理解其解决的问题比死记结构更重要。\n\n' +
            '本节聚焦两个高频面试题与工程必备工具：debounce（防抖）和 throttle（节流）。' +
            'debounce：在连续触发中只执行最后一次（如搜索框输入停止后才搜索）。' +
            '实现思路：每次调用清除上一个定时器，设新定时器，只有停止后定时器才到期执行。' +
            'throttle：在连续触发中每隔固定时间执行一次（如滚动事件限频）。' +
            '实现思路：用时间戳或定时器，确保两次执行间隔不少于指定时间。\n\n' +
            '另一个高频题是深拷贝（deep clone）。浅拷贝（Object.assign、展开 ...）只复制一层，嵌套对象仍共享引用。' +
            '深拷贝递归复制所有层级。简单方案 `JSON.parse(JSON.stringify(obj))` 但有局限（不支持函数、' +
            'undefined、Symbol、循环引用、Date/RegExp 等）。健壮方案是递归 + 类型判断 + 处理循环引用（用 WeakMap 记录已拷贝对象）。\n\n' +
            '这些是面试和工程的高频考点，也是理解 JS 引用类型、闭包、定时器的综合应用。本节练习可在沙箱运行。',
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