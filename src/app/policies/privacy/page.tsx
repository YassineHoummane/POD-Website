import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/data';
export const metadata: Metadata = { title: `Privacy Policy — ${BRAND.name}` };

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
      <p className="section-eyebrow">Policies</p>
      <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: May 5, 2026</p>
      <div className="policy-prose">
        <p>This Privacy Policy describes how <strong>{BRAND.name}</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operating at <a href={`https://${BRAND.domain}`}>{BRAND.domain}</a>, collects, uses, and protects your personal information when you visit our website or place an order.</p>

        <h2>Information We Collect</h2>
        <p>We collect only what is necessary to fulfill your order and provide our services:</p>
        <ul>
          <li><strong>Contact details:</strong> Name and email address, used for order confirmation and support.</li>
          <li><strong>Shipping address:</strong> Required to deliver your order.</li>
          <li><strong>Payment information:</strong> Processed securely by third-party payment processors (e.g., Stripe). We do <em>not</em> store full card numbers, CVVs, or banking credentials.</li>
          <li><strong>Order history:</strong> What you purchased and when, used to process returns and respond to support inquiries.</li>
          <li><strong>Usage data:</strong> Aggregate browsing data (pages visited, browser type) to improve site performance. No personally identifiable tracking.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To process and fulfill your orders</li>
          <li>To send order confirmations and shipping updates</li>
          <li>To respond to customer service inquiries</li>
          <li>To comply with legal obligations and prevent fraud</li>
          <li>To improve our website and product offering</li>
        </ul>

        <h2>We Do Not Sell Your Data</h2>
        <p><strong>{BRAND.name} does not sell, rent, trade, or otherwise transfer your personal information to third parties for their marketing or commercial purposes.</strong></p>

        <h2>Third-Party Service Providers</h2>
        <p>We share your data only with trusted service providers who need it to operate:</p>
        <ul>
          <li><strong>Print-on-demand fulfillment partners</strong> — receive your name and shipping address to produce and ship your order</li>
          <li><strong>Payment processors</strong> — handle transactions under their own security standards</li>
          <li><strong>Shipping carriers</strong> — receive your delivery address to complete delivery</li>
        </ul>
        <p>All third-party providers are contractually restricted to using your data solely to perform their designated service.</p>

        <h2>Data Retention</h2>
        <p>We retain order information as required by law and for legitimate business purposes (e.g., tax records, return processing). You may request deletion of your data at any time by contacting us, subject to legal retention requirements.</p>

        <h2>Your Rights</h2>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of non-essential communications at any time</li>
        </ul>

        <h2>Security</h2>
        <p>We use SSL/TLS encryption on all data transmitted through our site. While no method of internet transmission is 100% secure, we apply industry-standard safeguards to protect your information.</p>

        <h2>Cookies</h2>
        <p>We use essential session cookies to maintain basic site functionality. We do not use advertising tracking cookies or sell cookie data to third parties.</p>

        <h2>Contact Us</h2>
        <p>For any privacy-related questions or requests: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> | {BRAND.phone}</p>
        <p>{BRAND.name}<br />{BRAND.address}</p>
      </div>
      <div className="mt-12 pt-6 border-t border-gray-100">
        <Link href="/" className="text-sm text-gray-400 hover:text-[var(--accent)] transition-colors font-medium">← Back to Shop</Link>
      </div>
    </div>
  );
}
