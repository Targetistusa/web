// App.tsx
import React from 'react';
import Home from './components/Home';
import Cal from './components/calLine';
import Navbar from "./components/Navbar";
import Features from './components/Features';
import BlurText from './components/BlurText';
import PricingTabs from './components/Pricing';
import Footer from './components/Footer';
import StudentsInfo from './components/StudentsInfo';
//import TextReveal from './components/TextReveal';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Cal/>
      <StudentsInfo/>
      <Features />
      <BlurText/>
      <PricingTabs/>
      <Footer/>
    </div>
  );
};

export default App;
