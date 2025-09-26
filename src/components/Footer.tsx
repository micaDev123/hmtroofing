import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const services = [
    'New Roofs',
    'Re-Roofing',
    'Roof Repairs',
    'Maintenance',
    'Emergency Service'
  ];

  const roofingSystems = [
    'Tile Roofing',
    'Asphalt Shingle',
    'Built-up Roofing',
    'Metal Roofing',
    'Coating Systems'
  ];

  return (
    <footer className="bg-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-primary-yellow mb-4">
              HMT Roofing
            </div>
            <p className="text-gray-300 mb-4">
              Professional roofing services in South Florida. Licensed, certified, and trusted by homeowners and businesses.
            </p>
            <div className="text-sm text-gray-400">
              <p>Licensed & Certified</p>
              <p className="font-semibold">CCC1336315</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roofing Systems */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Roofing Systems</h3>
            <ul className="space-y-2">
              {roofingSystems.map((system) => (
                <li key={system}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-200"
                  >
                    {system}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary-yellow" />
                <span className="text-gray-300">(305) 555-7663</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary-yellow" />
                <span className="text-gray-300">info@hmtroofing.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-primary-yellow mt-1" />
                <span className="text-gray-300">
                  Miami, FL<br />
                  South Florida
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
              © 2024 HMT Roofing. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-primary-yellow text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-primary-yellow text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
