import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-right: 1rem;
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
`;

const AcademyName = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  font-size: 1.4rem;
  background: linear-gradient(90deg, #0d47a1, #1976d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
  letter-spacing: 0.5px;

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
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-200%)')};
    transition: transform 0.3s ease;
    z-index: 999;
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  color: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--gray-700)')};
  background: ${({ isActive }) => (isActive ? 'var(--primary-blue)' : 'transparent')};

  &:hover {
    background: var(--primary-blue);
    color: var(--white);
    box-shadow: var(--shadow-sm);
    transform: translateY(-1px);
  }
`;

const MobileMenuToggle = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  z-index: 1001;

  span {
    width: 25px;
    height: 3px;
    background: var(--gray-700);
    border-radius: 2px;
    margin: 4px 0;
    transition: 0.4s;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('click', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      window.removeEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, handleClickOutside]);

  useEffect(() => {
    setIsMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/admission-inquiry', label: 'Admission Inquiry' }, // Now styled same as others
  ];

  return (
    <HeaderContainer>
      <Navbar>
       <NavContent>
  <Left>
    <LogoLink to="/" aria-label="Jinnah Law Academy Home">
      <LogoImage src="/logo.jpeg" alt="Logo" />
      <LogoText>
        <AcademyName>Jinnah Law Academy</AcademyName>
        <ByText>By Wasif Mateen</ByText>
      </LogoText>
    </LogoLink>
  </Left>

  <Right>
    <NavMenu ref={menuRef} isOpen={isMenuOpen}>
      {links.map(link => (
        <NavLink
          key={link.path}
          to={link.path}
          isActive={location.pathname === link.path}
        >
          {link.label}
        </NavLink>
      ))}
    </NavMenu>

    <MobileMenuToggle
      onClick={() => setIsMenuOpen(prev => !prev)}
      aria-label="Toggle navigation menu"
      isOpen={isMenuOpen}
    >
      <span />
      <span />
      <span />
    </MobileMenuToggle>
  </Right>
</NavContent>

      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
