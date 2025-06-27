import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;