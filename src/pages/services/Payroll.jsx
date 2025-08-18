import React from 'react';

const Payroll = () => {
  return (
    <div>
      <h2 className="text-3xl font-unbounded font-bold text-primary mb-4">Payroll Management</h2>
      <p className="mb-6 text-slate-600">Reliable and timely payroll processing to ensure your team is paid correctly, every time.</p>
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        <li>Weekly, Fortnightly & Monthly Computations</li>
        <li>PAYG & Superannuation Deductions</li>
        <li>Annual Leave & Long Service Leave Management</li>
        <li>Redundancy Payouts</li>
        <li>Payroll Tax Returns</li>
      </ul>
    </div>
  );
};

export default Payroll;