
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import ScrollToTop from '@components/ScrollToTop';
import WhatsApp from '@components/WhatsApp';

import Home from '@pages/Home';
import About from '@pages/About';
import Courses from '@pages/Courses';
import Admission from '@pages/Admission';
import Contact from '@pages/Contact';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import TermsConditions from '@pages/TermsConditions';
import Testimonials from '@pages/Testimonials';



function App() {
  return (
    <Router>
      <ScrollToTop />
     
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
             <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </AnimatePresence>
        <Footer />
               <WhatsApp />
      </div>
    </Router>
  );
}

export default App;