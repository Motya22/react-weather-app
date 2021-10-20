/* eslint-disable camelcase */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './common/locales/en/translation.json';
import common_ru from './common/locales/ru/translation.json';

const resources = {
  en: { translation: common_en },
  ru: { translation: common_ru },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
