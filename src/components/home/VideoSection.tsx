import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const VideoSection = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('video.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('video.subtitle')}
            </p>
          </div>

          {/* Video Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-video relative">
              {!showVideo ? (
                // Custom Thumbnail with Play Button
                <div 
                  className="relative w-full h-full cursor-pointer group"
                  onClick={handlePlayVideo}
                >
                  {/* Custom Thumbnail Background */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    {/* HMT Logo Area */}
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center">
                          {/* Yellow roof lines */}
                          <div className="flex items-center">
                            <div className="w-8 h-1 bg-yellow-400 transform -rotate-45 mr-1"></div>
                            <div className="w-8 h-1 bg-yellow-400 transform rotate-45 mr-3"></div>
                          </div>
                          
                          {/* HMT Text */}
                          <div className="text-4xl font-bold text-gray-600 tracking-wider mx-4">
                            HMT
                          </div>
                          
                          {/* Yellow roof lines */}
                          <div className="flex items-center">
                            <div className="w-8 h-1 bg-yellow-400 transform -rotate-45 ml-3 mr-1"></div>
                            <div className="w-8 h-1 bg-yellow-400 transform rotate-45"></div>
                          </div>
                        </div>
                        
                        {/* ROOFING text */}
                        <div className="text-xl font-semibold text-gray-600 tracking-widest mt-2 border-2 border-gray-600 px-4 py-1 inline-block">
                          ROOFING
                        </div>
                        
                        {/* Honor | Mastery | Trust */}
                        <div className="text-sm text-gray-500 mt-3 tracking-wider">
                          HONOR | MASTERY | TRUST
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium bg-black bg-opacity-50 rounded-lg px-3 py-2">
                      {t('video.hoverText')}
                    </p>
                  </div>
                </div>
              ) : (
                // YouTube Video
                <iframe
                  src="https://www.youtube.com/embed/fXQxmlhxCp0?autoplay=1"
                  title={t('video.title')}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              {t('video.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(305) 555-7663"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('video.cta.callNow')}
              </a>
              <a
                href="#estimate"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('video.cta.getEstimate')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
