import React from 'react';
import { translations } from '../translations/translations';
import profileImage from '../assets/pictures/me.jpg';

const AboutMe = ({ language = 'en' }) => {
  return (
    <div className="container" style={{
      padding: '40px 20px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '60px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Profile Image */}
        <div style={{
          flex: '0 0 400px',
          textAlign: 'center',
          marginTop: '15%'
        }}>
          <img
            src={profileImage}
            alt="Profile"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '3px solid rgba(255, 255, 255, 0.1)'
            }}
          />
          <p style={{
            marginTop: '10px',
            fontSize: '14px',
            color: '#f2e6c4',
            fontStyle: 'italic',
            opacity: '0.8'
          }}>
            {translations[language].photoCaption}
          </p>
        </div>

        {/* Content Container (including header) */}
        <div style={{
          flex: '1',
          textAlign: 'left'
        }}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '30px',
            fontWeight: 'bold',
            textAlign: 'left'
          }}>
            {translations[language].aboutMeTitle}
          </h1>
          
          <div style={{
            fontSize: '18px',
          }}>
            <p>
              {translations[language].aboutMeParagraph1}
            </p>
            <p>
              {translations[language].aboutMeParagraph3}
            </p>
            <p>
              {translations[language].aboutMeParagraph2}
            </p>
            <h2 style={{
              fontSize: '24px',
              marginTop: '30px',
              marginBottom: '15px',
              fontWeight: 'bold',
              color: '#f2e6c4'
            }}>
              {translations[language].whatDoILike}
            </h2>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '15px 20px',
              marginTop: '10px',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <p style={{
                margin: '0',
                fontSize: '16px',
                fontWeight: '500',
                color: '#f2e6c4'
              }}>
                <u>{translations[language].numberOneActivity}</u> {translations[language].motorcycleText}
              </p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '15px 20px',
              marginTop: '10px',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <p style={{
                margin: '0',
                fontSize: '16px',
                fontWeight: '500',
                color: '#f2e6c4'
              }}>
                <u>{translations[language].sports}</u> {translations[language].sportsText}
              </p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '15px 20px',
              marginTop: '10px',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <p style={{
                margin: '0',
                fontSize: '16px',
                fontWeight: '500',
                color: '#f2e6c4'
              }}>
                <u>{translations[language].hobbies}</u> {translations[language].hobbiesText}
              </p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '15px 20px',
              marginTop: '10px',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <p style={{
                margin: '0',
                fontSize: '16px',
                fontWeight: '500',
                color: '#f2e6c4'
              }}>
                <u>{translations[language].music}</u> {translations[language].musicText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 20px 15px !important;
          }
          
          .container > div {
            flex-direction: column !important;
            gap: 30px !important;
            align-items: center !important;
          }
          
          .container > div > div:first-child {
            flex: none !important;
            width: 100% !important;
            max-width: 300px !important;
            margin-top: 0 !important;
          }
          
          .container > div > div:last-child {
            text-align: center !important;
          }
          
          .container h1 {
            font-size: 32px !important;
            text-align: center !important;
          }
          
          .container h2 {
            font-size: 20px !important;
            text-align: center !important;
          }
          
          .container > div > div:last-child > div {
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 15px 10px !important;
          }
          
          .container > div {
            gap: 20px !important;
          }
          
          .container > div > div:first-child {
            max-width: 250px !important;
          }
          
          .container h1 {
            font-size: 28px !important;
          }
          
          .container h2 {
            font-size: 18px !important;
          }
          
          .container > div > div:last-child > div {
            font-size: 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMe; 