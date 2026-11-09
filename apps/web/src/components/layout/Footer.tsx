import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 mt-12">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white text-black grid place-items-center font-black text-xs tracking-widest">YA</div>
              <div>
                <div className="text-white font-black tracking-[0.15em] text-sm">YACELYO</div>
                <div className="text-[10px] tracking-widest text-neutral-500">VENTAS DE TECNOLOGÍA</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-sm">
              Productos nuevos y originales, diversidad y disponibilidad. Siempre cumplimos nuestra palabra. Servicio de envío y garantía real en Matanzas, Cuba.
            </p>
            <div className="mt-4 text-xs text-neutral-500">
              <div>Calle 139A/140A y 142, Reparto Reynol García</div>
              <div>Pastorita, Matanzas — Cuba</div>
              <div className="mt-2">+53 58739063 — yacelyo.yacelyo@gmail.com</div>
            </div>
          </div>

          <div>
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Comprar</div>
            <div className="space-y-2 text-sm">
              <Link href="/categoria/fotovoltaico" className="block hover:text-white">Fotovoltaico</Link>
              <Link href="/categoria/moviles" className="block hover:text-white">Móviles</Link>
              <Link href="/categoria/redes" className="block hover:text-white">Redes y Routers</Link>
              <Link href="/categoria/laptop" className="block hover:text-white">Laptops</Link>
              <Link href="/categoria/pc-escritorio" className="block hover:text-white">PC Escritorio</Link>
            </div>
          </div>

          <div>
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Ayuda</div>
            <div className="space-y-2 text-sm">
              <Link href="/ayuda/envios" className="block hover:text-white">Envíos y entregas</Link>
              <Link href="/ayuda/pagos" className="block hover:text-white">Formas de pago</Link>
              <Link href="/ayuda/garantia" className="block hover:text-white">Garantía real</Link>
              <Link href="/ayuda/cambios" className="block hover:text-white">Cambios y devoluciones</Link>
              <Link href="/contacto" className="block hover:text-white">Contacto</Link>
            </div>
          </div>

          <div>
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Legal</div>
            <div className="space-y-2 text-sm">
              <Link href="/legal/privacidad" className="block hover:text-white">Privacidad</Link>
              <Link href="/legal/terminos" className="block hover:text-white">Términos</Link>
              <Link href="/tasas" className="block hover:text-white">Tasas de cambio</Link>
              <div className="pt-4 text-xs text-neutral-500">Horario: Lun-Vie 10:00-19:00<br />Sáb 10:00-16:00 — Dom cerrado</div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col lg:flex-row justify-between gap-4 text-xs text-neutral-500">
          <div>© 2026 YACELYO. Todos los derechos reservados. Plataforma migrada desde mitarjeta.biz hacia infraestructura propia.</div>
          <div className="flex gap-4">
            <span>Pagos: USD — MLC — CUP — Zelle — Tropipay</span>
            <span>Envíos: Matanzas 24H — Cuba 48/72H</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
