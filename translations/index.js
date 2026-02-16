import { de } from './de';
import { en } from './en';

export const translations = {
  de,
  en,
};

export function useTranslation(language) {
  if (!language || !translations[language]) {
    return translations.en || translations.de;
  }
  return translations[language];
}
