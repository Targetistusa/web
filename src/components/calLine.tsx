import React from 'react';
import '../styles/calLine.css';

const Cal: React.FC = () => {
  return (
    <div className="new-section-container">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="heading1">Let Time Work for You</h2>
      </div>

      {/* Gray Card Container */}
      <div className="card-container">
        {/* Left Section with Text & Buttons */}
        <div className="card-content">
          <h3 className="card-title">Effortless and on the go.</h3>
          <p className="description">
            Targetist's smart scheduling system manages your calendar automatically and optimizes your time.
          </p>
          <div className="button-container">
            <button className="app-store-button"> App Store </button>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className="card-images">
          <img src="/img2.png" alt="Phone 1" className="phone-image1" />
          <img src="/img1.png" alt="Phone 2" className="phone-image2" />
        </div>
      </div>
    </div>
  );
};

export default Cal;