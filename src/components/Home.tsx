import React, {useRef} from 'react';
import '../styles/Home.css';
import FadeContent from '../FadeContent/FadeContent';

import VariableProximity from '../VariableProximity/VariableProximity';
import DarkVeil from '../DarkVeil/DarkVeil';
const Home: React.FC = () => {
  const containerRef = useRef(null); 
  return (
    <div className="container">
      {/* Squares as animated background */}
      <div className="squares-background">
        <DarkVeil
          speed={2.2}
          hueShift={18}
          noiseIntensity={0.11}
          scanlineFrequency={5}
          scanlineIntensity={1}
          warpAmount={1}
        />
      </div>

      {/* Fade-in text and CTA on top */}
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="content-wrapper">
          <div ref={containerRef} style={{position: 'relative'}}>
            <VariableProximity
              label={'Schedule at the speed of'}
              className={'title-1'}
              fromFontVariationSettings="'wght' 200, 'opsz' 30"
              toFontVariationSettings="'wght' 700, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="exponential"
            />
            <VariableProximity
              label={' thought'}
              className={'title-2'}
              fromFontVariationSettings="'wght' 200, 'opsz' 30"
              toFontVariationSettings="'wght' 700, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="exponential"
            />

            {/* Subheading */}
            <p className="subtitle">
              Fibonacci is an infrastructure layer that lets people and AI agents coordinate across tools, workflows, and calendars.
            </p>
          </div>
          
          {/* Removed iOS button */}

        </div>
      </FadeContent>
    </div>
  );
};

export default Home;
