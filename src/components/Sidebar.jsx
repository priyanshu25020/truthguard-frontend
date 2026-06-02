import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import bgSpace from '../assets/bg-space.png';

const Sidebar = ({ isOpen }) => {
  // 🔥 Real Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle Function
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Jab bhi isDarkMode change hoga, body par class apply hogi
 // 🔥 Magical Light Mode Logic
  useEffect(() => {
    if (!isDarkMode) {
      // 1. Poori website ke colors invert kar dega (Dark becomes White)
      document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
      document.documentElement.style.backgroundColor = '#07050f'; // Edge cases ke liye
      
      // 2. Images, SVGs aur photos bhoot jaise (negative) na dikhein, isliye unko wapas normal karenge
      let style = document.getElementById('light-mode-fix');
      if (!style) {
        style = document.createElement('style');
        style.id = 'light-mode-fix';
        style.innerHTML = `
          img, video, .avatar-img { 
            filter: invert(1) hue-rotate(180deg) !important; 
          }
        `;
        document.head.appendChild(style);
      }
    } else {
      // Wapas Dark Mode (Default)
      document.documentElement.style.filter = 'none';
      document.documentElement.style.backgroundColor = '';
      const style = document.getElementById('light-mode-fix');
      if (style) style.remove();
    }
  }, [isDarkMode]);

  const navLinkStyle = ({ isActive }) => {
    return isActive
      ? "flex items-center gap-4 p-3.5 bg-gradient-to-r from-purple-900/30 to-transparent text-[#d8b4fe] rounded-2xl border-l-2 border-[#a855f7]"
      : "flex items-center gap-4 p-3.5 text-[#94a3b8] hover:text-white hover:bg-gray-800/30 transition rounded-2xl";
  };

  return (
    <aside className={`bg-[#07050f] border-[#1e1a2f] flex-col h-full transition-all duration-300 z-40 flex overflow-hidden whitespace-nowrap ${isOpen ? 'w-[270px] border-r opacity-100' : 'w-0 border-none opacity-0'}`}>
      
      {/* 1. LOGO SECTION */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
        <div>
          <h1 className="font-bold text-[19px] text-white leading-tight tracking-wide">TruthGuard</h1>
          <p className="text-[11px] text-gray-400 font-medium tracking-wide">AI News Shield</p>
        </div>
      </div>

      {/* 2. NAVIGATION MENU */}
      <nav className="flex-1 px-4 space-y-1 mt-2 overflow-y-auto custom-scrollbar">
        <NavLink to="/" className={navLinkStyle}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <span className="font-semibold text-[14px]">Home</span>
        </NavLink>
        
        <NavLink to="/analyze" className={navLinkStyle}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span className="font-medium text-[14px]">Analyze News</span>
        </NavLink>
        
        <NavLink to="/summary" className={navLinkStyle}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          <span className="font-medium text-[14px]">AI Summary</span>
        </NavLink>
        
        <NavLink to="/history" className={navLinkStyle}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="font-medium text-[14px]">Fact Check History</span>
        </NavLink>
        
        <NavLink to="/saved" className={navLinkStyle}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
          <span className="font-medium text-[14px]">Saved Articles</span>
        </NavLink>
        
        <NavLink to="/alerts" className={navLinkStyle}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <span className="font-medium text-[14px]">Alerts & Trends</span>
        </NavLink>
        
        <NavLink to="/quizzes" className={navLinkStyle}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
          <span className="font-medium text-[14px]">Quizzes</span>
        </NavLink>

        <div className="h-px bg-[#1e1a2f] w-full my-2"></div>
        
        <NavLink to="/settings" className={navLinkStyle}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span className="font-medium text-[14px]">Settings</span>
        </NavLink>

        <NavLink to="/about" className={navLinkStyle}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="font-medium text-[14px]">About Us</span>
        </NavLink>
      </nav>

      {/* 3. 🔥 FUNCTIONAL DARK MODE TOGGLE */}
      <div className="px-4 mt-2">
        <div onClick={handleThemeToggle} className="flex items-center justify-between bg-[#110e1b] border border-[#2a2440] rounded-full px-4 py-3 cursor-pointer hover:border-gray-600 transition group">
          <div className="flex items-center gap-3 text-gray-300">
            {isDarkMode ? (
              <svg className="w-4 h-4 text-[#818cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            ) : (
              <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            )}
            <span className="font-semibold text-[13px] group-hover:text-white transition-colors">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
          {/* Animated Switch Element */}
          <div className={`w-10 h-6 rounded-full flex items-center p-1 transition-colors duration-300 ${isDarkMode ? 'bg-[#312e81]' : 'bg-gray-600'}`}>
            <div className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isDarkMode ? 'translate-x-4 bg-[#818cf8]' : 'translate-x-0 bg-white'}`}></div>
          </div>
        </div>
      </div>

      {/* 4. SPACE IMAGE */}
      <div className="p-5 pb-8 mt-2">
        <div className="rounded-[20px] overflow-hidden border border-[#2a2440] shadow-[0_0_20px_rgba(0,0,0,0.5)] aspect-square relative">
          <img 
            src={bgSpace} 
            alt="Space Background" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition duration-500" 
          />
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;