'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product, HERO_IMAGE } from '@/lib/data';

/* ── Product card ────────────────────────────────────────────────────────── */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const delays = ['d1', 'd2', 'd3', 'd4'];
  return (
    <Link
      href={`/products/${product.id}`}
      className={`p-card group block fade-up ${delays[index % 4]}`}
      aria-label={`View ${product.name}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-[#f0ede6]">
        <div className="img-inner absolute inset-0">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        {/* Quick-view overlay */}
        <div className="card-cta absolute inset-0 flex items-end justify-center pb-5 pointer-events-none">
          <span
            className="font-body text-[10px] tracking-[0.2em] uppercase px-5 py-3"
            style={{ background: '#0d0d0b', color: '#fff' }}
          >
            View Product
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4">
        <p className="font-body text-[9px] tracking-[0.25em] uppercase mb-1" style={{ color: '#a8a39a' }}>
          {product.category}
        </p>
        <h3 className="font-display text-[22px] font-semibold leading-tight text-gray-900 group-hover:text-gray-500 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="font-body text-sm font-medium text-gray-900 mt-1.5">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

/* ── Home page ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [query, setQuery]     = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [ready, setReady]     = useState(false);

  const fetchProducts = useCallback(async (q: string) => {
    setLoading(true);
    try {
      const res  = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json() as Product[];
      setResults(data);
    } catch { setResults([]); }
    finally   { setLoading(false); }
  }, []);

  useEffect(() => { fetchProducts('').then(() => setReady(true)); }, [fetchProducts]);
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => fetchProducts(query), 280);
    return () => clearTimeout(t);
  }, [query, ready, fetchProducts]);

  const marqueeItems = [
    'Made to Order', 'Organic Cotton', '30-Day Returns', 'No Mass Production',
    'Secure Checkout', 'Handcrafted for You', 'Print on Demand', 'Zero Overstock',
  ];
  const marqueeStr = marqueeItems.map(i => `${i}  ·  `).join('').repeat(4);

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[88vh]">

            {/* Left: Copy */}
            <div className="lg:col-span-2 flex flex-col justify-center py-20 lg:py-0 lg:pr-10 order-2 lg:order-1">
              <p className="fade-up d1 font-body text-[10px] tracking-[0.35em] uppercase text-gray-400 mb-8">
                Collection 2026
              </p>
              <h1
                className="fade-up d2 font-display font-semibold leading-none text-gray-900 mb-8"
                style={{ fontSize: 'clamp(3.5rem,6.5vw,6rem)' }}
              >
                Wear<br />
                <em className="font-light italic">Your</em><br />
                Story.
              </h1>
              <p className="fade-up d3 font-body text-[15px] text-gray-500 leading-relaxed mb-10 max-w-[280px]">
                Premium custom apparel — printed on demand, built for you.
                Every piece is a one-off. Never mass-produced, never in stock.
              </p>
              <div className="fade-up d4 flex flex-wrap items-center gap-4">
                <a href="#collection" className="btn-primary">
                  Shop the Collection
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link href="/policies/refund" className="btn-ghost">Our Promise</Link>
              </div>
              <div className="fade-up d5 mt-10 flex flex-wrap gap-5">
                {[
                  { icon: '✦', text: 'Made specifically for you' },
                  { icon: '✦', text: '30-day return window' },
                ].map(({ icon, text }) => (
                  <p key={text} className="font-body text-[11px] text-gray-400 tracking-wide flex items-center gap-1.5">
                    <span className="text-gray-300">{icon}</span> {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="lg:col-span-3 order-1 lg:order-2 relative">
              <div className="h-[55vw] max-h-[600px] lg:h-full lg:absolute lg:inset-0 relative overflow-hidden bg-[#f0ede6]">
                <Image
                  src={HERO_IMAGE}
                  alt="ALY GLOBAL — Premium custom apparel collection"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 right-6 bg-white px-5 py-4 border border-gray-200 z-10">
                  <p className="font-body text-[8px] tracking-[0.3em] uppercase text-gray-400">Print on Demand</p>
                  <p className="font-display text-[18px] font-semibold text-gray-900 mt-0.5">Made For You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════════════════════ */}
      <div className="py-4 border-b border-gray-100 marquee-wrap select-none" aria-hidden>
        <div className="marquee-track font-body text-[10px] tracking-[0.25em] uppercase text-gray-400">
          {marqueeStr}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          COLLECTION — SEARCH + PRODUCTS
      ══════════════════════════════════════════════════════ */}
      <section id="collection" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

        {/* Header + search */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gray-400 mb-2">The Collection</p>
            <h2 className="font-display font-semibold text-gray-900" style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)' }}>
              All Products
            </h2>
          </div>
          <div className="relative w-full sm:w-72">
            <label htmlFor="search" className="sr-only">Search products</label>
            <input
              id="search"
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name or category…"
              className="w-full font-body text-[13px] text-gray-900 bg-white border border-gray-200
                         focus:border-gray-800 focus:outline-none transition-colors py-3 pl-4 pr-9
                         placeholder:text-gray-400"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              {loading
                ? <div className="w-3.5 h-3.5 border border-gray-300 border-t-gray-800 rounded-full animate-spin" />
                : <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
              }
            </div>
          </div>
        </div>

        {query && (
          <p className="font-body text-sm text-gray-400 -mt-6 mb-8">
            {results.length === 0
              ? 'No results found.'
              : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
          </p>
        )}

        {/* Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14">
            {results.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        ) : !loading && (
          <div className="text-center py-24 border border-dashed border-gray-200">
            <p className="font-display text-2xl text-gray-300 mt-4 mb-1">Nothing here.</p>
            <p className="font-body text-sm text-gray-400">Try a different search term.</p>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════
          OUR PROMISE
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#f7f5f1' }} className="py-20 lg:py-28 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-md mb-14">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gray-400 mb-2">Our Promise</p>
            <h2 className="font-display font-semibold leading-tight text-gray-900" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Why shop with ALY Global?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Made to Order', body: 'Nothing is pre-made or sitting in a warehouse. Your item is printed the moment you place your order — built for you, not for stock.' },
              { num: '02', title: '100% Organic Cotton', body: 'Every garment starts with certified organic cotton — softer, more breathable, and kinder to the planet than conventional fabrics.' },
              { num: '03', title: '30-Day Returns', body: "If there's a defect or production error, we make it right — full refund, no hassle. See our refund policy for full details." },
              { num: '04', title: 'Secure Checkout', body: 'Your payment is handled by industry-leading processors. We never store card details and never sell your personal information.' },
            ].map(({ num, title, body }) => (
              <div key={num} className="relative pt-2">
                <div className="step-num mb-2">{num}</div>
                <h3 className="font-display text-[22px] font-semibold text-gray-900 mb-3 -mt-2">{title}</h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-md mb-14">
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gray-400 mb-2">Process</p>
          <h2 className="font-display font-semibold leading-tight text-gray-900" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
            How your order works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          <div className="hidden md:block absolute top-[36px] left-[16.5%] right-[16.5%] h-px bg-gray-200" aria-hidden />
          {[
            { step: '1', title: 'You choose', body: 'Browse the collection and select your style, size, and quantity. Every product page includes a detailed size guide.' },
            { step: '2', title: 'We print', body: 'Your order goes straight to our print partner. Each piece is printed fresh using premium, eco-friendly inks on organic fabric.' },
            { step: '3', title: 'Delivered to you', body: "Your item is packed and shipped directly to your door. You'll receive a tracking number as soon as it ships." },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex flex-col items-start md:items-center md:text-center px-0 md:px-8 mb-12 md:mb-0">
              <div className="w-[52px] h-[52px] rounded-full border border-gray-900 flex items-center justify-center mb-6 bg-white relative z-10">
                <span className="font-display text-[22px] font-semibold text-gray-900">{step}</span>
              </div>
              <h3 className="font-display text-[22px] font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed max-w-[240px]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#0d0d0b' }} className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">Questions?</p>
            <h2 className="font-display font-light italic text-white leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
              We&apos;re here to help.
            </h2>
            <p className="font-body text-sm text-gray-400 mt-3 max-w-sm">
              Reach out before you order — sizing, materials, custom requests. A real person will reply.
            </p>
          </div>
          <a
            href="mailto:support@alyglobal.com"
            className="btn-primary"
            style={{ background: 'white', color: '#0d0d0b' }}
          >
            support@alyglobal.com
          </a>
        </div>
      </section>
    </>
  );
}
