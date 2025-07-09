export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-dark">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Nombre */}
        <h2 className="text-2xl font-black tracking-wide uppercase text-center md:text-left">
          Javier Pérez
        </h2>

        {/* Redes sociales */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-5 text-xl">
          <a
            href="https://github.com/jvprz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-red"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jvprz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-red"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/jvprz__"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter (X)"
            className="transition-colors hover:text-red"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/jvprz_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-red"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://discord.com/users/351742989518766090"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="transition-colors hover:text-red"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
