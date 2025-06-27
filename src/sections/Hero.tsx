export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo con desenfoque */}
      <img
        src="/assets/testing.png"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
      />

      {/* Contenido encima con animación */}
      <div className="relative w-screen py-16 sm:py-20 text-center flex flex-col justify-between backdrop-blur-md bg-white/5 animate-fade-in">
        <div>
          <h1 className="text-6xl sm:text-7xl font-black text-white mb-6 uppercase">
            Javier Pérez
          </h1>
          <p className="text-xl font-medium mb-20" style={{ color: 'var(--color-red)' }}>
            Full Stack Developer
          </p>
        </div>

        <div className="flex justify-center space-x-10 text-2xl text-dark mt-auto pb-2">
          <a href="https://github.com/jvprz" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jvprz/" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/jvprz__" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/jvprz_" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://discord.com/users/351742989518766090" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>

      {/* Marca de imagen generada */}
      <span className="absolute bottom-2 right-4 text-xs text-gray-300 z-10">
        Ilus. Javier Pérez
      </span>
    </section>
  );
}
