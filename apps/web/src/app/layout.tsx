import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { CategoryNav } from '@/components/layout/CategoryNav';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'YACELYO — Tecnología en Matanzas | Paneles Solares, Móviles, Laptops',
  description: 'Tienda líder en tecnología en Matanzas, Cuba. Paneles solares, inversores, móviles sellados, laptops y accesorios. Envío a toda Cuba, garantía real, pagos en USD/MLC/CUP/Zelle.',
  openGraph: {
    title: 'YACELYO — Ventas de Tecnología Matanzas',
    description: 'Más de 250 productos originales con garantía y envío.',
    type: 'website'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AnnouncementBar />
        <Header />
        <CategoryNav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
