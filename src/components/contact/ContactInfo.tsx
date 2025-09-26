import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '(305) 555-7663',
      secondary: '9am to 6pm daily',
      color: 'text-primary-green'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@hmtroofing.com',
      secondary: 'Response within 24hrs',
      color: 'text-primary-green'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'Miami, FL',
      secondary: 'Serving South Florida',
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
                  {method.title}
                </h3>

                {/* Primary Info */}
                <p className="text-lg font-semibold text-gray-dark mb-2">
                  {method.primary}
                </p>

                {/* Secondary Info */}
                <p className="text-gray-600">
                  {method.secondary}
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
