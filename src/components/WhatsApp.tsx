import React from 'react';

const WhatsApp: React.FC = () => {
  const message = encodeURIComponent("How can I assist you?");
  const phone = "923014686473";

  return (
    <div className="fixed bottom-0 right-0 m-4 z-50 group">
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative bg-[#25d366] hover:bg-[#128c7e] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300"
      >
        {/* WhatsApp Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
        />

        {/* Hover Text */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          How can I assist you?
        </span>
      </a>
    </div>
  );
};

export default WhatsApp;
