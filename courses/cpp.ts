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
            '## 概念详解\n\n'
            + 'C 语言诞生于 1972 年，由 Dennis Ritchie 在贝尔实验室为重写 UNIX 操作系统而创建。'
            + '它是一门静态类型、编译型、过程式编程语言，被誉为"现代编程语言的鼻祖"之一。'
            + 'C 语言并非凭空出现——它的前驱是 BCPL 与 B 语言，Ritchie 在 B 语言基础上加入了类型系统，'
            + '使其既能高效操控硬件，又具备良好的可移植性。'
            + '理解 C 语言的设计哲学——"信任程序员"、"贴近机器"、"零开销抽象"——是学习这门语言的关键。\n\n'
            + 'C 语言存在的核心价值有三点：**性能**（直接编译为机器码，无 GC、无运行时开销）、'
            + '**可移植性**（同一份代码可在不同 CPU 架构上重新编译运行）、'
            + '**底层控制力**（可直接操作内存、位、寄存器）。'
            + '时至今日，操作系统内核（Linux、Windows NT 内核）、嵌入式固件、数据库引擎（MySQL、PostgreSQL）、'
            + '编程语言运行时（CPython、JVM、PHP Zend）的核心都由 C 语言编写。'
            + '当你学习 C 语言时，你实际上是在与计算机的"裸金属"对话。\n\n'
            + 'C 语言经过多次标准化：C89（ANSI C）、C99（引入 `//` 注释、变长数组、`stdbool.h`）、'
            + 'C11（原子操作、多线程支持）、C17（修复与澄清）、C23（最新标准）。'
            + '本课程以 GCC 默认支持的 C99/C11 为主，绝大多数现代编译器都完整支持这些特性。\n\n'
            + '## 语法说明\n\n'
            + '一个可运行的 C 程序由三部分组成：预处理指令、`main` 函数、返回语句。完整结构如下：\n\n'
            + '```c\n#include <头文件>          // 预处理指令\n\nint main(int argc, char *argv[]) {  // 程序入口\n    语句1;                          // 每条语句以分号结尾\n    语句2;\n    return 0;                       // 0 表示成功，非 0 表示错误\n}\n```\n\n'
            + '关键组成部分对照表：\n\n'
            + '| 组成部分 | 说明 | 示例 |\n'
            + '|----------|------|------|\n'
            + '| `#include` | 预处理指令，引入头文件 | `#include <stdio.h>` |\n'
            + '| `main` 函数 | 程序入口，由操作系统调用 | `int main(void)` 或 `int main(int argc, char *argv[])` |\n'
            + '| 返回值 `int` | 0 表示成功，非 0 表示错误码 | `return 0;` |\n'
            + '| 语句结束符 | 每条语句必须以 `;` 结尾 | `printf("hi");` |\n'
            + '| 代码块 | 用 `{}` 包裹一组语句 | `{ int a; a = 1; }` |\n'
            + '| 注释 | `//` 单行，`/* */` 多行 | `// 这是注释` |\n\n'
            + '`main` 函数有两种标准签名：`int main(void)`（不接受参数）和 '
            + '`int main(int argc, char *argv[])`（接受命令行参数）。'
            + '`argc` 是参数个数，`argv` 是参数字符串数组，`argv[0]` 是程序名本身。'
            + '注意：旧的 C89 允许 `void main()`，但现代标准已废弃，请始终使用 `int main`。\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：最小化程序**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    printf("Hi");\n    return 0;\n}\n```\n\n'
            + '这是最简洁的可编译 C 程序。`void` 表示 main 不接受参数，比留空更明确。\n\n'
            + '**示例 2：命令行参数处理**\n\n'
            + '```c\n#include <stdio.h>\nint main(int argc, char *argv[]) {\n    printf("参数个数: %d\\n", argc);\n    for (int i = 0; i < argc; i++) {\n        printf("argv[%d] = %s\\n", i, argv[i]);\n    }\n    return 0;\n}\n```\n\n'
            + '运行 `./prog hello world` 会输出 3 个参数：程序名、hello、world。'
            + '这是命令行工具的基础——`ls`、`grep`、`curl` 都通过这种方式接收用户输入。\n\n'
            + '**示例 3：多文件编译**\n\n'
            + '```c\n// util.h\nint add(int a, int b);\n\n// util.c\nint add(int a, int b) { return a + b; }\n\n// main.c\n#include <stdio.h>\n#include "util.h"\nint main(void) {\n    printf("%d\\n", add(2, 3));\n    return 0;\n}\n```\n\n'
            + '编译命令：`gcc main.c util.c -o prog`。这种"接口（.h）与实现（.c）分离"的方式是 C 工程化的基础。\n\n'
            + '## 注意事项\n\n'
            + '1. **main 函数签名**：永远使用 `int main`，不要用 `void main`，'
            + '某些编译器会发出警告，部分嵌入式平台甚至拒绝编译。\n'
            + '2. **return 0 的含义**：操作系统据此判断程序是否成功。'
            + 'Shell 中 `$?` 变量记录上一条命令的退出码，0 表示成功，非 0 表示失败。'
            + '在脚本自动化中，正确返回退出码非常重要。\n'
            + '3. **#include 的两种写法**：`<stdio.h>` 用尖括号搜索系统目录，'
            + '"util.h" 用双引号先搜索当前目录再搜索系统目录。'
            + '项目内头文件用双引号，标准库用尖括号。\n'
            + '4. **分号和花括号**：C 是"自由格式"语言，可以一行写多条语句，'
            + '但风格上建议每行一条语句、正确缩进。代码风格请参考 Linux 内核风格或 Google C++ Style。\n'
            + '5. **注释不能嵌套**：`/* /* */ */` 是错误的——第一个 `*/` 就结束了注释。'
            + '需要临时注释大段代码时可用 `#if 0 ... #endif` 预处理指令。\n'
            + '6. **未声明就使用**：C89 下未声明函数会默认返回 int，C99 起严格禁止。'
            + '始终在使用前声明函数原型或包含对应头文件。\n\n'
            + '## 实际应用\n\n'
            + '在嵌入式开发中，main 函数通常是一个 `while(1)` 死循环——例如单片机固件永远运行。'
            + '在 Linux 内核中，每个驱动模块的入口是 `module_init` 宏注册的函数，本质上是另一种 main。'
            + '在 Web 服务器（如 Nginx）中，main 负责解析配置、fork worker 进程、最后让自己退出舞台。'
            + '理解 main 的生命周期就是理解整个程序的架构。\n\n'
            + '## 扩展知识\n\n'
            + '**编译流程四阶段**：预处理（cpp，展开 `#include` 和 `#define`）→ 编译（gcc，'
            + '生成汇编 `.s`）→ 汇编（as，生成目标文件 `.o`）→ 链接（ld，合并多个 `.o` 和库）。'
            + '使用 `gcc -v` 可看到每个阶段的命令。'
            + '理解这一流程对调试编译错误（如"undefined reference"链接错误）至关重要。\n\n'
            + '**典型编译命令**：`gcc -Wall -Wextra -O2 hello.c -o hello`。'
            + '`-Wall -Wextra` 开启常见警告，`-O2` 优化等级，`-o` 指定输出文件名。'
            + '生产环境务必开启 `-Wall -Werror` 把警告当错误处理，避免潜在 bug。\n\n'
            + '**C 与 C++ 的关系**：C++ 最初是 Bjarne Stroustrup 在 AT&T 设计的"带类的 C"，'
            + '经过多年发展加入了模板、异常、引用、命名空间、STL 等。'
            + 'C++ 程序员写 C 时要注意：C 没有引用、没有函数重载、'
            + '没有 const 引用、`void*` 不能隐式转换为其他指针类型（C++ 严格要求显式强转）。'
            + '本课程第 4 章后会过渡到 C++，请保持两种语言的"思维切换"。',
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
            '## 概念详解\n\n'
            + 'C 语言是静态类型语言——每个变量在使用前必须声明类型，且类型在编译期固定。'
            + '这与 Python、JavaScript 等动态类型语言形成鲜明对比。'
            + '静态类型的好处是：编译器能在编译期捕获类型错误，生成更高效的机器码，'
            + '代价是写代码时需要多敲几个字。理解 C 的类型系统是写出正确、高效、可移植代码的基础。\n\n'
            + '为什么需要这么多类型？因为不同的数据需要不同的存储空间和表示方式。'
            + '用 `int` 存年龄足够（最大约 21 亿），但存世界人口就要用 `long long`；'
            + '存字符用 `char` 即可（1 字节），存精确金额则要用 `double` 甚至自定义高精度类型。'
            + '合理选型能节省内存、避免溢出、保证精度。\n\n'
            + '## 语法说明\n\n'
            + 'C 的基本数据类型可分为四类：整型、浮点型、字符型、空类型。完整列表如下：\n\n'
            + '| 类型 | 说明 | 字节（典型 64 位平台） | 取值范围 | 常用场景 |\n'
            + '|------|------|----------------------|----------|----------|\n'
            + '| `char` | 字符/小整数 | 1 | -128 ~ 127 或 0 ~ 255 | 字符、字节数据 |\n'
            + '| `short` | 短整型 | 2 | -32768 ~ 32767 | 节省内存的小整数 |\n'
            + '| `int` | 整型 | 4 | -2³¹ ~ 2³¹-1 | 一般整数 |\n'
            + '| `long` | 长整型 | 4 或 8 | 平台相关 | 大整数 |\n'
            + '| `long long` | 更长整型（C99） | 8 | -2⁶³ ~ 2⁶³-1 | 极大整数 |\n'
            + '| `float` | 单精度浮点 | 4 | 约 ±3.4e38（6-7 位有效数字） | 节省内存的浮点 |\n'
            + '| `double` | 双精度浮点 | 8 | 约 ±1.7e308（15-16 位有效数字） | 一般浮点运算 |\n'
            + '| `long double` | 扩展精度 | 10/12/16 | 平台相关 | 高精度计算 |\n'
            + '| `void` | 空类型 | - | - | 函数无返回值、通用指针 |\n'
            + '| `_Bool` | 布尔（C99） | 1 | 0 或 1 | 真假判断 |\n\n'
            + '类型修饰符 `signed`（有符号，默认）、`unsigned`（无符号）、`short`、`long` 可组合使用，'
            + '如 `unsigned long long` 表示无符号 64 位整数（最大 2⁶⁴-1，常用于位掩码或哈希）。'
            + '`unsigned char` 在处理二进制数据（如图片像素、网络字节）时极为常用。\n\n'
            + '变量声明语法：`类型 变量名 [= 初值];`。可以一次声明多个同类型变量：'
            + '`int a, b, c;`。变量命名规则：以字母或下划线开头，可含字母、数字、下划线，区分大小写。'
            + 'C 语言习惯用小写加下划线（`student_age`），C++ 常用驼峰（`studentAge`）。'
            + '注意不要使用 C 关键字（int、return、while 等）作为变量名。\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：sizeof 检测类型大小**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    printf("char: %zu\\n", sizeof(char));\n    printf("short: %zu\\n", sizeof(short));\n    printf("int: %zu\\n", sizeof(int));\n    printf("long: %zu\\n", sizeof(long));\n    printf("long long: %zu\\n", sizeof(long long));\n    printf("float: %zu\\n", sizeof(float));\n    printf("double: %zu\\n", sizeof(double));\n    printf("指针: %zu\\n", sizeof(int*));\n    return 0;\n}\n```\n\n'
            + '`%zu` 是 `size_t` 的格式符。在 64 位 Linux 上 long 是 8 字节（LP64 模型），'
            + '在 64 位 Windows 上 long 是 4 字节（LLP64 模型）——这就是跨平台时要用 `int32_t`/`int64_t` 的原因。\n\n'
            + '**示例 2：固定宽度整型（推荐跨平台写法）**\n\n'
            + '```c\n#include <stdio.h>\n#include <stdint.h>\nint main(void) {\n    int32_t a = 2147483647;       // 一定是 32 位\n    int64_t b = 9000000000LL;     // 一定是 64 位\n    uint32_t hash = 0xDEADBEEFu;  // 无符号 32 位\n    printf("a=%d, b=%lld, hash=%u\\n", a, b, hash);\n    return 0;\n}\n```\n\n'
            + '`<stdint.h>`（C99）提供 `int8_t`、`int16_t`、`int32_t`、`int64_t` 及其无符号版本，'
            + '是写跨平台代码的首选。`LL` 后缀表示 long long 字面量，`u` 后缀表示 unsigned。\n\n'
            + '**示例 3：类型转换**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    // 隐式转换：double -> int 截断\n    int i = 3.9;       // i == 3\n    printf("i = %d\\n", i);\n\n    // 隐式转换：int -> double 自动\n    double d = 5;     // d == 5.0\n    printf("d = %f\\n", d);\n\n    // 显式强制转换\n    double pi = 3.14159;\n    int truncated = (int) pi;  // 截断小数\n    printf("truncated = %d\\n", truncated);\n\n    // 强制转换用于整数除法\n    int a = 7, b = 2;\n    double div = (double) a / b;  // 注意只转 a，否则先做整除\n    printf("div = %f\\n", div);\n    return 0;\n}\n```\n\n'
            + '关键点：`(double) a / b` 中 `(double)` 优先级高于 `/`，所以等价于 `((double) a) / b`，'
            + '先把 a 转为 double 再做浮点除法，结果 3.5。'
            + '如果写成 `(double)(a / b)` 则先做整除得 3，再转为 3.0——这是初学者常见错误。\n\n'
            + '## 注意事项\n\n'
            + '1. **整数溢出无警告**：`int x = INT_MAX; x++;` 的行为是未定义（UB）。'
            + '使用 `<limits.h>` 中的 `INT_MAX`、`INT_MIN` 检查边界，'
            + '或直接用 `int64_t` 防溢出。\n'
            + '2. **浮点数精度问题**：`0.1 + 0.2 != 0.3`！浮点数采用 IEEE 754 表示，'
            + '0.1 无法精确表示。涉及金额计算应使用整数（分）或专门的高精度库（如 GMP）。\n'
            + '3. **混用 signed/unsigned**：`int a = -1; unsigned int b = 1; if (a < b)` '
            + '会得到错误结果——比较时 a 被隐式转为无符号（变成 UINT_MAX）。'
            + 'GCC 加 `-Wsign-compare` 可发现此类问题。\n'
            + '4. **char 的符号性是实现定义**：`char` 默认是否有符号取决于平台。'
            + 'ARM 上通常是无符号，x86 上通常是有符号。处理二进制数据请显式用 `unsigned char`。\n'
            + '5. **未初始化变量**：局部变量不初始化时内容是垃圾值。'
            + '养成"声明即初始化"的习惯：`int count = 0;`。\n'
            + '6. **跨平台类型大小**：永远不要假设 `int` 是 4 字节，使用 `sizeof` 或 `int32_t`。\n\n'
            + '## 实际应用\n\n'
            + '在图像处理中，每个像素通常用 `unsigned char`（0-255）表示一个通道，'
            + '一张 1920×1080 RGB 图像需要约 6MB 内存。在网络协议中，'
            + 'TCP 端口号用 `uint16_t`（0-65535），IPv4 地址用 `uint32_t`。'
            + '在金融系统里，金额常用 `int64_t` 以"分"为单位存储，避免浮点精度问题。'
            + '科学计算则大量使用 `double`，需要更高精度时用 `long double` 或 GMP 库。\n\n'
            + '## 扩展知识\n\n'
            + '**limits.h 与 float.h**：提供各类型的取值范围常量，如 `INT_MAX`（2147483647）、'
            + '`INT_MIN`、`UINT_MAX`、`DBL_MAX`、`DBL_EPSILON`（双精度最小精度差）。'
            + '写安全代码时应检查运算是否会导致溢出。\n\n'
            + '**整数提升（integer promotion）**：在表达式中，比 int 小的类型（char、short）'
            + '会自动提升为 int 参与运算，结果再赋回原类型时可能截断。'
            + '例如 `char a = 200, b = 100; char c = a + b;` 结果可能不是 300 而是 44（截断）。\n\n'
            + '**位域（bit-field）**：在结构体中可以指定字段位数，'
            + '如 `struct { unsigned int flag : 1; }` 让 flag 只占 1 位，'
            + '常用于协议解析、硬件寄存器映射。但位域的内存布局是实现定义的，不可跨平台序列化。',
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
            '## 概念详解\n\n'
            + '`printf` 和 `scanf` 是 C 标准库 `<stdio.h>` 提供的格式化输出/输入函数，'
            + '它们的命名中 `f` 代表 "formatted"（格式化）。这两个函数是 C 语言中最早接触、'
            + '也是最常用的 I/O 接口——几乎所有命令行程序都依赖它们与用户交互。'
            + '理解格式化字符串的语法是 C 程序员的基本功。\n\n'
            + '为什么需要"格式化"？因为 C 是静态类型语言，编译器不会在运行时知道变量类型，'
            + '必须由程序员通过格式说明符（如 `%d`、`%f`）告诉 `printf` 如何解释参数。'
            + '这与 Python 的 f-string 或 JS 的模板字符串不同，但更接近底层，性能更高。'
            + '理解格式化字符串也有助于理解变量在内存中的二进制表示。\n\n'
            + '## 语法说明\n\n'
            + '### printf 函数\n\n'
            + '```c\nint printf(const char *format, ...);\n```\n\n'
            + '- **返回值**：成功输出的字符数（不含结尾的 `\\0`）；失败返回负值。'
            + '极少用返回值，但写日志库时可据此判断是否成功。\n'
            + '- **format**：格式字符串，包含普通字符和格式说明符。\n'
            + '- **...**：可变参数，按格式说明符顺序匹配。\n\n'
            + '### 格式说明符完整表\n\n'
            + '| 说明符 | 类型 | 示例输出 | 备注 |\n'
            + '|--------|------|----------|------|\n'
            + '| `%d` / `%i` | int | `42` | 有符号十进制整数 |\n'
            + '| `%u` | unsigned int | `42` | 无符号十进制整数 |\n'
            + '| `%f` / `%F` | double | `3.140000` | 默认 6 位小数 |\n'
            + '| `%e` / `%E` | double | `3.14e+00` | 科学计数法 |\n'
            + '| `%g` / `%G` | double | `3.14` | 自动选择 %f 或 %e |\n'
            + '| `%x` / `%X` | unsigned int | `2a` / `2A` | 十六进制小写/大写 |\n'
            + '| `%o` | unsigned int | `52` | 八进制 |\n'
            + '| `%c` | char | `A` | 单个字符 |\n'
            + '| `%s` | char* | `hello` | 字符串（以 \\0 结尾）|\n'
            + '| `%p` | void* | `0x7ffee...` | 指针地址 |\n'
            + '| `%%` | - | `%` | 输出百分号本身 |\n'
            + '| `%zu` | size_t | `4` | sizeof 的返回类型（C99）|\n'
            + '| `%ld` / `%lld` | long / long long | `1234567890` | 长整型 |\n\n'
            + '### 修饰符\n\n'
            + '- **宽度**：`%5d` 至少占 5 字符，默认右对齐。\n'
            + '- **对齐**：`%-5d` 左对齐，`%+5d` 强制显示正负号。\n'
            + '- **零填充**：`%05d` 用 0 填充左侧（如 `00042`）。\n'
            + '- **精度**：`%.3f` 保留 3 位小数；`%.5s` 只输出前 5 个字符。\n'
            + '- **组合**：`%10.2f` 总宽 10、2 位小数。\n'
            + '- **长度修饰符**：`%hhd`（char）、`%hd`（short）、`%ld`（long）、'
            + '`%lld`（long long）、`%Lf`（long double）。\n\n'
            + '### scanf 函数\n\n'
            + '```c\nint scanf(const char *format, ...);\n```\n\n'
            + '- **返回值**：成功匹配并赋值的项数；遇到 EOF 返回 EOF（-1）；'
            + '匹配失败返回小于预期项数。**始终检查返回值**是安全编程的关键。\n'
            + '- **参数**：变量必须传**地址**（用 `&` 取址），因为 C 函数是值传递。'
            + '数组名本身就是地址，所以 `char name[20]; scanf("%s", name);` 不加 `&`。\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：进制转换输出**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    int n = 255;\n    printf("十进制: %d\\n", n);\n    printf("八进制: %o\\n", n);\n    printf("十六进制(小写): %x\\n", n);\n    printf("十六进制(大写): %X\\n", n);\n    printf("带前缀: %#x, %#o\\n", n, n);\n    return 0;\n}\n```\n\n'
            + '`%#x` 会输出 `0x` 前缀，`%#o` 输出 `0` 前缀。这在调试时很有用。\n\n'
            + '**示例 2：表格对齐输出**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    printf("%-8s%-6s%-8s\\n", "姓名", "年龄", "工资");\n    printf("%-8s%-6d%-8.2f\\n", "张三", 28, 15000.5);\n    printf("%-8s%-6d%-8.2f\\n", "李四", 35, 25000.0);\n    printf("%-8s%-6d%-8.2f\\n", "王五", 22, 8500.75);\n    return 0;\n}\n```\n\n'
            + '`%-8s` 左对齐占 8 字符宽，生成对齐的表格。注意中文占 2 个字符宽，对齐可能略有偏差。\n\n'
            + '**示例 3：安全的 scanf**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    int age;\n    char name[20];\n    printf("请输入姓名和年龄: ");\n    int n = scanf("%19s %d", name, &age);  // %19s 限制读取长度，防止溢出\n    if (n == 2) {\n        printf("你好 %s, 你 %d 岁\\n", name, age);\n    } else {\n        printf("输入格式错误\\n");\n    }\n    return 0;\n}\n```\n\n'
            + '`%19s` 限制最多读取 19 个字符（留 1 个给 `\\0`），避免缓冲区溢出。'
            + '检查 scanf 返回值能防止用户输入非数字导致程序异常。\n\n'
            + '## 注意事项\n\n'
            + '1. **格式说明符与类型不匹配**：用 `%d` 输出 double、用 `%f` 输出 int 都会得到乱码。'
            + 'GCC 加 `-Wformat` 可在编译期检查。\n'
            + '2. **scanf 不加 & 是经典错误**：`scanf("%d", age);`（漏 `&`）会崩溃，'
            + '因为 age 的值被当作地址解引用。\n'
            + '3. **scanf %s 危险**：`%s` 读取不限长度，极易缓冲区溢出。'
            + '生产代码请用 `fgets(buf, size, stdin)` + `sscanf` 替代。\n'
            + '4. **缓冲区问题**：输入流中残留的 `\\n` 会被下次 `scanf("%c")` 读走。'
            + '在 `%c` 前加空格（`scanf(" %c", &ch)`）可跳过空白字符。\n'
            + '5. **printf 与 long double**：`long double` 必须用 `%Lf`，'
            + '用 `%f` 会得到错误结果。MSVC 与 GCC 在此有差异，跨平台需测试。\n'
            + '6. **格式字符串攻击**：`printf(user_input)` 是严重漏洞！'
            + '用户输入 `%x%x%x%x` 可读取栈上数据。永远用 `printf("%s", user_input)`。\n\n'
            + '## 实际应用\n\n'
            + '在日志系统中，`printf` 风格的格式化被广泛采用——glibc 的 `syslog`、'
            + 'Linux 内核的 `printk`、Redis 的日志函数都是类似接口。'
            + '在数据库客户端工具（如 mysql cli、psql）中，结果表格的对齐输出完全靠 printf 的宽度控制。'
            + '在调试嵌入式时，由于没有完整的 stdio，常用 `snprintf` 格式化到缓冲区再通过 UART 发送。\n\n'
            + '## 扩展知识\n\n'
            + '**printf 家族**：`printf`（输出到 stdout）、`fprintf`（输出到文件）、'
            + '`sprintf`（输出到字符串，已不推荐，易溢出）、`snprintf`（安全版本，指定缓冲区大小）、'
            + '`vprintf`/`vsnprintf`（接受 va_list，用于自定义日志函数）。'
            + '生产代码优先用 `snprintf` 而非 `sprintf`。\n\n'
            + '**scanf 家族**：`scanf`（从 stdin）、`fscanf`（从文件）、`sscanf`（从字符串）。'
            + '`sscanf` 配合 `fgets` 是最安全的输入方式：先读整行到缓冲区，再用 sscanf 解析。\n\n'
            + '**性能提示**：`printf` 解析格式字符串有开销。在性能敏感场景（如高频日志）可考虑：'
            + '用 `puts`/`fputs` 输出纯字符串、用 `itoa` 手动转换数字、或使用更快的库（如 fmtlib）。'
            + '缓冲 I/O 默认是行缓冲，可用 `setvbuf` 调整缓冲策略。',
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
            '## 概念详解\n\n'
            + '运算符是 C 语言中操作数据的基本工具。C 提供了极其丰富的运算符——'
            + '从算术、关系、逻辑到位运算、赋值、条件、逗号运算符，总计超过 40 个。'
            + '这种设计源于 C "贴近硬件"的哲学：'
            + '绝大多数运算符都直接映射到一两条机器指令，让程序员能精确控制底层操作。'
            + '理解每个运算符的语义、优先级和结合性是写出正确 C 代码的前提。\n\n'
            + '为什么 C 有这么多位运算符？因为 C 最初是为编写 UNIX 操作系统设计的，'
            + '操作系统需要频繁操作硬件寄存器、位标志、内存页表等二进制数据。'
            + '位运算让程序员能用一行代码完成"设置第 3 位"、"清除第 5 位"等操作，'
            + '这是高级语言难以匹配的。即使在今天，位运算仍广泛用于嵌入式、加密、图像处理等领域。\n\n'
            + '## 语法说明\n\n'
            + '### 运算符分类总表\n\n'
            + '| 类别 | 运算符 | 说明 | 示例 |\n'
            + '|------|--------|------|------|\n'
            + '| 算术 | `+ - * / %` | 基本四则运算 | `5 / 2 == 2`（整数除法）|\n'
            + '| 关系 | `== != < > <= >=` | 比较运算，返回 0/1 | `3 > 2` 值为 1 |\n'
            + '| 逻辑 | `&& \\|\| !` | 短路逻辑运算 | `a && b`（a 假则不计算 b）|\n'
            + '| 位运算 | `& \\| ^ ~ << >>` | 二进制位操作 | `0xF0 & 0x0F == 0` |\n'
            + '| 赋值 | `= += -= *= /= %= ...` | 复合赋值 | `x += 5` 等价 `x = x + 5` |\n'
            + '| 自增自减 | `++ --` | 前置/后置 | `++i` 先加后用，`i++` 先用后加 |\n'
            + '| 条件 | `?:` | 三元条件 | `max = a > b ? a : b` |\n'
            + '| 逗号 | `,` | 顺序求值 | `i++, j++` |\n'
            + '| sizeof | `sizeof` | 类型/变量大小 | `sizeof(int) == 4` |\n'
            + '| 取址/解引用 | `& *` | 指针操作 | `&x` 取址，`*p` 解引用 |\n'
            + '| 成员访问 | `. ->` | 结构体成员 | `s.x`、`p->x` |\n'
            + '| 强制转换 | `(类型)` | 类型转换 | `(int)3.14` |\n\n'
            + '### 运算符优先级（从高到低，部分）\n\n'
            + '```'
            + '后缀: () [] -> . ++ --(后)\n'
            + '一元: ! ~ ++ --(前) + - * & sizeof (类型)\n'
            + '乘除: * / %\n'
            + '加减: + -\n'
            + '移位: << >>\n'
            + '关系: < <= > >=\n'
            + '相等: == !=\n'
            + '位与: &\n'
            + '位异或: ^\n'
            + '位或: |\n'
            + '逻辑与: &&\n'
            + '逻辑或: ||\n'
            + '条件: ?:\n'
            + '赋值: = += -= *= /= %= ...\n'
            + '逗号: ,\n'
            + '```\n\n'
            + '不必死记——复杂表达式永远用括号明确意图。'
            + '一个常见错误：`flags & 0x10 == 0` 会被解析为 `flags & (0x10 == 0)`，'
            + '因为 `==` 优先级高于 `&`。正确写法是 `(flags & 0x10) == 0`。\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：短路求值的应用**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    int *p = NULL;\n    // 安全的指针检查：先判空再解引用\n    if (p != NULL && *p > 0) {\n        printf("p 指向正值\\n");\n    } else {\n        printf("p 为空或值非正\\n");\n    }\n\n    // 短路避免除零\n    int b = 0;\n    if (b != 0 && 100 / b > 1) {\n        printf("不会执行到这里\\n");\n    }\n    printf("安全通过\\n");\n    return 0;\n}\n```\n\n'
            + '由于 `&&` 短路，`p != NULL` 为假时不会计算 `*p`，避免空指针解引用崩溃。\n\n'
            + '**示例 2：位运算实战——位标志管理**\n\n'
            + '```c\n#include <stdio.h>\n// 权限位定义\n#define PERM_READ   0x01  // 0001\n#define PERM_WRITE  0x02  // 0010\n#define PERM_EXEC   0x04  // 0100\n#define PERM_ADMIN  0x08  // 1000\n\nint main(void) {\n    unsigned char perm = 0;\n    perm |= PERM_READ | PERM_WRITE;  // 设置读、写权限\n    printf("权限: 0x%X\\n", perm);\n\n    // 检查是否有写权限\n    if (perm & PERM_WRITE) {\n        printf("有写权限\\n");\n    }\n\n    // 移除写权限\n    perm &= ~PERM_WRITE;\n    printf("移除写权限后: 0x%X\\n", perm);\n\n    // 翻转 admin 权限\n    perm ^= PERM_ADMIN;\n    printf("翻转 admin 后: 0x%X\\n", perm);\n    return 0;\n}\n```\n\n'
            + '位运算是 Unix 文件权限（rwx）、Linux 内核状态标志、网络协议 flags 字段的底层基础。'
            + '掌握"设置/清除/翻转/检查"四种操作是基本功。\n\n'
            + '**示例 3：自增运算符的细节**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    int i = 5;\n    printf("i++ = %d\\n", i++);  // 输出 5，i 变 6\n    printf("i = %d\\n", i);        // 输出 6\n    printf("++i = %d\\n", ++i);    // i 变 7，输出 7\n    printf("i = %d\\n", i);        // 输出 7\n\n    // 警告：未定义行为\n    // int j = i++ + i++;  // 不同编译器结果不同，避免这样写\n    return 0;\n}\n```\n\n'
            + '前置自增返回新值，后置自增返回旧值。'
            + '在 C++ 中前置 `++i` 通常更高效（无需构造临时对象），但 C 中差异可忽略。'
            + '永远不要在同一个表达式中对同一变量多次修改（如 `i++ + i++`），这是未定义行为。\n\n'
            + '## 注意事项\n\n'
            + '1. **`=` 与 `==` 混淆**：`if (x = 5)` 是合法但错误的代码，'
            + '它把 5 赋值给 x 然后判断 x（永远为真）。'
            + '习惯写 `if (5 == x)` 让编译器在写成 `=` 时报错（Yoda 风格）。\n'
            + '2. **整数除法陷阱**：`7 / 2` 结果是 `3`，不是 `3.5`。'
            + '需要浮点结果时至少一个操作数是浮点：`7.0 / 2` 或 `(double)7 / 2`。\n'
            + '3. **`%` 不能用于浮点**：`3.5 % 2` 是编译错误。浮点取余用 `fmod()` 函数。\n'
            + '4. **位运算优先级低于比较**：`x & 1 == 0` 被解析为 `x & (1 == 0)`。'
            + '位运算务必加括号：`(x & 1) == 0`。\n'
            + '5. **有符号数右移是实现定义**：`>>` 对负数可能是算术右移（补符号位）或逻辑右移（补 0）。'
            + '需要可移植代码请用无符号类型。\n'
            + '6. **未定义行为**：`i++ + ++i`、`a[i] = i++` 等表达式在不同编译器下结果不同。'
            + '遵循"一个表达式只修改一个变量一次"的原则。\n\n'
            + '## 实际应用\n\n'
            + '在 Linux 内核中，几乎所有状态标志都用位运算管理——'
            + '进程的 `task->flags`、文件的 `inode->i_mode`、网络设备的特性标志。'
            + '在加密算法（AES、SHA）中，位运算是核心原语。'
            + '在游戏开发中，碰撞检测常用位掩码优化——每个物体类型用一个位表示，'
            + '碰撞矩阵就变成了一个整数。位运算还能用于"无分支编程"提升性能：'
            + '`x = (a > b) ? a : b` 在某些 CPU 上不如 `x = a - ((a - b) & (a - b >> 31))` 快（但通常编译器会自动优化）。\n\n'
            + '## 扩展知识\n\n'
            + '**复合赋值运算符**：所有二元运算符都有复合形式——`+= -= *= /= %=&= |= ^= <<= >>=`。'
            + '`a OP= b` 等价于 `a = a OP b`，但 `a` 只求值一次（重要：当 a 是复杂表达式时）。\n\n'
            + '**序列点（sequence point）**：C 标准定义了若干序列点（如 `&&`、`||`、`,`、`?` 的分隔处、'
            + '完整表达式结束时），序列点之间的修改顺序未定义。C11 引入了更精细的 sequencing 关系，'
            + '但"不写依赖修改顺序的代码"是永恒原则。\n\n'
            + '**位运算技巧**：'
            + '`x & (x-1)` 可以去掉 x 最低位的 1（用于判断是否是 2 的幂）；'
            + '`x ^ x == 0`（用于变量清零）；'
            + '`x ^ y ^ y == x`（异或的自反性，可用于简单加密）；'
            + '`(x ^ y) < 0` 判断两数符号是否相反（无分支）。'
            + '这些技巧在算法竞赛和性能优化中很有用。',
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
            '## 概念详解\n\n'
            + '条件语句是控制程序流程的核心机制——它让程序能根据不同状态、不同输入做出不同响应。'
            + '没有条件语句，程序就只能按顺序执行，无法做出任何"决策"。'
            + 'C 语言提供三种条件结构：`if/else`、`switch/case`、三元运算符 `?:`。'
            + '它们各有适用场景，理解它们的差异和陷阱是写出正确、可读代码的前提。\n\n'
            + '为什么需要三种？因为它们的表达力不同：'
            + '`if` 适合范围判断和复杂逻辑；'
            + '`switch` 适合"对一个离散值的多分支匹配"，编译器可优化为跳转表，性能更高；'
            + '三元运算符适合简单的"二选一"赋值，让代码更紧凑。'
            + '在工程实践中，应根据语义选择最贴合意图的结构，而不是一种打天下。\n\n'
            + '## 语法说明\n\n'
            + '### if 语句\n\n'
            + '```c\nif (条件) {\n    // 条件为真时执行\n} else if (条件2) {\n    // 条件2 为真时执行\n} else {\n    // 所有条件都不满足时执行\n}\n```\n\n'
            + 'C 语言中"真"的定义：**任何非零值**（包括负数、浮点数、指针地址）都为真，'
            + '只有 0（包括 0.0、NULL、`\\0`）为假。因此：\n'
            + '- `if (x)` 等价于 `if (x != 0)`\n'
            + '- `if (!x)` 等价于 `if (x == 0)`\n'
            + '- `if (p)` 常用于检查指针非空\n'
            + '- `if (strlen(s))` 检查字符串非空\n\n'
            + '### switch 语句\n\n'
            + '```c\nswitch (表达式) {  // 必须是整数类型（int/char/enum）\n    case 常量1:\n        语句;\n        break;       // 跳出 switch\n    case 常量2:\n    case 常量3:       // 多个 case 共享同一处理（fall-through 用法）\n        语句;\n        break;\n    default:          // 可选，处理所有未匹配情况\n        语句;\n}\n```\n\n'
            + '关键点：\n'
            + '- **case 必须是编译期常量**，不能是变量或表达式。\n'
            + '- **break 必不可少**：缺少 break 会"穿透"（fall-through）继续执行下一个 case。'
            + '有时这是有意为之（多个值共享处理），但多数时候是 bug。\n'
            + '- **default 应始终存在**，即使只是 `assert(0)`，以捕获意外值。\n'
            + '- GCC 提示：`-Wswitch` 检查未覆盖的 enum 值；`-Wimplicit-fallthrough` 警告未注释的穿透。\n\n'
            + '### 三元运算符\n\n'
            + '```c\nresult = 条件 ? 值1 : 值2;\n```\n\n'
            + '条件为真返回值1，否则返回值2。可嵌套：`max = a > b ? (a > c ? a : c) : (b > c ? b : c);`，'
            + '但嵌套超过一层就严重损害可读性，请改用 if-else。\n\n'
            + '### 三种结构对照表\n\n'
            + '| 特性 | if-else | switch | 三元运算符 |\n'
            + '|------|---------|--------|------------|\n'
            + '| 适用类型 | 任意条件 | 整数/字符/枚举 | 任意条件 |\n'
            + '| 范围判断 | 支持 | 不支持 | 不支持 |\n'
            + '| 多分支 | 链式 else if | 多个 case | 嵌套（不推荐）|\n'
            + '| 编译优化 | 普通条件跳转 | 可能跳转表 | 普通条件跳转 |\n'
            + '| 可读性 | 灵活但啰嗦 | 多值匹配清晰 | 简短场景最佳 |\n'
            + '| 表达式 vs 语句 | 语句 | 语句 | 表达式（有返回值）|\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：浮点数比较的陷阱**\n\n'
            + '```c\n#include <stdio.h>\n#include <math.h>\nint main(void) {\n    double a = 0.1 + 0.2;  // 0.30000000000000004\n    double b = 0.3;\n    // 错误：浮点直接比较\n    if (a == b) {\n        printf("相等（不会执行）\\n");\n    }\n    // 正确：用容差\n    if (fabs(a - b) < 1e-9) {\n        printf("近似相等\\n");\n    }\n    return 0;\n}\n```\n\n'
            + '浮点数永远不要用 `==` 直接比较，因为 IEEE 754 表示有微小误差。'
            + '使用 `fabs(a - b) < epsilon` 模式，epsilon 根据场景选择（1e-9 适合一般浮点）。\n\n'
            + '**示例 2：switch 的 fall-through 用法**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    int month = 7;\n    int days;\n    switch (month) {\n        case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n            days = 31;\n            break;\n        case 4: case 6: case 9: case 11:\n            days = 30;\n            break;\n        case 2:\n            days = 28;  // 简化处理，不考虑闰年\n            break;\n        default:\n            days = -1;  // 非法月份\n    }\n    printf("%d 月有 %d 天\\n", month, days);\n    return 0;\n}\n```\n\n'
            + '多个 case 共享同一分支时，有意使用 fall-through 让代码紧凑。'
            + '建议加注释 `// fall through` 表明意图，避免被误认为漏写 break。\n\n'
            + '**示例 3：用 enum 增强 switch 可读性**\n\n'
            + '```c\n#include <stdio.h>\ntypedef enum { RED, GREEN, YELLOW } TrafficLight;\n\nconst char* action(TrafficLight light) {\n    switch (light) {\n        case RED:    return "停车";\n        case GREEN:  return "通行";\n        case YELLOW: return "减速";\n    }\n    return "未知";\n}\n\nint main(void) {\n    printf("%s\\n", action(RED));\n    printf("%s\\n", action(GREEN));\n    return 0;\n}\n```\n\n'
            + '枚举让 switch 中的常量具有名字，比裸数字（0/1/2）可读性强得多。'
            + '配合 GCC 的 `-Wswitch` 选项，新增枚举值却忘记处理 case 时会编译警告。\n\n'
            + '## 注意事项\n\n'
            + '1. **`=` 与 `==` 混淆**：`if (x = 5)` 是合法代码——把 5 赋值给 x，然后判断 x（恒为真）。'
            + 'GCC 加 `-Wparentheses` 可警告。Yoda 写法 `if (5 == x)` 可让此错误变成编译错误。\n'
            + '2. **悬空 else（dangling else）**：`if (a) if (b) ...; else ...;` 的 else 与最近的 if 配对，'
            + '不是与外层 if。务必用花括号明确层次。\n'
            + '3. **case 中声明变量**：直接在 case 中声明变量会编译错误，需要用 `{}` 包裹：'
            + '`case 1: { int x = 5; ... } break;`。\n'
            + '4. **switch 不能用字符串**：C 的 switch 只支持整数类型。'
            + '匹配字符串需用 `strcmp` + if-else，或用哈希表映射字符串到枚举。\n'
            + '5. **三元运算符的副作用**：`cond ? f() : g()` 中 f/g 只有一个会被调用，'
            + '与 `if` 语义一致。但三元返回的是值，不要用于无返回值的函数调用。\n'
            + '6. **default 缺失的隐患**：当 enum 新增值时，没有 default 的 switch 可能漏处理。'
            + '建议总是写 default + assert(0) 或日志告警。\n\n'
            + '## 实际应用\n\n'
            + '状态机是 switch 最经典的用武之地。TCP 协议栈的状态机（LISTEN、SYN_SENT、'
            + 'ESTABLISHED、CLOSE_WAIT...）就用巨型 switch 处理每个状态的事件。'
            + 'HTTP 请求路由器（如 nginx）根据方法（GET/POST/PUT...）分发到不同处理器。'
            + '游戏 AI 用嵌套 switch 决策角色行为（状态 × 事件 → 动作）。'
            + '理解条件分支是构建任何有"决策"的程序的基础。\n\n'
            + '## 扩展知识\n\n'
            + '**计算跳转表（computed goto）**：GCC 扩展支持 `void *table[] = {&&L1, &&L2}; goto *table[i];`，'
            + '比 switch 更快（无比较），用于解释器循环、正则引擎等性能敏感场景。\n\n'
            + '**`_Generic`（C11）**：实现类似 C++ 函数重载的泛型选择：'
            + '`#define print(X) _Generic((X), int: print_int, double: print_double, default: print_unknown)(X)`。'
            + '用于编写类型无关的工具函数。\n\n'
            + '**分支预测优化**：现代 CPU 有分支预测器，'
            + '把"常见情况"放在 `if` 分支而非 `else` 通常更快（减少分支预测失败）。'
            + 'Linux 内核用 `likely()`/`unlikely()` 宏（GCC 内建 `__builtin_expect`）'
            + '提示编译器分支概率，影响指令布局。',
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
            '## 概念详解\n\n'
            + '循环让程序能重复执行一段代码——这是计算机最擅长的事。'
            + '人脑讨厌重复，但 CPU 喜欢重复：它可以一秒钟执行数十亿次相同操作而不疲倦。'
            + 'C 语言提供三种循环结构：`for`、`while`、`do-while`，'
            + '它们本质上等价（互相可改写），但语义侧重不同，应根据场景选择最自然的写法。\n\n'
            + '为什么需要循环？因为程序经常要处理"批量数据"——遍历数组每一项、'
            + '处理文件的每一行、轮询每个连接、迭代算法直到收敛。'
            + '没有循环，你就得把同样的代码复制 N 遍——这不仅低效，还无法适应 N 未知的情况。'
            + '理解循环是编写任何数据处理程序的基础。\n\n'
            + '## 语法说明\n\n'
            + '### for 循环\n\n'
            + '```c\nfor (初始化; 条件; 更新) {\n    循环体;\n}\n```\n\n'
            + '执行顺序：初始化（一次）→ 条件判断 → 循环体 → 更新 → 条件判断 → ... → 条件为假时退出。'
            + '所有三个部分都可以省略，但分号必须保留：`for (;;)` 是死循环。\n'
            + 'C99 起允许在初始化中声明变量：`for (int i = 0; i < n; i++)`，'
            + '变量 i 的作用域仅限循环体内。\n\n'
            + '### while 循环\n\n'
            + '```c\nwhile (条件) {\n    循环体;\n}\n```\n\n'
            + '先判断后执行。条件为假时一次都不执行。适合"循环次数未知、依赖条件"的场景。\n\n'
            + '### do-while 循环\n\n'
            + '```c\ndo {\n    循环体;\n} while (条件);  // 注意末尾分号\n```\n\n'
            + '先执行后判断，至少执行一次。适合"先做事再决定要不要继续"的场景，'
            + '如菜单驱动程序、读取直到 EOF 的循环。\n\n'
            + '### 控制语句\n\n'
            + '| 语句 | 作用 |\n'
            + '|------|------|\n'
            + '| `break;` | 跳出当前循环（或 switch）|\n'
            + '| `continue;` | 跳过本次剩余循环体，进入下次迭代 |\n'
            + '| `goto label;` | 跳转到标签（仅建议用于跳出多层循环）|\n'
            + '| `return x;` | 退出整个函数 |\n\n'
            + '### 三种循环对照\n\n'
            + '| 特性 | for | while | do-while |\n'
            + '|------|-----|-------|----------|\n'
            + '| 检查时机 | 先检查后执行 | 先检查后执行 | 先执行后检查 |\n'
            + '| 最少执行次数 | 0 | 0 | 1 |\n'
            + '| 适合场景 | 已知迭代次数 | 条件驱动 | 至少执行一次 |\n'
            + '| 初始化位置 | 循环头 | 循环外 | 循环外 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：break 与 continue**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    // 找出 1~100 中第一个能被 7 整除的数\n    for (int i = 1; i <= 100; i++) {\n        if (i % 7 == 0) {\n            printf("第一个 7 的倍数: %d\\n", i);\n            break;  // 找到就退出\n        }\n    }\n\n    // 输出 1~10 中所有奇数\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) continue;  // 跳过偶数\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}\n```\n\n'
            + 'break 退出整个循环，continue 仅跳过本次。两者都只对最内层循环生效——'
            + '嵌套循环中要跳出外层需用 goto 或标志变量。\n\n'
            + '**示例 2：do-while 实现菜单**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    int choice;\n    do {\n        printf("===== 菜单 =====\\n");\n        printf("1. 新游戏\\n2. 加载\\n3. 退出\\n");\n        printf("请选择: ");\n        if (scanf("%d", &choice) != 1) {\n            printf("输入无效\\n");\n            break;\n        }\n        switch (choice) {\n            case 1: printf("开始新游戏\\n"); break;\n            case 2: printf("加载存档\\n"); break;\n            case 3: printf("再见\\n"); break;\n            default: printf("无效选项\\n");\n        }\n    } while (choice != 3);\n    return 0;\n}\n```\n\n'
            + 'do-while 保证菜单至少显示一次，这是它相对于 while 的天然优势。\n\n'
            + '**示例 3：嵌套循环与提前退出**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    // 在二维数组中查找目标值\n    int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    int target = 5;\n    int found = 0;\n\n    for (int i = 0; i < 3 && !found; i++) {\n        for (int j = 0; j < 3; j++) {\n            if (matrix[i][j] == target) {\n                printf("找到 %d 在 (%d, %d)\\n", target, i, j);\n                found = 1;\n                break;  // 仅跳出内层\n            }\n        }\n    }\n    if (!found) printf("未找到\\n");\n    return 0;\n}\n```\n\n'
            + '用 `found` 标志变量配合外层循环条件，避免 goto。'
            + '这是 C 中"提前退出嵌套循环"的常见模式。'
            + 'Linux 内核允许用 goto 到清理标签，因为有时比标志变量更清晰。\n\n'
            + '## 注意事项\n\n'
            + '1. **off-by-one 错误**：`for (i = 0; i <= n; i++)` 执行 n+1 次，'
            + '而 `i < n` 执行 n 次。处理数组时用 `i < n`，遍历闭区间用 `i <= n`。\n'
            + '2. **死循环**：`while (1)` 或 `for(;;)` 在嵌入式主循环、事件循环中常见。'
            + '务必保证有退出条件（如 `break` 或 `return`），否则单元测试无法终止。\n'
            + '3. **空循环体**：`while (getchar() != \'\\n\');` 末尾分号是循环体，'
            + '用于"消耗输入直到换行"。建议显式写 `while (...) { /* empty */ }` 或加注释避免误判。\n'
            + '4. **float 做循环变量**：`for (float f = 0; f != 1.0; f += 0.1)` 可能永不终止——'
            + '浮点累加误差让 f 永远不等于 1.0。改用整数计数 + 计算，或用 `<` 比较。\n'
            + '5. **for 中修改循环变量**：在循环体内修改 i 会破坏循环逻辑。'
            + '如需跳过多个值，用 while 显式控制更清晰。\n'
            + '6. **goto 的合理使用**：跳出多层循环、统一的错误清理路径（Linux 内核风格）。'
            + '禁止用 goto 向前跳转构造循环——那是 1970 年代的写法。\n\n'
            + '## 实际应用\n\n'
            + '在数据库引擎中，扫描表是 `while (row = next_row())` 模式；'
            + '在图像处理中，每个像素由双层 for 循环遍历；'
            + '在数值算法中，牛顿迭代法用 `while (fabs(x - prev) > epsilon)` 收敛；'
            + '在游戏主循环中，`while (!quit) { process_input(); update(); render(); }` 是固定模式。'
            + '理解循环的性能特性（如循环展开、缓存友好访问）是写出高效代码的关键。\n\n'
            + '## 扩展知识\n\n'
            + '**性能：循环展开（loop unrolling）**：手动或编译器自动将 `for (i=0; i<n; i++) a[i]=0;` '
            + '改为 `for (i=0; i<n; i+=4) { a[i]=0; a[i+1]=0; a[i+2]=0; a[i+3]=0; }`，'
            + '减少分支开销。现代 CPU 流水线 + 编译器 `-O2` 通常自动优化，无需手写。\n\n'
            + '**缓存友好访问**：`matrix[i][j]` 按行优先存储，按行遍历（外层 i 内层 j）'
            + '比按列遍历快 10 倍以上——CPU 预取和缓存行生效。处理大数组务必注意访问顺序。\n\n'
            + '**循环不变量提取**：`for (i=0; i<n; i++) a[i] = b[i] * sqrt(2);` '
            + '中 `sqrt(2)` 每次都计算——应提取为 `double s = sqrt(2);` 在循环外计算。'
            + '编译器在 `-O2` 下通常自动做，但显式更可靠。',
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
            '## 概念详解\n\n'
            + '函数是组织和复用代码的基本单元——把一段逻辑打包成命名、可调用的单元。'
            + '没有函数，所有代码都得堆在 main 里，几千行的 main 函数在 1970 年代并不罕见。'
            + '函数让程序变得模块化、可测试、可复用，是从"脚本草稿"走向"工程项目"的关键一步。\n\n'
            + 'C 语言是过程式语言，函数是它最核心的抽象机制（C++ 才有类和对象）。'
            + '一个 C 项目本质上就是一组互相调用的函数集合。'
            + 'Linux 内核有数万个函数，glibc 标准库有上千个函数，'
            + '它们的接口设计、命名规范、参数选择都是工程典范。'
            + '理解函数定义、调用、参数传递是 C 编程的基础中的基础。\n\n'
            + '## 语法说明\n\n'
            + '### 函数定义\n\n'
            + '```c\n返回类型 函数名(参数类型1 参数名1, 参数类型2 参数名2, ...) {\n    函数体;\n    return 返回值;  // void 函数可省略 return\n}\n```\n\n'
            + '### 函数声明（原型）\n\n'
            + '```c\n返回类型 函数名(参数类型1, 参数类型2, ...);  // 参数名可省略\n```\n\n'
            + '声明告诉编译器函数签名，让定义可以放在调用点之后或其他文件中。'
            + '头文件（.h）就是函数声明的集合，让其他 .c 文件能调用本文件的函数。\n\n'
            + '### 参数传递\n\n'
            + '| 传递方式 | 语法 | 函数内修改是否影响外部 |\n'
            + '|----------|------|----------------------|\n'
            + '| 值传递 | `void f(int x)` | 否（拷贝）|\n'
            + '| 指针传递 | `void f(int *p)` | 是（通过解引用修改原变量）|\n'
            + '| 数组传递 | `void f(int arr[])` | 是（数组名退化为指针）|\n'
            + '| const 指针 | `void f(const int *p)` | 否（只读）|\n'
            + '| 传递结构体 | `void f(struct S s)` | 否（拷贝整个结构体，开销大）|\n'
            + '| 传递结构体指针 | `void f(struct S *p)` | 是（高效）|\n\n'
            + '### 返回值\n\n'
            + '- 函数最多返回一个值。需要返回多个值时，可通过指针参数"输出"：`void divmod(int a, int b, int *q, int *r)`。\n'
            + '- `void` 表示无返回值，函数体内 `return;` 可提前结束。\n'
            + '- 不要返回局部变量的地址（栈帧销毁后变成野指针）！'
            + '如需返回数组/字符串，应由调用者传入缓冲区，或用 `malloc` 分配。\n'
            + '- C99 起可用 `_Noreturn` 标注函数永不返回（如 `exit`、`abort`、`longjmp`）。\n\n'
            + '### 函数属性表\n\n'
            + '| 概念 | 语法 | 说明 |\n'
            + '|------|------|------|\n'
            + '| 函数声明 | `int add(int, int);` | 告诉编译器签名 |\n'
            + '| 函数定义 | `int add(int a, int b) { ... }` | 实现函数体 |\n'
            + '| 函数调用 | `add(2, 3)` | 执行函数 |\n'
            + '| 递归调用 | `factorial(n-1)` | 函数调用自身 |\n'
            + '| 函数指针 | `int (*fp)(int, int) = add;` | 把函数当数据 |\n'
            + '| inline（C99） | `inline int add(...)` | 建议内联展开 |\n'
            + '| static 函数 | `static int helper(...)` | 仅当前文件可见 |\n'
            + '| extern 函数 | `extern int add(...)` | 跨文件调用（默认）|\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：值传递 vs 指针传递**\n\n'
            + '```c\n#include <stdio.h>\n\n// 值传递：修改不影响外部\nvoid modify_by_value(int x) {\n    x = 100;\n}\n\n// 指针传递：修改影响外部\nvoid modify_by_pointer(int *x) {\n    *x = 100;\n}\n\nint main(void) {\n    int a = 1, b = 1;\n    modify_by_value(a);\n    modify_by_pointer(&b);\n    printf("a = %d, b = %d\\n", a, b);  // a = 1, b = 100\n    return 0;\n}\n```\n\n'
            + '这是 C 函数参数传递最核心的对比。值传递拷贝实参到形参，'
            + '修改形参不影响实参；指针传递通过解引用修改原变量。\n\n'
            + '**示例 2：多返回值（通过输出参数）**\n\n'
            + '```c\n#include <stdio.h>\n\n// 同时返回商和余数\nvoid divmod(int a, int b, int *quotient, int *remainder) {\n    *quotient = a / b;\n    *remainder = a % b;\n}\n\nint main(void) {\n    int q, r;\n    divmod(17, 5, &q, &r);\n    printf("17 / 5 = %d 余 %d\\n", q, r);\n    return 0;\n}\n```\n\n'
            + 'C 没有 Python 那样的多返回值语法，但用指针"输出参数"是惯用法。'
            + 'POSIX 的 `strtol`、`div` 函数都使用这种模式。'
            + '注意输出参数通常放在输入参数之后（Google C++ Style）。\n\n'
            + '**示例 3：函数指针（回调函数）**\n\n'
            + '```c\n#include <stdio.h>\n\n// 接受函数指针作为参数\nvoid apply(int *arr, int n, int (*op)(int)) {\n    for (int i = 0; i < n; i++) {\n        arr[i] = op(arr[i]);\n    }\n}\n\nint square(int x) { return x * x; }\nint negate(int x) { return -x; }\n\nint main(void) {\n    int arr[] = {1, 2, 3, 4, 5};\n    apply(arr, 5, square);\n    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    printf("\\n");\n\n    apply(arr, 5, negate);\n    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}\n```\n\n'
            + '函数指针让函数成为"一等公民"——可传递、可存储、可回调。'
            + 'qsort、信号处理、事件循环、插件架构都依赖函数指针。'
            + 'C++ 的虚函数本质上是函数指针表的语法糖。\n\n'
            + '## 注意事项\n\n'
            + '1. **未声明就调用**：C89 默认函数返回 int，C99 起严格要求声明。'
            + '未声明调用可能导致参数类型不匹配，行为未定义。'
            + '永远 `#include` 对应头文件，或写显式原型。\n'
            + '2. **返回局部变量地址**：`int *f() { int x = 5; return &x; }` 是严重错误——'
            + '栈帧销毁后该地址无效。改用 static、malloc、或调用者传入缓冲区。\n'
            + '3. **数组参数退化**：`void f(int arr[100])` 中 arr 实际是指针，'
            + 'sizeof(arr) 是指针大小而非数组大小。需要长度信息必须额外传参：'
            + '`void f(int *arr, size_t n)`。\n'
            + '4. **参数过多**：超过 5 个参数说明函数职责可能不清，'
            + '考虑拆分函数或用结构体打包参数（参数对象模式）。\n'
            + '5. **副作用与纯函数**：纯函数（无副作用、相同输入相同输出）'
            + '更易测试和推理。尽量减少对全局变量的修改。\n'
            + '6. **const 正确性**：不修改的参数加 `const`，'
            + '如 `void print_array(const int *arr, size_t n)`。'
            + '这是 C 工程代码的标配，能防止意外修改并让接口意图清晰。\n\n'
            + '## 实际应用\n\n'
            + 'Linux 内核的 `copy_to_user`、`kmalloc`、`printk` 都是函数设计的典范。'
            + 'glibc 的 `qsort` 接受函数指针实现"任意类型排序"，是泛型编程的纯 C 实现。'
            + 'OpenSSL 的 `SSL_read`/`SSL_write` 通过指针参数返回字节数和错误码。'
            + 'SQLite 的 `sqlite3_exec` 接受回调函数处理每行查询结果——'
            + '这是 C 函数指针的典型用法。学会设计良好的函数 API 是写库和框架的前提。\n\n'
            + '## 扩展知识\n\n'
            + '**变长参数（variadic）**：`int printf(const char *fmt, ...);` 接受任意数量参数。'
            + '用 `<stdarg.h>` 的 `va_start/va_arg/va_end` 宏访问。'
            + '由于类型信息丢失，必须由调用者约定（如 printf 靠 fmt 字符串）。'
            + 'C99 引入 `__VA_ARGS__` 宏让用户自定义变参宏。\n\n'
            + '**inline 函数（C99）**：`static inline int max(int a, int b) { return a > b ? a : b; }` '
            + '建议编译器内联展开，消除函数调用开销。'
            + '通常定义在头文件中（必须 static 避免多重定义）。'
            + '现代编译器在 `-O2` 下会自动内联，inline 关键字更多是建议。\n\n'
            + '**`_Noreturn`（C11）**：标注 `exit`、`abort`、`longjmp` 等不返回的函数，'
            + '让编译器优化并消除"函数后语句不可达"的警告。\n\n'
            + '**函数调用开销**：C 函数调用通常开销很小（push 参数、call、ret），'
            + '但在性能极致场景（如循环内的简单函数）可用 inline 或宏消除。'
            + '注意：宏没有类型检查，副作用参数会被多次求值，优先用 inline 函数。',
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
            '## 概念详解\n\n'
            + '递归是函数直接或间接调用自身的编程技巧。它把"大问题"分解为"同结构的更小问题"，'
            + '直到问题小到可以直接求解。递归是一种思维方式——许多问题（树、图、分治算法）'
            + '用递归描述天然简洁，强行改成迭代反而复杂。但递归不是银弹——它有栈空间开销、'
            + '性能损失、调试困难等代价。理解何时用递归、何时不该用，是成熟程序员的标志。\n\n'
            + '为什么递归有用？因为很多数据结构本身就是递归定义的：'
            + '链表是"一个节点 + 一个更短的链表"，树是"一个根 + 若干子树"，'
            + '文件系统是"一个目录 + 若干子项（可能是子目录）"。'
            + '处理这类结构时，递归代码与数据结构同构，写起来自然、读起来清晰。'
            + '递归也是分治算法（归并排序、快速排序、二分搜索）和回溯算法（八皇后、迷宫）的基础。\n\n'
            + '## 语法说明\n\n'
            + '### 递归函数的标准结构\n\n'
            + '```c\n返回类型 func(参数) {\n    if (基线条件) {\n        return 直接答案;     // 不再递归\n    }\n    // 把问题分解为更小的子问题\n    return 当前层处理 + func(更小的参数);  // 递归调用\n}\n```\n\n'
            + '每个递归函数必须有两个要素：\n'
            + '1. **基线条件（base case）**：终止递归的简单情况，必须有！否则会无限递归导致栈溢出。\n'
            + '2. **递归条件（recursive case）**：把问题分解为更小的同结构子问题，向基线条件推进。\n\n'
            + '### 递归执行过程\n\n'
            + '每次递归调用都会在调用栈上创建一个新的栈帧（stack frame），包含局部变量、参数、返回地址。'
            + '递归深入时栈帧累积，返回时栈帧逐个弹出。例如 `factorial(5)` 的执行：\n\n'
            + '```'
            + '调用栈（自顶向下深入）:\n'
            + '  factorial(5) → 5 * factorial(4)\n'
            + '                  factorial(4) → 4 * factorial(3)\n'
            + '                                  factorial(3) → 3 * factorial(2)\n'
            + '                                                  factorial(2) → 2 * factorial(1)\n'
            + '                                                                  factorial(1) = 1  ← 基线\n'
            + '返回栈（自底向上回溯）:\n'
            + '  factorial(1) = 1\n'
            + '  factorial(2) = 2 * 1 = 2\n'
            + '  factorial(3) = 3 * 2 = 6\n'
            + '  factorial(4) = 4 * 6 = 24\n'
            + '  factorial(5) = 5 * 24 = 120\n'
            + '```\n\n'
            + '### 递归类型对照\n\n'
            + '| 类型 | 说明 | 示例 |\n'
            + '|------|------|------|\n'
            + '| 线性递归 | 每次调用产生 1 个新调用 | factorial、链表遍历 |\n'
            + '| 树形递归 | 每次调用产生多个新调用 | fib（朴素）、树的遍历 |\n'
            + '| 尾递归 | 递归调用是最后操作 | 可优化为循环 |\n'
            + '| 间接递归 | A 调 B，B 调 A | 词法分析器 |\n'
            + '| 互递归 | 多个函数相互调用 | even/odd 判断 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：递归计算 2 的幂**\n\n'
            + '```c\n#include <stdio.h>\n\n// 2^n = 2 * 2^(n-1), 2^0 = 1\nlong long power_of_two(int n) {\n    if (n == 0) return 1;          // 基线\n    return 2 * power_of_two(n - 1); // 递归\n}\n\nint main(void) {\n    for (int i = 0; i <= 10; i++) {\n        printf("2^%d = %lld\\n", i, power_of_two(i));\n    }\n    return 0;\n}\n```\n\n'
            + '简单的线性递归。注意结果用 `long long` 防止溢出——2^31 已超出 int 范围。\n\n'
            + '**示例 2：递归斐波那契（带记忆化优化）**\n\n'
            + '```c\n#include <stdio.h>\n#define MAX 100\n\nlong long memo[MAX];\n\n// 带记忆化的 fib: O(n) 而非 O(2^n)\nlong long fib(int n) {\n    if (n <= 1) return n;\n    if (memo[n] != 0) return memo[n];  // 已缓存\n    memo[n] = fib(n-1) + fib(n-2);     // 计算并缓存\n    return memo[n];\n}\n\nint main(void) {\n    for (int i = 0; i < 50; i++) {\n        printf("fib(%d) = %lld\\n", i, fib(i));\n    }\n    return 0;\n}\n```\n\n'
            + '朴素递归 fib(50) 需要约 10 亿次调用，不可行。记忆化后只需 50 次计算——'
            + '时间复杂度从 O(2^n) 降为 O(n)。'
            + '这是动态规划的雏形，处理重叠子问题的关键技巧。\n\n'
            + '**示例 3：递归遍历二叉树（前序）**\n\n'
            + '```c\n#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int val;\n    struct Node *left, *right;\n} Node;\n\nNode* new_node(int v) {\n    Node *n = malloc(sizeof(Node));\n    n->val = v; n->left = n->right = NULL;\n    return n;\n}\n\n// 递归前序遍历：根 → 左 → 右\nvoid preorder(Node *root) {\n    if (root == NULL) return;       // 基线：空树\n    printf("%d ", root->val);       // 访问根\n    preorder(root->left);           // 递归左子树\n    preorder(root->right);          // 递归右子树\n}\n\nint main(void) {\n    //      1\n    //     / \\\n    //    2   3\n    //   /\n    //  4\n    Node *root = new_node(1);\n    root->left = new_node(2);\n    root->right = new_node(3);\n    root->left->left = new_node(4);\n\n    preorder(root);  // 输出: 1 2 4 3\n    printf("\\n");\n    return 0;\n}\n```\n\n'
            + '树结构天然递归——一棵树就是"根 + 左子树 + 右子树"。'
            + '递归代码只有 4 行，但能处理任意深度的树。'
            + '用迭代改写需要显式栈，代码复杂得多。\n\n'
            + '## 注意事项\n\n'
            + '1. **必须有基线条件**：忘记基线条件会导致无限递归，'
            + '栈溢出（stack overflow）使程序崩溃。'
            + '检查每个递归分支最终都能到达基线。\n'
            + '2. **基线条件必须可达**：`void f(int n) { if (n == 0) return; f(n); }` '
            + '虽然写了基线，但 n 不递减，永远到不了 0。确保每次递归向基线推进。\n'
            + '3. **栈深度限制**：默认栈大小通常 1~8MB，每个栈帧几十字节到几 KB。'
            + '递归深度过万就可能溢出。深度未知时改用迭代 + 显式栈（堆分配）。\n'
            + '4. **重复计算**：朴素递归 fib(40) 需要约 10 亿次调用。'
            + '用记忆化、动态规划、或改为迭代解决。\n'
            + '5. **尾递归优化（TCO）**：若递归调用是函数最后操作，'
            + '编译器可复用栈帧（等价于循环）。但 C 标准不强制 TCO，GCC/Clang 在 `-O2` 下通常会做。'
            + '写尾递归时把"中间结果"作为参数传递：`fac(n, acc) = fac(n-1, n*acc)`。\n'
            + '6. **递归 vs 迭代**：能简单改成迭代的（如 factorial、fib）就用迭代；'
            + '树遍历、分治、回溯用递归更清晰。两者本质等价（用栈模拟），'
            + '选择更可读的那种。\n\n'
            + '## 实际应用\n\n'
            + '文件系统遍历是递归的经典应用——`du` 命令递归计算目录大小，'
            + '`find` 递归搜索文件，`rm -r` 递归删除目录。'
            + 'JSON/XML 解析器用递归处理嵌套结构。'
            + '编译器的语法分析器大量使用递归下降。'
            + '图算法（DFS、最短路径、连通分量）几乎都是递归的。'
            + '游戏 AI 的 minimax 算法递归搜索博弈树。'
            + '掌握递归是算法设计的核心素养。\n\n'
            + '## 扩展知识\n\n'
            + '**尾递归**：递归调用是最后操作的递归形式，可被优化为循环。'
            + '对比：\n'
            + '- 非尾递归：`int fac(int n) { return n * fac(n-1); }`（乘法在递归之后）\n'
            + '- 尾递归：`int fac(int n, int acc) { return fac(n-1, n*acc); }`（递归是最后操作）\n\n'
            + '**分治算法模板**：'
            + '`T divide_and_conquer(P) { if (base(P)) return solve(P); divide P into P1,P2; '
            + 'return combine(divide_and_conquer(P1), divide_and_conquer(P2)); }`。'
            + '归并排序、快速排序、最近点对问题都用此模板。\n\n'
            + '**回溯算法**：递归 + 撤销选择。'
            + '如八皇后问题：在每行放置皇后时递归尝试，失败则撤销并回溯。'
            + '模板：`void backtrack(state) { if (done(state)) { record; return; } '
            + 'for (choice : choices(state)) { make(choice); backtrack(state); undo(choice); } }`。\n\n'
            + '**递归转迭代**：任何递归都能用显式栈转为迭代。'
            + '手动模拟栈虽然代码更长，但避免了栈溢出风险，'
            + '在深度不可控的场景（如解析用户输入的嵌套结构）必须使用。',
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
            '## 概念详解\n\n'
            + '数组是 C 语言中最基础的数据结构——一块连续内存存储多个同类型元素。'
            + '它的核心优势是 O(1) 随机访问（通过下标直接定位），'
            + '核心劣势是大小固定、插入/删除低效。'
            + '理解数组是学习指针、字符串、动态内存的前提，几乎所有数据结构都建立在数组之上。\n\n'
            + '为什么 C 数组从 0 开始编号？因为 `nums[i]` 在编译时被翻译为 `*(nums + i)`，'
            + '即"从数组起始地址前进 i 个元素"。如果从 1 开始就要做 `*(nums + i - 1)`，'
            + '多一次减法。Dijkstra 在著名文章《Why numbering should start at zero》中论证了'
            + '0 起始的优雅性，几乎所有现代语言都采用了这一约定。\n\n'
            + '## 语法说明\n\n'
            + '### 数组声明与初始化\n\n'
            + '```c\n类型 名字[大小];                 // 声明，未初始化（局部数组含垃圾值）\n类型 名字[大小] = {v1, v2, ...};  // 声明并初始化\n类型 名字[] = {v1, v2, ...};      // 大小由初始值推断\n类型 名字[5] = {0};               // 全部初始化为 0\n```\n\n'
            + '### 多维数组\n\n'
            + '```c\nint matrix[3][4];                     // 3 行 4 列\nint matrix[3][4] = {{1,2,3,4}, {5,6,7,8}, {9,10,11,12}};\nint matrix[][4] = {{1,2,3,4}, {5,6,7,8}};  // 行数自动推断，列数必须指定\n```\n\n'
            + '内存布局：按行优先存储。`matrix[i][j]` 地址 = `matrix + i * 4 + j`。'
            + '访问 `matrix[i][j]` 时编译器计算偏移量。\n\n'
            + '### 数组操作速查表\n\n'
            + '| 操作 | 写法 | 说明 |\n'
            + '|------|------|------|\n'
            + '| 访问元素 | `arr[i]` | O(1)，等价于 `*(arr+i)` |\n'
            + '| 修改元素 | `arr[i] = x` | 直接赋值 |\n'
            + '| 计算长度 | `sizeof(arr)/sizeof(arr[0])` | 仅在声明作用域内有效 |\n'
            + '| 遍历 | `for (int i=0; i<n; i++) ...` | 标准模式 |\n'
            + '| 范围初始化 | `int a[10] = {0}` | 全部置 0 |\n'
            + '| 部分初始化 | `int a[5] = {1, 2}` | 其余自动置 0 |\n'
            + '| 指针访问 | `int *p = arr; p[i]` | 与数组下标等价 |\n\n'
            + '### 变长数组 VLA（C99）\n\n'
            + '```c\nint n = read_size();\nint arr[n];  // 变长数组，大小运行时确定\n```\n\n'
            + 'VLA 在栈上分配，大小受栈容量限制。GCC 支持，MSVC 不支持。'
            + '不建议用于生产代码——大小不可控时可能栈溢出。需要动态大小请用 malloc。\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：数组作为函数参数（退化）**\n\n'
            + '```c\n#include <stdio.h>\n\n// 数组参数会退化为指针，必须额外传长度\nvoid print_array(int arr[], int n) {\n    printf("sizeof(arr) = %zu (是指针大小!)\\n", sizeof(arr));\n    for (int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n}\n\nint main(void) {\n    int nums[] = {10, 20, 30, 40, 50};\n    printf("sizeof(nums) = %zu (是数组总大小)\\n", sizeof(nums));\n    print_array(nums, 5);\n    return 0;\n}\n```\n\n'
            + '关键陷阱：`sizeof(arr)` 在函数内是指针大小（8 字节），不是数组大小。'
            + '这就是为什么数组函数必须显式传长度参数。'
            + '初学者常误以为可以在函数内用 sizeof 计算数组长度。\n\n'
            + '**示例 2：冒泡排序**\n\n'
            + '```c\n#include <stdio.h>\n\nvoid bubble_sort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int swapped = 0;\n        for (int j = 0; j < n - 1 - i; j++) {\n            if (arr[j] > arr[j+1]) {\n                int tmp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = tmp;\n                swapped = 1;\n            }\n        }\n        if (!swapped) break;  // 优化：已有序则提前退出\n    }\n}\n\nint main(void) {\n    int nums[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(nums) / sizeof(nums[0]);\n    bubble_sort(nums, n);\n    for (int i = 0; i < n; i++) printf("%d ", nums[i]);\n    printf("\\n");\n    return 0;\n}\n```\n\n'
            + '冒泡排序是 O(n²) 算法，简单但效率低。优化点：'
            + '① 内层循环每次少 1（最大值已"沉底"）；② 加 swapped 标志提前退出。'
            + '生产代码用 `qsort` 标准库（O(n log n)）。\n\n'
            + '**示例 3：二维数组——矩阵转置**\n\n'
            + '```c\n#include <stdio.h>\n\nint main(void) {\n    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int b[3][2];\n\n    // 转置：b[j][i] = a[i][j]\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 3; j++) {\n            b[j][i] = a[i][j];\n        }\n    }\n\n    // 打印转置矩阵\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 2; j++) {\n            printf("%d ", b[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n```\n\n'
            + '二维数组是矩阵运算的基础。注意遍历顺序——按行遍历（外层 i 内层 j）'
            + '对缓存友好，比按列遍历快得多。\n\n'
            + '## 注意事项\n\n'
            + '1. **数组越界是未定义行为**：`int a[5]; a[10] = 0;` 编译器不检查，'
            + '可能读到/写到任意内存，导致崩溃或安全漏洞（缓冲区溢出）。'
            + '永远检查边界：`if (i >= 0 && i < n) a[i] ...`。\n'
            + '2. **不检查长度的 strcpy/scanf**：`char buf[10]; scanf("%s", buf);` 输入超过 9 字符就溢出。'
            + '用 `scanf("%9s", buf)` 或 `fgets` 限制长度。\n'
            + '3. **sizeof 在函数中无效**：数组传参后退化为指针，`sizeof(arr)` 返回指针大小。'
            + '永远显式传长度参数。\n'
            + '4. **局部数组大小过大**：`int big[1000000];` 在栈上分配 4MB，可能栈溢出。'
            + '大数组用 `malloc` 在堆上分配，或声明为 `static`/全局。\n'
            + '5. **初始化习惯**：`int a[10] = {0};` 把第一个元素设 0，其余自动置 0。'
            + '不写 `= {0}` 则局部数组含垃圾值，导致难以排查的 bug。\n'
            + '6. **二维数组的连续性**：`int m[3][4]` 是 12 个连续 int，'
            + '不是 3 个独立的 `int[4]` 指针。这与"数组的指针数组"（`int *m[3]`）不同。\n\n'
            + '## 实际应用\n\n'
            + '图像处理中，图像本质是二维数组——RGB 像素矩阵。'
            + '神经网络中的张量本质是多维数组。'
            + '数据库的行式存储（如 PostgreSQL）把表数据按行存为字节数组。'
            + '操作系统的页表、文件系统的 inode 表都是数组结构。'
            + '游戏中的棋盘、地图、动画帧都用数组表示。'
            + '掌握数组的高效使用是写高性能代码的前提。\n\n'
            + '## 扩展知识\n\n'
            + '**柔性数组成员（C99）**：`struct String { size_t len; char data[]; };` '
            + '允许结构体末尾有一个大小未指定的数组。'
            + '使用：`String *s = malloc(sizeof(String) + 100);` 一次分配结构体 + 数据。'
            + '常用于实现动态字符串（如 sds，Redis 内部字符串）。\n\n'
            + '**数组退化与指针参数**：`void f(int a[10])`、`void f(int a[])`、`void f(int *a)` '
            + '三种写法完全等价，编译器都当作 `int *a`。'
            + '推荐写 `int *a, size_t n` 形式，明确表示"指针 + 长度"。\n\n'
            + '**静态数组 vs 动态数组**：栈上数组大小必须编译期常量（C99 VLA 例外）；'
            + '堆上数组（malloc）大小可运行时确定但需手动 free。'
            + 'C++ 的 `std::vector` 兼具两者优点——自动管理、可动态扩容。',
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
            '## 概念详解\n\n'
            + '指针是 C 语言的灵魂，也是初学者最大的门槛。'
            + '理解指针的关键是理解"内存是带编号的字节序列"——每个字节有唯一地址，'
            + '指针就是存储这些地址的变量。'
            + '`int x = 42;` 在内存中某处开辟 4 字节存储 42，变量 x 名字对应那个地址；'
            + '`int *p = &x;` 中 p 存储的是 x 的地址，通过 p 可以间接访问 x。\n\n'
            + '为什么需要指针？因为 C 是系统级语言，需要：\n'
            + '1. **高效传参**：传结构体的指针（8 字节）而非整个结构体（可能上百字节）。\n'
            + '2. **修改外部变量**：C 函数默认值传递，传指针才能让函数修改调用者的变量。\n'
            + '3. **动态内存管理**：malloc 返回堆上地址，必须用指针接收。\n'
            + '4. **实现链式结构**：链表节点、树节点通过指针连接彼此。\n'
            + '5. **函数回调**：函数指针让函数成为可传递的数据。\n'
            + '6. **硬件交互**：嵌入式通过指针直接读写硬件寄存器（如 `*(volatile int*)0x40021000`）。\n\n'
            + '## 语法说明\n\n'
            + '### 指针声明与基本操作\n\n'
            + '```c\nint x = 42;\nint *p;        // 声明指向 int 的指针\np = &x;        // 取地址，p 现在指向 x\nprintf("%d", *p);  // 解引用，输出 p 指向的值（42）\n*p = 100;      // 通过指针修改 x 的值\n```\n\n'
            + '### 指针相关运算符\n\n'
            + '| 运算符 | 含义 | 示例 |\n'
            + '|--------|------|------|\n'
            + '| `&` | 取地址 | `&x` 得到 x 的地址 |\n'
            + '| `*` | 解引用（取值）| `*p` 得到 p 指向的值 |\n'
            + '| `->` | 结构体指针成员 | `p->x` 等价于 `(*p).x` |\n'
            + '| `+ -` | 指针算术 | `p + 1` 前进一个元素 |\n'
            + '| `++ --` | 指针自增/自减 | `p++` 前进一个元素 |\n'
            + '| `[]` | 下标（语法糖）| `p[i]` 等价于 `*(p + i)` |\n'
            + '| `== < >` | 指针比较 | 比较地址大小，仅同数组内有意义 |\n\n'
            + '### 指针类型\n\n'
            + '| 类型 | 说明 |\n'
            + '|------|------|\n'
            + '| `int *p` | 指向 int 的指针 |\n'
            + '| `char *p` | 指向 char 的指针（C 字符串）|\n'
            + '| `void *p` | 通用指针，可指向任意类型 |\n'
            + '| `int **p` | 指向 int 指针的指针（二级指针）|\n'
            + '| `int (*fp)(int)` | 函数指针，指向 `int(int)` 函数 |\n'
            + '| `int *arr[10]` | 指针数组（10 个指针）|\n'
            + '| `int (*arr)[10]` | 数组指针（指向含 10 个 int 的数组）|\n'
            + '| `NULL` | 空指针常量（C11 起可用 `nullptr` 仅 C++）|\n'
            + '| `volatile int *p` | 指向 volatile int（硬件寄存器）|\n\n'
            + '### 指针大小\n\n'
            + '指针大小取决于地址空间，与所指类型无关：\n'
            + '- 32 位平台：所有指针都是 4 字节\n'
            + '- 64 位平台：所有指针都是 8 字节\n'
            + '用 `sizeof(int*)`、`sizeof(char*)` 验证，结果相同。\n\n'
            + '### 指针算术的步长\n\n'
            + '`p + 1` 实际地址增加 `sizeof(*p)` 字节：\n'
            + '- `char *p; p + 1` → 地址 + 1\n'
            + '- `int *p; p + 1` → 地址 + 4\n'
            + '- `double *p; p + 1` → 地址 + 8\n'
            + '这种"按类型自动调步长"的设计让 `p[i]` 对所有类型都统一。\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：指针与多级间接**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    int x = 42;\n    int *p = &x;     // 一级指针\n    int **pp = &p;   // 二级指针：指向指针的指针\n\n    printf("x = %d\\n", x);\n    printf("*p = %d\\n", *p);\n    printf("**pp = %d\\n", **pp);  // 解两次引用\n\n    **pp = 100;  // 通过二级指针修改 x\n    printf("修改后 x = %d\\n", x);\n    return 0;\n}\n```\n\n'
            + '二级指针常用于：函数修改一级指针（如 `void alloc(Node **pp)`）、'
            + '二维数组传参、命令行参数 `argv`（实际类型是 `char **`）。\n\n'
            + '**示例 2：const 指针的四种组合**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    int x = 10, y = 20;\n\n    const int *p1 = &x;     // 指向 const int 的指针：不能通过 p1 改值\n    int *const p2 = &x;     // const 指针：不能改 p2 的指向\n    const int *const p3 = &x; // 双 const：都不能改\n    int const *p4 = &x;     // 等价于 p1（const 在 * 前后等价）\n\n    // *p1 = 5;  // 编译错误\n    p1 = &y;    // OK，可改指向\n    *p2 = 5;    // OK，可改值\n    // p2 = &y;  // 编译错误\n    return 0;\n}\n```\n\n'
            + '记忆口诀："const 在 `*` 左边修饰值，在 `*` 右边修饰指针"。'
            + 'const 正确性是 C 工程代码的必备——函数参数不修改的指针应声明为 `const T *`。\n\n'
            + '**示例 3：void* 通用指针**\n\n'
            + '```c\n#include <stdio.h>\n\nvoid print_any(void *p, char type) {\n    switch (type) {\n        case \'i\': printf("int: %d\\n", *(int*)p); break;\n        case \'d\': printf("double: %f\\n", *(double*)p); break;\n        case \'s\': printf("string: %s\\n", (char*)p); break;\n    }\n}\n\nint main(void) {\n    int i = 42;\n    double d = 3.14;\n    char *s = "hello";\n    print_any(&i, \'i\');\n    print_any(&d, \'d\');\n    print_any(s, \'s\');\n    return 0;\n}\n```\n\n'
            + '`void*` 是 C 的泛型机制——malloc 返回 void*，qsort 比较函数接受 void*。'
            + '使用前必须强转回具体类型。注意：void* 不能解引用（不知道步长），'
            + '也不能做算术（GCC 允许当作 char* 算术，但非标准）。\n\n'
            + '## 注意事项\n\n'
            + '1. **未初始化的指针**：`int *p; *p = 5;` 是严重错误——p 指向随机地址，'
            + '修改该地址可能崩溃或破坏其他数据。'
            + '声明指针时立即初始化：`int *p = NULL;` 或 `int *p = &x;`。\n'
            + '2. **空指针解引用**：`*NULL` 是未定义行为，通常导致段错误（SIGSEGV）。'
            + '使用指针前检查：`if (p) *p = ...`。\n'
            + '3. **悬空指针（dangling pointer）**：指针指向的内存已被 free 或返回到栈帧，'
            + '继续使用该指针是未定义行为。free 后立即置空：`free(p); p = NULL;`。\n'
            + '4. **野指针（wild pointer）**：未初始化的指针，内容是随机地址。'
            + '永远初始化指针——要么指向有效对象，要么 NULL。\n'
            + '5. **指针类型转换**：不同类型指针间转换要小心。'
            + '`int *p; char *c = (char*)p;` 后 `*c` 只读 1 字节。'
            + '对齐问题：`int *p = (int*)malloc(1);` 可能崩溃（malloc 保证对齐，但其他情况未必）。\n'
            + '6. **指针运算越界**：`int a[5]; int *p = a + 10;` 本身合法，'
            + '但解引用 `*p` 越界。C 允许指针指向数组尾后一个位置（`a + n`），但不能解引用。\n\n'
            + '## 实际应用\n\n'
            + '操作系统内核用指针管理进程的虚拟内存（页表、TLB）。'
            + '设备驱动通过指针直接读写硬件寄存器（`volatile uint32_t *reg = 0x40021000;`）。'
            + '数据库 B+ 树的节点通过指针链接。'
            + 'JSON 解析器用指针遍历字符串。'
            + 'Web 服务器的事件循环用函数指针注册回调。'
            + '掌握指针是系统级编程的核心能力，也是 C/C++ 程序员与其他语言程序员的分水岭。\n\n'
            + '## 扩展知识\n\n'
            + '**restrict 关键字（C99）**：`void *memcpy(void *restrict dest, const void *restrict src, size_t n);` '
            + '告诉编译器两个指针不重叠，可激进优化。'
            + '程序员需保证不重叠，否则行为未定义。'
            + '在性能敏感的库函数（memcpy、memset）中常用。\n\n'
            + '**volatile 关键字**：`volatile int *reg;` 告诉编译器该变量可能被硬件或'
            + '其他线程修改，每次访问都从内存读取而非缓存到寄存器。'
            + '嵌入式编程和信号处理函数中必备。'
            + '注意：volatile 不保证原子性，也不保证内存顺序，多线程同步应使用 C11 原子或互斥锁。\n\n'
            + '**指针别名（aliasing）**：两个指针指向同一块内存时称为别名。'
            + '编译器优化时假设无别名（除非用 volatile），'
            + '违反 strict aliasing 规则（不同类型指针互指）是未定义行为。'
            + '需要类型双关（type punning）时用 union 或 memcpy。',
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
            '## 概念详解\n\n'
            + '在 C 语言中，数组与指针有着深刻的内在联系——可以说"数组名就是指针的伪装"。'
            + '理解这种联系是掌握 C 字符串、缓冲区操作、动态内存的前提。'
            + '几乎所有标准库函数（strcpy、memcpy、printf）都依赖"数组即指针"的语义。\n\n'
            + '为什么数组名是指针？因为 C 最初是为 PDP-11 这种小型机设计的，'
            + '把数组名当作指向首元素的指针可以简化编译器实现，'
            + '也让函数调用更高效（不复制整个数组，只传地址）。'
            + '这是 C 著名的"数组退化（array decay）"特性——'
            + '数组在大多数表达式中会被自动转换为指向首元素的指针。\n\n'
            + '## 语法说明\n\n'
            + '### 数组与指针的等价关系\n\n'
            + '```c\nint nums[5] = {10, 20, 30, 40, 50};\nint *p = nums;  // nums 退化为 &nums[0]\n\n// 以下写法完全等价\nnums[i]   ↔  *(nums + i)   ↔  *(p + i)   ↔  p[i]\n&nums[i]  ↔  nums + i       ↔  p + i\n```\n\n'
            + '### 数组退化的三个例外\n\n'
            + '数组在以下三种情况**不会**退化为指针：\n'
            + '1. `sizeof(nums)` — 返回整个数组大小，不是指针大小\n'
            + '2. `&nums` — 取数组地址，类型是 `int (*)[5]`（指向数组的指针），不是 `int**`\n'
            + '3. 字符串字面量初始化数组：`char s[] = "hi";` — 是数组拷贝，不是指针赋值\n\n'
            + '### 指针算术\n\n'
            + '| 操作 | 含义 | 示例（int *p）|\n'
            + '|------|------|----------------|\n'
            + '| `p + n` | 前进 n 个元素 | `p + 2` 地址加 8 字节 |\n'
            + '| `p - n` | 后退 n 个元素 | `p - 1` 地址减 4 字节 |\n'
            + '| `p++` / `++p` | 前进 1 个元素 | 遍历数组常用 |\n'
            + '| `p--` / `--p` | 后退 1 个元素 | 反向遍历 |\n'
            + '| `p2 - p1` | 两指针元素个数差 | 同数组内才有意义 |\n'
            + '| `p2 < p1` | 比较前后位置 | 循环终止条件 |\n'
            + '| `p1 + p2` | **不允许** | 编译错误 |\n'
            + '| `p * 2` | **不允许** | 编译错误 |\n\n'
            + '### 数组传参的等价写法\n\n'
            + '```c\n// 以下三种写法完全等价，编译器都当作 int*\nvoid f1(int arr[10]) { ... }\nvoid f2(int arr[]) { ... }\nvoid f3(int *arr) { ... }\n```\n\n'
            + '函数内 `sizeof(arr)` 永远是指针大小（8 字节），不是数组大小。'
            + '所以数组函数必须显式传长度：`void f(int *arr, size_t n)`。\n\n'
            + '### 多维数组与指针\n\n'
            + '```c\nint m[3][4];\n\n// m 的类型是 int(*)[4]（指向 int[4] 的指针）\n// m[i][j] 等价于 *(*(m + i) + j)\n\n// 传参时第二维及以后必须指定\nvoid print(int (*m)[4], int rows) { ... }\nvoid print(int m[][4], int rows) { ... }  // 等价写法\n```\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：四种等价的数组遍历**\n\n'
            + '```c\n#include <stdio.h>\nint main(void) {\n    int nums[] = {10, 20, 30, 40, 50};\n    int n = sizeof(nums) / sizeof(nums[0]);\n    int *p = nums;\n\n    // 写法 1: 下标\n    for (int i = 0; i < n; i++) printf("%d ", nums[i]);\n    printf("\\n");\n\n    // 写法 2: 指针 + 下标\n    for (int i = 0; i < n; i++) printf("%d ", p[i]);\n    printf("\\n");\n\n    // 写法 3: 指针 + 偏移\n    for (int i = 0; i < n; i++) printf("%d ", *(p + i));\n    printf("\\n");\n\n    // 写法 4: 指针自增（最像底层 C）\n    for (int *q = nums; q < nums + n; q++) printf("%d ", *q);\n    printf("\\n");\n    return 0;\n}\n```\n\n'
            + '四种写法输出完全相同。现代编译器在 `-O2` 下会优化为相同代码，'
            + '选最易读的（通常是下标法）。指针法在写底层库时仍有价值。\n\n'
            + '**示例 2：用指针实现 memmove（处理重叠内存）**\n\n'
            + '```c\n#include <stdio.h>\n\n// 模拟标准库 memmove：处理源和目标重叠的情况\nvoid *my_memmove(void *dest, const void *src, size_t n) {\n    char *d = dest;\n    const char *s = src;\n    if (d < s) {\n        // 目标在前：从前往后复制\n        while (n--) *d++ = *s++;\n    } else {\n        // 目标在后：从后往前复制，避免覆盖\n        d += n; s += n;\n        while (n--) *--d = *--s;\n    }\n    return dest;\n}\n\nint main(void) {\n    char buf[] = "Hello, World!";\n    my_memmove(buf + 6, buf, 5);  // 把 "Hello" 复制到 ", W" 位置\n    printf("%s\\n", buf);  // 输出 "Hello Hello!"\n    return 0;\n}\n```\n\n'
            + '这就是标准库 `memmove` 的核心思想——通过判断方向处理内存重叠。'
            + '`memcpy` 不保证重叠时正确，因为允许用 SIMD 优化假设不重叠。'
            + '这是"接口契约"的典型例子。\n\n'
            + '**示例 3：qsort 排序任意类型**\n\n'
            + '```c\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint cmp_int(const void *a, const void *b) {\n    return *(int*)a - *(int*)b;  // 升序\n}\n\nint cmp_str(const void *a, const void *b) {\n    return strcmp(*(const char**)a, *(const char**)b);\n}\n\nint main(void) {\n    int nums[] = {5, 2, 8, 1, 9, 3};\n    qsort(nums, 6, sizeof(int), cmp_int);\n    for (int i = 0; i < 6; i++) printf("%d ", nums[i]);\n    printf("\\n");\n\n    const char *names[] = {"Charlie", "Alice", "Bob"};\n    qsort(names, 3, sizeof(char*), cmp_str);\n    for (int i = 0; i < 3; i++) printf("%s ", names[i]);\n    printf("\\n");\n    return 0;\n}\n```\n\n'
            + 'qsort 是 C 标准库的"泛型"函数——通过 void* + 元素大小 + 比较函数实现。'
            + '这是 C 没有 C++ 模板时实现泛型的标准做法。'
            + '比较函数返回负/零/正，类似 strcmp 的语义。\n\n'
            + '## 注意事项\n\n'
            + '1. **sizeof 在函数中失效**：传给函数的数组退化为指针，'
            + '`sizeof(arr)` 在函数内永远返回指针大小。永远显式传长度参数。\n'
            + '2. **二维数组传参陷阱**：`void f(int **m)` 与 `void f(int m[][4])` 不是一回事！'
            + '前者是"指针的指针"（如 `int *arr[N]`），后者是"连续的二维数组"。'
            + '把 `int m[3][4]` 传给 `int**` 会崩溃。\n'
            + '3. **指针越界 vs 越界比较**：`p + n` 指向数组尾后位置合法，'
            + '但 `*(p + n)` 解引用越界是 UB。比较 `p < nums + n` 是合法的循环终止条件。\n'
            + '4. **不同数组指针比较**：`&a[0] < &b[0]`（a 和 b 是不同数组）是未定义行为。'
            + '指针比较仅在"同一对象或数组（含尾后位置）"内有定义。\n'
            + '5. **指针算术的步长陷阱**：`char *c = (char*)int_arr; c + 4` '
            + '前进 4 字节，可能跨越一个 int。混用不同类型指针算术时要特别小心。\n'
            + '6. **const 数组传参**：`const int arr[]` 退化为 `const int *`，'
            + '函数内不能修改。这是"只读参数"的标志，写库函数时务必正确使用。\n\n'
            + '## 实际应用\n\n'
            + '网络协议解析是"指针 + 数组"的典型场景——接收到的数据包是字节数组，'
            + '用指针偏移逐字段读取（IP 头 20 字节、TCP 头 20 字节、负载在偏移 40 处）。'
            + '视频编解码器通过指针操作帧缓冲区。'
            + '数据库引擎通过指针在 B+ 树节点间导航。'
            + '操作系统通过指针访问进程的页表。'
            + '编译器通过指针操作 AST 节点。'
            + 'C 标准库本身就是指针艺术的集大成者——strlen、strcpy、memcpy 都是最简短的指针循环。\n\n'
            + '## 扩展知识\n\n'
            + '**指针数组 vs 数组指针**：\n'
            + '- `int *arr[10]` — 10 个 int 指针组成的数组（指针数组）\n'
            + '- `int (*arr)[10]` — 指向 `int[10]` 数组的指针（数组指针）\n\n'
            + '记忆方法：`[]` 优先级高于 `*`，所以 `int *arr[10]` 是数组，元素是指针；'
            + '括号改变优先级，`int (*arr)[10]` 是指针，指向数组。\n\n'
            + '**复合字面量（C99）**：`int *p = (int[]){1, 2, 3};` 直接创建匿名数组并取其地址。'
            + '用于"函数参数需要一个临时数组"的场景，避免单独声明。\n\n'
            + '**指针与优化的关系**：编译器假设两个 `int*` 不指向同一地址（strict aliasing），'
            + '据此做激进优化。如果你想用 `int*` 和 `float*` 同时访问同一内存（type punning），'
            + '可能得到错误结果。安全做法是用 `memcpy` 或 `union`。'
            + 'GCC 加 `-fno-strict-aliasing` 关闭此优化（Python、Redis 的编译选项都加了这个）。',
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
            '## 概念详解\n\n'
            + 'C 语言没有专门的字符串类型——字符串就是"以 `\\0` 结尾的字符数组"。'
            + '这个简单的设计决策影响了 C 语言的方方面面：'
            + '所有字符串函数（strlen、strcpy、printf 的 %s）都依赖 `\\0` 判断结束，'
            + '所有字符串字面量都自动添加 `\\0`，所有缓冲区溢出漏洞都源于忘记留 `\\0` 的位置。'
            + '理解 C 字符串就是理解字符数组 + `\\0` 终止符的内存模型。\n\n'
            + '为什么 C 用 `\\0` 结尾而不是像 Pascal 那样在头部存长度？'
            + '这是历史决策——C 的设计者为了简化编译器，选择让字符串"自终止"。'
            + '代价是 strlen 必须 O(n) 遍历（不能直接读长度），'
            + '且容易发生 `\\0` 丢失导致的越界读取。'
            + '现代语言（C++ std::string、Rust String、Go string）都改用"长度 + 数据"结构，'
            + '避免了这些缺陷。但 C 字符串仍是系统编程的通用语言——'
            + 'POSIX API、文件路径、环境变量、HTTP 头都是 C 字符串。\n\n'
            + '## 语法说明\n\n'
            + '### 字符串声明与初始化\n\n'
            + `\`\`\`c\nchar s1[] = "Hello";          // 数组形式：6 字节（H,e,l,l,o,\\0），可修改\nchar *s2 = "Hello";           // 指针形式：指向只读字面量，不可修改！\nchar s3[10] = "Hi";           // 10 字芽数组，前 2 字节为 H,i，其余自动置 0\nchar s4[6] = {'H','e','l','l','o','\\0'};  // 等价于 "Hello"\n\`\`\`\n\n`
            + '### 字符串字面量的本质\n\n'
            + '`"Hello"` 在内存中是只读的字符数组（位于 `.rodata` 段），自动加 `\\0`。'
            + '两个相同字面量可能共享同一份存储（编译器优化）。'
            + '尝试修改字面量是未定义行为：`char *s = "Hi"; s[0] = \'h\';` 可能崩溃。\n\n'
            + '### 字符串函数（<string.h>）\n\n'
            + '| 函数 | 原型 | 说明 |\n'
            + '|------|------|------|\n'
            + '| `strlen` | `size_t strlen(const char *s)` | 字符串长度（不含 \\0）|\n'
            + '| `strcpy` | `char* strcpy(char *dest, const char *src)` | 复制（不安全）|\n'
            + '| `strncpy` | `char* strncpy(char *dest, const char *src, size_t n)` | 限制长度复制 |\n'
            + '| `strcat` | `char* strcat(char *dest, const char *src)` | 追加（不安全）|\n'
            + '| `strncat` | `char* strncat(char *dest, const char *src, size_t n)` | 限制追加 |\n'
            + '| `strcmp` | `int strcmp(const char *a, const char *b)` | 比较，返回 <0/0/>0 |\n'
            + '| `strncmp` | `int strncmp(const char *a, const char *b, size_t n)` | 限制比较长度 |\n'
            + '| `strchr` | `char* strchr(const char *s, int c)` | 查找字符首次出现 |\n'
            + '| `strrchr` | `char* strrchr(const char *s, int c)` | 查找字符最后出现 |\n'
            + '| `strstr` | `char* strstr(const char *s, const char *sub)` | 查找子串 |\n'
            + '| `strtok` | `char* strtok(char *s, const char *delim)` | 分割字符串（有状态）|\n'
            + '| `strdup` | `char* strdup(const char *s)` | 复制并 malloc（POSIX）|\n'
            + '| `sprintf` | `int sprintf(char *buf, const char *fmt, ...)` | 格式化到字符串（不安全）|\n'
            + '| `snprintf` | `int snprintf(char *buf, size_t n, const char *fmt, ...)` | 安全格式化 |\n\n'
            + '### 字符处理函数（<ctype.h>）\n\n'
            + '| 函数 | 判断/转换 |\n'
            + '|------|----------|\n'
            + '| `isalpha(c)` / `isdigit(c)` / `isalnum(c)` | 是否字母/数字/字母数字 |\n'
            + '| `isupper(c)` / `islower(c)` | 大写/小写 |\n'
            + '| `isspace(c)` | 空白字符（空格、制表、换行）|\n'
            + '| `toupper(c)` / `tolower(c)` | 转大写/小写 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：安全字符串复制**\n\n'
            + '```c\n#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char src[] = "Hello, World!";\n    char dest[10];\n\n    // 危险：strcpy 不检查长度\n    // strcpy(dest, src);  // 缓冲区溢出！src 长 14，dest 只有 10\n\n    // 安全：strncpy 限制长度\n    strncpy(dest, src, sizeof(dest) - 1);\n    dest[sizeof(dest) - 1] = \'\\0\';  // strncpy 不保证 \\0 结尾！\n    printf("复制结果: %s\\n", dest);  // Hello, Wor\n\n    // 推荐：snprintf 始终 \\0 结尾\n    char buf[10];\n    snprintf(buf, sizeof(buf), "%s", src);\n    printf("snprintf 结果: %s\\n", buf);  // Hello, Wor\n    return 0;\n}\n```\n\n'
            + '`strncpy` 的坑：如果 src 长度 >= n，不会写 `\\0`！必须手动补。'
            + '更推荐用 `snprintf(buf, sizeof(buf), "%s", src)`——简洁且安全。'
            + 'C++ 推荐用 `strlcpy`（非标准但广泛可用）。\n\n'
            + '**示例 2：strtok 分割字符串**\n\n'
            + '```c\n#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char str[] = "Hello,World,,C";\n    char *token = strtok(str, ",");  // 第一次调用\n    while (token != NULL) {\n        printf("token: %s\\n", token);\n        token = strtok(NULL, ",");  // 后续调用传 NULL\n    }\n    // 输出：Hello / World / C（连续分隔符被跳过）\n    return 0;\n}\n```\n\n'
            + 'strtok 是有状态函数——内部用 static 变量记录位置，'
            + '导致它**不是线程安全**的！多线程下用 `strtok_r`（POSIX）。'
            + 'strtok 会修改原字符串（把分隔符替换为 `\\0`）。'
            + 'C++ 推荐用 stringstream 或 split 算法。\n\n'
            + '**示例 3：手写 strlen 与 strcmp**\n\n'
            + '```c\n#include <stdio.h>\n\n// 模拟 strlen：数到 \\0 为止\nsize_t my_strlen(const char *s) {\n    const char *p = s;\n    while (*p) p++;\n    return p - s;\n}\n\n// 模拟 strcmp：逐字符比较\nint my_strcmp(const char *a, const char *b) {\n    while (*a && *a == *b) { a++; b++; }\n    return (unsigned char)*a - (unsigned char)*b;\n}\n\nint main(void) {\n    printf("len = %zu\\n", my_strlen("Hello"));\n    printf("cmp = %d\\n", my_strcmp("apple", "banana"));  // 负数\n    printf("cmp = %d\\n", my_strcmp("apple", "apple"));   // 0\n    return 0;\n}\n```\n\n'
            + '这两个实现展示了 C 字符串操作的本质——指针遍历直到 `\\0`。'
            + '标准库的 strlen 通常用 SIMD（SSE/AVX）一次检查 16/32 字节，比手写快很多。\n\n'
            + '## 注意事项\n\n'
            + '1. **缓冲区溢出**：`strcpy`、`strcat`、`sprintf`、`scanf "%s"` 都不检查长度。'
            + 'Morris 蠕虫、心脏出血等著名漏洞都源于此。'
            + '永远用 `strncpy`/`snprintf`/`fgets` 替代，并手动保证 `\\0` 结尾。\n'
            + '2. **忘记 \\0 的空间**：`char buf[5] = "Hello"` 编译错误——"Hello" 占 6 字节（含 \\0）。'
            + '数组大小要 +1 容纳 \\0。\n'
            + '3. **修改字符串字面量**：`char *s = "Hi"; s[0] = \'h\';` 是 UB，'
            + '通常段错误。需要修改用数组形式：`char s[] = "Hi";`。\n'
            + '4. **strcmp 返回值**：返回 <0、0、>0，不是 -1、0、1。'
            + '不要写 `if (strcmp(a, b) == -1)`，写 `if (strcmp(a, b) < 0)`。\n'
            + '5. **中文字符串**：UTF-8 中文占 3 字节，`strlen("中")` 返回 3 不是 1。'
            + '处理中文需要专门的 UTF-8 库或宽字符（wchar_t，但跨平台性差）。\n'
            + '6. **strtok 不是线程安全**：多线程用 `strtok_r`，或自己写分割函数。\n\n'
            + '## 实际应用\n\n'
            + 'HTTP 服务器解析请求行（`GET /path HTTP/1.1\\r\\n`）需要字符串分割。'
            + 'JSON 解析器逐字符扫描 token。'
            + 'Shell 解析命令行参数（带引号、转义）。'
            + '日志库格式化时间戳和消息。'
            + '数据库的 LIKE 模式匹配。'
            + '理解 C 字符串的内存模型是构建高效文本处理工具的基础。'
            + '现代项目中如果不需要与 C API 交互，推荐用更高层的字符串库——'
            + '如 sds（Redis 使用）、GString（GLib）、C++ std::string。\n\n'
            + '## 扩展知识\n\n'
            + '**变长字符串（sds）**：Redis 作者 Antirez 设计的简单动态字符串，'
            + '结构是 `struct { int len; int free; char buf[]; };`，'
            + '通过预分配减少 realloc 次数，O(1) 获取长度，二进制安全（不依赖 \\0）。'
            + '是 C 字符串的优秀替代品。\n\n'
            + '**二进制安全字符串**：C 字符串无法包含 `\\0`（如图片数据），'
            + '所以"二进制数据"必须用"指针 + 长度"表示，'
            + '如 `void *data; size_t len;`。网络协议、文件 I/O 都用这种模式。'
            + '`memcpy`、`memmove` 不依赖 `\\0`，可以处理任意二进制数据。\n\n'
            + '**宽字符与多字节字符**：\n'
            + '- `wchar_t`：宽字符（Linux 上 4 字节存 UTF-32，Windows 上 2 字节存 UTF-16）\n'
            + '- `setlocale(LC_ALL, "")` + `wprintf(L"中文")` 输出宽字符\n'
            + '- 跨平台性差，Windows 与 Linux 行为不一致\n'
            + '- 现代推荐：内部统一用 UTF-8（char*），仅在系统 API 边界转换',
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
            '## 概念详解\n\n'
            + '结构体（struct）是 C 语言中**组合不同类型数据**的核心机制，'
            + '它允许把多个相关变量打包成一个整体。'
            + '没有结构体，C 语言只能用零散变量描述一个对象（比如表示一个学生要用 name、age、score 三个独立变量），'
            + '代码既难读也难维护。结构体解决了"用一个名字管理一组相关数据"的需求，'
            + '是 C 语言实现面向对象思想的基础，也是操作系统、数据库、网络协议等系统软件的基石。\n\n'
            + '**为什么需要结构体？**\n'
            + '- 数据聚合：把逻辑上相关的字段放在一起，便于传递、复制、销毁\n'
            + '- 内存布局可控：编译器按字段顺序排列，方便映射硬件寄存器、文件头、网络包\n'
            + '- 类型抽象：一个 `Student` 类型比 5 个零散的 int/char 数组更直观\n'
            + '- 为 C++ 的 class 打基础：C++ 的 class 本质上就是带权限控制的 struct\n\n'
            + '**何时使用结构体？** 当一组数据"同生共死"——同时出现、同时传递、同时释放——'
            + '就应该用结构体把它们绑定起来。反之，如果两个变量毫不相关，强行塞进同一个结构体反而让代码变差。\n\n'
            + '## 语法说明\n\n'
            + '**结构体定义与变量声明：**\n\n'
            + '```c\n'
            + 'struct 标签名 {\n'
            + '    类型 成员1;\n'
            + '    类型 成员2;\n'
            + '    // ...\n'
            + '};  // 注意末尾的分号不能省\n'
            + '\n'
            + 'struct Point p = {3, 4};  // 用 struct 标签名 声明变量\n'
            + '```\n\n'
            + '**成员访问：** 变量用点号 `.`，指针用箭头 `->`。\n\n'
            + '**初始化方式：**\n\n'
            + '| 方式 | 示例 | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| 顺序初始化 | `struct Point p = {3, 4};` | 按成员顺序赋值 |\n'
            + '| 指定初始化（C99） | `struct Point p = {.x = 3, .y = 4};` | 显式指定成员，更安全 |\n'
            + '| 部分初始化 | `struct Point p = {3};` | 其余成员置 0 |\n'
            + '| 零初始化 | `struct Point p = {0};` | 全部成员置 0 |\n'
            + '| 逐成员赋值 | `p.x = 3; p.y = 4;` | 适合动态赋值 |\n\n'
            + '**typedef 起别名：**\n\n'
            + '```c\n'
            + 'typedef struct Point {\n'
            + '    int x;\n'
            + '    int y;\n'
            + '} Point;  // 之后可直接用 Point p，无需 struct 关键字\n'
            + '```\n\n'
            + '**内存对齐与 sizeof：**\n\n'
            + '| 结构体 | 64 位系统 sizeof | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| `struct { char c; }` | 1 | 单字节无对齐要求 |\n'
            + '| `struct { char c; int i; }` | 8 | c 后填充 3 字节对齐 int |\n'
            + '| `struct { int i; char c; }` | 8 | 末尾填充 3 字节对齐整体 |\n'
            + '| `struct { char a; char b; int i; }` | 8 | a、b 合计 2 字节后填充 2 字节 |\n\n'
            + '可用 `#pragma pack(1)` 或 `__attribute__((packed))` 关闭对齐，常用于网络协议。\n\n'
            + '**常用操作：**\n\n'
            + '| 操作 | 语法 | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| 取成员 | `p.x` / `p->x` | 变量用点，指针用箭头 |\n'
            + '| 取地址 | `&p` | 获取结构体指针 |\n'
            + '| 赋值 | `p2 = p1` | 整体复制（深拷贝只到第一层）|\n'
            + '| 比较大小 | 不能直接 `==` | 必须用 memcmp 或逐成员比较 |\n'
            + '| 作为函数参数 | 传值会复制，传指针避免复制 | 大结构体务必传指针 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：结构体定义与三种初始化方式**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n\n'
            + 'struct Point {\n'
            + '    int x;\n'
            + '    int y;\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    // 顺序初始化\n'
            + '    struct Point p1 = {3, 4};\n'
            + '    // C99 指定初始化（推荐）\n'
            + '    struct Point p2 = {.y = 10, .x = 5};\n'
            + '    // 部分初始化，未指定成员自动为 0\n'
            + '    struct Point p3 = {7};\n'
            + '    // 零初始化\n'
            + '    struct Point p4 = {0};\n'
            + '    printf("p1(%d,%d) p2(%d,%d) p3(%d,%d) p4(%d,%d)\\n",\n'
            + '           p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：typedef + 结构体指针传参（高效模式）**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n'
            + '#include <math.h>\n\n'
            + 'typedef struct {\n'
            + '    double x;\n'
            + '    double y;\n'
            + '} Point;\n\n'
            + '// 传指针避免复制整个结构体\n'
            + 'double distance(const Point *a, const Point *b) {\n'
            + '    double dx = a->x - b->x;\n'
            + '    double dy = a->y - b->y;\n'
            + '    return sqrt(dx * dx + dy * dy);\n'
            + '}\n\n'
            + 'void move(Point *p, double dx, double dy) {\n'
            + '    p->x += dx;\n'
            + '    p->y += dy;\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    Point a = {0, 0};\n'
            + '    Point b = {3, 4};\n'
            + '    printf("距离: %.2f\\n", distance(&a, &b));  // 5.00\n'
            + '    move(&b, -1, -1);\n'
            + '    printf("移动后距离: %.2f\\n", distance(&a, &b));  // 3.61\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：内存对齐演示与 packed**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n\n'
            + 'struct A {\n'
            + '    char c;\n'
            + '    int i;\n'
            + '};\n\n'
            + 'struct B {\n'
            + '    int i;\n'
            + '    char c;\n'
            + '};\n\n'
            + '#pragma pack(1)\n'
            + 'struct C {\n'
            + '    char c;\n'
            + '    int i;\n'
            + '};\n'
            + '#pragma pack()\n\n'
            + 'int main() {\n'
            + '    printf("struct A: %zu 字节\\n", sizeof(struct A));  // 8\n'
            + '    printf("struct B: %zu 字节\\n", sizeof(struct B));  // 8\n'
            + '    printf("struct C (packed): %zu 字节\\n", sizeof(struct C));  // 5\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **结构体末尾分号不能省**：`struct {...};` 末尾分号漏写是初学者最常见的编译错误。\n'
            + '2. **结构体不能直接用 `==` 比较**：必须逐成员比较或用 `memcmp`，'
            + '但 `memcmp` 在有填充字节时不可靠（填充字节内容未定义）。\n'
            + '3. **赋值是浅拷贝**：`p2 = p1` 只复制第一层数据，若成员是指针，两个结构体会指向同一块内存，'
            + '修改一个会影响另一个（深拷贝需要自己实现）。\n'
            + '4. **大结构体务必传指针**：传值会复制整个结构体，性能差；传指针（const 修饰只读参数）是惯用法。\n'
            + '5. **内存对齐影响网络协议**：跨平台传输结构体时，不同编译器对齐方式可能不同，'
            + '应使用 `#pragma pack(1)` 或序列化为字节流。\n'
            + '6. **柔性数组（C99）**：`struct Buffer { int len; char data[]; };` 末尾的不定长数组，'
            + '常用于变长缓冲区，需手动 malloc。\n'
            + '7. **自引用结构体**：链表节点 `struct Node { int val; struct Node *next; };` '
            + '指针成员可以指向自身类型，但直接包含自身（非指针）会无限递归编译失败。\n\n'
            + '## 实际应用\n\n'
            + '- **操作系统**：Linux 内核的 `task_struct`（进程控制块）、`file`（文件对象）、'
            + '`socket`（网络套接字）都是结构体，组合了几十个字段描述一个内核对象。\n'
            + '- **网络协议**：TCP/IP 头部用结构体直接映射字节布局，'
            + '如 `struct tcphdr { uint16_t source; uint16_t dest; ... };` 配合 packed 实现 0 拷贝解析。\n'
            + '- **数据库**：SQLite 的 `sqlite3_stmt`、MySQL 的行记录格式都基于结构体。\n'
            + '- **图形渲染**：OpenGL 的顶点 `struct Vertex { float x, y, z; float r, g, b; };` '
            + '直接对应 GPU 顶点缓冲区布局。\n'
            + '- **游戏开发**：实体组件系统（ECS）的每个组件都是一个结构体，'
            + '通过结构体数组实现缓存友好的数据布局。\n\n'
            + '## 扩展知识\n\n'
            + '- **匿名结构体**（C11）：`struct { int x; int y; } p;` 没有标签名，'
            + '只能用一次，常作为另一个结构体的成员。\n'
            + '- **位域**：`struct { unsigned int a : 3; unsigned int b : 5; };` '
            + '按位分配成员宽度，用于硬件寄存器映射，但跨平台行为不一致，慎用。\n'
            + '- **柔性数组成员**：`struct Line { int len; char contents[]; };` '
            + '配合 `malloc(sizeof(struct Line) + 100)` 实现变长字符串，是 Redis SDS 的底层技术之一。\n'
            + '- **结构体与 C++ class**：C++ 中 struct 默认成员 public，class 默认 private，'
            + '其余完全相同。C++ 的 struct 还能继承、有虚函数、有构造析构。\n'
            + '- **__builtin_offsetof**：`offsetof(struct A, i)` 返回成员偏移量，'
            + '用于实现链表侵入式节点（Linux kernel 的 `container_of` 宏）。\n'
            + '- **缓存友好性**：把高频访问的字段放结构体前面、低频字段放后面，'
            + '或拆分冷热数据为两个结构体，能显著提升缓存命中率（数据局部性原理）。',
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
            '## 概念详解\n\n'
            + 'C 程序的内存布局分为四个区域：\n\n'
            + '| 区域 | 存放内容 | 管理方式 | 生命周期 |\n'
            + '| --- | --- | --- | --- |\n'
            + '| **栈 stack** | 局部变量、函数参数、返回地址 | 编译器自动分配/释放 | 函数返回即销毁 |\n'
            + '| **堆 heap** | malloc/calloc/realloc 分配的内存 | 程序员手动管理 | 直到 free 才释放 |\n'
            + '| **全局/静态区** | 全局变量、static 变量 | 程序启动分配，结束释放 | 整个程序运行期 |\n'
            + '| **代码区 text** | 可执行指令 | 只读 | 程序运行期 |\n\n'
            + '栈空间很小（Linux 默认 8MB），且大小固定，无法在运行时按需扩容。'
            + '当需要"数量在运行时才确定"的数据（如读入 N 个学生、加载一个文件）时，'
            + '就必须用**动态内存**从堆上申请。堆空间通常很大（可达几 GB），但管理责任完全在程序员。\n\n'
            + '**为什么需要动态内存？**\n'
            + '- 大数据：栈装不下的大数组（如 100 万个元素的查找表）必须放堆\n'
            + '- 变长数据：编译时不知道大小的数据（如读取用户输入的字符串）\n'
            + '- 生命周期跨函数：函数返回后仍需存活的对象（如链表节点、缓存）\n'
            + '- 共享数据：多个指针指向同一块堆内存，跨函数传递\n\n'
            + '## 语法说明\n\n'
            + '**四个核心函数（声明在 `<stdlib.h>`）：**\n\n'
            + '| 函数 | 原型 | 作用 | 返回值 |\n'
            + '| --- | --- | --- | --- |\n'
            + '| `malloc` | `void *malloc(size_t size);` | 分配 size 字节，内容未初始化 | 成功返回指针，失败返回 NULL |\n'
            + '| `calloc` | `void *calloc(size_t n, size_t size);` | 分配 n×size 字节并清零 | 成功返回指针，失败返回 NULL |\n'
            + '| `realloc` | `void *realloc(void *ptr, size_t new_size);` | 调整已分配内存大小 | 成功返回新指针，失败返回 NULL（原指针仍有效）|\n'
            + '| `free` | `void free(void *ptr);` | 释放之前分配的内存 | 无返回值 |\n\n'
            + '**典型用法：**\n\n'
            + '```c\n'
            + '// 1. 分配 N 个 int\n'
            + 'int *arr = malloc(N * sizeof(int));\n'
            + 'if (!arr) { /* 处理失败 */ }\n'
            + '\n'
            + '// 2. 分配并清零（适合需要初始化为 0 的场景）\n'
            + 'int *zeros = calloc(N, sizeof(int));\n'
            + '\n'
            + '// 3. 扩容（注意：原数据前 min(old, new) 字节会被保留）\n'
            + 'int *new_arr = realloc(arr, new_N * sizeof(int));\n'
            + 'if (new_arr) { arr = new_arr; }  // 失败时不要覆盖原指针！\n'
            + '\n'
            + '// 4. 释放\n'
            + 'free(arr);\n'
            + 'arr = NULL;  // 防止 use-after-free\n'
            + '```\n\n'
            + '**内存分配函数对比：**\n\n'
            + '| 特性 | malloc | calloc | realloc |\n'
            + '| --- | --- | --- | --- |\n'
            + '| 初始化 | 未初始化（随机值）| 清零 | 保留原数据 |\n'
            + '| 参数 | 总字节数 | 元素数 × 元素大小 | 旧指针 + 新大小 |\n'
            + '| 失败时 | 返回 NULL | 返回 NULL | 返回 NULL（旧指针有效）|\n'
            + '| 用途 | 通用分配 | 需要清零的数组 | 扩容/缩容 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：malloc 动态数组（带错误检查）**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n'
            + '#include <stdlib.h>\n\n'
            + 'int main() {\n'
            + '    int n;\n'
            + '    printf("输入数组大小: ");\n'
            + '    scanf("%d", &n);\n'
            + '    \n'
            + '    // 分配 n 个 int 的空间\n'
            + '    int *arr = malloc(n * sizeof(int));\n'
            + '    if (arr == NULL) {\n'
            + '        printf("内存分配失败\\n");\n'
            + '        return 1;\n'
            + '    }\n'
            + '    \n'
            + '    for (int i = 0; i < n; i++) {\n'
            + '        arr[i] = (i + 1) * 10;\n'
            + '    }\n'
            + '    for (int i = 0; i < n; i++) {\n'
            + '        printf("%d ", arr[i]);\n'
            + '    }\n'
            + '    printf("\\n");\n'
            + '    \n'
            + '    free(arr);       // 释放内存\n'
            + '    arr = NULL;      // 好习惯：置 NULL 防悬空指针\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：realloc 安全扩容模式**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n'
            + '#include <stdlib.h>\n\n'
            + 'int main() {\n'
            + '    int *arr = malloc(3 * sizeof(int));\n'
            + '    if (!arr) return 1;\n'
            + '    arr[0] = 1; arr[1] = 2; arr[2] = 3;\n'
            + '    \n'
            + '    // 安全的 realloc：用临时变量接收，避免失败时丢失原指针\n'
            + '    int *tmp = realloc(arr, 5 * sizeof(int));\n'
            + '    if (tmp == NULL) {\n'
            + '        free(arr);   // 扩容失败，释放原内存\n'
            + '        return 1;\n'
            + '    }\n'
            + '    arr = tmp;       // 成功才更新原指针\n'
            + '    arr[3] = 4; arr[4] = 5;\n'
            + '    \n'
            + '    for (int i = 0; i < 5; i++) {\n'
            + '        printf("%d ", arr[i]);\n'
            + '    }\n'
            + '    printf("\\n");\n'
            + '    free(arr);\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：动态结构体数组（学生管理）**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n'
            + '#include <stdlib.h>\n'
            + '#include <string.h>\n\n'
            + 'typedef struct {\n'
            + '    char name[20];\n'
            + '    int score;\n'
            + '} Student;\n\n'
            + 'int main() {\n'
            + '    int n = 3;\n'
            + '    // calloc 分配并清零\n'
            + '    Student *students = calloc(n, sizeof(Student));\n'
            + '    if (!students) return 1;\n'
            + '    \n'
            + '    strcpy(students[0].name, "小明");\n'
            + '    students[0].score = 95;\n'
            + '    strcpy(students[1].name, "小红");\n'
            + '    students[1].score = 88;\n'
            + '    strcpy(students[2].name, "小刚");\n'
            + '    students[2].score = 76;\n'
            + '    \n'
            + '    for (int i = 0; i < n; i++) {\n'
            + '        printf("%s: %d\\n", students[i].name, students[i].score);\n'
            + '    }\n'
            + '    \n'
            + '    free(students);\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **必须检查 malloc 返回值**：内存不足时返回 NULL，直接解引用会段错误。'
            + '嵌入式系统和大型分配尤其容易失败。\n'
            + '2. **谁分配谁释放**：每块 malloc 必须有且仅有一次 free。'
            + '忘记 free → 内存泄漏；多次 free → double free 崩溃。\n'
            + '3. **free 后立即置 NULL**：`free(p); p = NULL;` 是防御性编程的好习惯，'
            + '之后即使误用 `p` 也会在解引用时崩溃（容易定位），而不是悄悄破坏数据。\n'
            + '4. **use-after-free 是严重安全漏洞**：free 后的内存可能被分配给其他代码，'
            + '继续使用旧指针会导致数据错乱或被攻击者利用（CVE 中此类漏洞极多）。\n'
            + '5. **realloc 失败时不要覆盖原指针**：`p = realloc(p, newsize);` 失败时 p 被赋成 NULL，'
            + '原内存泄漏且无法访问。正确做法是用临时变量接收，成功后再赋值。\n'
            + '6. **不要 free 栈上的内存**：`int x; free(&x);` 是未定义行为，'
            + 'free 只能用于 malloc/calloc/realloc 返回的指针。\n'
            + '7. **sizeof 用类型而非硬编码**：`malloc(n * sizeof(int))` 比 `malloc(n * 4)` 更可移植，'
            + '不同平台 int 大小可能不同。\n'
            + '8. **内存碎片**：频繁 malloc/free 小块内存会导致堆碎片化，'
            + '大块分配失败但总空闲内存足够。长期运行的服务器需考虑内存池。\n\n'
            + '## 实际应用\n\n'
            + '- **动态数据结构**：链表、树、图的节点都用 malloc 分配，'
            + '数量在运行时变化，无法用静态数组。\n'
            + '- **读取大文件**：`fseek` 获取文件大小后 `malloc` 一次性读入，'
            + '比逐行读取快得多（如图片解码、视频处理）。\n'
            + '- **变长缓冲区**：Redis 的 SDS、Python 的 list 实现，'
            + '都用 realloc 动态扩容，按 2 倍增长摊销 O(1)。\n'
            + '- **数据库查询结果**：MySQL 客户端收到查询结果后用 malloc 分配行缓冲区，'
            + '用户调用 mysql_free_result 释放。\n'
            + '- **服务器连接池**：每个客户端连接分配一个结构体保存状态，'
            + '断开时 free，避免栈空间不足。\n\n'
            + '## 扩展知识\n\n'
            + '- **alloca**：在栈上分配内存（不是堆），函数返回自动释放，'
            + '速度快但大小受限，且不能跨函数使用。Linux 内核中常见。\n'
            + '- **strdup**：`strdup(s)` 等价于 `malloc(strlen(s)+1); strcpy(...)`，'
            + '返回的字符串需要 free。POSIX 函数，Windows 需 `_strdup`。\n'
            + '- **aligned_alloc**（C11）：`aligned_alloc(alignment, size)` 分配对齐内存，'
            + '用于 SSE/AVX 指令要求数据 16/32 字节对齐的场景。\n'
            + '- **内存泄漏检测**：Linux 下用 Valgrind（`valgrind --leak-check=full ./a.out`）'
            + '或 AddressSanitizer（`gcc -fsanitize=address`）能精准定位泄漏和越界。\n'
            + '- **C++ 的 new/delete**：`new` 会调用构造函数，`delete` 调用析构函数，'
            + '比 malloc/free 更适合对象。智能指针（unique_ptr、shared_ptr）能自动管理生命周期，'
            + '几乎消除内存泄漏。\n'
            + '- **垃圾回收**： Boehm GC 是 C/C++ 的保守式垃圾收集器，'
            + '但性能开销大，主流 C 代码仍用手动管理。Rust 的所有权机制是另一种解决方案。',
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
            '## 概念详解\n\n'
            + '文件 I/O（Input/Output）让程序能够**持久化数据**——程序结束后数据不丢失。'
            + '没有文件 I/O，程序只能在内存中处理数据，重启后一切归零。'
            + 'C 标准库 `<stdio.h>` 提供了一套跨平台的文件操作接口，'
            + '底层在 Linux 上是系统调用（open/read/write/close），在 Windows 上是 Win32 API。\n\n'
            + '**为什么需要文件 I/O？**\n'
            + '- **持久化**：保存用户数据、配置、日志，跨进程跨次运行\n'
            + '- **数据交换**：读取用户上传的文件、生成报告文件\n'
            + '- **设备交互**：Linux "一切皆文件"——串口、网络、进程信息都是文件\n'
            + '- **大数据处理**：内存装不下的数据，分块从文件读取\n\n'
            + '**文件 I/O 的两种模型：**\n\n'
            + '| 模型 | 接口 | 特点 |\n'
            + '| --- | --- | --- |\n'
            + '| **高级 I/O（标准库）** | fopen/fread/fwrite/fclose | 带缓冲，跨平台，易用 |\n'
            + '| **低级 I/O（系统调用）** | open/read/write/close | 无缓冲，POSIX 专用，性能可控 |\n\n'
            + '本课聚焦高级 I/O。低级 I/O 在 Linux 系统编程课程中讲解。\n\n'
            + '## 语法说明\n\n'
            + '**文件打开模式（fopen 第二参数）：**\n\n'
            + '| 模式 | 含义 | 文件不存在时 | 文件存在时 |\n'
            + '| --- | --- | --- | --- |\n'
            + '| `"r"` | 只读 | 失败返回 NULL | 从开头读 |\n'
            + '| `"w"` | 只写（覆盖）| 创建新文件 | 清空内容 |\n'
            + '| `"a"` | 追加写 | 创建新文件 | 在末尾追加 |\n'
            + '| `"r+"` | 读写 | 失败返回 NULL | 从开头读写 |\n'
            + '| `"w+"` | 读写（覆盖）| 创建新文件 | 清空内容 |\n'
            + '| `"a+"` | 读写（追加）| 创建新文件 | 末尾写，可从头读 |\n'
            + '| `"rb"` `"wb"` `"ab"` | 二进制模式 | 同上 | 不做换行符转换 |\n\n'
            + '**核心函数（`<stdio.h>`）：**\n\n'
            + '| 函数 | 原型 | 用途 |\n'
            + '| --- | --- | --- |\n'
            + '| `fopen` | `FILE *fopen(const char *path, const char *mode);` | 打开文件 |\n'
            + '| `fclose` | `int fclose(FILE *fp);` | 关闭文件并刷新缓冲区 |\n'
            + '| `fprintf` | `int fprintf(FILE *fp, const char *fmt, ...);` | 格式化写入 |\n'
            + '| `fscanf` | `int fscanf(FILE *fp, const char *fmt, ...);` | 格式化读取 |\n'
            + '| `fputs` | `int fputs(const char *s, FILE *fp);` | 写入字符串 |\n'
            + '| `fgets` | `char *fgets(char *buf, int n, FILE *fp);` | 读取一行（保留 \\n）|\n'
            + '| `fgetc` | `int fgetc(FILE *fp);` | 读取一个字符 |\n'
            + '| `fputc` | `int fputc(int c, FILE *fp);` | 写入一个字符 |\n'
            + '| `fread` | `size_t fread(void *ptr, size_t size, size_t n, FILE *fp);` | 二进制读 |\n'
            + '| `fwrite` | `size_t fwrite(const void *ptr, size_t size, size_t n, FILE *fp);` | 二进制写 |\n'
            + '| `fseek` | `int fseek(FILE *fp, long offset, int origin);` | 移动文件指针 |\n'
            + '| `ftell` | `long ftell(FILE *fp);` | 获取当前文件位置 |\n'
            + '| `feof` | `int feof(FILE *fp);` | 是否到达文件末尾 |\n'
            + '| `perror` | `void perror(const char *s);` | 打印错误信息 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：写入与读取文本文件**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n\n'
            + 'int main() {\n'
            + '    // 写入\n'
            + '    FILE *fp = fopen("/tmp/test.txt", "w");\n'
            + '    if (fp == NULL) {\n'
            + '        perror("fopen 失败");\n'
            + '        return 1;\n'
            + '    }\n'
            + '    fprintf(fp, "第一行\\n");\n'
            + '    fprintf(fp, "数字: %d\\n", 42);\n'
            + '    fputs("第三行\\n", fp);\n'
            + '    fclose(fp);  // 必须关闭，否则缓冲区数据可能丢失\n'
            + '    \n'
            + '    // 读取\n'
            + '    fp = fopen("/tmp/test.txt", "r");\n'
            + '    if (!fp) { perror("fopen 失败"); return 1; }\n'
            + '    char buf[100];\n'
            + '    while (fgets(buf, sizeof(buf), fp) != NULL) {\n'
            + '        printf("读取: %s", buf);  // buf 已包含 \\n\n'
            + '    }\n'
            + '    fclose(fp);\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：二进制读写结构体数组**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n'
            + '#include <string.h>\n\n'
            + 'typedef struct {\n'
            + '    char name[20];\n'
            + '    int score;\n'
            + '} Student;\n\n'
            + 'int main() {\n'
            + '    Student out[3] = {\n'
            + '        {"小明", 95},\n'
            + '        {"小红", 88},\n'
            + '        {"小刚", 76}\n'
            + '    };\n'
            + '    \n'
            + '    // 二进制写入\n'
            + '    FILE *fp = fopen("/tmp/students.dat", "wb");\n'
            + '    if (!fp) { perror("fopen"); return 1; }\n'
            + '    fwrite(out, sizeof(Student), 3, fp);\n'
            + '    fclose(fp);\n'
            + '    \n'
            + '    // 二进制读取\n'
            + '    Student in[3];\n'
            + '    fp = fopen("/tmp/students.dat", "rb");\n'
            + '    if (!fp) { perror("fopen"); return 1; }\n'
            + '    fread(in, sizeof(Student), 3, fp);\n'
            + '    fclose(fp);\n'
            + '    \n'
            + '    for (int i = 0; i < 3; i++) {\n'
            + '        printf("%s: %d\\n", in[i].name, in[i].score);\n'
            + '    }\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：用 fseek/ftell 获取文件大小**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n\n'
            + 'int main() {\n'
            + '    FILE *fp = fopen("/tmp/test.txt", "rb");\n'
            + '    if (!fp) { perror("fopen"); return 1; }\n'
            + '    \n'
            + '    fseek(fp, 0, SEEK_END);      // 移动到末尾\n'
            + '    long size = ftell(fp);        // 获取当前位置（即文件大小）\n'
            + '    fseek(fp, 0, SEEK_SET);       // 移回开头\n'
            + '    \n'
            + '    printf("文件大小: %ld 字节\\n", size);\n'
            + '    \n'
            + '    // 读取整个文件\n'
            + '    char buf[1024];\n'
            + '    size_t n = fread(buf, 1, size < 1024 ? size : 1024, fp);\n'
            + '    buf[n] = \'\\0\';\n'
            + '    printf("内容: %s\\n", buf);\n'
            + '    \n'
            + '    fclose(fp);\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **必须检查 fopen 返回值**：文件可能不存在、无权限、磁盘满，'
            + '不检查直接用 NULL 指针会段错误。用 `perror` 打印系统错误信息便于排错。\n'
            + '2. **必须调用 fclose**：fopen 后数据先写入内存缓冲区，fclose 才刷新到磁盘。'
            + '程序崩溃或忘关文件会导致最近写入的数据丢失。可用 `fflush(fp)` 强制刷新。\n'
            + '3. **二进制 vs 文本模式**：Windows 上文本模式会做 `\\n` ↔ `\\r\\n` 转换，'
            + '破坏二进制数据。读写二进制文件（图片、视频、结构体）必须用 `"rb"`/`"wb"`。\n'
            + '4. **fgets 保留换行符**：`fgets` 读到的字符串末尾有 `\\n`（除非一行超过缓冲区大小），'
            + 'printf 时不需要再加 `\\n`。\n'
            + '5. **feof 用法陷阱**：`while (!feof(fp))` 是常见错误——feof 在读完最后一字节后才置位，'
            + '会导致多读一次。正确做法是检查 fread/fscanf 的返回值。\n'
            + '6. **fscanf 安全性**：`fscanf(fp, "%s", buf)` 不检查长度，可能缓冲区溢出。'
            + '用 `fgets + sscanf` 或指定宽度 `%99s`（buf 大小 100）更安全。\n'
            + '7. **跨平台路径**：Windows 用反斜杠 `C:\\\\tmp\\\\test.txt`（C 字符串中需转义），'
            + 'Linux/Mac 用正斜杠 `/tmp/test.txt`。建议用宏定义分隔符或都用正斜杠（Windows 也支持）。\n'
            + '8. **大文件读写**：用 fread/fwrite 一次读大块（如 4KB）比逐字节 fgetc 快得多，'
            + '因为减少了系统调用次数和缓冲区刷新次数。\n\n'
            + '## 实际应用\n\n'
            + '- **配置文件**：程序启动时读取 INI/JSON/YAML 配置，'
            + '关闭时保存用户设置。如 nginx.conf、vimrc。\n'
            + '- **日志系统**：服务器把每个请求记录到日志文件，'
            + '便于事后分析和故障排查。如 Apache access.log。\n'
            + '- **数据库存储**：SQLite 直接读写 .db 文件，'
            + '每个表存在文件的不同页面中，用 fseek 定位。\n'
            + '- **数据导入导出**：CSV、Excel 文件的读写，'
            + '是数据分析、报表生成的常见任务。\n'
            + '- **设备交互**：Linux 下 `/dev/ttyUSB0` 是串口设备文件，'
            + '读写它就是与硬件通信；`/proc/cpuinfo` 是内核暴露的进程信息文件。\n'
            + '- **缓存与临时文件**：浏览器缓存、编译器中间产物（.o 文件）都通过文件 I/O 管理。\n\n'
            + '## 扩展知识\n\n'
            + '- **低级 I/O（POSIX）**：`open/read/write/close` 是 Linux 系统调用，'
            + '无缓冲，性能可控，可设置 O_NONBLOCK 异步 I/O。'
            + '标准库 fopen 底层调用的就是 open。\n'
            + '- **mmap 内存映射**：`mmap` 把文件映射到内存地址空间，'
            + '读写内存等于读写文件，零拷贝、性能极高。SQLite、Redis 都用 mmap。\n'
            + '- **异步 I/O**：Linux 的 io_uring、Windows 的 IOCP '
            + '允许"提交 I/O 请求后立即返回，完成后回调"，适合高并发服务器。\n'
            + '- **缓冲区三层**：用户缓冲区（stdio）→ 内核缓冲区（page cache）→ 磁盘。'
            + 'fflush 只刷新用户缓冲到内核，fsync 才强制刷新到磁盘（防宕机丢数据）。\n'
            + '- **文件锁**：`flock` 或 `fcntl` 实现文件锁，'
            + '防止多进程同时写同一文件导致数据错乱。\n'
            + '- **临时文件**：`tmpfile()` 创建匿名临时文件（关闭自动删除），'
            + '比 `fopen("/tmp/xxx", "w")` 更安全（避免命名冲突和路径注入）。',
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
            '## 概念详解\n\n'
            + '链表（Linked List）是最基础的动态数据结构，也是指针和动态内存的集大成应用。'
            + '它通过指针把零散的内存节点串成一条链，'
            + '解决了数组"必须连续、固定大小、插入删除昂贵"的问题。\n\n'
            + '**链表 vs 数组：**\n\n'
            + '| 特性 | 数组 | 链表 |\n'
            + '| --- | --- | --- |\n'
            + '| 内存布局 | 连续 | 不连续 |\n'
            + '| 大小 | 固定（静态）/ 需扩容（动态）| 动态增长 |\n'
            + '| 随机访问 | O(1)，arr[i] 直接定位 | O(n)，需遍历 |\n'
            + '| 头部插入 | O(n)，需移动元素 | O(1)，改指针即可 |\n'
            + '| 中间插入删除 | O(n) | O(1)（已知位置时）|\n'
            + '| 空间开销 | 仅数据 | 每节点多一个指针 |\n'
            + '| 缓存友好性 | 高（连续内存）| 低（指针跳跃）|\n\n'
            + '**链表的种类：**\n\n'
            + '| 类型 | 结构 | 特点 |\n'
            + '| --- | --- | --- |\n'
            + '| 单向链表 | data + next | 只能向前遍历，最简单 |\n'
            + '| 双向链表 | prev + data + next | 可双向遍历，多一个指针 |\n'
            + '| 循环链表 | 末尾 next 指回头 | 适合轮询、约瑟夫问题 |\n'
            + '| 双向循环链表 | 双向 + 循环 | Linux 内核常用 |\n\n'
            + '## 语法说明\n\n'
            + '**节点定义：**\n\n'
            + '```c\n'
            + 'typedef struct Node {\n'
            + '    int data;              // 数据域\n'
            + '    struct Node *next;     // 指针域，指向下一个节点\n'
            + '} Node;\n'
            + '```\n\n'
            + '**核心操作复杂度：**\n\n'
            + '| 操作 | 时间复杂度 | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| 访问第 i 个 | O(n) | 需从头遍历 |\n'
            + '| 查找值 | O(n) | 线性扫描 |\n'
            + '| 头部插入 | O(1) | 改 head 指针 |\n'
            + '| 尾部插入 | O(n) / O(1) | 维护尾指针可 O(1) |\n'
            + '| 已知位置插入删除 | O(1) | 改两个指针 |\n'
            + '| 释放整个链表 | O(n) | 逐节点 free |\n\n'
            + '**常见操作模板：**\n\n'
            + '```c\n'
            + '// 创建节点\n'
            + 'Node *create_node(int value) {\n'
            + '    Node *n = malloc(sizeof(Node));\n'
            + '    if (!n) return NULL;\n'
            + '    n->data = value;\n'
            + '    n->next = NULL;\n'
            + '    return n;\n'
            + '}\n'
            + '\n'
            + '// 头部插入\n'
            + 'Node *push_front(Node *head, int value) {\n'
            + '    Node *n = create_node(value);\n'
            + '    n->next = head;\n'
            + '    return n;  // 新节点成为 head\n'
            + '}\n'
            + '\n'
            + '// 遍历\n'
            + 'void print_list(Node *head) {\n'
            + '    for (Node *p = head; p; p = p->next) {\n'
            + '        printf("%d -> ", p->data);\n'
            + '    }\n'
            + '    printf("NULL\\n");\n'
            + '}\n'
            + '\n'
            + '// 释放整个链表\n'
            + 'void free_list(Node *head) {\n'
            + '    while (head) {\n'
            + '        Node *tmp = head;\n'
            + '        head = head->next;\n'
            + '        free(tmp);\n'
            + '    }\n'
            + '}\n'
            + '```\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：完整的单向链表（增删查）**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n'
            + '#include <stdlib.h>\n\n'
            + 'typedef struct Node {\n'
            + '    int data;\n'
            + '    struct Node *next;\n'
            + '} Node;\n\n'
            + 'Node *create(int value) {\n'
            + '    Node *n = malloc(sizeof(Node));\n'
            + '    n->data = value;\n'
            + '    n->next = NULL;\n'
            + '    return n;\n'
            + '}\n\n'
            + '// 头插法\n'
            + 'Node *push_front(Node *head, int v) {\n'
            + '    Node *n = create(v);\n'
            + '    n->next = head;\n'
            + '    return n;\n'
            + '}\n\n'
            + '// 删除第一个等于 v 的节点\n'
            + 'Node *remove_value(Node *head, int v) {\n'
            + '    if (!head) return NULL;\n'
            + '    if (head->data == v) {\n'
            + '        Node *tmp = head;\n'
            + '        head = head->next;\n'
            + '        free(tmp);\n'
            + '        return head;\n'
            + '    }\n'
            + '    Node *p = head;\n'
            + '    while (p->next && p->next->data != v) {\n'
            + '        p = p->next;\n'
            + '    }\n'
            + '    if (p->next) {\n'
            + '        Node *tmp = p->next;\n'
            + '        p->next = tmp->next;\n'
            + '        free(tmp);\n'
            + '    }\n'
            + '    return head;\n'
            + '}\n\n'
            + 'void print(Node *head) {\n'
            + '    for (Node *p = head; p; p = p->next) printf("%d -> ", p->data);\n'
            + '    printf("NULL\\n");\n'
            + '}\n\n'
            + 'void free_all(Node *head) {\n'
            + '    while (head) { Node *t = head; head = head->next; free(t); }\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    Node *head = NULL;\n'
            + '    head = push_front(head, 3);\n'
            + '    head = push_front(head, 2);\n'
            + '    head = push_front(head, 1);\n'
            + '    print(head);                 // 1 -> 2 -> 3 -> NULL\n'
            + '    head = remove_value(head, 2);\n'
            + '    print(head);                 // 1 -> 3 -> NULL\n'
            + '    free_all(head);\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：尾插法 + 维护尾指针（O(1) 追加）**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n'
            + '#include <stdlib.h>\n\n'
            + 'typedef struct Node {\n'
            + '    int data;\n'
            + '    struct Node *next;\n'
            + '} Node;\n\n'
            + 'typedef struct {\n'
            + '    Node *head;\n'
            + '    Node *tail;   // 维护尾指针，尾部插入 O(1)\n'
            + '    int size;\n'
            + '} List;\n\n'
            + 'void push_back(List *lst, int v) {\n'
            + '    Node *n = malloc(sizeof(Node));\n'
            + '    n->data = v;\n'
            + '    n->next = NULL;\n'
            + '    if (lst->tail) {\n'
            + '        lst->tail->next = n;\n'
            + '    } else {\n'
            + '        lst->head = n;   // 空链表\n'
            + '    }\n'
            + '    lst->tail = n;\n'
            + '    lst->size++;\n'
            + '}\n\n'
            + 'void print(List *lst) {\n'
            + '    for (Node *p = lst->head; p; p = p->next) printf("%d ", p->data);\n'
            + '    printf("\\n");\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    List lst = {NULL, NULL, 0};\n'
            + '    for (int i = 1; i <= 5; i++) push_back(&lst, i);\n'
            + '    print(&lst);   // 1 2 3 4 5\n'
            + '    printf("size = %d\\n", lst.size);\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：链表反转（经典面试题）**\n\n'
            + '```c\n'
            + '#include <stdio.h>\n'
            + '#include <stdlib.h>\n\n'
            + 'typedef struct Node {\n'
            + '    int data;\n'
            + '    struct Node *next;\n'
            + '} Node;\n\n'
            + '// 三指针法反转链表\n'
            + 'Node *reverse(Node *head) {\n'
            + '    Node *prev = NULL;\n'
            + '    Node *curr = head;\n'
            + '    while (curr) {\n'
            + '        Node *next = curr->next;  // 暂存下一个\n'
            + '        curr->next = prev;        // 反转指针\n'
            + '        prev = curr;              // prev 前进\n'
            + '        curr = next;              // curr 前进\n'
            + '    }\n'
            + '    return prev;  // 新的头节点\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    Node *head = NULL;\n'
            + '    for (int i = 3; i >= 1; i--) {\n'
            + '        Node *n = malloc(sizeof(Node));\n'
            + '        n->data = i;\n'
            + '        n->next = head;\n'
            + '        head = n;\n'
            + '    }\n'
            + '    // 1 -> 2 -> 3 -> NULL\n'
            + '    head = reverse(head);\n'
            + '    // 3 -> 2 -> 1 -> NULL\n'
            + '    Node *p = head;\n'
            + '    while (p) { printf("%d ", p->data); p = p->next; }\n'
            + '    printf("\\n");\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **释放链表务必用临时指针**：错误写法 `free(head); head = head->next;` '
            + '会先 free 再访问 next，是 use-after-free。必须先 `tmp = head->next; free(head); head = tmp;`。\n'
            + '2. **删除节点要分情况**：删头节点（改 head）、删中间节点（改前驱 next）、'
            + '删尾节点（前驱 next 置 NULL），三种情况逻辑不同，遗漏会导致崩溃。\n'
            + '3. **空链表判断**：操作前先检查 `if (head == NULL)`，'
            + '否则解引用 NULL 指针会段错误。\n'
            + '4. **内存泄漏**：每个 malloc 必须有 free。删除节点时先保存 next 再 free，'
            + '否则链表断裂且内存泄漏。\n'
            + '5. **指针赋值顺序**：插入节点时 `new->next = head; head = new;` 顺序不能反，'
            + '否则 head 被覆盖后原链表丢失。\n'
            + '6. **二级指针简化代码**：用 `Node **pp` 代替 `Node *head`，'
            + '可以避免删除头节点的特殊处理：`pp = &(*pp)->next`。\n'
            + '7. **链表 vs 动态数组**：现代实践多用动态数组（如 C++ vector）替代链表，'
            + '因为缓存友好性使数组在大多数场景更快。链表仅在频繁中间插入删除时才有优势。\n\n'
            + '## 实际应用\n\n'
            + '- **Linux 内核链表**：内核用侵入式链表（`struct list_head`）管理进程、文件、设备，'
            + '通过 `container_of` 宏从链表节点反推宿主结构体。\n'
            + '- **LRU 缓存**：Redis、Memcached 的 LRU 淘汰策略用双向链表 + 哈希表实现 O(1) 访问和淘汰。\n'
            + '- **内存分配器**：glibc malloc 用链表管理空闲块，'
            + '每个空闲块 header 包含链表指针。\n'
            + '- **多项式运算**：稀疏多项式用链表存储非零项，节省空间。\n'
            + '- **任务调度**：操作系统就绪队列用链表管理待运行进程。\n'
            + '- **音乐播放列表**：每首歌是节点，循环链表实现单曲循环。\n\n'
            + '## 扩展知识\n\n'
            + '- **双向链表**：`struct Node { int data; struct Node *prev, *next; };` '
            + '支持双向遍历，删除节点 O(1)（无需找前驱），但多一个指针开销。\n'
            + '- **循环链表**：尾节点 next 指向 head，遍历时用 do-while 避免立即退出。'
            + '约瑟夫问题是经典应用。\n'
            + '- **跳表（Skip List）**：在链表上建立多级索引，查找 O(log n)，'
            + 'Redis 的 SortedSet 用跳表实现。\n'
            + '- **侵入式链表**：节点结构只含链表指针，数据结构体"包含"节点成员。'
            + 'Linux kernel 用这种方式让一个对象同时挂在多个链表上。\n'
            + '- **无锁链表**：用 CAS（Compare-And-Swap）原子操作实现多线程安全链表，'
            + '性能优于加锁，但实现极其复杂。\n'
            + '- **B+ 树**：数据库索引的核心数据结构，本质是多路平衡查找树，'
            + '叶子节点用链表串起来支持范围查询。',
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
            '## 概念详解\n\n'
            + '从 C 过渡到 C++，第一个变化是输入输出方式。C 用 `printf`/`scanf`，'
            + '需要手写格式说明符（`%d`、`%f`、`%s`），类型不匹配会段错误或读出乱码。'
            + 'C++ 引入了 `iostream` 库，通过运算符重载实现**类型安全**的 I/O：'
            + '`std::cout << x` 编译器自动根据 x 的类型选择输出方式，无需格式说明符。\n\n'
            + '**为什么 C++ 要改用 iostream？**\n'
            + '- **类型安全**：`printf("%d", 3.14)` 静默错误，`cout << 3.14` 自动正确\n'
            + '- **可扩展性**：自定义类型可以重载 `<<`/`>>`，让 cout/cin 直接支持\n'
            + '- **错误处理**：cin 失败会设置 failbit，可链式检查；scanf 失败只返回值\n'
            + '- **内存安全**：不会像 `scanf("%s", buf)` 那样缓冲区溢出\n\n'
            + '**命名空间（namespace）**是 C++ 的组织机制，解决大型项目的命名冲突问题。'
            + '例如两个库都有 `print` 函数，用 `lib1::print()` 和 `lib2::print()` 区分。'
            + '`std` 是 C++ 标准库的命名空间，所有标准库函数都在其中。\n\n'
            + '## 语法说明\n\n'
            + '**I/O 流核心对象（`<iostream>`）：**\n\n'
            + '| 对象 | 含义 | 默认绑定 |\n'
            + '| --- | --- | --- |\n'
            + '| `std::cin` | 标准输入流 | 键盘 |\n'
            + '| `std::cout` | 标准输出流 | 屏幕 |\n'
            + '| `std::cerr` | 标准错误流（无缓冲）| 屏幕 |\n'
            + '| `std::clog` | 标准日志流（有缓冲）| 屏幕 |\n\n'
            + '**运算符：**\n\n'
            + '| 运算符 | 用于 | 示例 |\n'
            + '| --- | --- | --- |\n'
            + '| `<<` | 插入（输出）| `cout << "hi"` |\n'
            + '| `>>` | 提取（输入）| `cin >> x` |\n\n'
            + '**常用操纵符（`<iomanip>`）：**\n\n'
            + '| 操纵符 | 作用 | 示例 |\n'
            + '| --- | --- | --- |\n'
            + '| `std::endl` | 换行 + 刷新缓冲区 | `cout << "hi" << endl;` |\n'
            + '| `std::flush` | 刷新缓冲区（不换行）| `cout << "hi" << flush;` |\n'
            + '| `std::setw(n)` | 设字段宽度 | `cout << setw(5) << 42;` |\n'
            + '| `std::setprecision(n)` | 设浮点精度 | `cout << setprecision(3) << 3.14159;` |\n'
            + '| `std::fixed` | 定点小数 | `cout << fixed << 3.14;` |\n'
            + '| `std::hex` | 十六进制输出 | `cout << hex << 255;` |\n'
            + '| `std::boolalpha` | 输出 true/false | `cout << boolalpha << (1<2);` |\n\n'
            + '**命名空间使用方式：**\n\n'
            + '```cpp\n'
            + 'std::cout << "hi";           // 完整限定\n'
            + 'using std::cout;             // 引入单个名称\n'
            + 'cout << "hi";                // 之后可直接用 cout\n'
            + 'using namespace std;          // 引入整个命名空间（不推荐在头文件中用）\n'
            + '```\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：cout/cin 基础**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n\n'
            + 'int main() {\n'
            + '    std::string name;\n'
            + '    int age;\n'
            + '    std::cout << "请输入姓名: ";\n'
            + '    std::getline(std::cin, name);  // 读整行（含空格）\n'
            + '    std::cout << "请输入年龄: ";\n'
            + '    std::cin >> age;\n'
            + '    std::cout << "你好, " << name << "! 你 " << age << " 岁了。\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：格式化输出（omanip）**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <iomanip>\n\n'
            + 'int main() {\n'
            + '    double pi = 3.14159265358979;\n'
            + '    // 默认 6 位有效数字\n'
            + '    std::cout << pi << "\\n";                  // 3.14159\n'
            + '    // 固定小数 + 精度\n'
            + '    std::cout << std::fixed << std::setprecision(4) << pi << "\\n";  // 3.1416\n'
            + '    // 宽度对齐\n'
            + '    std::cout << std::setw(10) << "姓名" << std::setw(10) << "分数" << "\\n";\n'
            + '    std::cout << std::setw(10) << "小明" << std::setw(10) << 95 << "\\n";\n'
            + '    std::cout << std::setw(10) << "小红" << std::setw(10) << 88 << "\\n";\n'
            + '    // 十六进制\n'
            + '    std::cout << "255 = " << std::hex << 255 << std::dec << " (十进制)\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：命名空间定义与使用**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n\n'
            + 'namespace math {\n'
            + '    double pi = 3.14159265358979;\n'
            + '    int abs(int x) { return x < 0 ? -x : x; }\n'
            + '    namespace detail {  // 嵌套命名空间\n'
            + '        double sqrt(double x) { return x; }  // 简化示例\n'
            + '    }\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    std::cout << "pi = " << math::pi << "\\n";\n'
            + '    std::cout << "|-5| = " << math::abs(-5) << "\\n";\n'
            + '    std::cout << "sqrt(2) = " << math::detail::sqrt(2) << "\\n";\n'
            + '    \n'
            + '    // C++17 嵌套命名空间简写\n'
            + '    // namespace math::detail { double sqrt(double); }\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **`std::endl` vs `"\\n"`**：endl 会刷新缓冲区，频繁使用会显著降低性能。'
            + '大量输出时用 `\\n`，需要立即看到输出（如错误日志）才用 endl。\n'
            + '2. **`using namespace std` 不要放头文件**：会污染所有包含该头文件的代码，'
            + '可能导致命名冲突。源文件（.cpp）中可以接受。\n'
            + '3. **cin >> 不读空白字符**：`cin >> s` 遇到空格、换行就停，'
            + '读含空格的字符串用 `getline(cin, s)`。但 cin >> n 后 getline 会读到残留的换行符，'
            + '需要 `cin.ignore()` 清空。\n'
            + '4. **cin 失败要清除状态**：输入类型不匹配（如要求 int 却输入字母）会进入失败状态，'
            + '之后所有 cin 都失败。需 `cin.clear(); cin.ignore();` 恢复。\n'
            + '5. **sync_with_stdio(false)**：取消 C/C++ 流同步，'
            + 'cout/cin 速度可提升 3-5 倍，但之后不能混用 printf/cout。\n'
            + '6. **cerr 无缓冲**：每次 << 都立即输出，适合错误日志；clog 有缓冲，'
            + '适合普通日志。\n\n'
            + '## 实际应用\n\n'
            + '- **桌面应用**：Qt 程序用 qDebug（基于 cerr）输出调试信息\n'
            + '- **游戏开发**：Unreal Engine 用 UE_LOG 宏，底层封装了 ostream\n'
            + '- **服务器日志**：glog、spdlog 等日志库都基于 iostream 扩展\n'
            + '- **科学计算**：Eigen 矩阵库重载 `<<` 让 cout 能直接输出矩阵\n'
            + '- **配置文件**：许多 C++ 库用 `>>` 重载实现自定义配置解析\n\n'
            + '## 扩展知识\n\n'
            + '- **C++20 std::format**：类似 Python 的 f-string，'
            + '`std::format("姓名: {}, 年龄: {}", name, age)` 比 iostream 更简洁，'
            + '比 printf 更安全，是 C++ 格式化的未来方向。\n'
            + '- **字符串流 sstream**：`std::ostringstream` 把数据写入字符串，'
            + '`std::istringstream` 从字符串读数据，用于字符串与数字转换、序列化。\n'
            + '- **文件流 fstream**：`std::ifstream` 读文件，`std::ofstream` 写文件，'
            + '`std::fstream` 读写。RAII 自动关闭文件。\n'
            + '- **流的状态**：goodbit/badbit/failbit/eofbit 四种状态，'
            + '用 `if (cin)` 隐式检查，或 `cin.good()`/`cin.fail()` 显式检查。\n'
            + '- **locale 与国际化**：流可以绑定 locale 实现不同地区的数字、日期格式化。\n'
            + '- **C++23 std::print**：基于 std::format 的类型安全 printf，进一步简化输出。',
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
            '## 概念详解\n\n'
            + '引用（reference）是 C++ 对 C 指针的重要改进。'
            + '引用是变量的**别名**：`int &ref = x` 后，ref 和 x 指向同一块内存，'
            + '操作 ref 就是操作 x。引用必须声明时初始化，且不能重新绑定到其他变量——'
            + '这是它比指针更安全的地方。\n\n'
            + '**为什么需要引用？**\n'
            + '- **函数修改实参**：C 用传指针 `void f(int *p)`，调用 `f(&x)` 需要取地址；'
            + 'C++ 用传引用 `void f(int &r)`，调用 `f(x)` 像值传递一样自然\n'
            + '- **避免拷贝大对象**：传值会复制整个对象（如 std::string 千字节），'
            + '传引用零拷贝；const 引用既安全又高效\n'
            + '- **更安全的指针**：引用不能为空、不能未初始化、不能重新绑定，'
            + '避免了 NULL 解引用、悬空指针等错误\n'
            + '- **运算符重载必需**：`cout << x` 中 cout 的 `operator<<` 必须返回引用才能链式调用\n\n'
            + '## 语法说明\n\n'
            + '**引用类型：**\n\n'
            + '| 类型 | 语法 | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| 左值引用 | `int &r = x;` | 绑定到变量（左值）|\n'
            + '| const 引用 | `const int &r = x;` | 只读，可绑定到右值 |\n'
            + '| 右值引用（C++11）| `int &&r = 42;` | 绑定到临时值，用于移动语义 |\n'
            + '| 函数返回引用 | `int& f() { return x; }` | 可作左值赋值 |\n\n'
            + '**关键规则：**\n'
            + '1. 引用必须在声明时初始化\n'
            + '2. 引用一旦绑定不能改变目标（`ref = y` 是赋值，不是重新绑定）\n'
            + '3. 引用不能为 NULL\n'
            + '4. const 引用可绑定到右值（临时值），延长其生命周期\n\n'
            + '**传参对比：**\n\n'
            + '| 传参方式 | 函数签名 | 调用 | 修改实参 | 拷贝开销 |\n'
            + '| --- | --- | --- | --- | --- |\n'
            + '| 传值 | `void f(int x)` | `f(a)` | 不能 | 有 |\n'
            + '| 传指针 | `void f(int *p)` | `f(&a)` | 能 | 指针大小 |\n'
            + '| 传引用 | `void f(int &r)` | `f(a)` | 能 | 无 |\n'
            + '| 传 const 引用 | `void f(const int &r)` | `f(a)` | 不能 | 无 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：引用作为函数参数（替代指针）**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + '// 引用参数：修改实参\n'
            + 'void swap(int &a, int &b) {\n'
            + '    int t = a;  a = b;  b = t;\n'
            + '}\n\n'
            + '// const 引用：避免拷贝，不修改\n'
            + 'void print(const string &s) {\n'
            + '    cout << s << "\\n";  // 不会拷贝 s\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    int x = 1, y = 2;\n'
            + '    swap(x, y);   // 调用像值传递，但实际修改了 x、y\n'
            + '    cout << "x=" << x << " y=" << y << "\\n";  // x=2 y=1\n'
            + '    \n'
            + '    string name = "Hello, World!";\n'
            + '    print(name);  // 零拷贝传递\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：引用是别名（一改俱改）**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + 'using namespace std;\n\n'
            + 'int main() {\n'
            + '    int x = 10;\n'
            + '    int &ref = x;   // ref 是 x 的别名\n'
            + '    ref = 20;        // 通过 ref 修改 x\n'
            + '    cout << "x = " << x << "\\n";      // 20\n'
            + '    cout << "&x = " << &x << "\\n";\n'
            + '    cout << "&ref = " << &ref << "\\n";  // 同上\n'
            + '    \n'
            + '    int y = 30;\n'
            + '    ref = y;  // 这是赋值！不是重新绑定！\n'
            + '    cout << "x = " << x << ", y = " << y << "\\n";  // 30, 30\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：返回引用 + 链式调用**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <vector>\n'
            + 'using namespace std;\n\n'
            + 'class Buffer {\n'
            + '    vector<int> data;\n'
            + 'public:\n'
            + '    // 返回引用，可作左值赋值\n'
            + '    int& operator[](size_t i) {\n'
            + '        return data[i];\n'
            + '    }\n'
            + '    // const 版本：只读访问\n'
            + '    const int& operator[](size_t i) const {\n'
            + '        return data[i];\n'
            + '    }\n'
            + '    void push(int v) { data.push_back(v); }\n'
            + '    size_t size() const { return data.size(); }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    Buffer buf;\n'
            + '    buf.push(10);\n'
            + '    buf.push(20);\n'
            + '    buf[0] = 100;   // 因 operator[] 返回引用，可赋值\n'
            + '    for (size_t i = 0; i < buf.size(); i++) {\n'
            + '        cout << buf[i] << " ";  // 100 20\n'
            + '    }\n'
            + '    cout << "\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **引用必须初始化**：`int &r;` 编译错误，必须 `int &r = x;`。'
            + '这避免了"未初始化引用"的未定义行为。\n'
            + '2. **不能重新绑定**：`ref = y` 是把 y 的值赋给 ref 指向的变量，'
            + '不是让 ref 指向 y。这是初学者最易误解的点。\n'
            + '3. **不要返回局部变量的引用**：`int& f() { int x = 5; return x; }` '
            + '返回后 x 已销毁，引用悬空，使用是未定义行为。'
            + '可返回静态变量、堆变量、成员变量的引用。\n'
            + '4. **const 引用延长临时值生命周期**：`const string &s = "hi";` 合法，'
            + '临时 string 会活到 s 离开作用域。但非 const 引用不能绑定到临时值。\n'
            + '5. **引用底层是指针**：编译器实现引用通常用常量指针，'
            + '但语法上引用不是对象，不能取引用的地址（`&ref` 返回的是被引用对象的地址）。\n'
            + '6. **传 const 引用还是传值**：小对象（int、指针）传值更快（避免间接寻址），'
            + '大对象（string、vector）传 const 引用更快。\n\n'
            + '## 实际应用\n\n'
            + '- **STL 容器**：`vector<int>::operator[]` 返回引用，支持 `v[i] = x` 赋值\n'
            + '- **流操作**：`ostream& operator<<(ostream& os, const T& x)` 返回引用实现链式 `cout << a << b`\n'
            + '- **拷贝构造函数**：`Foo(const Foo &other)` 必须用 const 引用，'
            + '传值会无限递归（拷贝构造需要拷贝构造...）\n'
            + '- **for-range 循环**：`for (const auto &x : vec)` 用 const 引用避免拷贝\n'
            + '- **函数返回大对象**：`const string& get_name() const { return name_; }` '
            + '避免拷贝返回的成员\n'
            + '- **移动语义（C++11）**：右值引用 `T&&` + `std::move` 实现零拷贝转移资源所有权\n\n'
            + '## 扩展知识\n\n'
            + '- **右值引用（C++11）**：`int &&r = 42;` 绑定到右值（临时值），'
            + '配合 `std::move` 实现移动构造/移动赋值，避免深拷贝。'
            + '这是 C++ 性能优化的核心特性。\n'
            + '- **转发引用（C++11）**：模板中 `T&&` 是转发引用，'
            + '配合 `std::forward<T>` 完美转发，保持参数的左右值属性。'
            + '`std::make_unique`、`emplace_back` 都用完美转发。\n'
            + '- **悬空引用**：引用指向的对象被销毁后，引用变成悬空引用，'
            + '使用是未定义行为。生命周期分析是 C++ 的难点。\n'
            + '- **引用折叠规则**：`T& &` 折叠为 `T&`，`T& &&` 折叠为 `T&`，'
            + '`T&& &` 折叠为 `T&`，`T&& &&` 折叠为 `T&&`。模板元编程的基础。\n'
            + '- **指针 vs 引用选择**：需要"可空"（如可选参数）用指针；'
            + '需要"重新绑定"（如遍历链表）用指针；其他场景优先引用。\n'
            + '- **C++17 std::optional**：`optional<int>` 比 `int*` NULL 表达"可能没有值"更清晰，'
            + '可替代部分指针用法。',
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
            '## 概念详解\n\n'
            + 'C++ 支持函数重载（overloading）——多个同名函数可以有不同参数列表，'
            + '编译器根据参数类型和数量自动选择调用哪个版本。'
            + '例如 `int max(int a, int b)` 和 `double max(double a, double b)` 可以共存。'
            + 'C 语言不支持重载，每个函数名必须唯一（这是 C 没有 STL 的原因之一）。\n\n'
            + '**为什么需要函数重载？**\n'
            + '- **统一接口**：`print(int)`/`print(string)`/`print(double)` 都叫 print，'
            + '使用者不需要记 `printInt`/`printString`/`printDouble`\n'
            + '- **类型安全的多态**：编译期决定调用哪个版本，零运行时开销\n'
            + '- **STL 基础**：`std::sort` 等算法对不同迭代器类型有多个重载\n\n'
            + '**默认参数**让函数调用更灵活。`void f(int a, int b = 10, int c = 20)` 中，'
            + '调用 `f(1)` 等价于 `f(1, 10, 20)`，`f(1, 2)` 等价于 `f(1, 2, 20)`。'
            + '适合可选参数场景，避免写多个重载。\n\n'
            + '## 语法说明\n\n'
            + '**函数重载规则：**\n\n'
            + '| 区分维度 | 能否重载 | 示例 |\n'
            + '| --- | --- | --- |\n'
            + '| 参数个数 | 能 | `f(int)` vs `f(int, int)` |\n'
            + '| 参数类型 | 能 | `f(int)` vs `f(double)` |\n'
            + '| 返回类型 | **不能** | `int f()` vs `double f()` 冲突 |\n'
            + '| const 修饰（成员）| 能 | `f() const` vs `f()` |\n'
            + '| 参数名 | 不能 | `f(int a)` vs `f(int b)` 相同 |\n'
            + '| 顶层 const | 不能 | `f(int)` vs `f(const int)` 相同 |\n'
            + '| 底层 const/引用 | 能 | `f(int&)` vs `f(const int&)` |\n\n'
            + '**默认参数规则：**\n'
            + '1. 必须从右向左连续设置：`f(int a, int b = 1, int c = 2)` 合法，'
            + '`f(int a = 1, int b, int c = 2)` 非法\n'
            + '2. 调用时从左到右匹配，跳过的参数用默认值\n'
            + '3. 声明和定义中只能在一处指定默认值（通常在头文件声明中）\n'
            + '4. 默认值可以是常量、表达式，但不能是局部变量\n\n'
            + '**重载解析优先级：**\n\n'
            + '| 优先级 | 匹配方式 | 示例（调用 f(short)）|\n'
            + '| --- | --- | --- |\n'
            + '| 1 | 精确匹配 | `f(short)` |\n'
            + '| 2 | 标准转换 | `f(int)` |\n'
            + '| 3 | 用户定义转换 | `f(MyClass)` |\n'
            + '| 4 | 可变参数 | `f(...)` |\n'
            + '若同级有多个匹配，编译器报"二义性"错误。\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：函数重载（按类型）**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + 'int add(int a, int b)      { return a + b; }\n'
            + 'double add(double a, double b) { return a + b; }\n'
            + 'string add(const string &a, const string &b) { return a + b; }\n\n'
            + 'int main() {\n'
            + '    cout << add(3, 4) << "\\n";              // int 版本: 7\n'
            + '    cout << add(1.5, 2.5) << "\\n";          // double 版本: 4\n'
            + '    cout << add("Hello, ", "World!") << "\\n"; // string 版本\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：默认参数（替代部分重载）**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + '// 默认参数：简化接口\n'
            + 'void open_file(const string &path,\n'
            + '               const string &mode = "r",\n'
            + '               bool binary = false) {\n'
            + '    cout << "打开 " << path << " 模式=" << mode\n'
            + '         << " 二进制=" << boolalpha << binary << "\\n";\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    open_file("a.txt");                      // 用所有默认值\n'
            + '    open_file("b.txt", "w");                 // 只指定 mode\n'
            + '    open_file("c.txt", "wb", true);          // 全部指定\n'
            + '    // open_file("d.txt", , true);          // 错误！不能跳过中间参数\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：重载 vs 默认参数的选择**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + 'using namespace std;\n\n'
            + '// 默认参数适合"可选参数"\n'
            + 'void log(const string &msg, int level = 1) {\n'
            + '    cout << "[L" << level << "] " << msg << "\\n";\n'
            + '}\n\n'
            + '// 重载适合"不同语义"\n'
            + 'void draw(int x, int y) {                  // 画点\n'
            + '    cout << "画点 (" << x << "," << y << ")\\n";\n'
            + '}\n'
            + 'void draw(int x, int y, int w, int h) {    // 画矩形\n'
            + '    cout << "画矩形 (" << x << "," << y << "," << w << "," << h << ")\\n";\n'
            + '}\n'
            + 'void draw(const string &text, int x, int y) { // 画文字\n'
            + '    cout << "画文字 " << text << " @(" << x << "," << y << ")\\n";\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    log("启动");                // [L1] 启动\n'
            + '    log("错误", 3);             // [L3] 错误\n'
            + '    draw(10, 20);               // 画点\n'
            + '    draw(10, 20, 100, 50);      // 画矩形\n'
            + '    draw("hi", 5, 5);           // 画文字\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **返回类型不参与重载**：`int f()` 和 `void f()` 不能共存，'
            + '因为调用 `f()` 时编译器无法根据返回类型决定调哪个。\n'
            + '2. **默认参数必须从右向左连续**：`f(int a = 1, int b)` 非法。'
            + '若调用 `f(5)`，b 没有值，编译器无法处理。\n'
            + '3. **声明和定义只在一处指定默认值**：通常在头文件声明中指定，'
            + '源文件定义中不能再写默认值，否则编译器报"重复默认值"错误。\n'
            + '4. **重载与默认参数冲突**：`f(int)` 和 `f(int, int = 0)` 共存时，'
            + '调用 `f(5)` 二义性。这种情况应选择其一，不要混用。\n'
            + '5. **隐式转换可能导致意外调用**：`f(int)` 和 `f(double)` 共存时，'
            + '调用 `f(\'a\')` 会调 `f(int)`（char 转 int），可能不是预期。'
            + '可用 `f(static_cast<double>(\'a\'))` 明确。\n'
            + '6. **重载解析二义性**：`f(short)` 和 `f(int)` 都不精确匹配 `f(unsigned)`，'
            + '可能报二义性。慎用相近类型的重载。\n'
            + '7. **C 函数不能重载**：`extern "C"` 修饰的函数无重载，'
            + '因为 C 链接器用函数名做符号，C++ 用 mangled name（含参数类型）。\n\n'
            + '## 实际应用\n\n'
            + '- **STL 构造函数**：`string()`、`string(const char*)`、`string(size_t, char)` 等多个重载\n'
            + '- **operator<<**：标准库为每种类型（int、double、const char*）都重载了 `operator<<`\n'
            + '- **Qt API**：`QString::arg(int)`、`QString::arg(double)` 等几十个重载，统一接口\n'
            + '- **日志库**：`log(level, msg)` + `log(msg)` 默认 level=INFO，简化常用调用\n'
            + '- **游戏开发**：`spawn(Enemy*)` 和 `spawn(Enemy*, Vector3 pos)` 默认位置\n'
            + '- **数学库**：`abs(int)`、`abs(double)`、`abs(complex)` 多种类型重载\n\n'
            + '## 扩展知识\n\n'
            + '- **name mangling**：C++ 编译器把 `f(int)` 编码为 `_Z1fi`，`f(double)` 编码为 `_Z1fd`，'
            + '以此区分重载。`extern "C"` 关闭 mangling 用于与 C 互操作。\n'
            + '- **变参函数**：`void f(...)` 接受任意参数（如 printf），无类型安全，'
            + '现代 C++ 推荐用变参模板 `template<typename... Args>` 替代。\n'
            + '- **C++11 变参模板**：`template<typename... Args> void f(Args... args)` '
            + '可接受任意数量任意类型参数，类型安全，是 std::make_unique、emplace_back 的基础。\n'
            + '- **删除函数（C++11）**：`f(long) = delete;` 显式禁止某个重载，'
            + '防止隐式转换导致意外调用。如 `f(int)` 后 `f(long) = delete` 防止 char 转 long。\n'
            + '- **CRTP（奇异递归模板）**：`template<typename Derived> class Base` '
            + '实现静态多态，编译期分发，零运行时开销。\n'
            + '- **ADL（参数依赖查找）**：调用 `swap(a, b)` 时，'
            + '编译器会在 a、b 的命名空间中查找 `swap` 重载，'
            + '这是 STL 算法能找到用户自定义 swap 的机制。',
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
            '## 概念详解\n\n'
            + '本课讲解两个现代 C++ 的实用特性：`inline` 函数和 `auto` 类型推导。\n\n'
            + '**inline 函数**：建议编译器将函数体直接展开到调用处，避免函数调用开销（压栈、跳转、返回）。'
            + '适用于短小、频繁调用的函数。但 `inline` 只是建议，编译器可能不采纳'
            + '（如递归函数、复杂函数）。现代编译器会自动内联，所以手动 inline 的重要性降低。\n\n'
            + '**为什么需要 inline？**\n'
            + '- **消除函数调用开销**：调用函数需要保存寄存器、压栈、跳转、返回，'
            + '短函数的调用开销可能超过函数体本身\n'
            + '- **允许在头文件中定义函数**：inline 函数可在头文件中定义，'
            + '多个源文件包含不会"重复定义"（编译器会合并）\n'
            + '- **替代宏函数**：`#define SQR(x) ((x)*(x))` 没有类型检查、'
            + '可能多次求值副作用，inline 函数安全得多\n\n'
            + '**auto 类型推导**（C++11）让编译器自动推导变量类型。'
            + '`auto x = 42` 推导为 int，`auto s = "hello"` 推导为 const char*。'
            + '这在类型名很长时（如迭代器）特别有用：'
            + '`auto it = vec.begin()` 比 `std::vector<int>::iterator it = vec.begin()` 简洁得多。\n\n'
            + '**为什么需要 auto？**\n'
            + '- **简化长类型名**：STL 迭代器、模板嵌套类型名极长\n'
            + '- **重构友好**：改函数返回类型时，调用处 auto 自动适应\n'
            + '- **避免写错类型**：`auto x = foo()` 一定正确，手写类型可能错\n'
            + '- **配合 lambda**：lambda 类型唯一且无法手写，必须用 auto\n\n'
            + '## 语法说明\n\n'
            + '**inline 函数：**\n\n'
            + '```cpp\n'
            + 'inline int square(int x) { return x * x; }  // 建议编译器内联\n'
            + '```\n\n'
            + '**auto 推导规则：**\n\n'
            + '| 写法 | 推导结果 | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| `auto x = 42;` | `int` | 整数默认 int |\n'
            + '| `auto x = 3.14;` | `double` | 浮点默认 double |\n'
            + '| `auto x = "hi";` | `const char*` | 字符串字面量 |\n'
            + '| `auto x = "hi"s;` | `std::string` | C++14 字面量运算符 |\n'
            + '| `auto &x = obj;` | `T&` | 引用 |\n'
            + '| `const auto &x = obj;` | `const T&` | const 引用 |\n'
            + '| `auto* p = &x;` | `T*` | 指针 |\n'
            + '| `auto x = {1, 2};` | `initializer_list<int>` | 列表推导 |\n'
            + '| `decltype(x) y;` | x 的类型 | decltype 关键字 |\n\n'
            + '**范围 for 循环（C++11）：**\n\n'
            + '| 写法 | 说明 |\n'
            + '| --- | --- |\n'
            + '| `for (int x : arr)` | 拷贝每个元素 |\n'
            + '| `for (int &x : arr)` | 引用，可修改原元素 |\n'
            + '| `for (const int &x : arr)` | const 引用，只读零拷贝（推荐）|\n'
            + '| `for (auto &x : arr)` | 自动推导引用类型 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：inline vs 宏函数 vs 普通函数**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + 'using namespace std;\n\n'
            + '// 宏函数：危险！\n'
            + '#define SQR_MACRO(x) ((x) * (x))\n\n'
            + '// inline 函数：安全\n'
            + 'inline int sqr(int x) { return x * x; }\n\n'
            + 'int main() {\n'
            + '    int a = 5;\n'
            + '    cout << SQR_MACRO(a++) << "\\n";  // 30！a++ 被求值两次\n'
            + '    cout << "a = " << a << "\\n";     // a = 7（不是 6）\n'
            + '    \n'
            + '    int b = 5;\n'
            + '    cout << sqr(b++) << "\\n";        // 25，b++ 只求值一次\n'
            + '    cout << "b = " << b << "\\n";     // b = 6\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：auto 简化 STL 迭代器**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <vector>\n'
            + '#include <map>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + 'int main() {\n'
            + '    vector<int> v = {1, 2, 3, 4, 5};\n'
            + '    map<string, int> m = {{"a", 1}, {"b", 2}};\n'
            + '    \n'
            + '    // 不用 auto：类型名冗长\n'
            + '    // vector<int>::iterator it = v.begin();\n'
            + '    // map<string, int>::iterator mit = m.begin();\n'
            + '    \n'
            + '    // 用 auto：简洁\n'
            + '    for (auto it = v.begin(); it != v.end(); ++it) {\n'
            + '        cout << *it << " ";\n'
            + '    }\n'
            + '    cout << "\\n";\n'
            + '    \n'
            + '    // 范围 for + const 引用（推荐）\n'
            + '    for (const auto &x : v) {\n'
            + '        cout << x << " ";\n'
            + '    }\n'
            + '    cout << "\\n";\n'
            + '    \n'
            + '    // structured binding (C++17)\n'
            + '    for (const auto &[key, val] : m) {\n'
            + '        cout << key << "=" << val << " ";\n'
            + '    }\n'
            + '    cout << "\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：auto 配合 lambda 和 decltype**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <vector>\n'
            + '#include <algorithm>\n'
            + 'using namespace std;\n\n'
            + 'int main() {\n'
            + '    vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6};\n'
            + '    \n'
            + '    // auto 接收 lambda（lambda 类型无法手写）\n'
            + '    auto cmp = [](int a, int b) { return a > b; };\n'
            + '    sort(v.begin(), v.end(), cmp);\n'
            + '    for (auto x : v) cout << x << " ";\n'
            + '    cout << "\\n";  // 9 6 5 4 3 2 1 1\n'
            + '    \n'
            + '    // decltype 获取表达式类型\n'
            + '    int a = 10;\n'
            + '    decltype(a) b = 20;          // b 是 int\n'
            + '    decltype(auto) c = a;        // C++14，推导为 int\n'
            + '    \n'
            + '    // auto 返回类型（C++14）\n'
            + '    auto add = [](auto x, auto y) { return x + y; };\n'
            + '    cout << add(1, 2) << " " << add(1.5, 2.5) << "\\n";  // 3 4\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **inline 只是建议**：编译器可能拒绝内联（递归、过大、虚函数）。'
            + '现代编译器在 -O2 下会自动内联合适函数，手动 inline 多余。\n'
            + '2. **inline 不影响虚函数**：虚函数通过虚表动态分发，无法内联。'
            + '除非编译期已知具体类型（如 `obj.Base::method()`）。\n'
            + '3. **auto 会丢弃引用和 const**：`auto x = obj` 是值拷贝，'
            + '想保留引用要写 `auto &x = obj`，想保留 const 写 `const auto &x = obj`。\n'
            + '4. **auto 推导数组会退化为指针**：`int arr[5]; auto x = arr;` 推导为 `int*`。'
            + '想保留数组类型用 `auto &x = arr`。\n'
            + '5. **不要滥用 auto**：`auto x = foo()` 当 foo 返回类型不明显时，'
            + '读者无法判断 x 是 int 还是 double。明显类型（int、string）建议手写。\n'
            + '6. **范围 for 不能修改容器大小**：循环中不能 push_back/erase，'
            + '会使迭代器失效。需要修改用传统 for 循环。\n'
            + '7. **inline 函数定义放头文件**：非 inline 函数放头文件会"重复定义"链接错误，'
            + 'inline 函数放头文件编译器会合并，是模板的天然处理方式。\n\n'
            + '## 实际应用\n\n'
            + '- **STL 算法**：`std::sort`、`std::find` 等都是 inline 模板函数，'
            + '定义在 `<algorithm>` 头文件中\n'
            + '- **getter/setter**：`inline int size() const { return n_; }` '
            + '是类内定义成员函数，隐式 inline\n'
            + '- **模板**：所有模板函数/类必须定义在头文件中（编译期实例化），'
            + '天然 inline\n'
            + '- **现代 C++ 代码风格**：Google C++ Style Guide 鼓励用 auto '
            + '处理迭代器、lambda、模板返回值\n'
            + '- **配置系统**：`auto config = load_config()` 让重构时改返回类型不影响调用处\n'
            + '- **响应式编程**：RxCpp 中 observable 类型极其复杂，auto 几乎必需\n\n'
            + '## 扩展知识\n\n'
            + '- **constexpr（C++11）**：比 inline 更强，要求编译期求值。'
            + '`constexpr int sqr(int x) { return x*x; }` 可用于数组大小 `int arr[sqr(5)];`\n'
            + '- **consteval（C++20）**：强制编译期求值，运行时调用是编译错误\n'
            + '- **decltype(auto)**（C++14）：保留引用和 const，'
            + '用于转发函数返回类型推导\n'
            + '- **auto 返回类型（C++14）**：`auto f() { return x; }` 让编译器推导返回类型，'
            + '重构时无需手改声明\n'
            + '- **结构化绑定（C++17）**：`auto [a, b] = pair;` 解构 pair/tuple/struct，'
            + '配合范围 for 遍历 map 极其方便\n'
            + '- **concept（C++20）**：`template<std::integral T>` 约束模板参数类型，'
            + '替代 SFINAE，让模板错误信息更友好\n'
            + '- **编译期多态**：CRTP + inline 实现零开销多态，'
            + 'Eigen 矩阵库用此技术达到 Fortran 级性能。',
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
            '## 概念详解\n\n'
            + '类（class）是 C++ 面向对象编程（OOP）的基础。'
            + '类将**数据**和**操作数据的函数**封装在一起，形成自定义类型。'
            + 'C 语言的 struct 只有数据，C++ 的 class 既有数据也有方法，'
            + '还能控制访问权限、支持继承和多态。\n\n'
            + '**为什么需要类？**\n'
            + '- **封装**：隐藏实现细节，只暴露接口。'
            + '使用者不需要知道内部如何实现，只管调用 public 方法\n'
            + '- **数据与行为绑定**：Student 数据和 print/score 方法放一起，'
            + '比 C 中零散的函数 `student_print(Student*)` 更内聚\n'
            + '- **访问控制**：private 成员外部不能改，防止误操作破坏不变式\n'
            + '- **代码复用**：通过继承，子类复用父类代码\n'
            + '- **多态**：同一接口不同实现，开闭原则的基础\n\n'
            + '**类 vs 对象**：类是"蓝图/模板"，对象是"实例"。'
            + '`class Dog` 是蓝图，`Dog buddy; Dog max;` 是两个不同的对象，'
            + '各有独立的成员变量，共享同一份方法代码。\n\n'
            + '## 语法说明\n\n'
            + '**类定义：**\n\n'
            + '```cpp\n'
            + 'class ClassName {\n'
            + 'private:        // 私有（默认）\n'
            + '    int data_;  // 数据成员\n'
            + 'public:         // 公开\n'
            + '    void method();  // 成员函数声明\n'
            + '};  // 末尾分号不能省\n'
            + '\n'
            + 'void ClassName::method() {  // 类外定义\n'
            + '    data_ = 0;\n'
            + '}\n'
            + '```\n\n'
            + '**访问控制符：**\n\n'
            + '| 关键字 | 类内 | 派生类 | 类外 |\n'
            + '| --- | --- | --- | --- |\n'
            + '| `public` | 可访问 | 可访问 | 可访问 |\n'
            + '| `protected` | 可访问 | 可访问 | 不可访问 |\n'
            + '| `private` | 可访问 | 不可访问 | 不可访问 |\n\n'
            + '**特殊成员函数：**\n\n'
            + '| 函数 | 作用 | 默认行为 |\n'
            + '| --- | --- | --- |\n'
            + '| 构造函数 `T()` | 初始化对象 | 默认构造（不初始化内置类型）|\n'
            + '| 析构函数 `~T()` | 释放资源 | 空实现 |\n'
            + '| 拷贝构造 `T(const T&)` | 用另一对象初始化 | 逐成员拷贝 |\n'
            + '| 拷贝赋值 `operator=` | 用另一对象赋值 | 逐成员拷贝 |\n'
            + '| 移动构造 `T(T&&)`（C++11）| 移动资源 | 逐成员移动 |\n'
            + '| 移动赋值 `operator=(T&&)` | 移动赋值 | 逐成员移动 |\n\n'
            + '**this 指针**：指向当前对象，`this->data_` 等价于 `data_`。'
            + '用于区分成员和参数同名、返回当前对象引用（链式调用）。\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：完整的类（封装 + 构造）**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + 'class Student {\n'
            + 'private:\n'
            + '    string name_;\n'
            + '    int score_;\n'
            + 'public:\n'
            + '    // 构造函数\n'
            + '    Student(const string &name, int score) : name_(name), score_(score) {}\n'
            + '    \n'
            + '    // getter（const 保证不修改对象）\n'
            + '    string name() const { return name_; }\n'
            + '    int score() const { return score_; }\n'
            + '    \n'
            + '    // setter（带校验）\n'
            + '    void set_score(int s) {\n'
            + '        if (s < 0) s = 0;\n'
            + '        if (s > 100) s = 100;\n'
            + '        score_ = s;\n'
            + '    }\n'
            + '    \n'
            + '    void print() const {\n'
            + '        cout << name_ << ": " << score_ << "\\n";\n'
            + '    }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    Student s("小明", 95);\n'
            + '    s.print();              // 小明: 95\n'
            + '    s.set_score(150);       // 被校验为 100\n'
            + '    cout << s.name() << " 现在分数 " << s.score() << "\\n";\n'
            + '    // s.score_ = 50;  // 错误：private 不可访问\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：this 指针与链式调用**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + 'using namespace std;\n\n'
            + 'class StringBuilder {\n'
            + '    string data_;\n'
            + 'public:\n'
            + '    StringBuilder& append(const string &s) {\n'
            + '        data_ += s;\n'
            + '        return *this;  // 返回当前对象引用，支持链式\n'
            + '    }\n'
            + '    StringBuilder& append(int n) {\n'
            + '        data_ += to_string(n);\n'
            + '        return *this;\n'
            + '    }\n'
            + '    const string& str() const { return data_; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    StringBuilder sb;\n'
            + '    sb.append("Hello, ").append("World! ").append(2024);\n'
            + '    cout << sb.str() << "\\n";  // Hello, World! 2024\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：析构函数与资源管理**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + 'using namespace std;\n\n'
            + 'class File {\n'
            + '    FILE *fp_;\n'
            + '    string name_;\n'
            + 'public:\n'
            + '    File(const string &name) : fp_(fopen(name.c_str(), "w")), name_(name) {\n'
            + '        if (!fp_) throw runtime_error("无法打开文件");\n'
            + '        cout << "打开 " << name_ << "\\n";\n'
            + '    }\n'
            + '    ~File() {  // 析构函数：对象销毁时自动调用\n'
            + '        if (fp_) {\n'
            + '            fclose(fp_);\n'
            + '            cout << "关闭 " << name_ << "\\n";\n'
            + '        }\n'
            + '    }\n'
            + '    void write(const string &s) { fputs(s.c_str(), fp_); }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    {\n'
            + '        File f("test.txt");\n'
            + '        f.write("hello\\n");\n'
            + '    }  // f 离开作用域，析构函数自动调用，文件关闭\n'
            + '    cout << "main 结束\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **类末尾分号不能省**：`class A {...};` 漏写分号是常见编译错误。\n'
            + '2. **数据成员设为 private**：直接 public 数据破坏封装，'
            + '后续修改实现（如加缓存、改类型）会影响所有使用者。'
            + '用 getter/setter 提供受控访问。\n'
            + '3. **成员变量命名加后缀 `_`**：区分成员变量和参数（如 `name_` vs `name`），'
            + 'Google C++ Style 推荐此风格。也可用 `m_name` 前缀。\n'
            + '4. **const 成员函数**：`void print() const` 表示不修改对象，'
            + 'const 对象只能调 const 方法。不写 const 的方法无法被 const 对象调用。\n'
            + '5. **构造函数初始化列表**：`T() : member_(value) {}` 比在函数体内赋值高效，'
            + '因为后者是"先默认构造再赋值"。const 成员和引用成员必须用初始化列表。\n'
            + '6. **三/五/零法则**：定义了析构函数通常也要定义拷贝构造和拷贝赋值（三法则）；'
            + 'C++11 后加移动构造和移动赋值（五法则）；'
            + '若用智能指针管理资源，则无需自定义任何特殊成员（零法则）。\n'
            + '7. **class vs struct**：唯一区别是默认访问级别（class 私有，struct 公开）。'
            + '习惯：纯数据用 struct，有逻辑用 class。\n\n'
            + '## 实际应用\n\n'
            + '- **STL 容器**：vector、map、string 都是 class，'
            + '封装了数据和算法，提供 push_back/size 等接口\n'
            + '- **RAII 资源管理**：File、Lock、Connection 类在构造时获取资源，'
            + '析构时释放，即使异常也能保证释放\n'
            + '- **Qt 框架**：所有 UI 组件（QPushButton、QLabel）都是 class，'
            + '通过信号槽机制通信\n'
            + '- **游戏引擎**：Unity 的 MonoBehaviour、Unreal 的 UObject 都是类，'
            + '组件系统基于类继承\n'
            + '- **设计模式**：工厂、观察者、策略等模式都基于类和多态\n'
            + '- **业务系统**：User、Order、Product 等实体都是类，'
            + 'ORM 框架（如 sqlalchemy）把类映射到数据库表\n\n'
            + '## 扩展知识\n\n'
            + '- **聚合与组合**：聚合是"has-a"弱关系（Student has Course，Course 独立存在），'
            + '组合是"owns-a"强关系（Car owns Engine，Engine 随 Car 销毁）。'
            + '组合比继承更灵活，优先用组合。\n'
            + '- **友元 friend**：`friend class B;` 让 B 访问 A 的 private 成员。'
            + '破坏封装，慎用。常用于运算符重载（如 `operator<<` 需要 ostream 访问私有）。\n'
            + '- **静态成员**：`static int count_;` 所有对象共享一份，'
            + '`Student::count_` 访问。用于计数、单例模式。\n'
            + '- **mutable 成员**：`mutable int cache_;` 即使 const 方法也能修改，'
            + '用于缓存、互斥锁等"逻辑 const"场景。\n'
            + '- **explicit 关键字**：`explicit T(int);` 禁止隐式转换，'
            + '防止 `T t = 5;` 这种意外构造。单参数构造函数建议加 explicit。\n'
            + '- **Pimpl 惯用法**：`class A { struct Impl; unique_ptr<Impl> pimpl_; };` '
            + '把实现细节隐藏在 .cpp 中，减少头文件依赖，加速编译。',
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
            '## 概念详解\n\n'
            + '构造函数（constructor）在对象创建时**自动调用**，用于初始化成员变量。'
            + '与类同名，无返回类型。`Point(int x, int y) : x(x), y(y) {}` 使用初始化列表，'
            + '比在函数体内赋值更高效（直接初始化而非先默认构造再赋值）。\n\n'
            + '析构函数（destructor）在对象销毁时**自动调用**，用于释放资源。'
            + '名为 `~ClassName()`，无参数无返回值。如果类管理了动态内存、文件句柄等资源，'
            + '必须在析构函数中释放。这是 RAII（资源获取即初始化）模式的基础。\n\n'
            + '**为什么需要构造/析构函数？**\n'
            + '- **保证初始化**：C 中 `Student s;` 后 s.name 是垃圾值，'
            + 'C++ 构造函数保证对象创建后处于有效状态\n'
            + '- **自动资源管理**：析构函数保证对象销毁时释放资源，'
            + '即使异常抛出也会调用（栈展开），避免泄漏\n'
            + '- **不变式维护**：构造函数中校验参数，'
            + '保证对象生命周期内始终满足不变式（如 score ∈ [0, 100]）\n'
            + '- **统一接口**：使用者只需 `Student s("小明", 95);`，'
            + '不需要调用一堆 init 函数\n\n'
            + '**拷贝构造函数**在对象以值传递或以同类对象初始化时调用：`Point p2(p1)`。'
            + '默认的拷贝构造函数执行浅拷贝——逐成员复制。如果类有指针成员，'
            + '浅拷贝会导致两个对象指向同一块内存，析构时 double free。'
            + '这时需要自定义拷贝构造函数实现深拷贝。\n\n'
            + '## 语法说明\n\n'
            + '**构造函数种类：**\n\n'
            + '| 类型 | 语法 | 用途 |\n'
            + '| --- | --- | --- |\n'
            + '| 默认构造 | `T()` | 无参构造 |\n'
            + '| 参数化构造 | `T(args...)` | 带参初始化 |\n'
            + '| 拷贝构造 | `T(const T&)` | 用另一对象初始化 |\n'
            + '| 移动构造（C++11）| `T(T&&)` | 移动资源 |\n'
            + '| 委托构造（C++11）| `T() : T(0) {}` | 调用另一构造函数 |\n'
            + '| explicit 构造 | `explicit T(int)` | 禁止隐式转换 |\n\n'
            + '**初始化列表：**\n\n'
            + '```cpp\n'
            + 'class Point {\n'
            + '    int x_, y_;\n'
            + '    const int id_;       // const 成员必须用初始化列表\n'
            + '    int &ref_;           // 引用成员必须用初始化列表\n'
            + 'public:\n'
            + '    Point(int x, int y, int id) : x_(x), y_(y), id_(id), ref_(x_) {}\n'
            + '    // 注意：初始化顺序由声明顺序决定，不是列表顺序！\n'
            + '};\n'
            + '```\n\n'
            + '**= default 和 = delete（C++11）：**\n\n'
            + '```cpp\n'
            + 'class A {\n'
            + 'public:\n'
            + '    A() = default;                // 使用编译器生成的默认构造\n'
            + '    A(const A&) = delete;         // 禁止拷贝（如单例、IO 类）\n'
            + '    A& operator=(const A&) = delete;\n'
            + '};\n'
            + '```\n\n'
            + '**Rule of Three/Five/Zero：**\n\n'
            + '| 法则 | 内容 |\n'
            + '| --- | --- |\n'
            + '| Rule of Three | 自定义析构/拷贝构造/拷贝赋值中任一个，三个都要自定义 |\n'
            + '| Rule of Five（C++11）| 加上移动构造和移动赋值 |\n'
            + '| Rule of Zero | 用智能指针管理资源，无需自定义任何特殊成员 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：构造函数与初始化列表**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + 'class Student {\n'
            + '    string name_;\n'
            + '    int age_;\n'
            + 'public:\n'
            + '    // 委托构造：复用另一个构造函数\n'
            + '    Student() : Student("未命名", 0) {}\n'
            + '    Student(const string &name, int age) : name_(name), age_(age) {\n'
            + '        if (age < 0) age_ = 0;\n'
            + '    }\n'
            + '    void print() const { cout << name_ << ", " << age_ << "岁\\n"; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    Student s1("小明", 20);\n'
            + '    Student s2;            // 默认构造\n'
            + '    s1.print();  // 小明, 20岁\n'
            + '    s2.print();  // 未命名, 0岁\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：析构函数 + RAII 资源管理**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + 'class Logger {\n'
            + '    string name_;\n'
            + 'public:\n'
            + '    Logger(const string &n) : name_(n) {\n'
            + '        cout << "[" << name_ << "] 开始\\n";\n'
            + '    }\n'
            + '    ~Logger() {\n'
            + '        cout << "[" << name_ << "] 结束\\n";\n'
            + '    }\n'
            + '};\n\n'
            + 'void func() {\n'
            + '    Logger local("局部");\n'
            + '    // 函数返回时 local 自动析构\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    Logger a("A");\n'
            + '    {\n'
            + '        Logger b("B");\n'
            + '    }  // b 离开作用域，立即析构\n'
            + '    func();\n'
            + '    cout << "main 结束\\n";\n'
            + '    // a 在 main 返回时析构\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：深拷贝（Rule of Three）**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <cstring>\n'
            + 'using namespace std;\n\n'
            + 'class Buffer {\n'
            + '    char *data_;\n'
            + '    size_t size_;\n'
            + 'public:\n'
            + '    // 构造函数\n'
            + '    Buffer(const char *s) : size_(strlen(s) + 1) {\n'
            + '        data_ = new char[size_];\n'
            + '        strcpy(data_, s);\n'
            + '    }\n'
            + '    // 拷贝构造（深拷贝）\n'
            + '    Buffer(const Buffer &other) : size_(other.size_) {\n'
            + '        data_ = new char[size_];\n'
            + '        strcpy(data_, other.data_);\n'
            + '    }\n'
            + '    // 拷贝赋值（深拷贝）\n'
            + '    Buffer& operator=(const Buffer &other) {\n'
            + '        if (this != &other) {  // 防自赋值\n'
            + '            delete[] data_;\n'
            + '            size_ = other.size_;\n'
            + '            data_ = new char[size_];\n'
            + '            strcpy(data_, other.data_);\n'
            + '        }\n'
            + '        return *this;\n'
            + '    }\n'
            + '    // 析构函数\n'
            + '    ~Buffer() { delete[] data_; }\n'
            + '    void print() const { cout << data_ << "\\n"; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    Buffer b1("Hello");\n'
            + '    Buffer b2 = b1;   // 调用拷贝构造\n'
            + '    b2.print();       // Hello\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **初始化列表比赋值高效**：`T() : member_(args)` 直接构造，'
            + '`T() { member_ = args; }` 是先默认构造再赋值。const、引用成员必须用初始化列表。\n'
            + '2. **初始化顺序由声明顺序决定**：`T() : b_(1), a_(b_) {}` 中 a_ 可能未定义，'
            + '因为 a_ 先声明就先初始化（此时 b_ 还没初始化）。\n'
            + '3. **析构顺序与构造相反**：对象析构顺序是构造的逆序（栈 LIFO）。'
            + '成员变量的析构顺序也是声明顺序的逆序。\n'
            + '4. **virtual 析构函数**：作为基类时析构函数应为 virtual，'
            + '否则 `delete base_ptr` 不会调用派生类析构，导致资源泄漏。'
            + '规则：有虚函数的类必虚析构。\n'
            + '5. **浅拷贝陷阱**：默认拷贝构造对指针成员只拷贝地址，'
            + '两个对象析构会 double free。有指针成员的类必须实现深拷贝或用智能指针。\n'
            + '6. **防自赋值**：`operator=` 中要先检查 `if (this != &other)`，'
            + '否则 `a = a` 可能先 delete 自己的 data 再拷贝已删除的数据。\n'
            + '7. **异常安全**：构造函数抛异常时析构函数不会调用，'
            + '已构造的成员会析构，但裸指针资源会泄漏。用智能指针或 RAII 包装解决。\n'
            + '8. **单参数构造加 explicit**：`explicit String(const char*)` 防止 '
            + '`String s = "hi"` 的隐式转换，避免意外调用 `func("hi")` 实际调 `func(String("hi"))`。\n\n'
            + '## 实际应用\n\n'
            + '- **STL 容器**：vector 的构造函数管理动态数组，析构函数释放内存\n'
            + '- **文件类**：`std::ifstream` 构造时打开文件，析构时自动关闭\n'
            + '- **锁类**：`std::lock_guard` 构造时加锁，析构时解锁，保证异常安全\n'
            + '- **智能指针**：`unique_ptr` 构造时接管裸指针，析构时 delete\n'
            + '- **数据库连接**：Connection 构造时连接数据库，析构时断开\n'
            + '- **游戏对象**：Unity 的 GameObject 构造时初始化组件，销毁时清理资源\n\n'
            + '## 扩展知识\n\n'
            + '- **移动构造（C++11）**：`T(T&& other)` 偷取 other 的资源（指针置空），'
            + '避免深拷贝。`std::vector` 临时对象返回时用移动构造零拷贝。\n'
            + '- **完美转发**：`template<typename T> void f(T&& x) { g(forward<T>(x)); }` '
            + '保持 x 的左右值属性转发，是 make_unique、emplace_back 的基础。\n'
            + '- **RAII**：构造获取、析构释放，是 C++ 资源管理的核心思想。'
            + '替代了 C 的 malloc/free、fopen/fclose 手动管理。\n'
            + '- **智能指针**：unique_ptr（独占）、shared_ptr（共享引用计数）、'
            + 'weak_ptr（不增加计数，防循环引用）。现代 C++ 几乎不用裸 new/delete。\n'
            + '- **构造函数模板**：`template<typename U> T(const U&)` 允许从其他类型构造，'
            + '如 `string(const char*)`、`string(string_view)`。\n'
            + '- **聚合初始化**：`Point p{3, 4};` 直接按成员顺序初始化，'
            + 'C++20 还支持 designated initializer `Point p{.x = 3, .y = 4};`。',
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
            '## 概念详解\n\n'
            + '继承（inheritance）是面向对象的核心特性，允许新类**复用已有类的代码**。'
            + '`class Derived : public Base { ... }` 表示 Derived 继承 Base。'
            + 'Derived 自动获得 Base 的成员（public 和 protected），可以添加新成员或覆盖已有方法。\n\n'
            + '**为什么需要继承？**\n'
            + '- **代码复用**：Dog 继承 Animal，复用 eat/sleep 方法，不用重写\n'
            + '- **层次建模**：Animal → Mammal → Dog 表达"狗是哺乳动物是动物"的 is-a 关系\n'
            + '- **多态基础**：基类指针指向派生类对象，调用虚函数实现运行时多态\n'
            + '- **统一接口**：所有 Shape 子类都有 area() 方法，调用者无需知道具体类型\n\n'
            + '**继承的三种方式：**\n\n'
            + '| 继承方式 | Base public 成员 | Base protected 成员 | Base private 成员 | 关系 |\n'
            + '| --- | --- | --- | --- | --- |\n'
            + '| public 继承 | 在 Derived 中仍为 public | 仍为 protected | 不可访问 | is-a（最常用）|\n'
            + '| protected 继承 | 在 Derived 中变为 protected | 仍为 protected | 不可访问 | 实现复用 |\n'
            + '| private 继承 | 在 Derived 中变为 private | 变为 private | 不可访问 | has-a（用组合替代）|\n\n'
            + '绝大多数情况下使用 public 继承。private 继承可用组合（成员变量）替代，更清晰。\n\n'
            + '## 语法说明\n\n'
            + '**继承定义：**\n\n'
            + '```cpp\n'
            + 'class Base {\n'
            + 'protected:           // 派生类可访问\n'
            + '    int protected_data_;\n'
            + 'public:\n'
            + '    void base_method();\n'
            + '};\n'
            + '\n'
            + 'class Derived : public Base {  // public 继承\n'
            + 'public:\n'
            + '    void derived_method() {\n'
            + '        protected_data_ = 10;  // 可访问 protected 成员\n'
            + '        // private_data_ = 10;  // 不可访问 Base 的 private\n'
            + '    }\n'
            + '};\n'
            + '```\n\n'
            + '**构造/析构顺序：**\n\n'
            + '```cpp\n'
            + 'class Derived : public Base {\n'
            + 'public:\n'
            + '    Derived(int x) : Base(x) {  // 先调基类构造\n'
            + '        // 再执行派生类构造体\n'
            + '    }\n'
            + '    ~Derived() {\n'
            + '        // 先执行派生类析构体\n'
            + '    }  // 再自动调基类析构\n'
            + '};\n'
            + '```\n\n'
            + '**方法覆盖与隐藏：**\n\n'
            + '| 操作 | 语法 | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| 隐藏基类方法 | Derived 中定义同名方法 | 基类同名方法被隐藏（不论参数）|\n'
            + '| 调用被隐藏的方法 | `d.Base::method()` | 显式指定作用域 |\n'
            + '| 虚函数覆盖 | 基类加 virtual，Derived 加 override | 运行时多态 |\n'
            + '| 禁止覆盖（C++11）| `void f() final;` | 派生类不能再覆盖 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：基本继承 + protected 成员**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + 'class Animal {\n'
            + 'protected:\n'
            + '    string name_;\n'
            + 'public:\n'
            + '    Animal(const string &n) : name_(n) {}\n'
            + '    void eat() { cout << name_ << " 吃东西\\n"; }\n'
            + '    void sleep() { cout << name_ << " 睡觉\\n"; }\n'
            + '};\n\n'
            + 'class Dog : public Animal {\n'
            + 'public:\n'
            + '    Dog(const string &n) : Animal(n) {}\n'
            + '    void bark() { cout << name_ << " 汪汪!\\n"; }  // 可访问 protected name_\n'
            + '    void fetch() { cout << name_ << " 接飞盘\\n"; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    Dog d("小黑");\n'
            + '    d.eat();     // 继承自 Animal\n'
            + '    d.sleep();   // 继承自 Animal\n'
            + '    d.bark();    // Dog 自己的\n'
            + '    d.fetch();   // Dog 自己的\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：多层继承 + 构造链**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + 'class Shape {\n'
            + 'protected:\n'
            + '    string name_;\n'
            + 'public:\n'
            + '    Shape(const string &n) : name_(n) {\n'
            + '        cout << "  Shape 构造\\n";\n'
            + '    }\n'
            + '    virtual ~Shape() { cout << "  Shape 析构\\n"; }\n'
            + '    virtual double area() const = 0;  // 纯虚函数\n'
            + '};\n\n'
            + 'class Circle : public Shape {\n'
            + '    double radius_;\n'
            + 'public:\n'
            + '    Circle(double r) : Shape("圆"), radius_(r) {\n'
            + '        cout << "  Circle 构造\\n";\n'
            + '    }\n'
            + '    ~Circle() { cout << "  Circle 析构\\n"; }\n'
            + '    double area() const override {\n'
            + '        return 3.14159 * radius_ * radius_;\n'
            + '    }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    cout << "创建 Circle:\\n";\n'
            + '    Circle c(5.0);\n'
            + '    cout << "面积 = " << c.area() << "\\n";\n'
            + '    cout << "销毁 Circle:\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：方法隐藏与 using 声明**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + 'using namespace std;\n\n'
            + 'class Base {\n'
            + 'public:\n'
            + '    void f() { cout << "Base::f()\\n"; }\n'
            + '    void f(int x) { cout << "Base::f(" << x << ")\\n"; }\n'
            + '};\n\n'
            + 'class Derived : public Base {\n'
            + 'public:\n'
            + '    void f() { cout << "Derived::f()\\n"; }  // 隐藏 Base 的所有 f\n'
            + '    using Base::f;  // 把 Base 的 f 重载引入 Derived\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    Derived d;\n'
            + '    d.f();        // Derived::f()\n'
            + '    d.f(42);      // Base::f(42)（因 using 引入）\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **基类析构应为 virtual**：`delete base_ptr` 时若析构非 virtual，'
            + '只调用基类析构，派生类资源泄漏。规则：有虚函数的类必虚析构。\n'
            + '2. **不要在构造/析构中调虚函数**：构造时派生类部分还没构造，'
            + '虚函数调的是基类版本；析构时派生类已析构，同样问题。\n'
            + '3. **继承层次不宜过深**：超过 3 层的继承难以维护，'
            + '修改基类可能影响所有派生类。优先用组合（has-a）替代继承。\n'
            + '4. **隐藏 vs 覆盖**：派生类同名方法（非 virtual）隐藏基类所有同名重载，'
            + '可能导致意外。用 `using Base::f;` 引入，或用 override 显式覆盖虚函数。\n'
            + '5. **private 成员不可访问**：即使派生类也不能访问基类 private 成员。'
            + '需要派生类访问的用 protected，但 protected 数据破坏封装，'
            + '建议用 protected 方法访问。\n'
            + '6. **菱形继承**：D 继承 B 和 C，B、C 都继承 A，D 中 A 的成员有两份。'
            + '用虚继承 `class B : virtual public A` 解决，但虚继承复杂且有性能开销。\n'
            + '7. **is-a vs has-a**：is-a（狗是动物）用 public 继承；'
            + 'has-a（车有引擎）用成员变量组合，不要用 private 继承。\n'
            + '8. **final 关键字**：`class A final {};` 禁止继承，'
            + '`void f() final;` 禁止覆盖。用于性能优化（去虚化）和设计约束。\n\n'
            + '## 实际应用\n\n'
            + '- **GUI 框架**：Qt 的 QWidget → QPushButton → QCheckBox，'
            + '派生类添加特定绘制和事件处理\n'
            + '- **游戏引擎**：Unity 的 MonoBehaviour → PlayerController、EnemyAI，'
            + '复用 Update/Start 生命周期\n'
            + '- **STL 迭代器**：`std::istream_iterator` 继承迭代器基类，'
            + '实现输入迭代器接口\n'
            + '- **异常体系**：`std::exception` → `std::runtime_error` → 自定义异常，'
            + 'catch (const std::exception&) 可捕获所有标准异常\n'
            + '- **设计模式**：模板方法、策略、工厂等模式基于继承\n'
            + '- **业务系统**：User → AdminUser、RegularUser，复用认证逻辑，扩展权限\n\n'
            + '## 扩展知识\n\n'
            + '- **虚继承**：解决菱形继承，`class B : virtual public A`，'
            + 'A 的成员在 D 中只有一份。但虚继承有运行时开销（虚基类指针），慎用。\n'
            + '- **CRTP（奇异递归模板）**：`template<typename D> class Base { D& self() {...} };` '
            + '实现静态多态，编译期分发，零运行时开销。Eigen、ATL 用此技术。\n'
            + '- **多继承**：`class D : public A, public B {};` 一个类继承多个基类，'
            + '但容易导致复杂度爆炸，Java/C# 直接禁用了多继承（只允许多接口）。\n'
            + '- **接口类**：C++ 用纯虚函数类模拟接口 '
            + '（`class IComparable { virtual int compare(const T&) = 0; };`），'
            + '类似 Java interface。\n'
            + '- **mixin**：通过模板"混入"功能，`class MyList : public List<int>, public Sortable<MyList> {};`，'
            + '比多继承更灵活。\n'
            + '- **组合优于继承**：Effective C++ 第 32 条："确定你的 public 继承模塑出 is-a 关系"。'
            + '如果关系不是 is-a，用组合（成员变量）。'
            + '现代设计原则倾向组合 + 接口，减少继承层次。',
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
            '## 概念详解\n\n'
            + '多态（polymorphism）是面向对象最强大的特性，意为"多种形态"。'
            + '通过 `virtual` 虚函数，基类指针调用派生类的方法，'
            + '实现"同一接口，不同行为"——调用 `shape->draw()` 时，'
            + 'shape 指向 Circle 就画圆，指向 Square 就画方。\n\n'
            + '**多态的三种形式：**\n\n'
            + '| 类型 | 机制 | 示例 |\n'
            + '| --- | --- | --- |\n'
            + '| 静态多态 | 函数重载、模板 | `max(1, 2)` / `max(1.5, 2.5)` |\n'
            + '| 动态多态 | 虚函数 + 基类指针 | `shape->draw()` 运行时决定 |\n'
            + '| 参数多态 | 模板（泛型）| `vector<int>` / `vector<string>` |\n\n'
            + '本课聚焦**动态多态**，通过虚函数实现。\n\n'
            + '**虚函数表（vtable）机制：**\n'
            + '- 每个有虚函数的类，编译器生成一个 vtable（函数指针数组）\n'
            + '- 每个对象内部存有 vptr，指向所属类的 vtable\n'
            + '- 调用虚函数时，通过 vptr 查 vtable 找到实际函数地址\n'
            + '- 这使得调用比普通函数慢一点（间接寻址），但实现了运行时多态\n\n'
            + '**纯虚函数与抽象类：**\n'
            + '`virtual void draw() = 0` 没有实现，强制派生类必须覆盖。'
            + '含纯虚函数的类是**抽象类**，不能实例化。'
            + '抽象类定义接口，派生类提供实现——这是面向对象设计的核心模式。\n\n'
            + '## 语法说明\n\n'
            + '**虚函数声明与覆盖：**\n\n'
            + '```cpp\n'
            + 'class Base {\n'
            + 'public:\n'
            + '    virtual void f() { cout << "Base"; }  // 虚函数\n'
            + '    virtual void g() = 0;                   // 纯虚函数\n'
            + '    virtual void h() final;                  // 禁止覆盖\n'
            + '    virtual ~Base() {}                       // 虚析构（重要！）\n'
            + '};\n'
            + '\n'
            + 'class Derived : public Base {\n'
            + 'public:\n'
            + '    void f() override { cout << "Derived"; }  // 覆盖（C++11 override）\n'
            + '    void g() override { cout << "Impl"; }      // 实现纯虚\n'
            + '    // void h() override;  // 错误：final 禁止覆盖\n'
            + '};\n'
            + '```\n\n'
            + '**override 关键字（C++11）：**\n'
            + '- 显式表明覆盖基类虚函数\n'
            + '- 编译器检查签名是否匹配（防止笔误导致的"隐藏"而非"覆盖"）\n'
            + '- 强烈建议所有覆盖都加 override\n\n'
            + '**虚函数 vs 非虚函数：**\n\n'
            + '| 特性 | 虚函数 | 非虚函数 |\n'
            + '| --- | --- | --- |\n'
            + '| 调用绑定 | 运行时（动态）| 编译时（静态）|\n'
            + '| 基类指针调派生类 | 调派生类版本 | 调基类版本 |\n'
            + '| 性能 | 略慢（vtable 查找）| 快（直接调用）|\n'
            + '| 灵活性 | 高（可覆盖）| 低（不可覆盖）|\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：虚函数 + 动态绑定**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <vector>\n'
            + '#include <memory>\n'
            + 'using namespace std;\n\n'
            + 'class Shape {\n'
            + 'public:\n'
            + '    virtual void draw() const { cout << "画图形\\n"; }\n'
            + '    virtual double area() const = 0;  // 纯虚\n'
            + '    virtual ~Shape() = default;\n'
            + '};\n\n'
            + 'class Circle : public Shape {\n'
            + '    double r_;\n'
            + 'public:\n'
            + '    Circle(double r) : r_(r) {}\n'
            + '    void draw() const override { cout << "画圆形 (r=" << r_ << ")\\n"; }\n'
            + '    double area() const override { return 3.14159 * r_ * r_; }\n'
            + '};\n\n'
            + 'class Square : public Shape {\n'
            + '    double side_;\n'
            + 'public:\n'
            + '    Square(double s) : side_(s) {}\n'
            + '    void draw() const override { cout << "画方形 (边=" << side_ << ")\\n"; }\n'
            + '    double area() const override { return side_ * side_; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    vector<unique_ptr<Shape>> shapes;\n'
            + '    shapes.push_back(make_unique<Circle>(5));\n'
            + '    shapes.push_back(make_unique<Square>(4));\n'
            + '    \n'
            + '    for (const auto &s : shapes) {\n'
            + '        s->draw();                          // 动态绑定\n'
            + '        cout << "  面积 = " << s->area() << "\\n";\n'
            + '    }\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：抽象类 + 接口设计**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + '// 抽象类：定义接口\n'
            + 'class Serializable {\n'
            + 'public:\n'
            + '    virtual string serialize() const = 0;\n'
            + '    virtual void deserialize(const string &data) = 0;\n'
            + '    virtual ~Serializable() = default;\n'
            + '};\n\n'
            + 'class User : public Serializable {\n'
            + '    string name_;\n'
            + '    int age_;\n'
            + 'public:\n'
            + '    User(const string &n, int a) : name_(n), age_(a) {}\n'
            + '    string serialize() const override {\n'
            + '        return name_ + ":" + to_string(age_);\n'
            + '    }\n'
            + '    void deserialize(const string &data) override {\n'
            + '        auto pos = data.find(\':\');\n'
            + '        name_ = data.substr(0, pos);\n'
            + '        age_ = stoi(data.substr(pos + 1));\n'
            + '    }\n'
            + '    void print() const { cout << name_ << ", " << age_ << "岁\\n"; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    User u("小明", 20);\n'
            + '    string s = u.serialize();\n'
            + '    cout << "序列化: " << s << "\\n";\n'
            + '    \n'
            + '    User u2("", 0);\n'
            + '    u2.deserialize(s);\n'
            + '    u2.print();\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：虚析构函数必要性演示**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + 'using namespace std;\n\n'
            + 'class BaseBad {\n'
            + 'public:\n'
            + '    ~BaseBad() { cout << "  BaseBad 析构\\n"; }  // 非虚析构！\n'
            + '};\n'
            + 'class DerivedBad : public BaseBad {\n'
            + '    int *data_;\n'
            + 'public:\n'
            + '    DerivedBad() : data_(new int[100]) { cout << "  DerivedBad 构造\\n"; }\n'
            + '    ~DerivedBad() { delete[] data_; cout << "  DerivedBad 析构\\n"; }\n'
            + '};\n\n'
            + 'class BaseGood {\n'
            + 'public:\n'
            + '    virtual ~BaseGood() { cout << "  BaseGood 析构\\n"; }  // 虚析构\n'
            + '};\n'
            + 'class DerivedGood : public BaseGood {\n'
            + '    int *data_;\n'
            + 'public:\n'
            + '    DerivedGood() : data_(new int[100]) {}\n'
            + '    ~DerivedGood() { delete[] data_; cout << "  DerivedGood 析构\\n"; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    cout << "非虚析构（泄漏！）：\\n";\n'
            + '    BaseBad *b1 = new DerivedBad();\n'
            + '    delete b1;  // 只调 BaseBad 析构，DerivedBad 析构不调，data_ 泄漏\n'
            + '    \n'
            + '    cout << "虚析构（正确）：\\n";\n'
            + '    BaseGood *b2 = new DerivedGood();\n'
            + '    delete b2;  // 先 DerivedGood 析构，再 BaseGood 析构\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **有虚函数必虚析构**：否则 `delete base_ptr` 不调派生类析构，资源泄漏。'
            + '这是 C++ 高频面试题。\n'
            + '2. **override 检查签名**：`void f() const override` 若基类无对应 const 版本，'
            + '编译器报错。这能防止"以为覆盖了实际是隐藏"的隐蔽 bug。\n'
            + '3. **不要在构造/析构中调虚函数**：构造时派生类还没构造，'
            + '虚函数调基类版本（不是派生类）；析构时派生类已析构，同样问题。\n'
            + '4. **虚函数有运行时开销**：每次调用查 vtable（间接寻址），'
            + '且编译器无法内联虚函数。性能敏感场景可用 CRTP 实现静态多态。\n'
            + '5. **默认参数不参与多态**：`base_ptr->f()` 调派生类 f() 但用基类的默认参数值。'
            + '避免在虚函数中用默认参数。\n'
            + '6. **抽象类不能实例化**：`Animal a;` 编译错误，'
            + '只能 `Animal *p = new Dog();`。抽象类只能作接口和基类。\n'
            + '7. **override 与 overload 区别**：override 是子类覆盖父类虚函数（同签名）；'
            + 'overload 是同作用域同名不同参数（重载）。两者无关。\n'
            + '8. **RTTI（运行时类型信息）**：`dynamic_cast<Derived*>(base_ptr)` '
            + '安全向下转型，失败返回 NULL。`typeid(obj).name()` 获取类型名。'
            + '需开启 RTTI（默认开），有性能开销。\n\n'
            + '## 实际应用\n\n'
            + '- **GUI 框架**：所有控件继承 Widget，draw() 是虚函数，'
            + '窗口重绘时遍历子控件调 draw()，每个控件画自己\n'
            + '- **游戏引擎**：GameObject 有 virtual update()，'
            + 'Player、Enemy、Bullet 各自实现更新逻辑\n'
            + '- **插件系统**：定义 IPlugin 接口，宿主程序通过 IPlugin* 调用插件，'
            + '插件动态加载并实现接口\n'
            + '- **序列化框架**：protobuf 的 Message 是抽象类，'
            + '每个消息类型继承并实现 serialize/deserialize\n'
            + '- **设计模式**：策略、状态、命令、观察者等模式都基于多态\n'
            + '- **STL 多态**：`std::exception` 体系，catch (const exception&) 捕获所有子类\n\n'
            + '## 扩展知识\n\n'
            + '- **final 关键字**：`void f() final;` 禁止派生类覆盖；'
            + '`class A final {};` 禁止继承。编译器可去虚化（devirtualization）优化性能。\n'
            + '- **纯虚函数可以有实现**：`void f() = 0; void Base::f() { ... }`，'
            + '派生类可通过 `Base::f()` 调用。用于提供默认实现但强制派生类显式选择。\n'
            + '- **多重继承的虚函数**：多个基类有同名虚函数时，'
            + '派生类一个 override 同时覆盖所有基类版本（除非用 using 区分）。\n'
            + '- **虚函数表的内存布局**：对象首 8 字节是 vptr，'
            + '指向 .rodata 段的 vtable。`sizeof(WithVirtual) > sizeof(WithoutVirtual)`。\n'
            + '- **CRTP（静态多态）**：`template<typename D> class Base { void f() { static_cast<D*>(this)->f_impl(); } };` '
            + '编译期确定调用，零开销，但失去运行时灵活性。\n'
            + '- **std::function（类型擦除多态）**：`function<void(int)>` 可存储 '
            + 'lambda、函数指针、仿函数，是一种不依赖继承的多态。'
            + 'STL 算法的回调参数常用此技术。\n'
            + '- **协变返回类型**：派生类 override 可以返回基类返回类型的派生类指针，'
            + '如 `Base* clone()` 在 Derived 中返回 `Derived*`。',
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
            '## 概念详解\n\n'
            + '`std::vector` 是 C++ STL 最常用的容器，相当于**可自动扩容的动态数组**。'
            + '它封装了底层的内存管理，使用时不需要手动 malloc/free，'
            + '析构时自动释放内存（RAII）。`#include <vector>` 引入头文件。\n\n'
            + '**为什么用 vector 而不是裸数组？**\n'
            + '- **自动扩容**：不需要预先知道大小，push_back 自动增长\n'
            + '- **内存安全**：RAII 自动释放，不会忘记 free 导致泄漏\n'
            + '- **边界检查**：`at(i)` 越界抛异常（`[]` 不检查，性能优先）\n'
            + '- **STL 算法兼容**：sort、find、accumulate 等算法直接可用\n'
            + '- **可拷贝可赋值**：`v2 = v1` 深拷贝，裸数组不行\n\n'
            + '**vector vs C 数组 vs list：**\n\n'
            + '| 特性 | C 数组 | vector | list |\n'
            + '| --- | --- | --- | --- |\n'
            + '| 大小 | 固定 | 动态 | 动态 |\n'
            + '| 内存 | 连续 | 连续 | 不连续 |\n'
            + '| 随机访问 | O(1) | O(1) | O(n) |\n'
            + '| 尾部增删 | N/A | O(1) 摊销 | O(1) |\n'
            + '| 中间增删 | O(n) | O(n) | O(1) |\n'
            + '| 缓存友好 | 高 | 高 | 低 |\n'
            + '| 内存管理 | 手动 | RAII | RAII |\n\n'
            + '绝大多数场景用 vector，需要频繁中间增删才用 list。\n\n'
            + '## 语法说明\n\n'
            + '**核心方法：**\n\n'
            + '| 方法 | 复杂度 | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| `push_back(x)` | O(1) 摊销 | 尾部添加 |\n'
            + '| `pop_back()` | O(1) | 尾部删除 |\n'
            + '| `emplace_back(args...)` | O(1) 摊销 | 原地构造（比 push_back 高效）|\n'
            + '| `size()` | O(1) | 元素个数 |\n'
            + '| `empty()` | O(1) | 是否为空 |\n'
            + '| `operator[](i)` | O(1) | 访问（不检查越界）|\n'
            + '| `at(i)` | O(1) | 访问（越界抛 out_of_range）|\n'
            + '| `front()` / `back()` | O(1) | 首尾元素 |\n'
            + '| `begin()` / `end()` | O(1) | 迭代器 |\n'
            + '| `insert(pos, x)` | O(n) | 任意位置插入 |\n'
            + '| `erase(pos)` | O(n) | 任意位置删除 |\n'
            + '| `clear()` | O(n) | 清空 |\n'
            + '| `reserve(n)` | O(n) | 预留容量（不改变 size）|\n'
            + '| `resize(n)` | O(n) | 改变 size（多则填默认值）|\n'
            + '| `shrink_to_fit()` | O(n) | 释放多余容量 |\n'
            + '| `data()` | O(1) | 底层数组指针（C 接口交互）|\n\n'
            + '**size vs capacity：**\n'
            + '- size：当前元素个数\n'
            + '- capacity：已分配的容量（size ≤ capacity）\n'
            + '- 扩容时机：size > capacity 时，分配新的 capacity（通常 2 倍）\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：基本操作与遍历**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <vector>\n'
            + 'using namespace std;\n\n'
            + 'int main() {\n'
            + '    vector<int> v;\n'
            + '    v.push_back(10);\n'
            + '    v.push_back(20);\n'
            + '    v.emplace_back(30);  // 原地构造，比 push_back 高效\n'
            + '    \n'
            + '    cout << "size=" << v.size() << " capacity=" << v.capacity() << "\\n";\n'
            + '    \n'
            + '    // 三种遍历方式\n'
            + '    for (size_t i = 0; i < v.size(); i++) cout << v[i] << " ";  // 索引\n'
            + '    cout << "\\n";\n'
            + '    for (auto it = v.begin(); it != v.end(); ++it) cout << *it << " ";  // 迭代器\n'
            + '    cout << "\\n";\n'
            + '    for (const auto &x : v) cout << x << " ";  // 范围 for（推荐）\n'
            + '    cout << "\\n";\n'
            + '    \n'
            + '    v.pop_back();\n'
            + '    cout << "pop 后 size=" << v.size() << "\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：reserve 性能优化 + emplace vs push**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <vector>\n'
            + '#include <string>\n'
            + '#include <chrono>\n'
            + 'using namespace std;\n\n'
            + 'struct User {\n'
            + '    string name;\n'
            + '    int age;\n'
            + '    User(string n, int a) : name(move(n)), age(a) {}\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    const int N = 100000;\n'
            + '    \n'
            + '    // 不 reserve：多次扩容，慢\n'
            + '    auto t1 = chrono::high_resolution_clock::now();\n'
            + '    vector<User> v1;\n'
            + '    for (int i = 0; i < N; i++) v1.push_back(User("name", i));\n'
            + '    auto t2 = chrono::high_resolution_clock::now();\n'
            + '    \n'
            + '    // reserve：一次分配，快\n'
            + '    vector<User> v2;\n'
            + '    v2.reserve(N);\n'
            + '    for (int i = 0; i < N; i++) v2.emplace_back("name", i);  // emplace 更高效\n'
            + '    auto t3 = chrono::high_resolution_clock::now();\n'
            + '    \n'
            + '    cout << "无 reserve: " << chrono::duration_cast<chrono::milliseconds>(t2 - t1).count() << "ms\\n";\n'
            + '    cout << "有 reserve: " << chrono::duration_cast<chrono::milliseconds>(t3 - t2).count() << "ms\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：与 C API 交互 + 二维 vector**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <vector>\n'
            + 'using namespace std;\n\n'
            + '// C API：接收 int 数组和长度\n'
            + 'void c_api_func(const int *data, size_t n) {\n'
            + '    for (size_t i = 0; i < n; i++) cout << data[i] << " ";\n'
            + '    cout << "\\n";\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    vector<int> v = {1, 2, 3, 4, 5};\n'
            + '    \n'
            + '    // 与 C API 交互：data() 返回底层数组指针\n'
            + '    c_api_func(v.data(), v.size());\n'
            + '    \n'
            + '    // 二维 vector（矩阵）\n'
            + '    vector<vector<int>> matrix(3, vector<int>(4, 0));  // 3x4 全 0\n'
            + '    matrix[0][0] = 1;\n'
            + '    matrix[1][2] = 5;\n'
            + '    for (const auto &row : matrix) {\n'
            + '        for (int x : row) cout << x << " ";\n'
            + '        cout << "\\n";\n'
            + '    }\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **迭代器失效**：push_back 触发扩容时，所有迭代器、指针、引用失效。'
            + 'insert/erase 也会使相关位置迭代器失效。操作后要重新获取迭代器。\n'
            + '2. **at vs operator[]**：`v.at(i)` 越界抛 `out_of_range` 异常（安全），'
            + '`v[i]` 越界是未定义行为（可能段错误，可能读到垃圾值）。'
            + '调试模式用 at，发布模式用 []。\n'
            + '3. **reserve vs resize**：`reserve(100)` 只分配容量，size 不变，'
            + '元素未初始化不能访问；`resize(100)` 改变 size，'
            + '新增元素用默认值初始化，可直接访问。\n'
            + '4. **emplace_back 优于 push_back**：`push_back(User("a", 1))` '
            + '先构造临时对象再移动；`emplace_back("a", 1)` 直接在容器内构造，少一次移动。\n'
            + '5. **shrinking 不释放内存**：`clear()`/`pop_back()`/`resize(0)` 只改变 size，'
            + 'capacity 不变。要释放用 `shrink_to_fit()` 或 swap 技巧 '
            + '`vector<int>().swap(v)`。\n'
            + '6. **vector<bool> 是特化**：`vector<bool>` 每个 bool 占 1 bit，'
            + '不返回 bool& 而是代理对象。不能用 `v.data()`，'
            + '需要位数组用 `vector<char>` 或 `bitset` 替代。\n'
            + '7. **拷贝开销大**：`vector<int> v2 = v1` 深拷贝所有元素。'
            + '传参用 const 引用，返回大 vector 用移动或 RVO。\n\n'
            + '## 实际应用\n\n'
            + '- **数据缓冲区**：网络接收缓冲、文件读取缓冲，'
            + '自动扩容比固定数组灵活\n'
            + '- **数学计算**：矩阵运算 `vector<vector<double>>`，'
            + 'Eigen 底层用 vector 存储数据\n'
            + '- **配置存储**：读取 JSON/YAML 配置项存 vector，'
            + '比 C 数组安全\n'
            + '- **游戏实体列表**：所有敌人、子弹存在 vector，'
            + '每帧遍历更新和绘制（数据局部性好）\n'
            + '- **日志收集**：把日志事件存 vector，'
            + '达到阈值批量写入文件\n'
            + '- **字符串处理**：分割字符串结果存 vector<string>，'
            + '比 C 的 strtok 安全方便\n\n'
            + '## 扩展知识\n\n'
            + '- **string 是 vector<char> 的特化**：string 本质是字符容器，'
            + '有 push_back/size/iterator 等，但额外优化了字符串操作。\n'
            + '- **array（C++11）**：`std::array<int, 5>` 是固定大小数组，'
            + '比 C 数组安全（支持迭代器、size()），比 vector 无扩容开销。\n'
            + '- **deque**：双端队列，头尾都 O(1) 增删，但内存不连续。'
            + '需要头插用 deque 而非 vector。\n'
            + '- **small vector optimization**：一些实现（如 folly::small_vector）'
            + '在对象内预存少量元素，避免小 vector 的堆分配。'
            + 'LLVM 的 SmallVector 是经典实现。\n'
            + '- **STL 算法**：`sort(v.begin(), v.end())`、`find(v.begin(), v.end(), x)`、'
            + '`accumulate(v.begin(), v.end(), 0)` 等算法适用于所有 STL 容器。\n'
            + '- **C++20 ranges**：`v | views::filter(pred) | views::transform(f)` '
            + '函数式风格处理 vector，惰性求值，比手写循环更清晰。\n'
            + '- **并行算法**：`std::reduce(std::execution::par, v.begin(), v.end())` '
            + '可并行执行，利用多核加速大数据处理。',
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
            '## 概念详解\n\n'
            + '本课讲解两个核心 STL 类型：`std::map`（有序键值对）和 `std::string`（字符串类）。\n\n'
            + '**std::map** 是 C++ STL 的关联容器，基于**红黑树**实现，按 key 有序存储键值对。'
            + '`map<string, int> m` 声明 key 为 string、value 为 int 的 map。'
            + '查找、插入、删除都是 O(log n)。\n\n'
            + '**为什么需要 map？**\n'
            + '- **键值查找**：用名字查年龄、用 ID 查用户、用 URL 查路由\n'
            + '- **自动排序**：遍历时按 key 排序，适合需要顺序的场景\n'
            + '- **动态增删**：比数组灵活，比手写哈希表安全\n\n'
            + '**std::string** 是 C++ 的字符串类，封装了 C 字符串的操作。'
            + '相比 C 的 char 数组，string **自动管理内存**，不会缓冲区溢出，'
            + '支持 `+` 连接、`==` 比较、`size()` 长度、`substr` 子串、`find` 查找等操作。'
            + 'string 大大简化了字符串处理，是 C++ 最常用的类之一。\n\n'
            + '## 语法说明\n\n'
            + '**map 核心方法：**\n\n'
            + '| 方法 | 复杂度 | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| `m[key]` | O(log n) | 访问/插入（不存在则创建默认值）|\n'
            + '| `m.at(key)` | O(log n) | 访问（不存在抛 out_of_range）|\n'
            + '| `m.insert({k, v})` | O(log n) | 插入（key 存在则不覆盖）|\n'
            + '| `m.emplace(k, v)` | O(log n) | 原地构造插入 |\n'
            + '| `m.erase(key)` | O(log n) | 按 key 删除 |\n'
            + '| `m.find(key)` | O(log n) | 查找，返回迭代器 |\n'
            + '| `m.count(key)` | O(log n) | 返回 0 或 1 |\n'
            + '| `m.size()` | O(1) | 元素个数 |\n'
            + '| `m.empty()` | O(1) | 是否为空 |\n'
            + '| `m.clear()` | O(n) | 清空 |\n\n'
            + '**map vs unordered_map：**\n\n'
            + '| 特性 | map | unordered_map |\n'
            + '| --- | --- | --- |\n'
            + '| 底层 | 红黑树 | 哈希表 |\n'
            + '| 查找 | O(log n) | 平均 O(1)，最坏 O(n) |\n'
            + '| 有序性 | 按 key 排序 | 无序 |\n'
            + '| 内存 | 较省 | 较多（哈希桶）|\n'
            + '| 迭代器失效 | 删除仅失效被删元素 | rehash 时全部失效 |\n'
            + '| 适用 | 需要有序、范围查询 | 只需快速查找 |\n\n'
            + '**string 核心方法：**\n\n'
            + '| 方法 | 复杂度 | 说明 |\n'
            + '| --- | --- | --- |\n'
            + '| `s.size()` / `s.length()` | O(1) | 长度 |\n'
            + '| `s.empty()` | O(1) | 是否为空 |\n'
            + '| `s[i]` / `s.at(i)` | O(1) | 字符访问 |\n'
            + '| `s + "str"` | O(n) | 连接 |\n'
            + '| `s += "str"` | O(n) | 追加 |\n'
            + '| `s.substr(pos, len)` | O(n) | 子串 |\n'
            + '| `s.find("sub")` | O(n*m) | 查找子串，返回位置或 npos |\n'
            + '| `s.replace(pos, len, "new")` | O(n) | 替换 |\n'
            + '| `s.c_str()` | O(1) | 返回 const char*（C 接口）|\n'
            + '| `stoi(s)` / `to_string(n)` | O(n) | 字符串与数字转换 |\n'
            + '| `getline(cin, s)` | O(n) | 读一行（含空格）|\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：map 统计单词频率**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <map>\n'
            + '#include <string>\n'
            + '#include <sstream>\n'
            + 'using namespace std;\n\n'
            + 'int main() {\n'
            + '    string text = "the cat sat on the mat the cat";\n'
            + '    istringstream iss(text);\n'
            + '    map<string, int> freq;\n'
            + '    string word;\n'
            + '    while (iss >> word) {\n'
            + '        freq[word]++;  // 不存在则创建（值为 0），再 ++\n'
            + '    }\n'
            + '    // 按 key 排序输出\n'
            + '    for (const auto &[w, n] : freq) {\n'
            + '        cout << w << ": " << n << "\\n";\n'
            + '    }\n'
            + '    // 查找特定单词\n'
            + '    if (freq.count("cat")) {\n'
            + '        cout << "cat 出现了 " << freq["cat"] << " 次\\n";\n'
            + '    }\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 2：string 字符串处理**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <string>\n'
            + 'using namespace std;\n\n'
            + 'int main() {\n'
            + '    string s1 = "Hello";\n'
            + '    string s2 = " World";\n'
            + '    \n'
            + '    // 连接\n'
            + '    string s3 = s1 + s2;       // "Hello World"\n'
            + '    s3 += "!";                  // "Hello World!"\n'
            + '    cout << "连接: " << s3 << "\\n";\n'
            + '    \n'
            + '    // 长度与访问\n'
            + '    cout << "长度: " << s3.length() << "\\n";\n'
            + '    cout << "首字符: " << s3.front() << "\\n";\n'
            + '    cout << "末字符: " << s3.back() << "\\n";\n'
            + '    \n'
            + '    // 子串与查找\n'
            + '    cout << "子串: " << s3.substr(0, 5) << "\\n";  // Hello\n'
            + '    auto pos = s3.find("World");\n'
            + '    if (pos != string::npos) cout << "找到 World @ " << pos << "\\n";\n'
            + '    \n'
            + '    // 比较\n'
            + '    if (s1 == "Hello") cout << "s1 等于 Hello\\n";\n'
            + '    \n'
            + '    // 数字转换\n'
            + '    string num = to_string(42);      // "42"\n'
            + '    int n = stoi("123");              // 123\n'
            + '    cout << "num=" << num << " n=" << n << "\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '**示例 3：unordered_map 性能对比**\n\n'
            + '```cpp\n'
            + '#include <iostream>\n'
            + '#include <map>\n'
            + '#include <unordered_map>\n'
            + '#include <string>\n'
            + '#include <chrono>\n'
            + 'using namespace std;\n\n'
            + 'int main() {\n'
            + '    const int N = 1000000;\n'
            + '    \n'
            + '    // map（红黑树，O(log n)）\n'
            + '    auto t1 = chrono::high_resolution_clock::now();\n'
            + '    map<int, int> m;\n'
            + '    for (int i = 0; i < N; i++) m[i] = i * 2;\n'
            + '    auto t2 = chrono::high_resolution_clock::now();\n'
            + '    \n'
            + '    // unordered_map（哈希表，平均 O(1)）\n'
            + '    unordered_map<int, int> um;\n'
            + '    um.reserve(N);  // 预分配避免 rehash\n'
            + '    for (int i = 0; i < N; i++) um[i] = i * 2;\n'
            + '    auto t3 = chrono::high_resolution_clock::now();\n'
            + '    \n'
            + '    cout << "map 插入 " << N << " 个: " \n'
            + '         << chrono::duration_cast<chrono::milliseconds>(t2 - t1).count() << "ms\\n";\n'
            + '    cout << "unordered_map 插入 " << N << " 个: " \n'
            + '         << chrono::duration_cast<chrono::milliseconds>(t3 - t2).count() << "ms\\n";\n'
            + '    \n'
            + '    // map 有序遍历\n'
            + '    cout << "map 前 3 个: ";\n'
            + '    int cnt = 0;\n'
            + '    for (const auto &[k, v] : m) {\n'
            + '        cout << k << "=" << v << " ";\n'
            + '        if (++cnt >= 3) break;\n'
            + '    }\n'
            + '    cout << "\\n";\n'
            + '    return 0;\n'
            + '}\n'
            + '```\n\n'
            + '## 注意事项\n\n'
            + '1. **`m[key]` 会创建默认值**：访问不存在的 key 会插入默认值（int 为 0，string 为 ""），'
            + '这可能不是预期。只想查找用 `m.find(key)` 或 `m.count(key)`。\n'
            + '2. **map 的 key 必须可比较**：内置类型天然支持，自定义类型需重载 `operator<`。'
            + 'unordered_map 的 key 需要重载 `operator==` 和 `hash`。\n'
            + '3. **string 的 find 返回 npos**：`s.find("sub")` 找不到返回 `string::npos`'
            + '（一个很大的数），不能直接当 bool 用，要 `if (pos != string::npos)`。\n'
            + '4. **string 拼接性能**：`s = s1 + s2 + s3` 会产生临时对象，'
            + '多次拼接用 `s += s1; s += s2;` 或 `ostringstream` 更高效。\n'
            + '5. **c_str() 返回的指针有效期**：`const char *p = s.c_str();` 后 '
            + '若 s 被修改或销毁，p 悬空。应立即使用或拷贝。\n'
            + '6. **unordered_map 最坏 O(n)**：哈希冲突严重时退化为链表。'
            + '攻击者构造特殊 key 可导致 DoS（如 PHP 历史漏洞）。'
            + '可用 `unordered_map` 的 `reserve` 减少冲突。\n'
            + '7. **迭代时删除元素**：`for (auto it = m.begin(); it != m.end(); )` '
            + '中删除要用 `it = m.erase(it);`，不能 `m.erase(it++)`（unordered_map 可能失效）。\n'
            + '8. **map vs vector<pair>**：数据量小（< 100）且不需动态增删时，'
            + 'vector<pair> + sort 比 map 更快（缓存友好）。\n\n'
            + '## 实际应用\n\n'
            + '- **配置系统**：`map<string, string>` 存储 key-value 配置项\n'
            + '- **缓存**：`unordered_map<string, Data>` 实现内存缓存，O(1) 查找\n'
            + '- **路由表**：Web 框架用 map<string, Handler> 匹配 URL 路由\n'
            + '- **JSON 解析**：nlohmann/json 用 map 表示 JSON 对象\n'
            + '- **单词频率**：文本分析中统计词频\n'
            + '- **字符串处理**：日志解析、CSV 处理、模板替换\n'
            + '- **国际化**：`map<string, map<string, string>>` 存储多语言翻译\n\n'
            + '## 扩展知识\n\n'
            + '- **multimap**：允许重复 key 的 map，`multimap<string, int>` 一个 key 可对应多个 value\n'
            + '- **set**：只有 key 没有 value 的 map，用于去重和判断存在\n'
            + '- **string_view（C++17）**：轻量字符串视图，不拥有数据，'
            + '传参用 `string_view` 比 `const string&` 更高效（避免构造）。\n'
            + '- **C++20 ranges**：`map | views::filter(...) | views::transform(...)` '
            + '函数式处理 map\n'
            + '- **flat_map（C++23）**：底层用 vector 的有序 map，'
            + '缓存友好，查找比 map 快，但插入删除 O(n)。\n'
            + '- **robin_hood hashing**：现代哈希表实现（如 abseil flat_hash_map），'
            + '比 std::unordered_map 更快更省内存。\n'
            + '- **SSO（Small String Optimization）**：短字符串（通常 < 15 字节）'
            + '直接存在 string 对象内，不堆分配。`sizeof(string)` 通常 32 字节。',
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
            '## 概念详解\n\n'
            + '模板（template）是 C++ 泛型编程的核心机制，也是 C++ 区别于 Java/C# 等语言泛型的关键特性。'
            + '模板允许你编写"类型无关"的代码：一段代码、一套逻辑，可以作用于 int、double、string、'
            + '自定义类等任意类型，由编译器在编译期根据实际使用类型自动生成对应版本（模板实例化）。\n\n'
            + '**为什么需要模板？** 想象你要写一个 max 函数，需要支持 int、double、char、string……'
            + '不用模板就只能写多个重载（代码重复、维护困难）；用模板只需写一次：'
            + '`template <typename T> T max_val(T a, T b) { return a > b ? a : b; }`。'
            + '编译器会为每种实际调用类型生成独立的函数版本，这就是"模板实例化"。\n\n'
            + '**何时使用模板？** 当一段逻辑对多种类型行为一致（如排序、查找、容器操作、'
            + '数学运算），且这些类型支持所需操作符（如 >、<、==）时，就用模板。'
            + 'STL 的 vector、map、set、sort 全部是模板——一个 vector<int> 和 vector<string> '
            + '底层代码完全相同，只是 T 不同。\n\n'
            + '## 语法说明\n\n'
            + '### 函数模板\n\n'
            + '```cpp\n'
            + 'template <typename T>\n'
            + '返回类型 函数名(T 参数1, T 参数2) {\n'
            + '    // 函数体，T 可以是任意类型\n'
            + '}\n'
            + '```\n\n'
            + '关键字 `template` 后跟尖括号 `<...>` 声明模板参数列表。'
            + '`typename T`（或等价的 `class T`）声明一个类型参数 T。'
            + '调用时编译器通过实参推导（deduction）自动确定 T 的类型，也可以显式指定 `func<int>(...)`。\n\n'
            + '### 类模板\n\n'
            + '```cpp\n'
            + 'template <typename T>\n'
            + 'class 类名 {\n'
            + '    T member;  // 成员类型为 T\n'
            + 'public:\n'
            + '    void method(T arg);  // 方法参数为 T\n'
            + '};\n'
            + '// 使用时必须显式指定类型\n'
            + '类名<int> obj;\n'
            + '```\n\n'
            + '### 多类型参数与非类型参数\n\n'
            + '```cpp\n'
            + '// 多个类型参数\n'
            + 'template <typename K, typename V>\n'
            + 'class Map { /* ... */ };\n'
            + '\n'
            + '// 非类型参数（必须是编译期常量）\n'
            + 'template <typename T, int N>\n'
            + 'class Array {\n'
            + '    T data[N];  // N 在编译期确定数组大小\n'
            + '};\n'
            + 'Array<int, 10> arr;  // 大小为 10 的 int 数组\n'
            + '```\n\n'
            + '### 模板参数类型表\n\n'
            + '| 参数类型 | 语法 | 示例 | 说明 |\n'
            + '|---------|------|------|------|\n'
            + '| 类型参数 | `typename T` 或 `class T` | `template <typename T>` | 最常用，T 是任意类型 |\n'
            + '| 非类型参数 | `int N`、`bool B`、枚举、指针 | `template <int N>` | 编译期常量值 |\n'
            + '| 模板参数 | `template <typename> class C` | `template <template <typename> class C>` | 参数本身是模板 |\n'
            + '| 变参模板 | `typename... Args` | `template <typename... Args>` | C++11，可变数量参数 |\n\n'
            + '### 模板特化\n\n'
            + '```cpp\n'
            + '// 主模板\n'
            + 'template <typename T> T abs_val(T x) { return x < 0 ? -x : x; }\n'
            + '\n'
            + '// 全特化：为特定类型提供定制实现\n'
            + 'template <> bool abs_val<bool>(bool x) { return x; }\n'
            + '\n'
            + '// 偏特化（仅类模板支持，函数模板不支持）\n'
            + 'template <typename T>\n'
            + 'class Vector<T*> { /* 指针特化版本 */ };\n'
            + '```\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：函数模板 max_val**\n\n'
            + '```cpp\n#include <iostream>\nusing namespace std;\n\n'
            + 'template <typename T>\n'
            + 'T max_val(T a, T b) {\n'
            + '    return a > b ? a : b;  // 要求 T 支持 operator>\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    cout << max_val(3, 7) << endl;        // T=int\n'
            + '    cout << max_val(3.14, 2.71) << endl;  // T=double\n'
            + '    cout << max_val(\'a\', \'z\') << endl;    // T=char\n'
            + '    cout << max_val<string>("hi", "go") << endl;  // T=string\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + '编译器为 int、double、char、string 各生成一个 max_val 版本。'
            + '一个模板定义替代了 4 个重载函数，且支持未来任何新类型。\n\n'
            + '**示例 2：类模板通用栈**\n\n'
            + '```cpp\n#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\n'
            + 'template <typename T>\n'
            + 'class Stack {\n'
            + '    vector<T> data;\n'
            + 'public:\n'
            + '    void push(T val) { data.push_back(val); }\n'
            + '    T pop() {\n'
            + '        if (data.empty()) throw runtime_error("栈空");\n'
            + '        T val = data.back();\n'
            + '        data.pop_back();\n'
            + '        return val;\n'
            + '    }\n'
            + '    bool empty() const { return data.empty(); }\n'
            + '    size_t size() const { return data.size(); }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    Stack<int> si;\n'
            + '    si.push(1); si.push(2); si.push(3);\n'
            + '    while (!si.empty()) cout << si.pop() << " ";  // 3 2 1\n'
            + '    cout << endl;\n\n'
            + '    Stack<string> ss;\n'
            + '    ss.push("hello"); ss.push("world");\n'
            + '    while (!ss.empty()) cout << ss.pop() << " ";  // world hello\n'
            + '    cout << endl;\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + 'Stack<T> 用 vector 存储，T 可以是任意类型。'
            + 'Stack<int> 和 Stack<string> 是两个完全不同的类，编译器分别为它们生成代码。\n\n'
            + '**示例 3：多类型参数与非类型参数**\n\n'
            + '```cpp\n#include <iostream>\nusing namespace std;\n\n'
            + '// 多类型参数\n'
            + 'template <typename T, typename U>\n'
            + 'void print_pair(T first, U second) {\n'
            + '    cout << "(" << first << ", " << second << ")" << endl;\n'
            + '}\n\n'
            + '// 非类型参数：编译期固定大小的数组\n'
            + 'template <typename T, int N>\n'
            + 'class FixedArray {\n'
            + '    T data[N];\n'
            + 'public:\n'
            + '    T& operator[](int i) { return data[i]; }\n'
            + '    int size() const { return N; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    print_pair(1, "hello");      // T=int, U=const char*\n'
            + '    print_pair(3.14, 42);        // T=double, U=int\n'
            + '    print_pair("name", "value"); // T=const char*, U=const char*\n\n'
            + '    FixedArray<int, 5> arr;\n'
            + '    for (int i = 0; i < arr.size(); ++i) arr[i] = i * i;\n'
            + '    for (int i = 0; i < arr.size(); ++i) cout << arr[i] << " ";\n'
            + '    cout << endl;  // 0 1 4 9 16\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + '## 注意事项\n\n'
            + '1. **模板代码必须在使用前可见**：模板定义通常放在头文件（.h）中，'
            + '因为编译器需要看到完整定义才能实例化。不能像普通函数那样只在 .cpp 中定义、'
            + '头文件只声明（除非用 C++11 extern template 或显式实例化）。\n'
            + '2. **代码膨胀**：每种类型都会生成一份代码，可能导致可执行文件变大。'
            + '例如 vector<int>、vector<double>、vector<string> 各生成一份完整实现。\n'
            + '3. **错误信息难读**：模板错误往往很长（动辄几十行），定位困难。'
            + 'C++20 concepts 可以改善这个问题，给出更清晰的错误提示。\n'
            + '4. **实参推导限制**：函数模板可推导类型，但类模板在 C++17 之前必须显式指定类型。'
            + 'C++17 引入 CTAD（类模板实参推导）：`vector v = {1,2,3};` 自动推导为 vector<int>。\n'
            + '5. **类型必须支持所需操作**：模板要求 T 支持所用操作符。'
            + '如 max_val 需要 operator>，自定义类型必须重载 > 才能使用。\n'
            + '6. **特化与重载的优先级**：函数模板不支持偏特化，需用重载代替。'
            + '全特化优先级高于主模板，但低于重载函数。\n'
            + '7. **typename vs class 关键字**：在模板参数声明中二者完全等价，但 typename 还用于'
            + '消除依赖类型名的歧义（`typename T::iterator it;`）。\n'
            + '8. **编译期实例化，零运行时开销**：模板在编译期生成代码，'
            + '没有虚函数那样的运行时开销。这是 C++ 泛型优于 Java 泛型（类型擦除）的特点。\n\n'
            + '## 实际应用\n\n'
            + '- **STL 容器**：vector<T>、map<K,V>、set<T>、unordered_map<K,V> 全部是类模板，'
            + '一套代码支持任意类型，是模板最广泛的应用。\n'
            + '- **泛型算法**：sort、find、copy、transform 等算法作用于任意容器和迭代器，'
            + '通过模板实现算法与容器解耦。\n'
            + '- **智能指针**：unique_ptr<T>、shared_ptr<T> 用模板实现类型安全的资源管理，'
            + '避免手写 new/delete。\n'
            + '- **数学库**：Eigen、Blitz++ 用模板实现编译期矩阵维度检查，'
            + '让维度不匹配在编译期报错而非运行时崩溃。\n'
            + '- **回调与函数对象**：function<Ret(Args...)>、bind 用模板实现类型安全的回调，'
            + '替代 C 风格函数指针。\n'
            + '- **表达式模板**：Boost.uBLAS、Eigen 用模板延迟计算，'
            + '将 `a + b + c` 编译成一次循环而非三次循环，提升性能。\n'
            + '- **编译期计算**：模板元编程（TMP）可以在编译期计算斐波那契数列、阶乘等，'
            + '结果直接嵌入二进制，运行时零开销。\n\n'
            + '## 扩展知识\n\n'
            + '- **变参模板（Variadic Templates, C++11）**：`template <typename... Args>` '
            + '允许任意数量参数，配合 `sizeof...(Args)` 和递归展开，'
            + '是 make_shared、tuple、emplace_back 等的基础。\n'
            + '- **SFINAE（替换失败不是错误）**：通过 enable_if 在模板实参推导阶段'
            + '剔除不匹配的重载，实现条件模板。C++20 concepts 是更优雅的替代方案。\n'
            + '- **Concepts（C++20）**：`template <Integral T>` 约束 T 必须是整数类型，'
            + '提供清晰的错误信息和更好的重载决议。\n'
            + '- **CTAD（类模板实参推导, C++17）**：`pair p(1, 2.0);` 自动推导为 pair<int,double>，'
            + '省去手写模板参数。\n'
            + '- **模板元编程（TMP）**：利用模板在编译期执行计算，'
            + '如 `template <int N> struct Factorial { static const int value = N * Factorial<N-1>::value; };`，'
            + '编译期算出阶乘，运行时直接读取常量。\n'
            + '- **CRTP（奇异递归模板模式）**：`class Derived : public Base<Derived> { ... };` '
            + '实现静态多态，避免虚函数开销，被 std::enable_shared_from_this 等使用。\n'
            + '- **模板与内联**：模板函数隐式 inline，定义在头文件中不会违反 ODR（单一定义规则）。\n'
            + '- **显式实例化**：`template class vector<int>;` 可将实例化移到 .cpp 文件，'
            + '减少头文件依赖和编译时间，但需要为每种用到的类型手动实例化。\n',
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
            '## 概念详解\n\n'
            + '迭代器（iterator）是 STL 的粘合剂，连接容器和算法，是 C++ 泛型编程的精髓所在。'
            + '迭代器类似指针，指向容器中的元素，提供统一的访问接口。`begin()` 返回指向首元素的迭代器，'
            + '`end()` 返回指向尾后位置（past-the-end）的迭代器——这是一个不存在的位置，仅作哨兵。\n\n'
            + '**为什么需要迭代器？** STL 由三大组件构成：容器（存数据）、算法（处理数据）、迭代器（粘合剂）。'
            + '如果算法直接依赖容器，sort 就要为 vector、deque、list 各写一份；'
            + '通过迭代器抽象，一个 sort 算法可以用于任何支持随机访问迭代器的容器，'
            + '包括原生数组。这种"算法与容器解耦"的设计让代码复用达到极致。\n\n'
            + '**迭代器的本质**：迭代器是一个行为类似指针的对象，重载了 `*`（解引用）、'
            + '`->`（成员访问）、`++`（前进）、`--`（后退）、`==`/`!=`（比较）等操作符。'
            + '原生指针就是一种随机访问迭代器，所以 STL 算法可以直接用于数组。\n\n'
            + '## 语法说明\n\n'
            + '### 迭代器基本操作\n\n'
            + '```cpp\n'
            + 'vector<int> v = {1, 2, 3, 4, 5};\n'
            + 'vector<int>::iterator it = v.begin();  // 指向第一个元素\n'
            + '*it = 10;          // 解引用：读取或修改元素\n'
            + '++it;              // 前进到下一个元素\n'
            + '--it;              // 后退（双向迭代器支持）\n'
            + 'it += 3;           // 随机跳转（随机访问迭代器支持）\n'
            + 'auto end = v.end(); // 尾后位置，不可解引用\n'
            + '```\n\n'
            + '### 迭代器分类表\n\n'
            + '| 类别 | 能力 | 支持容器 | 典型操作 |\n'
            + '|------|------|---------|---------|\n'
            + '| 输入迭代器（Input） | 只读、单遍前进 | istream_iterator | `*it`（读）、`++` |\n'
            + '| 输出迭代器（Output） | 只写、单遍前进 | back_inserter、ostream_iterator | `*it=`（写）、`++` |\n'
            + '| 前向迭代器（Forward） | 读写、多遍前进 | forward_list、unordered_map | `*it`、`++` |\n'
            + '| 双向迭代器（Bidirectional） | 读写、前进后退 | list、map、set | `*it`、`++`、`--` |\n'
            + '| 随机访问迭代器（Random Access） | 读写、随机跳转 | vector、deque、array、原生指针 | `*it`、`++`、`--`、`+=`、`-=`、`it[i]` |\n'
            + '| 连续迭代器（Contiguous, C++20） | 元素内存连续 | vector、array | 随机访问 + `std::to_address` |\n\n'
            + '### 常用 STL 算法（`<algorithm>` 与 `<numeric>`）\n\n'
            + '| 算法 | 功能 | 示例 |\n'
            + '|------|------|------|\n'
            + '| `sort(b, e)` | 排序（升序） | `sort(v.begin(), v.end());` |\n'
            + '| `sort(b, e, cmp)` | 自定义排序 | `sort(v.begin(), v.end(), greater<>());` |\n'
            + '| `find(b, e, val)` | 查找等于 val 的元素 | `find(v.begin(), v.end(), 5);` |\n'
            + '| `find_if(b, e, pred)` | 条件查找 | `find_if(v.begin(), v.end(), [](int x){return x>3;});` |\n'
            + '| `count(b, e, val)` | 统计等于 val 的元素数 | `count(v.begin(), v.end(), 2);` |\n'
            + '| `copy(b, e, out)` | 复制范围 | `copy(v.begin(), v.end(), dest.begin());` |\n'
            + '| `reverse(b, e)` | 原地反转 | `reverse(v.begin(), v.end());` |\n'
            + '| `accumulate(b, e, init)` | 累加（`<numeric>`） | `accumulate(v.begin(), v.end(), 0);` |\n'
            + '| `min_element(b, e)` | 最小值迭代器 | `*min_element(v.begin(), v.end());` |\n'
            + '| `max_element(b, e)` | 最大值迭代器 | `*max_element(v.begin(), v.end());` |\n'
            + '| `for_each(b, e, f)` | 对每个元素调用 f | `for_each(v.begin(), v.end(), print);` |\n'
            + '| `unique(b, e)` | 去除相邻重复（需先排序） | `v.erase(unique(v.begin(), v.end()), v.end());` |\n'
            + '| `binary_search(b, e, val)` | 二分查找（返回 bool） | `binary_search(v.begin(), v.end(), 3);` |\n'
            + '| `lower_bound(b, e, val)` | 第一个 >= val 的位置 | `lower_bound(v.begin(), v.end(), 3);` |\n'
            + '| `transform(b, e, out, f)` | 变换并输出 | `transform(v.begin(), v.end(), out, square);` |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：迭代器遍历与修改**\n\n'
            + '```cpp\n#include <iostream>\n#include <vector>\nusing namespace std;\n\n'
            + 'int main() {\n'
            + '    vector<int> v = {10, 20, 30, 40, 50};\n'
            + '    // 迭代器遍历\n'
            + '    for (auto it = v.begin(); it != v.end(); ++it) {\n'
            + '        cout << *it << " ";  // 解引用获取元素\n'
            + '    }\n'
            + '    cout << endl;\n'
            + '    // 修改元素\n'
            + '    for (auto it = v.begin(); it != v.end(); ++it) {\n'
            + '        *it *= 2;  // 通过解引用修改\n'
            + '    }\n'
            + '    // range-for 等价写法\n'
            + '    for (int x : v) cout << x << " ";\n'
            + '    cout << endl;  // 20 40 60 80 100\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + '`it` 是迭代器，`*it` 解引用获取元素值，`++it` 前进到下一个元素。'
            + '`begin()` 到 `end()` 遍历整个容器——这是迭代器的标准使用模式。\n\n'
            + '**示例 2：STL 算法组合使用**\n\n'
            + '```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\nusing namespace std;\n\n'
            + 'int main() {\n'
            + '    vector<int> v = {5, 2, 8, 1, 9, 3};\n'
            + '    // 排序\n'
            + '    sort(v.begin(), v.end());\n'
            + '    cout << "排序: ";\n'
            + '    for (auto x : v) cout << x << " ";\n'
            + '    cout << endl;  // 1 2 3 5 8 9\n'
            + '    // 累加\n'
            + '    int sum = accumulate(v.begin(), v.end(), 0);\n'
            + '    cout << "总和: " << sum << endl;  // 28\n'
            + '    // 最值\n'
            + '    cout << "最小: " << *min_element(v.begin(), v.end()) << endl;  // 1\n'
            + '    cout << "最大: " << *max_element(v.begin(), v.end()) << endl;  // 9\n'
            + '    // 查找\n'
            + '    auto it = find(v.begin(), v.end(), 5);\n'
            + '    if (it != v.end()) cout << "找到 5，位置 " << (it - v.begin()) << endl;\n'
            + '    // 条件查找\n'
            + '    auto it2 = find_if(v.begin(), v.end(), [](int x){ return x > 4; });\n'
            + '    if (it2 != v.end()) cout << "第一个 >4 的: " << *it2 << endl;  // 5\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + '`sort` 排序，`accumulate` 累加（在 `<numeric>` 中），'
            + '`min_element`/`max_element` 返回迭代器需解引用，'
            + '`find`/`find_if` 返回迭代器，找不到返回 `end()`。'
            + '算法通过迭代器操作，与容器类型无关。\n\n'
            + '**示例 3：reverse、count、unique 去重**\n\n'
            + '```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n'
            + 'int main() {\n'
            + '    vector<int> v = {1, 2, 3, 2, 4, 2, 5};\n'
            + '    // 反转\n'
            + '    reverse(v.begin(), v.end());\n'
            + '    cout << "反转: ";\n'
            + '    for (auto x : v) cout << x << " ";\n'
            + '    cout << endl;  // 5 2 4 2 3 2 1\n'
            + '    // 计数\n'
            + '    int cnt = count(v.begin(), v.end(), 2);\n'
            + '    cout << "2出现 " << cnt << " 次" << endl;  // 3\n'
            + '    // 去重（先排序，再 unique，再 erase）\n'
            + '    sort(v.begin(), v.end());               // 1 2 2 2 3 4 5\n'
            + '    auto last = unique(v.begin(), v.end()); // 1 2 3 4 5 ? ?\n'
            + '    v.erase(last, v.end());                 // 1 2 3 4 5\n'
            + '    cout << "去重: ";\n'
            + '    for (auto x : v) cout << x << " ";\n'
            + '    cout << endl;\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + '`reverse` 原地反转，`count` 统计等于指定值的元素个数。'
            + '`unique` 只去除**相邻**重复，所以去重前必须先排序；'
            + '它返回新逻辑末尾迭代器，需配合 `erase` 真正删除尾部元素。\n\n'
            + '## 注意事项\n\n'
            + '1. **迭代器失效**：对 vector 做 push_back 可能扩容导致所有迭代器失效；'
            + '做 insert/erase 会使被删点及之后的迭代器失效。操作后应重新获取迭代器。\n'
            + '2. **end() 不可解引用**：`end()` 指向尾后位置，解引用是未定义行为。'
            + '循环条件用 `it != end()` 而非 `it <= end()`。\n'
            + '3. **空容器安全**：空容器的 `begin() == end()`，循环一次都不执行，天然安全。\n'
            + '4. **算法复杂度**：sort 随机访问迭代器是 O(n log n)，'
            + 'list 的成员函数 sort 也是 O(n log n) 但常数更大；'
            + 'find/count 是 O(n)；binary_search/lower_bound 要求已排序，是 O(log n)。\n'
            + '5. **list 不能用 sort 算法**：list 迭代器是双向的，不支持随机访问，'
            + '应使用 `list::sort()` 成员函数。同理 list 不能用 `std::sort`。\n'
            + '6. **算法不检查范围**：如果传入的迭代器范围越界，行为未定义。'
            + '程序员必须保证范围有效。\n'
            + '7. **修改容器时遍历**：遍历中做 insert/erase 易导致迭代器失效和未定义行为。'
            + 'C++20 引入 `std::erase_if` 安全删除满足条件的元素。\n'
            + '8. **lambda 与算法**：find_if、transform、for_each 等可接受 lambda，'
            + '让算法更具表达力。注意 lambda 捕获方式和生命周期。\n\n'
            + '## 实际应用\n\n'
            + '- **数据处理**：用 sort + unique 去重，accumulate 聚合统计，'
            + 'find_if 条件查找，是数据分析工具的基础操作。\n'
            + '- **数据库引擎**：查询计划的排序、聚合、过滤，常基于 STL 算法实现。\n'
            + '- **游戏开发**：用 sort 排序游戏对象（按渲染顺序、z 值），'
            + 'remove_if + erase 删除死亡对象（"erase-remove 惯用法"）。\n'
            + '- **图像处理**：transform 对每个像素应用函数，copy 复制图像数据。\n'
            + '- **编译器**：词法分析、语法分析中用 find、sort 处理符号表和 token 流。\n'
            + '- **测试框架**：Google Test、Catch2 内部用 STL 算法比较容器、生成报告。\n'
            + '- **大数据框架**：Abseil（Google）、Folly（Facebook）在 STL 基础上'
            + '提供更丰富的算法，如并行排序、字符串处理等。\n\n'
            + '## 扩展知识\n\n'
            + '- **C++20 Ranges**：`std::ranges::sort(v)` 直接接受容器而非迭代器对，'
            + '支持管道 `v | views::filter(pred) | views::transform(f)`，'
            + '让算法更易读、可组合。\n'
            + '- **迭代器适配器**：`back_inserter`（自动 push_back）、'
            + '`front_inserter`、`inserter`、`istream_iterator`、`ostream_iterator` '
            + '让算法可以写入空容器或流。\n'
            + '- **erase-remove 惯用法**：`v.erase(remove(v.begin(), v.end(), val), v.end());` '
            + '删除所有等于 val 的元素。C++20 简化为 `std::erase(v, val);`。\n'
            + '- **并行算法（C++17）**：`std::sort(std::execution::par, b, e)` '
            + '指定并行执行策略，利用多核加速。\n'
            + '- **移动迭代器**：`std::make_move_iterator` 让 copy 算法变成 move，'
            + '避免拷贝大对象。\n'
            + '- **Sentinel（C++20）**：允许 begin 和 end 是不同类型，'
            + '支持哨兵模式（如以特定值结束的序列），打破 begin/end 同类型约束。\n'
            + '- **Concepts 约束迭代器**：C++20 用 `std::random_access_iterator` 等 concept '
            + '约束模板参数，提供更清晰的错误信息。\n'
            + '- **string_view 与迭代器**：string_view 提供轻量字符串视图，'
            + '其迭代器与 string 兼容，可用于泛型字符串算法。\n',
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
            '## 概念详解\n\n'
            + '智能指针是现代 C++ 管理动态内存的核心工具，通过 RAII（Resource Acquisition Is Initialization，'
            + '资源获取即初始化）思想自动释放内存，从根本上避免 `new/delete` 配对错误导致的内存泄漏与悬空指针。'
            + '这是现代 C++ 区别于 C 的标志性能力之一。\n\n'
            + '**为什么需要智能指针？** 裸指针 `new/delete` 有四大经典问题：'
            + '①忘记 delete 导致内存泄漏；②delete 后继续使用导致悬空指针；'
            + '③重复 delete 同一块内存导致未定义行为；④异常发生时 delete 被跳过导致泄漏。'
            + '智能指针把资源封装成对象，利用对象生命周期（构造获取、析构释放）自动管理内存，'
            + '即使在异常发生时也能通过栈展开正确析构。\n\n'
            + '**何时使用智能指针？** 凡是需要在堆上创建对象且需要自动释放的场景，'
            + '都应优先用智能指针而非裸指针。现代 C++ 几乎不应该直接写 new/delete。\n\n'
            + '## 语法说明\n\n'
            + '`<memory>` 头文件提供三种主要智能指针：\n\n'
            + '### 1. unique_ptr（独占所有权）\n\n'
            + '```cpp\n'
            + '#include <memory>\n'
            + 'unique_ptr<T> up = make_unique<T>(args...);  // C++14 推荐\n'
            + 'unique_ptr<T> up(new T(args...));             // C++11 也可以\n'
            + '*up;              // 解引用\n'
            + 'up->member;       // 成员访问\n'
            + 'up.reset();       // 显式释放\n'
            + 'up.release();     // 释放所有权（返回裸指针，up 变 nullptr）\n'
            + 'unique_ptr<T> up2 = move(up);  // 转移所有权（不可拷贝）\n'
            + '```\n\n'
            + '### 2. shared_ptr（共享所有权）\n\n'
            + '```cpp\n'
            + 'shared_ptr<T> sp = make_shared<T>(args...);  // 推荐，一次分配\n'
            + 'shared_ptr<T> sp2 = sp;          // 拷贝，引用计数 +1\n'
            + 'sp.use_count();                  // 当前引用计数\n'
            + 'sp.unique();                     // 是否独占（计数==1）\n'
            + 'sp.reset();                      // 引用计数 -1，归零则释放\n'
            + '```\n\n'
            + '### 3. weak_ptr（弱引用，配合 shared_ptr）\n\n'
            + '```cpp\n'
            + 'weak_ptr<T> wp = sp;             // 不增加引用计数\n'
            + 'wp.expired();                    // 检查所指对象是否已被释放\n'
            + 'shared_ptr<T> sp2 = wp.lock();   // 提升为 shared_ptr（失败返回空）\n'
            + 'wp.use_count();                  // 对应的 shared_ptr 计数\n'
            + '```\n\n'
            + '### 智能指针对比表\n\n'
            + '| 特性 | unique_ptr | shared_ptr | weak_ptr |\n'
            + '|------|-----------|-----------|----------|\n'
            + '| 所有权 | 独占 | 共享（引用计数） | 不拥有 |\n'
            + '| 可拷贝 | 否（只能 move） | 是 | 是 |\n'
            + '| 可移动 | 是 | 是 | 是 |\n'
            + '| 开销 | 几乎零（等同裸指针） | 控制块 + 原子计数 | 控制块访问 |\n'
            + '| 线程安全 | 同一对象非线程安全 | 引用计数原子操作安全 | 同 shared_ptr |\n'
            + '| 适用场景 | 默认首选、独占资源 | 多所有者共享 | 打破循环引用、缓存、观察者 |\n'
            + '| 何时释放 | 离开作用域 | 计数归零 | 不影响对象生命周期 |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：unique_ptr 独占所有权**\n\n'
            + '```cpp\n#include <iostream>\n#include <memory>\nusing namespace std;\n\n'
            + 'class Widget {\n'
            + 'public:\n'
            + '    Widget(int x) : data(x) { cout << "构造 " << data << endl; }\n'
            + '    ~Widget() { cout << "析构 " << data << endl; }\n'
            + '    int data;\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    // make_unique 是 C++14 推荐的创建方式（异常安全、单次分配）\n'
            + '    unique_ptr<Widget> p = make_unique<Widget>(42);\n'
            + '    cout << "值: " << p->data << endl;\n\n'
            + '    // unique_ptr 独占，不能拷贝，只能 move 转移\n'
            + '    unique_ptr<Widget> q = move(p);\n'
            + '    cout << "转移后 p 是否为空: " << (p ? "否" : "是") << endl;\n'
            + '    cout << "q 的值: " << q->data << endl;\n\n'
            + '    // 离开作用域自动释放，无需 delete\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + 'make_unique<Widget>(42) 在堆上构造 Widget 并交由 unique_ptr 管理。'
            + 'move(p) 将所有权转给 q，p 变为 nullptr。'
            + '函数结束时 q 自动析构所指向对象，无需手动 delete。\n\n'
            + '**示例 2：shared_ptr 引用计数**\n\n'
            + '```cpp\n#include <iostream>\n#include <memory>\nusing namespace std;\n\n'
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
            + '}\n```\n\n'
            + 'use_count() 返回当前共享对象的 shared_ptr 数量。'
            + '拷贝 shared_ptr 计数 +1，销毁时 -1，归零才真正释放对象。'
            + '这就是为什么 shared_ptr 适合多个所有者共享同一资源。\n\n'
            + '**示例 3：weak_ptr 打破循环引用**\n\n'
            + '```cpp\n#include <iostream>\n#include <memory>\nusing namespace std;\n\n'
            + 'struct Node {\n'
            + '    int val;\n'
            + '    shared_ptr<Node> next;\n'
            + '    weak_ptr<Node> prev;  // 用 weak_ptr 避免循环引用\n'
            + '    Node(int v) : val(v) { cout << "构造 " << v << endl; }\n'
            + '    ~Node() { cout << "析构 " << v << endl; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    auto a = make_shared<Node>(1);\n'
            + '    auto b = make_shared<Node>(2);\n'
            + '    a->next = b;       // a 持有 b（shared）\n'
            + '    b->prev = a;       // b 用 weak 引用 a，不增加计数\n'
            + '    cout << "a.use_count: " << a.use_count() << endl;  // 1\n'
            + '    cout << "b.use_count: " << b.use_count() << endl;  // 2（a->next 和 b）\n'
            + '    // 若 prev 用 shared_ptr，则 a 和 b 互引，计数永不归零，内存泄漏\n'
            + '    // 用 weak_ptr 后，a 释放后 b->prev.expired() 为 true\n'
            + '    if (auto locked = b->prev.lock()) {\n'
            + '        cout << "prev 值: " << locked->val << endl;  // 1\n'
            + '    }\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + '若两个对象互相用 shared_ptr 引用，计数永不归零，导致内存泄漏。'
            + '用 weak_ptr 打破环：一方用 shared_ptr，另一方用 weak_ptr。'
            + '访问前用 lock() 提升为 shared_ptr，若对象已释放则返回空。\n\n'
            + '## 注意事项\n\n'
            + '1. **优先用 unique_ptr**：它是零开销抽象，默认选择。'
            + '需要共享时才用 shared_ptr，需要弱引用时才用 weak_ptr。\n'
            + '2. **make_unique/make_shared 优于 new**：'
            + 'make_shared 一次分配对象和控制块（性能更好、缓存友好），且异常安全。'
            + '直接用 shared_ptr<T>(new T) 是两次分配，且若构造函数抛异常可能泄漏。\n'
            + '3. **避免循环引用**：shared_ptr 互相引用会导致内存泄漏，'
            + '一方必须用 weak_ptr。常见于双向链表、树（父节点）、观察者模式。\n'
            + '4. **不要用裸指针初始化多个智能指针**：'
            + '`int* p = new int; shared_ptr<int> a(p); shared_ptr<int> b(p);` '
            + '会导致双重释放。一个裸指针只能交给一个智能指针。\n'
            + '5. **线程安全边界**：shared_ptr 的引用计数操作是原子的（线程安全），'
            + '但访问所指对象不是。多线程读写对象本身仍需加锁。\n'
            + '6. **enable_shared_from_this**：在对象成员函数中获取指向自己的 shared_ptr，'
            + '需继承 `enable_shared_from_this<T>` 并调用 `shared_from_this()`，'
            + '直接 `shared_ptr<T>(this)` 会导致双重释放。\n'
            + '7. **自定义删除器**：unique_ptr 支持自定义删除器作为类型的一部分，'
            + 'shared_ptr 的删除器是运行时多态（类型无关），更灵活。\n'
            + '8. **数组版本**：`unique_ptr<T[]>` 管理数组（C++17 后建议用 `std::array` 或 `vector`）。'
            + 'shared_ptr 数组支持需要 C++17 的 `shared_ptr<T[]>`。\n\n'
            + '## 实际应用\n\n'
            + '- **游戏引擎**：Unreal Engine 用 TSharedPtr/TUniquePtr 管理 asset 资源、'
            + 'Actor 引用；Unity 的 C++ 层也广泛使用智能指针。\n'
            + '- **WebRTC / Chromium**：用 unique_ptr 管理网络连接对象，'
            + 'scoped_refptr（类似 shared_ptr）管理线程安全引用计数对象。\n'
            + '- **数据结构**：实现双向链表、树、图时，'
            + '用 unique_ptr 管理子节点（避免递归析构栈溢出），weak_ptr 管理父指针（打破环）。\n'
            + '- **观察者模式**：subject 用 weak_ptr 持有 observer，'
            + '避免 observer 已销毁但 subject 仍引用导致的悬空。\n'
            + '- **缓存**：weak_ptr 实现缓存——对象不活跃时被回收，需要时再 lock 重建。\n'
            + '- **PIMPL 惯用法**：unique_ptr<Impl> 隐藏实现细节，'
            + '减少头文件依赖，加速编译。\n'
            + '- **工厂函数**：工厂返回 unique_ptr<T>，'
            + '调用方可决定转为 shared_ptr 或保持独占，所有权清晰。\n\n'
            + '## 扩展知识\n\n'
            + '- **RAII 模式**：智能指针是 RAII 的典型应用。RAII 还用于管理文件句柄、'
            + '锁、socket 等，如 lock_guard、unique_lock、fstream 都是 RAII 类。\n'
            + '- **所有权语义**：C++11 引入的所有权模型——unique_ptr 表达独占，'
            + 'shared_ptr 表达共享，是 Rust 所有权系统的灵感来源之一。\n'
            + '- **make_shared 的权衡**：make_shared 把对象和控制块放一块内存，'
            + '但如果对象很大且 weak_ptr 长期存在，对象内存会被控制块延迟释放。'
            + '此时可分开 new + shared_ptr 构造。\n'
            + '- **自定义删除器**：`unique_ptr<FILE, decltype(&fclose)> fp(fopen(...), fclose);` '
            + '管理 C 资源；shared_ptr 更灵活，删除器不影响类型。\n'
            + '- **aliasing constructor**：`shared_ptr<T>(other, &obj)` '
            + '让一个 shared_ptr 共享另一对象的引用计数但指向不同对象，用于成员访问。\n'
            + '- **std::pmr 与智能指针**：多态内存资源（C++17）配合智能指针实现自定义分配器。\n'
            + '- **移动语义与 unique_ptr**：unique_ptr 不可拷贝但可移动，'
            + '是 move 语义的经典用例，函数返回 unique_ptr 是零拷贝的。\n',
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
            '## 概念详解\n\n'
            + 'RAII（Resource Acquisition Is Initialization，资源获取即初始化）是 C++ 区别于其他语言最重要的资源管理哲学。'
            + '它的核心思想是：**把资源的生命周期绑定到对象的生命周期**——在构造函数中获取资源，'
            + '在析构函数中释放资源。由于 C++ 保证对象离开作用域时析构函数一定会被调用（即使发生异常），'
            + '资源就能被可靠地释放。\n\n'
            + '**为什么需要 RAII？** 资源管理有四大经典问题：①忘记释放；②重复释放；'
            + '③异常发生时释放被跳过；④释放顺序错误。RAII 通过"构造即获取、析构即释放"的范式，'
            + '用类型系统和对象生命周期强制保证资源正确释放，从根本上消除这些问题。\n\n'
            + '**何时使用 RAII？** 凡是涉及"获取-释放"配对的资源，都应包装成 RAII 类。'
            + '包括但不限于：内存、文件句柄、数据库连接、网络 socket、互斥锁、'
            + 'OpenGL/D3D 纹理和 buffer、CUDA 资源、Windows HANDLE 等。\n\n'
            + '**RAII vs GC**：与 Java/C# 的垃圾回收（GC）不同，RAII 提供的是**确定性析构**：'
            + '你精确知道资源何时释放（作用域结束的瞬间），这对文件、锁、GPU 资源这类'
            + '不能等 GC 回收的资源至关重要。这也让 C++ 在无需 GC 的前提下实现了内存安全与异常安全。\n\n'
            + '## 语法说明\n\n'
            + '### RAII 类的基本结构\n\n'
            + '```cpp\n'
            + 'class ResourceGuard {\n'
            + '    ResourceHandle h;  // 被管理的资源句柄\n'
            + 'public:\n'
            + '    // 构造函数：获取资源\n'
            + '    explicit ResourceGuard(params...) : h(acquire(params...)) {\n'
            + '        if (!h) throw std::runtime_error("获取资源失败");\n'
            + '    }\n'
            + '    // 析构函数：释放资源（无参数、无返回值、不可重载）\n'
            + '    ~ResourceGuard() {\n'
            + '        if (h) release(h);  // 释放资源\n'
            + '    }\n'
            + '    // 禁用拷贝（避免双重释放）\n'
            + '    ResourceGuard(const ResourceGuard&) = delete;\n'
            + '    ResourceGuard& operator=(const ResourceGuard&) = delete;\n'
            + '    // 可选：允许移动（转移所有权）\n'
            + '    ResourceGuard(ResourceGuard&& other) noexcept : h(other.h) {\n'
            + '        other.h = null_handle;  // 源对象置空\n'
            + '    }\n'
            + '    // 提供资源访问接口\n'
            + '    ResourceHandle get() const { return h; }\n'
            + '    explicit operator bool() const { return h != null_handle; }\n'
            + '};\n'
            + '```\n\n'
            + '### RAII 三原则\n\n'
            + '| 原则 | 说明 | 违反后果 |\n'
            + '|------|------|---------|\n'
            + '| 构造即获取 | 资源在构造函数中获取，对象有效则资源有效 | 资源状态不确定 |\n'
            + '| 析构即释放 | 析构函数无条件释放资源 | 资源泄漏 |\n'
            + '| 禁用或正确定义拷贝 | 禁用拷贝或实现深拷贝/移动 | 双重释放或泄漏 |\n\n'
            + '### 标准库中的 RAII 设施\n\n'
            + '| 设施 | 管理的资源 | 头文件 |\n'
            + '|------|-----------|--------|\n'
            + '| `unique_ptr<T>` | 堆对象 | `<memory>` |\n'
            + '| `shared_ptr<T>` | 共享堆对象 | `<memory>` |\n'
            + '| `lock_guard<M>` | 互斥锁 | `<mutex>` |\n'
            + '| `unique_lock<M>` | 互斥锁（可延迟、可解锁） | `<mutex>` |\n'
            + '| `scoped_lock<M...>` | 多个互斥锁（C++17） | `<mutex>` |\n'
            + '| `fstream` | 文件句柄 | `<fstream>` |\n'
            + '| `vector<T>` | 动态数组 | `<vector>` |\n'
            + '| `string` | 字符缓冲区 | `<string>` |\n'
            + '| `thread` | 系统线程 | `<thread>` |\n'
            + '| `condition_variable` | 条件变量 | `<condition_variable>` |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：RAII 文件封装**\n\n'
            + '```cpp\n#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\n'
            + 'class FileGuard {\n'
            + '    ofstream f;\n'
            + 'public:\n'
            + '    // 构造时打开文件（获取资源）\n'
            + '    explicit FileGuard(const string& path) : f(path) {\n'
            + '        if (!f.is_open()) throw runtime_error("无法打开文件");\n'
            + '        cout << "打开文件: " << path << endl;\n'
            + '    }\n'
            + '    // 禁用拷贝（避免双重关闭）\n'
            + '    FileGuard(const FileGuard&) = delete;\n'
            + '    FileGuard& operator=(const FileGuard&) = delete;\n'
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
            + '        // 即使这里抛异常，析构函数也会被调用\n'
            + '    }  // fg 离开作用域，析构函数自动关闭文件\n'
            + '    cout << "已自动释放" << endl;\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + 'FileGuard 在构造函数中打开文件，析构函数中关闭文件。'
            + '无论正常返回还是抛异常，析构函数都会被调用，文件必然被关闭。'
            + '这就是 RAII 的核心：把资源管理嵌入对象生命周期。'
            + '禁用拷贝避免两个对象指向同一文件导致双重关闭。\n\n'
            + '**示例 2：lock_guard 管理互斥锁**\n\n'
            + '```cpp\n#include <iostream>\n#include <mutex>\nusing namespace std;\n\n'
            + 'mutex m;\n\n'
            + 'void safe_print(int n) {\n'
            + '    // lock_guard 构造时加锁，析构时自动解锁\n'
            + '    lock_guard<mutex> lock(m);\n'
            + '    cout << "线程 " << n << " 进入临界区" << endl;\n'
            + '    // 即使这里抛异常，锁也会被正确释放（不会死锁）\n'
            + '}  // 自动解锁\n\n'
            + 'int main() {\n'
            + '    safe_print(1);\n'
            + '    safe_print(2);\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + 'lock_guard<mutex> 是 RAII 管理锁的标准工具。'
            + '构造时调用 m.lock()，析构时调用 m.unlock()。'
            + '比手动 lock/unlock 安全得多——不会忘记解锁，也不会在异常时死锁。\n\n'
            + '**示例 3：自定义 RAII 管理 C API 资源**\n\n'
            + '```cpp\n#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\n'
            + '// 管理 malloc/free 的 C 内存\n'
            + 'class CMallocGuard {\n'
            + '    void* ptr;\n'
            + 'public:\n'
            + '    explicit CMallocGuard(size_t size) : ptr(malloc(size)) {\n'
            + '        if (!ptr) throw bad_alloc();\n'
            + '    }\n'
            + '    ~CMallocGuard() {\n'
            + '        free(ptr);\n'
            + '        cout << "free 释放 C 内存" << endl;\n'
            + '    }\n'
            + '    // 禁用拷贝\n'
            + '    CMallocGuard(const CMallocGuard&) = delete;\n'
            + '    CMallocGuard& operator=(const CMallocGuard&) = delete;\n'
            + '    void* get() const { return ptr; }\n'
            + '};\n\n'
            + 'int main() {\n'
            + '    {\n'
            + '        CMallocGuard buf(1024);  // 分配 1KB\n'
            + '        // 使用 buf.get() 访问内存\n'
            + '        cout << "使用内存块" << endl;\n'
            + '    }  // 自动 free\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + '即使是 C 库的 malloc/free、fopen/fclose、socket/close 等，'
            + '也可以用 RAII 封装，让 C++ 代码安全地使用 C 资源。'
            + '这是 C/C++ 混合编程的常见模式。\n\n'
            + '## 注意事项\n\n'
            + '1. **析构函数不能抛异常**：如果析构函数抛异常且栈展开中已有异常，'
            + '程序会调用 terminate 终止。析构函数应吞下异常或将其转为 noexcept。\n'
            + '2. **禁用或正确定义拷贝**：RAII 类默认应禁用拷贝（= delete），'
            + '否则两个对象会指向同一资源，析构时双重释放。需要所有权转移时实现移动构造。\n'
            + '3. **构造函数失败要释放已获取资源**：若构造函数中获取多个资源且中途失败，'
            + '已获取的必须释放，避免泄漏。建议用成员初始化列表让已构造成员自动析构。\n'
            + '4. **资源获取顺序与析构顺序相反**：成员析构顺序与构造相反，'
            + '后构造的先析构。若资源有依赖关系需注意顺序。\n'
            + '5. **不要在析构函数中调用虚函数**：析构期间对象类型已退化为基础类型，'
            + '虚函数调用不会到达派生类版本。\n'
            + '6. **移动后的源对象必须可析构**：移动构造/赋值后，源对象仍会被析构，'
            + '必须将其置于有效空状态（如指针置 nullptr）。\n'
            + '7. **RAII 与异常安全**：RAII 是异常安全的基础。'
            + '配合"事务性"代码（要么全部成功，要么回滚），可实现强异常安全保证。\n'
            + '8. **全局/静态对象的析构顺序**：不同翻译单元的静态对象析构顺序不确定，'
            + '可能造成"静态初始化顺序惨剧"。避免静态对象间相互依赖。\n\n'
            + '## 实际应用\n\n'
            + '- **游戏引擎**：GPU buffer、纹理、shader、音频资源都用 RAII 类包装，'
            + '确保资源不泄漏。Unreal Engine 的 UObject、Unity 的 C++ 资源类都基于 RAII。\n'
            + '- **数据库客户端**：连接对象用 RAII 管理 socket，'
            + '连接断开或对象销毁时自动回滚未提交事务并关闭连接。\n'
            + '- **操作系统开发**：文件描述符、共享内存、信号量、mmap 都通过 RAII 封装。'
            + 'Linux 内核的 C 代码用 goto cleanup 模拟，远不如 C++ RAII 优雅。\n'
            + '- **图形 API**：OpenGL 的 VBO/VAO/纹理、Vulkan 的 command buffer、'
            + 'DirectX 的 COM 对象都用 RAII 包装，避免资源泄漏。\n'
            + '- **网络库**：socket、epoll fd、SSL 上下文用 RAII 管理，'
            + '连接断开自动释放，异常安全。\n'
            + '- **CUDA/OpenCL**：GPU 内存、stream、event 用 RAII 包装，'
            + '确保 kernel 执行后资源释放。\n'
            + '- **事务处理**：数据库事务用 RAII 实现"提交或回滚"语义，'
            + '异常时自动回滚，正常时显式提交。\n\n'
            + '## 扩展知识\n\n'
            + '- **RAII 与所有权**：RAII 隐含所有权语义——拥有对象即拥有资源。'
            + 'unique_ptr 是独占所有权 RAII，shared_ptr 是共享所有权 RAII。'
            + 'Rust 进一步把所有权明确为语言核心特性。\n'
            + '- **确定性析构的优势**：相比 GC 的不确定性，确定性析构让资源释放可预测，'
            + '适合实时系统、嵌入式、游戏等对延迟敏感的场景。\n'
            + '- **移动语义与 RAII**：C++11 移动语义让 RAII 对象可以高效转移所有权，'
            + '无需深拷贝。move 构造是 RAII 的自然延伸。\n'
            + '- **异常安全等级**：RAII 是实现异常安全的基础。'
            + '基本保证（无泄漏）、强保证（操作原子性）、不抛保证（noexcept）'
            + '都依赖 RAII 管理资源。\n'
            + '- **作用域守卫（scope_guard）**：通用 RAII 工具，'
            + '可在作用域退出时执行任意函数。C++17 的 std::experimental::scope_exit、'
            + '第三方库（如 folly::ScopeGuard）提供此类工具。\n'
            + '- **PIMPL 惯用法**：unique_ptr<Impl> 隐藏实现细节，'
            + '同时利用 RAII 自动释放实现对象，是 C++ API 设计的常见模式。\n'
            + '- **协程与 RAII**：C++20 协程中，RAII 对象在协程挂起/恢复时'
            + '生命周期正确管理，需注意 awaiter 的析构时机。\n'
            + '- **RAII 与 C 互操作**：用 RAII 包装 C API（如 FILE*、socket、HANDLE），'
            + '让 C++ 代码安全使用 C 库，是混合编程的标准做法。\n',
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
            '## 概念详解\n\n'
            + 'Lambda 表达式是 C++11 引入的匿名函数语法，让你能在调用处直接定义函数对象，'
            + '无需单独声明函数或仿函数类。这是函数式编程风格在 C++ 落地的关键能力，'
            + '极大简化了 STL 算法的使用。\n\n'
            + '**为什么需要 Lambda？** 在 Lambda 之前，给 sort 传自定义比较需要：'
            + '①定义一个函数或仿函数类；②传入函数指针或函数对象。'
            + '代码分散在多处，可读性差。Lambda 让"逻辑定义"和"逻辑使用"放在一起，'
            + '所见即所得，是现代 C++ 函数式编程的基石。\n\n'
            + '**何时使用 Lambda？** 当一段简短的逻辑只在局部使用、不需要复用时，'
            + '用 Lambda 内联定义。常见场景：STL 算法的谓词（find_if、sort、'
            + 'remove_if）、回调函数、线程函数、事件处理器等。'
            + '若逻辑复杂或需要复用，仍应定义普通函数或仿函数类。\n\n'
            + '**Lambda 的本质**：每个 Lambda 都由编译器生成一个唯一的闭包类（closure type），'
            + '捕获的变量成为闭包类的成员，Lambda 体成为 operator()。'
            + 'Lambda 表达式本身产生一个闭包对象（prvalue）。这意味着每个 Lambda 都有独立类型，'
            + '即使结构相同。\n\n'
            + '## 语法说明\n\n'
            + '### Lambda 完整语法\n\n'
            + '```cpp\n'
            + '[捕获列表](参数列表) mutable -> 返回类型 { 函数体 }\n'
            + '```\n\n'
            + '### 捕获列表（capture clause）\n\n'
            + '| 语法 | 含义 |\n'
            + '|------|------|\n'
            + '| `[]` | 不捕获任何变量 |\n'
            + '| `[=]` | 按值捕获所有外部变量（副本） |\n'
            + '| `[&]` | 按引用捕获所有外部变量 |\n'
            + '| `[x]` | 按值捕获 x |\n'
            + '| `[&x]` | 按引用捕获 x |\n'
            + '| `[=, &x]` | 默认按值，但 x 按引用 |\n'
            + '| `[&, x]` | 默认按引用，但 x 按值 |\n'
            + '| `[this]` | 捕获 this 指针（成员函数中访问成员） |\n'
            + '| `[*this]` | 按值捕获 *this 对象（C++17） |\n'
            + '| `[name = expr]` | 初始化捕获（C++14，如 [p = std::move(ptr)]） |\n\n'
            + '### 参数与返回类型\n\n'
            + '```cpp\n'
            + 'auto f = [](int a, int b) -> int { return a + b; };  // 显式返回类型\n'
            + 'auto g = [](int a, int b) { return a + b; };          // 自动推导返回类型\n'
            + 'auto h = []() { cout << "hi"; };                       // 无参数无返回\n'
            + 'auto k = [] { return 42; };                            // C++14 可省略 ()\n'
            + '```\n\n'
            + '### mutable 与 std::function\n\n'
            + '```cpp\n'
            + 'int x = 0;\n'
            + 'auto f = [x]() mutable { return ++x; };  // mutable 允许修改按值捕获的副本\n'
            + 'std::function<int(int,int)> g = [](int a, int b) { return a*b; };  // 存入 function\n'
            + '```\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：Lambda 基础与捕获**\n\n'
            + '```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n'
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
            + '}\n```\n\n'
            + 'Lambda 让算法接受自定义逻辑变得轻量。'
            + '[factor] 按值捕获外部变量，[] 空捕获适合纯函数。'
            + 'find_if 用 Lambda 作为条件谓词，比手写循环更清晰。\n\n'
            + '**示例 2：sort 自定义排序**\n\n'
            + '```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\n'
            + 'int main() {\n'
            + '    vector<int> v = {5, 2, 8, 1, 9, 3};\n'
            + '    // 降序排序\n'
            + '    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\n'
            + '    cout << "降序: ";\n'
            + '    for (int x : v) cout << x << " ";\n'
            + '    cout << endl;\n\n'
            + '    // 按字符串长度排序\n'
            + '    vector<string> names = {"alice", "bob", "charlie", "dave"};\n'
            + '    sort(names.begin(), names.end(),\n'
            + '         [](const string& a, const string& b) { return a.size() < b.size(); });\n'
            + '    cout << "按长度: ";\n'
            + '    for (const auto& n : names) cout << n << " ";\n'
            + '    cout << endl;  // bob dave alice charlie\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + 'sort 的第三参数是比较函数对象。Lambda 返回 true 表示 a 应排在 b 前。'
            + 'a > b 实现降序，a.size() < b.size() 按长度升序。'
            + '这种写法比函数指针更高效（可内联）。\n\n'
            + '**示例 3：捕获与 std::function 跨作用域传递**\n\n'
            + '```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <functional>\nusing namespace std;\n\n'
            + 'function<int(int)> make_adder(int n) {\n'
            + '    // 按值捕获 n，返回一个可调用的闭包\n'
            + '    return [n](int x) { return x + n; };\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    auto add5 = make_adder(5);\n'
            + '    auto add10 = make_adder(10);\n'
            + '    cout << add5(3) << endl;   // 8\n'
            + '    cout << add10(3) << endl;  // 13\n\n'
            + '    // IIFE（立即调用函数表达式）\n'
            + '    int result = [](int a, int b) { return a * b; }(6, 7);\n'
            + '    cout << "6*7 = " << result << endl;  // 42\n\n'
            + '    // 按引用捕获，修改外部变量\n'
            + '    int sum = 0;\n'
            + '    vector<int> v = {1, 2, 3, 4, 5};\n'
            + '    for_each(v.begin(), v.end(), [&sum](int x) { sum += x; });\n'
            + '    cout << "总和: " << sum << endl;  // 15\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + 'Lambda 可存入 std::function 跨作用域传递（如工厂函数 make_adder）。'
            + 'IIFE（`[](int a, int b){...}(6, 7)`）用于立即执行并获取结果。'
            + '`[&sum]` 按引用捕获，可在 Lambda 内修改外部变量。\n\n'
            + '## 注意事项\n\n'
            + '1. **悬空引用**：按引用捕获 `[&]` 时，若 Lambda 生命周期超过被捕获变量，'
            + '会访问已销毁的变量（悬空引用）。跨作用域传递 Lambda 时优先按值捕获。\n'
            + '2. **this 捕获与对象生命周期**：`[this]` 捕获指针，对象销毁后 this 悬空。'
            + '异步回调中尤其危险，C++17 可用 `[*this]` 按值拷贝对象。\n'
            + '3. **mutable 关键字**：按值捕获的变量默认是 const，'
            + '需 `mutable` 才能修改（修改的是副本，不影响原变量）。\n'
            + '4. **std::function 性能开销**：std::function 有类型擦除开销，'
            + '可能无法内联。性能敏感场景用 auto 或模板参数。\n'
            + '5. **每个 Lambda 类型唯一**：两个结构相同的 Lambda 类型不同，'
            + '不能互相赋值。`auto f = []{...}; auto g = []{...}; f = g;` 编译错误。\n'
            + '6. **C++14 泛型 Lambda**：`[](auto a, auto b) { return a + b; }` '
            + '参数可用 auto，相当于模板。\n'
            + '7. **C++20 模板 Lambda**：`[]<typename T>(T a, T b) { return a + b; }` '
            + '显式模板参数。\n'
            + '8. **避免捕获过多**：`[=]` 或 `[&]` 捕获所有变量可能导致意外依赖，'
            + '建议显式列出捕获的变量，代码更清晰、更易维护。\n\n'
            + '## 实际应用\n\n'
            + '- **STL 算法谓词**：find_if、sort、remove_if、transform、for_each 等'
            + '配合 Lambda，是 C++ 日常编程的核心模式。\n'
            + '- **GUI 框架回调**：Qt 的信号槽、wxWidgets 的事件处理器用 Lambda 内联定义，'
            + '代码紧凑可读。\n'
            + '- **并发编程**：std::thread、std::async、std::promise 接受 Lambda '
            + '作为线程函数或任务。\n'
            + '- **Web 服务器**：drogon、cpprestsdk 的路由处理器用 Lambda 定义，'
            + '类似 Express.js 的中间件风格。\n'
            + '- **游戏引擎 ECS**：用 Lambda 表达实体查询逻辑，'
            + '如遍历所有有 Position 和 Velocity 组件的实体。\n'
            + '- **数据库引擎**：用 Lambda 定义聚合函数、过滤条件、排序规则。\n'
            + '- **测试框架**：Google Test 的 ASSERT_PRED_FORMAT、Catch2 的 SECTION '
            + '内部用 Lambda 实现断言和测试用例隔离。\n'
            + '- **函数式编程**：配合 std::function、std::bind，'
            + '实现高阶函数、柯里化、组合子等函数式技巧。\n\n'
            + '## 扩展知识\n\n'
            + '- **闭包与闭包类**：Lambda 表达式产生闭包对象，其类型是编译器生成的闭包类。'
            + '闭包类有 operator()，捕获的变量是其成员。\n'
            + '- **泛型 Lambda（C++14）**：`[](auto x, auto y) { return x + y; }` '
            + '可接受任意类型参数，相当于模板 operator()。\n'
            + '- **模板 Lambda（C++20）**：`[]<typename T>(vector<T> v) { ... }` '
            + '显式声明模板参数，可在函数体内用 T。\n'
            + '- **初始化捕获（C++14）**：`[p = std::move(ptr)] { ... }` '
            + '在捕获时移动资源，支持按值捕获只移动类型（如 unique_ptr）。\n'
            + '- **Lambda 与 std::function**：std::function 是类型擦除的函数包装器，'
            + '可存储任意可调用对象，但有运行时开销。auto 优先。\n'
            + '- **递归 Lambda**：Lambda 本身不能递归，但可通过 std::function '
            + '或立即应用 Y 组合子实现。C++14 泛型 Lambda 可 `auto f = [&](auto&& self, int n) { ... }; f(f, 5);`。\n'
            + '- **constexpr Lambda（C++17）**：`constexpr auto f = [](int x) { return x*2; };` '
            + '可在编译期求值。\n'
            + '- **Lambda 与 move**：`[p = std::move(ptr)]` 移动捕获，'
            + '避免拷贝大对象或独占资源。\n'
            + '- **noexcept Lambda**：`[]() noexcept { ... }` 声明不抛异常，'
            + '编译器可优化，且能用于 noexcept 重载决议。\n',
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
            '## 概念详解\n\n'
            + '异常处理是 C++ 处理错误的标准机制，通过 `try / catch / throw` 三件套把"正常流程"与"错误处理"分离。'
            + '当函数遇到无法处理的错误时用 `throw` 抛出异常对象，调用链上任意一层都可以用 `catch` 捕获并处理。'
            + '这与 C 语言"用返回值表示错误"的范式截然不同，让代码逻辑更清晰。\n\n'
            + '**为什么需要异常？** C 语言用返回值表示错误（如 -1、NULL、errno），'
            + '每个调用点都要检查返回值，代码充斥 if 判断，正常流程被错误处理淹没。'
            + '异常把错误处理集中到 catch 块，正常流程一气呵成，且不会因忘记检查返回值而埋雷。\n\n'
            + '**何时使用异常？** 异常用于"异常情况"——罕见、不可预期、需跨多层调用处理的错误'
            + '（如内存不足、网络断开、文件不存在）。对于可预期的常规情况（如未找到元素），'
            + '用返回值或 optional 更合适。Google C++ 风格指南因性能和历史原因禁用异常，'
            + '但大多数现代 C++ 项目使用异常。\n\n'
            + '**栈展开（stack unwinding）**：抛出异常后，从 throw 点开始向外层函数逐层返回，'
            + '每一层栈上的局部对象都会被正确析构。这正是 RAII 能保证异常安全的原理——'
            + '只要资源被 RAII 对象持有，异常发生时它们仍然会被析构释放。\n\n'
            + '## 语法说明\n\n'
            + '### 异常三件套\n\n'
            + '```cpp\n'
            + 'throw 异常对象;              // 抛出异常\n'
            + 'try {\n'
            + '    // 可能抛异常的代码\n'
            + '} catch (const 异常类型& e) {\n'
            + '    // 处理该类型异常，e.what() 获取描述\n'
            + '} catch (...) {\n'
            + '    // 捕获所有类型异常（"catch-all"）\n'
            + '}\n'
            + '```\n\n'
            + '### 标准异常类层次（`<stdexcept>` 与 `<exception>`）\n\n'
            + '| 异常类 | 用途 | 头文件 |\n'
            + '|--------|------|--------|\n'
            + '| `std::exception` | 所有标准异常的基类 | `<exception>` |\n'
            + '| `std::logic_error` | 逻辑错误（可在程序中避免） | `<stdexcept>` |\n'
            + '| `std::invalid_argument` | 无效参数 | `<stdexcept>` |\n'
            + '| `std::out_of_range` | 越界访问（如 vector::at） | `<stdexcept>` |\n'
            + '| `std::length_error` | 超出最大长度 | `<stdexcept>` |\n'
            + '| `std::runtime_error` | 运行时错误（不可预见） | `<stdexcept>` |\n'
            + '| `std::overflow_error` | 算术溢出 | `<stdexcept>` |\n'
            + '| `std::underflow_error` | 算术下溢 | `<stdexcept>` |\n'
            + '| `std::bad_alloc` | new 分配失败 | `<new>` |\n'
            + '| `std::bad_cast` | dynamic_cast 失败 | `<typeinfo>` |\n'
            + '| `std::bad_typeid` | typeid 应用空指针 | `<typeinfo>` |\n\n'
            + '### 异常安全等级\n\n'
            + '| 等级 | 保证 | 说明 |\n'
            + '|------|------|------|\n'
            + '| 基本保证 | 无泄漏、对象有效 | 最低要求，异常后程序状态有效 |\n'
            + '| 强保证 | 操作原子性（提交或回滚） | 异常后状态恢复到操作前 |\n'
            + '| 不抛保证（noexcept） | 不抛异常 | 析构函数、move 操作应 noexcept |\n\n'
            + '### 现代 C++ 关键特性\n\n'
            + '| 特性 | 引入版本 | 用途 |\n'
            + '|------|---------|------|\n'
            + '| `auto` | C++11 | 类型推导，简化声明 |\n'
            + '| `nullptr` | C++11 | 类型安全的空指针，替代 NULL |\n'
            + '| `constexpr` | C++11/14 | 编译期常量/函数 |\n'
            + '| `noexcept` | C++11 | 声明函数不抛异常 |\n'
            + '| `std::optional<T>` | C++17 | 可能缺失的值，替代裸指针/null |\n'
            + '| `std::variant<T...>` | C++17 | 类型安全的 union |\n'
            + '| `std::any` | C++17 | 任意类型值的容器 |\n'
            + '| 结构化绑定 `auto [a,b] = ...` | C++17 | 解构 tuple/pair/struct |\n'
            + '| `if constexpr` | C++17 | 编译期条件分支 |\n'
            + '| `std::string_view` | C++17 | 轻量字符串视图，避免拷贝 |\n'
            + '| 概念（Concepts） | C++20 | 模板参数约束 |\n'
            + '| 协程（Coroutines） | C++20 | 协程支持 |\n'
            + '| `std::format` | C++20 | 类型安全的格式化，替代 printf/sstream |\n\n'
            + '## 多个代码示例\n\n'
            + '**示例 1：try/catch 基础**\n\n'
            + '```cpp\n#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\n'
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
            + '}\n```\n\n'
            + 'safe_divide 在 b==0 时抛出 runtime_error。try 块中调用一旦抛异常，'
            + '后续语句跳过，控制流转到匹配的 catch 块。'
            + 'e.what() 返回异常描述字符串。catch 后程序正常继续。\n\n'
            + '**示例 2：vector 越界与 noexcept**\n\n'
            + '```cpp\n#include <iostream>\n#include <vector>\n#include <stdexcept>\nusing namespace std;\n\n'
            + '// noexcept 声明函数不抛异常，编译器可优化\n'
            + 'void log_msg(const string& s) noexcept {\n'
            + '    cout << "[LOG] " << s << endl;\n'
            + '}\n\n'
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
            + '    log_msg("处理完成");\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + 'vector::at() 比 operator[] 更安全，越界时抛 out_of_range 而非未定义行为。'
            + 'auto 让编译器推导类型，nullptr 是类型安全的空指针，替代 C 的 NULL。'
            + 'noexcept 声明函数不抛异常，编译器可省略异常处理代码，提升性能。\n\n'
            + '**示例 3：optional、variant 与结构化绑定**\n\n'
            + '```cpp\n#include <iostream>\n#include <optional>\n#include <variant>\n#include <tuple>\n#include <string>\nusing namespace std;\n\n'
            + '// optional：可能返回有效值，也可能返回空\n'
            + 'optional<int> find_even(const vector<int>& v) {\n'
            + '    for (int x : v) if (x % 2 == 0) return x;\n'
            + '    return nullopt;  // 没找到\n'
            + '}\n\n'
            + 'int main() {\n'
            + '    // optional 用法\n'
            + '    vector<int> v = {1, 3, 5, 8, 9};\n'
            + '    if (auto r = find_even(v)) {\n'
            + '        cout << "找到偶数: " << *r << endl;  // 8\n'
            + '    } else {\n'
            + '        cout << "无偶数" << endl;\n'
            + '    }\n\n'
            + '    // variant：类型安全的 union\n'
            + '    variant<int, double, string> var = 42;\n'
            + '    cout << "int: " << get<int>(var) << endl;\n'
            + '    var = "hello";\n'
            + '    cout << "string: " << get<string>(var) << endl;\n\n'
            + '    // 结构化绑定：解构 tuple/pair/struct\n'
            + '    auto [a, b] = make_pair(1, "hello");\n'
            + '    cout << a << ", " << b << endl;  // 1, hello\n'
            + '    return 0;\n'
            + '}\n```\n\n'
            + 'optional<T> 表示"可能有值也可能没有"，比返回指针或特殊值更安全。'
            + 'variant<T...> 是类型安全的 union，编译期保证类型正确，替代 union 和 void*。'
            + '结构化绑定 `auto [a, b] = ...` 一行解构多值，比 tie 更简洁。\n\n'
            + '## 注意事项\n\n'
            + '1. **不要在析构函数抛异常**：析构期间抛异常且栈展开中已有异常，'
            + '程序调用 terminate 终止。析构函数应 noexcept 并吞下异常。\n'
            + '2. **catch 用 const 引用**：`catch (const exception& e)` 避免拷贝，'
            + '且能捕获派生类异常（多态）。避免 catch 值类型（会切片丢失派生信息）。\n'
            + '3. **异常捕获顺序**：catch 块按顺序匹配，派生类异常必须写在基类之前，'
            + '否则永远匹配基类。`catch(...)` 必须放最后。\n'
            + '4. **不要滥用异常**：异常用于异常情况，不用于常规控制流。'
            + '用异常做控制流会严重影响性能（抛异常开销大）。\n'
            + '5. **noexcept 的承诺**：noexcept 函数若抛异常，程序直接 terminate。'
            + '只对真正不抛异常的函数（如 move、析构、简单访问器）用 noexcept。\n'
            + '6. **异常安全与 RAII**：用 RAII 管理资源是异常安全的基础。'
            + '裸 new/delete 在异常时易泄漏，应换 unique_ptr/shared_ptr。\n'
            + '7. **不要 catch 你不处理的异常**：捕获后既不处理也不重新抛出，'
            + '会掩盖 bug。要么处理、记录、重新抛出，要么不捕获。\n'
            + '8. **异常规范演变**：C++98 的动态异常规范（throw()）已废弃，'
            + 'C++11 用 noexcept 替代。新代码不要用 throw() 规范。\n\n'
            + '## 实际应用\n\n'
            + '- **库 API 错误处理**：标准库（vector::at、stoi、stod）抛异常表示错误，'
            + '比返回错误码更符合 C++ 习惯。\n'
            + '- **构造函数失败**：构造函数无法返回错误码，'
            + '抛异常是报告构造失败的唯一正确方式（如文件打开失败、内存不足）。\n'
            + '- **跨层错误传播**：底层函数抛异常，多层调用链上任意层 catch，'
            + '不需逐层返回错误码，代码简洁。\n'
            + '- **事务回滚**：数据库事务用 RAII + 异常实现"提交或回滚"，'
            + '异常时析构自动回滚。\n'
            + '- **Web 服务器**：HTTP 请求处理中抛异常，框架统一 catch 转为 500 响应。\n'
            + '- **游戏引擎**：资源加载失败抛异常，加载流程简洁；'
            + '运行时热路径（如 render loop）禁用异常以保证性能。\n'
            + '- **嵌入式与实时系统**：许多嵌入式/实时项目禁用异常（-fno-exceptions），'
            + '因异常开销不可预测，改用错误码或 std::expected（C++23）。\n'
            + '- **现代 C++ 特性组合**：optional + variant + 结构化绑定 + if constexpr '
            + '让 C++ 写出接近 Rust/ML 的代数数据类型和模式匹配风格。\n\n'
            + '## 扩展知识\n\n'
            + '- **std::expected<T,E>（C++23）**：类似 Rust 的 Result，'
            + '返回值或错误，避免异常开销，适合性能敏感或禁用异常的场景。\n'
            + '- **异常 vs 错误码**：异常让正常流程清晰，但有性能开销；'
            + '错误码性能好但易遗漏检查。Rust 用 Result 强制处理，是折中方案。\n'
            + '- **异常与多线程**：异常不跨线程传播，std::thread 函数抛异常会 terminate。'
            + '需手动捕获并通过 std::promise/future 传递。\n'
            + '- **异常与 RTTI**：异常匹配需要运行时类型信息（RTTI），'
            + '禁用 RTTI（-fno-rtti）会影响 catch 多态。某些嵌入式项目禁用 RTTI。\n'
            + '- **异常性能模型**：现代 C++ 异常实现多用"零成本"模型——'
            + '不抛异常时几乎无开销，抛异常时开销大（栈展开 + RTTI 匹配）。'
            + '适合异常罕见场景。\n'
            + '- ** Concepts（C++20）**：`template <std::integral T>` 约束模板参数，'
            + '替代 SFINAE，让模板错误信息更清晰。\n'
            + '- **协程（C++20）**：co_await/co_return/co_yield 支持协程，'
            + '异步代码可写同步风格，是网络库、游戏引擎的新趋势。\n'
            + '- **模块（C++20）**：`import std;` 替代 #include，'
            + '解决头文件重复编译问题，大幅提升编译速度。\n'
            + '- **范围（Ranges, C++20）**：`v | views::filter | views::transform` '
            + '函数式管道风格，惰性求值，比 STL 算法更优雅。\n',
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