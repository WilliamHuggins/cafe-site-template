/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import { isSupportedLocale, supportedLocales } from './i18n';

const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const MobileBar = lazy(() => import('./pages/MobileBar'));
const Careers = lazy(() => import('./pages/Careers'));
const GiftCards = lazy(() => import('./pages/GiftCards'));
const Subscribe = lazy(() => import('./pages/Subscribe'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteLoadingFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite" aria-label="Loading page">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#27251F] border-t-transparent" />
    </div>
  );
}

function SuspendedOutlet() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Outlet />
    </Suspense>
  );
}

function LocaleLayout() {
  const { locale } = useParams();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && isSupportedLocale(locale) && i18n.language !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [i18n, locale]);

  if (!locale || !isSupportedLocale(locale)) {
    const pathWithoutLocale = location.pathname.replace(/^\/[^/]+/, '') || '/';
    return <Navigate to={`/en${pathWithoutLocale}${location.search}${location.hash}`} replace />;
  }

  return <Layout />;
}

function LegacyLocaleRedirect() {
  const location = useLocation();
  return <Navigate to={`/en${location.pathname}${location.search}${location.hash}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path=":locale" element={<LocaleLayout />}>
          <Route element={<SuspendedOutlet />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="mobile-bar" element={<MobileBar />} />
            <Route path="careers" element={<Careers />} />
            <Route path="gift-cards" element={<GiftCards />} />
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="privacy" element={<ComingSoon />} />
            <Route path="terms" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="*" element={<LegacyLocaleRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
