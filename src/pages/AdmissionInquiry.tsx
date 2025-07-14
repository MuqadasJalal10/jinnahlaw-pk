import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Section, Container, Button } from '../styles/GlobalStyles';

// Styled Components
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
  }
`;

const FormInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--gray-900);
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
    display: block;
    color: var(--white);
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
  border-bottom: 2px solid var(--gray-200);
  padding-bottom: 1rem;

  h3 {
    font-size: 1.5rem;
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
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--gray-900);
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.875rem;
    border: 2px solid var(--gray-300);
    border-radius: 0.5rem;
    font-size: 1rem;

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

  input[type='checkbox'] {
    margin-top: 0.25rem;
  }

  label {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const SuccessMessage = styled.div<{ show: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? 'flex' : 'none')};
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
    color: var(--gray-900);
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

// Types
interface FormData {
  fullName: string;
  education: string;
  phone: string;
  email: string;
  address: string;
  course: string;
  mode: string;
  terms: boolean;
}

// Component
const AdmissionInquiry: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    education: '',
    phone: '',
    email: '',
    address: '',
    course: '',
    mode: '',
    terms: false,
  });

  const [subCourse, setSubCourse] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';

    setFormData(prev => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const required = ['fullName', 'education', 'phone', 'email', 'course', 'mode', 'terms'];
    const missing = required.filter(key => !formData[key as keyof FormData]);

    if (missing.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }

    const button = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = button.textContent || 'Submit Application';

    button.textContent = 'Submitting...';
    button.disabled = true;

    try {
      const res = await fetch('http://localhost:5000/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subCourse: subCourse || null }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setShowSuccess(true);
      document.body.style.overflow = 'hidden';
      setFormData({
        fullName: '',
        education: '',
        phone: '',
        email: '',
        address: '',
        course: '',
        mode: '',
        terms: false,
      });
      setSubCourse('');
    } catch (err) {
      alert('Error submitting form: ' + err);
    } finally {
      button.textContent = originalText;
      button.disabled = false;
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
    fadeEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title="Admission Inquiry - Jinnah Law Academy By Wasif Mateen"
      description="Apply for admission to Jinnah Law Academy. Fill out our admission inquiry form to begin your legal education journey."
    >
      <Hero
        title="Admission Inquiry Form"
        subtitle="Begin your legal education with Jinnah Law Academy by Wasif Mateen — grounded in knowledge, led by experience, and built for your success"
        backgroundImage="/admission99.webp"
      />

      <main>
        <AdmissionFormSection>
          <Container>
            <FormContent>
              {/* Left Info Section */}
              <FormInfo>
                <h2 className="fade-in">Start Your Legal Journey</h2>
                <p className="fade-in">
                  Take the first step towards becoming a legal professional. Our admission process is designed to be simple and straightforward.
                </p>

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
                        <p><a href="tel:03001186473">0300-1186473</a></p>
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

              {/* Right Form Section */}
              <AdmissionFormFields onSubmit={handleSubmit} className="fade-in">
                <FormHeader>
                  <h3>Admission Application</h3>
                  <p>Please fill out all required fields marked with *</p>
                </FormHeader>

                <FormGroup>
                  <label htmlFor="fullName">Full Name *</label>
                  <input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="education">Education *</label>
                  <select id="education" name="education" value={formData.education} onChange={handleInputChange} required>
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
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="address">Address</label>
                  <textarea id="address" name="address" rows={2} value={formData.address} onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="course">Course *</label>
                  <select id="course" name="course" value={formData.course} onChange={(e) => {
                    handleInputChange(e);
                    setSubCourse('');
                  }} required>
                    <option value="">Select a course</option>
                    <option value="lat">LAT - Law Admission Test</option>
                    <option value="llb-4">LL.B - 4 Years Program</option>
                    <option value="llb-5">LL.B - 5 Years Program</option>
                    <option value="law-gat">LAW-GAT</option>
                  </select>
                </FormGroup>

                {(formData.course === 'llb-4' || formData.course === 'llb-5') && (
                  <FormGroup>
                    <label htmlFor="subCourse">Select Year *</label>
                    <select id="subCourse" name="subCourse" value={subCourse} onChange={(e) => setSubCourse(e.target.value)} required>
                      <option value="">Select Part</option>
                      {(formData.course === 'llb-4' ? ['Part 1', 'Part 2', 'Part 3', 'Part 4'] : ['Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5']).map(part => (
                        <option key={part} value={part}>{part}</option>
                      ))}
                    </select>
                  </FormGroup>
                )}

                <FormGroup>
                  <label htmlFor="mode">Mode *</label>
                  <select id="mode" name="mode" value={formData.mode} onChange={handleInputChange} required>
                    <option value="">Select Mode</option>
                    <option value="physical">Physical Classes</option>
                    <option value="online">Online Classes</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <CheckboxGroup>
                    <input id="terms" name="terms" type="checkbox" checked={formData.terms} onChange={handleInputChange} required />
                    <label htmlFor="terms">
                      I agree to the terms and conditions and consent to being contacted by Jinnah Law Academy *
                    </label>
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
            <p>Thank you for applying to Jinnah Law Academy By Wasif Mateen. We'll be in touch shortly to discuss your application and program details.</p>
            <Button onClick={closeSuccessMessage} variant="primary">Close</Button>
          </SuccessContent>
        </SuccessMessage>
      </main>
    </Layout>
  );
};

export default AdmissionInquiry;
