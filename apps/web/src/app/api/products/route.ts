import { NextRequest, NextResponse } from 'next/server';
import { products, categories } from '@/data/products';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const search = searchParams.get('q');
  const limit = parseInt(searchParams.get('limit') || '20');

  let filtered = [...products];

  if (category) {
    const cat = categories.find((c) => c.slug === category);
    if (cat) filtered = filtered.filter((p) => p.categoryId === cat.id);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter((p) => `${p.title} ${p.description}`.toLowerCase().includes(q));
  }

  return NextResponse.json({
    products: filtered.slice(0, limit),
    total: filtered.length,
    categories
  });
}
