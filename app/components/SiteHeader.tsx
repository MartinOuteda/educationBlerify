'use client';

import { useEffect, useState } from 'react';

// Header con el estilo de educacion.apps.blerify.com: logo, enlaces de verificación,
// selector de idioma y menú móvil. El selector de idioma solo cambia el estado visual.
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} id="top">
      <div className="container header-inner">
        <a href="/" className="logo" aria-label="Educación - inicio">
          <span className="logo-mark" aria-hidden="true">E</span>
          <span className="logo-text">Educación</span>
        </a>

        <nav className="main-nav" aria-label="Principal">
          <a href="/#verificar-diploma">Verificar diploma</a>
          <a href="/#verificar-beneficios">Verificar beneficios</a>
        </nav>

        <div className="lang-switch" role="group" aria-label="Idioma">
          {(['ES', 'EN'] as const).map((l) => (
            <button
              key={l}
              type="button"
              className={lang === l ? 'is-active' : undefined}
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" id="mobile-menu" aria-label="Móvil">
          <a href="/#verificar-diploma" onClick={() => setMenuOpen(false)}>Verificar diploma</a>
          <a href="/#verificar-beneficios" onClick={() => setMenuOpen(false)}>Verificar beneficios</a>
        </nav>
      )}
    </header>
  );
}
