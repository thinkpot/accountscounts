import React from 'react';

const Accounting = () => {
  return (
    <div>
      <h2 className="text-3xl font-unbounded font-bold text-primary mb-4">Accounting & Bookkeeping</h2>
      <p className="mb-6 text-slate-600">Our precise bookkeeping and accounting services ensure you always have a clear and accurate financial picture.</p>
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        <li>Software Processing (XERO, Banklink)</li>
        <li>GST & BAS Liability Services</li>
        <li>Transaction Reviews for GST Audits (MYOB, Quickbooks)</li>
        <li>Integrate Client Account Reconciliation</li>
        <li>BAS Clearing Account Management</li>
      </ul>
    </div>
  );
};

export default Accounting;