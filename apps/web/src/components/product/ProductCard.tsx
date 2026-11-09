'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Product } from '@/data/products';
import { useCartStore } from '@/modules/cart/store';
import { discountPercent } from '@/lib/utils';

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <div className="group bg-white border border-neutral-200 hover:border-black transition-colors flex flex-col">
      <Link href={`/producto/${product.slug}`} className="relative aspect-[4/5] bg-neutral-50 overflow-hidden block">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badge && <Badge variant={hasDiscount ? 'sale' : 'new'}>{product.badge}</Badge>}
          {hasDiscount && <Badge variant="sale">-{discountPercent(product.price, product.compareAtPrice!)}%</Badge>}
        </div>
        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="absolute top-2 right-2 w-7 h-7 bg-white border border-neutral-200 grid place-items-center hover:bg-black hover:text-white hover:border-black transition-colors"
          aria-label="Añadir a lista de deseos"
        >
          <Heart className="w-3.5 h-3.5" />
        </button>
        {/* Quick add - visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 hidden lg:block">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-black text-white text-[11px] font-bold tracking-widest uppercase py-2.5 hover:bg-neutral-800 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Añadir al carrito
          </button>
        </div>
        {/* Stock indicator */}
        {product.stock <= 3 && product.stock > 0 && (
          <div className="absolute bottom-2 left-2 bg-amber-400 text-black text-[10px] font-bold px-2 py-1 tracking-widest uppercase">Quedan {product.stock}</div>
        )}
      </Link>

      <div className="p-3 flex flex-col gap-2 flex-1">
        <Link href={`/producto/${product.slug}`} className="line-clamp-2 text-[13px] leading-5 font-medium hover:underline min-h-[40px]">
          {product.title}
        </Link>

        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-[15px] font-bold tracking-tight">${product.price.toFixed(2)}</span>
          {hasDiscount && <span className="text-xs text-neutral-400 line-through">${product.compareAtPrice!.toFixed(2)}</span>}
          <span className="text-[11px] text-neutral-500 ml-auto">{Math.round(product.price * 420).toLocaleString('es-CU')} CUP</span>
        </div>

        {/* Mobile add button */}
        <button
          onClick={() => addItem(product)}
          className="lg:hidden mt-1 w-full border border-black text-black text-[11px] font-bold tracking-widest uppercase py-2.5 hover:bg-black hover:text-white"
        >
          Añadir
        </button>

        <div className="text-[11px] text-neutral-500 flex items-center gap-1">
          <span className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
          {product.stock > 0 ? `${product.stock} disponibles` : 'Agotado'} — Envío Matanzas $5
        </div>
      </div>
    </div>
  );
}
