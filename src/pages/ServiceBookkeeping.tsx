import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL } from '../constants';
import { BookOpen, CheckCircle, Target, Users } from 'lucide-react';

const ServiceBookkeeping: React.FC = () => {
  return (
    <>
      <SEO
        title="Professional Bookkeeping Services | Texas & USA | Transcendents3"
        description="Expert bookkeeping for small businesses. Accurate records, tax-ready reports, and peace of mind. Trusted by 50+ Texas and USA business owners."
        keywords="book keeper Texas, bookkeeping services, small business accounting, QuickBooks bookkeeping, Texas bookkeeper"
      />
      <div className="min-h-screen">
        <section className="relative bg-primary-800 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                Professional Bookkeeping Services
              </h1>
              <p className="text-xl text-neutral-200 mb-8">
                Accurate, organized books that keep your business compliant and ready for growth. Trusted by entrepreneurs across Texas and the USA.
              </p>
              <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                Get Free Bookkeeping Assessment
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Professional bookkeeping" className="rounded-2xl shadow-xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">Why Bookkeeping Matters to Your Business</h2>
                <p className="text-neutral-700 mb-4">Your books are the financial backbone of your business. Without accurate records, you're flying blind—making decisions on gut feel instead of data, missing deductions, and risking costly IRS audits.</p>
                <p className="text-neutral-700 mb-6">Clean bookkeeping gives you real-time visibility into profitability, cash flow, and tax obligations. It's not just compliance—it's the foundation for smart growth.</p>
                <ul className="space-y-3">
                  {['Tax-ready financials year-round', 'Catch errors before they cost you', 'Benchmark performance and spot trends', 'Peace of mind for audits'].map((item, i) => (
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
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Who Needs Professional Bookkeeping?</h3>
            <p className="text-neutral-700 max-w-3xl mx-auto mb-6">Entrepreneurs, small business owners, freelancers, contractors, and anyone who wants to focus on growing their business—not pushing papers.</p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Book Free 15-Min Call
            </Button>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">What We Include</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Monthly financial statements',
                'Accounts payable & receivable',
                'Bank & credit card reconciliation',
                'Chart of accounts setup',
                'General ledger maintenance',
                'Tax-ready reports',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md">
                  <BookOpen className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
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
                <img src="https://images.pexels.com/photos/7550317/pexels-photo-7550317.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Business owner reviewing financials" className="rounded-2xl shadow-xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">The Value of Done-Right Bookkeeping</h2>
                <p className="text-neutral-700 mb-4">When your books are clean, tax season becomes simple. Your accountant gets organized files. You get accurate financials for loans, investors, and strategic decisions. No more last-minute scrambles or surprise IRS letters.</p>
                <p className="text-neutral-700 mb-6">Our clients save an average of 15+ hours per month—time they reinvest in sales, product, or family. The ROI isn't just financial; it's freedom.</p>
                <Button variant="primary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                  Start Your Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Clean, Accurate Books?</h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">Join 50+ Texas and USA businesses who trust Transcendents3 for bookkeeping that just works.</p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Schedule Free Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceBookkeeping;
