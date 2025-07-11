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

const Privacy = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
    fadeElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title="Privacy Policy - Jinnah Law Academy"
      description="Learn how we collect, use, and protect your data at Jinnah Law Academy by Wasif Mateen."
    >
      <Hero
        title="Privacy Policy"
        subtitle="Your trust is our priority — here's how we safeguard your data."
      />

      <PageWrapper>
        <Title className="fade-in">Introduction</Title>
        <Paragraph className="fade-in">
          At Jinnah Law Academy by Wasif Mateen, we are committed to maintaining the privacy and protection of your personal information. This Privacy Policy outlines the types of data we collect, how we use it, and your rights regarding that data. This policy applies exclusively to information gathered through our website and not to offline or third-party communications.
        </Paragraph>

        <Title className="fade-in">Consent</Title>
        <Paragraph className="fade-in">
          By using our website, you consent to this Privacy Policy and agree to its terms.
        </Paragraph>

        <Title className="fade-in">What We Collect</Title>
        <Paragraph className="fade-in">
          When you fill out inquiry forms, apply for admission, or contact us, we may collect personal information such as your name, email address, phone number, academic details, or other voluntarily submitted data.
        </Paragraph>

        <Title className="fade-in">How We Use Your Information</Title>
        <Paragraph className="fade-in">
          We use the collected information to provide services, respond to inquiries, improve our website experience, and send important updates or notifications regarding our academic programs. Your data is never sold or shared with unauthorized parties.
        </Paragraph>

        <Title className="fade-in">Cookies & Tracking</Title>
        <Paragraph className="fade-in">
          Our site uses cookies to enhance user experience, remember preferences, and analyze website traffic. You can manage or disable cookies in your browser settings. However, disabling cookies may affect certain functionalities.
        </Paragraph>

        <Title className="fade-in">Third-Party Links</Title>
        <Paragraph className="fade-in">
          Our website may contain links to external resources or social media platforms. We are not responsible for the content or privacy practices of these third-party sites. We recommend reviewing their respective privacy policies.
        </Paragraph>

        <Title className="fade-in">Data Security</Title>
        <Paragraph className="fade-in">
          We use standard security protocols to protect your personal data from unauthorized access, misuse, or disclosure. Only authorized personnel have access to your information, and we make every effort to keep it secure.
        </Paragraph>

        <Title className="fade-in">Your Rights</Title>
        <Paragraph className="fade-in">
          You have the right to request access to the data we hold about you, request corrections, or ask for its deletion. To exercise these rights, please contact us at <strong>privacy@jinnahlawacademy.com</strong>.
        </Paragraph>

        <Title className="fade-in">Policy Updates</Title>
        <Paragraph className="fade-in">
          We may update this Privacy Policy from time to time. Any revisions will be posted on this page, and we encourage you to check back periodically to stay informed.
        </Paragraph>

        <Title className="fade-in">Contact Us</Title>
        <Paragraph className="fade-in">
          If you have questions or concerns regarding this policy, reach out to us at <strong>privacy@jinnahlawacademy.com</strong>. We’re here to ensure your data is handled responsibly and transparently.
        </Paragraph>
      </PageWrapper>
    </Layout>
  );
};

export default Privacy;
