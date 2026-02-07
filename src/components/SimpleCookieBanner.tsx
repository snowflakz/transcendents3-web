import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const SimpleCookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay to ensure page loads first
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full transition-colors"
          aria-label="Close cookie notice"
        >
          <X className="h-5 w-5 text-neutral-600" />
        </button>

        {/* Header */}
        <div className="pt-6 pb-4 px-6">
          <div className="flex items-center justify-center mb-3">
            <div className="bg-primary-100 p-3 rounded-full mr-3">
              <Cookie className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-xl font-bold font-heading text-primary-800">
              Transcendents3 Cookie Notice
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pb-6">
          <p className="text-neutral-700 leading-relaxed mb-6">
            We use cookies to enhance your browsing experience, improve site performance, and deliver personalized content relevant to your financial needs. By clicking "Accept All," you consent to the use of all cookies. You can manage your preferences or disable non-essential cookies anytime via "Cookie Settings." To learn more, please see our{' '}
            <Link 
              to="/cookie-policy" 
              className="text-primary-600 hover:text-primary-700 underline font-medium"
            >
              cookie policy
            </Link>
            .
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-3 rounded-md transition-colors text-sm"
            >
              Accept All
            </button>
            
            <button
              onClick={handleDecline}
              className="flex-1 bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-3 rounded-md transition-colors text-sm"
            >
              Deny
            </button>
            
            <Link
              to="/cookie-policy"
              onClick={() => {
                setIsVisible(false); // Close the cookie banner when navigating
              }}
              className="flex-1 bg-neutral-800 hover:bg-neutral-900 text-white font-medium py-2 px-3 rounded-md transition-colors text-sm text-center"
            >
              View preferences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCookieBanner;
