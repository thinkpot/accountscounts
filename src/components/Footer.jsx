import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-unbounded text-2xl font-bold">
          Account<span className="text-accent">preneur</span>
        </p>
        <p className="mt-4 text-slate-400">
          Your Financial Success is our Expertise.
        </p>
        <p className="mt-8 text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Accountpreneur. All rights reserved. Website by Shahid Khan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;