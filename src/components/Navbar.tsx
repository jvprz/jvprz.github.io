export default function Navbar() {
  return (
    <header className="bg-dark/70 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="w-40"></div>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#hero" className="hover:text-red transition-colors duration-200">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-red transition-colors duration-200">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyects" className="hover:text-red transition-colors duration-200">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-red transition-colors duration-200">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
