import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'swiper/swiper-bundle.css';
import 'flatpickr/dist/flatpickr.css';
import App from './App.tsx';
import { AppWrapper } from './components/common/PageMeta.tsx';
import { JWTProvider as AuthProvider } from './contexts/JwtContext.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <AuthProvider>
      <StrictMode>
        <AppWrapper>
          <App />
        </AppWrapper>
      </StrictMode>
    </AuthProvider>
  </ThemeProvider>,
);
