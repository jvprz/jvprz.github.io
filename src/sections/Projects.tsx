import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  imgSrc: string;
  alt: string;
  description: React.ReactNode;
  longDescription?: React.ReactNode;
  tech: string[];
  repo?: string;
  repoBackend?: string;
  repoFrontend?: string;
  repoLabel?: string;
  isPersonal: boolean;
};

const projects: Project[] = [
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
    longDescription: (
      <>
        <p>Este proyecto está construido con React, Vite y Tailwind CSS.</p>
        <p>Incluye un render 3D interactivo con Sketchfab y animaciones personalizadas.</p>
        <p>El diseño está inspirado en estética cyberpunk minimalista, buscando funcionalidad y estilo.</p>
      </>
    ),
    tech: ["React", "Tailwind", "Vite", "Sketchfab"],
    repo: "https://github.com/jvprz/jvprz.github.io",
    isPersonal: true,
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
    isPersonal: true,
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
    isPersonal: false,
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
    isPersonal: false,
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
          {projects.map((project, i) => {
            const isPortfolio = project.title === "Portfolio Personal";
            return (
              <div
                key={i}
                className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 relative ${
                  isPortfolio ? "cursor-pointer" : ""
                }`}
                onClick={isPortfolio ? () => setActiveProject(project) : undefined}
              >
                <img
                  src={project.imgSrc}
                  alt={project.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-semibold select-none flex items-center gap-1">
                  <i className={project.isPersonal ? "fas fa-user" : "fas fa-users"}></i>
                  <span>{project.isPersonal ? "Personal" : "Colaborativo"}</span>
                </div>
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
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver código backend →
                      </a>
                      <a
                        href={project.repoFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red hover:underline font-medium"
                        onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.repoLabel || "Ver código →"}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              onClick={() => setActiveProject(null)}
              aria-modal="true"
              role="dialog"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg max-w-xl w-full max-h-[80vh] overflow-auto p-6 relative"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 text-gray-700 hover:text-red text-2xl font-bold focus:outline-none"
                  aria-label="Cerrar modal"
                >
                  &times;
                </button>
                <h3 className="text-3xl font-bold mb-4">{activeProject.title}</h3>
                <div className="text-gray-800">
                  {activeProject.longDescription || <p>Más información próximamente.</p>}
                </div>
                {activeProject.repo && (
                  <a
                    href={activeProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-red hover:underline font-medium"
                  >
                    Ver código en GitHub →
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
