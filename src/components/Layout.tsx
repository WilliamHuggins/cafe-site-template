import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, X, Instagram, Moon, Sun } from 'lucide-react';
import { useState, useEffect, useRef, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { languageOptions, supportedLocales } from '../i18n';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { Helmet } from './Helmet';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const localizePath = useLocalizedPath();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const wasMobileMenuOpen = useRef(false);
  const showPrototypeBanner = import.meta.env.NEXT_PUBLIC_SHOW_PROTOTYPE_BANNER === 'true';
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (savedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const navLinks = [
    { name: t('layout.nav.menu'), path: localizePath('/#menu') },
    { name: t('layout.nav.family'), path: localizePath('/about') },
    { name: t('layout.nav.careers'), path: localizePath('/careers') },
    { name: t('layout.nav.mobileBar'), path: localizePath('/mobile-bar') },
    { name: t('layout.nav.giftCards'), path: localizePath('/gift-cards') },
  ];

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const normalizedPath = (pathname: string) => pathname.replace(/\/+$/, '') || '/';
  const localizedHomePath = normalizedPath(localizePath('/'));
  const isHomePath = (pathname: string) => {
    const path = normalizedPath(pathname);
    return path === '/' || path === localizedHomePath;
  };

  useEffect(() => {
    const shouldScrollToMenu = isHomePath(location.pathname) && sessionStorage.getItem('scrollToMenu') === 'true';

    if (!shouldScrollToMenu) {
      return;
    }

    sessionStorage.removeItem('scrollToMenu');

    requestAnimationFrame(() => {
      const menuSection = document.getElementById('menu');
      menuSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.pathname, localizedHomePath]);

  useEffect(() => {
    if (!mobileMenuOpen || !mobileMenuRef.current) {
      if (wasMobileMenuOpen.current) {
        mobileMenuButtonRef.current?.focus();
      }
      wasMobileMenuOpen.current = mobileMenuOpen;
      return;
    }

    wasMobileMenuOpen.current = mobileMenuOpen;

    const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || focusableElements.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!showPrototypeBanner || !bannerRef.current) return;
    const el = bannerRef.current;
    const update = () => setBannerHeight(el.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [showPrototypeBanner]);

  const isHome = isHomePath(location.pathname);
  const transparentNav = isHome && !isScrolled;

  const handleMenuLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (isHome) {
      const menuSection = document.getElementById('menu');
      menuSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    sessionStorage.setItem('scrollToMenu', 'true');
    navigate(localizePath('/'));
  };

  const currentPathWithoutLocale = location.pathname.replace(/^\/(en|es|ja|zh|ko)(?=\/|$)/, '') || '/';
  const canonicalBase = typeof window !== 'undefined' ? window.location.origin : '';
  const localePath = (locale: string) => {
    const normalized = currentPathWithoutLocale === '/' ? '' : currentPathWithoutLocale;
    return `/${locale}${normalized}`;
  };
  const canonicalHref = `${canonicalBase}${localePath(i18n.language)}${location.search}${location.hash}`;

  const changeLocale = (nextLocale: string) => {
    const localizedPathPattern = /^\/(en|es|ja|zh|ko)(?=\/|$)/;
    const pathWithLocale = localizedPathPattern.test(location.pathname)
      ? location.pathname.replace(localizedPathPattern, `/${nextLocale}`)
      : `/${nextLocale}${location.pathname}`;

    void i18n.changeLanguage(nextLocale);
    navigate(`${pathWithLocale}${location.search}${location.hash}`);
  };

  const languageControlClass = `h-9 rounded-sm border px-2 text-xs font-semibold uppercase tracking-wide focus:outline-none ${
    transparentNav
      ? 'border-white/50 bg-white/10 text-white focus:border-white'
      : 'border-black/20 dark:border-white/30 bg-background/90 dark:bg-dark-bg text-black dark:text-white focus:border-black dark:focus:border-white'
  }`;

  return (
    <div
      className="min-h-screen flex flex-col bg-background dark:bg-dark-bg text-foreground dark:text-background font-sans selection:bg-selection-light dark:selection:bg-secondary-text transition-colors duration-300"
      style={showPrototypeBanner ? { paddingTop: bannerHeight } : undefined}
    >
      <Helmet>
        <link rel="canonical" href={canonicalHref} />
        {supportedLocales.map((locale) => (
          <link key={locale} rel="alternate" hrefLang={locale} href={`${canonicalBase}${localePath(locale)}${location.search}${location.hash}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${canonicalBase}${localePath('en')}${location.search}${location.hash}`} />
      </Helmet>
      {showPrototypeBanner && (
        <div
          ref={bannerRef}
          className="fixed top-0 left-0 right-0 z-[60] bg-section-bg dark:bg-dark-section-bg border-b border-border-light dark:border-border-dark px-4 py-2 text-center text-xs sm:text-sm text-secondary-text dark:text-dark-secondary-text leading-relaxed"
        >
          This is an independent prototype and is not affiliated with, endorsed by, or connected to Palm & Light Coffee. Visit the official site at{' '}
          <a
            href="https://palmandlightcoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-black dark:hover:text-white transition-colors"
          >
            palmandlightcoffee.com
          </a>
        </div>
      )}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
        style={{ top: showPrototypeBanner ? bannerHeight : 0 }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white dark:focus:bg-white dark:focus:text-black"
        >
          {t('layout.nav.skipToMain')}
        </a>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-4 xl:gap-8">
          <Link to={localizePath("/")} className={`flex items-center gap-3 group shrink-0 ${transparentNav ? 'text-white' : 'text-black dark:text-white'}`}>
            <div className={`w-10 h-10 overflow-hidden rounded-sm flex items-center justify-center transition-colors ${transparentNav ? 'bg-white group-hover:bg-surface-light' : 'bg-black dark:bg-white group-hover:bg-cta-hover-dark dark:group-hover:bg-surface-light'}`}>
              <img
                src="https://i.postimg.cc/rp0nbjNf/Chat-GPT-Image-Apr-12-2026-12-14-15-PM.png"
                alt="Palm and Light Coffee menu icon"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden min-[480px]:inline text-lg xl:text-xl font-bold tracking-tight whitespace-nowrap">PALM & LIGHT COFFEE</span>
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-8 ml-4 xl:ml-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isHash = link.path.includes('#');

              if (isHash) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={handleMenuLinkClick}
                    className={`text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
                      transparentNav
                        ? 'text-white/80 hover:text-white'
                        : 'text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
                    transparentNav
                      ? (isActive ? 'text-white border-b border-white pb-1' : 'text-white/80 hover:text-white')
                      : (isActive ? 'text-black dark:text-white border-b border-black dark:border-white pb-1' : 'text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white')
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6 ml-auto">
            <label className="sr-only" htmlFor="desktop-language-selector">{t('layout.nav.languageLabel')}</label>
            <select
              id="desktop-language-selector"
              className={languageControlClass}
              value={i18n.language}
              onChange={(event) => changeLocale(event.target.value)}
              aria-label={t('layout.nav.languageLabel')}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <a
              href="https://www.instagram.com/palmandlightcoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-sm transition-colors ${
                transparentNav
                  ? 'text-white hover:bg-white/10'
                  : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label={t('layout.nav.instagramLabel')}
            >
              <Instagram size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-sm transition-colors ${
                transparentNav
                  ? 'text-white hover:bg-white/10'
                  : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label={t('layout.nav.toggleTheme')}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link
              to={localizePath("/subscribe")}
              className={`px-6 py-2.5 text-sm font-medium rounded-sm transition-all whitespace-nowrap ${
                transparentNav
                  ? 'bg-white text-black hover:bg-surface-light'
                  : 'bg-black dark:bg-white text-white dark:text-black hover:bg-cta-hover-dark dark:hover:bg-surface-light'
              }`}
            >
              {t('layout.nav.connect')}
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3 ml-auto">
            <label className="sr-only" htmlFor="mobile-language-selector">{t('layout.nav.languageLabel')}</label>
            <select
              id="mobile-language-selector"
              className={`h-9 rounded-sm border px-1.5 text-xs font-semibold uppercase tracking-wide focus:outline-none w-14 ${
                transparentNav
                  ? 'border-white/50 bg-white/10 text-white focus:border-white'
                  : 'border-black/20 dark:border-white/30 bg-background/90 dark:bg-dark-bg text-black dark:text-white focus:border-black dark:focus:border-white'
              }`}
              value={i18n.language}
              onChange={(event) => changeLocale(event.target.value)}
              aria-label={t('layout.nav.languageLabel')}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.shortLabel}
                </option>
              ))}
            </select>
            <button
              ref={mobileMenuButtonRef}
              className={`p-2 ${transparentNav ? 'text-white' : 'text-black dark:text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? t('layout.nav.closeMenu') : t('layout.nav.openMenu')}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? 'close-icon' : 'menu-icon'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.85 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.85 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="flex items-center justify-center"
                >
                  {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            role="dialog"
            aria-label={t('layout.nav.navigationMenu')}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-background dark:bg-dark-bg pt-24 px-6 flex flex-col gap-6 lg:hidden"
            style={showPrototypeBanner ? { top: bannerHeight } : undefined}
          >
            {navLinks.map((link) => {
              const isHash = link.path.includes('#');
              if (isHash) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(event) => {
                      setMobileMenuOpen(false);
                      handleMenuLinkClick(event);
                    }}
                    className="text-2xl font-bold tracking-tight text-black dark:text-white"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-tight text-black dark:text-white"
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="https://www.instagram.com/palmandlightcoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold tracking-tight text-black dark:text-white flex items-center gap-3"
            >
              {t('layout.nav.instagramLabel')} <Instagram size={24} />
            </a>
            <button
              onClick={toggleTheme}
              className="text-2xl font-bold tracking-tight text-black dark:text-white flex items-center gap-3"
              aria-label={t('layout.nav.toggleTheme')}
            >
              {t('layout.nav.toggleTheme')}
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
            <Link
              to={localizePath("/subscribe")}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-black dark:bg-white text-white dark:text-black px-6 py-4 text-center font-bold rounded-sm"
            >
              {t('layout.nav.connect')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-section-bg dark:bg-dark-section-bg py-20 mt-auto transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 overflow-hidden bg-black dark:bg-white rounded-sm flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/rp0nbjNf/Chat-GPT-Image-Apr-12-2026-12-14-15-PM.png"
                  alt="Palm and Light Coffee footer icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-black dark:text-white">PALM & LIGHT COFFEE</span>
            </div>
            <p className="text-secondary-text dark:text-dark-secondary-text text-sm max-w-xs leading-relaxed">
              {t('layout.footer.tagline')}
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-text dark:text-dark-muted-text">{t('layout.footer.explore')}</span>
              <a href={localizePath("/#menu")} className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">{t('layout.nav.menu')}</a>
              <Link to={localizePath("/about")} className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">{t('layout.nav.family')}</Link>
              <Link to={localizePath("/mobile-bar")} className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">{t('layout.nav.mobileBar')}</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-text dark:text-dark-muted-text">{t('layout.footer.connect')}</span>
              <Link to={localizePath("/careers")} className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">{t('layout.nav.careers')}</Link>
              <Link to={localizePath("/subscribe")} className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">{t('layout.nav.connect')}</Link>
              <a href="https://www.instagram.com/palmandlightcoffee/" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
                {t('layout.nav.instagramLabel')} <Instagram size={14} />
              </a>
              <a
                href="mailto:palmandlightcoffee@gmail.com"
                className="inline-flex w-fit items-center justify-center rounded-sm bg-black px-3 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-cta-hover-dark dark:bg-white dark:text-black dark:hover:bg-surface-light"
              >
                {t('layout.footer.emailButton')}
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-text dark:text-dark-muted-text">{t('layout.footer.shop')}</span>
              <Link to={localizePath("/gift-cards")} className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">{t('layout.nav.giftCards')}</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-text dark:text-dark-muted-text">{t('layout.footer.visit')}</span>
              <p className="text-sm text-secondary-text dark:text-dark-secondary-text">73455 Twentynine Palms Highway<br/>Twentynine Palms, CA 92277</p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-accent-green dark:hover:text-accent-green transition-colors">{t('layout.footer.getDirections')}</a>
              <p className="text-sm text-secondary-text dark:text-dark-secondary-text">{t('layout.footer.hours')}</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-text dark:text-dark-muted-text tracking-wider uppercase">© {new Date().getFullYear()} Palm & Light Coffee. {t('layout.footer.rights')}</p>
          <div className="flex gap-6">
            <Link to={localizePath("/privacy")} className="text-xs text-muted-text dark:text-dark-muted-text hover:text-black dark:hover:text-white transition-colors">{t('layout.footer.privacy')}</Link>
            <Link to={localizePath("/terms")} className="text-xs text-muted-text dark:text-dark-muted-text hover:text-black dark:hover:text-white transition-colors">{t('layout.footer.terms')}</Link>
          </div>
        </div>
        {showPrototypeBanner && (
          <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-border-light dark:border-border-dark">
            <p className="text-xs text-muted-text dark:text-dark-muted-text leading-relaxed text-center">
              Disclaimer: All brand names, logos, images, and content related to Palm & Light Coffee are the property of their respective owners. They are reproduced here solely for non-commercial prototyping and educational purposes.
            </p>
          </div>
        )}
      </footer>
    </div>
  );
}
