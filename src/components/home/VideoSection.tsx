import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const VideoSection = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel slides - each slide has exactly 3 images for perfect rows
  const carouselSlides = [
    // Slide 1 - Residential Projects
    [
      'WhatsApp Image 2025-08-27 at 08.08.15 (6).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.14 (8).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.16 (1).jpeg'
    ],
    // Slide 2 - More Residential Projects
    [
      'WhatsApp Image 2025-08-27 at 08.08.15 (2).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.17 (5).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.14 (7).jpeg'
    ],
    // Slide 3 - Commercial Projects
    [
      'WhatsApp Image 2025-08-27 at 08.08.16 (8).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.15 (9).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.16.jpeg'
    ],
    // Slide 4 - More Commercial Projects
    [
      'WhatsApp Image 2025-08-27 at 08.08.17 (2).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.14 (11).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.15 (8).jpeg'
    ],
    // Slide 5 - Process & Materials
    [
      'WhatsApp Image 2025-08-27 at 08.08.17 (6).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.16 (12).jpeg',
      'WhatsApp Image 2025-08-27 at 08.08.18 (5).jpeg'
    ]
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('videoSection.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('videoSection.subtitle')}
            </p>
          </div>

          {/* Carousel Gallery */}
          <div className="relative w-full mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselSlides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    {/* Main Gallery Container for this slide */}
                    <div className="flex flex-wrap justify-center items-center gap-6 mb-12 px-4">
                      {/* Professional Grid Layout */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
                        {slide.map((image, index) => {
                          // Define project types for professional context (3 per slide)
                          const projectTypes = [
                            'Residential Roofing',
                            'Commercial Installation', 
                            'Roof Repair'
                          ];
                          
                          return (
                            <div 
                              key={`${slideIndex}-${index}`}
                              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white"
                              onClick={() => setSelectedImage(image)}
                            >
                              {/* Project Image */}
                              <div className="relative h-64 sm:h-72 lg:h-80 xl:h-96 overflow-hidden">
                                <img
                                  src={`/images/Gallery/${image}`}
                                  alt={`${projectTypes[index]} - HMT Roofing Project`}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  loading="lazy"
                                />
                                
                                {/* Professional overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                  <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <div className="text-white">
                                      <h4 className="font-bold text-lg mb-1">{projectTypes[index]}</h4>
                                      <p className="text-sm text-gray-200">Professional craftsmanship by HMT Roofing</p>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Quality badge */}
                                <div className="absolute top-3 left-3 bg-primary-yellow text-gray-900 px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  ✓ Quality Work
                                </div>
                                
                                {/* View details button */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                  <div className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg p-2 hover:bg-primary-yellow transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-6 mb-8">
              {/* Previous Button */}
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-yellow group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Navigation Dots */}
              <div className="flex space-x-3">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all duration-200 ${
                      currentSlide === index 
                        ? 'w-4 h-4 bg-primary-yellow shadow-lg' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-primary-green'
                    }`}
                  />
                ))}
              </div>
              
              {/* Next Button */}
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-yellow group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm text-gray-600">
                  {currentSlide === 0 && "Residential Projects"}
                  {currentSlide === 1 && "More Residential Projects"}
                  {currentSlide === 2 && "Commercial Projects"}
                  {currentSlide === 3 && "More Commercial Projects"}
                  {currentSlide === 4 && "Process & Materials"}
                </span>
                <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                <span className="text-xs text-gray-500">{currentSlide + 1} / {carouselSlides.length}</span>
              </div>
            </div>
          </div>


          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
                >
                  ✕ Close
                </button>
                <img
                  src={`/images/Gallery/${selectedImage}`}
                  alt="HMT Roofing Project"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
