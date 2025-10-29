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

        {/* Google Form */}
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8">
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

export default ReadyToStart;
