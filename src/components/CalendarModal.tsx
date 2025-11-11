import React from 'react';
import '../styles/CalendarModal.css';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  calLink: string;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose, calLink }) => {
  if (!isOpen) return null;

  return (
    <div className="calendar-modal-overlay" onClick={onClose}>
      <div className="calendar-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="calendar-modal-close" onClick={onClose}>✕</button>
        
        <iframe
          className="calendar-iframe"
          src={`${calLink}?embed=true`}
          title="Schedule a call with us"
          frameBorder="0"
          allow="camera;microphone;fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CalendarModal;