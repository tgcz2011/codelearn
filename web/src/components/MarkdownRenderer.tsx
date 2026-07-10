/**
 * 简易 Markdown 渲染器
 *
 * 手写实现，避免引入 react-markdown 依赖。
 * 支持：标题（#/##/###）、段落、行内代码（`code`）、
 * 代码块（```）、无序列表（-）、有序列表（1.）、加粗（**text**）。
 *
 * 用于课程学习页渲染 content_md 讲解内容。
 */
import type { ReactNode } from 'react'

/** 将行内文本解析为 React 节点（处理 `code` 和 **bold**） */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = []
  // 先拆分行内代码，再在每个片段中处理加粗
  const codeParts = text.split(/(`[^`]+`)/g)
  codeParts.forEach((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      nodes.push(
        <code
          key={`${keyPrefix}-code-${i}`}
          className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-pink-600"
        >
          {part.slice(1, -1)}
        </code>,
      )
    } else if (part) {
      // 处理 **bold**
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g)
      boldParts.forEach((bp, j) => {
        if (bp.startsWith('**') && bp.endsWith('**')) {
          nodes.push(
            <strong key={`${keyPrefix}-bold-${i}-${j}`}>
              {bp.slice(2, -2)}
            </strong>,
          )
        } else if (bp) {
          nodes.push(bp)
        }
      })
    }
  })
  return nodes
}

export interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({
  content,
  className = '',
}: MarkdownRendererProps) {
  const lines = content.split('\n')
  const blocks: ReactNode[] = []
  let i = 0
  let listItems: string[] = []
  let listType: 'ul' | 'ol' | null = null

  /** 将缓存的 listItems 渲染为列表并清空 */
  function flushList(key: number) {
    if (listItems.length === 0 || !listType) return
    const rendered = listItems.map((item, idx) => (
      <li
        key={`li-${key}-${idx}`}
        className={`ml-4 text-slate-700 ${listType === 'ul' ? 'list-disc' : 'list-decimal'}`}
      >
        {renderInline(item, `li-${key}-${idx}`)}
      </li>
    ))
    if (listType === 'ul') {
      blocks.push(<ul key={`ul-${key}`} className="my-1 space-y-1">{rendered}</ul>)
    } else {
      blocks.push(<ol key={`ol-${key}`} className="my-1 space-y-1">{rendered}</ol>)
    }
    listItems = []
    listType = null
  }

  while (i < lines.length) {
    const line = lines[i]

    // 代码块
    if (line.trim().startsWith('```')) {
      flushList(i)
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++ // 跳过结束的 ```
      blocks.push(
        <pre
          key={`pre-${i}`}
          className="my-2 overflow-auto rounded-lg bg-slate-900 p-3 text-xs leading-relaxed text-slate-100"
        >
          <code>{codeLines.join('\n')}</code>
        </pre>,
      )
      continue
    }

    // 标题
    const headingMatch = line.match(/^(#{1,3})\s+(.*)$/)
    if (headingMatch) {
      flushList(i)
      const level = headingMatch[1].length
      const text = headingMatch[2]
      const cls =
        level === 1
          ? 'text-lg font-bold text-slate-800'
          : level === 2
            ? 'text-base font-semibold text-slate-800'
            : 'text-sm font-semibold text-slate-700'
      const Tag = (`h${level}` as 'h1' | 'h2' | 'h3')
      blocks.push(
        <Tag key={`h-${i}`} className={`my-2 ${cls}`}>
          {renderInline(text, `h-${i}`)}
        </Tag>,
      )
      i++
      continue
    }

    // 无序列表
    if (line.match(/^\s*-\s+/)) {
      if (listType && listType !== 'ul') flushList(i)
      listType = 'ul'
      listItems.push(line.replace(/^\s*-\s+/, ''))
      i++
      continue
    }

    // 有序列表
    if (line.match(/^\s*\d+\.\s+/)) {
      if (listType && listType !== 'ol') flushList(i)
      listType = 'ol'
      listItems.push(line.replace(/^\s*\d+\.\s+/, ''))
      i++
      continue
    }

    // 空行
    if (line.trim() === '') {
      flushList(i)
      i++
      continue
    }

    // 普通段落
    flushList(i)
    blocks.push(
      <p key={`p-${i}`} className="my-1.5 text-sm leading-relaxed text-slate-700">
        {renderInline(line, `p-${i}`)}
      </p>,
    )
    i++
  }

  flushList(lines.length)

  return <div className={className}>{blocks}</div>
}
