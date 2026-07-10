/**
 * Monaco Editor 主题工具。
 *
 * 本期（Task 4）先用 prop 控制；Task 9 接入全局主题后会改为跟随
 * 全局亮/暗状态。
 */

/** Monaco 内置主题名 */
export type MonacoThemeName = 'vs' | 'vs-dark' | 'hc-black' | 'hc-light'

/**
 * 根据是否暗色返回 Monaco 主题名。
 * 亮色 → 'vs'，暗色 → 'vs-dark'。
 */
export function editorTheme(isDark: boolean): MonacoThemeName {
  return isDark ? 'vs-dark' : 'vs'
}
