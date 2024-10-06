import React, { useRef } from 'react';
import '../styles/Footer.css';

const DockFooter: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const items = containerRef.current?.querySelectorAll('.dock-item') || [];
        items.forEach((item) => {
            const element = item as HTMLElement;
            const rect = element.getBoundingClientRect();
            const distance = Math.sqrt(
                (e.clientX - rect.left - rect.width / 2) ** 2 + 
                (e.clientY - rect.top - rect.height / 2) ** 2
            );
            const scale = Math.max(1, 1.8 - distance / 100);
            element.style.transform = `scale(${scale})`;
        });
    };

    const handleMouseLeave = () => {
        const items = containerRef.current?.querySelectorAll('.dock-item') || [];
        items.forEach((item) => {
            const element = item as HTMLElement;
            element.style.transform = 'scale(1)';
        });
    };

    return (
        <footer className="dock-footer">
            <div
                className="dock-container"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                ref={containerRef}
            >
                <a href="https://www.instagram.com/targetistusa/" target="_blank" rel="noopener noreferrer" className="dock-item">
                    <img src="/insta.png" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/targetist/" target="_blank" rel="noopener noreferrer" className="dock-item">
                    <img src="/ln.png" alt="LinkedIn" />
                </a>
                <a href="https://www.youtube.com/channel/UC07vnXmM-V7FUWF3sYFgwwA" target="_blank" rel="noopener noreferrer" className="dock-item">
                    <img src="/yt.png" alt="YouTube" />
                </a>
                <a href="https://x.com/targetistusa" target="_blank" rel="noopener noreferrer" className="dock-item">
                    <img src="/xx.png" alt="X" />
                </a>
            </div>
        </footer>
    );
};

export default DockFooter;
