import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SmoothScroll from './components/SmoothScroll';
import Cal from './components/calLine';
import Features from './components/Features';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import StudentsInfo from './components/StudentsInfo';
import FeatureCard from './components/FeatureCard';
import OnboardingSection from './components/OnboardingSection';
import DocumentsSection from './components/DocSection';
import LoadingScreen from './components/LoadingScreen';
import { ReactIconProvider } from './context/ReactIconContext';

// Main Homepage Component
const MainPage = () => {
  return (
    <>
      <Home />
      <Cal />
      <Features />
      <OnboardingSection />
      <Footer />
    </>
  );
};

// Sequence Page Component
const SequencePage = () => {
  return (
    <>
      <StudentsInfo />
      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({
        top: e.deltaY * 0.3,
        behavior: 'auto'
      });
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <Router>
      <ReactIconProvider>
        <div className="App">
          <LoadingScreen />
          <SmoothScroll />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sequence" element={<SequencePage />} />
          </Routes>
        </div>
      </ReactIconProvider>
    </Router>
  );
};

export default App;