import type { CourseContent } from './types'

/**
 * Rust 系统编程课程（7 章 27 节）
 *
 * Rust 代码通过 OnlineCompiler.io 以 rust-1.87 编译器执行。
 * println! 宏输出被捕获为 stdout，expected_output 与输出文本对应（不含末尾换行）。
 * 每段代码必须是完整可编译的 Rust 程序（含 fn main）。
 */
export const rustCourse: CourseContent = {
  id: 'course-rust',
  slug: 'rust',
  title: 'Rust 系统编程',
  description: '从所有权到泛型与生命周期，系统学习 Rust 核心语法与内存安全编程思维，写出生产级代码。',
  language: 'rust',
  difficulty: 'intermediate',
  chapters: [
    // ================================================================
    // 第 1 章：Rust 入门
    // ================================================================
    {
      id: 'rust-ch1',
      title: 'Rust 入门',
      order: 0,
      lessons: [
        {
          id: 'rust-ch1-l1',
          title: 'Hello World 与第一个程序',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '每个 Rust 程序都从 `fn main()` 开始，这是程序的入口函数。' +
            'Rust 使用花括号 `{}` 划分代码块，语句以分号 `;` 结尾。' +
            '`println!` 是一个**宏**（macro），不是函数——末尾的 `!` 是宏的标志。' +
            '宏在编译时展开为代码，这让 `println!` 能在编译期检查格式字符串与参数的匹配，防止运行时格式化错误。\n\n' +
            '**为什么 Rust 用宏而不是函数？** `println!` 需要在编译期检查占位符数量与参数数量是否匹配，' +
            '函数做不到这种编译期检查（函数参数个数固定）。宏在编译时展开，编译器能看到占位符与参数的对应关系，' +
            '不匹配会直接编译报错，而非运行时崩溃。这是 Rust"编译期安全优先"哲学的体现。\n\n' +
            '**何时用 println! / print! / eprintln!？** `println!` 输出到 stdout 并换行；' +
            '`print!` 输出到 stdout 不换行；`eprintln!` 输出到 stderr（错误流）并换行。' +
            '正常输出用 println!，错误信息用 eprintln!（便于管道重定向分离）。\n\n' +
            '`cargo` 是 Rust 的构建系统和包管理器。`cargo new 项目名` 创建新项目，' +
            '`cargo build` 编译，`cargo run` 编译并运行，`cargo test` 运行测试。' +
            'Cargo.toml 是项目的配置文件，管理依赖和元数据。\n\n' +
            'Rust 的设计哲学是"编译期安全优先"——很多在其他语言中运行时才暴露的错误（空指针、数据竞争、' +
            '缓冲区溢出），在 Rust 中编译期就被拦截。学习 Rust 的曲线较陡，但掌握后能写出极其可靠的系统级代码。\n\n' +
            '## 语法说明\n\n' +
            '### 程序基本结构\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    // 语句以分号结尾\n' +
            '    println!("Hello, World!");\n' +
            '}\n' +
            '```\n\n' +
            '`fn` 关键字声明函数，`main` 是入口函数名。花括号 `{}` 定义函数体。' +
            '字符串字面量用双引号，语句以分号结尾。注释用 `//`。\n\n' +
            '### println! 格式化语法\n\n' +
            '| 语法 | 含义 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `{}` | Display trait 输出 | `println!("{}", 42)` |\n' +
            '| `{:?}` | Debug trait 输出 | `println!("{:?}", vec)` |\n' +
            '| `{:#?}` | 美化 Debug 输出（多行） | `println!("{:#?}", struct)` |\n' +
            '| `{0}` | 引用第 0 个参数 | `println!("{0}, {0}", x)` |\n' +
            '| `{:>5}` | 右对齐宽度 5 | `println!("{:>5}", 42)` → `   42` |\n' +
            '| `{:<5}` | 左对齐宽度 5 | `println!("{:<5}", 42)` → `42   ` |\n' +
            '| `{:^5}` | 居中宽度 5 | `println!("{:^5}", 42)` → ` 42  ` |\n' +
            '| `{:08}` | 补零宽度 8 | `println!("{:08}", 42)` → `00000042` |\n' +
            '| `{:.2}` | 小数保留 2 位 | `println!("{:.2}", 3.14159)` → `3.14` |\n' +
            '| `{name}` | 命名参数 | `println!("{name}", name="Rust")` |\n' +
            '| `{:b}` / `{:o}` / `{:x}` / `{:X}` | 二/八/十六进制 | `println!("{:x}", 255)` → `ff` |\n' +
            '| `{:e}` / `{:E}` | 科学计数法 | `println!("{:e}", 1000.0)` |\n\n' +
            '### cargo 常用命令\n\n' +
            '| 命令 | 功能 |\n' +
            '|------|------|\n' +
            '| `cargo new 项目名` | 创建新项目（默认二进制） |\n' +
            '| `cargo new --lib 库名` | 创建库项目 |\n' +
            '| `cargo build` | 编译项目 |\n' +
            '| `cargo build --release` | 优化编译（发布版） |\n' +
            '| `cargo run` | 编译并运行 |\n' +
            '| `cargo test` | 运行测试 |\n' +
            '| `cargo check` | 只检查类型不生成代码（最快） |\n' +
            '| `cargo fmt` | 格式化代码 |\n' +
            '| `cargo clippy` | 运行 lint 检查 |\n' +
            '| `cargo add 依赖名` | 添加依赖 |\n' +
            '| `cargo doc --open` | 生成文档并打开 |\n\n' +
            '### 宏 vs 函数\n\n' +
            '```rust\n' +
            '// 宏：编译期展开，参数数量可变，编译期检查格式\n' +
            'println!("{} + {} = {}", 1, 2, 3);\n' +
            '\n' +
            '// 函数：参数固定，运行时调用\n' +
            'fn add(a: i32, b: i32) -> i32 { a + b }\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：Hello World**\n\n' +
            '```rust\nfn main() {\n    println!("Hello, World!");\n}\n```\n\n' +
            '最简单的 Rust 程序。`fn main()` 定义入口函数，`println!` 宏输出一行文本。' +
            '字符串字面量用双引号包裹，语句以分号结尾。\n\n' +
            '**示例 2：格式化输出**\n\n' +
            '```rust\nfn main() {\n    let name = "Rust";\n    let year = 2010;\n    println!("{} 诞生于 {}", name, year);\n    println!("{0} 很快，{0} 很安全", name);\n    println!("数字: {:>5}", 42);\n    println!("保留两位: {:.2}", 3.14159);\n    println!("十六进制: {:x}", 255);\n}\n```\n\n' +
            '`{}` 按顺序填入参数；`{0}` 引用第一个参数可重复使用；' +
            '`{:>5}` 表示右对齐宽度 5，输出 "   42"；`{:.2}` 保留两位小数；' +
            '`{:x}` 输出十六进制。格式化语法在编译期被检查，占位符数量与参数数量不匹配会编译报错。\n\n' +
            '**示例 3：print!、println!、eprintln! 区别**\n\n' +
            '```rust\nfn main() {\n    print!("不换行");\n    print!("继续");\n    println!("换行了");\n    println!("新的一行");\n    eprintln!("这是错误输出到 stderr");\n}\n```\n\n' +
            '`print!` 输出后不换行，`println!` 输出后自动换行。' +
            '输出结果第一行是"不换行继续换行了"，第二行是"新的一行"。' +
            '`eprintln!` 输出到 stderr，可用于错误信息（管道重定向时不混入正常输出）。\n\n' +
            '## 注意事项\n\n' +
            '1. **println! 是宏不是函数**：末尾的 `!` 是宏标志。宏在编译期展开，' +
            '能做编译期检查（如格式串与参数匹配），函数做不到。\n' +
            '2. **占位符与参数数量必须匹配**：`println!("{}", a, b);` 编译错误（参数过多）；' +
            '`println!("{} {}", a);` 编译错误（参数不足）。这是编译期检查的强大之处。\n' +
            '3. **`{}` 需要 Display trait**：自定义类型需实现 Display trait 才能用 `{}`。' +
            '若类型只实现了 Debug，用 `{:?}`。所有类型都能用 `{:?}`（Debug 可派生）。\n' +
            '4. **分号很重要**：Rust 中分号区分语句和表达式。带分号是语句，' +
            '不带分号是表达式（作为返回值）。这是 Rust 与其他语言的重要差异。\n' +
            '5. **cargo build vs cargo check**：`cargo check` 只做类型检查不生成代码，' +
            '速度远快于 build，开发时用 check 快速验证。\n' +
            '6. **release 优化**：`cargo build --release` 启用优化，性能可能提升数倍，' +
            '但编译时间更长。生产部署用 release，开发调试用 debug（默认）。\n' +
            '7. **Cargo.toml vs Cargo.lock**：Cargo.toml 是手动维护的依赖声明，' +
            'Cargo.lock 是自动生成的依赖锁定文件。库项目通常 gitignore Cargo.lock，' +
            '二进制项目应提交 Cargo.lock 保证可复现构建。\n' +
            '8. **Rust 2018/2021 Edition**：Rust 每 3 年发布一个 Edition，' +
            '不同 Edition 语法略有差异。Cargo.toml 中 `[package] edition = "2021"` 指定。\n\n' +
            '## 实际应用\n\n' +
            '- **CLI 工具**：ripgrep、fd、bat、exa 等流行的命令行工具用 Rust 编写，' +
            'println! / eprintln! 是与用户交互的基础。\n' +
            '- **Web 服务器**：actix-web、axum、warp 等 Web 框架用 Rust 构建，' +
            '日志和错误信息通过 eprintln! 或日志宏输出。\n' +
            '- **系统编程**：Rust 适合写操作系统组件（Redox OS）、驱动、' +
            '文件系统（Linux 内核已接受 Rust 驱动）。\n' +
            '- **WebAssembly**：Rust 编译到 wasm，用于前端高性能模块，' +
            'Figma、Cloudflare 等使用 Rust+wasm。\n' +
            '- **嵌入式**：Rust 无运行时、无 GC，适合嵌入式开发，' +
            'no_std 环境下仍可用核心语言特性。\n' +
            '- **区块链**：Solana、Polkadot 等区块链项目用 Rust 写智能合约和节点。\n' +
            '- **命令行输出美化**：结合 colored、indicatif 等库，' +
            'Rust CLI 工具能输出彩色文本、进度条、表格等。\n\n' +
            '## 扩展知识\n\n' +
            '- **format! 宏**：`format!("{}={}", k, v)` 返回 String，' +
            '与 println! 语法一致但不输出，用于构造字符串。\n' +
            '- **write! / writeln! 宏**：输出到任意 Write trait 实现（如文件、缓冲区），' +
            '`writeln!(f, "{}", x)?` 用于格式化写入文件。\n' +
            '- **panic! 宏**：`panic!("出错：{}", reason)` 触发 panic，' +
            '程序展开栈并终止。用于不可恢复的错误。\n' +
            '- **dbg! 宏**：`dbg!(expr)` 输出表达式及其值到 stderr，并返回该值，' +
            '调试时极其方便（不影响正常输出）。\n' +
            '- **派生 Debug**：`#[derive(Debug)]` 让结构体自动实现 Debug trait，' +
            '可用 `{:?}` 输出。几乎所有类型都应派生 Debug。\n' +
            '- **Display trait**：自定义类型实现 `std::fmt::Display` 才能用 `{}`，' +
            '适合面向用户的输出格式。\n' +
            '- **cargo workspace**：大型项目可拆分为多个 crate 组成 workspace，' +
            '共享 Cargo.lock 和 target 目录，提升构建效率。\n' +
            '- **Rust 编译模型**：Rust 编译较慢（因类型检查、单态化、借用检查），' +
            '但运行时性能极佳。cargo 用增量编译缓解此问题。\n',
          examples: [
            {
              title: 'Hello World',
              code: `fn main() {
    println!("Hello, World!");
}`,
              explanation:
                '最简单的 Rust 程序。`fn main()` 定义入口函数，`println!` 宏输出一行文本。' +
                '字符串字面量用双引号包裹，语句以分号结尾。',
            },
            {
              title: '格式化输出',
              code: `fn main() {
    let name = "Rust";
    let year = 2010;
    println!("{} 诞生于 {}", name, year);
    println!("{0} 很快，{0} 很安全", name);
    println!("数字: {:>5}", 42);
}`,
              explanation:
                '`{}` 按顺序填入参数；`{0}` 引用第一个参数可重复使用；' +
                '`{:>5}` 表示右对齐宽度 5，输出 " 42"（前面补空格）。' +
                '格式化语法在编译期被检查，占位符数量与参数数量不匹配会编译报错。',
            },
            {
              title: 'print! 与 println! 的区别',
              code: `fn main() {
    print!("不换行");
    print!("继续");
    println!("换行了");
    println!("新的一行");
}`,
              explanation:
                '`print!` 输出后不换行，`println!` 输出后自动换行。' +
                '输出结果第一行是"不换行继续换行了"，第二行是"新的一行"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 println! 宏输出 "Hello, Rust!"。',
              starter_code: `fn main() {
    println!(___);
}`,
              expected_output: 'Hello, Rust!',
              hints: [
                'println! 的参数是一个字符串字面量',
                '字符串用双引号包裹',
                '答案: "Hello, Rust!"',
              ],
            },
            {
              type: 'output-match',
              prompt: '声明变量 lang 赋值为 "Rust"，用 println! 输出 "我爱 Rust"。用 {} 占位符和变量填充。',
              starter_code: `fn main() {
    let lang = "Rust";
    println!("我爱{}", ___);
}`,
              expected_output: '我爱Rust',
              hints: [
                '{} 会被后面的参数替换',
                '把变量名 lang 作为第二个参数传给 println!',
                '答案: lang',
              ],
            },
          ],
          realWorldScenario:
            '开发命令行工具（CLI）时，第一个功能通常是输出欢迎信息或帮助文档。println! 是 Rust 最基础的输出方式，几乎所有终端交互程序都依赖它。cargo 则负责把你的代码编译成可执行文件并管理第三方依赖。',
        },
        {
          id: 'rust-ch1-l2',
          title: '变量与可变性',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            'Rust 用 `let` 声明变量。与大多数语言不同，**Rust 的变量默认不可变**（immutable）。' +
            '一旦绑定值就不能再修改，这是 Rust 安全设计的核心之一。' +
            '如果需要可变变量，必须显式使用 `let mut` 声明。\n\n' +
            '**为什么默认不可变？** 不可变性让代码更容易推理——你确信一个变量的值在整个作用域内不会意外变化。' +
            '在多线程环境下，不可变数据天然线程安全，无需加锁。' +
            '当你确实需要修改时，`mut` 关键字充当一个明确的标记，告诉读代码的人"这里会被修改"。' +
            '这种"默认安全、显式放权"的设计贯穿 Rust 的整个类型系统。\n\n' +
            '**何时用 mut？** 当变量确实需要在绑定后修改（如循环计数器、累加器、可变缓冲区）时用 `let mut`。' +
            '若值一旦确定就不变（如配置常量、计算结果），用 `let`。如果不确定，优先用不可变——' +
            '编译器会告诉你哪里需要 mut，再按需添加。\n\n' +
            '**变量遮蔽（shadowing）**：Rust 允许用同名变量遮蔽前一个，' +
            '且可以改变类型。这是 Rust 的独特特性，区别于 mut。\n\n' +
            '## 语法说明\n\n' +
            '### let 声明\n\n' +
            '```rust\n' +
            'let x = 5;              // 不可变变量，类型推断\n' +
            'let mut y = 10;         // 可变变量\n' +
            'let z: i64 = 100;       // 显式类型标注\n' +
            'let (a, b) = (1, 2);    // 解构绑定\n' +
            'let [x, y, z] = [1, 2, 3]; // 数组解构\n' +
            '```\n\n' +
            '### 变量声明方式对比\n\n' +
            '| 声明方式 | 可变性 | 类型可变 | 示例 |\n' +
            '|---------|--------|---------|------|\n' +
            '| `let x = 5;` | 不可变 | 否 | 绑定后不能修改值 |\n' +
            '| `let mut x = 5;` | 可变 | 否 | 可重新赋值，但类型固定 |\n' +
            '| `let x = 5; let x = "hi";` | 遮蔽（新变量） | 是 | shadowing 创建新变量，可改类型 |\n' +
            '| `const MAX: u32 = 100;` | 不可变常量 | 否 | 编译期常量，必须标注类型 |\n' +
            '| `static GREETING: &str = "Hello";` | 不可变静态 | 否 | 程序生命周期全局变量 |\n\n' +
            '### Rust 整数类型\n\n' +
            '| 类型 | 范围 | 说明 |\n' +
            '|------|------|------|\n' +
            '| `i8` / `u8` | -128~127 / 0~255 | 8 位有符号/无符号 |\n' +
            '| `i16` / `u16` | 16 位有符号/无符号 | |\n' +
            '| `i32` / `u32` | 32 位有符号/无符号 | i32 是整数默认类型 |\n' +
            '| `i64` / `u64` | 64 位有符号/无符号 | |\n' +
            '| `i128` / `u128` | 128 位有符号/无符号 | |\n' +
            '| `isize` / `usize` | 与平台指针宽度一致 | 用于索引、大小 |\n\n' +
            '### 浮点与布尔、字符\n\n' +
            '```rust\n' +
            'let f1: f32 = 3.14;   // 32 位浮点\n' +
            'let f2: f64 = 3.141592653589793;  // 64 位浮点（默认）\n' +
            'let b: bool = true;   // 布尔\n' +
            'let c: char = "中";    // Unicode 字符（4 字节）\n' +
            '```\n\n' +
            '### turbofish 语法\n\n' +
            '```rust\n' +
            'let n: i32 = "42".parse().unwrap();          // 标注变量类型\n' +
            'let n = "42".parse::<i32>().unwrap();        // turbofish 标注表达式类型\n' +
            'let v: Vec<i32> = vec![1, 2, 3];             // Vec 类型标注\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：不可变与可变变量**\n\n' +
            '```rust\nfn main() {\n    let x = 5;\n    println!("x = {}", x);\n    // x = 10; // 编译报错：cannot assign twice to immutable variable\n\n    let mut y = 10;\n    println!("y = {}", y);\n    y = 20;\n    println!("y = {}", y);\n}\n```\n\n' +
            '`let x = 5` 声明不可变变量，尝试 `x = 10` 会编译报错。' +
            '`let mut y = 10` 声明可变变量，可以重新赋值。' +
            '这就是 Rust 的默认安全行为——防止意外修改变量。\n\n' +
            '**示例 2：变量遮蔽（shadowing）**\n\n' +
            '```rust\nfn main() {\n    let x = 5;\n    let x = x + 1;       // 遮蔽：用新值覆盖，可改变值\n    let x = x * 2;       // 再次遮蔽\n    println!("x = {}", x);  // 12\n\n    let spaces = "   ";     // 字符串\n    let spaces = spaces.len(); // 遮蔽：类型从 &str 变为 usize\n    println!("spaces = {}", spaces);  // 3\n}\n```\n\n' +
            'shadowing 用 `let` 重新声明同名变量，创建的是新变量（不是修改原变量）。' +
            '关键区别：shadowing 可以改变类型（如 &str → usize），而 mut 不能。' +
            '这在类型转换场景很有用，如先读字符串再转为长度。\n\n' +
            '**示例 3：类型推断与显式标注**\n\n' +
            '```rust\nfn main() {\n    let a = 42;           // 推断为 i32（默认整数类型）\n    let b: i64 = 100;     // 显式标注为 i64\n    let c: f64 = 3.14;    // 显式标注为 f64\n    println!("{} {} {}", a, b, c);\n\n    // turbofish 语法：在表达式上标注类型\n    let n = "42".parse::<i32>().unwrap();\n    println!("解析: {}", n);\n\n    // 解构绑定\n    let (x, y, z) = (1, 2.0, "three");\n    println!("{} {} {}", x, y, z);\n}\n```\n\n' +
            'Rust 编译器会根据上下文自动推断类型。`42` 默认推断为 `i32`。' +
            '当需要其他类型时，用 `: 类型` 显式标注，或用 `.parse::<类型>()` turbofish 语法。' +
            '解构绑定可一次声明多个变量。\n\n' +
            '## 注意事项\n\n' +
            '1. **变量必须先初始化再使用**：Rust 不允许使用未初始化的变量，编译器会报错。' +
            '这避免了 C/C++ 中未初始化变量导致的未定义行为。\n' +
            '2. **mut 与 shadowing 的区别**：mut 修改同一变量（类型不变）；' +
            'shadowing 创建新变量（可改变类型）。`let mut x = 5; x = "hi";` 编译错误（类型变）；' +
            '`let x = 5; let x = "hi";` 合法（shadowing）。\n' +
            '3. **整数溢出**：debug 模式下整数溢出会 panic，release 模式下环绕（wrap around）。' +
            '需检查溢出用 `checked_add`、`wrapping_add`、`saturating_add` 等方法。\n' +
            '4. **const vs let**：const 是编译期常量，必须标注类型，不能是函数返回值；' +
            'let 是运行期绑定，可省略类型。const 命名通常全大写。\n' +
            '5. **static vs const**：static 是有固定内存地址的全局变量，可 mut（但 unsafe）；' +
            'const 在编译期内联，无地址。多数情况用 const。\n' +
            '6. **类型推断局限**：有些场景编译器无法推断类型（如 `parse()`），' +
            '需显式标注或 turbofish。错误信息会提示"consider giving it an explicit type"。\n' +
            '7. **整数类型选择**：默认 i32 适合大多数场景；索引用 usize；' +
            '大数用 i64/u64；嵌入式用 u8/i8 节省内存。无负数场景用 unsigned。\n' +
            '8. **char 是 Unicode 标量值**：Rust 的 char 是 4 字节 Unicode，' +
            '不是 C 的 1 字节 ASCII。`let c = "中";` 合法。\n\n' +
            '## 实际应用\n\n' +
            '- **配置管理**：运行期不变的配置（端口、数据库名）用 `let`，' +
            '需要更新的状态（连接计数、缓存）用 `let mut`。\n' +
            '- **多线程安全**：不可变数据天然线程安全（Send+Sync），' +
            '多个线程共享只读数据无需加锁，大幅简化并发代码。\n' +
            '- **API 设计**：Rust 函数参数默认不可变（`fn f(x: T)`），' +
            '需修改用 `&mut T`。这强制调用方明确授权修改。\n' +
            '- **状态机**：用 shadowing 实现状态转换——每个状态是一个新变量，' +
            '类型可变，编译器保证状态转换合法。\n' +
            '- **数值计算**：i32/i64/f64 满足大多数计算；' +
            '加密货币用 u256（需第三方库）；嵌入式用 u8/i8。\n' +
            '- **错误处理**：`let x = parse()?;` 结合 ? 运算符，' +
            '简洁处理可能失败的操作。\n' +
            '- **常量定义**：const 用于全局常量（如 MAX_CONNECTIONS=100），' +
            '编译期内联，无运行时开销。\n\n' +
            '## 扩展知识\n\n' +
            '- **let 表达式**：Rust 中 let 是语句不是表达式，不能 `let x = (let y = 5);`。' +
            '但代码块 `{}` 是表达式，可赋值：`let x = { let y = 5; y + 1 };`。\n' +
            '- **解构绑定**：`let (a, b, c) = tuple;`、`let [a, b, ..] = array;`、' +
            '`let Point { x, y } = p;` 支持元组、数组、结构体解构。\n' +
            '- **_ 占位符**：`let _ = func();` 忽略返回值；`let (_, b) = pair;` 忽略部分。\n' +
            '- **类型别名**：`type Kilometers = i32;` 创建类型别名，' +
            '不创建新类型（与 newtype 模式不同）。\n' +
            '- **newtype 模式**：`struct Kilometers(i32);` 创建新类型，' +
            '避免普通 i32 与 Kilometers 混淆，编译器类型检查更严格。\n' +
            '- **可变引用**：`&mut T` 是可变引用，同一时间只能有一个可变引用，' +
            '这是 Rust 借用检查的核心规则。\n' +
            '- **内部可变性**：`Cell<T>`、`RefCell<T>` 允许在不可变引用下修改内部值，' +
            '用于"逻辑不可变但内部可变"的场景（如缓存）。\n' +
            '- **const fn**：`const fn fn_name() -> T { ... }` 声明可在编译期求值的函数，' +
            'C++20 的 constexpr 灵感来源之一。\n' +
            '- **static mut 与 unsafe**：`static mut` 全局可变变量访问需 unsafe，' +
            '因为 Rust 无法保证多线程下的数据安全。推荐用 Mutex/Atomic 替代。\n',
          examples: [
            {
              title: '不可变变量（默认行为）',
              code: `fn main() {
    let x = 5;
    println!("x = {}", x);
    // x = 10; // 这行会编译报错：cannot assign twice to immutable variable
}`,
              explanation:
                '`let x = 5` 声明不可变变量。注释掉的行如果取消注释会导致编译错误。' +
                '这就是 Rust 的默认安全行为——防止意外修改变量。',
            },
            {
              title: '可变变量（使用 mut）',
              code: `fn main() {
    let mut x = 5;
    println!("x = {}", x);
    x = 10;
    println!("x = {}", x);
    x = x + 5;
    println!("x = {}", x);
}`,
              explanation:
                '`let mut` 声明可变变量。可以多次重新赋值，但类型必须一致——' +
                '不能把 i32 变量赋值为字符串。输出：5、10、15。',
            },
            {
              title: '类型推断与显式标注',
              code: `fn main() {
    let a = 42;           // 推断为 i32
    let b: i64 = 100;     // 显式标注为 i64
    let c: f64 = 3.14;    // 显式标注为 f64
    println!("{} {} {}", a, b, c);
}`,
              explanation:
                'Rust 编译器会根据上下文自动推断类型。`42` 默认推断为 `i32`。' +
                '当需要其他类型时，用 `: 类型` 显式标注。输出：42 100 3.14',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 let mut 声明变量 count 赋值为 0，然后将 count 改为 10，输出 "count = 10"。',
              starter_code: `fn main() {
    let mut count = 0;
    count = ___;
    println!("count = {}", count);
}`,
              expected_output: 'count = 10',
              hints: [
                '将 10 赋值给 count',
                '直接写数字 10',
                '答案: 10',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全 mut 关键字，使变量 y 可以被重新赋值。输出 "x=5, y=20"。',
              starter_code: `fn main() {
    let x = 5;
    let ___ y = 10;
    y = 20;
    println!("x={}, y={}", x, y);
}`,
              expected_output: 'x=5, y=20',
              hints: [
                'y 需要被修改，必须声明为可变',
                '用 mut 关键字标记可变变量',
                '答案: mut',
              ],
            },
          ],
          realWorldScenario:
            '在配置管理系统中，有些配置项在运行期间不变（如服务器端口、数据库名），适合用不可变变量；有些状态需要更新（如连接计数、缓存大小），需要用 mut。Rust 的不可变默认值强制开发者思考哪些数据真正需要修改，从源头减少并发 bug。',
        },
        {
          id: 'rust-ch1-l3',
          title: '变量遮蔽（Shadowing）',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'Rust 允许用 `let` 重新声明同名变量，新变量会"遮蔽"（shadow）旧变量。' +
            '这不是修改原变量，而是创建了一个全新的变量，只是复用了同一个名字。' +
            '旧变量在遮蔽后无法再被访问，但它的内存会在原作用域结束时正常释放。\n\n' +
            '**为什么需要遮蔽？** 在类型转换管道中，数据从一种类型变为另一种类型，' +
            '若每步用不同变量名会产生 `s_str`、`s_parsed`、`s_final` 这样的冗余命名。' +
            '遮蔽让你复用同一变量名，代码更简洁，且每步的类型转换通过 `let` 明确标记。\n\n' +
            '**何时用遮蔽？** ①类型转换：`let s = "42"; let s: i32 = s.parse().unwrap();`；' +
            '②逐步计算：`let x = 5; let x = x + 1; let x = x * 2;`；' +
            '③内部作用域临时覆盖：`{ let x = tmp; }` 离开后恢复。\n\n' +
            '**遮蔽 vs mut 的关键区别**：遮蔽可以改变类型，mut 不能。' +
            '`let mut x = 5; x = "hi";` 编译错误（类型变）；' +
            '`let x = 5; let x = "hi";` 合法（遮蔽创建新类型变量）。' +
            '这是遮蔽的核心价值——在类型变换链中复用变量名。\n\n' +
            '## 语法说明\n\n' +
            '### 基本遮蔽\n\n' +
            '```rust\n' +
            'let x = 5;          // 第一版 x，类型 i32\n' +
            'let x = x + 1;      // 遮蔽：新 x，类型仍 i32，值 6\n' +
            'let x = x * 2;      // 再次遮蔽：新 x，值 12\n' +
            '```\n\n' +
            '### 改变类型的遮蔽\n\n' +
            '```rust\n' +
            'let s = "42";                    // s: &str\n' +
            'let s: i32 = s.parse().unwrap(); // s: i32（新变量，类型变了）\n' +
            'let s = s.to_string();           // s: String（再次变类型）\n' +
            '```\n\n' +
            '### 内部作用域遮蔽\n\n' +
            '```rust\n' +
            'let x = 1;\n' +
            '{\n' +
            '    let x = 2;          // 遮蔽外层 x\n' +
            '    println!("{}", x);  // 2\n' +
            '}                      // 内层 x 销毁\n' +
            'println!("{}", x);      // 1（外层 x 恢复可见）\n' +
            '```\n\n' +
            '### 遮蔽 vs mut 对比\n\n' +
            '| 特性 | 遮蔽（let 重新声明） | mut |\n' +
            '|------|---------------------|-----|\n' +
            '| 修改值 | 可以（每次 let） | 可以（直接赋值） |\n' +
            '| 改变类型 | 可以 | 不可以 |\n' +
            '| 创建新变量 | 是（新绑定） | 否（同一变量） |\n' +
            '| 旧值何时释放 | 原作用域结束 | 不适用 |\n' +
            '| 内存地址 | 可能改变 | 不变 |\n' +
            '| 适用场景 | 类型转换、逐步计算 | 循环累加、状态更新 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：用遮蔽进行计算**\n\n' +
            '```rust\nfn main() {\n    let x = 5;\n    let x = x + 1;  // 遮蔽：x 变成 6\n    let x = x * 2;  // 再次遮蔽：x 变成 12\n    println!("x = {}", x);\n}\n```\n\n' +
            '每次 `let x` 都创建新变量，遮蔽前一个。最终 x = (5+1)*2 = 12。' +
            '这与 `mut` 不同——每次 let 都是一个全新的绑定。\n\n' +
            '**示例 2：用遮蔽改变类型**\n\n' +
            '```rust\nfn main() {\n    let s = "42";              // s 是 &str\n    let s: i32 = s.parse().unwrap();  // s 变成 i32\n    let s = s + 8;             // s 仍然是 i32，值为 50\n    println!("结果: {}", s);\n\n    // 实际应用：JSON 解析管道\n    let data = r#"{"name":"alice","age":"30"}"#;\n    let data: serde_json::Value = serde_json::from_str(data).unwrap();\n    let data = data["age"].as_str().unwrap();\n    let data: u32 = data.parse().unwrap();\n    println!("年龄: {}", data);\n}\n```\n\n' +
            '第一个 s 是字符串，第二个 s 遮蔽它并变成整数 42，第三个 s 遮蔽后值为 50。' +
            '用 mut 无法做到这种类型转换——mut 只能赋同类型的新值。' +
            '在数据解析管道中，遮蔽让每步复用同一变量名，代码简洁。\n\n' +
            '**示例 3：内部作用域遮蔽**\n\n' +
            '```rust\nfn main() {\n    let x = 1;\n    {\n        let x = 2;\n        println!("内部 x = {}", x);  // 2\n        let x = "hello";  // 遮蔽：类型变 &str\n        println!("内部 x = {}", x);  // hello\n    }\n    println!("外部 x = {}", x);  // 1\n}\n```\n\n' +
            '内层 `{}` 中声明的 x 遮蔽了外层的 x，但离开花括号后内层 x 被销毁，' +
            '外层 x 恢复可见。内层甚至可以改变类型（如 x 从 i32 变为 &str），' +
            '不影响外层。这在临时转换类型时很方便。\n\n' +
            '## 注意事项\n\n' +
            '1. **遮蔽创建新变量，不是修改**：每次 `let x` 都是一个全新绑定，' +
            '旧 x 的内存在原作用域结束时释放。这与 mut 修改同一变量本质不同。\n' +
            '2. **避免过度遮蔽导致可读性下降**：遮蔽太多层会让代码难以追踪，' +
            '建议同一变量名遮蔽不超过 2-3 次，否则用不同变量名更清晰。\n' +
            '3. **遮蔽不能跨作用域"恢复"mut 变量**：`let mut x = 5; { let x = 10; } x = 20;` ' +
            '中内层 x 遮蔽外层，但外层 x 仍是 mut，离开内层后可继续修改。\n' +
            '4. **遮蔽与借用**：若旧变量已被借用，遮蔽不会影响借用——' +
            '借用仍指向原变量。但访问新变量需注意生命周期。\n' +
            '5. **遮蔽不释放旧值**：旧变量在原作用域结束时才释放，不是遮蔽时。' +
            '若旧变量占用大量资源（如大 String），遮蔽不会立即释放。\n' +
            '6. **遮蔽与 Drop**：遮蔽后旧变量仍会被 Drop，但时机是作用域结束。' +
            '若需提前释放用 `drop(x)` 显式调用。\n' +
            '7. **参数遮蔽**：函数参数可在函数体内被遮蔽，' +
            '如 `fn f(x: i32) { let x = x + 1; }` 合法。\n' +
            '8. **遮蔽与模式匹配**：`let (x, y) = tuple;` 中 x、y 若已存在则遮蔽。' +
            '匹配时 `match` 的绑定也是遮蔽。\n\n' +
            '## 实际应用\n\n' +
            '- **数据解析管道**：JSON/CSV 解析中，数据从字符串→中间结构→最终类型，' +
            '每步用遮蔽复用变量名，避免 `data_str`、`data_json`、`data_final` 冗余命名。\n' +
            '- **类型转换**：`let n = "42"; let n: i32 = n.parse()?;` ' +
            '简洁地从字符串得到数字，无需中间变量。\n' +
            '- **构建器模式**：Builder 模式中每步返回新对象，' +
            '用遮蔽复用变量名：`let b = Builder::new(); let b = b.field(1); let b = b.build();`。\n' +
            '- **状态转换**：状态机中每步状态类型不同，' +
            '用遮蔽让状态变量名一致：`let s = StateA::new(); let s = s.transition();`。\n' +
            '- **临时覆盖**：在测试或调试中临时修改变量值，用内部作用域遮蔽，不影响外部。\n' +
            '- **错误处理**：`let x = parse()?; let x = x.process()?;` ' +
            '结合 ? 运算符，每步可能失败，遮蔽让链式调用更简洁。\n' +
            '- **函数式转换**：`let v = vec![1,2,3]; let v: Vec<i32> = v.iter().map(|x| x*2).collect();` ' +
            '遮蔽让转换链复用变量名。\n\n' +
            '## 扩展知识\n\n' +
            '- **遮蔽与所有权**：遮蔽创建新变量，原变量的所有权转移给新变量或被释放。' +
            '若原变量是 Copy 类型（如 i32），遮蔽只是复制，原变量仍有效但不可访问。\n' +
            '- **遮蔽与生命周期**：新变量的生命周期从 let 开始到作用域结束。' +
            '若新变量借用旧变量，需注意旧变量生命周期足够长。\n' +
            '- **遮蔽与 match**：`match` 的分支绑定也是遮蔽——' +
            '`match opt { Some(x) => ..., None => ... }` 中 x 遮蔽外部同名变量。\n' +
            '- **遮蔽与闭包**：闭包捕获变量时，若闭包内遮蔽该变量，' +
            '闭包使用的是捕获时的值，遮蔽不影响闭包内的外部变量。\n' +
            '- **宏与遮蔽**：宏展开可能引入变量，用 hygienic macro 避免意外遮蔽。' +
            'Rust 的宏是 hygienic 的，宏内变量不会意外遮蔽调用处变量。\n' +
            '- **遮蔽与重构**：过度遮蔽可能让代码重构困难（变量类型隐式变化），' +
            '建议在团队规范中限制遮蔽层数。\n' +
            '- **其他语言的类似特性**：Kotlin 的 `val` 重新声明类似遮蔽；' +
            'C++ 的变量作用域隐藏（不是遮蔽，因为不能改变类型）；' +
            'Rust 的遮蔽更强大（可改类型）但也更需谨慎。\n' +
            '- **let-else（Rust 1.65+）**：`let Some(x) = opt else { return; }` ' +
            '结合遮蔽与模式匹配，简洁处理"提取或返回"场景。\n',
          examples: [
            {
              title: '用遮蔽进行计算',
              code: `fn main() {
    let x = 5;
    let x = x + 1;  // 遮蔽：x 变成 6
    let x = x * 2;  // 再次遮蔽：x 变成 12
    println!("x = {}", x);
}`,
              explanation:
                '每次 `let x` 都创建新变量，遮蔽前一个。最终 x = (5+1)*2 = 12。' +
                '这与 `mut` 不同——每次 let 都是一个全新的绑定。',
            },
            {
              title: '用遮蔽改变类型',
              code: `fn main() {
    let s = "42";              // s 是 &str
    let s: i32 = s.parse().unwrap();  // s 变成 i32
    let s = s + 8;             // s 仍然是 i32，值为 50
    println!("结果: {}", s);
}`,
              explanation:
                '第一个 s 是字符串，第二个 s 遮蔽它并变成整数 42，第三个 s 遮蔽后值为 50。' +
                '用 mut 无法做到这种类型转换——mut 只能赋同类型的新值。',
            },
            {
              title: '内部作用域遮蔽',
              code: `fn main() {
    let x = 1;
    {
        let x = 2;
        println!("内部 x = {}", x);
    }
    println!("外部 x = {}", x);
}`,
              explanation:
                '内层 `{}` 中声明的 x 遮蔽了外层的 x，但离开花括号后内层 x 被销毁，' +
                '外层 x 恢复可见。输出：内部 x = 2，外部 x = 1。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用变量遮蔽：x 初始为 10，遮蔽后乘以 5，输出 "x = 50"。',
              starter_code: `fn main() {
    let x = 10;
    let x = x * ___;
    println!("x = {}", x);
}`,
              expected_output: 'x = 50',
              hints: [
                '10 乘以 5 等于 50',
                '用 * 运算符',
                '答案: 5',
              ],
            },
            {
              type: 'output-match',
              prompt: '用遮蔽将字符串 "100" 解析为整数。补全 unwrap() 调用。',
              starter_code: `fn main() {
    let s = "100";
    let s: i32 = s.parse().___;
    println!("数字是 {}", s);
}`,
              expected_output: '数字是 100',
              hints: [
                'parse() 返回 Result<i32, _>，需要提取 Ok 中的值',
                'unwrap() 方法提取成功值，失败则 panic',
                '答案: unwrap()',
              ],
            },
          ],
          realWorldScenario:
            '在数据处理管道中，经常需要将字符串解析为数字再进行计算。变量遮蔽让你可以用同一个变量名先存字符串再存数字，避免产生 s_str、s_num 这样冗余的命名。这在解析 JSON 配置文件、CSV 数据导入等场景中尤为常见。',
        },
        {
          id: 'rust-ch1-l4',
          title: '常量与基本数据类型',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`const` 声明编译期常量。与 `let` 不同，常量必须显式标注类型，且值在编译期就确定。' +
            '常量命名约定用全大写加下划线（SCREAMING_SNAKE_CASE），如 `const MAX_SIZE: i32 = 100;`。' +
            '常量可以在任何作用域（包括全局）声明，编译时内联到使用处，没有固定内存地址。\n\n' +
            '**为什么需要常量？** 常量让魔法数字（magic number）有了名字，代码更可读。' +
            '编译期内联意味着无运行时开销（不像变量需访问内存）。' +
            '常量可在全局作用域声明，适合全程序共享的配置（如端口、缓冲区大小）。\n\n' +
            '**const vs static vs let**：const 是编译期内联常量（无地址）；' +
            'static 是有固定地址的全局变量（程序生命周期）；' +
            'let 是函数内运行期绑定。多数情况用 const，需固定地址或可变全局用 static。\n\n' +
            'Rust 的整数类型：有符号 `i8` 到 `i128`，无符号 `u8` 到 `u128`，' +
            '以及与机器位数相关的 `isize`/`usize`。默认整数类型是 `i32`。' +
            '浮点数有 `f32` 和 `f64`，默认是 `f64`（双精度）。' +
            '`bool` 只有 `true` 和 `false` 两个值，占 1 字节。' +
            '`char` 是 4 字节的 Unicode 标量值，可以存中文字符、emoji 等。\n\n' +
            '**整数溢出**：在 debug 模式下会 panic（崩溃），在 release 模式下会回绕（wrap around）。' +
            '可以用 `wrapping_add`、`checked_add`、`saturating_add` 等方法显式控制溢出行为。' +
            '这比 C/C++ 的未定义行为更安全。\n\n' +
            '**类型转换用 `as`**：如 `42 as f64`、`3.14 as i32`（截断小数部分）。' +
            'Rust 不会自动进行类型转换（隐式转换），这避免了 C 语言中因隐式转换导致的许多 bug。\n\n' +
            '## 语法说明\n\n' +
            '### const 与 static 声明\n\n' +
            '```rust\n' +
            'const MAX_SIZE: i32 = 100;            // 编译期常量，必须标注类型\n' +
            'const PI: f64 = 3.14159;\n' +
            'static GREETING: &str = "Hello";      // 全局静态变量，有固定地址\n' +
            'static mut COUNTER: i32 = 0;          // 可变静态变量，访问需 unsafe\n' +
            '```\n\n' +
            '### 数据类型总览\n\n' +
            '| 类别 | 类型 | 说明 |\n' +
            '|------|------|------|\n' +
            '| 有符号整数 | i8, i16, i32, i64, i128, isize | 默认 i32 |\n' +
            '| 无符号整数 | u8, u16, u32, u64, u128, usize | 无负数 |\n' +
            '| 浮点数 | f32, f64 | 默认 f64 |\n' +
            '| 布尔 | bool | true/false，1 字节 |\n' +
            '| 字符 | char | 4 字节 Unicode |\n' +
            '| 字符串 | &str, String | 字符串切片 vs 拥有所有权字符串 |\n' +
            '| 数组 | [T; N] | 固定长度，栈分配 |\n' +
            '| 元组 | (T1, T2, ...) | 异构集合 |\n' +
            '| 单元 | () | 空类型，类似 void |\n\n' +
            '### 整数类型范围\n\n' +
            '| 类型 | 最小值 | 最大值 | 用途 |\n' +
            '|------|--------|--------|------|\n' +
            '| i8 / u8 | -128 / 0 | 127 / 255 | 字节处理、嵌入式 |\n' +
            '| i16 / u16 | -32768 / 0 | 32767 / 65535 | UTF-16、端口 |\n' +
            '| i32 / u32 | -2^31 / 0 | 2^31-1 / 2^32-1 | 默认整数类型 |\n' +
            '| i64 / u64 | -2^63 / 0 | 2^63-1 / 2^64-1 | 大数、时间戳 |\n' +
            '| i128 / u128 | -2^127 / 0 | 2^127-1 / 2^128-1 | 加密、极大数 |\n' +
            '| isize / usize | 与平台一致 | 与平台一致 | 索引、大小、指针 |\n\n' +
            '### 溢出处理方法\n\n' +
            '| 方法 | 溢出行为 | 返回类型 |\n' +
            '|------|---------|---------|\n' +
            '| `a + b`（debug） | panic | T |\n' +
            '| `a + b`（release） | 环绕 | T |\n' +
            '| `a.wrapping_add(b)` | 环绕 | T |\n' +
            '| `a.checked_add(b)` | 返回 None | Option<T> |\n' +
            '| `a.saturating_add(b)` | 饱和（停在最大/最小值） | T |\n' +
            '| `a.overflowing_add(b)` | 环绕并返回是否溢出 | (T, bool) |\n' +
            '| `a.wrapping_mul(b)` | 乘法环绕 | T |\n\n' +
            '### as 类型转换\n\n' +
            '```rust\n' +
            'let x: i32 = 42;\n' +
            'let y: f64 = x as f64;           // 整数 → 浮点\n' +
            'let z: i32 = 3.99 as i32;        // 浮点 → 整数（截断为 3）\n' +
            'let w: u8 = 255 as u8;           // 大类型 → 小类型（可能截断）\n' +
            'let c: u32 = "A" as u32;          // 错误：as 不能转字符串\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：常量与静态变量**\n\n' +
            '```rust\nconst MAX_SIZE: i32 = 100;\nconst PI: f64 = 3.14159;\nstatic APP_NAME: &str = "MyApp";\nfn main() {\n    println!("最大值: {}", MAX_SIZE);\n    println!("圆周率: {}", PI);\n    println!("应用: {}", APP_NAME);\n}\n```\n\n' +
            '常量用 `const` 声明，必须标注类型，可在全局作用域定义。' +
            '常量在编译期内联，没有运行时地址。static 有固定地址，程序生命周期存在。' +
            '输出：最大值: 100，圆周率: 3.14159，应用: MyApp。\n\n' +
            '**示例 2：整数与浮点类型**\n\n' +
            '```rust\nfn main() {\n    let a: i32 = 42;\n    let b: u8 = 255;\n    let c: f64 = 9.99;\n    let d: bool = true;\n    let e: char = "好";\n    println!("整数: {}, 无符号: {}, 浮点: {}", a, b, c);\n    println!("布尔: {}, 字符: {}", d, e);\n\n    // 溢出处理\n    let big: u8 = 255;\n    let wrapped = big.wrapping_add(1);  // 环绕到 0\n    let saturated = big.saturating_add(1); // 饱和在 255\n    println!("环绕: {}, 饱和: {}", wrapped, saturated);\n}\n```\n\n' +
            'i32 是有符号 32 位整数，u8 是无符号 8 位（0-255），f64 是双精度浮点。' +
            'char 用单引号，是 4 字节 Unicode。' +
            'wrapping_add 溢出时环绕（255+1=0），saturating_add 饱和（255+1=255）。\n\n' +
            '**示例 3：as 类型转换与溢出检查**\n\n' +
            '```rust\nfn main() {\n    let pi: f64 = 3.14159;\n    let truncated: i32 = pi as i32;  // 截断小数\n    let num: i32 = 42;\n    let float: f64 = num as f64;\n    println!("截断: {}", truncated);\n    println!("转换: {}", float);\n\n    // checked_add 安全加法\n    let a: u8 = 200;\n    let b: u8 = 100;\n    match a.checked_add(b) {\n        Some(sum) => println!("和: {}", sum),\n        None => println!("溢出！"),\n    }\n}\n```\n\n' +
            '`as` 进行显式类型转换。浮点转整数会截断（不是四舍五入）。' +
            'checked_add 返回 Option<T>，溢出时返回 None，让调用方处理。' +
            '这比 C/C++ 的未定义行为安全得多。\n\n' +
            '## 注意事项\n\n' +
            '1. **const 必须标注类型**：`const X = 5;` 编译错误，必须 `const X: i32 = 5;`。' +
            '这强制开发者明确常量类型，避免歧义。\n' +
            '2. **const 不能是运行时值**：`const N: i32 = rand::random();` 错误，' +
            'const 值必须在编译期确定。运行时值用 let 或 static。\n' +
            '3. **整数溢出行为差异**：debug 模式 panic（便于发现 bug），' +
            'release 模式环绕（性能优先）。若需统一行为用 wrapping_*/checked_* 方法。\n' +
            '4. **as 转换可能丢精度**：`3.99 as i32` 得 3（截断），' +
            '`1000 as u8` 得 232（截断高位）。转换时需确认值域安全。\n' +
            '5. **Rust 无隐式转换**：`let x: i32 = 5; let y: i64 = x;` 编译错误，' +
            '必须 `let y: i64 = x as i64;`。这避免了 C 中隐式转换的 bug。\n' +
            '6. **isize/usize 与平台相关**：64 位系统是 64 位，32 位系统是 32 位。' +
            '用于索引和大小，跨平台代码注意不要假设宽度。\n' +
            '7. **char 不是 u8**：Rust 的 char 是 4 字节 Unicode，与 u8 不同。' +
            '需转换用 `c as u8`（仅 ASCII 安全）或 `char::from_u32()`。\n' +
            '8. **f32 vs f64**：f64 精度更高，默认选择。f32 用于图形（GPU 友好）、' +
            '内存受限场景。科学计算用 f64。\n\n' +
            '## 实际应用\n\n' +
            '- **配置常量**：端口、缓冲区大小、超时时间用 const，' +
            '编译期内联无开销，全程序可访问。\n' +
            '- **游戏开发**：屏幕尺寸、最大玩家数、重力加速度用 const；' +
            '角色坐标用 f64，生命值用 i32，是否存活用 bool。\n' +
            '- **嵌入式**：u8/i8 节省内存，寄存器操作用 u8；' +
            'no_std 环境仍可用核心数据类型。\n' +
            '- **加密货币**：u128 用于大数运算，u256 需第三方库；' +
            '哈希值用 [u8; 32] 数组。\n' +
            '- **数值计算**：i32/f64 满足大多数场景；' +
            'checked_add 用于财务计算（不能溢出）；wrapping_add 用于哈希算法。\n' +
            '- **字符处理**：char 是 Unicode，天然支持中文、emoji；' +
            '字符串迭代用 chars() 而非 bytes()。\n' +
            '- **位操作**：u8/u32 用于位掩码、标志位；' +
            'as 用于整数类型间转换。\n\n' +
            '## 扩展知识\n\n' +
            '- **const fn**：`const fn square(x: i32) -> i32 { x * x }` ' +
            '声明可在编译期求值的函数，可在 const 上下文调用：`const N: i32 = square(5);`。\n' +
            '- **static mut 与 unsafe**：`static mut COUNTER: i32 = 0;` 可变全局变量，' +
            '访问需 unsafe（因多线程数据竞争）。推荐用 AtomicI32/Mutex 替代。\n' +
            '- **字面量类型后缀**：`42i32`、`3.14f64`、`255u8` 直接指定字面量类型，' +
            '避免 as 转换。`let x = 42u8;` 直接是 u8。\n' +
            '- **数字字面量下划线**：`1_000_000` 等于 1000000，提高可读性。' +
            '常用于大数、十六进制（`0xFF_FF`）。\n' +
            '- **TryFrom/TryInto**：Rust 1.34+ 的安全类型转换 trait，' +
            '返回 Result，比 as 更安全（as 可能静默截断）。\n' +
            '- **From/Into**：无损类型转换 trait，`let s: String = "hi".into();`。' +
            '编译器保证转换安全。\n' +
            '- **非零整数**：`NonZeroI32` 等类型保证值非零，' +
            '编译器可优化内存布局（如 Option<NonZeroI32> 与 i32 同大小）。\n' +
            '- **透明布局类型**：`#[repr(transparent)]` 保证新类型与内部类型布局一致，' +
            '用于 FFI 互操作。\n' +
            '- **位域 crate**：`bitfield`、`bitflags` crate 提供位标志位操作，' +
            '替代手写位运算。\n',
          examples: [
            {
              title: '常量声明',
              code: `const MAX_SIZE: i32 = 100;
const PI: f64 = 3.14159;
fn main() {
    println!("最大值: {}", MAX_SIZE);
    println!("圆周率: {}", PI);
}`,
              explanation:
                '常量用 `const` 声明，必须标注类型，可在全局作用域定义。' +
                '常量在编译期内联，没有运行时地址。输出：最大值: 100，圆周率: 3.14159',
            },
            {
              title: '整数与浮点类型',
              code: `fn main() {
    let a: i32 = 42;
    let b: u8 = 255;
    let c: f64 = 9.99;
    let d: bool = true;
    let e: char = '好';
    println!("整数: {}, 无符号: {}, 浮点: {}", a, b, c);
    println!("布尔: {}, 字符: {}", d, e);
}`,
              explanation:
                'i32 是有符号 32 位整数，u8 是无符号 8 位（0-255），f64 是双精度浮点。' +
                'char 用单引号，是 4 字节 Unicode。输出两行。',
            },
            {
              title: 'as 类型转换',
              code: `fn main() {
    let pi: f64 = 3.14159;
    let truncated: i32 = pi as i32;  // 截断小数
    let num: i32 = 42;
    let float: f64 = num as f64;
    println!("截断: {}", truncated);
    println!("转换: {}", float);
}`,
              explanation:
                '`as` 进行显式类型转换。浮点转整数会截断（不是四舍五入）。' +
                '输出：截断: 3，转换: 42',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义常量 PORT 赋值为 3000（类型 i32），在 main 中输出 "端口: 3000"。',
              starter_code: `const ___: i32 = 3000;
fn main() {
    println!("端口: {}", PORT);
}`,
              expected_output: '端口: 3000',
              hints: [
                '常量名用大写字母',
                '常量名是 PORT',
                '答案: PORT',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 as 将浮点数 3.14 转为 i32 类型，输出截断后的值。',
              starter_code: `fn main() {
    let pi: f64 = 3.14;
    let truncated: i32 = pi ___ i32;
    println!("截断: {}", truncated);
}`,
              expected_output: '截断: 3',
              hints: [
                '类型转换用 as 关键字',
                '语法: 值 as 目标类型',
                '答案: as',
              ],
            },
          ],
          realWorldScenario:
            '在游戏开发中，常量用于定义屏幕尺寸、最大玩家数等不会改变的值。基本数据类型用于表示角色坐标（f64）、生命值（i32）、是否存活（bool）、角色符号（char）等。显式类型转换避免了 C 语言中隐式转换带来的精度丢失 bug。',
        },
      ],
    },

    // ================================================================
    // 第 2 章：数据类型与控制流
    // ================================================================
    {
      id: 'rust-ch2',
      title: '数据类型与控制流',
      order: 1,
      lessons: [
        {
          id: 'rust-ch2-l1',
          title: '标量类型与运算',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '标量类型（scalar）表示单个值。Rust 有四种标量：整数、浮点数、布尔和字符。' +
            '整数分为有符号（i8~i128）和无符号（u8~u128），数字表示位数。' +
            '`isize` 和 `usize` 与平台相关（64 位系统上为 64 位）。\n\n' +
            '**为什么区分有符号/无符号？** 有符号整数可表示负数，范围对称（如 i8: -128~127）；' +
            '无符号整数只表示非负数，范围更大（如 u8: 0~255）。位操作、字节处理用 u8，' +
            '数学计算用 i32，索引和大小用 usize。\n\n' +
            '**Rust 无隐式类型提升**：`i32` 和 `i64` 不能直接相加，必须先 `as` 转换。' +
            '这看似麻烦，但避免了 C 语言中因隐式转换导致的精度丢失和符号 bug。' +
            '例如 C 中 `unsigned int a = 5; if (a < -1)` 永远为真（-1 隐式转无符号），' +
            'Rust 中这种 bug 不可能发生。\n\n' +
            '整数溢出在 debug 模式下 panic（便于发现 bug），在 release 模式下回绕（性能优先）。' +
            '可用 `wrapping_*`、`checked_*`、`saturating_*` 显式控制。\n\n' +
            '字符类型 `char` 是 4 字节 Unicode 标量值，用单引号包裹。' +
            '可存储中文、emoji、数学符号等任何 Unicode 字符，远比 C 的 1 字节 char 强大。\n\n' +
            '## 语法说明\n\n' +
            '### 运算符总览\n\n' +
            '| 类别 | 运算符 | 示例 | 说明 |\n' +
            '|------|--------|------|------|\n' +
            '| 算术 | `+ - * / %` | `7 / 2 = 3` | 整数除法截断 |\n' +
            '| 位运算 | `& \| ^ << >>` | `5 & 3 = 1` | 位级操作 |\n' +
            '| 比较 | `== != < > <= >=` | `x == y` | 返回 bool |\n' +
            '| 逻辑 | `&& \|\| !` | `a && b` | 短路求值 |\n' +
            '| 赋值 | `= += -= *= /= %=` | `x += 1` | 复合赋值 |\n' +
            '| 位赋值 | `&= \|= ^= <<= >>=` | `x &= 0xFF` | 位运算赋值 |\n' +
            '| 一元 | `- ! *` | `-x`、`!flag`、`*ptr` | 取负、取反、解引用 |\n\n' +
            '### 整数字面量表示\n\n' +
            '| 进制 | 前缀 | 示例 | 十进制值 |\n' +
            '|------|------|------|---------|\n' +
            '| 十进制 | 无 | `42` | 42 |\n' +
            '| 十六进制 | `0x` | `0xFF` | 255 |\n' +
            '| 八进制 | `0o` | `0o77` | 63 |\n' +
            '| 二进制 | `0b` | `0b1010` | 10 |\n' +
            '| 字节 | `b` | `b"A"` | 65（u8） |\n' +
            '| 下划线分隔 | 无 | `1_000_000` | 1000000 |\n' +
            '| 类型后缀 | 无 | `42u8`、`3.14f32` | 指定类型 |\n\n' +
            '### 整数除法与浮点\n\n' +
            '```rust\n' +
            'let a = 7 / 2;        // 3（整数除法截断）\n' +
            'let b = 7.0 / 2.0;    // 3.5（浮点除法）\n' +
            'let c = 7 % 3;        // 1（取余）\n' +
            'let d = -7 / 2;       // -3（向零截断）\n' +
            'let e = -7 % 3;       // -1（余数与被除数同号）\n' +
            '```\n\n' +
            '### 位运算示例\n\n' +
            '```rust\n' +
            'let a = 0b1100;       // 12\n' +
            'let b = 0b1010;       // 10\n' +
            'let and = a & b;      // 0b1000 = 8\n' +
            'let or = a | b;       // 0b1110 = 14\n' +
            'let xor = a ^ b;      // 0b0110 = 6\n' +
            'let not = !a;         // 按位取反（与类型相关）\n' +
            'let shl = a << 2;     // 48（左移 2 位）\n' +
            'let shr = a >> 1;     // 6（右移 1 位）\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：算术运算**\n\n' +
            '```rust\nfn main() {\n    let a = 17;\n    let b = 5;\n    println!("加: {}", a + b);\n    println!("减: {}", a - b);\n    println!("乘: {}", a * b);\n    println!("除: {}", a / b);\n    println!("余: {}", a % b);\n}\n```\n\n' +
            '整数除法 17/5 = 3（截断），取余 17%5 = 2。输出五行运算结果：22、12、85、3、2。\n\n' +
            '**示例 2：布尔、比较与逻辑**\n\n' +
            '```rust\nfn main() {\n    let x = 10;\n    let y = 20;\n    println!("x > y: {}", x > y);\n    println!("x < y: {}", x < y);\n    println!("x == 10: {}", x == 10);\n    let is_greater = x > y;\n    println!("is_greater: {}", is_greater);\n\n    // 逻辑运算（短路求值）\n    let a = true;\n    let b = false;\n    println!("a && b: {}", a && b);  // false\n    println!("a || b: {}", a || b);  // true\n    println!("!b: {}", !b);          // true\n}\n```\n\n' +
            '比较运算返回 bool 值。逻辑运算 `&&` 和 `||` 短路求值——' +
            '若左边能确定结果则不计算右边（如 `false && x` 不计算 x）。' +
            '输出：x > y: false，x < y: true，x == 10: true，is_greater: false。\n\n' +
            '**示例 3：字符与 Unicode、位运算**\n\n' +
            '```rust\nfn main() {\n    let c1: char = "A";\n    let c2: char = "中";\n    let c3: char = "🎉";\n    println!("{} {} {}", c1, c2, c3);\n    println!("字符占 {} 字节", std::mem::size_of::<char>());\n\n    // 位运算\n    let flags: u8 = 0b1100_1010;\n    let mask: u8 = 0b0000_1111;\n    println!("AND: {:08b}", flags & mask);  // 00001010\n    println!("OR: {:08b}", flags | mask);   // 11001111\n    println!("XOR: {:08b}", flags ^ mask);  // 11000101\n}\n```\n\n' +
            'char 是 4 字节 Unicode，可存储任意字符（含 emoji）。输出：A 中 🎉，然后输出"字符占 4 字节"。' +
            '位运算用 `{:08b}` 格式化输出二进制（补零宽度 8）。' +
            'AND 取交集，OR 取并集，XOR 取差异。\n\n' +
            '## 注意事项\n\n' +
            '1. **整数除法截断**：`7 / 2 = 3`（不是 3.5），`-7 / 2 = -3`（向零截断）。' +
            '需浮点结果用 `7.0 / 2.0`。\n' +
            '2. **取余与被除数同号**：`-7 % 3 = -1`（不是 2），`7 % -3 = 1`。' +
            '若需非负余数用 `((a % m) + m) % m`。\n' +
            '3. **无类型提升**：`i32 + i64` 编译错误，必须 `as` 转换。' +
            '这避免了 C 隐式转换的 bug，但需显式写出转换。\n' +
            '4. **位运算与符号**：有符号整数右移 `>>` 算术移（补符号位），' +
            '无符号右移逻辑移（补 0）。注意区别。\n' +
            '5. **溢出行为**：debug panic，release 环绕。' +
            '哈希算法用 wrapping_*，财务计算用 checked_*，图形用 saturating_*。\n' +
            '6. **char 与 u8 不同**：char 是 4 字节 Unicode，u8 是 1 字节。' +
            '`b"A"` 是 u8 字面量（65），`"A"` 是 char。转换用 `as`。\n' +
            '7. **布尔不可转整数**：`true as i32` 编译错误（Rust 不允许 bool → int）。' +
            '需用 `if b { 1 } else { 0 }` 或 `b as u8`（实际上不允许，需显式）。\n' +
            '8. **浮点精度问题**：f32 约 7 位有效数字，f64 约 15 位。' +
            '浮点比较用 `abs(a - b) < epsilon` 而非 `==`。\n\n' +
            '## 实际应用\n\n' +
            '- **金融计算**：整数运算保证精度，checked_add 防止溢出。' +
            '金额用 i64 表示分（避免浮点误差），不用 f64。\n' +
            '- **位掩码与标志位**：用 u8/u32 的位运算管理权限标志、配置开关。' +
            '如 `flags |= READ; if flags & READ { ... }`。\n' +
            '- **哈希算法**：CRC、MD5、SHA 用 wrapping_* 运算（依赖溢出回绕语义）。' +
            'Rust 的溢出行为让哈希实现正确。\n' +
            '- **图形处理**：像素通道用 u8（0-255），位运算提取 RGB 通道。' +
            'f32 用于 GPU 友好的坐标计算。\n' +
            '- **网络协议**：端口号 u16（0-65535），IP 地址用 [u8; 4] 或 [u8; 16]。' +
            '位运算解析协议头部。\n' +
            '- **字符处理**：char 是 Unicode，天然支持国际化。' +
            '字符串迭代用 chars() 而非 bytes()（避免多字节字符截断）。\n' +
            '- **分页计算**：`page = index / page_size; offset = index % page_size;` ' +
            '取余用于计算分页偏移。\n\n' +
            '## 扩展知识\n\n' +
            '- **除零行为**：整数除零 panic，浮点除零得 inf 或 NaN。' +
            '需检查除数用 `checked_div`。\n' +
            '- **饱和运算**：`saturating_add` 溢出时停在最大/最小值，' +
            '适合图形处理（颜色值不超 255）。\n' +
            '- ** overflowing 返回元组**：`overflowing_add` 返回 `(T, bool)`，' +
            '值和是否溢出标志，用于需要知道是否溢出的场景。\n' +
            '- **移位运算优化**：`x * 2` 可用 `x << 1` 替代（编译器通常自动优化），' +
            '但位运算语义更清晰。\n' +
            '- **前缀/后缀自增不存在**：Rust 没有 `i++` 或 `++i`，' +
            '用 `i += 1`。这是 Rust 简化运算符的设计。\n' +
            '- **比较运算可链式**：`a < b && b < c` 但不能 `a < b < c`（Rust 不支持）。' +
            '需拆开写。\n' +
            '- **FromStr/parse**：字符串转数字用 `"42".parse::<i32>()`，' +
            '返回 Result，处理失败。\n' +
            '- **format! 格式化**：`{:b}` 二进制、`{:o}` 八进制、`{:x}` 十六进制、' +
            '`{:e}` 科学计数法，与 println! 一致。\n' +
            '- **大整数 crate**：num-bigint 提供 BigInt/BigUint，' +
            '用于超出 u128 范围的大数运算（如加密）。\n',
          examples: [
            {
              title: '算术运算',
              code: `fn main() {
    let a = 17;
    let b = 5;
    println!("加: {}", a + b);
    println!("减: {}", a - b);
    println!("乘: {}", a * b);
    println!("除: {}", a / b);
    println!("余: {}", a % b);
}`,
              explanation:
                '整数除法 17/5 = 3（截断），取余 17%5 = 2。输出五行运算结果：22、12、85、3、2。',
            },
            {
              title: '布尔与比较',
              code: `fn main() {
    let x = 10;
    let y = 20;
    println!("x > y: {}", x > y);
    println!("x < y: {}", x < y);
    println!("x == 10: {}", x == 10);
    let is_greater = x > y;
    println!("is_greater: {}", is_greater);
}`,
              explanation:
                '比较运算返回 bool 值。输出：x > y: false，x < y: true，x == 10: true，is_greater: false。',
            },
            {
              title: '字符与 Unicode',
              code: `fn main() {
    let c1: char = 'A';
    let c2: char = '中';
    let c3: char = '🎉';
    println!("{} {} {}", c1, c2, c3);
    println!("字符占 {} 字节", std::mem::size_of::<char>());
}`,
              explanation:
                'char 是 4 字节 Unicode，可存储任意字符（含 emoji）。输出：A 中 🎉，然后输出"字符占 4 字节"。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '计算 17 除以 5 的余数，输出 "余: 2"。',
              starter_code: `fn main() {
    let a = 17;
    let b = 5;
    println!("余: {}", a ___ b);
}`,
              expected_output: '余: 2',
              hints: [
                '取余运算符是 %',
                '17 % 5 = 2',
                '答案: %',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 as 将 i32 值 255 转换为 u8 类型，输出 "u8: 255"。',
              starter_code: `fn main() {
    let num: i32 = 255;
    let byte: u8 = num ___ u8;
    println!("u8: {}", byte);
}`,
              expected_output: 'u8: 255',
              hints: [
                '类型转换使用 as 关键字',
                '语法: 值 as 目标类型',
                '答案: as',
              ],
            },
          ],
          realWorldScenario:
            '在金融计算系统中，整数运算的精度至关重要。Rust 强制显式类型转换避免了浮点与整数混用导致的精度丢失。取余运算常用于判断闰年、哈希取模、分页计算等场景。',
        },
        {
          id: 'rust-ch2-l2',
          title: '元组与数组',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '元组（tuple）将多个不同类型的值组合在一起，长度固定。声明：`let t: (i32, f64, char) = (1, 2.0, \'a\');`。' +
            '访问元素用 `.0`、`.1`、`.2`（从 0 开始）。元组可以用 `let (a, b, c) = t;` 解构。' +
            '空元组 `()` 叫 unit 类型，表示"没有有意义的值"——函数不返回值时实际返回 `()`。\n\n' +
            '**为什么需要元组？** 元组让函数能返回多个值，无需定义结构体。' +
            '如 `fn divmod(a, b) -> (i32, i32) { (a/b, a%b) }` 返回商和余数。' +
            '临时组合不同类型数据时，元组比结构体更轻量。\n\n' +
            '**何时用元组 vs 结构体？** 临时、局部、元素无明确含义时用元组（如 `(x, y)` 坐标）；' +
            '长期使用、元素有语义、需方法时用结构体（如 `Point { x, y }`）。' +
            '元组超过 3-4 个元素时建议改用结构体。\n\n' +
            '数组（array）是相同类型元素的固定长度集合，存储在栈上。' +
            '声明：`let arr: [i32; 3] = [1, 2, 3];`。类型标注 `[T; N]` 中 T 是元素类型，N 是长度。' +
            '`[0; 5]` 创建 5 个 0 的数组。访问用 `arr[0]`，越界访问会 panic（运行时崩溃）。\n\n' +
            '**为什么数组固定长度？** 数组在编译期确定大小，分配在栈上，访问极快（O(1)，无堆开销）。' +
            '若需动态长度用 `Vec<T>`（堆分配的动态数组）。' +
            '固定长度让编译器能做边界检查优化，且数组是 Copy 类型（若元素是 Copy）。\n\n' +
            '## 语法说明\n\n' +
            '### 元组语法\n\n' +
            '```rust\n' +
            'let t: (i32, f64, &str) = (1, 2.0, "hi");  // 创建\n' +
            'let a = t.0;     // 1（用 .索引 访问）\n' +
            'let b = t.1;     // 2.0\n' +
            'let (x, y, z) = t;  // 解构\n' +
            'let (x, ..) = t;    // 部分解构（.. 忽略其余）\n' +
            'let unit: () = ();  // 空元组\n' +
            '```\n\n' +
            '### 数组语法\n\n' +
            '```rust\n' +
            'let arr: [i32; 3] = [1, 2, 3];     // 显式长度和类型\n' +
            'let arr = [1, 2, 3];               // 类型推断\n' +
            'let zeros = [0; 5];                // 5 个 0\n' +
            'let first = arr[0];                // 索引访问\n' +
            'let len = arr.len();               // 长度\n' +
            'for x in arr.iter() { ... }        // 迭代\n' +
            'let [a, b, c] = arr;               // 解构\n' +
            '```\n\n' +
            '### 元组与数组对比\n\n' +
            '| 特性 | 元组 | 数组 |\n' +
            '|------|------|------|\n' +
            '| 元素类型 | 可不同 | 必须相同 |\n' +
            '| 长度 | 固定，编译期确定 | 固定，编译期确定 |\n' +
            '| 存储 | 栈 | 栈 |\n' +
            '| 访问 | `.0`、`.1` | `arr[i]` |\n' +
            '| 解构 | `let (a, b) = t` | `let [a, b] = arr` |\n' +
            '| 长度已知 | 是（类型一部分） | 是（类型一部分） |\n' +
            '| 适用 | 异构数据 | 同构数据 |\n\n' +
            '### 数组 vs Vec\n\n' +
            '| 特性 | 数组 [T; N] | Vec<T> |\n' +
            '|------|-----------|--------|\n' +
            '| 长度 | 编译期固定 | 运行期可变 |\n' +
            '| 存储 | 栈 | 堆 |\n' +
            '| 性能 | 极快（无堆分配） | 稍慢（堆分配） |\n' +
            '| Copy | 是（若 T 是 Copy） | 否 |\n' +
            '| 适用 | 已知大小、临时 | 动态大小、长期 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：元组的创建、访问与解构**\n\n' +
            '```rust\nfn main() {\n    let person: (&str, i32, f64) = ("小明", 20, 1.75);\n    println!("姓名: {}", person.0);\n    println!("年龄: {}", person.1);\n    println!("身高: {}", person.2);\n\n    // 解构\n    let (name, age, height) = person;\n    println!("{} {}岁 {}米", name, age, height);\n}\n```\n\n' +
            '元组用 `.索引` 访问元素。元组可以包含不同类型。' +
            '`let (name, age, height) = person;` 解构元组，一次取出所有元素。' +
            '输出三行：姓名、年龄、身高。\n\n' +
            '**示例 2：元组作为函数返回值**\n\n' +
            '```rust\nfn main() {\n    let point = (3, 4);\n    let (x, y) = point;\n    let distance = (x * x + y * y) as f64;\n    let distance = distance.sqrt();\n    println!("点({}, {}), 距离={:.2}", x, y, distance);\n\n    // 函数返回多个值\n    let (quotient, remainder) = divmod(17, 5);\n    println!("17 / 5 = {} 余 {}", quotient, remainder);\n}\n\nfn divmod(a: i32, b: i32) -> (i32, i32) {\n    (a / b, a % b)\n}\n```\n\n' +
            '`let (x, y) = point;` 解构元组。`{:.2}` 保留两位小数。' +
            'sqrt() 计算平方根。divmod 函数返回元组 (商, 余数)，' +
            '调用方用解构一次取出多个返回值。输出：点(3, 4), 距离=5.00，17 / 5 = 3 余 2。\n\n' +
            '**示例 3：数组的创建、遍历与初始化**\n\n' +
            '```rust\nfn main() {\n    let nums = [10, 20, 30, 40, 50];\n    println!("第一个: {}", nums[0]);\n    println!("长度: {}", nums.len());\n    let mut sum = 0;\n    for n in nums.iter() {\n        sum += n;\n    }\n    println!("总和: {}", sum);\n\n    // [值; 数量] 初始化\n    let zeros = [0; 5];\n    println!("零数组: {:?}", zeros);\n\n    // 3D 坐标用 [f64; 3]\n    let pos: [f64; 3] = [1.0, 2.0, 3.0];\n    println!("坐标: {:?}", pos);\n}\n```\n\n' +
            '数组用 `[值1, 值2, ...]` 创建，`arr[索引]` 访问，`arr.len()` 获取长度。' +
            '`.iter()` 创建迭代器遍历元素。`[0; 5]` 创建 5 个 0 的数组。' +
            '`{:?}` 用 Debug 格式输出整个数组。3D 坐标用 [f64; 3] 是常见模式。\n\n' +
            '## 注意事项\n\n' +
            '1. **数组越界会 panic**：`arr[arr.len()]` 运行时 panic（不是未定义行为）。' +
            '需安全访问用 `arr.get(i)` 返回 Option<&T>。\n' +
            '2. **元组最多 12 个元素**：Rust 标准库为最多 12 元素的元组实现 trait。' +
            '超过 12 个用结构体或数组。\n' +
            '3. **数组长度是类型的一部分**：`[i32; 3]` 和 `[i32; 4]` 是不同类型，' +
            '不能互相赋值或传参。这是数组与 Vec 的关键区别。\n' +
            '4. **数组是 Copy（若元素 Copy）**：`let a = [1,2,3]; let b = a;` ' +
            'a 仍可用（i32 是 Copy）。但 `let a = [String::from("x")]; let b = a;` ' +
            'a 不可用（String 非 Copy，数组非 Copy）。\n' +
            '5. **解构与 `..`**：`let (a, .., z) = tuple;` 忽略中间元素。' +
            '`..` 只能出现一次且位置灵活。\n' +
            '6. **元组与单元素元组**：`(5)` 是 5（括号表达式），`(5,)` 是单元素元组。' +
            '单元素元组必须有尾随逗号。\n' +
            '7. **unit 类型 `()`**：函数不写返回类型则返回 `()`。' +
            '`()` 是零大小类型（ZST），不占内存。\n' +
            '8. **数组与切片**：`&arr` 是 `&[T; N]`，`&arr[..]` 是 `&[T]`（切片）。' +
            '切片是数组的动态大小视图，函数参数多用切片。\n\n' +
            '## 实际应用\n\n' +
            '- **3D 图形**：坐标用 [f64; 3] 或 [f32; 3]，颜色用 [u8; 3] 表示 RGB。' +
            '固定大小数组在栈上，访问极快，适合图形热路径。\n' +
            '- **函数返回多值**：`fn parse(s) -> (Result, usize)` 返回结果和消耗字节数，' +
            '用元组比定义结构体更简洁。\n' +
            '- **配置表**：已知大小的配置（如一周 7 天的温度 [f64; 7]）用数组，' +
            '栈分配无堆开销。\n' +
            '- **矩阵运算**：2D 矩阵用 [[f64; N]; N] 嵌套数组，' +
            '固定大小让编译器优化（如栈分配、向量化）。\n' +
            '- **键值对**：`(key, value)` 元组用于临时键值对，如 HashMap 的迭代。\n' +
            '- **错误处理**：`fn f() -> (T, ErrorCode)` 返回值和错误码，' +
            '但 Rust 更推荐用 Result<T, E>。\n' +
            '- **字节缓冲区**：`[u8; 1024]` 固定大小缓冲区，栈分配，' +
            '用于网络、文件 I/O 的临时缓冲。\n\n' +
            '## 扩展知识\n\n' +
            '- **解构绑定**：元组、数组、结构体都支持解构。' +
            '`let (a, (b, c)) = (1, (2, 3));` 嵌套解构。' +
            '`let [a, b, ..] = arr;` 数组部分解构。\n' +
            '- **模式匹配**：`match` 可匹配元组结构：' +
            '`match point { (0, 0) => "原点", (x, 0) => "x轴", _ => "其他" }`。\n' +
            '- **切片 & [T]**：数组的借用形式，长度运行期确定。' +
            '函数参数用 `fn f(arr: &[i32])` 接受任意长度数组。\n' +
            '- **数组方法**：`arr.iter()`、`arr.iter_mut()`、`arr.into_iter()` ' +
            '分别产生不可变、可变、所有权迭代器。\n' +
            '- **Const Generics**：`fn sum<const N: usize>(arr: [i32; N]) -> i32` ' +
            '泛型化数组长度，一个函数处理任意大小数组。\n' +
            '- **Vec vs 数组**：Vec 动态大小、堆分配；数组固定大小、栈分配。' +
            '性能敏感且大小已知用数组，否则用 Vec。\n' +
            '- **元组结构体**：`struct Point(i32, i32);` 结合元组和结构体，' +
            '有名字但用 `.0`、`.1` 访问。\n' +
            '- **数组初始化**：`[expr; N]` 中 expr 必须是 Copy 或常量表达式。' +
            '非 Copy 类型用 `std::array::from_fn` 或 Vec。\n' +
            '- **TryFrom 切片**：`<[i32; 3]>::try_from(&slice[..])` 从切片转固定数组，' +
            '长度不匹配返回 Err。\n',
          examples: [
            {
              title: '元组的创建与访问',
              code: `fn main() {
    let person: (&str, i32, f64) = ("小明", 20, 1.75);
    println!("姓名: {}", person.0);
    println!("年龄: {}", person.1);
    println!("身高: {}", person.2);
}`,
              explanation:
                '元组用 `.索引` 访问元素。元组可以包含不同类型。输出三行：姓名、年龄、身高。',
            },
            {
              title: '元组解构',
              code: `fn main() {
    let point = (3, 4);
    let (x, y) = point;
    let distance = (x * x + y * y) as f64;
    let distance = distance.sqrt();
    println!("点({}, {}), 距离={:.2}", x, y, distance);
}`,
              explanation:
                '`let (x, y) = point;` 解构元组。`{:.2}` 保留两位小数。' +
                'sqrt() 计算平方根。输出：点(3, 4), 距离=5.00',
            },
            {
              title: '数组的创建与遍历',
              code: `fn main() {
    let nums = [10, 20, 30, 40, 50];
    println!("第一个: {}", nums[0]);
    println!("长度: {}", nums.len());
    let mut sum = 0;
    for n in nums.iter() {
        sum += n;
    }
    println!("总和: {}", sum);
}`,
              explanation:
                '数组用 `[值1, 值2, ...]` 创建，`arr[索引]` 访问，`arr.len()` 获取长度。' +
                '`.iter()` 创建迭代器遍历元素。输出三行。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建元组 t = ("苹果", 5)，用 .0 和 .1 访问元素，输出 "苹果: 5个"。',
              starter_code: `fn main() {
    let t = ("苹果", 5);
    println!("{}: {}个", t.___, t.1);
}`,
              expected_output: '苹果: 5个',
              hints: [
                '元组用 .索引 访问元素',
                '第一个元素用 .0',
                '答案: 0',
              ],
            },
            {
              type: 'output-match',
              prompt: '遍历数组 nums = [1, 2, 3, 4, 5]，求和并输出 "总和: 15"。',
              starter_code: `fn main() {
    let nums = [1, 2, 3, 4, 5];
    let mut sum = 0;
    for n in nums.iter() {
        sum ___ n;
    }
    println!("总和: {}", sum);
}`,
              expected_output: '总和: 15',
              hints: [
                '累加用 += 运算符',
                'sum += n 把 n 加到 sum 上',
                '答案: +=',
              ],
            },
          ],
          realWorldScenario:
            '在 3D 图形编程中，坐标用 [f64; 3] 数组表示，颜色用 [u8; 3] 表示 RGB。函数返回多个值时用元组，如解析函数返回 (结果, 错误码)。元组解构让代码简洁可读，无需临时变量。',
        },
        {
          id: 'rust-ch2-l3',
          title: 'if/else 与循环',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'Rust 的 `if` 是一个**表达式**，而不是语句——它返回一个值。这意味着 `let x = if cond { 5 } else { 10 };` 是合法的。' +
            '两个分支的类型必须一致，否则编译报错。`if` 不需要圆括号包裹条件，条件**必须是 `bool` 类型**——' +
            'Rust 不会像 C/JS 那样把 0/1 隐式转为 bool，必须写 `if x != 0` 而非 `if x`。这是 Rust 类型系统严格的体现，能避免大量隐式转换 bug。\n\n' +
            'Rust 有三种循环结构：\n' +
            '- `loop`：无限循环，必须用 `break` 退出；可通过 `break 值` 返回值，如 `let x = loop { break 42; };`\n' +
            '- `while`：条件循环，条件为 false 时退出\n' +
            '- `for`：遍历迭代器，是最常用、最安全的循环\n\n' +
            '`for` 配合范围表达式 `1..5`（1到4，不含5）或 `1..=5`（1到5，含5）。`for` 底层使用 Iterator trait，是**零成本抽象**——编译后与手写 while 循环一样高效，无运行时开销。\n\n' +
            '## 语法说明\n\n' +
            '### if 表达式\n\n' +
            '```rust\n' +
            'if 条件 {\n' +
            '    // 条件为 true 时执行\n' +
            '} else if 另一条件 {\n' +
            '    // 另一条件为 true 时执行\n' +
            '} else {\n' +
            '    // 所有条件都不满足时执行\n' +
            '}\n' +
            '// 作为表达式赋值：\n' +
            'let x = if cond { 5 } else { 10 };\n' +
            '```\n\n' +
            '### 三种循环\n\n' +
            '```rust\n' +
            '// loop：无限循环，可返回值\n' +
            'let result = loop {\n' +
            '    if 条件 { break 返回值; }\n' +
            '};\n' +
            '// while：条件为真时循环\n' +
            'while 条件 { /* 循环体 */ }\n' +
            '// for：遍历迭代器\n' +
            'for 变量 in 迭代器 { /* 循环体 */ }\n' +
            '```\n\n' +
            '### 循环控制语句\n\n' +
            '| 语句 | 作用 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `break` | 退出当前循环 | `break;` |\n' +
            '| `break 值` | 退出 loop 并返回值 | `break 42;` |\n' +
            '| `break \'label` | 退出带标签的循环 | `break \'outer;` |\n' +
            '| `continue` | 跳过本次，进入下一次迭代 | `continue;` |\n' +
            '| `continue \'label` | 跳到带标签循环的下一次 | `continue \'outer;` |\n\n' +
            '### 范围表达式\n\n' +
            '| 写法 | 范围 | 是否包含右端 |\n' +
            '|------|------|--------------|\n' +
            '| `1..5` | 1, 2, 3, 4 | 否 |\n' +
            '| `1..=5` | 1, 2, 3, 4, 5 | 是 |\n' +
            '| `(1..5).rev()` | 4, 3, 2, 1 | 反向 |\n' +
            '| `(1..=5).step_by(2)` | 1, 3, 5 | 按步长 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：if/else if/else 链式判断**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let score = 85;\n' +
            '    if score >= 90 {\n' +
            '        println!("优秀");\n' +
            '    } else if score >= 60 {\n' +
            '        println!("及格");\n' +
            '    } else {\n' +
            '        println!("不及格");\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '条件不需要括号，必须是 bool。依次检查条件，输出第一个匹配的分支。85 >= 60 输出"及格"。\n\n' +
            '**示例 2：if 作为表达式赋值**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let age = 20;\n' +
            '    let status = if age >= 18 { "成年" } else { "未成年" };\n' +
            '    println!("{} 岁，{}", age, status);\n' +
            '    // 两个分支必须同类型，下面会编译报错：\n' +
            '    // let bad = if true { 1 } else { "two" }; // 错误！\n' +
            '}\n' +
            '```\n\n' +
            'if 是表达式，直接返回值赋给变量。两个分支类型必须一致（这里都是 &str）。输出：20 岁，成年。\n\n' +
            '**示例 3：loop 返回值与标签跳出多层循环**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    // loop 返回值：在二维数组中查找目标\n' +
            '    let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];\n' +
            '    let target = 5;\n' +
            '    let pos = \'outer: loop {\n' +
            '        for (r, row) in grid.iter().enumerate() {\n' +
            '            for (c, &v) in row.iter().enumerate() {\n' +
            '                if v == target {\n' +
            '                    break \'outer (r, c); // 直接跳出两层循环\n' +
            '                }\n' +
            '            }\n' +
            '        }\n' +
            '        break \'outer (usize::MAX, usize::MAX); // 未找到\n' +
            '    };\n' +
            '    println!("找到 {} 在行 {} 列 {}", target, pos.0, pos.1);\n' +
            '}\n' +
            '```\n\n' +
            '`\'outer` 是循环标签，`break \'outer` 一次性跳出多层循环，比用标志变量更优雅。\n\n' +
            '**示例 4：for 循环与迭代器方法**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    // 求和\n' +
            '    let mut sum = 0;\n' +
            '    for i in 1..=10 {\n' +
            '        sum += i;\n' +
            '    }\n' +
            '    println!("1到10的和: {}", sum);\n\n' +
            '    // 倒计时\n' +
            '    for i in (1..4).rev() {\n' +
            '        println!("倒计时: {}", i);\n' +
            '    }\n\n' +
            '    // 遍历数组并获取索引\n' +
            '    let fruits = ["苹果", "香蕉", "橘子"];\n' +
            '    for (i, f) in fruits.iter().enumerate() {\n' +
            '        println!("{}: {}", i, f);\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '`1..=10` 包含 10，`1..10` 不包含 10。`.rev()` 反转迭代器，`.enumerate()` 同时获取索引和值。\n\n' +
            '## 注意事项\n\n' +
            '1. **条件必须是 bool**：`if x`（x 是 i32）会编译报错，必须写 `if x != 0`。Rust 不做隐式类型转换，避免 C 中 `if (x = 5)` 这类赋值当判断的 bug。\n' +
            '2. **if 表达式两分支类型必须一致**：`if c { 1 } else { "a" }` 会报错。如需不同类型，用枚举 `Option`/`Result` 或 `Box<dyn Trait>`。\n' +
            '3. **loop 必须能退出**：忘记 `break` 会导致真正的无限循环（程序卡死）。`while true` 比 `loop` 啰嗦，推荐 `loop`。\n' +
            '4. **while 借用检查**：`while` 条件中借用变量时，循环体内不能修改该变量。如需修改，先 clone 或重构。\n' +
            '5. **for 消费所有权**：`for x in vec` 会消费 vec；用 `for x in &vec`（借用）或 `for x in vec.iter()` 保留原数据。\n' +
            '6. **优先用 for 而非 while**：`for` 更安全，不会忘记更新循环变量导致死循环；且配合迭代器方法（map/filter）表达力更强。\n' +
            '7. **break 值只能用于 loop**：`while` 和 `for` 的 `break` 不返回值，只有 `loop` 可以 `break 值` 返回。\n\n' +
            '## 实际应用\n\n' +
            '- **游戏主循环**：`loop { 处理输入(); 更新状态(); 渲染(); if 退出 { break; } }` 是游戏引擎的标准结构。\n' +
            '- **重试逻辑**：`loop { let r = 操作(); if r.is_ok() { break r.unwrap(); } if 重试次数耗尽 { break Err(...); } }` 实现带退避的重试。\n' +
            '- **数据处理管道**：`for item in data.iter().filter(|x| **x > 0).map(|x| x * 2)` 链式处理列表。\n' +
            '- **状态机**：`while let Some(state) = next_state { 处理(state); }` 用 `while let` 驱动状态机。\n' +
            '- **FizzBuzz 面试题**：用 `for` + `if/else if/else` 是最经典的循环与判断组合练习。\n\n' +
            '## 扩展知识\n\n' +
            '- **if let 简化**：当只关心 `Option`/`Result` 的一种情况时，`if let Some(x) = opt { ... }` 比 `match opt { Some(x) => ..., _ => () }` 更简洁。\n' +
            '- **while let 循环**：`while let Some(item) = iter.next() { ... }` 等价于 `for item in iter`，但适合更复杂的退出条件。\n' +
            '- **迭代器是零成本**：`for x in (1..100).filter(|x| x % 2 == 0).map(|x| x * x)` 编译后等价于手写 while 循环，无虚函数调用开销。这是 Rust 零成本抽象的典范。\n' +
            '- **标签语法**：`\'label: loop {}`、`\'label: while {}`、`\'label: for {}` 都支持，标签以单引号开头。\n' +
            '- **与 C/JS 对比**：C 的 `for(i=0; i<n; i++)` 在 Rust 中是 `for i in 0..n`；C 的 `switch` 缺乏穷尽性检查，Rust 的 `match` 强制穷尽，更安全。',
          examples: [
            {
              title: 'if/else if/else',
              code: `fn main() {
    let score = 85;
    if score >= 90 {
        println!("优秀");
    } else if score >= 60 {
        println!("及格");
    } else {
        println!("不及格");
    }
}`,
              explanation:
                '条件不需要括号，必须是 bool。依次检查条件，输出第一个匹配的分支。85 >= 60 输出"及格"。',
            },
            {
              title: 'if 作为表达式',
              code: `fn main() {
    let age = 20;
    let status = if age >= 18 { "成年" } else { "未成年" };
    println!("{} 岁，{}", age, status);
}`,
              explanation:
                'if 是表达式，直接返回值赋给变量。两个分支类型必须一致（这里都是 &str）。输出：20 岁，成年',
            },
            {
              title: 'for 循环与范围',
              code: `fn main() {
    let mut sum = 0;
    for i in 1..=10 {
        sum += i;
    }
    println!("1到10的和: {}", sum);

    for i in (1..4).rev() {
        println!("倒计时: {}", i);
    }
}`,
              explanation:
                '`1..=10` 包含 10，`1..10` 不包含 10。`.rev()` 反转迭代器。' +
                '输出：1到10的和: 55，然后倒计时 3、2、1。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 for 循环计算 1 到 100 的和，输出 "总和: 5050"。',
              starter_code: `fn main() {
    let mut sum = 0;
    for i in 1..=___ {
        sum += i;
    }
    println!("总和: {}", sum);
}`,
              expected_output: '总和: 5050',
              hints: [
                '范围 1..=N 包含 N',
                '1 到 100 的和是 5050',
                '答案: 100',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 if/else 判断：如果 age >= 18 输出 "可以进入"，否则输出 "拒绝"。',
              starter_code: `fn main() {
    let age = 20;
    if age ___ 18 {
        println!("可以进入");
    } else {
        println!("拒绝");
    }
}`,
              expected_output: '可以进入',
              hints: [
                '大于等于的运算符',
                '>= 表示大于等于',
                '答案: >=',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 for 循环和 if 打印 1 到 15，3 的倍数打印 Fizz，5 的倍数打印 Buzz，15 的倍数打印 FizzBuzz。只输出第 15 个的结果。',
              starter_code: `fn main() {
    for i in 1..=15 {
        if i % 15 == 0 {
            println!("FizzBuzz");
        } else if i % 3 == 0 {
            println!("Fizz");
        } else if i % 5 == 0 {
            println!(___);
        } else {
            println!("{}", i);
        }
    }
}`,
              expected_output: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',
              hints: [
                '5 的倍数应该打印 Buzz',
                '字符串用双引号包裹',
                '答案: "Buzz"',
              ],
            },
          ],
          realWorldScenario:
            'FizzBuzz 是经典的编程面试题。在真实开发中，条件判断和循环无处不在——处理用户输入、遍历数据列表、实现游戏主循环等。if 表达式让条件赋值更简洁，for 循环配合迭代器是 Rust 中最安全高效的循环方式。',
        },
        {
          id: 'rust-ch2-l4',
          title: 'match 表达式',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`match` 是 Rust 最强大的控制流结构，进行**模式匹配**。它允许将一个值与一系列模式进行比较，' +
            '并执行匹配模式的代码。**match 必须穷尽所有可能**（exhaustive），漏掉情况会编译报错——这是 Rust 安全性的核心保证。' +
            '用 `_` 作为通配符匹配剩余所有情况。\n\n' +
            'match 是表达式，返回匹配分支的值。每个分支 `模式 => 代码`，代码块最后一个表达式是该分支的返回值。' +
            '相比 C 的 switch，match 的优势：编译期保证穷尽性、不存在 fall-through（无需 break）、' +
            '可以匹配复杂模式（字面值、范围、多值、绑定、结构体、枚举等）。这使得 match 在处理枚举时尤其强大。\n\n' +
            'match 还是处理 `Option` 和 `Result` 的核心工具，这是 Rust 错误处理的基石。\n\n' +
            '## 语法说明\n\n' +
            '### 基本语法\n\n' +
            '```rust\n' +
            'let result = match 值 {\n' +
            '    模式1 => 结果1,\n' +
            '    模式2 => { 多行代码; 结果2 },\n' +
            '    _ => 默认结果, // 通配符，必须放最后\n' +
            '};\n' +
            '```\n\n' +
            '### 模式类型一览\n\n' +
            '| 模式 | 语法 | 说明 | 示例 |\n' +
            '|------|------|------|------|\n' +
            '| 字面值 | `值` | 精确匹配 | `1 => ...` |\n' +
            '| 范围 | `a..=b` | 匹配闭区间 | `90..=100 => ...` |\n' +
            '| 多值 | `a \\| b \\| c` | 匹配任一 | `1 \\| 2 \\| 3 => ...` |\n' +
            '| 通配符 | `_` | 匹配所有剩余 | `_ => ...` |\n' +
            '| 变量绑定 | `x` | 绑定并使用值 | `x => println!("{}", x)` |\n' +
            '| 范围绑定 | `x @ a..=b` | 绑定范围内值 | `n @ 1..=5 => ...` |\n' +
            '| 元组 | `(a, b)` | 解构元组 | `(0, y) => ...` |\n' +
            '| 结构体 | `Point { x, y }` | 解构结构体 | `Point { x, .. } => ...` |\n' +
            '| 枚举 | `Some(x)` / `None` | 匹配枚举变体 | `Some(v) => v` |\n' +
            '| 守卫 | `模式 if 条件` | 附加条件 | `n if n > 0 => ...` |\n\n' +
            '### match vs if let vs C switch\n\n' +
            '| 特性 | Rust match | Rust if let | C switch |\n' +
            '|------|-----------|-------------|----------|\n' +
            '| 穷尽性检查 | ✅ 强制 | ❌ 否 | ❌ 否 |\n' +
            '| fall-through | ❌ 无 | ❌ 无 | ✅ 有（需 break） |\n' +
            '| 返回值 | ✅ 是 | ❌ 否 | ❌ 否 |\n' +
            '| 模式匹配 | ✅ 复杂模式 | ✅ 单模式 | ❌ 仅常量 |\n' +
            '| 适用场景 | 全部分支 | 只关心一种 | 简单分支 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：匹配整数与通配符**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let day = 3;\n' +
            '    let name = match day {\n' +
            '        1 => "星期一",\n' +
            '        2 => "星期二",\n' +
            '        3 => "星期三",\n' +
            '        4 => "星期四",\n' +
            '        5 => "星期五",\n' +
            '        _ => "周末", // 匹配 6, 7 及其他\n' +
            '    };\n' +
            '    println!("{}", name); // 星期三\n' +
            '}\n' +
            '```\n\n' +
            'match 将 day 与各模式比较，3 匹配"星期三"。`_` 匹配所有其他值。match 是表达式，返回值赋给 name。\n\n' +
            '**示例 2：匹配范围与多值**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let score = 85;\n' +
            '    let grade = match score {\n' +
            '        90..=100 => "A",\n' +
            '        80..=89 => "B",\n' +
            '        70..=79 => "C",\n' +
            '        60..=69 => "D",\n' +
            '        _ => "F", // 60 以下\n' +
            '    };\n' +
            '    println!("等级: {}", grade); // 等级: B\n\n' +
            '    // 多值匹配\n' +
            '    let color = "red";\n' +
            '    let is_primary = match color {\n' +
            '        "red" | "green" | "blue" => true,\n' +
            '        _ => false,\n' +
            '    };\n' +
            '    println!("是三原色: {}", is_primary);\n' +
            '}\n' +
            '```\n\n' +
            '`90..=100` 匹配闭区间；`"red" | "green" | "blue"` 用 `|` 匹配多个值。\n\n' +
            '**示例 3：匹配元组与解构**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let point = (0, 5);\n' +
            '    match point {\n' +
            '        (0, 0) => println!("原点"),\n' +
            '        (0, y) => println!("y轴上, y={}", y),\n' +
            '        (x, 0) => println!("x轴上, x={}", x),\n' +
            '        (x, y) => println!("({}, {})", x, y),\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '元组解构：`(0, y)` 匹配第一个为 0 的元组，y 绑定第二个值。match 从上到下匹配，第一个匹配的分支执行。\n\n' +
            '**示例 4：匹配 Option 与守卫**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let ages = [Some(20), None, Some(17), Some(65)];\n' +
            '    for age in ages {\n' +
            '        match age {\n' +
            '            Some(a) if a >= 60 => println!("老人: {} 岁", a),\n' +
            '            Some(a) if a >= 18 => println!("成年: {} 岁", a),\n' +
            '            Some(a) => println!("未成年: {} 岁", a),\n' +
            '            None => println!("未提供年龄"),\n' +
            '        }\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '`Some(a) if a >= 60` 是带守卫（guard）的匹配，附加条件判断。守卫让 match 表达更复杂的逻辑。\n\n' +
            '## 注意事项\n\n' +
            '1. **必须穷尽所有可能**：漏掉情况会编译报错 `non-exhaustive patterns`。这是 Rust 安全性的保证，避免漏处理边界。\n' +
            '2. **`_` 必须放最后**：通配符匹配所有，放前面会让后续分支不可达，编译器警告 `unreachable pattern`。\n' +
            '3. **顺序敏感**：match 从上到下匹配，第一个匹配的分支执行。`(0, y)` 必须在 `(x, y)` 之前。\n' +
            '4. **所有分支返回类型一致**：`match x { 1 => 1, _ => "a" }` 会报错，类似 if 表达式。\n' +
            '5. **守卫（if 条件）可能让穷尽性失效**：`Some(x) if x > 0` 不匹配 `Some(-1)`，需补 `Some(_)` 或 `None` 分支。\n' +
            '6. **绑定变量会移动所有权**：`match opt { Some(x) => use(x), _ => () }` 中 x 被 move；用 `ref x` 或 `&` 借用。\n' +
            '7. **@ 绑定**：`n @ 1..=5` 既匹配范围又绑定值到 n，常用于既要判断范围又要使用值的场景。\n\n' +
            '## 实际应用\n\n' +
            '- **状态机**：`match state { Idle => ..., Running => ..., Stopped => ... }` 是状态机的标准写法，新增状态时编译器强制处理。\n' +
            '- **错误处理**：`match result { Ok(v) => 处理(v), Err(e) => 报错(e) }` 是 Rust 错误处理核心。\n' +
            '- **命令解析**：`match cmd { "add" => ..., "del" => ..., _ => 帮助() }` 实现 CLI 命令分发。\n' +
            '- **AST 解释器**：编译器/解释器中 `match node { Num(n) => ..., BinOp(op, l, r) => ... }` 是核心。\n' +
            '- **HTTP 路由**：`match (method, path) { (GET, "/") => ..., (POST, "/login") => ... }` 实现路由。\n\n' +
            '## 扩展知识\n\n' +
            '- **if let 简写**：只关心一种模式时用 `if let Some(x) = opt { ... }` 比 match 更简洁，但失去穷尽性保证。\n' +
            '- **let else（Rust 1.65+）**：`let Some(x) = opt else { return; }` 提早返回，简化错误路径。\n' +
            '- **matches! 宏**：`matches!(opt, Some(x) if x > 0)` 返回 bool，比写完整 match 更简洁。\n' +
            '- **模式绑定 ref**：`match &opt { Some(ref x) => ... }` 借用而非移动，老代码常见，新代码推荐用 `&` 模式。\n' +
            '- **解构结构体**：`match p { Point { x, y: 0 } => ..., Point { x: 0, y } => ..., Point { x, y } => ... }` 支持部分匹配，`..` 忽略其余字段。\n' +
            '- **嵌套匹配**：`match opt { Some(Some(x)) => ..., Some(None) => ..., None => ... }` 可匹配嵌套枚举。',
          examples: [
            {
              title: '匹配整数',
              code: `fn main() {
    let day = 3;
    let name = match day {
        1 => "星期一",
        2 => "星期二",
        3 => "星期三",
        4 => "星期四",
        5 => "星期五",
        _ => "周末",
    };
    println!("{}", name);
}`,
              explanation:
                'match 将 day 与各模式比较，3 匹配"星期三"。`_` 匹配所有其他值。match 是表达式，返回值赋给 name。',
            },
            {
              title: '匹配范围',
              code: `fn main() {
    let score = 85;
    let grade = match score {
        90..=100 => "A",
        80..=89 => "B",
        70..=79 => "C",
        60..=69 => "D",
        _ => "F",
    };
    println!("等级: {}", grade);
}`,
              explanation:
                '`90..=100` 匹配 90 到 100 的范围。85 匹配 80..=89，输出"等级: B"。' +
                '_ 匹配 60 以下的分数。',
            },
            {
              title: '匹配元组',
              code: `fn main() {
    let point = (0, 5);
    match point {
        (0, 0) => println!("原点"),
        (0, y) => println!("y轴上, y={}", y),
        (x, 0) => println!("x轴上, x={}", x),
        (x, y) => println!("({}, {})", x, y),
    }
}`,
              explanation:
                'match 可以解构元组并绑定变量。`(0, y)` 匹配第一个元素为 0 的点，y 绑定第二个值。' +
                '输出：y轴上, y=5',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 match 匹配 coin：1 输出 "一分"，5 输出 "五分"，10 输出 "一角"，其他输出 "未知"。',
              starter_code: `fn main() {
    let coin = 10;
    let name = match coin {
        1 => "一分",
        5 => "五分",
        10 => ___,
        _ => "未知",
    };
    println!("{}", name);
}`,
              expected_output: '一角',
              hints: [
                '10 对应"一角"',
                '字符串用双引号包裹',
                '答案: "一角"',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 match 范围匹配分数：90-100 为 "A"，80-89 为 "B"，其他为 "C"。score = 85，输出 "B"。',
              starter_code: `fn main() {
    let score = 85;
    let grade = match score {
        90..=100 => "A",
        80..=89 => "B",
        ___ => "C",
    };
    println!("{}", grade);
}`,
              expected_output: 'B',
              hints: [
                '通配符 _ 匹配所有其他情况',
                '用 _ 作为最后一个分支匹配剩余值',
                '答案: _',
              ],
            },
          ],
          realWorldScenario:
            'match 在状态机实现中无处不在——游戏角色状态（Idle/Running/Jumping）、HTTP 请求方法（GET/POST/PUT/DELETE）、解析器中的 token 类型。编译期穷尽性检查确保你永远不会遗漏一个状态，这是 Rust 安全性的典型体现。',
        },
      ],
    },

    // ================================================================
    // 第 3 章：所有权与借用
    // ================================================================
    {
      id: 'rust-ch3',
      title: '所有权与借用',
      order: 2,
      lessons: [
        {
          id: 'rust-ch3-l1',
          title: '所有权规则',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '所有权（ownership）是 Rust 最独特的特性，让 Rust 不需要垃圾回收器（GC）就能保证内存安全。' +
            '这是 Rust 与其他语言的根本区别，也是 Rust 学习曲线最陡峭的部分。\n\n' +
            '### 三条核心规则\n\n' +
            '1. **每个值有且仅有一个所有者**（owner）：明确归属，避免重复释放。\n' +
            '2. **当所有者离开作用域，值被自动释放**（drop）：RAII 模式，编译期确定释放时机。\n' +
            '3. **赋值或传参时，所有权转移**（move）：原变量失效，新变量成为所有者。\n\n' +
            '### 为什么需要所有权？\n\n' +
            '| 语言 | 内存管理方式 | 问题 |\n' +
            '|------|--------------|------|\n' +
            '| C/C++ | 手动 malloc/free | 内存泄漏、use-after-free、double-free |\n' +
            '| Java/Go/Python | GC 垃圾回收 | 运行时停顿、开销大、不可预测 |\n' +
            '| Rust | 所有权 + 编译期检查 | 学习曲线陡，但零运行时开销 |\n\n' +
            'Rust 的所有权机制在**编译期**确定每块内存的释放时机，既不需要 GC，也不会出现手动管理的 bug——零运行时开销的内存安全。\n\n' +
            '### 栈与堆\n\n' +
            '- **栈（stack）**：固定大小数据（i32、bool、数组）自动复制，后进先出，速度快。\n' +
            '- **堆（heap）**：动态大小数据（String、Vec、Box）通过栈上指针引用，分配/释放有开销。\n' +
            '- String 变量离开作用域时，Rust 自动调用 `drop` 释放堆内存——无需手动 free。\n\n' +
            '函数传参会转移所有权：把 String 传给函数后，调用方不能再使用该变量。函数返回值会把所有权转移给调用者。这种"所有权流转"模型是 Rust 内存管理的核心。\n\n' +
            '## 语法说明\n\n' +
            '### 所有权转移（move）\n\n' +
            '```rust\n' +
            'let s1 = String::from("hello");\n' +
            'let s2 = s1; // s1 的所有权 move 给 s2，s1 失效\n' +
            '// println!("{}", s1); // 编译报错：value borrowed here after move\n' +
            '```\n\n' +
            '### Copy 类型（栈上自动复制）\n\n' +
            '```rust\n' +
            'let x = 5;\n' +
            'let y = x; // i32 是 Copy 类型，x 仍可用\n' +
            'println!("x={}, y={}", x, y); // 正常\n' +
            '```\n\n' +
            '### 作用域与自动 drop\n\n' +
            '```rust\n' +
            '{\n' +
            '    let s = String::from("hi");\n' +
            '    // 使用 s\n' +
            '} // s 离开作用域，自动调用 drop 释放堆内存\n' +
            '```\n\n' +
            '### 函数传参与返回\n\n' +
            '```rust\n' +
            'fn take(s: String) {} // 传入所有权，函数结束 drop\n' +
            'fn give() -> String { String::from("x") } // 返回所有权给调用者\n' +
            '```\n\n' +
            '### Copy 与 Move 类型对照\n\n' +
            '| 类型 | 行为 | 原因 |\n' +
            '|------|------|------|\n' +
            '| i32, u8, f64, bool, char | Copy | 固定大小，栈上复制廉价 |\n' +
            '| [i32; N]（定长数组） | Copy | 元素都是 Copy |\n' +
            '| (i32, f64)（元组） | Copy | 元素都是 Copy |\n' +
            '| String | Move | 堆数据，复制昂贵 |\n' +
            '| Vec<T> | Move | 堆数据 |\n' +
            '| Box<T> | Move | 堆指针 |\n' +
            '| &T（不可变引用） | Copy | 引用本身是栈数据 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：作用域与自动释放**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    {\n' +
            '        let s = String::from("hello");\n' +
            '        println!("s = {}", s);\n' +
            '    } // s 离开作用域，自动释放堆内存\n' +
            '    // println!("{}", s); // 编译报错：s 已不存在\n' +
            '    println!("s 已被释放");\n' +
            '}\n' +
            '```\n\n' +
            'String 在堆上分配。当 s 离开花括号作用域，Rust 自动调用 drop 释放堆内存。无需手动 free，也不会忘记释放。\n\n' +
            '**示例 2：函数传入与返回所有权**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s = String::from("hello");\n' +
            '    takes_ownership(s);\n' +
            '    // println!("{}", s); // 报错：s 已 move\n' +
            '    let s2 = gives_ownership();\n' +
            '    println!("收到: {}", s2);\n' +
            '}\n\n' +
            'fn takes_ownership(s: String) {\n' +
            '    println!("收到: {}", s);\n' +
            '} // s 离开作用域，drop 释放\n\n' +
            'fn gives_ownership() -> String {\n' +
            '    String::from("来自函数")\n' +
            '}\n' +
            '```\n\n' +
            '把 s 传给函数后，所有权转移到函数参数。调用方不能再使用原 s。函数返回值则把所有权转移给调用者。\n\n' +
            '**示例 3：Copy 类型与 Move 类型对比**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    // Copy 类型：复制后原变量仍可用\n' +
            '    let x = 5;\n' +
            '    let y = x;\n' +
            '    println!("x={}, y={}", x, y); // 都可用\n\n' +
            '    // Move 类型：转移后原变量失效\n' +
            '    let s1 = String::from("abc");\n' +
            '    let s2 = s1;\n' +
            '    // println!("{}", s1); // 报错：borrowed after move\n' +
            '    println!("{}", s2);\n' +
            '}\n' +
            '```\n\n' +
            'i32 是 Copy 类型（实现 Copy trait），赋值时按位复制，x 仍可用。String 是 Move 类型（堆数据），赋值时转移所有权。\n\n' +
            '**示例 4：所有权流转链**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s = String::from("data");\n' +
            '    let len = process_and_return(s);\n' +
            '    println!("长度: {}", len);\n' +
            '    // s 已不在，但 len 是 usize（Copy），可用\n' +
            '}\n\n' +
            'fn process_and_return(s: String) -> usize {\n' +
            '    let length = s.len(); // usize 是 Copy\n' +
            '    s // 把所有权返回给调用者（这里演示流转）\n' +
            '    // 实际上函数返回 usize，s 在此 drop\n' +
            '    // 上面写法会报错，正确写法：\n' +
            '    // let length = s.len(); length\n' +
            '}\n' +
            '```\n\n' +
            '演示所有权在函数间流转：传入 → 使用 → 传出。Copy 类型（usize）自动复制，无需转移。\n\n' +
            '## 注意事项\n\n' +
            '1. **move 后原变量失效**：`let s2 = s1;` 后 s1 不可用，这是初学者最常遇到的编译错误。需用 `s1.clone()` 显式复制。\n' +
            '2. **Copy 类型判断**：所有整数/浮点/布尔/字符及定长数组/元组（元素全 Copy）是 Copy；含堆数据（String/Vec）的类型不是 Copy。\n' +
            '3. **函数参数总是 move**（除非 &T）：传 String 给函数会失去所有权。需用引用 `&s` 借用。\n' +
            '4. **部分 move**：元组 `let (a, b) = t;` 后 t 部分失效（t.0 不可用，但 t 可能整体不可用，取决于实现）。\n' +
            '5. **闭包捕获**：闭包 `move ||` 强制 move 捕获的变量，常用于线程中转移所有权到新线程。\n' +
            '6. **drop 不能重复**：所有权保证一个值只 drop 一次，避免 double-free。move 后原变量不 drop（已失效）。\n' +
            '7. **实现 Drop trait 的类型不能 Copy**：因为有析构逻辑的类型复制语义不明确。\n\n' +
            '## 实际应用\n\n' +
            '- **网络服务器**：每个连接的缓冲区有明确所有者，连接关闭自动释放，不泄漏。C 中常见的"谁该 free"困惑消失。\n' +
            '- **资源管理**：文件句柄、锁、数据库连接都用 RAII（所有权离开作用域自动释放），避免忘记关闭。\n' +
            '- **零拷贝设计**：通过所有权转移而非复制传递大数据（如 Vec<u8>），无 GC 开销。\n' +
            '- **线程安全**：`send` 数据到线程需 move 所有权，编译器保证无数据竞争。\n' +
            '- **配置传递**：`Config` 结构体在初始化后 move 到各组件，明确生命周期归属。\n\n' +
            '## 扩展知识\n\n' +
            '- **Clone trait**：`s.clone()` 深复制堆数据，原变量仍可用。代价是性能，慎用。\n' +
            '- **Copy trait**：标记 trait，实现后赋值按位复制。派生 `#[derive(Copy, Clone)]` 用于纯数据类型。\n' +
            '- **Drop trait**：自定义析构，`impl Drop for MyType { fn drop(&mut self) { ... } }`，离开作用域自动调用。\n' +
            '- **Rust vs C++ RAII**：C++ 也用 RAII（构造/析构），但 C++ 允许拷贝构造/赋值，易出 bug；Rust 的 move 语义更安全。\n' +
            '- **Pin**：自引用结构（如 async Future）用 Pin 保证不被 move，是 async/await 的底层支撑。\n' +
            '- **借用检查器**（borrow checker）：编译器组件，静态验证所有权规则，是 Rust 安全的基石。',
          examples: [
            {
              title: '作用域与自动释放',
              code: `fn main() {
    {
        let s = String::from("hello");
        println!("s = {}", s);
    } // s 离开作用域，自动释放堆内存
    // println!("{}", s); // 编译报错：s 已不存在
    println!("s 已被释放");
}`,
              explanation:
                'String 在堆上分配。当 s 离开花括号作用域，Rust 自动调用 drop 释放堆内存。' +
                '无需手动 free，也不会忘记释放。输出两行。',
            },
            {
              title: '函数传入所有权',
              code: `fn main() {
    let s = String::from("hello");
    takes_ownership(s);
    // println!("{}", s); // 编译报错：s 的所有权已转移
    println!("s 的所有权已转移给函数");
}

fn takes_ownership(s: String) {
    println!("收到: {}", s);
} // s 离开作用域，drop 释放内存`,
              explanation:
                '把 s 传给函数后，所有权转移到函数参数 s。调用方不能再使用原 s。' +
                '函数结束时，参数 s 的堆内存被释放。',
            },
            {
              title: '函数返回所有权',
              code: `fn main() {
    let s = gives_ownership();
    println!("收到: {}", s);
}

fn gives_ownership() -> String {
    String::from("来自函数")
}`,
              explanation:
                '函数创建 String 并返回，所有权转移给调用者。main 中的 s 成为新的所有者。输出：收到: 来自函数',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '函数 make_string 返回 String::from("你好")，在 main 中接收并输出。',
              starter_code: `fn main() {
    let s = make_string();
    println!("收到: {}", s);
}

fn make_string() -> String {
    String::from(___)
}`,
              expected_output: '收到: 你好',
              hints: [
                '返回的字符串内容是"你好"',
                '用双引号包裹字符串',
                '答案: "你好"',
              ],
            },
            {
              type: 'output-match',
              prompt: '函数接收 String 所有权并返回它的长度。补全函数调用，输出 "长度: 5"。',
              starter_code: `fn main() {
    let s = String::from("hello");
    let len = get_length(___);
    println!("长度: {}", len);
}

fn get_length(s: String) -> usize {
    s.len()
}`,
              expected_output: '长度: 5',
              hints: [
                '把变量 s 传给函数',
                '直接传变量名 s',
                '答案: s',
              ],
            },
          ],
          realWorldScenario:
            '所有权模型在真实项目中意味着：你永远知道一块内存"归谁管"。在网络服务器中，每个连接的缓冲区有明确的所有者，连接关闭时自动释放，不会泄漏。这与 C 语言中常见的"谁该 free 这块内存"的困惑形成鲜明对比。',
        },
        {
          id: 'rust-ch3-l2',
          title: '移动语义与 Clone',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '当把堆数据（如 String）赋值给另一个变量时，Rust 不会复制堆内容，而是**移动**（move）所有权。' +
            '`let s1 = String::from("hi"); let s2 = s1;` 后，s1 失效，只有 s2 有效。' +
            '这避免了"两个指针指向同一块堆内存"导致的 double-free 问题。\n\n' +
            '对于栈上数据（i32、bool、char、定长数组等），赋值时直接**复制**（copy），因为复制成本很低。' +
            '实现了 `Copy` trait 的类型在赋值时会自动复制，原变量仍然有效。\n\n' +
            '如果确实需要深拷贝堆数据，使用 `clone()` 方法。`let s2 = s1.clone();` 会复制堆内容，' +
            's1 和 s2 都有效。clone 有运行时开销，所以 Rust 不会隐式调用它——你必须显式写 clone，' +
            '这让性能成本可见可控。\n\n' +
            '理解 move vs copy 是掌握 Rust 所有权的关键。简单规则：栈数据自动 copy，堆数据 move，需要保留原值时显式 clone。\n\n' +
            '## 语法说明\n\n' +
            '### Move 语义\n\n' +
            '```rust\n' +
            'let s1 = String::from("hi");\n' +
            'let s2 = s1;        // move：s1 失效\n' +
            '// use(s1);          // 编译报错\n' +
            'use(s2);             // 正常\n' +
            '```\n\n' +
            '### Copy 语义\n\n' +
            '```rust\n' +
            'let x = 42;\n' +
            'let y = x;          // copy：x 仍有效\n' +
            'println!("{} {}", x, y); // 两者都可用\n' +
            '```\n\n' +
            '### Clone 深拷贝\n\n' +
            '```rust\n' +
            'let s1 = String::from("hi");\n' +
            'let s2 = s1.clone(); // 深拷贝，s1 和 s2 都有效\n' +
            '```\n\n' +
            '### 派生 Copy/Clone\n\n' +
            '```rust\n' +
            '#[derive(Copy, Clone)]\n' +
            'struct Point { x: i32, y: i32 } // 全 Copy 字段，可派生 Copy\n' +
            '// #[derive(Copy, Clone)] struct Bad { s: String } // 报错：String 非 Copy\n' +
            '```\n\n' +
            '### Move/Copy/Clone 对照\n\n' +
            '| 操作 | 触发 | 原变量 | 性能 | 适用类型 |\n' +
            '|------|------|--------|------|----------|\n' +
            '| Move | 赋值/传参（非 Copy） | 失效 | 零成本（仅移指针） | String, Vec, Box |\n' +
            '| Copy | 赋值/传参（Copy trait） | 有效 | 按位复制（廉价） | i32, bool, char |\n' +
            '| Clone | 显式 .clone() | 有效 | 深拷贝（昂贵） | 任何实现 Clone 的类型 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：String 的移动与失效**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s1 = String::from("hello");\n' +
            '    let s2 = s1;  // s1 的所有权移动到 s2\n' +
            '    // println!("{}", s1); // 编译报错：s1 已失效\n' +
            '    println!("s2 = {}", s2);\n' +
            '}\n' +
            '```\n\n' +
            'String 赋值时所有权移动，s1 失效。注释掉的行如果取消注释会编译报错：`borrow of moved value`。\n\n' +
            '**示例 2：i32 的复制**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let x = 42;\n' +
            '    let y = x;  // i32 实现了 Copy，x 仍然有效\n' +
            '    println!("x = {}, y = {}", x, y);\n' +
            '    // 元组中元素全 Copy，整体也是 Copy\n' +
            '    let t1 = (1, 2.0);\n' +
            '    let t2 = t1;\n' +
            '    println!("{:?} {:?}", t1, t2);\n' +
            '}\n' +
            '```\n\n' +
            'i32 是栈数据，实现了 Copy trait，赋值时复制。x 和 y 都有效。元组 `(i32, f64)` 因元素全 Copy，整体也 Copy。\n\n' +
            '**示例 3：clone 深拷贝**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s1 = String::from("hello");\n' +
            '    let s2 = s1.clone();  // 深拷贝，s1 和 s2 都有效\n' +
            '    println!("s1 = {}, s2 = {}", s1, s2);\n' +
            '    // 修改 s2 不影响 s1\n' +
            '    let mut s3 = s1.clone();\n' +
            '    s3.push_str(" world");\n' +
            '    println!("s1={}, s3={}", s1, s3);\n' +
            '}\n' +
            '```\n\n' +
            'clone() 显式深拷贝堆数据。s1 和 s2 各自拥有独立的堆内存，互不影响。\n\n' +
            '**示例 4：函数参数的 move 与 clone**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s = String::from("data");\n' +
            '    // 方案 1：传 clone，保留 s\n' +
            '    let len = calc_len(s.clone());\n' +
            '    println!("s={}, len={}", s, len);\n' +
            '    // 方案 2：传 s（move），s 失效\n' +
            '    // let len2 = calc_len(s); // 之后 s 不可用\n' +
            '}\n\n' +
            'fn calc_len(s: String) -> usize {\n' +
            '    s.len()\n' +
            '}\n' +
            '```\n\n' +
            '若函数需用 String 但调用方也要保留，用 clone() 复制传入；或改用引用 `&String` 借用（下节讲）。\n\n' +
            '## 注意事项\n\n' +
            '1. **move 后原变量失效**：`let s2 = s1;` 后 s1 不可用，这是最常见的初学者错误。需 clone 才能保留。\n' +
            '2. **clone 有性能开销**：深拷贝堆数据（String 复制所有字节），循环中频繁 clone 影响性能。优先用引用。\n' +
            '3. **Copy trait 自动派生**：`#[derive(Copy, Clone)]` 仅当所有字段都是 Copy 时才有效。含 String/Vec 的结构体不能 Copy。\n' +
            '4. **函数参数默认 move**：传 String 给函数会失去所有权。需用 `&s` 借用或 `s.clone()` 复制。\n' +
            '5. **数组 [T; N] vs Vec<T>**：定长数组 `[i32; 5]` 是 Copy（元素全 Copy）；`Vec<i32>` 是 Move（堆数据）。\n' +
            '6. **元组规则**：`(i32, f64)` 是 Copy（元素全 Copy）；`(i32, String)` 是 Move（含 String）。\n' +
            '7. **Copy 隐式约束**：实现 Copy 必须同时实现 Clone，且 Clone 实现必须与 Copy 一致（按位复制）。\n\n' +
            '## 实际应用\n\n' +
            '- **缓存系统**：需要把数据传给多个消费者时，用 clone() 显式复制，明确成本。\n' +
            '- **配置共享**：`Config` 结构体含 String，传给多模块时用 Arc<Config>（引用计数）或 clone。\n' +
            '- **栈上小数据**：坐标 `(f64, f64, f64)`、颜色 `(u8, u8, u8)` 是 Copy，函数传参无开销。\n' +
            '- **避免隐式拷贝**：Rust 不像 C++ 有隐式拷贝构造，所有深拷贝必须显式 clone，性能可预测。\n' +
            '- **大数据传递**：Vec<u8> 等大集合优先 move 或借用，避免 clone 整段复制。\n\n' +
            '## 扩展知识\n\n' +
            '- **Drop 与 Copy 互斥**：实现 Drop（自定义析构）的类型不能 Copy，因为析构逻辑不能简单按位复制。\n' +
            '- **Box<T> 是 Move**：即使 T 是 Copy，Box<T> 仍是 Move（堆指针，复制会导致 double-free）。\n' +
            '- **Rc/Arc 引用计数**：`Rc::clone(&rc)` 只增计数不深拷贝，是多所有者的方案（单线程 Rc，多线程 Arc）。\n' +
            '- **Cow<\'a, B>**：写时复制类型，读时借用，写时 clone，优化少量修改场景。\n' +
            '- **String vs &str**：String 是堆分配（Move）；&str 是切片引用（Copy），传 &str 无开销。\n' +
            '- **零拷贝解析**：nom/serde 等库利用 &str 切片避免 clone，解析大文件时性能优势显著。',
          examples: [
            {
              title: 'String 的移动',
              code: `fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 的所有权移动到 s2
    // println!("{}", s1); // 编译报错：s1 已失效
    println!("s2 = {}", s2);
}`,
              explanation:
                'String 赋值时所有权移动，s1 失效。注释掉的行如果取消注释会编译报错。' +
                '输出：s2 = hello',
            },
            {
              title: 'i32 的复制',
              code: `fn main() {
    let x = 42;
    let y = x;  // i32 实现了 Copy，x 仍然有效
    println!("x = {}, y = {}", x, y);
}`,
              explanation:
                'i32 是栈数据，实现了 Copy trait，赋值时复制。x 和 y 都有效，都等于 42。' +
                '不需要 clone，因为复制 i32 成本极低。',
            },
            {
              title: 'clone 深拷贝',
              code: `fn main() {
    let s1 = String::from("hello");
    let s2 = s1.clone();  // 深拷贝，s1 和 s2 都有效
    println!("s1 = {}, s2 = {}", s1, s2);
}`,
              explanation:
                'clone() 显式深拷贝堆数据。s1 和 s2 各自拥有独立的堆内存，互不影响。' +
                '输出：s1 = hello, s2 = hello',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 clone() 复制 String，使 s1 和 s2 都有效。输出 "s1=hi, s2=hi"。',
              starter_code: `fn main() {
    let s1 = String::from("hi");
    let s2 = s1.___();
    println!("s1={}, s2={}", s1, s2);
}`,
              expected_output: 's1=hi, s2=hi',
              hints: [
                '深拷贝用 clone() 方法',
                '在 s1 后面调用 clone()',
                '答案: clone()',
              ],
            },
            {
              type: 'output-match',
              prompt: 'i32 类型会自动 Copy。复制 x 到 y，输出 "x=10, y=10"。',
              starter_code: `fn main() {
    let x = 10;
    let y = ___;
    println!("x={}, y={}", x, y);
}`,
              expected_output: 'x=10, y=10',
              hints: [
                'i32 实现了 Copy trait，直接赋值即可复制',
                '把 x 赋值给 y',
                '答案: x',
              ],
            },
          ],
          realWorldScenario:
            '在构建缓存系统时，经常需要复制数据给多个消费者。clone() 让你显式控制深拷贝的时机和成本。理解 move vs copy 能避免"值已移动"的编译错误，这是 Rust 初学者最常遇到的障碍。',
        },
        {
          id: 'rust-ch3-l3',
          title: '引用与借用',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '每次调用函数都转移所有权很麻烦——函数用完还要返回回来。**引用**（reference）解决了这个问题：' +
            '你可以把值的引用传给函数，函数使用值但不获取所有权。这叫**借用**（borrowing）。' +
            '`&x` 创建不可变引用，`&mut x` 创建可变引用。\n\n' +
            '### 借用规则（核心）\n\n' +
            '**在同一时刻，要么有一个可变引用，要么有多个不可变引用，二者不能共存**。' +
            '这条规则在编译期检查，防止了数据竞争（data race）——这是 Rust 无需 GC 也能保证并发安全的关键。' +
            '在 C++ 中，多个线程同时修改同一数据需要手动加锁；在 Rust 中，编译器在编译期就阻止了这种情况。\n\n' +
            '引用默认不可变——通过 `&` 创建的引用不能修改原值。需要修改时用 `&mut`，但原变量必须用 `let mut` 声明。' +
            '`&mut` 引用在同一作用域只能有一个，防止多线程写入冲突。\n\n' +
            '悬垂引用（dangling reference）在 Rust 中不可能出现——编译器确保引用永远不会比它指向的数据活得长。' +
            '如果函数返回一个引用，编译器会通过生命周期分析确保被引用的数据在引用有效期内不会被释放。\n\n' +
            '## 语法说明\n\n' +
            '### 不可变引用\n\n' +
            '```rust\n' +
            'let s = String::from("hi");\n' +
            'let r: &String = &s;       // 借用，s 仍拥有所有权\n' +
            'let r2 = &s;               // 可有多个不可变引用\n' +
            'println!("{} {}", r, r2);\n' +
            '```\n\n' +
            '### 可变引用\n\n' +
            '```rust\n' +
            'let mut s = String::from("hi");\n' +
            'let r: &mut String = &mut s; // 唯一可变引用\n' +
            'r.push_str("!");\n' +
            '// let r2 = &mut s;          // 报错：已有可变引用\n' +
            '```\n\n' +
            '### 函数借用\n\n' +
            '```rust\n' +
            'fn calc_len(s: &String) -> usize { s.len() }  // 借用，不取所有权\n' +
            'fn push(s: &mut String) { s.push_str("!"); } // 可变借用\n' +
            '```\n\n' +
            '### 借用规则总结\n\n' +
            '| 引用类型 | 数量限制 | 可否修改 | 兼容性 |\n' +
            '|----------|----------|----------|--------|\n' +
            '| `&T` 不可变 | 多个 | ❌ | 与其他 &T 共存 |\n' +
            '| `&mut T` 可变 | 仅 1 个 | ✅ | 不与任何引用共存 |\n' +
            '| NLL 优化 | - | - | 最后使用后自动释放 |\n\n' +
            '### 常见借用错误\n\n' +
            '| 错误 | 原因 | 修复 |\n' +
            '|------|------|------|\n' +
            '| `cannot borrow as mutable` | 已有不可变引用 | 先结束不可变引用再用 &mut |\n' +
            '| `cannot borrow as mutable twice` | 已有 &mut | 限制 &mut 作用域 |\n' +
            '| `borrowed value does not live long enough` | 悬垂引用 | 返回拥有所有权的值 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：不可变引用借用**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s = String::from("hello");\n' +
            '    let len = calculate_length(&s);\n' +
            '    println!("\'{}\' 的长度是 {}", s, len);\n' +
            '}\n\n' +
            'fn calculate_length(s: &String) -> usize {\n' +
            '    s.len()\n' +
            '} // s 离开作用域，但因为它不拥有所有权，什么也不发生\n' +
            '```\n\n' +
            '`&s` 创建 s 的引用传给函数。函数借用 s 但不获取所有权，s 在调用后仍然有效。\n\n' +
            '**示例 2：可变引用修改**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let mut s = String::from("hello");\n' +
            '    append_world(&mut s);\n' +
            '    println!("{}", s);\n' +
            '}\n\n' +
            'fn append_world(s: &mut String) {\n' +
            '    s.push_str(", world");\n' +
            '}\n' +
            '```\n\n' +
            '`&mut s` 创建可变引用，函数可以修改原值。s 必须用 `let mut` 声明。\n\n' +
            '**示例 3：多个不可变引用与 NLL**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let mut s = String::from("hello");\n' +
            '    let r1 = &s; // 不可变引用\n' +
            '    let r2 = &s; // 多个不可变引用 OK\n' +
            '    println!("{} {}", r1, r2);\n' +
            '    // r1, r2 在此之后不再使用，NLL 释放它们\n' +
            '    let r3 = &mut s; // 现在可以可变借用\n' +
            '    r3.push_str("!");\n' +
            '    println!("{}", r3);\n' +
            '}\n' +
            '```\n\n' +
            'NLL（Non-Lexical Lifetimes）让引用在其最后一次使用后即结束，而非作用域结束。这让上述代码合法——r1/r2 在 println 后不再使用，r3 可借用。\n\n' +
            '**示例 4：悬垂引用被阻止**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    // let r = dangle(); // 编译报错\n' +
            '}\n\n' +
            '// fn dangle() -> &String { // 报错：缺少生命周期\n' +
            '//     let s = String::from("hi");\n' +
            '//     &s // s 在函数结束 drop，引用悬垂！\n' +
            '// }\n\n' +
            '// 正确做法：直接返回 String，转移所有权\n' +
            'fn no_dangle() -> String {\n' +
            '    let s = String::from("hi");\n' +
            '    s // 所有权移出，不 drop\n' +
            '}\n' +
            '```\n\n' +
            '编译器阻止悬垂引用：函数内创建的 s 在函数结束时 drop，若返回 &s 则引用悬垂。正确做法是返回 String 转移所有权。\n\n' +
            '## 注意事项\n\n' +
            '1. **可变引用唯一性**：同一作用域只能有一个 `&mut`，防止数据竞争。多个 `&mut` 编译报错。\n' +
            '2. **不可变与可变互斥**：有 `&` 时不能创建 `&mut`，反之亦然。NLL 让"最后使用后"即可切换。\n' +
            '3. **原变量需 `let mut`**：`&mut x` 要求 x 本身可变。`let x = ...; &mut x` 报错。\n' +
            '4. **引用不能比数据活得长**：编译器通过生命周期保证，避免悬垂引用。\n' +
            '5. **函数参数优先用引用**：`fn f(s: &String)` 比 `fn f(s: String)` 灵活，不剥夺调用方所有权。\n' +
            '6. **&str 优于 &String**：函数参数用 `&str` 可接受 `&String` 和 `&str`，更通用（Deref 强制转换）。\n' +
            '7. **迭代时借用**：`for x in &vec`（不可变借用）、`for x in &mut vec`（可变借用）、`for x in vec`（消费所有权）。\n\n' +
            '## 实际应用\n\n' +
            '- **Web 服务器**：请求处理函数用 `&Request` 借用，多个中间件可同时读取请求体，不转移所有权。\n' +
            '- **并发安全**：借用规则在编译期消除数据竞争，无需运行时锁检查（`RefCell`/`Mutex` 用于运行时）。\n' +
            '- **函数式编程**：`map`/`filter` 等迭代器方法借用集合，不消费所有权，原数据可用。\n' +
            '- **缓存读取**：`fn get(&self, key: &str) -> Option<&Value>` 借用 self 和 key，返回引用不复制。\n' +
            '- **零拷贝解析**：JSON 解析器返回 `&str` 切片指向原输入，避免复制整个字符串。\n\n' +
            '## 扩展知识\n\n' +
            '- **NLL（Non-Lexical Lifetimes）**：Rust 2018 后引入，引用在最后使用处而非作用域结束处失效，减少不必要的借用冲突。\n' +
            '- **生命周期标注**：`fn foo<\'a>(x: &\'a str) -> &\'a str` 显式标注引用关系，编译器验证。\n' +
            '- **生命周期省略规则**：3 条规则让大多数函数无需显式标注：输入引用各自独立、输入唯一则输出同、`&self` 方法输出同 self。\n' +
            '- **RefCell<T>**：运行时借用检查，单线程内部可变性。`borrow()`/`borrow_mut()` 运行时检查规则。\n' +
            '- **Mutex<T>/RwLock<T>**：跨线程内部可变性，Mutex 互斥锁，RwLock 读写锁（多个读或一个写）。\n' +
            '- **Deref 强制转换**：`&String` 自动转 `&str`，`&Vec<T>` 转 `&[T]`，让 API 更通用。',
          examples: [
            {
              title: '不可变引用',
              code: `fn main() {
    let s = String::from("hello");
    let len = calculate_length(&s);
    println!("'{}' 的长度是 {}", s, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}`,
              explanation:
                '`&s` 创建 s 的引用传给函数。函数借用 s 但不获取所有权，s 在调用后仍然有效。' +
                '输出：\'hello\' 的长度是 5',
            },
            {
              title: '可变引用',
              code: `fn main() {
    let mut s = String::from("hello");
    append_world(&mut s);
    println!("{}", s);
}

fn append_world(s: &mut String) {
    s.push_str(", world");
}`,
              explanation:
                '`&mut s` 创建可变引用，函数可以修改原值。s 必须用 `let mut` 声明。' +
                '输出：hello, world',
            },
            {
              title: '多个不可变引用',
              code: `fn main() {
    let s = String::from("hello");
    let r1 = &s;
    let r2 = &s;
    println!("{} {}", r1, r2);
    println!("{}", s);
}`,
              explanation:
                '可以有多个不可变引用同时存在（r1、r2、s），因为只读不会冲突。' +
                '但不能同时有可变引用和不可变引用。输出：hello hello，然后 hello。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全函数调用：用引用传 s 给 get_len，输出 "长度: 5"。',
              starter_code: `fn main() {
    let s = String::from("hello");
    let len = get_len(___);
    println!("长度: {}", len);
}

fn get_len(s: &String) -> usize {
    s.len()
}`,
              expected_output: '长度: 5',
              hints: [
                '用 & 创建引用',
                '&s 创建 s 的不可变引用',
                '答案: &s',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全可变引用：函数修改 String 后输出 "hello rust"。',
              starter_code: `fn main() {
    let mut s = String::from("hello");
    add_suffix(___);
    println!("{}", s);
}

fn add_suffix(s: &mut String) {
    s.push_str(" rust");
}`,
              expected_output: 'hello rust',
              hints: [
                '用 &mut 创建可变引用',
                '&mut s 创建 s 的可变引用',
                '答案: &mut s',
              ],
            },
          ],
          realWorldScenario:
            '在 Web 服务器中，请求处理函数需要读取请求体但不获取所有权（后续中间件还要用）。不可变引用让多个处理函数同时读取请求，而可变引用确保修改操作独占访问。借用规则在编译期消除了数据竞争，这是 Rust 在高并发场景下的杀手级特性。',
        },
        {
          id: 'rust-ch3-l4',
          title: '字符串切片',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '切片（slice）是对集合中**连续部分**的引用，不获取所有权。字符串切片 `&str` 是对 String 中一段字符的引用。' +
            '`&s[0..5]` 取前 5 个字节，`&s[..5]` 等价，`&s[3..]` 从第 3 字节到末尾，`&s[..]` 是整个字符串。\n\n' +
            '### String vs &str\n\n' +
            '| 特性 | String | &str |\n' +
            '|------|--------|------|\n' +
            '| 所有权 | 拥有堆内存 | 借用引用（只读） |\n' +
            '| 可变性 | 可增长、可修改 | 不可变 |\n' +
            '| 存储 | 堆 | 栈（胖指针）或二进制（字面量） |\n' +
            '| 来源 | `String::from()` / `to_string()` | 字面量 / 切片 / `&String` |\n\n' +
            '字符串字面量 `"hello"` 本质是 `&\'static str`——直接嵌入二进制文件中的只读数据，生命周期为整个程序运行期。' +
            '函数参数优先用 `&str` 而非 `&String`，因为 `&str` 更通用：既能接受 `&String`（自动解引用转换），也能接受字符串字面量。\n\n' +
            '切片也适用于数组：`&arr[1..3]` 取数组第 1、2 个元素的切片，类型是 `&[T]`。' +
            '切片内部存储一个指针和长度，是**胖指针**（fat pointer）——比普通指针多一个长度字段。\n\n' +
            '使用切片让函数可以处理字符串/数组的任意部分，无需复制数据。这在文本解析（如提取 URL 路径、解析 CSV 字段）中极为高效——零拷贝操作。\n\n' +
            '## 语法说明\n\n' +
            '### 字符串切片语法\n\n' +
            '```rust\n' +
            'let s = String::from("hello world");\n' +
            'let a = &s[0..5];   // "hello"（0 到 4，不含 5）\n' +
            'let b = &s[..5];    // 等价于 &s[0..5]\n' +
            'let c = &s[6..];    // "world"（6 到末尾）\n' +
            'let d = &s[..];     // 整个字符串\n' +
            '```\n\n' +
            '### 函数参数用 &str\n\n' +
            '```rust\n' +
            'fn first_word(s: &str) -> &str { /* ... */ }\n' +
            '// 调用：first_word(&string) 或 first_word("literal") 都可\n' +
            '```\n\n' +
            '### 数组切片\n\n' +
            '```rust\n' +
            'let arr = [1, 2, 3, 4, 5];\n' +
            'let slice: &[i32] = &arr[1..4]; // [2, 3, 4]\n' +
            '```\n\n' +
            '### 切片范围语法总结\n\n' +
            '| 写法 | 含义 | 等价 |\n' +
            '|------|------|------|\n' +
            '| `&s[a..b]` | a 到 b-1 | - |\n' +
            '| `&s[..b]` | 0 到 b-1 | `&s[0..b]` |\n' +
            '| `&s[a..]` | a 到末尾 | `&s[a..s.len()]` |\n' +
            '| `&s[..]` | 全部 | `&s[0..s.len()]` |\n' +
            '| `&s[a..=b]` | a 到 b（含 b） | `&s[a..(b+1)]` |\n\n' +
            '### 胖指针结构\n\n' +
            '```rust\n' +
            '// &str 内部等价于：\n' +
            'struct SliceRef {\n' +
            '    ptr: *const u8,  // 指向数据起始\n' +
            '    len: usize,       // 长度\n' +
            '}\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：字符串切片基础**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s = String::from("hello world");\n' +
            '    let hello = &s[0..5];\n' +
            '    let world = &s[6..11];\n' +
            '    println!("{} {}", hello, world);\n' +
            '    let whole = &s[..];\n' +
            '    println!("完整: {}", whole);\n' +
            '}\n' +
            '```\n\n' +
            '`&s[0..5]` 取索引 0 到 4 的字节（不含 5）。切片不复制数据，只是引用。\n\n' +
            '**示例 2：函数接受 &str（零拷贝）**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s = String::from("hello");\n' +
            '    println!("{}", first_word(&s));      // 传 &String\n' +
            '    println!("{}", first_word("hello world")); // 传字面量\n' +
            '}\n\n' +
            'fn first_word(s: &str) -> &str {\n' +
            '    let bytes = s.as_bytes();\n' +
            '    for (i, &byte) in bytes.iter().enumerate() {\n' +
            '        if byte == b\' \' {\n' +
            '            return &s[0..i];\n' +
            '        }\n' +
            '    }\n' +
            '    s // 无空格，返回整个\n' +
            '}\n' +
            '```\n\n' +
            '`first_word` 接受 `&str`，既能传 `&String` 也能传字面量。函数返回第一个空格前的部分，零拷贝。\n\n' +
            '**示例 3：数组切片与遍历**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let arr = [1, 2, 3, 4, 5];\n' +
            '    let slice = &arr[1..4];\n' +
            '    println!("切片: {:?}", slice);  // [2, 3, 4]\n' +
            '    println!("长度: {}", slice.len());\n\n' +
            '    // 遍历切片\n' +
            '    for v in slice {\n' +
            '        println!("{}", v);\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '`&arr[1..4]` 取索引 1、2、3 的元素。`{:?}` 用 Debug 格式输出。切片可像数组一样遍历。\n\n' +
            '**示例 4：字符串切片与生命周期**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s = String::from("hello world");\n' +
            '    let word = first_word(&s); // word 借用 s\n' +
            '    println!("首词: {}", word);\n' +
            '    // s.clear(); // 报错：word 仍借用 s，不能可变借用\n' +
            '    // 编译器保证 word 有效期间 s 不被修改\n' +
            '}\n\n' +
            'fn first_word(s: &str) -> &str {\n' +
            '    let bytes = s.as_bytes();\n' +
            '    for (i, &b) in bytes.iter().enumerate() {\n' +
            '        if b == b\' \' { return &s[..i]; }\n' +
            '    }\n' +
            '    s\n' +
            '}\n' +
            '```\n\n' +
            'word 借用 s，编译器保证 word 有效期间 s 不能被可变借用（如 clear）。这是生命周期保证的安全性。\n\n' +
            '## 注意事项\n\n' +
            '1. **切片索引按字节**：`&s[0..5]` 是字节范围，非字符范围。多字节 UTF-8 字符（如中文）切片到字符中间会 panic。用 `s.chars()` 按字符操作。\n' +
            '2. **越界 panic**：`&s[0..100]`（s 长度不足）运行时 panic。用 `s.get(0..5)` 返回 `Option<&str>` 安全访问。\n' +
            '3. **String 可变，&str 不可变**：`&str` 是只读借用，修改需 `&mut String`。String 可 `push_str`/`insert`。\n' +
            '4. **函数参数优先 &str**：比 `&String` 通用，能接受字面量和 `&String`（Deref 转换）。\n' +
            '5. **字符串拼接**：`s1 + &s2` 消费 s1 所有权（s2 需 &str）；`format!("{}, {}", s1, s2)` 不消费所有权但分配新 String。\n' +
            '6. **切片是胖指针**：`&str` 是 16 字节（64 位系统）：8 字节指针 + 8 字节长度。`&[T]` 同理。\n' +
            '7. **&str 与 &\'static str**：字面量是 `&\'static str`（整个程序存活）；普通切片 `&str` 生命周期与原数据绑定。\n\n' +
            '## 实际应用\n\n' +
            '- **HTTP 请求解析**：从 "GET /api/users HTTP/1.1" 提取方法/路径/版本，每部分是原字符串切片，零拷贝。\n' +
            '- **CSV/JSON 解析**：字段值用 &str 指向原输入，避免复制。serde 库广泛使用此特性。\n' +
            '- **日志处理**：切分日志行，提取时间戳、级别、消息，每段是切片引用。\n' +
            '- **URL 路由**：`/api/users/123` 切分为 `["api", "users", "123"]`，路由匹配用切片。\n' +
            '- **文本编辑器**：大文档用切片表示选区，无需复制内容。\n\n' +
            '## 扩展知识\n\n' +
            '- **str 类型**：`str` 是未定长类型（编译期不知大小），只能通过引用 `&str` 使用。`str` 是 DST（动态大小类型）。\n' +
            '- **OsStr / Path**：跨平台字符串类型，`OsStr` 是 OS 原生编码，`Path` 是路径专用，`PathBuf` 是其拥有版本。\n' +
            '- **Cow<\'a, str>**：Clone-on-Write，可能借用 `&\'a str` 也可能拥有 `String`，适合"通常借用偶尔修改"场景。\n' +
            '- **bytes() / chars()**：`s.bytes()` 按字节迭代，`s.chars()` 按 Unicode 字符迭代，`s.char_indices()` 字符+字节索引。\n' +
            '- **split / lines**：`s.split(\',\')` 返回迭代器，每个元素是 &str 切片。`s.lines()` 按行切分。\n' +
            '- **String 实现细节**：String 是 `Vec<u8>` 的包装，保证内容是合法 UTF-8。`into_bytes()` 转为 Vec<u8>。',
          examples: [
            {
              title: '字符串切片',
              code: `fn main() {
    let s = String::from("hello world");
    let hello = &s[0..5];
    let world = &s[6..11];
    println!("{} {}", hello, world);
    let whole = &s[..];
    println!("完整: {}", whole);
}`,
              explanation:
                '`&s[0..5]` 取索引 0 到 4 的字符（不含 5）。`&s[..]` 取整个字符串。' +
                '切片不复制数据，只是引用。输出：hello world，然后 完整: hello world',
            },
            {
              title: '函数接受 &str',
              code: `fn main() {
    let s = String::from("hello");
    println!("{}", first_word(&s));
    println!("{}", first_word("hello world"));
}

fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();
    for (i, &byte) in bytes.iter().enumerate() {
        if byte == b' ' {
            return &s[0..i];
        }
    }
    s
}`,
              explanation:
                '`first_word` 接受 `&str`，既能传 `&String` 也能传字面量。' +
                '函数返回第一个空格前的部分。第一次调用返回 "hello"，第二次也返回 "hello"。',
            },
            {
              title: '数组切片',
              code: `fn main() {
    let arr = [1, 2, 3, 4, 5];
    let slice = &arr[1..4];
    println!("切片: {:?}", slice);
    println!("长度: {}", slice.len());
}`,
              explanation:
                '`&arr[1..4]` 取索引 1、2、3 的元素。`{:?}` 用 Debug 格式输出。' +
                '输出：切片: [2, 3, 4]，长度: 3',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '取字符串 "hello world" 的前 5 个字符作为切片，输出 "hello"。',
              starter_code: `fn main() {
    let s = String::from("hello world");
    let hello = &s[___];
    println!("{}", hello);
}`,
              expected_output: 'hello',
              hints: [
                '范围 0..5 取索引 0 到 4',
                '写 0..5',
                '答案: 0..5',
              ],
            },
            {
              type: 'output-match',
              prompt: '函数 greet 接受 &str 参数。用字符串字面量和 String 引用都调用它，输出两行 "你好, Rust"。',
              starter_code: `fn main() {
    greet("Rust");
    let name = String::from("Rust");
    greet(___);
}

fn greet(name: &str) {
    println!("你好, {}", name);
}`,
              expected_output: '你好, Rust\n你好, Rust',
              hints: [
                '函数接受 &str，传 String 时需要 &name',
                '&name 会自动解引用为 &str',
                '答案: &name',
              ],
            },
          ],
          realWorldScenario:
            '在文本处理和解析中，切片是核心工具。例如 HTTP 请求解析：从请求行 "GET /api/users HTTP/1.1" 中提取方法、路径、版本，每部分都是原字符串的切片，无需复制。这种零拷贝解析让 Rust 网络框架性能远超 Python/Node.js。',
        },
      ],
    },

    // ================================================================
    // 第 4 章：结构体与枚举
    // ================================================================
    {
      id: 'rust-ch4',
      title: '结构体与枚举',
      order: 3,
      lessons: [
        {
          id: 'rust-ch4-l1',
          title: '结构体定义与方法',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '结构体（struct）将相关数据组织在一起，是 Rust 自定义类型的基础。' +
            '声明：`struct User { name: String, age: u32 }`。创建实例：`User { name: String::from("小明"), age: 20 }`。' +
            '字段用 `.` 访问：`user.name`。结构体默认不可变，修改字段需要 `let mut` 声明整个实例。\n\n' +
            '`impl` 块为结构体定义方法。方法第一个参数总是 `&self`（不可变借用）或 `&mut self`（可变借用）或 `self`（获取所有权）。' +
            '调用方法用点号：`user.say_hi()`。关联函数（类似静态方法）不以 self 为参数，用 `::` 调用：`User::new()`。\n\n' +
            '`#[derive(Debug)]` 属性让结构体自动实现 Debug trait，可以用 `{:?}` 打印。' +
            '还有 `#[derive(Clone, PartialEq)]` 等常用派生属性。这让结构体获得标准行为而无需手写样板代码。\n\n' +
            '结构体还有两种变体：元组结构体 `struct Point(i32, i32);` 和单元结构体 `struct Always;`。' +
            '但最常用的是命名字段结构体，因为它自文档化——字段名就是最好的注释。\n\n' +
            '## 语法说明\n\n' +
            '### 定义与实例化\n\n' +
            '```rust\n' +
            'struct User {\n' +
            '    name: String,\n' +
            '    age: u32,\n' +
            '    active: bool,\n' +
            '}\n\n' +
            'let u = User {\n' +
            '    name: String::from("小明"),\n' +
            '    age: 20,\n' +
            '    active: true,\n' +
            '};\n' +
            'let name = u.name; // 字段访问\n' +
            '```\n\n' +
            '### 字段简写\n\n' +
            '```rust\n' +
            'let name = String::from("小明");\n' +
            'let age = 20;\n' +
            'let u = User { name, age, active: true }; // name/age 简写\n' +
            '```\n\n' +
            '### 结构体更新语法\n\n' +
            '```rust\n' +
            'let u2 = User { age: 21, ..u }; // 其余字段从 u 复制（move）\n' +
            '```\n\n' +
            '### impl 方法与关联函数\n\n' +
            '```rust\n' +
            'impl User {\n' +
            '    fn new(name: String, age: u32) -> User {  // 关联函数\n' +
            '        User { name, age, active: true }\n' +
            '    }\n' +
            '    fn birthday(&mut self) {                    // 方法：&mut self\n' +
            '        self.age += 1;\n' +
            '    }\n' +
            '    fn into_name(self) -> String {              // 方法：消费 self\n' +
            '        self.name\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '### self 参数三种形式\n\n' +
            '| 参数 | 语义 | 所有权 | 适用场景 |\n' +
            '|------|------|--------|----------|\n' +
            '| `&self` | 不可变借用 | 不取 | 读取字段 |\n' +
            '| `&mut self` | 可变借用 | 不取 | 修改字段 |\n' +
            '| `self` | 获取所有权 | 取 | 消费对象，转成其他类型 |\n\n' +
            '### 三种结构体变体\n\n' +
            '| 类型 | 语法 | 字段名 | 用途 |\n' +
            '|------|------|--------|------|\n' +
            '| 命名字段 | `struct P { x: i32 }` | 有 | 通用，自文档化 |\n' +
            '| 元组结构体 | `struct P(i32, i32);` | 无（用 .0 .1） | 轻量包装（如 NewType） |\n' +
            '| 单元结构体 | `struct Marker;` | 无字段 | 类型标记、trait 实现 |\n\n' +
            '### 常用派生属性\n\n' +
            '| 属性 | 作用 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `Debug` | `{:?}` 打印 | 调试日志 |\n' +
            '| `Clone` | `.clone()` 深拷贝 | 需要复制时 |\n' +
            '| `Copy` | 赋值时复制 | 栈上纯数据 |\n' +
            '| `PartialEq` | `==` / `!=` 比较 | 值比较 |\n' +
            '| `Hash` | HashMap key | 哈希集合 |\n' +
            '| `Default` | `T::default()` 默认值 | 配置初始化 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：定义与使用结构体**\n\n' +
            '```rust\n' +
            '#[derive(Debug)]\n' +
            'struct User {\n' +
            '    name: String,\n' +
            '    age: u32,\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    let user = User {\n' +
            '        name: String::from("小明"),\n' +
            '        age: 20,\n' +
            '    };\n' +
            '    println!("姓名: {}, 年龄: {}", user.name, user.age);\n' +
            '    println!("调试: {:?}", user);\n' +
            '}\n' +
            '```\n\n' +
            '`#[derive(Debug)]` 让结构体可打印。`{:?}` 输出 Debug 格式（如 `User { name: "小明", age: 20 }`）。\n\n' +
            '**示例 2：impl 方法与关联函数**\n\n' +
            '```rust\n' +
            'struct Rectangle {\n' +
            '    width: f64,\n' +
            '    height: f64,\n' +
            '}\n\n' +
            'impl Rectangle {\n' +
            '    fn new(width: f64, height: f64) -> Rectangle {\n' +
            '        Rectangle { width, height }\n' +
            '    }\n' +
            '    fn area(&self) -> f64 { self.width * self.height }\n' +
            '    fn scale(&mut self, factor: f64) {\n' +
            '        self.width *= factor;\n' +
            '        self.height *= factor;\n' +
            '    }\n' +
            '    fn can_hold(&self, other: &Rectangle) -> bool {\n' +
            '        self.width > other.width && self.height > other.height\n' +
            '    }\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    let mut r = Rectangle::new(3.0, 4.0);\n' +
            '    println!("面积: {}", r.area());\n' +
            '    r.scale(2.0);\n' +
            '    println!("放大后面积: {}", r.area());\n' +
            '    let small = Rectangle::new(1.0, 2.0);\n' +
            '    println!("能容纳小矩形? {}", r.can_hold(&small));\n' +
            '}\n' +
            '```\n\n' +
            '`new()` 是关联函数（构造器），`area(&self)` 读取，`scale(&mut self)` 修改，`can_hold` 借用另一矩形比较。\n\n' +
            '**示例 3：元组结构体与单元结构体**\n\n' +
            '```rust\n' +
            'struct Meters(f64);   // 元组结构体：NewType 模式\n' +
            'struct LoggedIn;      // 单元结构体：状态标记\n\n' +
            'fn main() {\n' +
            '    let d = Meters(5.0);\n' +
            '    println!("距离: {} 米", d.0); // 用 .0 访问\n' +
            '    let state = LoggedIn;\n' +
            '    // LoggedIn 占 0 字节，仅作类型标记\n' +
            '}\n' +
            '```\n\n' +
            '元组结构体常用于 NewType 模式（给类型加语义），单元结构体用于类型状态标记。\n\n' +
            '**示例 4：结构体更新语法**\n\n' +
            '```rust\n' +
            '#[derive(Debug)]\n' +
            'struct Config { host: String, port: u16, debug: bool }\n\n' +
            'fn main() {\n' +
            '    let base = Config {\n' +
            '        host: String::from("localhost"),\n' +
            '        port: 8080,\n' +
            '        debug: false,\n' +
            '    };\n' +
            '    // 只改 debug，其余从 base 继承\n' +
            '    let dev = Config { debug: true, ..base };\n' +
            '    println!("{:?}", dev);\n' +
            '    // 注意：base.host 已 move 到 dev，base 不可整体使用\n' +
            '    // 但 base.port/debug 是 Copy，仍可用\n' +
            '}\n' +
            '```\n\n' +
            '`..base` 从现有实例复制其余字段。注意 String 字段会 move，Copy 字段会 copy。\n\n' +
            '## 注意事项\n\n' +
            '1. **结构体默认不可变**：修改字段需 `let mut user = ...`，不能只让某字段可变。\n' +
            '2. **字段 move**：`let name = user.name;` 后 user.name 不可用（String 是 Move）。整体使用 user 也受限。\n' +
            '3. **impl 可分散**：一个类型可有多个 `impl` 块，常用于按功能分组（如 `impl Display`、`impl Debug` 分开）。\n' +
            '4. **关联函数 vs 方法**：关联函数无 self 参数（`User::new()`）；方法有 self 参数（`user.age()`）。\n' +
            '5. **派生限制**：`#[derive(Copy)]` 仅当所有字段都是 Copy；`#[derive(Clone)]` 总是可以。\n' +
            '6. **Debug 格式**：`{:?}` 是 Debug，`{:#?}` 是美化 Debug（多行缩进）。需 `#[derive(Debug)]`。\n' +
            '7. **私有字段**：模块外只能访问 pub 字段。结构体字段默认私有，需 `pub` 暴露。\n\n' +
            '## 实际应用\n\n' +
            '- **领域建模**：User、Order、Product 等业务实体用命名字段结构体，字段名自文档化。\n' +
            '- **NewType 模式**：`struct UserId(String)` 给 String 加类型标签，防止混淆 UserId 和 Email。\n' +
            '- **状态机**：单元结构体 `struct LoggedIn;` / `struct LoggedOut;` 表示认证状态。\n' +
            '- **配置**：`Config` 结构体集中配置，`#[derive(Default)]` 提供默认值。\n' +
            '- **Builder 模式**：`ConfigBuilder` 结构体链式构建复杂对象，最后 `.build()` 转换。\n\n' +
            '## 扩展知识\n\n' +
            '- **Display trait**：`impl Display for T` 让 `{}` 打印用户友好格式（Debug 是 `{:?}` 开发用）。\n' +
            '- **方法解析**：`user.area()` 等价于 `User::area(&user)`，自动借用/解引用。\n' +
            '- **trait 方法**：`impl Trait for T` 为类型实现 trait，trait 方法也可点号调用。\n' +
            '- **泛型结构体**：`struct Point<T> { x: T, y: T }`，不同类型生成不同单态化代码。\n' +
            '- **生命周期结构体**：`struct Parser<\'a> { input: &\'a str }` 存储引用需生命周期标注。\n' +
            '- **serde 派生**：`#[derive(Serialize, Deserialize)]` 让结构体支持 JSON/YAML 序列化，Web API 必备。',
          examples: [
            {
              title: '定义与使用结构体',
              code: `#[derive(Debug)]
struct User {
    name: String,
    age: u32,
}

fn main() {
    let user = User {
        name: String::from("小明"),
        age: 20,
    };
    println!("姓名: {}, 年龄: {}", user.name, user.age);
    println!("调试: {:?}", user);
}`,
              explanation:
                '`#[derive(Debug)]` 让结构体可打印。`{:?}` 输出 Debug 格式。' +
                '输出：姓名: 小明, 年龄: 20，然后调试格式的结构体。',
            },
            {
              title: 'impl 方法',
              code: `struct Rectangle {
    width: f64,
    height: f64,
}

impl Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }
    fn new(width: f64, height: f64) -> Rectangle {
        Rectangle { width, height }
    }
}

fn main() {
    let rect = Rectangle::new(3.0, 4.0);
    println!("面积: {}", rect.area());
}`,
              explanation:
                '`area(&self)` 是方法，通过 `rect.area()` 调用。`new()` 是关联函数（构造器），通过 `Rectangle::new()` 调用。' +
                '`{ width, height }` 是字段简写（变量名与字段名相同时）。输出：面积: 12',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建 Point 结构体实例 x=3, y=4，调用 distance 方法输出 "距离: 5"。',
              starter_code: `struct Point {
    x: f64,
    y: f64,
}

impl Point {
    fn distance(&self) -> f64 {
        (self.x * self.x + self.y * self.y).sqrt()
    }
}

fn main() {
    let p = Point { x: 3.0, y: ___ };
    println!("距离: {:.0}", p.distance());
}`,
              expected_output: '距离: 5',
              hints: [
                '3² + 4² = 25, √25 = 5',
                'y 的值是 4.0',
                '答案: 4.0',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全结构体字段访问，输出 "小明, 20岁"。',
              starter_code: `struct Person {
    name: String,
    age: u32,
}

fn main() {
    let p = Person {
        name: String::from("小明"),
        age: 20,
    };
    println!("{}, {}岁", p.___, p.age);
}`,
              expected_output: '小明, 20岁',
              hints: [
                '用 . 访问结构体字段',
                'name 字段用 p.name 访问',
                '答案: name',
              ],
            },
          ],
          realWorldScenario:
            '结构体是 Rust 建模真实世界实体的主要工具。在 Web 开发中，User、Order、Product 都是结构体。impl 块为它们添加业务方法，#[derive(Debug)] 方便日志调试。理解结构体是写 Rust 应用代码的基础。',
        },
        {
          id: 'rust-ch4-l2',
          title: '枚举与模式匹配',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '枚举（enum）定义一个类型，它可以是几个变体（variant）之一。Rust 的枚举远比 C 的枚举强大——' +
            '每个变体可以携带不同类型和数量的数据。`enum Message { Quit, Move { x: i32, y: i32 }, Write(String) }`——' +
            'Quit 无数据，Move 有命名字段，Write 携带 String。\n\n' +
            '`match` 表达式是处理枚举的标准方式，必须穷尽所有变体。编译器强制你处理每种情况，' +
            '这是 Rust 安全性的典型体现——不会遗漏一个分支。`if let` 是 match 的简化版，' +
            '只处理一个模式，其余忽略，适合只关心一种情况的场景。\n\n' +
            '枚举 + match 是 Rust 实现"代数数据类型"（ADT）的方式，类似于 Haskell/OCaml。' +
            '这让 Rust 在表达复杂业务逻辑时非常强大——比如网络消息类型、AST 节点类型、状态机状态等，都可以用枚举清晰建模。\n\n' +
            'Option 和 Result 是标准库中最重要的两个枚举，分别在后续课程中详细讲解。\n\n' +
            '## 语法说明\n\n' +
            '### 定义枚举\n\n' +
            '```rust\n' +
            '// 无数据变体\n' +
            'enum Direction { Up, Down, Left, Right }\n\n' +
            '// 携带数据（元组变体）\n' +
            'enum Shape {\n' +
            '    Circle(f64),\n' +
            '    Rectangle(f64, f64),\n' +
            '}\n\n' +
            '// 命名字段变体\n' +
            'enum Message {\n' +
            '    Quit,\n' +
            '    Move { x: i32, y: i32 },\n' +
            '    Write(String),\n' +
            '    ChangeColor(i32, i32, i32),\n' +
            '}\n' +
            '```\n\n' +
            '### match 处理枚举\n\n' +
            '```rust\n' +
            'match msg {\n' +
            '    Message::Quit => (),\n' +
            '    Message::Move { x, y } => move_to(x, y),\n' +
            '    Message::Write(text) => println!("{}", text),\n' +
            '    Message::ChangeColor(r, g, b) => set_color(r, g, b),\n' +
            '}\n' +
            '```\n\n' +
            '### if let 简化\n\n' +
            '```rust\n' +
            'if let Message::Write(text) = msg {\n' +
            '    println!("{}", text);\n' +
            '} // 只关心 Write，其余忽略\n' +
            '```\n\n' +
            '### 变体类型对比\n\n' +
            '| 变体形式 | 语法 | 示例 | 解构 |\n' +
            '|----------|------|------|------|\n' +
            '| 无数据 | `Name` | `Quit` | `Quit => ...` |\n' +
            '| 元组 | `Name(T1, T2)` | `Point(i32, i32)` | `Point(x, y) => ...` |\n' +
            '| 命名字段 | `Name { f: T }` | `Move { x, y }` | `Move { x, y } => ...` |\n\n' +
            '### 枚举 vs 结构体\n\n' +
            '| 特性 | enum | struct |\n' +
            '|------|------|--------|\n' +
            '| 语义 | 或（一个变体） | 与（所有字段） |\n' +
            '| 数据 | 不同变体可不同数据 | 固定字段集 |\n' +
            '| match | 穷尽检查 | 无 |\n' +
            '| 用途 | 状态/消息/ADT | 实体/记录 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：简单枚举与 match**\n\n' +
            '```rust\n' +
            'enum Direction { Up, Down, Left, Right }\n\n' +
            'fn main() {\n' +
            '    let dir = Direction::Up;\n' +
            '    match dir {\n' +
            '        Direction::Up => println!("向上"),\n' +
            '        Direction::Down => println!("向下"),\n' +
            '        Direction::Left => println!("向左"),\n' +
            '        Direction::Right => println!("向右"),\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '枚举变体用 `Direction::Up` 访问。match 穷尽所有变体，漏一个编译报错。\n\n' +
            '**示例 2：带数据的枚举与解构**\n\n' +
            '```rust\n' +
            'enum Shape {\n' +
            '    Circle(f64),\n' +
            '    Rectangle(f64, f64),\n' +
            '    Square(f64),\n' +
            '}\n\n' +
            'fn area(shape: Shape) -> f64 {\n' +
            '    match shape {\n' +
            '        Shape::Circle(r) => 3.14159 * r * r,\n' +
            '        Shape::Rectangle(w, h) => w * h,\n' +
            '        Shape::Square(s) => s * s,\n' +
            '    }\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    let c = Shape::Circle(2.0);\n' +
            '    let r = Shape::Rectangle(3.0, 4.0);\n' +
            '    println!("圆面积: {:.2}", area(c));\n' +
            '    println!("矩形面积: {}", area(r));\n' +
            '}\n' +
            '```\n\n' +
            '枚举变体携带数据。match 解构变体并绑定内部数据（r, w, h, s）。\n\n' +
            '**示例 3：命名字段变体与 if let**\n\n' +
            '```rust\n' +
            'enum Message {\n' +
            '    Quit,\n' +
            '    Move { x: i32, y: i32 },\n' +
            '    Write(String),\n' +
            '}\n\n' +
            'fn process(msg: Message) {\n' +
            '    match msg {\n' +
            '        Message::Quit => println!("退出"),\n' +
            '        Message::Move { x, y } => println!("移动到 ({}, {})", x, y),\n' +
            '        Message::Write(text) => println!("写入: {}", text),\n' +
            '    }\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    process(Message::Move { x: 10, y: 20 });\n' +
            '    // if let 只处理一种\n' +
            '    let m = Message::Write(String::from("hi"));\n' +
            '    if let Message::Write(t) = m {\n' +
            '        println!("捕获写入: {}", t);\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '命名字段变体 `Move { x, y }` 解构时也用大括号。if let 适合只关心一种变体的场景。\n\n' +
            '**示例 4：枚举实现方法**\n\n' +
            '```rust\n' +
            'enum Coin { Penny, Nickel, Dime, Quarter }\n\n' +
            'impl Coin {\n' +
            '    fn value(&self) -> u32 {\n' +
            '        match self {\n' +
            '            Coin::Penny => 1,\n' +
            '            Coin::Nickel => 5,\n' +
            '            Coin::Dime => 10,\n' +
            '            Coin::Quarter => 25,\n' +
            '        }\n' +
            '    }\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    let coins = [Coin::Penny, Coin::Quarter, Coin::Dime];\n' +
            '    let total: u32 = coins.iter().map(|c| c.value()).sum();\n' +
            '    println!("总面值: {} 分", total);\n' +
            '}\n' +
            '```\n\n' +
            '枚举也可 impl 方法。`match self` 在方法内处理所有变体，新增变体时编译器强制更新方法。\n\n' +
            '## 注意事项\n\n' +
            '1. **match 必须穷尽**：漏掉变体编译报错，这是 Rust 安全性保证。新增变体时所有 match 处会被标记需更新。\n' +
            '2. **变体需全限定**：外部引用 `Message::Write`，在 impl 块内或 use 后可省略 `Message::`。\n' +
            '3. **枚举是值**：`let m = Message::Quit;` m 是 Message 类型，大小为最大变体的大小（加 tag）。\n' +
            '4. **Option/Result 是枚举**：标准库的 `Option<T>` 和 `Result<T, E>` 就是枚举，可用 match/if let 处理。\n' +
            '5. **if let 失去穷尽性**：只处理一种变体，其余用 else 或忽略。适合简单场景，复杂逻辑用 match。\n' +
            '6. **变体可携带引用**：`enum\'a { Text(&\'a str) }`，需生命周期标注，较少使用。\n' +
            '7. **#[derive] 派生**：枚举可 `#[derive(Debug, Clone, PartialEq)]`，但变体携带不可派生字段（如 &mut）则不行。\n\n' +
            '## 实际应用\n\n' +
            '- **状态机**：订单状态 `enum OrderState { Pending, Paid, Shipped, Delivered, Cancelled }`，新增状态时编译器强制处理所有 match。\n' +
            '- **消息类型**：网络协议 `enum Msg { Connect(String), Send(Vec<u8>), Disconnect }`，类型安全的事件分发。\n' +
            '- **AST 节点**：编译器 `enum Expr { Num(f64), Var(String), BinOp(Op, Box<Expr>, Box<Expr>) }`，递归数据结构。\n' +
            '- **JSON 值**：`enum Json { Null, Bool(bool), Num(f64), Str(String), Array(Vec<Json>), Object(HashMap<String, Json>) }`，serde_json 核心。\n' +
            '- **错误类型**：`enum AppError { NotFound, PermissionDenied, Other(String) }`，分类错误便于处理。\n\n' +
            '## 扩展知识\n\n' +
            '- **代数数据类型（ADT）**：枚举是"和类型"（sum type），结构体是"积类型"（product type）。Rust 的枚举+结构体组合等价于 Haskell/OCaml 的 ADT。\n' +
            '- **Option 与 null**：Tony Hoare 称 null 为"十亿美元错误"。Rust 用 Option<T> 替代，类型系统强制处理 None。\n' +
            '- **Box 用于递归**：`enum List { Nil, Cons(i32, Box<List>) }` 链表需 Box 包装，否则大小无限。\n' +
            '- **枚举内存布局**：枚举大小 = 最大变体大小 + tag（标识变体）。`#[repr(u8)]` 等可控制 tag。\n' +
            '- **模式匹配优化**：编译器对 match 做跳转表优化，多分支 match 与 if-else 链同效甚至更优。\n' +
            '- **derive_more 库**：提供更多派生（Constructor、From、Into），简化枚举使用。',
          examples: [
            {
              title: '简单枚举与 match',
              code: `enum Direction {
    Up,
    Down,
    Left,
    Right,
}

fn main() {
    let dir = Direction::Up;
    match dir {
        Direction::Up => println!("向上"),
        Direction::Down => println!("向下"),
        Direction::Left => println!("向左"),
        Direction::Right => println!("向右"),
    }
}`,
              explanation:
                '枚举变体用 `Direction::Up` 访问。match 穷尽所有变体。输出：向上',
            },
            {
              title: '带数据的枚举',
              code: `enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
    Square(f64),
}

fn area(shape: Shape) -> f64 {
    match shape {
        Shape::Circle(r) => 3.14159 * r * r,
        Shape::Rectangle(w, h) => w * h,
        Shape::Square(s) => s * s,
    }
}

fn main() {
    let c = Shape::Circle(2.0);
    let r = Shape::Rectangle(3.0, 4.0);
    println!("圆面积: {:.2}", area(c));
    println!("矩形面积: {}", area(r));
}`,
              explanation:
                '枚举变体携带数据。match 解构变体并绑定内部数据。' +
                '输出：圆面积: 12.57，矩形面积: 12',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全 match 分支：Coin::Quarter 输出 "25分"。',
              starter_code: `enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value(coin: Coin) -> &str {
    match coin {
        Coin::Penny => "1分",
        Coin::Nickel => "5分",
        Coin::Dime => "10分",
        Coin::Quarter => ___,
    }
}

fn main() {
    println!("{}", value(Coin::Quarter));
}`,
              expected_output: '25分',
              hints: [
                'Quarter 对应 "25分"',
                '字符串用双引号包裹',
                '答案: "25分"',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全带数据枚举的 match 分支：Rectangle(w, h) 返回 w * h。输出 "面积: 12"。',
              starter_code: `enum Shape {
    Square(f64),
    Rectangle(f64, f64),
}

fn area(shape: Shape) -> f64 {
    match shape {
        Shape::Square(s) => s * s,
        Shape::Rectangle(w, h) => w ___ h,
    }
}

fn main() {
    println!("面积: {:.0}", area(Shape::Rectangle(3.0, 4.0)));
}`,
              expected_output: '面积: 12',
              hints: [
                '矩形面积 = 宽 × 高',
                '乘法用 * 运算符',
                '答案: *',
              ],
            },
          ],
          realWorldScenario:
            '枚举在真实项目中用于建模状态机：订单状态（Pending/Paid/Shipped/Delivered/Cancelled）、网络协议消息（Connect/Send/Receive/Disconnect）、解析器 token 类型。编译期穷尽检查确保你永远不会漏处理一个状态。',
        },
        {
          id: 'rust-ch4-l3',
          title: 'Option 枚举',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'Rust 没有 null。取而代之的是 `Option<T>` 枚举：`Some(T)` 表示有值，`None` 表示无值。' +
            '这比 null 安全得多——你必须在类型层面处理"可能没有值"的情况，不可能忘记检查 null。' +
            'Tony Hoare（null 的发明者）称 null 为"十亿美元错误"，Rust 从语言层面消除了它。\n\n' +
            '### Option 定义\n\n' +
            '```rust\n' +
            'enum Option<T> {\n' +
            '    Some(T),  // 有值\n' +
            '    None,     // 无值\n' +
            '}\n' +
            '```\n\n' +
            'Option 被广泛用于标准库：`Vec::get(i)` 返回 `Option<&T>`（越界返回 None）、' +
            '`HashMap::get(k)` 返回 `Option<&V>`、`str::find(p)` 返回 `Option<usize>`。' +
            '这些 API 设计让你不可能忘记处理"找不到"的情况。\n\n' +
            '## 语法说明\n\n' +
            '### 创建 Option\n\n' +
            '```rust\n' +
            'let some: Option<i32> = Some(5);\n' +
            'let none: Option<i32> = None;\n' +
            '```\n\n' +
            '### 常用方法\n\n' +
            '| 方法 | 行为 | None 时 | Some(x) 时 |\n' +
            '|------|------|---------|------------|\n' +
            '| `unwrap()` | 取值 | panic | x |\n' +
            '| `expect("msg")` | 取值带消息 | panic(msg) | x |\n' +
            '| `is_some()` | 是否有值 | false | true |\n' +
            '| `is_none()` | 是否无值 | true | false |\n' +
            '| `unwrap_or(d)` | 取值或默认 | d | x |\n' +
            '| `unwrap_or_else(f)` | 取值或计算默认 | f() | x |\n' +
            '| `unwrap_or_default()` | 取值或类型默认 | T::default() | x |\n' +
            '| `map(f)` | 映射值 | None | Some(f(x)) |\n' +
            '| `and_then(f)` | flat map | None | f(x)（Option） |\n' +
            '| `or(opt)` | 提供备选 | opt | Some(x) |\n' +
            '| `filter(p)` | 过滤 | None | Some(x) if p(x) else None |\n' +
            '| `take()` | 取出并清空 | None | Some(x)，原变 None |\n' +
            '| `as_ref()` | 转 `Option<&T>` | None | Some(&x) |\n\n' +
            '### 处理 Option 的方式\n\n' +
            '```rust\n' +
            '// 1. match（最明确）\n' +
            'match opt {\n' +
            '    Some(x) => 处理(x),\n' +
            '    None => 默认处理(),\n' +
            '}\n\n' +
            '// 2. if let（只关心一种）\n' +
            'if let Some(x) = opt { 处理(x); }\n\n' +
            '// 3. while let（循环取出）\n' +
            'while let Some(x) = iter.next() { 处理(x); }\n\n' +
            '// 4. unwrap_or（默认值）\n' +
            'let x = opt.unwrap_or(0);\n\n' +
            '// 5. map（链式转换）\n' +
            'let y = opt.map(|x| x * 2);\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：Some 与 None 的 match 处理**\n\n' +
            '```rust\n' +
            'fn divide(a: f64, b: f64) -> Option<f64> {\n' +
            '    if b == 0.0 { None } else { Some(a / b) }\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    let r1 = divide(10.0, 2.0);\n' +
            '    let r2 = divide(10.0, 0.0);\n' +
            '    match r1 {\n' +
            '        Some(v) => println!("结果: {}", v),\n' +
            '        None => println!("除零错误"),\n' +
            '    }\n' +
            '    match r2 {\n' +
            '        Some(v) => println!("结果: {}", v),\n' +
            '        None => println!("除零错误"),\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            'divide 返回 Option，调用者必须处理 None。match 是最明确的方式。\n\n' +
            '**示例 2：unwrap_or 与 map 链式操作**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let some_val = Some(5);\n' +
            '    let none_val: Option<i32> = None;\n\n' +
            '    println!("{}", some_val.unwrap_or(0));   // 5\n' +
            '    println!("{}", none_val.unwrap_or(0));   // 0\n\n' +
            '    let doubled = some_val.map(|x| x * 2);   // Some(10)\n' +
            '    println!("{:?}", doubled);\n\n' +
            '    // 链式：map -> unwrap_or\n' +
            '    let result = none_val.map(|x| x * 2).unwrap_or(-1);\n' +
            '    println!("{}", result); // -1\n' +
            '}\n' +
            '```\n\n' +
            '`unwrap_or(0)` 有值返回值，无值返回 0。`map(|x| x * 2)` 对 Some 中的值乘以 2，None 保持 None。\n\n' +
            '**示例 3：and_then 与 filter**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    // and_then：链式 Option 操作\n' +
            '    let n = Some(5);\n' +
            '    let sqrt = n.and_then(|x| if x >= 0 { Some((x as f64).sqrt()) } else { None });\n' +
            '    println!("{:?}", sqrt); // Some(2.236...)\n\n' +
            '    // filter：过滤\n' +
            '    let even = Some(4).filter(|x| x % 2 == 0);\n' +
            '    println!("{:?}", even); // Some(4)\n' +
            '    let odd = Some(3).filter(|x| x % 2 == 0);\n' +
            '    println!("{:?}", odd); // None\n' +
            '}\n' +
            '```\n\n' +
            '`and_then` 用于返回 Option 的链式操作（类似 flatMap）；`filter` 根据谓词保留或丢弃值。\n\n' +
            '**示例 4：标准库 API 返回 Option**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let v = vec![10, 20, 30];\n' +
            '    // Vec::get 返回 Option（越界安全）\n' +
            '    match v.get(1) {\n' +
            '        Some(x) => println!("v[1] = {}", x),\n' +
            '        None => println!("越界"),\n' +
            '    }\n' +
            '    // v[5] 会 panic，v.get(5) 返回 None\n' +
            '    println!("{:?}", v.get(5)); // None\n\n' +
            '    // HashMap 查找\n' +
            '    let mut map = std::collections::HashMap::new();\n' +
            '    map.insert("a", 1);\n' +
            '    if let Some(v) = map.get("a") {\n' +
            '        println!("a = {}", v);\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '标准库大量用 Option：`Vec::get`、`HashMap::get`、`str::find` 等都返回 Option，强制处理"无值"。\n\n' +
            '## 注意事项\n\n' +
            '1. **unwrap 在 None 时 panic**：生产代码慎用。用 `match`/`if let`/`unwrap_or` 显式处理。\n' +
            '2. **Option 无 null 引用错误**：类型系统强制处理 None，避免 NullPointerException/NoneType 错误。\n' +
            '3. **map vs and_then**：`map(f)` 中 f 返回普通值，自动包 Some；`and_then(f)` 中 f 返回 Option，不重复包。\n' +
            '4. **Option 占用内存**：`Option<&T>` 优化为零成本（None 用 null 指针表示），但 `Option<Box<T>>` 会增加 tag。\n' +
            '5. **不要用 unwrap 处理用户输入**：用户输入可能无效，应用 match/unwrap_or 优雅处理。\n' +
            '6. **? 不能用于 Option（旧版）**：Rust 1.22+ 起 `?` 可用于 Option，None 时提前返回。\n' +
            '7. **as_ref/as_mut**：想借用 Option 内部值而不消费，用 `opt.as_ref()` 得 `Option<&T>`。\n\n' +
            '## 实际应用\n\n' +
            '- **数据库查询**：`fn find_user(id: u32) -> Option<User>`，找不到返回 None，调用者必须处理。\n' +
            '- **缓存**：`cache.get(key)` 返回 `Option<&V>`，缓存未命中优雅处理。\n' +
            '- **配置解析**：`config.get("port")` 返回 `Option<&str>`，缺失时用默认值。\n' +
            '- **链式查找**：`user.friend.borrow().as_ref().map(|f| f.name)` 安全地深入嵌套结构。\n' +
            '- **命令行参数**：`args.get(1)` 返回 Option，处理参数缺失情况。\n\n' +
            '## 扩展知识\n\n' +
            '- **Option 零成本优化**：`Option<NonNull<T>>`/`Option<&T>`/`Option<Box<T>>` 利用 null 指针表示 None，无额外内存开销。\n' +
            '- **? 操作符**：Rust 1.22+ 起 `opt?` 等价于 match，None 时提前返回 None，简化链式调用。\n' +
            '- **try* 宏**：`try!(opt)` 是 ? 的前身，已 deprecated。`opt?` 更简洁。\n' +
            '- **Option 与迭代器**：`Option<T>` 实现 `IntoIterator`，`for x in opt` 等价于 if let。\n' +
            '- **Option::flatten**：`Some(Some(x)).flatten()` 得 `Some(x)`，处理嵌套 Option。\n' +
            '- **Option 与 Result 互转**：`opt.ok_or(err)` 转 Result；`res.ok()` 转 Option（丢弃错误）。',
          examples: [
            {
              title: 'Some 与 None',
              code: `fn divide(a: f64, b: f64) -> Option<f64> {
    if b == 0.0 {
        None
    } else {
        Some(a / b)
    }
}

fn main() {
    let r1 = divide(10.0, 2.0);
    let r2 = divide(10.0, 0.0);
    match r1 {
        Some(v) => println!("结果: {}", v),
        None => println!("除零错误"),
    }
    match r2 {
        Some(v) => println!("结果: {}", v),
        None => println!("除零错误"),
    }
}`,
              explanation:
                'divide 返回 Option，调用者必须处理 None。match 是最明确的方式。' +
                '输出：结果: 5，然后 除零错误',
            },
            {
              title: 'unwrap_or 与 map',
              code: `fn main() {
    let some_val = Some(5);
    let none_val: Option<i32> = None;

    println!("{}", some_val.unwrap_or(0));
    println!("{}", none_val.unwrap_or(0));

    let doubled = some_val.map(|x| x * 2);
    println!("{:?}", doubled);
}`,
              explanation:
                '`unwrap_or(0)` 有值返回值，无值返回 0。`map(|x| x * 2)` 对 Some 中的值乘以 2。' +
                '输出：5，0，然后 Some(10)',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '函数 find 返回 Option。用 unwrap_or 在未找到时返回 "未知"，找到时返回值。输出 "苹果"。',
              starter_code: `fn find(id: u32) -> Option<&'static str> {
    if id == 1 { Some("苹果") } else { None }
}

fn main() {
    let result = find(1).___("未知");
    println!("{}", result);
}`,
              expected_output: '苹果',
              hints: [
                'unwrap_or 方法在 None 时返回默认值',
                'unwrap_or("未知") 在未找到时返回 "未知"',
                '答案: unwrap_or',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 match 处理 Option：Some(42) 输出 "值: 42"，None 输出 "无值"。',
              starter_code: `fn main() {
    let val: Option<i32> = Some(42);
    match val {
        Some(n) => println!("值: {}", ___),
        None => println!("无值"),
    }
}`,
              expected_output: '值: 42',
              hints: [
                'Some(n) 绑定了内部的值到变量 n',
                '用 n 填充占位符',
                '答案: n',
              ],
            },
          ],
          realWorldScenario:
            '在数据库查询中，根据 ID 查用户可能找不到记录。返回 Option<User> 让调用者必须处理"用户不存在"的情况。这与 Java/Python 中返回 null 不同——你不可能忘记检查，因为编译器强制你处理 None 分支。',
        },
        {
          id: 'rust-ch4-l4',
          title: 'Result 与 ? 操作符',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`Result<T, E>` 是 Rust 处理**可恢复错误**的枚举：`Ok(T)` 表示成功，`Err(E)` 表示失败。' +
            '与 Option 不同，Result 携带错误信息。Result 被用于所有可能失败的操作：文件 I/O、网络请求、数据解析等。\n\n' +
            '### Result 定义\n\n' +
            '```rust\n' +
            'enum Result<T, E> {\n' +
            '    Ok(T),   // 成功，携带值\n' +
            '    Err(E),  // 失败，携带错误\n' +
            '}\n' +
            '```\n\n' +
            '`?` 操作符是处理 Result 的语法糖。`let v = expr?;` 等价于：' +
            '如果 expr 是 Ok(v)，取出值赋给 v；如果是 Err(e)，立即返回 Err(e) 给调用者。' +
            '这让错误传播极其简洁——无需手写 match 分支，一行 `?` 就搞定。\n\n' +
            '### Rust 错误处理哲学\n\n' +
            '- **panic 用于不可恢复的错误**：程序 bug、不变量违反、数组越界等。`panic!` 终止线程/程序。\n' +
            '- **Result 用于可恢复的错误**：用户输入错误、网络故障、文件不存在。调用者可决定如何处理。\n' +
            '这与 Java/Python 的异常不同——Rust 没有隐式异常传播，所有错误路径在类型签名中可见。\n\n' +
            '`unwrap()` 和 `expect()` 在 Result 上也可用——Ok 时取值，Err 时 panic。' +
            '在快速原型中可以用，但生产代码应该用 `?` 或 match 显式处理错误。\n\n' +
            '## 语法说明\n\n' +
            '### 创建 Result\n\n' +
            '```rust\n' +
            'let ok: Result<i32, String> = Ok(42);\n' +
            'let err: Result<i32, String> = Err("失败".to_string());\n' +
            '```\n\n' +
            '### ? 操作符\n\n' +
            '```rust\n' +
            'fn read_file(path: &str) -> Result<String, io::Error> {\n' +
            '    let content = std::fs::read_to_string(path)?; // Err 时提前返回\n' +
            '    Ok(content)\n' +
            '}\n' +
            '// 等价于：\n' +
            'let content = match std::fs::read_to_string(path) {\n' +
            '    Ok(c) => c,\n' +
            '    Err(e) => return Err(e),\n' +
            '};\n' +
            '```\n\n' +
            '### 常用方法\n\n' +
            '| 方法 | 行为 | Err 时 | Ok 时 |\n' +
            '|------|------|--------|-------|\n' +
            '| `unwrap()` | 取值 | panic | x |\n' +
            '| `expect("msg")` | 取值带消息 | panic(msg) | x |\n' +
            '| `is_ok()` / `is_err()` | 检查 | - | - |\n' +
            '| `unwrap_or(d)` | 取值或默认 | d | x |\n' +
            '| `unwrap_or_else(f)` | 取值或计算默认 | f(e) | x |\n' +
            '| `map(f)` | 映射 Ok 值 | Err(e) | Ok(f(x)) |\n' +
            '| `map_err(f)` | 映射 Err | Err(f(e)) | Ok(x) |\n' +
            '| `and_then(f)` | flat map | Err(e) | f(x)（Result） |\n' +
            '| `or(res)` | 提供备选 | res | Ok(x) |\n' +
            '| `ok()` | 转 Option | None | Some(x) |\n' +
            '| `?` | 提前返回 | return Err(e) | x |\n\n' +
            '### panic vs Result\n\n' +
            '| 场景 | 选择 | 原因 |\n' +
            '|------|------|------|\n' +
            '| 数组越界 | panic | 程序 bug，不可恢复 |\n' +
            '| 除零 | panic | 数学错误，应事先检查 |\n' +
            '| 文件不存在 | Result | 用户可重试或换路径 |\n' +
            '| 网络失败 | Result | 可重试 |\n' +
            '| JSON 解析失败 | Result | 可提示用户 |\n' +
            '| 不变量违反 | panic | 程序 bug |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：Result 基础与 match**\n\n' +
            '```rust\n' +
            'fn parse_num(s: &str) -> Result<i32, String> {\n' +
            '    match s.parse::<i32>() {\n' +
            '        Ok(n) => Ok(n),\n' +
            '        Err(_) => Err(format!("无法解析: {}", s)),\n' +
            '    }\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    match parse_num("42") {\n' +
            '        Ok(n) => println!("成功: {}", n),\n' +
            '        Err(e) => println!("失败: {}", e),\n' +
            '    }\n' +
            '    match parse_num("abc") {\n' +
            '        Ok(n) => println!("成功: {}", n),\n' +
            '        Err(e) => println!("失败: {}", e),\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '函数返回 Result，调用者用 match 处理。错误信息通过 Err 携带，便于诊断。\n\n' +
            '**示例 2：? 操作符简化错误传播**\n\n' +
            '```rust\n' +
            'use std::fs::File;\n' +
            'use std::io::{self, Read};\n\n' +
            'fn read_username(path: &str) -> Result<String, io::Error> {\n' +
            '    let mut f = File::open(path)?;      // 打开失败则返回 Err\n' +
            '    let mut s = String::new();\n' +
            '    f.read_to_string(&mut s)?;          // 读取失败则返回 Err\n' +
            '    Ok(s)\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    match read_username("/etc/hostname") {\n' +
            '        Ok(name) => println!("用户名: {}", name),\n' +
            '        Err(e) => println!("错误: {}", e),\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '不用 ? 时每步都需 match，代码冗长。? 让错误传播像写无错误代码一样简洁。\n\n' +
            '**示例 3：map_err 转换错误类型**\n\n' +
            '```rust\n' +
            'fn parse_and_double(s: &str) -> Result<i32, String> {\n' +
            '    let n: i32 = s.parse().map_err(|_| "解析失败".to_string())?;\n' +
            '    Ok(n * 2)\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    match parse_and_double("21") {\n' +
            '        Ok(n) => println!("结果: {}", n),\n' +
            '        Err(e) => println!("错误: {}", e),\n' +
            '    }\n' +
            '    match parse_and_double("abc") {\n' +
            '        Ok(n) => println!("结果: {}", n),\n' +
            '        Err(e) => println!("错误: {}", e),\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '`?` 在 Ok 时取值，Err 时立即返回。`map_err` 转换错误类型（ParseIntError → String），使函数签名统一。\n\n' +
            '**示例 4：自定义错误类型与 thiserror**\n\n' +
            '```rust\n' +
            '#[derive(Debug)]\n' +
            'enum AppError {\n' +
            '    Io(std::io::Error),\n' +
            '    Parse(std::num::ParseIntError),\n' +
            '    NotFound(String),\n' +
            '}\n\n' +
            'impl From<std::io::Error> for AppError {\n' +
            '    fn from(e: std::io::Error) -> Self { AppError::Io(e) }\n' +
            '}\n' +
            'impl From<std::num::ParseIntError> for AppError {\n' +
            '    fn from(e: std::num::ParseIntError) -> Self { AppError::Parse(e) }\n' +
            '}\n\n' +
            'fn load_config(path: &str) -> Result<i32, AppError> {\n' +
            '    let s = std::fs::read_to_string(path)?; // io::Error 自动转 AppError\n' +
            '    let n: i32 = s.parse()?;                 // ParseIntError 自动转\n' +
            '    Ok(n)\n' +
            '}\n' +
            '```\n\n' +
            '实现 `From` trait 让 `?` 自动转换错误类型。实际项目用 thiserror/anyhow 库简化。\n\n' +
            '## 注意事项\n\n' +
            '1. **? 只能用于返回 Result/Option 的函数**：main 函数可返回 `Result<(), E>`（Rust 1.26+），便于顶层用 ?。\n' +
            '2. **unwrap 生产慎用**：Err 时 panic，崩溃体验差。用 match/?/unwrap_or 优雅处理。\n' +
            '3. **错误类型统一**：多个错误源（io::Error、parse 错误）需统一为自定义错误，用 From 转换或 anyhow 库。\n' +
            '4. **? 自动转换**：`?` 会调用 `From::from` 转换错误类型，需实现 From trait。\n' +
            '5. **panic 不可恢复**：panic 会展开栈（或 abort），不适合常规错误。`unwrap`/`expect`/数组越界触发 panic。\n' +
            '6. **Result vs Option**：Option 表示"有/无"；Result 表示"成功/失败带原因"。语义不同，选合适的。\n' +
            '7. **main 返回 Result**：`fn main() -> Result<(), Box<dyn Error>>` 让顶层 ? 可用，错误时非零退出。\n\n' +
            '## 实际应用\n\n' +
            '- **文件 I/O**：`File::open`/`read_to_string` 返回 `io::Result`，用 ? 传播，调用者决定重试或报错。\n' +
            '- **HTTP 客户端**：`reqwest::get(url).await?` 网络请求失败优雅传播。\n' +
            '- **配置加载**：多步解析（读文件→解析 JSON→验证字段），每步 ? 传播，任一失败即返回。\n' +
            '- **数据库操作**：`query()?` SQL 执行失败返回错误，事务可回滚。\n' +
            '- **CLI 工具**：`fn main() -> Result<()>` 用 anyhow 统一错误，错误时打印友好的退出信息。\n\n' +
            '## 扩展知识\n\n' +
            '- **anyhow 库**：提供 `anyhow::Result<T>` 等价 `Result<T, anyhow::Error>`，自动装箱任意错误，应用层首选。\n' +
            '- **thiserror 库**：用 `#[derive(Error)]` 简化自定义错误类型定义，库代码首选。\n' +
            '- **Box<dyn Error>**：简单场景用 `Box<dyn std::error::Error>` 作为通用错误类型，无需自定义 enum。\n' +
            '- **? 与 async**：async 函数中 `?` 同样有效，配合 `tokio`/`async-std` 处理异步错误。\n' +
            '- **panic 策略**：`panic = "unwind"`（默认，可捕获）vs `panic = "abort"`（直接终止，二进制更小）。\n' +
            '- **catch_unwind**：`std::panic::catch_unwind` 可捕获 panic 转 Result，用于 FFI 边界（C 代码中 panic 未定义行为）。\n' +
            '- **Option 与 ? 互操作**：`opt?` 用于 Option；`res.ok()?` 把 Result 转 Option 再用 ?。',
          examples: [
            {
              title: 'Result 基础',
              code: `fn parse_num(s: &str) -> Result<i32, String> {
    match s.parse::<i32>() {
        Ok(n) => Ok(n),
        Err(_) => Err(format!("无法解析: {}", s)),
    }
}

fn main() {
    match parse_num("42") {
        Ok(n) => println!("成功: {}", n),
        Err(e) => println!("失败: {}", e),
    }
    match parse_num("abc") {
        Ok(n) => println!("成功: {}", n),
        Err(e) => println!("失败: {}", e),
    }
}`,
              explanation:
                '函数返回 Result，调用者用 match 处理。输出：成功: 42，然后 失败: 无法解析: abc',
            },
            {
              title: '? 操作符',
              code: `fn parse_and_double(s: &str) -> Result<i32, String> {
    let n: i32 = s.parse().map_err(|_| "解析失败".to_string())?;
    Ok(n * 2)
}

fn main() {
    match parse_and_double("21") {
        Ok(n) => println!("结果: {}", n),
        Err(e) => println!("错误: {}", e),
    }
}`,
              explanation:
                '`?` 在 Ok 时取值，Err 时立即返回。`map_err` 转换错误类型。' +
                '输出：结果: 42',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全 ? 操作符，使 parse_and_add 函数在解析失败时自动返回错误。输出 "结果: 30"。',
              starter_code: `fn parse_and_add(s1: &str, s2: &str) -> Result<i32, String> {
    let a: i32 = s1.parse().map_err(|_| "错误".to_string())___;
    let b: i32 = s2.parse().map_err(|_| "错误".to_string())?;
    Ok(a + b)
}

fn main() {
    match parse_and_add("10", "20") {
        Ok(n) => println!("结果: {}", n),
        Err(e) => println!("错误: {}", e),
    }
}`,
              expected_output: '结果: 30',
              hints: [
                '? 操作符用于错误传播',
                '在 map_err(...) 后面加 ?',
                '答案: ?',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 match 处理 Result：Ok 输出 "成功: 42"，Err 输出 "失败"。',
              starter_code: `fn main() {
    let result: Result<i32, &str> = Ok(42);
    match result {
        Ok(n) => println!("成功: {}", ___),
        Err(_) => println!("失败"),
    }
}`,
              expected_output: '成功: 42',
              hints: [
                'Ok(n) 绑定了值到变量 n',
                '用 n 填充占位符',
                '答案: n',
              ],
            },
          ],
          realWorldScenario:
            '在文件 I/O 和配置解析中，每个操作都可能失败。? 操作符让错误传播像写没有错误处理的代码一样简洁，同时保持类型安全。这在构建配置加载器、HTTP 客户端等需要多步操作且每步可能失败的功能时尤为重要。',
        },
      ],
    },

    // ================================================================
    // 第 5 章：函数与模块
    // ================================================================
    {
      id: 'rust-ch5',
      title: '函数与模块',
      order: 4,
      lessons: [
        {
          id: 'rust-ch5-l1',
          title: '函数定义与表达式',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '`fn` 关键字定义函数。参数必须标注类型，返回类型用 `->` 指定。' +
            'Rust 是**表达式语言**——大多数代码块都是表达式，返回最后一个表达式的值（不带分号）。' +
            '语句（statement）用分号结尾，不返回值；表达式（expression）不带分号，返回值。\n\n' +
            '函数体最后一行如果不带分号，就是返回值。也可以用 `return` 提前返回，但惯用方式是省略 return。' +
            '例如 `fn add(a: i32, b: i32) -> i32 { a + b }`——`a + b` 不带分号，是返回值。' +
            '如果写成 `a + b;`（带分号），就变成语句，返回 `()`，与 `-> i32` 不匹配，编译报错。\n\n' +
            'Rust 函数支持递归。经典递归题如斐波那契数列、阶乘等都可以直接实现。' +
            '但注意递归深度过大会栈溢出——Rust 没有尾递归优化。\n\n' +
            '函数可以返回元组实现"多返回值"：`fn divmod(a: i32, b: i32) -> (i32, i32) { (a/b, a%b) }`。' +
            '调用者用元组解构接收：`let (q, r) = divmod(17, 5);`。\n\n' +
            '## 语法说明\n\n' +
            '### 函数定义\n\n' +
            '```rust\n' +
            'fn 函数名(参数: 类型, ...) -> 返回类型 {\n' +
            '    函数体\n' +
            '    最后表达式 // 不带分号，作为返回值\n' +
            '}\n' +
            '```\n\n' +
            '### 表达式 vs 语句\n\n' +
            '```rust\n' +
            'fn f() -> i32 {\n' +
            '    let x = 5;   // 语句（let），返回 ()\n' +
            '    x + 1        // 表达式（无分号），返回 6\n' +
            '} // 返回 6\n\n' +
            'fn g() -> () {\n' +
            '    let x = 5;\n' +
            '    x + 1;       // 带分号变语句，返回 ()\n' +
            '} // 返回 ()\n' +
            '```\n\n' +
            '### 提前返回\n\n' +
            '```rust\n' +
            'fn abs(x: i32) -> i32 {\n' +
            '    if x < 0 {\n' +
            '        return -x; // return 提前返回\n' +
            '    }\n' +
            '    x // 否则最后表达式返回\n' +
            '}\n' +
            '```\n\n' +
            '### never 类型与发散函数\n\n' +
            '```rust\n' +
            'fn forever() -> ! {  // ! 表示永不返回\n' +
            '    loop {}\n' +
            '}\n' +
            'fn die() -> ! { panic!("崩溃"); }\n' +
            '```\n\n' +
            '### 语句 vs 表达式对照\n\n' +
            '| 代码 | 类型 | 返回值 |\n' +
            '|------|------|--------|\n' +
            '| `let x = 5;` | 语句 | () |\n' +
            '| `x + 1` | 表达式 | 计算结果 |\n' +
            '| `x + 1;` | 语句（分号） | () |\n' +
            '| `{ let y = 1; y + 1 }` | 块表达式 | 2 |\n' +
            '| `if c { 1 } else { 2 }` | 表达式 | 1 或 2 |\n' +
            '| `loop { break 42; }` | 表达式 | 42 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：函数与返回值**\n\n' +
            '```rust\n' +
            'fn add(a: i32, b: i32) -> i32 {\n' +
            '    a + b  // 不带分号，是返回值\n' +
            '}\n\n' +
            'fn greet(name: &str) -> String {\n' +
            '    format!("你好, {}", name)\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    println!("{}", add(3, 4));\n' +
            '    println!("{}", greet("小明"));\n' +
            '}\n' +
            '```\n\n' +
            '`a + b` 不带分号是返回值。`format!` 宏类似 println! 但返回字符串（不打印）。\n\n' +
            '**示例 2：递归斐波那契与尾递归限制**\n\n' +
            '```rust\n' +
            'fn fib(n: u32) -> u32 {\n' +
            '    if n < 2 { n } else { fib(n - 1) + fib(n - 2) }\n' +
            '}\n\n' +
            '// 尾递归形式（Rust 不优化，仍会栈溢出）\n' +
            'fn fib_tail(n: u32, a: u32, b: u32) -> u32 {\n' +
            '    if n == 0 { a } else { fib_tail(n - 1, b, a + b) }\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    for i in 0..10 {\n' +
            '        print!("{} ", fib(i));\n' +
            '    }\n' +
            '    println!();\n' +
            '    println!("{}", fib_tail(10, 0, 1));\n' +
            '}\n' +
            '```\n\n' +
            '递归实现斐波那契。Rust 不保证尾递归优化，深度大时（如 fib(10000)）会栈溢出，应改用迭代。\n\n' +
            '**示例 3：多返回值（元组）与解构**\n\n' +
            '```rust\n' +
            'fn divmod(a: i32, b: i32) -> (i32, i32) {\n' +
            '    (a / b, a % b)\n' +
            '}\n\n' +
            'fn swap(p: (i32, i32)) -> (i32, i32) {\n' +
            '    let (a, b) = p;\n' +
            '    (b, a)\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    let (quotient, remainder) = divmod(17, 5);\n' +
            '    println!("商: {}, 余: {}", quotient, remainder);\n' +
            '    let swapped = swap((1, 2));\n' +
            '    println!("{:?}", swapped);\n' +
            '}\n' +
            '```\n\n' +
            '函数返回元组，调用者解构接收。元组解构 `let (a, b) = t;` 简洁。\n\n' +
            '**示例 4：发散函数与 main 返回 Result**\n\n' +
            '```rust\n' +
            'use std::error::Error;\n\n' +
            'fn die(msg: &str) -> ! {\n' +
            '    panic!("致命错误: {}", msg);\n' +
            '}\n\n' +
            'fn load(path: &str) -> Result<String, Box<dyn Error>> {\n' +
            '    let s = std::fs::read_to_string(path)?;\n' +
            '    if s.is_empty() { die("空文件"); }\n' +
            '    Ok(s)\n' +
            '}\n\n' +
            'fn main() -> Result<(), Box<dyn Error>> {\n' +
            '    let _ = load("/etc/hostname")?;\n' +
            '    Ok(())\n' +
            '}\n' +
            '```\n\n' +
            '`!` 类型（never）表示函数永不返回（panic/loop）。`main` 可返回 Result 便于顶层用 ?。\n\n' +
            '## 注意事项\n\n' +
            '1. **分号决定表达式/语句**：`x + 1` 返回值，`x + 1;` 返回 ()。最常见编译错误是误加分号导致类型不匹配。\n' +
            '2. **return 惯用法**：Rust 惯用最后表达式返回，`return` 仅用于提前返回。函数末尾不用 return。\n' +
            '3. **无尾递归优化**：深递归会栈溢出，改用迭代或显式栈。函数式语言有 TCO，Rust 没有。\n' +
            '4. **参数必须标类型**：`fn f(x)` 报错，必须 `fn f(x: i32)`。闭包可省略类型推断。\n' +
            '5. **! 类型兼容任意类型**：`fn die() -> !` 可用在期望任何类型的地方，因为它永不返回。\n' +
            '6. **函数指针**：`fn` 类型可作为值传递：`let f: fn(i32) -> i32 = abs;`，用于回调。\n' +
            '7. **main 可返回 Result**：`fn main() -> Result<(), E>` 让顶层 ? 可用，错误时非零退出码。\n\n' +
            '## 实际应用\n\n' +
            '- **API 端点**：每个 HTTP 端点是函数，接收请求参数，返回响应或错误。\n' +
            '- **递归树遍历**：文件系统遍历、JSON/AST 解析用递归自然表达树形结构。\n' +
            '- **多返回值**：`fn parse(s) -> (value, rest)` 返回解析结果和剩余输入，解析器组合子常用。\n' +
            '- **main 返回 Result**：CLI 工具顶层用 ? 简化错误处理，错误时友好退出。\n' +
            '- **回调函数**：事件处理、排序比较函数用 `fn` 指针或闭包传递。\n\n' +
            '## 扩展知识\n\n' +
            '- **发散函数 !**：`!` 是 never 类型，`panic!`/`loop {}`/`process::exit()` 返回 !。可赋给任意类型变量。\n' +
            '- **函数指针 fn**：`fn(i32) -> i32` 是函数指针类型（非闭包），大小固定，可作为 const generic。\n' +
            '- **高阶函数**：函数接受函数参数或返回函数，如 `fn apply(f: impl Fn(i32) -> i32, x: i32) -> i32`。\n' +
            '- **方法 vs 函数**：方法在 impl 块内，第一参数 self；关联函数（`T::new()`）类似静态方法。\n' +
            '- **const fn**：`const fn` 可在编译期执行，用于常量初始化（如 `const ARRAY: [i32; 3] = make_arr();`）。\n' +
            '- **宏 vs 函数**：宏（`println!`/`vec!`）在编译期展开，可变参数；函数运行时调用，类型固定。',
          examples: [
            {
              title: '函数与返回值',
              code: `fn add(a: i32, b: i32) -> i32 {
    a + b  // 不带分号，是返回值
}

fn greet(name: &str) -> String {
    format!("你好, {}", name)
}

fn main() {
    println!("{}", add(3, 4));
    println!("{}", greet("小明"));
}`,
              explanation:
                '`a + b` 不带分号是返回值。`format!` 宏类似 println! 但返回字符串。' +
                '输出：7，然后 你好, 小明',
            },
            {
              title: '递归：斐波那契',
              code: `fn fib(n: u32) -> u32 {
    if n < 2 {
        n
    } else {
        fib(n - 1) + fib(n - 2)
    }
}

fn main() {
    for i in 0..10 {
        print!("{} ", fib(i));
    }
    println!();
}`,
              explanation:
                '递归实现斐波那契。fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2)。' +
                '输出：0 1 1 2 3 5 8 13 21 34',
            },
            {
              title: '多返回值（元组）',
              code: `fn divmod(a: i32, b: i32) -> (i32, i32) {
    (a / b, a % b)
}

fn main() {
    let (quotient, remainder) = divmod(17, 5);
    println!("商: {}, 余: {}", quotient, remainder);
}`,
              explanation:
                '函数返回元组，调用者解构接收。输出：商: 3, 余: 2',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全递归斐波那契函数：fib(n) = fib(n-1) + fib(n-2)。fib(10) 输出 55。',
              starter_code: `fn fib(n: u32) -> u32 {
    if n < 2 {
        n
    } else {
        fib(n - 1) ___ fib(n - 2)
    }
}

fn main() {
    println!("{}", fib(10));
}`,
              expected_output: '55',
              hints: [
                '斐波那契数列递推关系是加法',
                'fib(n) = fib(n-1) + fib(n-2)',
                '答案: +',
              ],
            },
            {
              type: 'output-match',
              prompt: '函数 square 返回 n * n，不带分号作为返回值。输出 "平方: 25"。',
              starter_code: `fn square(n: i32) -> i32 {
    n ___ n
}

fn main() {
    println!("平方: {}", square(5));
}`,
              expected_output: '平方: 25',
              hints: [
                'n 的平方是 n * n',
                '乘法用 * 运算符',
                '答案: *',
              ],
            },
          ],
          realWorldScenario:
            '函数是代码复用的基础单元。在 API 开发中，每个端点处理函数接收参数、执行业务逻辑、返回结果。Rust 的表达式返回值让函数体简洁优雅。递归在处理树形结构（如文件系统遍历、JSON 解析）时非常实用。',
        },
        {
          id: 'rust-ch5-l2',
          title: '闭包',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '闭包（closure）是匿名函数，用 `|参数| { body }` 语法。闭包可以捕获外部环境的变量——' +
            '这是它与普通函数最大的区别。`let add = |a, b| a + b;` 定义一个闭包，`add(3, 4)` 调用它。\n\n' +
            '闭包捕获变量的三种方式：不可变借用（`&T`）、可变借用（`&mut T`）、获取所有权（`move`）。' +
            '编译器自动推断捕获方式。需要强制获取所有权时用 `move` 关键字：`move || { ... }`，' +
            '常用于多线程（把数据移动到新线程）。\n\n' +
            '闭包类型由三个 trait 表示：`Fn`（不可变借用捕获）、`FnMut`（可变借用捕获）、' +
            '`FnOnce`（获取所有权）。函数参数接受闭包时用这些 trait 作为泛型约束。\n\n' +
            '闭包在 Rust 中无处不在——迭代器方法（map、filter、for_each）的参数都是闭包。' +
            '闭包让函数式编程风格在 Rust 中自然流畅。\n\n' +
            '## 语法说明\n\n' +
            '### 闭包定义\n\n' +
            '```rust\n' +
            'let f = |参数| 表达式;              // 单表达式\n' +
            'let g = |参数| { 多行; 表达式 };    // 多行\n' +
            'let h = move |参数| { ... };        // 强制 move 捕获\n' +
            '```\n\n' +
            '### 捕获方式与 trait\n\n' +
            '| Trait | 捕获方式 | 可调用次数 | 典型场景 |\n' +
            '|-------|----------|------------|----------|\n' +
            '| `FnOnce` | 获取所有权（move） | 一次 | 消费资源、转移数据 |\n' +
            '| `FnMut` | 可变借用 | 多次（需 &mut） | 修改捕获变量 |\n' +
            '| `Fn` | 不可变借用 | 多次（&self） | 只读访问 |\n\n' +
            '层级关系：`Fn: FnMut: FnOnce`（实现 Fn 必也实现 FnMut 和 FnOnce）。\n\n' +
            '### 函数接受闭包\n\n' +
            '```rust\n' +
            '// 泛型闭包参数（推荐，零成本单态化）\n' +
            'fn apply(f: impl Fn(i32) -> i32, x: i32) -> i32 { f(x) }\n' +
            '// dyn 闭包（动态分发，有开销）\n' +
            'fn apply_dyn(f: &dyn Fn(i32) -> i32, x: i32) -> i32 { f(x) }\n' +
            '// 返回闭包\n' +
            'fn make_adder(n: i32) -> impl Fn(i32) -> i32 {\n' +
            '    move |x| x + n\n' +
            '}\n' +
            '```\n\n' +
            '### move 闭包\n\n' +
            '```rust\n' +
            'let s = String::from("hi");\n' +
            'let f = move || println!("{}", s); // s 所有权移入闭包\n' +
            '// 此后 s 不可用（已被 move）\n' +
            'f(); // 闭包内可用 s\n' +
            '```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：基本闭包与类型推断**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let add = |a, b| a + b;\n' +
            '    let greet = |name: &str| format!("你好, {}", name);\n' +
            '    println!("{}", add(3, 4));\n' +
            '    println!("{}", greet("小明"));\n' +
            '}\n' +
            '```\n\n' +
            '闭包用 `|参数| 表达式` 定义。类型推断通常不需要标注参数类型（首个调用确定类型）。\n\n' +
            '**示例 2：闭包捕获环境变量**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let multiplier = 3;\n' +
            '    let multiply = |x| x * multiplier;  // 捕获 multiplier（&T）\n' +
            '    println!("{}", multiply(5));\n' +
            '    println!("{}", multiply(10));\n\n' +
            '    let mut count = 0;\n' +
            '    let mut inc = || { count += 1; };  // 捕获 &mut count\n' +
            '    inc(); inc(); inc();\n' +
            '    println!("count = {}", count); // 3\n' +
            '}\n' +
            '```\n\n' +
            '闭包自动按需捕获：`multiply` 借用 multiplier；`inc` 可变借用 count。编译器推断最宽松的捕获方式。\n\n' +
            '**示例 3：move 闭包与多线程**\n\n' +
            '```rust\n' +
            'use std::thread;\n\n' +
            'fn main() {\n' +
            '    let data = vec![1, 2, 3, 4, 5];\n' +
            '    // move 闭包把 data 所有权移到新线程\n' +
            '    let handle = thread::spawn(move || {\n' +
            '        let sum: i32 = data.iter().sum();\n' +
            '        println!("子线程求和: {}", sum);\n' +
            '    });\n' +
            '    // data 已 move，此处不可用\n' +
            '    handle.join().unwrap();\n' +
            '    println!("主线程结束");\n' +
            '}\n' +
            '```\n\n' +
            '多线程必须 move 闭包，因为子线程的生命周期可能超过主线程的 data。move 保证闭包拥有数据所有权。\n\n' +
            '**示例 4：闭包作为函数参数与返回值**\n\n' +
            '```rust\n' +
            'fn apply_twice(f: impl Fn(i32) -> i32, x: i32) -> i32 {\n' +
            '    f(f(x))\n' +
            '}\n\n' +
            'fn make_adder(n: i32) -> impl Fn(i32) -> i32 {\n' +
            '    move |x| x + n  // 必须 move，否则 n 离开作用域后闭包悬垂\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    let add5 = make_adder(5);\n' +
            '    println!("{}", add5(10));      // 15\n' +
            '    println!("{}", apply_twice(add5, 3)); // add5(add5(3)) = 13\n' +
            '}\n' +
            '```\n\n' +
            '`impl Fn(i32) -> i32` 是返回闭包的标准方式。返回闭包若捕获局部变量，必须 move。\n\n' +
            '## 注意事项\n\n' +
            '1. **类型推断首次绑定**：`let f = |x| x; f(1); f("a");` 报错，首个调用确定参数类型。\n' +
            '2. **move 与借用**：`move` 强制所有权转移，即使本可借用。多线程必需，单线程按需。\n' +
            '3. **Fn/FnMut/FnOnce 选择**：API 参数优先 `Fn`（最通用）；需修改捕获值用 `FnMut`；消费捕获值用 `FnOnce`。\n' +
            '4. **闭包大小**：每个闭包是唯一匿名类型，大小取决于捕获的变量。`dyn Fn` 用堆分配（Box）。\n' +
            '5. **返回闭包需 move**：`fn make() -> impl Fn() { let x = 1; move || println!("{}", x) }`，否则 x 离开作用域悬垂。\n' +
            '6. **闭包 vs 函数指针**：闭包可捕获环境，`fn` 指针不能。需存储函数且不捕获时用 `fn`。\n' +
            '7. **`impl Fn` vs `Box<dyn Fn>`**：`impl Fn` 静态分发零成本；`Box<dyn Fn>` 动态分发有开销但可异构存储。\n\n' +
            '## 实际应用\n\n' +
            '- **迭代器方法**：`vec.iter().map(|x| x * 2).filter(|x| *x > 5)` 链式处理，闭包是核心。\n' +
            '- **事件回调**：GUI/Web 框架用闭包定义点击/路由处理：`button.on_click(move || { ... })`。\n' +
            '- **多线程**：`thread::spawn(move || { ... })` 把数据移到新线程，编译期保证安全。\n' +
            '- **排序**：`vec.sort_by(|a, b| a.cmp(b))` 用闭包定义比较逻辑。\n' +
            '- **懒加载**：`lazy_static!` / `once_cell` 用闭包延迟初始化。\n\n' +
            '## 扩展知识\n\n' +
            '- **闭包实现原理**：闭包是匿名结构体，捕获的变量是字段。`Fn`/`FnMut`/`FnOnce` 是 trait，`call`/`call_mut`/`call_once` 方法。\n' +
            '- **零成本抽象**：`impl Fn` 单态化，每个具体闭包生成专用代码，无虚函数调用开销。\n' +
            '- **Box<dyn Fn>**：异构闭包集合（如 `Vec<Box<dyn Fn()>>`）需动态分发，有运行时开销。\n' +
            '- **FnBox**：旧 Rust 用 Box<FnOnce> 调用 FnOnce，现已直接支持 `Box<dyn FnOnce>`。\n' +
            '- **捕获模式控制**：Rust 2021 支持细粒度捕获 `let f = || use(&x, &mut y, z);`，分别借用/move。\n' +
            '- **async 闭包**：async block 本质是返回 Future 的闭包，`async move {}` 是常见模式。',
          examples: [
            {
              title: '基本闭包',
              code: `fn main() {
    let add = |a, b| a + b;
    let greet = |name: &str| format!("你好, {}", name);
    println!("{}", add(3, 4));
    println!("{}", greet("小明"));
}`,
              explanation:
                '闭包用 `|参数| 表达式` 定义。类型推断通常不需要标注参数类型。' +
                '输出：7，然后 你好, 小明',
            },
            {
              title: '闭包捕获环境',
              code: `fn main() {
    let multiplier = 3;
    let multiply = |x| x * multiplier;  // 捕获 multiplier
    println!("{}", multiply(5));
    println!("{}", multiply(10));
}`,
              explanation:
                '闭包捕获外部变量 multiplier。每次调用 multiply 时，闭包都能访问它。' +
                '输出：15，然后 30',
            },
            {
              title: 'move 闭包',
              code: `fn main() {
    let name = String::from("小明");
    let greet = move || {
        println!("你好, {}", name);
    };
    greet();
    // name 已被 move 进闭包，这里不能再使用
    println!("闭包已执行");
}`,
              explanation:
                '`move` 强制闭包获取捕获变量的所有权。执行闭包后 name 的所有权在闭包内。' +
                '输出：你好, 小明，然后 闭包已执行',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '定义闭包 double，接收 x 返回 x * 2。调用 double(21) 输出 42。',
              starter_code: `fn main() {
    let double = |x| x ___ 2;
    println!("{}", double(21));
}`,
              expected_output: '42',
              hints: [
                '乘法用 * 运算符',
                'x * 2 把 x 翻倍',
                '答案: *',
              ],
            },
            {
              type: 'output-match',
              prompt: '闭包捕获外部变量 prefix，输出 "结果: 100"。',
              starter_code: `fn main() {
    let prefix = "结果: ";
    let show = |n| println!("{}{}", prefix, ___);
    show(100);
}`,
              expected_output: '结果: 100',
              hints: [
                '闭包参数 n 是传入的数字',
                '用 n 作为第二个参数',
                '答案: n',
              ],
            },
          ],
          realWorldScenario:
            '闭包在事件处理和回调中极为常用。Web 框架用闭包定义路由处理器，GUI 框架用闭包定义按钮点击回调。闭包捕获环境变量让回调函数可以访问上下文数据，无需额外传参。多线程中 move 闭包把数据安全地转移到新线程。',
        },
        {
          id: 'rust-ch5-l3',
          title: '迭代器',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '迭代器（Iterator）是 Rust 中处理集合的核心抽象。`Iterator` trait 只要求实现 `next()` 方法——' +
            '返回 `Option<Item>`，有值返回 `Some(item)`，耗尽返回 `None`。迭代器是**惰性的**（lazy）——' +
            '不消费就不会执行，这让链式调用零成本。\n\n' +
            '常用适配器方法：`map(f)` 对每个元素应用闭包、`filter(f)` 过滤元素、' +
            '`collect()` 收集为集合、`sum()` 求和、`count()` 计数、' +
            '`take(n)` 取前 n 个、`skip(n)` 跳过前 n 个、`enumerate()` 带索引遍历。\n\n' +
            '`for` 循环底层就是迭代器——`for x in &vec` 等价于 `vec.iter().for_each(|x| ...)`。' +
            '`iter()` 借用元素（`&T`），`into_iter()` 获取所有权（`T`），`iter_mut()` 可变借用（`&mut T`）。\n\n' +
            '迭代器是零成本抽象——编译后与手写循环一样高效，甚至可能更快（编译器优化更好）。' +
            '推荐优先使用迭代器而非显式循环，代码更简洁、更安全、同样高效。\n\n' +
            '## 语法说明\n\n' +
            '### Iterator trait\n\n' +
            '```rust\n' +
            'pub trait Iterator {\n' +
            '    type Item;\n' +
            '    fn next(&mut self) -> Option<Self::Item>;\n' +
            '    // ... 其他方法有默认实现\n' +
            '}\n' +
            '```\n\n' +
            '### 三种迭代方式\n\n' +
            '| 方法 | 所有权 | 元素类型 | 原集合 |\n' +
            '|------|--------|----------|--------|\n' +
            '| `iter()` | 借用 | `&T` | 保留 |\n' +
            '| `iter_mut()` | 可变借用 | `&mut T` | 保留（可改） |\n' +
            '| `into_iter()` | 获取所有权 | `T` | 消费 |\n\n' +
            '### 适配器方法（返回新迭代器）\n\n' +
            '| 方法 | 作用 | 示例 |\n' +
            '|------|------|------|\n' +
            '| `map(f)` | 转换 | `.map(\\|x\\| x * 2)` |\n' +
            '| `filter(f)` | 过滤 | `.filter(\\|x\\| *x > 0)` |\n' +
            '| `filter_map(f)` | 过滤+转换 | `.filter_map(\\|x\\| if x > 0 { Some(x*2) } else { None })` |\n' +
            '| `flat_map(f)` | 展开 | `.flat_map(\\|x\\| x..=x+1)` |\n' +
            '| `take(n)` | 取前 n | `.take(3)` |\n' +
            '| `skip(n)` | 跳过 n | `.skip(2)` |\n' +
            '| `enumerate()` | 加索引 | `.enumerate()` → (idx, val) |\n' +
            '| `zip(other)` | 配对 | `.zip(other_iter)` |\n' +
            '| `rev()` | 反转 | `.rev()` |\n' +
            '| `peekable()` | 可预览 | `.peekable()` |\n' +
            '| `chain(other)` | 连接 | `.chain(other_iter)` |\n\n' +
            '### 消费者方法（触发执行）\n\n' +
            '| 方法 | 作用 | 返回 |\n' +
            '|------|------|------|\n' +
            '| `collect()` | 收集 | Vec/String/HashMap 等 |\n' +
            '| `sum()` | 求和 | 数值 |\n' +
            '| `product()` | 求积 | 数值 |\n' +
            '| `count()` | 计数 | usize |\n' +
            '| `min()`/`max()` | 最小/最大 | Option<T> |\n' +
            '| `any(f)`/`all(f)` | 任一/全部满足 | bool |\n' +
            '| `find(f)` | 查找首个 | Option<T> |\n' +
            '| `fold(init, f)` | 折叠 | 累积值 |\n' +
            '| `for_each(f)` | 遍历 | () |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：map 与 collect**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let nums = vec![1, 2, 3, 4, 5];\n' +
            '    let doubled: Vec<i32> = nums.iter().map(|x| x * 2).collect();\n' +
            '    println!("{:?}", doubled);\n' +
            '}\n' +
            '```\n\n' +
            '`map(|x| x * 2)` 把每个元素乘以 2，`collect()` 收集为 Vec。惰性求值——collect 才触发执行。\n\n' +
            '**示例 2：filter 与 sum 链式**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let nums = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n' +
            '    let evens: i32 = nums.iter()\n' +
            '        .filter(|x| *x % 2 == 0)\n' +
            '        .sum();\n' +
            '    println!("偶数和: {}", evens);\n' +
            '    // fold 求积\n' +
            '    let product: i32 = (1..=5).fold(1, |acc, x| acc * x);\n' +
            '    println!("5! = {}", product);\n' +
            '}\n' +
            '```\n\n' +
            '`filter` 只保留偶数，`sum()` 求和。`fold(1, |acc, x| acc * x)` 折叠求阶乘。\n\n' +
            '**示例 3：字符串反转与 enumerate**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let s = "hello";\n' +
            '    let reversed: String = s.chars().rev().collect();\n' +
            '    println!("反转: {}", reversed);\n\n' +
            '    // enumerate 带索引\n' +
            '    for (i, c) in s.chars().enumerate() {\n' +
            '        println!("{}: {}", i, c);\n' +
            '    }\n\n' +
            '    // zip 配对\n' +
            '    let names = ["Alice", "Bob"];\n' +
            '    let ages = [20, 30];\n' +
            '    for (name, age) in names.iter().zip(ages.iter()) {\n' +
            '        println!("{} {} 岁", name, age);\n' +
            '    }\n' +
            '}\n' +
            '```\n\n' +
            '`chars().rev().collect()` 反转字符串。`enumerate()` 加索引。`zip()` 配对两个迭代器。\n\n' +
            '**示例 4：自定义迭代器**\n\n' +
            '```rust\n' +
            'struct Counter { count: u32 }\n\n' +
            'impl Counter {\n' +
            '    fn new() -> Counter { Counter { count: 0 } }\n' +
            '}\n\n' +
            'impl Iterator for Counter {\n' +
            '    type Item = u32;\n' +
            '    fn next(&mut self) -> Option<Self::Item> {\n' +
            '        self.count += 1;\n' +
            '        if self.count <= 5 { Some(self.count) } else { None }\n' +
            '    }\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    let sum: u32 = Counter::new().sum();\n' +
            '    println!("1+2+3+4+5 = {}", sum);\n' +
            '    let doubled: Vec<u32> = Counter::new().map(|x| x * 2).collect();\n' +
            '    println!("{:?}", doubled);\n' +
            '}\n' +
            '```\n\n' +
            '实现 `Iterator` trait 即可自定义迭代器，自动获得 map/filter/sum 等所有方法（默认实现）。\n\n' +
            '## 注意事项\n\n' +
            '1. **迭代器是惰性的**：`vec.iter().map(|x| x * 2);` 不执行任何操作，需消费者（collect/sum/for_each）触发。\n' +
            '2. **collect 需类型标注**：`let v: Vec<_> = iter.collect();` 用 `_` 让编译器推断元素类型。\n' +
            '3. **借用与消费**：`iter()`（&T）最常用；需修改用 `iter_mut()`；需转移所有权用 `into_iter()`。\n' +
            '4. **filter 闭包参数是引用**：`filter(|x| *x > 0)` 中 x 是 `&&T`，需 `*x` 解引用。或 `filter(|&x| x > 0)`。\n' +
            '5. **零成本抽象**：迭代器链编译后等价手写循环，无虚函数调用开销。\n' +
            '6. **大小有限**：`collect()` 到 `String` 需 `Item = char`；到 `HashMap` 需 `Item = (K, V)`。\n' +
            '7. **所有权转移**：`into_iter()` 消费原集合，之后不可用。常用于 `for x in vec`（隐式 into_iter）。\n\n' +
            '## 实际应用\n\n' +
            '- **数据处理管道**：ETL 中 `data.map(transform).filter(validate).collect()` 链式处理。\n' +
            '- **字符串处理**：`s.lines().filter(|l| !l.is_empty()).collect()` 过滤空行。\n' +
            '- **聚合统计**：`nums.iter().max()`/`min()`/`sum()`/`avg()` 快速统计。\n' +
            '- **查找匹配**：`users.iter().find(|u| u.id == target)` 查找首个匹配。\n' +
            '- **分组**：`items.iter().group_by(|x| x.category)`（itertools 库）按条件分组。\n\n' +
            '## 扩展知识\n\n' +
            '- **IntoIterator**：实现 `IntoIterator` 的类型可用 `for x in t`，`Vec`/`&Vec`/`&mut Vec` 各有实现。\n' +
            '- **FromIterator**：`collect()` 底层调用 `FromIterator::from_iter`，可自定义集合的收集行为。\n' +
            '- **itertools 库**：提供 `group_by`/`chunks`/`interleave`/`unique` 等扩展方法，标准库未提供。\n' +
            '- **lazy 与 eager**：Rust 迭代器 lazy（map/filter 不执行）；JS 数组方法 eager（立即执行）。\n' +
            '- **并行迭代器**：`rayon` 库的 `par_iter()` 并行处理，`.par_iter().map(...).collect()` 自动并行。\n' +
            '- **生成器**：Rust 暂无 yield 语法，用自定义 Iterator 或 async stream 替代。',
          examples: [
            {
              title: 'map 与 collect',
              code: `fn main() {
    let nums = vec![1, 2, 3, 4, 5];
    let doubled: Vec<i32> = nums.iter().map(|x| x * 2).collect();
    println!("{:?}", doubled);
}`,
              explanation:
                '`map(|x| x * 2)` 把每个元素乘以 2，`collect()` 收集为 Vec。惰性求值——collect 才触发执行。' +
                '输出：[2, 4, 6, 8, 10]',
            },
            {
              title: 'filter 与 sum',
              code: `fn main() {
    let nums = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evens: i32 = nums.iter()
        .filter(|x| *x % 2 == 0)
        .sum();
    println!("偶数和: {}", evens);
}`,
              explanation:
                '`filter(|x| *x % 2 == 0)` 只保留偶数，`sum()` 求和。链式调用可读性极强。' +
                '输出：偶数和: 30',
            },
            {
              title: '字符串反转',
              code: `fn main() {
    let s = "hello";
    let reversed: String = s.chars().rev().collect();
    println!("反转: {}", reversed);
}`,
              explanation:
                '`chars()` 产生字符迭代器，`rev()` 反转，`collect()` 收集为 String。' +
                '输出：反转: olleh',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 map 把 [1,2,3] 每个元素乘以 3，collect 为 Vec，输出 [3, 6, 9]。',
              starter_code: `fn main() {
    let nums = vec![1, 2, 3];
    let tripled: Vec<i32> = nums.iter().map(|x| x ___ 3).collect();
    println!("{:?}", tripled);
}`,
              expected_output: '[3, 6, 9]',
              hints: [
                '乘法用 * 运算符',
                'x * 3 把每个元素乘以 3',
                '答案: *',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 chars().rev().collect() 反转字符串 "world"，输出 "dlrow"。',
              starter_code: `fn main() {
    let s = "world";
    let reversed: String = s.chars().___().collect();
    println!("{}", reversed);
}`,
              expected_output: 'dlrow',
              hints: [
                '反转迭代器用 rev() 方法',
                '在 chars() 后调用 rev()',
                '答案: rev',
              ],
            },
          ],
          realWorldScenario:
            '迭代器是数据处理管道的核心。在 ETL（提取-转换-加载）中，数据流经过 map（转换格式）、filter（清洗无效数据）、collect（写入数据库）等步骤。字符串反转是经典面试题，在 Rust 中用迭代器一行搞定，且零成本抽象保证性能。',
        },
        {
          id: 'rust-ch5-l4',
          title: '模块与 crate',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`mod` 定义模块，`use` 导入路径，`pub` 标记公开可见。模块组织代码结构，' +
            '类似其他语言的 namespace/package。在单文件中可以内联定义模块：`mod utils { pub fn helper() {} }`。\n\n' +
            '路径用 `::` 分隔：`crate::module::function` 从 crate 根开始，`self::` 当前模块，' +
            '`super::` 父模块。`use` 导入后可直接用短名：`use std::collections::HashMap;`。' +
            '`pub use` 可以重新导出（re-export），常用于库的公共 API 设计。\n\n' +
            '`crate` 是 Rust 的编译单元——二进制 crate（有 main 函数）或库 crate（有 lib.rs）。' +
            'Cargo.toml 管理依赖，`cargo add 包名` 添加第三方库。`std` 是标准库，默认可用。\n\n' +
            '可见性规则：默认私有，`pub` 公开。`pub(crate)` 在 crate 内可见。结构体字段默认私有，' +
            '需要逐个标 `pub`。枚举变体跟随枚举的可见性——枚举是 pub 则变体全是 pub。\n\n' +
            '## 语法说明\n\n' +
            '### 模块定义\n\n' +
            '```rust\n' +
            'mod utils {\n' +
            '    pub fn helper() {}       // 公开\n' +
            '    fn internal() {}          // 私有（默认）\n' +
            '    pub(crate) fn crate_fn() {} // crate 内可见\n' +
            '}\n' +
            '// 文件模块：mod utils; 加载 utils.rs 或 utils/mod.rs\n' +
            '```\n\n' +
            '### 路径系统\n\n' +
            '```rust\n' +
            'crate::utils::helper();   // 从 crate 根开始\n' +
            'self::helper();            // 当前模块\n' +
            'super::helper();           // 父模块\n' +
            'std::collections::HashMap::new(); // 标准库绝对路径\n' +
            '```\n\n' +
            '### use 导入\n\n' +
            '```rust\n' +
            'use std::collections::HashMap;      // 直接导入\n' +
            'use std::collections::{HashMap, BTreeMap}; // 多个\n' +
            'use std::io::{self, Read};          // 模块本身+子项\n' +
            'use std::collections::*;            // 通配符（慎用）\n' +
            'use std::collections::HashMap as HM; // 重命名\n' +
            '```\n\n' +
            '### 可见性修饰符\n\n' +
            '| 修饰符 | 范围 |\n' +
            '|--------|------|\n' +
            '| （无） | 私有，仅当前模块 |\n' +
            '| `pub` | 公开，任意模块 |\n' +
            '| `pub(crate)` | crate 内可见 |\n' +
            '| `pub(super)` | 父模块可见 |\n' +
            '| `pub(in path)` | 指定路径内可见 |\n\n' +
            '### crate 类型\n\n' +
            '| 类型 | 入口 | 产物 |\n' +
            '|------|------|------|\n' +
            '| 二进制 crate | `main()` | 可执行文件 |\n' +
            '| 库 crate | `lib.rs` | .rlib / .so / .a |\n' +
            '| workspace | Cargo.toml | 多 crate 聚合 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：模块定义与可见性**\n\n' +
            '```rust\n' +
            'mod math {\n' +
            '    pub fn add(a: i32, b: i32) -> i32 { a + b }\n' +
            '    fn secret() -> i32 { 42 }  // 私有，外部不可见\n' +
            '    pub(crate) fn crate_fn() -> i32 { 100 }\n' +
            '}\n\n' +
            'fn main() {\n' +
            '    println!("{}", math::add(3, 4));\n' +
            '    // println!("{}", math::secret()); // 报错：私有\n' +
            '    println!("{}", math::crate_fn());\n' +
            '}\n' +
            '```\n\n' +
            '模块用 `mod` 定义。`pub fn` 公开，`fn` 默认私有，`pub(crate)` crate 内可见。\n\n' +
            '**示例 2：use 导入与重命名**\n\n' +
            '```rust\n' +
            'mod math {\n' +
            '    pub fn add(a: i32, b: i32) -> i32 { a + b }\n' +
            '    pub fn mul(a: i32, b: i32) -> i32 { a * b }\n' +
            '}\n\n' +
            'use math::add;\n' +
            'use math::{mul as multiply};\n\n' +
            'fn main() {\n' +
            '    println!("{}", add(3, 4));\n' +
            '    println!("{}", multiply(3, 4));\n' +
            '}\n' +
            '```\n\n' +
            '`use math::add` 导入后直接用 `add`。`as` 重命名避免冲突或简化。\n\n' +
            '**示例 3：文件模块结构**\n\n' +
            '```ignore\n' +
            '// 项目结构：\n' +
            '// src/\n' +
            '//   main.rs        // crate 根，mod utils; 声明\n' +
            '//   utils.rs       // 模块内容\n' +
            '//   utils/mod.rs   // 或这种形式（旧风格）\n' +
            '//   utils/math.rs  // 子模块 utils/math\n\n' +
            '// main.rs\n' +
            'mod utils;  // 加载 utils.rs\n' +
            'use utils::helper;\n\n' +
            '// utils.rs\n' +
            'pub fn helper() {}\n' +
            'pub mod math;  // 加载 utils/math.rs\n' +
            '```\n\n' +
            '文件模块：`mod utils;` 加载 `utils.rs` 或 `utils/mod.rs`。子模块用 `pub mod` 声明。\n\n' +
            '**示例 4：pub use 重新导出**\n\n' +
            '```rust\n' +
            'mod internal {\n' +
            '    pub fn deep_api() -> i32 { 42 }\n' +
            '}\n\n' +
            '// 重新导出，简化外部路径\n' +
            'pub use internal::deep_api;\n\n' +
            'fn main() {\n' +
            '    // 外部可直接用 deep_api()，无需 internal::deep_api()\n' +
            '    println!("{}", deep_api());\n' +
            '}\n' +
            '```\n\n' +
            '`pub use` 把内部模块的项重新导出到当前模块路径，常用于库的公共 API 设计（隐藏内部结构）。\n\n' +
            '## 注意事项\n\n' +
            '1. **默认私有**：模块、函数、结构体、字段默认私有，需 `pub` 暴露。这是封装的基础。\n' +
            '2. **结构体字段独立可见**：`pub struct User { name: String }` 中 name 仍私有，需 `pub name: String`。\n' +
            '3. **枚举变体跟随枚举**：`pub enum E { A, B }` 则 A、B 都公开，与结构体不同。\n' +
            '4. **mod 加载文件**：`mod utils;` 加载 `utils.rs`（新风格）或 `utils/mod.rs`（旧风格），二选一。\n' +
            '5. **use 不复制代码**：`use` 只是路径别名，不导入副本。`pub use` 重新导出路径。\n' +
            '6. **通配符 use 慎用**：`use x::*;` 可能名称冲突，建议显式导入或用 `as` 重命名。\n' +
            '7. **crate 根**：二进制是 main.rs，库是 lib.rs。`crate::` 从根开始，`::` 从外部 crate 开始。\n\n' +
            '## 实际应用\n\n' +
            '- **项目结构**：Web 项目分 `mod routes; mod models; mod services;`，模块化组织。\n' +
            '- **库 API 设计**：`pub use` 重新导出，隐藏内部模块结构，提供简洁公共接口。\n' +
            '- **封装**：私有函数是内部实现，`pub` 是契约。修改私有不影响调用者。\n' +
            '- **workspace**：大型项目用 workspace 管理多 crate（如 `core`/`cli`/`server`）。\n' +
            '- **第三方库**：`use serde::{Serialize, Deserialize};` 导入 crate 依赖的功能。\n\n' +
            '## 扩展知识\n\n' +
            '- **路径系统**：`crate::`（当前 crate 根）、`self::`（当前模块）、`super::`（父模块）、`::`（外部 crate 根）。\n' +
            '- **edition 差异**：Rust 2018 前 `extern crate serde;`，2018+ 直接 `use serde::...`。\n' +
            '- **prelude**：`std::prelude` 自动导入常用项（Vec、String、Option 等），无需手动 use。\n' +
            '- **绝对 vs 相对路径**：`crate::x` 绝对（从根），`self::x`/`super::x` 相对。大型项目推荐绝对路径。\n' +
            '- **Cargo workspace**：`[workspace] members = ["crate1", "crate2"]` 管理多 crate，共享 target/。\n' +
            '- **feature flag**：`#[cfg(feature = "serde")]` 条件编译，库按需启用功能。',
          examples: [
            {
              title: '模块定义与使用',
              code: `mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    fn secret() -> i32 { 42 }  // 私有，外部不可见
}

fn main() {
    println!("{}", math::add(3, 4));
}`,
              explanation:
                '模块用 `mod` 定义。`pub fn` 公开，`fn` 默认私有。用 `模块名::函数名` 调用。' +
                '输出：7',
            },
            {
              title: 'use 导入',
              code: `mod math {
    pub fn add(a: i32, b: i32) -> i32 { a + b }
    pub fn mul(a: i32, b: i32) -> i32 { a * b }
}

use math::add;

fn main() {
    println!("{}", add(3, 4));
    println!("{}", math::mul(3, 4));
}`,
              explanation:
                '`use math::add` 导入后直接用 `add`。mul 未导入，用完整路径 `math::mul`。' +
                '输出：7，然后 12',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全 use 语句，导入 math::square 后直接调用。输出 "平方: 16"。',
              starter_code: `mod math {
    pub fn square(n: i32) -> i32 { n * n }
}

___ math::square;

fn main() {
    println!("平方: {}", square(4));
}`,
              expected_output: '平方: 16',
              hints: [
                '用 use 关键字导入模块成员',
                'use math::square;',
                '答案: use',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全 pub 关键字使 greet 函数可从模块外访问。输出 "你好"。',
              starter_code: `mod greet {
    ___ fn hello() -> &str {
        "你好"
    }
}

fn main() {
    println!("{}", greet::hello());
}`,
              expected_output: '你好',
              hints: [
                '函数默认私有，需要 pub 标记公开',
                '用 pub fn 声明公开函数',
                '答案: pub',
              ],
            },
          ],
          realWorldScenario:
            '在大型项目中，模块化管理代码至关重要。一个 Web 服务器项目通常有 mod routes（路由）、mod models（数据模型）、mod services（业务逻辑）等模块。pub 控制公共 API，私有函数是内部实现细节。理解模块系统是构建可维护 Rust 项目的基础。',
        },
      ],
    },

    // ================================================================
    // 第 6 章：错误处理与集合
    // ================================================================
    {
      id: 'rust-ch6',
      title: '错误处理与集合',
      order: 5,
      lessons: [
        {
          id: 'rust-ch6-l1',
          title: 'Vec 动态数组',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '`Vec<T>` 是 Rust 的动态数组，存储在堆上，可自动扩容。这是最常用的集合类型。' +
            '创建：`Vec::new()` 或 `vec![1, 2, 3]` 宏。添加：`push(item)`。' +
            '访问：`vec[i]`（越界 panic）或 `vec.get(i)`（返回 Option，安全）。\n\n' +
            'Vec 内部分配堆内存，当离开作用域时自动释放——无需手动 free。' +
            'Vec 的扩容策略是容量满时倍增，均摊 O(1) 的 push 性能。\n\n' +
            '遍历 Vec 时注意所有权：`for x in &vec` 借用（vec 仍可用），' +
            '`for x in vec` 获取所有权（vec 被消耗）。选择哪种取决于后续是否还需要 vec。\n\n' +
            '## 语法说明\n\n' +
            '### 创建 Vec\n\n' +
            '```rust\n' +
            'let v1: Vec<i32> = Vec::new();       // 空 Vec，需类型标注\n' +
            'let v2 = vec![1, 2, 3];              // 宏初始化\n' +
            'let v3: Vec<i32> = (0..5).collect(); // 从迭代器\n' +
            'let v4 = vec![0; 5];                 // 5 个 0\n' +
            '```\n\n' +
            '### 增删改查\n\n' +
            '```rust\n' +
            'let mut v = vec![1, 2, 3];\n' +
            'v.push(4);            // 末尾添加 [1,2,3,4]\n' +
            'v.insert(0, 0);       // 指定位置插入 [0,1,2,3,4]\n' +
            'v.pop();              // 弹出末尾 [0,1,2,3]\n' +
            'v.remove(0);          // 移除指定 [1,2,3]\n' +
            'v[0] = 10;            // 修改 [10,2,3]\n' +
            'let x = v[0];         // 访问（越界 panic）\n' +
            'let y = v.get(5);     // 安全访问 Option<&T>\n' +
            '```\n\n' +
            '### 常用方法\n\n' +
            '| 方法 | 作用 | 时间复杂度 |\n' +
            '|------|------|------------|\n' +
            '| `push(x)` | 末尾添加 | 均摊 O(1) |\n' +
            '| `pop()` | 末尾弹出 | O(1) |\n' +
            '| `insert(i, x)` | 指定位置插入 | O(n) |\n' +
            '| `remove(i)` | 移除指定 | O(n) |\n' +
            '| `len()` / `is_empty()` | 长度/判空 | O(1) |\n' +
            '| `get(i)` | 安全访问 | O(1) |\n' +
            '| `contains(&x)` | 是否包含 | O(n) |\n' +
            '| `sort()` | 排序 | O(n log n) |\n' +
            '| `reverse()` | 反转 | O(n) |\n' +
            '| `extend(iter)` | 扩展 | O(n) |\n' +
            '| `retain(f)` | 保留满足条件的 | O(n) |\n' +
            '| `truncate(n)` | 截断到 n | O(n) |\n' +
            '| `clear()` | 清空 | O(n) |\n\n' +
            '### 容量与预分配\n\n' +
            '```rust\n' +
            'let mut v: Vec<i32> = Vec::with_capacity(1000); // 预分配\n' +
            'for i in 0..1000 { v.push(i); } // 无重新分配\n' +
            '```\n\n' +
            '### 三种遍历\n\n' +
            '| 写法 | 所有权 | 原集合 |\n' +
            '|------|--------|--------|\n' +
            '| `for x in &v` | 借用 `&T` | 保留 |\n' +
            '| `for x in &mut v` | 可变借用 `&mut T` | 保留可改 |\n' +
            '| `for x in v` | 消费 `T` | 消失 |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：创建与基本操作**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let mut nums = Vec::new();\n' +
            '    nums.push(1);\n' +
            '    nums.push(2);\n' +
            '    nums.push(3);\n' +
            '    println!("{:?}", nums);\n' +
            '    println!("长度: {}", nums.len());\n' +
            '    println!("第二个: {:?}", nums.get(1));\n' +
            '    nums.pop();\n' +
            '    println!("{:?}", nums);\n' +
            '}\n' +
            '```\n\n' +
            'Vec::new() 创建空 Vec，push 追加，get 安全访问，pop 弹出末尾。\n\n' +
            '**示例 2：vec! 宏与遍历**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let fruits = vec!["苹果", "香蕉", "橙子"];\n' +
            '    for (i, fruit) in fruits.iter().enumerate() {\n' +
            '        println!("{}: {}", i, fruit);\n' +
            '    }\n' +
            '    // 预分配优化\n' +
            '    let mut big: Vec<i32> = Vec::with_capacity(1000);\n' +
            '    for i in 0..1000 { big.push(i); }\n' +
            '    println!("千个元素求和: {}", big.iter().sum::<i32>());\n' +
            '}\n' +
            '```\n\n' +
            '`vec![]` 宏快速创建。`enumerate()` 带索引。`with_capacity` 预分配避免多次扩容。\n\n' +
            '**示例 3：排序与 retain**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let mut nums = vec![5, 3, 8, 1, 9, 2];\n' +
            '    nums.sort();\n' +
            '    println!("升序: {:?}", nums);\n' +
            '    nums.sort_by(|a, b| b.cmp(a)); // 降序\n' +
            '    println!("降序: {:?}", nums);\n' +
            '    // retain 保留偶数\n' +
            '    let mut evens = vec![1, 2, 3, 4, 5, 6];\n' +
            '    evens.retain(|x| x % 2 == 0);\n' +
            '    println!("偶数: {:?}", evens);\n' +
            '}\n' +
            '```\n\n' +
            '`sort()` 升序排序，`sort_by` 自定义比较，`retain` 原地过滤保留满足条件的元素。\n\n' +
            '**示例 4：切片与 split**\n\n' +
            '```rust\n' +
            'fn main() {\n' +
            '    let v = vec![1, 2, 3, 4, 5, 6];\n' +
            '    let (left, right) = v.split_at(3);\n' +
            '    println!("左: {:?}, 右: {:?}", left, right);\n' +
            '    let chunks: Vec<&[i32]> = v.chunks(2).collect();\n' +
            '    println!("分块: {:?}", chunks);\n' +
            '    let windows: Vec<&[i32]> = v.windows(2).collect();\n' +
            '    println!("窗口: {:?}", windows);\n' +
            '}\n' +
            '```\n\n' +
            '`split_at(n)` 分两段，`chunks(n)` 按 n 分块，`windows(n)` 滑动窗口。\n\n' +
            '## 注意事项\n\n' +
            '1. **越界 panic**：`v[i]` 越界会 panic，`v.get(i)` 返回 Option 更安全。\n' +
            '2. **预分配提升性能**：已知大小用 `Vec::with_capacity(n)` 避免多次扩容。\n' +
            '3. **insert/remove 是 O(n)**：需移动后续元素。频繁中间操作用 `VecDeque` 或 `LinkedList`。\n' +
            '4. **遍历时不能修改**：`for x in &v { v.push(1); }` 借用冲突。先 collect 再改，或用索引。\n' +
            '5. **sort 需 Ord**：元素需实现 Ord trait。f64 没有全序，用 `sort_by` 自定义。\n' +
            '6. **容量与长度**：`len()` 是元素数，`capacity()` 是已分配容量。`shrink_to_fit` 释放多余。\n' +
            '7. **Deref 到切片**：Vec 自动解引用为 `&[T]`，函数接受 `&[T]` 可传 `&vec`。\n\n' +
            '## 实际应用\n\n' +
            '- **日志收集**：`Vec<LogEntry>` 存储日志，按时间追加，批量写入文件。\n' +
            '- **游戏实体**：`Vec<Entity>` 管理游戏对象，每帧遍历更新。\n' +
            '- **API 列表响应**：`Vec<User>` 序列化为 JSON 数组返回。\n' +
            '- **缓冲区**：`Vec<u8>` 作为 IO 缓冲，`read_to_end` 填充。\n' +
            '- **数据处理**：`map`/`filter`/`collect` 链式转换 Vec。\n\n' +
            '## 扩展知识\n\n' +
            '- **VecDeque**：双端队列，头尾 O(1) 操作，适合队列/栈。\n' +
            '- **LinkedList**：链表，很少用（迭代器更适合大部分场景）。\n' +
            '- **容量增长策略**：2 倍增长，均摊 O(1) push。`reserve(n)` 预留 n 个空间。\n' +
            '- **Box<[T]>**：固定大小堆数组，不可增长，比 Vec 少 8 字节（无 capacity）。\n' +
            '- **SmallVec/arrayvec**：小数据存栈上，超出才堆分配，优化小集合性能。\n' +
            '- **unsafe set_len**：`set_len` 不初始化直接设长度，unsafe，配合 `MaybeUninit` 用于高性能初始化。',
          examples: [
            {
              title: '创建与操作 Vec',
              code: `fn main() {
    let mut nums = Vec::new();
    nums.push(1);
    nums.push(2);
    nums.push(3);
    println!("{:?}", nums);
    println!("长度: {}", nums.len());
    println!("第二个: {:?}", nums.get(1));
    nums.pop();
    println!("{:?}", nums);
}`,
              explanation:
                'Vec::new() 创建空 Vec，push 追加，get 安全访问，pop 弹出末尾。' +
                '输出：[1, 2, 3]，长度: 3，第二个: Some(2)，[1, 2]',
            },
            {
              title: 'vec! 宏与遍历',
              code: `fn main() {
    let fruits = vec!["苹果", "香蕉", "橙子"];
    for (i, fruit) in fruits.iter().enumerate() {
        println!("{}: {}", i, fruit);
    }
}`,
              explanation:
                '`vec![]` 宏快速创建 Vec。`enumerate()` 带索引遍历。' +
                '输出：0: 苹果，1: 香蕉，2: 橙子',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 vec! 宏创建 [10, 20, 30]，用 iter().sum() 求和，输出 "总和: 60"。',
              starter_code: `fn main() {
    let nums = vec![10, 20, 30];
    let sum: i32 = nums.iter().___();
    println!("总和: {}", sum);
}`,
              expected_output: '总和: 60',
              hints: [
                'sum() 方法对迭代器求和',
                '在 iter() 后调用 sum()',
                '答案: sum',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 push 向空 Vec 添加 3 个元素，输出 "[1, 2, 3]"。',
              starter_code: `fn main() {
    let mut nums = Vec::new();
    nums.___(1);
    nums.push(2);
    nums.push(3);
    println!("{:?}", nums);
}`,
              expected_output: '[1, 2, 3]',
              hints: [
                'push 方法向 Vec 末尾添加元素',
                '在 nums 后调用 push(1)',
                '答案: push',
              ],
            },
          ],
          realWorldScenario:
            'Vec 在真实项目中无处不在——日志收集器用 Vec<LogEntry> 存日志、游戏用 Vec<Entity> 管理实体、API 用 Vec<User> 返回用户列表。理解 Vec 是构建任何 Rust 应用的基础。在实现缓存时，Vec 常用于存储有序数据。',
        },
        {
          id: 'rust-ch6-l2',
          title: 'HashMap 与 String',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '`HashMap<K, V>` 是 Rust 标准库提供的哈希表实现，存储键值对（key-value pair）。' +
            '它基于 SipHash 算法（1-3 分支版本）做哈希，能抵抗 HashDoS 攻击。' +
            'HashMap 在堆上分配内存，可动态扩容，平均查找、插入、删除时间复杂度为 O(1)。' +
            '与数组不同，HashMap 不保证元素顺序，每次遍历顺序可能不同。\n\n' +
            '`String` 是 Rust 中拥有所有权的、可增长的、UTF-8 编码的字符串类型。' +
            '它本质上是 `Vec<u8>` 的封装，但保证内部字节始终是合法 UTF-8。' +
            'Rust 字符串不是以 null 结尾的（与 C 不同），而是记录长度和容量。' +
            'Rust 有两种主要字符串类型：`String`（拥有所有权、可变、堆分配）和 `&str`（借用引用、只读切片）。\n\n' +
            '## 语法说明\n\n' +
            '### HashMap 创建与操作\n\n' +
            '```rust\nuse std::collections::HashMap;\n\n// 创建空 HashMap\nlet mut map: HashMap<String, i32> = HashMap::new();\n\n// 用 with_capacity 预分配容量（避免频繁扩容）\nlet mut map2 = HashMap::with_capacity(10);\n\n// 插入键值对\nmap.insert(String::from("a"), 1);\n\n// 访问：get 返回 Option<&V>\nif let Some(v) = map.get("a") {\n    println!("a = {}", v);\n}\n\n// 遍历\nfor (k, v) in &map {\n    println!("{}: {}", k, v);\n}\n\n// 删除\nmap.remove("a");\n\n// entry API：键不存在时插入默认值\nmap.entry("b").or_insert(0);\n```\n\n' +
            '### HashMap 常用方法\n\n' +
            '| 方法 | 签名 | 说明 | 时间复杂度 |\n' +
            '|------|------|------|------------|\n' +
            '| `insert` | `fn insert(&mut self, k: K, v: V) -> Option<V>` | 插入键值对，返回旧值 | O(1) 均摊 |\n' +
            '| `get` | `fn get<Q>(&self, k: &Q) -> Option<&V>` | 获取值的引用 | O(1) |\n' +
            '| `get_mut` | `fn get_mut<Q>(&mut self, k: &Q) -> Option<&mut V>` | 获取可变引用 | O(1) |\n' +
            '| `remove` | `fn remove<Q>(&mut self, k: &Q) -> Option<V>` | 删除并返回值 | O(1) |\n' +
            '| `contains_key` | `fn contains_key<Q>(&self, k: &Q) -> bool` | 判断键是否存在 | O(1) |\n' +
            '| `entry` | `fn entry(&mut self, key: K) -> Entry<K, V>` | 返回 Entry 用于条件操作 | O(1) |\n' +
            '| `len` | `fn len(&self) -> usize` | 元素数量 | O(1) |\n' +
            '| `is_empty` | `fn is_empty(&self) -> bool` | 是否为空 | O(1) |\n' +
            '| `clear` | `fn clear(&mut self)` | 清空 | O(n) |\n' +
            '| `iter` | `fn iter(&self) -> Iter<K, V>` | 不可变迭代器 | O(1) |\n' +
            '| `keys` / `values` | `fn keys(&self) -> Keys<K, V>` | 只迭代键/值 | O(1) |\n\n' +
            '### String 创建与操作\n\n' +
            '```rust\n// 创建 String\nlet s1 = String::new();                    // 空字符串\nlet s2 = String::from("hello");             // 从字面量创建\nlet s3 = "world".to_string();               // 用 to_string\nlet s4: String = "hi".into();               // 用 into\n\n// 修改\nlet mut s = String::from("Hello");\ns.push_str(", world");   // 追加 &str\ns.push(\'!\');             // 追加单个字符\ns += " Rust";            // 用 += 运算符\n\n// 拼接\nlet greeting = format!("{} {}", s, "!");\n\n// 长度（字节数，非字符数）\nprintln!("len = {}", s.len());\n\n// 判断是否为空\nprintln!("is_empty = {}", s.is_empty());\n```\n\n' +
            '### String vs &str 对比\n\n' +
            '| 特性 | String | &str |\n' +
            '|------|--------|------|\n' +
            '| 所有权 | 拥有 | 借用 |\n' +
            '| 可变性 | 可变 | 只读 |\n' +
            '| 存储 | 堆 | 栈/堆/二进制段 |\n' +
            '| 创建 | `String::from("x")` | `"x"`（字面量） |\n' +
            '| 转换 | `s.as_str()` | `s.to_string()` |\n' +
            '| 用作函数参数 | 较少用（消费所有权） | 推荐（更通用） |\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：HashMap 基本操作**\n\n```rust\nuse std::collections::HashMap;\nfn main() {\n    let mut scores: HashMap<&str, i32> = HashMap::new();\n    scores.insert("小明", 95);\n    scores.insert("小红", 88);\n    scores.insert("小刚", 76);\n\n    // 访问\n    println!("小明成绩: {:?}", scores.get("小明"));\n    println!("小红存在: {}", scores.contains_key("小红"));\n\n    // 修改：insert 同 key 会覆盖\n    scores.insert("小明", 100);\n    println!("更新后小明: {:?}", scores.get("小明"));\n\n    // 遍历（顺序不保证）\n    for (name, score) in &scores {\n        println!("{}: {}", name, score);\n    }\n    println!("共 {} 人", scores.len());\n}\n```\n\n' +
            '**示例 2：entry API 与 word count**\n\n```rust\nuse std::collections::HashMap;\nfn main() {\n    let text = "hello world hello rust hello cargo";\n    let mut count: HashMap<&str, i32> = HashMap::new();\n    for word in text.split_whitespace() {\n        // entry 返回 Entry 枚举，or_insert 在键不存在时插入默认值\n        let c = count.entry(word).or_insert(0);\n        *c += 1;  // 解引用后自增\n    }\n    println!("hello 出现 {} 次", count.get("hello").unwrap());\n    println!("rust 出现 {} 次", count.get("rust").unwrap());\n    // 遍历所有词频\n    for (w, n) in &count {\n        println!(\'"{}" -> {}\', w, n);\n    }\n}\n```\n\n' +
            '**示例 3：String 拼接与切片**\n\n```rust\nfn main() {\n    let mut s = String::from("Hello");\n    s.push_str(", ");\n    s.push_str("World");\n    s.push(\'!\');\n    println!("{}", s);\n\n    // format! 宏拼接多个\n    let name = String::from("Rust");\n    let greeting = format!("{} {}!", s, name);\n    println!("{}", greeting);\n\n    // 字符串切片（按字节，必须切在 UTF-8 边界）\n    let hello = &greeting[0..5];\n    println!("前 5 字节: {}", hello);\n\n    // + 运算符（左侧 String 被消费）\n    let s1 = String::from("foo");\n    let s2 = String::from("bar");\n    let s3 = s1 + &s2;  // s1 失效，s2 仍可用\n    println!("s3 = {}, s2 = {}", s3, s2);\n\n    // 遍历字符（非字节）\n    for ch in "你好".chars() {\n        println!("{}", ch);\n    }\n}\n```\n\n' +
            '**示例 4：用 HashMap 实现简单缓存**\n\n```rust\nuse std::collections::HashMap;\n\nstruct Cache {\n    data: HashMap<String, String>,\n}\n\nimpl Cache {\n    fn new() -> Self {\n        Cache { data: HashMap::new() }\n    }\n    fn set(&mut self, key: &str, value: &str) {\n        self.data.insert(key.to_string(), value.to_string());\n    }\n    fn get(&self, key: &str) -> Option<&String> {\n        self.data.get(key)\n    }\n    fn get_or_default(&self, key: &str, default: &str) -> String {\n        match self.get(key) {\n            Some(v) => v.clone(),\n            None => default.to_string(),\n        }\n    }\n}\n\nfn main() {\n    let mut cache = Cache::new();\n    cache.set("name", "小明");\n    cache.set("city", "上海");\n    println!("name: {}", cache.get("name").unwrap());\n    println!("age: {}", cache.get_or_default("age", "未知"));\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **HashMap 遍历顺序不保证**——每次运行顺序可能不同，不要依赖顺序。需要有序时用 `BTreeMap`（按 key 排序）。\n' +
            '2. **HashMap 的 key 必须实现 `Hash + Eq` trait**——自定义类型作 key 需 derive 这两个 trait。浮点数 `f64` 实现了 PartialEq 但不实现 Eq，不能作 key。\n' +
            '3. **insert 会覆盖旧值**——`insert` 返回 `Option<V>`，如果 key 已存在返回旧值。若只想在不存在时插入，用 `entry().or_insert()`。\n' +
            '4. **String 切片必须切在 UTF-8 字符边界**——对中文字符串 `&s[0..1]` 会 panic（一个中文占 3 字节）。安全做法用 `chars()` 迭代。\n' +
            '5. **String 的 `len()` 返回字节数而非字符数**——`"你好".len()` 是 6（每字 3 字节），用 `chars().count()` 得到 2。\n' +
            '6. **`+` 运算符会消费左侧 String**——`s1 + &s2` 后 s1 不可用。需保留时用 `format!`。\n' +
            '7. **函数参数优先用 `&str`**——更通用，能接受 `&String` 和字面量。只有需要拥有所有权时才用 `String`。\n' +
            '8. **HashMap 默认使用 SipHash**——安全但较慢。高性能场景可用 `FnvHashMap`（fnv crate）或 `AHashMap`（ahash crate）。\n\n' +
            '## 实际应用\n\n' +
            '1. **缓存系统**：HashMap 是实现内存缓存的首选——key 是缓存键（如 URL、商品 ID），value 是缓存数据。配合 `entry().or_insert()` 实现"不存在则计算并缓存"模式。\n' +
            '2. **词频统计 / MapReduce**：word count 是大数据处理的经典示例。搜索引擎建立倒排索引、日志分析统计 IP 访问次数，都用 HashMap 聚合。\n' +
            '3. **配置管理**：解析 INI/JSON/YAML 配置后存入 `HashMap<String, String>`，支持快速查询。命令行参数解析器也常返回 HashMap。\n' +
            '4. **字符串构建**：模板引擎、代码生成器、SQL 构建器大量使用 String 拼接。`format!` 宏是最方便的拼接方式。\n' +
            '5. **去重**：用 `HashSet<T>`（底层就是 `HashMap<T, ()>`）做元素去重，比 Vec 的 `contains` + `push` 高效得多。\n\n' +
            '## 扩展知识\n\n' +
            '- **BTreeMap**：基于 B 树实现，key 自动排序，查找/插入 O(log n)。需要有序遍历时替代 HashMap。\n' +
            '- **HashSet**：只存 key 不存 value 的集合，本质是 `HashMap<T, ()>`。支持交并差运算。\n' +
            '- **Cow<str>**：写时克隆智能指针，能在 &str 和 String 间灵活切换，常用于零拷贝解析。\n' +
            '- **OsString / OsStr**：操作系统路径字符串，跨平台处理文件名时使用。\n' +
            '- **CString / CStr**：与 C FFI 交互时使用，以 null 结尾的字符串。\n' +
            '- **Entry 枚举**：`Entry::Occupied` 和 `Entry::Vacant` 两个变体，提供比 `contains_key + insert` 更高效的原子操作。\n' +
            '- **哈希碰撞攻击**：SipHash 随机化种子防止恶意构造 key 退化性能，但牺牲了少量速度。',
          examples: [
            {
              title: 'HashMap 基本操作',
              code: `use std::collections::HashMap;
fn main() {
    let mut scores = HashMap::new();
    scores.insert("小明", 95);
    scores.insert("小红", 88);
    println!("{:?}", scores.get("小明"));
    for (name, score) in &scores {
        println!("{}: {}", name, score);
    }
}`,
              explanation:
                'insert 插入键值对，get 返回 Option。遍历得到 (&K, &V) 引用。' +
                '输出 Some(95)，然后各键值对（顺序可能不同）。',
            },
            {
              title: 'entry API 与 word count',
              code: `use std::collections::HashMap;
fn main() {
    let text = "hello world hello rust";
    let mut count = HashMap::new();
    for word in text.split_whitespace() {
        let c = count.entry(word).or_insert(0);
        *c += 1;
    }
    println!("hello 出现 {} 次", count.get("hello").unwrap());
}`,
              explanation:
                '`entry(word).or_insert(0)` 在 word 不存在时插入 0，返回可变引用。' +
                '`*c += 1` 解引用后自增。输出：hello 出现 2 次',
            },
            {
              title: 'String 操作',
              code: `fn main() {
    let mut s = String::from("Hello");
    s.push_str(", ");
    s.push_str("World");
    let name = String::from("Rust");
    let greeting = format!("{} {}!", s, name);
    println!("{}", greeting);
    println!("长度: {}", greeting.len());
}`,
              explanation:
                '`push_str` 追加字符串，`format!` 格式化拼接。len() 返回字节数。' +
                '输出：Hello, World Rust!，长度: 20',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 HashMap 统计 "apple banana apple" 中 apple 出现次数。输出 "apple: 2"。',
              starter_code: `use std::collections::HashMap;
fn main() {
    let text = "apple banana apple";
    let mut map = HashMap::new();
    for word in text.split_whitespace() {
        let count = map.entry(word).or_insert(0);
        *count += ___;
    }
    println!("apple: {}", map.get("apple").unwrap());
}`,
              expected_output: 'apple: 2',
              hints: [
                '每次遇到单词时计数加 1',
                '*count += 1 把计数加 1',
                '答案: 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 push_str 向 String 追加 " World"，输出 "Hello World"。',
              starter_code: `fn main() {
    let mut s = String::from("Hello");
    s.___(" World");
    println!("{}", s);
}`,
              expected_output: 'Hello World',
              hints: [
                'push_str 方法向 String 追加字符串切片',
                'push_str(" World") 追加 " World"',
                '答案: push_str',
              ],
            },
          ],
          realWorldScenario:
            'HashMap 是实现缓存的首选数据结构——key 是缓存键（如 URL），value 是缓存数据（如响应体）。entry API 让"不存在则插入"的原子操作变得简单。word count 是 MapReduce 的经典示例，在搜索引擎索引、日志分析中广泛应用。String 操作在构建配置解析器、模板引擎时不可或缺。',
        },
        {
          id: 'rust-ch6-l3',
          title: '错误处理：panic 与 Result',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'Rust 将错误分为两类：**不可恢复错误**（unrecoverable error）用 `panic!` 宏处理，' +
            '**可恢复错误**（recoverable error）用 `Result<T, E>` 类型处理。' +
            '这种二分法是 Rust 错误处理的核心理念——区分"程序 bug"和"预期内的失败"。\n\n' +
            '`panic!` 不可恢复：打印错误信息、展开栈（unwind）、退出程序，返回非零状态码。' +
            '用于程序 bug 或不变量违反等不该继续执行的情况。一旦触发无法在常规代码中捕获恢复。' +
            'panic 触发时会打印 panic 信息和调用栈（backtrace），帮助定位 bug。\n\n' +
            '`Result<T, E>` 是可恢复错误的载体：`Ok(T)` 表示成功携带值，`Err(E)` 表示失败携带错误信息。' +
            '它强制开发者显式处理错误路径——编译器保证你不会遗漏错误。这与 Go 的 error 返回值、' +
            'Java 的 checked exception 异曲同工，但 Rust 用类型系统而非运行时异常实现，零开销且类型安全。\n\n' +
            '## 语法说明\n\n' +
            '### panic! 触发方式\n\n' +
            '```rust\n// 显式调用\npanic!("出错了！");\npanic!("索引 {} 越界", idx);\n\n// 隐式触发（运行时）\nlet v = vec![1, 2, 3];\nv[10];          // 数组越界 → panic\nlet x: Option<i32> = None;\nx.unwrap();     // None unwrap → panic\nlet y: Result<i32, &str> = Err("e");\ny.expect("msg"); // Err expect → panic\n\n// debug 模式整数溢出也会 panic\nlet mut n: u8 = 255;\n// n + 1;  // debug: panic, release: 回绕为 0\n```\n\n' +
            '### Result 处理方式\n\n' +
            '| 方式 | 语法 | 说明 |\n' +
            '|------|------|------|\n' +
            '| `match` | `match r { Ok(v) => ..., Err(e) => ... }` | 显式处理两种情况 |\n' +
            '| `?` 操作符 | `let v = r?;` | 传播错误到调用者，成功则解包 |\n' +
            '| `unwrap` | `r.unwrap()` | 成功返回值，失败 panic |\n' +
            '| `expect` | `r.expect("msg")` | 同 unwrap 但可自定义 panic 消息 |\n' +
            '| `unwrap_or` | `r.unwrap_or(default)` | 失败时返回默认值 |\n' +
            '| `unwrap_or_else` | `r.unwrap_or_else(\\|\\|compute())` | 失败时用闭包计算默认值 |\n' +
            '| `unwrap_or_default` | `r.unwrap_or_default()` | 失败时用 Default trait |\n' +
            '| `is_ok` / `is_err` | `r.is_ok()` | 判断而不消费 |\n' +
            '| `map` | `r.map(\\|v\\| v + 1)` | 成功时变换值 |\n' +
            '| `map_err` | `r.map_err(\\|e\\| ...)` | 失败时变换错误 |\n' +
            '| `and_then` | `r.and_then(\\|v\\| ...)` | 成功时链式返回新 Result |\n' +
            '| `or_else` | `r.or_else(\\|e\\| ...)` | 失败时尝试恢复 |\n\n' +
            '### ? 操作符详解\n\n' +
            '`?` 是 Rust 最优雅的错误处理语法糖。`expr?` 的语义：\n' +
            '1. 若 `expr` 是 `Ok(v)`，则整个表达式值为 `v`，继续执行\n' +
            '2. 若 `expr` 是 `Err(e)`，则立即 `return Err(e.into())`——错误被传播到调用者\n' +
            '3. `.into()` 会尝试自动转换错误类型（需实现 `From` trait）\n\n' +
            '`?` 只能在返回 `Result`（或 `Option`）的函数中使用。它让错误传播像写无错误的代码一样简洁。\n\n' +
            '### 自定义错误类型\n\n' +
            '```rust\nuse std::fmt;\nuse std::error::Error;\n\n// 自定义错误类型\n#[derive(Debug)]\nenum AppError {\n    NotFound(String),\n    ParseError(String),\n    IoError(std::io::Error),\n}\n\nimpl fmt::Display for AppError {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        match self {\n            AppError::NotFound(msg) => write!(f, "未找到: {}", msg),\n            AppError::ParseError(msg) => write!(f, "解析错误: {}", msg),\n            AppError::IoError(e) => write!(f, "IO 错误: {}", e),\n        }\n    }\n}\n\nimpl Error for AppError {}\n\n// 实现 From 让 ? 自动转换\nimpl From<std::io::Error> for AppError {\n    fn from(e: std::io::Error) -> Self {\n        AppError::IoError(e)\n    }\n}\n```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：panic! 不可恢复错误**\n\n```rust\nfn main() {\n    let nums = vec![1, 2, 3];\n    println!("第一个: {}", nums[0]);\n    // nums[10]; // 这会 panic：index out of bounds\n    println!("程序正常结束");\n}\n```\n\n' +
            '**示例 2：Result 与 ? 错误传播链**\n\n```rust\nfn parse_config(s: &str) -> Result<i32, String> {\n    let n: i32 = s.parse()\n        .map_err(|_| format!("解析失败: {}", s))?;  // ? 传播错误\n    if n < 0 {\n        return Err("不能为负数".to_string());\n    }\n    Ok(n * 2)\n}\n\nfn main() {\n    match parse_config("21") {\n        Ok(n) => println!("配置值: {}", n),\n        Err(e) => println!("错误: {}", e),\n    }\n    match parse_config("abc") {\n        Ok(n) => println!("配置值: {}", n),\n        Err(e) => println!("错误: {}", e),\n    }\n    match parse_config("-5") {\n        Ok(n) => println!("配置值: {}", n),\n        Err(e) => println!("错误: {}", e),\n    }\n}\n```\n\n' +
            '**示例 3：unwrap_or 系列与默认值**\n\n```rust\nfn main() {\n    // unwrap_or：失败时返回固定默认值\n    let n: i32 = "abc".parse().unwrap_or(0);\n    println!("n = {}", n);  // n = 0\n\n    // unwrap_or_else：失败时用闭包计算\n    let s: i32 = "xyz".parse()\n        .unwrap_or_else(|_| {\n            println!("解析失败，使用默认");\n            -1\n        });\n    println!("s = {}", s);\n\n    // unwrap_or_default：用 Default trait\n    let v: Vec<i32> = "bad".parse().unwrap_or_default();\n    println!("v = {:?}", v);  // v = []\n\n    // expect：像 unwrap 但带自定义消息\n    let ok: Result<i32, &str> = Ok(42);\n    let val = ok.expect("应该成功");\n    println!("val = {}", val);\n}\n```\n\n' +
            '**示例 4：链式错误处理与 map/and_then**\n\n```rust\nfn parse_num(s: &str) -> Result<i32, String> {\n    s.parse::<i32>().map_err(|e| format!("解析错误: {}", e))\n}\n\nfn double(n: i32) -> Result<i32, String> {\n    if n > 1000 {\n        Err("数值过大".to_string())\n    } else {\n        Ok(n * 2)\n    }\n}\n\nfn main() {\n    // map 变换成功值\n    let r1 = parse_num("21").map(|n| n + 1);\n    println!("{:?}", r1);  // Ok(22)\n\n    // and_then 链式返回新 Result\n    let r2 = parse_num("21").and_then(double);\n    println!("{:?}", r2);  // Ok(42)\n\n    // 链式组合多个操作\n    let r3 = parse_num("abc").and_then(double);\n    println!("{:?}", r3);  // Err("解析错误: ...")\n\n    let r4 = parse_num("2000").and_then(double);\n    println!("{:?}", r4);  // Err("数值过大")\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **panic 不可被常规代码捕获**——`catch_unwind` 能捕获但只用于 FFI 边界，不推荐作为错误处理手段。\n' +
            '2. **生产代码不要用 unwrap/expect**——除非你 100% 确信不会失败（如编译期常量）。失败会 panic 导致程序崩溃。\n' +
            '3. **? 操作符要求函数返回 Result**——在返回 `()` 的函数中不能用 `?`。可用 `let _ = r?;` 忽略值但传播错误不适用。\n' +
            '4. **? 会自动转换错误类型**——通过 `From` trait。确保自定义错误实现了 `From` 各底层错误类型，否则编译报错。\n' +
            '5. **Option 也支持 ? 操作符**——`x?` 在 None 时返回 None。常用于链式 Option 解包。\n' +
            '6. **main 函数可返回 Result**——`fn main() -> Result<(), Box<dyn Error>>` 让顶层错误直接导致非零退出，避免手动处理。\n' +
            '7. **release 模式整数溢出不 panic**——会回绕（wrapping）。debug 模式才 panic。需严格检查时用 `checked_add` 等方法。\n' +
            '8. **thiserror / anyhow crate**——`thiserror` 用于库的自定义错误类型（derive 宏简化定义），`anyhow` 用于应用的错误聚合（`Box<dyn Error>` 升级版）。\n\n' +
            '## 实际应用\n\n' +
            '1. **API 开发**：每个请求可能遇到参数解析失败、数据库连接失败、权限不足等。用 `Result` 让错误路径在类型签名可见，`?` 传播简洁。在顶层把 `Result` 转为 HTTP 状态码（200 OK / 400 Bad Request / 500 Internal Error）。\n' +
            '2. **文件 I/O**：读写文件、网络请求都会返回 `io::Result`。用 `?` 传播，在合适层级决定重试或上报。\n' +
            '3. **配置解析**：从环境变量、配置文件读取值时，解析失败用 `Result` 返回，让调用者决定用默认值还是报错。\n' +
            '4. **命令行工具**：`fn main() -> Result<(), Box<dyn Error>>` 让任何 `?` 错误直接优雅退出并打印错误信息。\n' +
            '5. **不变量检查**：用 `assert!` / `assert_eq!` 宏检查前置条件，失败时 panic——这是 bug 而非可恢复错误。\n\n' +
            '## 扩展知识\n\n' +
            '- **panic = abort**：在 Cargo.toml 设置 `panic = "abort"` 可禁用栈展开，panic 时直接终止，减小二进制体积但失去 unwind 能力。\n' +
            '- **catch_unwind**：`std::panic::catch_unwind` 可捕获 panic，主要用于 FFI（C 代码调用 Rust 时不能让 panic 跨边界）。\n' +
            '- **Option 也实现 ?**：`fn foo() -> Option<i32> { let x = some_opt?; Some(x + 1) }`，None 时提前返回 None。\n' +
            '- **try! 宏**：`?` 操作符的前身，Rust 1.39 前使用 `try!(expr)`，现已 deprecated。\n' +
            '- **anyhow crate**：应用层错误处理利器，`anyhow::Result<T>` 自动转换任意错误，附带上下文 `.context("msg")?`。\n' +
            '- **thiserror crate**：库层错误定义利器，`#[derive(Error)]` 自动实现 Display 和 From，减少样板代码。\n' +
            '- **错误 vs 异常**：Rust 的 Result 是值（编译期检查），Java 异常是控制流（运行时抛出）。Rust 无异常开销，且编译器强制处理错误。',
          examples: [
            {
              title: 'panic! 不可恢复错误',
              code: `fn main() {
    let nums = vec![1, 2, 3];
    // nums[10]; // 这会 panic：index out of bounds
    println!("第一个: {}", nums[0]);
    // panic!("手动触发"); // 取消注释会崩溃
    println!("程序正常结束");
}`,
              explanation:
                '数组越界会 panic。注释掉的行如果执行会崩溃。正常输出两行。' +
                'panic 用于不该发生的错误——这是程序 bug，应该修复代码而非运行时处理。',
            },
            {
              title: 'Result 错误传播链',
              code: `fn parse_config(s: &str) -> Result<i32, String> {
    let n: i32 = s.parse()
        .map_err(|_| format!("解析失败: {}", s))?;
    if n < 0 {
        return Err("不能为负数".to_string());
    }
    Ok(n * 2)
}

fn main() {
    match parse_config("21") {
        Ok(n) => println!("配置值: {}", n),
        Err(e) => println!("错误: {}", e),
    }
    match parse_config("abc") {
        Ok(n) => println!("配置值: {}", n),
        Err(e) => println!("错误: {}", e),
    }
}`,
              explanation:
                '? 传播错误，自定义错误检查。第一个返回 Ok(42)，第二个返回 Err。' +
                '输出：配置值: 42，然后 错误: 解析失败: abc',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '函数 divide 返回 Result。成功输出 "结果: 5"，除零输出 "错误: 除零"。',
              starter_code: `fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("除零".to_string())
    } else {
        Ok(a / b)
    }
}

fn main() {
    match divide(10.0, 2.0) {
        Ok(n) => println!("结果: {}", n),
        Err(e) => println!("错误: {}", ___),
    }
}`,
              expected_output: '结果: 5',
              hints: [
                'Err(e) 绑定了错误信息到变量 e',
                '用 e 填充占位符',
                '答案: e',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 unwrap_or 在解析失败时返回默认值 0。输出 "值: 0"。',
              starter_code: `fn main() {
    let n: i32 = "abc".parse::<i32>().___(0);
    println!("值: {}", n);
}`,
              expected_output: '值: 0',
              hints: [
                'unwrap_or 在 Err 时返回默认值',
                'unwrap_or(0) 解析失败返回 0',
                '答案: unwrap_or',
              ],
            },
          ],
          realWorldScenario:
            '在 API 开发中，每个请求可能遇到参数解析失败、数据库连接失败、权限不足等错误。用 Result 让错误路径在类型签名中可见，? 操作符让传播简洁。在 API 顶层把 Result 转换为 HTTP 状态码（200 OK 或 400 Bad Request），实现统一的错误处理中间件。',
        },
      ],
    },

    // ================================================================
    // 第 7 章：进阶主题
    // ================================================================
    {
      id: 'rust-ch7',
      title: '进阶主题',
      order: 6,
      lessons: [
        {
          id: 'rust-ch7-l1',
          title: 'Trait 特征',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'Trait 定义共享行为，类似其他语言的接口（interface）或 Haskell 的 typeclass。' +
            '它声明一组方法签名（可有默认实现），类型通过 `impl Trait for Type` 来"实现"这些方法。' +
            'Trait 是 Rust 实现多态（polymorphism）和抽象（abstraction）的核心机制——组合优于继承。\n\n' +
            'Trait 的关键特性：\n' +
            '- **默认方法**：trait 方法可以有默认实现，实现者可覆盖或直接复用\n' +
            '- **孤儿规则**（orphan rule）：只能为本地类型实现本地 trait，不能为外部类型实现外部 trait（防止冲突）\n' +
            '- **静态分派 vs 动态分派**：trait bound（泛型）是编译期单态化（零开销），`dyn Trait` 是运行时虚表分派（有开销）\n' +
            '- **derive 宏**：通过 `#[derive(Debug, Clone, PartialEq)]` 自动派生常用 trait\n\n' +
            'Trait 让 Rust 既能像动态语言一样灵活抽象，又保持 C 级别的性能。\n\n' +
            '## 语法说明\n\n' +
            '### 定义与实现 Trait\n\n' +
            '```rust\n// 定义 trait\ntrait Describe {\n    fn describe(&self) -> String;           // 必须实现的方法\n    fn name(&self) -> String {              // 默认实现\n        "未命名".to_string()\n    }\n}\n\n// 为类型实现 trait\nstruct Point { x: i32, y: i32 }\n\nimpl Describe for Point {\n    fn describe(&self) -> String {\n        format!("点 ({}, {})", self.x, self.y)\n    }\n    // name() 用默认实现，不覆盖\n}\n```\n\n' +
            '### Trait Bound 约束泛型\n\n' +
            '```rust\nuse std::fmt::Display;\n\n// 方式 1：trait bound\nfn print<T: Display>(x: T) {\n    println!("{}", x);\n}\n\n// 方式 2：impl Trait 语法糖（等价于方式 1）\nfn print2(x: impl Display) {\n    println!("{}", x);\n}\n\n// 多约束用 + 连接\nfn debug_print<T: Display + std::fmt::Debug>(x: T) {\n    println!("{} {:?}", x, x);\n}\n\n// where 子句（约束多时更清晰）\nfn foo<T, U>(t: T, u: U)\nwhere\n    T: Display + Clone,\n    U: std::fmt::Debug,\n{\n    // ...\n}\n```\n\n' +
            '### 常用标准库 Trait\n\n' +
            '| Trait | 方法 | 说明 | 可 derive |\n' +
            '|-------|------|------|-----------|\n' +
            '| `Display` | `fn fmt(&self, f: &mut Formatter) -> Result` | 用户友好输出 `{}` | 否 |\n' +
            '| `Debug` | `fn fmt(&self, f: &mut Formatter) -> Result` | 调试输出 `{:?}` | 是 |\n' +
            '| `Clone` | `fn clone(&self) -> Self` | 深拷贝 | 是 |\n' +
            '| `Copy` | 标记 trait | 位拷贝（栈复制） | 是 |\n' +
            '| `PartialEq` | `fn eq(&self, other: &Self) -> bool` | 相等比较 `==` | 是 |\n' +
            '| `Eq` | 标记 trait（ refinements PartialEq） | 自反性 | 是 |\n' +
            '| `Hash` | `fn hash<H: Hasher>(&self, state: &mut H)` | 哈希 | 是 |\n' +
            '| `Default` | `fn default() -> Self` | 默认值 | 是 |\n' +
            '| `Iterator` | `fn next(&mut self) -> Option<Self::Item>` | 迭代器 | 否 |\n' +
            '| `From`/`Into` | `fn from(T) -> Self` | 类型转换 | 否 |\n' +
            '| `PartialOrd`/`Ord` | `fn cmp(&self, other: &Self) -> Ordering` | 排序比较 | 是 |\n\n' +
            '### Trait Object（动态分派）\n\n' +
            '```rust\n// dyn Trait 是动态分派，运行时通过虚表调用\n// Box<dyn Trait> 是最常见的 trait object\nfn print_all(items: Vec<Box<dyn Display>>) {\n    for item in items {\n        println!("{}", item);\n    }\n}\n\n// &dyn Trait 也可（借用形式）\nfn show(s: &dyn Display) {\n    println!("{}", s);\n}\n```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：定义与实现 Trait（含默认方法）**\n\n```rust\ntrait Animal {\n    fn name(&self) -> String;\n    fn sound(&self) -> String;\n    fn info(&self) -> String {  // 默认实现\n        format!("{} says {}", self.name(), self.sound())\n    }\n}\n\nstruct Dog { name: String }\nstruct Cat { name: String }\n\nimpl Animal for Dog {\n    fn name(&self) -> String { self.name.clone() }\n    fn sound(&self) -> String { "汪汪".to_string() }\n}\n\nimpl Animal for Cat {\n    fn name(&self) -> String { self.name.clone() }\n    fn sound(&self) -> String { "喵".to_string() }\n    fn info(&self) -> String {  // 覆盖默认实现\n        format!("猫咪 {} 发出 {}", self.name(), self.sound())\n    }\n}\n\nfn main() {\n    let d = Dog { name: String::from("旺财") };\n    let c = Cat { name: String::from("咪咪") };\n    println!("{}", d.info());\n    println!("{}", c.info());\n}\n```\n\n' +
            '**示例 2：Trait Bound 泛型函数**\n\n```rust\nuse std::fmt::Display;\n\n// T: PartialOrd 约束让函数适用于任意可比较类型\nfn largest<T: PartialOrd>(list: &[T]) -> &T {\n    let mut max = &list[0];\n    for item in &list[1..] {\n        if item > max {\n            max = item;\n        }\n    }\n    max\n}\n\n// impl Display 语法糖\nfn announce(item: impl Display) {\n    println!(" announcing: {}", item);\n}\n\nfn main() {\n    let nums = vec![3, 1, 4, 1, 5, 9, 2, 6];\n    println!("最大数字: {}", largest(&nums));\n    let words = vec!["banana", "apple", "cherry"];\n    println!("最大单词: {}", largest(&words));\n    announce(42);\n    announce("hello");\n}\n```\n\n' +
            '**示例 3：Trait Object 动态分派**\n\n```rust\nuse std::fmt::Display;\n\n// 用 Box<dyn Display> 存储不同类型\nfn main() {\n    let items: Vec<Box<dyn Display>> = vec![\n        Box::new(42),\n        Box::new("hello"),\n        Box::new(3.14),\n    ];\n    for item in &items {\n        println!("{}", item);  // 动态分派调用\n    }\n}\n```\n\n' +
            '**示例 4：derive 宏自动派生**\n\n```rust\n#[derive(Debug, Clone, PartialEq)]\nstruct User {\n    name: String,\n    age: u32,\n}\n\nfn main() {\n    let u1 = User { name: String::from("小明"), age: 20 };\n    let u2 = u1.clone();  // Clone 派生\n    println!("{:?}", u1);  // Debug 派生\n    println!("相等: {}", u1 == u2);  // PartialEq 派生\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **孤儿规则**：不能为外部类型实现外部 trait。例如不能 `impl MyTrait for i32`（i32 和 MyTrait 都不归你）。可用 newtype 模式绕过：`struct MyI32(i32);` 然后为 MyI32 实现。\n' +
            '2. **默认方法可覆盖**：实现者可以选择覆盖或不覆盖默认方法。不覆盖则直接使用 trait 中的默认实现。\n' +
            '3. **trait bound 是静态分派**：编译期单态化，每个具体类型生成一份代码，零运行时开销但增大二进制。`dyn Trait` 是动态分派，有虚表开销但二进制更小。\n' +
            '4. **`dyn Trait` 要求对象安全**：方法不能返回 `Self`、不能有泛型参数。违反则无法创建 trait object。\n' +
            '5. **derive 不是万能**：`Display`、`Iterator`、`From` 等需要手动实现。derive 只支持 `Debug`、`Clone`、`Copy`、`PartialEq`、`Eq`、`Hash`、`Default`、`PartialOrd`、`Ord` 等。\n' +
            '6. **impl Trait 位置**：参数位置 `fn f(x: impl Trait)` 等价于 trait bound；返回位置 `fn f() -> impl Trait` 是返回抽象类型（实际固定类型，编译器推断）。\n' +
            '7. **关联类型 vs 泛型**：`trait Iter { type Item; fn next(&mut self) -> Option<Self::Item>; }` 用关联类型比泛型更清晰，每个实现只能有一种 Item。\n\n' +
            '## 实际应用\n\n' +
            '1. **插件系统**：定义 `Plugin` trait，不同插件实现它。主程序用 `Vec<Box<dyn Plugin>>` 加载和管理插件，无需重新编译主程序。\n' +
            '2. **Web 框架**：`Handler` trait 让不同函数都能作为路由处理器。`FromRequest` trait 让参数从请求自动提取。\n' +
            '3. **序列化**：`serde::Serialize` / `Deserialize` trait 让任意类型支持 JSON/YAML/TOML 转换。derive 宏自动生成代码。\n' +
            '4. **数据库 ORM**：`Entity` trait 让不同的数据库表映射到 Rust 结构体，`Repository<T: Entity>` 提供通用 CRUD。\n' +
            '5. **测试 mock**：定义 trait 表示依赖接口，测试时用 mock 实现，生产用真实实现。依赖注入通过 trait object 完成。\n\n' +
            '## 扩展知识\n\n' +
            '- **关联类型**：`trait Container { type Item; fn get(&self) -> Self::Item; }` 比 trait 泛型更常用，避免每次标注类型参数。\n' +
            '- **supertrait**：`trait Widget: Display + Clone` 表示 Widget 要求实现者也实现 Display 和 Clone（依赖关系）。\n' +
            '- **newtype 模式**：`struct Meters(i32);` 包装外部类型，绕过孤儿规则为其实现 trait。\n' +
            '- **blanket implementation**：`impl<T: Display> ToString for T` 为所有实现 Display 的类型提供 ToString——标准库大量使用。\n' +
            '- **完全限定语法**：`<Dog as Animal>::sound(&d)` 显式指定 trait，解决方法名冲突。\n' +
            '- **trait alias（nightly）**：`trait DisplayDebug = Display + Debug;` 简化多约束，目前需用 nightly 或宏模拟。\n' +
            '- **Copy vs Clone**：Copy 是标记 trait（隐式位拷贝），Clone 需显式 `.clone()`。实现了 Copy 的类型不能再有 Drop。',
          examples: [
            {
              title: '定义与实现 Trait',
              code: `trait Animal {
    fn name(&self) -> String;
    fn sound(&self) -> String;
    fn info(&self) -> String {
        format!("{} says {}", self.name(), self.sound())
    }
}

struct Dog {
    name: String,
}

impl Animal for Dog {
    fn name(&self) -> String { self.name.clone() }
    fn sound(&self) -> String { "汪汪".to_string() }
}

fn main() {
    let d = Dog { name: String::from("旺财") };
    println!("{}", d.info());
}`,
              explanation:
                'Animal trait 有默认方法 info()。Dog 实现了 name() 和 sound()，自动获得 info()。' +
                '输出：旺财 says 汪汪',
            },
            {
              title: 'Trait bound',
              code: `fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut max = &list[0];
    for item in &list[1..] {
        if item > max {
            max = item;
        }
    }
    max
}

fn main() {
    let nums = vec![3, 1, 4, 1, 5, 9, 2, 6];
    println!("最大: {}", largest(&nums));
    let words = vec!["banana", "apple", "cherry"];
    println!("最大: {}", largest(&words));
}`,
              explanation:
                '`T: PartialOrd` 约束 T 可比较大小。函数对 i32 和 &str 都能工作。' +
                '输出：最大: 9，然后 最大: cherry',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '为 Point 实现 Display trait，输出 "(3, 4)"。',
              starter_code: `use std::fmt;

struct Point { x: i32, y: i32 }

impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "({}, {})", self.x, ___)
    }
}

fn main() {
    let p = Point { x: 3, y: 4 };
    println!("{}", p);
}`,
              expected_output: '(3, 4)',
              hints: [
                '输出格式是 (x, y)',
                'y 字段用 self.y 访问',
                '答案: self.y',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全 trait 方法调用：调用 Animal::sound() 输出 "喵"。',
              starter_code: `trait Animal {
    fn sound(&self) -> String;
}

struct Cat;

impl Animal for Cat {
    fn sound(&self) -> String {
        "喵".to_string()
    }
}

fn main() {
    let c = Cat;
    println!("{}", c.___());
}`,
              expected_output: '喵',
              hints: [
                '调用 trait 定义的方法',
                'sound() 方法返回 "喵"',
                '答案: sound',
              ],
            },
          ],
          realWorldScenario:
            'Trait 是 Rust 实现多态的核心机制。在插件系统中，定义 Plugin trait，不同插件实现它。Web 框架用 Handler trait 让不同的函数都可以作为路由处理器。Trait bound 让泛型函数在保持类型安全的同时支持多种类型，是 Rust 组合优于继承哲学的体现。',
        },
        {
          id: 'rust-ch7-l2',
          title: '泛型（Generics）',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '泛型（Generics）让函数和类型适用于多种具体类型，是 Rust 实现代码复用的核心工具。' +
            '泛型是**参数化多态**（parametric polymorphism）的一种形式——类型本身成为参数。' +
            'Rust 的泛型在编译期通过单态化（monomorphization）展开，为零运行时开销——这是 Rust "零成本抽象"哲学的核心体现。\n\n' +
            '泛型让一份代码服务于 `i32`、`String`、自定义结构体等多种类型，避免为每种类型复制粘贴。' +
            '标准库中 `Vec<T>`、`HashMap<K, V>`、`Option<T>`、`Result<T, E>` 都是泛型类型。' +
            '配合 trait bound，泛型在保持复用性的同时确保类型安全——编译器保证只传入满足约束的类型。\n\n' +
            '## 语法说明\n\n' +
            '### 泛型函数\n\n' +
            '```rust\n// T 是类型参数\nfn first<T>(items: &[T]) -> Option<&T> {\n    if items.is_empty() { None } else { Some(&items[0]) }\n}\n\n// 调用：类型参数由编译器推断\nlet n = first(&[1, 2, 3]);           // T = i32\nlet s = first(&["a", "b"]);         // T = &str\n\n// turbofish 语法显式指定类型\nlet n = first::<i32>(&[1, 2, 3]);\n```\n\n' +
            '### 泛型结构体\n\n' +
            '```rust\n// 单类型参数：x 和 y 必须同类型\nstruct Point<T> {\n    x: T,\n    y: T,\n}\n\n// 多类型参数：x 和 y 可不同类型\nstruct Pair<A, B> {\n    first: A,\n    second: B,\n}\n\n// 方法实现\nimpl<T> Point<T> {\n    fn x(&self) -> &T { &self.x }\n}\n\n// 特化：只为 Point<i32> 实现额外方法\nimpl Point<i32> {\n    fn sum(&self) -> i32 { self.x + self.y }\n}\n```\n\n' +
            '### 泛型枚举\n\n' +
            '```rust\n// 标准库的经典泛型枚举\nenum Option<T> {\n    Some(T),\n    None,\n}\n\nenum Result<T, E> {\n    Ok(T),\n    Err(E),\n}\n\n// 自定义泛型枚举\nenum Tree<T> {\n    Leaf(T),\n    Node(Box<Tree<T>>, Box<Tree<T>>),\n}\n```\n\n' +
            '### Trait Bound 约束\n\n' +
            '| 语法 | 说明 |\n' +
            '|------|------|\n' +
            '| `fn f<T: Display>(x: T)` | 单约束 |\n' +
            '| `fn f<T: Display + Clone>(x: T)` | 多约束用 + 连接 |\n' +
            '| `fn f<T, U>(t: T, u: U) where T: Display, U: Clone` | where 子句（约束多时更清晰） |\n' +
            '| `fn f(x: impl Display)` | impl Trait 语法糖 |\n' +
            '| `fn f() -> impl Trait` | 返回抽象类型（实际固定） |\n\n' +
            '### 单态化（Monomorphization）\n\n' +
            '编译器为每个具体类型生成专用代码：\n' +
            '```\nfirst::<i32>     → fn first_i32(items: &[i32]) -> Option<&i32>\nfirst::<&str>    → fn first_str(items: &[&str]) -> Option<&&str>\n```\n' +
            '结果：零运行时开销（与手写专用代码一样快），代价是二进制体积增大（每个类型一份代码）。\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：泛型函数**\n\n```rust\nfn first<T>(items: &[T]) -> Option<&T> {\n    if items.is_empty() {\n        None\n    } else {\n        Some(&items[0])\n    }\n}\n\nfn main() {\n    let nums = [10, 20, 30];\n    let strs = ["a", "b", "c"];\n    println!("数字首个: {:?}", first(&nums));\n    println!("字符串首个: {:?}", first(&strs));\n    let empty: [i32; 0] = [];\n    println!("空数组: {:?}", first(&empty));\n}\n```\n\n' +
            '**示例 2：泛型结构体与方法**\n\n```rust\nstruct Point<T> {\n    x: T,\n    y: T,\n}\n\n// 对所有类型 T 可用的方法\nimpl<T: std::fmt::Display + std::ops::Add<Output = T>> Point<T> {\n    fn show(&self) -> String {\n        format!("({}, {})", self.x, self.y)\n    }\n    fn sum(&self) -> T {\n        self.x + self.y\n    }\n}\n\n// 特化：只为 Point<i32> 实现\nimpl Point<i32> {\n    fn double(&self) -> Point<i32> {\n        Point { x: self.x * 2, y: self.y * 2 }\n    }\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };\n    let p2 = Point { x: 1.5, y: 2.5 };\n    println!("{}", p1.show());\n    println!("和: {}", p1.sum());\n    println!("{}", p2.show());\n    println!("浮点和: {}", p2.sum());\n    let p3 = p1.double();\n    println!("双倍: {}", p3.show());\n}\n```\n\n' +
            '**示例 3：多类型参数**\n\n```rust\nstruct Pair<A, B> {\n    first: A,\n    second: B,\n}\n\nimpl<A: std::fmt::Display, B: std::fmt::Display> Pair<A, B> {\n    fn describe(&self) -> String {\n        format!("({}, {})", self.first, self.second)\n    }\n}\n\nfn main() {\n    let p = Pair { first: 42, second: "hello" };\n    let q = Pair { first: 3.14, second: true };\n    let r = Pair { first: String::from("x"), second: 100 };\n    println!("{}", p.describe());\n    println!("{}", q.describe());\n    println!("{}", r.describe());\n}\n```\n\n' +
            '**示例 4：泛型 + Trait Bound 实现通用容器**\n\n```rust\nuse std::fmt::Display;\n\n// 泛型栈，支持任意类型\nstruct Stack<T> {\n    items: Vec<T>,\n}\n\nimpl<T> Stack<T> {\n    fn new() -> Self {\n        Stack { items: Vec::new() }\n    }\n    fn push(&mut self, item: T) {\n        self.items.push(item);\n    }\n    fn pop(&mut self) -> Option<T> {\n        self.items.pop()\n    }\n    fn is_empty(&self) -> bool {\n        self.items.is_empty()\n    }\n}\n\n// 只为可显示的 T 实现 print\nimpl<T: Display> Stack<T> {\n    fn print(&self) {\n        for item in &self.items {\n            print!("{} ", item);\n        }\n        println!();\n    }\n}\n\nfn main() {\n    let mut s: Stack<i32> = Stack::new();\n    s.push(1);\n    s.push(2);\n    s.push(3);\n    s.print();\n    println!("弹出: {:?}", s.pop());\n    s.print();\n\n    let mut str_stack: Stack<&str> = Stack::new();\n    str_stack.push("hello");\n    str_stack.push("world");\n    str_stack.print();\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **单态化增大二进制**：每个具体类型生成一份代码。若泛型函数对几十种类型使用，二进制会明显增大。可用 `dyn Trait` 动态分派减小体积（但牺牲速度）。\n' +
            '2. **trait bound 限制能力**：`fn f<T>(x: T)` 中 T 是任意类型，几乎不能对 T 做任何操作。加 `T: Display` 才能打印，`T: Clone` 才能 clone。约束越多能力越强但通用性越低。\n' +
            '3. **特化（specialization）目前不稳定**：`impl Point<i32>` 为特定类型实现额外方法可行，但完整的特化机制（基于 trait bound 优先级）仍在 nightly。\n' +
            '4. **const generics**：`struct Array<T, const N: usize>` 支持编译期常量泛型参数（Rust 1.51+），让固定大小数组类型更灵活。\n' +
            '5. **turbofish 语法**：`::<T>` 用于消除类型推断歧义。常见场景：`"5".parse::<i32>()`、`collect::<Vec<_>>()`。\n' +
            '6. **泛型参数命名**：单字母 `T`、`U`、`K`、`V` 是惯例。多个相关参数可用描述性名字如 `Key`、`Value`，但 Rust 社区偏好简短大写字母。\n' +
            '7. **impl Trait 返回值**：`fn f() -> impl Trait` 返回的是某个具体类型（编译器推断），不能在不同分支返回不同具体类型。\n\n' +
            '## 实际应用\n\n' +
            '1. **标准库容器**：`Vec<T>`、`HashMap<K, V>`、`HashSet<T>`、`VecDeque<T>`、`LinkedList<T>` 全是泛型。没有泛型就要为每种类型写一遍容器。\n' +
            '2. **缓存系统**：`Cache<K, V>` 支持不同键值类型——字符串到 JSON、URL 到响应体、用户 ID 到会话对象。\n' +
            '3. **ORM / 数据访问**：`Repository<T: Entity>` 提供通用 CRUD，T 是实体类型。一份代码服务所有表。\n' +
            '4. **异步运行时**：`Future<T>`、`Stream<T>`、`Sink<T>` 都是泛型，让异步抽象适用于任意结果类型。\n' +
            '5. **错误处理**：`Result<T, E>` 的泛型让错误处理既能容纳任意成功值，又能容纳任意错误类型。\n\n' +
            '## 扩展知识\n\n' +
            '- **单态化 vs 装箱**：单态化是零开销但增二进制；`Box<dyn Trait>` 是动态分派减二进制但有虚表开销。二选一权衡。\n' +
            '- **const generics**：`fn init<T, const N: usize>() -> [T; N]` 让函数接受编译期常量参数，用于固定大小数组操作。\n' +
            '- **关联类型 vs 泛型参数**：`trait Iterator { type Item; }` 用关联类型比 `trait Iterator<T>` 更清晰，每个实现只有一种 Item。\n' +
            '- **生命周期也是泛型参数**：`fn f<\'a>(x: &\'a str)` 中 `\'a` 是生命周期参数，与类型参数并列。\n' +
            '- **higher-ranked types (HRTB)**：`for<\'a> fn(&\'a str)` 表示对任意生命周期都成立的函数，目前语法受限。\n' +
            '- **泛型约束的 where 子句**：约束复杂时用 `where T: Display + Clone, U: Into<String>` 比内联 `<T: Display + Clone, U: Into<String>>` 更易读。\n' +
            '- **C++ 模板 vs Rust 泛型**：C++ 模板是 duck typing（编译期），Rust 泛型需显式 trait bound。Rust 错误信息更友好。',
          examples: [
            {
              title: '泛型函数',
              code: `fn first<T>(items: &[T]) -> Option<&T> {
    if items.is_empty() {
        None
    } else {
        Some(&items[0])
    }
}

fn main() {
    let nums = [10, 20, 30];
    let strs = ["a", "b", "c"];
    println!("数字首个: {:?}", first(&nums));
    println!("字符串首个: {:?}", first(&strs));
    let empty: [i32; 0] = [];
    println!("空数组: {:?}", first(&empty));
}`,
              explanation:
                'T 是类型参数，对任意类型切片都返回首个元素的引用。' +
                '同一份代码处理 i32 数组和 &str 数组。' +
                '输出：数字首个: Some(10)、字符串首个: Some("a")、空数组: None。',
            },
            {
              title: '泛型结构体',
              code: `struct Point<T> {
    x: T,
    y: T,
}

impl<T: std::fmt::Display> Point<T> {
    fn show(&self) -> String {
        format!("({}, {})", self.x, self.y)
    }
}

fn main() {
    let p1 = Point { x: 1, y: 2 };
    let p2 = Point { x: 1.5, y: 2.5 };
    println!("{}", p1.show());
    println!("{}", p2.show());
}`,
              explanation:
                '`Point<T>` 让 x 和 y 共享类型 T。`impl<T: Display>` 表示 T 必须可显示，' +
                '这样 show() 才能用 format! 格式化。p1 是 Point<i32>，p2 是 Point<f64>。' +
                '输出：(1, 2) 和 (1.5, 2.5)。',
            },
            {
              title: '多类型参数',
              code: `struct Pair<A, B> {
    first: A,
    second: B,
}

fn main() {
    let p = Pair { first: 42, second: "hello" };
    let q = Pair { first: 3.14, second: true };
    println!("{} {}", p.first, p.second);
    println!("{} {}", q.first, q.second);
}`,
              explanation:
                '`Pair<A, B>` 允许两个字段类型不同。p 是 Pair<i32, &str>，' +
                'q 是 Pair<f64, bool>。泛型让一个结构体容纳任意类型的组合。' +
                '输出：42 hello 和 3.14 true。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全泛型函数 second，返回切片第二个元素的引用。对 [1,2,3] 返回 2。',
              starter_code: `fn second<T>(items: &[T]) -> &T {
    &items[___]
}

fn main() {
    let v = [1, 2, 3];
    println!("{}", second(&v));
}`,
              expected_output: '2',
              hints: [
                '数组索引从 0 开始',
                '第二个元素索引是 1',
                '答案: 1',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全 Pair 字段访问，输出 "42 hello"。',
              starter_code: `struct Pair<A, B> {
    first: A,
    second: B,
}

fn main() {
    let p = Pair { first: 42, second: "hello" };
    println!("{} {}", p.___, p.second);
}`,
              expected_output: '42 hello',
              hints: [
                '访问 first 字段',
                '结构体字段用 . 访问',
                '答案: first',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 turbofish 语法显式指定类型，让 parse 返回 i32。补全 :::i32 中的类型参数。',
              starter_code: `fn main() {
    let n: i32 = "100".parse::<___>().unwrap();
    println!("n = {}", n);
}`,
              expected_output: 'n = 100',
              hints: [
                'turbofish 语法是 ::<类型>',
                '我们想要 i32 类型',
                '答案: i32',
              ],
            },
          ],
          realWorldScenario:
            '泛型在 Rust 标准库无处不在：Vec<T>、HashMap<K,V>、Option<T>、Result<T,E> 都是泛型。在真实项目中，缓存系统常用泛型 `Cache<K, V>` 支持不同键值类型；ORM 库用泛型让查询构建器适配不同实体类型。泛型结合 trait bound 让你在写通用代码时仍享受编译期类型安全，是 Rust"零成本抽象"哲学的最佳体现。',
        },
        {
          id: 'rust-ch7-l3',
          title: '生命周期（Lifetimes）',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '生命周期（lifetimes）是 Rust 编译器用来追踪引用有效范围的标记。' +
            '每个引用都有生命周期——从它被创建到它最后一次被使用的范围。' +
            '生命周期是 Rust 内存安全的核心机制之一，确保引用永远不会悬空（dangling reference）——不会指向已被释放的内存。\n\n' +
            '生命周期与所有权紧密相关：当所有者被销毁时，它的引用必须已经不再使用。' +
            '大多数时候生命周期由编译器自动推断（lifetime elision），但当函数返回引用时，' +
            '编译器无法判断返回值的生命周期与哪个输入相关，这时需要显式标注。\n\n' +
            '生命周期标注用撇号语法：`\'a`、`\'b`、`\'output` 等。标注本身不改变生命周期——' +
            '它只是声明"这些引用的生命周期之间存在关系"。生命周期是编译期概念，运行时零开销。\n\n' +
            '## 语法说明\n\n' +
            '### 生命周期标注基础\n\n' +
            '```rust\n// \'a 是生命周期参数\nfn longest<\'a>(x: &\'a str, y: &\'a str) -> &\'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\n// 含泛型 + 生命周期\nfn first_word<\'a>(s: &\'a str) -> &\'a str {\n    // ...\n    s\n}\n\n// 多个生命周期参数\nfn complicated<\'a, \'b>(x: &\'a str, y: &\'b str) -> &\'a str {\n    x  // 返回值生命周期与 x 绑定，与 y 无关\n}\n```\n\n' +
            '### 生命周期省略规则（Elision Rules）\n\n' +
            '编译器按以下三条规则自动推断生命周期，能唯一确定时可省略标注：\n\n' +
            '| 规则 | 说明 | 示例 |\n' +
            '|------|------|------|\n' +
            '| 规则 1 | 每个输入引用获得独立生命周期 | `fn f(x: &str, y: &str)` → `fn f<\'a, \'b>(x: &\'a str, y: &\'b str)` |\n' +
            '| 规则 2 | 只有一个输入引用时，输出用它的生命周期 | `fn f(x: &str) -> &str` → `fn f<\'a>(x: &\'a str) -> &\'a str` |\n' +
            '| 规则 3 | 方法有 `&self`/`&mut self` 时，输出用 self 的生命周期 | `fn f(&self, x: &str) -> &str` → 输出绑定 self |\n\n' +
            '当规则无法唯一推断时（如有多个输入引用但无 self），编译器报 "missing lifetime specifier" 错误，需手动标注。\n\n' +
            '### 结构体持有引用\n\n' +
            '```rust\n// 结构体持有引用必须标注生命周期\nstruct Excerpt<\'a> {\n    part: &\'a str,  // part 不能比 Excerpt 实例活得久\n}\n\nimpl<\'a> Excerpt<\'a> {\n    fn get(&self) -> &\'a str {  // 返回值与结构体生命周期一致\n        self.part\n    }\n}\n```\n\n' +
            '### \'static 生命周期\n\n' +
            '`\'static` 是特殊生命周期，表示引用在整个程序运行期间有效。所有字符串字面量都是 `&\'static str`——它们被编译进二进制段。\n' +
            '```rust\nlet s: &\'static str = "我活在整个程序期间";\n```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：返回较长的字符串**\n\n```rust\nfn longest<\'a>(x: &\'a str, y: &\'a str) -> &\'a str {\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}\n\nfn main() {\n    let s1 = String::from("长字符串");\n    let s2 = String::from("短");\n    let result = longest(s1.as_str(), s2.as_str());\n    println!("较长: {}", result);\n}\n```\n\n' +
            '**示例 2：结构体持有引用**\n\n```rust\nstruct Excerpt<\'a> {\n    part: &\'a str,\n}\n\nimpl<\'a> Excerpt<\'a> {\n    fn new(text: &\'a str) -> Excerpt<\'a> {\n        Excerpt { part: text }\n    }\n    fn first_line(&self) -> &\'a str {\n        self.part.split(\'\\n\').next().unwrap_or("")\n    }\n}\n\nfn main() {\n    let novel = String::from("第一行\\n第二行\\n第三行");\n    let excerpt = Excerpt::new(novel.as_str());\n    println!("首行: {}", excerpt.first_line());\n    println!("全文: {}", excerpt.part);\n}\n```\n\n' +
            '**示例 3：生命周期省略**\n\n```rust\n// 符合省略规则 2：只有一个输入引用\nfn first_word(s: &str) -> &str {\n    let bytes = s.as_bytes();\n    for (i, &b) in bytes.iter().enumerate() {\n        if b == b\' \' {\n            return &s[..i];\n        }\n    }\n    s\n}\n\nfn main() {\n    let sentence = "hello world rust";\n    let word = first_word(sentence);\n    println!("首个单词: {}", word);\n}\n```\n\n' +
            '**示例 4：多个生命周期参数**\n\n```rust\n// 返回值生命周期与 x 绑定，与 y 无关\nfn announce<\'a, \'b>(x: &\'a str, y: &\'b str) -> &\'a str {\n    println!("y 是: {}", y);\n    x\n}\n\nfn main() {\n    let x = String::from("hello");\n    let result;\n    {\n        let y = String::from("world");\n        result = announce(x.as_str(), y.as_str());\n        println!("result: {}", result);\n    }\n    // result 仍可用，因为它的生命周期与 x 绑定，与 y 无关\n    println!("result 仍可用: {}", result);\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **生命周期标注不改变实际生命周期**——它只是声明引用之间的关系。`\'a` 不是"让引用活更久"，而是"约束这些引用的关系"。\n' +
            '2. **标注命名随意**——`\'a`、`\'b` 是惯例，但可用描述性名字如 `\'input`、`\'output`。函数内通常用 `\'a`，库的公共 API 可用描述性名字。\n' +
            '3. **\'static 不是"想要"就用的**——它要求引用在整个程序期间有效，通常只用于字符串字面量或全局静态数据。不要用 `&\'static` 来"绕过"生命周期错误。\n' +
            '4. **结构体持有引用需谨慎**——会让结构体与引用的数据绑定，降低灵活性。优先用 `String`、`Box<T>` 等拥有所有权的类型。只在零拷贝性能关键时用引用。\n' +
            '5. **生命周期协变**——`&\'long str` 可以赋值给 `&\'short str`（长可缩为短），但反之不行。这保证了引用不会意外活得太久。\n' +
            '6. **闭包捕获与生命周期**——闭包捕获引用时也有生命周期问题。`move` 闭包获取所有权，避免生命周期复杂性。\n' +
            '7. **生命周期与 trait object**——`Box<dyn Trait + \'a>` 表示 trait object 的生命周期不超过 `\'a`。默认是 `\'static`。\n\n' +
            '## 实际应用\n\n' +
            '1. **解析器**：JSON/XML/SQL 解析器常返回指向输入缓冲区的 `&str`，零拷贝但需生命周期标注确保解析结果不超出输入生命周期。`serde_json::from_str` 的零拷贝模式就依赖生命周期。\n' +
            '2. **Web 框架**：请求处理器拿到的请求数据引用需在请求处理期间有效。框架用生命周期确保 handler 不会持有超出请求的数据引用。\n' +
            '3. **迭代器**：`Iter<\'a, T>` 持有对底层数据的引用，生命周期标注确保迭代器不超过数据所有者。`slice::iter()` 返回 `Iter<\'a, T>`。\n' +
            '4. **缓存键**：缓存 `HashMap<&\'a str, V>` 中键引用需在缓存期间有效，通常用 `String` 拥有所有权更安全。\n' +
            '5. **FFI（外部函数接口）**：与 C 交互时，C 指针的生命周期需手动管理。Rust 用生命周期标注表达 C 库的借用契约。\n\n' +
            '## 扩展知识\n\n' +
            '- **\'static 的含义**：`\'static` 表示引用活在整个程序期间。字符串字面量、全局 static 变量、用 `Box::leak` 泄漏的数据都是 `\'static`。\n' +
            '- **生命周期型变（variance）**：`&\'a T` 对 \'a 是协变的（长可缩为短），`&\'a mut T` 也是协变的。`fn(&\'a str)` 对 \'a 是逆变的。这是类型安全的数学基础。\n' +
            '- **生命周期省略的边界**：当函数有多个输入引用且返回引用时，省略规则无法确定，必须手动标注。这是初学者最常遇到的编译错误。\n' +
            '- **Higher-Ranked Trait Bounds (HRTB)**：`for<\'a>` 表示对所有生命周期成立。`fn(&\'a str) -> &\'a str` 用 HRTB 写成 `for<\'a> fn(&\'a str) -> &\'a str`。\n' +
            '- **生命周期与 async**：异步函数中跨 `.await` 持有引用较复杂，常需 `\'static` 或 `Arc`。这是 async Rust 的难点之一。\n' +
            '- **NLL（Non-Lexical Lifetimes）**：Rust 2018+ 引入，生命周期不再严格按词法作用域，而是按实际最后使用点。让很多代码无需手动标注。\n' +
            '- **Pin 与自引用**：自引用结构（如链表节点）需 `Pin` 配合生命周期，防止 move 后引用失效。async/await 生成的 Future 常含自引用。',
          examples: [
            {
              title: '返回较长的字符串',
              code: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = String::from("长字符串");
    let s2 = String::from("短");
    let result = longest(s1.as_str(), s2.as_str());
    println!("较长: {}", result);
}`,
              explanation:
                '`\'a` 标注声明 x、y、返回值共享同一生命周期。' +
                '编译器检查：result 的使用范围不能超过 s1 和 s2。' +
                '输出：较长: 长字符串。',
            },
            {
              title: '结构体持有引用',
              code: `struct Excerpt<'a> {
    part: &'a str,
}

fn main() {
    let novel = String::from("我叫小明。我学Rust。");
    let first_sentence;
    {
        let words = novel.as_str();
        first_sentence = Excerpt { part: words.split('。').next().unwrap() };
    }
    println!("节选: {}", first_sentence.part);
}`,
              explanation:
                'Excerpt 持有 &\'a str，意味着它不能比 part 引用的数据活得更久。' +
                'novel 在 main 作用域内存活足够久，所以合法。' +
                '输出：节选: 我叫小明。',
            },
            {
              title: '生命周期省略',
              code: `fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();
    for (i, &b) in bytes.iter().enumerate() {
        if b == b' ' {
            return &s[..i];
        }
    }
    s
}

fn main() {
    let sentence = "hello world rust";
    let word = first_word(sentence);
    println!("首个单词: {}", word);
}`,
              explanation:
                '此函数符合省略规则——只有一个输入引用 &str，' +
                '编译器自动推断返回 &str 的生命周期与输入相同，无需手动标注。' +
                '输出：首个单词: hello。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '补全 longest 函数的返回：当 x 不比 y 长时返回 y。',
              starter_code: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        ___
    }
}

fn main() {
    println!("{}", longest("ab", "xyz"));
}`,
              expected_output: 'xyz',
              hints: [
                'else 分支应返回较短的 y',
                '直接返回引用 y',
                '答案: y',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全结构体生命周期标注，使 part 字段持有字符串切片引用。',
              starter_code: `struct Excerpt<___> {
    part: &'a str,
}

fn main() {
    let s = String::from("hello");
    let e = Excerpt { part: s.as_str() };
    println!("{}", e.part);
}`,
              expected_output: 'hello',
              hints: [
                '结构体需要生命周期参数',
                '生命周期用撇号 a 表示',
                '答案: \'a',
              ],
            },
            {
              type: 'output-match',
              prompt: '补全切片语法，返回字符串 "hello world" 的前 5 个字符 "hello"。',
              starter_code: `fn main() {
    let s = "hello world";
    let prefix = &s[..___];
    println!("{}", prefix);
}`,
              expected_output: 'hello',
              hints: [
                '前 5 个字符的索引范围是 0..5',
                '切片 ..5 表示从开头到索引 5（不含）',
                '答案: 5',
              ],
            },
          ],
          realWorldScenario:
            '生命周期在解析器、编译器、文本处理库中极为常见。例如写一个 JSON 解析器，希望返回的 &str 直接指向输入缓冲区而非拷贝——这需要生命周期标注确保解析结果不超出输入生命周期。Web 框架的请求处理器也大量使用生命周期，确保 handler 拿到的请求数据引用在请求处理期间有效。生命周期让 Rust 在零拷贝的同时保证内存安全，这是其他 GC 语言无法实现的优势。',
        },
        {
          id: 'rust-ch7-l4',
          title: '智能指针（Smart Pointers）',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '智能指针（smart pointer）是指不仅持有数据，还拥有额外行为和所有权语义的类型。' +
            '与普通引用（`&T`）不同，智能指针**拥有**它指向的数据——当指针被销毁时，数据也被释放（Drop trait）。' +
            '智能指针通常实现了 `Deref`（解引用）和 `Drop`（清理）trait。\n\n' +
            'Rust 最常见的智能指针：\n' +
            '- `Box<T>`：堆分配，单一所有者\n' +
            '- `Rc<T>`：引用计数，多重所有权（单线程）\n' +
            '- `Arc<T>`：原子引用计数，多重所有权（多线程）\n' +
            '- `RefCell<T>`：内部可变性，运行时借用检查（单线程）\n' +
            '- `Mutex<T>` / `RwLock<T>`：内部可变性，线程安全\n' +
            '- 常见组合：`Rc<RefCell<T>>`（多重所有权 + 可变内部）、`Arc<Mutex<T>>`（线程安全共享 + 可变）\n\n' +
            '智能指针是 Rust 从初学者迈向中级的关键概念，它们让你在保持内存安全的同时表达复杂的数据共享模式。\n\n' +
            '## 语法说明\n\n' +
            '### Box<T> 堆分配\n\n' +
            '```rust\n// 创建 Box\nlet b = Box::new(5);\nprintln!("{}", b);       // 自动解引用\nprintln!("{}", *b);      // 显式解引用\n\n// 转移所有权\nlet b2 = b;  // b 失效\nprintln!("{}", b2);\n\n// trait object\nlet animals: Vec<Box<dyn Animal>> = vec![\n    Box::new(Dog),\n    Box::new(Cat),\n];\n```\n\n' +
            '### Rc<T> 引用计数\n\n' +
            '```rust\nuse std::rc::Rc;\n\nlet a = Rc::new(String::from("共享"));\nlet b = Rc::clone(&a);  // 计数 +1，不复制数据\nlet c = Rc::clone(&a);  // 计数 +1\nprintln!("计数: {}", Rc::strong_count(&a));  // 3\n// b, c 离开作用域时计数 -1\n// a 离开作用域时计数归 0，数据释放\n```\n\n' +
            '### RefCell<T> 内部可变性\n\n' +
            '```rust\nuse std::cell::RefCell;\n\nlet cell = RefCell::new(5);\n\n// 不可变借用\n{\n    let r = cell.borrow();\n    println!("{}", *r);\n}  // r 离开作用域，借用释放\n\n// 可变借用\n{\n    let mut w = cell.borrow_mut();\n    *w += 10;\n    println!("{}", *w);\n}\n```\n\n' +
            '### 智能指针对比表\n\n' +
            '| 指针 | 所有权 | 可变性 | 线程安全 | 借用检查 | 用途 |\n' +
            '|------|--------|--------|----------|----------|------|\n' +
            '| `Box<T>` | 单一 | 不可变（需 &mut） | 是 | 编译期 | 堆分配、递归类型、trait object |\n' +
            '| `Rc<T>` | 多重 | 不可变 | 否 | 编译期 | 图/树结构共享 |\n' +
            '| `Arc<T>` | 多重 | 不可变 | 是 | 编译期 | 跨线程共享 |\n' +
            '| `RefCell<T>` | 单一 | 内部可变 | 否 | 运行期 | 单线程内部可变性 |\n' +
            '| `Mutex<T>` | 单一 | 内部可变 | 是 | 运行期 | 跨线程可变共享 |\n' +
            '| `RwLock<T>` | 单一 | 内部可变 | 是 | 运行期 | 多读少写场景 |\n' +
            '| `Rc<RefCell<T>>` | 多重 | 内部可变 | 否 | 运行期 | 复杂数据结构（如双向链表） |\n' +
            '| `Arc<Mutex<T>>` | 多重 | 内部可变 | 是 | 运行期 | 线程安全可变共享 |\n\n' +
            '### Deref 与 Drop trait\n\n' +
            '```rust\nuse std::ops::Deref;\n\nstruct MyBox<T>(T);\n\nimpl<T> Deref for MyBox<T> {\n    type Target = T;\n    fn deref(&self) -> &T { &self.0 }\n}\n\nimpl<T> Drop for MyBox<T> {\n    fn drop(&mut self) {\n        println!("释放 MyBox");\n    }\n}\n```\n\n' +
            '## 多个代码示例\n\n' +
            '**示例 1：Box 与递归类型**\n\n```rust\nenum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nuse List::{Cons, Nil};\n\nfn sum(l: &List) -> i32 {\n    match l {\n        Cons(v, next) => v + sum(next),\n        Nil => 0,\n    }\n}\n\nfn main() {\n    let list = Cons(1, Box::new(Cons(2, Box::new(Cons(3, Box::new(Nil))))));\n    println!("链表和: {}", sum(&list));\n    let b = Box::new(5);\n    println!("b = {}", b);\n}\n```\n\n' +
            '**示例 2：Box 基础与所有权转移**\n\n```rust\nfn main() {\n    let x = Box::new(42);\n    println!("x = {}", x);\n    let y = *x + 8;  // 解引用取值\n    println!("y = {}", y);\n    let z = x;       // 转移所有权，x 失效\n    println!("z = {}", z);\n    // println!("{}", x); // 错误：x 已被移动\n}\n```\n\n' +
            '**示例 3：Rc 多重所有权**\n\n```rust\nuse std::rc::Rc;\n\nfn main() {\n    let a = Rc::new(String::from("共享数据"));\n    println!("计数: {}", Rc::strong_count(&a));\n\n    let b = Rc::clone(&a);\n    println!("计数: {}", Rc::strong_count(&a));\n\n    {\n        let c = Rc::clone(&a);\n        println!("计数: {}", Rc::strong_count(&a));\n        println!("c = {}", c);\n    }\n    println!("计数: {}", Rc::strong_count(&a));\n    println!("a = {}, b = {}", a, b);\n}\n```\n\n' +
            '**示例 4：Rc<RefCell<T>> 实现可变共享**\n\n```rust\nuse std::rc::Rc;\nuse std::cell::RefCell;\n\nfn main() {\n    let shared = Rc::new(RefCell::new(0));\n    let a = Rc::clone(&shared);\n    let b = Rc::clone(&shared);\n\n    // 多个所有者修改同一份数据\n    *a.borrow_mut() += 10;\n    *b.borrow_mut() += 5;\n\n    println!("最终值: {}", shared.borrow());\n}\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **Box 几乎零开销**——只有一次堆分配和一次解引用间接。不要担心用 Box 影响性能。\n' +
            '2. **Rc 不是线程安全的**——不能跨线程发送 `Rc<T>`（未实现 `Send`）。多线程用 `Arc<T>`（原子操作，略慢）。\n' +
            '3. **RefCell 运行时借用检查**——`borrow()` 和 `borrow_mut()` 冲突时会 panic，而非编译错误。例如已有 borrow 时再 borrow_mut 会 panic。\n' +
            '4. **循环引用导致内存泄漏**——`Rc` 互相引用形成环时计数永不归零，数据永不释放。用 `Weak<T>`（弱引用，不增加计数）打破环。\n' +
            '5. **Box<dyn Trait> 是 trait object**——动态分派有虚表开销。性能关键时考虑泛型（静态分派）替代。\n' +
            '6. **RefCell 不能 Send**——和 Rc 一样只用于单线程。多线程内部可变性用 `Mutex<T>` 或 `RwLock<T>`。\n' +
            '7. **Deref 强制转换**——`&Box<String>` 可自动转为 `&String` 再转为 `&str`，链式 Deref 让 API 更顺滑。\n' +
            '8. **Drop 顺序确定**——变量按声明逆序 drop。智能指针嵌套时，内层先 drop。\n\n' +
            '## 实际应用\n\n' +
            '1. **递归数据结构**：链表、树、图用 `Box` 实现递归类型。`enum Tree { Node(Box<Tree>, Box<Tree>), Leaf }`。\n' +
            '2. **图结构**：社交网络好友关系用 `Rc<RefCell<Node>>` 实现节点多重引用和可变。`Weak` 避免循环引用泄漏。\n' +
            '3. **观察者模式**：多个观察者用 `Rc<RefCell<Observer>>` 共享可变状态。事件触发时遍历观察者通知。\n' +
            '4. **trait object 集合**：`Vec<Box<dyn Plugin>>` 存储不同插件类型，运行时动态调用。\n' +
            '5. **线程安全共享**：`Arc<Mutex<SharedState>>` 是多线程共享可变状态的标准模式。Web 服务器的连接池常用此模式。\n' +
            '6. **惰性初始化**：`RefCell<Option<T>>` 实现首次访问时初始化的模式（lazy initialization）。\n\n' +
            '## 扩展知识\n\n' +
            '- **DerefMut trait**：可变解引用，`*x = ...` 赋值时调用。`Box<T>`、`RefCell<T>` 实现了 DerefMut。\n' +
            '- **Weak<T>**：弱引用，不增加 strong_count。`upgrade()` 返回 `Option<Rc<T>>`。用于打破循环引用。\n' +
            '- **Cell<T>**：`Cell<T>` 是 `RefCell<T>` 的简化版，只支持 Copy 类型，用 `get()`/`set()` 操作，无借用检查开销。\n' +
            '- **OnceCell<T> / OnceLock<T>**：一次性初始化的容器，Rust 1.70+ 进入标准库，替代 lazy_static。\n' +
            '- **Cow<T>**：写时克隆智能指针，`Cow<\'a, str>` 可以是 `&\'a str` 或 `String`，零拷贝直到需要修改。\n' +
            '- **Pin<P>**：保证指针指向的数据不会被 move。async/await 生成的 Future 需 Pin 因为含自引用。\n' +
            '- **unsafe 智能指针**：`UnsafeCell<T>` 是 RefCell 的底层，`*mut T` 裸指针需 unsafe 操作。通常无需直接使用。',
          examples: [
            {
              title: 'Box 与递归类型',
              code: `enum List {
    Cons(i32, Box<List>),
    Nil,
}

use List::{Cons, Nil};

fn sum(l: &List) -> i32 {
    match l {
        Cons(v, next) => v + sum(next),
        Nil => 0,
    }
}

fn main() {
    let list = Cons(1, Box::new(Cons(2, Box::new(Cons(3, Box::new(Nil))))));
    println!("链表和: {}", sum(&list));
    let b = Box::new(5);
    println!("b = {}", b);
}`,
              explanation:
                'Box::new 把值放到堆上。递归类型 List 必须用 Box 包裹——' +
                '否则编译器无法知道类型大小（无限嵌套）。match 递归遍历链表求和。' +
                '输出：链表和: 6，b = 5。',
            },
            {
              title: 'Box 基础用法',
              code: `fn main() {
    let x = Box::new(42);
    println!("x = {}", x);
    // Box 自动解引用，可直接用 *x 取值
    let y = *x + 8;
    println!("y = {}", y);

    // 转移所有权
    let z = x;
    println!("z = {}", z);
    // println!("{}", x); // 错误：x 已被移动
}`,
              explanation:
                'Box::new(42) 在堆上分配 i32。解引用用 *x。' +
                'Box 转移所有权后原变量不可用。输出：x = 42，y = 50，z = 42。',
            },
            {
              title: 'Rc 多重所有权',
              code: `use std::rc::Rc;

fn main() {
    let a = Rc::new(String::from("共享数据"));
    println!("计数: {}", Rc::strong_count(&a));

    let b = Rc::clone(&a);
    println!("计数: {}", Rc::strong_count(&a));

    {
        let c = Rc::clone(&a);
        println!("计数: {}", Rc::strong_count(&a));
        println!("c = {}", c);
    } // c 离开作用域，计数减 1

    println!("计数: {}", Rc::strong_count(&a));
    println!("a = {}, b = {}", a, b);
}`,
              explanation:
                'Rc::clone 不复制数据，只增加引用计数。strong_count 返回当前所有者数量。' +
                'c 离开作用域后计数减 1。输出计数序列：1、2、3、2。a 和 b 共享同一份 String。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 Box::new 在堆上创建值 100，并输出它。',
              starter_code: `fn main() {
    let b = Box::new(___);
    println!("{}", b);
}`,
              expected_output: '100',
              hints: [
                'Box::new 接收要装箱的值',
                '传入数字 100',
                '答案: 100',
              ],
            },
            {
              type: 'output-match',
              prompt: '解引用 Box 获取内部值并加 5。补全 *b。',
              starter_code: `fn main() {
    let b = Box::new(10);
    let sum = ___ + 5;
    println!("{}", sum);
}`,
              expected_output: '15',
              hints: [
                '用 * 解引用 Box',
                '*b 取出内部值 10',
                '答案: *b',
              ],
            },
            {
              type: 'output-match',
              prompt: '用 Rc::clone 增加 a 的引用计数，补全 Rc::clone 的参数。',
              starter_code: `use std::rc::Rc;

fn main() {
    let a = Rc::new(5);
    let b = Rc::clone(&___);
    println!("计数: {}", Rc::strong_count(&a));
}`,
              expected_output: '计数: 2',
              hints: [
                'Rc::clone 接收 &Rc 引用',
                '传入 &a',
                '答案: a',
              ],
            },
          ],
          realWorldScenario:
            '智能指针在真实项目中无所不在。Box 用于构建树、链表等递归数据结构；Rc 用于实现图算法中节点的多重引用（如社交网络中好友关系）；Rc<RefCell<T>> 组合用于实现可观察者模式——多个观察者共享可变状态。Web 框架的请求/响应对象常包裹在 Box 中以支持动态分发。理解智能指针是从 Rust 初学者迈向中级的关键一步，它们让你在保持内存安全的同时表达复杂的数据共享模式。',
        },
      ],
    },
  ],
};