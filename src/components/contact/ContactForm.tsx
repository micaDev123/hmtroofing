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
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            Send Us a Message
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our roofing services? We're here to help.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                  placeholder="First name"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                  placeholder="your@email.com"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                  placeholder="(305) 555-0123"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                placeholder="Property address"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors bg-white"
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
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors resize-vertical"
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
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary-green text-white font-semibold py-4 px-12 rounded-lg hover:bg-teal-700 transition-colors duration-200 text-lg flex items-center justify-center mx-auto"
              >
                📧 Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
