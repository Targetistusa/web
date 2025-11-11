import React from 'react';
import '../styles/Footer.css';

const DockFooter: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-grid-background"></div>
            
            <div className="footer-content">
                <div className="footer-blue-section">
                    <div className="footer-logo-section">
                        <img src="fibonacci_logo.png" alt="Fibonacci" className="footer-logo" />
                        <span className="footer-company-name">
                            <span className="fibonacci-f">f</span>ibonacci
                        </span>
                    </div>

                    <div className="footer-copyright">
                        <p>© 2025 Fibonacci. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default DockFooter;