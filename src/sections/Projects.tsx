import spectrobesBanner from "../assets/images/projects/spectrobes-reforged-banner.png";
import spectrobesEmblem from "../assets/images/projects/spectrobes-reforged-emblem.png";
import { IconBadge } from "../components/BrandIcon";
import SpectrobesDetails from "../components/SpectrobesDetails";
import { usePreferences } from "../preferences";
import { ArrowUpRight } from "lucide-react";

import tHubImg from "../assets/images/projects/t-hub.png";
import mundoPixelmonImg from "../assets/images/projects/mundo-pixelmon-3.png";

const projects = [
  { title: "Spectrobes Reforged", category: "Proyecto personal · Minecraft mod", description: "Mi proyecto de mod inspirado en Spectrobes: un espacio donde combino desarrollo, diseño de criaturas y modelado 3D. La wiki reúne la información del proyecto y su universo.", tech: ["Java 21", "Blockbench"], links: [{ label: "Explorar la wiki", href: "https://jvprz.github.io/SpectrobesReforged/" }], image: spectrobesBanner },
  { title: "T-Hub", category: "Proyecto colaborativo · Aplicación web", description: "Una aplicación para conectar empleados de T-Systems mediante actividades compartidas. Desarrollada en equipo durante el bootcamp Full Stack Java.", tech: ["Spring Boot", "Angular"], links: [{ label: "Backend", href: "https://github.com/jvprz/CJJP-THub-Back-End" }, { label: "Frontend", href: "https://github.com/jvprz/CJJP-THub-Front-End" }], image: tHubImg },
  { title: "Mundo Pixelmon 3", category: "Colaboración · Diseño e interfaz", description: "Participación en el diseño técnico y en elementos de interfaz para la serie de YouTube Mundo Pixelmon 3. Creatividad aplicada a una experiencia de juego compartida.", tech: ["Minecraft"], links: [{ label: "Ver la serie", href: "https://www.youtube.com/playlist?list=PLzRuBo3GlQAJE_-X-VATzkaMsAVAb8i_l" }], image: mundoPixelmonImg },
];

export default function Projects() {
  const { t } = usePreferences();
  return (
    <section id="proyectos" className="projects-section section-shell">
      <div className="minimal-section-heading"><h2 className="section-title"><span className="section-kana" aria-hidden="true">制作実績</span>{t("Proyectos")}</h2></div>
      <div className="project-grid">{projects.map((project, index) => (
        <article key={project.title} className={`project-card ${index === 0 ? "project-featured" : ""}`}>
          <a href={project.links[0].href} target="_blank" rel="noopener noreferrer" className="project-visual" aria-label={`${t(project.title)}: ${project.links[0].label}`}>
            <img src={project.image} alt={`${t("Vista del proyecto")} ${t(project.title)}`} loading="lazy" />

          </a>
          <div className="project-body"><h3 className="project-title">{index === 0 && <img className="project-emblem" src={spectrobesEmblem} alt="" aria-hidden="true" loading="lazy" />}<span>{t(project.title)}</span></h3><p className="project-description">{t(project.description)}</p><ul className="project-tags" aria-label={t("Tecnologías")}>{project.tech.map(tech => <li key={tech}><IconBadge name={tech} label={t(tech)} /></li>)}</ul><div className="project-links">{index !== 0 && project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{t(link.label)} <ArrowUpRight size={17} /></a>)}</div></div>
          {index === 0 && <SpectrobesDetails />}
        </article>
      ))}</div>

    </section>
  );
}

