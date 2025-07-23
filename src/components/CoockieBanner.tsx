import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_NAME = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_NAME);
    if (consent !== "accepted") {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_NAME, "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_NAME, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark/70 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between gap-4 z-50">
      <p className="text-sm md:text-base max-w-[70%] whitespace-nowrap overflow-x-auto">
        Usamos cookies para mejorar tu experiencia y analizar el tráfico.{" "}
        <Link to="/politica-de-cookies" className="underline hover:text-red">
          Más información
        </Link>
      </p>
      <div className="flex gap-4">
        <button
          onClick={declineCookies}
          className="text-white hover:text-red focus:outline-none transition"
        >
          Rechazar
        </button>
        <button
          onClick={acceptCookies}
          className="bg-red px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
