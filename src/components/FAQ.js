import React, { useState } from 'react';
import { translations } from '../translations/translations';

const FAQ = ({ language = 'en' }) => {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <div className="container" style={{
      padding: '40px 20px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '48px',
        marginBottom: '30px',
        fontWeight: 'bold'
      }}>
        {translations[language].faqTitle}
      </h1>
      <div style={{
        fontSize: '18px',
        lineHeight: '1.8',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <p>
          {translations[language].faqParagraph1}
        </p>
        <p style={{ marginTop: '20px' }}>
          {translations[language].faqParagraph2}
        </p>
        <p style={{ marginTop: '20px' }}>
          {translations[language].faqParagraph3}
        </p>

        {/* FAQ Questions */}
        <div style={{
          marginTop: '40px',
          maxWidth: '800px',
          margin: '40px auto 0'
        }}>
          {/* Question 1 */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => setOpenQuestion(openQuestion === 1 ? null : 1)}
              style={{
                width: '100%',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#f2e6c4',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].faqQuestion1}</span>
              <span style={{
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                transform: openQuestion === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                ▼
              </span>
            </button>
            
            {openQuestion === 1 && (
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'left'
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: '0',
                  color: '#f2e6c4'
                }}>
                  {translations[language].faqAnswer1}
                </p>
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => setOpenQuestion(openQuestion === 2 ? null : 2)}
              style={{
                width: '100%',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#f2e6c4',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].faqQuestion2}</span>
              <span style={{
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                transform: openQuestion === 2 ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                ▼
              </span>
            </button>
            
            {openQuestion === 2 && (
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'left'
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: '0',
                  color: '#f2e6c4'
                }}>
                  {translations[language].faqAnswer2}
                </p>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => setOpenQuestion(openQuestion === 3 ? null : 3)}
              style={{
                width: '100%',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#f2e6c4',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].faqQuestion3}</span>
              <span style={{
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                transform: openQuestion === 3 ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                ▼
              </span>
            </button>
            
            {openQuestion === 3 && (
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'left'
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: '0',
                  color: '#f2e6c4'
                }}>
                  {translations[language].faqAnswer3}
                </p>
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => setOpenQuestion(openQuestion === 4 ? null : 4)}
              style={{
                width: '100%',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#f2e6c4',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].faqQuestion4}</span>
              <span style={{
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                transform: openQuestion === 4 ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                ▼
              </span>
            </button>
            
            {openQuestion === 4 && (
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'left'
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: '0',
                  color: '#f2e6c4'
                }}>
                  {translations[language].faqAnswer4}
                </p>
              </div>
            )}
          </div>

          {/* Question 5 */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => setOpenQuestion(openQuestion === 5 ? null : 5)}
              style={{
                width: '100%',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#f2e6c4',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].faqQuestion5}</span>
              <span style={{
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                transform: openQuestion === 5 ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                ▼
              </span>
            </button>
            
            {openQuestion === 5 && (
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'left'
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: '0',
                  color: '#f2e6c4'
                }}>
                  Answer will be added here...
                </p>
              </div>
            )}
          </div>

          {/* Question 6 */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => setOpenQuestion(openQuestion === 6 ? null : 6)}
              style={{
                width: '100%',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#f2e6c4',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].faqQuestion6}</span>
              <span style={{
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                transform: openQuestion === 6 ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                ▼
              </span>
            </button>
            
            {openQuestion === 6 && (
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'left'
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: '0',
                  color: '#f2e6c4'
                }}>
                  Answer will be added here...
                </p>
              </div>
            )}
          </div>

          {/* Question 7 */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => setOpenQuestion(openQuestion === 7 ? null : 7)}
              style={{
                width: '100%',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#f2e6c4',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].faqQuestion7}</span>
              <span style={{
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                transform: openQuestion === 7 ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                ▼
              </span>
            </button>
            
            {openQuestion === 7 && (
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'left'
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: '0',
                  color: '#f2e6c4'
                }}>
                  Answer will be added here...
                </p>
              </div>
            )}
          </div>
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
          
          .container > div:nth-child(2) {
            font-size: 16px !important;
          }
          
          .container > div:nth-child(2) > div {
            margin-top: 20px !important;
          }
          
          .container > div:nth-child(2) > div > div {
            margin-bottom: 15px !important;
          }
          
          .container > div:nth-child(2) > div > div > button {
            padding: 15px !important;
            font-size: 16px !important;
          }
          
          .container > div:nth-child(2) > div > div > div {
            padding: 15px !important;
          }
          
          .container > div:nth-child(2) > div > div > div > p {
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
          
          .container > div:nth-child(2) {
            font-size: 15px !important;
          }
          
          .container > div:nth-child(2) > div {
            margin-top: 15px !important;
          }
          
          .container > div:nth-child(2) > div > div {
            margin-bottom: 10px !important;
          }
          
          .container > div:nth-child(2) > div > div > button {
            padding: 12px !important;
            font-size: 15px !important;
          }
          
          .container > div:nth-child(2) > div > div > div {
            padding: 12px !important;
          }
          
          .container > div:nth-child(2) > div > div > div > p {
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQ; 