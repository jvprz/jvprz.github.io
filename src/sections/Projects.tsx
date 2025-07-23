const projects = [
  {
    title: "Portfolio Personal",
    imgSrc: "src/assets/images/projects/portfolio.png",
    alt: "Portfolio",
    description: (
      <>
        Página desarrollada desde cero para mostrar mis habilidades como{" "}
        <strong className="text-red"> Full Stack Developer</strong>. Inspirada en el estilo{" "}
        <strong className="text-red"> cyberpunk minimalista</strong>, con animaciones, integración de redes sociales,
        render 3D interactivo y sistema de diseño personalizado.
      </>
    ),
    tech: ["React", "Tailwind", "Vite", "Sketchfab"],
    repo: "https://github.com/jvprz/jvprz.github.io",
  },
  {
    title: "Age of Machines",
    imgSrc: "src/assets/images/projects/age-of-machines.png",
    alt: "Age of Machines",
    description: (
      <>
        Mod de <strong className="text-red">Minecraft</strong> inspirado en el universo de{" "}
        <strong className="text-red"> Horizon</strong>. Introduce criaturas tecnológicas, un sistema de progresión
        avanzado y mecánicas únicas. Actualmente en fase temprana de desarrollo.
      </>
    ),
    tech: ["Minecraft Modding", "Java", "Blockbench", "Game Design"],
    repo: "https://github.com/jvprz/age-of-machines",
  },
  {
    title: "T-Hub",
    imgSrc: "src/assets/images/projects/t-hub.png",
    alt: "Proyecto T-Hub",
    description: (
      <>
        Aplicación tipo <strong className="text-red">LFG</strong> para empleados de <strong className="text-red">T-Systems</strong>,
        desarrollada durante el bootcamp FullStack Java. Fomenta el networking interno y permite
        crear grupos sociales, de juegos o actividades.
      </>
    ),
    tech: ["Java", "Spring Boot", "Angular", "MySQL", "JWT"],
    repoBackend: "https://github.com/jvprz/CJJP-THub-Back-End",
    repoFrontend: "https://github.com/jvprz/CJJP-THub-Front-End",
  },
  {
    title: "Mundo Pixelmon 3",
    imgSrc: "src/assets/images/projects/mundo-pixelmon-3.png",
    alt: "Mundo Pixelmon 3",
    description: (
      <>
        Participación en el diseño y desarrollo técnico de la serie de YouTube{" "}
        <strong className="text-red"> Mundo Pixelmon 3</strong> junto a los creadores{" "}
        <strong className="text-red"> Folagor03</strong> y <strong className="text-red">FrigoAdri</strong>. Creación de elementos de interfaz como el{" "}
        <strong className="text-red"> HUD de batalla</strong> y configuración avanzada de{" "}
        <strong className="text-red"> mods y plugins</strong>.
      </>
    ),
    tech: ["Minecraft", "Pixelmon", "Modding", "UI/UX", "Plugins"],
    repo: "https://www.youtube.com/playlist?list=PLzRuBo3GlQAJE_-X-VATzkaMsAVAb8i_l",
    repoLabel: "Ver serie →",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-gray-100 text-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black uppercase tracking-wide text-right mb-4">
          Proyectos
        </h2>
        <p className="text-right mb-16 text-lg text-gray-600">
          Algunos de mis proyectos o colaboraciones destacadas.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project.imgSrc}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 text-gray-700">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-white">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-dark px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.repoBackend && project.repoFrontend ? (
                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href={project.repoBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red hover:underline font-medium"
                    >
                      Ver código backend →
                    </a>
                    <a
                      href={project.repoFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red hover:underline font-medium"
                    >
                      Ver código frontend →
                    </a>
                  </div>
                ) : (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-red hover:underline font-medium"
                  >
                    {project.repoLabel || "Ver código →"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-lg text-gray-700">
          Puedes ver más proyectos en mi perfil de{" "}
          <a
            href="https://github.com/jvprz"
            className="text-red font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </p>
      </div>
    </section>
  );
}
