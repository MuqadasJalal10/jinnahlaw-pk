import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background: var(--gray-900);
  color: var(--white);
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h4 {
    color: var(--white);
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;


const LogoText = styled.div``;

const AcademyName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: var(--white);
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ByText = styled.p`
  color: var(--gray-300);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Slogan = styled.p`
  color: var(--accent-blue);
  font-style: italic;
  font-size: 0.9rem;
`;

const FooterLinks = styled.ul`
  list-style: none;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--gray-300);
    transition: color 0.2s ease;

    &:hover {
      color: var(--accent-blue);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--gray-300);
  font-size: 0.9rem;

  .icon {
    flex-shrink: 0;
  }

  a {
    color: var(--gray-300);
    transition: color 0.2s ease;

    &:hover {
      color: var(--accent-blue);
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--gray-700);
  color: var(--gray-400);
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
           <LogoIcon>
  <img src="/logo.jpeg" alt="Jinnah Law Academy Logo" />
</LogoIcon>

            <LogoText>
              <AcademyName>Jinnah Law Academy</AcademyName>
              <ByText>By Wasif Mateen</ByText>
              <Slogan>"Learn Law, Lead Justice"</Slogan>
            </LogoText>
          </FooterLogo>
        </FooterSection>

        <FooterSection>
          <h4>Quick Links</h4>
          <FooterLinks>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h4>Our Courses</h4>
          <FooterLinks>
            <li><Link to="/courses#lat">LAT</Link></li>
            <li><Link to="/courses#llb-4">LL.B (4 Years)</Link></li>
            <li><Link to="/courses#llb-5">LL.B (5 Years)</Link></li>
            <li><Link to="/courses#law-gat">LAW-GAT</Link></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h4>Contact Info</h4>
          <ContactInfo>
            <ContactItem>
              <span className="icon">📍</span>
              Near Bank Islami, Opp. Sports Hall, Mattu Bhaike Rd, Nowshera Virkan
            </ContactItem>
            <ContactItem>
              <span className="icon">📞</span>
              <a href="tel:0300-1186473">0300-1186473</a>
            </ContactItem>
            <ContactItem>
              <span className="icon">💬</span>
              <a href="https://wa.me/923014686473">0301-4686473</a>
            </ContactItem>
            <ContactItem>
              <span className="icon">✉️</span>
              <a href="mailto:jinnahlawacademybywasifmateen@gmail.com">
                jinnahlawacademybywasifmateen@gmail.com
              </a>
            </ContactItem>
            <ContactItem>
  <span className="icon">
    <FontAwesomeIcon icon={faFacebook} />
  </span>
  <a
    href="https://www.facebook.com/profile.php?id=61567960027157"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>
</ContactItem>

          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2024 Jinnah Law Academy by Wasif Mateen. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
