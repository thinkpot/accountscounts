import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import ServicesHighlight from '../components/ServicesHighlight';

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
const BookkeeperIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.path initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }} strokeLinecap="round" strokeLinejoin="round" d="M9 7h6" />
        <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h.01M12 17h.01M15 17h.01" />
    </svg>
);
const TaxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const PayrollIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.circle initial={{ r: 0 }} animate={{ r: 3 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} cx="12" cy="10" r="3" />
        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }} d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857" />
        <path d="M12 17a5.002 5.002 0 00-4.644 3M12 17a5.002 5.002 0 014.644 3" />
    </svg>
);
const FinancialAnalystIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.path initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

// --- NEW ICONS FOR NEW SERVICES ---
const CCTVIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.path initial={{ rotate: -10 }} animate={{ rotate: 10 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const DataAnalysisIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.path initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" />
    </svg>
);

const WebsiteDesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }} strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const FreelancingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <motion.path initial={{ scale: 0.8 }} animate={{ scale: 1.1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


// --- Section Components ---

const HeroSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600880292210-f58919a5173e?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
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
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
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
          Connecting Your Business With Elite{' '}
          <span className="text-accent">
            <Typewriter
              options={{
                strings: ['Talent', 'Professionals', 'Experts'],
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
          We bridge the gap between global companies and elite, pre-vetted professionals from India. Build your dream team, remotely and efficiently.
        </motion.p>
        <motion.div variants={fadeIn}>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform inline-block"
          >
            Find Talent Now
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const RoleCard = ({ icon, title, description }) => (
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

const RolesOverview = () => (
  <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInStagger}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Find Your Perfect Fit</motion.h2>
        <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">We provide pre-vetted, top-tier talent for any role your business needs.</motion.p>
      </motion.div>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInStagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <RoleCard icon={<BookkeeperIcon />} title="Expert Bookkeepers" description="Meticulous professionals to keep your daily finances accurate and organized." />
        <RoleCard icon={<TaxIcon />} title="Tax Specialists" description="Navigate complex international tax laws with our experienced compliance experts." />
        <RoleCard icon={<PayrollIcon />} title="Payroll Administrators" description="Ensure your team is paid accurately and on time, every time, with dedicated payroll talent." />
        <RoleCard icon={<FinancialAnalystIcon />} title="Financial Analysts" description="Hire skilled analysts to turn your financial data into actionable business insights." />
        <RoleCard icon={<CCTVIcon />} title="CCTV Monitoring" description="Reliable surveillance professionals to ensure the security and safety of your premises." />
        <RoleCard icon={<DataAnalysisIcon />} title="Data Analysis" description="Unlock insights from your data with skilled analysts who provide actionable reports." />
        <RoleCard icon={<WebsiteDesignIcon />} title="Website Design & Hosting" description="Build a stunning, high-performance online presence with our expert web developers." />
        <RoleCard icon={<FreelancingIcon />} title="Freelancing" description="Access a diverse pool of flexible talent for project-based work and specialized tasks." />
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
                <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Hire Top Talent in 3 Steps</motion.h2>
                <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Our streamlined process makes building your remote financial team simple and efficient.</motion.p>
            </motion.div>
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInStagger}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative"
            >
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                    <svg width="100%" height="2" className="absolute top-8 left-0">
                        <line x1="15%" y1="1" x2="85%" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
                    </svg>
                </div>
                
                <motion.div variants={fadeIn} className="relative bg-white p-6 z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent/10 text-accent rounded-full font-unbounded text-2xl font-bold ring-8 ring-white">1</div>
                    <h3 className="font-unbounded text-xl font-bold text-primary mb-2">Define Your Needs</h3>
                    <p className="text-slate-600">Tell us the role, skills, and experience you're looking for in a consultation call.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="relative bg-white p-6 z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent/10 text-accent rounded-full font-unbounded text-2xl font-bold ring-8 ring-white">2</div>
                    <h3 className="font-unbounded text-xl font-bold text-primary mb-2">We Match the Talent</h3>
                    <p className="text-slate-600">We present you with a shortlist of pre-vetted candidates from our elite talent pool.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="relative bg-white p-6 z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent/10 text-accent rounded-full font-unbounded text-2xl font-bold ring-8 ring-white">3</div>
                    <h3 className="font-unbounded text-xl font-bold text-primary mb-2">Integrate & Scale</h3>
                    <p className="text-slate-600">Your new team member integrates directly with your company, ready to contribute from day one.</p>
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
        <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-primary">The Smarter Way to Build Your Team</motion.h2>
        <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-600">Stop searching, start growing. We provide a strategic advantage by connecting you with world-class talent without the overheads of traditional hiring.</motion.p>
        <div className="mt-8 space-y-8">
          <FeatureHighlight icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="Access Global Talent">
            Tap into a pool of elite, vetted professionals from India, ready to bring their expertise to your team.
          </FeatureHighlight>
          <FeatureHighlight icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} title="Reduce Hiring Costs">
            Save time and money on recruitment, interviews, and onboarding. We handle the vetting so you can focus on interviewing the best.
          </FeatureHighlight>
        </div>
      </div>
      <motion.div variants={fadeIn} className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-auto">
         <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Professional team collaborating on a project" className="w-full h-full object-cover" />
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
                    <path d="M752.1,208.5c-2.3-1.3-4.4-2.8-6.3-4.5c-2.9-2.5-5.3-5.2-7.2-8.2c-1.8-2.7-3.1-5.7-4-8.8c-1.1-3.7-1.7-7.6-1.7-11.5 c0-4.4,0.7-8.7,2-12.8c1-3.2,2.5-6.2,4.4-9.1c2-2.9,4.4-5.6,7.2-7.9c2.7-2.3,5.8-4.2,9.2-5.7c3.5-1.5,7.2-2.3,11-2.3 c3.7,0,7.3,0.8,10.7,2.3c3.5,1.5,6.6,3.4,9.4,5.7c2.8,2.3,5.2,5,7.2,7.9c1.9,2.9,3.4,5.9,4.4,9.1c1.3,4.1,2,8.4,2,12.8 c0,3.9-0.6,7.8-1.7,11.5c-0.9,3.1-2.2,6.1-4,8.8c-1.9,3-4.3,5.7-7.2,8.2c-1.9,1.7-4,3.2-6.3,4.5c-2.3,1.3-4.8,2.3-7.5,3 c-2.7,0.7-5.5,1-8.3,1C757.6,209.5,754.8,209.2,752.1,208.5z M348.1,123.5c-2.7-0.1-5.4-0.8-8-1.9c-2.9-1.3-5.5-3-7.9-5.1 c-2.2-2-4.1-4.3-5.6-6.9c-1.6-2.8-2.7-5.8-3.2-8.9c-0.6-3.4-0.6-6.9-0.1-10.4c0.5-3.5,1.5-6.8,3-9.9c1.5-3.1,3.4-5.9,5.7-8.4 c2.4-2.5,5.1-4.6,8.2-6.2c3-1.6,6.3-2.6,9.7-2.9c3.6-0.3,7.2,0.1,10.6,1.1c3.4,1,6.6,2.6,9.4,4.7c2.8,2.1,5.2,4.6,7.1,7.5 c1.9,2.9,3.3,6.1,4.1,9.4c0.9,3.5,1.3,7.1,1.1,10.6c-0.1,3.4-1.1,6.7-2.6,9.7c-1.6,3-3.7,5.7-6.2,8.2c-2.5,2.4-5.3,4.3-8.4,5.7 C355.9,122.9,352,123.6,348.1,123.5z M141.1,224.5c-2.7-0.1-5.4-0.8-8-1.9c-2.9-1.3-5.5-3-7.9-5.1c-2.2-2-4.1-4.3-5.6-6.9 c-1.6-2.8-2.7-5.8-3.2-8.9c-0.6-3.4-0.6-6.9-0.1-10.4c0.5-3.5,1.5-6.8,3-9.9c1.5-3.1,3.4-5.9,5.7-8.4 c2.4-2.5,5.1-4.6,8.2-6.2c3-1.6,6.3-2.6,9.7-2.9c3.6-0.3,7.2,0.1,10.6,1.1c3.4,1,6.6,2.6,9.4,4.7c2.8,2.1,5.2,4.6,7.1,7.5 c1.9,2.9,3.3,6.1,4.1,9.4c0.9,3.5,1.3,7.1,1.1,10.6c-0.1,3.4-1.1,6.7-2.6,9.7c-1.6,3-3.7,5.7-6.2,8.2 c-2.5,2.4-5.3,4.3-8.4,5.7C148.9,223.9,145,224.6,141.1,224.5z" fill="#8c92ac" opacity="0.3" />
                    <LocationPin x="250" y="150" delay={0.5} /> {/* USA */}
                    <LocationPin x="180" y="120" delay={0.7} /> {/* Canada */}
                    <LocationPin x="680" y="320" delay={0.9} /> {/* Australia */}
                </svg>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInStagger}>
                <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold">Connecting Global Companies with Indian Expertise</motion.h2>
                <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-300">Our talent pool is based in India, but our clients are worldwide. We specialize in placing professionals in companies across Canada, Australia, and the USA.</motion.p>
                <ul className="mt-6 space-y-2 text-slate-300">
                    <motion.li variants={fadeIn} className="flex items-center"><span className="text-accent mr-2">&#10003;</span> Vetted talent with international compliance knowledge.</motion.li>
                    <motion.li variants={fadeIn} className="flex items-center"><span className="text-accent mr-2">&#10003;</span> Seamless remote integration into your existing team.</motion.li>
                    <motion.li variants={fadeIn} className="flex items-center"><span className="text-accent mr-2">&#10003;</span> Cost-effective solutions for scaling your financial department.</motion.li>
                </ul>
            </motion.div>
        </div>
    </section>
);

const TrustBar = () => (
  <div className="bg-slate-100 py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-secondary font-semibold uppercase tracking-wider mb-12">
        Our Talent is Proficient in Leading Financial Software
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 items-center justify-items-center">
        <div className="flex flex-col items-center text-center">
          <img src="/xero.jpeg" alt="Xero Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">XERO</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/quickbook.jpeg" alt="QuickBooks Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">QuickBooks</p>
        </div>
        {/* <div className="flex flex-col items-center text-center">
          <img src="/myob.png" alt="MYOB Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">MYOB</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/banklink.png" alt="Banklink Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">Banklink</p>
        </div> */}

        <div className="flex flex-col items-center text-center">
          <img src="/salesforce.webp" alt="Banklink Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">Sales Force</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/netsuite.svg" alt="Banklink Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">NetSuite</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/xpa.jpg" alt="Banklink Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">XPA</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/suitefiles.webp" alt="Banklink Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">SuiteFiles</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/fyi.png" alt="Banklink Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">FYI</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/reckon.png" alt="Banklink Logo" className="h-16 mb-3" />
          <p className="font-semibold text-slate-600">Reckon</p>
        </div>
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
        <motion.h2 variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold text-white">What Our Partners Say</motion.h2>
        <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">We're proud to connect great companies with great people.</motion.p>
      </motion.div>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInStagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group">
          <div className="absolute top-0 left-[-150%] w-[100px] h-[200%] bg-white/20 -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-[500px]"></div>
          <p className="text-slate-300 italic">"AccountsCounts connected us with a fantastic bookkeeper who integrated with our team in Canada flawlessly. The quality of talent is exceptional."</p>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="font-bold">Jane Doe</p>
            <p className="text-sm text-accent">CEO, Tech Solutions Inc. (Canada)</p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group">
          <div className="absolute top-0 left-[-150%] w-[100px] h-[200%] bg-white/20 -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-[500px]"></div>
          <p className="text-slate-300 italic">"The hiring process was fast and professional. We found a payroll specialist for our Australian office in half the time it usually takes us."</p>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="font-bold">John Smith</p>
            <p className="text-sm text-accent">Founder, Creative Co. (Australia)</p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group">
          <div className="absolute top-0 left-[-150%] w-[100px] h-[200%] bg-white/20 -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-[500px]"></div>
          <p className="text-slate-300 italic">"We needed a financial analyst with very specific skills. AccountsCounts delivered a perfect candidate who has become an invaluable part of our US team."</p>
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
        Ready to Build Your Global Team?
      </motion.h2>
      <motion.p 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
        className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
      >
        Tell us what you need. We'll connect you with the talent to make it happen. Schedule your free consultation today.
      </motion.p>
      <motion.a 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        href="#" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform inline-block mt-8"
      >
        Find Your Next Hire
      </motion.a>
    </div>
  </section>
);


// --- Main Home Component ---
const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <RolesOverview />
      <HowItWorks />
      <TrustBar />
      <WhyUsSection />
      <WorldwideClients />
      <ServicesHighlight />
      
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Home;