import type { Product } from '@/data/products';

export function formatPriceLine(price: number) {
  if (price === 0) return 'Consultar';
  return `$${price.toFixed(2)} USD`;
}

export function buildCartWhatsAppMessage(items: Array<Product & { quantity: number }>, shipping: number, siteUrl: string) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const hasConsult = items.some((i) => i.price === 0);
  const grandTotal = total + shipping;

  const header = `Hola YACELYO, quiero realizar el siguiente pedido:`;
  const separator = `----------------------------------------`;

  const productLines = items
    .map((item, idx) => {
      const pricePart = item.price === 0 ? 'Consultar' : `$${item.price.toFixed(2)} USD`;
      const lineTotal = item.price === 0 ? '' : ` = $${(item.price * item.quantity).toFixed(2)} USD`;
      const link = `${siteUrl}/producto/${item.slug}`;
      return `${idx + 1}. ${item.title}\n   Cantidad: ${item.quantity} x ${pricePart}${lineTotal}\n   Ver: ${link}`;
    })
    .join('\n\n');

  const summaryLines = [];
  if (hasConsult) {
    summaryLines.push(`Subtotal: A confirmar (productos a consultar)`);
  } else {
    summaryLines.push(`Subtotal: $${total.toFixed(2)} USD (${Math.round(total * 420).toLocaleString('es-CU')} CUP)`);
  }
  summaryLines.push(`Envio Matanzas: $${shipping.toFixed(2)} USD`);
  if (hasConsult) {
    summaryLines.push(`Total: A confirmar por WhatsApp`);
  } else {
    summaryLines.push(`Total: $${grandTotal.toFixed(2)} USD (${Math.round(grandTotal * 420).toLocaleString('es-CU')} CUP)`);
  }

  const footer = `Datos de entrega:\nNombre:\nDireccion exacta:\nTelefono:\nMetodo de pago: USD / MLC / CUP / Zelle\n\nQuedo atento a confirmacion. Gracias!`;

  const full = `${header}\n\n${productLines}\n\n${separator}\n${summaryLines.join('\n')}\n${separator}\n\n${footer}`;

  return full;
}

export function buildProductWhatsAppMessage(product: Product, siteUrl: string) {
  const price = product.price === 0 ? 'Consultar' : `$${product.price.toFixed(2)} USD (${Math.round(product.price * 420).toLocaleString('es-CU')} CUP)`;
  const link = `${siteUrl}/producto/${product.slug}`;
  return `Hola YACELYO, me interesa este producto:\n\n${product.title}\nPrecio: ${price}\nSKU: ${product.sku}\nVer: ${link}\n\n¿Está disponible? Quisiera confirmar detalles de envio y pago.`;
}

export function getWhatsAppLink(phone: string, message: string) {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}
