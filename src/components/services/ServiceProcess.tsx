import { useTranslation } from 'react-i18next';

const ServiceProcess = () => {
  const { t } = useTranslation();
  const steps = [
    {
      number: '1',
      titleKey: 'services.process.inspection.title',
      descriptionKey: 'services.process.inspection.description',
      detailsKey: 'services.process.inspection.details'
    },
    {
      number: '2',
      titleKey: 'services.process.estimate.title',
      descriptionKey: 'services.process.estimate.description',
      detailsKey: 'services.process.estimate.details'
    },
    {
      number: '3',
      titleKey: 'services.process.installation.title',
      descriptionKey: 'services.process.installation.description',
      detailsKey: 'services.process.installation.details'
    },
    {
      number: '4',
      titleKey: 'services.process.warranty.title',
      descriptionKey: 'services.process.warranty.description',
      detailsKey: 'services.process.warranty.details'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            {t('services.process.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.process.subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-gray-dark">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t(step.titleKey)}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t(step.descriptionKey)}
              </p>

              {/* Step Details */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {t(step.detailsKey)}
              </p>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
