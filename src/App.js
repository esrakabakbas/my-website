import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return savedLanguage || 'en';
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Get current tab from URL path
  const getCurrentTab = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'home';
    if (path === '/about') return 'about';
    if (path === '/resume') return 'resume';
    if (path === '/faq') return 'faq';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const activeTab = getCurrentTab();

  const handleTabChange = (tabId) => {
    const path = tabId === 'home' ? '/' : `/${tabId}`;
    navigate(path);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
  };

           return (
           <div className="App" style={{
             display: 'flex',
             flexDirection: 'column',
             minHeight: '100vh'
           }}>
             <Navbar
               activeTab={activeTab}
               onTabChange={handleTabChange}
               language={language}
               onLanguageChange={handleLanguageChange}
             />
             <main style={{ flex: '1' }}>
               <Routes>
                 <Route path="/" element={<Home language={language} />} />
                 <Route path="/home" element={<Home language={language} />} />
                 <Route path="/about" element={<AboutMe language={language} />} />
                 <Route path="/resume" element={<Resume language={language} />} />
                 <Route path="/faq" element={<FAQ language={language} />} />
                 <Route path="/contact" element={<Contact language={language} />} />
               </Routes>
             </main>
             <Footer language={language} />
           </div>
         );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
