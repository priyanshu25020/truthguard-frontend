import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FactCheckHistory = () => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [historyData, setHistoryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 🚀 AB YAHAN KOI DUMMY DATA NAHI HAI. Sirf LocalStorage ka Real Data aayega.
    const savedHistory = JSON.parse(localStorage.getItem('truthGuard_history')) || [];

    // Agar array empty hai, par 'latestAnalysis' me kuch hai (Pichle scan ka backup)
    if (savedHistory.length === 0) {
      const latestData = localStorage.getItem('truthGuard_latestAnalysis');
      if (latestData) {
        const parsedData = JSON.parse(latestData);
        savedHistory.push({
          id: 'SCAN_0x' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(4, '0'),
          date: new Date().toISOString().split('T')[0],
          headline: parsedData.headline || 'Recent Analysis Output',
          type: 'Live Scan',
          status: parsedData.status || 'Unknown',
          confidence: parsedData.confidence || 0
        });
      }
    }

    setHistoryData(savedHistory);
  }, []);

  // Analytics Calculate karna
  const totalScans = historyData.length;
  const fakeCount = historyData.filter(d => d.status.toLowerCase() === 'fake').length;
  const exposureRate = totalScans > 0 ? Math.round((fakeCount / totalScans) * 100) : 0;

  const boxStyle = "bg-[#080514] border border-blue-500/30 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all";

  return (
    <div className="flex flex-col gap-4 h-full pb-2">
      
      {/* 🚀 Header Section */}
      <div className="bg-gradient-to-r from-[#0f0c29] via-[#211b42] to-[#1a1630] p-6 rounded-2xl border border-purple-500/20 shadow-md relative overflow-hidden flex-shrink-0">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 blur-[60px] rounded-full"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide mb-1">
            Threat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligence Archive</span>
          </h1>
          <p className="text-[#94a3b8] text-sm font-medium">Global tracking of analyzed claims, deep fakes, and manipulation attempts.</p>
        </div>
      </div>

      {/* 🎯 Analytics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-shrink-0">
        <div className={`${boxStyle} p-5 flex items-center justify-between group hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]`}>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Threats Scanned</p>
            <p className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">{totalScans}</p>
          </div>
          <div className="w-12 h-12 bg-blue-500/10 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 text-xl shadow-[0_0_10px_rgba(59,130,246,0.2)]">🛡️</div>
        </div>

        <div className={`${boxStyle} p-5 flex items-center justify-between group hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]`}>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Fake News Detected</p>
            <p className="text-3xl font-black text-white group-hover:text-red-400 transition-colors">{fakeCount}</p>
          </div>
          <div className="w-12 h-12 bg-red-500/10 rounded-full border border-red-500/30 flex items-center justify-center text-red-500 text-xl shadow-[0_0_10px_rgba(239,68,68,0.2)]">☣️</div>
        </div>

        <div className={`${boxStyle} p-5 flex items-center justify-between group hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]`}>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Susceptibility Score</p>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-black text-white group-hover:text-purple-400 transition-colors">{exposureRate}%</p>
              <p className="text-xs text-purple-500 font-bold mb-1">EXPOSURE</p>
            </div>
          </div>
          <div className="w-12 h-12 bg-purple-500/10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-500 text-xl shadow-[0_0_10px_rgba(168,85,247,0.2)]">☢️</div>
        </div>
      </div>

      {/* 🎛️ Controls & View Toggle */}
      <div className="flex justify-between items-center mt-2 px-2 flex-shrink-0">
        <h3 className="text-lg font-bold text-gray-200 flex items-center gap-2">
          <span className="text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse">⚡</span> Investigation Logs
        </h3>
        
        <div className="flex bg-[#05040a] border border-blue-500/30 rounded-lg p-1 shadow-inner">
          <button onClick={() => setViewMode('list')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'list' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'text-gray-500 hover:text-gray-300'}`}>SIEM Logs</button>
          <button onClick={() => setViewMode('grid')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'grid' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'text-gray-500 hover:text-gray-300'}`}>Evidence Locker</button>
        </div>
      </div>

      {/* 📁 The Data Display Area */}
      <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 mt-2">
        
        {/* EMPTY STATE: Agar koi data na ho */}
        {historyData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 bg-[#080514] rounded-2xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] mt-2">
            <div className="text-4xl mb-3 opacity-50">📭</div>
            <h2 className="text-lg font-bold text-gray-300">Archive is Empty</h2>
            <p className="text-xs text-gray-500 mt-1 mb-4">No real threat intelligence data found.</p>
            <button 
              onClick={() => navigate('/analyze')}
              className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/50 px-6 py-2 rounded-lg text-sm font-bold transition-all"
            >
              Run a Deep Scan
            </button>
          </div>
        ) : (
          <>
            {/* VIEW 1: SIEM-Style Security Logs */}
            {viewMode === 'list' && (
              <div className="flex flex-col gap-3">
                {historyData.map((item, index) => {
                  const isFake = item.status.toLowerCase() === 'fake';
                  return (
                    <div key={index} className={`flex flex-col md:flex-row md:items-center justify-between bg-[#080514] p-4 rounded-xl border-l-4 ${isFake ? 'border-l-red-500 border-y border-r border-red-500/20 hover:bg-[#0a0618]' : 'border-l-green-500 border-y border-r border-green-500/20 hover:bg-[#080b18]'} shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all group`}>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-500 font-mono mb-1">{item.date}</span>
                          <span className="text-xs text-blue-400 font-mono font-bold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 w-fit">{item.id}</span>
                        </div>
                        
                        <div className="mt-2 md:mt-0">
                          <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-1">{item.headline}</h4>
                          <p className="text-[11px] text-gray-500 uppercase tracking-widest mt-1 flex items-center gap-2">
                            <span>TAG: {item.type}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span>CONFIDENCE: {item.confidence}%</span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-0 flex items-center gap-4 justify-between md:justify-end min-w-[120px]">
                        <div className={`px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider ${isFake ? 'text-red-400 bg-red-500/10 border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'text-green-400 bg-green-500/10 border border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.2)]'}`}>
                          {item.status}
                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>
            )}

            {/* VIEW 2: The Evidence Locker (Grid) */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {historyData.map((item, index) => {
                  const isFake = item.status.toLowerCase() === 'fake';
                  return (
                    <div key={index} className={`relative bg-[#080514] rounded-2xl border ${isFake ? 'border-red-500/30' : 'border-green-500/30'} overflow-hidden shadow-lg hover:shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition-all group flex flex-col`}>
                      
                      <div className="h-28 bg-gradient-to-br from-[#05040a] to-[#120d2b] relative border-b border-white/5 flex items-center justify-center overflow-hidden">
                        <svg className="w-10 h-10 text-blue-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                          <div className={`transform -rotate-12 border-4 px-4 py-1 rounded-lg text-xl font-black tracking-widest backdrop-blur-sm ${isFake ? 'text-red-500 border-red-500 bg-red-500/20' : 'text-green-500 border-green-500 bg-green-500/20'}`}>
                            {isFake ? 'DEBUNKED' : 'VERIFIED'}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[10px] text-blue-400 font-mono bg-blue-500/10 px-1.5 py-0.5 rounded">{item.id}</span>
                          <span className="text-[10px] text-gray-500 font-mono">{item.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-gray-200 mb-3 line-clamp-2">{item.headline}</h4>
                        
                        <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                          <span className="text-[10px] text-gray-400 uppercase">{item.type}</span>
                          <span className={`text-[11px] font-black uppercase ${isFake ? 'text-red-500' : 'text-green-500'}`}>
                            {item.confidence}% Match
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>

    </div>
  );
};

export default FactCheckHistory;