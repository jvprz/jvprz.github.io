import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { BrandIcon } from '../components/BrandIcon';
import { usePreferences } from '../preferences';
type SendStatus = 'idle' | 'sending' | 'success' | 'error';
export default function Contact() {
  const { t } = usePreferences();
  const [status, setStatus] = useState<SendStatus>('idle');
  const sending = useRef(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    const form = event.currentTarget;
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/mkgbyjpk', { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Message not accepted');
      form.reset();
      setStatus('success');
    } catch { setStatus('error'); }
    finally { sending.current = false; }
  };
  return <section id="contacto" className="contact-finished" aria-labelledby="contact-title">
    <div className="contact-composition">
      <div className="contact-invitation">
        <h2 className="section-title" id="contact-title"><span className="section-kana" aria-hidden="true">お問い合わせ</span>{t('Hablemos')}</h2>
        <p className="contact-intro">{t('¿Tienes una idea, proyecto o propuesta? Escríbeme.')}</p>
        <a className="contact-email" href="mailto:javierpsantos99@gmail.com">javierpsantos99@gmail.com <ArrowUpRight size={18} /></a>
        <div className="contact-presence"><span>Vinaròs, Castellón</span><div className="contact-socials">{[{ name: 'GitHub', href: 'https://github.com/jvprz' }, { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jvprz/' }].map(social => <a className="icon-link" key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} data-tooltip={social.name}><BrandIcon name={social.name} /></a>)}</div></div>
      </div>
      <form className="contact-editorial-form" onSubmit={handleSubmit} aria-busy={status === 'sending'}>
        <div className="contact-field-pair"><label className="contact-field"><span>{t('Tu nombre')}</span><input name="name" type="text" autoComplete="name" required maxLength={120} /></label><label className="contact-field"><span>{t('Tu email')}</span><input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div>
        <label className="contact-field"><span>{t('Tu mensaje')}</span><textarea name="message" rows={4} required maxLength={5000} /></label>
        <div className="contact-form-end"><p className={`contact-status ${status === 'error' ? 'is-error' : ''}`} role="status" aria-live="polite">{status === 'success' ? t('¡Mensaje enviado con éxito!') : status === 'error' ? t('Error al enviar el mensaje. Inténtalo más tarde.') : ''}</p><button className="btn-primary" type="submit" disabled={status === 'sending'}>{t(status === 'sending' ? 'Enviando…' : 'Enviar mensaje')}<ArrowRight size={16} /></button></div>
      </form>
    </div>
  </section>;
}
