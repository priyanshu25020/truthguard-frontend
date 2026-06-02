import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TopNavbar = ({ toggleNav }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('Explorer');

  // 🔥 Page load hote hi local storage se naam nikalenge
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Google login wala data
    const normalUserName = localStorage.getItem('userName'); // Normal login wala data

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserName(parsedUser.name || 'Explorer');
      } catch (e) {
        console.error("Error parsing user data");
      }
    } else if (normalUserName) {
      setUserName(normalUserName);
    }
  }, []);

  // 🔥 Logout Logic: Token delete karo aur Auth page par bhej do
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    navigate('/auth');
  };

  return (
    <header className="h-20 px-6 flex items-center justify-between border-b border-[#1e1a2f] bg-[#09090e]/80 backdrop-blur-md sticky top-0 z-50">
      
      {/* 3 Lines Menu Button */}
      <button 
        onClick={toggleNav} 
        className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-[#1a1528] transition-colors focus:outline-none"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      <div className="flex items-center gap-4 relative">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-xl">🔔</span>
        </div>
        
        {/* ================================================== */}
        {/* 🔥 YAHAN AAGAYA AAPKA PROFILE CONTAINER 🔥 */}
        {/* ================================================== */}
        <div className="relative">
          <div 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 bg-[#110e1b] border border-[#2a2440] hover:border-purple-500/50 rounded-full py-1.5 px-4 cursor-pointer transition-all"
          >
            {/* 🔥 Yahan Avatar SVG me seed (name) dynamic kiya */}
            <img 
               src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} 
               alt="Profile" 
               className="w-8 h-8 rounded-full bg-purple-500" 
            />

            <div className="text-left hidden sm:block">
              {/* 🔥 Yahan hardcoded name hata kar {userName} lagaya */}
              <p className="text-sm font-semibold leading-none text-white hover:text-purple-400 transition-colors">{userName}</p>
              <p className="text-[11px] text-gray-400 mt-1">Cyber Explorer</p>
            </div>
            <span className={`text-gray-400 text-xs ml-2 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
          </div>

          {/* 🔥 Dropdown Menu (Settings & Logout) */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-[#0b0816] border border-[#1e1a2f] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-2 z-50 animate-fade-in">
              <div 
                onClick={() => { navigate('/settings'); setDropdownOpen(false); }}
                className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-gray-300 hover:bg-[#120d2b] hover:text-white cursor-pointer transition-colors"
              >
                <span>⚙️</span> System Settings
              </div>
              
              <div className="h-px bg-white/5 my-1"></div>
              
              <div 
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold text-red-400 hover:bg-red-950/20 hover:text-red-300 cursor-pointer transition-colors"
              >
                <span>🔒</span> Secure Logout
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default TopNavbar;