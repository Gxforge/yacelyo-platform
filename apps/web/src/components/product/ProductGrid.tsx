import { Product } from '@/data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid({ products, title, subtitle }: { products: Product[]; title?: string; subtitle?: string }) {
  return (
    <div>
      {(title || subtitle) && (
        <div className="flex items-end justify-between gap-4 mb-3 lg:mb-4">
          <div className="min-w-0">
            {title && <h2 className="text-sm lg:text-lg font-black tracking-tight uppercase truncate">{title}</h2>}
            {subtitle && <p className="text-xs lg:text-sm text-neutral-500 mt-1 line-clamp-1">{subtitle}</p>}
          </div>
          <div className="text-xs text-neutral-500 hidden lg:block shrink-0">{products.length} productos</div>
        </div>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
