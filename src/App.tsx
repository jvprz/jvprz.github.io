import Navbar from './components/Navbar';
import Hero from './sections/Hero';

export default function App() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main> 
    </div>
  );
}
