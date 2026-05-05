import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/data';
export const metadata: Metadata = { title: `Shipping Policy — ${BRAND.name}` };

export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
      <p className="section-eyebrow">Policies</p>
      <h1 className="text-4xl font-black mb-2">Shipping Policy</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: May 5, 2026</p>
      <div className="policy-prose">
        <h2>Shipping Times</h2>
        <h3>Handling Time</h3>
        <p>Orders are typically processed and prepared for shipment within <strong>2 to 4 business days</strong> from the date of purchase. Because every item is printed on demand specifically for you, this production window is necessary before your order ships.</p>

        <h3>Delivery Time</h3>
        <p>Once your order has shipped, delivery typically takes <strong>5 to 10 business days</strong> within the United States. Total estimated time from order to delivery is <strong>7 to 14 business days</strong>.</p>
        <p>Delivery times are estimates and not guarantees. Delays caused by carriers, weather, or customs (for international orders) are outside our control.</p>

        <h2>Free Shipping</h2>
        <p><strong>{BRAND.name} offers free standard shipping on all orders within the United States.</strong> No minimum purchase required.</p>

        <h2>International Shipping</h2>
        <p>We currently ship primarily to the United States. For international inquiries, please contact us at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> before placing an order.</p>

        <h2>Tracking Your Order</h2>
        <p>Once your order ships, you will receive a <strong>shipping confirmation email</strong> containing your tracking number and a link to track your package. Please allow 24–48 hours for tracking information to update after receiving this email.</p>
        <p>You can also track your order at any time on our <Link href="/track-order">Track Your Order</Link> page.</p>

        <h2>Incorrect Shipping Address</h2>
        <p>Please double-check your shipping address before completing your order. {BRAND.name} is not responsible for orders delivered to an incorrect address provided at checkout. If you notice an error immediately after ordering, contact us at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> and we will do our best to update the address before production begins.</p>

        <h2>Lost or Stolen Packages</h2>
        <p>If your tracking shows &quot;delivered&quot; but you have not received your package, please:</p>
        <ul>
          <li>Check with neighbors and building management</li>
          <li>Contact the carrier directly with your tracking number</li>
          <li>Contact us at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> if the issue is not resolved within 3 business days</li>
        </ul>
        <p>We will work with you and the carrier to resolve confirmed lost-in-transit situations.</p>

        <h2>Questions?</h2>
        <p>Contact our support team: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> | {BRAND.phone}</p>
      </div>
      <div className="mt-12 pt-6 border-t border-gray-100">
        <Link href="/" className="text-sm text-gray-400 hover:text-[var(--accent)] transition-colors font-medium">← Back to Shop</Link>
      </div>
    </div>
  );
}
