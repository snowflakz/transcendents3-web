import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };
  
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-800 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      
      {/* Contact Information and Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
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
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                        Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="consent" className="ml-2 block text-sm text-neutral-700">
                        I consent to having this website store my submitted information so they can respond to my inquiry.
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