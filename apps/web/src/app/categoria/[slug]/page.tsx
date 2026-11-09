import { categories, products, getCategoryBySlug } from '@/data/products';
import { ProductGrid } from '@/components/product/ProductGrid';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

  // Fallback: if no direct match, show related by id
  const display = filtered.length > 0 ? filtered : products.filter((p) => p.categoryId === category.id);

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-6 bg-[#fafafa] min-h-screen">
      <div className="flex items-center gap-2 text-xs text-neutral-500">
        <Link href="/" className="hover:text-black">Inicio</Link>
        <span>/</span>
        <span className="text-black font-medium">{category.name}</span>
      </div>

      <div className="mt-4 bg-white border border-neutral-200 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight uppercase">{category.name}</h1>
          <p className="text-sm text-neutral-600 mt-1">{display.length} productos — {category.count} en total migrados desde mitarjeta.biz</p>
        </div>
        <div className="flex gap-2">
          <select className="border border-neutral-300 px-3 py-2 text-sm bg-white">
            <option>Ordenar: Relevancia</option>
            <option>Precio: menor a mayor</option>
            <option>Precio: mayor a menor</option>
            <option>Novedades</option>
          </select>
          <select className="border border-neutral-300 px-3 py-2 text-sm bg-white hidden lg:block">
            <option>Filtrar por precio</option>
            <option>Hasta $50</option>
            <option>$50 — $150</option>
            <option>$150 — $400</option>
            <option>Más de $400</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid lg:grid-cols-[240px_1fr] gap-6">
        <aside className="hidden lg:block bg-white border border-neutral-200 p-4 h-fit">
          <div className="text-xs font-bold tracking-widest uppercase mb-3">Filtrar</div>
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-semibold text-xs tracking-widest uppercase">Disponibilidad</div>
              <label className="flex items-center gap-2 mt-2 text-sm"><input type="checkbox" defaultChecked /> En stock ({display.length})</label>
              <label className="flex items-center gap-2 text-sm text-neutral-500"><input type="checkbox" /> Agotado (0)</label>
            </div>
            <div className="border-t pt-4">
              <div className="font-semibold text-xs tracking-widest uppercase">Precio USD</div>
              <div className="flex gap-2 mt-2">
                <input placeholder="Min" className="w-full border border-neutral-300 px-2 py-1.5 text-sm" />
                <input placeholder="Max" className="w-full border border-neutral-300 px-2 py-1.5 text-sm" />
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="font-semibold text-xs tracking-widest uppercase">Marca</div>
              <div className="mt-2 space-y-1 text-sm text-neutral-700">
                <div>Xiaomi (4)</div>
                <div>Samsung (3)</div>
                <div>Apple (2)</div>
                <div>HP (2)</div>
              </div>
            </div>
          </div>
        </aside>

        <div>
          {display.length === 0 ? (
            <div className="bg-white border border-neutral-200 p-8 text-center">
              <div className="text-sm font-bold uppercase tracking-widest">Categoría en migración</div>
              <p className="text-sm text-neutral-600 mt-2">Estamos migrando los {category.count} productos de {category.name} desde mitarjeta.biz. Vuelve en 24h.</p>
            </div>
          ) : (
            <ProductGrid products={display} />
          )}
        </div>
      </div>
    </div>
  );
}
