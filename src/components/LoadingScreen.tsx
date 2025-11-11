import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a minimum display time for the loading screen (e.g., 2-3 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="logo-animation">
          <img src="fibonacci_logo.png" alt="Fibonacci" className="loading-logo" />
        </div>
        <div className="loading-text">
          <span className="loading-fibonacci-f">f</span>
          <span className="loading-fibonacci">ibonacci</span>
        </div>
        <div className="loading-bar">
          <div className="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;