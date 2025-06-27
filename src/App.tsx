import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Hero from './sections/Hero';
import Contact from './sections/Contact';
import About from './sections/About';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;