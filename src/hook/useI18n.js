import React from "react";
import { useEffect } from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

const useI18n = () => {
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
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
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
          escapeValue: false,
        },
      });
  }, [i18nInstance]);

  return i18nInstance;
};

export default useI18n;
