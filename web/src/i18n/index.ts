/**
 * i18n 初始化（react-i18next）。
 *
 * - 资源：locales/zh.json、locales/en.json
 * - 持久化：localStorage key 'lang'，由 useTranslation 的 changeLanguage 写入
 * - 默认语言：localStorage → 浏览器语言 → 'zh'
 *
 * 该模块在首次 import 时执行 init；AppProviders 会 import 本模块以触发初始化。
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './locales/zh.json'
import en from './locales/en.json'

export const LANGUAGE_STORAGE_KEY = 'lang'
export const SUPPORTED_LANGUAGES = ['zh', 'en'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]
export const DEFAULT_LANGUAGE: SupportedLanguage = 'zh'

function isSupported(value: string | null | undefined): value is SupportedLanguage {
  return !!value && (SUPPORTED_LANGUAGES as readonly string[]).includes(value)
}

function detectInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (isSupported(stored)) return stored
  const nav = window.navigator.language?.toLowerCase() ?? ''
  if (nav.startsWith('en')) return 'en'
  return DEFAULT_LANGUAGE
}

void i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    en: { translation: en },
  },
  lng: detectInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
  returnNull: false,
})

export default i18n
