import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductById, products, searchProducts } from '@/lib/data';
import type { Metadata } from 'next';
import AddToCartButton from './AddToCartButton';

export function generateStaticParams() {
  return products.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: 'Product Not Found — ALY GLOBAL LLC' };
  return {
    title: `${product.name} — ALY GLOBAL LLC`,
    description: product.description,
    openGraph: { images: [{ url: product.image }] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = searchProducts(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">

      {/* Breadcrumb */}
      <nav className="py-6 flex items-center gap-2 text-gray-400" aria-label="Breadcrumb">
        <Link href="/" className="font-body text-[11px] tracking-[0.2em] uppercase hover:text-gray-900 transition-colors">
          Shop
        </Link>
        <span className="text-gray-200 text-xs">/</span>
        <Link
          href={`/?q=${encodeURIComponent(product.category)}`}
          className="font-body text-[11px] tracking-[0.2em] uppercase hover:text-gray-900 transition-colors"
        >
          {product.category}
        </Link>
        <span className="text-gray-200 text-xs">/</span>
        <span className="font-body text-[11px] tracking-[0.2em] uppercase text-gray-900 truncate max-w-[180px]">
          {product.name}
        </span>
      </nav>

      {/* Product layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 lg:gap-16 pb-24">

        {/* Image */}
        <div className="relative aspect-square lg:aspect-[4/5] w-full overflow-hidden bg-[#f0ede6]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>

        {/* Details — sticky on desktop */}
        <div className="lg:sticky lg:top-24 self-start">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-4">
            {product.category}
          </p>
          <h1
            className="font-display font-semibold text-gray-900 leading-none mb-5"
            style={{ fontSize: 'clamp(2.4rem,4vw,3.8rem)' }}
          >
            {product.name}
          </h1>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-body text-2xl font-medium text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="font-body text-sm text-gray-400">USD</span>
          </div>
          <p className="font-body text-[15px] text-gray-500 leading-relaxed mb-8 max-w-sm">
            {product.description}
          </p>

          <div className="w-10 h-px bg-gray-200 mb-8" />

          {/* Size selector */}
          <div className="mb-7">
            <div className="flex items-center justify-between mb-3">
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gray-500">Size</p>
              <Link
                href="/policies/refund"
                className="font-body text-[10px] tracking-[0.1em] uppercase text-gray-400 underline underline-offset-2 hover:text-gray-900 transition-colors"
              >
                Size Guide
              </Link>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button
                  key={size}
                  className="font-body text-xs h-11 border border-gray-200 text-gray-600
                             hover:border-gray-900 hover:text-gray-900 transition-colors duration-150
                             focus:outline-none focus:ring-1 focus:ring-gray-900"
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <AddToCartButton productName={product.name} />

          {/* Trust signals */}
          <div className="mt-7 pt-7 border-t border-gray-100 space-y-3">
            {[
              { icon: '✦', label: 'Made on demand',   sub: 'Printed specifically for your order' },
              { icon: '✦', label: '30-day returns',    sub: 'On defects & production errors' },
              { icon: '✦', label: 'Secure checkout',   sub: 'SSL encrypted · We never store card data' },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="text-gray-300 text-xs mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <p className="font-body text-[12px] font-medium text-gray-800">{label}</p>
                  <p className="font-body text-[11px] text-gray-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <details className="mt-7 pt-7 border-t border-gray-100 group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-body text-[11px] tracking-[0.15em] uppercase text-gray-700">
                How it&apos;s made
              </span>
              <svg className="w-3.5 h-3.5 text-gray-400 group-open:rotate-180 transition-transform duration-200"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="font-body text-sm text-gray-500 leading-relaxed mt-4">
              Your order is sent directly to our print partner after checkout. Each garment
              is DTG-printed on certified organic cotton using water-based inks. Production
              typically takes 2–5 business days before shipping.
            </p>
          </details>

          <details className="pt-5 pb-1 border-t border-gray-100 mt-4 group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-body text-[11px] tracking-[0.15em] uppercase text-gray-700">
                Shipping & delivery
              </span>
              <svg className="w-3.5 h-3.5 text-gray-400 group-open:rotate-180 transition-transform duration-200"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="font-body text-sm text-gray-500 leading-relaxed mt-4">
              Standard shipping: 3–7 business days after production. Expedited shipping
              available at checkout. Tracking provided via email when your order ships.
            </p>
          </details>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 py-16 lg:py-20">
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gray-400 mb-2">
            You might also like
          </p>
          <h2 className="font-display font-semibold text-gray-900 mb-10" style={{ fontSize: '2rem' }}>
            More {product.category}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            {related.map(p => (
              <Link key={p.id} href={`/products/${p.id}`} className="p-card group block">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#f0ede6]">
                  <div className="img-inner absolute inset-0">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="pt-3">
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-0.5">
                    {p.category}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-gray-900 group-hover:text-gray-500 transition-colors leading-tight">
                    {p.name}
                  </h3>
                  <p className="font-body text-sm font-medium text-gray-900 mt-1">
                    ${p.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back */}
      <div className="border-t border-gray-100 py-8">
        <Link
          href="/"
          className="font-body text-[11px] tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </Link>
      </div>
    </div>
  );
}
