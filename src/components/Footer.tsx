import React, { useState, useEffect, useRef } from 'react';
import '../styles/Footer.css';

const DockFooter: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const footerRef = useRef<HTMLDivElement>(null);
    const [footerOffset, setFooterOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (footerRef.current) {
            const rect = footerRef.current.getBoundingClientRect();
            const elementTop = window.scrollY + rect.top;
            setFooterOffset(elementTop);
        }
    }, []);

    // Calculate parallax offset for grid background (slower movement)
    const gridParallax = Math.max(0, scrollY - footerOffset) * 0.5;
    
    // Calculate parallax offset for blue section (faster movement)
    const cardParallax = Math.max(0, scrollY - footerOffset) * 0.3;

    return (
        <footer className="footer-container" ref={footerRef}>
            <div 
                className="footer-grid-background"
                style={{
                    transform: `translateY(${gridParallax}px)`
                }}
            ></div>
            
            <div className="footer-content">
                <div 
                    className="footer-blue-section"
                    style={{
                        transform: `translateY(${cardParallax}px)`
                    }}
                >
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