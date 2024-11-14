import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg bg-background hover:bg-accent transition-colors flex items-center space-x-2"
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5 text-tiktok-red" />
      <span className="text-sm font-medium uppercase">
        {i18n.language.startsWith('fr') ? 'FR' : 'EN'}
      </span>
    </button>
  );
};