import React, { useEffect, useState } from 'react';

import '../styles/ScrollImageSection.css';

const ScrollImageSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = Math.min(window.scrollY * 0.12, 800);
      setScrollY(newScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageStyles = (multiplier:number, maxTranslateY:number) => ({
    transform: `translateX(-50%) translateY(${Math.max(-scrollY * multiplier, maxTranslateY)}%)`,
    transition: 'transform 0.4s ease-out',
    zIndex: 100,
  });

  return (
    <section className="scroll-image-section">
      <img
        src={require('../images/desktop.png')}
        alt="Primary Scrolling Effect Desktop"
        style={imageStyles(2.5, -60)}
        className="scroll-effect-image"
      />
      <img
        src={require('../images/phone.png')}
        alt="Secondary Scrolling Effect Phone"
        style={imageStyles(2, -40)}
        className="scroll-effect-image second"
      />
    </section>
  );
};

export default ScrollImageSection;
