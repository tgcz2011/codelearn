import type { CourseContent } from './types'

/**
 * HTML 入门到进阶课程（7 章 26 节）
 *
 * HTML 代码通过 HtmlWasmRunner 在 iframe 中渲染预览，无 stdout。
 * 大部分练习使用 open-ended 类型（视觉渲染无标准输出可匹配）；
 * 对于产生明确可见文本的练习，使用 output-match 并以页面文字作为预期输出。
 */
export const htmlCourse: CourseContent = {
  id: 'course-html',
  slug: 'html',
  title: 'HTML 入门到进阶',
  description: '从文档结构到语义化、表单、HTML5 特性与最佳实践，系统构建现代网页骨架。',
  language: 'html',
  difficulty: 'beginner',
  chapters: [
    // ====================== 第一章 ======================
    {
      id: 'html-ch1',
      title: 'HTML 基础结构',
      order: 0,
      lessons: [
        {
          id: 'html-ch1-l1',
          title: 'DOCTYPE 与文档骨架',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '`<!DOCTYPE html>` 是 HTML5 的文档类型声明（Document Type Declaration），必须写在文档第一行，' +
            '核心作用是告诉浏览器以「标准模式（standards mode）」渲染页面，避免进入「怪异模式（quirks mode）」。' +
            '标准模式下浏览器严格按 W3C 规范解析渲染；怪异模式则模拟早期浏览器（如 IE5）的非标准行为，' +
            '会导致盒模型、行高、表格等表现与标准不一致，跨浏览器差异极大。还有一个「几乎标准模式（almost standards mode）」，' +
            '仅在表格单元格垂直对齐等极少数细节上与标准模式不同。\n\n' +
            '整个 HTML 文档由 `<html>` 根元素包裹，它是所有内容的祖先。`<html>` 有两个直接子元素：' +
            '`<head>` 与 `<body>`。`<head>` 存放机器可读的元信息（标题、字符集、样式链接、脚本等，用户通常不可见），' +
            '`<body>` 存放用户在浏览器视口中看到的所有可见内容（文字、图片、表单等）。这种「头身分离」的结构自 HTML 诞生起就存在。\n\n' +
            '历史上 DOCTYPE 曾非常冗长。HTML4 时代需要引用一长串 DTD（文档类型定义）URL，' +
            '例如 `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "...">`。XHTML 时代同样繁琐。' +
            'HTML5 把它简化为 `<!DOCTYPE html>`，不再依赖外部 DTD，书写简洁，标志着 HTML 从 SGML 子集走向独立演进。\n\n' +
            '## 语法说明\n\n' +
            '完整骨架如下：`<!DOCTYPE html>` 声明文档类型；`<html lang="zh-CN">` 根元素并声明语言；' +
            '`<head>` 内放 `<meta charset="UTF-8">`（字符编码，必须在前 1024 字节内出现）、' +
            '`<meta name="viewport" content="width=device-width, initial-scale=1.0">`（移动端视口）、' +
            '`<title>`（标签页标题）；`<body>` 内放可见内容。\n\n' +
            'DOCTYPE 不区分大小写，但惯例写小写 `<!DOCTYPE html>`。`lang` 属性值遵循 BCP 47 规范，' +
            '如 `zh-CN`（简体中文）、`en`（英语）、`ja`（日语），帮助搜索引擎、屏幕阅读器和浏览器翻译功能判断语言。\n\n' +
            '## 核心元素与属性表\n\n' +
            '| 元素/属性 | 作用 | 是否必需 | 示例 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| `<!DOCTYPE html>` | 声明文档类型与标准模式 | 是 | `<!DOCTYPE html>` |\n' +
            '| `<html lang>` | 根元素，声明主语言 | 是 | `<html lang="zh-CN">` |\n' +
            '| `<head>` | 元信息容器 | 是 | `<head>...</head>` |\n' +
            '| `<meta charset>` | 声明字符编码 | 推荐 | `<meta charset="UTF-8">` |\n' +
            '| `<title>` | 标签页标题，SEO 关键 | 是 | `<title>首页</title>` |\n' +
            '| `<body>` | 可见内容容器 | 是 | `<body>...</body>` |\n\n' +
            '## 代码示例\n\n' +
            '示例一：符合 HTML5 规范的最小完整页面：\n\n' +
            '```html\n<!DOCTYPE html>\n<html lang="zh-CN">\n  <head>\n    <meta charset="UTF-8">\n    <title>我的第一个页面</title>\n  </head>\n  <body>\n    <p>Hello, HTML5!</p>\n  </body>\n</html>\n```\n\n' +
            '示例二：省略 DOCTYPE 会触发怪异模式，盒模型表现异常：\n\n' +
            '```html\n<!-- 故意省略 DOCTYPE 会触发怪异模式 -->\n<html>\n  <head><title>无 DOCTYPE</title></head>\n  <body>\n    <div style="width:200px;border:2px solid black;">盒子尺寸可能不一致</div>\n  </body>\n</html>\n```\n\n' +
            '示例三：HTML4 旧式声明对比，体现 HTML5 的简洁：\n\n' +
            '```html\n<!-- HTML4 冗长声明（已过时，了解即可） -->\n<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">\n<html>\n  <head><title>旧式</title></head>\n  <body><p>HTML5 已无需这种写法</p></body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. DOCTYPE 必须是文档第一行，前面不能有空行、空格或注释，否则可能触发怪异模式。\n' +
            '2. `<meta charset="UTF-8">` 应放在 `<head>` 最前面，且在前 1024 字节内，避免浏览器短暂按默认编码解析导致乱码。\n' +
            '3. 一个文档只能有一个 `<html>`、一个 `<head>`、一个 `<body>`，且 `<title>` 在 head 内唯一。\n' +
            '4. 即使省略某些标签（如 `<html>`/`<head>`/`<body>`）浏览器也能自动补全，但显式书写更规范、利于维护和无障碍。\n' +
            '5. `lang` 属性不仅影响 SEO 和屏幕阅读器，还影响浏览器拼写检查和连字断行，务必正确设置。\n\n' +
            '## 实际应用\n\n' +
            '搭建公司官网或任何项目时，第一步就是写好这套文档骨架。正确声明 DOCTYPE、字符集和语言，' +
            '是保证后续所有页面在各国浏览器中一致渲染的基础。HTML5 模板生成器（如 HTML5 Boilerplate）' +
            '会在此基础上加入更多兼容性补丁和性能优化配置，作为生产项目的起点。\n\n' +
            '## 扩展知识\n\n' +
            '除了 `charset` meta，`<html>` 还可加 `dir="rtl"` 声明从右到左的文本方向（阿拉伯语、希伯来语）。' +
            '若需声明 XML 命名空间（XHTML 时代遗留），可用 `xmlns` 属性，但 HTML5 中通常省略。' +
            '怪异模式的典型差异：`width` 包含 padding 和 border（IE 盒模型），可通过 CSS `box-sizing` 在标准模式下手动模拟。' +
            '可以用 `document.compatMode` 在控制台检测当前模式（`CSS1Compat` 为标准，`BackCompat` 为怪异）。',
          examples: [
            {
              title: '最小 HTML5 页面',
              code:
                '<!DOCTYPE html>\n<html lang="zh-CN">\n  <head>\n    <meta charset="UTF-8">\n    <title>我的第一个页面</title>\n  </head>\n  <body>\n    <p>Hello, HTML5!</p>\n  </body>\n</html>',
              explanation:
                '这是符合 HTML5 规范的最小完整页面。charset 声明 UTF-8 避免中文乱码，lang 属性声明页面语言。',
            },
            {
              title: '对比：缺少 DOCTYPE 的后果',
              code:
                '<!-- 故意省略 DOCTYPE 会触发怪异模式 -->\n<html>\n  <head><title>无 DOCTYPE</title></head>\n  <body>\n    <div style="width:200px;border:2px solid black;">盒子尺寸可能不一致</div>\n  </body>\n</html>',
              explanation:
                '缺少 DOCTYPE 时浏览器进入怪异模式，盒模型和布局表现可能与标准模式不同，导致跨浏览器不一致。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建一个完整 HTML5 页面：DOCTYPE 声明、lang 为 zh-CN、charset 为 UTF-8、title 为「练习页」，body 中显示文字「我在学 HTML」。',
              starter_code:
                '<!DOCTYPE html>\n<html lang="___">\n  <head>\n    <meta charset="___">\n    <title>练习页</title>\n  </head>\n  <body>\n    <p>___</p>\n  </body>\n</html>',
              expected_output: '我在学 HTML',
              hints: [
                '第一行写 <!DOCTYPE html>',
                'lang 属性值用 zh-CN',
                'charset 用 UTF-8',
              ],
            },
            {
              type: 'open-ended',
              prompt: '在一个完整页面中，给 <html> 加上 lang 属性，并在 head 中同时声明 charset 和 title，body 写一段欢迎语。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <!-- 补全 charset 与 title -->\n  </head>\n  <body>\n    <!-- 写欢迎语 -->\n  </body>\n</html>',
              hints: [
                'meta charset="UTF-8" 声明字符集',
                'title 标签设置标签页标题',
                'lang 属性帮助 SEO 和无障碍',
              ],
            },
          ],
          realWorldScenario:
            '搭建公司官网的初始模板时，第一步就是写好这套文档骨架——正确声明 DOCTYPE、字符集和语言，是保证后续所有页面在各国浏览器中一致渲染的基础。',
        },
        {
          id: 'html-ch1-l2',
          title: 'head 中的元信息',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '`<head>` 是文档的「元信息中心」，其中的内容不直接显示在页面上，却深刻影响 SEO、移动端体验、' +
            '社交分享、加载性能与无障碍。除 `<title>` 外，`<head>` 中最常用的是各种 `<meta>` 标签和资源引入标签（`<link>`/`<script>`）。\n\n' +
            '`<meta charset="UTF-8">` 声明字符编码，UTF-8 覆盖全球几乎所有文字，避免中文乱码。' +
            '`<meta name="description" content="...">` 设置页面描述摘要，会显示在搜索引擎结果标题下方，影响点击率。' +
            '`<meta name="viewport" content="width=device-width, initial-scale=1.0">` 是响应式设计的关键，' +
            '它告诉移动端浏览器按设备实际宽度渲染而非默认按 980px 缩放，没有它手机会显示缩小版桌面页面。\n\n' +
            '`<link rel="stylesheet" href="style.css">` 引入外部 CSS，`rel="stylesheet"` 声明关系为样式表。' +
            '`<script src="app.js" defer></script>` 引入外部 JS，`defer` 让脚本在文档解析完成后、DOMContentLoaded 前按顺序执行，' +
            '避免阻塞 HTML 解析。还有 `async` 属性，脚本下载完立即执行（顺序不可控），适合独立第三方脚本。\n\n' +
            '## 语法说明\n\n' +
            'meta 有两种用法：`<meta name="名称" content="值">`（name/content 对，描述文档属性）和' +
            '`<meta http-equiv="名称" content="值">`（等价于 HTTP 头，如 `http-equiv="refresh"` 刷新跳转）。' +
            'Open Graph 系列用 `property` 属性：`<meta property="og:title" content="...">`。\n\n' +
            'link 常用 rel 值：`stylesheet`（样式表）、`icon`（favicon）、`canonical`（规范 URL）、' +
            '`preload`（预加载关键资源）、`preconnect`（预连接域名）、`manifest`（PWA 清单）。\n\n' +
            '## 常用 head 标签与属性表\n\n' +
            '| 标签/属性 | 作用 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| `<meta charset>` | 声明字符编码 | `<meta charset="UTF-8">` |\n' +
            '| `<meta name="description">` | 搜索结果摘要 | `content="页面简介"` |\n' +
            '| `<meta name="viewport">` | 移动端视口 | `content="width=device-width, initial-scale=1.0"` |\n' +
            '| `<meta name="keywords">` | 关键词（已被忽略） | 基本无效 |\n' +
            '| `<meta http-equiv="refresh">` | 定时刷新/跳转 | `content="5;url=..."` |\n' +
            '| `<meta property="og:*">` | 社交分享预览 | `og:title`/`og:image` |\n' +
            '| `<link rel="stylesheet">` | 引入 CSS | `href="style.css"` |\n' +
            '| `<link rel="canonical">` | 规范 URL | 防重复内容惩罚 |\n' +
            '| `<link rel="icon">` | 网站图标 | favicon |\n' +
            '| `<script defer>` | 延迟执行 JS | 文档解析后执行 |\n' +
            '| `<script async>` | 异步执行 JS | 下载完立即执行 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：完整的 head 配置：\n\n' +
            '```html\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="这是一个学习 HTML 的示例页面">\n  <title>元信息示例</title>\n</head>\n```\n\n' +
            '示例二：引入外部资源与脚本加载策略：\n\n' +
            '```html\n<head>\n  <meta charset="UTF-8">\n  <title>外部资源</title>\n  <link rel="stylesheet" href="style.css">\n  <!-- defer：文档解析后按序执行，不阻塞渲染 -->\n  <script src="app.js" defer></script>\n  <!-- async：下载完立即执行，适合统计/广告等独立脚本 -->\n  <script src="analytics.js" async></script>\n</head>\n```\n\n' +
            '示例三：Open Graph 社交分享与 canonical：\n\n' +
            '```html\n<head>\n  <meta property="og:title" content="HTML 入门教程">\n  <meta property="og:description" content="系统学习 HTML 基础到进阶">\n  <meta property="og:image" content="https://example.com/cover.png">\n  <meta property="og:url" content="https://example.com/html">\n  <!-- 指向规范 URL，避免重复收录 -->\n  <link rel="canonical" href="https://example.com/html">\n</head>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. `<meta charset>` 必须在 `<head>` 前 1024 字节内，否则浏览器可能先用默认编码解析导致乱码。\n' +
            '2. `keywords` meta 已被主流搜索引擎忽略，不必花精力填写，description 仍很重要。\n' +
            '3. CSS 放 head 内尽早加载避免 FOUC（无样式内容闪烁）；JS 用 defer/async 避免阻塞解析。\n' +
            '4. `defer` 保持脚本执行顺序，`async` 不保证顺序，选择取决于脚本是否依赖其他脚本。\n' +
            '5. viewport meta 不写会导致移动端布局错乱，且影响 Google 移动优先索引排名。\n\n' +
            '## 实际应用\n\n' +
            '上线一个营销活动页时，运营会要求配置好 description 用于百度/Google 摘要、viewport 保证手机端不缩小显示、' +
            'Open Graph 标签让微信/微博分享有标题和配图、canonical 避免多 URL 重复内容惩罚——这些都写在 head 里，' +
            '是上线 checklist 的必检项。\n\n' +
            '## 扩展知识\n\n' +
            '除标准 meta 外，还有 `<meta name="theme-color">`（控制移动端浏览器地址栏颜色）、' +
            '`<meta name="robots" content="noindex">`（禁止搜索引擎收录）、' +
            '`<meta http-equiv="Content-Security-Policy" content="...">`（CSP 安全策略）。' +
            'PWA 应用还需 `<link rel="manifest" href="manifest.json">` 引入清单文件实现可安装性。' +
            '理解 head 是掌握 SEO、性能与安全的入口。',
          examples: [
            {
              title: '完整的 head 配置',
              code:
                '<!DOCTYPE html>\n<html lang="zh-CN">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="description" content="这是一个学习 HTML 的示例页面">\n    <title>元信息示例</title>\n  </head>\n  <body>\n    <p>查看页面源码看 head 配置</p>\n  </body>\n</html>',
              explanation:
                'viewport meta 是移动端适配必备；description 是搜索引擎结果摘要的重要来源。',
            },
            {
              title: '引入外部资源',
              code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>外部资源</title>\n    <link rel="stylesheet" href="style.css">\n    <script src="app.js" defer></script>\n  </head>\n  <body>\n    <p>样式与脚本通过外部文件引入</p>\n  </body>\n</html>',
              explanation:
                '外部引入 CSS 和 JS 便于缓存复用与代码组织；defer 保证脚本不阻塞 HTML 解析。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为页面配置 viewport meta（width=device-width, initial-scale=1.0）和 description meta（内容自拟）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>移动友好</title>\n    <!-- 补全 viewport 和 description -->\n  </head>\n  <body>\n    <p>移动端也能正常显示</p>\n  </body>\n</html>',
              hints: [
                'viewport content="width=device-width, initial-scale=1.0"',
                'description 用 name="description" 配合 content 属性',
              ],
            },
            {
              type: 'open-ended',
              prompt: '在 head 中用 link 引入一个外部样式表 style.css，用 script defer 引入 app.js。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>外部资源</title>\n    <!-- 引入 CSS -->\n    <!-- 引入 JS -->\n  </head>\n  <body>\n    <p>资源已引入</p>\n  </body>\n</html>',
              hints: [
                'link rel="stylesheet" href="style.css"',
                'script src="app.js" defer',
              ],
            },
          ],
          realWorldScenario:
            '上线一个营销活动页时，运营会要求配置好 description 用于百度/Google 摘要、viewport 保证手机端不缩小显示、Open Graph 标签让微信分享有标题和配图——这些都写在 head 里。',
        },
        {
          id: 'html-ch1-l3',
          title: '标题标签 h1-h6',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'HTML 提供六级标题标签 `<h1>` 到 `<h6>`，数字越小级别越高、字号越大、重要性越大。' +
            '`<h1>` 是页面最高级标题，通常一个页面只有一个，是搜索引擎判断页面主题的最重要依据，对 SEO 影响最大。' +
            '`<h2>` 到 `<h6>` 用于在内容中划分层级结构，应按数字顺序逐级使用，不要跳级（如从 h2 直接跳到 h4）。\n\n' +
            '标题标签是「语义化」的：它不仅控制视觉字号，更传达文档的大纲结构。搜索引擎爬虫和屏幕阅读器依赖标题层级' +
            '构建「页面大纲」并据此跳转导航。因此绝不能为了获得大字号而滥用标题——视觉样式应交给 CSS 的 font-size 处理，' +
            '标题只用于真正的内容分层。\n\n' +
            'HTML 注释用 `<!-- 注释内容 -->` 包裹，浏览器不渲染但源码可见，常用于说明代码意图、' +
            '临时禁用一段代码、留 TODO 标记或分割区块。注释不能嵌套。\n\n' +
            '## 语法说明\n\n' +
            '标题语法：`<h1>主标题</h1>` 到 `<h6>六级标题</h6>`，成对出现。' +
            '注释语法：`<!-- 这里是注释 -->`，可跨多行。标题标签是块级元素，默认前后换行且有 margin。\n\n' +
            '## 标题层级对照表\n\n' +
            '| 标签 | 语义级别 | 典型用途 | SEO 权重 | 建议数量 |\n' +
            '| --- | --- | --- | --- | --- |\n' +
            '| `<h1>` | 最高 | 页面/文章主标题 | 最高 | 每页 1 个 |\n' +
            '| `<h2>` | 二级 | 主要章节标题 | 高 | 多个 |\n' +
            '| `<h3>` | 三级 | 子章节标题 | 中 | 多个 |\n' +
            '| `<h4>` | 四级 | 子子章节 | 较低 | 按需 |\n' +
            '| `<h5>` | 五级 | 细分标题 | 低 | 少用 |\n' +
            '| `<h6>` | 六级 | 最低级标题 | 最低 | 极少用 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：六级标题字号对比：\n\n' +
            '```html\n<body>\n  <h1>一级标题</h1>\n  <h2>二级标题</h2>\n  <h3>三级标题</h3>\n  <h4>四级标题</h4>\n  <h5>五级标题</h5>\n  <h6>六级标题</h6>\n  <!-- 注释不会显示在页面上 -->\n</body>\n```\n\n' +
            '示例二：合理的标题层级嵌套：\n\n' +
            '```html\n<body>\n  <h1>个人博客</h1>\n  <section>\n    <h2>最新文章</h2>\n    <article>\n      <h3>HTML 学习笔记</h3>\n      <p>今天学了标题标签...</p>\n    </article>\n    <article>\n      <h3>CSS 学习笔记</h3>\n      <p>盒模型是基础...</p>\n    </article>\n  </section>\n</body>\n```\n\n' +
            '示例三：多行注释与临时禁用代码：\n\n' +
            '```html\n<body>\n  <!--\n    这是多行注释\n    可用于说明整段代码意图\n  -->\n  <h2>功能说明</h2>\n  <!-- <p>这段被临时注释掉，不渲染</p> -->\n  <p>正常显示的内容</p>\n</body>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. 每个页面原则上只应有一个 `<h1>`，多个 h1 会让搜索引擎难以判断主题。\n' +
            '2. 不要跳级使用标题（如 h1 后直接 h3），屏幕阅读器依赖连续层级生成大纲，跳级会让导航混乱。\n' +
            '3. 不要用标题标签来调字号——用 CSS font-size。标题只表达语义层级。\n' +
            '4. 注释不能嵌套（`<!-- <!-- --> -->` 会在第一个 `-->` 处提前结束，导致后续内容显示）。\n' +
            '5. 注释虽然不渲染，但任何人都能通过查看源码看到，不要放敏感信息或不当言论。\n\n' +
            '## 实际应用\n\n' +
            '编写博客或新闻网站时，编辑器输出的标题层级直接决定搜索引擎能否正确抓取文章大纲——' +
            '跳级使用 h3 而没有 h2 会让 SEO 抓取丢失结构，也影响屏幕阅读器用户的目录导航体验。' +
            '内容管理系统的富文本编辑器通常会限制标题选项以保证层级正确。\n\n' +
            '## 扩展知识\n\n' +
            'HTML5 引入了 `<hgroup>` 元素（用于组合标题与副标题），但因语义争议已被规范弱化。' +
            '现代实践中，用 `<header>` 包裹标题区域，内部用 h1/h2 表达主副标题更清晰。' +
            '可通过浏览器插件（如 headingsMap）或开发者工具的辅助功能面板查看页面的标题大纲，验证结构是否合理。' +
            '屏幕阅读器（VoiceOver/NVDA）提供按标题级别跳转的快捷键，是视障用户浏览页面的主要方式。',
          examples: [
            {
              title: '六级标题展示',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <h1>一级标题</h1>\n    <h2>二级标题</h2>\n    <h3>三级标题</h3>\n    <h4>四级标题</h4>\n    <h5>五级标题</h5>\n    <h6>六级标题</h6>\n    <!-- 注释不会显示在页面上 -->\n  </body>\n</html>',
              explanation:
                '六级标题字号依次递减。注意 HTML 只表达结构，实际大小应由 CSS 统一管理。',
            },
            {
              title: '合理的标题层级',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <h1>个人博客</h1>\n    <section>\n      <h2>最新文章</h2>\n      <article>\n        <h3>HTML 学习笔记</h3>\n        <p>今天学了标题标签...</p>\n      </article>\n    </section>\n  </body>\n</html>',
              explanation:
                '标题按层级嵌套使用，h1 作为站点标题，h2 作为区块标题，h3 作为文章标题，结构清晰。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '页面中添加一个 h1 标题「我的笔记」和一段注释「这里写笔记内容」。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <h1>___</h1>\n    <!-- ___ -->\n  </body>\n</html>',
              expected_output: '我的笔记',
              hints: [
                'h1 标签包裹标题文字',
                '注释用 <!-- --> 包裹',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 h1 作为网站名「CodeLearn」，h2 作为栏目「课程」，h3 作为子项「HTML 基础」，构建合理的标题层级。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 按层级写出三个标题 -->\n  </body>\n</html>',
              hints: [
                '一个页面通常只有一个 h1',
                '标题按数字顺序嵌套，不跳级',
                'h1 > h2 > h3 表示从大到小的层级',
              ],
            },
          ],
          realWorldScenario:
            '编写博客或新闻网站时，编辑器输出的标题层级直接决定搜索引擎能否正确抓取文章大纲——跳级使用 h3 而没有 h2 会让 SEO 抓取丢失结构。',
        },
        {
          id: 'html-ch1-l4',
          title: '段落与文本格式化',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`<p>` 表示一个段落（paragraph），是最常用的文本容器。浏览器默认在段落上下加 margin 形成段间距。' +
            'HTML 提供丰富的文本语义标签，每个都传达特定含义而非仅改变外观：`<strong>` 表示内容重要（默认加粗渲染），' +
            '`<em>` 表示强调（默认斜体渲染），`<mark>` 表示因上下文相关而高亮（默认黄底），' +
            '`<code>` 表示代码片段（默认等宽字体），`<pre>` 保留空白与换行（常与 code 配合显示多行代码）。\n\n' +
            '区分语义与外观是写好 HTML 的关键：`<b>`/`<i>` 仅改变视觉（加粗/斜体）而无语义，' +
            '而 `<strong>`/`<em>` 带语义——屏幕阅读器会对 strong/em 改变语调朗读，搜索引擎也理解其强调含义。' +
            '现代实践优先用语义标签，外观细节交给 CSS。`<br>` 是强制换行（自闭合），`<hr>` 是水平分割线（自闭合），' +
            '表示主题分隔。\n\n' +
            '`<span>` 是无语义的行内（inline）通用容器，常用于给一段文本的局部加样式或作为 JS 钩子，' +
            '与之对应的块级通用容器是 `<div>`。特殊字符需用 HTML 实体表示，避免与 HTML 语法冲突或显示乱码。\n\n' +
            '## 语法说明\n\n' +
            '段落：`<p>文字</p>`。行内语义：`<strong>重要</strong>`、`<em>强调</em>`。' +
            '换行：`<br>`（自闭合）。分割线：`<hr>`。代码块：`<pre><code>多行代码</code></pre>`。' +
            '实体格式：`&名称;` 或 `&#数字;`。\n\n' +
            '## 文本语义标签表\n\n' +
            '| 标签 | 语义 | 默认外观 | 使用场景 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| `<p>` | 段落 | 上下 margin | 正文分段 |\n' +
            '| `<strong>` | 重要 | 加粗 | 警告、关键信息 |\n' +
            '| `<em>` | 强调 | 斜体 | 语气强调 |\n' +
            '| `<b>` | 无语义加粗 | 加粗 | 仅需视觉加粗（不推荐） |\n' +
            '| `<i>` | 无语义斜体 | 斜体 | 仅需视觉斜体 |\n' +
            '| `<mark>` | 高亮标记 | 黄色背景 | 搜索结果、关键词 |\n' +
            '| `<code>` | 代码片段 | 等宽字体 | 行内代码 |\n' +
            '| `<pre>` | 预格式化 | 保留空白换行 | 多行代码块 |\n' +
            '| `<small>` | 附注、细则 | 小一号字号 | 免责声明、版权 |\n' +
            '| `<del>`/`<ins>` | 删除/插入 | 删除线/下划线 | 编辑修订 |\n' +
            '| `<sub>`/`<sup>` | 下标/上标 | 缩小偏移 | 化学式、脚注 |\n' +
            '| `<span>` | 通用行内容器 | 无 | 局部样式钩子 |\n\n' +
            '## 常用 HTML 实体表\n\n' +
            '| 实体 | 字符 | 用途 |\n' +
            '| --- | --- | --- |\n' +
            '| `&lt;` | < | 小于号（避免与标签冲突） |\n' +
            '| `&gt;` | > | 大于号 |\n' +
            '| `&amp;` | & | 与号（避免与实体冲突） |\n' +
            '| `&nbsp;` | 不间断空格 | 防止换行、连续空格 |\n' +
            '| `&quot;` | " | 引号 |\n' +
            '| `&copy;` | © | 版权符号 |\n' +
            '| `&mdash;` | — | 破折号 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：文本语义标签综合：\n\n' +
            '```html\n<body>\n  <p>这段话中有<strong>重要</strong>内容和<em>强调</em>内容。</p>\n  <p>搜索关键词：<mark>HTML</mark> 是超文本标记语言。</p>\n  <p>使用 <code>&lt;p&gt;</code> 标签创建段落。</p>\n  <pre>保留\n    换行和\n    空格</pre>\n</body>\n```\n\n' +
            '示例二：换行、分割线与上下标：\n\n' +
            '```html\n<body>\n  <p>第一行<br>第二行</p>\n  <hr>\n  <p>水分子：H<sub>2</sub>O</p>\n  <p>平方：x<sup>2</sup></p>\n  <p>价格 <del>99</del> <ins>59</ins> 元</p>\n</body>\n```\n\n' +
            '示例三：用 span 给局部文字加样式（配合 CSS）：\n\n' +
            '```html\n<body>\n  <p>本月销售额 <span style="color:red;font-weight:bold;">增长 30%</span>，超额完成目标。</p>\n  <small>数据来源：内部统计，仅供参考</small>\n</body>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. 不要用 `<br>` 增加段落间距——那是 CSS margin 的职责。br 仅用于诗歌、地址等内容本身需要换行的场景。\n' +
            '2. 显示 HTML 代码（如讲解 `<p>` 标签）必须用实体 `&lt;p&gt;`，否则浏览器会当成真实标签解析。\n' +
            '3. `<pre>` 内的空白和换行会被原样保留，缩进要小心；常配合 `<code>` 显示代码块。\n' +
            '4. 优先用 `<strong>`/`<em>` 而非 `<b>`/`<i>`，前者有语义利于无障碍和 SEO。\n' +
            '5. `&nbsp;` 连续使用可制造空格，但现代布局应优先用 CSS（padding/margin/letter-spacing）。\n\n' +
            '## 实际应用\n\n' +
            '编写产品说明文档时，用 code 标签包裹函数名、用 strong 标记警告要点、用 mark 高亮新增条款、' +
            '用 del/ins 标注合同条款变更——这些语义标签让文档在无障碍阅读器和搜索引擎中表达更准确，' +
            '也便于后续用 CSS 统一样式。\n\n' +
            '## 扩展知识\n\n' +
            'HTML5 还提供 `<abbr title="完整词">` 缩写标签（鼠标悬停显示全称）、`<cite>` 引用来源标题、' +
            '`<blockquote>` 块级引用、`<q>` 行内引用（自动加引号）、`<ruby>` 注音（用于中文/日文标注读音）。' +
            '这些标签让文档语义更丰富。实体除命名实体外还可用数字编码（如 `&#60;` 等价 `&lt;`），' +
            '在 CMS 等动态系统中更安全（不依赖实体名称解析）。',
          examples: [
            {
              title: '文本语义标签',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <p>这段话中有<strong>重要</strong>内容和<em>强调</em>内容。</p>\n    <p>搜索关键词：<mark>HTML</mark> 是超文本标记语言。</p>\n    <p>使用 <code>&lt;p&gt;</code> 标签创建段落。</p>\n    <pre>保留\n      换行和\n      空格</pre>\n  </body>\n</html>',
              explanation:
                'strong/em/mark/code 都带语义，配合 CSS 可统一改样式；pre 保留原始空白格式。',
            },
            {
              title: '换行与分割线',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <p>第一行<br>第二行</p>\n    <hr>\n    <p>分割线下方的内容</p>\n  </body>\n</html>',
              explanation:
                'br 用于诗歌、地址等需要强制换行的场景；hr 表示主题分隔。不要用 br 增加段落间距（应靠 CSS）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建一个段落，文字为「学习 HTML 很有趣」，其中「有趣」用 strong 标签强调。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <p>学习 HTML 很<strong>___</strong></p>\n  </body>\n</html>',
              expected_output: '学习 HTML 很有趣',
              hints: [
                'strong 标签包裹「有趣」二字',
                'p 标签包裹整段',
              ],
            },
            {
              type: 'open-ended',
              prompt: '写一段技术说明：用 code 标签显示 <html> 标签（需用实体），用 mark 高亮关键术语「根元素」。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 用 code 与实体显示 <html>，用 mark 高亮「根元素」 -->\n  </body>\n</html>',
              hints: [
                '< 用 &lt;，> 用 &gt;',
                'code 标签包裹代码片段',
                'mark 标签包裹要高亮的文字',
              ],
            },
          ],
          realWorldScenario:
            '编写产品说明文档时，用 code 标签包裹函数名、用 strong 标记警告要点、用 mark 高亮新增条款——这些语义标签让文档在无障碍阅读器和搜索引擎中表达更准确。',
        },
      ],
    },
    // ====================== 第二章 ======================
    {
      id: 'html-ch2',
      title: '链接与图片',
      order: 1,
      lessons: [
        {
          id: 'html-ch2-l1',
          title: 'a 标签与超链接',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '`<a>`（anchor，锚）标签创建超链接，是 Web 的基石——正是超链接把分散的网页连接成万维网。' +
            '`href` 属性指定目标地址，点击链接即跳转。href 可以是多种形式：绝对 URL（`https://example.com`）、' +
            '相对路径（`about.html`）、页内锚点（`#section1`）、邮件（`mailto:xxx`）、电话（`tel:xxx`）等。\n\n' +
            '默认点击链接在当前标签页跳转，加 `target="_blank"` 可在新标签页打开。但 `target="_blank"` 有安全风险：' +
            '新页面可通过 `window.opener` 访问并替换原页面（反向钓鱼攻击），因此必须配合 `rel="noopener noreferrer"`，' +
            'noopener 切断 opener 引用，noreferrer 阻止 Referer 头泄露。现代浏览器默认对 _blank 加了 noopener，但显式书写仍是最佳实践。\n\n' +
            '锚点链接（`#id`）跳转到页内对应 id 的元素，常用于「回到顶部」、目录跳转、FAQ 定位。' +
            '链接文字应当有意义——屏幕阅读器会朗读链接文字供视障用户理解，' +
            '搜索引擎也依赖链接锚文本判断目标页面内容。避免「点击这里」「了解更多」这类无描述文案。\n\n' +
            '## 语法说明\n\n' +
            '基础语法：`<a href="目标地址">链接文字</a>`。' +
            '新窗口打开：`<a href="..." target="_blank" rel="noopener noreferrer">...</a>`。' +
            '锚点：`<a href="#section1">跳到第一节</a>` 配合目标 `<h2 id="section1">`。' +
            '邮件：`<a href="mailto:a@b.com?subject=你好">发邮件</a>`。电话：`<a href="tel:+86138...">打电话</a>`。\n\n' +
            '## a 标签属性表\n\n' +
            '| 属性 | 作用 | 常用值 |\n' +
            '| --- | --- | --- |\n' +
            '| `href` | 目标地址 | URL / 相对路径 / #锚点 / mailto: / tel: |\n' +
            '| `target` | 打开方式 | `_blank`（新窗口）/ `_self`（默认当前）/ `_parent` / `_top` |\n' +
            '| `rel` | 关系与安全 | `noopener noreferrer`（新窗口必备）/ `nofollow`（不传递权重） |\n' +
            '| `download` | 下载而非导航 | `download` 或指定文件名 |\n' +
            '| `title` | 悬停提示 | 鼠标悬停显示文字 |\n' +
            '| `hreflang` | 目标语言 | `zh-CN` 等 |\n' +
            '| `type` | MIME 类型 | `type="application/pdf"` |\n\n' +
            '## 代码示例\n\n' +
            '示例一：不同类型的链接：\n\n' +
            '```html\n<body>\n  <!-- 绝对 URL -->\n  <a href="https://example.com">访问示例站</a><br>\n  <!-- 新标签页打开（安全写法） -->\n  <a href="https://example.com" target="_blank" rel="noopener noreferrer">新窗口打开</a><br>\n  <!-- 页内锚点 -->\n  <a href="#bottom">跳到底部</a>\n  <p style="height:800px;">占位内容</p>\n  <h2 id="bottom">底部</h2>\n</body>\n```\n\n' +
            '示例二：邮件、电话与下载链接：\n\n' +
            '```html\n<body>\n  <!-- 邮件，可预设主题与正文 -->\n  <a href="mailto:hello@example.com?subject=咨询&body=您好">发邮件</a><br>\n  <!-- 电话，移动端点击唤起拨号 -->\n  <a href="tel:+8613800000000">打电话</a><br>\n  <!-- 下载链接 -->\n  <a href="report.pdf" download="月报.pdf">下载月报</a>\n</body>\n```\n\n' +
            '示例三：页内目录导航（锚点实战）：\n\n' +
            '```html\n<body>\n  <nav>\n    <a href="#ch1">第一章</a> | <a href="#ch2">第二章</a>\n  </nav>\n  <h2 id="ch1">第一章 概述</h2>\n  <p>内容...</p>\n  <h2 id="ch2">第二章 详解</h2>\n  <p>内容...</p>\n  <a href="#">回到顶部</a>\n</body>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. `target="_blank"` 务必加 `rel="noopener noreferrer"`，防范反向钓鱼与 Referer 泄露。\n' +
            '2. 链接文字要有描述性（如「HTML 教程」而非「点击这里」），利于 SEO 和无障碍。\n' +
            '3. 外链不想传递 SEO 权重时加 `rel="nofollow"`（常用于评论区、广告链接）。\n' +
            '4. 锚点跳转默认瞬间定位，CSS `scroll-behavior: smooth` 可实现平滑滚动。\n' +
            '5. 空链接用 `href="#"` 会跳到顶部并产生历史记录，调试时可用 `href="javascript:void(0)"` 或 button 替代。\n\n' +
            '## 实际应用\n\n' +
            '做博客导航或落地页的「立即体验」按钮时，常用 a 标签包裹按钮样式，target="_blank" 让用户在新页签打开注册页而不离开当前文章。' +
            '邮件订阅页用 mailto 链接让用户一键唤起邮件客户端。移动端客服电话用 tel 链接一键拨号，转化率显著提升。\n\n' +
            '## 扩展知识\n\n' +
            'HTML5 允许块级元素包裹在 `<a>` 内（如 `<a href="#"><div>...</div></a>`），即可点击的整块区域，' +
            '但 a 内不能嵌套另一个 a。`download` 属性可强制浏览器下载而非导航，但仅对同源 URL 生效（跨域会被忽略）。' +
            '锚点跳转可通过 `scroll-margin-top` CSS 属性为固定导航栏留出偏移空间，避免标题被遮挡。' +
            '对于 SPA（单页应用），a 标签的默认跳转行为常被 JS 拦截（preventDefault）改用路由库管理，但保持 a 的语义仍有助无障碍。',
          examples: [
            {
              title: '不同类型的链接',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 绝对 URL -->\n    <a href="https://example.com">访问示例站</a><br>\n    <!-- 新标签页打开 -->\n    <a href="https://example.com" target="_blank" rel="noopener noreferrer">新窗口打开</a><br>\n    <!-- 页内锚点 -->\n    <a href="#bottom">跳到底部</a>\n    <p style="height:800px;">占位内容</p>\n    <h2 id="bottom">底部</h2>\n  </body>\n</html>',
              explanation:
                'target="_blank" 配合 rel="noopener" 是安全最佳实践；锚点用 # 加 id 定位。',
            },
            {
              title: '邮件与电话链接',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <a href="mailto:hello@example.com">发邮件</a><br>\n    <a href="tel:+8613800000000">打电话</a>\n  </body>\n</html>',
              explanation:
                '移动端点击 tel 链接会唤起拨号；mailto 可预设主题用 ?subject=。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建一个链接，文字为「学习更多」，指向 https://example.com，并在新标签页打开。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <a href="___" target="___" rel="noopener noreferrer">学习更多</a>\n  </body>\n</html>',
              expected_output: '学习更多',
              hints: [
                'href 指向 https://example.com',
                'target="_blank" 在新标签页打开',
                '加 rel="noopener noreferrer" 更安全',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建一个页内目录：两个锚点链接「第一章」「第二章」，分别跳到页内对应 id 的标题。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <nav>\n      <!-- 两个锚点链接 -->\n    </nav>\n    <h2 id="ch1">第一章</h2>\n    <p>内容...</p>\n    <h2 id="ch2">第二章</h2>\n    <p>内容...</p>\n  </body>\n</html>',
              hints: [
                '锚点链接 href 以 # 开头加目标 id',
                '目标元素用 id 属性标识',
                '链接文字要有描述性',
              ],
            },
          ],
          realWorldScenario:
            '做博客导航或落地页的「立即体验」按钮时，常用 a 标签包裹按钮样式，target="_blank" 让用户在新页签打开注册页而不离开当前文章。',
        },
        {
          id: 'html-ch2-l2',
          title: 'img 标签与 alt 文本',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '`<img>` 标签在页面中插入图片，是自闭合元素（void element，无需结束标签）。' +
            '`src` 属性指定图片地址，`alt` 属性提供替代文字——当图片加载失败、被禁用或由屏幕阅读器朗读时显示。' +
            'alt 是无障碍访问的核心：视障用户依赖屏幕阅读器朗读 alt 来理解图片内容，搜索引擎也靠 alt 理解图片主题（图片 SEO）。\n\n' +
            '建议始终设置 `width`/`height` 属性。原因：浏览器在图片加载前就知道占位尺寸，' +
            '可预先预留空间，避免图片加载完成后导致的布局抖动（CLS，Cumulative Layout Shift）——这是 Core Web Vitals 的重要指标。' +
            '现代浏览器还会根据 width/height 计算 aspect-ratio 保持比例。\n\n' +
            '`loading="lazy"` 启用懒加载：图片在接近视口时才加载，首屏外的图片延迟加载可节省带宽、加快首屏速度。' +
            '响应式图片可用 `<picture>` 配合 `srcset` 提供不同尺寸/格式版本，让不同设备加载最合适的图片。\n\n' +
            '## 语法说明\n\n' +
            '基础：`<img src="地址" alt="描述" width="300" height="200">`。' +
            '懒加载：加 `loading="lazy"`。响应式 srcset：`<img srcset="small.jpg 480w, large.jpg 1080w" sizes="(max-width:600px) 480px, 1080px" src="large.jpg" alt="...">`。' +
            '解码：`decoding="async"` 异步解码不阻塞主线程。\n\n' +
            '## img 属性表\n\n' +
            '| 属性 | 作用 | 说明 |\n' +
            '| --- | --- | --- |\n' +
            '| `src` | 图片地址 | 必需，URL 或相对路径 |\n' +
            '| `alt` | 替代文字 | 必需，无障碍与 SEO；装饰图用空值 |\n' +
            '| `width`/`height` | 固有尺寸 | 建议，防 CLS 布局抖动 |\n' +
            '| `loading` | 懒加载 | `lazy`（延迟）/ `eager`（默认立即） |\n' +
            '| `decoding` | 解码方式 | `async`（异步）/ `sync` / `auto` |\n' +
            '| `srcset` | 多源地址 | 配合 sizes 做响应式 |\n' +
            '| `sizes` | 断点尺寸 | 告诉浏览器各宽度用哪个尺寸 |\n' +
            '| `referrerpolicy` | Referer 策略 | `no-referrer` 等，控制隐私 |\n' +
            '| `crossorigin` | 跨域 | 配合 CORS 用于 canvas 等 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基础图片插入，设宽高防抖动：\n\n' +
            '```html\n<body>\n  <img src="https://picsum.photos/300/200" alt="随机风景图" width="300" height="200">\n  <p>上方是一张示例图片</p>\n</body>\n```\n\n' +
            '示例二：懒加载与空 alt（装饰图）：\n\n' +
            '```html\n<body>\n  <!-- alt 为空表示装饰图，屏幕阅读器跳过 -->\n  <img src="https://picsum.photos/100/100" alt="" width="100" height="100" loading="lazy">\n  <p>装饰性小图，alt 为空，屏幕阅读器会跳过</p>\n</body>\n```\n\n' +
            '示例三：用 srcset 实现响应式图片（不同屏宽加载不同尺寸）：\n\n' +
            '```html\n<body>\n  <img srcset="https://picsum.photos/480/320 480w,\n               https://picsum.photos/1080/720 1080w"\n       sizes="(max-width: 600px) 480px, 1080px"\n       src="https://picsum.photos/1080/720"\n       alt="响应式示例图"\n       width="1080" height="720">\n</body>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. alt 文本原则：内容图用简洁描述说明图片用途（如「2024 年销售趋势图」）；装饰图用 `alt=""` 让阅读器跳过；不要写「图片：」前缀。\n' +
            '2. 仅设 width 或 height 一个会导致图片变形，应同时设或用 CSS aspect-ratio 保持比例。\n' +
            '3. 首屏图片不要用 lazy（会延迟首屏 LCP 指标），次屏图片才用 lazy。\n' +
            '4. 大图建议用 WebP/AVIF 等新格式（体积更小），配合 `<picture>` 兼容旧浏览器。\n' +
            '5. alt 不是 title——title 是悬停提示，alt 是替代文字，二者用途不同。\n\n' +
            '## 实际应用\n\n' +
            '电商商品详情页有大量图片，设置 width/height 防止图片加载导致页面跳动（影响 CLS 指标和用户体验），' +
            '用 loading="lazy" 让首屏外的图片延迟加载，显著提升首屏速度。新闻配图写好 alt 让图片搜索也能带来流量（图片 SEO）。\n\n' +
            '## 扩展知识\n\n' +
            '图片格式选择：照片用 JPEG/WebP，图标/扁平图用 PNG/SVG，动画用 WebP/AVIF 或视频。' +
            'SVG 是矢量格式，任意缩放不失真，适合 logo/图标，可直接内联到 HTML 用 CSS 控制颜色。' +
            'Core Web Vitals 三大指标：LCP（最大内容绘制，常被首屏大图影响）、CLS（布局抖动，靠 width/height 解决）、' +
            'INP（交互响应）。图片优化是 LCP 与 CLS 的关键战场。对于艺术指导（不同设备裁剪不同构图），用 `<picture>` + `<source media>`。',
          examples: [
            {
              title: '基础图片插入',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <img src="https://picsum.photos/300/200" alt="随机风景图" width="300" height="200">\n    <p>上方是一张示例图片</p>\n  </body>\n</html>',
              explanation:
                '设置宽高避免布局抖动；alt 描述图片内容供无障碍和加载失败时使用。',
            },
            {
              title: '懒加载与空 alt',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <img src="https://picsum.photos/100/100" alt="" width="100" height="100" loading="lazy">\n    <p>装饰性小图，alt 为空，屏幕阅读器会跳过</p>\n  </body>\n</html>',
              explanation:
                'loading="lazy" 延迟加载视口外的图片；空 alt 表示该图仅为装饰，无需朗读。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '插入一张图片：src 用 https://picsum.photos/200/200，alt 描述为「示例图」，设置宽高 200，开启懒加载。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <img src="___" alt="___" width="___" height="___" loading="___">\n  </body>\n</html>',
              hints: [
                'src 指向 picsum.photos/200/200',
                'alt 写有意义的描述',
                'loading="lazy" 开启懒加载',
              ],
            },
            {
              type: 'open-ended',
              prompt: '插入两张图：一张是内容图（alt 写描述），一张是装饰图（alt 为空）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 内容图 -->\n    <!-- 装饰图 -->\n  </body>\n</html>',
              hints: [
                '内容图 alt 写描述性文字',
                '装饰图用 alt="" 表示跳过',
                '都可加 loading="lazy"',
              ],
            },
          ],
          realWorldScenario:
            '电商商品详情页有大量图片，设置 width/height 防止图片加载导致页面跳动（影响 CLS 指标），用 loading="lazy" 让首屏外的图片延迟加载，显著提升首屏速度。',
        },
        {
          id: 'html-ch2-l3',
          title: '相对路径与绝对路径',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '路径用于定位资源（图片、CSS、JS、页面等），分绝对路径与相对路径两大类。' +
            '绝对路径包含完整协议和域名（`https://cdn.example.com/img/logo.png`），或从站点根目录开始的根相对路径（`/assets/logo.png`）。' +
            '相对路径基于当前文件所在位置：`./logo.png` 表示同级，`../logo.png` 表示上级目录，`images/logo.png` 表示下级子目录。\n\n' +
            '站点内资源推荐用相对路径或根相对路径（以 / 开头），便于项目整体迁移域名和部署目录。' +
            '跨域资源（CDN、第三方图床）必须用绝对路径。`./` 可省略，`images/logo.png` 等价于 `./images/logo.png`。' +
            '`../` 可连续使用返回多级：`../../logo.png` 返回两级目录。\n\n' +
            '路径错误是最常见的 404 原因。理解路径的关键在于明确「参照点」：绝对路径的参照点是域名根或完整 URL，' +
            '相对路径的参照点是当前文件所在目录。\n\n' +
            '## 语法说明\n\n' +
            '绝对路径：`https://域名/路径`（完整 URL）或 `/路径`（根相对，从站点根开始）。' +
            '相对路径：`文件名`（同级）、`./文件名`（同级，显式写法）、`子目录/文件名`（下级）、' +
            '`../文件名`（上级）、`../../文件名`（上两级）。' +
            'URL 中可带锚点 `#section` 和查询参数 `?key=value`。\n\n' +
            '## 路径类型对照表\n\n' +
            '| 路径类型 | 写法 | 参照点 | 示例 | 适用场景 |\n' +
            '| --- | --- | --- | --- | --- |\n' +
            '| 绝对 URL | `https://...` | 完整域名 | `https://cdn.com/a.png` | 跨域、CDN 资源 |\n' +
            '| 根相对路径 | `/...` | 站点根目录 | `/assets/logo.png` | 站内固定位置资源 |\n' +
            '| 同级相对路径 | `文件名` 或 `./文件名` | 当前文件目录 | `style.css` | 同目录资源 |\n' +
            '| 下级相对路径 | `目录/文件名` | 当前目录子目录 | `images/a.png` | 子目录资源 |\n' +
            '| 上级相对路径 | `../文件名` | 上一级目录 | `../logo.png` | 父目录资源 |\n' +
            '| 多级上级 | `../../文件名` | 上两级目录 | `../../common.js` | 公共资源 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：三种路径各引用一张图：\n\n' +
            '```html\n<body>\n  <!-- 绝对路径：跨域图片 -->\n  <img src="https://picsum.photos/100/100" alt="外链图">\n  <!-- 根相对路径：从站点根开始 -->\n  <img src="/assets/logo.png" alt="根目录资源">\n  <!-- 相对路径：同级 images 文件夹 -->\n  <img src="./images/photo.png" alt="同级资源">\n</body>\n```\n\n' +
            '示例二：上级目录引用（假设当前页在 /pages/about.html）：\n\n' +
            '```html\n<head>\n  <!-- 引用上级目录的样式 -->\n  <link rel="stylesheet" href="../style.css">\n  <!-- 引用上级目录的 images 子文件夹 -->\n</head>\n<body>\n  <img src="../images/bg.png" alt="上级子目录">\n</body>\n```\n\n' +
            '示例三：目录结构实战对照：\n\n' +
            '```text\n项目目录结构：\n  index.html\n  about.html\n  assets/\n    logo.png\n    css/\n      style.css\n  pages/\n    detail.html\n\n在 index.html 中引用：\n  <img src="assets/logo.png">     （下级）\n  <link href="assets/css/style.css"> （下级嵌套）\n\n在 pages/detail.html 中引用：\n  <img src="../assets/logo.png">  （上级再下级）\n```\n\n' +
            '## 注意事项\n\n' +
            '1. 大小写敏感：Windows/macOS 默认不敏感，但 Linux 服务器（多数生产环境）区分大小写。统一用小写命名可避免部署后 404。\n' +
            '2. 分隔符：Web 必须用正斜杠 `/`，Windows 习惯的反斜杠 `\\` 在 Web 上无效。\n' +
            '3. 避免过深的 `../../../../` 嵌套，说明目录结构设计有问题，考虑用根相对路径或调整结构。\n' +
            '4. 中文和空格在路径中需 URL 编码（空格变 `%20`），生产环境尽量用英文和短横线命名。\n' +
            '5. 根相对路径 `/assets/x.png` 依赖服务器根配置，本地直接打开 file:// 可能失效，需用本地服务器。\n\n' +
            '## 实际应用\n\n' +
            '将项目从本地 Windows 部署到 Linux 服务器后图片大面积 404——往往是路径大小写不一致（本地不敏感、服务器敏感）或用了反斜杠。' +
            '团队协作时约定统一的目录结构和命名规范（全小写、短横线分隔）能从根源减少此类问题。' +
            '构建工具（Webpack/Vite）可用别名（如 `@/assets`）替代深层相对路径，提升可维护性。\n\n' +
            '## 扩展知识\n\n' +
            '`<base href="/app/">` 标签可统一设置页面所有相对路径的基准 URL，在 SPA 子路径部署时有用。' +
            'data URI（`src="data:image/png;base64,..."`）可将小图内联为 Base64 字符串减少请求，适合小图标（但增加 HTML 体积）。' +
            '现代构建工具会自动处理路径：把相对路径的资源哈希命名、内联小图、转为 CDN 绝对地址，开发者只需写相对路径。' +
            '了解底层路径原理有助于排查构建工具配置问题。',
          examples: [
            {
              title: '路径示例对照',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 绝对路径：跨域图片 -->\n    <img src="https://picsum.photos/100/100" alt="外链图">\n    <!-- 根相对路径：从站点根开始 -->\n    <img src="/assets/logo.png" alt="根目录资源">\n    <!-- 相对路径：同级 images 文件夹 -->\n    <img src="./images/photo.png" alt="同级资源">\n  </body>\n</html>',
              explanation:
                '外链必须绝对路径；站内用相对或根相对路径便于迁移；./ 可省略。',
            },
            {
              title: '上级目录引用',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 假设当前文件在 /pages/about.html -->\n    <!-- 引用上级目录的图片 -->\n    <img src="../logo.png" alt="上级目录">\n    <!-- 引用上级目录的 images 子文件夹 -->\n    <img src="../images/bg.png" alt="上级子目录">\n  </body>\n</html>',
              explanation:
                '../ 返回上一级目录；可连续使用 ../../ 返回多级。路径错误是最常见的 404 原因。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用三种路径各引用一张图：绝对路径（picsum.photos/80/80）、根相对路径（/assets/a.png）、相对路径（./b.png）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 绝对路径 -->\n    <!-- 根相对路径 -->\n    <!-- 相对路径 -->\n  </body>\n</html>',
              hints: [
                '绝对路径以 https:// 开头',
                '根相对路径以 / 开头',
                '相对路径以 ./ 或直接文件夹名开头',
              ],
            },
            {
              type: 'open-ended',
              prompt: '假设当前页面在子文件夹内，用 ../ 引用上级目录的 style.css 与一张图片。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <!-- 引入上级目录 style.css -->\n  </head>\n  <body>\n    <!-- 引用上级目录的 logo.png -->\n  </body>\n</html>',
              hints: [
                '../style.css 返回上级目录',
                'link 标签引入 CSS',
                'img 标签引入图片',
              ],
            },
          ],
          realWorldScenario:
            '将项目从本地 Windows 部署到 Linux 服务器后图片大面积 404——往往是路径大小写不一致（本地不敏感、服务器敏感）或用了反斜杠。统一用小写和正斜杠可避免。',
        },
        {
          id: 'html-ch2-l4',
          title: 'figure 与媒体元素',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`<figure>` 用于包裹图文组合等独立内容单元，`<figcaption>` 为其添加说明标题。' +
            'figure 表示一段可从主内容流中移出（移到附录、侧栏）而不影响主内容理解的内容——' +
            '常用于图表、插图、代码片段、引文等需要配文字说明的场景。figcaption 让图文关系在语义上明确绑定，利于 SEO 和无障碍。\n\n' +
            '`<picture>` 标签配合 `<source>` 与 `srcset` 实现响应式图片与格式协商：' +
            '根据屏幕尺寸（media）、设备像素比（srcset + sizes）或格式支持选择最合适的图片源。' +
            '可提供 WebP/AVIF 等新格式并用 JPEG 兜底兼容旧浏览器，是现代图片优化的核心手段。\n\n' +
            '`<blockquote>` 表示块级引用（常配 `<cite>` 标注来源），`<q>` 表示行内引用（自动加引号）。' +
            '这些标签让引用内容有语义，便于样式统一和爬虫识别。`<cite>` 标注作品标题来源（非作者名）。\n\n' +
            '## 语法说明\n\n' +
            'figure：`<figure><img src="..." alt="..."><figcaption>图 1：说明文字</figcaption></figure>`。' +
            'picture：`<picture><source srcset="大图" media="(min-width:800px)"><img src="小图" alt="..."></picture>`。' +
            '格式协商：`<source srcset="photo.avif" type="image/avif"><source srcset="photo.webp" type="image/webp"><img src="photo.jpg" alt="...">`。' +
            'blockquote：`<blockquote cite="来源URL">引用内容</blockquote>`。\n\n' +
            '## 媒体语义标签表\n\n' +
            '| 标签 | 语义 | 用途 |\n' +
            '| --- | --- | --- |\n' +
            '| `<figure>` | 独立内容单元 | 图表、代码、引文 + 说明 |\n' +
            '| `<figcaption>` | figure 的标题/说明 | 必须在 figure 内，首个或末个子元素 |\n' +
            '| `<picture>` | 图片容器 | 包裹 source 与 img 做响应式/格式协商 |\n' +
            '| `<source>` | 图片源候选 | 配合 media/srcset/type 提供备选 |\n' +
            '| `<blockquote>` | 块级引用 | 大段引用，默认缩进 |\n' +
            '| `<q>` | 行内引用 | 自动加引号 |\n' +
            '| `<cite>` | 作品来源标题 | 标注引用的作品名 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：figure + figcaption 绑定图文：\n\n' +
            '```html\n<body>\n  <figure>\n    <img src="https://picsum.photos/300/200" alt="数据图表">\n    <figcaption>图 1：2024 年季度增长趋势</figcaption>\n  </figure>\n</body>\n```\n\n' +
            '示例二：响应式 picture（宽屏大图，窄屏小图）：\n\n' +
            '```html\n<body>\n  <picture>\n    <source srcset="https://picsum.photos/800/400" media="(min-width: 800px)">\n    <img src="https://picsum.photos/400/200" alt="响应式图片">\n  </picture>\n</body>\n```\n\n' +
            '示例三：格式协商（优先 AVIF，回退 WebP，再回退 JPEG）+ 引用：\n\n' +
            '```html\n<body>\n  <picture>\n    <source srcset="photo.avif" type="image/avif">\n    <source srcset="photo.webp" type="image/webp">\n    <img src="photo.jpg" alt="新格式图片">\n  </picture>\n  <blockquote cite="https://example.com">\n    这是一段引用的精彩内容。\n    <footer>—— <cite>某著名著作</cite></footer>\n  </blockquote>\n</body>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. figcaption 必须是 figure 的第一个或最后一个子元素，否则不识别为标题。\n' +
            '2. picture 内必须有 `<img>` 作为兜底（也是无 alt 的无障碍入口），source 只是候选，img 才真正渲染。\n' +
            '3. source 的 type 属性让浏览器按格式支持选择，第一个支持的格式生效；AVIF > WebP > JPEG 是常见优先级。\n' +
            '4. figure 可包含多张图或多段内容，只要它们作为一个整体被说明。\n' +
            '5. blockquote 内不要再用引号字符（浏览器/语义已表明是引用），用 CSS 控制样式即可。\n\n' +
            '## 实际应用\n\n' +
            '新闻网站的图片报道用 figure/figcaption 统一图文排版，编辑只需填内容；移动端通过 picture 自动加载裁剪版小图，节省流量。' +
            '技术博客用 figure 包裹代码截图配说明。格式协商让支持 AVIF 的浏览器享受更小体积，旧浏览器自动回退 JPEG。\n\n' +
            '## 扩展知识\n\n' +
            'figure 不仅用于图片，也可包裹代码块（`<figure><pre><code>...</code></pre><figcaption>示例 1</figcaption></figure>`）。' +
            'srcset 的 `w` 描述符（如 `photo.jpg 480w`）配合 sizes 让浏览器根据设备像素比和布局宽度智能选择，比 picture + media 更适合纯尺寸优化。' +
            'AVIF 格式压缩率比 JPEG 高 50% 以上且支持透明和动画，是新一代图片格式首选，但编码较慢适合构建期生成。' +
            'blockquote 的 cite 属性存来源 URL（机器可读），可见的来源展示用 `<cite>` 元素。',
          examples: [
            {
              title: 'figure + figcaption',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <figure>\n      <img src="https://picsum.photos/300/200" alt="数据图表">\n      <figcaption>图 1：2024 年季度增长趋势</figcaption>\n    </figure>\n  </body>\n</html>',
              explanation:
                'figure 将图与说明绑定为一组，figcaption 提供标题，语义上二者关联。',
            },
            {
              title: '响应式 picture',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <picture>\n      <source srcset="https://picsum.photos/800/400" media="(min-width: 800px)">\n      <img src="https://picsum.photos/400/200" alt="响应式图片">\n    </picture>\n  </body>\n</html>',
              explanation:
                '宽屏加载大图 source，窄屏回退到 img 的 src；picture 让不同设备加载合适尺寸。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 figure 包裹一张图片，并用 figcaption 添加说明「产品示意图」。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 用 figure + figcaption -->\n  </body>\n</html>',
              hints: [
                'figure 包裹 img 和 figcaption',
                'img 用 picsum.photos 占位图',
                'figcaption 写说明文字',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 picture + source + img 实现响应式图片：宽屏（min-width: 800px）加载大图，否则加载小图。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- picture + source + img -->\n  </body>\n</html>',
              hints: [
                'source 用 media="(min-width: 800px)"',
                'srcset 指定宽屏图片地址',
                'img 作为兜底，src 指定小图',
              ],
            },
          ],
          realWorldScenario:
            '新闻网站的图片报道用 figure/figcaption 统一图文排版，编辑只需填内容；移动端通过 picture 自动加载裁剪版小图，节省流量。',
        },
      ],
    },
    // ====================== 第三章 ======================
    {
      id: 'html-ch3',
      title: '列表与表格',
      order: 2,
      lessons: [
        {
          id: 'html-ch3-l1',
          title: '无序列表与有序列表',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'HTML 提供三种列表：`<ul>`（unordered list，无序列表）、`<ol>`（ordered list，有序列表）、`<dl>`（description list，描述列表，下节讲）。' +
            '`<ul>` 默认显示圆点（disc）项目符号，适合无先后顺序的列举（购物清单、标签云）；' +
            '`<ol>` 默认显示阿拉伯数字序号，适合有顺序的步骤（教程步骤、排名）。两者都用 `<li>`（list item）表示列表项。\n\n' +
            '`<ol>` 支持丰富的属性控制序号：`start` 指定起始序号，`type` 切换序号样式（1/a/A/i/I），' +
            '`reversed` 布尔属性让序号倒序排列。`<li>` 支持 `value` 属性单独设置某项的序号（影响后续项）。\n\n' +
            '列表可嵌套：在 `<li>` 内再放 `<ul>` 或 `<ol>` 形成多级列表，常用于导航菜单、目录树、步骤说明。' +
            '语义正确性很重要——`<ul>`/`<ol>` 的直接子元素必须且只能是 `<li>`，嵌套的内层列表要放在 `<li>` 内部而非直接放在 `<ul>` 下。\n\n' +
            '## 语法说明\n\n' +
            '无序：`<ul><li>项</li><li>项</li></ul>`。有序：`<ol><li>第一</li><li>第二</li></ol>`。' +
            '有序带属性：`<ol start="3" type="A" reversed>`。嵌套：`<li>父项 <ul><li>子项</li></ul></li>`。' +
            'li 设值：`<li value="5">`。\n\n' +
            '## 列表属性表\n\n' +
            '| 元素/属性 | 作用 | 取值 |\n' +
            '| --- | --- | --- |\n' +
            '| `<ul>` | 无序列表容器 | 直接子元素只能是 li |\n' +
            '| `<ol>` | 有序列表容器 | 直接子元素只能是 li |\n' +
            '| `<li>` | 列表项 | ul/ol 的子元素 |\n' +
            '| `ol start` | 起始序号 | 数字，如 `start="3"` |\n' +
            '| `ol type` | 序号样式 | `1`(数字)/`a`(小写)/`A`(大写)/`i`(小写罗马)/`I`(大写罗马) |\n' +
            '| `ol reversed` | 倒序 | 布尔属性 |\n' +
            '| `li value` | 单项序号 | 数字，影响后续项 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基础无序与有序列表：\n\n' +
            '```html\n<body>\n  <h3>购物清单</h3>\n  <ul>\n    <li>苹果</li>\n    <li>香蕉</li>\n    <li>橙子</li>\n  </ul>\n  <h3>操作步骤</h3>\n  <ol>\n    <li>打开编辑器</li>\n    <li>编写代码</li>\n    <li>保存运行</li>\n  </ol>\n</body>\n```\n\n' +
            '示例二：有序列表属性（start/type）与嵌套：\n\n' +
            '```html\n<body>\n  <ol start="3" type="A">\n    <li>第三项</li>\n    <li>第四项\n      <ul>\n        <li>子项 A</li>\n        <li>子项 B</li>\n      </ul>\n    </li>\n  </ol>\n</body>\n```\n\n' +
            '示例三：li value 单独设值与 reversed：\n\n' +
            '```html\n<body>\n  <ol>\n    <li>正常第一项</li>\n    <li value="10">跳到第 10 项</li>\n    <li>这是第 11 项（接着 10）</li>\n  </ol>\n  <ol reversed>\n    <li>倒数第三</li>\n    <li>倒数第二</li>\n    <li>倒数第一</li>\n  </ol>\n</body>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. `<ul>`/`<ol>` 的直接子元素必须是 `<li>`，不能直接放文字或其他标签（会被浏览器容错包进 li，但不规范）。\n' +
            '2. 嵌套列表必须放在 `<li>` 内部，不能放在两个 li 之间。\n' +
            '3. 项目符号样式（圆点/方块/无）应用 CSS `list-style-type` 控制，而非依赖 HTML 属性（`type` 属性在 ul 上已废弃）。\n' +
            '4. 列表默认有 padding-left 缩进，用 CSS `list-style: none; padding: 0;` 重置后常用于导航。\n' +
            '5. 语义上，有顺序用 ol，无顺序用 ul，不要为了数字而用 ol（数字本身可由 CSS 生成）。\n\n' +
            '## 实际应用\n\n' +
            '设计网站导航菜单时，多级下拉通常用嵌套 ul 实现：顶层 ul 是主菜单，每个 li 内的 ul 是子菜单，配合 CSS 控制显示隐藏。' +
            '面包屑导航、步骤指引、排行榜都用列表语义化构建，便于无障碍阅读和样式统一。\n\n' +
            '## 扩展知识\n\n' +
            'CSS `list-style-type` 支持丰富符号：`disc`/`circle`/`square`/`none`/`decimal`/`lower-alpha`/`upper-roman` 等，' +
            '甚至自定义 `list-style-type: "★"`。用 `::marker` 伪元素可单独样式化项目符号（改颜色、字号）。' +
            '现代布局中列表常被 `display: flex/grid` 重置为横排，list 语义保留给内容结构，布局交给 CSS。' +
            '有序列表的 `reversed` 属性只是视觉倒序，DOM 顺序不变，JS 操作时注意区分。',
          examples: [
            {
              title: '基础无序与有序列表',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <h3>购物清单</h3>\n    <ul>\n      <li>苹果</li>\n      <li>香蕉</li>\n      <li>橙子</li>\n    </ul>\n    <h3>操作步骤</h3>\n    <ol>\n      <li>打开编辑器</li>\n      <li>编写代码</li>\n      <li>保存运行</li>\n    </ol>\n  </body>\n</html>',
              explanation:
                'ul 适合无先后顺序的列举；ol 适合有顺序的步骤。两者均用 li 作列表项。',
            },
            {
              title: '有序列表属性与嵌套',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <ol start="3" type="A">\n      <li>第三项</li>\n      <li>第四项\n        <ul>\n          <li>子项 A</li>\n          <li>子项 B</li>\n        </ul>\n      </li>\n    </ol>\n  </body>\n</html>',
              explanation:
                'start=3 从 C 开始；type="A" 用大写字母；li 内嵌套 ul 形成多级列表。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建一个无序列表，包含三项：「HTML」「CSS」「JavaScript」。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <ul>\n      <li>___</li>\n      <li>___</li>\n      <li>___</li>\n    </ul>\n  </body>\n</html>',
              expected_output: 'JavaScript',
              hints: [
                'ul 包裹三个 li',
                '每项内容分别是 HTML、CSS、JavaScript',
                '无序列表用 ul，有序用 ol',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建一个有序列表表示三步教程，从第 2 步开始编号，并让第二步包含一个无序子列表两项。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 有序列表 start=2，第二步嵌套无序列表 -->\n  </body>\n</html>',
              hints: [
                'ol 加 start="2"',
                '在某个 li 内嵌套 ul',
                '子列表项也是 li',
              ],
            },
          ],
          realWorldScenario:
            '设计网站导航菜单时，多级下拉通常用嵌套 ul 实现：顶层 ul 是主菜单，每个 li 内的 ul 是子菜单，配合 CSS 控制显示隐藏。',
        },
        {
          id: 'html-ch3-l2',
          title: '定义列表与嵌套列表',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '`<dl>`（description list，描述列表）是 HTML 第三种列表，用 `<dt>`（description term）表示术语、' +
            '`<dd>`（description detail）表示描述。它强调「术语—解释」的成对关系，常用于术语表、键值对、' +
            'FAQ（问题—答案）、商品规格表、元数据展示等场景。一个 dt 可对应多个 dd，一个 dd 也可对应多个 dt。\n\n' +
            '与 ul/ol 相比，dl 表达的不是「项目列表」而是「名值对」，语义更精确。' +
            '例如 FAQ 页面用 dl 结构化「问题—答案」比 div 套 p 更有语义价值，屏幕阅读器能识别术语与描述的关系。' +
            '浏览器默认给 dd 左侧缩进，视觉上区分术语与描述。\n\n' +
            '嵌套列表的常见用途：网站侧边栏的多级分类、文件目录树、面包屑导航。要注意语义层级：' +
            '外层 li 包裹内层 ul，不要把内层 ul 直接放在外层 ul 下（必须先有 li 包裹），否则结构不合法。\n\n' +
            '## 语法说明\n\n' +
            '描述列表：`<dl><dt>术语</dt><dd>描述</dd></dl>`。' +
            '多描述：`<dt>术语</dt><dd>解释一</dd><dd>解释二</dd>`。' +
            '嵌套列表：外层 `<ul><li>分类 <ul><li>子项</li></ul></li></ul>`（内层 ul 在 li 内）。\n\n' +
            '## 描述列表标签表\n\n' +
            '| 标签 | 语义 | 说明 |\n' +
            '| --- | --- | --- |\n' +
            '| `<dl>` | 描述列表容器 | 包裹 dt/dd 组 |\n' +
            '| `<dt>` | 术语 | 被解释的词，默认不加粗 |\n' +
            '| `<dd>` | 描述 | 对术语的解释，默认左缩进 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：定义列表展示术语表：\n\n' +
            '```html\n<body>\n  <dl>\n    <dt>HTML</dt>\n    <dd>超文本标记语言，用于构建网页结构</dd>\n    <dt>CSS</dt>\n    <dd>层叠样式表，用于设置网页样式</dd>\n    <dt>JavaScript</dt>\n    <dd>脚本语言，用于实现网页交互</dd>\n  </dl>\n</body>\n```\n\n' +
            '示例二：一个术语对应多个描述（FAQ 风格）：\n\n' +
            '```html\n<body>\n  <dl>\n    <dt>什么是 HTML？</dt>\n    <dd>HTML 是超文本标记语言。</dd>\n    <dd>它由一系列标签组成，描述网页结构。</dd>\n  </dl>\n</body>\n```\n\n' +
            '示例三：多级嵌套列表（目录树）：\n\n' +
            '```html\n<body>\n  <ul>\n    <li>前端\n      <ul>\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>JavaScript</li>\n      </ul>\n    </li>\n    <li>后端\n      <ul>\n        <li>Node.js</li>\n        <li>Python</li>\n      </ul>\n    </li>\n  </ul>\n</body>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. dl 内不应直接放文字，应组织为 dt/dd 对。HTML5 允许在 dl 内放 div 包裹 dt/dd 组（便于样式分组），但不推荐滥用。\n' +
            '2. 嵌套列表的内层 ul/ol 必须放在外层 li 内部，不能直接放在外层 ul/ol 与 li 之间。\n' +
            '3. dt 默认不加粗，如需加粗用 CSS `font-weight`，不要用 `<b>` 包裹。\n' +
            '4. dd 可包含块级元素（段落、图片等），不仅限于文字。\n' +
            '5. 深层嵌套（4 级以上）可读性差，考虑用其他组件（如树形控件）替代。\n\n' +
            '## 实际应用\n\n' +
            '文档站的术语表页面用 dl 结构化概念解释，既便于编辑维护，又让搜索引擎能识别「术语—定义」关系，提升知识类页面的搜索权重。' +
            '电商商品详情的规格参数（品牌/型号/重量）用 dl 展示，结构清晰。多级嵌套 ul 是文件管理器、目录导航的标准结构。\n\n' +
            '## 扩展知识\n\n' +
            'HTML5 规范允许 dl 内用 `<div>` 包裹一组 dt/dd（`<dl><div><dt>..</dt><dd>..</dd></div></dl>`），便于给每组加样式或边框。' +
            'CSS 可用 `display: grid` 把 dl 渲染成两列表格（dt 一列、dd 一列），比真正的 table 更语义化。' +
            '嵌套列表配合 CSS `details/summary` 可实现零 JS 的可折叠目录树。' +
            '无障碍方面，dl 暠示「关联的名值对」，但当前 ARIA 对 dl 的支持有限，必要时可补充 role。',
          examples: [
            {
              title: '定义列表示术语',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <dl>\n      <dt>HTML</dt>\n      <dd>超文本标记语言，用于构建网页结构</dd>\n      <dt>CSS</dt>\n      <dd>层叠样式表，用于设置网页样式</dd>\n    </dl>\n  </body>\n</html>',
              explanation:
                'dl 表示描述列表，dt 是术语，dd 是描述，浏览器默认给 dd 缩进。',
            },
            {
              title: '多级嵌套列表',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <ul>\n      <li>前端\n        <ul>\n          <li>HTML</li>\n          <li>CSS</li>\n          <li>JavaScript</li>\n        </ul>\n      </li>\n      <li>后端\n        <ul>\n          <li>Node.js</li>\n          <li>Python</li>\n        </ul>\n      </li>\n    </ul>\n  </body>\n</html>',
              explanation:
                '内层 ul 必须放在外层 li 内部，形成正确的嵌套层级。这是树形目录的标准写法。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 dl 创建一个术语表：包含「前端」「后端」两个术语及各自的一句话描述。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- dl + dt + dd -->\n  </body>\n</html>',
              hints: [
                'dl 包裹整组',
                '每个术语用 dt，描述用 dd',
                'dt 与 dd 成对出现',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用嵌套 ul 构建一个两级分类目录：「水果」下有「苹果、香蕉」，「蔬菜」下有「白菜、萝卜」。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 两级嵌套 ul -->\n  </body>\n</html>',
              hints: [
                '外层 ul 包裹两个分类 li',
                '每个分类 li 内再放一个 ul',
                '内层 ul 的 li 是具体项',
              ],
            },
          ],
          realWorldScenario:
            '文档站的术语表页面用 dl 结构化概念解释，既便于编辑维护，又让搜索引擎能识别「术语—定义」关系，提升知识类页面的搜索权重。',
        },
        {
          id: 'html-ch3-l3',
          title: '表格结构 thead/tbody/tr/th/td',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '表格用 `<table>` 创建，用于展示二维结构化数据（行列对应的数据矩阵）。结构上分三部分：' +
            '`<thead>`（表头，放标题行）、`<tbody>`（主体，放数据行）、`<tfoot>`（表尾，放汇总行，可选）。' +
            '每行用 `<tr>`（table row），表头单元格用 `<th>`（table header，默认加粗居中），数据单元格用 `<td>`（table data）。\n\n' +
            '这种 thead/tbody/tfoot 的分离让表格结构清晰，便于 CSS 分别样式化（如表头固定、主体滚动），' +
            '也利于打印时表头在每页重复。`<th>` 的 `scope` 属性（`col`/`row`）声明该表头对应整列还是整行，' +
            '帮助屏幕阅读器正确朗读表格行列关系，是无障碍的必备实践。\n\n' +
            '`colspan`/`rowspan` 属性让单元格跨列/跨行合并，用于不规则表格（如分类表头跨多列）。' +
            '现代表格应通过 CSS 控制边框、间距、斑马纹等样式，不再用 `border`/`cellpadding`/`cellspacing` 等 HTML 属性（已废弃）。' +
            '重要原则：表格仅用于展示二维数据，不要用 table 做页面布局——那是上世纪做法，flex/grid 才是现代布局方案。\n\n' +
            '## 语法说明\n\n' +
            '结构：`<table><thead><tr><th scope="col">列标题</th></tr></thead><tbody><tr><td>数据</td></tr></tbody></table>`。' +
            '跨列：`<td colspan="2">`（占两列，该行少写一个 td）。跨行：`<td rowspan="2">`（占两行，下一行少写一个 td）。' +
            '表头声明：`<th scope="col">`（列头）或 `<th scope="row">`（行头）。\n\n' +
            '## 表格元素与属性表\n\n' +
            '| 元素/属性 | 作用 | 说明 |\n' +
            '| --- | --- | --- |\n' +
            '| `<table>` | 表格容器 | 包裹所有行列 |\n' +
            '| `<thead>` | 表头区域 | 放标题行，可选但推荐 |\n' +
            '| `<tbody>` | 主体区域 | 放数据行 |\n' +
            '| `<tfoot>` | 表尾区域 | 放汇总行，可选 |\n' +
            '| `<tr>` | 行 | table row |\n' +
            '| `<th>` | 表头单元格 | 默认加粗居中 |\n' +
            '| `<td>` | 数据单元格 | table data |\n' +
            '| `th scope` | 对应范围 | `col`(列)/`row`(行)，无障碍必备 |\n' +
            '| `colspan` | 跨列合并 | 数字，如 `colspan="2"` |\n' +
            '| `rowspan` | 跨行合并 | 数字，如 `rowspan="3"` |\n' +
            '| `<caption>` | 表格标题 | table 的首个子元素，描述表格用途 |\n' +
            '| `<colgroup>`/`<col>` | 列组 | 批量给列设样式 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：标准表格结构（thead + tbody + scope）：\n\n' +
            '```html\n<body>\n  <table>\n    <caption>用户列表</caption>\n    <thead>\n      <tr>\n        <th scope="col">姓名</th>\n        <th scope="col">年龄</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td>小明</td><td>20</td></tr>\n      <tr><td>小红</td><td>22</td></tr>\n    </tbody>\n  </table>\n</body>\n```\n\n' +
            '示例二：rowspan 跨行合并：\n\n' +
            '```html\n<body>\n  <table border="1">\n    <tr>\n      <th scope="col">分类</th>\n      <th scope="col">项目</th>\n    </tr>\n    <tr>\n      <td rowspan="2">前端</td>\n      <td>HTML</td>\n    </tr>\n    <tr>\n      <td>CSS</td>\n    </tr>\n  </table>\n</body>\n```\n\n' +
            '示例三：colspan 跨列表头 + tfoot 汇总：\n\n' +
            '```html\n<body>\n  <table border="1">\n    <thead>\n      <tr>\n        <th scope="col">商品</th>\n        <th scope="col" colspan="2">销售（数量/金额）</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td>A</td><td>10</td><td>200</td></tr>\n      <tr><td>B</td><td>5</td><td>150</td></tr>\n    </tbody>\n    <tfoot>\n      <tr><td>合计</td><td>15</td><td>350</td></tr>\n    </tfoot>\n  </table>\n</body>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. 用 CSS（border-collapse、padding）控制样式，不用 HTML 的 border/cellpadding/cellspacing 属性（已废弃）。\n' +
            '2. `th` 务必加 `scope` 属性帮助屏幕阅读器朗读行列关系，这是表格无障碍的核心。\n' +
            '3. 合并单元格后要相应减少该行/列的 td/th 数量，否则表格结构错乱。\n' +
            '4. `<caption>` 是表格的语义标题（首个子元素），比在表外加 h 标题更规范，可用 CSS 隐藏但保留语义。\n' +
            '5. 不要用 table 做布局——屏幕阅读器会把布局表格朗读成数据表格，造成混乱；用 CSS Grid/Flex 替代。\n\n' +
            '## 实际应用\n\n' +
            '后台管理系统的数据报表几乎都是表格——分页、排序、筛选都需要 thead/tbody 结构清晰，配合 CSS 实现斑马纹（nth-child）和悬浮高亮（hover）。' +
            '移动端表格宽度溢出时，用外层 `<div style="overflow-x:auto">` 包裹实现横向滚动，而非压缩列宽。\n\n' +
            '## 扩展知识\n\n' +
            '`border-collapse: collapse` 让相邻单元格边框合并为单线（比 spacing 美观）。' +
            '`<colgroup>` + `<col>` 可批量给某列设宽度：`<colgroup><col style="width:30%"><col></colgroup>`。' +
            '复杂表格的无障碍可进一步用 `headers`/`id` 属性建立单元格与表头的显式关联（scope 不够时）。' +
            '大数据量表格考虑虚拟滚动（如 react-window）避免渲染上万行卡顿。' +
            '响应式表格技巧：窄屏用 `data-label` 属性 + CSS `::before` 把每行转成卡片式展示。',
          examples: [
            {
              title: '标准表格结构',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <table>\n      <thead>\n        <tr>\n          <th scope="col">姓名</th>\n          <th scope="col">年龄</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>小明</td><td>20</td></tr>\n        <tr><td>小红</td><td>22</td></tr>\n      </tbody>\n    </table>\n  </body>\n</html>',
              explanation:
                'thead/tbody 分离表头与数据；th 的 scope 帮助无障碍朗读；样式交给 CSS。',
            },
            {
              title: '单元格合并',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <table border="1">\n      <tr>\n        <th scope="col">分类</th>\n        <th scope="col">项目</th>\n      </tr>\n      <tr>\n        <td rowspan="2">前端</td>\n        <td>HTML</td>\n      </tr>\n      <tr>\n        <td>CSS</td>\n      </tr>\n    </table>\n  </body>\n</html>',
              explanation:
                'rowspan="2" 让「前端」单元格纵向跨两行；colspan 横向跨列。合并后要少写对应的 td。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '创建一个含 thead 和 tbody 的表格：表头为「商品」「价格」，两行数据自拟。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- table > thead + tbody -->\n  </body>\n</html>',
              hints: [
                'thead 内 tr 放 th',
                'tbody 内 tr 放 td',
                'th 加 scope="col" 更规范',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建一个表格，其中某个表头单元格横向跨两列（colspan="2"），下方对应两列数据。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 用 colspan 合并表头 -->\n  </body>\n</html>',
              hints: [
                'th 加 colspan="2" 跨两列',
                '该表头所在行的其他 th/td 数量相应减少',
                '下方数据行保持两列 td',
              ],
            },
          ],
          realWorldScenario:
            '后台管理系统的数据报表几乎都是表格——分页、排序、筛选都需要 thead/tbody 结构清晰，配合 CSS 实现斑马纹和悬浮高亮。',
        },
      ],
    },
    // ====================== 第四章 ======================
    {
      id: 'html-ch4',
      title: '表单',
      order: 3,
      lessons: [
        {
          id: 'html-ch4-l1',
          title: 'form 与 input 基础',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '表单是 Web 应用与用户交互的核心载体，承担数据采集、提交与服务端通信的职责。' +
            '`<form>` 作为容器，将内部所有控件（input、select、textarea、button）组合为一个逻辑单元，' +
            '在提交时一并发送到服务端。没有 form 包裹的控件虽然能渲染，但无法享受原生提交能力，' +
            '只能通过 JS 手动收集与发送，体验和可访问性都会下降。\n\n' +
            '`<input>` 是最常用的输入控件，通过 `type` 属性切换形态：text（文本）、password（密码）、' +
            'email、number、date、checkbox、radio 等。每种类型对应不同的键盘布局、校验规则与原生 UI，' +
            '选择合适的类型能大幅减少 JS 工作量并提升移动端体验。\n\n' +
            '每个 input 都应配 `<label>`，通过 `for` 属性关联 input 的 `id`。' +
            '点击 label 会聚焦对应 input，屏幕阅读器朗读 label 文字，是无障碍必备。' +
            '`placeholder` 提供提示，`value` 设默认值，`required` 标记必填。' +
            '`name` 是提交字段名，`id` 是页面内唯一标识，两者用途不同通常都写。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<form action="提交地址" method="get|post" enctype="编码类型" target="打开方式">\n  <label for="字段id">标签文字</label>\n  <input type="text" id="字段id" name="字段名" placeholder="提示" value="默认值" required>\n  <button type="submit">提交</button>\n</form>\n```\n\n' +
            '`action` 指定处理表单的 URL；`method` 取 `get`（数据附在 URL 查询串，适合检索）或 `post`（数据放请求体，适合提交敏感/大量数据）；' +
            '`enctype` 默认 `application/x-www-form-urlencoded`，上传文件需用 `multipart/form-data`；' +
            '`target` 控制提交后响应打开位置，常用 `_self`（当前页）或 `_blank`（新窗口）。\n\n' +
            '## form 常用属性表\n\n' +
            '| 属性 | 说明 | 常用值 |\n' +
            '| --- | --- | --- |\n' +
            '| action | 表单提交目标 URL | 接口地址、相对路径 |\n' +
            '| method | HTTP 方法 | get / post |\n' +
            '| enctype | 编码类型 | application/x-www-form-urlencoded / multipart/form-data / text/plain |\n' +
            '| target | 提交后打开位置 | _self / _blank |\n' +
            '| autocomplete | 自动填充开关 | on / off |\n' +
            '| novalidate | 禁用原生校验 | 布尔属性 |\n\n' +
            '## input 常用属性表\n\n' +
            '| 属性 | 说明 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| type | 控件类型 | text / password / email / number / date / checkbox / radio |\n' +
            '| name | 提交字段名 | name="user" |\n' +
            '| value | 默认值 | value="张三" |\n' +
            '| placeholder | 占位提示 | placeholder="请输入" |\n' +
            '| required | 必填 | 布尔属性 |\n' +
            '| disabled | 禁用 | 布尔属性，不提交 |\n' +
            '| readonly | 只读 | 布尔属性，会提交 |\n' +
            '| autofocus | 自动聚焦 | 布尔属性，页面仅一个 |\n' +
            '| autocomplete | 自动填充 | on / off |\n\n' +
            '## 代码示例\n\n' +
            '示例一：标准登录表单\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <!-- action 提交地址，method 用 post 避免密码出现在 URL -->\n    <form action="/login" method="post">\n      <div>\n        <!-- label 的 for 关联 input 的 id，点击文字可聚焦 -->\n        <label for="user">用户名：</label>\n        <input type="text" id="user" name="user" required placeholder="3-12 位">\n      </div>\n      <div>\n        <label for="pwd">密码：</label>\n        <input type="password" id="pwd" name="pwd" required>\n      </div>\n      <button type="submit">登录</button>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '示例二：单选与复选\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <p>性别：</p>\n      <!-- 同名 radio 互斥单选 -->\n      <label><input type="radio" name="gender" value="m">男</label>\n      <label><input type="radio" name="gender" value="f">女</label>\n      <p>兴趣：</p>\n      <!-- 同名 checkbox 多选 -->\n      <label><input type="checkbox" name="hobby" value="read">阅读</label>\n      <label><input type="checkbox" name="hobby" value="music">音乐</label>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '示例三：文件上传与隐藏字段\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 上传文件必须 method=post 且 enctype=multipart/form-data -->\n    <form action="/upload" method="post" enctype="multipart/form-data">\n      <label for="avatar">头像：</label>\n      <input type="file" id="avatar" name="avatar" accept="image/*">\n      <!-- hidden 存放不可见数据，如 CSRF token -->\n      <input type="hidden" name="token" value="abc123">\n      <button type="submit">上传</button>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. `get` 方法会把数据拼到 URL 后，密码等敏感信息绝不能用 get，且 URL 长度有限制（约 2KB）。\n' +
            '2. `disabled` 的控件不会提交，`readonly` 的会提交——切换只读与可编辑时要注意区别。\n' +
            '3. 同一组 radio/checkbox 必须用相同 `name` 才能联动；radio 互斥，checkbox 可多选。\n' +
            '4. 上传文件表单必须设 `enctype="multipart/form-data"` 且 `method="post"`，否则文件无法传输。\n' +
            '5. `placeholder` 只是提示不能替代 label，提交空值时无文字可朗读，影响无障碍。\n' +
            '6. hidden 字段虽不可见，但可通过开发者工具查看，切勿存放 API Key、密码等敏感信息。\n\n' +
            '## 实际应用\n\n' +
            '落地页的「邮件订阅」表单只需一个 email input 加订阅按钮，配合 label 和 required 就能采集线索；' +
            '注册/登录页用 password 类型隐藏输入；后台搜索栏用 get 方法把关键词写进 URL 便于分享与收藏。' +
            '表单是用户与产品交互的入口，结构清晰、控件类型恰当直接影响转化率。\n\n' +
            '## 扩展知识\n\n' +
            'HTML5 的 `form` 属性允许控件写在 form 标签之外仍归属该表单：' +
            '`<input form="myForm">`。`<output>` 标签用于展示计算结果。' +
            '现代框架（React/Vue）常不用原生提交，而是监听 submit 事件用 JS 收集数据通过 fetch 发送，' +
            '但 form 的语义结构、原生校验、无障碍关联仍应保留——这是渐进增强的基础。',
          examples: [
            {
              title: '登录表单',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form action="/login" method="post">\n      <div>\n        <label for="user">用户名：</label>\n        <input type="text" id="user" name="user" required>\n      </div>\n      <div>\n        <label for="pwd">密码：</label>\n        <input type="password" id="pwd" name="pwd" required>\n      </div>\n      <button type="submit">登录</button>\n    </form>\n  </body>\n</html>',
              explanation:
                'label 的 for 与 input 的 id 关联；type="password" 隐藏输入；required 强制填写。',
            },
            {
              title: '单选与复选',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <p>性别：</p>\n      <label><input type="radio" name="gender" value="m">男</label>\n      <label><input type="radio" name="gender" value="f">女</label>\n      <p>兴趣：</p>\n      <label><input type="checkbox" name="hobby" value="read">阅读</label>\n      <label><input type="checkbox" name="hobby" value="music">音乐</label>\n    </form>\n  </body>\n</html>',
              explanation:
                '同名 radio 互斥单选；同名 checkbox 多选。用 label 包裹 input 可点击文字选择。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '创建一个表单，包含一个文本输入框（placeholder 为「邮箱」）和一个提交按钮「注册」。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <input type="text" placeholder="___">\n      <button type="submit">___</button>\n    </form>\n  </body>\n</html>',
              expected_output: '注册',
              hints: [
                'placeholder 设为「邮箱」',
                'button 文字为「注册」',
                'button type="submit" 提交表单',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建一个带 label 的密码输入表单：label 文字「密码」，input id 与 label for 关联，必填。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <!-- label + input[type=password] -->\n    </form>\n  </body>\n</html>',
              hints: [
                'label 的 for 等于 input 的 id',
                'type="password" 隐藏输入',
                'required 标记必填',
              ],
            },
          ],
          realWorldScenario:
            '落地页的「邮件订阅」表单只需一个 email input 加订阅按钮，配合 label 和 required 就能采集线索；后台用 method/action 对接邮件服务。',
        },
        {
          id: 'html-ch4-l2',
          title: 'input 类型与属性',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            'HTML5 在传统 text/password 之外新增了大量 input type：email、url、number、date、time、' +
            'month、week、datetime-local、color、range、search、tel 等。' +
            '这些类型不只是外观不同，浏览器会根据类型自动提供合适的虚拟键盘、原生校验和交互组件（如日期选择器、颜色拾取器），' +
            '让开发者无需引入额外 JS 库即可获得良好的移动端体验和基础校验能力。\n\n' +
            '选择恰当的 type 是「渐进增强」思想的体现：在支持新类型的浏览器中获得增强体验，' +
            '在不支持的浏览器中回退为普通文本框，表单仍能正常工作。这样既享受现代特性又不丢兼容性。\n\n' +
            '`<input type="hidden">` 用于存放不可见数据（如 CSRF token、记录 ID），会随表单提交但用户看不到。' +
            '注意 hidden 字段仍可被开发者工具查看，不要放敏感信息。合理使用 type 能免费获得浏览器原生校验。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<input type="类型名" name="字段" min="最小" max="最大" step="步进"\n       maxlength="最大长度" pattern="正则" title="校验提示"\n       disabled readonly autofocus autocomplete="on|off"\n       list="datalist的id" multiple>\n```\n\n' +
            '数值类（number/range）支持 `min`/`max`/`step`；文本类支持 `maxlength`/`pattern`；' +
            '所有类型都支持 `disabled`/`readonly`/`autofocus`/`autocomplete`。' +
            '`list` 关联 `<datalist>` 提供候选建议；`multiple` 允许 email/file 多值。\n\n' +
            '## input type 类型表\n\n' +
            '| type | 说明 | 移动端特性 | 原生校验 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| text | 单行文本（默认） | 标准键盘 | 无 |\n' +
            '| password | 密码（隐藏输入） | 标准键盘 | 无 |\n' +
            '| email | 邮箱 | 显示 @ 键 | 邮箱格式 |\n' +
            '| url | 网址 | 显示 .com 键 | URL 格式 |\n' +
            '| tel | 电话 | 弹出数字键盘 | 无（需 pattern） |\n' +
            '| number | 数字 | 数字键盘 | 数值范围 |\n' +
            '| date | 日期 | 日期选择器 | 日期格式 |\n' +
            '| time | 时间 | 时间选择器 | 时间格式 |\n' +
            '| datetime-local | 日期时间 | 组合选择器 | 格式校验 |\n' +
            '| month / week | 月 / 周 | 选择器 | 格式校验 |\n' +
            '| color | 颜色 | 颜色拾取器 | 无 |\n' +
            '| range | 滑块 | 滑动手势 | 范围 |\n' +
            '| search | 搜索框 | 标准键盘 + 搜索键 | 无 |\n' +
            '| file | 文件上传 | 调用相册/相机 | 无 |\n' +
            '| hidden | 隐藏字段 | 不显示 | 无 |\n\n' +
            '## 常用校验属性表\n\n' +
            '| 属性 | 作用 | 适用类型 |\n' +
            '| --- | --- | --- |\n' +
            '| required | 必填 | 所有可输入类型 |\n' +
            '| pattern | 正则校验 | text/tel/email/url/search |\n' +
            '| min / max | 数值/日期范围 | number/date/time/range |\n' +
            '| step | 步进值 | number/date/time/range |\n' +
            '| maxlength | 最大字符数 | text/email/search/tel/url/password |\n' +
            '| minlength | 最小字符数 | 同上 |\n' +
            '| title | 校验失败提示文案 | 配合 pattern 使用 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：多种 input 类型演示\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>邮箱：<input type="email" name="email"></label><br>\n      <label>年龄：<input type="number" name="age" min="0" max="150"></label><br>\n      <label>生日：<input type="date" name="birth"></label><br>\n      <label>颜色：<input type="color" name="color" value="#ff0000"></label><br>\n      <label>评分：<input type="range" name="score" min="0" max="10" step="1"></label>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '示例二：pattern 正则校验手机号\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>手机号：<input type="tel" pattern="1[0-9]{10}" title="请输入 11 位手机号" required></label>\n      <button>提交</button>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '示例三：datalist 候选建议\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>浏览器：\n        <input type="text" name="browser" list="browsers">\n      </label>\n      <datalist id="browsers">\n        <option value="Chrome">\n        <option value="Firefox">\n        <option value="Safari">\n      </datalist>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. 不支持新 type 的旧浏览器会回退为 text，需配合 pattern 做兜底校验，不能只依赖 type。\n' +
            '2. `pattern` 使用 JS 正则语法，注意不要加首尾 `/`，直接写 `1[0-9]{10}` 即可。\n' +
            '3. number 类型不接受小数除非 step 设为 `0.1` 或 `any`，否则会被判非法。\n' +
            '4. date/time 的值格式是 ISO 8601（如 `2024-01-01`、`14:30`），跨时区要特别处理。\n' +
            '5. color 类型返回的值是 `#rrggbb` 小写十六进制，不接受 rgba/hsl 等格式。\n' +
            '6. hidden 字段可被开发者工具查看修改，绝不能作为权限控制或安全校验依据。\n\n' +
            '## 实际应用\n\n' +
            '调查问卷表单大量用 range 滑块收集评分、用 date 收集事件日期、用 email 校验格式——' +
            '原生 input 类型省去了大量 JS 校验代码。注册页用 tel + pattern 校验手机号、用 date 让用户选生日、' +
            '配色工具用 color 让用户拾色——这些场景下原生类型即开即用。\n\n' +
            '## 扩展知识\n\n' +
            '配合 `<datalist>` 可以为 text 类型提供自动补全建议，比 select 更灵活（用户可输入自定义值）。' +
            '`inputmode` 属性可单独控制虚拟键盘类型而不改变 type（如 `inputmode="numeric"` 显示数字键盘但仍是 text）。' +
            '对于复杂的实时校验、异步查重，仍需 JS + fetch 实现，原生校验只做客户端基础拦截。',
          examples: [
            {
              title: '多种 input 类型',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>邮箱：<input type="email" name="email"></label><br>\n      <label>年龄：<input type="number" name="age" min="0" max="150"></label><br>\n      <label>生日：<input type="date" name="birth"></label><br>\n      <label>颜色：<input type="color" name="color"></label><br>\n      <label>评分：<input type="range" name="score" min="0" max="10"></label>\n    </form>\n  </body>\n</html>',
              explanation:
                '不同 type 触发不同键盘和校验；移动端 email 类型会显示 @ 键，date 弹出日期选择器。',
            },
            {
              title: 'pattern 与属性校验',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>手机号：<input type="tel" pattern="1[0-9]{10}" title="请输入 11 位手机号" required></label>\n      <button>提交</button>\n    </form>\n  </body>\n</html>',
              explanation:
                'pattern 用正则校验，title 提供校验失败提示；required 强制必填。浏览器原生拦截不合规输入。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '创建一个 number 输入框：年龄，范围 0-120，步进 1，必填。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>年龄：<input type="___" min="___" max="___" step="1" required></label>\n    </form>\n  </body>\n</html>',
              hints: [
                'type="number" 数字输入',
                'min="0" max="120"',
                'required 标记必填',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建一个邮箱输入框 type=email，必填，并加 pattern 校验手机号格式（tel 类型，11 位数字）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <!-- email input required -->\n      <!-- tel input pattern 校验 -->\n    </form>\n  </body>\n</html>',
              hints: [
                'email 类型自动校验邮箱格式',
                'tel 配 pattern="1[0-9]{10}"',
                'title 属性写校验失败提示',
              ],
            },
          ],
          realWorldScenario:
            '调查问卷表单大量用 range 滑块收集评分、用 date 收集事件日期、用 email 校验格式——原生 input 类型省去了大量 JS 校验代码。',
        },
        {
          id: 'html-ch4-l3',
          title: 'select/textarea/button',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '表单中除了 input，还有三类常用控件：`<select>` 下拉选择、`<textarea>` 多行文本、`<button>` 按钮。' +
            '它们各自解决 input 难以处理的场景：select 适合在固定选项中选一个或多个，textarea 适合长文本输入，' +
            'button 提供更灵活的提交/重置/自定义动作触发。\n\n' +
            '`<select>` 由一个 select 容器和若干 `<option>` 选项组成，`<optgroup>` 可对选项分组。' +
            '与 radio 相比 select 节省空间（选项多时尤其明显），但可见性差，选项少时优先用 radio。' +
            '`multiple` 属性允许多选，`size` 控制可见行数，但多选 select 的交互体验不如 checkbox 友好。\n\n' +
            '`<textarea>` 用于多行文本，与单行 input 最大的区别是：默认值放在标签内容而非 `value` 属性。' +
            '`<button>` 相比 `<input type="submit">` 更灵活，可包含 HTML 内容（图标+文字），样式可控性更强。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<!-- select 下拉 -->\n<select name="字段" multiple size="可见行数">\n  <optgroup label="分组名">\n    <option value="提交值" selected>显示文字</option>\n  </optgroup>\n</select>\n\n<!-- textarea 多行文本 -->\n<textarea name="字段" rows="行数" cols="列数" maxlength="最大字数"\n          placeholder="提示" readonly>默认内容写这里</textarea>\n\n<!-- button 按钮 -->\n<button type="submit|reset|button" name="字段" value="值">按钮内容（可含 HTML）</button>\n```\n\n' +
            '## select 常用属性表\n\n' +
            '| 属性 | 说明 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| name | 提交字段名 | name="city" |\n' +
            '| multiple | 允许多选 | 布尔属性 |\n' +
            '| size | 可见行数 | size="4" |\n' +
            '| disabled | 禁用整个 select | 布尔属性 |\n' +
            '| required | 必选 | 布尔属性 |\n' +
            '| autofocus | 自动聚焦 | 布尔属性 |\n\n' +
            '## option/optgroup 属性表\n\n' +
            '| 属性 | 说明 | 适用标签 |\n' +
            '| --- | --- | --- |\n' +
            '| value | 提交值 | option |\n' +
            '| selected | 默认选中 | option |\n' +
            '| disabled | 禁用该项 | option / optgroup |\n' +
            '| label | 分组标题 | optgroup |\n\n' +
            '## button type 取值表\n\n' +
            '| type | 行为 | 用途 |\n' +
            '| --- | --- | --- |\n' +
            '| submit | 提交表单（默认） | 触发 form 的 action |\n' +
            '| reset | 重置表单为初始值 | 清空用户输入 |\n' +
            '| button | 无默认行为 | 配合 JS 自定义动作 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：带分组的 select\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label for="city">城市：</label>\n      <select id="city" name="city">\n        <optgroup label="一线城市">\n          <option value="bj">北京</option>\n          <option value="sh">上海</option>\n        </optgroup>\n        <optgroup label="新一线">\n          <option value="hz">杭州</option>\n        </optgroup>\n      </select>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '示例二：textarea 与多 button\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label for="bio">个人简介：</label><br>\n      <textarea id="bio" name="bio" rows="4" cols="30" maxlength="200" placeholder="最多 200 字"></textarea>\n      <br>\n      <button type="submit">保存</button>\n      <button type="reset">清空</button>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '示例三：多选 select 与默认值\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>技能（按住 Ctrl 多选）：</label><br>\n      <select name="skills" multiple size="4">\n        <option value="html" selected>HTML</option>\n        <option value="css" selected>CSS</option>\n        <option value="js">JavaScript</option>\n        <option value="react">React</option>\n      </select>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. select 必须有至少一个 option，且至少一个有 value（否则提交空串）。\n' +
            '2. option 没写 value 时，提交的是 option 的文本内容，建议显式写 value 避免歧义。\n' +
            '3. textarea 的默认值写在标签之间，写 value 属性无效——这是与 input 的关键区别。\n' +
            '4. textarea 默认可在右下角拖拽缩放，用 CSS `resize: none` 可禁用。\n' +
            '5. button 在 form 内默认 type 是 submit，若只想做按钮动作务必显式写 `type="button"`。\n' +
            '6. multiple select 提交的是数组（同名 name 多值），服务端要用数组方式接收。\n\n' +
            '## 实际应用\n\n' +
            '内容发布后台的「写文章」表单：标题用 input，正文用 textarea（带字数统计），分类用 select，' +
            '状态用 button——这套组合是 CMS 的标配。地址选择器用 optgroup 按省分组提升查找效率；' +
            '评论框用 textarea + maxlength 限制字数；操作按钮用 button type="button" 配合 JS 触发异步请求。\n\n' +
            '## 扩展知识\n\n' +
            '原生 select 的样式跨浏览器不一致，现代项目常用 JS 库（如 Select2、Ant Design Select）' +
            '实现可搜索、可多标签、虚拟滚动的增强下拉。但底层仍是 select 或基于 button + ul 模拟。' +
            'textarea 字数统计需用 JS 监听 input 事件读 value.length；auto-grow（自动增高）也需 JS 配合' +
            '动态调整 height。`<button>` 内可放 `<svg>` 图标实现图标按钮，是图标 + 文字组合的常见做法。',
          examples: [
            {
              title: 'select 下拉框',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label for="city">城市：</label>\n      <select id="city" name="city">\n        <optgroup label="一线城市">\n          <option value="bj">北京</option>\n          <option value="sh">上海</option>\n        </optgroup>\n        <optgroup label="新一线">\n          <option value="hz">杭州</option>\n        </optgroup>\n      </select>\n    </form>\n  </body>\n</html>',
              explanation:
                'optgroup 给选项分组提升可读性；option 的 value 是提交值，文本是显示内容。',
            },
            {
              title: 'textarea 与 button',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label for="bio">个人简介：</label><br>\n      <textarea id="bio" name="bio" rows="4" cols="30" maxlength="200" placeholder="最多 200 字"></textarea>\n      <br>\n      <button type="submit">保存</button>\n      <button type="reset">清空</button>\n    </form>\n  </body>\n</html>',
              explanation:
                'textarea 用 rows/cols 定大小，maxlength 限字数；button type 区分提交/重置/普通。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '创建一个 select 下拉框，name 为「country」，包含三个选项：中国、美国、日本，默认选中中国。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <!-- select + 三个 option，默认选中中国 -->\n    </form>\n  </body>\n</html>',
              hints: [
                'select 包裹 option',
                '默认选中用 selected 属性',
                'option 的 value 是提交值',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建一个 textarea（4 行 40 列，最多 100 字）和两个按钮：提交「发布」、重置「清空」。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <!-- textarea -->\n      <!-- 两个 button -->\n    </form>\n  </body>\n</html>',
              hints: [
                'textarea 用 rows="4" cols="40"',
                'maxlength="100" 限制字数',
                'button type="submit" 和 type="reset"',
              ],
            },
          ],
          realWorldScenario:
            '内容发布后台的「写文章」表单：标题用 input，正文用 textarea（带字数统计），分类用 select，状态用 button——这套组合是 CMS 的标配。',
        },
        {
          id: 'html-ch4-l4',
          title: '表单验证与字段集',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '复杂表单往往包含十几个字段，直接铺开会让人晕头转向。`<fieldset>` 用于将相关控件分组，' +
            '`<legend>` 为分组添加标题。屏幕阅读器进入 fieldset 时会朗读 legend，帮助视障用户理解上下文。' +
            '合理分组让长表单结构清晰、填写负担降低，是无障碍和用户体验的双重提升。\n\n' +
            'HTML5 提供了一套原生验证机制：`required`（必填）、`pattern`（正则校验）、' +
            '`min`/`max`/`step`（数值范围）、`maxlength`/`minlength`（长度）、type 自带校验（email/url）。' +
            '浏览器在 submit 时自动拦截不合规输入并弹出提示，无需写 JS。这是渐进增强的典型实践。\n\n' +
            '需要自定义提示文案时用 JS 的 `setCustomValidity` 方法；要完全禁用原生校验用 `<form novalidate>`。' +
            '生产中通常结合原生校验 + JS 增强：原生做基础拦截，JS 做实时反馈、异步查重等高级校验。' +
            '必须牢记：前端校验仅为体验，服务端必须再次校验——所有客户端数据都不可信。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<form>\n  <fieldset>\n    <legend>分组标题</legend>\n    <!-- 该组内的控件 -->\n  </fieldset>\n  <fieldset disabled>\n    <legend>整组禁用</legend>\n    <!-- disabled 会禁用整组控件 -->\n  </fieldset>\n</form>\n```\n\n' +
            '## 原生校验属性表\n\n' +
            '| 属性/方法 | 作用 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| required | 必填 | `<input required>` |\n' +
            '| pattern | 正则校验 | `pattern="[a-z]{3,}"` |\n' +
            '| min / max | 数值或日期范围 | `min="18" max="99"` |\n' +
            '| step | 步进值 | `step="0.01"` |\n' +
            '| maxlength / minlength | 字符长度 | `maxlength="20"` |\n' +
            '| type | 自带格式校验 | `type="email"` |\n' +
            '| title | 校验失败提示 | `title="请输入正确格式"` |\n' +
            '| novalidate | 禁用 form 原生校验 | `<form novalidate>` |\n' +
            '| setCustomValidity | JS 自定义提示 | `el.setCustomValidity("已被占用")` |\n\n' +
            '## 代码示例\n\n' +
            '示例一：fieldset 分组表单\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <fieldset>\n        <legend>登录信息</legend>\n        <label>账号：<input type="text" required></label><br>\n        <label>密码：<input type="password" required></label>\n      </fieldset>\n      <fieldset>\n        <legend>联系方式</legend>\n        <label>邮箱：<input type="email" required></label>\n      </fieldset>\n      <button type="submit">提交</button>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '示例二：原生校验综合\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>用户名（3-12 位字母）：<input type="text" pattern="[a-zA-Z]{3,12}" required></label><br>\n      <label>年龄：<input type="number" min="18" max="99" required></label><br>\n      <label>邮箱：<input type="email" required></label><br>\n      <button type="submit">注册</button>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '示例三：JS 自定义校验\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>用户名：<input type="text" id="u" required></label>\n      <button type="submit">注册</button>\n    </form>\n    <script>\n      const input = document.getElementById("u");\n      input.addEventListener("input", () => {\n        // 异步校验用户名是否被占用\n        if (input.value === "admin") {\n          input.setCustomValidity("该用户名已被占用");\n        } else {\n          // 清空自定义提示，否则一直会拦截\n          input.setCustomValidity("");\n        }\n      });\n    </script>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. `setCustomValidity` 设置后必须手动清空（传空串），否则会一直拦截提交。\n' +
            '2. fieldset 加 `disabled` 会禁用整组控件且不提交，常用于「条件禁用」场景。\n' +
            '3. pattern 使用 JS 正则，注意 `^` `$` 不是必需的（HTML 会自动锚定），但写上更清晰。\n' +
            '4. 原生校验只在表单 submit 时触发，blur 或 input 时不会自动提示，需 JS 增强。\n' +
            '5. 服务端必须再次校验所有字段——前端校验可被绕过（直接构造请求），不可作为安全防线。\n' +
            '6. novalidate 不会禁用 JS 的 setCustomValidity，只是关掉浏览器默认校验 UI。\n\n' +
            '## 实际应用\n\n' +
            '电商结算页的收货地址表单字段多，用 fieldset 把「收货人」「地址」「支付」分组，' +
            '用户填起来不晕，无障碍用户也能快速定位。注册页用 pattern 校验用户名、用 min/max 限定年龄、' +
            '用 type=email 校验邮箱格式——这套组合让 90% 的非法输入在客户端被拦下，减少无效请求。\n\n' +
            '## 扩展知识\n\n' +
            'HTML5 还提供 `:valid` / `:invalid` 伪类，可基于校验状态渲染样式（如绿色边框/红色提示）。' +
            '`checkValidity()` 方法可在 JS 中主动触发校验。Constraint Validation API 提供了' +
            '`validity` 对象（包含 valueMissing、patternMismatch 等标志位），便于精确判断错误类型。' +
            '现代框架常在原生 API 基础上封装表单库（如 React Hook Form、Formik），' +
            '既保留原生能力又提供声明式 API。',
          examples: [
            {
              title: 'fieldset 分组',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <fieldset>\n        <legend>登录信息</legend>\n        <label>账号：<input type="text" required></label><br>\n        <label>密码：<input type="password" required></label>\n      </fieldset>\n      <fieldset>\n        <legend>联系方式</legend>\n        <label>邮箱：<input type="email" required></label>\n      </fieldset>\n      <button type="submit">提交</button>\n    </form>\n  </body>\n</html>',
              explanation:
                'fieldset/legend 把表单按主题分组，legend 是组标题，结构清晰利于无障碍。',
            },
            {
              title: '原生校验综合',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>用户名（3-12 位字母）：<input type="text" pattern="[a-zA-Z]{3,12}" required></label><br>\n      <label>年龄：<input type="number" min="18" max="99" required></label><br>\n      <label>邮箱：<input type="email" required></label><br>\n      <button type="submit">注册</button>\n    </form>\n  </body>\n</html>',
              explanation:
                'pattern 限定用户名格式；number 范围校验；email 格式校验。提交时浏览器自动拦截非法输入。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 fieldset + legend 把表单分成「基本信息」一组，内含姓名 input 和邮箱 input，均为必填。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <!-- fieldset > legend + 两个 required input -->\n    </form>\n  </body>\n</html>',
              hints: [
                'fieldset 包裹一组控件',
                'legend 写组标题',
                'input 加 required 必填',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建一个用户名输入框，用 pattern 校验 4-16 位字母数字组合，必填，title 写提示文案。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <label>用户名：<input type="text" pattern="___" title="___" required></label>\n      <button>提交</button>\n    </form>\n  </body>\n</html>',
              hints: [
                'pattern 用 [a-zA-Z0-9]{4,16}',
                'title 写校验失败提示',
                'required 强制必填',
              ],
            },
          ],
          realWorldScenario:
            '电商结算页的收货地址表单字段多，用 fieldset 把「收货人」「地址」「支付」分组，用户填起来不晕，无障碍用户也能快速定位。',
        },
      ],
    },
    // ====================== 第五章 ======================
    {
      id: 'html-ch5',
      title: '语义化标签',
      order: 4,
      lessons: [
        {
          id: 'html-ch5-l1',
          title: 'header/nav/main/footer',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '语义化标签是 HTML5 最重要的改进之一。它们让页面结构清晰，利于 SEO 和无障碍。' +
            '`<header>` 表示页头或区块头部，通常含 logo、标题、导航；`<nav>` 专用于主导航链接；' +
            '`<main>` 是页面主要内容，每个页面唯一；`<footer>` 是页脚，含版权、联系方式等。\n\n' +
            '这些标签本质上是带语义的 div，浏览器和辅助技术能识别其角色。' +
            '用语义标签替代 div 不仅让代码可读，还让屏幕阅读器提供「跳到主内容」等快捷功能，' +
            '搜索引擎也能更准确地理解页面结构，提升页面在搜索结果中的权重。\n\n' +
            '一个典型页面结构：header（含 nav）→ main（含 article/section）→ footer。' +
            '注意 header/footer 可用于页面整体，也可用于 article 内部表示该文章的头/尾。' +
            'main 标签每页只能有一个，是页面的核心内容区，不应包含导航、侧边栏等辅助内容。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<body>\n  <header>\n    <!-- logo、标题、导航 -->\n    <h1>网站名</h1>\n    <nav>主导航链接</nav>\n  </header>\n  <main>\n    <!-- 页面唯一主内容 -->\n    <article>独立内容</article>\n    <section>主题区块</section>\n  </main>\n  <footer>\n    <!-- 版权、联系信息 -->\n    <p>© 2024 公司名称</p>\n  </footer>\n</body>\n```\n\n' +
            '## 语义化结构标签表\n\n' +
            '| 标签 | 语义 | 数量限制 | 常见内容 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| header | 页头或区块头 | 多个 | logo、标题、nav |\n' +
            '| nav | 导航链接区 | 多个（主要导航一个） | 链接列表 |\n' +
            '| main | 主内容区 | 每页唯一 | 文章、产品等核心内容 |\n' +
            '| footer | 页脚或区块尾 | 多个 | 版权、联系、链接 |\n' +
            '| aside | 侧边/补充内容 | 多个 | 相关推荐、广告 |\n' +
            '| section | 主题区块 | 多个 | 带标题的内容分组 |\n' +
            '| article | 独立内容单元 | 多个 | 文章、评论、卡片 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：标准页面骨架\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <header>\n      <h1>我的博客</h1>\n      <nav>\n        <a href="/">首页</a> | <a href="/about">关于</a>\n      </nav>\n    </header>\n    <main>\n      <p>主要内容区域</p>\n    </main>\n    <footer>\n      <p>© 2024 我的博客</p>\n    </footer>\n  </body>\n</html>\n```\n\n' +
            '示例二：article 内嵌套 header/footer\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <article>\n      <header>\n        <h2>文章标题</h2>\n        <p>作者：小明 · 2024-01-01</p>\n      </header>\n      <p>正文内容...</p>\n      <footer>\n        <p>标签：HTML、前端</p>\n      </footer>\n    </article>\n  </body>\n</html>\n```\n\n' +
            '示例三：含 aside 的完整布局\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <header><h1>资讯站</h1></header>\n    <main>\n      <article>\n        <h2>头条新闻</h2>\n        <p>正文内容...</p>\n      </article>\n      <aside>\n        <h3>热门话题</h3>\n        <ul><li>话题一</li><li>话题二</li></ul>\n      </aside>\n    </main>\n    <footer><p>© 2024 资讯站</p></footer>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. `<main>` 每页只能有一个，多个会被无障碍工具视为错误，影响「跳到主内容」功能。\n' +
            '2. `<nav>` 应只用于「主要导航」，页内零散链接不要硬塞进 nav，避免语义稀释。\n' +
            '3. header/footer 可在 article/section 内复用，表示该区块的头尾，并非只能页面级使用。\n' +
            '4. 不要为了「语义化」把所有 div 都换成 section——无标题的内容分组用 div 即可。\n' +
            '5. 语义标签默认是块级元素，布局行为与 div 一致，CSS 无需特别适配。\n' +
            '6. IE9 及以下不支持这些标签，需用 JS 创建元素 + CSS 设 display:block 兼容（现代项目可忽略）。\n\n' +
            '## 实际应用\n\n' +
            '重构老项目时，把满屏 div 换成 header/nav/main/footer，代码量没变但可读性、SEO、无障碍全面提升——' +
            '这是「无成本」的现代化改造。落地页用 header 放 logo 与 CTA、main 放产品介绍、footer 放备案与联系，' +
            '结构清晰且搜索引擎能准确识别页面核心内容，对排名有正向作用。\n\n' +
            '## 扩展知识\n\n' +
            'W3C 的 WAI-ARIA 提供了 `role` 属性作为语义补充：`role="banner"`（header）、`role="navigation"`（nav）、' +
            '`role="main"`（main）、`role="contentinfo"`（footer）。但现代浏览器已为这些标签内置了对应 role，' +
            '无需重复声明。`<hgroup>` 标签可组合主标题与副标题，但浏览器支持不一，慎用。' +
            '使用语义化结构标签是「HTML 优先」哲学的基石——在引入 CSS/JS 之前先用 HTML 表达内容含义。',
          examples: [
            {
              title: '页面骨架结构',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <header>\n      <h1>我的博客</h1>\n      <nav>\n        <a href="/">首页</a> | <a href="/about">关于</a>\n      </nav>\n    </header>\n    <main>\n      <p>主要内容区域</p>\n    </main>\n    <footer>\n      <p>© 2024 我的博客</p>\n    </footer>\n  </body>\n</html>',
              explanation:
                'header/nav/main/footer 构成标准页面骨架；main 唯一表示主内容；footer 放版权信息。',
            },
            {
              title: 'article 内的 header',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <article>\n      <header>\n        <h2>文章标题</h2>\n        <p>作者：小明 · 2024-01-01</p>\n      </header>\n      <p>正文内容...</p>\n      <footer>\n        <p>标签：HTML、前端</p>\n      </footer>\n    </article>\n  </body>\n</html>',
              explanation:
                'header/footer 不仅用于整页，也可在 article 内表示该文章的头尾（作者、标签等）。',
            },
          ],
          exercises: [
            {
              type: 'output-match',
              prompt: '用 header 包裹标题「网站名」，用 footer 包裹版权信息「© 2024」。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <header>___</header>\n    <main>内容</main>\n    <footer>___</footer>\n  </body>\n</html>',
              expected_output: '© 2024',
              hints: [
                'header 内放 h1 或文字',
                'footer 内放版权信息',
                'main 放主要内容',
              ],
            },
            {
              type: 'open-ended',
              prompt: '搭建页面骨架：header 含 h1 与 nav（两个链接），main 含一段内容，footer 含版权。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- header + nav + main + footer -->\n  </body>\n</html>',
              hints: [
                'header 内放 h1 和 nav',
                'nav 内放若干 a 链接',
                'footer 放版权信息',
              ],
            },
          ],
          realWorldScenario:
            '重构老项目时，把满屏 div 换成 header/nav/main/footer，代码量没变但可读性、SEO、无障碍全面提升——这是「无成本」的现代化改造。',
        },
        {
          id: 'html-ch5-l2',
          title: 'section 与 article',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '`<section>` 表示文档中的一个区块，通常带标题，用于按主题分组内容；' +
            '`<article>` 表示独立的、可单独分发或复用的内容单元，如文章、帖子、评论、卡片。' +
            '二者都应包含标题（h1-h6），这是它们与 div 的本质区别——section 和 article 强调「内容有主题」，' +
            '标题是主题的标识。\n\n' +
            '区分原则：内容能否独立拿出来还有意义？能则用 article（如一篇博客、一条评论），' +
            '不能则用 section（如页面中的「关于我们」区块，离开页面就失去了上下文）。' +
            'article 可嵌套（评论嵌在文章内），section 也可嵌套，二者还可互相嵌套。\n\n' +
            '现代实践：不要纠结「section 还是 article」而过度设计。' +
            '当 div 加 class 就能解决时不必硬套语义；但主要内容区块用语义标签确实有 SEO 价值——' +
            '搜索引擎会优先抓取 article 内的内容，并把它作为独立内容单元索引。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<!-- section：主题分组，必须带标题 -->\n<section>\n  <h2>区块标题</h2>\n  <p>该主题的内容...</p>\n</section>\n\n<!-- article：独立内容，可单独分发 -->\n<article>\n  <header>\n    <h2>文章标题</h2>\n    <p>作者 · 日期</p>\n  </header>\n  <p>正文...</p>\n  <section>\n    <h3>小节标题</h3>\n    <p>小节内容...</p>\n  </section>\n  <footer>标签、版权</footer>\n</article>\n```\n\n' +
            '## section vs article 对比表\n\n' +
            '| 维度 | section | article |\n' +
            '| --- | --- | --- |\n' +
            '| 语义 | 主题分组 | 独立内容单元 |\n' +
            '| 独立性 | 依赖上下文 | 可单独分发/复用 |\n' +
            '| 是否需标题 | 是 | 是 |\n' +
            '| 可嵌套 | 可嵌 section/article | 可嵌 article/section |\n' +
            '| 典型场景 | 落地页板块、章节 | 博客文章、评论、产品卡片 |\n' +
            '| SEO 价值 | 中 | 高（独立内容被索引） |\n\n' +
            '## 代码示例\n\n' +
            '示例一：article 独立内容\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <main>\n      <article>\n        <h2>如何学习 HTML</h2>\n        <p>HTML 是网页的骨架...</p>\n        <p>建议从基础标签开始...</p>\n      </article>\n    </main>\n  </body>\n</html>\n```\n\n' +
            '示例二：section 主题分组\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <main>\n      <section>\n        <h2>服务介绍</h2>\n        <p>我们提供...</p>\n      </section>\n      <section>\n        <h2>客户案例</h2>\n        <p>案例展示...</p>\n      </section>\n    </main>\n  </body>\n</html>\n```\n\n' +
            '示例三：article 内嵌 section 与评论\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <article>\n      <h2>博客文章标题</h2>\n      <section>\n        <h3>背景</h3>\n        <p>背景介绍...</p>\n      </section>\n      <section>\n        <h3>正文</h3>\n        <p>正文内容...</p>\n      </section>\n      <section>\n        <h3>评论</h3>\n        <article>\n          <h4>张三</h4>\n          <p>写得很好！</p>\n        </article>\n      </section>\n    </article>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. section 和 article 都应包含标题（h1-h6），无标题的纯布局分组应使用 div 而非 section。\n' +
            '2. 不要为了「语义化」而过度嵌套，三层以上的 section/article 嵌套通常意味着结构设计有问题。\n' +
            '3. article 内可嵌套 section 表示章节，section 内也可嵌套 article（如评论区里多条评论）。\n' +
            '4. RSS/Atom feed 抓取器会识别 article 标签作为内容单元，新闻/博客站点必用。\n' +
            '5. 仅用于样式钩子的容器用 div，不要用 section——语义标签是为内容含义服务的。\n' +
            '6. 一个页面可以有多个 article（如文章列表），每个都是独立内容单元。\n\n' +
            '## 实际应用\n\n' +
            '新闻列表页每条新闻用 article 包裹，便于搜索引擎抓取独立内容；' +
            '首页用 section 划分「头条/科技/体育」板块，结构对爬虫友好。' +
            '博客文章页用 article 包裹正文，内嵌 section 表示「背景/正文/总结」章节，评论区每条评论用 article——' +
            '这套结构让内容可被 RSS 抓取、可被搜索引擎准确索引、可被阅读器正确朗读。\n\n' +
            '## 扩展知识\n\n' +
            'HTML5 规范说「section 是一种特殊的 article，article 是一种特殊的 section」——二者本质相通，区别在于独立性。' +
            'Schema.org 的微数据（microdata）可配合 article 使用：`itemtype="https://schema.org/Article"` 标注文章结构化数据，' +
            '让 Google 在搜索结果中显示富媒体卡片（如作者头像、发布时间）。结构化数据是 SEO 进阶的关键技术。',
          examples: [
            {
              title: 'article 独立内容',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <main>\n      <article>\n        <h2>如何学习 HTML</h2>\n        <p>HTML 是网页的骨架...</p>\n        <p>建议从基础标签开始...</p>\n      </article>\n    </main>\n  </body>\n</html>',
              explanation:
                '一篇文章用 article 包裹，可独立于页面存在（如 RSS 抓取），含自己的标题。',
            },
            {
              title: 'section 主题分组',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <main>\n      <section>\n        <h2>服务介绍</h2>\n        <p>我们提供...</p>\n      </section>\n      <section>\n        <h2>客户案例</h2>\n        <p>案例展示...</p>\n      </section>\n    </main>\n  </body>\n</html>',
              explanation:
                'section 按主题分区块，每块带标题；落地页常用 section 划分「功能/案例/价格」等。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 article 包裹一篇短文：h2 标题「我的第一篇博客」+ 两段正文。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <main>\n      <!-- article > h2 + 两个 p -->\n    </main>\n  </body>\n</html>',
              hints: [
                'article 表示独立内容',
                '内含 h2 标题',
                '正文用 p 标签',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用两个 section 划分落地页：「功能介绍」和「价格方案」，各带 h2 标题和说明文字。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <main>\n      <!-- 两个 section -->\n    </main>\n  </body>\n</html>',
              hints: [
                '每个 section 带 h2 标题',
                'section 按主题分组',
                '内容用 p 描述',
              ],
            },
          ],
          realWorldScenario:
            '新闻列表页每条新闻用 article 包裹，便于搜索引擎抓取独立内容；首页用 section 划分「头条/科技/体育」板块，结构对爬虫友好。',
        },
        {
          id: 'html-ch5-l3',
          title: 'aside/figure/time',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '`<aside>` 表示与主内容相关但可独立的内容，如侧边栏、相关推荐、广告、术语解释框。' +
            '它应能从主内容中移除而不影响主内容理解——这是判断 aside 的关键。' +
            'aside 让浏览器和搜索引擎识别「这是补充内容」而非核心，避免爬虫把侧边栏误当主内容。\n\n' +
            '`<figure>`/`<figcaption>` 用于图文组合（图、图表、代码片段、引用块）；' +
            '`<time>` 表示日期/时间，`datetime` 属性用机器可读格式（如 `2024-01-01`），' +
            '文本是给人看的格式。time 标签帮助搜索引擎理解时间信息，对活动、新闻、文章发布日期很重要——' +
            'Google 会用 time 标签判断内容时效性，影响搜索排名。\n\n' +
            '`<address>` 表示联系方式，通常放 footer 内，提供文章/页面作者的联系信息。' +
            '`<mark>` 表示因上下文相关而高亮的内容（如搜索结果关键词高亮）。' +
            '这些小众但有用的语义标签让内容表达更精确，是「语义化 HTML」进阶的一部分。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<!-- aside 侧边/补充内容 -->\n<aside>\n  <h3>相关推荐</h3>\n  <ul><li>推荐一</li></ul>\n</aside>\n\n<!-- figure 图文组合 -->\n<figure>\n  <img src="photo.jpg" alt="描述">\n  <figcaption>图片说明文字</figcaption>\n</figure>\n\n<!-- time 日期 -->\n<p>发布于 <time datetime="2024-06-01">2024 年 6 月 1 日</time></p>\n\n<!-- address 联系方式 -->\n<address>\n  联系邮箱：<a href="mailto:hi@example.com">hi@example.com</a>\n</address>\n\n<!-- mark 高亮 -->\n<p>搜索关键词 <mark>HTML</mark> 的结果...</p>\n```\n\n' +
            '## 语义标签属性表\n\n' +
            '| 标签 | 属性 | 说明 | 示例 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| time | datetime | 机器可读的时间格式 | datetime="2024-06-01" |\n' +
            '| time | pubdate | 标记为发布日期（已废弃） | — |\n' +
            '| figure | — | 无特有属性 | — |\n' +
            '| figcaption | — | 必须是 figure 第一个或最后一个子元素 | — |\n' +
            '| address | — | 仅含联系信息 | — |\n\n' +
            '## datetime 格式表\n\n' +
            '| 格式 | 示例 | 含义 |\n' +
            '| --- | --- | --- |\n' +
            '| YYYY-MM-DD | 2024-06-01 | 精确到日 |\n' +
            '| YYYY-MM-DDThh:mm | 2024-06-01T14:30 | 精确到分钟 |\n' +
            '| YYYY-MM-DDThh:mm:ss | 2024-06-01T14:30:00 | 精确到秒 |\n' +
            '| hh:mm:ss | 14:30:00 | 仅时间 |\n' +
            '| P1D | P1D | 时长（1 天） |\n\n' +
            '## 代码示例\n\n' +
            '示例一：aside 侧边栏\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <main>\n      <article>\n        <h2>主文章</h2>\n        <p>正文内容...</p>\n      </article>\n      <aside>\n        <h3>相关阅读</h3>\n        <ul>\n          <li><a href="#">文章 A</a></li>\n          <li><a href="#">文章 B</a></li>\n        </ul>\n      </aside>\n    </main>\n  </body>\n</html>\n```\n\n' +
            '示例二：time 与 address\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <article>\n      <h2>活动通知</h2>\n      <p>时间：<time datetime="2024-12-25">2024 年圣诞节</time></p>\n      <p>欢迎参加。</p>\n      <footer>\n        <address>联系邮箱：hi@example.com</address>\n      </footer>\n    </article>\n  </body>\n</html>\n```\n\n' +
            '示例三：figure 与 mark\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <article>\n      <h2>数据报告</h2>\n      <figure>\n        <img src="chart.png" alt="销售增长曲线">\n        <figcaption>图 1：2024 年 Q1 销售增长 30%</figcaption>\n      </figure>\n      <p>关键词 <mark>增长</mark> 在本季度的表现尤为突出。</p>\n    </article>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. aside 的内容必须「可移除而不影响主内容」，若内容是正文必需部分则不该用 aside。\n' +
            '2. figcaption 必须是 figure 的第一个或最后一个子元素，不能放在中间。\n' +
            '3. time 的 datetime 必须是 ISO 8601 格式，否则浏览器无法解析，文本可任意格式。\n' +
            '4. address 只能包含联系信息（邮箱、电话、地址），不要放普通段落或版权声明。\n' +
            '5. mark 的默认样式是黄色背景，可用 CSS 覆盖；它表示「上下文相关高亮」而非「重要」。\n' +
            '6. figure 不限于图片，代码块、引用、视频都可放进 figure 并配 figcaption。\n\n' +
            '## 实际应用\n\n' +
            '博客文章页右侧栏放作者卡片、相关文章、标签云——这些用 aside 语义化，移除不影响文章本体，' +
            '符合「主内容+补充」的内容架构。活动页用 time datetime 标注活动时间，搜索引擎可在搜索结果中' +
            '直接展示活动日期；教程文章用 figure 包裹代码截图并配 figcaption 解释，让图表有明确说明。\n\n' +
            '## 扩展知识\n\n' +
            'time 的 datetime 还支持时长格式（如 `P1Y2M3D` 表示 1 年 2 月 3 天），用于标注视频时长、活动持续期。' +
            '`<data value="机器可读值">人读值</data>` 标签可标注任意数值/数据，类似 time 但不限时间。' +
            'Schema.org 的 Event/Article 类型常配合 time 标签做结构化数据，让 Google 识别活动时间、文章发布日期，' +
            '在搜索结果中显示富媒体卡片——这是内容型站点的 SEO 必杀技。',
          examples: [
            {
              title: 'aside 侧边栏',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <main>\n      <article>\n        <h2>主文章</h2>\n        <p>正文内容...</p>\n      </article>\n      <aside>\n        <h3>相关阅读</h3>\n        <ul>\n          <li><a href="#">文章 A</a></li>\n          <li><a href="#">文章 B</a></li>\n        </ul>\n      </aside>\n    </main>\n  </body>\n</html>',
              explanation:
                'aside 放相关推荐/侧边栏，移除后不影响主文章阅读，符合 aside 的语义。',
            },
            {
              title: 'time 与 address',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <article>\n      <h2>活动通知</h2>\n      <p>时间：<time datetime="2024-12-25">2024 年圣诞节</time></p>\n      <p>欢迎参加。</p>\n      <footer>\n        <address>联系邮箱：hi@example.com</address>\n      </footer>\n    </article>\n  </body>\n</html>',
              explanation:
                'time 的 datetime 是机器可读格式，文本是显示格式；address 表联系方式。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '在文章旁用 aside 放一个「作者简介」侧边栏，含 h3 标题和一段介绍。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <main>\n      <article><h2>正文</h2><p>...</p></article>\n      <!-- aside 侧边栏 -->\n    </main>\n  </body>\n</html>',
              hints: [
                'aside 与 article 并列',
                '内含 h3 标题',
                '内容可独立于主文章',
              ],
            },
            {
              type: 'open-ended',
              prompt: '在文章中用 time 标签标注发布日期「2024 年 6 月 1 日」，datetime 用 2024-06-01。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <article>\n      <h2>文章</h2>\n      <p>发布于<!-- time 标签 --></p>\n    </article>\n  </body>\n</html>',
              hints: [
                'time 标签包裹日期文本',
                'datetime 属性用 ISO 格式',
                '文本给人看，datetime 给机器看',
              ],
            },
          ],
          realWorldScenario:
            '博客文章页右侧栏放作者卡片、相关文章、标签云——这些用 aside 语义化，移除不影响文章本体，符合「主内容+补充」的内容架构。',
        },
        {
          id: 'html-ch5-l4',
          title: 'details 与交互元素',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '`<details>` 创建可折叠区域，`<summary>` 是其标题（点击展开/收起）。' +
            '这是原生 HTML 交互组件，无需 JS 即可工作，常用于 FAQ、代码折叠、附加信息。' +
            '在「无 JS 也能用」的渐进增强理念下，details/summary 是理想的轻量交互方案。\n\n' +
            '`<dialog>` 元素表示对话框，配合 `showModal()` 方法（JS）显示模态框，' +
            '浏览器自带背景遮罩和焦点陷阱，比手写 div+JS 实现更规范。' +
            'dialog 原生解决了焦点管理、ESC 关闭、点击遮罩关闭等模态框难点，是现代 Web 应用的优选方案。\n\n' +
            '`<progress>` 表示进度条（`value`/`max`），`<meter>` 表示已知范围的度量（如磁盘占用、评分）。' +
            '这些原生控件自带无障碍语义和样式，比 div 手搓更可访问。' +
            '现代浏览器对这些元素支持已较好，可放心使用，仅在需要高度定制样式时考虑自绘。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<!-- details 折叠 -->\n<details open>\n  <summary>标题（点击切换）</summary>\n  <p>展开后显示的内容</p>\n</details>\n\n<!-- dialog 模态框 -->\n<dialog id="d">\n  <p>对话框内容</p>\n  <button onclick="document.getElementById(\'d\').close()">关闭</button>\n</dialog>\n<button onclick="document.getElementById(\'d\').showModal()">打开</button>\n\n<!-- progress 进度条 -->\n<progress value="70" max="100">70%</progress>\n\n<!-- meter 度量 -->\n<meter value="0.6" min="0" max="1" low="0.3" high="0.7" optimum="0.5">60%</meter>\n```\n\n' +
            '## 交互元素属性表\n\n' +
            '| 元素 | 属性 | 说明 |\n' +
            '| --- | --- | --- |\n' +
            '| details | open | 默认展开 |\n' +
            '| summary | — | details 的第一个子元素，作为可点击标题 |\n' +
            '| dialog | open | 默认打开（非模态） |\n' +
            '| progress | value / max | 当前值 / 最大值 |\n' +
            '| meter | value / min / max | 当前值 / 最小 / 最大 |\n' +
            '| meter | low / high | 低/高阈值，影响配色 |\n' +
            '| meter | optimum | 最优值，影响配色方向 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：details 折叠面板\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <details>\n      <summary>什么是 HTML？</summary>\n      <p>HTML 是超文本标记语言，用于构建网页结构。</p>\n    </details>\n    <details open>\n      <summary>默认展开的项</summary>\n      <p>加 open 属性默认展开。</p>\n    </details>\n  </body>\n</html>\n```\n\n' +
            '示例二：progress 与 meter\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <label>下载进度：</label>\n    <progress value="70" max="100">70%</progress>\n    <br>\n    <label>磁盘占用：</label>\n    <meter value="0.6" min="0" max="1" low="0.3" high="0.7">60%</meter>\n  </body>\n</html>\n```\n\n' +
            '示例三：dialog 模态框\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <button onclick="document.getElementById(\'dlg\').showModal()">打开对话框</button>\n    <dialog id="dlg">\n      <h3>提示</h3>\n      <p>这是一个原生模态框，自带遮罩与焦点陷阱。</p>\n      <form method="dialog">\n        <button>确定</button>\n      </form>\n    </dialog>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. summary 必须是 details 的第一个子元素，否则不作为可点击标题生效。\n' +
            '2. dialog 用 `show()` 显示为非模态（无遮罩），用 `showModal()` 显示为模态（带遮罩+焦点陷阱）。\n' +
            '3. progress 没设 value 时显示为「不确定」状态（来回滚动动画），用于任务进行中但无具体进度。\n' +
            '4. meter 的 low/high/optimum 影响配色：value 在 low 以下显示绿色，high 以上显示红色（依 optimum 方向）。\n' +
            '5. details 的展开/收起会触发 toggle 事件，可用于监听状态做联动。\n' +
            '6. dialog 内 `<form method="dialog">` 的按钮点击会自动关闭对话框，无需手动写 close()。\n\n' +
            '## 实际应用\n\n' +
            '帮助中心 FAQ 页面用 details/summary 折叠问答，零 JS 实现交互，加载快且无障碍友好；' +
            '比手写 React 折叠组件更轻量。文件上传页用 progress 显示上传进度，设置页用 meter 显示存储用量，' +
            '表单提交确认用 dialog 弹出模态框——这些原生组件让产品更专业且无需引入 UI 库。\n\n' +
            '## 扩展知识\n\n' +
            'details/summary 的展开箭头可用 CSS `summary::-webkit-details-marker { display: none; }` 隐藏，' +
            '再用自定义图标替代。dialog 的 `::backdrop` 伪元素可定制遮罩样式（如模糊背景）。' +
            '`popover` 属性（HTML5 新增）是比 dialog 更轻量的弹出方案：`<div popover>` 配合 `popovertarget` 属性' +
            '即可实现点击弹出，无需 JS。这些原生 API 正在逐步替代第三方 UI 库的基础功能。',
          examples: [
            {
              title: 'details 折叠面板',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <details>\n      <summary>什么是 HTML？</summary>\n      <p>HTML 是超文本标记语言，用于构建网页结构。</p>\n    </details>\n    <details open>\n      <summary>默认展开的项</summary>\n      <p>加 open 属性默认展开。</p>\n    </details>\n  </body>\n</html>',
              explanation:
                'details/summary 原生折叠组件，open 属性控制默认展开；点击 summary 自动切换，无需 JS。',
            },
            {
              title: 'progress 与 meter',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <label>下载进度：</label>\n    <progress value="70" max="100">70%</progress>\n    <br>\n    <label>磁盘占用：</label>\n    <meter value="0.6" min="0" max="1" low="0.3" high="0.7">60%</meter>\n  </body>\n</html>',
              explanation:
                'progress 表示任务进度；meter 表示已知范围度量，可设 low/high/optimum 区分高低。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '用 details + summary 创建一个 FAQ 项：问题「如何注册？」，答案一段说明，默认展开。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- details open + summary + p -->\n  </body>\n</html>',
              hints: [
                'summary 是点击的标题',
                '答案放在 details 内 summary 后',
                '加 open 属性默认展开',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用 progress 显示一个 50% 的下载进度条。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- progress value="50" max="100" -->\n  </body>\n</html>',
              hints: [
                'progress 标签加 value 和 max',
                'value/max 表示比例',
                '标签内文字作降级提示',
              ],
            },
          ],
          realWorldScenario:
            '帮助中心 FAQ 页面用 details/summary 折叠问答，零 JS 实现交互，加载快且无障碍友好；比手写 React 折叠组件更轻量。',
        },
      ],
    },
    // ====================== 第六章 ======================
    {
      id: 'html-ch6',
      title: 'HTML5 高级特性',
      order: 5,
      lessons: [
        {
          id: 'html-ch6-l1',
          title: 'video 与 audio',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            '`<video>` 嵌入视频，`<audio>` 嵌入音频，无需 Flash 等插件。' +
            'HTML5 原生媒体元素让 Web 摆脱了对第三方插件的依赖，是 Web 多媒体化的基石。' +
            '这两个元素共享相似的 API 和属性，掌握了 video 也就基本掌握了 audio。\n\n' +
            '常用属性：`src` 指定源，`controls` 显示播放控件，`autoplay` 自动播放（多需 muted），' +
            '`loop` 循环，`muted` 静音，`poster` 设置视频封面，`preload` 控制预加载策略。' +
            '为兼容不同浏览器格式，可用多个 `<source>` 子元素提供不同格式，浏览器选第一个支持的。' +
            '`<track>` 可加字幕轨道（WebVTT 格式），提升无障碍体验。\n\n' +
            'autoplay 政策：现代浏览器禁止带声音的自动播放，通常需 `autoplay muted` 才能生效。' +
            '视频首屏自动播放（静音）是落地页常见做法，能显著提升用户停留时长。' +
            '注意视频文件较大，配合 CDN 和合适的编码（H.264/VP9/AV1）优化体验。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<video src="视频地址" controls width="400" poster="封面图" autoplay muted loop preload="auto">\n  您的浏览器不支持 video 标签。\n</video>\n\n<!-- 多 source 兼容 -->\n<video controls>\n  <source src="movie.mp4" type="video/mp4">\n  <source src="movie.webm" type="video/webm">\n  <track src="subtitles.vtt" kind="subtitles" srclang="zh" label="中文字幕">\n</video>\n\n<audio src="audio.mp3" controls>\n  您的浏览器不支持 audio 标签。\n</audio>\n```\n\n' +
            '## video/audio 属性表\n\n' +
            '| 属性 | 说明 | 适用 | 示例 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| src | 媒体源 URL | 两者 | src="movie.mp4" |\n' +
            '| controls | 显示播放控件 | 两者 | 布尔属性 |\n' +
            '| autoplay | 自动播放 | 两者 | 需配合 muted |\n' +
            '| muted | 静音 | 两者 | 布尔属性 |\n' +
            '| loop | 循环播放 | 两者 | 布尔属性 |\n' +
            '| poster | 视频封面 | video | poster="cover.jpg" |\n' +
            '| preload | 预加载策略 | 两者 | auto / metadata / none |\n' +
            '| width / height | 尺寸 | video | width="400" |\n' +
            '| crossorigin | 跨域设置 | 两者 | anonymous |\n\n' +
            '## 常用媒体格式表\n\n' +
            '| 格式 | 类型 | 浏览器支持 | 优点 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| MP4 (H.264) | video | 全平台 | 兼容性最佳 |\n' +
            '| WebM (VP9) | video | Chrome/Firefox | 体积小、开源 |\n' +
            '| AV1 | video | 新版浏览器 | 压缩率最高 |\n' +
            '| MP3 | audio | 全平台 | 兼容性好 |\n' +
            '| AAC | audio | 全平台 | 比 MP3 高效 |\n' +
            '| OGG | audio | Chrome/Firefox | 开源免费 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：基础视频嵌入\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls width="400" poster="https://picsum.photos/400/300">\n      您的浏览器不支持 video 标签。\n    </video>\n  </body>\n</html>\n```\n\n' +
            '示例二：多 source 与 audio\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <video controls width="400">\n      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n      <source src="movie.webm" type="video/webm">\n    </video>\n    <audio controls>\n      <source src="audio.mp3" type="audio/mpeg">\n    </audio>\n  </body>\n</html>\n```\n\n' +
            '示例三：自动播放背景视频\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <!-- autoplay 必须配合 muted 才能在大多数浏览器生效 -->\n    <video autoplay muted loop playsinline width="400">\n      <source src="bg.mp4" type="video/mp4">\n    </video>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. autoplay 在大部分浏览器需配合 `muted` 才生效，iOS Safari 还需 `playsinline` 防止全屏播放。\n' +
            '2. 多个 source 的顺序很重要：把兼容性最好的格式（如 mp4）放前面，浏览器选第一个支持的。\n' +
            '3. `preload="none"` 可节省流量（移动端推荐），`auto` 让浏览器预加载（桌面端可选）。\n' +
            '4. video 标签内的文字只在浏览器不支持时显示，是渐进降级的兜底文案。\n' +
            '5. 大视频务必走 CDN 并启用范围请求（HLS/DASH 流媒体），避免一次加载整文件。\n' +
            '6. 字幕用 `<track>` 引入 WebVTT 文件，`kind="subtitles"` 提供无障碍字幕支持。\n\n' +
            '## 实际应用\n\n' +
            '产品官网首屏用 muted autoplay 的背景视频展示产品场景，比静态图更有冲击力；' +
            '配合 poster 在视频加载前显示封面避免空白。在线教育平台用 video + track 提供带字幕的课程视频；' +
            '音乐播放器用 audio 元素配合自定义控件实现播放/暂停/进度条——' +
            '这些原生能力让 Web 应用能承载丰富的多媒体体验。\n\n' +
            '## 扩展知识\n\n' +
            'HLS（HTTP Live Streaming）和 DASH 是自适应流媒体协议，根据网络动态切换清晰度，' +
            '需用 hls.js / dash.js 库配合 video 元素实现。Media Source API 允许 JS 动态生成媒体流，' +
            '是直播、无缝切换清晰度的底层基础。WebCodecs API 提供更底层的编解码能力，' +
            '可用于视频编辑、实时通信等高级场景。Web Audio API 可对音频做精细处理（混音、滤镜、可视化）。',
          examples: [
            {
              title: '视频嵌入',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls width="400" poster="https://picsum.photos/400/300">\n      您的浏览器不支持 video 标签。\n    </video>\n  </body>\n</html>',
              explanation:
                'controls 显示控件；poster 设封面；width 控制宽度；标签内文字在不支持时显示。',
            },
            {
              title: '多 source 与 audio',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <video controls width="400">\n      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n      <source src="movie.webm" type="video/webm">\n    </video>\n    <audio controls>\n      <source src="audio.mp3" type="audio/mpeg">\n    </audio>\n  </body>\n</html>',
              explanation:
                '多个 source 提供格式兼容，浏览器选第一个支持的；audio 用法类似 video。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '嵌入一个视频：显示控件，宽度 400，带封面图（用 picsum 占位），并写降级提示文字。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- video controls width poster -->\n  </body>\n</html>',
              hints: [
                '加 controls 显示播放控件',
                'poster 用 picsum.photos 占位',
                '标签内写降级文字',
              ],
            },
            {
              type: 'open-ended',
              prompt: '用两个 source 为 video 提供 mp4 和 webm 格式，浏览器自动选择支持的格式。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <video controls>\n      <!-- source mp4 + source webm -->\n    </video>\n  </body>\n</html>',
              hints: [
                'source 用 type 区分格式',
                'mp4 用 type="video/mp4"',
                'webm 用 type="video/webm"',
              ],
            },
          ],
          realWorldScenario:
            '产品官网首屏用 muted autoplay 的背景视频展示产品场景，比静态图更有冲击力；配合 poster 在视频加载前显示封面避免空白。',
        },
        {
          id: 'html-ch6-l2',
          title: 'canvas 基础',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '`<canvas>` 是画布元素，通过 JavaScript 的 2D 绘图 API 在其上绘制图形。' +
            '它是 Web 上图形渲染的基础，从简单图表到复杂游戏都依赖它。' +
            'canvas 采用「即时模式」——画完即忘，要更新画面需清空重画，这与 SVG 的「保留模式」（DOM 操作）形成对比。\n\n' +
            '需设置 width/height 属性（不用 CSS，CSS 会缩放而非改变分辨率）。' +
            '获取绘图上下文：`const ctx = canvas.getContext("2d")`，之后所有绘图操作都通过 ctx 进行。' +
            'canvas 是一个像素位图，绘制后图形不可单独操作（不像 SVG 的元素可独立选中）。\n\n' +
            'canvas 适合图表、游戏、图像处理——大量元素的高频重绘场景。' +
            '对比 SVG（保留模式，DOM 操作），canvas 在元素多时性能更好（无需维护 DOM 树），' +
            'SVG 在交互性强、元素少时更方便（每个图形可绑定事件）。WebGL 是 canvas 的 3D 上下文，Three.js 等库基于此。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<canvas id="c" width="300" height="150">\n  您的浏览器不支持 canvas。\n</canvas>\n<script>\n  // 获取 2D 绘图上下文\n  const ctx = document.getElementById("c").getContext("2d");\n  // 设置填充颜色\n  ctx.fillStyle = "red";\n  // 画填充矩形 (x, y, w, h)\n  ctx.fillRect(10, 10, 80, 80);\n  // 设置描边颜色\n  ctx.strokeStyle = "blue";\n  ctx.strokeRect(110, 10, 80, 80);\n  // 画文字\n  ctx.font = "20px sans-serif";\n  ctx.fillText("Hello", 50, 120);\n</script>\n```\n\n' +
            '## 常用 2D API 表\n\n' +
            '| API | 说明 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| fillRect(x,y,w,h) | 填充矩形 | ctx.fillRect(0,0,50,50) |\n' +
            '| strokeRect(x,y,w,h) | 描边矩形 | ctx.strokeRect(0,0,50,50) |\n' +
            '| clearRect(x,y,w,h) | 清空区域 | ctx.clearRect(0,0,300,150) |\n' +
            '| fillText(text,x,y) | 填充文字 | ctx.fillText("Hi",10,50) |\n' +
            '| beginPath() | 开始路径 | ctx.beginPath() |\n' +
            '| moveTo(x,y) | 移动画笔 | ctx.moveTo(0,0) |\n' +
            '| lineTo(x,y) | 画线到点 | ctx.lineTo(100,100) |\n' +
            '| arc(x,y,r,start,end) | 画圆弧 | ctx.arc(50,50,30,0,Math.PI*2) |\n' +
            '| fill() / stroke() | 填充/描边路径 | ctx.fill() |\n' +
            '| fillStyle / strokeStyle | 填充/描边颜色 | ctx.fillStyle="red" |\n' +
            '| lineWidth | 线宽 | ctx.lineWidth=3 |\n' +
            '| font | 字体 | ctx.font="16px sans-serif" |\n\n' +
            '## 代码示例\n\n' +
            '示例一：矩形与文字\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <canvas id="c" width="300" height="150" style="border:1px solid #ccc;">\n      您的浏览器不支持 canvas。\n    </canvas>\n    <script>\n      const canvas = document.getElementById("c");\n      const ctx = canvas.getContext("2d");\n      // 红色矩形\n      ctx.fillStyle = "red";\n      ctx.fillRect(10, 10, 80, 80);\n      // 描边矩形\n      ctx.strokeStyle = "blue";\n      ctx.strokeRect(110, 10, 80, 80);\n      // 文字\n      ctx.fillStyle = "black";\n      ctx.font = "20px sans-serif";\n      ctx.fillText("Canvas", 50, 120);\n    </script>\n  </body>\n</html>\n```\n\n' +
            '示例二：圆形路径\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <canvas id="c" width="200" height="200"></canvas>\n    <script>\n      const ctx = document.getElementById("c").getContext("2d");\n      ctx.beginPath();\n      // 圆心 100,100，半径 50，0 到 2π\n      ctx.arc(100, 100, 50, 0, Math.PI * 2);\n      ctx.fillStyle = "orange";\n      ctx.fill();\n      ctx.lineWidth = 3;\n      ctx.strokeStyle = "green";\n      ctx.stroke();\n    </script>\n  </body>\n</html>\n```\n\n' +
            '示例三：动画（清空重画）\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <canvas id="c" width="300" height="150"></canvas>\n    <script>\n      const ctx = document.getElementById("c").getContext("2d");\n      let x = 0;\n      function draw() {\n        // 清空画布\n        ctx.clearRect(0, 0, 300, 150);\n        ctx.fillStyle = "red";\n        ctx.fillRect(x, 60, 30, 30);\n        x = (x + 2) % 300;\n        // 下一帧重画\n        requestAnimationFrame(draw);\n      }\n      draw();\n    </script>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. width/height 必须用 HTML 属性设置，用 CSS 设会导致画布被缩放（分辨率不变，图形模糊）。\n' +
            '2. canvas 坐标系原点在左上角，y 轴向下——与数学坐标系相反，初学者易混淆。\n' +
            '3. `arc` 的角度用弧度（0 到 Math.PI*2 是整圆），不是角度。\n' +
            '4. 动画务必用 `requestAnimationFrame` 而非 `setInterval`，前者与显示器刷新同步更流畅。\n' +
            '5. 高 DPI 屏幕需放大 canvas 并缩放上下文，否则图形模糊：`ctx.scale(dpr, dpr)`。\n' +
            '6. canvas 内容无法被屏幕阅读器访问，重要信息应在 HTML 文本中提供替代。\n\n' +
            '## 实际应用\n\n' +
            '数据看板用 canvas 绘制实时折线图（如 Chart.js），每秒重绘上千数据点不卡顿；' +
            '游戏开发中 canvas 是 2D 渲染的主力（如贪吃蛇、塔防）；图像编辑器用 canvas 做滤镜处理（读取像素、修改、重画）。' +
            '这些场景下 canvas 的性能优势是 SVG 无法比拟的。\n\n' +
            '## 扩展知识\n\n' +
            'WebGL 是 canvas 的 3D 上下文（`getContext("webgl")`），基于 OpenGL ES，可直接操作 GPU。' +
            'Three.js 是最流行的 WebGL 封装库，让 3D 开发门槛大幅降低。' +
            'canvas 可通过 `getImageData`/`putImageData` 读写像素，实现图像滤镜、人脸检测等像素级处理。' +
            'OffscreenCanvas 允许在 Web Worker 中渲染，避免主线程阻塞，适合复杂图形计算。',
          examples: [
            {
              title: '绘制矩形与文字',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <canvas id="c" width="300" height="150" style="border:1px solid #ccc;">\n      您的浏览器不支持 canvas。\n    </canvas>\n    <script>\n      const canvas = document.getElementById("c");\n      const ctx = canvas.getContext("2d");\n      // 红色矩形\n      ctx.fillStyle = "red";\n      ctx.fillRect(10, 10, 80, 80);\n      // 描边矩形\n      ctx.strokeStyle = "blue";\n      ctx.strokeRect(110, 10, 80, 80);\n      // 文字\n      ctx.fillStyle = "black";\n      ctx.font = "20px sans-serif";\n      ctx.fillText("Canvas", 50, 120);\n    </script>\n  </body>\n</html>',
              explanation:
                'getContext("2d") 获取绘图上下文；fillRect 填充、strokeRect 描边、fillText 写字；fillStyle/strokeStyle 设颜色。',
            },
            {
              title: '绘制圆形路径',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <canvas id="c" width="200" height="200"></canvas>\n    <script>\n      const ctx = document.getElementById("c").getContext("2d");\n      ctx.beginPath();\n      // 圆心 100,100，半径 50，0 到 2π\n      ctx.arc(100, 100, 50, 0, Math.PI * 2);\n      ctx.fillStyle = "orange";\n      ctx.fill();\n      ctx.lineWidth = 3;\n      ctx.strokeStyle = "green";\n      ctx.stroke();\n    </script>\n  </body>\n</html>',
              explanation:
                'beginPath 开始路径；arc 画圆弧；fill 填充、stroke 描边。路径是 canvas 绘制曲线的基础。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '创建一个 canvas（300x150），用 JS 在其上画一个绿色填充矩形（位置 20,20，大小 100x60）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <canvas id="c" width="300" height="150"></canvas>\n    <script>\n      const ctx = document.getElementById("c").getContext("2d");\n      // 画绿色矩形\n    </script>\n  </body>\n</html>',
              hints: [
                'fillStyle = "green" 设颜色',
                'fillRect(20, 20, 100, 60) 画矩形',
                '先设颜色再画',
              ],
            },
            {
              type: 'open-ended',
              prompt: '在 canvas 上用 arc 画一个蓝色描边的圆形（圆心居中，半径 50）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <canvas id="c" width="200" height="200"></canvas>\n    <script>\n      const ctx = document.getElementById("c").getContext("2d");\n      // 画蓝色描边圆\n    </script>\n  </body>\n</html>',
              hints: [
                'beginPath 开始路径',
                'arc(100, 100, 50, 0, Math.PI*2) 画整圆',
                'strokeStyle="blue" 后 stroke()',
              ],
            },
          ],
          realWorldScenario:
            '数据看板用 canvas 绘制实时折线图（如 Chart.js），每秒重绘上千数据点不卡顿；游戏开发中 canvas 是 2D 渲染的主力。',
        },
        {
          id: 'html-ch6-l3',
          title: '本地存储与 Web Storage',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            'Web Storage 提供 `localStorage` 和 `sessionStorage` 两个 API，' +
            '前者持久存储（除非手动清除），后者仅在标签页会话期间有效（关闭标签即丢失）。' +
            '两者都存储字符串键值对，API 简单：`setItem(key, value)`、`getItem(key)`、' +
            '`removeItem(key)`、`clear()`。Web Storage 是 HTML5 替代 cookie 做客户端存储的方案。\n\n' +
            '存储对象需用 `JSON.stringify` 转字符串，读取时 `JSON.parse` 还原。' +
            '容量约 5-10MB（各浏览器不同），远超 cookie（4KB）。' +
            '与 cookie 不同，Storage 数据不随每次请求自动发送到服务端，节省带宽且不暴露给后端。\n\n' +
            '注意：Storage 同步 API 会阻塞主线程，大量数据用 IndexedDB（异步、容量大）。' +
            '千万不要存敏感信息（密码、token）——任何 JS 都能读取，易受 XSS 攻击。' +
            '生产中常用封装库（如 store.js）处理序列化和兼容性。\n\n' +
            '## 语法说明\n\n' +
            '```js\n// localStorage：持久存储\nlocalStorage.setItem("key", "value");\nlocalStorage.getItem("key");      // 返回 "value" 或 null\nlocalStorage.removeItem("key");\nlocalStorage.clear();             // 清空所有\n\n// sessionStorage：会话级，关闭标签丢失\nsessionStorage.setItem("temp", "data");\n\n// 存对象需序列化\nconst user = { name: "小明", age: 20 };\nlocalStorage.setItem("user", JSON.stringify(user));\nconst saved = JSON.parse(localStorage.getItem("user"));\n\n// 遍历所有 key\nfor (let i = 0; i < localStorage.length; i++) {\n  const key = localStorage.key(i);\n  console.log(key, localStorage.getItem(key));\n}\n```\n\n' +
            '## Web Storage API 表\n\n' +
            '| 方法/属性 | 说明 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| setItem(k, v) | 存储键值 | localStorage.setItem("a","1") |\n' +
            '| getItem(k) | 读取值 | localStorage.getItem("a") |\n' +
            '| removeItem(k) | 删除指定键 | localStorage.removeItem("a") |\n' +
            '| clear() | 清空所有 | localStorage.clear() |\n' +
            '| length | 键值对数量 | localStorage.length |\n' +
            '| key(index) | 按索引取键名 | localStorage.key(0) |\n\n' +
            '## localStorage vs sessionStorage vs cookie 对比表\n\n' +
            '| 特性 | localStorage | sessionStorage | cookie |\n' +
            '| --- | --- | --- | --- |\n' +
            '| 生命周期 | 持久 | 标签会话 | 可设过期 |\n' +
            '| 容量 | 5-10MB | 5-10MB | 4KB |\n' +
            '| 随请求发送 | 否 | 否 | 是 |\n' +
            '| API | 同步 | 同步 | 字符串解析 |\n' +
            '| 作用域 | 同源共享 | 同源+同标签 | 同源+域名路径 |\n' +
            '| 适用场景 | 偏好、缓存 | 临时表单 | 鉴权、跟踪 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：localStorage 存取\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <button onclick="save()">保存</button>\n    <button onclick="load()">读取</button>\n    <p id="out"></p>\n    <script>\n      function save() {\n        localStorage.setItem("username", "小明");\n        document.getElementById("out").textContent = "已保存";\n      }\n      function load() {\n        const name = localStorage.getItem("username") || "无数据";\n        document.getElementById("out").textContent = "读取到：" + name;\n      }\n    </script>\n  </body>\n</html>\n```\n\n' +
            '示例二：存储对象\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <script>\n      const user = { name: "小红", age: 20 };\n      localStorage.setItem("user", JSON.stringify(user));\n      const saved = JSON.parse(localStorage.getItem("user"));\n      document.write(saved.name + "，" + saved.age + "岁");\n    </script>\n  </body>\n</html>\n```\n\n' +
            '示例三：监听 storage 事件跨标签同步\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <p id="out">等待其他标签修改...</p>\n    <script>\n      // 同源其他标签的 storage 变化会触发此事件\n      window.addEventListener("storage", (e) => {\n        document.getElementById("out").textContent =\n          e.key + " 从 " + e.oldValue + " 变为 " + e.newValue;\n      });\n    </script>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. Storage 只能存字符串，存对象/数字必须 `JSON.stringify`，读取时 `JSON.parse` 还原。\n' +
            '2. `getItem` 不存在的 key 返回 `null`（不是 undefined），可用 `||` 设默认值。\n' +
            '3. 同步 API 会阻塞主线程，大数据量应改用 IndexedDB（异步、支持索引、容量更大）。\n' +
            '4. 千万不要存敏感信息（密码、token、API Key）——任何 JS 都能读取，XSS 攻击可窃取。\n' +
            '5. `storage` 事件只在同源其他标签触发，不在修改者本标签触发，可用于跨标签通信。\n' +
            '6. 隐私模式下 localStorage 可能被限制或会话结束即清空，不要依赖其持久性做核心逻辑。\n\n' +
            '## 实际应用\n\n' +
            '实现「暗色模式」偏好记忆：用户切换主题后存入 localStorage，下次访问读取并应用，无需登录也能记住设置——' +
            '这是无后端个性化的常用手段。购物车未登录态暂存、表单草稿自动保存、最近浏览记录、' +
            'A/B 测试分组标记——这些场景下 Web Storage 让产品体验更连贯。\n\n' +
            '## 扩展知识\n\n' +
            'IndexedDB 是浏览器内置的 NoSQL 数据库，支持事务、索引、游标，容量可达数百 MB 甚至更多，' +
            '适合离线应用（PWA）的本地数据存储。Cookies 虽容量小但会随请求自动发送，仍用于鉴权（httpOnly cookie）。' +
            'Cache API 配合 Service Worker 可缓存请求响应，是 PWA 离线能力的核心。' +
            '现代前端状态管理（如 Redux Persist）常把关键状态同步到 localStorage，实现刷新不丢失。',
          examples: [
            {
              title: 'localStorage 存取',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <button onclick="save()">保存</button>\n    <button onclick="load()">读取</button>\n    <p id="out"></p>\n    <script>\n      // 保存数据\n      function save() {\n        localStorage.setItem("username", "小明");\n        document.getElementById("out").textContent = "已保存";\n      }\n      // 读取数据\n      function load() {\n        const name = localStorage.getItem("username") || "无数据";\n        document.getElementById("out").textContent = "读取到：" + name;\n      }\n    </script>\n  </body>\n</html>',
              explanation:
                'setItem/getItem 是核心 API；数据持久保存，刷新或重开浏览器仍在。注意值必须是字符串。',
            },
            {
              title: '存储对象',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <script>\n      // 存对象需序列化\n      const user = { name: "小红", age: 20 };\n      localStorage.setItem("user", JSON.stringify(user));\n      // 读取后反序列化\n      const saved = JSON.parse(localStorage.getItem("user"));\n      document.write(saved.name + "，" + saved.age + "岁");\n    </script>\n  </body>\n</html>',
              explanation:
                '对象用 JSON.stringify 转字符串存，JSON.parse 还原；这是存储结构化数据的标准做法。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '实现：点击保存按钮把「theme: dark」存入 localStorage，点击读取按钮显示在页面上。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <button onclick="save()">保存</button>\n    <button onclick="load()">读取</button>\n    <p id="out"></p>\n    <script>\n      function save() {\n        // 存 theme=dark\n      }\n      function load() {\n        // 读 theme 显示\n      }\n    </script>\n  </body>\n</html>',
              hints: [
                'localStorage.setItem("theme", "dark")',
                'localStorage.getItem("theme") 读取',
                '用 textContent 显示结果',
              ],
            },
            {
              type: 'open-ended',
              prompt: '把一个对象 { count: 1 } 存入 localStorage（key 为 data），再读取并反序列化显示 count 值。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <script>\n      // 存对象并读取\n      const obj = { count: 1 };\n      // 补全存取与显示\n    </script>\n  </body>\n</html>',
              hints: [
                'JSON.stringify(obj) 序列化',
                'JSON.parse 还原对象',
                'localStorage.setItem("data", ...)',
              ],
            },
          ],
          realWorldScenario:
            '实现「暗色模式」偏好记忆：用户切换主题后存入 localStorage，下次访问读取并应用，无需登录也能记住设置——这是无后端个性化的常用手段。',
        },
      ],
    },
    // ====================== 第七章 ======================
    {
      id: 'html-ch7',
      title: '实战与最佳实践',
      order: 6,
      lessons: [
        {
          id: 'html-ch7-l1',
          title: 'SEO 优化 meta 标签',
          order: 0,
          content_md:
            '## 概念详解\n\n' +
            'SEO（搜索引擎优化）从 HTML 结构开始。搜索引擎爬虫读取 HTML 来理解页面内容，' +
            '结构清晰、语义准确的 HTML 能让爬虫正确索引页面，提升搜索排名。' +
            '核心 meta 标签：`<title>` 页面标题（60 字内，含关键词，显示在搜索结果和浏览器标签）、' +
            '`<meta name="description">` 页面描述（160 字内，搜索结果显示的摘要）、' +
            '`<meta name="keywords">`（已基本被搜索引擎忽略，可省略）。\n\n' +
            'Open Graph 标签（og:title、og:description、og:image）控制社交分享预览，' +
            'Twitter Card 标签控制推特分享。`<link rel="canonical">` 指定规范 URL 避免重复内容惩罚。' +
            '结构化数据用 JSON-LD（`<script type="application/ld+json">`）让搜索引擎理解内容类型（文章/产品/事件），' +
            '可获富媒体搜索结果卡片。\n\n' +
            'HTML 结构层面：每个页面一个 h1，标题层级递进不跳级，' +
            'img 必写 alt，a 文字有意义，用语义化标签——这些既是 SEO 也是无障碍要求。' +
            '好的 SEO 本质是好的内容结构，而非堆砌技巧。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<head>\n  <meta charset="UTF-8">\n  <!-- 核心 SEO -->\n  <title>页面标题（含关键词）</title>\n  <meta name="description" content="页面摘要，160 字内">\n  <meta name="robots" content="index, follow">\n  <!-- 规范 URL -->\n  <link rel="canonical" href="https://example.com/page">\n  <!-- Open Graph 社交分享 -->\n  <meta property="og:title" content="分享标题">\n  <meta property="og:description" content="分享描述">\n  <meta property="og:image" content="https://example.com/cover.png">\n  <meta property="og:url" content="https://example.com/page">\n  <!-- 移动端 -->\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <!-- 结构化数据 -->\n  <script type="application/ld+json">\n  { "@context": "https://schema.org", "@type": "Article", "headline": "标题" }\n  </script>\n</head>\n```\n\n' +
            '## SEO meta 标签表\n\n' +
            '| 标签 | 作用 | 长度限制 | 是否影响排名 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| title | 页面标题 | 60 字 | 是（直接） |\n' +
            '| meta description | 搜索结果摘要 | 160 字 | 间接（影响点击率） |\n' +
            '| meta keywords | 关键词 | — | 已忽略 |\n' +
            '| meta robots | 爬虫指令 | — | 控制索引 |\n' +
            '| link canonical | 规范 URL | — | 防重复内容 |\n' +
            '| og:title/description/image | 社交分享 | — | 社交流量 |\n' +
            '| JSON-LD | 结构化数据 | — | 富媒体卡片 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：完整 SEO meta 配置\n\n' +
            '```html\n<!DOCTYPE html>\n<html lang="zh-CN">\n  <head>\n    <meta charset="UTF-8">\n    <title>HTML 入门教程 | CodeLearn</title>\n    <meta name="description" content="系统学习 HTML 基础到进阶，含实例与练习，适合零基础。">\n    <meta property="og:title" content="HTML 入门教程">\n    <meta property="og:image" content="https://example.com/cover.png">\n    <link rel="canonical" href="https://example.com/html">\n  </head>\n  <body>\n    <h1>HTML 入门教程</h1>\n  </body>\n</html>\n```\n\n' +
            '示例二：结构化数据 JSON-LD\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "Article",\n      "headline": "HTML 学习指南",\n      "datePublished": "2024-06-01"\n    }\n    </script>\n  </head>\n  <body>\n    <article><h1>HTML 学习指南</h1></article>\n  </body>\n</html>\n```\n\n' +
            '示例三：robots 与 sitemap\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <!-- 允许索引，跟随链接 -->\n    <meta name="robots" content="index, follow">\n    <!-- 不索引此页 -->\n    <!-- <meta name="robots" content="noindex"> -->\n  </head>\n  <body>\n    <h1>页面内容</h1>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. title 每页唯一，含核心关键词，避免堆砌；过长会被搜索引擎截断显示。\n' +
            '2. description 不直接影响排名，但影响点击率——写吸引人的摘要而非关键词列表。\n' +
            '3. canonical 用于多 URL 指向相同内容时指定规范版，避免重复内容惩罚。\n' +
            '4. JSON-LD 比微数据（microdata）更易维护，Google 推荐用 JSON-LD 做结构化数据。\n' +
            '5. 每个页面只应有一个 h1，标题层级递进（h1→h2→h3）不跳级，利于 SEO 和无障碍。\n' +
            '6. img 必写 alt（描述图片内容），装饰图 alt 留空而非省略属性。\n\n' +
            '## 实际应用\n\n' +
            '内容站上线前 SEO checklist：每个页面有独立 title/description、canonical 指向规范 URL、' +
            'OG 标签齐全、JSON-LD 标注文章类型——这些决定了能否被正确收录和分享裂变。' +
            '电商产品页用 JSON-LD 标注 Product 类型（含价格、库存），可在搜索结果直接展示价格和评分，' +
            '大幅提升点击率。\n\n' +
            '## 扩展知识\n\n' +
            'Google Search Console 和 Bing Webmaster Tools 是监控 SEO 表现的官方工具，' +
            '可查看收录情况、搜索关键词、点击率。sitemap.xml 帮助爬虫发现页面，robots.txt 控制爬取范围。' +
            'Core Web Vitals（LCP/FID/CLS）是 Google 排名因素之一，性能优化也是 SEO 的一部分。' +
            'SSR（服务端渲染）或 SSG（静态生成）让爬虫直接拿到完整 HTML，比 CSR（客户端渲染）对 SEO 更友好。',
          examples: [
            {
              title: '完整 SEO meta 配置',
              code:
                '<!DOCTYPE html>\n<html lang="zh-CN">\n  <head>\n    <meta charset="UTF-8">\n    <title>HTML 入门教程 | CodeLearn</title>\n    <meta name="description" content="系统学习 HTML 基础到进阶，含实例与练习，适合零基础。">\n    <meta property="og:title" content="HTML 入门教程">\n    <meta property="og:image" content="https://example.com/cover.png">\n    <link rel="canonical" href="https://example.com/html">\n  </head>\n  <body>\n    <h1>HTML 入门教程</h1>\n  </body>\n</html>',
              explanation:
                'title 含关键词；description 写吸引点击的摘要；og 标签控社交分享；canonical 防重复内容。',
            },
            {
              title: '结构化数据 JSON-LD',
              code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "Article",\n      "headline": "HTML 学习指南",\n      "datePublished": "2024-06-01"\n    }\n    </script>\n  </head>\n  <body>\n    <article><h1>HTML 学习指南</h1></article>\n  </body>\n</html>',
              explanation:
                'JSON-LD 告诉搜索引擎这是文章类型，可获富摘要（如显示发布日期），比微数据更易维护。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为「CSS 教程」页面配置 SEO：title 含关键词，description 写一句摘要（160 字内）。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>___</title>\n    <meta name="description" content="___">\n  </head>\n  <body>\n    <h1>CSS 教程</h1>\n  </body>\n</html>',
              hints: [
                'title 含「CSS 教程」关键词',
                'description 写吸引人的摘要',
                'description 控制在 160 字内',
              ],
            },
            {
              type: 'open-ended',
              prompt: '为页面添加 Open Graph 标签：og:title 和 og:image，用于社交分享预览。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>分享测试</title>\n    <!-- og:title 和 og:image -->\n  </head>\n  <body><h1>分享测试</h1></body>\n</html>',
              hints: [
                'og:title 用 meta property',
                'og:image 给分享配图地址',
                '配合 og:description 效果更好',
              ],
            },
          ],
          realWorldScenario:
            '内容站上线前 SEO checklist：每个页面有独立 title/description、canonical 指向规范 URL、OG 标签齐全、JSON-LD 标注文章类型——这些决定了能否被正确收录和分享裂变。',
        },
        {
          id: 'html-ch7-l2',
          title: '无障碍访问 a11y',
          order: 1,
          content_md:
            '## 概念详解\n\n' +
            '无障碍访问（a11y，accessibility 缩写）让残障人士也能使用网站。' +
            '视障用户用屏幕阅读器朗读页面，依赖语义化 HTML；运动障碍用户用键盘操作，依赖焦点管理。' +
            'a11y 不仅是道德责任，许多国家对公共网站有法规要求（如美国 ADA、欧盟 EAA）。\n\n' +
            '核心实践：用语义标签（nav/main/article 而非 div）、label 关联 input、' +
            'img 必写 alt、按钮用 button 而非 div+onclick。语义标签自带无障碍语义，' +
            '屏幕阅读器能识别其角色并朗读，是 a11y 的第一道防线。\n\n' +
            'ARIA 属性补充语义：`role="button"`、`aria-label`（无文字元素的标签）、' +
            '`aria-hidden="true"`（对辅助技术隐藏装饰元素）、`aria-expanded`（折叠状态）、' +
            '`tabindex`（控制焦点顺序）。原则：能用原生语义标签就别用 ARIA——' +
            'ARIA 是「补丁」而非替代，原生标签自带键盘行为和语义，ARIA 需手动实现。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<!-- 语义标签优先 -->\n<nav>导航</nav>\n<main>主内容</main>\n\n<!-- label 关联 input -->\n<label for="email">邮箱：</label>\n<input type="email" id="email" required>\n\n<!-- 图标按钮加 aria-label -->\n<button aria-label="关闭"><img src="x.png" alt=""></button>\n\n<!-- 装饰图隐藏 -->\n<img src="deco.png" alt="" aria-hidden="true">\n\n<!-- 折叠状态 -->\n<button aria-expanded="false" aria-controls="menu">菜单</button>\n<div id="menu" hidden>菜单内容</div>\n\n<!-- 提示文字关联 -->\n<span id="hint">密码需 8 位以上</span>\n<input type="password" aria-describedby="hint">\n```\n\n' +
            '## 常用 ARIA 属性表\n\n' +
            '| 属性 | 说明 | 示例 |\n' +
            '| --- | --- | --- |\n' +
            '| role | 元素角色 | role="button" |\n' +
            '| aria-label | 无文字元素的可读标签 | aria-label="搜索" |\n' +
            '| aria-labelledby | 用其他元素的 id 作为标签 | aria-labelledby="title" |\n' +
            '| aria-describedby | 关联描述文字 | aria-describedby="hint" |\n' +
            '| aria-hidden | 对辅助技术隐藏 | aria-hidden="true" |\n' +
            '| aria-expanded | 展开/折叠状态 | aria-expanded="true" |\n' +
            '| aria-required | 必填标记 | aria-required="true" |\n' +
            '| aria-disabled | 禁用状态 | aria-disabled="true" |\n' +
            '| tabindex | 焦点顺序 | tabindex="0" 可聚焦 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：可访问的按钮与图标\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 用 button 而非 div -->\n    <button type="button">提交</button>\n    <!-- 图标按钮加 aria-label -->\n    <button type="button" aria-label="关闭">\n      <img src="close.png" alt="" width="20">\n    </button>\n    <!-- 装饰图对辅助技术隐藏 -->\n    <img src="deco.png" alt="" aria-hidden="true">\n  </body>\n</html>\n```\n\n' +
            '示例二：表单无障碍\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <div>\n        <label for="email">邮箱：</label>\n        <input type="email" id="email" name="email" required aria-required="true">\n      </div>\n      <div>\n        <span id="hint">密码需 8 位以上</span>\n        <label for="pwd">密码：</label>\n        <input type="password" id="pwd" aria-describedby="hint">\n      </div>\n    </form>\n  </body>\n</html>\n```\n\n' +
            '示例三：折叠组件无障碍\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <button aria-expanded="false" aria-controls="panel" onclick="toggle()">\n      展开详情\n    </button>\n    <div id="panel" hidden>\n      <p>这里是展开后的内容。</p>\n    </div>\n    <script>\n      function toggle() {\n        const panel = document.getElementById("panel");\n        const btn = event.currentTarget;\n        panel.hidden = !panel.hidden;\n        btn.setAttribute("aria-expanded", !panel.hidden);\n      }\n    </script>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. 原则：「No ARIA is better than bad ARIA」——能用原生标签就别用 ARIA。\n' +
            '2. 所有交互元素必须键盘可访问：Tab 聚焦、Enter/Space 触发，div+onclick 默认不可键盘操作。\n' +
            '3. 颜色对比度需达 WCAG 标准：正常文字 4.5:1，大文字 3:1——用对比度检查工具验证。\n' +
            '4. 不要仅靠颜色传达信息（色盲用户），加图标或文字辅助。\n' +
            '5. `alt` 空字符串（alt=""）表示装饰图，屏幕阅读器会跳过；省略 alt 属性则会朗读文件名。\n' +
            '6. `tabindex="0"` 让非焦点元素可聚焦，`tabindex="-1"` 让元素可编程聚焦但不进 Tab 序列。\n\n' +
            '## 实际应用\n\n' +
            '政府/医疗/教育类网站有法规要求无障碍达标（如美国 ADA、欧盟 EAA），用语义 HTML + ARIA 是基础；' +
            '电商做好 a11y 还能覆盖老年和视障用户群体，直接提升转化。表单页用 label 关联、aria-describedby 提示，' +
            '图标按钮用 aria-label 补充文字，折叠组件用 aria-expanded 同步状态——这些是 a11y 的标准实践。\n\n' +
            '## 扩展知识\n\n' +
            'WCAG（Web Content Accessibility Guidelines）是 W3C 的无障碍标准，分 A/AA/AAA 三个等级，' +
            'AA 是大多数法规要求的最低标准。WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）' +
            '是 ARIA 的完整规范。测试工具：axe DevTools（浏览器插件）、Lighthouse（Chrome 内置）、' +
            '屏幕阅读器 VoiceOver（Mac）/ NVDA（Windows）。Skip-to-content 链接是让键盘用户跳过导航直达内容的常见 a11y 模式。',
          examples: [
            {
              title: '可访问的按钮与图标',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 用 button 而非 div -->\n    <button type="button">提交</button>\n    <!-- 图标按钮加 aria-label -->\n    <button type="button" aria-label="关闭">\n      <img src="close.png" alt="" width="20">\n    </button>\n    <!-- 装饰图对辅助技术隐藏 -->\n    <img src="deco.png" alt="" aria-hidden="true">\n  </body>\n</html>',
              explanation:
                'button 自带键盘可访问；纯图标按钮用 aria-label 补充；装饰图 alt 空且 aria-hidden 隐藏。',
            },
            {
              title: '表单无障碍',
              code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <div>\n        <label for="email">邮箱：</label>\n        <input type="email" id="email" name="email" required aria-required="true">\n      </div>\n      <div>\n        <span id="hint">密码需 8 位以上</span>\n        <label for="pwd">密码：</label>\n        <input type="password" id="pwd" aria-describedby="hint">\n      </div>\n    </form>\n  </body>\n</html>',
              explanation:
                'label 关联 input；aria-describedby 关联提示文字让阅读器朗读；aria-required 标记必填。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '创建一个图标按钮：button 内放一张装饰图标（alt 空），按钮本身用 aria-label 标注「搜索」。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- button + img[alt=""] + aria-label -->\n  </body>\n</html>',
              hints: [
                '用 button 而非 div 保证可访问',
                '图标 img alt 设为空',
                'aria-label 给按钮补充文字说明',
              ],
            },
            {
              type: 'open-ended',
              prompt: '创建一个可访问的表单字段：label 关联 input，input 必填，并用 aria-describedby 关联一段提示文字。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <form>\n      <!-- label + input required + aria-describedby -->\n    </form>\n  </body>\n</html>',
              hints: [
                'label 的 for 等于 input 的 id',
                'input 加 required',
                'aria-describedby 指向提示元素 id',
              ],
            },
          ],
          realWorldScenario:
            '政府/医疗/教育类网站有法规要求无障碍达标（如美国 ADA、欧盟 EAA），用语义 HTML + ARIA 是基础；电商做好 a11y 还能覆盖老年和视障用户群体，直接提升转化。',
        },
        {
          id: 'html-ch7-l3',
          title: '响应式设计基础',
          order: 2,
          content_md:
            '## 概念详解\n\n' +
            '响应式设计让网页适配不同屏幕（手机/平板/桌面），是移动优先时代的必备能力。' +
            'HTML 层面的关键是 viewport meta：' +
            '`<meta name="viewport" content="width=device-width, initial-scale=1.0">`，' +
            '让移动端按设备宽度渲染而非缩放整个桌面版。没有这行，手机会显示缩小到 1/3 的桌面页面，体验极差。\n\n' +
            '配合 CSS 媒体查询（`@media`）根据屏幕宽度应用不同样式，是响应式的核心。' +
            '移动优先策略：先写移动端样式（默认），再用 `min-width` 媒体查询渐进增强桌面端——' +
            '这样移动端加载的 CSS 最少，性能更好。\n\n' +
            'HTML 结构上，语义化标签 + 合理的容器划分让 CSS 更易控制布局。' +
            '图片用 `max-width: 100%` 防止溢出，用 `<picture>` 提供不同尺寸版本。' +
            '表格在小屏可加包装容器横向滚动。viewport 是响应式的起点，但大量工作在 CSS。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<head>\n  <!-- 响应式必备 viewport -->\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\n<body>\n  <!-- 响应式图片 -->\n  <img src="large.jpg" alt="图" style="max-width:100%;height:auto;">\n\n  <!-- picture 多版本 -->\n  <picture>\n    <source media="(min-width: 800px)" srcset="large.jpg">\n    <source media="(min-width: 400px)" srcset="medium.jpg">\n    <img src="small.jpg" alt="响应式图">\n  </picture>\n\n  <!-- 响应式表格容器 -->\n  <div style="overflow-x:auto;">\n    <table>...</table>\n  </div>\n</body>\n```\n\n' +
            '## viewport meta 属性表\n\n' +
            '| 属性 | 说明 | 常用值 |\n' +
            '| --- | --- | --- |\n' +
            '| width | 视口宽度 | device-width |\n' +
            '| initial-scale | 初始缩放 | 1.0 |\n' +
            '| maximum-scale | 最大缩放 | 5.0（避免用 1.0 限制无障碍） |\n' +
            '| user-scalable | 允许缩放 | yes（避免 no 影响无障碍） |\n' +
            '| viewport-fit | 安全区适配 | cover（刘海屏） |\n\n' +
            '## 响应式 HTML 技术表\n\n' +
            '| 技术 | 说明 | 用途 |\n' +
            '| --- | --- | --- |\n' +
            '| viewport meta | 视口设置 | 移动端正确渲染 |\n' +
            '| picture + source | 多版本图片 | 按屏幕加载合适尺寸 |\n' +
            '| srcset | 图片候选集 | 高 DPI 屏加载高清版 |\n' +
            '| max-width:100% | 图片防溢出 | 基础响应式 |\n' +
            '| overflow-x:auto | 表格横向滚动 | 小屏表格 |\n\n' +
            '## 代码示例\n\n' +
            '示例一：viewport meta 必备\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <!-- 响应式必备 -->\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>响应式页面</title>\n    <style>\n      body { margin: 0; }\n      .box { padding: 10px; }\n      @media (min-width: 768px) {\n        .box { padding: 40px; }\n      }\n    </style>\n  </head>\n  <body>\n    <div class="box">缩放窗口看 padding 变化</div>\n  </body>\n</html>\n```\n\n' +
            '示例二：图片响应式\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <style>\n      img { max-width: 100%; height: auto; }\n    </style>\n  </head>\n  <body>\n    <img src="https://picsum.photos/1200/400" alt="响应式图片">\n  </body>\n</html>\n```\n\n' +
            '示例三：picture 多版本图片\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  </head>\n  <body>\n    <picture>\n      <source media="(min-width: 800px)" srcset="https://picsum.photos/1200/400">\n      <source media="(min-width: 400px)" srcset="https://picsum.photos/800/300">\n      <img src="https://picsum.photos/400/200" alt="按屏幕加载不同尺寸">\n    </picture>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. viewport meta 必须有，否则移动端会以默认 980px 宽渲染，页面缩小不可读。\n' +
            '2. 避免 `user-scalable=no` 或 `maximum-scale=1.0`，这会禁止用户缩放，违反无障碍标准。\n' +
            '3. 图片务必设 `max-width: 100%; height: auto;`，否则会溢出容器破坏布局。\n' +
            '4. picture 的 source 顺序：大屏在前，小屏在后，最后用 img 作兜底。\n' +
            '5. 表格在小屏应包在 `overflow-x: auto` 容器里横向滚动，而非强行压缩列宽。\n' +
            '6. viewport-fit=cover 配合 env(safe-area-inset) 适配 iPhone 刘海屏安全区。\n\n' +
            '## 实际应用\n\n' +
            '官网改版要求「移动端优先」——首屏必须加 viewport meta，否则手机访问看到的是缩小到 1/3 的桌面版，' +
            '用户体验极差且影响移动搜索排名（Google 移动优先索引）。电商产品图用 picture 提供多版本，' +
            '手机加载小图省流量、桌面加载大图保清晰——这是性能与体验的平衡。\n\n' +
            '## 扩展知识\n\n' +
            'srcset 属性可基于设备像素比（DPR）加载高清图：`srcset="img.jpg 1x, img@2x.jpg 2x"`，' +
            '让 Retina 屏加载 2 倍图。`sizes` 属性告诉浏览器不同宽度下图片显示尺寸，配合 srcset 实现精准加载。' +
            'CSS 的 `image-set()` 函数类似功能用于背景图。容器查询（@container）是比媒体查询更精细的响应式方案，' +
            '基于组件容器宽度而非视口宽度响应——这是响应式的未来方向。',
          examples: [
            {
              title: 'viewport meta 必备',
              code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <!-- 响应式必备 -->\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>响应式页面</title>\n    <style>\n      body { margin: 0; }\n      .box { padding: 10px; }\n      @media (min-width: 768px) {\n        .box { padding: 40px; }\n      }\n    </style>\n  </head>\n  <body>\n    <div class="box">缩放窗口看 padding 变化</div>\n  </body>\n</html>',
              explanation:
                'viewport meta 是移动端正确渲染的前提；配合媒体查询按宽度切换样式，实现响应式。',
            },
            {
              title: '图片响应式',
              code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <style>\n      img { max-width: 100%; height: auto; }\n    </style>\n  </head>\n  <body>\n    <img src="https://picsum.photos/1200/400" alt="响应式图片">\n  </body>\n</html>',
              explanation:
                'max-width: 100% 让图片不超出容器；viewport meta 保证移动端正确；可配合 picture 提供多版本。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '为页面添加 viewport meta（width=device-width, initial-scale=1.0），保证移动端正确渲染。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>移动友好</title>\n    <!-- viewport meta -->\n  </head>\n  <body>\n    <p>移动端不再缩小</p>\n  </body>\n</html>',
              hints: [
                'meta name="viewport"',
                'content="width=device-width, initial-scale=1.0"',
                '放在 head 内',
              ],
            },
            {
              type: 'open-ended',
              prompt: '为图片添加 CSS（max-width:100%; height:auto）让其响应式不溢出容器，并确保页面有 viewport meta。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <!-- viewport -->\n    <style>\n      /* 图片响应式 */\n    </style>\n  </head>\n  <body>\n    <img src="https://picsum.photos/800/300" alt="大图">\n  </body>\n</html>',
              hints: [
                '加 viewport meta',
                'img { max-width: 100%; height: auto; }',
                '保证图片不溢出容器',
              ],
            },
          ],
          realWorldScenario:
            '官网改版要求「移动端优先」——首屏必须加 viewport meta，否则手机访问看到的是缩小到 1/3 的桌面版，用户体验极差且影响移动搜索排名（Google 移动优先索引）。',
        },
        {
          id: 'html-ch7-l4',
          title: '性能优化实践',
          order: 3,
          content_md:
            '## 概念详解\n\n' +
            '性能是用户体验的核心，直接影响转化率和搜索排名。HTML 层面的性能优化是整个性能体系的起点——' +
            '合理的资源加载顺序和属性配置，能让页面更快渲染、减少阻塞。' +
            '核心原则：CSS 放 head 内（尽早渲染样式避免 FOUC 闪烁），' +
            'JS 放 body 末尾或用 `defer`/`async`（避免阻塞 HTML 解析）。\n\n' +
            '`defer` 按顺序在 HTML 解析完成后执行（DOM 已就绪），`async` 下载完立即执行（顺序不可控）。' +
            '大多数场景用 `defer`，独立脚本（如统计代码）用 `async`。' +
            '图片优化：用 `loading="lazy"` 懒加载视口外图片，`width`/`height` 防布局抖动（CLS），' +
            '用 `decoding="async"` 异步解码。新格式 WebP/AVIF 体积更小，用 `<picture>` 提供兼容。' +
            '`<link rel="preload">` 预加载关键资源（字体、首屏图）。\n\n' +
            '减少资源请求数：合并 CSS/JS（HTTP/2 后合并收益下降但仍有效），' +
            '内联关键 CSS（首屏样式直接写在 head）。用 `preconnect` 提前建立第三方域名连接。' +
            '服务端启用 gzip/brotli 压缩、配置缓存头。性能是系统工程，HTML 是起点。\n\n' +
            '## 语法说明\n\n' +
            '```html\n<head>\n  <!-- CSS 放 head 尽早加载 -->\n  <link rel="stylesheet" href="style.css">\n\n  <!-- 预连接第三方域名 -->\n  <link rel="preconnect" href="https://cdn.example.com">\n\n  <!-- 预加载关键资源 -->\n  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>\n  <link rel="preload" href="hero.jpg" as="image">\n\n  <!-- JS 用 defer 不阻塞解析 -->\n  <script src="app.js" defer></script>\n  <!-- 独立脚本用 async -->\n  <script src="analytics.js" async></script>\n</head>\n<body>\n  <!-- 首屏图：宽高防 CLS，decoding 异步解码 -->\n  <img src="hero.webp" alt="首屏图" width="1200" height="400" decoding="async">\n  <!-- 次屏图：懒加载 -->\n  <img src="below.webp" alt="次屏图" loading="lazy" width="800" height="600">\n</body>\n```\n\n' +
            '## 资源加载属性表\n\n' +
            '| 属性/标签 | 作用 | 适用 | 示例 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| defer | 延迟按序执行 | script | `<script defer>` |\n' +
            '| async | 异步立即执行 | script | `<script async>` |\n' +
            '| loading="lazy" | 懒加载 | img/iframe | `<img loading="lazy">` |\n' +
            '| decoding="async" | 异步解码 | img | `<img decoding="async">` |\n' +
            '| width/height | 防布局抖动 | img/iframe | width="800" |\n' +
            '| preload | 预加载关键资源 | link | `<link rel="preload" as="image">` |\n' +
            '| preconnect | 预连接域名 | link | `<link rel="preconnect">` |\n' +
            '| prefetch | 预取下一页资源 | link | `<link rel="prefetch">` |\n\n' +
            '## Core Web Vitals 指标表\n\n' +
            '| 指标 | 全称 | 含义 | 目标值 |\n' +
            '| --- | --- | --- | --- |\n' +
            '| LCP | Largest Contentful Paint | 最大内容绘制 | < 2.5s |\n' +
            '| FID/INP | First Input Delay / Interaction | 首次输入延迟 / 交互响应 | < 100ms / 200ms |\n' +
            '| CLS | Cumulative Layout Shift | 累积布局偏移 | < 0.1 |\n' +
            '| FCP | First Contentful Paint | 首次内容绘制 | < 1.8s |\n' +
            '| TTFB | Time to First Byte | 首字节时间 | < 800ms |\n\n' +
            '## 代码示例\n\n' +
            '示例一：脚本加载策略\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>性能优化</title>\n    <!-- CSS 放 head 尽早加载 -->\n    <link rel="stylesheet" href="style.css">\n    <!-- defer 不阻塞解析，按顺序执行 -->\n    <script src="app.js" defer></script>\n  </head>\n  <body>\n    <p>内容先渲染，脚本后执行</p>\n  </body>\n</html>\n```\n\n' +
            '示例二：图片与预加载\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <!-- 预连接第三方域名 -->\n    <link rel="preconnect" href="https://cdn.example.com">\n    <!-- 预加载关键字体 -->\n    <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>\n  </head>\n  <body>\n    <!-- 懒加载 + 防抖动 -->\n    <img src="hero.webp" alt="首屏图" width="1200" height="400" decoding="async">\n    <img src="below.webp" alt="次屏图" loading="lazy" width="800" height="600">\n  </body>\n</html>\n```\n\n' +
            '示例三：picture 多格式兼容\n\n' +
            '```html\n<!DOCTYPE html>\n<html>\n  <body>\n    <picture>\n      <!-- AVIF 最小但兼容性差 -->\n      <source srcset="hero.avif" type="image/avif">\n      <!-- WebP 中等 -->\n      <source srcset="hero.webp" type="image/webp">\n      <!-- JPG 兜底 -->\n      <img src="hero.jpg" alt="首屏图" width="1200" height="400" loading="eager">\n    </picture>\n  </body>\n</html>\n```\n\n' +
            '## 注意事项\n\n' +
            '1. `defer` 保持脚本顺序执行，`async` 谁先下载完谁先执行——有依赖的脚本用 defer，独立脚本用 async。\n' +
            '2. `loading="lazy"` 只对视口外图片有效，首屏图（LCP 元素）不要用 lazy，否则拖慢 LCP。\n' +
            '3. img 必须设 width/height（或 aspect-ratio），否则图片加载会导致布局抖动（CLS 升高）。\n' +
            '4. `preload` 只用于关键资源，滥用会浪费带宽反损性能；`as` 属性必须正确指定资源类型。\n' +
            '5. AVIF/WebP 比 JPG/PNG 小 30-50%，但需用 picture + source 提供旧格式兜底。\n' +
            '6. 内联关键 CSS（首屏样式）能加速首次渲染，但过大反而拖慢——一般控制在 14KB 内。\n\n' +
            '## 实际应用\n\n' +
            '电商首屏加载速度直接影响转化率：CSS 内联到 head、首屏图 preload、次屏图 lazy、JS 用 defer——' +
            '这套组合能把 LCP（最大内容绘制）从 4 秒压到 1.5 秒，转化率显著提升。' +
            '新闻资讯站用 lazy load 让长文章图片按需加载，省流量且首屏更快；' +
            'CDN 配合 preconnect 让第三方资源（字体、统计）连接零延迟。\n\n' +
            '## 扩展知识\n\n' +
            'HTTP/2 多路复用让合并文件的收益下降，但减少请求数仍有意义（减少 header 开销）。' +
            'Service Worker + Cache API 可实现离线缓存和自定义缓存策略，是 PWA 的核心。' +
            'Critical CSS 工具（如 critical、penthouse）能自动提取首屏样式内联到 HTML。' +
            '资源提示（resource hints）还有 `dns-prefetch`（DNS 预解析）、`modulepreload`（预加载 ES 模块）等。' +
            '性能监控用 Lighthouse、WebPageTest、Chrome DevTools Performance 面板做系统分析。',
          examples: [
            {
              title: '脚本加载策略',
              code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>性能优化</title>\n    <!-- CSS 放 head 尽早加载 -->\n    <link rel="stylesheet" href="style.css">\n    <!-- defer 不阻塞解析，按顺序执行 -->\n    <script src="app.js" defer></script>\n  </head>\n  <body>\n    <p>内容先渲染，脚本后执行</p>\n  </body>\n</html>',
              explanation:
                'CSS 在 head 提前加载；JS 用 defer 不阻塞 HTML 解析，文档解析完才执行，DOM 已就绪。',
            },
            {
              title: '图片与预加载',
              code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <!-- 预连接第三方域名 -->\n    <link rel="preconnect" href="https://cdn.example.com">\n    <!-- 预加载关键字体 -->\n    <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>\n  </head>\n  <body>\n    <!-- 懒加载 + 防抖动 -->\n    <img src="hero.webp" alt="首屏图" width="1200" height="400" decoding="async">\n    <img src="below.webp" alt="次屏图" loading="lazy" width="800" height="600">\n  </body>\n</html>',
              explanation:
                'preconnect 提前建连；preload 预加载关键资源；首屏图优先，次屏图 lazy 懒加载；宽高防 CLS。',
            },
          ],
          exercises: [
            {
              type: 'open-ended',
              prompt: '配置 JS 加载：用 defer 引入 app.js 放在 head 内，避免阻塞 HTML 解析。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>性能</title>\n    <!-- defer 引入 app.js -->\n  </head>\n  <body>\n    <p>内容</p>\n  </body>\n</html>',
              hints: [
                'script src="app.js" defer',
                '放 head 内也可，defer 保证不阻塞',
                'defer 按文档顺序执行',
              ],
            },
            {
              type: 'open-ended',
              prompt: '为两张图片配置：首屏图设宽高与 decoding="async"，次屏图开启懒加载。',
              starter_code:
                '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- 首屏图 width/height/decoding -->\n    <img src="hero.webp" alt="首屏">\n    <!-- 次屏图 loading="lazy" -->\n    <img src="below.webp" alt="次屏">\n  </body>\n</html>',
              hints: [
                '首屏图加 width/height/decoding="async"',
                '次屏图加 loading="lazy"',
                '宽高防布局抖动 CLS',
              ],
            },
          ],
          realWorldScenario:
            '电商首屏加载速度直接影响转化率：CSS 内联到 head、首屏图 preload、次屏图 lazy、JS 用 defer——这套组合能把 LCP（最大内容绘制）从 4 秒压到 1.5 秒，转化率显著提升。',
        },
      ],
    },
  ],
}
