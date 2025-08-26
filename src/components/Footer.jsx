import React from 'react';
import { Link } from 'react-router-dom';

// --- (Social Media Links Data is unchanged) ---
const socialLinks = [ { name: 'Facebook', href: '#', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg> }, { name: 'Twitter', href: '#', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.214 3.793 4.649-.65.177-1.336.213-2.033.188.606 1.956 2.348 3.374 4.422 3.415-1.83 1.446-4.145 2.295-6.658 2.295-.432 0-.86-.025-1.284-.076 2.016 1.295 4.414 2.04 6.966 2.04 8.356 0 12.934-6.924 12.934-12.934 0-.196 0-.392-.014-.586.887-.64 1.656-1.445 2.269-2.355z" /></svg> }, { name: 'LinkedIn', href: '#', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg> },];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
               <img src="/logo.png" alt="AccountsCounts Logo" className="h-10 w-auto mr-3" />
               <span className="font-unbounded text-xl font-bold text-white">
                Account<span className="text-accent">Counts</span>
              </span>
            </Link>
            <p className="mt-4 text-slate-400 text-sm max-w-xs">
              Your Financial Success is our Expertise.
            </p>
          </div>

          <div> <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300">Services</h3> <ul className="mt-4 space-y-2"> <li><Link to="/services/taxation" className="text-slate-400 hover:text-white text-sm">Taxation</Link></li> <li><Link to="/services/accounting" className="text-slate-400 hover:text-white text-sm">Accounting</Link></li> <li><Link to="/services/payroll" className="text-slate-400 hover:text-white text-sm">Payroll</Link></li> <li><Link to="/services/smsf" className="text-slate-400 hover:text-white text-sm">SMSF</Link></li> <li><Link to="/services/data-entry" className="text-slate-400 hover:text-white text-sm">Data Entry</Link></li> <li><Link to="/services/cctv-monitoring" className="text-slate-400 hover:text-white text-sm">CCTV Monitoring</Link></li> </ul> </div>
          <div> <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300">Company</h3> <ul className="mt-4 space-y-2"> <li><Link to="/about" className="text-slate-400 hover:text-white text-sm">About Us</Link></li> <li><Link to="/how-it-works" className="text-slate-400 hover:text-white text-sm">How It Works</Link></li> <li><Link to="/why-outsource" className="text-slate-400 hover:text-white text-sm">Why Outsource</Link></li> <li><Link to="/technology" className="text-slate-400 hover:text-white text-sm">Technology</Link></li> </ul> </div>
          <div> <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300">Support</h3> <ul className="mt-4 space-y-2"> <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm">Contact Us</Link></li> <li><Link to="/resources-faq" className="text-slate-400 hover:text-white text-sm">FAQ</Link></li> </ul> </div>
          <div className="col-span-2 md:col-span-1"> <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300">Connect With Us</h3> <div className="flex space-x-5 mt-4"> {socialLinks.map(link => ( <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"> <span className="sr-only">{link.name}</span> {link.icon} </a> ))} </div> </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
           <p>&copy; {new Date().getFullYear()} AccountsCounts. All rights reserved. Website by GammaOne.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;