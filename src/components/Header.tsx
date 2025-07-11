import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: var(--white);
  box-shadow: var(--shadow-md);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Navbar = styled.nav`
  padding: 1rem 0;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--gray-900);
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AcademyName = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  font-size: 1.4rem;
  background: linear-gradient(90deg, #0d47a1, #1976d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ByText = styled.span`
  font-size: 0.9rem;
  color: var(--primary-blue);
  font-weight: 500;
  letter-spacing: 0.3px;
  opacity: 0.9;

  &:hover {
    color: var(--secondary-blue);
  }
`;

const NavMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    padding: 2rem 1rem;
    box-shadow: var(--shadow-lg);
    transform: translateY(${props => props.isOpen ? '0' : '-200%'});
    transition: transform 0.3s ease;
    gap: 1rem;
    z-index: 999;
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  font-weight: 500;
  color: ${props => props.isActive ? 'var(--primary-blue)' : 'var(--gray-700)'};
  transition: color 0.2s ease;
  padding: 0.5rem 0;
  position: relative;

  &:hover {
    color: var(--primary-blue);
  }

  ${props => props.isActive && `
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--primary-blue);
      border-radius: 1px;
    }
  `}
`;

const CtaButton = styled(Link)`
  background: var(--primary-blue);
  color: var(--white) !important;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background: var(--dark-blue);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;

  span {
    width: 25px;
    height: 3px;
    background: var(--gray-700);
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HeaderContainer>
      <Navbar>
        <NavContent>
          <LogoLink to="/">
            <LogoImage src="/logo.jpeg" alt="Jinnah Law Academy Logo" />
            <LogoText>
              <AcademyName>Jinnah Law Academy</AcademyName>
              <ByText>By Wasif Mateen</ByText>
            </LogoText>
          </LogoLink>

          <NavMenu isOpen={isMenuOpen}>
            <NavLink 
              to="/" 
              isActive={location.pathname === '/'} 
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              isActive={location.pathname === '/about'} 
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/courses" 
              isActive={location.pathname === '/courses'} 
              onClick={closeMenu}
            >
              Courses
            </NavLink>
            <NavLink 
              to="/contact" 
              isActive={location.pathname === '/contact'} 
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
            <CtaButton to="/admission-inquiry" onClick={closeMenu}>
              Admission Inquiry
            </CtaButton>
          </NavMenu>

          <MobileMenuToggle onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuToggle>
        </NavContent>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
