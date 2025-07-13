import styled from 'styled-components';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { useEffect } from 'react';

const PageWrapper = styled.section`
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 3rem auto;
  background: var(--gray-50);
  border-radius: 1rem;
  box-shadow: var(--shadow-md);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 2rem auto;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--primary-blue);
  font-weight: 700;
`;

const Paragraph = styled.p`
  margin-bottom: 2rem;
  line-height: 1.9;
  font-size: 1.05rem;
  color: var(--gray-700);
`;

const Terms = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    fadeElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title="Terms & Conditions - Jinnah Law Academy By Wasif Mateen"
      description="Official terms and conditions for using Jinnah Law Academy's services and website."
    >
      <Hero
        title="Terms & Conditions"
        subtitle="Understand our rules before accessing or using our platform."
        backgroundImage='/terms_n_condition.jpg'
      />

      <PageWrapper>
        <Title className="fade-in">Welcome to Jinnah Law Academy By Wasif Mateen</Title>
        <Paragraph className="fade-in">
          By accessing this website, you agree to comply with the terms and conditions laid out by Jinnah Law Academy by Wasif Mateen. These terms apply to all users, visitors, and partners interacting with our platform or its services. Please read them carefully before proceeding.
        </Paragraph>

        <Title className="fade-in">Use of Cookies</Title>
        <Paragraph className="fade-in">
          Our website uses cookies to enhance your browsing experience. By accessing our site, you consent to the use of cookies in accordance with our Privacy Policy. Cookies may help us analyze web traffic, remember preferences, and personalize your experience.
        </Paragraph>

        <Title className="fade-in">Intellectual Property Rights</Title>
        <Paragraph className="fade-in">
          All educational material, logos, images, and digital content on this website are the intellectual property of Jinnah Law Academy. No material may be copied, reproduced, or republished without written permission. Any unauthorized use may lead to legal action.
        </Paragraph>

        <Title className="fade-in">Linking to Our Website</Title>
        <Paragraph className="fade-in">
          Educational institutions, government agencies, or legal organizations may link to our homepage or resources, provided the link is not misleading and does not imply endorsement. We reserve the right to request the removal of any links that violate our branding or misrepresent our mission.
        </Paragraph>

        <Title className="fade-in">Content Liability</Title>
        <Paragraph className="fade-in">
          While we aim to provide accurate and updated legal education content, Jinnah Law Academy is not responsible for any content published on third-party platforms linked from our site. Users are encouraged to verify any legal information before acting upon it.
        </Paragraph>

        <Title className="fade-in">Embedded Frames</Title>
        <Paragraph className="fade-in">
          You may not create frames around our web pages that alter the visual presentation or appearance of our website without prior approval. We maintain the integrity of our content layout and interface for consistent educational delivery.
        </Paragraph>

        <Title className="fade-in">Reservation of Rights</Title>
        <Paragraph className="fade-in">
          We reserve the right to amend these terms at any time. Continued use of the site after changes constitutes your agreement to the revised terms. Users are advised to review this page regularly to stay informed.
        </Paragraph>

        <Title className="fade-in">Removal of Links or Content</Title>
        <Paragraph className="fade-in">
          If you find any offensive, outdated, or misleading content or links on our site, please notify us. We will review the matter promptly. While we are not obligated to remove such content, we will consider genuine concerns seriously.
        </Paragraph>

        <Title className="fade-in">Contact Information</Title>
        <Paragraph className="fade-in">
          For any questions regarding these Terms & Conditions, please email us at <strong>info@jinnahlawacademy.com</strong>. We value transparency and your trust.
        </Paragraph>
      </PageWrapper>
    </Layout>
  );
};

export default Terms;
