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

const WebsiteDesign = () => {
  const webServices = [
    { title: "Custom Web Design", description: "Beautiful, modern designs tailored to your brand identity, ensuring a unique and professional online presence.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg> },
    { title: "Responsive Development", description: "Your website will look and function perfectly on all devices, from desktops and laptops to tablets and smartphones.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
    { title: "E-commerce Solutions", description: "Powerful and secure online stores to sell your products or services, complete with payment gateway integration.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
    { title: "CMS Integration", description: "Easily manage your website's content with user-friendly Content Management Systems like WordPress.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg> },
    { title: "SEO Foundation", description: "Built with search engine best practices in mind to help your site rank higher and attract more visitors.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
    { title: "Secure Hosting & Maintenance", description: "Reliable, high-speed hosting with ongoing maintenance and security to keep your site safe and online.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: Hero */}
      <section className="relative text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-primary opacity-80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Modern website design on a laptop screen" className="absolute inset-0 w-full h-full object-cover"/>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.h1 variants={fadeIn} className="font-unbounded text-4xl md:text-6xl font-extrabold">Website Design & Hosting</motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Your digital storefront, perfected. We build professional, high-performance websites that build credibility and drive business growth.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 2: Our Approach to Web Design */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-primary">Our Approach to Web Design</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>}
              title="Custom Design"
              description="We create unique designs tailored to your brand, ensuring you stand out from the competition."
            />
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
              title="Mobile-First & Responsive"
              description="Our websites are built to provide a flawless experience on any device, from desktop to mobile."
            />
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
              title="Reliable & Secure"
              description="Benefit from high-speed hosting, ongoing maintenance, and robust security protocols."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Detailed Services Grid */}
      <section className="py-20 md:py-28 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-primary">What We Deliver</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {webServices.map((service) => (
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
      
      {/* SECTION 4: Your Growth Engine */}
       <section className="py-20 md:py-28 bg-slate-50">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="pr-0 md:pr-12">
            <h2 className="font-unbounded text-3xl font-bold text-primary mb-4">More Than a Website, It's Your Growth Engine</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We don't just build websites; we build digital assets designed to help your business succeed. A professional website from accountsCounts is built to:
            </p>
            <ul className="space-y-3">
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Generate qualified leads and inquiries.</li>
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Build credibility and trust with your audience.</li>
                <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Showcase your expertise and authority in your industry.</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeIn} className="rounded-xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Analytics dashboard showing business growth" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 5: Final CTA */}
      <section className="relative text-white py-20">
         <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
         <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team discussing work" className="absolute inset-0 w-full h-full object-cover"/>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="font-unbounded text-3xl md:text-4xl font-bold">
                Build Your Online Presence
            </motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
                 <Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition duration-300 transform hover:scale-105 inline-block mt-8">
                    Get a Free Web Consultation
                </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesign;