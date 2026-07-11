import type { CourseContent } from './types'

/**
 * Java 编程课程（8 章，31 课时）
 *
 * Java 代码通过 OnlineCompiler.io 的 java-jdk 编译器执行。
 * 所有代码必须是完整的可编译 Java 程序，入口类名为 Main。
 * System.out.println / print 输出被捕获为 stdout，expected_output 与输出文本对应。
 *
 * 课程目标：完成本课程后，学员能够编写生产级 Java 代码，
 * 掌握从基础语法到面向对象、集合框架、异常处理、Stream API 及设计模式的完整知识体系。
 */
export const javaCourse: CourseContent = {
  id: 'course-java',
  slug: 'java',
  title: 'Java 编程：从入门到生产级',
  description:
    '系统学习 Java 核心语法、面向对象编程、集合框架、异常处理、文件 I/O 与 Stream API，' +
    '涵盖经典面试题与真实工程场景，完成课程后可编写生产级 Java 代码。',
  language: 'java',
  difficulty: 'beginner',
  chapters: [
    // ==================== 第一章 ====================
    {
      id: 'java-ch1',
      title: 'Java 入门与基本语法',
      order: 0,
      lessons: [
        {
          id: 'java-ch1-l1',
          title: 'Hello World 与程序结构',
          order: 0,
          content_md:
            'Java 是一门面向对象的、跨平台的静态类型编程语言。' +
            '它的核心理念是"一次编写，到处运行"（Write Once, Run Anywhere），' +
            '这得益于 Java 虚拟机（JVM）——Java 源代码先被编译成字节码（.class 文件），' +
            '再由 JVM 解释执行，因此同一份字节码可以在 Windows、Linux、macOS 上运行。\n\n' +
            '每个 Java 程序都从 `public class` 开始，类名必须与文件名一致。' +
            '`main` 方法是程序入口，签名固定为 `public static void main(String[] args)`。' +
            '`System.out.println()` 是最常用的输出方法，打印内容并换行；' +
            '`System.out.print()` 则不换行。理解程序的基本结构是学习 Java 的第一步。\n\n' +
            'Java 有三种注释：单行注释 `//`、多行注释 `/* */`、以及文档注释 `/** */`。' +
            '良好的注释习惯是专业开发者的基本素养。' +
            '在大型项目中，文档注释可以被 javadoc 工具提取生成 API 文档。',
          examples: [
            {
              title: '第一个 Java 程序',
              code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
              explanation:
                '这是最简单的 Java 程序。public class Main 定义一个公开类，' +
                'main 方法是程序入口。System.out.println 打印 "Hello, World!" 并换行。',
            },
            {
              title: '多行输出与注释',
              code: `public class Main {
    public static void main(String[] args) {
        // 单行注释：打印第一行
        System.out.println("第一行");
        /*
         * 多行注释
         * 打印第二行
         */
        System.out.print("第二行");
        System.out.print("不换行");
        System.out.println(" <- 接上一行");
    }
}`,
              explanation:
                'println 输出后换行，print 不换行。' +
                '注释用于解释代码逻辑，不会被编译器执行。' +
                '可以看到 print 的内容会拼在同一行。',
            },
            {
              title: '使用转义字符',
              code: `public class Main {
    public static void main(String[] args) {
        System.out.println("姓名\\t年龄\\t城市");
        System.out.println("张三\\t25\\t北京");
        System.out.println("他说:\\"你好!\\"");
        System.out.println("文件路径:C:\\\\Users\\\\test");
    }
}`,
              explanation:
                '\\t 是制表符，\\" 是双引号，\\\\ 是反斜杠。' +
                '转义字符在输出特殊符号时非常重要，特别是在处理文件路径和引号时。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '使用 System.out.println 输出 "我爱 Java 编程"。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        System.out.println(___);
    }
}`,
              expected_output: '我爱 Java 编程',
              hints: [
                '字符串需要用双引号包裹',
                '完整写法：System.out.println("我爱 Java 编程")',
              ],
            },
            {
              type: 'output-match',
              prompt: '分别用 println 和 print 输出两行内容，使其最终输出三行文字。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        System.out.println("第一行");
        System.out.___("第二行\\n");
        System.out.println("第三行");
    }
}`,
              expected_output: '第一行\n第二行\n第三行',
              hints: [
                'print 不会自动换行，但 \\n 可以手动换行',
                '这里用 print 输出 "第二行\\n"，换行符 \\n 会将光标移到下一行',
              ],
            },
          ],
          realWorldScenario:
            '在任何 Java 项目中——无论是 Spring Boot 后端服务、Android 应用还是大数据处理引擎——' +
            '程序的执行都从 main 方法开始。理解程序入口结构是参与任何 Java 项目的前提。' +
            '例如，一个微服务的启动类中，main 方法负责初始化 Spring 容器并启动嵌入式服务器。',
        },
        {
          id: 'java-ch1-l2',
          title: '变量与数据类型',
          order: 1,
          content_md:
            'Java 是强类型语言，每个变量必须先声明类型再使用。' +
            'Java 的基本数据类型（primitive types）共有 8 种：' +
            '整型 `byte`(1字节)、`short`(2字节)、`int`(4字节)、`long`(8字节)；' +
            '浮点型 `float`(4字节)、`double`(8字节)；' +
            '字符型 `char`(2字节)；布尔型 `boolean`(true/false)。\n\n' +
            '除了基本类型，Java 还有引用类型（reference types），如 `String`、数组、自定义类等。' +
            '`String` 虽然常被当作基本类型使用，但它本质上是一个类。' +
            'Java 10 引入了 `var` 关键字，可以局部变量类型推断，' +
            '但类型仍然是编译时确定的，只是让编译器帮你推断。\n\n' +
            '类型转换分为自动转换（ widening，小类型→大类型）和强制转换（narrowing，大类型→小类型）。' +
            '例如 `int` 可以自动转为 `double`，但 `double` 转 `int` 需要强制转换 `(int)`，' +
            '且可能丢失精度。理解类型系统对避免运行时错误至关重要。',
          examples: [
            {
              title: '基本数据类型演示',
              code: `public class Main {
    public static void main(String[] args) {
        int age = 25;
        long population = 7800000000L;
        double price = 19.99;
        float score = 95.5f;
        char grade = 'A';
        boolean isPass = true;
        byte b = 127;

        System.out.println("年龄: " + age);
        System.out.println("人口: " + population);
        System.out.println("价格: " + price);
        System.out.println("评分: " + score);
        System.out.println("等级: " + grade);
        System.out.println("是否及格: " + isPass);
        System.out.println("字节值: " + b);
    }
}`,
              explanation:
                'long 类型字面量需加 L 后缀，float 需加 f 后缀。' +
                'char 用单引号包裹单个字符。+ 运算符用于字符串拼接。' +
                '注意 byte 的范围是 -128 到 127。',
            },
            {
              title: 'var 类型推断（Java 10+）',
              code: `public class Main {
    public static void main(String[] args) {
        var name = "张三";       // 推断为 String
        var count = 100;         // 推断为 int
        var pi = 3.14159;        // 推断为 double
        var isActive = true;     // 推断为 boolean

        System.out.println(name + " - " + count);
        System.out.println("pi = " + pi);
        System.out.println("active = " + isActive);
    }
}`,
              explanation:
                'var 让编译器根据右侧值推断类型，代码更简洁。' +
                '但 var 只能用于局部变量，不能用于成员变量和方法参数。' +
                '类型仍然是静态的，编译后不存在 var。',
            },
            {
              title: '类型转换',
              code: `public class Main {
    public static void main(String[] args) {
        // 自动类型转换（ widening）
        int i = 100;
        double d = i;  // int -> double，自动转换
        System.out.println("int -> double: " + d);

        // 强制类型转换（narrowing）
        double pi = 3.14159;
        int intPi = (int) pi;  // double -> int，强制转换，丢失小数
        System.out.println("double -> int: " + intPi);

        // char 与 int 的转换
        char ch = 'A';
        int code = ch;  // char -> int，获取 ASCII 码
        System.out.println("字符 A 的 ASCII 码: " + code);

        char ch2 = (char) (code + 1);  // int -> char
        System.out.println("ASCII 66 对应字符: " + ch2);
    }
}`,
              explanation:
                '小类型到大类型自动转换，大类型到小类型需强制转换。' +
                'char 本质上是一个无符号 16 位整数，可以与 int 互转。' +
                '强制转换可能导致精度丢失，需谨慎使用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '声明 int 变量 a=10, b=3，将 a/b 的结果转为 double 后输出（结果应为 3.333...）。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        double result = ___;
        System.out.println(result);
    }
}`,
              expected_output: '3.3333333333333335',
              hints: [
                '直接 a / b 会做整数除法，结果为 3',
                '需要先将其中一个转为 double：(double) a / b',
                '注意 double 除法的结果精度',
              ],
            },
            {
              type: 'output-match',
              prompt: "声明 char 变量 ch = 'Z'，将其 ASCII 码值输出（Z 的 ASCII 码为 90）。",
              starter_code: `public class Main {
    public static void main(String[] args) {
        char ch = 'Z';
        int code = ___;
        System.out.println(code);
    }
}`,
              expected_output: '90',
              hints: [
                'char 可以自动转换为 int',
                '直接赋值即可：int code = ch',
              ],
            },
          ],
          realWorldScenario:
            '在电商系统中，商品价格用 double 或 BigDecimal 存储，库存数量用 int，' +
            '用户 ID 可能用 long。选择合适的数据类型直接影响内存占用和计算精度。' +
            '例如，金融系统必须使用 BigDecimal 而非 double 来避免浮点精度问题。',
        },
        {
          id: 'java-ch1-l3',
          title: '运算符',
          order: 2,
          content_md:
            'Java 提供了丰富的运算符。算术运算符包括 `+`、`-`、`*`、`/`、`%`（取模）。' +
            '注意整数除法会截断小数部分，如 `7 / 2` 结果为 `3` 而非 `3.5`。' +
            '`%` 取模运算常用于判断奇偶性、获取个位数字等场景。\n\n' +
            '关系运算符包括 `==`、`!=`、`>`、`<`、`>=`、`<=`，返回 boolean 值。' +
            '逻辑运算符 `&&`（与）、`||`（或）、`!`（非）用于组合条件。' +
            '`&&` 和 `||` 是短路运算符——如果左侧表达式已能决定结果，右侧不会求值。' +
            '例如 `false && (1/0 > 0)` 不会抛出除零异常。\n\n' +
            '赋值运算符 `=`、`+=`、`-=` 等，自增 `++`、自减 `--` 有前置和后置之分。' +
            '三元运算符 `条件 ? 值1 : 值2` 是简洁的条件表达式。' +
            '位运算符 `&`、`|`、`^`、`~`、`<<`、`>>` 在底层编程中很有用。' +
            '理解运算符优先级可以避免很多隐蔽的 bug，但建议用括号明确意图。',
          examples: [
            {
              title: '算术运算与取模',
              code: `public class Main {
    public static void main(String[] args) {
        int a = 17, b = 5;
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));   // 整数除法
        System.out.println("a % b = " + (a % b));   // 取模

        // 判断奇偶
        System.out.println("a 是奇数? " + (a % 2 != 0));

        // 获取各位数字
        System.out.println("a 的个位: " + (a % 10));
        System.out.println("a 的十位: " + (a / 10 % 10));
    }
}`,
              explanation:
                '整数除法 17/5=3，取模 17%5=2。取模运算常用于判断奇偶、' +
                '获取数字各位、循环队列下标计算等场景。注意运算符优先级：* 和 / 高于 + 和 -。',
            },
            {
              title: '短路逻辑与三元运算符',
              code: `public class Main {
    public static void main(String[] args) {
        int score = 75;
        // 短路逻辑：&& 左侧为 false 时右侧不执行
        boolean canGraduate = score >= 60 && checkAttendance();
        System.out.println("可以毕业? " + canGraduate);

        // 三元运算符替代 if-else
        String level = score >= 90 ? "优秀" : score >= 60 ? "及格" : "不及格";
        System.out.println("等级: " + level);

        // 自增自减
        int i = 5;
        System.out.println("i++ = " + (i++));  // 先用后加，输出5
        System.out.println("i = " + i);         // i 现在是6
        System.out.println("++i = " + (++i));  // 先加后用，输出7
    }

    static boolean checkAttendance() {
        System.out.println("  -> 检查考勤中...");
        return true;
    }
}`,
              explanation:
                '&& 是短路运算符：score >= 60 为 true 时才会调用 checkAttendance。' +
                '三元运算符可以嵌套使用，但不宜过深。' +
                'i++ 先返回值再加1，++i 先加1再返回值，这个区别在面试中常考。',
            },
            {
              title: '位运算应用',
              code: `public class Main {
    public static void main(String[] args) {
        int a = 0b1010; // 10
        int b = 0b1100; // 12

        System.out.println("a & b = " + (a & b));  // 8  (1000)
        System.out.println("a | b = " + (a | b));  // 14 (1110)
        System.out.println("a ^ b = " + (a ^ b));  // 6  (0110)
        System.out.println("~a = " + (~a));         // -11

        // 左移相当于乘2
        System.out.println("1 << 3 = " + (1 << 3)); // 8

        // 判断奇偶（比 %2 更高效）
        System.out.println("10 是偶数? " + ((a & 1) == 0));
    }
}`,
              explanation:
                '位运算直接操作二进制位，性能极高。& 按位与、| 按位或、^ 按位异或。' +
                '左移 << 相当于乘2的n次方，右移 >> 相当于除以2的n次方。' +
                '在权限系统、加密算法、底层框架中大量使用位运算。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '计算表达式 (15 + 7) * 3 - 20 / 4 的值并输出。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int result = ___;
        System.out.println(result);
    }
}`,
              expected_output: '61',
              hints: [
                '注意运算符优先级：先算括号，再算乘除，最后算加减',
                '(15 + 7) * 3 = 66, 20 / 4 = 5, 66 - 5 = 61',
              ],
            },
            {
              type: 'output-match',
              prompt: '用三元运算符判断变量 n=7 是奇数还是偶数，输出 "奇数" 或 "偶数"。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int n = 7;
        String result = ___;
        System.out.println(result);
    }
}`,
              expected_output: '奇数',
              hints: [
                '用 n % 2 判断奇偶，结果为1是奇数，为0是偶数',
                '三元运算符格式：条件 ? "奇数" : "偶数"',
                '完整写法：n % 2 != 0 ? "奇数" : "偶数"',
              ],
            },
          ],
          realWorldScenario:
            '在权限管理系统中，常用位运算组合权限：读=1(001)、写=2(010)、执行=4(100)。' +
            '用户权限 5 = 1 | 4 表示有读和执行权限。检查权限用 `permission & READ != 0`。' +
            '这种位掩码方式在 Linux 文件权限、Android 权限系统中广泛使用。',
        },
        {
          id: 'java-ch1-l4',
          title: '输入与输出格式化',
          order: 3,
          content_md:
            'Java 的输出除了 `println` 和 `print`，还有强大的 `printf` 方法，' +
            '支持 C 语言风格的格式化字符串。`%d` 格式化整数、`%f` 格式化浮点数、' +
            '`%s` 格式化字符串、`%n` 表示平台无关的换行。' +
            '例如 `System.out.printf("姓名:%s, 年龄:%d%n", name, age)`。\n\n' +
            '`String.format()` 方法与 `printf` 使用相同的格式化语法，但返回格式化后的字符串而非直接输出。' +
            '这在需要拼接复杂字符串时非常有用。浮点数格式化可以指定小数位数，' +
            '如 `%.2f` 保留两位小数。格式化输出在生成报表、日志等场景中必不可少。\n\n' +
            '`Scanner` 类是 Java 中最常用的输入工具，可以读取控制台输入。' +
            '`nextInt()` 读取整数，`nextDouble()` 读取浮点数，`next()` 读取一个单词（空格分隔），' +
            '`nextLine()` 读取整行。在在线编译器环境中，输入通常通过预设的测试用例提供，' +
            '但理解 Scanner 的用法对本地开发和面试手撕代码很重要。',
          examples: [
            {
              title: 'printf 格式化输出',
              code: `public class Main {
    public static void main(String[] args) {
        String name = "张三";
        int age = 25;
        double salary = 15000.5678;

        // printf 格式化输出
        System.out.printf("姓名:%s, 年龄:%d%n", name, age);
        System.out.printf("薪资:%.2f%n", salary);       // 保留2位小数
        System.out.printf("薪资:%,.2f%n", salary);      // 千位分隔符
        System.out.printf("右对齐:%10d%n", age);          // 宽度10，右对齐
        System.out.printf("左对齐:%-10d结束%n", age);     // 宽度10，左对齐
        System.out.printf("十六进制:0x%x%n", 255);       // 十六进制输出
    }
}`,
              explanation:
                '%s 字符串, %d 整数, %f 浮点数, %n 换行。' +
                '%.2f 保留2位小数，%10d 宽度10右对齐，%-10d 左对齐。' +
                '%,f 添加千位分隔符。printf 在生成格式化报表时非常有用。',
            },
            {
              title: 'String.format 拼接字符串',
              code: `public class Main {
    public static void main(String[] args) {
        String name = "李四";
        int score = 95;
        double avg = 87.5;

        // String.format 返回格式化字符串
        String report = String.format(
            "学生:%s, 总分:%d, 平均分:%.1f", name, score, avg
        );
        System.out.println(report);

        // 构建表格
        String header = String.format("%-8s%-8s%-8s%n", "姓名", "分数", "等级");
        String row1 = String.format("%-8s%-8d%-8s%n", "张三", 90, "A");
        String row2 = String.format("%-8s%-8d%-8s%n", "李四", 85, "B");
        System.out.print(header + row1 + row2);
    }
}`,
              explanation:
                'String.format 与 printf 使用相同的格式化语法，但返回字符串。' +
                '适合需要将格式化结果存储或传递的场景。这里用 %-8s 构建左对齐的表格。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 printf 输出圆的面积，半径为 5，结果保留 2 位小数。输出格式：面积:78.54',
              starter_code: `public class Main {
    public static void main(String[] args) {
        double r = 5.0;
        double area = 3.14159265 * r * r;
        System.out.printf(___, area);
    }
}`,
              expected_output: '面积:78.54',
              hints: [
                '格式化字符串需要包含 "面积:" 前缀和 %.2f',
                '完整写法："面积:%.2f" 即可输出 面积:78.54',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 String.format 构建字符串 "姓名:王五, 年龄:30, 体重:65.5kg" 并输出。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        String name = "王五";
        int age = 30;
        double weight = 65.5;
        String info = String.format(___);
        System.out.println(info);
    }
}`,
              expected_output: '姓名:王五, 年龄:30, 体重:65.5kg',
              hints: [
                '格式化字符串需要 %s、%d、%.1f 分别对应字符串、整数、浮点数',
                '完整写法："姓名:%s, 年龄:%d, 体重:%.1fkg", name, age, weight',
              ],
            },
          ],
          realWorldScenario:
            '在日志系统中，格式化输出至关重要。例如 SLF4J 的日志语句 ' +
            '`log.info("用户{}下单成功,金额{}元", userId, amount)` 就使用了类似的占位符机制。' +
            '在生成财务报表、CSV 文件、对账单时，printf 风格的格式化是标准做法。',
        },
      ],
    },
    // ==================== 第二章 ====================
    {
      id: 'java-ch2',
      title: '控制流',
      order: 1,
      lessons: [
        {
          id: 'java-ch2-l1',
          title: 'if / else 条件语句',
          order: 0,
          content_md:
            '条件语句是程序逻辑的基础。Java 的 `if` 语句有三种形式：' +
            '`if`、`if-else`、`if-else if-else`。条件表达式必须返回 boolean 值，' +
            '这与 C/C++ 不同——Java 不允许将非零整数当作 true。\n\n' +
            '当 if/else 体内只有一条语句时，花括号可以省略，但强烈建议始终使用花括号。' +
            '这是因为在后续维护中，添加语句时容易忘记加花括号，导致难以发现的逻辑错误。' +
            '这也是阿里巴巴 Java 开发手册中明确要求的编码规范。\n\n' +
            '嵌套的 if 语句可以处理复杂条件，但过深的嵌套会降低代码可读性。' +
            '通常可以通过提前 return（卫语句）、合并条件、使用策略模式等手段重构。' +
            '三元运算符 `? :` 可以替代简单的 if-else，使代码更简洁，但不宜嵌套过深。',
          examples: [
            {
              title: '成绩等级判断',
              code: `public class Main {
    public static void main(String[] args) {
        int score = 85;

        if (score >= 90) {
            System.out.println("优秀");
        } else if (score >= 80) {
            System.out.println("良好");
        } else if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
    }
}`,
              explanation:
                'if-else if-else 链从上到下依次判断，一旦某个条件为 true 就执行对应代码块并跳出。' +
                'else 块是可选的，当所有条件都不满足时执行。注意条件判断的顺序。',
            },
            {
              title: '闰年判断（嵌套条件）',
              code: `public class Main {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeap;

        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    isLeap = true;
                } else {
                    isLeap = false;
                }
            } else {
                isLeap = true;
            }
        } else {
            isLeap = false;
        }

        System.out.println(year + " 是闰年? " + isLeap);
    }
}`,
              explanation:
                '闰年规则：能被4整除但不能被100整除，或者能被400整除。' +
                '这里用嵌套 if 展示逻辑，实际开发中更简洁的写法是：' +
                '(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)。',
            },
            {
              title: '卫语句优化',
              code: `public class Main {
    public static void main(String[] args) {
        int score = 55;
        String result = checkScore(score);
        System.out.println(result);
    }

    static String checkScore(int score) {
        // 卫语句：提前返回，避免深层嵌套
        if (score < 0 || score > 100) {
            return "无效分数";
        }
        if (score < 60) {
            return "不及格";
        }
        if (score < 80) {
            return "及格";
        }
        return "优秀";
    }
}`,
              explanation:
                '卫语句（Guard Clause）是一种优化技巧：先处理异常或简单情况并提前 return，' +
                '避免深层嵌套。这比把所有逻辑塞进一个大的 if-else 链更清晰易读，' +
                '是专业 Java 开发中推荐的编码风格。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '判断变量 n=17 是奇数还是偶数，如果是偶数输出 "偶数"，否则输出 "奇数"。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int n = 17;
        if (___) {
            System.out.println("偶数");
        } else {
            System.out.println("奇数");
        }
    }
}`,
              expected_output: '奇数',
              hints: [
                '用 n % 2 == 0 判断偶数',
                '17 % 2 = 1，不等于0，所以走 else 分支输出 "奇数"',
              ],
            },
            {
              type: 'output-match',
              prompt: '给定分数 score=75，输出等级：>=90 优秀，>=75 良好，>=60 及格，否则不及格。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int score = 75;
        if (score >= 90) {
            System.out.println("优秀");
        } else if (___) {
            System.out.println("良好");
        } else if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
    }
}`,
              expected_output: '良好',
              hints: [
                '良好区间是 75 到 89，即 score >= 75',
                '注意 else if 的顺序：先判断 >=90，再判断 >=75',
              ],
            },
          ],
          realWorldScenario:
            '在订单系统中，if-else 用于业务规则判断：' +
            '如果订单金额 > 1000 享受 8 折，> 500 享受 9 折，否则原价。' +
            '在支付系统中，根据支付方式（微信/支付宝/银行卡）走不同的处理逻辑。' +
            '合理使用卫语句能让复杂的业务条件保持清晰可维护。',
        },
        {
          id: 'java-ch2-l2',
          title: 'switch 语句',
          order: 1,
          content_md:
            '`switch` 语句根据变量的值跳转到匹配的 `case` 分支，' +
            '比冗长的 if-else if 链更清晰。Java 的 switch 支持 `byte`、`short`、`int`、' +
            '`char`、`String`（Java 7+）和枚举类型。\n\n' +
            '每个 case 分支末尾必须用 `break` 跳出，否则会"穿透"（fall-through）执行后续 case。' +
            '虽然穿透有时是期望的行为（如多个 case 共享代码），但大多数情况下是 bug 的来源。' +
            '`default` 分支处理所有未匹配的情况，类似于 else，建议始终保留。\n\n' +
            'Java 14 引入了 switch 表达式（正式版 Java 17），使用箭头语法 `case X ->` ' +
            '自动 break 并可直接返回值。这大大简化了代码，是现代 Java 推荐的写法。' +
            'switch 表达式使代码更函数式、更安全，避免了忘记 break 的常见错误。',
          examples: [
            {
              title: 'switch 基础用法',
              code: `public class Main {
    public static void main(String[] args) {
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("星期一");
                break;
            case 2:
                System.out.println("星期二");
                break;
            case 3:
                System.out.println("星期三");
                break;
            case 4:
                System.out.println("星期四");
                break;
            case 5:
                System.out.println("星期五");
                break;
            case 6:
            case 7:
                System.out.println("周末");
                break;
            default:
                System.out.println("无效日期");
        }
    }
}`,
              explanation:
                'case 6 和 7 共享同一段代码（穿透特性）。' +
                '每个 case 用 break 跳出。default 处理非法输入。' +
                '如果 day=3，匹配 case 3 输出 "星期三"。',
            },
            {
              title: 'switch 表达式（Java 17+）',
              code: `public class Main {
    public static void main(String[] args) {
        String season = "春";
        String description = switch (season) {
            case "春" -> "万物复苏";
            case "夏" -> "烈日炎炎";
            case "秋" -> "硕果累累";
            case "冬" -> "银装素裹";
            default -> "未知季节";
        };
        System.out.println(season + ": " + description);

        // 合并多个 case
        int month = 7;
        String q = switch (month) {
            case 3, 4, 5 -> "Q1";
            case 6, 7, 8 -> "Q2";
            case 9, 10, 11 -> "Q3";
            case 12, 1, 2 -> "Q4";
            default -> "无效";
        };
        System.out.println("季度: " + q);
    }
}`,
              explanation:
                'Java 17 switch 表达式用 -> 箭头语法，自动 break 无穿透。' +
                '可以直接返回值赋给变量。多个值用逗号合并：case 3, 4, 5。' +
                '这是现代 Java 推荐的写法，更安全更简洁。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 switch 语句根据月份 month=2 输出该月天数（2024年是闰年，2月29天）。' +
                '输出格式："29天"。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int month = 2;
        switch (month) {
            case 1: case 3: case 5: case 7:
            case 8: case 10: case 12:
                System.out.println("31天");
                break;
            case 4: case 6: case 9: case 11:
                System.out.println("30天");
                break;
            case 2:
                System.out.println(___);
                break;
        }
    }
}`,
              expected_output: '29天',
              hints: [
                '2月在闰年有29天',
                '直接输出字符串 "29天" 即可',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 switch 表达式根据运算符 op="*" 对 a=12, b=4 进行运算并输出结果。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        String op = "*";
        int a = 12, b = 4;
        int result = switch (op) {
            case "+" -> a + b;
            case "-" -> a - b;
            case "*" -> ___;
            case "/" -> a / b;
            default -> 0;
        };
        System.out.println(result);
    }
}`,
              expected_output: '48',
              hints: [
                '乘法运算用 a * b',
                'switch 表达式的箭头后面直接写返回值表达式',
              ],
            },
          ],
          realWorldScenario:
            '在游戏开发中，switch 用于处理不同类型的游戏事件（攻击/防御/治疗/移动）。' +
            '在状态机实现中，switch 根据当前状态执行不同逻辑。' +
            '在 HTTP 路由中，switch（或其表达式形式）根据请求方法（GET/POST/PUT/DELETE）' +
            '分发到不同的处理函数。Spring 的 @RequestMapping 注解底层也是类似的分发逻辑。',
        },
        {
          id: 'java-ch2-l3',
          title: 'for 循环',
          order: 2,
          content_md:
            '`for` 循环是最常用的循环结构，语法为 `for (初始化; 条件; 更新) { 循环体 }`。' +
            '三个部分都是可选的，但分号不能省略。`for(;;)` 是无限循环，等价于 `while(true)`。' +
            '循环变量通常用 i, j, k 命名，这是编程界的传统约定。\n\n' +
            '增强 for 循环（for-each）用于遍历数组和集合：`for (元素类型 变量 : 集合) { }`。' +
            '它隐藏了索引，代码更简洁，但不适合需要索引或修改元素的场景。' +
            '增强 for 循环是 Java 5 引入的语法糖，底层对数组使用索引遍历，对集合使用迭代器。\n\n' +
            '嵌套循环常用于处理二维数据（矩阵、棋盘）和生成组合。' +
            '经典的九九乘法表就是两层嵌套循环的典型应用。' +
            '注意内层循环的执行次数等于外层循环次数乘以内层循环次数，' +
            '嵌套过深会导致性能问题（O(n²)甚至更高复杂度）。',
          examples: [
            {
              title: '经典：1到100求和',
              code: `public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("1到100的和: " + sum);
    }
}`,
              explanation:
                'for 循环三要素：int i=1 初始化、i<=100 条件、i++ 更新。' +
                '循环体 sum += i 每次把 i 加到 sum。结果 5050 是高斯求和公式的结果。',
            },
            {
              title: '九九乘法表',
              code: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 9; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.printf("%d*%d=%-4d", j, i, j * i);
            }
            System.out.println();
        }
    }
}`,
              explanation:
                '外层循环控制行（i），内层循环控制列（j），j 从1到i 形成三角形。' +
                '%-4d 左对齐宽度4，使列对齐。嵌套循环是处理二维结构的常用手段。',
            },
            {
              title: '增强 for 循环',
              code: `public class Main {
    public static void main(String[] args) {
        int[] nums = {10, 20, 30, 40, 50};
        int sum = 0;

        // 增强 for 循环遍历数组
        for (int num : nums) {
            sum += num;
        }
        System.out.println("总和: " + sum);

        String[] fruits = {"苹果", "香蕉", "橙子"};
        for (String fruit : fruits) {
            System.out.println("水果: " + fruit);
        }
    }
}`,
              explanation:
                '增强 for 循环语法：for (类型 变量 : 数组/集合)。' +
                '每次循环变量自动获取下一个元素，无需管理索引。' +
                '适合只读遍历场景，但无法获取索引或修改数组元素本身。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 for 循环计算 1 到 10 的乘积（即 10 的阶乘，10!），输出结果。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        long product = 1;
        for (int i = 1; i <= 10; i++) {
            product ___;
        }
        System.out.println(product);
    }
}`,
              expected_output: '3628800',
              hints: [
                '阶乘是连乘，所以用 product *= i',
                '注意用 long 类型防止溢出',
              ],
            },
            {
              type: 'output-match',
              prompt: '用嵌套 for 循环打印一个 3 行 5 列的星号矩形。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print(___);
            }
            System.out.println();
        }
    }
}`,
              expected_output: '*****\n*****\n*****',
              hints: [
                '内层循环每行打印5个星号，不加换行',
                '用 System.out.print("*") 打印单个星号',
                '外层循环每行结束后用 println 换行',
              ],
            },
          ],
          realWorldScenario:
            '在数据处理中，for 循环用于批量处理：遍历订单列表计算总金额、' +
            '遍历用户列表发送通知、遍历商品列表筛选符合条件的商品。' +
            '在算法题中，嵌套 for 循环常用于矩阵操作、冒泡排序、查找重复元素。' +
            '九九乘法表是面试中考察嵌套循环的经典题目。',
        },
        {
          id: 'java-ch2-l4',
          title: 'while 循环与 break/continue',
          order: 3,
          content_md:
            '`while` 循环在条件为 true 时重复执行代码块，适合循环次数不确定的场景。' +
            '`do-while` 循环先执行一次循环体再判断条件，保证至少执行一次。' +
            '当循环次数确定时优先用 for，不确定时用 while。\n\n' +
            '`break` 立即跳出当前循环，`continue` 跳过本次循环剩余代码进入下一次迭代。' +
            '在嵌套循环中，break 只跳出最内层循环。' +
            'Java 支持带标签的 break（`break label;`）可以跳出多层循环，但使用较少。\n\n' +
            '死循环 `while(true)` 或 `for(;;)` 在实际开发中很常见——' +
            '通常配合 break 在满足条件时退出，如事件循环、消息队列消费、游戏主循环。' +
            '务必确保循环体内有能改变循环条件的逻辑，否则会造成真正的死循环导致程序卡死。' +
            '这是新手最容易犯的错误之一。',
          examples: [
            {
              title: 'while 求阶乘',
              code: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        long result = 1;
        int i = 1;
        while (i <= n) {
            result *= i;
            i++;
        }
        System.out.println(n + "! = " + result);
    }
}`,
              explanation:
                'while 循环每次检查 i <= n，为 true 则执行循环体。' +
                '循环体内必须更新 i，否则死循环。5! = 120。',
            },
            {
              title: 'break 与 continue',
              code: `public class Main {
    public static void main(String[] args) {
        // 找到第一个能被7整除的数（break）
        for (int i = 1; i <= 100; i++) {
            if (i % 7 == 0) {
                System.out.println("第一个7的倍数: " + i);
                break;
            }
        }

        // 跳过所有3的倍数（continue）
        System.out.print("1-10中非3的倍数: ");
        for (int i = 1; i <= 10; i++) {
            if (i % 3 == 0) {
                continue;  // 跳过3的倍数
            }
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`,
              explanation:
                'break 跳出整个循环，continue 只跳过本次循环。' +
                'break 常用于查找场景（找到就停），continue 用于跳过不需要处理的元素。',
            },
            {
              title: '数字位数计算',
              code: `public class Main {
    public static void main(String[] args) {
        int num = 123456;
        int temp = num;
        int count = 0;
        while (temp > 0) {
            temp /= 10;
            count++;
        }
        System.out.println(num + " 有 " + count + " 位");

        // 反转数字
        int n = 12345;
        int reversed = 0;
        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        System.out.println("反转后: " + reversed);
    }
}`,
              explanation:
                '每次除以10去掉一位，count++ 统计位数。while 循环适合这种循环次数不确定的场景。' +
                '反转数字是经典面试题：每次取个位数字拼到结果上。注意整数反转可能溢出。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 while 循环计算数字 987654 的各位数字之和。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int num = 987654;
        int sum = 0;
        while (num > 0) {
            sum += ___;
            num /= 10;
        }
        System.out.println(sum);
    }
}`,
              expected_output: '39',
              hints: [
                'num % 10 获取最后一位数字',
                '9+8+7+6+5+4 = 39',
                '每次循环累加 num % 10，然后 num /= 10 去掉最后一位',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 while 循环和 break 找出 1 到 50 中第一个同时能被 3 和 7 整除的数。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 50) {
            if (___) {
                System.out.println(i);
                break;
            }
            i++;
        }
    }
}`,
              expected_output: '21',
              hints: [
                '同时被3和7整除：i % 3 == 0 && i % 7 == 0',
                '21 是第一个同时被3和7整除的数（3*7=21）',
              ],
            },
          ],
          realWorldScenario:
            '在消息队列消费者中，`while(true)` 持续轮询消息，收到退出信号时 break。' +
            '在重试逻辑中，while 循环重试网络请求直到成功或达到最大重试次数。' +
            '在游戏中，主循环 `while(gameRunning)` 持续处理输入、更新状态、渲染画面。' +
            '数字反转和位数计算是算法面试中的基础题目。',
        },
      ],
    },
    // ==================== 第三章 ====================
    {
      id: 'java-ch3',
      title: '方法与数组',
      order: 2,
      lessons: [
        {
          id: 'java-ch3-l1',
          title: '方法定义与调用',
          order: 0,
          content_md:
            '方法（Method）是组织代码的基本单元，将一段逻辑封装为可复用的代码块。' +
            'Java 方法定义包含：修饰符、返回类型、方法名、参数列表、方法体。' +
            '例如 `public static int add(int a, int b) { return a + b; }`。' +
            '`return` 返回结果并结束方法；`void` 方法不需要 return 语句。\n\n' +
            '方法命名遵循小驼峰命名法（camelCase），如 `calculateSum`、`isValid`。' +
            '好的方法名应该能自解释——让读者一看名字就知道方法做什么。' +
            '方法应该遵循单一职责原则（SRP），一个方法只做一件事。' +
            '过长的方法（超过50行）应该拆分为多个小方法。\n\n' +
            '方法调用时，参数按值传递。对于基本类型，传递的是值的副本；' +
            '对于引用类型（对象、数组），传递的是引用的副本，' +
            '所以方法内可以修改对象内部状态，但不能改变引用本身指向的对象。' +
            '理解"值传递"的本质是 Java 程序员必须掌握的知识点。',
          examples: [
            {
              title: '定义和调用方法',
              code: `public class Main {
    public static void main(String[] args) {
        // 调用方法
        int result = add(10, 20);
        System.out.println("10 + 20 = " + result);

        greet("张三");
        greet("李四");
    }

    // 有返回值的方法
    static int add(int a, int b) {
        return a + b;
    }

    // 无返回值的方法（void）
    static void greet(String name) {
        System.out.println("你好, " + name + "!");
    }
}`,
              explanation:
                'add 方法接收两个 int 参数，返回 int。greet 方法接收 String 参数，无返回值。' +
                'static 方法可以通过类名直接调用（此处省略类名因为是同一个类）。' +
                '方法定义必须在类内部，不能嵌套定义。',
            },
            {
              title: '方法的值传递',
              code: `public class Main {
    public static void main(String[] args) {
        // 基本类型：值传递，方法内修改不影响外部
        int x = 10;
        modifyPrimitive(x);
        System.out.println("x = " + x);  // 仍然是10

        // 数组：引用传递，方法内可修改元素
        int[] arr = {1, 2, 3};
        modifyArray(arr);
        System.out.println("arr[0] = " + arr[0]);  // 变成99
    }

    static void modifyPrimitive(int n) {
        n = 999;  // 修改副本，不影响原始变量
    }

    static void modifyArray(int[] a) {
        a[0] = 99;  // 通过引用修改数组元素，影响原始数组
    }
}`,
              explanation:
                'Java 只有值传递。基本类型传递值的副本，修改不影响原变量。' +
                '数组是引用类型，传递的是引用的副本，但指向同一个数组对象，' +
                '所以通过引用修改元素会影响原数组。这是面试高频考点。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义方法 max(int a, int b) 返回较大值，调用 max(15, 28) 并输出结果。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        System.out.println(max(15, 28));
    }

    static int max(int a, int b) {
        return ___;
    }
}`,
              expected_output: '28',
              hints: [
                '可以用三元运算符：a > b ? a : b',
                '也可以用 if-else 语句实现',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义方法 isEven(int n) 判断 n 是否为偶数，返回 boolean。调用 isEven(16) 输出结果。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        System.out.println(isEven(16));
    }

    static boolean isEven(int n) {
        return ___;
    }
}`,
              expected_output: 'true',
              hints: [
                '偶数能被2整除，即 n % 2 == 0',
                '直接返回 n % 2 == 0 这个布尔表达式即可',
              ],
            },
          ],
          realWorldScenario:
            '在任何 Java 项目中，方法是最基本的代码复用单元。' +
            '在 Spring Boot 后端中，Controller 的每个处理方法对应一个 API 端点；' +
            'Service 层的方法封装业务逻辑；DAO 层的方法操作数据库。' +
            '好的方法设计让代码可读、可测试、可维护。' +
            '例如，电商系统的 `calculateOrderTotal(Order order)` 方法封装了金额计算逻辑，' +
            '多处调用保持逻辑一致。',
        },
        {
          id: 'java-ch3-l2',
          title: '方法参数与重载、递归',
          order: 1,
          content_md:
            'Java 支持方法重载（Overloading）：同一个类中可以定义多个同名方法，' +
            '只要参数列表不同（参数个数、类型或顺序不同）。重载是多态的一种体现，' +
            '让 API 更易用——如 `System.out.println` 就有十多个重载版本，' +
            '可以打印 int、String、double 等各种类型。\n\n' +
            '可变参数（varargs）允许方法接受任意数量的参数：`void method(int... nums)`。' +
            '在方法内部，nums 被当作数组处理。可变参数必须是参数列表的最后一个。' +
            '可变参数本质上是语法糖，编译器自动将参数打包成数组。\n\n' +
            '递归是方法调用自身的技巧，适合处理自相似的问题：阶乘、斐波那契数列、' +
            '树遍历、分治算法等。递归必须有一个基线条件（base case）终止递归，' +
            '否则会导致 StackOverflowError。每次递归调用都会在栈上压入一个栈帧，' +
            '递归过深会导致栈溢出。理解递归对于掌握树、图等数据结构和分治算法至关重要。',
          examples: [
            {
              title: '方法重载',
              code: `public class Main {
    public static void main(String[] args) {
        System.out.println(add(10, 20));         // 两个int
        System.out.println(add(10, 20, 30));     // 三个int
        System.out.println(add(1.5, 2.5));       // 两个double
        System.out.println(add("Hello, ", "World")); // 两个String
    }

    static int add(int a, int b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static String add(String a, String b) {
        return a + b;
    }
}`,
              explanation:
                '四个同名 add 方法，参数列表各不相同。编译器根据调用时传入的参数类型和数量决定调用哪个版本。' +
                '方法重载让 API 设计更自然，使用者不需要记忆多个不同的方法名。',
            },
            {
              title: '可变参数',
              code: `public class Main {
    public static void main(String[] args) {
        System.out.println(sum(1, 2, 3));
        System.out.println(sum(10, 20, 30, 40, 50));
        System.out.println(sum());  // 0个参数也行
    }

    // 可变参数：int... nums 在方法内当作数组使用
    static int sum(int... nums) {
        int total = 0;
        for (int n : nums) {
            total += n;
        }
        return total;
    }
}`,
              explanation:
                'int... nums 声明可变参数，调用时可以传任意数量的 int 值。' +
                '在方法体内 nums 被当作 int[] 数组处理。' +
                '可变参数必须是方法的最后一个参数。',
            },
            {
              title: '递归：阶乘与斐波那契',
              code: `public class Main {
    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));
        System.out.println("斐波那契前10项:");
        for (int i = 0; i < 10; i++) {
            System.out.print(fib(i) + " ");
        }
        System.out.println();
    }

    // 递归求阶乘
    static long factorial(int n) {
        if (n <= 1) return 1;       // 基线条件
        return n * factorial(n - 1); // 递归调用
    }

    // 递归求斐波那契数列
    static int fib(int n) {
        if (n <= 1) return n;       // 基线条件
        return fib(n - 1) + fib(n - 2); // 递归调用
    }
}`,
              explanation:
                '递归必须要有基线条件（n <= 1）终止递归。' +
                'factorial(5) = 5*4*3*2*1 = 120。' +
                '注意递归版的 fib 效率很低（O(2^n)），因为大量重复计算。' +
                '实际开发中可用记忆化或迭代优化。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用递归方法 power(int base, int exp) 计算 base 的 exp 次方，' +
                '调用 power(2, 10) 输出结果。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        System.out.println(power(2, 10));
    }

    static int power(int base, int exp) {
        if (exp == 0) return 1;
        return base * ___;
    }
}`,
              expected_output: '1024',
              hints: [
                '递归调用：power(base, exp - 1)',
                '2^10 = 1024，基线条件 exp==0 返回1',
              ],
            },
            {
              type: 'output-match',
              prompt: '重载方法 printInfo：一个版本接收 String name 输出 "姓名:xxx"，' +
                '另一个版本接收 String name 和 int age 输出 "姓名:xxx,年龄:xx"。' +
                '分别调用 printInfo("张三") 和 printInfo("李四", 25)。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        printInfo("张三");
        printInfo("李四", 25);
    }

    static void printInfo(String name) {
        System.out.println("姓名:" + name);
    }

    static void printInfo(String name, int age) {
        System.out.println(___);
    }
}`,
              expected_output: '姓名:张三\n姓名:李四,年龄:25',
              hints: [
                '第二个重载方法需要同时输出姓名和年龄',
                '格式："姓名:" + name + ",年龄:" + age',
              ],
            },
          ],
          realWorldScenario:
            '方法重载在 JDK 中随处可见：System.out.println 有 10+ 个重载版本。' +
            '在实际项目中，重载常用于提供灵活的 API：' +
            '如 `sendEmail(String to)` 和 `sendEmail(String to, String cc, String bcc)`。' +
            '递归在处理树形结构（如 DOM 树、组织架构、文件目录）时不可替代，' +
            '也是理解分治算法（归并排序、快速排序）的基础。',
        },
        {
          id: 'java-ch3-l3',
          title: '一维数组',
          order: 2,
          content_md:
            '数组是 Java 中最基本的数据结构，用于存储固定大小的同类型元素。' +
            '数组声明有三种等价写法：`int[] arr`（推荐）、`int arr[]`（C 风格）、' +
            '`int []arr`（不推荐）。创建数组用 `new int[5]` 或直接初始化 `int[]{1,2,3}`。\n\n' +
            '数组一旦创建，长度固定不可变。通过 `arr.length` 获取长度，' +
            '通过 `arr[index]` 访问元素，索引从 0 开始到 length-1。' +
            '越界访问会抛出 `ArrayIndexOutOfBoundsException`。' +
            '数组在内存中是连续存储的，因此随机访问效率为 O(1)。\n\n' +
            '遍历数组可以用传统 for 循环（需要索引时）或增强 for 循环（只读遍历时）。' +
            '`Arrays` 工具类提供了 `sort`、`toString`、`fill`、`copyOf` 等实用方法。' +
            '理解数组是学习 ArrayList（动态数组）和其他集合的基础。' +
            '数组是引用类型，默认值为 null；基本类型数组的元素默认值为 0/false/\\u0000。',
          examples: [
            {
              title: '数组创建与遍历',
              code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // 三种创建方式
        int[] a = new int[5];           // 默认值全0
        int[] b = {1, 2, 3, 4, 5};     // 直接初始化
        int[] c = new int[]{10, 20, 30};

        // 修改元素
        a[0] = 100;
        a[4] = 500;

        // 遍历
        for (int i = 0; i < b.length; i++) {
            System.out.print(b[i] + " ");
        }
        System.out.println();

        // Arrays.toString 快速打印数组
        System.out.println(Arrays.toString(a));
        System.out.println(Arrays.toString(c));
    }
}`,
              explanation:
                'new int[5] 创建长度5的数组，元素默认0。{1,2,3,4,5} 直接初始化。' +
                'Arrays.toString 将数组转为 [1, 2, 3, 4, 5] 格式的字符串，调试时很方便。',
            },
            {
              title: '数组求最大值与排序',
              code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] nums = {34, 12, 89, 5, 67, 23};

        // 求最大值
        int max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }
        }
        System.out.println("最大值: " + max);

        // 求和与平均值
        int sum = 0;
        for (int n : nums) {
            sum += n;
        }
        System.out.println("总和: " + sum);
        System.out.println("平均: " + (double) sum / nums.length);

        // 排序
        Arrays.sort(nums);
        System.out.println("排序后: " + Arrays.toString(nums));
    }
}`,
              explanation:
                '求最大值是经典算法：假设第一个元素最大，逐个比较更新。' +
                'Arrays.sort 使用双轴快速排序，时间复杂度 O(n log n)。' +
                '注意整数除法需转 double 才能得到小数平均值。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '给定数组 {5, 2, 8, 1, 9, 3}，找出最小值并输出。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int[] nums = {5, 2, 8, 1, 9, 3};
        int min = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (___) {
                min = nums[i];
            }
        }
        System.out.println(min);
    }
}`,
              expected_output: '1',
              hints: [
                '求最小值：当当前元素比 min 小时更新 min',
                '条件：nums[i] < min',
              ],
            },
            {
              type: 'output-match',
              prompt: '将数组 {1,2,3,4,5} 反转后输出。预期输出：[5, 4, 3, 2, 1]',
              starter_code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            ___;
            ___;
        }
        System.out.println(Arrays.toString(arr));
    }
}`,
              expected_output: '[5, 4, 3, 2, 1]',
              hints: [
                '交换后需要让 left 右移、right 左移',
                'left++; right--; 两个指针向中间靠拢',
              ],
            },
            {
              type: 'output-match',
              prompt:
                '二分查找（经典面试题）：在有序数组 {1, 3, 5, 7, 9, 11, 13} 中查找目标值 7，' +
                '输出其索引（从 0 开始）。补全 while 循环内的中间索引计算。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11, 13};
        int target = 7;
        int left = 0, right = arr.length - 1;
        int result = -1;
        while (left <= right) {
            int mid = ___;
            if (arr[mid] == target) {
                result = mid;
                break;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        System.out.println(result);
    }
}`,
              expected_output: '3',
              hints: [
                '中间索引用 (left + right) / 2 计算',
                '注意整数除法会自动向下取整',
                'mid = (left + right) / 2 是标准写法',
              ],
            },
          ],
          realWorldScenario:
            '数组在底层开发中无处不在：图像处理中像素用二维数组表示，' +
            '音频处理中采样数据用数组存储，网络协议中数据包用字节数组传输。' +
            '在算法面试中，数组是最常考的数据结构：双指针、滑动窗口、二分查找等技巧都基于数组。' +
            '反转数组（双指针交换）和求极值是面试高频题。',
        },
        {
          id: 'java-ch3-l4',
          title: '多维数组',
          order: 3,
          content_md:
            'Java 的多维数组本质上是"数组的数组"。二维数组声明为 `int[][] matrix`，' +
            '创建时 `new int[3][4]` 创建 3 行 4 列的矩阵。' +
            '二维数组可以理解为：一个一维数组，每个元素又是一个一维数组。\n\n' +
            'Java 支持不规则数组（Ragged Array）：每行的长度可以不同。' +
            '例如 `int[][] arr = new int[3][];` 先创建行数，' +
            '再逐行 `arr[0] = new int[5]; arr[1] = new int[3];` 指定每行长度。' +
            '这与 C/C++ 的二维数组不同——C 的多维数组在内存中是连续的，' +
            '而 Java 的每行是独立的数组对象。\n\n' +
            '遍历二维数组通常用嵌套循环：外层遍历行，内层遍历列。' +
            '二维数组常用于表示矩阵、棋盘、地图、表格等结构。' +
            '理解多维数组对于学习动态规划（DP 表格）、图的邻接矩阵表示等高级算法至关重要。',
          examples: [
            {
              title: '二维数组与矩阵',
              code: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // 遍历二维数组
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.printf("%4d", matrix[i][j]);
            }
            System.out.println();
        }

        // 计算对角线之和
        int diagSum = 0;
        for (int i = 0; i < matrix.length; i++) {
            diagSum += matrix[i][i];
        }
        System.out.println("对角线之和: " + diagSum);
    }
}`,
              explanation:
                'matrix.length 是行数（3），matrix[i].length 是第i行的列数。' +
                'matrix[i][i] 访问主对角线元素。对角线之和 = 1+5+9 = 15。' +
                '嵌套循环是遍历二维数组的标准方式。',
            },
            {
              title: '杨辉三角',
              code: `public class Main {
    public static void main(String[] args) {
        int n = 6;
        int[][] triangle = new int[n][];

        for (int i = 0; i < n; i++) {
            triangle[i] = new int[i + 1];
            triangle[i][0] = 1;  // 每行首元素为1
            triangle[i][i] = 1;  // 每行末元素为1
            for (int j = 1; j < i; j++) {
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
        }

        // 打印杨辉三角
        for (int[] row : triangle) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}`,
              explanation:
                '杨辉三角是不规则数组的经典应用：第i行有i+1个元素。' +
                '每个数等于它上方和左上方两数之和。' +
                '这是面试常考题，体现了二维数组和动态规划的思想。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 3x3 矩阵，计算所有元素之和。矩阵为 {{1,2,3},{4,5,6},{7,8,9}}。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3}, {4,5,6}, {7,8,9}};
        int sum = 0;
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                sum += ___;
            }
        }
        System.out.println(sum);
    }
}`,
              expected_output: '45',
              hints: [
                '累加每个元素 matrix[i][j]',
                '1+2+3+4+5+6+7+8+9 = 45',
              ],
            },
            {
              type: 'output-match',
              prompt: '将 2x3 矩阵 {{1,2,3},{4,5,6}} 转置为 3x2 矩阵并按行输出。' +
                '每行元素用空格分隔，行末无多余空格。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        int[][] original = {{1, 2, 3}, {4, 5, 6}};
        int rows = original.length;
        int cols = original[0].length;
        int[][] transposed = new int[cols][rows];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                ___;
            }
        }

        for (int i = 0; i < transposed.length; i++) {
            for (int j = 0; j < transposed[i].length; j++) {
                if (j > 0) System.out.print(" ");
                System.out.print(transposed[i][j]);
            }
            System.out.println();
        }
    }
}`,
              expected_output: '1 4\n2 5\n3 6',
              hints: [
                '转置就是行列互换：transposed[j][i] = original[i][j]',
                '原矩阵的行变成新矩阵的列，列变成行',
              ],
            },
          ],
          realWorldScenario:
            '在图像处理中，彩色图片用三维数组表示（高×宽×RGB通道）。' +
            '在游戏开发中，棋盘游戏（国际象棋、五子棋、扫雷）用二维数组表示棋盘状态。' +
            '在机器学习中，神经网络的权重用二维数组（矩阵）表示，矩阵运算是深度学习的核心。' +
            '在地图应用中，网格地图用二维数组存储地形信息。杨辉三角是面试中的经典题目。',
        },
      ],
    },
    // ==================== 第四章 ====================
    {
      id: 'java-ch4',
      title: '面向对象基础',
      order: 3,
      lessons: [
        {
          id: 'java-ch4-l1',
          title: '类与对象',
          order: 0,
          content_md:
            '面向对象编程（OOP）是 Java 的核心范式。类（Class）是对象的蓝图/模板，' +
            '定义了属性（字段）和行为（方法）。对象（Object）是类的实例，通过 `new` 关键字创建。' +
            '类定义了"是什么"，对象是"具体的东西"。\n\n' +
            '类的成员包括：字段（Field，存储状态）、方法（Method，定义行为）、' +
            '构造方法（Constructor，初始化对象）。字段可以是基本类型或引用类型。' +
            '方法可以访问对象的字段，体现了对象"将状态和行为封装在一起"的特性。\n\n' +
            '创建对象使用 `new` 关键字：`Student s = new Student();`。' +
            '这行代码做了三件事：1) 在堆内存中分配空间；2) 调用构造方法初始化；3) 返回引用赋给变量。' +
            's 是一个引用变量，存储的是对象在堆中的地址。' +
            '多个引用可以指向同一个对象，通过任意一个引用修改对象会影响所有引用。',
          examples: [
            {
              title: '定义类与创建对象',
              code: `public class Main {
    public static void main(String[] args) {
        // 创建 Student 对象
        Student s1 = new Student();
        s1.name = "张三";
        s1.age = 20;
        s1.introduce();

        Student s2 = new Student();
        s2.name = "李四";
        s2.age = 22;
        s2.introduce();
    }
}

class Student {
    // 字段（属性）
    String name;
    int age;

    // 方法（行为）
    void introduce() {
        System.out.println("我是" + name + "，今年" + age + "岁");
    }
}`,
              explanation:
                'Student 类定义了 name 和 age 字段以及 introduce 方法。' +
                'new Student() 创建对象，通过 . 访问字段和方法。' +
                '每个对象有自己独立的字段值，s1 和 s2 互不影响。' +
                '注意：在 OnlineCompiler 中，public class Main 和其他类可以在同一文件中。',
            },
            {
              title: '对象作为方法参数',
              code: `public class Main {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle();
        rect.width = 10;
        rect.height = 5;

        printArea(rect);
        doubleRect(rect);
        System.out.println("放大后: " + rect.width + "x" + rect.height);
    }

    static void printArea(Rectangle r) {
        System.out.println("面积: " + r.width * r.height);
    }

    static void doubleRect(Rectangle r) {
        r.width *= 2;
        r.height *= 2;
    }
}

class Rectangle {
    double width;
    double height;
}`,
              explanation:
                '对象作为参数传递时，传递的是引用的副本，方法内修改字段会影响原对象。' +
                'doubleRect 修改了 rect 的宽高，main 中的 rect 也随之改变。' +
                '这体现了引用类型与基本类型传参的区别。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 Car 类，有 brand 和 price 字段，有 display 方法输出 "品牌:xxx,价格:xx万"。' +
                '创建对象设置 brand="比亚迪", price=15，调用 display。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.brand = "比亚迪";
        car.price = 15;
        car.display();
    }
}

class Car {
    String brand;
    int price;

    void display() {
        System.out.println(___);
    }
}`,
              expected_output: '品牌:比亚迪,价格:15万',
              hints: [
                '在 display 方法中拼接字段输出',
                '完整写法："品牌:" + brand + ",价格:" + price + "万"',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Circle 类，有 radius 字段和 getArea 方法返回面积。' +
                '创建半径为5的圆，输出面积（保留2位小数）。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Circle c = new Circle();
        c.radius = 5;
        System.out.printf("%.2f%n", c.getArea());
    }
}

class Circle {
    double radius;

    double getArea() {
        return ___;
    }
}`,
              expected_output: '78.54',
              hints: [
                '圆面积公式：π * r * r',
                '用 Math.PI 获取精确的圆周率',
                'return Math.PI * radius * radius',
              ],
            },
          ],
          realWorldScenario:
            '在电商系统中，User、Product、Order 都是类。' +
            'User 类有 username、email、phone 字段和 login()、register() 方法。' +
            'Product 类有 name、price、stock 字段和 getDescription() 方法。' +
            '面向对象让代码结构更贴近现实世界的概念，降低了理解和维护成本。' +
            'Spring Boot 的实体类（Entity）就是用类来映射数据库表。',
        },
        {
          id: 'java-ch4-l2',
          title: '构造方法与 this 关键字',
          order: 1,
          content_md:
            '构造方法（Constructor）是一种特殊的方法，在创建对象时自动调用，用于初始化对象状态。' +
            '构造方法名必须与类名相同，没有返回类型（连 void 都没有）。' +
            '如果不显式定义构造方法，编译器会自动生成一个无参的默认构造方法。' +
            '一旦定义了任何构造方法，编译器就不再生成默认构造方法。\n\n' +
            '构造方法可以重载，提供不同的初始化方式。' +
            '一个构造方法可以通过 `this(...)` 调用同一个类的另一个构造方法，' +
            '减少代码重复。this(...) 调用必须是构造方法的第一条语句。\n\n' +
            '`this` 关键字指向当前对象，常用于：' +
            '1) 区分参数名与字段名相同时（如 `this.name = name`）；' +
            '2) 调用当前类的其他构造方法（`this(...)`）；' +
            '3) 调用当前对象的方法（`this.method()`，通常省略 this）；' +
            '4) 将当前对象作为参数传递（`otherMethod(this)`）。' +
            '理解 this 是掌握面向对象的关键，它让方法知道"操作的是哪个对象"。',
          examples: [
            {
              title: '构造方法重载与 this',
              code: `public class Main {
    public static void main(String[] args) {
        Person p1 = new Person();               // 无参构造
        Person p2 = new Person("张三");          // 一个参数
        Person p3 = new Person("李四", 25);     // 两个参数
        p1.introduce();
        p2.introduce();
        p3.introduce();
    }
}

class Person {
    String name;
    int age;

    // 无参构造
    Person() {
        this("未知", 0);  // 调用两参构造
    }

    // 一个参数构造
    Person(String name) {
        this(name, 0);   // 调用两参构造
    }

    // 两个参数构造（主构造方法）
    Person(String name, int age) {
        this.name = name;  // this 区分参数和字段
        this.age = age;
    }

    void introduce() {
        System.out.println("我是" + name + "，" + age + "岁");
    }
}`,
              explanation:
                '构造方法重载提供多种初始化方式。this(name, age) 调用另一个构造方法，' +
                '避免重复代码。this.name = name 中，this.name 是字段，name 是参数。' +
                '主构造方法包含完整初始化逻辑，其他构造方法委托给它。',
            },
            {
              title: 'this 用于传递当前对象',
              code: `public class Main {
    public static void main(String[] args) {
        Account acc = new Account("张三", 1000);
        acc.display();
        acc.process();
    }
}

class Account {
    String owner;
    double balance;

    Account(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    void display() {
        System.out.println(owner + " 余额: " + balance);
    }

    void process() {
        // 将当前对象传递给外部方法
        Bank.transfer(this, 200);
        display();
    }
}

class Bank {
    static void transfer(Account acc, double amount) {
        acc.balance -= amount;
        System.out.println("转账 " + amount + " 元");
    }
}`,
              explanation:
                'this 代表当前对象。Bank.transfer(this, 200) 将当前 Account 对象传给 Bank 方法。' +
                'Bank 方法通过接收到的引用修改账户余额。' +
                '这种模式在事件监听、回调等场景中非常常见。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 Book 类，有 title 和 price 字段，构造方法接收两个参数并用 this 赋值。' +
                '创建 Book("Java编程", 89.9)，调用 print 方法输出 "书名:Java编程,价格:89.9"。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Book book = new Book("Java编程", 89.9);
        book.print();
    }
}

class Book {
    String title;
    double price;

    Book(String title, double price) {
        ___;  // 用 this 赋值 title
        ___;  // 用 this 赋值 price
    }

    void print() {
        System.out.println("书名:" + title + ",价格:" + price);
    }
}`,
              expected_output: '书名:Java编程,价格:89.9',
              hints: [
                '当参数名与字段名相同时，必须用 this 区分',
                'this.title = title; this.price = price;',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 User 类，有无参构造和有参构造。无参构造通过 this 调用有参构造，' +
                '默认 name="匿名", age=0。创建无参 User 并输出信息。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        User u = new User();
        System.out.println(u.name + "," + u.age);
    }
}

class User {
    String name;
    int age;

    User() {
        ___;  // 通过 this 调用有参构造
    }

    User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}`,
              expected_output: '匿名,0',
              hints: [
                '无参构造中用 this("匿名", 0) 调用两参构造',
                'this(...) 必须是构造方法的第一条语句',
              ],
            },
          ],
          realWorldScenario:
            '在 Spring 框架中，Bean 的初始化依赖构造方法注入。' +
            '在构建器模式（Builder Pattern）中，构造方法配合 Builder 类创建复杂对象。' +
            'Lombok 的 @AllArgsConstructor、@NoArgsConstructor 自动生成构造方法。' +
            '理解 this 是理解依赖注入、事件监听、回调机制的基础。' +
            '例如 Spring MVC 的 Controller 中 this 代表当前控制器实例。',
        },
        {
          id: 'java-ch4-l3',
          title: '封装与访问修饰符',
          order: 2,
          content_md:
            '封装（Encapsulation）是面向对象三大特性之一，核心思想是隐藏内部实现细节，' +
            '只暴露必要的接口。Java 通过访问修饰符实现封装：' +
            '`private`（同类可见）、`default`（同包可见，无修饰符）、' +
            '`protected`（同包+子类可见）、`public`（全部可见）。\n\n' +
            '封装的标准做法是将字段设为 private，通过 public 的 getter 和 setter 方法控制访问。' +
            'getter/setter 不仅能验证数据合法性，还能在读取或修改时执行额外逻辑（如日志、' +
            '缓存更新、权限检查）。IDE（IntelliJ IDEA、Eclipse）可以一键生成 getter/setter，' +
            'Lombok 的 @Getter @Setter 注解更进一步简化了样板代码。\n\n' +
            '封装的好处：1) 保护数据不被外部随意修改，避免非法状态；' +
            '2) 可以在 setter 中加入验证逻辑（如年龄不能为负数）；' +
            '3) 内部实现可以自由变化而不影响调用方；' +
            '4) 降低耦合度，提高可维护性。' +
            '封装是编写健壮、可维护代码的基础，是专业开发者的必备习惯。',
          examples: [
            {
              title: '封装的标准实现',
              code: `public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("张三", 1000);
        System.out.println(acc.getOwner() + " 余额: " + acc.getBalance());

        acc.deposit(500);
        System.out.println("存入500后: " + acc.getBalance());

        // 直接访问 balance 会编译错误
        // acc.balance = -999;  // 错误！balance 是 private

        acc.withdraw(2000);  // 余额不足
        acc.withdraw(300);   // 正常取款
        System.out.println("最终余额: " + acc.getBalance());
    }
}

class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    // getter
    public String getOwner() { return owner; }
    public double getBalance() { return balance; }

    // 存款
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    // 取款（含验证逻辑）
    public void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("余额不足！");
            return;
        }
        balance -= amount;
        System.out.println("取款 " + amount + " 成功");
    }
}`,
              explanation:
                'balance 是 private，外部只能通过 deposit/withdraw 修改。' +
                'withdraw 方法包含余额验证逻辑，防止透支。' +
                '这就是封装的核心：控制数据的修改方式，保证对象状态始终合法。',
            },
            {
              title: 'setter 中加入验证',
              code: `public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("张三");
        s.setAge(25);
        System.out.println(s.getName() + " - " + s.getAge());

        s.setAge(-5);   // 非法年龄
        System.out.println("年龄仍为: " + s.getAge());

        s.setAge(200);  // 超出合理范围
        System.out.println("年龄仍为: " + s.getAge());
    }
}

class Student {
    private String name;
    private int age;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }

    // setter 中加入验证逻辑
    public void setAge(int age) {
        if (age < 0 || age > 150) {
            System.out.println("非法年龄: " + age);
            return;
        }
        this.age = age;
    }
}`,
              explanation:
                'setAge 方法验证年龄范围（0-150），非法值直接拒绝。' +
                '如果没有封装，外部代码可以直接 s.age = -5 造成数据不一致。' +
                '封装让对象有能力保护自己的不变量（invariant）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 Temperature 类，private 字段 celsius，通过 setCelsius 验证温度不低于 -273.15。' +
                '设置 -300 时输出 "非法温度"，设置 25 时正常存储。调用 getCelsius 输出。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Temperature t = new Temperature();
        t.setCelsius(-300);
        t.setCelsius(25);
        System.out.println(t.getCelsius());
    }
}

class Temperature {
    private double celsius;

    public double getCelsius() {
        return celsius;
    }

    public void setCelsius(double celsius) {
        if (celsius < -273.15) {
            System.out.println("非法温度");
            ___;
        }
        this.celsius = celsius;
    }
}`,
              expected_output: '非法温度\n25.0',
              hints: [
                '非法温度时需要 return 提前退出方法',
                'return; 跳过 this.celsius = celsius 的赋值',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Product 类，private 字段 name 和 price。getter/setter 完整，' +
                'setPrice 中验证价格不能为负。创建产品设置 name="手机" price=3999，输出信息。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Product p = new Product();
        p.setName("手机");
        p.setPrice(3999);
        System.out.println(p.getName() + ": " + p.getPrice() + "元");
    }
}

class Product {
    private String name;
    private double price;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price >= 0) {
            ___;
        }
    }
}`,
              expected_output: '手机: 3999.0元',
              hints: [
                '验证通过后赋值：this.price = price',
                'double 类型输出会带小数点：3999.0',
              ],
            },
          ],
          realWorldScenario:
            '在 Spring Boot 开发中，实体类（Entity）的字段都是 private，通过 getter/setter 访问。' +
            'ORM 框架（如 Hibernate）通过反射调用 getter/setter 读写数据库。' +
            'DTO（数据传输对象）通过封装隐藏内部结构，只暴露 API 契约。' +
            '在金融系统中，Account 类的 balance 必须封装，所有修改都要经过验证逻辑，' +
            '防止非法操作导致资金安全问题。这就是封装的核心价值。',
        },
        {
          id: 'java-ch4-l4',
          title: 'static 关键字',
          order: 3,
          content_md:
            '`static` 关键字表示"静态的"，被 static 修饰的成员属于类本身，而非某个对象实例。' +
            '无论创建多少个对象，静态成员只有一份，被所有实例共享。' +
            'static 可以修饰字段、方法、代码块和嵌套类。\n\n' +
            '静态字段（类变量）在类加载时初始化，存储在方法区（JDK 8+ 为元空间）。' +
            '所有实例共享同一个静态变量——修改一处，处处可见。' +
            '静态方法通过类名直接调用（如 `Math.sqrt(4)`），不需要创建对象。' +
            '静态方法不能直接访问实例变量（因为没有 this 引用），只能访问静态成员。\n\n' +
            'static 的常见应用场景：' +
            '1) 工具类（如 java.lang.Math、java.util.Arrays）的方法都是 static；' +
            '2) 常量定义（`public static final double PI = 3.14159;`）；' +
            '3) 计数器（统计创建了多少个实例）；' +
            '4) 单例模式（getInstance 方法是 static）；' +
            '5) 静态代码块（类加载时执行一次的初始化逻辑）。' +
            '理解 static 对于使用工具类、理解类加载机制、编写单例模式至关重要。',
          examples: [
            {
              title: '实例计数器',
              code: `public class Main {
    public static void main(String[] args) {
        System.out.println("创建前 count = " + User.count);

        User u1 = new User("张三");
        User u2 = new User("李四");
        User u3 = new User("王五");

        System.out.println("创建了 " + User.count + " 个用户");
        u1.showId();
        u2.showId();
        u3.showId();
    }
}

class User {
    String name;
    int id;
    static int count = 0;  // 静态变量，所有实例共享

    User(String name) {
        this.name = name;
        this.id = ++count;  // 每创建一个对象，count 加1
    }

    void showId() {
        System.out.println(name + " 的 ID: " + id);
    }
}`,
              explanation:
                'count 是静态变量，所有 User 对象共享。每创建一个对象，count 递增。' +
                '通过 User.count 或 u1.count 都能访问（推荐用类名）。' +
                'id 使用 count 的值，实现了自动编号。',
            },
            {
              title: '静态方法与工具类',
              code: `public class Main {
    public static void main(String[] args) {
        // 通过类名直接调用静态方法
        System.out.println("max(3, 7) = " + MathUtil.max(3, 7));
        System.out.println("isPrime(17) = " + MathUtil.isPrime(17));
        System.out.println("factorial(5) = " + MathUtil.factorial(5));

        // JDK 内置静态方法
        System.out.println("Math.sqrt(16) = " + Math.sqrt(16));
        System.out.println("Math.abs(-5) = " + Math.abs(-5));
        System.out.println("Math.max(10, 20) = " + Math.max(10, 20));
    }
}

class MathUtil {
    // 静态方法：工具方法不需要创建对象
    static int max(int a, int b) {
        return a > b ? a : b;
    }

    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    static long factorial(int n) {
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}`,
              explanation:
                '工具类的方法都是 static，通过类名直接调用，不需要 new MathUtil()。' +
                'JDK 的 Math、Arrays、Collections 都是工具类。' +
                'isPrime 用 sqrt 优化：只需检查到根号n即可判断素数。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 Counter 类，有 static 字段 count。每创建一个 Counter 对象 count 加1。' +
                '创建3个对象后，通过 Counter.count 输出值。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        System.out.println(Counter.___);
    }
}

class Counter {
    static int count = 0;

    Counter() {
        ___;
    }
}`,
              expected_output: '3',
              hints: [
                '构造方法中递增静态变量：count++',
                '通过类名访问静态变量：Counter.count',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 StringUtils 工具类，有静态方法 reverse(String s) 反转字符串。' +
                '调用 StringUtils.reverse("hello") 输出结果。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        System.out.println(StringUtils.reverse("hello"));
    }
}

class StringUtils {
    static String reverse(String s) {
        String result = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            result += ___;
        }
        return result;
    }
}`,
              expected_output: 'olleh',
              hints: [
                '从后往前遍历字符串，逐个拼接字符',
                's.charAt(i) 获取指定位置的字符',
              ],
            },
          ],
          realWorldScenario:
            '在项目中，工具类是最常见的 static 应用场景：' +
            'StringUtils（字符串处理）、DateUtils（日期处理）、FileUtils（文件操作）等。' +
            'Spring 的 BeanUtils.copyProperties 是静态工具方法。' +
            '常量类（如 HttpStatus、ErrorCode）用 public static final 定义常量。' +
            '单例模式（如 Runtime.getRuntime()）依赖 static 方法返回唯一实例。' +
            '实例计数器在连接池管理、资源监控等场景中有实际应用。',
        },
      ],
    },
    // ==================== 第五章 ====================
    {
      id: 'java-ch5',
      title: '面向对象进阶',
      order: 4,
      lessons: [
        {
          id: 'java-ch5-l1',
          title: '继承',
          order: 0,
          content_md:
            '继承（Inheritance）是面向对象的核心特性之一，允许子类继承父类的字段和方法，实现代码复用。' +
            'Java 用 `extends` 关键字表示继承：`class Dog extends Animal`。' +
            'Java 是单继承——一个类只能继承一个直接父类，但可以通过接口实现多重继承的效果。' +
            '所有类的根父类是 `Object`。\n\n' +
            '子类可以调用父类的非 private 成员。`super` 关键字用于在子类中访问父类：' +
            '`super.field` 访问父类字段、`super.method()` 调用父类方法、' +
            '`super(...)` 调用父类构造方法（必须是子类构造方法的第一条语句）。' +
            '如果子类构造方法没有显式调用 super(...)，编译器自动插入 `super()` 调用无参构造。\n\n' +
            '方法重写（Override）是子类重新定义继承自父类的方法，要求方法签名完全相同。' +
            '重写的规则：方法名、参数列表必须相同；返回类型可以相同或是子类型（协变返回）；' +
            '访问权限不能比父类更严格；不能重写 final/static/private 方法。' +
            '建议始终使用 `@Override` 注解，让编译器帮你检查是否正确重写。' +
            '继承建立了"is-a"关系：Dog is an Animal。',
          examples: [
            {
              title: '继承与方法重写',
              code: `public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("旺财", 3, "金毛");
        dog.eat();      // 重写的方法
        dog.bark();     // 子类特有方法
        dog.showInfo();
    }
}

class Animal {
    String name;
    int age;

    Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void eat() {
        System.out.println(name + " 正在吃东西");
    }
}

class Dog extends Animal {
    String breed;

    Dog(String name, int age, String breed) {
        super(name, age);  // 调用父类构造方法
        this.breed = breed;
    }

    @Override
    void eat() {
        System.out.println(name + " 在啃骨头");
    }

    void bark() {
        System.out.println(name + " 汪汪汪！");
    }

    void showInfo() {
        System.out.println(name + ", " + age + "岁, 品种:" + breed);
    }
}`,
              explanation:
                'Dog 继承 Animal，获得 name/age 字段和 eat 方法。' +
                'Dog 重写 eat 方法改变行为。super(name, age) 调用父类构造初始化继承的字段。' +
                '@Override 注解确保方法签名正确。子类可以添加自己特有的字段和方法。',
            },
            {
              title: 'super 调用父类方法',
              code: `public class Main {
    public static void main(String[] args) {
        Manager m = new Manager("张三", 20000, 5000);
        m.showSalary();
    }
}

class Employee {
    String name;
    double baseSalary;

    Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    double getSalary() {
        return baseSalary;
    }
}

class Manager extends Employee {
    double bonus;

    Manager(String name, double baseSalary, double bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    @Override
    double getSalary() {
        return super.getSalary() + bonus;  // super 调用父类方法
    }

    void showSalary() {
        System.out.println(name + " 基本工资: " + baseSalary);
        System.out.println("奖金: " + bonus);
        System.out.println("总薪资: " + getSalary());
    }
}`,
              explanation:
                'Manager 重写 getSalary，在父类基础上加奖金。' +
                'super.getSalary() 调用父类版本，避免重复代码。' +
                '这是继承的精髓：子类在父类行为基础上扩展或修改，而非从头实现。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义 Shape 父类有 color 字段，Circle 子类有 radius 字段。' +
                'Circle 重写 getArea 返回 π*r²。创建半径3的圆，输出面积（保留2位小数）。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Circle c = new Circle("红色", 3);
        System.out.printf("%.2f%n", c.getArea());
    }
}

class Shape {
    String color;

    Shape(String color) {
        this.color = color;
    }

    double getArea() {
        return 0;
    }
}

class Circle extends Shape {
    double radius;

    Circle(String color, double radius) {
        ___;  // 调用父类构造
        this.radius = radius;
    }

    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}`,
              expected_output: '28.27',
              hints: [
                '调用父类构造方法：super(color)',
                'super(...) 必须是子类构造方法的第一条语句',
                'Math.PI * 3 * 3 = 28.27...',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Vehicle 父类有 start 方法输出 "车辆启动"，' +
                'Car 子类重写 start 先调用父类 start 再输出 "汽车引擎轰鸣"。' +
                '创建 Car 调用 start。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();
    }
}

class Vehicle {
    void start() {
        System.out.println("车辆启动");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        ___;  // 调用父类 start
        System.out.println("汽车引擎轰鸣");
    }
}`,
              expected_output: '车辆启动\n汽车引擎轰鸣',
              hints: [
                '用 super.start() 调用父类方法',
                '重写方法中先调 super 再添加子类逻辑是常见模式',
              ],
            },
          ],
          realWorldScenario:
            '在 Spring 框架中，大量使用继承：自定义异常类继承 RuntimeException 或 Exception；' +
            'Controller 继承 BaseController 获取通用功能；' +
            'BaseService 继承 IService 获得基本 CRUD 能力。' +
            '在 Android 开发中，Activity/Fragment 的继承层次是框架的基础。' +
            '理解继承是阅读框架源码、设计领域模型的基础。' +
            '注意：继承要符合 "is-a" 关系，不符合时用组合（composition）替代。',
        },
        {
          id: 'java-ch5-l2',
          title: '多态',
          order: 1,
          content_md:
            '多态（Polymorphism）是面向对象最强大的特性之一，指同一个方法调用在不同对象上表现出不同行为。' +
            'Java 的多态通过"父类引用指向子类对象"实现：`Animal a = new Dog();`。' +
            '此时调用的方法如果被子类重写，会执行子类的版本——这叫动态绑定（Dynamic Binding）。\n\n' +
            '多态的三个前提：1) 继承关系；2) 方法重写；3) 父类引用指向子类对象（向上转型）。' +
            '编译时看左边的类型（父类），运行时看右边的类型（子类）。' +
            '编译器只检查父类是否有该方法，实际执行哪个版本由运行时的对象类型决定。' +
            '这就是"编译看左边，运行看右边"的口诀。\n\n' +
            '多态的威力在于：方法参数可以声明为父类型，接收任何子类对象。' +
            '例如 `void feed(Animal a)` 可以接收 Dog、Cat、Bird 等任何动物。' +
            '新增动物类型时不需要修改 feed 方法——这就是"对扩展开放，对修改关闭"（OCP）。' +
            '`instanceof` 运算符检查对象的真实类型，多态场景中常用于类型判断和向下转型前的安全检查。',
          examples: [
            {
              title: '多态基础',
              code: `public class Main {
    public static void main(String[] args) {
        // 父类引用指向子类对象（向上转型）
        Animal a1 = new Dog();
        Animal a2 = new Cat();
        Animal a3 = new Bird();

        // 同一个方法调用，不同行为（动态绑定）
        a1.makeSound();  // 汪汪
        a2.makeSound();  // 喵喵
        a3.makeSound();  // 叽叽

        // 多态数组
        Animal[] zoo = {new Dog(), new Cat(), new Bird()};
        for (Animal a : zoo) {
            a.makeSound();  // 各自动态绑定
        }
    }
}

class Animal {
    void makeSound() {
        System.out.println("...");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("汪汪");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("喵喵");
    }
}

class Bird extends Animal {
    @Override
    void makeSound() {
        System.out.println("叽叽");
    }
}`,
              explanation:
                'Animal 引用指向不同子类对象，调用 makeSound 时执行各自重写的版本。' +
                '多态数组可以统一管理不同类型的对象。这是多态的核心：' +
                '同一个调用接口，不同的具体行为。新增动物类型时，for 循环代码无需修改。',
            },
            {
              title: '多态方法参数与 instanceof',
              code: `public class Main {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle1(5),
            new Rectangle1(4, 6),
            new Triangle1(3, 4)
        };

        double totalArea = 0;
        for (Shape s : shapes) {
            double area = s.getArea();  // 多态调用
            totalArea += area;
            System.out.println(s.getClass().getSimpleName() + " 面积: " + area);
        }
        System.out.println("总面积: " + totalArea);

        // instanceof 类型检查
        for (Shape s : shapes) {
            if (s instanceof Circle1) {
                System.out.println("圆形半径: " + ((Circle1) s).radius);
            }
        }
    }
}

abstract class Shape {
    abstract double getArea();
}

class Circle1 extends Shape {
    double radius;
    Circle1(double r) { this.radius = r; }
    @Override
    double getArea() { return Math.PI * radius * radius; }
}

class Rectangle1 extends Shape {
    double width, height;
    Rectangle1(double w, double h) { this.width = w; this.height = h; }
    @Override
    double getArea() { return width * height; }
}

class Triangle1 extends Shape {
    double base, height;
    Triangle1(double b, double h) { this.base = b; this.height = h; }
    @Override
    double getArea() { return 0.5 * base * height; }
}`,
              explanation:
                'Shape 数组存放不同子类对象，统一调用 getArea() 计算面积。' +
                '新增形状类型不影响计算逻辑——这就是多态的扩展性优势。' +
                'instanceof 检查对象类型，向下转型前必须检查以避免 ClassCastException。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义父类 Animal 有方法 speak 输出 "...", 子类 Dog 和 Cat 重写 speak。' +
                '创建 Animal 数组存放 Dog 和 Cat，遍历调用 speak。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Animal[] pets = {new Dog(), new Cat()};
        for (Animal a : pets) {
            a.speak();
        }
    }
}

class Animal {
    void speak() {
        System.out.println("...");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("汪汪");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        ___;
    }
}`,
              expected_output: '汪汪\n喵喵',
              hints: [
                'Cat 的 speak 方法应该输出 "喵喵"',
                'System.out.println("喵喵")',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义 Shape 父类有 getArea 返回0，子类 Square 重写返回边长平方。' +
                '用 Shape 引用指向 Square(5)，调用 getArea 输出结果。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Shape s = new Square(5);
        System.out.println(s.getArea());
    }
}

class Shape {
    double getArea() {
        return 0;
    }
}

class Square extends Shape {
    double side;

    Square(double side) {
        this.side = side;
    }

    @Override
    double getArea() {
        return ___;
    }
}`,
              expected_output: '25.0',
              hints: [
                '正方形面积 = 边长 * 边长',
                'return side * side; 结果是 25.0（double 类型）',
              ],
            },
          ],
          realWorldScenario:
            '在 Spring 框架中，多态无处不在：`List<User> users = userService.findAll();` ' +
            '返回值是 List 接口，实际可能是 ArrayList 或 LinkedList。' +
            '策略模式完全基于多态：定义 PaymentStrategy 接口，' +
            'AliPayStrategy、WeChatPayStrategy 等实现类通过多态切换。' +
            '事件驱动架构中，不同的事件监听器实现同一接口，事件分发器用多态调用。' +
            '理解多态是掌握设计模式（策略、工厂、状态、命令模式等）的前提。',
        },
        {
          id: 'java-ch5-l3',
          title: '抽象类',
          order: 2,
          content_md:
            '抽象类用 `abstract` 关键字修饰，不能被实例化（不能 new）。' +
            '抽象类可以包含抽象方法（只有声明，没有实现，用 abstract 修饰）和具体方法。' +
            '子类继承抽象类后，必须实现所有抽象方法（除非子类也是抽象类）。' +
            '抽象类是"模板"——定义了子类必须实现的行为规范，同时提供通用的实现。\n\n' +
            '抽象类与普通类的区别：1) 不能创建实例；2) 可以有抽象方法；3) 可以有构造方法（供子类 super 调用）。' +
            '抽象方法不能有方法体，以分号结束。抽象方法必须是抽象类中的方法（普通类不能有抽象方法）。' +
            '抽象类的构造方法在子类实例化时通过 super 调用，不能直接 new。\n\n' +
            '抽象类最经典的应用是模板方法模式（Template Method Pattern）：' +
            '父类定义算法骨架（用具体方法），将某些步骤延迟到子类实现（用抽象方法）。' +
            '例如，AbstractBatchProcessor 定义 `process()` 方法调用 `read()` → `transform()` → `write()`，' +
            '但具体如何读取、转换、写入由子类决定。这保证了算法结构不变，细节可定制。',
          examples: [
            {
              title: '抽象类基础',
              code: `public class Main {
    public static void main(String[] args) {
        // Animal a = new Animal();  // 编译错误！抽象类不能实例化
        Animal dog = new Dog2();
        dog.eat();
        dog.sleep();
        dog.makeSound();
    }
}

abstract class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    // 抽象方法：子类必须实现
    abstract void makeSound();

    // 具体方法：子类可以直接使用
    void eat() {
        System.out.println(name + " 正在吃东西");
    }

    void sleep() {
        System.out.println(name + " 正在睡觉");
    }
}

class Dog2 extends Animal {
    Dog2() {
        super("旺财");
    }

    @Override
    void makeSound() {
        System.out.println(name + " 汪汪叫");
    }
}`,
              explanation:
                'Animal 是抽象类，不能 new Animal()。Dog 必须实现 makeSound 抽象方法。' +
                '抽象类的构造方法通过 super 在子类构造中调用。' +
                '抽象类提供通用方法（eat/sleep），子类只需实现差异部分（makeSound）。',
            },
            {
              title: '模板方法模式',
              code: `public class Main {
    public static void main(String[] args) {
        System.out.println("=== CSV 处理器 ===");
        DataProcessor csv = new CsvProcessor();
        csv.process();

        System.out.println("\\n=== JSON 处理器 ===");
        DataProcessor json = new JsonProcessor();
        json.process();
    }
}

// 抽象类定义模板
abstract class DataProcessor {
    // 模板方法：定义算法骨架，用 final 防止子类修改
    public final void process() {
        read();
        transform();
        write();
    }

    // 抽象方法：子类必须实现
    abstract void read();
    abstract void transform();
    abstract void write();
}

class CsvProcessor extends DataProcessor {
    @Override
    void read() {
        System.out.println("读取 CSV 文件");
    }

    @Override
    void transform() {
        System.out.println("转换 CSV 数据");
    }

    @Override
    void write() {
        System.out.println("写入处理结果");
    }
}

class JsonProcessor extends DataProcessor {
    @Override
    void read() {
        System.out.println("读取 JSON 文件");
    }

    @Override
    void transform() {
        System.out.println("转换 JSON 数据");
    }

    @Override
    void write() {
        System.out.println("写入处理结果");
    }
}`,
              explanation:
                '模板方法模式：process() 是模板方法（final 防止重写），定义 read→transform→write 流程。' +
                '子类只实现具体步骤，算法结构由父类控制。' +
                '这是抽象类最经典的应用，Spring 的 JdbcTemplate、RestTemplate 都用了类似思想。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义抽象类 Shape 有抽象方法 getArea。子类 Rectangle 实现返回 width*height。' +
                '创建 Rectangle(4, 5) 调用 getArea 输出结果。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Shape s = new Rectangle(4, 5);
        System.out.println(s.getArea());
    }
}

abstract class Shape {
    ___;  // 声明抽象方法 getArea
}

class Rectangle extends Shape {
    double width, height;

    Rectangle(double w, double h) {
        this.width = w;
        this.height = h;
    }

    @Override
    double getArea() {
        return width * height;
    }
}`,
              expected_output: '20.0',
              hints: [
                '抽象方法用 abstract 关键字声明，没有方法体',
                'abstract double getArea();',
                '4 * 5 = 20，double 类型输出 20.0',
              ],
            },
            {
              type: 'output-match',
              prompt: '用模板方法模式：抽象类 Game 有 final 方法 play 调用 initialize、startGame、endGame。' +
                '子类 ChessGame 实现三个方法。创建 ChessGame 调用 play。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Game game = new ChessGame();
        game.play();
    }
}

abstract class Game {
    public final void play() {
        initialize();
        startGame();
        endGame();
    }

    abstract void initialize();
    abstract void startGame();
    abstract void endGame();
}

class ChessGame extends Game {
    @Override
    void initialize() {
        System.out.println("摆放棋子");
    }

    @Override
    void startGame() {
        System.out.println(___);
    }

    @Override
    void endGame() {
        System.out.println("游戏结束");
    }
}`,
              expected_output: '摆放棋子\n开始下棋\n游戏结束',
              hints: [
                'startGame 应该输出与象棋相关的开始信息',
                'System.out.println("开始下棋")',
              ],
            },
          ],
          realWorldScenario:
            '在 Spring 框架中，AbstractApplicationContext、AbstractBeanFactory 等大量使用抽象类。' +
            'JDK 的 AbstractList、AbstractMap 是 ArrayList、HashMap 的父类，提供通用实现。' +
            '模板方法模式在框架开发中极其常见：定义流程骨架，让子类填充细节。' +
            '例如，批处理框架定义"读取-处理-写入"模板，具体的读取源和处理逻辑由子类决定。' +
            'Servlet 的 HttpServlet 也是抽象类，doGet/doPost 由子类实现。',
        },
        {
          id: 'java-ch5-l4',
          title: '接口',
          order: 3,
          content_md:
            '接口（Interface）是 Java 中定义行为契约的机制。接口中所有方法默认是 public abstract（Java 8 前），' +
            '所有字段默认是 public static final。类用 `implements` 关键字实现接口，' +
            '必须实现接口中所有抽象方法。与继承不同，一个类可以实现多个接口，解决了 Java 单继承的限制。\n\n' +
            'Java 8 为接口引入了默认方法（default method）和静态方法。默认方法用 `default` 关键字修饰，' +
            '有方法体，实现类可以直接使用或重写。这解决了接口演进的兼容性问题——' +
            '新增方法时不必修改所有实现类。Java 9 进一步允许接口中的 private 方法（供 default 方法复用）。\n\n' +
            '接口 vs 抽象类：接口定义"能做什么"（has-a / can-do），抽象类定义"是什么"（is-a）。' +
            '接口适合定义跨类型的行为契约（如 Comparable、Runnable、Serializable）；' +
            '抽象类适合在相关类型间共享代码。函数式接口（只有一个抽象方法的接口）是 Lambda 表达式的基础。' +
            '实际开发中，接口是解耦的关键——面向接口编程而非面向实现编程。',
          examples: [
            {
              title: '接口定义与实现',
              code: `public class Main {
    public static void main(String[] args) {
        Swimmable swimmer = new Fish();
        swimmer.swim();

        Flyable flyer = new Bird3();
        flyer.fly();

        // 一个类可以实现多个接口
        Duck duck = new Duck();
        duck.swim();
        duck.fly();
    }
}

interface Swimmable {
    void swim();
}

interface Flyable {
    void fly();
    default void land() {
        System.out.println("着陆...");
    }
}

class Fish implements Swimmable {
    @Override
    public void swim() {
        System.out.println("鱼在游泳");
    }
}

class Bird3 implements Flyable {
    @Override
    public void fly() {
        System.out.println("鸟在飞翔");
    }
}

// Duck 实现两个接口
class Duck implements Swimmable, Flyable {
    @Override
    public void swim() {
        System.out.println("鸭子游泳");
    }

    @Override
    public void fly() {
        System.out.println("鸭子飞翔");
    }
}`,
              explanation:
                'Swimmable 和 Flyable 是接口，定义行为契约。' +
                'Fish 实现 Swimmable，Bird3 实现 Flyable，Duck 同时实现两个接口。' +
                'Flyable 有默认方法 land()，实现类可直接使用。' +
                '接口实现多继承的效果，且接口方法默认是 public。',
            },
            {
              title: 'Comparable 接口与排序',
              code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Student3[] students = {
            new Student3("张三", 85),
            new Student3("李四", 92),
            new Student3("王五", 78)
        };

        Arrays.sort(students);  // 需要 Student3 实现 Comparable

        for (Student3 s : students) {
            System.out.println(s.name + ": " + s.score);
        }
    }
}

class Student3 implements Comparable<Student3> {
    String name;
    int score;

    Student3(String name, int score) {
        this.name = name;
        this.score = score;
    }

    @Override
    public int compareTo(Student3 other) {
        return this.score - other.score;  // 升序排列
    }
}`,
              explanation:
                '实现 Comparable<T> 接口的 compareTo 方法定义自然排序。' +
                '返回负数表示 this < other，0 表示相等，正数表示 this > other。' +
                'Arrays.sort 和 Collections.sort 依赖此接口。' +
                'this.score - other.score 实现升序，反过来则降序。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义接口 Drawable 有方法 draw。类 Circle 实现它，draw 输出 "画一个圆"。' +
                '创建 Circle 调用 draw。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        Drawable d = new Circle();
        d.draw();
    }
}

interface Drawable {
    ___;
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("画一个圆");
    }
}`,
              expected_output: '画一个圆',
              hints: [
                '接口中声明抽象方法：void draw();',
                '接口方法默认 public abstract，可以省略这些修饰符',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义接口 Comparable<Student>，Student 类实现 compareTo 按分数降序排列。' +
                '创建3个学生 {张三85, 李四92, 王五78}，排序后输出。',
              starter_code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Student[] students = {
            new Student("张三", 85),
            new Student("李四", 92),
            new Student("王五", 78)
        };
        Arrays.sort(students);
        for (Student s : students) {
            System.out.println(s.name + ":" + s.score);
        }
    }
}

