import React from 'react';

const CredibilityCard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-[#05040a] border border-blue-500/20 rounded-[20px] p-6 shadow-[inset_0_0_30px_rgba(59,130,246,0.08)] hover:border-blue-500/40 transition-all duration-300 h-full">
      <h4 className="text-[14px] font-bold text-white flex items-center gap-2 mb-5">
        <div className="w-6 h-6 bg-blue-600/20 border border-blue-500/50 rounded-md flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
          <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
        Source Credibility
      </h4>
      
      {/* Star Ratings */}
      <div className="flex gap-1.5 mb-4">
        {/* 1 Filled Star */}
        <svg className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        {/* 4 Empty (Dark) Stars */}
        {[...Array(4)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-gray-700/80" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        ))}
      </div>
      <p className="text-[13px] text-[#94a3b8] font-semibold">Low Credibility</p>
    </div>
  );
};

export default CredibilityCard;