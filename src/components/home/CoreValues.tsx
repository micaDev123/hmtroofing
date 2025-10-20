import { useTranslation } from 'react-i18next';

const CoreValues = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      letter: 'H',
      titleKey: 'coreValues.honor.title',
      descriptionKey: 'coreValues.honor.description',
      bgColor: 'bg-primary-green',
      textColor: 'text-white'
    },
    {
      letter: 'M',
      titleKey: 'coreValues.mastery.title',
      descriptionKey: 'coreValues.mastery.description',
      bgColor: 'bg-primary-green',
      textColor: 'text-white'
    },
    {
      letter: 'T',
      titleKey: 'coreValues.trust.title',
      descriptionKey: 'coreValues.trust.description',
      bgColor: 'bg-primary-green',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            {t('coreValues.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('coreValues.subtitle')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              {/* Letter Circle */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${value.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`text-3xl font-bold ${value.textColor}`}>
                    {value.letter}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t(value.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {t(value.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
