import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { BRAND } from '@/lib/data';
import FooterNewsletter from './FooterNewsletter';

export const metadata: Metadata = {
  title: `${BRAND.name} — Premium Custom Apparel & Design`,
  description: 'Shop premium custom t-shirts, zip hoodies, tank tops, and hats. Print-on-demand — every piece made specifically for you.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body>
        {/* Announcement */}
        <div className="announce">Free Shipping Across the Entire United States</div>

        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-3 items-center h-16">
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/catalog" className="nav-link">All Collections</Link>
                <Link href="/catalog" className="nav-link">All Products</Link>
              </nav>
              <div className="flex md:hidden items-center">
                <span className="text-sm font-bold text-gray-700">≡</span>
              </div>
              <div className="flex justify-center">
                <Link href="/" className="brand-logo">{BRAND.name}<span className="brand-dot">.</span></Link>
              </div>
              <div className="flex items-center justify-end gap-6">
                <Link href="/contact" className="nav-link hidden md:block">Contact Information</Link>
                <button aria-label="Cart" className="text-gray-800 hover:text-[var(--accent)] transition-colors">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden border-t border-gray-100 overflow-x-auto">
            <div className="flex gap-4 px-4 py-2">
              {[['/', 'Home'], ['/catalog', 'Collections'], ['/about', 'About'], ['/contact', 'Contact'], ['/faqs', 'FAQs']].map(([href, label]) => (
                <Link key={href} href={href} className="nav-link text-xs whitespace-nowrap py-1">{label}</Link>
              ))}
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 mt-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-14 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div>
                <p className="text-white font-bold text-xs mb-5 uppercase tracking-widest">Customer Care</p>
                <Link href="/track-order"       className="footer-link">Track Your Order</Link>
                <Link href="/faqs"              className="footer-link">FAQs</Link>
                <Link href="/about"             className="footer-link">About Us</Link>
                <Link href="/contact"           className="footer-link">Contact Us</Link>
              </div>
              <div>
                <p className="text-white font-bold text-xs mb-5 uppercase tracking-widest">Policies</p>
                <Link href="/contact"              className="footer-link">Contact Information</Link>
                <Link href="/policies/shipping"    className="footer-link">Shipping Policy</Link>
                <Link href="/policies/refund"      className="footer-link">Return &amp; Refund Policy</Link>
                <Link href="/policies/privacy"     className="footer-link">Privacy Policy</Link>
                <Link href="/policies/terms"       className="footer-link">Terms of Service</Link>
              </div>
              <div className="col-span-2">
                <p className="brand-logo text-white mb-1">{BRAND.name}<span className="brand-dot">.</span></p>
                <p className="text-gray-500 text-xs mb-5">{BRAND.tagline}</p>
                <p className="text-white font-bold text-xs mb-3 uppercase tracking-widest">Get In Touch</p>
                <p className="text-gray-400 text-sm mb-1">{BRAND.address}</p>
                <a href={`mailto:${BRAND.email}`} className="footer-link">{BRAND.email}</a>
                <a href={`tel:${BRAND.phone}`}    className="footer-link">{BRAND.phone}</a>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 pb-6 text-center">
              <p className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Subscribe to our Newsletter</p>
              <FooterNewsletter />
            </div>
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-xs">© {BRAND.year} {BRAND.name}. All rights reserved.</p>
              <div className="flex items-center gap-3">
                {['VISA','MC','AMEX','PAYPAL'].map(p => (
                  <span key={p} className="bg-gray-800 text-gray-400 text-[9px] font-bold px-2 py-1 rounded">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
