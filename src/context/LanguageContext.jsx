import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { pushLanguageSwitch } from '../lib/tracking';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved) return saved;
    }
    
    // Default to English
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    }
  }, [language]);

  // Track language changes
  const setLanguageWithTracking = useCallback((newLanguage) => {
    const prevLanguage = language;
    if (prevLanguage !== newLanguage) {
      pushLanguageSwitch(prevLanguage, newLanguage);
    }
    setLanguage(newLanguage);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    const newLanguage = language === 'de' ? 'en' : 'de';
    pushLanguageSwitch(language, newLanguage);
    setLanguage(newLanguage);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageWithTracking, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

