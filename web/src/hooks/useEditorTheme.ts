/**
 * Monaco 主题跟随全局主题。
 *
 * 接入指引（CodeEditor.tsx）：
 *   import { useEditorTheme } from '@/hooks/useEditorTheme'
 *   const theme = useEditorTheme()
 *   // 替代手动传 isDark / theme prop：把 theme 透传给 <CodeEditor theme={theme} />
 * 本任务不强制改动 CodeEditor，仅提供该 hook 供后续接入。
 */
import { useThemeStore } from '@/store/themeStore'
import { editorTheme, type MonacoThemeName } from '@/components/editor/editorTheme'

export function useEditorTheme(): MonacoThemeName {
  const theme = useThemeStore((s) => s.theme)
  return editorTheme(theme === 'dark')
}
