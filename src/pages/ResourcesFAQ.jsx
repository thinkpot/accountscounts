import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

// --- FAQ Data (from the new PDF) ---
const faqData = [
  {
    category: "General & How We Work",
    questions: [
      { q: "How do you operate?", a: "We operate 100% remotely, providing virtual accounting solutions. This allows us to offer flexible, cost-effective services without geographical limitations." },
      { q: "What kind of staff can I hire?", a: "You can hire skilled employees on a full-time or part-time basis to assist with all types of accounting services, tailored to your specific requirements." },
      { q: "What is your team's experience with Australian laws?", a: "Our team is backed by over a decade of experience and has in-depth expertise in Australian Tax Laws and regulations. All our professionals are skilled in this area." },
    ]
  },
  {
    category: "Software & Technology",
    questions: [
      { q: "What accounting software are you experienced with?", a: "Our professionals are experienced with all major Australian accounting software, including Xero, MYOB, QuickBooks, Sage, HandiTax, HandiLedger, XPA, and more." },
      { q: "What if we use a different software package?", a: "Our technical experts are adaptable and can brief you on, or quickly learn, other day-to-day Australian accounting packages as needed to fit your workflow." },
    ]
  },
  {
    category: "Data Security & Privacy",
    questions: [
      { q: "How do you ensure my data is secure?", a: "We prioritise data privacy and security as our highest standard. Our systems are equipped with advanced firewalls and secured data maintenance protocols, and we adhere to strict data protection practices." },
      { q: "What kind of IT support do you have?", a: "We have a dedicated IT team providing 24/7 support to maintain our secure infrastructure. They are also available to provide detailed briefings on our security measures if required." },
    ]
  },
   {
    category: "Cost & Pricing",
    questions: [
      { q: "What is your pricing model?", a: "Our services are highly cost-effective, starting from just $5 per hour. We offer flexible pricing that is tailored to your specific requirements." },
    ]
  },
];

const ResourcesFAQ = () => {
  const [expanded, setExpanded] = useState(0); // Default first item open

  return (
    <div className="bg-slate-50">
      {/* 1. Hero Section */}
      <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="bg-white text-center py-20 md:py-28 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold text-primary">
            Frequently Asked Questions
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Your questions, answered. Find information about our processes, security, and pricing.
          </motion.p>
        </div>
      </motion.section>
      
      {/* 2. Key Highlights Section */}
      <section className="py-16 bg-primary/5">
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <motion.div variants={fadeIn} className="p-4">
              <h3 className="font-unbounded text-lg font-bold text-primary mb-2">Australian Compliance</h3>
              <p className="text-slate-600">Fully registered and compliant with local laws and regulations.</p>
            </motion.div>
             <motion.div variants={fadeIn} className="p-4">
              <h3 className="font-unbounded text-lg font-bold text-primary mb-2">Decade of Experience</h3>
              <p className="text-slate-600">In-depth expertise in Australian Tax Law and accounting practices.</p>
            </motion.div>
         </motion.div>
      </section>

      {/* 3. FAQ Accordion Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map(category => (
            <div key={category.category} className="mb-12">
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="font-unbounded text-2xl font-bold text-primary mb-6">{category.category}</motion.h2>
              <div className="space-y-4">
                {category.questions.map((item, index) => (
                  <motion.div key={item.q} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} variants={fadeIn}>
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                      <motion.h3
                        onClick={() => setExpanded(expanded === `${category.category}-${index}` ? false : `${category.category}-${index}`)}
                        className="flex justify-between items-center p-5 cursor-pointer bg-white hover:bg-slate-50"
                      >
                        <span className="font-semibold text-primary">{item.q}</span>
                        <motion.div animate={{ rotate: expanded === `${category.category}-${index}` ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </motion.div>
                      </motion.h3>
                      <AnimatePresence initial={false}>
                        {expanded === `${category.category}-${index}` && (
                          <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{ open: { opacity: 1, height: 'auto' }, collapsed: { opacity: 0, height: 0 } }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="px-5 bg-white"
                          >
                            <p className="py-4 text-slate-600 border-t border-slate-200">{item.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 4. CORRECTED CTA SECTION */}
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
                 <Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105 inline-block mt-8">
                    Get Started Today
                </Link>
            </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ResourcesFAQ;