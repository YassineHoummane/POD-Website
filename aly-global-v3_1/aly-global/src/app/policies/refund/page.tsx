import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy — ALY GLOBAL LLC',
  description:
    'ALY GLOBAL LLC refund and return policy. Learn how to return items and request a refund within 30 days of purchase.',
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
      {/* Header */}
      <div className="mb-14">
        <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gray-400 mb-4">
          Legal
        </p>
        <h1 className="font-display text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Refund Policy
        </h1>
        <p className="font-body text-sm text-gray-400">
          Last updated: January 1, 2026
        </p>
        <div className="w-12 h-px bg-gray-200 mt-8" />
      </div>

      {/* Content */}
      <div className="policy-prose">
        <p>
          At <strong>ALY GLOBAL LLC</strong>, we are committed to your satisfaction. Please read
          this policy carefully before placing an order.
        </p>

        <h2>Our 30-Day Return Window</h2>
        <p>
          We accept returns within <strong>30 days</strong> of the delivery date. To be eligible
          for a return, items must be:
        </p>
        <ul>
          <li>Unused and unwashed</li>
          <li>In their original condition with all tags attached</li>
          <li>Free from damage, odors, or alterations caused by the customer</li>
          <li>Returned in original or equivalent packaging</li>
        </ul>

        <h2>Print-on-Demand — Important Limitation</h2>
        <p>
          Because every item in our store is <strong>printed on demand</strong> and manufactured
          specifically for you at the time of your order, we are <strong>unable to accept returns</strong>{' '}
          for the following reasons:
        </p>
        <ul>
          <li>
            <strong>Buyer&apos;s remorse</strong> — you changed your mind after ordering
          </li>
          <li>
            <strong>Sizing issues</strong> — please consult our size guide before purchasing, as
            each product page includes detailed measurements
          </li>
          <li>
            <strong>Color perception</strong> — slight variations between screen display and
            physical print are inherent to digital printing and do not constitute a defect
          </li>
        </ul>
        <p>
          These exclusions exist because on-demand items are produced solely for you and cannot be
          resold. We appreciate your understanding.
        </p>

        <h2>Eligible Refund Situations</h2>
        <p>
          We will issue a <strong>full refund</strong> (including original shipping costs) in the
          following circumstances:
        </p>
        <ul>
          <li>The item arrived damaged or defective due to a production error</li>
          <li>You received the wrong item or wrong size compared to what you ordered</li>
          <li>The item was lost in transit and confirmed undeliverable by the carrier</li>
          <li>The print quality significantly deviates from what was shown on the product page</li>
        </ul>

        <h2>How to Initiate a Return</h2>
        <p>
          To begin a return or refund request, please contact our support team within 30 days of
          delivery at{' '}
          <a href="mailto:support@alyglobal.com">support@alyglobal.com</a>. Include your order
          number, a brief description of the issue, and photos if the item is defective or damaged.
        </p>
        <p>
          Once we review and approve your request, we will provide return shipping instructions.
          Refunds are issued to the original payment method within 5–10 business days of receiving
          the returned item.
        </p>

        <h2>Non-Returnable Items</h2>
        <p>
          In addition to the print-on-demand limitations described above, the following cannot be
          returned under any circumstances:
        </p>
        <ul>
          <li>Items returned more than 30 days after delivery</li>
          <li>Items that have been washed, worn, or altered</li>
          <li>Gift cards or digital products</li>
        </ul>

        <h2>Questions?</h2>
        <p>
          If you have any questions about this policy, please reach out to us at{' '}
          <a href="mailto:support@alyglobal.com">support@alyglobal.com</a>. We&apos;re here to
          help.
        </p>
      </div>

      {/* Back */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <Link
          href="/"
          className="font-body text-[11px] tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </Link>
      </div>
    </div>
  );
}
