import React from 'react';
import { translations } from '../translations/translations';

const Footer = ({ language = 'en' }) => {
  return (
    <footer style={{
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '20px',
      textAlign: 'center',
      marginTop: 'auto',
      fontSize: '14px',
      color: '#f2e6c4',
      opacity: '0.8'
    }}>
      <div className="container">
        <p style={{
          margin: '0',
          fontStyle: 'italic'
        }}>
          {translations[language].footerText}
        </p>
      </div>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            padding: 15px !important;
            font-size: 13px !important;
          }
        }
        
        @media (max-width: 480px) {
          footer {
            padding: 10px !important;
            font-size: 12px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 