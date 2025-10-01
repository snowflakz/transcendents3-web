import React from 'react';
import { Calculator, FileText, BookOpen, Download, BarChart3, Video } from 'lucide-react';
import Button from '../components/ui/Button';

const resources = [
  {
    icon: Calculator,
    title: 'Financial Calculators',
    description: 'Tools to help you calculate taxes, depreciation, and other financial metrics.',
    link: '/resources/calculators',
    comingSoon: true,
  },
  {
    icon: FileText,
    title: 'Tax Forms & Documents',
    description: 'Download commonly used tax forms and business documents.',
    link: '/resources/tax-forms',
    comingSoon: true,
  },
  {
    icon: BookOpen,
    title: 'QuickBooks Guides',
    description: 'Step-by-step guides to help you master QuickBooks.',
    link: '/resources/quickbooks-guides',
    comingSoon: true,
  },
  {
    icon: Download,
    title: 'Business Templates',
    description: 'Free templates for invoices, budgets, and financial reports.',
    link: '/resources/templates',
    comingSoon: true,
  },
  {
    icon: BarChart3,
    title: 'Industry Reports',
    description: 'Financial insights and trends for various industries.',
    link: '/resources/reports',
    comingSoon: true,
  },
  {
    icon: Video,
    title: 'Webinars & Training',
    description: 'Educational content to help you improve your financial management.',
    link: '/resources/webinars',
    comingSoon: true,
  },
];

const Resources: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-800 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Resources
            </h1>
            <p className="text-xl text-neutral-200">
              Tools, guides, and educational content to help you manage your business finances
            </p>
          </div>
        </div>
      </div>
      
      {/* Resources Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative"
                  >
                    {resource.comingSoon && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-secondary-500 text-white text-xs px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold font-heading text-primary-800 mb-3">
                      {resource.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4">
                      {resource.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      href={resource.comingSoon ? undefined : resource.link}
                      disabled={resource.comingSoon}
                      className="w-full"
                    >
                      {resource.comingSoon ? 'Coming Soon' : 'Access Resource'}
                    </Button>
                  </div>
                );
              })}
            </div>
            
            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-primary-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Need Immediate Help?
                </h2>
                <p className="text-neutral-700 mb-6">
                  While we're preparing these resources, our team is ready to provide personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" href="/contact">
                    Contact Us
                  </Button>
                  <Button variant="secondary" size="lg" href="/services">
                    View Our Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
