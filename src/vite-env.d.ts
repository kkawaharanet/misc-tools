/// <reference types="vite/client" />
import jaJP from "./locales/ja-JP.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof jaJP;
    };
  }
}

interface ImportMetaEnv {
  readonly VERSION: string;
}
