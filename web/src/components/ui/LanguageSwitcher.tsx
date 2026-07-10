/**
 * 语言切换器：中 / 英下拉。
 *
 * 切换时调 useTranslation().changeLanguage，该方法会同步 i18n 与 localStorage（key 'lang'）。
 */
import { useTranslation } from '@/hooks/useTranslation'
import { SUPPORTED_LANGUAGES } from '@/i18n'

function normalizeLang(lng: string | undefined): string {
  if (!lng) return 'zh'
  if (lng.startsWith('en')) return 'en'
  return 'zh'
}

export default function LanguageSwitcher() {
  const { t, i18n, changeLanguage } = useTranslation()
  const current = normalizeLang(i18n.language)

  return (
    <select
      value={current}
      onChange={(e) => changeLanguage(e.target.value)}
      aria-label={t('language.toggle')}
      title={t('language.toggle')}
      className="inline-flex items-center rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
    >
      {SUPPORTED_LANGUAGES.map((lng) => (
        <option key={lng} value={lng}>
          {t(`language.${lng}`)}
        </option>
      ))}
    </select>
  )
}
