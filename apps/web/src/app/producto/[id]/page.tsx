import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Heart, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react';
import { ProductWhatsAppButton } from './ProductWhatsAppButton';

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.slug === params.id);
  if (!product) return notFound();

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const isConsultar = product.price === 0;

  return (
    <div className="max-w-[1440px] mx-auto px-3 lg:px-6 py-4 lg:py-6 bg-white">
      <div className="text-xs text-neutral-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-black min-h-[44px] flex items-center">Inicio</Link>
        <span>/</span>
        <Link href={`/categoria/${product.categoryId}`} className="hover:text-black min-h-[44px] flex items-center">{product.categoryId}</Link>
        <span>/</span>
        <span className="text-black truncate">{product.title}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-4">
        <div className="bg-neutral-50 border border-neutral-200 aspect-[4/5] lg:aspect-[4/5] relative">
          <Image src={product.images[0]} alt={product.title} fill className="object-contain p-6 lg:p-8" priority />
          {product.badge && <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">{product.badge}</div>}
        </div>

        <div>
          <div className="text-xs font-bold tracking-widest uppercase text-neutral-500">{product.categoryId} — SKU {product.sku}</div>
          <h1 className="text-xl lg:text-2xl font-bold leading-tight mt-2">{product.title}</h1>

          <div className="flex items-baseline gap-3 mt-4">
            {isConsultar ? (
              <span className="text-2xl font-black text-[#007600]">Consultar precio</span>
            ) : (
              <span className="text-2xl font-black">${product.price.toFixed(2)} USD</span>
            )}
            {hasDiscount && <span className="text-sm line-through text-neutral-400">${product.compareAtPrice!.toFixed(2)}</span>}
            {hasDiscount && <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">-{Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)}%</span>}
          </div>
          {!isConsultar && <div className="text-xs text-neutral-500 mt-1">{Math.round(product.price * 420).toLocaleString('es-CU')} CUP — 1 USD = 420 CUP — 1 USD = 1.00 MLC</div>}
          {isConsultar && <div className="text-xs text-amber-700 mt-1">Precio a confirmar por WhatsApp — respuesta en minutos</div>}

          <p className="text-sm text-neutral-700 leading-relaxed mt-4">{product.description}</p>

          <div className="mt-6 flex gap-3">
            <div className="flex items-center border border-neutral-300">
              <button className="w-11 h-11 grid place-items-center hover:bg-neutral-100" aria-label="Menos"><Minus className="w-4 h-4" /></button>
              <span className="w-12 text-center text-sm font-semibold">1</span>
              <button className="w-11 h-11 grid place-items-center hover:bg-neutral-100" aria-label="Más"><Plus className="w-4 h-4" /></button>
            </div>
            <button className="flex-1 bg-black text-white text-xs font-bold tracking-widest uppercase py-3 hover:bg-neutral-800 min-h-[48px]">Añadir al carrito</button>
            <button className="w-12 h-12 border border-neutral-300 grid place-items-center hover:bg-neutral-100 min-h-[48px]" aria-label="Favoritos"><Heart className="w-5 h-5" /></button>
          </div>

          <ProductWhatsAppButton product={product} />

          <div className="mt-6 grid grid-cols-3 gap-3 lg:gap-4 text-xs border-t border-neutral-200 pt-6">
            <div className="flex gap-2"><Truck className="w-4 h-4 mt-0.5 shrink-0" /><div><div className="font-bold uppercase tracking-wide">Envío 24/48H</div><div className="text-neutral-500">Matanzas $5 — Cuba consultar</div></div></div>
            <div className="flex gap-2"><Shield className="w-4 h-4 mt-0.5 shrink-0" /><div><div className="font-bold uppercase tracking-wide">Garantía Real</div><div className="text-neutral-500">30 días por escrito</div></div></div>
            <div className="flex gap-2"><RotateCcw className="w-4 h-4 mt-0.5 shrink-0" /><div><div className="font-bold uppercase tracking-wide">Pagos</div><div className="text-neutral-500">USD/MLC/CUP/Zelle</div></div></div>
          </div>

          <div className="mt-6 bg-neutral-50 border border-neutral-200 p-4">
            <div className="text-xs font-bold tracking-widest uppercase">Especificaciones</div>
            <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
              {product.specs.map((s) => (
                <li key={s} className="flex gap-2"><span className="text-neutral-400">—</span> {s}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 text-xs text-neutral-500">
            Stock: {product.stock} unidades en Pastorita, Matanzas. Entrega inmediata. Factura por WhatsApp.
          </div>
        </div>
      </div>
    </div>
  );
}
