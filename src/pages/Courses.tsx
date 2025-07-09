import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Section, SectionTitle, Container, Button, Card } from '../styles/GlobalStyles';

const CoursesOverviewSection = styled(Section)`
  background: var(--white);
  padding: 2rem 0;
`;

const OverviewText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
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
  }
`;

const CourseDetailSection = styled(Section)<{ alt?: boolean }>`
  background: ${props => props.alt ? 'var(--gray-50)' : 'var(--white)'};
  padding: 4rem 0;
  border-bottom: 1px solid var(--gray-200);
`;

const CourseContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CourseInfo = styled.div``;

const CourseBadge = styled.div`
  display: inline-block;
  background: var(--primary-blue);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CourseTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--gray-900);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CourseDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--gray-600);
  margin-bottom: 2rem;
`;

const CourseDetails = styled.div<{ alt?: boolean }>`
  background: ${props => props.alt ? 'var(--gray-50)' : 'var(--white)'};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
  margin-bottom: 2rem;
  border-left: 4px solid var(--primary-blue);
`;

const DetailItem = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    min-width: 120px;
    color: var(--gray-900);
  }
  
  span {
    color: var(--gray-600);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
    
    strong {
      min-width: auto;
    }
  }
`;

const CourseFeatures = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--gray-900);
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 0.5rem 0;
      color: var(--gray-700);
      font-size: 0.95rem;
    }
  }
`;

const CourseActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CourseImage = styled.div`
  overflow: hidden;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: var(--shadow-md);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
  }
`;


const WhyChooseSection = styled(Section)`
  background: var(--gray-50);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const BenefitCard = styled(Card)`
  padding: 2rem;
  text-align: center;
  background: white;
  border: 1px solid #e5e7eb; /* light gray border */
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  animation: fadeSlideUp 0.6s ease forwards;

  .benefit-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2563eb; /* Tailwind blue-600 */
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--gray-900);
  }

  p {
    color: var(--gray-600);
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: #1d4ed8; /* Tailwind blue-700 */
    box-shadow: 0 8px 16px rgba(29, 78, 216, 0.2);
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

const CtaSection = styled(Section)`
  background: var(--primary-blue);
  color: var(--white);
  text-align: center;
`;

const CtaContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--white);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CtaSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--light-blue);
`;

const CtaButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const CtaPrimaryButton = styled(Button)`
  background: var(--white);
  color: var(--primary-blue);
  
  &:hover {
    background: var(--gray-100);
    color: var(--primary-blue);
  }
`;

const CtaSecondaryButton = styled(Button)`
  background: transparent;
  color: var(--white);
  border: 2px solid var(--white);
  
  &:hover {
    background: var(--white);
    color: var(--primary-blue);
  }
`;

