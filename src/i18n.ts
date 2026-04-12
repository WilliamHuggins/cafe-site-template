import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const supportedLanguages = ['en', 'ja', 'es', 'zh', 'ko'] as const;
type LanguageCode = (typeof supportedLanguages)[number];

type TranslationTree = {
  [key: string]: string | TranslationTree;
};

const resources: Record<LanguageCode, { translation: TranslationTree }> = {
  en: {
    translation: {
      layout: {
        nav: {
          skipToMain: 'Skip to main content',
          menu: 'Menu',
          family: 'The Kaizen Family',
          careers: 'Careers',
          mobileBar: 'Mobile Bar',
          giftCards: 'Gift Cards',
          instagramLabel: 'Instagram',
          toggleTheme: 'Toggle theme',
          connect: 'Connect with Us',
          openMenu: 'Open navigation menu',
          closeMenu: 'Close navigation menu',
          languageLabel: 'Language',
          navigationMenu: 'Navigation menu',
        },
        footer: {
          tagline: 'Curating the perfect cup through the relentless pursuit of improvement.',
          explore: 'Explore',
          connect: 'Connect',
          shop: 'Shop',
          visit: 'Visit',
          getDirections: 'Get Directions',
          hours: 'Everyday 7am - 4pm',
          rights: 'All rights reserved.',
          privacy: 'Privacy',
          terms: 'Terms',
        },
      },
      home: {
        seoTitle: 'Kaizen & Coffee | Specialty Coffee in San Mateo',
        seoDescription:
          'Visit Kaizen & Coffee in San Mateo for specialty coffee, seasonal drinks, pastries, and welcoming hospitality inspired by the philosophy of Kaizen.',
        hero: {
          headingPrefix: 'The relentless pursuit of',
          headingEmphasis: 'the perfect cup.',
          description:
            'A specialty coffee laboratory in San Mateo, CA. We apply the philosophy of Kaizen to every roast, every pour, and every interaction.',
          viewMenu: 'VIEW MENU',
          bookMobileBar: 'BOOK MOBILE BAR',
          directions: 'DIRECTIONS',
          hours: 'Open Daily 7am - 4pm',
        },
      },
      menuPage: {
        seoTitle: 'Our Menu | Kaizen & Coffee',
        seoDescription:
          'Explore the Kaizen & Coffee menu with espresso classics, signature seasonal creations, and curated offerings crafted in San Mateo.',
        heading: 'Our Offerings',
        description:
          'A curated selection of specialty coffee, Japanese-inspired signature lattes, and elevated toast. Prepared with precision and care.',
      },
    },
  },
  ja: {
    translation: {
      layout: {
        nav: {
          skipToMain: 'メインコンテンツへスキップ',
          menu: 'メニュー',
          family: 'カイゼン・ファミリー',
          careers: '採用情報',
          mobileBar: 'モバイルバー',
          giftCards: 'ギフトカード',
          instagramLabel: 'インスタグラム',
          toggleTheme: 'テーマを切り替え',
          connect: 'お問い合わせ',
          openMenu: 'ナビゲーションを開く',
          closeMenu: 'ナビゲーションを閉じる',
          languageLabel: '言語',
          navigationMenu: 'ナビゲーションメニュー',
        },
        footer: {
          tagline: 'より良い一杯を目指し、絶えず改善を続けます。',
          explore: '探す',
          connect: 'つながる',
          shop: 'ショップ',
          visit: '店舗情報',
          getDirections: '道順を見る',
          hours: '毎日 7:00〜16:00',
          rights: 'All rights reserved.',
          privacy: 'プライバシー',
          terms: '利用規約',
        },
      },
      home: {
        seoTitle: 'Kaizen & Coffee | サンマテオのスペシャルティコーヒー',
        seoDescription: 'サンマテオの Kaizen & Coffee で、季節のドリンクやペストリーをお楽しみください。',
        hero: {
          headingPrefix: '私たちが追い求めるのは',
          headingEmphasis: '完璧な一杯。',
          description:
            'サンマテオのスペシャルティコーヒーラボ。焙煎から抽出、接客までカイゼンの哲学を貫きます。',
          viewMenu: 'メニューを見る',
          bookMobileBar: 'モバイルバーを予約',
          directions: '道順',
          hours: '毎日 7:00〜16:00 営業',
        },
      },
      menuPage: {
        seoTitle: 'メニュー | Kaizen & Coffee',
        seoDescription: 'Kaizen & Coffee のメニューをご覧ください。',
        heading: 'ご提供メニュー',
        description: 'こだわりのスペシャルティコーヒーとシグネチャーラテをご用意しています。',
      },
    },
  },
  es: {
    translation: {
      layout: {
        nav: {
          skipToMain: 'Saltar al contenido principal',
          menu: 'Menú',
          family: 'La familia Kaizen',
          careers: 'Empleos',
          mobileBar: 'Barra móvil',
          giftCards: 'Tarjetas de regalo',
          instagramLabel: 'Instagram',
          toggleTheme: 'Cambiar tema',
          connect: 'Conéctate con nosotros',
          openMenu: 'Abrir menú de navegación',
          closeMenu: 'Cerrar menú de navegación',
          languageLabel: 'Idioma',
          navigationMenu: 'Menú de navegación',
        },
        footer: {
          tagline: 'Creamos la taza perfecta con una mejora continua incansable.',
          explore: 'Explorar',
          connect: 'Conectar',
          shop: 'Tienda',
          visit: 'Visítanos',
          getDirections: 'Cómo llegar',
          hours: 'Todos los días 7am - 4pm',
          rights: 'Todos los derechos reservados.',
          privacy: 'Privacidad',
          terms: 'Términos',
        },
      },
      home: {
        seoTitle: 'Kaizen & Coffee | Café de especialidad en San Mateo',
        seoDescription:
          'Visita Kaizen & Coffee en San Mateo para café de especialidad, bebidas de temporada y más.',
        hero: {
          headingPrefix: 'La búsqueda incansable de',
          headingEmphasis: 'la taza perfecta.',
          description:
            'Un laboratorio de café de especialidad en San Mateo, CA. Aplicamos la filosofía Kaizen en cada tostado y cada servicio.',
          viewMenu: 'VER MENÚ',
          bookMobileBar: 'RESERVAR BARRA MÓVIL',
          directions: 'CÓMO LLEGAR',
          hours: 'Abierto todos los días 7am - 4pm',
        },
      },
      menuPage: {
        seoTitle: 'Nuestro menú | Kaizen & Coffee',
        seoDescription:
          'Explora el menú de Kaizen & Coffee con clásicos de espresso y creaciones de temporada.',
        heading: 'Nuestras opciones',
        description:
          'Una selección curada de café de especialidad, lattes inspirados en Japón y tostadas elevadas.',
      },
    },
  },
  zh: {
    translation: {
      layout: {
        nav: {
          skipToMain: '跳到主要内容',
          menu: '菜单',
          family: 'Kaizen 家族',
          careers: '招聘',
          mobileBar: '移动咖啡吧',
          giftCards: '礼品卡',
          instagramLabel: 'Instagram',
          toggleTheme: '切换主题',
          connect: '联系我们',
          openMenu: '打开导航菜单',
          closeMenu: '关闭导航菜单',
          languageLabel: '语言',
          navigationMenu: '导航菜单',
        },
        footer: {
          tagline: '通过不断改进，打造每一杯理想咖啡。',
          explore: '探索',
          connect: '联系',
          shop: '商店',
          visit: '到店',
          getDirections: '导航路线',
          hours: '每日 7am - 4pm',
          rights: '版权所有。',
          privacy: '隐私',
          terms: '条款',
        },
      },
      home: {
        seoTitle: 'Kaizen & Coffee | San Mateo 精品咖啡',
        seoDescription: '欢迎来到 San Mateo 的 Kaizen & Coffee，体验精品咖啡与季节特饮。',
        hero: {
          headingPrefix: '我们不断追求',
          headingEmphasis: '完美一杯。',
          description: '位于 San Mateo 的精品咖啡实验室，我们将 Kaizen 理念应用到每一杯咖啡。',
          viewMenu: '查看菜单',
          bookMobileBar: '预订移动咖啡吧',
          directions: '导航',
          hours: '每日营业 7am - 4pm',
        },
      },
      menuPage: {
        seoTitle: '菜单 | Kaizen & Coffee',
        seoDescription: '浏览 Kaizen & Coffee 的咖啡与特色饮品菜单。',
        heading: '我们的菜单',
        description: '精选精品咖啡、日式灵感拿铁与精致吐司。',
      },
    },
  },
  ko: {
    translation: {
      layout: {
        nav: {
          skipToMain: '메인 콘텐츠로 건너뛰기',
          menu: '메뉴',
          family: '카이젠 패밀리',
          careers: '채용',
          mobileBar: '모바일 바',
          giftCards: '기프트 카드',
          instagramLabel: '인스타그램',
          toggleTheme: '테마 전환',
          connect: '문의하기',
          openMenu: '내비게이션 메뉴 열기',
          closeMenu: '내비게이션 메뉴 닫기',
          languageLabel: '언어',
          navigationMenu: '내비게이션 메뉴',
        },
        footer: {
          tagline: '끊임없는 개선으로 완벽한 한 잔을 만듭니다.',
          explore: '탐색',
          connect: '연결',
          shop: '쇼핑',
          visit: '매장 안내',
          getDirections: '길찾기',
          hours: '매일 오전 7시 - 오후 4시',
          rights: '모든 권리 보유.',
          privacy: '개인정보',
          terms: '이용약관',
        },
      },
      home: {
        seoTitle: 'Kaizen & Coffee | 산마테오 스페셜티 커피',
        seoDescription: '산마테오의 Kaizen & Coffee에서 스페셜티 커피와 시즌 음료를 만나보세요.',
        hero: {
          headingPrefix: '우리는 끊임없이',
          headingEmphasis: '완벽한 한 잔을 추구합니다.',
          description: '산마테오의 스페셜티 커피 랩. 모든 로스팅과 추출에 카이젠 철학을 담았습니다.',
          viewMenu: '메뉴 보기',
          bookMobileBar: '모바일 바 예약',
          directions: '길찾기',
          hours: '매일 오전 7시 - 오후 4시 영업',
        },
      },
      menuPage: {
        seoTitle: '메뉴 | Kaizen & Coffee',
        seoDescription: 'Kaizen & Coffee 메뉴를 살펴보세요.',
        heading: '메뉴 안내',
        description: '스페셜티 커피와 시그니처 라테, 토스트를 정성껏 준비합니다.',
      },
    },
  },
};

const readLanguage = (): LanguageCode => {
  const stored = localStorage.getItem('language');
  if (stored && supportedLanguages.includes(stored as LanguageCode)) {
    return stored as LanguageCode;
  }

  const browserLanguage = navigator.language.split('-')[0] as LanguageCode;
  if (supportedLanguages.includes(browserLanguage)) {
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
