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
            <h1 className="feature-card-title">Targetist is <span className='feature-card-title-ital'>here</span></h1>
              
            <button
              className="install-button"
              onClick={() =>
                window.open('https://apps.apple.com/us/app/targetist/id6523418234', '_blank')
              }
            >
              <img src="longo.png" alt="Apple" className="ios-icon" />
              Get it now
            </button>
          </div>
      </div>
    </div>
  );
};

export default FeatureCard;
