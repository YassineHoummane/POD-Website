import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — ALY GLOBAL LLC',
  description:
    'ALY GLOBAL LLC privacy policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
      {/* Header */}
      <div className="mb-14">
        <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gray-400 mb-4">
          Legal
        </p>
        <h1 className="font-display text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Privacy Policy
        </h1>
        <p className="font-body text-sm text-gray-400">
          Last updated: January 1, 2026
        </p>
        <div className="w-12 h-px bg-gray-200 mt-8" />
      </div>

      {/* Content */}
      <div className="policy-prose">
        <p>
          <strong>ALY GLOBAL LLC</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          respects your privacy and is committed to protecting the personal information you share
          with us. This Privacy Policy explains what information we collect, how we use it, and
          your rights regarding that information.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect only the information that is <strong>necessary</strong> to fulfill your order
          and provide our services. This includes:
        </p>
        <ul>
          <li>
            <strong>Contact information:</strong> Your name and email address, used for order
            confirmation and customer support
          </li>
          <li>
            <strong>Shipping information:</strong> Your delivery address, required to ship your
            order to you
          </li>
          <li>
            <strong>Payment information:</strong> Payment is processed securely through
            third-party payment processors (such as Stripe). We do <em>not</em> store your full
            credit card number, CVV, or banking credentials on our servers
          </li>
          <li>
            <strong>Order history:</strong> Details of what you purchased and when, used to handle
            support requests and returns
          </li>
          <li>
            <strong>Device and browsing data:</strong> Basic analytics such as browser type, pages
            visited, and referring URLs, collected in aggregate to improve our website&apos;s
            performance
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>Your information is used solely to:</p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Send you order confirmation and shipping updates</li>
          <li>Respond to customer service inquiries</li>
          <li>Comply with legal obligations</li>
          <li>Prevent fraud and protect the security of our platform</li>
        </ul>

        <h2>We Do Not Sell Your Data</h2>
        <p>
          <strong>ALY GLOBAL LLC does not sell, rent, trade, or otherwise transfer your personal
          information to third parties</strong> for their marketing or commercial purposes. Full stop.
        </p>

        <h2>Third-Party Service Providers</h2>
        <p>
          We work with a limited number of trusted third parties who help us operate our business.
          These include:
        </p>
        <ul>
          <li>
            <strong>Print-on-demand fulfillment partners</strong> — who receive your name and
            shipping address to produce and ship your order
          </li>
          <li>
            <strong>Payment processors</strong> — who handle transactions securely under their own
            privacy and security standards
          </li>
          <li>
            <strong>Shipping carriers</strong> — who receive your delivery address to complete
            delivery
          </li>
        </ul>
        <p>
          All third-party providers are contractually obligated to use your data only as necessary
          to perform their specific service and may not use it for any other purpose.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your order information for as long as required by applicable law and for
          legitimate business purposes (e.g., handling returns, tax records). You may request
          deletion of your personal data at any time, subject to legal constraints, by contacting
          us.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of any non-essential communications</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Our website may use essential cookies to maintain session state and basic functionality.
          We do not use tracking cookies for advertising or sell cookie data to third parties.
        </p>

        <h2>Security</h2>
        <p>
          We implement industry-standard security measures including SSL/TLS encryption for all
          data transmitted on our site. However, no method of transmission over the internet is
          100% secure. We encourage you to use strong, unique passwords and to contact us
          immediately if you suspect unauthorized access to your account.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or wish to exercise your rights,
          please contact us at{' '}
          <a href="mailto:support@alyglobal.com">support@alyglobal.com</a> or write to us at:
        </p>
        <p>
          ALY GLOBAL LLC<br />
          1209 MOUNTAIN ROAD PL NE STE R<br />
          ALBUQUERQUE, NM 87110
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
