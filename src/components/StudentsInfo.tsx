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
            label={'Automate anything, naturally.'}
            className={'variable-proximity-d'}
            fromFontVariationSettings="'wght' 200, 'opsz' 30"
            toFontVariationSettings="'wght' 700, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="gaussian"
          />
        </div>
        <div className='student-info-card-list'>
          {/* First Card (Video on Right) */}
          <div className="students-info-card student-info-card-top">
            <div className="students-info-text">
              <h3 className="students-card-title">From Idea to Action, Instantly</h3>
              <p className="students-card-description">
                Targetist turns your instructions into automated actions, orchestrating tasks across apps so you don’t waste time switching contexts.
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
                <source src={require('../assets/typingvideo.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Second Card (Video on Left) */}
          <div className="students-info-card">
            <div className="students-info-video">
              <video 
                className="video-element"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={require("../assets/workflowVideo.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="students-info-text">
              <h3 className="students-card-title">Plans That Know What to Use.</h3>
              <p className="students-card-description">
                Behind every plan, Targetist spins up a team of specialized AI agents. They divide the work, pick the right tools, and execute in sync, turning your idea into a fully managed workflow.
              </p>
            </div>
          </div>
          <div className="students-info-card student-info-card-bottom">
            <div className="students-info-text">
              <h3 className="students-card-title">Work That Works Itself.</h3>
              <p className="students-card-description">
                While you focus on the big picture, Targetist’s agents handle the execution, running tasks in the background, adapting in real time, and keeping everything on track.
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
                <source src={require("../assets/doneVideo.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsInfo;