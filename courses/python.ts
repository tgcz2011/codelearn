import type { CourseContent } from './types'

/**
 * Python 入门到精通课程（6 章）
 *
 * Python 代码通过 Pyodide（WASM）在浏览器内执行，print 输出被捕获为 stdout。
 * expected_output 与 print 输出文本对应（不含末尾换行）。
 */
export const pythonCourse: CourseContent = {
  id: 'course-python',
  slug: 'python',
  title: 'Python 入门到精通',
  description: '从变量输入输出到面向对象编程，全面学习 Python 核心语法与编程思维。',
  language: 'python',
  difficulty: 'beginner',
  chapters: [
    {
      id: 'py-ch1',
      title: '变量与输入输出',
      order: 0,
      lessons: [
        {
          id: 'py-ch1-l1',
          title: 'print 与变量',
          order: 0,
          content_md:
            '`print()` 是 Python 最常用的输出函数，可输出文字和变量。' +
            '变量用 `=` 赋值，无需声明类型。' +
            '字符串用单引号或双引号包裹。',
          example_code: 'name = "小明"\nprint("你好")\nprint(name)',
          exercise: {
            prompt: '声明变量 city 赋值为 "上海"，用 print 输出它的值。',
            starter_code: 'city = ___\nprint(city)',
            expected_output: '上海',
          },
        },
        {
          id: 'py-ch1-l2',
          title: '基本数据类型',
          order: 1,
          content_md:
            'Python 常见类型：int（整数）、float（浮点数）、' +
            'str（字符串）、bool（布尔）。`type()` 查看变量类型，' +
            '`#` 开头为注释。',
          example_code:
            'age = 20          # int\nprice = 9.9       # float\nname = "小明"     # str\nis_active = True   # bool\nprint(type(age))\nprint(type(name))',
          exercise: {
            prompt: '声明变量 count 为整数 10，用 type() 输出它的类型。',
            starter_code: 'count = ___\nprint(type(count))',
            expected_output: "<class 'int'>",
          },
        },
      ],
    },
    {
      id: 'py-ch2',
      title: '条件与循环',
      order: 1,
      lessons: [
        {
          id: 'py-ch2-l1',
          title: 'if / elif / else',
          order: 0,
          content_md:
            'Python 用缩进（4 空格）表示代码块。`if 条件:` 后跟缩进的代码体。' +
            '`elif` 表示否则如果，`else` 表示否则。' +
            '比较运算符：`==`、`!=`、`>`、`<`、`>=`、`<=`。',
          example_code:
            'score = 85\nif score >= 90:\n    print("优秀")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")',
          exercise: {
            prompt: '判断变量 age：如果大于等于 18 输出 "成年"，否则输出 "未成年"。',
            starter_code:
              'age = 20\nif ___:\n    print("成年")\nelse:\n    print("未成年")',
            expected_output: '成年',
          },
        },
        {
          id: 'py-ch2-l2',
          title: 'for 与 while 循环',
          order: 1,
          content_md:
            '`for 变量 in range(n):` 循环 n 次（0 到 n-1）。' +
            '`while 条件:` 当条件为真时重复执行。' +
            '`range(a, b)` 生成 a 到 b-1 的序列。',
          example_code:
            'total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)',
          exercise: {
            prompt: '用 for 循环计算 1 到 10 的和，输出结果。',
            starter_code:
              'total = 0\nfor i in range(1, ___):\n    total += i\nprint(total)',
            expected_output: '55',
          },
        },
      ],
    },
    {
      id: 'py-ch3',
      title: '函数与模块',
      order: 2,
      lessons: [
        {
          id: 'py-ch3-l1',
          title: '定义函数',
          order: 0,
          content_md:
            '`def 函数名(参数):` 定义函数，缩进块为函数体。' +
            '`return` 返回值。调用时写 `函数名(参数)`。' +
            '函数可以有默认参数值。',
          example_code:
            'def greet(name, greeting="你好"):\n    return greeting + ", " + name\n\nprint(greet("小明"))\nprint(greet("小红", "嗨"))',
          exercise: {
            prompt: '定义函数 double(n)，返回 n * 2。调用 double(21) 并输出结果。',
            starter_code:
              'def double(n):\n    return ___\n\nprint(double(21))',
            expected_output: '42',
          },
        },
        {
          id: 'py-ch3-l2',
          title: '模块导入',
          order: 1,
          content_md:
            '`import 模块` 导入标准库模块，用 `模块.函数` 调用。' +
            '`from 模块 import 函数` 直接导入特定函数。' +
            '常用模块：`math`（数学）、`random`（随机）、`os`（系统）。',
          example_code:
            'import math\nprint(math.pi)\nprint(math.sqrt(16))',
          exercise: {
            prompt: '导入 math 模块，输出 math.ceil(3.2) 的结果（向上取整）。',
            starter_code:
              'import math\nprint(math.___(3.2))',
            expected_output: '4',
          },
        },
      ],
    },
    {
      id: 'py-ch4',
      title: '列表与字典',
      order: 3,
      lessons: [
        {
          id: 'py-ch4-l1',
          title: '列表操作',
          order: 0,
          content_md:
            '列表用 `[元素, 元素]` 创建，可修改。`append` 添加元素，' +
            '`len` 获取长度，`[索引]` 访问元素（从 0 开始）。' +
            '支持切片 `[起:止]` 获取子列表。',
          example_code:
            'fruits = ["苹果", "香蕉", "橘子"]\nfruits.append("葡萄")\nprint(fruits)\nprint(len(fruits))\nprint(fruits[0])',
          exercise: {
            prompt: '创建列表 nums = [3, 1, 4, 1, 5]，用 len 输出它的长度。',
            starter_code:
              'nums = [3, 1, 4, 1, 5]\nprint(___)',
            expected_output: '5',
          },
        },
        {
          id: 'py-ch4-l2',
          title: '字典',
          order: 1,
          content_md:
            '字典用 `{键: 值}` 创建，通过键快速查找值。' +
            '`dict[键]` 访问值，`dict[键] = 值` 添加或修改。' +
            '`keys()` 返回所有键，`values()` 返回所有值。',
          example_code:
            'student = {"name": "小明", "age": 20}\nprint(student["name"])\nstudent["age"] = 21\nprint(student)',
          exercise: {
            prompt: '创建字典 d = {"x": 10, "y": 20}，输出 d["y"] 的值。',
            starter_code:
              'd = {"x": 10, "y": 20}\nprint(___)',
            expected_output: '20',
          },
        },
      ],
    },
    {
      id: 'py-ch5',
      title: '文件与异常',
      order: 4,
      lessons: [
        {
          id: 'py-ch5-l1',
          title: '文件读写',
          order: 0,
          content_md:
            '`open(路径, 模式)` 打开文件，`"w"` 写、`"r"` 读。' +
            '`with` 语句自动关闭文件。`write()` 写入内容，' +
            '`read()` 读取全部。Pyodide 环境用内存文件系统。',
          example_code:
            'with open("/tmp/test.txt", "w") as f:\n    f.write("Hello")\nwith open("/tmp/test.txt", "r") as f:\n    print(f.read())',
          exercise: {
            prompt: '将文字 "Python" 写入 /tmp/note.txt，再读取并输出。',
            starter_code:
              'with open("/tmp/note.txt", "w") as f:\n    f.write(___)\nwith open("/tmp/note.txt", "r") as f:\n    print(f.read())',
            expected_output: 'Python',
          },
        },
        {
          id: 'py-ch5-l2',
          title: '异常处理',
          order: 1,
          content_md:
            '`try / except` 捕获异常，防止程序崩溃。' +
            '`except 异常类型` 捕获特定异常。' +
            '`finally` 块无论是否异常都会执行。',
          example_code:
            'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("不能除以零")\nfinally:\n    print("执行完毕")',
          exercise: {
            prompt: '用 try/except 捕获除以零异常，输出 "除零错误"。',
            starter_code:
              'try:\n    1 / 0\nexcept ___:\n    print("除零错误")',
            expected_output: '除零错误',
          },
        },
      ],
    },
    {
      id: 'py-ch6',
      title: '面向对象基础',
      order: 5,
      lessons: [
        {
          id: 'py-ch6-l1',
          title: '类与对象',
          order: 0,
          content_md:
            '`class 类名:` 定义类。`__init__` 是构造方法，' +
            '`self` 指向实例本身。用 `类名()` 创建对象，' +
            '通过 `对象.属性` 访问成员。',
          example_code:
            'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return self.name + " 汪汪！"\n\nd = Dog("旺财")\nprint(d.bark())',
          exercise: {
            prompt: '定义类 Cat，构造方法接收 name，方法 meow 返回 name + " 喵～"。' +
              '创建 Cat("咪咪")，调用 meow 并输出。',
            starter_code:
              'class Cat:\n    def __init__(self, name):\n        self.name = name\n    def meow(self):\n        return ___\n\nc = Cat("咪咪")\nprint(c.meow())',
            expected_output: '咪咪 喵～',
          },
        },
        {
          id: 'py-ch6-l2',
          title: '继承',
          order: 1,
          content_md:
            '`class 子类(父类):` 实现继承，子类获得父类所有方法。' +
            '`super().__init__()` 调用父类构造方法。' +
            '子类可重写父类方法（同名覆盖）。',
          example_code:
            'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return self.name + " 发出声音"\n\nclass Cat(Animal):\n    def speak(self):\n        return self.name + " 喵～"\n\nc = Cat("咪咪")\nprint(c.speak())',
          exercise: {
            prompt: '定义 Dog 继承 Animal，重写 speak 返回 name + " 汪！"。' +
              '创建 Dog("旺财")，调用 speak 输出结果。',
            starter_code:
              'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def speak(self):\n        return ___\n\nd = Dog("旺财")\nprint(d.speak())',
            expected_output: '旺财 汪！',
          },
        },
      ],
    },
  ],
}
