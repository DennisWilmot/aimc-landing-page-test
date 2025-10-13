import React, { useRef } from 'react';

const AIMasterclassTVSection: React.FC = () => {
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);
  const carousel3Ref = useRef<HTMLDivElement>(null);

  const scrollCarousel = (carouselRef: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400; // Adjust based on card width + gap (larger videos)
      const currentScroll = carouselRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="ai-masterclass-tv" className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          🎥 AI Masterclass TV
        </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Watch real conversations with Investors and Execs before you enroll.
          </p>
      </div>

      {/* Three Carousels */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Carousel 1: Investors & Visionaries */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Investors & Visionaries
            </h3>
            <p className="text-lg text-white/80">
              Billion-dollar bets and bold predictions.
            </p>
          </div>
          
          <div className="relative">
            {/* Left Arrow */}
            <button 
              onClick={() => scrollCarousel(carousel1Ref, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => scrollCarousel(carousel1Ref, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
            
            {/* Carousel Container */}
            <div 
              ref={carousel1Ref}
              className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Video Thumbnail 1 */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-nyu-purple/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Hover overlay for preview */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-base font-medium">Preview</p>
                  </div>
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Vinod Khosla on AI Investment</p>
              </div>

              {/* Video Thumbnail 2 */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-nyu-purple/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-base font-medium">Preview</p>
                  </div>
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Naveen Jain's AI Vision</p>
              </div>

              {/* Video Thumbnail 3 */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-nyu-purple/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-base font-medium">Preview</p>
                  </div>
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Vibhav Prasad on Innovation</p>
              </div>

              {/* Video Thumbnail 4 */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-nyu-purple/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-base font-medium">Preview</p>
                  </div>
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">More Investor Insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel 2: Executives on AI Adoption */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Executives on AI Adoption
            </h3>
            <p className="text-lg text-white/80">
              Wins, risks, and trade-offs from the C-suite.
            </p>
          </div>
          
          <div className="relative">
            {/* Left Arrow */}
            <button 
              onClick={() => scrollCarousel(carousel2Ref, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => scrollCarousel(carousel2Ref, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
            
            {/* Carousel Container */}
            <div 
              ref={carousel2Ref}
              className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Video Thumbnails for Executives */}
              {['Jed Dougherty on AI Wins', 'Chen Wang on Risk Management', 'Ayan Bhattacharya on Trade-offs', 'Dan Shiebler on Implementation'].map((title, index) => (
                <div key={index} className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                  <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-nyu-purple/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-base font-medium">Preview</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-base mt-3 font-medium">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel 3: Governance & Ethics */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Governance & Ethics
            </h3>
            <p className="text-lg text-white/80">
              Scaling AI responsibly, from the boardroom to society.
            </p>
          </div>
          
          <div className="relative">
            {/* Left Arrow */}
            <button 
              onClick={() => scrollCarousel(carousel3Ref, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => scrollCarousel(carousel3Ref, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
            
            {/* Carousel Container */}
            <div 
              ref={carousel3Ref}
              className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Video Thumbnails for Governance */}
              {['Peggy Smyth on Boardroom Ethics', 'Ed Watal on Responsible AI', 'Seth Dobrin on Governance', 'Ethics in AI Scaling'].map((title, index) => (
                <div key={index} className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                  <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-nyu-purple/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-base font-medium">Preview</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-base mt-3 font-medium">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 text-center mt-12">
        <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-8 py-4 rounded font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nyu-purple/25">
          Get Free Course Now
        </button>
      </div>
    </section>
  );
};

export default AIMasterclassTVSection;
