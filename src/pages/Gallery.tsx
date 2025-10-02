import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  
  const projectImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleKey: 'gallery.projects.tileInstallation',
      categoryKey: 'gallery.categories.residential'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleKey: 'gallery.projects.shingleReplacement',
      categoryKey: 'gallery.categories.residential'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleKey: 'gallery.projects.commercialRoofing',
      categoryKey: 'gallery.categories.commercial'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleKey: 'gallery.projects.metalInstallation',
      categoryKey: 'gallery.categories.commercial'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleKey: 'gallery.projects.roofRepair',
      categoryKey: 'gallery.categories.maintenance'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleKey: 'gallery.projects.emergencyRepair',
      categoryKey: 'gallery.categories.emergency'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-green to-teal-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="text-sm mb-4 opacity-90">
            <Link to="/" className="hover:text-primary-yellow">{t('gallery.breadcrumb.home')}</Link>
            <span className="mx-2">•</span>
            <span>{t('gallery.breadcrumb.gallery')}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('gallery.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={image.src} 
                    alt={t(image.titleKey)}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold mb-2">{t(image.titleKey)}</h3>
                      <span className="bg-primary-yellow text-gray-dark px-3 py-1 rounded-full text-sm">
                        {t(image.categoryKey)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-8">
            {t('gallery.communitySection.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('gallery.communitySection.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-dark mb-4">{t('gallery.communitySection.chapman.title')}</h3>
              <p className="text-gray-600">{t('gallery.communitySection.chapman.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-dark mb-4">{t('gallery.communitySection.compassion.title')}</h3>
              <p className="text-gray-600">{t('gallery.communitySection.compassion.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-dark mb-4">{t('gallery.communitySection.nba.title')}</h3>
              <p className="text-gray-600">{t('gallery.communitySection.nba.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
