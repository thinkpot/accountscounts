import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all sub-service components
import Taxation from './services/Taxation';
import Accounting from './services/Accounting';
import Payroll from './services/Payroll';
import SMSF from './services/SMSF';
import DataEntry from './services/DataEntry';
import CCTVMonitoring from './services/CCTVMonitoring';

// --- Animation Variants ---
const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: 'easeInOut' } }
};

// --- Data Structure for Services ---
// This makes the component cleaner and easier to update
const servicesData = [
  { id: 'taxation', title: 'Taxation', component: <Taxation />, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
  { id: 'accounting', title: 'Accounting', component: <Accounting />, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg> },
  { id: 'payroll', title: 'Payroll', component: <Payroll />, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg> },
  { id: 'smsf', title: 'SMSF', component: <SMSF />, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1h3z" /></svg> },
  { id: 'dataEntry', title: 'Data Entry', component: <DataEntry />, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
  { id: 'cctvMonitoring', title: 'CCTV Monitoring', component: <CCTVMonitoring />, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
];

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0].id); // Default to the first service

  const activeServiceComponent = servicesData.find(service => service.id === activeService)?.component;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-unbounded font-extrabold text-primary mb-4">
            Our Expertise
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of services. Select a category to see how we can help your business thrive.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Left Sidebar: Service Navigation */}
          <aside className="md:col-span-1">
            <nav className="space-y-2">
              {servicesData.map(service => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg text-left transition-colors duration-300 ${
                    activeService === service.id
                      ? 'bg-accent/10 text-accent font-bold shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {service.icon}
                  <span className="font-unbounded text-sm">{service.title}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Content Area: Service Details */}
          <main className="md:col-span-3 bg-white p-6 sm:p-8 rounded-xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {activeServiceComponent}
              </motion.div>
            </AnimatePresence>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Services;