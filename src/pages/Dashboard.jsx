import React, { useState } from 'react';
import BrandingPanel from '../components/BrandingPanel';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import RightPanel from '../components/RightPanel';

// Dhyan dijiye: Yahan humne { children } prop receive kiya hai
const Dashboard = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex h-screen bg-[#09090e] text-white overflow-hidden">
      
      <BrandingPanel />
      <Sidebar isOpen={isNavOpen} />
      
      <div className="flex-1 flex flex-col h-full overflow-y-auto relative">
        <TopNavbar toggleNav={handleToggleNav} />
        
        <div className="p-4 md:p-6 flex flex-col xl:flex-row gap-6">
          
          {/* MAIN DYNAMIC CONTENT AREA (Yahan beech ke pages badlenge) */}
          <div className="flex-1 space-y-6">
            {children} 
          </div>
          
          {/* Right Panel hamesha fix rahega */}
          <div className="xl:w-[350px] flex-shrink-0">
            <RightPanel />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;