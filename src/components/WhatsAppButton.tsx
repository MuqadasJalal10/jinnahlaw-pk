// src/components/WhatsAppButton.tsx
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppLink = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #128c7e;
  }

  svg {
    font-size: 2rem;
  }
`;

const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("How can I help you?");
  const phone = "923014686473"; // Replace with your number (Pakistan format without leading 0)

  return (
    <WhatsAppLink
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </WhatsAppLink>
  );
};

export default WhatsAppButton;
