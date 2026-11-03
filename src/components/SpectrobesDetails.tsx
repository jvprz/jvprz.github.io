import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { usePreferences } from '../preferences';
const topics = [
  ['Fósiles y exploración', 'Cómo encontrar fósiles y empezar a descubrir las criaturas del mod.'],
  ['Incubadora y despertar', 'Equipo, recetas y pasos para despertar a tus compañeros a partir de fósiles.'],
  ['Prizmod y escaneo', 'Gestiona tu colección y utiliza a tus compañeros para escanear el entorno.'],
  ['Especies y minerales', 'Consulta las seis especies infantiles disponibles, sus estadísticas y la alimentación con minerales.'],
  ['Krawl y vórtices', 'Conoce a los enemigos y los encuentros en pequeños vórtices, con progreso y recompensas.'],
  ['Instalación y ayuda', 'Requisitos, primeros pasos, crafteos, avances y soluciones a problemas habituales.'],
];
export default function SpectrobesDetails() {
  const { t } = usePreferences();
  return <details className="spectrobes-details">
    <summary><span className="wiki-summary-label">{t('Explorar la wiki')}</span><ChevronDown size={18} className="wiki-chevron" aria-hidden="true" /></summary>
    <div className="wiki-content">
      <div className="wiki-intro"><p className="ui-label">{t('Guía del explorador')}</p><span className="wiki-version">Minecraft 1.21.1 / NeoForge</span></div>
      <div className="wiki-topics">{topics.map(([title, description]) => <div className="wiki-topic" key={title}><div><h4>{t(title)}</h4><p>{t(description)}</p></div></div>)}</div>
      <div className="wiki-bottom"><p>{t('En beta: la evolución, el análisis, la limpieza y el combate de equipos siguen en desarrollo.')}</p><div className="wiki-actions"><a className="text-link" href="https://jvprz.github.io/SpectrobesReforged/index.htm" target="_blank" rel="noopener noreferrer">{t('Abrir la wiki completa')}<ArrowUpRight size={16} /></a><a className="text-link" href="https://www.curseforge.com/minecraft/mc-mods/spectrobes-reforged" target="_blank" rel="noopener noreferrer">CurseForge<ArrowUpRight size={16} /></a></div></div>
    </div>
  </details>;
}
