import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 w-12 h-12 flex items-center justify-center rounded-lg bg-red text-white shadow-md hover:scale-105 transition"
        aria-label="Volver arriba"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    )
  );
}
