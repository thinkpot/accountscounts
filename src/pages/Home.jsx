import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Animation Variants & Reusable Components ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};

// --- NEW Service Highlight Component (inspired by the image) ---
const ServiceHighlightCard = ({ path, icon, title }) => (
  <motion.div variants={fadeIn}>
    <Link to={path} className="flex flex-col items-center text-center p-4 group">
      <div className="bg-slate-100 p-6 rounded-full transition-all duration-300 group-hover:bg-accent/10 group-hover:scale-110">
        <div className="h-12 w-12 text-primary transition-colors duration-300 group-hover:text-accent">
          {icon}
        </div>
      </div>
      <h3 className="mt-4 font-unbounded text-md font-semibold text-primary transition-colors duration-300 group-hover:text-accent">{title}</h3>
    </Link>
  </motion.div>
);

const ServicesHighlight = () => {
  const services = [
    { path: "/services/taxation", title: "Taxation", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { path: "/services/accounting", title: "Accounting", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg> },
    { path: "/services/payroll", title: "Payroll", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg> },
    { path: "/services/smsf", title: "SMSF", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1h3z" /></svg> },
    { path: "/services/data-entry", title: "Data Entry", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
    { path: "/services/cctv-monitoring", title: "CCTV Monitoring", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
  ];
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="text-center mb-16">
          <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">360° Virtual Staffing Services</motion.h2>
          <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-600">Hire a remote employee in <span className="font-semibold text-primary">any</span> domain</motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {services.map(service => (
            <ServiceHighlightCard key={service.path} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  // Existing data and components for other sections...
  const forBusinessesSteps = [
    { title: "Post Your Job", description: "Describe your project or the role you need to fill. Our intuitive form makes it easy to outline your requirements, from specific software skills to project duration.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
    { title: "Review & Select Talent", description: "Receive proposals from our pool of vetted, professional freelancers. Review their profiles, experience, and certifications to find the perfect match for your business.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" /></svg> },
    { title: "Collaborate Securely", description: "Work with your chosen professional through our secure platform. Manage milestones, share files, and communicate with confidence.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" /></svg> },
    { title: "Approve & Pay", description: "Once the work is completed to your satisfaction, approve the payment through our secure system. We handle the rest.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  ];

  return (
    <div className="bg-white">
      {/* Existing Hero Section */}
      <section className="relative text-white h-screen flex items-center overflow-hidden">
        {/* ... (hero section code remains the same) ... */}
        <div className="absolute inset-0 bg-primary/70"></div>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Your Financial Success is Our Expertise</motion.h1>
          <motion.p variants={fadeIn} className="max-w-3xl mx-auto text-slate-300 text-lg md:text-xl mb-8">Global financial solutions in taxation, accounting, and payroll, designed to let you focus on growing your business.</motion.p>
          <motion.div variants={fadeIn}><Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform inline-block">Schedule a Free Consultation</Link></motion.div>
        </motion.div>
      </section>

      {/* --- NEW SERVICES HIGHLIGHT SECTION --- */}
      <ServicesHighlight />

      {/* Existing "Why Us" Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        {/* ... (why us section code remains the same) ... */}
      </section>

      {/* Existing "How It Works" Section */}
      <section className="py-20 md:py-28 bg-white">
        {/* ... (how it works section code remains the same) ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="text-center mb-16"><motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Our Simple Process</motion.h2></motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">{forBusinessesSteps.map((step, index) => (<motion.div key={index} variants={fadeIn} className="relative p-6 z-10"><div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent/10 text-accent rounded-full font-unbounded text-2xl font-bold ring-8 ring-slate-50">{index + 1}</div><h3 className="font-unbounded text-xl font-bold text-primary mb-2">{step.title}</h3><p className="text-slate-600">{step.description}</p></motion.div>))}</motion.div>
        </div>
      </section>

      {/* Existing Testimonials Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        {/* ... (testimonials section code remains the same) ... */}
      </section>

    </div>
  );
};

export default Home;
