// YACELYO Platform - Product Database
// Migrated from yacelyo.mitarjeta.biz (260+ products across 26 categories)
// Structured for D1 + R2 - Prices in USD, conversions handled at runtime

export type Category = {
  id: string;
  slug: string;
  name: string;
  count: number;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  price: number;
  compareAtPrice?: number;
  cost?: number;
  sku: string;
  stock: number;
  images: string[];
  specs: string[];
  tags: string[];
  featured?: boolean;
  badge?: string;
};

export const categories: Category[] = [
  { id: 'c1', slug: 'fotovoltaico', name: 'Fotovoltaico', count: 32, image: 'https://i.ibb.co/JfPMWPV/Whats-App-Image-2026-10-08-at-7-07-45-AM.jpg' },
  { id: 'c2', slug: 'accesorios-fotovoltaico', name: 'Acc. Fotovoltaico', count: 21, image: 'https://i.ibb.co/ZRMHF50K/Whats-App-Image-2026-07-24-at-6-37-37-PM-5.jpg' },
  { id: 'c3', slug: 'moviles', name: 'Móviles', count: 16, image: 'https://i.ibb.co/PvMBcqGg/Whats-App-Image-2026-08-25-at-6-12-17-PM-2.jpg' },
  { id: 'c4', slug: 'moviles-accesorios', name: 'Móviles Accesorios', count: 13, image: 'https://i.ibb.co/Q3LYbgC4/file-00000000716081f8ab27b0ba963a694f.png' },
  { id: 'c5', slug: 'redes', name: 'Redes', count: 19, image: 'https://i.ibb.co/FqL8cJQP/Whats-App-Image-2026-09-16-at-2-59-01-PM.jpg' },
  { id: 'c6', slug: 'pc-escritorio', name: 'PC Escritorio', count: 19, image: 'https://i.ibb.co/Y7T3CCTg/file-0000000007c0822fbdab46c75c7d707b.png' },
  { id: 'c7', slug: 'pc-accesorios', name: 'PC Accesorios', count: 28, image: 'https://i.ibb.co/jPXkBYV7/Whats-App-Image-2026-09-14-at-8-33-26-PM.jpg' },
  { id: 'c8', slug: 'tablet', name: 'Tablet', count: 5, image: 'https://i.ibb.co/JWKY1V90/file-00000000662c81f59ee8c8b8dbde0ad7.png' },
  { id: 'c9', slug: 'laptop', name: 'Laptop', count: 9, image: 'https://i.ibb.co/Pv3wVhwb/Whats-App-Image-2026-10-16-at-7-24-16-PM.jpg' },
  { id: 'c10', slug: 'relojes', name: 'Relojes', count: 11, image: 'https://i.ibb.co/6pWYLmD/Whats-App-Image-2026-10-08-at-8-01-13-AM.jpg' },
  { id: 'c11', slug: 'audifonos', name: 'Audífonos', count: 11, image: 'https://i.ibb.co/V1tfTbq/Whats-App-Image-2026-07-26-at-3-29-36-PM.jpg' },
  { id: 'c12', slug: 'iluminacion', name: 'Iluminación y Respaldo', count: 8, image: 'https://i.ibb.co/hF7pWmpp/Whats-App-Image-2026-10-16-at-6-44-34-PM.jpg' },
  { id: 'c13', slug: 'zona-gamer', name: 'Zona Gamer', count: 6, image: 'https://i.ibb.co/27jvSGZH/Whats-App-Image-2026-10-03-at-10-44-18-PM.jpg' },
  { id: 'c14', slug: 'seguridad', name: 'Seguridad', count: 7, image: 'https://i.ibb.co/vxrSXdMF/Whats-App-Image-2026-08-12-at-1-10-28-PM.jpg' },
  { id: 'c15', slug: 'tv-accesorios', name: 'TV Accesorios', count: 6, image: 'https://i.ibb.co/4ZxYrk9h/Whats-App-Image-2026-09-26-at-12-28-38-PM.jpg' },
  { id: 'c16', slug: 'cover-micas', name: 'Cover y Micas', count: 9, image: 'https://i.ibb.co/nNKFjN7t/Whats-App-Image-2026-07-24-at-7-04-04-PM-2.jpg' },
];

