import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'ALY GLOBAL LLC — Premium Custom Apparel & Design',
  description:
    'Premium custom apparel and print-on-demand design. Shop exclusive tees, hoodies, and sweatshirts — every piece made specifically for you.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">

        {/* ── Announcement Bar ──────────────────────────── */}
        <div className="announce">
          Every item made to order &nbsp;·&nbsp; Free exchanges on all orders &nbsp;·&nbsp; 30-day returns
        </div>

        {/* ── Sticky Header ─────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-3 items-center h-16 lg:h-[72px]">

              {/* Left nav */}
              <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
                <Link href="/" className="nav-link">Shop</Link>
                <Link href="/policies/refund" className="nav-link">Returns</Link>
              </nav>
              {/* Mobile left */}
              <nav className="flex md:hidden items-center gap-5">
                <Link href="/" className="nav-link">Shop</Link>
                <Link href="/policies/refund" className="nav-link">Returns</Link>
              </nav>

              {/* Centre logo */}
              <div className="flex justify-center">
                <Link href="/" aria-label="ALY GLOBAL LLC — Home" className="group text-center">
                  <div
                    className="font-display font-semibold tracking-widest uppercase group-hover:opacity-70 transition-opacity duration-200"
                    style={{ fontSize: 'clamp(15px,2vw,20px)', letterSpacing: '0.3em' }}
                  >
                    ALY GLOBAL
                  </div>
                  <div className="font-body text-[8px] tracking-[0.4em] uppercase text-gray-400 -mt-0.5">
                    LLC
                  </div>
                </Link>
              </div>

              {/* Right nav */}
              <nav className="hidden md:flex items-center justify-end gap-7" aria-label="Secondary">
                <Link href="/policies/privacy" className="nav-link">Privacy</Link>
                <Link href="/policies/terms" className="nav-link">Terms</Link>
              </nav>
              {/* Mobile right */}
              <nav className="flex md:hidden items-center justify-end gap-5">
                <Link href="/policies/privacy" className="nav-link">Privacy</Link>
              </nav>

            </div>
          </div>
        </header>

        {/* ── Page Content ──────────────────────────────── */}
        <main>{children}</main>

        {/* ── Footer ────────────────────────────────────── */}
        <footer style={{ background: '#0d0d0b' }} className="text-gray-400 mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
              {/* Brand */}
              <div className="md:col-span-2">
                <p
                  className="font-display font-semibold uppercase text-white mb-2"
                  style={{ letterSpacing: '0.28em', fontSize: '18px' }}
                >
                  ALY GLOBAL LLC
                </p>
                <p className="font-body text-[11px] tracking-widest uppercase text-gray-500 mb-5">
                  Premium Custom Apparel & Design
                </p>
                <p className="font-body text-sm text-gray-500 leading-relaxed max-w-xs">
                  Every piece in our store is printed on demand — made specifically
                  for you the moment you order. No overstock, no waste.
                </p>
              </div>

              {/* Policies */}
              <div>
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gray-600 mb-4">Policies</p>
                <ul className="space-y-3">
                  {([
                    ['/policies/refund',  'Refund Policy'],
                    ['/policies/privacy', 'Privacy Policy'],
                    ['/policies/terms',   'Terms of Service'],
                  ] as [string, string][]).map(([href, label]) => (
                    <li key={href}>
                      <Link href={href} className="footer-link">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gray-600 mb-4">Contact</p>
                <address className="not-italic font-body text-sm text-gray-500 leading-relaxed space-y-0.5">
                  <p>ALY GLOBAL LLC</p>
                  <p>1209 Mountain Road Pl NE Ste R</p>
                  <p>Albuquerque, NM 87110</p>
                </address>
                <a href="mailto:support@alyglobal.com" className="footer-link mt-3 inline-block text-gray-400">
                  support@alyglobal.com
                </a>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between gap-3">
              <p className="font-body text-xs text-gray-700">
                © 2026 ALY GLOBAL LLC. All rights reserved.
              </p>
              <p className="font-body text-xs text-gray-700">
                Governed by the laws of New Mexico, USA
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
