const socialLinks = [
  { href: "https://github.com/jvprz", label: "GitHub", iconClass: "fab fa-github" },
  { href: "https://www.linkedin.com/in/jvprz/", label: "LinkedIn", iconClass: "fab fa-linkedin" },
  { href: "https://x.com/jvprz__", label: "Twitter (X)", iconClass: "fab fa-x-twitter" },
  { href: "https://www.instagram.com/jvprz_", label: "Instagram", iconClass: "fab fa-instagram" },
  { href: "https://discord.com/users/351742989518766090", label: "Discord", iconClass: "fab fa-discord" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src="src/assets/images/background.png"
        alt="Fondo decorativo"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
      />

      {/* Capa de contenido con fondo difuminado */}
      <div className="relative w-full px-4 sm:px-8 py-16 sm:py-20 text-center flex flex-col justify-between backdrop-blur-md bg-white/5 animate-fade-in">
        {/* Texto principal */}
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 uppercase leading-tight">
            Javier Pérez
          </h1>
          <p className="text-lg sm:text-xl font-medium mb-16 text-red">
            Full Stack Developer
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center flex-wrap gap-6 text-2xl text-gray-100 mt-auto pb-2">
          {socialLinks.map(({ href, label, iconClass }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-red transition-colors"
            >
              <i className={iconClass}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Marca visual opcional */}
      <span className="absolute bottom-2 right-4 text-xs text-gray-300 z-10">
        Ilus. Javier Pérez
      </span>
    </section>
  );
}
