import { cn } from '@/lib/utils';

export function Badge({ children, variant = 'default', className }: { children: React.ReactNode; variant?: 'default' | 'sale' | 'new' | 'low'; className?: string }) {
  const styles = {
    default: 'bg-black text-white',
    sale: 'bg-red-600 text-white',
    new: 'bg-emerald-600 text-white',
    low: 'bg-amber-500 text-black'
  };
  return <span className={cn('px-2 py-1 text-[10px] font-bold uppercase tracking-widest', styles[variant], className)}>{children}</span>;
}
