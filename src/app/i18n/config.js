import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'ar',
    resources: {
        ar: {
            translations: require('./locales/ar/index.json')
        },
        en: {
            translations: require('./locales/en/index.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'ar'];

export default i18n;