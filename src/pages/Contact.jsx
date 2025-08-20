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

// --- Main Contact Component ---
const Contact = () => {
  return (
    <div className="bg-slate-50">
      {/* 1. Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-primary text-white py-20 md:py-28 text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold">
            Get in Touch
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            We're here to help. Whether you're a business with questions or a professional looking to join, reach out to us.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Main Content Section */}
      <section className="py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12"
        >
          {/* Left Column: Contact Form */}
          <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="font-unbounded text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>
               <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent focus:border-accent"
                ></textarea>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-accent text-primary font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-500 transition duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Contact Details & "Our Commitment" Section */}
          <motion.div variants={fadeIn} className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-unbounded text-xl font-bold text-primary mb-4">Contact Details</h3>
              <div className="flex items-center text-slate-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@accountscounts.com" className="hover:text-accent">info@accountscounts.com</a>
              </div>
               <div className="flex items-start text-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p>Global Operations HQ: <br/> Shimla, (H.P.), India</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-unbounded text-xl font-bold text-primary mb-4">Our Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">&#10003;</span>
                    <p className="text-slate-600"><span className="font-bold text-primary">Vetted Professionals:</span> Every freelancer on our platform is screened for expertise and experience.</p>
                </li>
                 <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">&#10003;</span>
                    <p className="text-slate-600"><span className="font-bold text-primary">Data Security:</span> We prioritize the confidentiality and security of your financial information above all else.</p>
                </li>
                 <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">&#10003;</span>
                    <p className="text-slate-600"><span className="font-bold text-primary">Australian Expertise:</span> Our talent pool specializes in Australian tax law and accounting standards.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;