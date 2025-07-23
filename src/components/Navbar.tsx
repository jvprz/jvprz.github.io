import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const buttonClass =
    "hover:text-red transition-colors duration-200 font-medium";

  return (
    <header className="bg-dark/70 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md text-white">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="w-40" />

        {/* Menú desktop */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={buttonClass}
              >
                {item.label}
              </button>
            </li>
          ))}
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

      {/* Menú móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-dark px-6 text-white ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left ${buttonClass}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
