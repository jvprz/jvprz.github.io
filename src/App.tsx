import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main> 
    </div>
  );
}
