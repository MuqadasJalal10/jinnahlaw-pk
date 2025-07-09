import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Section, SectionTitle, Container, Button, Card } from '../styles/GlobalStyles';

const AdmissionFormSection = styled(Section)`
  background: var(--white);
`;

const FormContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FormInfo = styled.div`
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
    margin-bottom: 2rem;
  }
`;

const AdmissionBenefits = styled.div`
  background: var(--gray-50);
  padding: 2rem;
  border-radius: 1rem;
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
    }
  }
`;

const ContactInfo = styled.div`
  background: var(--primary-blue);
  color: var(--white);
  padding: 2rem;
  border-radius: 1rem;
  
  h3 {
    color: var(--white);
    margin-bottom: 1rem;
  }
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  
  strong {
    color: var(--white);
    display: block;
    margin-bottom: 0.25rem;
  }
  
  p {
    margin: 0;
  }
  
  a {
    color: var(--light-blue);
    text-decoration: none;
    
    &:hover {
      color: var(--white);
    }
  }
`;

const AdmissionFormFields = styled.form`
  background: var(--gray-50);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--gray-200);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--gray-900);
  }
  
  p {
    color: var(--gray-600);
    font-size: 0.9rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--gray-900);
  }
  
  input, select, textarea {
    width: 100%;
    padding: 0.875rem;
    border: 2px solid var(--gray-300);
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: var(--primary-blue);
    }
  }
  
  textarea {
    resize: vertical;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  
  input[type="checkbox"] {
    width: auto;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
  
  label {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0;
  }
`;

const SuccessMessage = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const SuccessContent = styled.div`
  background: var(--white);
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
  max-width: 500px;
  margin: 1rem;
  box-shadow: var(--shadow-xl);
  
  .success-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--gray-900);
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    color: var(--gray-600);
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    
    .success-icon {
      font-size: 3rem;
    }
  }
`;

const CourseInfoSection = styled(Section)`
  background: var(--gray-50);
`;

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProgramCard = styled(Card)`
  padding: 2rem;
  text-align: center;
  
  .program-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--gray-900);
  }
  
  p {
    color: var(--gray-600);
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    text-align: left;
    
    li {
      padding: 0.25rem 0;
      color: var(--gray-700);
      font-size: 0.9rem;
      
      &:before {
        content: "✓ ";
        color: var(--primary-blue);
        font-weight: bold;
      }
    }
  }
`;

const WhyChooseSection = styled(Section)`
  background: var(--white);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const BenefitItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  
  .benefit-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--gray-900);
  }
  
  p {
    color: var(--gray-600);
    font-size: 0.9rem;
  }
`;

interface FormData {
  fullName: string;
  education: string;
  phone: string;
  email: string;
  address: string;
  course: string;
  mode: string;
  previousExperience: string;
  additionalInfo: string;
  terms: boolean;
}

const AdmissionInquiry: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    education: '',
    phone: '',
    email: '',
    address: '',
    course: '',
    mode: '',
    previousExperience: '',
    additionalInfo: '',
    terms: false
  });
