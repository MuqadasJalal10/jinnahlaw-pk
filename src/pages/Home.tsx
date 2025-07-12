import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Section, SectionTitle, Container, Button, Card } from '../styles/GlobalStyles';
import { Gavel, BookOpenText, GraduationCap, Landmark } from 'lucide-react';


const FeaturesSection = styled(Section)`
  background: var(--gray-50);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1.25rem;
    padding: 0 1rem;
  }
`;

const FeatureCard = styled(Card)<{ bgColor?: string }>`
  padding: 1.5rem;
  text-align: center;
  background: ${({ bgColor }) => bgColor || '#f8fafc'};
  border: 1px solid transparent;
  border-radius: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  animation: fadeSlideUp 0.6s ease forwards;

  .feature-icon {
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
    color: #3b82f6;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    color: #1e3a8a;
  }

  p {
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.5;
    font-weight: 500;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: #1d4ed8;
    box-shadow: 0 10px 20px rgba(29, 78, 216, 0.15);
    background: ${({ bgColor }) => bgColor || 'rgba(248, 250, 252, 0.95)'};
    backdrop-filter: blur(4px);
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CoursesPreviewSection = styled(Section)`
  background: var(--white);
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1.25rem;
    padding: 0 1rem;
  }
`;

const CourseCard = styled(Card)`
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border: 1px solid var(--primary-blue);
  }
`;

const CourseHeader = styled.div`
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  color: var(--white);
  padding: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;

const CourseBadge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
`;

const CourseContent = styled.div`
  padding: 1.5rem;

  p {
    margin-bottom: 1rem;
    color: var(--gray-600);
    font-size: 0.95rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const CourseFeatures = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;

  li {
    padding: 0.25rem 0;
    color: var(--gray-700);
    font-size: 0.9rem;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }
`;

const CourseFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.5rem;
  border-top: 1px solid var(--gray-200);
  background: var(--gray-50);

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`;

const CourseDuration = styled.span`
  color: var(--gray-600);
  font-weight: 500;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const StatsSection = styled(Section)`
  background: var(--primary-blue);
  color: var(--white);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    text-align: center;
    gap: 1.25rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: var(--light-blue);
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CtaSection = styled(Section)`
  background: var(--gray-50);
  text-align: center;
`;

const CtaContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--gray-900);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const CtaSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--gray-600);

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CtaButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;


const Home: React.FC = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
        }
      });
    });

    fadeElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title="Jinnah Law Academy By Wasif Mateen - Learn Law, Lead Justice"
      description="Welcome to Jinnah Law Academy by Wasif Mateen — the first and only law-focused institute in Nowshera Virkan. Get expert guidance in LAT, LL.B and LAW-GAT."
    >
      <Hero
        title="Learn Law, Lead Justice"
        subtitle="Welcome to Jinnah Law Academy by Wasif Mateen — Nowshera Virkan’s premier institute dedicated exclusively to legal education. Specializing in LAT, LL.B, and LAW-GAT preparation, we offer expert-led courses both online and on-campus to help you achieve your legal career goals."
        ctaText="Explore Courses"
        ctaLink="/courses"
        backgroundImage="/111.jpg"
      />

      <main>
        <FeaturesSection>
  <Container>
    <SectionTitle>Why Choose Jinnah Law Academy By Wasif Mateen?</SectionTitle>
    <FeaturesGrid>
      <FeatureCard className="fade-in" bgColor="#f0f9ff">
        <div className="feature-icon"><Landmark size={36} /></div>
        <h3>Only Law Academy in Nowshera Virkan</h3>
        <p>The first and only specialized law academy in the region, providing focused legal education.</p>
      </FeatureCard>

      <FeatureCard className="fade-in" bgColor="#f0f9ff">
        <div className="feature-icon"><BookOpenText size={36} /></div>
        <h3>Online + Physical Classes</h3>
        <p>Flexible learning options with both online and on-campus classes to suit your schedule.</p>
      </FeatureCard>

      <FeatureCard className="fade-in" bgColor="#f0f9ff">
        <div className="feature-icon"><GraduationCap size={36} /></div>
        <h3>Qualified Legal Instructors</h3>
        <p>Learn from experienced legal professionals and qualified instructors with proven expertise.</p>
      </FeatureCard>

      <FeatureCard className="fade-in" bgColor="#f0f9ff">
        <div className="feature-icon"><Gavel size={36} /></div>
        <h3>University-Affiliated Exam Prep</h3>
        <p>Comprehensive preparation for LAT, LL.B, and LAW-GAT exams with university-standard curriculum.</p>
      </FeatureCard>
    </FeaturesGrid>
  </Container>
