import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import App from './App.jsx';
import { SignIn } from './pages/SignIn/SignIn.jsx';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
