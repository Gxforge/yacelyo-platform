import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

// Cloudflare D1 schema for YACELYO
export const categories = sqliteTable('categories', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  count: integer('count').notNull(),
  image: text('image')
});

export const products = sqliteTable('products', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
  categoryId: text('category_id').notNull().references(() => categories.id),
  price: real('price').notNull(),
  compareAtPrice: real('compare_at_price'),
  sku: text('sku').notNull().unique(),
  stock: integer('stock').notNull().default(0),
  images: text('images', { mode: 'json' }).notNull(),
  specs: text('specs', { mode: 'json' }),
  tags: text('tags', { mode: 'json' }),
  featured: integer('featured', { mode: 'boolean' }).default(false),
  badge: text('badge'),
  createdAt: text('created_at').default('(datetime(\'now\'))')
});

export const orders = sqliteTable('orders', {
  id: text('id').primaryKey(),
  customerName: text('customer_name').notNull(),
  customerPhone: text('customer_phone').notNull(),
  customerAddress: text('customer_address').notNull(),
  items: text('items', { mode: 'json' }).notNull(),
  subtotal: real('subtotal').notNull(),
  shipping: real('shipping').notNull(),
  total: real('total').notNull(),
  currency: text('currency').notNull(),
  paymentMethod: text('payment_method').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: text('created_at').default('(datetime(\'now\'))')
});

export const exchangeRates = sqliteTable('exchange_rates', {
  id: text('id').primaryKey(),
  usdToCup: real('usd_to_cup').notNull(),
  usdToMlc: real('usd_to_mlc').notNull(),
  updatedAt: text('updated_at').notNull()
});
