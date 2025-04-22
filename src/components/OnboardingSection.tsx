import React from 'react';
import '../styles/OnboardingSection.css';

const OnboardingSection: React.FC = () => {
  return (
    <div className="onboarding-container">
      <h1 className="onboarding-heading">Plan Never. Celebrate Together 🎉</h1>

      <div className="onboarding-content">
        {/* Left Text Section */}
        <div className="onboarding-text">
          <h2 className="onboarding-subheading">Collaborate together for a seamless schedule.</h2>
          <p className="onboarding-paragraph">
            Stop the endless messaging threads—plan group events and tasks in minutes, not hours 💬.
          </p>
        </div>

        {/* Right Card Section */}
        <div className="onboarding-card">
          <div className="onboarding-task completed">
            <input type="checkbox" checked readOnly />
            <span className="task-text completed-text">Running @ 06:30</span>
            <div className="avatar">👟</div>
          </div>

          <div className="onboarding-task">
            <input type="checkbox" />
            <div className="task-details">
              <strong>PI Meeting @ 08:30 v2</strong>
              <p>Schedule a Zoom call with Sagar</p>
            </div>
            <div className="avatar">🧑</div>
          </div>

          <div className="onboarding-task">
            <input type="checkbox" />
            <strong className="task-text">Make Dinner</strong>
            <div className="avatar">🌮</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSection;