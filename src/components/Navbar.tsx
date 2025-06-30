import React from "react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-dark/70 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="w-40" />
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-red transition-colors duration-200"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-red transition-colors duration-200"
            >
              Sobre mí
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="hover:text-red transition-colors duration-200"
            >
              Proyectos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contacto")}
              className="hover:text-red transition-colors duration-200"
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
