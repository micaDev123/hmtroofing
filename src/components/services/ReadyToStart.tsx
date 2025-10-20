import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ReadyToStart = () => {
  const { t } = useTranslation();
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
    alert(t('services.readyToStart.successMessage'));
  };

  return (
    <section className="section-padding bg-primary-green">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('services.readyToStart.title')}
          </h2>
          <p className="text-base text-gray-100 max-w-2xl mx-auto">
            {t('services.readyToStart.subtitle')}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('services.readyToStart.fullName')} {t('services.readyToStart.required')}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                  placeholder={t('services.readyToStart.fullNamePlaceholder')}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('services.readyToStart.phoneNumber')} {t('services.readyToStart.required')}
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition-colors"
                  placeholder={t('services.readyToStart.phoneNumberPlaceholder')}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-primary-yellow text-gray-dark font-semibold py-4 px-12 rounded-lg hover:bg-yellow-400 transition-colors duration-200 text-lg"
              >
                {t('services.readyToStart.submitButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
