# Arquitectura YACELYO Platform

## Principios

- **Modular:** Cada dominio es un módulo independiente con su propia lógica, componentes y tipos.
- **Cloudflare Native:** Optimizado para Pages, Workers, D1 y R2. Sin vendor lock-in.
- **Performance First:** ISR, imágenes optimizadas, edge caching.
- **Cuba Optimized:** Ligero para conexiones ETECSA, funciona con datos limitados, pagos locales.

## Stack

- Framework: Next.js 14 App Router + React 18
- Lenguaje: TypeScript estricto
- Estilos: Tailwind CSS + CSS Modules para componentes críticos
- Base de datos: Cloudflare D1 (SQLite) con Drizzle ORM
- Almacenamiento: R2 para imágenes
- Deploy: Cloudflare Pages con Functions
- Estado: Zustand para carrito, React Query para servidor

## Flujo de datos

1. Usuario navega a / (ISR cada 60s)
2. Productos vienen de D1 vía API route edge
3. Filtros y búsqueda client-side con debounce
4. Carrito persiste en localStorage + sincroniza con D1 si está logueado
5. Checkout genera orden en D1 y mensaje WhatsApp preformateado

## Módulos

Ver README principal.
