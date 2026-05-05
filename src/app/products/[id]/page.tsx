import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductById, products } from '@/lib/data';
import type { Metadata } from 'next';
import AddToCartButton from './AddToCartButton';

export function generateStaticParams() {
  return products.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = getProductById(id);
  if (!p) return { title: 'Product Not Found' };
  return { title: `${p.name} — MercheKing`, description: p.description, openGraph: { images: [{ url: p.image }] } };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/catalog?category=${product.categorySlug}`} className="hover:text-[var(--accent)] transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium truncate">{product.name}</span>
      </nav>

      {/* Product layout — exactly like screenshot: big image left, details right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
        {/* Image */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          <Image src={product.image} alt={product.imageAlt} fill priority
            sizes="(max-width:1024px)100vw,50vw" className="object-cover" />
          {product.badge && (
            <span className={`badge absolute top-4 left-4 text-sm px-3 py-1 ${product.badge === 'New' ? 'badge-new' : ''}`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-start">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-bold">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-black mb-2 leading-tight">{product.name}</h1>
          <p className="text-2xl font-black text-gray-900 mb-1">${product.price.toFixed(2)} <span className="text-sm font-normal text-gray-400">USD</span></p>
          <p className="text-green-600 text-sm font-semibold mb-5">✓ Free Shipping</p>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6">{product.description}</p>

          {/* Colors */}
          {product.colors.length > 0 && (
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-700">
                Color — <span className="font-normal text-gray-500">{product.colors[0].name}</span>
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {product.colors.map((c, i) => (
                  <div key={c.name} title={c.name}
                    className={`color-swatch ${i === 0 ? 'active' : ''}`}
                    style={{ background: c.hex, outline: c.hex === '#FFFFFF' ? '1px solid #e5e5e5' : 'none' }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700">Size</p>
                <button className="text-xs text-[var(--accent)] underline font-semibold">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s, i) => (
                  <div key={s} className={`size-chip ${i === 1 ? 'active' : ''}`}>{s}</div>
                ))}
              </div>
            </div>
          )}

          {/* Qty + Add to cart — matches screenshot layout */}
          <AddToCartButton productName={product.name} price={product.price} />

          {/* Trust bar */}
          <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-3">
            {[
              { icon: '🔒', text: 'Secure Checkout' },
              { icon: '🚚', text: 'Free US Shipping' },
              { icon: '↩️', text: '30-Day Returns' },
              { icon: '✅', text: 'Made to Order' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <span>{icon}</span>
                <span className="text-xs text-gray-500 font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* Accordion details */}
          <div className="mt-6 border-t border-gray-100">
            {[
              { label: 'How it\'s made', body: 'Your order is sent directly to our print partner after checkout. Each garment is DTG-printed on certified organic cotton using water-based inks. Production takes 2–5 business days before shipping.' },
              { label: 'Shipping & Delivery', body: 'Orders are processed within 2–4 business days. Standard delivery is 5–10 business days after production. You will receive a tracking number by email when your order ships.' },
              { label: 'Returns & Refunds', body: 'We accept returns within 30 days of delivery on items with manufacturing defects. Items must be unworn and unwashed. Size/color exchanges and buyer\'s remorse are not eligible for return due to the on-demand nature of production.' },
            ].map(({ label, body }) => (
              <details key={label} className="border-b border-gray-100 py-3 group">
                <summary className="flex justify-between items-center cursor-pointer text-sm font-bold text-gray-800 list-none">
                  {label}
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm text-gray-500 leading-relaxed mt-3">{body}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="border-t border-gray-100 pt-6">
        <Link href="/" className="text-sm text-gray-400 hover:text-[var(--accent)] transition-colors flex items-center gap-2 font-medium">
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
}
