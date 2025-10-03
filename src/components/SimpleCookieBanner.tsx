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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary-100 p-2 rounded-full flex-shrink-0 mt-1">
              <Cookie className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-1">
                We use cookies
              </h3>
              <p className="text-sm text-neutral-600">
                We use cookies to enhance your browsing experience and analyze site traffic. 
                By clicking "Accept All", you consent to our use of cookies. 
                <Link to="/cookie-policy" className="text-primary-600 hover:text-primary-700 underline ml-1">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCookieBanner;
