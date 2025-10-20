import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ContactHero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-green to-teal-700">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm mb-4 opacity-90">
          <Link to="/" className="hover:text-primary-yellow">{t('contact.breadcrumb.home')}</Link>
          <span className="mx-2">•</span>
          <span>{t('contact.breadcrumb.contact')}</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {t('contact.hero.title')}
        </h1>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
          {t('contact.hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
