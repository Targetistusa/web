import React, { useRef } from 'react';
import '../styles/calLine.css';
import VariableProximity from '../VariableProximity/VariableProximity';
import CardSwap, { Card } from '../CardSwap/CardSwap';
import { TiFlowSwitch } from "react-icons/ti";
import { IoFileTrayStacked } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";
const Cal: React.FC = () => {
  const headContainerRef=useRef(null)
  return (
    <div className="new-section-container">
      {/* Section Header */}
      <div style={{position: 'relative'}} ref={headContainerRef}>
        <VariableProximity
          label={'Infrastructure for Time Orchestration'}
          className={'header-text'}
          fromFontVariationSettings="'wght' 200, 'opsz' 30"
          toFontVariationSettings="'wght' 700, 'opsz' 40"
          containerRef={headContainerRef}
          radius={100}
          falloff="exponential"
        />
      </div>

      {/* Gray Card Container */}
      <div className="card-container">
        {/* Left Section with Text & Buttons */}
        <div className="card-content">
          <h3 className="card-title">Effortless and on the go.</h3>
          <p className="description">
            Targetist replaces chaos with intelligent coordination — sequencing tasks, tools, and agents in real-time. Whether it's human work or automated workflows, everything runs smoothly and lands in the right time.
          </p>
          <div className="button-container">
            <button className="app-store-button" onClick={() => window.open('https://apps.apple.com/us/app/targetist/id6523418234', '_blank')}> Meet the Vision </button>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className="card-images">
          {/* <img src="/img2.png" alt="Phone 1" className="phone-image1" />
          <img src="/img1.png" alt="Phone 2" className="phone-image2" /> */}
          <div style={{  position: 'relative', top:'15rem', left: '20rem'}}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              width={'35rem'}
              height={'25rem'}
              pauseOnHover={false}
            >
              <Card className='flow-card-1'>
                <div className='agent-demo-header'>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft:'0.8rem'}}>
                    <TiFlowSwitch />
                  </div>
                  <h4 className='agent-demo-header-text'>Workflow</h4>
                </div>
                <div className='browser-display'>
                  <div className='demo-image-container'>
                    <img src={require('../assets/workflow.png')} className='demo-image' alt="Workflow" />
                  </div>
                </div>
              </Card>
              <Card className='flow-card-1 flow-card-2'>
                <div className='agent-demo-header'>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft:'0.8rem'}}>
                    <IoFileTrayStacked />
                  </div>
                  <h4 className='agent-demo-header-text'>Integrations</h4>
                  
                </div>
                <div className='browser-display'>
                  <div className='demo-image-container'>
                    <img src={require('../assets/integrations.png')} className='demo-image' alt="Integrations" />
                  </div>
                </div>
              </Card>
              <Card className='flow-card-1 flow-card-3'>
                <div className='agent-demo-header'>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft:'0.8rem'}}>
                    <RiCalendarScheduleFill />
                  </div>
                  <h4 className='agent-demo-header-text'>Scheduling Engine</h4>
                </div>
                <div className='browser-display'>
                  <div className='demo-image-container'>
                    <img src={require('../assets/scheduling_engine.png')} className='demo-image' alt="Engine" />
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cal;