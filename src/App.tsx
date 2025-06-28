import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Hero from './sections/Hero';
import About from './sections/About';
import Proyectos from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Proyectos />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;