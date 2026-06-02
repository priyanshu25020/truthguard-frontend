import React from 'react';
import { useNavigate } from 'react-router-dom'; // 🚀 Import useNavigate

// Sirf Task 1 wali main images (inke bina design adhura hai)
import iconLink from '../assets/icon-link.png';
import iconPdf from '../assets/icon-pdf.png';
import iconText from '../assets/icon-text.png';

// Task 3 wali image (Dhyan rakhna promo-image.png assets me ho)
import promoImage from '../assets/promo-image.png'; 

const RightPanel = () => {
  const navigate = useNavigate(); // 🔥 Hook yahan component ke andar initialize karna hai

  return (
    <div className="space-y-6 h-full flex flex-col pb-4">
      
      {/* =========================================
          TASK 1: 3 WAYS TO ANALYZE (With Premium Inner Shading)
          ========================================= */}
      <div className="bg-gradient-to-br from-[#120b29] via-[#05040a] to-[#05040a] border-[1.5px] border-[#3b82f6]/20 rounded-3xl p-6 shadow-[inset_0_0_40px_rgba(59,130,246,0.05)] relative overflow-hidden">
        
        <h3 className="text-[15px] font-bold mb-5 flex items-center gap-2 text-white tracking-wide">
          <span className="text-purple-400 text-xl drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">🪄</span> 
          3 Ways to Analyze
        </h3>
        
       <div className="space-y-3.5">
          {/* Box 1 - Paste Article Text (Ab ye 1st hai) */}
          <div 
            onClick={() => navigate('/analyze', { state: { activeTab: 'text' } })} 
            className="flex items-center gap-4 p-3.5 bg-gradient-to-br from-[#1a1438] to-[#070510] border border-[#3b82f6]/10 rounded-2xl cursor-pointer hover:border-pink-500/40 hover:from-[#1f1745] transition-all group shadow-[inset_0_2px_15px_rgba(236,72,153,0.08),_0_5px_15px_rgba(0,0,0,0.5)]"
          >
            <img src={iconText} alt="Text" className="w-12 h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform" />
            <div className="flex-1">
              <h4 className="text-[13px] font-bold text-gray-200">Paste Article Text</h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">Type or paste the news<br/>content here...</p>
            </div>
            <span className="text-gray-600 text-xl opacity-0 group-hover:opacity-100 group-hover:text-pink-400 transition pr-2">›</span>
          </div>

          {/* Box 2 - Paste News Link (Ab ye 2nd hai) */}
          <div 
            onClick={() => navigate('/analyze', { state: { activeTab: 'link' } })} 
            className="flex items-center gap-4 p-3.5 bg-gradient-to-br from-[#1a1438] to-[#070510] border border-[#3b82f6]/10 rounded-2xl cursor-pointer hover:border-purple-500/40 hover:from-[#1f1745] transition-all group shadow-[inset_0_2px_15px_rgba(168,85,247,0.08),_0_5px_15px_rgba(0,0,0,0.5)]"
          >
            <img src={iconLink} alt="Link" className="w-12 h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform" />
            <div className="flex-1">
              <h4 className="text-[13px] font-bold text-gray-200">Paste News Link</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">https://news...</p>
            </div>
            <span className="text-gray-600 text-xl group-hover:text-purple-400 transition pr-2">›</span>
          </div>
          
          {/* Box 3 - Upload Image / PDF (Ab ye 3rd hai) */}
          <div 
            onClick={() => navigate('/analyze', { state: { activeTab: 'image' } })} 
            className="flex items-center gap-4 p-3.5 bg-gradient-to-br from-[#1a1438] to-[#070510] border border-[#3b82f6]/10 rounded-2xl cursor-pointer hover:border-blue-500/40 hover:from-[#1f1745] transition-all group shadow-[inset_0_2px_15px_rgba(59,130,246,0.08),_0_5px_15px_rgba(0,0,0,0.5)]"
          >
            <img src={iconPdf} alt="PDF" className="w-12 h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform" />
            <div className="flex-1">
              <h4 className="text-[13px] font-bold text-gray-200">Upload Image / PDF</h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">Upload article screenshot<br/>or PDF</p>
            </div>
            <span className="text-gray-600 text-xl opacity-0 group-hover:opacity-100 group-hover:text-blue-400 transition pr-2">›</span>
          </div>
        </div>
      </div>

      {/* =========================================
          TASK 2: OTHER COOL OPTIONS (With Colored SVGs)
          ========================================= */}
      <div className="bg-gradient-to-br from-[#120b29] via-[#05040a] to-[#05040a] border-[1.5px] border-[#3b82f6]/20 rounded-3xl p-6 shadow-[inset_0_0_40px_rgba(59,130,246,0.05)] relative overflow-hidden">
        
        <h3 className="text-[15px] font-bold mb-6 flex items-center gap-2 text-white tracking-wide">
          <span className="text-blue-400 text-xl drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">🚀</span> 
          Other Cool Options
        </h3>
        
        <ul className="space-y-4.5 text-[13px] font-bold text-[#cbd5e1]">
          {/* History (Purple Icon) */}
          <li onClick={() => navigate('/history')} className="flex items-center gap-3 cursor-pointer hover:text-white transition group">
            <svg className="w-5 h-5 text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)] group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Fact Check History
          </li>
          
          {/* Saved (Yellow Icon) */}
          <li onClick={() => navigate('/saved')} className="flex items-center gap-3 cursor-pointer hover:text-white transition group">
            <svg className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)] group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
            Saved Articles
          </li>
          
          {/* Alerts (Orange/Yellow Icon) */}
          <li onClick={() => navigate('/alerts')} className="flex items-center gap-3 cursor-pointer hover:text-white transition group justify-between">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)] group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              Alerts & Trending News
            </div>
            <span className="bg-[#ef4444]/20 border border-[#ef4444]/50 text-[#f87171] px-2 py-0.5 rounded-md text-[9px] font-black tracking-wider shadow-[0_0_10px_rgba(239,68,68,0.3)]">NEW</span>
          </li>
          
          {/* Quiz (Blue Icon) */}
          <li onClick={() => navigate('/quizzes')} className="flex items-center gap-3 cursor-pointer hover:text-white transition group">
            <svg className="w-5 h-5 text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)] group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            Quiz: Real or Fake?
          </li>
          
          {/* Settings (Gray/White Icon) */}
          <li onClick={() => navigate('/settings')} className="flex items-center gap-3 cursor-pointer hover:text-white transition group">
            <svg className="w-5 h-5 text-gray-400 drop-shadow-[0_0_5px_rgba(156,163,175,0.5)] group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Settings & Preferences
          </li>
        </ul>
      </div>

      {/* =========================================
          TASK 3: PROMO IMAGE AT BOTTOM
          ========================================= */}
      <div className="mt-2 relative group flex justify-center">
        {/* Piche ka glow */}
        <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full group-hover:bg-blue-600/30 transition duration-500"></div>
        
        {/* Main Image */}
        <img 
          src={promoImage} 
          alt="Cyber Security Network Shield" 
          className="relative z-10 w-full max-w-[280px] h-auto object-contain rounded-2xl drop-shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:scale-[1.02] transition-transform duration-500" 
        />
      </div>

    </div>
  );
};

export default RightPanel;