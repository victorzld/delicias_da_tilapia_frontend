import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./pt-BR";
import en from "./en";

const savedLang = localStorage.getItem("lang") || "pt";

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: ptBR },
    en: { translation: en },
  },
  lng: savedLang,
  fallbackLng: "pt",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
