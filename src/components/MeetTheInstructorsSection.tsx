import React from 'react';

const MeetTheInstructorsSection: React.FC = () => {
  return (
    <section id="instructors" className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Learn from World-Class Faculty
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Led by experienced faculty. Panels and live sessions are featured in our paid experiences.
        </p>
      </div>

      {/* Instructor Profiles */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Instructor 1 - Ed Watal */}
          <div className="flex flex-col items-center text-left">
            {/* Instructor Photo */}
            <div className="relative w-48 h-48 mb-6">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-nyu-purple/20 shadow-lg shadow-nyu-purple/20">
                <img 
                  src="/Ed Watal Intellibus Headshot.jpg" 
                  alt="Ed Watal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Name */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Ed Watal
            </h3>
            
            {/* Title */}
            <p className="text-lg text-white/70 mb-6">
              Founder & Principal, Intellibus
            </p>
            
            {/* Achievements */}
            <ul className="text-left space-y-3 max-w-sm">
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
          <div className="flex flex-col items-center text-left">
            {/* Instructor Photo */}
            <div className="relative w-48 h-48 mb-6">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-nyu-purple/20 shadow-lg shadow-nyu-purple/20">
                <img 
                  src="/jepson_taylor_headshot-1-e1705937899982.jpg" 
                  alt="Jepson Taylor" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Name */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Jepson Taylor
            </h3>
            
            {/* Title */}
            <p className="text-lg text-white/70 mb-6">
              Former Chief AI Strategist, Dataiku
            </p>
            
            {/* Achievements */}
            <ul className="text-left space-y-3 max-w-sm">
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
