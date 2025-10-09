import React, { useEffect, useRef, useState } from 'react';
import { initializeSmoothScroll } from '../utils/smoothScroll';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
    
    // Initialize smooth scrolling for anchor links with a small delay
    setTimeout(() => {
      initializeSmoothScroll();
    }, 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or when at the very top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
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
          {/* AI Masterclass Hero Background Video */}
          <source src="/HeroBackgroundVideo.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-nyu-purple/30 to-transparent" />
        {/* Bottom fade overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" style={{background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(0,0,0,0.9) 100%)'}} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-md border-b border-white/10 h-[11.11vh]">
        <div className="flex items-center space-x-4">
          <img 
            src="/AIMC_Angled_Horiz_w Title_Violet.png" 
            alt="AI Masterclass Logo" 
            className="h-[8vh] w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#social-proof" className="text-white/80 hover:text-white transition-colors">Alumni</a>
          <a href="#instructors" className="text-white/80 hover:text-white transition-colors">Faculty</a>
          <a href="#value-prop" className="text-white/80 hover:text-white transition-colors">Program</a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
        </div>

        <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-4 py-1.5 rounded font-medium text-sm transition-colors">
          Enroll Now
        </button>
      </nav>

      {/* Floating Navbar - Appears on scroll up */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-md border-b border-white/10 h-[11.11vh] transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex items-center space-x-4">
          <img 
            src="/AIMC_Angled_Horiz_w Title_Violet.png" 
            alt="AI Masterclass Logo" 
            className="h-[8vh] w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#social-proof" className="text-white/80 hover:text-white transition-colors">Alumni</a>
          <a href="#instructors" className="text-white/80 hover:text-white transition-colors">Faculty</a>
          <a href="#value-prop" className="text-white/80 hover:text-white transition-colors">Program</a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
        </div>

        <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-4 py-1.5 rounded font-medium text-sm transition-colors">
          Enroll Now
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-start min-h-screen px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="flex flex-col lg:flex-row w-full items-start min-h-full">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl lg:pr-8">

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-nyu-light-violet-2 mb-4 animate-slide-up">
            <span className="block">AI Masterclass</span>
            <span className="block">
              Executive Education
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 max-w-2xl leading-relaxed animate-slide-up">
            Start with our complimentary online program, then choose your path to mastery
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start animate-slide-up">
            <button className="w-full max-w-sm sm:w-auto bg-nyu-purple hover:bg-nyu-purple/90 text-white px-6 py-3 rounded font-medium text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nyu-purple/25">
              Get Free Course Now
            </button>
          </div>

          {/* Upgrade Path Text */}
          <div className="mt-4 animate-slide-up">
            <p className="text-white/60 text-sm sm:text-base">
              Then upgrade to <span className="text-nyu-light-violet-2 font-medium">Online Masterclass</span> or <span className="text-nyu-light-violet-2 font-medium">Intensive In-Person Experience</span>
            </p>
          </div>

          {/* Mobile Video - Shows only on mobile */}
          <div className="w-full lg:hidden flex items-center justify-center pt-8">
            <div className="relative w-full max-w-md aspect-[9/16] bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-sm">Video Placeholder</p>
                <p className="text-white/60 text-xs mt-1">Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl animate-fade-in">
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-nyu-light-violet-2 mb-2">2</div>
              <div className="text-white/70 text-sm sm:text-base">Two Day Intensive Learning and Workshops</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-nyu-light-violet-2 mb-2">50+</div>
              <div className="text-white/70 text-sm sm:text-base">Completed by 50 Fortune 500 Executives</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-nyu-light-violet-2 mb-2">100%</div>
              <div className="text-white/70 text-sm sm:text-base">Online Learning</div>
            </div>
          </div>

          {/* Partnership Logos */}
          <div className="mt-8 flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-6 animate-fade-in">
            <p className="text-white/60 text-sm font-medium">Presented by:</p>
            <div className="flex items-center space-x-6">
              <img 
                src="/whiteNyuLogo.png" 
                alt="NYU Logo" 
                className="h-12 w-auto"
              />
              <img 
                src="/White_Text_Blue_Bkg-removebg-preview.png" 
                alt="Intellibus Logo" 
                className="h-12 w-auto"
              />
            </div>
          </div>
          </div>

          {/* Desktop Video - Shows only on desktop */}
          <div className="hidden lg:flex w-1/2 items-center justify-center pl-8 pt-8">
            <div className="relative w-full max-w-xs aspect-[9/16] bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-nyu-purple/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-sm">Video Placeholder</p>
                <p className="text-white/60 text-xs mt-1">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
