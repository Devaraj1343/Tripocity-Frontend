import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from './contexts/Themecontext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
 <React.StrictMode>
     <AuthProvider>
      <ThemeProvider>
      <App />
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
