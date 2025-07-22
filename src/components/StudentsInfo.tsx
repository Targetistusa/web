import React, { useRef } from 'react';
import '../styles/StudentsInfo.css';
import VariableProximity from '../VariableProximity/VariableProximity';

const StudentsInfo: React.FC = () => {
  const containerRef = useRef(null); 

  return (
    <div className="students-info-section">
      <div className="students-info-content">
        <div ref={containerRef} style={{ position: 'relative', marginBottom: "3rem" }}>
          <VariableProximity
            label={'Run your day. From anywhere. Effortlessly.'}
            className={'variable-proximity-d'}
            fromFontVariationSettings="'wght' 200, 'opsz' 30"
            toFontVariationSettings="'wght' 700, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="gaussian"
          />
        </div>
        <div style={{display: 'flex', flex:1, flexDirection: 'column', borderRadius:"2rem"}}>
          {/* First Card (Video on Right) */}
          <div className="students-info-card student-info-card-1-top">
            <div className="students-info-text">
              <h3 className="students-card-title">Smarter Scheduling. Less Thinking.</h3>
              <p className="students-card-description">
                Whether it’s a manual task or an automated agent, Targetist scores, schedules, and reschedules everything — without you lifting a finger.
              </p>
            </div>

            <div className="students-info-video">
              <video 
                className="video-element"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={require("../assets/complete.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Second Card (Video on Left) */}
          <div className="students-info-card student-info-card-2-bottom">
            <div className="students-info-video">
              <video 
                className="video-element"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={require("../assets/Complete2.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="students-info-text">
              <h3 className="students-card-title">Say it once. Let AI handle the rest.</h3>
              <p className="students-card-description">
                Infinity transforms everyday thoughts into self-running workflows — right from your phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsInfo;