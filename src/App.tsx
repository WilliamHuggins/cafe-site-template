/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const MobileBar = lazy(() => import('./pages/MobileBar'));
const Careers = lazy(() => import('./pages/Careers'));
const GiftCards = lazy(() => import('./pages/GiftCards'));
const Subscribe = lazy(() => import('./pages/Subscribe'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
