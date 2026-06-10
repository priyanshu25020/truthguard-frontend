import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// Baaki imports ke sath isko add karo
import authHero from '../assets/auth-hero.png';
import userManualPDF from '../assets/user-manual.pdf'; // 🔥 Yeh line add karni hai (naam apne hisaab se rakh lena)

// 🔥 Google aur GitHub Login ke liye Firebase imports
import { auth, googleProvider, githubProvider } from '../firebase'; // githubProvider import kiya
import { signInWithPopup } from 'firebase/auth';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
// 🔥 POP-UP LOGIC START
    const [showManualPopup, setShowManualPopup] = useState(true);

    useEffect(() => {
        let timer;
        if (showManualPopup) {
            // 7 seconds ke baad pop-up automatically hide ho jayega
            timer = setTimeout(() => {
                setShowManualPopup(false);
            }, 15000);
        }
        // Cleanup function taaki timer memory leak na kare
        return () => clearTimeout(timer);
    }, [showManualPopup]);

    const handleProceedToManual = () => {
        setShowManualPopup(false);
        // 🔥 NAYA CODE: Naye tab me PDF open karega
        window.open(userManualPDF, '_blank', 'noopener,noreferrer'); 
    };

    const handleSkipManual = () => {
        setShowManualPopup(false);
    };
    // 🔥 POP-UP LOGIC END
    const [realStats, setRealStats] = useState({
        streak: 0,
        quizzesTaken: 0,
        averageScore: 0,
        badgesEarned: 0
    });

    useEffect(() => {
        const savedStats = localStorage.getItem('truthGuard_quizStats');
        if (savedStats) {
            const parsed = JSON.parse(savedStats);
            setRealStats({
                streak: parsed.streak || 0,
                quizzesTaken: parsed.quizzesTaken || 0,
                averageScore: parsed.averageScore || 0,
                badgesEarned: parsed.xp ? Math.floor(parsed.xp / 100) : 0 
            });
        }
    }, []);

    // 1. Normal Email/Password Login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
           const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
                email: email,
                password: password
            });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userName', res.data.user?.name || email.split('@')[0]);
            
            alert("Login Successful! 🎉");
            navigate('/');
        } catch (err) {
            alert("Login Failed: Check your credentials");
            console.error(err);
        }
    };

    // 2. Google Firebase Login
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);

            localStorage.setItem("user", JSON.stringify({
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL
            }));

            localStorage.setItem("token", "firebase-authenticated");
            localStorage.setItem('userName', result.user.displayName);
            
            navigate("/");
        } catch (error) {
            alert("Google Login Failed: " + error.message);
            console.error(error);
        }
    };

    // 🔥 3. NAYA: GitHub Firebase Login
    const handleGithubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            
            // GitHub kabhi kabhi displayName nahi deta, toh screenName (username) use karenge
            const githubName = result.user.displayName || result.user.reloadUserInfo.screenName || 'GitHub User';

            localStorage.setItem("user", JSON.stringify({
                name: githubName,
                email: result.user.email,
                photo: result.user.photoURL
            }));

            localStorage.setItem("token", "firebase-authenticated");
            localStorage.setItem('userName', githubName);

            navigate("/");
        } catch (error) {
            alert("GitHub Login Failed: " + error.message);
            console.error(error);
        }
    };

    // 4. Guest Login Logic
    const handleGuestLogin = () => {
        sessionStorage.setItem('token', 'guest-session');
        sessionStorage.setItem('userName', 'Guest Explorer');
        
        const guestStats = {
            streak: 0,
            xp: 0,
            sectionsCompleted: 0,
            totalSections: 31,
            quizzesTaken: 0,
            totalScore: 0, 
            averageScore: 0,
            bestScore: 0,
            unlockedCount: 1, 
            lastUnlockDate: new Date().toDateString(),
            replaysUsedTotal: 0,      
            replayedSections: [],     
        };
        sessionStorage.setItem('truthGuard_quizStats', JSON.stringify(guestStats));
        
        alert("Entering as Guest. Note: Your progress will be lost when you close this tab.");
        navigate('/');
    };

    const handleComingSoon = (provider) => {
        alert(`${provider} Login integration coming soon! 🚀`);
    };

  return (
        <div
           
    className="min-h-screen text-white font-sans flex flex-col lg:flex-row overflow-x-hidden overflow-y-auto selection:bg-blue-500/30"
    style={{ background: "radial-gradient(circle at top left,#07122f,#030207 60%)" }}
>
            {/* 🔥 POP-UP UI START 🔥 */}
            {showManualPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030207]/80 backdrop-blur-sm p-4 transition-opacity duration-300">
                    <div className="bg-[#0a0715] border border-cyan-500/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.2)] max-w-md w-full text-center relative overflow-hidden">
                        {/* Glowing Background Effects */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/20 blur-[50px] rounded-full"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-600/20 blur-[50px] rounded-full"></div>
                        
                        <div className="w-16 h-16 mx-auto bg-[#05040a] border border-cyan-500/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(6,182,212,0.4)] relative z-10">
                            <span className="text-3xl">📖</span>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-white mb-3 relative z-10">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TruthGuard AI</span></h2>
                        <p className="text-sm text-gray-400 mb-8 relative z-10">
                            For the best experience, we recommend reviewing our quick User Manual to understand the AI Verification Engine.
                        </p>
                        
                        <div className="flex gap-4 justify-center relative z-10">
                            <button 
                                onClick={handleSkipManual}
                                className="px-6 py-2.5 rounded-xl text-xs font-bold text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
                            >
                                SKIP
                            </button>
                            <button 
                                onClick={handleProceedToManual}
                                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                PROCEED TO MANUAL <span className="text-lg leading-none">›</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* 🔥 POP-UP UI END 🔥 */}

            {/* ================= LEFT PANEL (Tumhara bacha hua code yahan se waisa hi rahega) ================= */}
            {/* ================= LEFT PANEL ================= */}
            <div className="lg:w-[52%] p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden hidden md:flex border-r border-blue-900/30">

                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-wide">TruthGuard AI</h1>
                        <p className="text-xs text-gray-400">Fake News Detector</p>
                    </div>
                </div>

                <div className="relative flex-grow flex items-center justify-between">
                    <div className="w-[38%] z-20">
                        <h2 className="text-7xl font-black leading-[1.05] mb-6">
                            DETECT.<br />VERIFY.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                PROTECT.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            AI-Powered Platform to Identify Fake News, Verify Facts and Stay Informed.
                        </p>
                    </div>

                    <div className="w-[250%] relative flex items-center justify-center">
                        <img
                            src={authHero}
                            alt="Robot"
                            className="w-full max-w-[2000px] object-contain drop-shadow-[0_0_120px_rgba(59,130,246,0.8)]"
                        />
                    </div>
                </div>

                <div className="bg-[#0a0715]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5 relative z-10 w-full max-w-[780px]">
          <h4 className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-4">Your Achievement Preview</h4>
                   
                      <div className="grid grid-cols-4 gap-4">
                        {/* Box 1: Streak (Permanent Orange Glow) */}
                        <div className="bg-gradient-to-br from-[#0d122b] to-[#030513] border border-[#1e2548] border-t-orange-500/60 rounded-2xl p-5 text-center shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] transition-all duration-300 group">
                            <div className="w-10 h-10 mx-auto bg-orange-500/10 border border-orange-500/40 rounded-full flex items-center justify-center text-orange-500 mb-2 shadow-[inset_0_0_15px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform">🔥</div>
                            <p className="text-xl font-bold drop-shadow-md text-white">{realStats.streak}</p>
                            <p className="text-[13px] text-gray-400 font-medium mt-0.5">Day Streak</p>
                        </div>

                        {/* Box 2: Quizzes Solved (Permanent Purple Glow) */}
                        <div className="bg-gradient-to-br from-[#0d122b] to-[#030513] border border-[#1e2548] border-t-purple-500/60 rounded-2xl p-5 text-center shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-all duration-300 group">
                            <div className="w-10 h-10 mx-auto bg-purple-500/10 border border-purple-500/40 rounded-full flex items-center justify-center text-purple-400 mb-2 shadow-[inset_0_0_15px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">🏆</div>
                            <p className="text-xl font-bold drop-shadow-md text-white">{realStats.quizzesTaken}</p>
                            <p className="text-[13px] text-gray-400 font-medium mt-0.5">Quizzes Solved</p>
                        </div>

                        {/* Box 3: Accuracy (Permanent Cyan Glow) */}
                        <div className="bg-gradient-to-br from-[#0d122b] to-[#030513] border border-[#1e2548] border-t-cyan-500/60 rounded-2xl p-5 text-center shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 group">
                            <div className="w-10 h-10 mx-auto bg-cyan-500/10 border border-cyan-500/40 rounded-full flex items-center justify-center text-cyan-400 mb-2 shadow-[inset_0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform">🎯</div>
                            <p className="text-xl font-bold drop-shadow-md text-white">{realStats.averageScore}%</p>
                            <p className="text-[13px] text-gray-400 font-medium mt-0.5">Accuracy</p>
                        </div>

                        {/* Box 4: Badges (Permanent Yellow Glow) */}
                        <div className="bg-gradient-to-br from-[#0d122b] to-[#030513] border border-[#1e2548] border-t-yellow-500/60 rounded-2xl p-5 text-center shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(234,179,8,0.35)] transition-all duration-300 group">
                            <div className="w-10 h-10 mx-auto bg-yellow-500/10 border border-yellow-500/40 rounded-full flex items-center justify-center text-yellow-400 mb-2 shadow-[inset_0_0_15px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-transform">⭐</div>
                            <p className="text-xl font-bold drop-shadow-md text-white">{realStats.badgesEarned}</p>
                            <p className="text-[13px] text-gray-400 font-medium mt-0.5">Badges Earned</p>
                        </div>
                    
                    </div>
                </div>

               <div className="grid grid-cols-3 gap-4 mt-6 z-10">
                    {/* Permanent Blue Glow with bigger text */}
                    <div className="bg-[#05040a] border border-blue-500/50 rounded-xl p-3 text-center flex items-center justify-center gap-2 text-[13px] text-gray-300 font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <span className="text-blue-500 text-base">⚙️</span> Powered by AI Engine
                    </div>
                    {/* Permanent Yellow Glow with bigger text */}
                    <div className="bg-[#05040a] border border-yellow-500/50 rounded-xl p-3 text-center flex items-center justify-center gap-2 text-[13px] text-gray-300 font-bold shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                        <span className="text-yellow-500 text-base">🔒</span> AES-256 Encrypted
                    </div>
                    {/* Permanent Cyan Glow with bigger text */}
                    <div className="bg-[#05040a] border border-cyan-500/50 rounded-xl p-3 text-center flex items-center justify-center gap-2 text-[13px] text-gray-300 font-bold shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                        <span className="text-cyan-500 text-base">🛡️</span> Secure Session
                    </div>
                </div>
            </div>

          {/* ================= RIGHT PANEL ================= */}
            <div className="w-full lg:w-[48%] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-12 relative z-10 py-10 lg:py-0">

                <div className="w-full max-w-[650px] bg-[#0a0715]/90 border border-white/10 rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative">

                    {/* 🔥 NAYA: PERMANENT USER MANUAL BUTTON START 🔥 */}
                    <button
                        type="button"
                        onClick={() => window.open(userManualPDF, '_blank', 'noopener,noreferrer')}
                        className="absolute top-2 right-2 group flex items-center justify-center w-10 h-10 bg-[#05040a] border border-cyan-500/30 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all z-20 cursor-pointer"
                    >
                        {/* Book Icon SVG */}
                        <svg className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        
                        {/* Tooltip Hover Effect */}
                        <span className="absolute -top-8 right-0 bg-cyan-900/90 border border-cyan-500/50 text-cyan-100 text-[10px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                            View User Manual
                        </span>
                    </button>
                    {/* 🔥 PERMANENT USER MANUAL BUTTON END 🔥 */}

                    
                    <div className="flex items-center justify-between border border-white/5 bg-[#05040a] rounded-xl p-3 mb-8">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="text-[8px] text-gray-500 uppercase tracking-widest mb-0.5">System Status</p>
                                <p className="text-[9px] font-bold text-gray-300 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> AI ENGINE <span className="text-green-500">ONLINE</span></p>
                            </div>
                            <div className="w-px h-6 bg-white/5"></div>
                            <div>
                                <p className="text-[8px] text-gray-500 uppercase tracking-widest mb-0.5">&nbsp;</p>
                                <p className="text-[9px] font-bold text-gray-300 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> FACT CHECK DB <span className="text-blue-500">CONNECTED</span></p>
                            </div>
                            <div className="w-px h-6 bg-white/5"></div>
                            <div>
                                <p className="text-[8px] text-gray-500 uppercase tracking-widest mb-0.5">&nbsp;</p>
                                <p className="text-[9px] font-bold text-gray-300 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> THREAT LEVEL <span className="text-green-500">LOW</span></p>
                            </div>
                        </div>

                        {/* 🔥 REAL RADAR ANIMATION 🔥 */}
                        <div className="relative w-16 h-16 rounded-full border border-cyan-500/30 bg-[#05040a] shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 m-2 rounded-full border border-cyan-500/20"></div>
                            <div className="absolute inset-0 m-4 rounded-full border border-cyan-500/20"></div>
                            <div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan] z-10"></div>
                            <div className="absolute inset-0 animate-[spin_2.5s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent_70%,rgba(34,211,238,0.1)_80%,rgba(34,211,238,0.8)_100%)]"></div>
                            <div className="absolute inset-0 animate-[spin_2.5s_linear_infinite]">
                                <div className="w-[50%] h-[1.5px] bg-cyan-400/80 absolute top-1/2 right-0 origin-left shadow-[0_0_5px_cyan]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <div className="w-12 h-12 mx-auto bg-blue-600/20 border border-blue-500/40 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-1">TruthGuard <span className="text-purple-400">Command Center</span></h2>
                        <p className="text-xs text-gray-400">Secure Authentication Required</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5 max-w-[420px] mx-auto">
                        <div className="space-y-1.5">
                            <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full bg-[#05040a] border border-white/10 focus:border-blue-500 text-white text-sm rounded-xl py-3 pl-10 pr-4 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest ml-1">Access Key</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className="w-full bg-[#05040a] border border-white/10 focus:border-blue-500 text-white text-sm rounded-xl py-3 pl-10 pr-10 outline-none transition-all tracking-widest"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300"
                                >
                                    {showPassword ? (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="w-4 h-4 rounded border border-white/20 bg-[#05040a] group-hover:border-blue-500 flex items-center justify-center transition-colors">
                                    <svg className="w-3 h-3 text-transparent group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-[11px] text-gray-400 group-hover:text-gray-300">Remember me</span>
                            </label>
                            <a href="#" className="text-[11px] text-blue-400 hover:text-blue-300 transition-colors">Forgot Access Key?</a>
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            ACCESS TRUTHGUARD <span className="text-lg leading-none ml-1">›</span>
                        </button>
                    </form>

                    <div className="flex items-center gap-4 my-6 max-w-[420px] mx-auto">
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <span className="text-[9px] text-gray-500 tracking-widest uppercase">Or Continue With</span>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[420px] mx-auto w-full">
                        {/* 🔥 Google Button (Permanent Blue Glow) */}
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            className="flex items-center justify-center gap-2 bg-[#05040a] border border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.25)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:bg-blue-900/20 py-2.5 rounded-xl transition-all"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.17z"/>
                                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.31v3.15C3.29 20.24 7.38 24 12 24z"/>
                                <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.9 12c0-.79.14-1.56.39-2.28V6.57H1.31A11.934 11.934 0 0 0 0 12c0 2.02.51 3.93 1.31 5.61l4.01-3.37z"/>
                                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.38 0 3.29 3.76 1.31 7.82l4.01 3.37c.94-2.85 3.57-4.94 6.68-4.94z"/>
                            </svg>
                            <span className="text-[11px] font-bold text-gray-200 tracking-wider">Google</span>
                        </button>
                        
                        {/* 🔥 GitHub Button (Permanent Purple Glow) */}
                        <button
                            type="button"
                            onClick={handleGithubLogin} 
                            className="flex items-center justify-center gap-2 bg-[#05040a] border border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:bg-purple-900/20 py-2.5 rounded-xl transition-all"
                        >
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            <span className="text-[11px] font-bold text-gray-200 tracking-wider">GitHub</span>
                        </button>
                        
                        {/* 🔥 Guest Button (Permanent Cyan Glow) */}
                        <button
                            type="button"
                            onClick={handleGuestLogin}
                            className="flex items-center justify-center gap-1.5 bg-[#05040a] border border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:bg-cyan-900/20 py-2.5 rounded-xl transition-all"
                        >
                            <span className="text-[14px]">🕵️</span>
                            <span className="text-[11px] font-bold text-cyan-400 tracking-wider">GUEST</span>
                        </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1.5 mb-2">
                            <span className="text-blue-500">🛡️</span> Protected by AI Fact Verification Engine
                        </p>
                        <div className="flex items-center justify-center gap-3 text-[9px] text-gray-600">
                            <span>AES-256 Encryption</span>
                            <span className="w-px h-2 bg-gray-700"></span>
                            <span>Secure Session</span>
                            <span className="w-px h-2 bg-gray-700"></span>
                            <span>Privacy First</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Auth;