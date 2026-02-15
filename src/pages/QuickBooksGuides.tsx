import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import {
  CALENDLY_CONSULTATION_URL,
  EBOOK_DOWNLOAD_URL,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID_EBOOK,
  FORM_SUBMIT_URL,
} from '../constants';
import { BookOpen, Download, CheckCircle } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Full thank-you email HTML sent to the recipient (same content as before the update). */
function getEbookEmailHtml(firstName: string, downloadUrl: string): string {
  const name = firstName || 'Friend';
  return `
<p>Dear ${escapeHtml(name)},</p>

<p>Thank you for downloading our free eBook, "The Small Business Bookkeeping Blueprint"!</p>

<p>We're thrilled to help you take the first step toward mastering your business finances. This guide is packed with beginner-friendly tips on bookkeeping principles, expense tracking, and setting up simple financial systems—perfect for small business owners, freelancers, and Texas entrepreneurs like you.</p>

<p><a href="${escapeHtml(downloadUrl)}" target="_blank" rel="noopener" style="color:#0d9488;font-weight:600;text-decoration:underline;">Click here to download your free eBook now!</a></p>

<p>Inside, you'll find actionable advice, downloadable templates, and real-world examples to save time, reduce stress, and boost your profits. Whether you're juggling receipts or tackling QuickBooks for the first time, this blueprint is your go-to resource.</p>

<p>Ready to take it further? Schedule a free 15-minute consultation with our experts at Transcendents3 to personalize these strategies for your business.</p>

<p>Visit <a href="https://transcendents3.com" style="color:#1e40af;text-decoration:underline;">transcendents3.com</a> to book your slot today!</p>

<p>Warm regards,<br/>The Transcendents3 Team<br/><span style="font-size:12px;color:#64748b;">Email: info@transcendents3.com | Phone: +1 (540) 929-9002 | Website: transcendents3.com</span></p>
`.trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const QuickBooksGuides: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; email?: string }>({});

  const validate = (): boolean => {
    const next: typeof errors = {};
    const f = firstName.trim();
    const l = lastName.trim();
    const e = email.trim();
    if (!f) next.firstName = 'First name is required.';
    else if (f.length < 2) next.firstName = 'First name must be at least 2 characters.';
    if (!l) next.lastName = 'Last name is required.';
    else if (l.length < 2) next.lastName = 'Last name must be at least 2 characters.';
    if (!e) next.email = 'Email is required.';
    else if (!EMAIL_REGEX.test(e)) next.email = 'Please enter a valid email address.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const f = firstName.trim();
    const l = lastName.trim();
    const userEmail = email.trim();
    setIsSubmitting(true);
    setErrors({});
    try {
      const res = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `${f} has just downloaded our ebook`,
          firstName: f,
          lastName: l,
          email: userEmail,
          _template: 'box',
          _captcha: 'false',
        }),
      });
      if (res.ok) {
        setSubmittedEmail(userEmail);
        setSubmitted(true);
        // Send the full thank-you email (with salutation and download link) to the recipient
        if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID_EBOOK) {
          try {
            await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID_EBOOK,
              {
                to_email: userEmail,
                from_name: 'Transcendents3',
                subject: 'Your free eBook from Transcendents3',
                message_html: getEbookEmailHtml(f, EBOOK_DOWNLOAD_URL),
                first_name: f,
                download_link: EBOOK_DOWNLOAD_URL,
              },
              { publicKey: EMAILJS_PUBLIC_KEY }
            );
          } catch (err) {
            if (import.meta.env.DEV) console.error('EmailJS send failed:', err);
            // Still show success; owner was notified and user can use backup link
          }
        }
      } else {
        setErrors({ email: 'Something went wrong. Please try again.' });
      }
    } catch {
      setSubmittedEmail(userEmail);
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
        path="/resources/quickbooks-guides"
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
                        <p className="text-neutral-600 text-sm">Enter your details to receive the eBook by email</p>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">First Name *</label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value); setErrors((prev) => ({ ...prev, firstName: undefined })); }}
                            placeholder="John"
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 ${errors.firstName ? 'border-red-500' : 'border-neutral-300'}`}
                            aria-invalid={!!errors.firstName}
                            aria-describedby={errors.firstName ? 'err-firstname' : undefined}
                          />
                          {errors.firstName && <p id="err-firstname" className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Last Name *</label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value); setErrors((prev) => ({ ...prev, lastName: undefined })); }}
                            placeholder="Smith"
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 ${errors.lastName ? 'border-red-500' : 'border-neutral-300'}`}
                            aria-invalid={!!errors.lastName}
                            aria-describedby={errors.lastName ? 'err-lastname' : undefined}
                          />
                          {errors.lastName && <p id="err-lastname" className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: undefined })); }}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-500' : 'border-neutral-300'}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'err-email' : undefined}
                        />
                        {errors.email && <p id="err-email" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>
                      <Button variant="primary" size="lg" type="submit" fullWidth disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Download Free Guide'}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <CheckCircle className="h-16 w-16 text-secondary-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-primary-800 mb-2">Thank you!</h2>
                    <p className="text-neutral-700 mb-4">
                      Your eBook has been sent to <strong className="text-primary-800">{submittedEmail}</strong>.
                    </p>
                    <p className="text-neutral-600 text-sm mb-6">
                      Please check your inbox and spam folder. If you don&apos;t see it shortly, use the link below to download.
                    </p>
                    <a
                      href={EBOOK_DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 font-medium"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download eBook
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-12 grid gap-6">
                <h3 className="text-xl font-bold text-primary-800">What&apos;s Inside the Guide</h3>
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
