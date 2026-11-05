import Disclosure from '../components/Disclosure';
import { usePreferences } from '../preferences';

const areas = [
  {
    "title": "Backend y APIs",
    "description": "Desarrollo e integración de APIs y servicios para conectar aplicaciones, trabajar con datos y evolucionar funcionalidades de producto.",
    "stack": "JavaScript · Node.js · Java · Strapi"
  },
  {
    "title": "Comunicación en tiempo real",
    "description": "Desarrollo de un sistema interno de videollamadas con transmisión de audio, compartición de pantalla y transcripción automática, integrando distintos servicios.",
    "caseStudy": "Experiencia profesional · Kubysoft",
    "stack": "Videollamadas · Audio · Transcripción"
  },
  {
    "title": "Inteligencia artificial",
    "description": "Desarrollo e integración de asistentes conversacionales que procesan audio y generan respuestas en tiempo real, en aplicaciones web y sistemas externos, incluidos escenarios de atención telefónica.",
    "caseStudy": "Experiencia profesional · Kubysoft",
    "stack": "Integración de modelos · Asistentes · Audio"
  },
  {
    "title": "Datos e infraestructura",
    "description": "Trabajo con bases de datos relacionales y documentales, optimización de consultas, entornos dockerizados y mantenimiento y despliegue de aplicaciones empresariales.",
    "stack": "MySQL · MongoDB · Docker · JBoss"
  }
];

export default function Specialization() {
  const { t } = usePreferences();
  return (
    <section id="especializacion" className="specialization-section" aria-labelledby="specialization-title">
      <h2 id="specialization-title" className="section-title"><span className="section-kana" aria-hidden="true">技術</span>{t('Especialización')}</h2>
      <div className="specialization-grid">
        {areas.map(area => (
          <Disclosure key={area.title} className="specialization-item" label={t(area.title)} heading>
            <p>{t(area.description)}</p>
            <p className="specialty-stack">{t(area.stack)}</p>
            {area.caseStudy && <span className="professional-context">{t(area.caseStudy)}</span>}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
