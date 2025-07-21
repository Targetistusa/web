import React, { useState, useEffect } from 'react';
import '../styles/ResourcesModal.css';
import '../styles/Navbar.css';
import { isMobile, isTablet, isIOS } from 'react-device-detect';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar scrolled`}>
      <div className="navbar-container">
        <div className="navbar-flex">
          {/* Logo and Title */}
          <div className="navbar-logo">
            <img src="icon.png" alt="Logo" className="logo-img" />
            <span className="navbar-title">Targetist</span>
          </div>

          {/* CTA Button */}
          {!isIOS && !isMobile && !isTablet && (
            <div className="navbar-cta">
              <button className="button-download"
              onClick={() => window.open('https://apps.apple.com/us/app/targetist/id6523418234', '_blank')}>Resources</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
