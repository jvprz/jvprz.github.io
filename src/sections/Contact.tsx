import { useState } from "react";

export default function Contact() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const res = await fetch("https://formspree.io/f/mkgbyjpk", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 4000);
      } else {
        alert("Error al enviar el mensaje. Inténtalo más tarde.");
      }
    } catch {
      alert("Error al enviar el mensaje. Inténtalo más tarde.");
    }
  };

  const socialLinks = [
    { href: "https://github.com/jvprz", icon: "fab fa-github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/jvprz/", icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: "https://x.com/jvprz__", icon: "fab fa-x-twitter", label: "Twitter (X)" },
    { href: "https://www.instagram.com/jvprz_", icon: "fab fa-instagram", label: "Instagram" },
    { href: "https://discord.com/users/351742989518766090", icon: "fab fa-discord", label: "Discord" },
  ];

  return (
    <section id="contacto" className="bg-light text-dark py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black uppercase tracking-wide text-center mb-10">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna izquierda */}
          <div className="flex flex-col items-center md:items-start text-base">
            <img
              src="https://github.com/jvprz.png"
              alt="Javier Pérez"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover shadow-md mb-4"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">Javier Pérez</h3>
              <p className="text-gray-600">Desarrollador Full Stack</p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:javierpsantos99@gmail.com"
                    className="hover:text-red transition"
                  >
                    javierpsantos99@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Ubicación:</strong> Vinaròs (Castellón), España
                </p>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-5 mt-6 text-2xl text-dark">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-red transition"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div>
            <p className="mb-6 text-lg text-gray-700">
              ¿Necesitas un desarrollador? Ponte en contacto conmigo.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red"
              />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows={5}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red"
              />
              <button
                type="submit"
                className="bg-red text-white w-full px-6 py-3 rounded hover:opacity-90 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Botones de CV */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">También puedes descargar mi CV</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/downloads/CV_Javier_Perez.pdf"
              download
              className="bg-dark text-white px-6 py-2 rounded hover:bg-red transition"
            >
              Descargar CV
            </a>
            <a
              href="/downloads/CV_Javier_Perez_Europass.pdf"
              download
              className="bg-dark text-white px-6 py-2 rounded hover:bg-red transition"
            >
              Descargar Europass
            </a>
          </div>
        </div>

        {/* Confirmación modal */}
        {showConfirmation && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300 animate-fade-in">
            ¡Mensaje enviado con éxito!
          </div>
        )}
      </div>
    </section>
  );
}
