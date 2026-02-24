import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL } from '../constants';
import { DollarSign, CheckCircle, Shield } from 'lucide-react';

const ServicePayroll: React.FC = () => {
  return (
    <>
      <SEO
        title="Insurance & Retirement Planning | Protect What Matters Most | Transcendents3"
        description="Personalized life insurance, health insurance for seniors, mutual funds, annuities, 401(k) rollovers, auto coverage, mortgage protection, college funds, and retirement plans."
        keywords="life insurance, health insurance for seniors, mutual funds, annuities, 401k rollover, auto insurance, mortgage protection, college fund, retirement plan, insurance Texas"
        path="/services/payroll"
      />
      <div className="min-h-screen">
        <section className="relative bg-primary-800 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.pexels.com/photos/4386428/pexels-photo-4386428.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Family reviewing insurance and retirement plan options with an advisor"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                Insurance & Retirement Planning That Puts Your Family First
              </h1>
              <p className="text-xl text-neutral-200 mb-8">
                Protect your income, your lifestyle, and your legacy with a personalized mix of insurance and investment strategies—so you can feel confident about every stage of life.
              </p>
              <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                Schedule Insurance Strategy Call
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Insurance advisor discussing coverage options with clients"
                  className="rounded-2xl shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">Why Insurance & Retirement Planning Matters</h2>
                <p className="text-neutral-700 mb-4">
                  A single unexpected event—a health issue, accident, job change, or market downturn—can derail years of hard work. The right protection plan keeps
                  your family secure, your retirement on track, and your goals within reach.
                </p>
                <p className="text-neutral-700 mb-6">
                  We help you make sense of the options so you are never over-insured, under-insured, or locked into a product that does not fit your season of life.
                  Every recommendation is built around your budget, your family, and your long-term vision.
                </p>
                <ul className="space-y-3">
                  {[
                    'Protect your family’s lifestyle if something happens to you',
                    'Cover rising healthcare costs—especially in retirement',
                    'Turn old 401(k)s and savings into a coordinated retirement plan',
                    'Use insurance and investments together to build long-term wealth',
                  ].map((item, i) => (
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
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Who We Help</h3>
            <p className="text-neutral-700 max-w-3xl mx-auto mb-6">
              Families, professionals, business owners, and retirees who want a clear, confident plan for insurance and investments—not a stack of policies they do not
              understand.
            </p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Book Free Insurance Review
            </Button>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">Insurance & Investment Solutions We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Life insurance (term and permanent) to protect your family’s income',
                'Health insurance guidance for seniors, including Medicare-related options',
                'Mutual fund investment strategies aligned with your risk tolerance',
                'Annuities to create predictable income you cannot outlive',
                '401(k) rollover support when changing jobs or retiring',
                'Auto insurance coordination as part of your overall protection plan',
                'Mortgage protection so your home is safe if the unexpected happens',
                'College fund strategies to prepare for future education costs',
                'Comprehensive retirement planning that brings everything together',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md">
                  <Shield className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
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
                <img
                  src="https://images.pexels.com/photos/4386397/pexels-photo-4386397.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Couple reviewing retirement plan with financial advisor"
                  className="rounded-2xl shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">A Clear, Guided Process from First Call to Lifetime Support</h2>
                <p className="text-neutral-700 mb-4">
                  We start with a simple conversation about what—and who—you want to protect. From there, we review your current coverage, old policies, 401(k)s, and
                  savings to uncover gaps and opportunities.
                </p>
                <p className="text-neutral-700 mb-6">
                  You will leave with a step-by-step plan that may include life insurance, health coverage options for retirement, mutual funds, annuities, 401(k)
                  rollovers, and more—explained in plain English so you can make confident decisions.
                </p>
                <Button variant="primary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                  Get Your Personalized Plan
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Protect Your Future?</h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
              One conversation today can change the next 20 years of your financial life. Let us help you design an insurance and retirement strategy that fits you.
            </p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Schedule Free Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicePayroll;
