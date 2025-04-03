import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalstyles.js';
import AppProvider from './hooks';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standardThemes.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <GlobalStyles />
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <ToastContainer autoClose={3000} theme="dark" />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>
);
