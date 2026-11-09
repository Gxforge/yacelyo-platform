'use client';
import Link from 'next/link';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useCartStore } from '@/modules/cart/store';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const count = useCartStore((s) => s.count());
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-3 lg:px-6">
          <div className="flex items-center gap-2 lg:gap-8 py-2.5 lg:py-4">
            {/* Mobile menu - TOUCH TARGET 44px */}
            <button onClick={() => setMenuOpen(true)} className="lg:hidden w-11 h-11 grid place-items-center -ml-2 hover:bg-neutral-100 rounded-full" aria-label="Abrir menú">
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 lg:gap-3 shrink-0">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-black text-white grid place-items-center font-black text-sm tracking-widest">YA</div>
              <div className="hidden sm:block leading-none">
                <div className="font-black text-[16px] lg:text-[18px] tracking-[0.15em]">YACELYO</div>
                <div className="text-[10px] tracking-[0.2em] text-neutral-500 font-medium">MATANZAS — CUBA</div>
              </div>
              <div className="sm:hidden leading-none">
                <div className="font-black text-[15px] tracking-[0.12em]">YACELYO</div>
              </div>
            </Link>

            {/* Nav - Desktop only */}
            <nav className="hidden lg:flex items-center gap-5 text-[11px] font-semibold tracking-widest uppercase ml-2">
              <Link href="/categoria/fotovoltaico" className="hover:text-neutral-600 border-b-2 border-black pb-1">Fotovoltaico</Link>
              <Link href="/categoria/moviles" className="hover:text-neutral-600">Móviles</Link>
              <Link href="/categoria/redes" className="hover:text-neutral-600">Redes</Link>
              <Link href="/categoria/pc-escritorio" className="hover:text-neutral-600">PC</Link>
              <Link href="/categoria/laptop" className="hover:text-neutral-600">Laptop</Link>
              <Link href="/categoria/seguridad" className="hover:text-neutral-600">Seguridad</Link>
            </nav>

            {/* Search - Responsive */}
            <div className="flex-1 max-w-[520px] ml-1 lg:mx-6">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar panel, iPhone, router..."
                  className="w-full bg-neutral-100 border border-transparent focus:bg-white focus:border-black rounded-full lg:rounded-none px-4 py-2.5 pl-10 text-sm placeholder:text-neutral-400 outline-none transition-colors"
                />
                <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
              </div>
            </div>

            {/* Actions - Minimum 44px touch targets */}
            <div className="flex items-center gap-0 lg:gap-2 shrink-0">
              <Link href="/cuenta" className="hidden lg:flex items-center gap-2 px-3 py-2 hover:bg-neutral-100 min-h-[44px]">
                <User className="w-4 h-4" />
                <span className="text-xs font-medium hidden xl:block">Cuenta</span>
              </Link>
              <Link href="/lista-deseos" className="w-11 h-11 grid place-items-center hover:bg-neutral-100 rounded-full lg:rounded-none lg:w-auto lg:px-3 lg:py-2 relative" aria-label="Lista deseos">
                <Heart className="w-5 h-5 lg:w-4 lg:h-4" />
              </Link>
              <Link href="/carrito" className="w-11 h-11 lg:w-auto lg:px-4 lg:py-2 grid place-items-center lg:flex items-center gap-2 relative bg-black text-white lg:bg-white lg:text-black rounded-full lg:rounded-none" aria-label="Carrito">
                <ShoppingBag className="w-5 h-5 lg:w-4 lg:h-4" />
                <span className="hidden lg:block text-xs font-semibold tracking-widest uppercase">Carrito</span>
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 lg:static bg-red-600 lg:bg-black text-white text-[11px] font-bold min-w-[20px] h-5 px-1 grid place-items-center rounded-full">
                    {count}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
