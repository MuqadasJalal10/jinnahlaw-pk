import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Section, SectionTitle, Container, Card } from '../styles/GlobalStyles';

const AboutSection = styled(Section)`
  background: var(--white);
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--gray-900);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--gray-600);
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const AboutImage = styled.div`
  overflow: hidden;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    transition: transform 0.4s ease;

    border: 2px solid transparent;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    img {
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 180px;
    }
  }
`;

const QuickFactsSection = styled(Section)`
  background: var(--gray-50);
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FactCard = styled(Card)`
  padding: 2rem;
  text-align: center;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: #1d4ed8;
    box-shadow: 0 8px 16px rgba(29, 78, 216, 0.2);
  }

  .fact-icon {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: #2563eb;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--gray-900);
  }

  p {
    color: var(--gray-600);
    font-weight: 500;
  }
`;

const VisionMissionSection = styled(Section)`
  background: var(--white);
`;

const VmGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const VmCard = styled.div`
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  color: var(--white);
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: var(--shadow-lg);

  .vm-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--white);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--light-blue);
  }
`;

const FounderMessageSection = styled(Section)`
  background: var(--gray-50);
`;

const FounderContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FounderText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--gray-900);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  blockquote {
    font-size: 1.3rem;
    line-height: 1.6;
    color: var(--gray-700);
    font-style: italic;
    margin-bottom: 2rem;
    padding-left: 2rem;
    border-left: 4px solid var(--primary-blue);

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const FounderSignature = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);

  .signature-text {
    font-style: italic;
    color: var(--gray-600);
    margin-bottom: 0.5rem;
  }

  .founder-name {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: 0.25rem;
  }

  .founder-title {
    color: var(--primary-blue);
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .founder-role {
    color: var(--gray-600);
    font-size: 0.9rem;
  }
`;

const FounderImage = styled.div`
  margin-top: -100px;
  overflow: hidden;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
    img {
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 200px;
    }
  }
`;

const ValuesSection = styled(Section)`
  background: var(--white);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 8px 16px rgba(29, 78, 216, 0.2);
    border-color: #1d4ed8;
  }
`;

const AchievementsSection = styled(Section)`
  background: var(--gray-50);
`;

const AchievementsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementImage = styled.div`
  overflow: hidden;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    img {
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 180px;
    }
  }
