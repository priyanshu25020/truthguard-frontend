import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  
  const [sensitivity, setSensitivity] = useState(50);
  const [notifications, setNotifications] = useState(true);
  
  // 🔥 1. "Real" Local Storage States for Toggles
  const [autoScan, setAutoScan] = useState(() => JSON.parse(localStorage.getItem('truthGuard_autoScan')) || false);
  const [privacyMode, setPrivacyMode] = useState(() => JSON.parse(localStorage.getItem('truthGuard_privacyMode')) || true);
  
  // 🔥 2. State for Upgrade Modal
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Toggle Handlers (Ab ye Real ban gaye hain)
  const handleAutoScanToggle = () => {
    const newVal = !autoScan;
    setAutoScan(newVal);
    localStorage.setItem('truthGuard_autoScan', JSON.stringify(newVal));
    if (newVal) alert("🛡️ Auto-Scan Enabled: Clipboard URLs will now be monitored securely.");
  };

  const handlePrivacyToggle = () => {
    const newVal = !privacyMode;
    setPrivacyMode(newVal);
    localStorage.setItem('truthGuard_privacyMode', JSON.stringify(newVal));
    if (newVal) alert("🕵️ Incognito Mode ON: Your future scans will bypass local history storage.");
    else alert("Incognito Mode OFF: Scan history will be saved locally.");
  };

  // 🔥 3. Email Configuration Logic
  const handleConfigureEmail = () => {
    const currentEmail = localStorage.getItem('truthGuard_reportEmail') || "";
    const email = window.prompt("Enter your email address to receive weekly AI fact-check reports:", currentEmail);
    if (email) {
      localStorage.setItem('truthGuard_reportEmail', email);
      alert(`Success! Weekly security reports configured for: ${email}`);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm("Are you sure you want to delete all your scan history? This action cannot be undone.")) {
      localStorage.removeItem('truthGuard_history');
      localStorage.removeItem('truthGuard_latestAnalysis');
      window.dispatchEvent(new Event('historyUpdated')); 
      alert("History cleared successfully! 🧹");
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('userName');
      navigate('/auth');
    }
  };

  return (
    <div className="space-y-6 h-full pb-10 relative">
      
      {/* HEADER SECTION */}
      <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] p-8 rounded-3xl border border-blue-500/20 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2 flex items-center gap-3">
            <span className="text-blue-400">⚙️</span> System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Settings</span>
          </h1>
          <p className="text-[#94a3b8] font-medium max-w-2xl">
            Configure your AI fact-checking engine, customize alerts, and manage your cyber-security preferences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* AI Engine Configuration */}
          <div className="bg-[#0b0816] border border-[#1e1a2f] p-6 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-purple-400">🧠</span> AI Engine Configuration
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-medium mb-3">
                  <span className="text-gray-400">Detection Sensitivity</span>
                  <span className="text-blue-400">{sensitivity}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="100" 
                  value={sensitivity}
                  onChange={(e) => setSensitivity(e.target.value)}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-gray-600 mt-2 font-bold uppercase tracking-widest">
                  <span>Lenient</span>
                  <span>Balanced</span>
                  <span>Paranoid Mode</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#1e1a2f]">
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Auto-Scan Clipboard Links</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Automatically analyze URLs copied to clipboard.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={autoScan} onChange={handleAutoScanToggle} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-[#0b0816] border border-[#1e1a2f] p-6 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-green-400">🛡️</span> Privacy & Security
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#120d2b] rounded-xl border border-green-500/20">
                <div>
                  <h4 className="text-sm font-bold text-green-400">Incognito Scanning</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">History is saved locally, nothing is sent to external servers.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={privacyMode} onChange={handlePrivacyToggle} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
              <button 
                onClick={handleClearHistory}
                className="w-full py-3 mt-2 rounded-xl text-xs font-bold tracking-widest text-red-400 border border-red-900/50 hover:bg-red-900/20 hover:border-red-500/50 transition-colors"
              >
                CLEAR ALL SEARCH HISTORY
              </button>
              <button 
                onClick={handleLogout}
                className="w-full py-3 mt-2 rounded-xl text-xs font-bold tracking-widest text-orange-400 border border-orange-900/50 hover:bg-orange-900/20 hover:border-orange-500/50 transition-colors"
              >
                LOGOUT FROM SYSTEM
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Notifications & Alerts */}
          <div className="bg-[#0b0816] border border-[#1e1a2f] p-6 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-yellow-400">🔔</span> Alerts & Notifications
            </h3>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Push Notifications</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Get alerts for trending fake news.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#1e1a2f]">
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Weekly Email Report</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Summary of your fact-checking activity.</p>
                </div>
                {/* 🔥 Email Configure Action */}
                <button onClick={handleConfigureEmail} className="text-xs font-bold text-blue-400 hover:text-blue-300 underline">Configure</button>
              </div>
            </div>
          </div>

          {/* Account & Plan */}
          <div className="bg-[#120d2b] border border-purple-500/30 p-6 rounded-3xl shadow-[inset_0_0_40px_rgba(168,85,247,0.1)] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full"></div>
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Current Plan: <span className="text-purple-400">Cyber Scout (Free)</span></h3>
            <p className="text-[12px] text-gray-400 mb-6 relative z-10">Upgrade to unlock Deep-Web scanning and unlimited API calls.</p>
            <div className="space-y-3 mb-6 relative z-10">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-gray-300">Monthly AI Scans</span>
                <span className="text-gray-300">42 / 100</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            {/* 🔥 Show Modal Action */}
            <button 
              onClick={() => setShowUpgradeModal(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] relative z-10 flex justify-center items-center gap-2"
            >
              <span>🚀</span> Upgrade to Pro
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🚀 PRO UPGRADE MODAL (Perfect UI Match) */}
      {/* ========================================================================= */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030207]/90 backdrop-blur-sm p-4">
          <div className="bg-[#0b0816] border border-white/10 rounded-3xl w-full max-w-5xl p-8 relative shadow-[0_0_80px_rgba(168,85,247,0.15)] overflow-y-auto max-h-[95vh] custom-scrollbar">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowUpgradeModal(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-start justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl border border-purple-500/30 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  🚀
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-white tracking-wide">Upgrade Your Plan(Comming soon)</h2>
                  <p className="text-sm text-gray-400 mt-1">Unlock advanced AI power and unlimited access.</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3 bg-purple-900/20 border border-purple-500/30 px-4 py-2 rounded-xl">
                <span className="text-purple-400 text-xl">🛡️</span>
                <div>
                  <p className="text-xs text-white font-bold">7-Day Money Back <span className="text-purple-400">Guarantee</span></p>
                  <p className="text-[10px] text-gray-500">Cancel anytime, risk-free.</p>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              
              {/* Monthly Plan */}
              <div className="bg-[#120d2b] border border-blue-500/30 rounded-3xl p-6 flex flex-col relative mt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg">📅</div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">Monthly Plan</h3>
                    <p className="text-[11px] text-gray-400">Perfect for getting started</p>
                  </div>
                </div>
                <div className="my-6">
                  <span className="text-4xl font-black text-white">₹100</span><span className="text-blue-400 font-bold text-sm"> /month</span>
                </div>
                <ul className="space-y-4 text-sm font-medium text-gray-300 flex-grow mb-6">
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">✓</div> AI Fact Scans</span> <span className="text-gray-400 text-xs">100 / month</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">✓</div> Deep Web Scanning</span> <span className="text-gray-400 text-xs">Basic</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">✓</div> API Access</span> <span className="text-gray-400 text-xs">Limited</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">✓</div> Source Verification</span> <span className="text-gray-400 text-xs">Standard</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">✓</div> Email Reports</span> <span className="text-gray-400 text-xs">Weekly</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">✓</div> Support</span> <span className="text-gray-400 text-xs">Standard</span></li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3.5 rounded-xl transition-all mb-3 text-sm flex justify-center items-center gap-2">
                  Choose Monthly <span className="text-lg leading-none">→</span>
                </button>
                <p className="text-[10px] text-center text-blue-400 font-medium">🛡️ Billed ₹100 every month</p>
              </div>

              {/* 3 Month Plan (Highlighted) */}
              <div className="bg-[#1a113a] border border-purple-500 rounded-3xl p-6 flex flex-col relative shadow-[0_0_30px_rgba(168,85,247,0.2)] scale-105 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <span>★</span> Most Popular
                </div>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg">⚡</div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">3 Month Plan</h3>
                      <p className="text-[11px] text-gray-400">Save more with quarterly</p>
                    </div>
                  </div>
                  <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-green-500/30">Save 14%</span>
                </div>
                <div className="my-6">
                  <span className="text-4xl font-black text-white">₹259</span><span className="text-purple-400 font-bold text-sm"> /3 months</span>
                </div>
                <ul className="space-y-4 text-sm font-medium text-gray-200 flex-grow mb-6">
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-[10px]">✓</div> AI Fact Scans</span> <span className="text-gray-300 text-xs">450 / 3 months</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-[10px]">✓</div> Deep Web Scanning</span> <span className="text-gray-300 text-xs">Advanced</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-[10px]">✓</div> API Access</span> <span className="text-gray-300 text-xs">Standard</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-[10px]">✓</div> Source Verification</span> <span className="text-gray-300 text-xs">Advanced</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-[10px]">✓</div> Email Reports</span> <span className="text-gray-300 text-xs">Weekly</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-[10px]">✓</div> Support</span> <span className="text-purple-300 font-bold text-xs">Priority</span></li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold py-3.5 rounded-xl transition-all mb-3 text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)] flex justify-center items-center gap-2">
                  Choose 3 Month Plan <span className="text-lg leading-none">→</span>
                </button>
                <p className="text-[10px] text-center text-purple-400 font-medium">🛡️ Billed ₹259 every 3 months</p>
              </div>

              {/* 1 Year Plan */}
              <div className="bg-[#0b1716] border border-green-500/30 rounded-3xl p-6 flex flex-col relative mt-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 text-lg">💎</div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">1 Year Plan</h3>
                      <p className="text-[11px] text-gray-400">Best value for power users</p>
                    </div>
                  </div>
                  <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-green-500/30">Save 45%</span>
                </div>
                <div className="absolute -top-4 right-6 bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-lg shadow-lg">
                  Best Value
                </div>
                <div className="my-6">
                  <span className="text-4xl font-black text-white">₹1099</span><span className="text-green-400 font-bold text-sm"> /year</span>
                </div>
                <ul className="space-y-4 text-sm font-medium text-gray-300 flex-grow mb-6">
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div> AI Fact Scans</span> <span className="text-green-400 font-bold text-xs">Unlimited</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div> Deep Web Scanning</span> <span className="text-green-400 font-bold text-xs">Unlimited</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div> API Access</span> <span className="text-green-400 font-bold text-xs">Unlimited</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div> Source Verification</span> <span className="text-gray-400 text-xs">Advanced+</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div> Email Reports</span> <span className="text-gray-400 text-xs">Daily</span></li>
                  <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div> Support</span> <span className="text-gray-400 text-xs">24/7 Priority</span></li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3.5 rounded-xl transition-all mb-3 text-sm flex justify-center items-center gap-2">
                  Choose Yearly Plan <span className="text-lg leading-none">→</span>
                </button>
                <p className="text-[10px] text-center text-green-400 font-medium">🛡️ Billed ₹1099 every year</p>
              </div>
            </div>

            {/* Info Footer Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-white/10 py-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl border border-purple-500/20 shrink-0">∞</div>
                <div>
                  <h4 className="text-[11px] font-bold text-white">Unlimited Potential</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">Remove limits and scan without boundaries.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl border border-blue-500/20 shrink-0">🛡️</div>
                <div>
                  <h4 className="text-[11px] font-bold text-white">Enterprise Security</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">Bank-level encryption keeps your data safe.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl border border-cyan-500/20 shrink-0">⏱️</div>
                <div>
                  <h4 className="text-[11px] font-bold text-white">Save Time</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">Faster scans, smarter results, better decisions.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 text-xl border border-green-500/20 shrink-0">🎖️</div>
                <div>
                  <h4 className="text-[11px] font-bold text-white">Cancel Anytime</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">Change or cancel your plan anytime you want.</p>
                </div>
              </div>
            </div>

            {/* Payments Info */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-[11px] text-gray-400 flex items-center gap-1.5 mb-3">
                <span className="text-gray-500">🔒</span> Secure payments. Cancel anytime. No hidden charges.
              </p>
              <div className="flex gap-4 items-center">
                <span className="text-white font-black italic text-lg opacity-80">VISA</span>
                <div className="flex relative w-8 h-5 opacity-80"><div className="absolute left-0 w-5 h-5 bg-red-500 rounded-full mix-blend-screen"></div><div className="absolute right-0 w-5 h-5 bg-yellow-500 rounded-full mix-blend-screen"></div></div>
                <span className="text-white font-bold italic opacity-80">UPI</span>
                <span className="text-blue-400 font-bold italic opacity-80">RuPay</span>
                <span className="text-cyan-400 font-black italic text-lg opacity-80">Paytm</span>
              </div>
            </div>

          </div>
        </div>
      )}
      
    </div>
  );
};

export default Settings;