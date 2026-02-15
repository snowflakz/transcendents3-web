import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import InputMaskComponent from '../components/ui/InputMask';
import { useNotification } from '../components/ui/NotificationProvider';

const Contact: React.FC = () => {
  const { addNotification } = useNotification();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });
  
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Validate form
    if (!formData.firstName.trim()) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please enter your first name',
      });
      setFormStatus('idle');
      return;
    }

    if (!formData.lastName.trim()) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please enter your last name',
      });
      setFormStatus('idle');
      return;
    }

    if (!formData.email.trim()) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please enter your email address',
      });
      setFormStatus('idle');
      return;
    }

    if (!formData.subject.trim()) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please enter a subject',
      });
      setFormStatus('idle');
      return;
    }

    if (!formData.message.trim()) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please enter your message',
      });
      setFormStatus('idle');
      return;
    }

    if (!formData.consent) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please consent to storing your information',
      });
      setFormStatus('idle');
      return;
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addNotification({
        type: 'success',
        title: 'Message Sent!',
        message: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
      });
      
      setFormStatus('success');
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Submission Failed',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
      setFormStatus('error');
    }
  };
  
  return (
    <>
      <SEO
        title="Contact Us | Book Keeper Texas - Transcendents3"
        description="Contact Transcendents3 for bookkeeping, payroll, and QuickBooks support. Richmond TX office. Free consultation. Book keeper Texas & USA."
        keywords="contact Transcendents3, book keeper Texas, Richmond TX bookkeeper, free consultation, bookkeeping contact"
        path="/contact"
      />
      {/* Page Header */}
      <div className="relative bg-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-200">
              Reach out to our team to schedule a consultation or learn more about our services
            </p>
          </div>
        </div>
      </div>

      {/* Intro with image */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img src="https://images.pexels.com/photos/3182800/pexels-photo-3182800.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Get in touch with our team" className="rounded-2xl shadow-xl" loading="lazy" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Get in Touch</h2>
              <p className="text-neutral-700 mb-4">Whether you need bookkeeping support, payroll help, QuickBooks cleanup, or a free consultation—we&apos;re here for you. Our team typically responds within 24 hours.</p>
              <p className="text-neutral-700">Visit us at our Richmond, TX office or connect with us online. We look forward to hearing from you.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-0 md:py-12 -mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="mb-8">
                <img src="https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Transcendents3 office - Richmond TX" className="rounded-xl shadow-lg w-full" loading="lazy" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-primary-800 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Our Office</h3>
                    <p className="text-neutral-600">
                      5614 W Grand Pkwy, S Ste 102.<br />
                      Richmond, TX. 77407.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Phone</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+15409299002" className="hover:text-primary-600 transition-colors">
                        +1 (540) 929 9002
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Email</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@transcendents3.com" className="hover:text-primary-600 transition-colors">
                        info@transcendents3.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Business Hours</h3>
                    <p className="text-neutral-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold font-heading text-primary-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-neutral-100 hover:bg-primary-50 text-primary-800 p-3 rounded-full transition-colors" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-neutral-100 hover:bg-primary-50 text-primary-800 p-3 rounded-full transition-colors" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-neutral-100 hover:bg-primary-50 text-primary-800 p-3 rounded-full transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="bg-neutral-100 hover:bg-primary-50 text-primary-800 p-3 rounded-full transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold font-heading text-primary-800 mb-6">
                  Send Us a Message
                </h2>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <CheckCircle size={48} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700 mb-4">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setFormStatus('idle')}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputMaskComponent
                        id="firstName"
                        label="First Name"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(value) => handleInputChange('firstName', value)}
                        required
                        validation={{
                          minLength: 2,
                          message: 'First name must be at least 2 characters long'
                        }}
                      />
                      
                      <InputMaskComponent
                        id="lastName"
                        label="Last Name"
                        type="text"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(value) => handleInputChange('lastName', value)}
                        required
                        validation={{
                          minLength: 2,
                          message: 'Last name must be at least 2 characters long'
                        }}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputMaskComponent
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                        required
                      />
                      
                      <InputMaskComponent
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        placeholder="(123) 456-7890"
                        mask="(999) 999-9999"
                        value={formData.phone}
                        onChange={(value) => handleInputChange('phone', value)}
                      />
                    </div>
                    
                    <InputMaskComponent
                      id="subject"
                      label="Subject"
                      type="text"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={(value) => handleInputChange('subject', value)}
                      required
                      validation={{
                        minLength: 5,
                        message: 'Subject must be at least 5 characters long'
                      }}
                    />
                    
                    <InputMaskComponent
                      id="message"
                      label="Message"
                      type="textarea"
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(value) => handleInputChange('message', value)}
                      required
                      rows={5}
                      validation={{
                        minLength: 20,
                        message: 'Message must be at least 20 characters long'
                      }}
                    />
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => handleInputChange('consent', e.target.checked)}
                        required
                        className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="consent" className="ml-2 block text-sm text-neutral-700">
                        I consent to having this website store my submitted information so they can respond to my inquiry.
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                    </div>
                    
                    <div>
                      <Button
                        variant="primary"
                        size="lg"
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full md:w-auto"
                      >
                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;