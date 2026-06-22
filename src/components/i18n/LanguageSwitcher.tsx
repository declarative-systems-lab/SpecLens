import { useCallback, useEffect, useState } from 'react';
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  readStoredLocale,
  storeLocale,
  type Locale,
} from '../../i18n';

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(readStoredLocale());
  }, []);

  const switchLocale = useCallback((next: Locale) => {
    storeLocale(next);
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
    setLocale(next);
    window.dispatchEvent(new CustomEvent('netsubspec:locale', { detail: next }));
  }, []);

  return (
    <div
      className="lang-switcher"
      role="group"
      aria-label="Language"
      data-locale={locale}
    >
      <button
        type="button"
        className={`lang-switcher__btn ${locale === 'en' ? 'lang-switcher__btn--active' : ''}`}
        aria-pressed={locale === 'en'}
        onClick={() => switchLocale('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-switcher__btn ${locale === 'zh' ? 'lang-switcher__btn--active' : ''}`}
        aria-pressed={locale === 'zh'}
        onClick={() => switchLocale('zh')}
      >
        中文
      </button>
    </div>
  );
}

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(readStoredLocale());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<Locale>).detail;
      if (detail) setLocale(detail);
    };
    window.addEventListener('netsubspec:locale', onChange);
    return () => window.removeEventListener('netsubspec:locale', onChange);
  }, []);

  return locale;
}

export { LOCALE_STORAGE_KEY, storeLocale, readStoredLocale };
