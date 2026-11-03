import BrandName from "./BrandName";
import { useEffect, useRef, useState } from 'react';
import { Languages, Menu, X, Check } from 'lucide-react';
import { usePreferences } from '../preferences';
const navItems = [{ id: 'about', label: 'Sobre mí' }, { id: 'proyectos', label: 'Proyectos' }, { id: 'trayectoria', label: 'Trayectoria' }, { id: 'contacto', label: 'Contacto' }];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigationTarget = useRef<string | null>(null);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (navigationTarget.current) return;
      const marker = Math.min(window.innerHeight * .3, 220);
      let current = 'hero';
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= marker) current = item.id;
      }
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contacto';
      setActiveSection(current);
    };
    const finishNavigation = () => {
      clearTimeout(navigationTimer.current);
      navigationTarget.current = null;
      update();
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      if (navigationTarget.current) {
        clearTimeout(navigationTimer.current);
        navigationTimer.current = setTimeout(finishNavigation, 160);
      }
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => { clearTimeout(navigationTimer.current); cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, []);
  const languageMenu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => { if (languageMenu.current && !languageMenu.current.contains(event.target as Node)) languageMenu.current.open = false; };
    const closeEscape = (event: KeyboardEvent) => { if (event.key === 'Escape' && languageMenu.current?.open) { languageMenu.current.open = false; languageMenu.current.querySelector('summary')?.focus(); } };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeEscape);
    return () => { document.removeEventListener('pointerdown', closeOutside); document.removeEventListener('keydown', closeEscape); };
  }, []);
  const { t, locale, setLocale } = usePreferences();
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    navigationTarget.current = id;
    setActiveSection(id);
    clearTimeout(navigationTimer.current);
    navigationTimer.current = setTimeout(() => { navigationTarget.current = null; }, 1200);
    section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    setIsOpen(false);
  };
  return <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md shadow-sm">
    <nav className="portfolio-navbar">
      <div className="navbar-content">
      <button onClick={() => scrollToSection('hero')} className="brand-button font-bold" aria-label="Javier Pérez"><span className="navbar-signature"><BrandName compact /><span className="navbar-kana" aria-hidden="true">開発</span></span></button>
      <ul className="desktop-links">{navItems.map(item => <li key={item.id}><button className={activeSection === item.id ? "nav-active" : undefined} aria-current={activeSection === item.id ? "location" : undefined} onClick={() => scrollToSection(item.id)}>{t(item.label)}</button></li>)}</ul>
      </div>
      <div className="preference-controls">
        <details className="language-picker" ref={languageMenu}>
          <summary aria-label={t('Idioma')} title={t('Idioma')}><Languages size={19} aria-hidden="true" /></summary>
          <div className="language-options" role="group" aria-label={t('Idioma')}><span className="language-caption" aria-hidden="true">言語 / {t('Idioma')}</span>{([{ code: 'es', name: 'Español' }, { code: 'ca', name: 'Català' }, { code: 'en', name: 'English' }] as const).map(item => <button key={item.code} lang={item.code} aria-pressed={locale === item.code} onClick={() => { setLocale(item.code); if (languageMenu.current) { languageMenu.current.open = false; languageMenu.current.querySelector('summary')?.focus(); } }}><span className="language-code">{item.code.toUpperCase()}</span><span>{item.name}</span>{locale === item.code && <Check size={14} aria-hidden="true" />}</button>)}</div>
        </details>
        <button className="mobile-menu-control" onClick={() => setIsOpen(value => !value)} aria-label={t(isOpen ? 'Cerrar menú' : 'Abrir menú')} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
    </nav>
    {isOpen && <div id="mobile-navigation" className="mobile-navigation"><ul>{navItems.map(item => <li key={item.id}><button className={activeSection === item.id ? "nav-active" : undefined} aria-current={activeSection === item.id ? "location" : undefined} onClick={() => scrollToSection(item.id)}>{t(item.label)}</button></li>)}</ul></div>}
  </header>;
}


