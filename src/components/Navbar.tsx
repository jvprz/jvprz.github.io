import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-dark/70 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md text-white">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="w-40" />

        {/* Menú desktop */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><button onClick={() => scrollToSection("hero")} className="hover:text-red transition-colors duration-200">Inicio</button></li>
          <li><button onClick={() => scrollToSection("about")} className="hover:text-red transition-colors duration-200">Sobre mí</button></li>
          <li><button onClick={() => scrollToSection("proyectos")} className="hover:text-red transition-colors duration-200">Proyectos</button></li>
          <li><button onClick={() => scrollToSection("contacto")} className="hover:text-red transition-colors duration-200">Contacto</button></li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú móvil con animación */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-dark px-6 text-white ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="space-y-4 font-medium">
          <li><button onClick={() => scrollToSection("hero")} className="block w-full text-left hover:text-red transition-colors duration-200">Inicio</button></li>
          <li><button onClick={() => scrollToSection("about")} className="block w-full text-left hover:text-red transition-colors duration-200">Sobre mí</button></li>
          <li><button onClick={() => scrollToSection("proyectos")} className="block w-full text-left hover:text-red transition-colors duration-200">Proyectos</button></li>
          <li><button onClick={() => scrollToSection("contacto")} className="block w-full text-left hover:text-red transition-colors duration-200">Contacto</button></li>
        </ul>
      </div>
    </header>
  );
}
