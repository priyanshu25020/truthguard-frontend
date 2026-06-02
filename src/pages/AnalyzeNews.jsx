import React, { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';     
import axios from 'axios';
import Tesseract from 'tesseract.js';
import AnalysisResult from '../components/AnalysisResult';

const AnalyzeNews = () => {
  const location = useLocation(); 
  
  // 🔥 FIX 1: Agar pichhe se 'link' aaye toh use 'url' me convert kar do
  let passedTab = location.state?.activeTab || 'text'; 
  if (passedTab === 'link') passedTab = 'url';

  const [activeTab, setActiveTab] = useState(passedTab); 
  const [inputValue, setInputValue] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(''); 
  const [aiData, setAiData] = useState(null);
  const [extractedOcrText, setExtractedOcrText] = useState(''); 

  // 🔥 FIX 2: useEffect me bhi same mapping karni hai
  useEffect(() => {
    if (location.state?.activeTab) {
      const newTab = location.state.activeTab === 'link' ? 'url' : location.state.activeTab;
      setActiveTab(newTab);
    }
  }, [location.state]);


  const handleImageChange = (e) => {
// ... BAAKI KA PURA CODE WAISA KA WAISA RAHEGA ...
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      setInputValue(''); 
      setExtractedOcrText(''); 
    }
  };

  const handleDeepScan = async () => {
    if (activeTab !== 'image' && !inputValue.trim()) {
      alert("Please enter some text or a URL first!");
      return;
    }
    if (activeTab === 'image' && !selectedImage) {
      alert("Please upload an image first!");
      return;
    }

    setIsLoading(true);
    setAiData(null); 
    setExtractedOcrText(''); 

    try {
      let textToAnalyze = inputValue;

      if (activeTab === 'image') {
        setLoadingStatus('Extracting Text from Image (OCR)...');
        console.log("Starting OCR...");
        
        const result = await Tesseract.recognize(selectedImage, 'eng');
        const rawText = result.data.text;
        
        const cleanedText = rawText.replace(/[^a-zA-Z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
        
        setExtractedOcrText(`[ORIGINAL OCR OUTPUT]\n${rawText}\n\n[CLEANED FOR AI]\n${cleanedText}`); 

        if (!cleanedText || cleanedText.length < 3) {
            alert("Could not read enough clear text from this image. Please try a clearer screenshot.");
            setIsLoading(false);
            setLoadingStatus('');
            return;
        }
        
        textToAnalyze = `[SYSTEM COMMAND AS MASTER FACT CHECKER: 
        You are receiving text extracted via OCR from a meme or news screenshot. The OCR quality is poor. Words might be merged, misspelled, or numbers might be misread as letters (e.g., "1BYEARS" actually means "18 YEARS").
        
        INSTRUCTIONS:
        1. UNDERSTAND THE INTENT: Ignore the spelling mistakes. If you see words like "RCB", "CUP", "LIFTS", the core claim is "RCB won the IPL Cup".
        2. CLEAN HEADLINE: Set the "headline" in your JSON response to a CLEAR, HUMAN-READABLE version of the claim (e.g., "Claim: RCB Wins the IPL Cup"). DO NOT output the broken OCR text like "1BYEARS" or "1 Year" in the headline.
        3. FACT CHECK: Evaluate this clean core claim. Has RCB ever won the cup? 
        4. STATUS & SCORE: Force the status to strictly "Fake" or strictly "Real". Do NOT say "Unverified". Provide a realistic confidence score (e.g., 90-99%).]
        
        Raw OCR Text to Analyze: "${cleanedText}"`;
      }

      setLoadingStatus('Scanning Matrix...');
      const response = await axios.post("http://localhost:5000/api/analyze", {
        content: textToAnalyze,
      });
      
      setAiData(response.data);
      
      // 🔥 1. AI Summary page ke liye latest data save karna
      localStorage.setItem('truthGuard_latestAnalysis', JSON.stringify(response.data));

      // 🔥 2. NAYA LOGIC: 100% REAL HISTORY SAVE KAREIN
      const newHistoryItem = {
        id: 'SCAN_0x' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(4, '0'),
        date: new Date().toISOString().split('T')[0], // Aaj ki date
        headline: response.data.headline || 'Recent Analysis Output',
        type: activeTab === 'text' ? 'TEXT SCAN' : activeTab === 'url' ? 'URL SCAN' : 'IMAGE SCAN',
        status: response.data.status || 'Unknown',
        confidence: response.data.confidence || 0
      };

      // Purani history uthao, naya scan sabse upar jodo, aur wapas save kardo
      const existingHistory = JSON.parse(localStorage.getItem('truthGuard_history')) || [];
      const updatedHistory = [newHistoryItem, ...existingHistory];
      localStorage.setItem('truthGuard_history', JSON.stringify(updatedHistory));

    } catch (error) {
      console.error("Analysis Error:", error);
      alert("Error connecting to AI Server or OCR failed.");
    } finally {
      setIsLoading(false);
      setLoadingStatus('');
    }
  };

  return (
    <div className="flex flex-col gap-6 h-full pb-10">
      
      <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] p-8 rounded-3xl border border-purple-500/20 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Deep Scan</span>
          </h1>
          <p className="text-[#94a3b8] font-medium max-w-2xl">
            Paste full articles, URLs, or upload screenshots. Our AI will run a comprehensive multi-layered credibility check.
          </p>
        </div>
      </div>

      <div className="bg-[#0b0816] border border-[#1e1a2f] p-6 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
        
        <div className="flex flex-wrap gap-4 mb-6 border-b border-[#1e1a2f] pb-4">
          <button onClick={() => setActiveTab('text')} className={`px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'text' ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' : 'text-gray-500 hover:text-gray-300'}`}>📝 Paste Article Text</button>
          <button onClick={() => setActiveTab('url')} className={`px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'url' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-gray-500 hover:text-gray-300'}`}>🔗 Enter News URL</button>
          <button onClick={() => setActiveTab('image')} className={`px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'image' ? 'bg-green-600/20 text-green-400 border border-green-500/30' : 'text-gray-500 hover:text-gray-300'}`}>🖼️ Upload Screenshot</button>
        </div>

       <div className="mb-6">
          {activeTab === 'text' && (
            <div className="relative rounded-2xl overflow-hidden p-[2px] group shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-500">
              <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#a855f7_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="absolute inset-[2px] bg-[#0b0816] rounded-[14px] z-0"></div>
              <textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Paste the full news article here (up to 5000 words)..."
                className="relative z-10 w-full h-48 bg-transparent p-5 text-gray-300 placeholder-gray-600 focus:outline-none resize-none transition-all custom-scrollbar"
              ></textarea>
            </div>
          )}
          
          {activeTab === 'url' && (
            <div className="relative rounded-2xl overflow-hidden p-[2px] group shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-500">
              <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#3b82f6_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="absolute inset-[2px] bg-[#0b0816] rounded-[14px] z-0"></div>
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="https://example.com/suspicious-news-article..."
                className="relative z-10 w-full bg-transparent p-5 text-gray-300 placeholder-gray-600 focus:outline-none"
              />
            </div>
          )}

          {activeTab === 'image' && (
            <div className="relative rounded-2xl overflow-hidden p-[2px] group shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] transition-all duration-500">
              <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#22c55e_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="absolute inset-[2px] bg-[#0b0816] rounded-[14px] z-0"></div>
              <div className="relative z-10 w-full h-48 bg-[#05040a]/50 rounded-[14px] p-5 flex flex-col items-center justify-center text-gray-400 backdrop-blur-sm overflow-hidden">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                />
                {selectedImage ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img src={selectedImage} alt="Preview" className="max-h-full max-w-full object-contain rounded-lg drop-shadow-lg" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                      <p className="text-white font-bold tracking-wide">Click to change image</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                    </div>
                    <p className="font-semibold text-gray-300">Click or drag image here</p>
                    <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, WEBP</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button 
            onClick={handleDeepScan}
            disabled={isLoading}
            className={`px-8 py-3.5 rounded-xl font-bold text-white shadow-lg transition-all flex items-center gap-2 w-full md:w-auto justify-center
              ${isLoading ? 'bg-gray-600 cursor-not-allowed' : (activeTab === 'image' ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:scale-105 hover:shadow-green-500/25' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 hover:shadow-purple-500/25')}`}
          >
            {isLoading ? (
              <><span className="animate-spin text-xl">⚙️</span> {loadingStatus}</>
            ) : (
              <><span className="text-xl">⚡</span> Initiate Deep Scan</>
            )}
          </button>
        </div>
      </div>

      {activeTab === 'image' && extractedOcrText && (
        <div className="bg-[#1a142c] border border-purple-500/30 p-5 rounded-2xl shadow-[inset_0_0_20px_rgba(168,85,247,0.15)]">
          <p className="text-[11px] text-purple-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            What the AI "Saw" in the Image
          </p>
          <p className="text-sm text-gray-300 font-mono whitespace-pre-wrap bg-[#0b0816] p-4 rounded-xl border border-[#1e1a2f]">
            {extractedOcrText}
          </p>
        </div>
      )}

      <AnalysisResult resultData={aiData} />

    </div>
  );
};

export default AnalyzeNews;