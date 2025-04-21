import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const ContactSection = styled.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 992px) {
    padding: 100px 0;
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: radial-gradient(circle at 20% 30%, rgba(203, 157, 118, 0.15) 0%, transparent 70%),
              radial-gradient(circle at 80% 70%, rgba(203, 157, 118, 0.1) 0%, transparent 70%);
`;

const BackgroundLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.3;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const SectionHeader = styled.div<{ inView: boolean }>`
  text-align: center;
  margin-bottom: 70px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out;
  
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    
    &::after {
      width: 60px;
      height: 2px;
    }
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 30px auto 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 25px auto 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
    margin: 20px auto 0;
  }
`;

const FormGrid = styled.div<{ inView: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out 0.2s;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  @media (max-width: 768px) {
    gap: 40px;
  }
  
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

const FormContent = styled.div`
  color: #fff;
`;

const ContactInfo = styled.div`
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.9), transparent);
    
    @media (max-width: 480px) {
      width: 40px;
      bottom: -8px;
      height: 1.5px;
    }
  }
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 25px;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
    line-height: 1.4;
  }
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background: rgba(203, 157, 118, 0.1);
  border-radius: 15px;
  padding: 20px;
  border: 1px solid rgba(203, 157, 118, 0.2);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 15px;
    padding: 12px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: rgba(203, 157, 118, 0.15);
  }
`;

const PhoneIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  animation: ${pulse} 2s infinite ease-in-out;
  color: rgba(203, 157, 118, 0.9);
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    margin-right: 15px;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    flex-shrink: 0;
  }
  
  svg {
    width: 24px;
    height: 24px;
    
    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }
`;

const PhoneDetails = styled.div`
  h4 {
    font-size: 1.1rem;
    color: rgba(203, 157, 118, 0.9);
    margin-bottom: 5px;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 3px;
    }
  }
  
  a {
    font-size: 1.4rem;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
      word-break: break-word;
    }
    
    &:hover {
      color: rgba(203, 157, 118, 0.9);
    }
  }
  
  p {
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 20px;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.9);
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  color: rgba(203, 157, 118, 0.9);
  
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    font-size: 0.8rem;
  }
`;

const FeatureText = styled.span`
  font-size: 1rem;
  line-height: 1.4;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 50px;
  border: 1px solid rgba(203, 157, 118, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 30px;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 12px;
  }
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

const FormSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    margin-bottom: 10px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.05rem;
    
    @media (max-width: 768px) {
      margin-bottom: 8px;
      font-size: 1rem;
    }
    
    @media (max-width: 480px) {
      margin-bottom: 6px;
      font-size: 0.9rem;
    }
  }
  
  input {
    padding: 15px;
    border: 1px solid rgba(203, 157, 118, 0.3);
    border-radius: 10px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      padding: 12px;
      font-size: 0.95rem;
    }
    
    @media (max-width: 480px) {
      padding: 10px;
      font-size: 0.9rem;
      border-radius: 8px;
    }
    
    &:focus {
      outline: none;
      border-color: rgba(203, 157, 118, 0.6);
      box-shadow: 0 0 15px rgba(203, 157, 118, 0.2);
      background: rgba(255, 255, 255, 0.1);
    }
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`;

