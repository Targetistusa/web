// App.tsx
import React, {useEffect} from 'react';
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
import GradualBlur from './GradualBlur/GradualBlur';

const App = () => {

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({
        top: e.deltaY * 0.3, // Lower multiplier = slower scroll (try 0.2–0.5)
        behavior: 'auto'
      });
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);
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

        <GradualBlur
          target="page"
          position="bottom"
          height="5rem"
          strength={2}
          divCount={6}
          curve="bezier"
          exponential={true}
          opacity={1}
        />

        <Footer/>
      </div>
      
    </ReactIconProvider>
  );
};

export default App;
