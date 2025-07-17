import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("How can I help you?");
  const phone = "923014686473";

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 bg-[#25d366] hover:bg-[#128c7e] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-50"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
