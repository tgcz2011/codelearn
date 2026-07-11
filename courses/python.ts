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
            '## 概念详解\n\n' +
            '`print()` 是 Python 最常用的内置函数，用于将文本和变量输出到标准输出（stdout）。' +
            '在 Pyodide 环境中，`print()` 的输出会被捕获并显示在终端区域。' +
            '几乎所有 Python 程序的第一行代码都涉及 `print()`——它是调试、日志、用户交互的基础工具。' +
            'Python 之所以将 `print` 设计为函数而非语句（Python 2 中是语句），是为了让接口更统一、' +
            '更易于扩展和替换（例如可以重定向到文件、字符串缓冲区）。\n\n' +
            'Python 中变量用 `=` 赋值，无需提前声明类型——这是"动态类型"的核心特征。' +
            '解释器会根据右侧的值自动推断变量类型：`x = 42` 推断为 `int`，`x = "hello"` 推断为 `str`。' +
            '与 C/Java 不同，Python 变量本质是"标签"——它指向内存中的对象，而非固定大小的内存盒子。' +
            '同一个变量可以重新指向不同类型的对象，但这通常不是好习惯，会让代码难以维护。\n\n' +
            '## 语法说明\n\n' +
            '`print()` 的完整签名如下：\n\n' +
            '```python\n' +
            'print(*objects, sep=" ", end="\\n", file=sys.stdout, flush=False)\n' +
            '```\n\n' +
            '| 参数 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `*objects` | 要输出的一个或多个对象（任意类型） | 无（必填） |\n' +
            '| `sep` | 多个参数之间的分隔符 | 空格 `" "` |\n' +
            '| `end` | 输出结尾的字符 | 换行符 `"\\n"` |\n' +
            '| `file` | 输出目标（文件对象） | `sys.stdout`（标准输出） |\n' +
            '| `flush` | 是否强制刷新输出流 | `False` |\n\n' +
            '变量命名规则：只能包含字母、数字、下划线，且不能以数字开头。变量名区分大小写——' +
            '`Name` 和 `name` 是两个不同的变量。推荐使用 `snake_case`（下划线命名）风格，' +
            '如 `user_name`、`total_count`。Python 的关键字（如 `if`、`for`、`class`）不能用作变量名。\n\n' +
            '## 字符串与引号\n\n' +
            '字符串可以用单引号 `' + "''" + '` 或双引号 `""` 包裹，两者完全等价。' +
            '当字符串内部需要包含引号时，可以选择另一种引号来避免转义：' +
            '`"It\'s ok"` 会报错，但 `"It\'s ok"` 或 `' + "'It's ok'" + '` 都可以。' +
            '多行字符串用三引号 `"""..."""` 包裹，常用于文档字符串（docstring）。' +
            '原始字符串（raw string）前缀 `r` 可忽略转义字符：`r"C:\\new\\folder"` 中的反斜杠不会被转义。\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：sep 与 end 参数**\n\n' +
            '```python\n' +
            '# sep 指定分隔符，默认是空格\n' +
            'print("2024", "01", "15", sep="-")   # 2024-01-15\n' +
            '# end 指定结尾字符，默认是换行符\n' +
            'print("加载中", end="...")\n' +
            'print("完成")  # 输出：加载中...完成\n' +
            '```\n\n' +
            '`sep` 参数在生成 CSV、日期格式化时特别有用。`end` 参数可用于制作进度条或同行追加输出。\n\n' +
            '**示例二：多重赋值与交换**\n\n' +
            '```python\n' +
            '# Python 支持多重赋值\n' +
            'a, b, c = 1, 2, 3\n' +
            'print(a, b, c)  # 1 2 3\n' +
            '# 交换两个变量（无需临时变量）\n' +
            'a, b = b, a\n' +
            'print(a, b)  # 2 1\n' +
            '```\n\n' +
            '这是 Python 的"元组打包/解包"特性，底层利用了元组。交换变量在排序算法中非常常见。\n\n' +
            '**示例三：输出到文件**\n\n' +
            '```python\n' +
            '# 将 print 输出重定向到文件\n' +
            'with open("log.txt", "w") as f:\n' +
            '    print("日志开始", file=f)\n' +
            '    print("处理完成", file=f)\n' +
            '```\n\n' +
            '通过 `file` 参数，`print()` 可以写入任何文件对象，这在日志记录中非常实用。\n\n' +
            '## 注意事项\n\n' +
            '1. **引号嵌套陷阱**：单引号字符串中的单引号必须转义 `' + "'It\\'s'" + '`，否则改用双引号 `' + "\"It's\"" + '` 更简洁。\n' +
            '2. **end 参数遗忘换行**：设置 `end=""` 后后续 print 会接在同一行，如果需要换行记得手动加 `\\n`。\n' +
            '3. **print 不能拼接非字符串**：`print("结果：" + 42)` 会报 `TypeError`，应改用逗号 `print("结果：", 42)` 或 f-string。\n' +
            '4. **变量命名规范**：避免使用内置名（如 `list`、`str`、`print`）作为变量名，这会覆盖内置函数导致后续报错。\n' +
            '5. **Pythonic 风格**：优先用 f-string（Python 3.6+）而非 `%` 或 `str.format()`，可读性最佳。\n\n' +
            '## 实际应用\n\n' +
            '`print()` 在实际开发中的典型场景包括：\n' +
            '- **CLI 工具**：输出命令执行结果、错误提示、帮助信息\n' +
            '- **调试**：快速查看变量值（生产代码建议用 `logging` 模块代替）\n' +
            '- **数据导出**：格式化输出 CSV、TSV 数据\n' +
            '- **进度显示**：结合 `end="\\r"` 实现单行刷新的进度条\n\n' +
            '## 扩展知识\n\n' +
            'Python 的设计哲学强调"可读性优先"——代码是写给人看的。' +
            '输入 `import this` 可以看到 Python 之禅（The Zen of Python），其中包含 19 条设计格言。' +
            '简洁的语法、强制缩进、丰富的内置函数让 Python 成为最适合初学者的语言之一。' +
            '后续学习中，`print()` 会逐渐被 `logging` 模块（带日志级别）替代，但作为入门第一步，' +
            '掌握 `print()` 和变量赋值是所有 Python 编程的基础。',
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
            '## 概念详解\n\n' +
            'Python 有四个最常用的内置数据类型：`int`（整数）、`float`（浮点数）、`str`（字符串）、`bool`（布尔值）。' +
            '理解数据类型是编程的第一步——类型决定了变量能做什么操作、占多少内存、如何与其他值交互。' +
            'Python 是动态类型语言，变量类型在运行时确定，无需在代码中显式声明。这与 Go、Java 等静态类型语言形成对比——' +
            '动态类型更灵活但错误更晚暴露，静态类型更安全但代码更冗长。Python 3.5+ 引入了类型注解（type hints），' +
            '可以在保持动态类型的同时获得静态检查的好处。\n\n' +
            '## 各类型详解\n\n' +
            '- **`int`（整数）**：没有大小限制（不像 C/Java 受固定位数限制），可以表示任意大的整数。' +
            'Python 3 中 `int` 自动处理大数运算，如 `2 ** 100` 会得到精确结果。支持二进制（`0b1010`）、' +
            '八进制（`0o12`）、十六进制（`0xFF`）字面量，可用下划线分组提升可读性：`1_000_000`。\n' +
            '- **`float`（浮点数）**：64 位双精度浮点数，遵循 IEEE 754 标准，存在精度问题：' +
            '`0.1 + 0.2` 不等于 `0.3` 而等于 `0.30000000000000004`。科学计数法写作 `1.5e3`（即 1500.0）。' +
            '特殊值：`float("inf")`（无穷大）、`float("-inf")`（负无穷）、`float("nan")`（非数字）。\n' +
            '- **`str`（字符串）**：Unicode 文本序列，下一节课将深入讲解。\n' +
            '- **`bool`（布尔值）**：只有两个值 `True` 和 `False`（注意首字母大写）。' +
            '`bool` 实际上是 `int` 的子类——`True == 1`、`False == 0`，这意味着 `True + True == 2`。\n\n' +
            '## 类型检查函数\n\n' +
            '| 函数 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `type(x)` | 返回变量的类型对象 | `type(42)` → `<class \'int\'>` |\n' +
            '| `isinstance(x, T)` | 判断 x 是否为 T 类型（支持继承） | `isinstance(True, int)` → `True` |\n' +
            '| `id(x)` | 返回对象的内存地址（标识） | `id(x)` → 数字 |\n' +
            '| `dir(x)` | 列出对象的所有属性和方法 | `dir(str)` |\n\n' +
            '`isinstance()` 比 `type() ==` 更推荐，因为它支持继承判断——`isinstance(True, int)` 返回 `True`，' +
            '而 `type(True) == int` 返回 `False`。`isinstance` 还支持元组形式：`isinstance(x, (int, float))`。\n\n' +
            '## 类型转换\n\n' +
            '类型转换（type casting）用 `int()`、`float()`、`str()`、`bool()` 等内置函数：\n\n' +
            '```python\n' +
            '# 字符串转数字\n' +
            'n = int("42")       # 42\n' +
            'f = float("3.14")   # 3.14\n' +
            '# 数字转字符串\n' +
            's = str(42)         # "42"\n' +
            '# 布尔转换\n' +
            'print(bool(0))      # False\n' +
            'print(bool(""))     # False\n' +
            'print(bool("hello")) # True\n' +
            '```\n\n' +
            '转换失败会抛出 `ValueError`：`int("abc")` 会报错。`int("3.14")` 也会报错——' +
            '需要先用 `float()` 再用 `int()`。`int(3.99)` 直接截断为 `3`（不是四舍五入）。\n\n' +
            '## 布尔转换规则（falsy 值）\n\n' +
            '| 值 | bool 结果 | 说明 |\n' +
            '|----|----------|------|\n' +
            '| `0`, `0.0` | `False` | 零值 |\n' +
            '| `""`, `\'\'` | `False` | 空字符串 |\n' +
            '| `None` | `False` | 空值 |\n' +
            '| `[]`, `{}`, `()` | `False` | 空容器 |\n' +
            '| 其余 | `True` | 非空/非零值 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：浮点数精度问题与解决方案**\n\n' +
            '```python\n' +
            '# 浮点数精度问题演示\n' +
            'print(0.1 + 0.2)                    # 0.30000000000000004\n' +
            '# 方案一：用 round() 四舍五入\n' +
            'print(round(0.1 + 0.2, 2))          # 0.3\n' +
            '# 方案二：用 decimal 模块（金融场景推荐）\n' +
            'from decimal import Decimal\n' +
            'print(Decimal("0.1") + Decimal("0.2"))  # 0.3\n' +
            '# 整数运算无精度问题\n' +
            'print(1 + 2 * 3)                    # 7\n' +
            '```\n\n' +
            '**示例二：大整数运算**\n\n' +
            '```python\n' +
            '# Python int 无大小限制\n' +
            'big = 2 ** 100\n' +
            'print(big)  # 1267650600228229401496703205376\n' +
            '# 下划线分组提升可读性\n' +
            'population = 1_400_000_000\n' +
            'print(population)  # 1400000000\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **浮点数比较**：永远不要用 `==` 比较浮点数，应使用 `abs(a - b) < 1e-9` 或 `math.isclose()`。\n' +
            '2. **input() 返回字符串**：`input()` 返回的永远是字符串，即使用户输入数字——需要用 `int()` 转换后才能做数学运算。\n' +
            '3. **int() 截断而非四舍五入**：`int(3.99)` 得到 `3`，如需四舍五入用 `round(3.99)` 得到 `4`。\n' +
            '4. **bool 是 int 子类**：`True + 1 == 2`，在需要整数的场景中 True 会被当作 1。\n' +
            '5. **动态类型陷阱**：`x = 42; x = "hello"` 合法但不推荐，会让代码难以维护。建议用类型注解：`x: int = 42`。\n\n' +
            '## 实际应用\n\n' +
            '在数据处理流水线中，正确理解数据类型是避免运行时错误的关键。' +
            '从 CSV 读取的数据默认都是字符串，需要用 `int()`/`float()` 转换后才能做数值计算。' +
            'API 返回的 JSON 数据同样需要类型转换和校验——`age` 字段可能是字符串 `"25"` 而非整数 `25`。' +
            '金融计算中必须用 `decimal` 模块或以"分"为单位用整数计算来规避浮点精度问题。\n\n' +
            '## 扩展知识\n\n' +
            'Python 还有其他内置类型：`complex`（复数，如 `1+2j`）、`NoneType`（`None`，表示"没有值"）、' +
            '`bytes`（字节序列）、`range`（整数序列）。Python 3.5+ 的类型注解（type hints）允许你写出' +
            '`def add(a: int, b: int) -> int:` 这样的签名，配合 `mypy` 工具可以做静态类型检查，' +
            '在大型项目中提升代码可靠性和可维护性。类型系统是编程语言的根基，后续学习函数参数、' +
            '返回值、数据结构都离不开它。',
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
            '## 概念详解\n\n' +
            '字符串是 Python 中最常用的数据类型之一，用于表示文本数据。Python 字符串是 **Unicode** 序列，' +
            '这意味着它可以无缝处理中文、日文、emoji 等多语言字符。Python 字符串是**不可变**的——' +
            '任何修改操作（如 `upper()`、`replace()`）都会返回新字符串，原字符串不变。' +
            '这一设计让字符串可以安全地在多处共享（如作为字典键），但也意味着频繁拼接大字符串时性能较差（应用 `' +
            '"".join()` 而非 `+`）。\n\n' +
            '## 索引与切片\n\n' +
            '字符串支持索引和切片。索引从 0 开始，负索引从末尾倒数（`s[-1]` 是最后一个字符）。' +
            '切片语法 `s[起:止:步]`，省略起默认 0，省略止默认末尾，省略步默认 1。' +
            '`s[::-1]` 是反转字符串的惯用写法。切片是 Python 最强大的特性之一，' +
            '同样适用于列表、元组等序列类型。切片不会越界报错——`s[0:100]` 对短字符串也安全。\n\n' +
            '```python\n' +
            's = "Hello, Python"\n' +
            'print(s[0])       # H —— 正索引\n' +
            'print(s[-1])      # n —— 负索引（最后一个字符）\n' +
            'print(s[0:5])     # Hello —— [0,5) 区间\n' +
            'print(s[7:])      # Python —— 从索引 7 到末尾\n' +
            'print(s[:5])      # Hello —— 从开头到索引 4\n' +
            'print(s[::2])     # Hlo yhn —— 步长 2\n' +
            'print(s[::-1])    # 反转字符串\n' +
            '```\n\n' +
            '## 常用字符串方法\n\n' +
            '| 方法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `upper()` / `lower()` | 转大写/小写 | `"Ab".upper()` → `"AB"` |\n' +
            '| `strip()` / `lstrip()` / `rstrip()` | 去首尾/左/右空白 | `" hi ".strip()` → `"hi"` |\n' +
            '| `split(sep, maxsplit)` | 按分隔符分割为列表 | `"a,b,c".split(",")` → `["a","b","c"]` |\n' +
            '| `join(iterable)` | 将列表合并为字符串 | `",".join(["a","b"])` → `"a,b"` |\n' +
            '| `replace(old, new, count)` | 替换子串 | `"aaa".replace("a","b")` → `"bbb"` |\n' +
            '| `find(sub)` / `index(sub)` | 查找子串位置 | `"abc".find("b")` → `1` |\n' +
            '| `startswith()` / `endswith()` | 判断首尾 | `"abc".startswith("a")` → `True` |\n' +
            '| `count(sub)` | 统计子串出现次数 | `"aab".count("a")` → `2` |\n' +
            '| `zfill(width)` | 左侧填零到指定宽度 | `"5".zfill(3)` → `"005"` |\n' +
            '| `splitlines()` | 按行分割 | `"a\\nb".splitlines()` → `["a","b"]` |\n\n' +
            '`find()` 与 `index()` 的区别：`find()` 找不到返回 `-1`，`index()` 找不到抛出 `ValueError`。' +
            '链式调用（如 `s.strip().lower()`）是常见模式——前一个方法的返回值作为后一个方法的调用者。\n\n' +
            '## 字符串格式化\n\n' +
            'Python 有三种字符串格式化方式：\n\n' +
            '```python\n' +
            'name = "小明"\n' +
            'age = 20\n' +
            '# 方式一：f-string（推荐，Python 3.6+）\n' +
            'print(f"{name}今年{age}岁")\n' +
            '# 方式二：str.format()\n' +
            'print("{}今年{}岁".format(name, age))\n' +
            '# 方式三：% 格式化（旧风格，不推荐）\n' +
            'print("%s今年%d岁" % (name, age))\n' +
            '```\n\n' +
            'f-string 还支持表达式和格式说明：`f"{3.14159:.2f}"` → `"3.14"`，`f"{255:x}"` → `"ff"`（十六进制）。\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：split 与 join 的配合**\n\n' +
            '```python\n' +
            '# CSV 行解析\n' +
            'line = "小明,20,1.75"\n' +
            'fields = line.split(",")\n' +
            'print(fields)  # ["小明", "20", "1.75"]\n' +
            '# 重新拼接\n' +
            'print(" | ".join(fields))  # 小明 | 20 | 1.75\n' +
            '```\n\n' +
            '**示例二：回文判断**\n\n' +
            '```python\n' +
            '# 回文判断是经典面试题\n' +
            's = "level"\n' +
            'print(s == s[::-1])  # True\n' +
            '# 忽略大小写和空格的回文判断\n' +
            's2 = "A man a plan a canal Panama"\n' +
            'cleaned = s2.lower().replace(" ", "")\n' +
            'print(cleaned == cleaned[::-1])  # True\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **字符串不可变**：`s.upper()` 不会修改 `s`，必须 `s = s.upper()` 接收返回值。\n' +
            '2. **拼接性能**：循环中用 `+` 拼接字符串是 O(n²) 操作，应改用 `"".join(list)` 一次性拼接。\n' +
            '3. **find vs index**：`find` 返回 -1 表示未找到，`index` 抛出 ValueError——根据是否需要异常来选择。\n' +
            '4. **strip 只去首尾**：`strip()` 只去除首尾空白，中间的空白不受影响。如需去除所有空白用 `replace(" ", "")`。\n' +
            '5. **编码问题**：Python 3 字符串是 Unicode，文件读写时注意指定编码 `open(f, encoding="utf-8")`。\n\n' +
            '## 实际应用\n\n' +
            '字符串操作在文本处理、日志分析、Web 爬虫数据清洗等场景中无处不在。' +
            '典型场景包括：解析 CSV/TSV 数据、清洗用户输入（去空格、转小写）、' +
            '提取日志中的关键信息、URL 编码解码、模板渲染等。' +
            '掌握字符串方法是 Python 程序员的必备技能。\n\n' +
            '## 扩展知识\n\n' +
            'Python 还支持正则表达式（`re` 模块）进行复杂模式匹配和替换。' +
            '例如 `re.findall(r"\\d+", "a1b22c333")` 提取所有数字 → `["1", "22", "333"]`。' +
            '字符串的 `format_map()` 方法可以配合字典做模板填充。' +
            '对于大量文本处理，`io.StringIO` 提供了内存中的字符串流，类似文件操作接口。',
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
            '## 概念详解\n\n' +
            '`input()` 函数从标准输入读取一行文本（返回字符串）。' +
            '注意：Pyodide 环境是非交互式的，无法实时接收用户输入，因此在线练习中通常用预设变量代替 `input()`。' +
            '在本地 Python 环境中，`input("提示信息")` 会显示提示并等待用户输入。' +
            '读取数字时需手动转换：`age = int(input("年龄: "))`。`input()` 返回值永远是字符串，' +
            '即使用户输入数字 `42`，得到的也是 `"42"`——这是初学者最常犯的错误之一。\n\n' +
            '格式化输出是将变量值嵌入字符串的过程。Python 有三种格式化字符串的方式，' +
            '理解它们的差异和适用场景是编写可读代码的关键。\n\n' +
            '## 三种格式化方式对比\n\n' +
            '| 方式 | 语法 | 推荐度 | 说明 |\n' +
            '|------|------|--------|------|\n' +
            '| f-string | `f"姓名: {name}"` | ⭐⭐⭐ | Python 3.6+，最推荐 |\n' +
            '| str.format() | `"姓名: {}".format(name)` | ⭐⭐ | 旧代码常见 |\n' +
            '| % 格式化 | `"姓名: %s" % name` | ⭐ | C 风格，已过时 |\n\n' +
            '**f-string**（Python 3.6+）是最推荐的：`f"姓名: {name}"`，' +
            '在 `{}` 中直接嵌入变量或表达式，支持格式说明符 `{value:.2f}` 保留两位小数。' +
            'f-string 可读性最好、性能最优，应作为首选。f-string 中的 `{}` 可以放任意表达式：' +
            '`f"{2 + 3}"`、`f"{name.upper()}"`、`f"{len(name)}"` 都合法。\n\n' +
            '第二种是 `str.format()` 方法：`"姓名: {}".format(name)`，用 `{}` 占位，参数按顺序填入。' +
            '支持 `{0}`、`{name}` 等索引和命名引用：`"{0}今年{age}岁".format(name, age=20)`。' +
            '这种方式在旧代码中常见，新项目建议用 f-string。\n\n' +
            '第三种是 `%` 格式化（C 风格）：`"姓名: %s" % name`，现已不推荐，了解即可。' +
            '常用占位符：`%s`（字符串）、`%d`（整数）、`%f`（浮点数）、`%x`（十六进制）。\n\n' +
            '## 格式说明符详解\n\n' +
            '```python\n' +
            'pi = 3.14159\n' +
            'num = 42\n' +
            'ratio = 0.875\n' +
            '# 精度控制\n' +
            'print(f"{pi:.4f}")    # 3.1416 —— 保留 4 位小数\n' +
            '# 对齐控制\n' +
            'print(f"{num:>10}")   #         42 —— 右对齐，宽度 10\n' +
            'print(f"{num:<10}")   # 42         —— 左对齐\n' +
            'print(f"{num:^10}")   #     42     —— 居中\n' +
            '# 补零\n' +
            'print(f"{num:08d}")   # 00000042 —— 补零到 8 位\n' +
            '# 百分比\n' +
            'print(f"{ratio:.1%}") # 87.5% —— 自动乘 100 加 %\n' +
            '# 千分位分隔符\n' +
            'print(f"{1000000:,}") # 1,000,000\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：input 读取用户输入**\n\n' +
            '```python\n' +
            '# 本地环境下的输入处理\n' +
            'name = input("请输入姓名: ")\n' +
            'age = int(input("请输入年龄: "))  # 必须转换类型\n' +
            'print(f"你好 {name}，明年你 {age + 1} 岁")\n' +
            '```\n\n' +
            '**示例二：生成对齐的表格输出**\n\n' +
            '```python\n' +
            '# 用格式化输出对齐表格\n' +
            'students = [("小明", 90), ("小红", 85), ("小刚", 95)]\n' +
            'print(f"{\'姓名\':<6}{\'成绩\':>6}")  # 表头\n' +
            'for name, score in students:\n' +
            '    print(f"{name:<6}{score:>6}")\n' +
            '# 输出：\n' +
            '# 姓名    成绩\n' +
            '# 小明      90\n' +
            '# 小红      85\n' +
            '# 小刚      95\n' +
            '```\n\n' +
            '**示例三：多变量格式化**\n\n' +
            '```python\n' +
            '# f-string 中嵌入复杂表达式\n' +
            'items = ["苹果", "香蕉", "橙子"]\n' +
            'print(f"购物清单（共 {len(items)} 项）：{\', \'.join(items)}")\n' +
            '# 输出：购物清单（共 3 项）：苹果, 香蕉, 橙子\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **input() 返回字符串**：`int(input())` 前必须确保用户输入的是有效数字，否则会抛出 `ValueError`。生产代码应加 try/except。\n' +
            '2. **f-string 中的引号**：f-string 用双引号时，内部 `{}` 中的字符串用单引号，反之亦然，避免引号冲突。\n' +
            '3. **% 格式化的元组陷阱**：`"%s" % (name,)` 单元素需要逗号，否则 `name` 会被当作元组解包。\n' +
            '4. **大括号转义**：f-string 中要输出字面 `{}`，需写 `{{}}`：`f"{{not a placeholder}}"` → `{not a placeholder}`。\n' +
            '5. **Python 3.8+ 调试语法**：`f"{name=}"` 会输出 `name=小明`，调试时非常方便。\n\n' +
            '## 实际应用\n\n' +
            '格式化输出在生成报表、日志记录、用户提示中无处不在。' +
            '例如生成对齐的数据表格、格式化金额（`f"{price:,.2f}元"` → `1,234.50元`）、' +
            '输出百分比进度、制作终端 UI。掌握格式化输出能生成专业的报表和日志。\n\n' +
            '## 扩展知识\n\n' +
            'Python 3.12 进一步增强了 f-string，允许内部使用与外部相同的引号（不再需要引号嵌套）。' +
            '`format()` 函数也可单独使用：`format(3.14159, ".2f")` → `"3.14"`。' +
            '对于复杂的模板需求，`string.Template` 提供了 `$var` 风格的占位符，适合用户提供的模板（更安全）。' +
            '生产环境中的日志推荐用 `logging` 模块，它支持 `%(name)s` 风格的延迟格式化，性能更好。',
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
            '## 概念详解\n\n' +
            '条件语句是程序逻辑的基石，让程序能够根据不同情况执行不同代码。' +
            'Python 用 `if 条件:` 后跟缩进代码块表示条件分支，' +
            '缩进必须是 4 个空格（PEP 8 规范），不能用 Tab 混合空格。' +
            '`elif` 是 "else if" 的缩写，可以有多个；`else` 最多一个且可省略。' +
            '条件表达式的结果必须是布尔值，但 Python 会自动进行"真值测试"（truthiness）。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'if 条件1:\n' +
            '    # 条件1为真时执行\n' +
            'elif 条件2:\n' +
            '    # 条件1为假、条件2为真时执行\n' +
            'else:\n' +
            '    # 所有条件都为假时执行\n' +
            '```\n\n' +
            '## 运算符一览\n\n' +
            '| 类别 | 运算符 | 说明 |\n' +
            '|------|--------|------|\n' +
            '| 比较 | `==` `!=` `>` `<` `>=` `<=` | 比较两个值 |\n' +
            '| 逻辑 | `and` `or` `not` | 与/或/非（关键字而非符号） |\n' +
            '| 身份 | `is` `is not` | 判断是否同一对象 |\n' +
            '| 成员 | `in` `not in` | 判断是否在容器中 |\n' +
            '| 链式 | `1 <= x <= 10` | Python 独有的简洁写法 |\n\n' +
            '`and` 和 `or` 是短路求值：`a and b` 中若 `a` 为 False 则不评估 `b`。' +
            '链式比较 `1 <= x <= 10` 等价于 `1 <= x and x <= 10`，但更简洁可读。\n\n' +
            '## 真值测试规则\n\n' +
            '| 值 | bool 结果 | 说明 |\n' +
            '|----|----------|------|\n' +
            '| `0`, `0.0`, `False` | `False` | 零值 |\n' +
            '| `""`, `\'\'` | `False` | 空字符串 |\n' +
            '| `None` | `False` | 空值 |\n' +
            '| `[]`, `{}`, `()` | `False` | 空容器 |\n' +
            '| 其余 | `True` | 非空/非零值 |\n\n' +
            '这让你可以写 `if items:` 而非 `if len(items) > 0:`，更 Pythonic。\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：成绩等级判断**\n\n' +
            '```python\n' +
            'score = 85\n' +
            'if score >= 90:\n' +
            '    grade = "优秀"\n' +
            'elif score >= 80:\n' +
            '    grade = "良好"\n' +
            'elif score >= 60:\n' +
            '    grade = "及格"\n' +
            'else:\n' +
            '    grade = "不及格"\n' +
            'print(f"成绩：{score}，等级：{grade}")\n' +
            '```\n\n' +
            '**示例二：三元运算符与卫语句**\n\n' +
            '```python\n' +
            '# 三元运算符（条件表达式）\n' +
            'age = 20\n' +
            'status = "成年" if age >= 18 else "未成年"\n' +
            'print(status)  # 成年\n' +
            '\n' +
            '# 卫语句（guard clause）——提前返回\n' +
            'def process(user):\n' +
            '    if not user:        # 异常情况先返回\n' +
            '        return None\n' +
            '    if not user.active:\n' +
            '        return None\n' +
            '    # 主逻辑保持扁平\n' +
            '    return user.name\n' +
            '```\n\n' +
            '**示例三：短路求值与链式比较**\n\n' +
            '```python\n' +
            '# 短路求值避免错误\n' +
            'x = 0\n' +
            'if x != 0 and 10 / x > 1:  # x=0 时不会执行除法\n' +
            '    print("安全")\n' +
            '\n' +
            '# 链式比较\n' +
            'score = 75\n' +
            'if 60 <= score <= 100:\n' +
            '    print("有效分数")\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **缩进必须一致**：同一代码块必须用相同数量的空格缩进，Tab 和空格不能混用。\n' +
            '2. **== vs is**：`==` 比较值是否相等，`is` 比较是否同一对象。`None` 判断用 `is None` 而非 `== None`。\n' +
            '3. **空代码块**：`if` 不能为空——不需要执行任何操作时用 `pass` 占位。\n' +
            '4. **避免过深嵌套**：超过 3 层嵌套通常意味着应该重构（提取函数或用卫语句提前返回）。\n' +
            '5. **浮点数比较**：`0.1 + 0.2 == 0.3` 返回 `False`，浮点数比较用 `math.isclose()`。\n\n' +
            '## 实际应用\n\n' +
            '条件判断在业务逻辑中无处不在：用户权限校验、价格折扣计算、表单验证、' +
            'API 参数检查、游戏状态判断等。卫语句（guard clause）模式是提升代码可读性的重要技巧——' +
            '先处理异常情况并 return，让主逻辑保持扁平，避免深层嵌套的"箭头型"代码。\n\n' +
            '## 扩展知识\n\n' +
            'Python 3.10+ 引入了 `match-case` 结构（结构化模式匹配），类似 switch-case 但更强大：' +
            '`match status: case 200: ... case 404: ...`。还支持解构匹配：`match point: case (0, 0): ...`。' +
            '`match-case` 适合处理多种状态的复杂分支，比 `if-elif` 链更清晰。' +
            '`condition_1 if condition_2 else condition_3` 可以嵌套但不宜过深，复杂逻辑建议用 `if-elif`。',
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
            '## 概念详解\n\n' +
            '`for` 循环是 Python 最常用的循环结构，用于遍历可迭代对象（列表、字符串、range 等）。' +
            '`for 变量 in 可迭代对象:` 每次取一个元素执行循环体。' +
            '与 C/Java 的 `for(i=0; i<n; i++)` 不同，Python 的 for 是 "foreach" 语义，更安全更简洁。' +
            '不需要手动管理循环变量和边界条件。这种设计减少了 off-by-one 错误（差一错误）。\n\n' +
            '## range() 函数详解\n\n' +
            '`range()` 生成整数序列，是 for 循环的常见搭档。range 是惰性序列——不占用内存存储所有数字，适合大范围遍历。\n\n' +
            '| 调用形式 | 生成序列 | 示例 |\n' +
            '|----------|----------|------|\n' +
            '| `range(n)` | 0 到 n-1 | `range(5)` → 0,1,2,3,4 |\n' +
            '| `range(a, b)` | a 到 b-1 | `range(2, 6)` → 2,3,4,5 |\n' +
            '| `range(a, b, step)` | a 到 b-1，步长 step | `range(0, 10, 2)` → 0,2,4,6,8 |\n' +
            '| `range(b, a, -1)` | 倒序 | `range(5, 0, -1)` → 5,4,3,2,1 |\n\n' +
            '## 常用迭代辅助函数\n\n' +
            '| 函数 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `enumerate(iter, start)` | 同时返回索引和元素 | `enumerate(["a","b"])` → (0,"a"),(1,"b") |\n' +
            '| `zip(iter1, iter2)` | 并行遍历多个可迭代对象 | `zip([1,2],["a","b"])` → (1,"a"),(2,"b") |\n' +
            '| `reversed(iter)` | 反向遍历 | `reversed([1,2,3])` → 3,2,1 |\n' +
            '| `sorted(iter)` | 排序后遍历 | `sorted([3,1,2])` → 1,2,3 |\n' +
            '| `sum(iter)` | 求和 | `sum(range(1,101))` → 5050 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：enumerate 与 zip**\n\n' +
            '```python\n' +
            '# enumerate 同时获取索引和元素\n' +
            'fruits = ["苹果", "香蕉", "橘子"]\n' +
            'for index, fruit in enumerate(fruits):\n' +
            '    print(f"{index}: {fruit}")\n' +
            '\n' +
            '# zip 并行遍历两个列表\n' +
            'names = ["小明", "小红"]\n' +
            'scores = [90, 85]\n' +
            'for name, score in zip(names, scores):\n' +
            '    print(f"{name}: {score}分")\n' +
            '```\n\n' +
            '**示例二：阶乘计算**\n\n' +
            '```python\n' +
            '# 计算 n 的阶乘: n! = 1 * 2 * 3 * ... * n\n' +
            'n = 5\n' +
            'factorial = 1\n' +
            'for i in range(1, n + 1):\n' +
            '    factorial *= i\n' +
            'print(f"{n}! = {factorial}")  # 5! = 120\n' +
            '```\n\n' +
            '注意初始值是 1 而非 0（乘法的单位元是 1）。`range(1, n+1)` 包含 n 本身。\n\n' +
            '**示例三：素数判断**\n\n' +
            '```python\n' +
            '# 判断一个数是否为素数\n' +
            'n = 17\n' +
            'is_prime = True\n' +
            'if n < 2:\n' +
            '    is_prime = False\n' +
            'else:\n' +
            '    for i in range(2, int(n ** 0.5) + 1):\n' +
            '        if n % i == 0:\n' +
            '            is_prime = False\n' +
            '            break  # 找到因子，提前退出\n' +
            'print(f"{n} 是素数: {is_prime}")  # True\n' +
            '```\n\n' +
            '只需检查到 `sqrt(n)` 即可——如果 n 有大于 sqrt(n) 的因子，对应的另一个因子必然小于 sqrt(n)。\n\n' +
            '## 循环控制语句\n\n' +
            '| 语句 | 说明 |\n' +
            '|------|------|\n' +
            '| `break` | 立即跳出整个循环 |\n' +
            '| `continue` | 跳过本次循环，进入下一次迭代 |\n' +
            '| `else` | 循环正常结束（未 break）时执行 |\n' +
            '| `pass` | 空操作占位符 |\n\n' +
            'for 循环的 `else` 子句是 Python 独有特性——当循环未被 `break` 打断时执行，常用于搜索场景。\n\n' +
            '## 注意事项\n\n' +
            '1. **range 不含上界**：`range(1, 5)` 生成 1,2,3,4，不包含 5。这是 Python 的"左闭右开"惯例。\n' +
            '2. **不要在遍历时修改列表**：遍历列表时增删元素会导致跳过或重复元素，应遍历副本 `for x in lst[:]` 或用新列表。\n' +
            '3. **优先用内置函数**：`sum(range(1,101))` 比手写循环更快更简洁，但面试中常要求手写。\n' +
            '4. **enumerate 比 range(len()) 好**：`for i, v in enumerate(lst)` 比 `for i in range(len(lst)): v = lst[i]` 更 Pythonic。\n' +
            '5. **无限循环用 while True**：for 循环不适合无限循环，`while True:` + `break` 是标准模式。\n\n' +
            '## 实际应用\n\n' +
            'for 循环是数据处理的骨架——遍历列表求和、过滤、转换都依赖它。' +
            '典型场景包括：批量处理文件、遍历数据库查询结果、生成报表、实现搜索算法。' +
            '掌握 `enumerate` 和 `zip` 能让你的循环代码更简洁、更 Pythonic。\n\n' +
            '## 扩展知识\n\n' +
            'Python 的 for 循环底层依赖迭代器协议（`__iter__` 和 `__next__` 方法）。' +
            '生成器（generator）是特殊的可迭代对象，用 `yield` 逐步产生值，适合处理大数据流。' +
            '列表推导式 `[x*2 for x in range(10)]` 是 for 循环的函数式写法，更简洁高效。' +
            '`itertools` 模块提供了丰富的迭代工具：`chain`、`combinations`、`permutations` 等。',
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
            '## 概念详解\n\n' +
            '`while 条件:` 当条件为 True 时重复执行循环体。与 for 循环不同，while 适用于' +
            '"循环次数不确定"的场景——如等待用户输入、轮询状态、二分查找等。' +
            'while 循环必须在循环体内修改条件变量，否则会无限循环。' +
            '这是 while 最常见的 bug 来源——忘记更新条件导致死循环。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'while 条件:\n' +
            '    # 条件为 True 时执行的循环体\n' +
            '    # 必须修改条件变量，否则死循环\n' +
            'else:\n' +
            '    # 条件变为 False 时执行（break 退出不执行）\n' +
            '```\n\n' +
            '## for vs while 对比\n\n' +
            '| 特性 | for 循环 | while 循环 |\n' +
            '|------|----------|------------|\n' +
            '| 适用场景 | 遍历已知序列 | 循环次数不确定 |\n' +
            '| 条件管理 | 自动（序列耗尽） | 手动（需自己更新） |\n' +
            '| 死循环风险 | 低 | 高（忘记更新条件） |\n' +
            '| 典型用途 | 遍历列表/range | 轮询、游戏循环、算法 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：数字逐位处理**\n\n' +
            '```python\n' +
            '# 反转数字: 123 -> 321\n' +
            'n = 123\n' +
            'reversed_n = 0\n' +
            'while n > 0:\n' +
            '    digit = n % 10        # 取最后一位\n' +
            '    reversed_n = reversed_n * 10 + digit\n' +
            '    n //= 10              # 去掉最后一位\n' +
            'print(reversed_n)  # 321\n' +
            '```\n\n' +
            '`n % 10` 取最后一位数字，`n //= 10` 去掉最后一位。这是逐位处理数字的标准模式。\n\n' +
            '**示例二：while True + break 模式**\n\n' +
            '```python\n' +
            '# 模拟交互式菜单\n' +
            'command = ""\n' +
            'while True:\n' +
            '    command = "quit"  # 模拟用户输入\n' +
            '    if command == "quit":\n' +
            '        print("退出程序")\n' +
            '        break\n' +
            '    print(f"执行命令: {command}")\n' +
            '```\n\n' +
            '`while True:` + `break` 是实现"至少执行一次"循环的惯用模式，类似其他语言的 `do-while`。\n\n' +
            '**示例三：二分查找**\n\n' +
            '```python\n' +
            '# 在有序数组中查找目标值\n' +
            'arr = [1, 3, 5, 7, 9, 11, 13]\n' +
            'target = 7\n' +
            'left, right = 0, len(arr) - 1\n' +
            'found = -1\n' +
            'while left <= right:\n' +
            '    mid = (left + right) // 2\n' +
            '    if arr[mid] == target:\n' +
            '        found = mid\n' +
            '        break\n' +
            '    elif arr[mid] < target:\n' +
            '        left = mid + 1\n' +
            '    else:\n' +
            '        right = mid - 1\n' +
            'print(f"索引: {found}")  # 索引: 3\n' +
            '```\n\n' +
            '二分查找时间复杂度 O(log n)，体现了"分治"思想——将问题规模减半。\n\n' +
            '## 注意事项\n\n' +
            '1. **避免死循环**：确保循环体内有修改条件变量的代码，或用 `break` 退出。' +
            '2. **浮点数比较陷阱**：`while x != 0.0` 可能永不终止（精度问题），应用 `while abs(x) > 1e-9`。\n' +
            '3. **整数除法 //**：在 while 循环中逐位处理数字时用 `//=` 而非 `/=`（后者产生浮点数）。\n' +
            '4. **while else 语义**：`else` 子句在条件变为 False 时执行，`break` 退出时不执行——容易混淆。\n' +
            '5. **优先用 for**：能用 for 循环的场景尽量用 for，while 的 bug 风险更高。\n\n' +
            '## 实际应用\n\n' +
            'while 循环在算法和系统编程中广泛应用：二分查找、BFS/DFS 图遍历、' +
            '游戏主循环、网络请求重试、状态机轮询等。Collatz 猜想（3n+1 问题）是 while 循环的有趣练习：' +
            '偶数除 2，奇数乘 3 加 1，最终必然到达 1（数学上尚未证明）。\n\n' +
            '## 扩展知识\n\n' +
            'Python 没有内置 `do-while` 循环，但可以用 `while True:` + `break` 模拟。' +
            '`itertools.takewhile(predicate, iterable)` 提供了函数式的 while 循环。' +
            '在异步编程中，`asyncio` 提供了 `while` 循环的异步版本用于轮询等待。' +
            '对于性能敏感的场景，while 循环比 for 循环稍慢（因为每次迭代都要评估条件表达式）。',
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
            '## 概念详解\n\n' +
            '循环控制语句让你能在循环执行过程中改变流程。Python 提供三个控制语句：' +
            '`break`（跳出循环）、`continue`（跳过本次）、`pass`（空操作占位）。' +
            '它们是编写灵活循环逻辑的必备工具。\n\n' +
            '## 控制语句一览\n\n' +
            '| 语句 | 作用 | 类比 |\n' +
            '|------|------|------|\n' +
            '| `break` | 立即跳出当前循环 | 紧急出口 |\n' +
            '| `continue` | 跳过本次循环，进入下一次 | 跳过站 |\n' +
            '| `pass` | 空操作，什么都不做 | 占位符 |\n' +
            '| `else` | 循环正常结束（未 break）时执行 | "搜完了"通知 |\n\n' +
            '## break 详解\n\n' +
            '`break` 立即跳出当前循环（不再执行后续循环）。常用于"找到即停"的场景——' +
            '如线性查找找到目标后无需继续遍历。`break` 只跳出最内层循环，嵌套循环中需用标志变量' +
            '或函数 return 来跳出多层。`for...else` 结构中，break 会跳过 else 子句——' +
            'else 表示"循环正常结束未被 break"。\n\n' +
            '## continue 详解\n\n' +
            '`continue` 跳过本次循环剩余语句，直接进入下一次迭代。常用于过滤——' +
            '跳过不符合条件的元素。continue 不终止循环，只跳过当前这一轮。' +
            '过度使用 continue 会让代码难以追踪，通常可以用 if/else 结构替代。' +
            '但在循环体较长时，continue 提前跳过能让主逻辑更清晰（类似卫语句思想）。\n\n' +
            '## pass 详解\n\n' +
            '`pass` 是空操作占位符——什么也不做。Python 的代码块不能为空（语法要求），' +
            '因此定义空函数、空类、空 if 分支时必须用 pass 填充。' +
            'pass 与 `...`（Ellipsis）在大多数场景等价，但 pass 更传统。' +
            'pass 常用于"先搭框架再填实现"的开发模式——先定义函数签名，稍后补充逻辑。\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：break 搜索**\n\n' +
            '```python\n' +
            '# 线性查找：找到目标后立即退出\n' +
            'numbers = [3, 7, 1, 9, 4, 6]\n' +
            'target = 9\n' +
            'for i, num in enumerate(numbers):\n' +
            '    if num == target:\n' +
            '        print(f"找到 {target}，索引 {i}")\n' +
            '        break\n' +
            'else:\n' +
            '    print(f"未找到 {target}")\n' +
            '```\n\n' +
            '`for...else` 中的 else 在循环未被 break 时执行——非常适合搜索场景。\n\n' +
            '**示例二：continue 过滤**\n\n' +
            '```python\n' +
            '# 只处理偶数，跳过奇数\n' +
            'for i in range(1, 11):\n' +
            '    if i % 2 != 0:\n' +
            '        continue  # 跳过奇数\n' +
            '    print(i, end=" ")  # 2 4 6 8 10\n' +
            '```\n\n' +
            '**示例三：FizzBuzz 经典题**\n\n' +
            '```python\n' +
            '# FizzBuzz：经典编程面试题\n' +
            'for i in range(1, 16):\n' +
            '    if i % 15 == 0:\n' +
            '        print("FizzBuzz")\n' +
            '    elif i % 3 == 0:\n' +
            '        print("Fizz")\n' +
            '    elif i % 5 == 0:\n' +
            '        print("Buzz")\n' +
            '    else:\n' +
            '        print(i)\n' +
            '```\n\n' +
            'FizzBuzz 考察循环、条件、优先级顺序（必须先判断 15）。据调查超过半数面试者无法一次写对。\n\n' +
            '## 注意事项\n\n' +
            '1. **break 只跳一层**：嵌套循环中 break 只跳出最内层，多层跳出需用标志变量或 return。\n' +
            '2. **continue 不是 break**：continue 跳过本次但不终止循环，容易混淆。\n' +
            '3. **pass 不是 None**：pass 是语法占位符，不返回任何值；`return None` 是返回 None 值。\n' +
            '4. **for else 易混淆**：else 子句在"正常结束"时执行，而非"break 时"——与其他语言的 else 语义不同。\n' +
            '5. **避免滥用 continue**：循环体短时用 if/else 比 continue 更清晰。\n\n' +
            '## 实际应用\n\n' +
            'break 和 continue 在数据过滤和搜索中无处不在。处理大数据时，找到目标记录后用 break 提前退出' +
            '可以节省大量计算。日志分析中用 continue 跳过非关键级别的日志行。' +
            'pass 常用于接口设计阶段——先定义类和方法签名，再逐步实现细节（"骨架编程"模式）。\n\n' +
            '## 扩展知识\n\n' +
            'Python 没有类似 C 的 `goto` 语句，但可以用函数封装 + `return` 模拟多层 break。' +
            '`itertools` 模块提供了 `takewhile`（取到条件不满足为止）和 `dropwhile`（跳到条件不满足为止）' +
            '作为 break/continue 的函数式替代方案。在异步编程中，`break` 同样适用于 `async for` 循环。',
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
            '## 概念详解\n\n' +
            '列表（list）是 Python 最常用的数据结构，相当于其他语言的动态数组。' +
            '列表用 `[元素1, 元素2, ...]` 创建，元素可以是不同类型（但通常同类型）。' +
            '列表是**可变**的——可以增删改元素。支持索引、切片、拼接、重复等操作。' +
            '列表在内存中存储的是对象的引用（指针），而非对象本身。' +
            '列表自动管理内存，无需预先声明大小，会根据需要自动扩容。\n\n' +
            '## 列表方法一览\n\n' +
            '| 方法 | 说明 | 时间复杂度 |\n' +
            '|------|------|------------|\n' +
            '| `append(x)` | 末尾添加元素 | O(1) |\n' +
            '| `insert(i, x)` | 在索引 i 处插入 | O(n) |\n' +
            '| `extend(iterable)` | 批量追加 | O(k) |\n' +
            '| `remove(x)` | 删除第一个等于 x 的元素 | O(n) |\n' +
            '| `pop(i)` | 删除并返回索引 i 的元素（默认末尾） | O(1)/O(n) |\n' +
            '| `clear()` | 清空列表 | O(n) |\n' +
            '| `index(x)` | 返回第一个等于 x 的索引 | O(n) |\n' +
            '| `count(x)` | 统计 x 出现次数 | O(n) |\n' +
            '| `sort(key, reverse)` | 原地排序 | O(n log n) |\n' +
            '| `reverse()` | 原地反转 | O(n) |\n' +
            '| `copy()` | 浅拷贝 | O(n) |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：增删改查**\n\n' +
            '```python\n' +
            'fruits = ["苹果", "香蕉"]\n' +
            '# 增\n' +
            'fruits.append("橘子")        # 末尾添加\n' +
            'fruits.insert(0, "葡萄")     # 指定位置插入\n' +
            'fruits.extend(["梨", "桃"])  # 批量追加\n' +
            'print(fruits)\n' +
            '# 删\n' +
            'fruits.remove("葡萄")        # 删除指定值\n' +
            'popped = fruits.pop()        # 删除并返回末尾元素\n' +
            'print(f"弹出: {popped}")\n' +
            '# 改\n' +
            'fruits[0] = "芒果"           # 索引修改\n' +
            'print(fruits)\n' +
            '```\n\n' +
            '**示例二：append vs extend 陷阱**\n\n' +
            '```python\n' +
            'a = [1, 2, 3]\n' +
            'b = [1, 2, 3]\n' +
            'a.append([4, 5])   # 添加一个列表作为元素\n' +
            'b.extend([4, 5])   # 展开 4 和 5 作为两个元素\n' +
            'print(a)  # [1, 2, 3, [4, 5]]\n' +
            'print(b)  # [1, 2, 3, 4, 5]\n' +
            '```\n\n' +
            '`append` 添加整个对象作为一个元素，`extend` 展开可迭代对象的每个元素追加——这是最常见的列表陷阱。\n\n' +
            '**示例三：排序与自定义 key**\n\n' +
            '```python\n' +
            '# 按字符串长度排序\n' +
            'words = ["banana", "apple", "kiwi", "cherry"]\n' +
            'words.sort(key=len)\n' +
            'print(words)  # ["kiwi", "apple", "banana", "cherry"]\n' +
            '\n' +
            '# sorted() 返回新列表，不修改原列表\n' +
            'nums = [3, 1, 4, 1, 5, 9]\n' +
            'sorted_nums = sorted(nums, reverse=True)\n' +
            'print(sorted_nums)  # [9, 5, 4, 3, 1, 1]\n' +
            '```\n\n' +
            '`sort()` 是原地排序（修改原列表），`sorted()` 返回新列表。`key` 参数接受一个函数，如 `len`、`str.lower`。\n\n' +
            '## 注意事项\n\n' +
            '1. **引用陷阱**：`a = [1,2]; b = a; b.append(3)` 后 a 也变成 [1,2,3]——因为 a 和 b 指向同一列表。复制用 `a.copy()` 或 `a[:]`。\n' +
            '2. **append vs extend**：`append([1,2])` 添加一个列表元素，`extend([1,2])` 添加 1 和 2 两个元素。\n' +
            '3. **insert 性能**：`insert(0, x)` 是 O(n) 操作，频繁头部插入应用 `collections.deque`。\n' +
            '4. **remove 只删第一个**：`remove(x)` 只删除第一个匹配项，删除所有需用循环或列表推导式。\n' +
            '5. **深拷贝**：嵌套列表的 `copy()` 是浅拷贝，内层列表仍共享。深拷贝用 `copy.deepcopy()`。\n\n' +
            '## 实际应用\n\n' +
            '列表在数据存储、队列管理、结果收集等场景中无处不在。' +
            '典型用途：存储数据库查询结果、收集循环处理后的数据、实现栈（append/pop）或队列、' +
            '缓存分页数据等。列表推导式 `[x*2 for x in range(10)]` 是创建列表的简洁方式（下节详解）。\n\n' +
            '## 扩展知识\n\n' +
            '当需要频繁在头部插入/删除时，`collections.deque`（双端队列）比列表更高效（O(1)）。' +
            '`array.array` 提供了存储同类型数值的紧凑数组，内存占用更小。' +
            '列表的底层实现是动态数组——预分配额外空间以摊销 append 的 O(1) 成本。' +
            '`list` 的 `__len__`、`__getitem__` 等魔法方法实现了序列协议。',
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
            '## 概念详解\n\n' +
            '元组（tuple）是不可变的序列，用 `(元素1, 元素2, ...)` 创建。' +
            '元组一旦创建就不能修改——不能增删改元素。这一特性使元组可以作为字典的键、集合的元素，' +
            '而列表不行。元组比列表更轻量（内存占用更小、访问更快）。' +
            '单元素元组必须加逗号：`(42,)` 而非 `(42)`（后者是普通括号表达式）。\n\n' +
            '## 元组方法与操作\n\n' +
            '| 操作 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `t[i]` | 索引访问 | `t[0]` |\n' +
            '| `t[a:b]` | 切片 | `t[1:3]` |\n' +
            '| `len(t)` | 长度 | `len((1,2,3))` → 3 |\n' +
            '| `t.count(x)` | 统计出现次数 | `(1,1,2).count(1)` → 2 |\n' +
            '| `t.index(x)` | 查找索引 | `(1,2,3).index(2)` → 1 |\n' +
            '| `x in t` | 成员判断 | `2 in (1,2,3)` → True |\n' +
            '| `t + t2` | 拼接 | `(1,2) + (3,)` → (1,2,3) |\n' +
            '| `t * n` | 重复 | `(0,) * 3` → (0,0,0) |\n\n' +
            '## 元组解包\n\n' +
            '元组解包（unpacking）是 Python 的强大特性：`a, b = 1, 2` 一次给多个变量赋值。' +
            '交换变量无需临时变量：`a, b = b, a`。函数返回多个值本质是返回元组：' +
            '`return x, y` 等价于 `return (x, y)`。`*` 收集剩余元素：' +
            '`first, *rest = [1, 2, 3, 4]` 中 first=1, rest=[2,3,4]。\n\n' +
            '```python\n' +
            '# 元组解包的多种用法\n' +
            'point = (3, 4)\n' +
            'x, y = point          # 基本解包\n' +
            'first, *middle, last = [1, 2, 3, 4, 5]  # 星号解包\n' +
            'print(first, middle, last)  # 1 [2, 3, 4] 5\n' +
            '```\n\n' +
            '命名元组（`collections.namedtuple`）给元组元素命名，兼具可读性和轻量性：' +
            '`Point = namedtuple("Point", ["x", "y"])`，然后 `p = Point(3, 4); p.x`。\n\n' +
            '## 集合（set）\n\n' +
            '集合是无序、不重复的元素集合，用 `{1, 2, 3}` 或 `set()` 创建。' +
            '集合的核心价值：去重和集合运算。\n\n' +
            '## 集合运算\n\n' +
            '| 运算 | 操作符 | 方法 | 示例 |\n' +
            '|------|--------|------|------|\n' +
            '| 并集 | `\\|` | `union()` | `{1,2} \\| {2,3}` → {1,2,3} |\n' +
            '| 交集 | `&` | `intersection()` | `{1,2} & {2,3}` → {2} |\n' +
            '| 差集 | `-` | `difference()` | `{1,2} - {2,3}` → {1} |\n' +
            '| 对称差 | `^` | `symmetric_difference()` | `{1,2} ^ {2,3}` → {1,3} |\n' +
            '| 子集 | `<=` | `issubset()` | `{1} <= {1,2}` → True |\n' +
            '| 超集 | `>=` | `issuperset()` | `{1,2} >= {1}` → True |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：集合去重与运算**\n\n' +
            '```python\n' +
            '# 列表去重\n' +
            'nums = [1, 1, 2, 3, 3, 4]\n' +
            'unique = list(set(nums))\n' +
            'print(unique)  # [1, 2, 3, 4]（顺序不保证）\n' +
            '\n' +
            '# 集合运算\n' +
            'a = {1, 2, 3, 4}\n' +
            'b = {3, 4, 5, 6}\n' +
            'print(a & b)  # 交集: {3, 4}\n' +
            'print(a | b)  # 并集: {1, 2, 3, 4, 5, 6}\n' +
            'print(a - b)  # 差集: {1, 2}\n' +
            '```\n\n' +
            '**示例二：集合 vs 列表性能**\n\n' +
            '```python\n' +
            '# 集合的 in 操作是 O(1)，列表是 O(n)\n' +
            'big_list = list(range(100000))\n' +
            'big_set = set(big_list)\n' +
            '# 在集合中查找快得多\n' +
            'print(99999 in big_set)   # O(1)，极快\n' +
            'print(99999 in big_list)  # O(n)，慢\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **单元素元组逗号**：`(42)` 是整数 42，`(42,)` 才是元组。忘记逗号是常见错误。\n' +
            '2. **集合元素必须可哈希**：列表和字典不能作为集合元素，但元组可以——`{(1,2), (3,4)}` 合法。\n' +
            '3. **集合无序**：`set` 不保留插入顺序，Python 3.7+ 的 `dict` 保留顺序但 `set` 不保证。\n' +
            '4. **frozenset**：不可变集合，可以作为字典键或集合元素。\n' +
            '5. **空集合用 set()**：`{}` 创建的是空字典，不是空集合。空集合必须用 `set()`。\n\n' +
            '## 实际应用\n\n' +
            '元组用于固定结构的数据——如坐标 (x, y)、RGB 颜色 (r, g, b)、数据库行记录。' +
            '集合用于数据去重、权限交集判断、标签系统、查找差集（新增/删除的元素）。' +
            '函数多返回值（如 `divmod` 返回商和余数）是元组的典型用法。' +
            '选择合适的数据结构是写出高效 Python 代码的关键。\n\n' +
            '## 扩展知识\n\n' +
            '`collections.namedtuple` 提供了具名元组，比普通类更轻量。' +
            'Python 3.7+ 的 `dataclass` 是现代替代方案，支持类型注解和默认值。' +
            '`collections.Counter` 是专门用于计数的字典子类，`collections.OrderedDict` 保留插入顺序' +
            '（Python 3.7+ 普通 dict 已自带此特性）。',
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
            '## 概念详解\n\n' +
            '字典（dict）是 Python 中最重要的数据结构之一，存储键值对（key-value pairs）。' +
            '字典用 `{键: 值}` 创建，通过键快速查找值——平均 O(1) 时间复杂度（基于哈希表）。' +
            '字典的键必须是可哈希的（不可变类型：str、int、tuple、frozenset），值可以是任意类型。' +
            'Python 3.7+ 字典保持插入顺序（3.6 是 CPython 实现细节，3.7 成为语言规范）。' +
            '字典是 Python 中映射类型的核心，JSON 数据天然映射为字典结构。\n\n' +
            '## 字典方法一览\n\n' +
            '| 方法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `d[key]` | 获取/设置值（不存在抛 KeyError） | `d["name"]` |\n' +
            '| `d.get(key, default)` | 安全获取（不存在返回默认值） | `d.get("age", 0)` |\n' +
            '| `d[key] = value` | 添加/修改键值对 | `d["x"] = 1` |\n' +
            '| `del d[key]` | 删除键值对 | `del d["x"]` |\n' +
            '| `d.pop(key)` | 删除并返回值 | `d.pop("x")` |\n' +
            '| `d.keys()` | 返回所有键 | `list(d.keys())` |\n' +
            '| `d.values()` | 返回所有值 | `list(d.values())` |\n' +
            '| `d.items()` | 返回 (键, 值) 对 | `list(d.items())` |\n' +
            '| `d.update(d2)` | 合并另一个字典 | `d.update({"x": 1})` |\n' +
            '| `d.setdefault(key, default)` | 键不存在时设置默认值 | `d.setdefault("x", [])` |\n' +
            '| `d.copy()` | 浅拷贝 | `d2 = d.copy()` |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：字典 CRUD**\n\n' +
            '```python\n' +
            'student = {"name": "小明", "age": 20}\n' +
            '# 查\n' +
            'print(student["name"])               # 键存在直接访问\n' +
            'print(student.get("grade", "未设置"))  # 安全访问\n' +
            '# 增/改\n' +
            'student["grade"] = "A"\n' +
            'student["age"] = 21                   # 修改已有键\n' +
            '# 删\n' +
            'removed = student.pop("grade")\n' +
            'print(f"删除了: {removed}")\n' +
            '# 遍历\n' +
            'for key, value in student.items():\n' +
            '    print(f"{key}: {value}")\n' +
            '```\n\n' +
            '**示例二：词频统计（经典面试题）**\n\n' +
            '```python\n' +
            '# 统计每个单词出现次数\n' +
            'text = "the cat sat on the mat the cat"\n' +
            'words = text.split()\n' +
            '\n' +
            '# 方法一：手动用 get\n' +
            'word_count = {}\n' +
            'for word in words:\n' +
            '    word_count[word] = word_count.get(word, 0) + 1\n' +
            'print(word_count)  # {"the": 3, "cat": 2, "sat": 1, ...}\n' +
            '\n' +
            '# 方法二：用 Counter（更简洁）\n' +
            'from collections import Counter\n' +
            'print(dict(Counter(words)))\n' +
            '```\n\n' +
            '**示例三：setdefault 与 defaultdict**\n\n' +
            '```python\n' +
            '# setdefault：按首字母分组\n' +
            'words = ["apple", "ant", "banana", "ball"]\n' +
            'groups = {}\n' +
            'for word in words:\n' +
            '    groups.setdefault(word[0], []).append(word)\n' +
            'print(groups)  # {"a": ["apple", "ant"], "b": ["banana", "ball"]}\n' +
            '\n' +
            '# defaultdict：更简洁\n' +
            'from collections import defaultdict\n' +
            'groups2 = defaultdict(list)\n' +
            'for word in words:\n' +
            '    groups2[word[0]].append(word)\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **KeyError 陷阱**：`d[key]` 键不存在会抛 KeyError，用 `d.get(key, default)` 更安全。\n' +
            '2. **键必须可哈希**：列表和字典不能作为键，但元组可以——`{(1,2): "point"}` 合法。\n' +
            '3. **遍历时修改**：遍历字典时增删键会抛 RuntimeError，应先收集要删除的键再操作。\n' +
            '4. **浅拷贝**：`d.copy()` 是浅拷贝，嵌套结构仍共享。深拷贝用 `copy.deepcopy()`。\n' +
            '5. **字典推导式**：`{k: v for k, v in d.items() if v > 0}` 可过滤字典。\n\n' +
            '## 实际应用\n\n' +
            '字典在配置管理、缓存、数据库记录映射、JSON 数据处理中无处不在。' +
            '典型用途：HTTP 请求头/响应体解析、配置文件加载（YAML/JSON → dict）、' +
            'ORM 中的模型实例、Redis 缓存、路由映射等。' +
            '理解字典是 Python 编程的核心能力。\n\n' +
            '## 扩展知识\n\n' +
            'Python 3.9+ 支持字典合并运算符 `|`：`{1:2} | {3:4}` → `{1:2, 3:4}`。' +
            '`collections.ChainMap` 可以将多个字典"串联"成视图，不实际合并。' +
            '字典的哈希表实现使得查找极快，但不适合需要排序的场景——' +
            '排序用 `sorted(d.items(), key=lambda x: x[1])`。' +
            '`dict.fromkeys(iterable, value)` 可批量创建相同值的字典。',
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
            '## 概念详解\n\n' +
            '推导式（comprehension）是 Python 最具特色的语法之一，用一行代码创建列表、字典、集合。' +
            '列表推导式语法：`[表达式 for 变量 in 可迭代对象 if 条件]`。' +
            '它等价于 for 循环 + append，但更简洁、更快（底层用 C 优化）。' +
            '推导式不是"炫技"——它是 Pythonic 编程的标志，被广泛认为是 Python 最优雅的特性之一。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            '# 列表推导式\n' +
            '[表达式 for 变量 in 可迭代对象 if 条件]\n' +
            '# 字典推导式\n' +
            '{键表达式: 值表达式 for 变量 in 可迭代对象 if 条件}\n' +
            '# 集合推导式\n' +
            '{表达式 for 变量 in 可迭代对象 if 条件}\n' +
            '# 生成器表达式（惰性求值）\n' +
            '(表达式 for 变量 in 可迭代对象 if 条件)\n' +
            '```\n\n' +
            '推导式的三个部分：**表达式**（对每个元素做什么）、**for 子句**（遍历源数据）、' +
            '**if 过滤**（可选，筛选符合条件的元素）。`[x**2 for x in range(10) if x % 2 == 0]` ' +
            '生成偶数的平方列表。多个 for 子句可以嵌套：`[x*y for x in range(3) for y in range(3)]` ' +
            '相当于双层循环。但嵌套超过两层时建议改用普通循环以提高可读性。\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：列表推导式基础**\n\n' +
            '```python\n' +
            '# 平方列表\n' +
            'squares = [x**2 for x in range(1, 6)]\n' +
            'print(squares)  # [1, 4, 9, 16, 25]\n' +
            '\n' +
            '# 带条件的推导式：偶数的平方\n' +
            'even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]\n' +
            'print(even_squares)  # [4, 16, 36, 64, 100]\n' +
            '\n' +
            '# 字符串转换\n' +
            'names = ["alice", "bob", "charlie"]\n' +
            'upper_names = [name.capitalize() for name in names]\n' +
            'print(upper_names)  # ["Alice", "Bob", "Charlie"]\n' +
            '```\n\n' +
            '**示例二：字典推导式与反转**\n\n' +
            '```python\n' +
            '# 字典推导式：键值反转\n' +
            'original = {"a": 1, "b": 2, "c": 3}\n' +
            'reversed_dict = {v: k for k, v in original.items()}\n' +
            'print(reversed_dict)  # {1: "a", 2: "b", 3: "c"}\n' +
            '\n' +
            '# 从列表创建字典\n' +
            'words = ["apple", "banana", "cherry"]\n' +
            'word_lengths = {word: len(word) for word in words}\n' +
            'print(word_lengths)  # {"apple": 5, "banana": 6, "cherry": 6}\n' +
            '```\n\n' +
            '**示例三：嵌套推导式（矩阵转置）**\n\n' +
            '```python\n' +
            '# 矩阵转置：行列互换\n' +
            'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n' +
            'transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]\n' +
            'print(transposed)  # [[1, 4, 7], [2, 5, 8], [3, 6, 9]]\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **可读性优先**：推导式不应过长（一行不超过 79 字符），复杂逻辑用普通循环更清晰。\n' +
            '2. **副作用禁忌**：不要在推导式表达式中使用有副作用的操作（如 print、修改外部变量）。\n' +
            '3. **if 位置**：过滤用 `if 条件` 放在 for 后面；条件表达式用 `值1 if 条件 else 值2` 放在 for 前面。\n' +
            '4. **生成器表达式省内存**：处理大数据时用 `(x for x in ...)` 替代 `[x for x in ...]`，惰性求值不占内存。\n' +
            '5. **嵌套不超过两层**：`[x*y for x in ... for y in ...]` 可接受，三层以上应改用普通循环。\n\n' +
            '## 实际应用\n\n' +
            '推导式在数据转换、过滤、映射中无处不在。典型场景：' +
            '从 API 响应中提取字段 `[user["name"] for user in users]`、' +
            '过滤有效数据 `[x for x in data if x is not None]`、' +
            '批量类型转换 `[int(x) for x in str_numbers]`、' +
            '配置项构建 `{k: v for k, v in raw_config.items() if v is not None}`。' +
            '是函数式编程思想在 Python 中的体现。\n\n' +
            '## 扩展知识\n\n' +
            '推导式的性能优势：比等价的 for + append 循环快约 20-30%（在 CPython 中）。' +
            '生成器表达式配合 `sum()`、`any()`、`all()` 等函数非常高效：`sum(x**2 for x in range(100))`。' +
            'Python 3.8+ 的海象运算符 `:=` 可以在推导式中赋值：' +
            '`[y := f(x), y**2, y**3]`。`itertools` 模块提供了更多函数式工具。',
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
            '## 概念详解\n\n' +
            '函数是组织代码的基本单元。`def 函数名(参数):` 定义函数，缩进块为函数体。' +
            '`return` 返回值——无 return 或 return 无值时返回 `None`。' +
            '调用函数用 `函数名(参数)`。函数名应使用 snake_case，动词开头描述行为。' +
            'Python 没有"函数声明"和"函数定义"的区分——def 即定义，调用必须在定义之后。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'def 函数名(参数1, 参数2=默认值, *args, **kwargs) -> 返回类型:\n' +
            '    """文档字符串（docstring）"""\n' +
            '    # 函数体\n' +
            '    return 返回值\n' +
            '```\n\n' +
            '## 为什么需要函数\n\n' +
            '| 好处 | 说明 |\n' +
            '|------|------|\n' +
            '| **复用** | 避免重复代码，一处修改处处生效 |\n' +
            '| **抽象** | 隐藏实现细节，只暴露接口 |\n' +
            '| **测试** | 函数是独立可测试单元 |\n' +
            '| **组织** | 分而治之，降低复杂度 |\n' +
            '| **递归** | 某些问题用递归更自然（如树遍历） |\n\n' +
            '良好设计的函数应遵循"单一职责原则"——只做一件事。函数长度建议不超过 20-30 行。' +
            '函数名应能自解释行为，避免 `do_something()` 这类模糊命名。\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：基本函数与 docstring**\n\n' +
            '```python\n' +
            'def greet(name):\n' +
            '    """向指定的人问好\n' +
            '    \n' +
            '    Args:\n' +
            '        name: 人名字符串\n' +
            '    Returns:\n' +
            '        问候字符串\n' +
            '    """\n' +
            '    return f"你好，{name}！"\n' +
            '\n' +
            'print(greet("小明"))  # 你好，小明！\n' +
            'print(greet.__doc__)  # 查看文档字符串\n' +
            '```\n\n' +
            '**示例二：多返回值与函数作为参数**\n\n' +
            '```python\n' +
            '# 多返回值（本质返回元组）\n' +
            'def divmod_safe(a, b):\n' +
            '    if b == 0:\n' +
            '        return None, None\n' +
            '    return a // b, a % b\n' +
            '\n' +
            'quotient, remainder = divmod_safe(17, 5)\n' +
            'print(f"商: {quotient}, 余数: {remainder}")  # 商: 3, 余数: 2\n' +
            '\n' +
            '# 函数作为参数（高阶函数）\n' +
            'def apply(func, value):\n' +
            '    return func(value)\n' +
            '\n' +
            'print(apply(abs, -5))      # 5\n' +
            'print(apply(str.upper, "hi"))  # HI\n' +
            '```\n\n' +
            '**示例三：递归函数**\n\n' +
            '```python\n' +
            '# 递归计算阶乘\n' +
            'def factorial(n):\n' +
            '    if n <= 1:        # 基线条件（终止递归）\n' +
            '        return 1\n' +
            '    return n * factorial(n - 1)  # 递归调用\n' +
            '\n' +
            'print(factorial(5))  # 120\n' +
            '```\n\n' +
            '递归必须有基线条件（终止条件），否则会栈溢出。Python 默认递归深度限制 1000 层。\n\n' +
            '## 注意事项\n\n' +
            '1. **定义在调用之前**：Python 函数必须在定义之后才能调用（不像 JavaScript 有提升）。\n' +
            '2. **默认返回 None**：没有 return 的函数返回 None，容易导致意外行为。\n' +
            '3. **可变默认参数陷阱**：`def f(x=[])` 中的默认列表只创建一次，多次调用会共享——应改用 `def f(x=None): if x is None: x = []`。\n' +
            '4. **递归深度限制**：Python 默认递归深度 1000 层，超过抛 `RecursionError`。深层递归应改用循环。\n' +
            '5. **函数命名**：动词开头，snake_case 风格，如 `calculate_total`、`send_email`。\n\n' +
            '## 实际应用\n\n' +
            '函数是所有 Python 程序的组织骨架。Web 开发中的路由处理函数、数据处理中的转换函数、' +
            '测试中的断言函数——一切皆函数。良好的函数设计让代码可测试、可复用、可维护。' +
            '函数式编程思想（map/filter/reduce）在数据处理中广泛应用。\n\n' +
            '## 扩展知识\n\n' +
            'Python 函数是"一等公民"（first-class object）——可以赋值给变量、作为参数传递、' +
            '作为返回值返回。这让 Python 支持高阶函数、闭包、装饰器等高级特性。' +
            '`functools` 模块提供了 `lru_cache`（自动缓存）、`partial`（偏函数）、`reduce` 等工具。' +
            '`lambda` 匿名函数适合简短的一次性使用：`sorted(lst, key=lambda x: x[1])`。' +
            '类型注解 `def add(a: int, b: int) -> int:` 可以配合 mypy 做静态检查。',
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
            '## 概念详解\n\n' +
            'Python 函数参数灵活强大。Python 支持多种参数类型，理解它们的区别和用法是编写灵活函数的关键。\n\n' +
            '## 参数类型一览\n\n' +
            '| 参数类型 | 语法 | 说明 |\n' +
            '|----------|------|------|\n' +
            '| 位置参数 | `func(a, b)` | 按顺序传入 |\n' +
            '| 关键字参数 | `func(a=1, b=2)` | 按名称传入，顺序可变 |\n' +
            '| 默认参数 | `def f(a, b=10)` | 有默认值，调用时可省略 |\n' +
            '| `*args` | `def f(*args)` | 收集多余位置参数为元组 |\n' +
            '| `**kwargs` | `def f(**kwargs)` | 收集多余关键字参数为字典 |\n' +
            '| 仅关键字参数 | `def f(*, a)` | `*` 后的参数必须用关键字 |\n' +
            '| 仅位置参数 | `def f(a, /)` | `/` 前的参数必须用位置（Python 3.8+） |\n\n' +
            '参数顺序：`def func(位置参数, /, 普通参数, *args, 关键字参数, **kwargs)`。' +
            '混合使用时位置参数必须在关键字参数之前。\n\n' +
            '## 可变默认参数陷阱\n\n' +
            '⚠️ **最常见的 Python 陷阱**：`def add_item(item, lst=[])` 中 lst 是可变对象，' +
            '默认值在函数定义时创建一次，后续调用共享同一列表！\n\n' +
            '```python\n' +
            '# 错误写法：可变默认参数\n' +
            'def add_bad(item, lst=[]):\n' +
            '    lst.append(item)\n' +
            '    return lst\n' +
            'print(add_bad(1))  # [1]\n' +
            'print(add_bad(2))  # [1, 2] —— 不是 [2]！共享了同一个列表\n' +
            '\n' +
            '# 正确写法：用 None 作为哨兵\n' +
            'def add_good(item, lst=None):\n' +
            '    if lst is None:\n' +
            '        lst = []\n' +
            '    lst.append(item)\n' +
            '    return lst\n' +
            'print(add_good(1))  # [1]\n' +
            'print(add_good(2))  # [2] —— 每次调用创建新列表\n' +
            '```\n\n' +
            '## *args 与 **kwargs\n\n' +
            '```python\n' +
            '# *args 收集多余位置参数\n' +
            'def sum_all(*args):\n' +
            '    return sum(args)\n' +
            'print(sum_all(1, 2, 3, 4))  # 10\n' +
            '\n' +
            '# **kwargs 收集多余关键字参数\n' +
            'def print_info(**kwargs):\n' +
            '    for key, value in kwargs.items():\n' +
            '        print(f"{key}: {value}")\n' +
            'print_info(name="小明", age=20)\n' +
            '\n' +
            '# 调用时解包\n' +
            'args = [1, 2, 3]\n' +
            'print(sum_all(*args))  # 用 * 解包列表\n' +
            'kwargs = {"name": "小红", "age": 18}\n' +
            'print_info(**kwargs)   # 用 ** 解包字典\n' +
            '```\n\n' +
            '## 斐波那契数列\n\n' +
            '```python\n' +
            '# 递归实现（简洁但效率低 O(2^n)）\n' +
            'def fib_recursive(n):\n' +
            '    if n <= 1:\n' +
            '        return n\n' +
            '    return fib_recursive(n-1) + fib_recursive(n-2)\n' +
            '\n' +
            '# 循环实现（高效 O(n)）\n' +
            'def fib_loop(n):\n' +
            '    a, b = 0, 1\n' +
            '    for _ in range(n):\n' +
            '        a, b = b, a + b\n' +
            '    return a\n' +
            '\n' +
            'print(fib_loop(10))  # 55\n' +
            'print(fib_loop(20))  # 6765\n' +
            '```\n\n' +
            '递归版本重复计算大量子问题（fib(5) 会计算 fib(3) 两次），循环版本更高效。' +
            '记忆化递归（用缓存存储已计算结果）可以解决重复计算问题。\n\n' +
            '## 注意事项\n\n' +
            '1. **可变默认参数**：永远不要用可变对象（list/dict/set）作为默认值，用 None 代替。\n' +
            '2. **参数顺序**：位置参数 → 默认参数 → *args → 关键字参数 → **kwargs。\n' +
            '3. **关键字参数可读性**：`func(name="小明", age=20)` 比 `func("小明", 20)` 更清晰，尤其在参数多时。\n' +
            '4. **f-string 中的引号冲突**：f-string 用双引号时内部用单引号，反之亦然。\n' +
            '5. **递归 vs 循环**：能用循环的尽量用循环，递归有栈溢出风险且性能较差。\n\n' +
            '## 实际应用\n\n' +
            '`*args`/`**kwargs` 在框架开发中极其重要——Django/Flask 的视图函数、装饰器、' +
            'ORM 查询接口都大量使用可变参数。配置函数（如 `requests.get(url, **headers)`）' +
            '用 **kwargs 接受可选参数，让接口既灵活又向后兼容。\n\n' +
            '## 扩展知识\n\n' +
            'Python 3.8+ 引入了仅位置参数（`/`）和仅关键字参数（`*`）语法，让 API 设计更精确。' +
            '`functools.partial` 可以固定部分参数创建新函数（偏函数应用）。' +
            '`inspect` 模块可以内省函数的参数签名。类型注解配合 `*args: int` 和 `**kwargs: str` ' +
            '可以标注可变参数类型。',
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
            '## 概念详解\n\n' +
            'Python 的变量作用域遵循 LEGB 规则，决定了变量名的查找顺序和可见性。' +
            '理解作用域是掌握闭包、装饰器等高级特性的基础。\n\n' +
            '## LEGB 规则\n\n' +
            '| 层级 | 名称 | 说明 | 示例 |\n' +
            '|------|------|------|------|\n' +
            '| L | Local | 函数内部局部变量 | `def f(): x = 1` |\n' +
            '| E | Enclosing | 外层嵌套函数的变量 | 闭包中的外层变量 |\n' +
            '| G | Global | 模块级全局变量 | 模块顶层定义的变量 |\n' +
            '| B | Built-in | Python 内置名 | `len`、`print`、`int` |\n\n' +
            '查找变量时按 L→E→G→B 顺序从内到外搜索。函数内可以读取外部变量，但不能直接修改——' +
            '修改需要 `global` 或 `nonlocal` 声明。这一设计防止了意外的全局变量污染。\n\n' +
            '## global 与 nonlocal\n\n' +
            '```python\n' +
            'count = 0  # 全局变量\n' +
            'def increment():\n' +
            '    global count  # 声明修改全局变量\n' +
            '    count += 1\n' +
            '\n' +
            'def make_counter():\n' +
            '    n = 0  # Enclosing 变量\n' +
            '    def counter():\n' +
            '        nonlocal n  # 声明修改外层变量\n' +
            '        n += 1\n' +
            '        return n\n' +
            '    return counter\n' +
            '```\n\n' +
            '过度使用 global 是反模式——全局可变状态让程序难以测试和调试。' +
            '更好的做法是用函数参数和返回值传递数据，或用类封装状态。\n\n' +
            '## 闭包（Closure）\n\n' +
            '**闭包**是携带了外部变量的函数。当内部函数引用了外部函数的变量时，' +
            '即使外部函数已返回，内部函数仍能访问这些变量——它们被"捕获"在闭包中。' +
            '闭包是函数式编程的核心概念，也是装饰器的实现基础。\n\n' +
            '```python\n' +
            '# 工厂函数：闭包的典型应用\n' +
            'def make_multiplier(factor):\n' +
            '    def multiply(x):\n' +
            '        return x * factor  # factor 被闭包捕获\n' +
            '    return multiply\n' +
            '\n' +
            'double = make_multiplier(2)\n' +
            'triple = make_multiplier(3)\n' +
            'print(double(5))  # 10\n' +
            'print(triple(5))  # 15\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：LEGB 作用域演示**\n\n' +
            '```python\n' +
            'x = "全局变量"\n' +
            'def outer():\n' +
            '    x = "外层变量"\n' +
            '    def inner():\n' +
            '        x = "内层变量"\n' +
            '        print(x)  # 内层变量（L）\n' +
            '    inner()\n' +
            '    print(x)  # 外层变量（E）\n' +
            'outer()\n' +
            'print(x)  # 全局变量（G）\n' +
            '```\n\n' +
            '**示例二：闭包计数器**\n\n' +
            '```python\n' +
            'def make_counter():\n' +
            '    count = 0\n' +
            '    def counter():\n' +
            '        nonlocal count\n' +
            '        count += 1\n' +
            '        return count\n' +
            '    return counter\n' +
            '\n' +
            'c = make_counter()\n' +
            'print(c())  # 1\n' +
            'print(c())  # 2\n' +
            'print(c())  # 3 —— count 在闭包中保持状态\n' +
            '```\n\n' +
            '**示例三：闭包陷阱——循环变量**\n\n' +
            '```python\n' +
            '# 陷阱：所有闭包共享同一循环变量\n' +
            'funcs = [lambda: i for i in range(3)]\n' +
            'print([f() for f in funcs])  # [2, 2, 2] —— 不是 [0, 1, 2]！\n' +
            '\n' +
            '# 修复：用默认参数捕获当前值\n' +
            'funcs = [lambda i=i: i for i in range(3)]\n' +
            'print([f() for f in funcs])  # [0, 1, 2]\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **global 慎用**：过度使用 global 让代码难以测试和调试，应用参数/返回值或类替代。\n' +
            '2. **闭包捕获引用**：闭包捕获的是变量本身（引用），而非值——循环中创建闭包需用默认参数捕获当前值。\n' +
            '3. **nonlocal vs global**：`nonlocal` 修改外层嵌套函数变量，`global` 修改模块级变量。\n' +
            '4. **变量遮蔽**：内部作用域的变量名会遮蔽外部同名变量，可能导致意外行为。\n' +
            '5. **修改不可变类型**：函数内修改全局的 int/str 等不可变类型需 `global` 声明，但修改 list/dict 的内容不需要。\n\n' +
            '## 实际应用\n\n' +
            '闭包在回调函数、事件处理、装饰器、配置函数中广泛应用。' +
            'Web 框架中的中间件、GUI 编程的事件绑定、异步编程的回调——都依赖闭包。' +
            '理解作用域和闭包是掌握装饰器、回调、事件处理等高级模式的基础。\n\n' +
            '## 扩展知识\n\n' +
            'Python 闭包有 `__closure__` 属性，存储捕获的变量引用（cell 对象）。' +
            '`nonlocal` 是 Python 3 引入的，Python 2 只能用可变对象（如 list）模拟。' +
            '闭包与对象是两种封装状态的方式——对象是"数据+方法"，闭包是"行为+捕获的数据"。' +
            '函数式编程中的柯里化（currying）本质就是用闭包逐步收集参数。',
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
            '## 概念详解\n\n' +
            '装饰器（decorator）是 Python 的高级特性，用于在不修改原函数的前提下扩展其功能。' +
            '装饰器本质是一个高阶函数：接受函数作为参数，返回新函数。`@装饰器名` 语法糖' +
            '将 `func = decorator(func)` 简化。装饰器常用于日志、计时、权限校验、缓存等横切关注点。\n\n' +
            '## 装饰器模式\n\n' +
            '```python\n' +
            'def my_decorator(func):\n' +
            '    def wrapper(*args, **kwargs):\n' +
            '        # 调用前的逻辑（日志、校验等）\n' +
            '        result = func(*args, **kwargs)\n' +
            '        # 调用后的逻辑（后处理等）\n' +
            '        return result\n' +
            '    return wrapper\n' +
            '\n' +
            '@my_decorator\n' +
            'def my_func():\n' +
            '    pass\n' +
            '# @my_decorator 等价于 my_func = my_decorator(my_func)\n' +
            '```\n\n' +
            'wrapper 用 `*args, **kwargs` 透传所有参数，确保装饰器适用于任意函数签名。\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：日志装饰器**\n\n' +
            '```python\n' +
            'from functools import wraps\n' +
            '\n' +
            'def log_calls(func):\n' +
            '    @wraps(func)  # 保留原函数元信息\n' +
            '    def wrapper(*args, **kwargs):\n' +
            '        print(f"调用 {func.__name__}({args}, {kwargs})")\n' +
            '        result = func(*args, **kwargs)\n' +
            '        print(f"返回: {result}")\n' +
            '        return result\n' +
            '    return wrapper\n' +
            '\n' +
            '@log_calls\n' +
            'def add(a, b):\n' +
            '    """两数相加"""\n' +
            '    return a + b\n' +
            '\n' +
            'print(add(3, 5))\n' +
            '# 输出：调用 add((3, 5), {})\n' +
            '#       返回: 8\n' +
            '#       8\n' +
            '```\n\n' +
            '**示例二：计时装饰器**\n\n' +
            '```python\n' +
            'import time\n' +
            'from functools import wraps\n' +
            '\n' +
            'def timing(func):\n' +
            '    @wraps(func)\n' +
            '    def wrapper(*args, **kwargs):\n' +
            '        start = time.time()\n' +
            '        result = func(*args, **kwargs)\n' +
            '        elapsed = time.time() - start\n' +
            '        print(f"{func.__name__} 耗时 {elapsed:.4f}秒")\n' +
            '        return result\n' +
            '    return wrapper\n' +
            '\n' +
            '@timing\n' +
            'def slow_function():\n' +
            '    time.sleep(0.1)\n' +
            '    return "完成"\n' +
            '```\n\n' +
            '**示例三：带参数的装饰器（三层嵌套）**\n\n' +
            '```python\n' +
            'def repeat(times):\n' +
            '    def decorator(func):\n' +
            '        @wraps(func)\n' +
            '        def wrapper(*args, **kwargs):\n' +
            '            result = None\n' +
            '            for _ in range(times):\n' +
            '                result = func(*args, **kwargs)\n' +
            '            return result\n' +
            '        return wrapper\n' +
            '    return decorator\n' +
            '\n' +
            '@repeat(3)  # 重复执行 3 次\n' +
            'def greet(name):\n' +
            '    print(f"你好, {name}")\n' +
            '\n' +
            'greet("世界")  # 打印 3 次\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **必用 functools.wraps**：不用 `@wraps(func)` 会导致被装饰函数的 `__name__`、`__doc__` 丢失。\n' +
            '2. **参数透传**：wrapper 必须用 `*args, **kwargs` 接收所有参数，否则装饰器不通用。\n' +
            '3. **装饰器顺序**：`@dec1 @dec2 def f()` 等价于 `f = dec1(dec2(f))`——从下到上应用，从上到下执行。\n' +
            '4. **返回值**：wrapper 必须返回 `func(*args, **kwargs)` 的结果，否则原函数的返回值会丢失。\n' +
            '5. **调试困难**：装饰器增加了调用栈深度，错误信息可能难以追踪——保持装饰器逻辑简单。\n\n' +
            '## 实际应用\n\n' +
            '装饰器在 Web 框架中无处不在——Flask 的 `@app.route`（路由注册）、' +
            'Django 的 `@login_required`（权限校验）、`@csrf_exempt`（CSRF 豁免）。' +
            '其他常见用途：API 缓存（`@lru_cache`）、重试机制（`@retry(3)`）、' +
            '日志记录、性能监控、输入验证等。掌握装饰器是 Python 进阶的里程碑。\n\n' +
            '## 扩展知识\n\n' +
            '类也可以作为装饰器（实现 `__call__` 方法），适合需要维护状态的装饰器。' +
            '`functools.lru_cache(maxsize=128)` 是内置的缓存装饰器，自动缓存函数结果。' +
            '装饰器栈：多个装饰器从下到上应用，从上到下执行。' +
            'Python 3.9+ 的 `functools.cache` 是 `lru_cache(maxsize=None)` 的简写。' +
            '装饰器体现了"函数式编程"和"元编程"的思想。',
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
            '## 概念详解\n\n' +
            '面向对象编程（OOP）是组织代码的重要范式。**类**（class）是对象的蓝图/模板，' +
            '**对象**（instance）是类的实例。`class 类名:` 定义类，`类名()` 创建实例。' +
            '`__init__` 是构造方法，在创建对象时自动调用，用于初始化属性。' +
            '`self` 指向当前实例本身（相当于其他语言的 this），必须是实例方法的第一个参数。\n\n' +
            '## OOP 三大支柱\n\n' +
            '| 支柱 | 说明 | Python 实现 |\n' +
            '|------|------|-------------|\n' +
            '| 封装 | 隐藏内部状态，通过方法访问 | `_x` 约定私有，`__x` 名称改写 |\n' +
            '| 继承 | 代码复用，父子类关系 | `class Child(Parent):` |\n' +
            '| 多态 | 同一接口不同实现 | 鸭子类型、方法重写 |\n\n' +
            '## 类属性 vs 实例属性\n\n' +
            '类属性定义在类级别（所有实例共享），实例属性定义在 `__init__` 中（每个实例独立）。' +
            '访问时实例属性优先于类属性——`self.x` 先找实例属性，再找类属性。\n\n' +
            '```python\n' +
            'class Dog:\n' +
            '    species = "犬科"  # 类属性（所有实例共享）\n' +
            '    \n' +
            '    def __init__(self, name):\n' +
            '        self.name = name  # 实例属性（每个实例独立）\n' +
            '\n' +
            'd1 = Dog("旺财")\n' +
            'd2 = Dog("小黑")\n' +
            'print(d1.species, d2.species)  # 犬科 犬科（共享类属性）\n' +
            'print(d1.name, d2.name)        # 旺财 小黑（各自独立）\n' +
            '```\n\n' +
            '⚠️ 可变类属性（如列表）是常见陷阱——所有实例共享同一列表。\n\n' +
            '## 方法类型\n\n' +
            '| 方法类型 | 装饰器 | 第一个参数 | 说明 |\n' +
            '|----------|--------|------------|------|\n' +
            '| 实例方法 | 无 | `self` | 操作实例状态 |\n' +
            '| 类方法 | `@classmethod` | `cls` | 操作类状态/替代构造 |\n' +
            '| 静态方法 | `@staticmethod` | 无 | 工具函数，不访问 self/cls |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：银行账户类**\n\n' +
            '```python\n' +
            'class BankAccount:\n' +
            '    def __init__(self, owner, balance=0):\n' +
            '        self.owner = owner\n' +
            '        self._balance = balance  # _ 表示内部使用\n' +
            '    \n' +
            '    def deposit(self, amount):\n' +
            '        if amount > 0:\n' +
            '            self._balance += amount\n' +
            '            return True\n' +
            '        return False\n' +
            '    \n' +
            '    def withdraw(self, amount):\n' +
            '        if 0 < amount <= self._balance:\n' +
            '            self._balance -= amount\n' +
            '            return True\n' +
            '        return False\n' +
            '    \n' +
            '    def __str__(self):\n' +
            '        return f"{self.owner}的账户余额: {self._balance}"\n' +
            '\n' +
            'acc = BankAccount("小明", 100)\n' +
            'acc.deposit(50)\n' +
            'acc.withdraw(30)\n' +
            'print(acc)  # 小明的账户余额: 120\n' +
            '```\n\n' +
            '**示例二：类方法与静态方法**\n\n' +
            '```python\n' +
            'class Temperature:\n' +
            '    def __init__(self, celsius):\n' +
            '        self.celsius = celsius\n' +
            '    \n' +
            '    @classmethod\n' +
            '    def from_fahrenheit(cls, f):\n' +
            '        return cls((f - 32) * 5 / 9)  # 替代构造方法\n' +
            '    \n' +
            '    @staticmethod\n' +
            '    def is_freezing(celsius):\n' +
            '        return celsius <= 0  # 工具函数\n' +
            '\n' +
            't = Temperature.from_fahrenheit(32)  # 用类方法创建\n' +
            'print(Temperature.is_freezing(-1))    # True\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **self 不能忘**：实例方法第一个参数必须是 self，调用时自动传入，不需要手动写。\n' +
            '2. **可变类属性陷阱**：`class C: items = []` 中所有实例共享同一列表，应在 __init__ 中创建。\n' +
            '3. **_ vs __**：`_x` 是约定私有（不强制），`__x` 触发名称改写（`_ClassName__x`）。\n' +
            '4. **__init__ 不是构造**：`__init__` 是初始化方法，真正的构造是 `__new__`（很少重写）。\n' +
            '5. **Python 无真 private**：这体现了"we are all consenting adults"的哲学——约定优于强制。\n\n' +
            '## 实际应用\n\n' +
            'OOP 在实际开发中无处不在：Django 的 Model 类、ORM 映射、游戏角色设计、' +
            'GUI 组件体系、数据处理管道的处理器类。类将数据和操作绑定在一起，' +
            '让代码结构更清晰、更易维护。Python 的 dataclass（3.7+）简化了数据类的定义。\n\n' +
            '## 扩展知识\n\n' +
            'Python 3.7+ 的 `@dataclass` 装饰器自动生成 `__init__`、`__repr__`、`__eq__` 等方法：' +
            '`@dataclass class Point: x: int; y: int`。`__slots__` 可以固定属性列表，节省内存。' +
            '`collections.namedtuple` 和 `typing.NamedTuple` 是轻量级不可变类的替代方案。' +
            '元类（metaclass）可以控制类的创建过程，是 Python 最高级的特性之一。',
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
            '## 概念详解\n\n' +
            '继承（inheritance）让子类获得父类的所有属性和方法，实现代码复用。' +
            '`class 子类(父类):` 定义继承。子类可以添加新属性/方法，也可以重写（override）父类方法。' +
            '`super()` 调用父类方法——常用于 `super().__init__()` 初始化父类属性。' +
            'Python 支持多重继承（一个类继承多个父类），但需谨慎使用以避免 MRO（方法解析顺序）复杂性。\n\n' +
            '## 继承核心概念\n\n' +
            '| 概念 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| 继承 | 子类获得父类属性和方法 | `class Dog(Animal):` |\n' +
            '| 重写 | 子类重新定义父类方法 | 子类 `def speak(self):` 覆盖父类 |\n' +
            '| super() | 调用父类方法 | `super().__init__(name)` |\n' +
            '| 多重继承 | 继承多个父类 | `class C(A, B):` |\n' +
            '| MRO | 方法解析顺序 | `Cls.mro()` |\n' +
            '| 抽象基类 | 强制子类实现接口 | `abc.ABC` + `@abstractmethod` |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：动物继承层次**\n\n' +
            '```python\n' +
            'class Animal:\n' +
            '    def __init__(self, name):\n' +
            '        self.name = name\n' +
            '    def speak(self):\n' +
            '        return f"{self.name} 发出声音"\n' +
            '\n' +
            'class Dog(Animal):\n' +
            '    def speak(self):  # 重写父类方法\n' +
            '        return f"{self.name} 汪汪叫"\n' +
            '\n' +
            'class Cat(Animal):\n' +
            '    def speak(self):\n' +
            '        return f"{self.name} 喵喵叫"\n' +
            '\n' +
            '# 多态：同一方法，不同行为\n' +
            'animals = [Dog("旺财"), Cat("咪咪")]\n' +
            'for a in animals:\n' +
            '    print(a.speak())\n' +
            '# 旺财 汪汪叫\n' +
            '# 咪咪 喵喵叫\n' +
            '```\n\n' +
            '**示例二：super() 调用父类**\n\n' +
            '```python\n' +
            'class Vehicle:\n' +
            '    def __init__(self, brand, speed):\n' +
            '        self.brand = brand\n' +
            '        self.speed = speed\n' +
            '\n' +
            'class Car(Vehicle):\n' +
            '    def __init__(self, brand, speed, wheels):\n' +
            '        super().__init__(brand, speed)  # 初始化父类属性\n' +
            '        self.wheels = wheels  # 添加子类属性\n' +
            '\n' +
            'c = Car("丰田", 120, 4)\n' +
            'print(f"{c.brand}, {c.speed}km/h, {c.wheels}轮")\n' +
            '```\n\n' +
            '**示例三：鸭子类型**\n\n' +
            '```python\n' +
            '# 鸭子类型：不需要继承，只需有相同方法\n' +
            'class Duck:\n' +
            '    def quack(self): return "嘎嘎"\n' +
            '    def walk(self): return "摇摆走"\n' +
            '\n' +
            'class Person:\n' +
            '    def quack(self): return "模仿嘎嘎"\n' +
            '    def walk(self): return "正常走"\n' +
            '\n' +
            'def observe(thing):\n' +
            '    # 不检查类型，只要有 quack 和 walk 方法即可\n' +
            '    print(thing.quack(), thing.walk())\n' +
            '\n' +
            'observe(Duck())    # 嘎嘎 摇摆走\n' +
            'observe(Person())  # 模仿嘎嘎 正常走\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **组合优于继承**：过度继承导致类层次脆弱，优先用组合（has-a）而非继承（is-a）。\n' +
            '2. **继承层次不宜过深**：建议不超过 3 层，否则难以理解和维护。\n' +
            '3. **多重继承的 MRO**：Python 用 C3 线性化算法确定方法解析顺序，用 `Cls.mro()` 查看。\n' +
            '4. **重写保持签名一致**：子类重写的方法参数应与父类一致（Python 3.12+ 可用 `@override` 标注）。\n' +
            '5. **isinstance vs type**：`isinstance(dog, Animal)` 返回 True（支持继承），`type(dog) == Animal` 返回 False。\n\n' +
            '## 实际应用\n\n' +
            '继承在框架开发中广泛应用：Django 的 `Model` 继承体系、REST framework 的 `APIView`、' +
            '异常处理中的 `class MyError(Exception)`。多态让代码更灵活——' +
            '任何有 `read()` 方法的对象都能传给处理函数，无需继承同一基类。' +
            '抽象基类（ABC）用于定义接口契约，强制子类实现必要方法。\n\n' +
            '## 扩展知识\n\n' +
            '`abc.ABC` + `@abstractmethod` 定义抽象基类：子类必须实现抽象方法才能实例化。' +
            '`Protocol`（Python 3.8+）提供了结构化子类型（鸭子类型的静态检查版本）。' +
            '多重继承的菱形继承问题由 C3 MRO 算法解决。`Mixin` 模式用多重继承添加可选功能，' +
            '如 `class MyModel(Model, TimestampMixin, SoftDeleteMixin):`。',
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
            '## 概念详解\n\n' +
            '魔术方法（magic methods / dunder methods）是 Python 以双下划线开头和结尾的方法，' +
            '如 `__init__`、`__str__`、`__add__`。它们定义了对象与 Python 内置操作的交互行为——' +
            '让自定义类可以像内置类型一样使用 `+`、`==`、`len()`、`print()` 等操作。' +
            '这是 Python "运算符重载"的机制，也是 Python 灵活性的体现。\n\n' +
            '## 常用魔术方法一览\n\n' +
            '| 魔术方法 | 触发操作 | 说明 |\n' +
            '|----------|----------|------|\n' +
            '| `__init__` | `Obj()` | 初始化 |\n' +
            '| `__str__` | `print(obj)` `str(obj)` | 用户友好字符串 |\n' +
            '| `__repr__` | `repr(obj)` | 开发者字符串（可 eval） |\n' +
            '| `__len__` | `len(obj)` | 长度 |\n' +
            '| `__eq__` | `obj == other` | 等于 |\n' +
            '| `__lt__` / `__gt__` | `obj < other` `obj > other` | 比较 |\n' +
            '| `__add__` | `obj + other` | 加法 |\n' +
            '| `__getitem__` | `obj[key]` | 索引访问 |\n' +
            '| `__setitem__` | `obj[key] = val` | 索引赋值 |\n' +
            '| `__iter__` | `for x in obj` | 迭代 |\n' +
            '| `__contains__` | `x in obj` | 成员判断 |\n' +
            '| `__call__` | `obj()` | 像函数一样调用 |\n' +
            '| `__enter__`/`__exit__` | `with obj` | 上下文管理 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例一：__str__ 与 __repr__**\n\n' +
            '```python\n' +
            'class Point:\n' +
            '    def __init__(self, x, y):\n' +
            '        self.x = x\n' +
            '        self.y = y\n' +
            '    def __str__(self):  # 面向用户\n' +
            '        return f"点({self.x}, {self.y})"\n' +
            '    def __repr__(self):  # 面向开发者\n' +
            '        return f"Point({self.x!r}, {self.y!r})"\n' +
            '\n' +
            'p = Point(3, 4)\n' +
            'print(p)       # 点(3, 4) —— 调用 __str__\n' +
            'print(repr(p)) # Point(3, 4) —— 调用 __repr__\n' +
            'print([p])     # [Point(3, 4)] —— 列表中用 __repr__\n' +
            '```\n\n' +
            '`__str__` 面向用户（可读性优先），`__repr__` 面向开发者（精确性优先）。' +
            '如果只实现一个，实现 `__repr__`——print() 在没有 `__str__` 时会回退到 `__repr__`。\n\n' +
            '**示例二：运算符重载**\n\n' +
            '```python\n' +
            'class Vector:\n' +
            '    def __init__(self, x, y):\n' +
            '        self.x = x\n' +
            '        self.y = y\n' +
            '    def __add__(self, other):  # v1 + v2\n' +
            '        return Vector(self.x + other.x, self.y + other.y)\n' +
            '    def __eq__(self, other):   # v1 == v2\n' +
            '        return self.x == other.x and self.y == other.y\n' +
            '    def __abs__(self):         # abs(v)\n' +
            '        return (self.x**2 + self.y**2)**0.5\n' +
            '    def __repr__(self):\n' +
            '        return f"Vector({self.x}, {self.y})"\n' +
            '\n' +
            'v1 = Vector(3, 4)\n' +
            'v2 = Vector(1, 2)\n' +
            'print(v1 + v2)   # Vector(4, 6)\n' +
            'print(v1 == v2)  # False\n' +
            'print(abs(v1))   # 5.0\n' +
            '```\n\n' +
            '**示例三：__len__ 与 __getitem__**\n\n' +
            '```python\n' +
            'class Stack:\n' +
            '    def __init__(self):\n' +
            '        self._items = []\n' +
            '    def push(self, item):\n' +
            '        self._items.append(item)\n' +
            '    def __len__(self):      # len(stack)\n' +
            '        return len(self._items)\n' +
            '    def __getitem__(self, i):  # stack[i]\n' +
            '        return self._items[i]\n' +
            '    def __iter__(self):     # for x in stack\n' +
            '        return iter(self._items)\n' +
            '\n' +
            's = Stack()\n' +
            's.push(1); s.push(2); s.push(3)\n' +
            'print(len(s))   # 3\n' +
            'print(s[0])     # 1\n' +
            'for x in s: print(x, end=" ")  # 1 2 3\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **__str__ vs __repr__**：`__str__` 面向用户，`__repr__` 面向开发者。只实现一个时选 `__repr__`。\n' +
            '2. **运算符语义一致**：`__add__` 应是"加法"而非反直觉操作，保持运算符的语义一致性。\n' +
            '3. **列表中用 __repr__**：print 列表时元素用 `__repr__` 而非 `__str__`，容易混淆。\n' +
            '4. **total_ordering**：用 `@functools.total_ordering` 只实现 `__eq__` 和 `__lt__` 即可自动补全。\n' +
            '5. **不要滥用运算符重载**：只在语义清晰时使用，否则用普通方法更易理解。\n\n' +
            '## 实际应用\n\n' +
            '魔术方法在数据类、集合类型、ORM 模型中广泛应用。' +
            'Django Model 的 `__str__` 定义管理界面显示，`__repr__` 定义调试输出。' +
            'NumPy 的 ndarray 通过魔术方法实现了 `+`、`-`、`*`、`[]` 等操作，让数组运算像数学公式一样直观。' +
            '自定义上下文管理器通过 `__enter__`/`__exit__` 实现资源管理。\n\n' +
            '## 扩展知识\n\n' +
            '`@functools.total_ordering` 装饰器只需实现 `__eq__` 和 `__lt__` 即可自动补全 `__le__`/`__gt__`/`__ge__`。' +
            '`__hash__` 让对象可哈希（能作为字典键/集合元素），实现 `__eq__` 后 `__hash__` 会被设为 None。' +
            '`__slots__` 不是魔术方法但可固定属性列表、节省内存。' +
            '`__new__` 是真正的构造方法（在 `__init__` 之前），用于不可变类型的创建。',
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
            '## 概念详解\n\n' +
            '`@property` 装饰器将方法转换为属性访问——让 `obj.value` 而非 `obj.value()` 访问。' +
            '这实现了"计算属性"（动态计算的属性）和"受控访问"（getter/setter 校验）。' +
            'property 是 Python 实现"封装"的惯用方式——先用公共属性，需要校验时再无缝改为 property，' +
            '调用方代码无需修改。这是 Python 优于 Java（需要 getX/setX 样板）的地方。\n\n' +
            'property 的本质是一种"描述符"（descriptor）——拦截属性访问的机制。' +
            '当你写 `obj.x` 时，Python 先在类（而非实例）中查找名为 x 的对象，' +
            '若它定义了 `__get__`/`__set__`/`__delete__` 方法，就调用这些方法而非直接返回实例字典中的值。' +
            '这种机制让 Python 在不破坏"属性访问"语法的前提下，实现了校验、缓存、计算等高级行为。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            '# property 的完整语法\n' +
            'class C:\n' +
            '    @property\n' +
            '    def x(self):           # getter\n' +
            '        return self._x\n' +
            '\n' +
            '    @x.setter\n' +
            '    def x(self, value):    # setter\n' +
            '        self._x = value\n' +
            '\n' +
            '    @x.deleter\n' +
            '    def x(self):           # deleter\n' +
            '        del self._x\n' +
            '```\n\n' +
            '也可以用 property() 内置函数的调用形式：\n' +
            '```python\n' +
            'x = property(getter, setter, deleter, doc)\n' +
            '```\n\n' +
            '| 形式 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `@property` | 定义 getter | `@property\\n def x(self): return self._x` |\n' +
            '| `@x.setter` | 定义 setter | `@x.setter\\n def x(self, v): self._x = v` |\n' +
            '| `@x.deleter` | 定义 deleter | `@x.deleter\\n def x(self): del self._x` |\n' +
            '| 只读 property | 只定义 getter | 无法赋值/删除 |\n' +
            '| `property(fget, fset, fdel)` | 函数式 | `x = property(get_x, set_x)` |\n' +
            '| `@cached_property` | 缓存结果 | 首次计算后存入实例 __dict__ |\n' +
            '| 描述符 `__get__` | 读取拦截 | `def __get__(self, obj, owner): ...` |\n' +
            '| 描述符 `__set__` | 赋值拦截 | `def __set__(self, obj, value): ...` |\n' +
            '| 描述符 `__delete__` | 删除拦截 | `def __delete__(self, obj): ...` |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：property 三件套（getter/setter/deleter）\n' +
            '```python\n' +
            'class Account:\n' +
            '    def __init__(self, balance):\n' +
            '        self._balance = 0\n' +
            '        self.balance = balance   # 触发 setter 校验\n' +
            '\n' +
            '    @property\n' +
            '    def balance(self):\n' +
            '        return self._balance\n' +
            '\n' +
            '    @balance.setter\n' +
            '    def balance(self, value):\n' +
            '        if not isinstance(value, (int, float)):\n' +
            '            raise TypeError("余额必须是数字")\n' +
            '        if value < 0:\n' +
            '            raise ValueError("余额不能为负")\n' +
            '        self._balance = value\n' +
            '\n' +
            '    @balance.deleter\n' +
            '    def balance(self):\n' +
            '        print("销户，余额清零")\n' +
            '        self._balance = 0\n' +
            '\n' +
            'a = Account(100)\n' +
            'print(a.balance)   # 100，getter\n' +
            'a.balance = 50     # setter 校验通过\n' +
            'del a.balance      # deleter，输出"销户"\n' +
            '```\n\n' +
            '示例 2：自定义描述符 NonNegative\n' +
            '```python\n' +
            'class NonNegative:\n' +
            '    def __set_name__(self, owner, name):\n' +
            '        self.name = name\n' +
            '\n' +
            '    def __get__(self, obj, owner):\n' +
            '        return obj.__dict__.get(self.name, 0)\n' +
            '\n' +
            '    def __set__(self, obj, value):\n' +
            '        if value < 0:\n' +
            '            raise ValueError(f"{self.name} 不能为负数")\n' +
            '        obj.__dict__[self.name] = value\n' +
            '\n' +
            'class Product:\n' +
            '    price = NonNegative()    # 同一描述符复用\n' +
            '    stock = NonNegative()\n' +
            '\n' +
            '    def __init__(self, price, stock):\n' +
            '        self.price = price\n' +
            '        self.stock = stock\n' +
            '\n' +
            'p = Product(99.9, 100)\n' +
            'print(p.price, p.stock)   # 99.9 100\n' +
            'p.price = -1              # ValueError: price 不能为负数\n' +
            '```\n\n' +
            '示例 3：cached_property 缓存昂贵计算\n' +
            '```python\n' +
            'from functools import cached_property\n' +
            '\n' +
            'class DataAnalysis:\n' +
            '    def __init__(self, data):\n' +
            '        self._data = data\n' +
            '\n' +
            '    @cached_property\n' +
            '    def stats(self):\n' +
            '        print("（计算中...）")\n' +
            '        # 模拟昂贵计算\n' +
            '        return {\n' +
            '            "mean": sum(self._data) / len(self._data),\n' +
            '            "max": max(self._data),\n' +
            '            "min": min(self._data),\n' +
            '        }\n' +
            '\n' +
            'd = DataAnalysis([1, 2, 3, 4, 5])\n' +
            'print(d.stats)   # 输出"（计算中...）"后打印字典\n' +
            'print(d.stats)   # 直接返回缓存，不再计算\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **property 是类属性**：`@property` 定义在类层级，但操作的是实例。' +
            '在 `__init__` 中 `self.x = value` 会触发 setter，可借此做初始化校验。\n' +
            '2. **避免在 getter 中赋值**：getter 中写 `self.x = ...` 会再次触发 setter，' +
            '若 setter 又调用 getter 可能导致无限递归。应操作 `self._x`（带下划线的"内部"名）。\n' +
            '3. **只读 property 不能赋值**：只定义 getter 时，`obj.x = 1` 会抛 AttributeError。' +
            '想"只读"就只写 getter。可借 deleter 控制删除。\n' +
            '4. **描述符必须作为类属性**：`__get__`/`__set__` 仅当描述符实例作为类属性时才生效，' +
            '放在实例 __dict__ 中不会触发拦截。\n' +
            '5. **__slots__ 与 property 配合**：`__slots__` 限制实例属性，' +
            '但 property/描述符作为类属性仍可用。用 `__slots__` 节省内存，用 property 控制访问。\n' +
            '6. **dataclass + property**：dataclass 默认生成普通字段，' +
            '如需校验可用 `field(init=False)` + `@property` 自定义。或用 `__post_init__` 校验。\n' +
            '7. **cached_property 不可哈希**：cached_property 把结果存入 `obj.__dict__`，' +
            '因此对定义了 `__slots__` 且无 `__dict__` 的类无效；对不可变对象也无效。\n\n' +
            '## 实际应用\n\n' +
            '- **数据校验**：User.age 的 setter 校验 0-150；Order.quantity 校验正整数；' +
            'Config.port 校验 1-65535。\n' +
            '- **计算属性**：Rectangle.area 由 width*height 计算；Circle.diameter = 2*r；' +
            'Order.total = sum(item.price * item.qty)。\n' +
            '- **ORM 字段**：Django/SQLAlchemy 的 Model 字段用描述符拦截读写，' +
            '自动同步数据库——`user.name = "Tom"` 触发 UPDATE。\n' +
            '- **懒加载**：`@cached_property` 延迟昂贵初始化到首次访问，' +
            '如加载大文件、建立网络连接。\n' +
            '- **类型转换**：setter 中将字符串转 int、字符串 trim、日期解析，' +
            '对外暴露统一接口。\n\n' +
            '## 扩展知识\n\n' +
            '- **数据描述符 vs 非数据描述符**：同时定义 `__get__` 和 `__set__` 的为数据描述符，' +
            '优先级高于实例 __dict__；只定义 `__get__` 的为非数据描述符，' +
            '实例 __dict__ 中的同名键优先。这就是 property（数据描述符）能拦截实例赋值的原因。\n' +
            '- **__set_name__**：Python 3.6 新增，描述符在被赋值为类属性时自动调用，' +
            '可获取属性名——免去手动传 name 参数。\n' +
            '- **property 性能**：property 访问比直接属性稍慢（多一次方法调用），' +
            '但差距极小（约 50-100ns），绝大多数场景可忽略。\n' +
            '- **抽象属性**：`@abstractmethod @property` 可定义抽象属性，' +
            '强制子类实现 getter。\n' +
            '- **描述符协议与元类**：ORM、信号系统、权限框架常基于描述符 + 元类构建，' +
            '理解描述符是进阶 Python 的关键。',
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
            '## 概念详解\n\n' +
            '异常（exception）是程序运行时错误的信号——如除以零、访问不存在的键、文件不存在等。' +
            'Python 用 `try/except` 捕获异常，防止程序崩溃。`try` 块放可能出错的代码，' +
            '`except` 块处理特定异常。未捕获的异常会向上传播直到顶层，导致程序终止并打印 traceback。' +
            '良好的异常处理让程序在错误环境下优雅降级而非崩溃。\n\n' +
            '异常是 Python 错误处理的核心机制——与 C 的"返回错误码"不同，' +
            'Python 用异常将"正常逻辑"与"错误处理"分离，代码更清晰。' +
            '异常是对象，携带类型、错误信息、traceback 等上下文，' +
            '可沿调用栈向上传播直到被 except 捕获——这让底层函数只需 raise，' +
            '由上层决定如何处理（重试、记录日志、转换为用户友好提示）。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'try:\n' +
            '    # 可能抛出异常的代码\n' +
            'except 异常类型1 as e1:\n' +
            '    # 处理异常类型1\n' +
            'except (异常类型2, 异常类型3) as e2:\n' +
            '    # 同时处理多种异常\n' +
            'except Exception as e:    # 兜底（放最后）\n' +
            '    # 处理其他所有非系统异常\n' +
            'else:\n' +
            '    # try 无异常时执行\n' +
            'finally:\n' +
            '    # 无论是否异常都执行（资源清理）\n' +
            '```\n\n' +
            '| 子句 | 执行时机 | 典型用途 |\n' +
            '|------|----------|----------|\n' +
            '| `try` | 总是执行 | 放可能出错的代码 |\n' +
            '| `except 类型` | try 抛出该类型异常 | 错误处理、降级 |\n' +
            '| `except 类型 as e` | 同上，绑定异常对象 | 访问错误信息 |\n' +
            '| `except (A, B)` | 匹配元组中任一类型 | 多异常统一处理 |\n' +
            '| `else` | try 无异常时 | 成功后的逻辑 |\n' +
            '| `finally` | 无论是否异常 | 资源清理 |\n' +
            '| `raise` | 主动抛出异常 | 业务校验失败 |\n' +
            '| `raise ... from e` | 异常链 | 保留原始异常上下文 |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：完整的 try/except/else/finally 流程\n' +
            '```python\n' +
            'def parse_int(s):\n' +
            '    try:\n' +
            '        n = int(s)\n' +
            '    except ValueError as e:\n' +
            '        print(f"转换失败: {e}")\n' +
            '        return None\n' +
            '    except TypeError:\n' +
            '        print("参数类型不对")\n' +
            '        return None\n' +
            '    else:\n' +
            '        print(f"转换成功: {n}")\n' +
            '        return n\n' +
            '    finally:\n' +
            '        print("（parse_int 调用结束）\\n")\n' +
            '\n' +
            'parse_int("42")    # 成功路径\n' +
            'parse_int("abc")   # ValueError\n' +
            'parse_int(None)    # TypeError\n' +
            '```\n\n' +
            '示例 2：异常链（raise from）\n' +
            '```python\n' +
            'def load_config(path):\n' +
            '    try:\n' +
            '        with open(path) as f:\n' +
            '            return f.read()\n' +
            '    except FileNotFoundError as e:\n' +
            '        # 包装成业务异常，保留原始上下文\n' +
            '        raise RuntimeError(f"配置文件缺失: {path}") from e\n' +
            '\n' +
            'try:\n' +
            '    load_config("missing.ini")\n' +
            'except RuntimeError as e:\n' +
            '    print(f"业务异常: {e}")\n' +
            '    print(f"原始原因: {e.__cause__}")\n' +
            '```\n\n' +
            '示例 3：finally 保证资源清理\n' +
            '```python\n' +
            'def read_with_lock(lock, file_path):\n' +
            '    lock.acquire()\n' +
            '    try:\n' +
            '        with open(file_path) as f:\n' +
            '            return f.read()\n' +
            '    finally:\n' +
            '        lock.release()   # 即使 read 抛异常也会释放\n' +
            '\n' +
            '# 模拟\n' +
            'class Lock:\n' +
            '    def acquire(self): print("加锁")\n' +
            '    def release(self): print("解锁")\n' +
            '\n' +
            'read_with_lock(Lock(), "不存在.txt")  # finally 仍会解锁\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **except 顺序从具体到通用**：先写 `ZeroDivisionError` 再写 `Exception`，' +
            '否则通用 except 会"遮蔽"具体异常。\n' +
            '2. **避免裸 except**：`except:` 会捕获 `KeyboardInterrupt`/`SystemExit`，' +
            '导致 Ctrl+C 无法中断程序。用 `except Exception:` 替代。\n' +
            '3. **不要吞异常**：`except: pass` 会隐藏 bug，至少要 `logging.exception()` 记录。\n' +
            '4. **finally 中避免 return**：finally 的 return 会覆盖 try/except 的 return，' +
            '甚至吞掉未处理的异常——这是隐蔽的 bug 源。\n' +
            '5. **else 的价值**：把"成功逻辑"放 else 中，避免 try 块过大——' +
            'try 只放"可能出错的代码"，便于排查。\n' +
            '6. **异常对象属性**：`e.args`（参数元组）、`e.__cause__`（原始异常）、' +
            '`e.__traceback__`（traceback 对象）可程序化分析。\n' +
            '7. **性能**：异常处理在"无异常路径"几乎零成本，但抛出/捕获异常较慢——' +
            '不要用异常做正常流程控制（如用 for + StopIteration 替代 while）。\n\n' +
            '## 实际应用\n\n' +
            '- **Web 请求隔离**：每个请求包 try/except，单个请求出错不影响其他请求；' +
            '记录 traceback 后返回 500。\n' +
            '- **网络重试**：`requests.get()` 超时抛 Timeout，except 后 sleep 重试，' +
            '超过次数则放弃。\n' +
            '- **数据库事务**：SQL 失败时 except 捕获并 rollback，finally 关闭连接。\n' +
            '- **用户输入校验**：int(input()) 可能抛 ValueError，except 后提示重新输入。\n' +
            '- **配置加载**：文件缺失/格式错误用异常处理，提供默认值或友好提示。\n\n' +
            '## 扩展知识\n\n' +
            '- **异常层次**：BaseException → Exception → 具体异常；' +
            'SystemExit/KeyboardInterrupt/GeneratorExit 直接继承 BaseException，' +
            '`except Exception` 不会捕获它们——这是合理的，避免误中断系统信号。\n' +
            '- **自定义异常**：`class MyError(Exception): pass`，可加 `__init__` 携带业务字段，' +
            '上层按类型捕获并处理。\n' +
            '- **异常链**：`raise X from e` 显式链（__cause__），' +
            '`raise X`（在 except 块内）隐式链（__context__）——保留原始 traceback。\n' +
            '- **异常组**：Python 3.11 新增 `ExceptionGroup`/`except*`，' +
            '可同时处理多个并发异常（如 asyncio.gather 的错误聚合）。\n' +
            '- **contextlib.suppress**：`with suppress(FileNotFoundError): os.remove(p)` ' +
            '等价于 try/except pass，更简洁。',
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
            '## 概念详解\n\n' +
            '`raise` 主动抛出异常——当检测到业务逻辑错误时（如参数非法、状态不允许），' +
            '用 `raise ValueError("消息")` 通知调用方。良好的 raise 消息应清晰说明问题：' +
            '`raise ValueError(f"age 必须为正数，得到 {age}")` 比 `raise ValueError("错误")` 有用得多。' +
            '不要用异常处理替代正常的条件判断——异常应用于"异常"情况，而非正常流程控制。\n\n' +
            '自定义异常类继承 `Exception`（或其子类）：`class MyError(Exception): pass`。' +
            '可以添加自定义属性携带更多错误信息：`class ValidationError(Exception): ' +
            'def __init__(self, field, message): self.field = field; super().__init__(message)`。' +
            '自定义异常让错误处理更精确——调用方可以 `except ValidationError` 专门处理验证错误，' +
            '而与其他异常区分开。\n\n' +
            '自定义异常的核心价值是"类型化错误"——用异常类型而非错误码或字符串表达错误类别，' +
            '让调用方可以用 `except 类型` 精确捕获并分别处理。这是大型项目可维护性的关键：' +
            '异常类型本身就是一种"错误契约"，比文档更可靠。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            '# 1. raise 基本用法\n' +
            'raise ValueError("消息")\n' +
            'raise ValueError("消息", arg1, arg2)   # 带额外参数\n' +
            '\n' +
            '# 2. 重新抛出当前异常（在 except 块内）\n' +
            'try:\n' +
            '    ...\n' +
            'except SomeError:\n' +
            '    log.error(...)\n' +
            '    raise                        # 保留原 traceback\n' +
            '\n' +
            '# 3. 异常链\n' +
            'raise NewError("...") from original   # 显式链\n' +
            'raise NewError("...") from None       # 抑制链\n' +
            '\n' +
            '# 4. 自定义异常类\n' +
            'class AppError(Exception):\n' +
            '    """业务异常基类"""\n' +
            '    pass\n' +
            '\n' +
            'class ValidationError(AppError):\n' +
            '    def __init__(self, field, message):\n' +
            '        self.field = field\n' +
            '        super().__init__(f"[{field}] {message}")\n' +
            '```\n\n' +
            '| 用法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `raise 类型("msg")` | 抛出新异常 | `raise ValueError("x")` |\n' +
            '| `raise` | 重新抛出（except 内） | 保留原 traceback |\n' +
            '| `raise X from e` | 异常链（显式） | 包装底层异常 |\n' +
            '| `raise X from None` | 抑制链 | 隐藏实现细节 |\n' +
            '| `class X(Exception)` | 自定义异常 | 业务错误类型 |\n' +
            '| `super().__init__(...)` | 调用父类初始化 | 设置 args/message |\n' +
            '| `e.args` | 异常参数元组 | 访问构造参数 |\n' +
            '| `e.__cause__` | 原始异常 | 异常链上下文 |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：业务异常层次\n' +
            '```python\n' +
            'class AppError(Exception):\n' +
            '    """应用异常基类"""\n' +
            '    pass\n' +
            '\n' +
            'class AuthError(AppError):\n' +
            '    pass\n' +
            '\n' +
            'class TokenExpired(AuthError):\n' +
            '    def __init__(self, token, expired_at):\n' +
            '        self.token = token\n' +
            '        self.expired_at = expired_at\n' +
            '        super().__init__(f"token 已过期: {token}")\n' +
            '\n' +
            'class PermissionDenied(AuthError):\n' +
            '    pass\n' +
            '\n' +
            'def verify(token):\n' +
            '    if not token:\n' +
            '        raise AuthError("token 为空")\n' +
            '    if token == "expired":\n' +
            '        raise TokenExpired(token, "2024-01-01")\n' +
            '    if token == "forbidden":\n' +
            '        raise PermissionDenied("无权访问")\n' +
            '\n' +
            '# 调用方：可粗粒度也可细粒度捕获\n' +
            'for t in ["", "expired", "forbidden"]:\n' +
            '    try:\n' +
            '        verify(t)\n' +
            '    except TokenExpired as e:\n' +
            '        print(f"特定处理: {e}（过期于 {e.expired_at}）")\n' +
            '    except AuthError as e:        # 捕获所有认证异常\n' +
            '        print(f"认证失败: {e}")\n' +
            '    except AppError as e:         # 捕获所有业务异常\n' +
            '        print(f"应用错误: {e}")\n' +
            '```\n\n' +
            '示例 2：异常翻译与链\n' +
            '```python\n' +
            'class ServiceUnavailable(Exception):\n' +
            '    pass\n' +
            '\n' +
            'def call_api(url):\n' +
            '    # 模拟底层网络异常\n' +
            '    raise ConnectionError(f"无法连接 {url}")\n' +
            '\n' +
            'def get_data(url):\n' +
            '    try:\n' +
            '        return call_api(url)\n' +
            '    except ConnectionError as e:\n' +
            '        # 翻译为业务异常，保留原始上下文\n' +
            '        raise ServiceUnavailable(f"服务不可用: {url}") from e\n' +
            '\n' +
            'try:\n' +
            '    get_data("https://api.example.com")\n' +
            'except ServiceUnavailable as e:\n' +
            '    print(f"业务异常: {e}")\n' +
            '    print(f"原始原因: {e.__cause__}")\n' +
            '```\n\n' +
            '示例 3：带校验信息的自定义异常\n' +
            '```python\n' +
            'class ValidationError(Exception):\n' +
            '    def __init__(self, errors):\n' +
            '        # errors: {"field": "错误信息", ...}\n' +
            '        self.errors = errors\n' +
            '        msg = "; ".join(f"{k}: {v}" for k, v in errors.items())\n' +
            '        super().__init__(msg)\n' +
            '\n' +
            'def validate_user(data):\n' +
            '    errors = {}\n' +
            '    if not data.get("name"):\n' +
            '        errors["name"] = "必填"\n' +
            '    if data.get("age", 0) < 0:\n' +
            '        errors["age"] = "不能为负"\n' +
            '    if errors:\n' +
            '        raise ValidationError(errors)\n' +
            '    return True\n' +
            '\n' +
            'try:\n' +
            '    validate_user({"name": "", "age": -1})\n' +
            'except ValidationError as e:\n' +
            '    for field, msg in e.errors.items():\n' +
            '        print(f"字段 {field} 校验失败: {msg}")\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **继承 Exception 而非 BaseException**：BaseException 包括系统退出信号，' +
            '继承它会破坏 `except Exception` 的常规捕获模式。\n' +
            '2. **调用 super().__init__**：自定义异常的 __init__ 必须调用父类 __init__，' +
            '否则 args/str/print 行为异常。\n' +
            '3. **不要吞异常**：`except: pass` 隐藏 bug，至少 `logging.exception()` 记录后再决定是否 re-raise。\n' +
            '4. **raise 消息要具体**：`raise ValueError("错误")` 几乎无信息；' +
            '`raise ValueError(f"age={age} 必须为正")` 让排查更高效。\n' +
            '5. **异常不是流程控制**：用 if 判断预期情况，用 raise 处理"不该发生"的情况；' +
            '滥用异常做循环退出会降低性能和可读性。\n' +
            '6. **from None 谨慎使用**：抑制异常链会丢失上下文，仅在确认底层异常无信息价值时用。\n' +
            '7. **异常类保持简单**：异常类主要用于"分类"，不要塞过多逻辑；复杂处理留给 except 块。\n\n' +
            '## 实际应用\n\n' +
            '- **Web API 错误码映射**：ValidationError→400，AuthError→401，' +
            'PermissionDenied→403，NotFoundError→404，ServerError→500。中间件统一捕获转换。\n' +
            '- **配置校验**：解析 YAML/JSON 时校验字段类型、范围、必填，raise 配置异常。\n' +
            '- **状态机**：非法状态转移 raise StateError，调用方决定回滚或重试。\n' +
            '- **数据导入**：行解析失败 raise RowError(行号, 原因)，汇总后报告所有错误。\n' +
            '- **第三方 SDK 封装**：将底层 SDK 的各种异常翻译为统一业务异常，简化调用方。\n\n' +
            '## 扩展知识\n\n' +
            '- **异常层次设计**：定义 AppError 基类，下分 AuthError/DBError/ValidationError 等；' +
            '调用方可按粒度捕获——except AppError 兜底，except 子类精确处理。\n' +
            '- **__str__ vs __repr__**：异常的 __str__ 决定 print(e) 输出，' +
            '可自定义让错误信息更友好。\n' +
            '- **异常与日志**：`logging.exception()` 自动记录 traceback；' +
            '生产环境应记录完整堆栈便于事后排查。\n' +
            '- **PEP 678 添加备注**：Python 3.11 新增 `e.add_note()`，' +
            '可在异常对象上追加上下文信息，traceback 中会显示。\n' +
            '- **异常组**：Python 3.11 的 ExceptionGroup 适合"多错误聚合"场景，' +
            '如批量校验时一次性报告所有字段错误。',
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
            '## 概念详解\n\n' +
            '`open(路径, 模式)` 打开文件，返回文件对象。模式：`"r"` 读（默认）、`"w"` 写（覆盖）、' +
            '`"a"` 追加、`"b"` 二进制、`"+"` 读写。`"w"` 模式会清空文件——如果不希望覆盖用 `"a"`。' +
            '文件操作后必须关闭（`f.close()`），否则文件句柄泄漏。Pyodide 使用内存文件系统，' +
            '可以读写 `/tmp/` 目录下的文件用于练习。\n\n' +
            '文件 I/O 是程序与外部存储交互的基础——读取配置、处理日志、导入导出数据都依赖文件操作。' +
            'Python 的文件对象是"流"（stream）抽象，统一了磁盘文件、网络套接字、内存缓冲区的接口。' +
            '理解文件模式、编码、缓冲、资源管理是写出可靠 I/O 代码的前提。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'open(file, mode="r", encoding=None, buffering=-1, newline=None)\n' +
            '```\n\n' +
            '| 模式 | 含义 | 文件不存在时 |\n' +
            '|------|------|--------------|\n' +
            '| `"r"` | 只读（默认） | 报错 FileNotFoundError |\n' +
            '| `"w"` | 写（覆盖） | 创建 |\n' +
            '| `"a"` | 追加 | 创建 |\n' +
            '| `"x"` | 独占创建 | 已存在则报错 |\n' +
            '| `"r+"` | 读写 | 报错 |\n' +
            '| `"w+"` | 写读（覆盖） | 创建 |\n' +
            '| `"b"` | 二进制模式（叠加） | 如 `"rb"`/`"wb"` |\n' +
            '| `"t"` | 文本模式（默认，叠加） | 如 `"rt"` |\n\n' +
            '| 方法 | 说明 | 返回 |\n' +
            '|------|------|------|\n' +
            '| `f.read(n)` | 读 n 字节/字符（默认全部） | str/bytes |\n' +
            '| `f.readline()` | 读一行（含 \\n） | str |\n' +
            '| `f.readlines()` | 读所有行为列表 | list[str] |\n' +
            '| `for line in f` | 逐行迭代（推荐） | 每行 str |\n' +
            '| `f.write(s)` | 写字符串 | 写入字符数 |\n' +
            '| `f.writelines(lst)` | 批量写 | None |\n' +
            '| `f.seek(pos)` | 移动指针 | 新位置 |\n' +
            '| `f.tell()` | 当前指针位置 | int |\n' +
            '| `f.flush()` | 刷缓冲到磁盘 | None |\n' +
            '| `f.close()` | 关闭文件 | None |\n' +
            '| `f.fileno()` | 文件描述符 | int |\n' +
            '| `f.readable()/writable()` | 是否可读/写 | bool |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：读写文本与二进制\n' +
            '```python\n' +
            '# 文本写入\n' +
            'with open("/tmp/note.txt", "w", encoding="utf-8") as f:\n' +
            '    f.write("第一行\\n")\n' +
            '    f.write("第二行\\n")\n' +
            '\n' +
            '# 文本读取（全部）\n' +
            'with open("/tmp/note.txt", "r", encoding="utf-8") as f:\n' +
            '    print(f.read())\n' +
            '\n' +
            '# 二进制读写（图片、压缩包等）\n' +
            'with open("/tmp/data.bin", "wb") as f:\n' +
            '    f.write(b"\\x00\\x01\\x02\\xff")\n' +
            '\n' +
            'with open("/tmp/data.bin", "rb") as f:\n' +
            '    print(f.read())   # b"\\x00\\x01\\x02\\xff"\n' +
            '```\n\n' +
            '示例 2：逐行处理日志\n' +
            '```python\n' +
            '# 模拟写入日志\n' +
            'with open("/tmp/app.log", "w") as f:\n' +
            '    f.write("2024-01-01 INFO 启动\\n")\n' +
            '    f.write("2024-01-01 ERROR 连接失败\\n")\n' +
            '    f.write("2024-01-01 WARN 重试\\n")\n' +
            '\n' +
            '# 只输出 ERROR 行\n' +
            'errors = []\n' +
            'with open("/tmp/app.log", "r") as f:\n' +
            '    for lineno, line in enumerate(f, 1):\n' +
            '        if "ERROR" in line:\n' +
            '            errors.append((lineno, line.strip()))\n' +
            '\n' +
            'for ln, text in errors:\n' +
            '    print(f"第 {ln} 行: {text}")\n' +
            '```\n\n' +
            '示例 3：seek/tell 读写切换\n' +
            '```python\n' +
            'with open("/tmp/rw.txt", "w+") as f:\n' +
            '    f.write("abcdef")\n' +
            '    f.seek(0)            # 回到开头\n' +
            '    print(f.read(3))     # abc\n' +
            '    pos = f.tell()       # 3\n' +
            '    f.write("XYZ")       # 从位置 3 写入\n' +
            '    f.seek(0)\n' +
            '    print(f.read())      # abcXYZ\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **必须关闭文件**：裸 `open()` 后忘记 close 会泄漏句柄；' +
            '生产代码**永远**用 `with open(...) as f:`。\n' +
            '2. **w 模式会清空**：`open("x", "w")` 立即清空文件，即使你不写任何内容。' +
            '想保留原内容用 `"a"` 或 `"r+"`。\n' +
            '3. **编码必须显式**：Windows 默认 GBK，Linux/Mac 默认 UTF-8；' +
            '跨平台代码 `open(..., encoding="utf-8")` 必写。\n' +
            '4. **大文件用逐行读**：`f.read()` 一次性加载全部内容，大文件会 OOM；' +
            '用 `for line in f` 流式处理。\n' +
            '5. **二进制用 bytes**：二进制模式读写的是 bytes 而非 str，' +
            '不能指定 encoding。\n' +
            '6. **write 不自动换行**：`f.write("a")` 不会加 \\n，需手动 `f.write("a\\n")`。\n' +
            '7. **writelines 不加换行**：`f.writelines(["a", "b"])` 写入 "ab" 而非 "a\\nb"。\n\n' +
            '## 实际应用\n\n' +
            '- **配置文件**：读取 INI/JSON/YAML 配置；' +
            'json.load(f) / json.dump(obj, f) 处理 JSON。\n' +
            '- **日志处理**：逐行读取日志文件，grep 关键字，统计错误数。\n' +
            '- **CSV/Excel**：csv 模块读写表格；' +
            '`with open(...) as f: reader = csv.reader(f)`。\n' +
            '- **文件上传/下载**：Web 应用接收上传文件写入磁盘，' +
            '或读取磁盘文件返回下载。\n' +
            '- **数据管道**：从文件读入 → 处理 → 写结果文件，' +
            '常配合 pandas/read_csv 做数据分析。\n\n' +
            '## 扩展知识\n\n' +
            '- **pathlib.Path**：现代 Python 推荐 Path.r/read_text/w.read_text 等，' +
            '比 open() 更面向对象。\n' +
            '- **io 模块**：StringIO/BytesIO 在内存中模拟文件，' +
            '适合测试或不落盘的中间处理。\n' +
            '- **缓冲与 flush**：写操作先进缓冲区，flush 或 close 时才落盘；' +
            '崩溃时缓冲数据可能丢失——关键数据及时 flush。\n' +
            '- **newline 参数**：跨平台换行符差异（Windows \\r\\n，Unix \\n），' +
            '`newline=""` 让 csv 模块自己处理。\n' +
            '- **文件锁**：多进程写同一文件需加锁（fcntl/msvcrt），' +
            '否则数据会交错损坏。',
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
            '## 概念详解\n\n' +
            '`with` 语句是资源管理的最佳实践——自动获取和释放资源，即使发生异常也能正确清理。' +
            '最常见的用法是 `with open(...) as f:`——文件在 with 块结束时自动关闭。' +
            '这等价于 try/finally，但代码更简洁且不会忘记清理。with 是 Python 的"上下文管理器"协议。\n\n' +
            '上下文管理器是 Python 对"RAII"（Resource Acquisition Is Initialization）思想的实现——' +
            '资源的生命周期与代码块绑定，进入时获取、退出时释放。这避免了"获取后忘记释放"的经典 bug，' +
            '是专业 Python 代码的标配。除了文件，数据库连接、锁、事务、临时环境切换都可用 with 管理。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'with 表达式 as 变量:\n' +
            '    # 使用变量（资源）\n' +
            '    ...\n' +
            '# 块结束自动释放资源\n' +
            '\n' +
            '# 多个上下文（Python 3.1+）\n' +
            'with open("a") as fa, open("b") as fb:\n' +
            '    ...\n' +
            '\n' +
            '# 多个上下文（Python 3.10+ 更推荐用括号）\n' +
            'with (\n' +
            '    open("a") as fa,\n' +
            '    open("b") as fb,\n' +
            '):\n' +
            '    ...\n' +
            '```\n\n' +
            '上下文管理器协议（类形式）：\n' +
            '```python\n' +
            'class CM:\n' +
            '    def __enter__(self):\n' +
            '        # 获取资源，返回值赋给 as 变量\n' +
            '        return resource\n' +
            '\n' +
            '    def __exit__(self, exc_type, exc_val, exc_tb):\n' +
            '        # 释放资源\n' +
            '        # exc_type 为 None 表示正常退出\n' +
            '        # 返回 True 抑制异常，False/None 传播\n' +
            '        return False\n' +
            '```\n\n' +
            '生成器形式（contextlib.contextmanager）：\n' +
            '```python\n' +
            'from contextlib import contextmanager\n' +
            '\n' +
            '@contextmanager\n' +
            'def cm():\n' +
            '    # __enter__ 逻辑\n' +
            '    try:\n' +
            '        yield resource   # 值赋给 as 变量\n' +
            '    finally:\n' +
            '        # __exit__ 逻辑\n' +
            '        pass\n' +
            '```\n\n' +
            '| 形式 | 适用场景 | 优点 |\n' +
            '|------|----------|------|\n' +
            '| 类 + __enter__/__exit__ | 复杂状态/可复用 | 封装完整 |\n' +
            '| @contextmanager 生成器 | 简单一次性 | 代码简洁 |\n' +
            '| contextlib.suppress(E) | 抑制异常 | 等价 except pass |\n' +
            '| contextlib.redirect_stdout | 重定向输出 | 测试友好 |\n' +
            '| contextlib.ExitStack | 动态多个上下文 | 数量不定 |\n' +
            '| contextlib.chdir(path) | 临时切换目录 | Py3.11+ |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：计时器上下文管理器（类形式）\n' +
            '```python\n' +
            'import time\n' +
            '\n' +
            'class Timer:\n' +
            '    def __enter__(self):\n' +
            '        self.start = time.perf_counter()\n' +
            '        return self\n' +
            '\n' +
            '    def __exit__(self, exc_type, exc_val, exc_tb):\n' +
            '        self.elapsed = time.perf_counter() - self.start\n' +
            '        if exc_type is None:\n' +
            '            print(f"耗时 {self.elapsed:.6f}s（正常）")\n' +
            '        else:\n' +
            '            print(f"耗时 {self.elapsed:.6f}s（异常: {exc_type.__name__}）")\n' +
            '        return False   # 不抑制异常\n' +
            '\n' +
            'with Timer() as t:\n' +
            '    total = sum(range(1_000_000))\n' +
            'print(f"结果: {total}")\n' +
            '```\n\n' +
            '示例 2：临时切换工作目录（生成器形式）\n' +
            '```python\n' +
            'import os\n' +
            'from contextlib import contextmanager\n' +
            '\n' +
            '@contextmanager\n' +
            'def cd(path):\n' +
            '    old = os.getcwd()\n' +
            '    os.chdir(path)\n' +
            '    try:\n' +
            '        yield\n' +
            '    finally:\n' +
            '        os.chdir(old)   # 一定切回原目录\n' +
            '\n' +
            'print("当前:", os.getcwd())\n' +
            'with cd("/tmp"):\n' +
            '    print("进入 with:", os.getcwd())\n' +
            'print("退出后:", os.getcwd())\n' +
            '```\n\n' +
            '示例 3：ExitStack 动态管理\n' +
            '```python\n' +
            'from contextlib import ExitStack\n' +
            '\n' +
            'files = ["a.txt", "b.txt", "c.txt"]\n' +
            'with ExitStack() as stack:\n' +
            '    # 动态打开多个文件，全部由 stack 管理\n' +
            '    handles = [\n' +
            '        stack.enter_context(open(f"/tmp/{n}", "w"))\n' +
            '        for n in files\n' +
            '    ]\n' +
            '    for h, n in zip(handles, files):\n' +
            '        h.write(f"内容 of {n}")\n' +
            '# 全部自动关闭\n' +
            'print("全部文件已关闭")\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **__exit__ 的返回值**：返回 True 会抑制异常（吞掉），' +
            '默认返回 None（等价 False）让异常继续传播——除非确有必要，别返回 True。\n' +
            '2. **@contextmanager 必须 try/finally**：yield 后的清理逻辑要放 finally，' +
            '否则块内异常会导致清理被跳过。\n' +
            '3. **as 变量是 __enter__ 的返回值**：不写 as 则丢弃返回值（如 Timer 不需要返回资源）。\n' +
            '4. **with 不保证"立即"释放**：__exit__ 在块结束时调用，' +
            '但底层资源（如文件缓冲）可能仍有延迟——关键数据 flush。\n' +
            '5. **多个 with 的退出顺序**：后进入的先退出（栈式），如 `with A, B:` 中 B 的 __exit__ 先于 A。\n' +
            '6. **异步上下文管理器**：async with 用 `__aenter__`/`__aexit__`，' +
            '适用于 async 资源（如 aiohttp 的 session）。\n' +
            '7. **不要在 with 外使用资源**：`f = open(...).__enter__()` 后手动管理很危险，' +
            '易漏 close——始终用 with 语法块。\n\n' +
            '## 实际应用\n\n' +
            '- **文件 I/O**：`with open(...) as f` 是标准模式，自动关闭。\n' +
            '- **数据库事务**：`with conn:` 提交/回滚事务；`with conn.cursor() as cur` 管理游标。\n' +
            '- **线程锁**：`with lock:` 获取/释放锁，避免死锁。\n' +
            '- **临时环境**：临时切换目录、临时修改 sys.path、临时设置环境变量。\n' +
            '- **性能监控**：Timer 上下文管理器统计代码块耗时，' +
            '比手动 time.time() 更可靠（异常安全）。\n' +
            '- **测试 mock**：`with patch("module.func"): ...` 临时替换函数，测试后自动恢复。\n\n' +
            '## 扩展知识\n\n' +
            '- **contextlib 工具集**：suppress(E) 抑制异常、' +
            'redirect_stdout/new_redirect 输出、closing(obj) 调用 close、' +
            'nullcontext 空上下文（用于条件性 with）。\n' +
            '- **AsyncExitStack**：异步版的 ExitStack，管理多个 async with。\n' +
            '- **__enter__ 返回 self**：多数上下文管理器 __enter__ 返回 self，' +
            '这样 `with CM() as obj` 中 obj 就是 CM 实例，可访问其属性。\n' +
            '- **contextlib.chdir**：Python 3.11 内置临时切换目录，' +
            '无需再自己实现 cd() 上下文管理器。\n' +
            '- **与 RAII 对比**：C++ 用析构函数保证释放，Python 无析构保证（GC 时机不定），' +
            '所以 with 是 Python 实现 RAII 的官方途径。',
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
            '## 概念详解\n\n' +
            '模块（module）是 Python 代码组织的基本单元——一个 .py 文件就是一个模块。' +
            '`import 模块名` 导入整个模块，用 `模块名.函数` 访问。' +
            '`from 模块 import 函数` 直接导入特定对象，使用时无需模块名前缀。' +
            '`from 模块 import *` 导入全部（不推荐——污染命名空间）。' +
            '`import 模块 as 别名` 给模块起短名（如 `import numpy as np`）。\n\n' +
            '模块化是控制代码复杂度的核心手段——把相关功能放入独立文件，' +
            '通过 import 组合复用。Python 的 import 系统基于"模块对象"——' +
            '导入时执行模块顶层代码，生成 module 对象，缓存于 sys.modules，' +
            '后续 import 同名模块直接返回缓存（不会重复执行）。' +
            '理解这一点能解释"为什么模块顶层代码只执行一次"等现象。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'import 模块                       # 导入整个模块\n' +
            'import 模块 as 别名                # 起别名\n' +
            'from 模块 import 名字              # 导入特定对象\n' +
            'from 模块 import 名字 as 别名      # 导入并起别名\n' +
            'from 模块 import *                # 导入全部（不推荐）\n' +
            'from 包.模块 import 名字           # 从子包导入\n' +
            '\n' +
            '# 相对导入（包内部）\n' +
            'from . import 同级模块             # 当前包\n' +
            'from .. import 上级模块            # 上级包\n' +
            '```\n\n' +
            '| 导入方式 | 访问形式 | 适用场景 |\n' +
            '|----------|----------|----------|\n' +
            '| `import m` | `m.func()` | 通用，命名空间清晰 |\n' +
            '| `import m as a` | `a.func()` | 模块名长（如 numpy） |\n' +
            '| `from m import f` | `f()` | 频繁使用某函数 |\n' +
            '| `from m import f as g` | `g()` | 名字冲突 |\n' +
            '| `from m import *` | 直接用 | ❌ 不推荐 |\n' +
            '| `from . import m` | `m.x` | 包内相对导入 |\n' +
            '| `__import__("m")` | 动态 | 运行时决定模块名 |\n' +
            '| `importlib.import_module` | 动态 | 推荐 API |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：标准库导入与使用\n' +
            '```python\n' +
            'import math\n' +
            'from random import randint, seed\n' +
            'import datetime as dt\n' +
            'from collections import Counter\n' +
            '\n' +
            'print(math.pi)               # 3.141592653589793\n' +
            'print(math.sqrt(16))         # 4.0\n' +
            'print(math.ceil(3.2))        # 4\n' +
            '\n' +
            'seed(42)                     # 固定种子，结果可复现\n' +
            'print(randint(1, 100))       # 2\n' +
            '\n' +
            'now = dt.datetime.now()\n' +
            'print(now.strftime("%Y-%m-%d %H:%M"))\n' +
            '\n' +
            'c = Counter("aabbbcccc")\n' +
            'print(c.most_common(2))      # [("c", 4), ("b", 3)]\n' +
            '```\n\n' +
            '示例 2：__name__ == "__main__" 双用途模式\n' +
            '```python\n' +
            '# 文件: mathutil.py\n' +
            'def is_prime(n):\n' +
            '    if n < 2:\n' +
            '        return False\n' +
            '    for i in range(2, int(n**0.5) + 1):\n' +
            '        if n % i == 0:\n' +
            '            return False\n' +
            '    return True\n' +
            '\n' +
            '# 直接运行时执行测试，被 import 时不执行\n' +
            'if __name__ == "__main__":\n' +
            '    # 自测代码\n' +
            '    assert is_prime(2)\n' +
            '    assert is_prime(13)\n' +
            '    assert not is_prime(4)\n' +
            '    print("所有测试通过")\n' +
            '    for n in range(20):\n' +
            '        if is_prime(n):\n' +
            '            print(n, end=" ")\n' +
            '    print()\n' +
            '```\n\n' +
            '示例 3：动态导入\n' +
            '```python\n' +
            'import importlib\n' +
            '\n' +
            'def get_backend(name):\n' +
            '    # 根据配置动态导入不同模块\n' +
            '    module = importlib.import_module(f"backends.{name}")\n' +
            '    return module.Backend()\n' +
            '\n' +
            '# 模拟：导入标准库 json\n' +
            'mod = importlib.import_module("json")\n' +
            'print(mod.dumps({"a": 1}))   # {"a": 1}\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **避免 `from m import *`**：污染命名空间，易与本地变量冲突，' +
            '且 IDE 无法静态分析；用 `from m import f1, f2` 显式列出。\n' +
            '2. **import 顺序**：PEP 8 推荐 标准库 → 第三方库 → 本地模块，每组间空一行。\n' +
            '3. **循环导入**：A 导入 B、B 又导入 A 会报错；' +
            '解决：把共享代码下沉到 C，或在函数内延迟导入。\n' +
            '4. **模块只执行一次**：import 多次只执行顶层代码一次，' +
            '后续 import 从 sys.modules 取缓存；想重新执行用 `importlib.reload(m)`。\n' +
            '5. **__all__ 控制 `import *`**：模块顶层定义 `__all__ = ["f1", "f2"]`，' +
            '限制 `from m import *` 只导入这些名字。\n' +
            '6. **相对导入只在包内有效**：`from . import x` 在脚本直接运行时会报错，' +
            '需用 `python -m package.module` 方式运行。\n' +
            '7. **虚拟环境**：每个项目用 venv/conda 隔离依赖，' +
            '避免全局 site-packages 污染和版本冲突。\n\n' +
            '## 实际应用\n\n' +
            '- **项目结构**：models/、services/、utils/ 分包组织，' +
            '通过 import 组合，单文件不超 500 行。\n' +
            '- **插件系统**：importlib 动态加载插件模块，主程序不预先依赖。\n' +
            '- **CLI 工具**：`python -m mytool` 运行包内 __main__.py，' +
            '配合 argparse 实现 subcommands。\n' +
            '- **配置管理**：把配置写为 Python 模块（config.py），' +
            'import 即可读取——比 JSON/YAML 更灵活。\n' +
            '- **测试隔离**：测试文件 import 被测模块，' +
            '__name__ == "__main__" 保证被导入时不执行副作用代码。\n\n' +
            '## 扩展知识\n\n' +
            '- **包（package）**：含 __init__.py 的目录；__init__.py 可为空，' +
            '也可写包级初始化代码、定义 __all__。\n' +
            '- **命名空间包**：Python 3.3+ 支持无 __init__.py 的包，' +
            '可跨多个目录"拼合"——适合大型项目分仓。\n' +
            '- **pyproject.toml / setup.py**：定义项目元数据和依赖，' +
            '`pip install -e .` 以"可编辑"模式安装本地包。\n' +
            '- **import hooks**：sys.meta_path 允许自定义导入逻辑，' +
            '如从 zip/网络/数据库加载模块。\n' +
            '- **__pycache__**：import 后 Python 编译为 .pyc 缓存于 __pycache__，' +
            '加速下次导入；修改源文件会自动重编译。',
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
            '## 概念详解\n\n' +
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
            '这三个模块是 Python 与"运行环境"交互的核心——os 面向操作系统，' +
            'sys 面向解释器自身，pathlib 是 os.path 的现代替代。' +
            '理解它们的分工能让你写出跨平台、可配置、可维护的脚本和工具。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'import os, sys\n' +
            'from pathlib import Path\n' +
            '\n' +
            '# os 路径\n' +
            'os.path.join("a", "b", "c.txt")\n' +
            'os.path.exists(p) / isfile / isdir\n' +
            'os.path.basename(p) / dirname(p) / splitext(p)\n' +
            'os.path.abspath(p) / relpath(p, start)\n' +
            'os.path.getsize(p) / getmtime(p)\n' +
            '\n' +
            '# os 文件系统\n' +
            'os.listdir(dir) / os.mkdir(dir) / os.makedirs(dir)\n' +
            'os.remove(p) / os.rename(src, dst)\n' +
            'os.walk(top)   # 递归遍历\n' +
            'os.getcwd() / os.chdir(dir)\n' +
            'os.environ["KEY"]\n' +
            '\n' +
            '# sys\n' +
            'sys.argv            # 命令行参数列表\n' +
            'sys.path            # 模块搜索路径\n' +
            'sys.exit(code)      # 退出\n' +
            'sys.stdin/stdout/stderr\n' +
            'sys.platform        # "win32"/"linux"/"darwin"\n' +
            'sys.version_info    # Python 版本\n' +
            '\n' +
            '# pathlib\n' +
            'p = Path("dir/file.txt")\n' +
            'p.name / p.stem / p.suffix / p.parent\n' +
            'p.exists() / p.is_file() / p.is_dir()\n' +
            'p.read_text(encoding="utf-8")\n' +
            'p.write_text(s, encoding="utf-8")\n' +
            'p.mkdir(parents=True, exist_ok=True)\n' +
            'p.iterdir() / p.glob("*.py") / p.rglob("*.py")\n' +
            'p / "sub" / "file.txt"   # 拼接\n' +
            '```\n\n' +
            '| os.path 方法 | pathlib 属性/方法 | 说明 |\n' +
            '|--------------|-------------------|------|\n' +
            '| `basename(p)` | `p.name` | 文件名 |\n' +
            '| `dirname(p)` | `p.parent` | 父目录 |\n' +
            '| `splitext(p)` | `p.suffix` / `p.stem` | 扩展名/主名 |\n' +
            '| `abspath(p)` | `p.resolve()` | 绝对路径 |\n' +
            '| `join(a, b)` | `a / b` | 拼接 |\n' +
            '| `exists(p)` | `p.exists()` | 是否存在 |\n' +
            '| `isfile(p)` | `p.is_file()` | 是否文件 |\n' +
            '| `isdir(p)` | `p.is_dir()` | 是否目录 |\n' +
            '| `getsize(p)` | `p.stat().st_size` | 大小 |\n' +
            '| `listdir(d)` | `p.iterdir()` | 列出 |\n' +
            '| `walk(top)` | `p.rglob("*")` | 递归遍历 |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：pathlib 文件批量处理\n' +
            '```python\n' +
            'from pathlib import Path\n' +
            '\n' +
            '# 创建测试目录结构\n' +
            'base = Path("/tmp/demo")\n' +
            '(base / "logs").mkdir(parents=True, exist_ok=True)\n' +
            '(base / "logs" / "app.log").write_text("INFO ok\\nERROR fail\\n")\n' +
            '(base / "data.csv").write_text("a,b,c\\n1,2,3\\n")\n' +
            '\n' +
            '# 遍历所有文件\n' +
            'for p in base.rglob("*"):\n' +
            '    if p.is_file():\n' +
            '        print(f"{p.relative_to(base)} ({p.stat().st_size}B)")\n' +
            '\n' +
            '# 按扩展名筛选\n' +
            'logs = list((base / "logs").glob("*.log"))\n' +
            'print(f"日志文件数: {len(logs)}")\n' +
            '```\n\n' +
            '示例 2：os.environ 与跨平台\n' +
            '```python\n' +
            'import os, sys\n' +
            '\n' +
            '# 读取环境变量，带默认值\n' +
            'host = os.environ.get("DB_HOST", "localhost")\n' +
            'port = int(os.environ.get("DB_PORT", "5432"))\n' +
            'print(f"连接 {host}:{port}")\n' +
            '\n' +
            '# 平台判断\n' +
            'if sys.platform == "win32":\n' +
            '    config_dir = Path(os.environ["APPDATA"]) / "myapp"\n' +
            'elif sys.platform == "darwin":\n' +
            '    config_dir = Path.home() / "Library" / "Application Support" / "myapp"\n' +
            'else:\n' +
            '    config_dir = Path.home() / ".config" / "myapp"\n' +
            '\n' +
            'config_dir.mkdir(parents=True, exist_ok=True)\n' +
            'print(f"配置目录: {config_dir}")\n' +
            '```\n\n' +
            '示例 3：sys.argv 简易 CLI\n' +
            '```python\n' +
            'import sys\n' +
            '\n' +
            'def main():\n' +
            '    # sys.argv[0] 是脚本名\n' +
            '    args = sys.argv[1:]\n' +
            '    if not args or args[0] in ("-h", "--help"):\n' +
            '        print("用法: python tool.py <文件> [--verbose]")\n' +
            '        sys.exit(0)\n' +
            '    verbose = "--verbose" in args\n' +
            '    files = [a for a in args if not a.startswith("-")]\n' +
            '    for f in files:\n' +
            '        if verbose:\n' +
            '            print(f"处理 {f}...")\n' +
            '        print(f"done: {f}")\n' +
            '\n' +
            '# 模拟调用\n' +
            'sys.argv = ["tool.py", "a.txt", "b.txt", "--verbose"]\n' +
            'main()\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **跨平台路径分隔符**：永远用 `os.path.join` 或 `Path /`，' +
            '不要硬编码 "/" 或 "\\\\"——Windows 不兼容。\n' +
            '2. **pathlib vs os.path**：新代码优先 pathlib，' +
            '但 os.path 仍广泛存在于老代码和某些库中，两者都要会读。\n' +
            '3. **os.environ vs os.getenv**：`os.environ["X"]` 不存在抛 KeyError，' +
            '`os.getenv("X", default)` 返回默认值更安全。\n' +
            '4. **mkdir parents**：`os.makedirs(p, exist_ok=True)` 等价 pathlib 的 ' +
            '`p.mkdir(parents=True, exist_ok=True)`——避免已存在报错。\n' +
            '5. **sys.exit(code)**：code=0 正常退出，非 0 异常；' +
            '可传字符串作为错误信息打印到 stderr 后以 1 退出。\n' +
            '6. **rglob 递归**：`Path.rglob("*.py")` 递归所有子目录；' +
            '`Path.glob("*.py")` 只当前层。\n' +
            '7. **__file__ 定位资源**：脚本旁的资源文件用 ' +
            '`Path(__file__).parent / "assets"` 定位，不依赖 cwd。\n\n' +
            '## 实际应用\n\n' +
            '- **CLI 工具**：sys.argv 读参数、os.path 处理文件、pathlib 管理项目结构。\n' +
            '- **配置加载**：从 os.environ 读环境变量配置（12-factor app）。\n' +
            '- **批处理脚本**：pathlib.rglob 遍历文件，批量重命名/转换/压缩。\n' +
            '- **日志归档**：按日期分目录，os.walk 扫描过期日志清理。\n' +
            '- **跨平台部署**：sys.platform 分支处理 Windows/Linux/macOS 差异。\n\n' +
            '## 扩展知识\n\n' +
            '- **shutil 模块**：high-level 文件操作——copy/copytree/rmtree/make_archive，' +
            '比 os 的低层操作更方便。\n' +
            '- **tempfile 模块**：创建临时文件/目录，自动清理——比手写 /tmp 路径更安全。\n' +
            '- **argparse**：标准库的 CLI 参数解析器，支持子命令、类型校验、自动帮助。\n' +
            '- **os.scandir**：比 os.listdir 快（返回 DirEntry，避免额外 stat 调用）。\n' +
            '- **pathlib PurePath**：PurePosixPath/PureWindowsPath 用于纯路径操作（不访问文件系统），' +
            '可跨平台构造路径字符串。',
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
            '## 概念详解\n\n' +
            '`datetime` 模块处理日期和时间。`datetime.datetime.now()` 获取当前时间，' +
            '`datetime.date(year, month, day)` 创建日期对象，`datetime.timedelta` 表示时间差。' +
            '日期对象支持加减运算：`date + timedelta` 得到新日期。' +
            '`strftime`（string format time）格式化日期为字符串，`strptime` 解析字符串为日期对象。\n\n' +
            '`json` 模块处理 JSON 数据——Web API 的通用数据格式。`json.dumps(obj)`（dump string）' +
            '把 Python 对象序列化为 JSON 字符串，`json.loads(s)`（load string）反序列化。' +
            '`json.dump(obj, f)` 写入文件，`json.load(f)` 从文件读取。' +
            'Python dict ↔ JSON object，list/tuple ↔ array，str ↔ string，int/float ↔ number，' +
            'True/False ↔ true/false，None ↔ null。\n\n' +
            'datetime 和 json 是 Python 与"外部世界"交换数据的两大支柱——' +
            '时间戳和 JSON 是几乎所有 API 的通用语言。datetime 解决"如何表达和计算时间"，' +
            'json 解决"如何序列化结构化数据"。掌握它们的格式化、序列化、' +
            '时区/编码处理是后端和数据处理的基础能力。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'from datetime import datetime, date, time, timedelta, timezone\n' +
            '\n' +
            'now = datetime.now()             # 本地时间\n' +
            'utc = datetime.now(timezone.utc) # UTC 带时区\n' +
            'd = date(2026, 7, 11)\n' +
            't = time(14, 30, 0)\n' +
            'dt = datetime(2026, 7, 11, 14, 30)\n' +
            '\n' +
            'dt + timedelta(days=1, hours=3)  # 加减\n' +
            'dt - other_dt                    # 得到 timedelta\n' +
            'dt.strftime("%Y-%m-%d %H:%M:%S") # 格式化\n' +
            'datetime.strptime(s, "%Y-%m-%d") # 解析\n' +
            'dt.isoformat()                   # ISO 8601\n' +
            'dt.timestamp()                   # Unix 时间戳\n' +
            'datetime.fromtimestamp(ts)       # 时间戳转 datetime\n' +
            '```\n\n' +
            '| 格式码 | 含义 | 示例 |\n' +
            '|--------|------|------|\n' +
            '| `%Y` | 四位年 | 2026 |\n' +
            '| `%m` | 两位月 | 07 |\n' +
            '| `%d` | 两位日 | 11 |\n' +
            '| `%H` | 24 小时 | 14 |\n' +
            '| `%M` | 分钟 | 30 |\n' +
            '| `%S` | 秒 | 59 |\n' +
            '| `%A` | 星期全名 | Friday |\n' +
            '| `%B` | 月全名 | July |\n' +
            '| `%j` | 年内第几天 | 192 |\n' +
            '| `%U` | 年内第几周 | 28 |\n' +
            '| `%p` | AM/PM | PM |\n\n' +
            '```python\n' +
            'import json\n' +
            '\n' +
            'json.dumps(obj, ensure_ascii=True, indent=None,\n' +
            '           sort_keys=False, default=None)\n' +
            'json.loads(s, object_hook=None)\n' +
            'json.dump(obj, f)\n' +
            'json.load(f)\n' +
            '```\n\n' +
            '| Python | JSON | 备注 |\n' +
            '|--------|------|------|\n' +
            '| dict | object | |\n' +
            '| list/tuple | array | |\n' +
            '| str | string | |\n' +
            '| int/float | number | |\n' +
            '| True/False | true/false | |\n' +
            '| None | null | |\n' +
            '| set | ❌ | 需转 list |\n' +
            '| datetime | ❌ | 需 default=str |\n' +
            '| bytes | ❌ | 需先 decode |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：日期运算与格式化\n' +
            '```python\n' +
            'from datetime import date, timedelta, datetime\n' +
            '\n' +
            'today = date(2026, 7, 11)\n' +
            'print("今天:", today.isoformat())\n' +
            '\n' +
            '# 加 10 天\n' +
            'future = today + timedelta(days=10)\n' +
            'print("10 天后:", future.isoformat())\n' +
            '\n' +
            '# 两个日期相差\n' +
            'diff = future - today\n' +
            'print(f"相差 {diff.days} 天")\n' +
            '\n' +
            '# 格式化\n' +
            'print("格式:", today.strftime("%Y年%m月%d日 %A"))\n' +
            '\n' +
            '# 解析字符串\n' +
            'dt = datetime.strptime("2026-12-31 23:59", "%Y-%m-%d %H:%M")\n' +
            'print("解析:", dt)\n' +
            '```\n\n' +
            '示例 2：JSON 序列化与中文/缩进\n' +
            '```python\n' +
            'import json\n' +
            '\n' +
            'data = {\n' +
            '    "name": "小明",\n' +
            '    "age": 30,\n' +
            '    "scores": [90, 85, 95],\n' +
            '    "active": True,\n' +
            '    "address": None,\n' +
            '}\n' +
            '\n' +
            '# ensure_ascii=False 保留中文，indent 美化\n' +
            's = json.dumps(data, ensure_ascii=False, indent=2)\n' +
            'print(s)\n' +
            '\n' +
            '# 反序列化\n' +
            'parsed = json.loads(s)\n' +
            'print(f"姓名: {parsed[\'name\']}")\n' +
            'avg = sum(parsed["scores"]) / len(parsed["scores"])\n' +
            'print(f"平均分: {avg:.1f}")\n' +
            '```\n\n' +
            '示例 3：自定义序列化（datetime）\n' +
            '```python\n' +
            'import json\n' +
            'from datetime import datetime, date\n' +
            '\n' +
            'class Event:\n' +
            '    def __init__(self, name, when):\n' +
            '        self.name = name\n' +
            '        self.when = when\n' +
            '\n' +
            'def default(o):\n' +
            '    if isinstance(o, (datetime, date)):\n' +
            '        return o.isoformat()\n' +
            '    if isinstance(o, set):\n' +
            '        return sorted(o)\n' +
            '    if hasattr(o, "__dict__"):\n' +
            '        return o.__dict__\n' +
            '    return str(o)\n' +
            '\n' +
            'events = [\n' +
            '    Event("登录", datetime(2026, 7, 11, 10, 0)),\n' +
            '    Event("登出", datetime(2026, 7, 11, 18, 30)),\n' +
            ']\n' +
            '\n' +
            's = json.dumps(events, default=default, ensure_ascii=False, indent=2)\n' +
            'print(s)\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **naive vs aware datetime**：`datetime.now()` 返回 naive（无时区），' +
            '`datetime.now(timezone.utc)` 返回 aware；混用加减会抛 TypeError。\n' +
            '2. **strftime 跨平台限制**：Windows 不支持某些格式码（如 %s），' +
            '跨平台用 isoformat() 更安全。\n' +
            '3. **ensure_ascii=False**：默认 True 会把中文转 \\uXXXX，' +
            '中文场景应设 False。\n' +
            '4. **JSON 键必须是字符串**：dict 的 int 键会被 json.dumps 转为字符串，' +
            'loads 回来键变 str——不要依赖键类型不变。\n' +
            '5. **set/bytes/datetime 不能直接序列化**：用 default 函数或预先转换为 list/str。\n' +
            '6. **json.load 文件需编码**：`open(f, encoding="utf-8")` 防止 Windows GBK 乱码。\n' +
            '7. **strptime 严格匹配**：格式串必须与字符串完全对应，' +
            '多了空格或分隔符不对都会抛 ValueError。\n\n' +
            '## 实际应用\n\n' +
            '- **Web API**：requests 响应 `r.json()` 内部用 json.loads；' +
            '请求体 json=data 用 json.dumps。\n' +
            '- **配置文件**：JSON 存储配置，json.dump/load 读写。\n' +
            '- **日志**：每条日志记 datetime.now().isoformat() 时间戳。\n' +
            '- **定时任务**：比较 datetime 判断是否到点；timedelta 算下次执行。\n' +
            '- **数据持久化**：对象转 dict → JSON 存数据库/文件，' +
            '反序列化重建对象。\n' +
            '- **缓存**：带过期时间的缓存用 datetime 记录写入时间，' +
            '超 timedelta 即失效。\n\n' +
            '## 扩展知识\n\n' +
            '- **时区处理**：Python 3.9+ 推荐 zoneinfo 模块（IANA 时区数据库），' +
            '如 `ZoneInfo("Asia/Shanghai")`；老代码用 pytz。\n' +
            '- **timestamp**：Unix 时间戳是跨语言通用的时间表示，' +
            '`dt.timestamp()` / `datetime.fromtimestamp(ts)` 互转。\n' +
            '- **orjson/ujson**：第三方高性能 JSON 库，比标准 json 快 5-10 倍，' +
            '原生支持 datetime/numpy。\n' +
            '- **JSONPath/jmespath**：查询 JSON 的表达式语言，' +
            '类似 XPath 对 XML。\n' +
            '- **dateutil**：第三方库，`parser.parse("任意日期字符串")` 自动解析，' +
            '比 strptime 灵活；还支持 relativedelta（"下个月第三个周五"）。\n' +
            '- **time vs datetime**：time 模块偏底层（Unix 时间戳），' +
            'datetime 更面向对象——新代码优先 datetime。',
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
            '## 概念详解\n\n' +
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
            '所有函数都返回迭代器——惰性求值，内存友好。处理大数据流时，' +
            '用 itertools 替代列表推导能节省大量内存。这是 Python 函数式编程的核心工具，' +
            '源自 Haskell 的 itertools 让你以"流水线"方式组合处理步骤，而非用嵌套循环。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'from collections import (\n' +
            '    Counter,        # 计数器\n' +
            '    defaultdict,    # 默认值字典\n' +
            '    OrderedDict,    # 有序字典\n' +
            '    deque,          # 双端队列\n' +
            '    namedtuple,     # 命名元组\n' +
            '    ChainMap,       # 多字典链\n' +
            ')\n' +
            '\n' +
            'import itertools as it\n' +
            '```\n\n' +
            '| collections 类型 | 用途 | 典型用法 |\n' +
            '|------------------|------|----------|\n' +
            '| `Counter(iter)` | 计数 | `Counter("aab").most_common(1)` |\n' +
            '| `defaultdict(factory)` | 默认值字典 | `defaultdict(list)` 分组 |\n' +
            '| `deque(iter, maxlen)` | 双端队列 | `appendleft/popleft` 栈/队列 |\n' +
            '| `OrderedDict()` | 有序字典 | `move_to_end`/`popitem(last)` |\n' +
            '| `namedtuple("T", "x y")` | 命名元组 | 不可变记录 |\n' +
            '| `ChainMap(d1, d2)` | 多字典视图 | 配置回退链 |\n\n' +
            '| itertools 函数 | 作用 | 示例 |\n' +
            '|------------------|------|------|\n' +
            '| `chain(*iters)` | 串联 | `chain([1,2], [3,4])` |\n' +
            '| `chain.from_iterable` | 串联嵌套 | `chain.from_iterable([[1],[2]])` |\n' +
            '| `product(*iters)` | 笛卡尔积 | `product([1,2], ["a","b"])` |\n' +
            '| `permutations(iter, r)` | 排列 | `permutations("ABC", 2)` |\n' +
            '| `combinations(iter, r)` | 组合 | `combinations("ABC", 2)` |\n' +
            '| `combinations_with_replacement` | 可重组合 | |\n' +
            '| `groupby(iter, key)` | 分组 | 需先排序 |\n' +
            '| `islice(iter, *args)` | 切片 | `islice(it, 0, 5)` |\n' +
            '| `starmap(func, iter)` | 解包映射 | `starmap(pow, [(2,3),(3,2)])` |\n' +
            '| `accumulate(iter, func)` | 累积 | 前缀和/积 |\n' +
            '| `cycle(iter)` | 无限循环 | `cycle([1,2,3])` |\n' +
            '| `repeat(obj, n)` | 重复 | `repeat("x", 3)` |\n' +
            '| `takewhile/dropwhile` | 条件取/弃 | |\n' +
            '| `zip_longest(*iters)` | 不齐 zip | 填充 fillvalue |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：Counter 词频与算术\n' +
            '```python\n' +
            'from collections import Counter\n' +
            '\n' +
            'text = "the cat sat on the mat the cat"\n' +
            'words = text.split()\n' +
            'counter = Counter(words)\n' +
            'print("词频:", dict(counter))\n' +
            'print("前 2 高频:", counter.most_common(2))\n' +
            '\n' +
            '# Counter 支持算术\n' +
            'c1 = Counter(a=3, b=1)\n' +
            'c2 = Counter(a=1, b=2)\n' +
            'print("相加:", c1 + c2)    # Counter({"a": 4, "b": 3})\n' +
            'print("相减:", c1 - c2)    # Counter({"a": 2})\n' +
            'print("交集:", c1 & c2)    # Counter({"a": 1, "b": 1})\n' +
            'print("并集:", c1 | c2)    # Counter({"a": 3, "b": 2})\n' +
            '```\n\n' +
            '示例 2：defaultdict 分组与 deque\n' +
            '```python\n' +
            'from collections import defaultdict, deque\n' +
            '\n' +
            '# 按首字母分组\n' +
            'words = ["apple", "ant", "banana", "berry", "cherry"]\n' +
            'groups = defaultdict(list)\n' +
            'for w in words:\n' +
            '    groups[w[0]].append(w)\n' +
            'print(dict(groups))\n' +
            '\n' +
            '# 计数器模式\n' +
            'counts = defaultdict(int)\n' +
            'for w in words:\n' +
            '    counts[w[0]] += 1\n' +
            'print(dict(counts))\n' +
            '\n' +
            '# deque 作为队列（FIFO）和栈（LIFO）\n' +
            'q = deque([1, 2, 3], maxlen=5)\n' +
            'q.appendleft(0)    # 入队首\n' +
            'q.append(4)        # 入队尾\n' +
            'print(q)           # deque([0, 1, 2, 3, 4])\n' +
            'print(q.popleft()) # 0（队首出）\n' +
            'print(q.pop())     # 4（队尾出）\n' +
            '```\n\n' +
            '示例 3：itertools 流水线\n' +
            '```python\n' +
            'import itertools as it\n' +
            '\n' +
            '# 笛卡尔积（替代嵌套循环）\n' +
            'for a, b in it.product([1, 2], [\'x\', \'y\']):\n' +
            '    print(a, b, end=" | ")\n' +
            'print()\n' +
            '\n' +
            '# 组合（不放回）\n' +
            'combos = list(it.combinations([1, 2, 3, 4], 2))\n' +
            'print("C(4,2):", combos)\n' +
            '\n' +
            '# groupby：需先按 key 排序\n' +
            'data = [("A", 1), ("A", 2), ("B", 3), ("A", 4), ("B", 5)]\n' +
            'data.sort(key=lambda x: x[0])   # 必须先排序\n' +
            'for key, group in it.groupby(data, key=lambda x: x[0]):\n' +
            '    print(f"{key}: {list(group)}")\n' +
            '\n' +
            '# accumulate 前缀和\n' +
            'nums = [1, 2, 3, 4, 5]\n' +
            'print("前缀和:", list(it.accumulate(nums)))\n' +
            'print("前缀积:", list(it.accumulate(nums, lambda a, b: a * b)))\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **Counter 不存在的键返回 0**：不抛 KeyError，便于统计；' +
            '若需区分"0 次"和"不存在"，用普通 dict。\n' +
            '2. **defaultdict 的 factory**：`defaultdict(list)` 用 list()，' +
            '`defaultdict(int)` 用 int()=0，`defaultdict(set)` 用 set()——factory 必须无参可调用。\n' +
            '3. **deque 的 maxlen**：设置 maxlen 后自动丢弃旧元素——适合固定大小缓冲/日志。\n' +
            '4. **groupby 需先排序**：groupby 只对"连续相同 key"分组，' +
            '未排序的数据会分出多组——务必先 sort。\n' +
            '5. **itertools 惰性**：返回迭代器，只能遍历一次；' +
            '需多次用就 list() 物化——但大数据流尽量保持迭代器到底。\n' +
            '6. **product 内存**：`product` 的结果数是各输入长度乘积，' +
            '大输入会爆炸——避免 product 两个大列表。\n' +
            '7. **namedtuple 不可变**：类似 tuple 但有字段名，' +
            '适合简单不可变记录；复杂场景用 dataclass。\n\n' +
            '## 实际应用\n\n' +
            '- **词频/TopK**：Counter.most_common 找最热搜索词、最畅销商品、最常出错。\n' +
            '- **倒排索引**：defaultdict(list) 建词→文档列表映射，搜索引擎基础。\n' +
            '- **分组聚合**：defaultdict + 循环实现 SQL 的 GROUP BY。\n' +
            '- **BFS 队列**：deque.popleft O(1)，比 list.pop(0) O(n) 高效。\n' +
            '- **LRU 缓存**：OrderedDict.move_to_end + popitem(last=False) 实现 LRU。\n' +
            '- **数据流水线**：chain 串联多数据源 → groupby 分组 → islice 限量。\n' +
            '- **排列组合搜索**：permutations/combinations 生成回溯/穷举的候选集。\n\n' +
            '## 扩展知识\n\n' +
            '- **more-itertools**：第三方扩展，提供 chunked/windowed/unique_everseen 等，' +
            '比标准 itertools 更丰富。\n' +
            '- **Counter 底层**：本质是 defaultdict(int)，加 most_common 等方法。\n' +
            '- **deque vs list**：deque 两端 O(1) 但中间访问 O(n)；' +
            'list 末尾 append O(1) 摊销但头部操作 O(n)——按操作位置选择。\n' +
            '- **namedtuple vs dataclass**：namedtuple 轻量但不可变、无类型注解；' +
            'dataclass 更现代、可变、支持类型——新代码优先 dataclass。\n' +
            '- **accumulate 的 func**：可传 min/max/lambda 实现"迄今为止的最小/最大值"等。\n' +
            '- **itertools 配合 operator**：`starmap(operator.add, pairs)` 比 lambda 更快。',
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
            '## 概念详解\n\n' +
            '迭代器（iterator）是实现了 `__next__()` 方法的对象，每次调用返回下一个值，' +
            '没有更多值时抛 `StopIteration` 异常。所有可迭代对象（iterable）都能用 `iter()` 转为迭代器。' +
            '`for` 循环的本质：调用 `iter()` 获取迭代器，反复调用 `__next__()` 直到 StopIteration。' +
            '迭代器是惰性的——只在需要时才计算下一个值，节省内存。\n\n' +
            '生成器（generator）是创建迭代器的简便方式。函数中包含 `yield` 关键字就变成生成器函数，' +
            '调用它返回一个生成器对象（不执行函数体）。每次 `next()` 执行到 `yield` 暂停并返回值，' +
            '下次 `next()` 从暂停处继续。`yield` 保存函数的局部状态，让"暂停-恢复"成为可能。' +
            '这是 Python 协程的基础。\n\n' +
            '迭代器/生成器是 Python 处理"无限"和"巨大"数据的核心抽象——' +
            '它把"数据"抽象为"值的序列"，按需产生而非一次性全部加载。' +
            '这种惰性求值（lazy evaluation）思想贯穿整个 Python：' +
            'range、map、filter、zip、文件对象都是迭代器/可迭代对象。' +
            '掌握生成器是从"用 Python"到"写出 Pythonic 代码"的关键一步。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            '# 1. 迭代器协议\n' +
            'class MyIter:\n' +
            '    def __iter__(self):           # 返回自身\n' +
            '        return self\n' +
            '    def __next__(self):           # 返回下一个值\n' +
            '        if ...:\n' +
            '            return value\n' +
            '        raise StopIteration\n' +
            '\n' +
            '# 2. 生成器函数（yield）\n' +
            'def gen():\n' +
            '    yield 1\n' +
            '    yield 2\n' +
            '    return  # 可选，引发 StopIteration\n' +
            '\n' +
            '# 3. 生成器表达式\n' +
            'g = (x * x for x in range(10))\n' +
            '\n' +
            '# 4. yield from（委托生成器）\n' +
            'def chain(*iters):\n' +
            '    for it in iters:\n' +
            '        yield from it    # 等价于 for x in it: yield x\n' +
            '\n' +
            '# 5. send / throw / close（协程式生成器）\n' +
            'value = yield expr          # yield 可接收外部 send 的值\n' +
            '```\n\n' +
            '| 概念 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| iterable | 可迭代（有 __iter__） | list/dict/str/range |\n' +
            '| iterator | 迭代器（有 __next__） | iter([]) 的返回值 |\n' +
            '| `iter(obj)` | 转为迭代器 | `iter([1,2,3])` |\n' +
            '| `next(it)` | 取下一个值 | `next(it, default)` |\n' +
            '| `yield value` | 暂停并返回 | 生成器函数内 |\n' +
            '| `yield from it` | 委托子生成器 | 展平嵌套 |\n' +
            '| `gen.send(v)` | 发送值给 yield | 协程式生成器 |\n' +
            '| `gen.close()` | 关闭生成器 | 触发 GeneratorExit |\n' +
            '| `gen.throw(E)` | 在 yield 处抛异常 | |\n' +
            '| 生成器表达式 | 惰性推导 | `(x for x in r)` |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：生成器函数与 next\n' +
            '```python\n' +
            'def counter(max):\n' +
            '    n = 0\n' +
            '    while n < max:\n' +
            '        yield n\n' +
            '        n += 1\n' +
            '\n' +
            'gen = counter(3)\n' +
            'print(next(gen))   # 0\n' +
            'print(next(gen))   # 1\n' +
            'print(next(gen))   # 2\n' +
            '\n' +
            '# next(gen) 会抛 StopIteration，用 for 更安全\n' +
            'for x in counter(5):\n' +
            '    print(x, end=" ")\n' +
            'print()\n' +
            '```\n\n' +
            '示例 2：生成器表达式 vs 列表推导\n' +
            '```python\n' +
            'import sys\n' +
            '\n' +
            '# 列表推导：立即创建完整列表\n' +
            'squares_list = [x * x for x in range(5)]\n' +
            'print("列表:", squares_list, type(squares_list).__name__)\n' +
            '\n' +
            '# 生成器表达式：惰性\n' +
            'squares_gen = (x * x for x in range(5))\n' +
            'print("生成器:", squares_gen, type(squares_gen).__name__)\n' +
            '\n' +
            '# 内存对比\n' +
            'big_list = [x for x in range(1_000_000)]\n' +
            'big_gen = (x for x in range(1_000_000))\n' +
            'print(f"list 内存: {sys.getsizeof(big_list)}B")\n' +
            'print(f"gen  内存: {sys.getsizeof(big_gen)}B")\n' +
            '\n' +
            '# sum 接受生成器，不创建中间列表\n' +
            'print("平方和:", sum(x * x for x in range(100)))\n' +
            '```\n\n' +
            '示例 3：生成器管道与无限序列\n' +
            '```python\n' +
            'from itertools import islice\n' +
            '\n' +
            '# 无限斐波那契\n' +
            'def fibonacci():\n' +
            '    a, b = 0, 1\n' +
            '    while True:\n' +
            '        yield a\n' +
            '        a, b = b, a + b\n' +
            '\n' +
            'print("前 10 项:", list(islice(fibonacci(), 10)))\n' +
            '\n' +
            '# 生成器管道：过滤偶数 → 取前 5 个\n' +
            'def evens(gen):\n' +
            '    for x in gen:\n' +
            '        if x % 2 == 0:\n' +
            '            yield x\n' +
            '\n' +
            'print("前 5 个偶数:", list(islice(evens(fibonacci()), 5)))\n' +
            '\n' +
            '# yield from 委托\n' +
            'def flatten(nested):\n' +
            '    for item in nested:\n' +
            '        if isinstance(item, (list, tuple)):\n' +
            '            yield from flatten(item)   # 递归委托\n' +
            '        else:\n' +
            '            yield item\n' +
            '\n' +
            'print("展平:", list(flatten([1, [2, [3, 4]], 5])))\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **生成器只能遍历一次**：`gen = (x for x in r); list(gen); list(gen)` 第二次为空；' +
            '需多次用就 `list(gen)` 物化或重新创建。\n' +
            '2. **iterable ≠ iterator**：list 是 iterable 但不是 iterator，' +
            'iter(list) 才是 iterator；iterator 自身 __iter__ 返回自己。\n' +
            '3. **next 的 default**：`next(it, default)` 不抛 StopIteration 而返回 default，更安全。\n' +
            '4. **yield from 性能**：比 `for x in it: yield x` 快，且能正确传递 send/throw。\n' +
            '5. **生成器表达式优先于列表推导**：在 sum/max/any/all 等"消费一次"的场景，' +
            '用生成器表达式省内存。\n' +
            '6. **无限生成器要加限制**：`while True: yield` 不会卡死（惰性），' +
            '但遍历时必须用 islice/break 限制，否则无限循环。\n' +
            '7. **generator vs 协程**：生成器用 yield 产生值；协程用 yield 接收值（send）。' +
            '现代异步用 async/await，而非 generator 协程。\n\n' +
            '## 实际应用\n\n' +
            '- **大文件流式处理**：`for line in open(big.log)` 逐行读，内存恒定。\n' +
            '- **ETL 管道**：read → parse → filter → aggregate，每级生成器，惰性串联。\n' +
            '- **数据库惰性查询**：ORM 的 QuerySet 是迭代器，迭代时才执行 SQL。\n' +
            '- **无限序列**：斐波那契、素数、自然数——按需取 N 个。\n' +
            '- **CSV/日志解析**：生成器逐行解析，输出记录对象流。\n' +
            '- **分页加载**：生成器按需加载下一页，实现"无限滚动"。\n\n' +
            '## 扩展知识\n\n' +
            '- **yield from 的语义**：不仅展开子生成器，还透明传递 send/throw/close，' +
            '是协程委托的基础。\n' +
            '- **生成器协程**：`x = yield value` 让 yield 接收 send 的值，' +
            '可用生成器实现协程——但现代代码用 async/await 替代。\n' +
            '- **async 生成器**：`async def` + `yield` 产生异步值流，' +
            '用 `async for` 遍历，适合异步 IO 流式处理。\n' +
            '- **iter(callable, sentinel)**：`iter(lambda: input(), "")` 持续调用直到返回哨兵值，' +
            '是"读输入直到空行"的惯用法。\n' +
            '- **__length_hint__**：某些迭代器提供长度提示（如 range_iterator），' +
            'list() 据此预分配优化。\n' +
            '- **生成器与 GC**：生成器对象持有帧引用，' +
            '未消费完的生成器可能延迟释放大对象——及时 close 或消费完。',
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
            '## 概念详解\n\n' +
            '装饰器（decorator）是接收函数返回函数的高阶函数。`@装饰器名` 语法糖等价于 `func = 装饰器名(func)`。' +
            '装饰器在不修改原函数代码的前提下增加功能——日志、计时、缓存、权限检查、重试。' +
            '这是"开放-封闭原则"的典型实现：对扩展开放（加装饰器），对修改封闭（不改原函数）。\n\n' +
            '装饰器是 Python 实现"横切关注点"（cross-cutting concerns）的标准手段——' +
            '把日志、缓存、权限等与业务逻辑无关的功能从函数中剥离，' +
            '用装饰器统一注入。这让业务函数保持纯粹，关注点分离，代码更可维护。' +
            'Web 框架（Flask/Django/FastAPI）大量用装饰器注册路由、校验权限、限流。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'from functools import wraps\n' +
            '\n' +
            '# 1. 基本装饰器\n' +
            'def deco(func):\n' +
            '    @wraps(func)\n' +
            '    def wrapper(*args, **kwargs):\n' +
            '        # 前置逻辑\n' +
            '        result = func(*args, **kwargs)\n' +
            '        # 后置逻辑\n' +
            '        return result\n' +
            '    return wrapper\n' +
            '\n' +
            '@deco\n' +
            'def f(): ...\n' +
            '# 等价于 f = deco(f)\n' +
            '\n' +
            '# 2. 带参数的装饰器（三层嵌套）\n' +
            'def repeat(times):              # 接收参数\n' +
            '    def decorator(func):        # 接收函数\n' +
            '        @wraps(func)\n' +
            '        def wrapper(*args, **kwargs):\n' +
            '            for _ in range(times):\n' +
            '                result = func(*args, **kwargs)\n' +
            '            return result\n' +
            '        return wrapper\n' +
            '    return decorator\n' +
            '\n' +
            '@repeat(3)\n' +
            'def f(): ...\n' +
            '# 等价于 f = repeat(3)(f)\n' +
            '\n' +
            '# 3. 类装饰器\n' +
            'class Counter:\n' +
            '    def __init__(self, func):\n' +
            '        self.func = func\n' +
            '        self.count = 0\n' +
            '    def __call__(self, *args, **kwargs):\n' +
            '        self.count += 1\n' +
            '        return self.func(*args, **kwargs)\n' +
            '\n' +
            '@Counter\n' +
            'def f(): ...\n' +
            '```\n\n' +
            '| 装饰器类型 | 结构 | 示例 |\n' +
            '|------------|------|------|\n' +
            '| 基本装饰器 | 2 层 | `@timer` |\n' +
            '| 带参数装饰器 | 3 层 | `@repeat(3)` |\n' +
            '| 类装饰器 | __call__ | 可带状态 |\n' +
            '| functools.wraps | 辅助 | 保留 __name__/__doc__ |\n' +
            '| functools.lru_cache | 标准库 | 缓存纯函数 |\n' +
            '| functools.cached_property | 标准库 | 缓存属性 |\n' +
            '| property/staticmethod/classmethod | 内置 | 方法控制 |\n' +
            '| dataclass | 标准库 | 自动生成方法 |\n' +
            '| contextmanager | 标准库 | 生成器转上下文管理器 |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：日志与计时装饰器\n' +
            '```python\n' +
            'import time\n' +
            'from functools import wraps\n' +
            '\n' +
            'def log(func):\n' +
            '    @wraps(func)\n' +
            '    def wrapper(*args, **kwargs):\n' +
            '        print(f"[LOG] 调用 {func.__name__}({args}, {kwargs})")\n' +
            '        result = func(*args, **kwargs)\n' +
            '        print(f"[LOG] {func.__name__} 返回 {result!r}")\n' +
            '        return result\n' +
            '    return wrapper\n' +
            '\n' +
            'def timer(func):\n' +
            '    @wraps(func)\n' +
            '    def wrapper(*args, **kwargs):\n' +
            '        start = time.perf_counter()\n' +
            '        result = func(*args, **kwargs)\n' +
            '        elapsed = (time.perf_counter() - start) * 1000\n' +
            '        print(f"[TIMER] {func.__name__} 耗时 {elapsed:.2f}ms")\n' +
            '        return result\n' +
            '    return wrapper\n' +
            '\n' +
            '@log\n' +
            '@timer\n' +
            'def slow_sum(n):\n' +
            '    return sum(range(n))\n' +
            '\n' +
            'print("结果:", slow_sum(100000))\n' +
            '```\n\n' +
            '示例 2：带参数的重试装饰器\n' +
            '```python\n' +
            'import time\n' +
            'from functools import wraps\n' +
            '\n' +
            'def retry(times=3, delay=0.1):\n' +
            '    def decorator(func):\n' +
            '        @wraps(func)\n' +
            '        def wrapper(*args, **kwargs):\n' +
            '            last_exc = None\n' +
            '            for attempt in range(1, times + 1):\n' +
            '                try:\n' +
            '                    return func(*args, **kwargs)\n' +
            '                except Exception as e:\n' +
            '                    last_exc = e\n' +
            '                    print(f"第 {attempt} 次失败: {e}")\n' +
            '                    if attempt < times:\n' +
            '                        time.sleep(delay)\n' +
            '            raise last_exc\n' +
            '        return wrapper\n' +
            '    return decorator\n' +
            '\n' +
            'call_count = 0\n' +
            '@retry(times=3, delay=0.01)\n' +
            'def unstable():\n' +
            '    global call_count\n' +
            '    call_count += 1\n' +
            '    if call_count < 3:\n' +
            '        raise ValueError("不稳定")\n' +
            '    return "成功"\n' +
            '\n' +
            'print(unstable())   # 第 3 次成功\n' +
            '```\n\n' +
            '示例 3：lru_cache 与类装饰器\n' +
            '```python\n' +
            'from functools import lru_cache\n' +
            '\n' +
            '@lru_cache(maxsize=None)\n' +
            'def fib(n):\n' +
            '    if n < 2:\n' +
            '        return n\n' +
            '    return fib(n - 1) + fib(n - 2)\n' +
            '\n' +
            'print("fib(30) =", fib(30))\n' +
            'print("缓存信息:", fib.cache_info())\n' +
            'fib.cache_clear()   # 清空缓存\n' +
            '\n' +
            '# 类装饰器：统计调用次数\n' +
            'class CallCount:\n' +
            '    def __init__(self, func):\n' +
            '        self.func = func\n' +
            '        self.count = 0\n' +
            '    def __call__(self, *args, **kwargs):\n' +
            '        self.count += 1\n' +
            '        print(f"第 {self.count} 次调用")\n' +
            '        return self.func(*args, **kwargs)\n' +
            '\n' +
            '@CallCount\n' +
            'def greet(name):\n' +
            '    return f"Hi, {name}"\n' +
            '\n' +
            'print(greet("A"))\n' +
            'print(greet("B"))\n' +
            'print("总调用:", greet.count)\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **必用 functools.wraps**：不加 wraps，' +
            'wrapper 会覆盖原函数的 __name__/__doc__/__module__，影响调试和文档生成。\n' +
            '2. **保留返回值**：wrapper 必须 `return func(...)`，否则原函数返回值丢失。\n' +
            '3. **装饰器叠加顺序**：`@A @B def f` 等价 `f = A(B(f))`，' +
            '应用顺序从下往上，执行时 A 的前置先于 B 的前置。\n' +
            '4. **带参数装饰器的三层结构**：外层接参数、中层接函数、内层 wrapper 执行——' +
            '初学者易混淆，记住 `@deco(args)` 时 `deco(args)` 先执行返回真正的装饰器。\n' +
            '5. **lru_cache 的限制**：仅对纯函数有效（相同输入相同输出）；' +
            '参数必须可哈希（list/dict 不行，需转 tuple/frozenset）。\n' +
            '6. **装饰器与类型注解**：装饰后函数类型可能变（如返回 wrapper）；' +
            '用 `@typing.overload` 或 `ParamSpec`/`TypeVar` 保持类型信息。\n' +
            '7. **类装饰器 vs 元类**：类装饰器更简单，元类更强大；' +
            '能用装饰器就用装饰器，需要控制类创建过程才用元类。\n\n' +
            '## 实际应用\n\n' +
            '- **Web 路由**：Flask `@app.route("/")`、FastAPI `@app.get("/users")` 注册路由。\n' +
            '- **权限校验**：`@login_required`、`@admin_only` 在函数前检查身份。\n' +
            '- **限流**：`@rate_limit(100/min)` 防止 API 滥用。\n' +
            '- **缓存**：`@lru_cache` 加速纯函数；`@cached_property` 缓存计算属性。\n' +
            '- **重试**：`@retry(times=3)` 让网络请求更健壮。\n' +
            '- **日志/监控**：`@log`/`@timer` 自动记录调用与耗时，无需侵入业务代码。\n' +
            '- **事务管理**：`@transactional` 让函数在事务中执行，异常自动回滚。\n\n' +
            '## 扩展知识\n\n' +
            '- **装饰器栈 ParamSpec**：Python 3.10+ 的 `ParamSpec` 让装饰器保留原函数签名类型，' +
            '解决"装饰后类型信息丢失"问题。\n' +
            '- **functools.cache**：Python 3.9+ 的 `@cache` 等价 `@lru_cache(maxsize=None)`，更简洁。\n' +
            '- **类装饰器 vs 继承**：类装饰器在类定义后修改，不改变继承关系；' +
            '适合混入额外方法/属性。\n' +
            '- **dataclass 的 field**：`field(default_factory=list)` 处理可变默认值，' +
            '是 dataclass 装饰器配合的常用模式。\n' +
            '- **第三方装饰器库**：`decorator` 库简化装饰器编写（无需手写 wrapper）；' +
            '`wrapt` 提供更强大的代理装饰器。\n' +
            '- **装饰器用于注册**：插件系统用 `@register("plugin_name")` 自动注册函数到全局表——' +
            '装饰器执行时副作用即注册。',
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
            '## 概念详解\n\n' +
            'Python 是动态类型语言，但 Python 3.5+ 支持类型注解（type hint）。' +
            '`def add(a: int, b: int) -> int:` 声明参数和返回值类型。' +
            '类型注解**不影响运行时**——解释器忽略它们，但 IDE（PyCharm、VS Code）和静态检查工具' +
            '（mypy、pyright）能用它们发现 bug。大型项目几乎都用类型注解提升代码可维护性。\n\n' +
            '类型注解是 Python "渐进式类型"（gradual typing）的体现——你可以逐步添加注解，' +
            '未注解的部分视为 Any。这种灵活性让类型注解能在老项目中渐进引入，' +
            '而非"全有或全无"。配合 mypy/pyright 静态检查，类型注解能在运行前发现大量 bug，' +
            '是现代 Python 工程化的基石。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            '# 变量注解\n' +
            'x: int = 1\n' +
            'names: list[str] = []\n' +
            'config: dict[str, int] = {}\n' +
            '\n' +
            '# 函数注解\n' +
            'def f(a: int, b: str = "x", *args: int, **kwargs: str) -> bool: ...\n' +
            '\n' +
            '# 复合类型（Python 3.9+ 内置泛型）\n' +
            'list[int]                  # 列表\n' +
            'dict[str, int]             # 字典\n' +
            'tuple[int, str]            # 固定结构元组\n' +
            'tuple[int, ...]            # 变长同质元组\n' +
            'set[str]                   # 集合\n' +
            '\n' +
            '# 可选与联合（Python 3.10+ 用 |）\n' +
            'int | None                 # 等价 Optional[int]\n' +
            'int | str                  # 等价 Union[int, str]\n' +
            '\n' +
            '# 可调用对象\n' +
            'Callable[[int, int], int]  # 参数 [int,int]，返回 int\n' +
            'Callable[..., int]         # 任意参数，返回 int\n' +
            '\n' +
            '# 泛型\n' +
            'T = TypeVar("T")\n' +
            'def first(items: list[T]) -> T: ...\n' +
            '\n' +
            '# 字面量与枚举\n' +
            'Literal["r", "w"]          # 只能是 "r" 或 "w"\n' +
            '\n' +
            '# TypedDict\n' +
            'class User(TypedDict):\n' +
            '    name: str\n' +
            '    age: int\n' +
            '```\n\n' +
            '| 类型 | 含义 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `int/str/float/bool` | 基本类型 | `x: int` |\n' +
            '| `list[T]` | 列表 | `list[int]` |\n' +
            '| `dict[K, V]` | 字典 | `dict[str, int]` |\n' +
            '| `tuple[T1, T2]` | 定长元组 | `tuple[int, str]` |\n' +
            '| `tuple[T, ...]` | 变长元组 | `tuple[int, ...]` |\n' +
            '| `set[T]` | 集合 | `set[str]` |\n' +
            '| `T \\| None` | 可空 | `int \\| None` |\n' +
            '| `T \\| U` | 联合 | `int \\| str` |\n' +
            '| `Callable[[Args], R]` | 可调用 | `Callable[[int], str]` |\n' +
            '| `Any` | 任意（关闭检查） | |\n' +
            '| `TypeVar("T")` | 泛型变量 | 泛型函数/类 |\n' +
            '| `Generic[T]` | 泛型基类 | `class Stack(Generic[T])` |\n' +
            '| `Literal[...]` | 字面量 | `Literal["r", "w"]` |\n' +
            '| `TypedDict` | 类型化字典 | 固定键值类型 |\n' +
            '| `Protocol` | 结构子类型 | 鸭子类型 + 静态检查 |\n' +
            '| `Final` | 不可变绑定 | `Final[int]` |\n' +
            '| `ClassVar` | 类变量 | 不变实例属性 |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：函数与变量注解\n' +
            '```python\n' +
            'def greet(name: str, times: int = 1) -> str:\n' +
            '    return (f"Hello, {name}! " * times).strip()\n' +
            '\n' +
            'age: int = 25\n' +
            'names: list[str] = ["Alice", "Bob"]\n' +
            'config: dict[str, int] = {"port": 8080}\n' +
            '\n' +
            'result = greet("World", 2)\n' +
            'print(result)\n' +
            'print(f"年龄: {age}, 名单: {names}")\n' +
            '```\n\n' +
            '示例 2：Optional/Union/Callable\n' +
            '```python\n' +
            'from typing import Optional, Union, Callable\n' +
            '\n' +
            '# Optional[T] 等价 T | None\n' +
            'def find_user(user_id: int) -> Optional[str]:\n' +
            '    users = {1: "Alice", 2: "Bob"}\n' +
            '    return users.get(user_id)\n' +
            '\n' +
            '# Union 多类型\n' +
            'def process(data: Union[int, str]) -> str:\n' +
            '    if isinstance(data, int):\n' +
            '        return f"数字: {data}"\n' +
            '    return f"字符串: {data}"\n' +
            '\n' +
            '# Callable 描述函数签名\n' +
            'def apply(func: Callable[[int, int], int], a: int, b: int) -> int:\n' +
            '    return func(a, b)\n' +
            '\n' +
            'print(find_user(1))         # Alice\n' +
            'print(find_user(3))         # None\n' +
            'print(process(42))          # 数字: 42\n' +
            'print(apply(lambda x, y: x + y, 3, 4))   # 7\n' +
            '```\n\n' +
            '示例 3：泛型与 TypedDict/Protocol\n' +
            '```python\n' +
            'from typing import TypeVar, Generic, TypedDict, Protocol\n' +
            '\n' +
            'T = TypeVar("T")\n' +
            '\n' +
            '# 泛型函数\n' +
            'def first(items: list[T]) -> T:\n' +
            '    return items[0]\n' +
            '\n' +
            '# 泛型类\n' +
            'class Stack(Generic[T]):\n' +
            '    def __init__(self) -> None:\n' +
            '        self._items: list[T] = []\n' +
            '    def push(self, x: T) -> None:\n' +
            '        self._items.append(x)\n' +
            '    def pop(self) -> T:\n' +
            '        return self._items.pop()\n' +
            '\n' +
            '# TypedDict: 类型化字典\n' +
            'class User(TypedDict):\n' +
            '    name: str\n' +
            '    age: int\n' +
            '\n' +
            'u: User = {"name": "Alice", "age": 30}\n' +
            'print(first([1, 2, 3]))        # 1\n' +
            'print(first(["a", "b"]))       # a\n' +
            's = Stack[int]()\n' +
            's.push(1); s.push(2)\n' +
            'print(s.pop())                 # 2\n' +
            'print(u)\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **注解不影响运行**：解释器忽略注解，传错类型不会报错；' +
            '需 mypy/pyright 静态检查才能发现类型错误。\n' +
            '2. **Python 版本差异**：3.9+ 用 `list[int]`，3.10+ 用 `int | str`；' +
            '老版本必须 `from typing import List, Union`。\n' +
            '3. **Optional 不是可选参数**：`Optional[int]` 表示"值可为 None"，' +
            '与"参数可省略"（默认值）是两个概念。\n' +
            '4. **Any 慎用**：Any 关闭类型检查，过度使用等于没注解；' +
            '尽量用更具体的类型或泛型。\n' +
            '5. **可变默认值**：`def f(x: list = [])` 仍有可变默认值 bug，' +
            '类型注解不解决它；用 `Optional[list] = None`。\n' +
            '6. **forward reference**：类内方法引用类自身用字符串 `def clone(self) -> "User"`，' +
            '或 `from __future__ import annotations` 让所有注解延迟求值。\n' +
            '7. **mypy 配置**：`mypy --strict` 严格模式检查更全，' +
            '但迁移成本高；可逐步从宽松到严格。\n\n' +
            '## 实际应用\n\n' +
            '- **API 数据模型**：FastAPI 用类型注解自动校验请求、生成 OpenAPI 文档。\n' +
            '- **数据校验**：Pydantic 的 BaseModel 用注解定义字段，自动验证 JSON 输入。\n' +
            '- **大型项目重构**：mypy 在重构时标记所有类型不匹配，防止引入 bug。\n' +
            '- **配置文件**：TypedDict 给配置键值类型，IDE 自动补全。\n' +
            '- **库的公共 API**：类型注解是函数"契约"，调用方无需读实现就知道用法。\n' +
            '- **泛型容器**：Stack/Queue/Tree 用 Generic[T] 支持任意元素类型且类型安全。\n\n' +
            '## 扩展知识\n\n' +
            '- **Protocol（结构子类型）**：定义"有这些方法就是某某类型"，' +
            '类似 Go 的接口——鸭子类型 + 静态检查。\n' +
            '- **ParamSpec**：Python 3.10+ 用于装饰器保留原函数参数类型，' +
            '让类型安全的装饰器成为可能。\n' +
            '- **TypeAlias**：`Vector: TypeAlias = list[float]` 给类型起别名，' +
            '提高可读性。\n' +
            '- **overload**：`@overload` 描述函数多种签名，' +
            '如 `def f(x: int) -> int` 和 `def f(x: str) -> str` 的重载。\n' +
            '- **runtime 注解**：`typing.get_type_hints(func)` 可运行时获取注解，' +
            'Pydantic/FastAPI 据此做运行时验证。\n' +
            '- **pyright vs mypy**：pyright（微软）更快、更严格；mypy（官方）更成熟。' +
            '两者可并用。',
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
            '## 概念详解\n\n' +
            'async/await 是 Python 3.5+ 引入的异步编程语法。`async def` 定义协程函数，' +
            '调用它返回协程对象（不立即执行）。`await` 暂停当前协程等待异步操作完成，' +
            '让出控制权给事件循环（event loop）执行其他协程。`asyncio.run(main())` 启动事件循环。' +
            '异步编程让单线程能高效处理数千个并发 IO 操作——网络请求、文件读写、数据库查询。\n\n' +
            '异步编程的核心是"事件循环 + 协程"——事件循环持续监控就绪的 IO，' +
            '协程在 await 处暂停让出控制权，循环调度其他协程。这种"协作式调度"避免了线程切换开销，' +
            '单线程即可管理上万并发连接。理解 async/await 是从"顺序编程"到"高并发编程"的跨越，' +
            '也是现代后端（FastAPI/aiohttp）的基础能力。\n\n' +
            '## 语法说明\n\n' +
            '```python\n' +
            'import asyncio\n' +
            '\n' +
            '# 1. 定义协程\n' +
            'async def fetch(url: str) -> str:\n' +
            '    await asyncio.sleep(0.1)   # 异步等待\n' +
            '    return f"data from {url}"\n' +
            '\n' +
            '# 2. 启动事件循环\n' +
            'asyncio.run(fetch("x"))\n' +
            '\n' +
            '# 3. 并发执行多个协程\n' +
            'async def main():\n' +
            '    results = await asyncio.gather(\n' +
            '        fetch("a"), fetch("b"), fetch("c"),\n' +
            '    )\n' +
            'asyncio.run(main())\n' +
            '\n' +
            '# 4. 创建后台任务\n' +
            'task = asyncio.create_task(fetch("x"))\n' +
            'result = await task\n' +
            '\n' +
            '# 5. 异步上下文管理器 / 迭代\n' +
            'async with session.get(url) as resp:\n' +
            '    async for line in resp.content:\n' +
            '        print(line)\n' +
            '\n' +
            '# 6. 超时控制\n' +
            'try:\n' +
            '    result = await asyncio.wait_for(coro, timeout=5)\n' +
            'except asyncio.TimeoutError:\n' +
            '    ...\n' +
            '\n' +
            '# 7. 队列（生产者-消费者）\n' +
            'q = asyncio.Queue(maxsize=10)\n' +
            'await q.put(item)\n' +
            'item = await q.get()\n' +
            '```\n\n' +
            '| API | 说明 | 示例 |\n' +
            '|-----|------|------|\n' +
            '| `async def` | 定义协程 | |\n' +
            '| `await coro` | 等待协程 | 暂停让出 |\n' +
            '| `asyncio.run(coro)` | 启动事件循环 | 入口 |\n' +
            '| `asyncio.gather(*coros)` | 并发执行 | 等所有完成 |\n' +
            '| `asyncio.create_task(coro)` | 创建后台任务 | 不立即 await |\n' +
            '| `asyncio.sleep(n)` | 异步 sleep | 不阻塞线程 |\n' +
            '| `asyncio.wait_for(coro, t)` | 超时控制 | TimeoutError |\n' +
            '| `asyncio.Queue` | 异步队列 | 生产者-消费者 |\n' +
            '| `asyncio.Lock/Event/Semaphore` | 异步同步原语 | |\n' +
            '| `async with` | 异步上下文管理器 | aiohttp session |\n' +
            '| `async for` | 异步迭代 | 流式读取 |\n' +
            '| `asyncio.as_completed` | 按完成顺序 | 谁先好谁先返回 |\n' +
            '| `asyncio.TaskGroup` | 任务组（3.11+） | 异常聚合 |\n\n' +
            '## 多个代码示例\n\n' +
            '示例 1：基本协程\n' +
            '```python\n' +
            'import asyncio\n' +
            '\n' +
            'async def hello():\n' +
            '    print("开始")\n' +
            '    await asyncio.sleep(0.1)   # 模拟异步操作\n' +
            '    print("结束")\n' +
            '\n' +
            'asyncio.run(hello())\n' +
            '```\n\n' +
            '示例 2：gather 并发 vs 串行\n' +
            '```python\n' +
            'import asyncio\n' +
            'import time\n' +
            '\n' +
            'async def fetch(name, delay):\n' +
            '    print(f"{name} 开始")\n' +
            '    await asyncio.sleep(delay)\n' +
            '    print(f"{name} 完成")\n' +
            '    return f"{name}结果"\n' +
            '\n' +
            'async def main():\n' +
            '    start = time.time()\n' +
            '    # 并发执行 3 个协程\n' +
            '    results = await asyncio.gather(\n' +
            '        fetch("A", 0.3),\n' +
            '        fetch("B", 0.1),\n' +
            '        fetch("C", 0.2),\n' +
            '    )\n' +
            '    print("结果:", results)\n' +
            '    print(f"总耗时: {time.time()-start:.2f}s")\n' +
            '\n' +
            'asyncio.run(main())\n' +
            '# 总耗时约 0.3s（取最慢的），而非 0.6s（串行累加）\n' +
            '```\n\n' +
            '示例 3：超时、取消、生产者-消费者\n' +
            '```python\n' +
            'import asyncio\n' +
            '\n' +
            'async def slow():\n' +
            '    await asyncio.sleep(10)\n' +
            '    return "done"\n' +
            '\n' +
            'async def with_timeout():\n' +
            '    try:\n' +
            '        # 超时控制\n' +
            '        return await asyncio.wait_for(slow(), timeout=0.5)\n' +
            '    except asyncio.TimeoutError:\n' +
            '        return "超时"\n' +
            '\n' +
            'async def producer(q):\n' +
            '    for i in range(3):\n' +
            '        await q.put(i)\n' +
            '        await asyncio.sleep(0.05)\n' +
            '    await q.put(None)   # 结束信号\n' +
            '\n' +
            'async def consumer(q):\n' +
            '    while True:\n' +
            '        item = await q.get()\n' +
            '        if item is None:\n' +
            '            break\n' +
            '        print(f"处理 {item}")\n' +
            '        q.task_done()\n' +
            '\n' +
            'async def main():\n' +
            '    print("超时测试:", await with_timeout())\n' +
            '    q = asyncio.Queue()\n' +
            '    await asyncio.gather(producer(q), consumer(q))\n' +
            '\n' +
            'asyncio.run(main())\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **协程不直接执行**：`async def f()` 调用返回协程对象，' +
            '必须 `await f()` 或 `asyncio.run(f())` 或 `create_task(f())` 才会执行。\n' +
            '2. **不要在异步中调用同步阻塞**：`time.sleep()`/`requests.get()` 会阻塞整个事件循环，' +
            '导致所有协程停滞；用 `asyncio.sleep`/`aiohttp`。\n' +
            '3. **CPU 密集型用多进程**：asyncio 是单线程，CPU 密集任务会阻塞循环；' +
            '用 `ProcessPoolExecutor` + `loop.run_in_executor` 卸载。\n' +
            '4. **gather 异常处理**：默认任一协程异常就抛，其他被取消；' +
            '用 `return_exceptions=True` 收集所有结果（含异常）。\n' +
            '5. **asyncio.run 是入口**：每个程序只能有一个顶层 asyncio.run，' +
            '它创建新事件循环并在结束时清理——不要嵌套调用。\n' +
            '6. **取消协程**：`task.cancel()` 触发 CancelledError，' +
            '协程内 try/finally 清理资源；Python 3.11+ 用 TaskGroup 自动管理。\n' +
            '7. **async 上下文管理器**：aiohttp session 等异步资源必须用 `async with`，' +
            '不能用普通 with。\n\n' +
            '## 实际应用\n\n' +
            '- **高并发 Web**：FastAPI + uvicorn 用异步处理数千并发请求，' +
            '性能远超 Flask/Django。\n' +
            '- **爬虫**：aiohttp/httpx 异步抓取，10 倍于 requests。\n' +
            '- **实时通信**：WebSocket 长连接，聊天/推送/游戏。\n' +
            '- **数据库**：asyncpg/aiomysql 异步查询，避免 IO 等待。\n' +
            '- **微服务**：一个请求并发调用多个下游服务，串行 300ms 变并行 100ms。\n' +
            '- **任务队列**：asyncio.Queue + 多 worker 实现生产者-消费者。\n' +
            '- **流式处理**：async for 逐行/逐块读网络流，内存恒定。\n\n' +
            '## 扩展知识\n\n' +
            '- **事件循环后端**：Linux 用 epoll，macOS 用 kqueue，Windows 用 IOCP；' +
            'uvloop 是 libuv 加速版，比默认 asyncio 快 2-4 倍。\n' +
            '- **TaskGroup（3.11+）**：`async with TaskGroup() as tg: tg.create_task(coro)`，' +
            '异常自动传播和取消，比 gather 更安全。\n' +
            '- **anyio**：抽象 asyncio/trio 后端，让库兼容多种异步运行时。\n' +
            '- **trio**：第三方异步框架，强调"结构化并发"，避免协程泄漏。\n' +
            '- **async generators**：`async def` + `yield` 产生异步值流，' +
            '`async for` 遍历——适合流式响应。\n' +
            '- **async + 多线程/多进程**：用 run_in_executor 把阻塞任务卸载到线程池/进程池，' +
            '兼顾异步和阻塞库。\n' +
            '- **asyncio vs JavaScript**：概念类似（Promise ≈ coroutine），' +
            '但 Python 用显式 await，JS 的 async function 自动返回 Promise。',
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