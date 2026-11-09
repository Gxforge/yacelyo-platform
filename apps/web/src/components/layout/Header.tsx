'use client';
import Link from 'next/link';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useCartStore } from '@/modules/cart/store';
import { useState } from 'react';

export function Header() {
  const count = useCartStore((s) => s.count());
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-4 lg:gap-8 py-3 lg:py-4">
          {/* Mobile menu */}
          <button className="lg:hidden p-2 -ml-2">
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-black text-white grid place-items-center font-black text-sm tracking-widest">YA</div>
            <div className="hidden sm:block leading-none">
              <div className="font-black text-[18px] tracking-[0.15em]">YACELYO</div>
              <div className="text-[10px] tracking-[0.2em] text-neutral-500 font-medium">MATANZAS — CUBA</div>
            </div>
          </Link>

          {/* Nav - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-semibold tracking-widest uppercase ml-2">
            <Link href="/categoria/fotovoltaico" className="hover:text-neutral-600 border-b-2 border-black pb-1">Fotovoltaico</Link>
            <Link href="/categoria/moviles" className="hover:text-neutral-600">Móviles</Link>
            <Link href="/categoria/redes" className="hover:text-neutral-600">Redes</Link>
            <Link href="/categoria/pc-escritorio" className="hover:text-neutral-600">PC</Link>
            <Link href="/categoria/laptop" className="hover:text-neutral-600">Laptop</Link>
            <Link href="/categoria/seguridad" className="hover:text-neutral-600">Seguridad</Link>
          </nav>

          {/* Search - Center */}
          <div className="flex-1 max-w-[520px] ml-auto lg:mx-6">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar panel solar, iPhone, router, laptop..."
                className="w-full bg-neutral-100 border border-transparent focus:bg-white focus:border-black rounded-none px-4 py-2.5 pl-10 text-sm placeholder:text-neutral-400 outline-none transition-colors"
              />
              <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 lg:gap-2 shrink-0">
            <Link href="/cuenta" className="hidden lg:flex items-center gap-2 px-3 py-2 hover:bg-neutral-100">
              <User className="w-4 h-4" />
              <span className="text-xs font-medium hidden xl:block">Cuenta</span>
            </Link>
            <Link href="/lista-deseos" className="p-2 lg:p-3 hover:bg-neutral-100 relative">
              <Heart className="w-4 h-4" />
            </Link>
            <Link href="/carrito" className="p-2 lg:px-3 lg:py-2 hover:bg-neutral-100 flex items-center gap-2 relative bg-black text-white lg:bg-white lg:text-black">
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden lg:block text-xs font-semibold tracking-widest uppercase">Carrito</span>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 lg:static bg-red-600 lg:bg-black text-white text-[10px] font-bold w-5 h-5 grid place-items-center rounded-full">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
