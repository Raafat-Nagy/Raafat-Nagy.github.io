import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CvPage from './CvPage';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <CvPage />
  </StrictMode>,
);
