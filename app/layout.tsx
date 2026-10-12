import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Educación | Tu Identidad Digital Universitaria',
  description:
    'Valida tu certificación universitaria, tus credenciales verificables y tu acceso al campus virtual con Blerify.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Raleway:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
