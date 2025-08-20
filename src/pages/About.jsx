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

// --- Reusable Value Card Component ---
const ValueCard = ({ icon, title, children }) => (
  <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="font-unbounded text-lg font-bold text-primary mb-2">{title}</h3>
    <p className="text-slate-600 text-sm">{children}</p>
  </motion.div>
);

// --- Main About Component ---
const About = () => {
  return (
    <div className="bg-slate-50">
      {/* 1. Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-primary text-white py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* --- THIS LINE IS CORRECTED --- */}
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold">About AccountsCounts</motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Connecting Australia's businesses with elite, vetted accounting talent.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Our Story Section */}
      <section className="py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <h2 className="font-unbounded text-3xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              AccountsCounts was born from a simple observation: the way businesses and accounting professionals connect is changing. Australian businesses needed a flexible way to access top-tier financial expertise without the overhead of traditional hiring. Simultaneously, expert accountants and bookkeepers were seeking more autonomy and direct access to meaningful projects.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We created this platform to bridge that gap. Founded on a deep understanding of the accounting industry, we built a trusted digital marketplace that empowers both sides—providing businesses with the talent they need to thrive, and professionals with the freedom to build their own success.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="rounded-xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="A modern business meeting" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Mission & Goal Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="font-unbounded text-3xl font-bold text-primary mb-12">Our Mission & Goal</motion.h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <motion.div variants={fadeIn}>
                <h3 className="font-unbounded text-2xl font-semibold text-primary mb-3">Our Mission</h3>
                <p className="text-slate-600">To provide the highest quality accounting, audit, tax, and consultancy services. We continually strive to provide exceptional, industry-specific service by connecting businesses with the perfect professional for the job.</p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <h3 className="font-unbounded text-2xl font-semibold text-primary mb-3">Our Goal</h3>
                <p className="text-slate-600">To meet our professional responsibilities in an ethical and fair manner, providing a platform of the highest quality to our clients that consistently exceeds their expectations.</p>
              </motion.div>
            </div>
            <motion.div variants={fadeIn} className="mt-12 bg-slate-100 border-l-4 border-accent p-6 rounded-r-lg max-w-3xl mx-auto text-left">
              <p className="text-slate-700 italic">"That's why we are approaching CPAs, CAs & other Accounting Professionals rather than directly striking on clients."</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Our Core Values Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="font-unbounded text-3xl font-bold text-primary">Our Core Values</motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="High Quality & Precision">
              We ensure every professional on our platform is vetted for excellence, providing precise and reliable solutions.
            </ValueCard>
            <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>} title="Technology Driven">
              Leveraging modern technology to make hiring and collaboration seamless, efficient, and effective.
            </ValueCard>
            <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.781-4.121" /></svg>} title="Dedicated Expertise">
              Our platform is built by a dedicated team with deep accounting expertise, ensuring quality and relevance.
            </ValueCard>
             <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} title="Transparent Process">
              Clarity is key. From pricing to project milestones, we facilitate a transparent process for everyone.
            </ValueCard>
             <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>} title="Secure & Zero Data Leakage">
              We prioritize data security with robust protocols to ensure confidentiality and peace of mind.
            </ValueCard>
             <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2m0 4v2m8-12a2 2 0 100 4m0-4a2 2 0 110 4m0 4v2m0-4v-2" /></svg>} title="Customized Solutions">
              Our platform connects you with professionals who can provide tailored solutions that fit your specific business needs.
            </ValueCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;