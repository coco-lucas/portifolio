import  i18n from "i18next";
import { initReactI18next } from "react-i18next"
import enLang from './locales/en/en.json';
import brLang from './locales/br/br.json';

const resources = {
    en: {
        translation: enLang,
    },
    br: {
        translation: brLang,
    }
};

i18n
    .use(initReactI18next)
    .init({
        debug:true, //show the logs in console
        returnObjects:true,
        resources,
        fallbackLng:'en', //use 'en' if the lng is not available
        lng: "en", //current lgn
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;