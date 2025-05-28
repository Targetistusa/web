// App.tsx
import React from 'react';
import Home from './components/Home';
import Cal from './components/calLine';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import StudentsInfo from './components/StudentsInfo';
import FeatureCard from './components/FeatureCard';
import OnboardingSection from './components/OnboardingSection';
import DocumentsSection from './components/DocSection';
//import TextReveal from './components/TextReveal';
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports.js';
import {GoogleOAuthProvider} from '@react-oauth/google';

Amplify.configure(awsExports);

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="App">
        <Navbar />
        <Home />
        <Cal/>
        <StudentsInfo/>
        <OnboardingSection/>
        <DocumentsSection/>
        <FeatureCard/>

        <Footer/>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
