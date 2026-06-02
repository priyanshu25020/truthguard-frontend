import React from 'react';

const AboutUs = () => {
  return (
    <div className="space-y-6 h-full pb-10">
      
      {/* 🚀 Hero Section - The Mission */}
      <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8 md:p-12 rounded-3xl border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-[#0b0816] border border-blue-500/50 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            <span className="text-3xl">🛡️</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Defending the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Truth</span>
          </h1>
          <p className="text-[#cbd5e1] text-sm md:text-base font-medium leading-relaxed">
            In an era of deepfakes, AI-generated propaganda, and viral misinformation, identifying the truth has never been harder. <strong>TruthGuard</strong> was built to be your ultimate cyber-shield, filtering facts from fiction using advanced artificial intelligence.
          </p>
        </div>
      </div>

      {/* 🧠 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-[#0b0816] border border-[#1e1a2f] p-6 rounded-3xl shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] transition-all duration-300 group">
          <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20 group-hover:scale-110 transition-transform">
            <span className="text-xl">🤖</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Advanced AI Engine</h3>
          <p className="text-[12px] text-gray-400 leading-relaxed">
            Powered by cutting-edge Natural Language Processing (NLP) and optical character recognition to analyze text, context, and sentiment in milliseconds.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0b0816] border border-[#1e1a2f] p-6 rounded-3xl shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] hover:border-green-500/30 hover:shadow-[0_0_25px_rgba(34,197,94,0.1)] transition-all duration-300 group">
          <div className="w-12 h-12 bg-green-900/20 rounded-xl flex items-center justify-center mb-4 border border-green-500/20 group-hover:scale-110 transition-transform">
            <span className="text-xl">⚡</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Real-Time Processing</h3>
          <p className="text-[12px] text-gray-400 leading-relaxed">
            News breaks fast, and so do we. Our architecture ensures that you get fact-checking results instantly, keeping you one step ahead of viral rumors.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0b0816] border border-[#1e1a2f] p-6 rounded-3xl shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-all duration-300 group">
          <div className="w-12 h-12 bg-purple-900/20 rounded-xl flex items-center justify-center mb-4 border border-purple-500/20 group-hover:scale-110 transition-transform">
            <span className="text-xl">🔒</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Absolute Privacy</h3>
          <p className="text-[12px] text-gray-400 leading-relaxed">
            Your data is your own. We process claims locally or through secure encrypted tunnels. We don't track your reads, we just verify them.
          </p>
        </div>
      </div>

      {/* 👨‍💻 Meet the System / Developer Info */}
      <div className="bg-[#120d2b] border border-blue-500/20 p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-[inset_0_0_30px_rgba(59,130,246,0.05)]">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            <div className="w-full h-full bg-[#0b0816] rounded-full flex items-center justify-center text-3xl">
              🧑‍💻
            </div>
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left w-full">
          <h2 className="text-2xl font-bold text-white mb-2">The Architecture Behind It</h2>
          <p className="text-[13px] text-gray-400 mb-4 max-w-2xl leading-relaxed">
            This system was engineered to empower everyday users against the rising tide of digital manipulation. Built with React, TailwindCSS, and powered by intelligent APIs, TruthGuard is constantly evolving to detect newer forms of digital deception.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-5">
            <span className="px-3 py-1 bg-blue-900/30 text-blue-400 border border-blue-500/30 rounded-lg text-xs font-bold tracking-wider">v1.0.0 BETA</span>
            <span className="px-3 py-1 bg-purple-900/30 text-purple-400 border border-purple-500/30 rounded-lg text-xs font-bold tracking-wider">OPEN-SOURCE SOON</span>
          </div>

          {/* 🔥 CONTACT US SECTION - COMPACT */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Connect with Developer</span>
            
            <div className="flex items-center gap-3">
              {/* Email */}
              <a href="mailto:priyanshubharadava27@gmail.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white transition-all hover:scale-110 shadow-sm">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.25l-8 4.99-8-4.99V6l8 4.99L20 6v2.25z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919023123365" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all hover:scale-110 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.422-.272.347-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all hover:scale-110 shadow-sm">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-500/10 border border-gray-500/30 flex items-center justify-center text-gray-300 hover:bg-gray-500 hover:text-white transition-all hover:scale-110 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/priyanshu-bharadava" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all hover:scale-110 shadow-sm">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default AboutUs;