import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import { BookOpen, DollarSign, Laptop, LineChart, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      id: 'bookkeeping',
      icon: <BookOpen size={40} className="text-secondary-500" />,
      title: 'Bookkeeping',
      description: 'Accurate, organized books that keep your business compliant and ready for growth. Monthly statements, reconciliations, and tax-ready reports.',
      path: '/services/bookkeeping',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'payroll',
      icon: <DollarSign size={40} className="text-secondary-500" />,
      title: 'Payroll',
      description: 'On-time paychecks, proper tax withholding, and zero compliance headaches. W-2s, 1099s, and payroll tax filing done right.',
      path: '/services/payroll',
      image: 'https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'quickbooks-cleanup',
      icon: <Laptop size={40} className="text-secondary-500" />,
      title: 'QuickBooks (QBO) Cleanup',
      description: 'Messy QuickBooks? We clean it up. Error correction, chart optimization, and reports you can trust. Certified ProAdvisors.',
      path: '/services/quickbooks-cleanup',
      image: 'https://images.pexels.com/photos/4475524/pexels-photo-4475524.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'consulting',
      icon: <LineChart size={40} className="text-secondary-500" />,
      title: 'Business Consulting',
      description: 'Strategic financial guidance for growth. Cash flow forecasting, budgeting, profit improvement, and a partner who speaks your language.',
      path: '/services/consulting',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <>
      <div className="bg-primary-800 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Our Financial Services
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Comprehensive financial solutions tailored to help your business thrive
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Explore Our Services"
            subtitle="Each service is designed to address specific business needs. Click through to learn more."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold font-heading text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                    Learn More
                    <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Ready to transform your financial management?
            </h2>
            <p className="text-lg text-neutral-200 mb-8">
              Contact us today to schedule a free consultation and discover how our financial services can help your business thrive.
            </p>
            <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
