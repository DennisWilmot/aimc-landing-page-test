import React from 'react';

const FinalCallSection: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-nyu-purple uppercase tracking-wide mb-4">
          SOCIAL PROOF #1
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="text-left">
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nyu-light-violet-2 mb-6 leading-tight">
                <span className="block">Final recap - why should</span>
                <span className="block">people take action today</span>
                <span className="block">(create urgency)</span>
              </h2>

              {/* Descriptive Paragraph */}
              <p className="text-white text-lg mb-8 leading-relaxed">
                Don't let another day pass without gaining the AI expertise your career demands. Join 50+ Fortune 500 executives who've already transformed their leadership with our proven frameworks. This is your last chance to secure your spot in the next cohort and stay ahead of the AI revolution.
              </p>

              {/* Value Propositions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-nyu-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-lg">Master AI strategy frameworks used by Fortune 500 leaders</span>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-nyu-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-lg">Join exclusive network of AI-forward executives</span>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-nyu-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-lg">Get immediate access to cutting-edge AI insights</span>
                </div>
              </div>

              {/* Main CTA Button */}
              <div className="mb-6">
                <button className="w-full sm:w-auto bg-nyu-purple hover:bg-nyu-purple/90 text-white px-12 py-4 rounded font-medium text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nyu-purple/25">
                  SECURE YOUR SPOT NOW
                </button>
              </div>

              {/* Reduce FUDs Text */}
              <p className="text-white/60 text-sm uppercase tracking-wide font-medium">
                REDUCE FUDs (FEAR, UNCERTAINTY, DOUBTS)
              </p>
            </div>
          </div>

          {/* Right Column - Image/Video Placeholder */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-lg font-medium mb-2">Image or video that helps</p>
                <p className="text-white/80 text-lg font-medium mb-2">reinforce core value proposition</p>
                <p className="text-white/60 text-sm mt-4">and articulate what it is you do</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCallSection;

