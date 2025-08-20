import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Animation Variants & Reusable Components ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};

const ServiceDetailCard = ({ icon, title, description }) => (
  <motion.div variants={fadeIn} whileHover={{ y: -8, scale: 1.03 }} className="bg-white p-6 rounded-lg shadow-md flex items-start cursor-pointer transition-shadow duration-300 hover:shadow-xl h-full">
    <div className="flex-shrink-0 text-accent mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="font-unbounded text-md font-bold text-primary">{title}</h3>
      <p className="text-slate-600 mt-1 text-sm">{description}</p>
    </div>
  </motion.div>
);

const BenefitCard = ({ icon, title, description }) => (
    <motion.div variants={fadeIn} className="p-4 text-center">
        <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="font-unbounded text-lg font-bold text-primary mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </motion.div>
);

const Accounting = () => {
  const accountingServices = [
    { title: "Daily Bookkeeping & Data Entry", description: "Accurate coding of bank statements and processing of source documents in XERO, MYOB, QuickBooks, and Banklink.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
    { title: "GST & BAS Services", description: "Determining BAS liability and preparing periodic GST reconciliations to ensure compliance.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg> },
    { title: "Account Reconciliation", description: "Quarterly or monthly reconciliation of your integrated client account with financials.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" /></svg> },
    { title: "Transaction & Audit Reviews", description: "Conducting detailed transaction reviews in MYOB or QuickBooks for GST Audit purposes.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
    { title: "BAS Clearing Account Management", description: "Transferring GST Output/Input, PAYG, and Fuel Tax Credits into the BAS Clearing Account.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg> },
    { title: "Hire Purchase Loan Reconciliation", description: "Includes interest reconciliation and preparation of repayment schedules for new loans.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: Hero */}
      <section className="relative text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-primary opacity-80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" alt="Person working on financial accounts with a calculator" className="absolute inset-0 w-full h-full object-cover"/>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold">Accounting & Bookkeeping</motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Gain clarity and control over your finances. Our expert freelancers provide meticulous bookkeeping and insightful accounting to form the bedrock of your business success.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 2: Our Approach to Accounting */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Our Approach to Accounting</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
              title="Ensure Accuracy"
              description="Meticulous attention to detail means your books are always accurate, compliant, and audit-ready."
            />
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
              title="Gain Valuable Insights"
              description="We transform raw data into clear financial reports that help you make smarter business decisions."
            />
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Improve Efficiency"
              description="Streamline your financial processes, save time on administrative tasks, and focus on your core operations."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Detailed Services Grid */}
      <section className="py-20 md:py-28 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Our Comprehensive Accounting Services</h2>
            </div>
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
         </div>
      </section>
      
      {/* SECTION 4: Your Financial Control Center */}
       <section className="py-20 md:py-28 bg-slate-50">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="pr-0 md:pr-12">
            <h2 className="font-unbounded text-3xl font-bold text-primary mb-4">Your Financial Control Center</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Think of our services as the central hub for your financial health. We provide the systems and expertise to ensure you have a clear, real-time view of your business's performance. With accurate books and insightful reports, you can:
            </p>
            <ul className="space-y-3">
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Control your accounts in-house at any point.</li>
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Make data-driven strategic decisions.</li>
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Secure financing and partnerships with confidence.</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeIn} className="rounded-xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" alt="Dashboard with financial charts" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 5: Final CTA with Background Image */}
      <section className="relative text-white py-20">
         <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
         <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team discussing work" className="absolute inset-0 w-full h-full object-cover"/>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold">
                Take Control of Your Finances Today
            </motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
                 <Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105 inline-block mt-8">
                    Find an Accounting Expert
                </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Accounting;