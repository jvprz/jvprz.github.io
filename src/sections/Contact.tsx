import React, { useState } from "react";

export default function Contact() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    fetch("https://formspree.io/f/mkgbyjpk", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          form.reset();
          setShowConfirmation(true);
          setTimeout(() => setShowConfirmation(false), 4000);
        }
      })
      .catch(() => alert("Error al enviar el mensaje. Inténtalo más tarde."));
  };

  return (
    <section id="contacto" className="bg-light text-dark py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black uppercase tracking-wide text-center mb-4">Contacto</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda */}
          <div className="flex flex-col justify-center mt-8 text-base">
            <img
              src="https://github.com/jvprz.png"
              alt="Javier Pérez"
              className="w-40 h-40 rounded-xl object-cover shadow-md mb-4"
            />
            <div>
              <h3 className="text-2xl font-bold text-dark">Javier Pérez</h3>
              <p className="text-gray-600">Desarrollador Full Stack</p>
            </div>
            <div className="text-gray-700 mt-4 space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:javierpsantos99@gmail.com" className="hover:text-red">
                  javierpsantos99@gmail.com
                </a>
              </p>
              <p>
                <strong>Ubicación:</strong> Vinaròs (Castellón), España
              </p>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-5 mt-4 text-2xl">
              <a href="https://github.com/jvprz" target="_blank" rel="noopener noreferrer" className="hover:text-red">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jvprz/" target="_blank" rel="noopener noreferrer" className="hover:text-red">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/jvprz__" target="_blank" rel="noopener noreferrer" className="hover:text-red">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://www.instagram.com/jvprz_" target="_blank" rel="noopener noreferrer" className="hover:text-red">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://discord.com/users/351742989518766090" target="_blank" rel="noopener noreferrer" className="hover:text-red">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
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
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows={5}
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
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

        {/* Botones para descargar CV */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">También puedes descargar mi CV</p>
          <div className="space-x-4">
            <a
              href="/assets/CV_Javier_Perez.pdf"
              download
              className="inline-block bg-dark text-white px-6 py-2 rounded hover:bg-red transition"
            >
              Descargar CV
            </a>
            <a
              href="/assets/CV_Javier_Perez_Europass.pdf"
              download
              className="inline-block bg-dark text-white px-6 py-2 rounded hover:bg-red transition"
            >
              Descargar Europass
            </a>
          </div>
        </div>

        {/* Modal flotante de confirmación */}
        {showConfirmation && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            ¡Mensaje enviado con éxito!
          </div>
        )}
      </div>
    </section>
  );
}
