import React, { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_INSURANCE_URL } from '../constants';
import { DollarSign, CheckCircle, Shield } from 'lucide-react';

const INSURANCE_SERVICES = [
  {
    title: '401(k) Rollover',
    short: '401(k) rollover support when changing jobs or retiring',
    detail:
      'When you change jobs or retire, leaving old 401(k)s scattered means missed growth and harder management. We help you consolidate into a single IRA or new employer plan with the right mix of investments and tax strategy, so you keep more of what you\'ve saved—and stay in control of your retirement.',
  },
  {
    title: 'Annuities',
    short: 'Annuities to create predictable income you cannot outlive',
    detail:
      'Turn a portion of your savings into guaranteed income that can last for life. Annuities can help cover essential expenses in retirement, reduce the risk of outliving your money, and add predictability when markets are volatile. We help you choose the right type and structure for your goals.',
  },
  {
    title: 'Auto Insurance',
    short: 'Auto insurance coordination as part of your overall protection plan',
    detail:
      'The right auto coverage protects your family and your finances after an accident. We help you coordinate policies so you\'re not overpaying or underinsured, and so your auto plan fits with your broader protection strategy—one less worry on the road.',
  },
  {
    title: 'College Fund',
    short: 'College fund strategies to prepare for future education costs',
    detail:
      'Education costs keep rising. We design strategies—like 529 plans and other tax-advantaged options—so you can save for your children\'s or grandchildren\'s education without derailing your own retirement goals. Start early and let time work in your favor.',
  },
  {
    title: 'Health Insurance for Seniors',
    short: 'Health insurance guidance for seniors, including Medicare-related options',
    detail:
      'Navigating Medicare, supplements, and prescription coverage is complex. We provide clear guidance on enrollment, plan selection, and cost-saving options so you get the coverage you need without paying more than necessary. Your health and your budget both matter.',
  },
  {
    title: 'Life Insurance',
    short: 'Life insurance (term and permanent) to protect your family\'s income',
    detail:
      'If something happens to you, life insurance ensures your family can keep their home, pay for education, and maintain their lifestyle. We help you choose the right type and amount—term or permanent—based on your income, debts, and goals, so they\'re protected when it matters most.',
  },
  {
    title: 'Mortgage Protection',
    short: 'Mortgage protection so your home is safe if the unexpected happens',
    detail:
      'Your home is likely your largest asset. Mortgage protection and related insurance can help your family pay off the loan if you\'re no longer able to, so they don\'t lose the roof over their heads during a difficult time. Peace of mind for you and for them.',
  },
  {
    title: 'Mutual Funds',
    short: 'Mutual fund investment strategies aligned with your risk tolerance',
    detail:
      'Diversified, professionally managed portfolios that match your risk tolerance and timeline. We help you select and monitor funds so your long-term savings work as hard as you do—without taking on more risk than you\'re comfortable with.',
  },
  {
    title: 'Retirement Planning',
    short: 'Comprehensive retirement planning that brings everything together',
    detail:
      'A single plan that ties together your 401(k)s, IRAs, Social Security, and other assets. We help you set a target, manage taxes, and adjust over time so you can retire on your terms with confidence. One roadmap, built around your life.',
  },
];

const ServicePayroll: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      <SEO
        title="Insurance & Retirement Planning | Protect What Matters Most | Transcendents3"
        description="Personalized life insurance, health insurance for seniors, mutual funds, annuities, 401(k) rollovers, auto coverage, mortgage protection, college funds, and retirement plans."
        keywords="life insurance, health insurance for seniors, mutual funds, annuities, 401k rollover, auto insurance, mortgage protection, college fund, retirement plan, insurance Texas"
        path="/services/insurance"
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
              <Button variant="secondary" size="lg" href={CALENDLY_INSURANCE_URL} external={true}>
                Schedule Insurance Strategy Call
              </Button>
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-24 pb-8 md:pb-12">
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

        <section className="pt-8 md:pt-12 pb-16 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">Insurance & Investment Solutions We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
              {INSURANCE_SERVICES.map((service, i) => {
                const isHovered = hoveredIndex === i;
                return (
                  <div
                    key={service.title}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`
                      relative flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-300 ease-out overflow-visible
                      ${isHovered
                        ? 'bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-500 shadow-xl ring-2 ring-secondary-400/30 scale-105 z-30 border-l-4 border-l-secondary-500'
                        : 'bg-white border-transparent shadow-md hover:border-primary-200 hover:bg-primary-50/30 z-0'
                      }
                    `}
                  >
                    <Shield className={`w-6 h-6 flex-shrink-0 mt-1 transition-colors duration-300 ${isHovered ? 'text-secondary-600' : 'text-secondary-500'}`} />
                    <div className="min-w-0 flex-1 relative">
                      <h3 className={`font-semibold mb-1 transition-colors duration-300 ${isHovered ? 'text-primary-800' : 'text-neutral-800'}`}>{service.title}</h3>
                      <p className={`text-sm transition-colors duration-300 ${isHovered ? 'text-primary-700' : 'text-neutral-600'}`}>{service.short}</p>
                      {isHovered && (
                        <div className="absolute left-0 right-0 top-full mt-2 p-4 rounded-xl border-2 border-primary-300 bg-white shadow-2xl ring-2 ring-primary-200/50 z-40 min-w-[280px] animate-fade-in border-l-4 border-l-secondary-500 bg-gradient-to-b from-primary-50/80 to-white">
                          <p className="text-primary-800 font-medium text-xs uppercase tracking-wide mb-2">Learn more</p>
                          <p className="text-neutral-700 text-sm leading-relaxed">{service.detail}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              <div className="h-[320px] md:h-[380px] w-full rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4386397/pexels-photo-4386397.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Couple reviewing retirement plan with financial advisor"
                  className="w-full h-full object-cover object-center"
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
                <Button variant="primary" size="lg" href={CALENDLY_INSURANCE_URL} external={true}>
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
            <Button variant="secondary" size="lg" href={CALENDLY_INSURANCE_URL} external={true}>
              Schedule Free Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicePayroll;
