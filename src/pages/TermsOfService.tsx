import React from 'react';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => (
  <>
    <SEO
      title="Terms of Service | Transcendents3"
      description="Terms and conditions for using Transcendents3 website and financial services. Book keeper Texas & USA."
      keywords="terms of service, Transcendents3, terms and conditions"
      path="/terms-of-service"
    />
    {/* Page Header */}
    <div className="bg-primary-800 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-neutral-200">
            Please review the terms and conditions for using Transcendents3's website and services
          </p>
        </div>
      </div>
    </div>
    {/* Terms Section */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-heading text-primary-800 mb-8">Terms of Service</h1>
          <p className="mb-6 text-neutral-700">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-6 text-neutral-700">
            These Terms of Service ("Terms") govern your use of the Transcendents3 website and our financial services, including bookkeeping, payroll, QuickBooks (QBO) cleanup, business consulting, and related solutions. By accessing or using our website and services, you agree to be bound by these Terms.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">1. Use of Services</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li>You must be at least 18 years old and have the legal authority to enter into contracts to use our services.</li>
            <li>You agree to provide accurate, current, and complete information when requested.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You may not use our services for any unlawful or unauthorized purpose.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">2. Service Terms & Limitations</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li>Our services are provided on a professional, best-effort basis. We do not guarantee specific financial outcomes.</li>
            <li>We may update, modify, or discontinue any service at any time without notice.</li>
            <li>We reserve the right to refuse service to anyone for any reason.</li>
            <li>All advice and deliverables are based on the information you provide and current regulations at the time of service.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">3. Fees & Payment</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li>Fees for our services will be communicated to you in advance and are due as specified in your agreement or invoice.</li>
            <li>Late payments may result in suspension or termination of services.</li>
            <li>All fees are non-refundable unless otherwise stated in writing.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">4. Client Responsibilities</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li>You are responsible for providing accurate and complete information necessary for us to perform our services.</li>
            <li>You are responsible for reviewing all deliverables and notifying us of any discrepancies promptly.</li>
            <li>You are responsible for complying with all applicable laws and regulations.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">5. Confidentiality</h2>
          <p className="mb-6 text-neutral-700">
            We treat all client information as confidential and will not disclose it to third parties except as required by law or with your consent. Please see our Privacy Policy for more details.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">6. Intellectual Property</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li>All content, trademarks, and materials on our website are the property of Transcendents3 or its licensors.</li>
            <li>You may not copy, reproduce, or distribute any content without our written permission.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">7. Disclaimers & Limitation of Liability</h2>
          <ul className="list-disc pl-6 mb-6 text-neutral-700">
            <li>Our services are provided "as is" and "as available" without warranties of any kind.</li>
            <li>We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.</li>
            <li>Our total liability is limited to the amount you paid for the services in question.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">8. Indemnification</h2>
          <p className="mb-6 text-neutral-700">
            You agree to indemnify and hold harmless Transcendents3, its affiliates, and employees from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">9. Governing Law</h2>
          <p className="mb-6 text-neutral-700">
            These Terms are governed by the laws of the State of Texas, without regard to its conflict of law principles.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">10. Changes to These Terms</h2>
          <p className="mb-6 text-neutral-700">
            We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page with a revised date.
          </p>
          <h2 className="text-2xl font-semibold text-primary-700 mt-8 mb-4">11. Contact Us</h2>
          <p className="mb-6 text-neutral-700">
            If you have any questions about these Terms, please contact us at:
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

export default TermsOfService; 