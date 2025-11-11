import React from 'react';
import '../styles/Features.css';

const Features: React.FC = () => {
  return (
    <div className="features-container">
      {/* Feature 1 */}
      <div className="feature-row">
        <div className="feature-content">
          <h3 className="feature-title">Natural Language Input</h3>
          <p className="feature-description">
            Users describe their workflow needs in plain English. Our system understands intent, context, and requirements without requiring technical configuration or manual setup.
          </p>
        </div>
        <div className="feature-illustration">
          <img src="/NLP.png" alt="Natural Language Input" />
        </div>
      </div>

      {/* Feature 2 */}
      <div className="feature-row reverse">
        <div className="feature-illustration">
          <img src="/UO.png" alt="Orchestration" />
        </div>
        <div className="feature-content">
          <h3 className="feature-title">Orchestration & Unification</h3>
          <p className="feature-description">
            Fibonacci deploys autonomous agents that work seamlessly with your existing SaaS tools. We unify fragmented workflows into a cohesive system that understands your entire stack.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="feature-row">
        <div className="feature-content">
          <h3 className="feature-title">Workflow Execution</h3>
          <p className="feature-description">
            Intelligent workflows are automatically generated and executed in real-time. Your agents orchestrate tasks across all integrated tools, delivering results instantly without manual intervention.
          </p>
        </div>
        <div className="feature-illustration">
          <img src="/execution.png" alt="Workflow Execution" />
        </div>
      </div>
    </div>
  );
};

export default Features;