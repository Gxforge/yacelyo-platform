'use client';
import Link from 'next/link';
import { X, Search, Heart, User, Phone, MapPin, Clock } from 'lucide-react';
import { categories } from '@/data/products';

type Props = { open: boolean; onClose: () => void };

export function MobileMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-[360px] bg-white overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 bg-black text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black grid place-items-center font-black text-xs">YA</div>
            <div>
              <div className="font-black text-sm tracking-[0.15em]">YACELYO</div>
              <div className="text-[10px] tracking-widest text-neutral-400">MATANZAS — CUBA</div>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 grid place-items-center hover:bg-neutral-800 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 border-b border-neutral-200">
          <div className="relative">
            <input placeholder="Buscar productos..." className="w-full bg-neutral-100 border border-neutral-200 rounded-full px-4 py-3 pl-10 text-sm outline-none focus:bg-white focus:border-black" />
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-neutral-500" />
          </div>
        </div>

        <nav className="p-2">
          <div className="text-[11px] font-bold tracking-widest uppercase text-neutral-500 px-3 py-2">Categorías</div>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/categoria/${cat.slug}`} onClick={onClose} className="flex items-center justify-between px-3 py-3 hover:bg-neutral-100 border-b border-neutral-100">
              <span className="text-sm font-medium">{cat.name}</span>
              <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">{cat.count}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-200 space-y-3 bg-neutral-50">
          <Link href="/cuenta" className="flex items-center gap-3 px-3 py-2.5 bg-white border border-neutral-200">
            <User className="w-4 h-4" /> <span className="text-sm font-medium">Mi cuenta</span>
          </Link>
          <Link href="/lista-deseos" className="flex items-center gap-3 px-3 py-2.5 bg-white border border-neutral-200">
            <Heart className="w-4 h-4" /> <span className="text-sm font-medium">Lista de deseos</span>
          </Link>
          <div className="pt-3 space-y-2 text-xs text-neutral-600">
            <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> +53 58739063</div>
            <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Calle 139A Pastorita, Matanzas</div>
            <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Lun-Vie 10-19h, Sab 10-16h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