const Courses: React.FC = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout 
      title="Our Courses - Jinnah Law Academy By Wasif Mateen" 
      description="Explore our comprehensive legal education programs including LAT, LL.B (4 & 5 Years), and LAW-GAT preparation courses."
    >
      <Hero 
        title="Our Courses" 
        subtitle="Explore our structured legal education offerings, tailored for different academic levels and career goals."
      />
      
      <main>
        <CoursesOverviewSection>
          <Container>
            <OverviewText>
              <h2 className="fade-in">Comprehensive Legal Education</h2>
              <p className="fade-in">Our carefully designed curriculum covers all aspects of legal education, from entrance test preparation to advanced law degrees. Whether you're just starting your legal journey or advancing your career, we have the right program for you.</p>
            </OverviewText>
          </Container>
        </CoursesOverviewSection>

        <CourseDetailSection id="lat">
          <Container>
            <CourseContent>
              <CourseInfo>
                <CourseBadge>Entrance Exam</CourseBadge>
                <CourseTitle className="fade-in">LAT - Law Admission Test</CourseTitle>
                <CourseDescription className="fade-in">Comprehensive preparation for the Law Admission Test, covering all essential topics including Essay Writing, Legal Reasoning, and General Knowledge.</CourseDescription>
                
                <CourseDetails className="fade-in">
                  <DetailItem>
                    <strong>Description:</strong>
                    <span>Essay, Legal Reasoning, General Knowledge</span>
                  </DetailItem>
                  <DetailItem>
                    <strong>Eligibility:</strong>
                    <span>Intermediate / A-Level Students</span>
                  </DetailItem>
                  <DetailItem>
                    <strong>Mode:</strong>
                    <span>Online & On-Campus</span>
                  </DetailItem>
                  <DetailItem>
                    <strong>Duration:</strong>
                    <span>Short-Term Intensive</span>
                  </DetailItem>
                </CourseDetails>

                <CourseFeatures className="fade-in">
                  <h3>Course Features</h3>
                  <ul>
                    <li>✅ Free LAT Test Preparation</li>
                    <li>✅ Comprehensive Study Material</li>
                    <li>✅ Mock Tests & Practice Sessions</li>
                    <li>✅ Expert Guidance & Tips</li>
                    <li>✅ Flexible Online & Physical Classes</li>
                  </ul>
                </CourseFeatures>

                <CourseActions className="fade-in">
                  <Button as={Link} to="/admission-inquiry" variant="primary">Enroll Now</Button>
                  <Button as={Link} to="/contact" variant="secondary">Get Info</Button>
                </CourseActions>
              </CourseInfo>
              <CourseImage className="fade-in">
                <img src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800" alt="LAT Preparation" />
              </CourseImage>
            </CourseContent>
          </Container>
        </CourseDetailSection>

        <CourseDetailSection alt id="llb-4">
          <Container>
            <CourseContent>
              <CourseImage className="fade-in">
                <img src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800" alt="LL.B 4 Years Program" />
              </CourseImage>
              <CourseInfo>
                <CourseBadge>4-Year Degree</CourseBadge>
                <CourseTitle className="fade-in">LL.B - 4 Years Program</CourseTitle>
                <CourseDescription className="fade-in">Complete Bachelor of Laws degree program designed for students who have already completed their bachelor's degree and want to pursue law as their career.</CourseDescription>
                
                <CourseDetails alt className="fade-in">
                  <DetailItem>
                    <strong>Eligibility:</strong>
                    <span>LAT Qualified + Bachelor Degree</span>
                  </DetailItem>
                  <DetailItem>
                    <strong>Duration:</strong>
                    <span>4 Years (Parts 1-4)</span>
                  </DetailItem>
                  <DetailItem>
                    <strong>Recognition:</strong>
                    <span>HEC Recognized</span>
                  </DetailItem>
                </CourseDetails>

                <CourseFeatures className="fade-in">
                  <h3>Program Features</h3>
                  <ul>
                    <li>✅ University-Standard Syllabus</li>
                    <li>✅ Expert Faculty with Legal Experience</li>
                    <li>✅ Practical Legal Training</li>
                    <li>✅ Court Visit Opportunities</li>
                    <li>✅ Internship Guidance</li>
                    <li>✅ Career Counseling</li>
                  </ul>
                </CourseFeatures>

                <CourseActions className="fade-in">
                  <Button as={Link} to="/admission-inquiry" variant="primary">Apply Now</Button>
                  <Button as={Link} to="/contact" variant="secondary">Learn More</Button>
                </CourseActions>
              </CourseInfo>
            </CourseContent>
          </Container>
        </CourseDetailSection>

        <CourseDetailSection id="llb-5">
          <Container>
            <CourseContent>
              <CourseInfo>
                <CourseBadge>5-Year Degree</CourseBadge>
                <CourseTitle className="fade-in">LL.B - 5 Years Program</CourseTitle>
                <CourseDescription className="fade-in">Comprehensive law degree program for intermediate students, providing thorough legal education from foundational to advanced levels.</CourseDescription>
                
                <CourseDetails className="fade-in">
                  <DetailItem>
                    <strong>Eligibility:</strong>
                    <span>LAT Qualified + Intermediate</span>
                  </DetailItem>
                  <DetailItem>
                    <strong>Duration:</strong>
                    <span>5 Years (10 Semesters)</span>
                  </DetailItem>
                  <DetailItem>
                    <strong>Recognition:</strong>
                    <span>HEC Recognized</span>
                  </DetailItem>
                </CourseDetails>

                <CourseFeatures className="fade-in">
                  <h3>Program Features</h3>
                  <ul>
                    <li>✅ Comprehensive Legal Education</li>
                    <li>✅ Internship & Court Visit Opportunities</li>
                    <li>✅ Recognized by HEC</li>
                    <li>✅ Professional Development</li>
                    <li>✅ Moot Court Training</li>
                    <li>✅ Research Methodology</li>
                  </ul>
                </CourseFeatures>

                <CourseActions className="fade-in">
                  <Button as={Link} to="/admission-inquiry" variant="primary">Apply Now</Button>
                  <Button as={Link} to="/contact" variant="secondary">Get Details</Button>
                </CourseActions>
              </CourseInfo>
              <CourseImage className="fade-in">
                <img src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800" alt="LL.B 5 Years Program" />
              </CourseImage>
            </CourseContent>
          </Container>
        </CourseDetailSection>

        <CourseDetailSection alt id="law-gat">
          <Container>
            <CourseContent>
              <CourseImage className="fade-in">
                <img src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800" alt="LAW-GAT Preparation" />
              </CourseImage>
              <CourseInfo>
                <CourseBadge>Graduate Test</CourseBadge>
                <CourseTitle className="fade-in">LAW-GAT</CourseTitle>
                <CourseDescription className="fade-in">Advanced preparation for the Law Graduate Assessment Test, designed for law graduates seeking to pursue higher studies or advance their legal careers.</CourseDescription>
                
                <CourseDetails alt className="fade-in">
                  <DetailItem>
                    <strong>Eligibility:</strong>
                    <span>LL.B Graduates</span>
                  </DetailItem>
                  <DetailItem>
                    <strong>Coverage:</strong>
                    <span>Jurisprudence, Constitutional, Civil, Criminal Law</span>
                  </DetailItem>
                  <DetailItem>
                    <strong>Duration:</strong>
                    <span>Intensive Course</span>
                  </DetailItem>
                </CourseDetails>

                <CourseFeatures className="fade-in">
                  <h3>Course Features</h3>
                  <ul>
                    <li>✅ Comprehensive Practice Tests</li>
                    <li>✅ Expert Guidance & Mentorship</li>
                    <li>✅ Updated Syllabus Coverage</li>
                    <li>✅ Mock Examinations</li>
                    <li>✅ Individual Performance Analysis</li>
                    <li>✅ Career Guidance</li>
                  </ul>
                </CourseFeatures>

                <CourseActions className="fade-in">
                  <Button as={Link} to="/admission-inquiry" variant="primary">Register Now</Button>
                  <Button as={Link} to="/contact" variant="secondary">Contact Us</Button>
                </CourseActions>
              </CourseInfo>
            </CourseContent>
          </Container>
        </CourseDetailSection>

        <WhyChooseSection>
          <Container>
            <SectionTitle>Why Choose Our Courses?</SectionTitle>
            <BenefitsGrid>
              <BenefitCard className="fade-in">
                <div className="benefit-icon">🎯</div>
                <h3>Focused Curriculum</h3>
                <p>Our courses are specifically designed to meet the requirements of each exam and degree program.</p>
              </BenefitCard>
              <BenefitCard className="fade-in">
                <div className="benefit-icon">👨‍🏫</div>
                <h3>Expert Faculty</h3>
                <p>Learn from qualified legal professionals with extensive academic and practical experience.</p>
              </BenefitCard>
              <BenefitCard className="fade-in">
                <div className="benefit-icon">📱</div>
                <h3>Flexible Learning</h3>
                <p>Choose between online and on-campus classes to fit your schedule and learning preferences.</p>
              </BenefitCard>
              <BenefitCard className="fade-in">
                <div className="benefit-icon">📊</div>
                <h3>Progress Tracking</h3>
                <p>Regular assessments and feedback to monitor your progress and identify areas for improvement.</p>
              </BenefitCard>
            </BenefitsGrid>
          </Container>
        </WhyChooseSection>

        <CtaSection>
          <Container>
            <CtaContent>
              <CtaTitle>Ready to Begin Your Legal Education?</CtaTitle>
              <CtaSubtitle>Join our comprehensive programs and take the first step towards a successful legal career.</CtaSubtitle>
              <CtaButtons>
                <CtaPrimaryButton as={Link} to="/admission-inquiry">Start Application</CtaPrimaryButton>
                <CtaSecondaryButton as={Link} to="/contact">Get More Info</CtaSecondaryButton>
              </CtaButtons>
            </CtaContent>
          </Container>
        </CtaSection>
      </main>
    </Layout>
  );
};

export default Courses;