class Student implements Comparable<Student> {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    @Override
    public int compareTo(Student other) {
        return ___;  // 降序排列
    }
}`,
              expected_output: '李四:92\n张三:85\n王五:78',
              hints: [
                '降序排列：other.score - this.score',
                '升序是 this.score - other.score，降序反过来',
              ],
            },
          ],
          realWorldScenario:
            'Java 中接口无处不在：JDK 的 List、Map、Runnable、Comparable、Iterable 都是接口。' +
            'Spring 的 BeanPostProcessor、InitializingBean、DisposableBean 是接口扩展点。' +
            '在分层架构中，Service 层定义接口（UserService），Impl 层提供实现（UserServiceImpl），' +
            'Controller 层依赖接口而非实现——这就是"依赖倒置"。' +
            '在策略模式中，定义 PaymentStrategy 接口，不同支付方式为实现类，运行时注入不同实现。' +
            '面向接口编程是写出松耦合、可测试、可扩展代码的关键。',
        },
      ],
    },
    // ==================== 第六章 ====================
    {
      id: 'java-ch6',
      title: '异常处理与集合框架',
      order: 5,
      lessons: [
        {
          id: 'java-ch6-l1',
          title: '异常处理 try/catch',
          order: 0,
          content_md:
            '异常（Exception）是程序执行过程中的错误事件。Java 的异常处理机制让错误处理代码与业务逻辑分离，' +
            '使代码更清晰。异常处理的核心结构：`try` 包裹可能出错的代码，`catch` 捕获并处理异常，' +
            '`finally` 无论是否异常都会执行（通常用于资源释放）。\n\n' +
            'Java 异常体系：`Throwable` 是根类，分为 `Error`（系统级错误，如 OutOfMemoryError，不应捕获）' +
            '和 `Exception`。Exception 分为：' +
            '受检异常（Checked Exception，如 IOException，必须 try-catch 或 throws）和' +
            '非受检异常（RuntimeException，如 NullPointerException、ArrayIndexOutOfBoundsException，编译器不强制处理）。\n\n' +
            '`throw` 关键字手动抛出异常，`throws` 关键字声明方法可能抛出的异常。' +
            '自定义异常类继承 Exception（受检）或 RuntimeException（非受检）。' +
            'Java 7 引入了 try-with-resources 语法，自动关闭实现了 AutoCloseable 的资源，' +
            '大大简化了资源管理代码。多重 catch 时，子类异常必须在父类异常之前捕获。',
          examples: [
            {
              title: 'try-catch-finally',
              code: `public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};

        try {
            System.out.println("arr[5] = " + arr[5]);  // 越界
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("捕获到越界异常: " + e.getMessage());
        } finally {
            System.out.println("finally 始终执行");
        }

        // 多重 catch
        try {
            String s = null;
            System.out.println(s.length());  // 空指针
        } catch (NullPointerException e) {
            System.out.println("空指针异常: " + e);
        } catch (Exception e) {
            System.out.println("其他异常: " + e);
        }

        System.out.println("程序继续运行");
    }
}`,
              explanation:
                'try 块中的代码抛出异常后，跳转到对应类型的 catch 块。' +
                'finally 块无论是否异常都执行（用于资源清理）。' +
                '多重 catch 从子类到父类匹配。异常被捕获后程序继续正常运行。',
            },
            {
              title: '自定义异常与 throw/throws',
              code: `public class Main {
    public static void main(String[] args) {
        try {
            withdraw(1000, 500);
            withdraw(1000, 2000);  // 会抛异常
        } catch (InsufficientFundsException e) {
            System.out.println("捕获异常: " + e.getMessage());
        }

        try {
            validateAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("参数错误: " + e.getMessage());
        }
    }

    // throws 声明可能抛出的受检异常
    static void withdraw(double balance, double amount) throws InsufficientFundsException {
        if (amount > balance) {
            // throw 手动抛出异常
            throw new InsufficientFundsException("余额不足: 余额" + balance + ", 取款" + amount);
        }
        System.out.println("取款成功: " + amount);
    }

    // RuntimeException 不需要 throws 声明
    static void validateAge(int age) {
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("年龄必须在 0-150 之间: " + age);
        }
    }
}

