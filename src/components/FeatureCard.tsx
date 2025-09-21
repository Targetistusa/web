import React from 'react';
import '../styles/FeatureCard.css';

const FeatureCard: React.FC = () => {
  return (
    <div className="feature-card-container">
      <div className="feature-card-wrapper">
          <div
            className="feature-card rounded-card"
            style={{
              backgroundImage: `url(${require('../assets/parallax_image.png')})`,
            }}
          >
            <h1 className="feature-card-title">Fibonacci is <span className='feature-card-title-ital'>here</span></h1>
            {/* Removed the iOS button */}
          </div>
      </div>
    </div>
  );
};

export default FeatureCard;
