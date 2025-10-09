import React, { useState, useEffect } from 'react';

const ImagePreviews: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - replace with actual course images
  const courseImages = [
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Executive learning session",
      caption: "Interactive AI Strategy Workshop"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Executive networking",
      caption: "Executive Networking & Collaboration"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      alt: "Boardroom presentation",
      caption: "AI Implementation Planning"
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Executive discussion",
      caption: "Peer-to-Peer Learning Sessions"
    },
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "NYU campus setting",
      caption: "NYU Executive Education Campus"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courseImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [courseImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courseImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courseImages.length) % courseImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-nyu-light-violet-2 mb-4">
          Experience Our In-Person Program
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          See what makes our intensive 2-day executive retreat the ultimate AI learning experience
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Main Image Display */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm border border-white/20">
            <img
              src={courseImages[currentSlide].src}
              alt={courseImages[currentSlide].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                {courseImages[currentSlide].caption}
              </h3>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 flex justify-center space-x-3 overflow-x-auto pb-2">
            {courseImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                  index === currentSlide
                    ? 'border-nyu-purple shadow-lg shadow-nyu-purple/25'
                    : 'border-white/20 hover:border-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-nyu-purple/20" />
                )}
              </button>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="mt-4 flex justify-center space-x-2">
            {courseImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-nyu-purple' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-white/70 text-lg mb-6">
            Ready to experience the full in-person AI executive retreat?
          </p>
          <button className="bg-nyu-purple hover:bg-nyu-purple/90 text-white px-8 py-4 rounded font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nyu-purple/25">
            Reserve Your Spot
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImagePreviews;
