import React from 'react';
import '../styles/Home.css';
import Squares from '../Squares/Squares';
import FadeContent from '../FadeContent/FadeContent';
import ShinyText from '../ShinyText/ShinyText';
import StarBorder from '../StarBorder/StarBorder';

const Home: React.FC = () => {
  return (
    <div className="container">
      {/* Squares as animated background */}
      <div className="squares-background">
        <Squares
          speed={0.5}
          squareSize={60}
          direction="down"
          borderColor="rgba(0, 0, 0, 0.11)"
          hoverFillColor="rgba(167, 87, 215, 0.4)"
        />
      </div>

      {/* Fade-in text and CTA on top */}
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="content-wrapper">
          <h1 className="title-1">Achieving Targets Has Never</h1>
          <h1 className="title-2">Been This Easy</h1>

          <div className="button-container-main" onClick={() => window.open('https://apps.apple.com/us/app/targetist/id6523418234', '_blank')}>
            <StarBorder as="button" className="button-1" color="purple" speed="2s">
              <ShinyText className="button-txt" text="try it now!" disabled={false} speed={1} />
            </StarBorder>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Home;
