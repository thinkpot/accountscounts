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

const Accounting = () => {
  const accountingServices = [
    { title: "Daily Bookkeeping & Data Entry", description: "Accurate coding of bank statements and processing of source documents in XERO, MYOB, QuickBooks, and Banklink.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
    { title: "GST & BAS Services", description: "Determining BAS liability and preparing periodic GST reconciliations to ensure compliance.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg> },
    { title: "Account Reconciliation", description: "Quarterly or monthly reconciliation of your integrated client account with financials.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" /></svg> },
    { title: "Transaction & Audit Reviews", description: "Conducting detailed transaction reviews in MYOB or QuickBooks for GST Audit purposes.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
    { title: "BAS Clearing Account Management", description: "Transferring GST Output/Input, PAYG, and Fuel Tax Credits into the BAS Clearing Account.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg> },
    { title: "Hire Purchase Loan Reconciliation", description: "Includes interest reconciliation and preparation of repayment schedules for new loans.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
    { title: "Asset & Depreciation Management", description: "Handling the addition and sales of assets in your software, including updation of depreciation.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
    { title: "Adjustment & Data Transfer", description: "Re-coding of adjustment entries and periodic data transfer from Banklink to XPA or HandiLedger.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4H4zm0 10v5h5v-5H4zM15 4v5h5V4h-5zm0 10v5h5v-5h-5z" /></svg> },
    { title: "Supporting Document Preparation", description: "Preparation of supporting reference document files to make your financial reviews easy and clear.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div variants={fadeIn}>
        <h2 className="text-3xl font-unbounded font-bold text-primary mb-3">Accounting & Bookkeeping</h2>
        <p className="mb-8 text-slate-600 max-w-4xl">
          Find meticulous and certified accounting professionals. Our freelancers provide a full range of services, from daily bookkeeping to comprehensive financial reporting, ensuring your data is always accurate and insightful.
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
        {accountingServices.map((service) => (
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
export default Accounting;