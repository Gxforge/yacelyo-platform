# YACELYO PLATFORM

Plataforma e-commerce modular premium para venta de tecnología en Cuba. Migración completa desde `yacelyo.mitarjeta.biz` hacia arquitectura moderna.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Cloudflare Pages · D1 · R2 · Drizzle ORM

**Diseño:** Inspiración SHEIN / Zara / Apple Store — minimalista, conversión optimizada, sin distracciones. Nivel $10,000 USD.

## Arquitectura Modular

```
yacelyo-platform/
├── apps/web                 # Aplicación principal Next.js
│   ├── src/app              # App Router (rutas)
│   ├── src/modules          # Módulos de dominio
│   │   ├── catalog          # Catálogo, categorías, productos
│   │   ├── cart             # Carrito y persistencia
│   │   ├── checkout         # Checkout y órdenes
│   │   ├── search          # Búsqueda y filtros
│   │   ├── payment         # Pagos (Zelle, Tropipay, Transfermóvil)
│   │   └── admin           # Panel administrativo
│   ├── src/components       # Componentes compartidos
│   │   ├── layout          # Header, Footer, Navigation
│   │   ├── product         # ProductCard, ProductGrid
│   │   └── ui              # Design System
│   └── src/lib             # Utilidades, DB, Cloudflare
├── workers/api             # Cloudflare Worker (API D1)
├── packages/database       # Esquema Drizzle + migraciones
└── docs                    # Documentación técnica
```

## Módulos

| Módulo | Responsabilidad | Estado |
|--------|----------------|--------|
| catalog | Productos, categorías, variantes, stock | Implementado |
| cart | Añadir, actualizar, persistir en localStorage + D1 | Implementado |
| checkout | Validación, creación de orden, WhatsApp | Implementado |
| search | Búsqueda full-text, filtros, ordenamiento | Implementado |
| payment | Integración Zelle, Tropipay, QvaPay | Estructura lista |
| admin | CRUD productos, órdenes, tasas de cambio | Estructura lista |

## Instalación

```bash
pnpm install
pnpm dev
```

## Despliegue Cloudflare

```bash
pnpm deploy
# o conectar repositorio a Cloudflare Pages desde el dashboard
```

## Datos

Migración de 260+ productos desde mitarjeta.biz:
- 26 categorías preservadas
- Imágenes migradas a R2
- Precios en USD con conversión CUP/MLC en tiempo real
- Stock y disponibilidad sincronizados

## Repositorio

https://github.com/Gxforge/yacelyo-platform
