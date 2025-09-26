import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    propertyAddress: '',
    serviceType: '',
    message: '',
    agreeToContact: false
  });

  const serviceTypes = [
    'Select a service',
    'New Roof Installation',
    'Roof Replacement',
    'Roof Repair',
    'Roof Maintenance',
    'Emergency Service',
    'Inspection',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-dark mb-2">
            Send Us a Message
          </h2>
          <p className="text-gray-600">
            Have questions about our roofing services? We're here to help.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-colors"
                />
              </div>

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
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-colors"
                />
              </div>
            </div>

            {/* Property Address */}
            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-2">
                Property Address
              </label>
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-colors"
              />
            </div>

            {/* Service Type */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-colors bg-white appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                {serviceTypes.map((type, index) => (
                  <option key={index} value={index === 0 ? '' : type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-colors resize-vertical"
                placeholder="Tell us about your roofing needs..."
              ></textarea>
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeToContact"
                name="agreeToContact"
                checked={formData.agreeToContact}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-primary-green focus:ring-primary-green border-gray-300 rounded"
              />
              <label htmlFor="agreeToContact" className="ml-3 text-sm text-gray-600">
                I agree to receive communications from HMT Roofing and understand that I can unsubscribe at any time.
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-primary-green text-white font-semibold py-3 px-6 rounded-md hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
