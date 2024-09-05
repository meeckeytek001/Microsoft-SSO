import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import App from './App.jsx'
import './index.css'
import msalConfig from './msalConfig.js'; // Import your MSAL config

// Initialize MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
    <App />
    </MsalProvider>
  </StrictMode>,
)
