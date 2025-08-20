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
      staggerChildren: 0.2
    }
  }
};

const Technology = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative text-white py-20 md:py-32 text-center">
        <div className="absolute inset-0 bg-primary opacity-80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" alt="Modern office with technology" className="absolute inset-0 w-full h-full object-cover"/>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold">
            Secure, Modern & Efficient
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Our platform is built on industry-leading technology to ensure seamless collaboration, data integrity, and complete peace of mind.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Software Expertise Section (New Image-based Design) */}
       <section className="py-20 md:py-28 bg-slate-50">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="pr-0 md:pr-12">
            <h2 className="font-unbounded text-3xl font-bold text-primary mb-4">Expertise Across All Major Platforms</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our freelancers are proficient in the full suite of modern accounting software used by Australian businesses. This ensures they can seamlessly integrate into your existing workflow from day one.
            </p>
             <ul className="space-y-4">
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span><span className="font-bold text-primary mr-2">Cloud Accounting:</span> Xero, QuickBooks, MYOB</li>
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span><span className="font-bold text-primary mr-2">Practice Management:</span> Sage, HandiSoft, APS</li>
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span><span className="font-bold text-primary mr-2">Specialized Tools:</span> BankLink, Simple Fund 360 & more</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeIn} className="rounded-xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop" alt="Person working with accounting software on a laptop" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Our Security Commitment Section */}
      <section className="relative py-20 md:py-28 bg-white">
         <div className="absolute inset-0 bg-white opacity-95 z-10"></div>
         <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Abstract data security background" className="absolute inset-0 w-full h-full object-cover"/>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-20"
        >
          <motion.div variants={fadeIn}>
            <h2 className="font-unbounded text-3xl font-bold text-primary mb-4">Our Security Commitment</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We understand that financial data is your most sensitive asset. Our platform is built with a security-first approach to ensure the complete confidentiality and integrity of your information.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-accent mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Zero Data Leakage Security Wall</h4>
                  <p className="text-slate-600">We employ robust protocols and infrastructure to prevent unauthorized access and ensure your data remains secure.</p>
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
          <motion.div variants={fadeIn} className="hidden md:flex justify-center items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-primary opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Certifications Showcase */}
      <section className="relative text-white py-20 md:py-28">
         <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
         <img src="https://images.unsplash.com/photo-1590650153855-7e4e01854186?q=80&w=2070&auto=format&fit=crop" alt="Professional certifications on a desk" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
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
        </div>
      </section>

    </div>
  );
};

export default Technology;