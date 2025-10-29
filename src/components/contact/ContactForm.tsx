import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-dark mb-2">
            {t('contact.form.title')}
          </h2>
          <p className="text-gray-600">
            {t('contact.form.subtitle')}
          </p>
        </div>

        {/* Google Form */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <div className="w-full flex justify-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe2rAotiA07BAseQ5varyLyhQ9opOAkGMqudfz_vIm6jys3FA/viewform?embedded=true" 
              width="100%" 
              height="900" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="max-w-full"
              style={{ border: 'none' }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
