import React, { useState, useEffect, useRef } from 'react';
import { translations } from '../translations/translations';

const Navbar = ({ activeTab, onTabChange, language, onLanguageChange }) => {
  const tabs = [
    { id: 'home', label: translations[language].home },
    { id: 'about', label: translations[language].aboutMe },
    { id: 'resume', label: translations[language].resumeNavbar },
    { id: 'faq', label: translations[language].faq },
    { id: 'contact', label: translations[language].contact }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'tr', name: 'Türkçe', flag: 'TR' },
  ];

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  const languageDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsLanguageOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    if (isLanguageOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isLanguageOpen, isMobileMenuOpen]);

  // Close mobile menu when tab changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav style={{
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo/Brand */}
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#f2e6c4'
        }}>
          {translations[language].portfolio}
        </div>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '0',
          alignItems: 'center'
        }} className="desktop-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              style={{
                background: activeTab === tab.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                border: 'none',
                padding: '12px 24px',
                margin: '0 4px',
                borderRadius: '8px',
                color: '#f2e6c4',
                fontSize: '16px',
                fontWeight: activeTab === tab.id ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderBottom: activeTab === tab.id ? '2px solid #f2e6c4' : '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              {tab.label}
            </button>
          ))}

          {/* Desktop Language Selector */}
          <div 
            ref={languageDropdownRef}
            style={{
              position: 'relative',
              marginLeft: '20px'
            }}
          >
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '6px',
                color: '#f2e6c4',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <span style={{ fontSize: '16px' }}>{currentLanguage.flag}</span>
              <span>{currentLanguage.code.toUpperCase()}</span>
              <span style={{ 
                fontSize: '12px',
                transition: 'transform 0.3s ease',
                transform: isLanguageOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                ▼
              </span>
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '8px',
                background: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                padding: '8px 0',
                minWidth: '200px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                zIndex: 1001
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    style={{
                      background: language === lang.code ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                      border: 'none',
                      padding: '12px 16px',
                      width: '100%',
                      textAlign: 'left',
                      color: '#f2e6c4',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (language !== lang.code) {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (language !== lang.code) {
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '8px',
              borderRadius: '6px',
              color: '#f2e6c4',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              minWidth: '44px',
              minHeight: '44px',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{
              width: '20px',
              height: '2px',
              backgroundColor: '#f2e6c4',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }} />
            <div style={{
              width: '20px',
              height: '2px',
              backgroundColor: '#f2e6c4',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? '0' : '1'
            }} />
            <div style={{
              width: '20px',
              height: '2px',
              backgroundColor: '#f2e6c4',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
            }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px',
            zIndex: 1001
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                  border: 'none',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  color: '#f2e6c4',
                  fontSize: '16px',
                  fontWeight: activeTab === tab.id ? '600' : '400',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
            
            {/* Mobile Language Selector */}
            <div style={{
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#f2e6c4',
                marginBottom: '10px',
                opacity: '0.8'
              }}>
                Language / Dil
              </div>
              <div style={{
                display: 'flex',
                gap: '10px'
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      background: language === lang.code ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '10px 15px',
                      borderRadius: '6px',
                      color: '#f2e6c4',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>{lang.flag}</span>
                    <span>{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style jsx>{`
        .desktop-nav {
          display: flex;
        }
        
        .mobile-menu-button {
          display: none;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 