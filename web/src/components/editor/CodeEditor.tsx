import { useCallback } from 'react'
import Editor, { type OnMount } from '@monaco-editor/react'
import type { MonacoThemeName } from './editorTheme'
import { useMobile } from '@/hooks/useMobile'

/**
 * 业务 languageId → Monaco language id 映射。
 * 业务层统一使用 html/css/javascript/typescript/python/go。
 */
const MONACO_LANGUAGE_MAP: Record<string, string> = {
  html: 'html',
  css: 'css',
  javascript: 'javascript',
  typescript: 'typescript',
  python: 'python',
  go: 'go',
}

/** 解析业务 languageId 为 Monaco 支持的语言 id，未知语言回退到 plaintext */
function toMonacoLanguage(languageId: string): string {
  return MONACO_LANGUAGE_MAP[languageId] ?? 'plaintext'
}

export interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language?: string
  /** Monaco 主题名，默认 'vs'。可用 editorTheme() 生成 */
  theme?: MonacoThemeName
  /** 高度，支持数字（px）或 CSS 字符串，默认 360 */
  height?: number | string
  /** 是否只读 */
  readOnly?: boolean
}

export default function CodeEditor({
  value,
  onChange,
  language = 'javascript',
  theme = 'vs',
  height = 360,
  readOnly = false,
}: CodeEditorProps) {
  const isMobile = useMobile()

  const handleMount: OnMount = useCallback((editor) => {
    editor.focus()
  }, [])

  return (
    <Editor
      height={height}
      language={toMonacoLanguage(language)}
      theme={theme}
      value={value}
      onChange={(v) => onChange(v ?? '')}
      onMount={handleMount}
      options={
        isMobile
          ? {
              // 移动端触屏优化：大字号避免 iOS 缩放、关闭 minimap、放宽行高便于点选
              minimap: { enabled: false },
              fontSize: 16,
              lineHeight: 24,
              tabSize: 2,
              automaticLayout: true,
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              readOnly,
              smoothScrolling: false,
              // 触屏友好：关闭不必要的动画/功能以降低卡顿
              cursorBlinking: 'solid',
              renderLineHighlight: 'none',
              scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
              padding: { top: 8, bottom: 8 },
            }
          : {
              minimap: { enabled: false },
              fontSize: 14,
              tabSize: 2,
              automaticLayout: true,
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              readOnly,
              smoothScrolling: true,
            }
      }
    />
  )
}
