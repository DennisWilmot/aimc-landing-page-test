import React, { useState, useEffect, useRef } from 'react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }, []);

  const faqs = [
    {
      question: "What is the duration of the AI Masterclass program?",
      answer: "The AI Masterclass is an intensive 2-day program designed for busy executives. The program covers essential AI concepts, strategic frameworks, and practical applications in a condensed format that fits your schedule."
    },
    {
      question: "Do I need technical experience to participate?",
      answer: "No technical background is required. The program is specifically designed for executives and leaders who want to understand AI from a strategic perspective. We focus on business applications and decision-making frameworks rather than technical implementation."
    },
    {
      question: "What will I learn in the program?",
      answer: "You'll learn AI strategy frameworks, practical applications for your industry, how to assess AI opportunities and risks, and how to build winning AI strategies. The program covers real-world case studies and provides actionable insights you can implement immediately."
    },
    {
      question: "Who are the instructors?",
      answer: "Our faculty includes world-class AI experts from top tech companies like Google, Microsoft, Amazon, and Meta. You'll learn from Ed Watal (Founder & Principal, Intellibus) and Jepson Taylor (Former Chief AI Strategist, Dataiku), along with other industry leaders."
    },
    {
      question: "Is there ongoing support after the program?",
      answer: "Yes! You'll join an exclusive network of 50+ Fortune 500 executives who've completed our program. This includes access to ongoing mastermind sessions, exclusive AI trend reports, and a private community for continued learning and networking."
    },
    {
      question: "What is the investment for the program?",
      answer: "The AI Masterclass represents exceptional value for the comprehensive curriculum, world-class faculty, and exclusive networking opportunities. Contact our admissions team for detailed pricing information and available payment options."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-black py-16 px-4 sm:px-6 lg:px-8">
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
          {/* AI Masterclass FAQ Background Video */}
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
          Frequently Asked Questions
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Get answers to the most common questions about our AI Masterclass program
        </p>
      </div>

      {/* FAQ Container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-white font-medium text-lg pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-white transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="pb-6 px-0">
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 text-center mt-12">
        <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-8 py-4 rounded font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nyu-purple/25">
          Have More Questions?
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
