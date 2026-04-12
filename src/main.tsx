import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from './components/Helmet';
import './i18n';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </HelmetProvider>
  </StrictMode>,
);
