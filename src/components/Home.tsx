import React, {useRef} from 'react';
import '../styles/Home.css';
import Squares from '../Squares/Squares';
import FadeContent from '../FadeContent/FadeContent';
import ShinyText from '../ShinyText/ShinyText';
import StarBorder from '../StarBorder/StarBorder';
import VariableProximity from '../VariableProximity/VariableProximity';
import DarkVeil from './DarkVeil/DarkVeil';
const Home: React.FC = () => {
  const containerRef = useRef(null); 
  return (
    <div className="container">
      {/* Squares as animated background */}
      <div className="squares-background">
        <DarkVeil
          speed={2.2}
          hueShift={342}
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
              label={'Schedule at the speed of thought'}
              className={'title-1'}
              fromFontVariationSettings="'wght' 400, 'opsz' 30"
              toFontVariationSettings="'wght' 700, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="gaussian"
            />
          </div>

          <div className="button-container-main" onClick={() => window.open('https://apps.apple.com/us/app/targetist/id6523418234', '_blank')}>
            <button></button>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Home;
