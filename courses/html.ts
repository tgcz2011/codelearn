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
            '`<!DOCTYPE html>` 是 HTML5 的文档类型声明，必须是文档第一行，' +
            '告诉浏览器以标准模式（standards mode）渲染页面，避免进入怪异模式（quirks mode）。' +
            '整个文档由 `<html>` 根元素包裹，它包含两个直接子元素：' +
            '`<head>` 存放元信息（标题、字符集、样式链接等，用户不可见）和 `<body>` 存放可见内容。\n\n' +
            '`<html>` 标签通常带 `lang` 属性，如 `lang="zh-CN"`，帮助搜索引擎和屏幕阅读器判断语言。' +
            '`<head>` 中 `<meta charset="UTF-8">` 声明字符编码，避免中文乱码；' +
            '`<title>` 设置浏览器标签页标题，也是 SEO 的重要因素。\n\n' +
            '一个最小可用的 HTML5 页面只需要 DOCTYPE、html、head、title、body 这几个核心结构。' +
            '现代 HTML5 相比 HTML4 大幅简化了声明，不再需要冗长的 DTD 引用。',
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
            '`<head>` 中除 `<title>` 外，还包含多个 `<meta>` 标签描述文档元信息。' +
            '`<meta charset="UTF-8">` 设置字符编码；' +
            '`<meta name="description" content="...">` 设置页面描述，会显示在搜索结果中；' +
            '`<meta name="viewport" content="width=device-width, initial-scale=1.0">` 是响应式设计的关键，控制移动端视口。\n\n' +
            '`<link rel="stylesheet" href="style.css">` 引入外部 CSS，' +
            '`<script src="app.js" defer></script>` 引入外部 JS。' +
            '`defer` 让脚本在文档解析完成后执行，避免阻塞渲染。\n\n' +
            '这些元信息虽不直接显示，但严重影响 SEO、移动端体验和页面加载性能。' +
            '生产项目中通常还会加入 Open Graph 标签（og:title 等）用于社交分享预览。',
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
            'HTML 提供六级标题标签 `<h1>` 到 `<h6>`，数字越大字号越小、重要性越低。' +
            '`<h1>` 是页面主标题，每个页面通常只有一个，对 SEO 影响最大。' +
            '`<h2>` 到 `<h6>` 用于划分内容层级，应按层级顺序使用，不要跳级。\n\n' +
            '标题标签是语义化的，不仅控制视觉，更传达文档结构。' +
            '搜索引擎和屏幕阅读器依赖标题层级理解页面内容大纲，' +
            '因此不要为了字体大小而滥用标题——样式交给 CSS 处理。\n\n' +
            '注释用 `<!-- 注释内容 -->`，浏览器不渲染但源码可见，' +
            '常用于说明代码意图、临时禁用某段代码或留 TODO 标记。',
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
            '`<p>` 表示一个段落，浏览器默认在段落前后加 margin。' +
            'HTML 提供多种文本语义标签：`<strong>` 表示重要（默认加粗），' +
            '`<em>` 表示强调（默认斜体），`<mark>` 表示高亮标记，' +
            '`<code>` 表示代码片段，`<pre>` 保留空白与换行。\n\n' +
            '注意区分语义与外观：`<b>`/`<i>` 仅改变样式无语义，' +
            '而 `<strong>`/`<em>` 带有语义，更利于无障碍访问。' +
            '`<br>` 是换行（自闭合），`<hr>` 是水平分割线（自闭合）。\n\n' +
            '`<span>` 是无语义的行内容器，常用于给一段文本局部加样式或钩子。' +
            '特殊字符需用实体：`&lt;` 表示 <，`&gt;` 表示 >，`&amp;` 表示 &，`&nbsp;` 表示不间断空格。',
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
            '`<a>`（anchor）标签创建超链接，`href` 属性指定目标地址。' +
            '点击链接默认在当前标签页跳转，加 `target="_blank"` 在新标签页打开，' +
            '配合 `rel="noopener noreferrer"` 提升安全（防止新页面通过 window.opener 操作原页面）。\n\n' +
            'href 可以是绝对 URL（`https://example.com`）、相对路径（`about.html`）、' +
            '锚点（`#section1` 跳到页内 id 为 section1 的元素）或邮件/电话（`mailto:xxx`、`tel:xxx`）。' +
            '锚点常用于「回到顶部」、目录跳转等。\n\n' +
            '链接文字应当有意义，避免「点击这里」这类无描述文案——' +
            '屏幕阅读器会朗读链接文字，搜索引擎也依赖链接文字判断目标内容。',
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
            '`<img>` 标签插入图片，是自闭合元素（无需结束标签）。' +
            '`src` 指定图片地址，`alt` 是图片无法加载时的替代文字，' +
            '也是屏幕阅读器朗读给视障用户的内容，对无障碍访问至关重要。\n\n' +
            '常用属性还有 `width`/`height`（建议设置，避免图片加载时布局抖动 CLS）、' +
            '`loading="lazy"`（懒加载，滚动到视口附近才加载，节省流量）。' +
            '响应式图片可用 `<picture>` 配合 `srcset` 提供不同尺寸版本。\n\n' +
            'alt 文本原则：装饰性图片用空 alt（`alt=""`）让屏幕阅读器跳过；' +
            '内容性图片用简洁描述说明图片用途，不要冗余「图片：」前缀。' +
            '写好 alt 同时提升 SEO 和无障碍。',
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
            '路径分绝对路径与相对路径。绝对路径包含完整协议和域名（`https://cdn.com/img/logo.png`），' +
            '或从根目录开始的路径（`/assets/logo.png`）。' +
            '相对路径基于当前文件位置：`./logo.png` 同级，`../logo.png` 上级，`images/logo.png` 下级。\n\n' +
            '站点内资源推荐用相对路径或根相对路径（以 / 开头），便于部署迁移。' +
            '跨域资源必须用绝对路径。`./` 可省略，`images/logo.png` 等价于 `./images/logo.png`。\n\n' +
            '常见错误：本地能跑上线后 404，多半是路径大小写敏感（Linux 服务器区分大小写）' +
            '或用了反斜杠（Windows 习惯 `\`，Web 必须用 `/`）。' +
            '团队协作约定统一的目录结构能减少此类问题。',
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
            '`<figure>` 用于包裹图文组合，`<figcaption>` 为其添加说明，' +
            '常用于图表、代码片段、引文等需要配文字说明的独立内容单元。' +
            '这种语义结构让图文关系明确，利于 SEO 和无障碍。\n\n' +
            '`<picture>` 标签配合 `<source>` 与 `srcset` 实现响应式图片：' +
            '根据屏幕尺寸或格式支持选择最合适的图片源，' +
            '可提供 WebP/AVIF 等新格式并兼容旧浏览器。\n\n' +
            '`<blockquote>` 表示块级引用（常配 `<cite>` 标注来源），' +
            '`<q>` 表示行内引用。这些标签让引用内容有语义，便于样式统一和爬虫识别。',
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
            '`<ul>`（unordered list）是无序列表，默认显示圆点项目符号；' +
            '`<ol>`（ordered list）是有序列表，默认显示数字序号。' +
            '两者都用 `<li>`（list item）表示列表项。\n\n' +
            '`<ol>` 支持 `start` 属性指定起始序号，`type` 属性切换序号样式（1/a/A/i/I），' +
            '`reversed` 属性倒序排列。这些属性让有序列表更灵活。\n\n' +
            '列表可嵌套：在 `<li>` 内再放 `<ul>` 或 `<ol>` 形成多级列表，' +
            '常用于导航菜单、目录树、步骤说明等场景。' +
            '语义正确性很重要——`<ul>`/`<ol>` 的直接子元素必须是 `<li>`。',
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
            '`<dl>`（description list）是描述列表，用 `<dt>` 表示术语、`<dd>` 表示描述。' +
            '常用于术语表、键值对、问答等场景，一个 dt 可对应多个 dd，反之亦然。\n\n' +
            '与 ul/ol 相比，dl 强调「术语—解释」的成对关系，语义更准确。' +
            '例如 FAQ 页面用 dl 结构化「问题—答案」，比 div 套 p 更有语义价值。\n\n' +
            '嵌套列表的常见用途：网站侧边栏的多级分类、文件目录树、' +
            '面包屑导航等。要注意语义层级：外层 li 包裹内层 ul，' +
            '不要把内层 ul 直接放在外层 ul 下（必须先有 li 包裹）。',
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
            '表格用 `<table>` 创建。结构上分 `<thead>`（表头）、`<tbody>`（主体）、' +
            '`<tfoot>`（表尾）三部分，每行用 `<tr>`，' +
            '表头单元格用 `<th>`（默认加粗居中），数据单元格用 `<td>`。\n\n' +
            '`<th>` 的 `scope` 属性（`col`/`row`）声明该表头对应列还是行，' +
            '帮助屏幕阅读器正确朗读表格，是无障碍必备。' +
            '`colspan`/`rowspan` 属性让单元格跨列/跨行合并。\n\n' +
            '现代表格应通过 CSS 控制边框、间距、斑马纹等样式，' +
            '不再用 `border`/`cellpadding`/`cellspacing` 等 HTML 属性（已废弃）。' +
            '表格仅用于展示二维数据，不要用 table 做布局——那是上个世纪的做法。',
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
            '`<form>` 是表单容器，`action` 属性指定提交地址，`method` 指定方法（get/post）。' +
            '`<input>` 是最常用的输入控件，`type` 决定类型：text（文本）、password（密码）、' +
            'email、number、date、checkbox、radio 等。\n\n' +
            '每个 input 应配 `<label>`，用 `for` 属性关联 input 的 `id`。' +
            '点击 label 会聚焦对应 input，且屏幕阅读器朗读 label 文字，是无障碍必备。' +
            '`placeholder` 提供提示，`value` 设默认值，`required` 标记必填。\n\n' +
            '`name` 属性是表单提交时的字段名，服务端据此接收数据；' +
            '`id` 是页面内唯一标识用于 label 关联和 JS 操作。两者用途不同，通常都写。',
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
            'HTML5 新增多种 input type：email（带格式校验）、url、number（带步进）、' +
            'date、time、month、week、color、range（滑块）、search、tel 等。' +
            '浏览器自动提供合适的键盘和校验，减少 JS 工作量。\n\n' +
            '常用属性：`min`/`max`/`step` 限定数值范围，`maxlength` 限制字符数，' +
            '`pattern` 用正则校验，`disabled` 禁用，`readonly` 只读，' +
            '`autofocus` 自动聚焦，`autocomplete` 控制自动填充。\n\n' +
            '`<input type="hidden">` 存放不可见数据（如 CSRF token、记录 ID），' +
            '会随表单提交但用户看不到。注意 hidden 字段仍可被开发者工具查看，' +
            '不要放敏感信息。type 选择恰当能免费获得浏览器原生校验。',
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
            '`<select>` 下拉选择框，内含多个 `<option>`，`<optgroup>` 可分组。' +
            '`multiple` 属性允许多选，`size` 控制可见行数。' +
            'option 的 `value` 是提交值，文本是显示内容，`selected` 设默认选中。\n\n' +
            '`<textarea>` 多行文本输入，`rows`/`cols` 控制大小，' +
            '用 `maxlength` 限制字数。与 input 不同，textarea 用标签内容作为默认值而非 value 属性。\n\n' +
            '`<button>` 按钮，`type` 取 submit（默认，提交表单）、reset（重置）、button（无默认行为，配合 JS）。' +
            '推荐用 button 而非 `<input type="submit">`，因为 button 可含 HTML 内容（图标+文字），样式更灵活。',
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
            '`<fieldset>` 用于将相关表单控件分组，`<legend>` 为分组添加标题。' +
            '这在复杂表单中提升可读性和无障碍体验，屏幕阅读器会朗读 legend 帮助用户理解分组。\n\n' +
            'HTML5 原生验证属性：`required`（必填）、`pattern`（正则校验）、' +
            '`min`/`max`/`step`（数值范围）、`maxlength`（长度）、`type` 自带校验（email/url）。' +
            '浏览器在 submit 时自动拦截并提示，无需 JS。\n\n' +
            '需要自定义提示时用 `setCustomValidity`（JS）；' +
            '禁用原生验证用 `<form novalidate>`。生产中常结合原生校验 + JS 增强：' +
            '原生做基础，JS 做实时反馈、异步查重等高级校验。' +
            '注意服务端必须再次校验——前端校验仅为体验，不可信。',
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
            '语义化标签让页面结构清晰，利于 SEO 和无障碍。`<header>` 表示页头或区块头部，' +
            '通常含 logo、标题、导航；`<nav>` 专用于主导航链接；' +
            '`<main>` 是页面主要内容，每个页面唯一；`<footer>` 是页脚，含版权、联系方式等。\n\n' +
            '这些标签本质上是带语义的 div，浏览器和辅助技术能识别其角色。' +
            '用语义标签替代 div 不仅让代码可读，还让屏幕阅读器提供「跳到主内容」等快捷功能。\n\n' +
            '一个典型页面结构：header（含 nav）→ main（含 article/section）→ footer。' +
            '注意 header/footer 可用于页面整体，也可用于 article 内部表示该文章的头/尾。',
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
            '`<section>` 表示文档中的一个区块，通常带标题，用于按主题分组内容；' +
            '`<article>` 表示独立的、可单独分发或复用的内容单元，如文章、帖子、评论、卡片。' +
            '二者都应包含标题（h1-h6）。\n\n' +
            '区分原则：内容能否独立拿出来还有意义？能则用 article（如一篇博客），' +
            '不能则用 section（如页面中的「关于我们」区块）。' +
            'article 可嵌套（评论嵌在文章内），section 也可嵌套。\n\n' +
            '现代实践：不要纠结「section 还是 article」而过度设计。' +
            '当 div 加 class 就能解决时不必硬套语义；但主要内容区块用语义标签确实有 SEO 价值。',
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
            '`<aside>` 表示与主内容相关但可独立的内容，如侧边栏、相关推荐、广告、术语解释框。' +
            '它应能从主内容中移除而不影响主内容理解——这是判断 aside 的关键。\n\n' +
            '`<figure>`/`<figcaption>` 用于图文组合（前章已介绍）；' +
            '`<time>` 表示日期/时间，`datetime` 属性用机器可读格式（如 `2024-01-01`），' +
            '文本是给人看的格式。time 标签帮助搜索引擎理解时间信息，对活动、新闻很重要。\n\n' +
            '`<address>` 表示联系方式，通常放 footer 内。' +
            '`<mark>` 表示因上下文相关而高亮的内容（如搜索结果关键词）。' +
            '这些小众但有用的语义标签让内容表达更精确。',
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
            '`<details>` 创建可折叠区域，`<summary>` 是其标题（点击展开/收起）。' +
            '这是原生 HTML 交互组件，无需 JS 即可工作，常用于 FAQ、代码折叠、附加信息。\n\n' +
            '`<dialog>` 元素表示对话框，配合 `showModal()` 方法（JS）显示模态框，' +
            '浏览器自带背景遮罩和焦点陷阱，比手写 div+JS 实现更规范。\n\n' +
            '`<progress>` 表示进度条（`value`/`max`），`<meter>` 表示已知范围的度量（如磁盘占用）。' +
            '这些原生控件自带无障碍语义和样式，比 div 手搓更可访问。' +
            '现代浏览器对这些元素支持已较好，可放心使用。',
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
            '`<video>` 嵌入视频，`<audio>` 嵌入音频，无需 Flash 等插件。' +
            '常用属性：`src` 指定源，`controls` 显示播放控件，`autoplay` 自动播放（多需 muted），' +
            '`loop` 循环，`muted` 静音，`poster` 设置视频封面，`preload` 控制预加载策略。\n\n' +
            '为兼容不同浏览器格式，可用多个 `<source>` 子元素提供不同格式：' +
            '`<source src="x.mp4" type="video/mp4">` 和 `<source src="x.webm" type="video/webm">`，' +
            '浏览器选第一个支持的格式。`<track>` 可加字幕轨道。\n\n' +
            'autoplay 政策：现代浏览器禁止带声音的自动播放，' +
            '通常需 `autoplay muted` 才能生效。视频首屏自动播放（静音）是落地页常见做法。' +
            '注意视频文件较大，配合 CDN 和合适的编码（H.264/VP9）优化体验。',
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
            '`<canvas>` 是画布元素，通过 JavaScript 的 2D 绘图 API 在其上绘制图形。' +
            '需设置 width/height 属性（不用 CSS，CSS 会缩放而非改变分辨率）。' +
            '获取绘图上下文：`const ctx = canvas.getContext("2d")`。\n\n' +
            '常用 API：`fillRect(x,y,w,h)` 填充矩形，`strokeRect` 描边矩形，' +
            '`fillText`/`strokeText` 绘制文字，`beginPath`/`moveTo`/`lineTo`/`arc` 绘制路径，' +
            '`fillStyle`/`strokeStyle` 设置颜色。canvas 适合图表、游戏、图像处理。\n\n' +
            'canvas 是即时模式（画完即忘），要动画需清空重画。' +
            '对比 SVG（保留模式，DOM 操作），canvas 适合大量元素的高频重绘，' +
            'SVG 适合交互性强的少量矢量图。WebGL 是 canvas 的 3D 上下文，Three.js 等库基于此。',
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
            'Web Storage 提供 `localStorage` 和 `sessionStorage` 两个 API，' +
            '前者持久存储（除非手动清除），后者仅在标签页会话期间有效。' +
            '两者都存储字符串键值对，API 简单：`setItem(key, value)`、`getItem(key)`、' +
            '`removeItem(key)`、`clear()`。\n\n' +
            '存储对象需用 `JSON.stringify` 转字符串，读取时 `JSON.parse` 还原。' +
            '容量约 5-10MB（各浏览器不同），远超 cookie（4KB）。' +
            '与 cookie 不同，Storage 数据不随每次请求自动发送，节省带宽。\n\n' +
            '注意：Storage 同步 API 会阻塞主线程，大量数据用 IndexedDB（异步、容量大）。' +
            '千万不要存敏感信息（密码、token）——任何 JS 都能读取，易受 XSS 攻击。' +
            '生产中常用封装库（如 store.js）处理序列化和兼容性。',
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
            'SEO（搜索引擎优化）从 HTML 结构开始。核心 meta 标签：' +
            '`<title>` 页面标题（60 字内，含关键词）、' +
            '`<meta name="description">` 页面描述（160 字内，搜索结果显示）、' +
            '`<meta name="keywords">`（已基本被搜索引擎忽略，可省略）。\n\n' +
            'Open Graph 标签（og:title、og:description、og:image）控制社交分享预览，' +
            'Twitter Card 标签控制推特分享。`<link rel="canonical">` 指定规范 URL 避免重复内容惩罚。' +
            '结构化数据用 JSON-LD（`<script type="application/ld+json">`）让搜索引擎理解内容类型。\n\n' +
            'HTML 结构层面：每个页面一个 h1，标题层级递进不跳级，' +
            'img 必写 alt，a 文字有意义，用语义化标签——这些既是 SEO 也是无障碍要求。' +
            '好的 SEO 本质是好的内容结构，而非堆砌技巧。',
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
            '无障碍访问（a11y，accessibility 缩写）让残障人士也能使用网站。' +
            '视障用户用屏幕阅读器朗读页面，依赖语义化 HTML。核心实践：' +
            '用语义标签（nav/main/article 而非 div）、label 关联 input、' +
            'img 必写 alt、按钮用 button 而非 div+onclick。\n\n' +
            'ARIA 属性补充语义：`role="button"`、`aria-label`（无文字元素的标签）、' +
            '`aria-hidden="true"`（对辅助技术隐藏装饰元素）、`aria-expanded`（折叠状态）、' +
            '`tabindex`（控制焦点顺序）。原则：能用原生语义标签就别用 ARIA。\n\n' +
            '键盘可访问性：所有交互元素应能用 Tab 聊天聚焦、Enter/Space 触发。' +
            '颜色对比度需达 WCAG 标准（正常文字 4.5:1）。' +
            '不要仅靠颜色传达信息（色盲用户），加图标或文字辅助。' +
            '测试方法：用键盘走一遍流程、用屏幕阅读器（VoiceOver/NVDA）听一遍。',
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
            '响应式设计让网页适配不同屏幕。HTML 层面的关键是 viewport meta：' +
            '`<meta name="viewport" content="width=device-width, initial-scale=1.0">`，' +
            '让移动端按设备宽度渲染而非缩放整个桌面版。没有这行，手机会显示缩小版的桌面页面。\n\n' +
            '配合 CSS 媒体查询（`@media`）根据屏幕宽度应用不同样式，' +
            '是响应式的核心。移动优先策略：先写移动端样式，再用 `min-width` 媒体查询渐进增强。\n\n' +
            'HTML 结构上，语义化标签 + 合理的容器划分让 CSS 更易控制布局。' +
            '图片用 `max-width: 100%` 防止溢出，用 `<picture>` 提供不同尺寸版本。' +
            '表格在小屏可加包装容器横向滚动。viewport 是响应式的起点，但大量工作在 CSS。',
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
            'HTML 层面的性能优化：CSS 放 head 内（尽早渲染样式避免 FOUC 闪烁），' +
            'JS 放 body 末尾或用 `defer`/`async`（避免阻塞 HTML 解析）。' +
            '`defer` 按顺序在解析完成后执行，`async` 下载完立即执行（顺序不可控）。\n\n' +
            '图片优化：用 `loading="lazy"` 懒加载视口外图片，`width`/`height` 防布局抖动，' +
            '用 `decoding="async"` 异步解码。新格式 WebP/AVIF 体积更小，用 `<picture>` 提供兼容。' +
            '`<link rel="preload">` 预加载关键资源（字体、首屏图）。\n\n' +
            '减少资源请求数：合并 CSS/JS（HTTP/2 后合并收益下降但仍有效），' +
            '内联关键 CSS（首屏样式直接写在 head）。用 `preconnect` 提前建立第三方域名连接。' +
            '服务端启用 gzip/brotli 压缩、配置缓存头。性能是系统工程，HTML 是起点。',
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
