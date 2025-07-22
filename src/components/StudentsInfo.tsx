import React, { useRef } from 'react';
import '../styles/StudentsInfo.css';
import VariableProximity from '../VariableProximity/VariableProximity';

const StudentsInfo: React.FC = () => {
  const containerRef = useRef(null); 

  return (
    <div className="students-info-section">
      <div className="students-info-content">
        <div ref={containerRef} style={{ position: 'relative' }}>
          <VariableProximity
            label={'Manage tasks and schedules with ease.'}
            className={'variable-proximity-d'}
            fromFontVariationSettings="'wght' 200, 'opsz' 30"
            toFontVariationSettings="'wght' 700, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="gaussian"
          />
        </div>

        {/* First Card (Video on Right) */}
        <div className="students-info-card">
          <div className="students-info-text">
            <h3 className="students-card-title">Optimize your workflow.</h3>
            <p className="students-card-description">
              Stay on track with your daily schedules, assignments, and extracurricular activities.
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
        <div className="students-info-card reverse">
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
            <h3 className="students-card-title">Boost Your Productivity.</h3>
            <p className="students-card-description">
              Achieve more with intelligent scheduling and time management features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsInfo;