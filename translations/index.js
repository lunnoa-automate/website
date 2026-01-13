import { de } from './de';
import { en } from './en';

export const translations = {
  de,
  en,
};

export function useTranslation(language) {
  return translations[language] || translations.de;
}
