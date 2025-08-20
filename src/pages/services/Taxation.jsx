import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Animation Variants & Reusable Components ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};

// Reusable card for the detailed services grid
const ServiceDetailCard = ({ icon, title, description }) => (
  <motion.div variants={fadeIn} whileHover={{ y: -8, scale: 1.03 }} className="bg-white p-6 rounded-lg shadow-md flex items-start cursor-pointer transition-shadow duration-300 hover:shadow-xl">
    <div className="flex-shrink-0 text-accent mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="font-unbounded text-md font-bold text-primary">{title}</h3>
      <p className="text-slate-600 mt-1 text-sm">{description}</p>
    </div>
  </motion.div>
);

// Reusable card for the benefits section
const BenefitCard = ({ icon, title, description }) => (
    <motion.div variants={fadeIn} className="p-4 text-center">
        <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="font-unbounded text-lg font-bold text-primary mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </motion.div>
);


const Taxation = () => {
  const taxServices = [
    { title: "Taxation for all Structures", description: "Expert tax advice and compliance for Individuals, Partnerships, Trusts, and Companies.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { title: "Tax Return Preparation", description: "Data entry and software feeding for GST Listings, Tax Liability Reports, and annual returns.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { title: "BAS & IAS Lodgement", description: "Preparation and lodgement of Business and Instalment Activity Statements for Australian businesses.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
    { title: "PAYG Management", description: "Handling PAYG Instalments from Doc ID and managing PAYG withholding amounts accurately.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: "Tax Planning & Advisory", description: "Strategic advice on provisions like Division 7A, profit distribution, and finalizing financial statements.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
    { title: "Capital Gains Tax (CGT)", description: "Expert handling of Capital Gains Tax events, ensuring compliance and optimal outcomes.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: Hero */}
      <section className="relative text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-primary opacity-80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop" alt="Financial documents and calculator" className="absolute inset-0 w-full h-full object-cover"/>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold">Taxation Services</motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Navigate Australian tax law with confidence. Our vetted freelancers provide comprehensive tax solutions to ensure compliance and maximize your financial efficiency.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 2: Our Approach to Taxation */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Our Approach to Taxation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Ensure Compliance"
              description="Stay up-to-date with ever-changing Australian tax laws and avoid costly penalties."
            />
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
              title="Maximize Deductions"
              description="Our experts identify every possible deduction to minimize your tax liability."
            />
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
              title="Strategic Advice"
              description="Receive proactive advice on tax planning and structuring to support your business goals."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Detailed Services Grid */}
      <section className="py-20 md:py-28 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Our Comprehensive Tax Services</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {taxServices.map((service) => (
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
      
      {/* SECTION 4: Serving All Business Structures */}
       <section className="py-20 md:py-28 bg-slate-50">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="pr-0 md:pr-12">
            <h2 className="font-unbounded text-3xl font-bold text-primary mb-4">Tailored for All Business Structures</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              No matter the size or structure of your business, our network of professionals has the specific expertise you need. We connect you with freelancers skilled in handling the unique tax situations of:
            </p>
            <ul className="space-y-3">
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Individuals & Sole Traders</li>
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Partnerships</li>
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Trusts</li>
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Companies</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeIn} className="rounded-xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Diverse team of professionals" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 5: Final CTA */}
      <section className="relative text-white py-20">
         <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
         <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team discussing work" className="absolute inset-0 w-full h-full object-cover"/>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
            <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
                className="font-unbounded text-3xl md:text-4xl font-bold"
            >
                Ready to Simplify Your Taxes?
            </motion.h2>
            <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
                className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto"
            >
               Connect with a vetted Australian tax expert today and get the peace of mind that comes with professional, compliant, and strategic tax management.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
                 <Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105 inline-block mt-8">
                    Get Your Free Consultation
                </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Taxation;