import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// --- Software Data (from your PDF) ---
const softwareData = [
  { name: 'Xero', description: 'Cloud accounting for small to medium businesses.', logoUrl: 'https://placehold.co/150x60/ffffff/8c92ac?text=XERO' },
  { name: 'QuickBooks', description: 'Comprehensive accounting and financial management.', logoUrl: 'https://placehold.co/150x60/ffffff/8c92ac?text=QuickBooks' },
  { name: 'MYOB', description: 'Australia\'s leading business management software.', logoUrl: 'https://placehold.co/150x60/ffffff/8c92ac?text=MYOB' },
  { name: 'Sage HandiSoft', description: 'Practice management for accounting firms.', logoUrl: 'https://placehold.co/150x60/ffffff/8c92ac?text=Sage+HandiSoft' },
  { name: 'BankLink', description: 'Securely streamlined accounting data automation.', logoUrl: 'https://placehold.co/150x60/ffffff/8c92ac?text=BankLink' },
  { name: 'APS', description: 'Advanced practice management and tax solutions.', logoUrl: 'https://placehold.co/150x60/ffffff/8c92ac?text=APS' },
  { name: 'Simple Fund 360', description: 'Leading software for SMSF administration.', logoUrl: 'https://placehold.co/150x60/ffffff/8c92ac?text=Simple+Fund' },
  { name: 'XPA & HandiLedger', description: 'Powerful tools for financial reporting and ledgers.', logoUrl: 'https://placehold.co/150x60/ffffff/8c92ac?text=XPA' },
];


// --- Main Technology Component ---
const Technology = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-primary text-white py-20 md:py-28 text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold">
            Secure, Modern & Efficient
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Our platform is built on industry-leading technology to ensure seamless collaboration, data integrity, and complete peace of mind.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Software We Master Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">
              Find Freelancers with Certified Expertise In:
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {softwareData.map((software) => (
              <motion.div
                key={software.name}
                variants={fadeIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center transition-shadow duration-300 hover:shadow-2xl"
              >
                <img src={software.logoUrl} alt={`${software.name} logo`} className="h-12 mb-4" />
                <h3 className="font-unbounded text-md font-bold text-primary">{software.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{software.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Our Security Commitment Section */}
      <section className="py-20 md:py-28 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <h2 className="font-unbounded text-3xl font-bold text-primary mb-4">Our Security Commitment</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We understand that financial data is your most sensitive asset. Our platform is built with a security-first approach to ensure the complete confidentiality and integrity of your information.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-accent mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Zero Data Leakage Security Wall</h4>
                  <p className="text-slate-600">We employ robust protocols and infrastructure to prevent unauthorized access and ensure your data remains secure within the platform.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-accent mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Confidential Communication</h4>
                  <p className="text-slate-600">All communication and file sharing between you and your freelance professional are encrypted and protected.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn} className="flex justify-center items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-primary opacity-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Certifications Showcase */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
                className="font-unbounded text-3xl md:text-4xl font-bold"
            >
                A Hub for Certified Professionals
            </motion.h2>
            <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
                className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto"
            >
                Our vetting process ensures you connect with freelancers who hold industry-recognized certifications, guaranteeing a high standard of expertise.
            </motion.p>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={staggerContainer}
              className="mt-8 flex flex-col sm:flex-row gap-8 justify-center"
            >
              <motion.div variants={fadeIn} className="bg-white/10 p-4 rounded-lg flex items-center gap-4">
                <img src="https://placehold.co/40x40/ffffff/ffffff?text=X" alt="Xero Certified" className="rounded-full" />
                <span className="font-semibold">Xero Advisor & Payroll Certified</span>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-white/10 p-4 rounded-lg flex items-center gap-4">
                <img src="https://placehold.co/40x40/ffffff/ffffff?text=qb" alt="QuickBooks Certified" className="rounded-full" />
                <span className="font-semibold">QuickBooks Online ProAdvisor</span>
              </motion.div>
            </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Technology;