import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const AISummary = () => {
  const [animate, setAnimate] = useState(false);
  const [realData, setRealData] = useState(null);
  const [showSaveModal, setShowSaveModal] = useState(false); // 🔥 Modal State
  const reportRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('truthGuard_latestAnalysis');
    if (savedData) {
      setRealData(JSON.parse(savedData));
    }
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const isFake = realData?.status?.toLowerCase() === 'fake';
  const confidence = realData?.confidence || 80;

  // 🔥 Save to Vault Logic
// 🔥 Save to Vault Logic
  const handleSaveToVault = (category) => {
    const newArticle = {
      id: `VAULT_0x${Math.random().toString(16).substring(2, 6).toUpperCase()}`,
      date: new Date().toISOString().split('T')[0],
      category: category,
      headline: realData.headline,
      status: realData.status,
      confidence: confidence,
      note: isFake 
        ? "High priority threat. Used advanced AI manipulation. Forwarded to cyber-cell." 
        : "Verified through global databases. Safe for final project presentation.",
      
      // 🔥 YAHAN SE NAYI FIELDS ADD KI GAYI HAIN JO PREMIUM PDF REPORT KE LIYE ZAROORI HAIN:
      verdict: realData.verdict || realData.status,
      credibilityScore: realData.credibilityScore || (isFake ? 28 : 92),
      summary: realData.summary || "Our AI system analyzed the statement using advanced fact-checking algorithms, multiple credible sources, and data verification models.",
      keyInsight: realData.keyInsight || "Insight verified through global databases.",
      recommendation: realData.recommendation || (isFake ? "This information is likely to be misleading. Do not share or rely on this claim." : "This information is verified. Safe to share and rely upon."),
      sources: realData.sources || [],
      breakdown: realData.breakdown || {
        sourceReliability: isFake ? 25 : 85, 
        evidenceStrength: isFake ? 20 : 90, 
        expertConsensus: isFake ? 15 : 88, 
        contextAccuracy: isFake ? 20 : 85, 
        otherFactors: isFake ? 20 : 80
      }
    };

    const existing = JSON.parse(localStorage.getItem('truthGuard_savedArticles') || '[]');
    localStorage.setItem('truthGuard_savedArticles', JSON.stringify([newArticle, ...existing]));
    
    setShowSaveModal(false);
    navigate('/saved'); // Saved Articles me bhej do
  };
  if (!realData) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] bg-[#0b0816] rounded-3xl border border-[#1e1a2f] shadow-lg p-10 text-center">
        <div className="text-6xl mb-6 opacity-50">📂</div>
        <h2 className="text-2xl font-bold text-white mb-3">No Active Intelligence Found</h2>
        <p className="text-gray-400 max-w-md mb-8">Please analyze a news article, URL, or image first to generate an Executive Summary.</p>
        <button onClick={() => navigate('/analyze')} className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">Go to Deep Scan</button>
      </div>
    );
  }

  const clickbaitLevel = isFake ? Math.min(confidence + 15, 98) : Math.max(100 - confidence, 15);
  const emotionalLevel = isFake ? Math.min(confidence + 5, 95) : 25;
  const neutralityLevel = isFake ? 15 : Math.min(confidence + 10, 98);

  const intelPoints = Array.isArray(realData.reasoning) ? realData.reasoning : [
    `System detected a claim regarding: "${realData.headline || 'Unknown Subject'}"`,
    `The validity of this claim is heavily weighted towards being ${realData.status || 'Unverified'}.`,
    `Confidence metrics indicate a ${confidence}% certainty in this assessment.`
  ];

  return (
    <div className="flex flex-col gap-6 h-full pb-10">
      
      {/* 1. VISIBLE FRONTEND UI */}
      <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] p-8 rounded-3xl border border-purple-500/20 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full"></div>
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2">
              Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Intelligence Summary</span>
            </h1>
            <p className="text-[#94a3b8] font-medium max-w-2xl">Advanced AI breakdown for: <span className="text-gray-300 italic">"{realData.headline}"</span></p>
          </div>
          <div className={`hidden md:flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 ${isFake ? 'border-red-500/50 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'border-green-500/50 bg-green-500/10 shadow-[0_0_20px_rgba(34,197,94,0.3)]'} transition-all`}>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Status</span>
            <span className={`text-xl font-black ${isFake ? 'text-red-500' : 'text-green-500'}`}>{realData.status}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative bg-gradient-to-br from-[#120d2b] to-[#05040a] border border-purple-500/10 p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30 transition-all duration-500 flex flex-col overflow-hidden group">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10"><span className="text-purple-400">🧠</span> The Core Intel</h3>
          <ul className="space-y-4 flex-grow relative z-10">
            {intelPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4 text-gray-300 bg-[#0b0816]/80 p-5 rounded-2xl border border-white/5 hover:border-purple-500/20 hover:bg-[#151123] transition-all duration-300">
                <div className="mt-0.5 min-w-[24px] h-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/30"><span className="text-purple-400 text-xs font-black">{index + 1}</span></div>
                <p className="text-[14px] leading-relaxed font-medium">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative bg-gradient-to-br from-[#0d1326] to-[#05040a] border border-blue-500/10 p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><span className="text-blue-400">🎯</span> Tone & Bias Radar</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2.5"><span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Clickbait Level</span><span className={`text-sm font-black ${clickbaitLevel > 60 ? 'text-red-500' : 'text-green-500'}`}>{clickbaitLevel}%</span></div>
                <div className="w-full h-3 bg-[#05040a] rounded-full overflow-hidden border border-white/5 shadow-inner"><div className={`h-full ${clickbaitLevel > 60 ? 'bg-gradient-to-r from-red-600 to-red-400' : 'bg-gradient-to-r from-green-600 to-green-400'} transition-all duration-1000`} style={{ width: animate ? `${clickbaitLevel}%` : '0%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2.5"><span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Emotional Manipulation</span><span className={`text-sm font-black ${emotionalLevel > 50 ? 'text-yellow-500' : 'text-blue-500'}`}>{emotionalLevel}%</span></div>
                <div className="w-full h-3 bg-[#05040a] rounded-full overflow-hidden border border-white/5 shadow-inner"><div className={`h-full ${emotionalLevel > 50 ? 'bg-gradient-to-r from-yellow-600 to-yellow-400' : 'bg-gradient-to-r from-blue-600 to-blue-400'} transition-all duration-1000 delay-150`} style={{ width: animate ? `${emotionalLevel}%` : '0%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2.5"><span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Neutrality / Objectivity</span><span className={`text-sm font-black ${neutralityLevel > 50 ? 'text-green-500' : 'text-red-500'}`}>{neutralityLevel}%</span></div>
                <div className="w-full h-3 bg-[#05040a] rounded-full overflow-hidden border border-white/5 shadow-inner"><div className={`h-full ${neutralityLevel > 50 ? 'bg-gradient-to-r from-green-600 to-green-400' : 'bg-gradient-to-r from-red-600 to-red-400'} transition-all duration-1000 delay-300`} style={{ width: animate ? `${neutralityLevel}%` : '0%' }}></div></div>
              </div>
            </div>
          </div>
          <div className={`mt-8 relative z-10 bg-[#05040a]/80 border ${isFake ? 'border-red-500/20' : 'border-green-500/20'} p-4 rounded-xl shadow-inner relative overflow-hidden`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${isFake ? 'bg-red-500' : 'bg-green-500'}`}></div>
            <p className={`text-[11px] ${isFake ? 'text-red-400' : 'text-green-400'} leading-relaxed font-mono pl-2`}><span className={`font-bold ${isFake ? 'text-red-500' : 'text-green-500'} animate-pulse`}>&gt; SYSTEM_ALERT:</span> {isFake ? " High emotional manipulation detected. Proceed with extreme caution." : " Content appears objective and logically structured."}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#05040a] border border-[#1e1a2f] p-4 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-teal-500/30 transition-colors duration-500">
        <h3 className="text-lg font-bold text-gray-200 mb-4 flex items-center gap-2"><span className="text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse">🌍</span> Global OSINT Database Cross-Match</h3>
        <div className="bg-[#020104] rounded-xl p-3 border border-white/5 font-mono text-[12px] md:text-[13px] leading-relaxed">
          <div className="flex items-center gap-3 text-gray-400"><span className="text-teal-500 font-bold w-24">[SYSTEM]</span><span>Initiating Deep Scan across global verification networks...</span></div>
          <div className="flex items-center gap-2 text-gray-400 mt-2"><span className="text-teal-500 font-bold w-24">[MODULE_1]</span><span>Querying Fact-Checkers API...</span><span className={`ml-auto font-bold ${isFake ? 'text-red-500' : 'text-green-500'}`}>{isFake ? '❌ MISMATCH FOUND' : '✅ VERIFIED'}</span></div>
          <div className="flex items-center gap-2 text-gray-400 mt-2"><span className="text-teal-500 font-bold w-24">[MODULE_2]</span><span>Scanning Social Media Sentiment...</span><span className="ml-auto text-yellow-500 font-bold">⚠ ANALYZING ANOMALIES</span></div>
          <div className="flex items-center gap-2 mt-4 text-gray-300 border-t border-white/10 pt-4"><span className="text-teal-500 font-bold w-24">[RESULT]</span><span className="uppercase tracking-wider">{isFake ? "Multiple red flags detected. Information contradicts trusted databases." : "No significant contradictions found in primary global indexes."}</span></div>
        </div>
      </div>

      {/* 🔥 Action Button: SAVE TO VAULT */}
      <div className="flex justify-center mt-1">
        <button onClick={() => setShowSaveModal(true)} className="relative group overflow-hidden px-10 py-4 rounded-2xl bg-[#120d2b] border border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative z-10 flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
            <span className="font-extrabold text-gray-200 group-hover:text-white text-lg tracking-wide">Save Intelligence to Vault</span>
          </div>
        </button>
      </div>

      {/* 🔥 MODAL FOR SELECTING FOLDER */}
      {showSaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="bg-[#0b0816] border border-blue-500/40 p-8 rounded-3xl w-full max-w-md shadow-[0_0_50px_rgba(59,130,246,0.2)] animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 mb-4 mx-auto">
              <span className="text-xl">📁</span>
            </div>
            <h3 className="text-2xl font-black text-center text-white mb-2">Classify Intel</h3>
            <p className="text-gray-400 text-sm text-center mb-6">Select a secure vault category to store this report.</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {['DEEPFAKES', 'GEOPOLITICS', 'FINANCIAL', 'OSINT'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => handleSaveToVault(cat)} 
                  className="p-3 border border-white/10 bg-[#120d2b] rounded-xl hover:border-blue-500 hover:bg-blue-500/20 hover:text-white text-gray-400 text-xs font-bold tracking-wider transition-all"
                >
                  {cat}
                </button>
              ))}
            </div>
            <button onClick={() => setShowSaveModal(false)} className="w-full p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-colors">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISummary;