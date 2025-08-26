import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Animation Variants for this component ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Reusable card for the grid ---
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

// --- The main component to be exported ---
const ServicesHighlight = () => {
    const services = [
        { path: "/services/taxation", title: "Taxation", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
        { path: "/services/accounting", title: "Accounting", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg> },
        { path: "/services/payroll", title: "Payroll", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg> },
        { path: "/services/smsf", title: "SMSF", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1h3z" /></svg> },
        { path: "/services/data-entry", title: "Data Entry", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
        { path: "/services/cctv-monitoring", title: "CCTV Monitoring", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
        // --- NEW SERVICES ADDED ---
        { path: "#", title: "Freelancing", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.284-2.72-4.682-2.72a3 3 0 00-4.682 2.72 9.094 9.094 0 003.741.479m7.284-2.72a3 3 0 014.682 2.72 9.094 9.094 0 01-3.741.479m-9.321-2.996a3 3 0 00-4.682 2.72 9.094 9.094 0 003.741.479M12 10.5a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
        { path: "#", title: "Website Design", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
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
                    className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8"
                >
                    {services.map(service => (
                        <ServiceHighlightCard key={service.path} {...service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHighlight;