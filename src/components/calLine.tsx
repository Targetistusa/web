import React from 'react';
import '../styles/calLine.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Cal: React.FC = () => {
  return (
    <div className="quote-section-container">
      <div className="quote-content">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          "We believe the next era of productivity isn't about adding more tools — it's about unifying them. Fibonacci builds the layer where AI agents collaborate across your existing SaaS stack, making work feel effortless."
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Cal;