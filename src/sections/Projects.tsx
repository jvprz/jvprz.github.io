import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import spectrobesBanner from "../assets/images/projects/spectrobes-reforged-banner.png";
import spectrobesEmblem from "../assets/images/projects/spectrobes-reforged-emblem.png";
import { IconBadge } from "../components/BrandIcon";
import SpectrobesDetails from "../components/SpectrobesDetails";
import { usePreferences } from "../preferences";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";

import tHubImg from "../assets/images/projects/t-hub.webp";
import mundoPixelmonImg from "../assets/images/projects/mundo-pixelmon-3.webp";

const projects = [
  {
    "title": "Spectrobes Reforged",
    "category": "Proyecto personal · Minecraft mod",
    "description": "Mod personal de Minecraft inspirado en Spectrobes. Desarrollo sus sistemas de juego y combino programación en Java con diseño de criaturas y modelado 3D en Blockbench. La wiki documenta las mecánicas y el progreso del proyecto.",
    "tech": [
      "Java 21",
      "Blockbench"
    ],
    "links": [
      {
        "label": "Explorar la wiki",
        "href": "https://jvprz.github.io/SpectrobesReforged/"
      }
    ],
    "image": spectrobesBanner
  },
  {
    "title": "T-Hub",
    "category": "Proyecto colaborativo · Aplicación web",
    "description": "Aplicación web para conectar empleados de T-Systems mediante actividades compartidas. Proyecto de equipo del bootcamp Full Stack Java, con backend en Spring Boot y frontend en Angular.",
    "tech": [
      "Spring Boot",
      "Angular"
    ],
    "links": [
      {
        "label": "Backend",
        "href": "https://github.com/jvprz/CJJP-THub-Back-End"
      },
      {
        "label": "Frontend",
        "href": "https://github.com/jvprz/CJJP-THub-Front-End"
      }
    ],
    "image": tHubImg
  },
  {
    "title": "Mundo Pixelmon 3",
    "reach": "15–30 millones",
    "category": "Colaboración · Diseño e interfaz",
    "description": "Diseño técnico e interfaces para la serie de Minecraft Mundo Pixelmon 3.",
    "tech": [
      "Minecraft"
    ],
    "links": [
      {
        "label": "Ver la serie",
        "href": "https://www.youtube.com/playlist?list=PLzRuBo3GlQAJE_-X-VATzkaMsAVAb8i_l"
      }
    ],
    "image": mundoPixelmonImg
  },
  {
    "title": "Portfolio personal",
    "category": "Proyecto personal · Desarrollo web",
    "description": "Mi espacio para presentar experiencia y proyectos con una identidad propia. Desarrollado con React, TypeScript y Tailwind CSS, combina una estética japonesa con navegación accesible, tres idiomas y diseño responsive.",
    "tech": [
      "React"
    ],
    "links": [
      {
        "label": "Código en GitHub",
        "href": "https://github.com/jvprz/jvprz.github.io"
      }
    ],
    "image": "/social-preview.png"
  }
];

type Project = typeof projects[number];

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { t } = usePreferences();
  return (
    <article className={`project-card${featured ? ' project-featured' : ''}`}>
      <a href={project.links[0].href} target="_blank" rel="noopener noreferrer" className="project-visual" aria-label={`${t(project.title)}: ${t(project.links[0].label)}`}>
        <img src={project.image} alt={`${t('Vista del proyecto')} ${t(project.title)}`} loading="lazy" />
      </a>
      <div className="project-body">
        <h3 className="project-title">{featured && <img className="project-emblem" src={spectrobesEmblem} alt="" loading="lazy" />}<span>{t(project.title)}</span></h3>
        <p className="project-description">
          {t(project.description)}
          {project.reach && <>{' '}{t('La serie tiene un alcance estimado de')}{' '}<span className="project-reach-value">{t(project.reach)}</span>{' '}{t('visualizaciones acumuladas en YouTube.')}</>}
        </p>
        <ul className="project-tags" aria-label={t('Tecnologías')}>{project.tech.map(tech => <li key={tech}><IconBadge name={tech} label={t(tech)} /></li>)}</ul>
        {!featured && <div className="project-links">{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{t(link.label)}<ArrowUpRight size={17} /></a>)}</div>}
      </div>
      {featured && <SpectrobesDetails />}
    </article>
  );
}

function ProjectCarousel() {
  const { t } = usePreferences();
  const reducedMotion = useReducedMotion();
  const container = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const slides = projects.slice(1);
  const visibleCount = mobile ? 1 : 2;
  const lastIndex = slides.length - visibleCount;
  const activeIndex = Math.min(index, lastIndex);
  const autoPlaying = playing && !reducedMotion && !hovered && !focused && inView && pageVisible;

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const update = () => setMobile(query.matches);
    query.addEventListener('change', update);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    if (container.current) observer.observe(container.current);
    return () => {
      query.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', onVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!autoPlaying) return;
    const timer = window.setTimeout(() => setIndex(activeIndex === lastIndex ? 0 : activeIndex + 1), 6500);
    return () => window.clearTimeout(timer);
  }, [autoPlaying, activeIndex, lastIndex]);

  const move = (direction: number) => setIndex((activeIndex + direction + lastIndex + 1) % (lastIndex + 1));

  return (
    <div
      ref={container}
      className="project-carousel"
      role="region"
      aria-roledescription={t('Carrusel')}
      aria-label={t('Más proyectos')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    >
      <div className="project-carousel-viewport">
        <div className="project-carousel-track" style={{ transform: mobile ? `translateX(calc(${activeIndex} * (-100% - 32px)))` : `translateX(calc(${activeIndex} * (-50% - 16px)))` }}>
          {slides.map((project, slideIndex) => {
            const hidden = slideIndex < activeIndex || slideIndex >= activeIndex + visibleCount;
            return <div className="project-carousel-slide" key={project.title} aria-hidden={hidden} inert={hidden}><ProjectCard project={project} /></div>;
          })}
        </div>
      </div>
      <div className="project-carousel-controls">
        <span className="project-carousel-status" aria-live={autoPlaying ? 'off' : 'polite'} aria-atomic="true">{activeIndex + 1}{!mobile && '–' + (activeIndex + visibleCount)} / {slides.length}</span>
        <div className="project-carousel-buttons">
          {!reducedMotion && <button type="button" onClick={() => setPlaying(value => !value)} aria-label={t(playing ? 'Pausar carrusel' : 'Reanudar carrusel')} title={t(playing ? 'Pausar carrusel' : 'Reanudar carrusel')}>{playing ? <Pause size={15} /> : <Play size={15} />}</button>}
          <button type="button" onClick={() => move(-1)} aria-label={t('Proyectos anteriores')}><ArrowLeft size={18} /></button>
          <button type="button" onClick={() => move(1)} aria-label={t('Proyectos siguientes')}><ArrowRight size={18} /></button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = usePreferences();
  return (
    <section id="proyectos" className="projects-section section-shell">
      <div className="minimal-section-heading"><h2 className="section-title"><span className="section-kana" aria-hidden="true">制作実績</span>{t('Proyectos')}</h2></div>
      <div className="project-grid">
        <ProjectCard project={projects[0]} featured />
        <ProjectCarousel />
      </div>
    </section>
  );
}
