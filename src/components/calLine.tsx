import React from 'react';
import '../styles/calLine.css';
import VariableProximity from '../VariableProximity/VariableProximity';
import CardSwap, { Card } from '../CardSwap/CardSwap';

const Cal: React.FC = () => {
  return (
    <div className="new-section-container">
      {/* Section Header */}
      <div className="section-header">
        <VariableProximity
              label={'The OS for your Human Time'}
              className={'header-text'}
              fromFontVariationSettings="'wght' 400, 'opsz' 10"
              toFontVariationSettings="'wght' 700, 'opsz' 40"
              radius={100}
              falloff="gaussian"
            />
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
            <button className="app-store-button" onClick={() => window.open('https://apps.apple.com/us/app/targetist/id6523418234', '_blank')}> App Store </button>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className="card-images">
          {/* <img src="/img2.png" alt="Phone 1" className="phone-image1" />
          <img src="/img1.png" alt="Phone 2" className="phone-image2" /> */}
          <div style={{ height: '600px', position: 'relative' }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            >
            <Card>
              <h3>Card 1</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 2</h3>
              <p>Your content here</p>
            </Card>
           <Card>
              <h3>Card 3</h3>
              <p>Your content here</p>
            </Card>
          </CardSwap>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cal;