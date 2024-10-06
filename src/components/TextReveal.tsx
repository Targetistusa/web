import React, { useEffect, useRef, useState } from 'react';
import '../styles/TextReveal.css';

const ScrollText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = performance.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = performance.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTimestamp - lastTimestamp;

      const speed = deltaY / deltaTime;
      setScrollSpeed(speed);

      lastScrollY = currentScrollY;
      lastTimestamp = currentTimestamp;
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  // Adjust animation duration
  const animationDuration = Math.max(5, 30 / Math.abs(scrollSpeed)).toFixed(2);

  return (
    <div className="scroll-container">
      <div
        className="scroll-text"
        ref={textRef}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        Scroll Velocity Scroll Velocity Scroll Velocity Scroll Velocity Scroll Velocity Scroll Velocity Scroll Velocity Scroll Velocity Scroll Velocity
      </div>
    </div>
  );
};

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default ScrollText;
