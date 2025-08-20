import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

// --- Data for the Business Process ---
const forBusinessesSteps = [
  {
    title: "Post Your Job",
    description: "Describe your project or the role you need to fill. Our intuitive form makes it easy to outline your requirements, from specific software skills to project duration.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
  },
  {
    title: "Review & Select Talent",
    description: "Receive proposals from our pool of vetted, professional freelancers. Review their profiles, experience, and certifications to find the perfect match for your business.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" /></svg>
  },
  {
    title: "Collaborate Securely",
    description: "Work with your chosen professional through our secure platform. Manage milestones, share files, and communicate with confidence.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" /></svg>
  },
  {
    title: "Approve & Pay",
    description: "Once the work is completed to your satisfaction, approve the payment through our secure system. We handle the rest.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
];


const HowItWorks = () => {
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
            Hiring Made Simple
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to find, hire, and collaborate with the perfect accounting professional for your business. Here's how it works.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Animated Timeline Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200"></div>
            
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-12 md:space-y-16"
            >
                {forBusinessesSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn}
                    className="md:grid md:grid-cols-2 md:gap-8 items-center relative"
                  >
                    <div className={`hidden md:flex justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="w-8 h-8 bg-accent rounded-full border-4 border-slate-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"></div>
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
          </div>
        </div>
      </section>

      {/* 3. NEW "Why Choose Our Process?" Section with Image */}
       <section className="py-20 md:py-28 bg-white">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="rounded-xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Two professionals having a productive meeting" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div variants={fadeIn} className="pr-0 md:pl-12">
            <h2 className="font-unbounded text-3xl font-bold text-primary mb-4">Why Choose Our Process?</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
             Our platform is designed to remove the friction from hiring, providing you with a direct path to the expertise you need.
            </p>
            <ul className="space-y-4">
                <li className="flex items-start"><span className="text-accent mr-3 mt-1">&#10003;</span><div><h4 className="font-bold text-primary">Access to Vetted Talent</h4><p className="text-slate-600">No more guesswork. Every professional on our platform is screened for experience and expertise.</p></div></li>
                <li className="flex items-start"><span className="text-accent mr-3 mt-1">&#10003;</span><div><h4 className="font-bold text-primary">Total Flexibility</h4><p className="text-slate-600">Hire for short-term projects or long-term engagements, full-time or part-time, all on your terms.</p></div></li>
                <li className="flex items-start"><span className="text-accent mr-3 mt-1">&#10003;</span><div><h4 className="font-bold text-primary">Secure & Streamlined</h4><p className="text-slate-600">From communication to payment, every step is handled securely within our easy-to-use platform.</p></div></li>
            </ul>
             <motion.div variants={fadeIn} className="mt-8">
                 <Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105 inline-block">
                    Post a Job Today
                </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default HowItWorks;