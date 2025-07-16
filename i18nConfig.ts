import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./public/locales/en/home.json";
import ptLang from "./public/locales/pt/home.json";
import esLang from "./public/locales/es/home.json";

const resources = {
  en: {
    translation: enLang,
  },
  pt: {
    translation: ptLang,
  },
  es: {
    translation: esLang,
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  returnObjects: true,
  resources,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
