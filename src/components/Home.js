import React from 'react';
import Lottie from 'lottie-react';
import HelloAnimation from '../assets/logo/hello.json';
import { translations } from '../translations/translations';

const Home = ({ language = 'en' }) => {
  return (
    <div className="container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
      padding: '20px',
      margin: '0 auto',
      minHeight: 'calc(80vh - 80px)', // Account for navbar height
      flexDirection: 'row'
    }}>
      {/* Lottie Animation */}
      <div style={{ 
        flex: '0 0 400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Lottie
          animationData={HelloAnimation}
          style={{ 
            width: '100%', 
            maxWidth: '400px',
            height: 'auto',
            minHeight: '300px'
          }}
          loop={true}
          autoplay={true}
        />
      </div>

      {/* Content Paragraph */}
      <div style={{ 
        flex: '1',
        textAlign: 'left',
        fontSize: '18px',
        lineHeight: '1.6'
      }}>
        <h2 style={{ 
          marginBottom: '20px',
          fontSize: '32px',
          fontWeight: 'bold'
        }}>
          {translations[language].welcomeTitle}
        </h2>
        <p>
          {translations[language].welcomeParagraph1}
        </p>
        <p style={{ marginTop: '20px' }}>
          {translations[language].welcomeParagraph2}
        </p>
        <p style={{ marginTop: '20px' }}>
          {translations[language].welcomeParagraph3}
        </p>
        <p style={{ marginTop: '20px' }}>
          {translations[language].welcomeParagraph4}
        </p>
      </div>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            flex-direction: column !important;
            gap: 20px !important;
            padding: 15px !important;
            text-align: center !important;
          }
          
          .container > div:first-child {
            flex: none !important;
            width: 100% !important;
            max-width: 300px !important;
          }
          
          .container > div:last-child {
            text-align: center !important;
            font-size: 16px !important;
          }
          
          .container h2 {
            font-size: 28px !important;
            text-align: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 10px !important;
            gap: 15px !important;
          }
          
          .container > div:first-child {
            max-width: 250px !important;
          }
          
          .container > div:last-child {
            font-size: 15px !important;
          }
          
          .container h2 {
            font-size: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home; 