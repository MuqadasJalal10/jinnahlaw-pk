import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Section, SectionTitle, Container, Button } from '../styles/GlobalStyles';

const ContactWrapper = styled(Section)`
  background: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  padding: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2.5rem;
    color: var(--Black);
    margin-bottom: 1rem;
  }

  p, a {
    color: var(--gray-700);
    font-size: 1.1rem;
    line-height: 1.6;
  }

  strong {
    color: var(--secondary-blue);
  }

  a {
    text-decoration: none;
    color: var(--primary-blue);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled.form`
  background: var(--gray-50);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);

  h3 {
    font-size: 1.8rem;
    color: var(--Black);
    margin-bottom: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--primary-blue);
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

const MapEmbed = styled.div`
  iframe {
    width: 100%;
    height: 250px;
    border-radius: 1rem;
    border: none;
  }
`;

const FaqSection = styled(Section)`
  background: var(--white);
  padding: 4rem 0;
`;

const FaqItem = styled.div`
  border-bottom: 1px solid var(--gray-200);
  padding: 1rem 0;

  h3 {
    font-size: 1.2rem;
    color: var(--primary-blue);
    cursor: pointer;
    position: relative;
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    color: var(--gray-700);
    line-height: 1.6;
  }

  &.open .faq-answer {
    max-height: 500px;
    margin-top: 1rem;
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

  const [loading, setLoading] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Server error:', data.error || 'Unknown error');
        alert(`❌ Error: ${data.error || 'Something went wrong.'}`);
        return;
      }

      alert('✅ Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err: any) {
      console.error('Network error:', err);
      alert('❌ Failed to send. Please check your internet or try again later.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <Layout title="Contact Us - Jinnah Law Academy By Wasif Mateen" description="Get in touch with Jinnah Law Academy.">
      <Hero
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries about our programs, admissions, or general information."
        backgroundImage="/contactus.jpg"
      />

      <Container>
        <ContactWrapper>
          <ContactDetails>
            <h2>📞 Get In Touch</h2>
            <p><strong>Call Us:</strong> <a href="tel:03001186473">0300-1186473</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/923001186473" target="_blank" rel="noopener noreferrer">03001186473</a></p>
            <p><strong>Email:</strong> <a href="mailto:jinnahlawacademybywasifmateen@gmail.com">jinnahlawacademybywasifmateen@gmail.com</a></p>
            <p><strong>Office Hours:</strong><br/>Monday to Friday: 9:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM<br/>Sunday: Closed</p>
            <p><strong>Visit Our Campus:</strong><br/>Near Bank Islami, Opp. Sports Hall, Mattu Bhaike Rd, Nowshera Virkan</p>
            <MapEmbed>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27235.93401901972!2d74.19101014272807!3d31.571904276907337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39188a4f372f92a3%3A0x15fc6aa83263c4b4!2sNowshera%20Virkan!5e0!3m2!1sen!2s!4v1717764437069!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MapEmbed>
          </ContactDetails>

          <ContactForm onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            <FormGroup>
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="phone">Phone *</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="subject">Subject *</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required>
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
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
            </FormGroup>

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </ContactForm>
        </ContactWrapper>
      </Container>

      <FaqSection>
        <Container>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          {[
            { q: 'What are the admission requirements?', a: 'For LAT preparation, students must have completed their intermediate (FA/FSc) or A-Levels. For LL.B programs, LAT qualification is mandatory in addition to prior academic credentials like intermediate or equivalent.' },
            { q: 'Do you offer online classes?', a: 'Yes, we offer both online and on-campus classes. Our online classes are conducted via Zoom or Google Meet and are equally interactive, allowing students from remote areas to benefit.' },
            { q: 'What is the fee structure?', a: 'The fee structure varies by program and duration. We offer monthly as well as lump-sum payment options. Discounts may be available for early registrations or group admissions.' },
            { q: 'When do new batches start?', a: 'We initiate new batches every two months. The exact dates are announced on our Facebook page and website. You can also call us for the latest schedule.' },
            { q: 'Do you offer trial classes?', a: 'Yes, prospective students can attend one or two trial classes free of cost to experience our teaching environment before committing.' },
            { q: 'Can I get one-on-one support?', a: 'Absolutely! We provide extra support and doubt-clearing sessions for students who need additional help, especially before exams or assessments.' },
            { q: 'Are your instructors qualified?', a: 'Our faculty includes experienced law professionals and LAT/LL.B subject experts with years of teaching experience. They are committed to delivering high-quality education.' },
            { q: 'Is there any hostel or accommodation facility?', a: 'Currently, we do not offer in-house hostel facilities. However, we can help students find nearby hostels or accommodations on request.' },
          ].map((item, idx) => (
            <FaqItem key={idx} className={openIndex === idx ? 'open' : ''}>
              <h3 onClick={() => toggleFaq(idx)}>{item.q}</h3>
              <div className="faq-answer">{item.a}</div>
            </FaqItem>
          ))}
        </Container>
      </FaqSection>
    </Layout>
  );
};

export default Contact;
