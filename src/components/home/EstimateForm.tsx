import { useState } from 'react';

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    propertyAddress: '',
    roofingType: ''
  });

  const roofingTypes = [
    'Select roofing type',
    'Tile Roofing',
    'Asphalt Shingle',
    'Metal Roofing',
    'Built-up Roofing',
    'Coating Systems',
    'Not Sure - Need Consultation'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you! We will contact you soon for your free estimate.');
  };

  return (
    <section className="section-padding bg-primary-green">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Ready to start your roofing project? Get a personalized quote today.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                  placeholder="(305) 555-0123"
                />
              </div>
            </div>

            {/* Property Address */}
            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-2">
                Property Address *
              </label>
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                required
                value={formData.propertyAddress}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                placeholder="Enter property address"
              />
            </div>

            {/* Type of Roofing */}
            <div>
              <label htmlFor="roofingType" className="block text-sm font-medium text-gray-700 mb-2">
                Type of Roofing
              </label>
              <select
                id="roofingType"
                name="roofingType"
                value={formData.roofingType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors bg-white"
              >
                {roofingTypes.map((type, index) => (
                  <option key={index} value={index === 0 ? '' : type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-primary-yellow text-gray-dark font-semibold py-4 px-12 rounded-lg hover:bg-yellow-400 transition-colors duration-200 text-lg"
              >
                Get Free Estimate
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EstimateForm;
