import { usePreferences } from "../preferences";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_NAME = "cookie_consent";

export default function CookieBanner() {
  const { t } = usePreferences();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_NAME);
    if (consent !== "accepted" && consent !== "declined") {
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
    <aside className="cookie-notice" aria-label={t('Política de Cookies')}>
      <div className="cookie-notice-copy"><span className="section-kana" aria-hidden="true">プライバシー</span><p>{t(" Usamos cookies para mejorar tu experiencia.")} <Link to="/politica-de-cookies">{t(" Más información ")}</Link></p></div>
      <div className="cookie-notice-actions"><button onClick={declineCookies} className="cookie-decline">{t(" Rechazar ")}</button><button onClick={acceptCookies} className="btn-primary">{t(" Aceptar ")}</button></div>
    </aside>
  );
}
