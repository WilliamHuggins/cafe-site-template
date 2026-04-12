/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import MobileBar from './pages/MobileBar';
import Careers from './pages/Careers';
import GiftCards from './pages/GiftCards';
import Subscribe from './pages/Subscribe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="mobile-bar" element={<MobileBar />} />
          <Route path="careers" element={<Careers />} />
          <Route path="gift-cards" element={<GiftCards />} />
          <Route path="subscribe" element={<Subscribe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
