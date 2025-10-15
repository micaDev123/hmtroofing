import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play failed:', error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full Screen Video Background */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        preload="auto"
      >
        <source src="/hmt_roofing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Overlay */}
      
    </section>
  );
};

export default Hero;
