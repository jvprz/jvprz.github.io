export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-dark">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Nombre */}
        <h2 className="text-2xl font-black tracking-wide uppercase">Javier Pérez</h2>

        {/* Redes sociales */}
        <div className="flex space-x-5 mt-4 md:mt-0 text-xl">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-github hover:text-red"></i>
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-linkedin hover:text-red"></i>
          </a>
          <a href="https://x.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-x-twitter hover:text-red"></i>
          </a>
          <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-instagram hover:text-red"></i>
          </a>
          <a href="https://discord.gg/tuinvitacion" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-discord hover:text-red"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
