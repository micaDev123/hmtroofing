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

        {/* Google Form Button */}
        <div className="flex justify-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2rAotiA07BAseQ5varyLyhQ9opOAkGMqudfz_vIm6jys3FA/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            {t('contact.form.title')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
