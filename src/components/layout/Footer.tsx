import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    const [base, hash] = path.split('#');
    if (location.pathname === base && hash) {
      // Already on the page, scroll to section
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate, then scroll after navigation
      navigate(base + (hash ? `#${hash}` : ''));
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  return (
    <footer className="bg-primary-800 text-white pt-12 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/other logo.png" 
                alt="Transcendents3 Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-neutral-300 mb-4">
              Professional financial services tailored for small and medium-sized businesses.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/people/Transcendents3/61578216164645/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@transcendents3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-500 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@transcendents3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-500 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/transcendents3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Bookkeeping', path: '/services/bookkeeping' },
                { name: 'Business Consulting', path: '/services/consulting' },
                { name: 'Insurance & Retirement Planning', path: '/services/payroll' },
                { name: 'QuickBooks (QBO) Cleanup', path: '/services/quickbooks-cleanup' },
              ].map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleServiceClick(service.path)}
                    className="text-neutral-300 hover:text-secondary-500 transition-colors flex items-center text-left"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
                { name: 'FAQ', path: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={() => {
                      // Scroll to top when navigating to a new page
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-neutral-300 hover:text-secondary-500 transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-secondary-500 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">
                  5614 W Grand Pkwy, S Ste 102.<br />
                  Richmond, TX. 77407.
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-secondary-500 flex-shrink-0" />
                <a href="tel:+15409299002" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  +1 (540) 929 9002
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-secondary-500 flex-shrink-0" />
                <a href="mailto:info@transcedents3.com" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  info@transcedents3.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              &copy; {currentYear} Transcedent S3. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
              <Link 
                to="/privacy-policy" 
                className="text-neutral-400 hover:text-secondary-500 transition-colors text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Privacy Policy
              </Link>
              <span className="text-neutral-500">•</span>
              <Link 
                to="/cookie-policy" 
                className="text-neutral-400 hover:text-secondary-500 transition-colors text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Cookie Policy
              </Link>
              <span className="text-neutral-500">•</span>
              <Link 
                to="/terms-of-service" 
                className="text-neutral-400 hover:text-secondary-500 transition-colors text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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