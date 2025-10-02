import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();
  const contactMethods = [
    {
      icon: Phone,
      titleKey: 'contact.info.callUs.title',
      primaryKey: 'contact.info.callUs.primary',
      secondaryKey: 'contact.info.callUs.secondary',
      color: 'text-primary-green'
    },
    {
      icon: Mail,
      titleKey: 'contact.info.emailUs.title',
      primaryKey: 'contact.info.emailUs.primary',
      secondaryKey: 'contact.info.emailUs.secondary',
      color: 'text-primary-green'
    },
    {
      icon: MapPin,
      titleKey: 'contact.info.visitUs.title',
      primaryKey: 'contact.info.visitUs.primary',
      secondaryKey: 'contact.info.visitUs.secondary',
      color: 'text-primary-green'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t(method.titleKey)}
                </h3>

                {/* Primary Info */}
                <p className="text-lg font-semibold text-gray-dark mb-2">
                  {t(method.primaryKey)}
                </p>

                {/* Secondary Info */}
                <p className="text-gray-600">
                  {t(method.secondaryKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