</FeaturesSection>

        <CoursesPreviewSection>
          <Container>
            <SectionTitle>Our Courses</SectionTitle>
            <CoursesGrid>
              <CourseCard className="fade-in">
                <CourseHeader>
                  <h3>LAT - Law Admission Test</h3>
                  <CourseBadge>Entrance Exam</CourseBadge>
                </CourseHeader>
                <CourseContent>
                  <p>Comprehensive preparation for Law Admission Test covering Essay Writing, Legal Reasoning, and General Knowledge.</p>
                  <CourseFeatures>
                    <li>✓ Free LAT Test Preparation</li>
                    <li>✓ Comprehensive Study Material</li>
                    <li>✓ Mock Tests</li>
                  </CourseFeatures>
                </CourseContent>
                <CourseFooter>
                  <CourseDuration>Short-Term Intensive</CourseDuration>
                  <Button as={Link} to="/courses#lat" variant="secondary">Learn More</Button>
                </CourseFooter>
              </CourseCard>

              <CourseCard className="fade-in">
                <CourseHeader>
                  <h3>LL.B - Bachelor of Laws</h3>
                  <CourseBadge>Degree Program</CourseBadge>
                </CourseHeader>
                <CourseContent>
                  <p>Complete law degree programs with both 4-year and 5-year options available for different educational backgrounds.</p>
                  <CourseFeatures>
                    <li>✓ University Syllabus</li>
                    <li>✓ Expert Faculty</li>
                    <li>✓ HEC Recognized</li>
                  </CourseFeatures>
                </CourseContent>
                <CourseFooter>
                  <CourseDuration>4-5 Years</CourseDuration>
                  <Button as={Link} to="/courses#llb" variant="secondary">Learn More</Button>
                </CourseFooter>
              </CourseCard>

              <CourseCard className="fade-in">
                <CourseHeader>
                  <h3>LAW-GAT</h3>
                  <CourseBadge>Graduate Test</CourseBadge>
                </CourseHeader>
                <CourseContent>
                  <p>Advanced preparation for Law Graduate Assessment Test covering Jurisprudence, Constitutional, Civil, and Criminal Law.</p>
                  <CourseFeatures>
                    <li>✓ Practice Tests</li>
                    <li>✓ Expert Guidance</li>
                    <li>✓ Comprehensive Coverage</li>
                  </CourseFeatures>
                </CourseContent>
                <CourseFooter>
                  <CourseDuration>Intensive Course</CourseDuration>
                  <Button as={Link} to="/courses#law-gat" variant="secondary">Learn More</Button>
                </CourseFooter>
              </CourseCard>
            </CoursesGrid>
          </Container>
        </CoursesPreviewSection>

        <StatsSection>
          <Container>
            <StatsGrid>
              <StatItem className="fade-in">
                <StatNumber>50+</StatNumber>
                <StatLabel>Students Enrolled</StatLabel>
              </StatItem>
              <StatItem className="fade-in">
                <StatNumber>2024</StatNumber>
                <StatLabel>Founded</StatLabel>
              </StatItem>
              <StatItem className="fade-in">
                <StatNumber>3+</StatNumber>
                <StatLabel>Course Programs</StatLabel>
              </StatItem>
              <StatItem className="fade-in">
                <StatNumber>1st</StatNumber>
                <StatLabel>In Nowshera Virkan</StatLabel>
              </StatItem>
            </StatsGrid>
          </Container>
        </StatsSection>

        <CtaSection>
          <Container>
            <CtaContent>
              <CtaTitle>Ready to Start Your Legal Journey?</CtaTitle>
              <CtaSubtitle>Join Pakistan's next generation of legal professionals. Apply now for our comprehensive law programs.</CtaSubtitle>
              <CtaButtons>
                <Button as={Link} to="/admission-inquiry" variant="primary">Apply Now</Button>
                <Button as={Link} to="/contact" variant="secondary">Contact Us</Button>
              </CtaButtons>
            </CtaContent>
          </Container>
        </CtaSection>
      </main>
    </Layout>
  );
};

export default Home;
