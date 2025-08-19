import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';

// --- Animation Variants for Framer Motion ---
const fadeInStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// --- Animated SVG Icon Components ---

const TaxationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const AccountingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
        <motion.path initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }} strokeLinecap="round" strokeLinejoin="round" d="M9 7h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h.01M12 17h.01M15 17h.01" />
    </svg>
);

const PayrollIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.circle initial={{ r: 0 }} animate={{ r: 3 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} cx="12" cy="10" r="3" />
        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }} d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857" />
        <path d="M12 17a5.002 5.002 0 00-4.644 3M12 17a5.002 5.002 0 014.644 3" />
    </svg>
);

const SMSFIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.path initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1h3z" />
    </svg>
);


// --- Section Components ---

const HeroSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  return (
    <section className="bg-primary text-white relative h-screen flex items-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-primary/70"></div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInStagger}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <motion.h1 
          variants={fadeIn}
          className="font-unbounded text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          Your Financial Success is Our{' '}
          <span className="text-accent">
            <Typewriter
              options={{
                strings: ['Expertise', 'Priority', 'Guarantee'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.h1>
        <motion.p 
          variants={fadeIn}
          className="max-w-3xl mx-auto text-slate-300 text-lg md:text-xl mb-8"
        >
          Global financial solutions in taxation, accounting, and payroll, designed to let you focus on growing your business.
        </motion.p>
        <motion.div variants={fadeIn}>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform inline-block"
          >
            Schedule a Free Consultation
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div 
    variants={fadeIn}
    whileHover={{ y: -8, scale: 1.03 }}
    className="bg-white/50 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden group"
  >
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute top-0 left-[-150%] w-[100px] h-[200%] bg-white/30 -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-[400px]"></div>
    <div className="relative z-10">
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="font-unbounded text-2xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-slate-700">{description}</p>
      <div className="text-accent font-bold mt-4 inline-block">
        Learn More <span className="transition-transform group-hover:translate-x-1 inline-block">&rarr;</span>
      </div>
    </div>
  </motion.div>
);

const ServicesOverview = () => (
  <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInStagger}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Our Core Services</motion.h2>
        <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive financial management for a global market.</motion.p>
      </motion.div>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInStagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <ServiceCard icon={<TaxationIcon />} title="Taxation" description="Expert tax management and compliance to navigate complex international regulations." />
        <ServiceCard icon={<AccountingIcon />} title="Accounting" description="Precise bookkeeping and accounting services for a clear financial picture." />
        <ServiceCard icon={<PayrollIcon />} title="Payroll" description="Reliable and timely payroll processing to ensure your team is always paid correctly." />
        <ServiceCard icon={<SMSFIcon />} title="SMSF" description="Specialized management for Self Managed Superannuation Funds." />
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => (
    <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInStagger}
                className="text-center mb-16"
            >
                <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Our Simple 3-Step Process</motion.h2>
                <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">A clear, structured, and professional workflow to get you started.</motion.p>
            </motion.div>
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInStagger}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative"
            >
                {/* Dashed line for desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                    <svg width="100%" height="2" className="absolute top-8 left-0">
                        <line x1="15%" y1="1" x2="85%" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
                    </svg>
                </div>
                
                <motion.div variants={fadeIn} className="relative bg-white p-6 z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent/10 text-accent rounded-full font-unbounded text-2xl font-bold ring-8 ring-white">1</div>
                    <h3 className="font-unbounded text-xl font-bold text-primary mb-2">Discovery Call</h3>
                    <p className="text-slate-600">A brief consultation to understand your unique business needs and goals.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="relative bg-white p-6 z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent/10 text-accent rounded-full font-unbounded text-2xl font-bold ring-8 ring-white">2</div>
                    <h3 className="font-unbounded text-xl font-bold text-primary mb-2">Secure Onboarding</h3>
                    <p className="text-slate-600">A seamless and secure process for setting up systems and transferring data.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="relative bg-white p-6 z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent/10 text-accent rounded-full font-unbounded text-2xl font-bold ring-8 ring-white">3</div>
                    <h3 className="font-unbounded text-xl font-bold text-primary mb-2">Support & Reporting</h3>
                    <p className="text-slate-600">Ongoing, expert service with clear, consistent reporting you can rely on.</p>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

const FeatureHighlight = ({ icon, title, children }) => (
  <motion.div variants={fadeIn} className="text-center md:text-left">
    <div className="bg-accent/10 text-accent p-3 rounded-lg mb-4 inline-block">
      {icon}
    </div>
    <h3 className="font-unbounded text-xl font-bold text-primary mb-2">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </motion.div>
);

const WhyUsSection = () => (
  <section className="py-20 md:py-28 bg-slate-50">
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInStagger}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="pr-0 md:pr-12">
        <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">A Partnership Built on Trust and Expertise</motion.h2>
        <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-600">We don't just manage your books; we provide the strategic insights and efficiency you need to scale globally. Free up your time and resources to focus on what you do best.</motion.p>
        <div className="mt-8 space-y-8">
          <FeatureHighlight icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="Increase Efficiency">
            Our streamlined processes and expert team handle your finances flawlessly, saving you time and preventing costly errors.
          </FeatureHighlight>
          <FeatureHighlight icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} title="Reduce Risk">
            Stay compliant with international regulations. Our commitment to security and zero data leakage protects your sensitive information.
          </FeatureHighlight>
        </div>
      </div>
      <motion.div variants={fadeIn} className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-auto">
         <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Professional team collaborating on a project" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  </section>
);

const LocationPin = ({ x, y, delay }) => (
    <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay, duration: 0.5 }}
    >
        <circle cx={x} cy={y} r="8" fill="#d4af37" stroke="#fff" strokeWidth="2" />
        <motion.circle
            cx={x}
            cy={y}
            r="8"
            fill="#d4af37"
            stroke="#d4af37"
            strokeWidth="2"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 0.5, ease: "easeInOut" }}
        />
    </motion.g>
);

const WorldwideClients = () => (
    <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
                className="w-full h-64 md:h-auto"
            >
                <svg viewBox="0 0 800 400" className="w-full h-full">
                    <path d="M400 0 C179.086 0 0 179.086 0 400 H800 C800 179.086 620.914 0 400 0 Z" fill="url(#mapGradient)" opacity="0.1" />
                    <defs>
                        <radialGradient id="mapGradient">
                            <stop offset="0%" stopColor="#8c92ac" />
                            <stop offset="100%" stopColor="#001f3f" />
                        </radialGradient>
                    </defs>
                    {/* A more detailed, yet stylized world map path */}
                    <path d="M752.1,208.5c-2.3-1.3-4.4-2.8-6.3-4.5c-2.9-2.5-5.3-5.2-7.2-8.2c-1.8-2.7-3.1-5.7-4-8.8c-1.1-3.7-1.7-7.6-1.7-11.5 c0-4.4,0.7-8.7,2-12.8c1-3.2,2.5-6.2,4.4-9.1c2-2.9,4.4-5.6,7.2-7.9c2.7-2.3,5.8-4.2,9.2-5.7c3.5-1.5,7.2-2.3,11-2.3 c3.7,0,7.3,0.8,10.7,2.3c3.5,1.5,6.6,3.4,9.4,5.7c2.8,2.3,5.2,5,7.2,7.9c1.9,2.9,3.4,5.9,4.4,9.1c1.3,4.1,2,8.4,2,12.8 c0,3.9-0.6,7.8-1.7,11.5c-0.9,3.1-2.2,6.1-4,8.8c-1.9,3-4.3,5.7-7.2,8.2c-1.9,1.7-4,3.2-6.3,4.5c-2.3,1.3-4.8,2.3-7.5,3 c-2.7,0.7-5.5,1-8.3,1C757.6,209.5,754.8,209.2,752.1,208.5z M348.1,123.5c-2.7-0.1-5.4-0.8-8-1.9c-2.9-1.3-5.5-3-7.9-5.1 c-2.2-2-4.1-4.3-5.6-6.9c-1.6-2.8-2.7-5.8-3.2-8.9c-0.6-3.4-0.6-6.9-0.1-10.4c0.5-3.5,1.5-6.8,3-9.9c1.5-3.1,3.4-5.9,5.7-8.4 c2.4-2.5,5.1-4.6,8.2-6.2c3-1.6,6.3-2.6,9.7-2.9c3.6-0.3,7.2,0.1,10.6,1.1c3.4,1,6.6,2.6,9.4,4.7c2.8,2.1,5.2,4.6,7.1,7.5 c1.9,2.9,3.3,6.1,4.1,9.4c0.9,3.5,1.3,7.1,1.1,10.6c-0.1,3.4-1.1,6.7-2.6,9.7c-1.6,3-3.7,5.7-6.2,8.2c-2.5,2.4-5.3,4.3-8.4,5.7 C355.9,122.9,352,123.6,348.1,123.5z M141.1,224.5c-2.7-0.1-5.4-0.8-8-1.9c-2.9-1.3-5.5-3-7.9-5.1c-2.2-2-4.1-4.3-5.6-6.9 c-1.6-2.8-2.7-5.8-3.2-8.9c-0.6-3.4-0.6-6.9-0.1-10.4c0.5-3.5,1.5-6.8,3-9.9c1.5-3.1,3.4-5.9,5.7-8.4 c2.4-2.5,5.1-4.6,8.2-6.2c3-1.6,6.3-2.6,9.7-2.9c3.6-0.3,7.2,0.1,10.6,1.1c3.4,1,6.6,2.6,9.4,4.7c2.8,2.1,5.2,4.6,7.1,7.5 c1.9,2.9,3.3,6.1,4.1,9.4c0.9,3.5,1.3,7.1,1.1,10.6c-0.1,3.4-1.1,6.7-2.6,9.7c-1.6,3-3.7,5.7-6.2,8.2 c-2.5,2.4-5.3,4.3-8.4,5.7C148.9,223.9,145,224.6,141.1,224.5z" fill="#8c92ac" opacity="0.3" />
                    <LocationPin x="250" y="150" delay={0.5} /> {/* USA */}
                    <LocationPin x="180" y="120" delay={0.7} /> {/* Canada */}
                    <LocationPin x="680" y="320" delay={0.9} /> {/* Australia */}
                </svg>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInStagger}>
                <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold">Serving Clients Worldwide</motion.h2>
                <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-300">Our expertise isn't limited by borders. We are equipped to serve international clients, with a focus on markets in Canada, Australia, and the USA.</motion.p>
                <ul className="mt-6 space-y-2 text-slate-300">
                    <motion.li variants={fadeIn} className="flex items-center"><span className="text-accent mr-2">&#10003;</span> Expertise in North American & Australian Tax Law</motion.li>
                    <motion.li variants={fadeIn} className="flex items-center"><span className="text-accent mr-2">&#10003;</span> Seamless Collaboration Across Time Zones</motion.li>
                    <motion.li variants={fadeIn} className="flex items-center"><span className="text-accent mr-2">&#10003;</span> Trusted by Businesses in 10+ Countries</motion.li>
                </ul>
            </motion.div>
        </div>
    </section>
);

