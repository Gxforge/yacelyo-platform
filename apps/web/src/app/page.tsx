import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Truck, Shield, CreditCard, Clock } from 'lucide-react';
import { products, categories } from '@/data/products';
import { ProductGrid } from '@/components/product/ProductGrid';

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 8);
  const fotovoltaico = products.filter((p) => p.categoryId === 'c1').slice(0, 4);
  const moviles = products.filter((p) => p.categoryId === 'c3').slice(0, 4);
  const newArrivals = [...products].sort(() => 0.5 - Math.random()).slice(0, 8);

  return (
    <div className="bg-[#fafafa]">
      {/* HERO - Editorial like Shein */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-6 pt-4">
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Main hero */}
          <div className="lg:col-span-8 relative bg-black text-white overflow-hidden min-h-[420px] lg:min-h-[480px] flex">
            <div className="absolute inset-0">
              <Image src="https://i.ibb.co/JfPMWPV/Whats-App-Image-2026-10-08-at-7-07-45-AM.jpg" alt="Panel Solar Hero" fill className="object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            <div className="relative p-6 lg:p-10 flex flex-col justify-center max-w-[560px]">
              <div className="inline-flex items-center gap-2 bg-white text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 w-fit">
                Nueva Colección Fotovoltaica 2026
              </div>
              <h1 className="mt-4 text-3xl lg:text-[42px] font-black leading-[0.95] tracking-tight">
                ENERGÍA PARA
                <br />
                <span className="font-light">NO APAGARTE</span>
              </h1>
              <p className="mt-3 text-sm lg:text-base text-neutral-300 leading-relaxed">
                Paneles 550W, inversores híbridos 3KW y baterías LiFePO4 con instalación en Matanzas. Financia tu independencia energética.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/categoria/fotovoltaico" className="bg-white text-black px-7 py-3 text-xs font-bold tracking-widest uppercase hover:bg-neutral-100 inline-flex items-center gap-2">
                  Comprar fotovoltaico <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/categoria/fotovoltaico" className="border border-white text-white px-7 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black">
                  Ver kits
                </Link>
              </div>
              <div className="mt-6 flex gap-6 text-xs">
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> Stock en Matanzas</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full" /> Instalación incluida</span>
              </div>
            </div>
          </div>

          {/* Side promos */}
          <div className="lg:col-span-4 grid grid-rows-2 gap-4">
            <Link href="/categoria/moviles" className="relative bg-white border border-neutral-200 p-6 flex flex-col justify-between overflow-hidden group">
              <div className="absolute right-0 top-0 bottom-0 w-[55%]">
                <Image src="https://i.ibb.co/PvMBcqGg/Whats-App-Image-2026-08-25-at-6-12-17-PM-2.jpg" alt="Móviles" fill className="object-contain p-4 group-hover:scale-105 transition-transform" />
              </div>
              <div className="relative max-w-[55%]">
                <div className="text-[11px] font-bold tracking-widest uppercase text-neutral-500">Móviles Sellados</div>
                <div className="text-xl font-black tracking-tight leading-none mt-1">IPHONE & SAMSUNG</div>
                <div className="text-sm text-neutral-600 mt-1">Desde $245 USD</div>
                <div className="mt-4 text-xs font-bold tracking-widest uppercase underline underline-offset-4">Comprar ahora</div>
              </div>
            </Link>

            <div className="bg-neutral-900 text-white p-6 flex flex-col justify-center">
              <div className="text-[11px] font-bold tracking-widest uppercase text-neutral-400">Financiación</div>
              <div className="text-lg font-bold leading-tight mt-1">Paga en CUP, MLC, Zelle o Tropipay</div>
              <div className="text-xs text-neutral-400 mt-2">Tasa transparente: 1 USD = 420 CUP • Actualizado hoy</div>
              <Link href="/tasas" className="mt-4 text-xs font-bold tracking-widest uppercase border border-white px-4 py-2 w-fit hover:bg-white hover:text-black">Ver tasas</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-6 mt-4">
        <div className="bg-white border border-neutral-200 grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200">
          <div className="flex items-center gap-3 p-4">
            <Truck className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-xs font-bold tracking-widest uppercase">Envío 24/48H</div>
              <div className="text-xs text-neutral-500">Matanzas y toda Cuba</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4">
            <Shield className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-xs font-bold tracking-widest uppercase">Garantía Real</div>
              <div className="text-xs text-neutral-500">30 días por escrito</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4">
            <CreditCard className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-xs font-bold tracking-widest uppercase">Pagos Flexibles</div>
              <div className="text-xs text-neutral-500">USD / CUP / MLC / Zelle</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4">
            <Clock className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-xs font-bold tracking-widest uppercase">Soporte WhatsApp</div>
              <div className="text-xs text-neutral-500">Respuesta en minutos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-black tracking-widest uppercase">Comprar por Categoría</h2>
          <Link href="/categorias" className="text-xs font-bold tracking-widest uppercase underline underline-offset-4">Ver todas</Link>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-8 gap-3">
          {categories.slice(0, 8).map((cat) => (
            <Link key={cat.id} href={`/categoria/${cat.slug}`} className="group bg-white border border-neutral-200 p-3 hover:border-black text-center">
              <div className="aspect-square bg-neutral-50 relative overflow-hidden">
                <Image src={cat.image} alt={cat.name} fill className="object-contain p-2 group-hover:scale-105 transition-transform" />
              </div>
              <div className="text-[11px] font-bold tracking-widest uppercase mt-2 leading-tight">{cat.name}</div>
              <div className="text-[11px] text-neutral-500">{cat.count} productos</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-6 mt-8">
        <ProductGrid products={featured} title="Destacados de la semana" subtitle="Selección del equipo YACELYO — productos con mayor rotación en Matanzas" />
        <div className="text-center mt-6">
          <Link href="/categoria/fotovoltaico" className="inline-flex items-center gap-2 border border-black px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white">
            Ver todo fotovoltaico <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* EDITORIAL BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-6 mt-8">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="bg-white border border-neutral-200 p-6 lg:p-8 flex gap-6 items-center">
            <div className="flex-1">
              <div className="text-[11px] font-bold tracking-widest uppercase text-red-600">Oferta limitada</div>
              <h3 className="text-xl font-black tracking-tight mt-1">Kit Solar 1KW Completo</h3>
              <p className="text-sm text-neutral-600 mt-2">Panel 550W + Inversor 1KW + Batería 100Ah. Instalación incluida en Matanzas. Ahorra $151 USD.</p>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-black">$799.00</span>
                <span className="text-sm line-through text-neutral-400">$950.00</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">-16%</span>
              </div>
              <Link href="/producto/kit-solar-completo-1kw" className="mt-4 inline-block bg-black text-white px-6 py-3 text-xs font-bold tracking-widest uppercase">Comprar kit</Link>
            </div>
            <div className="w-[160px] h-[160px] relative shrink-0 hidden lg:block">
              <Image src="https://i.ibb.co/7dpv0jPr/Whats-App-Image-2026-10-04-at-6-16-34-AM.jpg" alt="Kit solar" fill className="object-contain" />
            </div>
          </div>

          <div className="bg-black text-white p-6 lg:p-8 flex flex-col justify-center">
            <div className="text-[11px] font-bold tracking-widest uppercase text-neutral-400">Zona Gamer & Streaming</div>
            <h3 className="text-xl font-black tracking-tight mt-1">Equipa tu setup</h3>
            <p className="text-sm text-neutral-300 mt-2">Mandos PS5, TV Box 4K, audífonos y accesorios PC con garantía.</p>
            <div className="mt-4 flex gap-2">
              <Link href="/categoria/zona-gamer" className="bg-white text-black px-5 py-2.5 text-xs font-bold tracking-widest uppercase">Zona Gamer</Link>
              <Link href="/categoria/tv-accesorios" className="border border-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black">TV Box</Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-6 mt-8">
        <ProductGrid products={newArrivals} title="Nuevas llegadas" subtitle="Últimas incorporaciones — stock limitado" />
      </section>

      {/* MOVILES + REDES */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-6 mt-8 grid lg:grid-cols-2 gap-6">
        <ProductGrid products={moviles} title="Móviles más buscados" subtitle="Sellados, libres, garantía tienda" />
        <ProductGrid products={fotovoltaico} title="Fotovoltaico esencial" subtitle="Lo que no puede faltar para tu sistema" />
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-6 mt-8">
        <div className="bg-white border border-neutral-200 p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-sm font-black tracking-widest uppercase">Únete y obtén 5% en tu primera compra</h3>
            <p className="text-sm text-neutral-600 mt-1">Recibe alertas de nuevos lotes y ofertas exclusivas por WhatsApp.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-2">
            <input placeholder="Tu WhatsApp +53 5XXXXXXX" className="flex-1 lg:w-[320px] border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black" />
            <button className="bg-black text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-neutral-800">Suscribirme</button>
          </div>
        </div>
      </section>

      <div className="h-8" />
    </div>
  );
}
