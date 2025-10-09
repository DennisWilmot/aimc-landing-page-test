import React from 'react';

const SocialProofSection: React.FC = () => {
  return (
    <section id="social-proof" className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-nyu-light-violet-2 mb-4">
          Alumni of Our Programme
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Hear from executives who have transformed their careers with AI knowledge
        </p>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-[9/16] max-w-sm bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 mb-4 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm">Alumni Video 1</p>
                  <p className="text-white/60 text-xs mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
            
            {/* Alumni Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 w-full max-w-sm text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Sarah Chen</h3>
              <p className="text-white/70 text-sm mb-3">Chief Technology Officer</p>
              <p className="text-white/60 text-xs">"The AI Masterclass transformed how I approach technology strategy in our organization."</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-[9/16] max-w-sm bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 mb-4 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm">Alumni Video 2</p>
                  <p className="text-white/60 text-xs mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
            
            {/* Alumni Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 w-full max-w-sm text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Michael Rodriguez</h3>
              <p className="text-white/70 text-sm mb-3">VP of Digital Innovation</p>
              <p className="text-white/60 text-xs">"This program gave me the confidence to lead AI initiatives across our global operations."</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-[9/16] max-w-sm bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 mb-4 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm">Alumni Video 3</p>
                  <p className="text-white/60 text-xs mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
            
            {/* Alumni Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 w-full max-w-sm text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Dr. Emily Watson</h3>
              <p className="text-white/70 text-sm mb-3">Chief Data Officer</p>
              <p className="text-white/60 text-xs">"The practical applications and real-world case studies were invaluable for my role."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-8 py-3 rounded font-medium text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nyu-purple/25">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default SocialProofSection;
