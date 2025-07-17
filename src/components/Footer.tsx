
import { Link } from 'react-router-dom';
import { Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
  <img
    src="/logo.jpeg"
    alt="Jinnah Law Academy Logo"
    className="w-16 h-16 object-contain rounded-full"
  />
  <div>
    <h3 className="text-xl font-bold font-serif">Jinnah Law Academy By Wasif Mateen</h3>
    <p className="text-slate-300">Learn Law, Lead Justice</p>
  </div>
</div>

            <p className="text-slate-300 mb-4 max-w-md">
              Empowering the next generation of legal minds through comprehensive education and practical training in law. 
              Founded by Mian Wasif Mateen, Advocate High Court.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567960027157"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/923014686473"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Courses', path: '/courses' },
                { name: 'Admission', path: '/admission' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}

<div>
  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
  <ul className="space-y-3">

    {/* Phone Number */}
    <li className="flex items-start space-x-3">
      <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
      <div>
        <a
          href="tel:03001186473"
          className="text-slate-300 hover:text-amber-300 transition-colors duration-200"
        >
          0300-1186473
        </a>
      </div>
    </li>

    {/* WhatsApp */}
    <li className="flex items-start space-x-3">
      <FaWhatsapp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
      <div>
        <a
          href="https://wa.me/923014686473"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-green-300 transition-colors duration-200"
        >
          03014686473
        </a>
      </div>
    </li>

    {/* Email */}
    <li className="flex items-start space-x-3">
      <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-slate-300 text-sm">
          info@jinnahlaw.pk
        </p>
      </div>
    </li>

    {/* Address */}
    <li className="flex items-start space-x-3">
      <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-slate-300 text-sm">
          Near Bank Islami, Opp. Sports Hall, Mattu Bhaike Rd, Tehsil Nowshera Virkan District Gujranwala
        </p>
      </div>
    </li>

    {/* Office Timing */}
    <li className="flex items-start space-x-3">
      <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-slate-300 text-sm">
          Mon-Fri (9-6), Sat (9-2), Sun (Closed)
        </p>
      </div>
    </li>
    
  </ul>
</div>
</div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Jinnah Law Academy By Wasif Mateen. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;