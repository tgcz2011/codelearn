import type { CourseContent } from './types'

/**
 * CSS 入门课程（3 章）
 *
 * CSS 代码以 HTML 文档形式编写（内联 `<style>`），通过 HtmlWasmRunner 渲染预览。
 * 课程 language 为 "css"，但运行时映射到 html runner 进行可视化预览。
 * expected_output 用关键可见文本描述。
 */
export const cssCourse: CourseContent = {
  id: 'course-css',
  slug: 'css',
  title: 'CSS 入门',
  description: '学习 CSS 选择器、盒模型、Flexbox 布局与响应式设计，让网页变得美观。',
  language: 'css',
  difficulty: 'beginner',
  chapters: [
    {
      id: 'css-ch1',
      title: '选择器与基础样式',
      order: 0,
      lessons: [
        {
          id: 'css-ch1-l1',
          title: '元素选择器与颜色',
          order: 0,
          content_md:
            'CSS 通过选择器匹配 HTML 元素并应用样式。' +
            '元素选择器直接用标签名，如 `p { color: red; }` 将所有段落设为红色。' +
            '`color` 设置文字颜色，`background-color` 设置背景色。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  p { color: white; background-color: blue; }\n</style>\n</head>\n<body>\n  <p>蓝底白字</p>\n</body>\n</html>',
          exercise: {
            prompt: '将所有 h1 标题的文字颜色设为绿色（green）。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  h1 { color: ___; }\n</style>\n</head>\n<body>\n  <h1>绿色标题</h1>\n</body>\n</html>',
            expected_output: '绿色标题',
          },
        },
        {
          id: 'css-ch1-l2',
          title: '类与 ID 选择器',
          order: 1,
          content_md:
            '类选择器以 `.` 开头，如 `.box { }`，可复用于多个元素。' +
            'ID 选择器以 `#` 开头，如 `#header { }`，页面中唯一。' +
            'HTML 中用 `class` 和 `id` 属性关联。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .highlight { color: orange; font-weight: bold; }\n  #main { font-size: 20px; }\n</style>\n</head>\n<body>\n  <div id="main">主区域</div>\n  <p class="highlight">高亮文字</p>\n</body>\n</html>',
          exercise: {
            prompt: '为 class 为 "warn" 的元素设置红色文字颜色。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .warn { color: ___; }\n</style>\n</head>\n<body>\n  <p class="warn">警告信息</p>\n</body>\n</html>',
            expected_output: '警告信息',
          },
        },
        {
          id: 'css-ch1-l3',
          title: '字体与文本样式',
          order: 2,
          content_md:
            '`font-size` 设置字号，`font-family` 设置字体族，' +
            '`font-weight` 设置粗细（normal/bold）。' +
            '`text-align` 控制对齐方式（left/center/right）。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  h1 { font-size: 32px; text-align: center; }\n  p { font-family: sans-serif; font-weight: bold; }\n</style>\n</head>\n<body>\n  <h1>居中大标题</h1>\n  <p>粗体段落</p>\n</body>\n</html>',
          exercise: {
            prompt: '将 class 为 "center-text" 的元素文本居中对齐。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .center-text { text-align: ___; }\n</style>\n</head>\n<body>\n  <p class="center-text">居中显示</p>\n</body>\n</html>',
            expected_output: '居中显示',
          },
        },
      ],
    },
    {
      id: 'css-ch2',
      title: '盒模型与布局',
      order: 1,
      lessons: [
        {
          id: 'css-ch2-l1',
          title: '盒模型',
          order: 0,
          content_md:
            '每个元素都是一个盒子，由内到外：content（内容）→ padding（内边距）→ ' +
            'border（边框）→ margin（外边距）。' +
            '`box-sizing: border-box` 让宽高包含 padding 和 border。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .box {\n    width: 200px;\n    padding: 20px;\n    border: 2px solid black;\n    margin: 16px;\n    background: lightblue;\n  }\n</style>\n</head>\n<body>\n  <div class="box">盒模型示例</div>\n</body>\n</html>',
          exercise: {
            prompt: '为 class 为 "card" 的元素添加 10px 内边距和 1px 灰色边框。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .card {\n    padding: ___px;\n    border: ___px solid gray;\n  }\n</style>\n</head>\n<body>\n  <div class="card">卡片内容</div>\n</body>\n</html>',
            expected_output: '卡片内容',
          },
        },
        {
          id: 'css-ch2-l2',
          title: 'Flexbox 基础',
          order: 1,
          content_md:
            'Flexbox 是一维布局工具。父元素设 `display: flex` 后，' +
            '子元素沿主轴排列。`justify-content` 控制主轴对齐（flex-start/center/space-between），' +
            '`align-items` 控制交叉轴对齐。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .container {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n  }\n  .item { background: coral; padding: 10px; }\n</style>\n</head>\n<body>\n  <div class="container">\n    <div class="item">A</div>\n    <div class="item">B</div>\n    <div class="item">C</div>\n  </div>\n</body>\n</html>',
          exercise: {
            prompt: '将 class 为 "row" 的容器设为 flex 布局，并让子元素居中对齐（justify-content: center）。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row {\n    display: flex;\n    justify-content: ___;\n  }\n  .row > div { background: teal; color: white; padding: 10px; margin: 2px; }\n</style>\n</head>\n<body>\n  <div class="row">\n    <div>1</div>\n    <div>2</div>\n  </div>\n</body>\n</html>',
            expected_output: '1',
          },
        },
      ],
    },
    {
      id: 'css-ch3',
      title: '响应式与主题',
      order: 2,
      lessons: [
        {
          id: 'css-ch3-l1',
          title: '媒体查询',
          order: 0,
          content_md:
            '`@media (max-width: 600px) { }` 在屏幕宽度不超过 600px 时应用样式。' +
            '这是响应式设计的核心，让网页在不同设备上自动适配。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .box { background: blue; color: white; padding: 20px; }\n  @media (max-width: 600px) {\n    .box { background: red; }\n  }\n</style>\n</head>\n<body>\n  <div class="box">缩小窗口看颜色变化</div>\n</body>\n</html>',
          exercise: {
            prompt: '在屏幕宽度小于 768px 时，将 class 为 "sidebar" 的元素隐藏（display: none）。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .sidebar { background: gray; padding: 10px; }\n  @media (max-width: 768px) {\n    .sidebar { display: ___; }\n  }\n</style>\n</head>\n<body>\n  <div class="sidebar">侧边栏</div>\n</body>\n</html>',
            expected_output: '侧边栏',
          },
        },
        {
          id: 'css-ch3-l2',
          title: 'CSS 变量',
          order: 1,
          content_md:
            'CSS 变量以 `--` 开头定义，用 `var()` 引用。' +
            '在 `:root` 中定义全局变量，方便统一管理主题色和尺寸，' +
            '修改一处即可全局生效。',
          example_code:
            '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  :root {\n    --primary: #3490dc;\n    --padding: 16px;\n  }\n  .btn {\n    background: var(--primary);\n    color: white;\n    padding: var(--padding);\n    border: none;\n    border-radius: 4px;\n  }\n</style>\n</head>\n<body>\n  <button class="btn">主题按钮</button>\n</body>\n</html>',
          exercise: {
            prompt: '在 :root 中定义变量 --bg 为 yellow，并在 .box 中用它做背景色。',
            starter_code:
              '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  :root {\n    --bg: ___;\n  }\n  .box {\n    background: var(--bg);\n    padding: 20px;\n  }\n</style>\n</head>\n<body>\n  <div class="box">黄底盒子</div>\n</body>\n</html>',
            expected_output: '黄底盒子',
          },
        },
      ],
    },
  ],
}
