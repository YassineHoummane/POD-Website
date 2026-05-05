'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { products, categories } from '@/lib/data';

function CatalogContent() {
  const sp = useSearchParams();
  const initCat = sp.get('category') ?? 'all';
  const [activeCat, setActiveCat] = useState(initCat);
  const [sort, setSort] = useState('default');

  const filtered = useMemo(() => {
    let p = activeCat === 'all' ? products : products.filter(x => x.categorySlug === activeCat);
    if (sort === 'low')  p = [...p].sort((a, b) => a.price - b.price);
    if (sort === 'high') p = [...p].sort((a, b) => b.price - a.price);
    return p;
  }, [activeCat, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="mb-8">
        <p className="text-xs font-bold text-[var(--accent)] tracking-widest uppercase mb-1">Shop</p>
        <h1 className="text-3xl font-black">All Collections</h1>
      </div>

      {/* Filters row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setActiveCat('all')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${activeCat === 'all' ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-700 hover:border-black'}`}>
            All
          </button>
          {categories.map(c => (
            <button key={c.slug} onClick={() => setActiveCat(c.slug)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${activeCat === c.slug ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-700 hover:border-black'}`}>
              {c.name}
            </button>
          ))}
        </div>
        <select value={sort} onChange={e => setSort(e.target.value)}
          className="border border-gray-300 text-sm px-3 py-2 bg-white focus:outline-none focus:border-gray-800">
          <option value="default">Sort: Featured</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        {filtered.map(p => (
          <Link key={p.id} href={`/products/${p.id}`} className="product-card group block">
            <div className="card-img relative overflow-hidden bg-gray-100 aspect-square mb-3">
              <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width:640px)50vw,25vw" className="object-cover" />
              {p.badge && <span className={`badge absolute top-2 left-2 ${p.badge === 'New' ? 'badge-new' : ''}`}>{p.badge}</span>}
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5 font-semibold">{p.category}</p>
            <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 group-hover:text-[var(--accent)] transition-colors">{p.name}</h3>
            <p className="text-sm font-black">${p.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-center py-20 text-gray-400 font-bold">No products in this category.</p>}
    </div>
  );
}

export default function CatalogPage() {
  return <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading…</div>}><CatalogContent /></Suspense>;
}
