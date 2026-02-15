import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL } from '../constants';
import { DollarSign, CheckCircle, Shield } from 'lucide-react';

const ServicePayroll: React.FC = () => {
  return (
    <>
      <SEO
        title="Payroll Services | Compliant & Accurate | Texas & USA | Transcendents3"
        description="Professional payroll processing for small businesses. On-time payments, tax compliance, and peace of mind. Trusted by Texas and USA business owners."
        keywords="payroll services Texas, small business payroll, payroll compliance, Texas payroll, book keeper USA"
        path="/services/payroll"
      />
      <div className="min-h-screen">
        <section className="relative bg-primary-800 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                Payroll Services That Keep You Compliant
              </h1>
              <p className="text-xl text-neutral-200 mb-8">
                Accurate, on-time paychecks. Proper tax withholding. Zero compliance headaches. Focus on your team—we'll handle the rest.
              </p>
              <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                Get Free Payroll Consultation
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Payroll processing" className="rounded-2xl shadow-xl" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">Why Payroll Compliance Matters</h2>
                <p className="text-neutral-700 mb-4">One misclassified employee or missed tax filing can cost thousands in penalties. The IRS and state labor boards don't forgive "I didn't know." Proper payroll isn't optional—it's essential for protecting your business and your team.</p>
                <p className="text-neutral-700 mb-6">When payroll is done right, your employees get paid on time, taxes are filed correctly, and you sleep well knowing you're compliant. No surprises. No audits.</p>
                <ul className="space-y-3">
                  {['Avoid costly penalties and back wages', 'Keep employees happy with on-time pay', 'Stay current with tax law changes', 'W-2s and 1099s done right'].map((item, i) => (
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
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Who Needs Payroll Services?</h3>
            <p className="text-neutral-700 max-w-3xl mx-auto mb-6">Business owners with employees—whether you have 2 or 50. Contractors who need 1099s. Startups scaling their team. Anyone who wants payroll done right without the headache.</p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Book Free Payroll Review
            </Button>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">What We Include</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Payroll processing & direct deposit',
                'Tax withholding & reporting',
                'W-2 and 1099 preparation',
                'Payroll tax filing',
                'Benefits administration support',
                'Time tracking integration',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md">
                  <DollarSign className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
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
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team collaboration" className="rounded-2xl shadow-xl" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">The Value of Outsourced Payroll</h2>
                <p className="text-neutral-700 mb-4">Payroll is complex. Tax rates change. Deadlines pile up. Doing it yourself—or with an inexperienced team member—risks errors that cost far more than professional help.</p>
                <p className="text-neutral-700 mb-6">Our clients save time, avoid penalties, and keep their focus on growing their business. The investment pays for itself in peace of mind alone.</p>
                <Button variant="primary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Stress-Free Payroll?</h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">Let our experts handle your payroll so you can focus on what matters most.</p>
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
