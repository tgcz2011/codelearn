import type { CourseContent } from './types'

/**
 * PHP 入门课程（8 章 24 节）
 *
 * PHP 代码通过在线编译器（PHP 8.x）执行。
 * echo / print / var_dump 输出被捕获为 stdout，expected_output 与输出文本对应。
 * echo 可输出多个值（逗号分隔），print 只能一个且返回 1。
 * 本课程参考 runoob.com 级别的详细程度，覆盖从环境运行到安全实践的核心主题。
 */
export const phpCourse: CourseContent = {
  id: 'course-php',
  slug: 'php',
  title: 'PHP 入门到精通',
  description:
    '从 echo 输出到 PDO 数据库操作，系统学习 PHP 核心语法、表单会话、面向对象与安全实践，构建动态 Web 应用。',
  language: 'php',
  difficulty: 'beginner',
  chapters: [
    // ================================================================
    // 第 1 章：PHP 入门
    // ================================================================
    {
      id: 'php-ch1',
      title: 'PHP 入门',
      order: 0,
      lessons: [
        {
          id: 'php-ch1-l1',
          title: '环境与运行',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            'PHP（PHP: Hypertext Preprocessor）是专为 Web 开发设计的服务端脚本语言。' +
            '它嵌入 HTML 中，在服务器执行后返回纯 HTML 给浏览器。PHP 由 Rasmus Lerdorf 于 1994 年创建，' +
            '至今仍驱动着全球 70% 以上的网站（包括 WordPress、Wikipedia 等）。PHP 8.x 是当前主流版本，' +
            '性能大幅提升并引入了 JIT、命名参数、match 表达式等现代特性。\n\n' +
            '运行 PHP 需要安装解释器。macOS 用 Homebrew：brew install php；' +
            'Windows 推荐使用 XAMPP 或 Laragon 集成环境；Linux 用 apt install php。' +
            '安装后运行 php -v 查看版本。PHP 代码以 .php 为扩展名，用 php hello.php 运行；' +
            '也可用 php -S localhost:8000 启动内置开发服务器，浏览器访问 http://localhost:8000。\n\n' +
            '## 基本语法\n\n' +
            'PHP 代码用 <?php ?> 标签包裹（纯 PHP 文件结尾的 ?> 可省略，推荐省略）。' +
            '每条语句以分号结尾。注释：// 单行、# 单行、/* */ 多行。\n\n' +
            '最经典的程序：<?php echo "Hello, World!"; ?>。' +
            'echo 是语言结构（不是函数），可输出多个值：echo "a", "b";。' +
            'print 也是语言结构，只能输出一个值并返回 1。var_dump 输出类型和值，适合调试。\n\n' +
            '| 输出方式 | 说明 | 示例 |\n' +
            '|----------|------|------|\n' +
            '| echo | 输出（无返回值） | echo "hi"; |\n' +
            '| print | 输出（返回 1） | print "hi"; |\n' +
            '| var_dump | 输出类型和值 | var_dump(42); |\n' +
            '| print_r | 输出可读结构 | print_r($arr); |\n' +
            '| printf | 格式化输出 | printf("%d", 42); |\n\n' +
            '## 示例演示\n\n' +
            '示例一：echo 与 print 的区别。echo 可逗号分隔输出多个值，print 只能一个。' +
            'echo 没有返回值，print 返回 1（可用于表达式中）。\n\n' +
            '示例二：var_dump 调试。var_dump 显示变量的类型和值，对数组/对象显示完整结构。' +
            '比 echo 更适合调试，能区分 42（整数）和 "42"（字符串）。\n\n' +
            '示例三：字符串拼接。PHP 用点号 . 拼接字符串（不是 +）。' +
            '双引号字符串支持变量插值 $var 和 {$var}，单引号不插值（除 \\\' 和 \\\\）。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 点号拼接：PHP 用 . 而非 + 拼接字符串，+ 是算术运算符。\n' +
            '2. 单双引号差异：双引号插值，单引号不插值。需要插值时必须用双引号。\n' +
            '3. 分号不能省：每条语句必须以分号结尾，漏分号是常见 ParseError。\n' +
            '4. ?> 后的空格：结尾 ?> 后如果有空格或换行，会作为 HTML 输出，影响 header() 调用。纯 PHP 文件省略 ?>。\n' +
            '5. echo 不是函数：echo $a, $b; 合法，但 echo($a, $b); 也可，无需括号。\n\n' +
            '## 真实场景应用\n\n' +
            '在 Web 开发中，echo 用于输出 HTML 片段：echo "<h1>$title</h1>";。' +
            '调试时用 var_dump 或 dd()（Laravel 辅助函数）查看变量结构和类型。' +
            'API 返回 JSON 时用 echo json_encode($data); 配合 header("Content-Type: application/json")。\n\n' +
            '## 小结\n\n' +
            '本节介绍了 PHP 运行环境（安装、php -v、内置服务器）和核心输出方式：' +
            'echo（多值无返回）、print（单值返回 1）、var_dump（调试）、print_r（可读结构）。' +
            '记住"点号拼接"和"单双引号差异"这两个 PHP 核心特征。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习变量与数据类型：$ 变量、整数与浮点、字符串、布尔与 null、数组与类型转换。',
          examples: [
            {
              title: 'Hello World',
              code: `<?php
echo "Hello, World!";
echo "\\n";
echo "你好，PHP";`,
              explanation:
                'echo 输出字符串，\\n 是换行（需双引号才生效）。PHP 源码默认 UTF-8，支持中文。',
            },
            {
              title: 'echo 与 print 对比',
              code: `<?php
echo "第一行", "\\n";
echo "第二行", "\\n";
print "print 输出\\n";
$result = print "print 返回值: ";
echo $result;`,
              explanation:
                'echo 可逗号分隔输出多个值，无返回值。print 只能一个值，返回 1，可用于表达式赋值。',
            },
            {
              title: 'var_dump 调试',
              code: `<?php
var_dump(42);
var_dump("hello");
var_dump(3.14);
var_dump(true);
var_dump([1, 2, 3]);`,
              explanation:
                'var_dump 显示类型和值：int(42)、string(5) "hello"、float(3.14)、bool(true)、array。调试时比 echo 更直观。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 echo 输出 Hello, PHP!。',
              starter_code: `<?php
echo ___;`,
              expected_output: 'Hello, PHP!',
              hints: [
                'echo 后跟字符串',
                '字符串用双引号包裹',
                '答案: "Hello, PHP!"',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 var_dump 输出整数 42 的类型和值。',
              starter_code: `<?php
___(42);`,
              expected_output: 'int(42)',
              hints: [
                '调试输出函数',
                'var_dump 显示类型和值',
                '答案: var_dump',
              ],
            },
            {
              type: 'output-match',
              prompt: '用点号拼接输出 Hello-PHP（用变量 $a 和 $b）。',
              starter_code: `<?php
$a = "Hello";
$b = "PHP";
echo $a . ___ . $b;`,
              expected_output: 'Hello-PHP',
              hints: [
                '点号拼接字符串',
                '中间需要连接一个连字符',
                '答案: "-"',
              ],
            },
          ],
          realWorldScenario:
            'Web 页面用 echo 输出 HTML：echo "<title>$page_title</title>";。' +
            '调试时 var_dump($user) 查看用户数据结构；API 用 echo json_encode($response) 返回 JSON。',
        },
        {
          id: 'php-ch1-l2',
          title: '变量与数据类型',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            'PHP 变量以 $ 开头（如 $name），无需声明类型，赋值时自动确定类型——这是弱类型语言的特征。' +
            '变量名以字母或下划线开头，推荐 snake_case。PHP 8+ 引入了属性类型声明和 union 类型，' +
            '让函数参数和返回值可以有类型约束，但变量本身仍是动态类型。\n\n' +
            'PHP 核心数据类型：int（整数）、float（浮点数）、string（字符串）、bool（布尔）、' +
            'array（数组）、object（对象）、null（空值）、resource（资源）。' +
            'PHP 的数组是"有序映射"，既可做索引数组也可做关联数组——这是 PHP 的独特设计。\n\n' +
            '## 基本语法\n\n' +
            '变量赋值：$name = "PHP"; $count = 42; $pi = 3.14; $flag = true; $nothing = null;。\n\n' +
            '| 函数 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| gettype | 返回类型字符串 | gettype(42) 返回 "integer" |\n' +
            '| is_int/is_string | 类型判断 | is_int(42) 返回 true |\n' +
            '| (int)/(string) | 类型转换 | (int)"42" 得 42 |\n' +
            '| isset | 变量是否设置且非 null | isset($x) |\n' +
            '| empty | 是否为空（0/""/null/[]） | empty($x) |\n\n' +
            '类型转换（juggling）：PHP 在运算时自动转换类型。"10" + 5 得 15（字符串转整数）。' +
            '显式转换用 (int)(float)(string)(bool) 等。注意 "abc" 转 int 得 0，"10abc" 转 int 得 10。\n\n' +
            '布尔判断：以下值被视为 false——false、0、0.0、""、"0"、[]、null。其余为 true。' +
            '这与许多语言不同（如 JS 中 "0" 为 true），需特别留意。\n\n' +
            '## 示例演示\n\n' +
            '示例一：基本数据类型与 gettype。每个值都有类型，gettype 返回类型字符串。' +
            'PHP 弱类型意味着变量可随时改变类型：$x = 1; $x = "a"; 合法。\n\n' +
            '示例二：类型转换与弱类型。字符串数字参与算术时自动转数字。"10" + 20 得 30。' +
            '显式转换 (int)"42.9" 得 42（截断小数）。\n\n' +
            '示例三：isset 与 empty。isset 判断变量是否存在且非 null；' +
            'empty 对 0、""、null、[] 都返回 true——常用于表单验证。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 弱类型陷阱："10abc" + 5 得 15（PHP 8+ 抛 TypeError），依赖隐式转换易出 bug。\n' +
            '2. 0 为 false：if (0) 不执行，if ("0") 也不执行——与 JS 不同。\n' +
            '3. == 与 ===：== 弱比较（"1" == 1 为 true），=== 严格比较（"1" === 1 为 false）。优先用 ===。\n' +
            '4. 未定义变量：直接用未定义变量会 Notice（PHP 8+ 为 Warning），用 isset 检查。\n' +
            '5. empty 对 0 为 true：if (empty($count)) 当 $count=0 时为 true——表单验证易踩坑，用 isset($count) && $count !== ""。\n\n' +
            '## 真实场景应用\n\n' +
            '表单处理时用 isset($_POST["name"]) 检查字段是否存在；用 empty($email) 判断是否为空。' +
            '数据库查询结果可能是 string，需要 (int)$row["id"] 转换。' +
            '严格比较 === 避免类型混淆 bug：if ($status === "active") 比 == 更安全。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 变量与数据类型：$ 变量、8 种核心类型、弱类型自动转换、isset/empty 判断。' +
            '核心记忆点：用 === 严格比较；0 和 "0" 都为 false；empty 对 0 返回 true。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习运算符与表达式：算术、比较、逻辑运算符，以及 PHP 特有的运算符。',
          examples: [
            {
              title: '基本数据类型',
              code: `<?php
$age = 20;
$price = 9.9;
$name = "PHP";
$flag = true;
$empty = null;
echo gettype($age) . "\\n";
echo gettype($price) . "\\n";
echo gettype($name) . "\\n";
echo gettype($flag) . "\\n";
echo gettype($empty);`,
              explanation:
                'gettype 返回类型字符串：integer、double、string、boolean、NULL。PHP 弱类型，变量可随时改变类型。',
            },
            {
              title: '类型转换',
              code: `<?php
$str = "42";
$num = (int)$str;
echo $num + 8 . "\\n";   // 50
echo (string)$num . "!" . "\\n";  // 42!
echo (int)"10abc" . "\\n";  // 10（PHP 8+ 警告）
echo (float)"3.14" . "\\n";  // 3.14
echo (bool)0 ? "true" : "false";  // false`,
              explanation:
                '显式转换用 (int)(string)(float)(bool)。字符串转数字时解析前导数字部分。0 转 bool 为 false。',
            },
            {
              title: 'isset 与 empty',
              code: `<?php
$name = "Alice";
$age = 0;
$nothing = null;

echo isset($name) ? "name 存在\\n" : "name 不存在\\n";
echo isset($nothing) ? "nothing 存在\\n" : "nothing 不存在\\n";
echo empty($age) ? "age 为空\\n" : "age 非空\\n";
echo empty($name) ? "name 为空\\n" : "name 非空\\n";`,
              explanation:
                'isset 判断变量存在且非 null。empty 对 0、""、null、[]、"0" 都返回 true。$age=0 时 empty 返回 true——表单验证易踩坑。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '声明变量 $lang 赋值为 PHP，用双引号插值输出 语言：PHP。',
              starter_code: `<?php
$lang = "PHP";
echo "语言：$lang";`,
              expected_output: '语言：PHP',
              hints: [
                '双引号字符串自动插值 $var',
                '直接写 "语言：$lang" 即可',
                'echo "语言：$lang";',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 gettype 输出 42 的类型（应为 integer）。',
              starter_code: `<?php
echo ___(42);`,
              expected_output: 'integer',
              hints: [
                '获取类型的函数',
                'gettype 返回类型字符串',
                '答案: gettype',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 (int) 将字符串 "100" 转为整数后加 1 输出 101。',
              starter_code: `<?php
$str = "100";
$num = ___$str;
echo $num + 1;`,
              expected_output: '101',
              hints: [
                '类型转换用括号包裹类型名',
                '(int) 强制转整数',
                '答案: (int)',
              ],
            },
          ],
          realWorldScenario:
            '表单验证：if (isset($_POST["email"]) && !empty($_POST["email"])) { ... }。' +
            '数据库结果转类型：$id = (int)$row["id"]; 严格比较避免 bug：if ($status === "active")。',
        },
        {
          id: 'php-ch1-l3',
          title: '运算符与表达式',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            'PHP 运算符与多数语言类似但有其独特之处。算术运算符：+ - * / % **（幂）。' +
            '字符串拼接用 . 而非 +——这是 PHP 与多数语言的最大差异之一。' +
            '比较运算符：== 弱比较、=== 严格比较、!= !==、< > <= >=、<=> 飞船运算符（PHP 7+）。' +
            'PHP 还有独特的运算符：??（null 合并）、?:（三元）、``（shell 执行，不推荐）。\n\n' +
            '## 基本语法\n\n' +
            '算术：$a + $b、$a % $b（取余）、$a ** $b（幂）。字符串拼接：$a . $b。' +
            '赋值增强：$a .= $b（拼接后赋值）、$a += $b。\n\n' +
            '| 运算符 | 说明 | 示例 |\n' +
            '|--------|------|------|\n' +
            '| . | 字符串拼接 | "a" . "b" 得 "ab" |\n' +
            '| === | 严格相等 | 1 === "1" 为 false |\n' +
            '| <=> | 飞船运算符 | 1 <=> 2 得 -1 |\n' +
            '| ?? | null 合并 | $a ?? $b |\n' +
            '| ?: | 三元 | $a ?: $b |\n' +
            '| instanceof | 对象类型检查 | $obj instanceof Class |\n\n' +
            'null 合并 ?? 是 PHP 7+ 引入的利器：$name = $input ?? "default"; ' +
            '当 $input 为 null 或未定义时用 "default"。??= 是 PHP 7.4+ 的赋值版本：$a ??= $b。\n\n' +
            '飞船运算符 <=> 返回 -1/0/1，用于 usort 自定义排序。' +
            '三元运算符 ?: 是 if-else 简写：$result = $score >= 60 ? "及格" : "不及格";。' +
            'PHP 8+ 引入了更简洁的语法：只要变量非空就用自身，否则用默认值。\n\n' +
            '## 示例演示\n\n' +
            '示例一：字符串拼接与算术。点号 . 拼接字符串，+ 只做算术。' +
            '"10" + 20 得 30（弱类型转换），"10" . 20 得 "1020"（拼接）。\n\n' +
            '示例二：== 与 === 对比。== 会类型转换后比较，=== 严格比较类型和值。' +
            '0 == "a" 在 PHP 8 前为 true（"a" 转 int 得 0），PHP 8+ 为 false。\n\n' +
            '示例三：?? null 合并。处理可能不存在的表单输入：$name = $_GET["name"] ?? "匿名";。' +
            '避免 isset 三元的长写法。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. . 与 + 混淆：拼接用 .，算术用 +。"10" + 20 是 30 而非 "1020"。\n' +
            '2. == 弱比较 bug：0 == "a" 旧版为 true，建议一律用 ===。\n' +
            '3. ?? 与 ?: 区别：?? 只判断 null，?: 判断所有 falsy 值（含 0、""）。\n' +
            '4. % 取余符号：结果与被除数同号（-7 % 3 得 -1），与 Ruby 不同。\n' +
            '5. 整数除法：10 / 3 得 3.333（不截断），需 intdiv(10, 3) 得 3。\n\n' +
            '## 真实场景应用\n\n' +
            '表单默认值：$page = $_GET["page"] ?? 1; 比 isset 简洁。' +
            'API 响应拼接：$msg = "Hello, " . $name . "!";。' +
            '排序回调用 <=>：usort($items, fn($a, $b) => $a["score"] <=> $b["score"]);。' +
            '严格比较 === 避免类型混淆：if ($status === "active") 而非 ==。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 运算符：. 拼接、=== 严格比较、<=> 飞船、?? null 合并。' +
            '核心记忆点：拼接用 . 不用 +；优先 === 而非 ==；?? 处理 null 默认值。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习控制流：if/elseif/else 条件、switch/match、while/for 循环、foreach 遍历。',
          examples: [
            {
              title: '拼接与算术',
              code: `<?php
$a = "10";
$b = 20;
echo $a + $b . "\\n";   // 30 算术
echo $a . $b . "\\n";   // 1020 拼接
echo $a . " + " . $b . " = " . ($a + $b) . "\\n";
echo 10 % 3 . "\\n";    // 1 取余
echo 2 ** 10;           // 1024 幂`,
              explanation:
                '+ 是算术（弱类型转换），. 是拼接。"10" + 20 得 30，"10" . 20 得 "1020"。% 取余，** 幂。',
            },
            {
              title: '== 与 ===',
              code: `<?php
var_dump(1 == "1");      // true 弱比较
var_dump(1 === "1");     // false 严格比较
var_dump(0 == false);    // true
var_dump(0 === false);   // false
var_dump(null == "");    // true
var_dump(null === "");   // false`,
              explanation:
                '== 会类型转换后比较，1 == "1" 为 true。=== 严格比较类型和值，1 === "1" 为 false。生产代码优先用 ===。',
            },
            {
              title: 'null 合并与飞船',
              code: `<?php
$name = null;
$default = $name ?? "匿名";
echo $default . "\\n";   // 匿名

$age = 0;
echo ($age ?? 18) . "\\n";  // 0（?? 只判 null）

$a = 5;
$b = 10;
echo ($a <=> $b) . "\\n";  // -1
echo ($b <=> $a) . "\\n";  // 1
echo ($a <=> $a);           // 0`,
              explanation:
                '?? 只在 null 时用默认值，0 不触发。飞船 <=> 返回 -1/0/1，是 usort 排序的核心。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用点号拼接 $a 和 $b 输出 HelloPHP（$a="Hello", $b="PHP"）。',
              starter_code: `<?php
$a = "Hello";
$b = "PHP";
echo $a ___ $b;`,
              expected_output: 'HelloPHP',
              hints: [
                'PHP 用点号拼接字符串',
                '答案: .',
                'echo $a . $b;',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 ?? 在 $name 为 null 时输出 默认名。',
              starter_code: `<?php
$name = null;
echo $name ___ "默认名";`,
              expected_output: '默认名',
              hints: [
                'null 合并运算符',
                '?? 当左侧为 null 时取右侧',
                '答案: ??',
              ],
            },
            {
              type: 'output-match',
              prompt: '用飞船运算符比较 1 和 2，输出 -1。',
              starter_code: `<?php
echo 1 ___ 2;`,
              expected_output: '-1',
              hints: [
                '飞船运算符',
                '<=> 返回 -1/0/1',
                '答案: <=>',
              ],
            },
          ],
          realWorldScenario:
            '表单默认值：$page = $_GET["page"] ?? 1; 比 isset 简洁。' +
            '排序回调：usort($items, fn($a, $b) => $a["score"] <=> $b["score"]);。' +
            '严格比较避免 bug：if ($status === "active")。',
        },
      ],
    },
    // ================================================================
    // 第 2 章：控制流
    // ================================================================
    {
      id: 'php-ch2',
      title: '控制流',
      order: 1,
      lessons: [
        {
          id: 'php-ch2-l1',
          title: '条件语句',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            '条件语句让程序根据不同情况执行不同代码。PHP 提供 if/elseif/else、switch/case、' +
            '以及 PHP 8+ 引入的 match 表达式。match 是更严格、更简洁的替代方案——' +
            '它使用 === 严格比较、返回值而非执行语句、且必须穷尽所有情况或提供 default。\n\n' +
            'PHP 的 elseif 是一个关键字（中间无空格），而 else if 是两条语句。' +
            '两者行为类似但 elseif 更推荐。条件判断遵循 PHP 的布尔规则：0、""、null、[]、"0" 为 false。\n\n' +
            '## 基本语法\n\n' +
            'if 结构：if ($score >= 90) { echo "A"; } elseif ($score >= 60) { echo "B"; } else { echo "C"; }。' +
            'switch 结构：switch ($day) { case "Mon": ...; break; default: ...; }。\n\n' +
            '| 语法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| if/elseif/else | 条件分支 | if ($x > 0) { } |\n' +
            '| switch/case | 多分支 | switch ($x) { case 1: } |\n' +
            '| match | 严格匹配表达式（PHP 8+） | $r = match($x) { 1 => "a" } |\n' +
            '| ?: | 三元运算符 | $x = $a ?: $b |\n' +
            '| ?? | null 合并 | $x = $a ?? $b |\n\n' +
            'switch 用 == 弱比较（PHP 8+ 改为 === 部分情况），易出 bug；match 用 === 严格比较更安全。' +
            'switch 每个 case 必须用 break 跳出，否则会"穿透"到下一个 case（有时是有意的，但通常是 bug）。\n\n' +
            'match 表达式特点：返回值而非执行语句、用 === 比较、无匹配会抛 UnhandledMatchError、' +
            '多值用逗号分隔：match($x) { 1, 2 => "low", 3, 4 => "high" }。\n\n' +
            '## 示例演示\n\n' +
            '示例一：if/elseif/else 成绩分级。根据分数段返回等级，elseif 连续判断。' +
            '注意 elseif 一个词，中间无空格。\n\n' +
            '示例二：switch 分支选择。根据星期几输出不同内容。每个 case 必须 break，' +
            '否则会穿透执行后续 case 代码。\n\n' +
            '示例三：match 表达式（PHP 8+）。match 返回值而非执行语句，用 === 严格比较，' +
            '多值合并、default 必填。比 switch 更安全简洁。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. switch 穿透：忘 break 会执行后续 case，通常是 bug。需穿透时加注释说明。\n' +
            '2. switch 弱比较：switch(0) { case "a": } 旧版会匹配（0 == "a" 旧版 true），PHP 8+ 改进。\n' +
            '3. elseif 一个词：else if（带空格）在类方法内行为不同，统一用 elseif。\n' +
            '4. match 无匹配抛错：必须提供 default，否则 UnhandledMatchError。\n' +
            '5. = 与 == 混淆：if ($a = 1) 是赋值（恒为 true），应写 if ($a == 1)。\n\n' +
            '## 真实场景应用\n\n' +
            '路由分发用 match：$handler = match($method) { "GET" => $listAction, "POST" => $createAction };。' +
            '权限判断用 if/elseif：if ($user->role === "admin") { ... } elseif ($user->role === "editor") { ... }。' +
            '状态码映射用 match 比 switch 更简洁。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 条件语句：if/elseif/else 经典分支、switch/case 多分支（注意 break）、' +
            'match 表达式（PHP 8+，严格比较、返回值）。优先用 match 替代 switch。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习循环：while、do-while、for 循环，掌握重复执行代码的能力。',
          examples: [
            {
              title: 'if/elseif/else',
              code: `<?php
$score = 75;

if ($score >= 90) {
    echo "优秀";
} elseif ($score >= 60) {
    echo "及格";
} else {
    echo "不及格";
}`,
              explanation:
                'if/elseif/else 连续判断，elseif 是一个词。条件从上到下依次判断，匹配一个后跳过其余分支。',
            },
            {
              title: 'switch 分支',
              code: `<?php
$day = "Mon";

switch ($day) {
    case "Mon":
        echo "星期一\\n";
        break;
    case "Tue":
        echo "星期二\\n";
        break;
    case "Wed":
    case "Thu":
        echo "周中\\n";
        break;
    default:
        echo "其他\\n";
}`,
              explanation:
                'switch 用 case 匹配，每个 case 末尾 break 跳出。Wed 和 Thu 共享代码（故意穿透）。default 处理未匹配情况。',
            },
            {
              title: 'match 表达式',
              code: `<?php
$code = 404;

$message = match($code) {
    200 => "OK",
    301, 302 => "重定向",
    404 => "未找到",
    500 => "服务器错误",
    default => "未知状态",
};

echo $message;`,
              explanation:
                'match 用 === 严格比较，返回值而非执行语句。301, 302 合并多值。default 处理未匹配。比 switch 更安全简洁。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: 'if 判断 $n > 0 输出 正数。',
              starter_code: `<?php
$n = 5;
if ($n ___ 0) {
    echo "正数";
}`,
              expected_output: '正数',
              hints: [
                '大于用 >',
                'if ($n > 0)',
                '答案: >',
              ],
            },
            {
              type: 'output-match',
              prompt: 'switch 匹配 case 2 输出 二（需加 break）。',
              starter_code: `<?php
$n = 2;
switch ($n) {
    case 1:
        echo "一";
        break;
    case 2:
        echo "二";
        ___;
    default:
        echo "其他";
}`,
              expected_output: '二',
              hints: [
                'case 末尾用 break 跳出',
                '答案: break',
                '不加 break 会穿透到 default',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 match 表达式让 1 返回 low。',
              starter_code: `<?php
$n = 1;
$result = match($n) {
    1 => "low",
    2 => "high",
    default => "unknown",
};
echo $result;`,
              expected_output: 'low',
              hints: [
                'match 用 => 返回值',
                '已提供完整代码',
                '1 匹配第一个分支返回 low',
              ],
            },
          ],
          realWorldScenario:
            'HTTP 状态码映射：$msg = match($code) { 200 => "OK", 404 => "Not Found", default => "Error" };。' +
            '权限分级用 if/elseif 链判断用户角色。',
        },
        {
          id: 'php-ch2-l2',
          title: '循环',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            '循环让代码重复执行。PHP 提供 while、do-while、for 三种基本循环。' +
            'while 先判断后执行（可能一次都不执行）；do-while 先执行后判断（至少执行一次）；' +
            'for 适合已知次数的循环。循环内可用 break 跳出、continue 跳过本轮。\n\n' +
            'PHP 循环与 C/Java 类似，但需要注意弱类型的隐式转换：while ("0") 不执行（"0" 为 false）。' +
            'for 循环的三个表达式（初始化; 条件; 更新）都可选，for(;;) 是死循环。\n\n' +
            '## 基本语法\n\n' +
            'while：while ($i < 10) { echo $i; $i++; }。' +
            'do-while：do { ... } while ($i < 10);。' +
            'for：for ($i = 0; $i < 10; $i++) { echo $i; }。\n\n' +
            '| 语法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| while | 先判断后执行 | while ($i < 10) { } |\n' +
            '| do-while | 先执行后判断 | do { } while (cond); |\n' +
            '| for | 已知次数 | for ($i = 0; $i < 10; $i++) { } |\n' +
            '| break | 跳出循环 | break; 或 break 2; |\n' +
            '| continue | 跳过本轮 | continue; |\n\n' +
            'break 和 continue 可带数字参数表示跳出/跳过几层循环：break 2 跳出两层。' +
            '在嵌套循环中很有用，但过度使用降低可读性。\n\n' +
            '## 示例演示\n\n' +
            '示例一：while 累加。从 1 加到 100，用 while 循环更新 $sum 和 $i。' +
            '注意更新条件避免死循环。\n\n' +
            '示例二：for 打印九九乘法表。双层 for 循环，外层控制行、内层控制列。' +
            'echo 输出每项，用 \\n 或 <br> 换行。\n\n' +
            '示例三：break 与 continue。遍历数字，遇到 5 跳过（continue），遇到 8 停止（break）。' +
            '演示循环控制流。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 死循环：while ($i < 10) 忘记 $i++ 会无限循环，浏览器超时。\n' +
            '2. off-by-one：for ($i = 0; $i <= 10; $i++) 是 11 次，$i < 10 是 10 次。\n' +
            '3. do-while 至少一次：即使条件为 false 也会执行一次，适合"先做再判断"场景。\n' +
            '4. break 层数：break 不带数字只跳一层，嵌套循环需 break 2。\n' +
            '5. 弱类型循环：while ("0") 不执行，while ("a") 执行（"a" 为 true）。\n\n' +
            '## 真实场景应用\n\n' +
            '分页查询用 for 遍历页码：for ($i = 1; $i <= $totalPages; $i++) { echo page link; }。' +
            '数据处理用 while 读取流：while ($line = fgets($file)) { ... }。' +
            '游戏循环用 do-while：do { $dice = roll(); } while ($dice != 6);。' +
            '搜索算法用 break 提前退出：找到目标后 break 节省时间。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 三种循环：while（先判后执行）、do-while（先执行后判）、for（已知次数）。' +
            'break 跳出、continue 跳过。注意避免死循环和 off-by-one。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习 foreach 与跳转：foreach 遍历数组、break/continue 控制、list 解构。',
          examples: [
            {
              title: 'while 累加',
              code: `<?php
$sum = 0;
$i = 1;
while ($i <= 100) {
    $sum += $i;
    $i++;
}
echo "1到100的和: " . $sum;`,
              explanation:
                'while 先判断 $i <= 100 后执行循环体，$i++ 更新计数器。1+2+...+100 = 5050。忘 $i++ 会死循环。',
            },
            {
              title: 'for 乘法表',
              code: `<?php
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo $j . "x" . $i . "=" . ($i * $j) . " ";
    }
    echo "\\n";
}`,
              explanation:
                '双层 for 嵌套：外层 $i 控制行，内层 $j 控制列。$j <= $i 使每行只打印到对角线。\\n 换行。',
            },
            {
              title: 'break 与 continue',
              code: `<?php
for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        continue;  // 跳过 5
    }
    if ($i == 8) {
        break;     // 遇到 8 停止
    }
    echo $i . " ";
}`,
              explanation:
                'continue 跳过本轮循环（5 不输出），break 跳出整个循环（8 及之后不执行）。输出 1 2 3 4 6 7。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 for 循环输出 0 到 4（用空格分隔）。',
              starter_code: `<?php
for ($i = 0; $i ___ 5; $i++) {
    echo $i . " ";
}`,
              expected_output: '0 1 2 3 4 ',
              hints: [
                '小于用 <',
                'for ($i = 0; $i < 5; $i++)',
                '答案: <',
              ],
            },
            {
              type: 'output-match',
              prompt: 'while 循环中 $i 等于 3 时用 continue 跳过，输出 1 2 4 5。',
              starter_code: `<?php
$i = 0;
while ($i < 5) {
    $i++;
    if ($i == 3) {
        ___
    }
    echo $i . " ";
}`,
              expected_output: '1 2 4 5 ',
              hints: [
                'continue 跳过本轮',
                '答案: continue;',
                '注意 continue 后要有分号',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 while 循环计算 1 到 10 的和（应为 55）。',
              starter_code: `<?php
$sum = 0;
$i = 1;
while ($i <= 10) {
    $sum ___ $i;
    $i++;
}
echo $sum;`,
              expected_output: '55',
              hints: [
                '累加用 +=',
                '$sum += $i',
                '答案: +=',
              ],
            },
          ],
          realWorldScenario:
            '分页遍历：for ($page = 1; $page <= $totalPages; $page++) { fetchPage($page); }。' +
            '读取文件行：while ($line = fgets($handle)) { processLine($line); }。',
        },
        {
          id: 'php-ch2-l3',
          title: 'foreach 与跳转',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            'foreach 是 PHP 遍历数组最常用、最优雅的循环结构。PHP 数组是有序映射，' +
            'foreach 能同时获取键和值，无需手动管理索引。相比 for 循环，foreach 更安全（无越界风险）、' +
            '更简洁（无需 count 和索引）。PHP 7+ 引入了 list 解构，让 foreach 更强大。\n\n' +
            'foreach 有两种语法：foreach ($arr as $value) 只取值；foreach ($arr as $key => $value) 取键和值。' +
            '引用遍历 foreach ($arr as &$value) 可修改原数组（注意遍历后 unset 引用）。\n\n' +
            '## 基本语法\n\n' +
            '基本遍历：foreach ($arr as $v) { echo $v; }。' +
            '键值遍历：foreach ($arr as $k => $v) { echo "$k: $v"; }。' +
            '引用遍历：foreach ($arr as &$v) { $v *= 2; } unset($v);。\n\n' +
            '| 语法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| foreach as $v | 只取值 | foreach ($arr as $v) {} |\n' +
            '| foreach as $k => $v | 键值 | foreach ($arr as $k => $v) {} |\n' +
            '| foreach as &$v | 引用修改 | foreach ($arr as &$v) {} |\n' +
            '| break n | 跳出 n 层 | break 2; |\n' +
            '| continue n | 跳过 n 层 | continue 2; |\n\n' +
            '引用遍历后 $v 仍指向数组最后一个元素的引用，后续对 $v 的操作会修改数组——' +
            '必须用 unset($v) 解除引用。这是 PHP 常见陷阱。\n\n' +
            '## 示例演示\n\n' +
            '示例一：遍历索引数组。foreach 自动遍历所有元素，无需 count 和索引。' +
            '比 for ($i = 0; $i < count($arr); $i++) 更简洁安全。\n\n' +
            '示例二：遍历关联数组。foreach ($arr as $key => $value) 同时获取键和值，' +
            '这是处理配置、字典数据的标配。\n\n' +
            '示例三：引用修改原数组。foreach ($arr as &$v) 让 $v 成为引用，修改 $v 直接影响原数组。' +
            '遍历后必须 unset($v) 解除引用。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 引用未 unset：foreach ($arr as &$v) 后 $v 仍指向最后元素，后续误操作会改数组。\n' +
            '2. 遍历时修改数组：foreach 中 add/remove 元素行为未定义，应遍历副本或收集后修改。\n' +
            '3. foreach 不重置指针：foreach 内部会重置，但用 each() 等需手动 reset。\n' +
            '4. 嵌套 break：break 只跳一层，嵌套循环用 break 2 跳两层。\n' +
            '5. 空数组安全：foreach 对空数组不执行，无需 count 检查。\n\n' +
            '## 真实场景应用\n\n' +
            '遍历数据库结果集：foreach ($users as $user) { echo $user["name"]; }。' +
            '处理配置映射：foreach ($config as $key => $value) { ... }。' +
            '批量修改数据：foreach ($items as &$item) { $item["price"] *= 1.1; } unset($item);。' +
            '嵌套循环搜索：foreach ($matrix as $row) { foreach ($row as $cell) { if (...) break 2; } }。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP foreach：遍历数组最优雅的方式，支持键值对和引用修改。' +
            '注意引用遍历后 unset、遍历时不要修改数组结构、嵌套 break 用数字参数。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习函数：函数定义、参数与默认值、匿名函数与箭头函数、作用域与内置函数。',
          examples: [
            {
              title: '遍历索引数组',
              code: `<?php
$fruits = ["苹果", "香蕉", "橘子"];

foreach ($fruits as $fruit) {
    echo $fruit . "\\n";
}`,
              explanation:
                'foreach 自动遍历数组所有元素，无需 count 和索引。比 for 循环更简洁、更安全（无越界风险）。',
            },
            {
              title: '遍历关联数组',
              code: `<?php
$user = [
    "name" => "Alice",
    "age" => 30,
    "city" => "北京"
];

foreach ($user as $key => $value) {
    echo $key . ": " . $value . "\\n";
}`,
              explanation:
                'foreach ($arr as $key => $value) 同时获取键和值。关联数组（字符串键）是 PHP 数组的核心用法，类似字典/Map。',
            },
            {
              title: '引用修改原数组',
              code: `<?php
$nums = [1, 2, 3, 4, 5];

foreach ($nums as &$n) {
    $n *= 2;
}
unset($n);  // 解除引用

foreach ($nums as $n) {
    echo $n . " ";
}`,
              explanation:
                '&$n 是引用，修改 $n 直接影响原数组。遍历后必须 unset($n) 解除引用，否则后续误操作会改数组最后元素。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 foreach 遍历数组输出每个水果（每行一个）。',
              starter_code: `<?php
$fruits = ["苹果", "香蕉"];
___ ($fruits as $fruit) {
    echo $fruit . "\\n";
}`,
              expected_output: '苹果\n香蕉',
              hints: [
                '遍历数组用 foreach',
                'foreach ($arr as $v)',
                '答案: foreach',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 foreach 键值对遍历输出 name: Alice。',
              starter_code: `<?php
$data = ["name" => "Alice"];
foreach ($data as $key => ___) {
    echo $key . ": " . $value;
}`,
              expected_output: 'name: Alice',
              hints: [
                '值变量名是 $value',
                'foreach ($arr as $key => $value)',
                '答案: $value',
              ],
            },
            {
              type: 'output-match',
              prompt: '用引用遍历将数组 [1,2,3] 每个元素乘以 2，输出 2 4 6。',
              starter_code: `<?php
$nums = [1, 2, 3];
foreach ($nums as &___) {
    $n *= 2;
}
unset($n);

echo implode(" ", $nums);`,
              expected_output: '2 4 6',
              hints: [
                '引用变量用 $n',
                'foreach ($arr as &$n)',
                '答案: $n',
              ],
            },
          ],
          realWorldScenario:
            '遍历数据库结果：foreach ($users as $user) { echo $user["name"]; }。' +
            '批量加价：foreach ($products as &$p) { $p["price"] *= 1.1; } unset($p);。',
        },
      ],
    },
    // ================================================================
    // 第 3 章：函数
    // ================================================================
    {
      id: 'php-ch3',
      title: '函数',
      order: 2,
      lessons: [
        {
          id: 'php-ch3-l1',
          title: '函数定义',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            '函数是可复用的代码块，接收输入（参数）、执行逻辑、返回结果。' +
            'PHP 用 function 关键字定义函数，函数名不区分大小写（但约定全小写）。' +
            '函数无需提前声明（PHP 会先解析整个文件再执行），但条件定义的函数需在调用前定义。' +
            'PHP 8+ 引入了命名参数、union 类型、属性类型声明等现代特性。\n\n' +
            '参数默认值：function greet($name = "World")。可变参数：function sum(...$nums)。' +
            '引用参数：function addOne(&$n) 修改原变量。返回值用 return，无 return 返回 null。\n\n' +
            '## 基本语法\n\n' +
            '定义：function add($a, $b) { return $a + $b; }。调用：echo add(1, 2);。\n' +
            'PHP 8+ 命名参数：echo add(a: 1, b: 2); 或 str_contains(haystack: "abc", needle: "b");。\n\n' +
            '| 特性 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| 默认参数 | 参数有默认值 | function f($x = 10) {} |\n' +
            '| 可变参数 | 任意数量参数 | function f(...$nums) {} |\n' +
            '| 引用参数 | 修改原变量 | function f(&$x) {} |\n' +
            '| 类型声明 | 参数类型约束 | function f(int $x): int {} |\n' +
            '| 命名参数 | 按名传参（PHP 8+） | f(name: "Alice") |\n\n' +
            '类型声明：function add(int $a, int $b): int { return $a + $b; }。' +
            'PHP 7+ 严格模式（declare(strict_types=1);）让类型检查更严格。' +
            '可空类型 ?int、union 类型 int|float、mixed 类型等增强表达力。\n\n' +
            '## 示例演示\n\n' +
            '示例一：基础函数与返回值。定义 add 函数，return 返回结果。' +
            '无 return 的函数返回 null。\n\n' +
            '示例二：默认参数与可变参数。默认参数让调用更灵活；...' +
            '可变参数收集为数组，func_get_args() 获取所有参数。\n\n' +
            '示例三：类型声明（PHP 7+）。参数和返回值都可声明类型，' +
            '类型不匹配抛 TypeError。strict_types=1 让类型检查更严格。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 默认参数顺序：默认参数必须在必填参数之后，function f($a, $b = 1) 合法，function f($a = 1, $b) 错误。\n' +
            '2. 引用参数需 &：function f(&$x) 修改原变量，但调用时不能传字面量 f(5)（不能取引用）。\n' +
            '3. 类型声明弱模式：默认会自动转换（int 5.0 通过），strict_types=1 才严格。\n' +
            '4. 函数名不区分大小写：Add() 和 add() 是同一函数，但约定全小写。\n' +
            '5. 可变参数 ...$nums：$nums 是数组，不是单个值。\n\n' +
            '## 真实场景应用\n\n' +
            '工具函数：function formatPrice(float $price): string { return "¥" . number_format($price, 2); }。' +
            'API 处理：function respond(array $data, int $code = 200): void { http_response_code($code); echo json_encode($data); }。' +
            '可变参数求和：function sum(...$nums) { return array_sum($nums); }。' +
            '类型声明让函数契约清晰，IDE 自动补全更准。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 函数定义：function 关键字、参数（默认/可变/引用/类型）、返回值、命名参数。' +
            '类型声明是 PHP 现代化的标志，让代码更健壮。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习匿名函数与箭头函数：闭包、use 捕获变量、fn() 箭头函数。',
          examples: [
            {
              title: '基础函数',
              code: `<?php
function add($a, $b) {
    return $a + $b;
}

function greet($name) {
    echo "Hello, " . $name . "!\\n";
}

echo add(3, 5) . "\\n";
greet("Alice");`,
              explanation:
                'function 定义函数，return 返回值。greet 无 return 故返回 null（但 echo 已输出）。函数可先调用后定义（PHP 全局解析）。',
            },
            {
              title: '默认与可变参数',
              code: `<?php
function greet($name = "World") {
    return "Hello, " . $name;
}

function sum(...$nums) {
    return array_sum($nums);
}

echo greet() . "\\n";
echo greet("Alice") . "\\n";
echo sum(1, 2, 3, 4, 5);`,
              explanation:
                '默认参数让调用时可省略，$name = "World"。...$nums 收集所有参数为数组，array_sum 求和。可变参数让函数更灵活。',
            },
            {
              title: '类型声明',
              code: `<?php
function add(int $a, int $b): int {
    return $a + $b;
}

function formatPrice(float $price): string {
    return "¥" . number_format($price, 2);
}

echo add(3, 5) . "\\n";
echo formatPrice(99.5);`,
              explanation:
                '参数类型 int/float 和返回类型 :int/:string 声明契约。类型不匹配抛 TypeError。number_format 格式化数字为字符串。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义函数 square($n) 返回 $n 的平方，调用 square(5) 输出 25。',
              starter_code: `<?php
function square($n) {
    return $n ___ $n;
}
echo square(5);`,
              expected_output: '25',
              hints: [
                '平方是 $n * $n',
                '乘法运算符 *',
                '答案: *',
              ],
            },
            {
              type: 'output-match',
              prompt: '用默认参数让 greet("Hi", "Bob") 输出 Hi, Bob!，greet("Hi") 输出 Hi, World!。',
              starter_code: `<?php
function greet($greeting, $name = ___) {
    echo $greeting . ", " . $name . "!";
}
greet("Hi", "Bob");
echo "\\n";
greet("Hi");`,
              expected_output: 'Hi, Bob!\nHi, World!',
              hints: [
                '默认值是 World',
                '答案: "World"',
                '默认参数让调用时可省略',
              ],
            },
            {
              type: 'output-match',
              prompt: '用可变参数 ...$nums 求和，sum(1,2,3) 输出 6。',
              starter_code: `<?php
function sum(...$nums) {
    return array_sum($nums);
}
echo sum(1, 2, ___);`,
              expected_output: '6',
              hints: [
                '第三个参数是 3',
                'sum(1, 2, 3)',
                '答案: 3',
              ],
            },
          ],
          realWorldScenario:
            '工具函数：function formatDate(string $date): string { return date("Y-m-d", strtotime($date)); }。' +
            'API 响应：function json(array $data, int $code = 200): void { ... }。',
        },
        {
          id: 'php-ch3-l2',
          title: '匿名函数与箭头函数',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            '匿名函数（闭包）是没有名字的函数，可赋值给变量、作为参数传递。' +
            'PHP 闭包用 function() { } 语法定义，自动捕获外部变量需用 use 关键字。' +
            'PHP 7.4+ 引入了箭头函数 fn() => expr，更简洁且自动捕获外部变量（无需 use）——' +
            '适合简单的单表达式回调。\n\n' +
            '闭包是函数式编程的基础：array_map、array_filter、usort 等都接收闭包回调。' +
            'PHP 闭包是 Closure 类的实例，可绑定到对象（bindTo）改变 $this 上下文。\n\n' +
            '## 基本语法\n\n' +
            '匿名函数：$fn = function($x) { return $x * 2; };，调用 $fn(5)。' +
            '捕获变量：$factor = 10; $fn = function($x) use ($factor) { return $x * $factor; };。' +
            '箭头函数：$fn = fn($x) => $x * 2;，自动捕获 $factor。\n\n' +
            '| 语法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| function() {} | 匿名函数 | $f = function($x) { return $x; }; |\n' +
            '| use ($var) | 捕获外部变量 | function() use ($y) {} |\n' +
            '| fn() => | 箭头函数（PHP 7.4+） | $f = fn($x) => $x * 2; |\n' +
            '| Closure | 闭包类 | $f instanceof Closure |\n\n' +
            'use 捕获是值拷贝（非引用），需修改原变量用 use (&$var)。' +
            '箭头函数自动按值捕获外部变量（无需 use），但只能是单表达式。' +
            '多行逻辑仍需用传统匿名函数。\n\n' +
            '## 示例演示\n\n' +
            '示例一：匿名函数与 use 捕获。闭包用 use ($var) 显式捕获外部变量。' +
            '对比箭头函数的自动捕获——更简洁但只能单表达式。\n\n' +
            '示例二：箭头函数（PHP 7.4+）。fn($x) => $x * 2 自动捕获外部变量，' +
            '适合 array_map/array_filter 的简短回调。\n\n' +
            '示例三：闭包作为回调。array_map、usort 等接收闭包，' +
            '让函数式数据处理成为可能。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. use 值拷贝：use ($var) 捕获的是值快照，外部修改不影响闭包内。需实时用 use (&$var)。\n' +
            '2. 箭头函数单表达式：fn() => 只能一个表达式，多行用传统匿名函数。\n' +
            '3. 箭头函数自动捕获：无需 use，按值捕获所有用到的外部变量。\n' +
            '4. 闭包结尾分号：$f = function() {}; 赋值语句末尾需分号，容易漏。\n' +
            '5. $this 在闭包：PHP 7+ 闭包内自动绑定 $this（在类方法中）。\n\n' +
            '## 真实场景应用\n\n' +
            '数组处理：$doubled = array_map(fn($x) => $x * 2, $nums);。' +
            '过滤：$active = array_filter($users, fn($u) => $u["active"]);。' +
            '排序：usort($items, fn($a, $b) => $a["score"] <=> $b["score"]);。' +
            '事件回调：$emitter->on("click", function($event) use ($logger) { $logger->log("clicked"); });。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 匿名函数与箭头函数：闭包用 use 捕获变量、箭头函数 fn() 自动捕获更简洁。' +
            '闭包是函数式回调和事件处理的基础。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习作用域与内置函数：全局/局部作用域、global/static、常用字符串数组函数。',
          examples: [
            {
              title: '匿名函数与 use',
              code: `<?php
$factor = 10;

$multiply = function($x) use ($factor) {
    return $x * $factor;
};

echo $multiply(5) . "\\n";

$factor = 20;
echo $multiply(5);`,
              explanation:
                'use ($factor) 按值捕获（快照），所以即使 $factor 改为 20，闭包内仍用 10。需实时值用 use (&$factor)。',
            },
            {
              title: '箭头函数',
              code: `<?php
$factor = 10;

$multiply = fn($x) => $x * $factor;

echo $multiply(5) . "\\n";

$nums = [1, 2, 3, 4, 5];
$doubled = array_map(fn($n) => $n * 2, $nums);
echo implode(",", $doubled);`,
              explanation:
                'fn($x) => $x * $factor 自动捕获 $factor（按值），无需 use。箭头函数适合简短回调，如 array_map 的映射函数。',
            },
            {
              title: '闭包回调',
              code: `<?php
$users = [
    ["name" => "Alice", "age" => 30],
    ["name" => "Bob", "age" => 25],
    ["name" => "Charlie", "age" => 35]
];

// 按年龄排序
usort($users, fn($a, $b) => $a["age"] <=> $b["age"]);

foreach ($users as $u) {
    echo $u["name"] . ":" . $u["age"] . " ";
}`,
              explanation:
                'usort 接收闭包回调，用飞船 <=> 比较年龄。箭头函数让排序回调简洁。结果按年龄升序排列。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用箭头函数让 array_map 将 [1,2,3] 翻倍，输出 2,4,6。',
              starter_code: `<?php
$nums = [1, 2, 3];
$doubled = array_map(fn($n) => $n ___ 2, $nums);
echo implode(",", $doubled);`,
              expected_output: '2,4,6',
              hints: [
                '翻倍用乘法',
                '答案: *',
                'fn($n) => $n * 2',
              ],
            },
            {
              type: 'output-match',
              prompt: '用匿名函数和 use 捕获 $factor，输出 50（5 * 10）。',
              starter_code: `<?php
$factor = 10;
$multiply = function($x) ___ ($factor) {
    return $x * $factor;
};
echo $multiply(5);`,
              expected_output: '50',
              hints: [
                '捕获外部变量用 use',
                '答案: use',
                'use ($factor) 按值捕获',
              ],
            },
            {
              type: 'output-match',
              prompt: '用箭头函数定义 $double 让 double(7) 返回 14。',
              starter_code: `<?php
$double = ___($x) => $x * 2;
echo $double(7);`,
              expected_output: '14',
              hints: [
                '箭头函数用 fn 关键字',
                'fn($x) => $x * 2',
                '答案: fn',
              ],
            },
          ],
          realWorldScenario:
            '数组映射：$names = array_map(fn($u) => $u["name"], $users);。' +
            '过滤活跃用户：$active = array_filter($users, fn($u) => $u["active"]);。',
        },
        {
          id: 'php-ch3-l3',
          title: '作用域与内置函数',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            'PHP 作用域规则比多数语言更严格：函数内部无法直接访问外部变量（需用 global 或 use）。' +
            '这与 JS/Python 不同——PHP 函数有独立的局部作用域。理解作用域是避免 "undefined variable" 错误的关键。' +
            'global 关键字引入全局变量（不推荐）；static 让函数内变量在调用间保持（用于计数器/缓存）。\n\n' +
            'PHP 拥有丰富的内置函数库：字符串（strlen/substr/str_replace）、' +
            '数组（count/sort/array_push/in_array）、数学（abs/round/max/min）、' +
            '日期（date/time/strtotime）等。无需 require 即可使用。\n\n' +
            '## 基本语法\n\n' +
            'global：function f() { global $count; $count++; }。' +
            'static：function counter() { static $n = 0; return ++$n; }。' +
            '超全局变量：$_GET/$_POST/$_SERVER/$_SESSION 等在任何作用域可用。\n\n' +
            '| 关键字 | 说明 | 示例 |\n' +
            '|--------|------|------|\n' +
            '| global | 引入全局变量 | global $x; |\n' +
            '| static | 静态局部变量 | static $n = 0; |\n' +
            '| 超全局 | 全局可用 | $_GET, $_POST, $_SERVER |\n' +
            '| const | 类外常量 | const PI = 3.14; |\n' +
            '| define | 运行时常量 | define("PI", 3.14); |\n\n' +
            '## 示例演示\n\n' +
            '示例一：作用域隔离。函数内无法直接访问 $name，需 global 或参数传递。' +
            '推荐用参数传递（显式依赖）而非 global（隐式依赖）。\n\n' +
            '示例二：static 静态变量。static $n = 0 只初始化一次，' +
 '后续调用保留值——用于计数器、缓存、单例。\n\n' +
            '示例三：常用内置函数。strlen 字符串长度、count 数组长度、' +
            'in_array 检查存在、date 格式化日期、max/min 求极值。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 函数内访问外部变量：PHP 函数内不能直接用外部变量，需 global/参数/use。\n' +
            '2. global 不推荐：让函数依赖全局状态，难测试难维护，优先用参数。\n' +
            '3. static 不是线程安全：多进程/多请求共享会出问题（PHP 每请求独立进程通常无碍）。\n' +
            '4. 超全局自动可用：$_GET/$_POST 无需 global，函数内直接用。\n' +
            '5. define vs const：define 运行时定义（可用变量），const 编译时（类内/顶层）。\n\n' +
            '## 真实场景应用\n\n' +
            '计数器用 static：function getCallCount() { static $n = 0; return ++$n; }。' +
            '日志函数用 global $logger（或更推荐依赖注入）。' +
            '获取当前时间：echo date("Y-m-d H:i:s");。' +
            '验证邮箱：filter_var($email, FILTER_VALIDATE_EMAIL)。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 作用域（函数内独立、global/static）和常用内置函数（字符串/数组/数学/日期）。' +
            '核心记忆：函数内不能直接用外部变量，优先用参数传递。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习字符串与数组：字符串操作、正则表达式、数组函数、排序与遍历。',
          examples: [
            {
              title: '作用域隔离',
              code: `<?php
$name = "Alice";

function greet() {
    // echo $name;  // Notice: Undefined variable
    global $name;
    return "Hi, " . $name;
}

function greetBetter($name) {
    return "Hello, " . $name;
}

echo greet() . "\\n";
echo greetBetter("Bob");`,
              explanation:
                'PHP 函数内不能直接访问外部 $name，需 global 引入或参数传递。推荐参数传递（显式依赖，易测试）。',
            },
            {
              title: 'static 静态变量',
              code: `<?php
function counter() {
    static $n = 0;
    return ++$n;
}

echo counter() . "\\n";
echo counter() . "\\n";
echo counter() . "\\n";`,
              explanation:
                'static $n 只初始化一次，后续调用保留值。常用于计数器、缓存。每次调用 counter() $n 递增。',
            },
            {
              title: '常用内置函数',
              code: `<?php
echo strlen("hello") . "\\n";       // 5
echo count([1, 2, 3]) . "\\n";      // 3
echo in_array(2, [1, 2, 3]) ? "yes" : "no";
echo "\\n";
echo date("Y-m-d") . "\\n";         // 当前日期
echo max(1, 5, 3) . "\\n";          // 5
echo abs(-7);                        // 7`,
              explanation:
                'strlen 字符串长度、count 数组长度、in_array 检查元素是否存在、date 日期格式化、max/min 极值、abs 绝对值。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 static 让计数器每次调用递增，counter() 调用两次输出 2。',
              starter_code: `<?php
function counter() {
    ___ $n = 0;
    return ++$n;
}
counter();
echo counter();`,
              expected_output: '2',
              hints: [
                '静态变量用 static 关键字',
                'static $n = 0; 只初始化一次',
                '答案: static',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 strlen 输出 hello 的长度 5。',
              starter_code: `<?php
echo ___("hello");`,
              expected_output: '5',
              hints: [
                '字符串长度函数',
                'strlen 返回字节数',
                '答案: strlen',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 count 输出数组 [1,2,3] 的长度 3。',
              starter_code: `<?php
echo ___([1, 2, 3]);`,
              expected_output: '3',
              hints: [
                '数组长度函数',
                'count 返回元素个数',
                '答案: count',
              ],
            },
          ],
          realWorldScenario:
            '计数器：static $calls = 0; $calls++;。日期：$now = date("Y-m-d H:i:s");。' +
            '验证：if (in_array($role, ["admin", "editor"])) { ... }。',
        },
      ],
    },
    // ================================================================
    // 第 4 章：字符串与数组
    // ================================================================
    {
      id: 'php-ch4',
      title: '字符串与数组',
      order: 3,
      lessons: [
        {
          id: 'php-ch4-l1',
          title: '字符串操作',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            '字符串是 PHP 最常用的数据类型——Web 开发几乎都是在处理文本。PHP 字符串操作函数极其丰富：' +
            '长度、截取、查找、替换、分割、拼接、大小写转换等。PHP 8+ 新增了 str_contains/str_starts_with/str_ends_with ' +
            '让常见操作更直观。理解字符串函数是 Web 开发的基础。\n\n' +
            'PHP 字符串用单引号或双引号包裹。双引号支持变量插值（$var、{$var}）和转义序列（\\n、\\t）；' +
            '单引号只转义 \\\' 和 \\\\，其余原样输出。Heredoc/Nowdoc 适合多行字符串。\n\n' +
            '## 基本语法\n\n' +
            'strlen 长度、substr 截取、str_replace 替换、strpos 查找位置、' +
            'strtolower/strtoupper 大小写、trim 去空白、explode 分割、implode 拼接。\n\n' +
            '| 函数 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| strlen | 字节长度 | strlen("hi") 得 2 |\n' +
            '| substr | 截取 | substr("hello", 0, 2) 得 "he" |\n' +
            '| str_replace | 替换 | str_replace("a","b","cat") 得 "cbt" |\n' +
            '| strpos | 查找位置 | strpos("hello","l") 得 2 |\n' +
            '| explode | 分割 | explode(",","a,b") 得 ["a","b"] |\n' +
            '| implode | 拼接 | implode(",",["a","b"]) 得 "a,b" |\n' +
            '| str_contains | 包含（PHP 8+） | str_contains("hello","ell") |\n\n' +
            '## 示例演示\n\n' +
            '示例一：截取与查找。substr 用起始位置和长度截取，负数从末尾算。' +
            'strpos 返回首次出现位置（0-based），未找到返回 false。\n\n' +
            '示例二：替换与分割。str_replace 替换所有匹配；explode 按分隔符分割为数组；' +
            'implode 把数组拼成字符串——二者互逆。\n\n' +
            '示例三：大小写与去空白。strtolower/strtoupper 转换大小写；' +
            'trim 去首尾空白（含空格、\\t、\\n），ltrim/rtrim 去左/右。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. strlen 是字节长度：中文字符 UTF-8 占 3 字节，strlen("你好") 得 6。需字符数用 mb_strlen。\n' +
            '2. strpos 返回 0：首位置是 0 不是 1，if (strpos($s, $n)) 当在开头时为 false（0 falsy）。用 === false 判断。\n' +
            '3. substr 中文截断：substr 按字节截，中文可能截断乱码，用 mb_substr。\n' +
            '4. 单双引号差异：echo "$name" 插值，echo \'$name\' 原样输出 $name。\n' +
            '5. explode 空字符串：explode(",", "") 返回 [""]（一个空元素），不是空数组。\n\n' +
            '## 真实场景应用\n\n' +
            '表单清理：$name = trim($_POST["name"]); 去首尾空格。' +
            'CSV 解析：$fields = explode(",", $line);。' +
            '高亮搜索：$highlighted = str_replace($keyword, "<mark>$keyword</mark>", $text);。' +
            '生成 slug：$slug = strtolower(str_replace(" ", "-", $title));。' +
            '验证包含：if (str_contains($email, "@")) { ... }。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 字符串操作：strlen/substr/str_replace/strpos/explode/implode 等核心函数。' +
            '注意中文字节长度用 mb_* 函数、strpos 用 === false 判断未找到。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习数组操作：索引数组、关联数组、添加删除、遍历与排序。',
          examples: [
            {
              title: '截取与查找',
              code: `<?php
$s = "Hello, PHP!";

echo strlen($s) . "\\n";
echo substr($s, 0, 5) . "\\n";
echo substr($s, -4) . "\\n";
echo strpos($s, "PHP") . "\\n";
var_dump(strpos($s, "Java"));`,
              explanation:
                'strlen 字节长度，substr 截取（负数从末尾），strpos 返回位置（0-based）或 false。注意 strpos 用 === false 判断未找到。',
            },
            {
              title: '替换与分割',
              code: `<?php
$text = "Hello World";
echo str_replace("World", "PHP", $text) . "\\n";

$csv = "a,b,c,d";
$arr = explode(",", $csv);
print_r($arr);

$joined = implode("-", $arr);
echo $joined;`,
              explanation:
                'str_replace 替换所有匹配。explode 按分隔符分割为数组，implode 拼接数组为字符串——二者互逆。',
            },
            {
              title: '大小写与去空白',
              code: `<?php
$s = "  Hello World  ";

echo trim($s) . "\\n";
echo strtolower($s) . "\\n";
echo strtoupper(trim($s)) . "\\n";
echo ucfirst("hello");`,
              explanation:
                'trim 去首尾空白，strtolower/strtoupper 转大小写，ucfirst 首字母大写。函数可组合：strtoupper(trim($s))。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 strlen 输出 hello 的长度 5。',
              starter_code: `<?php
echo ___("hello");`,
              expected_output: '5',
              hints: [
                '字符串长度函数',
                'strlen 返回字节数',
                '答案: strlen',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 str_replace 把 cat 中的 a 替换为 o，输出 cot。',
              starter_code: `<?php
echo str___("a", "o", "cat");`,
              expected_output: 'cot',
              hints: [
                '替换函数',
                'str_replace($search, $replace, $subject)',
                '答案: replace',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 explode 把 "a,b,c" 按逗号分割并输出数组第一个元素 a。',
              starter_code: `<?php
$arr = ___(",", "a,b,c");
echo $arr[0];`,
              expected_output: 'a',
              hints: [
                '分割字符串为数组',
                'explode($delimiter, $string)',
                '答案: explode',
              ],
            },
          ],
          realWorldScenario:
            '表单清理：$name = trim($_POST["name"]);。CSV 解析：$cols = explode(",", $line);。' +
            '生成 slug：$slug = strtolower(str_replace(" ", "-", $title));。',
        },
        {
          id: 'php-ch4-l2',
          title: '数组操作',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            'PHP 数组是核心数据结构——它是有序映射，既可做索引数组（数字键）也可做关联数组（字符串键）。' +
            '这种"二合一"设计是 PHP 的独特之处，让数组极其灵活。数组操作函数超过 80 个，' +
            '涵盖添加、删除、合并、切片、查找、排序等所有常见需求。\n\n' +
            '创建数组：$arr = [1, 2, 3];（索引数组）或 $arr = ["name" => "Alice", "age" => 30];（关联数组）。' +
            '添加元素：$arr[] = 4;（末尾追加）或 $arr["city"] = "北京";（指定键）。\n\n' +
            '## 基本语法\n\n' +
            '| 函数 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| count | 元素个数 | count($arr) |\n' +
            '| array_push | 末尾添加 | array_push($arr, 4) |\n' +
            '| array_pop | 末尾弹出 | array_pop($arr) |\n' +
            '| array_unshift | 开头添加 | array_unshift($arr, 0) |\n' +
            '| array_shift | 开头弹出 | array_shift($arr) |\n' +
            '| array_merge | 合并 | array_merge($a, $b) |\n' +
            '| array_slice | 切片 | array_slice($arr, 1, 2) |\n' +
            '| in_array | 检查值存在 | in_array(2, $arr) |\n' +
            '| array_key_exists | 检查键存在 | array_key_exists("name", $arr) |\n\n' +
            'array_push($arr, $v) 等价 $arr[] = $v（后者更高效，无函数调用开销）。' +
            'array_merge 数字键重新索引，字符串键后者覆盖前者。+ 运算符合并但保留第一个键的值。\n\n' +
            '## 示例演示\n\n' +
            '示例一：索引数组增删。$arr[] 追加、array_push 批量追加、' +
            'array_pop 弹出末尾、array_shift 弹出开头。\n\n' +
            '示例二：关联数组操作。关联数组用字符串键，类似字典/Map。' +
            'array_keys 取所有键、array_values 取所有值。\n\n' +
            '示例三：合并与切片。array_merge 合并两个数组（数字键重索引）；' +
            'array_slice 截取一段（不改变原数组）。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. array_push vs $arr[]：$arr[] = $v 更高效（无函数调用），array_push 适合批量添加多元素。\n' +
            '2. array_merge 数字键：数字键会重新索引（0,1,2...），字符串键后者覆盖前者。\n' +
            '3. + 运算符合并：保留第一个数组的键值，第二个的重复键被忽略——与 array_merge 不同。\n' +
            '4. in_array 默认弱比较：in_array("1", [1]) 为 true，用第三个参数 true 开启严格比较。\n' +
            '5. unset 不重索引：unset($arr[2]) 删元素但保留键，需 array_values 重建索引。\n\n' +
            '## 真实场景应用\n\n' +
            '收集数据：$errors[] = "字段不能为空";。' +
            '配置合并：$config = array_merge($defaults, $userConfig);。' +
            '查找：if (in_array($role, ["admin", "editor"], true)) { ... }。' +
            '队列处理：$task = array_shift($queue);。' +
            '分页：$pageItems = array_slice($items, ($page - 1) * $size, $size);。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 数组操作：增删（push/pop/shift/unshift）、合并（merge）、切片（slice）、查找（in_array）。' +
            'PHP 数组是索引+关联的"二合一"，灵活但需注意合并语义差异。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习数组函数：array_map/array_filter/array_reduce 函数式处理、sort/usort 排序。',
          examples: [
            {
              title: '索引数组增删',
              code: `<?php
$arr = [1, 2, 3];

$arr[] = 4;
print_r($arr);

array_push($arr, 5, 6);
print_r($arr);

$last = array_pop($arr);
echo "弹出: " . $last . "\\n";

$first = array_shift($arr);
echo "弹出开头: " . $first;`,
              explanation:
                '$arr[] 追加单个，array_push 批量追加。array_pop 弹末尾，array_shift 弹开头。弹出后数组长度减 1。',
            },
            {
              title: '关联数组',
              code: `<?php
$user = ["name" => "Alice", "age" => 30];
$user["city"] = "北京";

print_r($user);
echo "键: " . implode(",", array_keys($user)) . "\\n";
echo "值: " . implode(",", array_values($user));`,
              explanation:
                '关联数组用字符串键，$user["city"] = ... 添加。array_keys 取所有键，array_values 取所有值（重建数字索引）。',
            },
            {
              title: '合并与切片',
              code: `<?php
$a = [1, 2, 3];
$b = [4, 5, 6];

$merged = array_merge($a, $b);
print_r($merged);

$slice = array_slice($merged, 2, 2);
print_r($slice);`,
              explanation:
                'array_merge 合并两个数组（数字键重新索引 0-5）。array_slice($arr, offset, length) 截取一段，不改原数组。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 count 输出数组 [1,2,3] 的长度 3。',
              starter_code: `<?php
echo ___([1, 2, 3]);`,
              expected_output: '3',
              hints: [
                '数组长度函数',
                'count($arr) 返回元素个数',
                '答案: count',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 $arr[] = 4 给 [1,2,3] 追加 4，输出最后一个元素。',
              starter_code: `<?php
$arr = [1, 2, 3];
$arr___ = 4;
echo $arr[count($arr) - 1];`,
              expected_output: '4',
              hints: [
                '追加用 [] =',
                '$arr[] = 4 末尾追加',
                '答案: []',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 array_merge 合并 [1,2] 和 [3,4]，输出 4（长度）。',
              starter_code: `<?php
$merged = array___([1, 2], [3, 4]);
echo count($merged);`,
              expected_output: '4',
              hints: [
                '合并数组函数',
                'array_merge($a, $b)',
                '答案: merge',
              ],
            },
          ],
          realWorldScenario:
            '错误收集：$errors[] = "field required";。配置合并：$config = array_merge($defaults, $userConfig);。' +
            '分页：$items = array_slice($all, $offset, $limit);。',
        },
        {
          id: 'php-ch4-l3',
          title: '数组函数',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            'PHP 数组函数支持函数式编程风格：array_map 映射、array_filter 过滤、array_reduce 归约。' +
            '这三者覆盖了数据处理的大部分需求，配合箭头函数让代码简洁优雅。' +
            '排序函数 sort/rsort/usort/asort/ksort 等覆盖各种排序需求。\n\n' +
            '函数式数据处理让代码更声明式——描述"做什么"而非"怎么做"。' +
            'array_map(fn($x) => $x * 2, $nums) 比 foreach 循环更清晰地表达"每个元素翻倍"的意图。\n\n' +
            '## 基本语法\n\n' +
            'array_map(fn($x) => $x * 2, $arr)：每个元素经回调处理后返回新数组。' +
            'array_filter($arr, fn($x) => $x > 0)：保留回调返回 true 的元素。' +
            'array_reduce($arr, fn($carry, $x) => $carry + $x, 0)：归约为单值。\n\n' +
            '| 函数 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| array_map | 映射 | array_map(fn($x) => $x*2, $arr) |\n' +
            '| array_filter | 过滤 | array_filter($arr, fn($x) => $x > 0) |\n' +
            '| array_reduce | 归约 | array_reduce($arr, fn($c,$x) => $c+$x, 0) |\n' +
            '| sort | 升序排序（重索引） | sort($arr) |\n' +
            '| usort | 自定义排序 | usort($arr, fn($a,$b) => $a <=> $b) |\n' +
            '| asort | 按值排序（保留键） | asort($arr) |\n' +
            '| ksort | 按键排序 | ksort($arr) |\n\n' +
            'sort 会重建数字索引（原键丢失）；asort/ksort 保留关联数组的键。' +
            'usort 用回调函数定义比较规则（返回 -1/0/1），配合飞船运算符 <=> 最简洁。\n\n' +
            '## 示例演示\n\n' +
            '示例一：array_map 映射。每个元素经回调处理返回新数组，原数组不变。' +
            '适合批量转换：提取字段、格式化、类型转换。\n\n' +
            '示例二：array_filter 过滤。保留回调返回 true 的元素，' +
            '注意过滤后键可能不连续，用 array_values 重建索引。\n\n' +
            '示例三：排序。sort 升序、rsort 降序、usort 自定义。' +
            '关联数组用 asort（按值）或 ksort（按键）保留键。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. array_filter 保留键：过滤后键不连续 [0=>1, 2=>3]，用 array_values 重建为 [0=>1, 1=>3]。\n' +
            '2. sort 破坏键：sort($arr) 重索引，原关联键丢失。保留键用 asort/ksort。\n' +
            '3. array_reduce 初始值：第三个参数是初始值，省略时用第一个元素（空数组报错）。\n' +
            '4. array_map 多数组：array_map(fn($a,$b) => $a+$b, [1,2], [3,4]) 得 [4,6]。\n' +
            '5. 排序稳定性：PHP 排序不稳定（相等元素的相对顺序可能变），需稳定排序用自定义逻辑。\n\n' +
            '## 真实场景应用\n\n' +
            '提取字段：$names = array_map(fn($u) => $u["name"], $users);。' +
            '过滤：$active = array_filter($users, fn($u) => $u["active"]);。' +
            '求和：$total = array_reduce($prices, fn($sum, $p) => $sum + $p, 0);。' +
            '按字段排序：usort($items, fn($a, $b) => $a["score"] <=> $b["score"]);。' +
            '去重：$unique = array_unique($arr);。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 数组函数：array_map（映射）、array_filter（过滤）、array_reduce（归约）、' +
            'sort/usort（排序）。函数式风格让数据处理更声明式、更简洁。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习表单与会话：$_GET/$_POST 表单处理、Cookie/Session 状态保持、文件上传。',
          examples: [
            {
              title: 'array_map 映射',
              code: `<?php
$nums = [1, 2, 3, 4, 5];

$doubled = array_map(fn($n) => $n * 2, $nums);
echo implode(",", $doubled) . "\\n";

$users = [
    ["name" => "Alice"],
    ["name" => "Bob"]
];
$names = array_map(fn($u) => $u["name"], $users);
echo implode(",", $names);`,
              explanation:
                'array_map 对每个元素应用回调，返回新数组（原数组不变）。常用于批量转换、提取字段。配合箭头函数最简洁。',
            },
            {
              title: 'array_filter 过滤',
              code: `<?php
$nums = [1, -2, 3, -4, 5];

$positive = array_filter($nums, fn($n) => $n > 0);
echo implode(",", $positive) . "\\n";

// 注意键可能不连续，用 array_values 重建
$reindexed = array_values($positive);
echo implode(",", $reindexed);`,
              explanation:
                'array_filter 保留回调返回 true 的元素，但键不连续。用 array_values 重建数字索引。空字符串、0、null 默认被过滤。',
            },
            {
              title: '排序',
              code: `<?php
$nums = [3, 1, 4, 1, 5, 9, 2, 6];
sort($nums);
echo implode(",", $nums) . "\\n";

$users = [
    ["name" => "Bob", "age" => 25],
    ["name" => "Alice", "age" => 30]
];
usort($users, fn($a, $b) => $a["age"] <=> $b["age"]);
foreach ($users as $u) {
    echo $u["name"] . " ";
}`,
              explanation:
                'sort 升序排序（重索引）。usort 用回调自定义排序，飞船 <=> 返回 -1/0/1。按 age 升序后 Alice(30) 在 Bob(25) 后。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 array_map 将 [1,2,3] 每个元素乘以 2，输出 2,4,6。',
              starter_code: `<?php
$nums = [1, 2, 3];
$result = array___(fn($n) => $n * 2, $nums);
echo implode(",", $result);`,
              expected_output: '2,4,6',
              hints: [
                '映射函数',
                'array_map($callback, $array)',
                '答案: map',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 array_filter 过滤 [1,-2,3] 只保留正数，输出 1,3。',
              starter_code: `<?php
$nums = [1, -2, 3];
$result = array___($nums, fn($n) => $n > 0);
echo implode(",", $result);`,
              expected_output: '1,3',
              hints: [
                '过滤函数',
                'array_filter($array, $callback)',
                '答案: filter',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 sort 将 [3,1,2] 升序排序，输出 1,2,3。',
              starter_code: `<?php
$nums = [3, 1, 2];
___($nums);
echo implode(",", $nums);`,
              expected_output: '1,2,3',
              hints: [
                '升序排序函数',
                'sort($arr) 原地排序',
                '答案: sort',
              ],
            },
          ],
          realWorldScenario:
            '提取字段：$names = array_map(fn($u) => $u["name"], $users);。' +
            '求总价：$total = array_reduce($prices, fn($s, $p) => $s + $p, 0);。' +
            '按分排序：usort($items, fn($a, $b) => $a["score"] <=> $b["score"]);。',
        },
      ],
    },
    // ================================================================
    // 第 5 章：表单与会话
    // ================================================================
    {
      id: 'php-ch5',
      title: '表单与会话',
      order: 4,
      lessons: [
        {
          id: 'php-ch5-l1',
          title: '表单处理',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            '表单是 Web 应用与用户交互的核心方式。PHP 通过超全局变量 $_GET 和 $_POST 接收表单数据。' +
            '$_GET 收集 URL 查询参数（?name=Alice），$_POST 收集表单 body 数据。' +
            '$_REQUEST 包含 GET+POST+COOKIE（不推荐用，来源模糊）。表单处理需要验证、清理、转义三步。\n\n' +
            'GET 用于读取数据（搜索、分页），参数在 URL 可见可分享；POST 用于修改数据（提交、登录），' +
            '数据在 body 不可见。GET 有 URL 长度限制（约 2KB），POST 无实际限制。' +
            '敏感数据（密码、支付）必须用 POST。\n\n' +
            '## 基本语法\n\n' +
            'HTML 表单：<form method="POST" action="handle.php">...</form>。' +
            'PHP 接收：$name = $_POST["name"] ?? "";（用 ?? 处理不存在字段）。\n\n' +
            '| 变量 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| $_GET | URL 参数 | $_GET["page"] |\n' +
            '| $_POST | 表单 body | $_POST["username"] |\n' +
            '| $_REQUEST | GET+POST+COOKIE | 不推荐使用 |\n' +
            '| $_FILES | 上传文件 | $_FILES["avatar"] |\n' +
            '| $_SERVER | 服务器信息 | $_SERVER["REQUEST_METHOD"] |\n\n' +
            'htmlspecialchars 转义 HTML 特殊字符（< > & "）防止 XSS：' +
            'echo htmlspecialchars($userInput, ENT_QUOTES, "UTF-8");。' +
            '输出到 HTML 的用户输入必须转义，否则有 XSS 风险。\n\n' +
            '## 示例演示\n\n' +
            '示例一：GET 参数处理。模拟 $_GET 接收 URL 参数，用 ?? 处理缺失字段。' +
            '注意输出到 HTML 用 htmlspecialchars 转义防 XSS。\n\n' +
            '示例二：POST 表单处理。模拟 $_POST 接收表单数据，验证必填字段、' +
            '用 empty 检查空值、过滤无效输入。\n\n' +
            '示例三：表单验证。验证邮箱格式 filter_var、密码长度、' +
            '收集错误信息到数组返回给前端显示。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 未转义导致 XSS：echo $_POST["name"]; 直接输出有 XSS 风险，必须 htmlspecialchars。\n' +
            '2. 未检查字段存在：$_POST["name"] 不存在时 Notice，用 $_POST["name"] ?? "" 处理。\n' +
            '3. GET 改数据：修改操作用 POST，GET 应只用于读取（CSRF 和日志泄露风险）。\n' +
            '4. 信任客户端：客户端验证只为体验，服务端必须重新验证（客户端可绕过）。\n' +
            '5. $_REQUEST 混淆：$_REQUEST 合并 GET/POST/COOKIE，来源不明，优先用 $_GET/$_POST。\n\n' +
            '## 真实场景应用\n\n' +
            '搜索：$q = $_GET["q"] ?? ""; $results = search($q);。' +
            '登录：$username = $_POST["username"] ?? ""; 验证后 session_start()。' +
            '评论提交：$comment = htmlspecialchars(trim($_POST["comment"]));。' +
            'API：$data = json_decode(file_get_contents("php://input"), true);（JSON body）。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 表单处理：$_GET/$_POST 接收数据、?? 处理缺失字段、' +
            'htmlspecialchars 防 XSS、filter_var 验证格式。服务端验证不可省略。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习 Cookie 与 Session：setcookie 设置 Cookie、$_SESSION 跨页面状态保持。',
          examples: [
            {
              title: 'GET 参数处理',
              code: `<?php
// 模拟 URL: page.php?name=Alice&age=30
$_GET["name"] = "Alice";
$_GET["age"] = "30";

$name = $_GET["name"] ?? "匿名";
$age = (int)($_GET["age"] ?? 0);

echo "姓名: " . htmlspecialchars($name) . "\\n";
echo "年龄: " . $age;`,
              explanation:
                '$_GET 接收 URL 参数，?? 处理缺失字段。htmlspecialchars 转义防 XSS（用户输入输出到 HTML 必须转义）。',
            },
            {
              title: 'POST 表单验证',
              code: `<?php
// 模拟表单提交
$_POST["username"] = "alice";
$_POST["email"] = "alice@example.com";

$errors = [];

$username = trim($_POST["username"] ?? "");
$email = trim($_POST["email"] ?? "");

if (empty($username)) {
    $errors[] = "用户名必填";
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "邮箱格式错误";
}

if (empty($errors)) {
    echo "验证通过: " . $username;
} else {
    echo "错误: " . implode("; ", $errors);
}`,
              explanation:
                'trim 去空格、empty 检查必填、filter_var 验证邮箱格式。错误收集到数组统一显示。服务端验证必须做（客户端可绕过）。',
            },
            {
              title: 'htmlspecialchars 转义',
              code: `<?php
// 模拟用户输入含恶意脚本
$input = '<script>alert("XSS")</script>';

// 不转义（危险！）
// echo $input;

// 正确：转义后输出
echo htmlspecialchars($input, ENT_QUOTES, "UTF-8");`,
              explanation:
                'htmlspecialchars 把 < > & " 转为 HTML 实体（&lt; &gt;），让浏览器不解析为标签。所有用户输入输出到 HTML 都必须转义防 XSS。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 $_POST 获取 username 字段（模拟值 alice），输出 用户：alice。',
              starter_code: `<?php
$_POST["username"] = "alice";
$name = $_POST["username"] ___ "匿名";
echo "用户：" . $name;`,
              expected_output: '用户：alice',
              hints: [
                '用 ?? 处理可能不存在的字段',
                '答案: ??',
                '$_POST["username"] ?? "匿名"',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 filter_var 验证 alice@example.com 是否为有效邮箱（输出 1 或 true 的文本）。',
              starter_code: `<?php
$email = "alice@example.com";
echo filter_var($email, FILTER___) ? "yes" : "no";`,
              expected_output: 'yes',
              hints: [
                '验证邮箱的过滤器',
                'FILTER_VALIDATE_EMAIL',
                '答案: _VALIDATE_EMAIL',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 htmlspecialchars 转义 <b> 标签，输出 &lt;b&gt;。',
              starter_code: `<?php
echo htmlspecialchars("<b>", ENT___, "UTF-8");`,
              expected_output: '&lt;b&gt;',
              hints: [
                '转义引号用 ENT_QUOTES',
                '答案: _QUOTES',
                'ENT_QUOTES 转义单双引号',
              ],
            },
          ],
          realWorldScenario:
            '搜索：$q = trim($_GET["q"] ?? "");。登录验证：if (empty($errors)) { login(); }。' +
            '输出用户输入：echo htmlspecialchars($comment);。',
        },
        {
          id: 'php-ch5-l2',
          title: 'Cookie 与 Session',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            'HTTP 是无状态协议——每次请求独立，服务器不记得之前的请求。Cookie 和 Session 是两种保持状态的机制。' +
            'Cookie 存在浏览器端（客户端），每次请求自动发送给服务器；Session 存在服务器端，' +
            '通过 Cookie 中的 session ID 关联用户。Session 更安全（数据不暴露给客户端），Cookie 更轻量。\n\n' +
            'Cookie 适合：登录记住我、用户偏好（主题、语言）、跟踪分析。' +
            'Session 适合：登录状态、购物车、临时数据。' +
            '敏感数据（用户 ID、权限）应存 Session 而非 Cookie。\n\n' +
            '## 基本语法\n\n' +
            'Cookie：setcookie("name", "value", time() + 3600);（1 小时后过期）。读取：$_COOKIE["name"]。' +
            'Session：session_start(); $_SESSION["user"] = $user; 读取：$_SESSION["user"]。' +
            '销毁：session_destroy();。\n\n' +
            '| 操作 | Cookie | Session |\n' +
            '|------|--------|---------|\n' +
            '| 设置 | setcookie() | $_SESSION["k"] = $v |\n' +
            '| 读取 | $_COOKIE["k"] | $_SESSION["k"] |\n' +
            '| 删除 | setcookie 过期 | unset($_SESSION["k"]) |\n' +
            '| 销毁 | 清 Cookie | session_destroy() |\n' +
            '| 存储 | 浏览器端 | 服务器端 |\n' +
            '| 安全 | 较低（可查看修改） | 较高（仅 session ID 暴露） |\n\n' +
            'session_start() 必须在任何输出之前调用（包括空格、BOM），否则 "headers already sent" 错误。' +
            '现代 PHP 用 ob_start() 缓冲输出或确保 session_start 在文件首行。\n\n' +
            '## 示例演示\n\n' +
            '示例一：Cookie 设置与读取。setcookie 设置 Cookie，需指定过期时间（time() + 秒数）。' +
            'Cookie 在下次请求时才可用 $_COOKIE 读取。\n\n' +
            '示例二：Session 登录状态。session_start() 开启会话，$_SESSION 存储用户信息。' +
            '跨页面：另一页面 session_start() 后即可读取 $_SESSION。\n\n' +
            '示例三：销毁 Session。注销时清空 $_SESSION、删除 Cookie、session_destroy()。' +
            '完整的三步注销流程。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. session_start 位置：必须在任何输出前，否则 "headers already sent"。\n' +
            '2. Cookie 不立即可用：setcookie 后当前请求的 $_COOKIE 没有新值，下次请求才有。\n' +
            '3. Cookie 安全：用户可查看修改 Cookie，不要存敏感数据（密码、权限）。\n' +
            '4. Session 文件存储：默认存 /tmp 文件，多服务器需用 Redis/Memcached 共享 session。\n' +
            '5. Session 固定攻击：登录后用 session_regenerate_id(true) 换新 ID 防止固定攻击。\n\n' +
            '## 真实场景应用\n\n' +
            '登录：session_start(); $_SESSION["user_id"] = $user["id"];。' +
            '检查登录：if (empty($_SESSION["user_id"])) { redirect("/login"); }。' +
            '记住我：setcookie("remember_token", $token, time() + 86400 * 30);。' +
            '主题偏好：setcookie("theme", "dark", time() + 86400 * 365);。' +
            '购物车：$_SESSION["cart"][$product_id] = $quantity;。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP Cookie 与 Session：setcookie 设置客户端 Cookie、session_start + $_SESSION 服务端会话。' +
            '敏感数据存 Session，偏好存 Cookie，session_start 必须在输出前。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习文件上传：$_FILES 处理、move_uploaded_file 移动、上传验证。',
          examples: [
            {
              title: 'Cookie 设置',
              code: `<?php
// 设置 Cookie（1 小时过期）
setcookie("username", "Alice", time() + 3600);
setcookie("theme", "dark", time() + 86400 * 30);

// 读取 Cookie（下次请求才可用）
$_COOKIE["username"] = "Alice";  // 模拟
$_COOKIE["theme"] = "dark";       // 模拟

echo "用户: " . ($_COOKIE["username"] ?? "未登录") . "\\n";
echo "主题: " . ($_COOKIE["theme"] ?? "default");

// 删除 Cookie（设为过去时间）
setcookie("username", "", time() - 3600);`,
              explanation:
                'setcookie 设置 Cookie，第三个参数是过期时间戳。$_COOKIE 读取（setcookie 后下次请求才可用）。删除 Cookie 设为过去时间。',
            },
            {
              title: 'Session 登录',
              code: `<?php
session_start();

// 模拟登录成功
$_SESSION["user_id"] = 42;
$_SESSION["username"] = "Alice";

// 检查登录状态
if (isset($_SESSION["user_id"])) {
    echo "已登录: " . $_SESSION["username"];
} else {
    echo "未登录";
}`,
              explanation:
                'session_start() 开启会话，$_SESSION 存储用户信息。跨页面保持：另一页面 session_start() 后即可读取。比 Cookie 安全。',
            },
            {
              title: '注销流程',
              code: `<?php
session_start();

// 清空 Session 变量
$_SESSION = [];

// 删除 Session Cookie
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        "",
        time() - 3600,
        $params["path"]
    );
}

// 销毁 Session
session_destroy();
echo "已注销";`,
              explanation:
                '完整注销三步：清空 $_SESSION、删除 Session Cookie、session_destroy()。确保用户完全退出。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 setcookie 设置名为 theme 值为 dark 的 Cookie（1 小时过期）。',
              starter_code: `<?php
setcookie("theme", "dark", ___() + 3600);
echo "set";`,
              expected_output: 'set',
              hints: [
                '当前时间戳函数',
                'time() 返回当前时间戳',
                '答案: time',
              ],
            },
            {
              type: 'output-match',
              prompt: '开启 Session 后设置 user_id 为 1，输出 done。',
              starter_code: `<?php
session_start();
$_SESSION["user_id"] = ___;
echo "done";`,
              expected_output: 'done',
              hints: [
                'user_id 赋值为 1',
                '答案: 1',
                '$_SESSION["user_id"] = 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 $_SESSION 读取 username 输出 Alice（模拟值）。',
              starter_code: `<?php
session_start();
$_SESSION["username"] = "Alice";
echo $_SESSION___;`,
              expected_output: 'Alice',
              hints: [
                '访问 Session 数组的键',
                '$_SESSION["username"]',
                '答案: ["username"]',
              ],
            },
          ],
          realWorldScenario:
            '登录：$_SESSION["user_id"] = $user["id"];。检查：if (!isset($_SESSION["user_id"])) redirect("/login");。' +
            '记住我：setcookie("token", $token, time() + 86400 * 30);。',
        },
        {
          id: 'php-ch5-l3',
          title: '文件上传',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            '文件上传是 Web 应用常见功能——头像、文档、图片。PHP 通过 $_FILES 超全局变量处理上传文件。' +
            '上传的文件先存到临时目录，需用 move_uploaded_file 移到目标位置。' +
            '文件上传涉及安全（类型检查、大小限制、文件名处理）需格外谨慎。\n\n' +
            'HTML 表单需设 enctype="multipart/form-data" 才能上传文件。' +
            'PHP 配置 php.ini 中 upload_max_filesize 和 post_max_size 限制上传大小。' +
            'move_uploaded_file 会检查是否为 HTTP POST 上传，防止路径遍历攻击。\n\n' +
            '## 基本语法\n\n' +
            '$_FILES 结构：$_FILES["avatar"]["name"]（原名）、["tmp_name"]（临时路径）、' +
            '["size"]（字节）、["type"]（MIME）、["error"]（错误码）。\n\n' +
            '| 字段 | 说明 |\n' +
            '|------|------|\n' +
            '| $_FILES["f"]["name"] | 客户端原文件名 |\n' +
            '| $_FILES["f"]["tmp_name"] | 服务器临时路径 |\n' +
            '| $_FILES["f"]["size"] | 文件大小（字节） |\n' +
            '| $_FILES["f"]["type"] | MIME 类型（客户端提供，不可信） |\n' +
            '| $_FILES["f"]["error"] | 错误码（0 = 成功） |\n\n' +
            'move_uploaded_file($tmp_name, $dest) 移动文件。' +
            'is_uploaded_file() 检查是否为上传文件。错误码：UPLOAD_ERR_OK（0）、UPLOAD_ERR_INI_SIZE（1）等。\n\n' +
            '## 示例演示\n\n' +
            '示例一：基础上传。检查 $_FILES["error"]、用 move_uploaded_file 移动到目标目录。' +
            '注意目标目录需存在且可写。\n\n' +
            '示例二：上传验证。验证文件大小、扩展名、MIME 类型。' +
            '注意 $_FILES["type"] 客户端可伪造，需用 finfo 获取真实 MIME。\n\n' +
            '示例三：安全文件名处理。用户文件名可能含路径或特殊字符，' +
            '用 basename 取纯文件名、uniqid 生成唯一名避免覆盖。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. $_FILES["type"] 不可信：客户端可伪造，用 finfo_file 获取真实 MIME。\n' +
            '2. 文件名安全：用户名含 ../ 可路径遍历，用 basename + uniqid 生成安全名。\n' +
            '3. 扩展名检查不够：upload.php.jpg 可能被当 PHP 执行，检查真实 MIME。\n' +
            '4. 上传目录权限：目录不应可执行 PHP（配置服务器禁止执行）。\n' +
            '5. 大文件限制：php.ini 的 upload_max_filesize 和 post_max_size 限制大小。\n\n' +
            '## 真实场景应用\n\n' +
            '头像上传：验证是图片（getimagesize）、限制 2MB、生成缩略图、存到 /uploads/avatars/。' +
            '文档上传：验证 PDF/DOCX、限制 10MB、用 uniqid 命名避免覆盖。' +
            '图片处理：用 GD 或 Imagick 库压缩、裁剪、生成缩略图。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 文件上传：$_FILES 接收、move_uploaded_file 移动、安全验证（MIME/大小/文件名）。' +
            '核心安全原则：不信任客户端提供的任何信息，服务端重新验证。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习面向对象：类与对象、继承与接口、特性与命名空间。',
          examples: [
            {
              title: '基础上传',
              code: `<?php
// 模拟文件上传
$_FILES["avatar"] = [
    "name" => "photo.jpg",
    "tmp_name" => "/tmp/phpXXXXXX",
    "size" => 102400,
    "type" => "image/jpeg",
    "error" => UPLOAD_ERR_OK
];

if ($_FILES["avatar"]["error"] === UPLOAD_ERR_OK) {
    $dest = "/tmp/uploads/" . basename($_FILES["avatar"]["name"]);
    echo "准备移动到: " . $dest . "\\n";
    echo "文件大小: " . $_FILES["avatar"]["size"] . " 字节";
} else {
    echo "上传错误码: " . $_FILES["avatar"]["error"];
}`,
              explanation:
                '$_FILES 包含上传文件信息。检查 error === UPLOAD_ERR_OK 确认成功。basename 取纯文件名防路径遍历。实际用 move_uploaded_file 移动。',
            },
            {
              title: '上传验证',
              code: `<?php
$_FILES["doc"] = [
    "name" => "report.pdf",
    "tmp_name" => "/tmp/phpXXXXXX",
    "size" => 5242880,  // 5MB
    "type" => "application/pdf",
    "error" => UPLOAD_ERR_OK
];

$maxSize = 10 * 1024 * 1024;  // 10MB
$allowed = ["pdf", "doc", "docx"];

$ext = strtolower(pathinfo($_FILES["doc"]["name"], PATHINFO_EXTENSION));

if ($_FILES["doc"]["size"] > $maxSize) {
    echo "文件过大";
} elseif (!in_array($ext, $allowed)) {
    echo "不支持的格式";
} else {
    echo "验证通过: " . $_FILES["doc"]["name"];
}`,
              explanation:
                '验证三步：大小（$_FILES["size"]）、扩展名（pathinfo 取扩展名）、MIME（finfo_file 真实检测）。in_array 检查白名单。',
            },
            {
              title: '安全文件名',
              code: `<?php
// 用户上传的恶意文件名
$maliciousName = "../../etc/passwd";

// basename 取纯文件名（去掉路径）
$safeName = basename($maliciousName);
echo "安全名: " . $safeName . "\\n";

// 用 uniqid 生成唯一名避免覆盖
$uniqueName = uniqid() . "_" . $safeName;
echo "唯一名: " . $uniqueName;`,
              explanation:
                'basename 去掉路径部分防止遍历。uniqid 生成唯一前缀避免文件名冲突/覆盖。组合使用最安全。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '获取上传文件 avatar 的原文件名 photo.jpg（模拟 $_FILES）。',
              starter_code: `<?php
$_FILES["avatar"]["name"] = "photo.jpg";
echo $_FILES["avatar"]___;`,
              expected_output: 'photo.jpg',
              hints: [
                '原文件名字段',
                '$_FILES["avatar"]["name"]',
                '答案: ["name"]',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 basename 取 ../../etc/passwd 的纯文件名输出 passwd。',
              starter_code: `<?php
echo ___("../../etc/passwd");`,
              expected_output: 'passwd',
              hints: [
                '取路径最后一部分',
                'basename($path) 去掉目录部分',
                '答案: basename',
              ],
            },
            {
              type: 'output-match',
              prompt: '检查上传错误码是否为 0（UPLOAD_ERR_OK），输出 ok。',
              starter_code: `<?php
$_FILES["f"]["error"] = 0;
if ($_FILES["f"]["error"] === UPLOAD___) {
    echo "ok";
}`,
              expected_output: 'ok',
              hints: [
                '成功错误码常量',
                'UPLOAD_ERR_OK 表示无错误',
                '答案: _ERR_OK',
              ],
            },
          ],
          realWorldScenario:
            '头像上传：验证 getimagesize 是图片、限制 2MB、uniqid 命名、存 /uploads/avatars/。' +
            '文档上传：白名单扩展名、finfo 检测真实 MIME、限制 10MB。',
        },
      ],
    },
    // ================================================================
    // 第 6 章：面向对象
    // ================================================================
    {
      id: 'php-ch6',
      title: '面向对象',
      order: 5,
      lessons: [
        {
          id: 'php-ch6-l1',
          title: '类与对象',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            'PHP 从 PHP 5 开始有完整的面向对象支持。类用 class 关键字定义，' +
            '对象用 new 创建。类有属性（变量）和方法（函数），用访问修饰符控制可见性：' +
            'public（公开）、protected（受保护）、private（私有）。$this 在方法内指向当前对象。' +
            '构造函数 __construct 在 new 时自动调用，用于初始化。\n\n' +
            'PHP 8+ 引入了构造器属性提升（constructor promotion）：' +
            'class User { public function __construct(private string $name) {} } ' +
            '自动声明并赋值属性，减少模板代码。还引入了 readonly 属性、命名参数等现代特性。\n\n' +
            '## 基本语法\n\n' +
            'class User { public string $name; public function __construct($name) { $this->name = $name; } }。' +
            '创建：$u = new User("Alice"); 访问：echo $u->name;。\n\n' +
            '| 关键字 | 说明 | 示例 |\n' +
            '|--------|------|------|\n' +
            '| class | 定义类 | class User {} |\n' +
            '| public/protected/private | 访问修饰符 | public $name |\n' +
            '| __construct | 构造函数 | new 时自动调用 |\n' +
            '| $this | 当前对象 | $this->name |\n' +
            '| new | 创建对象 | $u = new User() |\n' +
            '| -> | 访问成员 | $u->name, $u->method() |\n' +
            '| :: | 静态访问 | User::create() |\n\n' +
            '静态属性/方法用 static 声明，通过类名 :: 访问：User::$count、User::create()。' +
            '常量用 const 声明：const MAX_AGE = 150;，访问 User::MAX_AGE。\n\n' +
            '## 示例演示\n\n' +
            '示例一：基础类与对象。定义 User 类，有属性、构造函数、方法。' +
            'new 创建对象，-> 访问成员。\n\n' +
            '示例二：访问修饰符。public 外部可访问、protected 仅类和子类、private 仅本类。' +
            '封装的核心：内部状态用 private/protected 保护，通过 public 方法操作。\n\n' +
            '示例三：构造器属性提升（PHP 8+）。在构造函数参数前加修饰符自动声明属性，' +
            '减少模板代码。readonly 让属性只读（PHP 8.1+）。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. $this vs self：$this 是对象实例，self 是类本身（静态上下文）。\n' +
            '2. -> vs ::：-> 访问实例成员，:: 访问静态成员/常量。\n' +
            '3. 属性未初始化：声明 public $name 但未赋值时为 null（有类型声明则报错）。\n' +
            '4. 构造函数返回 void：__construct 不返回值，new 返回对象本身。\n' +
            '5. PHP 8 属性提升：public function __construct(private $name) {} 自动生成 $this->name。\n\n' +
            '## 真实场景应用\n\n' +
            'Laravel Eloquent 模型：class User extends Model {}，属性通过 ORM 映射数据库。' +
            'Service 类：class EmailService { public function send($to, $subject) { ... } }。' +
            'DTO：class UserDTO { public function __construct(public readonly string $name) {} }。' +
            'Value Object：class Money { public function __construct(private int $cents) {} }。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 类与对象：class 定义、new 创建、__construct 构造、' +
            'public/protected/private 访问控制、$this 当前对象。PHP 8 属性提升简化代码。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习继承与接口：extends 继承、abstract 抽象类、interface 接口。',
          examples: [
            {
              title: '基础类与对象',
              code: `<?php
class User {
    public string $name;
    public int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function greet(): string {
        return "Hi, I'm " . $this->name;
    }
}

$user = new User("Alice", 30);
echo $user->greet() . "\\n";
echo $user->name . " is " . $user->age;`,
              explanation:
                'class 定义类，public 属性外部可访问。__construct 在 new 时初始化。$this 指向当前对象。-> 访问属性和方法。',
            },
            {
              title: '访问修饰符',
              code: `<?php
class BankAccount {
    private float $balance;

    public function __construct(float $initial = 0) {
        $this->balance = $initial;
    }

    public function deposit(float $amount): void {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

$acc = new BankAccount(100);
$acc->deposit(50);
// $acc->balance = 1000;  // Error: private
echo "余额: " . $acc->getBalance();`,
              explanation:
                'private $balance 外部不能直接访问，只能通过 public deposit/getBalance 操作。这是封装的核心——保护内部状态。',
            },
            {
              title: '构造器属性提升',
              code: `<?php
// PHP 8+ 简写
class User {
    public function __construct(
        public readonly string $name,
        public readonly int $age
    ) {}
}

$u = new User("Alice", 30);
echo $u->name . ":" . $u->age;
// $u->name = "Bob";  // Error: readonly`,
              explanation:
                'PHP 8 构造器属性提升：参数前加 public 自动声明属性。readonly（PHP 8.1+）让属性只读，构造后不可修改。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 User 对象并调用 greet 方法输出 Hi。',
              starter_code: `<?php
class User {
    public function greet() {
        return "Hi";
    }
}
$u = ___ User();
echo $u->greet();`,
              expected_output: 'Hi',
              hints: [
                '创建对象用 new',
                'new User()',
                '答案: new',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 $this 访问 name 属性，在 introduce 方法中输出 I am Alice。',
              starter_code: `<?php
class User {
    public string $name;
    public function __construct($name) {
        $this->name = $name;
    }
    public function introduce() {
        return "I am " . $this->___;
    }
}
echo (new User("Alice"))->introduce();`,
              expected_output: 'I am Alice',
              hints: [
                '访问 name 属性',
                '$this->name',
                '答案: name',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 __construct 接收 name 参数，new User("Bob") 后输出 Bob。',
              starter_code: `<?php
class User {
    public string $name;
    public function ___($name) {
        $this->name = $name;
    }
}
$u = new User("Bob");
echo $u->name;`,
              expected_output: 'Bob',
              hints: [
                '构造函数名',
                '__construct 在 new 时自动调用',
                '答案: __construct',
              ],
            },
          ],
          realWorldScenario:
            'Laravel 模型：class User extends Model {}。Service：class MailService { public function send() {} }。' +
            'DTO：class UserDTO { public function __construct(public readonly string $name) {} }。',
        },
        {
          id: 'php-ch6-l2',
          title: '继承与接口',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            '继承让子类复用父类的代码，PHP 用 extends 关键字实现单继承。' +
            'abstract 抽象类定义模板（含抽象方法需子类实现），interface 接口定义契约（纯规范）。' +
            'PHP 类只能继承一个父类（单继承），但可实现多个接口（多实现）——' +
            '这平衡了复用和灵活性。\n\n' +
            'parent:: 调用父类方法，类似其他语言的 super。final 关键字禁止继承/重写。' +
            'instanceof 检查对象类型。接口用 interface 定义，implements 实现。\n\n' +
            '## 基本语法\n\n' +
            '继承：class Dog extends Animal {}。抽象类：abstract class Shape { abstract public function area(); }。' +
            '接口：interface Logger { public function log(string $msg): void; }。实现：class FileLogger implements Logger {}。\n\n' +
            '| 关键字 | 说明 | 示例 |\n' +
            '|--------|------|------|\n' +
            '| extends | 单继承 | class Dog extends Animal |\n' +
            '| implements | 实现接口（可多个） | class C implements A, B |\n' +
            '| abstract | 抽象类/方法 | abstract class Shape {} |\n' +
            '| interface | 接口定义 | interface Loggable {} |\n' +
            '| parent:: | 调用父类 | parent::__construct() |\n' +
            '| final | 禁止继承/重写 | final public function f() |\n' +
            '| instanceof | 类型检查 | $d instanceof Animal |\n\n' +
            '抽象类可有实现代码，接口只能声明方法签名（PHP 8+ 接口可有默认实现但少用）。' +
            '抽象方法只有签名无实现，子类必须实现。接口的方法默认 public abstract。\n\n' +
            '## 示例演示\n\n' +
            '示例一：继承与 parent。子类构造函数调 parent::__construct 初始化父类部分。' +
            '重写方法时 parent::method() 复用父类逻辑。\n\n' +
            '示例二：抽象类。abstract class Shape 定义抽象方法 area，' +
            'Circle 和 Rectangle 各自实现 area。模板方法模式的基础。\n\n' +
            '示例三：接口。interface Logger 定义 log 契约，FileLogger 和 DBLogger 各自实现。' +
            '依赖注入的基础：function doWork(Logger $logger) 接收接口类型。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. 单继承限制：PHP 只能 extends 一个类，需多重复用用 trait 或 interface。\n' +
            '2. 抽象方法必须实现：子类未实现父类的抽象方法会 Fatal error。\n' +
            '3. 接口方法默认 public：implements 后方法必须是 public。\n' +
            '4. instanceof 与 get_class：instanceof 含继承关系，get_class 只返回当前类名。\n' +
            '5. final 慎用：final 方法不能重写，final 类不能继承，限制扩展性。\n\n' +
            '## 真实场景应用\n\n' +
            'Laravel 控制器：class UserController extends Controller {}。' +
            'Repository 模式：interface UserRepository { public function find($id); }，' +
            'class EloquentUserRepository implements UserRepository {}。' +
            '依赖注入：function __construct(private Logger $logger) {} 接收接口，运行时注入实现。' +
            '策略模式：interface PaymentStrategy {}，AlipayStrategy/WechatStrategy 各自实现。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP 继承与接口：extends 单继承、abstract 抽象类、interface 接口、' +
            'implements 多实现、parent:: 调父类。接口是依赖注入和多态的基础。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习特性与命名空间：trait 代码复用、namespace 命名空间、use 导入。',
          examples: [
            {
              title: '继承与 parent',
              code: `<?php
class Animal {
    public function __construct(public string $name) {}

    public function speak(): string {
        return $this->name . " makes a sound";
    }
}

class Dog extends Animal {
    public function speak(): string {
        return parent::speak() . " (Woof!)";
    }
}

$d = new Dog("Rex");
echo $d->speak();`,
              explanation:
                'Dog extends Animal 继承。重写 speak 时 parent::speak() 调用父类版本再补充。构造器属性提升让父类构造简洁。',
            },
            {
              title: '抽象类',
              code: `<?php
abstract class Shape {
    abstract public function area(): float;

    public function describe(): string {
        return "面积是 " . $this->area();
    }
}

class Circle extends Shape {
    public function __construct(private float $radius) {}

    public function area(): float {
        return 3.14159 * $this->radius ** 2;
    }
}

$c = new Circle(5);
echo $c->describe();`,
              explanation:
                'abstract class Shape 定义抽象方法 area，子类 Circle 必须实现。describe 是具体方法，子类直接复用。模板方法模式基础。',
            },
            {
              title: '接口',
              code: `<?php
interface Logger {
    public function log(string $msg): void;
}

class FileLogger implements Logger {
    public function log(string $msg): void {
        echo "[File] " . $msg . "\\n";
    }
}

class ConsoleLogger implements Logger {
    public function log(string $msg): void {
        echo "[Console] " . $msg;
    }
}

function doWork(Logger $logger) {
    $logger->log("任务完成");
}

doWork(new FileLogger());
doWork(new ConsoleLogger());`,
              explanation:
                'interface Logger 定义 log 契约，FileLogger/ConsoleLogger 各自实现。doWork(Logger $logger) 接收接口类型，可传任何实现——多态。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '让 Dog 继承 Animal，调用 parent::speak() 后追加 Woof。',
              starter_code: `<?php
class Animal {
    public function speak() {
        return "Animal";
    }
}
class Dog ___ Animal {
    public function speak() {
        return parent::speak() . " Woof";
    }
}
echo (new Dog())->speak();`,
              expected_output: 'Animal Woof',
              hints: [
                '继承用 extends',
                'class Dog extends Animal',
                '答案: extends',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义抽象方法 area 让 Circle 必须实现，输出 78.54（近似）。',
              starter_code: `<?php
abstract class Shape {
    ___ public function area(): float;
}
class Circle extends Shape {
    public function __construct(private float $r) {}
    public function area(): float {
        return 3.14159 * $this->r ** 2;
    }
}
echo (new Circle(5))->area();`,
              expected_output: '78.53975',
              hints: [
                '抽象方法用 abstract',
                'abstract public function area(): float;',
                '答案: abstract',
              ],
            },
            {
              type: 'output-match',
              prompt: '让 FileLogger 实现 Logger 接口，输出 done。',
              starter_code: `<?php
interface Logger {
    public function log(string $msg): void;
}
class FileLogger ___ Logger {
    public function log(string $msg): void {
        echo $msg;
    }
}
(new FileLogger())->log("done");`,
              expected_output: 'done',
              hints: [
                '实现接口用 implements',
                'class FileLogger implements Logger',
                '答案: implements',
              ],
            },
          ],
          realWorldScenario:
            'Laravel：class UserController extends Controller {}。Repository：interface UserRepo {}，class EloquentRepo implements UserRepo。' +
            '依赖注入：function __construct(Logger $logger) {}。',
        },
        {
          id: 'php-ch6-l3',
          title: '特性与命名空间',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            'PHP 只支持单继承，为解决多重复用问题引入了 trait（特性）。' +
            'trait 是一组方法的集合，用 use 在类中混入——类似 Ruby 的 module mixin。' +
            'trait 不能实例化，纯粹用于代码复用。一个类可以 use 多个 trait，解决单继承限制。\n\n' +
            'namespace（命名空间）解决类名冲突问题——类似文件系统的目录。' +
            'App\Models\User 和 App\Services\User 可以共存。use 导入其他命名空间的类，' +
            '类似 Java 的 import。命名空间是 PSR-4 自动加载的基础。\n\n' +
            '## 基本语法\n\n' +
            'trait 定义：trait Loggable { public function log($msg) { ... } }。' +
            '使用 trait：class User { use Loggable; }。' +
            '命名空间：namespace App\\Models; class User {}。' +
            '导入：use App\\Models\\User;。\n\n' +
            '| 关键字 | 说明 | 示例 |\n' +
            '|--------|------|------|\n' +
            '| trait | 定义特性 | trait T {} |\n' +
            '| use（类内） | 混入 trait | class C { use T; } |\n' +
            '| namespace | 声明命名空间 | namespace App\\Models; |\n' +
            '| use（类外） | 导入类 | use App\\Models\\User; |\n' +
            '| as | 别名 | use App\\User as AppUser; |\n' +
            '| \\ | 全局命名空间 | \\stdClass |\n\n' +
            'trait 冲突解决：insteadof 指定用哪个 trait 的方法，as 改名。' +
            'trait 可含抽象方法，使用 trait 的类必须实现。\n\n' +
            '## 示例演示\n\n' +
            '示例一：trait 基础。定义 Loggable trait 含 log 方法，' +
            'User 和 Order 两个无继承关系的类都 use Loggable 获得日志能力。\n\n' +
            '示例二：命名空间。namespace App\\Models 声明命名空间，' +
            'use App\\Services\\EmailService 导入其他命名空间的类。' +
            '解决大型项目类名冲突。\n\n' +
            '示例三：trait 冲突解决。两个 trait 有同名方法时，' +
            '用 insteadof 选择、as 改名。这是多 trait 场景的必备技能。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. trait 不是类：不能 new，只能 use 混入类中。\n' +
            '2. trait 冲突：多 trait 同名方法需 insteadof 解决，否则 Fatal error。\n' +
            '3. 命名空间与文件路径：PSR-4 要求命名空间对应目录（App\\Models\\User → app/Models/User.php）。\n' +
            '4. use 两种含义：类内 use 混入 trait，类外 use 导入命名空间。\n' +
            '5. 全局命名空间：核心类（stdClass、Exception）在全局空间，命名空间内用 \\Exception 访问。\n\n' +
            '## 真实场景应用\n\n' +
            'Laravel 大量用 trait：SoftDeletes（软删除）、Notifiable（通知）、HasFactory。' +
            'class User extends Model { use Notifiable, SoftDeletes; } 一次获得多种能力。' +
            '命名空间：namespace App\\Http\\Controllers; use App\\Models\\User;。' +
            'Composer 的 PSR-4 自动加载基于命名空间映射文件路径。\n\n' +
            '## 小结\n\n' +
            '本节学习 PHP trait（代码复用，解决单继承）和 namespace（命名空间，解决类名冲突）。' +
            'trait 是 Laravel 等 framework 的核心复用机制，命名空间是现代 PHP 工程的基础。\n\n' +
            '## 下节预告\n\n' +
            '下一章学习数据库与文件：PDO 数据库操作、文件读写、JSON 处理。',
          examples: [
            {
              title: 'trait 基础',
              code: `<?php
trait Loggable {
    public function log(string $msg): void {
        echo "[" . date("H:i:s") . "] " . $msg . "\\n";
    }
}

class User {
    use Loggable;

    public function __construct(public string $name) {}
}

class Order {
    use Loggable;

    public function __construct(public int $id) {}
}

$u = new User("Alice");
$u->log("用户创建");

$o = new Order(1001);
$o->log("订单创建");`,
              explanation:
                'trait Loggable 定义 log 方法，User 和 Order 各自 use 后都获得 log。无继承关系的类共享代码——解决 PHP 单继承限制。',
            },
            {
              title: '命名空间',
              code: `<?php
namespace App\\Models {

    class User {
        public function __construct(public string $name) {}

        public function info(): string {
            return "User: " . $this->name;
        }
    }
}

namespace App\\Services {

    use App\\Models\\User;

    class UserService {
        public function create(string $name): User {
            return new User($name);
        }
    }
}

namespace {
    $service = new App\\Services\\UserService();
    $user = $service->create("Alice");
    echo $user->info();
}`,
              explanation:
                'namespace App\\Models 和 App\\Services 隔离类。use App\\Models\\User 导入跨命名空间的类。全局空间用 namespace { }。',
            },
            {
              title: 'trait 冲突解决',
              code: `<?php
trait A {
    public function hello() { return "A"; }
}

trait B {
    public function hello() { return "B"; }
}

class C {
    use A, B {
        A::hello insteadof B;
        B::hello as helloFromB;
    }
}

$c = new C();
echo $c->hello() . "\\n";
echo $c->helloFromB();`,
              explanation:
                'A 和 B 都有 hello 方法，insteadof 指定用 A 的。as 把 B 的 hello 改名为 helloFromB。冲突解决是多 trait 场景必备。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 trait Loggable 含 log 方法输出 log。',
              starter_code: `<?php
___ Loggable {
    public function log() {
        echo "log";
    }
}
class User {
    use Loggable;
}
(new User())->log();`,
              expected_output: 'log',
              hints: [
                '特性用 trait 关键字',
                'trait Loggable { ... }',
                '答案: trait',
              ],
            },
            {
              type: 'output-match',
              prompt: '在 User 类中 use Loggable trait 获得日志能力。',
              starter_code: `<?php
trait Loggable {
    public function log($msg) { echo $msg; }
}
class User {
    ___ Loggable;
}
(new User())->log("hi");`,
              expected_output: 'hi',
              hints: [
                '类内混入 trait 用 use',
                'use Loggable;',
                '答案: use',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明命名空间 App\\Models。',
              starter_code: `<?php
___ App\\Models;
class User {}
echo "ok";`,
              expected_output: 'ok',
              hints: [
                '命名空间用 namespace 关键字',
                'namespace App\\Models;',
                '答案: namespace',
              ],
            },
          ],
          realWorldScenario:
            'Laravel trait：class User extends Model { use Notifiable, SoftDeletes; }。' +
            '命名空间：namespace App\\Http\\Controllers; use App\\Models\\User;。',
        },
      ],
    },
    // ================================================================
    // 第 7 章：数据库与文件
    // ================================================================
    {
      id: 'php-ch7',
      title: '数据库与文件',
      order: 6,
      lessons: [
        // ---------------- 第 1 节：PDO 数据库 ----------------
        {
          id: 'php-ch7-l1',
          title: 'PDO 数据库',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            'PDO（PHP Data Objects）是 PHP 访问数据库的统一抽象层，支持 MySQL、SQLite、PostgreSQL 等多种驱动。它使用预处理语句（prepared statement）自动转义参数，是防范 SQL 注入的标准方案。\n\n' +
            'PDO 面向对象，所有操作通过 PDO 实例完成：连接、查询、预处理、事务。相比老的 mysqli 或 mysql 函数，PDO 更安全、更统一。\n\n' +
            '## 基本语法\n\n' +
            '连接数据库：`$pdo = new PDO($dsn, $user, $pass, $options);`，DSN 格式如 `mysql:host=localhost;dbname=test` 或 `sqlite::memory:`。' +
            '设置错误模式：`$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);`。\n\n' +
            '执行查询：`$pdo->query($sql)` 用于无参数的 SELECT，返回 PDOStatement。' +
            '预处理：`$stmt = $pdo->prepare($sql); $stmt->execute([$param1, $param2]);`，参数用 `?` 占位符或 `:name` 命名占位符。\n\n' +
            '获取数据：`$stmt->fetch(PDO::FETCH_ASSOC)` 取一行，`$stmt->fetchAll(PDO::FETCH_ASSOC)` 取全部，`$stmt->fetchColumn()` 取单列。\n\n' +
            '增删改：`$stmt = $pdo->prepare("INSERT INTO users (name) VALUES (?)"); $stmt->execute([$name]); $id = $pdo->lastInsertId();`。\n\n' +
            '事务：`$pdo->beginTransaction(); ... $pdo->commit();` 或 `$pdo->rollBack();`。\n\n' +
            '## 示例演示\n\n' +
            '见下方示例：用 SQLite 内存库演示 CRUD、预处理、事务。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. **绝对不要拼接 SQL 字符串**：`"WHERE name = \'" . $name . "\'"` 是 SQL 注入漏洞，必须用预处理。\n' +
            '2. **DSN 写错驱动名**：`mysql:` 不能写成 `mysqli:`，PDO 驱动名需与 php.ini 启用的扩展一致。\n' +
            '3. **默认不抛异常**：PDO 默认静默错误，需手动 `setAttribute(ERRMODE_EXCEPTION)` 才会抛异常。\n' +
            '4. **fetch 模式混淆**：`FETCH_ASSOC` 返回关联数组，`FETCH_NUM` 返回索引数组，`FETCH_OBJ` 返回对象。\n' +
            '5. **rowCount 对 SELECT 不可靠**：MySQL 下 SELECT 的 rowCount 不保证准确，应改用 `SELECT COUNT(*)`。\n\n' +
            '## 真实场景应用\n\n' +
            '用户注册：`INSERT INTO users (email, pass_hash) VALUES (?, ?)` 配合 `password_hash`。' +
            '登录校验：`SELECT id, pass_hash FROM users WHERE email = ?` 配合 `password_verify`。' +
            '分页查询：`SELECT * FROM posts ORDER BY id LIMIT ? OFFSET ?`。\n\n' +
            '## 小结\n\n' +
            'PDO 是 PHP 数据库操作的标准方式：DSN 连接 → prepare 预处理 → execute 绑定参数 → fetch 取结果。' +
            '预处理是防 SQL 注入的根本手段，永远不要拼接 SQL。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习文件读写：file_get_contents、fopen/fwrite、file_put_contents，处理配置与日志文件。',
          examples: [
            {
              title: 'SQLite 内存库 CRUD',
              code: `<?php
$pdo = new PDO('sqlite::memory:');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// 建表
$pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)");

// 插入（预处理）
$stmt = $pdo->prepare("INSERT INTO users (name, age) VALUES (?, ?)");
$stmt->execute(['Alice', 30]);
$stmt->execute(['Bob', 25]);
echo "last id: " . $pdo->lastInsertId() . "\\n";

// 查询
$rows = $pdo->query("SELECT * FROM users")->fetchAll(PDO::FETCH_ASSOC);
foreach ($rows as $r) {
    echo $r['id'] . ":" . $r['name'] . ":" . $r['age'] . "\\n";
}`,
              explanation:
                '用 sqlite::memory: 创建内存数据库，无需外部服务。prepare + execute 绑定参数防注入，fetchAll(PDO::FETCH_ASSOC) 返回关联数组。',
            },
            {
              title: '命名占位符与单行查询',
              code: `<?php
$pdo = new PDO('sqlite::memory:');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)");
$pdo->prepare("INSERT INTO users (name) VALUES (:name)")->execute([':name' => 'Alice']);
$pdo->prepare("INSERT INTO users (name) VALUES (:name)")->execute([':name' => 'Bob']);

// 命名占位符查询
$stmt = $pdo->prepare("SELECT * FROM users WHERE name = :name");
$stmt->execute([':name' => 'Alice']);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
echo $user['id'] . ":" . $user['name'] . "\\n";

// 统计行数
$count = $pdo->query("SELECT COUNT(*) FROM users")->fetchColumn();
echo "total: " . $count;`,
              explanation:
                ':name 是命名占位符，execute 时传关联数组 [:name => 值]。fetchColumn() 直接取第一列第一行，适合 COUNT/MAX 等聚合。',
            },
            {
              title: '事务保证原子性',
              code: `<?php
$pdo = new PDO('sqlite::memory:');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("CREATE TABLE accounts (id INTEGER PRIMARY KEY, balance INTEGER)");
$pdo->exec("INSERT INTO accounts (balance) VALUES (100)");
$pdo->exec("INSERT INTO accounts (balance) VALUES (100)");

try {
    $pdo->beginTransaction();
    $pdo->exec("UPDATE accounts SET balance = balance - 30 WHERE id = 1");
    $pdo->exec("UPDATE accounts SET balance = balance + 30 WHERE id = 2");
    $pdo->commit();
    echo "transfer ok\\n";
} catch (Exception $e) {
    $pdo->rollBack();
    echo "rolled back: " . $e->getMessage();
}

foreach ($pdo->query("SELECT * FROM accounts") as $r) {
    echo $r['id'] . ":" . $r['balance'] . "\\n";
}`,
              explanation:
                '事务内的多条 UPDATE 要么全部成功要么全部回滚。try/catch 捕获异常后 rollBack，保证转账场景的原子性。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 PDO 连接 sqlite 内存库，错误模式设为异常。',
              starter_code: `<?php
$pdo = new PDO('sqlite::memory:');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::___);
echo "ok";`,
              expected_output: 'ok',
              hints: [
                '错误异常模式常量名',
                'PDO::ERRMODE_EXCEPTION',
                '答案: ERRMODE_EXCEPTION',
              ],
            },
            {
              type: 'output-match',
              prompt: '用预处理插入一行 name=Alice 并查询所有行数。',
              starter_code: `<?php
$pdo = new PDO('sqlite::memory:');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)");
$stmt = $pdo->___("INSERT INTO users (name) VALUES (?)");
$stmt->execute(['Alice']);
echo $pdo->query("SELECT COUNT(*) FROM users")->fetchColumn();`,
              expected_output: '1',
              hints: [
                '预处理方法名',
                'prepare 返回 PDOStatement',
                '答案: prepare',
              ],
            },
            {
              type: 'output-match',
              prompt: '用命名占位符 :name 查询 name=Bob 的行。',
              starter_code: `<?php
$pdo = new PDO('sqlite::memory:');
$pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)");
$pdo->prepare("INSERT INTO users (name) VALUES (?)")->execute(['Bob']);
$stmt = $pdo->prepare("SELECT name FROM users WHERE name = :name");
$stmt->___([':name' => 'Bob']);
echo $stmt->fetchColumn();`,
              expected_output: 'Bob',
              hints: [
                'PDOStatement 执行方法',
                'execute(array) 绑定参数并执行',
                '答案: execute',
              ],
            },
          ],
          realWorldScenario:
            'Laravel Eloquent 底层就是 PDO：DB::table("users")->where("id", $id)->first() 自动预处理。' +
            '原生子句：DB::select("SELECT * FROM users WHERE id = ?", [$id])。',
        },
        // ---------------- 第 2 节：文件读写 ----------------
        {
          id: 'php-ch7-l2',
          title: '文件读写',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            'PHP 文件操作函数丰富，从一行搞定的 file_get_contents/file_put_contents 到精细控制的 fopen/fread/fwrite，覆盖配置、日志、缓存等场景。\n\n' +
            '## 基本语法\n\n' +
            '一次性读写：`$content = file_get_contents($path);` 读全文；`file_put_contents($path, $data, FILE_APPEND);` 写入（FILE_APPEND 追加）。\n\n' +
            '句柄式读写：`$f = fopen($path, "r");` 打开（r 读、w 写清空、a 追加、w+ 读写）。' +
            '`fgets($f)` 读一行，`fread($f, $len)` 读指定字节，`fwrite($f, $data)` 写入，`fclose($f)` 关闭。\n\n' +
            '判断存在与权限：`file_exists($path)`、`is_readable($path)`、`is_writable($path)`。' +
            '文件信息：`filesize($path)`、`filemtime($path)`（修改时间戳）。\n\n' +
            '读入数组：`$lines = file($path, FILE_IGNORE_NEW_LINES);` 每行一个元素。\n\n' +
            '目录操作：`mkdir($path, 0755, true)` 第三参数 true 递归创建；`scandir($path)` 列出文件；`unlink($path)` 删除文件。\n\n' +
            '## 示例演示\n\n' +
            '见下方示例：配置读写、日志追加、CSV 解析。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. **忘记 fclose**：句柄不关闭会占用资源，大循环里会耗尽句柄数。建议用 try/finally 或 file_get_contents 替代。\n' +
            '2. **并发写入覆盖**：多进程同时 file_put_contents 会互相覆盖，需加 LOCK_EX：`file_put_contents($path, $data, LOCK_EX);`。\n' +
            '3. **路径注入**：用户输入拼路径可能读到任意文件，必须校验 basename 或用 realpath 检查是否在允许目录内。\n' +
            '4. **大小写敏感**：Windows 文件系统大小写不敏感，Linux 敏感，跨平台代码要统一命名。\n' +
            '5. **换行符**：PHP_EOL 是跨平台换行符，文本文件建议用它而非硬编码 \\n。\n\n' +
            '## 真实场景应用\n\n' +
            '日志：`file_put_contents($logPath, date("c") . " " . $msg . PHP_EOL, FILE_APPEND | LOCK_EX);`。' +
            '配置缓存：`file_put_contents($cachePath, "<?php return " . var_export($config, true) . ";");`。' +
            'CSV 导出：`$f = fopen("php://output", "w"); fputcsv($f, $row);` 直接输出到浏览器。\n\n' +
            '## 小结\n\n' +
            '小文件用 file_get_contents/file_put_contents 一行搞定；大文件或流式用 fopen 句柄；' +
            '并发写加 LOCK_EX，路径务必校验防穿越攻击。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习 JSON 处理：json_encode/json_decode、JSON_UNESCAPED_UNICODE、错误处理。',
          examples: [
            {
              title: 'file_get_contents / file_put_contents',
              code: `<?php
$path = sys_get_temp_dir() . "/php_demo.txt";

// 写入
file_put_contents($path, "line1\\nline2\\nline3\\n");

// 读取全部
echo file_get_contents($path);

// 追加
file_put_contents($path, "line4\\n", FILE_APPEND);
echo "---after append---\\n";
echo file_get_contents($path);

// 按行读入数组
$lines = file($path, FILE_IGNORE_NEW_LINES);
echo "lines: " . count($lines) . "\\n";
echo "first: " . $lines[0];

unlink($path);`,
              explanation:
                'file_put_contents 默认覆盖，FILE_APPEND 追加。file() 按行读入数组，FILE_IGNORE_NEW_LINES 去掉行尾换行。unlink 删除文件。',
            },
            {
              title: 'fopen / fwrite / fgets',
              code: `<?php
$path = sys_get_temp_dir() . "/php_log.txt";

// 写模式
$f = fopen($path, "w");
fwrite($f, "first log\\n");
fwrite($f, "second log\\n");
fclose($f);

// 读模式逐行
$f = fopen($path, "r");
while (($line = fgets($f)) !== false) {
    echo "read: " . $line;
}
fclose($f);

echo "size: " . filesize($path) . " bytes\\n";
echo "exists: " . (file_exists($path) ? "yes" : "no");
unlink($path);`,
              explanation:
                'fopen 返回资源句柄，"w" 清空写、"r" 读、"a" 追加。fgets 每次读一行到换行符。读写完务必 fclose。',
            },
            {
              title: '目录操作与递归创建',
              code: `<?php
$base = sys_get_temp_dir() . "/php_dir_demo";
$deep = $base . "/a/b/c";

// 递归创建
mkdir($deep, 0755, true);
file_put_contents($deep . "/file.txt", "hello");

// 列出目录
$entries = scandir($base);
foreach ($entries as $e) {
    if ($e === "." || $e === "..") continue;
    echo $e . "\\n";
}

echo "is dir: " . (is_dir($deep) ? "yes" : "no") . "\\n";
echo "file: " . file_get_contents($deep . "/file.txt");

// 清理
unlink($deep . "/file.txt");
rmdir($deep); rmdir($base . "/a/b"); rmdir($base . "/a"); rmdir($base);`,
              explanation:
                'mkdir 第三参数 true 递归创建多层目录。scandir 返回目录条目数组（含 . 和 ..）。rmdir 只能删空目录。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '把字符串 hello 写入临时文件并读回。',
              starter_code: `<?php
$path = sys_get_temp_dir() . "/ex.txt";
___($path, "hello");
echo file_get_contents($path);
unlink($path);`,
              expected_output: 'hello',
              hints: [
                '写入文件的函数名',
                'file_put_contents($path, $data)',
                '答案: file_put_contents',
              ],
            },
            {
              type: 'output-match',
              prompt: '以追加模式写入两行，统计最终字节数。',
              starter_code: `<?php
$path = sys_get_temp_dir() . "/ex2.txt";
file_put_contents($path, "ab");
file_put_contents($path, "cd", ___);
echo filesize($path);
unlink($path);`,
              expected_output: '4',
              hints: [
                '追加写入的标志常量',
                'FILE_APPEND',
                '答案: FILE_APPEND',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 fopen 打开文件读模式并读取第一行。',
              starter_code: `<?php
$path = sys_get_temp_dir() . "/ex3.txt";
file_put_contents($path, "hello\\nworld\\n");
$f = fopen($path, "___");
$line = fgets($f);
fclose($f);
echo trim($line);
unlink($path);`,
              expected_output: 'hello',
              hints: [
                '只读模式字符串',
                'fopen 第二参数 "r" 表示只读',
                '答案: r',
              ],
            },
          ],
          realWorldScenario:
            'Monolog 日志库底层：StreamHandler 用 fopen + fwrite 加 LOCK_EX 写日志。' +
            'Laravel 文件缓存：file_put_contents($path, serialize($data), LOCK_EX)。',
        },
        // ---------------- 第 3 节：JSON 处理 ----------------
        {
          id: 'php-ch7-l3',
          title: 'JSON 处理',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            'JSON 是现代 Web API 的事实标准格式。PHP 内置 json_encode / json_decode 两个核心函数，支持对象、数组、嵌套结构与 Unicode。\n\n' +
            '## 基本语法\n\n' +
            '编码：`$json = json_encode($data);` PHP 数组/对象 → JSON 字符串。默认中文会被转义成 \\uXXXX，加 `JSON_UNESCAPED_UNICODE` 保留原文。' +
            '美化输出：`json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);`。\n\n' +
            '解码：`$data = json_decode($json, true);` 第二参数 true 返回关联数组，省略或 false 返回 stdClass 对象。\n\n' +
            '错误处理：`json_last_error()` 返回错误码（JSON_ERROR_NONE 表示无错），`json_last_error_msg()` 返回文字描述。\n\n' +
            '异常模式（PHP 7.3+）：`json_decode($json, true, 512, JSON_THROW_ON_ERROR);` 解码失败抛 JsonException。\n\n' +
            '## 示例演示\n\n' +
            '见下方示例：编码解码、Unicode 选项、错误处理。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. **json_decode 默认返回对象**：`$obj->name`，加 true 才是关联数组 `$arr["name"]`，二者不能混用。\n' +
            '2. **中文被 \\uXXXX 转义**：默认 encode 会把中文转成 \\uXXXX，必须加 JSON_UNESCAPED_UNICODE。\n' +
            '3. **失败时返回 null**：null 既可能是无效 JSON 也可能是合法的 "null" 字符串，需配合 json_last_error 判断。\n' +
            '4. **深度限制**：默认最大嵌套 512 层，超过报错，可用第三参数调整。\n' +
            '5. **浮点精度**：json_encode 对浮点数可能丢精度，金融场景需先转字符串。\n\n' +
            '## 真实场景应用\n\n' +
            'API 响应：`header("Content-Type: application/json"); echo json_encode($data, JSON_UNESCAPED_UNICODE);`。' +
            '配置文件：`config.json` + json_decode 读入，json_encode 写出。' +
            '缓存：`file_put_contents($cache, json_encode($data, JSON_PRETTY_PRINT));`。\n\n' +
            '## 小结\n\n' +
            'json_encode 编码（加 JSON_UNESCAPED_UNICODE 保留中文），json_decode 解码（true 返关联数组）。' +
            '生产代码用 JSON_THROW_ON_ERROR + try/catch 替代手动 json_last_error。\n\n' +
            '## 下节预告\n\n' +
            '下一章进入异常与安全：try/catch/finally、自定义异常、SQL 注入与 XSS 防护、密码哈希。',
          examples: [
            {
              title: '编码与解码',
              code: `<?php
$data = [
    "name" => "Alice",
    "age" => 30,
    "tags" => ["admin", "user"],
    "meta" => ["active" => true],
];

// 编码
$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
echo $json . "\\n\\n";

// 解码为关联数组
$back = json_decode($json, true);
echo $back["name"] . "\\n";
echo $back["tags"][0] . "\\n";
echo ($back["meta"]["active"] ? "active" : "inactive");`,
              explanation:
                'json_encode 把 PHP 数组转 JSON 字符串，JSON_PRETTY_PRINT 美化缩进。json_decode 第二参数 true 返回关联数组便于用 [] 访问。',
            },
            {
              title: '中文保留与对象解码',
              code: `<?php
$arr = ["name" => "张三", "city" => "北京"];

// 默认中文会被 \\uXXXX 转义
echo "default: " . json_encode($arr) . "\\n";
// 加 JSON_UNESCAPED_UNICODE 保留原文
echo "unicode: " . json_encode($arr, JSON_UNESCAPED_UNICODE) . "\\n";

// 解码为对象
$obj = json_decode(json_encode($arr, JSON_UNESCAPED_UNICODE));
echo "obj name: " . $obj->name;`,
              explanation:
                '默认 json_encode 把中文字符转成 \\uXXXX 转义序列。加 JSON_UNESCAPED_UNICODE 后保留 UTF-8 原文。json_decode 不传 true 返回 stdClass 对象，用 -> 访问。',
            },
            {
              title: '错误处理（异常模式）',
              code: `<?php
$bad = '{name: "Alice"}'; // JSON 必须用双引号包键，这是无效 JSON

// 旧式：手动检查错误
$decoded = json_decode($bad, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo "old way: " . json_last_error_msg() . "\\n";
}

// 新式：抛异常（PHP 7.3+）
try {
    json_decode($bad, true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    echo "exception: " . $e->getMessage();
}`,
              explanation:
                '无效 JSON 时 json_decode 返回 null 并设置 json_last_error。JSON_THROW_ON_ERROR 让解码失败抛 JsonException，更符合现代异常处理风格。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '把数组编码为 JSON 字符串（保留中文）。',
              starter_code: `<?php
$arr = ["name" => "张三"];
echo json_encode($arr, ___);`,
              expected_output: '{"name":"张三"}',
              hints: [
                '保留中文 Unicode 的常量',
                'JSON_UNESCAPED_UNICODE',
                '答案: JSON_UNESCAPED_UNICODE',
              ],
            },
            {
              type: 'output-match',
              prompt: '把 JSON 字符串解码为关联数组并取 name 字段。',
              starter_code: `<?php
$json = '{"name":"Bob","age":20}';
$arr = json_decode($json, ___);
echo $arr["name"];`,
              expected_output: 'Bob',
              hints: [
                '第二参数决定返回关联数组',
                'json_decode($json, true) 返回关联数组',
                '答案: true',
              ],
            },
            {
              type: 'output-match',
              prompt: '判断 JSON 解码是否出错，错误码等于 JSON_ERROR_NONE 表示无错。',
              starter_code: `<?php
json_decode("{bad}");
if (json_last_error() === JSON___) {
    echo "ok";
} else {
    echo "error: " . json_last_error_msg();
}`,
              expected_output: 'error: Syntax error',
              hints: [
                '无错误常量名',
                'JSON_ERROR_NONE',
                '答案: _ERROR_NONE',
              ],
            },
          ],
          realWorldScenario:
            'REST API：$response = ["code" => 0, "data" => $list, "msg" => "ok"]; return json_encode($response, JSON_UNESCAPED_UNICODE);。' +
            'Laravel response()->json($data) 底层就是 json_encode + JSON_UNESCAPED_UNICODE。',
        },
      ],
    },
    // ================================================================
    // 第 8 章：异常与安全
    // ================================================================
    {
      id: 'php-ch8',
      title: '异常与安全',
      order: 7,
      lessons: [
        // ---------------- 第 1 节：异常处理 ----------------
        {
          id: 'php-ch8-l1',
          title: '异常处理',
          order: 0,
          content_md:
            '## 概念介绍\n\n' +
            'PHP 异常（Exception）是面向对象的错误处理机制：throw 抛出，try/catch 捕获，finally 必执行。PHP 7+ 把多数致命错误转为 Error 异常可被捕获，PHP 8 进一步统一错误模型。\n\n' +
            '## 基本语法\n\n' +
            '抛出：`throw new Exception("message", $code);`。\n' +
            '捕获：`try { ... } catch (Exception $e) { echo $e->getMessage(); }`。多 catch：`catch (Exception | RuntimeException $e)`。' +
            'finally：`finally { /* 总会执行 */ }`。\n\n' +
            '自定义异常：`class MyException extends Exception {}`，可加属性或方法。Exception 提供 getMessage()、getCode()、getFile()、getLine()、getTraceAsString()。\n\n' +
            '全局异常处理器：`set_exception_handler(function (Throwable $e) { ... });`，未捕获的异常会进入这里。\n\n' +
            '错误转异常：`set_error_handler(function ($no, $msg) { throw new ErrorException($msg, 0, $no); });` 让旧式错误也能用 try/catch。\n\n' +
            '## 示例演示\n\n' +
            '见下方示例：基础 try/catch、自定义异常、finally 执行顺序。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. **catch 顺序**：子类异常必须在前，父类 Exception 在后，否则父类会先匹配，子类 catch 永远不执行。\n' +
            '2. **吞掉异常**：空 catch 块 `catch (Exception $e) {}` 会掩盖错误，至少记日志或重新抛出。\n' +
            '3. **finally 总执行**：即使 try 里 return，finally 也会执行且能覆盖返回值。\n' +
            '4. **Error vs Exception**：TypeError、DivisionByZeroError 等继承 Error 而非 Exception，需 `catch (Throwable $e)` 才能同时捕获。\n' +
            '5. **throw 是语句**：PHP 8 前 `throw` 是语句不能用在表达式位置，PHP 8+ 可作表达式（如三元）。\n\n' +
            '## 真实场景应用\n\n' +
            'API 错误响应：`try { $user = $svc->getUser($id); } catch (UserNotFoundException $e) { http_response_code(404); echo json_encode(["msg" => $e->getMessage()]); }`。' +
            '数据库回滚：`catch (Exception $e) { $pdo->rollBack(); throw $e; }`。\n\n' +
            '## 小结\n\n' +
            '异常用 throw 抛、try/catch/finally 处理；自定义异常继承 Exception；PHP 7+ 用 Throwable 接口同时捕获 Exception 和 Error；' +
            '生产代码必须设全局异常处理器避免裸奔。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习安全实践：SQL 注入、XSS、CSRF、文件上传校验。',
          examples: [
            {
              title: '基础 try/catch/finally',
              code: `<?php
function divide($a, $b) {
    if ($b === 0) {
        throw new DivisionByZeroError("cannot divide by zero");
    }
    return $a / $b;
}

try {
    echo divide(10, 2) . "\\n";
    echo divide(10, 0);
} catch (DivisionByZeroError $e) {
    echo "caught: " . $e->getMessage() . "\\n";
} finally {
    echo "finally runs\\n";
}

echo "after try";`,
              explanation:
                'throw 抛出异常，catch 按类型匹配。finally 无论是否抛异常都会执行，常用于资源释放。这里 DivisionByZeroError 是 PHP 内置 Error 子类。',
            },
            {
              title: '自定义异常与多 catch',
              code: `<?php
class ValidationError extends Exception {}
class AuthError extends Exception {}

function login($user, $pass) {
    if (empty($user)) throw new ValidationError("user empty");
    if ($pass !== "secret") throw new AuthError("bad password");
    return "welcome";
}

try {
    echo login("", "x");
} catch (ValidationError $e) {
    echo "validation: " . $e->getMessage() . "\\n";
} catch (AuthError $e) {
    echo "auth: " . $e->getMessage() . "\\n";
} catch (Exception $e) {
    echo "other: " . $e->getMessage() . "\\n";
}

try {
    login("alice", "wrong");
} catch (ValidationError | AuthError $e) {
    echo "combined: " . $e->getMessage();
}`,
              explanation:
                '自定义异常继承 Exception 形成层次。catch 按子类到父类顺序匹配。PHP 8 支持多类型 catch（用 | 分隔）。最后兜底 catch (Exception) 捕获其他。',
            },
            {
              title: '全局异常处理器',
              code: `<?php
set_exception_handler(function (Throwable $e) {
    echo "global handler: " . get_class($e) . " - " . $e->getMessage() . "\\n";
});

// 未捕获的异常进入全局处理器
throw new RuntimeException("something went wrong");

echo "this line never runs";`,
              explanation:
                'set_exception_handler 注册未捕获异常的兜底处理器，避免 PHP 默认的致命错误输出。生产环境常在这里记录日志 + 返回 500 JSON。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '抛出一个 Exception 并捕获，输出其消息。',
              starter_code: `<?php
try {
    ___ new Exception("boom");
} catch (Exception $e) {
    echo $e->getMessage();
}`,
              expected_output: 'boom',
              hints: [
                '抛出异常的关键字',
                'throw new Exception(...)',
                '答案: throw',
              ],
            },
            {
              type: 'output-match',
              prompt: '无论是否异常 finally 块都应执行，输出 done。',
              starter_code: `<?php
try {
    echo "try\\n";
} catch (Exception $e) {
    echo "catch\\n";
} ___ {
    echo "done";
}`,
              expected_output: 'try\ndone',
              hints: [
                '总会执行的块关键字',
                'finally 块在 try/catch 后总会执行',
                '答案: finally',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义自定义异常 ValidationError 继承 Exception。',
              starter_code: `<?php
class ValidationError ___ Exception {}

try {
    throw new ValidationError("bad input");
} catch (ValidationError $e) {
    echo $e->getMessage();
}`,
              expected_output: 'bad input',
              hints: [
                '类继承关键字',
                'class X extends Y',
                '答案: extends',
              ],
            },
          ],
          realWorldScenario:
            'Laravel 全局异常处理器 App\\Exceptions\\Handler::render 把异常转 JSON 响应。' +
            '业务层：throw new OrderNotFoundException("order #123 missing") 由框架映射到 404。',
        },
        // ---------------- 第 2 节：安全实践 ----------------
        {
          id: 'php-ch8-l2',
          title: '安全实践',
          order: 1,
          content_md:
            '## 概念介绍\n\n' +
            'Web 应用安全是 PHP 开发的重中之重。常见攻击：SQL 注入、XSS（跨站脚本）、CSRF（跨站请求伪造）、文件上传攻击、会话劫持。对应防御：预处理语句、输出转义、CSRF token、上传校验、HTTPS+HttpOnly cookie。\n\n' +
            '## 基本语法\n\n' +
            'SQL 注入防御：永远用 PDO 预处理，`$stmt = $pdo->prepare("SELECT * FROM u WHERE id = ?"); $stmt->execute([$id]);`，绝不拼接 SQL。\n\n' +
            'XSS 防御：输出到 HTML 时转义 `echo htmlspecialchars($userInput, ENT_QUOTES, "UTF-8");`，把 < > " \' & 转成实体。' +
            'JSON 响应设 `header("Content-Type: application/json");` 防止内容嗅探。\n\n' +
            'CSRF 防御：表单加 token `$_SESSION["csrf"] = bin2hex(random_bytes(32));`，提交时校验 `if (!hash_equals($_SESSION["csrf"], $_POST["csrf"])) die("bad csrf");`。\n\n' +
            '文件上传：用 `is_uploaded_file($_FILES["f"]["tmp_name"])` + `getimagesize()` 校验真实类型，绝不信任 `$_FILES["f"]["name"]` 扩展名。' +
            '存储路径用生成名，原始名只作展示。\n\n' +
            '会话安全：`session_set_cookie_params(["httponly" => true, "secure" => true, "samesite" => "Strict"]); session_start();`。' +
            '登录后 `session_regenerate_id(true);` 防固定攻击。\n\n' +
            '## 示例演示\n\n' +
            '见下方示例：XSS 转义、CSRF token、上传校验。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. **只在数据库边界转义**：mysqli_real_escape_string 不能防 XSS，htmlspecialchars 不能防 SQL 注入，各管一段。\n' +
            '2. **htmlspecialchars 默认不转单引号**：必须传 ENT_QUOTES 才转 \' 和 "。\n' +
            '3. **csrf token 用 == 比较**：可被时序攻击，必须用 hash_equals 常数时间比较。\n' +
            '4. **上传文件名信任**：用户可把 evil.php 改名 evil.jpg，必须用 getimagesize 或 finfo 检测真实 MIME。\n' +
            '5. **eval / system 用户输入**：永远不要把用户输入传给 eval、exec、system、include，远程文件包含更是灾难。\n\n' +
            '## 真实场景应用\n\n' +
            'Blade 模板 `{{ $userInput }}` 自动 htmlspecialchars 转义，`{!! !!}` 才是原始输出。' +
            'Laravel CSRF：`@csrf` 指令生成 hidden input，VerifyCsrfToken 中间件校验。' +
            '上传：`$path = $request->file("avatar")->store("avatars", "public");` 自动生成唯一文件名。\n\n' +
            '## 小结\n\n' +
            '安全三板斧：SQL 用预处理、输出用 htmlspecialchars(ENT_QUOTES)、表单用 CSRF token。' +
            '文件上传检测真实 MIME，会话 cookie 加 httponly/secure/samesite。\n\n' +
            '## 下节预告\n\n' +
            '下一节学习密码与加密：password_hash、password_verify、random_bytes、openssl_encrypt。',
          examples: [
            {
              title: 'XSS 转义',
              code: `<?php
$evil = '<script>alert("xss")</script>';

// 不转义（危险！实际输出会执行脚本）
echo "raw: " . $evil . "\\n";

// 转义后安全
echo "safe: " . htmlspecialchars($evil, ENT_QUOTES, "UTF-8");`,
              explanation:
                'htmlspecialchars 把 < > " \' & 转成 HTML 实体，浏览器不会再当成标签执行。ENT_QUOTES 必加，否则单引号不转义仍可能被注入。',
            },
            {
              title: 'CSRF token 生成与校验',
              code: `<?php
session_start();

// 生成 token（一次性）
if (empty($_SESSION["csrf"])) {
    $_SESSION["csrf"] = bin2hex(random_bytes(32));
}

// 模拟表单提交
$submittedToken = $_SESSION["csrf"]; // 正常情况从 $_POST["csrf"] 取

// 校验（常数时间比较防时序攻击）
if (hash_equals($_SESSION["csrf"], $submittedToken)) {
    echo "csrf ok\\n";
} else {
    echo "csrf fail\\n";
}

// 错误 token
if (!hash_equals($_SESSION["csrf"], "wrong")) {
    echo "wrong token rejected";
}`,
              explanation:
                'random_bytes(32) 生成 32 字节强随机数，bin2hex 转 64 字符 hex。hash_equals 常数时间比较，防止通过响应耗时推测 token。',
            },
            {
              title: '文件上传校验',
              code: `<?php
// 模拟一个上传文件（实际从 $_FILES 取）
$tmpPath = sys_get_temp_dir() . "/upload_test.png";
// PNG 文件头
$pngHeader = chr(137) . "PNG" . chr(13) . chr(10) . chr(26) . chr(10);
file_put_contents($tmpPath, $pngHeader . "fake png body");

// 校验真实类型（不信任 $_FILES["name"] 的扩展名）
$finfo = new finfo(FILEINFO_MIME_TYPE);
$realMime = $finfo->file($tmpPath);
echo "real mime: " . $realMime . "\\n";

$allowed = ["image/png", "image/jpeg", "image/gif"];
if (in_array($realMime, $allowed, true)) {
    echo "upload allowed";
} else {
    echo "upload rejected";
}

unlink($tmpPath);`,
              explanation:
                'finfo 通过文件魔术字节检测真实 MIME，比信任扩展名安全得多。即使 evil.php 改名 evil.jpg，finfo 仍能识别为 application/x-php。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '把用户输入的 <script> 标签转义为 HTML 实体。',
              starter_code: `<?php
$input = '<script>x</script>';
echo ___($input, ENT_QUOTES, "UTF-8");`,
              expected_output: '&lt;script&gt;x&lt;/script&gt;',
              hints: [
                'HTML 转义函数名',
                'htmlspecialchars($str, ENT_QUOTES, "UTF-8")',
                '答案: htmlspecialchars',
              ],
            },
            {
              type: 'output-match',
              prompt: '生成 32 字节强随机数并转 hex（输出长度应为 64）。',
              starter_code: `<?php
$bytes = random_bytes(32);
echo strlen(bin2hex($bytes));`,
              expected_output: '64',
              hints: [
                '提示：random_bytes(32) 返回 32 字节',
                'bin2hex 把每字节转 2 个 hex 字符',
                '32 字节 → 64 hex 字符，答案直接输出 64',
              ],
            },
            {
              type: 'output-match',
              prompt: '用常数时间比较校验两个 csrf token 是否相等。',
              starter_code: `<?php
$a = "token123";
$b = "token123";
echo ___($a, $b) ? "match" : "no";`,
              expected_output: 'match',
              hints: [
                '常数时间比较函数',
                'hash_equals($known, $user) 防时序攻击',
                '答案: hash_equals',
              ],
            },
          ],
          realWorldScenario:
            'Laravel Blade {{ $var }} 自动调用 htmlspecialchars(ENT_QUOTES)。' +
            'Laravel CSRF：app/Http/Middleware/VerifyCsrfToken.php 用 hash_equals 校验 _token 字段。',
        },
        // ---------------- 第 3 节：密码与加密 ----------------
        {
          id: 'php-ch8-l3',
          title: '密码与加密',
          order: 2,
          content_md:
            '## 概念介绍\n\n' +
            '密码存储与加密是安全的最后一道防线。PHP 内置 password_hash（bcrypt/argon2）+ password_verify 是密码存储的标准方案；random_bytes 生成密码学安全随机数；openssl_encrypt 提供 AES 对称加密。\n\n' +
            '## 基本语法\n\n' +
            '密码哈希：`$hash = password_hash($plain, PASSWORD_DEFAULT);`（PHP 8 默认 bcrypt，可配 argon2）。' +
            '校验：`password_verify($plain, $hash)` 返回 bool。' +
            '需要重哈希：`password_needs_rehash($hash, PASSWORD_DEFAULT)` 检测是否该升级算法。\n\n' +
            '随机数：`$token = bin2hex(random_bytes(32));` 64 字符 hex。`random_int($min, $max)` 生成安全随机整数（替代 mt_rand）。\n\n' +
            'AES 加密：`$cipher = "aes-256-gcm"; $iv = random_bytes(openssl_cipher_iv_length($cipher));` ' +
            '`$tag = ""; $ct = openssl_encrypt($plain, $cipher, $key, OPENSSL_RAW_DATA, $iv, $tag);` ' +
            '解密：`$pt = openssl_decrypt($ct, $cipher, $key, OPENSSL_RAW_DATA, $iv, $tag);`。\n\n' +
            '## 示例演示\n\n' +
            '见下方示例：密码哈希、随机 token、AES-GCM 加解密。\n\n' +
            '## 常见陷阱与注意事项\n\n' +
            '1. **永远不要用 md5/sha1 存密码**：太快易被暴力破解，且无盐。必须用 password_hash（自带盐与算法标识）。\n' +
            '2. **不要自己加盐**：password_hash 内部自动加盐，手动盐反而容易出错。\n' +
            '3. **AES 必须用 GCM/CCM 模式**：CBC 不验证完整性，可能被填充攻击。GCM 模式输出 tag 防篡改。\n' +
            '4. **IV 不能复用**：每次加密必须新生成 IV，IV 可与密文一起存（不需保密）。\n' +
            '5. **密钥管理**：密钥不能写代码里，应放环境变量或 KMS，泄露即全部失守。\n\n' +
            '## 真实场景应用\n\n' +
            '注册：`$hash = password_hash($_POST["password"], PASSWORD_DEFAULT); INSERT INTO users (email, pass_hash) VALUES (?, ?)`。' +
            '登录：`SELECT pass_hash FROM users WHERE email = ?; if (!password_verify($input, $hash)) die("bad credentials");`。' +
            '记住我 token：`$token = bin2hex(random_bytes(32));` 存哈希到 DB，cookie 存原值。' +
            'API token：`$key = bin2hex(random_bytes(32));`。\n\n' +
            '## 小结\n\n' +
            '密码用 password_hash + password_verify，永远不用 md5/sha1。' +
            '随机数用 random_bytes/random_int，不用 rand/mt_rand。' +
            '加密用 openssl_encrypt 选 GCM 模式，每次新 IV，密钥放环境变量。\n\n' +
            '## 下节预告\n\n' +
            '恭喜！你已完成 PHP 入门到精通全部 8 章。接下来可以尝试用 Laravel 或 Symfony 框架构建完整 Web 应用，' +
            '或深入阅读 PHP 官方手册（php.net/manual）巩固细节。',
          examples: [
            {
              title: '密码哈希与校验',
              code: `<?php
$plain = "my secret password";

// 哈希（每次结果不同，因为盐不同）
$hash = password_hash($plain, PASSWORD_DEFAULT);
echo "hash: " . $hash . "\\n";
echo "algo: " . password_get_info($hash)["algoName"] . "\\n";

// 校验
echo "verify correct: " . (password_verify($plain, $hash) ? "yes" : "no") . "\\n";
echo "verify wrong: " . (password_verify("wrong", $hash) ? "yes" : "no");`,
              explanation:
                'password_hash 自带盐和算法标识，存库的就是 $2y$... 字符串。password_verify 自动从 hash 里取出盐和算法重新计算比对，无需关心盐。',
            },
            {
              title: '安全随机数',
              code: `<?php
// 随机字节
$bytes = random_bytes(16);
echo "hex: " . bin2hex($bytes) . "\\n";
echo "len: " . strlen(bin2hex($bytes)) . "\\n";

// 随机整数（含两端）
$dice = random_int(1, 6);
echo "dice: " . $dice . "\\n";

// 生成 API token
$token = bin2hex(random_bytes(32));
echo "token len: " . strlen($token);

// 验证 token 在合理范围
if (strlen($token) === 64) {
    echo " (ok)";
}`,
              explanation:
                'random_bytes 是密码学安全随机源，比 mt_rand/rand 更不可预测。random_int 是安全版 rand。生成 token / 密码重置链接必须用这两个。',
            },
            {
              title: 'AES-256-GCM 加解密',
              code: `<?php
$plain = "top secret message";
$key = str_repeat("k", 32); // 256 位密钥（实际应从环境变量读）
$cipher = "aes-256-gcm";

// 加密
$iv = random_bytes(openssl_cipher_iv_length($cipher));
$tag = "";
$ct = openssl_encrypt($plain, $cipher, $key, OPENSSL_RAW_DATA, $iv, $tag);
echo "ct (b64): " . base64_encode($ct) . "\\n";
echo "tag (b64): " . base64_encode($tag) . "\\n";

// 解密
$pt = openssl_decrypt($ct, $cipher, $key, OPENSSL_RAW_DATA, $iv, $tag);
echo "decrypted: " . $pt;`,
              explanation:
                'GCM 模式输出密文 + tag，解密时用 tag 验证完整性。IV 每次新生成（不需保密，可与密文一起存），密钥必须保密且 32 字节（256 位）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用默认算法哈希密码 "abc123"。',
              starter_code: `<?php
$hash = ___("abc123", PASSWORD_DEFAULT);
echo password_verify("abc123", $hash) ? "ok" : "no";`,
              expected_output: 'ok',
              hints: [
                '密码哈希函数名',
                'password_hash($plain, PASSWORD_DEFAULT)',
                '答案: password_hash',
              ],
            },
            {
              type: 'output-match',
              prompt: '校验明文与哈希是否匹配。',
              starter_code: `<?php
$hash = password_hash("secret", PASSWORD_DEFAULT);
echo ___("secret", $hash) ? "match" : "no";`,
              expected_output: 'match',
              hints: [
                '密码校验函数名',
                'password_verify($plain, $hash) 返回 bool',
                '答案: password_verify',
              ],
            },
            {
              type: 'output-match',
              prompt: '生成 16 字节密码学安全随机数并转 hex（输出长度 32）。',
              starter_code: `<?php
echo strlen(bin2hex(random___(16)));`,
              expected_output: '32',
              hints: [
                '安全随机字节函数',
                'random_bytes($n) 返回 n 字节',
                '答案: bytes',
              ],
            },
          ],
          realWorldScenario:
            'Laravel Hash::make($password) 底层就是 password_hash(PASSWORD_BCRYPT)。' +
            'API token 生成：$token = Str::random(60)，底层 bin2hex(random_bytes(30))。' +
            '加密：Crypt::encryptString($value) 用 AES-256-CBC + HMAC，封装了 openssl。',
        },
      ],
    },
  ],
}


