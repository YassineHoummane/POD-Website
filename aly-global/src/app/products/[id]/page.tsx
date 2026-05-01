import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductById, products } from '@/lib/data';
import type { Metadata } from 'next';
import AddToCartButton from './AddToCartButton';

/* ─── Static Params for SSG ─────────────────────────────────────────────────── */
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

/* ─── Metadata ───────────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: 'Product Not Found — ALY GLOBAL LLC' };
  return {
    title: `${product.name} — ALY GLOBAL LLC`,
    description: product.description,
  };
}

/* ─── Image Placeholder ──────────────────────────────────────────────────────── */
function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="image-placeholder aspect-square lg:aspect-[3/4] w-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <svg
          className="w-20 h-20 text-gray-300 mb-4"
          fill="none"
          viewBox="0 0 48 48"
          stroke="currentColor"
          strokeWidth={0.8}
        >
          <path d="M14 8 L6 16 L12 19 L12 40 L36 40 L36 19 L42 16 L34 8 Q30 14 24 14 Q18 14 14 8Z" />
        </svg>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gray-400 text-center px-8">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      {/* Breadcrumb */}
      <nav className="py-6 flex items-center gap-2" aria-label="Breadcrumb">
        <Link
          href="/"
          className="font-body text-[11px] tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-colors"
        >
          Shop
        </Link>
        <span className="text-gray-300 text-xs">/</span>
        <span className="font-body text-[11px] tracking-[0.2em] uppercase text-gray-400">
          {product.category}
        </span>
        <span className="text-gray-300 text-xs">/</span>
        <span className="font-body text-[11px] tracking-[0.2em] uppercase text-gray-900">
          {product.name}
        </span>
      </nav>

      {/* Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-24">
        {/* Image */}
        <div className="overflow-hidden">
          <ImagePlaceholder label={product.imagePlaceholder} />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center lg:py-10">
          {/* Category pill */}
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-4 inline-block">
            {product.category}
          </span>

          {/* Name */}
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight mb-6">
            {product.name}
          </h1>

          {/* Price */}
          <p className="font-body text-2xl font-medium text-gray-900 mb-8">
            ${product.price.toFixed(2)}{' '}
            <span className="text-sm font-normal text-gray-400 ml-1">USD</span>
          </p>

          {/* Description */}
          <p className="font-body text-base text-gray-600 leading-relaxed mb-10 max-w-sm">
            {product.description}
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-gray-200 mb-10" />

          {/* Size note */}
          <div className="mb-6">
            <p className="font-body text-xs tracking-[0.15em] uppercase text-gray-400 mb-3">
              Select Size
            </p>
            <div className="flex gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className="font-body text-xs w-10 h-10 border border-gray-200 text-gray-600 
                             hover:border-gray-900 hover:text-gray-900 transition-colors duration-150
                             focus:outline-none focus:ring-1 focus:ring-gray-900"
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <AddToCartButton productName={product.name} />

          {/* Trust signals */}
          <div className="mt-8 pt-8 border-t border-gray-100 space-y-2">
            {[
              '✦ Print-on-demand — made exclusively for you',
              '✦ 30-day return window on eligible items',
              '✦ Secure checkout via SSL encryption',
            ].map((item) => (
              <p key={item} className="font-body text-xs text-gray-400 tracking-wide">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="border-t border-gray-100 py-8">
        <Link
          href="/"
          className="font-body text-[11px] tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
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
