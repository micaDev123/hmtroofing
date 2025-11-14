import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: '/', type: 'route' },
    { name: t('nav.services'), href: '/services', type: 'route' },
    { name: t('nav.gallery'), href: '#gallery', type: 'scroll' },
    { name: t('nav.contact'), href: '/contact', type: 'route' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle hash navigation when component mounts or location changes
  useEffect(() => {
    if (location.hash === '#gallery') {
      setTimeout(() => {
        const element = document.getElementById('gallery');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (item: any) => {
    if (item.type === 'scroll') {
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/#gallery');
        // Use setTimeout to ensure navigation completes before scrolling
        setTimeout(() => {
          const element = document.getElementById('gallery');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Scroll to gallery section
        const element = document.getElementById('gallery');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/HMT_duotone_1.svg"
                alt="HMT Roofing Logo" 
                className="h-10 w-auto sm:h-12 md:h-14 transition-all duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                item.type === 'scroll' ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="px-3 py-2 text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-primary-green"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-green border-b-2 border-primary-green'
                        : 'text-gray-700 hover:text-primary-green'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Email, Phone, Language Selector, and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:careteam@hmtroofing.com" className="flex items-center text-gray-700 hover:text-primary-green transition-colors duration-200" title="Email us">
              <Mail className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">{t('nav.phone')}</span>
              <div className="flex items-center gap-1 text-xs">
                <a href="sms:+19545540484" className="text-primary-green hover:underline">
                  Text
                </a>
                <span className="text-gray-400">|</span>
                <a href="tel:+19545540484" className="text-primary-green hover:underline">
                  Call
                </a>
              </div>
            </div>
            <LanguageSelector />
            <button className="btn-primary">
              {t('nav.getQuote')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-green focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              item.type === 'scroll' ? (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 text-gray-700 hover:text-primary-green hover:bg-gray-50"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-green bg-green-50'
                      : 'text-gray-700 hover:text-primary-green hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="px-3 py-2 border-t mt-4">
              <a href="mailto:careteam@hmtroofing.com" className="flex items-center text-gray-700 hover:text-primary-green transition-colors duration-200 mb-3">
                <Mail className="h-4 w-4 mr-2" />
                <span className="font-semibold">careteam@hmtroofing.com</span>
              </a>
              <a href="tel:+19545540484" className="flex items-center text-gray-700 hover:text-primary-green transition-colors duration-200 mb-3">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">{t('nav.phone')}</span>
              </a>
              <div className="mb-3">
                <LanguageSelector />
              </div>
              <button className="btn-primary w-full">
                {t('nav.getQuote')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
