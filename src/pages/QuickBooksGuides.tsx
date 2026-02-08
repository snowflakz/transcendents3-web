import React, { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL, EBOOK_DOWNLOAD_URL, FORM_SUBMIT_URL } from '../constants';
import { BookOpen, Download, CheckCircle } from 'lucide-react';

const QuickBooksGuides: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `${firstName || 'Someone'} has just downloaded your eBook`,
          firstName: firstName || 'Not provided',
          lastName: lastName || 'Not provided',
          email,
          _template: 'box',
          _captcha: 'false',
        }),
      });
      if (res.ok) setSubmitted(true);
      else throw new Error();
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="QuickBooks Guide | Free Download - Texas Book Keeper | Transcendents3"
        description="Free QuickBooks guide and resources. Expert tutorials for small business bookkeeping. Download our comprehensive guide from Texas's trusted book keeper."
        keywords="bookkeeper Texas, QuickBooks guide, QuickBooks tutorials, book keeper USA, small business accounting, QBO guide"
      />
      <div className="min-h-screen bg-neutral-50">
        <section className="bg-primary-800 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                Free QuickBooks Guide for Small Business
              </h1>
              <p className="text-xl text-neutral-200">
                Master QuickBooks with our step-by-step guide. Used by hundreds of Texas and USA business owners.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {!submitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-primary-800">Get Your Free Guide</h2>
                        <p className="text-neutral-600 text-sm">Enter your email to download instantly</p>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">First Name *</label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="John"
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Last Name *</label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Smith"
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <Button variant="primary" size="lg" type="submit" fullWidth disabled={isSubmitting}>
                        {isSubmitting ? 'Processing...' : 'Download Free Guide'}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="py-8">
                    <CheckCircle className="h-16 w-16 text-secondary-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Thank You, {firstName || 'Friend'}!</h2>
                    <div className="prose prose-neutral max-w-none text-left space-y-4 text-neutral-700">
                      <p>
                        Dear {firstName || 'Friend'},
                      </p>
                      <p>
                        Thank you for downloading our free eBook, &quot;The Small Business Bookkeeping Blueprint&quot;!
                      </p>
                      <p>
                        We&apos;re thrilled to help you take the first step toward mastering your business finances. This guide is packed with beginner-friendly tips on bookkeeping principles, expense tracking, and setting up simple financial systems—perfect for small business owners, freelancers, and Texas entrepreneurs like you.
                      </p>
                      <p>
                        <a
                          href={EBOOK_DOWNLOAD_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-secondary-600 font-semibold hover:text-secondary-700 hover:underline"
                        >
                          Click here to download your free eBook now!
                          <Download className="w-4 h-4 ml-1 inline-block" />
                        </a>
                      </p>
                      <p>
                        Inside, you&apos;ll find actionable advice, downloadable templates, and real-world examples to save time, reduce stress, and boost your profits. Whether you&apos;re juggling receipts or tackling QuickBooks for the first time, this blueprint is your go-to resource.
                      </p>
                      <p>
                        Ready to take it further? Schedule a free 15-minute consultation with our experts at Transcendents3 to personalize these strategies for your business.
                      </p>
                      <p>
                        Visit{' '}
                        <a href="https://transcendents3.com" className="text-primary-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                          transcendents3.com
                        </a>{' '}
                        to book your slot today!
                      </p>
                      <p className="pt-4">
                        Warm regards,
                        <br />
                        The Transcendents3 Team
                        <br />
                        <span className="text-sm">
                          Email: info@transcendents3.com | Phone: +1 (540) 929-9002 | Website: transcendents3.com
                        </span>
                      </p>
                    </div>
                    <div className="mt-8 text-center">
                      <a
                        href={EBOOK_DOWNLOAD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 font-medium"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Free eBook Now
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-12 grid gap-6">
                <h3 className="text-xl font-bold text-primary-800">What's Inside the Guide</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                    QuickBooks Online setup for Texas businesses
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                    Chart of accounts best practices
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                    Invoicing and expense tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                    Tax-ready reports for USA compliance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                    Common mistakes to avoid
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center p-6 bg-primary-50 rounded-xl">
                <h3 className="text-lg font-bold text-primary-800 mb-2">Need Help with QuickBooks?</h3>
                <p className="text-neutral-600 mb-4">Our Texas book keepers offer setup, cleanup, and training.</p>
                <Button variant="primary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuickBooksGuides;
