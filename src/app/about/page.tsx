import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/data';
export const metadata: Metadata = { title: `About Us — ${BRAND.name}` };

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden bg-gray-900">
        <Image src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=1400&q=80&auto=format&fit=crop"
          alt="About MercheKing" fill className="object-cover opacity-40" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[var(--accent)] text-xs font-bold tracking-widest uppercase mb-2">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-black">About Us</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="text-2xl font-black mb-4">We Are Proud of the Quality and Accuracy of Our Products</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We are proud of the quality and accuracy of our customers&apos; goods and services, and we are here to make your online shopping experience outstanding. On our online store, there is a great selection of premium custom apparel — from classic t-shirts and fleece hoodies to zip hoodies, tank tops, and hats — all crafted with care and made specifically for you.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              With many years of experience in the direct-to-garment and print-on-demand industry, we have refined our process to deliver consistent quality across every order. Every product is made to order — meaning no excess inventory, no waste, and a garment built for you the moment you check out.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We believe premium apparel should be accessible. That&apos;s why we offer free shipping on every US order, straightforward returns on defective items, and a team that&apos;s reachable by email or phone when you need us.
            </p>
            <Link href="/catalog" className="btn-primary">Shop Our Collection</Link>
          </div>
          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80&auto=format&fit=crop"
                alt="Premium custom apparel" fill className="object-cover" />
            </div>
            {[
              { num: '9+',    label: 'Product Categories' },
              { num: '100%',  label: 'Made to Order' },
              { num: 'Free',  label: 'US Shipping on Every Order' },
              { num: '30',    label: 'Day Return Window' },
            ].map(({ num, label }) => (
              <div key={label} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <p className="text-3xl font-black text-[var(--accent)]">{num}</p>
                <p className="text-sm font-bold text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
