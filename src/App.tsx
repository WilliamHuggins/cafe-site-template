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
const Catering = lazy(() => import('./pages/Catering'));
const Careers = lazy(() => import('./pages/Careers'));
const MerchStore = lazy(() => import('./pages/MerchStore'));
const Subscribe = lazy(() => import('./pages/Subscribe'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

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
  const activeLocale = locale && isSupportedLocale(locale) ? locale : 'en';

  useEffect(() => {
    if (i18n.language !== activeLocale) {
      void i18n.changeLanguage(activeLocale);
    }
  }, [activeLocale, i18n]);

  if (locale && !isSupportedLocale(locale)) {
    const pathWithoutLocale = location.pathname.replace(/^\/[^/]+/, '') || '/';
    return <Navigate to={`/en${pathWithoutLocale}${location.search}${location.hash}`} replace />;
  }

  return <Layout />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocaleLayout />}>
          <Route element={<SuspendedOutlet />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="catering" element={<Catering />} />
            <Route path="mobile-bar" element={<Navigate to="../catering" replace />} />
            <Route path="careers" element={<Careers />} />
            <Route path="merch-store" element={<MerchStore />} />
            <Route path="gift-cards" element={<Navigate to="../merch-store" replace />} />
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Route>
        <Route path=":locale" element={<LocaleLayout />}>
          <Route element={<SuspendedOutlet />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="catering" element={<Catering />} />
            <Route path="mobile-bar" element={<Navigate to="../catering" replace />} />
            <Route path="careers" element={<Careers />} />
            <Route path="merch-store" element={<MerchStore />} />
            <Route path="gift-cards" element={<Navigate to="../merch-store" replace />} />
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
