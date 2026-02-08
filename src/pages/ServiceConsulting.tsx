import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL } from '../constants';
import { LineChart, CheckCircle } from 'lucide-react';

const ServiceConsulting: React.FC = () => {
  return (
    <>
      <SEO
        title="Business Consulting | Strategic Financial Advice | Texas & USA | Transcendents3"
        description="Expert business consulting for growth. Cash flow forecasting, budgeting, profit improvement. Strategic advice from certified financial professionals."
        keywords="business consulting Texas, financial consulting, cash flow, business strategy, book keeper USA"
      />
      <div className="min-h-screen">
        <section className="relative bg-primary-800 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                Business Consulting & Advisory
              </h1>
              <p className="text-xl text-neutral-200 mb-8">
                Strategic financial guidance to help you grow. Cash flow forecasting, budgeting, profit improvement—and a partner who speaks your language.
              </p>
              <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                Book Free Consulting Call
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.pexels.com/photos/6758788/pexels-photo-6758788.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Business planning" className="rounded-2xl shadow-xl" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">Why Business Consulting Matters</h2>
                <p className="text-neutral-700 mb-4">Data without strategy is just numbers. You need someone who can turn your financials into actionable insights—who can spot opportunities, flag risks, and help you make decisions that move the needle.</p>
                <p className="text-neutral-700 mb-6">Whether you're scaling, pivoting, or optimizing, a trusted advisor can mean the difference between guesswork and confidence. Growth requires clarity. We provide it.</p>
                <ul className="space-y-3">
                  {['Clear cash flow visibility', 'Strategic budgeting and planning', 'Profit improvement strategies', 'Risk assessment and mitigation'].map((item, i) => (
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
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Who Needs Business Consulting?</h3>
            <p className="text-neutral-700 max-w-3xl mx-auto mb-6">Entrepreneurs ready to scale. Business owners stuck in the day-to-day. Startups raising capital. Anyone who wants financial clarity without the jargon. If you're making big decisions, you need someone in your corner.</p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Get Strategic Advice
            </Button>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">What We Include</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Cash flow forecasting',
                'Budget preparation & analysis',
                'Business plan development',
                'Profit improvement strategies',
                'Process optimization',
                'Financial risk assessment',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md">
                  <LineChart className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
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
                <img src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team collaboration" className="rounded-2xl shadow-xl" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">The Value of Strategic Guidance</h2>
                <p className="text-neutral-700 mb-4">A good consultant doesn't just report numbers—they help you understand what they mean and what to do next. From cash flow crunches to expansion decisions, having someone who's seen it before can save you costly mistakes.</p>
                <p className="text-neutral-700 mb-6">Our clients use our consulting to secure loans, plan growth, and make confident decisions. The ROI isn't just in dollars—it's in clarity and direction.</p>
                <Button variant="primary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                  Start Your Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Strategic Clarity?</h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">Let's discuss your goals and map out the path to get there.</p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Schedule Free Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceConsulting;
