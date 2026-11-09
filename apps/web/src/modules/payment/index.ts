// Payment module - Cuba optimized
export type PaymentMethod = 'usd_cash' | 'mlc' | 'cup_transfer' | 'zelle' | 'tropipay' | 'qvapay';

export const paymentMethods = [
  { id: 'usd_cash', name: 'Efectivo USD', description: 'Pago contra entrega en Matanzas', fee: 0 },
  { id: 'mlc', name: 'Tarjeta MLC', description: 'Transferencia a tarjeta MLC', fee: 0 },
  { id: 'cup_transfer', name: 'Transfermóvil CUP', description: '1 USD = 420 CUP', fee: 0 },
  { id: 'zelle', name: 'Zelle', description: 'Transferencia Zelle sin comisión', fee: 0 },
  { id: 'tropipay', name: 'Tropipay', description: 'Pasarela internacional recomendada', fee: 0.03 },
  { id: 'qvapay', name: 'QvaPay', description: 'Alternativa cubana', fee: 0.02 }
] as const;

export function calculateTotal(subtotal: number, method: PaymentMethod, shipping: number) {
  const fee = paymentMethods.find((m) => m.id === method)?.fee || 0;
  return subtotal * (1 + fee) + shipping;
}
