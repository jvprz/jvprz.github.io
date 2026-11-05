import spectrobesBanner from "../assets/images/projects/spectrobes-reforged-banner.png";
import spectrobesEmblem from "../assets/images/projects/spectrobes-reforged-emblem.png";
import { IconBadge } from "../components/BrandIcon";
import SpectrobesDetails from "../components/SpectrobesDetails";
import { usePreferences } from "../preferences";
import { ArrowUpRight } from "lucide-react";

import tHubImg from "../assets/images/projects/t-hub.webp";
import mundoPixelmonImg from "../assets/images/projects/mundo-pixelmon-3.webp";

const projects = [
  { title: "Spectrobes Reforged", category: "Proyecto personal · Minecraft mod", description: "Mod personal de Minecraft inspirado en Spectrobes. Desarrollo sus sistemas de juego y combino programación en Java con diseño de criaturas y modelado 3D en Blockbench. La wiki documenta las mecánicas y el progreso del proyecto.", tech: ["Java 21", "Blockbench"], links: [{ label: "Explorar la wiki", href: "https://jvprz.github.io/SpectrobesReforged/" }], image: spectrobesBanner },
  { title: "T-Hub", category: "Proyecto colaborativo · Aplicación web", description: "Aplicación web para conectar empleados de T-Systems mediante actividades compartidas. Proyecto de equipo del bootcamp Full Stack Java, con backend en Spring Boot y frontend en Angular.", tech: ["Spring Boot", "Angular"], links: [{ label: "Backend", href: "https://github.com/jvprz/CJJP-THub-Back-End" }, { label: "Frontend", href: "https://github.com/jvprz/CJJP-THub-Front-End" }], image: tHubImg },
  { title: "Mundo Pixelmon 3", reach: "15–30 millones", category: "Colaboración · Diseño e interfaz", description: "Diseño técnico e interfaces para la serie de Minecraft Mundo Pixelmon 3.", tech: ["Minecraft"], links: [{ label: "Ver la serie", href: "https://www.youtube.com/playlist?list=PLzRuBo3GlQAJE_-X-VATzkaMsAVAb8i_l" }], image: mundoPixelmonImg },
];

export default function Projects() {
  const { t } = usePreferences();
  return (
    <section id="proyectos" className="projects-section section-shell">
      <div className="minimal-section-heading"><h2 className="section-title"><span className="section-kana" aria-hidden="true">制作実績</span>{t("Proyectos")}</h2></div>
      <div className="project-grid">{projects.map((project, index) => (
        <article key={project.title} className={`project-card ${index === 0 ? "project-featured" : ""}`}>
          <a href={project.links[0].href} target="_blank" rel="noopener noreferrer" className="project-visual" aria-label={`${t(project.title)}: ${t(project.links[0].label)}`}>
            <img src={project.image} alt={`${t("Vista del proyecto")} ${t(project.title)}`} loading="lazy" />

          </a>
          <div className="project-body"><h3 className="project-title">{index === 0 && <img className="project-emblem" src={spectrobesEmblem} alt="" aria-hidden="true" loading="lazy" />}<span>{t(project.title)}</span></h3><p className="project-description">{t(project.description)}{project.reach && <>{' '}{t('La serie tiene un alcance estimado de')}{' '}<span className="project-reach-value">{t(project.reach)}</span>{' '}{t('visualizaciones acumuladas en YouTube.')}</>}</p><ul className="project-tags" aria-label={t("Tecnologías")}>{project.tech.map(tech => <li key={tech}><IconBadge name={tech} label={t(tech)} /></li>)}</ul><div className="project-links">{index !== 0 && project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{t(link.label)} <ArrowUpRight size={17} /></a>)}</div></div>
          {index === 0 && <SpectrobesDetails />}
        </article>
      ))}</div>

    </section>
  );
}

