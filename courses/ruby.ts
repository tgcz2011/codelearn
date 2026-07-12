import type { CourseContent } from './types'

/**
 * Ruby 入门课程（7 章 21 节）
 *
 * Ruby 代码通过在线编译器（ruby 3.x）执行。
 * puts / print / p 输出被捕获为 stdout，expected_output 与输出文本对应（不含末尾换行）。
 * puts 会在每个参数后自动加换行；print 不加换行；p 会调用 inspect 并换行，适合调试。
 * 本课程参考 runoob.com 级别的详细程度，覆盖从环境运行到元编程基础的核心主题。
 */
export const rubyCourse: CourseContent = {
  id: 'course-ruby',
  slug: 'ruby',
  title: 'Ruby 入门到精通',
  description: '从 puts 输出到元编程基础，系统学习 Ruby 核心语法、块与迭代器、面向对象与鸭子类型，写出优雅且富有表现力的代码。',
  language: 'ruby',
  difficulty: 'beginner',
  chapters: [
    // ================================================================
    // 第 1 章：Ruby 入门
    // ================================================================
    {
      id: 'rb-ch1',
      title: 'Ruby 入门',
      order: 0,
      lessons: [
        {
          id: 'rb-ch1-l1',
          title: '环境与运行',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            'Ruby 是由松本行弘（Matz）于 1995 年创造的动态、面向对象的脚本语言。' +
            '它的设计哲学是"让程序员感到快乐"——语法优雅、表达力强，遵循"最小惊讶原则"。' +
            'Ruby 是纯粹的面向对象语言：一切皆对象，连整数 1 都有方法（如 1.to_s 转字符串）。' +
            'Rails（Ruby on Rails）Web 框架让 Ruby 一举成名，至今仍是构建 Web 应用的流行选择。\n\n' +
            '运行 Ruby 代码需要先安装解释器。macOS 自带 ruby（版本较旧），推荐用 Homebrew：brew install ruby；' +
            'Windows 推荐 RubyInstaller；Linux 用 apt install ruby。安装后运行 ruby -v 查看版本。' +
            'Ruby 代码以 .rb 为扩展名，用 ruby hello.rb 运行；也可用 irb 交互式解释器逐行实验。\n\n' +
            '## 基本语法\n\n' +
            '最经典的 Ruby 程序：puts "Hello, World!"。\n\n' +
            '| 输出方法 | 说明 | 示例 |\n' +
            '|----------|------|------|\n' +
            '| puts | 输出后换行，数组按元素逐行打印 | puts "hi" |\n' +
            '| print | 输出不换行 | print "hi" |\n' +
            '| p | 调用 inspect 并换行，适合调试 | p "hi" 输出带引号 |\n' +
            '| pp | 美化打印，复杂数据可读 | pp [1,2,3] |\n\n' +
            'Ruby 语句末尾不需要分号（写分号也合法但不推荐）。注释用 # 单行，多行用 =begin/=end（顶格写）。' +
            '字符串推荐双引号——它支持转义和插值（#{}），单引号除反斜杠外不处理转义，也不支持插值。\n\n' +
            '## 示例演示\n\n' +
            '示例一：puts 与 print 的区别。puts 每次调用后自动换行；print 不换行，两段文本会在同一行。' +
            '单独 puts（无参数）输出一个空行。\n\n' +
            '示例二：p 与 puts 的调试差异。p 调用对象的 inspect 方法，显示带引号和结构的"调试视图"；' +
            'puts 调用 to_s 显示"用户友好视图"。puts 对数组逐行打印元素，p 显示方括号结构。\n\n' +
            '示例三：字符串插值。双引号字符串中 #{表达式} 会求值并转为字符串，单引号不支持插值。' +
            '插值表达式可以是任意 Ruby 表达式，包括方法调用。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 单双引号不等价：双引号会插值，单引号不会。需要插值或转义时必须用双引号。\n' +
            '2. puts 对数组逐行打印：puts [1,2,3] 输出三行而非 [1, 2, 3]；想看结构用 p。\n' +
            '3. 方法调用的括号可省略：puts("hi") 等价 puts "hi"，但参数歧义时建议加括号。\n' +
            '4. p 返回参数本身：p x 打印后返回 x 可链式；puts 返回 nil。\n' +
            '5. Windows 换行符：\r\n 可能影响输出匹配，注意统一用 \n。\n\n' +
            '## 真实场景应用\n\n' +
            '在 Rails 开发中，puts 常用于 rake 任务和后台 job 的日志输出；' +
            'p 和 pp 用于控制台调试——快速查看变量真实结构和类型。' +
            '编写 CLI 工具时，print 配合 STDOUT.flush 实现进度条；' +
            '生成报表时用 puts 逐行输出 CSV 行。理解输出方法的差异是调试和日志的基础。\n\n' +
            '## 小结\n\n' +
            '本节介绍了 Ruby 运行环境（安装、ruby -v、irb）和四个核心输出方法：' +
            'puts（换行）、print（不换行）、p（调试）、pp（美化）。' +
            '记住"一切皆对象"和"单双引号差异"这两个 Ruby 核心特征，后续学习会不断用到。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习变量与数据类型：局部变量、整数与浮点数、字符串、布尔与 nil，以及动态类型的特点。',
          examples: [
            {
              title: 'Hello World',
              code: `# 最经典的入门程序
puts "Hello, World!"
puts "你好，Ruby"`,
              explanation:
                'puts 输出一行文本并自动换行。双引号字符串支持中文（Ruby 源码默认 UTF-8）。两条 puts 各占一行。',
            },
            {
              title: 'puts 与 print 对比',
              code: `puts "第一行"
puts "第二行"
print "不换行"
print "继续"
puts
puts "结束"`,
              explanation:
                'puts 每次自动换行；print 不换行，所以"不换行继续"在同一行。单独的 puts 输出一个空行。',
            },
            {
              title: 'p 调试输出',
              code: `name = "Ruby"
arr = [1, 2, 3]
p name
p arr
puts name
puts arr`,
              explanation:
                'p 显示对象的 inspect 视图：字符串带引号，数组显示方括号结构。puts 显示 to_s 视图：字符串无引号，数组逐行打印。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 puts 输出 Hello, Ruby!。',
              starter_code: `puts ___`,
              expected_output: 'Hello, Ruby!',
              hints: [
                'puts 的参数是一个字符串',
                '字符串用双引号包裹',
                '答案: "Hello, Ruby!"',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明变量 name 赋值为 Ruby，用字符串插值输出 你好，Ruby。',
              starter_code: `name = "Ruby"
puts ___`,
              expected_output: '你好，Ruby',
              hints: [
                '使用双引号字符串和 #{name} 插值',
                '写法: "你好，#{name}"',
                '注意使用中文逗号',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 p 输出字符串 Ruby（应输出带引号的调试视图）。',
              starter_code: `p ___`,
              expected_output: '"Ruby"',
              hints: [
                'p 会调用 inspect，给字符串加引号',
                '参数是字符串 "Ruby"',
                '答案: "Ruby"',
              ],
            },
          ],
          realWorldScenario:
            '开发 Rails 应用时，rake 任务和后台 Sidekiq job 中常用 puts 输出进度信息；' +
            '调试时用 p 快速查看变量结构，比 puts 更能反映真实类型。掌握输出方法的差异是排查问题的第一步。',
        },
        {
          id: 'rb-ch1-l2',
          title: '变量与数据类型',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            'Ruby 是动态类型语言——变量无需声明类型，赋值时自动绑定类型，且可重新指向不同类型对象。' +
            '变量名以小写字母或下划线开头，推荐 snake_case 风格。Ruby 中"一切皆对象"：' +
            '整数 42 是 Integer 类的实例，字符串是 String 的实例，连 nil 和 true/false 也是对象。' +
            '这意味着所有值都有方法，如 42.even? 返回 true，"hi".upcase 返回 "HI"。\n\n' +
            'Ruby 核心数据类型包括：Integer（整数）、Float（浮点数）、String（字符串）、' +
            'Symbol（符号）、Array（数组）、Hash（哈希）、Boolean（true/false）、NilClass（nil）。' +
            '每个对象都有 class 方法返回其类型，is_a? 判断类型。\n\n' +
            '## 基本语法\n\n' +
            '变量赋值：name = "Ruby"、count = 42、pi = 3.14、flag = true、nothing = nil。\n\n' +
            '| 方法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| obj.class | 返回对象的类 | 42.class 返回 Integer |\n' +
            '| obj.is_a?(Klass) | 判断是否某类（含继承） | 42.is_a?(Integer) 返回 true |\n' +
            '| obj.respond_to?(:m) | 是否能响应方法 m | "a".respond_to?(:upcase) 返回 true |\n' +
            '| obj.nil? | 是否为 nil | nil.nil? 返回 true |\n\n' +
            '并行赋值：a, b, c = 1, 2, 3，交换变量：a, b = b, a。' +
            '整数支持任意精度（无溢出），2 ** 100 得到精确大整数。' +
            '浮点数有精度问题：0.1 + 0.2 等于 0.30000000000000004，金融计算建议用 BigDecimal。\n\n' +
            '布尔值只有 true 和 false，分别是 TrueClass 和 FalseClass 的单例。' +
            'nil 表示"没有值"。在条件判断中，只有 nil 和 false 为假，' +
            '其余（包括 0、空字符串、空数组）都为真——这与 C/JavaScript 不同，需特别留意。\n\n' +
            '## 示例演示\n\n' +
            '示例一：类型与判等方法。class 返回类型对象，is_a? 判断继承关系，' +
            'respond_to? 检查方法是否存在——鸭子类型的核心就是 respond_to? 而非类型检查。\n\n' +
            '示例二：并行赋值与交换。并行赋值底层利用数组，可优雅交换变量或解构数组。\n\n' +
            '示例三：浮点数精度与大整数。round(n) 四舍五入到 n 位小数。整数除法 10/3 得 3（截断），' +
            '需浮点结果时让一方为浮点：10.0 / 3 或 10.fdiv(3)。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 0 为真：if 0 then ... end 会执行——只有 nil 和 false 为假。\n' +
            '2. 整数除法截断：7 / 2 得 3 而非 3.5，需 7.0 / 2 或 7.fdiv(2)。\n' +
            '3. 浮点精度：不要用 == 比较浮点数，用 (a - b).abs < 1e-9 或 BigDecimal。\n' +
            '4. 动态类型陷阱：x = 1; x = "a" 合法但易错，建议保持变量类型稳定。\n' +
            '5. nil 调方法报错：nil.upcase 抛 NoMethodError，需先判 nil 或用 &. 安全导航。\n\n' +
            '## 真实场景应用\n\n' +
            '在 Web 开发中，从数据库或 API 读取的数据类型混杂，需用 is_a? 或 respond_to? 校验。' +
            '处理金额用 BigDecimal 避免浮点误差；处理可能为 nil 的用户输入用 &. 安全导航（如 user&.name）。' +
            '理解"0 为真"能避免条件判断的经典 bug。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 动态类型系统：变量赋值即绑定类型，一切皆对象，常用 class/is_a?/respond_to? 查类型。' +
            '核心记忆点：只有 nil 和 false 为假；整数除法截断；浮点有精度问题。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习运算符与表达式：算术、比较、逻辑运算符，以及 Ruby 特有的方法型运算符。',
          examples: [
            {
              title: '基本数据类型',
              code: `age = 20
price = 9.9
name = "Ruby"
flag = true
empty = nil
puts age.class
puts price.class
puts name.class
puts flag.class
puts empty.class`,
              explanation:
                '输出 Integer、Float、String、TrueClass、NilClass。Ruby 一切皆对象，每个值都有 class 方法。',
            },
            {
              title: '并行赋值与交换',
              code: `a, b, c = 1, 2, 3
puts "a=#{a} b=#{b} c=#{c}"
a, b = b, a
puts "交换后 a=#{a} b=#{b}"
first, second = [100, 200]
puts "first=#{first} second=#{second}"`,
              explanation: '并行赋值可一次给多个变量赋值，交换无需临时变量。也可用数组解构赋值。',
            },
            {
              title: '整数与浮点除法',
              code: `puts 10 / 3        # 3 整数除法
puts 10.0 / 3      # 3.333... 浮点除法
puts 10.fdiv(3)    # 3.333... fdiv 方法
puts 10 % 3        # 1 取余
puts 2 ** 10       # 1024 幂运算
puts (0.1 + 0.2).round(1)  # 0.3`,
              explanation:
                '整数除法截断，需浮点结果时用浮点字面量或 fdiv。% 取余，** 幂运算。round 解决浮点显示问题。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '声明变量 lang 赋值为 Ruby，用插值输出 语言：Ruby。',
              starter_code: `lang = "Ruby"
puts ___`,
              expected_output: '语言：Ruby',
              hints: [
                '使用双引号插值 #{lang}',
                '写法: "语言：#{lang}"',
                '注意冒号是中文全角',
              ],
            },
            {
              type: 'output-match',
              prompt: '用并行赋值交换 a 和 b（a=1,b=2），输出交换后的 a=2 b=1。',
              starter_code: `a, b = 1, 2
___
puts "a=#{a} b=#{b}"`,
              expected_output: 'a=2 b=1',
              hints: [
                '并行赋值语法: a, b = b, a',
                '把 ___ 替换为 a, b = b, a',
                'Ruby 并行赋值会先求右侧再赋值',
              ],
            },
            {
              type: 'output-match',
              prompt: '输出 10 除以 3 的浮点结果，保留 2 位小数（应为 3.33）。',
              starter_code: `puts (10.0 / 3).___`,
              expected_output: '3.33',
              hints: [
                '用 round 方法保留小数位',
                'round(2) 保留两位小数',
                '10.0 / 3 约等于 3.3333，round(2) 得 3.33',
              ],
            },
          ],
          realWorldScenario:
            '处理电商订单金额时必须用 BigDecimal 避免浮点误差，否则累加千笔订单可能差几分钱。' +
            '从 API 解析数据时，用 is_a? 检查字段类型、用 &. 安全导航防止 nil 调用报错。',
        },
        {
          id: 'rb-ch1-l3',
          title: '运算符与表达式',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            'Ruby 的运算符大多是方法的语法糖——例如 a + b 实际调用 a.+(b)，' +
            '这意味着你可以重定义运算符（重新定义 + 方法）。这是 Ruby 元编程能力的体现，' +
            '也是它比多数语言更灵活的原因。运算符分为：算术、比较、逻辑、位运算、赋值增强等。\n\n' +
            '## 基本语法\n\n' +
            '算术运算符：+ - * /（注意 7/2 得 3 整数除法）、%（取余）、**（幂）；' +
            '方法形式：div（整除）、fdiv（浮点除）、modulo（取余）、divmod（同时得商和余）。\n\n' +
            '比较运算符：== 值相等（1 == 1.0 为 true）、!=、< > <= >=、' +
            '<=> 飞船运算符（返回 -1/0/1）、=== case 相等（范围/类匹配）、' +
            'eql? 严格相等（含类型，1.eql?(1.0) 为 false）、equal? 同一对象。\n\n' +
            '逻辑运算符：&&（与）、||（或）、!（非）；and/or/not 优先级低不推荐混用。' +
            '||= 是惯用写法：x ||= 10 表示仅当 x 为 nil/false 时赋值，常用于缓存惰性求值。' +
            '短路求值：&& 左边为假则不计算右边；|| 左边为真则不计算右边，常用于默认值。\n\n' +
            '飞船运算符 <=> 返回 -1（小于）、0（相等）、1（大于），是排序的核心——' +
            '实现 Comparable 模块只需定义 <=>，即可获得 < > == 等方法。\n\n' +
            '## 示例演示\n\n' +
            '示例一：算术与取余。divmod 一次返回商和余数数组。Ruby 的 % 结果与除数同号' +
            '（-7 % 3 得 2），不像 C 与被除数同号。\n\n' +
            '示例二：飞船运算符与排序。sort 内部用 <=> 比较。自定义类实现 <=> 即可排序。\n\n' +
            '示例三：||= 与短路求值。||= 是 Ruby 最常用惯用法之一，实现缓存、默认值、惰性初始化。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. and/or 优先级低：a = b or c 解析为 (a = b) or c，应优先用 ||。\n' +
            '2. == 与 eql? 区别：1 == 1.0 为 true，但 1.eql?(1.0) 为 false（类型不同）。\n' +
            '3. === 用于 case：case x when 1..5 隐式用 ===，范围和类都有特殊语义。\n' +
            '4. 取余符号：-7 % 3 在 Ruby 中得 2（与除数同号），C 中得 -1。\n' +
            '5. ||= 不是线程安全：并发场景需用 Mutex，否则可能重复初始化。\n\n' +
            '## 真实场景应用\n\n' +
            '||= 广泛用于缓存与默认值：@result ||= query_db 避免重复查询；' +
            'config[:timeout] ||= 30 设置默认超时。<=> 用于自定义排序规则。' +
            '短路求值让代码简洁：user && user.name 防止 nil 报错（Ruby 2.3+ 推荐 user&.name）。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 运算符：算术（注意整数除法截断）、比较（飞船 <=> 是核心）、逻辑（||= 惯用法）。' +
            '记住运算符本质是方法调用，理解这一点是后续元编程的基础。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习控制流：if/unless/case 条件语句，while/until 循环，以及 Ruby 强大的迭代器。',
          examples: [
            {
              title: '算术与取余',
              code: `puts 7 / 2          # 3 整数除法
puts 7.0 / 2        # 3.5 浮点除法
puts 7 % 3          # 1 取余
puts 7.divmod(3).inspect  # [2, 1] 商和余
puts 2 ** 10        # 1024 幂
puts -7 % 3         # 2 与除数同号`,
              explanation: 'divmod 一次返回 [商, 余]。Ruby 取余结果与除数同号，-7 % 3 得 2 而非 -1。',
            },
            {
              title: '飞船运算符与排序',
              code: `puts (1 <=> 2)      # -1
puts (2 <=> 2)      # 0
puts (3 <=> 2)      # 1
arr = [3, 1, 2]
puts arr.sort.inspect   # [1, 2, 3]`,
              explanation: '<=> 返回 -1/0/1 表示小于/等于/大于。sort 内部用 <=> 比较，自定义类实现 <=> 即可排序。',
            },
            {
              title: '||= 与默认值',
              code: `count = nil
count ||= 10        # nil 为假，赋值 10
puts count          # 10
count ||= 20        # 10 为真，不赋值
puts count          # 10
name = nil
display = name || "匿名"
puts display        # 匿名`,
              explanation: '||= 仅当左侧为 nil/false 时赋值，常用于缓存和默认值。|| 短路求值可设默认值。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '计算 2 的 8 次方并输出（应为 256）。',
              starter_code: `puts 2 ___ 8`,
              expected_output: '256',
              hints: ['幂运算符是 **', '把 ___ 替换为 **', '2 ** 8 等于 256'],
            },
            {
              type: 'output-match',
              prompt: '用飞船运算符比较 5 和 8，输出结果（应为 -1）。',
              starter_code: `puts (5 ___ 8)`,
              expected_output: '-1',
              hints: ['飞船运算符是 <=>', '5 < 8 所以返回 -1', '把 ___ 替换为 <=>'],
            },
            {
              type: 'output-match',
              prompt: '用 ||= 给 nil 变量赋默认值 100 并输出（应为 100）。',
              starter_code: `x = nil
x ___= 100
puts x`,
              expected_output: '100',
              hints: ['||= 是"仅 nil/false 时赋值"运算符', '把 ___ 替换为 ||', 'x ||= 100 因为 x 是 nil 会赋值 100'],
            },
          ],
          realWorldScenario:
            '在 Rails 中，||= 几乎是每个开发者每天都会用的惯用法：缓存实例变量、设置配置默认值、' +
            '惰性初始化昂贵对象。理解运算符本质是方法调用，是阅读 Rails 源码和 DSL 设计的基础。',
        },
      ],
    },
    // ================================================================
    // 第 2 章：控制流
    // ================================================================
    {
      id: 'rb-ch2',
      title: '控制流',
      order: 1,
      lessons: [
        {
          id: 'rb-ch2-l1',
          title: '条件语句',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            '条件语句让程序根据不同情况执行不同代码。Ruby 的条件语句包括 if/elsif/else、' +
            'unless（与 if 相反）、case/when（多分支）、三元运算符 ? :。' +
            'Ruby 的条件语句既是语句也是表达式——它们有返回值，可以用于赋值。' +
            '这是 Ruby 优雅的来源之一：status = if active then "on" else "off" end。\n\n' +
            '## 基本语法\n\n' +
            'if 语句：if 条件 ... elsif 条件 ... else ... end。' +
            'unless 是 if 的反义：unless 条件 ... end 等价于 if !条件。' +
            'Ruby 还支持修饰符形式：puts "ok" if done（行尾 if），do_it unless stopped。\n\n' +
            'case 语句有两种形式：基于 === 比较（值匹配）和基于类匹配。' +
            'when 支持多个值（逗号分隔）和范围（1..5）。' +
            '三元运算符：条件 ? 真值 : 假值，适合简单的二选一赋值。\n\n' +
            '条件为真的规则：只有 nil 和 false 为假，其余（含 0、空串、空数组）都为真。' +
            '这使得 if obj 比 if obj != nil 更地道。\n\n' +
            '## 示例演示\n\n' +
            '示例一：if/elsif/else 多分支。根据分数输出等级。\n\n' +
            '示例二：case/when 多值与范围匹配。case 用 === 隐式比较，范围 1..5 === 3 为 true。\n\n' +
            '示例三：修饰符 if/unless 与三元运算符。行尾修饰符让简单条件更简洁。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 0 和空串为真：if 0 then ... end 会执行，新手常踩坑。\n' +
            '2. unless 不接 elsif：unless 只能配 else，不能 elsif。\n' +
            '3. case 用 === 而非 ==：类的 === 检查实例关系，String === "a" 为 true。\n' +
            '4. 赋值在条件中：if x = 1 合法但易与 == 混淆，建议加括号或用 ==。\n' +
            '5. 三元运算符不宜嵌套：嵌套三元可读性差，改用 if/case。\n\n' +
            '## 真实场景应用\n\n' +
            'Web 控制器中根据用户角色显示不同视图：case user.role when :admin ... when :guest ...。' +
            '处理空值：name = params[:name] || "匿名"。权限判断：allow if user.admin?。' +
            'case 表达式赋值：label = case score when 90..100 then "A" else "B" end。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 条件语句：if/elsif/else、unless、case/when、三元运算符，以及修饰符形式。' +
            '核心记忆：条件是表达式有返回值；只有 nil 和 false 为假；case 用 === 比较。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习循环：while/until/for/loop，以及 break/next/redo 等控制关键字。',
          examples: [
            {
              title: 'if/elsif/else',
              code: `score = 85
if score >= 90
  puts "优秀"
elsif score >= 70
  puts "良好"
elsif score >= 60
  puts "及格"
else
  puts "不及格"
end`,
              explanation:
                'if/elsif/else 从上到下匹配，命中第一个真值分支后跳出。85 命中 >= 70 输出"良好"。',
            },
            {
              title: 'case/when 范围匹配',
              code: `score = 85
grade = case score
when 90..100 then "A"
when 80..89  then "B"
when 60..79  then "C"
else "D"
end
puts "等级: #{grade}"
obj = "hello"
case obj
when String then puts "是字符串"
when Integer then puts "是整数"
end`,
              explanation:
                'case 用 === 比较：范围 80..89 === 85 为 true，类 String === "hello" 检查实例关系。case 是表达式有返回值。',
            },
            {
              title: '修饰符 if/unless 与三元',
              code: `logged_in = true
puts "欢迎回来" if logged_in
puts "请登录" unless logged_in
status = logged_in ? "在线" : "离线"
puts status`,
              explanation:
                '行尾 if/unless 让单行条件更简洁。三元运算符适合简单的二选一赋值。logged_in 为 true 输出"欢迎回来"和"在线"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '给定 age = 20，用 if/else 输出 成年（>=18）或 未成年。应输出 成年。',
              starter_code: `age = 20
if age ___ 18
  puts "成年"
else
  puts "未成年"
end`,
              expected_output: '成年',
              hints: ['判断大于等于用 >=', '把 ___ 替换为 >=', '20 >= 18 为真，输出"成年"'],
            },
            {
              type: 'output-match',
              prompt: '用 case/when 判断 3 在范围 1..5 内，输出 在范围内。',
              starter_code: `n = 3
case n
when ___
  puts "在范围内"
else
  puts "不在范围内"
end`,
              expected_output: '在范围内',
              hints: ['when 后写范围 1..5', '范围用 .. 表示闭区间', '答案: 1..5'],
            },
            {
              type: 'output-match',
              prompt: '用三元运算符：done 为 true 时输出 完成，否则输出 进行中。done=true 应输出 完成。',
              starter_code: `done = true
puts done ? ___ : "进行中"`,
              expected_output: '完成',
              hints: ['真值分支的字符串是 "完成"', '三元: 条件 ? 真值 : 假值', '答案: "完成"'],
            },
          ],
          realWorldScenario:
            'Rails 控制器根据用户角色授权：case current_user.role when :admin then render_admin else render_guest。' +
            '视图中根据状态显示按钮：<%= link_to if policy(post).edit? %>。条件表达式赋值让模板代码更简洁。',
        },
        {
          id: 'rb-ch2-l2',
          title: '循环',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            '循环让代码重复执行。Ruby 提供多种循环结构：while（当真时循环）、until（当假时循环）、' +
            'for...in（遍历集合）、loop（无限循环）、times/upto/downto（次数循环）。' +
            '不过 Ruby 实践中更倾向用迭代器（each/map 等）而非 while/for，因为迭代器更地道、更简洁。' +
            '本节先掌握基础循环，下节深入迭代器。\n\n' +
            '## 基本语法\n\n' +
            'while 条件 ... end：条件为真时重复执行。' +
            'until 条件 ... end：条件为假时重复执行（等价于 while !条件）。' +
            'for x in 集合 ... end：遍历数组/范围。' +
            'loop { ... }：无限循环，需用 break 跳出。' +
            'n.times { |i| ... }：执行 n 次，i 从 0 到 n-1。' +
            'a.upto(b) { |i| ... } / b.downto(a) { |i| ... }：从 a 到 b（含）。\n\n' +
            '循环控制关键字：break（跳出循环）、next（跳过本次，进入下次）、' +
            'redo（重新执行本次，不检查条件）、retry（重新执行整个循环，常用于异常重试）。\n\n' +
            'while/until 也有修饰符形式：puts "hi" while n > 0（行尾）。\n\n' +
            '## 示例演示\n\n' +
            '示例一：while 累加。计算 1 到 5 的和。\n\n' +
            '示例二：times 与 upto。3.times 输出 0/1/2；1.upto(5) 输出 1 到 5。\n\n' +
            '示例三：loop 与 break。loop 无限循环，配合 break 跳出。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. for 不创建新作用域：for x in arr 中 x 在循环外仍可见，与 each 的块变量不同。\n' +
            '2. while 死循环：忘记更新循环变量会导致死循环，需确保条件最终为假。\n' +
            '3. loop 必须有 break：loop { } 无限循环，必须有 break 退出条件。\n' +
            '4. next 跳过迭代：next 跳过本次剩余代码，进入下一次迭代。\n' +
            '5. 优先用迭代器：while/for 在 Ruby 中较少用，each/map/times 更地道。\n\n' +
            '## 真实场景应用\n\n' +
            '轮询任务直到完成：until job.done? do sleep 1 end。' +
            '重试机制：3.times { begin; do_request; break; rescue; end }。' +
            '分页处理：while page = fetch_page(n); process(page); n += 1; end。' +
            'Ruby 习惯用迭代器替代循环，但 while/until 在"条件驱动"场景仍不可替代。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 循环：while/until/for/loop/times/upto/downto，以及 break/next/redo 控制关键字。' +
            '实践中优先用迭代器，但 while/until 在条件驱动场景仍有用。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习迭代器：each/map/select/reduce 等，Ruby 最常用的集合遍历方式。',
          examples: [
            {
              title: 'while 累加',
              code: `sum = 0
i = 1
while i <= 5
  sum += i
  i += 1
end
puts "1 到 5 的和: #{sum}"   # 15`,
              explanation:
                'while 在条件为真时重复执行。每次 i 加 1，累加到 sum。最终 sum=15。注意必须更新循环变量避免死循环。',
            },
            {
              title: 'times 与 upto',
              code: `3.times { |i| puts "第 #{i} 次" }
1.upto(5) { |i| print i, " " }
puts
5.downto(1) { |i| print i, " " }
puts`,
              explanation:
                'times 执行 n 次，块变量从 0 开始。upto/downto 从一个数到另一个数（含）。块用 { } 单行或 do...end 多行。',
            },
            {
              title: 'loop 与 break',
              code: `count = 0
loop do
  count += 1
  break if count >= 3
end
puts "循环结束 count=#{count}"   # 3
5.times do |i|
  next if i.even?
  puts i   # 1 3
end`,
              explanation:
                'loop 创建无限循环，必须用 break 跳出。next 跳过本次迭代进入下一次。这里跳过偶数只输出 1 和 3。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 while 循环输出 1 到 3（每行一个）。',
              starter_code: `i = 1
while i <= 3
  puts ___
  i += 1
end`,
              expected_output: '1\n2\n3',
              hints: ['puts 输出变量 i', '把 ___ 替换为 i', '循环 3 次分别输出 1、2、3'],
            },
            {
              type: 'output-match',
              prompt: '用 3.times 输出 0、1、2（每行一个）。',
              starter_code: `3.___ { |i| puts i }`,
              expected_output: '0\n1\n2',
              hints: ['times 方法执行 n 次', '把 ___ 替换为 times', '块变量 i 从 0 到 2'],
            },
            {
              type: 'output-match',
              prompt: '用 loop 和 break 输出 1 到 3（每行一个）。count 从 1 开始，>=4 时 break。',
              starter_code: `count = 1
loop do
  puts count
  ___ if count >= 3
  count += 1
end`,
              expected_output: '1\n2\n3',
              hints: ['在 puts 后 count 自增前判断 break', '把 ___ 替换为 break', '输出 1、2、3 后 count 为 3 时 break'],
            },
          ],
          realWorldScenario:
            '轮询后台任务状态：until Sidekiq::Job.done?(jid) do sleep 2 end。' +
            'API 限流重试：3.times { begin; call_api; break; rescue RateLimitError; sleep 5; end }。' +
            'while 循环在"条件驱动"场景比迭代器更自然。',
        },
        {
          id: 'rb-ch2-l3',
          title: '迭代器',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            '迭代器（iterator）是 Ruby 处理集合的核心方式，远比 while/for 常用。' +
            '迭代器是接受块（block）的方法：集合.each { |元素| ... } 对每个元素执行块。' +
            'Ruby 的迭代器返回新值或新集合，支持链式调用，是函数式编程风格的基础。' +
            '常用迭代器：each（遍历）、map（映射）、select（筛选）、reject（反向筛选）、' +
            'reduce（聚合）、each_with_index（带索引）、find（查找第一个匹配）。\n\n' +
            '## 基本语法\n\n' +
            'each：遍历每个元素，返回原集合。{ |x| ... } 单行块，do |x| ... end 多行块。\n' +
            'map（别名 collect）：对每个元素执行块，返回新数组（结果集合）。\n' +
            'select（别名 filter）：保留块返回真的元素，返回新数组。\n' +
            'reject：与 select 相反，剔除块返回真的元素。\n' +
            'reduce（别名 inject）：聚合，如求和 [1,2,3].reduce(0) { |sum, x| sum + x } 得 6。\n' +
            'each_with_index：带索引遍历，块参数 |元素, 索引|。\n' +
            'find：返回第一个让块为真的元素，找不到返回 nil。\n' +
            'any?/all?/none?/include?：判断型，返回布尔。\n\n' +
            '块有返回值，最后一个表达式的值即为块的返回值。map/reduce 等依赖块返回值。\n\n' +
            '## 示例演示\n\n' +
            '示例一：each 与 each_with_index 遍历。\n\n' +
            '示例二：map 映射与 select 筛选。map 返回新数组，select 保留满足条件的元素。\n\n' +
            '示例三：reduce 聚合求和与求积。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. each 返回原集合：each 不创建新数组，需要新集合用 map。\n' +
            '2. map 块要有返回值：块最后表达式是返回值，忘了写会返回 nil。\n' +
            '3. reduce 初始值：reduce(0) 的 0 是初始值，省略时用首元素，空数组会报错。\n' +
            '4. 块变量名：单行块用 { |x| }，多行用 do |x| ...end，注意优先级差异。\n' +
            '5. bang 方法：map! select! 原地修改，普通 map/select 返回新数组不修改原对象。\n\n' +
            '## 真实场景应用\n\n' +
            '数据处理流水线：users.select(&:active).map(&:name).sort。' +
            '聚合统计：total = orders.map(&:amount).reduce(0, :+)。' +
            '查找匹配：user = users.find { |u| u.id == target_id }。' +
            '链式调用让数据处理代码简洁易读，是 Ruby 的核心优势。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 迭代器：each/map/select/reject/reduce/each_with_index/find 等。' +
            '核心记忆：each 返回原集合，map 返回新数组，reduce 聚合，&:method 是简写语法糖。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习方法与块：方法定义、块与 yield、Proc 与 Lambda，理解 Ruby 的块机制。',
          examples: [
            {
              title: 'each 与 each_with_index',
              code: `fruits = ["苹果", "香蕉", "橙子"]
fruits.each { |f| puts f }
fruits.each_with_index do |f, i|
  puts "#{i}: #{f}"
end`,
              explanation:
                'each 遍历每个元素；each_with_index 同时给出元素和索引。单行块用 { }，多行用 do...end。',
            },
            {
              title: 'map 与 select',
              code: `nums = [1, 2, 3, 4, 5]
doubled = nums.map { |n| n * 2 }
puts doubled.inspect   # [2, 4, 6, 8, 10]
evens = nums.select { |n| n.even? }
puts evens.inspect     # [2, 4]
puts nums.select(&:even?).inspect  # [2, 4]`,
              explanation:
                'map 对每个元素执行块返回新数组；select 保留块返回真的元素。&:even? 是 { |n| n.even? } 的简写。',
            },
            {
              title: 'reduce 聚合',
              code: `nums = [1, 2, 3, 4, 5]
sum = nums.reduce(0) { |acc, n| acc + n }
puts "求和: #{sum}"        # 15
product = nums.reduce(1) { |acc, n| acc * n }
puts "求积: #{product}"    # 120
puts nums.reduce(:+)       # 15`,
              explanation:
                'reduce 把集合聚合成一个值。带初始值 reduce(0)，块参数 (累加器, 当前元素)。reduce(:+) 是符号简写。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 map 把 [1,2,3] 每个元素乘以 3，输出 [3, 6, 9]。',
              starter_code: `result = [1, 2, 3].map { |n| n ___ 3 }
puts result.inspect`,
              expected_output: '[3, 6, 9]',
              hints: ['乘法运算符是 *', '把 ___ 替换为 *', 'map 返回 [3, 6, 9]，inspect 显示方括号'],
            },
            {
              type: 'output-match',
              prompt: '用 select 从 [1,2,3,4] 筛选出奇数，输出 [1, 3]。',
              starter_code: `result = [1, 2, 3, 4].select { |n| n.___? }
puts result.inspect`,
              expected_output: '[1, 3]',
              hints: ['判断奇数用 odd? 方法', '把 ___ 替换为 odd', 'select 保留 odd? 为真的元素'],
            },
            {
              type: 'output-match',
              prompt: '用 reduce 求 [1,2,3,4] 的和，输出 10。',
              starter_code: `sum = [1, 2, 3, 4].reduce(:___)
puts sum`,
              expected_output: '10',
              hints: ['reduce 接受符号简写，加法是 :+', '把 ___ 替换为 +', 'reduce(:+) 对元素求和得 10'],
            },
          ],
          realWorldScenario:
            'Rails 中处理数据极其常用：User.active.map(&:email) 取所有活跃用户邮箱；' +
            'orders.map(&:amount).sum 计算总金额；posts.select { |p| p.published? } 筛选已发布文章。' +
            '链式迭代器是 Ruby 数据处理的核心范式。',
        },
      ],
    },
    // ================================================================
    // 第 3 章：方法与块
    // ================================================================
    {
      id: 'rb-ch3',
      title: '方法与块',
      order: 2,
      lessons: [
        {
          id: 'rb-ch3-l1',
          title: '方法定义',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            '方法是组织代码的基本单位。Ruby 用 def 关键字定义方法，方法名推荐 snake_case。' +
            'Ruby 方法有独特特性：返回值是方法体最后一个表达式的值（无需显式 return）；' +
            '方法名可以以 ?、!、= 结尾——? 表示返回布尔（如 even?），! 表示"危险"或原地修改（如 sort!），' +
            '= 用于赋值方法（setter）。方法参数支持默认值、可变参数、关键字参数，非常灵活。\n\n' +
            '## 基本语法\n\n' +
            'def 方法名(参数) ... end。无参方法可省略括号。返回值是最后表达式的值，' +
            '也可显式 return 提前返回。参数默认值：def greet(name="World")。' +
            '可变参数（splat）：def sum(*nums) 把多个参数收集为数组。' +
            '关键字参数：def create(name:, age:) 必须用键值传递；def create(name:, age: 18) 带默认值。' +
            '双星号 **kwargs 收集未声明的关键字参数为哈希。\n\n' +
            '方法名后缀：? 返回布尔（empty?、nil?）；! 表示原地修改或更"危险"版本（sort!、save!）；' +
            '= 是 setter（def name=(value)）。\n\n' +
            '## 示例演示\n\n' +
            '示例一：带默认值与返回值的方法。最后表达式自动作为返回值。\n\n' +
            '示例二：可变参数与关键字参数。*nums 收集为数组，name:/age: 是关键字参数。\n\n' +
            '示例三：? 与 ! 命名约定。? 返回布尔，! 原地修改。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 忘记最后表达式是返回值：方法中间的赋值不一定是返回值，最后一句才是。\n' +
            '2. ! 方法修改原对象：sort! 修改原数组，sort 返回新数组——按需选择。\n' +
            '3. 关键字参数必须用键：def f(name:) 调用必须 f(name: "x")，不能 f("x")。\n' +
            '4. return 在块中行为不同：块中的 return 会从外层方法返回，lambda 中只从 lambda 返回。\n' +
            '5. 方法定义顺序：Ruby 方法定义可在使用之后（解释器先加载全部），但建议先定义后使用。\n\n' +
            '## 真实场景应用\n\n' +
            'Rails 模型中大量使用方法：def full_name "#{first} #{last}" end。' +
            '? 方法做判断：def admin? role == :admin end。' +
            '关键字参数构造对象：User.new(name: "Alice", age: 30)。' +
            '! 方法做持久化：save! 失败抛异常，save 返回 false。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 方法定义：def、默认值、可变参数、关键字参数，以及 ?/!/= 命名约定。' +
            '核心记忆：最后表达式是返回值；? 返回布尔；! 原地修改或抛异常。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习块与 yield：Ruby 最具特色的块机制，迭代器的基石。',
          examples: [
            {
              title: '带默认值的方法',
              code: `def greet(name = "World")
  "Hello, #{name}!"
end
puts greet           # Hello, World!
puts greet("Ruby")   # Hello, Ruby!
def add(a, b)
  a + b
end
puts add(3, 5)       # 8`,
              explanation:
                '方法返回最后表达式的值，无需显式 return。参数可用默认值，调用时可省略。greet 默认 "World"。',
            },
            {
              title: '可变参数与关键字参数',
              code: `def sum(*nums)
  nums.reduce(0, :+)
end
puts sum(1, 2, 3, 4)   # 10
def create_user(name:, age: 18)
  "#{name} (#{age}岁)"
end
puts create_user(name: "Alice")        # Alice (18岁)
puts create_user(name: "Bob", age: 25) # Bob (25岁)`,
              explanation:
                '*nums 收集多个参数为数组。关键字参数用 name: 必须键值传递，age: 18 有默认值可省略。',
            },
            {
              title: '? 与 ! 命名约定',
              code: `arr = [3, 1, 2]
arr.sort!
puts arr.inspect   # [1, 2, 3] 原数组已变
def adult?(age)
  age >= 18
end
puts adult?(20)    # true
puts adult?(15)    # false`,
              explanation:
                'sort! 原地修改原数组返回 nil；sort 返回新数组不修改原对象。? 后缀约定返回布尔值，让代码自文档化。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义方法 square(x) 返回 x 的平方，调用 square(5) 输出 25。',
              starter_code: `def square(x)
  x ___ x
end
puts square(5)`,
              expected_output: '25',
              hints: ['平方是 x * x', '把 ___ 替换为 *', '方法返回最后表达式 x * x'],
            },
            {
              type: 'output-match',
              prompt: '定义带默认值的方法 greet(name="Hi")，调用 greet 输出 Hi。',
              starter_code: `def greet(name = ___)
  name
end
puts greet`,
              expected_output: 'Hi',
              hints: ['默认值是字符串 "Hi"', '把 ___ 替换为 "Hi"', '调用 greet 不传参时用默认值'],
            },
            {
              type: 'output-match',
              prompt: '定义 ? 方法 even?(n) 返回 n 是否偶数，调用 even?(4) 输出 true。',
              starter_code: `def even?(n)
  n ___ 2 == 0
end
puts even?(4)`,
              expected_output: 'true',
              hints: ['判断偶数用 n % 2 == 0', '把 ___ 替换为 %', '4 % 2 == 0 为 true'],
            },
          ],
          realWorldScenario:
            'Rails 模型中 ? 方法做权限判断 def admin? role == :admin end；' +
            '关键字参数构造查询 User.where(active: true, role: :member)；' +
            '! 方法做强制保存 save! 失败抛异常便于捕获。命名约定让代码意图一目了然。',
        },
        {
          id: 'rb-ch3-l2',
          title: '块与 yield',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            '块（block）是 Ruby 最具特色的功能之一——一段匿名代码，可附加到方法调用上。' +
            '块让迭代器、回调、资源管理（如 File.open { } 自动关闭）变得优雅。' +
            '每个方法都可以隐式接收一个块，方法内用 yield 执行它。' +
            '块有两种形式：do...end（多行）和 { }（单行）。块是 Ruby 函数式编程的基石，' +
            '也是 DSL（领域特定语言）如 Rails/Rake 的核心机制。\n\n' +
            '## 基本语法\n\n' +
            '块附加在方法调用后：[1,2,3].each { |x| puts x } 或 [1,2,3].each do |x| ... end。' +
            '块参数用 |变量| 接收。方法内 yield 执行块，yield(arg) 向块传参，' +
            'yield 的返回值是块最后一个表达式的值。\n\n' +
            'block_given? 判断是否传了块，避免无块时 yield 报错。' +
            'yield 可多次调用，每次执行一遍块。块可接收多个参数：yield(a, b)，块用 |x, y| 接收。\n\n' +
            'do...end 与 { } 优先级不同：{ } 绑定更紧。规则：多行用 do...end，单行用 { }。\n\n' +
            '## 示例演示\n\n' +
            '示例一：自定义带 yield 的方法。三次 yield 执行块三次。\n\n' +
            '示例二：yield 传参与接收返回值。\n\n' +
            '示例三：block_given? 与资源管理模式。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. do/end 与 { } 优先级：多行用 do/end，单行用 { }，避免绑定歧义。\n' +
            '2. yield 无块报错：无块时 yield 抛 LocalJumpError，用 block_given? 检查。\n' +
            '3. 块变量作用域：块内可访问块外的局部变量，但块变量 |x| 只在块内有效。\n' +
            '4. 块的 return：块内 return 会从定义块的方法返回，而非仅退出块——这与 lambda 不同。\n' +
            '5. 一个方法只能接收一个块：用 &block 参数显式接收块对象，便于传递给其他方法。\n\n' +
            '## 真实场景应用\n\n' +
            '资源管理：File.open("f.txt") { |f| f.read } 自动关闭文件。' +
            '回调机制：after_save { |record| notify(record) }。' +
            '自定义迭代器：def each_item; @items.each { |i| yield i }; end。' +
            'Rails 中 around_action { |controller, action| ... } 用块包装动作。块让"传递行为"变得自然。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 块与 yield：块是匿名代码片段，附加到方法调用，方法内 yield 执行。' +
            '核心记忆：yield 执行块并传参/接收返回值；block_given? 检查块；do/end 与 { } 优先级不同。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习 Proc 与 Lambda：把块转化为对象，可存储、传递、多次调用。',
          examples: [
            {
              title: '自定义带 yield 的方法',
              code: `def three_times
  yield
  yield
  yield
end
three_times { puts "Hi" }
def greet
  yield("Alice")
  yield("Bob")
end
greet { |name| puts "Hello, #{name}" }`,
              explanation:
                'yield 执行传入的块。three_times 调用 yield 三次，块执行三次。yield("Alice") 向块传参，块用 |name| 接收。',
            },
            {
              title: 'yield 传参与返回值',
              code: `def compute
  result = yield(10)
  puts "块返回: #{result}"
end
compute { |x| x * 2 }     # 块返回: 20
def pair
  yield(1, 2)
end
pair { |a, b| puts "#{a} + #{b} = #{a + b}" }`,
              explanation:
                'yield(10) 把 10 传给块，块的返回值（最后表达式）就是 yield 的返回值。yield 可传多个参数，块用多变量接收。',
            },
            {
              title: 'block_given? 与资源管理',
              code: `def maybe_yield
  if block_given?
    yield
  else
    puts "无块调用"
  end
end
maybe_yield { puts "有块" }   # 有块
maybe_yield                   # 无块调用
def with_line
  yield "处理中..."
  puts "清理资源"
end
with_line { |msg| puts msg }`,
              explanation:
                'block_given? 检查是否传了块，避免无块 yield 报错。资源管理模式：方法负责 setup/teardown，块负责核心逻辑。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义方法 twice，调用 yield 两次。块输出 Hi，应输出两行 Hi。',
              starter_code: `def twice
  ___
  ___
end
twice { puts "Hi" }`,
              expected_output: 'Hi\nHi',
              hints: ['执行块用 yield', '两处都填 yield', 'twice 调用 yield 两次，块执行两次输出两行 Hi'],
            },
            {
              type: 'output-match',
              prompt: '定义方法 shout，yield("Ruby") 传参，块用 |name| 输出 "Ruby!"。应输出 Ruby!。',
              starter_code: `def shout
  yield(___)
end
shout { |name| puts "#{name}!" }`,
              expected_output: 'Ruby!',
              hints: ['yield 传字符串参数 "Ruby"', '把 ___ 替换为 "Ruby"', '块接收 name 输出 "Ruby!"'],
            },
            {
              type: 'output-match',
              prompt: '用 block_given? 判断有块时 yield 输出 有块。应输出 有块。',
              starter_code: `def check
  if ___
    yield
  end
end
check { puts "有块" }`,
              expected_output: '有块',
              hints: ['判断是否传块用 block_given?', '把 ___ 替换为 block_given?', '有块时执行 yield 输出"有块"'],
            },
          ],
          realWorldScenario:
            'File.open(path) { |f| f.read } 自动关闭文件，即使异常也会关闭。' +
            'Rails 中事务包装 ActiveRecord::Base.transaction { record.save! } 异常自动回滚。' +
            '自定义 DSL：benchmark { expensive_task } 测量执行时间。块让"资源获取即初始化"模式优雅。',
        },
        {
          id: 'rb-ch3-l3',
          title: 'Proc 与 Lambda',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            '块虽然强大但不是对象——不能存入变量、不能作为参数传递给多个方法。' +
            'Proc 和 Lambda 把块封装成对象（Proc 类的实例），可以存储、传递、多次调用。' +
            'Proc 和 Lambda 都属于 Proc 类，但有细微差异：参数检查严格度、return 行为不同。' +
            '理解两者差异是 Ruby 进阶的关键，尤其在编写高阶函数和回调时。\n\n' +
            '## 基本语法\n\n' +
            '创建 Proc：Proc.new { |x| x * 2 } 或 proc { |x| x * 2 }。调用：proc.call(5) 或 proc.(5) 或 proc[5]。' +
            '创建 Lambda：lambda { |x| x * 2 } 或 ->(x) { x * 2 }（stabby lambda）。调用方式同 Proc。\n\n' +
            'Lambda 与 Proc 的差异：\n' +
            '1. 参数检查：Lambda 严格检查参数个数，多了少了都报错；Proc 宽松，少了补 nil，多了忽略。\n' +
            '2. return 行为：Lambda 的 return 只从 lambda 返回；Proc 的 return 从外层方法返回。\n' +
            '3. Lambda 检查 arity（参数数量），Proc 不检查。\n\n' +
            '方法对象：method(:name) 获取方法为对象，可用 .call 调用，.to_proc 转 Proc。' +
            '& 符号：&:upcase 把符号转 Proc，常用于迭代器简写：arr.map(&:upcase)。\n\n' +
            '## 示例演示\n\n' +
            '示例一：Proc 创建与调用。三种调用方式等价。\n\n' +
            '示例二：Lambda 与 stabby lambda。->(x) { } 是简写形式。\n\n' +
            '示例三：&:符号简写与方法转 Proc。arr.map(&:upcase) 等价 arr.map { |s| s.upcase }。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. Lambda 参数严格：lambda { |a,b| }.call(1) 报错参数不足；Proc 会补 nil 不报错。\n' +
            '2. Proc 的 return 危险：块/Proc 内 return 会从外层方法返回，可能导致意外跳出。\n' +
            '3. call 语法多样：p.call、p.()、p[] 都行，团队统一一种风格。\n' +
            '4. & 转换：&obj 把 Proc 转为块传给方法；&:sym 把符号转 Proc。\n' +
            '5. Lambda 是 Proc 子类：lambda.lambda? 返回 true，普通 Proc 返回 false。\n\n' +
            '## 真实场景应用\n\n' +
            '回调注册：callbacks << ->(data) { process(data) }。' +
            '策略模式：strategies = { add: ->(a,b){a+b}, sub: ->(a,b){a-b} }。' +
            '迭代器简写：users.map(&:name) 比 users.map { |u| u.name } 更简洁。' +
            '高阶函数：def apply(fn, x); fn.call(x); end，传 lambda 作为参数。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Proc 与 Lambda：把块封装为对象，可存储传递。' +
            '核心差异：Lambda 参数严格、return 只从自身返回；Proc 参数宽松、return 从外层方法返回。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习字符串与符号：字符串操作、正则表达式、符号的用途与字符串的区别。',
          examples: [
            {
              title: 'Proc 创建与调用',
              code: `p1 = Proc.new { |x| x * 2 }
p2 = proc { |x| x * 2 }
puts p1.call(5)   # 10
puts p1.(6)       # 12
puts p1[7]        # 14
p3 = Proc.new { |a, b| puts "a=#{a}, b=#{b}" }
p3.call(1)        # a=1, b=nil（少参数补 nil）`,
              explanation:
                'Proc.new 和 proc 创建等价。调用有 .call、.()、[] 三种形式。Proc 参数宽松，少了补 nil 不报错。',
            },
            {
              title: 'Lambda 与 stabby lambda',
              code: `l1 = lambda { |x| x ** 2 }
l2 = ->(x) { x ** 2 }
puts l1.call(5)   # 25
puts l2.call(6)   # 36
strict = ->(a, b) { a + b }
puts strict.call(1, 2)   # 3
# strict.call(1)  # 报错：参数不足`,
              explanation:
                'lambda 和 ->(){} 等价，后者更简洁。Lambda 严格检查参数个数，call 时必须匹配，否则报错。',
            },
            {
              title: '&:符号简写',
              code: `words = ["ruby", "is", "fun"]
puts words.map { |w| w.upcase }.inspect  # ["RUBY", "IS", "FUN"]
puts words.map(&:upcase).inspect         # ["RUBY", "IS", "FUN"]
def double(x); x * 2; end
m = method(:double)
puts m.call(21)   # 42
nums = [1, 2, 3]
puts nums.map(&m).inspect  # [2, 4, 6]`,
              explanation:
                '&:upcase 把符号 :upcase 转为 Proc { |x| x.upcase }，迭代器中常用。method(:name) 获取方法对象，可用 & 转为块。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 stabby lambda 接收 x 返回 x + 10，调用 .call(5) 输出 15。',
              starter_code: `add_ten = ___(x) { x + 10 }
puts add_ten.call(5)`,
              expected_output: '15',
              hints: ['stabby lambda 语法是 ->(x) { }', '把 ___ 替换为 ->', '->(x) { x + 10 } 创建 lambda，call(5) 得 15'],
            },
            {
              type: 'output-match',
              prompt: '用 &:upcase 简写把 ["a","b"] 转大写，输出 ["A", "B"]。',
              starter_code: `result = ["a", "b"].map(&:___)
puts result.inspect`,
              expected_output: '["A", "B"]',
              hints: ['大写方法名是 upcase', '把 ___ 替换为 upcase', '&:upcase 等价 { |s| s.upcase }'],
            },
            {
              type: 'output-match',
              prompt: '用 Proc.new 创建 { |x| x * x }，调用 .call(6) 输出 36。',
              starter_code: `square = Proc.new { |x| x ___ x }
puts square.call(6)`,
              expected_output: '36',
              hints: ['平方是 x * x', '把 ___ 替换为 *', 'Proc.new 创建 Proc 对象，call(6) 得 36'],
            },
          ],
          realWorldScenario:
            'Rails 路由用 lambda 做约束：get "/admin", constraint: ->(req) { req.ip == "1.2.3.4" }。' +
            '回调数组存 lambda：before_save << ->(record) { record.set_timestamps }。' +
            '&:简写在 ActiveRecord 集合中无处不在：User.all.map(&:id) 取所有 ID。',
        },
      ],
    },
    // ================================================================
    // 第 4 章：字符串与符号
    // ================================================================
    {
      id: 'rb-ch4',
      title: '字符串与符号',
      order: 3,
      lessons: [
        {
          id: 'rb-ch4-l1',
          title: '字符串操作',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            '字符串是编程中最常用的数据类型之一。Ruby 字符串是可变的（String 对象可原地修改），' +
            '支持单引号和双引号——双引号支持插值（#{}）和转义，单引号除反斜杠外几乎原样保留。' +
            'Ruby 字符串方法极其丰富：大小写转换、查找替换、分割连接、去除空白等。' +
            '掌握字符串操作是处理文本、构建 Web 应用的基础。\n\n' +
            '## 基本语法\n\n' +
            '创建字符串：单引号（原样）、双引号（支持插值和转义）。字符串插值：#{expr} 在双引号中求值表达式。' +
            '多行字符串：%q{}/%Q{} 或 here doc（<<~HEREDOC）。\n\n' +
            '常用方法：length/size 长度；upcase/downcase/swapcase 大小写转换；' +
            'capitalize 首字母大写；reverse 反转；' +
            'include?/start_with?/end_with? 包含判断；' +
            'sub/gsub 替换（sub 替换第一个，gsub 替换全部）；' +
            'split 分割为数组；join 数组连接为字符串；' +
            'strip/lstrip/rstrip 去空白；chomp 去末尾换行；' +
            'chars/bytes 转字符/字节数组；to_i/to_f/to_s 转换；* 重复。\n\n' +
            '可变性：upcase! 等带 ! 方法原地修改，upcase 返回新字符串。' +
            '字符串拼接：+（不修改原串）、<<（原地追加，修改原串）、*（重复）。\n\n' +
            '## 示例演示\n\n' +
            '示例一：插值与大小写转换。\n\n' +
            '示例二：查找、替换与分割。\n\n' +
            '示例三：去空白与重复拼接。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 单双引号差异：单引号不插值不转义（除反斜杠），双引号支持 #{}/\\n/\\t。\n' +
            '2. << 修改原串：str << "x" 原地追加，+ 返回新串不修改原对象。\n' +
            '3. ! 方法返回 nil：当无变化时 upcase! 等可能返回 nil，别链式调用。\n' +
            '4. sub 只替换第一个：要替换全部用 gsub。\n' +
            '5. chomp vs strip：chomp 只去末尾换行符，strip 去两端所有空白。\n\n' +
            '## 真实场景应用\n\n' +
            '表单输入清理：params[:name].to_s.strip。' +
            '生成 slug：title.downcase.gsub(/\s+/, "-")。' +
            'CSV 解析：line.split(",")。' +
            '模板渲染：ERB 用 <%= name %> 插值。字符串处理是 Web 开发的日常。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 字符串：插值、大小写、查找替换、分割连接、去空白。' +
            '核心记忆：双引号支持插值；! 方法原地修改；sub 替换首个 gsub 替换全部。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习正则表达式：用模式匹配和提取文本，Ruby 用 // 包裹正则。',
          examples: [
            {
              title: '插值与大小写',
              code: `name = "ruby"
puts "Hello, #{name}!"     # Hello, ruby!
puts "长度: #{name.length}"
puts name.upcase           # RUBY
puts name.capitalize       # Ruby
puts name.reverse          # ybur
puts name                  # ruby（原串未变）`,
              explanation:
                '双引号插值 #{}。upcase/capitalize/reverse 返回新串不修改原对象。原 name 仍是 "ruby"。',
            },
            {
              title: '查找替换与分割',
              code: `str = "Hello, World"
puts str.include?("World")    # true
puts str.start_with?("Hello") # true
puts str.sub("o", "0")        # Hell0, World（只换第一个）
puts str.gsub("o", "0")       # Hell0, W0rld（换全部）
puts str.split(", ").inspect  # ["Hello", "World"]`,
              explanation:
                'include? 检查包含，sub 替换第一个匹配，gsub 替换全部。split 按分隔符分割为数组。',
            },
            {
              title: '去空白与拼接',
              code: `s = "  hello  "
puts s.strip.inspect        # "hello"
puts s.lstrip.inspect       # "hello  "
puts s.rstrip.inspect       # "  hello"
puts ("ab" * 3)             # ababab
arr = ["a", "b", "c"]
puts arr.join("-")          # a-b-c
puts arr.join               # abc`,
              explanation:
                'strip 去两端空白，lstrip/rstrip 去单侧。* 重复字符串。join 把数组连成字符串，可指定分隔符。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '把字符串 ruby 转大写，输出 RUBY。',
              starter_code: `puts "ruby".___`,
              expected_output: 'RUBY',
              hints: ['转大写用 upcase 方法', '把 ___ 替换为 upcase', '"ruby".upcase 返回 "RUBY"'],
            },
            {
              type: 'output-match',
              prompt: '把 a-b-c 用短横分割成数组，inspect 输出 ["a", "b", "c"]。',
              starter_code: `puts "a-b-c".___("-").inspect`,
              expected_output: '["a", "b", "c"]',
              hints: ['分割用 split 方法', '把 ___ 替换为 split', 'split("-") 按短横分割为三元素数组'],
            },
            {
              type: 'output-match',
              prompt: '把 "  hi  " 去两端空白，inspect 输出 "hi"。',
              starter_code: `puts "  hi  ".___` + `.inspect`,
              expected_output: '"hi"',
              hints: ['去两端空白用 strip 方法', '把 ___ 替换为 strip', '"  hi  ".strip 得 "hi"'],
            },
          ],
          realWorldScenario:
            '用户注册时清理输入：email = params[:email].to_s.strip.downcase。' +
            '生成 URL slug：slug = title.downcase.gsub(/[^a-z0-9]+/, "-").strip。' +
            'CSV 行解析：row.split(",").map(&:strip)。字符串清理是 Web 表单处理的必备技能。',
        },
        {
          id: 'rb-ch4-l2',
          title: '正则表达式',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            '正则表达式（regex）是用模式描述字符串的工具，用于匹配、提取、替换文本。' +
            'Ruby 用 /模式/ 包裹正则字面量，支持 =~ 匹配运算符和 match 方法。' +
            '正则在表单校验（邮箱、手机号）、日志解析、数据提取中不可或缺。' +
            'Ruby 正则遵循 PCRE 风格，支持捕获组、命名捕获、零宽断言等高级特性。\n\n' +
            '## 基本语法\n\n' +
            '正则字面量：/pattern/，如 /\\d+/ 匹配数字。' +
            '匹配：string =~ /pattern/ 返回匹配位置（无匹配返回 nil）；' +
            '/pattern/.match(string) 返回 MatchData 对象；' +
            'string.match?(/pattern/) 返回布尔（Ruby 2.4+，最快）。\n\n' +
            '常用元字符：. 任意字符（除换行）、\\d 数字、\\D 非数字、\\w 单词字符、' +
            '\\s 空白、^ 行首、$ 行尾、* 0 次或多次、+ 1 次或多次、? 0 或 1 次、' +
            '{n,m} 重复次数、[abc] 字符集、( ) 捕获组、| 或。\n\n' +
            '替换：string.gsub(/pattern/, replacement)，replacement 中可用 \\1 引用捕获组。' +
            '命名捕获：/(?<name>\\w+)/ 用 named capture，match[:name] 取值。' +
            '修饰符：i 忽略大小写（/abc/i）、m 多行模式、x 忽略模式中空白便于注释。\n\n' +
            '## 示例演示\n\n' +
            '示例一：基础匹配与位置。=~ 返回匹配索引，match? 返回布尔。\n\n' +
            '示例二：捕获组与提取。$1 取第一个捕获组，或用 MatchData。\n\n' +
            '示例三：gsub 替换与命名捕获。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. =~ 返回位置非布尔：用 if string =~ /x/ 可，但别用 == 比较。\n' +
            '2. . 不匹配换行：要匹配所有用 /m 修饰符或 [\\s\\S]。\n' +
            '3. 贪婪与懒惰：.* 贪婪匹配尽可能多，.*? 懒惰匹配尽可能少。\n' +
            '4. 特殊字符转义：匹配 . ( ) 等需用 \\ 转义，或用 Regexp.escape。\n' +
            '5. 性能：复杂正则可能回溯爆炸，敏感输入用 match? 比 =~ 快。\n\n' +
            '## 真实场景应用\n\n' +
            '邮箱校验：/\\A[\\w+.+-]+@[\\w.-]+\\.[a-z]+\\z/i。' +
            '手机号校验：/\\A1[3-9]\\d{9}\\z/。' +
            '日志提取：log.match(/ERROR: (.+)/) 抓取错误信息。' +
            '敏感词替换：text.gsub(/坏词/, "**")。正则是文本处理的瑞士军刀。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 正则：/pattern/ 字面量、=~ 和 match 匹配、捕获组、gsub 替换。' +
            '核心记忆：=~ 返回位置；match? 最快；命名捕获用 (?<name>...)。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习符号：Symbol 类型，它与字符串的区别，以及作为哈希键的用途。',
          examples: [
            {
              title: '基础匹配',
              code: `s = "Hello, Ruby 2024"
puts (s =~ /Ruby/) ? "找到 Ruby" : "未找到"
puts s =~ /Ruby/        # 7（匹配位置）
puts s.match?(/\\d+/)     # true（含数字）
puts s.match?(/Python/)  # false
puts s.scan(/\\w+/).inspect  # ["Hello", "Ruby", "2024"]`,
              explanation:
                '=~ 返回匹配位置（无则 nil），match? 返回布尔。scan 返回所有匹配的数组。/\\w+/ 匹配单词字符序列。',
            },
            {
              title: '捕获组提取',
              code: `date = "2024-07-12"
if date =~ /(\\d+)-(\\d+)-(\\d+)/
  puts "年: #{$1}"
  puts "月: #{$2}"
  puts "日: #{$3}"
end
m = "alice@example.com".match(/(\\w+)@(\\w+)/)
puts m[1]   # alice
puts m[2]   # example`,
              explanation:
                '( ) 创建捕获组，$1/$2/$3 引用匹配后的捕获。match 返回 MatchData，可用 m[1] 索引访问捕获组。',
            },
            {
              title: 'gsub 替换与命名捕获',
              code: `s = "Hello, World"
puts s.gsub(/o/, "0")        # Hell0, W0rld
puts "2024-07-12".gsub(/(\\d+)-(\\d+)-(\\d+)/, "\\2/\\3/\\1")  # 07/12/2024
m = "John 25".match(/(?<name>\\w+) (?<age>\\d+)/)
puts m[:name]   # John
puts m[:age]    # 25`,
              explanation:
                'gsub 替换中可用 \\1 引用捕获组重排。命名捕获 (?<name>...) 让正则更可读，用 match[:name] 取值。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '判断 abc123 是否含数字，用 match? 输出 true。',
              starter_code: `puts "abc123".match?(/___/)`,
              expected_output: 'true',
              hints: ['匹配数字的正则是 \\d+', '把 ___ 替换为 \\d+', '"abc123" 含数字 123，match? 返回 true'],
            },
            {
              type: 'output-match',
              prompt: '把 a1b2 中所有数字替换为 #，输出 a#b#。',
              starter_code: `puts "a1b2".gsub(/\\d/, ___)`,
              expected_output: 'a#b#',
              hints: ['替换成的字符串是 "#"', '把 ___ 替换为 "#"', 'gsub 把所有数字替换为 #'],
            },
            {
              type: 'output-match',
              prompt: '用 scan 提取 a1 b2 中的字母，inspect 输出 ["a", "b"]。',
              starter_code: `puts "a1 b2".scan(/___/).inspect`,
              expected_output: '["a", "b"]',
              hints: ['匹配字母的正则是 [a-z]', '把 ___ 替换为 [a-z]', 'scan 返回所有匹配 ["a", "b"]'],
            },
          ],
          realWorldScenario:
            'Rails 模型校验：validates :email, format: { with: /\\A[\\w+.]+@[\\w.]+\\.[a-z]+\\z/i }。' +
            '日志解析：errors = log.lines.select { |l| l.match?(/ERROR/) }。' +
            '数据脱敏：phone.gsub(/\\d(?=\\d{4})/, "*") 隐藏手机号中间位。正则让复杂文本处理变得简洁。',
        },
        {
          id: 'rb-ch4-l3',
          title: '符号',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            '符号（Symbol）是 Ruby 独特的类型：不可变的、内部用整数表示的"名字"。' +
            '符号以冒号开头：:name、:active、:user_id。' +
            '符号与字符串的核心区别：符号不可变且全局唯一（相同符号是同一对象），' +
            '字符串可变且每次新建对象。因此符号作为哈希键、方法名、状态标记更高效。' +
            'Ruby 2.2+ 后符号可被垃圾回收，历史问题已缓解。\n\n' +
            '## 基本语法\n\n' +
            '创建符号：:name、:"hello world"（含空格用引号）。' +
            '符号转字符串：:name.to_s 得 "name"。字符串转符号："name".to_sym 或 .intern 得 :name。' +
            '符号可作为方法名传递：send(:upcase) 或 method(:name)。\n\n' +
            '符号 vs 字符串：\n' +
            '- :name.object_id 多次相同（同一对象）；"name".object_id 每次不同（新对象）。\n' +
            '- 符号不可变，字符串可变（<< 追加等）。\n' +
            '- 符号作哈希键更省内存、查找更快。\n' +
            '- 符号适合"名字"（状态、方法名、键），字符串适合"数据"（用户输入、文本）。\n\n' +
            '符号作哈希键有两种风格：hash = { :name => "Alice" }（旧风格）' +
            '和 hash = { name: "Alice" }（Ruby 1.9+ 新风格，等价）。新风格更简洁，推荐使用。\n\n' +
            '## 示例演示\n\n' +
            '示例一：符号的同一性。相同符号 object_id 相同，字符串不同。\n\n' +
            '示例二：符号与字符串互转。\n\n' +
            '示例三：符号作哈希键与方法名。新风格 name: 更简洁。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 符号不可变：:abc << "x" 报错，符号不能修改。\n' +
            '2. 不要用用户输入生成符号：to_sym 可能造成符号表膨胀，用字符串。\n' +
            '3. 哈希键两种风格：:key => val 和 key: val 等价，后者键必须是合法符号名。\n' +
            '4. 符号不是字符串：拼接 :a + :b 报错，需先 to_s。\n' +
            '5. 状态标记用符号：status == :active 比 status == "active" 更地道高效。\n\n' +
            '## 真实场景应用\n\n' +
            'Rails 大量用符号：has_many :comments、before_action :authenticate、status: :published。' +
            '哈希配置：{ timeout: 30, retries: 3 }。' +
            '方法分发：send(action.to_sym)。符号是 Ruby 元编程和 DSL 的基础。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Symbol：不可变、全局唯一、作哈希键更高效。' +
            '核心记忆：符号是"名字"，字符串是"数据"；key: val 是新风格哈希键语法。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习数组与哈希：Ruby 最常用的数据结构，及其丰富的操作方法。',
          examples: [
            {
              title: '符号的同一性',
              code: `puts :name.object_id
puts :name.object_id   # 两次相同（同一对象）
puts "name".object_id
puts "name".object_id  # 两次不同（新对象）
puts :name == :name    # true
puts :name.eql?(:name) # true`,
              explanation:
                '相同符号是同一对象（object_id 相同），字符串每次新建对象。符号省内存、比较快，适合作键和名字。',
            },
            {
              title: '符号与字符串互转',
              code: `s = :hello
puts s.to_s           # hello
puts s.class          # Symbol
str = "world"
sym = str.to_sym
puts sym.inspect      # :world
puts sym.class        # Symbol`,
              explanation:
                'to_s 把符号转字符串，to_sym/intern 把字符串转符号。符号不可变，不能像字符串那样追加修改。',
            },
            {
              title: '符号作哈希键',
              code: `# 新风格（推荐）
user = { name: "Alice", age: 30 }
puts user[:name]      # Alice
puts user[:age]       # 30
# 旧风格
config = { :timeout => 30, :retries => 3 }
puts config[:timeout] # 30
puts "hi".send(:upcase)  # HI`,
              explanation:
                '新风格 { name: "x" } 与旧风格 { :name => "x" } 等价，新风格更简洁。send(:method) 用符号调用方法，元编程常用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '把符号 :ruby 转为字符串输出 ruby。',
              starter_code: `puts :ruby.___`,
              expected_output: 'ruby',
              hints: ['符号转字符串用 to_s', '把 ___ 替换为 to_s', ':ruby.to_s 得 "ruby"'],
            },
            {
              type: 'output-match',
              prompt: '从哈希 { name: "Alice" } 取 :name 键的值输出 Alice。',
              starter_code: `user = { name: "Alice" }
puts user[___]`,
              expected_output: 'Alice',
              hints: ['键是符号 :name', '把 ___ 替换为 :name', 'user[:name] 取得 "Alice"'],
            },
            {
              type: 'output-match',
              prompt: '把字符串 status 转为符号，inspect 输出 :status。',
              starter_code: `puts "status".___.inspect`,
              expected_output: ':status',
              hints: ['字符串转符号用 to_sym', '把 ___ 替换为 to_sym', '"status".to_sym 得 :status'],
            },
          ],
          realWorldScenario:
            'Rails 模型关联全用符号：has_many :posts、belongs_to :user。' +
            '状态机：aasm column: :status, states: [:draft, :published, :archived]。' +
            '配置选项：render json: data, status: :ok。符号让代码语义清晰、性能优秀。',
        },
      ],
    },
    // ================================================================
    // 第 5 章：数组与哈希
    // ================================================================
    {
      id: 'rb-ch5',
      title: '数组与哈希',
      order: 4,
      lessons: [
        {
          id: 'rb-ch5-l1',
          title: '数组操作',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            '数组（Array）是有序的元素集合，可存放任意类型对象。Ruby 数组是动态的——' +
            '可自动扩容，支持负索引（从末尾数）、嵌套、混合类型。数组方法极其丰富：' +
            '增删改查、排序、翻转、合并、切片等，配合迭代器能优雅处理数据。' +
            '数组是 Ruby 中最常用的数据结构，掌握它等于掌握了数据处理的一半。\n\n' +
            '## 基本语法\n\n' +
            '创建：[1,2,3]、Array.new(3, 0)、%w[a b c]（单词数组）、(1..5).to_a。' +
            '访问：arr[0]、arr[-1]（末尾）、arr[0,2]（从 0 取 2 个）、arr[1..3]（范围切片）。\n' +
            '修改：arr[0] = x、arr << x（追加）、arr.push(x)、arr.pop（弹出末尾）、' +
            'arr.unshift(x)（头部插入）、arr.shift（移除头部）。\n' +
            '查询：arr.length/size、arr.empty?、arr.include?(x)、arr.index(x)、arr.first、arr.last。\n' +
            '变换：arr.sort、arr.reverse、arr.uniq（去重）、arr.flatten（拍平嵌套）。\n' +
            '合并：arr + other、arr.concat(other)、arr - other（差集）、arr & other（交集）、arr | other（并集去重）。\n\n' +
            '! 方法原地修改：sort!、reverse!、uniq!、map!。' +
            '二维数组：[[1,2],[3,4]]，arr[0][1] 访问。\n\n' +
            '## 示例演示\n\n' +
            '示例一：访问与切片。负索引和范围切片是 Ruby 数组的特色。\n\n' +
            '示例二：增删改与栈操作。<< 和 push 追加，pop/shift 弹出。\n\n' +
            '示例三：变换与集合运算。sort/uniq/flatten 及 +-&| 集合运算。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. << 修改原数组：arr << x 改变 arr，+ 返回新数组不改变原对象。\n' +
            '2. 负索引越界：arr[-10] 在小数组返回 nil，不像 Python 报错。\n' +
            '3. ! 方法返回 nil：当无变化时 uniq! 等可能返回 nil，别链式调用。\n' +
            '4. flatten 默认全拍平：flatten(1) 只拍平一层。\n' +
            '5. 比较需可比较：sort 要元素实现 <=>，混合类型可能报错。\n\n' +
            '## 真实场景应用\n\n' +
            '分页：items[offset, per_page]。去重：tags.uniq。' +
            '批量处理：ids.each_slice(100) { |batch| process(batch) } 分批。' +
            '集合运算：active_users & paying_users 取交集。' +
            '数据聚合：sales.group_by { |s| s[:month] }。数组操作贯穿所有数据处理场景。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 数组：访问（含负索引切片）、增删改、变换（sort/uniq/flatten）、集合运算。' +
            '核心记忆：<< 原地追加，+ 返回新数组；! 方法可能返回 nil。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习哈希：键值对集合，Ruby 中表示结构化数据的核心类型。',
          examples: [
            {
              title: '访问与切片',
              code: `arr = ["a", "b", "c", "d", "e"]
puts arr[0]          # a
puts arr[-1]         # e（负索引从末尾）
puts arr[1, 2].inspect   # ["b", "c"]（从 1 取 2 个）
puts arr[1..3].inspect   # ["b", "c", "d"]（范围切片）
puts arr.first       # a
puts arr.last        # e`,
              explanation:
                '正索引从 0 开始，负索引从 -1 开始（末尾）。arr[i, n] 从 i 取 n 个，arr[i..j] 范围切片含两端。',
            },
            {
              title: '增删改与栈操作',
              code: `arr = [1, 2, 3]
arr << 4              # 追加 -> [1,2,3,4]
arr.push(5)           # 追加 -> [1,2,3,4,5]
puts arr.pop          # 5（弹出末尾）
arr.unshift(0)        # 头部插入 -> [0,1,2,3,4]
puts arr.shift        # 0（移除头部）
puts arr.inspect      # [1,2,3,4]
arr[1] = 99
puts arr.inspect      # [1,99,3,4]`,
              explanation:
                '<< 和 push 末尾追加，pop 弹出末尾，unshift/shift 操作头部。数组装作栈（push/pop）或队列（push/shift）。',
            },
            {
              title: '变换与集合运算',
              code: `nums = [3, 1, 2, 2, 3]
puts nums.sort.inspect         # [1, 2, 2, 3, 3]
puts nums.uniq.inspect         # [3, 1, 2]
puts nums.sort.uniq.inspect    # [1, 2, 3]
nested = [[1, 2], [3, [4, 5]]]
puts nested.flatten.inspect    # [1, 2, 3, 4, 5]
puts ([1,2,3] & [2,3,4]).inspect  # [2, 3] 交集
puts ([1,2] | [2,3]).inspect      # [1, 2, 3] 并集
puts ([1,2,3] - [2]).inspect      # [1, 3] 差集`,
              explanation:
                'sort 排序，uniq 去重，flatten 拍平嵌套。& 交集、| 并集去重、- 差集。可链式调用 transform 数据。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '取数组 [10,20,30] 的最后一个元素（用负索引），输出 30。',
              starter_code: `puts [10, 20, 30][___]`,
              expected_output: '30',
              hints: ['负索引 -1 表示末尾', '把 ___ 替换为 -1', '[-1] 取最后一个元素 30'],
            },
            {
              type: 'output-match',
              prompt: '把 [3,1,2] 排序去重后输出 [1, 2, 3]。',
              starter_code: `puts [3, 1, 2].sort.___.inspect`,
              expected_output: '[1, 2, 3]',
              hints: ['去重用 uniq 方法', '把 ___ 替换为 uniq', 'sort 后 [1,2,3]，uniq 后仍 [1,2,3]'],
            },
            {
              type: 'output-match',
              prompt: '用 << 给 [] 追加 1、2、3，输出 [1, 2, 3]。',
              starter_code: `arr = []
arr ___ 1
arr ___ 2
arr ___ 3
puts arr.inspect`,
              expected_output: '[1, 2, 3]',
              hints: ['追加运算符是 <<', '三处都填 <<', 'arr << 1 三次后得 [1,2,3]'],
            },
          ],
          realWorldScenario:
            '分页查询：posts = Post.all.to_a[offset, per_page]。' +
            '标签去重：post.tags.map(&:name).uniq。' +
            '批量处理：user_ids.each_slice(500) { |ids| Mailer.batch(ids) } 避免一次性加载过多。' +
            '集合运算：active_user_ids & subscriber_ids 找出活跃订阅用户。',
        },
        {
          id: 'rb-ch5-l2',
          title: '哈希操作',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            '哈希（Hash）是键值对集合，类似其他语言的字典/映射。Ruby 哈希是有序的（Ruby 1.9+ 按插入顺序）。' +
            '哈希是表示结构化数据的核心类型——配置、JSON 对象、数据库记录都用哈希。' +
            '键通常是符号或字符串，值可以是任意对象。哈希方法丰富：增删改查、合并、转换、迭代等。' +
            '掌握哈希是处理 Web 数据（params、JSON）的基础。\n\n' +
            '## 基本语法\n\n' +
            '创建：{ name: "Alice", age: 30 }（符号键新风格）、{ "a" => 1 }（任意键）、' +
            'Hash.new、Hash.new(0)（带默认值）、Hash[key, val]。\n' +
            '访问：h[:name]、h.fetch(:name)（无键报错或返回默认）、h.fetch(:name, "默认")。\n' +
            '修改：h[:name] = x、h.store(key, val)。' +
            '删除：h.delete(key)（返回被删值）、h.delete_if { |k,v| ... }。\n' +
            '查询：h.keys、h.values、h.length、h.empty?、h.key?(k)、h.has_value?(v)。\n' +
            '迭代：h.each { |k,v| ... }、h.map { |k,v| [k, v*2] }.to_h。\n' +
            '合并：h1.merge(h2)（后者覆盖前者）、merge! 原地合并。\n' +
            '转换：h.to_a（转数组）、h.invert（键值互换）、h.transform_values { |v| v*2 }。\n\n' +
            '默认值：Hash.new(0) 访问不存在的键返回 0 而非 nil，常用于计数。' +
            '默认块：Hash.new { |h,k| h[k] = [] } 创建嵌套数组，避免 nil 错误。\n\n' +
            '## 示例演示\n\n' +
            '示例一：创建、访问与修改。\n\n' +
            '示例二：迭代与转换。transform_values 批量改值。\n\n' +
            '示例三：默认值计数与合并。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 符号键与字符串键不同：h[:a] 与 h["a"] 是两个不同的键，访问 nil 是常见 bug。\n' +
            '2. fetch vs []：[] 无键返回 nil，fetch 无键报错（可设默认），调试时 fetch 更安全。\n' +
            '3. merge 覆盖：相同键后者覆盖前者，注意顺序。\n' +
            '4. 默认值共享引用：Hash.new([]) 所有键共享同一数组，应用块形式 Hash.new { |h,k| h[k]=[] }。\n' +
            '5. transform_values 不改键：只变换值，要改键用 to_h + map。\n\n' +
            '## 真实场景应用\n\n' +
            'Rails params 就是哈希：params[:user][:name]。' +
            '计数统计：words.each { |w| count[w] += 1 }（默认值 0）。' +
            '分组：users.group_by { |u| u[:role] }。' +
            '配置合并：config = defaults.merge(user_overrides)。哈希是 Web 数据表示的核心。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Ruby 哈希：创建（符号键/任意键）、访问（fetch 更安全）、迭代、合并、转换。' +
            '核心记忆：符号键与字符串键不同；默认值用块避免共享引用。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习枚举器：Enumerable 模块与 Enumerator，惰性迭代的利器。',
          examples: [
            {
              title: '创建访问与修改',
              code: `user = { name: "Alice", age: 30 }
puts user[:name]            # Alice
puts user.fetch(:age)       # 30
user[:email] = "a@b.com"    # 新增
user[:age] = 31             # 修改
puts user.keys.inspect      # [:name, :age, :email]
puts user.values.inspect    # ["Alice", 31, "a@b.com"]`,
              explanation:
                '符号键新风格 { name: "x" }。[] 访问无键返回 nil，fetch 无键报错（更安全）。keys/values 取所有键/值。',
            },
            {
              title: '迭代与转换',
              code: `h = { a: 1, b: 2, c: 3 }
h.each { |k, v| puts "#{k}=#{v}" }
doubled = h.transform_values { |v| v * 2 }
puts doubled.inspect   # {:a=>2, :b=>4, :c=>6}
puts h.to_a.inspect    # [[:a, 1], [:b, 2], [:c, 3]]
puts h.invert.inspect  # {1=>:a, 2=>:b, 3=>:c}`,
              explanation:
                'each 遍历键值对。transform_values 对所有值应用块返回新哈希。to_a 转 [键,值] 数组，invert 键值互换。',
            },
            {
              title: '默认值计数与合并',
              code: `words = ["a", "b", "a", "c", "b", "a"]
count = Hash.new(0)
words.each { |w| count[w] += 1 }
puts count.inspect   # {"a"=>3, "b"=>2, "c"=>1}
defaults = { timeout: 30, retries: 3 }
user_cfg = { retries: 5 }
puts defaults.merge(user_cfg).inspect  # {:timeout=>30, :retries=>5}`,
              explanation:
                'Hash.new(0) 访问不存在的键返回 0，适合计数。merge 合并哈希，相同键后者覆盖前者。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '从 { name: "Bob" } 取 :name 的值输出 Bob。',
              starter_code: `h = { name: "Bob" }
puts h[___]`,
              expected_output: 'Bob',
              hints: ['键是符号 :name', '把 ___ 替换为 :name', 'h[:name] 取得 "Bob"'],
            },
            {
              type: 'output-match',
              prompt: '用 Hash.new(0) 统计 ["x","x","y"]，inspect 输出 {"x"=>2, "y"=>1}。',
              starter_code: `count = Hash.new(0)
["x", "x", "y"].each { |w| count[w] ___ 1 }
puts count.inspect`,
              expected_output: '{"x"=>2, "y"=>1}',
              hints: ['计数是加 1，用 +=', '把 ___ 替换为 +=', 'count[w] += 1 累加计数'],
            },
            {
              type: 'output-match',
              prompt: '合并 {a:1} 和 {a:2}（后者覆盖），inspect 输出 {:a=>2}。',
              starter_code: `puts({ a: 1 }.___({ a: 2 }).inspect)`,
              expected_output: '{:a=>2}',
              hints: ['合并用 merge 方法', '把 ___ 替换为 merge', 'merge 相同键后者覆盖，得 {:a=>2}'],
            },
          ],
          realWorldScenario:
            'Rails 中 params 哈希嵌套：params[:user][:profile][:age]，用 dig 安全访问。' +
            'API 响应解析：JSON.parse(response) 得到哈希，按键取值。' +
            '计数排行：views.group_by(&:user_id).transform_values(&:count)。哈希处理无处不在。',
        },
        {
          id: 'rb-ch5-l3',
          title: '枚举器',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            'Enumerable 是 Ruby 最强大的模块——只要类实现 each 方法并 include Enumerable，' +
            '就能获得几十个强大方法：map/select/reduce/sort/group_by/count/min/max 等。' +
            'Array、Hash、Range 都 include Enumerable，所以它们共享这些方法。' +
            'Enumerator 是枚举器对象，可独立持有迭代状态，支持惰性求值（lazy）、' +
            '无限序列、外部迭代。理解 Enumerable 是 Ruby 数据处理的进阶。\n\n' +
            '## 基本语法\n\n' +
            'Enumerable 方法（在 Array/Hash/Range 上可用）：\n' +
            '聚合：count、sum、min、max、min_by、max_by、reduce。' +
            '筛选：select、reject、filter_map、find、first(n)、take(n)、drop(n)。' +
            '映射：map、flat_map、group_by、partition、chunk、tally。' +
            '判断：any?、all?、none?、one?、include?、member?。' +
            '排序：sort、sort_by、reverse_each、each_slice、each_cons。\n\n' +
            'Enumerator 创建：arr.each（不传块返回 Enumerator）、arr.to_enum。' +
            '惰性求值：(1..Float::INFINITY).lazy.select(&:even?).first(5) 只计算需要的部分。' +
            'group_by 分组：按块返回值分组为哈希。partition 二分：返回 [真组, 假组]。' +
            'tally 计数（Ruby 2.7+）：["a","b","a"].tally 得 {"a"=>2, "b"=>1}。\n\n' +
            '## 示例演示\n\n' +
            '示例一：group_by 与 partition 分组。\n\n' +
            '示例二：sort_by 与 min/max_by。\n\n' +
            '示例三：lazy 惰性求值与无限序列。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 惰性需终端操作：lazy 链需要 first/take/to_a 等触发求值，否则不计算。\n' +
            '2. group_by 返回哈希：键是块返回值，值是数组。\n' +
            '3. sort_by 单次排序：对已排序数据再 sort_by 可能不稳定，注意。\n' +
            '4. flat_map 拍平映射：map 后 flatten(1) 的简写，避免嵌套数组。\n' +
            '5. 性能：大数据用 lazy 或直接 first(n) 避免全量计算。\n\n' +
            '## 真实场景应用\n\n' +
            '分组统计：orders.group_by(&:status).transform_values(&:count)。' +
            '排行榜：users.sort_by(&:score).reverse.first(10)。' +
            '惰性搜索：(1..).lazy.map { |n| n * n }.find { |x| x > 100 }。' +
            '分批处理：items.each_slice(100).map { |batch| process(batch) }。Enumerable 让数据处理极其简洁。\n\n' +
            '## 小结\n\n' +
            '本节学习了 Enumerable 模块：group_by/partition 分组、sort_by/min_by 排序、lazy 惰性求值。' +
            '核心记忆：include Enumerable 只需实现 each；lazy 适合无限或大数据序列。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习面向对象：类与对象、继承与模块、元编程基础，Ruby 的核心范式。',
          examples: [
            {
              title: 'group_by 与 partition',
              code: `nums = [1, 2, 3, 4, 5, 6]
puts nums.group_by(&:even?).inspect
# {false=>[1,3,5], true=>[2,4,6]}
evens, odds = nums.partition(&:even?)
puts evens.inspect  # [2, 4, 6]
puts odds.inspect   # [1, 3, 5]
words = ["a", "bb", "cc", "ddd"]
puts words.group_by(&:length).inspect  # {1=>["a"], 2=>["bb","cc"], 3=>["ddd"]}`,
              explanation:
                'group_by 按块返回值分组成哈希。partition 返回 [真组, 假组] 可多重赋值。&:length 简写按长度分组。',
            },
            {
              title: 'sort_by 与 min/max_by',
              code: `users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 35 }
]
sorted = users.sort_by { |u| u[:age] }
puts sorted.map { |u| u[:name] }.inspect  # ["Bob", "Alice", "Carol"]
puts users.min_by { |u| u[:age] }[:name]  # Bob
puts users.max_by { |u| u[:age] }[:name]  # Carol`,
              explanation:
                'sort_by 按块返回值排序，比 sort + 比较块更高效（Schwartzian 变换）。min_by/max_by 找极值元素。',
            },
            {
              title: 'lazy 惰性求值',
              code: `squares = (1..Float::INFINITY).lazy
  .select(&:even?)
  .map { |n| n * n }
  .first(5)
puts squares.inspect   # [4, 16, 36, 64, 100]
(1..10).each_slice(3) { |batch| puts batch.inspect }
# [1,2,3] [4,5,6] [7,8,9] [10]`,
              explanation:
                'lazy 让无限序列可处理——只在 first(5) 时计算需要的部分。each_slice 把集合分批，适合分页或批量处理。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 group_by 把 [1,2,3,4] 按奇偶分组，inspect 输出 {false=>[1,3], true=>[2,4]}。',
              starter_code: `puts [1, 2, 3, 4].group_by(&:___).inspect`,
              expected_output: '{false=>[1, 3], true=>[2, 4]}',
              hints: ['判断偶数用 even? 方法', '把 ___ 替换为 even?', 'group_by(&:even?) 按奇偶分组'],
            },
            {
              type: 'output-match',
              prompt: '用 sort_by 按 [3,1,2] 自身排序，输出 [1, 2, 3]。',
              starter_code: `puts [3, 1, 2].sort_by { |n| ___ }.inspect`,
              expected_output: '[1, 2, 3]',
              hints: ['排序键就是 n 本身', '把 ___ 替换为 n', 'sort_by { |n| n } 等价于 sort'],
            },
            {
              type: 'output-match',
              prompt: '用 each_slice 把 (1..6) 分成每 3 个一批，第一批 inspect 输出 [1, 2, 3]。',
              starter_code: `(1..6).each_slice(3) { |batch| puts batch.___; break }`,
              expected_output: '[1, 2, 3]',
              hints: ['inspect 输出数组表示', '把 ___ 替换为 inspect', '第一批是 [1,2,3]，break 只输出第一批'],
            },
          ],
          realWorldScenario:
            '订单按状态分组：Order.all.group_by(&:status).transform_values(&:count) 统计各状态数量。' +
            '排行榜：User.sort_by(&:score).reverse.first(100) 取前 100。' +
            '批量发邮件：subscribers.each_slice(500) { |batch| Mailer.deliver(batch) }。' +
            'Enumerable 是 Rails 数据聚合的基石。',
        },
      ],
    },
    // ================================================================
    // 第 6 章：面向对象
    // ================================================================
    {
      id: 'rb-ch6',
      title: '面向对象',
      order: 5,
      lessons: [
        {
          id: 'rb-ch6-l1',
          title: '类与对象',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            'Ruby 是纯粹面向对象的语言——一切皆对象，类（Class）是对象的蓝图。' +
            '类用 class 关键字定义，约定类名用 CamelCase。对象用 ClassName.new 创建，' +
            'new 方法会调用 allocate 分配内存，再调用 initialize 方法初始化（类似构造函数）。' +
            '实例变量以 @ 开头（如 @name），属于对象私有；类变量以 @@ 开头，所有实例共享。\n\n' +
            '属性通过 attr_accessor（读写）、attr_reader（只读）、attr_writer（只写）自动生成 getter/setter 方法，' +
            '避免手写模板代码。方法是对象能执行的动作，用 def 定义；调用方法的括号可省略。\n\n' +
            '## 基本语法\n\n' +
            '定义类：class Dog; def initialize(name); @name = name; end; end。\n' +
            '创建对象：dog = Dog.new("Rex")。访问实例变量需通过方法：attr_reader :name 提供 dog.name。\n\n' +
            '| 关键字/方法 | 说明 | 示例 |\n' +
            '|-------------|------|------|\n' +
            '| class | 定义类 | class Dog ... end |\n' +
            '| def | 定义方法 | def bark; puts "Woof"; end |\n' +
            '| @var | 实例变量 | @name = "Rex" |\n' +
            '| @@var | 类变量 | @@count += 1 |\n' +
            '| attr_accessor | 生成 getter+setter | attr_accessor :name |\n' +
            '| self | 当前对象/类 | self.class 返回类 |\n\n' +
            'initialize 是特殊方法，new 时自动调用。构造时 @var 必须先赋值才能读取，' +
            '否则读取返回 nil（不报错，但易踩坑）。方法末尾表达式自动作为返回值，无需 return。\n\n' +
            '## 示例演示\n\n' +
            '示例一：基础类与对象。定义 Dog 类，含 initialize、实例方法、attr_accessor。' +
            '演示 new 创建、方法调用、属性读写。\n\n' +
            '示例二：实例变量与类变量对比。@count 是每个对象独立的计数；@@total 是所有对象共享的总数。' +
            '类方法用 def self.method 定义，可通过类名直接调用。\n\n' +
            '示例三：attr_accessor 简化代码。对比手写 getter/setter 与 attr_accessor 的等价性。' +
            'attr_accessor 内部就是动态定义 name 和 name= 方法。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 未初始化的 @var 返回 nil：不报错但易引发后续 nil 错误，建议 initialize 中初始化所有 @var。\n' +
            '2. attr_accessor 暴露写方法：外部可任意修改，需只读时用 attr_reader。\n' +
            '3. 类变量 @@var 继承陷阱：子类修改会影响父类，推荐用类实例变量 @var（在类上下文）替代。\n' +
            '4. self 在方法内是对象，在类定义体内是类：context 决定 self 含义。\n' +
            '5. new 不能重定义：new 是 Class 的方法，应通过重写 initialize 定制构造逻辑。\n\n' +
            '## 真实场景应用\n\n' +
            'Rails 中 ActiveRecord 模型本质是类：class User < ApplicationRecord 定义 User 模型，' +
            '@name 这样的属性通过 ActiveRecord 自动生成。Service Object 模式用纯 Ruby 类封装业务逻辑：' +
            'class SendEmail; def initialize(user); @user = user; end; def call; ...; end; end。' +
            '理解类与对象是阅读 Rails 源码的基础。\n\n' +
            '## 小结\n\n' +
            '本节学习 Ruby 类与对象：class 定义类，new 创建对象，initialize 初始化，' +
            '@ 实例变量、@@ 类变量，attr_accessor 自动生成访问器。一切皆对象是 Ruby 的核心。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习继承与模块：单继承、super 调用、mixin 多重复用、Comparable 等内置模块。',
          examples: [
            {
              title: '基础类与对象',
              code: `class Dog
  def initialize(name)
    @name = name
  end

  def bark
    puts "#{@name} says Woof!"
  end

  def name
    @name
  end
end

dog = Dog.new("Rex")
dog.bark
puts dog.name`,
              explanation:
                'class 定义类，initialize 在 new 时自动调用。@name 是实例变量，通过 name 方法读取。dog.bark 调用实例方法。',
            },
            {
              title: 'attr_accessor 简化',
              code: `class Cat
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def info
    "#{@name} is #{@age} years old"
  end
end

c = Cat.new("Mimi", 3)
puts c.info
c.age = 4
puts c.info`,
              explanation:
                'attr_accessor :name 自动生成 name 和 name= 方法，可读可写。等价于手写 def name; @name; end 和 def name=(v); @name = v; end。',
            },
            {
              title: '类方法与类变量',
              code: `class Counter
  @@total = 0

  def initialize
    @@total += 1
  end

  def self.total
    @@total
  end
end

Counter.new
Counter.new
Counter.new
puts Counter.total`,
              explanation:
                '@@total 是类变量，所有实例共享。def self.total 定义类方法，通过 Counter.total 直接调用（不需先 new）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 Person 类，有 @name 实例变量和 name 方法，创建对象输出名字 Alice。',
              starter_code: `class Person
  def initialize(name)
    @name = name
  end

  ___
end

p = Person.new("Alice")
puts p.name`,
              expected_output: 'Alice',
              hints: [
                '需要定义 name 方法返回 @name',
                '写法: def name; @name; end',
                '或用 attr_reader :name 简化',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 attr_accessor 让 age 可读写，初始 20，修改为 25 后输出。',
              starter_code: `class User
  attr_accessor :age
  def initialize(age)
    @age = age
  end
end

u = User.new(20)
___
puts u.age`,
              expected_output: '25',
              hints: [
                '用 u.age = 25 修改属性',
                'attr_accessor 生成了 age= 写方法',
                '写法: u.age = 25',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义类方法 self.greet 输出 Hello（通过类名调用）。',
              starter_code: `class Greeter
  ___
end

puts Greeter.greet`,
              expected_output: 'Hello',
              hints: [
                '类方法用 def self.method 定义',
                '方法体: "Hello"',
                '完整: def self.greet; "Hello"; end',
              ],
            },
          ],
          realWorldScenario:
            'Rails 模型 class User < ApplicationRecord 中，has_many、validates 等都是类方法调用。' +
            'Service Object 用类封装业务：class SendEmail; def initialize(user); @user = user; end; def call; ...; end; end。',
        },
        {
          id: 'rb-ch6-l2',
          title: '继承与模块',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            'Ruby 是单继承语言——一个类只能有一个父类（用 < 表示继承）。' +
            '为了实现多重复用，Ruby 提供 Module（模块）：模块是一组方法和常量的集合，不能实例化，' +
            '用 include 混入（mixin）类中。这种"单继承 + 模块 mixin"的设计避免了多继承的复杂性，' +
            '同时提供了灵活的代码复用。模块还用作命名空间：module MyMod; class C; end; end 避免名字冲突。\n\n' +
            'super 调用父类同名方法：super（带括号）不传当前参数，super（无括号）传当前所有参数。' +
            '内置模块 Comparable 通过实现 <=> 即获得 < > == between? 等方法；Enumerable 通过实现 each 获得 map/select/reduce 等。\n\n' +
            '## 基本语法\n\n' +
            '继承：class Cat < Animal; end。模块定义：module Walkable; def walk; ...; end; end。' +
            '混入模块：class Robot; include Walkable; end。\n\n' +
            '| 关键字 | 说明 | 示例 |\n' +
            '|--------|------|------|\n' +
            '| class A < B | 单继承 | class Cat < Animal |\n' +
            '| module | 定义模块 | module M; end |\n' +
            '| include | 实例方法 mixin | include Comparable |\n' +
            '| extend | 类方法 mixin | extend M |\n' +
            '| super | 调用父类方法 | super 或 super() |\n' +
            '| prepend | 优先于类方法 | prepend M |\n\n' +
            'include 把模块方法变成实例方法；extend 变成类方法；' +
            'prepend 类似 include 但模块方法优先于类本身（用于方法包装/装饰）。' +
            '方法查找链：先 prepend 模块，再类本身，再 include 模块（后 include 优先），最后父类。\n\n' +
            '## 示例演示\n\n' +
            '示例一：继承与 super。子类 initialize 调用 super 初始化父类部分，再补充自己的字段。' +
            'super 不传参时自动转发当前方法参数。\n\n' +
            '示例二：模块 mixin。定义 Walkable 模块，混入 Dog 和 Robot 两个无继承关系的类，共享 walk 方法。' +
            '这是 Ruby 解决"多继承"的优雅方式。\n\n' +
            '示例三：Comparable 模块。实现 <=> 后 include Comparable，自动获得 < > == between? 等比较方法。' +
            'Enumerable 类似——实现 each 即获得数十个迭代方法。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. super 与 super()：super 自动传参，super() 不传参——行为不同，慎用。\n' +
            '2. include 顺序：后 include 的模块优先（在 ancestors 链中更靠前）。\n' +
            '3. 模块不能 new：Module 不可实例化，只能 mixin 或当命名空间。\n' +
            '4. 命名冲突：多模块同名方法按 mixin 顺序覆盖，需用 ancestors 理解查找链。\n' +
            '5. instance_variables 私有：子类可访问父类的 @var，但外部不能（封装）。\n\n' +
            '## 真实场景应用\n\n' +
            'Rails 中 ApplicationRecord < ActiveRecord::Base 单继承基础；' +
            'Concern 模式（module Authenticatable; extend ActiveSupport::Concern）实现跨模型复用。' +
            'Comparable 用于自定义排序对象（如 class Money; include Comparable; def <=>(other); ...; end; end）。' +
            'Enumerable 让自定义集合类获得全套迭代方法。\n\n' +
            '## 小结\n\n' +
            '本节学习 Ruby 的代码复用机制：单继承（<）+ 模块 mixin（include/extend）。' +
            'Comparable/Enumerable 内置模块展示"实现一个核心方法即获得全套方法"的强大表达力。' +
            '理解方法查找链是阅读 Ruby 源码的关键。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习元编程基础：动态方法定义、method_missing、open class、send 等 Ruby 的高级特性。',
          examples: [
            {
              title: '继承与 super',
              code: `class Animal
  def initialize(name)
    @name = name
  end

  def speak
    puts "#{@name} makes a sound"
  end
end

class Dog < Animal
  def initialize(name, breed)
    super(name)
    @breed = breed
  end

  def speak
    super
    puts "#{@name} (#{@breed}) barks"
  end
end

d = Dog.new("Rex", "Lab")
d.speak`,
              explanation:
                'Dog 继承 Animal，super(name) 调用父类 initialize。重写 speak 时 super 调用父类版本，再补充子类逻辑。',
            },
            {
              title: '模块 mixin',
              code: `module Walkable
  def walk
    puts "#{self.class} is walking"
  end
end

class Dog
  include Walkable
end

class Robot
  include Walkable
end

Dog.new.walk
Robot.new.walk`,
              explanation:
                'Walkable 模块定义 walk 方法，Dog 和 Robot 各自 include 后都获得 walk。模块让无继承关系的类共享行为——Ruby 的多继承替代方案。',
            },
            {
              title: 'Comparable 模块',
              code: `class Box
  include Comparable
  attr_reader :size

  def initialize(size)
    @size = size
  end

  def <=>(other)
    size <=> other.size
  end
end

a = Box.new(3)
b = Box.new(5)
puts a < b        # true
puts b > a        # true
puts a == Box.new(3)  # true
puts [b, a, Box.new(1)].sort.map(&:size).inspect`,
              explanation:
                '实现 <=> 后 include Comparable，自动获得 < > <= >= == between?。sort 也能直接用——这就是 Ruby 的"约定优于配置"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '让 Cat 类继承 Animal 并调用 super 输出父类方法后再输出 Meow。',
              starter_code: `class Animal
  def speak
    puts "Animal speaks"
  end
end

class Cat < Animal
  def speak
    ___
    puts "Meow"
  end
end

Cat.new.speak`,
              expected_output: 'Animal speaks\nMeow',
              hints: [
                'super 调用父类同名方法',
                '在 puts "Meow" 前加 super',
                'super 会调用 Animal#speak',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Greeter 模块含 hello 方法，混入 User 类后调用输出 Hi。',
              starter_code: `module Greeter
  def hello
    "Hi"
  end
end

class User
  ___
end

puts User.new.hello`,
              expected_output: 'Hi',
              hints: [
                '用 include 混入模块',
                '写法: include Greeter',
                'include 后模块方法变为类的实例方法',
              ],
            },
            {
              type: 'output-match',
              prompt: '实现 Box 类的 <=> 方法让 size 比较，使 Box.new(1) < Box.new(2) 返回 true。',
              starter_code: `class Box
  include Comparable
  attr_reader :size
  def initialize(size); @size = size; end

  def <=>(other)
    ___
  end
end

puts Box.new(1) < Box.new(2)`,
              expected_output: 'true',
              hints: [
                '比较 size 属性即可',
                '用飞船运算符: size <=> other.size',
                'Comparable 会自动实现 < 方法',
              ],
            },
          ],
          realWorldScenario:
            'Rails 的 ActiveSupport::Concern 是模块模式典范：module Authenticatable; included do; has_many :sessions; end; end。' +
            'Comparable 用于金额、日期等可比较对象；Enumerable 让自定义集合获得 map/select 等数十种方法。',
        },
        {
          id: 'rb-ch6-l3',
          title: '元编程基础',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            '元编程（Metaprogramming）是"写代码的代码"——程序在运行时动态修改自身结构和行为。' +
            'Ruby 的元编程能力是其强大表达力的根源：Rails 等框架大量使用元编程实现"约定优于配置"。' +
            '核心元编程能力包括：动态方法定义（define_method）、方法委托（method_missing）、' +
            '打开类（open class）、反射（send、respond_to?、instance_methods）等。\n\n' +
            'method_missing 是 Ruby 最具魔力的方法：当调用不存在的方法时，Ruby 抛出 NoMethodError 之前会先调用 method_missing。' +
            '重写它可以"动态响应"任意方法——ActiveRecord 的 dynamic finder（find_by_name）就是基于此。\n\n' +
            '## 基本语法\n\n' +
            '打开类：class String; def shout; upcase; end; end 给已有类加方法（谨慎使用，影响全局）。' +
            '动态定义方法：define_method(:name) { ... } 在运行时创建方法。\n\n' +
            '| 方法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| send | 动态调用方法 | obj.send(:upcase) |\n' +
            '| define_method | 动态定义方法 | define_method(:hi) { "hi" } |\n' +
            '| method_missing | 拦截未定义方法 | def method_missing(m, *a); ...; end |\n' +
            '| respond_to_missing? | 配合 method_missing | 让 respond_to? 正确响应 |\n' +
            '| instance_methods | 列出对象方法 | obj.instance_methods |\n\n' +
            'send 用字符串/符号调用方法，可调用私有方法（Ruby 2.7 后用 __send__ 避免冲突）。' +
            'define_method 接收方法名和块，块成为方法体。method_missing 必须在无法处理时调用 super 抛出 NoMethodError，' +
            '并配 respond_to_missing? 让 respond_to? 行为一致。\n\n' +
            '## 示例演示\n\n' +
            '示例一：define_method 批量生成方法。循环 [:name, :age, :email] 为每个字段生成 getter，避免手写模板代码。' +
            '这是 ActiveRecord 动态生成属性方法的原理。\n\n' +
            '示例二：method_missing 实现动态方法。find_by_xxx 调用转为查询条件，未匹配的调用 super 抛错。' +
            'ActiveRecord 的 find_by_name / find_by_email 就是这样实现的。\n\n' +
            '示例三：send 动态调用。根据字符串方法名调用，常用于策略模式、根据配置选方法。' +
            '注意 send 可调私有方法，公私边界要谨慎。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. method_missing 性能：每次调用走完整查找链，热路径慎用，可缓存为真实方法。\n' +
            '2. method_missing 必须配 respond_to_missing?：否则 respond_to? 返回 false 但方法能调，行为不一致。\n' +
            '3. monkey patch 风险：打开核心类（String、Array）加方法易冲突，应优先用 refine 或模块。\n' +
            '4. method_missing 必须调 super：未匹配的方法交还 Ruby，否则会"吃掉"所有未定义方法（包括拼写错误）。\n' +
            '5. send 调私有方法：破坏封装，公开 API 应避免依赖此特性。\n\n' +
            '## 真实场景应用\n\n' +
            'Rails 大量使用元编程：ActiveRecord 的 belongs_to :user 动态生成 user=、user、user_id 等方法；' +
            'find_by_name 通过 method_missing 实现动态查询。delegate :name, to: :user 用 define_method 生成委托方法。' +
            '理解元编程是阅读 Rails 源码的前提，但应用代码应慎用——优先考虑普通方法。\n\n' +
            '## 小结\n\n' +
            '本节学习 Ruby 元编程基础：define_method 动态定义、method_missing 拦截未定义方法、' +
            'send 动态调用、open class 打开类。元编程是 Ruby 强大表达力的根源，也是 Rails 的基石。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习异常与文件：begin/rescue 异常处理、File 读写、Dir 目录遍历，完成 Ruby 入门核心知识。',
          examples: [
            {
              title: 'define_method 批量生成',
              code: `class Person
  def initialize(data)
    @data = data
  end

  [:name, :age, :email].each do |field|
    define_method(field) { @data[field] }
  end
end

p = Person.new(name: "Alice", age: 30, email: "a@b.com")
puts p.name
puts p.age
puts p.email`,
              explanation:
                '循环为每个字段名调用 define_method，块成为方法体。一次代码生成三个方法 name/age/email——ActiveRecord 的原理。',
            },
            {
              title: 'method_missing 动态方法',
              code: `class Finder
  def initialize(data)
    @data = data
  end

  def method_missing(name, *args)
    if name.to_s =~ /^find_by_(.+)$/
      field = $1.to_sym
      @data.find { |item| item[field] == args.first }
    else
      super
    end
  end

  def respond_to_missing?(name, include_private = false)
    name.to_s.start_with?('find_by_') || super
  end
end

users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
]
f = Finder.new(users)
puts f.find_by_name("Alice").inspect
puts f.find_by_age(25).inspect`,
              explanation:
                'method_missing 拦截 find_by_xxx 调用，用正则提取字段名做查询。respond_to_missing? 让 respond_to? 行为一致。这就是 ActiveRecord find_by_name 的原理。',
            },
            {
              title: 'send 动态调用',
              code: `class Calculator
  def add(a, b); a + b; end
  def sub(a, b); a - b; end
  def mul(a, b); a * b; end
end

c = Calculator.new
op = "mul"
puts c.send(op, 3, 4)`,
              explanation:
                'send 用字符串方法名动态调用。常用于策略模式：根据配置或用户输入选方法。注意 send 可调私有方法，安全敏感场景用 public_send。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 send 动态调用 upcase 方法让 "hi" 变 "HI"。',
              starter_code: `str = "hi"
puts str.___("upcase")`,
              expected_output: 'HI',
              hints: [
                '用 send 方法动态调用',
                'send 接收方法名符号或字符串',
                '答案: send("upcase")',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 define_method 为类生成 hello 方法返回 Hi。',
              starter_code: `class Greeter
  ___(:hello) { "Hi" }
end

puts Greeter.new.hello`,
              expected_output: 'Hi',
              hints: [
                'define_method 接收方法名和块',
                '块体是方法返回值',
                '答案: define_method(:hello) { "Hi" }',
              ],
            },
            {
              type: 'output-match',
              prompt: 'method_missing 拦截未知方法，让 Spy.new.foo 输出 Unknown: foo。',
              starter_code: `class Spy
  def method_missing(name, *args)
    ___
  end
end

Spy.new.foo`,
              expected_output: 'Unknown: foo',
              hints: [
                'name 参数是方法名（符号）',
                '用插值输出: puts "Unknown: #{name}"',
                '答案: puts "Unknown: #{name}"',
              ],
            },
          ],
          realWorldScenario:
            'Rails ActiveRecord 的 belongs_to :user 通过 define_method 生成 user、user=、user_id 等方法；' +
            'find_by_name/find_by_email 通过 method_missing 实现动态查询。delegate :name, to: :user 也是元编程生成委托方法。',
        },
      ],
    },
    // ================================================================
    // 第 7 章：异常与文件
    // ================================================================
    {
      id: 'rb-ch7',
      title: '异常与文件',
      order: 6,
      lessons: [
        {
          id: 'rb-ch7-l1',
          title: '异常处理',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            '异常（Exception）是程序运行时错误的封装对象，所有异常继承自 Exception 类。' +
            'Ruby 用 begin/rescue/end 处理异常（类似 try/catch），raise 主动抛出异常。' +
            '标准异常层级：Exception → StandardError → 具体异常（ArgumentError、TypeError、NoMethodError、ZeroDivisionError 等）。' +
            '通常只捕获 StandardError 子类（用 rescue 不带类名默认捕获 StandardError）。\n\n' +
            '异常处理让程序在错误发生时优雅恢复，而非崩溃。但过度使用 rescue 会掩盖 bug——' +
            '原则是：只捕获你能处理的异常，让不能处理的向上传播。\n\n' +
            '## 基本语法\n\n' +
            '基本结构：begin; ... ; rescue => e; puts e.message; end。' +
            'raise 抛异常：raise "msg" 或 raise CustomError, "msg"。\n\n' +
            '| 关键字 | 说明 | 示例 |\n' +
            '|--------|------|------|\n' +
            '| begin/rescue/end | 异常捕获块 | begin; ...; rescue => e; end |\n' +
            '| raise | 抛出异常 | raise "fail" |\n' +
            '| ensure | 必执行（类似 finally） | ensure; file.close; end |\n' +
            '| else | 无异常时执行 | else; puts "ok"; end |\n' +
            '| retry | 重试 begin 块 | retry（慎用，易死循环） |\n' +
            '| rescue 类名 | 捕获特定异常 | rescue ZeroDivisionError => e |\n\n' +
            '自定义异常：class MyError < StandardError; end，继承 StandardError 而非 Exception——' +
            '因为 rescue 默认不捕获 Exception（避免 Interrupt 等被误捕）。' +
            '多个 rescue 按从具体到一般顺序排列（先 ZeroDivisionError 再 StandardError）。\n\n' +
            '## 示例演示\n\n' +
            '示例一：基础 rescue 捕获除零错误。begin 块包裹可能出错代码，rescue => e 把异常对象赋给 e。' +
            'e.message 是错误信息，e.class 是异常类，e.backtrace 是调用栈。\n\n' +
            '示例二：ensure 资源清理。无论是否异常都执行，常用于关闭文件、释放锁。' +
            'Ruby 推荐用块形式 File.open(path) { |f| ... } 自动 ensure close。\n\n' +
            '示例三：自定义异常与 raise。继承 StandardError 定义业务异常，raise 抛出，' +
            'rescue CustomError 精确捕获。让错误语义更清晰。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 裸 rescue 等价 rescue StandardError：不会捕获 Interrupt、SystemExit，通常想要的就是这个。\n' +
            '2. rescue Exception => e 危险：会捕获 Interrupt（Ctrl+C）和 SystemExit，让程序无法正常中断。\n' +
            '3. retry 易死循环：retry 重试整个 begin 块，必须有退出条件（如重试计数）。\n' +
            '4. 吞异常：rescue 后什么都不做会掩盖 bug，至少记日志或 re-raise。\n' +
            '5. 异常不是控制流：正常流程不应靠异常跳转，异常应只用于"异常"情况。\n\n' +
            '## 真实场景应用\n\n' +
            'Rails 控制器用 rescue_from 集中处理：rescue_from ActiveRecord::RecordNotFound, with: :not_found。' +
            'Sidekiq job 中 rescue 后用 retry 重试（带退避），3 次失败后进入死信队列。' +
            'API 调用用 rescue Net::Error 重试或降级。自定义业务异常让代码语义清晰：' +
            'raise InsufficientBalance, "余额不足" 比 raise "余额不足" 更可追溯。\n\n' +
            '## 小结\n\n' +
            '本节学习 Ruby 异常处理：begin/rescue/end 捕获、raise 抛出、ensure 清理、' +
            '自定义异常继承 StandardError。原则：只捕获能处理的异常，不要吞异常。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习文件 IO：File.read/write、File.open 块、路径处理，掌握读写文件的能力。',
          examples: [
            {
              title: '基础异常捕获',
              code: `begin
  result = 10 / 0
  puts "结果: #{result}"
rescue ZeroDivisionError => e
  puts "捕获除零错误: #{e.message}"
rescue => e
  puts "其他错误: #{e.class}"
end
puts "程序继续"`,
              explanation:
                'begin 块包裹可能出错的代码，rescue 按类型捕获。ZeroDivisionError 先匹配，未匹配的走通用 rescue。捕获后程序继续执行而非崩溃。',
            },
            {
              title: 'ensure 资源清理',
              code: `file = nil
begin
  file = File.open("/tmp/test.txt", "w")
  file.write("hello")
  # 模拟错误
  raise "写入失败"
rescue => e
  puts "错误: #{e.message}"
ensure
  if file
    file.close
    puts "文件已关闭"
  end
end`,
              explanation:
                'ensure 块无论是否异常都执行，常用于关闭文件、释放锁。实际开发推荐用 File.open 块形式自动 close，避免手动 ensure。',
            },
            {
              title: '自定义异常',
              code: `class InsufficientBalance < StandardError
  attr_reader :amount

  def initialize(amount)
    @amount = amount
    super("余额不足，差 #{amount}")
  end
end

def withdraw(balance, amount)
  raise InsufficientBalance.new(amount - balance) if amount > balance
  balance - amount
end

begin
  withdraw(100, 200)
rescue InsufficientBalance => e
  puts e.message
  puts "差额: #{e.amount}"
end`,
              explanation:
                '继承 StandardError 定义业务异常，可携带额外字段（如差额 amount）。rescue 精确捕获自定义异常，让错误语义清晰且可追溯。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '捕获除零错误并输出 caught。',
              starter_code: `begin
  10 / 0
___
  puts "caught"
end`,
              expected_output: 'caught',
              hints: [
                '用 rescue => e 捕获异常',
                '写法: rescue => e',
                'rescue 块内输出 caught',
              ],
            },
            {
              type: 'output-match',
              prompt: '抛出异常信息 fail 并在 rescue 中输出该消息。',
              starter_code: `begin
  raise "fail"
___ => e
  puts e.message
end`,
              expected_output: 'fail',
              hints: [
                'rescue 把异常赋值给变量',
                '写法: rescue => e',
                'e.message 返回 "fail"',
              ],
            },
            {
              type: 'output-match',
              prompt: '让 ensure 输出 done（无论是否异常）。',
              starter_code: `begin
  puts "try"
rescue => e
  puts "error"
___
  puts "done"
end`,
              expected_output: 'try\ndone',
              hints: [
                'ensure 关键字定义必执行块',
                '写法: ensure',
                'ensure 块输出 done',
              ],
            },
          ],
          realWorldScenario:
            'Rails 用 rescue_from ActiveRecord::RecordNotFound, with: :render_404 集中处理 404。' +
            'Sidekiq worker rescue 后用 retry 重试失败 job；API 客户端 rescue Net::ReadTimeout 后重试或降级。',
        },
        {
          id: 'rb-ch7-l2',
          title: '文件 IO',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            '文件 IO 是程序与外部存储交互的基础——读写配置、日志、数据文件。' +
            'Ruby 的 File 类封装文件操作，File.open 推荐用块形式自动关闭文件（块结束自动 ensure close）。' +
            'IO 是 File 的父类，提供更通用的输入输出抽象（含 STDIN、STDOUT、Socket 等）。\n\n' +
            '文件模式：r 只读（默认）、w 只写（清空/创建）、a 追加、r+ 读写、w+ 读写清空、b 二进制（Windows）。' +
            '路径处理用 File.join（跨平台分隔符）、File.dirname、File.basename、File.extname。\n\n' +
            '## 基本语法\n\n' +
            '读：File.read(path) 一次性读全文；File.readlines(path) 按行读返回数组；File.open(path) { |f| f.read }。\n' +
            '写：File.write(path, content) 一次写入；File.open(path, "w") { |f| f.puts "line" }。\n\n' +
            '| 方法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| File.read | 一次读全文 | File.read("a.txt") |\n' +
            '| File.write | 一次写入 | File.write("a.txt", "hi") |\n' +
            '| File.open(path) { } | 块形式自动关闭 | File.open("a") { \\|f\\| f.read } |\n' +
            '| File.readlines | 按行读 | File.readlines("a.txt") |\n' +
            '| File.exist? | 文件存在 | File.exist?("a.txt") |\n' +
            '| File.size | 文件大小（字节） | File.size("a.txt") |\n\n' +
            '块形式 File.open(path) { |f| ... } 是首选——块结束自动 close，即使异常也能清理。' +
            '大文件避免 File.read 一次读入内存，应用 each 逐行处理：File.foreach(path) { |line| ... }。\n\n' +
            '## 示例演示\n\n' +
            '示例一：读写基础。File.write 写入文本，File.read 读回。验证读写对称性。' +
            'File.exist? 检查存在，File.size 看字节大小。\n\n' +
            '示例二：逐行读取大文件。File.foreach 每次读一行，内存占用恒定——处理 GB 级日志必备。' +
            '对比 File.readlines 一次读全部（小文件才用）。\n\n' +
            '示例三：路径处理。File.join 跨平台拼路径（Linux 用 /、Windows 用 \\）。' +
            'dirname/basename/extname 拆解路径各部分。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 忘记 close：不用块形式时文件句柄泄漏，长期运行进程可能耗尽 fd。' +
            '2. File.read 大文件爆内存：GB 级文件用 foreach 逐行处理。' +
            '3. w 模式清空：File.open("a", "w") 会立即清空文件，追加用 "a"。' +
            '4. 编码问题：中文文件可能需指定编码 File.read(path, encoding: "utf-8")。' +
            '5. 路径分隔符：Windows 用 \\，跨平台代码用 File.join 而非手动拼 "/"。\n\n' +
            '## 真实场景应用\n\n' +
            'Rails 日志用 Logger 写文件（带轮转）；rake 任务读 CSV：CSV.foreach(path) { |row| ... }。' +
            '配置文件用 YAML.load_file("config.yml")。处理上传文件用 File.open(tmp, "wb") { |f| f.write(data) }。' +
            '日志分析脚本用 File.foreach("access.log") 逐行解析，避免内存爆炸。\n\n' +
            '## 小结\n\n' +
            '本节学习 Ruby 文件 IO：File.read/write 一次性、File.open 块形式自动关闭、' +
            'File.foreach 逐行处理大文件、路径处理用 File.join。块形式是首选，避免资源泄漏。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习目录操作：Dir 遍历、glob 模式匹配、FileUtils 复制移动，完成文件系统操作能力。',
          examples: [
            {
              title: '读写基础',
              code: `path = "/tmp/ruby_test.txt"

# 写入
File.write(path, "Hello\\nRuby\\n")

# 读取全文
puts File.read(path)

# 检查与大小
puts File.exist?(path)
puts File.size(path)`,
              explanation:
                'File.write 一次写入（覆盖），File.read 一次读全文。File.exist? 检查存在，File.size 返回字节数。\\n 在文件中是换行。',
            },
            {
              title: '逐行读取',
              code: `path = "/tmp/ruby_lines.txt"
File.write(path, "line1\\nline2\\nline3\\n")

# foreach 逐行处理（内存友好）
File.foreach(path).with_index do |line, i|
  puts "#{i}: #{line.chomp}"
end

# readlines 一次读全部（小文件）
lines = File.readlines(path)
puts "共 #{lines.size} 行"`,
              explanation:
                'File.foreach 逐行读取，内存恒定，适合大文件。line 末尾含 \\n，用 chomp 去除。File.readlines 一次读全部，仅小文件用。',
            },
            {
              title: '路径处理',
              code: `path = "/Users/alice/docs/report.txt"

puts File.dirname(path)    # /Users/alice/docs
puts File.basename(path)   # report.txt
puts File.extname(path)    # .txt
puts File.basename(path, ".txt")  # report

# File.join 跨平台拼路径
full = File.join("Users", "bob", "data.csv")
puts full`,
              explanation:
                'dirname/basename/extname 拆解路径各部分。basename 第二参数可去扩展名。File.join 用系统分隔符拼路径，跨平台安全。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '写入文件后读取并输出内容 Hello（写入 /tmp/rb_ex.txt）。',
              starter_code: `path = "/tmp/rb_ex.txt"
File.write(path, "Hello")
puts File.___(path)`,
              expected_output: 'Hello',
              hints: [
                '读取全文用 read 方法',
                'File.read(path) 一次读全文',
                '答案: read',
              ],
            },
            {
              type: 'output-match',
              prompt: '用块形式打开文件写 Hi 后自动关闭，块内用 f.puts 写入。',
              starter_code: `File.open("/tmp/rb_block.txt", "w") ___ |f|
  f.puts "Hi"
end
puts File.read("/tmp/rb_block.txt")`,
              expected_output: 'Hi',
              hints: [
                '块形式用 do/end 或 {}',
                '写法: do',
                'File.open 块形式块结束自动 close',
              ],
            },
            {
              type: 'output-match',
              prompt: '输出路径 /a/b/c.txt 的扩展名 .txt。',
              starter_code: `puts File.___("/a/b/c.txt")`,
              expected_output: '.txt',
              hints: [
                '取扩展名的方法叫 extname',
                'File.extname(path) 返回扩展名（含点）',
                '答案: extname',
              ],
            },
          ],
          realWorldScenario:
            'Rails 处理上传：File.open(Rails.root.join("tmp", upload.original_filename), "wb") { |f| f.write(upload.read) }。' +
            '日志分析脚本用 File.foreach("access.log") { |line| parse(line) } 处理 GB 级日志。',
        },
        {
          id: 'rb-ch7-l3',
          title: '目录操作',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            '目录操作是文件系统管理的核心——遍历、创建、删除目录。Ruby 用 Dir 类操作目录，' +
            'FileUtils 模块提供复制、移动、删除等高级操作（需 require "fileutils"）。' +
            'Dir.glob 用通配符匹配文件，是批量处理文件的利器。\n\n' +
            '常见需求：遍历目录所有 .rb 文件、递归搜索、创建多级目录、复制整个目录树。' +
            '这些在构建脚本、文件处理工具、静态网站生成器中极为常见。\n\n' +
            '## 基本语法\n\n' +
            'Dir.mkdir(path) 创建目录；Dir.rmdir 删除空目录；Dir.exists? 判断存在；' +
            'Dir.pwd 当前工作目录；Dir.chdir 改变工作目录；Dir.glob 模式匹配。\n\n' +
            '| 方法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| Dir.mkdir | 创建目录 | Dir.mkdir("logs") |\n' +
            '| Dir.glob | 通配符匹配 | Dir.glob("*.rb") |\n' +
            '| Dir.glob("**/*.rb") | 递归匹配 | 找所有子目录 .rb |\n' +
            '| Dir.entries | 列出目录 | Dir.entries(".") |\n' +
            '| Dir.foreach | 遍历目录 | Dir.foreach(".") { \\|f\\| } |\n' +
            '| FileUtils.cp | 复制 | FileUtils.cp("a", "b") |\n' +
            '| FileUtils.mv | 移动/重命名 | FileUtils.mv("a", "b") |\n' +
            '| FileUtils.rm_r | 递归删除 | FileUtils.rm_r("dir") |\n\n' +
            '通配符：* 匹配任意字符（不含 /）、** 递归匹配子目录、? 单字符、[abc] 字符集、{rb,py} 多模式。' +
            'Dir.glob 返回数组，Dir.foreach 返回枚举器（内存友好）。\n\n' +
            '## 示例演示\n\n' +
            '示例一：创建与遍历目录。Dir.mkdir 创建，Dir.entries 列出（含 . 和 ..），' +
            'Dir.glob("*.rb") 只匹配 .rb 文件。\n\n' +
            '示例二：递归搜索。Dir.glob("**/*.rb") 递归找所有子目录的 Ruby 文件，' +
            '类似 find 命令。FileUtils.mkdir_p 创建多级目录（类似 mkdir -p）。\n\n' +
            '示例三：FileUtils 文件操作。cp 复制、mv 移动/重命名、rm_r 递归删除（慎用！）。' +
            '对应 shell 命令 cp/mv/rm -r，但跨平台。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. rm_r 不可逆：FileUtils.rm_r 删整个目录树，无回收站，慎用！可加 secure 选项。\n' +
            '2. Dir.entries 含 . 和 ..：需手动过滤，或用 Dir.glob("*") 不含这两个。\n' +
            '3. 路径大小写：macOS 默认不区分大小写，Linux 区分——跨平台代码注意一致。\n' +
            '4. 权限错误：无权限目录操作抛 Errno::EACCES，需 rescue 处理。\n' +
            '5. 符号链接：FileUtils.cp_r 默认跟随符号链接，用 :preserve 选项保留。\n\n' +
            '## 真实场景应用\n\n' +
            '构建脚本用 Dir.glob("lib/**/*.rb") 收集所有源文件做 require；' +
            'Rails 资产预编译遍历 app/assets；静态网站生成器遍历 _posts 目录生成文章。' +
            '部署脚本用 FileUtils.cp_r 发布静态文件到 nginx 目录。' +
            '清理脚本用 Dir.glob("/tmp/*.log").each { |f| File.delete(f) } 清旧日志。\n\n' +
            '## 小结\n\n' +
            '本节学习 Ruby 目录操作：Dir.mkdir/glob/entries 管理目录，Dir.glob 通配符匹配，' +
            'FileUtils.cp/mv/rm_r 高级文件操作。掌握这些能力可编写文件处理工具和构建脚本。\n\n' +
            '## 下节预告\n\n' +
            '恭喜你完成了 Ruby 入门核心知识！接下来可以探索 Rails Web 框架、' +
            'RSpec 测试框架、Sinatra 轻量 Web 应用等进阶主题，将 Ruby 用于真实项目。',
          examples: [
            {
              title: '创建与遍历目录',
              code: `dir = "/tmp/ruby_dir"
Dir.mkdir(dir) unless Dir.exist?(dir)

# 创建测试文件
File.write("#{dir}/a.rb", "puts 1")
File.write("#{dir}/b.rb", "puts 2")
File.write("#{dir}/c.txt", "hi")

# 列出所有 .rb 文件
puts Dir.glob("#{dir}/*.rb").inspect

# 不含 . 和 ..
puts Dir.glob("#{dir}/*").size`,
              explanation:
                'Dir.mkdir 创建目录（先检查存在）。Dir.glob 用通配符匹配：*.rb 只匹配 Ruby 文件，* 匹配所有（不含 . 和 ..）。',
            },
            {
              title: '递归搜索',
              code: `dir = "/tmp/ruby_tree"
FileUtils.mkdir_p("#{dir}/sub1/sub2")
File.write("#{dir}/a.rb", "1")
File.write("#{dir}/sub1/b.rb", "2")
File.write("#{dir}/sub1/sub2/c.rb", "3")

# 递归找所有 .rb
files = Dir.glob("#{dir}/**/*.rb")
puts "找到 #{files.size} 个 .rb 文件"
files.each { |f| puts File.basename(f) }`,
              explanation:
                '** 通配符递归匹配所有子目录。FileUtils.mkdir_p 创建多级目录（类似 mkdir -p）。这种递归搜索在构建脚本中极为常用。',
            },
            {
              title: 'FileUtils 操作',
              code: `require "fileutils"

src = "/tmp/ruby_src.txt"
File.write(src, "hello")

# 复制
FileUtils.cp(src, "/tmp/ruby_copy.txt")
puts File.exist?("/tmp/ruby_copy.txt")

# 移动/重命名
FileUtils.mv("/tmp/ruby_copy.txt", "/tmp/ruby_renamed.txt")
puts File.exist?("/tmp/ruby_renamed.txt")

# 创建目录树
FileUtils.mkdir_p("/tmp/ruby_new/sub")
puts Dir.exist?("/tmp/ruby_new/sub")`,
              explanation:
                'FileUtils 提供 cp（复制）、mv（移动/重命名）、mkdir_p（多级创建）、rm_r（递归删除）等。需 require "fileutils"，是跨平台文件操作工具。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Dir.glob 匹配 /tmp 下所有 .txt 文件并输出数量（先创建一个）。',
              starter_code: `File.write("/tmp/ex_test.txt", "hi")
files = Dir.glob("/tmp/*.txt")
puts files.___`,
              expected_output: '1',
              hints: [
                '数组长度方法',
                '.size 或 .length',
                '答案: size',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 FileUtils 创建多级目录 /tmp/rb_ex/sub 后输出 created。',
              starter_code: `require "fileutils"
FileUtils.___("/tmp/rb_ex/sub")
puts "created"`,
              expected_output: 'created',
              hints: [
                '创建多级目录用 mkdir_p',
                'mkdir_p 类似 shell 的 mkdir -p',
                '答案: mkdir_p',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Dir.glob 递归找 /tmp 下所有 .rb 文件（含子目录）。',
              starter_code: `files = Dir.glob("/tmp/___.rb")
puts files.class`,
              expected_output: 'Array',
              hints: [
                '递归通配符是 **',
                '模式: **/*.rb',
                '答案: **/*',
              ],
            },
          ],
          realWorldScenario:
            'Rails 资产预编译遍历 app/assets 目录；构建脚本用 Dir.glob("lib/**/*.rb") 收集源文件；' +
            '清理脚本用 Dir.glob("/tmp/*.log").each { |f| File.delete(f) } 定时清理旧日志。',
        },
      ],
    },
  ],
}
