import type { CourseContent } from './types'

/**
 * CSS 入门到进阶课程（7 章 28 节）
 *
 * CSS 代码以 HTML 文档形式编写（内联 <style>），通过 HtmlWasmRunner 渲染预览。
 * 课程 language 为 "css"，但运行时映射到 html runner 进行可视化预览。
 * 大部分练习使用 open-ended 类型（视觉渲染无标准输出可匹配）；
 * 对于产生明确可见文本的练习，用 output-match 以页面文字作为预期输出。
 */
export const cssCourse: CourseContent = {
  id: 'course-css',
  slug: 'css',
  title: 'CSS 入门到进阶',
  description: '从选择器、盒模型到 Flexbox、Grid 与动画，系统掌握现代 CSS 布局与样式技巧。',
  language: 'css',
  difficulty: 'beginner',
  chapters: [
    // ====================== 第一章 ======================
    {
      id: 'css-ch1',
      title: 'CSS 基础',
      order: 0,
      lessons: [
        {
          id: 'css-ch1-l1',
          title: '选择器入门',
          order: 0,
          content_md:
            'CSS 通过选择器匹配 HTML 元素并应用样式。基础选择器：元素选择器（`p`）、' +
            '类选择器（`.box`，可复用）、ID 选择器（`#header`，页面唯一）、' +
            '通配选择器（`*`，匹配所有元素）。\n\n' +
            '组合选择器表达关系：后代选择器（`.nav a`，nav 内所有 a）、' +
            '子代选择器（`.nav > a`，仅直接子元素）、相邻兄弟（`h2 + p`）、' +
            '通用兄弟（`h2 ~ p`）。群组选择器用逗号（`h1, h2, h3`）共享样式。\n\n' +
            '选择器优先级（specificity）决定冲突时谁生效：内联 style > ID > 类/伪类/属性 > 元素。' +
            '`!important` 可强制覆盖但破坏维护性，应避免滥用。' +
            '理解优先级是写出可维护 CSS 的基础。',
          examples: [
            {
              title: '基础选择器',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 元素选择器：所有段落 */\n  p { color: gray; }\n  /* 类选择器：可复用 */\n  .highlight { color: orange; font-weight: bold; }\n  /* ID 选择器：页面唯一 */\n  #main { background: #f0f0f0; padding: 10px; }\n</style>\n</head>\n<body>\n  <div id="main">\n    <p>普通段落</p>\n    <p class="highlight">高亮段落</p>\n  </div>\n</body>\n</html>',
              explanation:
                '元素选择器最弱，类选择器最常用，ID 选择器优先级高但应少用（难覆盖）。.highlight 可复用于多个元素。',
            },
            {
              title: '后代与子代选择器',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 后代：nav 内所有 a（含嵌套） */\n  .nav a { color: blue; }\n  /* 子代：仅直接子 a */\n  .nav > a { font-weight: bold; }\n</style>\n</head>\n<body>\n  <nav class="nav">\n    <a href="#">直接子链接</a>\n    <div><a href="#">嵌套链接</a></div>\n  </nav>\n</body>\n</html>',
              explanation:
                '后代选择器（空格）匹配所有层级；子代选择器（>）只匹配直接子元素。区分二者能精准控制样式范围。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '将所有 h1 标题的文字颜色设为绿色（green）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  h1 { color: ___; }\n</style>\n</head>\n<body>\n  <h1>绿色标题</h1>\n</body>\n</html>',
              expected_output: '绿色标题',
              hints: [
                '用元素选择器 h1',
                'color 属性设为 green',
                'CSS 规则：选择器 { 属性: 值; }',
              ],
            },
            {
              type: 'open-ended',
              prompt: '为 class 为 "warn" 的元素设置红色文字，为 id 为 "box" 的元素设置灰色背景。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* .warn 红色文字 */\n  /* #box 灰色背景 */\n</style>\n</head>\n<body>\n  <p class="warn">警告</p>\n  <div id="box">盒子</div>\n</body>\n</html>',
              hints: [
                '类选择器以 . 开头',
                'ID 选择器以 # 开头',
                'background-color 设背景色',
              ],
            },
          ],
          realWorldScenario:
            '搭建设计系统时，用类选择器定义按钮、卡片等组件样式（可复用），避免用 ID 选择器（无法复用且优先级过高难覆盖）——这是可维护 CSS 的起点。',
        },
        {
          id: 'css-ch1-l2',
          title: '颜色与背景',
          order: 1,
          content_md:
            'CSS 颜色有多种写法：关键字（`red`）、十六进制（`#ff0000`，常用简写 `#f00`）、' +
            'RGB（`rgb(255,0,0)`）、RGBA（`rgba(255,0,0,0.5)` 带透明度）、' +
            'HSL（`hsl(0,100%,50%)`，色相/饱和度/亮度，调色更直观）。\n\n' +
            '`color` 设文字颜色，`background-color` 设背景色，' +
            '`background-image: url(...)` 设背景图。背景可叠加：' +
            '`background: url(bg.png) no-repeat center, #f0f0f0;` 图加底色。' +
            '`background-size: cover` 让背景图覆盖容器（可能裁剪），`contain` 完整显示（可能留白）。\n\n' +
            '现代项目多用 CSS 变量统一管理颜色（后续章节讲）。' +
            'HSL 格式调色方便——改色相值就能换色系，比 RGB 直观。' +
            '注意颜色对比度需达 WCAG 标准（正常文字 4.5:1）保证可读性。',
          examples: [
            {
              title: '颜色格式对比',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .a { color: red; }              /* 关键字 */\n  .b { color: #00ff00; }          /* 十六进制 */\n  .c { color: rgb(0, 0, 255); }   /* RGB */\n  .d { color: hsl(270, 100%, 50%); } /* HSL 紫色 */\n  .e { background: rgba(0,0,0,0.5); color: white; } /* 半透明黑底 */\n</style>\n</head>\n<body>\n  <p class="a">红色</p>\n  <p class="b">绿色</p>\n  <p class="c">蓝色</p>\n  <p class="d">紫色</p>\n  <p class="e">半透明背景</p>\n</body>\n</html>',
              explanation:
                '四种颜色格式等价表达不同颜色；RGBA/HSLA 带透明度；HSL 调色相最直观。',
            },
            {
              title: '背景图与覆盖',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .hero {\n    background-image: url("https://picsum.photos/400/200");\n    background-size: cover;\n    background-position: center;\n    height: 150px;\n    color: white;\n    padding: 20px;\n  }\n</style>\n</head>\n<body>\n  <div class="hero">背景图覆盖容器</div>\n</body>\n</html>',
              explanation:
                'cover 让背景图填满容器（可能裁剪）；center 居中显示；常用于 hero banner。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为 class 为 "banner" 的元素设置背景图（picsum.photos/400/200），background-size 为 cover，高 200px。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .banner {\n    /* 背景图 + cover + 高 200px */\n  }\n</style>\n</head>\n<body>\n  <div class="banner">横幅</div>\n</body>\n</html>',
              hints: [
                'background-image: url(...)',
                'background-size: cover 填满',
                'height: 200px',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 HSL 创建三个色块：红（hsl(0,100%,50%)）、绿（hsl(120,100%,50%)）、蓝（hsl(240,100%,50%)）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .r { background: hsl(___, 100%, 50%); height: 50px; }\n  .g { background: hsl(___, 100%, 50%); height: 50px; }\n  .b { background: hsl(___, 100%, 50%); height: 50px; }\n</style>\n</head>\n<body>\n  <div class="r"></div><div class="g"></div><div class="b"></div>\n</body>\n</html>',
              hints: [
                '红色色相 0',
                '绿色色相 120',
                '蓝色色相 240',
              ],
            },
          ],
          realWorldScenario:
            '设计落地页 hero 区时，用 background-size: cover 让背景图自适应铺满，配合半透明遮罩（rgba）保证文字可读——这是 banner 设计的标准套路。',
        },
        {
          id: 'css-ch1-l3',
          title: '文本样式',
          order: 2,
          content_md:
            '文本相关属性：`font-size`（字号，常用 px/rem）、`font-family`（字体族）、' +
            '`font-weight`（粗细，normal=400/bold=700，或数字）、`font-style`（italic 斜体）、' +
            '`line-height`（行高，影响可读性，推荐 1.5-1.7）。\n\n' +
            '`text-align`（对齐：left/center/right/justify）、`text-decoration`（下划线/删除线）、' +
            '`text-transform`（大小写转换）、`letter-spacing`/`word-spacing`（字/词间距）、' +
            '`text-indent`（首行缩进）、`white-space`（空白处理）。\n\n' +
            '字号单位：px（绝对）、em（相对父元素）、rem（相对根元素，推荐）、' +
            'vw/vh（视口百分比）。rem 兼顾可缩放与一致性，是响应式字号首选。' +
            '`line-height: 1.6` 让正文更易读。设置 `color` 和 `background-color` 时注意对比度。',
          examples: [
            {
              title: '字体综合设置',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { font-family: -apple-system, "PingFang SC", sans-serif; }\n  h1 {\n    font-size: 2rem;\n    font-weight: 700;\n    text-align: center;\n    letter-spacing: 2px;\n  }\n  p {\n    font-size: 1rem;\n    line-height: 1.6;\n    color: #333;\n    text-indent: 2em;\n  }\n</style>\n</head>\n<body>\n  <h1>文章标题</h1>\n  <p>这是一段正文，行高 1.6 提升可读性，首行缩进 2 字符符合中文排版习惯。</p>\n</body>\n</html>',
              explanation:
                'font-family 多个字体回退；rem 字号响应式；line-height 1.6 易读；text-indent 2em 中文首行缩进。',
            },
            {
              title: '文本装饰与变换',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .upper { text-transform: uppercase; }\n  .underline { text-decoration: underline; }\n  .strike { text-decoration: line-through; }\n  .spaced { letter-spacing: 4px; word-spacing: 8px; }\n</style>\n</head>\n<body>\n  <p class="upper">hello world</p>\n  <p class="underline">下划线</p>\n  <p class="strike">删除线</p>\n  <p class="spaced">字 词 间 距</p>\n</body>\n</html>',
              explanation:
                'text-transform 转大小写；text-decoration 加线；letter/word-spacing 调间距，常用于标题设计感。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为 h1 设置：字号 2rem，居中对齐，字重 bold，字间距 3px。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  h1 {\n    font-size: ___;\n    text-align: ___;\n    font-weight: ___;\n    letter-spacing: ___;\n  }\n</style>\n</head>\n<body>\n  <h1>标题样式</h1>\n</body>\n</html>',
              hints: [
                'font-size: 2rem',
                'text-align: center',
                'font-weight: bold，letter-spacing: 3px',
              ],
            },
            {
              type: 'open-ended',
              prompt: '为正文 p 设置：行高 1.6，颜色 #333，首行缩进 2em。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  p {\n    /* 行高、颜色、首行缩进 */\n  }\n</style>\n</head>\n<body>\n  <p>这是一段正文内容，设置后更易读。</p>\n</body>\n</html>',
              hints: [
                'line-height: 1.6',
                'color: #333',
                'text-indent: 2em',
              ],
            },
          ],
          realWorldScenario:
            '中文资讯类网站正文普遍用 line-height 1.7-1.8、首行缩进 2em、字号 16px——这套排版让长文阅读不疲劳，是内容产品的标配。',
        },
        {
          id: 'css-ch1-l4',
          title: '盒模型',
          order: 3,
          content_md:
            '每个元素都是一个矩形盒子，从内到外四层：content（内容）→ padding（内边距）→ ' +
            'border（边框）→ margin（外边距）。content 是宽高定义的区域，' +
            'padding 是内容到边框的留白，border 是边框线，margin 是盒子与其他元素的距离。\n\n' +
            '默认 `box-sizing: content-box`，width/height 只含 content，加 padding/border 后盒子变大。' +
            '推荐设 `box-sizing: border-box`，width/height 含 padding 和 border，' +
            '布局更可控。全局重置：`* { box-sizing: border-box; }`。\n\n' +
            'margin 特性：相邻块级元素的垂直 margin 会「合并」（取较大者），' +
            '这是常见布局困惑源。padding 不合并。margin 可为负（元素重叠），padding 不能为负。' +
            '理解盒模型是掌握布局的前提。',
          examples: [
            {
              title: '盒模型四层',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  * { box-sizing: border-box; }\n  .box {\n    width: 200px;\n    padding: 20px;\n    border: 4px solid black;\n    margin: 16px;\n    background: lightblue;\n  }\n</style>\n</head>\n<body>\n  <div class="box">盒模型示例：border-box 下总宽 200px</div>\n</body>\n</html>',
              explanation:
                'border-box 下 width 200px 包含 padding 和 border，盒子总宽不变；content-box 则会变 248px。',
            },
            {
              title: 'margin 合并演示',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .a { margin-bottom: 30px; background: #faa; }\n  .b { margin-top: 20px; background: #aaf; }\n</style>\n</head>\n<body>\n  <div class="a">上块 margin-bottom:30px</div>\n  <div class="b">下块 margin-top:20px</div>\n  <p>两者间距是 30px（取大值），不是 50px——这就是 margin 合并</p>\n</body>\n</html>',
              explanation:
                '相邻块级元素垂直 margin 合并取较大值；横向不合并。BFC 可清除合并（后续章节讲）。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为 class 为 "card" 的元素：全局设 border-box，卡片宽 200px，padding 15px，1px 灰色边框。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  * { box-sizing: ___; }\n  .card {\n    width: ___;\n    padding: ___;\n    border: ___;\n  }\n</style>\n</head>\n<body>\n  <div class="card">卡片内容</div>\n</body>\n</html>',
              hints: [
                '* { box-sizing: border-box; }',
                'width: 200px',
                'padding: 15px; border: 1px solid gray;',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建两个相邻 div，分别设 margin-bottom: 40px 和 margin-top: 10px，观察合并后间距为 40px。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .a { margin-bottom: ___; background: #faa; }\n  .b { margin-top: ___; background: #aaf; }\n</style>\n</head>\n<body>\n  <div class="a">块 A</div>\n  <div class="b">块 B</div>\n</body>\n</html>',
              hints: [
                '.a 设 margin-bottom: 40px',
                '.b 设 margin-top: 10px',
                '合并后取较大值 40px',
              ],
            },
          ],
          realWorldScenario:
            '卡片组件统一用 border-box + 固定宽度，无论 padding/border 怎么调都不会撑破布局——这是设计系统稳定的基础，全局重置 box-sizing 是项目第一步。',
        },
      ],
    },
    // ====================== 第二章 ======================
    {
      id: 'css-ch2',
      title: '布局基础',
      order: 1,
      lessons: [
        {
          id: 'css-ch2-l1',
          title: 'display 属性',
          order: 0,
          content_md:
            '`display` 决定元素的渲染方式。常见值：`block`（块级，独占一行，可设宽高）、' +
            '`inline`（行内，不换行，宽高无效）、`inline-block`（行内块，不换行但可设宽高）、' +
            '`none`（隐藏，不占空间）、`flex`/`grid`（布局模式，后续详讲）。\n\n' +
            '块级元素：div/p/h1/section 等，默认独占一行。' +
            '行内元素：span/a/strong 等，默认不换行。' +
            'inline-block 结合两者优点：像文字一样排列又能设尺寸，常用于按钮、图标横排。\n\n' +
            '`display: none` 与 `visibility: hidden` 区别：前者完全移除不占空间，' +
            '后者隐藏但仍占空间（留白）。`hidden` 属性（HTML）等同 display:none。' +
            '切换显示用 display，保留布局用 visibility。',
          examples: [
            {
              title: 'block vs inline vs inline-block',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .block { display: block; width: 200px; background: #faa; }\n  .inline { display: inline; width: 200px; background: #afa; } /* 宽高无效 */\n  .ib { display: inline-block; width: 100px; height: 40px; background: #aaf; }\n</style>\n</head>\n<body>\n  <span class="block">block：独占一行，宽 200px 生效</span>\n  <span class="inline">inline：宽高无效</span>\n  <span class="ib">inline-block 1</span>\n  <span class="ib">inline-block 2</span>\n</body>\n</html>',
              explanation:
                'block 独占一行可设宽高；inline 宽高无效；inline-block 不换行且可设宽高，适合横排按钮。',
            },
            {
              title: '隐藏元素对比',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .none { display: none; }     /* 不占空间 */\n  .hidden { visibility: hidden; background: #faa; } /* 占空间 */\n</style>\n</head>\n<body>\n  <div>第一行</div>\n  <div class="none">display:none（看不见也不占位）</div>\n  <div class="hidden">visibility:hidden（看不见但占位）</div>\n  <div>最后一行</div>\n</body>\n</html>',
              explanation:
                'display:none 完全移除不占空间；visibility:hidden 隐藏但保留空间。按需选择。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '将三个 span 设为 inline-block，宽 80px 高 40px，并排显示（用不同背景色区分）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  span {\n    display: ___;\n    width: ___;\n    height: ___;\n  }\n</style>\n</head>\n<body>\n  <span style="background:#faa;">A</span>\n  <span style="background:#afa;">B</span>\n  <span style="background:#aaf;">C</span>\n</body>\n</html>',
              hints: [
                'display: inline-block',
                'width: 80px; height: 40px',
                'inline-block 可设宽高且不换行',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 display:none 隐藏一个元素，用 visibility:hidden 隐藏另一个，对比是否占位。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .a { display: ___; background: #faa; }\n  .b { visibility: ___; background: #afa; }\n</style>\n</head>\n<body>\n  <div class="a">A 不占位</div>\n  <div class="b">B 占位</div>\n  <div>C 对照</div>\n</body>\n</html>',
              hints: [
                'display: none 不占空间',
                'visibility: hidden 占空间',
                '观察 C 的位置变化',
              ],
            },
          ],
          realWorldScenario:
            '导航栏的菜单项用 inline-block 横排（兼容老项目）或 flex（现代做法）；弹窗关闭用 display:none 彻底移除，避免挡住下层交互。',
        },
        {
          id: 'css-ch2-l2',
          title: 'position 定位',
          order: 1,
          content_md:
            '`position` 控制元素定位方式：`static`（默认，文档流）、' +
            '`relative`（相对自身原位置偏移，仍占原空间）、' +
            '`absolute`（脱离文档流，相对最近的非 static 祖先定位）、' +
            '`fixed`（脱离文档流，相对视口定位，滚动不动）、' +
            '`sticky`（滚动到阈值前 relative，到达后 fixed，常做吸顶导航）。\n\n' +
            '配合 `top`/`right`/`bottom`/`left`/`z-index` 控制位置和层级。' +
            'absolute 定位的「参照物」是最近的非 static 祖先，因此常用套路：' +
            '父元素设 relative，子元素设 absolute 相对父定位。\n\n' +
            'z-index 仅对非 static 元素生效，值越大越在上层。' +
            '注意 z-index 战争（堆叠上下文），过度提升 z-index 是维护噩梦。' +
            'sticky 兼容性已较好，是吸顶/吸底导航的现代选择。',
          examples: [
            {
              title: 'absolute 相对父定位',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .parent {\n    position: relative;\n    height: 150px;\n    background: #eee;\n  }\n  .child {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    background: coral;\n    padding: 10px;\n  }\n</style>\n</head>\n<body>\n  <div class="parent">\n    父容器（relative）\n    <div class="child">子元素（absolute 右下角）</div>\n  </div>\n</body>\n</html>',
              explanation:
                '父 relative + 子 absolute 是定位套路；子相对父的右下角定位，脱离文档流。',
            },
            {
              title: 'sticky 吸顶导航',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .nav {\n    position: sticky;\n    top: 0;\n    background: #333;\n    color: white;\n    padding: 10px;\n  }\n  .content { height: 1200px; background: #f5f5f5; padding: 10px; }\n</style>\n</head>\n<body>\n  <p>滚动页面看导航吸顶效果</p>\n  <nav class="nav">吸顶导航</nav>\n  <div class="content">长内容...向下滚动</div>\n</body>\n</html>',
              explanation:
                'sticky 在滚动到 top:0 时变为 fixed 效果，未到阈值时是 relative；吸顶导航的现代做法。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '父元素 relative，子元素 absolute 定位在父的右上角（top:0; right:0）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .parent { position: ___; height: 150px; background: #eee; }\n  .child { position: ___; top: ___; right: ___; background: coral; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="parent"><div class="child">右上角</div></div>\n</body>\n</html>',
              hints: [
                '父设 position: relative',
                '子设 position: absolute',
                'top: 0; right: 0 定位右上角',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建一个吸顶导航：position: sticky，top: 0，深色背景白色文字。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .nav {\n    position: ___;\n    top: ___;\n    background: #333;\n    color: white;\n    padding: 10px;\n  }\n</style>\n</head>\n<body>\n  <nav class="nav">吸顶导航</nav>\n  <div style="height:1000px;">滚动查看</div>\n</body>\n</html>',
              hints: [
                'position: sticky',
                'top: 0 触发吸顶',
                '背景色与文字色对比要够',
              ],
            },
          ],
          realWorldScenario:
            '卡片右上角的「NEW」角标、视频播放器的全屏按钮、移动端的吸顶 tab 栏——都是父 relative + 子 absolute 或 sticky 的典型应用。',
        },
        {
          id: 'css-ch2-l3',
          title: 'float 浮动',
          order: 2,
          content_md:
            '`float` 让元素脱离文档流向左/右浮动，文字会环绕浮动元素。' +
            '历史曾用 float 做整页布局，现已被 flex/grid 取代，' +
            '但仍适用于「文字环绕图片」这类场景。\n\n' +
            'float 的副作用：父元素高度塌陷（不包含浮动子元素的高度）。' +
            '清除浮动方法：父元素加 `overflow: hidden`（简单但可能裁剪）、' +
            '或用 clearfix hack（`::after { content:""; display:block; clear:both; }`）、' +
            '或父元素也浮动（不推荐）。\n\n' +
            '现代项目尽量用 flex/grid 替代 float 做布局，float 仅用于文字环绕。' +
            '`clear: both/left/right` 强制元素不紧邻浮动元素。' +
            '理解 float 是维护老项目的前提，新项目不必深究。',
          examples: [
            {
              title: '文字环绕图片',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .pic {\n    float: left;\n    margin: 0 15px 5px 0;\n    width: 120px;\n  }\n  .text { line-height: 1.6; }\n</style>\n</head>\n<body>\n  <img class="pic" src="https://picsum.photos/120/120" alt="图">\n  <p class="text">这是一段文字，会自动环绕在浮动图片的右侧。float 让图片脱离文档流靠左浮动，文字填补右侧空间，形成报纸式的图文混排效果。这是 float 在现代布局中仍合理的少数场景。</p>\n</body>\n</html>',
              explanation:
                'float: left 让图片靠左，文字环绕右侧；margin 留白避免文字贴图。这是 float 的正当用途。',
            },
            {
              title: 'clearfix 清除浮动',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .clearfix::after {\n    content: "";\n    display: block;\n    clear: both;\n  }\n  .box { background: #eee; border: 1px solid #999; }\n  .left { float: left; width: 40%; background: #faa; }\n  .right { float: right; width: 40%; background: #aaf; }\n</style>\n</head>\n<body>\n  <div class="box clearfix">\n    <div class="left">左浮动</div>\n    <div class="right">右浮动</div>\n  </div>\n  <p>父元素已包含浮动子元素高度（不塌陷）</p>\n</body>\n</html>',
              explanation:
                'clearfix 用 ::after 伪元素 clear:both 撑起父高度；这是清除浮动的标准 hack，老项目必备。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '让一张图片左浮动，margin 10px，配一段文字实现环绕效果。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  img {\n    float: ___;\n    margin: ___;\n    width: 100px;\n  }\n</style>\n</head>\n<body>\n  <img src="https://picsum.photos/100/100" alt="图">\n  <p>这段文字应环绕图片。</p>\n</body>\n</html>',
              hints: [
                'float: left 靠左',
                'margin: 10px 留白',
                '文字会自动环绕浮动元素',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 clearfix hack（::after + clear:both）清除父元素浮动塌陷。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .box::after {\n    content: "";\n    display: ___;\n    clear: ___;\n  }\n  .box { background: #eee; }\n  .left { float: left; width: 40%; background: #faa; }\n</style>\n</head>\n<body>\n  <div class="box">\n    <div class="left">左浮动</div>\n  </div>\n  <p>父元素高度应正常</p>\n</body>\n</html>',
              hints: [
                '::after 伪元素加 content',
                'display: block 让其成为块级',
                'clear: both 清除两侧浮动',
              ],
            },
          ],
          realWorldScenario:
            '新闻详情页图文混排用 float:left 让图片靠左、文字环绕——这是 float 在现代布局中唯一合理的场景；其余布局用 flex/grid。',
        },
        {
          id: 'css-ch2-l4',
          title: 'flexbox 基础',
          order: 3,
          content_md:
            'Flexbox 是现代一维布局首选。父元素设 `display: flex` 成为 flex 容器，' +
            '子元素自动成为 flex 项目，沿主轴排列。' +
            '`flex-direction`（row 横向/column 纵向）决定主轴方向，' +
            '`justify-content` 控制主轴对齐（flex-start/center/space-between/space-around/space-evenly）。\n\n' +
            '`align-items` 控制交叉轴对齐（stretch 默认拉伸/center/flex-start/flex-end/baseline）。' +
            '`gap` 设置项目间距（比 margin 方便，不作用在两端）。' +
            'flex 布局相比 float 简洁得多，是导航栏、卡片横排、工具栏的首选。\n\n' +
            '一维布局（一行或一列）用 flex，二维布局（行列网格）用 grid。' +
            'flex 默认不换行（`flex-wrap: nowrap`），项目会压缩；' +
            '设 `flex-wrap: wrap` 允许换行。后续章节深入 flex 细节。',
          examples: [
            {
              title: '横向排列与对齐',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n    background: #eee;\n    padding: 10px;\n  }\n  .item { background: coral; padding: 15px; color: white; }\n</style>\n</head>\n<body>\n  <div class="container">\n    <div class="item">A</div>\n    <div class="item">B</div>\n    <div class="item">C</div>\n  </div>\n</body>\n</html>',
              explanation:
                'flex 让三项目横向排列；space-between 两端对齐中间等分；align-items:center 交叉轴居中；gap 设间距。',
            },
            {
              title: '纵向布局',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .col {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .row-item { background: teal; color: white; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="col">\n    <div class="row-item">第一行</div>\n    <div class="row-item">第二行</div>\n    <div class="row-item">第三行</div>\n  </div>\n</body>\n</html>',
              explanation:
                'flex-direction: column 让项目纵向排列；常用于侧边栏、垂直菜单、表单字段堆叠。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '将 class 为 "row" 的容器设为 flex，子元素居中对齐（justify-content: center），间距 10px。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row {\n    display: ___;\n    justify-content: ___;\n    gap: ___;\n  }\n  .row > div { background: teal; color: white; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="row">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n  </div>\n</body>\n</html>',
              hints: [
                'display: flex',
                'justify-content: center',
                'gap: 10px 设间距',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 flex-direction: column 创建一个纵向排列的三个项目，间距 8px。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .col {\n    display: flex;\n    flex-direction: ___;\n    gap: ___;\n  }\n  .col > div { background: #faa; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="col">\n    <div>A</div>\n    <div>B</div>\n    <div>C</div>\n  </div>\n</body>\n</html>',
              hints: [
                'flex-direction: column 纵向',
                'gap: 8px 间距',
                '子项自动纵向排列',
              ],
            },
          ],
          realWorldScenario:
            '导航栏是 flex 的经典场景：logo 左、菜单右、用 space-between 一行搞定；以往用 float + clearfix 要写一堆 hack，flex 一条属性解决。',
        },
      ],
    },
    // ====================== 第三章 ======================
    {
      id: 'css-ch3',
      title: 'Flexbox 与 Grid',
      order: 2,
      lessons: [
        {
          id: 'css-ch3-l1',
          title: 'flex 方向与对齐',
          order: 0,
          content_md:
            '`flex-direction` 决定主轴方向：`row`（默认，水平左→右）、`row-reverse`（右→左）、' +
            '`column`（垂直上→下）、`column-reverse`（下→上）。主轴和交叉轴随方向互换。\n\n' +
            '`justify-content` 管主轴对齐：flex-start（靠起点）、center（居中）、' +
            'flex-end（靠终点）、space-between（两端贴边中间等分）、' +
            'space-around（每项两侧等距）、space-evenly（所有间距完全相等）。\n\n' +
            '`align-items` 管交叉轴对齐：stretch（拉伸填满，默认）、center（居中）、' +
            'flex-start/flex-end（靠起/终点）、baseline（基线对齐，文字底部对齐）。' +
            '单项目可用 `align-self` 单独覆盖对齐方式。' +
            '理解主轴/交叉轴是掌握 flex 的关键——方向变了对齐轴也变。',
          examples: [
            {
              title: 'justify-content 五种值',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .demo { display: flex; margin: 5px 0; background: #eee; padding: 5px; }\n  .item { background: coral; padding: 8px 12px; color: white; }\n  .sb { justify-content: space-between; }\n  .c { justify-content: center; }\n  .sa { justify-content: space-around; }\n</style>\n</head>\n<body>\n  <div class="demo sb"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>\n  <div class="demo c"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>\n  <div class="demo sa"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>\n</body>\n</html>',
              explanation:
                'space-between 两端贴边；center 居中；space-around 每项两侧等距；按场景选择。',
            },
            {
              title: 'align-items 交叉轴对齐',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .demo {\n    display: flex;\n    align-items: center;\n    height: 100px;\n    background: #eee;\n  }\n  .item { background: teal; color: white; padding: 5px 15px; }\n  .tall { padding: 20px 15px; }\n</style>\n</head>\n<body>\n  <div class="demo">\n    <div class="item">小</div>\n    <div class="item tall">大</div>\n    <div class="item">小</div>\n  </div>\n</body>\n</html>',
              explanation:
                'align-items: center 让所有项目交叉轴居中，高度不同的项也对齐中线；stretch 则拉伸等高。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '创建 flex 容器，用 space-between 让三个项目两端贴边、中间等分，交叉轴居中。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row {\n    display: flex;\n    justify-content: ___;\n    align-items: ___;\n    background: #eee;\n    padding: 10px;\n  }\n  .row > div { background: coral; color: white; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="row"><div>A</div><div>B</div><div>C</div></div>\n</body>\n</html>',
              hints: [
                'justify-content: space-between',
                'align-items: center',
                '观察两端贴边效果',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 flex-direction: column 让项目纵向排列，并用 justify-content: center 实现垂直居中。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .col {\n    display: flex;\n    flex-direction: ___;\n    justify-content: ___;\n    height: 200px;\n    background: #eee;\n  }\n  .col > div { background: teal; color: white; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="col"><div>垂直居中</div></div>\n</body>\n</html>',
              hints: [
                'flex-direction: column 纵向',
                'justify-content: center 在纵向即垂直居中',
                '容器需有高度才看到效果',
              ],
            },
          ],
          realWorldScenario:
            '卡片底部的「价格 + 立即购买按钮」用 flex + space-between 让价格靠左、按钮靠右；垂直居中用 align-items:center，一套属性搞定产品卡片排版。',
        },
        {
          id: 'css-ch3-l2',
          title: 'flex-wrap 与 flex 属性',
          order: 1,
          content_md:
            '`flex-wrap` 控制是否换行：`nowrap`（默认不换行，项目压缩）、' +
            '`wrap`（换行，项目保持原尺寸）。响应式布局常需 wrap，避免小屏挤压。\n\n' +
            'flex 项目三个核心属性：`flex-grow`（剩余空间分配比例，0 不长）、' +
            '`flex-shrink`（空间不足压缩比例，1 可压缩）、`flex-basis`（初始大小）。' +
            '简写 `flex: 1` 等价 `1 1 0`（等分剩余空间），`flex: 0 0 200px`（固定 200px 不长不缩）。\n\n' +
            '常用套路：`flex: 1` 让多个项目等分容器；' +
            '`flex: none`（即 0 0 auto）保持原尺寸不参与伸缩。' +
            '侧边栏固定宽 + 主内容自适应：`sidebar { flex: 0 0 200px; } main { flex: 1; }`。' +
            '`order` 属性可改变项目顺序（默认 0，值小在前）。',
          examples: [
            {
              title: 'flex: 1 等分',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row { display: flex; gap: 5px; }\n  .item {\n    flex: 1;          /* 等分剩余空间 */\n    background: coral;\n    color: white;\n    padding: 15px;\n    text-align: center;\n  }\n</style>\n</head>\n<body>\n  <div class="row">\n    <div class="item">等分 1</div>\n    <div class="item">等分 2</div>\n    <div class="item">等分 3</div>\n  </div>\n</body>\n</html>',
              explanation:
                'flex: 1 让三项目等分容器宽度；无论容器多宽都平均分配，是自适应布局利器。',
            },
            {
              title: '固定侧栏 + 自适应主区',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .layout { display: flex; gap: 10px; height: 150px; }\n  .sidebar {\n    flex: 0 0 180px;  /* 固定 180px */\n    background: #333;\n    color: white;\n    padding: 10px;\n  }\n  .main {\n    flex: 1;          /* 占剩余空间 */\n    background: #eee;\n    padding: 10px;\n  }\n</style>\n</head>\n<body>\n  <div class="layout">\n    <div class="sidebar">固定侧栏 180px</div>\n    <div class="main">主内容区自适应</div>\n  </div>\n</body>\n</html>',
              explanation:
                '侧栏 flex:0 0 180px 固定宽，主区 flex:1 占剩余空间；这是后台管理布局的经典写法。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '让三个 flex 项目等分容器宽度（flex: 1）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row { display: flex; gap: 5px; }\n  .item { flex: ___; background: coral; color: white; padding: 15px; text-align: center; }\n</style>\n</head>\n<body>\n  <div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>\n</body>\n</html>',
              hints: [
                'flex: 1 等价 1 1 0',
                '所有项目都设 flex:1',
                '剩余空间平均分配',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建固定侧栏（180px）+ 自适应主区的两栏布局。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .layout { display: flex; gap: 10px; height: 150px; }\n  .sidebar { flex: ___; background: #333; color: white; padding: 10px; }\n  .main { flex: ___; background: #eee; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="layout">\n    <div class="sidebar">侧栏</div>\n    <div class="main">主区</div>\n  </div>\n</body>\n</html>',
              hints: [
                '侧栏 flex: 0 0 180px',
                '主区 flex: 1 自适应',
                'flex: 0 0 表示不长不缩',
              ],
            },
          ],
          realWorldScenario:
            '后台管理系统几乎都是「侧栏菜单 + 主内容」布局：侧栏固定 200px，主区 flex:1 自适应；侧栏可折叠时主区自动扩展，flex 让这套布局零成本实现。',
        },
        {
          id: 'css-ch3-l3',
          title: 'grid 基础',
          order: 2,
          content_md:
            'Grid 是二维布局系统，同时控制行和列。父元素设 `display: grid`，' +
            '用 `grid-template-columns`/`grid-template-rows` 定义行列。' +
            '如 `grid-template-columns: 200px 1fr 200px` 定义三列（固定-自适应-固定）。\n\n' +
            '`fr` 是比例单位（fraction），`1fr 2fr` 表示按 1:2 分配剩余空间。' +
            '`repeat(3, 1fr)` 重复 3 列等宽；`repeat(auto-fill, minmax(200px, 1fr))` ' +
            '自动填充响应式列（每列最小 200px 最大等分），是卡片网格神器。\n\n' +
            '`gap` 设行列间距（`row-gap`/`column-gap` 分别设）。' +
            'Grid 适合整体页面布局（行列结构），flex 适合组件内部一维排列。' +
            '二者常配合使用：grid 做页面骨架，flex 做组件内部。',
          examples: [
            {
              title: '三列网格',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 200px 1fr 200px;\n    gap: 10px;\n    height: 200px;\n  }\n  .grid > div { padding: 15px; color: white; }\n  .a { background: #333; }\n  .b { background: coral; }\n  .c { background: teal; }\n</style>\n</head>\n<body>\n  <div class="grid">\n    <div class="a">左侧 200px</div>\n    <div class="b">中间自适应</div>\n    <div class="c">右侧 200px</div>\n  </div>\n</body>\n</html>',
              explanation:
                'grid-template-columns 定义三列；1fr 占剩余空间；gap 设间距。比 flex 更适合二维页面布局。',
            },
            {
              title: '响应式卡片网格',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    gap: 10px;\n  }\n  .card { background: #eee; padding: 15px; text-align: center; }\n</style>\n</head>\n<body>\n  <div class="cards">\n    <div class="card">1</div>\n    <div class="card">2</div>\n    <div class="card">3</div>\n    <div class="card">4</div>\n    <div class="card">5</div>\n  </div>\n  <p>缩放窗口看列数自动变化</p>\n</body>\n</html>',
              explanation:
                'auto-fill + minmax 让列数随宽度自动变化，每列最小 120px；无需媒体查询即可响应式。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '创建一个 grid 三列布局：200px / 1fr / 200px，间距 10px。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .grid {\n    display: ___;\n    grid-template-columns: ___;\n    gap: ___;\n  }\n  .grid > div { padding: 15px; }\n</style>\n</head>\n<body>\n  <div class="grid"><div>A</div><div>B</div><div>C</div></div>\n</body>\n</html>',
              hints: [
                'display: grid',
                'grid-template-columns: 200px 1fr 200px',
                'gap: 10px',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 repeat(auto-fill, minmax(120px, 1fr)) 创建响应式卡片网格，5 个卡片，间距 10px。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .cards {\n    display: grid;\n    grid-template-columns: ___;\n    gap: ___;\n  }\n  .card { background: #eee; padding: 15px; text-align: center; }\n</style>\n</head>\n<body>\n  <div class="cards">\n    <div class="card">1</div>\n    <div class="card">2</div>\n    <div class="card">3</div>\n    <div class="card">4</div>\n    <div class="card">5</div>\n  </div>\n</body>\n</html>',
              hints: [
                'repeat(auto-fill, minmax(120px, 1fr))',
                'gap: 10px',
                '缩放窗口看列数变化',
              ],
            },
          ],
          realWorldScenario:
            '商品列表、相册、博客文章卡片网格用 auto-fill + minmax 一行 CSS 实现响应式：宽屏 4 列、平板 2 列、手机 1 列，无需任何媒体查询。',
        },
        {
          id: 'css-ch3-l4',
          title: 'grid 区域布局',
          order: 3,
          content_md:
            'Grid 强大的地方在 `grid-area` 命名区域布局。先用 `grid-template-areas` 定义网格图：' +
            '用字符串画出布局结构，每行用引号包裹，名字相同则占同一区域，`.` 表示空。\n\n' +
            '然后给子元素设 `grid-area: 名字` 对号入座。' +
            '这种「画图式」布局极其直观，特别适合页面整体骨架' +
            '（header/nav/main/sidebar/footer 的复杂排版）。\n\n' +
            '也可用 `grid-column: 1 / 3`（占第 1 到第 3 列线）或 `grid-row` 跨行。' +
            '线编号从 1 开始，可用 span 关键字：`grid-column: span 2`（跨 2 列）。' +
            'grid 区域布局让复杂页面结构一目了然，是现代布局的杀手锏。',
          examples: [
            {
              title: 'grid-template-areas 画图布局',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .layout {\n    display: grid;\n    grid-template-areas:\n      "header header header"\n      "nav    main   aside"\n      "footer footer footer";\n    grid-template-columns: 100px 1fr 100px;\n    grid-template-rows: 50px 1fr 40px;\n    gap: 5px;\n    height: 250px;\n  }\n  .header { grid-area: header; background: #333; color: white; }\n  .nav { grid-area: nav; background: #555; color: white; }\n  .main { grid-area: main; background: #eee; }\n  .aside { grid-area: aside; background: #777; color: white; }\n  .footer { grid-area: footer; background: #333; color: white; }\n</style>\n</head>\n<body>\n  <div class="layout">\n    <div class="header">header</div>\n    <div class="nav">nav</div>\n    <div class="main">main</div>\n    <div class="aside">aside</div>\n    <div class="footer">footer</div>\n  </div>\n</body>\n</html>',
              explanation:
                'grid-template-areas 像画图一样定义布局；子元素用 grid-area 对号入座；改布局只需改 areas 字符串。',
            },
            {
              title: '跨列 span',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 5px;\n  }\n  .item { background: coral; color: white; padding: 15px; text-align: center; }\n  .wide { grid-column: span 2; background: teal; }\n</style>\n</head>\n<body>\n  <div class="grid">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item wide">跨两列</div>\n    <div class="item">5</div>\n  </div>\n</body>\n</html>',
              explanation:
                'grid-column: span 2 让某项跨 2 列；常用于不规则网格（如相册大图占两格）。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 grid-template-areas 画一个 header/main/footer 三行布局，子元素用 grid-area 对号入座。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .layout {\n    display: grid;\n    grid-template-areas:\n      "___"\n      "___"\n      "___";\n    grid-template-rows: 50px 1fr 40px;\n    gap: 5px;\n    height: 200px;\n  }\n  .header { grid-area: ___; background: #333; color: white; }\n  .main { grid-area: ___; background: #eee; }\n  .footer { grid-area: ___; background: #333; color: white; }\n</style>\n</head>\n<body>\n  <div class="layout">\n    <div class="header">header</div>\n    <div class="main">main</div>\n    <div class="footer">footer</div>\n  </div>\n</body>\n</html>',
              hints: [
                'areas 三行各一个名字',
                'grid-area 对应名字',
                '名字要一致',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建 3 列网格，让其中一个项目跨两列（grid-column: span 2）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; }\n  .item { background: coral; color: white; padding: 15px; text-align: center; }\n  .wide { grid-column: ___; background: teal; }\n</style>\n</head>\n<body>\n  <div class="grid">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="wide">跨两列</div>\n    <div class="item">5</div>\n  </div>\n</body>\n</html>',
              hints: [
                'grid-column: span 2',
                '该元素会占两列宽度',
                '其余元素正常排列',
              ],
            },
          ],
          realWorldScenario:
            '后台管理布局用 grid-template-areas 一目了然：header 横跨顶部、sidebar+main 左右、footer 横跨底部；要改布局（如隐藏 sidebar）只需改 areas 字符串，无需动 HTML。',
        },
      ],
    },
    // ====================== 第四章 ======================
    {
      id: 'css-ch4',
      title: '响应式设计',
      order: 3,
      lessons: [
        {
          id: 'css-ch4-l1',
          title: '媒体查询基础',
          order: 0,
          content_md:
            '媒体查询 `@media` 根据设备特征（宽度、高度、方向等）应用不同样式，是响应式设计的核心。' +
            '语法：`@media (max-width: 600px) { ... }` 在宽度不超过 600px 时生效。\n\n' +
            '常用条件：`max-width`（最大宽度）、`min-width`（最小宽度）、' +
            '`orientation: landscape/portrait`（横屏/竖屏）、`prefers-color-scheme: dark`（深色模式偏好）。' +
            '可用 `and`/`not`/`,（或）`组合条件。\n\n' +
            '配合 viewport meta（`<meta name="viewport" content="width=device-width, initial-scale=1.0">`）' +
            '才能在移动端正确工作。媒体查询是「同一套 HTML，不同样式」的基础，' +
            '让网页在手机/平板/桌面都有良好体验。',
          examples: [
            {
              title: '基础媒体查询',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .box {\n    background: blue;\n    color: white;\n    padding: 20px;\n  }\n  /* 宽度小于 600px 时变红 */\n  @media (max-width: 600px) {\n    .box { background: red; }\n  }\n</style>\n</head>\n<body>\n  <div class="box">缩放窗口看颜色变化（窄屏红、宽屏蓝）</div>\n</body>\n</html>',
              explanation:
                'max-width: 600px 在窄屏生效；viewport meta 保证移动端正确判断宽度。这是响应式最小示例。',
            },
            {
              title: '深色模式适配',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { background: white; color: black; transition: 0.3s; }\n  /* 系统设为深色时 */\n  @media (prefers-color-scheme: dark) {\n    body { background: #222; color: #eee; }\n  }\n</style>\n</head>\n<body>\n  <p>跟随系统深色模式切换（在系统设置里切换深色模式看效果）</p>\n</body>\n</html>',
              explanation:
                'prefers-color-scheme: dark 检测系统深色偏好；无需 JS 即可跟随系统主题，体验友好。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '在屏幕宽度小于 768px 时，将 class 为 "sidebar" 的元素隐藏（display: none）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .sidebar { background: gray; padding: 10px; }\n  @media (max-width: 768px) {\n    .sidebar { display: ___; }\n  }\n</style>\n</head>\n<body>\n  <div class="sidebar">侧边栏</div>\n</body>\n</html>',
              hints: [
                '@media (max-width: 768px)',
                'display: none 隐藏',
                '宽屏时侧边栏正常显示',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 prefers-color-scheme: dark 实现深色模式：深色时 body 背景为 #222、文字为 #eee。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { background: white; color: black; }\n  @media (prefers-color-scheme: ___) {\n    body { background: ___; color: ___; }\n  }\n</style>\n</head>\n<body>\n  <p>跟随系统主题</p>\n</body>\n</html>',
              hints: [
                'prefers-color-scheme: dark',
                'background: #222',
                'color: #eee',
              ],
            },
          ],
          realWorldScenario:
            '深色模式跟随系统（prefers-color-scheme）是现代网站标配；新闻类网站在窄屏隐藏侧边栏、宽屏显示，靠媒体查询一条属性搞定。',
        },
        {
          id: 'css-ch4-l2',
          title: '移动优先策略',
          order: 1,
          content_md:
            '移动优先（Mobile First）策略：先写移动端样式（默认），再用 `min-width` 媒体查询渐进增强到大屏。' +
            '如 `@media (min-width: 768px) { ... }` 在 768px 以上生效。\n\n' +
            '对比桌面优先（默认桌面，`max-width` 缩小到移动）：移动优先符合「渐进增强」理念，' +
            '移动端加载的 CSS 更少（性能好），且移动端样式作为基础更稳定。' +
            '现代项目普遍采用移动优先。\n\n' +
            '实践：默认样式针对最窄屏（单列、大字号、简化布局），' +
            '随屏幕变宽逐步加列、调整间距、显示更多内容。' +
            '避免「桌面版缩小到手机」的思维，从最小屏开始设计体验。',
          examples: [
            {
              title: '移动优先布局',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  /* 默认移动端：单列 */\n  .cards { display: flex; flex-direction: column; gap: 10px; }\n  .card { background: #eee; padding: 15px; }\n  /* 平板及以上：两列 */\n  @media (min-width: 600px) {\n    .cards { flex-direction: row; flex-wrap: wrap; }\n    .card { flex: 1 1 40%; }\n  }\n  /* 桌面：三列 */\n  @media (min-width: 900px) {\n    .card { flex: 1 1 25%; }\n  }\n</style>\n</head>\n<body>\n  <div class="cards">\n    <div class="card">1</div>\n    <div class="card">2</div>\n    <div class="card">3</div>\n  </div>\n</body>\n</html>',
              explanation:
                '默认单列（移动）；min-width:600px 两列；min-width:900px 三列。渐进增强，移动端样式最简。',
            },
            {
              title: '字号响应式',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  h1 {\n    font-size: 1.5rem;  /* 默认移动端 */\n  }\n  @media (min-width: 768px) {\n    h1 { font-size: 2rem; }  /* 平板更大 */\n  }\n  @media (min-width: 1200px) {\n    h1 { font-size: 2.5rem; }  /* 桌面最大 */\n  }\n</style>\n</head>\n<body>\n  <h1>响应式标题</h1>\n</body>\n</html>',
              explanation:
                '移动优先：默认小字号，大屏逐步放大；结合 rem 让用户缩放设置生效。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用移动优先：默认卡片单列，min-width:600px 时变两列（flex-direction: row + flex-wrap）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .cards { display: flex; flex-direction: ___; gap: 10px; }\n  .card { background: #eee; padding: 15px; }\n  @media (min-width: 600px) {\n    .cards { flex-direction: ___; flex-wrap: wrap; }\n    .card { flex: 1 1 40%; }\n  }\n</style>\n</head>\n<body>\n  <div class="cards"><div class="card">1</div><div class="card">2</div><div class="card">3</div></div>\n</body>\n</html>',
              hints: [
                '默认 column 单列',
                'min-width:600px 时 row',
                'flex-wrap: wrap 允许换行',
              ],
            },
            {
              type: 'open-ended',
              prompt: '移动优先字号：默认 h1 为 1.5rem，min-width:768px 时为 2rem。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  h1 { font-size: ___; }\n  @media (min-width: 768px) {\n    h1 { font-size: ___; }\n  }\n</style>\n</head>\n<body>\n  <h1>响应式标题</h1>\n</body>\n</html>',
              hints: [
                '默认 1.5rem 移动端',
                'min-width:768px 时 2rem',
                '用 min-width 渐进增强',
              ],
            },
          ],
          realWorldScenario:
            '内容站改版普遍要求移动优先：Google 移动优先索引意味着移动版样式是 SEO 基准；移动端样式简洁，加载快，体验稳定，再向大屏增强。',
        },
        {
          id: 'css-ch4-l3',
          title: 'viewport 与视口单位',
          order: 2,
          content_md:
            'viewport meta 是响应式的起点：`<meta name="viewport" content="width=device-width, initial-scale=1.0">`，' +
            '让浏览器以设备实际宽度渲染而非默认 980px 缩放。没有它，手机会显示缩小版桌面页。\n\n' +
            '视口单位：`vw`（1% 视口宽）、`vh`（1% 视口高）、`vmin`（vw/vh 较小者）、' +
            '`vmax`（较大者）。`100vh` 等于视口全高，常用于全屏 hero 区。' +
            '注意移动端 `100vh` 因地址栏伸缩会跳动，用 `100dvh`（动态视口高）更稳定。\n\n' +
            '百分比单位相对父元素：`width: 50%` 是父宽的一半。' +
            '视口单位相对屏幕，适合全屏布局。结合 `calc()` 可混合计算：' +
            '`calc(100vh - 60px)` 全屏减去导航高度。后续章节详讲 calc。',
          examples: [
            {
              title: '全屏 hero 区',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .hero {\n    height: 100vh;\n    background: linear-gradient(#667eea, #764ba2);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 5vw;\n  }\n</style>\n</head>\n<body>\n  <div class="hero">全屏 Hero（100vh）</div>\n  <p>下方内容</p>\n</body>\n</html>',
              explanation:
                '100vh 撑满视口高度；5vw 字号随屏宽变化；常见于产品首页大屏 banner。',
            },
            {
              title: '视口单位字号',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  h1 { font-size: 6vw; }\n  p { font-size: 2vw; }\n</style>\n</head>\n<body>\n  <h1>响应式字号</h1>\n  <p>字号随屏宽缩放</p>\n</body>\n</html>',
              explanation:
                'vw 字号随屏宽自动缩放；窄屏字号小、宽屏字号大。注意极小/极大屏可配 clamp 限制范围。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '创建一个全屏 hero 区：height 100vh，渐变背景，flex 居中内容。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .hero {\n    height: ___;\n    background: linear-gradient(#667eea, #764ba2);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n</style>\n</head>\n<body>\n  <div class="hero">全屏</div>\n</body>\n</html>',
              hints: [
                'height: 100vh 全屏',
                'flex + align-items/justify-content center 居中',
                '配合 viewport meta',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 vw 单位让 h1 字号随屏宽缩放（如 6vw）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  h1 { font-size: ___; }\n</style>\n</head>\n<body>\n  <h1>缩放窗口看字号</h1>\n</body>\n</html>',
              hints: [
                'font-size: 6vw',
                'vw 是视口宽的 1%',
                '缩放窗口字号变化',
              ],
            },
          ],
          realWorldScenario:
            '产品官网首屏用 100vh 全屏 hero 配大字号标题（vw 单位），无论桌面还是手机都占满首屏，视觉冲击力强——这是 SaaS 落地页的标准开场。',
        },
        {
          id: 'css-ch4-l4',
          title: '断点设计',
          order: 3,
          content_md:
            '断点（breakpoint）是媒体查询切换样式的宽度阈值。常见断点参考：' +
            '手机 <768px、平板 768-1024px、桌面 >1024px。但断点不应死记设备宽度，' +
            '而应根据内容「在什么宽度开始变形」来定。\n\n' +
            '主流断点（参考 Tailwind/Bootstrap）：sm 640px、md 768px、lg 1024px、xl 1280px。' +
            '移动优先用 min-width，从小到大渐进。断点不宜过多（3-5 个为宜），' +
            '过多维护成本高且体验割裂。\n\n' +
            '选择断点的方法：先无断点设计移动版，逐步拉宽浏览器，' +
            '在内容「看起来不舒服」的宽度加断点调整。这是内容驱动的断点设计，' +
            '比按设备型号设断点更合理（设备太多列不过来）。',
          examples: [
            {
              title: '常用断点布局',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  /* 默认移动：单列 */\n  .grid { display: grid; grid-template-columns: 1fr; gap: 10px; }\n  .box { background: #eee; padding: 20px; }\n  /* 平板 sm/md：两列 */\n  @media (min-width: 640px) {\n    .grid { grid-template-columns: 1fr 1fr; }\n  }\n  /* 桌面 lg：三列 */\n  @media (min-width: 1024px) {\n    .grid { grid-template-columns: repeat(3, 1fr); }\n  }\n</style>\n</head>\n<body>\n  <div class="grid">\n    <div class="box">1</div><div class="box">2</div><div class="box">3</div>\n    <div class="box">4</div><div class="box">5</div><div class="box">6</div>\n  </div>\n</body>\n</html>',
              explanation:
                '移动单列、平板两列、桌面三列；640/1024 是常用断点；缩放窗口看列数变化。',
            },
            {
              title: '导航栏断点',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .nav { display: flex; flex-direction: column; background: #333; color: white; padding: 10px; }\n  .nav a { color: white; padding: 5px; }\n  /* 桌面：横向 */\n  @media (min-width: 768px) {\n    .nav { flex-direction: row; gap: 15px; }\n  }\n</style>\n</head>\n<body>\n  <nav class="nav">\n    <a href="#">首页</a>\n    <a href="#">产品</a>\n    <a href="#">关于</a>\n  </nav>\n</body>\n</html>',
              explanation:
                '窄屏导航纵向堆叠（汉堡菜单替代方案的简化），768px 以上横向排列；断点切换布局。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用移动优先：默认网格单列，min-width:640px 两列，min-width:1024px 三列。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .grid { display: grid; grid-template-columns: ___; gap: 10px; }\n  .box { background: #eee; padding: 20px; }\n  @media (min-width: 640px) {\n    .grid { grid-template-columns: ___; }\n  }\n  @media (min-width: 1024px) {\n    .grid { grid-template-columns: ___; }\n  }\n</style>\n</head>\n<body>\n  <div class="grid"><div class="box">1</div><div class="box">2</div><div class="box">3</div></div>\n</body>\n</html>',
              hints: [
                '默认 1fr 单列',
                '640px 时 1fr 1fr 两列',
                '1024px 时 repeat(3, 1fr) 三列',
              ],
            },
            {
              type: 'open-ended',
              prompt: '导航栏：默认纵向，min-width:768px 时横向（flex-direction: row）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .nav { display: flex; flex-direction: ___; background: #333; color: white; padding: 10px; }\n  @media (min-width: 768px) {\n    .nav { flex-direction: ___; gap: 15px; }\n  }\n</style>\n</head>\n<body>\n  <nav class="nav"><a href="#">首页</a><a href="#">关于</a></nav>\n</body>\n</html>',
              hints: [
                '默认 column 纵向',
                '768px 时 row 横向',
                'gap 设横向间距',
              ],
            },
          ],
          realWorldScenario:
            '响应式导航栏在手机端折叠成汉堡菜单（纵向），桌面端展开横向——768px 是经典断点；内容卡片网格用 640/1024 断点切换 1/2/3 列。',
        },
      ],
    },
    // ====================== 第五章 ======================
    {
      id: 'css-ch5',
      title: '动画与过渡',
      order: 4,
      lessons: [
        {
          id: 'css-ch5-l1',
          title: 'transition 过渡',
          order: 0,
          content_md:
            '`transition` 让属性变化平滑过渡，而非瞬间跳变。' +
            '语法：`transition: 属性 时长 缓动 延迟`，如 `transition: color 0.3s ease`。' +
            '常用属性：`all`（所有可过渡属性）、`color`/`background`/`transform` 等具体属性。\n\n' +
            '时长如 `0.3s`；缓动函数：`ease`（默认，慢-快-慢）、`linear`（匀速）、' +
            '`ease-in`/`ease-out`/`ease-in-out`、`cubic-bezier(...)` 自定义。' +
            '多属性分开过渡：`transition: color 0.3s, transform 0.5s`。\n\n' +
            'transition 需要触发条件（:hover、:focus、class 变化等）。' +
            '注意：不是所有属性都能过渡（如 display），能过渡的是数值型属性（颜色、尺寸、transform 等）。' +
            'transition 比 animation 简单，适合状态切换的平滑效果。',
          examples: [
            {
              title: 'hover 过渡',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .btn {\n    background: #3498db;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    /* 过渡背景与变形 */\n    transition: background 0.3s, transform 0.3s;\n  }\n  .btn:hover {\n    background: #2980b9;\n    transform: translateY(-2px);\n  }\n</style>\n</head>\n<body>\n  <button class="btn">悬停看过渡</button>\n</body>\n</html>',
              explanation:
                'transition 让 hover 时颜色和位移平滑过渡；不带 transition 则瞬间跳变。按钮交互必备。',
            },
            {
              title: '多属性过渡',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .card {\n    background: white;\n    padding: 20px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    transition: all 0.3s ease;\n  }\n  .card:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n    transform: translateY(-5px);\n  }\n</style>\n</head>\n<body>\n  <div class="card">悬停看阴影与上浮过渡</div>\n</body>\n</html>',
              explanation:
                'all 过渡所有属性；hover 时阴影加深+上浮，营造卡片悬浮感；这是产品卡片常用交互。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为按钮添加 transition：hover 时背景从蓝色变深蓝，时长 0.3s。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .btn {\n    background: #3498db;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    transition: ___;\n  }\n  .btn:hover { background: #2980b9; }\n</style>\n</head>\n<body>\n  <button class="btn">按钮</button>\n</body>\n</html>',
              hints: [
                'transition: background 0.3s',
                'hover 时背景变深',
                '过渡让颜色平滑变化',
              ],
            },
            {
              type: 'open-ended',
              prompt: '为卡片添加 hover 过渡：阴影加深 + translateY(-5px) 上浮，时长 0.3s。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .card {\n    background: white;\n    padding: 20px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    transition: ___;\n  }\n  .card:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n    transform: ___;\n  }\n</style>\n</head>\n<body>\n  <div class="card">悬停上浮</div>\n</body>\n</html>',
              hints: [
                'transition: all 0.3s ease',
                'transform: translateY(-5px)',
                '阴影 + 位移营造悬浮感',
              ],
            },
          ],
          realWorldScenario:
            '电商商品卡片 hover 上浮 + 阴影加深是提升质感的标准交互；用 transition: all 0.3s 一行实现，无需 JS，性能好（transform 走 GPU）。',
        },
        {
          id: 'css-ch5-l2',
          title: 'transform 变换',
          order: 1,
          content_md:
            '`transform` 对元素进行变换，不影响文档流（不引起重排，性能好）。' +
            '常用变换：`translate(x,y)` 平移、`rotate(deg)` 旋转、`scale(n)` 缩放、' +
            '`skew(deg)` 倾斜。可组合：`transform: rotate(45deg) scale(1.2)`。\n\n' +
            'transform 不影响布局——元素变换后周围元素不移动（不像 margin/position）。' +
            '这是做动画的首选（性能优于改 width/top 等触发重排的属性）。' +
            '`transform-origin` 设置变换原点（默认中心，可改 top left 等）。\n\n' +
            '常用场景：hover 放大（scale(1.1)）、图标旋转（rotate）、' +
            '卡片翻转（rotateY）、入场动画（translate + opacity）。' +
            '配合 transition 让变换平滑。transform 是 CSS 动画高性能的基础。',
          examples: [
            {
              title: 'rotate 与 scale',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .box {\n    width: 80px;\n    height: 80px;\n    background: coral;\n    margin: 40px;\n    transition: transform 0.3s;\n  }\n  .box:hover {\n    transform: rotate(45deg) scale(1.5);\n  }\n</style>\n</head>\n<body>\n  <div class="box">悬停旋转放大</div>\n</body>\n</html>',
              explanation:
                'transform 旋转+缩放不影响布局；transition 让变换平滑；hover 触发，松开恢复。',
            },
            {
              title: 'translate 平移',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row {\n    display: flex;\n    gap: 10px;\n  }\n  .item {\n    width: 50px;\n    height: 50px;\n    background: teal;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.3s;\n  }\n  .item:hover {\n    transform: translateY(-10px);\n  }\n</style>\n</head>\n<body>\n  <div class="row">\n    <div class="item">A</div>\n    <div class="item">B</div>\n    <div class="item">C</div>\n  </div>\n</body>\n</html>',
              explanation:
                'translateY 上下平移不影响兄弟元素位置；常做 hover 上浮、tooltip 出现等微交互。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '让一个方块 hover 时旋转 45 度并放大 1.5 倍，平滑过渡 0.3s。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .box {\n    width: 80px;\n    height: 80px;\n    background: coral;\n    transition: transform ___;\n  }\n  .box:hover {\n    transform: ___ ___;\n  }\n</style>\n</head>\n<body>\n  <div class="box"></div>\n</body>\n</html>',
              hints: [
                'transition: transform 0.3s',
                'transform: rotate(45deg) scale(1.5)',
                '组合变换用空格分隔',
              ],
            },
            {
              type: 'open-ended',
              prompt: '让一个元素 hover 时向上移动 10px（translateY），过渡 0.3s，不影响兄弟元素。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .item {\n    width: 60px;\n    height: 60px;\n    background: teal;\n    transition: transform ___;\n  }\n  .item:hover {\n    transform: ___;\n  }\n</style>\n</head>\n<body>\n  <div class="item"></div>\n</body>\n</html>',
              hints: [
                'transition: transform 0.3s',
                'transform: translateY(-10px)',
                '负值向上移动',
              ],
            },
          ],
          realWorldScenario:
            '图标按钮 hover 旋转（如设置齿轮转动）、卡片 hover 上浮、模态框入场缩放——transform 是微交互的灵魂，且走 GPU 合成层性能极佳。',
        },
        {
          id: 'css-ch5-l3',
          title: 'animation 与 keyframes',
          order: 2,
          content_md:
            '`@keyframes` 定义关键帧动画，`animation` 应用动画。' +
            'keyframes 用 `from`/`to` 或百分比 `0%`/`50%`/`100%` 定义各阶段样式。' +
            'animation 简写：`名称 时长 缓动 延迟 次数 方向`，如 `animation: spin 2s linear infinite`。\n\n' +
            '常用值：`infinite` 无限循环、`alternate` 交替反向、`forwards` 停在终态、' +
            '缓动 `linear`/`ease`/`steps(n)`。`animation-play-state: paused` 暂停。' +
            '可定义多关键帧实现复杂动画（如弹跳、脉冲）。\n\n' +
            'animation 与 transition 区别：transition 需触发且只有起止两态，' +
            'animation 可自动运行、循环、多关键帧。' +
            '性能要点：优先动画 `transform`/`opacity`（GPU 加速），避免动画 width/top（触发重排）。',
          examples: [
            {
              title: '旋转动画',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  @keyframes spin {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n  }\n  .loader {\n    width: 40px;\n    height: 40px;\n    border: 4px solid #eee;\n    border-top-color: #3498db;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n  }\n</style>\n</head>\n<body>\n  <div class="loader"></div>\n  <p>加载中...</p>\n</body>\n</html>',
              explanation:
                'keyframes 定义旋转一周；animation infinite 无限循环；这是经典的 loading 转圈动画。',
            },
            {
              title: '多关键帧脉冲',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  @keyframes pulse {\n    0% { transform: scale(1); opacity: 1; }\n    50% { transform: scale(1.2); opacity: 0.7; }\n    100% { transform: scale(1); opacity: 1; }\n  }\n  .dot {\n    width: 20px;\n    height: 20px;\n    background: red;\n    border-radius: 50%;\n    animation: pulse 1.5s ease infinite;\n  }\n</style>\n</head>\n<body>\n  <div class="dot"></div>\n  <p>脉冲动画（常用于通知红点）</p>\n</body>\n</html>',
              explanation:
                '多关键帧定义缩放+透明度变化；常用于通知红点呼吸、心跳等节奏感动画。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 @keyframes 定义 spin 动画（0 到 360 度旋转），让一个圆形无限旋转。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  @keyframes spin {\n    from { transform: ___; }\n    to { transform: ___; }\n  }\n  .loader {\n    width: 40px;\n    height: 40px;\n    border: 4px solid #eee;\n    border-top-color: #3498db;\n    border-radius: 50%;\n    animation: spin ___ linear ___;\n  }\n</style>\n</head>\n<body>\n  <div class="loader"></div>\n</body>\n</html>',
              hints: [
                'from rotate(0deg)，to rotate(360deg)',
                'animation: spin 1s linear infinite',
                'infinite 无限循环',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用多关键帧定义 pulse 动画：0% scale(1)、50% scale(1.2)、100% scale(1)，循环播放。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  @keyframes pulse {\n    0% { transform: ___; }\n    50% { transform: ___; }\n    100% { transform: ___; }\n  }\n  .dot {\n    width: 20px;\n    height: 20px;\n    background: red;\n    border-radius: 50%;\n    animation: pulse 1.5s ease infinite;\n  }\n</style>\n</head>\n<body>\n  <div class="dot"></div>\n</body>\n</html>',
              hints: [
                '0% scale(1)',
                '50% scale(1.2)',
                '100% scale(1)',
              ],
            },
          ],
          realWorldScenario:
            'Loading 转圈、通知红点脉冲、骨架屏闪烁——这些持续状态动画用 keyframes + infinite 实现，无需 JS 定时器，性能好且解耦。',
        },
        {
          id: 'css-ch5-l4',
          title: '3D 变换',
          order: 3,
          content_md:
            '`transform` 支持 3D 变换：`rotateX`/`rotateY`/`rotateZ`（绕轴旋转）、' +
            '`translateZ`（Z 轴平移）、`scaleZ`、`perspective`（透视，定义观察距离）。' +
            '父元素设 `perspective: 1000px` 开启 3D 空间，子元素的 3D 变换才有立体感。\n\n' +
            '`transform-style: preserve-3d` 让子元素保持 3D 空间关系（用于嵌套 3D 结构）。' +
            '`backface-visibility: hidden` 隐藏元素背面（卡片翻转时背面不可见）。' +
            '3D 变换常用于卡片翻转、立方体、视差等效果。\n\n' +
            '3D 动画性能同样走 GPU 合成层，流畅度高。但移动端 3D 性能受限，' +
            '复杂 3D 场景建议用 WebGL/Three.js。CSS 3D 适合小范围交互效果（如翻转卡片）。',
          examples: [
            {
              title: '卡片翻转',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .scene {\n    perspective: 1000px;\n    width: 120px;\n    height: 160px;\n  }\n  .card {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transition: transform 0.6s;\n    transform-style: preserve-3d;\n  }\n  .scene:hover .card {\n    transform: rotateY(180deg);\n  }\n  .face {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    backface-visibility: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n  }\n  .front { background: coral; }\n  .back { background: teal; transform: rotateY(180deg); }\n</style>\n</head>\n<body>\n  <div class="scene">\n    <div class="card">\n      <div class="face front">正面</div>\n      <div class="face back">背面</div>\n    </div>\n  </div>\n  <p>悬停翻转</p>\n</body>\n</html>',
              explanation:
                'perspective 开启 3D；rotateY(180deg) 翻转；preserve-3d 保持子元素 3D；backface-visibility 隐藏背面。',
            },
            {
              title: '透视立方感',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .scene { perspective: 600px; }\n  .box {\n    width: 100px;\n    height: 100px;\n    background: coral;\n    margin: 50px;\n    transition: transform 0.5s;\n  }\n  .scene:hover .box {\n    transform: rotateX(45deg) rotateY(45deg);\n  }\n</style>\n</head>\n<body>\n  <div class="scene">\n    <div class="box">悬停看 3D 旋转</div>\n  </div>\n</body>\n</html>',
              explanation:
                'perspective 提供透视深度；rotateX/Y 绕两轴旋转产生立体感；无 perspective 则无近大远小效果。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为父元素开 perspective: 1000px，子元素 hover 时 rotateY(180deg) 翻转，过渡 0.6s。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .scene { perspective: ___; width: 120px; height: 160px; }\n  .card {\n    width: 100%; height: 100%;\n    transition: transform ___;\n  }\n  .scene:hover .card {\n    transform: ___;\n  }\n</style>\n</head>\n<body>\n  <div class="scene"><div class="card" style="background:coral;color:white;display:flex;align-items:center;justify-content:center;">翻转</div></div>\n</body>\n</html>',
              hints: [
                'perspective: 1000px',
                'transition: transform 0.6s',
                'transform: rotateY(180deg)',
              ],
            },
            {
              type: 'open-ended',
              prompt: '让一个方块 hover 时绕 X 轴旋转 45 度，父元素加 perspective: 600px 产生立体感。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .scene { perspective: ___; }\n  .box {\n    width: 100px; height: 100px;\n    background: coral;\n    margin: 50px;\n    transition: transform 0.5s;\n  }\n  .scene:hover .box {\n    transform: ___;\n  }\n</style>\n</head>\n<body>\n  <div class="scene"><div class="box">3D</div></div>\n</body>\n</html>',
              hints: [
                'perspective: 600px',
                'transform: rotateX(45deg)',
                'perspective 让 3D 有近大远小',
              ],
            },
          ],
          realWorldScenario:
            '会员卡正反面翻转展示卡号/背面信息、抽奖刮卡翻转动画——3D 翻转是会员卡/卡牌类组件的经典交互，CSS 一套属性实现无需 Three.js。',
        },
      ],
    },
    // ====================== 第六章 ======================
    {
      id: 'css-ch6',
      title: '高级特性',
      order: 5,
      lessons: [
        {
          id: 'css-ch6-l1',
          title: 'CSS 变量（自定义属性）',
          order: 0,
          content_md:
            'CSS 变量（自定义属性）以 `--` 开头定义，用 `var()` 引用。' +
            '在 `:root` 定义全局变量，如 `--primary: #3490dc;`，' +
            '用 `color: var(--primary)` 引用。修改变量值，所有引用处自动更新。\n\n' +
            '变量可设默认值：`var(--primary, #ccc)`（变量未定义时用 #ccc）。' +
            '变量作用域：定义在 :root 全局，定义在某个选择器内仅其子孙可用。' +
            'JS 可读写：`getComputedStyle(el).getPropertyValue("--primary")`、' +
            '`el.style.setProperty("--primary", "red")`。\n\n' +
            '变量让主题切换、设计令牌（design tokens）管理变得简单：' +
            '定义一套颜色/间距变量，切换主题只需改变量值。' +
            '相比 Sass 变量，CSS 变量是运行时的，能响应媒体查询和 JS 动态修改。',
          examples: [
            {
              title: '主题变量',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  :root {\n    --primary: #3490dc;\n    --bg: #f8f8f8;\n    --padding: 16px;\n  }\n  .btn {\n    background: var(--primary);\n    color: white;\n    padding: var(--padding);\n    border: none;\n    border-radius: 4px;\n  }\n  .box {\n    background: var(--bg);\n    padding: var(--padding);\n  }\n</style>\n</head>\n<body>\n  <button class="btn">主题按钮</button>\n  <div class="box">主题盒子</div>\n</body>\n</html>',
              explanation:
                ':root 定义全局变量；var() 引用；改 --primary 一处，所有按钮颜色更新。设计系统的核心。',
            },
            {
              title: '暗色主题切换',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  :root {\n    --bg: white;\n    --text: black;\n  }\n  /* 加 dark 类切换暗色 */\n  .dark {\n    --bg: #222;\n    --text: #eee;\n  }\n  body { background: var(--bg); color: var(--text); transition: 0.3s; }\n</style>\n</head>\n<body class="dark">\n  <p>暗色主题（改 body 的 class 即可切换）</p>\n</body>\n</html>',
              explanation:
                '暗色主题只需重新定义变量；body 引用变量自动更新；切换主题无需改每处样式，只改变量。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '在 :root 定义 --primary 为 #3490dc，在 .btn 中用它做背景色。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  :root {\n    --primary: ___;\n  }\n  .btn {\n    background: var(--___);\n    color: white;\n    padding: 10px 20px;\n    border: none;\n  }\n</style>\n</head>\n<body>\n  <button class="btn">主题按钮</button>\n</body>\n</html>',
              hints: [
                '--primary: #3490dc',
                'var(--primary) 引用',
                '改一处全局生效',
              ],
            },
            {
              type: 'open-ended',
              prompt: '实现主题切换：:root 默认白底黑字，.dark 类下变量改为深底浅字。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  :root {\n    --bg: white;\n    --text: black;\n  }\n  .dark {\n    --bg: ___;\n    --text: ___;\n  }\n  body { background: var(--bg); color: var(--text); }\n</style>\n</head>\n<body class="dark">\n  <p>暗色主题</p>\n</body>\n</html>',
              hints: [
                '.dark 下 --bg: #222',
                '--text: #eee',
                'body 引用变量自动更新',
              ],
            },
          ],
          realWorldScenario:
            '设计系统用 CSS 变量定义所有颜色/间距/字号（design tokens）；暗色模式只需重新定义一套变量值；JS 切换 body 的 class 即可整体换肤，无需重载样式表。',
        },
        {
          id: 'css-ch6-l2',
          title: '伪类与伪元素',
          order: 1,
          content_md:
            '伪类选择元素的状态：`:hover`（悬停）、`:focus`（聚焦）、`:active`（激活）、' +
            '`:visited`（已访问链接）、`:checked`（选中）、`:disabled`（禁用）、' +
            '`:first-child`/`:last-child`/`:nth-child(n)`（结构位置）。\n\n' +
            '伪元素创建虚拟元素：`::before`/`::after`（在内容前/后插入，需配 `content`）、' +
            '`::first-letter`（首字母）、`::first-line`（首行）、`::selection`（选中文字）。' +
            '伪元素用双冒号区分伪类。\n\n' +
            '`::before`/`::after` 配 content 可加装饰图标、清除浮动、气泡箭头等，' +
            '不增加 HTML 节点。`nth-child` 公式强大：`odd`/`even`（奇偶）、' +
            '`2n+1`（自定义）、`-n+3`（前三个）。斑马纹表格用 `tr:nth-child(even)`。',
          examples: [
            {
              title: 'nth-child 斑马纹',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  tr:nth-child(even) {\n    background: #f2f2f2;\n  }\n  tr:hover {\n    background: #e0f0ff;\n  }\n</style>\n</head>\n<body>\n  <table border="1">\n    <tr><td>行 1</td></tr>\n    <tr><td>行 2</td></tr>\n    <tr><td>行 3</td></tr>\n    <tr><td>行 4</td></tr>\n  </table>\n</body>\n</html>',
              explanation:
                'nth-child(even) 给偶数行加底色形成斑马纹；hover 行高亮；表格可读性大增。',
            },
            {
              title: '::after 清除浮动与装饰',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .clearfix::after {\n    content: "";\n    display: block;\n    clear: both;\n  }\n  .required::after {\n    content: " *";\n    color: red;\n  }\n  .left { float: left; width: 40%; background: #faa; }\n</style>\n</head>\n<body>\n  <div class="clearfix">\n    <div class="left">浮动</div>\n  </div>\n  <label class="required">用户名</label>\n</body>\n</html>',
              explanation:
                '::after 清除浮动（content 空仍需写）；给必填项加红色星号无需改 HTML。伪元素扩展能力。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为表格偶数行添加浅灰背景（nth-child(even)），hover 行高亮蓝色。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  tr:nth-child(___) { background: #f2f2f2; }\n  tr:___ { background: #e0f0ff; }\n</style>\n</head>\n<body>\n  <table border="1">\n    <tr><td>行 1</td></tr>\n    <tr><td>行 2</td></tr>\n    <tr><td>行 3</td></tr>\n    <tr><td>行 4</td></tr>\n  </table>\n</body>\n</html>',
              hints: [
                'nth-child(even) 偶数行',
                'hover 鼠标悬停',
                '斑马纹 + hover 高亮',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 ::after 给 class 为 "required" 的 label 加红色星号（content: " *"）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .required::___ {\n    content: ___;\n    color: red;\n  }\n</style>\n</head>\n<body>\n  <label class="required">用户名</label>\n</body>\n</html>',
              hints: [
                '::after 在内容后插入',
                'content: " *" 星号',
                'color: red 红色',
              ],
            },
          ],
          realWorldScenario:
            '数据表格用 nth-child(even) 斑马纹 + hover 高亮提升可读性；必填字段用 ::after 加星号避免改 HTML——伪类伪元素让交互细节零成本实现。',
        },
        {
          id: 'css-ch6-l3',
          title: 'calc/min/max/clamp',
          order: 2,
          content_md:
            '`calc()` 在 CSS 中做计算，可混合单位：`calc(100% - 40px)`、`calc(2rem + 10px)`。' +
            '运算符前后需空格。常用于「全宽减去固定边距」「字号混合单位」等场景。\n\n' +
            '`min()`/`max()` 选最小/最大值：`width: min(800px, 90%)` 取较小者（不超过 800 且不超过 90%）。' +
            '`clamp(min, preferred, max)` 把值限制在范围内：`font-size: clamp(1rem, 2.5vw, 2rem)` ' +
            '字号在 1-2rem 间随视口变化，避免极小/极大屏失控。\n\n' +
            'clamp 是响应式字号的现代解法——不用媒体查询就能让字号平滑变化且有上下限。' +
            'min/max/clamp 让 CSS 具备了自适应的数学能力，减少媒体查询使用。' +
            '注意这些函数浏览器支持已较好（IE 不支持，现代浏览器 OK）。',
          examples: [
            {
              title: 'calc 混合计算',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .sidebar { width: 200px; float: left; background: #eee; min-height: 100px; }\n  .main {\n    /* 全宽减去侧栏与边距 */\n    width: calc(100% - 220px);\n    margin-left: 220px;\n    background: #faa;\n    min-height: 100px;\n  }\n</style>\n</head>\n<body>\n  <div class="sidebar">侧栏 200px</div>\n  <div class="main">主区 calc(100% - 220px)</div>\n</body>\n</html>',
              explanation:
                'calc 混合百分比与像素；运算符前后空格；常用于减去固定边距/侧栏宽度。',
            },
            {
              title: 'clamp 响应式字号',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  h1 {\n    /* 字号在 1.5rem-3rem 间随视口变化 */\n    font-size: clamp(1.5rem, 5vw, 3rem);\n  }\n  .box {\n    /* 宽度不超过 800px 也不超过 90% */\n    width: min(800px, 90%);\n    background: #eee;\n    padding: 20px;\n    margin: 0 auto;\n  }\n</style>\n</head>\n<body>\n  <h1>响应式标题（缩放窗口看字号平滑变化）</h1>\n  <div class="box">限宽容器</div>\n</body>\n</html>',
              explanation:
                'clamp 字号有上下限且平滑过渡，无需媒体查询；min 限制最大宽度，居中容器常用。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 calc 让主区宽度为 100% - 220px（减去侧栏与边距）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .main {\n    width: ___;\n    background: #faa;\n    min-height: 100px;\n  }\n</style>\n</head>\n<body>\n  <div class="main">主区</div>\n</body>\n</html>',
              hints: [
                'calc(100% - 220px)',
                '运算符前后加空格',
                '可混合百分比和像素',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 clamp 让 h1 字号在 1.5rem 到 3rem 间随视口变化（中间值 5vw）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  h1 {\n    font-size: clamp(___, ___, ___);\n  }\n</style>\n</head>\n<body>\n  <h1>缩放窗口看字号</h1>\n</body>\n</html>',
              hints: [
                'clamp(最小, 首选, 最大)',
                '最小 1.5rem，首选 5vw，最大 3rem',
                '字号有上下限且平滑变化',
              ],
            },
          ],
          realWorldScenario:
            '内容容器用 width: min(1200px, 90%) + margin: auto 实现限宽居中；标题用 clamp 字号平滑响应——零媒体查询的响应式，代码量少且体验流畅。',
        },
        {
          id: 'css-ch6-l4',
          title: '滤镜 filter',
          order: 3,
          content_md:
            '`filter` 给元素应用图像滤镜：`blur(px)` 模糊、`brightness(n)` 亮度、' +
            '`contrast(n)` 对比度、`grayscale(n)` 灰度、`sepia(n)` 复古、' +
            '`hue-rotate(deg)` 色相旋转、`invert(n)` 反相、`saturate(n)` 饱和度、' +
            '`drop-shadow(...)` 投影（跟随形状）。可组合：`filter: blur(2px) grayscale(0.5)`。\n\n' +
            '`backdrop-filter` 给元素背后内容加滤镜（毛玻璃效果）：' +
            '`backdrop-filter: blur(10px)`，需配合半透明背景。常用于 iOS 风格磨砂导航栏。' +
            '注意 backdrop-filter 兼容性较新，需加 `-webkit-` 前缀。\n\n' +
            'filter 性能：模糊等滤镜较耗 GPU，大量元素同时滤镜可能卡顿。' +
            'hover 灰度转彩色、模态背景模糊是常见用法。' +
            'drop-shadow 优于 box-shadow 之处：跟随元素实际形状（如透明 PNG 的轮廓）。',
          examples: [
            {
              title: '图片滤镜',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row { display: flex; gap: 10px; }\n  img { width: 100px; height: 100px; }\n  .gray { filter: grayscale(100%); }\n  .blur { filter: blur(3px); }\n  .sepia { filter: sepia(100%); }\n  .gray:hover { filter: grayscale(0); transition: 0.5s; }\n</style>\n</head>\n<body>\n  <div class="row">\n    <img src="https://picsum.photos/100/100" alt="原图">\n    <img class="gray" src="https://picsum.photos/100/100" alt="灰度">\n    <img class="blur" src="https://picsum.photos/100/100" alt="模糊">\n    <img class="sepia" src="https://picsum.photos/100/100" alt="复古">\n  </div>\n  <p>悬停灰度图变彩色</p>\n</body>\n</html>',
              explanation:
                'grayscale 灰度、blur 模糊、sepia 复古；hover 切换滤镜可做图片交互；transition 平滑过渡。',
            },
            {
              title: '毛玻璃 backdrop-filter',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .bg {\n    background: url("https://picsum.photos/400/200") center/cover;\n    height: 200px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .glass {\n    background: rgba(255,255,255,0.3);\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    padding: 20px 40px;\n    border-radius: 8px;\n    color: white;\n  }\n</style>\n</head>\n<body>\n  <div class="bg">\n    <div class="glass">毛玻璃效果</div>\n  </div>\n</body>\n</html>',
              explanation:
                'backdrop-filter: blur 让元素背后内容模糊，配合半透明背景形成毛玻璃；iOS 风格控制中心效果。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为图片加灰度滤镜 grayscale(100%)，hover 时变彩色（grayscale(0)），过渡 0.5s。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  img {\n    width: 100px;\n    height: 100px;\n    filter: grayscale(___);\n    transition: 0.5s;\n  }\n  img:hover {\n    filter: grayscale(___);\n  }\n</style>\n</head>\n<body>\n  <img src="https://picsum.photos/100/100" alt="图">\n</body>\n</html>',
              hints: [
                '默认 grayscale(100%) 灰度',
                'hover grayscale(0) 彩色',
                'transition: 0.5s 平滑过渡',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 backdrop-filter: blur(10px) 配合半透明背景实现毛玻璃效果。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .glass {\n    background: rgba(255,255,255,0.3);\n    backdrop-filter: ___;\n    padding: 20px;\n    color: white;\n  }\n</style>\n</head>\n<body style="background:url(https://picsum.photos/400/200)center/cover;height:200px;display:flex;align-items:center;justify-content:center;">\n  <div class="glass">毛玻璃</div>\n</body>\n</html>',
              hints: [
                'backdrop-filter: blur(10px)',
                '配合半透明 background',
                '可加 -webkit- 前缀兼容',
              ],
            },
          ],
          realWorldScenario:
            '商品图列表默认灰度、hover 转彩色突出当前项；iOS 风格导航栏用 backdrop-filter 毛玻璃——filter 是图像交互与高级视觉效果的廉价方案。',
        },
      ],
    },
    // ====================== 第七章 ======================
    {
      id: 'css-ch7',
      title: '实战技巧',
      order: 6,
      lessons: [
        {
          id: 'css-ch7-l1',
          title: '居中方案大全',
          order: 0,
          content_md:
            '居中是 CSS 经典难题，但现代方案已很简单。水平居中：' +
            '块级元素 `margin: 0 auto`；行内/行内块父元素 `text-align: center`。' +
            '垂直居中是难点，推荐以下现代方案。\n\n' +
            '方案一（首选）：flex 居中。父元素 `display: flex; align-items: center; justify-content: center;`，' +
            '一行搞定水平垂直居中，最常用。' +
            '方案二：grid 居中。父 `display: grid; place-items: center;`（place-items 是 align+justify 简写），更简洁。\n\n' +
            '方案三：absolute + transform。子 `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`，' +
            '适合需脱离文档流的场景（如模态框）。方案四：absolute + margin auto（已知宽高）。' +
            '现代项目 90% 用 flex/grid，居中已不再是难题。',
          examples: [
            {
              title: 'flex 居中',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .parent {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 200px;\n    background: #eee;\n  }\n  .child {\n    background: coral;\n    color: white;\n    padding: 20px;\n  }\n</style>\n</head>\n<body>\n  <div class="parent">\n    <div class="child">水平垂直居中</div>\n  </div>\n</body>\n</html>',
              explanation:
                'flex 三行属性实现完美居中；最常用最可靠；子元素无需知道尺寸。',
            },
            {
              title: 'grid place-items',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .parent {\n    display: grid;\n    place-items: center;\n    height: 200px;\n    background: #eee;\n  }\n  .child {\n    background: teal;\n    color: white;\n    padding: 20px;\n  }\n</style>\n</head>\n<body>\n  <div class="parent">\n    <div class="child">grid 居中（最简）</div>\n  </div>\n</body>\n</html>',
              explanation:
                'place-items: center 是 align-items + justify-items 简写；grid 居中代码最少。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 flex 让子元素水平垂直居中：父 display:flex + align-items:center + justify-content:center。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .parent {\n    display: ___;\n    align-items: ___;\n    justify-content: ___;\n    height: 200px;\n    background: #eee;\n  }\n  .child { background: coral; color: white; padding: 20px; }\n</style>\n</head>\n<body>\n  <div class="parent"><div class="child">居中</div></div>\n</body>\n</html>',
              hints: [
                'display: flex',
                'align-items: center',
                'justify-content: center',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 grid place-items: center 实现居中（最简写法）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .parent {\n    display: ___;\n    place-items: ___;\n    height: 200px;\n    background: #eee;\n  }\n  .child { background: teal; color: white; padding: 20px; }\n</style>\n</head>\n<body>\n  <div class="parent"><div class="child">居中</div></div>\n</body>\n</html>',
              hints: [
                'display: grid',
                'place-items: center',
                '比 flex 更简洁',
              ],
            },
          ],
          realWorldScenario:
            '登录框居中、空状态提示居中、模态框居中——flex 三行属性是现代项目居中的标准答案，告别 margin 套娃和 vertical-align 黑魔法。',
        },
        {
          id: 'css-ch7-l2',
          title: '清除浮动方法',
          order: 1,
          content_md:
            'float 父元素高度塌陷是经典问题。清除浮动方法：' +
            '1) 父元素 `overflow: hidden`（简单但可能裁剪子元素如弹出层）；' +
            '2) clearfix hack（推荐）：`::after { content:""; display:block; clear:both; }`；' +
            '3) 父元素也浮动（不推荐，问题转移）；' +
            '4) 父元素 `display: flow-root`（现代方案，无副作用）。\n\n' +
            '`display: flow-root` 是专为清除浮动设计的现代方案，无副作用，' +
            '兼容性已较好（IE 不支持）。新项目优先用 flow-root，老项目用 clearfix。\n\n' +
            '最佳实践：现代布局尽量用 flex/grid 替代 float，' +
            'float 仅用于文字环绕（此时不需清除）。清除浮动是维护老项目必备知识，' +
            '新项目应尽量规避 float 布局。',
          examples: [
            {
              title: 'clearfix hack',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .clearfix::after {\n    content: "";\n    display: block;\n    clear: both;\n  }\n  .box { background: #eee; border: 1px solid #999; }\n  .left { float: left; width: 40%; background: #faa; }\n  .right { float: right; width: 40%; background: #aaf; }\n</style>\n</head>\n<body>\n  <div class="box clearfix">\n    <div class="left">左</div>\n    <div class="right">右</div>\n  </div>\n  <p>父元素高度正常（不塌陷）</p>\n</body>\n</html>',
              explanation:
                'clearfix 用 ::after 伪元素 clear:both 撑起父高度；老项目标配；不改 HTML。',
            },
            {
              title: 'flow-root 现代方案',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .box {\n    display: flow-root;  /* 现代清除浮动 */\n    background: #eee;\n    border: 1px solid #999;\n  }\n  .left { float: left; width: 40%; background: #faa; }\n  .right { float: right; width: 40%; background: #aaf; }\n</style>\n</head>\n<body>\n  <div class="box">\n    <div class="left">左</div>\n    <div class="right">右</div>\n  </div>\n  <p>flow-root 一行清除浮动，无副作用</p>\n</body>\n</html>',
              explanation:
                'display: flow-root 创建 BFC 清除浮动；现代方案，无 overflow 裁剪副作用；新项目首选。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 clearfix hack（::after + clear:both）清除父元素浮动塌陷。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .box::after {\n    content: ___;\n    display: ___;\n    clear: ___;\n  }\n  .box { background: #eee; }\n  .left { float: left; width: 40%; background: #faa; }\n</style>\n</head>\n<body>\n  <div class="box"><div class="left">浮动</div></div>\n  <p>父高度正常</p>\n</body>\n</html>',
              hints: [
                'content: ""',
                'display: block',
                'clear: both',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 display: flow-root 一行清除浮动（现代方案）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .box {\n    display: ___;\n    background: #eee;\n  }\n  .left { float: left; width: 40%; background: #faa; }\n</style>\n</head>\n<body>\n  <div class="box"><div class="left">浮动</div></div>\n  <p>父高度正常</p>\n</body>\n</html>',
              hints: [
                'display: flow-root',
                '创建 BFC 清除浮动',
                '无副作用',
              ],
            },
          ],
          realWorldScenario:
            '维护老项目（基于 float 布局）必懂 clearfix；新项目用 flow-root 一行解决；最佳做法是用 flex/grid 根除 float 布局需求。',
        },
        {
          id: 'css-ch7-l3',
          title: 'BFC 块级格式化上下文',
          order: 2,
          content_md:
            'BFC（Block Formatting Context，块级格式化上下文）是一个独立的渲染区域，' +
            '内部元素的布局不影响外部。创建 BFC 的方式：`overflow: hidden/auto/scroll`、' +
            '`display: flow-root`（专为 BFC 设计）、`display: flex/grid/inline-block`、' +
            '`position: absolute/fixed`、`float` 非 none、根元素 html。\n\n' +
            'BFC 的作用：1) 清除浮动（父元素 BFC 包含浮动子高度）；' +
            '2) 阻止 margin 合并（相邻 BFC 不合并）；' +
            '3) 阻止文字环绕（BFC 不与浮动元素重叠）。\n\n' +
            '理解 BFC 能解释很多「奇怪」行为：为什么 overflow:hidden 能清除浮动、' +
            '为什么 flex 子元素 margin 不合并。日常不必死记 BFC 触发条件，' +
            '记住 overflow:hidden 和 flow-root 解决布局问题即可。' +
            'BFC 是 CSS 布局的高阶概念，理解后能写出更可控的布局。',
          examples: [
            {
              title: 'BFC 清除浮动',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* overflow:hidden 创建 BFC，包含浮动子高度 */\n  .parent {\n    overflow: hidden;\n    background: #eee;\n    border: 1px solid #999;\n  }\n  .child { float: left; width: 40%; background: #faa; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="parent">\n    <div class="child">浮动子元素</div>\n  </div>\n  <p>父元素 BFC 包含了浮动子高度，不塌陷</p>\n</body>\n</html>',
              explanation:
                'overflow:hidden 触发 BFC；BFC 包含浮动子元素高度；这是 BFC 清除浮动的原理。',
            },
            {
              title: 'BFC 阻止 margin 合并',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 普通：相邻块 margin 合并 */\n  .a { margin-bottom: 30px; background: #faa; }\n  .b { margin-top: 20px; background: #aaf; }\n  /* BFC：包裹后不合并 */\n  .wrap { overflow: hidden; }\n  .c { margin-bottom: 30px; background: #afa; }\n  .d { margin-top: 20px; background: #ffa; }\n</style>\n</head>\n<body>\n  <div class="a">A（margin-bottom:30px）</div>\n  <div class="b">B（margin-top:20px，合并后间距 30px）</div>\n  <hr>\n  <div class="wrap"><div class="c">C（被 BFC 包裹）</div></div>\n  <div class="d">D（间距为 30+20=50px，不合并）</div>\n</body>\n</html>',
              explanation:
                'BFC 包裹后元素与外部不合并 margin；这是阻止 margin 合并的原理；flex/grid 子元素天然不合并。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 overflow: hidden 让父元素创建 BFC，从而包含浮动子元素高度。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .parent {\n    overflow: ___;\n    background: #eee;\n  }\n  .child { float: left; width: 40%; background: #faa; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="parent"><div class="child">浮动</div></div>\n  <p>父高度正常</p>\n</body>\n</html>',
              hints: [
                'overflow: hidden 触发 BFC',
                'BFC 包含浮动子元素',
                '父元素高度不再塌陷',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用一个 BFC 容器包裹一个元素，使其与下方元素的 margin 不合并。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .wrap { overflow: ___; }\n  .a { margin-bottom: 30px; background: #afa; }\n  .b { margin-top: 20px; background: #ffa; }\n</style>\n</head>\n<body>\n  <div class="wrap"><div class="a">A</div></div>\n  <div class="b">B（与 A 不合并，间距 50px）</div>\n</body>\n</html>',
              hints: [
                '.wrap 设 overflow: hidden 创建 BFC',
                'BFC 内外不合并 margin',
                '间距变为 30+20=50px',
              ],
            },
          ],
          realWorldScenario:
            '理解 BFC 后，遇到「父元素高度塌陷」「兄弟元素 margin 莫名合并」「文字环绕浮动」等问题就能对症下药——这是从「会用 CSS」到「精通 CSS」的分水岭。',
        },
        {
          id: 'css-ch7-l4',
          title: 'CSS 架构方法论',
          order: 3,
          content_md:
            '大型项目 CSS 易失控（覆盖、命名冲突、死代码）。方法论规范命名与组织：' +
            'BEM（Block Element Modifier）：`.block__element--modifier`，' +
            '如 `.card__title--large`。块是独立组件，元素是块内部分，修饰符是状态变体。\n\n' +
            'BEM 优点：命名扁平避免嵌套过深、语义清晰、降低优先级冲突。' +
            '缺点：类名长。但换来可维护性值得。配套规范：优先类组合而非层叠覆盖，' +
            '避免 `#main .content p span` 这类长选择器。\n\n' +
            '其他方法论：OOCSS（结构与皮肤分离，`.btn` 结构 + `.btn-primary` 皮肤）、' +
            'SMACSS（按基础/布局/模块/状态/主题分类）、ITCSS（倒三角分层，从通用到具体）。\n\n' +
            '现代方案：CSS Modules（编译时生成唯一类名，彻底避免冲突）、' +
            'Tailwind（原子化工具类，`class="flex items-center gap-4"`）。\n\n' +
            '选型建议：小型项目用 BEM 足够；组件化框架（React/Vue）配 CSS Modules；' +
            '追求开发效率用 Tailwind。核心原则：命名语义化、结构扁平、避免 `!important`。',
          examples: [
            {
              title: 'BEM 命名实战',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 块：card */\n  .card { border: 1px solid #ddd; border-radius: 8px; padding: 16px; max-width: 300px; margin-bottom: 12px; }\n  /* 元素：card 的 title / body */\n  .card__title { font-size: 18px; font-weight: bold; margin: 0 0 8px; }\n  .card__body { color: #555; line-height: 1.6; }\n  /* 修饰符：featured 状态 */\n  .card--featured { border-color: #f59e0b; box-shadow: 0 0 0 2px #fde68a; }\n  .card--featured .card__title { color: #b45309; }\n</style>\n</head>\n<body>\n  <div class="card">\n    <h3 class="card__title">普通卡片</h3>\n    <p class="card__body">标准样式</p>\n  </div>\n  <div class="card card--featured">\n    <h3 class="card__title">推荐卡片</h3>\n    <p class="card__body">通过修饰符高亮，无需重写结构样式</p>\n  </div>\n</body>\n</html>',
              explanation:
                '`.card` 是块，`__title`/`__body` 是元素，`--featured` 是修饰符。' +
                '修饰符直接加在块上，内部元素样式通过 `.card--featured .card__title` 继承覆盖。',
            },
            {
              title: 'OOCSS 结构与皮肤分离',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 结构：尺寸与布局 */\n  .btn { display: inline-block; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 4px; }\n  /* 皮肤：颜色与视觉 */\n  .btn-primary { background: #3b82f6; color: #fff; border: none; }\n  .btn-danger { background: #ef4444; color: #fff; border: none; }\n  .btn-ghost { background: transparent; border: 1px solid #ccc; color: #333; }\n</style>\n</head>\n<body>\n  <button class="btn btn-primary">primary</button>\n  <button class="btn btn-danger">danger</button>\n  <button class="btn btn-ghost">ghost</button>\n</body>\n</html>',
              explanation:
                '`.btn` 提供结构（padding/圆角/光标），皮肤类 `.btn-primary` 等只管颜色。' +
                '组合使用即可产生多种按钮变体，避免为每种颜色重写完整样式。',
            },
            {
              title: '避免长选择器与 !important',
              code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 反例：长选择器 + 层叠覆盖，难维护 */\n  /* #main .content p span { color: red; } */\n  /* 正例：扁平语义类 */\n  .highlight { color: #dc2626; font-weight: bold; }\n  .muted { color: #6b7280; }\n</style>\n</head>\n<body>\n  <p>普通文本 <span class="highlight">重点</span> <span class="muted">次要</span></p>\n</body>\n</html>',
              explanation:
                '用 `.highlight` 这类语义类替代 `#main .content p span` 长选择器，' +
                '降低优先级复杂度，类可随处复用，不依赖 DOM 层级。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 BEM 命名规范补全导航组件的 CSS 选择器（nav 为块，item 为元素，active 为修饰符）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 补全三个 BEM 选择器 */\n  .___ { display: flex; gap: 8px; list-style: none; padding: 0; }\n  .___ { padding: 8px 12px; border-radius: 4px; text-decoration: none; color: #333; }\n  .___ { background: #3b82f6; color: #fff; }\n</style>\n</head>\n<body>\n  <ul class="nav">\n    <li><a href="#" class="nav__item nav__item--active">首页</a></li>\n    <li><a href="#" class="nav__item">文档</a></li>\n    <li><a href="#" class="nav__item">关于</a></li>\n  </ul>\n</body>\n</html>',
              hints: [
                '块选择器：.nav 设布局',
                '元素选择器：.nav__item 设基础样式',
                '修饰符选择器：.nav__item--active 覆盖高亮',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 OOCSS 思路把卡片拆成「结构类」和「皮肤类」，使同一结构可换不同配色皮肤。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 结构类：尺寸、圆角、内边距 */\n  .___ { border-radius: 8px; padding: 16px; margin-bottom: 12px; }\n  /* 皮肤类：深色 / 浅色 */\n  .___ { background: #1f2937; color: #f9fafb; }\n  .___ { background: #f9fafb; color: #1f2937; border: 1px solid #e5e7eb; }\n</style>\n</head>\n<body>\n  <div class="card card--dark"><h3>深色卡片</h3><p>结构相同，皮肤不同</p></div>\n  <div class="card card--light"><h3>浅色卡片</h3><p>结构相同，皮肤不同</p></div>\n</body>\n</html>',
              hints: [
                '结构类：.card 只管布局',
                '皮肤类：.card--dark / .card--light 只管配色',
                'HTML 已组合好 class，补全 CSS 选择器',
              ],
            },
            {
              type: 'output-match',
              prompt: '修正过度嵌套的选择器：将 body div.container main section p.note 改为扁平语义类 .note，保持"注意"为红色加粗。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 反例（请改为扁平类）: body div.container main section p.note { color: red; font-weight: bold; } */\n  .___ { color: #dc2626; font-weight: bold; }\n</style>\n</head>\n<body>\n  <p>普通段落</p>\n  <p class="note">注意</p>\n</body>\n</html>',
              expected_output: '注意',
              hints: [
                '用一个 .note 类即可，去掉所有祖先选择器',
                '颜色用 #dc2626 与示例一致',
                '页面应显示"普通段落"和红色加粗的"注意"',
              ],
            },
          ],
          realWorldScenario:
            '团队协作中，没有方法论的 CSS 三个月就会变成"无人敢删的死代码堆"。BEM 让新成员一眼看懂类的归属，CSS Modules 让构建工具帮你隔离作用域。选对方法论，是从"能写 CSS"到"能维护大型项目 CSS"的必修课。',
        },
      ],
    },
  ],
}