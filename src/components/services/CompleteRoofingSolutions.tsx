import { Home, RefreshCw, Wrench, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CompleteRoofingSolutions = () => {
  const { t } = useTranslation();
  const solutions = [
    {
      icon: Home,
      titleKey: 'services.solutions.newRoofs.title',
      descriptionKey: 'services.solutions.newRoofs.description',
      featuresKeys: [
        'services.solutions.newRoofs.features.consultation',
        'services.solutions.newRoofs.features.materials',
        'services.solutions.newRoofs.features.installation',
        'services.solutions.newRoofs.features.warranty'
      ]
    },
    {
      icon: RefreshCw,
      titleKey: 'services.solutions.reRoof.title',
      descriptionKey: 'services.solutions.reRoof.description',
      featuresKeys: [
        'services.solutions.reRoof.features.tearOff',
        'services.solutions.reRoof.features.inspection',
        'services.solutions.reRoof.features.materials',
        'services.solutions.reRoof.features.efficiency'
      ]
    },
    {
      icon: Wrench,
      titleKey: 'services.solutions.repairs.title',
      descriptionKey: 'services.solutions.repairs.description',
      featuresKeys: [
        'services.solutions.repairs.features.emergency',
        'services.solutions.repairs.features.detection',
        'services.solutions.repairs.features.storm',
        'services.solutions.repairs.features.preventive'
      ]
    },
    {
      icon: Settings,
      titleKey: 'services.solutions.maintenance.title',
      descriptionKey: 'services.solutions.maintenance.description',
      featuresKeys: [
        'services.solutions.maintenance.features.inspections',
        'services.solutions.maintenance.features.care',
        'services.solutions.maintenance.features.cleaning',
        'services.solutions.maintenance.features.optimization'
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            {t('services.solutions.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.solutions.subtitle')}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="text-center group hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t(solution.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(solution.descriptionKey)}
                </p>

                {/* Features List */}
                <ul className="text-left space-y-2">
                  {solution.featuresKeys.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-yellow rounded-full mr-3"></div>
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6">
                  <button className="text-primary-green font-semibold hover:text-primary-yellow transition-colors duration-200">
                    {t('services.solutions.learnMore')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompleteRoofingSolutions;
