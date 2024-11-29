import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { SeparateAway } from './magicUIComponents/seperateAway';

const Home: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Trigger fade-in effect after the component mounts
    setFadeIn(true);

    // Add a scroll listener to handle zoom effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScale = 1.2; // Maximum zoom level
      const zoomFactor = Math.min(maxScale, 1 + scrollPosition / 1000); // Adjust zoom speed
      setScale(zoomFactor);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <button className="top-button">
        <span role="img" aria-label="celebration">🎉</span>
        free during beta
      </button>
      <div className='flex justify-center items-center text-center gap-3'>
        <SeparateAway
          upper_text='Setting Targets Has Never'
          lower_text=''
          className='heading'
          duration={2}
          hidden_opacity={0}
          visible_opacity={1}
        />
        <SeparateAway
          upper_text=''
          lower_text='Been This Easy'
          className='heading02'
          duration={2}
          hidden_opacity={0}
          visible_opacity={1}
        />
      </div>
      {/* New Card Section with fade-in and zoom effect */}
      <div
        className={`card ${fadeIn ? 'fade-in' : ''}`}
        style={{ transform: `scale(${scale})` }} // Dynamic scaling
      >
        <img src="/xx.png" alt="desktop" />
      </div>
    </div>
  );
};

export default Home;
