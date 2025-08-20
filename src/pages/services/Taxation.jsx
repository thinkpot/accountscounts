import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants & Reusable Components ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};
const ServiceDetailCard = ({ icon, title, description }) => (
  <motion.div variants={fadeIn} whileHover={{ y: -8, scale: 1.03 }} className="bg-slate-50/50 p-6 rounded-lg flex items-start cursor-pointer transition-shadow duration-300 hover:shadow-xl">
    <div className="flex-shrink-0 text-accent mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="font-unbounded text-md font-bold text-primary">{title}</h3>
      <p className="text-slate-600 mt-1 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Taxation = () => {
  const taxServices = [
    { title: "Taxation for all Structures", description: "Expert tax advice and compliance for Individuals, Partnerships, Trusts, and Companies.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { title: "Tax Return Preparation", description: "Data entry and software feeding for GST Listings, Tax Liability Reports, and annual returns.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { title: "BAS & IAS Lodgement", description: "Preparation and lodgement of Business and Instalment Activity Statements for Australian businesses.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
    { title: "PAYG Management", description: "Handling PAYG Instalments from Doc ID and managing PAYG withholding amounts accurately.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: "Tax Planning & Advisory", description: "Strategic advice on provisions like Division 7A, profit distribution, and finalizing financial statements.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
    { title: "Capital Gains Tax (CGT)", description: "Expert handling of Capital Gains Tax events, ensuring compliance and optimal outcomes.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section for Taxation Page */}
      <section className="bg-primary text-white py-20 md:py-28 text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold">Taxation Services</motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Navigate Australian tax law with confidence. Our vetted freelancers provide comprehensive tax solutions to ensure compliance and maximize your financial efficiency.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Key Benefits Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-unbounded text-3xl font-bold text-primary">Why Outsource Your Tax Needs?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="p-4">
                <h3 className="font-unbounded text-lg font-bold text-primary mb-2">Ensure Compliance</h3>
                <p className="text-slate-600">Stay up-to-date with ever-changing Australian tax laws and avoid costly penalties.</p>
            </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="p-4">
                <h3 className="font-unbounded text-lg font-bold text-primary mb-2">Maximize Deductions</h3>
                <p className="text-slate-600">Our experts identify every possible deduction and credit to minimize your tax liability.</p>
            </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="p-4">
                <h3 className="font-unbounded text-lg font-bold text-primary mb-2">Strategic Advice</h3>
                <p className="text-slate-600">Receive proactive advice on tax planning and structuring to support your business goals.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="py-20 md:py-28 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-unbounded text-3xl font-bold text-primary">Our Comprehensive Tax Services</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {taxServices.map((service) => (
                <ServiceDetailCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Taxation;