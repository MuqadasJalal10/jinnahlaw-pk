import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-blue: #1e40af;
    --secondary-blue: #3b82f6;
    --accent-blue: #60a5fa;
    --light-blue: #dbeafe;
    --dark-blue: #1e3a8a;
    --gold: #d97706;
    --light-gold: #fbbf24;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    --white: #ffffff;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  html {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--gray-700);
    background-color: var(--white);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: var(--gray-900);
    line-height: 1.2;
  }

  a {
    color: var(--primary-blue);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--secondary-blue);
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  text-decoration: none;
  
  ${props => props.variant === 'primary' ? `
    background-color: var(--primary-blue);
    color: var(--white);
    box-shadow: var(--shadow-md);
    
    &:hover {
      background-color: var(--dark-blue);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      color: var(--white);
    }
  ` : `
    background-color: var(--white);
    color: var(--primary-blue);
    border: 2px solid var(--primary-blue);
    
    &:hover {
      background-color: var(--primary-blue);
      color: var(--white);
    }
  `}
`;

export const Section = styled.section`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--gray-900);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Card = styled.div`
  background: var(--white);
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
`;
