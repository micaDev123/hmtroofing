import { Phone } from 'lucide-react';

const EmergencyServices = () => {
  return (
    <section className="section-padding bg-primary-green">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Emergency Roofing Services
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Storm damage? Leak emergency? We're available 24/7 for urgent repairs.
          </p>
        </div>

        {/* Emergency Call Button */}
        <div className="bg-white rounded-lg p-8 shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <Phone className="h-8 w-8 text-primary-green mr-3" />
            <span className="text-2xl font-bold text-gray-dark">
              Emergency Line
            </span>
          </div>
          
          <a 
            href="tel:3055557663"
            className="inline-block bg-primary-yellow text-gray-dark font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors duration-200 text-xl mb-4"
          >
            📞 Call Emergency Line: (305) 555-7663
          </a>
          
          <p className="text-gray-600 text-sm">
            Available 24/7 for emergency roofing repairs and storm damage
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;
