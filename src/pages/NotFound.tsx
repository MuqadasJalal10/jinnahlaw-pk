import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Container, Button } from '../styles/GlobalStyles';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-50);
  padding: 2rem 0;
  margin-top: 80px;
`;

const NotFoundContent = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 3rem;
  background: var(--white);
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--gray-900);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: var(--gray-600);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NotFound: React.FC = () => {
  return (
    <Layout 
      title="404 - Page Not Found | Jinnah Law Academy" 
      description="The page you're looking for doesn't exist. Return to Jinnah Law Academy homepage."
    >
      <NotFoundContainer>
        <Container>
          <NotFoundContent>
            <ErrorCode>404</ErrorCode>
            <ErrorTitle>Page Not Found</ErrorTitle>
            <ErrorMessage>
              Sorry, the page you are looking for doesn't exist or has been moved. 
              Let's get you back to exploring our legal education programs.
            </ErrorMessage>
            <ActionButtons>
              <Button as={Link} to="/" variant="primary">
                Go to Homepage
              </Button>
              <Button as={Link} to="/courses" variant="secondary">
                View Courses
              </Button>
            </ActionButtons>
          </NotFoundContent>
        </Container>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFound;