import { cn } from '@/lib/utils';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: Props) {
  const base = 'inline-flex items-center justify-center font-medium tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-black text-white hover:bg-neutral-800 focus:ring-black rounded-none',
    secondary: 'bg-neutral-100 text-black hover:bg-neutral-200 focus:ring-neutral-300 rounded-none',
    ghost: 'bg-transparent text-black hover:bg-neutral-100 rounded-none',
    outline: 'border border-black text-black hover:bg-black hover:text-white rounded-none'
  };
  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase tracking-widest',
    md: 'px-6 py-3 text-xs uppercase tracking-widest',
    lg: 'px-8 py-4 text-sm uppercase tracking-widest'
  };
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
