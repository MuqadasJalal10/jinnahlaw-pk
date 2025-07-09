import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroContainer = styled.section<{ backgroundImage?: string }>`
  background-image: ${props =>
    props.backgroundImage
      ? `url(${props.backgroundImage})`
      : 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)'};
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 8rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-top: 80px;
  

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`;

// ❌ Removed HeroOverlay

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--white);
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--light-blue);
  line-height: 1.6;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HeroCta = styled(Link)`
  font-size: 1.1rem;
  padding: 1rem 2rem;
  background: var(--white);
  color: var(--primary-blue);
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-xl);
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    color: var(--primary-blue);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
  }
`;

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}) => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <HeroContainer backgroundImage={backgroundImage}>
      <HeroContent>
        <HeroTitle className="fade-in">{title}</HeroTitle>
        <HeroSubtitle className="fade-in">{subtitle}</HeroSubtitle>
        {ctaText && ctaLink && (
          <HeroCta to={ctaLink} className="fade-in">
            {ctaText}
          </HeroCta>
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
