import React from 'react';

const Taxation = () => {
  return (
    <div>
      <h2 className="text-3xl font-unbounded font-bold text-primary mb-4">Taxation Services</h2>
      <p className="mb-6 text-slate-600">We provide comprehensive tax management and compliance services to navigate complex international regulations.</p>
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        {/* We will add the detailed services from the onboarding doc here during the design phase */}
        <li>Tax Return Software Feeding</li>
        <li>PAYG Management</li>
        <li>Asset Management & Depreciation</li>
        <li>Hire Purchase Loan Reconciliation</li>
        <li>Fuel Tax Credits</li>
      </ul>
    </div>
  );
};

export default Taxation;