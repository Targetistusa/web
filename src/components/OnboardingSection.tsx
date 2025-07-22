import React, { useRef } from 'react';
import '../styles/OnboardingSection.css';
import VariableProximity from '../VariableProximity/VariableProximity';
import Marquee from "react-fast-marquee";
const OnboardingSection: React.FC = () => {
  const containerRef = useRef(null);
  const imageArray = [
    require('../assets/google.png'),
    require('../assets/microsoft.png'),
    require('../assets/aws.png'),
    require('../assets/gitlab.png'),
    require('../assets/atlassian.png'),
    require('../assets/salesforce.png'),
    require('../assets/slack.png'),
    require('../assets/airtable.png'),
  ]
  return (
    <div className="onboarding-container" ref={containerRef}>
      <VariableProximity
        label={'Composable Integration Layer'}
        className={'onboarding-heading'}
        fromFontVariationSettings="'wght' 200, 'opsz' 30"
        toFontVariationSettings="'wght' 700, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="exponential"
      />
      <h4 className="onboarding-subheading">Connect your company's stack with custom rules and logic</h4>
      <Marquee autoFill={true} gradient={true}>
        {imageArray.map((val: string, idx: number) => (
          <div key={idx} style={{
            marginLeft: "0.7rem",
            borderRadius:"2rem",
            border: "1px solid rgba(164, 167, 170, 0.433)",
          }}>
            <img src={val} style={{
              width:200,
              height:200
            }} alt='Integration' />
          </div>
        ))}
      </Marquee>

    </div>
  );
};

export default OnboardingSection;