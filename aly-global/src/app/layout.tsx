import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'ALY GLOBAL LLC — Premium Custom Apparel & Design',
  description:
    'Premium custom apparel and print-on-demand design. Shop exclusive tees, hoodies, and sweatshirts crafted for modern living.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo / Brand */}
              <Link
                href="/"
                className="flex flex-col leading-none group"
                aria-label="ALY GLOBAL LLC — Home"
              >
                <span className="font-display text-xl lg:text-2xl font-semibold tracking-widest uppercase text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                  ALY GLOBAL
                </span>
                <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gray-400 mt-0.5">
                  LLC
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                <Link href="/" className="nav-link">
                  Shop
                </Link>
                <Link href="/policies/refund" className="nav-link">
                  Refund Policy
                </Link>
                <Link href="/policies/privacy" className="nav-link">
                  Privacy Policy
                </Link>
                <Link href="/policies/terms" className="nav-link">
                  Terms of Service
                </Link>
              </nav>

              {/* Mobile Nav */}
              <nav className="flex md:hidden items-center gap-5" aria-label="Mobile navigation">
                <Link href="/" className="nav-link text-xs">Shop</Link>
                <Link href="/policies/refund" className="nav-link text-xs">Refund</Link>
                <Link href="/policies/privacy" className="nav-link text-xs">Privacy</Link>
                <Link href="/policies/terms" className="nav-link text-xs">Terms</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Brand Column */}
              <div className="col-span-1">
                <p className="font-display text-2xl font-semibold tracking-widest uppercase text-white mb-3">
                  ALY GLOBAL
                </p>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  Premium Custom Apparel & Design.
                </p>
              </div>

              {/* Policies Column */}
              <div>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">
                  Policies
                </p>
                <ul className="space-y-3">
                  <li>
                    <Link href="/policies/refund" className="footer-link">
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/policies/privacy" className="footer-link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/policies/terms" className="footer-link">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">
                  Contact
                </p>
                <address className="not-italic font-body text-sm text-gray-400 leading-relaxed space-y-1">
                  <p>ALY GLOBAL LLC</p>
                  <p>1209 MOUNTAIN ROAD PL NE STE R</p>
                  <p>ALBUQUERQUE, NM 87110</p>
                  <a
                    href="mailto:support@alyglobal.com"
                    className="footer-link mt-3 inline-block"
                  >
                    support@alyglobal.com
                  </a>
                </address>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
              <p className="font-body text-xs text-gray-600">
                © 2026 ALY GLOBAL LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