const [subCourse, setSubCourse] = useState<string>("");

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['fullName', 'education', 'phone', 'email', 'course', 'mode', 'terms'];
    const missingFields = requiredFields.filter(field => {
      if (field === 'terms') return !formData[field];
      return !formData[field as keyof FormData];
    });
    
    if (missingFields.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Simulate form submission
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    setTimeout(() => {
      setShowSuccess(true);
      document.body.style.overflow = 'hidden';
      
      // Reset form
      setFormData({
        fullName: '',
        education: '',
        phone: '',
        email: '',
        address: '',
        course: '',
        mode: '',
        previousExperience: '',
        additionalInfo: '',
        terms: false
      });
      
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 1500);
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);
    document.body.style.overflow = 'auto';
  };

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
      title="Admission Inquiry - Jinnah Law Academy By Wasif Mateen" 
      description="Apply for admission to Jinnah Law Academy. Fill out our admission inquiry form to begin your legal education journey."
    >
      <Hero 
        title="Admission Inquiry Form" 
        subtitle="Begin your journey in legal education with Jinnah Law Academy By Wasif Mateen. Fill out the form below to explore our programs."
      />
      
      <main>
        <AdmissionFormSection>
          <Container>
            <FormContent>
              <FormInfo>
                <h2 className="fade-in">Start Your Legal Journey</h2>
                <p className="fade-in">Take the first step towards becoming a legal professional. Our admission process is designed to be simple and straightforward. Fill out the form and our admissions team will contact you with detailed information about your selected program.</p>
                
                <AdmissionBenefits className="fade-in">
                  <h3>What You'll Get</h3>
                  <ul>
                    <li>✅ Detailed program information</li>
                    <li>✅ Fee structure and payment options</li>
                    <li>✅ Class schedule and timing</li>
                    <li>✅ Career guidance and counseling</li>
                    <li>✅ Admission requirements clarification</li>
                  </ul>
                </AdmissionBenefits>

                <ContactInfo className="fade-in">
                  <h3>Need Help?</h3>
                  <ContactItems>
                    <ContactItem>
                      <span className="icon">📞</span>
                      <div>
                        <strong>Call Us</strong>
                        <p><a href="tel:0300-1186473">0300-1186473</a></p>
                      </div>
                    </ContactItem>
                    <ContactItem>
                      <span className="icon">💬</span>
                      <div>
                        <strong>WhatsApp</strong>
                        <p><a href="https://wa.me/923014686473">0301-4686473</a></p>
                      </div>
                    </ContactItem>
                  </ContactItems>
                </ContactInfo>
              </FormInfo>

              <AdmissionFormFields className="fade-in" onSubmit={handleSubmit}>
                <FormHeader>
                  <h3>Admission Application</h3>
                  <p>Please fill out all required fields marked with *</p>
                </FormHeader>

                <FormGroup>
                  <label htmlFor="fullName">Full Name *</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required 
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="education">Education *</label>
                  <select 
                    id="education" 
                    name="education" 
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your education level</option>
                    <option value="intermediate">Intermediate / F.A / F.Sc</option>
                    <option value="a-level">A-Level</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="llb">LL.B</option>
                    <option value="other">Other</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="phone">Phone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="address">Address</label>
                  <textarea 
                    id="address" 
                    name="address" 
                    rows={2} 
                    placeholder="Your complete address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
  <label htmlFor="course">Course *</label>
  <select
    id="course"
    name="course"
    value={formData.course}
    onChange={(e) => {
      handleInputChange(e);
      setSubCourse(""); // Reset subCourse when main course changes
    }}
    required
  >
    <option value="">Select a course</option>
    <option value="lat">LAT - Law Admission Test</option>
    <option value="llb-4">LL.B - 4 Years Program</option>
    <option value="llb-5">LL.B - 5 Years Program</option>
    <option value="law-gat">LAW-GAT</option>
  </select>
</FormGroup>

