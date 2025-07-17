import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp: React.FC = () => {
  const message = encodeURIComponent("How can I assist you?");
  const phone = "923014686473";

  return (
    <div className="fixed bottom-5 right-5 flex items-center gap-2 z-50">
      {/* WhatsApp Icon Button */}
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-[#25d366] hover:bg-[#128c7e] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Separate Text */}
      <span className="text-sm font-medium text-gray-800 bg-white px-3 py-2 rounded shadow hidden sm:inline">
        How can I assist you?
      </span>
    </div>
  );
};

export default WhatsApp;