const TrustBar = () => (
  <div className="bg-slate-100 py-12">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-secondary font-semibold uppercase tracking-wider mb-6">Powered by Industry-Leading Technology</p>
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-16">
        <img src="https://placehold.co/120x40/ffffff/8c92ac?text=XERO" alt="Xero Logo" className="h-8 opacity-70" />
        <img src="https://placehold.co/120x40/ffffff/8c92ac?text=QuickBooks" alt="QuickBooks Logo" className="h-8 opacity-70" />
        <img src="https://placehold.co/120x40/ffffff/8c92ac?text=MYOB" alt="MYOB Logo" className="h-8 opacity-70" />
        <img src="https://placehold.co/120x40/ffffff/8c92ac?text=Banklink" alt="Banklink Logo" className="h-8 opacity-70" />
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
    <div className="absolute inset-0 bg-primary/40"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInStagger}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-white">What Our Clients Say</motion.h2>
        <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">We're proud to be a trusted partner for businesses worldwide.</motion.p>
      </motion.div>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInStagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group">
          <div className="absolute top-0 left-[-150%] w-[100px] h-[200%] bg-white/20 -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-[500px]"></div>
          <p className="text-slate-300 italic">"AccountsCounts transformed our financial operations. Their attention to detail and proactive advice has been invaluable for our international expansion."</p>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="font-bold">Jane Doe</p>
            <p className="text-sm text-accent">CEO, Tech Solutions Inc. (Canada)</p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group">
          <div className="absolute top-0 left-[-150%] w-[100px] h-[200%] bg-white/20 -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-[500px]"></div>
          <p className="text-slate-300 italic">"Outsourcing our payroll to AccountsCounts was the best decision we made. It's seamless, accurate, and has freed up so much of our internal team's time."</p>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="font-bold">John Smith</p>
            <p className="text-sm text-accent">Founder, Creative Co. (Australia)</p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group">
          <div className="absolute top-0 left-[-150%] w-[100px] h-[200%] bg-white/20 -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-[500px]"></div>
          <p className="text-slate-300 italic">"The level of professionalism and security is top-notch. We have complete peace of mind knowing our accounting is in such capable hands."</p>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="font-bold">Emily White</p>
            <p className="text-sm text-accent">Director, Global Exports (USA)</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="bg-white py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
        className="font-unbounded text-3xl md:text-4xl font-bold text-primary"
      >
        Ready to Elevate Your Financial Management?
      </motion.h2>
      <motion.p 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
        className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
      >
        Let's discuss how our expertise can translate into your success. Schedule your free, no-obligation consultation today.
      </motion.p>
      <motion.a 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        href="#" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform inline-block mt-8"
      >
        Get Started Now
      </motion.a>
    </div>
  </section>
);


// --- Main Home Component ---
const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <WhyUsSection />
      <WorldwideClients />
      <TrustBar />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Home;
