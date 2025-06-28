export default function About() {
  const images = [
    {
      src: "/assets/insta1.png",
      alt: "Dibujo de Iron Man",
      link: "https://www.instagram.com/p/B1dyo9SCjQM/?utm_source=ig_web_copy_link&igsh=aHZwaXkzemVvbjdt",
    },
    {
      src: "/assets/insta2.png",
      alt: "Dibujo de Ahsoka Tano",
      link: "https://www.instagram.com/p/CI5Q_KgAexB/?utm_source=ig_web_copy_link&igsh=MTh1NGdnOWhxbWs3bQ==",
    },
    {
      src: "/assets/insta3.png",
      alt: "Dibujo de Thor",
      link: "https://www.instagram.com/p/CA6CfrTqhN9/?utm_source=ig_web_copy_link&igsh=dmVwaXo1d3B6NDNh",
    },
    {
      src: "/assets/insta4.png",
      alt: "Dibujo del Caballero Luna",
      link: "https://www.instagram.com/p/Cc0Whm5NUwI/?utm_source=ig_web_copy_link&igsh=c3JxM213Zm1yY2Jz",
    },
    {
      src: "/assets/insta5.png",
      alt: "Premiere Deadpool y lobezno",
      link: "https://www.instagram.com/p/C9yA7QgNQKw/?utm_source=ig_web_copy_link&igsh=dTJqeDZvZXM4d293",
    },
    {
      src: "/assets/insta6.png",
      alt: "Dibujo de Blue",
      link: "https://www.instagram.com/p/Bj5F_zqjyNy/?utm_source=ig_web_copy_link&igsh=MW56MDBiNDU0NnBnbA==",
    },
    {
      src: "/assets/insta7.png",
      alt: "Personaje 3D",
      link: "https://www.instagram.com/p/ENLACE7/",
    },
    {
      src: "/assets/insta8.png",
      alt: "Diseño gráfico",
      link: "https://www.instagram.com/p/ENLACE8/",
    },
    {
      src: "/assets/insta9.png",
      alt: "Animación",
      link: "https://www.instagram.com/p/ENLACE9/",
    },
  ];

  return (
    <section id="about" className="bg-light text-dark py-24 px-6">
      {/* Sección principal */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative">
        {/* Columna de texto */}
        <div className="relative">
          <h2 className="text-4xl font-black uppercase tracking-wide mb-10 text-dark">
            Sobre mí
          </h2>

          <p className="text-lg mb-6 text-justify">
            Soy <strong className="text-red">Javier Pérez Santos</strong>, desarrollador{" "}
            <strong className="text-red">Full Stack</strong> con experiencia en backend y diseño de{" "}
            <strong className="text-red">APIs</strong> robustas y eficientes. Trabajo principalmente con{" "}
            <strong className="text-red">Node.js, Strapi, SQL, Java y React</strong>, aplicando metodologías ágiles como{" "}
            <strong className="text-red">Scrum</strong> y <strong className="text-red">Kanban</strong> para crear soluciones escalables y seguras.
          </p>

          <p className="text-lg mb-6 text-justify">
            A lo largo de mi carrera he colaborado en proyectos tanto del sector público como privado, integrando tecnologías modernas, optimizando el rendimiento de plataformas y mejorando la integración entre frontend y backend.
          </p>

          <p className="text-lg mb-6 text-justify">
            Me considero una persona resolutiva, con pasión por el aprendizaje continuo y el trabajo en equipo. Siempre busco aportar valor técnico y humano a los proyectos en los que participo.
          </p>

          {/* Iconos tech stack */}
          <div className="absolute left-0 top-[525px] flex flex-wrap gap-6 text-4xl text-dark">
            <i className="fab fa-node-js" title="Node.js"></i>
            <i className="fas fa-database" title="SQL"></i>
            <i className="fab fa-react" title="React"></i>
            <i className="fab fa-java" title="Java"></i>
            <i className="fab fa-js" title="JavaScript"></i>
            <i className="fas fa-cubes" title="Strapi / APIs REST"></i>
            <i className="fab fa-docker" title="Docker"></i>
            <i className="fas fa-project-diagram" title="Scrum / Kanban"></i>
          </div>
        </div>

        {/* Galería de Instagram */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-2xl mx-auto">
          {images.map((img, i) => (
            <a
              key={i}
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Sección Modelado 3D */}
      <div className="max-w-7xl mx-auto mt-32 grid md:grid-cols-2 gap-12 items-start relative">
        {/* Modelo 3D */}
        <div className="w-full h-[350px]">
          <iframe
            title="Tenkro"
            frameBorder="0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            className="w-full h-full rounded-lg"
            src="https://sketchfab.com/models/e1bd392f07c9423caf7d819e24f69ac4/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_controls=1&ui_hint=0&ui_settings=0&ui_inspector=0&ui_help=0&ui_vr=0"
          ></iframe>
        </div>

        {/* Texto ilustración */}
        <div className="relative">
          <h3 className="text-2xl font-bold mb-4 text-dark">Ilustración y Modelado 3D</h3>
          <p className="text-lg text-justify">
            También disfruto mucho del <strong className="text-red">diseño visual</strong>. Me encanta ilustrar personajes y crear modelos 3D como este. Usando herramientas como <strong className="text-red">Blockbench</strong>, <strong className="text-red">Photoshop</strong> e <strong className="text-red">Illustrator</strong>, doy vida a ideas que mezclan <strong className="text-red">creatividad</strong> y <strong className="text-red">tecnología</strong>.
          </p>

          {/* Iconos herramientas */}
          <div className="absolute left-0 top-[245px] flex flex-wrap gap-6 text-4xl text-dark mt-8">
            <i className="fas fa-palette" title="Diseño gráfico"></i>
            <i className="fas fa-cube" title="Blockbench"></i>
            <svg className="w-8 h-8" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Photoshop">
              <rect width="128" height="128" rx="16" fill="currentColor" />
              <text x="32" y="85" fontFamily="Arial" fontWeight="bold" fontSize="58" fill="white">Ps</text>
            </svg>
            <svg className="w-8 h-8" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrator">
              <rect width="128" height="128" rx="16" fill="currentColor" />
              <text x="30" y="85" fontFamily="Arial" fontWeight="bold" fontSize="58" fill="white">Ai</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
