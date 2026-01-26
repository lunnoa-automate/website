'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, Shield, Cookie, ChevronDown, ChevronUp } from 'lucide-react';
import { consentManager } from '@/lib/consent-manager';

/**
 * EU and Switzerland compliant cookie consent banner
 * Implements GDPR, ePrivacy Directive, and Swiss FADP requirements
 */
export default function ConsentBanner() {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    console.log('🍪 ConsentBanner: Checking consent status...');
    
    // Check if user has already given consent
    const hasConsent = consentManager.hasConsent();
    console.log('🍪 ConsentBanner: hasConsent =', hasConsent);
    
    if (!hasConsent) {
      console.log('🍪 ConsentBanner: No consent found, showing banner in 500ms...');
      // Small delay to ensure page has loaded
      setTimeout(() => {
        setShowBanner(true);
        console.log('🍪 ConsentBanner: Banner shown!');
      }, 500);
    } else {
      console.log('🍪 ConsentBanner: Consent already exists, banner hidden');
      const consent = consentManager.getConsent();
      console.log('🍪 ConsentBanner: Existing consent:', consent);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    consentManager.saveConsent(consent);
    consentManager.loadGTM();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    consentManager.saveConsent(consent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    consentManager.saveConsent(preferences);
    if (preferences.analytics || preferences.marketing) {
      consentManager.loadGTM();
    }
    setShowBanner(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  const translations = {
    de: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu analysieren. Sie können Ihre Präferenzen jederzeit anpassen.',
      acceptAll: 'Alle akzeptieren',
      rejectAll: 'Ablehnen',
      customize: 'Anpassen',
      savePreferences: 'Speichern',
      necessary: {
        title: 'Notwendig',
        description: 'Erforderlich für Grundfunktionen',
        always: 'Immer aktiv',
      },
      analytics: {
        title: 'Analyse',
        description: 'Helfen uns, die Nutzung zu verstehen',
      },
      marketing: {
        title: 'Marketing',
        description: 'Für personalisierte Werbung (nicht aktiv)',
      },
      moreInfo: 'Mehr in unserer',
      privacyPolicy: 'Datenschutzerklärung',
      swiss: '🇨🇭 Schweizer Hosting • GDPR & FADP konform',
    },
    en: {
      title: 'Cookie Settings',
      description: 'We use cookies to improve your experience and analyze our website. You can adjust your preferences at any time.',
      acceptAll: 'Accept All',
      rejectAll: 'Reject',
      customize: 'Customize',
      savePreferences: 'Save',
      necessary: {
        title: 'Necessary',
        description: 'Required for basic functions',
        always: 'Always Active',
      },
      analytics: {
        title: 'Analytics',
        description: 'Help us understand usage',
      },
      marketing: {
        title: 'Marketing',
        description: 'For personalized ads (not active)',
      },
      moreInfo: 'More in our',
      privacyPolicy: 'Privacy Policy',
      swiss: '🇨🇭 Swiss Hosting • GDPR & FADP Compliant',
    },
  };

  const t = translations[language] || translations.de;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slideInFromBottom">
      <div className="bg-white border-t border-gray-200 shadow-2xl">
        {/* Header - Compact */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">{t.title}</h2>
              <p className="text-blue-100 text-xs flex items-center gap-1">
                <Cookie className="w-3 h-3" />
                GDPR & FADP Compliant
              </p>
            </div>
          </div>
        </div>

        {/* Content - Compact */}
        <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Text Content */}
            <div className="flex-1">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {t.description}
              </p>
            </div>

            {/* Actions - Inline for desktop, stacked for mobile */}
            {!showSettings && (
              <div className="flex flex-col sm:flex-row gap-2 lg:ml-4 flex-shrink-0">
                <button
                  onClick={handleAcceptAll}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-md text-sm whitespace-nowrap"
                >
                  {t.acceptAll}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm whitespace-nowrap"
                >
                  {t.rejectAll}
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm whitespace-nowrap"
                >
                  {t.customize}
                </button>
              </div>
            )}
          </div>

          {/* Cookie Categories - Detailed View */}
          {showSettings && (
            <div className="space-y-3 px-6 pb-4 animate-slideInFromTop">
              {/* Necessary Cookies - Compact */}
              <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{t.necessary.title}</h3>
                      <p className="text-xs text-gray-600">{t.necessary.description}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded whitespace-nowrap ml-2">
                    {t.necessary.always}
                  </span>
                </div>
              </div>

              {/* Analytics Cookies - Compact */}
              <div className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-10 h-5 rounded-full transition-colors flex-shrink-0 ${
                        preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Toggle analytics cookies`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                          preferences.analytics ? 'translate-x-5' : 'translate-x-0.5'
                        }`}
                      />
                    </button>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{t.analytics.title}</h3>
                      <p className="text-xs text-gray-600">{t.analytics.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies - Compact */}
              <div className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors opacity-60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-10 h-5 rounded-full transition-colors flex-shrink-0 ${
                        preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Toggle marketing cookies`}
                      disabled
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                          preferences.marketing ? 'translate-x-5' : 'translate-x-0.5'
                        }`}
                      />
                    </button>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{t.marketing.title}</h3>
                      <p className="text-xs text-gray-600">{t.marketing.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Save/Back buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm"
                >
                  {t.savePreferences}
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm"
                >
                  {language === 'de' ? 'Zurück' : 'Back'}
                </button>
              </div>
            </div>
          )}

          {/* Privacy Policy Link - Compact */}
          {!showSettings && (
            <div className="px-6 pb-4">
              <p className="text-xs text-gray-600">
                {t.moreInfo}{' '}
                <a
                  href={language === 'de' ? '/datenschutz' : '/privacy'}
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.privacyPolicy}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
