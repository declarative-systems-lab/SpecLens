import { getMessage, messages, readStoredLocale, type Locale } from '../i18n';

function resolve(path: string, locale: Locale): string {
  return getMessage(locale, path);
}

function applyToElement(el: HTMLElement, locale: Locale): void {
  const key = el.dataset.i18n;
  if (!key) return;
  const text = resolve(key, locale);
  if (el.dataset.i18nHtml === 'true') {
    el.innerHTML = text;
  } else {
    el.textContent = text;
  }
}

function applyDocumentLocale(locale: Locale): void {
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => applyToElement(el, locale));
}

export function initI18n(): void {
  const locale = readStoredLocale();
  applyDocumentLocale(locale);

  window.addEventListener('netsubspec:locale', (e) => {
    const detail = (e as CustomEvent<Locale>).detail;
    if (detail) applyDocumentLocale(detail);
  });
}

export { messages, resolve };
