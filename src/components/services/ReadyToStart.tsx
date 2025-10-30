import { useTranslation } from 'react-i18next';

const ReadyToStart = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-primary-green">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {t('services.readyToStart.title')}
          </h2>
          <p className="text-base text-gray-100 max-w-2xl mx-auto">
            {t('services.readyToStart.subtitle')}
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
            {t('services.readyToStart.title')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
