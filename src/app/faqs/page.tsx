import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/data';
export const metadata: Metadata = { title: `FAQs — ${BRAND.name}` };

const faqs = [
  { q: 'When will my order ship?', a: 'Orders are produced within 2–4 business days, then shipped via standard carriers. Total delivery time is typically 7–14 business days within the US.' },
  { q: 'Do you offer free shipping?', a: 'Yes — free standard shipping on every order within the United States. No minimum purchase required.' },
  { q: 'Can I return or exchange my order?', a: 'We accept returns within 30 days of delivery for items with manufacturing defects, printing errors, or wrong items. Because every product is made to order, we cannot accept returns for sizing issues or buyer\'s remorse. See our full Return & Refund Policy for details.' },
  { q: 'My order arrived damaged. What should I do?', a: `Email us at ${BRAND.email} with your order number and a photo of the damage within 30 days of delivery. We will send a replacement or issue a full refund promptly.` },
  { q: 'What sizes do you offer?', a: 'Most garments are available from XS to 3XL. Each product page includes a size guide with exact measurements. We recommend checking measurements rather than ordering your usual size, as fits vary by style.' },
  { q: 'How do I track my order?', a: 'Once your order ships, you will receive a confirmation email with a tracking number. You can also visit our Track Your Order page at any time.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), and PayPal. All transactions are secured with SSL encryption.' },
  { q: 'Can I change or cancel my order?', a: 'Orders are sent to production quickly. Contact us immediately at ' + BRAND.email + ' if you need to make a change — we will do our best but cannot guarantee modifications after production has begun.' },
  { q: 'Are your garments ethically made?', a: 'Yes. We source from print-on-demand partners who use GOTS-certified organic cotton and water-based inks. Made-to-order production eliminates waste from unsold inventory.' },
  { q: 'How do I contact customer support?', a: `Email: ${BRAND.email} | Phone: ${BRAND.phone} | We respond to all inquiries within 2 business days.` },
];

export default function FAQsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-8 py-14">
      <p className="section-eyebrow">Support</p>
      <h1 className="text-4xl font-black mb-3">Frequently Asked Questions</h1>
      <p className="text-gray-400 text-sm mb-10">Can&apos;t find an answer? <a href={`mailto:${BRAND.email}`} className="text-[var(--accent)] underline">Email us directly.</a></p>

      <div className="divide-y divide-gray-100 border-t border-gray-100">
        {faqs.map(({ q, a }) => (
          <details key={q} className="group py-5">
            <summary className="flex justify-between items-center cursor-pointer font-bold text-gray-900 text-sm list-none gap-4">
              {q}
              <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="text-sm text-gray-500 leading-relaxed mt-3 pr-6">{a}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 border border-gray-100 text-center">
        <p className="font-bold text-gray-800 mb-1">Still have questions?</p>
        <p className="text-sm text-gray-500 mb-4">Our team is here to help. Reach out and we&apos;ll respond within 2 business days.</p>
        <Link href="/contact" className="btn-primary">Contact Us</Link>
      </div>
    </div>
  );
}
