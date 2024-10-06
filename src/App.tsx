// App.tsx
import React from 'react';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import ScrollImageSection from './components/ScrollImageSection';
import Features from './components/Features';
import BlurText from './components/BlurText';
import PricingTabs from './components/Pricing';
import Footer from './components/Footer';
//import TextReveal from './components/TextReveal';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ScrollImageSection />
      <Features />
      <BlurText/>
      <PricingTabs/>
      <Footer/>
    </div>
  );
};

export default App;
