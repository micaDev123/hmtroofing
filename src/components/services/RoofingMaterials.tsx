import { useTranslation } from 'react-i18next';

const RoofingMaterials = () => {
  const { t } = useTranslation();
  const materials = [
    {
      titleKey: 'services.materials.tile.title',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descriptionKey: 'services.materials.tile.description',
      benefitsKeys: [
        'services.materials.tile.benefits.durability',
        'services.materials.tile.benefits.weather',
        'services.materials.tile.benefits.energy',
        'services.materials.tile.benefits.maintenance',
        'services.materials.tile.benefits.fire',
        'services.materials.tile.benefits.eco'
      ]
    },
    {
      titleKey: 'services.materials.shingle.title',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descriptionKey: 'services.materials.shingle.description',
      benefitsKeys: [
        'services.materials.shingle.benefits.cost',
        'services.materials.shingle.benefits.installation',
        'services.materials.shingle.benefits.colors',
        'services.materials.shingle.benefits.wind',
        'services.materials.shingle.benefits.algae',
        'services.materials.shingle.benefits.impact'
      ]
    },
    {
      titleKey: 'services.materials.builtUp.title',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descriptionKey: 'services.materials.builtUp.description',
      benefitsKeys: [
        'services.materials.builtUp.benefits.waterproof',
        'services.materials.builtUp.benefits.commercial',
        'services.materials.builtUp.benefits.multiLayer',
        'services.materials.builtUp.benefits.cost',
        'services.materials.builtUp.benefits.performance',
        'services.materials.builtUp.benefits.maintenance'
      ]
    },
    {
      titleKey: 'services.materials.metal.title',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descriptionKey: 'services.materials.metal.description',
      benefitsKeys: [
        'services.materials.metal.benefits.durability',
        'services.materials.metal.benefits.energy',
        'services.materials.metal.benefits.lightweight',
        'services.materials.metal.benefits.fire',
        'services.materials.metal.benefits.recyclable',
        'services.materials.metal.benefits.maintenance'
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            {t('services.materials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.materials.subtitle')}
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
                  alt={t(material.titleKey)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-yellow text-gray-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {t(material.titleKey)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {t(material.descriptionKey)}
                </p>

                {/* Benefits List */}
                <div className="space-y-2">
                  {material.benefitsKeys.map((benefitKey, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-green rounded-full mr-2"></div>
                      {t(benefitKey)}
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
