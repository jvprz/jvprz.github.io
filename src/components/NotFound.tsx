import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import BrandName from './BrandName';
import { usePreferences } from '../preferences';
export default function NotFound() {
  const { t } = usePreferences();
  return <div className="utility-page not-found-page">
    <header className="utility-header"><Link to="/" aria-label="Javier Pérez"><BrandName compact /></Link><span aria-hidden="true" className="section-kana">接続エラー</span></header>
    <main className="not-found-content"><span className="error-number" aria-hidden="true">404</span><div className="error-copy"><h1 className="section-title"><span className="section-kana" aria-hidden="true">ページが見つかりません</span>{t('Página no encontrada')}</h1><Link to="/" className="btn-primary">{t('Volver a la página principal')}<ArrowUpRight size={17} /></Link></div></main>
    <div className="utility-signature">Javier Pérez <span aria-hidden="true">技術と創造</span></div>
  </div>;
}
