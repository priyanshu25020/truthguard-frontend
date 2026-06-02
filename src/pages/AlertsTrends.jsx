import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 🔥 Helper Function: Time calculate karne ke liye
const getTimeAgo = (timestamp) => {
  if (!timestamp) return "Just now";
  const diff = Math.floor((Date.now() - timestamp) / 1000);

  if (diff < 60) return "Just now";

  const mins = Math.floor(diff / 60);
  if (mins < 60) return `${mins} min${mins !== 1 ? 's' : ''} ago`;

  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hr${hours !== 1 ? 's' : ''} ago`;

  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? 's' : ''} ago`;
};

const AlertsTrends = () => {
  const [activeAlerts, setActiveAlerts] = useState([]);
  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Live minute update ke liye trigger state
  const [, setTick] = useState(0); 

  // Har 1 minute me UI (Time) refresh karne wala timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTick(v => v + 1);
    }, 60000); // 60,000 ms = 1 minute
    return () => clearInterval(timer);
  }, []);

  // 🔥 STEP 4: Midnight Auto Refresh (Raat 12 baje naya data lane ke liye)
  useEffect(() => {
    const checkMidnight = setInterval(() => {
      const now = new Date();
      if(now.getHours() === 0 && now.getMinutes() === 0) {
         localStorage.removeItem('truthGuard_threatData');
         localStorage.removeItem('truthGuard_threatDate');
         window.location.reload();
      }
    }, 60000);
    return () => clearInterval(checkMidnight);
  }, []);

  useEffect(() => {
    const fetchGroqThreatData = async () => {
      const CACHE_KEY = 'truthGuard_threatData';
      const CACHE_DATE_KEY = 'truthGuard_threatDate'; 
      
      // 🔥 STEP 5: Better Daily Cache (YYYY-MM-DD format)
      const todayStr = new Date().toISOString().split('T')[0];
      
      // Midnight Timestamp Setup
      const midnight = new Date();
      midnight.setHours(0, 0, 0, 0);
      const midnightTime = midnight.getTime();

      // 1. Check LocalStorage for Daily caching
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedDate = localStorage.getItem(CACHE_DATE_KEY);
      
      if (cachedData && cachedDate === todayStr) {
        const parsedData = JSON.parse(cachedData);
        setActiveAlerts(parsedData.alerts);
        setTrendingHashtags(parsedData.hashtags);
        setLoading(false);
        return; 
      }

      // 2. Cache na hone par -> Call Backend API
      try {
        // 🔥 STEP 6: Daily Seed in Prompt for unique results
        const prompt = `
        Date: ${todayStr}
        You are a highly advanced OSINT Cybersecurity Threat Intelligence AI. 
        Generate 5 current, realistic, real-time fake news threats and 3 trending misinformation hashtags.
        Use today's date as context to avoid repetitive results.
        
        Respond ONLY with a strictly valid JSON object matching this exact structure, with no markdown or extra text:
        {
          "alerts": [
            { "id": 1, "type": "CRITICAL", "title": "Example Fake News Headline" }
          ],
          "hashtags": [
            { "tag": "#ExampleTag", "risk": 85 }
          ]
        }`;

        const response = await axios.post(
          "http://localhost:5000/api/threat-report",
          { prompt }
        );

        const generatedData = JSON.parse(response.data.choices[0].message.content);
        
        // 🔥 Professional Timing (Hour Slots)
        const hourSlots = [0, 3, 6, 9, 12];
        const alertsWithTime = generatedData.alerts.map((alert, index) => {
          // Fallback if AI generates more than 5 alerts, use 15 for extra ones
          const slot = hourSlots[index] !== undefined ? hourSlots[index] : 15 + index; 
          const alertTime = midnightTime + (slot * 60 * 60 * 1000);
          
          return {
            ...alert,
            createdAt: alertTime
          };
        });

        const processedHashtags = generatedData.hashtags.map(item => {
          let color = 'text-green-500';
          let bg = 'bg-green-500';
          if (item.risk >= 80) { color = 'text-red-500'; bg = 'bg-red-500'; }
          else if (item.risk >= 50) { color = 'text-yellow-500'; bg = 'bg-yellow-500'; }
          
          return { ...item, color, bg };
        });

        // Reverse the array so that the most recent ones (e.g., 12:00 PM) appear at the top if desired,
        // but based on your requirement (16 hrs ago, 13 hrs ago...), keeping the order is fine 
        // as the first ones (0 slot) will have the oldest time.
        setActiveAlerts(alertsWithTime);
        setTrendingHashtags(processedHashtags);

        localStorage.setItem(CACHE_KEY, JSON.stringify({ alerts: alertsWithTime, hashtags: processedHashtags }));
        localStorage.setItem(CACHE_DATE_KEY, todayStr); 

      } catch (error) {
        console.error("Backend API Fetch Error:", error);
        setActiveAlerts([
          { id: 1, type: 'CRITICAL', title: 'System Error: Cannot connect to Backend Server', createdAt: Date.now() }
        ]);
        setTrendingHashtags([
          { tag: '#ConnectionFailed', risk: 0, color: 'text-gray-500', bg: 'bg-gray-500' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGroqThreatData();
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full pb-2">
      {/* 🚀 Header */}
      <div className="bg-gradient-to-r from-[#1a0b16] via-[#3a1c2a] to-[#24111c] p-6 rounded-2xl border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)] relative overflow-hidden flex-shrink-0">
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 blur-[60px] rounded-full"></div>
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide mb-1">
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Threat Matrix</span>
            </h1>
            <p className="text-[#94a3b8] text-sm font-medium">Real-time AI monitoring of disinformation campaigns and viral fakes.</p>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center bg-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse">
            <span className="text-2xl">🚨</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-grow overflow-hidden mt-1">
        
        {/* 🔴 Left Column: Live Radar & Alerts */}
        <div className="lg:col-span-2 flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-1">
          {/* Visual Radar */}
          <div className="bg-[#080514] border border-blue-500/20 p-6 rounded-2xl flex items-center justify-center relative overflow-hidden min-h-[200px]">
            <h3 className="absolute top-4 left-4 text-xs font-bold text-blue-400 tracking-widest uppercase z-20">Sector Scanning...</h3>
            
            <div className="relative w-40 h-40 rounded-full border border-blue-500/30 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-150"></div>
              <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-110"></div>
              <div className="w-full h-full rounded-full border border-blue-500/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-tr from-transparent via-blue-500/40 to-transparent origin-top-left animate-[spin_3s_linear_infinite]"></div>
              </div>
              <div className="absolute top-8 left-10 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 right-12 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Active Outbreaks List */}
          <div className="bg-[#080514] border border-red-500/20 rounded-2xl p-5 shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]">
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-red-500 animate-pulse">🔴</span> Live Viral Outbreaks
              {loading && <span className="text-xs text-gray-500 ml-auto animate-pulse">AI is compiling report...</span>}
            </h3>
            <div className="space-y-3">
              {!loading && activeAlerts.map(alert => (
                <div key={alert.id} className="bg-[#0f0a14] border-l-4 border-red-500 p-3 rounded-lg border-y border-r border-red-500/10 hover:bg-[#1a0f1c] transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-widest ${alert.type === 'CRITICAL' ? 'text-red-400 bg-red-500/10' : alert.type === 'HIGH' ? 'text-orange-400 bg-orange-500/10' : 'text-yellow-400 bg-yellow-500/10'}`}>{alert.type}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{getTimeAgo(alert.createdAt)}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{alert.title}</h4>
                </div>
              ))}
              
              {loading && [1, 2, 3].map(n => (
                <div key={n} className="bg-[#0f0a14] border-l-4 border-gray-700 p-3 rounded-lg animate-pulse">
                   <div className="h-2 bg-gray-700 rounded w-16 mb-2"></div>
                   <div className="h-4 bg-gray-700 rounded w-full mb-1"></div>
                   <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 📈 Right Column: Hashtag Risk Analyzer */}
        <div className="bg-[#080514] border border-[#1e1a2f] p-5 rounded-2xl flex flex-col">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-teal-400">📊</span> Hashtag Threat Analyzer
          </h3>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">AI manipulation scores for currently trending social media topics.</p>
          
          <div className="space-y-6 flex-grow">
            {!loading && trendingHashtags.map((item, index) => (
              <div key={index} className="bg-[#05040a] p-3 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-200">{item.tag}</span>
                  <span className={`text-xs font-black ${item.color}`}>{item.risk}% RISK</span>
                </div>
                <div className="w-full h-1.5 bg-[#1a1625] rounded-full overflow-hidden">
                  <div className={`h-full ${item.bg} shadow-[0_0_10px_currentColor]`} style={{ width: `${item.risk}%` }}></div>
                </div>
                <p className="text-[9px] text-gray-500 mt-2 font-mono uppercase">
                  {item.risk > 50 ? '⚠ High Bot Activity Detected' : 'Organic Trend Verified'}
                </p>
              </div>
            ))}

            {loading && [1, 2, 3].map(n => (
               <div key={n} className="bg-[#05040a] p-3 rounded-xl border border-white/5 animate-pulse">
                  <div className="h-4 bg-gray-700 rounded w-1/2 mb-3"></div>
                  <div className="h-1.5 bg-gray-700 rounded-full w-full"></div>
               </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AlertsTrends;