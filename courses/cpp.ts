import type { CourseContent } from './types'

/**
 * C/C++ 全栈编程课程（8 章，32 节课）
 *
 * 先学 C 语言基础（第 1-4 章），再过渡到 C++ 面向对象与现代特性（第 5-8 章）。
 * C 代码通过 OnlineCompiler.io 的 c-gcc 编译器执行，C++ 通过 cpp-gcc 执行。
 * C 代码用 printf 输出，C++ 用 std::cout 或 printf。
 * 每段代码必须是完整可编译的程序（含 #include 和 int main）。
 */
export const cppCourse: CourseContent = {
  id: 'course-cpp',
  slug: 'cpp',
  title: 'C/C++ 全栈编程',
  description:
    '从 C 语言底层的指针与内存管理起步，逐步过渡到 C++ 面向对象编程与 STL 模板，'
    + '最终掌握现代 C++ 的智能指针、Lambda 与异常处理，写出生产级代码。',
  language: 'cpp',
  difficulty: 'intermediate',
  chapters: [
    // ================================================================
    // 第 1 章：C 语言入门
    // ================================================================
    {
      id: 'cpp-ch1',
      title: 'C 语言入门',
      order: 0,
      lessons: [
        {
          id: 'cpp-ch1-l1',
          title: '第一个 C 程序',
          order: 0,
          content_md:
            'C 语言诞生于 1972 年，由 Dennis Ritchie 在贝尔实验室创建。'
            + '它是一门编译型语言，代码需要通过编译器（如 GCC）翻译成机器码才能执行。'
            + 'C 语言以简洁、高效、接近硬件著称，至今仍是操作系统、嵌入式系统和数据库引擎的首选语言。\n\n'
            + '每个 C 程序都从 `main` 函数开始执行。`#include <stdio.h>` 是预处理指令，'
            + '将标准输入输出头文件引入程序，使我们能够使用 `printf` 和 `scanf` 等函数。'
            + '`main` 函数返回 `int`，`return 0` 表示程序正常结束。\n\n'
            + '`printf` 是格式化输出函数，`"Hello\\n"` 是字符串字面量，`\\n` 表示换行。'
            + 'C 语言中每条语句以分号 `;` 结尾，花括号 `{}` 定义代码块。'
            + '注释用 `//`（单行）或 `/* */`（多行）。\n\n'
            + '编译 C 程序的典型命令是 `gcc hello.c -o hello`，然后运行 `./hello`。'
            + '在现代在线编译器中，这一过程自动完成，你只需关注代码逻辑。',
          examples: [
            {
              title: 'Hello World',
              code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
              explanation:
                '这是最经典的 C 程序。#include <stdio.h> 引入标准 I/O 库，'
                + 'main 是程序入口，printf 打印文本到屏幕，\\n 是换行符。'
                + 'return 0 告诉操作系统程序成功执行。',
            },
            {
              title: '多行输出与注释',
              code: '#include <stdio.h>\n\nint main() {\n    // 这是单行注释\n    /* 这是\n       多行注释 */\n    printf("第一行\\n");\n    printf("第二行\\n");\n    printf("第三行\\n");\n    return 0;\n}',
              explanation:
                '程序按顺序执行三条 printf 语句，每条输出一行文本。'
                + '注释不会被编译器处理，仅用于给程序员阅读。'
                + '良好的注释习惯是专业开发的基本要求。',
            },
            {
              title: '格式化输出',
              code: '#include <stdio.h>\n\nint main() {\n    printf("姓名: %s\\n", "小明");\n    printf("年龄: %d\\n", 20);\n    printf("身高: %.1f 米\\n", 1.75);\n    return 0;\n}',
              explanation:
                'printf 使用格式说明符：%s 输出字符串，%d 输出整数，'
                + '%f 输出浮点数（.1f 保留一位小数）。后续参数按顺序替换说明符。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '使用 printf 输出 "我爱C语言"（后面加换行）。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    printf(___);\n    return 0;\n}',
              expected_output: '我爱C语言',
              hints: [
                '字符串需要用双引号包裹，例如 "我爱C语言"',
                '换行用 \\n，放在字符串末尾：\\"我爱C语言\\n\\"',
                '完整答案："我爱C语言\\n"',
              ],
            },
            {
              type: 'output-match',
              prompt: '用两条 printf 语句分别输出 "C语言" 和 "C++语言"，各占一行。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    printf(___"\\n");\n    printf("C++语言\\n");\n    return 0;\n}',
              expected_output: 'C语言\nC++语言',
              hints: [
                '第一条 printf 的参数是 "C语言" 加上换行',
                '把 ___ 替换为 "C语言"',
                '注意双引号需要包含整个字符串',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 printf 格式化输出：姓名 "张三"，年龄 18。输出格式为 "张三 18"。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    printf("%s %d\\n", ___, 18);\n    return 0;\n}',
              expected_output: '张三 18',
              hints: [
                '%s 对应一个字符串参数',
                '把 ___ 替换为 "张三"',
                '完整写法：printf("%s %d\\n", "张三", 18);',
              ],
            },
          ],
          realWorldScenario:
            '在嵌入式系统固件开发中，C 语言是绝对主力。从智能手表到汽车 ECU，'
            + '底层固件的第一个功能往往就是通过串口输出调试信息——本质上就是 printf。'
            + '掌握 C 程序的基本结构和编译流程，是进入嵌入式和系统编程领域的第一步。',
        },
        {
          id: 'cpp-ch1-l2',
          title: '变量与数据类型',
          order: 1,
          content_md:
            'C 语言是静态类型语言，每个变量在使用前必须声明类型。'
            + '基本数据类型包括：`int`（整数，通常 4 字节）、`float`（单精度浮点，4 字节）、'
            + '`double`（双精度浮点，8 字节）、`char`（字符，1 字节）。\n\n'
            + '`sizeof` 运算符返回类型或变量占用的字节数，这在跨平台编程中非常重要——'
            + '不同平台上 `int` 可能是 2 或 4 字节。'
            + '类型修饰符 `short`、`long`、`signed`、`unsigned` 可以调整类型的范围和大小。\n\n'
            + '变量命名规则：以字母或下划线开头，可含字母、数字、下划线，区分大小写。'
            + 'C 语言习惯用小写加下划线（如 `student_age`），而 C++ 常用驼峰命名。\n\n'
            + '类型转换分为隐式（自动）和显式（强制）两种。隐式转换可能丢失精度，'
            + '如 `int i = 3.9` 会截断为 3。显式转换用 `(类型)值` 语法，如 `(int)3.9`。'
            + '理解类型系统是写出正确且高效 C 代码的基础。',
          examples: [
            {
              title: '基本类型声明',
              code: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    float pi = 3.14f;\n    double e = 2.71828;\n    char grade = \'A\';\n    printf("age=%d, pi=%.2f, e=%.5f, grade=%c\\n", age, pi, e, grade);\n    return 0;\n}',
              explanation:
                'int 存整数，float 和 double 存小数（double 精度更高），'
                + 'char 存单个字符（用单引号包裹）。printf 用 %d、%f、%c 分别输出这些类型。'
                + '注意 float 字面量后加 f，否则默认是 double。',
            },
            {
              title: 'sizeof 查看类型大小',
              code: '#include <stdio.h>\n\nint main() {\n    printf("int: %zu 字节\\n", sizeof(int));\n    printf("char: %zu 字节\\n", sizeof(char));\n    printf("double: %zu 字节\\n", sizeof(double));\n    return 0;\n}',
              explanation:
                'sizeof 返回类型占用的内存字节数。%zu 是专门用于 sizeof 返回值（size_t）的格式符。'
                + '在大多数 64 位系统上，int 占 4 字节，char 占 1 字节，double 占 8 字节。',
            },
            {
              title: '类型转换',
              code: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 3;\n    int div_int = a / b;\n    double div_double = (double)a / b;\n    printf("整数除法: %d\\n", div_int);\n    printf("浮点除法: %.2f\\n", div_double);\n    return 0;\n}',
              explanation:
                '10 / 3 整数除法结果为 3（截断小数）。'
                + '将 a 先转换为 double 再除，结果为 3.33。'
                + '这展示了隐式和显式类型转换的区别。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '声明 int 变量 x 赋值为 42，用 printf 输出它的值。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int x = ___;\n    printf("%d\\n", x);\n    return 0;\n}',
              expected_output: '42',
              hints: [
                '把 ___ 替换为整数 42',
                '不需要双引号，42 本身就是整数',
                '答案就是数字 42',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明 double 变量 price 赋值为 9.99，用 printf 保留两位小数输出。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    double price = ___;\n    printf("%.2f\\n", price);\n    return 0;\n}',
              expected_output: '9.99',
              hints: [
                '把 ___ 替换为 9.99',
                'double 类型的值不需要加后缀',
                '答案就是 9.99',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明 char 变量 letter 赋值为字母 G，用 printf 的 %c 格式输出。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    char letter = ___;\n    printf("%c\\n", letter);\n    return 0;\n}',
              expected_output: 'G',
              hints: [
                'char 类型的值用单引号包裹',
                '把 ___ 替换为 \'G\'',
                '注意是单引号不是双引号',
              ],
            },
          ],
          realWorldScenario:
            '在系统编程中，理解数据类型大小至关重要。例如网络协议中，'
            + '数据包的字段长度是固定的——一个 uint16_t 端口号必须精确占 2 字节。'
            + '如果误用 int（可能 4 字节），会导致协议解析错误。'
            + '数据库引擎、网络协议栈和编译器前端都依赖精确的类型控制。',
        },
        {
          id: 'cpp-ch1-l3',
          title: 'printf 与 scanf 输入输出',
          order: 2,
          content_md:
            '`printf` 是 C 语言最核心的输出函数，全称 "print formatted"。'
            + '它通过格式说明符将各种类型的数据格式化为字符串输出到标准输出（stdout）。'
            + '常用说明符：`%d`（整数）、`%f`（浮点）、`%c`（字符）、`%s`（字符串）、'
            + '`%x`（十六进制）、`%%`（百分号本身）。\n\n'
            + '`scanf` 是对应的输入函数，从标准输入（stdin）读取数据。'
            + '注意 scanf 的参数需要传变量的**地址**（用 `&` 取地址），'
            + '这是因为 C 语言函数参数是值传递，只有传地址才能修改原变量。'
            + '这是理解指针的第一个入口。\n\n'
            + '格式说明符还可以控制宽度和精度：`%5d` 表示至少 5 字符宽（右对齐），'
            + '`%-5d` 左对齐，`%.2f` 保留 2 位小数，`%05d` 用零填充。'
            + '这些在生成表格、报表时非常实用。\n\n'
            + 'C 语言的输入输出使用缓冲区机制，`\\n` 会刷新 stdout 缓冲区。'
            + '在调试时如果没有看到输出，可能是因为缓冲区未刷新——可以用 `fflush(stdout)` 强制刷新。',
          examples: [
            {
              title: 'printf 格式化输出',
              code: '#include <stdio.h>\n\nint main() {\n    int n = 42;\n    double f = 3.14159;\n    char c = \'Z\';\n    printf("整数: %d, 宽度5: %5d, 补零: %05d\\n", n, n, n);\n    printf("浮点: %.2f, 宽度10: %10.2f\\n", f, f);\n    printf("字符: %c, ASCII: %d\\n", c, c);\n    printf("十六进制: %x\\n", n);\n    return 0;\n}',
              explanation:
                '展示了 printf 的常用格式控制：%5d 右对齐占 5 位，%05d 用零填充，'
                + '%.2f 保留两位小数，%x 输出十六进制。%c 输出字符，%d 输出字符的 ASCII 码值。',
            },
            {
              title: 'scanf 读取输入',
              code: '#include <stdio.h>\n\nint main() {\n    int age;\n    char name[20];\n    printf("请输入姓名和年龄: ");\n    scanf("%s %d", name, &age);\n    printf("你好, %s! 你 %d 岁。\\n", name, age);\n    return 0;\n}',
              explanation:
                'scanf 读取用户输入。name 是数组，数组名本身就是地址，所以不加 &。'
                + 'age 是普通变量，需要用 &age 传地址。这是 C 语言中"数组名即指针"的体现。',
            },
            {
              title: '多格式输出',
              code: '#include <stdio.h>\n\nint main() {\n    printf("%-10s%-10s%-10s\\n", "姓名", "年龄", "成绩");\n    printf("%-10s%-10d%-10.1f\\n", "小明", 20, 95.5);\n    printf("%-10s%-10d%-10.1f\\n", "小红", 21, 88.0);\n    return 0;\n}',
              explanation:
                '%-10s 左对齐占 10 个字符宽度。这在打印对齐表格时非常有用。'
                + '注意中文字符的宽度可能与英文不同，对齐效果可能略有差异。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 printf 输出整数 255 的十六进制形式（小写字母 ff）。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int n = 255;\n    printf("%x\\n", ___);\n    return 0;\n}',
              expected_output: 'ff',
              hints: [
                '%x 格式符需要对应一个 int 变量',
                '把 ___ 替换为变量名 n',
                '答案就是 n',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 printf 输出 3.14159，保留 3 位小数。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159;\n    printf("%.___f\\n", pi);\n    return 0;\n}',
              expected_output: '3.142',
              hints: [
                '格式符 %.Nf 中 N 表示保留几位小数',
                '把 ___ 替换为数字 3',
                '完整格式符是 %.3f',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明整数 42 和 7，输出它们的整数除法结果和浮点除法结果（保留2位小数），格式为 "6 6.00"。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int a = 42, b = 7;\n    printf("%d %.2f\\n", a / b, ___);\n    return 0;\n}',
              expected_output: '6 6.00',
              hints: [
                '整数除法 a/b 结果为 6',
                '浮点除法需要强制转换类型',
                '把 ___ 替换为 (double)a / b',
              ],
            },
          ],
          realWorldScenario:
            '命令行工具大量使用 printf/scanf 进行用户交互。例如 git 的子命令、'
            + 'Linux 的 coreutils（ls、cp、dd）都通过格式化输出向用户展示信息。'
            + '在开发 CLI 工具时，熟练掌握格式化输出能让你的程序输出专业、清晰的报表和日志。',
        },
        {
          id: 'cpp-ch1-l4',
          title: '运算符与表达式',
          order: 3,
          content_md:
            'C 语言提供了丰富的运算符。算术运算符：`+ - * / %`（取模），'
            + '其中 `/` 对整数是整除，`%` 只能用于整数。'
            + '关系运算符：`== != < > <= >=`，结果为 0（假）或 1（真）。\n\n'
            + '逻辑运算符 `&&`（与）、`||`（或）、`!`（非）支持短路求值——'
            + '如果 `&&` 左边为假，右边不计算；如果 `||` 左边为真，右边不计算。'
            + '这在避免空指针解引用时非常关键：`if (p != NULL && p->value > 0)`。\n\n'
            + '位运算符是 C 语言的特色：`&`（按位与）、`|`（按位或）、`^`（异或）、'
            + '`~`（取反）、`<<`（左移）、`>>`（右移）。位运算直接操作二进制位，'
            + '在嵌入式编程、加密算法和性能优化中不可替代。'
            + '例如 `x << 1` 等价于 `x * 2` 但更快。\n\n'
            + '自增 `++` 和自减 `--` 有前置和后置之分：`++i` 先加再用，`i++` 先用再加。'
            + '运算符优先级决定了表达式的计算顺序，但建议在复杂表达式中使用括号明确意图，'
            + '避免依赖记忆优先级表。',
          examples: [
            {
              title: '算术与关系运算',
              code: '#include <stdio.h>\n\nint main() {\n    int a = 17, b = 5;\n    printf("a + b = %d\\n", a + b);\n    printf("a / b = %d\\n", a / b);\n    printf("a %% b = %d\\n", a % b);\n    printf("a > b: %d\\n", a > b);\n    printf("a == b: %d\\n", a == b);\n    return 0;\n}',
              explanation:
                '17/5 整除得 3，17%5 取模得 2。关系运算结果为 1（真）或 0（假）。'
                + '注意 printf 中输出 % 需要用 %%。',
            },
            {
              title: '位运算',
              code: '#include <stdio.h>\n\nint main() {\n    int a = 12;  // 1100\n    int b = 10;  // 1010\n    printf("a & b = %d\\n", a & b);   // 1000 = 8\n    printf("a | b = %d\\n", a | b);   // 1110 = 14\n    printf("a ^ b = %d\\n", a ^ b);   // 0110 = 6\n    printf("a << 2 = %d\\n", a << 2); // 110000 = 48\n    return 0;\n}',
              explanation:
                '12 二进制 1100，10 二进制 1010。按位与得 1000=8，按位或得 1110=14，'
                + '异或得 0110=6，左移 2 位得 110000=48。位运算在底层编程中极为常用。',
            },
            {
              title: '自增自减与复合赋值',
              code: '#include <stdio.h>\n\nint main() {\n    int i = 5;\n    printf("i++ = %d\\n", i++);  // 先用后加，输出5\n    printf("i = %d\\n", i);        // 现在是6\n    printf("++i = %d\\n", ++i);  // 先加后用，输出7\n    int x = 10;\n    x += 5;  // 等价 x = x + 5\n    printf("x = %d\\n", x);\n    return 0;\n}',
              explanation:
                'i++ 后置自增：先返回当前值再加 1。++i 前置自增：先加 1 再返回。'
                + '复合赋值运算符 +=、-=、*=、/=、%= 是简写形式，在循环中极为常用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '计算 17 除以 5 的余数，用 printf 输出。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int a = 17, b = 5;\n    printf("%d\\n", a ___ b);\n    return 0;\n}',
              expected_output: '2',
              hints: [
                '取余（取模）运算符是 %',
                '把 ___ 替换为 %',
                '在 printf 字符串中用 %% 输出 %，但这里 % 是运算符不是在字符串中',
              ],
            },
            {
              type: 'output-match',
              prompt: '用位运算将整数 8 左移 2 位，输出结果（相当于乘以 4）。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int x = 8;\n    printf("%d\\n", x ___ 2);\n    return 0;\n}',
              expected_output: '32',
              hints: [
                '左移运算符是 <<',
                '把 ___ 替换为 <<',
                '8 左移 2 位 = 8 * 4 = 32',
              ],
            },
            {
              type: 'output-match',
              prompt: '将摄氏温度 25 转为华氏温度（公式 F = C * 9 / 5 + 32），输出整数结果。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int celsius = 25;\n    int fahrenheit = celsius ___;\n    printf("%d\\n", fahrenheit);\n    return 0;\n}',
              expected_output: '77',
              hints: [
                '公式是 C * 9 / 5 + 32',
                '把 ___ 替换为 * 9 / 5 + 32',
                '25 * 9 = 225, 225 / 5 = 45, 45 + 32 = 77',
              ],
            },
          ],
          realWorldScenario:
            '底层驱动开发中，位运算是家常便饭。例如配置硬件寄存器：'
            + '设置第 3 位用 `reg |= (1 << 3)`，清除第 3 位用 `reg &= ~(1 << 3)`，'
            + '读取第 3 位用 `(reg >> 3) & 1`。这些操作在 Linux 内核驱动、'
            + '单片机编程和网络协议处理中无处不在。',
        },
      ],
    },

    // ================================================================
    // 第 2 章：控制流与函数
    // ================================================================
    {
      id: 'cpp-ch2',
      title: '控制流与函数',
      order: 1,
      lessons: [
        {
          id: 'cpp-ch2-l1',
          title: '条件语句 if/else 与 switch',
          order: 0,
          content_md:
            '条件语句让程序能够根据不同情况执行不同代码。`if (条件) { ... }` 是最基本的分支结构。'
            + '`else if` 和 `else` 提供多重分支。C 语言中条件为非零即真，零即假——'
            + '这意味着 `if (x)` 等价于 `if (x != 0)`，`if (!x)` 等价于 `if (x == 0)`。\n\n'
            + '`switch` 语句适合多值匹配的场景，只能对整数和字符类型使用。'
            + '每个 `case` 后必须用 `break` 跳出，否则会"穿透"（fall-through）执行后续 case。'
            + '`default` 处理所有未匹配的情况。switch 在编译时可优化为跳转表，效率很高。\n\n'
            + '三元运算符 `条件 ? 表达式1 : 表达式2` 是 if-else 的简写，常用于赋值场景。'
            + '例如 `int max = a > b ? a : b`。嵌套三元运算符会降低可读性，应避免滥用。\n\n'
            + 'C 语言没有布尔类型关键字（C99 引入了 `stdbool.h`），传统上用 int 的 0 和 1 表示假和真。'
            + '条件判断中常见的陷阱：`=` 是赋值，`==` 是比较，`if (x = 5)` 是合法但错误的代码。',
          examples: [
            {
              title: 'if-else 分支',
              code: '#include <stdio.h>\n\nint main() {\n    int score = 85;\n    if (score >= 90) {\n        printf("优秀\\n");\n    } else if (score >= 80) {\n        printf("良好\\n");\n    } else if (score >= 60) {\n        printf("及格\\n");\n    } else {\n        printf("不及格\\n");\n    }\n    return 0;\n}',
              explanation:
                '程序从上到下依次判断条件，匹配第一个为真的分支后跳出。'
                + 'score=85 匹配 score>=80，输出"良好"。else if 和 else 是可选的。',
            },
            {
              title: 'switch 语句',
              code: '#include <stdio.h>\n\nint main() {\n    int day = 3;\n    switch (day) {\n        case 1: printf("星期一\\n"); break;\n        case 2: printf("星期二\\n"); break;\n        case 3: printf("星期三\\n"); break;\n        case 4: printf("星期四\\n"); break;\n        case 5: printf("星期五\\n"); break;\n        default: printf("周末\\n");\n    }\n    return 0;\n}',
              explanation:
                'switch 根据 day 的值跳转到匹配的 case。case 3 匹配成功，输出"星期三"。'
                + 'break 防止穿透到后续 case。default 处理所有未列出的值。',
            },
            {
              title: '三元运算符',
              code: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    int max = (a > b) ? a : b;\n    printf("较大值: %d\\n", max);\n    int n = -5;\n    printf("%s\\n", n >= 0 ? "非负数" : "负数");\n    return 0;\n}',
              explanation:
                '三元运算符 条件?值1:值2 在条件为真时返回值1，否则返回值2。'
                + '它适用于简单的二选一场景，使代码更简洁。但复杂逻辑应使用 if-else。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '判断变量 year=2024 是否为闰年。闰年规则：能被4整除且不能被100整除，或能被400整除。是闰年输出"闰年"，否则输出"平年"。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int year = 2024;\n    if (___) {\n        printf("闰年\\n");\n    } else {\n        printf("平年\\n");\n    }\n    return 0;\n}',
              expected_output: '闰年',
              hints: [
                '闰年条件：(year%4==0 && year%100!=0) || (year%400==0)',
                '把 ___ 替换为上述条件表达式',
                '2024能被4整除且不能被100整除，所以是闰年',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 switch 语句，当变量 month=7 时输出 "暑假"，1-2月输出"寒假"，其他月份输出"上学"。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int month = 7;\n    switch (___) {\n        case 1:\n        case 2:\n            printf("寒假\\n");\n            break;\n        case 7:\n        case 8:\n            printf("暑假\\n");\n            break;\n        default:\n            printf("上学\\n");\n    }\n    return 0;\n}',
              expected_output: '暑假',
              hints: [
                'switch 后的括号中应该是要判断的变量',
                '把 ___ 替换为 month',
                'case 7 匹配 month=7，输出"暑假"',
              ],
            },
            {
              type: 'output-match',
              prompt: '用三元运算符，输出变量 n=-3 的绝对值。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int n = -3;\n    int abs_n = n >= 0 ? n ___ -n;\n    printf("%d\\n", abs_n);\n    return 0;\n}',
              expected_output: '3',
              hints: [
                '三元运算符格式：条件 ? 值1 : 值2',
                'n为负数时应该取 -n（即正值）',
                '把 ___ 替换为 : -n（注意冒号后有空格）',
              ],
            },
          ],
          realWorldScenario:
            '在状态机设计中，switch-case 是最常用的控制结构。'
            + 'TCP 协议栈的状态机、编译器的词法分析器、游戏角色的 AI 行为逻辑'
            + '都用 switch 来处理不同状态下的行为。理解分支控制是构建复杂逻辑的基础。',
        },
        {
          id: 'cpp-ch2-l2',
          title: '循环 for 与 while',
          order: 1,
          content_md:
            '循环让程序重复执行一段代码。C 语言有三种循环：`for`、`while` 和 `do-while`。'
            + '`for (初始化; 条件; 更新) { ... }` 适合已知循环次数的场景。'
            + '`while (条件) { ... }` 适合不确定循环次数、依赖条件判断的场景。\n\n'
            + '`do { ... } while (条件)` 与 while 的区别是先执行再判断，至少执行一次。'
            + '这在菜单驱动程序中很有用：先显示菜单，再根据用户输入决定是否继续。'
            + '`break` 跳出当前循环，`continue` 跳过本次循环体剩余部分进入下一次迭代。\n\n'
            + '循环的经典应用包括：遍历数组、累加求和、搜索查找、数值逼近。'
            + '嵌套循环用于处理二维结构（如矩阵、棋盘），但要注意时间复杂度——'
            + '两层嵌套循环的复杂度是 O(n²)，n=1000 就要执行百万次。\n\n'
            + '常见陷阱：`for (int i = 0; i <= n; i++)` 会执行 n+1 次（off-by-one 错误）。'
            + '死循环 `while(1)` 或 `for(;;)` 在嵌入式主循环中常见，但需确保有退出机制。',
          examples: [
            {
              title: 'for 循环求和',
              code: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    printf("1到100的和: %d\\n", sum);\n    return 0;\n}',
              explanation:
                'for 循环初始化 i=1，每次检查 i<=100，执行循环体后 i++。'
                + 'sum 累加 1 到 100 的每个数。结果是 5050。',
            },
            {
              title: 'while 循环：计算位数',
              code: '#include <stdio.h>\n\nint main() {\n    int n = 12345;\n    int count = 0;\n    int temp = n;\n    while (temp > 0) {\n        temp /= 10;\n        count++;\n    }\n    printf("%d 有 %d 位\\n", n, count);\n    return 0;\n}',
              explanation:
                '不断除以 10 直到 temp 为 0，每次除法去掉最低位。'
                + '循环次数就是数字的位数。这展示了 while 在不确定迭代次数时的用法。',
            },
            {
              title: '嵌套循环：九九乘法表',
              code: '#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 9; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf("%d*%d=%-2d ", j, i, i * j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
              explanation:
                '外层循环控制行，内层循环控制列。j<=i 确保只输出下三角。'
                + '%-2d 左对齐占 2 位，使输出整齐。嵌套循环是处理二维数据的基础。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 for 循环输出 1 到 5 的平方，每个数字一行。格式为 "1 1"（数字和它的平方）。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        printf("%d %d\\n", i, ___);\n    }\n    return 0;\n}',
              expected_output: '1 1\n2 4\n3 9\n4 16\n5 25',
              hints: [
                '平方就是 i 乘以 i',
                '把 ___ 替换为 i * i',
                'printf("%d %d\\n", i, i*i) 会输出 "1 1"、"2 4" 等',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 while 循环计算 2 的 10 次方，输出结果 1024。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int result = 1;\n    int i = 0;\n    while (i < ___) {\n        result *= 2;\n        i++;\n    }\n    printf("%d\\n", result);\n    return 0;\n}',
              expected_output: '1024',
              hints: [
                '2的10次方需要乘以2共10次',
                '循环条件是 i < 10',
                '把 ___ 替换为 10',
              ],
            },
            {
              type: 'output-match',
              prompt: 'FizzBuzz：对数字 15，如果能被 15 整除输出 "FizzBuzz"，能被 3 整除输出 "Fizz"，能被 5 整除输出 "Buzz"，否则输出数字本身。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int n = 15;\n    if (n % 15 == 0) {\n        printf("FizzBuzz");\n    } else if (n % 3 == 0) {\n        printf("Fizz");\n    } else if (n % 5 == 0) {\n        printf("Buzz");\n    } else {\n        printf("%d", ___);\n    }\n    return 0;\n}',
              expected_output: 'FizzBuzz',
              hints: [
                '15 能被 15 整除，所以输出 FizzBuzz',
                'else 分支处理不能被 3 或 5 整除的情况，输出数字本身',
                '把 ___ 替换为 n',
              ],
            },
          ],
          realWorldScenario:
            '在数据处理管道中，循环是遍历数据集的基本工具。'
            + '数据库引擎用循环扫描表中的每行记录，图像处理用嵌套循环遍历每个像素，'
            + '科学计算用循环进行数值迭代和蒙特卡洛模拟。'
            + '选择合适的循环结构和退出条件直接影响程序的正确性和性能。',
        },
        {
          id: 'cpp-ch2-l3',
          title: '函数定义与调用',
          order: 2,
          content_md:
            '函数是代码复用的基本单元。C 语言的函数定义格式为：'
            + '`返回类型 函数名(参数列表) { 函数体 }`。'
            + '函数声明（原型）放在使用之前，定义可以放在后面，让编译器知道函数的签名。\n\n'
            + 'C 语言函数参数是**值传递**——函数内部修改参数不影响外部变量。'
            + '要让函数修改外部变量，必须传指针。这是 C 语言最核心的概念之一。'
            + '例如 `void swap(int *a, int *b)` 需要传地址才能交换两个变量的值。\n\n'
            + '函数的返回类型可以是任何类型，也可以是 `void`（无返回值）。'
            + '`return` 语句结束函数执行并返回值。如果函数声明了返回类型，必须 return 相应类型的值。\n\n'
            + '良好的函数设计原则：单一职责（一个函数只做一件事）、函数名要有意义、'
            + '参数不宜过多（超过 5 个考虑用结构体打包）。这些原则在工业级 C 代码中被严格执行。',
          examples: [
            {
              title: '基本函数定义',
              code: '#include <stdio.h>\n\n// 函数声明\nint add(int a, int b);\n\nint main() {\n    int result = add(3, 4);\n    printf("3 + 4 = %d\\n", result);\n    return 0;\n}\n\n// 函数定义\nint add(int a, int b) {\n    return a + b;\n}',
              explanation:
                '函数声明告诉编译器 add 接受两个 int 参数返回 int。'
                + '定义可以放在 main 之后。调用时传入参数 3 和 4，返回 7。',
            },
            {
              title: '指针参数：交换变量',
              code: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    printf("交换前: x=%d, y=%d\\n", x, y);\n    swap(&x, &y);\n    printf("交换后: x=%d, y=%d\\n", x, y);\n    return 0;\n}',
              explanation:
                'swap 接收指针参数，通过解引用 *a、*b 修改原变量。'
                + '调用时用 &x、&y 传地址。这是 C 语言中"传引用"的经典模拟方式。'
                + '不理解指针就无法写出修改外部变量的函数。',
            },
            {
              title: '判断素数',
              code: '#include <stdio.h>\n#include <stdbool.h>\n\nbool is_prime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    for (int i = 2; i <= 20; i++) {\n        if (is_prime(i)) {\n            printf("%d ", i);\n        }\n    }\n    printf("\\n");\n    return 0;\n}',
              explanation:
                'is_prime 检查 n 是否为素数。只需检查到 sqrt(n)（即 i*i<=n），'
                + '因为如果 n 有大于 sqrt(n) 的因子，必定也有小于 sqrt(n) 的因子。'
                + 'stdbool.h 提供 bool 类型（C99）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义函数 max(int a, int b) 返回较大值。在 main 中调用 max(15, 8) 并输出结果。',
              starter_code: '#include <stdio.h>\n\nint max(int a, int b) {\n    return a > b ? ___ : b;\n}\n\nint main() {\n    printf("%d\\n", max(15, 8));\n    return 0;\n}',
              expected_output: '15',
              hints: [
                '三元运算符：a > b ? a : b',
                '当 a 大于 b 时返回 a',
                '把 ___ 替换为 a',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义函数 factorial(int n) 计算阶乘 n!。调用 factorial(5) 输出结果 120。',
              starter_code: '#include <stdio.h>\n\nint factorial(int n) {\n    int result = 1;\n    for (int i = 1; i <= n; i++) {\n        result ___ i;\n    }\n    return result;\n}\n\nint main() {\n    printf("%d\\n", factorial(5));\n    return 0;\n}',
              expected_output: '120',
              hints: [
                '阶乘是 1*2*3*...*n，需要累乘',
                '把 ___ 替换为 *=',
                'result *= i 等价于 result = result * i',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 swap 函数（传指针）交换 a=3 和 b=7 的值，输出交换后的结果 "7 3"。',
              starter_code: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = ___;\n}\n\nint main() {\n    int a = 3, b = 7;\n    swap(&a, &b);\n    printf("%d %d\\n", a, b);\n    return 0;\n}',
              expected_output: '7 3',
              hints: [
                'temp 保存了 *a 的原始值',
                '把 *b 赋值为 temp 即可完成交换',
                '把 ___ 替换为 temp',
              ],
            },
          ],
          realWorldScenario:
            '模块化程序设计是大型 C 项目的基础。Linux 内核有数万个函数，'
            + '每个函数职责单一、接口清晰。函数库如 glibc、OpenSSL、SQLite '
            + '都是通过精心设计的函数 API 对外提供服务。学会分解问题为函数，'
            + '是从"写脚本"到"写工程"的关键一步。',
        },
        {
          id: 'cpp-ch2-l4',
          title: '递归',
          order: 3,
          content_md:
            '递归是函数直接或间接调用自身。每个递归函数需要两个要素：'
            + '**基线条件**（base case，停止递归）和**递归条件**（将问题分解为更小的子问题）。'
            + '没有基线条件的递归会导致栈溢出。\n\n'
            + '经典的递归例子是阶乘：`factorial(n) = n * factorial(n-1)`，基线条件是 `factorial(0) = 1`。'
            + '递归的执行过程是"层层深入"再"层层返回"，每次调用都会在栈上分配新的栈帧。'
            + '递归深度过大（如递归计算 factorial(100000)）会导致栈溢出。\n\n'
            + '斐波那契数列 `fib(n) = fib(n-1) + fib(n-2)` 是另一个经典递归例子，'
            + '但朴素递归的复杂度是 O(2^n)，非常低效。'
            + '可以通过记忆化（缓存已计算结果）或改为迭代来优化。\n\n'
            + '递归在处理树形结构（如文件系统遍历、二叉树操作）和分治算法（如归并排序、快速排序）中非常自然。'
            + '理解递归的关键是：相信递归函数对子问题的答案是正确的，只需关注当前层如何组合结果。',
          examples: [
            {
              title: '递归计算阶乘',
              code: '#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) return 1;       // 基线条件\n    return n * factorial(n - 1); // 递归条件\n}\n\nint main() {\n    printf("5! = %d\\n", factorial(5));\n    printf("10! = %d\\n", factorial(10));\n    return 0;\n}',
              explanation:
                'factorial(5) = 5 * factorial(4) = 5 * 4 * factorial(3) = ... = 5*4*3*2*1 = 120。'
                + '基线条件 n<=1 返回 1，终止递归。每次递归调用 n 减 1，确保最终到达基线。',
            },
            {
              title: '递归斐波那契',
              code: '#include <stdio.h>\n\nint fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}\n\nint main() {\n    for (int i = 0; i < 10; i++) {\n        printf("%d ", fib(i));\n    }\n    printf("\\n");\n    return 0;\n}',
              explanation:
                'fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2)。'
                + '输出前 10 项：0 1 1 2 3 5 8 13 21 34。'
                + '注意朴素递归有大量重复计算，仅适合小规模 n。',
            },
            {
              title: '递归倒序输出数字',
              code: '#include <stdio.h>\n\nvoid print_reverse(int n) {\n    if (n < 10) {\n        printf("%d", n);\n        return;\n    }\n    printf("%d", n % 10);  // 先输出最低位\n    print_reverse(n / 10);  // 递归处理剩余位\n}\n\nint main() {\n    print_reverse(12345);\n    printf("\\n");\n    return 0;\n}',
              explanation:
                '先输出最低位（n%10），再递归处理高位（n/10）。'
                + '12345 输出 54321。这展示了递归在数字处理中的应用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用递归计算斐波那契数列第 10 项（从第 0 项开始），输出结果 55。',
              starter_code: '#include <stdio.h>\n\nint fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - ___);\n}\n\nint main() {\n    printf("%d\\n", fib(10));\n    return 0;\n}',
              expected_output: '55',
              hints: [
                '斐波那契递归公式 fib(n) = fib(n-1) + fib(n-2)',
                '第二个递归调用参数是 n-2',
                '把 ___ 替换为 2',
              ],
            },
            {
              type: 'output-match',
              prompt: '用递归计算 2 的 10 次方（即 power(2, 10)），输出 1024。基线条件：power(base, 0) = 1。',
              starter_code: '#include <stdio.h>\n\nint power(int base, int exp) {\n    if (exp == 0) return 1;\n    return base * power(base, exp - ___);\n}\n\nint main() {\n    printf("%d\\n", power(2, 10));\n    return 0;\n}',
              expected_output: '1024',
              hints: [
                '每次递归将指数减 1',
                'power(base, exp) = base * power(base, exp-1)',
                '把 ___ 替换为 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '用递归求 1 到 5 的和。基线条件：sum_to(1) = 1。递归：sum_to(n) = n + sum_to(n-1)。',
              starter_code: '#include <stdio.h>\n\nint sum_to(int n) {\n    if (n == 1) return 1;\n    return n + sum_to(___);\n}\n\nint main() {\n    printf("%d\\n", sum_to(5));\n    return 0;\n}',
              expected_output: '15',
              hints: [
                '递归调用处理 n-1 的子问题',
                '把 ___ 替换为 n - 1',
                'sum_to(5) = 5 + sum_to(4) = 5 + 4 + sum_to(3) = ... = 15',
              ],
            },
          ],
          realWorldScenario:
            '在编译器设计中，抽象语法树（AST）的遍历天然适合递归。'
            + '每个语法节点可能有子节点，递归访问子节点是最自然的处理方式。'
            + '同样，文件系统遍历（递归列出目录中的子目录）、XML/JSON 解析、'
            + '分治算法（归并排序、快速排序）都深度依赖递归思维。',
        },
      ],
    },

    // ================================================================
    // 第 3 章：指针与数组
    // ================================================================
    {
      id: 'cpp-ch3',
      title: '指针与数组',
      order: 2,
      lessons: [
        {
          id: 'cpp-ch3-l1',
          title: '数组基础',
          order: 0,
          content_md:
            '数组是相同类型元素的连续内存块。声明语法：`类型 名字[大小]`，如 `int nums[5]`。'
            + '数组元素在内存中连续存放，通过下标访问（从 0 开始）。'
            + '数组名本身是一个常量指针，指向第一个元素的地址。\n\n'
            + 'C 语言不会检查数组越界——`nums[10]` 在大小为 5 的数组上是未定义行为（UB），'
            + '可能读到垃圾数据、导致崩溃，甚至被攻击者利用（缓冲区溢出漏洞）。'
            + '这是 C 语言最危险的设计之一，程序员必须自己确保访问安全。\n\n'
            + '数组在声明时可以初始化：`int nums[] = {1, 2, 3}`，编译器自动推断大小为 3。'
            + '未初始化的局部数组内容是随机的（栈上的垃圾值）。'
            + '字符串以 null 字符 `\\0` 结尾，`char str[] = "hi"` 实际占 3 字节（h、i、\\0）。\n\n'
            + '二维数组 `int matrix[3][4]` 在内存中按行优先存储。'
            + '多维数组在图像处理、矩阵运算、棋盘游戏中广泛使用。',
          examples: [
            {
              title: '数组声明与遍历',
              code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {10, 20, 30, 40, 50};\n    int size = sizeof(nums) / sizeof(nums[0]);\n    printf("数组大小: %d\\n", size);\n    for (int i = 0; i < size; i++) {\n        printf("nums[%d] = %d\\n", i, nums[i]);\n    }\n    return 0;\n}',
              explanation:
                'sizeof(nums) 返回整个数组的字节数，除以单个元素大小得到元素个数。'
                + '这是 C 语言中计算数组长度的标准技巧，因为数组本身不存储长度信息。',
            },
            {
              title: '数组求和与最值',
              code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {5, 2, 8, 1, 9, 3};\n    int n = sizeof(nums) / sizeof(nums[0]);\n    int sum = 0;\n    int max = nums[0];\n    for (int i = 0; i < n; i++) {\n        sum += nums[i];\n        if (nums[i] > max) max = nums[i];\n    }\n    printf("总和: %d, 最大值: %d\\n", sum, max);\n    return 0;\n}',
              explanation:
                '遍历数组一次，同时累加求和和寻找最大值。'
                + 'max 初始化为第一个元素（不要初始化为 0，因为数组可能全为负数）。',
            },
            {
              title: '二维数组',
              code: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
              explanation:
                '二维数组用嵌套循环遍历。matrix[i][j] 中 i 是行索引，j 是列索引。'
                + '初始化时每行用花括号分组，内存中按行优先连续存储。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '声明数组 nums = {3, 7, 2, 9, 5}，用循环求和并输出结果 26。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {3, 7, 2, 9, 5};\n    int sum = 0;\n    for (int i = 0; i < 5; i++) {\n        sum += nums[___];\n    }\n    printf("%d\\n", sum);\n    return 0;\n}',
              expected_output: '26',
              hints: [
                '循环变量 i 从 0 到 4',
                '访问数组元素用 nums[i]',
                '把 ___ 替换为 i',
              ],
            },
            {
              type: 'output-match',
              prompt: '求数组 {5, 2, 8, 1, 9, 3} 的最大值，输出 9。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {5, 2, 8, 1, 9, 3};\n    int max = nums[0];\n    for (int i = 1; i < 6; i++) {\n        if (nums[i] ___ max) {\n            max = nums[i];\n        }\n    }\n    printf("%d\\n", max);\n    return 0;\n}',
              expected_output: '9',
              hints: [
                '当当前元素大于 max 时更新 max',
                '比较运算符是 >',
                '把 ___ 替换为 >',
              ],
            },
            {
              type: 'output-match',
              prompt: '将数组 {1, 2, 3, 4, 5} 反转后输出，结果为 "5 4 3 2 1"。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    for (int i = 4; i >= ___; i--) {\n        printf("%d ", nums[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
              expected_output: '5 4 3 2 1',
              hints: [
                '反转输出需要从最后一个元素（索引4）向前遍历到第一个元素（索引0）',
                '循环条件 i >= 0',
                '把 ___ 替换为 0',
              ],
            },
          ],
          realWorldScenario:
            '在图像处理中，图像本质上是二维数组——每个像素是一个 RGB 值。'
            + '图像旋转、滤镜、压缩等操作都是对数组的遍历和变换。'
            + '数值模拟（如天气预测、流体力学）也大量使用多维数组存储网格数据。'
            + '理解数组是处理批量数据的基础。',
        },
        {
          id: 'cpp-ch3-l2',
          title: '指针基础',
          order: 1,
          content_md:
            '指针是 C 语言的灵魂，也是初学者最大的门槛。指针是一个变量，存储的是另一个变量的**内存地址**。'
            + '声明：`int *p` 表示 p 是指向 int 的指针。取地址运算符 `&` 获取变量地址，'
            + '解引用运算符 `*` 通过指针访问其指向的值。\n\n'
            + '指针的大小取决于平台：32 位系统上 4 字节，64 位系统上 8 字节，无论指向什么类型。'
            + '指针的类型决定了解引用时读取多少字节以及指针算术的步长。'
            + '`int *p` 加 1 实际地址加 4（sizeof(int)），`char *c` 加 1 地址加 1。\n\n'
            + '空指针 `NULL`（或 C++ 的 `nullptr`）表示不指向任何有效地址。'
            + '解引用空指针是未定义行为，会导致段错误（segmentation fault）。'
            + '良好的习惯是在使用指针前检查是否为 NULL：`if (p != NULL) { ... }`。\n\n'
            + '指针的常见用途：传址给函数（让函数修改外部变量）、动态内存分配、'
            + '实现链式数据结构（链表、树、图）、函数指针（回调机制）。'
            + '掌握指针是 C/C++ 程序员的核心能力。',
          examples: [
            {
              title: '指针基本操作',
              code: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int *p = &x;  // p 存储x的地址\n    printf("x的值: %d\\n", x);\n    printf("x的地址: %p\\n", (void*)&x);\n    printf("p的值(即x的地址): %p\\n", (void*)p);\n    printf("p指向的值: %d\\n", *p);\n    *p = 100;  // 通过指针修改x\n    printf("修改后x的值: %d\\n", x);\n    return 0;\n}',
              explanation:
                '&x 获取 x 的地址，赋给指针 p。*p 解引用获取 p 指向的值（即 x 的值）。'
                + '通过 *p = 100 可以间接修改 x 的值。指针让我们能够间接访问和修改变量。',
            },
            {
              title: '指针与函数（传址）',
              code: '#include <stdio.h>\n\nvoid add_ten(int *p) {\n    *p += 10;\n}\n\nint main() {\n    int num = 5;\n    add_ten(&num);\n    printf("num = %d\\n", num);\n    return 0;\n}',
              explanation:
                'add_ten 接收指针参数，通过 *p 修改原变量的值。'
                + '调用时传 &num（num 的地址）。这是 C 语言中函数修改外部变量的标准方式。'
                + '如果不传指针，num 的值不会改变（值传递）。',
            },
            {
              title: '空指针与安全检查',
              code: '#include <stdio.h>\n#include <stddef.h>\n\nvoid print_value(int *p) {\n    if (p == NULL) {\n        printf("指针为空，不能解引用\\n");\n        return;\n    }\n    printf("值: %d\\n", *p);\n}\n\nint main() {\n    int x = 99;\n    print_value(&x);\n    print_value(NULL);\n    return 0;\n}',
              explanation:
                '使用指针前检查是否为 NULL 是重要的安全习惯。'
                + '如果不检查直接解引用 NULL，程序会崩溃（段错误）。'
                + '在工业级代码中，这种防御性编程是必须的。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '声明 int x = 10 和指针 int *p 指向 x。通过指针将 x 修改为 99，然后输出 x 的值。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *p = ___;\n    *p = 99;\n    printf("%d\\n", x);\n    return 0;\n}',
              expected_output: '99',
              hints: [
                '指针需要指向 x，用取地址运算符 &',
                '把 ___ 替换为 &x',
                'p 指向 x 后，*p = 99 就等于 x = 99',
              ],
            },
            {
              type: 'output-match',
              prompt: '通过指针读取变量 y=77 的值并输出。声明指针 p 指向 y，用 *p 输出。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int y = 77;\n    int *p = &y;\n    printf("%d\\n", ___);\n    return 0;\n}',
              expected_output: '77',
              hints: [
                '通过指针解引用获取值用 *p',
                '把 ___ 替换为 *p',
                '*p 就是 p 指向的变量 y 的值',
              ],
            },
            {
              type: 'output-match',
              prompt: '函数 double_it(int *p) 将指针指向的值翻倍。调用后输出 num=7 翻倍后的结果 14。',
              starter_code: '#include <stdio.h>\n\nvoid double_it(int *p) {\n    *p = *p ___ 2;\n}\n\nint main() {\n    int num = 7;\n    double_it(&num);\n    printf("%d\\n", num);\n    return 0;\n}',
              expected_output: '14',
              hints: [
                '翻倍就是乘以 2',
                '把 ___ 替换为 *',
                '*p = *p * 2 将指针指向的值翻倍',
              ],
            },
          ],
          realWorldScenario:
            '在系统编程中，指针无处不在。操作系统通过指针管理进程的虚拟内存空间，'
            + '驱动程序通过指针直接读写硬件寄存器，数据库引擎通过指针构建索引树（B+树）。'
            + '理解指针就是理解计算机内存模型，这是系统级编程的核心能力。',
        },
        {
          id: 'cpp-ch3-l3',
          title: '指针与数组',
          order: 2,
          content_md:
            '在 C 语言中，数组名就是指向第一个元素的常量指针。`int nums[5]` 中 `nums` 等价于 `&nums[0]`。'
            + '因此 `nums[2]` 等价于 `*(nums + 2)`。指针算术会根据类型自动调整步长：'
            + '`nums + 2` 实际地址增加 `2 * sizeof(int)` 字节。\n\n'
            + '指针算术是 C 语言高效遍历数组的基础。`p++` 让指针前进一个元素的距离，'
            + '`p--` 后退一个元素。两个指向同一数组的指针可以相减，得到元素个数差。'
            + '但指针相加没有意义，也不允许。\n\n'
            + '将数组传给函数时，实际传的是指针——函数内部无法获知数组长度。'
            + '这就是为什么数组函数通常需要额外传长度参数：`void process(int arr[], int n)`。'
            + '在函数内部 `sizeof(arr)` 得到的是指针大小，不是数组大小。\n\n'
            + '理解指针与数组的关系是掌握 C 字符串、动态内存和缓冲区操作的前提。'
            + '著名的 `strcpy`、`memcpy` 等标准库函数都基于指针操作实现。',
          examples: [
            {
              title: '指针遍历数组',
              code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {10, 20, 30, 40, 50};\n    int *p = nums;  // p 指向数组首元素\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", *p);\n        p++;  // 指针前进一个元素\n    }\n    printf("\\n");\n    return 0;\n}',
              explanation:
                'p 初始指向 nums[0]，*p 读取当前元素。p++ 使指针前进到下一个元素。'
                + '这是用指针替代下标遍历数组的方式，在某些场景下效率更高。',
            },
            {
              title: '指针算术',
              code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {10, 20, 30, 40, 50};\n    int *p = nums;\n    printf("p[0] = %d\\n", *p);         // 10\n    printf("p[2] = %d\\n", *(p + 2));     // 30\n    printf("差值 = %ld\\n", (long)((nums + 4) - p));  // 4\n    return 0;\n}',
              explanation:
                '*(p+2) 等价于 p[2] 和 nums[2]。指针相减 (nums+4)-p 得到元素个数差 4。'
                + '指针算术按类型大小自动调整，int 指针加 2 实际移动 8 字节。',
            },
            {
              title: '用指针实现二分查找',
              code: '#include <stdio.h>\n\nint binary_search(int *arr, int n, int target) {\n    int left = 0, right = n - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int nums[] = {1, 3, 5, 7, 9, 11, 13};\n    int idx = binary_search(nums, 7, 9);\n    printf("找到 9 在索引 %d\\n", idx);\n    return 0;\n}',
              explanation:
                '二分查找要求数组有序。每次比较中间元素，缩小一半搜索范围。'
                + '复杂度 O(log n)。函数参数 int *arr 和 int arr[] 完全等价。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用指针遍历数组 {1, 2, 3, 4, 5}，求和并输出 15。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    int *p = nums;\n    int sum = 0;\n    for (int i = 0; i < 5; i++) {\n        sum += *p;\n        p___;\n    }\n    printf("%d\\n", sum);\n    return 0;\n}',
              expected_output: '15',
              hints: [
                '每次循环后指针需要前进到下一个元素',
                '指针自增用 ++',
                '把 ___ 替换为 ++（即 p++）',
              ],
            },
            {
              type: 'output-match',
              prompt: '用指针算术访问数组 {10, 20, 30, 40, 50} 的第 3 个元素（索引 2），输出 30。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {10, 20, 30, 40, 50};\n    int *p = nums;\n    printf("%d\\n", *(p + ___));\n    return 0;\n}',
              expected_output: '30',
              hints: [
                '第 3 个元素在索引 2 的位置',
                '指针加 2 跳过前两个元素',
                '把 ___ 替换为 2',
              ],
            },
            {
              type: 'output-match',
              prompt: '用指针将数组 {1, 2, 3, 4, 5} 反转。提示：用两个指针从两端向中间交换。输出 "5 4 3 2 1"。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    int *left = nums;\n    int *right = nums + 4;\n    while (left < right) {\n        int temp = *left;\n        *left = *right;\n        *right = temp;\n        left++;\n        right___;\n    }\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", nums[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
              expected_output: '5 4 3 2 1',
              hints: [
                '右指针需要向左移动',
                '指针后退用 --',
                '把 ___ 替换为 --（即 right--）',
              ],
            },
          ],
          realWorldScenario:
            '在缓冲区处理和网络数据包解析中，指针算术是核心技能。'
            + '网络数据包是字节流，需要用指针逐字段读取——TCP 头部在第 20 字节处，'
            + '用指针偏移精确定位。视频编解码器通过指针操作帧数据，'
            + '数据库通过指针在 B+树节点间导航。',
        },
        {
          id: 'cpp-ch3-l4',
          title: '字符串与字符数组',
          order: 3,
          content_md:
            'C 语言没有专门的字符串类型——字符串就是以 null 字符 `\\0` 结尾的字符数组。'
            + '`char str[] = "Hello"` 实际存储 6 个字符：H、e、l、l、o、\\0。'
            + '这个结尾的 \\0 是 C 字符串的标志，所有字符串函数都依赖它判断字符串结束。\n\n'
            + '标准库 `<string.h>` 提供字符串操作函数：`strlen`（求长度）、`strcpy`（复制）、'
            + '`strcat`（连接）、`strcmp`（比较）、`strchr`（查找字符）、`strstr`（查找子串）。'
            + '这些函数通过指针遍历字符直到遇到 \\0。\n\n'
            + '字符串操作的常见陷阱：缓冲区溢出——`strcpy(dest, src)` 不检查 dest 大小，'
            + '如果 src 比 dest 长，会覆盖相邻内存。安全版本 `strncpy`、`snprintf` 可以限制长度。'
            + '这是许多安全漏洞（如著名的 Morris 蠕虫）的根源。\n\n'
            + '字符数组与字符指针的区别：`char str[] = "Hi"` 是可修改的数组副本；'
            + '`char *p = "Hi"` 中 p 指向只读的字符串字面量，修改它是未定义行为。'
            + '理解这一区别对于写出正确的字符串操作代码至关重要。',
          examples: [
            {
              title: '字符串基本操作',
              code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello, C!";\n    printf("字符串: %s\\n", str);\n    printf("长度: %zu\\n", strlen(str));\n    printf("第一个字符: %c\\n", str[0]);\n    printf("最后字符: %c\\n", str[strlen(str) - 1]);\n    return 0;\n}',
              explanation:
                'strlen 返回字符串长度（不含 \\0）。str[0] 是第一个字符。'
                + 'str[strlen(str)-1] 是最后一个有效字符。%s 格式符用于输出字符串。',
            },
            {
              title: '字符串复制与连接',
              code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char src[] = "World";\n    char dest[50] = "Hello, ";\n    strcat(dest, src);\n    printf("连接后: %s\\n", dest);\n    char copy[50];\n    strcpy(copy, dest);\n    printf("复制后: %s\\n", copy);\n    return 0;\n}',
              explanation:
                'strcat 将 src 追加到 dest 末尾（覆盖 dest 的 \\0 再补新 \\0）。'
                + 'strcpy 将 src（含 \\0）复制到 dest。使用时必须确保 dest 足够大。',
            },
            {
              title: '字符串比较与查找',
              code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s1[] = "apple";\n    char s2[] = "banana";\n    printf("比较结果: %d\\n", strcmp(s1, s2));  // 负数: s1 < s2\n    char *p = strchr(s1, \'p\');\n    if (p) printf("找到p在位置: %ld\\n", (long)(p - s1));\n    char text[] = "Hello World";\n    char *found = strstr(text, "World");\n    if (found) printf("找到子串: %s\\n", found);\n    return 0;\n}',
              explanation:
                'strcmp 逐字符比较 ASCII 值，返回负数/0/正数。strchr 查找字符首次出现位置。'
                + 'strstr 查找子串。返回的指针与原字符串起始指针的差就是位置索引。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 strlen 输出字符串 "CodeLearn" 的长度。',
              starter_code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "CodeLearn";\n    printf("%zu\\n", ___(str));\n    return 0;\n}',
              expected_output: '9',
              hints: [
                '求字符串长度的函数是 strlen',
                '把 ___ 替换为 strlen',
                'CodeLearn 有 9 个字符',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 strcpy 将 src="Hello" 复制到 dest，输出 dest 的内容。',
              starter_code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    ___(dest, src);\n    printf("%s\\n", dest);\n    return 0;\n}',
              expected_output: 'Hello',
              hints: [
                '字符串复制函数是 strcpy',
                'strcpy(dest, src) 将 src 复制到 dest',
                '把 ___ 替换为 strcpy',
              ],
            },
            {
              type: 'output-match',
              prompt: '将字符串 "Hello" 中的小写字母转为大写，输出 "HELLO"。',
              starter_code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    for (int i = 0; i < strlen(str); i++) {\n        if (str[i] >= \'a\' && str[i] <= \'z\') {\n            str[i] = str[i] ___ 32;\n        }\n    }\n    printf("%s\\n", str);\n    return 0;\n}',
              expected_output: 'HELLO',
              hints: [
                '大写字母和小写字母的 ASCII 差值是 32',
                '小写字母减去 32 得到对应大写字母',
                '把 ___ 替换为 -',
              ],
            },
          ],
          realWorldScenario:
            '在文本解析器、编译器前端和协议解析中，字符串操作是核心工作。'
            + 'HTTP 服务器需要解析请求行和头部，JSON 解析器需要逐字符扫描 token，'
            + 'Shell 需要解析命令行参数。理解 C 字符串的内存模型和操作函数，'
            + '是构建高效文本处理工具的基础。',
        },
      ],
    },

    // ================================================================
    // 第 4 章：结构体与内存
    // ================================================================
    {
      id: 'cpp-ch4',
      title: '结构体与内存',
      order: 3,
      lessons: [
        {
          id: 'cpp-ch4-l1',
          title: 'struct 结构体',
          order: 0,
          content_md:
            '结构体（struct）是 C 语言中组合不同类型数据的机制。'
            + '`struct Point { int x; int y; }` 定义了一个包含两个整数的结构体类型。'
            + '声明变量用 `struct Point p = {3, 4}`，访问成员用点号 `p.x`。\n\n'
            + '结构体在内存中可能存在填充（padding）——编译器为了对齐内存访问，'
            + '会在成员之间插入空字节。例如 `struct { char c; int i; }` 在 64 位系统上占 8 字节而非 5 字节。'
            + '理解内存对齐对于优化数据结构和网络协议布局至关重要。\n\n'
            + '结构体指针用箭头运算符 `->` 访问成员：`p->x` 等价于 `(*p).x`。'
            + '当把结构体传给函数时，传指针比传值更高效——避免复制整个结构体。'
            + '这也是 C 语言中"传引用"的常见模式。\n\n'
            + '`typedef` 可以为结构体起别名：`typedef struct { int x; int y; } Point`，'
            + '之后直接用 `Point p` 声明，不需要 `struct` 关键字。'
            + '这在 C 代码中极为常见，使代码更简洁。',
          examples: [
            {
              title: '结构体定义与使用',
              code: '#include <stdio.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main() {\n    struct Point p1 = {3, 4};\n    struct Point p2;\n    p2.x = 6;\n    p2.y = 8;\n    printf("p1: (%d, %d)\\n", p1.x, p1.y);\n    printf("p2: (%d, %d)\\n", p2.x, p2.y);\n    return 0;\n}',
              explanation:
                '定义 Point 结构体含两个 int 成员。p1 在声明时初始化，p2 用点号逐个赋值。'
                + '成员访问用 p.x 语法。结构体将相关数据组织在一起，提高代码可读性。',
            },
            {
              title: 'typedef 与结构体指针',
              code: '#include <stdio.h>\n#include <math.h>\n\ntypedef struct {\n    double x;\n    double y;\n} Point;\n\ndouble distance(Point *a, Point *b) {\n    double dx = a->x - b->x;\n    double dy = a->y - b->y;\n    return sqrt(dx * dx + dy * dy);\n}\n\nint main() {\n    Point p1 = {0, 0};\n    Point p2 = {3, 4};\n    printf("距离: %.2f\\n", distance(&p1, &p2));\n    return 0;\n}',
              explanation:
                'typedef 省去了 struct 关键字。distance 函数接收结构体指针，'
                + '用 -> 访问成员。传指针避免了复制结构体，是高效的实践。'
                + '计算两点间的欧几里得距离。',
            },
            {
              title: '结构体数组',
              code: '#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n    float score;\n} Student;\n\nint main() {\n    Student students[] = {\n        {"小明", 20, 95.5},\n        {"小红", 21, 88.0},\n        {"小刚", 19, 76.5}\n    };\n    for (int i = 0; i < 3; i++) {\n        printf("%s: 年龄%d, 成绩%.1f\\n",\n               students[i].name, students[i].age, students[i].score);\n    }\n    return 0;\n}',
              explanation:
                '结构体数组是数据库记录的简单模型。每个元素是一个完整的结构体。'
                + '初始化时用嵌套花括号。遍历时用 students[i].成员 访问。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义结构体 Rectangle 含 width 和 height 两个 int 成员。创建 r = {5, 3}，输出面积 15。',
              starter_code: '#include <stdio.h>\n\nstruct Rectangle {\n    int width;\n    int height;\n};\n\nint main() {\n    struct Rectangle r = {5, 3};\n    int area = r.width ___ r.height;\n    printf("%d\\n", area);\n    return 0;\n}',
              expected_output: '15',
              hints: [
                '面积 = 宽 × 高',
                '乘法运算符是 *',
                '把 ___ 替换为 *',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 typedef 定义 Point 结构体（含 x, y），创建 p = {7, 2}，输出 x 和 y 的和 9。',
              starter_code: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main() {\n    Point p = {7, 2};\n    printf("%d\\n", p.x ___ p.y);\n    return 0;\n}',
              expected_output: '9',
              hints: [
                '需要求 x 和 y 的和',
                '加法运算符是 +',
                '把 ___ 替换为 +',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Student 结构体（name, score），通过指针访问成员，输出 "小明: 95"。',
              starter_code: '#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int score;\n} Student;\n\nint main() {\n    Student s = {"小明", 95};\n    Student *p = &s;\n    printf("%s: %d\\n", p->___, p->score);\n    return 0;\n}',
              expected_output: '小明: 95',
              hints: [
                '通过结构体指针访问成员用 -> 运算符',
                'name 成员用 p->name 访问',
                '把 ___ 替换为 ->name',
              ],
            },
          ],
          realWorldScenario:
            '在数据库引擎中，每张表的行记录就是结构体。MySQL 的行格式、'
            + 'SQLite 的记录结构、PostgreSQL 的元组都是用 struct 定义的数据布局。'
            + '理解结构体和内存对齐，对于设计高效的数据存储格式至关重要。',
        },
        {
          id: 'cpp-ch4-l2',
          title: '动态内存 malloc/free',
          order: 1,
          content_md:
            'C 语言的内存分为几个区域：栈（stack，局部变量，自动管理）、'
            + '堆（heap，动态分配，手动管理）、全局/静态区、代码区。'
            + '`malloc` 从堆上分配内存，返回 `void *` 指针；使用完毕后必须用 `free` 释放。\n\n'
            + '`malloc(size)` 分配 size 字节的连续内存，内容未初始化（随机值）。'
            + '`calloc(n, size)` 分配 n 个大小为 size 的元素并清零。'
            + '`realloc(ptr, new_size)` 调整已分配内存的大小。'
            + '这些函数声明在 `<stdlib.h>` 中。\n\n'
            + '动态内存的核心原则：**谁分配谁释放**。每块 malloc 的内存必须有对应的 free。'
            + '忘记 free 导致内存泄漏（memory leak），程序运行越久占内存越多。'
            + '重复 free 同一块内存导致 double free 错误。'
            + 'free 后继续使用指针导致 use-after-free 漏洞。\n\n'
            + 'malloc 可能失败（返回 NULL），使用前必须检查。'
            + '良好的模式：`int *arr = malloc(n * sizeof(int)); if (!arr) { 处理错误 }`。'
            + '在 C++ 中，动态内存推荐使用 new/delete 或智能指针，而非 malloc/free。',
          examples: [
            {
              title: 'malloc 动态数组',
              code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = malloc(n * sizeof(int));\n    if (arr == NULL) {\n        printf("内存分配失败\\n");\n        return 1;\n    }\n    for (int i = 0; i < n; i++) {\n        arr[i] = (i + 1) * 10;\n    }\n    for (int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    free(arr);\n    return 0;\n}',
              explanation:
                'malloc 分配 5 个 int 的空间。使用 arr[i] 像普通数组一样访问。'
                + '使用完毕必须 free(arr) 释放内存。malloc 返回的内存内容是随机的，需要自己初始化。',
            },
            {
              title: 'realloc 调整大小',
              code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = malloc(3 * sizeof(int));\n    arr[0] = 1; arr[1] = 2; arr[2] = 3;\n    arr = realloc(arr, 5 * sizeof(int));\n    arr[3] = 4; arr[4] = 5;\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    free(arr);\n    return 0;\n}',
              explanation:
                'realloc 将已分配的 3 个 int 扩展到 5 个。原有数据保留，新增部分未初始化。'
                + 'realloc 可能返回新地址（如果原位置无法扩展），所以要用返回值更新指针。',
            },
            {
              title: '动态结构体',
              code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main() {\n    Point *p = malloc(sizeof(Point));\n    p->x = 10;\n    p->y = 20;\n    printf("点: (%d, %d)\\n", p->x, p->y);\n    free(p);\n    return 0;\n}',
              explanation:
                'malloc 分配一个 Point 结构体大小的内存。通过指针 p->x、p->y 访问成员。'
                + '动态分配的结构体在堆上，生命周期由程序员控制，直到 free 才释放。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 malloc 分配 3 个 int 的空间，分别赋值 10, 20, 30，输出后释放。输出 "10 20 30"。',
              starter_code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = malloc(3 * sizeof(int));\n    arr[0] = 10;\n    arr[1] = 20;\n    arr[2] = 30;\n    for (int i = 0; i < 3; i++) {\n        printf("%d ", arr[___]);\n    }\n    printf("\\n");\n    free(arr);\n    return 0;\n}',
              expected_output: '10 20 30',
              hints: [
                '循环变量 i 从 0 到 2',
                '数组下标用 i',
                '把 ___ 替换为 i',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 malloc 分配一个 int 的空间，赋值为 42，通过指针输出，然后释放。',
              starter_code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *p = malloc(sizeof(___));\n    *p = 42;\n    printf("%d\\n", *p);\n    free(p);\n    return 0;\n}',
              expected_output: '42',
              hints: [
                '分配一个 int 大小的内存',
                'sizeof 的参数是 int',
                '把 ___ 替换为 int',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 calloc 分配 4 个 int 并初始化为 0，然后全部赋值为 5，输出 "5 5 5 5"。',
              starter_code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = calloc(4, sizeof(int));\n    for (int i = 0; i < 4; i++) {\n        arr[i] = ___;\n    }\n    for (int i = 0; i < 4; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    free(arr);\n    return 0;\n}',
              expected_output: '5 5 5 5',
              hints: [
                '每个元素都赋值为 5',
                '把 ___ 替换为 5',
                'calloc 分配的内存已初始化为 0，但这里需要改为 5',
              ],
            },
          ],
          realWorldScenario:
            '实现一个简单的内存分配器（memory allocator）是系统编程的经典项目。'
            + 'malloc/free 本身就是用 C 实现的库函数，它管理一块大的堆内存，'
            + '将其切分为小块供程序使用。理解 malloc/free 的工作原理，'
            + '是理解程序内存使用和性能调优的基础。Python 解释器、Redis、Nginx '
            + '都有自己的内存分配器来优化性能。',
        },
        {
          id: 'cpp-ch4-l3',
          title: '文件 I/O',
          order: 2,
          content_md:
            '文件 I/O 让程序能够持久化数据。C 标准库 `<stdio.h>` 提供了文件操作接口。'
            + '`FILE *fopen(path, mode)` 打开文件，返回文件指针。'
            + '模式："r" 读、"w" 写（覆盖）、"a" 追加、"rb"/"wb" 二进制读写。'
            + '使用完毕必须 `fclose` 关闭文件，否则可能丢失数据。\n\n'
            + '文本读写：`fprintf(fp, format, ...)` 向文件写入格式化文本，'
            + '`fscanf(fp, format, ...)` 从文件读取。'
            + '`fgets(buf, size, fp)` 读取一行，`fputs(str, fp)` 写入字符串。'
            + '二进制读写：`fread` 和 `fwrite` 读写原始字节块。\n\n'
            + '文件操作必须检查错误。fopen 失败返回 NULL（文件不存在、无权限等），'
            + '使用前必须检查。良好的模式：`FILE *fp = fopen(...); if (!fp) { perror(...); return; }`。'
            + 'fscanf 和 fgets 也有返回值，可用于判断是否到达文件末尾（EOF）。\n\n'
            + '在嵌入式和系统编程中，文件 I/O 还用于设备交互——Linux 中一切皆文件，'
            + '串口、网络套接字、甚至进程信息都可以通过文件接口操作。',
          examples: [
            {
              title: '写入文件',
              code: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("/tmp/test.txt", "w");\n    if (fp == NULL) {\n        printf("无法打开文件\\n");\n        return 1;\n    }\n    fprintf(fp, "第一行\\n");\n    fprintf(fp, "第二行\\n");\n    fputs("第三行\\n", fp);\n    fclose(fp);\n    printf("写入完成\\n");\n    return 0;\n}',
              explanation:
                'fopen 以写模式打开文件（不存在则创建，存在则覆盖）。'
                + 'fprintf 和 fputs 向文件写入内容。fclose 关闭文件并刷新缓冲区。'
                + '不调用 fclose 可能导致数据丢失。',
            },
            {
              title: '读取文件',
              code: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("/tmp/test.txt", "w");\n    fprintf(fp, "Hello\\nWorld\\n");\n    fclose(fp);\n    fp = fopen("/tmp/test.txt", "r");\n    char buf[100];\n    while (fgets(buf, sizeof(buf), fp) != NULL) {\n        printf("%s", buf);\n    }\n    fclose(fp);\n    return 0;\n}',
              explanation:
                '先写入两行内容，再以读模式打开。fgets 逐行读取直到文件末尾返回 NULL。'
                + 'fgets 保留换行符，所以 printf 用 %s 不加 \\n。sizeof(buf) 防止缓冲区溢出。',
            },
            {
              title: '二进制文件',
              code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {10, 20, 30, 40, 50};\n    FILE *fp = fopen("/tmp/data.bin", "wb");\n    fwrite(nums, sizeof(int), 5, fp);\n    fclose(fp);\n    int read_nums[5];\n    fp = fopen("/tmp/data.bin", "rb");\n    fread(read_nums, sizeof(int), 5, fp);\n    fclose(fp);\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", read_nums[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
              explanation:
                'fwrite 将 5 个 int 直接写入二进制文件，fread 读取回来。'
                + '二进制 I/O 比文本 I/O 更高效（无需格式转换），但文件不可读。'
                + '适用于保存中间计算结果、数据库存储等场景。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '将字符串 "CodeLearn" 写入 /tmp/note.txt，再读取并输出。',
              starter_code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    FILE *fp = fopen("/tmp/note.txt", "w");\n    fprintf(fp, "CodeLearn");\n    fclose(fp);\n    fp = fopen("/tmp/note.txt", "r");\n    char buf[100];\n    fgets(buf, sizeof(buf), fp);\n    fclose(fp);\n    printf("%s\\n", ___);\n    return 0;\n}',
              expected_output: 'CodeLearn',
              hints: [
                '读取的内容存放在 buf 中',
                '把 ___ 替换为 buf',
                'printf("%s\\n", buf) 输出读取到的字符串',
              ],
            },
            {
              type: 'output-match',
              prompt: '向文件写入两行 "AAA" 和 "BBB"，读取并输出两行。输出 "AAA\\nBBB"。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("/tmp/lines.txt", "w");\n    fprintf(fp, "AAA\\n");\n    fprintf(fp, "BBB\\n");\n    fclose(fp);\n    fp = fopen("/tmp/lines.txt", "r");\n    char buf[100];\n    while (fgets(buf, sizeof(buf), fp) != NULL) {\n        printf("%s", ___);\n    }\n    fclose(fp);\n    return 0;\n}',
              expected_output: 'AAA\nBBB\n',
              hints: [
                'fgets 读取的内容在 buf 中，且包含换行符',
                '把 ___ 替换为 buf',
                'printf("%s", buf) 会输出包含换行符的内容',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 fwrite 将数组 {1, 2, 3} 写入二进制文件，用 fread 读取后输出 "1 2 3"。',
              starter_code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {1, 2, 3};\n    FILE *fp = fopen("/tmp/nums.bin", "wb");\n    fwrite(nums, sizeof(int), 3, fp);\n    fclose(fp);\n    int result[3];\n    fp = fopen("/tmp/nums.bin", "rb");\n    fread(result, sizeof(int), 3, fp);\n    fclose(fp);\n    for (int i = 0; i < 3; i++) {\n        printf("%d ", result[___]);\n    }\n    printf("\\n");\n    return 0;\n}',
              expected_output: '1 2 3',
              hints: [
                '循环变量 i 从 0 到 2',
                '数组下标用 i',
                '把 ___ 替换为 i',
              ],
            },
          ],
          realWorldScenario:
            '日志系统是文件 I/O 的典型应用。Nginx、MySQL、Redis 等服务'
            + '都通过文件 I/O 写入运行日志，用于故障排查和审计。'
            + '配置文件读取、数据持久化、CSV 导出、报表生成等场景都依赖文件操作。'
            + '在高性能场景中，还需要考虑缓冲策略和异步写入。',
        },
        {
          id: 'cpp-ch4-l4',
          title: '链表实现',
          order: 3,
          content_md:
            '链表是最基础的数据结构之一，也是指针和动态内存的综合应用。'
            + '单向链表的每个节点包含数据和指向下一个节点的指针：'
            + '`struct Node { int data; struct Node *next; }`。'
            + '最后一个节点的 next 指向 NULL，表示链表结束。\n\n'
            + '链表与数组的区别：数组内存连续、随机访问 O(1)，但插入删除 O(n)；'
            + '链表内存不连续、访问 O(n)，但插入删除 O(1)（已知位置时）。'
            + '链表不需要预分配大小，可以动态增长，但每个节点额外存储指针，空间开销更大。\n\n'
            + '链表的核心操作：创建节点（malloc）、头部插入、尾部追加、遍历、删除节点（free）。'
            + '插入和删除需要仔细调整指针，常见错误是丢失指针导致内存泄漏或链表断裂。'
            + '使用临时指针保存下一个节点的地址是安全操作的技巧。\n\n'
            + '链表是更复杂数据结构的基础：双向链表、循环链表、栈、队列、树的实现都基于链表思想。'
            + 'Linux 内核大量使用链表管理进程、文件描述符、设备等内核对象。',
          examples: [
            {
              title: '创建与遍历链表',
              code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\n\nint main() {\n    Node *head = malloc(sizeof(Node));\n    head->data = 1;\n    head->next = malloc(sizeof(Node));\n    head->next->data = 2;\n    head->next->next = malloc(sizeof(Node));\n    head->next->next->data = 3;\n    head->next->next->next = NULL;\n    Node *p = head;\n    while (p != NULL) {\n        printf("%d ", p->data);\n        p = p->next;\n    }\n    printf("\\n");\n    while (head != NULL) {\n        Node *temp = head;\n        head = head->next;\n        free(temp);\n    }\n    return 0;\n}',
              explanation:
                '手动创建 3 个节点的链表：1->2->3->NULL。遍历用 while 循环，'
                + 'p = p->next 前进到下一个节点。最后逐个 free 释放内存，避免泄漏。'
                + '使用临时指针 temp 保存当前节点，因为 free 后就不能再访问了。',
            },
            {
              title: '头部插入',
              code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\n\nNode* insert_front(Node *head, int value) {\n    Node *new_node = malloc(sizeof(Node));\n    new_node->data = value;\n    new_node->next = head;\n    return new_node;\n}\n\nint main() {\n    Node *head = NULL;\n    head = insert_front(head, 3);\n    head = insert_front(head, 2);\n    head = insert_front(head, 1);\n    Node *p = head;\n    while (p) {\n        printf("%d ", p->data);\n        p = p->next;\n    }\n    printf("\\n");\n    return 0;\n}',
              explanation:
                '头部插入：新节点的 next 指向当前头，然后新节点成为新的头。'
                + '依次插入 3、2、1 后，链表为 1->2->3。头部插入是 O(1) 操作。',
            },
            {
              title: '统计链表长度',
              code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\n\nint list_length(Node *head) {\n    int count = 0;\n    Node *p = head;\n    while (p != NULL) {\n        count++;\n        p = p->next;\n    }\n    return count;\n}\n\nint main() {\n    Node *head = malloc(sizeof(Node));\n    head->data = 10;\n    head->next = malloc(sizeof(Node));\n    head->next->data = 20;\n    head->next->next = NULL;\n    printf("长度: %d\\n", list_length(head));\n    return 0;\n}',
              explanation:
                'list_length 遍历链表计数节点。从头到尾遍历直到 NULL。'
                + '这是链表最基本的操作之一，展示了指针遍历的标准模式。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 3 个节点的链表（数据分别为 10, 20, 30），遍历输出 "10 20 30"。',
              starter_code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\n\nint main() {\n    Node *head = malloc(sizeof(Node));\n    head->data = 10;\n    head->next = malloc(sizeof(Node));\n    head->next->data = 20;\n    head->next->next = malloc(sizeof(Node));\n    head->next->next->data = 30;\n    head->next->next->next = NULL;\n    Node *p = head;\n    while (p != NULL) {\n        printf("%d ", p->___);\n        p = p->next;\n    }\n    printf("\\n");\n    return 0;\n}',
              expected_output: '10 20 30',
              hints: [
                '输出节点数据用 p->data',
                '把 ___ 替换为 ->data',
                'p->data 访问当前节点的数据成员',
              ],
            },
            {
              type: 'output-match',
              prompt: '实现函数 list_length 计算链表长度。链表 5->6->7 的长度为 3。',
              starter_code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\n\nint list_length(Node *head) {\n    int count = 0;\n    Node *p = head;\n    while (p != NULL) {\n        count++;\n        p = p->___;\n    }\n    return count;\n}\n\nint main() {\n    Node *head = malloc(sizeof(Node));\n    head->data = 5;\n    head->next = malloc(sizeof(Node));\n    head->next->data = 6;\n    head->next->next = malloc(sizeof(Node));\n    head->next->next->data = 7;\n    head->next->next->next = NULL;\n    printf("%d\\n", list_length(head));\n    return 0;\n}',
              expected_output: '3',
              hints: [
                '遍历链表时需要前进到下一个节点',
                '通过 p->next 访问下一个节点',
                '把 ___ 替换为 ->next',
              ],
            },
            {
              type: 'output-match',
              prompt: '用头部插入方式依次插入 1, 2, 3，链表顺序变为 3->2->1，输出 "3 2 1"。',
              starter_code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\n\nNode* insert_front(Node *head, int value) {\n    Node *new_node = malloc(sizeof(Node));\n    new_node->data = value;\n    new_node->___ = head;\n    return new_node;\n}\n\nint main() {\n    Node *head = NULL;\n    head = insert_front(head, 1);\n    head = insert_front(head, 2);\n    head = insert_front(head, 3);\n    Node *p = head;\n    while (p) {\n        printf("%d ", p->data);\n        p = p->next;\n    }\n    printf("\\n");\n    return 0;\n}',
              expected_output: '3 2 1',
              hints: [
                '新节点的 next 应该指向原来的头节点',
                '通过 new_node->next 访问 next 成员',
                '把 ___ 替换为 ->next',
              ],
            },
          ],
          realWorldScenario:
            '操作系统内核大量使用链表管理各种资源。Linux 内核的 task_list 链表'
            + '管理所有进程的 task_struct，文件系统的 inode 链表管理打开的文件，'
            + '网络协议栈用链表管理套接字和路由表。理解链表是理解操作系统内部数据结构的基础。',
        },
      ],
    },

    // ================================================================
    // 第 5 章：C++ 基础过渡
    // ================================================================
    {
      id: 'cpp-ch5',
      title: 'C++ 基础过渡',
      order: 4,
      lessons: [
        {
          id: 'cpp-ch5-l1',
          title: 'iostream 与命名空间',
          order: 0,
          content_md:
            '从 C 过渡到 C++，第一个变化是输入输出方式。C++ 使用 `iostream` 库：'
            + '`std::cout << "Hello"` 输出，`std::cin >> x` 输入。'
            + '`<<` 是插入运算符，`>>` 是提取运算符，它们会自动处理类型，无需格式说明符。\n\n'
            + '`std::endl` 表示换行并刷新缓冲区，等价于 `\\n` 加 `fflush(stdout)`。'
            + '在性能敏感的场景中，`\\n` 比 `std::endl` 更快（不刷新缓冲区）。'
            + '`std::cout` 相比 `printf` 的优势是类型安全，劣势是格式化能力较弱。\n\n'
            + '命名空间（namespace）是 C++ 的组织机制，避免命名冲突。'
            + '`std` 是标准库命名空间。可以用 `using namespace std;` 省略 `std::` 前缀，'
            + '但在头文件中不推荐（会污染命名空间）。'
            + '也可以用 `using std::cout;` 只引入特定名称。\n\n'
            + 'C++ 兼容大部分 C 代码，可以在 C++ 程序中使用 `printf` 和 `scanf`（需要 `<cstdio>`）。'
            + '但推荐使用 iostream，因为它更安全、更符合 C++ 风格。'
            + 'C++ 还引入了 `<string>` 头文件提供 std::string 类，比 C 字符串更安全方便。',
          examples: [
            {
              title: 'cout 输出',
              code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, C++!" << std::endl;\n    int age = 20;\n    double pi = 3.14;\n    std::cout << "年龄: " << age << ", pi: " << pi << std::endl;\n    return 0;\n}',
              explanation:
                'std::cout 配合 << 运算符输出，自动识别类型。'
                + '多个 << 可以链式输出。std::endl 换行并刷新缓冲区。'
                + '与 printf 相比，无需格式说明符，类型安全。',
            },
            {
              title: 'cin 输入与命名空间',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    cout << "请输入姓名和年龄: ";\n    cin >> name >> age;\n    cout << "你好, " << name << "! 你 " << age << " 岁。" << endl;\n    return 0;\n}',
              explanation:
                'using namespace std 省略 std:: 前缀。cin >> 自动读取输入并转换类型。'
                + 'string 是 C++ 标准字符串类，比 C 的 char[] 更安全，无需手动管理内存。',
            },
            {
              title: '自定义命名空间',
              code: '#include <iostream>\n\nnamespace Math {\n    const double PI = 3.14159265358979;\n    double square(double x) { return x * x; }\n}\n\nint main() {\n    std::cout << "PI = " << Math::PI << std::endl;\n    std::cout << "3的平方 = " << Math::square(3) << std::endl;\n    return 0;\n}',
              explanation:
                'namespace 将相关的常量和函数组织在一起，避免与其他代码的命名冲突。'
                + '使用时用 Math::PI 访问。大型项目通过命名空间划分模块。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 std::cout 输出 "Hello C++" 并换行。',
              starter_code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello C++" << std::___;\n    return 0;\n}',
              expected_output: 'Hello C++',
              hints: [
                '换行并刷新缓冲区用 std::endl',
                '把 ___ 替换为 endl',
                'std::endl 输出换行符并刷新输出缓冲区',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 using namespace std，输出整数 42 和字符串 "Answer"。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << ___ << " " << "Answer" << endl;\n    return 0;\n}',
              expected_output: '42 Answer',
              hints: [
                '先输出整数 42',
                '把 ___ 替换为 42',
                'cout << 42 << " " << "Answer" 输出 "42 Answer"',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 std::cout 输出 3.14 和 2.71 两行，每行一个数字。',
              starter_code: '#include <iostream>\n\nint main() {\n    std::cout << 3.14 << std::endl;\n    std::cout << ___ << std::endl;\n    return 0;\n}',
              expected_output: '3.14\n2.71',
              hints: [
                '第二行输出 2.71',
                '把 ___ 替换为 2.71',
                '两条 cout 语句各输出一行',
              ],
            },
          ],
          realWorldScenario:
            '在现代 C++ 项目中，iostream 和命名空间是标准配置。'
            + 'Google C++ Style Guide、LLVM Coding Standards 等规范都推荐使用 iostream '
            + '而非 printf。命名空间用于组织大型代码库——Boost 库有上百个命名空间，'
            + 'Google Protocol Buffers 用 google::protobuf 命名空间隔离代码。',
        },
        {
          id: 'cpp-ch5-l2',
          title: '引用 reference',
          order: 1,
          content_md:
            '引用（reference）是 C++ 对 C 指针的改进。引用是变量的别名：'
            + '`int &ref = x` 后，ref 和 x 指向同一块内存，操作 ref 就是操作 x。'
            + '引用必须在声明时初始化，且不能重新绑定到其他变量——这是它比指针更安全的地方。\n\n'
            + '引用最常见的用途是函数参数。C 语言中要让函数修改外部变量必须传指针（`void f(int *p)`），'
            + 'C++ 中可以传引用（`void f(int &r)`），语法更简洁，调用时直接传变量名即可。'
            + '这既避免了值传递的拷贝开销，又避免了指针的不安全性。\n\n'
            + '`const` 引用是一个重要的概念：`void f(const int &r)` 表示函数不会修改 r 指向的值。'
            + 'const 引用可以绑定到临时值（右值），如 `const int &r = 42` 是合法的。'
            + '传递大型对象时，用 const 引用既避免拷贝又保证安全：`void f(const std::string &s)`。\n\n'
            + '引用与指针的区别：引用不能为空（NULL），不能不初始化，不能重新绑定，'
            + '使用时不需要解引用（直接用名字）。这些限制使引用比指针更安全，'
            + '适合在不需要"重定向"的场景中替代指针。',
          examples: [
            {
              title: '引用基本用法',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int &ref = x;  // ref 是 x 的别名\n    ref = 20;\n    cout << "x = " << x << endl;\n    int y = 30;\n    ref = y;  // 这是赋值，不是重新绑定！\n    cout << "x = " << x << ", y = " << y << endl;\n    return 0;\n}',
              explanation:
                'ref 是 x 的引用（别名），修改 ref 就是修改 x。'
                + 'ref = y 不是让 ref 绑定到 y，而是把 y 的值赋给 x（通过 ref）。'
                + '引用一旦绑定就不能改变目标。',
            },
            {
              title: '引用传参',
              code: '#include <iostream>\nusing namespace std;\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    cout << "交换前: " << x << " " << y << endl;\n    swap(x, y);\n    cout << "交换后: " << x << " " << y << endl;\n    return 0;\n}',
              explanation:
                'C++ 的引用参数让 swap 的调用更自然——直接传 x 和 y，不需要 & 取地址。'
                + '函数内部 a 和 b 是实参的引用，修改它们就是修改原变量。'
                + '这比 C 的指针版本更安全、更易读。',
            },
            {
              title: 'const 引用',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid print_info(const string &name, const int &age) {\n    cout << "姓名: " << name << ", 年龄: " << age << endl;\n}\n\nint main() {\n    string n = "小明";\n    print_info(n, 20);\n    print_info("小红", 21);\n    return 0;\n}',
              explanation:
                'const 引用参数既避免拷贝（string 对象可能很大），又保证不被修改。'
                + 'const 引用可以接受字面量（"小红"）和临时值。'
                + '这是 C++ 中传递大型对象的标准方式。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用引用传参实现 double_it(int &n)，将 n 翻倍。调用后 x=5 变为 10。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nvoid double_it(int &n) {\n    n = n ___ 2;\n}\n\nint main() {\n    int x = 5;\n    double_it(x);\n    cout << x << endl;\n    return 0;\n}',
              expected_output: '10',
              hints: [
                '翻倍就是乘以 2',
                '把 ___ 替换为 *',
                'n = n * 2 将引用的变量翻倍',
              ],
            },
            {
              type: 'output-match',
              prompt: '用引用实现 swap(int &a, int &b) 交换两个变量。x=3, y=7 交换后输出 "7 3"。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = ___;\n    b = temp;\n}\n\nint main() {\n    int x = 3, y = 7;\n    swap(x, y);\n    cout << x << " " << y << endl;\n    return 0;\n}',
              expected_output: '7 3',
              hints: [
                'a 应该赋值为 b 的值',
                '把 ___ 替换为 b',
                'swap 逻辑：temp=a, a=b, b=temp',
              ],
            },
            {
              type: 'output-match',
              prompt: '创建 int x=42 的引用 ref，通过 ref 修改 x 为 100，输出 x 的值。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    int &___ = x;\n    ref = 100;\n    cout << x << endl;\n    return 0;\n}',
              expected_output: '100',
              hints: [
                '引用变量名应该是 ref',
                '把 ___ 替换为 ref',
                'int &ref = x; 声明 ref 为 x 的引用',
              ],
            },
          ],
          realWorldScenario:
            '在 C++ 库设计中，引用参数是 API 设计的核心。STL 的排序算法 '
            + 'std::sort 接收迭代器引用，std::copy 接收引用避免拷贝。'
            + '现代 C++ 几乎所有传递大型对象的函数都使用 const 引用参数，'
            + '这是性能和安全的最佳平衡点。',
        },
        {
          id: 'cpp-ch5-l3',
          title: '函数重载与默认参数',
          order: 2,
          content_md:
            'C++ 支持函数重载（overloading）——多个同名函数可以有不同参数列表。'
            + '编译器根据参数类型和数量自动选择调用哪个版本。'
            + '例如 `int max(int a, int b)` 和 `double max(double a, double b)` 可以共存。'
            + 'C 语言不支持重载，每个函数名必须唯一。\n\n'
            + '默认参数让函数调用更灵活。`void f(int a, int b = 10, int c = 20)` 中，'
            + '调用 f(1) 等价于 f(1, 10, 20)，f(1, 2) 等价于 f(1, 2, 20)。'
            + '默认参数必须从右向左连续设置——不能跳过中间参数。'
            + '默认参数在声明中指定，定义中不再重复。\n\n'
            + '重载和默认参数都可以让接口更灵活，但适用场景不同。'
            + '重载适合不同类型或不同语义的操作（如 `print(int)` 和 `print(string)`），'
            + '默认参数适合可选参数（如 `open_file(path, mode="r")`）。\n\n'
            + '重载解析规则比较复杂：编译器优先选择精确匹配，其次是类型转换。'
            + '如果两个重载都匹配（二义性），编译器报错。'
            + '在使用重载时，应确保各重载版本的行为一致，避免使用者困惑。',
          examples: [
            {
              title: '函数重载',
              code: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\ndouble add(double a, double b) {\n    return a + b;\n}\n\nstring add(string a, string b) {\n    return a + b;\n}\n\nint main() {\n    cout << add(3, 4) << endl;\n    cout << add(1.5, 2.5) << endl;\n    cout << add("Hello, ", "World!") << endl;\n    return 0;\n}',
              explanation:
                '三个同名 add 函数分别处理 int、double 和 string。'
                + '编译器根据实参类型选择正确版本。重载让同一概念的不同类型实现共用一个名字，'
                + 'API 更直观。',
            },
            {
              title: '默认参数',
              code: '#include <iostream>\nusing namespace std;\n\nvoid greet(string name, string greeting = "你好", string punct = "!") {\n    cout << greeting << ", " << name << punct << endl;\n}\n\nint main() {\n    greet("小明");\n    greet("小红", "嗨");\n    greet("小刚", "Hello", "?");\n    return 0;\n}',
              explanation:
                'greet 有两个默认参数。调用时省略的参数使用默认值。'
                + '默认参数必须从右到左设置。这让函数接口既能简单调用又能灵活定制。',
            },
            {
              title: '重载与默认参数结合',
              code: '#include <iostream>\nusing namespace std;\n\nint power(int base, int exp = 2) {\n    int result = 1;\n    for (int i = 0; i < exp; i++) result *= base;\n    return result;\n}\n\ndouble power(double base, int exp = 2) {\n    double result = 1;\n    for (int i = 0; i < exp; i++) result *= base;\n    return result;\n}\n\nint main() {\n    cout << power(3) << endl;\n    cout << power(2, 10) << endl;\n    cout << power(1.5) << endl;\n    return 0;\n}',
              explanation:
                'power 函数重载了 int 和 double 版本，且都有默认参数 exp=2。'
                + 'power(3) 调用 int 版本求平方，power(1.5) 调用 double 版本。'
                + '重载和默认参数结合让接口非常灵活。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '重载 print 函数：print(int) 输出 "整数: N"，print(double) 输出 "浮点: N"。调用 print(42) 输出 "整数: 42"。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nvoid print(int x) {\n    cout << "整数: " << x << endl;\n}\n\nvoid print(double x) {\n    cout << "浮点: " << x << endl;\n}\n\nint main() {\n    print(___);\n    return 0;\n}',
              expected_output: '整数: 42',
              hints: [
                '要调用 int 版本的 print，需要传整数',
                '把 ___ 替换为 42',
                '42 是 int 类型，匹配 print(int)',
              ],
            },
            {
              type: 'output-match',
              prompt: '用默认参数实现 greet(name, greeting="你好")。调用 greet("张三") 输出 "你好, 张三"。',
              starter_code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid greet(string name, string greeting = ___) {\n    cout << greeting << ", " << name << endl;\n}\n\nint main() {\n    greet("张三");\n    return 0;\n}',
              expected_output: '你好, 张三',
              hints: [
                '默认参数值是 "你好"',
                '字符串默认参数需要用双引号包裹',
                '把 ___ 替换为 "你好"',
              ],
            },
            {
              type: 'output-match',
              prompt: '重载 max 函数：int 版本和 double 版本。调用 max(3.5, 2.1) 输出 3.5。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nint max_val(int a, int b) {\n    return a > b ? a : b;\n}\n\ndouble max_val(double a, double b) {\n    return a > b ? a : ___;\n}\n\nint main() {\n    cout << max_val(3.5, 2.1) << endl;\n    return 0;\n}',
              expected_output: '3.5',
              hints: [
                'max 函数返回较大的值',
                '当 a > b 时返回 a，否则返回 b',
                '把 ___ 替换为 b',
              ],
            },
          ],
          realWorldScenario:
            '在 API 接口设计中，函数重载和默认参数是提升用户体验的关键。'
            + 'C++ 的 std::thread 构造函数、std::sort 算法都大量使用重载来适配不同调用方式。'
            + '游戏引擎如 Unreal Engine 用重载提供同一功能的多种参数组合，'
            + '让开发者用最自然的方式调用。',
        },
        {
          id: 'cpp-ch5-l4',
          title: '内联函数与 auto',
          order: 3,
          content_md:
            '`inline` 关键字建议编译器将函数体直接展开到调用处，避免函数调用开销。'
            + '适用于短小、频繁调用的函数。但 `inline` 只是建议，编译器可能不采纳'
            + '（如递归函数、复杂函数）。现代编译器会自动内联，所以手动 inline 的重要性降低。\n\n'
            + '`auto` 关键字（C++11）让编译器自动推导变量类型。`auto x = 42` 推导为 int，'
            + '`auto s = "hello"` 推导为 const char*。这在类型名很长时（如迭代器）特别有用：'
            + '`auto it = vec.begin()` 比 `std::vector<int>::iterator it = vec.begin()` 简洁得多。\n\n'
            + '范围 for 循环（range-based for）是 C++11 引入的语法糖：'
            + '`for (int x : arr) { ... }` 遍历数组或容器。配合 auto：`for (auto &x : arr)`。'
            + '引用方式避免拷贝，const 引用保证只读：`for (const auto &x : arr)`。\n\n'
            + '`auto` 的注意事项：`auto x = {1, 2, 3}` 推导为 std::initializer_list；'
            + '对于引用类型需要显式写 `auto &`。`decltype` 关键字可以获取表达式的类型，'
            + '用于更复杂的类型推导场景。现代 C++ 鼓励使用 auto 提高可读性和可维护性。',
          examples: [
            {
              title: 'inline 函数',
              code: '#include <iostream>\nusing namespace std;\n\ninline int square(int x) {\n    return x * x;\n}\n\nint main() {\n    int a = 5;\n    cout << a << " 的平方是 " << square(a) << endl;\n    return 0;\n}',
              explanation:
                'inline 建议编译器将 square(5) 替换为 5*5，避免函数调用开销。'
                + '对于简单函数，inline 能提升性能。但编译器会自行判断是否内联。',
            },
            {
              title: 'auto 类型推导',
              code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    auto x = 42;        // int\n    auto y = 3.14;      // double\n    auto s = "Hello"s;  // std::string (C++14)\n    auto v = vector<int>{1, 2, 3, 4, 5};\n    cout << "x=" << x << ", y=" << y << ", s=" << s << endl;\n    cout << "v size=" << v.size() << endl;\n    return 0;\n}',
              explanation:
                'auto 让编译器推导类型，减少冗长的类型声明。'
                + '在 STL 容器和迭代器场景中特别有用。'
                + '注意 auto 会推导出值类型，需要引用时用 auto&。',
            },
            {
              title: '范围 for 循环',
              code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    cout << "数组: ";\n    for (auto x : arr) {\n        cout << x << " ";\n    }\n    cout << endl;\n    vector<int> nums = {10, 20, 30};\n    int sum = 0;\n    for (const auto &n : nums) {\n        sum += n;\n    }\n    cout << "总和: " << sum << endl;\n    return 0;\n}',
              explanation:
                '范围 for 循环遍历数组和容器，语法简洁。'
                + 'for (auto x : arr) 拷贝元素，for (auto &x : arr) 引用元素（可修改），'
                + 'for (const auto &x : arr) const 引用（只读且高效）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 auto 声明变量 x 赋值为 100，用 cout 输出。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    ___ x = 100;\n    cout << x << endl;\n    return 0;\n}',
              expected_output: '100',
              hints: [
                'auto 关键字让编译器自动推导类型',
                '把 ___ 替换为 auto',
                'auto x = 100; 编译器推导 x 为 int 类型',
              ],
            },
            {
              type: 'output-match',
              prompt: '用范围 for 循环遍历数组 {1, 2, 3, 4, 5} 并求和，输出 15。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int sum = 0;\n    for (auto x : ___) {\n        sum += x;\n    }\n    cout << sum << endl;\n    return 0;\n}',
              expected_output: '15',
              hints: [
                '范围 for 循环遍历的容器是 arr',
                '把 ___ 替换为 arr',
                'for (auto x : arr) 逐个取出数组元素',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 inline 函数 square(int x) 计算平方。调用 square(9) 输出 81。',
              starter_code: '#include <iostream>\nusing namespace std;\n\ninline int square(int x) {\n    return x ___ x;\n}\n\nint main() {\n    cout << square(9) << endl;\n    return 0;\n}',
              expected_output: '81',
              hints: [
                '平方就是 x 乘以 x',
                '乘法运算符是 *',
                '把 ___ 替换为 *',
              ],
            },
          ],
          realWorldScenario:
            '在现代 C++ 代码库中，auto 和范围 for 循环已是标配。'
            + 'C++20 的 concepts 和 ranges 进一步增强了类型推导能力。'
            + '在高性能计算和游戏引擎中，inline 函数配合模板可以实现零开销抽象——'
            + '既保持面向对象的优雅，又达到手写 C 代码的性能。',
        },
      ],
    },

    // ================================================================
    // 第 6 章：面向对象编程
    // ================================================================
    {
      id: 'cpp-ch6',
      title: '面向对象编程',
      order: 5,
      lessons: [
        {
          id: 'cpp-ch6-l1',
          title: '类与对象',
          order: 0,
          content_md:
            '类（class）是 C++ 面向对象编程的基础。类将数据和操作数据的函数封装在一起。'
            + '`class ClassName { ... };` 定义类，成员变量（属性）和成员函数（方法）放在类内。'
            + '访问控制符 `public`、`private`、`protected` 控制成员的可见性。\n\n'
            + '`public` 成员可以从类外部访问，`private` 成员只能在类内部访问。'
            + '这是封装的核心——隐藏实现细节，只暴露必要接口。'
            + '良好的设计原则：数据成员设为 private，通过 public 方法（getter/setter）访问。'
            + '这允许后续修改实现而不影响使用者。\n\n'
            + '对象是类的实例。`ClassName obj;` 创建一个对象，`obj.method()` 调用方法。'
            + '每个对象有自己的成员变量副本，但共享同一份方法代码。'
            + '`this` 指针指向当前对象，在方法内部可以用来区分成员变量和局部变量。\n\n'
            + '与 C 的 struct 相比，C++ 的 class 增加了访问控制、方法和继承。'
            + 'C++ 的 struct 也能有方法和访问控制，唯一区别是默认访问级别'
            + '（struct 默认 public，class 默认 private）。',
          examples: [
            {
              title: '定义类与创建对象',
              code: '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    double width;\n    double height;\npublic:\n    void set(double w, double h) { width = w; height = h; }\n    double area() { return width * height; }\n};\n\nint main() {\n    Rectangle r;\n    r.set(5.0, 3.0);\n    cout << "面积: " << r.area() << endl;\n    return 0;\n}',
              explanation:
                'Rectangle 类有 private 数据成员和 public 方法。set 设置宽高，'
                + 'area 计算面积。外部不能直接访问 width/height，必须通过方法操作。'
                + '这是封装的体现。',
            },
            {
              title: 'this 指针',
              code: '#include <iostream>\nusing namespace std;\n\nclass Point {\n    int x, y;\npublic:\n    Point(int x, int y) { this->x = x; this->y = y; }\n    void print() { cout << "(" << x << ", " << y << ")" << endl; }\n};\n\nint main() {\n    Point p(3, 4);\n    p.print();\n    return 0;\n}',
              explanation:
                'this 指针指向当前对象。this->x 区分成员变量和参数（两者同名时）。'
                + '每个对象有自己的 x、y 副本，但共享同一份方法代码。',
            },
            {
              title: '封装：getter/setter',
              code: '#include <iostream>\nusing namespace std;\n\nclass BankAccount {\n    double balance;\npublic:\n    BankAccount() : balance(0) {}\n    void deposit(double amount) { if (amount > 0) balance += amount; }\n    double get_balance() const { return balance; }\n};\n\nint main() {\n    BankAccount acc;\n    acc.deposit(1000);\n    cout << "余额: " << acc.get_balance() << endl;\n    return 0;\n}',
              explanation:
                'balance 是 private，外部不能直接修改，只能通过 deposit 存款。'
                + 'get_balance 用 const 修饰表示不修改对象状态。'
                + '这种封装保护了数据完整性——外部无法直接设置负余额。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 Rectangle 类，set 方法设置宽高（5和4），area 方法返回面积。输出 20。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\n    int w, h;\npublic:\n    void set(int w, int h) { this->w = w; this->h = h; }\n    int area() { return w * ___; }\n};\n\nint main() {\n    Rectangle r;\n    r.set(5, 4);\n    cout << r.area() << endl;\n    return 0;\n}',
              expected_output: '20',
              hints: [
                '面积 = 宽 * 高',
                '高用 h 表示',
                '把 ___ 替换为 h',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Circle 类，set_radius(5)，area() 返回 3.14*r*r。输出 78.5。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Circle {\n    double r;\npublic:\n    void set_radius(double r) { this->r = r; }\n    double area() { return 3.14 * r ___ r; }\n};\n\nint main() {\n    Circle c;\n    c.set_radius(5);\n    cout << c.area() << endl;\n    return 0;\n}',
              expected_output: '78.5',
              hints: [
                '圆面积 = π * r * r',
                '乘法用 *',
                '把 ___ 替换为 *',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Counter 类，count 初始为0，increment 使 count 加1，get 返回 count。调用3次 increment，输出 3。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Counter {\n    int count;\npublic:\n    Counter() { count = 0; }\n    void increment() { count++; }\n    int get() { return ___; }\n};\n\nint main() {\n    Counter c;\n    c.increment();\n    c.increment();\n    c.increment();\n    cout << c.get() << endl;\n    return 0;\n}',
              expected_output: '3',
              hints: [
                'get 方法返回 count 成员',
                '把 ___ 替换为 count',
                '调用3次 increment 后 count 为 3',
              ],
            },
          ],
          realWorldScenario:
            '在游戏开发中，每个游戏对象（角色、敌人、道具）都是一个类的实例。'
            + 'Unreal Engine 的 Actor 类、Unity 的 MonoBehaviour 都基于面向对象设计。'
            + '封装让游戏对象的内部状态（血量、位置）不被外部直接修改，'
            + '只能通过定义好的接口（TakeDamage、MoveTo）操作。',
        },
        {
          id: 'cpp-ch6-l2',
          title: '构造函数与析构函数',
          order: 1,
          content_md:
            '构造函数（constructor）在对象创建时自动调用，用于初始化成员变量。'
            + '与类同名，无返回类型。`Point(int x, int y) : x(x), y(y) {}` 使用初始化列表，'
            + '比在函数体内赋值更高效（直接初始化而非先默认构造再赋值）。\n\n'
            + '析构函数（destructor）在对象销毁时自动调用，用于释放资源。'
            + '名为 `~ClassName()`，无参数无返回值。如果类管理了动态内存、文件句柄等资源，'
            + '必须在析构函数中释放。这是 RAII（资源获取即初始化）模式的基础。\n\n'
            + '拷贝构造函数在对象以值传递或以同类对象初始化时调用：`Point p2(p1)`。'
            + '默认的拷贝构造函数执行浅拷贝——逐成员复制。如果类有指针成员，'
            + '浅拷贝会导致两个对象指向同一块内存，析构时 double free。'
            + '这时需要自定义拷贝构造函数实现深拷贝。\n\n'
            + '规则三（Rule of Three）：如果需要自定义析构函数、拷贝构造函数或拷贝赋值运算符中的任一个，'
            + '通常三个都需要自定义。C++11 后扩展为规则五（Rule of Five），'
            + '加入了移动构造和移动赋值。',
          examples: [
            {
              title: '构造函数与初始化列表',
              code: '#include <iostream>\nusing namespace std;\n\nclass Student {\n    string name;\n    int age;\npublic:\n    Student(string n, int a) : name(n), age(a) {}\n    void print() { cout << name << ", " << age << "岁" << endl; }\n};\n\nint main() {\n    Student s1("小明", 20);\n    Student s2("小红", 21);\n    s1.print();\n    s2.print();\n    return 0;\n}',
              explanation:
                '构造函数 Student(string, int) 在创建对象时自动调用。'
                + '初始化列表 name(n), age(a) 直接初始化成员，比函数体内赋值更高效。'
                + '对象创建时已有有效状态，不需要额外的 set 调用。',
            },
            {
              title: '析构函数',
              code: '#include <iostream>\nusing namespace std;\n\nclass Logger {\n    string name;\npublic:\n    Logger(string n) : name(n) { cout << "[" << name << "] 开始" << endl; }\n    ~Logger() { cout << "[" << name << "] 结束" << endl; }\n};\n\nint main() {\n    Logger a("A");\n    {\n        Logger b("B");\n    }\n    cout << "main 结束" << endl;\n    return 0;\n}',
              explanation:
                '构造函数输出"开始"，析构函数输出"结束"。'
                + 'B 在内层花括号结束时析构（作用域结束），A 在 main 结束时析构。'
                + '析构顺序与构造相反（栈的后进先出特性）。',
            },
            {
              title: '默认参数构造',
              code: '#include <iostream>\nusing namespace std;\n\nclass Vector3D {\n    double x, y, z;\npublic:\n    Vector3D(double x = 0, double y = 0, double z = 0) : x(x), y(y), z(z) {}\n    void print() { cout << "(" << x << ", " << y << ", " << z << ")" << endl; }\n};\n\nint main() {\n    Vector3D v1;\n    Vector3D v2(1.0);\n    Vector3D v3(1.0, 2.0, 3.0);\n    v1.print();\n    v2.print();\n    v3.print();\n    return 0;\n}',
              explanation:
                '构造函数使用默认参数，可以无参、部分参数或全部参数调用。'
                + 'v1 全用默认值 (0,0,0)，v2 只传 x (1,0,0)，v3 传全部值。'
                + '默认参数构造函数可以替代默认构造函数。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 Person 类，构造函数接受 name 和 age，print 方法输出 "张三 20"。创建 Person p("张三", 20)。',
              starter_code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\n    string name;\n    int age;\npublic:\n    Person(string n, int a) : name(n), age(a) {}\n    void print() { cout << name << " " << age << ___; }\n};\n\nint main() {\n    Person p("张三", 20);\n    p.print();\n    return 0;\n}',
              expected_output: '张三 20',
              hints: [
                'print 方法需要输出换行',
                '用 endl 或 "\\n"',
                '把 ___ 替换为 << endl',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Box 类，构造函数初始化 width 和 height，area() 返回面积。Box b(6, 7)，输出面积 42。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Box {\n    int w, h;\npublic:\n    Box(int w, int h) : w(w), h(h) {}\n    int area() { return w ___ h; }\n};\n\nint main() {\n    Box b(6, 7);\n    cout << b.area() << endl;\n    return 0;\n}',
              expected_output: '42',
              hints: [
                '面积 = 宽 * 高',
                '乘法用 *',
                '把 ___ 替换为 *',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义带析构函数的类，构造时输出 "开始"，析构时输出 "结束"。注意析构在 return 0 后、main 退出前发生。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Tracer {\npublic:\n    Tracer() { cout << "开始" << endl; }\n    ~Tracer() { cout << "结束" << ___; }\n};\n\nint main() {\n    Tracer t;\n    return 0;\n}',
              expected_output: '开始\n结束',
              hints: [
                '析构函数也需要输出换行',
                '用 endl',
                '把 ___ 替换为 endl',
              ],
            },
          ],
          realWorldScenario:
            '在资源管理对象中，构造函数获取资源（打开文件、分配内存、获取锁），'
            + '析构函数释放资源。C++ 标准库的 ifstream、unique_lock、thread '
            + '都遵循这一模式。RAII 是 C++ 最重要的资源管理惯用法，'
            + '保证资源在任何代码路径（包括异常）下都不会泄漏。',
        },
        {
          id: 'cpp-ch6-l3',
          title: '继承',
          order: 2,
          content_md:
            '继承（inheritance）是面向对象的核心特性，允许新类复用已有类的代码。'
            + '`class Derived : public Base { ... }` 表示 Derived 继承 Base。'
            + 'Derived 自动获得 Base 的成员（public 和 protected），可以添加新成员或覆盖已有方法。\n\n'
            + '`public` 继承保持 Base 成员的访问级别不变（is-a 关系）。'
            + '`protected` 继承将 Base 的 public 成员变为 protected。'
            + '`private` 继承将所有成员变为 private（has-a 关系，通常用组合替代）。'
            + '绝大多数情况下使用 public 继承。\n\n'
            + '派生类构造函数先调用基类构造函数，再执行自己的初始化。'
            + '析构顺序相反：先析构派生类，再析构基类。'
            + '如果基类有默认构造函数，派生类可以不显式调用；否则需要在初始化列表中调用。\n\n'
            + '`protected` 成员对类外部不可见，但对派生类可见——这提供了'
            + '介于 public 和 private 之间的访问级别。继承层次过深会导致代码难以维护，'
            + '一般建议不超过 3 层。',
          examples: [
            {
              title: '基本继承',
              code: '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void eat() { cout << "吃东西" << endl; }\n    void sleep() { cout << "睡觉" << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() { cout << "汪汪!" << endl; }\n};\n\nint main() {\n    Dog d;\n    d.eat();\n    d.sleep();\n    d.bark();\n    return 0;\n}',
              explanation:
                'Dog 继承 Animal，自动获得 eat() 和 sleep() 方法，同时添加自己的 bark()。'
                + '继承实现了代码复用——不需要在 Dog 中重复编写 eat 和 sleep。',
            },
            {
              title: '构造函数链',
              code: '#include <iostream>\nusing namespace std;\n\nclass Shape {\nprotected:\n    string name;\npublic:\n    Shape(string n) : name(n) { cout << "Shape构造" << endl; }\n};\n\nclass Circle : public Shape {\n    double radius;\npublic:\n    Circle(string n, double r) : Shape(n), radius(r) { cout << "Circle构造" << endl; }\n    void print() { cout << name << ": r=" << radius << endl; }\n};\n\nint main() {\n    Circle c("圆", 5.0);\n    c.print();\n    return 0;\n}',
              explanation:
                'Circle 构造函数先调用 Shape(n) 初始化基类，再初始化 radius。'
                + '构造顺序：先基类后派生类。protected 成员 name 在派生类 Circle 中可访问。',
            },
            {
              title: '方法覆盖',
              code: '#include <iostream>\nusing namespace std;\n\nclass Bird {\npublic:\n    void fly() { cout << "飞行" << endl; }\n    void sound() { cout << "叫声" << endl; }\n};\n\nclass Penguin : public Bird {\npublic:\n    void fly() { cout << "企鹅不会飞" << endl; }\n    void sound() { cout << "嘎嘎" << endl; }\n};\n\nint main() {\n    Penguin p;\n    p.fly();\n    p.sound();\n    return 0;\n}',
              explanation:
                'Penguin 覆盖了 Bird 的 fly 和 sound 方法。调用时执行派生类的版本。'
                + '注意这里是非虚函数覆盖（隐藏），不会发生动态绑定——'
                + '通过基类指针调用仍执行基类版本。动态绑定需要 virtual（下一课讲解）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: 'Animal 类有 eat() 方法输出 "吃"，Cat 继承 Animal 并添加 meow() 输出 "喵"。创建 Cat，调用两个方法。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void eat() { cout << "吃" << endl; }\n};\n\nclass Cat : public ___ {\npublic:\n    void meow() { cout << "喵" << endl; }\n};\n\nint main() {\n    Cat c;\n    c.eat();\n    c.meow();\n    return 0;\n}',
              expected_output: '吃\n喵',
              hints: [
                'Cat 继承自 Animal',
                '把 ___ 替换为 Animal',
                'public Animal 表示公有继承',
              ],
            },
            {
              type: 'output-match',
              prompt: 'Shape 基类有 name 成员，Square 继承 Shape 并添加 side。构造 Square("方块", 5)，输出 "方块 5"。',
              starter_code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Shape {\nprotected:\n    string name;\npublic:\n    Shape(string n) : name(n) {}\n};\n\nclass Square : public Shape {\n    int side;\npublic:\n    Square(string n, int s) : Shape(n), side(s) {}\n    void print() { cout << name << " " << side << ___; }\n};\n\nint main() {\n    Square sq("方块", 5);\n    sq.print();\n    return 0;\n}',
              expected_output: '方块 5',
              hints: [
                'print 方法需要输出换行',
                '用 << endl',
                '把 ___ 替换为 << endl',
              ],
            },
            {
              type: 'output-match',
              prompt: 'Vehicle 基类有 start() 输出 "启动"，Car 继承 Vehicle 并覆盖 start() 输出 "汽车启动"。创建 Car 调用 start()。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Vehicle {\npublic:\n    void start() { cout << "启动" << endl; }\n};\n\nclass Car : public Vehicle {\npublic:\n    void start() { cout << "汽车" << ___ << endl; }\n};\n\nint main() {\n    Car c;\n    c.start();\n    return 0;\n}',
              expected_output: '汽车启动',
              hints: [
                '需要输出 "汽车启动"',
                '把 ___ 替换为 "启动"',
                'Car 的 start 覆盖了 Vehicle 的 start',
              ],
            },
          ],
          realWorldScenario:
            '在 GUI 框架中，所有控件继承自 Widget 基类。Qt 的 QWidget、'
            + 'wxWidgets 的 wxWindow 都通过继承层次提供按钮、文本框、列表等控件。'
            + '游戏引擎中 GameObject -> Character -> Player 的继承链'
            + '让代码复用和扩展变得自然。',
        },
        {
          id: 'cpp-ch6-l4',
          title: '多态与虚函数',
          order: 3,
          content_md:
            '多态（polymorphism）是面向对象最强大的特性。通过 `virtual` 虚函数，'
            + '基类指针调用派生类的方法，实现"同一接口，不同行为"。'
            + '`virtual void draw() { ... }` 声明虚函数，派生类可以覆盖它。\n\n'
            + '当用基类指针指向派生类对象并调用虚函数时，实际执行的是派生类的版本——'
            + '这就是动态绑定（运行时多态）。编译器通过虚函数表（vtable）实现这一机制。'
            + '每个有虚函数的类都有一个 vtable，存储虚函数的地址。对象内部存有指向 vtable 的指针。\n\n'
            + '纯虚函数 `virtual void draw() = 0` 没有实现，强制派生类必须覆盖。'
            + '含纯虚函数的类是抽象类（abstract class），不能实例化。'
            + '抽象类定义接口，派生类提供实现——这是面向对象设计的核心模式。\n\n'
            + '虚析构函数是继承中的重要原则：如果基类有虚函数，析构函数也应该是 virtual 的。'
            + '否则通过基类指针删除派生类对象时，派生类的析构函数不会被调用，导致资源泄漏。'
            + '这是 C++ 面试的高频考点。',
          examples: [
            {
              title: '虚函数与动态绑定',
              code: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() { cout << "画图形" << endl; }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << "画圆形" << endl; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() override { cout << "画方形" << endl; }\n};\n\nint main() {\n    Shape *s1 = new Circle();\n    Shape *s2 = new Square();\n    s1->draw();\n    s2->draw();\n    delete s1;\n    delete s2;\n    return 0;\n}',
              explanation:
                '基类指针 s1、s2 指向不同派生类对象。虽然指针类型是 Shape*，'
                + '但 draw() 是虚函数，实际调用的是对象类型的版本。'
                + 'override 关键字（C++11）确保正确覆盖基类虚函数。',
            },
            {
              title: '纯虚函数与抽象类',
              code: '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() = 0;  // 纯虚函数\n    void breathe() { cout << "呼吸" << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override { cout << "汪汪" << endl; }\n};\n\nclass Cat : public Animal {\npublic:\n    void sound() override { cout << "喵喵" << endl; }\n};\n\nint main() {\n    Dog d;\n    Cat c;\n    d.sound();\n    c.sound();\n    d.breathe();\n    return 0;\n}',
              explanation:
                'Animal 是抽象类（含纯虚函数 sound），不能创建 Animal 对象。'
                + 'Dog 和 Cat 必须实现 sound()。breathe() 是普通方法，所有派生类继承使用。'
                + '抽象类定义接口契约，派生类提供具体实现。',
            },
            {
              title: '多态计算面积',
              code: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual ~Shape() {}\n};\n\nclass Rectangle : public Shape {\n    double w, h;\npublic:\n    Rectangle(double w, double h) : w(w), h(h) {}\n    double area() override { return w * h; }\n};\n\nclass Circle : public Shape {\n    double r;\npublic:\n    Circle(double r) : r(r) {}\n    double area() override { return 3.14159 * r * r; }\n};\n\nint main() {\n    Shape *shapes[] = {new Rectangle(4, 5), new Circle(3)};\n    for (int i = 0; i < 2; i++) {\n        cout << "面积: " << shapes[i]->area() << endl;\n        delete shapes[i];\n    }\n    return 0;\n}',
              explanation:
                'Shape 是抽象类，定义 area() 接口。Rectangle 和 Circle 各自实现 area()。'
                + '用基类指针数组统一管理不同形状，循环调用 area() 自动分发到正确的实现。'
                + 'virtual ~Shape() 确保通过基类指针删除时调用派生类析构函数。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: 'Shape 基类有虚函数 draw()，Circle 覆盖它输出 "画圆"。通过基类指针调用 Circle 的 draw()。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() { cout << "画图形" << endl; }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() ___ { cout << "画圆" << endl; }\n};\n\nint main() {\n    Shape *s = new Circle();\n    s->draw();\n    delete s;\n    return 0;\n}',
              expected_output: '画圆',
              hints: [
                '覆盖虚函数用 override 关键字',
                '把 ___ 替换为 override',
                'override 确保正确覆盖基类的虚函数',
              ],
            },
            {
              type: 'output-match',
              prompt: 'Animal 抽象类有纯虚函数 sound()，Dog 实现它输出 "汪"。创建 Dog 调用 sound()。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() = ___;\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override { cout << "汪" << endl; }\n};\n\nint main() {\n    Dog d;\n    d.sound();\n    return 0;\n}',
              expected_output: '汪',
              hints: [
                '纯虚函数用 = 0 声明',
                '把 ___ 替换为 0',
                '纯虚函数使 Animal 成为抽象类',
              ],
            },
            {
              type: 'output-match',
              prompt: 'Shape 基类有虚函数 area()，Rectangle(3, 4) 返回 12。通过基类指针调用 area() 输出 12。',
              starter_code: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual int area() { return 0; }\n};\n\nclass Rectangle : public Shape {\n    int w, h;\npublic:\n    Rectangle(int w, int h) : w(w), h(h) {}\n    int area() override { return w ___ h; }\n};\n\nint main() {\n    Shape *s = new Rectangle(3, 4);\n    cout << s->area() << endl;\n    delete s;\n    return 0;\n}',
              expected_output: '12',
              hints: [
                '矩形面积 = 宽 * 高',
                '乘法用 *',
                '把 ___ 替换为 *',
              ],
            },
          ],
          realWorldScenario:
            '插件系统架构是多态的经典应用。浏览器通过统一的插件接口加载不同格式的解码器，'
            + 'IDE 通过统一的编译器接口支持不同语言的编译器，'
            + '图形渲染引擎通过统一的 Renderable 接口渲染不同类型的对象。'
            + '多态让系统在不修改现有代码的情况下扩展新功能（开闭原则）。',
        },
      ],
    },

    // ================================================================
    // 第 7 章：STL 与模板
    // ================================================================
    {
      id: 'cpp-ch7',
      title: 'STL 与模板',
      order: 6,
      lessons: [
        {
          id: 'cpp-ch7-l1',
          title: 'vector 动态数组',
          order: 0,
          content_md:
            '`std::vector` 是 C++ STL 最常用的容器，相当于可自动扩容的动态数组。'
            + '它封装了底层的内存管理，使用时不需要手动 malloc/free。'
            + '`#include <vector>` 引入头文件，`vector<int> v` 声明一个 int 类型的 vector。\n\n'
            + '核心操作：`push_back` 尾部添加元素，`pop_back` 删除尾部元素，'
            + '`size` 返回元素个数，`[]` 或 `at` 访问元素（at 会越界检查），'
            + '`clear` 清空，`empty` 判断是否为空。'
            + 'vector 在尾部操作是 O(1)，在中间插入删除是 O(n)。\n\n'
            + 'vector 的内存是连续的，因此可以用指针或 `&v[0]` 获取底层数组指针，'
            + '与 C 接口交互。当元素数量超过当前容量时，vector 会自动分配更大的内存（通常是 2 倍），'
            + '并将旧元素复制过去——这会导致迭代器、指针和引用失效。\n\n'
            + '`reserve(n)` 可以预分配容量避免多次扩容，`resize(n)` 改变元素个数。'
            + '在性能敏感场景中，合理使用 reserve 可以显著提升性能。',
          examples: [
            {
              title: 'vector 基本操作',
              code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v;\n    v.push_back(10);\n    v.push_back(20);\n    v.push_back(30);\n    cout << "大小: " << v.size() << endl;\n    cout << "元素: ";\n    for (int i = 0; i < v.size(); i++) {\n        cout << v[i] << " ";\n    }\n    cout << endl;\n    v.pop_back();\n    cout << "pop后大小: " << v.size() << endl;\n    return 0;\n}',
              explanation:
                'push_back 在尾部添加元素，size 返回当前元素个数。'
                + '用 v[i] 像数组一样访问元素。pop_back 删除最后一个元素。'
                + 'vector 自动管理内存，无需手动释放。',
            },
            {
              title: '范围 for 与初始化',
              code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {5, 3, 8, 1, 9, 2};\n    int sum = 0;\n    for (const auto &n : nums) {\n        sum += n;\n    }\n    cout << "总和: " << sum << endl;\n    cout << "最大: ";\n    int max_val = nums[0];\n    for (const auto &n : nums) {\n        if (n > max_val) max_val = n;\n    }\n    cout << max_val << endl;\n    return 0;\n}',
              explanation:
                '用初始化列表 {5, 3, 8, 1, 9, 2} 创建 vector。'
                + '范围 for 循环配合 const auto& 遍历，避免拷贝。'
                + '遍历一次求和，再遍历一次找最大值。',
            },
            {
              title: 'vector 排序与查找',
              code: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 8, 1, 9, 3};\n    sort(v.begin(), v.end());\n    cout << "排序后: ";\n    for (auto x : v) cout << x << " ";\n    cout << endl;\n    auto it = find(v.begin(), v.end(), 8);\n    if (it != v.end()) cout << "找到8在位置" << (it - v.begin()) << endl;\n    return 0;\n}',
              explanation:
                'sort 对 vector 排序（默认升序）。find 查找元素，返回迭代器。'
                + 'it - v.begin() 计算找到位置的索引。如果未找到，返回 v.end()。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 vector<int> 添加 10, 20, 30，用 size() 输出元素个数 3。',
              starter_code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v;\n    v.push_back(10);\n    v.push_back(20);\n    v.push_back(30);\n    cout << v.___() << endl;\n    return 0;\n}',
              expected_output: '3',
              hints: [
                '获取元素个数的成员函数是 size()',
                '把 ___ 替换为 size',
                'v.size() 返回 vector 中元素的个数',
              ],
            },
            {
              type: 'output-match',
              prompt: '创建 vector<int> = {1, 2, 3, 4, 5}，用范围 for 循环求和，输出 15。',
              starter_code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    int sum = 0;\n    for (auto x : v) {\n        sum ___ x;\n    }\n    cout << sum << endl;\n    return 0;\n}',
              expected_output: '15',
              hints: [
                '求和用累加运算',
                '把 ___ 替换为 +=',
                'sum += x 等价于 sum = sum + x',
              ],
            },
            {
              type: 'output-match',
              prompt: '创建 vector<int> = {3, 1, 4, 1, 5}，用 sort 排序后输出 "1 1 3 4 5"。',
              starter_code: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3, 1, 4, 1, 5};\n    sort(v.___(), v.end());\n    for (auto x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
              expected_output: '1 1 3 4 5 ',
              hints: [
                'sort 需要传入起始和结束迭代器',
                '起始迭代器用 v.begin()',
                '把 ___ 替换为 begin',
              ],
            },
          ],
          realWorldScenario:
            '在实际开发中，vector 几乎替代了 C 风格数组。'
            + '数据库引擎用 vector 存储查询结果集，游戏引擎用 vector 管理场景中的实体，'
            + '机器学习框架用 vector 存储张量数据。连续内存特性使 vector '
            + '对缓存友好，在遍历密集型场景中性能优于链表。',
        },
        {
          id: 'cpp-ch7-l2',
          title: 'map 与 string',
          order: 1,
          content_md:
            '`std::map` 是 C++ STL 的关联容器，基于红黑树实现，按 key 有序存储键值对。'
            + '`map<string, int> m` 声明 key 为 string、value 为 int 的 map。'
            + '插入用 `m[key] = value` 或 `m.insert({key, value})`，查找用 `m[key]` 或 `m.find(key)`。\n\n'
            + 'map 的查找、插入、删除都是 O(log n)。如果不需要有序，可以用 `std::unordered_map`（哈希表），'
            + '平均 O(1) 但最坏 O(n)。遍历 map 时元素按 key 排序输出。'
            + '`m.count(key)` 返回 0 或 1（map 不允许重复 key）。\n\n'
            + '`std::string` 是 C++ 的字符串类，封装了 C 字符串的操作。'
            + '相比 C 的 char 数组，string 自动管理内存，不会缓冲区溢出，支持 `+` 连接、'
            + '`==` 比较、`size()` 长度、`substr` 子串、`find` 查找等操作。'
            + 'string 大大简化了字符串处理。\n\n'
            + 'string 与 C 字符串的转换：`c_str()` 返回 const char* 指针，'
            + '`string s(cstr)` 从 C 字符串构造。在需要与 C API 交互时经常用到这些转换。',
          examples: [
            {
              title: 'map 基本操作',
              code: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> ages;\n    ages["小明"] = 20;\n    ages["小红"] = 21;\n    ages["小刚"] = 19;\n    cout << "小明的年龄: " << ages["小明"] << endl;\n    for (const auto &p : ages) {\n        cout << p.first << ": " << p.second << endl;\n    }\n    return 0;\n}',
              explanation:
                '用 [] 操作符插入和访问元素。遍历时每个元素是 pair，'
                + 'p.first 是 key，p.second 是 value。map 自动按 key 排序输出。',
            },
            {
              title: 'string 操作',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s1 = "Hello";\n    string s2 = " World";\n    string s3 = s1 + s2;\n    cout << "连接: " << s3 << endl;\n    cout << "长度: " << s3.length() << endl;\n    cout << "子串: " << s3.substr(0, 5) << endl;\n    cout << "查找: " << s3.find("World") << endl;\n    if (s1 == "Hello") cout << "相等" << endl;\n    return 0;\n}',
              explanation:
                'string 支持用 + 连接、== 比较、length/size 获取长度、'
                + 'substr 截取子串、find 查找子串位置。相比 C 字符串函数更安全更直观。',
            },
            {
              title: 'map 统计词频',
              code: '#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<string> words = {"apple", "banana", "apple", "cherry", "banana", "apple"};\n    map<string, int> count;\n    for (const auto &w : words) {\n        count[w]++;\n    }\n    for (const auto &p : count) {\n        cout << p.first << ": " << p.second << "次" << endl;\n    }\n    return 0;\n}',
              explanation:
                '遍历单词列表，count[w]++ 自动统计每个单词出现次数。'
                + '如果 key 不存在，map 会自动插入并初始化 value 为 0，然后 ++。'
                + '这是 map 最经典的用法之一。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 map<string, int>，设置 m["one"]=1, m["two"]=2，输出 m["two"] 的值。',
              starter_code: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> m;\n    m["one"] = 1;\n    m["two"] = 2;\n    cout << m[___] << endl;\n    return 0;\n}',
              expected_output: '2',
              hints: [
                '用 key 访问 map 中的值',
                '把 ___ 替换为 "two"',
                'm["two"] 返回 key "two" 对应的值 2',
              ],
            },
            {
              type: 'output-match',
              prompt: '创建 string s = "Hello World"，用 length() 输出字符串长度。',
              starter_code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s = "Hello World";\n    cout << s.___() << endl;\n    return 0;\n}',
              expected_output: '11',
              hints: [
                '获取字符串长度的成员函数是 length() 或 size()',
                '把 ___ 替换为 length',
                '"Hello World" 有 11 个字符（含空格）',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 map 统计数组 {1, 2, 1, 3, 1} 中数字 1 出现的次数，输出 3。',
              starter_code: '#include <iostream>\n#include <map>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 1, 3, 1};\n    map<int, int> count;\n    for (int i = 0; i < 5; i++) {\n        count[arr[i]]++;\n    }\n    cout << count[___] << endl;\n    return 0;\n}',
              expected_output: '3',
              hints: [
                '要查询数字 1 出现的次数',
                '把 ___ 替换为 1',
                'count[1] 返回数字 1 出现的次数',
              ],
            },
          ],
          realWorldScenario:
            '在配置管理系统中，map 是存储键值对配置的标准选择。'
            + 'JSON 解析器用 map 存储对象属性，数据库用 map 实现索引，'
            + '编译器用 map 管理符号表（变量名到类型的映射）。'
            + 'string 和 map 的组合是 C++ 文本处理的基础工具。',
        },
        {
          id: 'cpp-ch7-l3',
          title: '模板 template',
          order: 2,
          content_md:
            '模板（template）是 C++ 泛型编程的核心机制。函数模板可以用于任意类型：'
            + '`template <typename T> T max_val(T a, T b) { return a > b ? a : b; }`。'
            + '编译器根据实参类型自动生成对应版本（模板实例化）。\n\n'
            + '类模板让数据结构可以适配任意类型。`template <typename T> class Stack { ... }` '
            + '定义一个通用栈类。使用时 `Stack<int>` 或 `Stack<string>` 指定具体类型。'
            + 'STL 的 vector、map、set 都是类模板。\n\n'
            + '模板参数可以有多个：`template <typename K, typename V> class Map { ... }`。'
            + '也可以有非类型参数：`template <int N> class Array { T data[N]; }`。'
            + '模板在编译期实例化，没有运行时开销——这是 C++ 泛型编程优于 Java 泛型的特点。\n\n'
            + '模板的代码必须在使用前可见（通常放在头文件中），因为编译器需要看到完整定义才能实例化。'
            + '模板特化（specialization）可以为特定类型提供定制实现。'
            + '现代 C++ 大量使用模板实现零开销抽象和编译期计算。',
          examples: [
            {
              title: '函数模板',
              code: '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT max_val(T a, T b) {\n    return a > b ? a : b;\n}\n\nint main() {\n    cout << max_val(3, 7) << endl;\n    cout << max_val(3.14, 2.71) << endl;\n    cout << max_val(\'a\', \'z\') << endl;\n    return 0;\n}',
              explanation:
                'max_val 模板自动适配 int、double、char 等类型。'
                + '编译器为每种类型生成独立的函数版本。一个模板定义替代多个重载。',
            },
            {
              title: '类模板：通用栈',
              code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntemplate <typename T>\nclass Stack {\n    vector<T> data;\npublic:\n    void push(T val) { data.push_back(val); }\n    T pop() { T val = data.back(); data.pop_back(); return val; }\n    bool empty() { return data.empty(); }\n};\n\nint main() {\n    Stack<int> si;\n    si.push(1); si.push(2); si.push(3);\n    while (!si.empty()) cout << si.pop() << " ";\n    cout << endl;\n    return 0;\n}',
              explanation:
                'Stack<T> 是通用栈，T 可以是任何类型。用 vector 存储，'
                + 'push 压栈，pop 弹栈。Stack<int> 实例化为 int 栈。'
                + 'LIFO（后进先出）特性：压入 1,2,3 弹出 3,2,1。',
            },
            {
              title: '多类型参数模板',
              code: '#include <iostream>\nusing namespace std;\n\ntemplate <typename T, typename U>\nvoid print_pair(T first, U second) {\n    cout << "(" << first << ", " << second << ")" << endl;\n}\n\nint main() {\n    print_pair(1, "hello");\n    print_pair(3.14, 42);\n    print_pair("name", "value");\n    return 0;\n}',
              explanation:
                '模板可以有多个类型参数。T 和 U 可以是不同类型。'
                + 'print_pair(1, "hello") 实例化为 T=int, U=const char* 版本。'
                + '这是泛型编程的强大之处。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义函数模板 get_max 返回较大值。调用 get_max(10, 20) 输出 20。',
              starter_code: '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT get_max(T a, T b) {\n    return a > b ? a : ___;\n}\n\nint main() {\n    cout << get_max(10, 20) << endl;\n    return 0;\n}',
              expected_output: '20',
              hints: [
                '当 a > b 时返回 a，否则返回 b',
                '把 ___ 替换为 b',
                'get_max(10, 20) 中 20 > 10，返回 20',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义类模板 Box<T>，含 value 成员，构造函数初始化，get() 返回 value。Box<int> b(42)，输出 42。',
              starter_code: '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nclass Box {\n    T value;\npublic:\n    Box(T v) : value(v) {}\n    T get() { return ___; }\n};\n\nint main() {\n    Box<int> b(42);\n    cout << b.get() << endl;\n    return 0;\n}',
              expected_output: '42',
              hints: [
                'get 方法返回 value 成员',
                '把 ___ 替换为 value',
                'Box<int> 模板实例化为 int 版本',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义模板函数 add，返回两数之和。调用 add(3, 4) 输出 7。',
              starter_code: '#include <iostream>\nusing namespace std;\n\ntemplate <typename ___>\nT add(T a, T b) {\n    return a + b;\n}\n\nint main() {\n    cout << add(3, 4) << endl;\n    return 0;\n}',
              expected_output: '7',
              hints: [
                '模板类型参数名通常是 T',
                '把 ___ 替换为 T',
                'template <typename T> 声明类型参数 T',
              ],
            },
          ],
          realWorldScenario:
            'STL 本身就是模板的杰作。vector、map、sort 等都是模板，'
            + '可以用于任意类型。Boost 库大量使用模板实现高级泛型组件。'
            + 'Eigen 线性代数库用模板实现编译期矩阵维度检查，'
            + '让类型系统在编译期捕获维度不匹配错误。',
        },
        {
          id: 'cpp-ch7-l4',
          title: '迭代器与算法',
          order: 3,
          content_md:
            '迭代器（iterator）是 STL 的粘合剂，连接容器和算法。'
            + '迭代器类似指针，指向容器中的元素。`begin()` 返回指向首元素的迭代器，'
            + '`end()` 返回指向尾后位置（past-the-end）的迭代器。\n\n'
            + '迭代器分类：输入迭代器（只读前进）、输出迭代器（只写前进）、'
            + '前向迭代器（读写前进）、双向迭代器（可前进后退）、随机访问迭代器（可跳转）。'
            + 'vector 和 deque 提供随机访问迭代器，list 提供双向迭代器，map 提供双向迭代器。\n\n'
            + 'STL 算法定义在 `<algorithm>` 中，通过迭代器操作容器。'
            + '常用算法：`sort`（排序）、`find`（查找）、`count`（计数）、'
            + '`copy`（复制）、`reverse`（反转）、`accumulate`（累加）、'
            + '`min_element`/`max_element`（最值）、`for_each`（遍历处理）。\n\n'
            + '算法与容器解耦是 STL 设计的精髓——一个 sort 算法可以用于 vector、deque、'
            + '原生数组等任何支持随机访问迭代器的容器。这种泛型设计使代码复用达到极致。',
          examples: [
            {
              title: '迭代器遍历',
              code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v = {10, 20, 30, 40, 50};\n    for (auto it = v.begin(); it != v.end(); it++) {\n        cout << *it << " ";\n    }\n    cout << endl;\n    return 0;\n}',
              explanation:
                'it 是迭代器，*it 解引用获取元素值。it++ 前进到下一个元素。'
                + 'begin() 到 end() 遍历整个容器。这是迭代器的标准使用模式。',
            },
            {
              title: 'STL 算法',
              code: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 8, 1, 9, 3};\n    sort(v.begin(), v.end());\n    cout << "排序: ";\n    for (auto x : v) cout << x << " ";\n    cout << endl;\n    int sum = accumulate(v.begin(), v.end(), 0);\n    cout << "总和: " << sum << endl;\n    auto max_it = max_element(v.begin(), v.end());\n    cout << "最大: " << *max_it << endl;\n    return 0;\n}',
              explanation:
                'sort 排序，accumulate 累加（在 <numeric> 中），'
                + 'max_element 返回最大元素迭代器，用 * 解引用获取值。'
                + '算法通过迭代器操作，与容器类型无关。',
            },
            {
              title: 'reverse 与 count',
              code: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 2, 4, 2, 5};\n    reverse(v.begin(), v.end());\n    cout << "反转: ";\n    for (auto x : v) cout << x << " ";\n    cout << endl;\n    int cnt = count(v.begin(), v.end(), 2);\n    cout << "2出现" << cnt << "次" << endl;\n    return 0;\n}',
              explanation:
                'reverse 原地反转容器元素。count 统计等于指定值的元素个数。'
                + '这两个算法都通过迭代器范围 [begin, end) 操作。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用迭代器遍历 vector {1, 2, 3}，输出 "1 2 3"。',
              starter_code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3};\n    for (auto it = v.begin(); it != v.___(); it++) {\n        cout << *it << " ";\n    }\n    cout << endl;\n    return 0;\n}',
              expected_output: '1 2 3 ',
              hints: [
                '循环终止条件是到达 end() 迭代器',
                '把 ___ 替换为 end',
                'v.end() 指向最后一个元素之后的位置',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 accumulate 计算 vector {1, 2, 3, 4, 5} 的总和，输出 15。',
              starter_code: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    int sum = accumulate(v.begin(), v.___(), 0);\n    cout << sum << endl;\n    return 0;\n}',
              expected_output: '15',
              hints: [
                'accumulate 需要结束迭代器',
                '把 ___ 替换为 end',
                'accumulate(begin, end, 初始值) 累加范围内所有元素',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 max_element 找到 vector {3, 7, 2, 9, 4} 的最大值，输出 9。',
              starter_code: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3, 7, 2, 9, 4};\n    auto it = max_element(v.begin(), v.end());\n    cout << ___ << endl;\n    return 0;\n}',
              expected_output: '9',
              hints: [
                'max_element 返回迭代器，需要解引用获取值',
                '用 *it 获取迭代器指向的值',
                '把 ___ 替换为 *it',
              ],
            },
          ],
          realWorldScenario:
            '在数据处理库中，STL 算法是构建高级操作的基础。'
            + '数据分析工具用 sort + unique 去重，用 accumulate 聚合统计，'
            + '用 find_if 条件查找。Google 的 Abseil 库、Facebook 的 Folly 库 '
            + '都在 STL 算法基础上提供更丰富的泛型算法。理解迭代器模式是'
            + '阅读和编写现代 C++ 代码的必备能力。',
        },
      ],
    },

    // ================================================================
    // 第 8 章：进阶主题
    // ================================================================
    {
      id: 'cpp-ch8',
      title: '进阶主题',
      order: 7,
      lessons: [
        {
          id: 'cpp-ch8-l1',
          title: '智能指针',
          order: 0,
          content_md:
            '智能指针是现代 C++ 管理动态内存的核心工具，通过 RAII 思想自动释放内存，'
            + '从根本上避免 `new/delete` 配对错误导致的内存泄漏与悬空指针。'
            + '`<memory>` 头文件提供了三种主要的智能指针：\n\n'
            + '**`std::unique_ptr<T>`**：独占所有权。同一时刻只能有一个 unique_ptr 拥有对象，'
            + '不可拷贝但可以 `std::move` 转移所有权。开销最小，几乎是零成本抽象，'
            + '是替代裸指针 `new/delete` 的首选。\n\n'
            + '**`std::shared_ptr<T>`**：共享所有权。内部维护引用计数，'
            + '每多一个 shared_ptr 引用，计数加 1；销毁时减 1，归零时释放对象。'
            + '适合多个对象需要共同持有同一资源的场景，但引入了控制块开销与循环引用风险。\n\n'
            + '**`std::weak_ptr<T>`**：弱引用，指向 shared_ptr 管理的对象但不增加引用计数。'
            + '主要用来打破 shared_ptr 循环引用（如双向链表、观察者模式），'
            + '通过 `lock()` 方法临时提升为 shared_ptr 来安全访问。\n\n'
            + '智能指针让"资源即对象"的思想落地：生命周期由作用域自动管理，'
            + '即使在异常发生时也能通过栈展开正确析构，是现代 C++ 区别于 C 的标志性能力。',
          examples: [
            {
              title: 'unique_ptr 独占所有权',
              code:
                '#include <iostream>\n'
                + '#include <memory>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    // make_unique 是 C++14 推荐的创建方式\n'
                + '    unique_ptr<int> p = make_unique<int>(42);\n'
                + '    cout << "值: " << *p << endl;\n\n'
                + '    // unique_ptr 独占，不能拷贝，只能 move 转移\n'
                + '    unique_ptr<int> q = move(p);\n'
                + '    cout << "转移后 p 是否为空: " << (p ? "否" : "是") << endl;\n'
                + '    cout << "q 的值: " << *q << endl;\n\n'
                + '    // 离开作用域自动释放，无需 delete\n'
                + '    return 0;\n'
                + '}',
              explanation:
                'make_unique<int>(42) 在堆上构造一个 int 并交由 unique_ptr 管理。'
                + 'move(p) 将所有权转给 q，p 变为 nullptr。'
                + '函数结束时 q 自动析构所指向对象，无需手动 delete。',
            },
            {
              title: 'shared_ptr 引用计数',
              code:
                '#include <iostream>\n'
                + '#include <memory>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    shared_ptr<int> a = make_shared<int>(100);\n'
                + '    cout << "a 引用计数: " << a.use_count() << endl;  // 1\n\n'
                + '    shared_ptr<int> b = a;  // 拷贝，共享所有权\n'
                + '    cout << "a 引用计数: " << a.use_count() << endl;  // 2\n'
                + '    cout << "b 引用计数: " << b.use_count() << endl;  // 2\n\n'
                + '    {\n'
                + '        shared_ptr<int> c = a;\n'
                + '        cout << "进入内层作用域计数: " << a.use_count() << endl;  // 3\n'
                + '    }  // c 离开作用域，计数回到 2\n'
                + '    cout << "退出内层作用域计数: " << a.use_count() << endl;  // 2\n'
                + '    return 0;\n'
                + '}',
              explanation:
                'use_count() 返回当前共享对象的 shared_ptr 数量。'
                + '拷贝 shared_ptr 计数 +1，销毁时 -1，归零才真正释放对象。'
                + '这就是为什么 shared_ptr 适合多个所有者共享同一资源。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 make_unique<int> 创建值为 99 的 unique_ptr，输出它的值。',
              starter_code:
                '#include <iostream>\n'
                + '#include <memory>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    unique_ptr<int> p = make_unique<int>(___);\n'
                + '    cout << *p << endl;\n'
                + '    return 0;\n'
                + '}',
              expected_output: '99',
              hints: [
                'make_unique<int>(值) 在堆上创建 int',
                '把 ___ 替换为 99',
                '解引用 unique_ptr 用 *p',
              ],
            },
            {
              type: 'output-match',
              prompt: '创建 shared_ptr<int> 值为 5，再拷贝一份，输出引用计数（应为 2）。',
              starter_code:
                '#include <iostream>\n'
                + '#include <memory>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    shared_ptr<int> a = make_shared<int>(5);\n'
                + '    shared_ptr<int> b = a;\n'
                + '    cout << a.___() << endl;\n'
                + '    return 0;\n'
                + '}',
              expected_output: '2',
              hints: [
                'shared_ptr 用成员函数获取引用计数',
                '方法名是 use_count',
                '把 ___ 替换为 use_count',
              ],
            },
          ],
          realWorldScenario:
            '在现代 C++ 项目中，智能指针是替代裸指针的标准做法。'
            + '游戏引擎（如 Unreal Engine）用 shared_ptr 管理 asset 资源引用，'
            + 'WebRTC 用 unique_ptr 管理网络连接对象，Chromium 用 scoped_refptr 管理线程安全对象。'
            + '实现自定义容器（如双向链表、树结构）时，'
            + '用 unique_ptr 管理子节点可避免递归析构栈溢出，用 weak_ptr 打破环引用。'
            + '理解智能指针是写出无内存泄漏、无悬空指针的现代 C++ 代码的必修课。',
        },
        {
          id: 'cpp-ch8-l2',
          title: 'RAII 资源获取即初始化',
          order: 1,
          content_md:
            'RAII（Resource Acquisition Is Initialization，资源获取即初始化）是 C++ 区别于其他语言最重要的资源管理哲学。'
            + '它的核心思想是：**把资源的生命周期绑定到对象的生命周期**——在构造函数中获取资源，'
            + '在析构函数中释放资源。由于 C++ 保证对象离开作用域时析构函数一定会被调用（即使发生异常），'
            + '资源就能被可靠地释放。\n\n'
            + 'RAII 适用于所有需要"获取-释放"配对的资源：内存、文件句柄、数据库连接、'
            + '网络 socket、互斥锁、OpenGL 纹理对象等。只要把这些资源包装成 RAII 类，'
            + '就不可能再忘记释放——这是 C++ 通过类型系统提供的强制保障。\n\n'
            + '标准库中大量设施都基于 RAII：`std::lock_guard` 管理互斥锁、'
            + '`std::fstream` 管理文件句柄、`std::vector` 管理动态数组、'
            + '`std::unique_ptr` 管理堆对象。它们都遵循"构造即获取、析构即释放"的范式。\n\n'
            + '与 Java/C# 的 GC 不同，RAII 提供的是**确定性析构**：你精确知道资源何时释放（作用域结束的瞬间），'
            + '这对文件、锁、GPU 资源这类不能等 GC 回收的资源至关重要。'
            + '这也让 C++ 在无需 GC 的前提下实现了内存安全与异常安全。',
          examples: [
            {
              title: 'RAII 文件封装',
              code:
                '#include <iostream>\n'
                + '#include <fstream>\n'
                + '#include <string>\n'
                + 'using namespace std;\n\n'
                + 'class FileGuard {\n'
                + '    ofstream f;\n'
                + 'public:\n'
                + '    // 构造时打开文件（获取资源）\n'
                + '    FileGuard(const string& path) : f(path) {\n'
                + '        cout << "打开文件: " << path << endl;\n'
                + '    }\n'
                + '    void write(const string& s) { f << s; }\n'
                + '    // 析构时自动关闭（释放资源），无需手动 close\n'
                + '    ~FileGuard() {\n'
                + '        if (f.is_open()) {\n'
                + '            cout << "析构时关闭文件" << endl;\n'
                + '            f.close();\n'
                + '        }\n'
                + '    }\n'
                + '};\n\n'
                + 'int main() {\n'
                + '    {\n'
                + '        FileGuard fg("test.txt");\n'
                + '        fg.write("RAII example");\n'
                + '    }  // fg 离开作用域，析构函数自动关闭文件\n'
                + '    cout << "已自动释放" << endl;\n'
                + '    return 0;\n'
                + '}',
              explanation:
                'FileGuard 在构造函数中打开文件，析构函数中关闭文件。'
                + '无论正常返回还是抛异常，析构函数都会被调用，文件必然被关闭。'
                + '这就是 RAII 的核心：把资源管理嵌入对象生命周期。',
            },
            {
              title: 'lock_guard 管理互斥锁',
              code:
                '#include <iostream>\n'
                + '#include <mutex>\n'
                + 'using namespace std;\n\n'
                + 'mutex m;\n\n'
                + 'void safe_print(int n) {\n'
                + '    // lock_guard 构造时加锁，析构时自动解锁\n'
                + '    lock_guard<mutex> lock(m);\n'
                + '    cout << "线程 " << n << " 进入临界区" << endl;\n'
                + '    // 即使这里抛异常，锁也会被正确释放\n'
                + '}  // 自动解锁\n\n'
                + 'int main() {\n'
                + '    safe_print(1);\n'
                + '    safe_print(2);\n'
                + '    return 0;\n'
                + '}',
              explanation:
                'lock_guard<mutex> 是 RAII 管理锁的标准工具。'
                + '构造时调用 m.lock()，析构时调用 m.unlock()。'
                + '比手动 lock/unlock 安全得多——不会忘记解锁，也不会在异常时死锁。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 RAII 类，构造函数输出 "acquired"，析构函数输出 "released"。在 main 中创建对象并观察输出。',
              starter_code:
                '#include <iostream>\n'
                + 'using namespace std;\n\n'
                + 'class Resource {\n'
                + 'public:\n'
                + '    Resource() { cout << "acquired" << endl; }\n'
                + '    ~___() { cout << "released" << endl; }\n'
                + '};\n\n'
                + 'int main() {\n'
                + '    {\n'
                + '        Resource r;\n'
                + '    }\n'
                + '    return 0;\n'
                + '}',
              expected_output: 'acquired\nreleased',
              hints: [
                '析构函数名与类名相同，前面加 ~',
                '把 ___ 替换为 Resource',
                '~Resource() 是 Resource 类的析构函数',
              ],
            },
          ],
          realWorldScenario:
            'RAII 是 C++ 工业级代码的基石。在游戏引擎中，GPU buffer、纹理、shader 都用 RAII 类包装，'
            + '确保资源不泄漏。在数据库客户端库中，连接对象用 RAII 管理 socket，'
            + '连接断开或对象销毁时自动回滚未提交事务。在操作系统开发中，'
            + '文件描述符、共享内存、信号量都通过 RAII 封装。'
            + 'Linux 内核的 C 代码也借鉴此思想（如 kvm 的 srcu），但 C 没有析构函数，'
            + '只能用 goto cleanup 模拟，远不如 C++ RAII 优雅可靠。',
        },
        {
          id: 'cpp-ch8-l3',
          title: 'Lambda 表达式',
          order: 2,
          content_md:
            'Lambda 表达式是 C++11 引入的匿名函数语法，让你能在调用处直接定义函数对象，'
            + '无需单独声明函数或仿函数类。这是函数式编程风格在 C++ 落地的关键能力，'
            + '极大简化了 STL 算法的使用。\n\n'
            + 'Lambda 语法：`[捕获列表](参数列表) -> 返回类型 { 函数体 }`。'
            + '捕获列表指定如何使用外部变量：`[]` 不捕获、`[=]` 按值捕获所有、'
            + '`[&]` 按引用捕获所有、`[x]` 按值捕获 x、`[&x]` 按引用捕获 x。'
            + '返回类型可省略，由编译器推导。\n\n'
            + 'Lambda 本质是编译器生成的闭包类（closure type），每个 Lambda 都有唯一类型。'
            + '捕获后的 Lambda 可存储在 `std::function` 中跨作用域传递，也可立即调用（IIFE）。'
            + 'Lambda 能赋值给变量、作为函数参数、作为 STL 算法的谓词。\n\n'
            + '现代 C++ 中 Lambda 无处不在：`sort` 的自定义比较、`find_if` 的查找条件、'
            + '`for_each` 的遍历回调、`transform` 的元素变换，都离不开它。'
            + '配合 STL 算法，Lambda 让 C++ 写出媲美 Python/JS 的简洁函数式代码，'
            + '同时保持零开销抽象的性能优势。',
          examples: [
            {
              title: 'Lambda 基础与捕获',
              code:
                '#include <iostream>\n'
                + '#include <vector>\n'
                + '#include <algorithm>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    int factor = 3;\n'
                + '    // 按值捕获 factor，参数 n，返回 int\n'
                + '    auto multiply = [factor](int n) { return n * factor; };\n'
                + '    cout << "5 * 3 = " << multiply(5) << endl;\n\n'
                + '    vector<int> nums = {1, 2, 3, 4, 5};\n'
                + '    // Lambda 作为算法谓词：找第一个大于 3 的元素\n'
                + '    auto it = find_if(nums.begin(), nums.end(), [](int x) { return x > 3; });\n'
                + '    if (it != nums.end()) cout << "第一个大于 3: " << *it << endl;\n\n'
                + '    // for_each 遍历打印\n'
                + '    for_each(nums.begin(), nums.end(), [](int x) { cout << x << " "; });\n'
                + '    cout << endl;\n'
                + '    return 0;\n'
                + '}',
              explanation:
                'Lambda 让算法接受自定义逻辑变得轻量。'
                + '[factor] 按值捕获外部变量，[] 空捕获适合纯函数。'
                + 'find_if 用 Lambda 作为条件谓词，比手写循环更清晰。',
            },
            {
              title: 'sort 自定义排序',
              code:
                '#include <iostream>\n'
                + '#include <vector>\n'
                + '#include <algorithm>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    vector<int> v = {5, 2, 8, 1, 9, 3};\n'
                + '    // Lambda 作为比较函数，降序排序\n'
                + '    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\n'
                + '    for (int x : v) cout << x << " ";\n'
                + '    cout << endl;\n'
                + '    return 0;\n'
                + '}',
              explanation:
                'sort 的第三参数是比较函数对象。Lambda 返回 true 表示 a 应排在 b 前。'
                + 'a > b 实现降序，a < b 实现升序。这种写法比函数指针更高效（可内联）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Lambda 计算两数之和，调用 lambda(3, 4) 输出 7。',
              starter_code:
                '#include <iostream>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    auto add = ___(int a, int b) { return a + b; };\n'
                + '    cout << add(3, 4) << endl;\n'
                + '    return 0;\n'
                + '}',
              expected_output: '7',
              hints: [
                'Lambda 以方括号开头',
                '空捕获列表是 []',
                '把 ___ 替换为 []',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 sort + Lambda 对 vector {3,1,4,1,5} 升序排序，输出 "1 1 3 4 5"。',
              starter_code:
                '#include <iostream>\n'
                + '#include <vector>\n'
                + '#include <algorithm>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    vector<int> v = {3, 1, 4, 1, 5};\n'
                + '    sort(v.begin(), v.end(), [](int a, int b) { return a ___ b; });\n'
                + '    for (int x : v) cout << x << " ";\n'
                + '    cout << endl;\n'
                + '    return 0;\n'
                + '}',
              expected_output: '1 1 3 4 5 ',
              hints: [
                '升序排序 a 应在 b 前当 a < b',
                '比较函数返回 a < b',
                '把 ___ 替换为 <',
              ],
            },
          ],
          realWorldScenario:
            'Lambda 是现代 C++ 工程的日常工具。在 GUI 框架（Qt）中，按钮点击回调用 Lambda 内联定义；'
            + '在并发库中，std::thread 接受 Lambda 作为线程函数；'
            + '在 Web 服务器（如 drogon）中，路由处理器用 Lambda 定义。'
            + '游戏引擎的 ECS 系统用 Lambda 表达查询逻辑，'
            + '数据库引擎用 Lambda 定义聚合函数。'
            + '掌握 Lambda 让你写出接近 Python/Rust 表达力的 C++ 代码，'
            + '同时享受静态类型与零开销抽象的优势。',
        },
        {
          id: 'cpp-ch8-l4',
          title: '异常处理与现代 C++',
          order: 3,
          content_md:
            '异常处理是 C++ 处理错误的标准机制，通过 `try / catch / throw` 三件套把"正常流程"与"错误处理"分离。'
            + '当函数遇到无法处理的错误时用 `throw` 抛出异常对象，调用链上任意一层都可以用 `catch` 捕获并处理。'
            + '这与 C 语言"用返回值表示错误"的范式截然不同，让代码逻辑更清晰。\n\n'
            + '异常的工作机制涉及**栈展开（stack unwinding）**：抛出异常后，'
            + '从 throw 点开始向外层函数逐层返回，每一层栈上的局部对象都会被正确析构。'
            + '这正是 RAII 能保证异常安全的原理——只要资源被 RAII 对象持有，'
            + '异常发生时它们仍然会被析构释放。\n\n'
            + '标准异常类继承自 `std::exception`（定义在 `<stdexcept>`），'
            + '如 `std::runtime_error`（运行时错误）、`std::logic_error`（逻辑错误）、'
            + '`std::out_of_range`（越界访问）。用 `e.what()` 获取异常描述字符串。'
            + '推荐抛出标准异常类而非内置类型，便于上层统一 catch。\n\n'
            + '现代 C++（C++11/14/17/20）还引入了大量特性让代码更安全更简洁：'
            + '`auto` 类型推导、`nullptr` 替代 NULL、`constexpr` 编译期计算、'
            + '`std::optional` 表示可能缺失的值、`std::variant` 类型安全的 union、'
            + '结构化绑定 `auto [a, b] = pair`、`if constexpr` 编译期分支等。'
            + '它们共同让 C++ 既能写出底层高性能代码，又能保持现代语言的表达力。',
          examples: [
            {
              title: 'try/catch 基础',
              code:
                '#include <iostream>\n'
                + '#include <stdexcept>\n'
                + 'using namespace std;\n\n'
                + 'double safe_divide(int a, int b) {\n'
                + '    if (b == 0) {\n'
                + '        throw runtime_error("除零错误");  // 抛出异常\n'
                + '    }\n'
                + '    return (double)a / b;\n'
                + '}\n\n'
                + 'int main() {\n'
                + '    try {\n'
                + '        cout << safe_divide(10, 2) << endl;  // 正常\n'
                + '        cout << safe_divide(10, 0) << endl;  // 抛异常\n'
                + '        cout << "这行不会执行" << endl;\n'
                + '    } catch (const runtime_error& e) {\n'
                + '        cout << "捕获异常: " << e.what() << endl;\n'
                + '    }\n'
                + '    cout << "程序继续运行" << endl;\n'
                + '    return 0;\n'
                + '}',
              explanation:
                'safe_divide 在 b==0 时抛出 runtime_error。try 块中调用一旦抛异常，'
                + '后续语句跳过，控制流转到匹配的 catch 块。'
                + 'e.what() 返回异常描述字符串。catch 后程序正常继续。',
            },
            {
              title: 'vector 越界与 at()',
              code:
                '#include <iostream>\n'
                + '#include <vector>\n'
                + '#include <stdexcept>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    vector<int> v = {10, 20, 30};\n'
                + '    try {\n'
                + '        // at() 会检查边界，越界抛 out_of_range\n'
                + '        cout << v.at(5) << endl;\n'
                + '    } catch (const out_of_range& e) {\n'
                + '        cout << "越界: " << e.what() << endl;\n'
                + '    }\n'
                + '    // auto 类型推导 + nullptr 是现代 C++ 写法\n'
                + '    auto p = nullptr;\n'
                + '    cout << "p 是空: " << (p == nullptr ? "是" : "否") << endl;\n'
                + '    return 0;\n'
                + '}',
              explanation:
                'vector::at() 比 operator[] 更安全，越界时抛 out_of_range 而非未定义行为。'
                + 'auto 让编译器推导类型，nullptr 是类型安全的空指针，替代 C 的 NULL。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '在 try 块中 throw 一个 runtime_error("出错啦")，catch 捕获并输出 e.what()。',
              starter_code:
                '#include <iostream>\n'
                + '#include <stdexcept>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    try {\n'
                + '        throw runtime_error("出错啦");\n'
                + '    } ___ (const runtime_error& e) {\n'
                + '        cout << e.what() << endl;\n'
                + '    }\n'
                + '    return 0;\n'
                + '}',
              expected_output: '出错啦',
              hints: [
                '捕获异常的关键字与 try 配对',
                'catch 关键字用于捕获异常',
                '把 ___ 替换为 catch',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 vector::at() 访问越界索引，捕获 out_of_range 输出 "caught"。',
              starter_code:
                '#include <iostream>\n'
                + '#include <vector>\n'
                + '#include <stdexcept>\n'
                + 'using namespace std;\n\n'
                + 'int main() {\n'
                + '    vector<int> v = {1, 2, 3};\n'
                + '    try {\n'
                + '        v.at(10);\n'
                + '    } catch (const out_of_range&) {\n'
                + '        cout << "caught" << ___;\n'
                + '    }\n'
                + '    return 0;\n'
                + '}',
              expected_output: 'caught',
              hints: [
                'cout 输出字符串后通常跟 endl 换行',
                '把 ___ 替换为 endl',
                'cout << "caught" << endl; 输出 "caught" 并换行',
              ],
            },
          ],
          realWorldScenario:
            '异常处理是大型 C++ 项目的错误处理标配。在 Web 框架中，'
            + 'JSON 解析错误、数据库连接失败、权限不足都通过异常向上传播；'
            + '在游戏引擎中，资源加载失败、脚本错误通过异常报告；'
            + '在金融交易系统中，业务规则违反用自定义异常类表达。'
            + '现代 C++ 的 std::optional（可能无值）、std::variant（类型安全联合）'
            + '提供了异常之外的错误表达方式：预期错误用 optional/variant，'
            + '真正的异常情况用 throw。理解这种取舍是写出健壮 C++ 代码的关键。',
        },
      ],
    },
  ],
}