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
              {/* Video Thumbnail 1 - Ed Cardon */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <iframe
                    src="https://player.mux.com/znolWXgUNRlF96rojDW5C02hlyDI2Q6xFTJUqZnfX502U?metadata-video-title=Ed+Cardon+-+AI+Offense+%26+Defence+ST25&video-title=Ed+Cardon+-+AI+Offense+%26+Defence+ST25"
                    style={{width: '100%', height: '100%', border: 'none'}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title="Ed Cardon - AI Offense & Defence ST25"
                  />
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Ed Cardon on AI Offense & Defense</p>
              </div>

              {/* Video Thumbnail 2 - Naveen Jain */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <iframe
                    src="https://player.mux.com/Pj9mtrHK02PCzm8wmxfUAtQzWPIVCQehgoRCQwinsvkk?metadata-video-title=Naveen+Jain+Snippet+1+FT+2024&video-title=Naveen+Jain+Snippet+1+FT+2024"
                    style={{width: '100%', height: '100%', border: 'none'}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title="Naveen Jain Snippet 1 FT 2024"
                  />
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Naveen Jain's AI Vision</p>
              </div>

              {/* Video Thumbnail 3 - Vibhav Prasad */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <iframe
                    src="https://player.mux.com/7D02JeG6vvK7aiHgMU4YwtZ2jvFaF5DQLOrzRGIq2QmA?metadata-video-title=AIMC_+Testimonial_Vibhav_Prasad&video-title=AIMC_+Testimonial_Vibhav_Prasad"
                    style={{width: '100%', height: '100%', border: 'none'}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title="AIMC Testimonial Vibhav Prasad"
                  />
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
              {/* Video Thumbnail 1 - Jed Dougherty */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <iframe
                    src="https://player.mux.com/oZhtkJScZZuK8pz8R9TYm007lhklotNTz029QmLRZkEu4?metadata-video-title=Jed+Dougherty+-+From+Prediction+to+Tasks+A+GenAI+Shift&video-title=Jed+Dougherty+-+From+Prediction+to+Tasks+A+GenAI+Shift"
                    style={{width: '100%', height: '100%', border: 'none'}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title="Jed Dougherty - From Prediction to Tasks A GenAI Shift"
                  />
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Jed Dougherty on AI Wins</p>
              </div>

              {/* Video Thumbnail 2 - Chen Wang */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <iframe
                    src="https://player.mux.com/Y4LXN02Sn2wT4tGPCCl8ndTowxmyOpRlc01Pp3vp9I01Ow?metadata-video-title=Chen+Testimonial+FT+2024&video-title=Chen+Testimonial+FT+2024"
                    style={{width: '100%', height: '100%', border: 'none'}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title="Chen Testimonial FT 2024"
                  />
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Chen Wang on Risk Management</p>
              </div>

              {/* Video Thumbnail 3 - Ayan Bhattacharya */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <iframe
                    src="https://player.mux.com/khAWi00im02zhGyO1muiWwPoNr027PPVkW17Wpm9mtMySI?metadata-video-title=Ayan+Testimonial+FT+2024&video-title=Ayan+Testimonial+FT+2024"
                    style={{width: '100%', height: '100%', border: 'none'}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title="Ayan Testimonial FT 2024"
                  />
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Ayan Bhattacharya on Trade-offs</p>
              </div>

              {/* Video Thumbnail 4 - Dan Shiebler */}
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
                <p className="text-white/80 text-base mt-3 font-medium">Dan Shiebler on Implementation</p>
              </div>
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
              {/* Video Thumbnail 1 - Peggy Smyth */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <iframe
                    src="https://player.mux.com/g1fQlTUyd4mvNYzJOI4UQEK2S02HJkkc1byQ00iyMffF8?metadata-video-title=Peggy+Smyth+Testimonial&video-title=Peggy+Smyth+Testimonial"
                    style={{width: '100%', height: '100%', border: 'none'}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title="Peggy Smyth Testimonial"
                  />
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Peggy Smyth on Boardroom Ethics</p>
              </div>

              {/* Video Thumbnail 2 - Ed Watal */}
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
                <p className="text-white/80 text-base mt-3 font-medium">Ed Watal on Responsible AI</p>
              </div>

              {/* Video Thumbnail 3 - Seth Dobrin */}
              <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-1rem)] snap-center">
                <div className="relative aspect-video bg-black/20 backdrop-blur-sm rounded-lg border-2 border-nyu-purple/20 hover:border-nyu-purple/40 transition-all duration-300 overflow-hidden">
                  <iframe
                    src="https://player.mux.com/6KaQVo1WSolzvOrr1oLyP3cAIM5FX00zAY022hay4cga4?metadata-video-title=Seth+Dobrin+AIMC+Snippet+1&video-title=Seth+Dobrin+AIMC+Snippet+1"
                    style={{width: '100%', height: '100%', border: 'none'}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title="Seth Dobrin AIMC Snippet 1"
                  />
                </div>
                <p className="text-white/80 text-base mt-3 font-medium">Seth Dobrin on Governance</p>
              </div>

              {/* Video Thumbnail 4 - Ethics in AI Scaling */}
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
                <p className="text-white/80 text-base mt-3 font-medium">Ethics in AI Scaling</p>
              </div>
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
