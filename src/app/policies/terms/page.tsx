import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — ALY GLOBAL LLC',
  description:
    'ALY GLOBAL LLC terms of service. Read the rules and conditions governing use of our website and services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
      {/* Header */}
      <div className="mb-14">
        <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gray-400 mb-4">
          Legal
        </p>
        <h1 className="font-display text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Terms of Service
        </h1>
        <p className="font-body text-sm text-gray-400">
          Last updated: January 1, 2026
        </p>
        <div className="w-12 h-px bg-gray-200 mt-8" />
      </div>

      {/* Content */}
      <div className="policy-prose">
        <p>
          Please read these Terms of Service (&quot;Terms&quot;) carefully before using the ALY
          GLOBAL LLC website or placing any order. By accessing or using our site, you agree to be
          bound by these Terms. If you do not agree to these Terms, please do not use our site.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the ALY GLOBAL LLC website (the &quot;Site&quot;), you confirm
          that you are at least 18 years of age (or the age of majority in your jurisdiction), that
          you have read and understood these Terms, and that you agree to be bound by them.
        </p>

        <h2>2. Use of the Site</h2>
        <p>
          You agree to use this Site only for lawful purposes and in a manner consistent with all
          applicable local, state, national, and international laws and regulations. You must not:
        </p>
        <ul>
          <li>
            Use the Site in any way that violates any applicable law or regulation
          </li>
          <li>
            Transmit any unsolicited or unauthorized advertising or promotional material (spam)
          </li>
          <li>
            Attempt to gain unauthorized access to any part of the Site, its servers, or any
            associated systems
          </li>
          <li>
            Reproduce, duplicate, copy, or resell any part of the Site in contravention of these
            Terms
          </li>
          <li>
            Use automated tools, bots, or scrapers to harvest data from the Site without our
            express written permission
          </li>
          <li>
            Submit false, misleading, or fraudulent information in connection with an order
          </li>
        </ul>

        <h2>3. Right to Refuse Service</h2>
        <p>
          <strong>ALY GLOBAL LLC reserves the right to refuse service, cancel orders, or
          terminate access to the Site at our sole discretion</strong>, including but not limited
          to situations involving suspected fraud, violation of these Terms, abusive conduct toward
          our team, or any activity we reasonably believe poses a risk to our business, customers,
          or third parties. We will notify affected users where practicable and legally permissible.
        </p>

        <h2>4. Products and Pricing</h2>
        <p>
          All products displayed on the Site are subject to availability. We reserve the right to
          modify, discontinue, or change prices at any time without prior notice. Prices are
          displayed in US Dollars (USD) and do not include applicable taxes or shipping fees, which
          will be calculated and displayed at checkout.
        </p>
        <p>
          We make every effort to display product colors, designs, and descriptions as accurately
          as possible. However, slight variations in color between digital displays and physical
          printed products are inherent to the print-on-demand process and do not constitute a
          defect or breach of contract.
        </p>

        <h2>5. Orders and Payment</h2>
        <p>
          By placing an order, you represent that the payment information you provide is accurate
          and that you are authorized to use the selected payment method. All orders are subject to
          acceptance and availability. We reserve the right to cancel any order for any reason,
          including suspected fraud, inaccurate pricing, or product unavailability. In such cases,
          any charge will be fully refunded.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All content on this Site — including but not limited to text, graphics, logos, button
          icons, images, and software — is the property of ALY GLOBAL LLC or its content
          suppliers and is protected by applicable intellectual property laws. You may not
          reproduce, distribute, or create derivative works from any content on this Site without
          our express written permission.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          The Site and all products and services are provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind, either express or implied. ALY
          GLOBAL LLC does not warrant that the Site will be uninterrupted, error-free, or free of
          viruses or other harmful components.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, ALY GLOBAL LLC shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages arising out of
          your use of, or inability to use, the Site or its products and services. Our total
          liability to you for any claim arising out of or related to these Terms shall not exceed
          the amount you paid for the specific product or service giving rise to the claim.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms of Service and any disputes arising out of or related to your use of the
          Site or any transaction with ALY GLOBAL LLC shall be governed by and construed in
          accordance with the <strong>laws of the State of New Mexico</strong>, without regard to
          its conflict of law provisions. You agree that any legal action or proceeding arising out
          of these Terms shall be brought exclusively in the state or federal courts located in
          Bernalillo County, New Mexico, and you consent to the personal jurisdiction of such
          courts.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We reserve the right to update or modify these Terms at any time. Changes will be
          effective immediately upon posting to the Site. Your continued use of the Site following
          any changes constitutes your acceptance of the revised Terms. We encourage you to review
          this page periodically.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at{' '}
          <a href="mailto:support@alyglobal.com">support@alyglobal.com</a> or write to:
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
