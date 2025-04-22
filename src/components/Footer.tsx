import React from 'react';
import '../styles/Footer.css';
import ScrollVelocity from '../ScrollVelocity/ScrollVelocity';
import { FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const DockFooter: React.FC = () => {
    return (
        <footer className="footer-container">
            {/* Gradient Card */}
            <div className="footer-card">
                <ScrollVelocity
                    texts={['Think Less. Do More.']} 
                    velocity={160}
                    className="custom-scroll-text"
                />
            </div>

            {/* Social Links & Footer Bottom */}
            <div className="footer-bottom">
                {/* Social Links */}
                <div className="social-links">
                    <a href="https://www.instagram.com/targetistusa/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/targetist/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.youtube.com/channel/UC07vnXmM-V7FUWF3sYFgwwA" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaYoutube />
                    </a>
                    <a href="https://x.com/targetistusa" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaXTwitter />
                    </a>
                </div>


                {/* Footer Links */}
                <div className="footer-links">
                    <a href="https://targetist.io/privacy-policy.html">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default DockFooter;