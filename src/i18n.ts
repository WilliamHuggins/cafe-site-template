import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLayout from './locales/en/layout.json';
import enHome from './locales/en/home.json';
import enMenuPage from './locales/en/menuPage.json';
import enMenuData from './locales/en/menuData.json';

import jaLayout from './locales/ja/layout.json';
import jaHome from './locales/ja/home.json';
import jaMenuPage from './locales/ja/menuPage.json';
import jaMenuData from './locales/ja/menuData.json';

import esLayout from './locales/es/layout.json';
import esHome from './locales/es/home.json';
import esMenuPage from './locales/es/menuPage.json';
import esMenuData from './locales/es/menuData.json';

import zhLayout from './locales/zh/layout.json';
import zhHome from './locales/zh/home.json';
import zhMenuPage from './locales/zh/menuPage.json';
import zhMenuData from './locales/zh/menuData.json';

import koLayout from './locales/ko/layout.json';
import koHome from './locales/ko/home.json';
import koMenuPage from './locales/ko/menuPage.json';
import koMenuData from './locales/ko/menuData.json';

export const supportedLocales = ['en', 'ja', 'es', 'zh', 'ko'] as const;
type LanguageCode = (typeof supportedLocales)[number];


export const isSupportedLocale = (locale: string): locale is LanguageCode =>
  supportedLocales.includes(locale as LanguageCode);


const resources = {
  en: { translation: { layout: enLayout, home: enHome, menuPage: enMenuPage, menuData: enMenuData } },
  ja: { translation: { layout: jaLayout, home: jaHome, menuPage: jaMenuPage, menuData: jaMenuData } },
  es: { translation: { layout: esLayout, home: esHome, menuPage: esMenuPage, menuData: esMenuData } },
  zh: { translation: { layout: zhLayout, home: zhHome, menuPage: zhMenuPage, menuData: zhMenuData } },
  ko: { translation: { layout: koLayout, home: koHome, menuPage: koMenuPage, menuData: koMenuData } },
};

const readLanguage = (): LanguageCode => {
  const stored = localStorage.getItem('language');
  if (stored && isSupportedLocale(stored)) {
    return stored as LanguageCode;
  }

  const browserLanguage = navigator.language.split('-')[0] as LanguageCode;
  if (isSupportedLocale(browserLanguage)) {
    return browserLanguage;
  }

  return 'en';
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: readLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

  i18n.on('languageChanged', (language) => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  });

  document.documentElement.lang = i18n.language;
}

export const languageOptions: { value: LanguageCode; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'ja', label: '日本語' },
  { value: 'es', label: 'Español' },
  { value: 'zh', label: '中文' },
  { value: 'ko', label: '한국어' },
];

export default i18n;
