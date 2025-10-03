import React, { createContext, useContext, useState, useEffect } from 'react';
import CookieConsent from './CookieConsent';
import CookiePreferences from './CookiePreferences';
import { CookiePreferences as CookiePrefsType } from './CookiePreferences';

interface CookieContextType {
  showPreferences: () => void;
  acceptAllCookies: () => void;
  denyCookies: () => void;
  getPreferences: () => CookiePrefsType | null;
  updatePreferences: (preferences: CookiePrefsType) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const useCookie = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
};

interface CookieProviderProps {
  children: React.ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePrefsType | null>(null);

  useEffect(() => {
    // Load existing preferences
    const saved = localStorage.getItem('cookie-preferences');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferences(parsed);
      } catch (error) {
        console.error('Error loading cookie preferences:', error);
      }
    }
  }, []);

  const showPreferences = () => {
    setShowPreferencesModal(true);
  };

  const acceptAllCookies = () => {
    try {
      const allAccepted = {
        necessary: true,
        analytics: true,
        marketing: true,
        preferences: true
      };
      
      localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
      localStorage.setItem('cookie-consent', 'accepted');
      setPreferences(allAccepted);
      
      // Initialize analytics and marketing tools
      initializeAnalytics();
      initializeMarketing();
    } catch (error) {
      console.error('Error accepting cookies:', error);
    }
  };

  const denyCookies = () => {
    try {
      const minimal = {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false
      };
      
      localStorage.setItem('cookie-preferences', JSON.stringify(minimal));
      localStorage.setItem('cookie-consent', 'denied');
      setPreferences(minimal);
      
      // Disable analytics and marketing tools
      disableAnalytics();
      disableMarketing();
    } catch (error) {
      console.error('Error denying cookies:', error);
    }
  };

  const updatePreferences = (newPreferences: CookiePrefsType) => {
    try {
      localStorage.setItem('cookie-preferences', JSON.stringify(newPreferences));
      localStorage.setItem('cookie-consent', 'custom');
      setPreferences(newPreferences);
      
      // Apply preferences
      if (newPreferences.analytics) {
        initializeAnalytics();
      } else {
        disableAnalytics();
      }
      
      if (newPreferences.marketing) {
        initializeMarketing();
      } else {
        disableMarketing();
      }
    } catch (error) {
      console.error('Error updating cookie preferences:', error);
    }
  };

  const getPreferences = () => {
    return preferences;
  };

  // Analytics initialization
  const initializeAnalytics = () => {
    // Google Analytics initialization
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
    
    // Add other analytics tools here
    console.log('Analytics cookies enabled');
  };

  const disableAnalytics = () => {
    // Disable Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
    
    console.log('Analytics cookies disabled');
  };

  // Marketing initialization
  const initializeMarketing = () => {
    // Facebook Pixel, Google Ads, etc.
    console.log('Marketing cookies enabled');
  };

  const disableMarketing = () => {
    console.log('Marketing cookies disabled');
  };

  const handleClosePreferences = () => {
    setShowPreferencesModal(false);
  };

  const handleSavePreferences = (newPreferences: CookiePrefsType) => {
    updatePreferences(newPreferences);
    setShowPreferencesModal(false);
  };

  return (
    <CookieContext.Provider
      value={{
        showPreferences,
        acceptAllCookies,
        denyCookies,
        getPreferences,
        updatePreferences,
      }}
    >
      {children}
      
      {/* Cookie Consent Banner */}
      <CookieConsent
        onAcceptAll={acceptAllCookies}
        onDeny={denyCookies}
        onShowPreferences={showPreferences}
      />
      
      {/* Cookie Preferences Modal */}
      {showPreferencesModal && (
        <CookiePreferences
          onClose={handleClosePreferences}
          onSave={handleSavePreferences}
        />
      )}
    </CookieContext.Provider>
  );
};

// Remove global window interface declaration to avoid conflicts
