import type { CourseContent } from './types'

/**
 * HTML 入门课程（3 章）
 *
 * HTML 代码通过 HtmlWasmRunner 在 iframe 中渲染预览，无 stdout。
 * expected_output 用关键可见文本描述，便于学员对照预览结果。
 */
export const htmlCourse: CourseContent = {
  id: 'course-html',
  slug: 'html',
  title: 'HTML 入门',
  description: '从零开始学习 HTML 网页结构、常用标签与表单语义化，搭建你的第一个网页。',
  language: 'html',
  difficulty: 'beginner',
  chapters: [
    {
      id: 'html-ch1',
      title: 'HTML 基础结构',
      order: 0,
      lessons: [
        {
          id: 'html-ch1-l1',
          title: '第一个 HTML 页面',
          order: 0,
          content_md:
            '每个 HTML 页面都由 `<!DOCTYPE html>` 声明开头，' +
            '随后是 `<html>` 根元素，内含 `<head>`（元信息）和 `<body>`（可见内容）两部分。' +
            '`<title>` 设置浏览器标签页标题，`<p>` 表示一个段落。',
          example_code:
            '<!DOCTYPE html>\n<html>\n  <head>\n    <title>我的网页</title>\n  </head>\n  <body>\n    <p>Hello, HTML!</p>\n  </body>\n</html>',
          exercise: {
            prompt: '创建一个 HTML 页面，标题为「练习」，body 中显示文字「我在学 HTML」。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n  <head>\n    <title>___</title>\n  </head>\n  <body>\n    <p>___</p>\n  </body>\n</html>',
            expected_output: '我在学 HTML',
          },
        },
        {
          id: 'html-ch1-l2',
          title: '标题与注释',
          order: 1,
          content_md:
            'HTML 提供 `<h1>` 到 `<h6>` 六级标题，`<h1>` 最大最重要。' +
            '注释用 `<!-- -->` 包裹，浏览器不渲染，仅供开发者阅读。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<body>\n  <h1>主标题</h1>\n  <h2>副标题</h2>\n  <!-- 这是注释，不会显示 -->\n  <p>正文内容</p>\n</body>\n</html>',
          exercise: {
            prompt: '页面中添加一个 h1 标题「我的笔记」和一段注释「这里写笔记内容」。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<body>\n  <h1>___</h1>\n  <!-- ___ -->\n</body>\n</html>',
            expected_output: '我的笔记',
          },
        },
      ],
    },
    {
      id: 'html-ch2',
      title: '常用标签',
      order: 1,
      lessons: [
        {
          id: 'html-ch2-l1',
          title: 'div 与 span',
          order: 0,
          content_md:
            '`<div>` 是块级容器，独占一行，常用于布局分区。' +
            '`<span>` 是行内容器，不换行，用于给一段文本添加样式。' +
            '两者本身无语义，主要作容器使用。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<body>\n  <div style="background:#eee;padding:8px;">这是一个块</div>\n  <p>这是一段<span style="color:red;">红色</span>文字</p>\n</body>\n</html>',
          exercise: {
            prompt: '用 div 包裹一段文字「盒子」，用 span 将「重点」标为蓝色。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<body>\n  <div>___</div>\n  <p>这是<span style="color:blue;">___</span>内容</p>\n</body>\n</html>',
            expected_output: '盒子',
          },
        },
        {
          id: 'html-ch2-l2',
          title: '链接与图片',
          order: 1,
          content_md:
            '`<a href="地址">` 创建超链接，点击跳转。' +
            '`<img src="地址" alt="描述">` 插入图片，alt 是图片无法加载时的替代文本。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<body>\n  <a href="https://example.com">点击访问</a>\n  <br>\n  <img src="https://via.placeholder.com/150" alt="示例图片">\n</body>\n</html>',
          exercise: {
            prompt: '创建一个链接，文字为「学习更多」，指向 https://example.com。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<body>\n  <a href="___">___</a>\n</body>\n</html>',
            expected_output: '学习更多',
          },
        },
        {
          id: 'html-ch2-l3',
          title: '列表与表格',
          order: 2,
          content_md:
            '`<ul>` 无序列表、`<ol>` 有序列表，每项用 `<li>`。' +
            '表格用 `<table>`，行用 `<tr>`，单元格用 `<td>`，表头用 `<th>`。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<body>\n  <ul>\n    <li>苹果</li>\n    <li>香蕉</li>\n  </ul>\n  <table border="1">\n    <tr><th>姓名</th><th>年龄</th></tr>\n    <tr><td>小明</td><td>20</td></tr>\n  </table>\n</body>\n</html>',
          exercise: {
            prompt: '创建一个无序列表，包含三项：「HTML」「CSS」「JavaScript」。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<body>\n  <ul>\n    <li>___</li>\n    <li>___</li>\n    <li>___</li>\n  </ul>\n</body>\n</html>',
            expected_output: 'JavaScript',
          },
        },
      ],
    },
    {
      id: 'html-ch3',
      title: '表单与语义化',
      order: 2,
      lessons: [
        {
          id: 'html-ch3-l1',
          title: '表单基础',
          order: 0,
          content_md:
            '`<form>` 创建表单，内含输入控件。' +
            '`<input type="text">` 文本框，`<input type="password">` 密码框，' +
            '`<button>` 按钮。`label` 的 `for` 属性关联输入控件。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<body>\n  <form>\n    <label for="name">用户名：</label>\n    <input type="text" id="name">\n    <br>\n    <label for="pwd">密码：</label>\n    <input type="password" id="pwd">\n    <br>\n    <button type="submit">登录</button>\n  </form>\n</body>\n</html>',
          exercise: {
            prompt: '创建一个表单，包含一个文本输入框（placeholder 为「邮箱」）和一个提交按钮「注册」。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<body>\n  <form>\n    <input type="text" placeholder="___">\n    <button type="submit">___</button>\n  </form>\n</body>\n</html>',
            expected_output: '注册',
          },
        },
        {
          id: 'html-ch3-l2',
          title: '语义化标签',
          order: 1,
          content_md:
            '语义化标签让页面结构更清晰，利于 SEO 和无障碍访问。' +
            '`<header>` 页头、`<nav>` 导航、`<main>` 主内容、' +
            '`<footer>` 页脚、`<section>` 区块、`<article>` 独立文章。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<body>\n  <header>\n    <h1>我的博客</h1>\n    <nav><a href="#">首页</a> | <a href="#">关于</a></nav>\n  </header>\n  <main>\n    <article>\n      <h2>文章标题</h2>\n      <p>文章正文</p>\n    </article>\n  </main>\n  <footer>\n    <p>© 2024 我的博客</p>\n  </footer>\n</body>\n</html>',
          exercise: {
            prompt: '用 header 包裹标题「网站名」，用 footer 包裹版权信息「© 2024」。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<body>\n  <header>___</header>\n  <main>内容</main>\n  <footer>___</footer>\n</body>\n</html>',
            expected_output: '© 2024',
          },
        },
      ],
    },
  ],
}
