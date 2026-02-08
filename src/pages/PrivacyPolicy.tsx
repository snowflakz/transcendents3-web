import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => (
  <>
    <SEO
      title="Privacy Policy | Transcendents3"
      description="Learn how Transcendents3 protects your privacy and handles your personal and financial information."
      keywords="privacy policy, Transcendents3, data protection, bookkeeping privacy"
    />
    {/* Page Header */}
    <div className="bg-primary-800 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-200">
            Learn how we protect your privacy and handle your information at Transcendents3
          </p>
        </div>
      </div>
    </div>
    {/* Policy Section */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-heading text-primary-800 mb-8">Privacy Policy</h1>
          <p className="mb-6 text-neutral-700">Last updated: February 8, 2025</p>
          <p className="mb-6 text-neutral-700">
            At Transcendents3, we are committed to protecting your privacy and ensuring the security of your personal and financial information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services, including bookkeeping, payroll, QuickBooks (QBO) cleanup, business consulting, and related financial solutions.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li><strong>Personal Information:</strong> Name, email address, phone number, business name, address, and other contact details you provide when you fill out forms or communicate with us.</li>
            <li><strong>Financial Information:</strong> Accounting records, payroll data, QuickBooks files, and other financial documents you share for our services.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, device information, pages visited, and referring URLs.</li>
            <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance your experience, analyze site usage, and improve our services. We may use third-party services such as Google Analytics and chat widgets; these services have their own privacy policies governing data collection.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li>To provide, operate, and maintain our financial services.</li>
            <li>To communicate with you about your account, inquiries, or service updates.</li>
            <li>To process transactions and deliver requested services.</li>
            <li>To improve our website, services, and customer experience.</li>
            <li>To comply with legal, regulatory, and contractual obligations.</li>
            <li>To protect against fraud, unauthorized access, and other liabilities.</li>
            <li>For marketing and promotional purposes (with your consent, where required).</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">3. How We Share Your Information</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li>With trusted service providers who assist us in delivering our services (e.g., IT support, payment processors, cloud storage).</li>
            <li>With your consent, to third parties for referrals or collaborative services.</li>
            <li>As required by law, regulation, or legal process.</li>
            <li>To protect the rights, property, or safety of Transcendents3, our clients, or others.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">4. Data Security</h2>
          <p className="mb-6 text-neutral-700">
            We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. We encourage you to use strong passwords and safeguard your account credentials.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">5. Data Retention</h2>
          <p className="mb-6 text-neutral-700">
            We retain your personal and financial information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">6. Your Rights & Choices</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li>You may request access to, correction of, or deletion of your personal information.</li>
            <li>You may opt out of marketing communications at any time.</li>
            <li>You may disable cookies in your browser settings, though this may affect site functionality.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">7. Children's Privacy</h2>
          <p className="mb-6 text-neutral-700">
            Our website and services are not intended for children under 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us to have it removed.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">8. Changes to This Policy</h2>
          <p className="mb-6 text-neutral-700">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with a revised date.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">9. Contact Us</h2>
          <p className="mb-6 text-neutral-700">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            <br />
            <strong>Email:</strong> info@transcendents3.com<br />
            <strong>Phone:</strong> +1 (540) 929 9002<br />
            <strong>Address:</strong> 5614 W Grand Pkwy, S Ste 102. Richmond, TX. 77407.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy; 