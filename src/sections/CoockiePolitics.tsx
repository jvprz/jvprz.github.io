import { useNavigate } from "react-router-dom";

export default function PoliticaDeCookies() {
  const navigate = useNavigate();

  return (
    <section
      id="politica-cookies"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('src/assets/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa de fondo translúcida con blur */}
      <div className="absolute inset-0 backdrop-blur-md"></div>

      {/* Contenido principal */}
      <main className="relative max-w-4xl w-full mx-4 sm:mx-auto p-8 rounded-lg bg-dark/70 backdrop-blur-md text-white shadow-lg overflow-auto max-h-[90vh]">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-red hover:underline focus:outline-none"
        >
          ← Volver
        </button>

        <h1 className="text-4xl font-bold mb-6">Política de Cookies</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando visita una página. Estas permiten que el sitio recuerde información sobre la visita, como preferencias y configuraciones, lo que mejora la experiencia de navegación y facilita el acceso a ciertas funcionalidades.
          </p>
          <p>
            Aunque las cookies son ampliamente utilizadas para mejorar el funcionamiento de los sitios web, también pueden ser utilizadas para recopilar información sobre el comportamiento del usuario, por lo que su uso está regulado para proteger la privacidad.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Qué cookies usamos?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Cookies necesarias:</strong> Estas cookies son esenciales para el correcto funcionamiento del sitio web, permitiendo la navegación y el uso de sus funcionalidades básicas.
            </li>
            <li>
              <strong>Cookies de análisis:</strong> Utilizamos Google Analytics para recopilar información anónima sobre cómo los visitantes interactúan con nuestra web. Esta información nos ayuda a mejorar el diseño, el contenido y la experiencia general del usuario.
            </li>
            <li>
              <strong>Cookies de preferencias:</strong> Estas cookies permiten recordar las elecciones del usuario, como idioma o configuración de visualización, para personalizar su experiencia en futuras visitas.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gestión y control de cookies</h2>
          <p>
            El usuario tiene el derecho de decidir si acepta o rechaza el uso de cookies, así como la posibilidad de eliminarlas en cualquier momento. Esto se puede gestionar desde la configuración del navegador o a través de opciones disponibles en el sitio web, como el banner de consentimiento.
          </p>
          <p>
            Es importante mencionar que bloquear ciertas cookies puede afectar el funcionamiento óptimo del sitio o limitar algunas funcionalidades.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
          <p>
            Para cualquier duda, consulta o solicitud relacionada con la política de cookies o el tratamiento de datos personales, puedes ponerte en contacto conmigo a través del formulario de contacto disponible en esta web.
          </p>
        </section>
      </main>
    </section>
  );
}
