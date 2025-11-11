import React, { useState, useEffect } from 'react';
import '../styles/ResourcesModal.css';
import '../styles/Navbar.css';
import { isMobile, isTablet, isIOS } from 'react-device-detect';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hasScrolled = window.scrollY > 50;
      setScrolled(hasScrolled);
      setVisible(hasScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${visible ? 'scrolled' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-flex">
          {/* Logo and Title */}
          <div className="navbar-logo">
            <img src="fibonacci_logo.png" alt="Logo" className="logo-img" />
            <div className='navbar-title-container'>
              <span className="navbar-title-f">
                <span className="fibonacci-fn">f</span>ibonacci
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          {!isIOS && !isMobile && !isTablet && (
            <div className="navbar-cta">
              <button
                className="button-nav"
                onClick={() =>
                  window.open('https://sequence.fibonacci.app', '_blank')
                }
              >
                Sequence
              </button>
              <button
                className="button-nav"
                onClick={() =>
                  window.open('https://docs.targetist.io/', '_blank')
                }
              >
                Docs
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;