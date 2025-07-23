const socialLinks = [
  { href: "https://github.com/jvprz", label: "GitHub", iconClass: "fab fa-github" },
  { href: "https://www.linkedin.com/in/jvprz/", label: "LinkedIn", iconClass: "fab fa-linkedin" },
  { href: "https://x.com/jvprz__", label: "Twitter (X)", iconClass: "fab fa-x-twitter" },
  { href: "https://www.instagram.com/jvprz_", label: "Instagram", iconClass: "fab fa-instagram" },
  { href: "https://discord.com/users/351742989518766090", label: "Discord", iconClass: "fab fa-discord" },
];

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
          {socialLinks.map(({ href, label, iconClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors hover:text-red"
            >
              <i className={iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
