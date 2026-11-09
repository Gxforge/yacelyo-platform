'use client';
import Link from 'next/link';
import { categories } from '@/data/products';

export function CategoryNav() {
  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-2.5">
          <Link href="/" className="shrink-0 px-3 py-1.5 bg-black text-white text-[11px] font-bold tracking-widest uppercase">
            Novedades
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categoria/${cat.slug}`}
              className="shrink-0 px-3 py-1.5 text-[11px] font-medium tracking-widest uppercase text-neutral-700 hover:bg-neutral-100 hover:text-black whitespace-nowrap"
            >
              {cat.name} <span className="text-neutral-400">({cat.count})</span>
            </Link>
          ))}
          <Link href="/categoria/ofertas" className="shrink-0 px-3 py-1.5 text-red-600 font-bold text-[11px] tracking-widest uppercase ml-2">
            Ofertas
          </Link>
        </div>
      </div>
    </div>
  );
}
