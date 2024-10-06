import React, { useEffect, useRef, useState } from 'react';
import '../styles/BlurText.css';

const BlurText: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const proRef = useRef<HTMLSpanElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newScale = 1 + scrollPosition / 1000; // Adjust the divisor to control the scaling speed
            setScale(newScale);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Capture the current values of the refs
        const currentTextRef = textRef.current;
        const currentProRef = proRef.current;
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    currentTextRef?.classList.add('blur-in');
                    currentProRef?.classList.add('rotate-in');
                } else {
                    currentTextRef?.classList.remove('blur-in');
                    currentProRef?.classList.remove('rotate-in');
                }
            });
        });
    
        if (currentTextRef) {
            observer.observe(currentTextRef);
        }
        if (currentProRef) {
            observer.observe(currentProRef);
        }
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Use the captured refs in the cleanup function
            if (currentTextRef) {
                observer.unobserve(currentTextRef);
            }
            if (currentProRef) {
                observer.unobserve(currentProRef);
            }
        };
    }, []);
    
    return (
        <div className="text-container" style={{ transform: `scale(${scale})` }}>
            <div className="blur-text gradient-text" ref={textRef}>
                put the <span className="pro-text gradient-text" ref={proRef}>PRO</span> in productivity.
            </div>
        </div>
    );
};

export default BlurText;
