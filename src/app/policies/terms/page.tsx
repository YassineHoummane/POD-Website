import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/data';
export const metadata: Metadata = { title: `Terms of Service — ${BRAND.name}` };

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
      <p className="section-eyebrow">Policies</p>
      <h1 className="text-4xl font-black mb-2">Terms of Service</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: May 5, 2026</p>
      <div className="policy-prose">
        <h2>Overview</h2>
        <p>Throughout the site <a href={`https://${BRAND.domain}`}>{BRAND.domain}</a>, the terms &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer to <strong>{BRAND.name}</strong>. We offer this website, including all information, tools, and services available, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.</p>
        <p>By visiting our site and/or purchasing something from us, you engage in our &quot;Service&quot; and agree to be bound by the following terms and conditions. Please read these Terms of Service carefully before accessing or using our website.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the {BRAND.name} website, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them. If you do not agree, please do not use this site.</p>

        <h2>2. Use of the Site</h2>
        <p>You agree to use this site only for lawful purposes. You must not:</p>
        <ul>
          <li>Violate any applicable local, state, national, or international law or regulation</li>
          <li>Transmit unsolicited or unauthorized advertising or promotional material</li>
          <li>Attempt to gain unauthorized access to any part of the site or its infrastructure</li>
          <li>Use automated tools or scrapers to harvest data without express written permission</li>
          <li>Submit false, misleading, or fraudulent information in connection with an order</li>
          <li>Reproduce, resell, or commercially exploit any part of the site without written authorization</li>
        </ul>

        <h2>3. Right to Refuse Service</h2>
        <p><strong>{BRAND.name} reserves the right to refuse service, cancel orders, or terminate access to the site at our sole discretion</strong>, including but not limited to cases involving suspected fraud, violation of these Terms, abusive conduct, or any activity that poses a risk to our business, customers, or third parties. We will notify affected users where practicable and legally permitted.</p>

        <h2>4. Products and Pricing</h2>
        <p>All products are subject to availability. We reserve the right to modify or discontinue products and change prices at any time without prior notice. Prices are shown in US Dollars (USD) and exclude applicable taxes and shipping fees, which are calculated at checkout.</p>
        <p>We make every effort to display product colors and descriptions accurately. Minor color variations between digital displays and physical printed products are inherent to the print-on-demand process and do not constitute a defect.</p>

        <h2>5. Orders and Payment</h2>
        <p>By placing an order, you represent that your payment information is accurate and that you are authorized to use the selected payment method. Orders are subject to acceptance and availability. We reserve the right to cancel any order and issue a full refund for reasons including suspected fraud, inaccurate pricing, or unavailability.</p>

        <h2>6. Intellectual Property</h2>
        <p>All site content — including text, graphics, logos, images, and software — is the property of {BRAND.name} or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.</p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>The site and all products and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, express or implied. {BRAND.name} does not warrant that the site will be uninterrupted, error-free, or free of harmful components.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, {BRAND.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the site or its products. Our total liability for any claim shall not exceed the amount you paid for the specific product giving rise to that claim.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms and any disputes arising from your use of this site or any transaction with {BRAND.name} shall be governed by the laws of the <strong>State of New Mexico</strong>, without regard to conflict-of-law provisions. You consent to exclusive jurisdiction in the state or federal courts of Bernalillo County, New Mexico.</p>

        <h2>10. Changes to These Terms</h2>
        <p>We reserve the right to update these Terms at any time. Changes take effect immediately upon posting. Continued use of the site after changes are posted constitutes acceptance of the revised Terms.</p>

        <h2>11. Contact</h2>
        <p>Questions about these Terms? Contact us at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> | {BRAND.phone}</p>
        <p>{BRAND.name}<br />{BRAND.address}</p>
      </div>
      <div className="mt-12 pt-6 border-t border-gray-100">
        <Link href="/" className="text-sm text-gray-400 hover:text-[var(--accent)] transition-colors font-medium">← Back to Shop</Link>
      </div>
    </div>
  );
}
