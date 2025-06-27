export default function Navbar() {
  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-gray-800">Javier Pérez</a>
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li><a href="#hero" className="hover:text-blue-500">Inicio</a></li>
          <li><a href="#about" className="hover:text-blue-500">Sobre mí</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}