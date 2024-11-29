import React from 'react';
import '../styles/StudentsInfo.css';

const StudentsInfo: React.FC = () => {
  return (
    <div className="students-info-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="tag">Students</span>
        <h1 className="section-title">Manage tasks and schedules with ease.</h1>
      </div>

      {/* Cards Container */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card1">
          <div className="card-header">
            <span className="emoji">📘</span>
            <p className="header-title">Task Overview</p>
          </div>
          <div className="card-body">
            <p className="card-title">Stay on top of assignments.</p>
            <p className="card-description">Track and manage homework, projects, and deadlines in one place.</p>
          </div>
          <button className="card-button">+</button>
        </div>

        {/* Card 2 */}
        <div className="card2">
          <div className="card-header">
            <span className="emoji">📅</span>
            <p className="header-title">Schedule Planner</p>
          </div>
          <div className="card-body">
            <p className="card-title">Plan your daily schedules.</p>
            <p className="card-description">Organize your study, classes, and extracurricular activities seamlessly.</p>
          </div>
          <button className="card-button">+</button>
        </div>
      </div>
    </div>
  );
};

export default StudentsInfo;
