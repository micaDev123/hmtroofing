import { useTranslation } from 'react-i18next';

const RoofingSystems = () => {
  const { t } = useTranslation();
  
  const systems = [
    {
      titleKey: 'roofingSystems.tile.title',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descriptionKey: 'roofingSystems.tile.description',
      featureKeys: [
        'roofingSystems.tile.features.durability',
        'roofingSystems.tile.features.weather', 
        'roofingSystems.tile.features.energy',
        'roofingSystems.tile.features.maintenance'
      ]
    },
    {
      titleKey: 'roofingSystems.asphalt.title',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descriptionKey: 'roofingSystems.asphalt.description',
      featureKeys: [
        'roofingSystems.asphalt.features.cost',
        'roofingSystems.asphalt.features.installation',
        'roofingSystems.asphalt.features.colors',
        'roofingSystems.asphalt.features.wind'
      ]
    },
    {
      titleKey: 'roofingSystems.coating.title',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descriptionKey: 'roofingSystems.coating.description',
      featureKeys: [
        'roofingSystems.coating.features.waterproof',
        'roofingSystems.coating.features.savings',
        'roofingSystems.coating.features.extends',
        'roofingSystems.coating.features.seamless'
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            {t('roofingSystems.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('roofingSystems.subtitle')}
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
                  alt={t(system.titleKey)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-yellow text-gray-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {t(system.titleKey)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(system.descriptionKey)}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {system.featureKeys.map((featureKey: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                      {t(featureKey)}
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
