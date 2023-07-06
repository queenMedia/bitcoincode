import React from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import esTranslations from './locales/es.json';
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import slTranslations from './locales/sl.json';
import ptTranslations from './locales/pt.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      es: {
        translation: esTranslations,
      },
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
      sl: {
        translation: slTranslations,
      },
      pt: {
        translation: ptTranslations,
      },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

  export default i18n;
  