{/* Show sub-course dropdown if llb-4 or llb-5 is selected */}
{(formData.course === "llb-4" || formData.course === "llb-5") && (
  <FormGroup>
    <label htmlFor="subCourse">Select Year *</label>
    <select
      id="subCourse"
      name="subCourse"
      value={subCourse}
      onChange={(e) => setSubCourse(e.target.value)}
      required
    >
      <option value="">Select Part</option>
      {(formData.course === "llb-4"
        ? ["Part 1", "Part 2", "Part 3", "Part 4"]
        : ["Part 1", "Part 2", "Part 3", "Part 4", "Part 5"]
      ).map((part) => (
        <option key={part} value={part}>{part}</option>
      ))}
    </select>
  </FormGroup>
)}

                <FormGroup>
                  <label htmlFor="mode">Mode *</label>
                  <select 
                    id="mode" 
                    name="mode" 
                    value={formData.mode}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select learning mode</option>
                    <option value="physical">Physical Classes</option>
                    <option value="online">Online Classes</option>
                    <option value="hybrid">Both (Hybrid)</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="previousExperience">Previous Legal Education/Experience</label>
                  <textarea 
                    id="previousExperience" 
                    name="previousExperience" 
                    rows={3} 
                    placeholder="Any previous legal education or experience (optional)"
                    value={formData.previousExperience}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="additionalInfo">Additional Information</label>
                  <textarea 
                    id="additionalInfo" 
                    name="additionalInfo" 
                    rows={3} 
                    placeholder="Any specific questions or requirements (optional)"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <CheckboxGroup>
                    <input 
                      type="checkbox" 
                      id="terms" 
                      name="terms" 
                      checked={formData.terms}
                      onChange={handleInputChange}
                      required 
                    />
                    <label htmlFor="terms">I agree to the terms and conditions and consent to being contacted by Jinnah Law Academy *</label>
                  </CheckboxGroup>
                </FormGroup>

                <Button type="submit" variant="primary">Submit Application</Button>
              </AdmissionFormFields>
            </FormContent>
          </Container>
        </AdmissionFormSection>

        <SuccessMessage show={showSuccess}>
          <SuccessContent>
            <div className="success-icon">✅</div>
            <h2>Application Submitted!</h2>
            <p>Thank you for applying to Jinnah Law Academy. We'll be in touch shortly to discuss your application and provide detailed information about your selected program.</p>
            <Button onClick={closeSuccessMessage} variant="primary">Close</Button>
          </SuccessContent>
        </SuccessMessage>

        <CourseInfoSection>
          <Container>
            <SectionTitle>Our Programs</SectionTitle>
            <ProgramsGrid>
              <ProgramCard className="fade-in">
                <div className="program-icon">🎯</div>
                <h3>LAT Preparation</h3>
                <p>Comprehensive preparation for Law Admission Test</p>
                <ul>
                  <li>Free study material</li>
                  <li>Mock tests</li>
                  <li>Expert guidance</li>
                </ul>
              </ProgramCard>
              <ProgramCard className="fade-in">
                <div className="program-icon">🎓</div>
                <h3>LL.B Programs</h3>
                <p>Complete law degree programs (4 & 5 years)</p>
                <ul>
                  <li>HEC recognized</li>
                  <li>University syllabus</li>
                  <li>Practical training</li>
                </ul>
              </ProgramCard>
              <ProgramCard className="fade-in">
                <div className="program-icon">📚</div>
                <h3>LAW-GAT</h3>
                <p>Graduate assessment test preparation</p>
                <ul>
                  <li>Advanced curriculum</li>
                  <li>Practice tests</li>
                  <li>Career counseling</li>
                </ul>
              </ProgramCard>
            </ProgramsGrid>
          </Container>
        </CourseInfoSection>

        <WhyChooseSection>
          <Container>
            <SectionTitle>Why Choose Jinnah Law Academy?</SectionTitle>
            <BenefitsGrid>
              <BenefitItem className="fade-in">
                <div className="benefit-icon">🏆</div>
                <h3>First in Region</h3>
                <p>The only specialized law academy in Nowshera Virkan</p>
              </BenefitItem>
              <BenefitItem className="fade-in">
                <div className="benefit-icon">👨‍🏫</div>
                <h3>Expert Faculty</h3>
                <p>Qualified legal professionals with proven expertise</p>
              </BenefitItem>
              <BenefitItem className="fade-in">
                <div className="benefit-icon">📱</div>
                <h3>Flexible Learning</h3>
                <p>Online and physical classes to suit your schedule</p>
              </BenefitItem>
              <BenefitItem className="fade-in">
                <div className="benefit-icon">🎯</div>
                <h3>Focused Approach</h3>
                <p>Specialized curriculum designed for success</p>
              </BenefitItem>
            </BenefitsGrid>
          </Container>
        </WhyChooseSection>
      </main>
    </Layout>
  );
};

export default AdmissionInquiry;