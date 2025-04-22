import React from 'react';
import '../styles/FeatureCard.css';
import PixelCard from '../PixelCard/PixelCard';

const FeatureCard: React.FC = () => {
  return (
    <div className="feature-card-container">
      <div className="feature-card-grid">
        <PixelCard variant="pink">
          <div className="feature-card-content">
            <h1 className="feature-card-title">Put the PRO in Productivity</h1>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

export default FeatureCard;