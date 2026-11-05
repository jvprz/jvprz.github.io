import Disclosure from '../components/Disclosure';
import { ArrowDownToLine } from 'lucide-react';
import { IconBadge } from '../components/BrandIcon';
import { usePreferences } from '../preferences';
import cv from '../downloads/CV_Javier_Perez.pdf';
import europass from '../downloads/CV_Javier_Perez_Europass.pdf';
export default function ProfileIntro() {
  const { t } = usePreferences();
  return <section id="about" className="profile-intro" aria-labelledby="about-title">
    <div><h2 className="section-title" id="about-title"><span className="section-kana" aria-hidden="true">自己紹介</span>{t('Sobre mí')}</h2><div className="intro-downloads"><a className="text-link" href={cv} download>{t('Descargar CV')}<ArrowDownToLine size={15} /></a><a className="resume-europass" href={europass} download>Europass<ArrowDownToLine size={12} /></a></div></div>
    <div className="intro-copy">
      <p className="intro-lead">{t("Más de 3 años desarrollando software. Mi foco es el backend, la comunicación en tiempo real y la integración de IA.")}</p>
      <div className="resume-primary-stack" role="group" aria-label={t('Tecnologías')}>
        {['Node.js', 'Java', 'MySQL', 'Docker'].map(name => <IconBadge key={name} name={name} />)}
      </div>
      <Disclosure className="profile-details" label={t('Mi forma de trabajar')}>
        <p>{t('He pasado de aplicaciones empresariales con Java al desarrollo backend con JavaScript, Node.js, APIs, MySQL y MongoDB. Actualmente trabajo en comunicación en tiempo real e integración de IA, con sistemas de videollamadas y asistentes conversacionales.')}</p>
        <p>{t('Investigo tecnologías, evalúo alternativas y propongo soluciones. Me implico desde la necesidad inicial hasta la implementación y las mejoras a partir del feedback.')}</p>
      </Disclosure>
    </div>
  </section>;
}
