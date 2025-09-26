import { useState } from 'react';

const ReadyToStart = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section className="section-padding bg-primary-green">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate for your roofing project.
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

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-primary-yellow text-gray-dark font-semibold py-4 px-12 rounded-lg hover:bg-yellow-400 transition-colors duration-200 text-lg"
              >
                Get Free Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
