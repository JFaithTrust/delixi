import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzTranslation from './locale/uz.json'
import ruTranslation from './locale/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uzTranslation },
    ru: { translation: ruTranslation },
  },
  lng: 'uz', // Set the default language
  fallbackLng: 'uz', // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