const ShimmerLine = styled.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.3), transparent);
  background-size: 200px 100%;
  animation: ${shimmer} 2s infinite linear;
  margin: 20px 0;
  
  @media (max-width: 768px) {
    margin: 15px 0;
  }
  
  @media (max-width: 480px) {
    margin: 10px 0;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  padding: 18px 40px;
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 0.9rem;
    width: 100%;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ThankYouMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #fff;
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const ThankYouIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  animation: ${float} 3s infinite ease-in-out;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 25px;
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`;

const ThankYouTitle = styled.h3`
  font-size: 2rem;
  color: rgba(203, 157, 118, 0.9);
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
`;

const ThankYouText = styled.p`
  margin-bottom: 30px;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
    font-size: 1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '' });
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [contentRef, contentInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send data to GHL webhook
    fetch('https://services.leadconnectorhq.com/hooks/XIy9sfqFwX2Pzvq9l7VY/webhook-trigger/e01a048d-7694-408e-9078-e7d5d43188ca', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formName: 'Contact Form',
        name: formData.fullName,
        phone: formData.phone,
        source: 'Website Contact Section',
        dateSubmitted: new Date().toISOString()
      })
    })
    .then(response => {
      if (response.ok) {
        console.log('Contact form submitted successfully to GHL');
        setFormSubmitted(true);
        setFormData({ fullName: '', phone: '' });
      } else {
        console.error('Contact form submission failed');
        alert('There was an error submitting your request. Please try again or call us directly.');
      }
    })
    .catch(error => {
      console.error('Error submitting contact form:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    });
  };

  return (
    <ContactSection id="contact">
      <BackgroundPattern />
      <BackgroundLines />
      <Container>
        <SectionHeader ref={headerRef} inView={headerInView}>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionDescription>
            Ready to transform your home? We're here to help with your smart home journey
          </SectionDescription>
        </SectionHeader>
        
        <FormGrid ref={contentRef} inView={contentInView}>
          <FormContent>
            <ContactInfo>
              <ContactTitle>Get In Touch</ContactTitle>
              <ContactText>
                Schedule your free consultation with our smart home specialists. We'll discuss your needs 
                and create a custom plan specifically for your home.
              </ContactText>
              
              <PhoneNumber>
                <PhoneIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </PhoneIcon>
                <PhoneDetails>
                  <h4>Call us directly</h4>
                  <a href="tel:+16047164201">+1 (604) 716 4201</a>
                </PhoneDetails>
              </PhoneNumber>

              <PhoneNumber>
                <PhoneIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </PhoneIcon>
                <PhoneDetails>
                  <h4>Visit our showroom</h4>
                  <a href="https://maps.google.com/?q=310-638+Broughton+St,+Vancouver,+BC" target="_blank" rel="noopener noreferrer">
                    310-638 Broughton St, Vancouver, BC
                  </a>
                </PhoneDetails>
              </PhoneNumber>

              <PhoneNumber>
                <PhoneIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </PhoneIcon>
                <PhoneDetails>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00-20:00<br />Saturday: 11:00-15:00</p>
                </PhoneDetails>
              </PhoneNumber>

              <PhoneNumber>
                <PhoneIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </PhoneIcon>
                <PhoneDetails>
                  <h4>Email us</h4>
                  <a href="mailto:info@homevisionsolutions.ca">info@homevisionsolutions.ca</a>
                </PhoneDetails>
              </PhoneNumber>
            </ContactInfo>
            
            <ContactTitle>Why Choose Us</ContactTitle>
            <FeaturesList>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>Free consultation and custom design</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>Premium installation by certified technicians</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>Top quality products and components</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>Ongoing support and maintenance</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>Exclusive promotions for new clients</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>Satisfaction guarantee</FeatureText>
              </FeatureItem>
            </FeaturesList>
          </FormContent>
          
          <FormContainer>
            {!formSubmitted ? (
              <>
                <FormHeader>
                  <FormTitle>Request a Callback</FormTitle>
                  <FormSubtitle>Fill out the form below and we'll call you back promptly</FormSubtitle>
                </FormHeader>
                
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <label htmlFor="fullName">Full Name*</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      placeholder="John Smith" 
                      required 
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label htmlFor="phone">Phone Number*</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="(123) 456-7890" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  
                  <ShimmerLine />
                  
                  <StyledButton type="submit">
                    Make an Appointment
                  </StyledButton>
                </Form>
              </>
            ) : (
              <ThankYouMessage>
                <ThankYouIcon>✓</ThankYouIcon>
                <ThankYouTitle>Thank You!</ThankYouTitle>
                <ThankYouText>
                  Your request has been received. One of our smart home specialists will 
                  call you back within 24 hours to discuss your needs.
                </ThankYouText>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '15px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  border: '1px solid rgba(203, 157, 118, 0.2)'
                }}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    color: 'rgba(203, 157, 118, 0.9)',
                    margin: '0 0 10px 0'
                  }}>
                    What happens next?
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0'
                  }}>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '8px',
                      fontSize: '0.9rem'
                    }}>
                      <span style={{ color: 'rgba(203, 157, 118, 0.9)' }}>1.</span>
                      Our specialist will call you within 24 hours
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '8px',
                      fontSize: '0.9rem'
                    }}>
                      <span style={{ color: 'rgba(203, 157, 118, 0.9)' }}>2.</span>
                      We'll schedule a free in-home assessment
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.9rem'
                    }}>
                      <span style={{ color: 'rgba(203, 157, 118, 0.9)' }}>3.</span>
                      You'll receive a custom smart home plan and quote
                    </li>
                  </ul>
                </div>
                <StyledButton onClick={() => setFormSubmitted(false)}>
                  Submit Another Request
                </StyledButton>
              </ThankYouMessage>
            )}
          </FormContainer>
        </FormGrid>
      </Container>
    </ContactSection>
  );
};

export default ContactForm; 