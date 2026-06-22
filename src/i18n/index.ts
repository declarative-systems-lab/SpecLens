import { en, type Locale, type Messages } from './en';
import { zh } from './zh';

export const messages: Record<Locale, Messages> = { en, zh };

export function getMessage(locale: Locale, path: string): string {
  const keys = path.split('.');
  let value: unknown = messages[locale];
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof value === 'string' ? value : path;
}

export const LOCALE_STORAGE_KEY = 'netsubspec-lang';
export const DEFAULT_LOCALE: Locale = 'en';

export function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === 'zh' ? 'zh' : DEFAULT_LOCALE;
}

export function storeLocale(locale: Locale): void {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

export type { Locale, Messages };
export { en, zh };
