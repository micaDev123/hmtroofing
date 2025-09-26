import { Link } from 'react-router-dom';

const ContactHero = () => {
  return (
    <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-green to-teal-700">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm mb-4 opacity-90">
          <Link to="/" className="hover:text-primary-yellow">Home</Link>
          <span className="mx-2">•</span>
          <span>Contact</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Contact <span className="text-primary-yellow">Us</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
          Ready to discuss your roofing project? Get in touch with our expert 
          team today.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
