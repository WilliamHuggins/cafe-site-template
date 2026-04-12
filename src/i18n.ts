import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLayout from './locales/en/layout.json';
import enHome from './locales/en/home.json';
import enMenuPage from './locales/en/menuPage.json';
import enMenuData from './locales/en/menuData.json';
import enAbout from './locales/en/about.json';
import enMobileBar from './locales/en/mobileBar.json';
import enCareers from './locales/en/careers.json';
import enGiftCards from './locales/en/giftCards.json';
import enSubscribe from './locales/en/subscribe.json';
import enComingSoon from './locales/en/comingSoon.json';
import enNotFound from './locales/en/notFound.json';

import jaLayout from './locales/ja/layout.json';
import jaHome from './locales/ja/home.json';
import jaMenuPage from './locales/ja/menuPage.json';
import jaMenuData from './locales/ja/menuData.json';
import jaAbout from './locales/ja/about.json';
import jaMobileBar from './locales/ja/mobileBar.json';
import jaCareers from './locales/ja/careers.json';
import jaGiftCards from './locales/ja/giftCards.json';
import jaSubscribe from './locales/ja/subscribe.json';
import jaComingSoon from './locales/ja/comingSoon.json';
import jaNotFound from './locales/ja/notFound.json';

import esLayout from './locales/es/layout.json';
import esHome from './locales/es/home.json';
import esMenuPage from './locales/es/menuPage.json';
import esMenuData from './locales/es/menuData.json';
import esAbout from './locales/es/about.json';
import esMobileBar from './locales/es/mobileBar.json';
import esCareers from './locales/es/careers.json';
import esGiftCards from './locales/es/giftCards.json';
import esSubscribe from './locales/es/subscribe.json';
import esComingSoon from './locales/es/comingSoon.json';
import esNotFound from './locales/es/notFound.json';

import zhLayout from './locales/zh/layout.json';
import zhHome from './locales/zh/home.json';
import zhMenuPage from './locales/zh/menuPage.json';
import zhMenuData from './locales/zh/menuData.json';
import zhAbout from './locales/zh/about.json';
import zhMobileBar from './locales/zh/mobileBar.json';
import zhCareers from './locales/zh/careers.json';
import zhGiftCards from './locales/zh/giftCards.json';
import zhSubscribe from './locales/zh/subscribe.json';
import zhComingSoon from './locales/zh/comingSoon.json';
import zhNotFound from './locales/zh/notFound.json';

import koLayout from './locales/ko/layout.json';
import koHome from './locales/ko/home.json';
import koMenuPage from './locales/ko/menuPage.json';
import koMenuData from './locales/ko/menuData.json';
import koAbout from './locales/ko/about.json';
import koMobileBar from './locales/ko/mobileBar.json';
import koCareers from './locales/ko/careers.json';
import koGiftCards from './locales/ko/giftCards.json';
import koSubscribe from './locales/ko/subscribe.json';
import koComingSoon from './locales/ko/comingSoon.json';
import koNotFound from './locales/ko/notFound.json';

export const supportedLocales = ['en', 'ja', 'es', 'zh', 'ko'] as const;
type LanguageCode = (typeof supportedLocales)[number];


export const isSupportedLocale = (locale: string): locale is LanguageCode =>
  supportedLocales.includes(locale as LanguageCode);


const resources = {
  en: { translation: { layout: enLayout, home: enHome, menuPage: enMenuPage, menuData: enMenuData, about: enAbout, mobileBar: enMobileBar, careers: enCareers, giftCards: enGiftCards, subscribe: enSubscribe, comingSoon: enComingSoon, notFound: enNotFound } },
  ja: { translation: { layout: jaLayout, home: jaHome, menuPage: jaMenuPage, menuData: jaMenuData, about: jaAbout, mobileBar: jaMobileBar, careers: jaCareers, giftCards: jaGiftCards, subscribe: jaSubscribe, comingSoon: jaComingSoon, notFound: jaNotFound } },
  es: { translation: { layout: esLayout, home: esHome, menuPage: esMenuPage, menuData: esMenuData, about: esAbout, mobileBar: esMobileBar, careers: esCareers, giftCards: esGiftCards, subscribe: esSubscribe, comingSoon: esComingSoon, notFound: esNotFound } },
  zh: { translation: { layout: zhLayout, home: zhHome, menuPage: zhMenuPage, menuData: zhMenuData, about: zhAbout, mobileBar: zhMobileBar, careers: zhCareers, giftCards: zhGiftCards, subscribe: zhSubscribe, comingSoon: zhComingSoon, notFound: zhNotFound } },
  ko: { translation: { layout: koLayout, home: koHome, menuPage: koMenuPage, menuData: koMenuData, about: koAbout, mobileBar: koMobileBar, careers: koCareers, giftCards: koGiftCards, subscribe: koSubscribe, comingSoon: koComingSoon, notFound: koNotFound } },
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

export const languageOptions: { value: LanguageCode; label: string; shortLabel: string }[] = [
  { value: 'en', label: 'English', shortLabel: 'EN' },
  { value: 'ja', label: '日本語', shortLabel: 'JA' },
  { value: 'es', label: 'Español', shortLabel: 'ES' },
  { value: 'zh', label: '中文', shortLabel: 'ZH' },
  { value: 'ko', label: '한국어', shortLabel: 'KO' },
];

export default i18n;
