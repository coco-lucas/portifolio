import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
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

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnObjects: true,
    resources,
    supportedLngs: ["en", "pt", "es"],
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;
