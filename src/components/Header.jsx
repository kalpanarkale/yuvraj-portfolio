import React, { useState } from 'react';
import '../App.css'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      {/* Header */}
      <header className="p-20 flex justify-between items-center">
        <h1 className="text-2xl font-bold">YUVRAJ K GUPTA</h1>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            GET IN TOUCH 
            <span className="material-icons">arrow_forward</span>
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="relative p-2"
          >
            <span className="material-icons">more_vert</span>
          </button>
        </div>
      </header>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="fixed right-0 top-20 bg-gray-900 p-4 rounded-l-lg shadow-lg">
          <nav className="flex flex-col gap-2">
            <a href="#home" className="hover:text-yellow-400">HOME</a>
            <a href="#work" className="hover:text-yellow-400">WORK</a>
            <a href="#about" className="hover:text-yellow-400">ABOUT ME</a>
            <a href="#resume" className="flex items-center gap-2 hover:text-yellow-400">
              <span className="material-icons text-sm">download</span>
              SWIPE TO SNAP MY RESUME!
            </a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="head-intro container mx-auto px-6 mt-12">
        <div className="relative">
          {/* Central Title */}
          <h2 className="text-4xl font-bold text-center mb-16">
            BRING <span className="text-yellow-400">💡</span> TO LIFE
          </h2>

          {/* Skills Circle Layout */}
          <div className="relative mx-auto w-[500px] h-[500px]">
            {/* Center Avatar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-medium">Me, Yuvi</div>
                    <div className="text-sm text-orange-400">UX/UI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Skills */}
            <div className="absolute top-10 left-1/4 animate-float">
              <div className="px-6 py-2 rounded-full border-2 border-dashed border-orange-400 bg-gray-800/50">
                <span className="text-orange-400">CREATIVITY</span>
              </div>
            </div>

            <div className="absolute top-1/2 left-0 animate-float delay-200">
              <div className="px-6 py-2 rounded-full border-2 border-dashed border-blue-400 bg-gray-800/50">
                <span className="text-blue-400">STRATEGY</span>
              </div>
            </div>

            <div className="absolute top-1/4 right-0 animate-float delay-300">
              <div className="px-6 py-2 rounded-full border-2 border-dashed border-green-400 bg-gray-800/50">
                <span className="text-green-400">INNOVATION</span>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mt-16">
            <div className="flex justify-center items-center gap-8 text-yellow-400">
              <span>◆ Ideation</span>
              <span>◆ Prototyping</span>
              <span>◆ User Research</span>
              <span>◆ User Experience</span>
              <span>◆ User Interaction</span>
            </div>
          </div>
        </div>
      </main>

      {/* Resume Download Button */}
      <button className="fixed bottom-8 right-8 bg-gray-800 rounded-full p-4 flex flex-col items-center hover:bg-gray-700 transition-colors">
        <span className="material-icons mb-1">file_download</span>
        <span className="text-xs">Snap Resume!</span>
      </button>
    </div>
  );
};

export default Header;