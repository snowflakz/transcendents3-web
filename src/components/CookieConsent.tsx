import React, { useState, useEffect } from 'react';
import { X, Settings, Shield, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieConsentProps {
  onAcceptAll: () => void;
  onDeny: () => void;
  onShowPreferences: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  onAcceptAll,
  onDeny,
  onShowPreferences,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }));
    setIsVisible(false);
    onAcceptAll();
  };

  const handleDeny = () => {
    localStorage.setItem('cookie-consent', 'denied');
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }));
    setIsVisible(false);
    onDeny();
  };

  const handleShowPreferences = () => {
    onShowPreferences();
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
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <Shield className="h-4 w-4 mr-2" />
              Accept All
            </button>
            
            <button
              onClick={handleDeny}
              className="flex-1 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Deny
            </button>
            
            <button
              onClick={handleShowPreferences}
              className="flex-1 bg-neutral-800 hover:bg-neutral-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <Settings className="h-4 w-4 mr-2" />
              Cookie Settings
            </button>
          </div>

          {/* Additional Info */}
          <p className="text-xs text-neutral-500 mt-4 text-center">
            Your privacy is important to us. Learn more about how we protect your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
