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
        <SummaryCard />
        <CredibilityCard />
        <BiasCard />
      </div>
    </>
  );
};

export default Home;