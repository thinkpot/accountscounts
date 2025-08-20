import React from 'react';
import { motion } from 'framer-motion';

// --- (Animation variants and BenefitCard component remain the same) ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};
const BenefitCard = ({ icon, title, description }) => (
  <motion.div variants={fadeIn} whileHover={{ y: -8, scale: 1.03 }} className="bg-slate-50/50 p-6 rounded-lg flex items-start cursor-pointer transition-shadow duration-300 hover:shadow-xl">
    <div className="flex-shrink-0 text-accent mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="font-unbounded text-md font-bold text-primary">{title}</h3>
      <p className="text-slate-600 mt-1 text-sm">{description}</p>
    </div>
  </motion.div>
);

const DataEntry = () => {
  const keyBenefits = [
    { title: "Significant Cost Savings", description: "Hire Indian data entry experts for up to 70–80% lower cost than local staffing, with flexible packages.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg> },
    { title: "Highly Skilled Workforce", description: "Access a large pool of trained operators familiar with medical, legal, ecommerce, and real estate requirements.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg> },
    { title: "Round-the-Clock Productivity", description: "The time zone difference lets you send tasks at your EOD and receive completed work by morning.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: "Scalable & Flexible Solutions", description: "Easily scale your data entry team up or down to match project requirements without the hassle of permanent hires.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg> },
    { title: "Advanced Technology Adoption", description: "We use the latest automation, RPA, and management software to ensure efficient, error-free data entry.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg> },
    { title: "Data Security & Confidentiality", description: "Robust security measures, encrypted data transfer, and advanced infrastructure to protect your sensitive information.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div variants={fadeIn}>
        <h2 className="text-3xl font-unbounded font-bold text-primary mb-3">Dedicated Data Entry Experts</h2>
        <p className="mb-8 text-slate-600 max-w-4xl">
          Hire dedicated virtual data entry experts from India to boost productivity, accuracy, and profits—without the overhead of in-house management.
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
        {keyBenefits.map((service) => (
          <BenefitCard
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
export default DataEntry;