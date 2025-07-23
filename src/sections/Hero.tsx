export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src="/assets/images/background.png"
        alt="Fondo decorativo"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105 opacity-20"
      />

      {/* Contenido centrado */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase">
          Javier Pérez
        </h1>
        <p className="text-red-600 font-medium mt-2">Full Stack Developer</p>

        {/* Iconos sociales */}
        <div className="flex gap-6 text-2xl mt-6">
          {[
            {
              href: "https://github.com/jvprz",
              label: "GitHub",
              icon: "fab fa-github",
            },
            {
              href: "https://www.linkedin.com/in/jvprz/",
              label: "LinkedIn",
              icon: "fab fa-linkedin-in",
            },
            {
              href: "https://x.com/jvprz__",
              label: "Twitter",
              icon: "fab fa-x-twitter",
            },
            {
              href: "https://www.instagram.com/jvprz_",
              label: "Instagram",
              icon: "fab fa-instagram",
            },
            {
              href: "https://discord.com/users/351742989518766090",
              label: "Discord",
              icon: "fab fa-discord",
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-red-500 transition-colors"
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Marca personal */}
      <span className="absolute bottom-4 right-6 text-xs text-gray-400 z-10">
        Ilus. Javier Pérez
      </span>
    </section>
  );
}
