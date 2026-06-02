import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import StatsCards from '../components/StatsCards';
import AnalysisResult from '../components/AnalysisResult';
import SummaryCard from '../components/SummaryCard';
import CredibilityCard from '../components/CredibilityCard';
import BiasCard from '../components/BiasCard';

const Home = () => {
  // 🧠 Memory ab Home page par aa gayi hai
  const [aiData, setAiData] = useState(null); 

  return (
    <>
      <HeroSection onAnalysisComplete={setAiData} />
      <StatsCards />
      <AnalysisResult resultData={aiData} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* 1. Summary Card me data bheja */}
        <SummaryCard 
          summaryText={aiData ? aiData.summary : ""} 
        />
        
        {/* 2. Credibility Card me data bheja */}
        <CredibilityCard 
          score={aiData ? aiData.credibilityScore : 0} 
        />
        
        {/* 3. Bias Card me data bheja */}
        {/* Bias Card me Smart Fallback lagaya gaya hai */}
        <BiasCard 
          negative={aiData?.sentiment?.negative ?? (aiData ? (aiData.status?.toLowerCase().includes('fake') ? 78 : 12) : 0)} 
          neutral={aiData?.sentiment?.neutral ?? (aiData ? (aiData.status?.toLowerCase().includes('fake') ? 14 : 35) : 0)} 
          positive={aiData?.sentiment?.positive ?? (aiData ? (aiData.status?.toLowerCase().includes('fake') ? 8 : 53) : 0)} 
        />
      </div>
    </>
  );
};

export default Home;