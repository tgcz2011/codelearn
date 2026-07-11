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
            '## 概念详解\n\n' +
            'Java 是一门面向对象的、跨平台的、静态类型编程语言，由 Sun Microsystems（现 Oracle）于 1995 年发布。' +
            '它的核心理念是"一次编写，到处运行"（Write Once, Run Anywhere），这得益于 Java 虚拟机（JVM）——' +
            'Java 源代码（.java 文件）先被 javac 编译成字节码（.class 文件），再由 JVM 解释或即时编译（JIT）执行。' +
            '因此同一份字节码可以在 Windows、Linux、macOS 上运行，无需重新编译。\n\n' +
            'Java 的核心特性：\n' +
            '- **面向对象**：一切皆对象（除基本类型外），支持封装、继承、多态\n' +
            '- **平台无关**：JVM 屏蔽操作系统差异\n' +
            '- **自动内存管理**：垃圾回收器（GC）自动释放无用对象\n' +
            '- **强类型**：编译期类型检查，减少运行时错误\n' +
            '- **多线程**：内置线程支持\n' +
            '- **生态丰富**：Maven/Gradle 构建工具，Spring 框架，海量库\n\n' +
            '## 语法说明\n\n' +
            '### 程序基本结构\n\n' +
            '```java\n// public class：公开类，类名必须与文件名一致\n// 文件名必须是 Main.java\npublic class Main {\n    // main 方法是程序入口，签名固定\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n```\n\n' +
            '### main 方法签名解析\n\n' +
            '| 关键字 | 含义 |\n' +
            '|--------|------|\n' +
            '| `public` | 公开访问，JVM 可调用 |\n' +
            '| `static` | 静态方法，无需创建对象即可调用 |\n' +
            '| `void` | 无返回值 |\n' +
            '| `main` | 方法名，JVM 约定入口名 |\n' +
            '| `String[] args` | 命令行参数数组 |\n\n' +
            '### 输出方法对比\n\n' +
            '| 方法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `System.out.println(x)` | 输出 x 并换行 | `println("hi")` → hi\\n |\n' +
            '| `System.out.print(x)` | 输出 x 不换行 | `print("hi")` → hi |\n' +
            '| `System.out.printf(fmt, args)` | 格式化输出 | `printf("%d", 5)` → 5 |\n' +
            '| `System.err.println(x)` | 输出到标准错误 | 错误信息输出 |\n\n' +
            '### 注释类型\n\n' +
            '```java\n// 单行注释\n\n/*\n * 多行注释\n * 可跨多行\n */\n\n/**\n * 文档注释（javadoc）\n * @param args 命令行参数\n * @author 开发者\n */\n```\n\n' +
            '### 常用转义字符\n\n' +
            '| 转义 | 含义 | 转义 | 含义 |\n' +
            '|------|------|------|------|\n' +
            '| `\\n` | 换行 | `\\t` | 制表符 |\n' +
            '| `\\"` | 双引号 | `\\\'` | 单引号 |\n' +
            '| `\\\\` | 反斜杠 | `\\r` | 回车 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：第一个 Java 程序**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n```\n\n' +
            '**示例 2：多行输出与注释**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 单行注释\n        System.out.println("第一行");\n        /* 多行注释\n           打印第二行 */\n        System.out.print("第二行");\n        System.out.print("不换行");\n        System.out.println(" <- 接上一行");\n    }\n}\n```\n\n' +
            '**示例 3：使用转义字符**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("姓名\\t年龄\\t城市");\n        System.out.println("张三\\t25\\t北京");\n        System.out.println("他说:\\"你好!\\"");\n        System.out.println("文件路径:C:\\\\Users\\\\test");\n        System.out.printf("格式化: %d + %d = %d%n", 1, 2, 3);\n    }\n}\n```\n\n' +
            '**示例 4：命令行参数**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // args 接收命令行参数\n        if (args.length == 0) {\n            System.out.println("请提供参数: java Main 名字");\n            return;\n        }\n        System.out.println("你好, " + args[0] + "!");\n        System.out.println("参数个数: " + args.length);\n    }\n}\n// 运行: java Main 小明\n// 输出: 你好, 小明!\n//       参数个数: 1\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **类名必须与文件名一致**——`public class Main` 必须在 `Main.java` 文件中。一个文件只能有一个 public 类。\n' +
            '2. **main 方法签名固定**——必须是 `public static void main(String[] args)`。Java 21+ 也支持 `void main()`（预览特性）。\n' +
            '3. **大小写敏感**——`Main` 和 `main` 是不同的。Java 约定类名首字母大写（PascalCase），方法名首字母小写（camelCase）。\n' +
            '4. **语句以分号结尾**——每条语句必须以 `;` 结束，否则编译错误。\n' +
            '5. **println vs print**——`println` 自动换行，`print` 不换行。`printf` 支持格式化但不自动换行（用 `%n` 换行）。\n' +
            '6. **字符串用双引号**——Java 字符串只能用 `"`，单引号 `\'` 只用于单个字符（char）。\n' +
            '7. **包声明**——大型项目用 `package com.example;` 声明包，源文件第一行（除注释外）。\n\n' +
            '## 实际应用\n\n' +
            '1. **Spring Boot 服务入口**：`@SpringBootApplication` 注解的启动类的 main 方法初始化 Spring 容器并启动嵌入式 Tomcat。\n' +
            '2. **Android 应用**：Activity 的 onCreate 是入口，但底层仍由 Java/Kotlin 的 main 方法启动 Zygote 进程。\n' +
            '3. **命令行工具**：通过 `args` 接收用户输入参数，实现 CLI 工具（如 Maven、Gradle 本身就是 Java 程序）。\n' +
            '4. **大数据处理**：Hadoop/Spark 的作业提交脚本最终调用 Java main 方法启动 Driver/Executor。\n' +
            '5. **测试入口**：JUnit 测试虽不直接用 main，但 IDE 和构建工具底层通过反射调用测试方法。\n\n' +
            '## 扩展知识\n\n' +
            '- **JVM、JRE、JDK 区别**：JDK 包含 JRE 包含 JVM。JDK 有编译器 javac，JRE 有运行时，JVM 是虚拟机本身。\n' +
            '- **JIT 编译**：JVM 先解释执行字节码，热点代码用 JIT 编译成本地机器码加速。这就是 Java 性能接近 C++ 的原因。\n' +
            '- **字节码**：.class 文件是平台无关的中间表示，类似 .NET 的 IL。可用 `javap -c Main` 反汇编查看。\n' +
            '- **GraalVM**：Oracle 的新一代 JVM，支持 AOT 编译成原生可执行文件，启动更快、内存更省。\n' +
            '- **Project Loom（虚拟线程）**：Java 21+ 引入轻量级虚拟线程，让高并发更高效。\n' +
            '- **模块系统**：Java 9+ 引入 `module-info.java`，解决 classpath 地狱问题。',
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
            '## 概念详解\n\n' +
            'Java 是强类型语言（strongly typed），每个变量必须先声明类型再使用。' +
            'Java 的数据类型分为两大类：**基本数据类型**（primitive types）和**引用类型**（reference types）。' +
            '基本类型直接存储值，存在栈上；引用类型存储对象引用，对象本身在堆上。\n\n' +
            '基本数据类型共 8 种，是 Java 中唯一不是对象的类型。它们的设计追求效率和简单。' +
            '理解类型系统对避免运行时错误、优化内存使用至关重要。\n\n' +
            '## 语法说明\n\n' +
            '### 8 种基本数据类型\n\n' +
            '| 类型 | 大小 | 范围 | 默认值 | 用途 |\n' +
            '|------|------|------|--------|------|\n' +
            '| `byte` | 1 字节 | -128 ~ 127 | 0 | 节省内存的小整数 |\n' +
            '| `short` | 2 字节 | -32768 ~ 32767 | 0 | 短整数 |\n' +
            '| `int` | 4 字节 | -2^31 ~ 2^31-1 | 0 | 最常用整数类型 |\n' +
            '| `long` | 8 字节 | -2^63 ~ 2^63-1 | 0L | 大整数，加 L 后缀 |\n' +
            '| `float` | 4 字节 | ±3.4e38（6-7 位有效） | 0.0f | 单精度浮点，加 f 后缀 |\n' +
            '| `double` | 8 字节 | ±1.7e308（15 位有效） | 0.0d | 双精度浮点（默认） |\n' +
            '| `char` | 2 字节 | 0 ~ 65535（Unicode） | \'\\u0000\' | 单个字符 |\n' +
            '| `boolean` | 1 位 | true / false | false | 布尔值 |\n\n' +
            '### 变量声明与初始化\n\n' +
            '```java\n// 声明并初始化\nint age = 25;\nlong population = 7800000000L;  // long 需 L 后缀\ndouble price = 19.99;            // 默认浮点类型\nfloat score = 95.5f;             // float 需 f 后缀\nchar grade = \'A\';               // 单引号\nboolean isPass = true;\n\n// 先声明后赋值\nint x;\nx = 10;\n\n// var 类型推断（Java 10+，仅局部变量）\nvar name = "小明";  // 编译器推断为 String\nvar count = 100;   // 编译器推断为 int\n```\n\n' +
            '### 引用类型\n\n' +
            '```java\n// String 是引用类型（类），但用起来像基本类型\nString name = "张三";\nString greeting = new String("你好");\n\n// 数组\nint[] nums = {1, 2, 3};\nint[] arr = new int[5];\n\n// 自定义类\nPerson p = new Person("李四", 30);\n```\n\n' +
            '### 类型转换\n\n' +
            '| 转换方向 | 类型 | 说明 | 示例 |\n' +
            '|----------|------|------|------|\n' +
            '| 小 → 大 | 自动（widening） | 无精度损失 | `int → double` |\n' +
            '| 大 → 小 | 强制（narrowing） | 可能丢精度 | `(int)3.14 → 3` |\n' +
            '| int → long | 自动 | 无损失 | `int i = 5; long l = i;` |\n' +
            '| double → int | 强制 | 截断小数 | `int n = (int)9.99;` |\n\n' +
            '### 自动装箱与拆箱\n\n' +
            '```java\n// 基本类型 → 包装类（装箱）\nInteger boxed = Integer.valueOf(5);  // 显式\nInteger auto = 5;                     // 自动装箱\n\n// 包装类 → 基本类型（拆箱）\nint n = auto.intValue();  // 显式\nint m = auto;             // 自动拆箱\n```\n\n' +
            '### 基本类型包装类\n\n' +
            '| 基本类型 | 包装类 | 常用方法 |\n' +
            '|----------|--------|----------|\n' +
            '| `int` | `Integer` | `parseInt()`, `valueOf()` |\n' +
            '| `double` | `Double` | `parseDouble()` |\n' +
            '| `boolean` | `Boolean` | `parseBoolean()` |\n' +
            '| `char` | `Character` | `isDigit()`, `toUpperCase()` |\n' +
            '| `long` | `Long` | `parseLong()` |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：基本数据类型演示**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int age = 25;\n        long population = 7800000000L;\n        double price = 19.99;\n        float score = 95.5f;\n        char grade = \'A\';\n        boolean isPass = true;\n        byte b = 127;\n\n        System.out.println("年龄: " + age);\n        System.out.println("人口: " + population);\n        System.out.println("价格: " + price);\n        System.out.println("评分: " + score);\n        System.out.println("等级: " + grade);\n        System.out.println("通过: " + isPass);\n        System.out.println("字节: " + b);\n    }\n}\n```\n\n' +
            '**示例 2：类型转换**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 自动转换（小 → 大）\n        int i = 100;\n        long l = i;\n        double d = i;\n        System.out.println("int→long: " + l);\n        System.out.println("int→double: " + d);\n\n        // 强制转换（大 → 小）\n        double pi = 3.14159;\n        int n = (int) pi;\n        System.out.println("double→int: " + n);  // 3，截断小数\n\n        // char 与 int 互转\n        char ch = \'A\';\n        int code = ch;\n        System.out.println("A 的码点: " + code);  // 65\n        char ch2 = (char) (code + 1);\n        System.out.println("下一个字符: " + ch2);   // B\n    }\n}\n```\n\n' +
            '**示例 3：var 类型推断**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        var name = "小明";        // String\n        var age = 25;             // int\n        var price = 19.99;        // double\n        var nums = new int[]{1, 2, 3};  // int[]\n\n        System.out.println(name.getClass().getSimpleName());  // String\n        System.out.println(age + price);\n\n        // var 只能用于局部变量，不能用于字段、方法参数、返回值\n    }\n}\n```\n\n' +
            '**示例 4：包装类与字符串转换**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 字符串 → 数字\n        String s = "42";\n        int n = Integer.parseInt(s);\n        double d = Double.parseDouble("3.14");\n        System.out.println(n + " " + d);\n\n        // 数字 → 字符串\n        String s1 = String.valueOf(100);\n        String s2 = Integer.toString(200);\n        String s3 = 300 + "";  // 简便方法\n        System.out.println(s1 + " " + s2 + " " + s3);\n\n        // 自动装箱拆箱\n        Integer boxed = 5;      // 装箱\n        int unboxed = boxed;    // 拆箱\n        System.out.println(boxed + " " + unboxed);\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **整数默认是 int**——`long` 必须加 `L` 后缀（如 `100L`），否则大数会编译错误。\n' +
            '2. **浮点默认是 double**——`float` 必须加 `f` 后缀（如 `3.14f`），否则编译错误。\n' +
            '3. **整数溢出不会报错**——`int` 超过范围会回绕（wrap around），产生错误结果。大数用 `long` 或 `BigInteger`。\n' +
            '4. **浮点数不精确**——`0.1 + 0.2 != 0.3`（浮点精度问题）。金额计算用 `BigDecimal`。\n' +
            '5. **char 是无符号整数**——`char` 范围 0-65535，可参与整数运算。`char` 用单引号，`String` 用双引号。\n' +
            '6. **boolean 不能转 int**——与 C/C++ 不同，Java 中 `true` 不能当 1 用，`false` 不能当 0 用。\n' +
            '7. **包装类有缓存**——`Integer` 缓存 -128~127，`Integer.valueOf(127) == Integer.valueOf(127)` 为 true，但 128 不一定。\n' +
            '8. **var 不是动态类型**——`var` 只在编译期推断类型，之后类型固定。不能用于字段、方法参数。\n\n' +
            '## 实际应用\n\n' +
            '1. **数据库字段映射**：数据库 INT 对应 Java `int`，BIGINT 对应 `long`，DECIMAL 对应 `BigDecimal`，VARCHAR 对应 `String`。\n' +
            '2. **金额计算**：财务系统必须用 `BigDecimal` 而非 `double`，避免浮点精度导致金额错误。\n' +
            '3. **配置参数**：从配置文件读取的字符串需用 `Integer.parseInt()` 等转换成数值。\n' +
            '4. **集合存储**：集合只能存对象，基本类型需装箱。`List<Integer>` 而非 `List<int>`（Valhalla 项目将支持）。\n' +
            '5. **JSON 序列化**：API 返回的数字字段需注意类型——`long` 在 JavaScript 中可能精度丢失（超过 2^53）。\n\n' +
            '## 扩展知识\n\n' +
            '- **BigInteger / BigDecimal**：任意精度数值类型，用于大数计算和精确小数运算。`BigDecimal` 是金融系统标配。\n' +
            '- **自动装箱陷阱**：`Integer a = null; int b = a;` 会抛 NullPointerException。包装类可能为 null。\n' +
            '- **Project Valhalla**：未来 Java 将引入值类型（value class），让基本类型与对象统一，消除装箱开销。\n' +
            '- **字面量改进**：Java 7+ 支持下划线分隔：`1_000_000`、`0xFF_FF`。Java 17+ 支持二进制 `0b1010`。\n' +
            '- **字符编码**：`char` 是 UTF-16 代码单元，一些 emoji（如 😀）需两个 char（代理对）。处理时注意。\n' +
            '- **strictfp 关键字**：保证浮点计算在不同平台结果一致（Java 17+ 默认严格，关键字已废弃）。',
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
            '## 概念详解\n\n' +
            'Java 提供了丰富的运算符（operators），用于对变量和值进行操作。运算符是表达式的基本构建块，' +
            '理解它们的语义、优先级和副作用对写出正确、高效的代码至关重要。Java 运算符分为：' +
            '算术、关系、逻辑、赋值、位、三元、instanceof 等几大类。\n\n' +
            '运算符的关键概念：\n' +
            '- **短路求值**：`&&` 和 `||` 在左侧已能决定结果时不求值右侧，避免异常\n' +
            '- **运算符优先级**：`*` 高于 `+`，但建议用括号明确意图\n' +
            '- **整数除法截断**：`7 / 2 = 3`（不是 3.5）\n' +
            '- **自增自减位置**：前置 `++i` 先加后用，后置 `i++` 先用后加\n\n' +
            '## 语法说明\n\n' +
            '### 算术运算符\n\n' +
            '| 运算符 | 说明 | 示例 | 结果 |\n' +
            '|--------|------|------|------|\n' +
            '| `+` | 加法 / 字符串拼接 | `3 + 5` / `"a" + 1` | `8` / `"a1"` |\n' +
            '| `-` | 减法 | `5 - 3` | `2` |\n' +
            '| `*` | 乘法 | `3 * 5` | `15` |\n' +
            '| `/` | 除法（整数截断） | `7 / 2` | `3` |\n' +
            '| `%` | 取模（余数） | `7 % 3` | `1` |\n' +
            '| `++` | 自增 | `++i` / `i++` | 先加 / 后加 |\n' +
            '| `--` | 自减 | `--i` / `i--` | 先减 / 后减 |\n\n' +
            '### 关系与逻辑运算符\n\n' +
            '| 运算符 | 说明 | 示例 |\n' +
            '|--------|------|------|\n' +
            '| `==` | 等于 | `a == b` |\n' +
            '| `!=` | 不等于 | `a != b` |\n' +
            '| `>` `<` `>=` `<=` | 大小比较 | `a > b` |\n' +
            '| `&&` | 逻辑与（短路） | `a && b` |\n' +
            '| `\\|\\|` | 逻辑或（短路） | `a \\|\\| b` |\n' +
            '| `!` | 逻辑非 | `!a` |\n' +
            '| `&` `\\|` | 逻辑与/或（非短路） | `a & b` |\n\n' +
            '### 赋值与位运算符\n\n' +
            '| 运算符 | 说明 | 示例 | 等价 |\n' +
            '|--------|------|------|------|\n' +
            '| `=` | 赋值 | `a = 5` | - |\n' +
            '| `+=` `-=` `*=` `/=` `%=` | 复合赋值 | `a += 5` | `a = a + 5` |\n' +
            '| `&=` `\\|=` `^=` `<<=` `>>=` | 位复合赋值 | `a <<= 2` | `a = a << 2` |\n' +
            '| `&` | 按位与 | `5 & 3` | `1` |\n' +
            '| `\\|` | 按位或 | `5 \\| 3` | `7` |\n' +
            '| `^` | 按位异或 | `5 ^ 3` | `6` |\n' +
            '| `~` | 按位取反 | `~5` | `-6` |\n' +
            '| `<<` | 左移 | `5 << 2` | `20` |\n' +
            '| `>>` | 算术右移（保留符号） | `-8 >> 1` | `-4` |\n' +
            '| `>>>` | 逻辑右移（填 0） | `-8 >>> 28` | 正数 |\n\n' +
            '### 三元运算符\n\n' +
            '```java\n// 条件 ? 值1 : 值2\nint max = a > b ? a : b;\nString status = age >= 18 ? "成年" : "未成年";\n```\n\n' +
            '### 运算符优先级（从高到低）\n\n' +
            '| 优先级 | 运算符 |\n' +
            '|--------|--------|\n' +
            '| 1 | `()` `[]` `.` |\n' +
            '| 2 | `!` `~` `++` `--` `+`(正) `-`(负) |\n' +
            '| 3 | `*` `/` `%` |\n' +
            '| 4 | `+` `-` |\n' +
            '| 5 | `<<` `>>` `>>>` |\n' +
            '| 6 | `<` `<=` `>` `>=` `instanceof` |\n' +
            '| 7 | `==` `!=` |\n' +
            '| 8 | `&` `^` `\\|` |\n' +
            '| 9 | `&&` `\\|\\|` |\n' +
            '| 10 | `?:` |\n' +
            '| 11 | `=` `+=` 等 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：算术运算与取模**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int a = 17, b = 5;\n        System.out.println("a + b = " + (a + b));\n        System.out.println("a / b = " + (a / b));   // 整数除法\n        System.out.println("a % b = " + (a % b));   // 取模\n        System.out.println("a 是奇数? " + (a % 2 != 0));\n        System.out.println("a 的个位: " + (a % 10));\n        System.out.println("a 的十位: " + (a / 10 % 10));\n    }\n}\n```\n\n' +
            '**示例 2：自增自减与复合赋值**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int i = 5;\n        System.out.println(i++);  // 5，先用后加\n        System.out.println(i);     // 6\n        System.out.println(++i);   // 7，先加后用\n        System.out.println(i);     // 7\n\n        int x = 10;\n        x += 5;  // x = 15\n        x *= 2;  // x = 30\n        x -= 10; // x = 20\n        System.out.println("x = " + x);\n    }\n}\n```\n\n' +
            '**示例 3：短路逻辑与三元运算符**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int a = 5, b = 0;\n        // 短路：a != 0 为 false，不会执行 b/a\n        if (a != 0 && b / a > 0) {\n            System.out.println("条件成立");\n        }\n\n        // 非短路 & 会执行右侧，可能异常\n        // if (a != 0 & b / a > 0) { } // 危险\n\n        // 三元运算符\n        int max = a > b ? a : b;\n        String msg = a > 0 ? "正数" : (a < 0 ? "负数" : "零");\n        System.out.println("max = " + max);\n        System.out.println("msg = " + msg);\n    }\n}\n```\n\n' +
            '**示例 4：位运算实战**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 位运算做权限标志\n        int READ = 1, WRITE = 2, EXEC = 4;\n        int perm = READ | WRITE;  // 有读和写权限\n        System.out.println("可读: " + ((perm & READ) != 0));\n        System.out.println("可执行: " + ((perm & EXEC) != 0));\n\n        // 左移相当于乘 2 的 n 次方\n        System.out.println("5 << 2 = " + (5 << 2));  // 20\n        System.out.println("20 >> 2 = " + (20 >> 2)); // 5\n\n        // 异或交换两个数（不用临时变量）\n        int x = 3, y = 5;\n        x = x ^ y;\n        y = x ^ y;\n        x = x ^ y;\n        System.out.println("x=" + x + " y=" + y);  // x=5 y=3\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **整数除法截断**——`7 / 2` 是 `3` 不是 `3.5`。要得小数需 `7.0 / 2` 或 `(double)7 / 2`。\n' +
            '2. **短路 vs 非短路**——`&&` `||` 短路（左侧决定时不求值右侧），`&` `|` 非短路（总求值两侧）。通常用短路版本。\n' +
            '3. **== 比较引用 vs 值**——基本类型 `==` 比较值，引用类型 `==` 比较地址。字符串用 `.equals()` 比较。\n' +
            '4. **自增自减位置**——`++i` 先加后用（返回新值），`i++` 先用后加（返回旧值）。单独成语句时无差别。\n' +
            '5. **运算符优先级易错**——`a & b == c` 实际是 `a & (b == c)`（`==` 高于 `&`）。建议用括号。\n' +
            '6. **复合赋值自动转型**——`short s = 5; s += 1;` 合法（隐式强转），但 `s = s + 1;` 编译错误（`s+1` 是 int）。\n' +
            '7. **>> vs >>>**——`>>` 算术右移保留符号位（负数仍负），`>>>` 逻辑右移填 0（可能变正）。无 `<<<`。\n' +
            '8. **+ 号重载**——`+` 对数字是加法，对 String 是拼接。`"a" + 1 + 2` 得 `"a12"`，`"" + 1 + 2` 得 `"12"`。\n\n' +
            '## 实际应用\n\n' +
            '1. **权限标志位**：用位运算 `READ|WRITE|EXEC` 组合权限，`perm & READ` 检查权限。Linux 文件权限就是位标志。\n' +
            '2. **奇偶判断**：`n % 2 == 0` 判偶，或高效写法 `(n & 1) == 0`（位运算更快）。\n' +
            '3. **颜色操作**：RGB 颜色用 int 存储，`(color >> 16) & 0xFF` 取红色分量。\n' +
            '4. **加密哈希**：位运算（异或、移位）是加密算法的基础。AES、SHA 都大量使用位运算。\n' +
            '5. **数据压缩**：位运算把多个小值打包进一个 int，节省存储。如把两个 short 压进一个 int。\n\n' +
            '## 扩展知识\n\n' +
            '- **instanceof 运算符**：`obj instanceof String` 检查类型。Java 16+ 模式匹配 `if (obj instanceof String s)` 自动转型。\n' +
            '- **switch 表达式**：Java 14+ 的 switch 表达式可作运算符使用，`int n = switch(day) { case MON -> 1; ... }`。\n' +
            '- **位移与乘除**：`x << n` 等价 `x * 2^n`，`x >> n` 等价 `x / 2^n`。位运算更快但可读性差。\n' +
            '- **BigDecimal 运算**：`BigDecimal` 不支持运算符，用 `.add()` `.multiply()` 方法。这是 Java 运算符重载受限的体现。\n' +
            '- **运算符重载**：Java 不支持自定义运算符重载（不像 C++/Kotlin），只有 `+` 对 String 预定义。这是设计哲学选择。\n' +
            '- **Kotlin 运算符重载**：Kotlin 支持运算符函数 `operator fun plus()`，让 `a + b` 调用自定义逻辑。',
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
            '## 概念详解\n\n' +
            'Java 的输出除了 `println` 和 `print`，还有强大的 `printf` 方法，支持 C 语言风格的格式化字符串。' +
            '格式化输出让数据以整齐、易读的方式呈现，在生成报表、日志、对齐表格时必不可少。' +
            '`String.format()` 方法与 `printf` 使用相同语法，但返回字符串而非直接输出。\n\n' +
            '`Scanner` 类是 Java 中最常用的控制台输入工具，位于 `java.util` 包。它可以解析基本类型和字符串，' +
            '支持按空格、换行、自定义分隔符读取输入。理解 Scanner 对本地开发、面试手撕代码很重要。\n\n' +
            '格式化的核心是**格式说明符**（format specifier），以 `%` 开头，指定如何把参数转换为字符串。\n\n' +
            '## 语法说明\n\n' +
            '### printf 格式说明符\n\n' +
            '| 说明符 | 类型 | 示例 | 输出 |\n' +
            '|--------|------|------|------|\n' +
            '| `%d` | 整数 | `printf("%d", 42)` | `42` |\n' +
            '| `%f` | 浮点数 | `printf("%f", 3.14)` | `3.140000` |\n' +
            '| `%.2f` | 浮点（2 位小数） | `printf("%.2f", 3.14)` | `3.14` |\n' +
            '| `%s` | 字符串 | `printf("%s", "hi")` | `hi` |\n' +
            '| `%c` | 字符 | `printf("%c", \'A\')` | `A` |\n' +
            '| `%b` | 布尔 | `printf("%b", true)` | `true` |\n' +
            '| `%x` / `%o` | 十六/八进制 | `printf("%x", 255)` | `ff` |\n' +
            '| `%e` | 科学计数法 | `printf("%e", 12345.6)` | `1.234560e+04` |\n' +
            '| `%n` | 平台换行 | - | \\n 或 \\r\\n |\n' +
            '| `%%` | 百分号字面量 | `printf("100%%")` | `100%` |\n\n' +
            '### 格式化标志与宽度\n\n' +
            '| 标志 | 说明 | 示例 | 输出 |\n' +
            '|------|------|------|------|\n' +
            '`-` | 左对齐 | `%-10d` | 左对齐宽 10 |\n' +
            '`0` | 补零 | `%05d` | `00042` |\n' +
            '`,` | 千位分隔符 | `%,d` | `1,000,000` |\n' +
            '`+` | 显示正号 | `%+d` | `+42` |\n' +
            '`(` | 负数括号 | `%(d` | `(42)` |\n' +
            '宽度 | 如 `%10d` | 右对齐宽 10 |\n' +
            '精度 | 如 `%.3f` | 3 位小数 |\n\n' +
            '### Scanner 常用方法\n\n' +
            '| 方法 | 说明 |\n' +
            '|------|------|\n' +
            '| `nextInt()` | 读取 int |\n' +
            '| `nextLong()` | 读取 long |\n' +
            '| `nextDouble()` | 读取 double |\n' +
            '| `nextBoolean()` | 读取 boolean |\n' +
            '| `next()` | 读取一个单词（空格分隔） |\n' +
            '| `nextLine()` | 读取整行 |\n' +
            '| `hasNextInt()` | 判断是否有下一个 int |\n' +
            '| `useDelimiter(d)` | 设置分隔符 |\n\n' +
            '### String.format() 用法\n\n' +
            '```java\nString s = String.format("姓名:%s, 年龄:%d", "张三", 25);\n// s = "姓名:张三, 年龄:25"\n\n// 格式化金额\nString money = String.format("¥%,.2f", 1234567.891);\n// money = "¥1,234,567.89"\n```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：printf 格式化输出**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String name = "张三";\n        int age = 25;\n        double salary = 15000.5678;\n\n        System.out.printf("姓名:%s, 年龄:%d%n", name, age);\n        System.out.printf("薪资:%.2f%n", salary);       // 保留2位小数\n        System.out.printf("薪资:%,.2f%n", salary);      // 千位分隔符\n        System.out.printf("右对齐:%10d%n", age);          // 宽度10\n        System.out.printf("左对齐:%-10d结束%n", age);     // 左对齐\n        System.out.printf("补零:%05d%n", 42);             // 00042\n        System.out.printf("十六进制:%x%n", 255);          // ff\n    }\n}\n```\n\n' +
            '**示例 2：String.format 拼接**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String report = String.format(\n            "成绩单%n姓名:%-6s 数学:%3d 语文:%3d 平均:%.1f%n",\n            "张三", 95, 88, 91.5\n        );\n        System.out.println(report);\n\n        // 生成表格分隔线\n        String line = String.format("%s%n", "-".repeat(20));\n        System.out.println(line);\n    }\n}\n```\n\n' +
            '**示例 3：Scanner 读取输入**\n\n```java\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("输入姓名: ");\n        String name = sc.next();\n        System.out.print("输入年龄: ");\n        int age = sc.nextInt();\n        System.out.print("输入身高: ");\n        double height = sc.nextDouble();\n\n        System.out.printf("你好 %s，%d 岁，身高 %.1fcm%n", name, age, height);\n    }\n}\n```\n\n' +
            '**示例 4：多行输入处理**\n\n```java\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 读取 N 行输入\n        int n = sc.nextInt();\n        sc.nextLine();  // 消耗换行符\n        int sum = 0;\n        for (int i = 0; i < n; i++) {\n            String line = sc.nextLine();\n            sum += Integer.parseInt(line);\n        }\n        System.out.printf("总和: %d%n", sum);\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **%n vs \\n**——`%n` 是平台无关换行（Windows 是 \\r\\n，Linux 是 \\n），`\\n` 总是 \\n。跨平台用 `%n`。\n' +
            '2. **printf 不自动换行**——`printf` 不会自动加换行，需手动 `%n` 或 `\\n`。`println` 才自动换行。\n' +
            '3. **Scanner 的 next vs nextLine**——`next()` 读到空格停，`nextLine()` 读整行。混用易出错：`nextInt()` 后 `nextLine()` 会读到空行。\n' +
            '4. **nextInt 后 nextLine 陷阱**——`nextInt()` 不消耗换行符，后续 `nextLine()` 会读到空字符串。解决：加一个 `nextLine()` 消耗换行。\n' +
            '5. **Scanner 性能**——Scanner 较慢，大量输入用 `BufferedReader`。算法竞赛常用 `BufferedReader + StringTokenizer`。\n' +
            '6. **格式化参数类型匹配**——`%d` 传 double 会异常，`%f` 传 int 也会异常。类型必须匹配。\n' +
            '7. **String.format vs +**——简单拼接用 `+`，复杂格式用 `String.format`。可读性权衡。\n' +
            '8. **Scanner 需关闭**——`Scanner` 实现了 `AutoCloseable`，用完应 `sc.close()` 或 try-with-resources。\n\n' +
            '## 实际应用\n\n' +
            '1. **日志输出**：`System.out.printf("[%s] %s: %s%n", timestamp, level, message)` 格式化日志，SLF4J 底层用类似格式化。\n' +
            '2. **报表生成**：财务报表用 `%,.2f` 格式化金额，对齐表格用宽度 `%-20s`。\n' +
            '3. **命令行交互**：CLI 工具用 Scanner 读取用户输入，如配置向导、交互式菜单。\n' +
            '4. **算法竞赛**：读取多组测试数据，`Scanner` 或 `BufferedReader` 是标配。注意性能用 BufferedReader。\n' +
            '5. **国际化**：`String.format` 配合 `Locale` 可本地化数字、日期格式（如 `String.format(Locale.US, "%,.2f", 1234.5)`）。\n\n' +
            '## 扩展知识\n\n' +
            '- **MessageFormat**：`java.text.MessageFormat` 支持占位符 `{0} {1}`，比 printf 更适合国际化。\n' +
            '- **DecimalFormat**：`java.text.DecimalFormat` 专门格式化数字，支持自定义模式如 `#,##0.00`。\n' +
            '- **System.out 性能**：`System.out` 是同步的且每次 flush，大量输出用 `PrintWriter` 包装 `BufferedOutputStream` 提速。\n' +
            '- **Console 类**：`System.console()` 提供密码读取（`readPassword()` 不回显），但 IDE 中可能返回 null。\n' +
            '- **Java 15+ 文本块**：`"""` 多行字符串，配合 `String.format` 生成模板更方便。\n' +
            '- **Record + format**：Java 16+ 的 record 自动生成 toString，但自定义格式仍需 String.format。',
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
            '## 概念详解\n\n' +
            '条件语句（conditional statements）是程序逻辑的基础，让程序根据不同条件执行不同代码。' +
            'Java 的 `if` 语句有三种形式：`if`、`if-else`、`if-else if-else`。条件表达式必须返回 boolean 值——' +
            '这与 C/C++ 不同，Java 不允许将非零整数当作 true（如 `if (1)` 是编译错误）。\n\n' +
            '条件语句的关键原则：\n' +
            '- **条件必须是 boolean**——不能用 `if (x)` 代替 `if (x != 0)`\n' +
            '- **始终用花括号**——即使单条语句也用 `{}`，避免维护时出错\n' +
            '- **卫语句优先**——用提前 return 减少嵌套，提升可读性\n' +
            '- **条件顺序重要**——if-else if 链从上到下匹配，第一个满足的执行后跳出\n\n' +
            '## 语法说明\n\n' +
            '### if 语句三种形式\n\n' +
            '```java\n// 形式 1：if\nif (condition) {\n    // 条件为 true 时执行\n}\n\n// 形式 2：if-else\nif (condition) {\n    // true\n} else {\n    // false\n}\n\n// 形式 3：if-else if-else\nif (cond1) {\n    // ...\n} else if (cond2) {\n    // ...\n} else if (cond3) {\n    // ...\n} else {\n    // 所有条件都不满足\n}\n```\n\n' +
            '### 条件表达式\n\n' +
            '| 写法 | 合法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| `if (x > 0)` | ✓ | 关系运算返回 boolean |\n' +
            '| `if (x != 0)` | ✓ | 显式比较 |\n' +
            '| `if (x)` | ✗ | Java 不允许 int 当 boolean |\n' +
            '| `if (str != null && str.length() > 0)` | ✓ | 短路避免 NPE |\n' +
            '| `if (obj instanceof String)` | ✓ | 类型检查 |\n\n' +
            '### 卫语句（Guard Clause）模式\n\n' +
            '```java\n// 反模式：深嵌套\npublic String check(int score) {\n    if (score >= 0) {\n        if (score < 60) {\n            return "不及格";\n        } else {\n            return "及格";\n        }\n    }\n    return "无效";\n}\n\n// 推荐：卫语句\npublic String check(int score) {\n    if (score < 0) return "无效";\n    if (score < 60) return "不及格";\n    return "及格";\n}\n```\n\n' +
            '### 三元运算符替代简单 if-else\n\n' +
            '```java\n// if-else\nString result;\nif (score >= 60) {\n    result = "及格";\n} else {\n    result = "不及格";\n}\n\n// 三元运算符（等价且更简洁）\nString result = score >= 60 ? "及格" : "不及格";\n```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：成绩等级判断**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int score = 85;\n        if (score >= 90) {\n            System.out.println("优秀");\n        } else if (score >= 80) {\n            System.out.println("良好");\n        } else if (score >= 60) {\n            System.out.println("及格");\n        } else {\n            System.out.println("不及格");\n        }\n    }\n}\n```\n\n' +
            '**示例 2：闰年判断（嵌套条件）**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int year = 2024;\n        boolean isLeap;\n        if (year % 4 == 0) {\n            if (year % 100 == 0) {\n                isLeap = year % 400 == 0;\n            } else {\n                isLeap = true;\n            }\n        } else {\n            isLeap = false;\n        }\n        System.out.println(year + " 是闰年? " + isLeap);\n    }\n}\n```\n\n' +
            '**示例 3：卫语句重构**\n\n```java\npublic class Main {\n    // 卫语句：提前返回减少嵌套\n    static String classify(int score) {\n        if (score < 0 || score > 100) return "无效分数";\n        if (score >= 90) return "优秀";\n        if (score >= 80) return "良好";\n        if (score >= 60) return "及格";\n        return "不及格";\n    }\n\n    public static void main(String[] args) {\n        System.out.println(classify(85));\n        System.out.println(classify(-5));\n        System.out.println(classify(55));\n    }\n}\n```\n\n' +
            '**示例 4：复合条件与短路**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String name = "张三";\n        int age = 25;\n\n        // 复合条件\n        if (name != null && !name.isEmpty() && age >= 18) {\n            System.out.println(name + " 是成年人");\n        }\n\n        // 范围判断\n        if (age >= 0 && age <= 12) {\n            System.out.println("儿童");\n        } else if (age >= 13 && age <= 17) {\n            System.out.println("青少年");\n        } else if (age >= 18) {\n            System.out.println("成人");\n        }\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **条件必须是 boolean**——`if (x)` 在 Java 中非法（除非 x 是 boolean）。这与 C/C++ 不同。\n' +
            '2. **始终用花括号**——即使单条语句也用 `{}`。阿里巴巴规范明确要求，避免维护时出错（如 Apple goto fail 漏洞）。\n' +
            '3. **避免深嵌套**——超过 3 层嵌套就应重构（卫语句、策略模式、提前 return）。\n' +
            '4. **注意条件顺序**——if-else if 链从上到下匹配，范围判断要从大到小或从小到大，避免逻辑错误。\n' +
            '5. **== 比较字符串陷阱**——`if (str == "yes")` 比较地址不是值，用 `if ("yes".equals(str))`。\n' +
            '6. **空指针防护**——`if (obj != null && obj.method())`，利用短路避免 NPE。或 `"literal".equals(maybeNull)`。\n' +
            '7. **else 可省略**——不写 else 时，if 条件不满足继续执行后续代码。卫语句模式常用此特性。\n' +
            '8. **赋值 vs 比较**——`if (a = b)` 在 Java 中只有 a 是 boolean 才编译，但仍是 bug。用 `if (a == b)`。\n\n' +
            '## 实际应用\n\n' +
            '1. **参数校验**：API 入口用卫语句校验参数 `if (id <= 0) throw new IllegalArgumentException()`，提前失败。\n' +
            '2. **权限控制**：`if (user.hasPermission("admin")) { ... }` 控制访问。Spring Security 底层用条件判断。\n' +
            '3. **业务规则**：订单状态流转用 if-else if 链判断，如 `if (status == PENDING) { ... }`。\n' +
            '4. **空值处理**：`if (obj != null)` 是最常见的防御性编程。Java 8+ 用 Optional 更优雅。\n' +
            '5. **特性开关**：`if (featureEnabled)` 控制功能启停，配合配置中心实现动态开关。\n\n' +
            '## 扩展知识\n\n' +
            '- **switch 表达式**：多分支用 switch 比-if-else if 链更清晰。Java 14+ switch 表达式支持返回值。\n' +
            '- **Optional 替代 null 检查**：`Optional.ofNullable(x).ifPresent(...)` 避免 if-null 嵌套。\n' +
            '- **策略模式**：复杂的 if-else if 链可用策略模式重构，用 Map<String, Strategy> 分派。\n' +
            '- **模式匹配（Java 21+）**：`if (obj instanceof String s && s.length() > 0)` 自动转型，减少显式强转。\n' +
            '- **断言 assert**：`assert x > 0` 用于不变量检查，默认不启用（需 -ea）。生产代码用显式 if + throw。\n' +
            '- **三元运算符嵌套**——`a ? b : c ? d : e` 可读性差，超过两层用 if-else 或 switch。',
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
            '## 概念详解\n\n' +
            '`switch` 语句根据变量的值跳转到匹配的 `case` 分支，比冗长的 if-else if 链更清晰。' +
            '它适合多值匹配场景，如星期几、月份、HTTP 状态码等。Java 的 switch 支持的匹配类型随版本演进：' +
            '早期支持 `byte`、`short`、`int`、`char`；Java 7+ 支持 `String`；Java 14+ 支持 switch 表达式。\n\n' +
            'switch 的关键概念：\n' +
            '- **穿透（fall-through）**：忘记 `break` 会继续执行后续 case，常是 bug 来源\n' +
            '- **default 分支**：处理所有未匹配情况，类似 else，建议始终保留\n' +
            '- **switch 表达式**：Java 14+ 用箭头 `case X ->` 自动 break 且可返回值\n' +
            '- **支持的类型**：int 系列、String、enum（Java 5+）\n\n' +
            '## 语法说明\n\n' +
            '### 传统 switch 语句\n\n' +
            '```java\nswitch (变量) {\n    case 值1:\n        // 代码\n        break;  // 必须手动 break\n    case 值2:\n    case 值3:  // 多个 case 共享代码（穿透利用）\n        // 代码\n        break;\n    default:\n        // 默认分支\n        break;\n}\n```\n\n' +
            '### switch 表达式（Java 14+，正式版 17）\n\n' +
            '```java\n// 箭头语法：自动 break，无穿透\nString dayName = switch (day) {\n    case 1 -> "星期一";\n    case 2 -> "星期二";\n    case 3, 4, 5 -> "工作日";  // 多值合并\n    case 6, 7 -> "周末";\n    default -> "无效";\n};\n\n// 块语法：需 yield 返回值\nint len = switch (s) {\n    case "short" -> 5;\n    case "long" -> {\n        System.out.println("长字符串");\n        yield 4;\n    }\n    default -> 0;\n};\n```\n\n' +
            '### switch 支持的类型\n\n' +
            '| 类型 | 支持版本 | 示例 |\n' +
            '|------|----------|------|\n' +
            '| `byte`/`short`/`int` | 所有 | `switch (n)` |\n' +
            '| `char` | 所有 | `switch (c)` |\n' +
            '| `enum` | Java 5+ | `switch (Color.RED)` |\n' +
            '| `String` | Java 7+ | `switch ("MON")` |\n' +
            '| `var`（推断上述类型） | Java 10+ | `var x = ...; switch (x)` |\n\n' +
            '### 传统 switch vs switch 表达式对比\n\n' +
            '| 特性 | 传统 switch | switch 表达式 |\n' +
            '|------|-------------|---------------|\n' +
            '| 语法 | `case X:` + break | `case X ->` 自动 break |\n' +
            '| 穿透 | 有（需手动 break） | 无（箭头自动终止） |\n' +
            '| 返回值 | 不能 | 能（赋值给变量） |\n' +
            '| 多值 | `case 1: case 2:` | `case 1, 2 ->` |\n' +
            '| default | 可选 | 必须穷尽（枚举全列或 default） |\n' +
            '| 版本 | 所有 | Java 14+（正式 17） |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：switch 基础用法**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int day = 3;\n        switch (day) {\n            case 1: System.out.println("星期一"); break;\n            case 2: System.out.println("星期二"); break;\n            case 3: System.out.println("星期三"); break;\n            case 4: System.out.println("星期四"); break;\n            case 5: System.out.println("星期五"); break;\n            case 6:\n            case 7: System.out.println("周末"); break;\n            default: System.out.println("无效");\n        }\n    }\n}\n```\n\n' +
            '**示例 2：String 匹配**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String command = "start";\n        switch (command) {\n            case "start":\n                System.out.println("启动服务");\n                break;\n            case "stop":\n                System.out.println("停止服务");\n                break;\n            case "status":\n                System.out.println("查看状态");\n                break;\n            default:\n                System.out.println("未知命令: " + command);\n        }\n    }\n}\n```\n\n' +
            '**示例 3：switch 表达式（现代写法）**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int day = 3;\n        String type = switch (day) {\n            case 1, 2, 3, 4, 5 -> "工作日";\n            case 6, 7 -> "周末";\n            default -> "无效";\n        };\n        System.out.println(type);\n\n        // 配合 yield\n        int score = 85;\n        String grade = switch (score / 10) {\n            case 10, 9 -> "优秀";\n            case 8 -> "良好";\n            case 7, 6 -> "及格";\n            default -> {\n                System.out.println("需努力");\n                yield "不及格";\n            }\n        };\n        System.out.println("等级: " + grade);\n    }\n}\n```\n\n' +
            '**示例 4：枚举 switch**\n\n```java\nenum Season { SPRING, SUMMER, AUTUMN, WINTER }\n\npublic class Main {\n    public static void main(String[] args) {\n        Season s = Season.SUMMER;\n        String desc = switch (s) {\n            case SPRING -> "万物复苏";\n            case SUMMER -> "烈日炎炎";\n            case AUTUMN -> "秋高气爽";\n            case WINTER -> "寒风刺骨";\n            // 枚举全列后无需 default\n        };\n        System.out.println(s + ": " + desc);\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **忘记 break 导致穿透**——传统 switch 忘记 break 会继续执行后续 case，是经典 bug。switch 表达式（箭头）自动避免。\n' +
            '2. **case 值必须是常量**——`case x:` 中 x 必须是编译期常量（字面量、final 变量、enum 值）。不能用变量。\n' +
            '3. **default 建议始终保留**——即使你认为穷尽了所有情况，default 能处理意外输入，防御性编程。\n' +
            '4. **switch 表达式必须穷尽**——枚举 switch 表达式必须列出所有枚举值或 default，否则编译错误。这是安全改进。\n' +
            '5. **String switch 用 hashCode**——底层用字符串的 hashCode + equals 比较，null 会抛 NPE。\n' +
            '6. **穿透可利用**——多个 case 共享代码时刻意省略 break，如 `case 1: case 2: case 3: doSomething();`\n' +
            '7. **switch vs if-else if**——多值离散匹配用 switch 更清晰；范围判断、复杂条件用 if-else if。\n' +
            '8. **yield 关键字**——switch 表达式中块语句用 `yield value` 返回值，类似 return 但用于表达式。\n\n' +
            '## 实际应用\n\n' +
            '1. **状态机**：订单状态流转 `switch (status) { case PENDING -> ...; case PAID -> ... }`，比 if-else if 链清晰。\n' +
            '2. **HTTP 路由**：根据请求方法分派 `switch (method) { case GET -> ...; case POST -> ... }`。\n' +
            '3. **命令解析**：CLI 工具 `switch (command) { case "help" -> ...; case "run" -> ... }`。\n' +
            '4. **枚举策略**：配合枚举实现策略模式，每个枚举值在 switch 中对应不同行为。\n' +
            '5. **API 响应处理**：根据状态码 `switch (statusCode) { case 200 -> success; case 404 -> notFound; }`。\n\n' +
            '## 扩展知识\n\n' +
            '- **模式匹配 switch（Java 21+）**：`switch (obj) { case String s -> ...; case Integer i -> ... }` 支持类型模式。\n' +
            '- **密封类 + switch**：Java 17+ 密封类配合 switch 表达式实现穷尽匹配，编译器保证覆盖所有子类。\n' +
            '- **switch 性能**：switch 编译成 tableswitch（连续值）或 lookupswitch（稀疏值），O(1) 或 O(log n)，比 if-else 链快。\n' +
            '- **String switch 原理**：先比较 hashCode 快速过滤，再用 equals 精确匹配。两个不同 String 可能 hashCode 相同。\n' +
            '- **switch in Kotlin**：Kotlin 的 `when` 表达式更强大，支持范围、条件、类型检查，无穿透。\n' +
            '- **switch in Java 21**：模式匹配 + 密封类让 switch 成为强大的代数数据处理工具，类似 Rust/Scala 的 match。',
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
            '## 概念详解\n\n' +
            '`for` 循环是 Java 中最常用的循环结构，它将"初始化、条件判断、状态更新"三要素集中在同一行，' +
            '使循环结构一目了然。其语法为 `for (初始化; 条件; 更新) { 循环体 }`。' +
            '当循环次数已知或可预估时，for 循环是首选；当循环次数不确定时，则更适合用 while 循环。\n\n' +
            'for 循环三个部分都是可选的，但两个分号不能省略。`for(;;)` 是无限循环，等价于 `while(true)`。' +
            '循环变量通常用 i, j, k 命名，这是编程界沿用 FORTRAN 时代的传统约定，读者一看到这些名字就明白是循环计数器。\n\n' +
            'Java 5 引入了增强 for 循环（for-each），用于遍历数组和集合：`for (元素类型 变量 : 集合) { }`。' +
            '它隐藏了索引管理，代码更简洁，可读性更高，但不适合需要索引或修改元素本身的场景。' +
            '增强 for 循环是语法糖——底层对数组使用索引遍历，对集合使用迭代器（Iterator）。\n\n' +
            '嵌套循环常用于处理二维数据（矩阵、棋盘、图像像素）和生成组合。' +
            '经典的九九乘法表就是两层嵌套循环的典型应用。' +
            '注意内层循环的执行次数等于外层循环次数乘以内层循环次数，' +
            '嵌套过深会导致性能问题（O(n²)甚至更高复杂度），必要时可通过算法优化或拆分来降低复杂度。\n\n' +
            '## 语法说明\n\n' +
            '### 标准 for 循环\n\n' +
            '```java\nfor (初始化; 条件; 更新) {\n    // 循环体\n}\n// 三个部分都可省略，分号不可省\nfor (;;) { /* 无限循环 */ }\n```\n\n' +
            '### 增强 for 循环（for-each）\n\n' +
            '```java\n// 遍历数组或任何实现了 Iterable 的集合\nfor (元素类型 变量 : 数组或集合) {\n    // 每次循环变量自动接收一个元素\n}\n```\n\n' +
            '### for 循环三要素说明\n\n' +
            '| 部分 | 作用 | 执行时机 | 是否可省略 |\n' +
            '|------|------|----------|------------|\n' +
            '| 初始化 | 声明并赋初值 | 循环开始前执行一次 | 可省略 |\n' +
            '| 条件 | 布尔表达式，true 才进入循环体 | 每次迭代前判断 | 可省略（默认 true） |\n' +
            '| 更新 | 通常是 i++ / i-- | 每次循环体执行后 | 可省略 |\n\n' +
            '### for vs while vs for-each 对比\n\n' +
            '| 特性 | for | while | for-each |\n' +
            '|------|-----|-------|----------|\n' +
            '| 适用场景 | 次数已知 | 次数未知 | 只读遍历 |\n' +
            '| 索引访问 | 支持 | 支持 | 不支持 |\n' +
            '| 修改元素 | 支持 | 支持 | 不支持（基本类型） |\n' +
            '| 语法简洁度 | 中 | 中 | 高 |\n' +
            '| 可遍历集合 | 数组/Iterable | 任意 | 数组/Iterable |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：1 到 100 求和**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // 三要素：int i=1 初始化、i<=100 条件、i++ 更新\n        for (int i = 1; i <= 100; i++) {\n            sum += i;\n        }\n        System.out.println("1到100的和: " + sum);  // 5050\n    }\n}\n```\n\n' +
            '**示例 2：九九乘法表（嵌套循环）**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 外层控制行，内层控制列\n        for (int i = 1; i <= 9; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.printf("%d*%d=%-4d", j, i, j * i);\n            }\n            System.out.println();  // 每行结束换行\n        }\n    }\n}\n```\n\n' +
            '**示例 3：增强 for 循环遍历数组与集合**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[] nums = {10, 20, 30, 40, 50};\n        int sum = 0;\n        // for-each 遍历数组：底层是索引遍历\n        for (int num : nums) {\n            sum += num;\n        }\n        System.out.println("总和: " + sum);\n\n        String[] fruits = {"苹果", "香蕉", "橙子"};\n        for (String fruit : fruits) {\n            System.out.println("水果: " + fruit);\n        }\n    }\n}\n```\n\n' +
            '**示例 4：倒序与步进**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 倒序输出\n        for (int i = 10; i >= 1; i--) {\n            System.out.print(i + " ");\n        }\n        System.out.println();\n        // 步进为 2\n        for (int i = 0; i <= 20; i += 2) {\n            System.out.print(i + " ");\n        }\n        System.out.println();\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **循环变量作用域**——`for (int i...)` 中声明的 i 仅在循环内有效，循环外不可访问；若需循环后使用 i，要在循环外声明。\n' +
            '2. **避免在循环体内修改循环变量**——在循环体里手动改 i 会破坏循环逻辑，是常见 bug 来源。\n' +
            '3. **for-each 不能修改基本类型元素**——`for (int n : arr) n = 0;` 不会改变数组，因为 n 是副本。引用类型可修改对象内部状态。\n' +
            '4. **for-each 不能获取索引**——需要索引时改用标准 for；需要并发修改检测时 for-each 集合会抛 ConcurrentModificationException。\n' +
            '5. **嵌套循环复杂度**——两层嵌套是 O(n²)，三层是 O(n³)，数据量大时严重影响性能，应考虑用 Map/Set 优化查找。\n' +
            '6. **浮点数作循环变量**——不要用 float/double 作循环变量，浮点累积误差可能导致少循环或多循环一次，用 int/long。\n' +
            '7. **空语句陷阱**——`for (...) ;` 末尾的分号会被当作空循环体，导致循环体没执行，新手易犯。\n\n' +
            '## 实际应用\n\n' +
            '1. **批量数据处理**：遍历订单列表计算总金额、遍历用户列表发送通知、遍历商品列表筛选符合条件的商品。\n' +
            '2. **算法实现**：冒泡排序、选择排序、矩阵转置、查找重复元素等大量算法的核心就是嵌套 for 循环。\n' +
            '3. **分页查询**：`for (int page = 1; page <= totalPages; page++)` 逐页拉取数据，常见于数据迁移和导出。\n' +
            '4. **批处理任务**：把大任务切成 N 块，for 循环逐块处理，配合线程池并行加速。\n' +
            '5. **生成测试数据**：`for (int i = 0; i < 10000; i++)` 批量生成测试用户、订单等数据。\n\n' +
            '## 扩展知识\n\n' +
            '- **IntStream.range**：Java 8+ 可用 `IntStream.range(0, 10).forEach(i -> ...)` 替代 for 循环，更函数式，但性能略低。\n' +
            '- **标签 break/continue**：`outer: for(...) for(...) break outer;` 可跳出多层循环，但代码可读性差，慎用。\n' +
            '- **循环展开**：手动把多次迭代合并到一次循环体内（`i += 4` 处理 4 个元素），减少分支预测开销，JIT 也会自动做。\n' +
            '- **foreach 与 Iterator**：for-each 遍历集合时编译器自动生成 Iterator 调用，等价于 `while(iter.hasNext()) iter.next()`。\n' +
            '- **并行流替代嵌套循环**：`list.parallelStream().forEach(...)` 利用多核并行处理，适合 CPU 密集型遍历。\n' +
            '- **性能建议**：把循环不变的计算（如 `list.size()`、`arr.length`）提到循环外，减少重复调用（JIT 通常会优化，但显式更稳妥）。',
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
            '## 概念详解\n\n' +
            '`while` 循环在条件为 true 时重复执行代码块，适合循环次数不确定的场景。' +
            '它的特点是"先判断后执行"——若初始条件就为 false，循环体一次都不会执行。' +
            '`do-while` 循环则"先执行一次再判断条件"，保证循环体至少执行一次，' +
            '适合需要先执行动作再决定是否继续的场景，如菜单选择、输入校验。当循环次数确定时优先用 for，不确定时用 while。\n\n' +
            '`break` 立即跳出当前循环，`continue` 跳过本次循环剩余代码进入下一次迭代。' +
            '在嵌套循环中，break 和 continue 默认只作用于最内层循环。' +
            'Java 支持带标签的 break（`break label;`）和带标签的 continue（`continue label;`），可以跳出或跳过多层循环，但使用较少，过多使用会降低可读性。\n\n' +
            '死循环 `while(true)` 或 `for(;;)` 在实际开发中很常见——' +
            '通常配合 break 在满足条件时退出，如事件循环、消息队列消费、游戏主循环、服务器 accept 连接。' +
            '务必确保循环体内有能改变循环条件的逻辑或 break 退出点，否则会造成真正的死循环导致程序卡死。' +
            '这是新手最容易犯的错误之一。\n\n' +
            '## 语法说明\n\n' +
            '### while 循环\n\n' +
            '```java\nwhile (条件) {\n    // 循环体（条件为 false 时不执行）\n}\n```\n\n' +
            '### do-while 循环\n\n' +
            '```java\ndo {\n    // 循环体（至少执行一次）\n} while (条件);  // 注意末尾分号\n```\n\n' +
            '### break 与 continue\n\n' +
            '```java\nwhile (条件) {\n    if (退出条件) break;       // 跳出整个循环\n    if (跳过条件) continue;    // 跳过本次，进入下一次\n    // 正常代码\n}\n\n// 带标签 break：跳出多层循环\nouter:\nfor (int i = 0; i < n; i++) {\n    for (int j = 0; j < m; j++) {\n        if (found) break outer;  // 直接跳出外层\n    }\n}\n```\n\n' +
            '### while / do-while / for 对比\n\n' +
            '| 特性 | while | do-while | for |\n' +
            '|------|-------|----------|-----|\n' +
            '| 判断时机 | 先判断后执行 | 先执行后判断 | 先判断后执行 |\n' +
            '| 最少执行次数 | 0 次 | 1 次 | 0 次 |\n' +
            '| 适用场景 | 次数未知 | 至少执行一次 | 次数已知 |\n' +
            '| 末尾分号 | 不需要 | 需要 | 不需要 |\n\n' +
            '### break / continue 语义\n\n' +
            '| 关键字 | 作用 | 作用范围 | 带标签版本 |\n' +
            '|--------|------|----------|-----------|\n' +
            '| `break` | 跳出循环 | 当前循环 | 跳出标签所在循环 |\n' +
            '| `continue` | 跳过本次迭代 | 当前循环 | 跳到标签所在循环的下一次 |\n' +
            '| `return` | 退出整个方法 | 整个方法 | 无 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：while 求阶乘**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int n = 5;\n        long result = 1;\n        int i = 1;\n        while (i <= n) {\n            result *= i;\n            i++;  // 必须更新，否则死循环\n        }\n        System.out.println(n + "! = " + result);  // 120\n    }\n}\n```\n\n' +
            '**示例 2：break 与 continue**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 找到第一个能被7整除的数（break）\n        for (int i = 1; i <= 100; i++) {\n            if (i % 7 == 0) {\n                System.out.println("第一个7的倍数: " + i);\n                break;\n            }\n        }\n        // 跳过所有3的倍数（continue）\n        System.out.print("1-10中非3的倍数: ");\n        for (int i = 1; i <= 10; i++) {\n            if (i % 3 == 0) continue;  // 跳过3的倍数\n            System.out.print(i + " ");\n        }\n        System.out.println();\n    }\n}\n```\n\n' +
            '**示例 3：数字位数计算与反转**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int num = 123456;\n        int temp = num;\n        int count = 0;\n        while (temp > 0) {\n            temp /= 10;\n            count++;\n        }\n        System.out.println(num + " 有 " + count + " 位");\n        // 反转数字\n        int n = 12345;\n        int reversed = 0;\n        while (n > 0) {\n            reversed = reversed * 10 + n % 10;\n            n /= 10;\n        }\n        System.out.println("反转后: " + reversed);\n    }\n}\n```\n\n' +
            '**示例 4：do-while 菜单与重试**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 模拟重试 3 次\n        int retries = 0;\n        boolean success = false;\n        do {\n            retries++;\n            // 模拟第3次成功\n            success = (retries == 3);\n            System.out.println("第 " + retries + " 次尝试: " + (success ? "成功" : "失败"));\n        } while (!success && retries < 5);\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **死循环陷阱**——while 循环体必须包含能改变条件的逻辑，否则 `while(true)` 永不退出，CPU 占满。\n' +
            '2. **do-while 末尾分号**——`} while (条件);` 末尾的分号不能漏，否则编译错误。\n' +
            '3. **break 只跳一层**——嵌套循环中 break 只跳出最内层；要跳多层用带标签 break，但优先考虑重构为方法 + return。\n' +
            '4. **continue 在 while 中要小心**——`continue` 前必须更新循环变量，否则可能死循环（for 循环的 i++ 仍会执行，while 不会）。\n' +
            '5. **while(true) 要有明确退出点**——生产代码中 `while(true)` 必须配合 break/return，并考虑超时和优雅退出。\n' +
            '6. **整数反转溢出**——反转数字可能超出 int 范围（如 1000000009 反转后溢出），生产代码应检查或用 long/BigInteger。\n' +
            '7. **避免在循环里做耗时阻塞**——while 轮询会空耗 CPU，应配合 sleep 或使用阻塞队列/事件机制。\n\n' +
            '## 实际应用\n\n' +
            '1. **消息队列消费者**：`while(running)` 持续轮询消息，收到退出信号时 break，是 Kafka/RabbitMQ 消费者的典型模式。\n' +
            '2. **重试逻辑**：while 循环重试网络请求直到成功或达到最大重试次数，配合指数退避（exponential backoff）。\n' +
            '3. **游戏主循环**：`while(gameRunning)` 持续处理输入、更新状态、渲染画面，每帧一次。\n' +
            '4. **服务器 accept 循环**：`while(true) { Socket s = server.accept(); handle(s); }` 持续接收客户端连接。\n' +
            '5. **算法题**：数字反转、位数统计、二进制位运算、链表遍历等场景 while 是主力。\n\n' +
            '## 扩展知识\n\n' +
            '- **带标签 continue**：`continue outer;` 跳到外层循环的下一次迭代，类似 goto，复杂场景下偶尔有用但不推荐常用。\n' +
            '- **break 与 return 的选择**——能用 return 退出方法替代 break 多层循环时，优先 return，代码更清晰。\n' +
            '- **轮询 vs 阻塞**——`while + sleep` 轮询浪费 CPU，生产环境用 BlockingQueue.take() 或 Lock.Condition.await() 阻塞等待。\n' +
            '- **do-while 的稀有性**——实际开发中 do-while 较少使用，主要场景是"至少执行一次"的菜单、输入校验、资源清理。\n' +
            '- **虚拟线程影响**——Java 21 虚拟线程让阻塞式 while 循环更廉价，可大量使用阻塞等待而非回调。\n' +
            '- **for 与 while 互转**——任何 for 都能改写成 while，反之亦然；选择依据是可读性和"次数是否已知"。',
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
            '## 概念详解\n\n' +
            '方法（Method）是组织代码的基本单元，将一段逻辑封装为可复用的代码块。' +
            'Java 方法定义包含：修饰符、返回类型、方法名、参数列表、方法体。' +
            '例如 `public static int add(int a, int b) { return a + b; }`。' +
            '`return` 返回结果并结束方法；`void` 方法不需要 return 语句（但可用 `return;` 提前退出）。\n\n' +
            '方法命名遵循小驼峰命名法（camelCase），如 `calculateSum`、`isValid`、`getUserById`。' +
            '好的方法名应该能自解释——让读者一看名字就知道方法做什么。' +
            '方法应该遵循单一职责原则（SRP），一个方法只做一件事。' +
            '过长的方法（超过 50 行）应该拆分为多个小方法，便于测试和复用。\n\n' +
            '方法调用时，参数按值传递。对于基本类型，传递的是值的副本；' +
            '对于引用类型（对象、数组），传递的是引用的副本，' +
            '所以方法内可以修改对象内部状态，但不能改变引用本身指向的对象。' +
            '理解"值传递"的本质是 Java 程序员必须掌握的知识点，也是面试高频题。\n\n' +
            '## 语法说明\n\n' +
            '### 方法定义语法\n\n' +
            '```java\n[修饰符] 返回类型 方法名([参数列表]) [throws 异常] {\n    // 方法体\n    return 返回值;  // 非 void 方法必须 return\n}\n// 示例\npublic static int add(int a, int b) {\n    return a + b;\n}\n```\n\n' +
            '### 方法签名\n\n' +
            '方法签名 = 方法名 + 参数列表。返回类型和修饰符不属于签名。重载依据签名区分。\n\n' +
            '### 方法各部分说明\n\n' +
            '| 部分 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| 修饰符 | 访问控制等 | `public`/`private`/`protected`/`static`/`final` |\n' +
            '| 返回类型 | 返回值类型 | `int`/`String`/`void`/自定义类 |\n' +
            '| 方法名 | camelCase | `calculateSum` |\n' +
            '| 参数列表 | 形参 | `(int a, int b)` |\n' +
            '| 方法体 | 具体逻辑 | `{ return a + b; }` |\n' +
            '| throws | 声明异常 | `throws IOException` |\n\n' +
            '### 值传递机制\n\n' +
            '| 参数类型 | 传递内容 | 方法内修改影响原变量? |\n' +
            '|----------|----------|------------------------|\n' +
            '| 基本类型 | 值的副本 | 否 |\n' +
            '| 引用类型 | 引用的副本 | 可改对象内部状态，不能改引用指向 |\n' +
            '| String | 引用副本（不可变） | 否（String 不可变） |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：定义和调用方法**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 调用方法\n        int result = add(10, 20);\n        System.out.println("10 + 20 = " + result);\n        greet("张三");\n        greet("李四");\n    }\n\n    // 有返回值的方法\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    // 无返回值的方法（void）\n    static void greet(String name) {\n        System.out.println("你好, " + name + "!");\n    }\n}\n```\n\n' +
            '**示例 2：方法的值传递**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 基本类型：值传递，方法内修改不影响外部\n        int x = 10;\n        modifyPrimitive(x);\n        System.out.println("x = " + x);  // 仍然是10\n        // 数组：引用传递，方法内可修改元素\n        int[] arr = {1, 2, 3};\n        modifyArray(arr);\n        System.out.println("arr[0] = " + arr[0]);  // 变成99\n    }\n\n    static void modifyPrimitive(int n) {\n        n = 999;  // 修改副本，不影响原始变量\n    }\n\n    static void modifyArray(int[] a) {\n        a[0] = 99;  // 通过引用修改数组元素，影响原始数组\n    }\n}\n```\n\n' +
            '**示例 3：void 方法提前 return**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        printPositive(-5);\n        printPositive(8);\n    }\n\n    // void 方法可用 return; 提前退出\n    static void printPositive(int n) {\n        if (n <= 0) {\n            System.out.println(n + " 不是正数");\n            return;  // 提前结束\n        }\n        System.out.println(n + " 是正数");\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **Java 只有值传递**——基本类型传值副本，引用类型传引用副本。不存在 C++ 那种真正的引用传递。\n' +
            '2. **方法不能嵌套定义**——Java 不允许在方法内部定义另一个方法（但允许局部类和 Lambda）。\n' +
            '3. **return 必须匹配返回类型**——声明返回 int 的方法必须 return int 值；void 方法只能 `return;` 或不写。\n' +
            '4. **静态方法 vs 实例方法**——static 方法属于类，通过类名调用；实例方法属于对象，需先 new 对象。\n' +
            '5. **方法名应自解释**——避免 `doSomething()`、`process()` 这类模糊命名，用 `calculateTotal`、`validateEmail` 等。\n' +
            '6. **参数不宜过多**——超过 3-4 个参数考虑封装为对象（Parameter Object），如 `createUser(UserRequest req)`。\n' +
            '7. **方法长度**——建议控制在 20-30 行内，过长说明职责过多，应拆分。圈复杂度也应控制。\n\n' +
            '## 实际应用\n\n' +
            '1. **Spring Boot 分层架构**：Controller 方法对应 API 端点，Service 方法封装业务逻辑，DAO/Mapper 方法操作数据库。\n' +
            '2. **工具类方法**：`Math.max()`、`Arrays.sort()`、`Collections.emptyList()` 都是 static 方法，通过类名直接调用。\n' +
            '3. **业务逻辑封装**：电商系统的 `calculateOrderTotal(Order)`、`applyCoupon(Order, Coupon)` 等方法封装可复用逻辑。\n' +
            '4. **私有辅助方法**：把复杂方法拆成多个 private 辅助方法，对外只暴露一个 public 方法，降低耦合。\n' +
            '5. **可测试性**：方法化是单元测试的前提——每个方法可独立测试，JUnit 用 `@Test` 标注测试方法。\n\n' +
            '## 扩展知识\n\n' +
            '- **方法重载**：同名不同参，如 `println(int)`/`println(String)`，下节详解。\n' +
            '- **可变参数 varargs**：`void method(int... nums)` 接收任意数量参数，内部按数组处理，必须是最后一个参数。\n' +
            '- **递归**：方法调用自身，需有终止条件，下节详解。\n' +
            '- **方法引用（Java 8+）**：`Math::max`、`String::length` 可把方法作为函数式接口实例传递。\n' +
            '- **JIT 内联优化**——热点短方法会被 JIT 内联编译，消除方法调用开销，所以不必为性能牺牲小方法设计。\n' +
            '- **参数验证**——公共方法应在入口校验参数（`Objects.requireNonNull`、`IllegalArgumentException`）， fail-fast。\n' +
            '- **纯函数**——无副作用、相同输入相同输出的方法更易测试和并发，函数式编程推崇这种风格。',
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
            '## 概念详解\n\n' +
            'Java 支持方法重载（Overloading）：同一个类中可以定义多个同名方法，' +
            '只要参数列表不同（参数个数、类型或顺序不同）。重载是多态的一种体现（编译期多态/静态分派），' +
            '让 API 更易用——如 `System.out.println` 就有十多个重载版本，' +
            '可以打印 int、String、double、Object 等各种类型，调用者无需记住不同名字。\n\n' +
            '可变参数（varargs，Java 5+）允许方法接受任意数量的参数：`void method(int... nums)`。' +
            '在方法内部，nums 被当作数组处理。可变参数必须是参数列表的最后一个。' +
            '可变参数本质上是语法糖，编译器自动将参数打包成数组，' +
            '`method(1, 2, 3)` 等价于 `method(new int[]{1,2,3})`。\n\n' +
            '递归是方法调用自身的技巧，适合处理自相似的问题：阶乘、斐波那契数列、' +
            '树/图遍历、分治算法、回溯等。递归必须有一个基线条件（base case）终止递归，' +
            '否则会导致 StackOverflowError。每次递归调用都会在栈上压入一个栈帧，' +
            '递归过深会导致栈溢出。理解递归对于掌握树、图等数据结构和分治算法至关重要。\n\n' +
            '## 语法说明\n\n' +
            '### 方法重载\n\n' +
            '```java\n// 同名方法，参数列表不同\nint add(int a, int b)\ndouble add(double a, double b)\nint add(int a, int b, int c)\n// 注意：返回类型不同不构成重载，参数列表必须不同\n```\n\n' +
            '### 可变参数\n\n' +
            '```java\n// 可变参数：必须是最后一个参数\nstatic int sum(int... nums) {\n    int total = 0;\n    for (int n : nums) total += n;  // nums 当作数组\n    return total;\n}\n// 调用\nsum(1, 2, 3);\nsum();              // 空数组\nsum(new int[]{1});  // 也可直接传数组\n```\n\n' +
            '### 递归结构\n\n' +
            '```java\n返回类型 方法名(参数) {\n    if (基线条件) return 基线结果;  // 终止条件\n    return 方法名(更小规模的参数);   // 递归调用\n}\n```\n\n' +
            '### 重载 vs 重写对比\n\n' +
            '| 特性 | 重载（Overload） | 重写（Override） |\n' +
            '|------|------------------|------------------|\n' +
            '| 发生位置 | 同一个类 | 父子类之间 |\n' +
            '| 方法名 | 相同 | 相同 |\n' +
            '| 参数列表 | 必须不同 | 必须相同 |\n' +
            '| 返回类型 | 无关 | 相同或协变 |\n' +
            '| 修饰符 | 无关 | 不能更严格 |\n' +
            '| 绑定时机 | 编译期（静态分派） | 运行期（动态分派） |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：方法重载**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(add(10, 20));         // 两个int\n        System.out.println(add(10, 20, 30));     // 三个int\n        System.out.println(add(1.5, 2.5));       // 两个double\n        System.out.println(add("Hello, ", "World")); // 两个String\n    }\n\n    static int add(int a, int b) { return a + b; }\n    static int add(int a, int b, int c) { return a + b + c; }\n    static double add(double a, double b) { return a + b; }\n    static String add(String a, String b) { return a + b; }\n}\n```\n\n' +
            '**示例 2：可变参数求和**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(sum(1, 2, 3));        // 6\n        System.out.println(sum(10, 20, 30, 40)); // 100\n        System.out.println(sum());               // 0（空数组）\n    }\n\n    static int sum(int... nums) {\n        int total = 0;\n        for (int n : nums) total += n;\n        return total;\n    }\n}\n```\n\n' +
            '**示例 3：递归阶乘与斐波那契**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(factorial(5));   // 120\n        System.out.println(fib(10));        // 55\n    }\n\n    // 递归阶乘：n! = n * (n-1)!\n    static long factorial(int n) {\n        if (n <= 1) return 1;        // 基线条件\n        return n * factorial(n - 1); // 递归调用\n    }\n\n    // 递归斐波那契：fib(n) = fib(n-1) + fib(n-2)\n    static int fib(int n) {\n        if (n < 2) return n;         // 基线条件\n        return fib(n - 1) + fib(n - 2);\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **重载看参数列表，不看返回类型**——`int f()` 和 `void f()` 不构成重载，编译错误（歧义）。\n' +
            '2. **重载与参数名无关**——`f(int a)` 和 `f(int b)` 是同一个方法，不算重载。\n' +
            '3. **可变参数只能有一个且在最后**——`f(int a, String... s)` 合法；`f(int... a, String b)` 非法。\n' +
            '4. **可变参数与数组重载冲突**——`f(int... nums)` 和 `f(int[] nums)` 不能同时存在，编译器认为签名相同。\n' +
            '5. **递归必须有基线条件**——忘记终止条件会无限递归，最终抛 StackOverflowError。\n' +
            '6. **递归深度有限**——默认栈大小约 512KB-1MB，递归过深（如 10 万层）会栈溢出，应改迭代或调大栈。\n' +
            '7. **斐波那契递归效率低**——朴素递归 fib 有大量重复计算，O(2ⁿ)，应改用迭代或记忆化（memoization）。\n' +
            '8. **重载模糊调用**——`f(int, long)` 和 `f(long, int)`，调用 `f(1, 2)` 会编译错误（歧义），需显式转型。\n\n' +
            '## 实际应用\n\n' +
            '1. **标准库大量重载**：`System.out.println`、`Math.max`/`min`、`Arrays.sort`、`String.valueOf` 等都靠重载统一接口。\n' +
            '2. **构造器重载**：`new ArrayList()`、`new ArrayList(100)`、`new ArrayList(otherList)` 提供多种初始化方式。\n' +
            '3. **日志框架**：`log.info(msg)`、`log.info(fmt, args)`、`log.info(msg, throwable)` 通过可变参数支持模板。\n' +
            '4. **递归场景**：JSON/XML 解析（嵌套结构）、文件目录遍历、树的 DFS、回溯算法（全排列、N 皇后）。\n' +
            '5. **分治算法**：归并排序、快速排序、二叉树操作都依赖递归，是算法面试核心。\n\n' +
            '## 扩展知识\n\n' +
            '- **尾递归优化**：Java 不支持尾递归优化（TCO），所以尾递归仍会栈溢出；Kotlin/Scala 有 tailrec 优化。\n' +
            '- **记忆化递归**：用 Map 缓存已计算结果，把指数级递归降到多项式，如斐波那契 O(n)。\n' +
            '- **重载方法选择规则**：编译器按"最具体类型"选择重载，如 `f(int)` 比 `f(long)` 更匹配 `f(5)`。\n' +
            '- **可变参数与泛型**：`@SafeVarargs` 注解抑制泛型可变参数的堆污染警告（Java 7+）。\n' +
            '- **递归转迭代**：任何递归都能用显式栈改写成迭代，避免栈溢出，常用于生产环境（如目录遍历用 ArrayDeque）。\n' +
            '- **Lambda 与重载**——传 Lambda 给重载方法时可能产生歧义，需显式指定类型或用方法引用。',
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
            '## 概念详解\n\n' +
            '数组是 Java 中最基本的数据结构，用于存储固定大小的同类型元素。' +
            '数组声明有三种等价写法：`int[] arr`（推荐）、`int arr[]`（C 风格）、' +
            '`int []arr`（不推荐）。创建数组用 `new int[5]` 或直接初始化 `int[]{1,2,3}`。\n\n' +
            '数组一旦创建，长度固定不可变。通过 `arr.length` 获取长度，' +
            '通过 `arr[index]` 访问元素，索引从 0 开始到 length-1。' +
            '越界访问会抛出 `ArrayIndexOutOfBoundsException`（运行时异常）。' +
            '数组在内存中是连续存储的，因此随机访问效率为 O(1)，这是数组最大的优势。\n\n' +
            '遍历数组可以用传统 for 循环（需要索引时）或增强 for 循环（只读遍历时）。' +
            '`java.util.Arrays` 工具类提供了 `sort`、`toString`、`fill`、`copyOf`、`binarySearch` 等实用方法。' +
            '理解数组是学习 ArrayList（动态数组）和其他集合的基础。' +
            '数组是引用类型，作为字段时默认值为 null；基本类型数组的元素默认值为 0/false/\\u0000。\n\n' +
            '## 语法说明\n\n' +
            '### 数组声明与创建\n\n' +
            '```java\nint[] arr;                  // 声明（推荐写法）\narr = new int[5];           // 创建长度为5的数组，元素默认0\nint[] b = {1, 2, 3};        // 声明并初始化\nint[] c = new int[]{1,2,3}; // 显式 new + 初始化\nString[] names = new String[3]; // 引用类型数组，元素默认 null\n```\n\n' +
            '### 访问与遍历\n\n' +
            '```java\narr[0] = 10;          // 赋值\nint x = arr[0];       // 取值\nint len = arr.length; // 长度（不是方法，无括号）\nfor (int i = 0; i < arr.length; i++) { /* 带索引 */ }\nfor (int n : arr) { /* 只读遍历 */ }\n```\n\n' +
            '### 数组核心属性与方法\n\n' +
            '| 成员 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `arr.length` | 数组长度（属性，非方法） | `int n = arr.length;` |\n' +
            '| `arr[i]` | 索引访问（0 ~ length-1） | `arr[0]` |\n' +
            '| `Arrays.sort(arr)` | 原地排序 | 升序排列 |\n' +
            '| `Arrays.toString(arr)` | 转字符串 | `[1, 2, 3]` |\n' +
            '| `Arrays.copyOf(arr, n)` | 复制并指定新长度 | 扩容/缩容 |\n' +
            '| `Arrays.fill(arr, v)` | 填充 | 全部置为 v |\n' +
            '| `Arrays.binarySearch(arr, key)` | 二分查找 | 返回索引或负数 |\n' +
            '| `Arrays.equals(a, b)` | 比较内容 | 内容相同返回 true |\n\n' +
            '### 基本类型数组默认值\n\n' +
            '| 类型 | 默认值 |\n' +
            '|------|--------|\n' +
            '| `int`/`long`/`short`/`byte` | 0 |\n' +
            '| `double`/`float` | 0.0 |\n' +
            '| `boolean` | false |\n' +
            '| `char` | \\u0000（空字符） |\n' +
            '| 引用类型（String 等） | null |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：数组创建与遍历**\n\n```java\nimport java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = new int[5];           // 默认值全0\n        int[] b = {1, 2, 3, 4, 5};      // 直接初始化\n        System.out.println(Arrays.toString(a));  // [0, 0, 0, 0, 0]\n        System.out.println(Arrays.toString(b));  // [1, 2, 3, 4, 5]\n        System.out.println("b长度: " + b.length);\n    }\n}\n```\n\n' +
            '**示例 2：求最大值与平均值**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[] scores = {85, 92, 78, 95, 88};\n        int max = scores[0];\n        int sum = 0;\n        for (int s : scores) {\n            if (s > max) max = s;\n            sum += s;\n        }\n        double avg = (double) sum / scores.length;\n        System.out.println("最高分: " + max);\n        System.out.println("平均分: " + avg);\n    }\n}\n```\n\n' +
            '**示例 3：Arrays 工具类**\n\n```java\nimport java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9, 3};\n        Arrays.sort(arr);                       // 排序\n        System.out.println(Arrays.toString(arr)); // [1, 2, 3, 5, 8, 9]\n        int idx = Arrays.binarySearch(arr, 8);   // 二分查找\n        System.out.println("8的索引: " + idx);\n        int[] copy = Arrays.copyOf(arr, 8);      // 扩容，多出补0\n        System.out.println(Arrays.toString(copy));\n        Arrays.fill(arr, 0);                     // 全部填0\n        System.out.println(Arrays.toString(arr));\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **长度固定不可变**——数组创建后长度不能改变，需要动态容量请用 ArrayList。\n' +
            '2. **索引越界**——`arr[arr.length]` 会抛 ArrayIndexOutOfBoundsException，循环条件必须是 `i < length`。\n' +
            '3. **length 是属性不是方法**——数组用 `arr.length`（无括号），String 用 `s.length()`（有括号），集合用 `list.size()`。\n' +
            '4. **数组是引用类型**——`int[] a = b;` 是引用赋值，修改 a 会影响 b；要独立副本用 `Arrays.copyOf` 或 `clone()`。\n' +
            '5. **数组比较**——`==` 比较引用地址，`Arrays.equals(a, b)` 比较内容，新手常混淆。\n' +
            '6. **打印数组**——直接 `println(arr)` 输出的是地址哈希如 `[I@1540e19d`，要用 `Arrays.toString(arr)`。\n' +
            '7. **基本类型数组 vs 包装类数组**——`int[]` 性能好；`Integer[]` 可放 null 但有装箱开销。\n' +
            '8. **多维数组不规则**——Java 支持锯齿数组（每行长度不同），`new int[3][]` 后逐行分配。\n\n' +
            '## 实际应用\n\n' +
            '1. **固定大小数据**：一周7天、扑克牌52张、棋盘 8x8，长度不变用数组最合适。\n' +
            '2. **高性能计算**：数组连续内存、无装箱开销，比集合快，数值计算（矩阵运算、图像像素）首选。\n' +
            '3. **缓冲区**：字节数组 `byte[]` 作为 IO 缓冲区，`read(byte[] buf)` 读取数据。\n' +
            '4. **方法返回多值**：`int[] minMax(int[] arr)` 返回 {min, max}，比定义类更轻量。\n' +
            '5. **算法题**：排序、查找、双指针、滑动窗口等大量算法基于数组，是面试核心数据结构。\n\n' +
            '## 扩展知识\n\n' +
            '- **ArrayList 内部就是数组**：ArrayList 用 `Object[]` 存储，容量不足时 `Arrays.copyOf` 扩容（通常 1.5 倍）。\n' +
            '- **数组协变**：`String[]` 是 `Object[]` 的子类型（协变），但这会导致运行时 ArrayStoreException，是设计缺陷。\n' +
            '- **泛型数组不能直接创建**：`new T[10]` 非法（类型擦除），需用 `Object[]` 或 `Array.newInstance`。\n' +
            '- **Arrays.asList 陷阱**：`Arrays.asList(arr)` 返回的是固定大小的视图，不能 add/remove；用 `new ArrayList<>(asList(...))`。\n' +
            '- **数组 vs 集合**：数组性能高、长度固定；集合灵活、API 丰富。读多写少固定大小用数组，否则用集合。\n' +
            '- **Arrays.stream**：Java 8+ `Arrays.stream(arr).sum()` 用流处理数组，简洁但性能略低于 for 循环。',
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
            '## 概念详解\n\n' +
            'Java 的多维数组本质上是"数组的数组"。二维数组声明为 `int[][] matrix`，' +
            '创建时 `new int[3][4]` 创建 3 行 4 列的矩阵。' +
            '二维数组可以理解为：一个一维数组，每个元素又是一个一维数组（行）。\n\n' +
            'Java 支持不规则数组（Ragged Array）：每行的长度可以不同。' +
            '例如 `int[][] arr = new int[3][];` 先创建行数，' +
            '再逐行 `arr[0] = new int[5]; arr[1] = new int[3];` 指定每行长度。' +
            '这与 C/C++ 的二维数组不同——C 的多维数组在内存中是连续的，' +
            '而 Java 的每行是独立的数组对象，因此支持锯齿形状。\n\n' +
            '遍历二维数组通常用嵌套循环：外层遍历行，内层遍历列。' +
            '二维数组常用于表示矩阵、棋盘、地图、表格等结构。' +
            '理解多维数组对于学习动态规划（DP 表格）、图的邻接矩阵表示等高级算法至关重要。\n\n' +
            '## 语法说明\n\n' +
            '### 二维数组声明与创建\n\n' +
            '```java\nint[][] m;                  // 声明\nm = new int[3][4];          // 3行4列，元素默认0\nint[][] a = {{1,2},{3,4},{5,6}}; // 声明并初始化\nint[][] ragged = new int[3][];   // 不规则：先定行数\nragged[0] = new int[5];          // 每行单独分配\nragged[1] = new int[2];\n```\n\n' +
            '### 访问与遍历\n\n' +
            '```java\nm[i][j]            // 访问第i行第j列\nm.length           // 行数\nm[i].length        // 第i行的列数（不规则数组每行可能不同）\nfor (int i = 0; i < m.length; i++)\n    for (int j = 0; j < m[i].length; j++)\n        // 处理 m[i][j]\n```\n\n' +
            '### 二维数组核心属性\n\n' +
            '| 属性 | 含义 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `m.length` | 行数 | `int rows = m.length;` |\n' +
            '| `m[i].length` | 第 i 行列数 | `int cols = m[0].length;` |\n' +
            '| `m[i][j]` | 元素访问 | `int x = m[2][3];` |\n' +
            '| `Arrays.deepToString(m)` | 深层转字符串 | `[[1, 2], [3, 4]]` |\n' +
            '| `Arrays.deepEquals(a, b)` | 深层比较 | 比较多维数组内容 |\n\n' +
            '### 规则 vs 不规则数组\n\n' +
            '| 特性 | 规则数组 | 不规则数组（Ragged） |\n' +
            '|------|----------|----------------------|\n' +
            '| 创建 | `new int[3][4]` | `new int[3][]` + 逐行分配 |\n' +
            '| 每行长度 | 相同 | 可不同 |\n' +
            '| 内存 | 行数组独立但等长 | 行数组独立且不等长 |\n' +
            '| 适用 | 矩阵、棋盘 | 三角阵、稀疏数据 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：二维数组与矩阵遍历**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n        // 遍历并打印\n        for (int i = 0; i < matrix.length; i++) {\n            for (int j = 0; j < matrix[i].length; j++) {\n                System.out.printf("%d ", matrix[i][j]);\n            }\n            System.out.println();\n        }\n        System.out.println("行数: " + matrix.length);\n        System.out.println("列数: " + matrix[0].length);\n    }\n}\n```\n\n' +
            '**示例 2：矩阵转置**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2, 3}, {4, 5, 6}};  // 2行3列\n        int[][] t = new int[a[0].length][a.length]; // 3行2列\n        for (int i = 0; i < a.length; i++)\n            for (int j = 0; j < a[i].length; j++)\n                t[j][i] = a[i][j];\n        for (int[] row : t) {\n            for (int v : row) System.out.printf("%d ", v);\n            System.out.println();\n        }\n    }\n}\n```\n\n' +
            '**示例 3：不规则（锯齿）数组**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 杨辉三角：每行长度递增\n        int[][] tri = new int[5][];\n        for (int i = 0; i < tri.length; i++) {\n            tri[i] = new int[i + 1];\n            tri[i][0] = 1;\n            tri[i][i] = 1;\n            for (int j = 1; j < i; j++) {\n                tri[i][j] = tri[i - 1][j - 1] + tri[i - 1][j];\n            }\n        }\n        for (int[] row : tri) {\n            for (int v : row) System.out.printf("%d ", v);\n            System.out.println();\n        }\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **行数与列数**——`m.length` 是行数，`m[i].length` 是第 i 行的列数，不规则数组每行列数可能不同。\n' +
            '2. **空指针风险**——`new int[3][]` 后未分配某行就访问 `m[0][0]` 会抛 NullPointerException。\n' +
            '3. **打印二维数组**——`println(m)` 输出地址，`Arrays.toString(m)` 输出行地址数组，要用 `Arrays.deepToString(m)`。\n' +
            '4. **比较二维数组**——`Arrays.equals` 只比较第一层，多维要用 `Arrays.deepEquals(a, b)`。\n' +
            '5. **内存开销**——二维数组每行是独立对象，有额外对象头开销，比 C 的连续二维数组更费内存。\n' +
            '6. **遍历方向影响缓存**——按行遍历（`m[i][j], j 内层`）缓存友好；按列遍历则跳跃内存，性能差。\n' +
            '7. **初始化语法**——`{{1,2},{3,4}}` 只能在声明时用；已声明的变量要用 `new int[][]{{...}}`。\n\n' +
            '## 实际应用\n\n' +
            '1. **矩阵运算**：图像处理（像素矩阵）、机器学习（权重矩阵）、3D 图形（变换矩阵）都用二维数组。\n' +
            '2. **棋盘游戏**：五子棋、象棋、扫雷的棋盘用二维数组表示，每个元素存棋子或状态。\n' +
            '3. **动态规划**：DP 算法的状态表通常是二维数组，如最长公共子序列、编辑距离。\n' +
            '4. **图的邻接矩阵**：用 `int[][] graph` 表示图的连接关系，graph[i][j] 表示边权。\n' +
            '5. **地图/迷宫**：游戏地图用二维数组存地形（0 空地、1 墙），BFS/DFS 寻路算法基于此。\n\n' +
            '## 扩展知识\n\n' +
            '- **三维及以上数组**：`int[][][] cube`，原理相同（数组的数组的数组），但可读性差，建议用类封装。\n' +
            '- **Arrays.deepToString/deepEquals**：递归处理嵌套数组，是打印/比较多维数组的标准方法。\n' +
            '- **矩阵库**：生产环境矩阵运算用 ND4J、EJML 等库，性能远超手写二维数组循环。\n' +
            '- **稀疏矩阵**：大部分元素为 0 时用二维数组浪费内存，应改用 Map<坐标, 值> 或专门稀疏格式。\n' +
            '- **交错数组优势**：不规则数组比规则数组省空间（按需分配），适合上/下三角矩阵。\n' +
            '- **Java vs C 多维数组**：C 的二维数组内存连续、行列长度编译期固定；Java 行独立、长度可变、更灵活但略慢。',
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
            '## 概念详解\n\n' +
            '面向对象编程（OOP）是 Java 的核心范式。类（Class）是对象的蓝图/模板，' +
            '定义了属性（字段）和行为（方法）。对象（Object）是类的实例，通过 `new` 关键字创建。' +
            '类定义了"是什么"，对象是"具体的东西"——类是设计图，对象是按图造出的实体。\n\n' +
            '类的成员包括：字段（Field，存储状态）、方法（Method，定义行为）、' +
            '构造方法（Constructor，初始化对象）。字段可以是基本类型或引用类型。' +
            '方法可以访问对象的字段，体现了对象"将状态和行为封装在一起"的特性。\n\n' +
            '创建对象使用 `new` 关键字：`Student s = new Student();`。' +
            '这行代码做了三件事：1) 在堆内存中分配空间；2) 调用构造方法初始化字段；3) 返回引用赋给变量。' +
            's 是一个引用变量，存储的是对象在堆中的地址，而非对象本身。' +
            '多个引用可以指向同一个对象，通过任意一个引用修改对象会影响所有引用。\n\n' +
            'OOP 的四大特性：封装（隐藏内部细节）、继承（复用与扩展）、多态（同一调用不同行为）、抽象（忽略非本质细节）。本节聚焦类与对象的基础，后续章节深入其他特性。\n\n' +
            '## 语法说明\n\n' +
            '### 类定义语法\n\n' +
            '```java\n[修饰符] class 类名 [extends 父类] [implements 接口] {\n    // 字段（属性）\n    修饰符 类型 字段名;\n    // 构造方法\n    修饰符 类名(参数) { /* 初始化 */ }\n    // 方法（行为）\n    修饰符 返回类型 方法名(参数) { /* 逻辑 */ }\n}\n```\n\n' +
            '### 对象创建与使用\n\n' +
            '```java\n类名 引用 = new 类名(参数);  // 创建对象\n引用.字段;        // 访问字段\n引用.方法(参数);  // 调用方法\n```\n\n' +
            '### 类成员说明\n\n' +
            '| 成员 | 作用 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 字段（Field） | 存储对象状态 | 每个对象有独立副本（非 static） |\n' +
            '| 构造方法 | 初始化对象 | 与类同名，无返回类型 |\n' +
            '| 方法（Method） | 定义行为 | 可访问对象字段 |\n' +
            '| this | 当前对象引用 | 区分参数与字段、链式调用 |\n\n' +
            '### 访问修饰符\n\n' +
            '| 修饰符 | 同类 | 同包 | 子类 | 其他包 |\n' +
            '|--------|------|------|------|--------|\n' +
            '| `public` | ✓ | ✓ | ✓ | ✓ |\n' +
            '| `protected` | ✓ | ✓ | ✓ | ✗ |\n' +
            '| 默认（包级） | ✓ | ✓ | ✗ | ✗ |\n' +
            '| `private` | ✓ | ✗ | ✗ | ✗ |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：定义类与创建对象**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 创建对象\n        Student s1 = new Student("张三", 20);\n        Student s2 = new Student("李四", 22);\n        s1.introduce();\n        s2.introduce();\n    }\n}\n\nclass Student {\n    // 字段（私有，封装）\n    private String name;\n    private int age;\n    // 构造方法\n    Student(String name, int age) {\n        this.name = name;  // this 区分参数与字段\n        this.age = age;\n    }\n    // 方法\n    void introduce() {\n        System.out.println("我是" + name + "，今年" + age + "岁");\n    }\n}\n```\n\n' +
            '**示例 2：引用与对象**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student("王五", 18);\n        Student b = a;          // b 和 a 指向同一对象\n        b.setAge(20);           // 通过 b 修改\n        System.out.println(a.getAge());  // 20，a 也受影响\n        Student c = new Student("赵六", 25);\n        System.out.println(a == c);      // false，不同对象\n        System.out.println(a == b);      // true，同一对象\n    }\n}\n```\n\n' +
            '**示例 3：封装与 getter/setter**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Account acc = new Account("1001", 1000);\n        acc.deposit(500);\n        acc.withdraw(200);\n        System.out.println(acc.getBalance());  // 1300\n    }\n}\n\nclass Account {\n    private String id;\n    private double balance;\n    Account(String id, double balance) {\n        this.id = id;\n        this.balance = balance;\n    }\n    double getBalance() { return balance; }\n    void deposit(double amount) {\n        if (amount <= 0) throw new IllegalArgumentException("金额必须为正");\n        balance += amount;\n    }\n    void withdraw(double amount) {\n        if (amount > balance) throw new IllegalArgumentException("余额不足");\n        balance -= amount;\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **this 关键字**——`this.字段` 区分同名参数与字段；`this(...)` 调用本类其他构造方法（必须在第一行）。\n' +
            '2. **构造方法无返回类型**——即使写 void 也会被当成普通方法，不作为构造器。\n' +
            '3. **默认构造器**——若不写任何构造方法，编译器自动生成无参构造器；一旦写了有参构造器，无参构造器不再自动生成。\n' +
            '4. **== vs equals**——`==` 比较引用地址（是否同一对象），`equals` 默认也比地址，需重写后比内容（如 String）。\n' +
            '5. **字段应私有化**——字段一般声明为 private，通过 getter/setter 访问，实现封装和数据校验。\n' +
            '6. **对象在堆，引用在栈**——`new` 出的对象在堆，引用变量在栈；方法结束后引用消失，对象等 GC 回收。\n' +
            '7. **null 引用**——未初始化的引用默认 null，调用其方法会抛 NullPointerException（NPE）。\n' +
            '8. **一个文件一个 public 类**——public 类名必须与文件名一致；非 public 类可多个共存。\n\n' +
            '## 实际应用\n\n' +
            '1. **领域模型**：电商系统中 User、Order、Product 等都是类，封装业务数据和规则。\n' +
            '2. **实体类（Entity/POJO）**：与数据库表对应的类，字段映射列，MyBatis/JPA 自动映射。\n' +
            '3. **DTO/VO**：数据传输对象/视图对象，用于接口数据交换，通常只有字段和 getter/setter。\n' +
            '4. **Spring Bean**：Spring 容器管理的对象，默认单例，通过依赖注入协作。\n' +
            '5. **Builder 模式**：字段多的类用 Builder 链式构造，如 `User.builder().name("x").age(20).build()`。\n\n' +
            '## 扩展知识\n\n' +
            '- **Record 类（Java 14+）**：`record Point(int x, int y) {}` 自动生成构造器、getter、equals、hashCode、toString，适合纯数据类。\n' +
            '- ** sealed 类（Java 17+）**：密封类限制哪些类可以继承它，配合 switch 模式匹配实现穷尽匹配。\n' +
            '- **对象内存布局**：对象头（Mark Word + Class Pointer）+ 实例数据 + 对齐填充，JOL 工具可查看。\n' +
            '- **逃逸分析与栈上分配**——JIT 分析对象作用域，未逃逸的对象可在栈上分配，免去 GC 开销。\n' +
            '- **Lombok**：`@Data`/`@Getter`/`@Builder` 注解自动生成样板代码，减少 getter/setter 样板。\n' +
            '- **不可变对象**：所有字段 final、无 setter、类 final 的对象线程安全，如 String、LocalDate，是并发编程首选。',
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
            '## 概念详解\n\n' +
            '构造方法（Constructor）是一种特殊的方法，在创建对象时自动调用，用于初始化对象状态。' +
            '构造方法名必须与类名相同，没有返回类型（连 void 都没有）。' +
            '如果不显式定义构造方法，编译器会自动生成一个无参的默认构造方法（空实现）。' +
            '一旦定义了任何构造方法，编译器就不再生成默认构造方法，这点常导致新手疑惑。\n\n' +
            '构造方法可以重载，提供不同的初始化方式。' +
            '一个构造方法可以通过 `this(...)` 调用同一个类的另一个构造方法，' +
            '减少代码重复（构造器链）。this(...) 调用必须是构造方法的第一条语句。\n\n' +
            '`this` 关键字指向当前对象的引用，常用于：' +
            '1) 区分参数名与字段名相同（如 `this.name = name`）；' +
            '2) 调用当前类的其他构造方法（`this(...)`）；' +
            '3) 调用当前对象的方法（`this.method()`，通常省略 this）；' +
            '4) 将当前对象作为参数传递（`otherMethod(this)`）；' +
            '5) 返回当前对象（`return this;`，用于链式调用）。' +
            '理解 this 是掌握面向对象的关键，它让方法知道"操作的是哪个对象"。\n\n' +
            '## 语法说明\n\n' +
            '### 构造方法定义\n\n' +
            '```java\n[修饰符] 类名(参数列表) {\n    // 初始化语句\n    this.字段 = 参数;  // 常见模式\n}\n// 注意：无返回类型，连 void 都不能写\n```\n\n' +
            '### 构造方法重载与 this()\n\n' +
            '```java\nclass User {\n    private String name;\n    private int age;\n    User() { this("匿名", 0); }       // 调用两参构造\n    User(String name) { this(name, 0); } // 调用两参构造\n    User(String name, int age) {        // 主构造\n        this.name = name;\n        this.age = age;\n    }\n}\n```\n\n' +
            '### this 用法\n\n' +
            '```java\nthis.字段;            // 访问当前对象字段\nthis.方法();         // 调用当前对象方法（常省略）\nthis(参数);          // 调用本类其他构造（仅构造方法首行）\nreturn this;         // 返回当前对象（链式调用）\notherMethod(this);   // 把当前对象作为参数\n```\n\n' +
            '### 构造方法 vs 普通方法\n\n' +
            '| 特性 | 构造方法 | 普通方法 |\n' +
            '|------|----------|----------|\n' +
            '| 名称 | 与类名相同 | 自定义（camelCase） |\n' +
            '| 返回类型 | 无（连 void 都没有） | 必须声明 |\n' +
            '| 调用时机 | new 对象时自动调用 | 显式调用 |\n' +
            '| 能否被继承 | 不能（但子类调用 super） | 能 |\n' +
            '| 能否重写 | 不能 | 能（非 final） |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：构造方法重载与 this()**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        User u1 = new User();\n        User u2 = new User("张三");\n        User u3 = new User("李四", 20);\n        System.out.println(u1);  // 匿名,0\n        System.out.println(u2);  // 张三,0\n        System.out.println(u3);  // 李四,20\n    }\n}\nclass User {\n    private String name;\n    private int age;\n    User() { this("匿名", 0); }\n    User(String name) { this(name, 0); }\n    User(String name, int age) { this.name = name; this.age = age; }\n    public String toString() { return name + "," + age; }\n}\n```\n\n' +
            '**示例 2：this 区分字段与参数**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Point p = new Point(3, 4);\n        p.move(1, 1);\n        System.out.println(p);  // (4,5)\n    }\n}\nclass Point {\n    private int x, y;\n    Point(int x, int y) {\n        this.x = x;  // this.x 是字段，x 是参数\n        this.y = y;\n    }\n    void move(int x, int y) {\n        this.x += x;\n        this.y += y;\n    }\n    public String toString() { return "(" + x + "," + y + ")"; }\n}\n```\n\n' +
            '**示例 3：链式调用（return this）**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("Hello").append(", ").append("World");  // 链式调用\n        System.out.println(sb);\n    }\n}\n// 链式调用原理：方法返回 this\nclass Builder {\n    private String value = "";\n    Builder append(String s) { value += s; return this; }\n    String build() { return value; }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **无返回类型**——构造方法连 void 都不能写，写了就变成普通方法，不会被 new 调用。\n' +
            '2. **默认构造器消失**——一旦写了有参构造，无参构造不再自动生成；需要无参构造必须显式声明（框架常要求）。\n' +
            '3. **this() 必须在首行**——构造方法中 `this(...)` 必须是第一条语句，且不能与 `super()` 共存。\n' +
            '4. **this() 不能形成环**——构造器间调用不能循环（A 调 B，B 调 A），编译错误。\n' +
            '5. **this 不能用于 static**——static 方法无对象上下文，不能用 this（属于类不属于对象）。\n' +
            '6. **构造方法可被 private**——单例模式用 private 构造器禁止外部 new，工厂方法控制创建。\n' +
            '7. **构造方法不继承**——子类不会继承父类构造方法，但子类构造器首行会隐式 super() 调用父类无参构造。\n' +
            '8. **初始化顺序**——父类静态块 → 子类静态块 → 父类字段+块 → 父类构造 → 子类字段+块 → 子类构造。\n\n' +
            '## 实际应用\n\n' +
            '1. **框架要求无参构造**：Spring、JPA、Jackson 反射创建对象时需要 public 无参构造器，缺失会报错。\n' +
            '2. **Builder 模式**：字段多的对象用 Builder + private 构造器，如 Lombok `@Builder` 自动生成。\n' +
            '3. **单例模式**：private 构造器 + 静态 getInstance() 保证全局唯一实例。\n' +
            '4. **不可变对象**：所有字段在构造器中赋值且 final，无 setter，如 LocalDate、BigDecimal。\n' +
            '5. **链式 API**：方法 `return this` 实现链式调用，StringBuilder、Stream、MyBatis QueryWrapper 都用此模式。\n\n' +
            '## 扩展知识\n\n' +
            '- **super 与 this 对比**：this 指当前对象，super 指父类对象引用（用于调用父类方法/构造器）。\n' +
            '- **初始化块**：`{ ... }` 实例初始化块在构造方法前执行，多个块按顺序执行；static 块类加载时执行一次。\n' +
            '- **紧凑构造器（Record）**：Java 14+ Record 的构造器语法特殊，用于参数校验，字段赋值自动完成。\n' +
            '- **对象创建全过程**：分配内存 → 零值初始化 → 设置对象头 → 调用构造器（invokespecial）。\n' +
            '- **依赖注入替代构造**：Spring 用 `@Autowired` 构造器注入，推荐构造器注入（不可变、易测试）。\n' +
            '- **工厂方法模式**：`static User create(...)` 比 new 更灵活，可返回子类、缓存实例、有语义命名。',
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
            '## 概念详解\n\n' +
            '封装（Encapsulation）是面向对象三大特性之一，核心思想是隐藏内部实现细节，' +
            '只暴露必要的接口。Java 通过访问修饰符实现封装：' +
            '`private`（同类可见）、`default`/包级（同包可见，无修饰符）、' +
            '`protected`（同包+子类可见）、`public`（全部可见）。\n\n' +
            '封装的标准做法是将字段设为 private，通过 public 的 getter 和 setter 方法控制访问。' +
            'getter/setter 不仅能验证数据合法性，还能在读取或修改时执行额外逻辑（如日志、' +
            '缓存更新、权限检查、懒加载）。IDE（IntelliJ IDEA、Eclipse）可一键生成 getter/setter，' +
            'Lombok 的 `@Getter @Setter` 注解更进一步简化样板代码。\n\n' +
            '封装的好处：1) 保护数据不被外部随意修改，避免非法状态；' +
            '2) 可在 setter 中加入验证逻辑（如年龄不能为负数）；' +
            '3) 内部实现可自由变化而不影响调用方（如把字段从 int 改成 long，getter 签名不变）；' +
            '4) 降低耦合度，提高可维护性。封装是编写健壮、可维护代码的基础，是专业开发者的必备习惯。\n\n' +
            '## 语法说明\n\n' +
            '### 访问修饰符\n\n' +
            '```java\npublic class User {\n    private String name;        // 仅本类可见\n    String nickname;            // 包级私有（默认）\n    protected int age;          // 同包 + 子类\n    public String id;           // 全部可见\n}\n```\n\n' +
            '### getter/setter 标准模式\n\n' +
            '```java\npublic String getName() { return name; }\npublic void setName(String name) {\n    if (name == null || name.isEmpty())\n        throw new IllegalArgumentException("名字不能为空");\n    this.name = name;\n}\n// boolean 字段用 isXxx\npublic boolean isActive() { return active; }\n```\n\n' +
            '### 访问修饰符可见性表\n\n' +
            '| 修饰符 | 同类 | 同包 | 子类（不同包） | 其他包 |\n' +
            '|--------|------|------|----------------|--------|\n' +
            '| `public` | ✓ | ✓ | ✓ | ✓ |\n' +
            '| `protected` | ✓ | ✓ | ✓ | ✗ |\n' +
            '| 默认（package-private） | ✓ | ✓ | ✗ | ✗ |\n' +
            '| `private` | ✓ | ✗ | ✗ | ✗ |\n\n' +
            '### 修饰符适用范围\n\n' +
            '| 修饰符 | 类 | 字段 | 方法 | 构造器 |\n' +
            '|--------|------|------|------|--------|\n' +
            '| `public` | ✓（顶级类） | ✓ | ✓ | ✓ |\n' +
            '| `protected` | ✗（顶级类） | ✓ | ✓ | ✓ |\n' +
            '| 默认 | ✓ | ✓ | ✓ | ✓ |\n' +
            '| `private` | ✓（嵌套类） | ✓ | ✓ | ✓ |\n' +
            '| `final` | ✓（不可继承） | ✓（不可改） | ✓（不可重写） | ✗ |\n' +
            '| `static` | ✓（嵌套类） | ✓ | ✓ | ✗ |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：封装的标准实现**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.setAge(25);\n        System.out.println(p.getAge());  // 25\n        p.setAge(-5);  // 抛异常：年龄不能为负\n    }\n}\nclass Person {\n    private int age;\n    public int getAge() { return age; }\n    public void setAge(int age) {\n        if (age < 0 || age > 150)\n            throw new IllegalArgumentException("年龄非法: " + age);\n        this.age = age;\n    }\n}\n```\n\n' +
            '**示例 2：只读与只写**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Config c = new Config("prod", 8080);\n        System.out.println(c.getEnv());     // 只读\n        c.setPort(9090);                   // 只写端口\n        System.out.println(c.getPort());\n    }\n}\nclass Config {\n    private final String env;   // final + 无 setter = 只读\n    private int port;\n    Config(String env, int port) { this.env = env; this.port = port; }\n    String getEnv() { return env; }\n    int getPort() { return port; }\n    void setPort(int port) { this.port = port; }\n}\n```\n\n' +
            '**示例 3：包级私有的合理使用**\n\n```java\n// 同包内可见，对外部包隐藏实现细节\nclass InternalCache {  // 默认修饰符，包级私有\n    static void log(String msg) { System.out.println("[CACHE] " + msg); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        InternalCache.log("命中缓存");  // 同包可调用\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **字段默认 private**——除非有充分理由，字段一律 private，通过方法控制访问。\n' +
            '2. **boolean getter 用 isXxx**——约定 `isActive()` 而非 `getActive()`，Jackson 等框架遵循此约定。\n' +
            '3. **protected 慎用**——protected 对子类开放，破坏封装边界，优先用 private + protected 方法暴露最小接口。\n' +
            '4. **final 字段**——final 字段只能赋值一次（构造器中），实现只读属性，配合无 setter 实现不可变。\n' +
            '5. **包级私有用于内部实现**——同包工具类、辅助类用默认修饰符，对外不暴露，是模块化的基础。\n' +
            '6. **getter/setter 不是必须**——纯数据类（DTO）可用 public 字段或 Record 替代，避免过度封装。\n' +
            '7. **可见性最小化原则**——能 private 就不 default，能 default 就不 public，减少 API 面。\n' +
            '8. **数组/集合 getter 返回副本**——`getList()` 直接返回内部 List 会被外部修改，应返回 `unmodifiableList` 或副本。\n\n' +
            '## 实际应用\n\n' +
            '1. **JavaBean 规范**：框架（Spring、Hibernate、Jackson）依赖 getter/setter 命名约定反射访问属性。\n' +
            '2. **DTO/VO**：接口传输对象用 private 字段 + getter/setter，Jackson 序列化为 JSON。\n' +
            '3. **领域模型**：业务对象用封装保证不变式（如账户余额非负、订单状态合法流转）。\n' +
            '4. **配置类**：`@ConfigurationProperties` 把配置注入 private 字段，通过 getter 访问。\n' +
            '5. **不可变值对象**：`LocalDate`、`BigDecimal` 全字段 final + 无 setter，线程安全且防篡改。\n\n' +
            '## 扩展知识\n\n' +
            '- **Lombok**：`@Data` 生成 getter/setter/equals/hashCode/toString；`@Getter/@Setter` 单独控制；`@Builder` 链式构造。\n' +
            '- **Record 类（Java 14+）**：`record Point(int x, int y) {}` 自动 private final 字段 + 访问器（x()、y()），天然不可变。\n' +
            '- **模块系统（Java 9+）**：module-info.java 用 `exports`/`opens` 控制包级可见性，比 classpath 更严格。\n' +
            '- **封装与继承冲突**——子类能访问 protected 字段，可能破坏父类不变式，所以优先组合而非继承。\n' +
            '- **属性 vs 字段**——JavaBean "属性"由 getter/setter 名推导（getName → 属性 name），不一定有对应字段。\n' +
            '- **反射绕过封装**——`setAccessible(true)` 可访问 private，框架（如 Jackson）常用，但破坏了封装，需谨慎。',
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
            '## 概念详解\n\n' +
            '`static` 关键字表示"静态的"，被 static 修饰的成员属于类本身，而非某个对象实例。' +
            '无论创建多少个对象，静态成员只有一份，被所有实例共享。' +
            'static 可以修饰字段、方法、代码块（静态块）和嵌套类（静态内部类）。\n\n' +
            '静态字段（类变量）在类加载时初始化，存储在方法区（JDK 8+ 为元空间 Metaspace）。' +
            '所有实例共享同一个静态变量——修改一处，处处可见。' +
            '静态方法通过类名直接调用（如 `Math.sqrt(4)`），不需要创建对象。' +
            '静态方法不能直接访问实例变量（因为没有 this 引用），只能访问静态成员。\n\n' +
            'static 的常见应用场景：1) 工具类（如 `java.lang.Math`、`java.util.Arrays`）的方法都是 static；' +
            '2) 常量定义（`public static final double PI = 3.14159;`）；' +
            '3) 计数器（统计创建了多少个实例）；' +
            '4) 单例模式（getInstance 方法是 static）；' +
            '5) 静态代码块（类加载时执行一次的初始化逻辑）。' +
            '理解 static 对于使用工具类、理解类加载机制、编写单例模式至关重要。\n\n' +
            '## 语法说明\n\n' +
            '### static 成员定义与访问\n\n' +
            '```java\nclass Counter {\n    static int count = 0;            // 静态字段\n    static final double PI = 3.14;   // 静态常量\n    static int getCount() { return count; }  // 静态方法\n    static { System.out.println("类加载"); } // 静态块\n}\n// 访问\nCounter.count;        // 推荐用类名\nCounter.getCount();\n```\n\n' +
            '### 静态方法限制\n\n' +
            '```java\nstatic void foo() {\n    // this.name;      // 编译错误：静态方法无 this\n    // instanceField;  // 编译错误：不能访问实例字段\n    staticField;       // 可以访问静态字段\n    staticMethod();    // 可以调用静态方法\n}\n```\n\n' +
            '### static 四种用法对比\n\n' +
            '| 用法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| 静态字段 | 类级别变量，所有实例共享 | `static int count;` |\n' +
            '| 静态方法 | 类级别方法，无 this | `static int max(int a, int b)` |\n' +
            '| 静态块 | 类加载时执行一次 | `static { init(); }` |\n' +
            '| 静态内部类 | 不依赖外部实例 | `static class Builder` |\n\n' +
            '### static vs 实例成员\n\n' +
            '| 特性 | 静态成员 | 实例成员 |\n' +
            '|------|----------|----------|\n' +
            '| 归属 | 类 | 对象 |\n' +
            '| 份数 | 一份 | 每对象一份 |\n' +
            '| 访问方式 | 类名.成员 | 对象.成员 |\n' +
            '| 能用 this | 否 | 是 |\n' +
            '| 访问实例成员 | 否 | 是 |\n' +
            '| 内存位置 | 方法区/Metaspace | 堆 |\n' +
            '| 生命周期 | 类加载到卸载 | 对象创建到 GC |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：实例计数器**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        new User();\n        new User();\n        System.out.println("创建对象数: " + User.getCount());  // 2\n    }\n}\nclass User {\n    private static int count = 0;  // 静态计数器\n    User() { count++; }\n    static int getCount() { return count; }\n}\n```\n\n' +
            '**示例 2：工具类与常量**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(MathUtils.square(5));      // 25\n        System.out.println(MathUtils.max(3, 7));      // 7\n        System.out.println(Config.MAX_RETRY);         // 3\n    }\n}\n// 工具类：构造器私有，全 static 方法\nfinal class MathUtils {\n    private MathUtils() {}  // 禁止实例化\n    static int square(int n) { return n * n; }\n    static int max(int a, int b) { return a > b ? a : b; }\n}\nclass Config {\n    public static final int MAX_RETRY = 3;  // 常量\n}\n```\n\n' +
            '**示例 3：静态块初始化**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("main 开始");\n        System.out.println("配置: " + AppConfig.URL);\n    }\n}\nclass AppConfig {\n    static String URL;  // 静态字段\n    static {            // 静态块：类加载时执行一次\n        System.out.println("AppConfig 类加载，初始化 URL");\n        URL = "jdbc:mysql://localhost:3306/db";\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **静态方法无 this**——static 方法属于类，没有当前对象引用，不能访问实例字段/方法。\n' +
            '2. **静态字段线程不安全**——共享变量被多线程修改需同步（volatile/synchronized）或用 AtomicXxx。\n' +
            '3. **静态块执行时机**——类首次加载时执行一次，常用于加载配置、注册驱动（如 JDBC `Class.forName`）。\n' +
            '4. **工具类构造器私有**——纯工具类（如 Math、Arrays）应 private 构造器，禁止 new 实例化。\n' +
            '5. **常量命名全大写**——`public static final` 常量用 `UPPER_SNAKE_CASE`，如 `MAX_VALUE`。\n' +
            '6. **避免滥用 static**——static 方法难以 mock 测试、难以多态，业务逻辑应避免 static，用 Spring Bean 注入。\n' +
            '7. **静态内部类 vs 内部类**——static 嵌套类不持有外部类引用，可独立创建；非静态内部类隐式持有外部引用，易内存泄漏。\n' +
            '8. **类加载顺序**——父类静态 → 子类静态 → 父类实例 → 父类构造 → 子类实例 → 子类构造。\n\n' +
            '## 实际应用\n\n' +
            '1. **工具类**：`Math`、`Arrays`、`Collections`、`Objects` 全是 static 方法，通过类名调用。\n' +
            '2. **常量类**：`Integer.MAX_VALUE`、`Math.PI`、自定义 `AppConstants` 集中管理常量。\n' +
            '3. **单例模式**：`static` 字段持有唯一实例 + `static getInstance()`，如 `Runtime.getRuntime()`。\n' +
            '4. **工厂方法**：`List.of()`、`Optional.of()`、`Collections.emptyList()` 是 static 工厂方法。\n' +
            '5. **JDBC 驱动注册**：`Class.forName("com.mysql.cj.jdbc.Driver")` 触发静态块注册驱动。\n' +
            '6. **静态内部类 Builder**：`User.Builder` 是 static 嵌套类，避免持有外部引用。\n\n' +
            '## 扩展知识\n\n' +
            '- **static import**：`import static java.lang.Math.*;` 后可直接写 `sqrt(4)`，少打字但慎用（影响可读性）。\n' +
            '- **类加载触发时机**：new 对象、访问静态字段/方法、Class.forName、子类加载触发父类加载。\n' +
            '- **静态字段与 GC**——静态字段引用的对象一直可达，不会被 GC，注意 static 集合的内存泄漏风险。\n' +
            '- **static 与多态冲突**——静态方法是静态绑定（看引用类型），实例方法是动态绑定（看对象类型），重写静态方法实际是隐藏。\n' +
            '- **枚举本质**——enum 实际是 static final 实例，天然单例，是实现单例模式的最佳方式。\n' +
            '- **static 的测试困境**——静态方法无法通过接口 mock，所以可测试性差，现代代码倾向用依赖注入替代 static。',
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
            '## 概念详解\n\n' +
            '继承（Inheritance）是面向对象的核心特性之一，允许子类继承父类的字段和方法，实现代码复用。' +
            'Java 用 `extends` 关键字表示继承：`class Dog extends Animal`。' +
            'Java 是单继承——一个类只能继承一个直接父类，但可以通过接口实现多重继承的效果。' +
            '所有类的根父类是 `Object`（不写 extends 也隐式继承 Object）。\n\n' +
            '子类可以调用父类的非 private 成员。`super` 关键字用于在子类中访问父类：' +
            '`super.field` 访问父类字段、`super.method()` 调用父类方法、' +
            '`super(...)` 调用父类构造方法（必须是子类构造方法的第一条语句）。' +
            '如果子类构造方法没有显式调用 super(...)，编译器自动插入 `super()` 调用无参构造。\n\n' +
            '方法重写（Override）是子类重新定义继承自父类的方法，要求方法签名相同。' +
            '重写的规则：方法名、参数列表必须相同；返回类型可以相同或是子类型（协变返回）；' +
            '访问权限不能比父类更严格；不能重写 final/static/private 方法；抛出异常不能更宽。' +
            '建议始终使用 `@Override` 注解，让编译器帮你检查是否正确重写。' +
            '继承建立了 "is-a" 关系：Dog is an Animal；组合建立 "has-a" 关系，应优先组合。\n\n' +
            '## 语法说明\n\n' +
            '### 继承语法\n\n' +
            '```java\nclass 子类 extends 父类 {\n    // 新增字段和方法\n    // 重写父类方法\n    @Override\n    返回类型 方法名(参数) { /* super.方法() 可调用父类原方法 */ }\n}\n```\n\n' +
            '### super 用法\n\n' +
            '```java\nsuper.字段;          // 访问父类字段\nsuper.方法();       // 调用父类方法\nsuper(参数);        // 调用父类构造（子类构造器首行）\n```\n\n' +
            '### 重写规则表\n\n' +
            '| 项 | 要求 |\n' +
            '|----|------|\n' +
            '| 方法名 | 必须相同 |\n' +
            '| 参数列表 | 必须相同 |\n' +
            '| 返回类型 | 相同或协变（子类型） |\n' +
            '| 访问权限 | 不能更严格（可更宽松） |\n' +
            '| 异常 | 不能抛更宽的检查异常 |\n' +
            '| final 方法 | 不能重写 |\n' +
            '| static 方法 | 不能重写（只能隐藏） |\n' +
            '| private 方法 | 不能重写（子类访问不到） |\n\n' +
            '### 重载 vs 重写\n\n' +
            '| 特性 | 重载（Overload） | 重写（Override） |\n' +
            '|------|------------------|------------------|\n' +
            '| 位置 | 同类 | 父子类 |\n' +
            '| 参数 | 必须不同 | 必须相同 |\n' +
            '| 返回类型 | 无关 | 相同/协变 |\n' +
            '| 绑定 | 编译期 | 运行期 |\n' +
            '| 注解 | 无 | `@Override` |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：继承与方法重写**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Animal();\n        Animal d = new Dog();  // 向上转型\n        a.speak();  // 动物叫\n        d.speak();  // 汪汪汪（多态）\n    }\n}\nclass Animal {\n    void speak() { System.out.println("动物叫"); }\n}\nclass Dog extends Animal {\n    @Override\n    void speak() { System.out.println("汪汪汪"); }\n}\n```\n\n' +
            '**示例 2：super 调用父类**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        new Dog("旺财", 3).show();\n    }\n}\nclass Animal {\n    String name;\n    Animal(String name) { this.name = name; }\n    void eat() { System.out.println(name + " 在吃东西"); }\n}\nclass Dog extends Animal {\n    int age;\n    Dog(String name, int age) {\n        super(name);  // 调用父类构造，必须首行\n        this.age = age;\n    }\n    void show() {\n        super.eat();  // 调用父类方法\n        System.out.println(name + " 今年 " + age + " 岁");\n    }\n}\n```\n\n' +
            '**示例 3：协变返回类型**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        new Cat().create();  // 小猫诞生\n    }\n}\nclass Animal { Animal create() { return new Animal(); } }\nclass Cat extends Animal {\n    @Override\n    Cat create() { return new Cat(); }  // 协变返回：Cat 是 Animal 子类\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **单继承限制**——一个类只能 extends 一个父类；需要多继承用接口（implements 多个）。\n' +
            '2. **构造方法不继承**——子类不继承父类构造方法，但子类构造器首行隐式或显式调用 super()。\n' +
            '3. **父类无参构造缺失**——若父类只有有参构造，子类构造器必须显式 super(参数)，否则编译错误。\n' +
            '4. **@Override 注解**——重写时务必加，能防止拼写错误（写成新方法而非重写）。\n' +
            '5. **私有方法不重写**——private 方法对子类不可见，"重写"它只是定义了新方法。\n' +
            '6. **字段不能重写**——字段是隐藏（hide）不是重写，访问字段看引用类型，这是陷阱。\n' +
            '7. **优先组合而非继承**——继承强耦合（子类依赖父类实现），组合更灵活，"is-a" 用继承，"has-a" 用组合。\n' +
            '8. **继承层次不宜过深**——超过 3 层的继承链难维护，倾向接口 + 组合。\n\n' +
            '## 实际应用\n\n' +
            '1. **框架基类**：Spring 的 `BaseController`、`BaseService` 提取公共逻辑，子类继承复用。\n' +
            '2. **模板方法模式**：父类定义算法骨架，子类重写某些步骤，如 `HttpServlet.service` 分发到 doGet/doPost。\n' +
            '3. **异常体系**：`Exception` → `RuntimeException` → `NullPointerException`，自定义异常 extends Exception/RuntimeException。\n' +
            '4. **IO 流类库**：`InputStream` → `FileInputStream`/`BufferedInputStream`，装饰器模式基于继承。\n' +
            '5. **集合框架**：`AbstractList` → `ArrayList`/`LinkedList`，复用骨架代码。\n\n' +
            '## 扩展知识\n\n' +
            '- **final 类与方法**：`final class` 不可继承（如 String、Integer），`final` 方法不可重写，防止被篡改。\n' +
            '- **Object 核心方法**：`equals`/`hashCode`/`toString`/`getClass`/`clone`，子类常需重写前三个。\n' +
            '- **多态机制**——运行期根据对象实际类型（而非引用类型）调用重写方法，靠虚方法表实现。\n' +
            '- **密封类（Java 17+）**：`sealed class Shape permits Circle, Square` 限定子类，配合 switch 穷尽匹配。\n' +
            '- **Liskov 替换原则**——子类必须能替换父类而不破坏程序正确性，重写不能改变父类约定（如抛新异常、改副作用）。\n' +
            '- **组合优于继承**——《Effective Java》_item 18，继承破坏封装（子类依赖父类实现），用组合 + 接口更灵活。',
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
            '## 概念详解\n\n' +
            '多态（Polymorphism）是面向对象最强大的特性之一，指同一个方法调用在不同对象上表现出不同行为。' +
            'Java 的多态通过"父类引用指向子类对象"实现：`Animal a = new Dog();`。' +
            '此时调用的方法若被子类重写，会执行子类的版本——这叫动态绑定（Dynamic Binding）。\n\n' +
            '多态的三个前提：1) 继承关系；2) 方法重写；3) 父类引用指向子类对象（向上转型）。' +
            '编译时看左边的类型（父类），运行时看右边的类型（子类）。' +
            '编译器只检查父类是否有该方法，实际执行哪个版本由运行时的对象类型决定。' +
            '这就是"编译看左边，运行看右边"的口诀。\n\n' +
            '多态的威力在于：方法参数可声明为父类型，接收任何子类对象。' +
            '例如 `void feed(Animal a)` 可接收 Dog、Cat、Bird 等任何动物。' +
            '新增动物类型时不需要修改 feed 方法——这就是"对扩展开放，对修改关闭"（OCP）。' +
            '`instanceof` 运算符检查对象的真实类型，多态场景中常用于类型判断和向下转型前的安全检查。\n\n' +
            '## 语法说明\n\n' +
            '### 向上转型与向下转型\n\n' +
            '```java\nAnimal a = new Dog();   // 向上转型（隐式，安全）\nDog d = (Dog) a;         // 向下转型（显式，需确保真实是 Dog）\nif (a instanceof Dog) d = (Dog) a;  // 安全转型\n```\n\n' +
            '### instanceof 演进\n\n' +
            '```java\nif (obj instanceof Dog) { Dog d = (Dog) obj; }   // 传统写法\nif (obj instanceof Dog d) { /* d 已绑定 */ }       // Java 16+ 模式匹配\n```\n\n' +
            '### 多态绑定规则\n\n' +
            '| 成员 | 绑定方式 | 说明 |\n' +
            '|------|----------|------|\n' +
            '| 实例方法 | 动态绑定（运行看右） | 多态的核心 |\n' +
            '| 静态方法 | 静态绑定（编译看左） | 看引用类型 |\n' +
            '| 字段 | 静态绑定（编译看左） | 看引用类型 |\n' +
            '| private 方法 | 静态绑定 | 不可重写 |\n\n' +
            '### 转型类型\n\n' +
            '| 转型 | 方向 | 是否隐式 | 风险 |\n' +
            '|------|------|----------|------|\n' +
            '| 向上转型 | 子→父 | 是 | 无（安全） |\n' +
            '| 向下转型 | 父→子 | 否（需强转） | ClassCastException |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：多态基础**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Animal a1 = new Dog();\n        Animal a2 = new Cat();\n        a1.speak();  // 汪汪汪\n        a2.speak();  // 喵喵喵\n    }\n}\nclass Animal { void speak() { System.out.println("动物叫"); } }\nclass Dog extends Animal { void speak() { System.out.println("汪汪汪"); } }\nclass Cat extends Animal { void speak() { System.out.println("喵喵喵"); } }\n```\n\n' +
            '**示例 2：多态参数（开闭原则）**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        feed(new Dog());\n        feed(new Cat());\n    }\n    // 参数声明为父类，可接收任何子类\n    static void feed(Animal a) { a.speak(); System.out.println("喂食完成"); }\n}\n```\n\n' +
            '**示例 3：instanceof 与向下转型**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        if (a instanceof Dog) {\n            Dog d = (Dog) a;  // 安全向下转型\n            d.fetch();        // 调用 Dog 特有方法\n        }\n        // Java 16+ 模式匹配\n        if (a instanceof Dog d) {\n            d.fetch();\n        }\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **多态只对实例方法生效**——字段和静态方法看引用类型（左边），新手常误以为字段也多态。\n' +
            '2. **向下转型需先 instanceof**——直接强转错误类型会抛 ClassCastException，运行时崩溃。\n' +
            '3. **不能调用子类特有方法**——`Animal a = new Dog(); a.fetch();` 编译错误，编译期只看父类有没此方法。\n' +
            '4. **多态与构造器**——构造器调用若调用了可重写方法，可能产生意外行为（子类还未初始化），应避免在构造器调用可重写方法。\n' +
            '5. **多态破坏封装**——子类可改变父类行为，设计父类时要考虑被重写的影响，或用 final 锁定。\n' +
            '6. **过度用 instanceof 是坏味道**——大量 instanceof + 强转说明该用多态方法或访客模式，重构消除分支。\n' +
            '7. **equals 的多态陷阱**——重写 equals 时参数必须是 Object（重写），写成 `equals(MyClass)` 是重载不是重写。\n' +
            '8. **Java 16+ 模式匹配 instanceof**——`if (obj instanceof Dog d)` 简化转型，推荐使用。\n\n' +
            '## 实际应用\n\n' +
            '1. **策略模式**：定义接口，不同策略实现类，运行时传入不同实现，如支付方式切换。\n' +
            '2. **模板方法模式**：父类定义流程，子类重写步骤，HttpServlet 的 service/doGet/doPost 是经典。\n' +
            '3. **事件监听**：`MouseListener` 接收 MouseEvent，不同监听器多态响应。\n' +
            '4. **集合的多态**：`List<Animal> list` 可存 Dog、Cat，遍历时 `a.speak()` 各自表现。\n' +
            '5. **Spring 的多态**：`@Autowired PaymentService` 注入不同实现（支付宝/微信），通过接口编程。\n\n' +
            '## 扩展知识\n\n' +
            '- **动态绑定原理**——JVM 通过虚方法表（vtable）查实际类的方法实现，每次调用有少量开销，JIT 会做内联优化。\n' +
            '- **sealed + 模式匹配**：Java 17+ 密封类配合 `switch (obj) case Dog d -> ...` 实现穷尽多态分派。\n' +
            '- **访客模式**——当需要根据对象类型做不同操作且不想在类中加方法时，用 Visitor 模式替代 instanceof 链。\n' +
            '- **多态 vs 函数式**——Lambda + 函数式接口也能实现"同一调用不同行为"，更轻量，适合无状态策略。\n' +
            '- **里氏替换原则（LSP）**——子类不能违反父类约定（前置条件不能更严、后置条件不能更弱），否则多态会出错。\n' +
            '- **多态与性能**——虚方法调用比直接调用慢（查表），JIT 通过类层次分析（CHA）做去虚化优化。',
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
            '## 概念详解\n\n' +
            '抽象类用 `abstract` 关键字修饰，不能被实例化（不能 new）。' +
            '抽象类可以包含抽象方法（只有声明，没有实现，用 abstract 修饰）和具体方法。' +
            '子类继承抽象类后，必须实现所有抽象方法（除非子类也是抽象类）。' +
            '抽象类是"模板"——定义了子类必须实现的行为规范，同时提供通用的实现。\n\n' +
            '抽象类与普通类的区别：1) 不能创建实例；2) 可以有抽象方法；3) 可以有构造方法（供子类 super 调用）。' +
            '抽象方法不能有方法体，以分号结束。抽象方法必须位于抽象类中（普通类不能有抽象方法）。' +
            '抽象类的构造方法在子类实例化时通过 super 调用，不能直接 new。\n\n' +
            '抽象类最经典的应用是模板方法模式（Template Method Pattern）：' +
            '父类定义算法骨架（用具体方法），将某些步骤延迟到子类实现（用抽象方法）。' +
            '例如，AbstractBatchProcessor 定义 `process()` 调用 `read()` → `transform()` → `write()`，' +
            '具体如何读取、转换、写入由子类决定。这保证了算法结构不变，细节可定制。\n\n' +
            '## 语法说明\n\n' +
            '### 抽象类与抽象方法\n\n' +
            '```java\nabstract class 类名 {\n    abstract 返回类型 方法名(参数);  // 抽象方法，无方法体\n    返回类型 方法名(参数) { /* 具体方法 */ }\n    // 抽象类可以有构造方法、字段\n    类名(参数) { /* 初始化 */ }\n}\n```\n\n' +
            '### 模板方法模式结构\n\n' +
            '```java\nabstract class Template {\n    // 模板方法：定义骨架，通常 final 防止子类修改流程\n    public final void process() {\n        step1();\n        step2();\n        hook();  // 钩子方法（可选）\n    }\n    abstract void step1();  // 子类必须实现\n    abstract void step2();\n    void hook() {}          // 默认空实现，子类可选重写\n}\n```\n\n' +
            '### 抽象类 vs 普通类 vs 接口\n\n' +
            '| 特性 | 普通类 | 抽象类 | 接口 |\n' +
            '|------|--------|--------|------|\n' +
            '| 实例化 | 可以 | 不可以 | 不可以 |\n' +
            '| 多继承 | 否 | 否（单继承） | 是（多实现） |\n' +
            '| 字段 | 任意 | 任意 | public static final 常量 |\n' +
            '| 方法实现 | 有 | 可有可无 | default/static/private 可有 |\n' +
            '| 构造方法 | 有 | 有 | 无 |\n' +
            '| abstract 方法 | 无 | 可有 | 隐式 abstract |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：抽象类基础**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Shape s1 = new Circle(5);\n        Shape s2 = new Rectangle(4, 6);\n        System.out.println(s1.area());  // 78.5\n        System.out.println(s2.area());  // 24\n    }\n}\nabstract class Shape {\n    abstract double area();          // 抽象方法\n    String describe() { return "面积: " + area(); }  // 具体方法\n}\nclass Circle extends Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    double area() { return Math.PI * r * r; }\n}\nclass Rectangle extends Shape {\n    double w, h;\n    Rectangle(double w, double h) { this.w = w; this.h = h; }\n    double area() { return w * h; }\n}\n```\n\n' +
            '**示例 2：模板方法模式**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        new CsvProcessor().process();\n        new JsonProcessor().process();\n    }\n}\nabstract class DataProcessor {\n    public final void process() {  // 模板：固定流程\n        read();\n        transform();\n        write();\n    }\n    abstract void read();\n    abstract void transform();\n    void write() { System.out.println("写入完成"); }  // 通用实现\n}\nclass CsvProcessor extends DataProcessor {\n    void read() { System.out.println("读取 CSV"); }\n    void transform() { System.out.println("转换 CSV 数据"); }\n}\nclass JsonProcessor extends DataProcessor {\n    void read() { System.out.println("读取 JSON"); }\n    void transform() { System.out.println("转换 JSON 数据"); }\n}\n```\n\n' +
            '**示例 3：抽象类构造方法**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        new Sub("测试").show();\n    }\n}\nabstract class Base {\n    String name;\n    Base(String name) { this.name = name; }  // 抽象类构造器\n    abstract void show();\n}\nclass Sub extends Base {\n    Sub(String name) { super(name); }  // 子类调用父类构造\n    void show() { System.out.println("名字: " + name); }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **抽象类不能实例化**——`new Shape()` 编译错误，必须通过具体子类创建。\n' +
            '2. **子类必须实现所有抽象方法**——否则子类也得声明 abstract，否则编译错误。\n' +
            '3. **抽象类可有构造方法**——供子类 super 调用初始化父类字段，但不能直接 new。\n' +
            '4. **abstract 不能与 final/private/static 共存**——final 禁止重写、private 不可见、static 不可重写，与 abstract 矛盾。\n' +
            '5. **抽象类 vs 接口选择**——有共享字段/构造逻辑/部分实现用抽象类；纯行为契约、多继承用接口。\n' +
            '6. **模板方法用 final**——模板流程方法应 final，防止子类破坏算法结构。\n' +
            '7. **抽象类仍可有 main**——抽象类不能 new，但可以有 static main 方法（通过类名调用）。\n' +
            '8. **Java 8 后接口也能有默认方法**——接口与抽象类界限模糊，倾向用接口 + default 方法。\n\n' +
            '## 实际应用\n\n' +
            '1. **集合框架**：`AbstractList`、`AbstractMap` 提供骨架实现，子类只需实现少量方法（如 `LinkedList`）。\n' +
            '2. **JDK IO 流**：`AbstractInputStream` 等抽象类定义骨架，子类实现具体读写。\n' +
            '3. **HttpServlet**：抽象类定义 `service()` 分发到 doGet/doPost，子类重写对应方法。\n' +
            '4. **Spring 框架**：`AbstractApplicationContext`、`AbstractController` 提供模板，子类扩展。\n' +
            '5. **批处理框架**：Spring Batch 的 `AbstractJob`、`AbstractItemReader` 是模板方法模式典型。\n\n' +
            '## 扩展知识\n\n' +
            '- **接口的 default 方法（Java 8+）**：接口可提供默认实现，多继承冲突时需子类显式覆盖解决。\n' +
            '- **sealed 抽象类（Java 17+）**：`sealed abstract class` 限定子类集合，配合模式匹配实现穷尽。\n' +
            '- **钩子方法**——模板方法中提供默认空实现的方法，子类可选重写以影响流程（如 `isLogEnabled()`）。\n' +
            '- **抽象类与多态**——抽象类引用指向子类对象是多态的常见用法，编译期看抽象类，运行期看子类。\n' +
            '- **抽象类设计原则**——抽象类应体现"是什么"（is-a），接口体现"能做什么"（can-do），两者常配合使用。\n' +
            '- **SOLID 之依赖倒置**——高层模块依赖抽象（抽象类/接口）而非具体类，降低耦合，是框架设计核心。',
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
            '## 概念详解\n\n' +
            '接口（Interface）是 Java 中定义行为契约的机制。接口中所有方法默认是 public abstract（Java 8 前），' +
            '所有字段默认是 public static final。类用 `implements` 关键字实现接口，' +
            '必须实现接口中所有抽象方法。与继承不同，一个类可以实现多个接口，解决了 Java 单继承的限制。\n\n' +
            'Java 8 为接口引入了默认方法（default method）和静态方法。默认方法用 `default` 关键字修饰，' +
            '有方法体，实现类可直接使用或重写。这解决了接口演进的兼容性问题——' +
            '新增方法时不必修改所有实现类。Java 9 进一步允许接口中的 private 方法（供 default 方法复用）。\n\n' +
            '接口 vs 抽象类：接口定义"能做什么"（can-do），抽象类定义"是什么"（is-a）。' +
            '接口适合定义跨类型的行为契约（如 Comparable、Runnable、Serializable）；' +
            '抽象类适合在相关类型间共享代码。函数式接口（只有一个抽象方法的接口）是 Lambda 表达式的基础。' +
            '实际开发中，接口是解耦的关键——面向接口编程而非面向实现编程。\n\n' +
            '## 语法说明\n\n' +
            '### 接口定义与实现\n\n' +
            '```java\ninterface 接口名 {\n    // 常量（隐式 public static final）\n    int MAX = 100;\n    // 抽象方法（隐式 public abstract）\n    void doSomething();\n    // 默认方法（Java 8+）\n    default void defaultMethod() { /* 实现 */ }\n    // 静态方法（Java 8+）\n    static void staticMethod() { /* 实现 */ }\n    // 私有方法（Java 9+，供 default 复用）\n    private void helper() { /* 实现 */ }\n}\nclass 类名 implements 接口1, 接口2 { /* 实现所有抽象方法 */ }\n```\n\n' +
            '### 接口继承接口\n\n' +
            '```java\ninterface A { void a(); }\ninterface B extends A { void b(); }  // 接口可多继承接口\nclass C implements B { public void a() {} public void b() {} }  // 实现所有\n```\n\n' +
            '### 接口方法类型\n\n' +
            '| 方法类型 | 修饰符 | 版本 | 说明 |\n' +
            '|----------|--------|------|------|\n' +
            '| 抽象方法 | 隐式 public abstract | 所有 | 实现类必须实现 |\n' +
            '| 默认方法 | default | Java 8+ | 可选重写 |\n' +
            '| 静态方法 | static | Java 8+ | 接口名调用 |\n' +
            '| 私有方法 | private | Java 9+ | 供 default 复用 |\n\n' +
            '### 接口 vs 抽象类\n\n' +
            '| 特性 | 接口 | 抽象类 |\n' +
            '|------|------|--------|\n' +
            '| 多继承 | 是（implements 多个） | 否（extends 单个） |\n' +
            '| 字段 | public static final 常量 | 任意字段 |\n' +
            '| 构造方法 | 无 | 有 |\n' +
            '| 状态 | 无状态 | 可有状态 |\n' +
            '| 语义 | can-do（能力） | is-a（是什么） |\n' +
            '| 适用 | 跨类型契约 | 同族共享代码 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：接口定义与多实现**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Swimmable s = new Fish();\n        s.swim();\n        Flyable f = new Bird();\n        f.fly();\n        Duck d = new Duck();  // 多接口\n        d.swim(); d.fly();\n    }\n}\ninterface Swimmable { void swim(); }\ninterface Flyable { void fly(); }\nclass Fish implements Swimmable { public void swim() { System.out.println("鱼游泳"); } }\nclass Bird implements Flyable { public void fly() { System.out.println("鸟飞行"); } }\nclass Duck implements Swimmable, Flyable {\n    public void swim() { System.out.println("鸭子游泳"); }\n    public void fly() { System.out.println("鸭子飞行"); }\n}\n```\n\n' +
            '**示例 2：默认方法**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        MyList list = new MyList();\n        list.add("a");\n        list.add("b");\n        System.out.println(list.isEmpty());  // false\n        list.forEach();  // 默认方法\n    }\n}\ninterface MyList {\n    void add(String s);\n    boolean isEmpty();\n    default void forEach() { System.out.println("遍历（默认实现）"); }\n}\nclass MyList implements MyList {\n    public void add(String s) {}\n    public boolean isEmpty() { return false; }\n}\n```\n\n' +
            '**示例 3：Comparable 排序**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Student> list = new ArrayList<>();\n        list.add(new Student("张三", 90));\n        list.add(new Student("李四", 85));\n        Collections.sort(list);  // 按 score 排序\n        System.out.println(list);\n    }\n}\nclass Student implements Comparable<Student> {\n    String name; int score;\n    Student(String n, int s) { name = n; score = s; }\n    public int compareTo(Student o) { return this.score - o.score; }\n    public String toString() { return name + ":" + score; }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **实现方法必须 public**——接口方法隐式 public，实现类必须显式 public，否则编译错误（不能降低可见性）。\n' +
            '2. **字段是常量**——接口字段隐式 public static final，必须初始化，不能修改。\n' +
            '3. **默认方法冲突**——实现两个接口有同名默认方法时，必须重写该方法解决冲突，否则编译错误。\n' +
            '4. **接口不能有实例字段**——接口无状态，字段只能是常量；需要状态用抽象类。\n' +
            '5. **函数式接口**——只有一个抽象方法的接口（可有多个 default），可用 `@FunctionalInterface` 校验，Lambda 的基础。\n' +
            '6. **接口演进**——给已发布接口加抽象方法会破坏实现类；加 default 方法则兼容，是接口演进推荐方式。\n' +
            '7. **面向接口编程**——`List list = new ArrayList<>()`，变量类型用接口，灵活切换实现。\n' +
            '8. **接口无构造方法**——接口不能 new，但可声明引用指向实现类对象。\n\n' +
            '## 实际应用\n\n' +
            '1. **Java 标准接口**：`Comparable`/`Comparator`（排序）、`Runnable`/`Callable`（并发）、`Iterable`（遍历）、`AutoCloseable`（try-with-resources）。\n' +
            '2. **Spring 的接口编程**：`UserService` 接口 + `UserServiceImpl` 实现，依赖注入面向接口，便于替换和 mock。\n' +
            '3. **策略模式**：定义 `Strategy` 接口，不同算法实现，运行时切换，如折扣计算策略。\n' +
            '4. **回调机制**：`Comparator`、`Consumer` 等接口作为回调，Lambda 简化实现。\n' +
            '5. **Marker 接口**：`Serializable`、`Cloneable` 无方法，仅作为标记声明能力。\n\n' +
            '## 扩展知识\n\n' +
            '- **函数式接口（Java 8+）**：`@FunctionalInterface` 标注，如 `Runnable`、`Comparator`、`Supplier`/`Consumer`/`Function`，是 Lambda 的目标类型。\n' +
            '- **默认方法与多继承冲突**：类优先于接口默认方法；两个接口冲突需实现类显式重写；`Interface.super.method()` 调用指定接口默认方法。\n' +
            '- **sealed 接口（Java 17+）**：`sealed interface` permits 限定实现类，配合 switch 模式匹配实现穷尽。\n' +
            '- **接口与反射**——`isInterface()`、`getInterfaces()`，动态代理（Proxy）基于接口生成实现。\n' +
            '- **接口的设计意义**——接口是 Java 解耦和多态的核心，依赖倒置原则（DIP）要求依赖接口而非实现。\n' +
            '- **默认方法的陷阱**——默认方法可被实现类继承，若设计不当会导致意外行为；慎用，优先保持接口精简。',
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
            '## 概念详解\n\n' +
            '异常（Exception）是程序执行过程中的错误事件。Java 的异常处理机制让错误处理代码与业务逻辑分离，' +
            '使代码更清晰。异常处理的核心结构：`try` 包裹可能出错的代码，`catch` 捕获并处理异常，' +
            '`finally` 无论是否异常都会执行（通常用于资源释放）。\n\n' +
            'Java 异常体系：`Throwable` 是根类，分为 `Error`（系统级错误，如 OutOfMemoryError，不应捕获）' +
            '和 `Exception`。Exception 分为：' +
            '受检异常（Checked Exception，如 IOException，必须 try-catch 或 throws 声明）和' +
            '非受检异常（RuntimeException，如 NullPointerException、ArrayIndexOutOfBoundsException，编译器不强制处理）。\n\n' +
            '`throw` 关键字手动抛出异常，`throws` 关键字声明方法可能抛出的异常。' +
            '自定义异常类继承 Exception（受检）或 RuntimeException（非受检）。' +
            'Java 7 引入了 try-with-resources 语法，自动关闭实现了 AutoCloseable 的资源，' +
            '大大简化了资源管理代码。多重 catch 时，子类异常必须在父类异常之前捕获。\n\n' +
            '## 语法说明\n\n' +
            '### try-catch-finally\n\n' +
            '```java\ntry {\n    // 可能抛异常的代码\n} catch (具体异常类型 e) {\n    // 处理\n} catch (Exception e) {  // 父类在后\n    // 兜底处理\n} finally {\n    // 总会执行（资源释放）\n}\n```\n\n' +
            '### throw 与 throws\n\n' +
            '```java\n// 抛出异常\nthrow new IllegalArgumentException("参数非法");\n// 声明异常\nvoid readFile(String path) throws IOException { /* ... */ }\n```\n\n' +
            '### try-with-resources（Java 7+）\n\n' +
            '```java\ntry (BufferedReader br = new BufferedReader(new FileReader(path))) {\n    // 使用资源，自动关闭\n}  // 无需 finally，br 自动 close()\n// 多资源\ntry (FileInputStream in = new FileInputStream(a);\n     FileOutputStream out = new FileOutputStream(b)) {\n    // ...\n}\n```\n\n' +
            '### 异常体系\n\n' +
            '| 异常 | 类型 | 是否必须处理 | 示例 |\n' +
            '|------|------|--------------|------|\n' +
            '| Error | 系统级 | 否（不应捕获） | OutOfMemoryError |\n' +
            '| Checked Exception | 受检 | 是 | IOException, SQLException |\n' +
            '| RuntimeException | 非受检 | 否 | NullPointerException |\n\n' +
            '### 常见异常\n\n' +
            '| 异常 | 触发场景 |\n' +
            '|------|----------|\n' +
            '| NullPointerException | 调用 null 引用成员 |\n' +
            '| ArrayIndexOutOfBoundsException | 数组越界 |\n' +
            '| ClassCastException | 错误类型转换 |\n' +
            '| NumberFormatException | 字符串转数字失败 |\n' +
            '| ArithmeticException | 算术错误（如除零） |\n' +
            '| IllegalArgumentException | 非法参数 |\n' +
            '| IOException | IO 操作失败 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：try-catch-finally**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        try {\n            System.out.println(arr[5]);  // 越界\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println("捕获越界: " + e.getMessage());\n        } finally {\n            System.out.println("finally 执行");\n        }\n    }\n}\n```\n\n' +
            '**示例 2：throw/throws 与自定义异常**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            withdraw(-100);\n        } catch (InvalidAmountException e) {\n            System.out.println("捕获: " + e.getMessage());\n        }\n    }\n    static void withdraw(double amount) throws InvalidAmountException {\n        if (amount <= 0) throw new InvalidAmountException("金额必须为正");\n        System.out.println("取款: " + amount);\n    }\n}\nclass InvalidAmountException extends Exception {\n    InvalidAmountException(String msg) { super(msg); }\n}\n```\n\n' +
            '**示例 3：多重 catch 与 try-with-resources**\n\n```java\nimport java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        // 多重 catch（子类在前）\n        try {\n            String s = null;\n            s.length();\n        } catch (NullPointerException e) {\n            System.out.println("空指针");\n        } catch (Exception e) {\n            System.out.println("其他异常");\n        }\n        // try-with-resources 自动关闭\n        try (BufferedReader br = new BufferedReader(new StringReader("hello"))) {\n            System.out.println(br.readLine());\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **子类异常在前**——多重 catch 时子类必须先于父类捕获，否则编译错误（不可达代码）。\n' +
            '2. **finally 总会执行**——即使 try 里 return 了，finally 也会执行（在 return 之前）；但若 finally 也 return 会覆盖 try 的返回值，应避免。\n' +
            '3. **不要捕获 Error**——Error 是系统级错误（OOM、StackOverflow），捕获也无意义，应让程序崩溃。\n' +
            '4. **不要用异常控制流程**——异常处理性能差，正常逻辑分支应使用 if，异常用于真正的异常情况。\n' +
            '5. **异常要带上下文**——抛异常时附带信息（参数值、状态），便于排查；catch 后应记录日志或重新抛出，别空 catch 吞掉。\n' +
            '6. **受检异常的争议**——受检异常强制处理，但易导致代码冗余；现代框架倾向用非受检异常（RuntimeException）。\n' +
            '7. **try-with-resources 优先**——涉及资源关闭（流、连接）一律用 try-with-resources，避免泄漏。\n' +
            '8. **multi-catch（Java 7+）**——`catch (IOException | SQLException e)` 一次捕获多种异常。\n\n' +
            '## 实际应用\n\n' +
            '1. **参数校验**：`throw new IllegalArgumentException("userId 不能为 null")` 快速失败，避免后续 NPE。\n' +
            '2. **业务异常**：自定义 BusinessException、OrderNotFoundException 表达业务规则违反，全局异常处理器统一处理。\n' +
            '3. **资源管理**：IO 流、数据库连接、网络套接字用 try-with-resources 自动关闭，杜绝泄漏。\n' +
            '4. **Spring 全局异常**：`@ControllerAdvice` + `@ExceptionHandler` 统一捕获异常返回标准错误响应。\n' +
            '5. **重试机制**：捕获网络异常后重试，配合指数退避，提升健壮性。\n\n' +
            '## 扩展知识\n\n' +
            '- **异常链**：`throw new RuntimeException("包装", cause)` 保留原始异常，便于追踪根因。\n' +
            '- **异常性能**——异常抛出需构造栈轨迹（fillInStackTrace），开销大；高性能场景可用预构造异常或重写 fillInStackTrace。\n' +
            '- **Checked vs Unchecked 之争**——Java 独有 Checked 异常，C#/Kotlin/Scala 都去掉了，社区争议较大。\n' +
            '- **finally 吞异常陷阱**——finally 中若抛异常会覆盖 try 中的异常，try-with-resources 避免此问题。\n' +
            '- **异常断言**：`assert` 默认关闭（需 -ea），生产用 `Objects.requireNonNull`/`IllegalArgumentException` 替代。\n' +
            '- **StackWalker（Java 9+）**：高效遍历栈帧，比 getStackTrace 性能好，用于日志和诊断。',
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
            '## 概念详解\n\n' +
            '`List` 是 Java 集合框架中最常用的接口，表示有序、可重复的元素集合。' +
            '`ArrayList` 是 List 最常用的实现，底层是动态数组——容量不足时自动扩容（通常扩容 1.5 倍）。' +
            'ArrayList 随机访问 O(1)，尾部插入 O(1) 均摊，中间插入/删除 O(n)。' +
            'LinkedList 是 List 的另一个实现，底层是双向链表，适合频繁的头尾插入删除。\n\n' +
            'ArrayList 常用操作：`add(e)` 添加元素、`get(i)` 获取元素、`set(i, e)` 修改元素、' +
            '`remove(i)` 或 `remove(e)` 删除元素、`size()` 获取大小、`contains(e)` 判断是否包含、' +
            '`indexOf(e)` 查找索引。遍历 List 可以用 for 索引、增强 for 循环或迭代器。' +
            '泛型 `List<String>` 限定元素类型，避免运行时类型转换错误。\n\n' +
            'ArrayList vs 数组：数组长度固定，ArrayList 长度可变；数组可存基本类型，ArrayList 只能存对象' +
            '（基本类型用包装类 Integer、Double 等）。实际开发中 ArrayList 几乎完全取代了数组，' +
            '除非有性能或内存的极端要求。注意 ArrayList 不是线程安全的，多线程环境用 ' +
            '`Collections.synchronizedList()` 或 `CopyOnWriteArrayList`。\n\n' +
            '## 语法说明\n\n' +
            '### 创建与常用方法\n\n' +
            '```java\nList<String> list = new ArrayList<>();  // 推荐：接口引用\nlist.add("a");           // 添加\nlist.get(0);             // 按索引取\nlist.set(0, "b");        // 修改\nlist.remove(0);          // 按索引删\nlist.remove("a");        // 按元素删\nlist.size();             // 大小\nlist.contains("a");      // 是否包含\nlist.isEmpty();          // 是否空\nlist.clear();            // 清空\n```\n\n' +
            '### 遍历方式\n\n' +
            '```java\n// 1. for 索引（需索引时）\nfor (int i = 0; i < list.size(); i++) { list.get(i); }\n// 2. for-each（只读）\nfor (String s : list) { /* ... */ }\n// 3. 迭代器（可删除）\nIterator<String> it = list.iterator();\nwhile (it.hasNext()) { String s = it.next(); if (...) it.remove(); }\n// 4. forEach + Lambda（Java 8+）\nlist.forEach(s -> System.out.println(s));\n```\n\n' +
            '### List 常用方法表\n\n' +
            '| 方法 | 说明 | 复杂度（ArrayList） |\n' +
            '|------|------|---------------------|\n' +
            '| `add(e)` | 尾部添加 | O(1) 均摊 |\n' +
            '| `add(i, e)` | 指定位置插入 | O(n) |\n' +
            '| `get(i)` | 按索引取 | O(1) |\n' +
            '| `set(i, e)` | 按索引改 | O(1) |\n' +
            '| `remove(i)` | 按索引删 | O(n) |\n' +
            '| `contains(e)` | 是否包含 | O(n) |\n' +
            '| `indexOf(e)` | 查索引 | O(n) |\n' +
            '| `size()` | 元素数 | O(1) |\n\n' +
            '### ArrayList vs LinkedList\n\n' +
            '| 特性 | ArrayList | LinkedList |\n' +
            '|------|-----------|------------|\n' +
            '| 底层结构 | 动态数组 | 双向链表 |\n' +
            '| 随机访问 | O(1) | O(n) |\n' +
            '| 头部插入 | O(n) | O(1) |\n' +
            '| 尾部插入 | O(1) 均摊 | O(1) |\n' +
            '| 中间插入 | O(n) | O(n) |\n' +
            '| 内存 | 连续紧凑 | 每节点额外指针 |\n' +
            '| 适用 | 读多写少 | 频繁头尾增删 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：ArrayList 基本操作**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("Java");\n        list.add("Python");\n        list.add("Go");\n        System.out.println(list);           // [Java, Python, Go]\n        System.out.println(list.get(1));    // Python\n        list.set(1, "Kotlin");\n        list.remove("Go");\n        System.out.println(list);           // [Java, Kotlin]\n        System.out.println(list.size());    // 2\n    }\n}\n```\n\n' +
            '**示例 2：遍历与迭代器删除**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));\n        // 用迭代器安全删除偶数\n        Iterator<Integer> it = nums.iterator();\n        while (it.hasNext()) {\n            if (it.next() % 2 == 0) it.remove();\n        }\n        System.out.println(nums);  // [1, 3, 5]\n        // Java 8+ removeIf\n        nums.removeIf(n -> n > 3);\n        System.out.println(nums);  // [1, 3]\n    }\n}\n```\n\n' +
            '**示例 3：排序与查找**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> nums = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9));\n        Collections.sort(nums);                    // 升序\n        System.out.println(nums);                  // [1, 2, 5, 8, 9]\n        Collections.sort(nums, Collections.reverseOrder());  // 降序\n        System.out.println(nums);\n        int idx = Collections.binarySearch(nums, 5);  // 二分查找（需先排序）\n        System.out.println("5 的索引: " + idx);\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **用接口引用声明**——`List<String> list = new ArrayList<>()` 而非 `ArrayList<String>`，便于切换实现。\n' +
            '2. **ArrayList 非线程安全**——多线程读写需 `Collections.synchronizedList()` 或 `CopyOnWriteArrayList`。\n' +
            '3. **边遍历边删除用迭代器**——for-each 中直接 `list.remove()` 会抛 ConcurrentModificationException，用 `iterator.remove()` 或 `removeIf`。\n' +
            '4. **remove(int) vs remove(Object)**——`list.remove(2)` 删索引 2，`list.remove(Integer.valueOf(2))` 删元素 2，List<Integer> 时易混淆。\n' +
            '5. **初始容量优化**——已知大小时 `new ArrayList<>(10000)` 预分配，避免反复扩容复制。\n' +
            '6. **subList 视图**——`list.subList(1, 3)` 返回视图，修改子列表影响原列表，且需谨慎结构性修改。\n' +
            '7. **Arrays.asList 陷阱**——返回固定大小列表，不能 add/remove；要可变用 `new ArrayList<>(Arrays.asList(...))`。\n' +
            '8. **LinkedList 性能陷阱**——虽然链表插入 O(1)，但 `get(i)` 是 O(n)，实际中 ArrayList 通常更快，LinkedList 很少用。\n\n' +
            '## 实际应用\n\n' +
            '1. **数据加载**：从数据库查询结果集转为 `List<User>` 返回前端，是后端最常见操作。\n' +
            '2. **批量处理**：`List<Order>` 遍历计算总额、批量发送通知、批量入库。\n' +
            '3. **配置列表**：读取配置文件的多个值存入 List，如允许的 IP 白名单。\n' +
            '4. **分页**：`list.subList(start, end)` 截取当前页数据，实现简单分页。\n' +
            '5. **不可变列表**：`List.of("a", "b")`（Java 9+）或 `Collections.unmodifiableList()` 创建只读列表。\n\n' +
            '## 扩展知识\n\n' +
            '- **List.of / List.copyOf（Java 9+）**：创建不可变 List，修改抛 UnsupportedOperationException。\n' +
            '- **ArrayList 扩容机制**：默认容量 10，扩容为 1.5 倍（`newCapacity = oldCapacity + (oldCapacity >> 1)`）。\n' +
            '- **fail-fast 迭代器**——ArrayList 迭代器在并发修改时快速失败抛 CME，是"尽力而为"的检测机制。\n' +
            '- **CopyOnWriteArrayList**——写时复制，读无锁，适合读多写少并发场景。\n' +
            '- **Stream API**：`list.stream().filter(...).map(...).collect(toList())` 函数式处理列表，下章详解。\n' +
            '- **随机访问标记**——ArrayList 实现 `RandomAccess` 接口，表示随机访问高效，算法可据此优化遍历方式。',
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
            '## 概念详解\n\n' +
            '`Map` 是键值对（Key-Value）集合，通过键快速查找值。`HashMap` 是最常用的 Map 实现，' +
            '底层是哈希表 + 链表/红黑树，查找/插入/删除平均 O(1)。' +
            'HashMap 允许 null 键和 null 值，不保证顺序。' +
            '如果需要按插入顺序遍历，用 `LinkedHashMap`；需要按键排序，用 `TreeMap`。\n\n' +
            'Map 常用操作：`put(k, v)` 添加/更新键值对、`get(k)` 获取值、`remove(k)` 删除、' +
            '`containsKey(k)` 判断键是否存在、`containsValue(v)` 判断值是否存在、' +
            '`size()` 获取大小、`keySet()` 获取所有键、`values()` 获取所有值、' +
            '`entrySet()` 获取所有键值对。遍历 Map 最常用 entrySet，效率最高。\n\n' +
            'Map 的键若是自定义对象，必须正确重写 `hashCode()` 和 `equals()` 方法，' +
            '否则 HashMap 无法正确定位键。String 和包装类（Integer、Double 等）已正确实现这两个方法，' +
            '可直接作为键使用。这是 HashMap 工作原理的关键——哈希码决定桶位置，equals 决定键相等。\n\n' +
            '## 语法说明\n\n' +
            '### 创建与常用方法\n\n' +
            '```java\nMap<String, Integer> map = new HashMap<>();\nmap.put("a", 1);           // 添加/更新\nmap.get("a");             // 取值（不存在返回 null）\nmap.getOrDefault("b", 0); // 取值，不存在返回默认值\nmap.remove("a");          // 删除\nmap.containsKey("a");     // 是否含键\nmap.containsValue(1);     // 是否含值\nmap.size();               // 大小\nmap.keySet();             // 所有键（Set）\nmap.values();             // 所有值（Collection）\nmap.entrySet();           // 所有键值对（Set<Entry>）\n```\n\n' +
            '### 遍历方式\n\n' +
            '```java\n// 1. entrySet（最高效）\nfor (Map.Entry<String, Integer> e : map.entrySet()) {\n    e.getKey(); e.getValue();\n}\n// 2. keySet\nfor (String k : map.keySet()) { map.get(k); }\n// 3. forEach + Lambda（Java 8+）\nmap.forEach((k, v) -> System.out.println(k + "=" + v));\n```\n\n' +
            '### Map 常用方法表\n\n' +
            '| 方法 | 说明 | 复杂度（HashMap） |\n' +
            '|------|------|-------------------|\n' +
            '| `put(k, v)` | 添加/更新 | O(1) 均摊 |\n' +
            '| `get(k)` | 取值 | O(1) |\n' +
            '| `remove(k)` | 删除 | O(1) |\n' +
            '| `containsKey(k)` | 是否含键 | O(1) |\n' +
            '| `containsValue(v)` | 是否含值 | O(n) |\n' +
            '| `getOrDefault(k, def)` | 取值或默认 | O(1) |\n' +
            '| `merge(k, v, f)` | 合并 | O(1) |\n' +
            '| `computeIfAbsent(k, f)` | 缺失则计算 | O(1) |\n\n' +
            '### Map 实现对比\n\n' +
            '| 实现 | 顺序 | null 键 | 性能 | 适用 |\n' +
            '|------|------|---------|------|------|\n' +
            '| HashMap | 无序 | 允许 | O(1) | 通用 |\n' +
            '| LinkedHashMap | 插入/访问顺序 | 允许 | O(1) | 保持顺序、LRU |\n' +
            '| TreeMap | 键排序 | 不允许 | O(log n) | 排序遍历 |\n' +
            '| ConcurrentHashMap | 无序 | 不允许 | O(1) | 并发 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：HashMap 基本操作**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> ages = new HashMap<>();\n        ages.put("张三", 20);\n        ages.put("李四", 22);\n        ages.put("王五", 21);\n        System.out.println(ages.get("李四"));         // 22\n        System.out.println(ages.get("赵六"));         // null\n        System.out.println(ages.getOrDefault("赵六", 0));  // 0\n        System.out.println(ages.containsKey("张三"));  // true\n        System.out.println(ages.size());              // 3\n    }\n}\n```\n\n' +
            '**示例 2：遍历 Map**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> map = new LinkedHashMap<>();\n        map.put("Java", 1); map.put("Python", 2); map.put("Go", 3);\n        // entrySet 遍历\n        for (Map.Entry<String, Integer> e : map.entrySet()) {\n            System.out.println(e.getKey() + " => " + e.getValue());\n        }\n        // Lambda 遍历\n        map.forEach((k, v) -> System.out.println(k + ":" + v));\n    }\n}\n```\n\n' +
            '**示例 3：单词计数（computeIfAbsent/merge）**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {"a", "b", "a", "c", "b", "a"};\n        Map<String, Integer> count = new HashMap<>();\n        for (String w : words) {\n            count.merge(w, 1, Integer::sum);  // 累加计数\n        }\n        System.out.println(count);  // {a=3, b=2, c=1}\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **键必须重写 hashCode 和 equals**——自定义对象作键，必须正确重写，否则 get/containsKey 失效。\n' +
            '2. **equals 相等则 hashCode 必须相等**——这是契约，违反会导致 HashMap 找不到键。\n' +
            '3. **HashMap 非线程安全**——多线程用 `ConcurrentHashMap`，不要用 `Collections.synchronizedMap`（性能差）。\n' +
            '4. **HashMap 允许 null**——一个 null 键、多个 null 值；ConcurrentHashMap/TreeMap 不允许 null。\n' +
            '5. **遍历时不能修改**——for-each 中 put/remove 会抛 ConcurrentModificationException，用迭代器或先收集再改。\n' +
            '6. **初始容量与负载因子**——默认容量 16、负载因子 0.75；数据量大时预设容量减少扩容。\n' +
            '7. **getOrDefault 防止 NPE**——`map.get(k)` 返回 null 可能是没值也可能是值为 null，用 containsKey 区分。\n' +
            '8. **Map.of 不可变（Java 9+）**——`Map.of("a", 1)` 创建不可变 Map，不能 put/remove。\n\n' +
            '## 实际应用\n\n' +
            '1. **缓存**：`Map<String, User> userCache` 按 ID 缓存用户，HashMap 是本地缓存的基础。\n' +
            '2. **计数/分组**：统计词频、商品销量、用户访问次数，`merge`/`computeIfAbsent` 简化代码。\n' +
            '3. **配置映射**：`Map<String, String> config` 存键值对配置，如数据库连接参数。\n' +
            '4. **对象映射**：JSON 反序列化成 `Map<String, Object>`，灵活处理动态结构。\n' +
            '5. **去重**：用 Map 的键去重，如按 userId 去重用户列表。\n' +
            '6. **LRU 缓存**：`LinkedHashMap` 重写 `removeEldestEntry` 实现简易 LRU 缓存。\n\n' +
            '## 扩展知识\n\n' +
            '- **HashMap 原理**：数组 + 链表（Java 8+ 链表超 8 转红黑树），hash 冲突时链地址法，扩容翻倍。\n' +
            '- **hashCode 设计**：好的 hashCode 分布均匀，减少冲突；Objects.hash() 辅助生成。\n' +
            '- **ConcurrentHashMap**：分段锁（Java 7）/CAS + synchronized 桶（Java 8+），高并发首选。\n' +
            '- **EnumMap**：键为枚举时用 EnumMap，数组实现，性能远超 HashMap。\n' +
            '- **compute/merge/replaceAll**：Java 8+ 函数式更新方法，简化"读取-修改-写回"模式。\n' +
            '- **不可变 Map**：`Map.of`/`Map.copyOf`（Java 9+）创建不可变 Map，线程安全；Guava `ImmutableMap` 类似。',
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
            '## 概念详解\n\n' +
            '`Set` 是不允许重复元素的集合。`HashSet` 是最常用的 Set 实现，' +
            '底层基于 HashMap，查找/插入/删除平均 O(1)，不保证顺序。' +
            '`LinkedHashSet` 保持插入顺序，`TreeSet` 保持元素排序。' +
            'Set 的核心应用是去重——自动过滤重复元素。\n\n' +
            'Set 常用操作：`add(e)` 添加（若已存在则不添加）、`remove(e)` 删除、' +
            '`contains(e)` 判断包含、`size()` 获取大小。' +
            'Set 支持集合运算：交集（retainAll）、并集（addAll）、差集（removeAll）。' +
            '与 Map 的键一样，自定义对象作为 Set 元素需正确实现 hashCode 和 equals。\n\n' +
            '泛型（Generics）是 Java 5 引入的特性，允许在编译时检查类型安全。' +
            '`List<String>`、`Map<String, Integer>` 中的 `<...>` 就是泛型。' +
            '泛型避免了运行时 ClassCastException，消除了显式类型转换。' +
            '泛型方法 `<T> T firstOf(List<T> list)` 和泛型类 `class Box<T>` ' +
            '让代码更通用、更安全。泛型使用类型擦除实现——编译后泛型类型被擦除为 Object。\n\n' +
            '## 语法说明\n\n' +
            '### Set 创建与操作\n\n' +
            '```java\nSet<String> set = new HashSet<>();\nset.add("a");          // 添加（重复返回 false）\nset.contains("a");    // 是否包含\nset.remove("a");      // 删除\nset.size();           // 大小\nset.isEmpty();        // 是否空\nset.clear();          // 清空\n```\n\n' +
            '### 集合运算\n\n' +
            '```java\nSet<Integer> a = new HashSet<>(Arrays.asList(1, 2, 3));\nSet<Integer> b = new HashSet<>(Arrays.asList(2, 3, 4));\na.retainAll(b);  // 交集：a = {2, 3}\n// a.addAll(b);  // 并集\n// a.removeAll(b); // 差集\n```\n\n' +
            '### 泛型类与方法\n\n' +
            '```java\n// 泛型类\nclass Box<T> { T value; void set(T v) { value = v; } T get() { return value; } }\n// 泛型方法\nstatic <T> T firstOf(List<T> list) { return list.get(0); }\n// 通配符\nvoid process(List<? extends Number> list) { /* 只读，上限 */ }\nvoid addAll(List<? super Integer> list) { /* 只写，下限 */ }\n```\n\n' +
            '### Set 实现对比\n\n' +
            '| 实现 | 顺序 | 性能 | 适用 |\n' +
            '|------|------|------|------|\n' +
            '| HashSet | 无序 | O(1) | 通用去重 |\n' +
            '| LinkedHashSet | 插入顺序 | O(1) | 去重 + 保序 |\n' +
            '| TreeSet | 排序 | O(log n) | 排序去重 |\n\n' +
            '### 泛型通配符\n\n' +
            '| 通配符 | 含义 | 能读? | 能写? |\n' +
            '|--------|------|-------|-------|\n' +
            '| `? extends T` | T 或子类（上限） | 是（T） | 否 |\n' +
            '| `? super T` | T 或父类（下限） | 否（Object） | 是（T） |\n' +
            '| `?` | 任意 | 否（Object） | 否 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：Set 去重**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Set<String> set = new HashSet<>();\n        String[] words = {"a", "b", "a", "c", "b", "a"};\n        for (String w : words) set.add(w);\n        System.out.println(set);       // [a, b, c]\n        System.out.println(set.size());  // 3\n    }\n}\n```\n\n' +
            '**示例 2：集合运算**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Set<Integer> a = new HashSet<>(Arrays.asList(1, 2, 3, 4));\n        Set<Integer> b = new HashSet<>(Arrays.asList(3, 4, 5, 6));\n        Set<Integer> inter = new HashSet<>(a); inter.retainAll(b);  // 交集\n        Set<Integer> union = new HashSet<>(a); union.addAll(b);     // 并集\n        Set<Integer> diff = new HashSet<>(a); diff.removeAll(b);    // 差集\n        System.out.println("交集: " + inter);  // [3, 4]\n        System.out.println("并集: " + union);  // [1,2,3,4,5,6]\n        System.out.println("差集: " + diff);   // [1, 2]\n    }\n}\n```\n\n' +
            '**示例 3：泛型类与方法**\n\n```java\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Box<String> sb = new Box<>();\n        sb.set("hello");\n        System.out.println(sb.get());  // hello\n        Box<Integer> ib = new Box<>();\n        ib.set(42);\n        System.out.println(ib.get());  // 42\n        // 泛型方法\n        List<String> list = Arrays.asList("a", "b");\n        System.out.println(firstOf(list));  // a\n    }\n    static <T> T firstOf(List<T> list) { return list.get(0); }\n    static class Box<T> { T value; void set(T v) { value = v; } T get() { return value; } }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **Set 元素需重写 hashCode/equals**——自定义对象入 Set 必须重写，否则去重失效。\n' +
            '2. **HashSet 允许 null**——但只能有一个 null 元素；TreeSet 不允许 null（比较会 NPE）。\n' +
            '3. **Set 非线程安全**——多线程用 `Collections.synchronizedSet` 或 `ConcurrentHashMap.newKeySet()`。\n' +
            '4. **泛型类型擦除**——编译后 `List<String>` 和 `List<Integer>` 都是 `List`，运行时无法用 instanceof 区分泛型类型。\n' +
            '5. **不能创建泛型数组**——`new T[10]` 非法（类型擦除导致不安全），用 `List<T>` 或反射 `Array.newInstance`。\n' +
            '6. **基本类型不能做泛型参数**——`List<int>` 非法，必须用 `List<Integer>`（包装类）。\n' +
            '7. **PECS 原则**——Producer extends, Consumer super：读取用 `? extends`，写入用 `? super`。\n' +
            '8. **TreeSet 需可比较**——元素需实现 Comparable 或传入 Comparator，否则抛 ClassCastException。\n\n' +
            '## 实际应用\n\n' +
            '1. **去重**：用户 ID 去重、标签去重、访问记录去重，`new HashSet<>(list)` 一行去重。\n' +
            '2. **集合运算**：权限校验（用户权限 ∩ 需要权限）、标签筛选、好友共同好友（交集）。\n' +
            '3. **存在性判断**：`Set<String> blacklist` 判断是否在黑名单，O(1) 比 List O(n) 快。\n' +
            '4. **泛型集合**：所有集合都是泛型的，`List<User>`、`Map<String, Order>` 保证类型安全。\n' +
            '5. **泛型工具方法**：`<T> List<T> filter(List<T>, Predicate<T>)` 等通用工具，复用性强。\n' +
            '6. **TreeSet 排序去重**：排行榜、时间线等需要排序且去重的场景。\n\n' +
            '## 扩展知识\n\n' +
            '- **EnumSet**：枚举专用 Set，位向量实现，性能极高，适合枚举标志位。\n' +
            '- **Set.of（Java 9+）**：创建不可变 Set，`Set.of("a", "b")`，不接受重复元素（运行时抛异常）。\n' +
            '- **类型擦除的影响**——运行时拿不到泛型类型，需通过额外传 Class<T> 或用 TypeToken（Gson）解决。\n' +
            '- **泛型协变逆变**——Java 泛型是不变的（`List<String>` 不是 `List<Object>` 子类），通配符模拟协变/逆变。\n' +
            '- **Record + 泛型**：`record Pair<A, B>(A first, B second) {}` 是现代 Java 的泛型数据载体。\n' +
            '- **ConcurrentHashMap.newKeySet()**：高性能并发 Set，比 synchronizedSet 或 CopyOnWriteArraySet 更适合高并发。',
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
            '## 概念详解\n\n' +
            '`String` 是 Java 中最常用的类之一。String 对象是不可变（immutable）的——' +
            '一旦创建，其值不能被修改。看似修改字符串的操作（如 `+`、`replace`、`substring`）' +
            '实际上是创建了新的 String 对象。不可变性带来线程安全和安全性（可作 HashMap 键），但也意味着' +
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
            '始终使用 `equals()` 比较字符串内容是最佳实践。\n\n' +
            '## 语法说明\n\n' +
            '### 创建字符串\n\n' +
            '```java\nString s1 = "hello";              // 字面量，常量池\nString s2 = new String("hello");   // 堆中新对象\nchar[] arr = {\'h\', \'i\'};\nString s3 = new String(arr);       // 从 char 数组\nString s4 = String.valueOf(123);   // 其他类型转 String\n```\n\n' +
            '### 常用方法\n\n' +
            '```java\ns.length();            // 长度\ns.charAt(0);           // 第一个字符\ns.substring(0, 3);     // 截取 [0,3)\ns.indexOf("ll");       // 查找子串，找不到返回 -1\ns.equals(other);       // 比内容\ns.equalsIgnoreCase(other); // 忽略大小写比\ns.toUpperCase();       // 转大写\ns.trim();              // 去首尾空白\ns.split(",");          // 分割\ns.replace("a", "b");   // 替换\ns.contains("ell");     // 是否包含\ns.startsWith("he");    // 前缀\ns.endsWith("lo");      // 后缀\ns.isEmpty();           // 是否空串\n```\n\n' +
            '### String 常用方法表\n\n' +
            '| 方法 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `length()` | 长度 | `"abc".length()` → 3 |\n' +
            '| `charAt(i)` | 取字符 | `"abc".charAt(0)` → a |\n' +
            '| `substring(b, e)` | 截取 | `"abc".substring(0,2)` → ab |\n' +
            '| `indexOf(s)` | 查找 | `"abc".indexOf("b")` → 1 |\n' +
            '| `equals(s)` | 比内容 | `"a".equals("a")` → true |\n' +
            '| `split(regex)` | 分割 | `"a,b".split(",")` → [a,b] |\n' +
            '| `replace(o, n)` | 替换 | `"a".replace("a","b")` → b |\n' +
            '| `trim()` | 去空白 | `" a ".trim()` → a |\n' +
            '| `contains(s)` | 包含 | `"abc".contains("b")` → true |\n' +
            '| `toUpperCase()` | 大写 | `"ab".toUpperCase()` → AB |\n\n' +
            '### String vs StringBuilder vs StringBuffer\n\n' +
            '| 类 | 可变? | 线程安全 | 性能 | 适用 |\n' +
            '|----|-------|----------|------|------|\n' +
            '| String | 否 | 是（不可变） | 低 | 不可变文本 |\n' +
            '| StringBuilder | 是 | 否 | 高 | 单线程拼接 |\n' +
            '| StringBuffer | 是 | 是 | 中 | 多线程拼接 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：String 基本操作**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String s = "Hello, World";\n        System.out.println(s.length());          // 12\n        System.out.println(s.charAt(0));         // H\n        System.out.println(s.substring(0, 5));   // Hello\n        System.out.println(s.indexOf("World"));  // 7\n        System.out.println(s.toUpperCase());     // HELLO, WORLD\n        System.out.println(s.replace("World", "Java"));  // Hello, Java\n        System.out.println(s.contains("orl"));   // true\n    }\n}\n```\n\n' +
            '**示例 2：字符串比较与分割**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String a = "hello";\n        String b = "HELLO";\n        System.out.println(a.equals(b));              // false\n        System.out.println(a.equalsIgnoreCase(b));    // true\n        String csv = "张三,25,北京";\n        String[] parts = csv.split(",");\n        for (String p : parts) System.out.println(p);\n        // == vs equals\n        String s1 = "hi"; String s2 = "hi";\n        System.out.println(s1 == s2);        // true（常量池）\n        System.out.println(s1.equals(s2));   // true\n    }\n}\n```\n\n' +
            '**示例 3：StringBuilder 拼接**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // 错误：循环用 + 拼接产生大量临时对象\n        // String s = ""; for (int i = 0; i < 100; i++) s += i;\n        // 正确：用 StringBuilder\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < 100; i++) sb.append(i);\n        String result = sb.toString();\n        System.out.println(result.substring(0, 10) + "...");\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **用 equals 比较，不用 ==**——`==` 比较地址，常量池有时碰巧相等，但 new 出的对象不等，永远用 equals。\n' +
            '2. **循环拼接用 StringBuilder**——循环内 `+=` 每次创建新 String，O(n²) 开销；StringBuilder 是 O(n)。\n' +
            '3. **String 不可变**——`replace`/`substring` 返回新对象，原字符串不变，新手常忘接收返回值。\n' +
            '4. **split 的正则陷阱**——`split(".")` 会得到空数组（`.` 是正则元字符），需 `split("\\\\.")` 转义。\n' +
            '5. **字符串常量池**——`intern()` 把字符串放入常量池，比较时 `==` 可能成立，但不推荐依赖。\n' +
            '6. **空串 vs null**——`""` 是空字符串（length=0），null 是无对象，调用方法抛 NPE，用前判 null。\n' +
            '7. **String.format**——`String.format("姓名:%s,年龄:%d", name, age)` 格式化，类似 C 的 printf。\n' +
            '8. **substring 内存泄漏（已修复）**——Java 7 前 substring 共享原 char[]，Java 7+ 复制新数组，无泄漏问题。\n\n' +
            '## 实际应用\n\n' +
            '1. **数据校验**：`email.contains("@")`、`phone.startsWith("1")`、`id.length() == 18` 等简单校验。\n' +
            '2. **CSV/分隔符解析**：`line.split(",")` 解析 CSV，处理配置项。\n' +
            '3. **SQL/日志拼接**：用 StringBuilder 拼接动态 SQL（注意防注入，实际用 PreparedStatement）。\n' +
            '4. **文本处理**：`trim` 去空白、`replace` 替换敏感词、`toUpperCase` 标准化。\n' +
            '5. **模板渲染**：`String.format` 或 `MessageFormat` 格式化消息，如短信、邮件模板。\n' +
            '6. **JSON 序列化**：Jackson/Gson 把对象转 String JSON 传输。\n\n' +
            '## 扩展知识\n\n' +
            '- **StringJoiner（Java 8+）**：`new StringJoiner(",").add("a").add("b")` → `a,b`，配合 Stream 用 `Collectors.joining`。\n' +
            '- **文本块（Java 15+）**：`"""多行字符串"""` 支持多行字符串字面量，适合 SQL、JSON 模板。\n' +
            '- **String 存储演进**——Java 9+ 用 byte[] + coder（LATIN1/UTF16）替代 char[]，纯 ASCII 字符串省一半内存。\n' +
            '- **字符串池**——字面量在常量池，intern() 主动入池；大量重复字符串 intern 可省内存但有开销。\n' +
            '- **正则表达式**——`matches`/`replaceAll`/`splitFirst` 支持正则，复杂匹配用 Pattern/Matcher。\n' +
            '- **StringBuilder 初始容量**——预知大小时 `new StringBuilder(10000)` 避免扩容，提升性能。',
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
            '## 概念详解\n\n' +
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
            '`sb.append("a").append("b").append("c")`，因为 append 返回 this。\n\n' +
            '## 语法说明\n\n' +
            '### 创建与常用方法\n\n' +
            '```java\nStringBuilder sb = new StringBuilder();      // 空的\nStringBuilder sb2 = new StringBuilder("初始"); // 带初始值\nStringBuilder sb3 = new StringBuilder(100);    // 指定初始容量\nsb.append("a");     // 追加\nsb.insert(0, "x");  // 插入\nsb.delete(0, 1);    // 删除 [start, end)\nsb.deleteCharAt(0); // 删除指定位置字符\nsb.reverse();       // 反转\nsb.length();        // 长度\nsb.charAt(0);       // 取字符\nsb.setCharAt(0, \'X\'); // 修改字符\nsb.toString();      // 转为 String\nsb.capacity();      // 当前容量\n```\n\n' +
            '### 链式调用\n\n' +
            '```java\nString s = new StringBuilder()\n    .append("姓名:").append(name)\n    .append(", 年龄:").append(age)\n    .toString();\n```\n\n' +
            '### StringBuilder 常用方法表\n\n' +
            '| 方法 | 说明 |\n' +
            '|------|------|\n' +
            '| `append(x)` | 追加（任意类型） |\n' +
            '| `insert(i, x)` | 在位置 i 插入 |\n' +
            '| `delete(s, e)` | 删除 [s, e) |\n' +
            '| `deleteCharAt(i)` | 删除指定位置字符 |\n' +
            '| `reverse()` | 反转字符序列 |\n' +
            '| `setCharAt(i, c)` | 修改指定位置字符 |\n' +
            '| `replace(s, e, str)` | 替换区间 |\n' +
            '| `substring(s, e)` | 截取子串 |\n' +
            '| `toString()` | 转为不可变 String |\n' +
            '| `length()` / `capacity()` | 长度 / 容量 |\n\n' +
            '### String vs StringBuilder vs StringBuffer\n\n' +
            '| 类 | 可变 | 线程安全 | 性能 | 适用 |\n' +
            '|----|------|----------|------|------|\n' +
            '| String | 否 | 是 | 低 | 不可变文本 |\n' +
            '| StringBuilder | 是 | 否 | 高 | 单线程拼接 |\n' +
            '| StringBuffer | 是 | 是 | 中 | 多线程拼接 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：高效拼接**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < 10; i++) {\n            sb.append(i).append(" ");  // 链式调用\n        }\n        System.out.println(sb.toString());  // 0 1 2 3 4 5 6 7 8 9\n    }\n}\n```\n\n' +
            '**示例 2：insert/delete/reverse**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder("Hello");\n        sb.insert(5, " World");   // 在末尾插入\n        System.out.println(sb);   // Hello World\n        sb.delete(5, 11);         // 删除 " World"\n        System.out.println(sb);   // Hello\n        sb.reverse();\n        System.out.println(sb);   // olleH\n    }\n}\n```\n\n' +
            '**示例 3：构建 SQL/JSON**\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String[] fields = {"name", "age", "city"};\n        StringBuilder sql = new StringBuilder("SELECT ");\n        for (int i = 0; i < fields.length; i++) {\n            if (i > 0) sql.append(", ");\n            sql.append(fields[i]);\n        }\n        sql.append(" FROM users");\n        System.out.println(sql);  // SELECT name, age, city FROM users\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **循环拼接必用 StringBuilder**——循环内 `+=` 每次复制整个字符串，O(n²)；StringBuilder 是 O(n)。\n' +
            '2. **简单拼接编译器会优化**——`"a" + b + "c"` 编译器自动用 StringBuilder，无需手动优化。\n' +
            '3. **预分配容量**——已知大小时 `new StringBuilder(10000)`，避免反复扩容复制。\n' +
            '4. **StringBuilder 非线程安全**——多线程共享用 StringBuffer 或外部同步（实际很少共享可变字符串）。\n' +
            '5. **append 返回 this**——支持链式调用，`sb.append(a).append(b).append(c)`。\n' +
            '6. **toString 转不可变**——StringBuilder 构建完成后用 `toString()` 转为 String 传递/存储。\n' +
            '7. **不要把 StringBuilder 当字段**——它是构建工具，构建完应转 String，避免长期持有可变状态。\n' +
            '8. **StringBuffer 已过时**——现代代码很少用 StringBuffer，并发场景用 String（不可变天然安全）或局部 StringBuilder。\n\n' +
            '## 实际应用\n\n' +
            '1. **SQL 构建**：动态拼接 SELECT/WHERE 条件（生产用 MyBatis 等框架，原理类似）。\n' +
            '2. **日志格式化**：拼接日志字段，避免 `+` 在循环中产生临时对象。\n' +
            '3. **JSON/CSV 序列化**：手动构建 CSV 行、简单 JSON（复杂用 Jackson/Gson）。\n' +
            '4. **字符串反转**：`new StringBuilder(s).reverse().toString()` 是最简反转方式。\n' +
            '5. **批量消息**：循环构建通知内容，如"用户 A、B、C 完成了订单"。\n' +
            '6. **toString 实现**：自定义类的 `toString()` 常用 StringBuilder 拼接字段。\n\n' +
            '## 扩展知识\n\n' +
            '- **StringJoiner（Java 8+）**：专为分隔符拼接设计，`new StringJoiner(",", "[", "]")`，配合 Stream 的 `Collectors.joining`。\n' +
            '- **编译器优化**——`javac` 把 `a + b` 编译成 `new StringBuilder().append(a).append(b).toString()`。\n' +
            '- **容量扩容**——StringBuilder 默认容量 16，不足时扩容为 `oldCapacity * 2 + 2`，预分配可避免。\n' +
            '- **StringBuffer 历史包袱**——Java 1.0 就有 StringBuffer（同步），Java 5 才加 StringBuilder（非同步），现代代码优先 StringBuilder。\n' +
            '- **不可变字符串优势**——String 不可变让 HashMap 键安全、可缓存 hashCode、线程安全，所以"可变"只是构建阶段需要。\n' +
            '- **流式 API 替代**——`list.stream().collect(Collectors.joining(","))` 函数式拼接，内部用 StringBuilder。',
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
            '## 概念详解\n\n' +
            'Java 提供了丰富的文件 I/O API，经历了多次演进。早期使用 `java.io.File` 配合 ' +
            '`FileInputStream`/`FileOutputStream`/`BufferedReader`/`BufferedWriter` 进行字节或字符流操作。' +
            'Java 7 引入了 NIO.2（New I/O 2），用 `java.nio.file.Path` 和 `java.nio.file.Files` ' +
            '提供更现代、更简洁的文件操作 API，成为现代 Java 文件操作的标准做法。\n\n' +
            '`Path` 类替代了旧的 `File` 类，表示文件系统中的路径，支持符号链接解析、相对路径规范化、' +
            '路径拼接等操作。`Files` 是一个工具类，提供了大量静态方法：`readString`、`writeString`、' +
            '`readAllLines`、`exists`、`createDirectory`、`copy`、`move`、`delete`、`size` 等。' +
            '这些方法封装了底层的流操作，让文件 I/O 代码更简洁、更安全。\n\n' +
            '`try-with-resources` 是 Java 7+ 的资源管理语法，自动关闭实现了 `AutoCloseable` 的资源' +
            '（如 InputStream、BufferedReader、Connection 等）。即使在 try 块中抛出异常，' +
            '资源也会在 try 块结束时自动关闭，避免了繁琐的 finally 块和资源泄漏问题。' +
            '语法为 `try (Resource r = new ...) { }`，多个资源用分号分隔。' +
            '文件 I/O 操作必须处理 `IOException`（受检异常），通常用 try-catch 包裹或向上抛出。\n\n' +
            '## 语法说明\n\n' +
            '### Path 的创建与操作\n\n' +
            '```java\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\n\n// 创建 Path\nPath p1 = Paths.get("test.txt");\nPath p2 = Paths.get("/home", "user", "doc.txt");\nPath p3 = Path.of("config", "app.json"); // Java 11+ 推荐写法\n\n// 路径信息\np1.getFileName();    // 文件名\np1.getParent();      // 父目录\np1.toAbsolutePath(); // 绝对路径\np1.normalize();      // 规范化（消除 . 和 ..）\n```\n\n' +
            '### Files 常用方法\n\n' +
            '```java\nimport java.nio.file.Files;\nimport java.nio.file.StandardOpenOption;\nimport java.util.List;\n\n// 读取（小文件）\nString all = Files.readString(path);          // 一次读取全部文本\nList<String> lines = Files.readAllLines(path); // 读取所有行\n\n// 写入（默认覆盖）\nFiles.writeString(path, "内容");\nFiles.write(path, List.of("行1", "行2"));\n\n// 追加\nFiles.writeString(path, "新行\\n", StandardOpenOption.APPEND, StandardOpenOption.CREATE);\n\n// 流式读取（大文件，延迟加载）\ntry (var stream = Files.lines(path)) {\n    stream.filter(s -> s.startsWith("#")).forEach(System.out::println);\n}\n\n// 文件属性\nFiles.exists(path);\nFiles.size(path);          // 字节数\nFiles.isDirectory(path);\nFiles.delete(path);        // 不存在会抛异常\nFiles.deleteIfExists(path);// 不存在不报错\n```\n\n' +
            '### Files 常用方法表\n\n' +
            '| 方法 | 说明 |\n|------|------|\n| `readString(Path)` | 读取全部文本为 String（Java 11+） |\n| `readAllLines(Path)` | 读取所有行返回 `List<String>` |\n| `readAllBytes(Path)` | 读取所有字节返回 `byte[]` |\n| `lines(Path)` | 返回 `Stream<String>` 逐行处理（延迟） |\n| `writeString(Path, String)` | 写入字符串（默认覆盖） |\n| `write(Path, byte[])` | 写入字节数组 |\n| `write(Path, Iterable)` | 写入多行 |\n| `exists(Path)` | 判断文件是否存在 |\n| `createDirectory(Path)` | 创建目录 |\n| `createDirectories(Path)` | 创建多级目录 |\n| `copy(Path, Path)` | 复制文件 |\n| `move(Path, Path)` | 移动/重命名 |\n| `delete(Path)` | 删除文件（不存在抛异常） |\n| `deleteIfExists(Path)` | 删除文件（不存在不报错） |\n| `size(Path)` | 返回文件大小（字节） |\n\n' +
            '### StandardOpenOption 常用选项表\n\n' +
            '| 选项 | 说明 |\n|------|------|\n| `CREATE` | 文件不存在则创建 |\n| `CREATE_NEW` | 创建新文件，已存在则抛异常 |\n| `APPEND` | 追加到文件末尾 |\n| `TRUNCATE_EXISTING` | 写入前清空文件（默认） |\n| `READ` | 以读方式打开 |\n| `WRITE` | 以写方式打开 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：小文件读写**\n\n' +
            '```java\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        Path path = Paths.get("note.txt");\n        try {\n            // 写入文本\n            Files.writeString(path, "第一行\\n第二行\\n第三行");\n            System.out.println("文件已写入");\n\n            // 一次读取全部\n            String all = Files.readString(path);\n            System.out.println("全部内容:\\n" + all);\n\n            // 逐行读取\n            List<String> lines = Files.readAllLines(path);\n            System.out.println("行数: " + lines.size());\n            for (int i = 0; i < lines.size(); i++) {\n                System.out.println("第" + (i + 1) + "行: " + lines.get(i));\n            }\n\n            // 追加\n            Files.writeString(path, "\\n第四行",\n                java.nio.file.StandardOpenOption.APPEND);\n            System.out.println("追加后行数: " + Files.readAllLines(path).size());\n        } catch (IOException e) {\n            System.out.println("文件操作失败: " + e.getMessage());\n        }\n    }\n}\n```\n\n' +
            '**示例 2：try-with-resources 与 BufferedReader**\n\n' +
            '```java\nimport java.io.BufferedReader;\nimport java.io.BufferedWriter;\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n        // 写入：try-with-resources 自动关闭\n        try (BufferedWriter writer = new BufferedWriter(new FileWriter("log.txt"))) {\n            writer.write("日志第1行");\n            writer.newLine();\n            writer.write("日志第2行");\n        } catch (IOException e) {\n            System.out.println("写入失败: " + e);\n        }\n\n        // 读取：逐行处理\n        try (BufferedReader reader = new BufferedReader(new FileReader("log.txt"))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                System.out.println("读取: " + line);\n            }\n        } catch (IOException e) {\n            System.out.println("读取失败: " + e);\n        }\n        System.out.println("资源已自动关闭");\n    }\n}\n```\n\n' +
            '**示例 3：大文件流式处理**\n\n' +
            '```java\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.util.stream.Stream;\n\npublic class Main {\n    public static void main(String[] args) {\n        Path bigFile = Paths.get("big.log");\n        try {\n            Files.writeString(bigFile, "INFO start\\nERROR crash\\nINFO done\\nWARN slow");\n        } catch (IOException e) {\n            return;\n        }\n\n        // 流式读取，按需加载，不占内存\n        try (Stream<String> stream = Files.lines(bigFile)) {\n            long errorCount = stream\n                .filter(line -> line.startsWith("ERROR"))\n                .count();\n            System.out.println("错误行数: " + errorCount);\n        } catch (IOException e) {\n            System.out.println("读取失败: " + e);\n        }\n\n        // 多个资源 try-with-resources\n        try (Stream<String> s1 = Files.lines(Paths.get("big.log"));\n             Stream<String> s2 = Files.lines(Paths.get("big.log"))) {\n            System.out.println("合并行数: " + Stream.concat(s1, s2).count());\n        } catch (IOException e) {\n            System.out.println("合并失败: " + e);\n        }\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **小文件用 readString/readAllLines，大文件用 lines()**——readAllLines 会把所有行加载到内存，' +
            '处理 GB 级文件会 OOM；`Files.lines()` 返回 Stream 按需读取，内存友好。' +
            '一般以 10MB 为分界线，超过就用流式处理。\n' +
            '2. **必须处理 IOException**——文件 I/O 是受检异常（checked exception），' +
            '编译器强制要求 try-catch 或 throws 声明。吞掉异常（catch 后不处理）是常见反模式，' +
            '至少要 log 或包装成 RuntimeException 重新抛出。\n' +
            '3. **try-with-resources 优先于手动 close**——手动 close 容易遗漏，' +
            '尤其在异常路径上。多个资源按声明顺序的逆序关闭，资源间相互独立时无依赖问题。\n' +
            '4. **Path 与 File 互转**——旧代码用 `File`，新代码用 `Path`。' +
            '`file.toPath()` 把 File 转 Path，`path.toFile()` 把 Path 转 File。' +
            '新项目应统一用 Path。\n' +
            '5. **字符编码**——`Files.readString`/`writeString` 默认用 UTF-8，' +
            '但 `FileReader`/`FileWriter` 默认用系统编码（中文 Windows 是 GBK）。' +
            '跨平台项目应显式指定编码：`new InputStreamReader(fis, StandardCharsets.UTF_8)`。\n' +
            '6. **delete vs deleteIfExists**——`Files.delete` 删除不存在的文件会抛 NoSuchFileException，' +
            '`Files.deleteIfExists` 不存在时静默返回 false。删除前不确定文件是否存在时用后者更安全。\n' +
            '7. **文件锁与并发**——多进程同时写同一文件可能数据错乱。`FileChannel.tryLock()` 可获取排他锁，' +
            '或写入临时文件后原子重命名（`Files.move` 带 `ATOMIC_MOVE`）。\n' +
            '8. **不要用 File.separator 拼接路径**——`Paths.get("a", "b", "c.txt")` 会自动处理分隔符，' +
            '比手动拼接更安全、更可读。\n\n' +
            '## 实际应用\n\n' +
            '1. **配置文件读取**：`Files.readString(Path.of("config.json"))` 读取 JSON/YAML 配置，' +
            '配合 Jackson/Gson 解析为对象。配置不常变化，启动时一次读取即可。\n' +
            '2. **日志系统**：日志框架（如 Logback）内部用 `FileAppender` 追加写日志文件。' +
            '生产环境日志通常按天滚动，超过大小自动切割，try-with-resources 保证文件句柄释放。\n' +
            '3. **CSV/数据文件 ETL**：`Files.lines()` 流式逐行读取 CSV，' +
            '配合 `split(",")` 解析字段，过滤、转换后写入数据库。' +
            '处理百万行数据也不会 OOM。\n' +
            '4. **文件上传/下载**：二进制文件用 `InputStream`/`OutputStream` 流式处理，' +
            '避免一次性加载到内存。Web 框架的 MultipartFile 内部就是 InputStream。\n' +
            '5. **数据库连接管理**：JDBC 的 Connection 也实现了 AutoCloseable，' +
            'try-with-resources 保证连接归还连接池，是生产代码的强制规范。\n' +
            '6. **临时文件**：`Files.createTempFile(prefix, suffix)` 创建临时文件，' +
            'JVM 退出时自动删除（或用 `deleteOnExit`）。适合中间结果存储。\n\n' +
            '## 扩展知识\n\n' +
            '- **NIO.2 与旧 I/O 的关系**：NIO.2（java.nio.file）是 Java 7 引入的现代 API，' +
            '旧的 java.io.File 已被标记为不推荐。NIO.2 支持符号链接、文件属性、文件监视（WatchService）' +
            '等高级特性。新代码应统一用 Path + Files。\n' +
            '- **字节流 vs 字符流**：`InputStream`/`OutputStream` 处理二进制（图片、视频、任意字节），' +
            '`Reader`/`Writer` 处理文本（字符，需指定编码）。文本文件用字符流更方便，' +
            '二进制文件必须用字节流，不能用 Reader（会按编码解析导致损坏）。\n' +
            '- **Buffered 提升性能**：`BufferedReader`/`BufferedInputStream` 内部有缓冲区（默认 8KB），' +
            '减少实际 I/O 次数。读大文件时性能提升明显。`Files.lines` 内部已用缓冲，无需再包 BufferedReader。\n' +
            '- **FileChannel 与零拷贝**：`FileChannel.transferTo` 可在两个 Channel 间直接传输数据，' +
            '绕过用户空间缓冲区（零拷贝），大文件复制性能最优。Kafka 等高性能系统广泛使用。\n' +
            '- **文件树遍历**：`Files.walk(startPath)` 返回 `Stream<Path>` 递归遍历目录树，' +
            '配合 filter/map 可批量处理文件（如统计代码行数、清理临时文件）。\n' +
            '- **Path.of（Java 11+）**：`Path.of("a", "b")` 等价于 `Paths.get("a", "b")`，' +
            '是更简洁的工厂方法。`Files.readString`/`writeString` 也是 Java 11+ 才有，' +
            '旧版本需用 `new String(Files.readAllBytes(path), UTF_8)`。',
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
            '## 概念详解\n\n' +
            'Lambda 表达式是 Java 8 引入的核心特性，开启了 Java 函数式编程的大门。' +
            'Lambda 本质上是一个匿名函数——没有名字、不属于任何类、可作为参数传递、可保存在变量中。' +
            '语法为 `(参数列表) -> { 方法体 }`，例如 `(a, b) -> a + b`。' +
            '它让代码更简洁，特别是在处理集合、事件回调、多线程等场景，替代了大量样板化的匿名内部类。\n\n' +
            'Lambda 的核心基础是函数式接口（Functional Interface）——只有一个抽象方法的接口。' +
            'Lambda 表达式的类型必须是一个函数式接口，编译器根据上下文推断目标类型（目标类型推断）。' +
            '例如 `Comparator<String>` 接口的 `compare` 方法接收两个 String 返回 int，' +
            'Lambda `(a, b) -> a.length() - b.length()` 就可以赋值给它。\n\n' +
            'Java 8 在 `java.util.function` 包中预定义了大量函数式接口，避免重复造轮子。' +
            '自定义函数式接口用 `@FunctionalInterface` 注解标记（可选但推荐，' +
            '它让编译器检查是否符合"单抽象方法"约定，避免误加方法破坏接口）。' +
            '函数式接口可以有多个 default 方法或 static 方法，但只能有一个抽象方法。\n\n' +
            '方法引用（Method Reference）是 Lambda 的进一步简化：当 Lambda 体只是调用一个已存在的方法时，' +
            '可以用 `类名::方法名` 或 `对象::方法名` 替代。它让代码更简洁、更具表达力，' +
            '是函数式编程的"语法糖"。方法引用与等价的 Lambda 在语义上完全相同，编译器会做相同处理。\n\n' +
            '## 语法说明\n\n' +
            '### Lambda 语法\n\n' +
            '```java\n// 完整形式\n(int a, int b) -> { return a + b; }\n\n// 类型推断：可省略参数类型\n(a, b) -> { return a + b; }\n\n// 单表达式：可省略 return 和 {}\n(a, b) -> a + b\n\n// 单参数：可省略括号\nx -> System.out.println(x)\n\n// 无参数：必须用空括号\n() -> new Random().nextInt()\n\n// 多行方法体\n(a, b) -> {\n    int sum = a + b;\n    return sum * 2;\n}\n```\n\n' +
            '### 方法引用四种形式\n\n' +
            '```java\n// 1. 静态方法引用：类名::静态方法\nFunction<String, Integer> parser = Integer::parseInt;\n\n// 2. 特定对象的方法引用：对象::实例方法\nConsumer<String> printer = System.out::println;\n\n// 3. 类名::实例方法（第一个参数作为接收者）\n// String::length 等价于 (String s) -> s.length()\nFunction<String, Integer> len = String::length;\n\n// 4. 构造方法引用：类名::new\nSupplier<List<String>> listFactory = ArrayList::new;\nFunction<Integer, int[]> arrFactory = int[]::new;\n```\n\n' +
            '### 常用函数式接口表\n\n' +
            '| 接口 | 签名 | 用途 |\n|------|------|------|\n| `Predicate<T>` | `boolean test(T)` | 条件判断 |\n| `Consumer<T>` | `void accept(T)` | 消费（副作用） |\n| `Function<T,R>` | `R apply(T)` | 转换 T→R |\n| `Supplier<T>` | `T get()` | 工厂/延迟计算 |\n| `BiFunction<T,U,R>` | `R apply(T,U)` | 双参转换 |\n| `BiPredicate<T,U>` | `boolean test(T,U)` | 双参判断 |\n| `UnaryOperator<T>` | `T apply(T)` | 同类型转换 |\n| `BinaryOperator<T>` | `T apply(T,T)` | 同类型合并 |\n| `IntPredicate` | `boolean test(int)` | int 判断（无装箱） |\n| `IntFunction<R>` | `R apply(int)` | int→R |\n| `ToIntFunction<T>` | `int applyAsInt(T)` | T→int |\n\n' +
            '### Lambda 与匿名内部类对比表\n\n' +
            '| 特性 | 匿名内部类 | Lambda |\n|------|-----------|--------|\n| 语法 | 繁琐（new Interface() { ... }） | 简洁（() -> ...） |\n| this 指向 | 指向匿名类实例 | 指向外层类实例 |\n| 实例字段 | 可以有 | 不可以 |\n| 多方法接口 | 支持 | 不支持（仅函数式接口） |\n| 字节码 | 生成单独 .class | invokedynamic |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：Lambda 基础与排序**\n\n' +
            '```java\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("张三", "李四", "王五", "赵六");\n\n        // forEach 接收 Consumer Lambda\n        names.forEach(name -> System.out.println("你好, " + name));\n\n        // Lambda 排序（降序）\n        List<Integer> nums = Arrays.asList(5, 2, 8, 1, 9);\n        nums.sort((a, b) -> b - a);\n        System.out.println("降序: " + nums);\n\n        // 按字符串长度排序\n        names.sort((a, b) -> a.length() - b.length());\n        System.out.println("按长度: " + names);\n\n        // 方法引用\n        names.forEach(System.out::println);\n\n        // 自定义函数式接口\n        MathOperation add = (a, b) -> a + b;\n        MathOperation mul = (a, b) -> a * b;\n        System.out.println("3+4 = " + add.operate(3, 4));\n        System.out.println("3*4 = " + mul.operate(3, 4));\n    }\n\n    @FunctionalInterface\n    interface MathOperation {\n        int operate(int a, int b);\n    }\n}\n```\n\n' +
            '**示例 2：Predicate 组合条件**\n\n' +
            '```java\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.function.Predicate;\nimport java.util.function.Consumer;\nimport java.util.function.Function;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n        // Predicate: 判断条件\n        Predicate<Integer> isEven = n -> n % 2 == 0;\n        Predicate<Integer> isGreaterThan5 = n -> n > 5;\n\n        System.out.println("偶数: " + filter(nums, isEven));\n        // 组合条件 and / or / negate\n        System.out.println("偶数且>5: " + filter(nums, isEven.and(isGreaterThan5)));\n        System.out.println("偶数或>5: " + filter(nums, isEven.or(isGreaterThan5)));\n        System.out.println("非偶数: " + filter(nums, isEven.negate()));\n\n        // Consumer: 副作用，支持 andThen 链式\n        Consumer<String> step1 = s -> System.out.println("步骤1: " + s);\n        Consumer<String> step2 = s -> System.out.println("步骤2: " + s);\n        step1.andThen(step2).accept("数据");\n\n        // Function: 转换，支持 andThen / compose\n        Function<Integer, Integer> doubleIt = n -> n * 2;\n        Function<Integer, Integer> plusOne = n -> n + 1;\n        System.out.println("先翻倍再加1: " + doubleIt.andThen(plusOne).apply(5));  // 11\n        System.out.println("先加1再翻倍: " + doubleIt.compose(plusOne).apply(5));   // 12\n    }\n\n    static <T> List<T> filter(List<T> list, Predicate<T> pred) {\n        List<T> result = new ArrayList<>();\n        for (T item : list) if (pred.test(item)) result.add(item);\n        return result;\n    }\n}\n```\n\n' +
            '**示例 3：方法引用与 Supplier**\n\n' +
            '```java\nimport java.util.function.Supplier;\nimport java.util.function.Function;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.time.LocalDateTime;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Supplier: 无参返回值，常用于工厂/延迟\n        Supplier<LocalDateTime> now = LocalDateTime::now;\n        System.out.println("当前: " + now.get());\n\n        // 构造方法引用\n        Supplier<ArrayList<String>> listFactory = ArrayList::new;\n        List<String> list = listFactory.get();\n        list.add("构造引用创建的 List");\n\n        // Function 配合构造引用：把字符串转为 StringBuilder\n        Function<String, StringBuilder> sbFactory = StringBuilder::new;\n        StringBuilder sb = sbFactory.apply("hello");\n        sb.append(" world");\n        System.out.println(sb);\n\n        // Map 的 computeIfAbsent 配合 Supplier\n        Map<String, List<String>> graph = new HashMap<>();\n        graph.computeIfAbsent("A", k -> new ArrayList<>()).add("B");\n        graph.computeIfAbsent("A", k -> new ArrayList<>()).add("C");\n        System.out.println("图: " + graph);\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **Lambda 只能赋值给函数式接口**——接口必须只有一个抽象方法。' +
            '如果接口有多个抽象方法，编译器无法确定 Lambda 实现哪个，会报错。' +
            'default 方法不计入"抽象方法"数量。\n' +
            '2. **this 指向不同**——Lambda 中的 this 指向外层类实例（词法作用域），' +
            '而匿名内部类的 this 指向匿名实例本身。这是两者的关键语义差异，' +
            '在 Lambda 中访问外层实例字段直接用 `this.field`。\n' +
            '3. **变量捕获必须 effectively final**——Lambda 中引用的外层局部变量必须是 final 或事实上 final（不再修改）。' +
            '这是因为 Lambda 可能在另一线程执行，变量副本需保持一致。' +
            '实例字段和静态字段无此限制。\n' +
            '4. **避免过大 Lambda**——Lambda 应保持简短（通常 1-3 行）。复杂逻辑应提取为命名方法，' +
            '然后用方法引用传入，提升可读性和可测试性。\n' +
            '5. **Lambda 无独立作用域**——Lambda 不能定义与外层同名的局部变量，' +
            '而匿名内部类可以。Lambda 与外层共享作用域。\n' +
            '6. **不能抛受检异常除非接口声明**——如果函数式接口的方法没声明 throws，' +
            'Lambda 体就不能抛出受检异常（如 IOException）。' +
            '解决方式：在 Lambda 内 try-catch 包装为 RuntimeException，或自定义声明异常的接口。\n' +
            '7. **优先用预定义函数式接口**——`java.util.function` 包已有 Predicate/Consumer/Function 等，' +
            '避免重复定义 `MyPredicate`、`MyCallback` 等自定义接口，保持与生态一致。\n' +
            '8. **方法引用不能替换所有 Lambda**——当方法体有多步操作或参数顺序不匹配时，' +
            '无法用方法引用。例如 `x -> print(x, "extra")` 无法转为方法引用。\n\n' +
            '## 实际应用\n\n' +
            '1. **集合操作**：`list.forEach(x -> ...)`、`list.sort((a,b) -> ...)`、' +
            '`map.computeIfAbsent(key, k -> new ArrayList<>())`。Lambda 让集合操作代码量大幅减少。\n' +
            '2. **Stream API**：Stream 的 filter/map/reduce/forEach 全部接收 Lambda，' +
            '是 Lambda 最大的应用场景。`users.stream().filter(u -> u.isActive()).collect(toList())`。\n' +
            '3. **Optional 链式处理**：`Optional.map(x -> transform(x)).orElse(default)`，' +
            '用 Lambda 表达转换逻辑，比 if-null 检查更优雅。\n' +
            '4. **事件监听**：GUI 框架 `button.setOnAction(e -> handleClick(e))`；' +
            'Spring 的事件 `@EventListener(e -> ...)`。Lambda 替代了冗长的监听器类。\n' +
            '5. **线程与并发**：`new Thread(() -> runTask()).start()`、' +
            '`executor.submit(() -> process(data))`。Runnable/Callable 都是函数式接口。\n' +
            '6. **策略模式简化**：策略接口是函数式接口时，直接用 Lambda 传入策略，' +
            '无需定义策略类。`sort(list, (a,b) -> a.age - b.age)` 即一个策略。\n\n' +
            '## 扩展知识\n\n' +
            '- **invokedynamic 与性能**：Lambda 在字节码层用 `invokedynamic` 指令实现，' +
            'JVM 在首次调用时动态生成 Lambda 适配器类。相比匿名内部类每次创建独立 .class，' +
            'Lambda 更省内存、JIT 优化更好。\n' +
            '- **原始类型函数式接口**：`IntPredicate`/`IntFunction`/`LongConsumer` 等 ' +
            '避免了泛型的装箱/拆箱开销。处理 int/long/double 时优先用这些专用接口，性能更好。\n' +
            '- **柯里化（Currying）**：Java 不原生支持柯里化，但可用多级 Function 模拟：' +
            '`Function<Integer, Function<Integer, Integer>> add = a -> b -> a + b;`，' +
            '`add.apply(3).apply(4)` 返回 7。常用于部分应用参数。\n' +
            '- **闭包（Closure）**：Lambda 捕获外层变量形成闭包。Java 的闭包只能捕获 effectively final 变量，' +
            '是"只读闭包"，与 JavaScript/Python 的可变闭包不同。需要可变状态时用数组或 Atomic 容器。\n' +
            '- **@FunctionalInterface 注解**：注解非必需，但推荐加上。它让编译器检查接口是否为函数式接口，' +
            '防止后续误加抽象方法。JDK 的所有函数式接口都标注了此注解。\n' +
            '- **Lambda 与序列化**：Lambda 默认不可序列化。如果需要（如分布式计算传递函数），' +
            '可声明一个继承 Serializable 的函数式接口，但性能差且不推荐，应改用其他方式传递逻辑。',
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
            '## 概念详解\n\n' +
            'Stream API 是 Java 8 引入的函数式数据处理框架，让集合操作更声明式、更高效。' +
            'Stream 不是数据结构，也不是集合，而是对数据源（集合、数组、I/O 通道）的"计算流水线"。' +
            '它不存储数据、不修改源数据，而是按需生成中间结果。Stream 一旦被消费（终端操作）就关闭，' +
            '不能重复使用，需要重新从源创建。\n\n' +
            'Stream 操作分为两类：中间操作（intermediate）和终端操作（terminal）。' +
            '中间操作返回 Stream，可以链式调用，但延迟执行（lazy）——只有终端操作触发时才真正计算。' +
            '这种延迟特性带来性能优化机会：例如 `findFirst` 找到第一个匹配后，' +
            '上游的 filter 不会继续处理剩余元素（短路操作）。' +
            '终端操作触发计算并返回非 Stream 结果（List、Map、int、boolean 等）。\n\n' +
            'Stream 的核心优势是声明式编程——你描述"做什么"而非"怎么做"。' +
            '例如 `list.stream().filter(n -> n > 5).map(n -> n * 2).collect(toList())` ' +
            '比传统的 for 循环+if 更清晰、更易并行化。Stream 还支持并行处理：' +
            '`list.parallelStream()` 自动利用 ForkJoinPool 把数据分片，多核并行计算，' +
            '对于大数据集（万级以上）和计算密集任务可显著提升吞吐。' +
            '但小数据集或简单操作反而因线程切换开销变慢。\n\n' +
            '`collect` 是最灵活的终端操作，配合 `Collectors` 工具类可以收集为各种结果：' +
            '`toList`/`toSet`/`toMap` 收集为集合、`groupingBy` 分组、' +
            '`joining` 拼接字符串、`counting` 计数、`summarizingInt` 统计摘要、' +
            '`partitioningBy` 二分分区。`Collectors` 是 Stream 与集合/Map 之间的桥梁，' +
            '掌握它让数据处理代码更优雅。\n\n' +
            '## 语法说明\n\n' +
            '### Stream 创建方式\n\n' +
            '```java\nimport java.util.stream.Stream;\nimport java.util.stream.IntStream;\nimport java.util.Arrays;\nimport java.util.List;\n\n// 1. 从集合创建\nList<String> list = List.of("a", "b", "c");\nStream<String> s1 = list.stream();\nStream<String> s2 = list.parallelStream(); // 并行\n\n// 2. 从数组创建\nint[] arr = {1, 2, 3};\nIntStream s3 = Arrays.stream(arr);\nStream<Integer> s4 = Stream.of(1, 2, 3);\n\n// 3. 数值范围\nIntStream s5 = IntStream.range(0, 10);        // [0,10)\nIntStream s6 = IntStream.rangeClosed(1, 100); // [1,100]\n\n// 4. 无限流（配合 limit 使用）\nStream<Double> s7 = Stream.generate(Math::random).limit(5);\nStream<Integer> s8 = Stream.iterate(1, n -> n * 2).limit(10);\n\n// 5. Java 9+ iterate 带终止条件\nStream<Integer> s9 = Stream.iterate(1, n -> n < 100, n -> n * 2);\n```\n\n' +
            '### 中间操作与终端操作表\n\n' +
            '| 类别 | 方法 | 说明 |\n|------|------|------|\n| 中间 | `filter(Predicate)` | 过滤 |\n| 中间 | `map(Function)` | 一对一转换 |\n| 中间 | `flatMap(Function)` | 一对多展平 |\n| 中间 | `sorted()` / `sorted(Comparator)` | 排序 |\n| 中间 | `distinct()` | 去重（equals） |\n| 中间 | `limit(long)` | 取前 N 个 |\n| 中间 | `skip(long)` | 跳过前 N 个 |\n| 中间 | `peek(Consumer)` | 窥视（调试用） |\n| 终端 | `forEach(Consumer)` | 遍历 |\n| 终端 | `collect(Collector)` | 收集为集合/Map |\n| 终端 | `count()` | 计数 |\n| 终端 | `reduce(BinaryOp)` | 归约 |\n| 终端 | `findFirst()` | 第一个（Optional） |\n| 终端 | `findAny()` | 任一个（并行友好） |\n| 终端 | `anyMatch`/`allMatch`/`noneMatch` | 匹配判断 |\n| 终端 | `min`/`max` | 最值（Optional） |\n| 终端 | `toArray()` | 转数组 |\n\n' +
            '### Collectors 常用方法表\n\n' +
            '| 方法 | 结果类型 | 用途 |\n|------|---------|------|\n| `toList()` | `List<T>` | 收集为 List |\n| `toSet()` | `Set<T>` | 收集为 Set（去重） |\n| `toMap(k, v)` | `Map<K,V>` | 收集为 Map |\n| `joining(sep)` | `String` | 拼接字符串 |\n| `groupingBy(classifier)` | `Map<K,List<T>>` | 分组 |\n| `groupingBy(c, downstream)` | `Map<K,R>` | 分组+下游收集 |\n| `partitioningBy(pred)` | `Map<Boolean,List<T>>` | 二分分区 |\n| `counting()` | `Long` | 计数（下游） |\n| `summarizingInt(toInt)` | `IntSummaryStatistics` | 统计摘要 |\n| `mapping(func, downstream)` | `R` | 先转换再下游收集 |\n| `reducing(BinaryOp)` | `Optional<T>` | 归约（下游） |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：过滤、映射、归约**\n\n' +
            '```java\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n        // 过滤偶数\n        List<Integer> evens = nums.stream()\n            .filter(n -> n % 2 == 0)\n            .collect(Collectors.toList());\n        System.out.println("偶数: " + evens);\n\n        // 映射：每个数乘以 2\n        List<Integer> doubled = nums.stream()\n            .map(n -> n * 2)\n            .collect(Collectors.toList());\n        System.out.println("翻倍: " + doubled);\n\n        // 链式：过滤 >5 → 平方 → 排序\n        List<Integer> result = nums.stream()\n            .filter(n -> n > 5)\n            .map(n -> n * n)\n            .sorted()\n            .collect(Collectors.toList());\n        System.out.println(">5的平方: " + result);\n\n        // reduce 求和（初始值 0）\n        int sum = nums.stream().reduce(0, Integer::sum);\n        System.out.println("总和: " + sum);\n\n        // reduce 求最大值（无初始值，返回 Optional）\n        nums.stream().reduce(Integer::max)\n            .ifPresent(m -> System.out.println("最大: " + m));\n    }\n}\n```\n\n' +
            '**示例 2：groupingBy、joining、partitioningBy**\n\n' +
            '```java\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\n            "apple", "banana", "avocado", "cherry", "blueberry", "apricot"\n        );\n\n        // groupingBy: 按首字母分组\n        Map<Character, List<String>> grouped = words.stream()\n            .collect(Collectors.groupingBy(s -> s.charAt(0)));\n        System.out.println("按首字母分组: " + grouped);\n\n        // joining: 拼接字符串\n        String joined = words.stream()\n            .collect(Collectors.joining(", ", "[", "]"));\n        System.out.println("拼接: " + joined);\n\n        // groupingBy + counting: 按首字母计数\n        Map<Character, Long> countByChar = words.stream()\n            .collect(Collectors.groupingBy(s -> s.charAt(0), Collectors.counting()));\n        System.out.println("计数: " + countByChar);\n\n        // partitioningBy: 按长度 >5 分区\n        Map<Boolean, List<String>> parts = words.stream()\n            .collect(Collectors.partitioningBy(s -> s.length() > 5));\n        System.out.println("分区: " + parts);\n\n        // FizzBuzz 经典题\n        List<String> fizzBuzz = java.util.stream.IntStream.rangeClosed(1, 15)\n            .mapToObj(i -> {\n                if (i % 15 == 0) return "FizzBuzz";\n                if (i % 3 == 0) return "Fizz";\n                if (i % 5 == 0) return "Buzz";\n                return String.valueOf(i);\n            })\n            .collect(Collectors.toList());\n        System.out.println("FizzBuzz: " + fizzBuzz);\n    }\n}\n```\n\n' +
            '**示例 3：flatMap 与并行流**\n\n' +
            '```java\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\nimport java.util.stream.IntStream;\n\npublic class Main {\n    public static void main(String[] args) {\n        // flatMap：把嵌套结构展平\n        List<List<Integer>> nested = Arrays.asList(\n            Arrays.asList(1, 2, 3),\n            Arrays.asList(4, 5),\n            Arrays.asList(6, 7, 8, 9)\n        );\n        List<Integer> flat = nested.stream()\n            .flatMap(List::stream)  // 每个子 List 展平为元素\n            .collect(Collectors.toList());\n        System.out.println("展平: " + flat);\n\n        // flatMap 切分单词\n        List<String> lines = Arrays.asList("hello world", "java stream", "flat map");\n        List<String> words = lines.stream()\n            .flatMap(line -> Arrays.stream(line.split(" ")))\n            .collect(Collectors.toList());\n        System.out.println("单词: " + words);\n\n        // 并行流：1 到 100 求和\n        long sum = IntStream.rangeClosed(1, 100)\n            .parallel()\n            .sum();\n        System.out.println("并行求和: " + sum);\n\n        // distinct 去重\n        List<Integer> unique = Arrays.asList(1, 2, 2, 3, 3, 3, 4)\n            .stream().distinct().collect(Collectors.toList());\n        System.out.println("去重: " + unique);\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **Stream 只能消费一次**——一个 Stream 在终端操作后就关闭，再次操作会抛 IllegalStateException。' +
            '需要重新使用时从源重新创建：`collection.stream()`。\n' +
            '2. **Stream 不修改源数据**——所有操作返回新 Stream 或新集合，源集合不变。' +
            '这与 `Collection.removeIf` 等原地修改方法不同。\n' +
            '3. **中间操作是延迟的**——`filter`/`map` 在终端操作前不执行。' +
            '用 `peek` 调试时能观察到这一点。延迟执行也意味着副作用（如修改外部变量）的执行时机不可预测，' +
            '应避免在 Lambda 中产生副作用。\n' +
            '4. **并行流不总是更快**——`parallelStream` 有线程切换和分片开销，' +
            '小数据集（<10000）或简单操作往往比串流慢。而且并行流要求操作无状态、无副作用、不依赖顺序。' +
            '使用前最好 benchmark 测试。\n' +
            '5. **forEach 不保证顺序（并行时）**——并行流的 `forEach` 顺序不确定。' +
            '需要顺序用 `forEachOrdered`。`collect(toList())` 在并行流中会保持相遇顺序。\n' +
            '6. **reduce 与 collect 的区别**——`reduce` 不可变归约，每次创建新值，适合数值求和等；' +
            '`collect` 可变归约，累加到容器（如 ArrayList），适合收集为集合。' +
            '用 reduce 拼接 List 会产生大量中间对象，性能差，应改用 collect。\n' +
            '7. **避免在 Lambda 中修改共享状态**——并行流中修改共享变量会引发竞态条件。' +
            'Stream 操作应保持无状态、纯函数式。需要累积结果用 collect 或 reduce。\n' +
            '8. **优先用 IntStream/LongStream**——处理原始类型时，' +
            '`Stream<Integer>` 会装箱拆箱，性能差。`IntStream` 直接操作 int，无装箱开销。\n\n' +
            '## 实际应用\n\n' +
            '1. **数据查询转换**：从数据库查询实体列表 → filter 过滤 → map 转 DTO → collect 为 List 返回前端。' +
            '这是后端 API 最常见的模式，Stream 让代码简洁清晰。\n' +
            '2. **分组报表**：`groupingBy` 按部门/月份/类别分组统计数据。' +
            '如 `employees.stream().collect(groupingBy(Employee::getDept, counting()))` 统计各部门人数。\n' +
            '3. **ETL 数据清洗**：`Files.lines()` 读取 CSV → `map` 解析字段 → `filter` 清洗无效行 → ' +
            '`collect` 写入数据库。流式处理百万行数据不占内存。\n' +
            '4. **集合转 Map 索引**：`toMap(User::getId, u -> u)` 把用户列表转为 id→User 的 Map，' +
            '便于 O(1) 查询。注意重复 key 要指定 merge 函数，否则抛异常。\n' +
            '5. **批处理与并行**：大数据集用 `parallelStream` 并行处理，如批量图片缩放、批量发邮件。' +
            '配合 `Collectors.partitioningBy` 把数据分批提交到线程池。\n' +
            '6. **FizzBuzz 面试题**：经典编程题用 Stream + IntStream 实现展现了声明式编程的表达力，' +
            '是面试中展示现代 Java 功底的利器。\n\n' +
            '## 扩展知识\n\n' +
            '- **短路操作（Short-circuiting）**：`findFirst`/`findAny`/`anyMatch`/`allMatch`/`noneMatch`/`limit` ' +
            '是短路操作——不需要处理全部元素就能返回结果。例如 `anyMatch` 找到第一个匹配立即返回，' +
            '上游 filter 不再处理剩余元素，性能优势明显。\n' +
            '- **Collector 接口**：`Collector` 由 supplier/accumulator/combiner/finisher/characteristics 五部分组成。' +
            '自定义 Collector 可实现复杂收集逻辑，如收集为不可变集合、多级分组等。\n' +
            '- **Stream 与 Iterator 的区别**：Iterator 是外部迭代（手动控制），Stream 是内部迭代（库控制）。' +
            '内部迭代让库有机会优化（如短路、并行、融合操作），是 Stream 性能优势的根源。\n' +
            '- **Collectors.toUnmodifiableList（Java 10+）**：返回不可变 List，比 `toList`（返回可变 ArrayList）更安全。' +
            'Java 16+ 的 `Stream.toList()` 直接返回不可变 List，更简洁。\n' +
            '- **flatMap 与 map 的区别**：`map` 一对一转换（每个元素变一个元素），' +
            '`flatMap` 一对多展平（每个元素变一个 Stream，再合并）。' +
            '处理 `List<List<T>>` 或 `Optional<Optional<T>>` 时必须用 flatMap。\n' +
            '- **Reactive Streams**：Java 9 引入的 `Flow` 类（响应式流）与 Stream API 思想类似但不同：' +
            'Stream 是同步拉取，Reactive Streams 是异步推背压。RxJava/Reactor 是其实现，' +
            '用于高并发非阻塞场景。',
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
            '## 概念详解\n\n' +
            '`Optional<T>` 是 Java 8 引入的容器对象，用于优雅地处理可能为 null 的值。' +
            '它要么包含一个非空值，要么为空（empty）。Optional 的目标是减少 NullPointerException（NPE），' +
            '强制开发者显式处理缺失值的情况，让"可能为空"在类型层面可见，而不是隐藏在代码里等待运行时爆炸。\n\n' +
            '在 Java 8 之前，处理可能为 null 的返回值是危险的手动操作：调用方很容易忘记 null 检查，' +
            '导致 NPE 在运行时炸开。Optional 把"可能无值"编码到返回类型中——`Optional<User>` 明确告诉调用方：' +
            '"这个方法可能找不到用户，你必须处理空的情况"。这是一种"显式优于隐式"的设计哲学。\n\n' +
            'Optional 的精髓在于链式操作。`map`/`flatMap`/`filter` 让多层嵌套的 null 检查变为流畅的流水线。' +
            '例如 `user.map(User::getAddress).map(Address::getCity).orElse("未知")`，' +
            '任何一步为空都会跳过后续操作，最终返回默认值，无需手动写多层 if-null。\n\n' +
            'Optional 不是 null 的完全替代品。它主要用于方法返回类型，表示"可能无结果"。' +
            '不要用它作为字段类型、方法参数或集合元素——Optional 不可序列化，' +
            '且每次包装都有对象创建开销。在内部代码中，仍需用 null 表示"无值"，' +
            '只在 API 边界（方法返回）用 Optional 包装。\n\n' +
            '## 语法说明\n\n' +
            '### 创建 Optional\n\n' +
            '```java\nimport java.util.Optional;\n\n// 1. of(value): 值不能为 null，否则抛 NPE\nOptional<String> o1 = Optional.of("hello");\n\n// 2. ofNullable(value): 值可为 null，为 null 时返回 empty\nOptional<String> o2 = Optional.ofNullable(maybeNull);\n\n// 3. empty(): 创建空 Optional\nOptional<String> o3 = Optional.empty();\n```\n\n' +
            '### 消费 Optional\n\n' +
            '```java\nimport java.util.Optional;\nimport java.util.function.Supplier;\n\n// 判断\nopt.isPresent();              // 有值返回 true\nopt.isEmpty();                // Java 11+，无值返回 true\n\n// 取值（不推荐直接 get）\nopt.get();                    // 有值返回值，无值抛 NoSuchElementException\n\n// 有值时执行\nopt.ifPresent(v -> System.out.println(v));\n// Java 9+ 带空值处理\nopt.ifPresentOrElse(\n    v -> System.out.println("值: " + v),\n    () -> System.out.println("空")\n);\n\n// 默认值\nopt.orElse("默认");                    // 无值返回默认\nopt.orElseGet(() -> computeDefault()); // 无值时惰性计算\nopt.orElseThrow(() -> new RuntimeException("无值")); // 无值抛异常\n// Java 10+ or(otherOptional): 无值时切换到另一个 Optional\nopt.or(() -> Optional.of("备用"));\n```\n\n' +
            '### Optional 常用方法表\n\n' +
            '| 方法 | 说明 |\n|------|------|\n| `of(T)` | 创建非空 Optional（null 抛 NPE） |\n| `ofNullable(T)` | 创建可空 Optional（null 返回 empty） |\n| `empty()` | 创建空 Optional |\n| `isPresent()` | 有值返回 true |\n| `isEmpty()` | Java 11+，无值返回 true |\n| `get()` | 取值（无值抛异常，不推荐单独用） |\n| `ifPresent(Consumer)` | 有值时执行 |\n| `ifPresentOrElse(c, r)` | Java 9+，有值/无值分别执行 |\n| `orElse(T)` | 无值返回默认 |\n| `orElseGet(Supplier)` | 无值惰性计算默认 |\n| `orElseThrow(Supplier)` | 无值抛指定异常 |\n| `or(Supplier)` | Java 10+，无值切换到另一 Optional |\n| `map(Function)` | 转换值（有值才执行） |\n| `flatMap(Function)` | 转换值（避免 Optional 嵌套） |\n| `filter(Predicate)` | 过滤值 |\n| `stream()` | Java 9+，转为 Stream |\n\n' +
            '### map vs flatMap 对比表\n\n' +
            '| 场景 | map 结果 | flatMap 结果 |\n|------|---------|--------------|\n| `opt.map(s -> s.length())` | `Optional<Integer>` | - |\n| `opt.map(s -> Optional.of(s.length()))` | `Optional<Optional<Integer>>` | - |\n| `opt.flatMap(s -> Optional.of(s.length()))` | - | `Optional<Integer>` |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：Optional 基本用法**\n\n' +
            '```java\nimport java.util.Optional;\n\npublic class Main {\n    public static void main(String[] args) {\n        Optional<String> present = Optional.of("Hello");\n        Optional<String> absent = Optional.ofNullable(null);\n\n        System.out.println(present.isPresent());    // true\n        System.out.println(absent.isPresent());     // false\n        System.out.println(present.isEmpty());      // false (Java 11+)\n        System.out.println(absent.isEmpty());       // true  (Java 11+)\n\n        System.out.println(present.orElse("默认"));  // Hello\n        System.out.println(absent.orElse("默认"));   // 默认\n\n        present.ifPresent(s -> System.out.println("值: " + s));\n        absent.ifPresent(s -> System.out.println("不会执行"));\n\n        // Java 9+ ifPresentOrElse\n        present.ifPresentOrElse(\n            s -> System.out.println("有值: " + s),\n            () -> System.out.println("空了")\n        );\n    }\n}\n```\n\n' +
            '**示例 2：map/filter 链式转换**\n\n' +
            '```java\nimport java.util.Optional;\n\npublic class Main {\n    public static void main(String[] args) {\n        Optional<String> name = Optional.of("  Java  ");\n\n        // 链式：去空格 → 转大写 → 过滤长度\n        String result = name\n            .map(String::trim)\n            .map(String::toUpperCase)\n            .filter(s -> s.length() > 2)\n            .orElse("EMPTY");\n        System.out.println(result); // JAVA\n\n        // 任一步为空，后续跳过\n        Optional<String> empty = Optional.ofNullable(null);\n        String r = empty\n            .map(String::trim)\n            .map(String::toUpperCase)\n            .orElse("默认");\n        System.out.println(r); // 默认\n\n        // orElseGet 惰性计算\n        String lazy = Optional.<String>empty()\n            .orElseGet(() -> {\n                System.out.println("计算默认值");\n                return "Computed";\n            });\n        System.out.println(lazy);\n    }\n}\n```\n\n' +
            '**示例 3：flatMap 与嵌套 Optional**\n\n' +
            '```java\nimport java.util.Optional;\n\nclass User {\n    String name;\n    Address address;\n    User(String n, Address a) { name = n; address = a; }\n    Optional<Address> getAddress() { return Optional.ofNullable(address); }\n}\n\nclass Address {\n    String city;\n    Address(String c) { city = c; }\n    Optional<String> getCity() { return Optional.ofNullable(city); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        User u1 = new User("张三", new Address("北京"));\n        User u2 = new User("李四", null);\n        User u3 = null;\n\n        // flatMap 避免 Optional<Optional<...>> 嵌套\n        Optional<User> opt1 = Optional.ofNullable(u1);\n        String city1 = opt1\n            .flatMap(User::getAddress)\n            .flatMap(Address::getCity)\n            .orElse("未知");\n        System.out.println(city1); // 北京\n\n        Optional<User> opt2 = Optional.ofNullable(u2);\n        String city2 = opt2\n            .flatMap(User::getAddress)\n            .flatMap(Address::getCity)\n            .orElse("未知");\n        System.out.println(city2); // 未知（address 为 null）\n\n        Optional<User> opt3 = Optional.ofNullable(u3);\n        String city3 = opt3\n            .flatMap(User::getAddress)\n            .flatMap(Address::getCity)\n            .orElse("未知");\n        System.out.println(city3); // 未知（u3 为 null）\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **不要用 Optional 作为字段类型**——Optional 不可序列化（不实现 Serializable），' +
            '用作 JPA 实体字段会报错；用作普通类字段增加对象创建开销。Optional 设计为方法返回类型。\n' +
            '2. **不要用 Optional 作为方法参数**——参数为空用方法重载（一个无参版本）比 Optional 更自然。' +
            'Optional 参数增加调用方负担（要包装），且语义不如 null 检查清晰。\n' +
            '3. **避免直接用 get()**——`get()` 在空 Optional 上抛 NoSuchElementException，' +
            '比 NPE 更难调试。应配合 `isPresent()` 检查，或改用 `orElse`/`orElseThrow`。\n' +
            '4. **orElse vs orElseGet**——`orElse(default)` 总是计算 default（即使 Optional 有值也计算），' +
            '`orElseGet(supplier)` 只在无值时才调用 supplier。默认值计算昂贵时用 orElseGet 避免浪费。\n' +
            '5. **map vs flatMap**——`map` 返回的值会被自动包装为 Optional，' +
            '如果方法本身返回 Optional，用 `flatMap` 避免嵌套 `Optional<Optional<T>>`。' +
            '规则：方法返回 Optional 用 flatMap，返回普通值用 map。\n' +
            '6. **Optional 不是性能优化**——每次创建 Optional 都有对象分配开销，' +
            '在性能关键路径上慎用。Optional 的价值是可读性和安全性，不是速度。\n' +
            '7. **Optional 不能作为同步锁**——Optional 是普通对象，但不应作为 synchronized 锁。' +
            '每次方法调用返回新 Optional 实例，锁不住。\n' +
            '8. **Stream 中的 Optional**——`Stream<Optional<T>>` 用 `flatMap(Optional::stream)`（Java 9+）' +
            '过滤掉空 Optional 并提取值。`optional.stream()` 把 Optional 转为 0 或 1 元素的 Stream。\n\n' +
            '## 实际应用\n\n' +
            '1. **数据库查询返回**：`userRepository.findById(id)` 返回 `Optional<User>`，' +
            '调用方用 `orElseThrow(() -> new UserNotFoundException(id))` 显式抛业务异常，' +
            'API 契约清晰——"找不到用户"是预期情况，必须处理。\n' +
            '2. **配置读取**：`config.get("key")` 返回 `Optional<String>`，' +
            '链式 `map(Integer::parseInt).filter(n -> n > 0).orElse(1)` 解析为正整数并给默认值，' +
            '比 if-null 链更优雅。\n' +
            '3. **Map 查找**：`Optional.ofNullable(map.get(key)).orElse(default)` 处理 Map 中可能不存在的 key。' +
            'Java 8 的 `getOrDefault` 已替代此用法，但链式场景 Optional 仍有用。\n' +
            '4. **Stream findFirst/findAny**：Stream 的 `findFirst`/`findAny`/`min`/`max`/`reduce` ' +
            '都返回 Optional，因为可能流为空无结果。配合 `ifPresent`/`orElse` 处理。\n' +
            '5. **嵌套对象导航**：`user.map(User::getProfile).map(Profile::getEmail).orElse("")`，' +
            '替代 `user != null && user.getProfile() != null ? user.getProfile().getEmail() : ""`，' +
            '可读性大幅提升。\n' +
            '6. **命令式 API 包装**：调用返回可能为 null 的旧 API（如第三方库），' +
            '用 `Optional.ofNullable(legacyApi.call())` 包装，让后续处理强制考虑空值情况。\n\n' +
            '## 扩展知识\n\n' +
            '- **@Nullable 注解**：JetBrains/JSR-305 的 `@Nullable` 注解在字段/参数/返回值上声明可空性，' +
            'IDE 和静态分析工具据此检查。与 Optional 互补——内部代码用 @Nullable，API 边界用 Optional。\n' +
            '- **OptionalInt/OptionalLong/OptionalDouble**：原始类型版本的 Optional，' +
            '避免 Integer 装箱开销。但功能比 Optional 少（无 map/flatMap），使用较少。\n' +
            '- **空对象模式（Null Object）**：用表示"空"的特殊对象替代 null，' +
            '如 `User.NULL` 或 `Collections.emptyList()`。与 Optional 思路类似，但 Optional 更轻量。\n' +
            '- **Kotlin 的可空类型**：Kotlin 在语言层面用 `String?` 表示可空，编译器强制 null 检查，' +
            '比 Java 的 Optional 更彻底。Java 的 Optional 是库层面方案，Kotlin 是语言层面方案。\n' +
            '- **Optional 与序列化**：Optional 不实现 Serializable，不能直接用于 RMI/JPA 字段。' +
            '需要序列化的场景用 `@Nullable` 注解 + null，方法返回时再包装为 Optional。\n' +
            '- **Vavr 的 Try/Option**：函数式库 Vavr 的 Option 与 Java Optional 类似但功能更全，' +
            'Try 还能表示成功/失败。这些函数式类型在响应式编程中常用。',
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
            '## 概念详解\n\n' +
            '设计模式是前人总结的、可复用的面向对象设计经验，是解决特定问题的"模板"。' +
            'GoF（Gang of Four）经典著作归纳了 23 种设计模式，分为三大类：创建型（对象的创建）、' +
            '结构型（类与对象的组合）、行为型（对象间的职责分配）。Java 作为典型 OOP 语言，' +
            '设计模式应用广泛，框架源码（Spring、MyBatis）中随处可见。掌握常用模式能让代码更灵活、可维护、可扩展。\n\n' +
            '本节介绍三种高频模式：模板方法（行为型）、策略模式（行为型）、单例模式（创建型）。' +
            '这三种模式在实际开发中出现频率最高，是入门设计模式的最佳起点。' +
            '它们分别解决"算法骨架复用"、"算法互换"、"唯一实例"三个常见问题。\n\n' +
            '**模板方法模式（Template Method）**：在父类定义算法骨架（用 final 方法锁定流程），' +
            '将某些步骤声明为 abstract，延迟到子类实现。好处是算法结构不变，子类可定制细节。' +
            '这是"好莱坞原则"（Don\'t call us, we\'ll call you）的体现——父类调用子类方法，' +
            '而非子类调用父类。典型应用：框架的生命周期回调、Spring 的 JdbcTemplate。\n\n' +
            '**策略模式（Strategy）**：定义一系列算法，封装为独立类（实现同一接口），使它们可互换。' +
            '客户端持有一个策略接口引用，运行时可替换具体策略。策略模式消除了一堆 if-else 的条件判断，' +
            '让算法变化独立于使用算法的客户端。在 Java 8+ 中，策略接口若是函数式接口，' +
            '可直接用 Lambda 传入，无需定义策略类，大大简化了使用。\n\n' +
            '**单例模式（Singleton）**：保证一个类只有一个实例，提供全局访问点。' +
            'Java 实现方式多样：饿汉式（类加载时创建）、懒汉式（首次使用时创建）、' +
            '双重检查锁（double-checked locking，懒加载+线程安全）、静态内部类（优雅的懒加载）、' +
            '枚举单例（推荐，线程安全、防反射、防序列化）。单例常用于配置管理、连接池、日志器等全局资源。\n\n' +
            '## 语法说明\n\n' +
            '### 模板方法模式结构\n\n' +
            '```java\n// 父类：定义算法骨架\nabstract class AbstractClass {\n    // 模板方法：final 防止子类修改流程\n    public final void templateMethod() {\n        step1();\n        step2();\n        hook();  // 钩子方法（可选重写）\n    }\n    protected abstract void step1();  // 子类必须实现\n    protected abstract void step2();  // 子类必须实现\n    protected void hook() {}          // 默认空实现，子类可选重写\n}\n\nclass ConcreteClass extends AbstractClass {\n    @Override protected void step1() { System.out.println("步骤1"); }\n    @Override protected void step2() { System.out.println("步骤2"); }\n}\n```\n\n' +
            '### 策略模式结构\n\n' +
            '```java\n// 策略接口\ninterface Strategy {\n    int execute(int a, int b);\n}\n\n// 具体策略\nclass AddStrategy implements Strategy {\n    public int execute(int a, int b) { return a + b; }\n}\nclass MulStrategy implements Strategy {\n    public int execute(int a, int b) { return a * b; }\n}\n\n// 上下文：持有策略引用\nclass Context {\n    private Strategy strategy;\n    public void setStrategy(Strategy s) { this.strategy = s; }\n    public int compute(int a, int b) { return strategy.execute(a, b); }\n}\n\n// Java 8+ 用 Lambda 简化\nContext ctx = new Context();\nctx.setStrategy((a, b) -> a - b);  // 直接传 Lambda\n```\n\n' +
            '### 单例模式五种实现\n\n' +
            '```java\n// 1. 饿汉式（类加载时创建，线程安全）\nclass EagerSingleton {\n    private static final EagerSingleton INSTANCE = new EagerSingleton();\n    private EagerSingleton() {}\n    public static EagerSingleton getInstance() { return INSTANCE; }\n}\n\n// 2. 懒汉式（延迟创建，需同步）\nclass LazySingleton {\n    private static LazySingleton instance;\n    private LazySingleton() {}\n    public static synchronized LazySingleton getInstance() {\n        if (instance == null) instance = new LazySingleton();\n        return instance;\n    }\n}\n\n// 3. 双重检查锁（推荐，懒加载+高性能）\nclass DCLSingleton {\n    private static volatile DCLSingleton instance;\n    private DCLSingleton() {}\n    public static DCLSingleton getInstance() {\n        if (instance == null) {\n            synchronized (DCLSingleton.class) {\n                if (instance == null) instance = new DCLSingleton();\n            }\n        }\n        return instance;\n    }\n}\n\n// 4. 静态内部类（优雅，懒加载+线程安全）\nclass HolderSingleton {\n    private HolderSingleton() {}\n    private static class Holder {\n        static final HolderSingleton INSTANCE = new HolderSingleton();\n    }\n    public static HolderSingleton getInstance() { return Holder.INSTANCE; }\n}\n\n// 5. 枚举单例（最佳实践）\nenum EnumSingleton {\n    INSTANCE;\n    public void doSomething() {}\n}\n```\n\n' +
            '### 单例模式对比表\n\n' +
            '| 实现 | 懒加载 | 线程安全 | 防反射 | 防序列化 | 推荐度 |\n|------|--------|---------|--------|---------|-------|\n| 饿汉式 | 否 | 是 | 否 | 否 | 中 |\n| 懒汉式 synchronized | 是 | 是 | 否 | 否 | 低 |\n| 双重检查锁 | 是 | 是 | 否 | 否 | 中 |\n| 静态内部类 | 是 | 是 | 否 | 否 | 高 |\n| 枚举 | 否 | 是 | 是 | 是 | 最高 |\n\n' +
            '### 设计模式分类表（GoF 23 种）\n\n' +
            '| 类别 | 常见模式 |\n|------|---------|\n| 创建型 | 单例、工厂方法、抽象工厂、建造者、原型 |\n| 结构型 | 适配器、装饰器、代理、外观、组合、享元、桥接 |\n| 行为型 | 模板方法、策略、观察者、责任链、命令、状态、迭代器、中介者、备忘录、访问者 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：模板方法模式**\n\n' +
            '```java\n// 模板方法：父类定义流程，子类实现细节\nabstract class Game {\n    abstract void initialize();\n    abstract void play();\n    abstract void end();\n\n    // 模板方法：final 防止子类修改流程\n    public final void run() {\n        initialize();\n        play();\n        end();\n    }\n}\n\nclass Football extends Game {\n    void initialize() { System.out.println("足球准备：场地、球门"); }\n    void play() { System.out.println("踢足球：进攻、防守"); }\n    void end() { System.out.println("比赛结束：颁奖"); }\n}\n\nclass Chess extends Game {\n    void initialize() { System.out.println("棋类准备：摆棋盘"); }\n    void play() { System.out.println("下棋：思考、落子"); }\n    void end() { System.out.println("棋局结束：复盘"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new Football().run();\n        System.out.println("---");\n        new Chess().run();\n    }\n}\n```\n\n' +
            '**示例 2：策略模式（含 Lambda）**\n\n' +
            '```java\nimport java.util.Arrays;\nimport java.util.List;\n\n// 策略接口（函数式接口）\n@FunctionalInterface\ninterface DiscountStrategy {\n    double apply(double price);\n}\n\nclass Order {\n    private double price;\n    Order(double p) { price = p; }\n    double finalPrice(DiscountStrategy strategy) { return strategy.apply(price); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Order order = new Order(100.0);\n\n        // 传统：定义策略类\n        DiscountStrategy tenPercent = new DiscountStrategy() {\n            public double apply(double p) { return p * 0.9; }\n        };\n        System.out.println("9折: " + order.finalPrice(tenPercent));\n\n        // Java 8+: 用 Lambda 简化\n        System.out.println("8折: " + order.finalPrice(p -> p * 0.8));\n        System.out.println("满减: " + order.finalPrice(p -> p > 50 ? p - 20 : p));\n        System.out.println("无折扣: " + order.finalPrice(p -> p));\n    }\n}\n```\n\n' +
            '**示例 3：枚举单例与双重检查锁**\n\n' +
            '```java\n// 枚举单例（最佳实践）\nenum Logger {\n    INSTANCE;\n    private int logCount = 0;\n    public void log(String msg) {\n        logCount++;\n        System.out.println("[LOG #" + logCount + "] " + msg);\n    }\n}\n\n// 双重检查锁单例\nclass ConfigManager {\n    private static volatile ConfigManager instance;\n    private java.util.Map<String, String> config = new java.util.HashMap<>();\n\n    private ConfigManager() {\n        config.put("env", "prod");\n        config.put("timeout", "30");\n    }\n\n    public static ConfigManager getInstance() {\n        if (instance == null) {\n            synchronized (ConfigManager.class) {\n                if (instance == null) instance = new ConfigManager();\n            }\n        }\n        return instance;\n    }\n\n    public String get(String key) { return config.get(key); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Logger.INSTANCE.log("启动");\n        Logger.INSTANCE.log("加载配置");\n\n        ConfigManager cfg = ConfigManager.getInstance();\n        System.out.println("env: " + cfg.get("env"));\n        System.out.println("timeout: " + cfg.get("timeout"));\n\n        // 验证唯一实例\n        ConfigManager cfg2 = ConfigManager.getInstance();\n        System.out.println("同一实例: " + (cfg == cfg2)); // true\n    }\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **模式不是万能药**——设计模式是工具，不是目标。过度使用模式（为了用模式而用模式）' +
            '会让代码更复杂。简单的 if-else 没必要硬套策略模式。原则：先写能用的代码，' +
            '发现重复或僵硬时再考虑模式重构。\n' +
            '2. **模板方法的 final 关键字**——模板方法应声明为 final，防止子类修改算法骨架。' +
            '如果允许子类覆盖流程，就失去了模板方法的意义。但抽象步骤（abstract 方法）必须由子类实现。\n' +
            '3. **策略模式与 if-else 的取舍**——2-3 个简单分支用 if-else 更直接，' +
            '4+ 个分支或策略可能扩展时用策略模式。Java 8+ 的 Lambda 让策略模式成本极低，' +
            '更倾向于用策略模式替代长 if-else 链。\n' +
            '4. **单例的 volatile 必不可少**——双重检查锁中 instance 字段必须 volatile，' +
            '否则指令重排序可能导致其他线程拿到未完全初始化的对象。这是 Java 内存模型（JMM）的细节，' +
            '容易踩坑。\n' +
            '5. **枚举单例的局限**——枚举单例不能懒加载（类加载时创建），' +
            '也不能继承其他类（enum 隐式继承 java.lang.Enum）。如果需要懒加载或继承，用静态内部类方式。\n' +
            '6. **单例与测试**——单例全局状态让单元测试困难（无法隔离测试）。' +
            '可测试性更好的做法是依赖注入（DI），Spring 的 @Autowired + @Component 是其体现。' +
            '新项目应优先用 DI 而非手写单例。\n' +
            '7. **策略模式的策略选择**——策略可由配置文件、数据库、用户输入决定。' +
            '配合工厂模式（根据 key 创建策略实例）是常见组合。Spring 中用 @Qualifier 或 Map 注入策略 bean。\n' +
            '8. **避免滥用单例**——单例本质是全局变量，违反"高内聚低耦合"。' +
            '配置、日志、连接池等基础设施适合单例；业务对象（如 UserService）不应是单例，' +
            '应由容器（Spring）管理生命周期。\n\n' +
            '## 实际应用\n\n' +
            '1. **模板方法在框架中**：Spring 的 `JdbcTemplate`、`RestTemplate`、`TransactionTemplate` ' +
            '都是模板方法模式——父类定义"获取连接→执行→关闭"流程，子类（Lambda）只实现 SQL 查询逻辑。' +
            '这是模板方法 + Lambda 的经典组合。\n' +
            '2. **策略模式在 Spring**：Spring 的 `Resource` 接口（ClassPathResource/FileSystemResource）' +
            '是策略模式。配合 `@Autowired Map<String, Strategy>` 可注入所有策略 bean，按 key 选择。' +
            '支付方式选择（微信/支付宝/银行卡）是典型策略场景。\n' +
            '3. **单例在框架中**：Spring 的 bean 默认是单例（scope=singleton），' +
            '但由容器管理而非手写。日志框架（Logback、Log4j）的 Logger 是单例。' +
            '数据库连接池（HikariCP）的 DataSource 通常是单例。\n' +
            '4. **策略模式替代 if-else**：电商促销规则（满减、打折、买赠）用策略模式封装，' +
            '配合规则引擎（如 Drools）或配置中心动态切换策略，避免每次改促销都改代码。\n' +
            '5. **模板方法与钩子方法**：Servlet 的 `HttpServlet` 的 `doGet`/`doPost` 是钩子方法，' +
            '开发者重写它们，框架调用。`init`/`destroy` 是生命周期回调，也是模板方法的体现。\n' +
            '6. **单例与全局配置**：应用的配置管理（如 `Configuration.getInstance()`）常用单例，' +
            '全局读取配置。但更现代的做法是依赖注入 + @ConfigurationProperties，让配置可测试。\n\n' +
            '## 扩展知识\n\n' +
            '- **工厂模式（Factory）**：定义创建对象的接口，让子类决定实例化哪个类。' +
            'Spring 的 `BeanFactory`、JDBC 的 `DriverManager.getConnection` 都是工厂模式。' +
            '与单例模式常组合——工厂内部用单例管理产品实例。\n' +
            '- **观察者模式（Observer）**：一对多依赖，主题状态变化时通知所有观察者。' +
            'Java 的 `PropertyChangeListener`、Spring 的 `ApplicationEvent`、RxJava 的 Observable 都是其实现。' +
            '响应式编程的核心。\n' +
            '- **装饰器模式（Decorator）**：动态给对象添加职责，比继承更灵活。' +
            'Java I/O 的 `BufferedReader(new FileReader(...))` 是装饰器链。' +
            '与代理模式结构相似，但目的不同——装饰器增强功能，代理控制访问。\n' +
            '- **建造者模式（Builder）**：分离复杂对象的构造与表示。' +
            '`StringBuilder`、Lombok 的 `@Builder`、OkHttp 的 `Request.Builder` 都是。' +
            '解决构造参数过多时的可读性问题。\n' +
            '- **设计原则 SOLID**：单一职责、开闭原则、里氏替换、接口隔离、依赖倒置。' +
            '设计模式是这些原则的具体应用。例如策略模式体现开闭原则（新增策略不改原有代码），' +
            '依赖倒置（面向接口编程）。\n' +
            '- **设计模式的过度使用**——"模式病"是新手常犯的错误：到处套模式，代码反而更复杂。' +
            '模式应解决实际问题，不是装饰。判断标准：用了模式后代码是否更易理解、更易扩展？' +
            '如果答案是"否"，就不用模式。',
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