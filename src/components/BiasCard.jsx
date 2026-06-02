import React from 'react';

const BiasCard = () => {
  return (
    <div className="bg-gradient-to-br from-pink-900/20 to-[#05040a] border border-pink-500/20 rounded-[20px] p-6 shadow-[inset_0_0_30px_rgba(236,72,153,0.08)] hover:border-pink-500/40 transition-all duration-300 h-full">
      
      {/* Title */}
      <h4 className="text-[14px] font-bold text-white flex items-center gap-2 mb-5">
        <div className="w-6 h-6 bg-purple-600/20 border border-purple-500/50 rounded-md flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.3)]">
          <svg className="w-3.5 h-3.5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
        </div>
        Sentiment & Bias
      </h4>
      
      <div className="flex items-center justify-between gap-4">
        
        {/* Custom SVG Donut Chart (Exact 2nd Image Match) */}
        <div className="relative w-[72px] h-[72px] flex-shrink-0 drop-shadow-[0_0_12px_rgba(239,68,68,0.2)]">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {/* Negative: 68% (Red) */}
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f43f5e" strokeWidth="18" strokeDasharray="65 35" strokeDashoffset="0" pathLength="100" />
            
            {/* Neutral: 22% (Purple) */}
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#6366f1" strokeWidth="18" strokeDasharray="20 80" strokeDashoffset="-67" pathLength="100" />
            
            {/* Positive: 10% (Green) */}
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="18" strokeDasharray="9 91" strokeDashoffset="-89" pathLength="100" />
          </svg>
          
          {/* Inner dark circle for 3D depth */}
          <div className="absolute inset-0 m-auto w-10 h-10 bg-[#090712] rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.9)]"></div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3 text-[12px] font-bold">
          <div className="flex justify-between items-center group cursor-pointer">
            <span className="flex items-center gap-2 text-[#e2e8f0] group-hover:text-rose-400 transition">
              <span className="w-2.5 h-2.5 bg-[#f43f5e] rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span> 
              Negative
            </span> 
            <span className="text-[#94a3b8] group-hover:text-rose-400 transition">68% <span className="text-[10px]">»</span></span>
          </div>
          
          <div className="flex justify-between items-center group cursor-pointer">
            <span className="flex items-center gap-2 text-[#e2e8f0] group-hover:text-indigo-400 transition">
              <span className="w-2.5 h-2.5 bg-[#6366f1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span> 
              Neutral
            </span> 
            <span className="text-[#94a3b8] group-hover:text-indigo-400 transition">22% <span className="text-[10px]">»</span></span>
          </div>
          
          <div className="flex justify-between items-center group cursor-pointer">
            <span className="flex items-center gap-2 text-[#e2e8f0] group-hover:text-emerald-400 transition">
              <span className="w-2.5 h-2.5 bg-[#10b981] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> 
              Positive
            </span> 
            <span className="text-[#94a3b8] group-hover:text-emerald-400 transition">10% <span className="text-[10px]">»</span></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BiasCard;