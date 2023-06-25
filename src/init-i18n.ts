import _i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const i18n = _i18n.createInstance();

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        Home: {
          helloWorld: "Hello World! :-)",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
