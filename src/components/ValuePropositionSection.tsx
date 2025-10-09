import React from 'react';

const ValuePropositionSection: React.FC = () => {
  return (
    <section id="value-prop" className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nyu-light-violet-2 mb-6">
          Get AI-Fluent Fast: The Strategic Masterclass for Busy Executives
        </h2>
        <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
          Stop falling behind in the AI revolution. Our intensive 2-day program cuts through the noise to give you the strategic AI knowledge and practical frameworks you need to lead confidently in an AI-driven world. No technical jargon, no endless theory—just actionable insights from industry leaders who've successfully implemented AI at scale.
        </p>
        <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-8 py-4 rounded font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nyu-purple/25">
          Start Your AI Transformation
        </button>
      </div>

      {/* Value Proposition Blocks */}
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Block 1: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-black/20 backdrop-blur-sm rounded-lg border-2 border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-sm">Strategic AI Framework</p>
                <p className="text-white/60 text-xs mt-1">Coming Soon</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="text-left">
              <p className="text-sm font-semibold text-nyu-purple uppercase tracking-wide mb-3">
                DREAM OUTCOME SUMMARY
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-nyu-light-violet-2 mb-6">
                Master AI Strategy Without the Technical Overwhelm
              </h3>
              <p className="text-lg text-white mb-8 leading-relaxed">
                Learn the proven frameworks used by Fortune 500 executives to identify AI opportunities, assess risks, and build winning AI strategies. Our proprietary methodology cuts through complexity to give you clear, actionable decision-making tools.
              </p>
              <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-6 py-3 rounded font-medium text-base transition-all duration-300 transform hover:scale-105">
                Learn the Framework
              </button>
            </div>
          </div>
        </div>

        {/* Block 2: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-black/20 backdrop-blur-sm rounded-lg border-2 border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-sm">Real-World Case Studies</p>
                <p className="text-white/60 text-xs mt-1">Coming Soon</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="text-left">
              <p className="text-sm font-semibold text-nyu-purple uppercase tracking-wide mb-3">
                DREAM OUTCOME SUMMARY
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-nyu-light-violet-2 mb-6">
                See AI Success Stories from Industry Leaders
              </h3>
              <p className="text-lg text-white mb-8 leading-relaxed">
                Dive deep into real implementations from companies like yours. Learn from both successes and failures, understand the ROI calculations that matter, and discover the hidden pitfalls that derail AI initiatives.
              </p>
              <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-6 py-3 rounded font-medium text-base transition-all duration-300 transform hover:scale-105">
                Explore Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Block 3: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-black/20 backdrop-blur-sm rounded-lg border-2 border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 10.5V22h2v-6h2.5l2.5-7.5h2l2.5 7.5H14v6h2z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-sm">Executive Network</p>
                <p className="text-white/60 text-xs mt-1">Coming Soon</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="text-left">
              <p className="text-sm font-semibold text-nyu-purple uppercase tracking-wide mb-3">
                DREAM OUTCOME SUMMARY
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-nyu-light-violet-2 mb-6">
                Join an Exclusive Network of AI-Forward Leaders
              </h3>
              <p className="text-lg text-white mb-8 leading-relaxed">
                Connect with 50+ Fortune 500 executives who've completed our program. Access ongoing mastermind sessions, exclusive AI trend reports, and a private community where you can share challenges and celebrate wins with peers who understand your journey.
              </p>
              <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-6 py-3 rounded font-medium text-base transition-all duration-300 transform hover:scale-105">
                Join the Network
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuePropositionSection;
