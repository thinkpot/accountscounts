import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// --- Data for the two processes ---
const forBusinessesSteps = [
  {
    title: "Post Your Job",
    description: "Describe your project or the role you need to fill. Our intuitive form makes it easy to outline your requirements, from specific software skills to project duration.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
  },
  {
    title: "Review & Select Talent",
    description: "Receive proposals from our pool of vetted, professional freelancers. Review their profiles, experience, and certifications to find the perfect match for your business.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" /></svg>
  },
  {
    title: "Collaborate Securely",
    description: "Work with your chosen professional through our secure platform. Manage milestones, share files, and communicate with confidence.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" /></svg>
  },
  {
    title: "Approve & Pay",
    description: "Once the work is completed to your satisfaction, approve the payment through our secure system. We handle the rest.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
];

const forFreelancersSteps = [
  {
    title: "Create Your Profile",
    description: "Showcase your skills, certifications, and experience. Our guided profile builder helps you stand out to potential clients.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-6 0h6" /></svg>
  },
  {
    title: "Find Opportunities",
    description: "Browse relevant job postings from quality Australian businesses. Our platform matches you with projects that fit your expertise.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  },
   {
    title: "Submit Your Proposal",
    description: "Craft a winning proposal to showcase your value to the client. Clearly outline your approach, timeline, and rates.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Deliver Great Work & Get Paid",
    description: "Complete the project using our secure collaboration tools. Once the client approves, your payment is processed promptly and securely.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
];


const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('businesses');
  const activeSteps = activeTab === 'businesses' ? forBusinessesSteps : forFreelancersSteps;

  return (
    <div className="bg-slate-50">
       {/* 1. Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-white text-center py-20 md:py-28 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold text-primary">
            A Simple, Transparent Process
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're hiring talent or looking for your next project, our process is designed for clarity, security, and success.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Main Content & Timeline Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
            className="flex justify-center mb-16"
          >
            <div className="bg-slate-200 p-1.5 rounded-lg flex gap-2">
              <motion.button variants={fadeIn} onClick={() => setActiveTab('businesses')} className={`px-6 py-2 rounded-md font-unbounded text-sm transition-colors ${activeTab === 'businesses' ? 'bg-primary text-white shadow' : 'text-slate-700 hover:bg-slate-300'}`}>
                For Businesses
              </motion.button>
              <motion.button variants={fadeIn} onClick={() => setActiveTab('freelancers')} className={`px-6 py-2 rounded-md font-unbounded text-sm transition-colors ${activeTab === 'freelancers' ? 'bg-primary text-white shadow' : 'text-slate-700 hover:bg-slate-300'}`}>
                For Freelancers
              </motion.button>
            </div>
          </motion.div>

          {/* Animated Timeline */}
          <div className="relative">
            {/* The vertical line */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="space-y-12"
              >
                {activeSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn}
                    className="md:grid md:grid-cols-2 md:gap-8 items-center relative"
                  >
                    <div className={`flex md:justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="hidden md:block w-8 h-8 bg-accent rounded-full border-4 border-slate-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"></div>
                    </div>

                    <div className={`p-8 rounded-xl shadow-lg bg-white ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="flex items-center gap-4 mb-3">
                         <div className="bg-accent/10 text-accent p-3 rounded-full">{step.icon}</div>
                         <div>
                            <p className="text-accent font-bold text-sm">STEP {index + 1}</p>
                            <h3 className="font-unbounded text-xl font-bold text-primary">{step.title}</h3>
                         </div>
                      </div>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;