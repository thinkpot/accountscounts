import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import reusable components
import Header from './components/Header';
import Footer from './components/Footer';

// Import all the page components
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview'; // <-- NEW OVERVIEW PAGE
import HowItWorks from './pages/HowItWorks';
import WhyOutsource from './pages/WhyOutsource';
import Technology from './pages/Technology';
import ResourcesFAQ from './pages/ResourcesFAQ';
import Contact from './pages/Contact';

// Import the new dedicated service pages
import Taxation from './pages/services/Taxation';
import Accounting from './pages/services/Accounting';
import Payroll from './pages/services/Payroll';
import SMSF from './pages/services/SMSF';
import DataEntry from './pages/services/DataEntry';
import CCTVMonitoring from './pages/services/CCTVMonitoring';


function App() {
  return (
    <div className="font-space-grotesk bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-outsource" element={<WhyOutsource />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/resources-faq" element={<ResourcesFAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Routes for each specific service page */}
          <Route path="/services/taxation" element={<Taxation />} />
          <Route path="/services/accounting" element={<Accounting />} />
          <Route path="/services/payroll" element={<Payroll />} />
          <Route path="/services/smsf" element={<SMSF />} />
          <Route path="/services/data-entry" element={<DataEntry />} />
          <Route path="/services/cctv-monitoring" element={<CCTVMonitoring />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;