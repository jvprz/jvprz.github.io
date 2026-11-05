import { useEffect, useState, type ReactNode } from 'react';
import { PreferencesContext, type Locale } from './preferences';
import translations from './translations.json';
function readLanguage() { try { return localStorage.getItem('jps-language'); } catch { return null; } }
export default function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => { const saved = readLanguage(); return saved === 'ca' || saved === 'en' ? saved : 'es'; });
  useEffect(() => {
    document.documentElement.lang = locale;
    const metadata = {
      es: { title: 'Javier Pérez · Full Stack & Backend', description: 'Javier Pérez, desarrollador Full Stack especializado en backend. Más de 3 años con Java, Node.js y APIs. Comunicación en tiempo real e integración de IA.', language: 'es_ES' },
      ca: { title: 'Javier Pérez · Full Stack i Backend', description: 'Javier Pérez, desenvolupador Full Stack especialitzat en backend. Més de 3 anys amb Java, Node.js i APIs. Comunicació en temps real i integració d’IA.', language: 'ca_ES' },
      en: { title: 'Javier Pérez · Full Stack & Backend', description: 'Javier Pérez, Full Stack developer focused on backend. Over 3 years with Java, Node.js and APIs. Real-time communication and AI integration.', language: 'en_GB' },
    }[locale];
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      document.querySelector(selector)?.setAttribute('content', metadata.title);
    }
    for (const selector of ['meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      document.querySelector(selector)?.setAttribute('content', metadata.description);
    }
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', metadata.language);
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
