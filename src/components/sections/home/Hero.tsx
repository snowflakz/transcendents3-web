import React, { useState } from 'react';
import Button from '../../ui/Button';
import { CALENDLY_CONSULTATION_URL, FORM_SUBMIT_URL } from '../../../constants';
import InputMaskComponent from '../../ui/InputMask';
import { useNotification } from '../../ui/NotificationProvider';

const Hero: React.FC = () => {
  const { addNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name.trim()) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please enter your name',
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please enter your email address',
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim()) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please enter your phone number',
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.business.trim()) {
      addNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please tell us more about your business',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'New Free Assessment Request - Transcendents3',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          'Tell us more about your business': formData.business,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      
      addNotification({
        type: 'success',
        title: 'Request Submitted!',
        message: 'Thank you! We\'ll contact you within 24 hours to schedule your free assessment.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
      });
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Submission Failed',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-primary-800 overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
          role="img"
          aria-label="Professional financial services and business consulting background image"
        ></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
              Expert <span className="text-secondary-500">Bookkeeping & Payroll</span> Services for Your Business
            </h1>
            <p className="text-xl text-neutral-200 mb-8 max-w-lg">
              Professional bookkeeping, payroll management, tax preparation, and business consulting services. Let our certified experts handle your finances so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                href={CALENDLY_CONSULTATION_URL}
                external={true}
              >
                Schedule a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/services"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Our Services
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <div className="flex items-center">
                <span className="text-white text-xl font-bold mr-2">50+</span>
                <span className="text-neutral-300 text-sm">Clients Served</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex items-center">
                <span className="text-white text-xl font-bold mr-2">10+</span>
                <span className="text-neutral-300 text-sm">Years Experience</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex items-center">
                <span className="text-white text-xl font-bold mr-2">4.9</span>
                <span className="text-neutral-300 text-sm">Customer Rating</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-slide-in-right">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold font-heading text-primary-800 mb-4">
                Free Financial Health Check
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <InputMaskComponent
                  id="name"
                  label="Your Name"
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(value) => handleInputChange('name', value)}
                  required
                  validation={{
                    minLength: 2,
                    message: 'Name must be at least 2 characters long'
                  }}
                />
                
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
                  required
                />
                
                <InputMaskComponent
                  id="business"
                  label="Tell us more about your business"
                  type="text"
                  placeholder="e.g. Retail store, Consulting firm, Restaurants..."
                  value={formData.business}
                  onChange={(value) => handleInputChange('business', value)}
                  required
                  validation={{
                    minLength: 3,
                    message: 'Please provide at least 3 characters'
                  }}
                />
                
                <Button
                  variant="secondary"
                  size="md"
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Your Free Assessment'}
                </Button>
              </form>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-secondary-500 text-white p-4 rounded-lg shadow-lg transform rotate-3">
              <span className="font-bold">100% Free</span>
              <span className="block text-sm">No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;