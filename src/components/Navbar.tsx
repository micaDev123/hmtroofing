import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

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
              ))}
            </div>
          </div>

          {/* Phone and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-gray-700">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">(305) 555-7663</span>
            </div>
            <button className="btn-primary">
              Get Quote
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
            ))}
            <div className="px-3 py-2 border-t mt-4">
              <div className="flex items-center text-gray-700 mb-3">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">(305) 555-7663</span>
              </div>
              <button className="btn-primary w-full">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
