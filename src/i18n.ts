import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import jaJp from "./locales/ja-JP.json";

i18n.use(initReactI18next).init({
  resources: {
    "ja-JP": {
      translation: jaJp,
    },
  },
  lng: "ja-JP",
  fallbackLng: "ja-JP",
  interpolation: {
    escapeValue: false,
  },
});
