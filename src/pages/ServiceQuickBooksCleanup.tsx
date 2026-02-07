import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL } from '../constants';
import { Laptop, CheckCircle } from 'lucide-react';

const ServiceQuickBooksCleanup: React.FC = () => {
  return (
    <>
      <SEO
        title="QuickBooks Cleanup & Setup | Texas & USA | Transcendents3"
        description="Professional QuickBooks Online cleanup, setup, and optimization. Fix errors, organize your books, and get tax-ready. Certified QuickBooks ProAdvisors."
        keywords="QuickBooks cleanup, QuickBooks setup Texas, QBO cleanup, book keeper Texas, QuickBooks ProAdvisor"
      />
      <div className="min-h-screen">
        <section className="relative bg-primary-800 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src="https://images.pexels.com/photos/4475524/pexels-photo-4475524.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                QuickBooks (QBO) Cleanup & Setup
              </h1>
              <p className="text-xl text-neutral-200 mb-8">
                Messy QuickBooks? We'll clean it up. Accurate books, optimized charts, and confidence in every number. Certified ProAdvisors who know QBO inside out.
              </p>
              <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                Get Free QuickBooks Assessment
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" alt="QuickBooks on laptop" className="rounded-2xl shadow-xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">Why QuickBooks Cleanup Matters</h2>
                <p className="text-neutral-700 mb-4">QuickBooks is powerful—but only when it's set up and maintained correctly. Duplicate transactions, misclassified accounts, and unreconciled items create a mess that gets worse over time. What starts as "I'll fix it later" becomes a nightmare at tax time.</p>
                <p className="text-neutral-700 mb-6">A clean QuickBooks file gives you accurate reports, smooth tax prep, and confidence in your financial data. It's the foundation everything else builds on.</p>
                <ul className="space-y-3">
                  {['Fix errors before they compound', 'Get reports you can trust', 'Tax-ready in record time', 'Optimize for your business'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-primary-50 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Who Needs QuickBooks Cleanup?</h3>
            <p className="text-neutral-700 max-w-3xl mx-auto mb-6">Business owners whose QuickBooks has gotten messy. New businesses setting up QBO for the first time. Anyone switching bookkeepers and needing a fresh start. If your books don't match your bank—you need a cleanup.</p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Book Free QBO Review
            </Button>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">What We Include</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'File review and error correction',
                'Chart of accounts optimization',
                'Duplicate transaction removal',
                'Bank and card reconciliation',
                'Custom report setup',
                'Training and best practices',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md">
                  <Laptop className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Financial reports" className="rounded-2xl shadow-xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">The Value of Clean Books</h2>
                <p className="text-neutral-700 mb-4">A properly cleaned QuickBooks file saves hours during tax season, eliminates guesswork in business decisions, and gives you reports you can actually trust. Our clients often discover deductions they'd been missing for years.</p>
                <p className="text-neutral-700 mb-6">Whether you need a one-time cleanup or ongoing support, we get your QuickBooks in shape—and teach you how to keep it that way.</p>
                <Button variant="primary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                  Start Your Cleanup
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Clean QuickBooks?</h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">Our certified ProAdvisors will get your books in order—and keep them that way.</p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Schedule Free Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceQuickBooksCleanup;
