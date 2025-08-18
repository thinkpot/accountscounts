import React, { useState } from 'react';

// Import reusable components
import Header from './components/Header';
import Footer from './components/Footer';

// Import all the page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import WhyOutsource from './pages/WhyOutsource';
import Technology from './pages/Technology';
import ResourcesFAQ from './pages/ResourcesFAQ';
import Contact from './pages/Contact';

function App() {
  // State to manage which page is currently visible. 'home' is the default.
  const [page, setPage] = useState('home');

  // This function determines which page component to render based on the state
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'howItWorks':
        return <HowItWorks />;
      case 'whyOutsource':
        return <WhyOutsource />;
      case 'technology':
        return <Technology />;
      case 'resources':
        return <ResourcesFAQ />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="font-space-grotesk bg-white">
      {/* The Header component receives the 'setPage' function so it can change the state */}
      <Header setPage={setPage} />
      
      <main>
        {/* The renderPage function is called here to display the current page */}
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;