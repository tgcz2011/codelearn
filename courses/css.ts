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
            '## 概念详解\n\n' +
            'CSS 通过选择器匹配 HTML 元素并应用样式，选择器是 CSS 的核心——决定了「样式应用到谁」。' +
            '掌握选择器是写出精准、可维护样式的基础。基础选择器：元素选择器（`p`，匹配所有 p 标签）、' +
            '类选择器（`.box`，可复用，最常用）、ID 选择器（`#header`，页面唯一，优先级高但少用）、' +
            '通配选择器（`*`，匹配所有元素，常用于重置）。\n\n' +
            '组合选择器表达元素间关系：后代选择器（`.nav a`，nav 内所有 a，含嵌套）、' +
            '子代选择器（`.nav > a`，仅直接子元素）、相邻兄弟（`h2 + p`，h2 后紧邻的第一个 p）、' +
            '通用兄弟（`h2 ~ p`，h2 后所有同级 p）。群组选择器用逗号（`h1, h2, h3`）让多个选择器共享样式。\n\n' +
            '选择器优先级（specificity）决定冲突时谁生效：内联 style > ID > 类/伪类/属性 > 元素。' +
            '`!important` 可强制覆盖但破坏维护性，应避免滥用。' +
            '理解优先级是写出可维护 CSS 的基础——优先级战争是大型项目 CSS 维护的常见痛点。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 元素选择器 */\np { color: gray; }\n\n/* 类选择器（可复用） */\n.highlight { color: orange; }\n\n/* ID 选择器（页面唯一） */\n#main { background: #f0f0f0; }\n\n/* 通配选择器 */\n* { box-sizing: border-box; }\n\n/* 后代选择器（空格） */\n.nav a { color: blue; }\n\n/* 子代选择器（>） */\n.nav > a { font-weight: bold; }\n\n/* 相邻兄弟（+） */\nh2 + p { margin-top: 0; }\n\n/* 通用兄弟（~） */\nh2 ~ p { color: #555; }\n\n/* 群组选择器（逗号） */\nh1, h2, h3 { font-family: sans-serif; }\n```\n\n' +
            '## 选择器类型表\n\n' +
            '| 选择器 | 语法 | 优先级 | 用途 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| 元素 | p | 0,0,1 | 标签统一样式 |\n' +
            '| 类 | .box | 0,1,0 | 可复用组件样式 |\n' +
            '| ID | #header | 1,0,0 | 唯一元素（少用） |\n' +
            '| 通配 | * | 0,0,0 | 全局重置 |\n' +
            '| 后代 | .nav a | 相加 | 嵌套元素 |\n' +
            '| 子代 | .nav > a | 相加 | 仅直接子元素 |\n' +
            '| 相邻兄弟 | h2 + p | 相加 | 紧邻同级 |\n' +
            '| 通用兄弟 | h2 ~ p | 相加 | 后续同级 |\n' +
            '| 群组 | h1, h2 | 各自独立 | 共享样式 |\n\n' +
            '## 优先级计算规则表\n\n' +
            '| 来源 | 权重 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| !important | 最高（强制） | color: red !important |\n' +
            '| 内联 style | 1,0,0,0 | style="color:red" |\n' +
            '| ID | 0,1,0,0 | #header |\n' +
            '| 类/伪类/属性 | 0,0,1,0 | .box / :hover / [type] |\n' +
            '| 元素/伪元素 | 0,0,0,1 | p / ::before |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基础选择器\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 元素选择器：所有段落 */\n  p { color: gray; }\n  /* 类选择器：可复用 */\n  .highlight { color: orange; font-weight: bold; }\n  /* ID 选择器：页面唯一 */\n  #main { background: #f0f0f0; padding: 10px; }\n</style>\n</head>\n<body>\n  <div id="main">\n    <p>普通段落</p>\n    <p class="highlight">高亮段落</p>\n  </div>\n</body>\n</html>\n```\n\n' +
            '示例二：后代与子代选择器\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 后代：nav 内所有 a（含嵌套） */\n  .nav a { color: blue; }\n  /* 子代：仅直接子 a */\n  .nav > a { font-weight: bold; }\n</style>\n</head>\n<body>\n  <nav class="nav">\n    <a href="#">直接子链接</a>\n    <div><a href="#">嵌套链接</a></div>\n  </nav>\n</body>\n</html>\n```\n\n' +
            '示例三：相邻兄弟与群组\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 群组：共享样式 */\n  h1, h2, h3 { font-family: sans-serif; color: #333; }\n  /* 相邻兄弟：h2 后第一个 p 去掉上边距 */\n  h2 + p { margin-top: 0; }\n  /* 通用兄弟：h2 后所有 p 变灰 */\n  h2 ~ p { color: #666; }\n</style>\n</head>\n<body>\n  <h2>标题</h2>\n  <p>紧邻标题的段落（无上边距，灰色）</p>\n  <p>后续段落（灰色）</p>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. ID 选择器优先级过高难覆盖，实际项目应优先用类选择器，ID 留给 JS 锚点和表单关联。\n' +
            '2. `!important` 会破坏优先级体系，让后续维护者难以覆盖，应作为最后手段而非日常工具。\n' +
            '3. 后代选择器（空格）匹配所有层级，性能比子代选择器（>）略低，深层嵌套时优先用 >。\n' +
            '4. 通配选择器 `*` 性能最差（匹配所有元素），避免在深层嵌套中使用，仅用于全局重置。\n' +
            '5. 选择器优先级按 (ID, 类, 元素) 三位比较，如 `#nav .item` (1,1,0) 高于 `.nav .item` (0,2,0)。\n' +
            '6. 群组选择器各自独立计算优先级，不会相加——`h1, #id` 中 #id 仍优先。\n\n' +
            '## 实际应用\n\n' +
            '搭建设计系统时，用类选择器定义按钮、卡片等组件样式（可复用），避免用 ID 选择器（无法复用且优先级过高难覆盖）' +
            '——这是可维护 CSS 的起点。导航栏用 `.nav a` 后代选择器统一所有链接样式，列表项用 `.list > li` ' +
            '子代选择器精准控制直接子项。标题统一用群组选择器 `h1, h2, h3` 共享字体族。\n\n' +
            '## 扩展知识\n\n' +
            'CSS 还有伪类选择器（`:hover`、`:nth-child(n)`）、属性选择器（`[type="text"]`）、' +
            '伪元素（`::before`、`::after`），这些将在后续章节详讲。`:is()` / `:where()` / `:not()` 是现代 CSS 的' +
            '函数式伪类，能简化复杂选择器书写。BEM（Block Element Modifier）命名约定通过类名表达组件结构，' +
            '避免选择器嵌套过深，是大型项目可维护 CSS 的方法论。',
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
            '## 概念详解\n\n' +
            '颜色与背景是 CSS 视觉设计的基础。CSS 颜色有多种写法：关键字（`red`，简单但有限）、' +
            '十六进制（`#ff0000`，常用简写 `#f00`，设计师最常用）、' +
            'RGB（`rgb(255,0,0)`）、RGBA（`rgba(255,0,0,0.5)` 带透明度）、' +
            'HSL（`hsl(0,100%,50%)`，色相/饱和度/亮度，调色更直观）。' +
            '现代 CSS 还支持 `oklch()` / `lab()` 等感知均匀色彩空间，色彩过渡更自然。\n\n' +
            '`color` 设文字颜色，`background-color` 设背景色，' +
            '`background-image: url(...)` 设背景图。背景可叠加：' +
            '`background: url(bg.png) no-repeat center, #f0f0f0;` 图加底色。' +
            '`background-size: cover` 让背景图覆盖容器（可能裁剪），`contain` 完整显示（可能留白）。\n\n' +
            '现代项目多用 CSS 变量统一管理颜色（后续章节讲）。' +
            'HSL 格式调色方便——改色相值就能换色系，比 RGB 直观。' +
            '注意颜色对比度需达 WCAG 标准（正常文字 4.5:1）保证可读性——这是无障碍和设计质量的双重要求。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 文字颜色 */\n.color { color: #333; }\n\n/* 背景色 */\n.bg { background-color: #f0f0f0; }\n\n/* 背景图 */\n.hero {\n  background-image: url("bg.jpg");\n  background-size: cover;        /* 覆盖容器 */\n  background-position: center;   /* 居中 */\n  background-repeat: no-repeat;  /* 不重复 */\n}\n\n/* 简写：图 + 位置 + 颜色 */\n.banner {\n  background: url("bg.png") no-repeat center, #f0f0f0;\n}\n\n/* 渐变背景 */\n.gradient {\n  background: linear-gradient(to right, #ff0000, #0000ff);\n}\n```\n\n' +
            '## 颜色格式对比表\n\n' +
            '| 格式 | 语法 | 透明度 | 优点 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| 关键字 | red | 不支持 | 简单直观 |\n' +
            '| 十六进制 | #ff0000 | #ff0000ff（8位） | 设计师常用 |\n' +
            '| RGB | rgb(255,0,0) | 不支持 | 数值明确 |\n' +
            '| RGBA | rgba(255,0,0,0.5) | 支持 | 兼容性好 |\n' +
            '| HSL | hsl(0,100%,50%) | 不支持 | 调色直观 |\n' +
            '| HSLA | hsla(0,100%,50%,0.5) | 支持 | 调色+透明度 |\n' +
            '| oklch | oklch(0.6 0.2 20) | 支持 | 感知均匀 |\n\n' +
            '## background 属性表\n\n' +
            '| 属性 | 说明 | 常用值 |\n' +
            '| --- | --- | --- |\n' +
            '| background-color | 背景色 | #f0f0f0 / transparent |\n' +
            '| background-image | 背景图 | url("...") / linear-gradient(...) |\n' +
            '| background-size | 背景尺寸 | cover / contain / 100% 100% |\n' +
            '| background-position | 背景位置 | center / top left / 50% 50% |\n' +
            '| background-repeat | 重复方式 | no-repeat / repeat-x / repeat-y |\n' +
            '| background-attachment | 滚动方式 | scroll / fixed |\n' +
            '| background-clip | 裁剪范围 | border-box / padding-box / text |\n\n' +
            '## 代码示例\n\n' +
            '示例一：颜色格式对比\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .a { color: red; }              /* 关键字 */\n  .b { color: #00ff00; }          /* 十六进制 */\n  .c { color: rgb(0, 0, 255); }   /* RGB */\n  .d { color: hsl(270, 100%, 50%); } /* HSL 紫色 */\n  .e { background: rgba(0,0,0,0.5); color: white; } /* 半透明黑底 */\n</style>\n</head>\n<body>\n  <p class="a">红色</p>\n  <p class="b">绿色</p>\n  <p class="c">蓝色</p>\n  <p class="d">紫色</p>\n  <p class="e">半透明背景</p>\n</body>\n</html>\n```\n\n' +
            '示例二：背景图与覆盖\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .hero {\n    background-image: url("https://picsum.photos/400/200");\n    background-size: cover;\n    background-position: center;\n    height: 150px;\n    color: white;\n    padding: 20px;\n  }\n</style>\n</head>\n<body>\n  <div class="hero">背景图覆盖容器</div>\n</body>\n</html>\n```\n\n' +
            '示例三：渐变背景\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .linear { background: linear-gradient(to right, #ff0000, #0000ff); height: 50px; }\n  .radial { background: radial-gradient(circle, #fff, #000); height: 50px; }\n</style>\n</head>\n<body>\n  <div class="linear">线性渐变</div>\n  <div class="radial">径向渐变</div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. `cover` 会裁剪图片以填满容器，`contain` 完整显示但可能留白——根据场景选择。\n' +
            '2. 文字与背景对比度需达 WCAG 4.5:1（正常文字），可用 WebAIM Contrast Checker 验证。\n' +
            '3. 背景图不随内容滚动用 `background-attachment: fixed`，但移动端性能差慎用。\n' +
            '4. 多背景用逗号分隔，前面的在上层：`background: url(a.png), url(b.jpg);`。\n' +
            '5. `background-clip: text` 配合 `color: transparent` 可实现渐变文字效果。\n' +
            '6. HSL 调色相最直观：0=红、120=绿、240=蓝，改色相值就能换色系。\n\n' +
            '## 实际应用\n\n' +
            '设计落地页 hero 区时，用 background-size: cover 让背景图自适应铺满，配合半透明遮罩（rgba）' +
            '保证文字可读——这是 banner 设计的标准套路。主题色用 CSS 变量统一管理，' +
            '暗色模式只需切换变量值即可全局换色。按钮用 linear-gradient 营造立体质感。\n\n' +
            '## 扩展知识\n\n' +
            '`oklch()` 是现代 CSS 推荐的色彩空间，比 HSL 更符合人眼感知——同等亮度下色彩明度一致，' +
            '渐变过渡更自然。`color-mix()` 函数可在 CSS 中混合两种颜色（如 `color-mix(in srgb, red 50%, blue)`）。' +
            '`@media (prefers-color-scheme: dark)` 可根据系统暗色模式自动切换配色。' +
            '图片背景可用 `background-blend-mode` 实现混合模式效果（正片叠底、滤色等）。',
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
            '## 概念详解\n\n' +
            '文本样式是内容呈现的核心，直接影响可读性和阅读体验。文本相关属性分两大类：' +
            '字体属性（font-*）控制文字本身的形态，文本属性（text-*）控制文字的排列与装饰。' +
            '合理设置字号、行高、字间距能让长文阅读不疲劳，是内容产品的视觉基础。\n\n' +
            '字体属性：`font-size`（字号，常用 px/rem）、`font-family`（字体族，可设多个回退）、' +
            '`font-weight`（粗细，normal=400/bold=700，或数字 100-900）、`font-style`（italic 斜体）、' +
            '`line-height`（行高，影响可读性，推荐 1.5-1.7）。\n\n' +
            '文本属性：`text-align`（对齐：left/center/right/justify）、`text-decoration`（下划线/删除线/上划线）、' +
            '`text-transform`（大小写转换）、`letter-spacing`/`word-spacing`（字/词间距）、' +
            '`text-indent`（首行缩进）、`white-space`（空白处理）、`text-overflow`（溢出省略）。\n\n' +
            '## 语法说明\n\n' +
            '```css\n.text {\n  /* 字体属性 */\n  font-family: -apple-system, "PingFang SC", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 1.6;\n\n  /* 文本属性 */\n  text-align: left;\n  text-decoration: none;\n  text-transform: none;\n  letter-spacing: 0.5px;\n  word-spacing: 2px;\n  text-indent: 2em;\n  white-space: nowrap;\n}\n```\n\n' +
            '## 字体属性表\n\n' +
            '| 属性 | 说明 | 常用值 |\n' +
            '| --- | --- | --- |\n' +
            '| font-family | 字体族 | "PingFang SC", sans-serif |\n' +
            '| font-size | 字号 | 16px / 1rem / 1.2em |\n' +
            '| font-weight | 粗细 | 100-900 / normal(400) / bold(700) |\n' +
            '| font-style | 样式 | normal / italic / oblique |\n' +
            '| line-height | 行高 | 1.6 / 24px / 1.6em |\n' +
            '| font | 简写 | font: italic bold 16px/1.6 sans-serif |\n\n' +
            '## 文本属性表\n\n' +
            '| 属性 | 说明 | 常用值 |\n' +
            '| --- | --- | --- |\n' +
            '| text-align | 对齐 | left / center / right / justify |\n' +
            '| text-decoration | 装饰线 | none / underline / line-through |\n' +
            '| text-transform | 大小写 | none / uppercase / lowercase / capitalize |\n' +
            '| letter-spacing | 字间距 | 1px / 0.1em |\n' +
            '| word-spacing | 词间距 | 2px / 0.2em |\n' +
            '| text-indent | 首行缩进 | 2em |\n' +
            '| white-space | 空白处理 | normal / nowrap / pre / pre-wrap |\n' +
            '| text-overflow | 溢出处理 | clip / ellipsis |\n\n' +
            '## 字号单位对比表\n\n' +
            '| 单位 | 相对 | 特点 | 推荐场景 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| px | 绝对 | 固定不变 | 边框、精细控制 |\n' +
            '| em | 父元素 | 嵌套累积 | 组件内比例 |\n' +
            '| rem | 根元素 | 全局一致 | 响应式字号首选 |\n' +
            '| vw/vh | 视口 | 随窗口变 | 大标题 |\n' +
            '| % | 父元素 | 比例 | 宽高布局 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：字体综合设置\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { font-family: -apple-system, "PingFang SC", sans-serif; }\n  h1 {\n    font-size: 2rem;\n    font-weight: 700;\n    text-align: center;\n    letter-spacing: 2px;\n  }\n  p {\n    font-size: 1rem;\n    line-height: 1.6;\n    color: #333;\n    text-indent: 2em;\n  }\n</style>\n</head>\n<body>\n  <h1>文章标题</h1>\n  <p>这是一段正文，行高 1.6 提升可读性，首行缩进 2 字符符合中文排版习惯。</p>\n</body>\n</html>\n```\n\n' +
            '示例二：文本装饰与变换\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .upper { text-transform: uppercase; }\n  .underline { text-decoration: underline; }\n  .strike { text-decoration: line-through; }\n  .spaced { letter-spacing: 4px; word-spacing: 8px; }\n</style>\n</head>\n<body>\n  <p class="upper">hello world</p>\n  <p class="underline">下划线</p>\n  <p class="strike">删除线</p>\n  <p class="spaced">字 词 间 距</p>\n</body>\n</html>\n```\n\n' +
            '示例三：单行省略与 white-space\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .ellipsis {\n    width: 200px;\n    white-space: nowrap;      /* 不换行 */\n    overflow: hidden;         /* 溢出隐藏 */\n    text-overflow: ellipsis;  /* 省略号 */\n    border: 1px solid #ccc;\n  }\n</style>\n</head>\n<body>\n  <div class="ellipsis">这是一段很长的文字，超出宽度会显示省略号</div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. `font-family` 应设多个回退字体，确保用户没装某字体时有替代，最后用通用族（sans-serif/serif）兜底。\n' +
            '2. `line-height` 无单位（如 1.6）比带单位（如 1.6em）更好——子元素继承的是比例而非固定值。\n' +
            '3. `em` 会随父元素字号累积放大，深层嵌套时易失控，全局字号用 `rem` 更稳定。\n' +
            '4. `text-align: justify`（两端对齐）在中文中可能导致字间距不均，慎用。\n' +
            '5. 单行省略需三件套：`white-space: nowrap` + `overflow: hidden` + `text-overflow: ellipsis`。\n' +
            '6. `white-space: pre` 保留空格和换行，适合展示代码；`pre-wrap` 还会自动换行。\n\n' +
            '## 实际应用\n\n' +
            '中文资讯类网站正文普遍用 line-height 1.7-1.8、首行缩进 2em、字号 16px——' +
            '这套排版让长文阅读不疲劳，是内容产品的标配。卡片标题用 letter-spacing 增加设计感，' +
            '产品列表用 text-overflow: ellipsis 防止长标题撑破布局，导航链接用 text-transform: uppercase 营造英文风格。\n\n' +
            '## 扩展知识\n\n' +
            '多行省略用 `-webkit-line-clamp` 配合 `display: -webkit-box` 实现（虽带 -webkit- 前缀但已广泛支持）。' +
            '`@font-face` 可加载自定义字体（如 Web Fonts），但需注意字体文件大小和 FOIT/FOUT 闪烁问题。' +
            '可变字体（Variable Fonts）用一个文件包含多种字重，通过 `font-weight` 任意调节。' +
            '`writing-mode: vertical-rl` 可实现竖排文字，适合中文古风排版。',
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
            '## 概念详解\n\n' +
            '盒模型是 CSS 布局的基石——每个元素都是一个矩形盒子，理解盒模型是掌握布局的前提。' +
            '盒子从内到外四层：content（内容）→ padding（内边距）→ border（边框）→ margin（外边距）。' +
            'content 是宽高定义的区域，padding 是内容到边框的留白，border 是边框线，margin 是盒子与其他元素的距离。\n\n' +
            '默认 `box-sizing: content-box`，width/height 只含 content，加 padding/border 后盒子实际变大。' +
            '推荐设 `box-sizing: border-box`，width/height 含 padding 和 border，布局更可控。' +
            '全局重置：`* { box-sizing: border-box; }`——这是每个项目的第一步。\n\n' +
            'margin 特性：相邻块级元素的垂直 margin 会「合并」（取较大者），这是常见布局困惑源。' +
            'padding 不合并。margin 可为负（元素重叠），padding 不能为负。' +
            '理解盒模型是掌握布局的前提，也是排查间距问题的第一步。\n\n' +
            '## 语法说明\n\n' +
            '```css\n.box {\n  /* content 区域 */\n  width: 200px;\n  height: 100px;\n\n  /* padding 内边距 */\n  padding: 20px;              /* 四边 */\n  padding: 10px 20px;         /* 上下 左右 */\n  padding: 10px 20px 30px 40px; /* 上 右 下 左 */\n\n  /* border 边框 */\n  border: 2px solid #333;\n  border-radius: 8px;         /* 圆角 */\n\n  /* margin 外边距 */\n  margin: 16px;\n  margin: 0 auto;             /* 水平居中 */\n\n  /* 推荐盒模型 */\n  box-sizing: border-box;\n}\n```\n\n' +
            '## 盒模型四层属性表\n\n' +
            '| 层 | 属性 | 说明 | 是否含在 width |\n' +
            '| --- | --- | --- | --- |\n' +
            '| content | width/height | 内容区域 | content-box 含 / border-box 含 |\n' +
            '| padding | padding | 内边距（留白） | content-box 不含 |\n' +
            '| border | border | 边框线 | content-box 不含 |\n' +
            '| margin | margin | 外边距（间距） | 从不含 |\n\n' +
            '## padding/margin 简写规则表\n\n' +
            '| 值数量 | 含义 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| 1 个值 | 四边相同 | padding: 10px |\n' +
            '| 2 个值 | 上下 左右 | padding: 10px 20px |\n' +
            '| 3 个值 | 上 左右 下 | padding: 10px 20px 30px |\n' +
            '| 4 个值 | 上 右 下 左 | padding: 10px 20px 30px 40px |\n\n' +
            '## box-sizing 对比表\n\n' +
            '| 值 | width 含义 | 实际占用宽度 | 推荐度 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| content-box（默认） | 仅 content | width + padding + border | 不推荐 |\n' +
            '| border-box | content + padding + border | 等于 width | 推荐 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：盒模型四层\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  * { box-sizing: border-box; }\n  .box {\n    width: 200px;\n    padding: 20px;\n    border: 4px solid black;\n    margin: 16px;\n    background: lightblue;\n  }\n</style>\n</head>\n<body>\n  <div class="box">盒模型示例：border-box 下总宽 200px</div>\n</body>\n</html>\n```\n\n' +
            '示例二：margin 合并演示\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .a { margin-bottom: 30px; background: #faa; }\n  .b { margin-top: 20px; background: #aaf; }\n</style>\n</head>\n<body>\n  <div class="a">上块 margin-bottom:30px</div>\n  <div class="b">下块 margin-top:20px</div>\n  <p>两者间距是 30px（取大值），不是 50px——这就是 margin 合并</p>\n</body>\n</html>\n```\n\n' +
            '示例三：border 与圆角\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .card {\n    width: 200px;\n    padding: 16px;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    margin: 0 auto;\n  }\n</style>\n</head>\n<body>\n  <div class="card">带圆角的卡片，margin: 0 auto 水平居中</div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. 永远在项目开头加 `* { box-sizing: border-box; }`，避免 content-box 导致的尺寸计算混乱。\n' +
            '2. 相邻块级元素垂直 margin 合并取较大值，横向不合并——这是布局常见困惑源。\n' +
            '3. margin 可为负（元素重叠/拉近），padding 不能为负。\n' +
            '4. 行内元素的 margin/padding 上下不生效（仅左右生效），需先设 `display: inline-block` 或 block。\n' +
            '5. `border-radius` 可设不同角：`border-radius: 10px 20px 30px 40px`（左上 右上 右下 左下）。\n' +
            '6. `margin: 0 auto` 只对有固定宽度的块级元素生效，让其在父容器内水平居中。\n\n' +
            '## 实际应用\n\n' +
            '卡片组件统一用 border-box + 固定宽度，无论 padding/border 怎么调都不会撑破布局——' +
            '这是设计系统稳定的基础，全局重置 box-sizing 是项目第一步。' +
            '卡片用 border + border-radius 营造边界感，用 padding 留出内容呼吸空间，' +
            '卡片间用 margin 控制间距——这套组合是 UI 组件的标准模式。\n\n' +
            '## 扩展知识\n\n' +
            'margin 合并可用 BFC（块级格式化上下文）清除：父元素加 `overflow: hidden` 或 `display: flow-root`。' +
            '`outline` 不占空间（不像 border），常用于焦点环。CSS 的 `box-shadow` 也不占布局空间，' +
            '是营造层次感的利器。`aspect-ratio` 属性可固定宽高比（如 `aspect-ratio: 16/9`），' +
            '无需 padding-top hack。DevTools 的盒模型视图是调试间距问题的必备工具。',
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
            '## 概念详解\n\n' +
            '`display` 是 CSS 最重要的属性之一，决定元素的渲染方式——是块级还是行内、是否占据空间、' +
            '如何排列。掌握 display 是理解布局的基础。常见值：`block`（块级，独占一行，可设宽高）、' +
            '`inline`（行内，不换行，宽高无效）、`inline-block`（行内块，不换行但可设宽高）、' +
            '`none`（隐藏，不占空间）、`flex`/`grid`（布局模式，后续详讲）。\n\n' +
            '块级元素：div/p/h1/section 等，默认独占一行，可设宽高和 margin/padding 四边。' +
            '行内元素：span/a/strong 等，默认不换行，宽高无效，margin/padding 上下不生效。' +
            'inline-block 结合两者优点：像文字一样排列又能设尺寸，常用于按钮、图标横排。\n\n' +
            '`display: none` 与 `visibility: hidden` 区别：前者完全移除不占空间，' +
            '后者隐藏但仍占空间（留白）。`hidden` 属性（HTML）等同 display:none。' +
            '切换显示用 display，保留布局用 visibility。\n\n' +
            '## 语法说明\n\n' +
            '```css\n.block { display: block; }       /* 独占一行，可设宽高 */\n.inline { display: inline; }     /* 行内，宽高无效 */\n.inline-block { display: inline-block; } /* 行内可设宽高 */\n.none { display: none; }         /* 完全移除 */\n.hidden { visibility: hidden; }  /* 隐藏但占位 */\n.flex { display: flex; }         /* flex 容器 */\n.grid { display: grid; }         /* grid 容器 */\n```\n\n' +
            '## display 值对比表\n\n' +
            '| 值 | 独占一行 | 可设宽高 | 占空间 | 典型元素 |\n' +
            '| --- | --- | --- | --- | --- |\n' +
            '| block | 是 | 是 | 是 | div/p/h1/section |\n' +
            '| inline | 否 | 否 | 是 | span/a/strong |\n' +
            '| inline-block | 否 | 是 | 是 | 按钮、图标横排 |\n' +
            '| none | — | — | 否 | 隐藏元素 |\n' +
            '| flex | 是 | 容器可 | 是 | 一维布局 |\n' +
            '| grid | 是 | 容器可 | 是 | 二维布局 |\n\n' +
            '## 隐藏元素方式对比表\n\n' +
            '| 方式 | 占空间 | 可交互 | 动画支持 | 适用场景 |\n' +
            '| --- | --- | --- | --- | --- |\n' +
            '| display: none | 否 | 否 | 否 | 彻底移除 |\n' +
            '| visibility: hidden | 是 | 否 | 是 | 保留布局 |\n' +
            '| opacity: 0 | 是 | 是 | 是 | 透明效果 |\n' +
            '| hidden 属性 | 否 | 否 | 否 | HTML 原生 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：block vs inline vs inline-block\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .block { display: block; width: 200px; background: #faa; }\n  .inline { display: inline; width: 200px; background: #afa; } /* 宽高无效 */\n  .ib { display: inline-block; width: 100px; height: 40px; background: #aaf; }\n</style>\n</head>\n<body>\n  <span class="block">block：独占一行，宽 200px 生效</span>\n  <span class="inline">inline：宽高无效</span>\n  <span class="ib">inline-block 1</span>\n  <span class="ib">inline-block 2</span>\n</body>\n</html>\n```\n\n' +
            '示例二：隐藏元素对比\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .none { display: none; }     /* 不占空间 */\n  .hidden { visibility: hidden; background: #faa; } /* 占空间 */\n</style>\n</head>\n<body>\n  <div>第一行</div>\n  <div class="none">display:none（看不见也不占位）</div>\n  <div class="hidden">visibility:hidden（看不见但占位）</div>\n  <div>最后一行</div>\n</body>\n</html>\n```\n\n' +
            '示例三：inline-block 横排导航\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .nav { font-size: 0; } /* 消除 inline-block 间隙 */\n  .nav a {\n    display: inline-block;\n    padding: 10px 20px;\n    background: #333;\n    color: white;\n    text-decoration: none;\n    font-size: 16px;\n  }\n</style>\n</head>\n<body>\n  <nav class="nav">\n    <a href="#">首页</a>\n    <a href="#">产品</a>\n    <a href="#">关于</a>\n  </nav>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. inline-block 元素间会有默认空白间隙（HTML 换行符），可用父元素 `font-size: 0` 消除。\n' +
            '2. `display: none` 的元素不参与渲染、不可交互、不占空间——完全「不存在」。\n' +
            '3. `visibility: hidden` 的元素仍占空间且其子元素可用 `visibility: visible` 单独显示。\n' +
            '4. `opacity: 0` 的元素仍可交互（点击/聚焦），需配合 `pointer-events: none` 彻底禁用。\n' +
            '5. 行内元素的 margin/padding 上下不生效，需改为 inline-block 或 block 才能设垂直间距。\n' +
            '6. `display: contents` 让元素自身不生成盒子但子元素仍参与布局——慎用，有无障碍问题。\n\n' +
            '## 实际应用\n\n' +
            '导航栏的菜单项用 inline-block 横排（兼容老项目）或 flex（现代做法）；' +
            '弹窗关闭用 display:none 彻底移除，避免挡住下层交互；' +
            '折叠面板展开/收起用 display 切换 none/block。' +
            'tab 切换、模态框显隐、响应式菜单——这些场景都依赖 display 属性的灵活切换。\n\n' +
            '## 扩展知识\n\n' +
            '现代布局优先用 flex/grid 而非 inline-block/float——前者语义更清晰、对齐更强大、无空白间隙问题。' +
            '`display: flow-root` 创建 BFC（块级格式化上下文），可清除浮动且无副作用（比 overflow:hidden 安全）。' +
            '`display: contents` 让父元素「透明」，子元素直接参与父级布局——适合包装元素不需要盒子时。' +
            'CSS Display Module Level 3 统一了 display 的内外模型：`display: inline flex` 表示行内 flex 容器。',
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
            '## 概念详解\n\n' +
            '`position` 是 CSS 中控制元素定位方式的核心属性，它决定了元素在文档中如何「摆放」以及如何响应偏移量（top/right/bottom/left）。' +
            '默认情况下所有元素都是 `position: static`，遵循普通文档流——块级元素自上而下堆叠，行内元素从左到右排列，偏移量属性对它们无效。\n\n' +
            '当元素脱离 `static` 后，它就进入了「定位流」，可以使用 top/right/bottom/left 来精确控制位置。' +
            '定位存在的根本目的是：让某些元素脱离普通流的约束，实现诸如悬浮按钮、吸顶导航、模态框、tooltip、固定侧边栏等「层叠式」布局效果。\n\n' +
            '理解 position 的关键在于区分「定位参照物」和「是否占据文档流空间」这两个维度：' +
            'relative 仍占原位置（视觉偏移但不影响布局），而 absolute/fixed 完全脱离文档流（不占空间，可能覆盖其他元素）。' +
            'sticky 则是「混合模式」——在阈值内是 relative，到达阈值后切换为 fixed 效果。\n\n' +
            '## 语法说明\n\n' +
            '基本语法：\n\n' +
            '```css\n/* 单值语法（推荐） */\nposition: static | relative | absolute | fixed | sticky;\n\n/* 偏移量属性（仅对非 static 生效） */\ntop: <length> | <percentage> | auto;\nright: <length> | <percentage> | auto;\nbottom: <length> | <percentage> | auto;\nleft: <length> | <percentage> | auto;\n\n/* 层级控制（仅对非 static 生效） */\nz-index: auto | <integer>;\n```\n\n' +
            '常见搭配模式：\n\n' +
            '```css\n/* 父 relative + 子 absolute：经典定位套路 */\n.parent { position: relative; }\n.child { position: absolute; top: 0; right: 0; }\n\n/* sticky 吸顶 */\n.header { position: sticky; top: 0; z-index: 100; }\n\n/* fixed 悬浮按钮 */\n.fab { position: fixed; right: 20px; bottom: 20px; z-index: 50; }\n```\n\n' +
            '## position 属性值对照表\n\n' +
            '| 值 | 是否脱离文档流 | 定位参照物 | 是否支持偏移量 | 典型用途 |\n' +
            '| --- | --- | --- | --- | --- |\n' +
            '| static | 否（默认） | 无（普通流） | 否 | 普通元素 |\n' +
            '| relative | 否（占原位） | 元素自身原位置 | 是 | 微调位置、做 absolute 父级 |\n' +
            '| absolute | 是（不占空间） | 最近的非 static 祖先 | 是 | 模态框、tooltip、角标 |\n' +
            '| fixed | 是（不占空间） | 视口（浏览器可视区域） | 是 | 悬浮按钮、固定导航 |\n' +
            '| sticky | 否（占原位） | 最近可滚动祖先 | 是（需指定阈值） | 吸顶导航、吸底 tab |\n\n' +
            '## 偏移量与 z-index 说明表\n\n' +
            '| 属性 | 作用 | 默认值 | 备注 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| top | 距参照物顶部的距离 | auto | 正值向下偏移 |\n' +
            '| right | 距参照物右边的距离 | auto | 正值向左偏移 |\n' +
            '| bottom | 距参照物底部的距离 | auto | 正值向上偏移 |\n' +
            '| left | 距参照物左边的距离 | auto | 正值向右偏移 |\n' +
            '| z-index | 层叠顺序 | auto | 仅非 static 元素生效 |\n' +
            '| inset | 四向偏移简写 | auto | 等价于 top right bottom left |\n\n' +
            '## 代码示例\n\n' +
            '示例一：五种 position 值对比\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { margin: 0; height: 1500px; /* 让页面可滚动 */ }\n  .box { padding: 10px; margin: 5px; border: 2px solid; }\n  .static { position: static; border-color: #999; } /* 默认流 */\n  .relative { position: relative; top: 10px; left: 20px; border-color: #0a0; } /* 相对自身偏移，仍占位 */\n  .absolute { position: absolute; top: 60px; right: 10px; border-color: #a00; background: #fee; } /* 脱离流，相对 body */\n  .fixed { position: fixed; bottom: 10px; left: 10px; border-color: #00a; background: #eef; } /* 相对视口，滚动不动 */\n  .sticky { position: sticky; top: 0; border-color: #aa0; background: #ffe; } /* 滚动到 top:0 时吸顶 */\n</style>\n</head>\n<body>\n  <div class="box static">static 默认定位（普通流）</div>\n  <div class="box relative">relative 相对原位偏移（仍占位）</div>\n  <div class="box absolute">absolute 绝对定位（脱离流）</div>\n  <div class="box sticky">sticky 吸顶（滚动到顶部固定）</div>\n  <div class="box fixed">fixed 固定在视口左下角</div>\n  <p>向下滚动观察 fixed 和 sticky 的行为差异...</p>\n</body>\n</html>\n```\n\n' +
            '示例二：父 relative + 子 absolute 实现角标\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .card {\n    position: relative;       /* 父级设 relative 作为参照物 */\n    width: 200px;\n    height: 120px;\n    background: #f5f5f5;\n    border: 1px solid #ccc;\n    margin: 20px;\n  }\n  .badge {\n    position: absolute;       /* 子级 absolute 相对父定位 */\n    top: -8px;\n    right: -8px;\n    background: #e74c3c;\n    color: white;\n    border-radius: 50%;\n    width: 24px; height: 24px;\n    text-align: center;\n    line-height: 24px;\n    font-size: 12px;\n  }\n  .corner-tag {\n    position: absolute;\n    bottom: 0; left: 0;\n    background: #3498db; color: white;\n    padding: 2px 8px; font-size: 12px;\n  }\n</style>\n</head>\n<body>\n  <div class="card">\n    商品卡片\n    <span class="badge">3</span> <!-- 右上角数量徽标 -->\n    <span class="corner-tag">新品</span> <!-- 左下角标签 -->\n  </div>\n</body>\n</html>\n```\n\n' +
            '示例三：sticky 吸顶导航 + z-index 层级\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .top-bar { background: #2c3e50; color: white; padding: 8px; }\n  .nav {\n    position: sticky;\n    top: 0;\n    z-index: 100;       /* 高于普通内容，避免被覆盖 */\n    background: #34495e;\n    color: white;\n    padding: 12px;\n  }\n  .modal {\n    position: fixed;\n    top: 50%; left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1000;      /* 模态框层级最高 */\n    background: white;\n    padding: 20px;\n    border: 1px solid #333;\n  }\n  .overlay {\n    position: fixed; inset: 0;   /* 遮罩铺满视口 */\n    background: rgba(0,0,0,0.5);\n    z-index: 999;\n  }\n  .content { height: 2000px; padding: 20px; }\n</style>\n</head>\n<body>\n  <div class="top-bar">顶部条</div>\n  <nav class="nav">吸顶导航（滚动时固定在顶部）</nav>\n  <div class="content">向下滚动，导航会吸附在顶部...</div>\n  <div class="overlay"></div>\n  <div class="modal">模态框（z-index 最高）</div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **absolute 的参照物陷阱**：absolute 元素会向上逐层查找非 static 祖先，如果所有祖先都是 static，则相对 body（初始包含块）定位。常见 bug 是忘了给父级设 relative，导致定位「飞」到页面角落。养成「父 relative 子 absolute」的习惯。\n2. **fixed 在 transform 中的坑**：如果祖先元素有 `transform`、`filter`、`perspective` 属性，fixed 元素的参照物会从「视口」变成那个祖先元素。这是非常隐蔽的 bug，调试时先检查祖先是否有这些属性。\n3. **z-index 仅对非 static 生效**：给 static 元素设 z-index 无效。同时，z-index 受「堆叠上下文」影响——父元素若创建了新的堆叠上下文（如设了 z-index 且非 static、opacity<1、transform 等），子元素的 z-index 只在父级内部比较，无法越过父级。\n4. **sticky 的生效条件**：sticky 元素必须在「可滚动祖先」内才有效果。如果父级高度等于 sticky 元素高度，或父级 `overflow: hidden`，sticky 可能失效。同时必须指定至少一个偏移阈值（如 top: 0），否则不会「粘住」。\n5. **避免 z-index 战争**：不要无脑给元素加 `z-index: 9999`。建议按层级分层管理：基础内容 1-9，导航 10-99，遮罩 100-499，模态框 500-999，toast 1000+。\n6. **absolute 元素不占空间**：脱离文档流后，它不再撑开父容器高度。若父级没有显式高度，会出现「父级高度塌陷」。解决方法：给父级设固定高度，或用其他方式撑开。\n\n' +
            '## 实际应用\n\n' +
            '- **吸顶导航**：用 `position: sticky; top: 0;` 让导航栏在滚动时固定在顶部，比 JS 监听 scroll 性能更好。电商网站的分类导航、文档站点的侧边目录都常用此技术。\n' +
            '- **悬浮按钮（FAB）**：`position: fixed; right: 20px; bottom: 20px;` 实现右下角的「回到顶部」或「客服」按钮，始终悬浮在视口内。\n' +
            '- **模态框与遮罩**：`position: fixed; inset: 0;` 让半透明遮罩铺满视口，模态框用 fixed + transform 居中。z-index 要高于页面其他元素。\n' +
            '- **角标与徽标**：商品卡片右上角的「新」「热」「促销」标签，用父 relative + 子 absolute 实现，不影响卡片本身布局。\n' +
            '- **Tooltip 提示**：鼠标悬停时显示的小气泡，用 absolute 定位在目标元素附近，配合 JS 计算坐标。\n\n' +
            '## 扩展知识\n\n' +
            '`inset` 是 CSS Logical Properties 的一部分，可一次性设置四个偏移量：`inset: 10px 20px` 等价于 `top:10px; right:20px; bottom:10px; left:20px`，比分开写更简洁。' +
            '堆叠上下文（Stacking Context）是 z-index 的核心机制——它像「图层组」，组内元素的 z-index 只在组内比较。创建堆叠上下文的条件包括：根元素 html、position 非 static 且 z-index 非 auto、opacity<1、transform/filter/perspective 非 none、will-change 等。' +
            '理解堆叠上下文能解决「为什么我的 z-index:9999 还是被遮住」的经典问题。' +
            '现代开发中，吸顶效果首选 sticky 而非 JS + fixed；模态框可用 `<dialog>` 元素的 `showModal()` 原生实现，浏览器自动处理层级与焦点陷阱。',
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
            '## 概念详解\n\n' +
            '`float` 最初是为「图文环绕」设计的——让图片靠左或靠右浮动，文字自动填充另一侧，形成报纸式的排版效果。' +
            '它会让元素脱离普通文档流，但仍影响行内内容的排版（这与 absolute 完全脱离不同）。' +
            '在 flex/grid 出现之前，前端开发者「创造性」地用 float + 百分比宽度实现了多列布局，这是 2000-2015 年的主流布局方案。\n\n' +
            'float 的核心行为：浮动元素会脱离文档流向左或向右移动，直到碰到容器边缘或另一个浮动元素；' +
            '其后的「块级元素」会忽略浮动元素的存在（占据其位置），但「行内元素」会环绕浮动元素排列。' +
            '这种「块级无视、行内环绕」的特性是 float 最容易让人困惑的地方。\n\n' +
            '现代布局中，flex 和 grid 已经全面取代 float 做页面布局。float 如今的合理用途仅剩：文字环绕图片、首字下沉等少数场景。' +
            '但理解 float 仍是必要的——大量遗留代码、Bootstrap 3 等老框架仍在使用，维护老项目时必须懂 float。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* float 基本语法 */\nfloat: left | right | none | inline-start | inline-end;\n\n/* clear 清除浮动 */\nclear: none | left | right | both | inline-start | inline-end;\n\n/* 清除浮动 hack：clearfix */\n.clearfix::after {\n  content: "";\n  display: block;   /* 或 table */\n  clear: both;\n}\n```\n\n' +
            '各值含义：\n' +
            '- `float: left` 元素向左浮动，后续内容环绕右侧\n' +
            '- `float: right` 元素向右浮动，后续内容环绕左侧\n' +
            '- `float: none` 默认值，不浮动\n' +
            '- `inline-start` / `inline-end` 逻辑属性，根据书写方向（LTR/RTL）自适应\n\n' +
            '## float 与 clear 属性表\n\n' +
            '| 属性 | 值 | 作用 |\n' +
            '| --- | --- | --- |\n' +
            '| float | left | 元素向左浮动 |\n' +
            '| float | right | 元素向右浮动 |\n' +
            '| float | none | 不浮动（默认） |\n' +
            '| clear | left | 不允许左侧有浮动元素 |\n' +
            '| clear | right | 不允许右侧有浮动元素 |\n' +
            '| clear | both | 两侧都不允许浮动元素 |\n' +
            '| clear | none | 允许两侧浮动（默认） |\n\n' +
            '## 清除浮动方法对比表\n\n' +
            '| 方法 | 写法 | 优点 | 缺点 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| overflow:hidden | 父级 `overflow: hidden` | 简单 | 可能裁剪溢出内容、阴影 |\n' +
            '| clearfix hack | `::after { content:""; display:block; clear:both }` | 标准无副作用 | 代码稍多 |\n' +
            '| display:flow-root | 父级 `display: flow-root` | 现代简洁 | IE 不支持（已非问题） |\n' +
            '| 额外空元素 | `<div style="clear:both"></div>` | 直观 | 污染 HTML，不推荐 |\n' +
            '| 父级也浮动 | 父级 `float: left` | 能解决 | 治标不治本，不推荐 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：文字环绕图片（float 的正当用途）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .article { max-width: 500px; }\n  .pic-left {\n    float: left;          /* 图片左浮动 */\n    margin: 0 15px 5px 0; /* 右下留白，避免文字贴图 */\n    width: 120px;\n  }\n  .pic-right {\n    float: right;         /* 图片右浮动 */\n    margin: 0 0 5px 15px;\n    width: 120px;\n  }\n  .text { line-height: 1.6; }\n</style>\n</head>\n<body>\n  <div class="article">\n    <img class="pic-left" src="https://picsum.photos/120/120" alt="左图">\n    <p class="text">这段文字会环绕在左浮动图片的右侧。float 让图片脱离文档流靠左，文字填补右侧空间，形成报纸式图文混排。这是 float 在现代布局中仍合理的少数场景之一。</p>\n    <img class="pic-right" src="https://picsum.photos/120/120" alt="右图">\n    <p class="text">这张图片右浮动，文字环绕在左侧。注意 float 只影响其后内容的排版。</p>\n  </div>\n</body>\n</html>\n```\n\n' +
            '示例二：clearfix 清除浮动塌陷\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* clearfix 标准 hack */\n  .clearfix::after {\n    content: "";\n    display: block;\n    clear: both;\n  }\n  .box { background: #eee; border: 1px solid #999; }\n  .left { float: left; width: 40%; background: #faa; }\n  .right { float: right; width: 40%; background: #aaf; }\n  /* 对比：未清除浮动的父级 */\n  .no-clear { background: #fee; border: 1px solid #c00; }\n</style>\n</head>\n<body>\n  <div class="box clearfix">\n    <div class="left">左浮动</div>\n    <div class="right">右浮动</div>\n  </div>\n  <p>↑ 父元素高度正常（clearfix 生效）</p>\n  <div class="no-clear">\n    <div class="left">左浮动</div>\n    <div class="right">右浮动</div>\n  </div>\n  <p>↑ 父元素高度塌陷（浮动子元素不撑开父级）</p>\n</body>\n</html>\n```\n\n' +
            '示例三：clear 属性强制换行\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .float-1 { float: left; width: 100px; background: #faa; padding: 5px; }\n  .float-2 { float: left; width: 100px; background: #afa; padding: 5px; }\n  .clear-both { clear: both; } /* 该元素之前不允许有浮动 */\n</style>\n</head>\n<body>\n  <div class="float-1">浮动 1</div>\n  <div class="float-2">浮动 2</div>\n  <div class="clear-both">我有 clear:both，强制移到浮动元素下方</div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **父元素高度塌陷**：浮动子元素不撑开父容器高度，导致父级「塌陷」，后续布局错乱。这是 float 最经典的副作用，必须用 clearfix、`display: flow-root` 或 `overflow: hidden` 清除。\n2. **float 不是布局工具**：虽然历史上用 float 做多列布局，但它本意是文字环绕。用 float 做布局会导致一系列问题（高度塌陷、顺序错乱、清除浮动负担）。新项目一律用 flex/grid。\n3. **clear 只对自己生效**：`clear: both` 是让「当前元素」移到浮动元素下方，而不是清除其他元素的浮动。清除浮动要从父级入手。\n4. **float 会让元素变成块级**：即使原来是 inline，浮动后会变成类似 inline-block 的行为（可设宽高，但脱离文档流）。\n5. **相邻浮动元素会「贴」在一起**：多个左浮动元素会从左到右排列，直到一行放不下才换行。注意 HTML 顺序会影响排列顺序。\n6. **现代替代方案**：清除浮动首选 `display: flow-root`（创建 BFC，无副作用，IE 已淘汰可放心用）；布局首选 flex/grid。\n\n' +
            '## 实际应用\n\n' +
            '- **图文环绕**：博客、新闻文章中图片左/右浮动，文字环绕。这是 float 唯一的「正当」用途。\n' +
            '- **首字下沉**：段落首字母 `float: left; font-size: 3em;` 实现杂志式首字下沉效果。\n' +
            '- **维护老项目**：Bootstrap 3、老旧企业站大量使用 float 布局，理解 float 是维护前提。\n' +
            '- **打印样式**：打印场景中偶尔用 float 实现特定排版（现代打印也推荐 grid）。\n\n' +
            '## 扩展知识\n\n' +
            '`display: flow-root` 是清除浮动的现代方案——它创建一个块级格式化上下文（BFC），让父级包含浮动子元素的高度，且无 `overflow: hidden` 的副作用。' +
            'BFC（Block Formatting Context）是理解 float 的关键概念：它是一个独立的渲染区域，内部元素的布局不影响外部。创建 BFC 的方式有：`overflow: hidden/auto/scroll`、`display: flow-root`、`float` 非 none、`position: absolute/fixed`、`display: inline-block/flex/grid` 等。' +
            'float 的历史地位：在 flex（2013）和 grid（2017）普及前，float 是实现多列布局的主流手段，「圣杯布局」「双飞翼布局」等经典方案都基于 float。如今这些技巧已进博物馆，但了解历史有助于理解 CSS 演进。',
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
            '## 概念详解\n\n' +
            'Flexbox（弹性盒布局）是 CSS3 引入的一维布局模块，专为「一行或一列」的元素排列设计。' +
            '在 flex 出现之前，实现「垂直居中」「等高列」「自适应分布」都需要 hack（table、float、inline-block+vertical-align），代码繁琐且脆弱。' +
            'Flexbox 用一套清晰的「主轴/交叉轴」模型解决了这些问题，是现代 CSS 布局的基石之一。\n\n' +
            'Flexbox 的核心思想是：父元素设 `display: flex` 成为「flex 容器」，其直接子元素自动成为「flex 项目」，沿「主轴」方向排列。' +
            '通过容器属性（flex-direction、justify-content、align-items、flex-wrap、gap）控制整体布局，' +
            '通过项目属性（flex-grow、flex-shrink、flex-basis、align-self、order）控制单个项目的行为。\n\n' +
            '理解 Flexbox 的关键是「主轴」和「交叉轴」的概念：主轴是项目排列的主要方向（由 flex-direction 决定），交叉轴是垂直于主轴的方向。' +
            'justify-content 控制主轴对齐，align-items 控制交叉轴对齐——这是最常混淆的两个属性。\n\n' +
            '一维布局（一行或一列）用 flex，二维布局（行列网格）用 grid——这是现代布局的分工原则。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 容器属性 */\n.flex-container {\n  display: flex | inline-flex;       /* 定义 flex 容器 */\n  flex-direction: row | column | row-reverse | column-reverse;\n  justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;\n  align-items: stretch | center | flex-start | flex-end | baseline;\n  flex-wrap: nowrap | wrap | wrap-reverse;\n  align-content: stretch | center | flex-start | flex-end | space-between;\n  gap: <length>;                    /* 项目间距 */\n  flex-flow: <direction> <wrap>;    /* 简写 */\n}\n\n/* 项目属性 */\n.flex-item {\n  flex-grow: <number>;     /* 放大比例 */\n  flex-shrink: <number>;   /* 收缩比例 */\n  flex-basis: <length> | auto;  /* 基准尺寸 */\n  flex: <grow> <shrink> <basis>;  /* 简写 */\n  align-self: auto | stretch | center | flex-start | flex-end | baseline;\n  order: <integer>;        /* 排列顺序，默认 0 */\n}\n```\n\n' +
            '## flex 容器属性表\n\n' +
            '| 属性 | 作用 | 常用值 |\n' +
            '| --- | --- | --- |\n' +
            '| display | 定义 flex 容器 | flex / inline-flex |\n' +
            '| flex-direction | 主轴方向 | row（横）/ column（纵） |\n' +
            '| justify-content | 主轴对齐 | center / space-between / space-around |\n' +
            '| align-items | 交叉轴对齐 | center / stretch / flex-start |\n' +
            '| flex-wrap | 是否换行 | nowrap（默认）/ wrap |\n' +
            '| gap | 项目间距 | 10px / 1em |\n' +
            '| align-content | 多行整体对齐 | 仅 wrap 多行时生效 |\n\n' +
            '## justify-content 值对照表\n\n' +
            '| 值 | 效果 | 适用场景 |\n' +
            '| --- | --- | --- |\n' +
            '| flex-start | 靠主轴起点（默认） | 普通排列 |\n' +
            '| center | 主轴居中 | 居中一组按钮 |\n' +
            '| flex-end | 靠主轴终点 | 右对齐 |\n' +
            '| space-between | 两端贴边，中间等分 | 导航栏左 logo 右菜单 |\n' +
            '| space-around | 每个项目两侧等距 | 卡片均匀分布 |\n' +
            '| space-evenly | 所有间距完全相等 | 均匀分布（含两端） |\n\n' +
            '## 代码示例\n\n' +
            '示例一：横向排列与对齐\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .container {\n    display: flex;\n    justify-content: space-between;  /* 两端对齐中间等分 */\n    align-items: center;             /* 交叉轴（垂直）居中 */\n    gap: 10px;                       /* 项目间距 */\n    background: #eee;\n    padding: 10px;\n    height: 80px;\n  }\n  .item { background: coral; padding: 15px; color: white; }\n  .small { padding: 5px; }  /* 高度不同，align-items:center 让它们垂直居中 */\n</style>\n</head>\n<body>\n  <div class="container">\n    <div class="item">A</div>\n    <div class="item small">B（小）</div>\n    <div class="item">C</div>\n  </div>\n</body>\n</html>\n```\n\n' +
            '示例二：纵向布局与居中\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .col {\n    display: flex;\n    flex-direction: column;  /* 纵向排列 */\n    gap: 8px;\n    align-items: stretch;    /* 默认拉伸宽度 */\n  }\n  .row-item { background: teal; color: white; padding: 10px; }\n  /* 经典：flex 实现完美垂直居中 */\n  .center-box {\n    display: flex;\n    justify-content: center;  /* 水平居中 */\n    align-items: center;      /* 垂直居中 */\n    height: 200px;\n    background: #f0f0f0;\n  }\n  .center-box .box { background: #3498db; color: white; padding: 20px; }\n</style>\n</head>\n<body>\n  <div class="col">\n    <div class="row-item">第一行</div>\n    <div class="row-item">第二行</div>\n    <div class="row-item">第三行</div>\n  </div>\n  <div class="center-box">\n    <div class="box">完美居中（水平+垂直）</div>\n  </div>\n</body>\n</html>\n```\n\n' +
            '示例三：导航栏 + space-between\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .navbar {\n    display: flex;\n    justify-content: space-between;  /* logo 在左，菜单在右 */\n    align-items: center;\n    padding: 10px 20px;\n    background: #2c3e50;\n    color: white;\n  }\n  .logo { font-size: 20px; font-weight: bold; }\n  .menu { display: flex; gap: 15px; }  /* 菜单本身也是 flex */\n  .menu a { color: white; text-decoration: none; }\n</style>\n</head>\n<body>\n  <nav class="navbar">\n    <div class="logo">MyApp</div>\n    <div class="menu">\n      <a href="#">首页</a>\n      <a href="#">产品</a>\n      <a href="#">关于</a>\n    </div>\n  </nav>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **flex 是一维布局**：一次只控制一个方向（行或列）。需要二维（行列网格）时用 grid，不要硬用 flex 嵌套模拟。\n2. **justify-content vs align-items**：最容易混淆的两个属性。记忆口诀：justify-content 沿「主轴」对齐，align-items 沿「交叉轴」对齐。flex-direction 改变时两者方向也跟着变。\n3. **gap 优于 margin**：flex 的 gap 属性只作用在项目之间，不作用在两端，避免首尾多余间距。老项目用 margin 实现间距需要用负 margin 或 first-child 选择器处理首尾，非常麻烦。\n4. **flex-wrap 默认不换行**：项目会压缩以适应容器。需要换行时设 `flex-wrap: wrap`，此时可用 `align-content` 控制多行整体对齐。\n5. **flex 项目最小宽度**：flex 项目默认 `min-width: auto`，内容很长时不会收缩到内容宽度以下。设 `min-width: 0` 可让项目完全按 flex 规则收缩。\n6. **浏览器兼容性**：Flexbox 已被所有现代浏览器全面支持，IE 10-11 部分支持（有 bug），如今可放心使用。\n\n' +
            '## 实际应用\n\n' +
            '- **导航栏**：logo 在左、菜单在右，用 `justify-content: space-between` 一行搞定，是 flex 最经典的场景。\n' +
            '- **垂直居中**：传统方案需 table/absolute+负 margin/line-height 等 hack，flex 只需 `display:flex; justify-content:center; align-items:center`。\n' +
            '- **卡片横排**：商品列表、图片画廊用 flex + gap 实现等间距横排，配合 flex-wrap 实现响应式换行。\n' +
            '- **粘性页脚**：`body { display: flex; flex-direction: column; min-height: 100vh }` + `footer { margin-top: auto }` 让页脚始终在底部。\n' +
            '- **表单字段堆叠**：`flex-direction: column` 让表单字段纵向排列，gap 控制间距。\n\n' +
            '## 扩展知识\n\n' +
            '`flex` 简写属性的默认值是 `0 1 auto`（不放大、可收缩、基准尺寸 auto）。常用 `flex: 1` 等价于 `1 1 0%`，让项目等分剩余空间。' +
            '`flex: none` 等价于 `0 0 auto`，让项目保持固定尺寸不参与伸缩。' +
            'inline-flex 与 flex 的区别：flex 是块级容器（独占一行），inline-flex 是行内块容器（不换行，尺寸由内容决定），类似 display:block 与 inline-block 的关系。' +
            'Flexbox 与 Grid 的选择：flex 适合「内容驱动」的布局（项目数量不定，按内容流式排列），grid 适合「结构驱动」的布局（明确的行列结构，如页面整体框架）。两者可嵌套使用。',
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
            '## 概念详解\n\n' +
            'flex-direction 和对齐属性（justify-content、align-items、align-self）是 Flexbox 最核心的三个控制维度。' +
            'flex-direction 决定「主轴方向」——即项目沿哪个方向排列；justify-content 控制项目在「主轴」上的分布方式；' +
            'align-items 控制项目在「交叉轴」（垂直于主轴的方向）上的对齐方式。\n\n' +
            '理解这三个属性的关键是建立「主轴/交叉轴」的心智模型：主轴是项目排列的主方向，交叉轴是垂直于主轴的方向。' +
            '当 flex-direction 为 row（横向）时，主轴是水平的，交叉轴是垂直的；' +
            '当 flex-direction 为 column（纵向）时，主轴变成垂直的，交叉轴变成水平的——此时 justify-content 控制垂直对齐，align-items 控制水平对齐。\n\n' +
            '这是 Flexbox 最容易让初学者困惑的点：「为什么 justify-content 时而水平时而垂直？」答案就是 flex-direction 改变了主轴方向。' +
            '记忆口诀：justify-content 永远沿主轴，align-items 永远沿交叉轴。\n\n' +
            '## 语法说明\n\n' +
            '```css\n.flex-container {\n  /* 主轴方向 */\n  flex-direction: row | row-reverse | column | column-reverse;\n\n  /* 主轴对齐 */\n  justify-content:\n    flex-start | center | flex-end |\n    space-between | space-around | space-evenly;\n\n  /* 交叉轴对齐（容器级，影响所有项目） */\n  align-items:\n    stretch | center | flex-start | flex-end | baseline;\n}\n\n.flex-item {\n  /* 单个项目交叉轴对齐（覆盖 align-items） */\n  align-self: auto | stretch | center | flex-start | flex-end | baseline;\n}\n```\n\n' +
            '## flex-direction 值对照表\n\n' +
            '| 值 | 主轴方向 | 起点位置 | 典型用途 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| row | 水平左→右 | 左 | 横向排列（默认） |\n' +
            '| row-reverse | 水平右→左 | 右 | 右到左排列 |\n' +
            '| column | 垂直上→下 | 上 | 纵向堆叠 |\n' +
            '| column-reverse | 垂直下→上 | 下 | 倒序堆叠 |\n\n' +
            '## align-items 值对照表\n\n' +
            '| 值 | 效果 | 适用场景 |\n' +
            '| --- | --- | --- |\n' +
            '| stretch | 拉伸填满交叉轴（默认） | 等高列、卡片 |\n' +
            '| center | 交叉轴居中 | 垂直居中 |\n' +
            '| flex-start | 靠交叉轴起点 | 顶部对齐 |\n' +
            '| flex-end | 靠交叉轴终点 | 底部对齐 |\n' +
            '| baseline | 基线对齐（文字底部） | 不同字号文字对齐 |\n\n' +
            '## space-* 三兄弟区别表\n\n' +
            '| 值 | 两端间距 | 项目间间距 | 直观效果 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| space-between | 0 | 等分 | 两端贴边，中间均匀 |\n' +
            '| space-around | 0.5 份 | 1 份 | 每项两侧各半份 |\n' +
            '| space-evenly | 1 份 | 1 份 | 所有间距完全相等 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：justify-content 五种值对比\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .demo { display: flex; margin: 5px 0; background: #eee; padding: 5px; }\n  .item { background: coral; padding: 8px 12px; color: white; }\n  .sb { justify-content: space-between; }   /* 两端贴边 */\n  .c  { justify-content: center; }          /* 居中 */\n  .sa { justify-content: space-around; }    /* 每项两侧等距 */\n  .se { justify-content: space-evenly; }    /* 所有间距相等 */\n  .fe { justify-content: flex-end; }        /* 靠右 */\n</style>\n</head>\n<body>\n  <div class="demo sb"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>\n  <div class="demo c"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>\n  <div class="demo sa"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>\n  <div class="demo se"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>\n  <div class="demo fe"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>\n</body>\n</html>\n```\n\n' +
            '示例二：align-items 交叉轴对齐 + align-self 单独覆盖\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .demo {\n    display: flex;\n    align-items: center;   /* 默认所有项目交叉轴居中 */\n    height: 100px;\n    background: #eee;\n  }\n  .item { background: teal; color: white; padding: 5px 15px; }\n  .tall { padding: 20px 15px; }\n  .top { align-self: flex-start; }    /* 单独靠顶 */\n  .bottom { align-self: flex-end; }   /* 单独靠底 */\n  .stretch { align-self: stretch; }   /* 单独拉伸 */\n</style>\n</head>\n<body>\n  <div class="demo">\n    <div class="item">默认居中</div>\n    <div class="item tall">大项居中</div>\n    <div class="item top">我靠顶</div>\n    <div class="item bottom">我靠底</div>\n    <div class="item stretch">我拉伸</div>\n  </div>\n</body>\n</html>\n```\n\n' +
            '示例三：flex-direction 改变主轴方向\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row { display: flex; flex-direction: row; gap: 8px; background: #eee; padding: 8px; }\n  .col { display: flex; flex-direction: column; gap: 8px; background: #fee; padding: 8px; width: 150px; }\n  .rev { display: flex; flex-direction: row-reverse; gap: 8px; background: #efe; padding: 8px; }\n  .item { background: coral; color: white; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="row">\n    <div class="item">1</div><div class="item">2</div><div class="item">3</div>\n  </div>\n  <div class="col">\n    <div class="item">1</div><div class="item">2</div><div class="item">3</div>\n  </div>\n  <div class="rev">\n    <div class="item">1</div><div class="item">2</div><div class="item">3</div>\n  </div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **justify-content vs align-items 混淆**：最常见错误。记住「justify-content 永远沿主轴，align-items 永远沿交叉轴」。flex-direction 改变时两者方向跟着变。\n2. **space-around 不是完全等距**：space-around 的两端间距是项目间距的一半。要完全等距用 space-evenly。\n3. **stretch 默认值**：align-items 默认是 stretch，会让项目拉伸填满交叉轴。如果不想要拉伸，显式设 center 或 flex-start。\n4. **baseline 对齐**：用于不同字号文字的底部对齐（如标签和输入框）。注意 baseline 是「文字基线」不是「盒子底部」。\n5. **align-self 优先级**：align-self 会覆盖容器的 align-items，但只影响单个项目。善用它可实现「多数居中，个别特殊对齐」。\n6. **row-reverse 影响 DOM 顺序**：row-reverse 让项目从右到左排列，但 DOM 顺序不变。注意这会影响 Tab 键焦点顺序和无障碍。\n\n' +
            '## 实际应用\n\n' +
            '- **导航栏两端对齐**：logo 在左、菜单在右，用 `justify-content: space-between` 一行搞定。\n' +
            '- **卡片垂直居中**：`align-items: center` 让高度不同的卡片在容器中垂直居中。\n' +
            '- **按钮组居中**：一组按钮水平居中，用 `justify-content: center`。\n' +
            '- **表单字段纵向堆叠**：`flex-direction: column` 让表单字段从上到下排列。\n' +
            '- **RTL 布局**：阿拉伯语等从右到左的语言，用 `flex-direction: row-reverse` 或 CSS 逻辑属性。\n\n' +
            '## 扩展知识\n\n' +
            '`gap` 属性在 flex 中控制项目间距，比 margin 更优雅——它只作用在项目之间，不影响首尾。' +
            'CSS 还提供 `row-gap` 和 `column-gap` 分别控制行列间距（源自 grid，flex 也支持）。' +
            '当 flex-wrap: wrap 启用换行后，`align-content` 控制多行整体在交叉轴的分布（如多行卡片整体居中或两端分布），它与 align-items 是不同层级——align-items 控制单行内项目对齐，align-content 控制多行整体对齐。' +
            'Flexbox 的对齐属性（justify-content、align-items）也适用于 CSS Grid，语法一致，便于迁移学习。',
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
            '## 概念详解\n\n' +
            '`flex-wrap` 决定 flex 项目是否换行，`flex` 简写属性（flex-grow/flex-shrink/flex-basis）决定单个项目如何伸缩。' +
            '这两组属性共同解决了「容器空间与项目尺寸」的动态分配问题——这是 Flexbox 的灵魂所在。\n\n' +
            '默认情况下，flex 容器是 `flex-wrap: nowrap`（不换行），所有项目挤在一行。当容器空间不足时，项目会按 flex-shrink 比例压缩。' +
            '如果项目内容不能被压缩（如图片、长单词），会导致溢出。此时需设 `flex-wrap: wrap` 让项目保持原尺寸换行。\n\n' +
            'flex 简写的三个分量：\n' +
            '- `flex-grow`：剩余空间分配比例。0 表示不抢剩余空间（保持 basis 尺寸）\n' +
            '- `flex-shrink`：空间不足时的压缩比例。0 表示不可压缩\n' +
            '- `flex-basis`：项目的基础尺寸（分配剩余空间前的初始大小）\n\n' +
            '理解 flex 伸缩机制的关键：先按 flex-basis 给每个项目分配初始空间，剩余空间（或不足空间）按 flex-grow（或 flex-shrink）比例分配。' +
            '这是 Flexbox 实现自适应布局的核心算法。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* flex-wrap 容器属性 */\n.flex-container {\n  flex-wrap: nowrap | wrap | wrap-reverse;\n  flex-flow: <direction> <wrap>;  /* 简写 */\n}\n\n/* flex 项目伸缩属性 */\n.flex-item {\n  flex-grow: <number>;    /* 默认 0 */\n  flex-shrink: <number>;  /* 默认 1 */\n  flex-basis: <length> | auto;  /* 默认 auto */\n  flex: <grow> <shrink> <basis>;  /* 简写 */\n  order: <integer>;       /* 排列顺序，默认 0 */\n}\n\n/* 常用简写 */\nflex: 1;            /* 等价 1 1 0%，等分剩余空间 */\nflex: auto;         /* 等价 1 1 auto，按内容比例分配 */\nflex: none;         /* 等价 0 0 auto，不伸缩保持原尺寸 */\nflex: 0 0 200px;    /* 固定 200px，不增长不压缩 */\n```\n\n' +
            '## flex 简写常用值表\n\n' +
            '| 简写 | 等价全写 | 含义 | 典型用途 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| flex: 1 | 1 1 0% | 等分剩余空间 | 多项目等宽分配 |\n' +
            '| flex: auto | 1 1 auto | 按内容比例伸缩 | 内容多的多占 |\n' +
            '| flex: none | 0 0 auto | 不伸缩 | 固定尺寸按钮 |\n' +
            '| flex: 0 0 200px | 0 0 200px | 固定 200px | 固定侧栏 |\n' +
            '| flex: 2 | 2 1 0% | 占 2 份空间 | 2:1 比例分配 |\n' +
            '| flex: initial | 0 1 auto | 默认行为 | 恢复默认 |\n\n' +
            '## flex-wrap 值表\n\n' +
            '| 值 | 行为 | 适用场景 |\n' +
            '| --- | --- | --- |\n' +
            '| nowrap | 不换行，项目压缩（默认） | 固定一行布局 |\n' +
            '| wrap | 空间不足时换行 | 响应式卡片 |\n' +
            '| wrap-reverse | 反向换行 | 特殊排版 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：flex: 1 等分 vs 固定宽度\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row { display: flex; gap: 5px; margin-bottom: 10px; }\n  .item { background: coral; color: white; padding: 15px; text-align: center; }\n  /* 等分：三个项目各占 1 份 */\n  .equal .item { flex: 1; }\n  /* 比例分配：2:1:1 */\n  .ratio .a { flex: 2; }\n  .ratio .b, .ratio .c { flex: 1; }\n  /* 固定宽度 + 自适应 */\n  .mixed .fixed { flex: 0 0 150px; background: #333; }\n  .mixed .fluid { flex: 1; }\n</style>\n</head>\n<body>\n  <div class="row equal">\n    <div class="item">等分 1</div><div class="item">等分 2</div><div class="item">等分 3</div>\n  </div>\n  <div class="row ratio">\n    <div class="item a">2 份</div><div class="item b">1 份</div><div class="item c">1 份</div>\n  </div>\n  <div class="row mixed">\n    <div class="item fixed">固定 150px</div><div class="item fluid">自适应剩余</div>\n  </div>\n</body>\n</html>\n```\n\n' +
            '示例二：flex-wrap 响应式换行\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .gallery {\n    display: flex;\n    flex-wrap: wrap;       /* 允许换行 */\n    gap: 10px;\n  }\n  .card {\n    flex: 1 1 200px;      /* 基准 200px，可伸缩 */\n    min-width: 200px;     /* 最小 200px，不到就换行 */\n    background: #f0f0f0;\n    padding: 20px;\n    border: 1px solid #ccc;\n  }\n</style>\n</head>\n<body>\n  <div class="gallery">\n    <div class="card">卡片 1</div>\n    <div class="card">卡片 2</div>\n    <div class="card">卡片 3</div>\n    <div class="card">卡片 4</div>\n    <div class="card">卡片 5</div>\n  </div>\n  <p>缩小窗口宽度，卡片会自动换行</p>\n</body>\n</html>\n```\n\n' +
            '示例三：order 改变排列顺序\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row { display: flex; gap: 5px; }\n  .item { background: teal; color: white; padding: 15px; flex: 1; text-align: center; }\n  .first { order: -1; }   /* 排到最前 */\n  .last { order: 99; }    /* 排到最后 */\n</style>\n</head>\n<body>\n  <div class="row">\n    <div class="item">A（默认 order:0）</div>\n    <div class="item first">B（order:-1，排最前）</div>\n    <div class="item">C（默认）</div>\n    <div class="item last">D（order:99，排最后）</div>\n  </div>\n  <p>DOM 顺序是 A B C D，显示顺序是 B A C D</p>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **flex: 1 vs flex: auto**：`flex: 1` 等价 `1 1 0%`（基准为 0，完全等分）；`flex: auto` 等价 `1 1 auto`（基准为内容尺寸，内容多的多占）。要纯等分用 `flex: 1`。\n2. **flex-basis: 0% vs auto**：0% 表示不考虑内容尺寸，完全按 grow 比例分配；auto 表示先按内容尺寸，再分配剩余空间。\n3. **min-width 默认值陷阱**：flex 项目默认 `min-width: auto`（不小于内容宽度），导致长内容项目无法压缩。设 `min-width: 0` 让项目完全按 flex 规则收缩。\n4. **flex-wrap 与 align-content**：换行后用 `align-content` 控制多行整体对齐（如整体居中、两端分布）。nowrap 时 align-content 无效。\n5. **order 影响视觉不影响 DOM**：order 只改变视觉顺序，DOM 顺序不变。注意无障碍——屏幕阅读器仍按 DOM 顺序朗读。\n6. **flex 简写优于单写**：推荐用 `flex` 简写而非单独写 flex-grow/shrink/basis，因为简写会重置未指定的值，避免继承旧值。\n\n' +
            '## 实际应用\n\n' +
            '- **等分布局**：多个按钮 `flex: 1` 等分容器宽度，常用于底部 tab 栏。\n' +
            '- **侧栏 + 主区**：`sidebar { flex: 0 0 200px } main { flex: 1 }` 实现固定侧栏 + 自适应主区，后台管理经典布局。\n' +
            '- **响应式卡片**：`flex: 1 1 200px` + `flex-wrap: wrap` + `min-width` 实现卡片自动换行，无需媒体查询。\n' +
            '- **圣杯布局**：左栏 `flex: 0 0 200px`、右栏 `flex: 0 0 150px`、主区 `flex: 1`，三栏布局一行搞定。\n' +
            '- **2:1 比例**：`flex: 2` 和 `flex: 1` 实现 2:1 宽度分配，如文章区:侧边栏。\n\n' +
            '## 扩展知识\n\n' +
            'flex 伸缩算法分两步：第一步按 flex-basis 分配初始空间；第二步计算剩余（或不足）空间，按 flex-grow（或 flex-shrink）比例分配。' +
            '当空间不足时，flex-shrink 决定压缩比例——shrink 为 0 的项目不压缩，shrink 为 1 的按比例分摊压缩量。' +
            '`flex: initial`（等价 `0 1 auto`）是 flex 的默认值——不增长但可压缩，基准为内容尺寸。大多数情况下不需要显式设置。' +
            '响应式布局中，`flex: 1 1 minmax(200px, 1fr)` 的思路（结合 min-width）可实现无媒体查询的自适应卡片网格——这是「内在响应式设计」的精髓。',
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
            '## 概念详解\n\n' +
            'CSS Grid 是 CSS3 引入的二维布局系统，能同时控制「行」和「列」——这是它与 Flexbox（一维）的根本区别。' +
            '在 Grid 出现前，实现复杂的二维布局（如页面整体框架：header + sidebar + main + aside + footer）需要 float hack 或嵌套 flex，代码复杂且难以维护。' +
            'Grid 用一套直观的「行列定义」语法解决了这个问题，是现代 CSS 布局的双子星之一（另一个是 Flexbox）。\n\n' +
            'Grid 的核心思想：父元素设 `display: grid` 成为「grid 容器」，通过 `grid-template-columns` 和 `grid-template-rows` 定义行列结构，' +
            '子元素自动落入网格单元（cell），也可通过 `grid-column`/`grid-row` 指定跨越多个单元。\n\n' +
            'Grid 引入了 `fr`（fraction）单位——按比例分配剩余空间，类似 flex 的 flex-grow。`1fr 2fr` 表示按 1:2 分配。' +
            '`repeat()` 函数简化重复列定义，`minmax()` 设置尺寸范围，`auto-fill`/`auto-fit` 实现自动列数——这三者组合是响应式网格的神器。\n\n' +
            'Flex vs Grid 的分工：Flex 适合一维（一行或一列）、内容驱动的布局；Grid 适合二维（行列网格）、结构驱动的布局。两者常嵌套使用。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* grid 容器属性 */\n.grid-container {\n  display: grid | inline-grid;\n\n  /* 定义行列 */\n  grid-template-columns: <track-size> ...;  /* 如 200px 1fr 200px */\n  grid-template-rows: <track-size> ...;\n\n  /* 间距 */\n  gap: <row-gap> <column-gap>;\n  row-gap: <length>;\n  column-gap: <length>;\n\n  /* 对齐 */\n  justify-items: start | center | end | stretch;  /* 单元格内水平对齐 */\n  align-items: start | center | end | stretch;    /* 单元格内垂直对齐 */\n  justify-content: start | center | space-between; /* 整体网格水平对齐 */\n  align-content: start | center | space-between;   /* 整体网格垂直对齐 */\n}\n\n/* grid 项目属性 */\n.grid-item {\n  grid-column: <start> / <end>;  /* 跨列，如 1 / 3 或 span 2 */\n  grid-row: <start> / <end>;     /* 跨行 */\n  grid-area: <row-start> / <col-start> / <row-end> / <col-end>;\n}\n\n/* 常用函数 */\nrepeat(3, 1fr);                      /* 3 列等宽 */\nrepeat(auto-fill, minmax(200px, 1fr)); /* 自动列数响应式 */\nminmax(100px, auto);                 /* 最小 100px，最大按内容 */\n```\n\n' +
            '## grid 容器核心属性表\n\n' +
            '| 属性 | 作用 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| grid-template-columns | 定义列轨道 | 200px 1fr 200px |\n' +
            '| grid-template-rows | 定义行轨道 | 100px auto 80px |\n' +
            '| gap | 行列间距简写 | 10px 20px |\n' +
            '| justify-items | 单元格内水平对齐 | center |\n' +
            '| align-items | 单元格内垂直对齐 | center |\n' +
            '| justify-content | 网格整体水平对齐 | space-between |\n' +
            '| align-content | 网格整体垂直对齐 | center |\n' +
            '| grid-auto-flow | 自动排列方向 | row（默认）/ column / dense |\n\n' +
            '## 轨道尺寸单位表\n\n' +
            '| 单位/函数 | 含义 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| px | 固定像素 | 200px |\n' +
            '| % | 百分比 | 50% |\n' +
            '| fr | 比例单位（剩余空间） | 1fr 2fr（1:2） |\n' +
            '| auto | 按内容尺寸 | auto |\n' +
            '| minmax(min, max) | 尺寸范围 | minmax(200px, 1fr) |\n' +
            '| repeat(n, size) | 重复 n 次 | repeat(3, 1fr) |\n' +
            '| auto-fill | 自动填充列数 | repeat(auto-fill, 200px) |\n' +
            '| auto-fit | 自动填充并拉伸 | repeat(auto-fit, minmax(200px, 1fr)) |\n\n' +
            '## 代码示例\n\n' +
            '示例一：经典三列布局（固定-自适应-固定）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 200px 1fr 200px;  /* 左固定 中自适应 右固定 */\n    grid-template-rows: 60px 1fr 60px;       /* 三行：头 体 脚 */\n    gap: 10px;\n    height: 300px;\n  }\n  .grid > div { padding: 15px; color: white; }\n  .header { grid-column: 1 / 4; background: #2c3e50; }  /* 跨全部 3 列 */\n  .sidebar { background: #34495e; }\n  .main { background: coral; }\n  .aside { background: teal; }\n  .footer { grid-column: 1 / 4; background: #2c3e50; }  /* 跨全部 3 列 */\n</style>\n</head>\n<body>\n  <div class="grid">\n    <div class="header">Header（跨 3 列）</div>\n    <div class="sidebar">Sidebar 200px</div>\n    <div class="main">Main 自适应</div>\n    <div class="aside">Aside 200px</div>\n    <div class="footer">Footer（跨 3 列）</div>\n  </div>\n</body>\n</html>\n```\n\n' +
            '示例二：响应式卡片网格（auto-fill + minmax）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .cards {\n    display: grid;\n    /* 自动列数：每列最小 150px，最大等分 */\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    gap: 15px;\n  }\n  .card {\n    background: #f5f5f5;\n    padding: 20px;\n    text-align: center;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n  }\n</style>\n</head>\n<body>\n  <div class="cards">\n    <div class="card">1</div>\n    <div class="card">2</div>\n    <div class="card">3</div>\n    <div class="card">4</div>\n    <div class="card">5</div>\n    <div class="card">6</div>\n  </div>\n  <p>缩放窗口，列数自动变化（无需媒体查询）</p>\n</body>\n</html>\n```\n\n' +
            '示例三：repeat 与 fr 比例分配\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);  /* 4 列等宽 */\n    gap: 10px;\n  }\n  .item { background: #3498db; color: white; padding: 20px; text-align: center; }\n  .wide { grid-column: span 2; background: #e74c3c; }  /* 跨 2 列 */\n</style>\n</head>\n<body>\n  <div class="grid">\n    <div class="item">1</div>\n    <div class="item wide">2（跨 2 列）</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n  </div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **fr 分配的是剩余空间**：先扣除固定尺寸（px、%），剩余空间按 fr 比例分配。`200px 1fr 1fr` 中两个 1fr 平分「总宽 - 200px」。\n2. **auto-fill vs auto-fit**：auto-fill 在空间不足时保留空列（列数固定）；auto-fit 会拉伸现有列填满空间（列数变少但更宽）。卡片网格通常用 auto-fit。\n3. **minmax 是响应式核心**：`minmax(200px, 1fr)` 让列最小 200px（不到就换行），最大等分——配合 auto-fit 实现无媒体查询响应式。\n4. **gap 是 grid 原生属性**：grid 的 gap 比 margin 优雅，自动处理行列间距且不影响首尾。早期 grid 用 grid-gap（已废弃），现统一用 gap。\n5. **grid-column 跨列语法**：`grid-column: 1 / 3` 表示从第 1 条网格线到第 3 条线（跨 2 列）；`grid-column: span 2` 更直观表示跨 2 列。\n6. **隐式网格**：当项目数超过定义的网格单元时，会自动创建「隐式行/列」，尺寸由 grid-auto-rows/grid-auto-columns 控制。\n\n' +
            '## 实际应用\n\n' +
            '- **页面整体布局**：header + sidebar + main + footer 用 grid 一气呵成，比嵌套 flex 更清晰。\n' +
            '- **响应式卡片网格**：`repeat(auto-fit, minmax(200px, 1fr))` 一行实现自适应列数，无需媒体查询——电商商品列表常用。\n' +
            '- **图片画廊**：grid + gap 实现等间距画廊，配合 grid-column 跨列实现「大图 + 小图」混排。\n' +
            '- **日历/表格**：7 列网格实现日历布局，每格固定尺寸。\n' +
            '- **仪表盘**：多模块仪表盘用 grid 区域命名（grid-template-areas）实现语义化布局。\n\n' +
            '## 扩展知识\n\n' +
            '`grid-template-areas` 允许用「命名区域」定义布局，非常直观：`"header header" "sidebar main" "footer footer"`，然后用 `grid-area: header` 把元素放入对应区域。' +
            '这种「画图式」布局对复杂页面特别友好。' +
            '`subgrid` 是 Grid Level 2 的新特性，允许子网格继承父网格的轨道定义，实现嵌套网格对齐——解决「子网格无法与父网格对齐」的痛点（Chrome 117+ 支持）。' +
            'Grid 与 Flex 配合的最佳实践：grid 做页面骨架（二维结构），flex 做组件内部（一维排列）。例如用 grid 定义 header/sidebar/main，sidebar 内部用 flex 排列菜单项。' +
            'aspect-ratio 属性配合 grid 可实现固定宽高比的卡片网格，无需 padding-top hack。',
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
            '## 概念详解\n\n' +
            'grid-template-areas 是 CSS Grid 最具表现力的特性——它允许用「字符串画图」的方式定义页面布局结构，' +
            '让复杂的二维布局变得直观可读。你只需用引号包裹的字符串「画出」每行的区域分布，然后给元素用 `grid-area: 名字` 对号入座。\n\n' +
            '这种「画图式布局」的革命性在于：布局结构直接体现在 CSS 代码中，一眼就能看出页面骨架。' +
            '相比用 grid-column/grid-row 线编号手动定位，areas 方式更语义化、更易维护——改布局只需改 areas 字符串，不用算线编号。\n\n' +
            '除了 areas 命名，Grid 还提供基于「网格线编号」的精确定位：`grid-column: 1 / 3` 表示从第 1 条线到第 3 条线（跨 2 列）。' +
            '线编号从 1 开始，也可用 `span N` 表示跨 N 个单元。两种方式可混用：复杂结构用 areas，细节调整用线编号。\n\n' +
            'grid-template-areas 特别适合页面整体骨架（header/nav/main/aside/footer）、仪表盘布局、杂志式排版等结构清晰的场景。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* grid-template-areas 定义区域图 */\n.layout {\n  display: grid;\n  grid-template-areas:\n    "header header header"    /* 第一行：header 跨 3 列 */\n    "nav    main   aside"    /* 第二行：三列各占一格 */\n    "footer footer footer";  /* 第三行：footer 跨 3 列 */\n  grid-template-columns: 100px 1fr 100px;  /* 必须与 areas 列数对应 */\n  grid-template-rows: 50px 1fr 40px;       /* 必须与 areas 行数对应 */\n  gap: 10px;\n}\n\n/* 子元素用 grid-area 对号入座 */\n.header { grid-area: header; }\n.nav { grid-area: nav; }\n.main { grid-area: main; }\n.aside { grid-area: aside; }\n.footer { grid-area: footer; }\n\n/* 基于线编号的定位 */\n.item-a { grid-column: 1 / 3; grid-row: 1 / 2; }  /* 第 1-3 列线，第 1-2 行线 */\n.item-b { grid-column: span 2; }                  /* 跨 2 列 */\n.item-c { grid-row: 2 / span 2; }                 /* 从第 2 行线起跨 2 行 */\n\n/* grid-area 四值简写 */\n.item { grid-area: <row-start> / <col-start> / <row-end> / <col-end>; }\n```\n\n' +
            '## grid-area 定位方式表\n\n' +
            '| 方式 | 语法 | 含义 | 示例 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| 命名区域 | grid-area: name | 放入 areas 定义的命名区域 | grid-area: header |\n' +
            '| 线编号 | grid-column: 1 / 3 | 从线 1 到线 3 | 跨第 1-2 列 |\n' +
            '| span 关键字 | grid-column: span 2 | 跨 2 个单元 | 跨 2 列 |\n' +
            '| 混合 | grid-column: 1 / span 2 | 从线 1 起跨 2 列 | 跨第 1-2 列 |\n' +
            '| 四值简写 | grid-area: 1 / 1 / 3 / 3 | 行起/列起/行终/列终 | 跨 2 行 2 列 |\n\n' +
            '## areas 规则表\n\n' +
            '| 规则 | 说明 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| 每行用引号包裹 | 字符串表示一行 | "header header" |\n' +
            '| 同名占同一区域 | 名字相同合并为一块 | "nav nav" 占 2 格 |\n' +
            '| 点号表示空 | . 留空不放置 | ". main ." |\n' +
            '| 区域必须矩形 | 同名区域不能呈 L 形 | 合法：矩形块 |\n' +
            '| 行列数需对应 | areas 列数 = template-columns 数 | 3 个名字 = 3 列 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：经典页面骨架（areas 画图）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .layout {\n    display: grid;\n    grid-template-areas:\n      "header header header"   /* 第一行：header 跨 3 列 */\n      "nav    main   aside"   /* 第二行：nav/main/aside 各 1 列 */\n      "footer footer footer"; /* 第三行：footer 跨 3 列 */\n    grid-template-columns: 100px 1fr 100px;\n    grid-template-rows: 50px 1fr 40px;\n    gap: 5px;\n    height: 300px;\n  }\n  .header { grid-area: header; background: #2c3e50; color: white; padding: 10px; }\n  .nav { grid-area: nav; background: #34495e; color: white; padding: 10px; }\n  .main { grid-area: main; background: #ecf0f1; padding: 10px; }\n  .aside { grid-area: aside; background: #7f8c8d; color: white; padding: 10px; }\n  .footer { grid-area: footer; background: #2c3e50; color: white; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="layout">\n    <div class="header">Header</div>\n    <div class="nav">Nav</div>\n    <div class="main">Main</div>\n    <div class="aside">Aside</div>\n    <div class="footer">Footer</div>\n  </div>\n</body>\n</html>\n```\n\n' +
            '示例二：响应式 areas（媒体查询切换布局）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .layout {\n    display: grid;\n    gap: 10px;\n    min-height: 300px;\n  }\n  /* 桌面：三列布局 */\n  @media (min-width: 768px) {\n    .layout {\n      grid-template-areas:\n        "header header header"\n        "sidebar main main"\n        "footer footer footer";\n      grid-template-columns: 200px 1fr 1fr;\n      grid-template-rows: 60px 1fr 50px;\n    }\n  }\n  /* 移动：单列堆叠 */\n  @media (max-width: 767px) {\n    .layout {\n      grid-template-areas:\n        "header"\n        "main"\n        "sidebar"\n        "footer";\n      grid-template-rows: auto 1fr auto auto;\n    }\n  }\n  .header { grid-area: header; background: #333; color: white; padding: 10px; }\n  .sidebar { grid-area: sidebar; background: #555; color: white; padding: 10px; }\n  .main { grid-area: main; background: #eee; padding: 10px; }\n  .footer { grid-area: footer; background: #333; color: white; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="layout">\n    <div class="header">Header</div>\n    <div class="sidebar">Sidebar</div>\n    <div class="main">Main</div>\n    <div class="footer">Footer</div>\n  </div>\n  <p>缩放窗口看布局切换</p>\n</body>\n</html>\n```\n\n' +
            '示例三：跨列与跨行（线编号 + span）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);  /* 4 列 */\n    grid-template-rows: repeat(3, 80px);     /* 3 行 */\n    gap: 5px;\n  }\n  .item { background: coral; color: white; padding: 15px; text-align: center; }\n  /* 跨 2 列 */\n  .wide { grid-column: span 2; background: teal; }\n  /* 跨 2 行 */\n  .tall { grid-row: span 2; background: #e74c3c; }\n  /* 精确线编号：从第 2 列线到第 4 列线，第 2 行线到第 4 行线 */\n  .precise { grid-column: 2 / 4; grid-row: 2 / 4; background: #9b59b6; }\n</style>\n</head>\n<body>\n  <div class="grid">\n    <div class="item">1</div>\n    <div class="item wide">跨 2 列</div>\n    <div class="item">4</div>\n    <div class="item tall">跨 2 行</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item precise">精确定位（2-4列, 2-4行）</div>\n    <div class="item">9</div>\n  </div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **areas 必须是矩形**：同名区域不能呈 L 形或不规则形状。如果需要 L 形，拆成两个区域或用线编号定位。\n2. **行列数必须对应**：grid-template-areas 每行的名字数必须等于 grid-template-columns 的列数，行数必须等于 grid-template-rows 的行数，否则布局错乱。\n3. **`.` 表示空格**：用点号留空，不放任何元素。如 `"nav . main"` 中间留空。\n4. **响应式切换 areas**：可在媒体查询中重新定义 grid-template-areas，实现桌面三列、移动单列的布局切换，子元素的 grid-area 名字不变。\n5. **span 不能超出网格**：`grid-column: span 5` 在 4 列网格中会溢出或被截断。注意 span 值不超过总列/行数。\n6. **线编号从 1 开始**：第 1 条线在最左/最上，N 列有 N+1 条线。也可用负数从末尾数（-1 是最后一条线）。\n\n' +
            '## 实际应用\n\n' +
            '- **页面整体骨架**：header/nav/main/aside/footer 的复杂排版，areas 画图一目了然，是 grid-template-areas 的核心场景。\n' +
            '- **仪表盘布局**：多个模块（统计卡、图表、列表）用 areas 命名布局，语义清晰。\n' +
            '- **杂志式排版**：大图 + 小图 + 文字的不规则网格，用 span 跨列实现。\n' +
            '- **响应式重构**：媒体查询中切换 areas 字符串，桌面三列变移动单列，无需改 HTML。\n' +
            '- **日历/表格**：7 列网格，用 grid-column: span 7 实现跨整周的「全天事件」。\n\n' +
            '## 扩展知识\n\n' +
            '线编号支持负数：`grid-column: 1 / -1` 表示从第一条线到最后一条线（跨全部列），非常实用。`-1` 总是指向最后一条显式线。' +
            '`grid-auto-flow: dense` 开启「密集填充」算法，让后自动用小项目填补大项目留下的空隙——适合大小不一的瀑布流布局（但可能改变视觉顺序）。' +
            '命名网格线（Named Lines）是 areas 之外的另一种语义化方式：`grid-template-columns: [start] 1fr [middle] 1fr [end]`，然后用 `grid-column: start / middle` 引用。' +
            '现代开发中，grid-template-areas 是页面布局的首选方案——它让 HTML 顺序与视觉布局解耦，响应式切换只需改 CSS 不动 HTML，极大提升维护性。',
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
            '## 概念详解\n\n' +
            '媒体查询（Media Queries）是 CSS3 响应式设计的核心机制，它允许根据设备特征（视口宽度、高度、方向、分辨率、色彩能力、用户偏好等）应用不同的样式规则。' +
            '在移动互联网时代，同一套网页需要适配手机、平板、桌面、甚至电视等多种设备，媒体查询让「同一套 HTML，多套样式」成为可能。\n\n' +
            '媒体查询的本质是「条件判断」——当设备满足某些条件时，对应的 CSS 规则块才会生效。' +
            '这类似于编程语言的 if 语句，但它是声明式的，由浏览器在渲染时自动评估。' +
            '配合流式布局（百分比）和弹性布局（flex/grid），媒体查询构成了响应式设计的三驾马车。\n\n' +
            '媒体查询的诞生源于一个现实问题：2010 年前，网站多为「固定宽度」（如 960px），在手机上需要缩放才能看清。' +
            'Ethan Marcotte 在 2010 年提出「响应式 Web 设计」理念，核心就是媒体查询 + 流式布局 + 弹性图片，让网页「响应」设备尺寸。\n\n' +
            '注意：媒体查询必须配合 `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 才能在移动端正确工作——否则手机会以默认 980px 宽度渲染页面，媒体查询的断点会失效。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 基本语法 */\n@media <media-type> and (<condition>) {\n  /* 满足条件时生效的样式 */\n}\n\n/* 常用媒体类型（可省略，默认 all） */\n@media all { ... }   /* 所有设备 */\n@media screen { ... } /* 屏幕 */\n@media print { ... }  /* 打印 */\n\n/* 常用条件 */\n@media (max-width: 600px) { ... }              /* 宽度 ≤ 600px */\n@media (min-width: 768px) { ... }              /* 宽度 ≥ 768px */\n@media (orientation: landscape) { ... }        /* 横屏 */\n@media (orientation: portrait) { ... }         /* 竖屏 */\n@media (prefers-color-scheme: dark) { ... }    /* 深色模式偏好 */\n@media (hover: hover) { ... }                  /* 支持悬停（鼠标） */\n@media (resolution: 2dppx) { ... }             /* 高分屏（Retina） */\n\n/* 组合条件 */\n@media (min-width: 600px) and (max-width: 900px) { ... }  /* 且 */\n@media (max-width: 600px), (orientation: landscape) { ... } /* 或（逗号） */\n@media not (min-width: 768px) { ... }          /* 非 */\n\n/* 引入外部样式表 */\n<link rel="stylesheet" media="(max-width: 600px)" href="mobile.css">\n```\n\n' +
            '## 常用媒体特性表\n\n' +
            '| 特性 | 含义 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| width / height | 视口宽/高 | (min-width: 768px) |\n' +
            '| max-width / min-width | 最大/最小宽度 | (max-width: 600px) |\n' +
            '| orientation | 屏幕方向 | (orientation: landscape) |\n' +
            '| resolution | 分辨率 | (min-resolution: 2dppx) |\n' +
            '| prefers-color-scheme | 颜色偏好 | (prefers-color-scheme: dark) |\n' +
            '| prefers-reduced-motion | 减少动画偏好 | (prefers-reduced-motion: reduce) |\n' +
            '| hover | 悬停能力 | (hover: hover) |\n' +
            '| pointer | 指针精度 | (pointer: coarse) 触屏 |\n\n' +
            '## 逻辑组合符表\n\n' +
            '| 符号 | 含义 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| and | 且（同时满足） | (min-width: 600px) and (max-width: 900px) |\n' +
            '| ,（逗号） | 或（任一满足） | (max-width: 600px), (orientation: landscape) |\n' +
            '| not | 非（取反） | not (min-width: 768px) |\n' +
            '| only | 仅（兼容老浏览器） | only screen and (max-width: 600px) |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基础断点响应式\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .box { padding: 20px; color: white; text-align: center; }\n  /* 默认（移动优先）：红色 */\n  .box { background: red; }\n  /* 平板（≥768px）：绿色 */\n  @media (min-width: 768px) {\n    .box { background: green; }\n  }\n  /* 桌面（≥1024px）：蓝色 */\n  @media (min-width: 1024px) {\n    .box { background: blue; }\n  }\n</style>\n</head>\n<body>\n  <div class="box">缩放窗口看颜色变化（窄红 → 中绿 → 宽蓝）</div>\n</body>\n</html>\n```\n\n' +
            '示例二：深色模式 + 减少动画\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { background: white; color: black; transition: background 0.3s; }\n  .spin { animation: spin 2s linear infinite; }\n  @keyframes spin { to { transform: rotate(360deg); } }\n\n  /* 系统深色模式 */\n  @media (prefers-color-scheme: dark) {\n    body { background: #1a1a1a; color: #eee; }\n  }\n\n  /* 用户偏好减少动画（无障碍） */\n  @media (prefers-reduced-motion: reduce) {\n    .spin { animation: none; }\n    body { transition: none; }\n  }\n</style>\n</head>\n<body>\n  <p>跟随系统深色模式切换</p>\n  <div class="spin" style="width:50px;height:50px;background:coral;border-radius:50%;">旋转</div>\n  <p>系统开启「减少动画」时，旋转停止</p>\n</body>\n</html>\n```\n\n' +
            '示例三：响应式导航（桌面横排/移动纵排）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .nav { display: flex; gap: 15px; padding: 10px; background: #2c3e50; }\n  .nav a { color: white; text-decoration: none; }\n  /* 移动端：纵向堆叠 */\n  @media (max-width: 600px) {\n    .nav { flex-direction: column; gap: 8px; }\n  }\n</style>\n</head>\n<body>\n  <nav class="nav">\n    <a href="#">首页</a>\n    <a href="#">产品</a>\n    <a href="#">关于</a>\n    <a href="#">联系</a>\n  </nav>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **viewport meta 必不可少**：没有 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`，手机会以 980px 宽渲染，媒体查询断点全失效。这是最常见的「响应式不生效」原因。\n2. **断点选择基于内容而非设备**：不要为「iPhone」「iPad」设固定断点（设备太多）。应根据内容布局自然变化的临界点设断点（如卡片从 3 列变 2 列的宽度）。\n3. **移动优先 vs 桌面优先**：移动优先用 `min-width`（从小到大递增），桌面优先用 `max-width`（从大到小递减）。现代推荐移动优先（基础样式给移动，媒体查询增强桌面）。\n4. **prefers-reduced-motion 无障碍**：部分用户对动画敏感（前庭功能障碍），应尊重 `prefers-reduced-motion: reduce` 偏好，减少或禁用动画。\n5. **不要过度依赖媒体查询**：能用 flex/grid + minmax + clamp 实现的「内在响应式」就不要用媒体查询。媒体查询适合「结构性变化」（如导航横纵切换），细节调整用流体单位。\n6. **打印样式**：用 `@media print` 为打印优化（隐藏导航、调整字号、避免背景色），提升打印体验。\n\n' +
            '## 实际应用\n\n' +
            '- **响应式布局切换**：桌面多列、移动单列，用 `@media (max-width: 768px) { flex-direction: column }`。\n' +
            '- **深色模式**：`@media (prefers-color-scheme: dark)` 跟随系统主题，无需 JS。\n' +
            '- **导航栏适配**：桌面横排菜单、移动汉堡菜单，用媒体查询切换显示方式。\n' +
            '- **隐藏/显示元素**：移动端隐藏侧边栏，桌面显示；用 `display: none/block` 在媒体查询中切换。\n' +
            '- **打印优化**：`@media print` 隐藏导航、广告，调整字号和颜色，节约墨水。\n\n' +
            '## 扩展知识\n\n' +
            '容器查询（Container Queries，CSS Level 3）是媒体查询的进化版——它基于「父容器宽度」而非「视口宽度」应用样式，让组件真正自适应容器。' +
            '语法：`@container (min-width: 400px)`，父元素需设 `container-type: inline-size`。容器查询解决了「同一组件在不同位置需要不同布局」的问题（Chrome 105+ 支持）。' +
            '`prefers-color-scheme` 是用户偏好查询的代表，CSS 还支持 `prefers-contrast`（对比度偏好）、`prefers-reduced-transparency`（减少透明度）等，都是无障碍设计的重要工具。' +
            '现代 CSS 的趋势是「内在响应式」——用 clamp()、minmax()、auto-fit 等让布局自然适应，减少对媒体查询断点的依赖。媒体查询更适合「结构性变化」（如导航形态切换）。',
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
            '## 概念详解\n\n' +
            '移动优先（Mobile First）是 Luke Wroblewski 在 2009 年提出的设计理念，核心是「先设计移动端体验，再渐进增强到桌面」。' +
            '在 CSS 层面，这意味着：默认样式针对最窄屏幕（移动端）编写，然后用 `min-width` 媒体查询逐步为大屏添加增强样式。\n\n' +
            '移动优先的底层逻辑是「渐进增强」（Progressive Enhancement）——先保证最基础的功能和体验在所有设备可用，再为高级设备添加增强。' +
            '与之相对的是「优雅降级」（Graceful Degradation）——先做完整桌面版，再为移动端做适配（桌面优先）。\n\n' +
            '移动优先的技术实现：默认 CSS 是移动端样式（无需媒体查询），然后用 `@media (min-width: 768px) { ... }` 为平板增强，' +
            '`@media (min-width: 1024px) { ... }` 为桌面增强。由于 CSS 后写的规则覆盖先写的，大屏样式自然叠加在小屏基础之上。\n\n' +
            '移动优先的优势：移动端加载的 CSS 最少（性能好）；移动端样式作为基础更稳定；强迫开发者聚焦核心内容（移动屏小，必须取舍）；符合移动互联网趋势（移动流量已超桌面）。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 移动优先写法：默认是移动，min-width 递增 */\n/* 1. 基础样式（移动端，无需媒体查询） */\n.cards {\n  display: flex;\n  flex-direction: column;  /* 移动单列 */\n  gap: 10px;\n}\n\n/* 2. 平板增强（≥600px） */\n@media (min-width: 600px) {\n  .cards { flex-direction: row; flex-wrap: wrap; }\n  .card { flex: 1 1 45%; }  /* 两列 */\n}\n\n/* 3. 桌面增强（≥1024px） */\n@media (min-width: 1024px) {\n  .card { flex: 1 1 30%; }  /* 三列 */\n}\n\n/* 对比：桌面优先写法（max-width 递减，不推荐） */\n.cards { display: flex; flex-wrap: wrap; }  /* 默认桌面三列 */\n.card { flex: 1 1 30%; }\n@media (max-width: 1023px) { .card { flex: 1 1 45%; } }  /* 平板 */\n@media (max-width: 599px) { .cards { flex-direction: column; } } /* 移动 */\n```\n\n' +
            '## 移动优先 vs 桌面优先对比表\n\n' +
            '| 维度 | 移动优先 | 桌面优先 |\n' +
            '| --- | --- | --- |\n' +
            '| 媒体查询方向 | min-width（递增） | max-width（递减） |\n' +
            '| 基础样式 | 移动端 | 桌面端 |\n' +
            '| 理念 | 渐进增强 | 优雅降级 |\n' +
            '| 移动端 CSS 量 | 最少（性能优） | 全部加载（再覆盖） |\n' +
            '| 思维方式 | 从简到繁 | 从繁到简 |\n' +
            '| 现代推荐度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |\n\n' +
            '## 移动优先实践要点表\n\n' +
            '| 要点 | 说明 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| 默认单列 | 移动端窄屏，单列最稳 | flex-direction: column |\n' +
            '| 大字号 | 移动端阅读距离近 | body { font-size: 16px } |\n' +
            '| 大触摸区 | 手指点击需 44px+ | button { padding: 12px } |\n' +
            '| 简化布局 | 隐藏次要内容 | .sidebar { display: none } |\n' +
            '| 渐进加列 | 宽屏逐步加列 | min-width: 768px → 两列 |\n' +
            '| 流体单位 | 用 %/rem/vw 替代 px | width: 100% |\n\n' +
            '## 代码示例\n\n' +
            '示例一：移动优先的卡片布局\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  /* 默认移动端：单列 */\n  .cards { display: flex; flex-direction: column; gap: 10px; padding: 10px; }\n  .card { background: #f5f5f5; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }\n  /* 平板（≥600px）：两列 */\n  @media (min-width: 600px) {\n    .cards { flex-direction: row; flex-wrap: wrap; }\n    .card { flex: 1 1 45%; }  /* 两列，留间隙 */\n  }\n  /* 桌面（≥1024px）：三列 */\n  @media (min-width: 1024px) {\n    .card { flex: 1 1 30%; }  /* 三列 */\n  }\n</style>\n</head>\n<body>\n  <div class="cards">\n    <div class="card">卡片 1</div>\n    <div class="card">卡片 2</div>\n    <div class="card">卡片 3</div>\n    <div class="card">卡片 4</div>\n  </div>\n  <p>缩放窗口：窄屏单列 → 中屏两列 → 宽屏三列</p>\n</body>\n</html>\n```\n\n' +
            '示例二：移动优先的响应式字号\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 默认移动端：基础字号 */\n  body { font-size: 16px; line-height: 1.6; }\n  h1 { font-size: 1.5rem; }   /* 移动端标题 */\n  h2 { font-size: 1.25rem; }\n  /* 平板：放大 */\n  @media (min-width: 768px) {\n    body { font-size: 17px; }\n    h1 { font-size: 2rem; }\n    h2 { font-size: 1.5rem; }\n  }\n  /* 桌面：更大 */\n  @media (min-width: 1200px) {\n    body { font-size: 18px; }\n    h1 { font-size: 2.5rem; }\n  }\n  /* 现代做法：用 clamp 一行搞定（替代多断点） */\n  .modern-h1 { font-size: clamp(1.5rem, 4vw, 2.5rem); }\n</style>\n</head>\n<body>\n  <h1>传统响应式标题</h1>\n  <h1 class="modern-h1">clamp 一行搞定</h1>\n  <p>缩放窗口看字号变化</p>\n</body>\n</html>\n```\n\n' +
            '示例三：移动优先的导航（汉堡 → 横排）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  /* 默认移动端：纵向菜单（可用 JS 控制显隐） */\n  .nav { display: flex; flex-direction: column; gap: 8px; background: #2c3e50; padding: 10px; }\n  .nav a { color: white; text-decoration: none; padding: 8px; }\n  .menu-btn { display: block; }  /* 移动端显示汉堡按钮 */\n  /* 桌面（≥768px）：横向菜单 */\n  @media (min-width: 768px) {\n    .nav { flex-direction: row; justify-content: flex-end; gap: 20px; }\n    .menu-btn { display: none; }  /* 桌面隐藏汉堡 */\n  }\n</style>\n</head>\n<body>\n  <button class="menu-btn">☰ 菜单</button>\n  <nav class="nav">\n    <a href="#">首页</a>\n    <a href="#">产品</a>\n    <a href="#">关于</a>\n  </nav>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **min-width 而非 max-width**：移动优先用 `min-width`（从小到大递增），大屏样式叠加在小屏基础之上。如果误用 max-width，会导致样式覆盖混乱。\n2. **基础样式要精简**：移动端默认样式应最简单（单列、大字号、大触摸区），避免把桌面复杂布局塞进默认样式再覆盖。\n3. **触摸目标 ≥44px**：移动端手指点击，按钮/链接的触摸区至少 44×44px（Apple HIG 建议）。移动优先默认就应保证这一点。\n4. **避免固定像素**：移动优先应用流体单位（%、rem、vw、clamp），而非固定 px。固定宽度在小屏会溢出。\n5. **性能优势**：移动端只加载基础 CSS（无需解析大屏媒体查询），首屏更快。桌面优先则移动端要加载全部 CSS 再覆盖，浪费带宽。\n6. **内容优先**：移动屏小，强迫取舍——先想「移动端用户最需要什么」，再为大屏添加次要内容。这是移动优先的设计哲学优势。\n\n' +
            '## 实际应用\n\n' +
            '- **卡片网格**：默认单列，`min-width` 递增到两列、三列——电商商品列表标配。\n' +
            '- **导航栏**：移动端汉堡菜单/纵向堆叠，桌面横排——用 min-width 切换。\n' +
            '- **侧边栏**：移动端隐藏（单列聚焦内容），桌面显示——`min-width: 1024px { .sidebar { display: block } }`。\n' +
            '- **字号系统**：移动端 16px 基础，大屏逐步放大；或用 `clamp(1rem, 4vw, 2rem)` 一行替代多断点。\n' +
            '- **图片画廊**：移动端单列大图，桌面多列小图，渐进增强展示更多内容。\n\n' +
            '## 扩展知识\n\n' +
            'clamp() 是移动优先的现代替代——`clamp(min, preferred, max)` 让值在范围内流畅变化，无需媒体查询断点。' +
            '如 `font-size: clamp(1rem, 2vw + 1rem, 2rem)` 让字号在 1-2rem 间随视口流畅变化。' +
            '内在响应式设计（Intrinsic Responsive Design）是移动优先的进化——用 auto-fit、minmax、clamp 等让布局「自然适应」，而非手动设断点。' +
            '如 `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` 一行实现卡片自适应列数，无需任何媒体查询。' +
            '移动优先的思维也影响 HTML 结构：先写核心内容（移动端优先展示），次要内容放后面（桌面端用 grid-area 重新排列）。这种「内容优先的 HTML」对 SEO 和无障碍都有益。',
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
            '## 概念详解\n\n' +
            'viewport（视口）是浏览器中用于显示网页的可视区域。理解视口是响应式设计的基础——所有视口单位（vw/vh）和媒体查询的断点都基于视口尺寸。' +
            '在移动端，视口概念更为复杂，涉及「布局视口」「视觉视口」「理想视口」三个层级。\n\n' +
            'viewport meta 标签 `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 是响应式的起点。' +
            '没有它，手机浏览器会以默认 980px 宽度渲染页面并缩放显示，导致媒体查询失效、文字太小。' +
            '设置 `width=device-width` 让布局视口等于设备实际宽度，`initial-scale=1.0` 设置初始缩放为 1。\n\n' +
            '视口单位（Viewport Units）是相对于视口尺寸的单位：vw（视口宽度的 1%）、vh（视口高度的 1%）、vmin（vw 和 vh 中较小者）、vmax（较大者）。' +
            '它们让元素尺寸「跟随屏幕」变化，是全屏布局、响应式字号的核心工具。\n\n' +
            '移动端 100vh 的坑：手机浏览器地址栏会伸缩，导致 100vh 实际高度变化，页面会「跳动」。' +
            'CSS 引入了 dvh（动态视口高）、svh（小视口高，地址栏展开时）、lvh（大视口高，地址栏收起时）解决此问题——现代项目推荐用 100dvh 替代 100vh。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<!-- viewport meta（必须在 head 中） -->\n<meta name="viewport"\n      content="width=device-width, initial-scale=1.0, maximum-scale=5.0">\n<!-- width=device-width: 布局视口=设备宽度 -->\n<!-- initial-scale=1.0: 初始缩放 1 -->\n<!-- maximum-scale=5.0: 最大缩放 5 倍（无障碍，勿设 1） -->\n```\n\n' +
            '```css\n/* 视口单位 */\n.full-screen { height: 100vh; }      /* 视口全高（有地址栏跳动问题） */\n.full-screen-dvh { height: 100dvh; }  /* 动态视口高（推荐） */\n.width-50vw { width: 50vw; }          /* 视口宽度的一半 */\n\n/* vmin/vmax */\n.square {\n  width: 50vmin;   /* vw/vh 较小者的 50%，横竖屏都是正方形 */\n  height: 50vmin;\n}\n\n/* 响应式字号（配合 clamp 限制范围） */\nh1 { font-size: clamp(1.5rem, 5vw, 3rem); }\n\n/* calc 混合计算 */\n.below-nav { height: calc(100dvh - 60px); }  /* 全屏减导航高 */\n```\n\n' +
            '## 视口单位对照表\n\n' +
            '| 单位 | 含义 | 相对于 | 典型用途 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| vw | 视口宽度的 1% | 视口宽 | 响应式宽度 |\n' +
            '| vh | 视口高度的 1% | 视口高 | 全屏高度 |\n' +
            '| vmin | vw 和 vh 中较小者 | 较短边 | 横竖屏一致尺寸 |\n' +
            '| vmax | vw 和 vh 中较大者 | 较长边 | 大屏强调 |\n' +
            '| dvh | 动态视口高（随地址栏变化） | 当前视口高 | 移动全屏（推荐） |\n' +
            '| svh | 小视口高（地址栏展开） | 最小视口高 | 稳定布局 |\n' +
            '| lvh | 大视口高（地址栏收起） | 最大视口高 | 全屏场景 |\n' +
            '| % | 父元素尺寸的百分比 | 父元素 | 相对父布局 |\n\n' +
            '## viewport meta 属性表\n\n' +
            '| 属性 | 作用 | 推荐值 |\n' +
            '| --- | --- | --- |\n' +
            '| width | 布局视口宽度 | device-width |\n' +
            '| initial-scale | 初始缩放 | 1.0 |\n' +
            '| maximum-scale | 最大缩放（无障碍） | 5.0（勿设 1） |\n' +
            '| minimum-scale | 最小缩放 | 0.1 |\n' +
            '| user-scalable | 是否允许缩放 | yes（勿设 no） |\n' +
            '| viewport-fit | 异形屏适配 | cover（含刘海区） |\n\n' +
            '## 代码示例\n\n' +
            '示例一：全屏 Hero 区（dvh 替代 vh）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .hero {\n    height: 100dvh;  /* 动态视口高，移动端不跳动 */\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 20px;\n  }\n  .hero h1 { font-size: clamp(2rem, 6vw, 4rem); margin: 0; }\n  .hero p { font-size: clamp(1rem, 2.5vw, 1.5rem); }\n</style>\n</head>\n<body>\n  <section class="hero">\n    <h1>全屏 Hero</h1>\n    <p>100dvh 撑满视口，移动端地址栏伸缩不跳动</p>\n  </section>\n  <p style="padding:20px;">下方内容</p>\n</body>\n</html>\n```\n\n' +
            '示例二：vmin 实现横竖屏一致的尺寸\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  /* vmin 让元素横竖屏尺寸一致 */\n  .square {\n    width: 50vmin;   /* 始终是较短边的一半 */\n    height: 50vmin;\n    background: coral;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    margin: 20px auto;\n  }\n  /* vmax 用于强调大屏 */\n  .large-text { font-size: 5vmax; text-align: center; }\n</style>\n</head>\n<body>\n  <div class="square">50vmin 正方形</div>\n  <div class="large-text">5vmax 文字</div>\n  <p>旋转设备（或缩放窗口），正方形尺寸基于较短边保持一致</p>\n</body>\n</html>\n```\n\n' +
            '示例三：calc 混合视口与固定单位\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .navbar { height: 60px; background: #2c3e50; color: white; }\n  /* 内容区：全屏高减去导航高度 */\n  .content {\n    height: calc(100dvh - 60px);\n    background: #ecf0f1;\n    padding: 20px;\n    overflow: auto;\n  }\n  /* 侧边栏：视口宽的 20%，最小 200px */\n  .sidebar {\n    width: max(200px, 20vw);\n    background: #bdc3c7;\n    padding: 10px;\n  }\n</style>\n</head>\n<body>\n  <div class="navbar">导航栏 60px</div>\n  <div class="content">内容区：calc(100dvh - 60px) 填满剩余高度</div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **viewport meta 必不可少**：没有它，手机以 980px 宽渲染，vw 单位和媒体查询全失效。所有 HTML 文档 head 中必须有此 meta。\n2. **100vh 移动端跳动**：手机地址栏伸缩导致 100vh 实际高度变化，页面跳动。现代方案用 `100dvh`（动态视口高），兼容性已较好。\n3. **vw 字号极端值问题**：纯 vw 字号在超小屏（如 320px）会太小，超大屏（如 4K）会太大。务必配合 `clamp(min, preferred, max)` 限制范围。\n4. **勿禁用缩放**：`user-scalable=no` 或 `maximum-scale=1.0` 会禁用缩放，违反无障碍指南（WCAG）。视力障碍用户需要缩放页面。\n5. **% vs vw/vh**：% 相对父元素，vw/vh 相对视口。嵌套布局用 %，全屏布局用 vw/vh。混用时注意参照物不同。\n6. **水平滚动条陷阱**：`width: 100vw` 在有垂直滚动条时会比可视区宽（滚动条占空间），导致水平滚动条。用 `width: 100%` 更安全。\n\n' +
            '## 实际应用\n\n' +
            '- **全屏 Hero/Banner**：`height: 100dvh` 让首屏撑满视口，产品首页常见。\n' +
            '- **响应式字号**：`font-size: clamp(1rem, 4vw, 3rem)` 让标题随屏宽流畅变化，无需媒体查询。\n' +
            '- **固定导航 + 剩余高度**：`height: calc(100dvh - 60px)` 让内容区填满导航下方的剩余空间。\n' +
            '- **横竖屏一致**：用 vmin 让元素在横屏和竖屏保持相同视觉尺寸（如加载动画）。\n' +
            '- **侧边栏宽度**：`width: max(200px, 20vw)` 让侧边栏至少 200px，大屏按 20vw 增长。\n\n' +
            '## 扩展知识\n\n' +
            'CSS 视口单位家族在 2022 年扩展：除了传统的 vh/vw，新增了 lvh/lvw（Large）、svh/svw（Small）、dvh/dvw（Dynamic）三组。' +
            'dvh 会随地址栏伸缩动态变化（最贴近用户可见区域），svh 是地址栏展开时的最小高度（稳定），lvh 是地址栏收起时的最大高度。' +
            '移动端全屏场景推荐用 dvh，需要稳定布局用 svh。' +
            '`viewport-fit=cover` 配合 `env(safe-area-inset-*)` 可适配 iPhone 刘海屏/异形屏，让内容不被刘海遮挡。' +
            '`aspect-ratio` 属性可与视口单位配合实现固定宽高比的响应式元素（如视频容器），替代传统 padding-top hack。',
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
            '## 概念详解\n\n' +
            '断点（Breakpoint）是响应式设计中媒体查询切换样式的「宽度阈值」。当视口宽度跨过某个断点时，布局或样式发生显著变化（如从单列变两列、导航从横排变汉堡菜单）。' +
            '断点设计的好坏直接影响响应式网站的维护成本和用户体验。\n\n' +
            '断点设计的核心争议：「基于设备」还是「基于内容」？早期（2010-2015）流行按设备型号设断点（iPhone 375px、iPad 768px 等），但设备种类爆炸后这种思路失效——你不可能为每个设备设断点。' +
            '现代最佳实践是「内容驱动」：先设计移动版，逐步拉宽浏览器窗口，在内容「开始不舒服」的宽度加断点调整。这种思路让布局在任何设备上都自然，而非绑定特定设备。\n\n' +
            '主流框架（Tailwind、Bootstrap）提供了标准化断点参考：sm 640px、md 768px、lg 1024px、xl 1280px、2xl 1536px。' +
            '这些断点经过大量实践验证，可作为起点，但具体项目应根据内容调整。\n\n' +
            '断点数量不宜过多——3-5 个为宜。过多断点意味着维护成本高、体验割裂（用户缩放窗口时布局频繁变化）。' +
            '能用流式单位（%、vw、clamp）或内在响应式（auto-fit、minmax）解决的就不要加断点。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 移动优先断点写法（min-width 递增） */\n/* 基础样式（移动，<640px） */\n.layout { grid-template-columns: 1fr; }\n\n/* sm 断点（≥640px） */\n@media (min-width: 640px) {\n  .layout { grid-template-columns: 1fr 1fr; }\n}\n\n/* md 断点（≥768px） */\n@media (min-width: 768px) {\n  .layout { grid-template-columns: repeat(3, 1fr); }\n}\n\n/* lg 断点（≥1024px） */\n@media (min-width: 1024px) {\n  .layout { grid-template-columns: repeat(4, 1fr); }\n}\n\n/* xl 断点（≥1280px） */\n@media (min-width: 1280px) {\n  .layout { max-width: 1200px; margin: 0 auto; }  /* 大屏限制最大宽 */\n}\n```\n\n' +
            '## 主流框架断点参考表\n\n' +
            '| 断点名 | 宽度 | 对应设备 | Tailwind | Bootstrap |\n' +
            '| --- | --- | --- | --- | --- |\n' +
            '| xs | <640px | 手机（竖屏） | 默认 | 默认 |\n' +
            '| sm | ≥640px | 手机（横屏）/小平板 | sm | sm |\n' +
            '| md | ≥768px | 平板（竖屏） | md | md |\n' +
            '| lg | ≥1024px | 平板（横屏）/小桌面 | lg | lg |\n' +
            '| xl | ≥1280px | 桌面 | xl | xl |\n' +
            '| 2xl | ≥1536px | 大桌面 | 2xl | xxl |\n\n' +
            '## 断点设计原则表\n\n' +
            '| 原则 | 说明 | 理由 |\n' +
            '| --- | --- | --- |\n' +
            '| 内容驱动 | 根据内容变形点设断点 | 设备太多无法枚举 |\n' +
            '| 移动优先 | min-width 递增 | 移动端 CSS 最少，性能优 |\n' +
            '| 3-5 个为宜 | 断点不宜过多 | 过多维护成本高、体验割裂 |\n' +
            '| 避免相邻断点 | 间距至少 200px | 太近等于没断 |\n' +
            '| 优先内在响应式 | 用 auto-fit/clamp 替代 | 减少断点依赖 |\n' +
            '| 大屏限宽 | xl 设 max-width | 4K 屏内容不宜无限拉伸 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：标准四断点响应式网格\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  .grid { display: grid; gap: 10px; padding: 10px; }\n  .box { background: #3498db; color: white; padding: 20px; text-align: center; }\n  /* 默认（xs，<640px）：单列 */\n  .grid { grid-template-columns: 1fr; }\n  /* sm（≥640px）：两列 */\n  @media (min-width: 640px) {\n    .grid { grid-template-columns: repeat(2, 1fr); }\n  }\n  /* md（≥768px）：三列 */\n  @media (min-width: 768px) {\n    .grid { grid-template-columns: repeat(3, 1fr); }\n  }\n  /* lg（≥1024px）：四列 */\n  @media (min-width: 1024px) {\n    .grid { grid-template-columns: repeat(4, 1fr); }\n  }\n  /* xl（≥1280px）：限制最大宽并居中 */\n  @media (min-width: 1280px) {\n    .grid { max-width: 1200px; margin: 0 auto; }\n  }\n</style>\n</head>\n<body>\n  <div class="grid">\n    <div class="box">1</div><div class="box">2</div><div class="box">3</div><div class="box">4</div>\n    <div class="box">5</div><div class="box">6</div><div class="box">7</div><div class="box">8</div>\n  </div>\n  <p>缩放窗口：1→2→3→4 列</p>\n</body>\n</html>\n```\n\n' +
            '示例二：导航栏断点切换（汉堡 → 横排）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  /* 默认移动端：汉堡菜单（简化版，实际需 JS 控制显隐） */\n  .nav { display: none; flex-direction: column; background: #2c3e50; padding: 10px; }\n  .nav.open { display: flex; }\n  .nav a { color: white; padding: 8px; text-decoration: none; }\n  .menu-btn { display: block; padding: 10px; background: #2c3e50; color: white; border: none; }\n  /* md 断点（≥768px）：横排，隐藏汉堡 */\n  @media (min-width: 768px) {\n    .menu-btn { display: none; }       /* 隐藏汉堡 */\n    .nav { display: flex; flex-direction: row; gap: 20px; justify-content: flex-end; }\n    .nav.open { display: flex; }       /* 桌面始终显示 */\n  }\n</style>\n</head>\n<body>\n  <button class="menu-btn" onclick="document.querySelector(\'.nav\').classList.toggle(\'open\')">☰ 菜单</button>\n  <nav class="nav">\n    <a href="#">首页</a><a href="#">产品</a><a href="#">关于</a>\n  </nav>\n</body>\n</html>\n```\n\n' +
            '示例三：内在响应式（无断点实现自适应）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  /* 无需任何媒体查询，列数自动变化 */\n  .cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 15px;\n    padding: 15px;\n  }\n  .card { background: #f5f5f5; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }\n  /* 字号用 clamp 流体变化，无需断点 */\n  h1 { font-size: clamp(1.5rem, 5vw, 3rem); text-align: center; }\n</style>\n</head>\n<body>\n  <h1>内在响应式（无断点）</h1>\n  <div class="cards">\n    <div class="card">1</div><div class="card">2</div><div class="card">3</div>\n    <div class="card">4</div><div class="card">5</div><div class="card">6</div>\n  </div>\n  <p>缩放窗口，列数自动变化，无需媒体查询</p>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **内容驱动而非设备驱动**：不要为「iPhone 14 Pro Max」设断点。应根据内容在什么宽度「变形」来设断点。先设计移动版，拉宽窗口找「不舒服点」。\n2. **移动优先用 min-width**：基础样式给移动端，用 `min-width` 递增大屏增强。避免 `max-width` 递减（桌面优先），后者移动端要加载全部 CSS 再覆盖。\n3. **断点不宜过多**：3-5 个为宜。每多一个断点，维护成本翻倍。能用 auto-fit/clamp 替代的就不要加断点。\n4. **断点间距至少 200px**：相邻断点太近（如 640px 和 700px）等于没断，用户缩放时布局频繁跳动，体验差。\n5. **大屏限宽**：4K/超宽屏上，内容无限拉伸会难以阅读（一行太长）。在 xl 断点设 `max-width: 1200-1400px; margin: 0 auto` 居中。\n6. **优先内在响应式**：`repeat(auto-fit, minmax(250px, 1fr))` 和 `clamp(min, preferred, max)` 能在不加断点的情况下实现自适应，是现代首选。\n\n' +
            '## 实际应用\n\n' +
            '- **卡片网格**：用 auto-fit + minmax 实现无断点自适应列数，比手动设断点更优雅。\n' +
            '- **导航栏切换**：768px 断点切换汉堡菜单/横排菜单，是最常见的结构性断点。\n' +
            '- **侧边栏显隐**：1024px 断点决定侧边栏显示与否，移动端隐藏聚焦内容。\n' +
            '- **字号系统**：用 `clamp(1rem, 4vw, 2rem)` 替代多断点字号切换，一行搞定。\n' +
            '- **大屏限宽**：1280px 断点设 `max-width` 居中，防止 4K 屏内容过宽。\n\n' +
            '## 扩展知识\n\n' +
            '容器查询（Container Queries）正在改变断点设计的思路——基于「组件容器宽度」而非「视口宽度」设断点，让组件真正自适应其容器。' +
            '如一个卡片组件在侧边栏（窄）显示纵向布局，在主区（宽）显示横向布局，无论视口多大。' +
            'Tailwind 的断点系统（sm/md/lg/xl/2xl）已成为事实标准，其断点值（640/768/1024/1280/1536）被广泛复用。' +
            '现代 CSS 趋势是减少断点、增加内在响应式——用 auto-fit、minmax、clamp、flex-wrap 等让布局「自然呼吸」，只在结构性变化时才用媒体查询。' +
            '调试响应式时，用浏览器 DevTools 的「设备工具栏」切换常见设备宽度，或拖拽窗口边缘观察布局变化点，确定断点位置。',
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
            '## 概念详解\n\n' +
            '`transition` 是 CSS 中实现「状态切换平滑过渡」的属性。当元素的某个 CSS 属性发生变化时（如 :hover 触发颜色变化），' +
            'transition 让这个变化不是瞬间跳变，而是在指定时长内平滑过渡。这极大提升了用户体验——动画让界面变化更自然、更有「生命力」。\n\n' +
            'transition 的本质是「补间动画」：浏览器自动计算属性从旧值到新值的中间状态，在时长内逐帧渲染。' +
            '开发者只需定义「起点」「终点」和「时长/缓动」，浏览器自动完成中间帧——这比 JS 手动逐帧动画高效得多（GPU 加速）。\n\n' +
            'transition 与 animation 的区别：transition 需要「触发条件」（如 :hover、class 变化），只有两个状态（起点→终点）；' +
            'animation 用 @keyframes 定义多关键帧，可自动播放、循环、暂停，更灵活但更复杂。简单状态切换用 transition，复杂动画用 animation。\n\n' +
            '重要限制：不是所有属性都能过渡。能过渡的是「数值型」或「颜色型」属性（如 width、opacity、color、transform）；' +
            '不能过渡的是「离散型」属性（如 display: none→block、position: static→absolute）。display 切换需用 opacity+visibility 模拟。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 完整语法 */\ntransition: <property> <duration> <timing-function> <delay>;\n\n/* 简写示例 */\ntransition: color 0.3s ease;              /* 单属性过渡 */\ntransition: all 0.3s ease;                /* 所有可过渡属性 */\ntransition: color 0.3s, transform 0.5s;   /* 多属性分别过渡 */\ntransition: background 0.3s ease 0.1s;    /* 延迟 0.1s 开始 */\n\n/* 分写属性 */\ntransition-property: color, transform;     /* 过渡的属性 */\ntransition-duration: 0.3s, 0.5s;           /* 时长（对应 property） */\ntransition-timing-function: ease, ease-in; /* 缓动函数 */\ntransition-delay: 0s, 0.1s;                /* 延迟 */\n\n/* 常用缓动函数 */\ntransition-timing-function:\n  ease | linear | ease-in | ease-out | ease-in-out |\n  cubic-bezier(0.4, 0, 0.2, 1) |           /* 自定义贝塞尔曲线 */\n  steps(4, end);                            /* 分步动画 */\n```\n\n' +
            '## transition 属性表\n\n' +
            '| 子属性 | 作用 | 默认值 | 示例 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| transition-property | 过渡的属性 | all | color, transform |\n' +
            '| transition-duration | 过渡时长 | 0s | 0.3s |\n' +
            '| transition-timing-function | 缓动函数 | ease | ease-out |\n' +
            '| transition-delay | 延迟开始 | 0s | 0.1s |\n\n' +
            '## 缓动函数对照表\n\n' +
            '| 函数 | 效果 | 适用场景 |\n' +
            '| --- | --- | --- |\n' +
            '| ease | 慢-快-慢（默认） | 通用 |\n' +
            '| linear | 匀速 | 进度条、加载 |\n' +
            '| ease-in | 慢→快 | 元素退出 |\n' +
            '| ease-out | 快→慢 | 元素进入 |\n' +
            '| ease-in-out | 慢-快-慢 | 对称动画 |\n' +
            '| cubic-bezier | 自定义曲线 | 精细控制 |\n' +
            '| steps(n) | 分 n 步跳变 | 数字滚动、打字机 |\n\n' +
            '## 可过渡属性示例表\n\n' +
            '| 属性 | 可过渡 | 说明 |\n' +
            '| --- | --- | --- |\n' +
            '| color, background | ✅ | 颜色平滑变化 |\n' +
            '| width, height, margin, padding | ✅ | 尺寸变化 |\n' +
            '| opacity | ✅ | 透明度（GPU 加速） |\n' +
            '| transform | ✅ | 变形（GPU 加速，推荐） |\n' +
            '| box-shadow | ✅ | 阴影变化 |\n' +
            '| display | ❌ | 离散值，无法过渡 |\n' +
            '| position | ❌ | 离散值 |\n' +
            '| font-family | ❌ | 离散值 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：按钮 hover 过渡（基础）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .btn {\n    background: #3498db;\n    color: white;\n    padding: 12px 24px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    /* 多属性分别过渡：颜色快、位移稍慢 */\n    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;\n  }\n  .btn:hover {\n    background: #2980b9;\n    transform: translateY(-2px);     /* 上浮 2px */\n    box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n  }\n  .btn:active {\n    transform: translateY(0);        /* 点击回弹 */\n    box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n  }\n</style>\n</head>\n<body>\n  <button class="btn">悬停看过渡</button>\n</body>\n</html>\n```\n\n' +
            '示例二：卡片悬浮效果（all + 多属性）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .card {\n    background: white;\n    padding: 20px;\n    margin: 20px;\n    border-radius: 8px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    /* all 过渡所有可过渡属性 */\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .card:hover {\n    box-shadow: 0 10px 25px rgba(0,0,0,0.2);\n    transform: translateY(-8px);    /* 上浮 */\n  }\n</style>\n</head>\n<body>\n  <div class="card">悬停看阴影加深 + 上浮效果（产品卡片常用）</div>\n</body>\n</html>\n```\n\n' +
            '示例三：display 切换的过渡模拟（opacity + visibility）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .menu {\n    opacity: 0;          /* 透明 */\n    visibility: hidden;  /* 不可见（不占交互） */\n    transition: opacity 0.3s ease, visibility 0.3s ease;\n    background: #333;\n    color: white;\n    padding: 10px;\n    position: absolute;\n  }\n  .menu.show {\n    opacity: 1;          /* 不透明 */\n    visibility: visible; /* 可见 */\n  }\n</style>\n</head>\n<body>\n  <button onclick="document.querySelector(\'.menu\').classList.toggle(\'show\')">切换菜单</button>\n  <div class="menu">下拉菜单（淡入淡出）</div>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **不是所有属性都能过渡**：display、position、font-family 等离散值属性无法过渡。显示/隐藏用 opacity+visibility 模拟，或用 transform 替代布局变化。\n2. **优先过渡 transform 和 opacity**：这两个属性由 GPU 加速，性能最好。避免过渡 width/height/margin/left（触发重排，性能差）。\n3. **transition 需要触发条件**：transition 本身不启动动画，需要 :hover、:focus、class 变化等触发。无条件自动播放用 animation。\n4. **all 的性能陷阱**：`transition: all` 会过渡所有属性，可能导致意外过渡（如 font-family 变化时）。建议明确指定属性。\n5. **时长不宜过长**：0.2-0.4s 是交互过渡的黄金区间。超过 0.5s 用户会感觉「迟钝」，低于 0.1s 又感觉不到过渡。\n6. **尊重 prefers-reduced-motion**：部分用户对动画敏感，用 `@media (prefers-reduced-motion: reduce) { * { transition: none } }` 禁用动画。\n\n' +
            '## 实际应用\n\n' +
            '- **按钮交互**：hover 时颜色变化 + 上浮 + 阴影加深，0.3s transition 让交互流畅自然。\n' +
            '- **下拉菜单**：opacity + visibility + transition 实现淡入淡出，比 display 切换更优雅。\n' +
            '- **卡片悬浮**：transform: translateY + box-shadow + transition 实现卡片悬浮效果，电商产品卡标配。\n' +
            '- **侧边栏滑入**：transform: translateX + transition 实现侧边栏从左滑入，移动端导航常用。\n' +
            '- **主题切换**：颜色属性 transition 让深色/浅色模式切换平滑过渡，而非瞬间闪变。\n\n' +
            '## 扩展知识\n\n' +
            '`cubic-bezier(x1, y1, x2, y2)` 允许自定义缓动曲线，四个参数定义两个控制点。' +
            '常用值：`cubic-bezier(0.4, 0, 0.2, 1)` 是 Material Design 标准缓动，`cubic-bezier(0.68, -0.55, 0.27, 1.55)` 实现回弹效果。' +
            '可在 cubic-bezier.com 可视化调试。' +
            '`steps(n, start|end)` 实现分步动画——`steps(8)` 让进度条分 8 步跳变，适合数字滚动、打字机效果。' +
            '性能优化的关键：只过渡 transform 和 opacity（GPU 加速，合成层），避免过渡 width/height/top/left（触发重排）。' +
            'transition 适合「状态 A↔B」的切换；需要多关键帧、循环、暂停等复杂控制时用 animation + @keyframes。',
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
            '## 概念详解\n\n' +
            '`transform` 是 CSS 中对元素进行「几何变换」的属性，包括平移（translate）、旋转（rotate）、缩放（scale）、倾斜（skew）以及矩阵变换（matrix）。' +
            '它是 CSS 动画高性能的基础——transform 由 GPU 加速，不触发重排（reflow），只触发重绘（repaint）的合成阶段，性能远优于改 width/top/left 等触发重排的属性。\n\n' +
            'transform 的核心特性是「不影响文档流」：元素变换后，周围元素不会移动（不像 margin/position 会推开邻居）。' +
            '这意味着你可以自由地旋转、缩放、平移元素，而不用担心破坏布局。视觉上元素「变了」，但布局上它还在原位。\n\n' +
            'transform 的变换基于「变换原点」（transform-origin），默认是元素中心（50% 50%）。改变原点会改变旋转/缩放的中心位置——' +
            '如 `transform-origin: top left` 让旋转以左上角为轴。\n\n' +
            'transform 支持组合多个变换：`transform: rotate(45deg) scale(1.2) translateX(10px)`，按从右到左顺序应用。' +
            '注意顺序影响结果——先旋转再平移，和平移再旋转，效果不同。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 2D 变换 */\ntransform: translate(50px, 100px);     /* 平移：x, y */\ntransform: translateX(50px);            /* 仅 x 方向 */\ntransform: translateY(100px);           /* 仅 y 方向 */\ntransform: rotate(45deg);               /* 旋转：顺时针正角度 */\ntransform: scale(1.5);                  /* 缩放：1.5 倍 */\ntransform: scaleX(2);                   /* 仅水平缩放 */\ntransform: skew(15deg, 5deg);           /* 倾斜：x, y 角度 */\ntransform: matrix(1, 0, 0, 1, 50, 0);  /* 矩阵：a,b,c,d,e,f */\n\n/* 3D 变换 */\ntransform: rotateX(45deg);              /* 绕 X 轴旋转 */\ntransform: rotateY(45deg);              /* 绕 Y 轴旋转 */\ntransform: rotateZ(45deg);              /* 等同 rotate */\ntransform: perspective(500px);          /* 透视距离 */\ntransform: translate3d(10px, 20px, 30px); /* 3D 平移 */\n\n/* 组合变换 */\ntransform: rotate(45deg) scale(1.2);    /* 多变换组合 */\n\n/* 变换原点 */\ntransform-origin: 50% 50%;              /* 默认：中心 */\ntransform-origin: top left;             /* 左上角 */\ntransform-origin: 0 0;                  /* 同上 */\ntransform-origin: center bottom;        /* 底部中心 */\n\n/* 3D 透视（父元素设置） */\nperspective: 800px;                     /* 观察距离，越小越夸张 */\ntransform-style: preserve-3d;           /* 子元素保持 3D 空间 */\nbackface-visibility: hidden;            /* 背面不可见（翻转卡片用） */\n```\n\n' +
            '## 2D 变换函数表\n\n' +
            '| 函数 | 作用 | 参数 | 示例 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| translate(x, y) | 平移 | 长度/百分比 | translate(50px, 10px) |\n' +
            '| translateX(x) | 水平平移 | 长度 | translateX(50px) |\n' +
            '| translateY(y) | 垂直平移 | 长度 | translateY(-10px) |\n' +
            '| rotate(deg) | 旋转 | 角度 | rotate(45deg) |\n' +
            '| scale(n) | 缩放 | 数字 | scale(1.5) |\n' +
            '| scaleX(n) | 水平缩放 | 数字 | scaleX(2) |\n' +
            '| scaleY(n) | 垂直缩放 | 数字 | scaleY(0.5) |\n' +
            '| skew(x, y) | 倾斜 | 角度 | skew(15deg, 5deg) |\n' +
            '| matrix(a,b,c,d,e,f) | 矩阵变换 | 6 值 | matrix(1,0,0,1,50,0) |\n\n' +
            '## 3D 变换相关属性表\n\n' +
            '| 属性 | 作用 | 应用元素 | 示例 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| perspective | 透视距离（景深） | 父元素 | perspective: 800px |\n' +
            '| transform-style | 子元素保持 3D | 父元素 | preserve-3d |\n' +
            '| backface-visibility | 背面可见性 | 变换元素 | hidden |\n' +
            '| rotateX(deg) | 绕 X 轴旋转 | 变换元素 | rotateX(45deg) |\n' +
            '| rotateY(deg) | 绕 Y 轴旋转 | 变换元素 | rotateY(180deg) |\n' +
            '| translateZ(z) | Z 轴平移 | 变换元素 | translateZ(50px) |\n\n' +
            '## 代码示例\n\n' +
            '示例一：rotate + scale 组合（hover 放大旋转）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .box {\n    width: 80px;\n    height: 80px;\n    background: coral;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 60px;\n    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  }\n  .box:hover {\n    transform: rotate(45deg) scale(1.5);  /* 旋转 45° 并放大 1.5 倍 */\n  }\n  /* 改变变换原点 */\n  .box.origin-tl { transform-origin: top left; }\n</style>\n</head>\n<body>\n  <div class="box">悬停旋转放大</div>\n  <div class="box origin-tl">原点左上角</div>\n</body>\n</html>\n```\n\n' +
            '示例二：translateY 上浮 + 卡片悬浮\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row { display: flex; gap: 10px; padding: 20px; }\n  .item {\n    width: 80px; height: 80px;\n    background: teal; color: white;\n    display: flex; align-items: center; justify-content: center;\n    border-radius: 8px;\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n  }\n  .item:hover {\n    transform: translateY(-10px);          /* 上浮 10px */\n    box-shadow: 0 8px 15px rgba(0,0,0,0.2); /* 阴影加深 */\n  }\n</style>\n</head>\n<body>\n  <div class="row">\n    <div class="item">A</div>\n    <div class="item">B</div>\n    <div class="item">C</div>\n  </div>\n  <p>悬停看卡片上浮，兄弟元素位置不变（transform 不影响布局）</p>\n</body>\n</html>\n```\n\n' +
            '示例三：3D 翻转卡片（rotateY + perspective）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .card-container {\n    perspective: 800px;        /* 透视距离 */\n    width: 150px; height: 200px;\n    margin: 30px;\n  }\n  .card {\n    width: 100%; height: 100%;\n    position: relative;\n    transform-style: preserve-3d;   /* 子元素保持 3D 空间 */\n    transition: transform 0.6s ease;\n  }\n  .card-container:hover .card {\n    transform: rotateY(180deg);     /* 绕 Y 轴翻转 180° */\n  }\n  .face {\n    position: absolute; inset: 0;\n    backface-visibility: hidden;    /* 背面不可见 */\n    display: flex; align-items: center; justify-content: center;\n    color: white; font-size: 20px; border-radius: 8px;\n  }\n  .front { background: #3498db; }\n  .back { background: #e74c3c; transform: rotateY(180deg); }  /* 背面预先翻转 */\n</style>\n</head>\n<body>\n  <div class="card-container">\n    <div class="card">\n      <div class="face front">正面</div>\n      <div class="face back">背面</div>\n    </div>\n  </div>\n  <p>悬停看 3D 翻转效果</p>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **transform 不触发重排**：transform 由 GPU 加速，只影响合成阶段，性能最优。动画优先用 transform 而非 width/top/left。\n2. **变换顺序影响结果**：`rotate(45deg) translateX(50px)` 和 `translateX(50px) rotate(45deg)` 结果不同——transform 从右到左应用。需注意顺序。\n3. **transform-origin 改变旋转中心**：默认中心旋转，改 `top left` 后以左上角为轴。翻转卡片、风扇效果等都需调整原点。\n4. **scale 不影响布局但影响视觉**：scale(2) 让元素视觉放大 2 倍，但布局尺寸不变，可能覆盖相邻元素。\n5. **3D 变换需 perspective**：rotateX/rotateY 需要父元素设 perspective 才有 3D 透视效果，否则看起来像压缩。perspective 值越小越夸张。\n6. **backface-visibility 翻转卡片**：3D 翻转卡片需 `backface-visibility: hidden` 隐藏背面，否则正反面会互相穿透。\n\n' +
            '## 实际应用\n\n' +
            '- **hover 放大**：`transform: scale(1.1)` + transition，图片/卡片悬停放大效果。\n' +
            '- **卡片上浮**：`transform: translateY(-5px)` + box-shadow，电商产品卡悬停上浮。\n' +
            '- **图标旋转**：`transform: rotate(180deg)`，下拉箭头点击旋转，表示展开/收起。\n' +
            '- **3D 翻转卡片**：rotateY(180deg) + perspective + backface-visibility，正反面翻转效果。\n' +
            '- **入场动画**：translateY(50px) + opacity:0→1，元素从下方淡入，配合 animation 实现。\n' +
            '- **模态框居中**：`position:fixed; top:50%; left:50%; transform:translate(-50%,-50%)` 完美居中。\n\n' +
            '## 扩展知识\n\n' +
            '`will-change: transform` 提示浏览器该元素即将变换，浏览器会提前创建合成层，优化性能。但不要滥用——过多 will-change 会消耗内存。' +
            '`matrix(a, b, c, d, e, f)` 是 transform 的底层表示，所有 2D 变换都可表示为矩阵。理解矩阵能实现复合变换的精确控制。' +
            '3D 变换的 `perspective` 有两种写法：作为父元素属性（`perspective: 800px`，影响所有子元素）或作为 transform 函数（`transform: perspective(800px) rotateY(45deg)`，只影响自身）。' +
            'CSS transform 与 SVG transform 略有不同——SVG 1.1 的 transform 属性写在 attribute 而非 style，且原点默认是 (0,0) 而非元素中心。现代开发推荐用 CSS transform 统一处理。',
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
            '## 概念详解\n\n' +
            '`@keyframes` 和 `animation` 是 CSS 实现复杂动画的核心机制。@keyframes 定义「关键帧序列」——动画过程中各时间点的样式状态；' +
            'animation 属性将关键帧序列应用到元素上，控制时长、缓动、循环、方向等。两者配合，可以实现从简单旋转到复杂弹跳的各类动画。\n\n' +
            '与 transition 的区别：transition 只能实现「状态 A↔B」的双态切换，需要触发条件（如 :hover）；' +
            'animation 用 @keyframes 定义多关键帧（0%、50%、100% 等），可自动播放、循环、暂停、控制方向——灵活性远超 transition，但语法也更复杂。\n\n' +
            '@keyframes 的本质是「时间轴」：你定义动画在各时间点的「快照」，浏览器自动计算中间帧（补间）。' +
            '如 `0% { opacity: 0 } 100% { opacity: 1 }` 定义淡入动画，浏览器自动计算 10%、20%... 的透明度。\n\n' +
            'animation 适合：loading 动画、脉冲呼吸、入场动画、循环旋转、进度条等「自动播放」或「复杂序列」场景。' +
            '简单状态切换（hover 变色）用 transition 即可，无需 animation。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* @keyframes 定义关键帧 */\n@keyframes <name> {\n  from { /* 起始状态（等价 0%） */ }\n  50%  { /* 中间状态 */ }\n  to   { /* 结束状态（等价 100%） */ }\n}\n\n/* 用百分比定义多关键帧 */\n@keyframes bounce {\n  0%   { transform: translateY(0); }\n  50%  { transform: translateY(-30px); }\n  100% { transform: translateY(0); }\n}\n\n/* animation 简写 */\nanimation: <name> <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode> <play-state>;\n\n/* 示例 */\nanimation: spin 2s linear infinite;              /* 旋转 2s 无限循环 */\nanimation: fadeIn 0.5s ease forwards;            /* 淡入后停在终态 */\nanimation: bounce 1s ease-in-out 0.5s 3 alternate; /* 延迟 0.5s，播放 3 次，交替反向 */\n\n/* 分写属性 */\nanimation-name: spin;                  /* 动画名 */\nanimation-duration: 2s;                /* 时长 */\nanimation-timing-function: linear;     /* 缓动 */\nanimation-delay: 0s;                   /* 延迟 */\nanimation-iteration-count: infinite;   /* 次数：数字或 infinite */\nanimation-direction: alternate;        /* 方向：normal/reverse/alternate/alternate-reverse */\nanimation-fill-mode: forwards;         /* 填充模式：none/forwards/backwards/both */\nanimation-play-state: running;         /* 播放状态：running/paused */\n```\n\n' +
            '## animation 子属性表\n\n' +
            '| 子属性 | 作用 | 默认值 | 常用值 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| animation-name | 动画名（@keyframes 名） | none | spin, fadeIn |\n' +
            '| animation-duration | 时长 | 0s | 2s, 500ms |\n' +
            '| animation-timing-function | 缓动函数 | ease | linear, ease-in-out |\n' +
            '| animation-delay | 延迟开始 | 0s | 0.5s |\n' +
            '| animation-iteration-count | 播放次数 | 1 | infinite, 3 |\n' +
            '| animation-direction | 方向 | normal | alternate, reverse |\n' +
            '| animation-fill-mode | 填充模式 | none | forwards, both |\n' +
            '| animation-play-state | 播放状态 | running | paused |\n\n' +
            '## animation-direction 值表\n\n' +
            '| 值 | 行为 | 适用场景 |\n' +
            '| --- | --- | --- |\n' +
            '| normal | 正向播放（默认） | 普通动画 |\n' +
            '| reverse | 反向播放 | 从终态到初态 |\n' +
            '| alternate | 正反交替 | 来回摆动、呼吸 |\n' +
            '| alternate-reverse | 反正交替 | 先反后正 |\n\n' +
            '## animation-fill-mode 值表\n\n' +
            '| 值 | 行为 | 适用场景 |\n' +
            '| --- | --- | --- |\n' +
            '| none | 不填充（默认） | 动画结束回初态 |\n' +
            '| forwards | 停在终态 | 入场动画停住 |\n' +
            '| backwards | 开始前用初态 | 有延迟时提前显示初态 |\n' +
            '| both | 前后都填充 | 完整控制 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：loading 旋转动画\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  @keyframes spin {\n    from { transform: rotate(0deg); }\n    to   { transform: rotate(360deg); }\n  }\n  .loader {\n    width: 40px;\n    height: 40px;\n    border: 4px solid #eee;\n    border-top-color: #3498db;   /* 仅顶部边框蓝色 */\n    border-radius: 50%;\n    animation: spin 1s linear infinite;  /* 1 秒一圈，无限循环 */\n  }\n</style>\n</head>\n<body>\n  <div class="loader"></div>\n  <p>加载中...</p>\n</body>\n</html>\n```\n\n' +
            '示例二：多关键帧脉冲呼吸动画\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  @keyframes pulse {\n    0%   { transform: scale(1); opacity: 1; }      /* 正常大小 */\n    50%  { transform: scale(1.3); opacity: 0.6; }  /* 放大且半透明 */\n    100% { transform: scale(1); opacity: 1; }      /* 恢复 */\n  }\n  .dot {\n    width: 20px; height: 20px;\n    background: #e74c3c;\n    border-radius: 50%;\n    animation: pulse 1.5s ease-in-out infinite;\n  }\n  /* 入场动画：从下方淡入并停在终态 */\n  @keyframes fadeInUp {\n    from { opacity: 0; transform: translateY(30px); }\n    to   { opacity: 1; transform: translateY(0); }\n  }\n  .enter { animation: fadeInUp 0.6s ease forwards; }\n</style>\n</head>\n<body>\n  <div class="dot"></div>\n  <p>脉冲动画（通知红点呼吸）</p>\n  <div class="enter" style="margin-top:20px;background:#3498db;color:white;padding:15px;">入场动画（淡入上移）</div>\n</body>\n</html>\n```\n\n' +
            '示例三：alternate 交替弹跳 + 暂停控制\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  @keyframes bounce {\n    0%, 100% { transform: translateY(0); }      /* 起止在原位 */\n    50%      { transform: translateY(-40px); }  /* 中间上移 40px */\n  }\n  .ball {\n    width: 40px; height: 40px;\n    background: #e74c3c;\n    border-radius: 50%;\n    animation: bounce 1s ease-in-out infinite;\n    /* alternate 可替代 0%/100% 相同的写法，但这里用 infinite 即可 */\n  }\n  .ball:hover {\n    animation-play-state: paused;  /* 悬停暂停 */\n  }\n</style>\n</head>\n<body>\n  <div class="ball"></div>\n  <p>弹跳动画（悬停暂停）</p>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **优先动画 transform/opacity**：这两个属性 GPU 加速，性能最优。避免动画 width/height/top/left（触发重排），尤其在大数量元素时。\n2. **animation vs transition**：简单双态切换用 transition，复杂多关键帧或自动循环用 animation。不要用 animation 做 hover 切换（transition 更合适）。\n3. **fill-mode: forwards 停在终态**：默认动画结束回到初态，入场动画需设 `forwards` 才能停在终态。\n4. **alternate 实现往返**：`animation-direction: alternate` 让动画正反交替，适合来回摆动、呼吸效果，省去手动写反向关键帧。\n5. **多动画逗号分隔**：`animation: fadeIn 0.5s, slideIn 0.5s 0.2s` 可同时应用多个动画，用逗号分隔。\n6. **尊重 prefers-reduced-motion**：用 `@media (prefers-reduced-motion: reduce) { * { animation: none } }` 为敏感用户禁用动画。\n\n' +
            '## 实际应用\n\n' +
            '- **loading 动画**：旋转圆圈、跳动点、进度条——页面加载时给用户视觉反馈，animation infinite 循环。\n' +
            '- **通知红点脉冲**：scale + opacity 的脉冲动画，提醒用户有新消息，alternate 自然呼吸。\n' +
            '- **入场动画**：fadeInUp、slideInLeft 等入场效果，配合 `forwards` 停在终态，提升首次加载体验。\n' +
            '- **进度条**：width 或 transform: scaleX 动画，展示上传/下载进度。\n' +
            '- **轮播图**：translateX 动画实现自动轮播，配合 JS 控制切换。\n\n' +
            '## 扩展知识\n\n' +
            'Web Animations API（WAAPI）是 JS 控制 CSS 动画的接口——`element.animate(keyframes, options)`，语法与 @keyframes 对应，但可用 JS 动态控制、暂停、反转。' +
            'WAAPI 支持Promise（动画结束回调），比监听 animationend 事件更优雅。' +
            '`steps(n, start|end)` 实现分步动画——`steps(8)` 让 360° 旋转分 8 步跳变，适合制作精灵图帧动画。' +
            '动画性能优化的核心：用 transform 和 opacity（合成层，GPU 加速），避免触发 layout/paint 的属性。' +
            '可参考 CSS Triggers 网站查询各属性触发的渲染阶段。' +
            '复杂动画序列可用 animation-delay 错开各元素动画时间，形成「波浪式」入场效果。',
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
            '## 概念详解\n\n' +
            'CSS 3D 变换是 transform 的三维扩展，通过 rotateX/rotateY/rotateZ、translateZ、perspective 等函数，让元素在三维空间中变换。' +
            '这让纯 CSS 实现立体效果（翻转卡片、立方体、3D 轮播）成为可能，无需依赖 WebGL/Three.js。\n\n' +
            '3D 变换的核心是「透视」（perspective）——它定义观察者到 z=0 平面的距离，产生「近大远小」的视觉效果。' +
            '没有 perspective，rotateY 看起来只是水平压缩，没有立体感。perspective 值越小（如 300px），透视越夸张（近大远小明显）；' +
            '值越大（如 2000px），透视越平缓（接近正交投影）。\n\n' +
            '3D 变换的关键属性：\n' +
            '- `perspective`：父元素设置，定义所有子元素的统一透视距离\n' +
            '- `transform: perspective()`：作为 transform 函数，只对当前元素生效\n' +
            '- `transform-style: preserve-3d`：让子元素保持 3D 空间关系（嵌套 3D 结构必需）\n' +
            '- `backface-visibility: hidden`：隐藏元素背面（翻转卡片背面不可见）\n\n' +
            'CSS 3D 适合小范围交互效果（翻转卡片、3D 悬停、立方体菜单）。复杂 3D 场景（大量多边形、光照、纹理）建议用 WebGL/Three.js——CSS 3D 性能有限，移动端尤甚。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 父元素开启 3D 透视 */\n.scene {\n  perspective: 800px;           /* 透视距离（越小越夸张） */\n  perspective-origin: center center;  /* 观察点位置 */\n}\n\n/* 3D 变换函数 */\ntransform: rotateX(45deg);           /* 绕 X 轴旋转（前后翻转） */\ntransform: rotateY(45deg);           /* 绕 Y 轴旋转（左右翻转） */\ntransform: rotateZ(45deg);           /* 绕 Z 轴旋转（等同 2D rotate） */\ntransform: rotate3d(x, y, z, deg);   /* 绕任意轴旋转 */\ntransform: translateZ(50px);         /* Z 轴平移（靠近/远离） */\ntransform: translate3d(x, y, z);     /* 3D 平移 */\ntransform: scaleZ(2);                /* Z 轴缩放 */\ntransform: matrix3d(...);            /* 3D 矩阵（16 值） */\n\n/* 作为 transform 函数的 perspective（只影响自身） */\ntransform: perspective(800px) rotateY(45deg);\n\n/* 3D 空间相关属性 */\ntransform-style: preserve-3d;        /* 子元素保持 3D 空间 */\nbackface-visibility: hidden;         /* 背面不可见 */\nperspective-origin: 50% 50%;         /* 透视原点（观察位置） */\n```\n\n' +
            '## 3D 变换函数表\n\n' +
            '| 函数 | 作用 | 参数 | 示例 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| rotateX(deg) | 绕 X 轴旋转 | 角度 | rotateX(45deg) |\n' +
            '| rotateY(deg) | 绕 Y 轴旋转 | 角度 | rotateY(180deg) |\n' +
            '| rotateZ(deg) | 绕 Z 轴旋转 | 角度 | rotateZ(45deg) |\n' +
            '| rotate3d(x,y,z,deg) | 绕任意轴旋转 | 4 值 | rotate3d(1,1,0,45deg) |\n' +
            '| translateZ(z) | Z 轴平移 | 长度 | translateZ(50px) |\n' +
            '| translate3d(x,y,z) | 3D 平移 | 3 长度 | translate3d(10,20,30px) |\n' +
            '| scaleZ(z) | Z 轴缩放 | 数字 | scaleZ(2) |\n' +
            '| perspective(d) | 透视距离 | 长度 | perspective(800px) |\n\n' +
            '## 3D 空间属性表\n\n' +
            '| 属性 | 作用 | 应用元素 | 常用值 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| perspective | 透视距离 | 父元素 | 800px |\n' +
            '| perspective-origin | 观察点位置 | 父元素 | center, top left |\n' +
            '| transform-style | 子元素 3D 空间 | 父元素 | preserve-3d |\n' +
            '| backface-visibility | 背面可见性 | 变换元素 | hidden |\n\n' +
            '## perspective 值效果对照表\n\n' +
            '| perspective 值 | 效果 | 适用场景 |\n' +
            '| --- | --- | --- |\n' +
            '| 200px | 极强透视（夸张） | 卡通风格 |\n' +
            '| 600px | 强透视（明显立体） | 交互卡片 |\n' +
            '| 1000px | 中等透视（自然） | 通用 3D |\n' +
            '| 2000px | 弱透视（平缓） | 微妙 3D |\n' +
            '| none | 无透视（正交） | 2D 效果 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：3D 翻转卡片（经典）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .scene {\n    perspective: 1000px;       /* 开启 3D 透视 */\n    width: 150px; height: 200px;\n    margin: 30px;\n  }\n  .card {\n    width: 100%; height: 100%;\n    position: relative;\n    transition: transform 0.6s ease;\n    transform-style: preserve-3d;   /* 子元素保持 3D 空间 */\n  }\n  .scene:hover .card {\n    transform: rotateY(180deg);     /* 绕 Y 轴翻转 180° */\n  }\n  .face {\n    position: absolute; inset: 0;\n    backface-visibility: hidden;    /* 背面不可见 */\n    display: flex; align-items: center; justify-content: center;\n    color: white; font-size: 20px; border-radius: 8px;\n  }\n  .front { background: #3498db; }\n  .back  { background: #e74c3c; transform: rotateY(180deg); }  /* 背面预先翻转 */\n</style>\n</head>\n<body>\n  <div class="scene">\n    <div class="card">\n      <div class="face front">正面</div>\n      <div class="face back">背面</div>\n    </div>\n  </div>\n  <p>悬停看 3D 翻转</p>\n</body>\n</html>\n```\n\n' +
            '示例二：3D 悬停（rotateX + rotateY 立体感）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .scene { perspective: 600px; }\n  .box {\n    width: 120px; height: 120px;\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    color: white;\n    display: flex; align-items: center; justify-content: center;\n    margin: 50px;\n    transition: transform 0.5s ease;\n    border-radius: 8px;\n  }\n  .scene:hover .box {\n    transform: rotateX(45deg) rotateY(45deg);  /* 双轴旋转产生立体感 */\n  }\n</style>\n</head>\n<body>\n  <div class="scene">\n    <div class="box">悬停看 3D 旋转</div>\n  </div>\n  <p>无 perspective 则无近大远小效果，看起来只是压缩</p>\n</body>\n</html>\n```\n\n' +
            '示例三：3D 立方体（6 面）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .scene { perspective: 800px; width: 100px; height: 100px; margin: 50px; }\n  .cube {\n    width: 100%; height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n    animation: rotate 8s linear infinite;\n  }\n  @keyframes rotate {\n    from { transform: rotateX(0) rotateY(0); }\n    to   { transform: rotateX(360deg) rotateY(360deg); }\n  }\n  .face {\n    position: absolute; inset: 0;\n    border: 2px solid #333;\n    display: flex; align-items: center; justify-content: center;\n    font-size: 24px; color: white;\n  }\n  .front  { background: rgba(255,0,0,0.7); transform: translateZ(50px); }\n  .back   { background: rgba(0,255,0,0.7); transform: rotateY(180deg) translateZ(50px); }\n  .right  { background: rgba(0,0,255,0.7); transform: rotateY(90deg) translateZ(50px); }\n  .left   { background: rgba(255,255,0,0.7); transform: rotateY(-90deg) translateZ(50px); }\n  .top    { background: rgba(255,0,255,0.7); transform: rotateX(90deg) translateZ(50px); }\n  .bottom { background: rgba(0,255,255,0.7); transform: rotateX(-90deg) translateZ(50px); }\n</style>\n</head>\n<body>\n  <div class="scene">\n    <div class="cube">\n      <div class="face front">前</div>\n      <div class="face back">后</div>\n      <div class="face right">右</div>\n      <div class="face left">左</div>\n      <div class="face top">上</div>\n      <div class="face bottom">下</div>\n    </div>\n  </div>\n  <p>3D 立方体自动旋转（6 个面用 translateZ 定位）</p>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **perspective 必须设在父元素**：子元素的 rotateX/rotateY 需要父元素设 perspective 才有立体感。直接在自身设 `transform: perspective()` 也可，但只影响自身不影响子元素。\n2. **preserve-3d 用于嵌套 3D**：翻转卡片需在 .card 设 `transform-style: preserve-3d`，否则正反面不会保持 3D 空间关系，背面翻转失效。\n3. **backface-visibility 翻转卡片必备**：设 hidden 隐藏背面，否则正反面会互相穿透。背面需预先 `transform: rotateY(180deg)`。\n4. **perspective 值的选择**：600-1000px 是自然立体感的常用范围。太小（200px）夸张变形，太大（2000px）立体感弱。\n5. **移动端性能**：3D 变换虽 GPU 加速，但移动端 GPU 性能有限。复杂 3D（如 6 面立方体）在低端机可能卡顿，建议降级或限制使用。\n6. **transform 顺序影响 3D 结果**：`rotateX(45deg) rotateY(45deg)` 和 `rotateY(45deg) rotateX(45deg)` 结果不同——3D 旋转不满足交换律。\n\n' +
            '## 实际应用\n\n' +
            '- **翻转卡片**：正反面内容（如产品卡正面图片、背面详情），hover 或点击 3D 翻转，电商/游戏常用。\n' +
            '- **3D 悬停**：卡片 hover 时 rotateX/Y 微旋转，产生立体悬浮感，比平移更有质感。\n' +
            '- **立方体展示**：6 面立方体展示产品多角度图，自动旋转或拖拽控制。\n' +
            '- **3D 轮播**：卡片以 3D 圆环排列，旋转切换，视觉冲击力强。\n' +
            '- **视差滚动**：不同层元素 translateZ 不同，滚动时产生近大远小的视差效果。\n\n' +
            '## 扩展知识\n\n' +
            '`perspective-origin` 控制观察点位置，默认 center center。改为 `top left` 会让透视从左上角看，产生不同视角。' +
            '`rotate3d(x, y, z, deg)` 绕任意轴旋转——x/y/z 定义旋转轴方向向量，deg 是旋转角度。如 `rotate3d(1, 1, 0, 45deg)` 绕 XY 对角线轴旋转。' +
            'CSS 3D 的局限：无法实现光照、阴影投射、纹理映射等真实 3D 效果。需要真实 3D 渲染（如游戏场景）请用 WebGL/Three.js。' +
            'CSS 3D 适合「轻量级 3D 交互」——翻转卡片、3D 悬停、立方体菜单等小范围效果，无需引入重量级 3D 库。' +
            '`will-change: transform` 提示浏览器提前创建合成层，可优化 3D 动画性能，但不要滥用（消耗内存）。',
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
            '## 概念详解\n\n' +
            'CSS 变量（官方称「自定义属性」Custom Properties）以 `--` 开头定义，用 `var()` 引用。' +
            '它是 CSS 原生的变量机制，无需预处理器（Sass/Less），运行时动态生效，可被 JS 读写、响应媒体查询——这是它相比 Sass 变量的最大优势。\n\n' +
            'CSS 变量的核心价值在于「设计令牌」（Design Tokens）管理：把颜色、间距、字号等设计系统值定义为变量，统一管理、一处修改全局生效。' +
            '这让主题切换（深色/浅色）、多品牌（不同配色）、响应式调整（断点改变量值）变得简单——只需修改变量定义，所有引用处自动更新。\n\n' +
            'CSS 变量与 Sass 变量的区别：Sass 变量在编译时替换为固定值（编译后看不到变量），CSS 变量在运行时解析（浏览器中始终是变量）。' +
            '这意味着 CSS 变量能被 JS 动态修改、能响应媒体查询、能在继承链中层叠覆盖——Sass 变量做不到这些。\n\n' +
            'CSS 变量遵循正常的层叠规则：定义在 :root 的是全局变量，定义在某个选择器内的是局部变量（仅该元素及其子孙可用）。' +
            '这种「作用域继承」特性让组件级主题定制成为可能。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 定义变量 */\n:root {\n  --primary: #3490dc;        /* 全局变量 */\n  --spacing: 16px;\n  --radius: 8px;\n  --font-size: 1rem;\n}\n\n/* 引用变量 */\n.btn {\n  background: var(--primary);\n  padding: var(--spacing);\n  border-radius: var(--radius);\n  font-size: var(--font-size);\n}\n\n/* 带默认值（变量未定义时回退） */\n.box {\n  color: var(--text-color, #333);  /* --text-color 未定义则用 #333 */\n}\n\n/* 嵌套 var() */\n.card {\n  border: 1px solid var(--border-color, var(--primary, #ccc));\n}\n\n/* 局部变量（覆盖全局） */\n.dark-theme {\n  --primary: #e74c3c;   /* 此元素及子孙中 --primary 变红 */\n}\n\n/* 响应媒体查询 */\n:root { --font-size: 1rem; }\n@media (min-width: 768px) {\n  :root { --font-size: 1.125rem; }  /* 大屏放大字号 */\n}\n```\n\n' +
            '```javascript\n/* JS 读写 CSS 变量 */\n// 读取\nconst primary = getComputedStyle(document.documentElement)\n  .getPropertyValue("--primary").trim();\n\n// 写入（动态修改主题）\ndocument.documentElement.style.setProperty("--primary", "#e74c3c");\n\n// 读取元素级变量\nconst val = getComputedStyle(el).getPropertyValue("--my-var");\n// 写入元素级变量\nel.style.setProperty("--my-var", "red");\n```\n\n' +
            '## CSS 变量特性表\n\n' +
            '| 特性 | 说明 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| 定义 | 以 -- 开头 | --primary: #3498db |\n' +
            '| 引用 | var() 函数 | color: var(--primary) |\n' +
            '| 默认值 | var() 第二参数 | var(--primary, #ccc) |\n' +
            '| 作用域 | 遵循层叠规则 | :root 全局，.dark 局部 |\n' +
            '| 继承 | 子孙继承祖先变量 | 父定义，子可用 |\n' +
            '| 运行时 | 动态生效 | JS 可读写 |\n' +
            '| 媒体查询 | 可响应断点 | @media 内重定义 |\n\n' +
            '## CSS 变量 vs Sass 变量表\n\n' +
            '| 维度 | CSS 变量 | Sass 变量 |\n' +
            '| --- | --- | --- |\n' +
            '| 运行时 | 运行时解析 | 编译时替换 |\n' +
            '| JS 读写 | ✅ 支持 | ❌ 不支持 |\n' +
            '| 媒体查询 | ✅ 可响应 | ❌ 编译时固定 |\n' +
            '| 层叠继承 | ✅ 遵循 CSS 规则 | ❌ 无层叠 |\n' +
            '| 浏览器兼容 | 现代浏览器全支持 | 编译为 CSS 后无限制 |\n' +
            '| 预处理需求 | 不需要 | 需要 Sass 编译 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：设计令牌系统\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  :root {\n    /* 颜色令牌 */\n    --primary: #3490dc;\n    --secondary: #6c757d;\n    --success: #28a745;\n    --danger: #dc3545;\n    --bg: #f8f8f8;\n    --text: #333;\n    /* 间距令牌 */\n    --spacing-sm: 8px;\n    --spacing-md: 16px;\n    --spacing-lg: 24px;\n    /* 圆角令牌 */\n    --radius: 8px;\n  }\n  .btn {\n    background: var(--primary);\n    color: white;\n    padding: var(--spacing-sm) var(--spacing-md);\n    border: none;\n    border-radius: var(--radius);\n    cursor: pointer;\n  }\n  .btn-danger { background: var(--danger); }\n  .box { background: var(--bg); padding: var(--spacing-md); color: var(--text); border-radius: var(--radius); }\n</style>\n</head>\n<body>\n  <button class="btn">主按钮</button>\n  <button class="btn btn-danger">危险按钮</button>\n  <div class="box">内容盒子</div>\n</body>\n</html>\n```\n\n' +
            '示例二：深色/浅色主题切换\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  :root {\n    --bg: white;\n    --text: #333;\n    --card-bg: #f8f8f8;\n    --border: #ddd;\n  }\n  /* 加 .dark 类切换暗色主题 */\n  .dark {\n    --bg: #1a1a1a;\n    --text: #eee;\n    --card-bg: #2a2a2a;\n    --border: #444;\n  }\n  body {\n    background: var(--bg);\n    color: var(--text);\n    transition: background 0.3s, color 0.3s;\n  }\n  .card { background: var(--card-bg); border: 1px solid var(--border); padding: 20px; transition: 0.3s; }\n</style>\n</head>\n<body>\n  <div class="card">主题卡片</div>\n  <button onclick="document.body.classList.toggle(\'dark\')">切换主题</button>\n</body>\n</html>\n```\n\n' +
            '示例三：JS 动态修改变量\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  :root { --hue: 210; }  /* 色相变量 */\n  .box {\n    width: 100px; height: 100px;\n    background: hsl(var(--hue), 70%, 50%);\n    margin: 20px;\n    transition: background 0.3s;\n  }\n</style>\n</head>\n<body>\n  <div class="box"></div>\n  <input type="range" min="0" max="360" value="210" oninput="document.documentElement.style.setProperty(\'--hue\', this.value)">\n  <p>拖动滑块动态改变颜色（JS 修改 CSS 变量）</p>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **变量名区分大小写**：`--Primary` 和 `--primary` 是不同的变量。建议统一小写加连字符（kebab-case）。\n2. **var() 必须有回退值**：生产环境建议 `var(--primary, #ccc)` 带回退值，防止变量未定义时样式崩溃。\n3. **注意变量类型**：CSS 变量是字符串，`var(--size) * 2` 不工作（需用 calc）。如 `width: calc(var(--size) * 2)`。\n4. **作用域陷阱**：变量定义在 :root 是全局，定义在 .dark 内只对该元素及子孙生效。主题切换常在 body 或 html 加类。\n5. **浏览器兼容性**：IE 不支持 CSS 变量。现代浏览器全支持，如今可放心使用（IE 已淘汰）。\n6. **性能**：大量使用 CSS 变量会有轻微性能开销（运行时解析）。但对现代浏览器影响很小，权衡可维护性值得使用。\n\n' +
            '## 实际应用\n\n' +
            '- **设计系统**：定义颜色、间距、字号、圆角等令牌变量，统一管理设计系统，Tailwind/Bulma 等框架都用此模式。\n' +
            '- **主题切换**：深色/浅色主题只需重新定义变量，body 引用变量自动更新，无需重复写两套样式。\n' +
            '- **多品牌**：不同品牌定义不同变量集，切换品牌只需改变量文件。\n' +
            '- **响应式调整**：媒体查询中重定义变量（如大屏放大字号），一处调整全局生效。\n' +
            '- **JS 动态控制**：颜色选择器、布局调节器等通过 JS 修改变量实时生效。\n\n' +
            '## 扩展知识\n\n' +
            'CSS 变量可用于任何 CSS 属性值，甚至可拆分使用：`--main-color: #3498db` 然后 `color: var(--main-color)`。' +
            '更强大的是「带类型的变量」——如 `--hue: 210` 配合 `hsl(var(--hue), 70%, 50%)`，JS 只需改 --hue 就能改变整个色相。' +
            'CSS Variables Level 2（提案中）将支持 `@property` 定义变量类型（如 `<color>`、`<length>`），让变量有类型检查和动画能力。' +
            '如 `@property --hue { syntax: "<number>"; initial-value: 210; inherits: true }` 后，--hue 可参与动画过渡（目前 CSS 变量默认不可过渡）。' +
            'Tailwind CSS v4 已转向用 CSS 变量实现主题系统，而非 Sass 变量，体现了 CSS 变量已成为设计系统的事实标准。',
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
            '## 概念详解\n\n' +
            '伪类（Pseudo-class）和伪元素（Pseudo-element）是 CSS 中「选择特定状态或虚拟部分」的机制。' +
            '伪类以单冒号 `:` 开头，选择元素的某种「状态」（如 :hover 悬停态、:first-child 第一个子元素）；' +
            '伪元素以双冒号 `::` 开头，创建「虚拟元素」（如 ::before 在内容前插入虚拟节点）。\n\n' +
            '两者的区别：伪类选择「已存在元素」的某种状态（不创建新元素），伪元素创建「不存在于 HTML 中的虚拟元素」。' +
            'CSS3 规范用双冒号区分伪元素（::before）和伪类（:hover），但旧语法单冒号（:before）仍被浏览器兼容。\n\n' +
            '伪类的价值：无需 JS 即可响应用户交互（hover/focus）和文档结构（first-child/nth-child）。' +
            '伪元素的价值：无需修改 HTML 即可插入装饰内容（图标、箭头、清除浮动），保持 HTML 语义干净。\n\n' +
            '::before 和 ::after 是最强大的伪元素——它们在元素内容前/后插入虚拟节点，必须配合 `content` 属性（即使空字符串）。' +
            '常用于：清除浮动、必填星号、装饰图标、气泡箭头、首字下沉等。\n\n' +
            '## 语法说明\n\n' +
            '```css\n/* 常用伪类 */\na:link { }          /* 未访问链接 */\na:visited { }      /* 已访问链接 */\na:hover { }        /* 悬停 */\na:active { }       /* 激活（点击瞬间） */\ninput:focus { }    /* 聚焦 */\ninput:checked { }  /* 选中（radio/checkbox） */\ninput:disabled { } /* 禁用 */\n\n/* 结构伪类 */\nli:first-child { }    /* 第一个子元素 */\nli:last-child { }     /* 最后一个子元素 */\nli:nth-child(n) { }   /* 第 n 个 */\nli:nth-child(odd) { } /* 奇数个 */\nli:nth-child(even) { }/* 偶数个 */\nli:nth-child(2n+1) { }/* 自定义公式 */\nli:not(.active) { }   /* 不匹配的选择器 */\nli:empty { }          /* 无子元素 */\n\n/* 伪元素 */\n.box::before { content: ""; }      /* 内容前插入 */\n.box::after { content: ""; }       /* 内容后插入 */\np::first-letter { }                /* 首字母 */\np::first-line { }                  /* 首行 */\n::selection { }                    /* 选中文字 */\n::placeholder { }                  /* 输入框占位符 */\n```\n\n' +
            '## 常用伪类表\n\n' +
            '| 伪类 | 作用 | 适用元素 |\n' +
            '| --- | --- | --- |\n' +
            '| :hover | 鼠标悬停 | 所有 |\n' +
            '| :focus | 获得焦点 | input, a, button |\n' +
            '| :active | 激活（点击瞬间） | a, button |\n' +
            '| :visited | 已访问链接 | a |\n' +
            '| :checked | 选中状态 | input[radio/checkbox] |\n' +
            '| :disabled | 禁用状态 | input, button |\n' +
            '| :first-child | 第一个子元素 | 所有 |\n' +
            '| :last-child | 最后一个子元素 | 所有 |\n' +
            '| :nth-child(n) | 第 n 个子元素 | 所有 |\n' +
            '| :not() | 不匹配选择器 | 所有 |\n' +
            '| :empty | 无子元素 | 所有 |\n\n' +
            '## 伪元素表\n\n' +
            '| 伪元素 | 作用 | 需配 content |\n' +
            '| --- | --- | --- |\n' +
            '| ::before | 内容前插入虚拟元素 | 是 |\n' +
            '| ::after | 内容后插入虚拟元素 | 是 |\n' +
            '| ::first-letter | 首字母 | 否 |\n' +
            '| ::first-line | 首行 | 否 |\n' +
            '| ::selection | 选中文字 | 否 |\n' +
            '| ::placeholder | 占位符 | 否 |\n\n' +
            '## nth-child 公式表\n\n' +
            '| 公式 | 含义 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| n | 全部 | nth-child(n) |\n' +
            '| odd / 2n+1 | 奇数个 | 1,3,5,7... |\n' +
            '| even / 2n | 偶数个 | 2,4,6,8... |\n' +
            '| 3n | 每 3 个 | 3,6,9... |\n' +
            '| -n+3 | 前 3 个 | 1,2,3 |\n' +
            '| n+4 | 第 4 个起 | 4,5,6... |\n' +
            '| 2n+3 | 从第 3 起每隔 1 | 3,5,7... |\n\n' +
            '## 代码示例\n\n' +
            '示例一：nth-child 斑马纹表格 + hover 高亮\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  table { border-collapse: collapse; width: 100%; }\n  td { padding: 8px; border: 1px solid #ddd; }\n  /* 偶数行底色（斑马纹） */\n  tr:nth-child(even) { background: #f2f2f2; }\n  /* 悬停行高亮 */\n  tr:hover { background: #e0f0ff; }\n  /* 前 3 行特殊标记 */\n  tr:nth-child(-n+3) { font-weight: bold; }\n</style>\n</head>\n<body>\n  <table>\n    <tr><td>行 1（前 3 加粗）</td></tr>\n    <tr><td>行 2（前 3 加粗）</td></tr>\n    <tr><td>行 3（前 3 加粗）</td></tr>\n    <tr><td>行 4</td></tr>\n    <tr><td>行 5</td></tr>\n  </table>\n</body>\n</html>\n```\n\n' +
            '示例二：::after 清除浮动 + 必填星号装饰\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* clearfix 清除浮动 */\n  .clearfix::after {\n    content: "";        /* 必须有 content，即使空 */\n    display: block;\n    clear: both;\n  }\n  /* 必填项加红色星号 */\n  .required::after {\n    content: " *";      /* 插入星号 */\n    color: #e74c3c;\n    font-weight: bold;\n  }\n  .left { float: left; width: 40%; background: #faa; padding: 10px; }\n  label { display: block; margin: 10px 0; }\n</style>\n</head>\n<body>\n  <div class="clearfix">\n    <div class="left">浮动元素（父级已清除浮动）</div>\n  </div>\n  <label class="required">用户名</label>\n  <label>邮箱（非必填）</label>\n</body>\n</html>\n```\n\n' +
            '示例三：::before 装饰图标 + :not 排除\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* 给链接前加图标（用 content 插入 Unicode） */\n  .link-list a::before {\n    content: "🔗 ";     /* 链接 emoji 图标 */\n  }\n  /* :not 排除外部链接 */\n  .link-list a:not(.external)::before {\n    content: "📄 ";     /* 内部链接用文档图标 */\n  }\n  /* 首字母下沉 */\n  .dropcap::first-letter {\n    font-size: 3em;\n    float: left;\n    line-height: 1;\n    margin-right: 5px;\n    color: #e74c3c;\n  }\n  /* 选中文字样式 */\n  ::selection { background: #3498db; color: white; }\n</style>\n</head>\n<body>\n  <div class="link-list">\n    <a href="#" class="external">外部链接</a><br>\n    <a href="#">内部链接</a>\n  </div>\n  <p class="dropcap">这是一段文字，首字母会下沉放大，形成杂志式排版效果。</p>\n</body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. **::before/::after 必须有 content**：即使插入空内容（`content: ""`），content 属性也不可省略，否则伪元素不显示。\n2. **伪元素不增加 HTML 节点**：::before/::after 是虚拟元素，不在 DOM 树中，JS 无法直接选中（需用 getComputedStyle 读取）。适合纯装饰用途。\n3. **nth-child 的陷阱**：`:nth-child(n)` 计数所有兄弟元素（不论类型）。如要按类型计数用 `:nth-of-type(n)`。如 `p:nth-child(2)` 选「父级第 2 个子元素且是 p」，`p:nth-of-type(2)` 选「第 2 个 p 元素」。\n4. **LVHA 顺序**：链接伪类应按 :link → :visited → :hover → :active 顺序写，否则后者被前者覆盖（CSS 层叠规则）。\n5. **:hover 移动端的坑**：触屏设备上 :hover 在点击后「粘住」（直到点击其他位置）。移动端用 :active 或 media (hover: hover) 限制。\n6. **::selection 浏览器差异**：::selection 只支持 color、background、text-shadow 等少数属性，不支持 font-size、margin 等。\n\n' +
            '## 实际应用\n\n' +
            '- **斑马纹表格**：`tr:nth-child(even)` 给偶数行加底色，提升表格可读性。\n' +
            '- **清除浮动**：`.clearfix::after { content:""; display:block; clear:both }` 是 clearfix 标准方案。\n' +
            '- **必填星号**：`.required::after { content:" *" }` 给表单字段加红色星号，无需改 HTML。\n' +
            '- **装饰图标**：::before 配 content 插入 Unicode/emoji 图标，无需 img 标签。\n' +
            '- **首字下沉**：`::first-letter { font-size:3em; float:left }` 实现杂志式首字下沉。\n' +
            '- **选中文字样式**：`::selection` 自定义文字选中颜色，提升品牌一致性。\n\n' +
            '## 扩展知识\n\n' +
            'CSS4 新增了许多伪类：`:is()`（匹配多个选择器，替代重复写）、`:where()`（同 is 但优先级为 0）、`:has()`（父选择器，根据子元素选父元素，CSS 中的「jQuery has」）。' +
            '如 `div:has(> img)` 选中「包含 img 子元素」的 div——这是 CSS 长期缺失的能力（Chrome 105+ 支持）。' +
            '`:not()` 在 CSS4 支持复合选择器列表：`:not(.a, .b)` 排除多个类。' +
            'nth-child 还有 `of` 语法：`:nth-child(odd of .item)` 在 .item 中选奇数个，比先选再过滤更精确。' +
            '伪元素的 content 可引用 HTML 属性：`content: attr(data-label)`，配合 `data-*` 属性实现动态装饰内容，无需重复写死。',
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
            '## 概念详解\n\n' +
            '`calc()`、`min()`、`max()`、`clamp()` 是 CSS 的**数学函数**，它们让 CSS 拥有了在运行时动态计算属性值的能力。' +
            '在它们出现之前，要实现「全宽减去固定边距」「字号随视口变化但有上下限」这类需求，只能依赖 JavaScript 或大量媒体查询。\n\n' +
            '`calc()` 接受一个表达式并返回计算结果，最大的价值是**允许混合不同单位**（如百分比与像素、rem 与 px）。' +
            '这解决了 CSS 长期以来「要么用百分比要么用固定值，无法组合」的痛点——例如侧栏固定 200px，主区想占满剩余空间，过去只能用 float + overflow 或 flexbox，现在 `calc(100% - 200px)` 一行搞定。\n\n' +
            '`min()` 和 `max()` 在多个值中选取最小/最大者，常用于**限制最大/最小尺寸**。' +
            '例如 `width: min(800px, 90%)` 表示「不超过 800px 且不超过父级 90%」，大屏取 800px，小屏取 90%，天然响应式。' +
            '`clamp(min, preferred, max)` 则把一个值夹在上下限之间，中间值是首选值——这是**响应式字号**的现代标准解法。\n\n' +
            '这些函数让 CSS 具备了「自适应数学」能力，大幅减少了媒体查询的使用，代码更简洁、过渡更平滑。' +
            '它们在所有现代浏览器中得到良好支持（IE 不支持），是新时代 CSS 布局与响应式的基石。\n\n' +
            '## 语法说明\n\n' +
            '```css\n' +
            '/* calc() —— 表达式计算，支持 + - * / 与混合单位 */\n' +
            'width: calc(100% - 200px);        /* 百分比减像素 */\n' +
            'padding: calc(1rem + 2px);        /* rem 加像素 */\n' +
            'font-size: calc(14px * 1.2);      /* 乘法 */\n' +
            'margin: calc(50vh / 3);           /* 除法 */\n' +
            'width: calc((100% - 20px) / 2);   /* 嵌套括号 */\n' +
            '\n' +
            '/* min() —— 取多个值中的最小者 */\n' +
            'width: min(800px, 90%);           /* 不超过 800px 也不超过 90% */\n' +
            'font-size: min(5vw, 24px);        /* 字号不超过 24px */\n' +
            '\n' +
            '/* max() —— 取多个值中的最大者 */\n' +
            'width: max(320px, 50%);           /* 至少 320px，否则取 50% */\n' +
            'font-size: max(14px, 2vw);        /* 字号至少 14px */\n' +
            '\n' +
            '/* clamp(min, preferred, max) —— 把首选值限制在 [min, max] 区间 */\n' +
            'font-size: clamp(1rem, 2.5vw, 2rem);   /* 字号在 1-2rem 间随视口变化 */\n' +
            'padding: clamp(0.5rem, 2vw, 2rem);     /* 内边距有上下限 */\n' +
            'width: clamp(280px, 50vw, 800px);      /* 宽度自适应且不失控 */\n' +
            '\n' +
            '/* 运算符前后必须有空格（+ 和 -），* 和 / 可省略但建议保留 */\n' +
            '/* ❌ 错误：calc(100%-200px) 会被解析为负值 */\n' +
            '/* ✅ 正确：calc(100% - 200px) */\n' +
            '/* ✅ 乘除：calc(100px/2) 或 calc(100px / 2) 均可 */\n' +
            '```\n\n' +
            '## 数学函数对比表\n\n' +
            '| 函数 | 语法 | 作用 | 典型场景 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| calc() | calc(表达式) | 计算表达式，支持混合单位 | 全宽减固定值、嵌套计算 |\n' +
            '| min() | min(v1, v2, ...) | 取最小值 | 限制最大尺寸（响应式限宽） |\n' +
            '| max() | max(v1, v2, ...) | 取最大值 | 保证最小尺寸（移动端可读性） |\n' +
            '| clamp() | clamp(min, pref, max) | 把首选值夹在区间内 | 响应式字号、平滑过渡 |\n\n' +
            '## calc 运算规则表\n\n' +
            '| 运算符 | 语法要求 | 示例 | 说明 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| + | 前后必须空格 | calc(10px + 5px) | 加法 |\n' +
            '| - | 前后必须空格 | calc(100% - 20px) | 减法 |\n' +
            '| * | 空格可选 | calc(10px * 2) | 乘法，至少一个操作数是无单位数字 |\n' +
            '| / | 空格可选 | calc(100px / 2) | 除法，右操作数不能为 0 |\n' +
            '| () | 嵌套 | calc((100% - 20px) / 2) | 改变运算优先级 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：calc 实现侧栏 + 主区布局\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  .sidebar {\n' +
            '    width: 200px;\n' +
            '    float: left;\n' +
            '    background: #eee;\n' +
            '    min-height: 100px;\n' +
            '  }\n' +
            '  .main {\n' +
            '    /* 主区宽度 = 全宽 - 侧栏(200px) - 间距(20px) */\n' +
            '    width: calc(100% - 220px);\n' +
            '    margin-left: 220px;\n' +
            '    background: #faa;\n' +
            '    min-height: 100px;\n' +
            '  }\n' +
            '  /* 嵌套 calc：栅格卡片宽度 */\n' +
            '  .card {\n' +
            '    /* 一行三列，列间距 20px */\n' +
            '    width: calc((100% - 40px) / 3);\n' +
            '    background: #cef;\n' +
            '    height: 80px;\n' +
            '    display: inline-block;\n' +
            '    margin-bottom: 10px;\n' +
            '  }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="sidebar">侧栏 200px</div>\n' +
            '  <div class="main">主区 calc(100% - 220px)</div>\n' +
            '  <div style="clear:both"></div>\n' +
            '  <div class="card">卡片1</div>\n' +
            '  <div class="card">卡片2</div>\n' +
            '  <div class="card">卡片3</div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例二：clamp 实现零媒体查询响应式字号\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  body {\n' +
            '    /* 正文字号随视口平滑变化，但有 16px 下限和 20px 上限 */\n' +
            '    font-size: clamp(16px, 1vw + 0.5rem, 20px);\n' +
            '    margin: 0;\n' +
            '  }\n' +
            '  h1 {\n' +
            '    /* 标题字号在 1.5rem-3rem 间随视口变化 */\n' +
            '    font-size: clamp(1.5rem, 5vw, 3rem);\n' +
            '    line-height: 1.2;\n' +
            '  }\n' +
            '  h2 {\n' +
            '    /* 次级标题 */\n' +
            '    font-size: clamp(1.2rem, 3vw, 2rem);\n' +
            '  }\n' +
            '  .container {\n' +
            '    /* 限宽居中容器：不超过 1200px 也不超过 90% */\n' +
            '    width: min(1200px, 90%);\n' +
            '    margin: 0 auto;\n' +
            '    padding: clamp(1rem, 3vw, 2rem);\n' +
            '    background: #f8f9fa;\n' +
            '  }\n' +
            '  .box {\n' +
            '    /* min 限制最大宽度 */\n' +
            '    width: min(800px, 100%);\n' +
            '    background: #cef;\n' +
            '    padding: 20px;\n' +
            '    margin: 1rem 0;\n' +
            '  }\n' +
            '  .safe {\n' +
            '    /* max 保证最小宽度，移动端不挤 */\n' +
            '    width: max(280px, 50%);\n' +
            '    background: #fec;\n' +
            '    padding: 20px;\n' +
            '  }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <h1>响应式标题（缩放窗口看字号平滑变化）</h1>\n' +
            '  <div class="container">\n' +
            '    <h2>限宽居中容器</h2>\n' +
            '    <div class="box">min(800px, 100%) 限宽</div>\n' +
            '    <div class="safe">max(280px, 50%) 保底</div>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例三：clamp 与 min 配合实现流式排版\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  :root {\n' +
            '    /* 用 calc 定义设计令牌：基准 + 缩放 */\n' +
            '    --step-0: clamp(1rem, 0.875rem + 0.5vw, 1.125rem);\n' +
            '    --step-1: clamp(1.25rem, 1rem + 1vw, 1.5rem);\n' +
            '    --step-2: clamp(1.5rem, 1.125rem + 1.5vw, 2rem);\n' +
            '    --step-3: clamp(2rem, 1.5rem + 2vw, 3rem);\n' +
            '  }\n' +
            '  body { font-size: var(--step-0); margin: 2rem; }\n' +
            '  h1 { font-size: var(--step-3); }\n' +
            '  h2 { font-size: var(--step-2); }\n' +
            '  h3 { font-size: var(--step-1); }\n' +
            '  /* min() 控制内容行宽，提升可读性 */\n' +
            '  article { max-width: min(70ch, 100%); margin: 0 auto; }\n' +
            '  p { line-height: 1.7; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <article>\n' +
            '    <h1>流式排版（Fluid Typography）</h1>\n' +
            '    <p>用 clamp + vw 实现字号随视口无缝变化，无需任何媒体查询。</p>\n' +
            '    <h2>设计令牌</h2>\n' +
            '    <p>把 clamp 值存入 CSS 变量，全局复用，统一调整。</p>\n' +
            '    <h3>行宽控制</h3>\n' +
            '    <p>max-width: min(70ch, 100%) 限制每行字符数，提升阅读体验。</p>\n' +
            '  </article>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **运算符空格**：`calc()` 中的 `+` 和 `-` 前后必须有空格，否则会被解析为正负号。`calc(100%-20px)` 会被当成 `100% -20px`（无效）。`*` 和 `/` 空格可选，但建议统一加空格。\n' +
            '2. **除数不能为 0**：`calc(100px / 0)` 无效；动态计算时若除数可能为 0 需用 `max()` 兜底。\n' +
            '3. **混合单位限制**：`*` 和 `/` 的一个操作数必须是无单位数字（如 `calc(10px * 2)`，不能 `calc(10px * 2px)`）。`+` 和 `-` 两边单位必须兼容。\n' +
            '4. **嵌套函数**：`calc()` 可嵌套（`calc(calc(100% - 20px) / 2)`），也可与 `min/max/clamp` 嵌套（`clamp(1rem, calc(1rem + 1vw), 2rem)`）。\n' +
            '5. **IE 不支持**：IE 11 完全不支持这些函数。若需兼容 IE，需提供回退值：`width: 80%; width: calc(100% - 200px);`（后者被支持时覆盖前者）。\n' +
            '6. **性能**：`calc()` 在每次布局时计算，但现代浏览器优化良好，性能开销可忽略。避免在动画属性上过度使用嵌套 calc。\n' +
            '7. **clamp 的首选值**：`clamp(min, preferred, max)` 中 `preferred` 通常是含 vw/vh 的流式值，min/max 是固定值兜底。若 preferred < min 则取 min，若 > max 则取 max。\n\n' +
            '## 实际应用\n\n' +
            '- **限宽居中容器**：`width: min(1200px, 90%); margin: 0 auto;` 是现代居中布局的标准写法，比 `max-width` + `width: 100%` 更简洁。\n' +
            '- **响应式字号**：`font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem)` 实现字号随视口平滑变化且有上下限，无需媒体查询。\n' +
            '- **侧栏 + 主区**：`width: calc(100% - 220px)` 让主区占满剩余空间，兼容旧布局。\n' +
            '- **栅格卡片**：`width: calc((100% - 40px) / 3)` 实现一行三列等宽卡片，列间距 20px。\n' +
            '- **安全区域**：`padding: env(safe-area-inset-bottom)` 配合 `calc()` 适配 iPhone 刘海/底部横条。\n' +
            '- **流式排版令牌**：用 clamp 定义 `--step-0` 到 `--step-6` 字号令牌，全局统一调整排版节奏。\n\n' +
            '## 扩展知识\n\n' +
            '**流式排版（Fluid Typography）** 是 clamp 的杀手级应用。传统响应式字号用媒体查询分档（如 ≤768px 用 16px，>768px 用 18px），字号会「跳变」。' +
            'clamp 让字号随视口**连续平滑变化**，体验更佳。常用公式：`clamp(最小, 基准 + Nvw, 最大)`，例如 `clamp(1rem, 0.875rem + 0.5vw, 1.25rem)`——基准 0.875rem，每 vw 增加 0.5%，夹在 1-1.25rem 之间。\n\n' +
            '**`min()` vs `max-width`**：`width: min(1200px, 90%)` 等价于 `max-width: 1200px; width: 90%;`，但更简洁，且能用在无法用 max-width 的场景（如 font-size）。' +
            '同理 `max()` 等价于 `min-width`。\n\n' +
            '**`env()` 函数**：与 calc 配合读取环境变量，最常见的是 `env(safe-area-inset-*)` 适配移动设备安全区域：`padding-bottom: calc(1rem + env(safe-area-inset-bottom));`。\n\n' +
            '**Utopia.fyi** 是一个流式排版生成器网站，输入最小/最大视口与字号，自动生成 clamp 字号令牌，是设计响应式排版系统的利器。\n\n' +
            '这些数学函数是 CSS 走向「编程化」的重要一步，配合 CSS 变量、`@property`、容器查询，CSS 正在具备真正的逻辑表达能力。',
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
            '## 概念详解\n\n' +
            '`filter` 是 CSS 的**图形滤镜**属性，它对元素的内容（文本、图片、背景、边框等）应用类似 Photoshop 的视觉效果——模糊、亮度、对比度、灰度、复古、色相旋转、反相、饱和度、投影。' +
            '在 `filter` 出现之前，这些效果只能靠图片处理软件预处理或 Canvas/SVG 滤镜实现，现在一行 CSS 即可。\n\n' +
            '`filter` 的核心价值在于**让视觉效果与内容解耦**：同一张图片用 CSS 就能呈现灰度、复古、高对比等多种风格，无需准备多张图；hover 交互（灰度变彩色）也只需切换 filter 值。' +
            '它还支持**滤镜组合**：`filter: blur(2px) grayscale(0.5) brightness(1.2)` 多个滤镜依次叠加。\n\n' +
            '`backdrop-filter` 是 filter 的兄弟属性，它对元素**背后**的内容（而非元素自身）应用滤镜，最经典的用途是 **iOS 风格毛玻璃**（磨砂导航栏、控制中心）。' +
            '配合半透明背景，背后内容被模糊/变暗，形成高级感的玻璃质感。\n\n' +
            '`drop-shadow()` 是 filter 中的特殊滤镜——它根据元素的**实际形状**（包括透明区域）生成投影，比 `box-shadow`（只能按矩形投影）更精确，对透明 PNG、clip-path 裁剪形状特别有用。\n\n' +
            '## 语法说明\n\n' +
            '```css\n' +
            '/* filter —— 对元素自身应用滤镜，可叠加多个 */\n' +
            '.img {\n' +
            '  filter: blur(3px);              /* 高斯模糊，半径 3px */\n' +
            '  filter: brightness(1.5);       /* 亮度 1.5 倍（1=原图，>1 更亮） */\n' +
            '  filter: contrast(1.5);         /* 对比度 1.5 倍 */\n' +
            '  filter: grayscale(100%);       /* 灰度，100% 完全灰，0% 原色 */\n' +
            '  filter: sepia(80%);            /* 复古棕褐色 */\n' +
            '  filter: hue-rotate(90deg);     /* 色相旋转 90 度 */\n' +
            '  filter: invert(100%);          /* 反相（颜色取反） */\n' +
            '  filter: saturate(2);           /* 饱和度 2 倍 */\n' +
            '  filter: drop-shadow(4px 4px 8px rgba(0,0,0,0.5)); /* 跟随形状的投影 */\n' +
            '  filter: blur(2px) grayscale(0.5) brightness(1.1); /* 多滤镜叠加 */\n' +
            '}\n' +
            '\n' +
            '/* backdrop-filter —— 对元素背后内容应用滤镜 */\n' +
            '.glass {\n' +
            '  background: rgba(255,255,255,0.3);   /* 必须半透明才能看到背后效果 */\n' +
            '  -webkit-backdrop-filter: blur(10px); /* Safari 前缀 */\n' +
            '  backdrop-filter: blur(10px);         /* 标准写法 */\n' +
            '  backdrop-filter: blur(10px) saturate(1.8); /* 可叠加 */\n' +
            '}\n' +
            '```\n\n' +
            '## filter 滤镜函数表\n\n' +
            '| 函数 | 参数 | 作用 | 典型值 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| blur() | 长度 | 高斯模糊 | blur(3px) |\n' +
            '| brightness() | 数值/百分比 | 亮度 | brightness(1.5) 或 150% |\n' +
            '| contrast() | 数值/百分比 | 对比度 | contrast(1.2) |\n' +
            '| grayscale() | 数值/百分比 | 灰度 | grayscale(100%) |\n' +
            '| sepia() | 数值/百分比 | 棕褐色复古 | sepia(80%) |\n' +
            '| hue-rotate() | 角度 | 色相旋转 | hue-rotate(90deg) |\n' +
            '| invert() | 数值/百分比 | 反相 | invert(100%) |\n' +
            '| saturate() | 数值/百分比 | 饱和度 | saturate(2) |\n' +
            '| drop-shadow() | x偏移 y偏移 模糊 颜色 | 跟随形状投影 | drop-shadow(4px 4px 8px #000) |\n' +
            '| opacity() | 数值/百分比 | 透明度（等同 opacity 属性） | opacity(50%) |\n\n' +
            '## filter vs backdrop-filter 对比表\n\n' +
            '| 特性 | filter | backdrop-filter |\n' +
            '| --- | --- | --- |\n' +
            '| 作用对象 | 元素自身内容 | 元素背后内容 |\n' +
            '| 是否需半透明背景 | 否 | 是（否则看不到背后） |\n' +
            '| 浏览器支持 | 良好（IE 不支持） | 较新（需 -webkit- 前缀） |\n' +
            '| 典型场景 | 图片处理、hover 交互 | 毛玻璃导航栏、模态遮罩 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：图片滤镜组合与 hover 交互\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  .row { display: flex; gap: 10px; flex-wrap: wrap; }\n' +
            '  .row img { width: 100px; height: 100px; transition: filter 0.5s; }\n' +
            '  .gray { filter: grayscale(100%); }\n' +
            '  .blur { filter: blur(3px); }\n' +
            '  .sepia { filter: sepia(100%); }\n' +
            '  .contrast { filter: contrast(1.8); }\n' +
            '  .hue { filter: hue-rotate(120deg); }\n' +
            '  .combo { filter: grayscale(0.5) brightness(1.3) contrast(1.2); }\n' +
            '  /* hover 灰度变彩色 */\n' +
            '  .gray:hover { filter: grayscale(0); }\n' +
            '  .blur:hover { filter: blur(0); }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="row">\n' +
            '    <img src="https://picsum.photos/100/100" alt="原图">\n' +
            '    <img class="gray" src="https://picsum.photos/100/100" alt="灰度">\n' +
            '    <img class="blur" src="https://picsum.photos/100/100" alt="模糊">\n' +
            '    <img class="sepia" src="https://picsum.photos/100/100" alt="复古">\n' +
            '    <img class="contrast" src="https://picsum.photos/100/100" alt="高对比">\n' +
            '    <img class="hue" src="https://picsum.photos/100/100" alt="色相旋转">\n' +
            '    <img class="combo" src="https://picsum.photos/100/100" alt="组合">\n' +
            '  </div>\n' +
            '  <p>悬停灰度/模糊图看变化</p>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例二：毛玻璃效果 backdrop-filter\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  .bg {\n' +
            '    background: url("https://picsum.photos/600/300") center/cover;\n' +
            '    height: 300px;\n' +
            '    display: flex;\n' +
            '    align-items: center;\n' +
            '    justify-content: center;\n' +
            '  }\n' +
            '  .glass {\n' +
            '    /* 半透明背景是毛玻璃的前提 */\n' +
            '    background: rgba(255,255,255,0.25);\n' +
            '    -webkit-backdrop-filter: blur(12px) saturate(1.8);\n' +
            '    backdrop-filter: blur(12px) saturate(1.8);\n' +
            '    padding: 24px 48px;\n' +
            '    border-radius: 12px;\n' +
            '    color: white;\n' +
            '    border: 1px solid rgba(255,255,255,0.3);\n' +
            '    box-shadow: 0 8px 32px rgba(0,0,0,0.2);\n' +
            '  }\n' +
            '  .glass-dark {\n' +
            '    background: rgba(0,0,0,0.35);\n' +
            '    -webkit-backdrop-filter: blur(8px);\n' +
            '    backdrop-filter: blur(8px);\n' +
            '    padding: 16px 32px;\n' +
            '    color: white;\n' +
            '    border-radius: 8px;\n' +
            '    margin-top: 10px;\n' +
            '  }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="bg">\n' +
            '    <div>\n' +
            '      <div class="glass">毛玻璃效果（亮色）</div>\n' +
            '      <div class="glass-dark">深色磨砂（iOS 控制中心风）</div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例三：drop-shadow 跟随形状投影 vs box-shadow\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  .row { display: flex; gap: 40px; padding: 20px; }\n' +
            '  /* 透明 PNG 或裁剪形状 */\n' +
            '  .star {\n' +
            '    width: 100px; height: 100px;\n' +
            '    background: #f80;\n' +
            '    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n' +
            '  }\n' +
            '  /* box-shadow 只能按矩形投影 */\n' +
            '  .box-shadow { box-shadow: 8px 8px 10px rgba(0,0,0,0.5); }\n' +
            '  /* drop-shadow 跟随实际形状（星形轮廓）投影 */\n' +
            '  .drop-shadow { filter: drop-shadow(8px 8px 10px rgba(0,0,0,0.5)); }\n' +
            '  p { margin: 5px 0; font-size: 14px; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="row">\n' +
            '    <div>\n' +
            '      <div class="star box-shadow"></div>\n' +
            '      <p>box-shadow（矩形投影）</p>\n' +
            '    </div>\n' +
            '    <div>\n' +
            '      <div class="star drop-shadow"></div>\n' +
            '      <p>drop-shadow（跟随星形）</p>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **滤镜顺序**：多个滤镜从左到右依次应用，顺序不同结果可能不同。如 `blur(3px) grayscale(1)` 与 `grayscale(1) blur(3px)` 视觉差异通常很小，但 `hue-rotate` 与 `saturate` 组合时顺序会影响结果。\n' +
            '2. **backdrop-filter 必须半透明**：若元素背景完全不透明，背后内容被遮住，backdrop-filter 无意义。常配 `rgba()` 或半透明渐变。\n' +
            '3. **`-webkit-` 前缀**：Safari 较老版本需 `-webkit-backdrop-filter`，建议两行都写（前缀行在前）。\n' +
            '4. **性能开销**：`blur`、`drop-shadow` 等 GPU 滤镜较重，大量元素同时滤镜会卡顿。避免对滚动列表中每项都加重滤镜；`will-change: filter` 可提示浏览器优化。\n' +
            '5. **drop-shadow 参数**：语法 `drop-shadow(x偏移 y偏移 模糊半径 颜色)`，比 box-shadow 少「扩展半径」参数，且不支持 inset。\n' +
            '6. **IE 不支持**：IE 11 完全不支持 filter/backdrop-filter。需兼容时提供降级（如用 SVG 滤镜或图片预处理）。\n' +
            '7. **filter 影响后代**：`filter` 应用于元素后，该元素成为**包含块**（fixed 子元素相对它定位），且会创建新的层叠上下文，可能影响 z-index 表现。\n\n' +
            '## 实际应用\n\n' +
            '- **商品图列表**：默认 `grayscale(100%)`，hover 转彩色突出当前项，提升交互感。\n' +
            '- **iOS 风格导航栏**：`backdrop-filter: blur(12px) saturate(1.8)` + 半透明背景，实现毛玻璃顶栏。\n' +
            '- **模态遮罩**：背景 `backdrop-filter: blur(4px)` 让背后内容模糊，聚焦模态框。\n' +
            '- **透明 PNG 投影**：`drop-shadow` 跟随图标实际形状，比 box-shadow 自然。\n' +
            '- **暗黑模式切换**：用 `invert(1) hue-rotate(180deg)` 快速反转页面（临时方案，正式暗黑模式应用 CSS 变量）。\n' +
            '- **图片懒加载占位**：低分辨率占位图加 `blur(10px)`，加载完成后 transition 到清晰图。\n\n' +
            '## 扩展知识\n\n' +
            '**`drop-shadow` vs `box-shadow`**：box-shadow 按元素的盒模型矩形投影，对圆形、星形、透明 PNG 会显得不自然（矩形阴影框住形状）。' +
            'drop-shadow 根据元素的 alpha 通道（实际可见形状）生成投影，对 `clip-path`、透明 PNG、SVG 图标完美贴合。代价是性能略低于 box-shadow。\n\n' +
            '**`backdrop-filter` 的视觉增强**：毛玻璃效果常配 `saturate(1.5~2)` 提升背后颜色饱和度，让玻璃更通透有质感；再加 `border: 1px solid rgba(255,255,255,0.3)` 模拟玻璃边缘高光。\n\n' +
            '**`filter: url()`**：filter 还可引用 SVG 滤镜，实现更复杂效果（如自定义扭曲、光照）。语法 `filter: url(#myFilter)`，需在页面内定义 `<svg><filter id="myFilter">...</filter></svg>`。\n\n' +
            '**`prefers-reduced-transparency`**：部分用户系统开启了「减少透明度」，可用 `@media (prefers-reduced-transparency: reduce) { .glass { backdrop-filter: none; background: #fff; } }` 降级为纯色背景，提升可读性。\n\n' +
            'filter 与 backdrop-filter 是现代 Web 视觉效果的核心工具，配合 transition、transform、CSS 变量，无需图片编辑软件即可实现丰富的动态视觉。',
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
            '## 概念详解\n\n' +
            '「居中」是 CSS 最经典的话题——曾经是面试必考、新手必踩的坑，但随着 flexbox 和 grid 的普及，居中已不再是难题。' +
            '理解居中方案的关键在于区分**水平居中**与**垂直居中**，以及元素是**定宽高**还是**自适应**。\n\n' +
            '水平居中相对简单：块级元素用 `margin: 0 auto`；行内/行内块元素在父级设 `text-align: center`。' +
            '垂直居中才是历史难题——在 flexbox 出现前，需要用 `vertical-align`、`line-height`、`absolute + 负 margin`、`table-cell` 等各种技巧，且往往需要知道元素尺寸。\n\n' +
            '现代居中方案的演进：`table-cell`（2000s）→ `absolute + transform`（2010s）→ `flexbox`（2015+）→ `grid place-items`（2017+）。' +
            '如今 90% 的场景用 flexbox 或 grid 一两行解决，但在模态框、tooltip、需脱离文档流的场景，absolute 方案仍有用武之地。\n\n' +
            '掌握多种居中方案的价值在于：理解每种方案的适用场景与副作用，在老项目维护、特殊布局需求时能灵活应对。\n\n' +
            '## 语法说明\n\n' +
            '```css\n' +
            '/* === 水平居中 === */\n' +
            '/* 1. 块级元素：左右 margin auto */\n' +
            '.block { width: 200px; margin: 0 auto; }\n' +
            '/* 2. 行内/行内块：父级 text-align */\n' +
            '.parent { text-align: center; }\n' +
            '\n' +
            '/* === 垂直居中（现代方案） === */\n' +
            '/* 方案一：flexbox（首选） */\n' +
            '.parent {\n' +
            '  display: flex;\n' +
            '  align-items: center;      /* 交叉轴居中 = 垂直居中 */\n' +
            '  justify-content: center;  /* 主轴居中 = 水平居中 */\n' +
            '}\n' +
            '/* 方案二：grid place-items（最简） */\n' +
            '.parent {\n' +
            '  display: grid;\n' +
            '  place-items: center;      /* align-items + justify-items 简写 */\n' +
            '}\n' +
            '\n' +
            '/* === 垂直居中（传统方案） === */\n' +
            '/* 方案三：absolute + transform（无需知道尺寸） */\n' +
            '.child {\n' +
            '  position: absolute;\n' +
            '  top: 50%; left: 50%;\n' +
            '  transform: translate(-50%, -50%); /* 自身尺寸的 -50% */\n' +
            '}\n' +
            '/* 方案四：absolute + margin auto（需已知宽高） */\n' +
            '.child {\n' +
            '  position: absolute;\n' +
            '  top: 0; right: 0; bottom: 0; left: 0; /* 四向撑满 */\n' +
            '  margin: auto;                          /* 自动分配剩余空间 */\n' +
            '  width: 200px; height: 100px;           /* 必须有宽高 */\n' +
            '}\n' +
            '/* 方案五：absolute + 负 margin（需已知宽高） */\n' +
            '.child {\n' +
            '  position: absolute;\n' +
            '  top: 50%; left: 50%;\n' +
            '  width: 200px; height: 100px;\n' +
            '  margin-top: -50px;  /* 高度的一半 */\n' +
            '  margin-left: -100px; /* 宽度的一半 */\n' +
            '}\n' +
            '/* 方案六：table-cell（兼容老浏览器） */\n' +
            '.parent {\n' +
            '  display: table-cell;\n' +
            '  vertical-align: middle;\n' +
            '  text-align: center;\n' +
            '}\n' +
            '/* 方案七：line-height（单行文本） */\n' +
            '.single-line { height: 50px; line-height: 50px; text-align: center; }\n' +
            '```\n\n' +
            '## 居中方案对比表\n\n' +
            '| 方案 | 代码量 | 是否需知尺寸 | 副作用 | 适用场景 |\n' +
            '| --- | --- | --- | --- | --- |\n' +
            '| flexbox | 3 行 | 否 | 父元素子项布局变化 | 通用首选 |\n' +
            '| grid place-items | 2 行 | 否 | 父元素变 grid | 通用，最简 |\n' +
            '| absolute + transform | 4 行 | 否 | 脱离文档流 | 模态框、tooltip |\n' +
            '| absolute + margin auto | 5 行 | 是（需宽高） | 脱离文档流 | 已知尺寸的弹层 |\n' +
            '| absolute + 负 margin | 6 行 | 是（需宽高） | 脱离文档流 | 老项目兼容 |\n' +
            '| table-cell | 3 行 | 否 | 行为类似 td | 老浏览器兼容 |\n' +
            '| line-height | 1 行 | 否 | 仅限单行文本 | 单行按钮、标签 |\n' +
            '| margin: 0 auto | 1 行 | 是（需 width） | 仅水平居中 | 块级元素水平居中 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：flex 与 grid 居中对比\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  .row { display: flex; gap: 20px; }\n' +
            '  .parent {\n' +
            '    width: 200px; height: 150px;\n' +
            '    background: #eee;\n' +
            '    border: 2px dashed #999;\n' +
            '  }\n' +
            '  .child {\n' +
            '    background: coral; color: white;\n' +
            '    padding: 12px 20px;\n' +
            '    border-radius: 4px;\n' +
            '  }\n' +
            '  /* flex 居中 */\n' +
            '  .flex { display: flex; align-items: center; justify-content: center; }\n' +
            '  /* grid 居中（最简） */\n' +
            '  .grid { display: grid; place-items: center; }\n' +
            '  p { text-align: center; margin: 5px; font-size: 14px; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="row">\n' +
            '    <div>\n' +
            '      <div class="parent flex"><div class="child">flex 居中</div></div>\n' +
            '      <p>flex 三行属性</p>\n' +
            '    </div>\n' +
            '    <div>\n' +
            '      <div class="parent grid"><div class="child">grid 居中</div></div>\n' +
            '      <p>grid 两行属性</p>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例二：absolute + transform 模态框居中\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  .modal-overlay {\n' +
            '    position: fixed;\n' +
            '    top: 0; left: 0;\n' +
            '    width: 100%; height: 100%;\n' +
            '    background: rgba(0,0,0,0.5);\n' +
            '    /* 用 flex 让模态框居中也可以 */\n' +
            '    display: flex;\n' +
            '    align-items: center;\n' +
            '    justify-content: center;\n' +
            '  }\n' +
            '  .modal {\n' +
            '    /* 方案三：absolute + transform，无需知道尺寸 */\n' +
            '    position: absolute;\n' +
            '    top: 50%; left: 50%;\n' +
            '    transform: translate(-50%, -50%);\n' +
            '    background: white;\n' +
            '    padding: 30px;\n' +
            '    border-radius: 8px;\n' +
            '    width: 80%; max-width: 400px;\n' +
            '    box-shadow: 0 10px 30px rgba(0,0,0,0.3);\n' +
            '  }\n' +
            '  .modal h3 { margin: 0 0 10px; }\n' +
            '  .modal p { margin: 0 0 20px; color: #666; }\n' +
            '  .modal .btn { background: #007bff; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="modal-overlay">\n' +
            '    <div class="modal">\n' +
            '      <h3>模态框标题</h3>\n' +
            '      <p>用 absolute + transform 居中，无需知道模态框尺寸。</p>\n' +
            '      <button class="btn">确定</button>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例三：多种居中场景实战\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  /* 单行文本居中：line-height = height */\n' +
            '  .btn {\n' +
            '    display: inline-block;\n' +
            '    height: 40px; line-height: 40px;\n' +
            '    padding: 0 20px;\n' +
            '    background: #28a745; color: white;\n' +
            '    text-decoration: none;\n' +
            '    border-radius: 4px;\n' +
            '  }\n' +
            '  /* 块级元素水平居中：margin auto */\n' +
            '  .container {\n' +
            '    width: 80%;\n' +
            '    margin: 20px auto;  /* 上下 20px，左右 auto 居中 */\n' +
            '    background: #f8f9fa;\n' +
            '    padding: 20px;\n' +
            '    text-align: center;\n' +
            '  }\n' +
            '  /* 空状态居中：flex 列方向 */\n' +
            '  .empty {\n' +
            '    display: flex;\n' +
            '    flex-direction: column;  /* 列方向 */\n' +
            '    align-items: center;     /* 水平居中 */\n' +
            '    justify-content: center; /* 垂直居中 */\n' +
            '    height: 200px;\n' +
            '    color: #999;\n' +
            '  }\n' +
            '  .empty .icon { font-size: 48px; margin-bottom: 10px; }\n' +
            '  /* 行内块居中：父级 text-align */\n' +
            '  .badge-group { text-align: center; padding: 20px; }\n' +
            '  .badge {\n' +
            '    display: inline-block;\n' +
            '    padding: 4px 10px;\n' +
            '    margin: 0 4px;\n' +
            '    background: #007bff; color: white;\n' +
            '    border-radius: 12px;\n' +
            '    font-size: 12px;\n' +
            '  }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <a href="#" class="btn">单行按钮（line-height 居中）</a>\n' +
            '  <div class="container">块级元素水平居中（margin: auto）</div>\n' +
            '  <div class="empty">\n' +
            '    <div class="icon">📭</div>\n' +
            '    <div>暂无数据（flex 列方向居中）</div>\n' +
            '  </div>\n' +
            '  <div class="badge-group">\n' +
            '    <span class="badge">标签1</span>\n' +
            '    <span class="badge">标签2</span>\n' +
            '    <span class="badge">标签3</span>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **flex 居中需父元素有高度**：若父元素高度由内容撑开（无固定高度），垂直居中看不出效果。常配 `height` 或 `min-height`。\n' +
            '2. **absolute 居中需父元素 `position: relative`**：否则子元素相对最近的定位祖先或视口定位，可能跑到页面顶部。`position: fixed` 则相对视口（适合全屏模态框）。\n' +
            '3. **transform 居中不影响布局**：`translate(-50%, -50%)` 是视觉位移，不改变元素占位，因此不会推开其他元素；margin auto 方案则会改变占位。\n' +
            '4. **margin: 0 auto 需 width**：块级元素默认 width: 100%，若不设 width，margin auto 无居中效果（因为已占满）。flex/grid 内的子项也无需此技巧。\n' +
            '5. **line-height 仅限单行**：多行文本用 line-height 居中会错位，应改用 flex 或 table-cell。\n' +
            '6. **grid place-items 是最简写法**：`place-items: center` 等价于 `align-items: center; justify-items: center;`，但比 flex 的 `align-items + justify-content` 少一行。注意 grid 用 `justify-items`，flex 用 `justify-content`。\n' +
            '7. **flex 与 grid 的差异**：flex 居中时父元素成为 flex 容器，子项的 margin/padding 表现可能变化；grid 的 place-items 更纯粹。两者都支持响应式居中（配合 `min-height: 100vh` 实现全屏居中）。\n\n' +
            '## 实际应用\n\n' +
            '- **登录框居中**：`min-height: 100vh; display: flex; align-items: center; justify-content: center;` 实现全屏垂直居中登录页。\n' +
            '- **模态框/弹窗**：`position: fixed` + flex 或 absolute + transform，让弹窗在视口居中。\n' +
            '- **空状态/加载中**：flex 列方向居中（图标 + 文字 + 按钮），常用于列表为空、加载骨架屏。\n' +
            '- **单行按钮**：`height: 40px; line-height: 40px;` 实现单行文本垂直居中，简单高效。\n' +
            '- **页脚版权**：`text-align: center` 让行内内容水平居中，最简单的水平居中。\n' +
            '- **badge/tag 组**：父级 `text-align: center`，子项 `display: inline-block`，实现一组标签居中排列。\n\n' +
            '## 扩展知识\n\n' +
            '**`margin: auto` 在 flex 中的妙用**：在 flex 容器内，子项设 `margin: auto` 会让它在剩余空间中自动居中（四个方向 auto）。' +
            '例如 `.parent { display: flex; } .child { margin: auto; }` 实现居中，比 `align-items + justify-content` 更灵活——可以让单个子项居中而不影响其他子项。\n\n' +
            '**`inset` 简写**：`top: 0; right: 0; bottom: 0; left: 0;` 可简写为 `inset: 0;`，配合 `margin: auto` 实现已知宽高的居中：`.child { position: absolute; inset: 0; margin: auto; width: 200px; height: 100px; }`。\n\n' +
            '**垂直居中的历史**：早期用 `<table>` 的 `vertical-align: middle`（天然垂直居中），后来用 `display: table-cell` 模拟。flexbox 出现后这些技巧逐渐淘汰，但理解 `vertical-align` 对处理 `inline-block` 基线对齐仍有价值。\n\n' +
            '**`align-self` 单个对齐**：flex/grid 中若想让某个子项单独居中而不影响其他项，用 `.child { align-self: center; justify-self: center; }`（grid）或 `.child { margin: auto; }`（flex）。\n\n' +
            '现代项目 90% 的居中用 flexbox 或 grid，掌握这两种即可应对绝大多数场景；absolute 方案在模态框、tooltip 等脱离文档流场景仍不可替代。',
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
            '## 概念详解\n\n' +
            '「清除浮动」是 float 布局时代的经典问题。当父元素内的子元素都设置了 `float`，父元素的高度会**塌陷为 0**——因为浮动元素脱离了文档流，不再撑起父元素高度。' +
            '这会导致后续元素（如页脚）错位、背景/边框失效等布局问题。\n\n' +
            'float 最初的设计目的并非布局，而是**文字环绕图片**（类似 Word 中图片浮动后文字环绕）。但在 flexbox/grid 普及前，开发者「借用」float 实现多列布局，由此产生了清除浮动的需求。' +
            '理解这一点很重要：float 布局本身就是一种「hack」，清除浮动则是为这个 hack 打补丁。\n\n' +
            '清除浮动的本质是**让父元素包含浮动子元素的高度**。实现方式有多种演进：' +
            '空标签 + clear → overflow:hidden → clearfix（::after）→ display: flow-root。' +
            '每种方法各有取舍——简洁性、副作用、兼容性。\n\n' +
            '现代最佳实践：**新项目用 flex/grid 替代 float 布局**，float 仅用于其本职工作（文字环绕，此时无需清除）。但在维护老项目时，clearfix 和 flow-root 仍是必备知识。\n\n' +
            '## 语法说明\n\n' +
            '```css\n' +
            '/* === 方法一：overflow: hidden（简单但有副作用） === */\n' +
            '.parent {\n' +
            '  overflow: hidden; /* 或 auto / scroll */\n' +
            '  /* 原理：触发 BFC，包含浮动子高度 */\n' +
            '  /* 副作用：会裁剪溢出的子元素（如下拉菜单、tooltip） */\n' +
            '}\n' +
            '\n' +
            '/* === 方法二：clearfix hack（推荐，老项目标配） === */\n' +
            '.clearfix::after {\n' +
            '  content: "";      /* 必须有 content，否则伪元素不生成 */\n' +
            '  display: block;   /* 块级才能 clear */\n' +
            '  clear: both;      /* 清除左右浮动 */\n' +
            '}\n' +
            '/* 更严谨的 clearfix（含 IE 兼容，现代浏览器可省略 zoom） */\n' +
            '.clearfix { zoom: 1; } /* IE6/7 触发 hasLayout */\n' +
            '.clearfix::after { content: ""; display: table; clear: both; }\n' +
            '\n' +
            '/* === 方法三：display: flow-root（现代方案，推荐） === */\n' +
            '.parent {\n' +
            '  display: flow-root; /* 专为清除浮动设计，创建 BFC，无副作用 */\n' +
            '}\n' +
            '\n' +
            '/* === 方法四：空标签 + clear（已淘汰） === */\n' +
            '<div class="clear" style="clear:both"></div> <!-- 额外 HTML，不推荐 -->\n' +
            '\n' +
            '/* === 方法五：父元素也浮动（不推荐，问题转移） === */\n' +
            '.parent { float: left; width: 100%; } /* 问题转移给父元素的父级 */\n' +
            '```\n\n' +
            '## 清除浮动方法对比表\n\n' +
            '| 方法 | 代码 | 副作用 | 兼容性 | 推荐度 |\n' +
            '| --- | --- | --- | --- | --- |\n' +
            '| overflow: hidden | 1 行 | 裁剪溢出子元素 | 全兼容 | ⭐⭐ |\n' +
            '| clearfix (::after) | 3 行（CSS） | 无 | 全兼容 | ⭐⭐⭐⭐ 老项目首选 |\n' +
            '| display: flow-root | 1 行 | 无 | IE 不支持 | ⭐⭐⭐⭐⭐ 新项目首选 |\n' +
            '| 空标签 + clear | 1 行（HTML） | 额外 DOM 节点 | 全兼容 | ⭐ 已淘汰 |\n' +
            '| 父元素浮动 | 1 行 | 问题转移 | 全兼容 | ⭐ 不推荐 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：高度塌陷问题演示与 clearfix 解决\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  /* 不清除浮动：父元素塌陷 */\n' +
            '  .box-bad { background: #fee; border: 1px solid #f99; }\n' +
            '  .box-bad .left { float: left; width: 40%; background: #faa; padding: 10px; }\n' +
            '  .box-bad .right { float: right; width: 40%; background: #aaf; padding: 10px; }\n' +
            '\n' +
            '  /* clearfix：::after 撑起父高度 */\n' +
            '  .clearfix::after {\n' +
            '    content: "";\n' +
            '    display: block;\n' +
            '    clear: both;\n' +
            '  }\n' +
            '  .box-good { background: #efe; border: 1px solid #3c3; }\n' +
            '  .box-good .left { float: left; width: 40%; background: #afa; padding: 10px; }\n' +
            '  .box-good .right { float: right; width: 40%; background: #aaf; padding: 10px; }\n' +
            '  p { margin: 10px 0; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <p>❌ 未清除浮动（父高度塌陷，边框包裹不住子元素）：</p>\n' +
            '  <div class="box-bad">\n' +
            '    <div class="left">左浮动</div>\n' +
            '    <div class="right">右浮动</div>\n' +
            '  </div>\n' +
            '  <p>✅ clearfix 清除浮动（父高度正常）：</p>\n' +
            '  <div class="box-good clearfix">\n' +
            '    <div class="left">左浮动</div>\n' +
            '    <div class="right">右浮动</div>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例二：flow-root 现代方案 vs overflow:hidden\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  .box {\n' +
            '    width: 300px;\n' +
            '    margin: 20px 0;\n' +
            '    border: 2px solid #333;\n' +
            '  }\n' +
            '  .left { float: left; width: 100px; background: #faa; padding: 10px; }\n' +
            '\n' +
            '  /* overflow:hidden 会裁剪溢出的下拉菜单 */\n' +
            '  .overflow {\n' +
            '    overflow: hidden;\n' +
            '    position: relative;\n' +
            '  }\n' +
            '  .dropdown {\n' +
            '    position: absolute;\n' +
            '    top: 100%; left: 0;\n' +
            '    background: #0056b3; color: white;\n' +
            '    padding: 10px;\n' +
            '    width: 150px;\n' +
            '  }\n' +
            '\n' +
            '  /* flow-root 不裁剪溢出内容 */\n' +
            '  .flow-root {\n' +
            '    display: flow-root;\n' +
            '    position: relative;\n' +
            '  }\n' +
            '  .note { font-size: 12px; color: #666; margin: 5px 0; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="box overflow">\n' +
            '    <div class="left">float</div>\n' +
            '    <div class="dropdown">下拉菜单（被 overflow:hidden 裁剪！）</div>\n' +
            '  </div>\n' +
            '  <p class="note">↑ overflow:hidden 清除浮动，但裁剪了下拉菜单</p>\n' +
            '\n' +
            '  <div class="box flow-root">\n' +
            '    <div class="left">float</div>\n' +
            '    <div class="dropdown">下拉菜单（正常显示！）</div>\n' +
            '  </div>\n' +
            '  <p class="note">↑ flow-root 清除浮动，不裁剪溢出内容</p>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例三：float 用于文字环绕（本职工作，无需清除）\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  .article {\n' +
            '    max-width: 400px;\n' +
            '    margin: 20px auto;\n' +
            '    padding: 20px;\n' +
            '    background: #f8f9fa;\n' +
            '    line-height: 1.6;\n' +
            '  }\n' +
            '  .article img {\n' +
            '    /* float 的本职：文字环绕图片 */\n' +
            '    float: left;\n' +
            '    width: 120px;\n' +
            '    margin: 0 15px 5px 0;\n' +
            '    border-radius: 4px;\n' +
            '  }\n' +
            '  /* 父元素 flow-root 包含浮动图片高度 */\n' +
            '  .article { display: flow-root; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="article">\n' +
            '    <img src="https://picsum.photos/120/120" alt="配图">\n' +
            '    <p>这是文章正文，图片浮动到左侧，文字自然环绕在图片右侧和下方。' +
            '这是 float 属性最初的设计目的——实现类似报纸杂志的文字环绕效果。</p>\n' +
            '    <p>当文字足够多时，会填满图片右侧的空间，并继续在图片下方流动。' +
            '现代布局已用 flex/grid 替代 float 做布局，但文字环绕仍是 float 的最佳用途。</p>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **clearfix 的 content 不能省**：`::after` 必须有 `content: ""`（即使是空字符串），否则伪元素不会生成，clear 无效。\n' +
            '2. **clearfix 的 display**：`display: block` 或 `display: table` 均可（table 兼容性更好，能处理 IE 的 margin 合并）。现代浏览器用 block 即可。\n' +
            '3. **overflow:hidden 的副作用**：会裁剪溢出的子元素（下拉菜单、tooltip、绝对定位元素），且可能影响子元素的 `position: sticky`。需溢出内容的场景避免用此法。\n' +
            '4. **flow-root 兼容性**：IE 11 不支持 `display: flow-root`。若需兼容 IE，用 clearfix。现代浏览器（Chrome 65+、Firefox 53+、Safari 11+）均已支持。\n' +
            '5. **clear: both vs left/right**：`clear: both` 清除左右两侧浮动，最通用。`clear: left` 只清除左浮动，`clear: right` 只清除右浮动，特殊场景使用。\n' +
            '6. **float 布局已过时**：现代项目用 flex/grid 做布局，float 仅用于文字环绕。不要在新项目用 float 做多列布局。\n' +
            '7. **clearfix 的位置**：clearfix 加在**父元素**上，通过 `::after` 伪元素在父元素末尾插入一个清除浮动的块级元素，撑起父高度。不需要改 HTML 结构。\n\n' +
            '## 实际应用\n\n' +
            '- **老项目维护**：遇到 float 布局的父元素塌陷，给父元素加 `clearfix` 类（::after 方案），不改 HTML。\n' +
            '- **新项目清除浮动**：用 `display: flow-root` 一行解决，无副作用，代码最简。\n' +
            '- **文字环绕**：图片 `float: left` + `margin` 实现文字环绕，父元素加 flow-root 包含图片高度。\n' +
            '- **图文混排**：博客/新闻详情页，配图浮动，正文环绕，是 float 的正当用途。\n' +
            '- **避免 overflow:hidden 误用**：若父元素内有下拉菜单、tooltip 等溢出内容，不要用 overflow:hidden 清浮动，改用 clearfix 或 flow-root。\n\n' +
            '## 扩展知识\n\n' +
            '**clearfix 的演进史**：最早用空 `<div style="clear:both">` 标签（污染 HTML）；后来用 `overflow: hidden`（有副作用）；' +
            '2006 年 Nicolas Gallagher 提出 micro clearfix hack：`.cf:before, .cf:after { content:""; display:table; } .cf:after { clear:both; }`（处理 margin 合并）；' +
            '2017 年 `display: flow-root` 标准化，终于有了无副作用的官方方案。\n\n' +
            '**BFC 与清除浮动的关系**：清除浮动的本质是让父元素成为 BFC（块级格式化上下文）。BFC 的一个特性是「包含浮动子元素的高度」。' +
            '`overflow: hidden`、`display: flow-root`、`display: flex/grid` 都会触发 BFC，因此都能清除浮动。下一课将深入讲解 BFC。\n\n' +
            '**`clear` 属性**：`clear: both` 也可直接用在浮动元素之后的兄弟元素上，如 `<div style="clear:both"></div>`，但需要额外 HTML 节点，不推荐。clearfix 用伪元素替代了这一额外节点。\n\n' +
            '**`display: flow-root` vs `display: block`**：flow-root 创建 BFC（包含浮动、阻止 margin 合并），block 不创建。flow-root 是「能清除浮动的 block」，行为类似 block 但多了 BFC 特性。\n\n' +
            '清除浮动是 CSS 历史的产物——理解它有助于维护老项目，但新项目应从设计上规避 float 布局，用 flex/grid 取而代之。',
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
            '## 概念详解\n\n' +
            'BFC（Block Formatting Context，块级格式化上下文）是 CSS 视觉渲染中的一个**独立渲染区域**，' +
            '内部元素的布局不影响外部，外部也不影响内部。可以把它理解为一个「隔离的布局容器」——里面的元素怎么折腾（浮动、margin 合并），都不会溢出影响到外面的元素。\n\n' +
            'BFC 是 W3C CSS2.1 规范中的核心概念，它解释了许多 CSS 的「奇怪」行为：' +
            '为什么 `overflow: hidden` 能清除浮动？因为触发了 BFC，BFC 会包含浮动子元素的高度。' +
            '为什么相邻块级元素的 margin 会合并？因为它们在同一个 BFC 内。' +
            '为什么 flex/grid 子元素的 margin 不合并？因为 flex/grid 容器是新的 BFC（更准确地说是 flex 格式化上下文）。\n\n' +
            '理解 BFC 的价值不在于死记触发条件，而在于**建立 CSS 布局的心智模型**——知道哪些元素在同一个「布局容器」内，它们的 margin、浮动、定位会如何相互影响。' +
            '这是从「会用 CSS」到「精通 CSS」的分水岭。\n\n' +
            '正常流中，根元素 `<html>` 创建一个初始 BFC，所有块级元素默认在这个 BFC 内布局。' +
            '通过特定属性（如 overflow、display、position、float）可以让其他元素也创建 BFC，从而获得「隔离」特性。\n\n' +
            '## 语法说明\n\n' +
            '```css\n' +
            '/* === 创建 BFC 的方式（触发条件） === */\n' +
            '\n' +
            '/* 1. 根元素 html 天然是 BFC */\n' +
            '\n' +
            '/* 2. float 非 none */\n' +
            '.bfc { float: left; }   /* 触发 BFC，但本身脱离文档流 */\n' +
            '\n' +
            '/* 3. position 为 absolute 或 fixed */\n' +
            '.bfc { position: absolute; }  /* 触发 BFC，但脱离文档流 */\n' +
            '\n' +
            '/* 4. display 为特定值 */\n' +
            '.bfc { display: flow-root; }  /* 专为 BFC 设计，无副作用（推荐） */\n' +
            '.bfc { display: flex; }       /* flex 容器（严格说是 FFC，但有 BFC 特性） */\n' +
            '.bfc { display: grid; }       /* grid 容器（GFC，有 BFC 特性） */\n' +
            '.bfc { display: inline-block; } /* 触发 BFC，但变行内块 */\n' +
            '.bfc { display: table-cell; } /* 触发 BFC */\n' +
            '\n' +
            '/* 5. overflow 非 visible */\n' +
            '.bfc { overflow: hidden; }    /* 最常用，但有裁剪副作用 */\n' +
            '.bfc { overflow: auto; }      /* 同上 */\n' +
            '.bfc { overflow: scroll; }    /* 同上 */\n' +
            '\n' +
            '/* 6. 其他：contain: layout/content/paint，column-count 等 */\n' +
            '```\n\n' +
            '## BFC 触发条件表\n\n' +
            '| 属性 | 值 | 副作用 | 推荐度 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| display | flow-root | 无 | ⭐⭐⭐⭐⭐ 首选 |\n' +
            '| display | flex / grid | 容器变 flex/grid 布局 | ⭐⭐⭐⭐ 顺带触发 |\n' +
            '| overflow | hidden / auto / scroll | 裁剪溢出内容 | ⭐⭐⭐ 常用 |\n' +
            '| display | inline-block | 变行内块，有空白符问题 | ⭐⭐ |\n' +
            '| float | left / right | 脱离文档流 | ⭐ 不推荐 |\n' +
            '| position | absolute / fixed | 脱离文档流 | ⭐ 不推荐 |\n' +
            '| display | table-cell | 行为类似 td | ⭐⭐ 老项目 |\n\n' +
            '## BFC 三大作用表\n\n' +
            '| 作用 | 原理 | 解决的问题 | 触发方式 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| 清除浮动 | BFC 包含浮动子元素高度 | 父元素高度塌陷 | overflow/flow-root |\n' +
            '| 阻止 margin 合并 | 不同 BFC 的元素不合并 margin | 兄弟/父子 margin 合并 | 包裹一层 BFC |\n' +
            '| 阻止文字环绕 | BFC 不与浮动元素重叠 | 文字环绕浮动图片 | 文字容器设 BFC |\n\n' +
            '## 代码示例\n\n' +
            '示例一：BFC 清除浮动（包含浮动子高度）\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  /* 未触发 BFC：父元素高度塌陷 */\n' +
            '  .parent-bad { background: #fee; border: 1px solid #f99; }\n' +
            '  /* 触发 BFC：overflow:hidden 包含浮动子高度 */\n' +
            '  .parent-good {\n' +
            '    overflow: hidden;  /* 创建 BFC */\n' +
            '    background: #efe; border: 1px solid #3c3;\n' +
            '  }\n' +
            '  .child { float: left; width: 40%; background: #faa; padding: 10px; }\n' +
            '  p { margin: 10px 0; font-size: 14px; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <p>❌ 未创建 BFC（父高度塌陷）：</p>\n' +
            '  <div class="parent-bad">\n' +
            '    <div class="child">浮动子元素</div>\n' +
            '  </div>\n' +
            '  <p>✅ 创建 BFC（父高度正常）：</p>\n' +
            '  <div class="parent-good">\n' +
            '    <div class="child">浮动子元素</div>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例二：BFC 阻止 margin 合并\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  /* 同一 BFC 内相邻块级元素 margin 合并（取较大值） */\n' +
            '  .a { margin-bottom: 30px; background: #faa; padding: 10px; }\n' +
            '  .b { margin-top: 20px; background: #aaf; padding: 10px; }\n' +
            '  /* 合并后间距 = max(30, 20) = 30px */\n' +
            '\n' +
            '  /* 用 BFC 包裹后不合并：间距 = 30 + 20 = 50px */\n' +
            '  .wrap { overflow: hidden; }  /* 创建 BFC */\n' +
            '  .c { margin-bottom: 30px; background: #afa; padding: 10px; }\n' +
            '  .d { margin-top: 20px; background: #ffa; padding: 10px; }\n' +
            '\n' +
            '  /* 父子 margin 合并也可用 BFC 阻止 */\n' +
            '  .parent-bfc { overflow: hidden; background: #eef; }\n' +
            '  .child-margin { margin-top: 30px; background: #cef; padding: 10px; }\n' +
            '  /* 不包裹 BFC 时，子 margin-top 会「穿透」父元素 */\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="a">A（margin-bottom: 30px）</div>\n' +
            '  <div class="b">B（margin-top: 20px，合并后间距 30px）</div>\n' +
            '  <hr>\n' +
            '  <div class="wrap"><div class="c">C（被 BFC 包裹）</div></div>\n' +
            '  <div class="d">D（间距为 30+20=50px，不合并）</div>\n' +
            '  <hr>\n' +
            '  <div class="parent-bfc"><div class="child-margin">子元素（margin 不穿透父）</div></div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例三：BFC 阻止文字环绕（自适应两栏布局）\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  /* 经典两栏：左浮动侧栏 + 右主区 */\n' +
            '  .sidebar {\n' +
            '    float: left;\n' +
            '    width: 200px;\n' +
            '    background: #faa;\n' +
            '    padding: 10px;\n' +
            '    min-height: 150px;\n' +
            '  }\n' +
            '  /* ❌ 不触发 BFC：主区文字环绕侧栏（侧栏高时文字流到下方） */\n' +
            '  .main-bad {\n' +
            '    background: #aaf;\n' +
            '    padding: 10px;\n' +
            '    min-height: 150px;\n' +
            '  }\n' +
            '  /* ✅ 触发 BFC：主区不与浮动侧栏重叠，形成独立列 */\n' +
            '  .main-good {\n' +
            '    overflow: hidden;  /* 创建 BFC，不与浮动元素重叠 */\n' +
            '    background: #afa;\n' +
            '    padding: 10px;\n' +
            '    min-height: 150px;\n' +
            '  }\n' +
            '  .row { margin-bottom: 20px; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="row">\n' +
            '    <div class="sidebar">侧栏（浮动）</div>\n' +
            '    <div class="main-bad">主区（未触发 BFC，文字环绕侧栏）</div>\n' +
            '  </div>\n' +
            '  <div class="row">\n' +
            '    <div class="sidebar">侧栏（浮动）</div>\n' +
            '    <div class="main-good">主区（触发 BFC，独立成列，不重叠）</div>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **不必死记所有触发条件**：日常开发记住 `overflow: hidden` 和 `display: flow-root` 两个即可覆盖 90% 场景。flow-root 是现代首选（无副作用）。\n' +
            '2. **margin 合并的条件**：只有**同一 BFC 内**的相邻块级元素（兄弟或父子）才会合并 margin。不同 BFC 间不合并。flex/grid 容器的子元素天然不合并（因为是新的格式化上下文）。\n' +
            '3. **BFC 不是万能隔离**：BFC 隔离的是布局（浮动、margin），但**不隔离**定位（absolute 子元素仍可溢出 BFC）、不隔离 z-index（层叠上下文才管这个）。\n' +
            '4. **overflow: hidden 的副作用**：会裁剪溢出子元素（下拉菜单、tooltip），还会创建新的层叠上下文（影响 z-index）。需溢出内容时改用 flow-root。\n' +
            '5. **flex/grid 严格来说不是 BFC**：flex 创建 FFC（Flex Formatting Context），grid 创建 GFC（Grid Formatting Context），但它们都具备 BFC 的「包含浮动」「不合并 margin」特性，可视为 BFC 的超集。\n' +
            '6. **BFC 与层叠上下文**：两者是不同概念——BFC 管布局隔离，层叠上下文管 z-index 层级。某些属性（如 overflow: hidden、opacity < 1）会同时触发两者。\n\n' +
            '## 实际应用\n\n' +
            '- **清除浮动**：父元素 `overflow: hidden` 或 `display: flow-root` 创建 BFC，包含浮动子高度（见上一课）。\n' +
            '- **阻止 margin 合并**：用 BFC 容器包裹元素，使其与外部不合并 margin。常用于卡片间需要精确间距时。\n' +
            '- **自适应两栏布局**：左栏浮动，右栏 `overflow: hidden` 触发 BFC 不与浮动重叠，形成独立列（现代用 flex/grid 更简单）。\n' +
            '- **防止子 margin 穿透**：父元素设 BFC，子元素的 margin-top 不会「穿透」父元素上边框。\n' +
            '- **解释 flex 子元素行为**：flex 容器是 FFC，子元素 margin 不合并、浮动子元素仍参与 flex 布局——这些都是 BFC/FFC 特性的体现。\n\n' +
            '## 扩展知识\n\n' +
            '**格式化上下文家族**：BFC 只是其中之一，CSS 还定义了：\n' +
            '- IFC（Inline Formatting Context）：行内格式化上下文，行内元素在其中布局。\n' +
            '- FFC（Flex Formatting Context）：flex 容器创建，flex 项在其中布局。\n' +
            '- GFC（Grid Formatting Context）：grid 容器创建，grid 项在其中布局。\n' +
            '它们都是「隔离的布局区域」，规则各有不同，但核心思想一致：内部布局不影响外部。\n\n' +
            '**margin 合并的完整规则**：相邻块级元素 margin 合并需满足三个条件——同一 BFC、垂直方向相邻（兄弟或父子）、没有 border/padding/inline content 隔开。' +
            '阻止合并的方法：用 BFC 包裹、给父元素加 border/padding、给父元素加 overflow: hidden、用 flex/grid。\n\n' +
            '**`display: flow-root` 的意义**：在 flow-root 出现前，开发者只能用 overflow/flex/inline-block 等「有副作用」的方式触发 BFC。' +
            'flow-root 是 CSS 规范专为「我只要 BFC，不要其他副作用」设计的，是清除浮动/隔离布局的最佳选择。\n\n' +
            '**BFC 与包含块**：BFC 元素会成为其 absolute 子元素的包含块（position: absolute 的子元素相对 BFC 父元素定位）。' +
            '这是为什么给父元素 overflow: hidden 后，absolute 子元素相对父元素而非视口定位。\n\n' +
            'BFC 是 CSS 最抽象但也最强大的概念之一——理解它后，浮动、margin、布局隔离等问题都会豁然开朗。',
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
            '## 概念详解\n\n' +
            '大型项目的 CSS 容易失控——三个月后没人敢删旧样式（怕影响其他页面）、新样式靠 `!important` 强行覆盖、命名冲突随处可见、选择器越嵌越深。' +
            'CSS 架构方法论就是为解决这些问题而生的**命名与组织规范**，让 CSS 像编程语言一样可维护、可协作。\n\n' +
            'CSS 难维护的根源在于其**全局性**：所有样式都在同一作用域，任何选择器都可能影响整个页面。' +
            '方法论通过规范命名（如 BEM）或工具隔离（如 CSS Modules）来对抗全局性，让样式「局部化」「可预测」。\n\n' +
            '主流方法论分为两大流派：\n' +
            '- **命名约定派**：BEM、OOCSS、SMACSS、ITCSS——靠人工遵守命名规则，适用于传统项目。\n' +
            '- **工具隔离派**：CSS Modules、CSS-in-JS、Tailwind——靠构建工具自动隔离或原子化，适用于现代框架项目。\n\n' +
            '选对方法论，是从「能写 CSS」到「能维护大型项目 CSS」的必修课。没有方法论的 CSS 注定会沦为「死代码堆」。\n\n' +
            '## 语法说明\n\n' +
            '```css\n' +
            '/* === BEM：Block Element Modifier === */\n' +
            '/* 命名格式：.block__element--modifier */\n' +
            '.card { }                  /* 块：独立组件 */\n' +
            '.card__title { }           /* 元素：块内部分，双下划线 */\n' +
            '.card__body { }            /* 元素 */\n' +
            '.card--featured { }        /* 修饰符：状态变体，双连字符 */\n' +
            '.card__title--large { }    /* 元素的修饰符 */\n' +
            '/* HTML: <div class="card card--featured"><h3 class="card__title">...</h3></div> */\n' +
            '\n' +
            '/* === OOCSS：结构与皮肤分离 === */\n' +
            '/* 结构类：尺寸、布局 */\n' +
            '.btn { display: inline-block; padding: 8px 16px; border-radius: 4px; }\n' +
            '/* 皮肤类：颜色、视觉 */\n' +
            '.btn-primary { background: #3b82f6; color: #fff; }\n' +
            '.btn-danger { background: #ef4444; color: #fff; }\n' +
            '/* HTML: <button class="btn btn-primary">组合结构+皮肤</button> */\n' +
            '\n' +
            '/* === SMACSS：按类别组织文件 === */\n' +
            '/* base.css   —— 基础（reset、元素默认样式） */\n' +
            '/* layout.css —— 布局（header、footer、grid） */\n' +
            '/* module.css —— 模块（组件） */\n' +
            '/* state.css  —— 状态（.is-active、.is-hidden） */\n' +
            '/* theme.css  —— 主题（配色） */\n' +
            '\n' +
            '/* === CSS Modules（构建工具自动隔离） === */\n' +
            '/* Button.module.css */\n' +
            '.btn { background: blue; }  /* 编译后自动变成 .Button_btn__x7y2k */\n' +
            '/* React: import styles from "./Button.module.css"; <button className={styles.btn}> */\n' +
            '\n' +
            '/* === Tailwind（原子化工具类） === */\n' +
            '/* 不写 CSS，直接在 HTML 用工具类组合 */\n' +
            '/* <div class="flex items-center gap-4 p-4 bg-blue-500 text-white rounded">...</div> */\n' +
            '```\n\n' +
            '## 方法论对比表\n\n' +
            '| 方法论 | 核心思想 | 优点 | 缺点 | 适用场景 |\n' +
            '| --- | --- | --- | --- | --- |\n' +
            '| BEM | 块__元素--修饰符命名 | 命名清晰、扁平、低冲突 | 类名长 | 传统项目首选 |\n' +
            '| OOCSS | 结构与皮肤分离 | 复用性强、组合灵活 | 需手动拆分 | 组件库设计 |\n' +
            '| SMACSS | 按类别分文件 | 组织清晰 | 偏文件结构 | 中大型项目 |\n' +
            '| ITCSS | 倒三角分层 | 从通用到具体，优先级可控 | 学习曲线 | 大型企业项目 |\n' +
            '| CSS Modules | 编译时生成唯一类名 | 彻底避免冲突 | 依赖构建工具 | React/Vue 组件 |\n' +
            '| Tailwind | 原子化工具类 | 开发快、无需命名 | HTML 类多、需配置 | 追求效率的现代项目 |\n' +
            '| CSS-in-JS | JS 写 CSS | 动态样式、天然隔离 | 运行时开销 | React 生态 |\n\n' +
            '## BEM 命名规则表\n\n' +
            '| 概念 | 分隔符 | 示例 | 说明 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| Block（块） | 无 | .card / .nav / .user | 独立组件，可复用 |\n' +
            '| Element（元素） | __ | .card__title / .nav__item | 块内部分，不可独立使用 |\n' +
            '| Modifier（修饰符） | -- | .card--featured / .nav__item--active | 状态/外观变体 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：BEM 完整组件实战\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  /* 块：card */\n' +
            '  .card {\n' +
            '    border: 1px solid #ddd;\n' +
            '    border-radius: 8px;\n' +
            '    padding: 16px;\n' +
            '    max-width: 300px;\n' +
            '    margin-bottom: 12px;\n' +
            '  }\n' +
            '  /* 元素：card 的 title / body / footer */\n' +
            '  .card__title { font-size: 18px; font-weight: bold; margin: 0 0 8px; }\n' +
            '  .card__body { color: #555; line-height: 1.6; margin: 0 0 12px; }\n' +
            '  .card__footer { font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 8px; }\n' +
            '  /* 修饰符：featured 高亮、compact 紧凑 */\n' +
            '  .card--featured { border-color: #f59e0b; box-shadow: 0 0 0 2px #fde68a; }\n' +
            '  .card--featured .card__title { color: #b45309; }\n' +
            '  .card--compact { padding: 8px; }\n' +
            '  .card--compact .card__title { font-size: 14px; margin-bottom: 4px; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <div class="card">\n' +
            '    <h3 class="card__title">普通卡片</h3>\n' +
            '    <p class="card__body">标准样式</p>\n' +
            '    <div class="card__footer">2024-01-01</div>\n' +
            '  </div>\n' +
            '  <div class="card card--featured">\n' +
            '    <h3 class="card__title">推荐卡片</h3>\n' +
            '    <p class="card__body">通过修饰符高亮，无需重写结构样式</p>\n' +
            '    <div class="card__footer">2024-01-01</div>\n' +
            '  </div>\n' +
            '  <div class="card card--compact">\n' +
            '    <h3 class="card__title">紧凑卡片</h3>\n' +
            '    <p class="card__body">修饰符调整间距</p>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例二：OOCSS 结构与皮肤分离\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  /* 结构类：尺寸、布局、圆角（与颜色无关） */\n' +
            '  .btn {\n' +
            '    display: inline-block;\n' +
            '    padding: 8px 16px;\n' +
            '    border-radius: 4px;\n' +
            '    cursor: pointer;\n' +
            '    margin: 4px;\n' +
            '    font-size: 14px;\n' +
            '    border: 1px solid transparent;\n' +
            '    text-decoration: none;\n' +
            '  }\n' +
            '  /* 皮肤类：只管颜色与视觉 */\n' +
            '  .btn-primary { background: #3b82f6; color: #fff; }\n' +
            '  .btn-danger { background: #ef4444; color: #fff; }\n' +
            '  .btn-success { background: #22c55e; color: #fff; }\n' +
            '  .btn-ghost { background: transparent; border-color: #ccc; color: #333; }\n' +
            '  /* 尺寸修饰（也是结构） */\n' +
            '  .btn-sm { padding: 4px 8px; font-size: 12px; }\n' +
            '  .btn-lg { padding: 12px 24px; font-size: 16px; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <button class="btn btn-primary">Primary</button>\n' +
            '  <button class="btn btn-danger">Danger</button>\n' +
            '  <button class="btn btn-success">Success</button>\n' +
            '  <button class="btn btn-ghost">Ghost</button>\n' +
            '  <br>\n' +
            '  <button class="btn btn-primary btn-sm">小按钮</button>\n' +
            '  <button class="btn btn-primary btn-lg">大按钮</button>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '示例三：CSS Modules 与 Tailwind 对比\n\n' +
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<style>\n' +
            '  /* 模拟 CSS Modules：类名带哈希后缀，天然不冲突 */\n' +
            '  .Card_card__a1b2c {\n' +
            '    border: 1px solid #ddd;\n' +
            '    border-radius: 8px;\n' +
            '    padding: 16px;\n' +
            '    max-width: 300px;\n' +
            '  }\n' +
            '  .Card_title__x3y4z { font-size: 18px; font-weight: bold; margin: 0 0 8px; }\n' +
            '  .Card_body__m5n6p { color: #555; line-height: 1.6; }\n' +
            '\n' +
            '  /* 模拟 Tailwind：原子类组合，不写自定义 CSS */\n' +
            '  .tw-card {\n' +
            '    /* 实际项目中 Tailwind 这些都是工具类，直接写在 HTML class 里 */\n' +
            '    display: block;\n' +
            '    border-width: 1px;\n' +
            '    border-style: solid;\n' +
            '    border-color: #ddd;\n' +
            '    border-radius: 8px;\n' +
            '    padding: 16px;\n' +
            '    max-width: 300px;\n' +
            '  }\n' +
            '  /* Tailwind 的 HTML: <div class="border border-gray-300 rounded-lg p-4 max-w-sm">...</div> */\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <!-- CSS Modules 写法（类名自动生成） -->\n' +
            '  <div class="Card_card__a1b2c">\n' +
            '    <h3 class="Card_title__x3y4z">CSS Modules 卡片</h3>\n' +
            '    <p class="Card_body__m5n6p">类名带哈希，天然隔离</p>\n' +
            '  </div>\n' +
            '  <!-- Tailwind 写法（原子类组合，实际写在 HTML） -->\n' +
            '  <div class="tw-card">\n' +
            '    <h3 style="font-size:18px;font-weight:bold;margin:0 0 8px">Tailwind 卡片</h3>\n' +
            '    <p style="color:#555;line-height:1.6">原子类组合，无需命名</p>\n' +
            '  </div>\n' +
            '</body>\n' +
            '</html>\n' +
            '```\n\n' +
            '## 注意事项\n\n' +
            '1. **BEM 类名长是优点不是缺点**：`.card__title--large` 虽长，但一眼看出归属（card 组件的 title 元素的 large 变体），可维护性远胜 `.title`。换来的是命名扁平、低冲突、语义清晰。\n' +
            '2. **避免长选择器**：`#main .content .article p span` 这类选择器优先级高、难覆盖、依赖 DOM 结构。改用扁平语义类 `.article-highlight`，不依赖层级，可随处复用。\n' +
            '3. **慎用 `!important`**：它是「优先级核武器」，用了就难以覆盖。正确做法是提高选择器特异性或调整选择器顺序。`!important` 应仅用于覆盖第三方库样式。\n' +
            '4. **BEM 不要过度嵌套**：`.card__body__title__text` 是反模式。元素层级最多两层，深层用新的块。如 `.card` 内的 `.card__body` 内的标题应是独立块 `.article-title`。\n' +
            '5. **CSS Modules 需构建工具**：它依赖 Webpack/Vite 等在编译时生成唯一类名，不能直接在浏览器用。React 的 `*.module.css`、Vue 的 `<style scoped>` 都是其变体。\n' +
            '6. **Tailwind 的取舍**：原子类让 HTML 类名很长（`class="flex items-center gap-4 p-4 bg-blue-500"`），但消除了命名焦虑和 CSS 文件管理。适合追求开发效率的团队，不适合需要精细控制设计稿的场景。\n' +
            '7. **方法论可组合**：如 BEM + SMACSS（BEM 命名 + SMACSS 文件结构）、Tailwind + BEM（用 `@apply` 封装组件类）。不必教条单一方法论。\n\n' +
            '## 实际应用\n\n' +
            '- **传统多页网站**：用 BEM 命名，按 SMACSS 分文件（base/layout/module/state/theme），纯 CSS 无需构建工具。\n' +
            '- **React/Vue 组件项目**：用 CSS Modules（`.module.css`）或 CSS-in-JS（styled-components），天然组件级隔离。\n' +
            '- **追求效率的 SaaS 项目**：用 Tailwind，省去命名和 CSS 文件管理，配合组件抽象复用样式。\n' +
            '- **设计系统/组件库**：用 BEM + OOCSS，结构类与皮肤类分离，支持主题切换（如 `.btn` + `.btn--dark`）。\n' +
            '- **团队协作**：无论选哪种，核心原则是命名语义化（`.user-card` 而非 `.red-box`）、结构扁平（避免深嵌套）、避免 `!important`。\n\n' +
            '## 扩展知识\n\n' +
            '**ITCSS（Inverted Triangle CSS）**：由 Harry Roberts 提出，把 CSS 按特异性从低到高分层（倒三角）：' +
            'Settings（变量）→ Tools（函数/mixin）→ Generic（reset）→ Elements（元素默认）→ Objects（无视觉的结构类）→ Components（组件）→ Trumps（工具类/!important）。' +
            '每层特异性递增，确保低层不被高层意外覆盖。适合大型企业项目。\n\n' +
            '**CSS-in-JS**：如 styled-components、Emotion，把 CSS 写在 JS 中，运行时生成唯一类名并注入。' +
            '优点是天然组件隔离、可动态样式（根据 props 变化）；缺点是运行时开销、学习曲线。React 生态流行，Vue 较少用。\n\n' +
            '**Utility-First vs Component-First**：Tailwind 是 Utility-First（原子类组合），BEM 是 Component-First（组件封装）。' +
            'Tailwind 也支持 `@apply` 把工具类封装成组件类：`.btn { @apply px-4 py-2 rounded bg-blue-500; }`，兼顾两者。\n\n' +
            '**CSS 的层叠层（@layer）**：CSS 新特性，用 `@layer base, components, utilities;` 声明层顺序，层内样式优先级低于后面的层。' +
            '这是原生 CSS 解决优先级冲突的方案，无需方法论或构建工具，现代浏览器已支持。\n\n' +
            '**命名是 CSS 架构的核心**：无论方法论如何演进，核心原则不变——命名语义化（表达「是什么」而非「长什么样」）、结构扁平、作用域隔离。掌握这些原则，任何方法论都能快速上手。',
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