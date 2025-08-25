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

const Contact = () => {
  return (
    <div className="bg-slate-50">
      {/* 1. Hero Section */}
      <motion.section
        initial="hidden" animate="visible" variants={staggerContainer}
        className="bg-primary text-white py-20 md:py-28 text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold">
            Contact Us
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            We're here to help. Reach out to us with your questions, and we'll get back to you shortly.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Office Locations Section */}
       <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="text-center mb-16">
                 <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Our Offices</motion.h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* India Office */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="font-unbounded text-xl font-bold text-primary">Global Operations HQ (India)</h3>
                    <p className="text-slate-500 mt-1 mb-4">Feel free to contact us on any of the below numbers</p>
                    <div className="space-y-3 text-slate-700">
                        <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Shimla, (H.P.), India</p>
                        <a href="mailto:info@accountscounts.com" className="flex items-center hover:text-accent"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>info@accountscounts.com</a>
                    </div>
                </motion.div>
                {/* Australia Office */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="font-unbounded text-xl font-bold text-primary">Australian Sales Office</h3>
                    <p className="text-slate-500 mt-1 mb-4">For local inquiries and partnership opportunities</p>
                     <div className="space-y-3 text-slate-700">
                         <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Melbourne, VIC, Australia</p>
                        <a href="mailto:sales.au@accountscounts.com" className="flex items-center hover:text-accent"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>sales.au@accountscounts.com</a>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 3. Main Content Section with Form and Map */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} >
            <h2 className="font-unbounded text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              {/* Form fields are unchanged */}
              <div><label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label><input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent focus:border-accent" /></div>
              <div><label htmlFor="company" className="block text-sm font-medium text-slate-700">Company (Optional)</label><input type="text" name="company" id="company" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent focus:border-accent" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label><input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent focus:border-accent" /></div>
              <div><label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label><textarea name="message" id="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent focus:border-accent"></textarea></div>
              <div><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full bg-accent text-primary font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-500 transition duration-300">Send Message</motion.button></div>
            </form>
          </motion.div>

          {/* Right Column: Map and Image */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="space-y-8">
            <div className="rounded-xl shadow-lg overflow-hidden h-80">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109315.75336829119!2d77.1001124296613!3d31.07185368560193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1678886 Shimla, Himachal Pradesh, India" 
                    width="100%" 
                    height="100%" 
                    style={{ border:0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="rounded-xl shadow-lg overflow-hidden h-80">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Professional team in a meeting" className="w-full h-full object-cover"/>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;