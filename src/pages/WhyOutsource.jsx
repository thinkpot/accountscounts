import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

// --- Key Benefits Data (from PDF) ---
const keyBenefits = [
  { title: "Control Capital Costs", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg> },
  { title: "Increase Efficiency", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { title: "Reduce Labour Costs", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg> },
  { title: "Focus on Your Core Business", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M12 14h.01" /></svg> },
  { title: "Start New Projects Quickly", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: "Reduce Risk", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
];

// --- "Why Us" Accordion Data (from PDF) ---
const whyUsData = [
  { title: "High Quality & Precise Solutions", content: "Our platform's vetting process ensures you connect only with top-tier professionals who deliver accurate, high-quality work every time." },
  { title: "Technology Driven Services", content: "We leverage a modern, secure platform to make finding, hiring, and collaborating with talent a seamless and efficient experience." },
  { title: "Dedicated Team with Expertise", content: "Our core team comes from the industry, ensuring the platform is built with a deep understanding of your specific needs." },
  { title: "Transparency", content: "From clear freelancer profiles to secure milestone payments, we facilitate a transparent and trustworthy process from start to finish." },
  { title: "Secure & Zero Data Leakage", content: "Your data security is our priority. We use encrypted channels and robust protocols to ensure confidentiality." },
  { title: "Customized Solutions", content: "Find professionals with the exact skills you need. Our platform allows for flexible hiring to get customized solutions for your unique business challenges." },
  { title: "24/7 Support", content: "Our platform is always on, and our support team is ready to assist you in making the most of our services." },
];


const WhyOutsource = () => {
  const [expanded, setExpanded] = useState(0); // Default first item open

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
         <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
         <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover"/>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        >
          <div className="text-center">
            <motion.p variants={fadeIn} className="font-unbounded text-accent font-semibold">THE STRATEGIC ADVANTAGE</motion.p>
            <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold mt-2">
              Let Your Time Work For Your Money
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Stop spending valuable time on job processing and administrative tasks. With AccountsCounts, you can focus on high-level job review and core business growth while our experts handle the details.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 2. Key Benefits Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="text-center mb-16">
                 <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Benefits To You</motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit) => (
                <motion.div key={benefit.title} variants={fadeIn} className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-accent inline-block mb-4">{benefit.icon}</div>
                  <h3 className="font-unbounded text-lg font-bold text-primary">{benefit.title}</h3>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </section>

      {/* 3. Why Us Section with Accordion */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="text-center mb-12">
                 <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Why Choose AccountsCounts?</motion.h2>
           </motion.div>
           <div className="space-y-4">
             {whyUsData.map((item, index) => (
                <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} variants={fadeIn}>
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <motion.h3
                            initial={false}
                            onClick={() => setExpanded(expanded === index ? false : index)}
                            className="flex justify-between items-center p-5 cursor-pointer bg-slate-50 hover:bg-slate-100"
                        >
                            <span className="font-unbounded font-semibold text-primary">{item.title}</span>
                            <motion.div animate={{ rotate: expanded === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </motion.div>
                        </motion.h3>
                        <AnimatePresence initial={false}>
                            {expanded === index && (
                                <motion.div
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: 'auto' },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    className="px-5"
                                >
                                    <p className="py-4 text-slate-600">{item.content}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default WhyOutsource;