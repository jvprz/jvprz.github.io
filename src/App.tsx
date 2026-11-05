import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CoockieBanner';
import Hero from './sections/Hero';
import ProfileIntro from './sections/ProfileIntro';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Specialization from './sections/Specialization';
import { usePreferences } from './preferences';
export default function App() {
  const { t } = usePreferences();
  return <div className="portfolio-institutional"><a className="skip-link" href="#contenido">{t('Saltar al contenido')}</a><Navbar /><main id="contenido" tabIndex={-1}><Hero /><div className="intro-band"><ProfileIntro /><Specialization /></div><div className="projects-band"><Projects /></div><div className="profile-band"><About /></div><div className="contact-band"><Contact /></div></main><Footer /><ScrollToTop /><CookieBanner /></div>;
}
