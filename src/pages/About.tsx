import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Section, SectionTitle, Container, Card } from '../styles/GlobalStyles';

import {
  CalendarDays,
  GraduationCap,
  UserCheck,
  Award,
  Target,
  Rocket,
  Gavel,
  Lightbulb,
  Handshake
} from 'lucide-react';

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
  h2: {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--gray-900);
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  p: {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--gray-600);
    margin-bottom: 1.5rem;
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
    transition: transform 0.4s ease, border 0.3s ease;
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

const FactCard = styled(Card)<{ bgColor?: string }>`
  padding: 2rem;
  text-align: center;
  background: ${({ bgColor }) => bgColor || '#f8fafc'};
  border-radius: 1rem;
  border: 1px solid transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: fadeSlideUp 0.6s ease forwards;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: #3b82f6;
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.15);
    background: ${({ bgColor }) => bgColor || "rgba(248, 250, 252, 0.95)"};
    backdrop-filter: blur(4px);
  }

  .fact-icon {
    width: 32px;
    height: 32px;
    margin-bottom: 1rem;
    color: #3b82f6;
  }

  h3 {
    font-size: 1.25rem;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }

  p {
    color: #475569;
    font-weight: 500;
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


const VisionMissionSection = styled(Section)`
  background: var(--white);
`;

const VmGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VmCard = styled.div`
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  color: var(--white);
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: var(--shadow-lg);
  .vm-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
    color: #fff;
    
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
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    }
  }
`;

const ValuesSection = styled(Section)`
  background: var(--white);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

interface ValueCardProps {
  bgColor?: string;
}

const ValueCard = styled.div<ValueCardProps>`
  background: ${({ bgColor }) => bgColor || "#f8fafc"};
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: fadeSlideUp 0.6s ease forwards;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: #3b82f6;
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.15);
    background: ${({ bgColor }) => bgColor || "rgba(248, 250, 252, 0.95)"};
    backdrop-filter: blur(4px);
  }

  .value-icon {
    width: 32px;
    height: 32px;
    margin-bottom: 1rem;
    color: #3b82f6;
  }

  h3 {
    font-size: 1.25rem;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }

  p {
    color: #475569;
    font-weight: 500;
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
    width: 80%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
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
  }
`;

const About: React.FC = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
    fadeElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title="About Us - Jinnah Law Academy By Wasif Mateen"
      description="Learn about our mission, vision, and the founder of Jinnah Law Academy - the first law‑focused institute in Nowshera Virkan."
    >
      <Hero
        title="Where Law Meets Purpose"
        subtitle="Discover our mission, values, and the visionary behind Jinnah Law Academy By Wasif Mateen."
      />
      <main>
        <AboutSection style={{ background: "linear-gradient(135deg, #f8fafc, #e0f2fe)" }}>
  <Container>
    <AboutContent>
      <AboutText>
        <h2 className="fade-in" style={{ fontSize: "2.8rem", color: "#1e40af", position: "relative", marginBottom: "1rem" }}>
          Who We Are
          <span style={{
            display: "block",
            width: "60px",
            height: "4px",
            backgroundColor: "#1e40af",
            marginTop: "8px",
            borderRadius: "2px"
           
          }} />
        </h2>
        <p className="fade-in" style={{ fontSize: "1.15rem", lineHeight: "1.9", color: "#334155", marginBottom: "1.25rem" }}>
          At <strong>Jinnah Law Academy By Wasif Mateen</strong>, we are redefining legal education for the modern age.
          Established in 2024, we are the first dedicated law academy in Nowshera Virkan — created with a vision to uplift and empower the next generation of legal professionals.
        </p>

        <div style={{
          background: "#e0f2fe",
          padding: "1rem 1.5rem",
          borderLeft: "5px solid #1e3a8a",
          borderRadius: "0.5rem",
          fontStyle: "italic",
          color: "#1e293b",
          marginBottom: "1.5rem",
          fontSize: "1.1rem"
        }}>
          "Where knowledge meets justice — and ambition meets opportunity."
        </div>

        <p className="fade-in" style={{ fontSize: "1.15rem", lineHeight: "1.9", color: "#334155" }}>
          Through innovative teaching methods, flexible learning options, and a commitment to integrity and excellence,
          we provide students with the tools, mindset, and mentorship to pursue careers as lawyers, judges, civil servants, and change-makers.
        </p>
      </AboutText>

      <AboutImage className="fade-in" style={{ boxShadow: "0 10px 25px rgba(30, 64, 175, 0.2)" }}>
        <img
          src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Law books and gavel"
          style={{
           borderRadius: "0.25rem"
          }}
        />
      </AboutImage>
    </AboutContent>
  </Container>
</AboutSection>


        <QuickFactsSection>
          <Container>
            <SectionTitle>Quick Facts</SectionTitle>
            <FactsGrid>
  <FactCard className="fade-in" bgColor="#f0f9ff">
  <CalendarDays className="fact-icon" />
  <h3>Founded</h3>
  <p>2024</p>
</FactCard>

<FactCard className="fade-in" bgColor="#f0f9ff">
  <GraduationCap className="fact-icon" />
  <h3>Students Enrolled</h3>
  <p>50+</p>
</FactCard>

<FactCard className="fade-in" bgColor="#f0f9ff">
  <UserCheck className="fact-icon" />
  <h3>Expert Faculty</h3>
  <p>Qualified Legal Instructors</p>
