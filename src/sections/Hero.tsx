import BrandName from "../components/BrandName";
import image from '../assets/images/developer-workspace-white-lamp.png';
import { ArrowUpRight } from 'lucide-react';
import { usePreferences } from '../preferences';
export default function Hero() {
  const { t } = usePreferences();
  return <section id="hero" className="hero-institutional" aria-labelledby="hero-title">
    <img className="hero-scene" src={image} alt="" aria-hidden="true" fetchPriority="high" />
    <div className="hero-shade" aria-hidden="true" />
    <span className="hero-vertical-kana" aria-hidden="true">技術と創造</span>
    <div className="hero-content">
      <div className="hero-introduction"><h1 id="hero-title"><BrandName /></h1><p className="hero-profession">Full Stack Developer</p><a href="#proyectos" className="btn-primary">{t('Explorar proyectos')} <ArrowUpRight size={16} /></a></div>
    </div>
  </section>;
}



