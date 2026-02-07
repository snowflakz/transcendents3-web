import React, { useState } from 'react';
import Button from '../../ui/Button';
import { CALENDLY_CONSULTATION_URL } from '../../../constants';
import { CheckCircle } from 'lucide-react';
import InputMaskComponent from '../../ui/InputMask';
import { useNotification } from '../../ui/NotificationProvider';

const CallToAction: React.FC = () => {
  const { addNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    'Save time and focus on growing your business',
    'Reduce costly financial errors and risks',
    'Gain clear insights into your financial health',
    'Streamline your QuickBooks and financial processes',
    'Access expert financial guidance when you need it',
  ];

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

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      addNotification({
        type: 'success',
        title: 'Consultation Requested!',
        message: 'Thank you! We\'ll contact you within 24 hours to schedule your free consultation.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
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
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Column */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Business professionals in meeting" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-800/80 to-primary-900/60"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Financial Management?
                  </h3>
                  <p className="text-neutral-200 max-w-md mx-auto lg:mx-0">
                    Join hundreds of businesses that have streamlined their financial operations with Transcendents3.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold font-heading text-primary-800 mb-4">
                Schedule Your Free Consultation
              </h3>
              <div className="mb-6">
                <Button
                  variant="secondary"
                  size="lg"
                  href={CALENDLY_CONSULTATION_URL}
                  external={true}
                >
                  Schedule a Free Consultation
                </Button>
              </div>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-secondary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputMaskComponent
                    id="cta-name"
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
                    id="cta-email"
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                    required
                  />
                </div>
                
                <InputMaskComponent
                  id="cta-phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="(123) 456-7890"
                  mask="(999) 999-9999"
                  value={formData.phone}
                  onChange={(value) => handleInputChange('phone', value)}
                  required
                />
                
                <InputMaskComponent
                  id="cta-message"
                  label="How can we help?"
                  type="textarea"
                  placeholder="Tell us about your business and financial needs"
                  value={formData.message}
                  onChange={(value) => handleInputChange('message', value)}
                  rows={3}
                  validation={{
                    minLength: 10,
                    message: 'Please provide at least 10 characters describing your needs'
                  }}
                />
                
                <div className="!mt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Your Free Consultation'}
                  </Button>
                </div>
                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;