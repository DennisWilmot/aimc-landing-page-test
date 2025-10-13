import React from 'react';

const ValuePropositionSection: React.FC = () => {
  return (
    <section id="value-prop" className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/HeroBackgroundVideo.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-nyu-purple/20 to-transparent" />
        {/* Top fade overlay for smooth transition from previous section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-transparent to-transparent" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, transparent 30%, transparent 100%)'}} />
        {/* Bottom fade overlay for smooth transition to next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95" style={{background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(0,0,0,0.95) 100%)'}} />
      </div>

      {/* Main Header */}
      <div className="relative z-10 text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Get AI Fluent Fast. Executive Foundations
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
          Executive focus, not technical overload. Get practical guidance for board-level decisions on AI strategy and risk. Start free today and expand into the full masterclass when ready.
        </p>
        <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-8 py-4 rounded font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nyu-purple/25">
          Get Free Course Now
        </button>
      </div>

      {/* Value Proposition Blocks */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Block 1: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 shadow-lg shadow-nyu-purple/10 flex items-center justify-center">
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
            <div className="text-center">
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
            <div className="relative w-full aspect-[4/3] bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 shadow-lg shadow-nyu-purple/10 flex items-center justify-center">
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
            <div className="text-center">
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
            <div className="relative w-full aspect-[4/3] bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 shadow-lg shadow-nyu-purple/10 flex items-center justify-center">
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
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Connected with AI-Forward Leaders
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Get updates, occasional invites to live Q&A, and news from our executive community. Access to curated peer cohorts is part of our paid experiences.
              </p>
              <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-6 py-3 rounded font-medium text-base transition-all duration-300 transform hover:scale-105">
                Get Free Course Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuePropositionSection;
