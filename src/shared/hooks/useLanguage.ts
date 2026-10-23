import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import type { Language } from '@/shared/i18n';

export function useLanguage() {
  const { i18n } = useTranslation();
  const language = (i18n.resolvedLanguage ?? i18n.language) as Language;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: Language) => {
    void i18n.changeLanguage(next);
    try {
      localStorage.setItem('language', next);
    } catch {
      // ignore write failures
    }
  };

  return { language, setLanguage };
}
