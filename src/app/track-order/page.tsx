import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/data';
import TrackingForm from './TrackingForm';
export const metadata: Metadata = { title: `Track Your Order — ${BRAND.name}` };

export default function TrackOrderPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 lg:px-8 py-14">
      <p className="section-eyebrow">Shipping</p>
      <h1 className="text-4xl font-black mb-3">Track Your Order</h1>
      <p className="text-gray-500 text-sm mb-10">
        When your order ships, you will receive a <strong>Shipping Confirmation email</strong> with your tracking number. Enter it below to check your delivery status.
      </p>
      <TrackingForm />
      <h2 className="text-lg font-black mb-4 mt-12">Typical Order Timeline</h2>
      <div className="space-y-0">
        {[
          { step: '1', label: 'Order Placed',     detail: 'Your order is confirmed and sent to production.', time: 'Day 0' },
          { step: '2', label: 'In Production',    detail: 'Your item is printed and quality checked.',       time: 'Days 1–4' },
          { step: '3', label: 'Shipped',          detail: 'You receive a tracking number by email.',         time: 'Days 3–5' },
          { step: '4', label: 'Out for Delivery', detail: 'Your package is with the local carrier.',         time: 'Days 8–14' },
          { step: '5', label: 'Delivered',        detail: 'Your order arrives at your door.',                time: 'Days 7–14' },
        ].map(({ step, label, detail, time }) => (
          <div key={step} className="flex gap-4 items-start pb-6">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-black flex-shrink-0">{step}</div>
            <div className="flex-1 pb-6 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <p className="font-bold text-sm text-gray-900">{label}</p>
                <p className="text-xs text-gray-400 font-semibold">{time}</p>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[var(--black)] text-white p-6 mt-4">
        <p className="font-bold mb-1">Package not moving?</p>
        <p className="text-sm text-gray-400 mb-4">If tracking hasn&apos;t updated in 5+ business days, contact us and we&apos;ll investigate with the carrier.</p>
        <Link href="/contact" className="btn-accent text-sm px-5 py-2.5">Contact Support</Link>
      </div>
    </div>
  );
}
