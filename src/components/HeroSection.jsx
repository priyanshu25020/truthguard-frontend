import React, { useState } from 'react';
import axios from 'axios';
import robotImg from '../assets/robot.png';

const HeroSection = ({ onAnalysisComplete }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!inputValue) {
      alert("Bhai, pehle koi URL ya text toh type karo! 😅");
      return;
    }

    setIsLoading(true);
    try {
      // Frontend se Backend (localhost:5000) ko request bhej rahe hain
     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/analyze`,{
        content: inputValue,
        type: "text" 
      });

      console.log("Backend Se Result Aaya:", response.data);
      
      // Agar props mein function mila hai toh call karenge
      if(onAnalysisComplete) {
         onAnalysisComplete(response.data);
      }

      // 🔥 HOME PAGE WALI HISTORY SAVING 🔥 (Yahan add kiya hai aapka code)
      const newHistoryItem = {
        id: 'SCAN_0x' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(4, '0'),
        date: new Date().toISOString().split('T')[0],
        headline: response.data.headline || 'Home Page Scan',
        type: 'QUICK SCAN', 
        status: response.data.status || 'Unknown',
        confidence: response.data.confidence || response.data.aiConfidence || 0
      };

      const existingHistory = JSON.parse(localStorage.getItem('truthGuard_history')) || [];
      const updatedHistory = [newHistoryItem, ...existingHistory];
      localStorage.setItem('truthGuard_history', JSON.stringify(updatedHistory));

      // 🔥 Yeh line baki sab components (jaise StatsCards) ko batayegi ki naya scan hua hai
      window.dispatchEvent(new Event('historyUpdated'));

    } catch (error) {
      console.error("Error analyzing:", error);
      alert("❌ Server se connect nahi ho paya. Backend chalu hai na?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#120b29] via-[#05040a] to-[#05040a] border border-[#3b82f6]/30 rounded-[28px] p-8 md:p-10 overflow-hidden shadow-[inset_0_0_60px_rgba(59,130,246,0.08)]">
      
      <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full md:w-2/3">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white tracking-wide drop-shadow-md">
          Welcome to 🛡️ TruthGuard AI
        </h2>
        <p className="text-[#94a3b8] mb-8 text-sm md:text-base font-medium">
          Let's separate <span className="text-[#4ade80] font-bold">Facts</span> from <span className="text-[#f87171] font-bold">Fiction</span> with AI.
        </p>
        
        <div className="relative rounded-[22px] overflow-hidden p-[2px] shadow-[0_0_40px_rgba(59,130,246,0.2)] group">
          
          <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_75%,#3b82f6_100%)] animate-[spin_2.5s_linear_infinite]"></div>
          
          <div className="relative flex items-center bg-[#070510] rounded-[20px] p-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] backdrop-blur-sm z-10">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste news link, article text or upload file..." 
              className="flex-1 bg-transparent border-none outline-none px-5 text-[14px] text-white placeholder-gray-500 font-medium"
            />
            <button 
              onClick={handleAnalyze}
              disabled={isLoading}
              className={`bg-gradient-to-r from-[#a855f7] to-[#4f46e5] px-7 py-3.5 rounded-[16px] text-[13px] font-bold text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)] ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-125'}`}
            >
              {isLoading ? '⏳ Analyzing...' : '⚡ Analyze Now'}
            </button>
          </div>
          
        </div>
        
        <p className="text-[11px] text-[#475569] mt-5 ml-3 tracking-widest font-bold uppercase">
          Supports: URL • Text • Image • PDF
        </p>
      </div>
      
      <div className="absolute right-0 bottom-0 hidden md:flex items-center justify-center w-[350px] h-[350px]">
         <img src={robotImg} alt="AI Robot" className="relative z-10 w-[240px] h-auto drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]" />
      </div>
    </div>
  );
};

export default HeroSection;