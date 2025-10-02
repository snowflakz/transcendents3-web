import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw } from 'lucide-react';

interface CookiePreferencesProps {
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookiePreferences: React.FC<CookiePreferencesProps> = ({ onClose, onSave }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Load existing preferences
    const saved = localStorage.getItem('cookie-preferences');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferences(parsed);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return; // Necessary cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent', 'custom');
    onSave(preferences);
    onClose();
  };

  const handleReset = () => {
    const defaultPrefs = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(defaultPrefs);
  };

  const cookieCategories = [
    {
      key: 'necessary' as keyof CookiePreferences,
      title: 'Necessary Cookies',
      description: 'Essential cookies required for the website to function properly. These cannot be disabled.',
      required: true,
      examples: ['Session management', 'Security features', 'Basic website functionality']
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting anonymous information.',
      required: false,
      examples: ['Google Analytics', 'Page views', 'User behavior tracking']
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.',
      required: false,
      examples: ['Social media pixels', 'Advertising networks', 'Remarketing']
    },
    {
      key: 'preferences' as keyof CookiePreferences,
      title: 'Preference Cookies',
      description: 'Remember your choices and preferences to provide a personalized experience.',
      required: false,
      examples: ['Language settings', 'Theme preferences', 'Form data']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold font-heading text-primary-800">
            Cookie Preferences
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="Close preferences"
          >
            <X className="h-5 w-5 text-neutral-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-neutral-700 mb-6">
            Manage your cookie preferences below. You can enable or disable different categories of cookies according to your needs.
          </p>

          {/* Cookie Categories */}
          <div className="space-y-6">
            {cookieCategories.map((category) => (
              <div key={category.key} className="border border-neutral-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800">
                      {category.title}
                    </h3>
                    {category.required && (
                      <span className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                  
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences[category.key]}
                      onChange={() => handleToggle(category.key)}
                      disabled={category.required}
                      className="sr-only peer"
                    />
                    <div className={`w-11 h-6 rounded-full peer ${
                      category.required ? 'bg-primary-300' : 'bg-neutral-300'
                    } peer-checked:bg-primary-600 peer-disabled:opacity-50 transition-colors`}>
                      <div className={`peer-checked:translate-x-full peer-checked:border-white absolute left-[2px] top-[2px] bg-white border border-neutral-300 rounded-full h-5 w-5 transition-all ${
                        category.required ? 'translate-x-full' : ''
                      }`}></div>
                    </div>
                  </label>
                </div>
                
                <p className="text-neutral-600 mb-3">
                  {category.description}
                </p>
                
                <div className="text-sm text-neutral-500">
                  <strong>Examples:</strong> {category.examples.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={handleSave}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Preferences
            </button>
            
            <button
              onClick={handleReset}
              className="flex-1 bg-neutral-600 hover:bg-neutral-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Default
            </button>
          </div>

          {/* Footer Info */}
          <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
            <p className="text-sm text-neutral-600">
              <strong>Note:</strong> Your preferences will be saved locally on your device. You can change these settings at any time by clicking the "Cookie Settings" button in our cookie notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;
