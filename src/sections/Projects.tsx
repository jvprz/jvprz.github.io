import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="proyectos" className="bg-gray-100 text-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black uppercase tracking-wide text-right mb-4">
          Proyectos
        </h2>
        <p className="text-right mb-16 text-lg text-gray-600">
          Algunos de mis proyectos o colaboraciones destacadas.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* === Proyecto 1: Portfolio === */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/testing.png"
              alt="Portfolio"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold mb-2">Portfolio Personal</h3>
                <p className="text-sm mb-4 text-gray-700">
                  Página desarrollada desde cero para mostrar mis habilidades como
                  <strong className="text-red"> Full Stack Developer</strong>. Inspirada en el estilo
                  <strong className="text-red"> cyberpunk minimalista</strong>, con animaciones, integración de redes sociales,
                  render 3D interactivo y sistema de diseño personalizado.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-white">
                  <span className="bg-dark px-2 py-1 rounded">React</span>
                  <span className="bg-dark px-2 py-1 rounded">Tailwind</span>
                  <span className="bg-dark px-2 py-1 rounded">Vite</span>
                  <span className="bg-dark px-2 py-1 rounded">Sketchfab</span>
                </div>
              </div>
              <a href="https://github.com/jvprz/jvprz.github.io" target="_blank" className="mt-6 text-red hover:underline font-medium">
                Ver código →
              </a>
            </div>
          </motion.div>

          {/* === Proyecto 2: Age of Machines === */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/age-of-machines.png"
              alt="Age of Machines"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold mb-2">Age of Machines</h3>
                <p className="text-sm mb-4 text-gray-700">
                  Mod de <strong className="text-red">Minecraft</strong> inspirado en el universo de
                  <strong className="text-red"> Horizon</strong>. Introduce criaturas tecnológicas, un sistema de progresión
                  avanzado y mecánicas únicas. Actualmente en fase temprana de desarrollo.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-white">
                  <span className="bg-dark px-2 py-1 rounded">Minecraft Modding</span>
                  <span className="bg-dark px-2 py-1 rounded">Java</span>
                  <span className="bg-dark px-2 py-1 rounded">Blockbench</span>
                  <span className="bg-dark px-2 py-1 rounded">Game Design</span>
                </div>
              </div>
              <a href="https://github.com/jvprz/age-of-machines" target="_blank" className="mt-6 text-red hover:underline font-medium">
                Ver código →
              </a>
            </div>
          </motion.div>

          {/* === Proyecto 3: T-Hub === */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/t-hub.png"
              alt="Proyecto T-Hub"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold mb-2">T-Hub</h3>
                <p className="text-sm mb-4 text-gray-700">
                  Aplicación tipo <strong className="text-red">LFG</strong> para empleados de <strong className="text-red">T-Systems</strong>,
                  desarrollada durante el bootcamp FullStack Java. Fomenta el networking interno y permite
                  crear grupos sociales, de juegos o actividades.
                </p>
              </div>
               <div className="flex flex-wrap gap-2 text-sm text-white">
                  <span className="bg-dark px-2 py-1 rounded">Java</span>
                  <span className="bg-dark px-2 py-1 rounded">Spring Boot</span>
                  <span className="bg-dark px-2 py-1 rounded">Angular</span>
                  <span className="bg-dark px-2 py-1 rounded">MySQL</span>
                  <span className="bg-dark px-2 py-1 rounded">JWT</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="https://github.com/jvprz/CJJP-THub-Back-End"
                  target="_blank"
                  className="text-red hover:underline font-medium"
                >
                  Ver código backend →
                </a>
                <a
                  href="https://github.com/jvprz/CJJP-THub-Front-End"
                  target="_blank"
                  className="text-red hover:underline font-medium"
                >
                  Ver código frontend →
                </a>
              </div>
            </div>
          </motion.div>

          {/* === Proyecto 4: Mundo Pixelmon 3 === */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/mundo-pixelmon-3.png"
              alt="Mundo Pixelmon 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold mb-2">Mundo Pixelmon 3</h3>
                <p className="text-sm mb-4 text-gray-700">
                  Participación en el diseño y desarrollo técnico de la serie de YouTube
                  <strong className="text-red"> Mundo Pixelmon 3</strong> junto a los creadores
                  <strong className="text-red"> Folagor03</strong> y <strong className="text-red">FrigoAdri</strong>. Creación de elementos de interfaz como el
                  <strong className="text-red"> HUD de batalla</strong> y configuración avanzada de
                  <strong className="text-red"> mods y plugins</strong>.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-white">
                  <span className="bg-dark px-2 py-1 rounded">Minecraft</span>
                  <span className="bg-dark px-2 py-1 rounded">Pixelmon</span>
                  <span className="bg-dark px-2 py-1 rounded">Modding</span>
                  <span className="bg-dark px-2 py-1 rounded">UI/UX</span>
                  <span className="bg-dark px-2 py-1 rounded">Plugins</span>
                </div>
              </div>
              <a href="https://www.youtube.com/playlist?list=PLzRuBo3GlQAJE_-X-VATzkaMsAVAb8i_l" target="_blank" className="mt-6 text-red hover:underline font-medium">
                Ver serie →
              </a>
            </div>
          </motion.div>
        </div>

        {/* === Footer texto === */}
        <p className="mt-16 text-center text-lg text-gray-700">
          Puedes ver más proyectos en mi perfil de{" "}
          <a
            href="https://github.com/jvprz"
            className="text-red font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </p>
      </div>
    </section>
  );
}
