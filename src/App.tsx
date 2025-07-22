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
import { ReactIconProvider } from './context/ReactIconContext';

const App = () => {
  return (
    <ReactIconProvider>
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
    </ReactIconProvider>
  );
};

export default App;
