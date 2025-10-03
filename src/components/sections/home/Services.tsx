import React from 'react';
import { BookOpen, DollarSign, FileText, LineChart, Laptop } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';
import ServiceCard from '../../ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <BookOpen size={24} />,
      title: 'Professional Bookkeeping Services',
      description: 'Comprehensive bookkeeping services including accounts payable, accounts receivable, bank reconciliation, and financial reporting to keep your business finances organized and compliant.',
      href: '/services#bookkeeping',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Payroll Management & Processing',
      description: 'Complete payroll solutions including employee payment processing, tax withholdings, benefits administration, and payroll reporting for businesses of all sizes.',
      href: '/services#payroll',
    },
    {
      icon: <FileText size={24} />,
      title: 'QuickBooks Online (QBO) Cleanup',
      description: 'Expert QuickBooks Online file cleanup, data organization, and optimization services to ensure accurate financial records and improved business performance.',
      href: '/services#quickbooks-cleanup',
    },
    {
      icon: <LineChart size={24} />,
      title: 'Business Consulting & Strategy',
      description: 'Strategic business consulting services including financial analysis, growth planning, process optimization, and performance improvement to drive sustainable business growth.',
      href: '/services#consulting',
    },
    {
      icon: <Laptop size={24} />,
      title: 'QuickBooks Support & Training',
      description: 'Professional QuickBooks support including file repair, data migration, user training, and ongoing technical assistance to maximize your accounting software efficiency.',
      href: '/services#quickbooks',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Professional Financial Services & Business Solutions"
          subtitle="Expert bookkeeping, payroll management, tax preparation, and business consulting services designed to help small and medium-sized businesses thrive and grow"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              className={`transform transition-transform hover:-translate-y-1 ${index % 2 === 0 ? 'animate-fade-in delay-100' : 'animate-fade-in delay-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;