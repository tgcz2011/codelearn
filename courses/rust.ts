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
            '每个 Rust 程序都从 `fn main()` 开始，这是程序的入口函数。' +
            'Rust 使用花括号 `{}` 划分代码块，语句以分号 `;` 结尾。' +
            '`println!` 是一个**宏**（macro），不是函数——末尾的 `!` 是宏的标志。' +
            '宏在编译时展开为代码，这让 `println!` 能在编译期检查格式字符串与参数的匹配，防止运行时格式化错误。' +
            '\n\n' +
            '`println!` 的第一个参数是格式字符串，`{}` 是占位符，' +
            '后续参数按顺序填入。`{}` 调用类型的 `Display` trait，' +
            '`{:?}` 调用 `Debug` trait（用于调试输出，适合数组、结构体等复合类型）。' +
            '`print!` 与 `println!` 的区别仅在于后者多输出一个换行符。' +
            '\n\n' +
            '`cargo` 是 Rust 的构建系统和包管理器。`cargo new 项目名` 创建新项目，' +
            '`cargo build` 编译，`cargo run` 编译并运行，`cargo test` 运行测试。' +
            'Cargo.toml 是项目的配置文件，管理依赖和元数据。' +
            '在在线编译器中我们直接写单文件代码，但理解 cargo 对真实项目至关重要。' +
            '\n\n' +
            'Rust 的设计哲学是"编译期安全优先"——很多在其他语言中运行时才暴露的错误（空指针、数据竞争、' +
            '缓冲区溢出），在 Rust 中编译期就被拦截。学习 Rust 的曲线较陡，但掌握后能写出极其可靠的系统级代码。',
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
            'Rust 用 `let` 声明变量。与大多数语言不同，**Rust 的变量默认不可变**（immutable）。' +
            '一旦绑定值就不能再修改，这是 Rust 安全设计的核心之一。' +
            '如果需要可变变量，必须显式使用 `let mut` 声明。' +
            '\n\n' +
            '为什么默认不可变？因为不可变性让代码更容易推理——你确信一个变量的值在整个作用域内不会意外变化。' +
            '在多线程环境下，不可变数据天然线程安全，无需加锁。' +
            '当你确实需要修改时，`mut` 关键字充当一个明确的标记，告诉读代码的人"这里会被修改"。' +
            '\n\n' +
            '`let mut x = 5;` 声明可变变量，之后可以 `x = 10;` 重新赋值（但类型不能变）。' +
            '`let x = 5;` 声明不可变变量，尝试 `x = 10;` 会编译报错。' +
            '这种"默认安全、显式放权"的设计贯穿 Rust 的整个类型系统。' +
            '\n\n' +
            '类型推断：Rust 是静态类型语言，但大多数时候不需要手动标注类型，编译器会自动推断。' +
            '需要时可以用 `let x: i32 = 5;` 显式标注。在类型不明确时（如 `parse()` 解析数字），' +
            '标注类型或使用 turbofish 语法 `.parse::<i32>()` 帮助编译器推断。',
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
            'Rust 允许用 `let` 重新声明同名变量，新变量会"遮蔽"（shadow）旧变量。' +
            '这不是修改原变量，而是创建了一个全新的变量，只是复用了同一个名字。' +
            '旧变量在遮蔽后无法再被访问，但它的内存会在原作用域结束时正常释放。' +
            '\n\n' +
            '变量遮蔽与 `mut` 的关键区别：遮蔽可以改变类型。例如先用 `let s = "42"` 存字符串，' +
            '再 `let s: i32 = s.parse().unwrap()` 把它变成整数。用 `mut` 是做不到的——' +
            '`mut` 只允许改变同类型的值，不能把 String 变成 i32。' +
            '\n\n' +
            '遮蔽在类型转换管道中特别有用：数据从 JSON 字符串解析为中间结构，再转为最终类型，' +
            '每一步都用同一个变量名，避免产生 `s_str`、`s_parsed`、`s_final` 这样的冗余命名。' +
            '这让代码更简洁，同时每一步的类型转换都通过 `let` 明确标记。' +
            '\n\n' +
            '遮蔽也常用于内部作用域：在内层 `{}` 中遮蔽外层变量，离开作用域后恢复原值。' +
            '这在临时修改变量但又不想影响外部逻辑时很方便。',
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
            '`const` 声明编译期常量。与 `let` 不同，常量必须显式标注类型，且值在编译期就确定。' +
            '常量命名约定用全大写加下划线（SCREAMING_SNAKE_CASE），如 `const MAX_SIZE: i32 = 100;`。' +
            '常量可以在任何作用域（包括全局）声明，编译时内联到使用处，没有固定内存地址。' +
            '\n\n' +
            'Rust 的整数类型：有符号 `i8` 到 `i128`，无符号 `u8` 到 `u128`，' +
            '以及与机器位数相关的 `isize`/`usize`。默认整数类型是 `i32`。' +
            '浮点数有 `f32` 和 `f64`，默认是 `f64`（双精度）。' +
            '`bool` 只有 `true` 和 `false` 两个值，占 1 字节。' +
            '`char` 是 4 字节的 Unicode 标量值，可以存中文字符、emoji 等。' +
            '\n\n' +
            '整数溢出：在 debug 模式下会 panic（崩溃），在 release 模式下会回绕（wrap around）。' +
            '可以用 `wrapping_add`、`checked_add` 等方法显式控制溢出行为。' +
            '\n\n' +
            '类型转换用 `as` 关键字，如 `42 as f64`、`3.14 as i32`（截断小数部分）。' +
            'Rust 不会自动进行类型转换（隐式转换），这避免了 C 语言中因隐式转换导致的许多 bug。',
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
            '标量类型（scalar）表示单个值。Rust 有四种标量：整数、浮点数、布尔和字符。' +
            '整数分为有符号（i8~i128）和无符号（u8~u128），数字表示位数。' +
            '`isize` 和 `usize` 与平台相关（64 位系统上为 64 位）。' +
            '\n\n' +
            '算术运算符：`+`、`-`、`*`、`/`、`%`（取余）。' +
            '整数除法会截断：`7 / 2` 结果是 `3` 而非 `3.5`。' +
            '位运算符：`&`（与）、`|`（或）、`^`（异或）、`<<`（左移）、`>>`（右移）。' +
            '比较运算符返回 `bool`：`==`、`!=`、`<`、`>`、`<=`、`>=`。' +
            '\n\n' +
            'Rust 不会自动进行类型提升——`i32` 和 `i64` 不能直接相加，必须先转换。' +
            '这看似麻烦，但避免了 C 语言中因隐式转换导致的精度丢失和符号 bug。' +
            '整数溢出在 debug 模式下 panic，在 release 模式下回绕。' +
            '\n\n' +
            '字符类型 `char` 是 4 字节 Unicode 标量值，用单引号包裹。' +
            '它可以存储中文、emoji、数学符号等任何 Unicode 字符，远比 C 的 1 字节 char 强大。',
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
            '元组（tuple）将多个不同类型的值组合在一起，长度固定。声明：`let t: (i32, f64, char) = (1, 2.0, \'a\');`。' +
            '访问元素用 `.0`、`.1`、`.2`（从 0 开始）。元组可以用 `let (a, b, c) = t;` 解构。' +
            '空元组 `()` 叫 unit 类型，表示"没有有意义的值"——函数不返回值时实际返回 `()`。' +
            '\n\n' +
            '数组（array）是相同类型元素的固定长度集合，存储在栈上。' +
            '声明：`let arr: [i32; 3] = [1, 2, 3];`。类型标注 `[T; N]` 中 T 是元素类型，N 是长度。' +
            '`[0; 5]` 创建 5 个 0 的数组。访问用 `arr[0]`，越界访问会 panic（运行时崩溃）。' +
            '\n\n' +
            '为什么是固定长度？因为数组和元组在编译期就确定大小，分配在栈上，访问极快。' +
            '如果需要动态长度，使用 `Vec<T>`（堆分配的动态数组，后续章节讲解）。' +
            '\n\n' +
            '元组适合临时组合不同类型的数据（如函数返回多个值），数组适合已知大小的同类型集合' +
            '（如 3D 坐标 [f64; 3]、RGB 颜色 [u8; 3]）。',
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
            'Rust 的 `if` 是一个**表达式**，返回值。这意味着 `let x = if cond { 5 } else { 10 };` 是合法的。' +
            '两个分支的类型必须一致。`if` 不需要圆括号包裹条件，条件必须是 `bool` 类型——' +
            'Rust 不会像 C/JS 那样把 0/1 隐式转为 bool，必须写 `if x != 0` 而非 `if x`。' +
            '\n\n' +
            'Rust 有三种循环：`loop`（无限循环，用 `break` 退出）、`while`（条件循环）、' +
            '`for`（遍历迭代器）。`loop` 可以通过 `break 值` 返回值：' +
            '`let x = loop { break 42; };`。`for` 是最常用的循环，配合范围 `1..5`（1到4）或 `1..=5`（1到5）。' +
            '\n\n' +
            '`break` 退出当前循环，`continue` 跳过本次剩余代码进入下一次迭代。' +
            '循环可以用标签 `' +
            'outer: for ...` 配合 `break ' +
            'outer` 跳出多层循环。' +
            '\n\n' +
            'Rust 的 `for` 循环底层使用 Iterator trait，是零成本抽象——编译后与手写 while 循环一样高效。' +
            '推荐优先使用 `for` 而非 `while`，因为 `for` 更安全（不会忘记更新循环变量导致死循环）。',
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
            '`match` 是 Rust 最强大的控制流结构，进行模式匹配。它允许将一个值与一系列模式进行比较，' +
            '并执行匹配模式的代码。**match 必须穷尽所有可能**（exhaustive），漏掉情况会编译报错。' +
            '用 `_` 作为通配符匹配剩余所有情况。' +
            '\n\n' +
            'match 是表达式，返回匹配分支的值。每个分支 `模式 => 代码`，代码块最后一个表达式是该分支的返回值。' +
            '模式可以是字面值（`1 => ...`）、范围（`1..=5 => ...`）、' +
            '多值（`1 | 2 | 3 => ...`）、绑定变量（`x @ 1..=5 => ...`）等。' +
            '\n\n' +
            '相比 C 的 switch，match 的优势：编译期保证穷尽性、不会忘记 break（不存在 fall-through）、' +
            '可以匹配复杂模式（结构体、枚举、范围等）。这使得 match 在处理枚举时尤其强大。' +
            '\n\n' +
            'match 还可以匹配 `Option` 和 `Result`，这是 Rust 错误处理的核心模式。' +
            '后续章节会深入讲解枚举与 match 的配合使用。',
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
            '所有权（ownership）是 Rust 最独特的特性，让 Rust 不需要垃圾回收器（GC）就能保证内存安全。' +
            '三条核心规则：1）每个值有且仅有一个所有者（owner）；2）当所有者离开作用域，值被自动释放（drop）；' +
            '3）赋值或传参时，所有权转移（move），原变量失效。' +
            '\n\n' +
            '为什么需要所有权？在 C/C++ 中，手动管理内存（malloc/free）容易导致内存泄漏、use-after-free、double-free 等严重 bug。' +
            '在有 GC 的语言（Java/Python/Go）中，运行时 GC 带来停顿和开销。Rust 的所有权机制在编译期确定每块内存的释放时机，' +
            '既不需要 GC，也不会出现手动管理的 bug——零运行时开销的内存安全。' +
            '\n\n' +
            '栈（stack）与堆（heap）：固定大小的数据（i32、bool、数组）存在栈上，自动复制。' +
            '动态大小的数据（String、Vec）存在堆上，通过栈上的指针引用。' +
            '当 String 变量离开作用域，Rust 自动调用 drop 函数释放堆内存——无需手动 free。' +
            '\n\n' +
            '函数传参会转移所有权：把 String 传给函数后，调用方不能再使用该变量。' +
            '函数返回值会把所有权转移给调用者。这种"所有权流转"模型是 Rust 内存管理的核心。',
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
            '当把堆数据（如 String）赋值给另一个变量时，Rust 不会复制堆内容，而是**移动**（move）所有权。' +
            '`let s1 = String::from("hi"); let s2 = s1;` 后，s1 失效，只有 s2 有效。' +
            '这避免了"两个指针指向同一块堆内存"导致的 double-free 问题。' +
            '\n\n' +
            '但对于栈上数据（i32、bool、char、定长数组等），赋值时直接**复制**（copy），因为复制成本很低。' +
            '实现了 `Copy` trait 的类型在赋值时会自动复制，原变量仍然有效。' +
            '\n\n' +
            '如果确实需要深拷贝堆数据，使用 `clone()` 方法。`let s2 = s1.clone();` 会复制堆内容，' +
            's1 和 s2 都有效。clone 有运行时开销，所以 Rust 不会隐式调用它——你必须显式写 clone，' +
            '这让性能成本可见可控。' +
            '\n\n' +
            '理解 move vs copy 是掌握 Rust 所有权的关键。简单规则：栈数据自动 copy，堆数据 move，' +
            '需要保留原值时显式 clone。函数参数同样遵循此规则。',
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
            '每次调用函数都转移所有权很麻烦——函数用完还要返回回来。**引用**（reference）解决了这个问题：' +
            '你可以把值的引用传给函数，函数使用值但不获取所有权。这叫**借用**（borrowing）。' +
            '`&x` 创建不可变引用，`&mut x` 创建可变引用。' +
            '\n\n' +
            '借用规则：**在同一时刻，要么有一个可变引用，要么有多个不可变引用，二者不能共存**。' +
            '这条规则在编译期检查，防止了数据竞争（data race）——这是 Rust 无需 GC 也能保证并发安全的关键。' +
            '在 C++ 中，多个线程同时修改同一数据需要手动加锁；在 Rust 中，编译器在编译期就阻止了这种情况。' +
            '\n\n' +
            '引用默认不可变——通过 `&` 创建的引用不能修改原值。需要修改时用 `&mut`，' +
            '但原变量必须用 `let mut` 声明。`&mut` 引用在同一作用域只能有一个，防止多线程写入冲突。' +
            '\n\n' +
            '悬垂引用（dangling reference）在 Rust 中不可能出现——编译器确保引用永远不会比它指向的数据活得长。' +
            '如果函数返回一个引用，编译器会通过生命周期分析确保被引用的数据在引用有效期内不会被释放。',
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
            '切片（slice）是对集合中连续部分的引用，不获取所有权。字符串切片 `&str` 是对 String 中一段字符的引用。' +
            '`&s[0..5]` 取前 5 个字节，`&s[..5]` 等价，`&s[3..]` 从第 3 字节到末尾，`&s[..]` 是整个字符串。' +
            '\n\n' +
            '`String` 和 `&str` 的区别：String 拥有堆内存（可增长、可修改），&str 是对字符串数据的借用引用（只读）。' +
            '字符串字面量 `"hello"` 本质是 `&' +
            'static str`——直接嵌入二进制文件中的只读数据。函数参数优先用 `&str` 而非 `&String`，' +
            '因为 `&str` 更通用：既能接受 `&String`（自动解引用转换），也能接受字符串字面量。' +
            '\n\n' +
            '切片也适用于数组：`&arr[1..3]` 取数组第 1、2 个元素的切片。切片类型是 `&[T]`。' +
            '切片内部存储一个指针和长度，是"胖指针"（fat pointer）。' +
            '\n\n' +
            '使用切片让函数可以处理字符串的任意部分，无需复制数据。这在文本解析（如提取 URL 路径、' +
            '解析 CSV 字段）中极为高效——零拷贝操作。',
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
            '结构体（struct）将相关数据组织在一起，是 Rust 自定义类型的基础。' +
            '声明：`struct User { name: String, age: u32 }`。创建实例：`User { name: String::from("小明"), age: 20 }`。' +
            '字段用 `.` 访问：`user.name`。结构体默认不可变，修改字段需要 `let mut` 声明整个实例。' +
            '\n\n' +
            '`impl` 块为结构体定义方法。方法第一个参数总是 `&self`（不可变借用）或 `&mut self`（可变借用）或 `self`（获取所有权）。' +
            '调用方法用点号：`user.say_hi()`。关联函数（类似静态方法）不以 self 为参数，用 `::` 调用：`User::new()`。' +
            '\n\n' +
            '`#[derive(Debug)]` 属性让结构体自动实现 Debug trait，可以用 `{:?}` 打印。' +
            '还有 `#[derive(Clone, PartialEq)]` 等常用派生属性。这让结构体获得标准行为而无需手写样板代码。' +
            '\n\n' +
            '结构体还有两种变体：元组结构体 `struct Point(i32, i32);` 和单元结构体 `struct Always;`。' +
            '但最常用的是命名字段结构体，因为它自文档化——字段名就是最好的注释。',
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
            '枚举（enum）定义一个类型，它可以是几个变体（variant）之一。Rust 的枚举远比 C 的枚举强大——' +
            '每个变体可以携带不同类型和数量的数据。`enum Message { Quit, Move { x: i32, y: i32 }, Write(String) }`——' +
            'Quit 无数据，Move 有命名字段，Write 携带 String。' +
            '\n\n' +
            '`match` 表达式是处理枚举的标准方式，必须穷尽所有变体。编译器强制你处理每种情况，' +
            '这是 Rust 安全性的典型体现——不会遗漏一个分支。`if let` 是 match 的简化版，' +
            '只处理一个模式，其余忽略，适合只关心一种情况的场景。' +
            '\n\n' +
            '枚举 + match 是 Rust 实现"代数数据类型"（ADT）的方式，类似于 Haskell/OCaml。' +
            '这让 Rust 在表达复杂业务逻辑时非常强大——比如网络消息类型、AST 节点类型、' +
            '状态机状态等，都可以用枚举清晰建模。' +
            '\n\n' +
            'Option 和 Result 是标准库中最重要的两个枚举，分别在后续课程中详细讲解。',
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
            'Rust 没有 null。取而代之的是 `Option<T>` 枚举：`Some(T)` 表示有值，`None` 表示无值。' +
            '这比 null 安全得多——你必须在类型层面处理"可能没有值"的情况，不可能忘记检查 null。' +
            'Tony Hoare（null 的发明者）称 null 为"十亿美元错误"，Rust 从语言层面消除了它。' +
            '\n\n' +
            'Option 的常用方法：`unwrap()` 提取值（None 时 panic）、`expect("msg")` 同上但带自定义消息、' +
            '`is_some()`/`is_none()` 检查是否有值、`unwrap_or(default)` 有值返回值，无值返回默认值、' +
            '`map(f)` 对 Some 中的值应用函数、`and_then(f)` 类似 map 但 f 返回 Option。' +
            '\n\n' +
            '处理 Option 的最佳实践：优先用 `match` 或 `if let` 显式处理两种情况；' +
            '只在确信有值时用 unwrap（如硬编码的数据）；在原型阶段可以用 unwrap 快速验证逻辑。' +
            '\n\n' +
            'Option 被广泛用于标准库：`Vec::get(i)` 返回 `Option<&T>`（越界返回 None）、' +
            '`HashMap::get(k)` 返回 `Option<&V>`、`str::find(p)` 返回 `Option<usize>`。' +
            '这些 API 设计让你不可能忘记处理"找不到"的情况。',
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
            '`Result<T, E>` 是 Rust 处理可恢复错误的枚举：`Ok(T)` 表示成功，`Err(E)` 表示失败。' +
            '与 Option 不同，Result 携带错误信息。`Result` 被用于所有可能失败的操作：' +
            '文件 I/O、网络请求、数据解析等。' +
            '\n\n' +
            '`?` 操作符是处理 Result 的语法糖。`let v = expr?;` 等价于：' +
            '如果 expr 是 Ok(v)，取出值赋给 v；如果是 Err(e)，立即返回 Err(e) 给调用者。' +
            '这让错误传播极其简洁——无需手写 match 分支，一行 `?` 就搞定。' +
            '\n\n' +
            'Rust 的错误处理哲学：**panic 用于不可恢复的错误**（程序 bug、不变量违反），' +
            '**Result 用于可恢复的错误**（用户输入错误、网络故障、文件不存在）。' +
            '这与 Java/Python 的异常不同——Rust 没有隐式异常传播，所有错误路径在类型签名中可见。' +
            '\n\n' +
            '`unwrap()` 和 `expect()` 在 Result 上也可用——Ok 时取值，Err 时 panic。' +
            '在快速原型中可以用，但生产代码应该用 `?` 或 match 显式处理错误。',
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
            '`fn` 关键字定义函数。参数必须标注类型，返回类型用 `->` 指定。' +
            'Rust 是表达式语言——大多数代码块都是表达式，返回最后一个表达式的值（不带分号）。' +
            '语句（statement）用分号结尾，不返回值；表达式（expression）不带分号，返回值。' +
            '\n\n' +
            '函数体最后一行如果不带分号，就是返回值。也可以用 `return` 提前返回，但惯用方式是省略 return。' +
            '例如 `fn add(a: i32, b: i32) -> i32 { a + b }`——`a + b` 不带分号，是返回值。' +
            '如果写成 `a + b;`（带分号），就变成语句，返回 `()`，与 `-> i32` 不匹配，编译报错。' +
            '\n\n' +
            'Rust 函数支持递归。经典递归题如斐波那契数列、阶乘等都可以直接实现。' +
            '但注意递归深度过大会栈溢出——Rust 没有尾递归优化。' +
            '\n\n' +
            '函数可以返回元组实现"多返回值"：`fn divmod(a: i32, b: i32) -> (i32, i32) { (a/b, a%b) }`。' +
            '调用者用元组解构接收：`let (q, r) = divmod(17, 5);`。',
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
            '闭包（closure）是匿名函数，用 `|参数| { body }` 语法。闭包可以捕获外部环境的变量——' +
            '这是它与普通函数最大的区别。`let add = |a, b| a + b;` 定义一个闭包，`add(3, 4)` 调用它。' +
            '\n\n' +
            '闭包捕获变量的三种方式：不可变借用（`&T`）、可变借用（`&mut T`）、获取所有权（`move`）。' +
            '编译器自动推断捕获方式。需要强制获取所有权时用 `move` 关键字：`move || { ... }`，' +
            '常用于多线程（把数据移动到新线程）。' +
            '\n\n' +
            '闭包类型由三个 trait 表示：`Fn`（不可变借用捕获）、`FnMut`（可变借用捕获）、' +
            '`FnOnce`（获取所有权）。函数参数接受闭包时用这些 trait 作为泛型约束。' +
            '\n\n' +
            '闭包在 Rust 中无处不在——迭代器方法（map、filter、for_each）的参数都是闭包。' +
            '闭包让函数式编程风格在 Rust 中自然流畅。',
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
            '迭代器（Iterator）是 Rust 中处理集合的核心抽象。`Iterator` trait 只要求实现 `next()` 方法——' +
            '返回 `Option<Item>`，有值返回 `Some(item)`，耗尽返回 `None`。迭代器是**惰性的**（lazy）——' +
            '不消费就不会执行，这让链式调用零成本。' +
            '\n\n' +
            '常用适配器方法：`map(f)` 对每个元素应用闭包、`filter(f)` 过滤元素、' +
            '`collect()` 收集为集合、`sum()` 求和、`count()` 计数、' +
            '`take(n)` 取前 n 个、`skip(n)` 跳过前 n 个、`enumerate()` 带索引遍历。' +
            '\n\n' +
            '`for` 循环底层就是迭代器——`for x in &vec` 等价于 `vec.iter().for_each(|x| ...)`。' +
            '`iter()` 借用元素（`&T`），`into_iter()` 获取所有权（`T`），`iter_mut()` 可变借用（`&mut T`）。' +
            '\n\n' +
            '迭代器是零成本抽象——编译后与手写循环一样高效，甚至可能更快（编译器优化更好）。' +
            '推荐优先使用迭代器而非显式循环，代码更简洁、更安全、同样高效。',
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
            '`mod` 定义模块，`use` 导入路径，`pub` 标记公开可见。模块组织代码结构，' +
            '类似其他语言的 namespace/package。在单文件中可以内联定义模块：`mod utils { pub fn helper() {} }`。' +
            '\n\n' +
            '路径用 `::` 分隔：`crate::module::function` 从 crate 根开始，`self::` 当前模块，' +
            '`super::` 父模块。`use` 导入后可直接用短名：`use std::collections::HashMap;`。' +
            '`pub use` 可以重新导出（re-export），常用于库的公共 API 设计。' +
            '\n\n' +
            '`crate` 是 Rust 的编译单元——二进制 crate（有 main 函数）或库 crate（有 lib.rs）。' +
            'Cargo.toml 管理依赖，`cargo add 包名` 添加第三方库。`std` 是标准库，默认可用。' +
            '\n\n' +
            '可见性规则：默认私有，`pub` 公开。`pub(crate)` 在 crate 内可见。结构体字段默认私有，' +
            '需要逐个标 `pub`。枚举变体跟随枚举的可见性——枚举是 pub 则变体全是 pub。',
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
            '`Vec<T>` 是 Rust 的动态数组，存储在堆上，可自动扩容。这是最常用的集合类型。' +
            '创建：`Vec::new()` 或 `vec![1, 2, 3]` 宏。添加：`push(item)`。' +
            '访问：`vec[i]`（越界 panic）或 `vec.get(i)`（返回 Option，安全）。' +
            '\n\n' +
            '常用方法：`len()` 长度、`is_empty()` 是否为空、`pop()` 弹出末尾元素、' +
            '`iter()` 遍历、`contains(&item)` 是否包含、`sort()` 排序。' +
            'Vec 与迭代器配合使用，可以完成大部分数据处理任务。' +
            '\n\n' +
            'Vec 内部分配堆内存，当离开作用域时自动释放——无需手动 free。' +
            'Vec 的扩容策略是容量满时倍增，均摊 O(1) 的 push 性能。' +
            '\n\n' +
            '遍历 Vec 时注意所有权：`for x in &vec` 借用（vec 仍可用），' +
            '`for x in vec` 获取所有权（vec 被消耗）。选择哪种取决于后续是否还需要 vec。',
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
            '`HashMap<K, V>` 存储键值对，用哈希表实现。创建：`HashMap::new()`。' +
            '插入：`map.insert(key, value)`。访问：`map.get(&key)` 返回 `Option<&V>`。' +
            '遍历：`for (k, v) in &map`。`entry(key).or_insert(default)` 在键不存在时插入默认值。' +
            '\n\n' +
            '`String` 是可增长的、拥有所有权的 UTF-8 字符串。创建：`String::from("hi")` 或 `"hi".to_string()`。' +
            '拼接：`push_str(&str)` 追加、`+` 运算符、`format!` 宏。String 底层是 Vec<u8>，保证内容始终是合法 UTF-8。' +
            '\n\n' +
            'String vs &str：String 拥有内存（堆分配，可修改），&str 是借用引用（只读）。' +
            '函数参数优先用 `&str`——更通用，能接受 &String 和字面量。需要拥有时用 String。' +
            '\n\n' +
            'HashMap 遍历顺序不保证——不要依赖顺序。如果需要有序 map，用 BTreeMap（红黑树实现，按 key 排序）。' +
            'HashMap 的 key 必须实现 Hash 和 Eq trait，value 没有约束。',
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
            'Rust 将错误分为两类：**不可恢复错误**用 `panic!` 宏处理，**可恢复错误**用 `Result` 类型处理。' +
            'panic! 会打印错误信息、展开栈、退出程序——用于程序 bug 或不变量违反等不该继续执行的情况。' +
            'Result 用于网络故障、用户输入错误等可以合理处理的情况。' +
            '\n\n' +
            'panic! 的触发方式：显式调用 `panic!("消息")`、数组越界、对 None/Err 调用 unwrap、' +
            '整数溢出（debug 模式）。panic 不可被捕获（除非用 catch_unwind，但不推荐）。' +
            '\n\n' +
            'Result 的处理方式：`match` 显式处理两种情况、`?` 操作符传播错误、' +
            '`unwrap()`/`expect()` 在确信成功时使用（失败则 panic）、' +
            '`unwrap_or(default)` 提供默认值、`map_err(f)` 转换错误类型。' +
            '\n\n' +
            '生产代码推荐用 `?` 传播错误，在顶层（如 main 函数）统一处理。' +
            '自定义错误类型可以实现 `std::error::Error` trait，配合 `thiserror` 等 crate 简化定义。' +
            'Rust 的错误处理虽然比 try/catch 更显式，但类型安全且不会遗漏错误路径。',
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
            'Trait 定义共享行为，类似其他语言的接口（interface）。`trait Describe { fn describe(&self) -> String; }` ' +
            '定义 trait，`impl Describe for Point { ... }` 为类型实现 trait。' +
            'Trait 可以有默认方法实现，实现者可以覆盖也可以直接使用默认实现。' +
            '\n\n' +
            'Trait bound 约束泛型类型：`fn print<T: Display>(x: T)` 表示 T 必须实现 Display。' +
            '`impl Trait` 语法是 trait bound 的语法糖：`fn print(x: impl Display)` 等价。' +
            '多约束用 `+` 连接：`T: Display + Debug`。' +
            '\n\n' +
            'Rust 的 trait 与 Go 的 interface 有个关键区别：Rust 的 trait 可以在定义类型之外' +
            '为类型实现 trait（孤儿规则除外——不能为外部类型实现外部 trait）。这让你可以为标准库类型' +
            '添加自定义行为。' +
            '\n\n' +
            '标准库重要 trait：Display（用户友好输出）、Debug（调试输出）、Clone（深拷贝）、' +
            'PartialEq/Eq（相等比较）、Hash（哈希）、Iterator（迭代器）。通过 derive 属性可以自动派生很多 trait。',
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
            '泛型让函数和类型适用于多种具体类型，是 Rust 实现复用的核心工具。' +
            '泛型函数用 `<T>` 声明类型参数，例如 `fn first<T>(items: &[T]) -> &T`。' +
            '调用时类型参数可由编译器自动推断，也可用 turbofish 语法 `first::<i32>(&v)` 显式指定。' +
            '泛型让一份代码服务于 i32、String、自定义结构体等多种类型，避免为每种类型复制粘贴。' +
            '\n\n' +
            '泛型结构体：`struct Point<T> { x: T, y: T }`。这里 T 是字段共享的类型参数。' +
            '注意 `x` 和 `y` 必须是同一类型 T。如果想让它们独立，可以声明两个参数：' +
            '`struct Point<T, U> { x: T, y: U }`。实现方法时，' +
            '`impl<T> Point<T>` 让方法对所有类型 T 可用；' +
            '`impl Point<i32>` 只为 `Point<i32>` 实现方法，这是 Rust 的"特化"机制。' +
            '\n\n' +
            '泛型枚举最经典的例子是 `Option<T>` 和 `Result<T, E>`——它们用泛型容纳任意类型，' +
            '让"可能不存在"和"可能失败"成为类型系统的一部分。' +
            '\n\n' +
            '泛型在编译期通过**单态化（monomorphization）**展开：编译器为每个具体类型生成一份专用代码。' +
            '例如 `first::<i32>` 和 `first::<&str>` 会变成两个不同的函数。' +
            '这意味着泛型没有运行时开销——和手写针对特定类型的代码一样快，代价是二进制体积增大。' +
            '这与 Go 的接口（动态分派、有运行时开销）形成对比，Rust 选择了"零成本抽象"。',
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
            '生命周期是 Rust 编译器用来追踪引用有效范围的标记。' +
            '每个引用都有生命周期——从它被创建到它最后一次被使用的范围。' +
            '大多数时候生命周期由编译器自动推断，但当函数返回引用时，编译器无法判断返回值的生命周期与哪个输入相关，这时需要显式标注。' +
            '\n\n' +
            '生命周期标注用撇号语法：`\'a`、`\'b`、`\'output` 等。标注本身不改变生命周期——它只是声明"这些引用的生命周期之间存在关系"。' +
            '例如 `fn longest<\'a>(x: &\'a str, y: &\'a str) -> &\'a str` 表示：' +
            '返回值的生命周期不超过 x 和 y 中较短的那个。这是编译器能接受的契约。' +
            '\n\n' +
            '生命周期标注遵循协变规则：返回引用的生命周期必须至少和最短的输入引用一样长。' +
            '这保证了函数返回的引用在使用期间不会悬空——不会指向已被释放的内存。' +
            '如果函数返回一个引用但编译器无法证明它的来源，就会报"missing lifetime specifier"错误。' +
            '\n\n' +
            '常见生命周期省略规则（lifetime elision rules）：每个输入引用默认获得独立的生命周期；' +
            '若只有一个输入引用，输出引用默认使用它；若方法有 `&self`/`&mut self`，输出默认使用 self 的生命周期。' +
            '当这些规则能让编译器唯一推断时，可省略标注，否则必须显式写。' +
            '结构体持有引用时也必须标注生命周期：`struct Parser<\'a> { text: &\'a str }`，' +
            '表示 Parser 的实例不能比它持有的 text 引用活得更久。',
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
            '智能指针是指不仅持有数据，还拥有额外行为和所有权语义的类型。' +
            'Rust 最常见的智能指针是 `Box<T>`、`Rc<T>`、`RefCell<T>`，它们各自解决不同的内存管理需求。' +
            '与普通引用（&T）不同，智能指针拥有它指向的数据，当指针被销毁时数据也被释放。' +
            '\n\n' +
            '`Box<T>` 是最简单的堆分配智能指针。它把数据从栈移到堆上，让数据有单一所有者。' +
            'Box 用于：在编译期大小未知的类型（递归类型）、转移大数据所有权时避免拷贝、' +
            '当你只关心类型实现的 trait 而不关心具体类型时（trait object：`Box<dyn Trait>`）。' +
            '解引用用 `*box` 或自动解引用调用方法。Box 几乎没有运行时开销，只有一次堆分配。' +
            '\n\n' +
            '`Rc<T>`（Reference Counted）启用**多重所有权**：多个 Rc 指针指向同一份数据，' +
            '引用计数追踪有多少个所有者。每次 clone 增加计数，每次 drop 减少计数，归零时释放数据。' +
            'Rc 用于图结构、树结构中节点被多个父节点引用的场景。Rc 是不可变的——不能通过 Rc 修改内部数据。' +
            '注意 Rc 不是线程安全的（不能跨线程发送）。需要线程安全时用 `Arc<T>`（Atomic Rc）。' +
            '\n\n' +
            '`RefCell<T>` 提供**内部可变性**：即使在持有不可变引用的情况下也能修改内部数据。' +
            '它把借用规则检查从编译期推迟到运行期——借用冲突会 panic 而非编译错误。' +
            '常见模式是 `Rc<RefCell<T>>`：多重所有权 + 可变内部，用于实现复杂的数据结构如双向链表、' +
            '图结构中的可变节点。使用 `borrow()` 获取不可变借用，`borrow_mut()` 获取可变借用。',
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