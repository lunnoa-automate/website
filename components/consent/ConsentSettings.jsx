'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, Cookie, X, Check } from 'lucide-react';
import { consentManager } from '@/lib/consent-manager';

/**
 * Consent Settings Panel (for reopening consent preferences)
 * Can be triggered from footer or privacy policy page
 */
export default function ConsentSettings({ isOpen, onClose }) {
  const { language } = useLanguage();
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (isOpen) {
      // Load current preferences
      const currentConsent = consentManager.getConsent();
      if (currentConsent) {
        setPreferences(currentConsent);
      }
    }
  }, [isOpen]);

  const handleSave = () => {
    consentManager.saveConsent(preferences);
    
    // Reload page to apply new consent settings
    window.location.reload();
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isOpen) return null;

  const translations = {
    de: {
      title: 'Cookie-Einstellungen',
      subtitle: 'Verwalten Sie Ihre Cookie-Präferenzen',
      save: 'Einstellungen speichern',
      close: 'Schließen',
      necessary: {
        title: 'Notwendige Cookies',
        description: 'Erforderlich für die Grundfunktionen der Website.',
        always: 'Immer aktiv',
      },
      analytics: {
        title: 'Analyse-Cookies',
        description: 'Helfen uns, die Nutzung der Website zu verstehen.',
      },
      marketing: {
        title: 'Marketing-Cookies',
        description: 'Für personalisierte Werbung und Kampagnen.',
      },
    },
    en: {
      title: 'Cookie Settings',
      subtitle: 'Manage your cookie preferences',
      save: 'Save Settings',
      close: 'Close',
      necessary: {
        title: 'Necessary Cookies',
        description: 'Required for basic website functions.',
        always: 'Always Active',
      },
      analytics: {
        title: 'Analytics Cookies',
        description: 'Help us understand how the website is used.',
      },
      marketing: {
        title: 'Marketing Cookies',
        description: 'For personalized advertising and campaigns.',
      },
    },
  };

  const t = translations[language] || translations.de;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideInFromBottom">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{t.title}</h2>
              <p className="text-blue-100 text-sm">{t.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Necessary */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.necessary.title}</h3>
                <p className="text-sm text-gray-600">{t.necessary.description}</p>
              </div>
              <span className="text-xs font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded whitespace-nowrap ml-4">
                {t.necessary.always}
              </span>
            </div>
          </div>

          {/* Analytics */}
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.analytics.title}</h3>
                <p className="text-sm text-gray-600">{t.analytics.description}</p>
              </div>
              <button
                onClick={() => togglePreference('analytics')}
                className={`ml-4 w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                  preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Toggle analytics cookies`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Marketing */}
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors opacity-60">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.marketing.title}</h3>
                <p className="text-sm text-gray-600">{t.marketing.description}</p>
              </div>
              <button
                onClick={() => togglePreference('marketing')}
                className={`ml-4 w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                  preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Toggle marketing cookies`}
                disabled
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 flex gap-3">
          <button
            onClick={handleSave}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            {t.save}
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
