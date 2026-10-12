# Educación - Validación de credenciales (front + BFF)

Front de validación de identidad universitaria con Blerify, con el diseño de
educacion.apps.blerify.com. Usa Next.js (App Router) y un BFF en `app/api/*` que
inicia la verificación (OIDC4VP / ISO 18013-5 mDL) y consulta el resultado.
El navegador nunca ve secretos.

## Estructura
- `app/page.tsx`: página principal (hero, pasos, verificación de diploma y beneficios, credenciales, footer)
- `app/w3c/page.tsx`: ruta de prueba W3C (DCQL)
- `app/components/`: `VerificationPanel` (QR / botón de billetera y resultado) y `DocumentFlipCard`
- `app/components/SiteHeader.tsx` y `SiteFooter.tsx`: header y footer compartidos
- `app/api/`: BFF (`/api/start`, `/api/status`, `/api/w3c/*`)
- `app/globals.css`: estilos (paleta y tipografías de la referencia)
- `netlify.toml`: despliegue en Netlify con `@netlify/plugin-nextjs`

## Desarrollo
```
npm install
npm run dev
```

## Variables de entorno
Ver `.env.example`. En Netlify, configúralas en Site settings → Environment variables.
