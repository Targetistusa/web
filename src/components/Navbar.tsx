import React, { useState, useEffect } from 'react';
import '../styles/ResourcesModal.css';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { isMobile, isTablet, isIOS } from 'react-device-detect';
import Swal from 'sweetalert2';
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => setNav(!nav);
  const openPrivacyPolicy = () => {
    window.open(`/privacy-policy.html`, "_blank");
  };

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-flex">
          {/* Logo and Title */}
          <div className="navbar-logo">
            <img src="lll.png" alt="Logo" className="logo-img" />
            <span className="navbar-title">Targetist</span>
          </div>

          {/* Hamburger Menu */}
          <div onClick={toggleNav} className="hamburger-menu-style">
            {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
          </div>

          {nav && (
            <ul className="mobile-menu">
              <div onClick={toggleNav} style={{ position: "absolute", top: 10, left: 10 }}>
                <FaTimes size={30} style={{ color: "#fff" }} />
              </div>
              <Link smooth={true} duration={500} onClick={() => setNav(!nav)} to="features" className="nav-item">Features</Link>
              <a href="#" className="nav-item" onClick={() => Swal.fire({
                title: "Not found",
                text: "Sorry, this page is still under development. We will be back soon!",
                icon: "warning",
                iconColor: 'red',
                showConfirmButton: false,
                showCancelButton: true,
                cancelButtonColor: "#d33",
                cancelButtonText: "Close",
              })}>Resources</a>
              <Link smooth={true} duration={500} onClick={() => setNav(!nav)} to="pricing" className="nav-item">Pricing</Link>

              <a href="#" className="nav-item" onClick={() => Swal.fire({
                title: "Not found",
                text: "Sorry, this page is still under development. We will be back soon!",
                icon: "warning",
                iconColor: 'red',
                showConfirmButton: false,
                showCancelButton: true,
                cancelButtonColor: "#d33",
                cancelButtonText: "Close",
              })}>Students</a>
            </ul>
          )}

          {/* Navbar Items */}
          <div className="navbar-items">
            <Link smooth={true} duration={500} onClick={() => setNav(!nav)} to="features" className="nav-item">Features</Link>
            <a href="#" className="nav-item" onClick={() => Swal.fire({
              title: "Not found",
              text: "Sorry, this page is still under development. We will be back soon!",
              icon: "warning",
              iconColor: 'red',
              showConfirmButton: false,
              showCancelButton: true,
              cancelButtonColor: "#d33",
              cancelButtonText: "Close",
            })}>Resources</a>
            <Link smooth={true} duration={500} onClick={() => setNav(!nav)} to="pricing" className="nav-item">Pricing</Link>
            <a href="#" className="nav-item" onClick={() => Swal.fire({
              title: "Not found",
              text: "Sorry, this page is still under development. We will be back soon!",
              icon: "warning",
              iconColor: 'red',
              showConfirmButton: false,
              showCancelButton: true,
              cancelButtonColor: "#d33",
              cancelButtonText: "Close",
            })}>Students</a>
            <a href="#" onClick={openPrivacyPolicy} className="nav-item">Privacy Policy</a>
          </div>

          {/* CTA Button */}
          {!isIOS && !isMobile && !isTablet && (
            <div className="navbar-cta">
              <button className="button-download">Request Access</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
