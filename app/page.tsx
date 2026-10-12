import VerificationPanel from './components/VerificationPanel';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

const IMG_HERO = 'https://educacion.apps.blerify.com/wp-content/uploads/sites/43/2025/12/alumno-en-laboratorio-tec-de-monterrey_0.jpg';
const IMG_CERT = 'https://educacion.apps.blerify.com/wp-content/uploads/sites/43/2025/02/gente-uni.jpg';

// Iconos de contacto e información (SVG simples, sin dependencias).
function IcoKey() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M18 12v3M15.5 12v2" />
    </svg>
  );
}
function IcoGrad() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 9l10-5 10 5-10 5-10-5z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}
function IcoPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function IcoMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="contenido">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="kicker">Valida tu certificación de tu universidad</p>
              <h1>Tu Identidad Digital Universitaria</h1>
              <h4 className="hero-sub">
                Accede a tus credenciales verificables y descubre un mundo de posibilidades. Valida tu
                información en segundos.
              </h4>
              <div className="btn-row">
                <a href="#verificar-diploma" className="btn btn-orange" id="verificar">
                  Verificar diploma
                </a>
                <a href="#verificar-beneficios" className="btn btn-blue" id="acceder">
                  Verificar beneficios
                </a>
              </div>
            </div>
            <div className="hero-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_HERO} alt="Estudiante trabajando en un laboratorio universitario" />
            </div>
          </div>
        </section>

        {/* Pasos */}
        <section className="section steps" id="como-validar">
          <div className="container">
            <h2 className="section-title">¿Cómo validar tus credenciales?</h2>
            <ol className="steps-grid">
              <li className="step-card">
                <span className="step-num">1</span>
                <h3>Inicia la verificación</h3>
                <p>Elige diploma o beneficios y genera tu código de verificación seguro.</p>
              </li>
              <li className="step-card">
                <span className="step-num">2</span>
                <h3>Escanea el QR</h3>
                <p>Usa tu billetera digital para escanear el código o abrirla desde el mismo teléfono.</p>
              </li>
              <li className="step-card">
                <span className="step-num">3</span>
                <h3>Confirma tu identidad</h3>
                <p>Elige qué datos compartir y presenta tu credencial desde la billetera.</p>
              </li>
              <li className="step-card">
                <span className="step-num">4</span>
                <h3>Obtén tu resultado</h3>
                <p>Revisa al instante el estado de tu diploma o beneficio verificado.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Verificar diploma */}
        <section className="section verify" id="verificar-diploma">
          <div className="container verify-grid">
            <div className="verify-copy">
              <p className="kicker">Diploma digital</p>
              <h2>Verifica tu diploma</h2>
              <p>
                Comprueba que tu certificación fue emitida por tu universidad. Solo se comparten los datos
                que necesitas y nunca se pide una foto de tu documento.
              </p>
            </div>
            <VerificationPanel
              title="Verificar diploma"
              subtitle="Presenta tu diploma desde tu billetera digital"
              credentialHint="Necesitas tu diploma digital en tu billetera."
            />
          </div>
        </section>

        {/* Certificación */}
        <section className="section certification">
          <div className="container split">
            <div className="split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_CERT} alt="Estudiantes universitarios" />
            </div>
            <div className="split-text">
              <p className="kicker">Valida tu certificación</p>
              <h2 className="section-title">Certificación</h2>
              <p>
                Tu universidad emite credenciales digitales que puedes validar en cualquier momento, desde
                cualquier dispositivo, con total seguridad.
              </p>
              <a href="#verificar-beneficios" className="btn btn-blue">
                Verificar beneficios
              </a>
            </div>
          </div>
        </section>

        {/* Verificar beneficios */}
        <section className="section verify" id="verificar-beneficios">
          <div className="container verify-grid">
            <div className="verify-copy">
              <p className="kicker">Credencial de acceso</p>
              <h2>Verifica tus beneficios</h2>
              <p>
                Confirma tu acceso a la plataforma y al campus virtual con tu credencial de acceso, sin
                formularios ni contraseñas adicionales.
              </p>
            </div>
            <VerificationPanel
              title="Verificar beneficios"
              subtitle="Presenta tu credencial de acceso desde tu billetera digital"
              credentialHint="Necesitas tu credencial de acceso en tu billetera."
            />
          </div>
        </section>

        {/* Información */}
        <section className="section info">
          <div className="container">
            <h2 className="section-title center">¿Qué son las credenciales verificables?</h2>
            <p className="lead center">
              Son registros digitales firmados por tu universidad que comprueban quién eres y qué logros
              tienes, sin depender de papeles.
            </p>

            <h2 className="section-title center small">¿Qué credenciales verificables ofrece tu universidad?</h2>
            <div className="cards">
              <article className="card">
                <div className="card-icon" aria-hidden="true"><IcoKey /></div>
                <h3>Credencial de Acceso</h3>
                <p>Accede a la plataforma y al campus virtual con tu identidad verificada.</p>
              </article>
              <article className="card">
                <div className="card-icon" aria-hidden="true"><IcoGrad /></div>
                <h3>Diploma Digital</h3>
                <p>Certifica la finalización de tus estudios con un documento verificable y seguro.</p>
              </article>
            </div>

            <div className="contact-row">
              <a className="contact-item" href="tel:+5491140893626">
                <span className="contact-icon" aria-hidden="true"><IcoPhone /></span>
                <span><strong>Llámanos</strong><br />+54 9 11 4089-3626</span>
              </a>
              <a className="contact-item" href="mailto:soporte@blerify.com">
                <span className="contact-icon" aria-hidden="true"><IcoMail /></span>
                <span><strong>Escríbenos</strong><br />soporte@blerify.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA campus */}
        <section className="cta-band">
          <div className="container cta-inner">
            <h2>VALIDA TU IDENTIDAD <span>INGRESA AL CAMPUS VIRTUAL</span></h2>
            <a href="#verificar-diploma" className="btn btn-orange">Verificar mi identidad</a>
          </div>
        </section>

        {/* Prueba social */}
        <section className="section stats">
          <div className="container">
            <span className="stat-number">2M+</span>
            <p>personas han validado su identidad con credenciales verificables.</p>
          </div>
        </section>

        {/* Marca */}
        <section className="section brand-block">
          <div className="container">
            <p className="brand-logo">blerify</p>
            <h1 className="brand-title">Sea parte de la nueva era digital</h1>
            <a className="btn btn-green" href="https://blerify.com/" target="_blank" rel="noopener">
              Prueba Blerify
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
