import { ArrowUp } from 'lucide-react';
import { usePreferences } from '../preferences';
import { useEffect, useState } from 'react';
export default function ScrollToTop() {
  const { t } = usePreferences();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 180);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <button type="button" className={`back-to-top${visible ? ' is-visible' : ''}`} aria-label={t('Volver arriba')} title={t('Volver arriba')} tabIndex={visible ? 0 : -1} aria-hidden={!visible} onClick={() => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    document.querySelector<HTMLButtonElement>('.brand-button')?.focus({ preventScroll: true });
  }}><ArrowUp size={19} strokeWidth={1.6} aria-hidden="true" /></button>;
}
