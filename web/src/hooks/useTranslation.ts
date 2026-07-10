/**
 * 翻译便捷 hook，基于 react-i18next 的 useTranslation。
 *
 * 额外提供：
 * - changeLanguage(lng)：切换语言并持久化到 localStorage（key 'lang'）
 * - supportedLanguages：受支持语言列表 ['zh','en']
 */
import { useCallback } from 'react'
import { useTranslation as useRawTranslation } from 'react-i18next'
import i18n, { LANGUAGE_STORAGE_KEY, SUPPORTED_LANGUAGES } from '@/i18n'

export function useTranslation() {
  const raw = useRawTranslation()
  const changeLanguage = useCallback((lng: string) => {
    void i18n.changeLanguage(lng)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lng)
    }
  }, [])
  return { ...raw, changeLanguage, supportedLanguages: SUPPORTED_LANGUAGES }
}
