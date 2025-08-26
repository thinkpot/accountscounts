import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- Social Links ---
const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.214 3.793 4.649-.65.177-1.336.213-2.033.188.606 1.956 2.348 3.374 4.422 3.415-1.83 1.446-4.145 2.295-6.658 2.295-.432 0-.86-.025-1.284-.076 2.016 1.295 4.414 2.04 6.966 2.04 8.356 0 12.934-6.924 12.934-12.934 0-.196 0-.392-.014-.586.887-.64 1.656-1.445 2.269-2.355z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
];

const servicesDropdownLinks = [
  { path: '/services/taxation', name: 'Taxation' },
  { path: '/services/accounting', name: 'Accounting' },
  { path: '/services/payroll', name: 'Payroll' },
  { path: '/services/smsf', name: 'SMSF' },
  { path: '/services/data-entry', name: 'Data Analysis' },
  { path: '/services/cctv-monitoring', name: 'CCTV Monitoring' },
  { path: '/services/freelancing', name: 'Freelancing' },
  { path: '/services/website-design', name: 'Web Design' },
];

const allNavLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/how-it-works', name: 'Process' },
  { path: '/why-outsource', name: 'Why Us' },
  // { path: '/technology', name: 'Tech' },
  { path: '/resources-faq', name: 'Resources' },
  { path: '/contact', name: 'Contact' },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();
  const isServicesActive = location.pathname.startsWith('/services');

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#d4af37' : '#d1d5db',
  });

  const servicesLinkStyle = {
    color: isServicesActive ? '#d4af37' : '#d1d5db',
  };

  const mobileNavLinkStyle = (isActive) => ({
    backgroundColor: isActive ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
    color: isActive ? '#d4af37' : '#FFFFFF',
  });

  return (
    <>
      <header className="bg-primary sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src="/logo.png" alt="AccountsCounts Logo" className="h-10 w-auto" />
              <span className="font-unbounded text-lg lg:text-xl font-bold text-white ml-2">
                accounts<span className="text-accent">Counts</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center">
              <nav className="flex items-center space-x-3">
                {allNavLinks.map(link => {
                  if (link.name === 'Services') {
                    return (
                      <motion.div
                        key={link.path}
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <NavLink
                          to="/services"
                          style={servicesLinkStyle}
                          className="text-sm font-semibold hover:text-accent flex items-center gap-1 transition-colors"
                        >
                          Services
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </NavLink>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden"
                            >
                              <div className="p-1">
                                {servicesDropdownLinks.map(service => (
                                  <Link
                                    key={service.path}
                                    to={service.path}
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary rounded-md"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }
                  return (
                    <NavLink key={link.path} to={link.path} style={navLinkStyle} className="text-sm font-semibold hover:text-accent transition-colors">{link.name}</NavLink>
                  );
                })}
              </nav>

              {/* CTA Button, Socials, and Flags */}
              <div className="flex items-center ml-4">
                <Link to="/contact" className="bg-accent text-primary font-bold text-sm py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors whitespace-nowrap">
                    Hire Your Expert
                </Link>
                <div className="flex items-center space-x-3 pl-4 ml-4 border-l border-slate-700">
                  {socialLinks.map(link => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                      <span className="sr-only">{link.name}</span>
                      {link.icon}
                    </a>
                  ))}
                </div>
                <div className="flex items-center space-x-2 pl-4 ml-4 border-l border-slate-700">
                    <img src="https://flagcdn.com/in.svg" width="20" alt="India Flag" title="India"/>
                    <img src="https://flagcdn.com/au.svg" width="20" alt="Australia Flag" title="Australia"/>
                    <img src="https://flagcdn.com/us.svg" width="20" alt="USA Flag" title="USA"/>
                    <img src="https://flagcdn.com/ca.svg" width="20" alt="Canada Flag" title="Canada"/>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-primary/95 backdrop-blur-lg z-40 p-6 flex flex-col"
          >
            <nav className="flex flex-col space-y-2">
              {allNavLinks.map(link => {
                if (link.name === 'Services') {
                  const isActive = location.pathname.startsWith('/services');
                  return (
                    <div key={link.path}>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        style={mobileNavLinkStyle(isActive)}
                        className="w-full flex justify-between items-center text-lg font-semibold px-4 py-3 rounded-md transition-colors"
                      >
                        <span>Services</span>
                        <motion.div animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 mt-2 space-y-2"
                          >
                            {servicesDropdownLinks.map(serviceLink => (
                              <NavLink
                                key={serviceLink.path}
                                to={serviceLink.path}
                                style={({ isActive }) => mobileNavLinkStyle(isActive)}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-base font-semibold px-4 py-2 rounded-md transition-colors"
                              >
                                {serviceLink.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    style={({ isActive }) => mobileNavLinkStyle(isActive)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-semibold px-4 py-3 rounded-md transition-colors"
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-700 flex flex-col items-center">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-primary font-bold text-center w-full py-3 px-4 rounded-md hover:bg-opacity-80 transition-colors mb-6">
                    Hire Your Expert
                </Link>
              <div className="flex justify-center space-x-6">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-3 mt-6">
                <img src="https://flagcdn.com/in.svg" width="24" alt="India Flag" title="India"/>
                <img src="https://flagcdn.com/au.svg" width="24" alt="Australia Flag" title="Australia"/>
                <img src="https://flagcdn.com/us.svg" width="24" alt="USA Flag" title="USA"/>
                <img src="https://flagcdn.com/ca.svg" width="24" alt="Canada Flag" title="Canada"/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
