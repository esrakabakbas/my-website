import React, { useState } from 'react';
import { translations } from '../translations/translations';

// PDF files are now served from public folder
const cvDocument = '/documents/cv.pdf';
const alesDocument = '/documents/ales_sonuc.pdf';
const lysDocument = '/documents/osym_sonuc.pdf';

 const Resume = ({ language = 'en' }) => {
   const [isExperienceOpen, setIsExperienceOpen] = useState(false);
   const [isEducationOpen, setIsEducationOpen] = useState(false);
   const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
  return (
         <div className="container" style={{
       padding: '40px 20px',
       margin: '0 auto',
       textAlign: 'left'
     }}>
             <h1 style={{
         fontSize: '48px',
         marginBottom: '30px',
         fontWeight: 'bold',
         textAlign: 'left'
       }}>
         {translations[language].resumeTitle}
       </h1>
             <div style={{
         fontSize: '20px',
         lineHeight: '1.8',
         maxWidth: '800px',
         margin: '0 auto'
               }}>
          {/* Experience Section */}
          <div style={{
            marginTop: '0',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => setIsExperienceOpen(!isExperienceOpen)}
              style={{
                width: '100%',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#f2e6c4',
                fontSize: '20px',
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
              <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].experience}</span>
              <span style={{
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                transform: isExperienceOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                ▼
              </span>
            </button>
            
            {isExperienceOpen && (
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'left'
              }}>
                                 <h3 style={{
                   fontSize: '20px',
                   fontWeight: 'bold',
                   marginBottom: '5px',
                   color: '#f2e6c4'
                 }}>
                   → {translations[language].experienceDetails}
                 </h3>
                                 <p style={{
                   fontSize: '16px',
                   fontWeight: '500',
                   margin: '0 0 5px 0',
                   color: '#f2e6c4',
                   opacity: '0.9'
                 }}>
                                       <span style={{ color: '#590655' }}>{translations[language].experienceCompany}</span>
                 </p>
                                 <p style={{
                   fontSize: '16px',
                   lineHeight: '1.4',
                   margin: '0 0 10px 0',
                   color: '#f2e6c4',
                   opacity: '0.8'
                 }}>
                    Ankara, Türkiye ({translations[language].hybrid}) • {translations[language].experienceDuration}
                 </p>
                 <p style={{
                   fontSize: '14px',
                   lineHeight: '1.5',
                   margin: '0 0 15px 0',
                   color: '#f2e6c4',
                   opacity: '0.7',
                   fontStyle: 'italic'
                 }}>
                   {translations[language].companyInfo1}
                 </p>
                 <p style={{
                   fontSize: '14px',
                   lineHeight: '1.5',
                   margin: '0 0 15px 0',
                   color: '#f2e6c4',
                   opacity: '0.7',
                   fontStyle: 'italic'
                 }}>
                   {translations[language].companyInfo2}
                 </p>
                                                   <div style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    margin: '0',
                    color: '#f2e6c4'
                  }}>
                    {translations[language].experienceDescription.split('\n').map((line, index) => (
                      <p key={index} style={{
                        margin: '0 0 8px 0',
                        paddingLeft: '0'
                      }}>
                        {line}
                      </p>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      margin: '0 0 8px 0',
                      color: '#f2e6c4',
                      opacity: '0.9'
                    }}>
                      <strong><u>Tech Stack:</u> </strong>
                  
                      .Net6, .Net8, Abp, RabbitMQ, MinIO, AWS, Redis, Kibana, Jenkins
                    </p>
                  </div>

                 {/* Second Experience Entry */}
                 <div style={{
                   marginTop: '30px',
                   paddingTop: '20px',
                   borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
                   <h3 style={{
                     fontSize: '20px',
                     fontWeight: 'bold',
                     marginBottom: '5px',
                     color: '#f2e6c4'
                   }}>
                     → {translations[language].softwareEngineer}
                   </h3>
                                       <p style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      margin: '0 0 5px 0',
                      color: '#f2e6c4',
                      opacity: '0.9'
                    }}>
                                             <span style={{ color: '#590655' }}>SESTEK</span>
                    </p>
                                       <p style={{
                      fontSize: '16px',
                      lineHeight: '1.4',
                      margin: '0 0 10px 0',
                      color: '#f2e6c4',
                      opacity: '0.8'
                    }}>
                      Ankara, Türkiye ({translations[language].hybrid}) • {translations[language].november} 2023 - {translations[language].june} 2025
                    </p>          
                  </div>

                 {/* Third Experience Entry */}
                 <div style={{
                   marginTop: '30px',
                   paddingTop: '20px',
                   borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
                   <h3 style={{
                     fontSize: '20px',
                     fontWeight: 'bold',
                     marginBottom: '5px',
                     color: '#f2e6c4'
                   }}>
                     → {translations[language].softwareEngineer}
                   </h3>
                                                            <p style={{
                       fontSize: '16px',
                       fontWeight: '500',
                       margin: '0 0 5px 0',
                       color: '#f2e6c4',
                       opacity: '0.9'
                     }}>
                       <span style={{ color: '#ff4444' }}>{translations[language].ustaCompany}</span>
                     </p>
                   <p style={{
                     fontSize: '16px',
                     lineHeight: '1.4',
                     margin: '0 0 10px 0',
                     color: '#f2e6c4',
                     opacity: '0.8'
                   }}>
                     Ankara, Türkiye ({translations[language].onSite}) • {translations[language].september} 2023 - {translations[language].october} 2023
                   </p>
                   <p style={{
                     fontSize: '14px',
                     lineHeight: '1.5',
                     margin: '0 0 15px 0',
                     color: '#f2e6c4',
                     opacity: '0.7',
                     fontStyle: 'italic'
                   }}>
                     {translations[language].ustaCompanyInfo}
                   </p>
                 </div>
                 <div style={{
                       fontSize: '16px',
                       lineHeight: '1.6',
                       margin: '0',
                       color: '#f2e6c4'
                     }}>
                       {translations[language].ustaSecondExperienceDescription.split('\n').map((line, index) => (
                         <p key={index} style={{
                           margin: '0 0 8px 0',
                           paddingLeft: '0'
                         }}>
                           {line}
                         </p>
                       ))}
                     </div>
                                           <div>
                     <p style={{
                       fontSize: '14px',
                       fontWeight: '500',
                       margin: '0 0 8px 0',
                       color: '#f2e6c4',
                       opacity: '0.9'
                     }}>
                       <strong><u>Tech Stack:</u> </strong>
                   
                       .Net6, .Net8, EFCore, React, Redis, Jenkins
                     </p>
                   </div>

                   {/* Fourth Experience Entry */}
                   <div style={{
                     marginTop: '30px',
                     paddingTop: '20px',
                     borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                   }}>
                     <h3 style={{
                       fontSize: '20px',
                       fontWeight: 'bold',
                       marginBottom: '5px',
                       color: '#f2e6c4'
                     }}>
                       → {translations[language].softwareEngineer}
                     </h3>
                                            <p style={{
                         fontSize: '16px',
                         fontWeight: '500',
                         margin: '0 0 5px 0',
                         color: '#f2e6c4',
                         opacity: '0.9'
                       }}>
                                                   <span style={{ color: '#0f1d7a' }}>{translations[language].datateamCompany}</span>
                       </p>
                                           <p style={{
                        fontSize: '16px',
                        lineHeight: '1.4',
                        margin: '0 0 10px 0',
                        color: '#f2e6c4',
                        opacity: '0.8'
                      }}>
                        Ankara, Türkiye ({translations[language].onSite}) • {translations[language].june} 2021 - {translations[language].october} 2023
                      </p>
                      <p style={{
                        fontSize: '14px',
                        lineHeight: '1.5',
                        margin: '0 0 15px 0',
                        color: '#f2e6c4',
                        opacity: '0.7',
                        fontStyle: 'italic'
                      }}>
                        {translations[language].datateamCompanyInfo}
                      </p>
                     <div style={{
                       fontSize: '16px',
                       lineHeight: '1.6',
                       margin: '0',
                       color: '#f2e6c4'
                     }}>
                       {translations[language].datateamExperienceDescription.split('\n').map((line, index) => (
                         <p key={index} style={{
                           margin: '0 0 8px 0',
                           paddingLeft: '0'
                         }}>
                           {line}
                         </p>
                       ))}
                     </div>
                                           <div>
                        <p style={{
                          fontSize: '14px',
                          fontWeight: '500',
                          margin: '0 0 8px 0',
                          color: '#f2e6c4',
                          opacity: '0.9'
                        }}>
                          <strong><u>Tech Stack:</u> </strong>
                      
                          VueJS, VivaGraph, D3, .Net, PostgreSQL, Oracle, MsSQL, Docker, Git, npm
                        </p>
                      </div>
                    </div>

                    {/* Fifth Experience Entry */}
                    <div style={{
                      marginTop: '30px',
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '5px',
                        color: '#f2e6c4'
                      }}>
                        → Part-Time {translations[language].softwareEngineer}
                      </h3>
                      <p style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        margin: '0 0 5px 0',
                        color: '#f2e6c4',
                        opacity: '0.9'
                      }}>
                        <span style={{ color: '#0f1d7a' }}>{translations[language].datateamCompany}</span>
                      </p>
                      <p style={{
                        fontSize: '16px',
                        lineHeight: '1.4',
                        margin: '0 0 10px 0',
                        color: '#f2e6c4',
                        opacity: '0.8'
                      }}>
                        Ankara, Türkiye ({translations[language].remote}) • {translations[language].october} 2020 - {translations[language].march} 2021
                      </p>
                      <div style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        margin: '0',
                        color: '#f2e6c4'
                      }}>
                        {translations[language].datateamPartTimeExperienceDescription.split('\n').map((line, index) => (
                          <p key={index} style={{
                            margin: '0 0 8px 0',
                            paddingLeft: '0'
                          }}>
                            {line}
                          </p>
                        ))}
                      </div>
                      <div>
                        <p style={{
                          fontSize: '14px',
                          fontWeight: '500',
                          margin: '0 0 8px 0',
                          color: '#f2e6c4',
                          opacity: '0.9'
                        }}>
                          <strong><u>Tech Stack:</u> </strong>
                      
                          AngularJS, Node.js, D3.js, Npm, SourceTree, Scrum
                        </p>
                      </div>
                    </div>
              </div>
            )}
          </div>

                     {/* Education Section */}
           <div style={{
             marginTop: '0',
             border: '1px solid rgba(255, 255, 255, 0.2)',
             borderRadius: '10px',
             overflow: 'hidden',
             marginBottom: '20px'
           }}>
          <button
            onClick={() => setIsEducationOpen(!isEducationOpen)}
            style={{
              width: '100%',
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#f2e6c4',
              fontSize: '20px',
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
            <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].education}</span>
            <span style={{
              fontSize: '16px',
              transition: 'transform 0.3s ease',
              transform: isEducationOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              marginLeft: '10px',
              flexShrink: 0
            }}>
              ▼
            </span>
          </button>
          
                     {isEducationOpen && (
             <div style={{
               padding: '20px',
               backgroundColor: 'rgba(255, 255, 255, 0.05)',
               borderTop: '1px solid rgba(255, 255, 255, 0.1)',
               textAlign: 'left'
             }}>
               <h3 style={{
                 fontSize: '20px',
                 fontWeight: 'bold',
                 marginBottom: '5px',
                 color: '#f2e6c4'
               }}>
                 {translations[language].educationDetails}
               </h3>
               <p style={{
                 fontSize: '18px',
                 fontWeight: '500',
                 margin: '0 0 10px 0',
                 color: '#f2e6c4'
               }}>
                 {translations[language].educationDegree}
               </p>

               <p style={{
                 fontSize: '16px',
                 lineHeight: '1.4',
                 margin: '0 0 5px 0',
                 color: '#f2e6c4',
                 opacity: '0.9'
               }}>
                 {translations[language].educationLocation}
               </p>
              
               <p style={{
                 fontSize: '16px',
                 fontWeight: '500',
                 margin: '0',
                 color: '#f2e6c4',
                 borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                 paddingTop: '10px'
               }}>
                 {translations[language].educationGPA}
               </p>
                           </div>
            )}
         </div>

         {/* Documents Section */}
         <div style={{
           marginTop: '0',
           border: '1px solid rgba(255, 255, 255, 0.2)',
           borderRadius: '10px',
           overflow: 'hidden'
         }}>
         <button
           onClick={() => setIsDocumentsOpen(!isDocumentsOpen)}
           style={{
             width: '100%',
             padding: '20px',
             backgroundColor: 'rgba(255, 255, 255, 0.1)',
             border: 'none',
             color: '#f2e6c4',
             fontSize: '20px',
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
           <span style={{ textAlign: 'left', flex: '1' }}>{translations[language].documents}</span>
           <span style={{
             fontSize: '16px',
             transition: 'transform 0.3s ease',
             transform: isDocumentsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
             marginLeft: '10px',
             flexShrink: 0
           }}>
             ▼
           </span>
         </button>
         
                                 {isDocumentsOpen && (
         <div style={{
           padding: '20px',
           backgroundColor: 'rgba(255, 255, 255, 0.05)',
           borderTop: '1px solid rgba(255, 255, 255, 0.1)',
           textAlign: 'left'
         }}>
           <div style={{
             marginBottom: '20px'
           }}>
             <a
               href={cvDocument}
               target="_blank"
               rel="noopener noreferrer"
               style={{
                 display: 'block',
                 color: '#f2e6c4',
                 textDecoration: 'none',
                 fontSize: '18px',
                 fontWeight: 'bold',
                 marginBottom: '10px',
                 cursor: 'pointer',
                 transition: 'color 0.3s ease',
                 padding: '10px',
                 borderRadius: '5px'
               }}
               onMouseEnter={(e) => {
                 e.target.style.color = '#ffffff';
                 e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.color = '#f2e6c4';
                 e.target.style.backgroundColor = 'transparent';
               }}
             >
               • {translations[language].resume}
             </a>
             
             <a
               href={alesDocument}
               target="_blank"
               rel="noopener noreferrer"
               style={{
                 display: 'block',
                 color: '#f2e6c4',
                 textDecoration: 'none',
                 fontSize: '18px',
                 fontWeight: 'bold',
                 marginBottom: '10px',
                 marginTop: '20px',
                 cursor: 'pointer',
                 transition: 'color 0.3s ease',
                 padding: '10px',
                 borderRadius: '5px'
               }}
               onMouseEnter={(e) => {
                 e.target.style.color = '#ffffff';
                 e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.color = '#f2e6c4';
                 e.target.style.backgroundColor = 'transparent';
               }}
             >
               • {translations[language].alesHeader}
             </a>
             <p style={{
               fontSize: '14px',
               color: '#f2e6c4',
               opacity: '0.8',
               margin: '0 0 0 20px'
             }}>
               {translations[language].point}: 81/100
             </p>
             
             <a
               href={lysDocument}
               target="_blank"
               rel="noopener noreferrer"
               style={{
                 display: 'block',
                 color: '#f2e6c4',
                 textDecoration: 'none',
                 fontSize: '18px',
                 fontWeight: 'bold',
                 marginBottom: '10px',
                 marginTop: '20px',
                 cursor: 'pointer',
                 transition: 'color 0.3s ease',
                 padding: '10px',
                 borderRadius: '5px'
               }}
               onMouseEnter={(e) => {
                 e.target.style.color = '#ffffff';
                 e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.color = '#f2e6c4';
                 e.target.style.backgroundColor = 'transparent';
               }}
             >
               • {translations[language].lysHeader}
             </a>
             <p style={{
               fontSize: '14px',
               color: '#f2e6c4',
               opacity: '0.8',
               margin: '0 0 0 20px'
             }}>
               {translations[language].point}: 449/500
             </p>
           </div>
         </div>
       )}
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
             margin-bottom: 15px !important;
           }
           
           .container > div:nth-child(2) > div > button {
             padding: 15px !important;
             font-size: 18px !important;
           }
           
           .container > div:nth-child(2) > div > div {
             padding: 15px !important;
           }
           
           .container > div:nth-child(2) > div > div h3 {
             font-size: 18px !important;
           }
           
           .container > div:nth-child(2) > div > div p {
             font-size: 14px !important;
           }
           
           .container > div:nth-child(2) > div > div a {
             font-size: 16px !important;
             padding: 8px !important;
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
             margin-bottom: 10px !important;
           }
           
           .container > div:nth-child(2) > div > button {
             padding: 12px !important;
             font-size: 16px !important;
           }
           
           .container > div:nth-child(2) > div > div {
             padding: 12px !important;
           }
           
           .container > div:nth-child(2) > div > div h3 {
             font-size: 16px !important;
           }
           
           .container > div:nth-child(2) > div > div p {
             font-size: 13px !important;
           }
           
           .container > div:nth-child(2) > div > div a {
             font-size: 15px !important;
             padding: 6px !important;
           }
         }
       `}</style>
     </div>
   );
 };

export default Resume; 