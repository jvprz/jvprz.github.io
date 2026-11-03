import { usePreferences } from '../preferences';
const experience = [
  { company: 'Kubysoft', logo: '/logos/kubysoft.png', role: 'Desarrollador de software', start: '2025-09', end: null, description: 'SDK propietario, videollamadas y asistentes de IA en tiempo real.' },
  { company: 'Oratrex', logo: '/logos/oratrex.png', role: 'Desarrollador de software junior', start: '2024-06', end: '2025-05', description: 'Backend con Node.js y Strapi, APIs y optimización de MySQL y MongoDB.' },
  { company: 'T-Systems Iberia', logo: '/logos/t-systems.svg', role: 'Desarrollador de software junior', start: '2023-07', end: '2024-06', description: 'Desarrollo y mantenimiento de PLACSP con Java y despliegues en JBoss.' },
];
export default function About() {
  const { t } = usePreferences();
  return <section id="trayectoria" className="career-section" aria-labelledby="career-title">
    <h2 className="section-title" id="career-title"><span className="section-kana" aria-hidden="true">経歴</span>{t('Trayectoria')}</h2>
    <ol className="career-grid">{experience.map(item => <li key={item.company}><span className="career-date"><time dateTime={item.start}>{item.start.slice(0,4)}</time> — {item.end ? <time dateTime={item.end}>{item.end.slice(0,4)}</time> : t('Actualidad')}</span><div className="company-identity"><img className="company-logo" src={item.logo} alt="" aria-hidden="true" loading="lazy" width="40" height="40" /><div><h3>{item.company}</h3><p className="career-role">{t(item.role)}</p></div></div><p className="career-description">{t(item.description)}</p></li>)}</ol>
    <div className="career-education"><h3 className="ui-label">{t('Formación')}</h3><ul><li className="education-entry"><img className="education-logo" src="/logos/techma.png" alt="" aria-hidden="true" loading="lazy" width="42" height="42" /><div><strong>Bootcamp Full Stack Java</strong><span>TECHMA Business School · 2023</span></div></li><li className="education-entry"><img className="education-logo" src="/logos/eoi.png" alt="" aria-hidden="true" loading="lazy" width="42" height="42" /><div><strong>{t('Curso Full Stack Java')}</strong><span>EOI · 2022</span></div></li><li className="education-entry"><img className="education-logo" src="/logos/ins-montsia.jpg" alt="" aria-hidden="true" loading="lazy" width="42" height="42" /><div><strong>{t('CFGS Desarrollo de Aplicaciones Web')}</strong><span>INS Montsià</span></div></li></ul></div>
  </section>;
}
