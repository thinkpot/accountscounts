import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// --- Reusable Service Card ---
const ServiceHighlightCard = ({ path, icon, title, colorFrom, colorTo }) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link
      to={path}
      className="flex flex-col items-center text-center p-4 group"
    >
      {/* Gradient bubble */}
      <div
        className="flex items-center justify-center p-6 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
        }}
      >
        <motion.div
          className="h-12 w-12 flex items-center justify-center text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {icon}
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="mt-4 font-unbounded text-md font-semibold text-primary group-hover:text-accent transition-colors">
        {title}
      </h3>
    </Link>
  </motion.div>
);

// --- Services List with New Colorful Icons ---
const services = [
  {
    path: "/services/taxation",
    title: "Taxation",
    colorFrom: "#F59E0B",
    colorTo: "#F97316",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <defs>
          <linearGradient id="taxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <path stroke="url(#taxGrad)" strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-3.75-3.75 3.75-3.75-3.75-3.75 3.75L2.25 18V2.25" />
        <circle cx="12" cy="10" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    path: "/services/accounting",
    title: "Accounting",
    colorFrom: "#3B82F6",
    colorTo: "#06B6D4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <defs>
          <linearGradient id="accGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <path stroke="url(#accGrad)" strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-2.25V18m-7.5 0h15M5.25 4.5h13.5A2.25 2.25 0 0121 6.75v6.75a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 13.5V6.75A2.25 2.25 0 015.25 4.5z" />
        <path stroke="white" strokeWidth="2" d="M9 12h6" />
      </svg>
    ),
  },
  {
    path: "/services/payroll",
    title: "Payroll",
    colorFrom: "#10B981",
    colorTo: "#22D3EE",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
         <defs>
          <linearGradient id="payGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <path stroke="url(#payGrad)" strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.318.239-.636.354-.96" />
        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
      </svg>
    ),
  },
  {
    path: "/services/smsf",
    title: "SMSF",
    colorFrom: "#6366F1",
    colorTo: "#8B5CF6",
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <defs>
          <linearGradient id="smsfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A5B4FC" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <path stroke="url(#smsfGrad)" strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m-3-1l-3-1m-3 1l-3 1" />
        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      </svg>
    ),
  },
  {
    path: "/services/data-entry",
    title: "Data Entry",
    colorFrom: "#EC4899",
    colorTo: "#F43F5E",
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <defs>
          <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9A8D4" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <path stroke="url(#dataGrad)" strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-1.125 0-2.25.9-2.25 2.25v4.5c0 1.125.9 2.25 2.25 2.25h3.75m0-6.75h.75" />
      </svg>
    ),
  },
  {
    path: "/services/cctv-monitoring",
    title: "CCTV Monitoring",
    colorFrom: "#14B8A6",
    colorTo: "#0EA5E9",
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <defs>
          <linearGradient id="cctvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <path stroke="url(#cctvGrad)" strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
        <motion.circle cx="8.5" cy="11.5" r="2.5" fill="white" initial={{scale: 0.8}} animate={{scale: 1}} transition={{duration: 0.5, repeat: Infinity, repeatType: 'reverse'}} />
      </svg>
    ),
  },
  {
    path: "#",
    title: "Freelancing",
    colorFrom: "#EAB308",
    colorTo: "#F97316",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <defs>
          <linearGradient id="freeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <path stroke="url(#freeGrad)" strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-1.062 2.375-2.375 2.375H5.125c-1.313 0-2.375-1.062-2.375-2.375V14.15M15.75 8.849l-3.75-1.697-3.75 1.697M12 12.75v-6.428" />
        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M12 3a.75.75 0 01.75.75v.008A.75.75 0 0112 4.5h-.008A.75.75 0 0111.25 3.75v-.008A.75.75 0 0112 3z" />
      </svg>
    ),
  },
  {
    path: "#",
    title: "Website Design",
    colorFrom: "#9333EA",
    colorTo: "#DB2777",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <defs>
          <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <path stroke="url(#webGrad)" strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3" />
        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// --- Main Grid Component ---
const ServicesGrid = () => {
  return (
    <section className="py-16">
      {/* Heading + Subtext */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-unbounded font-bold text-primary mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our wide range of professional services designed to support your business growth and efficiency.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {services.map((service, idx) => (
          <ServiceHighlightCard key={idx} {...service} />
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
