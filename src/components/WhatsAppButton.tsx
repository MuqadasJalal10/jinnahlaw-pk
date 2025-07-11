import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover span {
    opacity: 1;
    transform: translateX(-10px);
  }
`;

const WhatsAppLink = styled.a`
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #128c7e;
  }

  svg {
    font-size: 2rem;
  }
`;

const HoverText = styled.span`
  background: #128c7e;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  white-space: nowrap;
  font-size: 0.95rem;
  opacity: 0;
  transform: translateX(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("How can I help you?");
  const phone = "923014686473"; // Pakistan format without leading 0

  return (
    <WhatsAppContainer>
      <HoverText>How can I assist you?</HoverText>
      <WhatsAppLink
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </WhatsAppLink>
    </WhatsAppContainer>
  );
};

export default WhatsAppButton;
