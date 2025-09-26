import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-green to-teal-700">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* License Badge */}
        <div className="inline-flex items-center bg-primary-yellow text-gray-dark px-4 py-2 rounded-full text-sm font-semibold mb-8">
          <span className="mr-2">🏆</span>
          Licensed & Certified • CCC1336315
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Commercial & Residential
          <span className="block text-primary-yellow">Roofing</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Quality roofing solutions with integrity, honesty, and trust. Serving 
          South Florida with 20+ years of experience.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/contact"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center"
          >
            📋 Request Free Quote
          </Link>
          <Link 
            to="/gallery"
            className="btn-secondary text-lg px-8 py-4 inline-flex items-center"
          >
            📸 View Gallery
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
