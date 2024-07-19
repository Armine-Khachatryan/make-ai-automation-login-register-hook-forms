import React from 'react'
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="652247380226-ugqk012en62kord4ueefec5093knd909.apps.googleusercontent.com">
          <App />
      </GoogleOAuthProvider>
  </React.StrictMode>,
)
