import React from 'react';
import '../styles/DocSection.css';

const DocumentsSection: React.FC = () => {
  return (
    <div className="documents-section">
      <div className="documents-content">
        <h1 className="documents-heading">Friends Friends Friends</h1>
        <div className="documents-card">
          <div className="documents-info">
            <h3 className="documents-subtitle">Everything sorted.</h3>
            <p className="documents-description">
              blah blah blah blah
            </p>
          </div>

          <div className="documents-widget">
            <div className="widget-header">
              <span>Friends</span>
              <button className="add-btn">+</button>
            </div>
            <input type="text" className="search-bar" placeholder="Search..." />

            <div className="document-category">Project group</div>
            <div className="document-item selected">
              <span className="document-icon">😎</span>
              <div>
                <p className="doc-title">Rohan</p>
                <p className="doc-date">leader</p>
              </div>
            </div>

            <div className="document-item">
              <span className="document-icon">🤓</span>
              <div>
                <p className="doc-title">Mufeez</p>
                <p className="doc-date">joined</p>
              </div>
            </div>

            <div className="document-category">Haraz Coffee Group</div>
            <div className="document-item">
              <span className="document-icon">☕️</span>
              <div>
                <p className="doc-title">Allie</p>
                <p className="doc-date">invited</p>
              </div>
            </div>

            <div className="document-item">
              <span className="document-icon">🏠</span>
              <div>
                <p className="doc-title">Facilities Management</p>
                <p className="doc-date">2022-03-02</p>
              </div>
            </div>

            <div className="document-item">
              <span className="document-icon">📁</span>
              <div>
                <p className="doc-title">External Audits</p>
                <p className="doc-date">2023-01-09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;