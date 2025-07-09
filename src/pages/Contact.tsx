import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Section, SectionTitle, Container, Button, Card } from '../styles/GlobalStyles';

const ContactInfoSection = styled(Section)`
  background: var(--gray-50);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ContactCard = styled(Card)`
  padding: 2rem;
  text-align: center;
  
  .contact-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--gray-900);
  }
  
  p {
    color: var(--gray-600);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  a {
    color: var(--primary-blue);
    text-decoration: none;
    
    &:hover {
      color: var(--secondary-blue);
    }
  }
`;

const ContactFormSection = styled(Section)`
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

const QuickContact = styled.div`
  background: var(--gray-50);
  padding: 2rem;
  border-radius: 1rem;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: var(--gray-900);
  }
`;

const QuickContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const QuickContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  
  strong {
    color: var(--gray-900);
    display: block;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: var(--gray-600);
    margin: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }
`;

const ContactFormFields = styled.form`
  background: var(--gray-50);
  padding: 2rem;
  border-radius: 1rem;
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
    min-height: 120px;
  }
`;

const MapSection = styled(Section)`
  background: var(--gray-50);
`;

const MapContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
`;

const MapPlaceholder = styled.div`
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  text-align: center;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const MapContent = styled.div`
  max-width: 300px;
  
  .map-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--white);
  }
  
  p {
    color: var(--light-blue);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const MapButton = styled(Button)`
  background: var(--white);
  color: var(--primary-blue);
  
  &:hover {
    background: var(--gray-100);
    color: var(--primary-blue);
  }
`;

const FaqSection = styled(Section)`
  background: var(--white);
`;

const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FaqItem = styled.div`
  background: var(--gray-50);
  padding: 2rem;
  border-radius: 1rem;
  border-left: 4px solid var(--primary-blue);
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--gray-900);
  }
  
  p {
    color: var(--gray-600);
    line-height: 1.6;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 1000);
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
      title="Contact Us - Jinnah Law Academy By Wasif Mateen" 
      description="Get in touch with Jinnah Law Academy. Find our location, contact details, and reach out for any inquiries about our law programs."
    >
      <Hero 
        title="Contact Us" 
        subtitle="Get in touch with us for any inquiries about our programs, admissions, or general information."
        
      />
      
      <main>
        <ContactInfoSection>
          <Container>
            <ContactGrid>
              <ContactCard className="fade-in">
                <div className="contact-icon">📍</div>
                <h3>Visit Our Campus</h3>
                <p>Near Bank Islami, Opp. Sports Hall, Mattu Bhaike Rd, Nowshera Virkan, Pakistan</p>
                <Button as="a" href="https://maps.google.com" target="_blank" variant="secondary">Get Directions</Button>
              </ContactCard>

              <ContactCard className="fade-in">
                <div className="contact-icon">📞</div>
                <h3>Call Us</h3>
                <p>Phone: <a href="tel:0300-1186473">0300-1186473</a></p>
                <p>WhatsApp: <a href="https://wa.me/923014686473">0301-4686473</a></p>
                <Button as="a" href="tel:0300-1186473" variant="secondary">Call Now</Button>
              </ContactCard>

              <ContactCard className="fade-in">
                <div className="contact-icon">✉️</div>
                <h3>Email Us</h3>
                <p>jinnahlawacademybywasifmateen@gmail.com</p>
                <Button as="a" href="mailto:jinnahlawacademybywasifmateen@gmail.com" variant="secondary">Send Email</Button>
              </ContactCard>

              <ContactCard className="fade-in">
                <div className="contact-icon">🕒</div>
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </ContactCard>
            </ContactGrid>
          </Container>
        </ContactInfoSection>

        <ContactFormSection>
          <Container>
            <FormContent>
              <FormInfo>
                <h2 className="fade-in">Send Us a Message</h2>
                <p className="fade-in">Have a question about our programs or need more information? Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <QuickContact className="fade-in">
                  <h3>Quick Contact</h3>
                  <QuickContactItems>
                    <QuickContactItem>
                      <span className="icon">📱</span>
                      <div>
                        <strong>WhatsApp</strong>
                        <p><a href="https://wa.me/923014686473">0301-4686473</a></p>
                      </div>
                    </QuickContactItem>
                    <QuickContactItem>
                      <span className="icon">💬</span>
                      <div>
                        <strong>Facebook</strong>
                        <p><a href="#">Facebook Profile</a></p>
                      </div>
                    </QuickContactItem>
                  </QuickContactItems>
                </QuickContact>
              </FormInfo>

              <ContactFormFields className="fade-in" onSubmit={handleSubmit}>
                <FormGroup>
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
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
                  <label htmlFor="subject">Subject *</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="courses">Course Information</option>
                    <option value="fees">Fee Structure</option>
                    <option value="schedule">Class Schedule</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>

                <Button type="submit" variant="primary">Send Message</Button>
              </ContactFormFields>
            </FormContent>
          </Container>
        </ContactFormSection>

        <MapSection>
          <Container>
            <SectionTitle>Find Us</SectionTitle>
            <MapContainer className="fade-in">
              <MapPlaceholder>
                <MapContent>
                  <div className="map-icon">📍</div>
                  <h3>Jinnah Law Academy</h3>
                  <p>Near Bank Islami, Opp. Sports Hall<br />Mattu Bhaike Rd, Nowshera Virkan</p>
                  <MapButton as="a" href="https://maps.google.com" target="_blank">View on Google Maps</MapButton>
                </MapContent>
              </MapPlaceholder>
            </MapContainer>
          </Container>
        </MapSection>

        <FaqSection>
          <Container>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <FaqGrid>
              <FaqItem className="fade-in">
                <h3>What are the admission requirements?</h3>
                <p>Admission requirements vary by program. For LAT preparation, you need intermediate or A-Level completion. For LL.B programs, you need LAT qualification plus relevant educational background.</p>
              </FaqItem>
              <FaqItem className="fade-in">
                <h3>Do you offer online classes?</h3>
                <p>Yes, we offer both online and on-campus classes to provide flexibility for our students. You can choose the mode that best fits your schedule and preferences.</p>
              </FaqItem>
              <FaqItem className="fade-in">
                <h3>What is the fee structure?</h3>
                <p>Our fee structure varies by program. Please contact us directly or visit our campus for detailed information about fees and payment options.</p>
              </FaqItem>
              <FaqItem className="fade-in">
                <h3>When do new batches start?</h3>
                <p>We start new batches regularly throughout the year. Contact us to learn about upcoming batch schedules and registration deadlines.</p>
              </FaqItem>
            </FaqGrid>
          </Container>
        </FaqSection>
      </main>
    </Layout>
  );
};

export default Contact;