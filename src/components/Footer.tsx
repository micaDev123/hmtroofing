import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const services = [
    'footer.services.newRoofs',
    'footer.services.reRoofing',
    'footer.services.roofRepairs',
    'footer.services.maintenance',
    'footer.services.emergencyService'
  ];

  const roofingSystems = [
    'footer.systems.tileRoofing',
    'footer.systems.asphaltShingle',
    'footer.systems.builtUpRoofing',
    'footer.systems.metalRoofing',
    'footer.systems.coatingSystems'
  ];

  return (
    <footer className="bg-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-primary-yellow mb-4">
              {t('footer.company')}
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="text-sm text-gray-400">
              <p>{t('footer.licensed')}</p>
              <p className="font-semibold">{t('footer.licenseNumber')}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.ourServices')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-200"
                  >
                    {t(service)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roofing Systems */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.roofingSystems')}</h3>
            <ul className="space-y-2">
              {roofingSystems.map((system) => (
                <li key={system}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-200"
                  >
                    {t(system)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <a href="tel:+19545540484" className="cursor-pointer hover:opacity-80 transition-opacity">
                  <Phone className="h-4 w-4 mr-3 text-primary-yellow" />
                </a>
                <a href="tel:+19545540484" className="text-gray-300 hover:text-primary-yellow transition-colors duration-200">
                  {t('nav.phone')}
                </a>
              </div>
              <div className="flex items-center">
                <a href="mailto:careteam@hmtroofing.com" className="cursor-pointer hover:opacity-80 transition-opacity">
                  <Mail className="h-4 w-4 mr-3 text-primary-yellow" />
                </a>
                <a href="mailto:careteam@hmtroofing.com" className="text-gray-300 hover:text-primary-yellow transition-colors duration-200">
                  careteam@hmtroofing.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-primary-yellow mt-1" />
                <span className="text-gray-300" style={{whiteSpace: 'pre-line'}}>
                  {t('footer.location')}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary-yellow transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary-yellow transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary-yellow transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-primary-yellow text-sm transition-colors duration-200"
              >
                {t('footer.privacyPolicy')}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-primary-yellow text-sm transition-colors duration-200"
              >
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
