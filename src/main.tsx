import PreferencesProvider from "./PreferencesProvider";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import PoliticaDeCookies from './sections/CookiePolitics';
import NotFound from './components/NotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreferencesProvider><BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter></PreferencesProvider>
  </StrictMode>,
);
