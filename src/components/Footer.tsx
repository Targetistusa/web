import React from 'react';
import '../styles/Footer.css';

const DockFooter: React.FC = () => {
    return (
        <footer className="footer-container">

            <div className='footer-company-name-container'>
                <h4 className='footer-company-name'> © 2025 Targetist</h4>
            </div>            

            <div className="social-links">
                <a href="https://www.instagram.com/targetistusa/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    Instagram
                </a>
                <a href="https://www.linkedin.com/company/targetist/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    Linkedin
                </a>
                <a href="https://www.youtube.com/channel/UC07vnXmM-V7FUWF3sYFgwwA" target="_blank" rel="noopener noreferrer" className="social-icon">
                    Youtube
                </a>
                <a href="https://x.com/targetistusa" target="_blank" rel="noopener noreferrer" className="social-icon">
                    X 
                </a>
            </div>


            {/* Footer Links */}
            <div className="footer-links">
                <a href="https://targetist.io/privacy-policy.html">Privacy</a>
            </div>
            
        </footer>
    );
};

export default DockFooter;