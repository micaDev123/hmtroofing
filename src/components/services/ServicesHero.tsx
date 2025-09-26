import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-green to-teal-700">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm mb-4 opacity-90">
          <Link to="/" className="hover:text-primary-yellow">Home</Link>
          <span className="mx-2">•</span>
          <span>Services</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our <span className="text-primary-yellow">Services</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
          Comprehensive roofing solutions for residential and commercial 
          properties in beautiful South Florida.
        </p>
        
        {/* CTA Button */}
        <Link 
          to="/contact"
          className="btn-primary text-lg px-8 py-4 inline-flex items-center"
        >
          🔍 Explore Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesHero;
