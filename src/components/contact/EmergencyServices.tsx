import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EmergencyServices = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding bg-primary-green">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {t('contact.emergency.title')}
          </h2>
          <p className="text-base text-gray-100 max-w-3xl mx-auto">
            {t('contact.emergency.subtitle')}
          </p>
        </div>

        {/* Emergency Call Button */}
        <div className="bg-white rounded-lg p-8 shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <Phone className="h-8 w-8 text-primary-green mr-3" />
            <span className="text-2xl font-bold text-gray-dark">
              {t('contact.emergency.emergencyLine')}
            </span>
          </div>
          
          <a 
            href="tel:9545540484"
            className="inline-block bg-primary-yellow text-gray-dark font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors duration-200 text-xl mb-4"
          >
            {t('contact.emergency.callButton')}
          </a>
          
          <p className="text-gray-600 text-sm">
            {t('contact.emergency.availability')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;
