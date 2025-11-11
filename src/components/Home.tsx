import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import FadeContent from '../FadeContent/FadeContent';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWaitlistClick = () => {
    // Add your waitlist signup logic here
    console.log('Join waitlist clicked');
  };

  // Calculate color transition (0 to 1, where 1 means fully transitioned)
  const transitionProgress = Math.min(scrollY / 400, 1);

  // Interpolate colors
  const bgColor = `rgb(${Math.round(6 + (255 - 6) * transitionProgress)}, ${Math.round(68 + (255 - 68) * transitionProgress)}, ${Math.round(156 + (255 - 156) * transitionProgress)})`;
  const headlineColor = `rgb(${Math.round(255 - (255 - 6) * transitionProgress)}, ${Math.round(255 - (255 - 68) * transitionProgress)}, ${Math.round(255 - (255 - 156) * transitionProgress)})`;
  const subtitleColor = `rgba(${Math.round(255 - (255 - 6) * transitionProgress)}, ${Math.round(255 - (255 - 68) * transitionProgress)}, ${Math.round(255 - (255 - 156) * transitionProgress)}, ${0.7 - transitionProgress * 0.4})`;

  return (
    <div 
      className="hero-container"
      style={{
        backgroundColor: bgColor,
        transition: 'background-color 0.05s linear'
      }}
    >
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="hero-content">
          <h1 
            className="hero-headline"
            style={{
              color: headlineColor,
              transition: 'color 0.05s linear'
            }}
          >
            Building the invisible layer that connects AI and work.
          </h1>

          <p 
            className="hero-subtitle"
            style={{
              color: subtitleColor,
              transition: 'color 0.05s linear'
            }}
          >
            Fibonacci is an infrastructure layer for AI agents that integrates with SaaS tools — powering automation, orchestration, and intelligent workflows.
          </p>

          <button 
            className="waitlist-button"
            onClick={handleWaitlistClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered ? 'transparent' : '#ffffff',
              color: isHovered ? '#ffffff' : '#06449c',
              borderColor: isHovered ? '#ffffff' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            Schedule a call
          </button>
        </div>
      </FadeContent>
    </div>
  );
};

export default Home;