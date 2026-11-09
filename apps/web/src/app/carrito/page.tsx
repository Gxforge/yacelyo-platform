'use client';
import { useCartStore } from '@/modules/cart/store';
import { buildCartWhatsAppMessage, getWhatsAppLink } from '@/lib/whatsapp';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const total = useCartStore((s) => s.total());
  const count = useCartStore((s) => s.count());

  if (items.length === 0) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-12 text-center bg-white min-h-[60vh]">
        <h1 className="text-xl font-black uppercase tracking-widest">Tu carrito está vacío</h1>
        <p className="text-sm text-neutral-600 mt-2">Añade productos para verlos aquí.</p>
        <Link href="/" className="inline-block mt-6 bg-black text-white px-6 py-3 text-xs font-bold tracking-widest uppercase">Seguir comprando</Link>
      </div>
    );
  }

  const shipping = 5;
  const grandTotal = total + shipping;
  const hasConsult = items.some((i) => i.price === 0);
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://yacelyo-platform.pages.dev';
  const message = buildCartWhatsAppMessage(items, shipping, siteUrl);
  const whatsappLink = getWhatsAppLink('5358739063', message);

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-4 lg:py-6 grid lg:grid-cols-[1fr_380px] gap-4 lg:gap-6 bg-[#fafafa] min-h-screen">
      <div className="bg-white border border-neutral-200 p-4 lg:p-6">
        <h1 className="text-sm font-black tracking-widest uppercase">Carrito — {count} productos</h1>
        <div className="divide-y divide-neutral-200 mt-4">
          {items.map((item) => (
            <div key={item.id} className="py-4 flex gap-3 lg:gap-4 items-start">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-neutral-50 border border-neutral-200 relative shrink-0">
                <Image src={item.images[0]} alt={item.title} fill className="object-contain p-2" />
              </div>
              <div className="flex-1 min-w-0 pr-2">
                <div className="text-sm font-medium leading-tight line-clamp-2">{item.title}</div>
                <div className="text-xs text-neutral-500 mt-1">SKU {item.sku} — Stock {item.stock}</div>
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <div className="flex items-center border border-neutral-300">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-10 h-10 grid place-items-center hover:bg-neutral-100 active:bg-neutral-200" aria-label="Disminuir"><Minus className="w-3.5 h-3.5" /></button>
                    <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-10 h-10 grid place-items-center hover:bg-neutral-100 active:bg-neutral-200" aria-label="Aumentar"><Plus className="w-3.5 h-3.5" /></button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-xs text-red-600 flex items-center gap-1 hover:underline min-h-[40px] px-3 active:bg-red-50"><Trash2 className="w-3.5 h-3.5" /> Quitar</button>
                </div>
              </div>
              <div className="text-right shrink-0 pl-2 pr-1">
                {item.price === 0 ? (
                  <div className="text-sm font-bold text-[#007600] pr-1">Consultar</div>
                ) : (
                  <>
                    <div className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                    <div className="text-xs text-neutral-500">${item.price.toFixed(2)} c/u</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-neutral-200 p-4 lg:p-6 h-fit">
        <h2 className="text-xs font-black tracking-widest uppercase">Resumen del pedido</h2>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-neutral-600">Subtotal</span><span className="font-semibold">{hasConsult ? 'A confirmar' : `$${total.toFixed(2)} USD`}</span></div>
          <div className="flex justify-between"><span className="text-neutral-600">Envío Matanzas</span><span className="font-semibold">$5.00 USD</span></div>
          {!hasConsult && <div className="flex justify-between text-xs text-neutral-500"><span>En CUP (420)</span><span>{Math.round(grandTotal * 420).toLocaleString('es-CU')} CUP</span></div>}
          <div className="border-t border-neutral-200 pt-3 flex justify-between font-black text-base"><span>Total</span><span>{hasConsult ? 'A confirmar' : `$${grandTotal.toFixed(2)} USD`}</span></div>
          {hasConsult && <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 p-2">Algunos productos son a consultar. El total se confirma por WhatsApp.</p>}
        </div>
        <a href={whatsappLink} target="_blank" rel="noopener" className="mt-4 w-full bg-black text-white py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-neutral-800 min-h-[48px]">
          Finalizar por WhatsApp <ArrowRight className="w-4 h-4" />
        </a>
        <Link href="/" className="mt-3 w-full border border-black py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center hover:bg-neutral-100 min-h-[48px]">Seguir comprando</Link>
        <p className="text-xs text-neutral-500 text-center mt-3 leading-relaxed">Se genera un mensaje profesional con tu pedido. Sin comisiones.</p>
      </div>
    </div>
  );
}
