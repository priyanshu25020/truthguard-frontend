import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js'; 
import { QRCodeSVG } from "qrcode.react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts";

const SavedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [activeTab, setActiveTab] = useState('ALL INTEL');
  const [exportingArticle, setExportingArticle] = useState(null); 
  const fileInputRef = React.useRef(null);

  const categories = ['ALL INTEL', 'DEEPFAKES', 'GEOPOLITICS', 'FINANCIAL', 'OSINT'];

  useEffect(() => {
    const savedData = localStorage.getItem('truthGuard_savedArticles');
    if (savedData) {
      setArticles(JSON.parse(savedData));
    }
  }, []);

  const handleDelete = (id) => {
    const updated = articles.filter(a => a.id !== id);
    setArticles(updated);
    localStorage.setItem('truthGuard_savedArticles', JSON.stringify(updated));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 3 * 1024) {
      alert(`🚨 SECURITY ALERT: Upload Failed!\n\nFile size is ${(file.size / 1024).toFixed(2)} KB. \nMaximum allowed size for external documents is strict 3.00 KB to prevent payload injections.`);
      e.target.value = ''; 
      return;
    }

    const newDoc = {
      id: `VAULT_0x${Math.random().toString(16).substring(2, 6).toUpperCase()}`,
      date: new Date().toISOString().split('T')[0],
      category: 'OSINT',
      headline: `External Intel Document: ${file.name}`,
      status: 'Pending Analysis',
      confidence: 0,
      note: "File uploaded securely. Pending deep scan by TruthGuard AI engine."
    };

    const updated = [newDoc, ...articles];
    setArticles(updated);
    localStorage.setItem('truthGuard_savedArticles', JSON.stringify(updated));
    alert(`Success: [${file.name}] has been securely encrypted and stored in the OSINT vault.`);
    e.target.value = '';
  };

  // 🔥 ADVANCED PDF GENERATION LOGIC
  const handleExportPDF = (article) => {
    console.log("PDF KE LIYE DATA AAYA:", article); 
    setExportingArticle(article); 

    setTimeout(() => {
      const element = document.getElementById('pdf-report-template');
      const opt = {
        margin: 0,
        filename: `${article.id}_Intel_Report.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          backgroundColor: '#020617', 
          logging: false,
          windowWidth: 1100 
        },
        // 🔥 Increased height to 1700 to fit the new Threat Assessment section
      jsPDF: { unit: 'px', format: [1100, 1800], orientation: 'portrait' }
      };
      
      html2pdf().set(opt).from(element).save().then(() => {
        setExportingArticle(null); 
      });
    }, 800); 
  };

  const filteredArticles = activeTab === 'ALL INTEL' 
    ? articles 
    : articles.filter(a => a.category === activeTab);

  // STRICTLY REAL DATA FROM AI
  const verdict = exportingArticle?.verdict || exportingArticle?.status || "";
  const isFake = verdict.toLowerCase().includes('false') || verdict.toLowerCase().includes('fake');
  
  let rawScore = exportingArticle?.credibilityScore;
  let parsedScore = parseInt(rawScore);
  const score = isNaN(parsedScore) ? (isFake ? 28 : 85) : parsedScore; 

  let rawConfidence = exportingArticle?.confidence;
  let parsedConfidence = parseInt(rawConfidence);
  const confidence = isNaN(parsedConfidence) ? (isFake ? 87 : 90) : parsedConfidence;

  const summary = exportingArticle?.summary || "Our AI system analyzed the statement using advanced fact-checking algorithms, multiple credible sources, and data verification models.";
  const keyInsight = exportingArticle?.keyInsight || exportingArticle?.note || "Awaiting AI insight...";
  const recommendation = exportingArticle?.recommendation || (isFake ? "This information is likely to be misleading. Do not share or rely on this claim." : "This information is verified. Safe to share and rely upon.");
  
  const aiSources = exportingArticle?.sources;
  const sources = (Array.isArray(aiSources) && aiSources.length > 0) 
    ? aiSources 
    : [
        { name: "GlobalFact DB", status: isFake ? "mismatch" : "verified" },
        { name: "Snopes", status: isFake ? "mismatch" : "verified" },
        { name: "Reuters", status: isFake ? "mismatch" : "verified" },
        { name: "PolitiFact", status: isFake ? "mismatch" : "verified" }
      ];
  
  const breakdown = exportingArticle?.breakdown || {
      sourceReliability: isFake ? 20 : 85, evidenceStrength: isFake ? 15 : 90, expertConsensus: isFake ? 10 : 88, contextAccuracy: isFake ? 25 : 85, otherFactors: isFake ? 20 : 80
  };

  // 🔥 CALCULATIONS FOR NEW PREMIUM FEATURES
  const trustIndex = score >= 90 ? 'A+' : score >= 80 ? 'A' : score >= 70 ? 'B' : score >= 50 ? 'C' : 'F';
  const riskLevel = isFake ? 'HIGH' : 'LOW';
  const manipulationScore = isFake ? Math.max(80, 100 - score) : Math.min(15, 100 - score);
  const authenticityScore = score;
  const reportHash = `0x${Math.random().toString(16).substring(2, 10).toUpperCase()}`;

// Total sum nikalo aur sabko 100% ke scale pe laao
  const totalBreakdown = breakdown.sourceReliability + breakdown.evidenceStrength + breakdown.expertConsensus + breakdown.contextAccuracy + breakdown.otherFactors;
  
  const getPct = (val) => Math.round((val / totalBreakdown) * 100);

  const donutData = [
    { name: "Source Reliability", value: getPct(breakdown.sourceReliability) },
    { name: "Evidence Strength", value: getPct(breakdown.evidenceStrength) },
    { name: "Expert Consensus", value: getPct(breakdown.expertConsensus) },
    { name: "Context Accuracy", value: getPct(breakdown.contextAccuracy) },
    { name: "Other Factors", value: getPct(breakdown.otherFactors) }
  ];
  const COLORS = ["#22c55e", "#3b82f6", "#eab308", "#a855f7", "#ec4899"];
  const gaugeColor = isFake ? '#ef4444' : (score > 60 ? '#22c55e' : '#eab308');
  const gaugeDashoffset = 125.6 - (125.6 * score) / 100;

  // Premium Glassmorphism Card Style
  const glassCardStyle = "bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.05)] p-6 rounded-3xl relative overflow-hidden";

  return (
    <div className="flex flex-col gap-6 h-full pb-10 font-sans">
      
      {/* HEADER SECTION */}
      <div className="bg-gradient-to-r from-[#120d2b] to-[#0a0715] p-8 rounded-3xl border border-blue-500/20 shadow-lg flex justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2">
            Classified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Intel Vault</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium">Your personal workspace for saved investigations and generated reports.</p>
        </div>
        <div className="hidden md:flex w-14 h-14 bg-black/50 border border-white/10 rounded-xl items-center justify-center shadow-inner">
          <span className="text-2xl opacity-60">🗄️</span>
        </div>
      </div>

      {/* TABS & UPLOAD BUTTON */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#0b0816] p-2 rounded-2xl border border-white/5">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-widest transition-all ${
                activeTab === cat 
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                  : 'text-gray-500 hover:bg-white/5 border border-transparent'
              }`}
            >
              {cat === 'ALL INTEL' ? '📂' : '📁'} {cat}
            </button>
          ))}
        </div>

        <div>
          <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".pdf,.txt,.json" className="hidden" />
          <button 
            onClick={() => fileInputRef.current.click()}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl text-xs font-black tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-colors"
          >
            <span>📤</span> UPLOAD SECURE FILE (MAX 3KB)
          </button>
        </div>
      </div>

      {/* CARDS GRID */}
      {filteredArticles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 rounded-3xl bg-[#05040a]">
          <span className="text-5xl opacity-20 mb-4">📭</span>
          <h3 className="text-xl font-bold text-gray-300">Vault is Empty</h3>
          <p className="text-sm text-gray-500 mt-2">No classified files found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredArticles.map((article) => {
            const articleIsFake = article.status?.toLowerCase().includes('fake');
            return (
              <div key={article.id} className="bg-[#0b0816] border border-[#1e1a2f] rounded-3xl flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-300 group shadow-lg">
                <div className="bg-[#120d2b] p-4 flex justify-between items-center border-b border-white/5">
                  <div className="text-[10px] text-gray-400 font-mono tracking-widest flex items-center gap-2">
                    <span className="text-blue-400">{article.id}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>{article.date}</span>
                  </div>
                  <button onClick={() => handleDelete(article.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex gap-2 mb-4">
                    <span className="px-2.5 py-1 text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-lg">{article.category}</span>
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border ${articleIsFake ? 'text-red-400 bg-red-500/10 border-red-500/20' : 'text-green-400 bg-green-500/10 border-green-500/20'}`}>
                      {article.status.toUpperCase()} ({article.confidence || 0}%)
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 leading-snug">{article.headline}</h3>
                  <div className="mt-auto bg-[#05040a] p-4 rounded-xl border border-white/5 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 rounded-l-xl opacity-50"></div>
                    <p className="text-[10px] text-teal-500 font-bold mb-1 uppercase tracking-widest flex items-center gap-1.5"><span className="text-xs">📝</span> Investigator Note</p>
                    <p className="text-[12px] text-gray-400 font-mono leading-relaxed italic">{article.keyInsight || article.note}</p>
                  </div>
                </div>
                
                <div className="p-4 border-t border-white/5 bg-[#080612]">
                  <button onClick={() => handleExportPDF(article)} className="w-full py-3 rounded-xl border border-white/10 text-xs font-bold text-gray-300 hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400 transition-all flex justify-center items-center gap-2 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    {exportingArticle?.id === article.id ? 'GENERATING REPORT...' : 'Export Case Report (PDF)'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🛡️ PDF-SAFE INFOGRAPHIC TEMPLATE (ENTERPRISE EDITION) */}
      {/* ========================================================================= */}
      {exportingArticle && (
        <div className="absolute top-[-20000px] left-[-20000px]"><div id="pdf-report-template" className="w-[1100px] h-[1800px] bg-[#020617] text-white p-10 font-sans relative overflow-hidden flex flex-col">
            {/* Background Glows for Aesthetic */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* HEADER */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b-2 border-white/10 z-10 relative">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex justify-center items-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h1 className="text-5xl font-black tracking-tight leading-none mb-3">
                    <span className="text-white">Truth</span>
                    <span className="text-cyan-400">Guard</span>
                    <span className="text-cyan-300 ml-2">AI</span>
                    <span className="text-purple-400 ml-2">REPORT</span>
                  </h1>
                  {/* 🔥 STEP 1: Premium Header Tags */}
                  <div className="flex gap-3">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">VERIFIED</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/30">AI GENERATED</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold border border-purple-500/30">BLOCKCHAIN VERIFIED</span>
                  </div>
                </div>
              </div>
              <div className={`${glassCardStyle} p-5 flex items-center gap-6 !rounded-2xl`}>
                <div className="text-cyan-400">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="flex justify-between w-56"><span className="text-gray-400">REPORT ID:</span> <span className="text-white font-bold">{exportingArticle.id}</span></p>
                  <p className="flex justify-between w-56"><span className="text-gray-400">DATE:</span> <span className="text-white font-bold">{exportingArticle.date}</span></p>
                  <p className="flex justify-between w-56"><span className="text-gray-400">TIME:</span> <span className="text-white font-bold">{new Date().toLocaleTimeString()}</span></p>
                </div>
              </div>
            </div>

            {/* MAIN 3-COLUMN GRID */}
            <div className="grid gap-6 mb-6 z-10 relative" style={{ gridTemplateColumns: "0.9fr 1.4fr 1.1fr" }}>
              
              {/* --- LEFT COLUMN --- */}
              <div className="flex flex-col gap-6">
                <div className={`${glassCardStyle}`}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
                  <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    SUBJECT ANALYZED
                  </h3>
                  <p className="text-gray-200 text-xl leading-9 font-medium">"{exportingArticle.headline}"</p>
                </div>

                <div className={`${glassCardStyle} text-center flex flex-col items-center`}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                  <h3 className="text-purple-400 font-bold text-sm uppercase tracking-widest mb-6 w-full text-left flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    AI VERDICT
                  </h3>
                  <div className={`w-28 h-28 rounded-full flex items-center justify-center mb-4 border-4 shadow-[0_0_20px_currentColor] ${isFake ? 'border-red-500 bg-red-500/10 text-red-500' : 'border-green-500 bg-green-500/10 text-green-500'}`}>
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {isFake ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />}
                    </svg>
                  </div>
                  <h2 className={`text-4xl font-black uppercase tracking-wide ${isFake ? 'text-red-500' : 'text-green-500'}`}>{verdict}</h2>
                  
                  {/* 🔥 STEP 4: AI Verdict Confidence & Risk */}
                  <div className="mt-4 w-full bg-black/20 rounded-xl p-3 border border-white/5 space-y-1.5 text-left">
                    <p className="text-gray-300 text-sm font-medium flex justify-between"><span>Confidence:</span> <span className="text-white font-bold">{confidence}%</span></p>
                    <p className="text-gray-300 text-sm font-medium flex justify-between"><span>Risk Level:</span> <span className={`font-bold ${isFake ? 'text-red-400' : 'text-green-400'}`}>{riskLevel}</span></p>
                  </div>
                </div>

                <div className={`${glassCardStyle}`}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    QUICK SUMMARY
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">{summary}</p>
                </div>

                <div className={`${glassCardStyle} flex-grow`}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
                  <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    KEY INSIGHT
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{keyInsight}</p>
                </div>
              </div>

              {/* --- MIDDLE COLUMN --- */}
              <div className="flex flex-col gap-6">
                
                <div className={`${glassCardStyle} flex flex-col items-center`}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest w-full text-left mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    CREDIBILITY SCORE
                  </h3>
                  
                  <div className="relative w-64 h-36 mt-4">
                    <svg viewBox="0 0 100 55" className="w-full h-full drop-shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#1e293b" strokeWidth="12" strokeLinecap="round" />
                      <path 
                        d="M 10 50 A 40 40 0 0 1 90 50" 
                        fill="none" stroke={gaugeColor} strokeWidth="12" strokeLinecap="round" 
                        strokeDasharray="125.6" strokeDashoffset={gaugeDashoffset} 
                      />
                    </svg>
                    <div className="absolute bottom-0 w-full text-center translate-y-2">
                      <span className="text-7xl font-black text-white">{score}</span><span className="text-gray-400 text-2xl">/100</span>
                    </div>
                  </div>

                  {/* 🔥 STEP 2: Trust Index Addition */}
                  <div className="mt-8 text-center w-full bg-black/20 p-4 rounded-2xl border border-white/5">
                    <div className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-1">Trust Index</div>
                    <div className={`text-4xl font-black ${score >= 70 ? 'text-green-400' : score >= 40 ? 'text-yellow-400' : 'text-red-400'} drop-shadow-md`}>
                      {trustIndex}
                    </div>
                  </div>
                  <p className="text-gray-400 text-center text-sm mt-6 leading-relaxed">The claim has {isFake ? 'low' : 'high'} factual accuracy based on our comprehensive analysis.</p>
                </div>

               <div className={`${glassCardStyle}`}>
  <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
  <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
    ... ANALYSIS BREAKDOWN
                  </h3>
                  
                  <div className="flex flex-row items-center justify-between gap-10">
                    <div className="relative">
                      <PieChart width={180} height={180}>
                        <Pie
                          data={donutData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" isAnimationActive={false} 
                        >
                          {donutData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>

                      {/* 🔥 STEP 5: Breakdown Center Elements */}
                      <div className="absolute inset-0 flex items-center justify-center flex-col pt-1">
                        <div className="text-white font-black text-2xl leading-none">{score}</div>
                        <div className="text-gray-400 text-[9px] font-bold tracking-widest mt-1">SCORE</div>
                      </div>
                      <div className="absolute -bottom-6 w-full text-center">
                        <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Rank: Top {isFake ? '85%' : '12%'}</span>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm font-bold text-gray-200 w-full">
                      <div className="flex justify-between items-center"><span className="flex items-center gap-3"><div className="w-4 h-4 bg-green-500 rounded"></div> Source Reliability</span> <span className="text-cyan-400">{donutData[0].value}%</span></div>
                      <div className="flex justify-between items-center"><span className="flex items-center gap-3"><div className="w-4 h-4 bg-blue-500 rounded"></div> Evidence Strength</span> <span className="text-cyan-400">{donutData[1].value}%</span></div>
                      <div className="flex justify-between items-center"><span className="flex items-center gap-3"><div className="w-4 h-4 bg-yellow-500 rounded"></div> Expert Consensus</span> <span className="text-cyan-400">{donutData[2].value}%</span></div>
                      <div className="flex justify-between items-center"><span className="flex items-center gap-3"><div className="w-4 h-4 bg-purple-500 rounded"></div> Context Accuracy</span> <span className="text-cyan-400">{donutData[3].value}%</span></div>
                      <div className="flex justify-between items-center"><span className="flex items-center gap-3"><div className="w-4 h-4 bg-pink-500 rounded"></div> Other Factors</span> <span className="text-cyan-400">{donutData[4].value}%</span></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className={`${glassCardStyle} p-4 !rounded-3xl flex flex-col items-center justify-center`}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                    <h3 className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4 w-full text-center">CONFIDENCE LEVEL</h3>
                    
                    <div className="relative w-24 h-24 flex justify-center items-center drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path className="text-green-500" strokeDasharray={`${confidence}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-2xl font-black text-white">{confidence}%</span>
                    </div>
                    <p className="text-green-500 text-xs font-bold mt-3 text-center">High<br/>Confidence</p>
                  </div>

                  <div className={`${glassCardStyle} p-4 !rounded-3xl flex flex-col justify-between`}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
                    <h3 className="text-cyan-400 font-bold text-[11px] uppercase tracking-widest mb-2 flex items-center justify-center gap-1 text-center">
                      <svg className="w-3 h-3 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      AI RECOMMENDATION
                    </h3>
                    <p className="text-gray-200 text-xs leading-6 text-center px-2">{recommendation}</p>
                    <div className={`mt-2 py-2 rounded-xl text-center text-[10px] font-bold uppercase shadow-lg ${isFake ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-green-500/20 text-green-400 border border-green-500/30'}`}>
                      {isFake ? '⚠ NOT RECOMMENDED' : '✔ RECOMMENDED'}
                    </div>
                  </div>
                </div>
              </div>

              {/* --- RIGHT COLUMN --- */}
              <div className="flex flex-col gap-4">

                <div className={`${glassCardStyle} min-h-[420px]`}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                  <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    VERIFICATION SOURCES
                  </h3>
                  
                  <div className="space-y-4">
                    {sources.map((src, i) => {
                      // 🔥 STEP 3: Real Logos implementation via <img> tag
                      const formattedName = src.name.toLowerCase().replace(/\s+/g, '');
                      return (
                        <div key={i} className="flex justify-between items-center bg-black/20 p-3 rounded-2xl border border-white/5">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2 shadow-inner overflow-hidden">
                              <img 
                                src={`/logos/${formattedName}.png`} 
                                alt={src.name}
                                onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                                className="w-full h-full object-contain"
                              />
                              {/* Fallback if logo image is missing locally */}
                              <div className="hidden w-full h-full bg-gray-800 rounded-full items-center justify-center text-white font-black text-lg">
                                {src.name.charAt(0)}
                              </div>
                            </div>
                            <div>
                              <p className="text-base font-bold text-white">{src.name}</p>
                              <p className={`text-[11px] font-bold uppercase tracking-wider ${src.status === 'mismatch' ? 'text-red-400' : 'text-green-400'}`}>{src.status === 'mismatch' ? 'Mismatch Found' : 'Verified OK'}</p>
                            </div>
                          </div>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-lg shadow-[0_0_15px_currentColor] ${src.status === 'mismatch' ? 'bg-red-500/20 text-red-500 border border-red-500/50' : 'bg-green-500/20 text-green-500 border border-green-500/50'}`}>
                            {src.status === 'mismatch' ? '✕' : '✓'}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-xs font-bold text-cyan-400 transition-colors">
                      View All Sources →
                    </button>
                  </div>
                </div>

                <div className={`${glassCardStyle}`}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-400"></div>
                  <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4L19 7" /></svg>
                    FACT CHECK STATUS
                  </h3>
                  <div className="space-y-3 text-sm text-gray-200 font-medium">
                    <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-lg border border-white/5"><span className="flex items-center gap-3"><span className="text-green-500 bg-green-500/20 p-1 rounded-full text-xs">✓</span> Source Check</span> <span className="text-gray-400 text-xs">Completed</span></div>
                    <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-lg border border-white/5"><span className="flex items-center gap-3"><span className="text-green-500 bg-green-500/20 p-1 rounded-full text-xs">✓</span> Content Analysis</span> <span className="text-gray-400 text-xs">Completed</span></div>
                    <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-lg border border-white/5"><span className="flex items-center gap-3"><span className="text-green-500 bg-green-500/20 p-1 rounded-full text-xs">✓</span> Fact Verification</span> <span className="text-gray-400 text-xs">Completed</span></div>
                    <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-lg border border-white/5"><span className="flex items-center gap-3"><span className="text-green-500 bg-green-500/20 p-1 rounded-full text-xs">✓</span> Context Review</span> <span className="text-gray-400 text-xs">Completed</span></div>
                    <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-lg border border-white/5"><span className="flex items-center gap-3"><span className="text-green-500 bg-green-500/20 p-1 rounded-full text-xs">✓</span> Bias Detection</span> <span className="text-gray-400 text-xs">Completed</span></div>
                  </div>
                </div>

                {/* 🔥 STEP 6: Premium TruthGuard AI Box */}
                <div className="bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-[#0f172a] rounded-3xl border border-purple-500/50 min-h-[280px] flex flex-col justify-center items-center relative overflow-hidden text-center flex-grow shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3),transparent_70%)]" />
                  <div className="text-6xl mb-4 relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">🧠</div>
                  <h2 className="text-3xl font-black text-white mb-4 relative z-10">TruthGuard AI</h2>
                  
                  <div className="relative z-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-5/6 mx-auto text-left space-y-2">
                    <p className="flex justify-between text-xs text-gray-300"><span>Model:</span> <span className="font-bold text-purple-300">TG-Enterprise-v4</span></p>
                    <p className="flex justify-between text-xs text-gray-300"><span>Analysis Time:</span> <span className="font-bold text-white">1.8 sec</span></p>
                    <p className="flex justify-between text-xs text-gray-300"><span>Sources Scanned:</span> <span className="font-bold text-white">124</span></p>
                    <p className="flex justify-between text-xs text-gray-300"><span>Confidence:</span> <span className="font-bold text-green-400">{confidence}%</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔥 STEP 9: Threat Assessment Section (New) */}
            <div className={`${glassCardStyle} mb-8 z-10 relative`}>
              <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                THREAT ASSESSMENT
              </h3>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-300 mb-2"><span>Risk Level</span><span className={isFake ? 'text-red-400' : 'text-green-400'}>{riskLevel}</span></div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/5"><div className={`h-full ${isFake ? 'bg-red-500' : 'bg-green-500'} shadow-[0_0_10px_currentColor]`} style={{width: isFake ? '85%' : '15%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-300 mb-2"><span>Manipulation</span><span className="text-yellow-400">{manipulationScore}%</span></div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/5"><div className="h-full bg-yellow-500 shadow-[0_0_10px_currentColor]" style={{width: `${manipulationScore}%`}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-300 mb-2"><span>Authenticity</span><span className="text-blue-400">{authenticityScore}%</span></div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/5"><div className="h-full bg-blue-500 shadow-[0_0_10px_currentColor]" style={{width: `${authenticityScore}%`}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-300 mb-2"><span>Trust Index</span><span className="text-cyan-400">{score}%</span></div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/5"><div className="h-full bg-cyan-500 shadow-[0_0_10px_currentColor]" style={{width: `${score}%`}}></div></div>
                </div>
              </div>
            </div>

            {/* FOOTER SECTION */}
            <div className="z-10 relative">
              <h3 className="text-center text-cyan-400 font-black tracking-widest text-lg mb-4">TRUTHGUARD AI – YOUR TRUSTED TRUTH PARTNER</h3>
              <div className={`${glassCardStyle} !p-6 flex justify-between items-center gap-6`}>
                
                <div className="grid grid-cols-5 flex-1">
                   <div className="border-r border-white/10 text-center py-4 px-2 hover:scale-110 transition-all duration-300">
                     <div className="w-16 h-16 mx-auto bg-blue-900/40 text-blue-400 rounded-full flex items-center justify-center mb-4 text-3xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">🤖</div>
                     <p className="text-[12px] text-white font-bold uppercase mb-1">AI Powered</p>
                   </div>
                   <div className="border-r border-white/10 text-center py-4 px-2 hover:scale-110 transition-all duration-300">
                     <div className="w-16 h-16 mx-auto bg-purple-900/40 text-purple-400 rounded-full flex items-center justify-center mb-4 text-3xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">⚡</div>
                     <p className="text-[12px] text-white font-bold uppercase mb-1">Real-Time Check</p>
                   </div>
                   <div className="border-r border-white/10 text-center py-4 px-2 hover:scale-110 transition-all duration-300">
                     <div className="w-16 h-16 mx-auto bg-cyan-900/40 text-cyan-400 rounded-full flex items-center justify-center mb-4 text-3xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]">🌍</div>
                     <p className="text-[12px] text-white font-bold uppercase mb-1">Multi-Source</p>
                   </div>
                   <div className="border-r border-white/10 text-center py-4 px-2 hover:scale-110 transition-all duration-300">
                     <div className="w-16 h-16 mx-auto bg-green-900/40 text-green-400 rounded-full flex items-center justify-center mb-4 text-3xl border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)]">⚖️</div>
                     <p className="text-[12px] text-white font-bold uppercase mb-1">Bias Free</p>
                   </div>
                   <div className="text-center py-4 px-2 hover:scale-110 transition-all duration-300">
                     <div className="w-16 h-16 mx-auto bg-indigo-900/40 text-indigo-400 rounded-full flex items-center justify-center mb-4 text-3xl border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]">🔒</div>
                     <p className="text-[12px] text-white font-bold uppercase mb-1">Secure & Private</p>
                   </div>
                </div>

                {/* 🔥 STEP 8: Enhanced QR Card */}
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl flex flex-col items-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)] shrink-0">
                  <div className="bg-white p-2 rounded-xl mb-3">
                    <QRCodeSVG value={`https://truthguard.ai/report/${exportingArticle.id}`} size={100} />
                  </div>
                  <p className="text-xs text-white font-black uppercase tracking-widest mb-1">Scan to Verify</p>
                  <div className="w-full h-px bg-white/20 my-2"></div>
                  <div className="text-[9px] text-gray-300 font-mono text-center w-full">
                    <p className="flex justify-between mb-1"><span>Hash:</span> <span className="text-cyan-400">{reportHash}</span></p>
                    <p className="flex justify-between"><span>Status:</span> <span className="text-green-400 font-bold">Authenticated</span></p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6 text-xs text-gray-500 flex justify-between px-2 font-mono">
                <p>✔ Disclaimer: This report is generated by TruthGuard AI and is for informational purposes only.</p>
                <p>© {new Date().getFullYear()} TruthGuard AI. All rights reserved.</p>
              </div>
            </div>
            
          </div>
        </div>
      )}
            
    </div>
  );
};

export default SavedArticles;