import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(usd: number, currency: 'USD' | 'CUP' | 'MLC' = 'USD') {
  if (currency === 'CUP') return `${Math.round(usd * 420).toLocaleString('es-CU')} CUP`;
  if (currency === 'MLC') return `${usd.toFixed(2)} MLC`;
  return `$${usd.toFixed(2)}`;
}

export function discountPercent(price: number, compareAt: number) {
  return Math.round(((compareAt - price) / compareAt) * 100);
}
