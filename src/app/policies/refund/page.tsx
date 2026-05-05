import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/data';
export const metadata: Metadata = { title: `Return & Refund Policy — ${BRAND.name}`, description: 'Our return and refund policy. 30-day returns on eligible items.' };

export default function RefundPage() {
  const today = 'May 5, 2026';
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
      <p className="section-eyebrow">Policies</p>
      <h1 className="text-4xl font-black mb-2">Return &amp; Refund Policy</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: {today}</p>

      <div className="policy-prose">
        <p>By placing an order through <strong><a href={`https://${BRAND.domain}`}>{BRAND.domain}</a></strong>, you are agreeing to the terms below. We set these policies to ensure that you are fully aware of our refund and return methods and procedures.</p>

        <h2>30-Day Return Window</h2>
        <p>We accept return requests submitted within <strong>30 days</strong> of the delivery date. To be eligible, items must be:</p>
        <ul>
          <li>Unworn and unwashed, in original condition</li>
          <li>Free from damage, odors, or alterations caused by the customer</li>
          <li>Accompanied by proof of purchase (order number or receipt)</li>
        </ul>

        <h2>Print-on-Demand — Important Limitations</h2>
        <p>Because every item is <strong>manufactured specifically for you</strong> at the time of your order, we are <strong>unable to accept returns</strong> for the following reasons:</p>
        <ul>
          <li><strong>Buyer's remorse</strong> — you changed your mind after placing the order</li>
          <li><strong>Sizing issues</strong> — please review our size guide on each product page before purchasing. Measurements are provided for each style and size.</li>
          <li><strong>Color variation</strong> — slight differences between on-screen colors and physical print output are inherent to digital printing and do not constitute a manufacturing defect.</li>
        </ul>
        <p>These limitations exist because on-demand items cannot be restocked or resold. We appreciate your understanding.</p>

        <h2>Eligible Refunds — We Make It Right</h2>
        <p>We will issue a <strong>full refund</strong> (including original shipping costs) for:</p>
        <ul>
          <li>Items that arrived damaged or defective due to a production or printing error</li>
          <li>Items that were the wrong product, style, or size compared to your order</li>
          <li>Items confirmed lost in transit by the carrier</li>
          <li>Print quality that significantly and materially deviates from what was displayed on the product page</li>
        </ul>

        <h2>How to Request a Return or Refund</h2>
        <p>Email us within 30 days of delivery at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> or call <a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>. Include your order number and photos of the item if it is defective or damaged. We respond within 2 business days.</p>
        <p>Once approved, we will send return shipping instructions. Refunds are issued to the original payment method within <strong>5–10 business days</strong> of receiving and inspecting the returned item.</p>

        <h2>Non-Returnable Items</h2>
        <ul>
          <li>Items returned more than 30 days after delivery</li>
          <li>Items that have been washed, worn, or altered</li>
          <li>Items returned without prior authorization</li>
          <li>Gift cards or digital products</li>
        </ul>

        <h2>Questions?</h2>
        <p>Contact us at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> or {BRAND.phone}. We are here to help.</p>
      </div>
      <div className="mt-12 pt-6 border-t border-gray-100">
        <Link href="/" className="text-sm text-gray-400 hover:text-[var(--accent)] transition-colors font-medium">← Back to Shop</Link>
      </div>
    </div>
  );
}
