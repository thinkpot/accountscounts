import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesDropdownLinks = [
    { path: '/services/taxation', name: 'Taxation' },
    { path: '/services/accounting', name: 'Accounting' },
    { path: '/services/payroll', name: 'Payroll' },
    { path: '/services/smsf', name: 'SMSF' },
    { path: '/services/data-entry', name: 'Data Entry' },
    { path: '/services/cctv-monitoring', name: 'CCTV Monitoring' },
  ];

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#d4af37' : '#d1d5db',
  });
  
  const mobileNavLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
    color: isActive ? '#d4af37' : '#FFFFFF',
  });

  const allNavLinks = [
      { path: '/', name: 'Home' },
      { path: '/about', name: 'About Us' },
      { path: '/services', name: 'Services' },
      { path: '/how-it-works', name: 'How It Works' },
      { path: '/why-outsource', name: 'Why Outsource' },
      { path: '/technology', name: 'Technology' },
      { path: '/resources-faq', name: 'Resources & FAQ' },
      { path: '/contact', name: 'Contact Us' },
  ];

  return (
    <>
      <header className="bg-primary sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="font-unbounded text-2xl font-bold text-white">
              Accounts<span className="text-accent">Counts</span>
            </Link>

            {/* --- Desktop Navigation (Hidden on Mobile) --- */}
            <nav className="hidden md:flex items-center space-x-6">
                <NavLink to="/" style={navLinkStyle} className="text-sm font-medium hover:text-white transition-colors">Home</NavLink>
                <NavLink to="/about" style={navLinkStyle} className="text-sm font-medium hover:text-white transition-colors">About Us</NavLink>
                
                <motion.div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                >
                <NavLink to="/services" style={navLinkStyle} className="text-sm font-medium hover:text-white flex items-center gap-1 transition-colors">
                    Services
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </NavLink>
                <AnimatePresence>
                    {isDropdownOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden"
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
                
                <NavLink to="/how-it-works" style={navLinkStyle} className="text-sm font-medium hover:text-white transition-colors">How It Works</NavLink>
                <NavLink to="/why-outsource" style={navLinkStyle} className="text-sm font-medium hover:text-white transition-colors">Why Outsource</NavLink>
                <NavLink to="/technology" style={navLinkStyle} className="text-sm font-medium hover:text-white transition-colors">Technology</NavLink>
                <NavLink to="/resources-faq" style={navLinkStyle} className="text-sm font-medium hover:text-white transition-colors">Resources & FAQ</NavLink>
                <NavLink to="/contact" style={navLinkStyle} className="text-sm font-medium hover:text-white transition-colors">Contact Us</NavLink>
            </nav>

            {/* --- Mobile Menu Button (Visible on Mobile) --- */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                {isMobileMenuOpen ? (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> // Close Icon
                ) : (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg> // Hamburger Icon
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-primary/95 backdrop-blur-lg z-40 p-6"
          >
            <nav className="flex flex-col space-y-4">
              {allNavLinks.map(link => (
                 <NavLink
                    key={link.path}
                    to={link.path}
                    style={mobileNavLinkStyle}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-semibold px-4 py-3 rounded-md transition-colors"
                  >
                   {link.name}
                 </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;