import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { useNotification } from '../components/ui/NotificationProvider';
import { CAREER_EMAIL } from '../constants';
import { Briefcase, Upload, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const FORM_SUBMIT_URL = `https://formsubmit.co/${CAREER_EMAIL}`;

const JOBS = [
  {
    id: 'bookkeeper',
    title: 'Senior Bookkeeper',
    location: 'Richmond, TX / Remote',
    type: 'Full-time',
    description: 'We are seeking an experienced Senior Bookkeeper to join our team. You will manage bookkeeping for multiple clients, ensure accuracy in financial records, and support tax preparation workflows.',
    responsibilities: [
      'Maintain accurate books for multiple small business clients',
      'Process accounts payable/receivable, payroll, and bank reconciliations',
      'Prepare financial statements and tax-ready reports',
      'Use QuickBooks Online and related tools',
      'Communicate with clients and ensure deadlines are met',
    ],
    requirements: [
      '3+ years bookkeeping experience',
      'QuickBooks Online certification or equivalent experience',
      'Strong attention to detail and organizational skills',
      'Proficiency in MS Excel',
      'Ability to work independently and meet deadlines',
    ],
  },
  {
    id: 'tax-preparer',
    title: 'Tax Preparer & Accountant',
    location: 'Richmond, TX / Hybrid',
    type: 'Full-time',
    description: 'Join our tax team to prepare individual and business tax returns, provide tax planning advice, and support clients throughout the year.',
    responsibilities: [
      'Prepare federal and state tax returns for individuals and businesses',
      'Conduct tax planning and quarterly estimated tax calculations',
      'Research tax law changes and ensure compliance',
      'Assist with IRS and state notice responses',
      'Collaborate with bookkeeping team on client matters',
    ],
    requirements: [
      '2+ years tax preparation experience',
      'Enrolled Agent, CPA, or equivalent preferred',
      'Knowledge of federal and Texas state tax laws',
      'Experience with tax software (e.g., Lacerte, TurboTax Pro)',
      'Excellent communication and client service skills',
    ],
  },
  {
    id: 'quickbooks-specialist',
    title: 'QuickBooks Specialist',
    location: 'Remote',
    type: 'Part-time / Contract',
    description: 'We need a QuickBooks expert to perform cleanup, setup, and training for client accounts. Ideal for someone with deep QBO experience.',
    responsibilities: [
      'Perform QuickBooks Online setup and cleanup for new/existing clients',
      'Reconcile bank accounts, credit cards, and balance sheet items',
      'Create and maintain chart of accounts, products/services',
      'Train clients on QBO best practices',
      'Troubleshoot and resolve data quality issues',
    ],
    requirements: [
      'QuickBooks Online ProAdvisor certification',
      '2+ years hands-on QBO experience',
      'Experience with multi-entity and multi-currency setups',
      'Strong problem-solving skills',
      'Availability for client calls during business hours',
    ],
  },
];

const Career: React.FC = () => {
  const { addNotification } = useNotification();
  const [searchParams, setSearchParams] = useSearchParams();
  const [expandedJob, setExpandedJob] = useState<string | null>(JOBS[0].id);

  useEffect(() => {
    if (searchParams.get('submitted') === '1') {
      addNotification({
        type: 'success',
        title: 'Application Submitted!',
        message: 'Thank you! We will review your application and contact you soon.',
      });
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams, addNotification]);

  return (
    <>
      <SEO
        title="Careers | Join Our Team - Transcendents3"
        description="Join Transcendents3. We're hiring bookkeepers, tax preparers, and QuickBooks specialists. Apply with your CV today."
        keywords="bookkeeper jobs, accounting careers, Transcendents3 careers, Texas bookkeeping jobs"
      />
      <div className="min-h-screen bg-neutral-50">
        {/* Hero */}
        <section className="relative bg-primary-800 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src="https://images.pexels.com/photos/2592394/pexels-photo-2592394.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                Careers at Transcendents3
              </h1>
              <p className="text-xl text-neutral-200">
                Join a team of certified professionals delivering exceptional bookkeeping, payroll, and tax services across Texas and the USA.
              </p>
            </div>
          </div>
        </section>

        {/* Intro with image */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.pexels.com/photos/5716008/pexels-photo-5716008.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team collaborating in office" className="rounded-2xl shadow-xl" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">Build Your Career With Us</h2>
                <p className="text-neutral-700 mb-4">At Transcendents3, we believe in nurturing talent and rewarding excellence. Our team members enjoy flexible work arrangements, ongoing development, and the opportunity to work with diverse clients across Texas and beyond.</p>
                <p className="text-neutral-700">Whether you&apos;re an experienced bookkeeper, a tax professional, or a QuickBooks specialist, we have a place for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-10">Open Positions</h2>
            <div className="space-y-4">
              {JOBS.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-800">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-neutral-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <span className="mt-2 sm:mt-0">
                      {expandedJob === job.id ? (
                        <ChevronUp className="w-6 h-6 text-primary-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-primary-600" />
                      )}
                    </span>
                  </button>
                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 border-t border-neutral-100 pt-4">
                      <p className="text-neutral-700 mb-4">{job.description}</p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-primary-800 mb-2">Responsibilities</h4>
                          <ul className="list-disc list-inside text-neutral-600 space-y-1">
                            {job.responsibilities.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary-800 mb-2">Requirements</h4>
                          <ul className="list-disc list-inside text-neutral-600 space-y-1">
                            {job.requirements.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button
                          variant="primary"
                          size="md"
                          onClick={() => {
                            const sel = document.querySelector<HTMLSelectElement>('#apply-form select[name="Position"]');
                            if (sel) sel.value = job.title;
                            document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Apply for this position
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-form" className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Professional workspace for job applications" className="rounded-2xl shadow-xl" loading="lazy" />
              </div>
              <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Upload className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-800">Apply Now</h2>
                  <p className="text-neutral-600">Submit your CV and we'll be in touch.</p>
                </div>
              </div>
              <form
                action={FORM_SUBMIT_URL}
                method="POST"
                encType="multipart/form-data"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="Career Application - Transcendents3" />
                <input type="hidden" name="_next" value={`${window.location.origin}/careers?submitted=1`} />
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Position Applying For *</label>
                  <select
                    name="Position"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a position</option>
                    {JOBS.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Cover Letter</label>
                  <textarea
                    name="Cover Letter"
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us why you're a great fit..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Upload CV / Resume *</label>
                  <p className="text-sm text-neutral-500 mb-2">PDF or Word document, max 5MB</p>
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-primary-100 file:text-primary-800"
                  />
                </div>
                <Button variant="primary" size="lg" type="submit" fullWidth>
                  Submit Application
                </Button>
              </form>
              <p className="mt-4 text-sm text-neutral-500">
                By submitting, you consent to us storing your application details. CVs are retained for recruitment purposes.
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Questions?</h2>
            <p className="text-neutral-600 mb-4">
              Reach out to us at{' '}
              <a href={`mailto:${CAREER_EMAIL}`} className="text-primary-600 font-medium hover:underline">
                <Mail className="inline-block w-4 h-4 mr-1" />
                {CAREER_EMAIL}
              </a>
            </p>
            <Button variant="outline" size="md" href="/contact">
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Career;
