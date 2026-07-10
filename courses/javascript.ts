import type { CourseContent } from './types'

/**
 * JavaScript 入门到进阶课程（5 章）
 *
 * JS 代码通过 JsWasmRunner 在 iframe 中执行，console.log 输出被捕获为 stdout。
 * expected_output 与 console.log 输出文本对应（不含末尾换行）。
 */
export const javascriptCourse: CourseContent = {
  id: 'course-javascript',
  slug: 'javascript',
  title: 'JavaScript 入门到进阶',
  description: '从变量、函数到 DOM 操作，系统学习 JavaScript 核心语法与浏览器编程。',
  language: 'javascript',
  difficulty: 'beginner',
  chapters: [
    {
      id: 'js-ch1',
      title: '变量与类型',
      order: 0,
      lessons: [
        {
          id: 'js-ch1-l1',
          title: 'let 与 const',
          order: 0,
          content_md:
            '`let` 声明可变变量，`const` 声明常量（不可重新赋值）。' +
            '现代 JS 推荐默认用 `const`，需要修改时才用 `let`，' +
            '避免使用 `var`（存在作用域问题）。',
          example_code:
            'const name = "小明"\nlet age = 18\nage = 19\nconsole.log(name, age)',
          exercise: {
            prompt: '用 const 声明变量 city 赋值为 "北京"，用 console.log 输出它。',
            starter_code: 'const city = ___\nconsole.log(city)',
            expected_output: '北京',
          },
        },
        {
          id: 'js-ch1-l2',
          title: '数据类型',
          order: 1,
          content_md:
            'JS 基本类型：number（数字）、string（字符串）、boolean（布尔）、' +
            'null、undefined。`typeof` 运算符返回类型名称字符串。' +
            '字符串用单引号或双引号包裹。',
          example_code:
            'const n = 42\nconst s = "hello"\nconst b = true\nconsole.log(typeof n)\nconsole.log(typeof s)\nconsole.log(typeof b)',
          exercise: {
            prompt: '声明变量 count 为数字 10，用 typeof 检查并输出它的类型。',
            starter_code: 'const count = ___\nconsole.log(typeof count)',
            expected_output: 'number',
          },
        },
      ],
    },
    {
      id: 'js-ch2',
      title: '函数与作用域',
      order: 1,
      lessons: [
        {
          id: 'js-ch2-l1',
          title: '函数声明与箭头函数',
          order: 0,
          content_md:
            '函数用 `function` 关键字声明，也可用箭头函数 `const fn = () => {}`。' +
            '函数接收参数，用 `return` 返回值。调用时写 `fn(参数)`。',
          example_code:
            'function add(a, b) {\n  return a + b\n}\nconst multiply = (a, b) => a * b\nconsole.log(add(3, 4))\nconsole.log(multiply(3, 4))',
          exercise: {
            prompt: '写一个函数 greet，接收参数 name，返回 "你好, " + name。调用 greet("世界") 并输出结果。',
            starter_code:
              'function greet(name) {\n  return ___\n}\nconsole.log(greet("世界"))',
            expected_output: '你好, 世界',
          },
        },
        {
          id: 'js-ch2-l2',
          title: '作用域与闭包',
          order: 1,
          content_md:
            '函数内部定义的变量在函数外部不可访问，这就是作用域。' +
            '闭包是函数及其词法环境的组合，内层函数可以访问外层函数的变量。',
          example_code:
            'function counter() {\n  let count = 0\n  return function () {\n    count++\n    return count\n  }\n}\nconst c = counter()\nconsole.log(c())\nconsole.log(c())',
          exercise: {
            prompt: '写一个函数 makeAdder(base)，返回一个函数，调用时返回 base + 参数。' +
              '创建 makeAdder(10)，调用传入 5，输出结果。',
            starter_code:
              'function makeAdder(base) {\n  return function (n) {\n    return ___\n  }\n}\nconst add10 = makeAdder(10)\nconsole.log(add10(5))',
            expected_output: '15',
          },
        },
      ],
    },
    {
      id: 'js-ch3',
      title: '条件与循环',
      order: 2,
      lessons: [
        {
          id: 'js-ch3-l1',
          title: 'if 与 switch',
          order: 0,
          content_md:
            '`if (条件) { } else { }` 根据条件执行不同分支。' +
            '`switch` 适合多值匹配，用 `case` 分支和 `break` 跳出。' +
            '比较运算符：`===` 严格相等（不转换类型），推荐使用。',
          example_code:
            'const score = 85\nif (score >= 90) {\n  console.log("优秀")\n} else if (score >= 60) {\n  console.log("及格")\n} else {\n  console.log("不及格")\n}',
          exercise: {
            prompt: '判断变量 age 的值：如果大于等于 18 输出 "成年"，否则输出 "未成年"。',
            starter_code:
              'const age = 20\nif (___) {\n  console.log("成年")\n} else {\n  console.log("未成年")\n}',
            expected_output: '成年',
          },
        },
        {
          id: 'js-ch3-l2',
          title: 'for 与 while 循环',
          order: 1,
          content_md:
            '`for (初始化; 条件; 更新) { }` 适合已知次数的循环。' +
            '`while (条件) { }` 适合不确定次数的循环。' +
            '用 `break` 跳出循环，`continue` 跳过本次。',
          example_code:
            'let sum = 0\nfor (let i = 1; i <= 5; i++) {\n  sum += i\n}\nconsole.log(sum)',
          exercise: {
            prompt: '用 for 循环计算 1 到 10 的和，输出结果。',
            starter_code:
              'let sum = 0\nfor (let i = 1; i <= ___; i++) {\n  sum += i\n}\nconsole.log(sum)',
            expected_output: '55',
          },
        },
      ],
    },
    {
      id: 'js-ch4',
      title: '数组与对象',
      order: 3,
      lessons: [
        {
          id: 'js-ch4-l1',
          title: '数组操作',
          order: 0,
          content_md:
            '数组用 `[元素, 元素]` 创建，通过索引访问（从 0 开始）。' +
            '`push` 添加末尾元素，`length` 获取长度，' +
            '`map` 遍历并返回新数组，`filter` 过滤元素。',
          example_code:
            'const nums = [1, 2, 3, 4, 5]\nconst doubled = nums.map(n => n * 2)\nconsole.log(doubled)\nconst evens = nums.filter(n => n % 2 === 0)\nconsole.log(evens)',
          exercise: {
            prompt: '创建数组 [10, 20, 30]，用 map 将每个元素乘以 3，输出结果。',
            starter_code:
              'const arr = [10, 20, 30]\nconst result = arr.map(n => ___)\nconsole.log(result)',
            expected_output: '[ 30, 60, 90 ]',
          },
        },
        {
          id: 'js-ch4-l2',
          title: '对象基础',
          order: 1,
          content_md:
            '对象用 `{ 键: 值 }` 创建，用 `.` 或 `[]` 访问属性。' +
            '可以动态添加和修改属性。对象可以嵌套，' +
            '也可以包含函数（方法）。',
          example_code:
            'const person = {\n  name: "小明",\n  age: 20,\n  greet() {\n    return "你好，我是" + this.name\n  }\n}\nconsole.log(person.name)\nconsole.log(person.greet())',
          exercise: {
            prompt: '创建对象 student，有属性 name 为 "小红"、score 为 95。输出 student.score。',
            starter_code:
              'const student = {\n  name: "小红",\n  score: ___\n}\nconsole.log(student.score)',
            expected_output: '95',
          },
        },
      ],
    },
    {
      id: 'js-ch5',
      title: 'DOM 操作基础',
      order: 4,
      lessons: [
        {
          id: 'js-ch5-l1',
          title: '获取与修改元素',
          order: 0,
          content_md:
            '`document.getElementById` 按 ID 获取元素，' +
            '`document.querySelector` 用 CSS 选择器获取。' +
            '修改 `textContent` 改变文本，修改 `style` 改变样式。' +
            '注：运行环境为沙箱 iframe，需先用 `document.body.innerHTML` 设置页面内容。',
          example_code:
            'document.body.innerHTML = "<div id=app>你好</div>"\nconst el = document.getElementById("app")\nconsole.log(el.textContent)\nel.textContent = "已修改"\nconsole.log(el.textContent)',
          exercise: {
            prompt: '先设置页面内容为 `<div id=app>旧文本</div>`，获取该元素，' +
              '将 textContent 改为 "已更新" 并输出新值。',
            starter_code:
              'document.body.innerHTML = "<div id=app>旧文本</div>"\nconst el = document.getElementById("app")\nel.textContent = ___\nconsole.log(el.textContent)',
            expected_output: '已更新',
          },
        },
        {
          id: 'js-ch5-l2',
          title: '事件处理',
          order: 1,
          content_md:
            '`addEventListener` 为元素绑定事件，如 "click" 点击事件。' +
            '回调函数接收事件对象，可获取触发元素等信息。' +
            '注：运行环境为沙箱 iframe，需先创建按钮元素。',
          example_code:
            'document.body.innerHTML = "<button id=btn>点我</button>"\nconst btn = document.getElementById("btn")\nbtn.addEventListener("click", () => {\n  console.log("按钮被点击了")\n})\nbtn.click()\nconsole.log("代码执行完毕")',
          exercise: {
            prompt: '先设置页面内容为 `<button id=btn>点我</button>`，' +
              '为该按钮绑定 click 事件，点击时输出 "clicked"。',
            starter_code:
              'document.body.innerHTML = "<button id=btn>点我</button>"\nconst btn = document.getElementById("btn")\nbtn.addEventListener("click", () => {\n  console.log(___)\n})\nbtn.click()',
            expected_output: 'clicked',
          },
        },
      ],
    },
  ],
}
