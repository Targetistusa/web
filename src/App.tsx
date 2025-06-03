// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
// @ts-ignore
import awsExports from './aws-exports.js';
import { GoogleOAuthProvider } from '@react-oauth/google';

import VisitorPage from './VisitorPage';
import LoginPage from './webApp/auth/AuthPage';
import { UserProvider } from './webApp/Context/UserContext'; // ⬅️ import your context
import Dashboard from './webApp/dashboard/Dashboard';

Amplify.configure(awsExports);

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}>
      <UserProvider> {/* Wrap the entire app */}
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<VisitorPage />} />
              <Route path="/signin" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
