import React from 'react';
import '../styles/calLine.css';

const Cal: React.FC = () => {
  return (
    <div className="new-section-container">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="heading1">All your calendars in</h2>
        <h2 className="heading2">One App</h2>
      </div>

      {/* Gray Card Container */}
      <div className="card-container">
        {/* Left Section with Images */}
        <div className="card-images">
          <img src="/img2.png" alt="Phone 1" className="phone-image1" />
          <img src="/img1.png" alt="Phone 2" className="phone-image2" />
        </div>

        {/* Right Section with Text */}
        <div className="card-content">
          <p className="description">
            Blah blah blah blah blah blah blah
          </p>
          <div className="button-container">
            <button className="app-store-button">App Store</button>
            <button className="google-play-button">Desktop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cal;
