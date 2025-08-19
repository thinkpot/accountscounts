import React from 'react';

// The `setPage` prop is a function passed down from App.jsx to change the current page
const Header = ({ setPage }) => {
  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'How It Works', page: 'howItWorks' },
    { name: 'Why Outsource', page: 'whyOutsource' },
    { name: 'Technology', page: 'technology' },
    { name: 'Resources & FAQ', page: 'resources' },
    { name: 'Contact Us', page: 'contact' },
  ];

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={() => setPage('home')} className="font-unbounded text-2xl font-bold text-white">
              Accounts<span className="text-accent">Counts</span>
            </a>
          </div>

          {/* Desktop Navigation (placeholder) */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.page} href="#" onClick={() => setPage(link.page)} className="text-sm font-medium text-slate-300 hover:text-white transition duration-300">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;