</FactCard>

<FactCard className="fade-in" bgColor="#f0f9ff">
  <Award className="fact-icon" />
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
                <Target className="vm-icon" />
                <h3>Our Vision</h3>
                <p>To empower the youth of Pakistan to become competent legal professionals—lawyers, judges, and civil servants—committed to justice and integrity.</p>
              </VmCard>
              <VmCard className="fade-in">
                <Rocket className="vm-icon" />
                <h3>Our Mission</h3>
                <p>To deliver high-quality legal education that fosters critical thinking, leadership, and ethical excellence in law.</p>
              </VmCard>
            </VmGrid>
          </Container>
        </VisionMissionSection>

       <FounderMessageSection style={{  padding: "3rem 0", marginBottom: "3rem" }}>

  <Container>
    <FounderContent>
      <FounderText>
        <h2 className="fade-in" style={{ fontSize: "2.8rem", color: "#1e40af", marginBottom: "1rem" }}>
          Founder's Message
          <span style={{
            display: "block",
            width: "60px",
            height: "4px",
            backgroundColor: "#1e40af",
            marginTop: "8px",
            borderRadius: "2px"
          }} />
        </h2>
        <blockquote className="fade-in" style={{ fontSize: "1.15rem", lineHeight: "1.9", color: "#334155" }}>
          <p><strong>Law is more than a profession</strong> — it's the foundation of justice, dignity, and social change. It empowers individuals, protects freedoms, and reflects a nation's moral compass.</p>
          <p>With this vision, I founded <strong>Jinnah Law Academy By Wasif Mateen</strong> — a space where aspiring legal minds grow with discipline, confidence, and purpose.</p>
          <p>We go beyond textbooks to shape <em>critical thinkers</em> and <em>ethical leaders</em> — prepared not just to study law, but to <strong>live it</strong> and <strong>lead through it</strong>.</p>
          <p>Legal education is a powerful journey requiring clarity, courage, and integrity. At our academy, we instill these values to develop true agents of change.</p>
          <p>I invite you to join this mission — to rise above mediocrity, lead with purpose, and create lasting impact.</p>
        </blockquote>
        <FounderSignature className="fade-in" style={{ marginTop: "2rem", color: "#1e293b" }}>
          <p className="signature-text">Warmly,</p>
          <p className="founder-name">Mian Wasif Mateen</p>
          <p className="founder-title">Advocate High Court</p>
          <p className="founder-role">Founder – Jinnah Law Academy By Wasif Mateen</p>
        </FounderSignature>
      </FounderText>
      <FounderImage className="fade-in">
        <img src="./founder.jpeg" alt="Founder of Jinnah Law Academy" style={{ borderRadius: "0.75rem", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }} />
      </FounderImage>
    </FounderContent>
  </Container>
</FounderMessageSection>


        <AchievementsSection style={{ padding: "3rem 0", marginTop: "3rem" }}>

  <Container>
    <AchievementsContent>

      <AchievementImage className="fade-in" style={{ marginRight: "2rem" }}>
        <img 
          src="./result1.jpeg" 
          alt="Jinnah Law Academy student achievement" 
          style={{ 
            maxWidth: "100%", 
            borderRadius: "0.75rem", 
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" 
          }} 
        />
      </AchievementImage>

      <AchievementText className="fade-in">
        <h2 style={{ fontSize: "2.8rem", color: "#1e40af", marginBottom: "1rem" }}>
          Our Achievements
          <span style={{
            display: "block",
            width: "60px",
            height: "4px",
            backgroundColor: "#1e40af",
            marginTop: "8px",
            borderRadius: "2px"
          }} />
        </h2>

        <p style={{ fontSize: "1.15rem", lineHeight: "1.9", color: "#334155" }}>
          At <strong>Jinnah Law Academy</strong>, our impact speaks through our students' success. From producing top scorers to expanding our digital footprint and publishing insightful legal materials — our achievements reflect our unwavering commitment to excellence.
        </p>

        <p style={{ fontSize: "1.15rem", lineHeight: "1.9", color: "#334155", marginTop: "1rem" }}>
          Our journey has only just begun, and it’s powered by the hard work of our faculty, the trust of our community, and the ambition of every student who walks through our doors.
        </p>
      </AchievementText>

    </AchievementsContent>
  </Container>
</AchievementsSection>



        <ValuesSection>
  <Container>
    <SectionTitle>Our Values</SectionTitle>
    <ValuesGrid>
      <ValueCard className="fade-in" bgColor="#f0f9ff">
        <Gavel className="value-icon" />
        <h3>Justice</h3>
        <p>We believe in fairness, equality, and the rule of law as fundamental principles of society.</p>
      </ValueCard>
      <ValueCard className="fade-in" bgColor="#f0f9ff">
        <Target className="value-icon" />
        <h3>Excellence</h3>
        <p>We strive for the highest standards in legal education and professional development.</p>
      </ValueCard>
      <ValueCard className="fade-in" bgColor="#f0f9ff">
        <Handshake className="value-icon" />
        <h3>Integrity</h3>
        <p>We uphold honesty, transparency, and ethical conduct in all our academic and professional activities.</p>
      </ValueCard>
      <ValueCard className="fade-in" bgColor="#f0f9ff">
        <Lightbulb className="value-icon" />
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
