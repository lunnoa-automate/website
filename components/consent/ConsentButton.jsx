'use client';

import { useState } from 'react';
import { Cookie } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ConsentSettings from './ConsentSettings';

/**
 * Button to reopen consent settings
 * Can be placed in footer or settings page
 */
export default function ConsentButton({ variant = 'text' }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const translations = {
    de: {
      text: 'Cookie-Einstellungen',
      aria: 'Cookie-Einstellungen öffnen',
    },
    en: {
      text: 'Cookie Settings',
      aria: 'Open Cookie Settings',
    },
  };

  const t = translations[language] || translations.de;

  if (variant === 'text') {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="text-foreground hover:text-primary-foreground transition-colors"
          aria-label={t.aria}
        >
          {t.text}
        </button>
        <ConsentSettings isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  }

  if (variant === 'icon') {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all hover:scale-110"
          aria-label={t.aria}
          title={t.text}
        >
          <Cookie className="w-5 h-5" />
        </button>
        <ConsentSettings isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label={t.aria}
      >
        <Cookie className="w-4 h-4" />
        <span className="text-sm">{t.text}</span>
      </button>
      <ConsentSettings isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
