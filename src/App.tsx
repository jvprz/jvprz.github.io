import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CoockieBanner';
import Hero from './sections/Hero';
import ProfileIntro from './sections/ProfileIntro';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
export default function App() {
  return <div className="portfolio-institutional"><Navbar /><main><Hero /><div className="intro-band"><ProfileIntro /></div><div className="projects-band"><Projects /></div><div className="profile-band"><About /></div><div className="contact-band"><Contact /></div></main><Footer /><ScrollToTop /><CookieBanner /></div>;
}
