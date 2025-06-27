export default function Contact() {
  return (
    <section id="contacto" className="bg-light text-dark py-24 px-4">
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

          {/* Columna derecha */}
          <div>
            <p className="mb-6 text-lg text-gray-700">
              ¿Necesitas un desarrollador? Ponte en contacto conmigo.
            </p>
            <form
              action="https://formspree.io/f/XXXXX" // Reemplaza con tu endpoint real
              method="POST"
              className="space-y-4"
            >
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
      </div>
    </section>
  );
}
