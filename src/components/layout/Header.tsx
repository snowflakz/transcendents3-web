import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CALENDLY_CONSULTATION_URL } from '../../constants';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Resources', path: '/resources', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Bookkeeping', path: '/services/bookkeeping' },
    { name: 'Business Consulting', path: '/services/consulting' },
    { name: 'Insurance & Retirement Planning', path: '/services/insurance' },
    { name: 'QuickBooks (QBO) Cleanup', path: '/services/quickbooks-cleanup' },
  ];

  const resourceLinks = [
    { name: 'Financial Calculators', path: '/resources/calculators' },
    { name: 'QuickBooks Guides', path: '/resources/quickbooks-guides' },
    { name: 'Webinars & Training', path: '/resources/webinars' },
  ];

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
    setServicesDropdown(false);
  };

  const handleResourceClick = (path: string) => {
    navigate(path);
    setResourcesDropdown(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={isScrolled ? "/logo%20Transcent%202_png.png" : "/other%20logo.png"}
              alt="Transcendents3 - Expert Financial Services for Small and Medium Businesses" 
              className="h-12 w-auto"
              loading="eager"
              width="120"
              height="48"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button 
                    className={`flex items-center font-medium transition-colors ${
                      isScrolled ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-primary-600'
                    }`}
                    onClick={() => {
                      if (link.name === 'Services') {
                        setServicesDropdown(!servicesDropdown);
                        setResourcesDropdown(false);
                      } else if (link.name === 'Resources') {
                        setResourcesDropdown(!resourcesDropdown);
                        setServicesDropdown(false);
                      }
                    }}
                    onMouseEnter={() => {
                      if (dropdownTimeout) clearTimeout(dropdownTimeout);
                      if (link.name === 'Services') {
                        setServicesDropdown(true);
                        setResourcesDropdown(false);
                      } else if (link.name === 'Resources') {
                        setResourcesDropdown(true);
                        setServicesDropdown(false);
                      }
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setServicesDropdown(false);
                        setResourcesDropdown(false);
                      }, 250);
                      setDropdownTimeout(timeout);
                    }}
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                ) : (
                  <Link 
                    to={link.path}
                    onClick={() => {
                      // Scroll to top when navigating to a new page
                      if (location.pathname !== link.path) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`font-medium transition-colors ${
                      location.pathname === link.path 
                        ? (isScrolled ? 'text-primary-600' : 'text-white')
                        : (isScrolled ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-primary-600')
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Services Dropdown */}
                {link.hasDropdown && link.name === 'Services' && (
                  <div 
                    className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 transition-all transform origin-top-left ${
                      servicesDropdown ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                    }`}
                    onMouseEnter={() => {
                      if (dropdownTimeout) clearTimeout(dropdownTimeout);
                      setServicesDropdown(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setServicesDropdown(false), 250);
                      setDropdownTimeout(timeout);
                    }}
                  >
                    {serviceLinks.map((service) => (
                      <button
                        key={service.name}
                        onClick={() => handleServiceClick(service.path)}
                        className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}

                {/* Resources Dropdown */}
                {link.hasDropdown && link.name === 'Resources' && (
                  <div 
                    className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 transition-all transform origin-top-left ${
                      resourcesDropdown ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                    }`}
                    onMouseEnter={() => {
                      if (dropdownTimeout) clearTimeout(dropdownTimeout);
                      setResourcesDropdown(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setResourcesDropdown(false), 250);
                      setDropdownTimeout(timeout);
                    }}
                  >
                    {resourceLinks.map((resource) => (
                      <button
                        key={resource.name}
                        onClick={() => handleResourceClick(resource.path)}
                        className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
                      >
                        {resource.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="primary" size="md" href={CALENDLY_CONSULTATION_URL} external={true}>
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-neutral-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2 space-y-1 bg-white rounded-md shadow-lg">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      className={`w-full flex justify-between items-center px-4 py-2 transition-colors ${
                        isScrolled ? 'text-neutral-800 hover:bg-primary-50 hover:text-primary-600' : 'text-white hover:bg-primary-50 hover:text-primary-600'
                      }`}
                      onClick={() => {
                        if (link.name === 'Services') {
                          setServicesDropdown(!servicesDropdown);
                          setResourcesDropdown(false);
                        } else if (link.name === 'Resources') {
                          setResourcesDropdown(!resourcesDropdown);
                          setServicesDropdown(false);
                        }
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${
                        (link.name === 'Services' && servicesDropdown) || (link.name === 'Resources' && resourcesDropdown) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {link.name === 'Services' && (
                      <div className={`transition-all duration-300 ${servicesDropdown ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                        {serviceLinks.map((service) => (
                          <button
                            key={service.name}
                            onClick={() => { setIsOpen(false); handleServiceClick(service.path); }}
                            className="block w-full text-left pl-8 pr-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {service.name}
                          </button>
                        ))}
                      </div>
                    )}

                    {link.name === 'Resources' && (
                      <div className={`transition-all duration-300 ${resourcesDropdown ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                        {resourceLinks.map((resource) => (
                          <button
                            key={resource.name}
                            onClick={() => { setIsOpen(false); handleResourceClick(resource.path); }}
                            className="block w-full text-left pl-8 pr-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {resource.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsOpen(false);
                      // Scroll to top when navigating to a new page
                      if (location.pathname !== link.path) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`block px-4 py-2 ${
                      location.pathname === link.path 
                        ? (isScrolled ? 'text-primary-600 bg-primary-50' : 'text-white bg-primary-50')
                        : (isScrolled ? 'text-neutral-800 hover:bg-primary-50 hover:text-primary-600' : 'text-white hover:bg-primary-50 hover:text-primary-600')
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <div className="px-4 py-3 border-t border-neutral-100">
              <Button variant="primary" size="sm" fullWidth href={CALENDLY_CONSULTATION_URL} external={true}>
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;