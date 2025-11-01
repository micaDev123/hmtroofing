import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  // Get video source based on current language
  const getVideoSource = () => {
    switch (i18n.language) {
      case 'es':
        return '/HMT - Spanish Subs.mp4';
      case 'ht':
        return '/HMT - Kreole Subs.mp4';
      default:
        return '/HMT - English Subs.mp4';
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Hero3.jpg')"
        }}
      ></div>


      {/* Centered Content with Header Text and Video */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* Minimal Video Header */}
          <div className="text-center mb-6">
            <div className="max-w-2xl mx-auto">
              {/* Main Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                {t('hero.videoHeader.services')}
              </h1>
              
              {/* Subtitle with Location and License */}
              <p className="text-base text-white/90 mb-4">
                {t('hero.videoHeader.location')} • {t('hero.videoHeader.license')}
              </p>

              {/* CTA Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOur3kblLnESFxU_304znclYOt2PKJkkF0esHqUU4PhV23nw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                {t('hero.cta')}
              </a>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
            <video 
              key={i18n.language}
              className="w-full h-full object-cover"
              controls
              preload="auto"
              poster="/images/HMT_Roofing_Thumbnail.png"
            >
              <source src={getVideoSource()} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;