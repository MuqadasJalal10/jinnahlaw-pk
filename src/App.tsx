import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import AdmissionInquiry from './pages/AdmissionInquiry';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton'; // ✅ Import this
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <>
      <ScrollToTop />

      {/* ✅ This adds spacing below fixed header */}
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission-inquiry" element={<AdmissionInquiry />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      {/* ✅ Floating WhatsApp Icon */}
      <WhatsAppButton />
    </>
  );
}

export default App;