export const products: Product[] = [
  // FOTOVOLTAICO - Core business en Cuba
  {
    id: 'PV-550-001', slug: 'panel-solar-550w-monocristalino', title: 'Panel Solar Monocristalino 550W - 24V Alta Eficiencia',
    description: 'Panel de grado A, 21.3% eficiencia, marco de aluminio anodizado. Ideal para sistemas híbridos residenciales. Certificación IEC. Resistente a salinidad, perfecto para Matanzas.',
    categoryId: 'c1', price: 189, compareAtPrice: 225, sku: 'PV550-A01', stock: 14,
    images: ['https://i.ibb.co/JfPMWPV/Whats-App-Image-2026-10-08-at-7-07-45-AM.jpg','https://i.ibb.co/bMB6Zq1W/Whats-App-Image-2026-09-30-at-9-21-04-PM.jpg'],
    specs: ['Potencia: 550W', 'Voltaje: 24V / 42.2V Voc', 'Celdas: 144 half-cut', 'Garantía: 25 años lineales', 'Dimensiones: 2279x1134x35mm'], tags: ['nuevo','mas-vendido'], featured: true, badge: 'Más vendido'
  },
  {
    id: 'PV-INV-3000', slug: 'inversor-hibrido-3kw-24v-mppt', title: 'Inversor Híbrido 3KW 24V MPPT 80A - Onda Pura',
    description: 'Inversor híbrido con controlador MPPT integrado. Carga desde panel solar y red ETECSA. Pantalla LCD, WiFi para monitoreo remoto. Indispensable para apagones.',
    categoryId: 'c1', price: 345, compareAtPrice: 399, sku: 'INV-H3K-24V', stock: 7,
    images: ['https://i.ibb.co/bMB6Zq1W/Whats-App-Image-2026-09-30-at-9-21-04-PM.jpg','https://i.ibb.co/HfjY3qj4/Whats-App-Image-2026-10-04-at-6-10-06-AM.jpg'],
    specs: ['Potencia: 3000W', 'MPPT: 80A / 450V', 'Batería: 24V', 'Onda: Pura sinusoidal', 'WiFi integrado'], tags: ['oferta'], badge: 'Oferta'
  },
  {
    id: 'PV-BAT-100', slug: 'bateria-lifepo4-100ah-24v', title: 'Batería LiFePO4 100Ah 24V - 2560Wh Ciclo Profundo',
    description: 'Batería de litio con BMS inteligente, 3000+ ciclos al 80% DOD. Reemplaza 2 baterías de gel. Ligera y segura, sin mantenimiento.',
    categoryId: 'c1', price: 420, sku: 'BAT-LFP100-24', stock: 9,
    images: ['https://i.ibb.co/HfjY3qj4/Whats-App-Image-2026-10-04-at-6-10-06-AM.jpg'], specs: ['Capacidad: 2560Wh', 'Ciclos: 3000+', 'Peso: 22kg', 'BMS integrado', 'Garantía: 5 años'], tags: ['nuevo'], badge: 'Nuevo'
  },
  {
    id: 'PV-KIT-1K', slug: 'kit-solar-completo-1kw', title: 'Kit Solar Completo 1KW - Instalación Incluida Matanzas',
    description: 'Solución llave en mano: Panel 550W + Inversor 1KW + Batería 100Ah + Estructura + Cableado. Instalación por técnicos certificados en Matanzas.',
    categoryId: 'c1', price: 799, compareAtPrice: 950, sku: 'KIT-1KW-COMPLETO', stock: 3,
    images: ['https://i.ibb.co/7dpv0jPr/Whats-App-Image-2026-10-04-at-6-16-34-AM.jpg'], specs: ['Generación: 4.5kWh/día', 'Autonomía: 8-10h', 'Instalación: Incluida', 'Soporte: 1 año'], tags: ['kit'], badge: 'Kit ahorro'
  },
  {
    id: 'PV-CTRL-60', slug: 'controlador-mppt-60a-12-48v', title: 'Controlador MPPT 60A 12/24/48V - Epever Tracer',
    description: 'Controlador profesional con pantalla y Bluetooth. Eficiencia 99%. Para sistemas de hasta 3000W.',
    categoryId: 'c2', price: 125, sku: 'MPPT-60A-TRACER', stock: 12,
    images: ['https://i.ibb.co/ZRMHF50K/Whats-App-Image-2026-07-24-at-6-37-37-PM-5.jpg'], specs: ['Corriente: 60A', 'Voltaje: 12/24/48V auto', 'Eficiencia: 99%', 'Bluetooth: Sí'], tags: ['accesorio']
  },
  // MOVILES
  {
    id: 'MOB-IP14-128', slug: 'iphone-14-128gb-sellado', title: 'iPhone 14 128GB - Sellado Caja Original',
    description: 'Equipo sellado, libre de fábrica, 1 SIM + eSIM, batería 100%. Incluye cable original y garantía de tienda. Colores: Midnight, Starlight, Blue.',
    categoryId: 'c3', price: 520, compareAtPrice: 599, sku: 'IP14-128-SL', stock: 5,
    images: ['https://i.ibb.co/PvMBcqGg/Whats-App-Image-2026-08-25-at-6-12-17-PM-2.jpg'], specs: ['Almacenamiento: 128GB', 'Chip: A15 Bionic', 'Cámara: Dual 12MP', 'Garantía: 30 días'], tags: ['premium'], featured: true, badge: 'Premium'
  },
  {
    id: 'MOB-A54-256', slug: 'samsung-galaxy-a54-256gb', title: 'Samsung Galaxy A54 5G 256GB 8GB RAM',
    description: 'Pantalla Super AMOLED 120Hz, procesador Exynos 1380, resistencia IP67. Sellado, dual SIM.',
    categoryId: 'c3', price: 295, sku: 'SAMA54-256', stock: 8,
    images: ['https://i.ibb.co/n2YkBz4/Whats-App-Image-2026-08-25-at-5-03-44-PM.jpg'], specs: ['Pantalla: 6.4" 120Hz', 'RAM: 8GB', 'Batería: 5000mAh', 'IP67'], tags: []
  },
  {
    id: 'MOB-RN13P-256', slug: 'redmi-note-13-pro-256gb', title: 'Redmi Note 13 Pro 256GB - 200MP',
    description: 'Snapdragon 7s Gen 2, cámara 200MP con OIS, carga 67W en 44min. Diseño premium.',
    categoryId: 'c3', price: 245, compareAtPrice: 279, sku: 'RN13P-256', stock: 11,
    images: ['https://i.ibb.co/zTXDgG9W/Whats-App-Image-2026-08-25-at-5-03-25-PM.jpg'], specs: ['Cámara: 200MP OIS', 'Carga: 67W', 'Pantalla: AMOLED 1.5K'], tags: ['oferta'], badge: 'Oferta'
  },
  // REDES
  {
    id: 'NET-4G-RTR', slug: 'router-4g-lte-bateria-3000mah', title: 'Router 4G LTE Portátil con Batería 3000mAh',
    description: 'Inserta SIM ETECSA y comparte WiFi con 10 dispositivos. Batería para 8 horas, ideal durante apagones. Bandas 4G cubanas compatibles.',
    categoryId: 'c5', price: 85, sku: 'RTR-4G-LTE-BAT', stock: 15,
    images: ['https://i.ibb.co/FqL8cJQP/Whats-App-Image-2026-09-16-at-2-59-01-PM.jpg'], specs: ['4G LTE: B1/B3/B8', 'Batería: 3000mAh', 'Conexiones: 10', 'Autonomía: 8h'], tags: ['esencial'], featured: true
  },
  {
    id: 'NET-WIFI-EXT', slug: 'extensor-wifi-1200mbps', title: 'Extensor WiFi 1200Mbps Dual Band',
    description: 'Amplía cobertura hasta 80m², instalación en 2 minutos vía WPS. Compatible con cualquier router.',
    categoryId: 'c5', price: 32, sku: 'EXT-WIFI-1200', stock: 20,
    images: ['https://i.ibb.co/HT0YXhtM/Whats-App-Image-2026-09-09-at-8-47-51-PM.jpg'], specs: ['Velocidad: 1200Mbps', 'Bandas: 2.4/5GHz', 'Cobertura: 80m²'], tags: []
  },
  // PC / LAPTOP
  {
    id: 'PC-MINI-N100', slug: 'mini-pc-n100-16gb-512gb', title: 'Mini PC Intel N100 16GB RAM 512GB SSD - 4K',
    description: 'Tamaño de un libro, potencia de escritorio. Windows 11 Pro, WiFi 6, 4K dual HDMI. Perfecto para oficina y clases.',
    categoryId: 'c6', price: 210, sku: 'MINI-N100-16-512', stock: 6,
    images: ['https://i.ibb.co/Y7T3CCTg/file-0000000007c0822fbdab46c75c7d707b.png'], specs: ['CPU: N100 3.4GHz', 'RAM: 16GB LPDDR5', 'SSD: 512GB NVMe', 'WiFi 6'], tags: []
  },
  {
    id: 'LAP-HP15-I5', slug: 'laptop-hp-15-i5-8gb-512gb', title: 'Laptop HP 15.6" Core i5 8GB 512GB SSD',
    description: 'Pantalla Full HD, teclado numérico, batería 7 horas. Sellada con Windows 11. Ideal estudiantes y trabajo.',
    categoryId: 'c9', price: 385, compareAtPrice: 450, sku: 'HP15-I5-8-512', stock: 4,
    images: ['https://i.ibb.co/Pv3wVhwb/Whats-App-Image-2026-10-16-at-7-24-16-PM.jpg'], specs: ['CPU: i5-1135G7', 'RAM: 8GB', 'SSD: 512GB', 'Pantalla: 15.6" FHD'], tags: ['oferta'], badge: 'Oferta limitada'
  },
  // AUDIO / RELOJES
  {
    id: 'AUD-PRO2', slug: 'airpods-pro-2-anc', title: 'AirPods Pro 2da Generación - ANC',
    description: 'Cancelación activa de ruido, audio espacial, estuche MagSafe con 6h + 18h. Calidad 1:1 premium.',
    categoryId: 'c11', price: 42, compareAtPrice: 55, sku: 'AUD-PRO2-ANC', stock: 25,
    images: ['https://i.ibb.co/V1tfTbq/Whats-App-Image-2026-07-26-at-3-29-36-PM.jpg'], specs: ['ANC: Sí', 'Batería: 6+18h', 'Carga: MagSafe/Lightning'], tags: ['mas-vendido'], badge: 'Más vendido'
  },
  {
    id: 'WAT-S9-45', slug: 'smartwatch-serie-9-45mm', title: 'Smartwatch Serie 9 - 45mm AMOLED Llamadas BT',
    description: 'Pantalla AMOLED curva, llamadas Bluetooth, monitoreo cardíaco y sueño, IP68, 7 días de batería.',
    categoryId: 'c10', price: 38, sku: 'WAT-S9-45-BT', stock: 18,
    images: ['https://i.ibb.co/6pWYLmD/Whats-App-Image-2026-10-08-at-8-01-13-AM.jpg'], specs: ['Pantalla: 1.9" AMOLED', 'Batería: 7 días', 'Resistencia: IP68', 'Llamadas: BT'], tags: []
  },
  // ILUMINACION
  {
    id: 'LIG-SOL-200', slug: 'lampara-solar-200w-usb', title: 'Lámpara Solar Recargable 200W - Panel + USB',
    description: 'Autonomía 12 horas, 3 niveles de brillo, panel solar incluido + carga USB. Imprescindible para apagones prolongados.',
    categoryId: 'c12', price: 29, sku: 'LIG-SOL200-USB', stock: 30,
    images: ['https://i.ibb.co/hF7pWmpp/Whats-App-Image-2026-10-16-at-6-44-34-PM.jpg'], specs: ['Potencia: 200W', 'Autonomía: 12h', 'Carga: Solar/USB', 'Panel: 5W incluido'], tags: ['esencial']
  },
  // GAMER / SEGURIDAD
  {
    id: 'GAM-PS5-CTRL', slug: 'mando-ps5-inalambrico', title: 'Mando Inalámbrico PS5 + Base de Carga Dual',
    description: 'Vibración háptica, gatillos adaptativos, batería 12h. Compatible PS5/PC.',
    categoryId: 'c13', price: 78, sku: 'GAM-PS5-CTRL-BASE', stock: 9,
    images: ['https://i.ibb.co/27jvSGZH/Whats-App-Image-2026-10-03-at-10-44-18-PM.jpg'], specs: ['Batería: 12h', 'Conexión: BT/USB-C', 'Base: Dual incluida'], tags: []
  },
  {
    id: 'SEC-KIT-4CH', slug: 'kit-camaras-wifi-4ch-nvr-1tb', title: 'Kit 4 Cámaras WiFi Exterior + NVR 1TB',
    description: 'Visión nocturna 20m, detección de movimiento, acceso remoto desde móvil. Instalación incluida en Matanzas.',
    categoryId: 'c14', price: 165, sku: 'SEC-KIT4-WIFI-1TB', stock: 5,
    images: ['https://i.ibb.co/vxrSXdMF/Whats-App-Image-2026-08-12-at-1-10-28-PM.jpg'], specs: ['Cámaras: 4x 1080P', 'NVR: 1TB', 'Visión nocturna: 20m', 'App: iOS/Android'], tags: []
  },
  {
    id: 'TV-BOX-4K', slug: 'tv-box-4k-android-4gb-64gb', title: 'TV Box 4K Android 11 - 4GB RAM 64GB ROM',
    description: 'Convierte cualquier TV en Smart TV. Netflix, YouTube, Kodi, mando por voz. WiFi dual + Ethernet.',
    categoryId: 'c15', price: 48, sku: 'TVBOX-4K-4-64', stock: 14,
    images: ['https://i.ibb.co/4ZxYrk9h/Whats-App-Image-2026-09-26-at-12-28-38-PM.jpg'], specs: ['RAM: 4GB', 'ROM: 64GB', 'Resolución: 4K HDR', 'Mando voz: Sí'], tags: []
  }
];

export const exchangeRates = {
  usdToCup: 420,
  usdToMlc: 1,
  updatedAt: '2026-11-06T10:17:00Z',
  source: 'mercado informal Matanzas'
};

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter(p => p.categoryId === categoryId);
}

export function formatPrice(usd: number) {
  return {
    usd: `$${usd.toFixed(2)} USD`,
    cup: `${Math.round(usd * exchangeRates.usdToCup).toLocaleString('es-CU')} CUP`,
    mlc: `${usd.toFixed(2)} MLC`
  };
}
