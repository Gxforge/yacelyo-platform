'use client';
import { buildProductWhatsAppMessage, getWhatsAppLink } from '@/lib/whatsapp';
import type { Product } from '@/data/products';

export function ProductWhatsAppButton({ product }: { product: Product }) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://yacelyo-platform.pages.dev';
  const message = buildProductWhatsAppMessage(product, siteUrl);
  const link = getWhatsAppLink('5358739063', message);

  return (
    <a href={link} target="_blank" rel="noopener" className="w-full mt-3 bg-[#25D366] text-white text-xs font-bold tracking-widest uppercase py-3 hover:brightness-95 flex items-center justify-center min-h-[48px]">
      Consultar por WhatsApp — +53 58739063
    </a>
  );
}
