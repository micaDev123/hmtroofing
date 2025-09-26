const RoofingMaterials = () => {
  const materials = [
    {
      title: 'Tile',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Durable clay and concrete tiles offering superior protection and distinctive aesthetic appeal.',
      benefits: [
        'Long-lasting durability',
        'Weather resistant',
        'Energy efficient',
        'Low maintenance',
        'Fire resistant',
        'Eco-friendly options'
      ]
    },
    {
      title: 'Shingle',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Cost-effective and versatile shingles with excellent weather protection and easy installation.',
      benefits: [
        'Cost-effective',
        'Easy installation',
        'Wide variety of colors',
        'Good wind resistance',
        'Algae resistance',
        'Impact resistant'
      ]
    },
    {
      title: 'Built-up',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Multi-layer built-up roofing systems ideal for flat and low-slope commercial applications.',
      benefits: [
        'Waterproof protection',
        'Commercial grade',
        'Multi-layer system',
        'Cost-effective',
        'Proven performance',
        'Easy maintenance'
      ]
    },
    {
      title: 'Metal',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium metal roofing offering exceptional durability, energy efficiency, and modern aesthetics.',
      benefits: [
        'Exceptional durability',
        'Energy efficient',
        'Lightweight',
        'Fire resistant',
        'Recyclable',
        'Low maintenance'
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            Roofing Materials We Install
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium materials for every roofing need and budget
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={material.image} 
                  alt={material.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-yellow text-gray-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {material.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {material.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2">
                  {material.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-green rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoofingMaterials;