// 自定义受检异常
class InsufficientFundsException extends Exception {
    InsufficientFundsException(String message) {
        super(message);
    }
}`,
              explanation:
                '自定义异常继承 Exception（受检）或 RuntimeException（非受检）。' +
                'throw 主动抛出异常，throws 声明方法可能抛出的异常。' +
                '受检异常必须处理（try-catch 或继续 throws），非受检异常不强制。' +
                '业务逻辑中常用自定义异常表达特定业务错误。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 try-catch 捕获除零异常。10/0 后捕获 ArithmeticException 输出 "除零错误"，' +
                'finally 输出 "计算结束"。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (___ e) {
            System.out.println("除零错误");
        } finally {
            System.out.println("计算结束");
        }
    }
}`,
              expected_output: '除零错误\n计算结束',
              hints: [
                '除零产生的异常类型是 ArithmeticException',
                'catch (ArithmeticException e)',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义方法 parseIntSafe(String s)，用 Integer.parseInt 转换字符串。' +
                '如果格式错误捕获 NumberFormatException 返回 -1。调用 parseIntSafe("abc") 输出结果。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        System.out.println(parseIntSafe("abc"));
    }

    static int parseIntSafe(String s) {
        try {
            return Integer.parseInt(s);
        } catch (___ e) {
            return -1;
        }
    }
}`,
              expected_output: '-1',
              hints: [
                '字符串转整数失败抛出 NumberFormatException',
                'catch (NumberFormatException e)',
              ],
            },
          ],
          realWorldScenario:
            '在 Web 应用中，异常处理决定了系统的健壮性。' +
            'Spring 的 @ControllerAdvice + @ExceptionHandler 统一处理 Controller 层异常，' +
            '将异常转为友好的 JSON 错误响应。在金融系统中，自定义业务异常（InsufficientFundsException、' +
            'InvalidTransactionException）精确表达业务错误。' +
            'try-with-resources 自动关闭数据库连接、文件流等资源，避免资源泄漏。' +
            '好的异常处理让系统在出错时优雅降级，而非崩溃。',
        },
        {
          id: 'java-ch6-l2',
          title: 'List 与 ArrayList',
          order: 1,
          content_md:
            '`List` 是 Java 集合框架中最常用的接口，表示有序、可重复的元素集合。' +
            '`ArrayList` 是 List 最常用的实现，底层是动态数组——容量不足时自动扩容（通常扩容1.5倍）。' +
            'ArrayList 随机访问 O(1)，尾部插入 O(1) 均摊，中间插入/删除 O(n)。' +
            'LinkedList 是 List 的另一个实现，底层是双向链表，适合频繁的头尾插入删除。\n\n' +
            'ArrayList 常用操作：`add(e)` 添加元素、`get(i)` 获取元素、`set(i, e)` 修改元素、' +
            '`remove(i)` 或 `remove(e)` 删除元素、`size()` 获取大小、`contains(e)` 判断是否包含、' +
            '`indexOf(e)` 查找索引。遍历 List 可以用 for 索引、增强 for 循环或迭代器。' +
            '泛型 `List<String>` 限定元素类型，避免运行时类型转换错误。\n\n' +
            'ArrayList vs 数组：数组长度固定，ArrayList 长度可变；数组可以存基本类型，ArrayList 只能存对象' +
            '（基本类型用包装类 Integer、Double 等）。实际开发中 ArrayList 几乎完全取代了数组，' +
            '除非有性能或内存的极端要求。注意 ArrayList 不是线程安全的，多线程环境用 ' +
            'Collections.synchronizedList() 或 CopyOnWriteArrayList。',
          examples: [
            {
              title: 'ArrayList 基本操作',
              code: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();

        // 添加元素
        fruits.add("苹果");
        fruits.add("香蕉");
        fruits.add("橙子");
        System.out.println("初始: " + fruits);

        // 指定位置插入
        fruits.add(1, "葡萄");
        System.out.println("插入后: " + fruits);

        // 修改元素
        fruits.set(0, "红苹果");
        System.out.println("修改后: " + fruits);

        // 删除元素
        fruits.remove("香蕉");
        fruits.remove(0);  // 按索引删
        System.out.println("删除后: " + fruits);

        // 查询
        System.out.println("包含葡萄? " + fruits.contains("葡萄"));
        System.out.println("大小: " + fruits.size());
        System.out.println("第1个: " + fruits.get(0));
    }
}`,
              explanation:
                'add 添加、set 修改、remove 删除、get 获取、contains 判断包含。' +
                'List 是接口，ArrayList 是实现，声明用 List 接口类型是最佳实践。' +
                '泛型 <String> 保证类型安全，避免意外存入其他类型。',
            },
            {
              title: '遍历与统计',
              code: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>();
        nums.add(12);
        nums.add(5);
        nums.add(89);
        nums.add(34);
        nums.add(67);

        // 三种遍历方式
        System.out.println("for 索引遍历:");
        for (int i = 0; i < nums.size(); i++) {
            System.out.print(nums.get(i) + " ");
        }
        System.out.println();

        System.out.println("增强 for 遍历:");
        for (int n : nums) {
            System.out.print(n + " ");
        }
        System.out.println();

        // 统计
        int sum = 0, max = nums.get(0);
        for (int n : nums) {
            sum += n;
            if (n > max) max = n;
        }
        System.out.println("总和: " + sum);
        System.out.println("最大值: " + max);
        System.out.println("平均值: " + (double) sum / nums.size());
    }
}`,
              explanation:
                'for 索引遍历适合需要索引的场景，增强 for 更简洁。' +
            '集合统计是常见操作：求和、求最大值、求平均值。' +
            '注意 (double) sum / nums.size() 避免整数除法。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 ArrayList<Integer> 添加 5,10,15,20,25，计算并输出总和。',
              starter_code: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>();
        nums.add(5);
        nums.add(10);
        nums.add(15);
        nums.add(20);
        nums.add(25);
        int sum = 0;
        for (int n : nums) {
            sum += ___;
        }
        System.out.println(sum);
    }
}`,
              expected_output: '75',
              hints: [
                '增强 for 循环中 n 是每个元素',
                'sum += n 累加每个元素，5+10+15+20+25=75',
              ],
            },
            {
              type: 'output-match',
              prompt: '创建 List<String> 添加 "Java","Python","Go","JavaScript","Rust"。' +
                '删除 "Go"，输出列表大小和第3个元素（索引2）。',
              starter_code: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> langs = new ArrayList<>();
        langs.add("Java");
        langs.add("Python");
        langs.add("Go");
        langs.add("JavaScript");
        langs.add("Rust");
        langs.___("Go");
        System.out.println("大小: " + langs.size());
        System.out.println("第3个: " + langs.get(2));
    }
}`,
              expected_output: '大小: 4\n第3个: JavaScript',
              hints: [
                '删除指定元素用 remove(Object) 方法',
                'langs.remove("Go") 删除 "Go" 后，"JavaScript" 移到索引2',
              ],
            },
          ],
          realWorldScenario:
            '在 Web 开发中，List 是最常用的数据容器：' +
            'Service 层返回 `List<User>` 给 Controller，Controller 返回 JSON 数组给前端。' +
            '在购物车系统中，`List<CartItem>` 存储购物车商品列表。' +
            '在消息系统中，`List<Message>` 存储消息历史。' +
            'Spring Data JPA 的 `repository.findAll()` 返回 `List<Entity>`。' +
            '理解 List 的操作是 Java 后端开发的基本功。',
        },
        {
          id: 'java-ch6-l3',
          title: 'Map 与 HashMap',
          order: 2,
          content_md:
            '`Map` 是键值对（Key-Value）集合，通过键快速查找值。`HashMap` 是最常用的 Map 实现，' +
            '底层是哈希表+链表/红黑树，查找/插入/删除平均 O(1)。' +
            'HashMap 允许 null 键和 null 值，不保证顺序。' +
            '如果需要按插入顺序遍历，用 `LinkedHashMap`；需要按键排序，用 `TreeMap`。\n\n' +
            'Map 常用操作：`put(k, v)` 添加/更新键值对、`get(k)` 获取值、`remove(k)` 删除、' +
            '`containsKey(k)` 判断键是否存在、`containsValue(v)` 判断值是否存在、' +
            '`size()` 获取大小、`keySet()` 获取所有键、`values()` 获取所有值、' +
            '`entrySet()` 获取所有键值对。遍历 Map 最常用 entrySet，效率最高。\n\n' +
            'Map 的键如果是自定义对象，必须正确重写 `hashCode()` 和 `equals()` 方法，' +
            '否则 HashMap 无法正确定位键。String 和包装类（Integer、Double 等）已经正确实现了这两个方法，' +
            '可以直接作为键使用。这是 HashMap 工作原理的关键——哈希码决定桶位置，equals 决定键相等。',
          examples: [
            {
              title: 'HashMap 基本操作',
              code: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();

        // 添加键值对
        scores.put("张三", 85);
        scores.put("李四", 92);
        scores.put("王五", 78);
        System.out.println("初始: " + scores);

        // 修改（相同键会覆盖）
        scores.put("张三", 90);
        System.out.println("修改后: " + scores);

        // 查询
        System.out.println("张三的分数: " + scores.get("张三"));
        System.out.println("包含赵六? " + scores.containsKey("赵六"));

        // 删除
        scores.remove("王五");
        System.out.println("删除后: " + scores);
        System.out.println("大小: " + scores.size());
    }
}`,
              explanation:
                'put 添加/更新、get 查询、containsKey 判断键存在、remove 删除。' +
                '相同键的 put 会覆盖旧值。HashMap 不保证顺序，输出顺序可能与插入顺序不同。',
            },
            {
              title: 'Map 遍历与词频统计',
              code: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // 词频统计：经典 Map 应用
        String text = "to be or not to be that is the question";
        String[] words = text.split(" ");

        Map<String, Integer> freq = new HashMap<>();
        for (String word : words) {
            // getOrDefault: 键存在返回值，不存在返回默认值
            freq.put(word, freq.getOrDefault(word, 0) + 1);
        }

        // entrySet 遍历
        System.out.println("词频统计:");
        for (Map.Entry<String, Integer> entry : freq.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // keySet 遍历
        System.out.println("\\n所有单词:");
        for (String key : freq.keySet()) {
            System.out.print(key + " ");
        }
        System.out.println();
    }
}`,
              explanation:
                '词频统计是 Map 的经典应用。getOrDefault 简化了"不存在则默认0"的逻辑。' +
                'entrySet 遍历效率最高（一次获取键和值），keySet 遍历只获取键。' +
                'Map 在数据处理、统计、缓存等场景中极为常用。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 HashMap<String, Integer> 存储学生成绩：张三=85, 李四=92, 王五=78。' +
                '遍历 entrySet 输出每个学生的成绩，格式 "姓名:分数"。注意 HashMap 无序，' +
                '但此题请用 LinkedHashMap 保证插入顺序。',
              starter_code: `import java.util.LinkedHashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> scores = new LinkedHashMap<>();
        scores.put("张三", 85);
        scores.put("李四", 92);
        scores.put("王五", 78);
        for (Map.Entry<String, Integer> entry : scores.entrySet()) {
            System.out.println(___);
        }
    }
}`,
              expected_output: '张三:85\n李四:92\n王五:78',
              hints: [
                'entrySet 遍历时 entry.getKey() 获取键，entry.getValue() 获取值',
                '完整写法：entry.getKey() + ":" + entry.getValue()',
                '用 LinkedHashMap 保证插入顺序',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 HashMap 统计字符串 "hello world hello java" 中每个单词出现的次数，' +
                '输出 "hello:2"。',
              starter_code: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        String text = "hello world hello java";
        String[] words = text.split(" ");
        Map<String, Integer> freq = new HashMap<>();
        for (String word : words) {
            freq.put(word, freq.___(word, 0) + 1);
        }
        System.out.println("hello:" + freq.get("hello"));
    }
}`,
              expected_output: 'hello:2',
              hints: [
                'getOrDefault 方法：键存在返回对应值，不存在返回默认值',
                'freq.getOrDefault(word, 0) 当 word 不存在时返回 0',
              ],
            },
          ],
          realWorldScenario:
            '在缓存系统中，Map 是最简单的缓存实现：`Map<String, Object> cache = new HashMap<>()`。' +
            '在配置管理中，Map 存储键值对配置项。在数据库 ORM 中，实体对象的字段名与值用 Map 表示。' +
            '在 Redis 客户端中，Hash 类型对应 Java 的 Map。' +
            '词频统计是大数据处理（MapReduce）的基础模型。' +
            '购物车系统用 `Map<Long, CartItem>` 存储商品ID到购物车项的映射。',
        },
        {
          id: 'java-ch6-l4',
          title: 'Set 与泛型',
          order: 3,
          content_md:
            '`Set` 是不允许重复元素的集合。`HashSet` 是最常用的 Set 实现，' +
            '底层基于 HashMap，查找/插入/删除平均 O(1)，不保证顺序。' +
            '`LinkedHashSet` 保持插入顺序，`TreeSet` 保持元素排序。' +
            'Set 的核心应用是去重——自动过滤重复元素。\n\n' +
            'Set 常用操作：`add(e)` 添加（如果已存在则不添加）、`remove(e)` 删除、' +
            '`contains(e)` 判断包含、`size()` 获取大小。' +
            'Set 支持集合运算：交集（retainAll）、并集（addAll）、差集（removeAll）。' +
            '与 Map 的键一样，自定义对象作为 Set 元素需正确实现 hashCode 和 equals。\n\n' +
            '泛型（Generics）是 Java 5 引入的特性，允许在编译时检查类型安全。' +
            '`List<String>`、`Map<String, Integer>` 中的 `<...>` 就是泛型。' +
            '泛型避免了运行时 ClassCastException，消除了显式类型转换。' +
            '泛型方法 `<T> T firstOf(List<T> list)` 和泛型类 `class Box<T>` ' +
            '让代码更通用、更安全。泛型使用类型擦除实现——编译后泛型类型被擦除为 Object。',
          examples: [
            {
              title: 'HashSet 去重',
              code: `import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<String> names = new HashSet<>();
        names.add("张三");
        names.add("李四");
        names.add("张三");  // 重复，不会添加
        names.add("王五");
        names.add("李四");  // 重复，不会添加

        System.out.println("Set: " + names);
        System.out.println("大小: " + names.size());
        System.out.println("包含张三? " + names.contains("张三"));

        // 数组去重
        int[] nums = {1, 3, 5, 3, 7, 1, 9, 5};
        Set<Integer> unique = new HashSet<>();
        for (int n : nums) {
            unique.add(n);
        }
        System.out.println("去重后: " + unique);
    }
}`,
              explanation:
                'Set 自动去重，add 重复元素时返回 false 但不报错。' +
                'HashSet 的输出顺序不固定。数组去重是 Set 最常见的应用场景。' +
                '注意 Integer 自动装箱：int 会自动转为 Integer 存入 Set。',
            },
            {
              title: '泛型方法',
              code: `import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // 泛型方法调用
        List<String> names = List.of("张三", "李四", "王五");
        System.out.println("第一个: " + first(names));

        List<Integer> nums = List.of(10, 20, 30);
        System.out.println("第一个: " + first(nums));

        // 泛型方法：返回数组中间元素
        System.out.println("中间: " + middle("a", "b", "c"));
        System.out.println("中间: " + middle(1, 2, 3, 4, 5));
    }

    // 泛型方法：<T> 声明类型参数，T 是返回类型
    static <T> T first(List<T> list) {
        return list.get(0);
    }

    // 可变参数泛型方法
    @SafeVarargs
    static <T> T middle(T... items) {
        return items[items.length / 2];
    }
}`,
              explanation:
                '<T> 声明泛型类型参数，T 可以是任何类型。' +
                '同一个 first 方法可以处理 List<String> 和 List<Integer>。' +
                '@SafeVarargs 抑制可变参数泛型警告。泛型让代码更通用且类型安全。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 HashSet 对数组 {3,1,4,1,5,9,2,6,5,3} 去重后输出元素个数。',
              starter_code: `import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        int[] nums = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3};
        Set<Integer> unique = new HashSet<>();
        for (int n : nums) {
            unique.___(n);
        }
        System.out.println(unique.size());
    }
}`,
              expected_output: '7',
              hints: [
                '往 Set 中添加元素用 add 方法',
                '去重后 {3,1,4,5,9,2,6} 共7个元素',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义泛型方法 getLast(List<T> list) 返回列表最后一个元素。' +
                '调用 getLast(List.of("a","b","c")) 输出结果。',
              starter_code: `import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println(getLast(List.of("a", "b", "c")));
    }

    static <T> T getLast(List<T> list) {
        return list.___(list.size() - 1);
    }
}`,
              expected_output: 'c',
              hints: [
                '获取列表指定位置的元素用 get 方法',
                '最后一个元素的索引是 list.size() - 1',
              ],
            },
          ],
          realWorldScenario:
            '在用户管理系统中，Set 用于存储用户标签（自动去重）。' +
            '在推荐系统中，Set 用于计算用户兴趣的交集/差集。' +
            '泛型让集合类类型安全：`List<User>` 保证只能存入 User 对象。' +
            'Spring 的 `List<T> findAll()` 返回泛型列表，避免了类型转换。' +
            '在 ETL 数据处理中，Set 用于数据去重——去除重复的订单号、用户ID等。',
        },
      ],
    },
    // ==================== 第七章 ====================
    {
      id: 'java-ch7',
      title: '字符串与文件 I/O',
      order: 6,
      lessons: [
        {
          id: 'java-ch7-l1',
          title: 'String 类',
          order: 0,
          content_md:
            '`String` 是 Java 中最常用的类之一。String 对象是不可变（immutable）的——' +
            '一旦创建，其值不能被修改。看似修改字符串的操作（如 `+`、`replace`、`substring`）' +
            '实际上是创建了新的 String 对象。不可变性带来线程安全和安全性，但也意味着' +
            '频繁拼接字符串会产生大量临时对象，影响性能。\n\n' +
            'String 常用方法：`length()` 获取长度、`charAt(i)` 获取指定位置字符、' +
            '`substring(b, e)` 截取子串、`indexOf(s)` 查找子串位置、' +
            '`equals(s)` 比较内容（不要用 ==）、`equalsIgnoreCase(s)` 忽略大小写比较、' +
            '`toUpperCase()`/`toLowerCase()` 大小写转换、`trim()` 去首尾空格、' +
            '`split(regex)` 分割字符串、`replace(old, new)` 替换、' +
            '`contains(s)` 判断包含、`startsWith(s)`/`endsWith(s)` 前后缀判断。\n\n' +
            'String 比较是面试高频题：`==` 比较引用地址，`equals()` 比较内容。' +
            '字符串字面量（如 `"hello"`）存在字符串常量池中，相同字面量共享同一个对象。' +
            '但 `new String("hello")` 会在堆中创建新对象。因此 `"hello" == "hello"` 为 true，' +
            '但 `new String("hello") == new String("hello")` 为 false。' +
            '始终使用 `equals()` 比较字符串内容是最佳实践。',
          examples: [
            {
              title: 'String 常用方法',
              code: `public class Main {
    public static void main(String[] args) {
        String s = "Hello, World!";

        System.out.println("长度: " + s.length());
        System.out.println("第1个字符: " + s.charAt(0));
        System.out.println("子串(0,5): " + s.substring(0, 5));
        System.out.println("大写: " + s.toUpperCase());
        System.out.println("小写: " + s.toLowerCase());
        System.out.println("包含World? " + s.contains("World"));
        System.out.println("以Hello开头? " + s.startsWith("Hello"));
        System.out.println("索引位置: " + s.indexOf("World"));

        // 替换
        String replaced = s.replace("World", "Java");
        System.out.println("替换后: " + replaced);

        // 分割
        String csv = "张三,25,北京,工程师";
        String[] parts = csv.split(",");
        for (String p : parts) {
            System.out.println(p);
        }
    }
}`,
              explanation:
                'String 方法丰富：length 长度、charAt 取字符、substring 截取、indexOf 查找。' +
                'split 按分隔符分割返回数组。replace 替换子串。' +
                '这些都是日常开发中最常用的字符串操作。',
            },
            {
              title: '字符串比较与回文检查',
              code: `public class Main {
    public static void main(String[] args) {
        // == vs equals
        String a = "hello";
        String b = "hello";
        String c = new String("hello");

        System.out.println("a == b: " + (a == b));           // true（常量池）
        System.out.println("a == c: " + (a == c));           // false（堆对象）
        System.out.println("a.equals(c): " + a.equals(c));   // true（内容相同）

        // 回文检查（经典面试题）
        String word = "level";
        boolean isPalindrome = true;
        int left = 0, right = word.length() - 1;
        while (left < right) {
            if (word.charAt(left) != word.charAt(right)) {
                isPalindrome = false;
                break;
            }
            left++;
            right--;
        }
        System.out.println("\\\"" + word + "\\\" 是回文? " + isPalindrome);
    }
}`,
              explanation:
                '== 比较引用地址，equals 比较内容。始终用 equals 比较字符串。' +
                '回文检查用双指针：从两端向中间比较字符，全部相同则是回文。' +
                '这是面试经典题，体现了双指针技巧。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '检查字符串 "racecar" 是否为回文，输出 true 或 false。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        String s = "racecar";
        boolean isPalindrome = true;
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                ___;
            }
            left++;
            right--;
        }
        System.out.println(isPalindrome);
    }
}`,
              expected_output: 'true',
              hints: [
                '发现不匹配时，设置 isPalindrome = false 并 break',
                'isPalindrome = false; break;',
                'racecar 是回文，不会进入不匹配分支',
              ],
            },
            {
              type: 'output-match',
              prompt: '将字符串 "Hello Java World" 按空格分割，输出单词数量和第2个单词。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        String s = "Hello Java World";
        String[] words = s.___(" ");
        System.out.println("单词数: " + words.length);
        System.out.println("第2个: " + words[1]);
    }
}`,
              expected_output: '单词数: 3\n第2个: Java',
              hints: [
                '按分隔符分割字符串用 split 方法',
                's.split(" ") 返回 ["Hello", "Java", "World"]',
              ],
            },
          ],
          realWorldScenario:
            '在任何应用中，字符串处理都是核心：' +
            '在 Web 开发中，处理用户输入、验证邮箱格式、解析 URL 参数。' +
            '在日志分析中，split 分割日志行，contains 过滤关键日志。' +
            '在 NLP（自然语言处理）中，分词、词频统计、文本清洗。' +
            '回文检查是面试经典题，考察双指针技巧和字符串操作能力。' +
            '理解 String 不可变性对编写高性能 Java 代码至关重要。',
        },
        {
          id: 'java-ch7-l2',
          title: 'StringBuilder',
          order: 1,
          content_md:
            '由于 String 不可变，在循环中用 `+` 拼接字符串会产生大量临时对象，严重影响性能。' +
            '`StringBuilder` 是可变的字符序列，专门用于高效拼接字符串。' +
            '它通过 `append()`、`insert()`、`delete()` 等方法原地修改字符序列，不会创建新对象。\n\n' +
            'StringBuilder vs String：String 适合不可变文本（如配置、常量），' +
            'StringBuilder 适合动态构建文本（如循环拼接、日志格式化）。' +
            '在循环中拼接字符串时，始终用 StringBuilder——性能差距可达数百倍。' +
            '编译器会将简单的 `a + b` 优化为 StringBuilder，但循环中的 `+=` 无法优化。\n\n' +
            '`StringBuffer` 是 StringBuilder 的线程安全版本（方法 synchronized），但性能较低。' +
            '单线程场景用 StringBuilder，多线程共享用 StringBuffer。' +
            '实际开发中 99% 的情况用 StringBuilder。StringBuilder 还支持链式调用：' +
            '`sb.append("a").append("b").append("c")`，因为 append 返回 this。',
          examples: [
            {
              title: 'StringBuilder 高效拼接',
              code: `public class Main {
    public static void main(String[] args) {
        // StringBuilder 构建字符串
        StringBuilder sb = new StringBuilder();
        sb.append("姓名: 张三\\n");
        sb.append("年龄: 25\\n");
        sb.append("城市: 北京");
        System.out.println(sb.toString());

        // 链式调用
        String result = new StringBuilder()
            .append("2024")
            .append("-")
            .append("01")
            .append("-")
            .append("15")
            .toString();
        System.out.println("日期: " + result);

        // 循环拼接（高效）
        StringBuilder csv = new StringBuilder();
        for (int i = 1; i <= 5; i++) {
            if (i > 1) csv.append(",");
            csv.append("item").append(i);
        }
        System.out.println("CSV: " + csv);
    }
}`,
              explanation:
                'append 拼接、toString 转为 String。链式调用让代码简洁。' +
                '循环拼接用 StringBuilder 比用 += 高效得多，因为不会创建临时 String 对象。' +
                '这是 Java 性能优化的基本功。',
            },
            {
              title: 'StringBuilder 其他操作',
              code: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello World");

        // insert: 在指定位置插入
        sb.insert(5, " Java");
        System.out.println("插入后: " + sb);

        // delete: 删除指定范围
        sb.delete(5, 10);
        System.out.println("删除后: " + sb);

        // reverse: 反转
        sb.reverse();
        System.out.println("反转后: " + sb);

        // replace: 替换指定范围
        StringBuilder sb2 = new StringBuilder("abcXYZdef");
        sb2.replace(3, 6, "123");
        System.out.println("替换后: " + sb2);

        // indexOf / substring
        StringBuilder sb3 = new StringBuilder("Hello, Java!");
        System.out.println("Java位置: " + sb3.indexOf("Java"));
        System.out.println("子串: " + sb3.substring(7, 11));
    }
}`,
              explanation:
                'insert 插入、delete 删除、reverse 反转、replace 替换。' +
                'StringBuilder 提供了丰富的修改方法，这些操作都是原地修改，不会创建新对象。' +
                '字符串反转用 StringBuilder.reverse() 是最简单的方式。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 StringBuilder 在循环中拼接 1 到 5 的数字，用逗号分隔，输出 "1,2,3,4,5"。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= 5; i++) {
            if (i > 1) sb.append(",");
            sb.append(___);
        }
        System.out.println(sb.toString());
    }
}`,
              expected_output: '1,2,3,4,5',
              hints: [
                '循环变量 i 就是当前数字',
                'sb.append(i) 将数字拼接到 StringBuilder',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 StringBuilder.reverse() 反转字符串 "abcdef" 并输出。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        String s = "abcdef";
        String reversed = new StringBuilder(s).___().toString();
        System.out.println(reversed);
    }
}`,
              expected_output: 'fedcba',
              hints: [
                'StringBuilder 的反转方法是 reverse()',
                'new StringBuilder(s).reverse().toString() 返回反转后的字符串',
              ],
            },
          ],
          realWorldScenario:
            '在构建 SQL 查询语句时，StringBuilder 用于动态拼接 WHERE 条件。' +
            '在日志框架中，StringBuilder 构建日志消息（SLF4J 底层使用）。' +
            '在 JSON/XML 序列化中，StringBuilder 高效构建输出字符串。' +
            '在 HTTP 响应构建中，StringBuilder 拼接响应体。' +
            '在报表生成中，StringBuilder 累积 CSV/HTML 内容。' +
            '理解 String 不可变性和 StringBuilder 的必要性是写出高性能 Java 代码的关键。',
        },
        {
          id: 'java-ch7-l3',
          title: '文件读写',
          order: 2,
          content_md:
            'Java 提供了丰富的文件 I/O API。`java.nio.file.Files` 是 Java 7+ 推荐的文件操作类，' +
            '提供了简洁的静态方法：`readString`、`writeString`、`readAllLines`、' +
            '`exists`、`createDirectory` 等。`Path` 类替代了旧的 `File` 类，' +
            '配合 `Files` 使用是现代 Java 文件操作的标准做法。\n\n' +
            '读取文件常用方式：`Files.readString(path)` 一次读取全部文本（适合小文件），' +
            '`Files.readAllLines(path)` 读取所有行返回 `List<String>`，' +
            '`Files.lines(path)` 返回 Stream 逐行处理（适合大文件，延迟加载）。' +
            '写入文件用 `Files.writeString(path, content)` 或 `Files.write(path, lines)`。' +
            '默认覆盖已有文件，可用 `StandardOpenOption.APPEND` 追加。\n\n' +
            '`try-with-resources` 语法自动关闭实现了 AutoCloseable 的资源（如 InputStream、BufferedReader），' +
            '即使发生异常也能正确关闭。这大大简化了资源管理代码，避免了资源泄漏。' +
            '语法为 `try (Resource r = new ...) { }`，资源在 try 块结束时自动关闭。' +
            '文件 I/O 必须处理 IOException（受检异常），通常用 try-catch 包裹。',
          examples: [
            {
              title: '写入和读取文件',
              code: `import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Path path = Paths.get("test.txt");

        try {
            // 写入文件
            Files.writeString(path, "第一行\\n第二行\\n第三行");
            System.out.println("文件已写入");

            // 读取全部内容
            String content = Files.readString(path);
            System.out.println("全部内容:\\n" + content);

            // 逐行读取
            List<String> lines = Files.readAllLines(path);
            System.out.println("行数: " + lines.size());
            for (int i = 0; i < lines.size(); i++) {
                System.out.println("第" + (i+1) + "行: " + lines.get(i));
            }

            // 追加内容
            Files.writeString(path, "\\n第四行",
                java.nio.file.StandardOpenOption.APPEND);
            System.out.println("追加后行数: " + Files.readAllLines(path).size());
        } catch (IOException e) {
            System.out.println("文件操作失败: " + e.getMessage());
        }
    }
}`,
              explanation:
                'Files.writeString 写入、readString 读取全部、readAllLines 逐行读取。' +
                'StandardOpenOption.APPEND 追加模式。Path 替代旧的 File 类。' +
                '所有文件操作必须处理 IOException。',
            },
            {
              title: 'try-with-resources',
              code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.FileWriter;
import java.io.BufferedWriter;

public class Main {
    public static void main(String[] args) {
        // try-with-resources: 自动关闭资源
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("log.txt"))) {
            writer.write("日志第1行");
            writer.newLine();
            writer.write("日志第2行");
        } catch (IOException e) {
            System.out.println("写入失败: " + e);
        }

        // 读取
        try (BufferedReader reader = new BufferedReader(new FileReader("log.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println("读取: " + line);
            }
        } catch (IOException e) {
            System.out.println("读取失败: " + e);
        }

        System.out.println("资源已自动关闭");
    }
}`,
              explanation:
                'try-with-resources 在 try 块结束时自动关闭 writer 和 reader，' +
                '即使发生异常也能正确关闭。无需手动 close()，也不需要 finally 块。' +
                '这是 Java 7+ 推荐的资源管理方式，避免了资源泄漏。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Files.writeString 写入 "Hello File I/O" 到文件，再用 Files.readString 读取并输出。',
              starter_code: `import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Main {
    public static void main(String[] args) {
        Path path = Paths.get("test.txt");
        try {
            Files.___(path, "Hello File I/O");
            String content = Files.readString(path);
            System.out.println(content);
        } catch (IOException e) {
            System.out.println("错误: " + e.getMessage());
        }
    }
}`,
              expected_output: 'Hello File I/O',
              hints: [
                '写入字符串到文件用 Files.writeString 方法',
                'Files.writeString(path, "Hello File I/O")',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Files.readAllLines 读取文件（含3行内容 "A","B","C"），输出行数。',
              starter_code: `import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Path path = Paths.get("data.txt");
        try {
            Files.writeString(path, "A\\nB\\nC");
            List<String> lines = Files.___(path);
            System.out.println("行数: " + lines.size());
        } catch (IOException e) {
            System.out.println("错误: " + e.getMessage());
        }
    }
}`,
              expected_output: '行数: 3',
              hints: [
                '逐行读取文件用 Files.readAllLines 方法',
                'Files.readAllLines(path) 返回 List<String>',
              ],
            },
          ],
          realWorldScenario:
            '在配置管理中，Files.readString 读取 JSON/YAML 配置文件。' +
            '在日志系统中，每次请求结束后将日志写入文件（append 模式）。' +
            '在数据处理中，逐行读取 CSV 文件进行 ETL 转换。' +
            '在文件上传/下载中，InputStream/OutputStream 处理二进制文件流。' +
            'try-with-resources 是所有涉及资源操作（文件、数据库连接、网络连接）的标准写法，' +
            '避免资源泄漏是生产级代码的基本要求。',
        },
      ],
    },
    // ==================== 第八章 ====================
    {
      id: 'java-ch8',
      title: '进阶主题',
      order: 7,
      lessons: [
        {
          id: 'java-ch8-l1',
          title: 'Lambda 表达式',
          order: 0,
          content_md:
            'Lambda 表达式是 Java 8 引入的核心特性，开启了 Java 函数式编程的大门。' +
            'Lambda 本质上是一个匿名函数，语法为 `(参数) -> { 方法体 }`。' +
            '它让代码更简洁，特别是在处理集合、事件回调、多线程等场景。' +
            'Lambda 的类型必须是函数式接口（Functional Interface）——只有一个抽象方法的接口。\n\n' +
            '函数式接口是 Lambda 的基础。Java 8 在 java.util.function 包中预定义了大量函数式接口：' +
            '`Predicate<T>`（接收T返回boolean）、`Consumer<T>`（接收T无返回）、' +
            '`Function<T,R>`（接收T返回R）、`Supplier<T>`（无参数返回T）、' +
            '`BiFunction<T,U,R>`（接收两个参数返回R）等。' +
            '自定义函数式接口用 `@FunctionalInterface` 注解标记（可选但推荐）。\n\n' +
            '方法引用是 Lambda 的进一步简化：当 Lambda 体只是调用一个已存在的方法时，' +
            '可以用 `类名::方法名` 替代。四种形式：' +
            '`String::length`（静态方法/实例方法引用）、' +
            '`System.out::println`（特定对象的方法引用）、' +
            '`String::new`（构造方法引用）、' +
            '`String[]::new`（数组构造引用）。' +
            '方法引用让代码更简洁、更具表达力。',
          examples: [
            {
              title: 'Lambda 基础',
              code: `import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("张三", "李四", "王五", "赵六");

        // 匿名内部类（旧写法）
        names.forEach(name -> System.out.println("你好, " + name));

        // Lambda 排序
        List<Integer> nums = Arrays.asList(5, 2, 8, 1, 9);
        nums.sort((a, b) -> b - a);  // 降序
        System.out.println("降序: " + nums);

        // 方法引用
        names.forEach(System.out::println);

        // 自定义函数式接口
        MathOperation add = (a, b) -> a + b;
        MathOperation mul = (a, b) -> a * b;
        System.out.println("3+4 = " + add.operate(3, 4));
        System.out.println("3*4 = " + mul.operate(3, 4));
    }

    @FunctionalInterface
    interface MathOperation {
        int operate(int a, int b);
    }
}`,
              explanation:
                'Lambda 替代匿名内部类，代码更简洁。sort 接收 Comparator Lambda。' +
                '方法引用 System.out::println 等价于 x -> System.out.println(x)。' +
                '自定义函数式接口只需一个抽象方法，Lambda 可以直接赋值给它。',
            },
            {
              title: 'Predicate 与 Consumer',
              code: `import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.function.Predicate;
import java.util.function.Consumer;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Predicate: 判断条件
        Predicate<Integer> isEven = n -> n % 2 == 0;
        Predicate<Integer> isGreaterThan5 = n -> n > 5;

        // 筛选偶数
        List<Integer> evens = filter(nums, isEven);
        System.out.println("偶数: " + evens);

        // 组合条件（and / or / negate）
        List<Integer> result = filter(nums, isEven.and(isGreaterThan5));
        System.out.println("偶数且>5: " + result);

        // Consumer: 消费元素
        Consumer<String> printer = s -> System.out.println("消费: " + s);
        printer.accept("Hello");
        printer.andThen(s -> System.out.println("后续: " + s)).accept("World");
    }

    // 用 Predicate 过滤
    static <T> List<T> filter(List<T> list, Predicate<T> pred) {
        List<T> result = new ArrayList<>();
        for (T item : list) {
            if (pred.test(item)) {
                result.add(item);
            }
        }
        return result;
    }
}`,
              explanation:
                'Predicate 接收参数返回 boolean，用于条件判断。' +
                'Predicate 支持 and/or/negate 组合条件。' +
                'Consumer 接收参数无返回值，用于副作用操作。' +
                '函数式接口的组合能力是函数式编程的精髓。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Lambda 对 List<Integer> {5,2,8,1,9,3} 升序排序后输出。',
              starter_code: `import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(5, 2, 8, 1, 9, 3);
        nums.sort((a, b) -> ___);
        System.out.println(nums);
    }
}`,
              expected_output: '[1, 2, 3, 5, 8, 9]',
              hints: [
                '升序排序：a - b（返回负数表示a在前面）',
                '(a, b) -> a - b',
              ],
            },
            {
              type: 'output-match',
              prompt: '定义函数式接口 StringProcessor，有方法 String process(String s)。' +
                '用 Lambda 实现将 "hello" 转大写并输出。',
              starter_code: `public class Main {
    public static void main(String[] args) {
        StringProcessor processor = s -> ___;
        System.out.println(processor.process("hello"));
    }

    @FunctionalInterface
    interface StringProcessor {
        String process(String s);
    }
}`,
              expected_output: 'HELLO',
              hints: [
                '字符串转大写用 toUpperCase() 方法',
                's -> s.toUpperCase()',
              ],
            },
          ],
          realWorldScenario:
            '在 Spring Boot 中，Lambda 广泛用于：' +
            'Stream 操作（filter/map/reduce）、Optional 处理（map/orElse）、' +
            '事件监听（button.setOnAction(e -> ...)）、线程创建（new Thread(() -> ...)）。' +
            '在响应式编程中，Lambda 是 Flux/Mono 操作的基础。' +
            'Lambda 让代码更声明式、更简洁，是现代 Java 开发的核心技能。',
        },
        {
          id: 'java-ch8-l2',
          title: 'Stream API',
          order: 1,
          content_md:
            'Stream API 是 Java 8 引入的函数式数据处理框架，让集合操作更声明式、更高效。' +
            'Stream 不是数据结构，而是对集合数据的计算流水线。' +
            'Stream 操作分为中间操作（返回 Stream，延迟执行）和终端操作（触发计算，返回结果）。' +
            '常见的中间操作有 `filter`、`map`、`sorted`、`distinct`、`limit`、`skip`；' +
            '常见的终端操作有 `forEach`、`collect`、`count`、`reduce`、`findFirst`、`anyMatch`。\n\n' +
            'Stream 的核心优势是声明式编程——你描述"做什么"而非"怎么做"。' +
            '例如 `list.stream().filter(n -> n > 5).map(n -> n * 2).collect(toList())` ' +
            '比传统的 for 循环+if 更清晰。Stream 还支持并行处理：' +
            '`list.parallelStream()` 自动利用多核 CPU 并行计算，对于大数据集可显著提升性能。\n\n' +
            '`collect` 是最灵活的终端操作，配合 `Collectors` 工具类可以收集为各种结果：' +
            '`Collectors.toList()` 收集为 List、`Collectors.toSet()` 收集为 Set、' +
            '`Collectors.toMap()` 收集为 Map、`Collectors.groupingBy()` 分组、' +
            '`Collectors.joining()` 拼接字符串、`Collectors.counting()` 计数。' +
            'Stream API 是现代 Java 开发的核心技能，掌握它让数据处理代码更优雅。',
          examples: [
            {
              title: 'Stream 过滤与映射',
              code: `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // 过滤偶数
        List<Integer> evens = nums.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        System.out.println("偶数: " + evens);

        // 映射：每个数乘以2
        List<Integer> doubled = nums.stream()
            .map(n -> n * 2)
            .collect(Collectors.toList());
        System.out.println("翻倍: " + doubled);

        // 链式操作：过滤>5 -> 平方 -> 排序
        List<Integer> result = nums.stream()
            .filter(n -> n > 5)
            .map(n -> n * n)
            .sorted()
            .collect(Collectors.toList());
        System.out.println(">5的平方: " + result);

        // reduce 求和
        int sum = nums.stream().reduce(0, Integer::sum);
        System.out.println("总和: " + sum);
    }
}`,
              explanation:
                'filter 过滤、map 映射（转换）、sorted 排序、collect 收集为 List。' +
                'reduce 归约：从初始值0开始累加。Stream 操作可以链式调用形成流水线。' +
                '中间操作是延迟的，只有终端操作（collect）触发时才真正执行。',
            },
            {
              title: 'groupingBy 与 joining',
              code: `import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> words = Arrays.asList(
            "apple", "banana", "avocado", "cherry", "blueberry", "apricot"
        );

        // groupingBy: 按首字母分组
        Map<Character, List<String>> grouped = words.stream()
            .collect(Collectors.groupingBy(s -> s.charAt(0)));
        System.out.println("按首字母分组: " + grouped);

        // joining: 拼接字符串
        String joined = words.stream()
            .collect(Collectors.joining(", ", "[", "]"));
        System.out.println("拼接: " + joined);

        // counting: 按首字母计数
        Map<Character, Long> countByChar = words.stream()
            .collect(Collectors.groupingBy(s -> s.charAt(0), Collectors.counting()));
        System.out.println("计数: " + countByChar);

        // FizzBuzz 经典面试题
        List<String> fizzBuzz = java.util.stream.IntStream.rangeClosed(1, 15)
            .mapToObj(i -> {
                if (i % 15 == 0) return "FizzBuzz";
                if (i % 3 == 0) return "Fizz";
                if (i % 5 == 0) return "Buzz";
                return String.valueOf(i);
            })
            .collect(Collectors.toList());
        System.out.println("FizzBuzz: " + fizzBuzz);
    }
}`,
              explanation:
                'groupingBy 分组、joining 拼接字符串、counting 计数。' +
                'FizzBuzz 是经典面试题：3的倍数输出Fizz，5的倍数输出Buzz，15的倍数输出FizzBuzz。' +
                'Stream + IntStream 让 FizzBuzz 更优雅，体现了声明式编程的威力。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Stream 对 List<Integer> {1,2,3,4,5,6} 过滤偶数后求和，输出结果。',
              starter_code: `import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);
        int sum = nums.stream()
            .filter(n -> n % 2 == 0)
            .reduce(0, ___);
        System.out.println(sum);
    }
}`,
              expected_output: '12',
              hints: [
                'reduce 的第二个参数是累加函数',
                'Integer::sum 是 (a, b) -> a + b 的方法引用',
                '2 + 4 + 6 = 12',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Stream 将 List<String> {"java","python","go"} 每个元素转大写后收集为 List 输出。',
              starter_code: `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> langs = Arrays.asList("java", "python", "go");
        List<String> upper = langs.stream()
            .map(String::___)
            .collect(Collectors.toList());
        System.out.println(upper);
    }
}`,
              expected_output: '[JAVA, PYTHON, GO]',
              hints: [
                '字符串转大写用 toUpperCase() 方法',
                'String::toUpperCase 是方法引用写法',
              ],
            },
          ],
          realWorldScenario:
            '在数据处理管道中，Stream API 是核心工具：' +
            '从数据库查询用户列表 → filter 过滤活跃用户 → map 转为 DTO → collect 收集为列表。' +
            '在报表系统中，groupingBy 按部门/月份分组统计数据。' +
            '在 ETL 中，Stream 处理数据清洗、转换、聚合。' +
            '并行流 parallelStream 利用多核加速大数据处理。' +
            'FizzBuzz 是面试经典题，用 Stream 实现展现了现代 Java 的表达能力。',
        },
        {
          id: 'java-ch8-l3',
          title: 'Optional 与空值安全',
          order: 2,
          content_md:
            'Optional<T> 是 Java 8 引入的容器对象，用于优雅地处理可能为 null 的值。' +
            '它要么包含一个非空值，要么为空（empty）。Optional 的目标是减少 NullPointerException，' +
            '强制开发者显式处理缺失值的情况，让空值在类型层面可见。\n\n' +
            '创建 Optional 的三种方式：`Optional.of(value)`（值不能为 null，否则抛 NPE）、' +
            '`Optional.ofNullable(value)`（值可为 null，为 null 时返回 empty）、' +
            '`Optional.empty()`（创建空 Optional）。' +
            '推荐用 ofNullable 处理可能为 null 的来源。\n\n' +
            '消费 Optional 的常用方法：' +
            '`isPresent()`/`isEmpty()`（Java 11+）判断是否有值；' +
            '`ifPresent(Consumer)` 有值时执行动作；' +
            '`orElse(default)` 有值返回值，无值返回默认值；' +
            '`orElseGet(Supplier)` 无值时惰性计算默认值；' +
            '`orElseThrow(Supplier)` 无值时抛指定异常；' +
            '`map(Function)`/`flatMap(Function)` 转换值；' +
            '`filter(Predicate)` 过滤值。\n\n' +
            'Optional 的最佳实践：用作方法返回类型表示"可能无结果"，' +
            '但不要用 Optional 作为字段或方法参数（Optional 不可序列化，且增加开销）。' +
            '链式调用 map/filter/orElse 是 Optional 的精髓，可替代多层 if-null 检查。' +
            '避免用 `get()` 直接取值（应配合 isPresent 或改用 orElse）。',
          examples: [
            {
              title: 'Optional 基本用法',
              code: `import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Optional<String> present = Optional.of("Hello");
        Optional<String> absent = Optional.ofNullable(null);

        System.out.println(present.isPresent());   // true
        System.out.println(absent.isPresent());    // false
        System.out.println(present.orElse("默认")); // Hello
        System.out.println(absent.orElse("默认"));  // 默认
        present.ifPresent(s -> System.out.println("值: " + s));
    }
}`,
              explanation:
                'Optional.of 创建非空 Optional，ofNullable 允许 null。' +
                'isPresent 判断是否有值，orElse 提供默认值，ifPresent 有值时执行消费动作。',
            },
            {
              title: 'map / filter 链式转换',
              code: `import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Optional<String> name = Optional.of("  Java  ");

        // 链式调用：去空格 → 转大写 → 过滤长度
        String result = name
            .map(String::trim)
            .map(String::toUpperCase)
            .filter(s -> s.length() > 2)
            .orElse("EMPTY");

        System.out.println(result); // JAVA
    }
}`,
              explanation:
                'map 对值进行转换（类似 Stream 的 map），filter 按条件过滤。' +
                '若任一步骤使值变空，后续操作直接跳过，最后 orElse 返回默认值。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt:
                '用 Optional.ofNullable 包装可能为 null 的字符串，' +
                '用 orElse 返回默认值 "N/A"。当输入为 null 时输出 N/A。',
              starter_code: `import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        String input = null;
        Optional<String> opt = Optional.___(input);
        System.out.println(opt.orElse("N/A"));
    }
}`,
              expected_output: 'N/A',
              hints: [
                'ofNullable 接受可能为 null 的值',
                'Optional.ofNullable(input) 创建可空 Optional',
              ],
            },
            {
              type: 'output-match',
              prompt:
                '用 map 把 Optional<Integer> 中的值乘以 2，再用 orElse 返回 0。输入 5 输出 10。',
              starter_code: `import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Optional<Integer> num = Optional.of(5);
        int result = num.___(n -> n * 2).orElse(0);
        System.out.println(result);
    }
}`,
              expected_output: '10',
              hints: [
                'map 接收 Function 进行转换',
                'num.map(n -> n * 2) 把 Integer 转为新的 Integer',
              ],
            },
          ],
          realWorldScenario:
            '在服务层查询数据库时，Optional 是返回类型的理想选择：' +
            'userRepository.findById(id) 返回 Optional<User>，' +
            '调用方用 orElseThrow(() -> new UserNotFoundException(id)) 显式处理未找到的情况。' +
            '配置读取时，config.get("key") 返回 Optional<String>，' +
            '链式 map 解析为 Integer，orElse 给默认值。' +
            '相比直接返回 null，Optional 让 API 契约更清晰，调用方不会忘记处理空值。',
        },
        {
          id: 'java-ch8-l4',
          title: '设计模式入门',
          order: 3,
          content_md:
            '设计模式是前人总结的、可复用的面向对象设计经验。' +
            'Java 作为典型 OOP 语言，设计模式应用广泛。' +
            '掌握常用模式能让代码更灵活、可维护、可扩展。' +
            '本节介绍三种高频模式：模板方法、策略模式、单例模式。\n\n' +
            '模板方法模式（Template Method）：在父类定义算法骨架，将某些步骤延迟到子类实现。' +
            '用 abstract 方法声明步骤，子类重写具体实现。' +
            '好处是算法结构不变，子类可定制细节。' +
            '典型应用：框架的钩子方法、生命周期回调。\n\n' +
            '策略模式（Strategy）：定义一系列算法，封装为独立类，使它们可互换。' +
            '客户端持有一个策略接口引用，运行时可替换具体策略。' +
            '在 Java 8+ 中，策略接口若是函数式接口，可直接用 Lambda 传入，无需定义策略类。' +
            '这大大简化了策略模式的使用。\n\n' +
            '单例模式（Singleton）：保证一个类只有一个实例，提供全局访问点。' +
            'Java 实现方式：私有构造方法 + 静态字段。' +
            '推荐用枚举实现单例（线程安全、防反射、防序列化），' +
            '或用双重检查锁（double-checked locking）处理懒加载线程安全。',
          examples: [
            {
              title: '模板方法模式',
              code: `// 模板方法：父类定义流程，子类实现细节
abstract class Game {
    abstract void initialize();
    abstract void play();
    abstract void end();

    // 模板方法：定义为 final 防止子类修改流程
    public final void run() {
        initialize();
        play();
        end();
    }
}

class Chess extends Game {
    void initialize() { System.out.println("棋盘就绪"); }
    void play() { System.out.println("下棋中"); }
    void end() { System.out.println("棋局结束"); }
}

public class Main {
    public static void main(String[] args) {
        Game game = new Chess();
        game.run();
    }
}`,
              explanation:
                'Game 父类用 run() 定义了"初始化→玩→结束"的流程骨架（final 不可改）。' +
                'Chess 子类实现每个具体步骤。新增游戏只需继承并实现抽象方法，流程不变。',
            },
            {
              title: '策略模式 + Lambda',
              code: `import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class Main {
    // 策略接口：Predicate<String>
    static void filter(List<String> items, Predicate<String> strategy) {
        for (String s : items) {
            if (strategy.test(s)) {
                System.out.println(s);
            }
        }
    }

    public static void main(String[] args) {
        List<String> names = Arrays.asList("Tom", "Amy", "Bob", "Ann");

        System.out.println("-- 长度=3 --");
        filter(names, s -> s.length() == 3);

        System.out.println("-- 以A开头 --");
        filter(names, s -> s.startsWith("A"));
    }
}`,
              explanation:
                'filter 接收 Predicate 策略，调用方用 Lambda 传入不同过滤策略。' +
                '无需为每个策略定义类，Java 8 Lambda 让策略模式轻量化。',
            },
            {
              title: '单例模式（枚举实现）',
              code: `// 枚举单例：线程安全、防反射、防序列化
enum Logger {
    INSTANCE;

    void log(String msg) {
        System.out.println("[LOG] " + msg);
    }
}

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.INSTANCE;
        Logger logger2 = Logger.INSTANCE;
        System.out.println(logger1 == logger2); // true，同一实例
        logger1.log("系统启动");
    }
}`,
              explanation:
                '枚举 INSTANCE 天然单例，JVM 保证唯一性。' +
                '《Effective Java》推荐此写法，比双重检查锁更简洁安全。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt:
                '实现策略模式：定义接口 Comparator，用 Lambda 按字符串长度排序。' +
                '补全 sort 调用，使输出按长度排序。',
              starter_code: `import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        String[] words = {"banana", "apple", "kiwi", "pear"};
        Arrays.sort(words, Comparator.___(String::length));
        System.out.println(Arrays.toString(words));
    }
}`,
              expected_output: '[kiwi, pear, apple, banana]',
              hints: [
                'Comparator.comparingInt 接收提取键的函数',
                'String::length 返回字符串长度（int）',
              ],
            },
            {
              type: 'output-match',
              prompt:
                '用模板方法模式：父类 Worker 定义 work() 流程为 prepare→execute→finish。' +
                '补全抽象方法声明，使子类必须实现这三个步骤。',
              starter_code: `abstract class Worker {
    abstract void prepare();
    ___ void execute();
    abstract void finish();

    public final void work() {
        prepare();
        execute();
        finish();
    }
}

class Coder extends Worker {
    void prepare() { System.out.println("打开IDE"); }
    void execute() { System.out.println("写代码"); }
    void finish() { System.out.println("提交代码"); }
}

public class Main {
    public static void main(String[] args) {
        new Coder().work();
    }
}`,
              expected_output: '打开IDE\n写代码\n提交代码',
              hints: [
                '抽象方法用 abstract 关键字声明',
                '三个方法都应是 abstract void',
              ],
            },
          ],
          realWorldScenario:
            '设计模式在真实项目中无处不在：' +
            'Spring Framework 大量使用模板方法（JdbcTemplate、RestTemplate 定义流程，回调处理细节）；' +
            '支付系统用策略模式支持多种支付方式（微信、支付宝、银行卡可互换）；' +
            '日志、配置管理用单例保证全局唯一访问点；' +
            'Java 的 Collections.sort 用策略模式接收 Comparator；' +
            'GUI 框架用观察者模式处理事件监听。' +
            '掌握这些模式能让你读懂优秀框架源码，写出更灵活的代码。',
        },
      ],
    },
  ],
}