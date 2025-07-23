import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section
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
      <main className="relative max-w-4xl w-full mx-4 sm:mx-auto p-8 rounded-lg bg-dark/70 backdrop-blur-md text-white shadow-lg text-center flex flex-col items-center">
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-red hover:underline focus:outline-none self-start"
        >
          ← Volver
        </button>

        {/* Imagen grande encima */}
        <img
          src="src/assets/images/error.png"
          alt="Error 404 Icono"
          className="w-64 h-auto mb-6"  // Más grande (w-64)
        />

        <h1 className="text-7xl font-bold mb-4 text-red">Error 404</h1>  {/* Texto en rojo */}
        <p className="text-2xl mb-6">Página no encontrada</p>
      </main>
    </section>
  );
}
