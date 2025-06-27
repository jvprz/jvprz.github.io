export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        {/* Izquierda */}
        <p>&copy; {new Date().getFullYear()} Javier Pérez. Todos los derechos reservados.</p>

        {/* Derecha: Redes sociales */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/tucuenta" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
            <i className="fab fa-github text-lg"></i>
          </a>
          <a href="https://linkedin.com/in/tucuenta" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
            <i className="fab fa-twitter text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
