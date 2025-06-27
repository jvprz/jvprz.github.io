import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Footer />
      </main>
    </>
  );
}

export default App;