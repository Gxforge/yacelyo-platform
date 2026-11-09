import { categories, products, getCategoryBySlug } from '@/data/products';
import { ProductGrid } from '@/components/product/ProductGrid';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return notFound();

  const filtered = products.filter((p) => {
    const cat = categories.find((c) => c.id === p.categoryId);
    return cat?.slug === params.slug;
  });

  const display = filtered.length > 0 ? filtered : products.filter((p) => p.categoryId === category.id);

  return (
    <div className="max-w-[1440px] mx-auto px-3 lg:px-6 py-4 lg:py-6 bg-[#fafafa] min-h-screen">
      <div className="flex items-center gap-2 text-xs text-neutral-500 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-black min-h-[44px] flex items-center">Inicio</Link>
        <span>/</span>
        <span className="text-black font-medium truncate">{category.name}</span>
      </div>

      <div className="mt-3 lg:mt-4 bg-white border border-neutral-200 p-4 lg:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-lg lg:text-2xl font-black tracking-tight uppercase truncate">{category.name}</h1>
          <p className="text-xs lg:text-sm text-neutral-600 mt-1">{display.length} productos disponibles</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <div className="relative flex-1 lg:flex-none">
            <select className="w-full lg:w-auto border border-neutral-300 px-3 py-2.5 pr-8 text-sm bg-white appearance-none min-h-[44px]">
              <option>Ordenar: Relevancia</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Novedades</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-2 top-3.5 pointer-events-none text-neutral-500" />
          </div>
          <button className="lg:hidden flex items-center gap-2 border border-black px-4 py-2.5 text-xs font-bold tracking-widest uppercase bg-white min-h-[44px]">
            <SlidersHorizontal className="w-4 h-4" /> Filtrar
          </button>
        </div>
      </div>

      {/* Mobile filter bar - visible only on Android/mobile */}
      <div className="lg:hidden mt-3 flex gap-2 overflow-x-auto pb-1">
        <button className="shrink-0 px-4 py-2 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-full">Todos ({display.length})</button>
        <button className="shrink-0 px-4 py-2 bg-white border border-neutral-300 text-xs font-medium rounded-full">En stock</button>
        <button className="shrink-0 px-4 py-2 bg-white border border-neutral-300 text-xs font-medium rounded-full">Hasta $100</button>
        <button className="shrink-0 px-4 py-2 bg-white border border-neutral-300 text-xs font-medium rounded-full">$100 - $300</button>
      </div>

      <div className="mt-4 lg:mt-6 grid lg:grid-cols-[240px_1fr] gap-4 lg:gap-6">
        <aside className="hidden lg:block bg-white border border-neutral-200 p-4 h-fit sticky top-[80px]">
          <div className="text-xs font-bold tracking-widest uppercase mb-3">Filtrar</div>
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-semibold text-xs tracking-widest uppercase">Disponibilidad</div>
              <label className="flex items-center gap-2 mt-2 text-sm min-h-[36px]"><input type="checkbox" defaultChecked className="w-4 h-4" /> En stock ({display.length})</label>
              <label className="flex items-center gap-2 text-sm text-neutral-500 min-h-[36px]"><input type="checkbox" className="w-4 h-4" /> Agotado (0)</label>
            </div>
            <div className="border-t pt-4">
              <div className="font-semibold text-xs tracking-widest uppercase">Precio USD</div>
              <div className="flex gap-2 mt-2">
                <input placeholder="Min" className="w-full border border-neutral-300 px-2 py-2 text-sm min-h-[40px]" inputMode="numeric" />
                <input placeholder="Max" className="w-full border border-neutral-300 px-2 py-2 text-sm min-h-[40px]" inputMode="numeric" />
              </div>
              <button className="w-full mt-2 bg-black text-white text-xs font-bold tracking-widest uppercase py-2.5">Aplicar</button>
            </div>
            <div className="border-t pt-4">
              <div className="font-semibold text-xs tracking-widest uppercase">Marca</div>
              <div className="mt-2 space-y-2 text-sm text-neutral-700">
                <label className="flex items-center gap-2 min-h-[32px]"><input type="checkbox" className="w-4 h-4" /> Xiaomi (4)</label>
                <label className="flex items-center gap-2 min-h-[32px]"><input type="checkbox" className="w-4 h-4" /> Samsung (3)</label>
                <label className="flex items-center gap-2 min-h-[32px]"><input type="checkbox" className="w-4 h-4" /> Apple (2)</label>
                <label className="flex items-center gap-2 min-h-[32px]"><input type="checkbox" className="w-4 h-4" /> HP (2)</label>
              </div>
            </div>
          </div>
        </aside>

        <div>
          {display.length === 0 ? (
            <div className="bg-white border border-neutral-200 p-8 text-center">
              <div className="text-sm font-bold uppercase tracking-widest">Sin productos</div>
              <p className="text-sm text-neutral-600 mt-2">No hay productos en esta categoría por el momento.</p>
            </div>
          ) : (
            <ProductGrid products={display} />
          )}
        </div>
      </div>
    </div>
  );
}