`;

const AchievementText = styled.div`
  h2 {
    font-size: 2.2rem;
    color: var(--gray-900);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: var(--gray-600);
    line-height: 1.7;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const About: React.FC = () => {
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
      title="About Us - Jinnah Law Academy By Wasif Mateen"
      description="Learn about our mission, vision, and the founder of Jinnah Law Academy - the first law-focused institute in Nowshera Virkan."
    >
      <Hero
        title="Where Law Meets Purpose"
        subtitle="Discover our mission, values, and the visionary behind Jinnah Law Academy By Wasif Mateen."
      />

      <main>
        <AboutSection>
          <Container>
            <AboutContent>
              <AboutText>
                <h2 className="fade-in">Who We Are</h2>
                <p className="fade-in">Founded in 2024, Jinnah Law Academy By Wasif Mateen is the first and only law-specialized academic institute in Nowshera Virkan. We are dedicated to preparing students for legal entrance and professional exams through innovative teaching methodologies.</p>
                <p className="fade-in">Our academy offers both online and on-campus learning opportunities, utilizing modern educational methods to ensure comprehensive legal education. We believe in nurturing the next generation of legal professionals who will uphold justice and serve society with integrity.</p>
              </AboutText>
              <AboutImage className="fade-in">
                <img src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Law books and gavel" />
              </AboutImage>
            </AboutContent>
          </Container>
        </AboutSection>

        <QuickFactsSection>
          <Container>
            <SectionTitle>Quick Facts</SectionTitle>
            <FactsGrid>
              <FactCard className="fade-in">
                <div className="fact-icon">🗓️</div>
                <h3>Founded</h3>
                <p>2024</p>
              </FactCard>
              <FactCard className="fade-in">
                <div className="fact-icon">🎓</div>
                <h3>Students Enrolled</h3>
                <p>50+</p>
              </FactCard>
              <FactCard className="fade-in">
                <div className="fact-icon">👨‍🏫</div>
                <h3>Expert Faculty</h3>
                <p>Qualified Legal Instructors</p>
              </FactCard>
              <FactCard className="fade-in">
                <div className="fact-icon">🏆</div>
                <h3>Specialty</h3>
                <p>First Law Academy in Nowshera Virkan</p>
              </FactCard>
            </FactsGrid>
          </Container>
        </QuickFactsSection>

        <VisionMissionSection>
          <Container>
            <VmGrid>
              <VmCard className="fade-in">
                <div className="vm-icon">🎯</div>
                <h3>Our Vision</h3>
                <p>To empower the youth of Pakistan to become competent legal professionals—lawyers, judges, and civil servants—committed to justice and integrity.</p>
              </VmCard>
              <VmCard className="fade-in">
                <div className="vm-icon">🚀</div>
                <h3>Our Mission</h3>
                <p>To deliver high-quality legal education that fosters critical thinking, leadership, and ethical excellence in law.</p>
              </VmCard>
            </VmGrid>
          </Container>
        </VisionMissionSection>

        <FounderMessageSection>
          <Container>
            <FounderContent>
              <FounderText>
                <h2 className="fade-in">Founder's Message</h2>
                <blockquote className="fade-in">
                  <p><strong>Law is more than a profession</strong> — it's the foundation of justice, dignity, and social change.</p>
                  <p>With this vision, I founded <strong>Jinnah Law Academy By Wasif Mateen</strong>.</p>
                  <p>We go beyond textbooks to shape <em>critical thinkers</em> and <em>ethical leaders</em>.</p>
                  <p>Legal education is a powerful journey requiring clarity, courage, and integrity.</p>
                  <p>I invite you to join this mission — lead with purpose, and create lasting impact.</p>
                </blockquote>
                <FounderSignature className="fade-in">
                  <p className="signature-text">Warmly,</p>
                  <p className="founder-name">Mian Wasif Mateen</p>
                  <p className="founder-title">Advocate High Court</p>
                  <p className="founder-role">Founder – Jinnah Law Academy By Wasif Mateen</p>
                </FounderSignature>
              </FounderText>
              <FounderImage className="fade-in">
                <img src="./founder.jpeg" alt="Legal professional" />
              </FounderImage>
            </FounderContent>
          </Container>
        </FounderMessageSection>

        <AchievementsSection>
          <Container>
            <AchievementsContent>
              <AchievementImage className="fade-in">
                <img src="./result1.jpeg" alt="Student success" />
              </AchievementImage>
              <AchievementText className="fade-in">
                <h2>Our Achievements</h2>
                <p>With consistent top results, growing online reach, and impactful legal publications, our journey is just beginning — and it’s powered by the trust of our students.</p>
              </AchievementText>
            </AchievementsContent>
          </Container>
        </AchievementsSection>

        <ValuesSection>
          <Container>
            <SectionTitle>Our Values</SectionTitle>
            <ValuesGrid>
              <ValueCard className="fade-in">
                <div className="value-icon">⚖️</div>
                <h3>Justice</h3>
                <p>We believe in fairness, equality, and the rule of law as fundamental principles of society.</p>
              </ValueCard>
              <ValueCard className="fade-in">
                <div className="value-icon">🎯</div>
                <h3>Excellence</h3>
                <p>We strive for the highest standards in legal education and professional development.</p>
              </ValueCard>
              <ValueCard className="fade-in">
                <div className="value-icon">🤝</div>
                <h3>Integrity</h3>
                <p>We uphold honesty, transparency, and ethical conduct in all our academic and professional activities.</p>
              </ValueCard>
              <ValueCard className="fade-in">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>We embrace modern teaching methods and technology to enhance learning experiences.</p>
              </ValueCard>
            </ValuesGrid>
          </Container>
        </ValuesSection>
      </main>
    </Layout>
  );
};

export default About;
