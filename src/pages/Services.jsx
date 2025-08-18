import React, { useState } from 'react';

// Import the new sub-service components
import Taxation from './services/Taxation';
import Accounting from './services/Accounting';
import Payroll from './services/Payroll';
import SMSF from './services/SMSF';

const Services = () => {
  // State to manage which service detail is visible. 'overview' is the default.
  const [activeService, setActiveService] = useState('overview');

  const renderServiceContent = () => {
    switch (activeService) {
      case 'taxation':
        return <Taxation />;
      case 'accounting':
        return <Accounting />;
      case 'payroll':
        return <Payroll />;
      case 'smsf':
        return <SMSF />;
      default:
        // This is the overview that shows the four cards
        return (
          <div className="text-center">
            <h1 className="text-5xl font-unbounded text-primary mb-4">Our Services</h1>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">We offer an integrated suite of financial services to handle every aspect of your business's finances.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <ServiceCard title="Taxation" description="Navigate complex regulations with our expert tax compliance and advisory services." onClick={() => setActiveService('taxation')} />
              <ServiceCard title="Accounting" description="From daily bookkeeping to annual statements, we ensure your financial data is accurate and insightful." onClick={() => setActiveService('accounting')} />
              <ServiceCard title="Payroll" description="Timely and compliant payroll services to manage your most valuable asset—your people." onClick={() => setActiveService('payroll')} />
              <ServiceCard title="SMSF" description="Specialized management for Self Managed Superannuation Funds." onClick={() => setActiveService('smsf')} />
            </div>
          </div>
        );
    }
  };

  // A helper component for the clickable cards
  const ServiceCard = ({ title, description, onClick }) => (
    <div onClick={onClick} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <h3 className="text-2xl font-unbounded font-bold text-primary mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <span className="text-accent font-bold mt-4 inline-block">Learn More &rarr;</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb/Back button to return to the overview */}
        {activeService !== 'overview' && (
          <button onClick={() => setActiveService('overview')} className="text-sm font-bold text-accent mb-8">
            &larr; Back to Services Overview
          </button>
        )}
        {renderServiceContent()}
      </div>
    </div>
  );
};

export default Services;