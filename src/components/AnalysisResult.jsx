import React from 'react';

const AnalysisResult = ({ resultData }) => {

  const isWaiting = !resultData;
  const headline = isWaiting ? "Paste a news article or link above to start the AI analysis..." : resultData.headline;
  const aiConfidence = isWaiting ? 0 : resultData.aiConfidence;
  const status = isWaiting ? "STANDBY" : resultData.status;
  const reasons = isWaiting 
    ? ["Awaiting text or URL input", "System ready for analysis", "AI Engine Online 🟢"] 
    : resultData.reasons;

  const isReal = !isWaiting && status.toLowerCase() === 'real';
  const isFake = !isWaiting && status.toLowerCase() === 'fake';
  
  const themeColor = isWaiting ? '#475569' : (isReal ? '#22c55e' : (isFake ? '#ef4444' : '#f59e0b')); 
  const gradientStart = isWaiting ? '#334155' : (isReal ? '#4ade80' : (isFake ? '#ff4b4b' : '#fbbf24'));
  const gradientEnd = isWaiting ? '#1e293b' : (isReal ? '#16a34a' : (isFake ? '#b91c1c' : '#d97706'));
  const ambientBg = isWaiting ? 'bg-slate-600/5' : (isReal ? 'bg-green-600/10' : (isFake ? 'bg-red-600/10' : 'bg-yellow-600/10'));
  const shadowGlow = isWaiting ? 'rgba(71,85,105,0.1)' : (isReal ? 'rgba(34,197,94,0.4)' : (isFake ? 'rgba(239,68,68,0.4)' : 'rgba(245,158,11,0.4)'));

  const meterFillValue = isWaiting ? 0 : (aiConfidence / 100) * 377;
  const todayDate = new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  return (
    
    <div className={`bg-gradient-to-br from-[#120d2b] via-[#05040a] to-[#05040a] border-[1.5px] border-[#3b82f6]/30 rounded-3xl p-4 md:p-5 relative overflow-hidden shadow-[inset_0_0_50px_rgba(59,130,246,0.1)] mt-2 transition-all duration-700`}>
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${ambientBg} blur-[90px] pointer-events-none rounded-full transition-colors duration-700`}></div>

      {/* Title Section - Margin Bottom (mb) kam kiya gaya hai mb-6 se mb-3 */}
      <div className="flex items-center gap-2 mb-3 relative z-10">
        <div className={`w-4 h-4 ${isWaiting ? 'bg-slate-600' : 'bg-blue-500'} rounded-md flex items-center justify-center transition-colors duration-500`}>
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <span className="text-white font-bold tracking-wide text-[13px]">Live AI Analysis Result</span>
      </div>
      
      {/* Grid gap-8 se gap-4 kar diya hai */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center relative z-10">
        
        {/* LEFT: Article Details */}
        <div className="space-y-2">
          <p className="text-[10px] text-[#94a3b8] uppercase tracking-widest font-bold">News Headline Analyzed</p>
          
          <div className="relative">
            {/* Headline text size thoda reduce kiya hai */}
            <h3 className={`text-lg md:text-[18px] font-bold leading-snug ${isWaiting ? 'text-gray-500' : 'text-white'} transition-colors duration-500`}>
              <span style={{color: themeColor}} className="font-serif text-2xl leading-none align-top transition-colors duration-500">“</span>
              {headline}
              <span style={{color: themeColor}} className="font-serif text-2xl leading-none align-top transition-colors duration-500">”</span>
            </h3>
          </div>
          
          <div className="text-[11px] text-[#64748b] space-y-0.5 pt-1 font-medium">
            <p>Source: <span className="text-gray-300">User Input</span></p>
            <p>Analyzed on: <span className="text-gray-300">{isWaiting ? '--' : todayDate}</span></p>
          </div>
        </div>

        {/* CENTER: DYNAMIC SVG CODE SPEEDOMETER */}
        <div className="flex flex-col items-center justify-center relative">
          
          {/* 🔥 Meter ki width aur height (w-64 h-64) se (w-48 h-48) kar di hai */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            
            {/* Background circle size chhota kiya (w-40 h-40 se w-32 h-32) */}
            <div className="absolute inset-0 m-auto w-32 h-32 bg-[#16060c] rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] z-0"></div>

            <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 transition-all duration-700" style={{ filter: `drop-shadow(0 0 10px ${shadowGlow})` }}>
              <defs>
                <linearGradient id="meterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={gradientStart} />
                  <stop offset="100%" stopColor={gradientEnd} />
                </linearGradient>
                <filter id="glowEffect">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <path d="M 35 165 A 92 92 0 1 1 165 165" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 10" />
              <path d="M 43.4 156.6 A 80 80 0 1 1 156.6 156.6" fill="none" stroke="#1f0a12" strokeWidth="16" strokeLinecap="round" />

              <path 
                d="M 43.4 156.6 A 80 80 0 1 1 156.6 156.6" 
                fill="none" 
                stroke="url(#meterGradient)" 
                strokeWidth="16" 
                strokeLinecap="round" 
                strokeDasharray={`${meterFillValue} 377`} 
                filter="url(#glowEffect)"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            
            {/* Center Text chhota kiya */}
            <div className="absolute flex flex-col items-center justify-center mt-2 z-20">
              <span style={{color: gradientStart}} className="font-extrabold text-[10px] tracking-widest mb-0.5 shadow-black drop-shadow-md transition-colors duration-500">
                {status.toUpperCase()}
              </span>
              <span className={`text-[42px] font-extrabold ${isWaiting ? 'text-gray-600' : 'text-white'} leading-none tracking-tight drop-shadow-lg transition-colors duration-500`}>
                {aiConfidence}<span className="text-xl">%</span>
              </span>
              <span className="text-[9px] text-[#94a3b8] font-bold mt-1 uppercase tracking-widest">AI Confidence</span>
            </div>
          </div>
          
          {/* Status Pill - marginTop kam ki (mt-[-20px] se mt-[-15px]) aur padding kam ki */}
          <div style={{ backgroundColor: isWaiting ? '#0f172a' : '#1b060a', borderColor: `${themeColor}50`, color: themeColor, boxShadow: `0 0 15px ${shadowGlow}` }} className="mt-[-15px] px-4 py-1.5 border text-[11px] rounded-full flex items-center gap-2 font-bold relative z-30 transition-all duration-500">
            <div style={{ backgroundColor: themeColor, boxShadow: `0 0 5px ${themeColor}` }} className="text-white rounded-full w-3.5 h-3.5 flex items-center justify-center text-[8px] font-black transition-colors duration-500">
              {isWaiting ? '⏳' : (isReal ? '✔' : '!')}
            </div> 
            {isWaiting ? 'Ready to analyze...' : `This news is ${aiConfidence > 80 ? 'highly' : 'likely'} ${status}.`}
          </div>
        </div>

        {/* RIGHT: Dynamic Checklist - padding kam ki (p-6 se p-4) */}
        <div className="bg-[#0b0816] p-4 rounded-xl border border-[#1e1a2f] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] h-full flex flex-col justify-center">
          <h4 className="text-[12px] font-bold mb-3 text-white">
             {isWaiting ? "System Status" : "Why did AI flag this?"}
          </h4>
          <ul className="space-y-2 text-[11px] font-medium text-[#cbd5e1]">
            {reasons && reasons.map((reason, index) => (
              <li key={index} className={`flex items-start gap-2 ${isWaiting ? 'opacity-50' : 'opacity-100'} transition-opacity duration-500 leading-tight`}>
                <div style={{ backgroundColor: `${themeColor}30`, borderColor: `${themeColor}50` }} className="rounded-full min-w-[12px] h-3 flex items-center justify-center mt-0.5 border transition-colors duration-500">
                  <span style={{ color: themeColor }} className="text-[8px]">
                    {isWaiting ? '•' : (isReal ? '✔' : '✖')}
                  </span>
                </div>
                {reason}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default AnalysisResult;