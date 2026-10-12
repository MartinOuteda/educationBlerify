import VerificationPanel from '../components/VerificationPanel';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Verificación W3C con DCQL | Educación',
};

// Ruta de prueba para una regla W3C con DCQL, separada del flujo principal.
// Reutiliza el mismo panel apuntándolo al BFF /api/w3c (regla W3C_RULE_ID).
export default function W3CVerifyPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="kicker">Verificación W3C</p>
              <h1>Presenta una credencial <span>W3C con DCQL</span></h1>
              <h4 className="hero-sub">
                Ruta de prueba para validar una regla W3C (OpenID4VP 1.0 con consulta DCQL). Presenta una
                credencial W3C (JWT-VC) desde tu billetera y revisa los atributos verificados.
              </h4>
              <div className="btn-row">
                <a href="/" className="btn btn-ghost">Volver al inicio</a>
              </div>
            </div>
            <VerificationPanel
              apiBase="/api/w3c"
              title="Verificación W3C (DCQL)"
              subtitle="Presenta una credencial W3C desde tu billetera"
              credentialHint="Necesitas una credencial W3C en tu billetera digital."
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
