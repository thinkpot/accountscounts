import React from 'react';
import { motion } from 'framer-motion';

// --- (Animation variants and ServiceDetailCard component remain the same) ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};
const ServiceDetailCard = ({ icon, title, description }) => (
  <motion.div variants={fadeIn} whileHover={{ y: -8, scale: 1.03 }} className="bg-slate-50/50 p-6 rounded-lg flex items-start cursor-pointer transition-shadow duration-300 hover:shadow-xl">
    <div className="flex-shrink-0 text-accent mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="font-unbounded text-md font-bold text-primary">{title}</h3>
      <p className="text-slate-600 mt-1 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Payroll = () => {
  const payrollServices = [
    { title: "Payroll Computation", description: "Weekly, fortnightly, & monthly computations for Permanent, Part-Time, & Casual staff from Time Sheets.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { title: "PAYG Deduction", description: "Accurate calculation and handling of Pay-As-You-Go tax deductions for all employees.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: "Superannuation Deductions", description: "Managing and processing all mandatory superannuation contributions to ensure full compliance.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { title: "Annual Leave", description: "Precise calculation and tracking of Annual Leave entitlements for all employee types.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
    { title: "Long Service Leave", description: "Management of complex Long Service Leave calculations and accruals as per state regulations.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: "Redundancy Payouts", description: "Expert handling of complex final payments, including redundancy payouts, in accordance with Australian employment law.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: "Payroll Tax Returns", description: "Management and lodgement of state-based Payroll Tax Returns, ensuring you meet all obligations.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg> },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div variants={fadeIn}>
        <h2 className="text-3xl font-unbounded font-bold text-primary mb-3">Payroll Management</h2>
        <p className="mb-8 text-slate-600 max-w-4xl">
          Ensure your team is paid accurately and on time. Find professionals who manage every aspect of your payroll, from weekly processing to complex leave and tax obligations, all compliant with Australian standards.
        </p>
      </motion.div>
      {/* NEW GRID LAYOUT */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {payrollServices.map((service) => (
          <ServiceDetailCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
export default Payroll;