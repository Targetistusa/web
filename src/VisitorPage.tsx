import React from 'react'
import Home from './components/Home';
import Cal from './components/calLine';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import StudentsInfo from './components/StudentsInfo';
import FeatureCard from './components/FeatureCard';
import OnboardingSection from './components/OnboardingSection';
import DocumentsSection from './components/DocSection';
const VisitorPage = () => {
  return (
    <div className='100vw h-screen overflow-x-hidden'>
        <Navbar />
        <Home />
        <Cal/>
        <StudentsInfo/>
        <OnboardingSection/>
        <DocumentsSection/>
        <FeatureCard/>

        <Footer/>
    </div>
  )
}

export default VisitorPage