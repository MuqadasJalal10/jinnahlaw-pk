import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection = styled.section`
  position: relative;
  display: flex;
  height: 590px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageContainer = styled.div<{ backgroundImage?: string }>`
  flex: 0.7;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
    flex: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4); /* dark overlay */
  }
`;

const Spacer = styled.div`
  flex: 0.3;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledCard = styled.div`
  position: absolute;
  top: 22%;
  left: 5%;
  transform: translateY(-50%);
  padding: 2.5rem;
  max-width: 540px;
  border-radius: 1rem;
  backdrop-filter: blur(6px);
  cursor: default;
  z-index: 10;

  /* 🌈 Apply the gradient here */
  background: linear-gradient(90deg, #0d47a1, #1976d2);
  color: #fff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;

  h1, p {
    color: #fff;
  }

  a {
    background-color: #fff;
    color: #0d47a1;
  }

  &:hover {
    transform: translateY(-52%) scale(1.02);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin: 2rem auto;
    max-width: 90%;
  }
`;


// ✅ Motion-enabled Card
const TextCard = motion(StyledCard);

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: #fff;
  color: #003366;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  return (
    <HeroSection>
      <Spacer />
      <ImageContainer backgroundImage={backgroundImage} />
      <TextCard
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}

        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        {ctaText && ctaLink && (
          <CTAButton to={ctaLink}>
            {ctaText}
            <ArrowRight size={18} />
          </CTAButton>
        )}
      </TextCard>
    </HeroSection>
  );
};

export default Hero;
