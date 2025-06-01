// App.tsx
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Amplify} from 'aws-amplify';
// @ts-ignore
import awsExports from './aws-exports.js';
import {GoogleOAuthProvider} from '@react-oauth/google';
import VisitorPage from './VisitorPage';
import LoginPage from './webApp/auth/AuthPage';
Amplify.configure(awsExports);

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ''}>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<VisitorPage />} />
            <Route path='/signin' element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
