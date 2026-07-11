import type { CourseContent } from './types'

/**
 * Python 入门到精通课程（8 章 32 节）
 *
 * Python 代码通过 Pyodide（WASM）在浏览器内执行，或通过 OnlineCompiler（python-3.14）运行。
 * print() 输出被捕获为 stdout，expected_output 与输出文本对应（不含末尾换行）。
 * Pyodide 支持大部分 Python 标准库，但不支持 numpy/pandas 等外部包。
 * input() 在 Pyodide 中为非交互式，因此练习均使用预设变量，不依赖实时输入。
 */
export const pythonCourse: CourseContent = {
  id: 'course-python',
  slug: 'python',
  title: 'Python 入门到精通',
  description: '从变量输入输出到异步编程，系统学习 Python 核心语法、数据结构、面向对象与进阶主题，培养工程化编程思维。',
  language: 'python',
  difficulty: 'beginner',
  chapters: [
    // ================================================================
    // 第 1 章：Python 入门
    // ================================================================
    {
      id: 'py-ch1',
      title: 'Python 入门',
      order: 0,
      lessons: [
        {
          id: 'py-ch1-l1',
          title: '变量与 print',
          order: 0,
          content_md:
            '`print()` 是 Python 最常用的内置函数，用于将文本和变量输出到标准输出（stdout）。' +
            '在 Pyodide 环境中，`print()` 的输出会被捕获并显示在终端区域。' +
            '`print()` 可以接受多个参数，默认用空格分隔，末尾自动换行。' +
            '可以通过 `sep` 和 `end` 参数自定义分隔符和结尾字符。\n\n' +
            'Python 中变量用 `=` 赋值，无需提前声明类型——这是"动态类型"的核心特征。' +
            '解释器会根据右侧的值自动推断变量类型：`x = 42` 推断为 `int`，`x = "hello"` 推断为 `str`。' +
            '变量名区分大小写，只能包含字母、数字、下划线，且不能以数字开头。' +
            '推荐使用 `snake_case`（下划线命名）风格，如 `user_name`、`total_count`。\n\n' +
            '字符串可以用单引号 `' + "''" + '` 或双引号 `""` 包裹，两者完全等价。' +
            '当字符串内部需要包含引号时，可以选择另一种引号来避免转义：' +
            '`"It\'s ok"` 会报错，但 `"It\'s ok"` 或 `' + "'It's ok'" + '` 都可以。' +
            '多行字符串用三引号 `"""..."""` 包裹，常用于文档字符串（docstring）。\n\n' +
            'Python 的设计哲学强调"可读性优先"——代码是写给人看的。' +
            '简洁的语法、强制缩进、丰富的内置函数让 Python 成为最适合初学者的语言之一。' +
            '掌握 `print()` 和变量赋值是所有 Python 编程的第一步，后续所有课程都建立在此基础之上。',
          examples: [
            {
              title: 'Hello World',
              code: `# 最经典的入门程序
print("Hello, World!")
print('你好，Python')`,
              explanation:
                'print() 输出一行文本，自动在末尾换行。' +
                '单引号和双引号在 Python 中完全等价，选择哪种取决于个人偏好或字符串内容。',
            },
            {
              title: '变量赋值与输出',
              code: `name = "小明"
age = 20
height = 1.75
# 多个参数用逗号分隔，输出时自动用空格连接
print("姓名:", name, "年龄:", age)
# 用 f-string 直接嵌入变量（后续课程详解）
print(f"{name}今年{age}岁，身高{height}米")`,
              explanation:
                '变量通过 = 赋值，无需声明类型。print() 接受多个参数时默认用空格分隔。' +
                'f-string（格式化字符串）用 {} 直接嵌入变量，是 Python 3.6+ 推荐的格式化方式。',
            },
            {
              title: 'print 的 sep 与 end 参数',
              code: `# sep 指定分隔符，默认是空格
print("2024", "01", "15", sep="-")
# end 指定结尾字符，默认是换行符 \\n
print("加载中", end="...")
print("完成")`,
              explanation:
                'sep 参数控制多个参数之间的分隔符，这里用 "-" 连接日期。' +
                'end 参数控制输出结尾，设为 "..." 后下一次 print 会紧接在同一行。' +
                '输出为："2024-01-15" 和 "加载中...完成"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 print() 输出 "Hello, Python!"。',
              starter_code: `print(___)`,
              expected_output: 'Hello, Python!',
              hints: [
                'print() 的参数是一个字符串',
                '字符串需要用引号包裹',
                '答案: "Hello, Python!"',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明变量 city 赋值为 "上海"，用 print 输出它的值。',
              starter_code: `city = ___
print(city)`,
              expected_output: '上海',
              hints: [
                '字符串需要用引号包裹',
                '把 ___ 替换为 "上海"',
                '注意使用双引号或单引号都可以',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 print 的 sep 参数，将三个字符串 "2024"、"07"、"11" 用 "/" 连接输出。',
              starter_code: `print("2024", "07", "11", sep=___)`,
              expected_output: '2024/07/11',
              hints: [
                'sep 参数的值是一个字符串',
                '分隔符是 "/"',
                '答案: "/"',
              ],
            },
          ],
          realWorldScenario:
            '开发命令行工具（CLI）时，print() 是与用户交互的最基本方式——输出欢迎信息、操作结果、错误提示都依赖它。' +
            '例如构建一个任务管理 CLI，每条任务的增删改查结果都需要通过 print 反馈给用户。' +
            '掌握 sep 和 end 参数能让你精确控制输出格式，这在生成报表或进度条时尤为重要。',
        },
        {
          id: 'py-ch1-l2',
          title: '基本数据类型',
          order: 1,
          content_md:
            'Python 有四个最常用的内置数据类型：`int`（整数）、`float`（浮点数）、`str`（字符串）、`bool`（布尔值）。' +
            '`int` 没有大小限制（不像 C/Java 受固定位数限制），可以表示任意大的整数。' +
            '`float` 是 64 位双精度浮点数，遵循 IEEE 754 标准，存在精度问题：`0.1 + 0.2` 不等于 `0.3` 而等于 `0.30000000000000004`。' +
            '`bool` 只有两个值：`True` 和 `False`（注意首字母大写）。\n\n' +
            '`type()` 函数返回变量的类型，这在调试和类型检查时非常有用。' +
            '`isinstance(变量, 类型)` 判断变量是否为某类型，比 `type() ==` 更推荐，因为它支持继承判断。' +
            'Python 是动态类型语言——同一个变量可以反复赋不同类型的值：`x = 42; x = "hello"` 合法但通常不推荐，' +
            '因为会让代码难以理解和维护。\n\n' +
            '类型转换（type casting）用 `int()`、`float()`、`str()`、`bool()` 等内置函数。' +
            '`int("123")` 将字符串转为整数，`str(42)` 将整数转为字符串，`bool(0)` 返回 `False`。' +
            '转换失败会抛出 `ValueError`：`int("abc")` 会报错。' +
            '布尔转换的规则：`0`、`0.0`、`""`、`None`、空容器为 `False`，其余为 `True`。\n\n' +
            '理解数据类型是避免 bug 的基础。例如 `input()` 返回的永远是字符串，' +
            '即使用户输入数字——需要用 `int()` 转换后才能做数学运算。' +
            '浮点数精度问题在金融计算中尤其重要，需要用 `decimal` 模块或整数分来规避。' +
            '类型系统是编程语言的根基，后续学习函数参数、返回值、数据结构都离不开它。',
          examples: [
            {
              title: '四种基本类型',
              code: `age = 20           # int 整数
price = 9.9        # float 浮点数
name = "小明"      # str 字符串
is_student = True  # bool 布尔值
print(type(age))
print(type(price))
print(type(name))
print(type(is_student))`,
              explanation:
                'type() 返回变量的类型对象。输出依次为：<class \'int\'>、<class \'float\'>、<class \'str\'>、<class \'bool\'>。' +
                '注意 bool 是 int 的子类——True 等于 1，False 等于 0。',
            },
            {
              title: '类型转换',
              code: `# 字符串转数字
n = int("42")
print(n + 8)        # 50
# 数字转字符串
s = str(3.14)
print("圆周率: " + s)
# 布尔转换
print(bool(0))      # False
print(bool(""))     # False
print(bool("hello")) # True`,
              explanation:
                'int() 将字符串解析为整数，str() 将任意类型转为字符串。' +
                'bool() 转换规则：0、空字符串、None、空容器为 False，其余为 True。' +
                '这在条件判断中很重要——if "text": 永远为真。',
            },
            {
              title: '浮点数精度问题',
              code: `# 浮点数精度问题演示
print(0.1 + 0.2)
# 用 round() 四舍五入
print(round(0.1 + 0.2, 2))
# 整数运算无精度问题
print(1 + 2 * 3)`,
              explanation:
                '0.1 + 0.2 在二进制浮点中无法精确表示，结果是 0.30000000000000004。' +
                'round(x, n) 保留 n 位小数。整数运算在 Python 中永远精确，无溢出风险。' +
                '金融场景推荐用 decimal 模块或以"分"为单位用整数计算。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '声明变量 count 为整数 10，用 type() 输出它的类型。',
              starter_code: `count = ___
print(type(count))`,
              expected_output: "<class 'int'>",
              hints: [
                'count 应该是一个整数',
                '把 ___ 替换为 10',
                '不需要引号，直接写数字',
              ],
            },
            {
              type: 'output-match',
              prompt: '将字符串 "123" 转为整数，加 1 后输出结果。',
              starter_code: `n = int("123")
result = n + ___
print(result)`,
              expected_output: '124',
              hints: [
                '需要加 1 得到 124',
                '把 ___ 替换为 1',
                '答案: 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 bool() 判断空字符串是否为 False，输出 bool("") 的结果。',
              starter_code: `print(bool(___))`,
              expected_output: 'False',
              hints: [
                '空字符串的布尔值为 False',
                '把 ___ 替换为空字符串 ""',
                '答案: ""',
              ],
            },
          ],
          realWorldScenario:
            '在数据处理流水线（data processing pipeline）中，正确理解数据类型是避免运行时错误的关键。' +
            '从 CSV 读取的数据默认都是字符串，需要用 int()/float() 转换后才能做数值计算。' +
            'API 返回的 JSON 数据同样需要类型转换和校验——age 字段可能是字符串 "25" 而非整数 25。' +
            '类型检查是构建健壮数据处理管道的第一道防线。',
        },
        {
          id: 'py-ch1-l3',
          title: '字符串操作',
          order: 2,
          content_md:
            '字符串是 Python 中最常用的数据类型之一。Python 字符串是**不可变**的——' +
            '任何修改操作（如 `upper()`、`replace()`）都会返回新字符串，原字符串不变。' +
            '这一设计让字符串可以安全地在多处共享，但也意味着频繁拼接大字符串时性能较差（应用 `' +
            '"".join()` 而非 `+`）。\n\n' +
            '字符串支持索引和切片。索引从 0 开始，负索引从末尾倒数（`s[-1]` 是最后一个字符）。' +
            '切片语法 `s[起:止:步]`，省略起默认 0，省略止默认末尾，省略步默认 1。' +
            '`s[::-1]` 是反转字符串的惯用写法。切片是 Python 最强大的特性之一，' +
            '同样适用于列表、元组等序列类型。\n\n' +
            '字符串方法丰富且实用：`upper()`/`lower()` 转大小写，`strip()` 去首尾空白，' +
            '`split(sep)` 按分隔符分割为列表，`join()` 将列表合并为字符串，' +
            '`replace(old, new)` 替换子串，`find()` 查找子串位置。' +
            '链式调用（如 `s.strip().lower()`）是常见模式——前一个方法的返回值作为后一个方法的调用者。\n\n' +
            '回文判断是经典面试题：判断字符串正读反读是否相同。' +
            '利用切片 `s == s[::-1]` 可一行解决。字符串操作在文本处理、日志分析、' +
            'Web 爬虫数据清洗等场景中无处不在，是 Python 程序员的必备技能。',
          examples: [
            {
              title: '索引与切片',
              code: `s = "Hello, Python"
# 索引（从 0 开始）
print(s[0])       # H
print(s[-1])      # n（最后一个字符）
# 切片 [起:止:步]
print(s[0:5])     # Hello
print(s[7:])      # Python
print(s[::-1])    # 反转字符串`,
              explanation:
                's[0] 取第一个字符，s[-1] 取最后一个字符。s[0:5] 取索引 0-4 的子串。' +
                's[::-1] 步长为 -1，从尾到头遍历，实现字符串反转——这是 Python 的惯用技巧。',
            },
            {
              title: '常用字符串方法',
              code: `text = "  Hello World  "
print(text.strip())        # 去首尾空白
print(text.strip().lower()) # 转小写
print(text.strip().split()) # 按空白分割为列表
# join 将列表合并为字符串
words = ["Python", "很", "好用"]
print("-".join(words))`,
              explanation:
                'strip() 去除首尾空白字符（空格、制表符、换行符）。' +
                'split() 不传参数时按任意空白分割。' +
                'join() 是 split() 的逆操作，用指定分隔符连接列表元素。' +
                '链式调用让代码简洁：先 strip 再 lower。',
            },
            {
              title: '回文判断（经典面试题）',
              code: `# 判断字符串是否为回文（正读反读相同）
def is_palindrome(s):
    # 统一转小写后比较原串和反转串
    s = s.lower()
    return s == s[::-1]

print(is_palindrome("level"))    # True
print(is_palindrome("hello"))    # False
print(is_palindrome("RaceCar"))  # True`,
              explanation:
                '回文判断是高频面试题。利用切片 s[::-1] 反转字符串，与原串比较即可。' +
                '先 lower() 统一大小写，避免 "RaceCar" 因大小写不同被误判。' +
                '这体现了 Python "用最简语法表达算法" 的哲学。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '判断字符串 "level" 是否为回文。用切片反转比较，输出 True 或 False。',
              starter_code: `s = "level"
print(s == ___)`,
              expected_output: 'True',
              hints: [
                '用切片反转字符串',
                '反转字符串的写法是 s[::-1]',
                '答案: s[::-1]',
              ],
            },
            {
              type: 'output-match',
              prompt: '将字符串 "  Hello  " 去除首尾空格后转大写，输出结果。',
              starter_code: `s = "  Hello  "
result = s.___.___
print(result)`,
              expected_output: 'HELLO',
              hints: [
                '先调用 strip() 去空格，再调用 upper() 转大写',
                '链式调用: s.strip().upper()',
                '第一处填 strip()，第二处填 upper()',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 split() 将 "a,b,c" 按逗号分割，输出结果列表。',
              starter_code: `parts = "a,b,c".___(",")
print(parts)`,
              expected_output: "['a', 'b', 'c']",
              hints: [
                'split() 方法按指定分隔符分割字符串',
                '方法名是 split',
                '答案: split',
              ],
            },
          ],
          realWorldScenario:
            '字符串操作在日志分析和文本清洗中无处不在。例如解析服务器日志 "2024-01-15 ERROR [auth] login failed"，' +
            '需要用 split() 拆分字段、用 strip() 清理空白、用 startswith() 判断日志级别。' +
            '回文判断虽是面试题，但其核心思想——利用切片和比较简化问题——在日常文本处理中同样常用。' +
            'Web 爬虫提取的 HTML 文本也需要大量字符串方法来清洗和格式化。',
        },
        {
          id: 'py-ch1-l4',
          title: '输入与格式化输出',
          order: 3,
          content_md:
            '`input()` 函数从标准输入读取一行文本（返回字符串）。' +
            '注意：Pyodide 环境是非交互式的，无法实时接收用户输入，因此在线练习中通常用预设变量代替 `input()`。' +
            '在本地 Python 环境中，`input("提示信息")` 会显示提示并等待用户输入。' +
            '读取数字时需手动转换：`age = int(input("年龄: "))`。\n\n' +
            'Python 有三种格式化字符串的方式。**f-string**（Python 3.6+）是最推荐的：`f"姓名: {name}"`，' +
            '在 `{}` 中直接嵌入变量或表达式，支持格式说明符 `{value:.2f}` 保留两位小数。' +
            'f-string 可读性最好、性能最优，应作为首选。\n\n' +
            '第二种是 `str.format()` 方法：`"姓名: {}".format(name)`，用 `{}` 占位，参数按顺序填入。' +
            '支持 `{0}`、`{name}` 等索引和命名引用。这种方式在旧代码中常见，新项目建议用 f-string。' +
            '第三种是 `%` 格式化（C 风格）：`"姓名: %s" % name`，现已不推荐，了解即可。\n\n' +
            '格式说明符控制输出精度和对齐：`{pi:.4f}` 保留 4 位小数，`{num:>10}` 右对齐宽度 10，' +
            '`{num:<10}` 左对齐，`{num:^10}` 居中，`{num:08d}` 补零到 8 位。' +
            '百分比格式 `{ratio:.1%}` 自动乘 100 并加 %。掌握格式化输出能生成专业的报表和日志。',
          examples: [
            {
              title: 'f-string 格式化',
              code: `name = "小明"
age = 20
height = 1.753
# f-string 直接在 {} 中嵌入变量
print(f"姓名: {name}, 年龄: {age}")
# 格式说明符: .2f 保留两位小数
print(f"身高: {height:.2f} 米")
# 表达式可以直接写在 {} 中
print(f"明年 {age + 1} 岁")`,
              explanation:
                'f-string 以 f 开头，{} 内嵌入变量或表达式。{height:.2f} 表示浮点数保留 2 位小数。' +
                '{age + 1} 可以直接计算表达式。f-string 是性能最好、可读性最高的格式化方式。',
            },
            {
              title: 'format() 方法',
              code: `# 按位置填入
print("{} + {} = {}".format(1, 2, 3))
# 按索引引用
print("{0}很{1}, {0}很快".format("Python", "好用"))
# 命名参数
print("姓名: {name}, 年龄: {age}".format(name="小红", age=18))`,
              explanation:
                'format() 用 {} 作占位符。{0}、{1} 按位置索引引用参数，可重复使用。' +
                '命名参数更清晰，适合多参数场景。format() 是 f-string 出现前的主流方式。',
            },
            {
              title: '对齐与补零',
              code: `# 对齐: > 右对齐, < 左对齐, ^ 居中
print(f"{'左':<8}|")
print(f"{'右':>8}|")
print(f"{'中':^8}|")
# 补零
print(f"{42:08d}")
# 百分比
ratio = 0.856
print(f"完成率: {ratio:.1%}")`,
              explanation:
                '{:<8} 左对齐宽度 8，{:>8} 右对齐，{:^8} 居中。{42:08d} 补零到 8 位得到 "00000042"。' +
                '{ratio:.1%} 自动乘 100 并保留 1 位小数，输出 "完成率: 85.6%"。' +
                '这些格式在生成报表和对齐输出时非常实用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 f-string 输出 "小明今年20岁"。变量 name="小明", age=20。',
              starter_code: `name = "小明"
age = 20
print(f"{___}今年{___}岁")`,
              expected_output: '小明今年20岁',
              hints: [
                'f-string 中用 {} 嵌入变量',
                '第一处填 name，第二处填 age',
                '答案: name 和 age',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 f-string 将 3.14159 保留两位小数输出。',
              starter_code: `pi = 3.14159
print(f"{pi:___}")`,
              expected_output: '3.14',
              hints: [
                '格式说明符以 . 开头',
                '保留两位小数用 .2f',
                '答案: .2f',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 format() 方法输出 "Python 很好用"。',
              starter_code: `print("{} 很{}".format("Python", ___))`,
              expected_output: 'Python 很好用',
              hints: [
                '第二个占位 {} 需要填入 "好用"',
                '把 ___ 替换为字符串 "好用"',
                '答案: "好用"',
              ],
            },
          ],
          realWorldScenario:
            '格式化输出在报表生成和配置解析中至关重要。开发配置文件解析器（config file parser）时，' +
            '需要将解析结果格式化输出供用户确认。生成数据报表时，对齐和精度控制让输出专业易读。' +
            '在 Web 应用中，f-string 常用于生成 HTML 模板和 API 响应消息。' +
            '掌握格式化输出是构建用户友好工具的基本功。',
        },
      ],
    },
    // ================================================================
    // 第 2 章：控制流
    // ================================================================
    {
      id: 'py-ch2',
      title: '控制流',
      order: 1,
      lessons: [
        {
          id: 'py-ch2-l1',
          title: 'if / elif / else',
          order: 0,
          content_md:
            '条件语句是程序逻辑的基石。Python 用 `if 条件:` 后跟缩进代码块表示条件分支，' +
            '缩进必须是 4 个空格（PEP 8 规范），不能用 Tab 混合空格。' +
            '`elif` 是 "else if" 的缩写，可以有多个；`else` 最多一个且可省略。' +
            '条件表达式的结果必须是布尔值，但 Python 会自动进行"真值测试"（truthiness）。\n\n' +
            '比较运算符：`==`（等于）、`!=`（不等）、`>`、`<`、`>=`、`<=`。' +
            '逻辑运算符：`and`（与）、`or`（或）、`not`（非）——注意 Python 用关键字而非 `&&`/`||`。' +
            '`and` 和 `or` 是短路求值：`a and b` 中若 `a` 为 False 则不评估 `b`。' +
            '链式比较 `1 <= x <= 10` 是 Python 独有的简洁写法，等价于 `1 <= x and x <= 10`。\n\n' +
            '真值测试规则：`0`、`0.0`、`""`、`None`、`[]`、`{}` 等空容器为 False，其余为 True。' +
            '这让你可以写 `if items:` 而非 `if len(items) > 0:`，更 Pythonic。' +
            '条件表达式（三元运算符）：`值1 if 条件 else 值2`，用于简洁的分支赋值。' +
            '注意 `if` 不能为空——不需要执行任何操作时用 `pass` 占位。\n\n' +
            '条件判断在业务逻辑中无处不在：用户权限校验、价格折扣计算、表单验证等。' +
            '良好的条件结构应避免过深嵌套——超过 3 层嵌套通常意味着应该重构（提取函数或用卫语句提前返回）。' +
            '卫语句（guard clause）模式：先处理异常情况并 return，让主逻辑保持扁平。',
          examples: [
            {
              title: '成绩等级判断',
              code: `score = 85
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")`,
              explanation:
                'if/elif/else 从上到下依次判断，匹配第一个满足条件的分支后跳出。' +
                '85 >= 90 为 False，85 >= 80 为 True，所以输出 "良好"。' +
                'elif 避免了多层嵌套 if，让代码更扁平。',
            },
            {
              title: '闰年判断',
              code: `year = 2024
# 闰年规则: 能被4整除但不能被100整除，或能被400整除
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} 是闰年")
else:
    print(f"{year} 是平年")`,
              explanation:
                '闰年判断是经典的条件组合题。and 优先级高于 or，括号让逻辑更清晰。' +
                '2024 能被 4 整除且不能被 100 整除，所以是闰年。' +
                '2100 能被 100 整除但不能被 400 整除，是平年——这是常见的陷阱。',
            },
            {
              title: '条件表达式（三元运算符）',
              code: `age = 20
# 一行代替 if-else 赋值
status = "成年" if age >= 18 else "未成年"
print(status)
# 链式比较
score = 75
if 60 <= score < 80:
    print("中等水平")`,
              explanation:
                '"值1 if 条件 else 值2" 是 Python 的三元运算符，适合简单的分支赋值。' +
                '链式比较 60 <= score < 80 是 Python 独有特性，比 60 <= score and score < 80 更简洁。' +
                '这两种写法都体现了 Python 的可读性哲学。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '判断变量 age：如果大于等于 18 输出 "成年"，否则输出 "未成年"。',
              starter_code: `age = 20
if ___:
    print("成年")
else:
    print("未成年")`,
              expected_output: '成年',
              hints: [
                '条件是 age >= 18',
                '比较运算符用 >=',
                '答案: age >= 18',
              ],
            },
            {
              type: 'output-match',
              prompt: '判断数字 n 是否为偶数。n % 2 == 0 为偶数，输出 "偶数" 或 "奇数"。',
              starter_code: `n = 8
if n ___ 2 == 0:
    print("偶数")
else:
    print("奇数")`,
              expected_output: '偶数',
              hints: [
                '取余运算符是 %',
                '答案: %',
                '偶数判断: n % 2 == 0',
              ],
            },
            {
              type: 'output-match',
              prompt: '用条件表达式（三元运算符）为变量 result 赋值：n >= 0 时为 "非负数"，否则为 "负数"。n = -5。',
              starter_code: `n = -5
result = "非负数" ___ "负数"
print(result)`,
              expected_output: '负数',
              hints: [
                '三元运算符格式: 值1 if 条件 else 值2',
                '需要 if n >= 0 else',
                '答案: if n >= 0 else',
              ],
            },
          ],
          realWorldScenario:
            '条件判断在业务系统中无处不在。电商平台的折扣规则——VIP 会员打 8 折、满 200 减 30、' +
            '新用户立减 10 元——都是 if/elif/else 的组合。用户权限校验（管理员/编辑/只读）' +
            '也依赖条件分支。良好的条件结构让业务规则清晰可维护，是构建任何业务系统的基础。',
        },
        {
          id: 'py-ch2-l2',
          title: 'for 循环与 range',
          order: 1,
          content_md:
            '`for` 循环是 Python 最常用的循环结构，用于遍历可迭代对象（列表、字符串、range 等）。' +
            '`for 变量 in 可迭代对象:` 每次取一个元素执行循环体。' +
            '与 C/Java 的 `for(i=0; i<n; i++)` 不同，Python 的 for 是 "foreach" 语义，更安全更简洁。' +
            '不需要手动管理循环变量和边界条件。\n\n' +
            '`range()` 生成整数序列，是 for 循环的常见搭档。`range(n)` 生成 0 到 n-1，' +
            '`range(a, b)` 生成 a 到 b-1，`range(a, b, step)` 指定步长。' +
            'range 是惰性序列——不占用内存存储所有数字，适合大范围遍历。' +
            '`enumerate(可迭代对象)` 同时返回索引和元素，比手动维护计数器更 Pythonic。\n\n' +
            '循环中常用 `+=` 累加、`*=` 累乘等复合赋值运算符。' +
            '`sum()`、`max()`、`min()` 等内置函数可以简化常见的聚合操作——' +
            '`sum(range(1, 101))` 比手写循环累加更简洁高效。' +
            '但面试中常要求手写循环实现，以考察基础编程能力。\n\n' +
            '阶乘和素数判断是经典面试题。阶乘 `n! = 1*2*...*n` 用循环累乘实现。' +
            '素数判断：对 n 开方范围内的每个数检查能否整除。' +
            '这些题目看似简单，但考察了对循环边界、数学思维和代码优化的理解。' +
            'for 循环是数据处理的骨架——遍历列表求和、过滤、转换都依赖它。',
          examples: [
            {
              title: 'range 与累加',
              code: `# 计算 1 到 10 的和
total = 0
for i in range(1, 11):
    total += i
print(f"1到10的和: {total}")
# 用内置 sum 更简洁
print(f"内置sum: {sum(range(1, 11))}")`,
              explanation:
                'range(1, 11) 生成 1-10 的序列（不含 11）。+= 累加到 total。' +
                'sum(range(1, 11)) 用内置函数一步完成，更 Pythonic。' +
                '面试常要求手写循环，但实际开发中应优先用内置函数。',
            },
            {
              title: 'enumerate 同时获取索引和值',
              code: `fruits = ["苹果", "香蕉", "橘子"]
# enumerate 同时返回索引和元素
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")`,
              explanation:
                'enumerate(fruits) 返回 (0, "苹果"), (1, "香蕉"), (2, "橘子")。' +
                '比手动维护 i = 0; i += 1 更简洁安全。' +
                'enumerate 还可指定起始索引: enumerate(fruits, start=1)。',
            },
            {
              title: '阶乘计算（经典面试题）',
              code: `# 计算 n 的阶乘: n! = 1 * 2 * 3 * ... * n
n = 5
factorial = 1
for i in range(1, n + 1):
    factorial *= i
print(f"{n}! = {factorial}")`,
              explanation:
                '阶乘是高频面试题。从 1 乘到 n，用 *= 累乘。range(1, n+1) 包含 n 本身。' +
                '5! = 120。注意初始值是 1 而非 0（乘法的单位元是 1）。' +
                '递归也能实现阶乘，但循环版本无栈溢出风险，更实用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 for 循环计算 5 的阶乘（1*2*3*4*5），输出结果。',
              starter_code: `n = 5
factorial = 1
for i in range(1, ___):
    factorial *= i
print(factorial)`,
              expected_output: '120',
              hints: [
                'range 的上界不含自身，需要 n+1',
                '把 ___ 替换为 n + 1',
                '答案: n + 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '判断数字 7 是否为素数。素数只能被 1 和自身整除。输出 True 或 False。',
              starter_code: `n = 7
is_prime = True
for i in range(2, n):
    if n % i == 0:
        is_prime = ___
        break
print(is_prime)`,
              expected_output: 'True',
              hints: [
                '如果找到因子，就不是素数',
                '找到因子时 is_prime 应为 False',
                '答案: False',
              ],
            },
            {
              type: 'output-match',
              prompt: '计算 1 到 10 中所有偶数的和，输出结果。',
              starter_code: `total = 0
for i in range(1, 11):
    if i % 2 == ___:
        total += i
print(total)`,
              expected_output: '30',
              hints: [
                '偶数除以 2 余 0',
                '取余为 0 表示偶数',
                '答案: 0',
              ],
            },
          ],
          realWorldScenario:
            'for 循环是数据处理流水线（data processing pipeline）的核心。遍历 CSV 文件的每一行、' +
            '处理列表中的每条记录、批量调用 API——都是 for 循环的应用。' +
            'enumerate 在需要行号或索引时特别有用，如日志分析中标记行号。' +
            '阶乘和素数判断虽是面试题，但循环累加和条件过滤的思路在日常开发中无处不在。',
        },
        {
          id: 'py-ch2-l3',
          title: 'while 循环',
          order: 2,
          content_md:
            '`while 条件:` 当条件为 True 时重复执行循环体。与 for 循环不同，while 适用于' +
            '"循环次数不确定"的场景——如等待用户输入、轮询状态、二分查找等。' +
            'while 循环必须在循环体内修改条件变量，否则会无限循环。' +
            '这是 while 最常见的 bug 来源——忘记更新条件导致死循环。\n\n' +
            'while 循环的经典应用包括：`while True:` 配合 `break` 实现无限循环退出；' +
            '数字逐位处理（如反转数字、求各位之和）；二分查找等算法。' +
            '与 for 循环相比，while 更灵活但也更危险——需要程序员自己管理循环终止条件。' +
            'Python 的 while 还支持 `else` 子句：循环正常结束（非 break 退出）时执行。\n\n' +
            '二分查找是 while 循环的经典面试题。在有序数组中查找目标值，每次将搜索范围减半，' +
            '时间复杂度 O(log n)。维护 `left` 和 `right` 两个指针，' +
            '`mid = (left + right) // 2`，根据 `arr[mid]` 与目标值的大小关系调整边界。' +
            '二分查找体现了"分治"思想——将问题规模减半，是算法入门的必学内容。\n\n' +
            'while 循环的陷阱：浮点数比较 `while x != 0.0` 可能永不终止（精度问题），' +
            '应用 `while abs(x) > 1e-9`。整数除法 `//` 在 while 循环中常用——' +
            '`n //= 10` 逐位处理数字。Collatz 猜想（3n+1 问题）是 while 循环的有趣练习：' +
            '偶数除 2，奇数乘 3 加 1，最终必然到达 1。',
          examples: [
            {
              title: '数字逐位处理',
              code: `# 反转数字: 123 -> 321
n = 123
reversed_n = 0
while n > 0:
    reversed_n = reversed_n * 10 + n % 10
    n //= 10
print(reversed_n)`,
              explanation:
                'n % 10 取最后一位，n //= 10 去掉最后一位。reversed_n * 10 + digit 将新位数追加到末尾。' +
                '123 -> 3, 12 -> 32, 1 -> 321。这是 while 循环处理数字的经典模式。',
            },
            {
              title: '二分查找（经典面试题）',
              code: `# 在有序列表中查找目标值
arr = [1, 3, 5, 7, 9, 11, 13]
target = 7
left, right = 0, len(arr) - 1
found = -1
while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
        found = mid
        break
    elif arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
print(f"找到 {target} 在索引 {found}")`,
              explanation:
                '二分查找是 while 循环的经典应用。每次比较中间值，缩小一半搜索范围。' +
                'left <= right 是循环条件——当 left > right 时说明未找到。' +
                'mid + 1 和 mid - 1 避免死循环（不能写成 mid，否则可能无限循环）。',
            },
            {
              title: 'Collatz 猜想',
              code: `n = 6
steps = 0
while n != 1:
    if n % 2 == 0:
        n //= 2
    else:
        n = n * 3 + 1
    steps += 1
print(f"经过 {steps} 步到达 1")`,
              explanation:
                'Collatz 猜想：任何正整数经此操作最终都会到达 1，但数学上尚未证明。' +
                '6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1，共 8 步。' +
                'while n != 1 是终止条件，循环体内根据奇偶性更新 n。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 while 循环计算 1+2+3+...+100 的和，输出结果。',
              starter_code: `total = 0
n = 1
while n <= 100:
    total += n
    n += ___
print(total)`,
              expected_output: '5050',
              hints: [
                '每次循环 n 需要加 1',
                '把 ___ 替换为 1',
                '答案: 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 while 循环计算数字 1234 的各位数字之和（1+2+3+4=10）。',
              starter_code: `n = 1234
digit_sum = 0
while n > 0:
    digit_sum += n % 10
    n ___= 10
print(digit_sum)`,
              expected_output: '10',
              hints: [
                'n 需要整除 10 去掉最后一位',
                '整除运算符是 //',
                '答案: //',
              ],
            },
            {
              type: 'output-match',
              prompt: '在有序列表 [1,3,5,7,9] 中用二分查找找到 5 的索引。',
              starter_code: `arr = [1, 3, 5, 7, 9]
target = 5
left, right = 0, len(arr) - 1
while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
        print(mid)
        ___
    elif arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1`,
              expected_output: '2',
              hints: [
                '找到目标后需要退出循环',
                '用 break 退出 while 循环',
                '答案: break',
              ],
            },
          ],
          realWorldScenario:
            'while 循环在轮询和重试逻辑中广泛应用。网络请求失败时自动重试 3 次、' +
            '消息队列消费者轮询新消息、游戏主循环（while True: 处理输入 → 更新状态 → 渲染）——' +
            '都是 while 的典型场景。二分查找在数据库索引查找、API 版本兼容判断中也有应用。' +
            '理解 while 循环的终止条件设计是避免死循环、构建可靠系统的关键。',
        },
        {
          id: 'py-ch2-l4',
          title: 'break / continue / pass',
          order: 3,
          content_md:
            '`break` 立即跳出当前循环（不再执行后续循环）。常用于"找到即停"的场景——' +
            '如线性查找找到目标后无需继续遍历。`break` 只跳出最内层循环，嵌套循环中需用标志变量' +
            '或函数 return 来跳出多层。`for...else` 结构中，break 会跳过 else 子句——' +
            'else 表示"循环正常结束未被 break"。\n\n' +
            '`continue` 跳过本次循环剩余语句，直接进入下一次迭代。常用于过滤——' +
            '跳过不符合条件的元素。continue 不终止循环，只跳过当前这一轮。' +
            '过度使用 continue 会让代码难以追踪，通常可以用 if/else 结构替代。' +
            '但在循环体较长时，continue 提前跳过能让主逻辑更清晰（类似卫语句思想）。\n\n' +
            '`pass` 是空操作占位符——什么也不做。Python 的代码块不能为空（语法要求），' +
            '因此定义空函数、空类、空 if 分支时必须用 pass 填充。' +
            'pass 与 `...`（Ellipsis）在大多数场景等价，但 pass 更传统。' +
            'pass 常用于"先搭框架再填实现"的开发模式——先定义函数签名，稍后补充逻辑。\n\n' +
            'FizzBuzz 是最经典的编程入门面试题：遍历 1-100，能被 3 整除输出 "Fizz"，' +
            '能被 5 整除输出 "Buzz"，能被 15 整除输出 "FizzBuzz"，否则输出数字本身。' +
            '这道题考察循环、条件、优先级顺序（必须先判断 15）和字符串拼接。' +
            '虽然简单，但据调查超过半数面试者无法一次写对——是筛选基础编程能力的有效题目。',
          examples: [
            {
              title: 'break 提前退出',
              code: `# 查找第一个偶数
nums = [1, 3, 5, 8, 9, 10]
for n in nums:
    if n % 2 == 0:
        print(f"找到偶数: {n}")
        break
else:
    print("没有偶数")`,
              explanation:
                'break 在找到 8 时立即退出循环。for...else 的 else 在循环正常结束（未 break）时执行。' +
                '这里找到 8 后 break，所以 else 不执行。这是 Python 独特的"搜索失败"惯用法。',
            },
            {
              title: 'continue 跳过奇数',
              code: `# 只处理偶数
for i in range(1, 11):
    if i % 2 != 0:
        continue  # 跳过奇数
    print(i, end=" ")`,
              explanation:
                'continue 跳过奇数，只对偶数执行 print。输出 "2 4 6 8 10 "。' +
                'continue 让"过滤"逻辑简洁——不符合条件的直接跳过，主逻辑不用嵌套在 else 中。' +
                '但注意不要滥用，简单的 if/else 往往更清晰。',
            },
            {
              title: 'FizzBuzz（经典面试题）',
              code: `for i in range(1, 16):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
              explanation:
                'FizzBuzz 是经典面试题。关键: 必须先判断 15（3和5的公倍数），否则 15 会被 3 拦截。' +
                'elif 保证互斥——匹配一个就跳出。输出 1,2,Fizz,4,Buzz,...,14,FizzBuzz。' +
                '这道题考察循环、条件优先级和整除判断。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '输出 1 到 5 的数字，但跳过 3（用 continue）。',
              starter_code: `for i in range(1, 6):
    if i == 3:
        ___
    print(i)`,
              expected_output: '1\n2\n4\n5',
              hints: [
                '跳过当前迭代用 continue',
                '把 ___ 替换为 continue',
                '答案: continue',
              ],
            },
            {
              type: 'output-match',
              prompt: '在列表 [1,3,5,7,9] 中找到第一个大于 4 的数字，输出它并退出循环。',
              starter_code: `for n in [1, 3, 5, 7, 9]:
    if n > 4:
        print(n)
        ___`,
              expected_output: '5',
              hints: [
                '找到后需要退出循环',
                '用 break 退出 for 循环',
                '答案: break',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 FizzBuzz 规则处理 1-6：3 的倍数输出 Fizz，5 的倍数输出 Buzz，15 的倍数输出 FizzBuzz，否则输出数字。每行一个。',
              starter_code: `for i in range(1, 7):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print(___)
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
              expected_output: '1\n2\nFizz\n4\nBuzz\nFizz',
              hints: [
                '3 的倍数输出 Fizz',
                '把 ___ 替换为 "Fizz"',
                '注意 6 是 3 的倍数，输出 Fizz',
              ],
            },
          ],
          realWorldScenario:
            'break 和 continue 在数据过滤和搜索中无处不在。处理大数据时，找到目标记录后用 break 提前退出' +
            '可以节省大量计算。日志分析中用 continue 跳过非关键级别的日志行。' +
            'pass 在"先搭框架再实现"的敏捷开发中很有用——先定义所有函数签名和类结构，' +
            '再逐个填充实现。FizzBuzz 虽简单，但循环+条件的组合是所有业务逻辑的基础。',
        },
      ],
    },
    // ================================================================
    // 第 3 章：数据结构
    // ================================================================
    {
      id: 'py-ch3',
      title: '数据结构',
      order: 2,
      lessons: [
        {
          id: 'py-ch3-l1',
          title: '列表操作',
          order: 0,
          content_md:
            '列表（list）是 Python 最常用的数据结构，相当于其他语言的动态数组。' +
            '列表用 `[元素1, 元素2, ...]` 创建，元素可以是不同类型（但通常同类型）。' +
            '列表是**可变**的——可以增删改元素。支持索引、切片、拼接、重复等操作。' +
            '列表在内存中存储的是对象的引用（指针），而非对象本身。\n\n' +
            '增删元素的方法：`append(x)` 末尾添加，`insert(i, x)` 指定位置插入，' +
            '`extend(可迭代对象)` 批量追加，`remove(x)` 删除第一个等于 x 的元素，' +
            '`pop(i)` 删除并返回指定位置元素（默认末尾），`clear()` 清空。' +
            '注意 `append` 与 `extend` 的区别：`append([1,2])` 添加一个列表元素，' +
            '`extend([1,2])` 添加 1 和 2 两个元素——这是常见陷阱。\n\n' +
            '排序：`list.sort()` 原地排序（修改原列表），`sorted(list)` 返回新列表不修改原列表。' +
            '`sort(key=函数, reverse=bool)` 可自定义排序规则，如 `sort(key=len)` 按长度排序。' +
            '`reverse()` 原地反转。列表推导式（下节详解）是创建列表的简洁方式。' +
            '`len()` 获取长度，`in` 判断包含，`count()` 统计出现次数，`index()` 查找索引。\n\n' +
            '列表的坑：`a = [1,2]; b = a; b.append(3)` 后 a 也变成 [1,2,3]——因为 a 和 b 指向同一列表。' +
            '复制列表用 `a.copy()` 或 `a[:]` 或 `list(a)`。深嵌套结构需要 `copy.deepcopy()`。' +
            '列表在数据存储、队列管理、结果收集等场景中无处不在，是 Python 编程的基础工具。',
          examples: [
            {
              title: '增删改查',
              code: `fruits = ["苹果", "香蕉"]
# 增
fruits.append("橘子")        # 末尾添加
fruits.insert(0, "葡萄")     # 指定位置插入
# 改
fruits[1] = "西瓜"
# 删
fruits.remove("西瓜")        # 删除指定元素
print(fruits)
# 查
print(f"长度: {len(fruits)}")
print(f"包含橘子: {'橘子' in fruits}")`,
              explanation:
                'append 末尾添加，insert 指定位置插入。fruits[1] = "西瓜" 修改索引 1 的元素。' +
                'remove 删除第一个匹配的元素。in 运算符判断元素是否存在。' +
                '最终 fruits 为 ["葡萄", "苹果", "橘子"]。',
            },
            {
              title: '排序与反转',
              code: `nums = [3, 1, 4, 1, 5, 9, 2, 6]
# sorted 返回新列表，不修改原列表
print(sorted(nums))
# sort 原地排序
nums.sort()
print(nums)
# 降序排序
nums.sort(reverse=True)
print(nums)
# 按字符串长度排序
words = ["banana", "apple", "kiwi"]
words.sort(key=len)
print(words)`,
              explanation:
                'sorted() 返回新列表，sort() 原地修改。reverse=True 降序。' +
                'key=len 按长度排序，key 可以是任何函数——如 key=str.lower 按小写排序。' +
                '排序是稳定排序（相等元素的相对顺序不变）。',
            },
            {
              title: '切片与复制',
              code: `nums = [0, 1, 2, 3, 4, 5]
# 切片
print(nums[1:4])    # [1, 2, 3]
print(nums[:3])     # [0, 1, 2]
print(nums[-2:])    # [4, 5]
# 复制列表（浅拷贝）
copy1 = nums[:]
copy2 = nums.copy()
# 反转
print(nums[::-1])`,
              explanation:
                '切片 [1:4] 取索引 1-3。[:] 复制整个列表。[::-1] 反转列表。' +
                'nums[:] 和 nums.copy() 都是浅拷贝——创建新列表，但元素仍是同一对象引用。' +
                '嵌套列表的深拷贝需用 copy.deepcopy()。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建列表 [3, 1, 4, 1, 5]，用 sorted() 排序后输出。',
              starter_code: `nums = [3, 1, 4, 1, 5]
print(sorted(___))`,
              expected_output: '[1, 1, 3, 4, 5]',
              hints: [
                'sorted() 的参数是要排序的列表',
                '把 ___ 替换为 nums',
                '答案: nums',
              ],
            },
            {
              type: 'output-match',
              prompt: '在列表 [1, 2, 3] 末尾添加元素 4，输出结果。',
              starter_code: `nums = [1, 2, 3]
nums.___(4)
print(nums)`,
              expected_output: '[1, 2, 3, 4]',
              hints: [
                '末尾添加元素用 append',
                '方法名是 append',
                '答案: append',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 sum() 计算列表 [1, 2, 3, 4, 5] 的和并输出。',
              starter_code: `nums = [1, 2, 3, 4, 5]
print(___(nums))`,
              expected_output: '15',
              hints: [
                '内置求和函数是 sum',
                '把 ___ 替换为 sum',
                '答案: sum',
              ],
            },
          ],
          realWorldScenario:
            '列表是数据处理流水线（data processing pipeline）的核心容器。从数据库读取的记录集、' +
            'API 返回的 JSON 数组、CSV 文件的行数据——都存储在列表中。' +
            '增删改查、排序、过滤是数据处理的日常操作。理解列表的引用语义（浅拷贝 vs 深拷贝）' +
            '是避免副作用 bug 的关键——多人协作时，意外修改共享列表是最常见的隐患之一。',
        },
        {
          id: 'py-ch3-l2',
          title: '元组与集合',
          order: 1,
          content_md:
            '元组（tuple）是不可变的序列，用 `(元素1, 元素2, ...)` 创建。' +
            '元组一旦创建就不能修改——不能增删改元素。这一特性使元组可以作为字典的键、集合的元素，' +
            '而列表不行。元组比列表更轻量（内存占用更小、访问更快）。' +
            '单元素元组必须加逗号：`(42,)` 而非 `(42)`（后者是普通括号表达式）。\n\n' +
            '元组解包（unpacking）是 Python 的强大特性：`a, b = 1, 2` 一次给多个变量赋值。' +
            '交换变量无需临时变量：`a, b = b, a`。函数返回多个值本质是返回元组：' +
            '`return x, y` 等价于 `return (x, y)`。`*` 收集剩余元素：' +
            '`first, *rest = [1, 2, 3, 4]` 中 first=1, rest=[2,3,4]。' +
            '命名元组（namedtuple）给元组元素命名，兼具可读性和轻量性。\n\n' +
            '集合（set）是无序、不重复的元素集合，用 `{1, 2, 3}` 或 `set()` 创建。' +
            '集合的核心价值：去重和集合运算。`set([1,1,2,3])` 自动去重为 `{1,2,3}`。' +
            '集合运算：`|` 并集、`&` 交集、`-` 差集、`^` 对称差集。' +
            '集合的 `in` 操作是 O(1)（基于哈希），而列表是 O(n)——大数据去重和查找时优先用集合。\n\n' +
            '集合的注意事项：元素必须是可哈希的（不可变类型）——列表和字典不能作为集合元素。' +
            'frozenset 是不可变集合，可以作为字典键。集合是无序的，不能用索引访问。' +
            '元组和集合在函数多返回值、配置项存储、数据去重等场景中各有优势，' +
            '选择合适的数据结构是写出高效 Python 代码的关键。',
          examples: [
            {
              title: '元组解包',
              code: `# 多变量赋值
x, y, z = 1, 2, 3
print(x, y, z)
# 交换变量
a, b = 10, 20
a, b = b, a
print(f"a={a}, b={b}")
# 函数返回多值
def min_max(nums):
    return min(nums), max(nums)
lo, hi = min_max([3, 1, 4, 1, 5])
print(f"最小={lo}, 最大={hi}")`,
              explanation:
                '元组解包让多变量赋值和交换变得简洁。函数返回 min, max 实际返回元组 (min, max)。' +
                '接收端用 lo, hi = ... 解包。这是 Python 惯用的多返回值模式。',
            },
            {
              title: '集合去重与运算',
              code: `# 去重
nums = [1, 2, 2, 3, 3, 3, 4]
unique = set(nums)
print(unique)
# 集合运算
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(f"交集: {a & b}")
print(f"并集: {a | b}")
print(f"差集: {a - b}")`,
              explanation:
                'set() 自动去重。& 交集 {3,4}，| 并集 {1,2,3,4,5,6}，- 差集 {1,2}（a 有但 b 没有）。' +
                '集合运算比手动遍历列表高效得多——底层基于哈希表，O(1) 查找。',
            },
            {
              title: '星号解包',
              code: `# * 收集剩余元素
first, *middle, last = [1, 2, 3, 4, 5]
print(f"首={first}, 中={middle}, 尾={last}")
# 合并列表
a = [1, 2]
b = [3, 4]
merged = [*a, *b]
print(merged)`,
              explanation:
                '*middle 收集中间所有元素为列表 [2,3,4]。[*a, *b] 用星号展开列表合并。' +
                '星号解包在 Python 3.5+ 广泛使用，让代码更简洁。' +
                '字典也可用 ** 展开合并: {**d1, **d2}。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 set() 对列表 [1, 1, 2, 2, 3] 去重，再用 sorted() 排序后输出。',
              starter_code: `nums = [1, 1, 2, 2, 3]
unique = sorted(set(___))
print(unique)`,
              expected_output: '[1, 2, 3]',
              hints: [
                'set() 的参数是要去重的列表',
                '把 ___ 替换为 nums',
                '答案: nums',
              ],
            },
            {
              type: 'output-match',
              prompt: '用元组解包交换 a 和 b 的值。a=1, b=2，交换后输出 a 的值。',
              starter_code: `a, b = 1, 2
a, b = ___
print(a)`,
              expected_output: '2',
              hints: [
                '交换变量的写法是 a, b = b, a',
                '把 ___ 替换为 b, a',
                '答案: b, a',
              ],
            },
            {
              type: 'output-match',
              prompt: '计算集合 {1,2,3} 和 {2,3,4} 的交集，输出结果。',
              starter_code: `a = {1, 2, 3}
b = {2, 3, 4}
print(a ___ b)`,
              expected_output: '{2, 3}',
              hints: [
                '交集运算符是 &',
                '把 ___ 替换为 &',
                '答案: &',
              ],
            },
          ],
          realWorldScenario:
            '元组和集合在实际开发中各有用武之地。元组用于固定结构的数据——如坐标 (x, y)、' +
            'RGB 颜色 (r, g, b)、数据库行记录。集合用于去重和关系运算——如找出两个用户群体的共同好友、' +
            '标签系统的标签集合运算。在数据处理流水线中，set 去重是最高效的方式，' +
            '比遍历列表判断 `if item not in result` 快数百倍。',
        },
        {
          id: 'py-ch3-l3',
          title: '字典',
          order: 2,
          content_md:
            '字典（dict）是 Python 中最重要的数据结构之一，存储键值对（key-value pairs）。' +
            '字典用 `{键: 值}` 创建，通过键快速查找值——平均 O(1) 时间复杂度（基于哈希表）。' +
            '字典的键必须是可哈希的（不可变类型：str、int、tuple、frozenset），值可以是任意类型。' +
            'Python 3.7+ 字典保持插入顺序（3.6 是 CPython 实现细节，3.7 成为语言规范）。\n\n' +
            '字典的基本操作：`d[键]` 访问值（键不存在抛 KeyError），`d[键] = 值` 添加/修改，' +
            '`del d[键]` 删除。推荐用 `d.get(键, 默认值)` 访问——键不存在时返回默认值而非报错。' +
            '`d.keys()` 返回所有键，`d.values()` 返回所有值，`d.items()` 返回 (键, 值) 对。' +
            '遍历字典推荐 `for key, value in d.items():`。\n\n' + '`setdefault(键, 默认值)` 是高效模式：' +
            '键存在时返回现有值，不存在时设置默认值并返回。这比 `if 键 in d: ... else: d[键] = 默认值` 更简洁。' +
            '`collections.defaultdict` 更进一步——自动为缺失键创建默认值，适合分组、计数等场景。' +
            '`collections.Counter` 专用于计数，`Counter("aabbc")` 返回 `{"a":2, "b":2, "c":1}`。\n\n' +
            '词频统计（word count）是经典面试题，也是 MapReduce 的核心思想。' +
            '给定一段文本，统计每个单词出现的次数。用字典实现：遍历单词，' +
            '`d[word] = d.get(word, 0) + 1` 或用 Counter 一步完成。' +
            '字典在配置管理、缓存、数据库记录映射、JSON 数据处理中无处不在——' +
            '理解字典是 Python 编程的核心能力。',
          examples: [
            {
              title: '字典 CRUD',
              code: `student = {"name": "小明", "age": 20}
# 查
print(student["name"])
print(student.get("grade", "未设置"))  # 键不存在返回默认值
# 增/改
student["grade"] = "A"
student["age"] = 21
# 删
del student["grade"]
# 遍历
for key, value in student.items():
    print(f"{key}: {value}")`,
              explanation:
                'd[key] 直接访问，键不存在抛 KeyError。d.get(key, default) 更安全——返回默认值。' +
                'd[key] = value 添加或修改。del d[key] 删除。items() 返回 (键, 值) 对用于遍历。' +
                'get() 是处理可选键的最佳实践。',
            },
            {
              title: '词频统计（经典面试题）',
              code: `# 统计每个单词出现的次数
text = "the cat sat on the mat the cat"
words = text.split()
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1
print(word_count)`,
              explanation:
                'word_count.get(word, 0) 在键不存在时返回 0，加 1 后存回。' +
                '这是词频统计的经典写法——比 if word in word_count 更简洁。' +
                '输出 {"the": 3, "cat": 2, "sat": 1, ...}。也可用 Counter(words) 一步完成。',
            },
            {
              title: '字典推导式与反转',
              code: `# 字典推导式
squares = {n: n**2 for n in range(1, 6)}
print(squares)
# 反转字典（值作为键，键作为值）
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
print(inverted)`,
              explanation:
                '{n: n**2 for n in range(1,6)} 创建 {1:1, 2:4, 3:9, 4:16, 5:25}。' +
                '反转字典用 {v: k for k, v in d.items()}——注意值必须唯一且可哈希。' +
                '字典推导式是创建字典的简洁方式，与列表推导式思想相同。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建字典 d = {"x": 10, "y": 20}，输出 d["y"] 的值。',
              starter_code: `d = {"x": 10, "y": 20}
print(d[___])`,
              expected_output: '20',
              hints: [
                '通过键 "y" 访问值',
                '把 ___ 替换为 "y"',
                '答案: "y"',
              ],
            },
            {
              type: 'output-match',
              prompt: '统计列表 ["a","b","a","c","b","a"] 中每个元素的出现次数，用字典输出结果。',
              starter_code: `items = ["a", "b", "a", "c", "b", "a"]
count = {}
for item in items:
    count[item] = count.___(item, 0) + 1
print(count)`,
              expected_output: "{'a': 3, 'b': 2, 'c': 1}",
              hints: [
                '用 get 方法安全访问字典',
                '方法名是 get',
                '答案: get',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 get() 方法获取字典中不存在的键 "z"，默认值设为 0。d = {"x": 1}。',
              starter_code: `d = {"x": 1}
print(d.get(___, 0))`,
              expected_output: '0',
              hints: [
                '获取键 "z" 的值',
                '把 ___ 替换为 "z"',
                '答案: "z"',
              ],
            },
          ],
          realWorldScenario:
            '字典是配置文件解析器（config file parser）的理想数据结构。JSON 配置文件解析后就是嵌套字典——' +
            '外层是配置分区，内层是配置项。缓存系统（如 functools.lru_cache）底层也用字典存储键值对。' +
            '词频统计是搜索引擎倒排索引的基础——将文档分词后统计词频，用于相关性排序。' +
            '数据库查询结果通常映射为字典列表，方便按字段名访问。',
        },
        {
          id: 'py-ch3-l4',
          title: '列表/字典推导式',
          order: 3,
          content_md:
            '推导式（comprehension）是 Python 最具特色的语法之一，用一行代码创建列表、字典、集合。' +
            '列表推导式语法：`[表达式 for 变量 in 可迭代对象 if 条件]`。' +
            '它等价于 for 循环 + append，但更简洁、更快（底层用 C 优化）。' +
            '推导式不是"炫技"——它是 Pythonic 编程的标志，被广泛认为是 Python 最优雅的特性之一。\n\n' +
            '推导式的三个部分：**表达式**（对每个元素做什么）、**for 子句**（遍历源数据）、' +
            '**if 过滤**（可选，筛选符合条件的元素）。`[x**2 for x in range(10) if x % 2 == 0]` ' +
            '生成偶数的平方列表。多个 for 子句可以嵌套：`[x*y for x in range(3) for y in range(3)]` ' +
            '相当于双层循环。但嵌套超过两层时建议改用普通循环以提高可读性。\n\n' +
            '字典推导式：`{键表达式: 值表达式 for 变量 in 可迭代对象}`。' +
            '集合推导式：`{表达式 for 变量 in 可迭代对象}`（用花括号，无冒号）。' +
            '生成器表达式（下章详解）：用圆括号 `(表达式 for 变量 in 可迭代对象)`，' +
            '惰性求值，不占用内存存储全部结果——处理大数据时用生成器表达式替代列表推导式。\n\n' +
            '推导式的性能优势：比等价的 for + append 循环快约 20-30%（在 CPython 中）。' +
            '但不应为简洁牺牲可读性——复杂逻辑用普通循环更清晰。' +
            'PEP 8 建议：推导式不应过长（一行不超过 79 字符），否则拆分为多行或用普通循环。' +
            '推导式在数据转换、过滤、映射中无处不在，是函数式编程思想在 Python 中的体现。',
          examples: [
            {
              title: '列表推导式基础',
              code: `# 平方列表
squares = [x**2 for x in range(1, 6)]
print(squares)
# 带条件的推导式: 偶数的平方
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_squares)
# 字符串转换
names = ["alice", "bob", "charlie"]
upper_names = [name.capitalize() for name in names]
print(upper_names)`,
              explanation:
                '[x**2 for x in range(1,6)] 生成 [1,4,9,16,25]。' +
                'if x%2==0 过滤只保留偶数的平方。capitalize() 首字母大写。' +
                '推导式比 for+append 循环更简洁高效。',
            },
            {
              title: '字典推导式',
              code: `# 创建字典
squares_dict = {n: n**2 for n in range(1, 4)}
print(squares_dict)
# 从两个列表创建字典
keys = ["name", "age", "city"]
values = ["小明", 20, "北京"]
person = {k: v for k, v in zip(keys, values)}
print(person)
# 过滤字典
scores = {"小明": 85, "小红": 50, "小刚": 90}
passed = {name: score for name, score in scores.items() if score >= 60}
print(passed)`,
              explanation:
                '{n: n**2 for n in range(1,4)} 创建 {1:1, 2:4, 3:9}。' +
                'zip(keys, values) 配对两个列表，字典推导式转为字典。' +
                'if score >= 60 过滤及格的学生。字典推导式让数据转换极其简洁。',
            },
            {
              title: '嵌套推导式（矩阵转置）',
              code: `# 矩阵转置: 行列互换
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# 嵌套推导式实现转置
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print(transposed)`,
              explanation:
                '外层推导遍历列索引 i，内层推导遍历每行取第 i 个元素。' +
                '[[1,4,7], [2,5,8], [3,6,9]] 是原矩阵的转置。' +
                '嵌套推导式强大但可读性下降，复杂场景建议用 zip(*matrix) 替代。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用列表推导式生成 1 到 5 的平方列表 [1, 4, 9, 16, 25]。',
              starter_code: `squares = [x ** 2 for x in range(___, 6)]
print(squares)`,
              expected_output: '[1, 4, 9, 16, 25]',
              hints: [
                'range 的起始值是 1',
                '把 ___ 替换为 1',
                '答案: 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '用列表推导式筛选 1-10 中的偶数，输出 [2, 4, 6, 8, 10]。',
              starter_code: `evens = [x for x in range(1, 11) if x % 2 == ___]
print(evens)`,
              expected_output: '[2, 4, 6, 8, 10]',
              hints: [
                '偶数除以 2 余 0',
                '把 ___ 替换为 0',
                '答案: 0',
              ],
            },
            {
              type: 'output-match',
              prompt: '用字典推导式将列表 ["a","b","c"] 转为 {"a":0, "b":1, "c":2}（值为索引）。',
              starter_code: `letters = ["a", "b", "c"]
d = {letter: index for index, letter in ___(letters)}
print(d)`,
              expected_output: "{'a': 0, 'b': 1, 'c': 2}",
              hints: [
                'enumerate 同时返回索引和元素',
                '把 ___ 替换为 enumerate',
                '答案: enumerate',
              ],
            },
          ],
          realWorldScenario:
            '推导式是数据转换流水线（data transformation pipeline）的核心工具。' +
            '从 API 获取用户列表后，用推导式提取所有邮箱、过滤活跃用户、转换数据格式——' +
            '都可以用一行推导式完成。数据分析中，推导式替代了大量的 for 循环样板代码。' +
            '字典推导式在数据映射（如 ID 到对象、键值反转）中特别有用。' +
            '掌握推导式是写出 Pythonic 代码的标志。',
        },
      ],
    },
    // ================================================================
    // 第 4 章：函数
    // ================================================================
    {
      id: 'py-ch4',
      title: '函数',
      order: 3,
      lessons: [
        {
          id: 'py-ch4-l1',
          title: '定义与调用',
          order: 0,
          content_md:
            '函数是组织代码的基本单元。`def 函数名(参数):` 定义函数，缩进块为函数体。' +
            '`return` 返回值——无 return 或 return 无值时返回 `None`。' +
            '调用函数用 `函数名(参数)`。函数名应使用 snake_case，动词开头描述行为。' +
            'Python 没有"函数声明"和"函数定义"的区分——def 即定义，调用必须在定义之后。\n\n' +
            '为什么需要函数？**复用**（避免重复代码）、**抽象**（隐藏实现细节，只暴露接口）、' +
            '**测试**（函数是独立可测试单元）、**组织**（分而治之，降低复杂度）。' +
            '良好设计的函数应遵循"单一职责原则"——只做一件事。函数长度建议不超过 20-30 行，' +
            '超过则考虑拆分。函数名应能自解释行为，避免 `do_something()` 这类模糊命名。\n\n' +
            '文档字符串（docstring）是函数的文档，用三引号包裹放在函数体第一行。' +
            '`help(函数名)` 显示 docstring。好的 docstring 说明"做什么"而非"怎么做"，' +
            '包含参数说明、返回值、异常和示例。PEP 257 规范了 docstring 格式。' +
            '类型注解（后续课程详解）可以进一步明确参数和返回值类型。\n\n' +
            'Python 函数是"一等公民"（first-class object）——可以赋值给变量、作为参数传递、' +
            '作为返回值返回。这让 Python 支持高阶函数、闭包、装饰器等高级特性。' +
            '`map()`、`filter()`、`sorted(key=)` 都接受函数作为参数。' +
            '函数式编程思想在 Python 中有广泛应用，理解函数的本质是进阶的关键。',
          examples: [
            {
              title: '基本函数定义',
              code: `def greet(name):
    """向指定的人问好"""
    return f"你好，{name}！"

# 调用函数
message = greet("小明")
print(message)
# 查看文档
print(greet.__doc__)`,
              explanation:
                'def 定义函数，三引号是 docstring。return 返回值，调用者接收。' +
                '函数名.__doc__ 访问 docstring，help(greet) 也可查看。' +
                '良好的 docstring 让函数自文档化，是专业 Python 开发的基本习惯。',
            },
            {
              title: '多返回值',
              code: `def divide(a, b):
    """返回商和余数"""
    return a // b, a % b

quotient, remainder = divide(17, 5)
print(f"商={quotient}, 余={remainder}")`,
              explanation:
                'return a, b 实际返回元组 (a, b)。调用端用 quotient, remainder = ... 解包。' +
                'Python 的多返回值比其他语言（如 Go 的多返回值）更自然。' +
                'divmod(17, 5) 是内置的等价函数，返回 (3, 2)。',
            },
            {
              title: '函数作为参数',
              code: `# 函数是一等公民，可以作为参数传递
def apply(func, value):
    """将函数应用到值上"""
    return func(value)

print(apply(abs, -5))       # 绝对值
print(apply(str.upper, "hi")) # 转大写
# sorted 的 key 参数接受函数
words = ["banana", "apple", "kiwi"]
print(sorted(words, key=len))`,
              explanation:
                'apply 接受一个函数 func 和值 value，调用 func(value)。' +
            'abs 和 str.upper 作为参数传入（注意没有括号——传函数本身而非调用结果）。' +
            'sorted(key=len) 用 len 函数作为排序依据。这是高阶函数的基础。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义函数 double(n)，返回 n * 2。调用 double(21) 并输出结果。',
              starter_code: `def double(n):
    return n ___ 2

print(double(21))`,
              expected_output: '42',
              hints: [
                '乘法运算符是 *',
                '把 ___ 替换为 *',
                '答案: *',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义函数 add(a, b) 返回 a + b，调用 add(3, 5) 并输出结果。',
              starter_code: `def add(a, b):
    return a + ___

print(add(3, 5))`,
              expected_output: '8',
              hints: [
                '返回两个参数的和',
                '把 ___ 替换为 b',
                '答案: b',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义函数 greet(name) 返回 "Hello, " + name。调用 greet("Python") 输出结果。',
              starter_code: `def greet(name):
    return "Hello, " + ___

print(greet("Python"))`,
              expected_output: 'Hello, Python',
              hints: [
                '返回值需要拼接 name 参数',
                '把 ___ 替换为 name',
                '答案: name',
              ],
            },
          ],
          realWorldScenario:
            '函数是代码组织的基础。在 Web 开发中，每个 API 端点对应一个函数；数据处理流水线中，' +
            '每个转换步骤是一个函数；测试框架中，每个测试用例是一个函数。' +
            '良好的函数设计——单一职责、清晰命名、完整文档——是可维护代码的基石。' +
            '函数作为一等公民的特性让 Python 天然支持回调模式、事件驱动和策略模式。',
        },
        {
          id: 'py-ch4-l2',
          title: '参数与返回值',
          order: 1,
          content_md:
            'Python 函数参数灵活强大。**位置参数**按顺序传入，**关键字参数**按名称传入（`func(name="小明")`）。' +
            '关键字参数让调用更清晰，且不依赖参数顺序。混合使用时，位置参数必须在关键字参数之前。' +
            '**默认参数**：`def greet(name, greeting="你好")` — greeting 有默认值，调用时可省略。' +
            '默认参数必须放在非默认参数之后。\n\n' +
            '⚠️ **可变默认参数陷阱**：`def add_item(item, lst=[])` 中 lst 是可变对象，' +
            '默认值在函数定义时创建一次，后续调用共享同一列表！正确做法是用 None 作为哨兵：' +
            '`def add_item(item, lst=None): if lst is None: lst = []`。' +
            '这是 Python 最经典的陷阱之一，面试常考。\n\n' +
            '`*args` 收集多余的位置参数为元组，`**kwargs` 收集多余的关键字参数为字典。' +
            '这让函数可以接受任意数量的参数——如 `print()` 就用 *args 接受多个打印对象。' +
            '参数顺序：`def func(位置参数, *args, 关键字参数, **kwargs)`。' +
            '函数调用时也可用 * 和 ** 解包：`func(*列表, **字典)`。\n\n' +
            '斐波那契数列是经典面试题：`fib(n) = fib(n-1) + fib(n-2)`，fib(0)=0, fib(1)=1。' +
            '递归实现简洁但效率极低（指数级）——重复计算大量子问题。' +
            '循环实现或带缓存的递归（记忆化）更高效。fib(10)=55, fib(20)=6765。' +
            '这道题考察递归思维、时间复杂度分析和优化策略（记忆化/动态规划）。',
          examples: [
            {
              title: '默认参数',
              code: `def greet(name, greeting="你好"):
    return f"{greeting}, {name}!"

print(greet("小明"))            # 用默认问候
print(greet("小红", "嗨"))       # 覆盖默认
print(greet(name="小刚", greeting="早上好"))  # 关键字参数`,
              explanation:
                'greeting 有默认值 "你好"，调用时可省略。关键字参数让调用更清晰，顺序可变。' +
                '混合调用时位置参数在前，关键字参数在后。默认参数让函数接口更灵活。',
            },
            {
              title: '*args 与 **kwargs',
              code: `def calculate(*args, **kwargs):
    """接受任意数量的位置和关键字参数"""
    print(f"位置参数: {args}")
    print(f"关键字参数: {kwargs}")

calculate(1, 2, 3, name="小明", age=20)
# 解包调用
nums = [10, 20]
print(sum(nums))  # 等价于 sum(10, 20)? 不，sum 接受可迭代对象`,
              explanation:
                '*args 收集多余位置参数为元组 (1,2,3)，**kwargs 收集关键字参数为字典。' +
                '这让函数接口极其灵活——可以接受任意参数。' +
                '很多框架和库的 API 用 *args, **kwargs 实现灵活的参数传递。',
            },
            {
              title: '斐波那契数列（经典面试题）',
              code: `# 循环实现（推荐）
def fib(n):
    """返回第 n 个斐波那契数"""
    if n < 2:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

print([fib(i) for i in range(10)])`,
              explanation:
                '斐波那契: 0,1,1,2,3,5,8,13,21,34。a,b = b,a+b 同时更新两个变量。' +
                '循环实现 O(n) 时间，远优于递归的 O(2^n)。a,b = b,a+b 是 Python 同时赋值的精髓——' +
                '无需临时变量，右侧先全部求值再赋值。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义函数 power(base, exp=2)，返回 base 的 exp 次方。调用 power(3) 输出 3 的平方。',
              starter_code: `def power(base, exp=2):
    return base ** ___

print(power(3))`,
              expected_output: '9',
              hints: [
                '返回 base 的 exp 次方',
                '把 ___ 替换为 exp',
                '答案: exp',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义函数 fib(n) 返回第 n 个斐波那契数。fib(0)=0, fib(1)=1。输出 fib(10)。',
              starter_code: `def fib(n):
    if n < 2:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + ___
    return b

print(fib(10))`,
              expected_output: '55',
              hints: [
                '斐波那契: 每个数是前两个数之和',
                'b 的新值是 a + b（旧值）',
                '答案: a',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义函数 sum_all(*args) 返回所有参数的和。调用 sum_all(1, 2, 3, 4) 输出结果。',
              starter_code: `def sum_all(*args):
    return ___(args)

print(sum_all(1, 2, 3, 4))`,
              expected_output: '10',
              hints: [
                '*args 收集为元组，需要求和',
                '内置求和函数是 sum',
                '答案: sum',
              ],
            },
          ],
          realWorldScenario:
            '灵活的参数设计是良好 API 的基础。Web 框架的路由函数常用 **kwargs 接受查询参数；' +
            '数据处理函数用默认参数提供合理默认值，同时允许自定义。' +
            '斐波那契数列虽是面试题，但其优化思路——避免重复计算——在缓存设计、' +
            '动态规划中无处不在。可变默认参数陷阱提醒我们：理解 Python 的对象模型和引用语义' +
            '是写出无 bug 代码的前提。',
        },
        {
          id: 'py-ch4-l3',
          title: '作用域与闭包',
          order: 2,
          content_md:
            'Python 的变量作用域遵循 LEGB 规则：**L**ocal（函数内）→ **E**nclosing（外层嵌套函数）→ ' +
            '**G**lobal（模块级）→ **B**uilt-in（内置）。查找变量时按此顺序从内到外搜索。' +
            '函数内可以读取外部变量，但不能直接修改——修改需要 `global` 或 `nonlocal` 声明。' +
            '这一设计防止了意外的全局变量污染，是 Python 的安全机制之一。\n\n' +
            '`global` 声明在函数内修改全局变量：`global x; x = 10`。' +
            '`nonlocal` 声明修改外层嵌套函数的变量（Python 3 引入）：`nonlocal x; x += 1`。' +
            '过度使用 global 是反模式——全局可变状态让程序难以测试和调试。' +
            '更好的做法是用函数参数和返回值传递数据，或用类封装状态。\n\n' +
            '**闭包**（closure）是携带了外部变量的函数。当内部函数引用了外部函数的变量时，' +
            '即使外部函数已返回，内部函数仍能访问这些变量——它们被"捕获"在闭包中。' +
            '闭包是函数式编程的核心概念，也是装饰器的实现基础。' +
            '工厂函数（factory function）是闭包的典型应用：外层函数接收配置，' +
            '返回内层函数携带该配置。\n\n' +
            '闭包的注意事项：闭包捕获的是变量本身（引用），而非值。' +
            '在循环中创建闭包时，所有闭包共享同一循环变量——这是经典陷阱。' +
            '解决方法是用默认参数捕获当前值：`(lambda x=i: x)` 或 `functools.partial`。' +
            '理解作用域和闭包是掌握装饰器、回调、事件处理等高级模式的基础。',
          examples: [
            {
              title: 'LEGB 作用域',
              code: `x = "全局变量"  # Global

def outer():
    x = "外层变量"  # Enclosing
    def inner():
        x = "内层变量"  # Local
        print(x)
    inner()
    print(x)

outer()
print(x)`,
              explanation:
                'inner() 打印 "内层变量"（Local 优先），outer() 打印 "外层变量"，' +
                '最外层打印 "全局变量"。LEGB 规则决定了变量查找顺序。' +
                '每层作用域的 x 是独立的变量，互不影响。',
            },
            {
              title: '闭包计数器',
              code: `def make_counter():
    """工厂函数: 返回一个计数器闭包"""
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

c = make_counter()
print(c())  # 1
print(c())  # 2
print(c())  # 3`,
              explanation:
                'make_counter 返回 counter 函数。counter 闭包捕获了 count 变量。' +
                'nonlocal count 声明修改外层变量。每次调用 c() count 递增。' +
                '即使 make_counter 已返回，count 仍存在于闭包中——这是闭包的精髓。',
            },
            {
              title: '工厂函数',
              code: `def make_multiplier(factor):
    """创建一个乘法器闭包"""
    def multiply(x):
        return x * factor
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5))   # 10
print(triple(5))   # 15`,
              explanation:
                'double 和 triple 是不同的闭包，各自捕获了不同的 factor 值。' +
                'double 携带 factor=2，triple 携带 factor=3。' +
                '工厂函数模式让代码更灵活——用配置创建定制化的函数，替代类的简单场景。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义闭包计数器 make_counter()，调用 3 次后输出第 3 次的值。',
              starter_code: `def make_counter():
    count = 0
    def counter():
        ___ count
        count += 1
        return count
    return counter

c = make_counter()
c()
c()
print(c())`,
              expected_output: '3',
              hints: [
                '修改外层变量需要 nonlocal 声明',
                '把 ___ 替换为 nonlocal',
                '答案: nonlocal',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义工厂函数 make_multiplier(factor)，返回将输入乘以 factor 的函数。调用 make_multiplier(3)(5) 输出 15。',
              starter_code: `def make_multiplier(factor):
    def multiply(x):
        return x * ___
    return multiply

print(make_multiplier(3)(5))`,
              expected_output: '15',
              hints: [
                '内层函数需要使用外层的 factor 变量',
                '把 ___ 替换为 factor',
                '答案: factor',
              ],
            },
            {
              type: 'output-match',
              prompt: '在函数内修改全局变量 count。count 初始为 0，调用 increment() 后 count 变为 1，输出它。',
              starter_code: `count = 0
def increment():
    ___ count
    count += 1

increment()
print(count)`,
              expected_output: '1',
              hints: [
                '在函数内修改全局变量需要 global 声明',
                '把 ___ 替换为 global',
                '答案: global',
              ],
            },
          ],
          realWorldScenario:
            '闭包是实现缓存（implementing a cache）的核心机制。记忆化（memoization）装饰器用闭包' +
            '存储函数调用结果——外层装饰器函数持有缓存字典，内层包装函数检查并更新缓存。' +
            '回调函数在异步编程中也常以闭包形式存在——携带上下文信息。' +
            '工厂函数模式在需要"配置化创建函数"的场景中替代了简单的类——' +
            '如创建不同精度的格式化函数、不同阈值的过滤函数。',
        },
        {
          id: 'py-ch4-l4',
          title: '装饰器基础',
          order: 3,
          content_md:
            '装饰器（decorator）是 Python 的高级特性，用于在不修改原函数的前提下扩展其功能。' +
            '装饰器本质是一个高阶函数：接受函数作为参数，返回新函数。`@装饰器名` 语法糖' +
            '将 `func = decorator(func)` 简化。装饰器常用于日志、计时、权限校验、缓存等横切关注点。' +
            '理解装饰器需要先掌握函数是一等公民和闭包。\n\n' +
            '最简单的装饰器模式：`def my_decorator(func): def wrapper(*args, **kwargs): ' +
            '... result = func(*args, **kwargs) ... return result; return wrapper`。' +
            'wrapper 用 *args, **kwargs 透传所有参数，确保装饰器适用于任意函数签名。' +
            '调用 func() 前后可以添加额外逻辑（日志、计时、校验等）。' +
            '`@my_decorator` 放在函数定义上方，等价于 `func = my_decorator(func)`。\n\n' +
            '`functools.wraps(func)` 是装饰器的必备工具——它将原函数的 `__name__`、`__doc__`' +
            '等元信息复制到 wrapper 上。不用 wraps 会导致被装饰函数的元信息丢失，' +
            '影响调试和文档生成。装饰器栈：多个装饰器从下到上应用，从上到下执行。' +
            '`@dec1 @dec2 def f()` 等价于 `f = dec1(dec2(f))`。\n\n' +
            '带参数的装饰器需要三层嵌套：最外层接收装饰器参数，中间层接收函数，最内层是 wrapper。' +
            '例如 `@repeat(3)` 重复执行 3 次。装饰器在 Web 框架中无处不在——' +
            'Flask 的 `@app.route`、Django 的 `@login_required` 都是装饰器。' +
            '掌握装饰器是 Python 进阶的里程碑，它体现了"函数式编程"和"元编程"的思想。',
          examples: [
            {
              title: '手动装饰器',
              code: `# 不用 @ 语法的手动装饰
def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"调用 {func.__name__}({args}, {kwargs})")
        result = func(*args, **kwargs)
        print(f"返回: {result}")
        return result
    return wrapper

def add(a, b):
    return a + b

# 手动装饰
add = log_calls(add)
add(3, 5)`,
              explanation:
                'log_calls 返回 wrapper，wrapper 在调用原函数前后添加日志。' +
                '*args, **kwargs 透传所有参数。add = log_calls(add) 手动装饰——' +
                '这等价于 @log_calls 语法糖。理解手动装饰有助于理解 @ 的本质。',
            },
            {
              title: '@ 语法糖与 functools.wraps',
              code: `from functools import wraps

def timing(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"{func.__name__} 耗时 {elapsed:.4f}s")
        return result
    return wrapper

@timing
def slow_sum(n):
    """计算 1 到 n 的和"""
    return sum(range(n + 1))

print(slow_sum(100))
print(slow_sum.__name__)  # 保留原函数名`,
              explanation:
                '@timing 等价于 slow_sum = timing(slow_sum)。@wraps(func) 保留原函数的' +
                '__name__ 和 __doc__——不加的话 __name__ 会变成 "wrapper"。' +
                'timing 装饰器记录函数执行时间，是性能分析的有用工具。',
            },
            {
              title: '带参数的装饰器',
              code: `from functools import wraps

def repeat(n):
    """重复执行 n 次的装饰器"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")

say_hello()  # 打印 3 次`,
              explanation:
                '带参数的装饰器是三层嵌套: repeat(n) → decorator(func) → wrapper。' +
                '@repeat(3) 先调用 repeat(3) 返回 decorator，再用 decorator 装饰 say_hello。' +
                '这解释了为什么带参数装饰器需要多一层——最外层接收装饰器参数。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '编写装饰器 log_call，在调用函数前输出 "调用函数"。装饰 greet 函数并调用它。greet 返回 "hi"。',
              starter_code: `def log_call(func):
    def wrapper(*args, **kwargs):
        print("调用函数")
        return func(*args, **kwargs)
    return wrapper

@log_call
def greet():
    return "hi"

print(greet(___))`,
              expected_output: '调用函数\nhi',
              hints: [
                'greet 不接受参数，调用时不需要传参',
                'print(greet()) 即可',
                '答案: （留空，即 greet()）',
              ],
            },
            {
              type: 'output-match',
              prompt: '装饰器 wrapper 应该用 ___ 透传所有参数给原函数。补全 result = func(???)。',
              starter_code: `def my_dec(func):
    def wrapper(*args, **kwargs):
        return func(*___, **kwargs)
    return wrapper

@my_dec
def add(a, b):
    return a + b

print(add(2, 3))`,
              expected_output: '5',
              hints: [
                '*args 需要用 * 解包传给 func',
                '把 ___ 替换为 args',
                '答案: args',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 @ 语法将装饰器 timer 应用到函数 work 上。work 返回 "done"。',
              starter_code: `def timer(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@___
def work():
    return "done"

print(work())`,
              expected_output: 'done',
              hints: [
                '@ 后跟装饰器函数名',
                '把 ___ 替换为 timer',
                '答案: timer',
              ],
            },
          ],
          realWorldScenario:
            '装饰器在 Web 开发中无处不在——Flask 的 @app.route("/api") 注册路由，' +
            'Django 的 @login_required 校验登录状态，@cache 实现缓存。' +
            '实现缓存（implementing a cache）最自然的方式就是装饰器——' +
            '@lru_cache(maxsize=128) 一行代码为函数添加 LRU 缓存。' +
            '装饰器将"横切关注点"（日志、权限、缓存、重试）与业务逻辑分离，' +
            '是写出整洁、可维护代码的关键工具。',
        },
      ],
    },
    // ================================================================
    // 第 5 章：面向对象
    // ================================================================
    {
      id: 'py-ch5',
      title: '面向对象',
      order: 4,
      lessons: [
        {
          id: 'py-ch5-l1',
          title: '类与对象',
          order: 0,
          content_md:
            '面向对象编程（OOP）是组织代码的重要范式。**类**（class）是对象的蓝图/模板，' +
            '**对象**（instance）是类的实例。`class 类名:` 定义类，`类名()` 创建实例。' +
            '`__init__` 是构造方法，在创建对象时自动调用，用于初始化属性。' +
            '`self` 指向当前实例本身（相当于其他语言的 this），必须是实例方法的第一个参数。\n\n' +
            '类属性 vs 实例属性：类属性定义在类级别（所有实例共享），实例属性定义在 `__init__` 中' +
            '（每个实例独立）。访问时实例属性优先于类属性——`self.x` 先找实例属性，再找类属性。' +
            '修改类属性影响所有实例，修改实例属性只影响该实例。' +
            '⚠️ 可变类属性（如列表）是常见陷阱——所有实例共享同一列表。\n\n' +
            '实例方法第一个参数是 self，通过 `self.方法名()` 或 `实例.方法名()` 调用。' +
            '类方法用 `@classmethod`，第一个参数是类（cls）。静态方法用 `@staticmethod`，无 self/cls。' +
            '`__init__` 是初始化方法（不是构造，构造是 `__new__`）。' +
            '`__str__` 定义 print 输出，`__repr__` 定义调试输出——下节详解。\n\n' +
            'OOP 的三大支柱：**封装**（隐藏内部状态，通过方法访问）、**继承**（代码复用，下节详解）、' +
            '**多态**（同一接口不同实现，下节详解）。Python 的封装是"约定式"的——' +
            '单下划线 `_x` 表示"内部使用"（约定不强制），双下划线 `__x` 触发名称改写（name mangling）。' +
            'Python 没有真正的 private——这体现了"we are all consenting adults"的哲学。',
          examples: [
            {
              title: '基本类定义',
              code: `class Dog:
    """狗类"""
    # 类属性（所有实例共享）
    species = "犬科"

    def __init__(self, name, age):
        # 实例属性（每个实例独立）
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} 汪汪叫！"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age})"

d = Dog("旺财", 3)
print(d.bark())
print(d.species)  # 访问类属性
print(d)          # 调用 __str__`,
              explanation:
                '__init__ 初始化 name 和 age。self 指向实例本身。species 是类属性，所有 Dog 共享。' +
                '__str__ 定义 print(d) 的输出。类属性用 类名.属性 或 实例.属性 访问。',
            },
            {
              title: '银行账户类',
              code: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance  # _balance 约定为内部属性

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return f"存入 {amount}，余额 {self._balance}"
        return "存款金额必须为正"

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            return f"取出 {amount}，余额 {self._balance}"
        return "余额不足"

acc = BankAccount("小明", 100)
print(acc.deposit(50))
print(acc.withdraw(30))`,
              explanation:
                '_balance 用下划线表示"内部属性"（约定，非强制）。deposit/withdraw 方法封装余额操作。' +
                '这是封装的体现——外部不能直接修改余额，必须通过方法。' +
                '方法内做参数校验保证数据合法性。',
            },
            {
              title: '类方法与静态方法',
              code: `class MathHelper:
    pi = 3.14159

    @classmethod
    def circle_area(cls, radius):
        """类方法: 第一个参数是类"""
        return cls.pi * radius ** 2

    @staticmethod
    def is_positive(n):
        """静态方法: 无 self/cls 参数"""
        return n > 0

print(MathHelper.circle_area(2))
print(MathHelper.is_positive(-5))`,
              explanation:
                '@classmethod 第一个参数是类（cls），可访问类属性。' +
                '@staticmethod 无 self/cls，类似普通函数但逻辑上属于类。' +
                '类方法常用于工厂方法（替代构造），静态方法用于工具函数。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义类 Cat，构造方法接收 name，方法 meow 返回 name + " 喵～"。创建 Cat("咪咪")，调用 meow 输出。',
              starter_code: `class Cat:
    def __init__(self, name):
        self.name = name
    def meow(self):
        return self.name + ___

c = Cat("咪咪")
print(c.meow())`,
              expected_output: '咪咪 喵～',
              hints: [
                '返回 name 拼接 " 喵～"',
                '把 ___ 替换为 " 喵～"',
                '答案: " 喵～"',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义类 Rectangle，构造方法接收 width 和 height，方法 area 返回面积。创建 Rectangle(3, 4)，输出 area()。',
              starter_code: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * ___

r = Rectangle(3, 4)
print(r.area())`,
              expected_output: '12',
              hints: [
                '面积 = 宽 * 高',
                '把 ___ 替换为 self.height',
                '答案: self.height',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Student 类，__init__ 接收 name 和 score，添加方法 is_passed 返回 score >= 60 的布尔值。创建 Student("小明", 85)，输出 is_passed()。',
              starter_code: `class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    def is_passed(self):
        return self.score >= ___

s = Student("小明", 85)
print(s.is_passed())`,
              expected_output: 'True',
              hints: [
                '及格线是 60 分',
                '把 ___ 替换为 60',
                '答案: 60',
              ],
            },
          ],
          realWorldScenario:
            '面向对象是建模现实世界的基础。电商系统中，User、Product、Order、Cart 都是类——' +
            '每个类封装了数据和操作数据的方法。银行系统的 Account 类封装余额和存取操作，' +
            '保证数据一致性。游戏开发中，Player、Enemy、Item 都是类，通过组合构建复杂系统。' +
            '良好的类设计——单一职责、清晰接口、合理封装——是构建大型可维护系统的关键。',
        },
        {
          id: 'py-ch5-l2',
          title: '继承与多态',
          order: 1,
          content_md:
            '继承（inheritance）让子类获得父类的所有属性和方法，实现代码复用。' +
            '`class 子类(父类):` 定义继承。子类可以添加新属性/方法，也可以重写（override）父类方法。' +
            '`super()` 调用父类方法——常用于 `super().__init__()` 初始化父类属性。' +
            'Python 支持多重继承（一个类继承多个父类），但需谨慎使用以避免 MRO（方法解析顺序）复杂性。\n\n' +
            '方法重写（override）：子类定义与父类同名的方法，调用时优先使用子类版本。' +
            '这是多态的基础——同一方法调用，不同对象表现不同行为。' +
            '`super().方法名()` 可以在子类方法中调用父类被重写的方法，常用于扩展而非替换父类行为。' +
            '重写时保持方法签名一致是良好实践（可用 @override 装饰器标注，Python 3.12+）。\n\n' +
            '多态（polymorphism）：不同类的对象对同一消息（方法调用）做出不同响应。' +
            'Python 的多态是"鸭子类型"（duck typing）——"如果它走起来像鸭子、叫起来像鸭子，那它就是鸭子"。' +
            '不需要显式继承同一父类，只要有相同方法即可。这让 Python 极其灵活——' +
            '任何有 `read()` 方法的对象都可以传给 `process(reader)` 函数。\n\n' +
            '抽象基类（ABC）用 `abc.ABC` 和 `@abstractmethod` 定义接口，强制子类实现。' +
            '`isinstance()` 检查对象类型（支持继承链）。`issubclass()` 检查类继承关系。' +
            '继承层次不宜过深（建议不超过 3 层）——优先用组合（has-a）而非继承（is-a）。' +
            '"组合优于继承"是面向对象设计的重要原则，过度继承会导致类层次脆弱难维护。',
          examples: [
            {
              title: '动物继承层次',
              code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} 发出声音"

    def move(self):
        return f"{self.name} 在移动"

class Dog(Animal):
    def speak(self):  # 重写父类方法
        return f"{self.name} 汪汪！"

class Cat(Animal):
    def speak(self):
        return f"{self.name} 喵～"

animals = [Dog("旺财"), Cat("咪咪"), Animal("某动物")]
for a in animals:
    print(a.speak())  # 多态: 同一调用，不同行为`,
              explanation:
                'Dog 和 Cat 继承 Animal 并重写 speak()。Animal 的 move() 被子类继承。' +
                '循环中 a.speak() 根据对象实际类型调用对应方法——这就是多态。' +
                '不需要类型判断，鸭子类型自动处理。',
            },
            {
              title: 'super() 调用父类',
              code: `class Vehicle:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed

    def info(self):
        return f"{self.brand} 速度 {self.speed}"

class Car(Vehicle):
    def __init__(self, brand, speed, wheels):
        super().__init__(brand, speed)  # 调用父类构造
        self.wheels = wheels

    def info(self):
        parent_info = super().info()  # 调用父类方法
        return f"{parent_info}, {self.wheels} 个轮子"

c = Car("丰田", 120, 4)
print(c.info())`,
              explanation:
                'super().__init__(brand, speed) 复用父类初始化逻辑。' +
                'super().info() 调用父类方法并扩展——这是"扩展而非替换"的继承模式。' +
                '子类只需添加自己的特有逻辑（wheels），避免重复代码。',
            },
            {
              title: '鸭子类型',
              code: `# 鸭子类型: 不需要继承同一父类
class Dog:
    def speak(self):
        return "汪！"

class Robot:
    def speak(self):
        return "哔哔"

def make_speak(obj):
    """任何有 speak 方法的对象都可以传入"""
    return obj.speak()

print(make_speak(Dog()))
print(make_speak(Robot()))`,
              explanation:
                'make_speak 不检查参数类型，只要求对象有 speak() 方法。' +
                'Dog 和 Robot 无继承关系，但都能传入 make_speak——鸭子类型。' +
                '这让 Python 代码极其灵活，但也要求良好的文档和测试。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 Dog 继承 Animal，重写 speak 返回 name + " 汪！"。创建 Dog("旺财") 调用 speak。',
              starter_code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def speak(self):
        return self.name + ___

d = Dog("旺财")
print(d.speak())`,
              expected_output: '旺财 汪！',
              hints: [
                '返回 name 拼接 " 汪！"',
                '把 ___ 替换为 " 汪！"',
                '答案: " 汪！"',
              ],
            },
            {
              type: 'output-match',
              prompt: '在 Car 类的 __init__ 中用 super() 调用父类 Vehicle 的 __init__，传入 brand。',
              starter_code: `class Vehicle:
    def __init__(self, brand):
        self.brand = brand

class Car(Vehicle):
    def __init__(self, brand, wheels):
        ___().__init__(brand)
        self.wheels = wheels

c = Car("宝马", 4)
print(c.brand)`,
              expected_output: '宝马',
              hints: [
                '调用父类用 super()',
                '把 ___ 替换为 super',
                '答案: super',
              ],
            },
            {
              type: 'output-match',
              prompt: 'Shape 有 area 方法返回 0。Circle 继承 Shape 重写 area 返回 3.14 * r * r。创建 Circle(2) 输出 area()。',
              starter_code: `class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):
        return 3.14 * self.r * ___

c = Circle(2)
print(c.area())`,
              expected_output: '12.56',
              hints: [
                '圆面积 = π * r * r',
                '把 ___ 替换为 self.r',
                '答案: self.r',
              ],
            },
          ],
          realWorldScenario:
            '继承在框架开发中至关重要。Web 框架的 View 基类提供 get/post/put 方法骨架，' +
            '开发者通过继承并重写实现具体逻辑。Django 的 TemplateView、Flask 的 MethodView 都是此模式。' +
            '多态让框架可以统一处理不同子类——"调用 obj.render()，不关心具体类型"。' +
            '插件系统也依赖继承——定义 Plugin 基类，第三方通过继承开发插件，框架用多态调用。',
        },
        {
          id: 'py-ch5-l3',
          title: '魔术方法',
          order: 2,
          content_md:
            '魔术方法（magic methods / dunder methods）是 Python 以双下划线开头和结尾的方法，' +
            '如 `__init__`、`__str__`、`__add__`。它们定义了对象与 Python 内置操作的交互行为——' +
            '让自定义类可以像内置类型一样使用 `+`、`==`、`len()`、`print()` 等操作。' +
            '这是 Python "运算符重载"的机制，也是 Python 灵活性的体现。\n\n' +
            '最常用的魔术方法：`__str__` 定义 `print()` 和 `str()` 的输出（面向用户）；' +
            '`__repr__` 定义 `repr()` 的输出（面向开发者，理想情况下可 `eval` 重建对象）。' +
            '`__len__` 让 `len(obj)` 工作，`__eq__` 让 `==` 比较，`__lt__`/`__gt__` 让 `<`/`>` 工作。\n\n' +
            '`__add__` 让 `+` 运算符工作，`__getitem__` 让 `obj[key]` 索引工作，' +
            '`__iter__` 让 `for x in obj` 迭代工作。运算符重载让自定义类型的行为像内置类型，' +
            '极大提升了代码的直观性和一致性。例如自定义 Vector 类可以用 `v1 + v2` 相加，' +
            '比 `v1.add(v2)` 更自然。\n\n' +
            '`__str__` vs `__repr__` 的区别：`__str__` 面向用户（可读性优先），' +
            '`__repr__` 面向开发者（精确性优先）。如果只实现一个，实现 `__repr__`——' +
            '因为 print() 在没有 `__str__` 时会回退到 `__repr__`。' +
            '良好习惯是 `__repr__` 输出 `ClassName(属性=值, ...)` 格式，理想情况下可 eval 重建对象。\n\n' +
            '比较魔术方法：`__eq__`（==）、`__ne__`（!=）、`__lt__`（<）、`__le__`（<=）、' +
            '`__gt__`（>）、`__ge__`（>=）。实现 `__eq__` 后默认 `!=` 也工作。' +
            '用 `@functools.total_ordering` 装饰器只需实现 `__eq__` 和 `__lt__` 即可自动补全其余比较。' +
            '运算符重载应保持语义一致性——`+` 应是"加法"而非"删除"等反直觉操作。',
          examples: [
            {
              title: '__str__ 与 __repr__',
              code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"点({self.x}, {self.y})"

    def __repr__(self):
        return f"Point({self.x}, {self.y})"

p = Point(3, 4)
print(p)       # 调用 __str__
print(repr(p)) # 调用 __repr__
print([p])     # 列表中用 __repr__`,
              explanation:
                '__str__ 面向用户输出 "点(3, 4)"，__repr__ 面向开发者输出 "Point(3, 4)"。' +
                'print(p) 调用 __str__，repr(p) 调用 __repr__。' +
                '列表中的元素用 __repr__ 显示——这是调试时常见的细节。',
            },
            {
              title: '运算符重载 __add__',
              code: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)   # 调用 __add__
print(v1 == v2)  # 调用 __eq__`,
              explanation:
                '__add__ 让 v1 + v2 返回新 Vector。__eq__ 让 == 比较内容而非引用。' +
                '运算符重载让 Vector 的使用像内置数值类型一样自然。' +
                '注意 __add__ 返回新对象而非修改 self——保持不可变语义更安全。',
            },
            {
              title: '__len__ 与 __getitem__',
              code: `class Playlist:
    def __init__(self, songs):
        self.songs = songs

    def __len__(self):
        return len(self.songs)

    def __getitem__(self, index):
        return self.songs[index]

playlist = Playlist(["歌曲A", "歌曲B", "歌曲C"])
print(len(playlist))  # 调用 __len__
print(playlist[0])    # 调用 __getitem__
for song in playlist:  # __getitem__ 支持迭代
    print(song)`,
              explanation:
                '__len__ 让 len() 工作，__getitem__ 让索引和迭代工作。' +
                '实现 __getitem__ 后，for 循环会自动用索引 0,1,2... 迭代直到 IndexError。' +
                '这让自定义容器类型像列表一样使用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '为 Point 类实现 __str__，使 print(Point(3,4)) 输出 "(3,4)"。',
              starter_code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __str__(self):
        return f"({self.x},{___})"

p = Point(3, 4)
print(p)`,
              expected_output: '(3,4)',
              hints: [
                '需要输出 y 的值',
                '把 ___ 替换为 self.y',
                '答案: self.y',
              ],
            },
            {
              type: 'output-match',
              prompt: '为 Vector 类实现 __add__，使 Vector(1,2) + Vector(3,4) 返回 Vector(4,6)。',
              starter_code: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + ___)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

print(Vector(1, 2) + Vector(3, 4))`,
              expected_output: 'Vector(4, 6)',
              hints: [
                'y 分量相加',
                '把 ___ 替换为 other.y',
                '答案: other.y',
              ],
            },
          ],
          realWorldScenario:
            '魔术方法在数据模型设计中至关重要。Django ORM 的 Model 类用 __str__ 定义后台显示，' +
            '__eq__ 让模型对象按主键比较。numpy 的 ndarray 用 __add__/__mul__ 实现向量化运算。' +
            '自定义数据类（如 Money、Temperature）通过运算符重载让代码更直观——' +
            'money1 + money2 比 money1.add(money2) 更自然。dataclass 装饰器自动生成 __repr__ 和 __eq__。',
        },
        {
          id: 'py-ch5-l4',
          title: '属性与描述符',
          order: 3,
          content_md:
            '`@property` 装饰器将方法转换为属性访问——让 `obj.value` 而非 `obj.value()` 访问。' +
            '这实现了"计算属性"（动态计算的属性）和"受控访问"（getter/setter 校验）。' +
            'property 是 Python 实现"封装"的惯用方式——先用公共属性，需要校验时再无缝改为 property，' +
            '调用方代码无需修改。这是 Python 优于 Java（需要 getX/setX 样板）的地方。\n\n' +
            'property 的三件套：`@property` 定义 getter，`@属性名.setter` 定义 setter，' +
            '`@属性名.deleter` 定义 deleter。只定义 getter 则属性只读。' +
            'setter 中可以做参数校验——如 age 不能为负数，balance 不能小于 0。' +
            '校验失败时 raise ValueError 让调用方知道错误。这比在 __init__ 中校验更全面——' +
            '后续修改属性时也会触发校验。\n\n' +
            '描述符（descriptor）是 property 的底层机制。实现了 `__get__`/`__set__`/`__delete__`' +
            '的类就是描述符，作为类属性时拦截属性访问。property 本质是描述符的便捷封装。' +
            '描述符适合多个属性需要相同校验逻辑的场景——如多个"非负整数"属性可用一个 NonNegative 描述符复用。' +
            'ORM 框架（Django/SQLAlchemy）的 Field 就是描述符——拦截属性读写实现数据库映射。\n\n' +
            '`@cached_property`（functools）缓存计算结果——首次访问时计算，后续访问返回缓存。' +
            '适合昂贵计算的属性。`__slots__` 限制实例可有的属性——节省内存、防止拼写错误的属性赋值。' +
            '但 `__slots__` 会失去动态添加属性的能力，需权衡。dataclass + property 是现代 Python ' +
            '数据建模的推荐组合——简洁且类型安全。',
          examples: [
            {
              title: '@property getter/setter',
              code: `class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("温度不能低于绝对零度")
        self._celsius = value

t = Temperature(25)
print(t.celsius)  # getter
t.celsius = 30    # setter
print(t.celsius)`,
              explanation:
                '@property 把 celsius 方法变成属性——t.celsius 而非 t.celsius()。' +
                '@celsius.setter 定义赋值校验，低于绝对零度抛 ValueError。' +
                '外部代码用 t.celsius = 30 赋值，内部自动校验——封装的精髓。',
            },
            {
              title: '计算属性',
              code: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    @property
    def area(self):
        """面积是计算属性，无需存储"""
        return self.width * self.height

    @property
    def perimeter(self):
        return 2 * (self.width + self.height)

r = Rectangle(3, 4)
print(r.area)        # 12，像属性一样访问
print(r.perimeter)   # 14
r.width = 5
print(r.area)        # 20，自动更新`,
              explanation:
                'area 和 perimeter 是计算属性——基于 width/height 动态计算。' +
                '修改 width 后 area 自动更新——无需手动同步。' +
                '@property 让"方法"看起来像"属性"，调用更自然，无括号。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '为 Person 类添加 age 属性的 setter，校验 age 不能为负数。设置 age=25 后输出它。',
              starter_code: `class Person:
    def __init__(self):
        self._age = 0

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("年龄不能为负")
        self._age = ___

p = Person()
p.age = 25
print(p.age)`,
              expected_output: '25',
              hints: [
                'setter 中将校验后的值赋给 _age',
                '把 ___ 替换为 value',
                '答案: value',
              ],
            },
            {
              type: 'output-match',
              prompt: '为 Circle 类用 @property 添加只读属性 area（π*r*r）。创建 Circle(2) 输出 area。',
              starter_code: `class Circle:
    def __init__(self, r):
        self.r = r

    @property
    def area(self):
        return 3.14 * self.r * ___

c = Circle(2)
print(c.area)`,
              expected_output: '12.56',
              hints: [
                '面积 = π * r * r',
                '把 ___ 替换为 self.r',
                '答案: self.r',
              ],
            },
          ],
          realWorldScenario:
            '@property 在数据校验和 ORM 中广泛应用。Django 模型的字段用描述符拦截读写实现数据库同步。' +
            '电商系统的 Product 类用 @property 计算折后价——基于 price 和 discount 动态计算，' +
            '修改 discount 后折后价自动更新。配置类用 property 校验参数范围——端口必须在 1-65535。' +
            'property 让数据模型既灵活又安全，是 Python OOP 的核心工具。',
        },
      ],
    },
    // ================================================================
    // 第 6 章：异常与文件
    // ================================================================
    {
      id: 'py-ch6',
      title: '异常与文件',
      order: 5,
      lessons: [
        {
          id: 'py-ch6-l1',
          title: 'try / except / finally',
          order: 0,
          content_md:
            '异常（exception）是程序运行时错误的信号——如除以零、访问不存在的键、文件不存在等。' +
            'Python 用 `try/except` 捕获异常，防止程序崩溃。`try` 块放可能出错的代码，' +
            '`except` 块处理特定异常。未捕获的异常会向上传播直到顶层，导致程序终止并打印 traceback。' +
            '良好的异常处理让程序在错误环境下优雅降级而非崩溃。\n\n' +
            '`except 异常类型 as e` 捕获特定异常并绑定到变量 e。多个 except 按顺序匹配——' +
            '先写具体异常（如 ZeroDivisionError），再写通用异常（如 Exception）。' +
            '`except Exception` 捕获所有非系统异常（推荐），`except:` 裸捕获（不推荐——' +
            '会捕获 KeyboardInterrupt 等系统退出信号）。`else` 块在 try 无异常时执行。\n\n' +
            '`finally` 块无论是否异常都会执行——用于资源清理（关闭文件、释放锁、断开连接）。' +
            '即使 try/except 中有 return，finally 也会在 return 前执行。' +
            '这是 finally 最可靠的特性——保证清理逻辑一定运行。' +
            '`with` 语句（下节详解）是资源管理的更优方案，但理解 finally 是基础。\n\n' +
            'Python 异常层次：BaseException → Exception → 具体异常（ValueError、TypeError、' +
            'KeyError、IndexError、FileNotFoundError 等）。自定义异常应继承 Exception 而非 BaseException。' +
            '常见异常：`ValueError`（值不合法）、`TypeError`（类型不对）、`KeyError`（键不存在）、' +
            '`IndexError`（索引越界）、`AttributeError`（属性不存在）、`FileNotFoundError`（文件不存在）。',
          examples: [
            {
              title: '捕获特定异常',
              code: `try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"捕获到异常: {e}")
finally:
    print("清理工作完成")`,
              explanation:
                'try 中 10/0 抛出 ZeroDivisionError，except 捕获并打印错误信息。' +
                'finally 无论是否异常都执行——用于资源清理。' +
                'as e 将异常对象绑定到变量 e，可访问错误信息。',
            },
            {
              title: '多个 except 与 else',
              code: `def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        return "不能除以零"
    except TypeError:
        return "类型不匹配"
    else:
        return f"结果是 {result}"
    finally:
        print("运算结束")

print(safe_divide(10, 2))
print(safe_divide(10, 0))`,
              explanation:
                '多个 except 按顺序匹配，只执行第一个匹配的。' +
                'else 在 try 无异常时执行——把"成功逻辑"放在 else 中让代码更清晰。' +
                'finally 总是执行。这种结构让错误处理和正常逻辑分离。',
            },
            {
              title: '实际应用：安全转换',
              code: `def safe_int(s):
    """安全地将字符串转为整数"""
    try:
        return int(s)
    except (ValueError, TypeError):
        return None

print(safe_int("42"))
print(safe_int("abc"))
print(safe_int(None))`,
              explanation:
                'int("abc") 抛 ValueError，int(None) 抛 TypeError。' +
                'except (ValueError, TypeError) 用元组同时捕获多种异常。' +
                '返回 None 表示转换失败——调用方用 if result is None 判断。' +
                '这是处理用户输入的常见模式。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 try/except 捕获除以零异常，输出 "除零错误"。',
              starter_code: `try:
    1 / 0
except ___:
    print("除零错误")`,
              expected_output: '除零错误',
              hints: [
                '除以零的异常类型是 ZeroDivisionError',
                '把 ___ 替换为 ZeroDivisionError',
                '答案: ZeroDivisionError',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 try/except/finally，try 中打印 "执行"，finally 中打印 "清理"。',
              starter_code: `try:
    print("执行")
finally:
    print(___)`,
              expected_output: '执行\n清理',
              hints: [
                'finally 块中输出 "清理"',
                '把 ___ 替换为 "清理"',
                '答案: "清理"',
              ],
            },
          ],
          realWorldScenario:
            '异常处理是构建健壮系统的基石。Web 服务的每个请求都包裹在 try/except 中——' +
            '单个请求出错不影响其他请求。数据库操作中连接失败、查询超时都需要异常处理。' +
            'API 调用中网络超时用 try/except 捕获后重试。finally 确保数据库连接、文件句柄' +
            '等资源被正确释放——资源泄漏是生产环境最常见的隐患之一。',
        },
        {
          id: 'py-ch6-l2',
          title: '自定义异常',
          order: 1,
          content_md:
            '`raise` 主动抛出异常——当检测到业务逻辑错误时（如参数非法、状态不允许），' +
            '用 `raise ValueError("消息")` 通知调用方。良好的 raise 消息应清晰说明问题：' +
            '`raise ValueError(f"age 必须为正数，得到 {age}")` 比 `raise ValueError("错误")` 有用得多。' +
            '不要用异常处理替代正常的条件判断——异常应用于"异常"情况，而非正常流程控制。\n\n' +
            '自定义异常类继承 `Exception`（或其子类）：`class MyError(Exception): pass`。' +
            '可以添加自定义属性携带更多错误信息：`class ValidationError(Exception): ' +
            'def __init__(self, field, message): self.field = field; super().__init__(message)`。' +
            '自定义异常让错误处理更精确——调用方可以 `except ValidationError` 专门处理验证错误，' +
            '而与其他异常区分开。\n\n' +
            '异常层次设计：定义基异常类（如 AppError），子类按业务领域分类（如 AuthError、' +
            'DatabaseError、ValidationError）。这样调用方可以 `except AppError` 捕获所有业务异常，' +
            '或 `except AuthError` 精确捕获认证错误。良好的异常层次是 API 设计的重要部分。' +
            '异常类通常很简单——大多只需 __init__ 传递消息和上下文。\n\n' +
            '异常链（exception chaining）：`raise NewError from original` 保留原始异常信息。' +
            '这在"翻译异常"时有用——底层 IOError 翻译为业务层 ServiceError，但保留原始 traceback。' +
            '`raise ... from None` 显式抑制异常链。理解何时抛出、何时捕获、何时传递异常，' +
            '是写出可维护代码的关键技能。过度捕获（吞异常）比不捕获更危险——隐藏了真正的 bug。',
          examples: [
            {
              title: 'raise 主动抛出',
              code: `def set_age(age):
    if age < 0:
        raise ValueError(f"年龄不能为负数: {age}")
    if age > 150:
        raise ValueError(f"年龄不合理: {age}")
    return age

try:
    set_age(-5)
except ValueError as e:
    print(f"设置失败: {e}")`,
              explanation:
                'raise 主动抛出 ValueError，消息包含具体值便于调试。' +
                '调用方用 try/except 捕获并处理。raise 的消息应让调用方理解问题所在。' +
                '校验函数通常 raise 而非返回 None——让调用方明确知道是错误。',
            },
            {
              title: '自定义异常类',
              code: `class WithdrawError(Exception):
    """取款异常"""
    pass

class InsufficientFunds(WithdrawError):
    """余额不足"""
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(f"余额 {balance} 不足取 {amount}")

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFunds(balance, amount)
    return balance - amount

try:
    withdraw(100, 200)
except WithdrawError as e:
    print(e)`,
              explanation:
                '自定义异常层次: WithdrawError → InsufficientFunds。' +
                'InsufficientFunds 携带 balance 和 amount 属性，调用方可访问详情。' +
                'except WithdrawError 捕获所有取款相关异常（包括子类）——多态在异常中的应用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '当 age < 0 时 raise ValueError。捕获它并输出 "年龄错误"。',
              starter_code: `def check_age(age):
    if age < 0:
        raise ValueError("年龄不能为负")

try:
    check_age(-1)
except ___:
    print("年龄错误")`,
              expected_output: '年龄错误',
              hints: [
                '需要捕获 ValueError',
                '把 ___ 替换为 ValueError',
                '答案: ValueError',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义自定义异常 MyError 继承 Exception。raise MyError("出错了") 并捕获输出消息。',
              starter_code: `class MyError(___):
    pass

try:
    raise MyError("出错了")
except MyError as e:
    print(e)`,
              expected_output: '出错了',
              hints: [
                '自定义异常继承 Exception',
                '把 ___ 替换为 Exception',
                '答案: Exception',
              ],
            },
          ],
          realWorldScenario:
            '自定义异常是 API 设计的重要组成部分。Web API 用不同异常类型区分错误——' +
            'ValidationError（400）、AuthError（401）、NotFoundError（404）、ServerError（500）。' +
            '框架的中间件统一捕获业务异常并转换为 HTTP 响应码。' +
            '配置文件解析器（config file parser）用自定义异常报告解析错误——' +
            'ConfigParseError 携带行号和字段名，帮助用户快速定位配置问题。',
        },
        {
          id: 'py-ch6-l3',
          title: '文件读写',
          order: 2,
          content_md:
            '`open(路径, 模式)` 打开文件，返回文件对象。模式：`"r"` 读（默认）、`"w"` 写（覆盖）、' +
            '`"a"` 追加、`"b"` 二进制、`"+"` 读写。`"w"` 模式会清空文件——如果不希望覆盖用 `"a"`。' +
            '文件操作后必须关闭（`f.close()`），否则文件句柄泄漏。Pyodide 使用内存文件系统，' +
            '可以读写 `/tmp/` 目录下的文件用于练习。\n\n' +
            '读操作：`f.read()` 读取全部内容（大文件慎用），`f.readline()` 读一行，' +
            '`f.readlines()` 读所有行为列表。推荐用 `for line in f:` 逐行遍历——' +
            '内存友好，适合大文件。写操作：`f.write(字符串)` 写入（不自动换行），' +
            '`f.writelines(列表)` 批量写入。写入后 `f.flush()` 强制刷盘，`f.close()` 触发最终写入。\n\n' +
            '⚠️ 最常见的文件 bug：忘记关闭文件。`f = open("x"); f.read()` 后如果忘记 `f.close()`，' +
            '文件句柄会一直占用直到垃圾回收——在高并发场景下导致"too many open files"错误。' +
            '`with` 语句（下节详解）是解决方案——自动关闭文件，即使发生异常。' +
            '生产代码中**永远**用 `with open(...) as f:` 而非裸 `open()`。\n\n' +
            '文件编码：`open(路径, encoding="utf-8")` 显式指定编码。Windows 默认用 GBK，' +
            'Linux/Mac 默认 UTF-8——跨平台读写文件必须指定 encoding 否则乱码。' +
            'JSON/YAML/CSV 等格式处理时优先用对应的标准库模块（json、csv、yaml），' +
            '它们处理了编码、转义、类型转换等细节。Pyodide 环境中文件存储在内存中，' +
            '程序结束后消失——适合临时数据处理。',
          examples: [
            {
              title: '写入与读取文件',
              code: `# 写入文件
with open("/tmp/test.txt", "w", encoding="utf-8") as f:
    f.write("第一行\\n")
    f.write("第二行\\n")

# 读取文件
with open("/tmp/test.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)`,
              explanation:
                'with open() 自动管理文件关闭。write() 不自动换行，需手动加 \\n。' +
                'read() 读取全部内容。encoding="utf-8" 确保跨平台一致。' +
                'with 块结束后文件自动关闭——即使发生异常。',
            },
            {
              title: '逐行读取',
              code: `# 写入多行
with open("/tmp/lines.txt", "w") as f:
    f.write("苹果\\n香蕉\\n橘子\\n")

# 逐行读取（内存友好）
with open("/tmp/lines.txt", "r") as f:
    for line in f:
        print(line.strip())  # strip 去除换行符`,
              explanation:
                'for line in f 逐行遍历文件，不会一次性加载全部内容——适合大文件。' +
                '每行末尾包含 \\n，用 strip() 去除。' +
                '这是处理日志文件、CSV 文件的标准模式。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '将文字 "Python" 写入 /tmp/note.txt，再读取并输出。',
              starter_code: `with open("/tmp/note.txt", "w") as f:
    f.write("Python")
with open("/tmp/note.txt", "r") as f:
    print(f.___())`,
              expected_output: 'Python',
              hints: [
                '读取全部内容用 read()',
                '把 ___ 替换为 read',
                '答案: read',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 for line in f 逐行读取文件，统计行数。文件有 3 行。',
              starter_code: `with open("/tmp/data.txt", "w") as f:
    f.write("a\\nb\\nc\\n")

count = 0
with open("/tmp/data.txt", "r") as f:
    for line in f:
        count += ___
print(count)`,
              expected_output: '3',
              hints: [
                '每读一行 count 加 1',
                '把 ___ 替换为 1',
                '答案: 1',
              ],
            },
          ],
          realWorldScenario:
            '文件读写是配置文件解析器（config file parser）的基础。读取 INI/JSON/YAML 配置文件、' +
            '解析 CSV 数据、处理日志文件——都依赖文件操作。Web 应用的文件上传功能需要写入文件到磁盘。' +
            '数据处理流水线从文件读取数据、处理后写入结果文件。理解编码、逐行读取、' +
            '资源管理是处理文件的关键能力。',
        },
        {
          id: 'py-ch6-l4',
          title: '上下文管理器 with',
          order: 3,
          content_md:
            '`with` 语句是资源管理的最佳实践——自动获取和释放资源，即使发生异常也能正确清理。' +
            '最常见的用法是 `with open(...) as f:`——文件在 with 块结束时自动关闭。' +
            '这等价于 try/finally，但代码更简洁且不会忘记清理。with 是 Python 的"上下文管理器"协议。\n\n' +
            '上下文管理器协议：`__enter__` 进入时调用（返回资源），`__exit__` 退出时调用（清理资源）。' +
            '`__exit__(exc_type, exc_val, exc_tb)` 接收异常信息——返回 True 抑制异常，返回 False/None 传播异常。' +
            '自定义上下文管理器类只需实现这两个方法。`contextlib.contextmanager` 装饰器' +
            '用生成器简化上下文管理器的创建——yield 前是 __enter__，yield 后是 __exit__。\n\n' +
            'with 的优势：1) **防遗忘**——不需要手动 close；2) **异常安全**——即使异常也能清理；' +
            '3) **代码简洁**——减少样板代码。with 不限于文件——数据库连接、网络连接、' +
            '线程锁、临时目录等资源管理都适用。多个 with 可用逗号合并：' +
            '`with open("a") as fa, open("b") as fb:`。\n\n' +
            '`contextlib` 还提供 `suppress(异常类型)` 抑制特定异常、`redirect_stdout` 重定向输出、' +
            '`ExitStack` 动态管理多个上下文。理解上下文管理器协议是掌握 Python 资源管理的核心——' +
            '它是"RAII"（资源获取即初始化）思想在 Python 中的体现。生产代码中，' +
            '所有获取资源的操作都应放在 with 中——这是专业 Python 开发的基本准则。',
          examples: [
            {
              title: 'with open 自动关闭',
              code: `# with 自动管理文件关闭
with open("/tmp/demo.txt", "w") as f:
    f.write("hello")
# with 块结束后文件已关闭，无需 f.close()

with open("/tmp/demo.txt", "r") as f:
    print(f.read())
print("文件已自动关闭")`,
              explanation:
                'with open() 在块结束时自动调用 f.close()——即使块内发生异常。' +
                '这是文件操作的标准模式，生产代码中应始终用 with 而非裸 open。' +
                '多个文件可用: with open("a") as fa, open("b") as fb:',
            },
            {
              title: '自定义上下文管理器',
              code: `class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        self.elapsed = time.time() - self.start
        print(f"耗时 {self.elapsed:.4f}s")

with Timer():
    total = sum(range(100000))
print(f"结果: {total}")`,
              explanation:
                '__enter__ 记录开始时间，__exit__ 计算耗时并打印。' +
                'with Timer() 自动管理计时逻辑——代码简洁且异常安全。' +
                '这是上下文管理器的典型应用：获取/释放资源的模式。',
            },
            {
              title: 'contextlib.contextmanager',
              code: `from contextlib import contextmanager

@contextmanager
def open_db(connection_string):
    print(f"连接数据库: {connection_string}")
    conn = {"connection": connection_string}
    try:
        yield conn  # yield 的值赋给 as 变量
    finally:
        print("关闭数据库连接")

with open_db("postgres://localhost") as db:
    print(f"使用 {db['connection']}")`,
              explanation:
                '@contextmanager 用生成器简化上下文管理器。yield 前是 __enter__，yield 后是 __exit__。' +
                'try/finally 确保清理逻辑执行。比定义类更简洁，适合简单场景。' +
                'yield 的值通过 as 赋给变量——这里 db 接收 conn 字典。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 with open 写入 "data" 到 /tmp/x.txt，再读取输出。',
              starter_code: `with open("/tmp/x.txt", "w") as f:
    f.write("data")
with open("/tmp/x.txt", "r") as f:
    print(f.___())`,
              expected_output: 'data',
              hints: [
                '读取全部内容用 read()',
                '把 ___ 替换为 read',
                '答案: read',
              ],
            },
            {
              type: 'output-match',
              prompt: '自定义上下文管理器需要实现 __enter__ 和 ___ 两个方法。',
              starter_code: `class MyResource:
    def __enter__(self):
        print("获取资源")
        return self
    def ___(self, exc_type, exc_val, exc_tb):
        print("释放资源")
        return False

with MyResource():
    print("使用资源")`,
              expected_output: '获取资源\n使用资源\n释放资源',
              hints: [
                '退出方法名是 __exit__',
                '把 ___ 替换为 __exit__',
                '答案: __exit__',
              ],
            },
          ],
          realWorldScenario:
            '上下文管理器在资源管理中无处不在。数据库连接池用 with 确保连接归还池中；' +
            '文件锁用 with 自动释放锁；临时目录用 with 自动清理。' +
            'Django 的 transaction.atomic() 用 with 管理数据库事务——异常时自动回滚。' +
            '理解上下文管理器协议让你能构建自定义的资源管理模式，是写出可靠代码的关键技能。',
        },
      ],
    },
    // ================================================================
    // 第 7 章：模块与标准库
    // ================================================================
    {
      id: 'py-ch7',
      title: '模块与标准库',
      order: 6,
      lessons: [
        {
          id: 'py-ch7-l1',
          title: 'import 与模块',
          order: 0,
          content_md:
            '模块（module）是 Python 代码组织的基本单元——一个 .py 文件就是一个模块。' +
            '`import 模块名` 导入整个模块，用 `模块名.函数` 访问。' +
            '`from 模块 import 函数` 直接导入特定对象，使用时无需模块名前缀。' +
            '`from 模块 import *` 导入全部（不推荐——污染命名空间）。' +
            '`import 模块 as 别名` 给模块起短名（如 `import numpy as np`）。\n\n' +
            'Python 标准库极其丰富——"自带电池"（batteries included）是 Python 的设计哲学。' +
            '常用标准库：`math`（数学函数）、`random`（随机数）、`os`（操作系统）、`sys`（系统）、' +
            '`datetime`（日期时间）、`json`（JSON 处理）、`collections`（高级容器）、' +
            '`itertools`（迭代工具）、`functools`（函数工具）、`pathlib`（路径处理）。' +
            '优先用标准库而非第三方库——减少依赖、提高可移植性。\n\n' +
            '`__name__` 是模块的特殊属性。直接运行脚本时 `__name__ == "__main__"`，' +
            '被 import 时 `__name__` 是模块名。`if __name__ == "__main__":` 惯用法让模块' +
            '既能作为脚本运行，又能作为模块被导入——被导入时不执行测试代码。' +
            '这是 Python 模块的"双用途"模式，每个可执行脚本都应使用此模式。\n\n' +
            '包（package）是包含 `__init__.py` 的目录，用于组织多个模块。' +
            'Python 3.3+ 支持命名空间包（无 __init__.py）。`pip` 是第三方包管理器，' +
            '`pip install 包名` 安装，`pip list` 查看已安装，`requirements.txt` 记录依赖。' +
            '虚拟环境（venv）隔离项目依赖——每个项目有独立的包环境，避免版本冲突。',
          examples: [
            {
              title: 'import 标准库',
              code: `import math
from random import randint
import datetime as dt

# math 模块
print(math.pi)
print(math.sqrt(16))
# random 模块
print(randint(1, 10))
# datetime 模块
now = dt.datetime.now()
print(now.strftime("%Y-%m-%d"))`,
              explanation:
                'import math 导入整个模块，用 math.pi 访问。from random import randint 直接导入函数。' +
                'import datetime as dt 给模块起别名。不同导入方式的选择取决于使用频率和可读性。',
            },
            {
              title: '__name__ == "__main__"',
              code: `# 模块可以同时作为脚本和库使用
def greet(name):
    return f"Hello, {name}"

# 直接运行时执行，被 import 时不执行
if __name__ == "__main__":
    print(greet("World"))
    # 测试代码放在这里`,
              explanation:
                '直接运行此文件时 __name__ 是 "__main__"，greet("World") 执行。' +
                '被其他文件 import 时 __name__ 是模块名（如 "mymodule"），测试代码不执行。' +
                '这是 Python 的"双用途"模块模式——每个脚本都应使用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '导入 math 模块，输出 math.ceil(3.2) 的结果（向上取整）。',
              starter_code: `import math
print(math.___(3.2))`,
              expected_output: '4',
              hints: [
                '向上取整函数是 ceil',
                '把 ___ 替换为 ceil',
                '答案: ceil',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 from random import randint 生成 1-100 的随机数并输出。（固定种子后结果确定）',
              starter_code: `from random import randint, seed
seed(42)  # 固定种子使结果可复现
print(randint(1, ___))`,
              expected_output: '2',
              hints: [
                '上限是 100',
                '把 ___ 替换为 100',
                '答案: 100',
              ],
            },
          ],
          realWorldScenario:
            '模块化是构建大型 CLI 工具（building a CLI tool）的基础。将不同功能拆分到模块——' +
            'cli.py 处理命令行参数、commands.py 实现子命令、utils.py 放工具函数。' +
            '__name__ == "__main__" 让模块可测试可复用。标准库提供了大量开箱即用的功能——' +
            'math 计算、random 模拟、datetime 时间处理——无需安装第三方包。',
        },
        {
          id: 'py-ch7-l2',
          title: 'os / sys / pathlib',
          order: 1,
          content_md:
            '`os` 模块提供操作系统交互能力——文件路径操作、环境变量、进程管理等。' +
            '`os.path` 是路径操作子模块：`os.path.join()` 跨平台拼接路径（Windows 用 \\，' +
            'Linux 用 /），`os.path.exists()` 判断路径是否存在，`os.path.basename()` 获取文件名，' +
            '`os.path.dirname()` 获取目录名。`os.listdir()` 列出目录内容，`os.mkdir()` 创建目录。\n\n' +
            '`sys` 模块提供 Python 解释器交互能力——`sys.argv` 是命令行参数列表' +
            '（argv[0] 是脚本名），`sys.path` 是模块搜索路径，`sys.exit()` 退出程序。' +
            'CLI 工具通过 `sys.argv` 读取命令行参数，但更推荐用 `argparse` 模块' +
            '（支持参数解析、帮助生成、类型校验）。`sys.stdin/stdout/stderr` 是标准流。\n\n' +
            '`pathlib`（Python 3.4+）是面向对象的路径处理模块，比 os.path 更优雅。' +
            '`Path("dir/file.txt")` 创建路径对象，`p.exists()` 判断存在，`p.read_text()` 读取文件，' +
            '`p.parent` 获取父目录，`p.name` 获取文件名，`p.suffix` 获取扩展名，`p / "sub"` 拼接路径。' +
            'pathlib 是现代 Python 路径处理的推荐方式——代码更简洁、更直观。\n\n' +
            'Pyodide 环境中文件系统是内存虚拟的（Emscripten MEMFS），功能受限但基本的读写可用。' +
            '`os.environ` 访问环境变量，`os.getcwd()` 获取当前目录。' +
            '跨平台代码应始终用 `os.path.join()` 或 `pathlib.Path /` 拼接路径——' +
            '不要硬编码分隔符。`__file__` 是当前模块的文件路径，可用于定位资源文件。',
          examples: [
            {
              title: 'os.path 路径操作',
              code: `import os

path = "/tmp/project/main.py"
# 路径分解
print(os.path.dirname(path))    # /tmp/project
print(os.path.basename(path))   # main.py
print(os.path.splitext(path))   # ('/tmp/project/main', '.py')
# 路径拼接（跨平台）
joined = os.path.join("dir", "sub", "file.txt")
print(joined)`,
              explanation:
                'dirname 获取目录部分，basename 获取文件名，splitext 分离扩展名。' +
                'os.path.join 跨平台拼接——Windows 返回 "dir\\\\sub\\\\file.txt"，' +
                'Linux/Mac 返回 "dir/sub/file.txt"。始终用 join 而非字符串拼接。',
            },
            {
              title: 'pathlib 面向对象路径',
              code: `from pathlib import Path

p = Path("/tmp/project/main.py")
print(p.name)       # main.py
print(p.suffix)     # .py
print(p.parent)     # /tmp/project
# 路径拼接用 / 运算符
sub = p.parent / "utils" / "helper.py"
print(sub)`,
              explanation:
                'pathlib 用面向对象方式处理路径——p.name、p.suffix、p.parent 等属性更直观。' +
                'Path / "sub" 用 / 运算符拼接路径，比 os.path.join 更优雅。' +
                'pathlib 是现代 Python 路径处理的推荐方式。',
            },
            {
              title: 'sys.argv 命令行参数',
              code: `import sys

# 模拟命令行参数
sys.argv = ["script.py", "--name", "小明", "--count", "3"]
# argv[0] 是脚本名，argv[1:] 是实际参数
args = sys.argv[1:]
print(f"脚本名: {sys.argv[0]}")
print(f"参数: {args}")`,
              explanation:
                'sys.argv[0] 是脚本名，sys.argv[1:] 是实际命令行参数。' +
                '简单工具可直接解析 argv，复杂工具推荐用 argparse 模块——' +
                '支持参数类型、默认值、帮助文本自动生成。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 os.path.basename 获取 "/tmp/data.txt" 的文件名并输出。',
              starter_code: `import os
print(os.path.___("/tmp/data.txt"))`,
              expected_output: 'data.txt',
              hints: [
                '获取文件名的函数是 basename',
                '把 ___ 替换为 basename',
                '答案: basename',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 pathlib 创建 Path("/tmp/x.txt")，输出其 .suffix 属性（扩展名）。',
              starter_code: `from pathlib import Path
p = Path("/tmp/x.txt")
print(p.___)`,
              expected_output: '.txt',
              hints: [
                '扩展名属性是 suffix',
                '把 ___ 替换为 suffix',
                '答案: suffix',
              ],
            },
          ],
          realWorldScenario:
            'os 和 sys 是构建 CLI 工具（building a CLI tool）的核心模块。sys.argv 读取命令行参数，' +
            'os.path 处理配置文件路径，pathlib 管理项目文件结构。文件管理工具遍历目录、' +
            '批量重命名、查找特定扩展名文件——都依赖这些模块。跨平台应用必须用 os.path.join ' +
            '或 pathlib 处理路径分隔符差异，否则在 Windows/Linux 之间会出现路径 bug。',
        },
        {
          id: 'py-ch7-l3',
          title: 'datetime 与 json',
          order: 2,
          content_md:
            '`datetime` 模块处理日期和时间。`datetime.datetime.now()` 获取当前时间，' +
            '`datetime.date(year, month, day)` 创建日期对象，`datetime.timedelta` 表示时间差。' +
            '日期对象支持加减运算：`date + timedelta` 得到新日期。' +
            '`strftime`（string format time）格式化日期为字符串，`strptime` 解析字符串为日期对象。\n\n' +
            '常用格式化代码：`%Y` 四位年、`%m` 两位月、`%d` 两位日、`%H` 24 小时、`%M` 分钟、' +
            '`%S` 秒、`%A` 星期全名、`%B` 月全名。例如 `now.strftime("%Y-%m-%d %H:%M")` 输出 "2026-07-11 14:30"。' +
            'ISO 8601 标准格式用 `date.isoformat()`，输出 "2026-07-11"。\n\n' +
            '`json` 模块处理 JSON 数据——Web API 的通用数据格式。`json.dumps(obj)`（dump string）' +
            '把 Python 对象序列化为 JSON 字符串，`json.loads(s)`（load string）反序列化。' +
            '`json.dump(obj, f)` 写入文件，`json.load(f)` 从文件读取。' +
            'Python dict ↔ JSON object，list/tuple ↔ array，str ↔ string，int/float ↔ number，' +
            'True/False ↔ true/false，None ↔ null。\n\n' +
            'JSON 序列化时遇到不支持的类型（如 datetime、set）会抛 TypeError。' +
            '需要自定义 `default` 函数处理：`json.dumps(obj, default=str)` 把无法序列化的对象转为字符串。' +
            '配置文件解析（config file parser）常把 JSON 作为存储格式——比 ini 更灵活，比 YAML 无需额外依赖。',
          examples: [
            {
              title: '日期运算',
              code: `from datetime import date, timedelta

today = date(2026, 7, 11)
print("今天:", today.isoformat())
# 加 10 天
future = today + timedelta(days=10)
print("10 天后:", future.isoformat())
# 两个日期相差
diff = future - today
print("相差:", diff.days, "天")
# 格式化
print("格式:", today.strftime("%Y年%m月%d日"))`,
              explanation:
                'date 对象支持加减 timedelta。两个 date 相减得到 timedelta。' +
                'isoformat() 输出 ISO 标准格式，strftime 自定义格式。输出 4 行。',
            },
            {
              title: 'JSON 序列化与反序列化',
              code: `import json

# Python 字典转 JSON 字符串
data = {"name": "Alice", "age": 30, "scores": [90, 85, 95]}
s = json.dumps(data, ensure_ascii=False, indent=2)
print(s)
print("类型:", type(s).__name__)
# JSON 字符串转回 Python 对象
parsed = json.loads(s)
print("姓名:", parsed["name"])
print("平均分:", sum(parsed["scores"]) / len(parsed["scores"]))`,
              explanation:
                'dumps 把 dict 序列化为 JSON 字符串。ensure_ascii=False 保留中文，' +
                'indent=2 美化缩进。loads 反序列化回 dict。输出含 JSON 字符串和解析结果。',
            },
            {
              title: 'JSON 文件读写',
              code: `import json

config = {"host": "localhost", "port": 8080, "debug": True}
# 写入文件（模拟）
s = json.dumps(config)
print("写入:", s)
# 从字符串读取（模拟文件读）
loaded = json.loads(s)
print("端口:", loaded["port"])
print("调试:", loaded["debug"])`,
              explanation:
                '真实场景用 json.dump(obj, open("f.json","w")) 写文件，' +
                'json.load(open("f.json")) 读文件。这里用字符串模拟文件 IO。' +
                '注意 Python True/None 对应 JSON true/null。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 strftime 把 date(2026, 1, 1) 格式化为 "2026-01-01"。',
              starter_code: `from datetime import date
d = date(2026, 1, 1)
print(d.___("%Y-%m-%d"))`,
              expected_output: '2026-01-01',
              hints: [
                '格式化日期的方法是 strftime',
                '调用方式：d.strftime(格式串)',
                '答案: strftime',
              ],
            },
            {
              type: 'output-match',
              prompt: '把字典 {"a": 1} 序列化为 JSON 字符串并输出（用 ensure_ascii=False）。',
              starter_code: `import json
s = json.___({"a": 1}, ensure_ascii=False)
print(s)`,
              expected_output: '{"a": 1}',
              hints: [
                '序列化为字符串用 dumps',
                '注意 dumps 有个 s 后缀表示 string',
                '答案: dumps',
              ],
            },
            {
              type: 'output-match',
              prompt: '把 JSON 字符串 \'{"x": 10}\' 反序列化为字典，输出其中的值 10。',
              starter_code: `import json
obj = json.___('{"x": 10}')
print(obj["x"])`,
              expected_output: '10',
              hints: [
                '反序列化字符串用 loads',
                'loads 有个 s 后缀表示 string',
                '答案: loads',
              ],
            },
          ],
          realWorldScenario:
            'datetime 和 json 是配置文件解析（config file parser）的核心。' +
            'Web 应用的配置常用 JSON 存储：数据库连接、API 密钥、定时任务。' +
            '日志系统记录每条事件的时间戳用 datetime.now().isoformat()。' +
            '与 Web API 交互时，请求和响应都是 JSON——Python 用 json.loads 解析响应，' +
            'json.dumps 构造请求体。理解 datetime 的时区处理和 JSON 的嵌套结构是后端开发必备技能。',
        },
        {
          id: 'py-ch7-l4',
          title: 'collections 与 itertools',
          order: 3,
          content_md:
            '`collections` 模块提供高级容器类型，弥补内置 dict/list/set 的不足。' +
            '`Counter` 统计可哈希对象出现次数——词频统计（word count）一行搞定。' +
            '`defaultdict` 自动为缺失键创建默认值，避免 KeyError。' +
            '`OrderedDict` 保持插入顺序（Python 3.7+ 普通 dict 也保持顺序，但 OrderedDict 有 move_to_end 等方法）。' +
            '`deque`（双端队列）两端插入删除都是 O(1)，比 list 的 O(n) 高效。\n\n' +
            '`Counter` 的常用方法：`most_common(n)` 返回前 n 个高频元素，' +
            '`elements()` 返回所有元素迭代器，`+`/`-` 合并/差集 Counter。' +
            '`defaultdict(list)` 创建值是列表的字典，省去 `if key not in d: d[key] = []` 的判断。' +
            '`deque` 的 `appendleft`/`popleft` 实现栈和队列。\n\n' +
            '`itertools` 是迭代器工具库——高效处理序列而无需创建中间列表。' +
            '`itertools.chain(*iterables)` 串联多个可迭代对象。' +
            '`itertools.product(*iterables)` 笛卡尔积（替代多层嵌套循环）。' +
            '`itertools.combinations(iterable, r)` 组合（不放回），`permutations` 排列。' +
            '`itertools.groupby(iterable, key)` 分组（需先按 key 排序）。' +
            '`itertools.islice(iterable, start, stop)` 切片（对迭代器切片）。\n\n' +
            'itertools 的所有函数都返回迭代器——惰性求值，内存友好。' +
            '处理大数据流时，用 itertools 替代列表推导能节省大量内存。' +
            '数据处理管道（data processing pipeline）常组合多个 itertools 函数：' +
            '先 chain 串联多个数据源，再 groupby 分组，最后 islice 取前 N 条。',
          examples: [
            {
              title: 'Counter 词频统计',
              code: `from collections import Counter

text = "the cat sat on the mat the cat"
words = text.split()
counter = Counter(words)
print("词频:", dict(counter))
print("前 2 高频:", counter.most_common(2))
# Counter 支持算术
c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)
print("相加:", c1 + c2)
print("相减:", c1 - c2)`,
              explanation:
                "Counter(words) 统计每个词出现次数。most_common(2) 返回 [('the', 3), ('cat', 2)]。" +
                'Counter 支持加减运算。输出 4 行。',
            },
            {
              title: 'defaultdict 分组',
              code: `from collections import defaultdict

# 按首字母分组
words = ["apple", "ant", "banana", "berry", "cherry"]
groups = defaultdict(list)
for w in words:
    groups[w[0]].append(w)
print(dict(groups))
# 计数器模式
counts = defaultdict(int)
for w in words:
    counts[w[0]] += 1
print(dict(counts))`,
              explanation:
                'defaultdict(list) 访问不存在的键时自动创建空列表。' +
                'defaultdict(int) 默认值为 0（int() 返回 0）。输出分组和计数结果。',
            },
            {
              title: 'itertools 组合与笛卡尔积',
              code: `import itertools

# 笛卡尔积（替代嵌套循环）
for a, b in itertools.product([1, 2], ['x', 'y']):
    print(a, b)
print("---")
# 组合（不放回）
for combo in itertools.combinations([1, 2, 3, 4], 2):
    print(combo)
print("---")
# chain 串联
for x in itertools.chain([1, 2], [3, 4], [5]):
    print(x, end=" ")
print()`,
              explanation:
                "product([1,2], ['x','y']) 产生 (1,'x')(1,'y')(2,'x')(2,'y')。" +
                'combinations([1,2,3,4], 2) 产生 6 个两两组合。chain 串联多个可迭代对象。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Counter 统计列表 [1,2,2,3,3,3] 中 3 出现的次数并输出。',
              starter_code: `from collections import Counter
c = Counter([1, 2, 2, 3, 3, 3])
print(c[___])`,
              expected_output: '3',
              hints: [
                '要查询的键是数字 3',
                'Counter 像字典一样用 c[key] 访问',
                '答案: 3',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 itertools.combinations 求列表 [1,2,3] 的所有 2 元组组合数量。',
              starter_code: `import itertools
combos = list(itertools.___([1, 2, 3], 2))
print(len(combos))`,
              expected_output: '3',
              hints: [
                '组合函数是 combinations',
                '参数：(可迭代对象, 每组大小)',
                '答案: combinations',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 defaultdict(int) 统计 "aabbbc" 中字母 b 的出现次数。',
              starter_code: `from collections import defaultdict
d = defaultdict(int)
for ch in "aabbbc":
    d[ch] += 1
print(d[___])`,
              expected_output: '3',
              hints: [
                '要查询的键是字母 b',
                'defaultdict 像字典一样用 d[key] 访问',
                '答案: b（用引号包裹成 "b"）',
              ],
            },
          ],
          realWorldScenario:
            'collections 和 itertools 是数据处理管道（data processing pipeline）的核心工具。' +
            '日志分析用 Counter 统计错误类型频次，most_common(10) 找出 TOP 10 异常。' +
            '搜索引擎用 defaultdict(list) 建倒排索引——每个词映射到包含它的文档列表。' +
            'itertools.chain 高效串联多个数据流而不复制内存。' +
            '电商推荐系统用 itertools.product 生成"用户×商品"组合计算推荐分数。' +
            '掌握这些工具能让你写出既高效又简洁的数据处理代码。',
        },
      ],
    },
    // ================================================================
    // 第 8 章：进阶主题
    // ================================================================
    {
      id: 'py-ch8',
      title: '进阶主题',
      order: 7,
      lessons: [
        {
          id: 'py-ch8-l1',
          title: '生成器与迭代器',
          order: 0,
          content_md:
            '迭代器（iterator）是实现了 `__next__()` 方法的对象，每次调用返回下一个值，' +
            '没有更多值时抛 `StopIteration` 异常。所有可迭代对象（iterable）都能用 `iter()` 转为迭代器。' +
            '`for` 循环的本质：调用 `iter()` 获取迭代器，反复调用 `__next__()` 直到 StopIteration。' +
            '迭代器是惰性的——只在需要时才计算下一个值，节省内存。\n\n' +
            '生成器（generator）是创建迭代器的简便方式。函数中包含 `yield` 关键字就变成生成器函数，' +
            '调用它返回一个生成器对象（不执行函数体）。每次 `next()` 执行到 `yield` 暂停并返回值，' +
            '下次 `next()` 从暂停处继续。`yield` 保存函数的局部状态，让"暂停-恢复"成为可能。' +
            '这是 Python 协程的基础。\n\n' +
            '生成器表达式（generator expression）类似列表推导但用圆括号：`(x*x for x in range(10))`。' +
            '它返回生成器对象，惰性求值，内存占用 O(1)。处理大文件时，用生成器逐行读取而非一次性读入内存。' +
            '`sum(x for x in range(1000000))` 不会创建百万元素的列表——生成器逐个产生。\n\n' +
            '生成器的优势：处理无限序列（如斐波那契数列）、流式处理大文件、' +
            '管道式数据处理（每个生成器是一级处理）。劣势：只能遍历一次，无法随机访问，' +
            '没有 len()。需要多次遍历时用 `list(gen)` 物化或重新创建生成器。',
          examples: [
            {
              title: '生成器函数',
              code: `# 生成器：用 yield 产生值
def counter(max):
    n = 0
    while n < max:
        yield n
        n += 1

# 调用返回生成器对象（不执行函数体）
gen = counter(3)
print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 2
# next(gen) 会抛 StopIteration
# 用 for 循环更安全
for x in counter(5):
    print(x, end=" ")
print()`,
              explanation:
                'yield 让函数变成生成器。next() 执行到 yield 暂停并返回值。' +
                'for 循环自动处理 StopIteration。输出：0 1 2，然后 0 1 2 3 4。',
            },
            {
              title: '生成器表达式',
              code: `# 列表推导（立即创建列表）
squares_list = [x * x for x in range(5)]
print("列表:", squares_list, type(squares_list).__name__)

# 生成器表达式（惰性）
squares_gen = (x * x for x in range(5))
print("生成器:", squares_gen, type(squares_gen).__name__)
# 迭代时才计算
print("求和:", sum(squares_gen))
# 大数据场景：不创建中间列表
total = sum(x * x for x in range(100))
print("100 平方和:", total)`,
              explanation:
                '[] 创建列表（立即求值），() 创建生成器（惰性求值）。' +
                '生成器节省内存，但只能遍历一次。sum() 接受生成器。',
            },
            {
              title: '无限序列生成器',
              code: `# 斐波那契数列生成器（无限）
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# 用 islice 取前 N 个
from itertools import islice
fib_10 = list(islice(fibonacci(), 10))
print("前 10 项:", fib_10)

# 生成器管道：取前 5 个偶数
def evens(gen):
    for x in gen:
        if x % 2 == 0:
            yield x

fib_evens = list(islice(evens(fibonacci()), 5))
print("前 5 个偶数:", fib_evens)`,
              explanation:
                '生成器可表示无限序列——while True 不会卡死，因为 yield 暂停。' +
                'itertools.islice 限制取多少个。生成器可串联形成处理管道。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全生成器函数，使其 yield 1, 2, 3。用 for 循环输出 "1 2 3 "。',
              starter_code: `def gen():
    ___ x in [1, 2, 3]:
        yield x

for v in gen():
    print(v, end=" ")`,
              expected_output: '1 2 3 ',
              hints: [
                '遍历列表用 for 关键字',
                '语法：for 变量 in 可迭代对象',
                '答案: for',
              ],
            },
            {
              type: 'output-match',
              prompt: '用生成器表达式求 1 到 5 的平方和（即 1+4+9+16+25=55）。',
              starter_code: `total = sum(___ for x in range(1, 6))
print(total)`,
              expected_output: '55',
              hints: [
                'x 的平方是 x*x',
                '生成器表达式写法：表达式 for 变量 in 范围',
                '答案: x*x',
              ],
            },
            {
              type: 'output-match',
              prompt: '写一个生成器函数 count_up_to(n)，yield 从 1 到 n 的整数。调用 count_up_to(3) 并 list 化输出 [1, 2, 3]。',
              starter_code: `def count_up_to(n):
    i = 1
    while i <= n:
        ___ i
        i += 1

print(list(count_up_to(3)))`,
              expected_output: '[1, 2, 3]',
              hints: [
                '产生值用 yield 关键字',
                '语法：yield 值',
                '答案: yield',
              ],
            },
          ],
          realWorldScenario:
            '生成器是流式数据处理（data processing pipeline）的利器。' +
            '日志分析工具逐行读取 GB 级日志文件——用生成器 `for line in file` 而非 `file.readlines()`，' +
            '内存占用恒定。ETL 管道用多个生成器串联：读取 → 解析 → 过滤 → 聚合，每级都是惰性的。' +
            '数据库 ORM 用生成器实现惰性查询，只在迭代时才真正执行 SQL。' +
            '理解生成器是掌握 Python 异步编程（async/await）的基础——协程本质是可暂停的生成器。',
        },
        {
          id: 'py-ch8-l2',
          title: '装饰器进阶',
          order: 1,
          content_md:
            '装饰器（decorator）是接收函数返回函数的高阶函数。`@装饰器名` 语法糖等价于 `func = 装饰器名(func)`。' +
            '装饰器在不修改原函数代码的前提下增加功能——日志、计时、缓存、权限检查、重试。' +
            '这是"开放-封闭原则"的典型实现：对扩展开放（加装饰器），对修改封闭（不改原函数）。\n\n' +
            '基本装饰器模式：定义 `def decorator(func):` 返回 `wrapper`，wrapper 内调用 `func(*args, **kwargs)`。' +
            '务必用 `functools.wraps(func)` 装饰 wrapper——否则原函数的 `__name__`、`__doc__` 会被 wrapper 覆盖。' +
            '`*args, **kwargs` 让 wrapper 接受任意参数，保证装饰器通用。\n\n' +
            '带参数的装饰器需要三层嵌套：最外层接收参数，中层接收函数，内层是 wrapper。' +
            '例如 `@repeat(3)` 调用三次——`repeat(3)` 返回真正的装饰器，装饰器再包装函数。' +
            '类作为装饰器时实现 `__call__` 方法，可在 `__init__` 中保存参数和状态。\n\n' +
            '标准库常用装饰器：`@functools.lru_cache(maxsize=None)` 自动缓存函数结果（实现 cache），' +
            '递归/纯函数性能提升巨大。`@property` 把方法变为属性访问。`@staticmethod`/`@classmethod` ' +
            '定义静态/类方法。`@dataclass` 自动生成 __init__/__repr__。装饰器可叠加：' +
            '从下往上应用，从上往下执行。',
          examples: [
            {
              title: '计时装饰器',
              code: `import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = (time.time() - start) * 1000
        print(f"{func.__name__} 耗时 {elapsed:.2f} ms")
        return result
    return wrapper

@timer
def slow_sum(n):
    return sum(range(n))

print("结果:", slow_sum(1000000))`,
              explanation:
                '@timer 等价于 slow_sum = timer(slow_sum)。wrapper 记录执行时间。' +
                '@wraps 保留原函数名和文档。输出函数名、耗时和结果。',
            },
            {
              title: '带参数的装饰器',
              code: `from functools import wraps

def repeat(times):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = None
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("World")`,
              explanation:
                'repeat(3) 返回 decorator，decorator 包装 greet。调用 greet 实际执行 3 次。' +
                '三层嵌套：repeat（参数）→ decorator（函数）→ wrapper（执行）。输出 3 行 Hello。',
            },
            {
              title: 'lru_cache 缓存装饰器',
              code: `from functools import lru_cache
import time

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

# 第一次调用：计算
start = time.time()
print("fib(35) =", fib(35))
print(f"首次: {(time.time()-start)*1000:.1f} ms")

# 第二次：命中缓存
start = time.time()
print("fib(35) =", fib(35))
print(f"缓存: {(time.time()-start)*1000:.1f} ms")
print("缓存信息:", fib.cache_info())`,
              explanation:
                'lru_cache 自动缓存函数返回值。递归 fib 不加缓存是 O(2^n)，加缓存是 O(n)。' +
                'cache_info() 显示命中次数。第二次调用几乎瞬间返回。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全装饰器，让被装饰函数调用时打印 "调用前"。输出第一行应为 "调用前"。',
              starter_code: `def log(func):
    def wrapper(*args, **kwargs):
        print("调用前")
        return func(*args, **kwargs)
    return wrapper

@log
def hello():
    print("hello")

hello()`,
              expected_output: '调用前\nhello',
              hints: [
                '代码已完整，直接运行即可',
                '装饰器先打印"调用前"再调用原函数',
                '答案：无需修改，输出两行',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 @functools.lru_cache 装饰 fib 函数，求 fib(10) 的值。',
              starter_code: `from functools import lru_cache

@___(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

print(fib(10))`,
              expected_output: '55',
              hints: [
                'LRU 缓存装饰器名是 lru_cache',
                '从 functools 导入',
                '答案: lru_cache',
              ],
            },
            {
              type: 'output-match',
              prompt: '装饰器 repeat(times) 让函数执行 times 次。补全内层循环关键字。',
              starter_code: `def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(2)
def say():
    print("hi")

say()`,
              expected_output: 'hi\nhi',
              hints: [
                '代码已完整',
                'repeat(2) 让 say 执行 2 次',
                '答案：无需修改，输出两行 hi',
              ],
            },
          ],
          realWorldScenario:
            '装饰器是实现缓存（implementing a cache）和日志系统的标准方式。' +
            'Web 框架用装饰器注册路由（Flask @app.route）、检查登录（@login_required）、限流（@rate_limit）。' +
            '性能监控用 @timer 装饰所有关键函数，自动收集耗时数据。' +
            '@lru_cache 让纯函数获得免费加速——递归、数学计算、配置解析都能受益。' +
            '微服务架构中，重试装饰器（@retry(times=3)）让网络请求更健壮。' +
            '掌握装饰器让你能写出"非侵入式"的横切关注点代码，是 Python 工程化的核心技能。',
        },
        {
          id: 'py-ch8-l3',
          title: '类型注解 typing',
          order: 2,
          content_md:
            'Python 是动态类型语言，但 Python 3.5+ 支持类型注解（type hint）。' +
            '`def add(a: int, b: int) -> int:` 声明参数和返回值类型。' +
            '类型注解**不影响运行时**——解释器忽略它们，但 IDE（PyCharm、VS Code）和静态检查工具' +
            '（mypy、pyright）能用它们发现 bug。大型项目几乎都用类型注解提升代码可维护性。\n\n' +
            '`typing` 模块提供复合类型：`List[int]`（整数列表）、`Dict[str, int]`（键 str 值 int 的字典）、' +
            '`Tuple[int, str]`（固定结构的元组）、`Set[str]`（集合）、`Optional[int]` 等价于 `int | None`。' +
            'Python 3.9+ 可直接用 `list[int]`、`dict[str, int]`，3.10+ 可用 `int | str` 替代 `Union[int, str]`。\n\n' +
            '`Callable[[int, int], int]` 表示可调用对象（函数），参数 `[int, int]`，返回 `int`。' +
            '`Any` 表示任意类型（禁用类型检查），`TypeVar` 定义泛型类型变量。' +
            '`Generic[T]` 创建泛型类。`Literal["a", "b"]` 限制值为字面量之一。' +
            '`TypedDict` 给字典的每个键指定类型。\n\n' +
            '类型注解的最佳实践：公共 API 必须加注解，内部代码可省略（让推断工作）。' +
            '用 mypy 检查：`mypy --strict my_module.py`。类型注解让重构更安全——' +
            '改函数签名时 IDE 立即标出所有不匹配的调用处。Pydantic、FastAPI 等现代框架' +
            '深度依赖类型注解实现数据验证和 API 文档自动生成。',
          examples: [
            {
              title: '基本类型注解',
              code: `# 参数和返回值注解
def greet(name: str, times: int = 1) -> str:
    return (f"Hello, {name}! " * times).strip()

# 变量注解
age: int = 25
names: list[str] = ["Alice", "Bob"]
config: dict[str, int] = {"port": 8080}

result = greet("World", 2)
print(result)
print(f"年龄: {age}, 名单: {names}")`,
              explanation:
                '函数注解：参数名: 类型，-> 返回类型。变量注解：变量名: 类型 = 值。' +
                'Python 3.9+ 可直接用 list[str]、dict[str, int]。注解不影响运行。',
            },
            {
              title: 'Optional 与 Union',
              code: `from typing import Optional, Union

# Optional[int] 等价于 int | None
def find_user(user_id: int) -> Optional[str]:
    users = {1: "Alice", 2: "Bob"}
    return users.get(user_id)  # 找不到返回 None

# Union 多种类型
def process(data: Union[int, str]) -> str:
    if isinstance(data, int):
        return f"数字: {data}"
    return f"字符串: {data}"

print(find_user(1))
print(find_user(3))
print(process(42))
print(process("hello"))`,
              explanation:
                'Optional[T] 表示值可以是 T 或 None——适合可能失败的函数。' +
                'Union[A, B] 表示可以是 A 或 B。Python 3.10+ 可用 T | None 替代 Optional[T]。',
            },
            {
              title: 'Callable 与泛型',
              code: `from typing import Callable, TypeVar

T = TypeVar("T")

# 高阶函数：接收函数作为参数
def apply(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)

# 泛型函数
def first(items: list[T]) -> T:
    return items[0]

print(apply(lambda x, y: x + y, 3, 4))
print(apply(lambda x, y: x * y, 3, 4))
print(first([1, 2, 3]))
print(first(["a", "b"]))`,
              explanation:
                'Callable[[参数类型], 返回类型] 描述函数签名。' +
                'TypeVar("T") 创建泛型类型变量，让 first 能同时处理 list[int] 和 list[str]。' +
                '泛型让类型注解既精确又通用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全函数返回值类型注解，使函数声明返回 int。函数已返回 42。',
              starter_code: `def answer() -> ___:
    return 42

print(answer())`,
              expected_output: '42',
              hints: [
                '返回整数用 int 类型',
                '返回类型注解写在 -> 之后',
                '答案: int',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全参数类型注解，让 name 参数声明为 str 类型。函数输出 "Hi, Alice"。',
              starter_code: `def hi(name: ___) -> str:
    return f"Hi, {name}"

print(hi("Alice"))`,
              expected_output: 'Hi, Alice',
              hints: [
                '字符串类型是 str',
                '参数注解：参数名: 类型',
                '答案: str',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Optional 注解让函数可能返回 None。补全导入。',
              starter_code: `from typing import Optional

def find(key: str) -> Optional[int]:
    d = {"a": 1}
    return d.get(key)

print(find("a"))
print(find("b"))`,
              expected_output: '1\nNone',
              hints: [
                '代码已完整',
                'Optional[int] 表示返回 int 或 None',
                '答案：无需修改，输出两行',
              ],
            },
          ],
          realWorldScenario:
            '类型注解是现代 Python 工程的标配。FastAPI 用类型注解自动生成 OpenAPI 文档和请求数据验证。' +
            'Pydantic 用类型注解定义数据模型，自动校验 JSON 输入。' +
            '大型代码库（如 Instagram、Dropbox）用 mypy 严格检查类型，在重构时防止引入 bug。' +
            '配置文件解析（config file parser）用 TypedDict 给配置项指定类型，IDE 自动补全键名。' +
            '团队协作时类型注解是函数的"契约"——调用者无需读实现就知道参数和返回值的结构。' +
            '掌握类型注解是从"写脚本"到"写工程"的关键一步。',
        },
        {
          id: 'py-ch8-l4',
          title: 'async/await 异步编程',
          order: 3,
          content_md:
            'async/await 是 Python 3.5+ 引入的异步编程语法。`async def` 定义协程函数，' +
            '调用它返回协程对象（不立即执行）。`await` 暂停当前协程等待异步操作完成，' +
            '让出控制权给事件循环（event loop）执行其他协程。`asyncio.run(main())` 启动事件循环。' +
            '异步编程让单线程能高效处理数千个并发 IO 操作——网络请求、文件读写、数据库查询。\n\n' +
            '异步 vs 多线程：异步是协作式调度（协程主动 await 让出），多线程是抢占式（OS 调度）。' +
            'CPU 密集型任务用多进程（multiprocessing），IO 密集型用异步。' +
            '异步的优势：单线程无锁、上下文切换开销小、可轻松管理上万并发连接。' +
            '劣势：所有调用的库必须是异步的——同步库会阻塞事件循环。\n\n' +
            '`asyncio.gather(*coros)` 并发执行多个协程，等待全部完成。' +
            '`asyncio.create_task(coro)` 把协程包装为任务在后台运行。' +
            '`asyncio.sleep(n)` 是异步版 sleep——不阻塞线程，让其他协程运行。' +
            '`async with` 异步上下文管理器（如 async with aiohttp.ClientSession()）。' +
            '`async for` 异步迭代（如逐行读取网络流）。\n\n' +
            '现代异步生态：aiohttp（HTTP）、httpx（HTTP/2）、aiomysql/asyncpg（数据库）、' +
            'FastAPI（Web 框架）、uvicorn（ASGI 服务器）。异步编程是 Python 后端的高阶技能——' +
            '高并发 API、实时推送、爬虫都依赖它。理解 async/await 也帮助理解 JavaScript 的 Promise。',
          examples: [
            {
              title: '基本协程',
              code: `import asyncio

async def hello():
    print("开始")
    await asyncio.sleep(0.1)  # 模拟异步操作
    print("结束")

# 启动事件循环
asyncio.run(hello())`,
              explanation:
                'async def 定义协程，await 暂停等待。asyncio.run 是入口。' +
                'await asyncio.sleep 不阻塞线程——其他协程可在此期间运行。输出"开始"和"结束"。',
            },
            {
              title: '并发执行',
              code: `import asyncio
import time

async def fetch(name, delay):
    print(f"{name} 开始")
    await asyncio.sleep(delay)
    print(f"{name} 完成")
    return f"{name}结果"

async def main():
    start = time.time()
    # 并发执行 3 个协程
    results = await asyncio.gather(
        fetch("A", 0.3),
        fetch("B", 0.1),
        fetch("C", 0.2),
    )
    print("结果:", results)
    print(f"总耗时: {time.time()-start:.2f}s")

asyncio.run(main())`,
              explanation:
                'gather 并发执行所有协程。3 个任务分别 sleep 0.3/0.1/0.2s，' +
                '并发总耗时约 0.3s（取最慢的），而非 0.6s（串行累加）。' +
                'B 先完成（0.1s），C 次之（0.2s），A 最后（0.3s）。',
            },
            {
              title: '异步任务',
              code: `import asyncio

async def worker(name, queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print(f"{name} 处理 {item}")
        await asyncio.sleep(0.05)
        queue.task_done()
    print(f"{name} 退出")

async def main():
    q = asyncio.Queue()
    for i in range(3):
        await q.put(i)
    await q.put(None)  # 结束信号
    await q.put(None)
    # 启动 2 个 worker
    await asyncio.gather(worker("W1", q), worker("W2", q))

asyncio.run(main())`,
              explanation:
                'asyncio.Queue 是异步队列。多个 worker 协程从队列取任务处理。' +
                '这是生产者-消费者模式的异步实现，常用于并发任务调度。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全关键字，定义协程函数 my_coro。输出 "协程运行中"。',
              starter_code: `import asyncio

___ def my_coro():
    print("协程运行中")

asyncio.run(my_coro())`,
              expected_output: '协程运行中',
              hints: [
                '定义协程用 async def',
                'async 关键字放在 def 之前',
                '答案: async',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全 await 关键字，让协程等待 sleep 完成。输出 "等待结束"。',
              starter_code: `import asyncio

async def main():
    ___ asyncio.sleep(0.01)
    print("等待结束")

asyncio.run(main())`,
              expected_output: '等待结束',
              hints: [
                '等待异步操作用 await 关键字',
                'await 放在协程调用之前',
                '答案: await',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全 asyncio 启动事件循环的函数名。输出 "ok"。',
              starter_code: `import asyncio

async def main():
    print("ok")

asyncio.___(main())`,
              expected_output: 'ok',
              hints: [
                '启动事件循环的函数是 run',
                '调用方式：asyncio.run(协程)',
                '答案: run',
              ],
            },
          ],
          realWorldScenario:
            'async/await 是现代高并发 Web 服务的核心技术。FastAPI + uvicorn 用异步处理数千并发请求，' +
            '性能远超 Flask/Django 等同步框架。实时聊天、推送通知用 WebSocket（异步）维持大量长连接。' +
            '爬虫用 aiohttp 异步抓取，效率是 requests 的 10 倍以上。' +
            '数据处理管道（data processing pipeline）用异步 IO 交错计算和读写，提升吞吐量。' +
            '微服务调用链中，异步让一个请求同时发起多个下游调用而不阻塞——串行 300ms 变并行 100ms。' +
            '掌握 async/await 是从初级到高级 Python 开发者的分水岭。',
        },
      ],
    },
  ],
}