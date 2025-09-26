import { Link } from 'react-router-dom';

const Gallery = () => {
  const projectImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Tile Roof Installation',
      category: 'Residential'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Shingle Roof Replacement',
      category: 'Residential'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Commercial Roofing',
      category: 'Commercial'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Metal Roof Installation',
      category: 'Commercial'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Roof Repair Service',
      category: 'Maintenance'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Emergency Roof Repair',
      category: 'Emergency'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-green to-teal-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="text-sm mb-4 opacity-90">
            <Link to="/" className="hover:text-primary-yellow">Home</Link>
            <span className="mx-2">•</span>
            <span>Gallery</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See Our Work in <span className="text-primary-yellow">Action</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Browse our portfolio of completed roofing projects across South Florida
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <span className="bg-primary-yellow text-gray-dark px-3 py-1 rounded-full text-sm">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-8">
            Community Involvement
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're proud to support our local community through various partnerships and charitable initiatives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-dark mb-4">Chapman Partnership</h3>
              <p className="text-gray-600">Supporting homeless services in Miami-Dade County</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-dark mb-4">Compassion International</h3>
              <p className="text-gray-600">Helping children worldwide through sponsorship programs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-dark mb-4">NBA Chaplain</h3>
              <p className="text-gray-600">Providing spiritual support to professional athletes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
