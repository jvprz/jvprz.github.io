import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import PoliticaDeCookies from './sections/CoockiePolitics.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
