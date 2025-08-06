import React from 'react';
import Lottie from 'lottie-react';
import { translations } from '../translations/translations';
import phoneAnimation from '../assets/logo/phone.json';

const Contact = ({ language = 'en' }) => {

  return (
    <div className="container" style={{
      padding: '40px 20px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      {/* Phone Animation */}
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Lottie
          animationData={phoneAnimation}
          style={{ 
            width: '200px', 
            height: '200px',
            maxWidth: '100%'
          }}
          loop={true}
          autoplay={true}
        />
      </div>
      
      <h1 style={{
        fontSize: '48px',
        marginTop: '0px',
        marginBottom: '30px',
        fontWeight: 'bold'
      }}>
        {translations[language].contactTitle}
      </h1>
      
      <div style={{
        fontSize: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <p>
          {translations[language].contactParagraph1}
        </p>
        <p style={{ marginTop: '20px' }}>
          {translations[language].contactParagraph2}
        </p>
        
        {/* Contact Information */}
        <div style={{
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '600px',
          margin: '40px auto 0'
        }}>
          <a 
            href="mailto:esra.koyunoglu@outlook.com"
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              <h3 style={{
                fontSize: '24px',
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                📧 {translations[language].email}
              </h3>
              <p style={{ fontSize: '16px' }}>
                esra.koyunoglu@outlook.com
              </p>
            </div>
          </a>
          
          <div style={{
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            <h3 style={{
              fontSize: '24px',
              marginBottom: '10px',
              fontWeight: 'bold'
            }}>
              📱 {translations[language].phone}
            </h3>
            <p style={{ fontSize: '16px' }}>
              +90 (554) 861 7580
            </p>
          </div>
          
          <a 
            href="https://linkedin.com/in/esrakoyunoglu"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              <h3 style={{
                fontSize: '24px',
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                💼 {translations[language].linkedin}
              </h3>
              <p style={{ fontSize: '16px' }}>
                linkedin.com/in/esrakoyunoglu
              </p>
            </div>
          </a>
          
          <a 
            href="https://github.com/esrakabakbas"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              <h3 style={{
                fontSize: '24px',
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                🐙 {translations[language].github}
              </h3>
              <p style={{ fontSize: '16px' }}>
                github.com/esrakabakbas
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 20px 15px !important;
          }
          
          .container h1 {
            font-size: 32px !important;
          }
          
          .container > div:nth-child(3) {
            font-size: 16px !important;
          }
          
          .container > div:nth-child(3) > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            max-width: 100% !important;
          }
          
          .container > div:nth-child(3) > div > div {
            padding: 15px !important;
          }
          
          .container > div:nth-child(3) > div > div h3 {
            font-size: 20px !important;
          }
          
          .container > div:nth-child(3) > div > div p {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 15px 10px !important;
          }
          
          .container h1 {
            font-size: 28px !important;
          }
          
          .container > div:nth-child(3) {
            font-size: 15px !important;
          }
          
          .container > div:nth-child(3) > div {
            gap: 15px !important;
          }
          
          .container > div:nth-child(3) > div > div {
            padding: 12px !important;
          }
          
          .container > div:nth-child(3) > div > div h3 {
            font-size: 18px !important;
          }
          
          .container > div:nth-child(3) > div > div p {
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact; 