import { useTranslation } from 'react-i18next';

const CommunityInvolvement = () => {
  const { t } = useTranslation();
  
  const organizations = [
    {
      titleKey: 'communityInvolvement.organizations.chapman.title',
      image: '/images/1.png',
      descriptionKey: 'communityInvolvement.organizations.chapman.description',
      linkKey: 'communityInvolvement.organizations.chapman.link'
    },
    {
      titleKey: 'communityInvolvement.organizations.compassion.title',
      image: '/images/2.png',
      descriptionKey: 'communityInvolvement.organizations.compassion.description',
      linkKey: 'communityInvolvement.organizations.compassion.link'
    },
    {
      titleKey: 'communityInvolvement.organizations.nba.title',
      image: '/images/3.png',
      descriptionKey: 'communityInvolvement.organizations.nba.description',
      linkKey: 'communityInvolvement.organizations.nba.link'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            {t('community.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('community.subtitle')}
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={org.image} 
                  alt={t(org.titleKey)}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${
                    index === 0 ? 'object-cover object-top' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-dark mb-3 leading-tight">
                  {t(org.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t(org.descriptionKey)}
                </p>

                {/* Link */}
                <div className="flex items-center justify-between">
                  <a 
                    href={`https://${t(org.linkKey)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:text-primary-yellow font-medium text-sm transition-colors duration-200"
                  >
                    {t(org.linkKey)}
                  </a>
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center group-hover:bg-primary-yellow transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommunityInvolvement;
