const images = [
  {
    src: "src/assets/images/instagram/insta1.png",
    alt: "Dibujo de Iron Man",
    link: "https://www.instagram.com/p/B1dyo9SCjQM/",
  },
  {
    src: "src/assets/images/instagram/insta2.png",
    alt: "Dibujo de Ahsoka Tano",
    link: "https://www.instagram.com/p/CI5Q_KgAexB/",
  },
  {
    src: "src/assets/images/instagram/insta3.png",
    alt: "Dibujo de Thor",
    link: "https://www.instagram.com/p/CA6CfrTqhN9/",
  },
  {
    src: "src/assets/images/instagram/insta4.png",
    alt: "Dibujo del Caballero Luna",
    link: "https://www.instagram.com/p/Cc0Whm5NUwI/",
  },
  {
    src: "src/assets/images/instagram/insta5.png",
    alt: "Premiere Deadpool y Lobezno",
    link: "https://www.instagram.com/p/C9yA7QgNQKw/",
  },
  {
    src: "src/assets/images/instagram/insta6.png",
    alt: "Dibujo de Blue",
    link: "https://www.instagram.com/p/Bj5F_zqjyNy/",
  },
  {
    src: "src/assets/images/instagram/insta7.png",
    alt: "Dibujo de Goku",
    link: "https://www.instagram.com/p/CKrrzkgs6Jz/",
  },
  {
    src: "src/assets/images/instagram/insta8.png",
    alt: "Dibujo de Rhaenyra Targaryen",
    link: "https://www.instagram.com/p/C66FUt9t5NU/",
  },
  {
    src: "src/assets/images/instagram/insta9.png",
    alt: "Dibujo de Gohan y Goku",
    link: "https://www.instagram.com/p/C5xqUR8tOu9/",
  },
];

const techIcons = [
  { className: "fab fa-node-js", title: "Node.js" },
  { className: "fas fa-database", title: "SQL" },
  { className: "fab fa-react", title: "React" },
  { className: "fab fa-java", title: "Java" },
  { className: "fab fa-js", title: "JavaScript" },
  { className: "fas fa-cubes", title: "Strapi / APIs REST" },
  { className: "fab fa-docker", title: "Docker" },
  { className: "fas fa-project-diagram", title: "Scrum / Kanban" },
];

const designIcons = [
  { type: "fa", className: "fas fa-palette", title: "Diseño gráfico" },
  { type: "fa", className: "fas fa-cube", title: "Blockbench" },
  {
    type: "svg",
    ariaLabel: "Photoshop",
    svg: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Photoshop"
      >
        <rect width="128" height="128" rx="16" fill="currentColor" />
        <text
          x="32"
          y="85"
          fontFamily="Arial"
          fontWeight="bold"
          fontSize="58"
          fill="white"
        >
          Ps
        </text>
      </svg>
    ),
  },
  {
    type: "svg",
    ariaLabel: "Illustrator",
    svg: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Illustrator"
      >
        <rect width="128" height="128" rx="16" fill="currentColor" />
        <text
          x="30"
          y="85"
          fontFamily="Arial"
          fontWeight="bold"
          fontSize="58"
          fill="white"
        >
          Ai
        </text>
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="bg-light text-dark py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-black uppercase tracking-wide mb-10 text-dark">
            Sobre mí
          </h2>

          <div className="space-y-6 text-lg text-justify">
            <p>
              Soy{" "}
              <strong className="text-red">Javier Pérez Santos</strong>,
              desarrollador{" "}
              <strong className="text-red">Full Stack</strong> con experiencia
              en backend y diseño de{" "}
              <strong className="text-red">APIs</strong> robustas y eficientes.
              Trabajo principalmente con{" "}
              <strong className="text-red">Node.js, Strapi, SQL, Java y React</strong>
              , aplicando metodologías ágiles como{" "}
              <strong className="text-red">Scrum</strong> y{" "}
              <strong className="text-red">Kanban</strong>.
            </p>
            <p>
              He colaborado en proyectos públicos y privados, integrando
              tecnologías modernas y optimizando plataformas.
            </p>
            <p>
              Me considero resolutivo, con pasión por el aprendizaje continuo y
              el trabajo en equipo.
            </p>
          </div>

          {/* Iconos tech */}
          <div className="mt-8 flex flex-wrap gap-6 text-4xl text-dark">
            {techIcons.map(({ className, title }) => (
              <i key={title} className={className} title={title} />
            ))}
          </div>
        </div>

        {/* Galería */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map(({ src, alt, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform"
            >
              <img src={src} alt={alt} className="w-full h-full object-cover" />
            </a>
          ))}
        </div>
      </div>

      {/* Modelado 3D */}
      <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-12 items-start">
        {/* Iframe */}
        <div className="w-full h-[300px] sm:h-[400px]">
          <iframe
            title="Tenkro"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full rounded-lg"
            src="https://sketchfab.com/models/e1bd392f07c9423caf7d819e24f69ac4/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_controls=1&ui_hint=0&ui_settings=0&ui_inspector=0&ui_help=0&ui_vr=0"
          />
        </div>

        {/* Texto */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-dark">Ilustración y Modelado 3D</h3>
          <p className="text-lg text-justify">
            También disfruto del{" "}
            <strong className="text-red">diseño visual</strong>. Me encanta
            ilustrar personajes y crear modelos 3D como este. Con{" "}
            <strong className="text-red">Blockbench</strong>,{" "}
            <strong className="text-red">Photoshop</strong> e{" "}
            <strong className="text-red">Illustrator</strong>, mezclo creatividad
            y tecnología.
          </p>

          {/* Iconos diseño */}
          <div className="mt-8 flex flex-wrap gap-6 text-4xl text-dark">
            {designIcons.map(({ type, className, svg, ariaLabel }, i) =>
              type === "fa" ? (
                <i key={i} className={className} title={ariaLabel} />
              ) : (
                <span key={i} aria-label={ariaLabel} role="img">
                  {svg}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}