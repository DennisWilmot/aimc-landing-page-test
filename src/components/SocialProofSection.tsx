import React from 'react';

const SocialProofSection: React.FC = () => {
  return (
    <section id="social-proof" className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      {/* Section Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          What Leaders Are Saying
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Hear how executives sharpened AI strategy, governance, and execution.
        </p>
      </div>

      {/* Video Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-[9/16] max-w-sm bg-black/20 backdrop-blur-sm rounded-lg border border-nyu-purple/20 shadow-lg shadow-nyu-purple/10 mb-4 overflow-hidden">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-nyu-purple/15 p-6 w-full max-w-sm text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Sarah Chen • CTO • Tech Corp</h3>
              <p className="text-white/80 text-sm mt-3">"The AI Masterclass transformed how I approach technology strategy in our organization."</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-[9/16] max-w-sm bg-black/20 backdrop-blur-sm rounded-lg border border-nyu-purple/20 shadow-lg shadow-nyu-purple/10 mb-4 overflow-hidden">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-nyu-purple/15 p-6 w-full max-w-sm text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Michael Rodriguez • VP Digital Innovation • Global Corp</h3>
              <p className="text-white/80 text-sm mt-3">"This program gave me the confidence to lead AI initiatives across our global operations."</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-[9/16] max-w-sm bg-black/20 backdrop-blur-sm rounded-lg border border-nyu-purple/20 shadow-lg shadow-nyu-purple/10 mb-4 overflow-hidden">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-nyu-purple/15 p-6 w-full max-w-sm text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Dr. Emily Watson • Chief Data Officer • Enterprise Solutions</h3>
              <p className="text-white/80 text-sm mt-3">"The practical applications and real-world case studies were invaluable for my role."</p>
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
