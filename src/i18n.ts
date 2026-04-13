import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLayout from './locales/en/layout.json';
import enHome from './locales/en/home.json';
import enMenuPage from './locales/en/menuPage.json';
import enMenuData from './locales/en/menuData.json';
import enAbout from './locales/en/about.json';
import enCatering from './locales/en/catering.json';
import enCareers from './locales/en/careers.json';
import enMerchStore from './locales/en/merchStore.json';
import enSubscribe from './locales/en/subscribe.json';
import enMobileBar from './locales/en/mobileBar.json';
import enGiftCards from './locales/en/giftCards.json';
import enComingSoon from './locales/en/comingSoon.json';
import enNotFound from './locales/en/notFound.json';
import enPrivacy from './locales/en/privacy.json';
import enTerms from './locales/en/terms.json';

import jaLayout from './locales/ja/layout.json';
import jaHome from './locales/ja/home.json';
import jaMenuPage from './locales/ja/menuPage.json';
import jaMenuData from './locales/ja/menuData.json';
import jaAbout from './locales/ja/about.json';
import jaCatering from './locales/ja/catering.json';
import jaCareers from './locales/ja/careers.json';
import jaMerchStore from './locales/ja/merchStore.json';
import jaSubscribe from './locales/ja/subscribe.json';
import jaMobileBar from './locales/ja/mobileBar.json';
import jaGiftCards from './locales/ja/giftCards.json';
import jaComingSoon from './locales/ja/comingSoon.json';
import jaNotFound from './locales/ja/notFound.json';
import jaPrivacy from './locales/ja/privacy.json';
import jaTerms from './locales/ja/terms.json';

import esLayout from './locales/es/layout.json';
import esHome from './locales/es/home.json';
import esMenuPage from './locales/es/menuPage.json';
import esMenuData from './locales/es/menuData.json';
import esAbout from './locales/es/about.json';
import esCatering from './locales/es/catering.json';
import esCareers from './locales/es/careers.json';
import esMerchStore from './locales/es/merchStore.json';
import esSubscribe from './locales/es/subscribe.json';
import esMobileBar from './locales/es/mobileBar.json';
import esGiftCards from './locales/es/giftCards.json';
import esComingSoon from './locales/es/comingSoon.json';
import esNotFound from './locales/es/notFound.json';
import esPrivacy from './locales/es/privacy.json';
import esTerms from './locales/es/terms.json';

import zhLayout from './locales/zh/layout.json';
import zhHome from './locales/zh/home.json';
import zhMenuPage from './locales/zh/menuPage.json';
import zhMenuData from './locales/zh/menuData.json';
import zhAbout from './locales/zh/about.json';
import zhCatering from './locales/zh/catering.json';
import zhCareers from './locales/zh/careers.json';
import zhMerchStore from './locales/zh/merchStore.json';
import zhSubscribe from './locales/zh/subscribe.json';
import zhMobileBar from './locales/zh/mobileBar.json';
import zhGiftCards from './locales/zh/giftCards.json';
import zhComingSoon from './locales/zh/comingSoon.json';
import zhNotFound from './locales/zh/notFound.json';
import zhPrivacy from './locales/zh/privacy.json';
import zhTerms from './locales/zh/terms.json';

import koLayout from './locales/ko/layout.json';
import koHome from './locales/ko/home.json';
import koMenuPage from './locales/ko/menuPage.json';
import koMenuData from './locales/ko/menuData.json';
import koAbout from './locales/ko/about.json';
import koCatering from './locales/ko/catering.json';
import koCareers from './locales/ko/careers.json';
import koMerchStore from './locales/ko/merchStore.json';
import koSubscribe from './locales/ko/subscribe.json';
import koMobileBar from './locales/ko/mobileBar.json';
import koGiftCards from './locales/ko/giftCards.json';
import koComingSoon from './locales/ko/comingSoon.json';
import koNotFound from './locales/ko/notFound.json';
import koPrivacy from './locales/ko/privacy.json';
import koTerms from './locales/ko/terms.json';

export const supportedLocales = ['en', 'ja', 'es', 'zh', 'ko'] as const;
type LanguageCode = (typeof supportedLocales)[number];


export const isSupportedLocale = (locale: string): locale is LanguageCode =>
  supportedLocales.includes(locale as LanguageCode);


const resources = {
  en: { translation: { layout: enLayout, home: enHome, menuPage: enMenuPage, menuData: enMenuData, about: enAbout, catering: enCatering, careers: enCareers, merchStore: enMerchStore, mobileBar: enMobileBar, giftCards: enGiftCards, subscribe: enSubscribe, comingSoon: enComingSoon, notFound: enNotFound, privacy: enPrivacy, terms: enTerms } },
  ja: { translation: { layout: jaLayout, home: jaHome, menuPage: jaMenuPage, menuData: jaMenuData, about: jaAbout, catering: jaCatering, careers: jaCareers, merchStore: jaMerchStore, mobileBar: jaMobileBar, giftCards: jaGiftCards, subscribe: jaSubscribe, comingSoon: jaComingSoon, notFound: jaNotFound, privacy: jaPrivacy, terms: jaTerms } },
  es: { translation: { layout: esLayout, home: esHome, menuPage: esMenuPage, menuData: esMenuData, about: esAbout, catering: esCatering, careers: esCareers, merchStore: esMerchStore, mobileBar: esMobileBar, giftCards: esGiftCards, subscribe: esSubscribe, comingSoon: esComingSoon, notFound: esNotFound, privacy: esPrivacy, terms: esTerms } },
  zh: { translation: { layout: zhLayout, home: zhHome, menuPage: zhMenuPage, menuData: zhMenuData, about: zhAbout, catering: zhCatering, careers: zhCareers, merchStore: zhMerchStore, mobileBar: zhMobileBar, giftCards: zhGiftCards, subscribe: zhSubscribe, comingSoon: zhComingSoon, notFound: zhNotFound, privacy: zhPrivacy, terms: zhTerms } },
  ko: { translation: { layout: koLayout, home: koHome, menuPage: koMenuPage, menuData: koMenuData, about: koAbout, catering: koCatering, careers: koCareers, merchStore: koMerchStore, mobileBar: koMobileBar, giftCards: koGiftCards, subscribe: koSubscribe, comingSoon: koComingSoon, notFound: koNotFound, privacy: koPrivacy, terms: koTerms } },
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
