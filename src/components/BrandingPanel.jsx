import React from 'react';
import shieldMain from '../assets/shield-main.png';

const BrandingPanel = () => {
  return (
    <div className="w-[320px] h-full bg-[#05040a] border-r border-[#1a1a2e] flex flex-col p-8 overflow-y-auto flex-shrink-0 z-20">

      {/* 1. TITLE SECTION */}
      <div className="mb-6 mt-2">
        <h1 className="text-[40px] leading-tight font-extrabold tracking-wide text-white">
          Fake News
        </h1>
        <div className="flex items-center gap-3">
          <h1 className="text-[38px] leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#b07bf6] to-[#7154f8] tracking-wide">
            Detector
          </h1>
          <div className="mt-1">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="url(#shieldGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" /> 
                  <stop offset="100%" stopColor="#3b82f6" /> 
                </linearGradient>
              </defs>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 2. SUBTITLE SECTION */}
      <div className="text-[17px] font-bold mb-6 tracking-wide">
        <p className="text-gray-100 mb-1.5">Stay <span className="text-[#3b82f6]">Informed.</span></p>
        <p className="text-gray-100">Stay <span className="text-[#a855f7]">Protected.</span></p>
      </div>

      {/* 3. MAIN SHIELD IMAGE */}
      <div className="relative flex justify-center items-center w-full mb-10 mt-4">
        <img 
          src={shieldMain} 
          alt="Main Shield" 
          className="w-full max-w-[260px] h-auto object-contain mix-blend-screen drop-shadow-2xl" 
        />
      </div>

      {/* 4. KEY FEATURES BOX - Yahan Gradient Background add kiya hai */}
      <div className="bg-gradient-to-br from-[#18113f] via-[#090715] to-[#05040a] border-[1.5px] border-[#3b82f6]/60 rounded-[24px] p-6 mt-auto shadow-[0_0_30px_rgba(59,130,246,0.15)] relative">
        
        <h3 className="text-[14px] font-bold text-white mb-5 flex items-center gap-2 uppercase tracking-widest">
          <span className="text-[#60a5fa] text-xl">★</span> KEY FEATURES
        </h3>
        
        <ul className="space-y-4 text-[13px] font-medium text-[#cbd5e1]">
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            AI-Powered Fact Checking
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            Real-time News Analysis
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            Source Credibility Check
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
            Bias & Sentiment Detection
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            AI Summary (TL;DR)
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#c084fc]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
            Save & History
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            Quizzes to Test Knowledge
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#c084fc]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            Cybersecurity Focused
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrandingPanel;