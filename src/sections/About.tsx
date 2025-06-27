export default function About() {
  return (
    <section id="about" className="bg-light text-dark py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative">
        
        {/* Columna de texto */}
        <div className="relative">
          <h2 className="text-4xl font-black uppercase tracking-wide mb-10 text-dark">
            Sobre mí
          </h2>

          <p className="text-lg mb-6 text-justify">
            Soy <strong className="text-red">Javier Pérez Santos</strong>, desarrollador <strong className="text-red">Full Stack</strong> con experiencia en backend y diseño de <strong className="text-red">APIs</strong> robustas y eficientes. Trabajo principalmente con <strong className="text-red">Node.js, Strapi, SQL, Java y React</strong>, aplicando metodologías ágiles como <strong className="text-red">Scrum</strong> y <strong className="text-red">Kanban</strong> para crear soluciones escalables y seguras.
          </p>

          <p className="text-lg mb-6 text-justify">
            A lo largo de mi carrera he colaborado en proyectos tanto del sector público como privado, integrando tecnologías modernas, optimizando el rendimiento de plataformas y mejorando la integración entre frontend y backend.
          </p>

          <p className="text-lg mb-6 text-justify">
            Me considero una persona resolutiva, con pasión por el aprendizaje continuo y el trabajo en equipo. Siempre busco aportar valor técnico y humano a los proyectos en los que participo.
          </p>

          {/* Iconos */}
          <div className="absolute left-0 top-[525px] flex flex-wrap gap-6 text-4xl text-dark">
            <i className="fab fa-node-js" title="Node.js"></i>
            <i className="fas fa-database" title="SQL"></i>
            <i className="fab fa-react" title="React"></i>
            <i className="fab fa-java" title="Java"></i>
            <i className="fab fa-js" title="JavaScript"></i>
            <i className="fas fa-cubes" title="Strapi / APIs REST"></i>
            <i className="fab fa-docker" title="Docker"></i>
            <i className="fas fa-project-diagram" title="Scrum / Kanban"></i>
          </div>
        </div>

        {/* Columna del feed de Instagram */}
        <div className="w-full h-[600px]">
          <iframe
            src="//lightwidget.com/widgets/a207ab1059055ce5afded553f0885869.html"
            scrolling="no"
            allowTransparency="true"
            className="w-full h-full border-0 overflow-hidden"
            title="Instagram Feed"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
