import React from 'react';

const FreeSyllabusPreviewSection: React.FC = () => {
  return (
    <section id="free-syllabus-preview" className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Inside the Free Course
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
          Preview the foundational modules before you enroll.
        </p>
      </div>

      {/* Modules List */}
      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        
        {/* Module 1 */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-lg border border-nyu-purple/15 p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Strategy in the Boardroom
              </h3>
              <p className="text-white/80">
                What leaders must ask
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <svg className="w-5 h-5 text-nyu-purple" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span className="text-white/70 text-sm">Preview 0:45</span>
            </div>
          </div>
        </div>

        {/* Module 2 */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-lg border border-nyu-purple/15 p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Governance & Risk Frameworks
              </h3>
              <p className="text-white/80">
                Practical controls for responsible scale
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <svg className="w-5 h-5 text-nyu-purple" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span className="text-white/70 text-sm">Preview 0:40</span>
            </div>
          </div>
        </div>

        {/* Module 3 */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-lg border border-nyu-purple/15 p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Operating Models
              </h3>
              <p className="text-white/80">
                Build vs. buy and how to decide
              </p>
            </div>
          </div>
        </div>

        {/* Module 4 */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-lg border border-nyu-purple/15 p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Sector Case Vignettes
              </h3>
              <p className="text-white/80">
                Finance, Healthcare, Public Sector
              </p>
            </div>
          </div>
        </div>

        {/* Module 5 */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-lg border border-nyu-purple/15 p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Boardroom Prompts
              </h3>
              <p className="text-white/80">
                Drive alignment in your next meeting
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Primary CTA */}
      <div className="text-center">
        <a 
          href="https://learn.aimasterclass.com/course/free-ai-masterclass"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-nyu-purple hover:bg-nyu-purple/90 text-white px-8 py-4 rounded font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nyu-purple/25"
        >
          Get Free Course Now
        </a>
      </div>
    </section>
  );
};

export default FreeSyllabusPreviewSection;

