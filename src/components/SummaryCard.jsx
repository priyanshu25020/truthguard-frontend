import React from 'react';

const SummaryCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#1e1b4b]/40 to-[#05040a] border border-purple-500/20 rounded-[20px] p-6 shadow-[inset_0_0_30px_rgba(168,85,247,0.08)] hover:border-purple-500/40 transition-all duration-300 h-full">
      <h4 className="text-[14px] font-bold text-white flex items-center gap-2 mb-4">
        <span className="text-purple-400 text-xl drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">✨</span> 
        AI Summary (TL;DR)
      </h4>
      <p className="text-[13px] text-[#cbd5e1] leading-relaxed font-medium">
        This article claims a new habitable planet by 2025, but there is no scientific evidence from credible sources supporting this.
      </p>
    </div>
  );
};

export default SummaryCard;