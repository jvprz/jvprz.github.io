import { usePreferences } from '../preferences';
import { Link } from 'react-router-dom';
import BrandName from '../components/BrandName';
export default function PoliticaDeCookies() {
 const { t } = usePreferences();
 return <div className="utility-page cookies-page"><header className="utility-header"><Link to="/" aria-label="Javier Pérez"><BrandName compact /></Link><Link className="text-link" to="/">← {t('Inicio')}</Link></header><main className="policy-content"><h1 className="section-title"><span className="section-kana" aria-hidden="true">プライバシー</span>{t('Política de Cookies')}</h1>
<section className="policy-section">
          <h2 >{t("¿Qué son las cookies?")}</h2>
          <p>{t(" Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando visita una página. Estas permiten que el sitio recuerde información sobre la visita, como preferencias y configuraciones, lo que mejora la experiencia de navegación y facilita el acceso a ciertas funcionalidades. ")}</p>
          <p>{t(" Aunque las cookies son ampliamente utilizadas para mejorar el funcionamiento de los sitios web, también pueden ser utilizadas para recopilar información sobre el comportamiento del usuario, por lo que su uso está regulado para proteger la privacidad. ")}</p>
        </section>

        <section className="policy-section">
          <h2 >{t("¿Qué cookies usamos?")}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong >{t("Cookies necesarias:")}</strong>{t(" Estas cookies son esenciales para el correcto funcionamiento del sitio web, permitiendo la navegación y el uso de sus funcionalidades básicas. ")}</li>
            <li>
              <strong >{t("Cookies de análisis:")}</strong>{t(" Utilizamos Google Analytics para recopilar información anónima sobre cómo los visitantes interactúan con nuestra web. Esta información nos ayuda a mejorar el diseño, el contenido y la experiencia general del usuario. ")}</li>
            <li>
              <strong >{t("Cookies de preferencias:")}</strong>{t(" Estas cookies permiten recordar las elecciones del usuario, como idioma o configuración de visualización, para personalizar su experiencia en futuras visitas. ")}</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 >{t("Gestión y control de cookies")}</h2>
          <p>{t(" El usuario tiene el derecho de decidir si acepta o rechaza el uso de cookies, así como la posibilidad de eliminarlas en cualquier momento. Esto se puede gestionar desde la configuración del navegador o a través de opciones disponibles en el sitio web, como el banner de consentimiento. ")}</p>
          <p>{t(" Es importante mencionar que bloquear ciertas cookies puede afectar el funcionamiento óptimo del sitio o limitar algunas funcionalidades. ")}</p>
        </section>

        <section className="policy-section">
          <h2 >{t("Contacto")}</h2>
          <p>{t(" Para cualquier duda, consulta o solicitud relacionada con la política de cookies o el tratamiento de datos personales, puedes ponerte en contacto conmigo a través del formulario de contacto disponible en esta web. ")}</p>
        </section>
      </main></div>;
}
