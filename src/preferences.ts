import { createContext, useContext } from 'react';
export type Locale = 'es' | 'ca' | 'en';
export const PreferencesContext = createContext({ locale: 'es' as Locale, setLocale: (_locale: Locale) => { void _locale; }, t: (text: string) => text });
export const usePreferences = () => useContext(PreferencesContext);
