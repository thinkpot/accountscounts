import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const servicesDropdownLinks = [
    { path: '/services/taxation', name: 'Taxation' },
    { path: '/services/accounting', name: 'Accounting' },
    { path: '/services/payroll', name: 'Payroll' },
    { path: '/services/smsf', name: 'SMSF' },
    { path: '/services/data-entry', name: 'Data Entry' },
    { path: '/services/cctv-monitoring', name: 'CCTV Monitoring' },
  ];
  
  // Using NavLink for active styling
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#d4af37' : '#d1d5db', // Gold for active, slate-300 for inactive
  });

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-unbounded text-2xl font-bold text-white">
            Accounts<span className="text-accent">Counts</span>
          </Link>
          
          {/* --- CORRECTED & COMPLETE NAVIGATION --- */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" style={navLinkStyle} className="text-sm font-medium hover:text-white transition-colors">Home</NavLink>
            <NavLink to="/about" style={navLinkStyle} className="text-sm font-medium hover:text-white transition-colors">About Us</NavLink>
            
            {/* Services Dropdown */}
            <motion.div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {/* Using NavLink here as well to highlight when on any services page */}
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
        </div>
      </div>
    </header>
  );
};

export default Header;