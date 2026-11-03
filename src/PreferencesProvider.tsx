import { useEffect, useState, type ReactNode } from 'react';
import { PreferencesContext, type Locale } from './preferences';
import translations from './translations.json';
function readLanguage() { try { return localStorage.getItem('jps-language'); } catch { return null; } }
export default function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => { const saved = readLanguage(); return saved === 'ca' || saved === 'en' ? saved : 'es'; });
  useEffect(() => {
    document.documentElement.lang = locale;
    try { localStorage.setItem('jps-language', locale); } catch { /* The language selector also works without browser storage. */ }
  }, [locale]);
  const t = (text: string) => {
    if (locale === 'es') return text;
    const key = text.replace(/\s+/g, ' ').trim();
    const entry = (translations as Record<string, { ca: string; en: string }>)[key];
    return entry ? text.replace(/\S[\s\S]*\S|\S/, entry[locale]) : text;
  };
  return <PreferencesContext.Provider value={{ locale, setLocale, t }}>{children}</PreferencesContext.Provider>;
}
