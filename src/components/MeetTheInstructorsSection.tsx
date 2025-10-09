import React, { useEffect, useRef } from 'react';

const MeetTheInstructorsSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }, []);

  return (
    <section id="instructors" className="relative w-full overflow-hidden bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2357068c;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23000000;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad)'/%3E%3C/svg%3E"
        >
          {/* AI Masterclass Faculty Background Video */}
          <source src="/HeroBackgroundVideo.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-nyu-purple/30 to-transparent" />
        {/* Top fade overlay for smooth transition from previous section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 30%, transparent 100%)'}} />
        {/* Bottom fade overlay for smooth transition to next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" style={{background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(0,0,0,0.9) 100%)'}} />
      </div>
      {/* Section Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-nyu-light-violet-2 mb-4">
          Learn from World-Class Faculty
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Led by experienced faculty with panels from top AI practitioners
        </p>
      </div>

      {/* Instructor Profiles */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Instructor 1 - Ed Watal */}
          <div className="text-center">
            {/* Circular Image Placeholder */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="w-full h-full rounded-full bg-gray-200/20 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg shadow-nyu-purple/20">
                <div className="w-20 h-20 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Name */}
            <h3 className="text-2xl sm:text-3xl font-bold text-nyu-light-violet-2 mb-2">
              Ed Watal
            </h3>
            
            {/* Title */}
            <p className="text-lg text-white/70 mb-6">
              Founder & Principal, Intellibus
            </p>
            
            {/* Achievements */}
            <ul className="text-left space-y-3 max-w-sm mx-auto">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-nyu-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-sm">Executive advisor to Fortune 500 boards on AI strategy</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-nyu-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-sm">Co-lead of NYU's AI Program</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-nyu-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-sm">Global speaker on AI governance and transformation</span>
              </li>
            </ul>
          </div>

          {/* Instructor 2 - Jepson Taylor */}
          <div className="text-center">
            {/* Circular Image Placeholder */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="w-full h-full rounded-full bg-gray-200/20 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg shadow-nyu-purple/20">
                <div className="w-20 h-20 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Name */}
            <h3 className="text-2xl sm:text-3xl font-bold text-nyu-light-violet-2 mb-2">
              Jepson Taylor
            </h3>
            
            {/* Title */}
            <p className="text-lg text-white/70 mb-6">
              Former Chief AI Strategist, Dataiku
            </p>
            
            {/* Achievements */}
            <ul className="text-left space-y-3 max-w-sm mx-auto">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-nyu-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-sm">AI startup founder and executive coach</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-nyu-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-sm">Podcast host on applied AI for business</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-nyu-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-sm">20+ years building enterprise AI solutions</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetTheInstructorsSection;
