import { useTranslation } from 'react-i18next';

const DetailedRoofingSystems = () => {
  const { t } = useTranslation();
  const roofingSystems = [
    {
      titleKey: 'services.detailedSystems.metal.title',
      descriptionKey: 'services.detailedSystems.metal.description',
      benefitsKeys: [
        'services.detailedSystems.metal.benefits.lasting',
        'services.detailedSystems.metal.benefits.colors',
        'services.detailedSystems.metal.benefits.maintenance',
        'services.detailedSystems.metal.benefits.warranties',
        'services.detailedSystems.metal.benefits.impervious'
      ],
      videoId: 'gLFoPYxiSZM',
      bgColor: 'bg-white'
    },
    {
      titleKey: 'services.detailedSystems.flat.title',
      descriptionKey: 'services.detailedSystems.flat.description',
      benefitsKeys: [
        'services.detailedSystems.flat.benefits.costs',
        'services.detailedSystems.flat.benefits.repairs',
        'services.detailedSystems.flat.benefits.efficiency',
        'services.detailedSystems.flat.benefits.versatile',
        'services.detailedSystems.flat.benefits.space'
      ],
      videoId: 'c-DMwbawhwY',
      bgColor: 'bg-gray-50'
    },
    {
      titleKey: 'services.detailedSystems.tile.title',
      descriptionKey: 'services.detailedSystems.tile.description',
      benefitsKeys: [
        'services.detailedSystems.tile.benefits.shedding',
        'services.detailedSystems.tile.benefits.lasting',
        'services.detailedSystems.tile.benefits.winds',
        'services.detailedSystems.tile.benefits.impervious',
        'services.detailedSystems.tile.benefits.recyclable',
        'services.detailedSystems.tile.benefits.variety'
      ],
      videoId: 'zmI-lu-CXsw',
      bgColor: 'bg-white'
    },
    {
      titleKey: 'services.detailedSystems.asphalt.title',
      descriptionKey: 'services.detailedSystems.asphalt.description',
      benefitsKeys: [
        'services.detailedSystems.asphalt.benefits.lasting',
        'services.detailedSystems.asphalt.benefits.affordable',
        'services.detailedSystems.asphalt.benefits.variety',
        'services.detailedSystems.asphalt.benefits.repairs',
        'services.detailedSystems.asphalt.benefits.reputation'
      ],
      videoId: '6c_9YlPVdpg',
      bgColor: 'bg-gray-50'
    },
    {
      titleKey: 'services.detailedSystems.coating.title',
      descriptionKey: 'services.detailedSystems.coating.description',
      benefitsKeys: [
        'services.detailedSystems.coating.benefits.leaks',
        'services.detailedSystems.coating.benefits.costEffective',
        'services.detailedSystems.coating.benefits.efficiency',
        'services.detailedSystems.coating.benefits.seamless',
        'services.detailedSystems.coating.benefits.install',
        'services.detailedSystems.coating.benefits.integrity'
      ],
      videoId: '4WIMhhi6wCs',
      bgColor: 'bg-white'
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            {t('services.detailedSystems.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.detailedSystems.subtitle')}
          </p>
        </div>

        {/* Roofing Systems */}
        <div className="space-y-16">
          {roofingSystems.map((system, index) => (
            <div key={index} className={`${system.bgColor} rounded-2xl p-8 md:p-12`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
                    {t('services.detailedSystems.whyChoose')} {t(system.titleKey)}?
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {t(system.descriptionKey)}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-4">
                    {system.benefitsKeys.map((benefitKey, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">
                          {t(benefitKey)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${system.videoId}`}
                      title={`${t(system.titleKey)} Video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary-green rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t('services.detailedSystems.cta.title')}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {t('services.detailedSystems.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                {t('services.detailedSystems.cta.consultation')}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-green transition-colors duration-200">
                {t('services.detailedSystems.cta.quote')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedRoofingSystems;
