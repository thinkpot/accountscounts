import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- (Animation Variants are unchanged) ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};

// --- UPDATED Data for Service Cards ---
const servicesData = [
    { path: '/services/taxation', title: 'Taxation', description: 'Navigate complex regulations with our expert tax compliance and advisory services.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { path: '/services/accounting', title: 'Accounting', description: 'From daily bookkeeping to annual statements, we ensure your financial data is accurate and insightful.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg> },
    { path: '/services/payroll', title: 'Payroll', description: 'Timely and compliant payroll services to manage your most valuable asset—your people.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg> },
    { path: '/services/smsf', title: 'SMSF', description: 'Specialized management for Self Managed Superannuation Funds.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1h3z" /></svg> },
    { path: '/services/data-entry', title: 'Data Entry Experts', description: 'Hire dedicated virtual data entry experts from India to boost productivity and reduce costs.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
    { path: '/services/cctv-monitoring', title: 'CCTV Monitoring', description: '24/7 security, rapid incident response, and cost-effective protection for your business assets.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
    { path: '/services/freelancing', title: 'Freelancing', description: 'Platform services for freelance professionals seeking quality remote work.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.284-2.72-4.682-2.72a3 3 0 00-4.682 2.72 9.094 9.094 0 003.741.479m7.284-2.72a3 3 0 014.682 2.72 9.094 9.094 0 01-3.741.479M12 10.5a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
    { path: '/services/website-design', title: 'Website Design', description: 'Professional web design, development, and hosting solutions for your business.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
];

const ServiceCard = ({ path, icon, title, description }) => (
    <motion.div variants={fadeIn} className="h-full">
        <Link to={path} className="bg-white/50 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden group h-full flex flex-col">
            <div className="absolute top-0 left-[-150%] w-[100px] h-[200%] bg-white/30 -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-[400px]"></div>
            <div className="relative z-10 flex-grow flex flex-col">
                <div className="text-accent mb-4">{icon}</div>
                <h3 className="font-unbounded text-2xl font-bold text-primary mb-3">{title}</h3>
                <p className="text-slate-600 mb-4 flex-grow">{description}</p>
                <div className="text-accent font-bold mt-4 inline-block">
                    Learn More <span className="transition-transform group-hover:translate-x-1 inline-block">&rarr;</span>
                </div>
            </div>
        </Link>
    </motion.div>
);

const ServicesOverview = () => {
    return (
        <div className="bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="min-h-screen p-4 sm:p-8 md:p-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl md:text-5xl font-unbounded font-extrabold text-primary mb-4">Our Services</motion.h1>
                        <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-lg text-slate-600 mb-16 max-w-3xl mx-auto">
                            We offer an integrated suite of financial, administrative, and technical services to handle every aspect of your business's needs.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {servicesData.map(service => (
                            <ServiceCard
                                key={service.path}
                                path={service.path}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
            
            <section className="relative text-white py-20">
                <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team discussing work" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
                        className="font-unbounded text-3xl md:text-4xl font-bold"
                    >
                        Ready to Build a More Efficient Business?
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
                        className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto"
                    >
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

export default ServicesOverview;