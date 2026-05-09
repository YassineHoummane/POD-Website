'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product, HERO_IMAGE, products, getFeaturedProducts, categories } from '@/lib/data';

/* ── small product card ──────────────────────────────────────────────────── */
function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <Link href={`/products/${p.id}`} className="product-card group fade-in" style={{ animationDelay: `${i * 80}ms` }}>
      <div className="card-img relative overflow-hidden bg-gray-100 aspect-square mb-3">
        <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width:640px)50vw,25vw" className="object-cover" />
        {p.badge && (
          <span className={`badge absolute top-2 left-2 ${p.badge === 'New' ? 'badge-new' : ''}`}>{p.badge}</span>
        )}
      </div>
      <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wider">{p.category}</p>
      <h3 className="text-[14px] font-bold text-gray-900 leading-tight mb-1 group-hover:text-[var(--accent)] transition-colors">{p.name}</h3>
      <p className="text-sm font-bold">${p.price.toFixed(2)}</p>
    </Link>
  );
}

/* ── home page ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [query, setQuery]     = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [ready, setReady]     = useState(false);
  const featured = getFeaturedProducts();

  const doSearch = useCallback(async (q: string) => {
    setLoading(true);
    try {
      const r = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      setResults(await r.json());
    } catch { setResults([]); } finally { setLoading(false); }
  }, []);

  useEffect(() => { doSearch('').then(() => setReady(true)); }, [doSearch]);
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => doSearch(query), 280);
    return () => clearTimeout(t);
  }, [query, ready, doSearch]);

  const marquee = ['Free Shipping on All Orders', 'Made to Order', '30-Day Returns', 'Secure Checkout', 'Premium Quality Apparel'];
  const mqStr = marquee.map(s => `✦  ${s}  `).join('').repeat(4);

  return (
    <>
      {/* ═══════ HERO — full-width dark overlay, matches screenshot ═══════ */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_IMAGE} alt="MercheKing premium apparel" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="section-eyebrow text-orange-400 mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Premium Custom Apparel &amp; Design
          </h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Introducing our range of innovative custom apparel designed to simplify your style and boost your confidence.
            Shop our store today and enjoy premium quality made specifically for you.
          </p>
          <Link href="/catalog" className="btn-accent">Discover Our Collections</Link>
        </div>
      </section>

      {/* ═══════ MARQUEE STRIP ═══════════════════════════════════════════ */}
      <div className="marquee-wrap py-3 select-none" aria-hidden>
        <div className="marquee-track text-gray-400 text-[11px] tracking-widest uppercase font-semibold">
          {mqStr}
        </div>
      </div>

      {/* ═══════ CATEGORY GRID ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-14">
        <div className="text-center mb-10">
          <p className="section-eyebrow">Shop By Category</p>
          <h2 className="text-3xl font-black">All Collections</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <Link key={cat.slug} href={`/catalog?category=${cat.slug}`}
              className="group relative overflow-hidden aspect-square bg-gray-100 rounded block">
              <Image src={cat.image} alt={cat.name} fill sizes="(max-width:640px)50vw,16vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors" />
              <p className="absolute inset-0 flex items-center justify-center text-white font-black text-sm text-center px-2 leading-tight">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════ SPLIT FEATURE — image left, text right ══════════════════ */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[var(--cream)] p-8 md:p-12">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="https://i.postimg.cc/BQgdrF0J/Pngtree-stylish-t-shirt-collection-on-wooden-20768473.png"
              alt="Upgrade your wardrobe" fill sizes="(max-width:768px)100vw,50vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="section-eyebrow">Premium Quality</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 italic leading-tight">
              Upgrade Your Wardrobe<br />TODAY
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Every garment in our store is crafted on demand from certified organic cotton and premium fleece blends.
              No overstock. No mass production. Just premium apparel made for you.
            </p>
            <Link href="/catalog" className="btn-primary self-start">Discover Our Collections</Link>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED PRODUCT SPOTLIGHTS (alternating, like screenshot) */}
      {featured.map((product, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section key={product.id} className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}>
              {/* Text */}
              <div className={`${isEven ? 'md:text-right md:order-first' : ''} flex flex-col ${isEven ? 'md:items-end' : ''}`}>
                <p className="section-eyebrow">{product.category}</p>
                <h2 className="text-2xl md:text-3xl font-black mb-3">{product.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">{product.description}</p>
                <Link href={`/products/${product.id}`} className="btn-outline self-start">
                  Discover More
                </Link>
              </div>
              {/* Image */}
              <Link href={`/products/${product.id}`} className="group relative overflow-hidden bg-gray-100 aspect-[4/3] block">
                <Image src={product.image} alt={product.imageAlt} fill
                  sizes="(max-width:768px)100vw,50vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500" />
                {product.badge && <span className={`badge absolute top-3 left-3 ${product.badge === 'New' ? 'badge-new' : ''}`}>{product.badge}</span>}
              </Link>
            </div>
          </section>
        );
      })}

      {/* ═══════ FULL CATALOG SEARCH + GRID ══════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-14 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-eyebrow">All Products</p>
            <h2 className="text-3xl font-black">Shop Everything</h2>
          </div>
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <input type="search" value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full border border-gray-300 text-sm px-4 py-3 pr-9 focus:outline-none focus:border-gray-800 bg-white" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {loading
                ? <div className="w-4 h-4 border-2 border-gray-200 border-t-gray-800 rounded-full animate-spin" />
                : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>}
            </div>
          </div>
        </div>
        {query && <p className="text-sm text-gray-400 mb-6">{results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;</p>}
        {results.length > 0
          ? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
              {results.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
            </div>
          : !loading && <div className="text-center py-20 border border-dashed border-gray-200">
              <p className="text-gray-400 font-bold text-lg">No products found.</p>
              <button onClick={() => setQuery('')} className="btn-outline mt-4 text-sm">Clear Search</button>
            </div>
        }
        <div className="text-center mt-12">
          <Link href="/catalog" className="btn-primary">View All Products</Link>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ════════════════════════════════════════════ */}
      <section className="bg-[var(--black)] text-white py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[var(--accent)] text-xs font-bold tracking-widest uppercase mb-2">Our Promise</p>
            <h2 className="text-3xl font-black">Why Shop With Us?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚚', title: 'Free US Shipping', body: 'Every order ships free across the entire United States. No minimums, no hidden fees.' },
              { icon: '👕', title: 'Made to Order', body: 'Every item is printed specifically for you after you order. Zero overstock, zero waste.' },
              { icon: '↩️', title: '30-Day Returns', body: 'Something wrong with your order? We make it right — full refund on defective items, no hassle.' },
              { icon: '🔒', title: 'Secure Checkout', body: 'Your payment data is encrypted and handled by industry-leading processors. We never store card details.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-black text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
