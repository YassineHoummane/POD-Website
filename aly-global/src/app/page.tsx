'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/data';

/* ─── Image Placeholder Component ─────────────────────────────────────────── */
function ImagePlaceholder({
  label,
  aspectClass = 'aspect-[3/4]',
}: {
  label: string;
  aspectClass?: string;
}) {
  return (
    <div className={`${aspectClass} image-placeholder w-full`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* Minimalist garment icon */}
        <svg
          className="w-12 h-12 text-gray-300 mb-3"
          fill="none"
          viewBox="0 0 48 48"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path d="M14 8 L6 16 L12 19 L12 40 L36 40 L36 19 L42 16 L34 8 Q30 14 24 14 Q18 14 14 8Z" />
        </svg>
        <p className="font-body text-[10px] text-center text-gray-400 tracking-wider uppercase leading-relaxed max-w-[120px]">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ─── Product Card ─────────────────────────────────────────────────────────── */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
  return (
    <Link
      href={`/products/${product.id}`}
      className={`product-card animate-fade-up ${delays[index % 4]}`}
      aria-label={`View ${product.name}`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <div className="transform group-hover:scale-105 transition-transform duration-500 ease-out">
          <ImagePlaceholder label={product.imagePlaceholder} aspectClass="aspect-[3/4]" />
        </div>
      </div>

      {/* Details */}
      <div className="pt-4 pb-2">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-xl font-semibold text-gray-900 leading-tight group-hover:text-gray-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="font-body text-sm text-gray-900 mt-2 font-medium">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

/* ─── Home Page ─────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const fetchProducts = useCallback(async (q: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data: Product[] = await res.json();
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  /* Initial load */
  useEffect(() => {
    fetchProducts('').then(() => setInitialized(true));
  }, [fetchProducts]);

  /* Debounced search */
  useEffect(() => {
    if (!initialized) return;
    const timer = setTimeout(() => {
      fetchProducts(query);
    }, 280);
    return () => clearTimeout(timer);
  }, [query, initialized, fetchProducts]);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] lg:min-h-[85vh]">
            {/* Text side */}
            <div className="flex flex-col justify-center py-20 lg:py-0 pr-0 lg:pr-16 order-2 lg:order-1">
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gray-400 mb-6">
                New Collection — 2026
              </p>
              <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] font-semibold text-gray-900 mb-8">
                Wear
                <br />
                <em className="font-light">Your</em>
                <br />
                Story.
              </h1>
              <p className="font-body text-base text-gray-500 leading-relaxed max-w-xs mb-10">
                Premium Custom Apparel & Design. Every piece crafted on demand — no waste, no
                compromise, nothing mass-produced.
              </p>
              <div className="flex items-center gap-4">
                <a href="#products" className="btn-primary inline-block">
                  Shop Now
                </a>
                <a
                  href="/policies/refund"
                  className="font-body text-[11px] tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-200 underline underline-offset-4"
                >
                  Our Promise
                </a>
              </div>
            </div>

            {/* Hero image side */}
            <div className="order-1 lg:order-2 relative">
              <div className="h-[50vh] lg:h-full lg:absolute lg:inset-0 image-placeholder">
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
                  <p className="font-body text-xs text-gray-400 tracking-[0.25em] uppercase">
                    Image Placeholder: Hero Apparel Shot
                  </p>
                </div>
              </div>
              {/* Decorative tag */}
              <div className="absolute bottom-6 left-6 bg-white px-4 py-3 border border-gray-200 hidden lg:block">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gray-400">
                  Print on Demand
                </p>
                <p className="font-display text-base font-semibold text-gray-900 mt-0.5">
                  Made for You
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Section ─────────────────────────────────────────────────── */}
      <section id="products" className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gray-400 mb-2">
              Collection
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-gray-900">
              All Products
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <input
              id="search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or category…"
              className="w-full font-body text-sm text-gray-900 bg-white border border-gray-200 
                         focus:border-gray-900 focus:outline-none transition-colors duration-200
                         py-3 pl-4 pr-10 placeholder:text-gray-400"
              aria-label="Search products by name or category"
            />
            {/* Search icon */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              {loading ? (
                <div className="w-4 h-4 border border-gray-400 border-t-gray-900 rounded-full animate-spin" />
              ) : (
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Results status */}
        {query && (
          <p className="font-body text-sm text-gray-400 mb-8 -mt-6">
            {results.length === 0
              ? 'No products found.'
              : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
          </p>
        )}

        {/* Product Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {results.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          !loading && (
            <div className="text-center py-24 border border-dashed border-gray-200">
              <p className="font-display text-2xl text-gray-300 mb-2">Nothing here.</p>
              <p className="font-body text-sm text-gray-400">
                Try a different search term.
              </p>
            </div>
          )
        )}
      </section>

      {/* ── Brand Bar ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-b border-gray-100 bg-gray-950 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gray-500 mb-3">
            Our Commitment
          </p>
          <p className="font-display text-3xl lg:text-4xl font-light text-white max-w-2xl mx-auto leading-snug">
            Every item is made specifically for you. <em>No overstock, ever.</em>
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-10 text-gray-500">
            {['100% Organic Cotton', 'Print on Demand', 'Sustainable Production', '30-Day Returns'].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-600 rounded-full block" />
                  <span className="font-body text-xs tracking-wider uppercase">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
