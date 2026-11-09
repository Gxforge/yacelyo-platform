'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useCartStore } from '@/modules/cart/store';

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const isConsultar = product.price === 0;

  return (
    <div className="group bg-white border border-neutral-200 hover:shadow-md hover:border-neutral-300 transition-all flex flex-col">
      <Link href={`/producto/${product.slug}`} className="relative aspect-[4/3] bg-white overflow-hidden block p-2">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-2 right-2 w-7 h-7 bg-white border border-neutral-200 rounded-full grid place-items-center hover:bg-neutral-100 shadow-sm"
          aria-label="Lista deseos"
        >
          <Heart className="w-3.5 h-3.5 text-neutral-600" />
        </button>
      </Link>

      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <Link href={`/producto/${product.slug}`} className="line-clamp-2 text-[13px] leading-4 font-normal text-[#0f1111] hover:text-[#c45500] min-h-[32px]">
          {product.title}
        </Link>

        <div className="flex items-center gap-1">
          <div className="flex text-[#ffa41c]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < 4 ? 'fill-[#ffa41c] text-[#ffa41c]' : 'text-neutral-300'}`} />
            ))}
          </div>
          <span className="text-[11px] text-[#007185]">({Math.floor(Math.random() * 80 + 12)})</span>
        </div>

        <div className="pt-1">
          {isConsultar ? (
            <div className="text-sm font-bold text-[#007600]">Consultar precio</div>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="text-[11px] align-super">$</span>
              <span className="text-[18px] font-bold tracking-tight">{product.price.toFixed(2)}</span>
              <span className="text-xs text-neutral-500 ml-1">USD</span>
              {product.compareAtPrice && product.compareAtPrice > product.price && (
                <span className="text-xs text-neutral-500 line-through ml-1">${product.compareAtPrice.toFixed(2)}</span>
              )}
            </div>
          )}
          {!isConsultar && <div className="text-[11px] text-neutral-600">{Math.round(product.price * 420).toLocaleString('es-CU')} CUP — Entrega 24h</div>}
          {isConsultar && <div className="text-[11px] text-neutral-500">Toca para ver detalle y cotizar por WhatsApp</div>}
        </div>

        <div className="text-[11px] leading-tight mt-1">
          <div className="text-[#007600] font-medium">Disponible</div>
          <div className="text-neutral-600">Envío Matanzas $5 — Cuba $10-15</div>
        </div>

        <button
          onClick={() => addItem(product)}
          className="mt-2 w-full bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] text-black text-[11px] font-medium py-1.5 rounded-full flex items-center justify-center gap-1.5"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
