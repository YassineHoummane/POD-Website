import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/data';
import ContactForm from './ContactForm';
export const metadata: Metadata = { title: `Contact Us — ${BRAND.name}` };

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
      <p className="section-eyebrow">Get In Touch</p>
      <h1 className="text-4xl font-black mb-3">Contact Information</h1>
      <p className="text-gray-500 text-sm mb-10 max-w-xl">
        If you have any questions, you can get in touch with us right away — whether you&apos;re looking for answers, trying to solve a problem, or simply wanting to let us know how we&apos;re performing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-5">
          {[
            { icon: '✉️', title: 'Email Us',      content: BRAND.email,   href: `mailto:${BRAND.email}`,   sub: 'We respond within 2 business days.' },
            { icon: '📞', title: 'Call Us',       content: BRAND.phone,   href: `tel:${BRAND.phone}`,       sub: 'Mon–Fri, 9am–5pm MST' },
            { icon: '🌐', title: 'Website',       content: BRAND.domain,  href: `https://${BRAND.domain}`,  sub: '' },
          ].map(({ icon, title, content, href, sub }) => (
            <div key={title} className="flex gap-4 p-5 bg-gray-50 border border-gray-100">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{title}</p>
                <a href={href} className="text-[var(--accent)] hover:underline font-semibold text-sm">{content}</a>
                {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
              </div>
            </div>
          ))}
          <div className="flex gap-4 p-5 bg-gray-50 border border-gray-100">
            <span className="text-2xl flex-shrink-0">📍</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Mailing Address</p>
              <p className="text-sm font-semibold text-gray-700">{BRAND.address}</p>
              <p className="text-xs text-gray-400 mt-1">For returns and written correspondence.</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
