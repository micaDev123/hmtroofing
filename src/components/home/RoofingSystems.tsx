const RoofingSystems = () => {
  const systems = [
    {
      title: 'Tile Roofing',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Durable clay and concrete tiles offering superior protection and distinctive aesthetic appeal.',
      features: [
        'Long-lasting durability',
        'Weather resistant', 
        'Energy efficient',
        'Low maintenance'
      ]
    },
    {
      title: 'Asphalt Shingle',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Cost-effective and versatile shingles with excellent weather protection.',
      features: [
        'Cost-effective',
        'Easy installation',
        'Wide variety of colors',
        'Good wind resistance'
      ]
    },
    {
      title: 'Coating Systems',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Advanced coating solutions for enhanced waterproofing and energy efficiency.',
      features: [
        'Waterproof protection',
        'Energy savings',
        'Extends roof life',
        'Seamless application'
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            Roofing Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional installation of complete roofing materials
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={system.image} 
                  alt={system.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-yellow text-gray-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {system.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {system.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {system.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoofingSystems;
