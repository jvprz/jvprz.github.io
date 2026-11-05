import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { BrandIcon } from './BrandIcon';
import BrandName from './BrandName';
import { usePreferences } from '../preferences';
export default function Footer() {
  const { t } = usePreferences();
  return <footer className="site-footer">
    <div className="footer-main">
      <a className="footer-identity" href="/#hero" aria-label="Javier Pérez"><BrandName compact /><span>Javier Pérez<small>Full Stack Developer · Backend Focus</small></span></a>
      <div className="footer-links"><a href="https://github.com/jvprz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><BrandIcon name="GitHub" /></a><a href="https://www.linkedin.com/in/jvprz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><BrandIcon name="LinkedIn" /></a><a href="mailto:javierpsantos99@gmail.com" aria-label="Email" title="Email"><Mail size={20} strokeWidth={1.5} /></a></div>
    </div>
    <div className="footer-base"><span>© {new Date().getFullYear()} Javier Pérez</span><span className="footer-kana" aria-hidden="true">技術と創造</span><Link to="/politica-de-cookies">{t('Política de Cookies')}</Link></div>
  </footer>;
}
