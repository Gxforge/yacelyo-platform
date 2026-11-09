import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Heart, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react';

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.slug === params.id);
  if (!product) return notFound();

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-6 bg-white">
      <div className="text-xs text-neutral-500 flex items-center gap-2">
        <Link href="/" className="hover:text-black">Inicio</Link>
        <span>/</span>
        <Link href={`/categoria/${product.categoryId}`} className="hover:text-black">{product.categoryId}</Link>
        <span>/</span>
        <span className="text-black truncate">{product.title}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        <div className="bg-neutral-50 border border-neutral-200 aspect-[4/5] relative">
          <Image src={product.images[0]} alt={product.title} fill className="object-contain p-8" />
          {product.badge && <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">{product.badge}</div>}
        </div>

        <div>
          <div className="text-xs font-bold tracking-widest uppercase text-neutral-500">{product.categoryId} — SKU {product.sku}</div>
          <h1 className="text-2xl font-bold leading-tight mt-2">{product.title}</h1>

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-2xl font-black">${product.price.toFixed(2)} USD</span>
            {hasDiscount && <span className="text-sm line-through text-neutral-400">${product.compareAtPrice!.toFixed(2)}</span>}
            {hasDiscount && <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">-{Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)}%</span>}
          </div>
          <div className="text-xs text-neutral-500 mt-1">{Math.round(product.price * 420).toLocaleString('es-CU')} CUP — 1 USD = 420 CUP — 1 USD = 1.00 MLC</div>

          <p className="text-sm text-neutral-700 leading-relaxed mt-4">{product.description}</p>

          <div className="mt-6 flex gap-3">
            <div className="flex items-center border border-neutral-300">
              <button className="w-10 h-10 grid place-items-center hover:bg-neutral-100"><Minus className="w-4 h-4" /></button>
              <span className="w-12 text-center text-sm font-semibold">1</span>
              <button className="w-10 h-10 grid place-items-center hover:bg-neutral-100"><Plus className="w-4 h-4" /></button>
            </div>
            <button className="flex-1 bg-black text-white text-xs font-bold tracking-widest uppercase py-3 hover:bg-neutral-800">Añadir al carrito</button>
            <button className="w-12 h-12 border border-neutral-300 grid place-items-center hover:bg-neutral-100"><Heart className="w-5 h-5" /></button>
          </div>

          <button className="w-full mt-3 bg-[#25D366] text-white text-xs font-bold tracking-widest uppercase py-3 hover:brightness-95">Comprar por WhatsApp — +53 58739063</button>

          <div className="mt-6 grid grid-cols-3 gap-4 text-xs border-t border-neutral-200 pt-6">
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
