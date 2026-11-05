import Disclosure from '../components/Disclosure';
import { usePreferences } from '../preferences';

const experience = [
  {
    "company": "Kubysoft",
    "logo": "/logos/kubysoft.png",
    "role": "Desarrollador de software",
    "start": "2025-09",
    "end": null,
    "mode": "100 % remoto",
    "description": "Desarrollo de soluciones internas y productos propios de comunicación en tiempo real e integración de inteligencia artificial.",
    "responsibilities": [
      "Evolución de un SDK propietario e implementación autónoma de nuevas funcionalidades.",
      "Videollamadas con audio en tiempo real, pantalla compartida y transcripción automática.",
      "Asistentes conversacionales de IA integrados con entornos web y sistemas externos.",
      "Investigación, evaluación de alternativas y propuestas técnicas para apoyar decisiones.",
      "Mejora continua de las soluciones a partir del feedback recibido."
    ],
    "tech": "JavaScript · Node.js · SDK"
  },
  {
    "company": "Oratrex",
    "logo": "/logos/oratrex.png",
    "role": "Desarrollador de software junior",
    "start": "2024-06",
    "end": "2025-05",
    "mode": "Híbrido",
    "description": "Backend para soluciones del sector de eventos, centradas en trazabilidad y control antifraude de entradas.",
    "responsibilities": [
      "Desarrollo de funcionalidades con Node.js y personalización y mantenimiento de APIs con Strapi.",
      "MySQL y MongoDB: optimización de consultas y estructuras de datos.",
      "Integración con el equipo frontend de React y trabajo en entornos dockerizados.",
      "Colaboración con metodologías Agile, Scrum y Kanban."
    ],
    "tech": "Node.js · JavaScript · Strapi · MySQL · MongoDB · Docker"
  },
  {
    "company": "T-Systems Iberia",
    "logo": "/logos/t-systems.svg",
    "role": "Desarrollador de software junior",
    "start": "2023-07",
    "end": "2024-06",
    "mode": "Híbrido",
    "description": "Desarrollo y mantenimiento de la Plataforma de Contratación del Sector Público (PLACSP).",
    "responsibilities": [
      "Funcionalidades backend con Java, mejoras evolutivas y resolución de incidencias.",
      "Repositorios con Bitbucket y participación en despliegues sobre JBoss.",
      "Trabajo en equipo con metodología Agile/Scrum."
    ],
    "tech": "Java · JBoss · Bitbucket"
  }
];
const internships = [
  {
    "company": "Pymeralia",
    "role": "Técnico web en prácticas",
    "start": "2020-01",
    "end": "2020-03",
    "description": "Desarrollo y mantenimiento web."
  },
  {
    "company": "Grupo Ubesol / Laboratorios Maverick",
    "role": "Especialista informático en prácticas",
    "start": "2018-03",
    "end": "2018-06",
    "description": "Experiencia formativa inicial en el ámbito informático."
  }
];

export default function About() {
  const { t, locale } = usePreferences();
  const dateFormatter = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' });
  const formatDate = (date: string) => dateFormatter.format(new Date(date + '-01T00:00:00Z'));
  return (
    <section id="trayectoria" className="career-section" aria-labelledby="career-title">
      <h2 className="section-title" id="career-title"><span className="section-kana" aria-hidden="true">経歴</span>{t('Trayectoria')}</h2>
      <ol className="career-grid">
        {experience.map(item => (
          <li key={item.company}>
            <span className="career-date"><time dateTime={item.start}>{formatDate(item.start)}</time> — {item.end ? <time dateTime={item.end}>{formatDate(item.end)}</time> : t('Actualidad')}</span>
            <div className="company-identity">
              <img className="company-logo" src={item.logo} alt="" loading="lazy" width="40" height="40" />
              <div><h3>{item.company}</h3><p className="career-role">{t(item.role)}</p></div>
            </div>
            <span className="career-mode">{t(item.mode)}</span>
            <p className="career-description">{t(item.description)}</p>
            <Disclosure className="career-details" label={t('Funciones y tecnologías')}>
              <ul>{item.responsibilities.map(text => <li key={text}>{t(text)}</li>)}</ul>
              <p className="career-tech">{item.tech}</p>
            </Disclosure>
          </li>
        ))}
      </ol>
      <div className="career-internships">
        <h3 className="ui-label">{t('Primeras experiencias')}</h3>
        <ul>{internships.map(item => (
          <li key={item.company}>
            <span className="career-date"><time dateTime={item.start}>{formatDate(item.start)}</time> — <time dateTime={item.end}>{formatDate(item.end)}</time></span>
            <h4>{item.company}</h4><p>{t(item.role)} · {t(item.description)}</p>
          </li>
        ))}</ul>
      </div>
    <div className="career-education"><h3 className="ui-label">{t('Formación')}</h3><ul><li className="education-entry"><img className="education-logo" src="/logos/techma.png" alt="" aria-hidden="true" loading="lazy" width="42" height="42" /><div><strong>Bootcamp Full Stack Java</strong><span>TECHMA Business School · 2023</span></div></li><li className="education-entry"><img className="education-logo" src="/logos/eoi.png" alt="" aria-hidden="true" loading="lazy" width="42" height="42" /><div><strong>{t('Curso Full Stack Java')}</strong><span>EOI · 2022</span></div></li><li className="education-entry"><img className="education-logo" src="/logos/ins-montsia.jpg" alt="" aria-hidden="true" loading="lazy" width="42" height="42" /><div><strong>{t('CFGS Desarrollo de Aplicaciones Web')}</strong><span>INS Montsià</span></div></li></ul></div>

    </section>
  );
}
