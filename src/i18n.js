import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEN from './common/locales/en/translation.json';
import commonRU from './common/locales/ru/translation.json';

const resources = {
  en: { translation: commonEN },
  ru: { translation: commonRU },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
