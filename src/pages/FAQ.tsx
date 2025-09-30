import React from 'react';

const faqs = [
  {
    question: "What services does Transcendents3 offer?",
    answer: "Transcendents3 offers bookkeeping, payroll processing, QuickBooks (QBO) cleanup, business consulting, QuickBooks support, and related financial services tailored for small and medium-sized businesses."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is customized based on your business needs. Contact us for a free consultation and a detailed quote tailored to your requirements."
  },
  {
    question: "Can you work with my existing accounting software?",
    answer: "Yes, we specialize in QuickBooks but also work with Xero, FreshBooks, and other major accounting platforms."
  },
  {
    question: "How do you ensure the security of my financial data?",
    answer: "We use industry-standard encryption, secure cloud storage, and strict confidentiality protocols to protect your data."
  },
  {
    question: "How often will we communicate about my finances?",
    answer: "We provide monthly reports for bookkeeping clients, quarterly updates for consulting, and are always available for questions or scheduled check-ins."
  },
  {
    question: "Can you help with tax planning or compliance?",
    answer: "While we no longer offer direct tax preparation, we provide proactive tax planning advice and can coordinate with your tax professional."
  },
  {
    question: "What is QuickBooks (QBO) Cleanup?",
    answer: "QuickBooks Cleanup involves reviewing, correcting, and optimizing your QuickBooks Online file to ensure accurate financial records and reporting."
  },
  {
    question: "How do I get started with your services?",
    answer: "Simply contact us through our website or call us at +1 (540) 929 9002 to schedule a free consultation."
  },
  {
    question: "Do you offer support for QuickBooks Desktop as well as Online?",
    answer: "Yes, we support both QuickBooks Online and Desktop versions, including setup, troubleshooting, and training."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including retail, professional services, healthcare, construction, and more."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. We adhere to strict confidentiality standards and never share your information without your consent."
  },
  {
    question: "How do I contact support if I have an urgent issue?",
    answer: "You can reach us by phone at +1 (540) 929 9002 or email info@transcendents3.com for prompt assistance."
  }
];

const FAQ: React.FC = () => (
  <>
    {/* Page Header */}
    <div className="bg-primary-800 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-neutral-200">
            Answers to common questions about our financial services and support
          </p>
        </div>
      </div>
    </div>
    {/* FAQ Section */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold font-heading text-primary-800 mb-3">{faq.question}</h2>
              <p className="text-neutral-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FAQ; 