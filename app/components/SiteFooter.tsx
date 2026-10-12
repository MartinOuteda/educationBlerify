// Footer con el estilo de educacion.apps.blerify.com.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cols">
          <div>
            <span className="brand-mini">
              <span className="logo-mark" aria-hidden="true">E</span>
              Educación
            </span>
            <p className="footer-about">
              Valida tu certificación, tus credenciales verificables y tu acceso al campus virtual.
            </p>
          </div>
          <div className="footer-col">
            <h4>Verificación</h4>
            <ul>
              <li><a href="/#verificar-diploma">Verificar diploma</a></li>
              <li><a href="/#verificar-beneficios">Verificar beneficios</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="tel:+5491140893626">+54 9 11 4089-3626</a></li>
              <li><a href="mailto:soporte@blerify.com">soporte@blerify.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 <strong>Educación</strong>. Todos los derechos reservados.</span>
          <span>Powered by <a href="https://blerify.com/" target="_blank" rel="noopener">Blerify</a></span>
          <a href="#top" className="back-to-top">↑ Volver arriba</a>
        </div>
      </div>
    </footer>
  );
}
