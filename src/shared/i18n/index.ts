import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { pt } from './pt';

export type Language = 'en' | 'pt';

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'pt') {
      return saved;
    }
  } catch {
    // localStorage unavailable (private browsing, etc.) — fall back to browser language
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

// eslint-disable-next-line import/no-named-as-default-member -- i18next's default export exposes `use`/`init` as instance methods; this is the documented usage, not a mixed-up named import
void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
