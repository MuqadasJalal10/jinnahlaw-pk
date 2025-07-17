import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton1: React.FC = () => {
  const message = encodeURIComponent("How can I assist you?");
  const phone = "923014686473"; // Pakistan number without leading 0

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 bg-[#25d366] hover:bg-[#128c7e] text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300 z-50"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="font-medium hidden sm:inline">How can I assist you?</span>
    </a>
  );
};

export default WhatsAppButton1;
