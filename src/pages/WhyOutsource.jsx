import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

// --- "Why Us" Accordion Data (from PDF) ---
const whyUsData = [ { title: "High Quality & Precise Solutions", content: "Our platform's vetting process ensures you connect only with top-tier professionals who deliver accurate, high-quality work every time." }, { title: "Technology Driven Services", content: "We leverage a modern, secure platform to make finding, hiring, and collaborating with talent a seamless and efficient experience." }, { title: "Dedicated Team with Expertise", content: "Our core team comes from the industry, ensuring the platform is built with a deep understanding of your specific needs." }, { title: "Transparency", content: "From clear freelancer profiles to secure milestone payments, we facilitate a transparent and trustworthy process from start to finish." }, { title: "Secure & Zero Data Leakage", content: "Your data security is our priority. We use encrypted channels and robust protocols to ensure confidentiality." }, { title: "Customized Solutions", content: "Find professionals with the exact skills you need. Our platform allows for flexible hiring to get customized solutions for your unique business challenges." }, { title: "24/7 Support", content: "Our platform is always on, and our support team is ready to assist you in making the most of our services." }, ];

// --- NEW Benefit Card Component for larger, animated icons ---
const BenefitCard = ({ icon, title }) => (
    <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
      <div className="h-16 w-16 mb-4">
        {icon}
      </div>
      <h3 className="font-unbounded text-lg font-bold text-primary">{title}</h3>
    </motion.div>
);


const WhyOutsource = () => {
  const [expanded, setExpanded] = useState(0);

  // --- NEW Key Benefits Data with Colorful, Animated Icons ---
  const keyBenefits = [
    { title: "Control Capital Costs", icon: <svg className="w-full h-full" viewBox="0 0 64 64"><motion.path initial={{y: 5, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, repeat: Infinity, repeatType: 'reverse'}} fill="#5DE2E7" d="M32 36c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/><path fill="#001f3f" d="M50 18h-8v-6c0-3.3-2.7-6-6-6h-8c-3.3 0-6 2.7-6 6v6h-8c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V22c0-2.2-1.8-4-4-4zm-22-6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v6H28v-6z"/></svg> },
    { title: "Increase Efficiency", icon: <svg className="w-full h-full" viewBox="0 0 64 64"><motion.path initial={{scale: 0.9, opacity: 0.5}} animate={{scale: 1, opacity: 1}} transition={{duration: 0.7, repeat: Infinity, repeatType: 'reverse'}} fill="#5DE2E7" d="m30.2 61.1-2.2-11.8-11.1-4.1 8-9.4-7.9-9.5 11-4.3 2-11.8 12.1 6.5 12-6.6-2 11.9 11.1 4.2-7.9 9.5 7.9 9.5-11 4.3-2 11.8-12-6.5-12.1 6.5z"/><path fill="#001f3f" d="m32 40.8-3.4 9.4-8.8 3.2 6.3-7.5-6.3-7.5 8.8 3.3 3.4 9.4 3.4-9.4 8.8-3.3-6.3 7.5 6.3 7.5-8.8-3.2-3.4-9.4z"/></svg> },
    { title: "Reduce Labour Costs", icon: <svg className="w-full h-full" viewBox="0 0 64 64"><g fill="#001f3f"><motion.path initial={{y:0}} animate={{y:[-3, 0, -3]}} transition={{duration: 1.5, repeat: Infinity}} d="M22.3 33.5c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2-1.4-3.2-3.2-3.2z"/><path d="M49.3 29.5c0-4-3.2-7.2-7.2-7.2s-7.2 3.2-7.2 7.2c0 4 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2zm-25.2 4c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2-1.5-3.2-3.2-3.2z"/></g><path fill="#5DE2E7" d="M37.3 40.6c-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8 4.8-2.1 4.8-4.8c-.1-2.7-2.2-4.8-4.8-4.8z"/></svg> },
    { title: "Focus on Core Business", icon: <svg className="w-full h-full" viewBox="0 0 64 64"><path fill="#001f3f" d="M32 6C17.6 6 6 17.6 6 32s11.6 26 26 26 26-11.6 26-26S46.4 6 32 6zm0 44c-9.9 0-18-8.1-18-18S22.1 14 32 14s18 8.1 18 18-8.1 18-18 18z"/><motion.circle initial={{scale:1}} animate={{scale: [1, 1.2, 1]}} transition={{duration: 1.5, repeat: Infinity}} fill="#5DE2E7" cx="32" cy="32" r="10"/></svg> },
    { title: "Start New Projects Quickly", icon: <svg className="w-full h-full" viewBox="0 0 64 64"><path fill="#001f3f" d="M32 6C17.6 6 6 17.6 6 32s11.6 26 26 26 26-11.6 26-26S46.4 6 32 6zm0 44c-9.9 0-18-8.1-18-18S22.1 14 32 14s18 8.1 18 18-8.1 18-18 18z"/><motion.path initial={{rotate:0}} animate={{rotate:360}} transition={{duration: 8, repeat: Infinity, ease: 'linear'}} fill="#5DE2E7" d="M43.3 30.1 27.6 21c-1.2-.7-2.7.2-2.7 1.6v18.8c0 1.4 1.5 2.3 2.7 1.6l15.7-9.1c1.2-.7 1.2-2.4 0-3.1z"/></svg> },
    { title: "Reduce Risk", icon: <svg className="w-full h-full" viewBox="0 0 64 64"><path fill="#001f3f" d="M32 6c-11.2 0-21 5.6-26 14.1v23.1C6 52.4 17.6 62 32 62s26-9.6 26-28.8V20.1C53 11.6 43.2 6 32 6z"/><motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration:1.5, repeat: Infinity}} stroke="#5DE2E7" stroke-width="4" stroke-miterlimit="10" d="m22.5 31.5 6.7 6.7 12.3-12.3"/></svg> },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
         <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
         <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover"/>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <motion.p variants={fadeIn} className="font-unbounded text-accent font-semibold">YOUR STRATEGIC ADVANTAGE</motion.p>
            <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold mt-2">
              Let Your Time Work For Your Money
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Stop spending valuable time on job processing and administrative tasks. With accountsCounts, you can focus on high-level job review and core business growth while our experts handle the details.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 2. Key Benefits Section - UPDATED */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="text-center mb-16">
                 <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Benefits To You</motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit) => (
                <BenefitCard key={benefit.title} icon={benefit.icon} title={benefit.title} />
              ))}
            </motion.div>
        </div>
      </section>

      {/* 3. Why Us Section with Accordion */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="text-center mb-12">
                 <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Why Choose accountsCounts?</motion.h2>
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
                                    <p className="py-4 text-slate-600 border-t border-slate-200">{item.content}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
             ))}
           </div>
        </div>
      </section>
      
      {/* 4. Final CTA Section */}
      <section className="relative text-white py-20">
         <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
         <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team discussing work" className="absolute inset-0 w-full h-full object-cover"/>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold">
                Ready to Build a More Efficient Business?
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
               Leverage our expert talent to reduce costs, improve accuracy, and focus on what you do best—growing your business.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
                 <Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition duration-300 transform hover:scale-105 inline-block mt-8">
                    Get Started Today
                </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyOutsource;