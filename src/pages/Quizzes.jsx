import React, { useState, useEffect } from 'react';
import { quizSections } from '../data/quizData';

const Quizzes = () => {
  // 🚀 1. REAL STATS FROM DATABASE (LocalStorage)
 // 🚀 1. REAL STATS FROM DATABASE (LocalStorage)
const [userStats, setUserStats] = useState(() => {
    const savedStats = localStorage.getItem('truthGuard_quizStats');
    
    // 🔥 NAYA LOGIC: Aaj ki date nikalo (e.g., 2nd June = 2)
    const todayDateNum = new Date().getDate(); 
    const expectedUnlocks = Math.min(todayDateNum, quizSections.length);

    if (savedStats) {
      const parsed = JSON.parse(savedStats);
      // Agar purana data hai, tab bhi unlockedCount ko aaj ki date ke hisaab se force-update kardo
      return { ...parsed, unlockedCount: expectedUnlocks };
    }
    
    return {
      streak: 0,
      xp: 0,
    sectionsCompleted: [], // 🔥 FIX 1: Isko number ki jagah array bana diya
      totalSections: quizSections.length,
      quizzesTaken: 0,
      totalScore: 0, 
      averageScore: 0,
      bestScore: 0,
      unlockedCount: expectedUnlocks, // 🔥 Yahan '1' ki jagah expectedUnlocks aayega
      lastUnlockDate: new Date().toDateString(),
      replaysUsedTotal: 0,
      replayedSections: [],
    };
  });
  const [activeSectionId, setActiveSectionId] = useState(1);
  const activeSectionData = quizSections.find(sec => sec.id === activeSectionId);
  const quizQuestions = activeSectionData?.questions || [];

  // 🚀 2. QUIZ LOGIC STATES
  const [quizStarted, setQuizStarted] = useState(false); // 🟢 Start Button ke liye naya state
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // ⏱️ TIMER STATES
  const [timeLeft, setTimeLeft] = useState(17);
  const [timeToMidnight, setTimeToMidnight] = useState('');

  const currentQuestion = quizQuestions.length > 0 ? quizQuestions[currentQIndex] : null;
  const progressPercentage = quizQuestions.length > 0 ? Math.round(((currentQIndex) / quizQuestions.length) * 100) : 0;

  // 🔥 DAILY 2 UNLOCK LOGIC
// ⏱️ MIDNIGHT COUNTDOWN & LIVE DATE-BASED UNLOCK LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Agle din ka 12 AM

      const diff = midnight - now;
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
      const m = Math.floor((diff / 1000 / 60) % 60).toString().padStart(2, '0');
      const s = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');

      setTimeToMidnight(`${h}h ${m}m ${s}s`);

      // 🔥 LIVE CHECK: Kya aaj ki date unlockedCount se match karti hai?
      const currentDayNum = now.getDate();
      
      setUserStats(prev => {
        const expected = Math.min(currentDayNum, quizSections.length);
        // Agar raat 12 bajte hi date badal gayi, toh state update kardo
        if (prev.unlockedCount !== expected) {
          const newStats = { ...prev, unlockedCount: expected };
          localStorage.setItem('truthGuard_quizStats', JSON.stringify(newStats));
          return newStats;
        }
        return prev;
      });

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ⏱️ 17-SECOND QUESTION TIMER LOGIC
  useEffect(() => {
    // Agar quiz start nahi hua hai, ya answer de diya hai, to timer mat chalao
    if (!quizStarted || isAnswered || quizCompleted || quizQuestions.length === 0) return;

    if (timeLeft === 0) {
      setIsAnswered(true);
      setSelectedOption(null); // Time out = Incorrect
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, quizCompleted, quizQuestions.length, quizStarted]);

  // 🟢 HANDLE START BUTTON CLICK
  // 🟢 HANDLE START BUTTON CLICK
const handleStartQuiz = (sectionId) => {
    const isCompleted = Array.isArray(userStats.sectionsCompleted) ? userStats.sectionsCompleted.includes(sectionId) : false;
    // 🔥 Agar replay hai, toh check karo limits
    if (isCompleted) {
      if (userStats.replaysUsedTotal >= 3) {
        alert("🚨 You have reached the maximum limit of 3 replays!");
        return;
      }
      if (userStats.replayedSections?.includes(sectionId)) {
        alert("🚨 You can only replay a specific section once!");
        return;
      }
      // Replay count update kardo taaki refresh karne pe abuse na ho
      const newStats = {
        ...userStats,
        replaysUsedTotal: (userStats.replaysUsedTotal || 0) + 1,
        replayedSections: [...(userStats.replayedSections || []), sectionId]
      };
      setUserStats(newStats);
      localStorage.setItem('truthGuard_quizStats', JSON.stringify(newStats));
    }

    // 👇 YAHAN PAR MISSING THA SAB KUCH 👇
    setActiveSectionId(sectionId);
    setQuizStarted(true);      // 🔥 Yeh line missing thi (Quiz chalu karne ke liye)!
    setCurrentQIndex(0);       // Pehle question par set karega
    setSelectedOption(null);
    setIsAnswered(false);
    setSessionScore(0);
    setQuizCompleted(false);
    setTimeLeft(17);           // Timer 17 se chalu karega
  };

  // 🟢 HANDLE OPTION CLICK
  const handleOptionClick = (optionId) => {
    if (isAnswered || !currentQuestion) return;
    setSelectedOption(optionId);
    setIsAnswered(true);
    if (optionId === currentQuestion.correctAnswer) {
      setSessionScore(prev => prev + 10);
    }
  };

  // ➡️ HANDLE NEXT QUESTION OR FINISH QUIZ
  const handleNextQuestion = () => {
    if (currentQIndex < quizQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(17);
    } else {
      finishQuiz();
    }
  };

  // 🏆 FINISH QUIZ & UPDATE DATABASE (STREAK, XP, SCORES)
  const finishQuiz = () => {
    setQuizCompleted(true);
    setQuizStarted(false); // Agle round ke liye timer rok do

    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0); // Sirf date compare karne ke liye
    const todayStr = todayDate.toDateString();

    let newStreak = userStats.streak;

    // Streak System Logic
    if (userStats.lastPlayedDate) {
      const lastDate = new Date(userStats.lastPlayedDate);
      const diffTime = Math.abs(todayDate - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        newStreak += 1; // Kal khela tha, streak badhegi
      } else if (diffDays > 1) {
        newStreak = 1; // Din skip ho gaya, wapas 1 se chalu
      }
    } else {
      newStreak = 1; // Pehli baar khel raha hai
    }

    const scorePercentage = Math.round((sessionScore / (quizQuestions.length * 10)) * 100) || 0;
    const newTotalScore = (userStats.totalScore || 0) + scorePercentage;
    const newQuizzesTaken = userStats.quizzesTaken + 1;

   // ... purana logic ...
    const newStats = {
      ...userStats,
      streak: newStreak,
      xp: userStats.xp + 50 + sessionScore,
      
      // 🔥 FIX 3: Naye section ID ko array me add karo (agar wo pehle se nahi hai)
      sectionsCompleted: Array.isArray(userStats.sectionsCompleted)
        ? (userStats.sectionsCompleted.includes(activeSectionId) 
            ? userStats.sectionsCompleted 
            : [...userStats.sectionsCompleted, activeSectionId])
        : [activeSectionId],
      quizzesTaken: newQuizzesTaken,
      totalScore: newTotalScore,
      averageScore: Math.round(newTotalScore / newQuizzesTaken),
      bestScore: Math.max(userStats.bestScore, scorePercentage),
      lastPlayedDate: todayStr
    };

    setUserStats(newStats);
    localStorage.setItem('truthGuard_quizStats', JSON.stringify(newStats)); // Database me save
  };

  return (
    <div className="flex flex-col gap-6 text-white font-sans pb-8">

      {/* ================= HEADER SECTION ================= */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center text-2xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">📋</div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide text-white leading-tight">Quizzes</h1>
            <p className="text-gray-400 text-sm">Learn. Play. Stay Informed.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-[#0d091a] border border-white/10 rounded-full py-1.5 px-4 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-lg">🔥</div>
            <div>
              <p className="text-sm font-bold leading-none">{userStats.streak}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Day Streak</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#0d091a] border border-yellow-500/30 rounded-full py-1.5 px-4 shadow-[0_0_10px_rgba(234,179,8,0.1)]">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-lg border border-yellow-500/50">⭐</div>
            <div>
              <p className="text-sm font-bold leading-none">{userStats.xp} XP</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Total Points</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 4 STATS CARDS ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0b0818] border border-white/5 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl">📊</div>
          <div>
            <p className="text-xs text-gray-400 leading-tight mb-1">Sections Completed</p>
           <p className="text-2xl font-bold leading-none">{Array.isArray(userStats.sectionsCompleted) ? userStats.sectionsCompleted.length : 0} <span className="text-gray-500 text-sm">/ {userStats.totalSections}</span></p>
          </div>
        </div>
        <div className="bg-[#0b0818] border border-white/5 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl">📝</div>
          <div>
            <p className="text-xs text-gray-400 leading-tight mb-1">Quizzes Taken</p>
            <p className="text-2xl font-bold leading-none">{userStats.quizzesTaken}</p>
          </div>
        </div>
        <div className="bg-[#0b0818] border border-white/5 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 text-xl">🎯</div>
          <div>
            <p className="text-xs text-gray-400 leading-tight mb-1">Average Score</p>
            <p className="text-2xl font-bold leading-none">{userStats.averageScore}%</p>
          </div>
        </div>
        <div className="bg-[#0b0818] border border-white/5 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xl">🏆</div>
          <div>
            <p className="text-xs text-gray-400 leading-tight mb-1">Best Score</p>
            <p className="text-2xl font-bold leading-none">{userStats.bestScore}%</p>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT PANEL: ROADMAP (SCROLLABLE BOX) */}
        <div className="lg:col-span-4 bg-[#0a0715] border border-white/10 rounded-3xl p-5 flex flex-col h-[650px] shadow-lg">
          <div className="flex justify-between items-center mb-4 flex-shrink-0">
            <div>
              <h2 className="text-lg font-bold text-white leading-tight">Quiz Curriculum</h2>
              <p className="text-xs text-gray-400 mt-1">Complete sections daily to boost streak!</p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 flex-grow overflow-y-auto custom-scrollbar pr-2">
            {quizSections.map((section) => {
              const isActive = section.id === activeSectionId && quizStarted;
             // 🔥 FIX 2: Check karo ki kya is section ka ID array ke andar maujood hai
const isCompleted = Array.isArray(userStats.sectionsCompleted) 
    ? userStats.sectionsCompleted.includes(section.id) 
    : section.id <= userStats.sectionsCompleted;
              const isUnlocked = section.id <= userStats.unlockedCount;

              let cardStyle = isActive ? "bg-[#150b2a] border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]" : isCompleted ? "bg-[#0b0f16] border border-green-500/30 opacity-80" : !isUnlocked ? "bg-[#0b0816] border border-white/5 opacity-50" : "bg-[#0b0816] border border-white/20";
              let iconStyle = isActive ? "bg-purple-600/20 border-purple-500 text-purple-300" : isCompleted ? "bg-green-500/20 border-green-500/50 text-green-400" : "bg-[#151124] border-white/10 text-gray-500";
              let catColor = section.category.includes("Beginner") ? "text-purple-400" : section.category.includes("Intermediate") ? "text-blue-400" : section.category.includes("Advanced") ? "text-green-400" : "text-orange-400";
              // 🔥 Replay status check
              const isReplayed = userStats.replayedSections?.includes(section.id);
              const outOfReplays = userStats.replaysUsedTotal >= 3;
              return (
                <div key={section.id} className={`${cardStyle} rounded-xl px-4 py-3 flex items-center gap-4 shrink-0 transition-all`}>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold shrink-0 ${iconStyle}`}>
                    {isCompleted ? "✔" : section.id}
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-sm font-bold leading-tight ${isUnlocked ? 'text-white' : 'text-gray-400'}`}>{section.title}</h3>
                    <p className={`text-[11px] mt-1 ${catColor}`}>{section.category}</p>
                  </div>

                  {/* 🔥 START BUTTON OR LOCK ICON */}
                  <div className="text-right shrink-0">
                    {!isUnlocked ? (
                      <p className="text-xs text-gray-500 flex items-center justify-end gap-1"><span>🔒</span> Locked</p>
                    ) : (
                      <button 
                        onClick={() => handleStartQuiz(section.id)}
                        disabled={isCompleted && (isReplayed || outOfReplays)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          isActive ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 
                          isCompleted && (isReplayed || outOfReplays) ? 'bg-gray-700 text-gray-400 cursor-not-allowed opacity-50' : 
                          'bg-green-600 hover:bg-green-500 text-white shadow-[0_0_10px_rgba(22,163,74,0.4)]'
                        }`}
                      >
                        {isActive ? 'PLAYING' : isCompleted ? (isReplayed ? 'REPLAYED' : 'REPLAY') : 'START'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Timer for Next Unlock */}
          <div className="mt-4 flex-shrink-0 bg-[#05040a] border border-white/5 rounded-xl p-4 flex justify-between items-center shadow-inner">
            <span className="text-sm font-bold text-gray-300">Next Unlocks In</span>
            <span className="text-sm font-bold text-yellow-500 flex items-center gap-2">
              <span className="text-base">⏱️</span> {timeToMidnight || "Calculating..."}
            </span>
          </div>
        </div>

        {/* RIGHT PANEL: QUIZ INTERFACE & INFO CARDS */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* 1. MCQ BOX */}
          <div className="bg-[#0a0715] border border-white/10 rounded-3xl p-6 shadow-lg flex flex-col relative min-h-[400px]">

            {!quizStarted && !quizCompleted ? (
              // 🚀 PRE-START SCREEN
              <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in duration-500 h-full">
                <div className="w-20 h-20 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center text-4xl border border-blue-500/30 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">🎮</div>
                <h2 className="text-2xl font-bold text-white mb-2">Ready to test your skills?</h2>
                <p className="text-gray-400 text-sm max-w-md mb-8">Select an unlocked section from the curriculum panel on the left and click <strong className="text-green-400">START</strong> to begin the timer.</p>
                <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400 text-xs font-bold flex items-center gap-2">
                  <span>⚠️</span> You will have exactly 17 seconds per question!
                </div>
              </div>
            ) : quizCompleted ? (
              // 🏆 COMPLETION SCREEN
              <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500 h-full">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-4xl border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)] mb-4">🏆</div>
                <h2 className="text-2xl font-bold text-white mb-2">Section Completed!</h2>
                <p className="text-gray-400 text-sm mb-6">You earned {sessionScore} Points and +50 XP!</p>
                <p className="text-xs text-purple-400 font-bold mb-8">Database Updated Successfully. Your streak is safe! 🔥</p>
              </div>
            ) : (
              // 📝 ACTIVE QUIZ SCREEN
              <>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-bold">Section {activeSectionData?.id}</h2>
                    <span className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs px-3 py-1 rounded-full">
                      Question {currentQIndex + 1} of {quizQuestions.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-colors ${timeLeft <= 5 ? 'bg-red-500/20 border-red-500/50 text-red-400 animate-pulse' : timeLeft <= 10 ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400' : 'bg-[#151124] border-white/10 text-gray-300'}`}>
                      <span className="text-base">⏱️</span>
                      <span className="text-sm font-black font-mono">00:{timeLeft.toString().padStart(2, '0')}</span>
                    </div>
                    <div className="text-sm font-bold flex items-center gap-1.5">
                      Score: {sessionScore} <span className="text-yellow-500 text-lg">⭐</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-1.5 bg-[#151124] rounded-full mb-2">
                  <div className="h-full bg-purple-500 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <div className="text-right text-xs text-gray-400 mb-6">{progressPercentage}%</div>

                <h3 className="text-lg font-semibold text-white mb-5 leading-relaxed">
                  {currentQuestion?.question}
                </h3>

                <div className="flex flex-col gap-3">
                  {currentQuestion?.options.map((option) => {
                    let optionStyle = "border-white/10 bg-[#0d091a] hover:border-white/30 cursor-pointer";
                    let letterStyle = "bg-[#1a152e] text-gray-400";
                    let textStyle = "text-gray-300";

                    if (isAnswered) {
                      if (option.id === currentQuestion.correctAnswer) {
                        optionStyle = "border-green-500 bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.1)]";
                        letterStyle = "border border-green-500 bg-green-500/20 text-green-400";
                        textStyle = "text-green-100";
                      } else if (option.id === selectedOption) {
                        optionStyle = "border-red-500 bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.1)]";
                        letterStyle = "border border-red-500 bg-red-500/20 text-red-400";
                        textStyle = "text-red-100";
                      } else {
                        optionStyle = "border-white/5 bg-[#0a0715] opacity-50 cursor-not-allowed";
                      }
                    }

                    return (
                      <div
                        key={option.id}
                        onClick={() => handleOptionClick(option.id)}
                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl border transition-all duration-300 ${optionStyle}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${letterStyle}`}>
                          {option.id}
                        </div>
                        <p className={`text-sm ${textStyle} leading-relaxed`}>{option.text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className={`flex items-stretch gap-4 mt-6 transition-all duration-500 ${isAnswered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none hidden'}`}>
                  <div className={`flex-grow border px-5 py-4 rounded-2xl flex gap-3 items-center ${selectedOption === null ? 'bg-[#1e0909] border-red-500/30' : selectedOption === currentQuestion?.correctAnswer ? 'bg-[#091e13] border-green-500/30' : 'bg-[#1e0909] border-red-500/30'}`}>
                    <div className={`w-6 h-6 rounded-full text-white flex items-center justify-center flex-shrink-0 ${selectedOption === null ? 'bg-red-500' : selectedOption === currentQuestion?.correctAnswer ? 'bg-green-500' : 'bg-red-500'}`}>
                      {selectedOption === currentQuestion?.correctAnswer
                        ? <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        : <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                      }
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold leading-none mb-1.5 ${selectedOption === null ? 'text-red-400' : selectedOption === currentQuestion?.correctAnswer ? 'text-green-400' : 'text-red-400'}`}>
                        {selectedOption === null ? "Time's Up!" : selectedOption === currentQuestion?.correctAnswer ? 'Correct!' : 'Incorrect!'}
                      </h4>
                      <p className={`text-sm leading-relaxed m-0 ${selectedOption === currentQuestion?.correctAnswer ? 'text-green-100/70' : 'text-red-100/70'}`}>
                        {currentQuestion?.explanation}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleNextQuestion}
                    className="bg-purple-600 hover:bg-purple-500 text-white px-8 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0"
                  >
                    {currentQIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Section'} <span className="text-xl leading-none">›</span>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* 2. BOTTOM INFO CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#0a0715] border border-white/10 rounded-2xl p-4 shadow-sm">
              <h4 className="text-xs font-bold text-gray-300 flex items-center gap-2 mb-3"><span className="text-blue-400 text-sm">📘</span> Section Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-400"><span className="text-gray-500">⚙️</span> {quizQuestions.length || 10} Questions</li>
                <li className="flex items-center gap-2 text-xs text-gray-400"><span className="text-gray-500">⚖️</span> Mixed Difficulty</li>
              </ul>
            </div>
            <div className="bg-[#0a0715] border border-white/10 rounded-2xl p-4 shadow-sm">
              <h4 className="text-xs font-bold text-gray-300 flex items-center gap-2 mb-3"><span className="text-green-400 text-sm">🎁</span> Reward</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm font-bold text-green-400"><span className="text-green-500 text-lg leading-none">⬆</span> +50 XP</li>
                <li className="flex items-center gap-2 text-xs text-gray-400"><span className="text-purple-400">✅</span> For Completion</li>
              </ul>
            </div>
            <div className="bg-[#0a0715] border border-white/10 rounded-2xl p-4 shadow-sm">
              <h4 className="text-xs font-bold text-gray-300 flex items-center gap-2 mb-3"><span className="text-orange-500 text-sm">🔥</span> Your Streak</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm font-bold text-white"><span className="text-orange-500 text-lg leading-none">🔥</span> {userStats.streak} Days</li>
                <li className="flex items-center gap-2 text-xs text-gray-400"><span className="text-gray-500">👍</span> Keep it up!</li>
              </ul>
            </div>
            <div className="bg-[#110d21] border border-yellow-500/20 rounded-2xl p-4 shadow-sm">
              <h4 className="text-xs font-bold text-yellow-500 flex items-center gap-2 mb-3"><span className="text-yellow-500 text-sm">📅</span> Daily Unlocks</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm font-bold text-white leading-tight">
                  <span className="text-yellow-500 text-lg mt-[-2px]">🔓</span> 1 sections per day
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Quizzes;