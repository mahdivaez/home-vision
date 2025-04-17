import React from 'react';
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

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(203, 157, 118, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0);
  }
`;

// Styled components
const Section = styled.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(rgba(203, 157, 118, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.div<{ inView: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '40px'});
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const MainImage = styled.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%);
    z-index: 1;
    pointer-events: none;
  }
  
  img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.7s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const RoundedAccent = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: -40px;
  left: -40px;
  border-radius: 30px;
  background-color: rgba(203, 157, 118, 0.8);
  z-index: -1;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    bottom: -20px;
    left: -20px;
  }
`;

const LogoBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  z-index: 2;
  
  img {
    height: 24px;
    width: auto;
  }
`;

const LiveIndicator = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 2;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #4dff91;
    border-radius: 50%;
    margin-right: 8px;
    animation: ${pulse} 2s infinite;
  }
`;

const ContentContainer = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const Subtitle = styled.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
  color: rgba(203, 157, 118, 0.9);
  font-weight: 500;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 25px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 40px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const FeatureIcon = styled.div`
  width: 46px;
  height: 46px;
  background-color: rgba(203, 157, 118, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: rgba(203, 157, 118, 0.9);
  }
`;

const FeatureContent = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
`;

const CTAButton = styled(Button)`
  background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 15px 35px;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(203, 157, 118, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(203, 157, 118, 0.4);
  }
`;

const SmartDoorLock = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const doorLockFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      title: 'Keyless Entry',
      description: 'Access your home using your smartphone, PIN code, or fingerprint.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: 'Enhanced Security',
      description: 'Military-grade encryption keeps your entry points secure at all times.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h10M12 2v10M12 12l8 8M22 2L12 12"></path>
        </svg>
      ),
      title: 'Remote Access',
      description: 'Lock or unlock your door from anywhere using our secure mobile app.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Entry Logs',
      description: 'Review a detailed history of who entered your home and when.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="smart-locks" ref={ref}>
      <BackgroundPattern />
      
      <Container>
        <ContentWrapper inView={inView}>
          <ContentContainer>
            <Subtitle>Smart Security</Subtitle>
            <Title>Automated Door Locks</Title>
            <Description>
              Upgrade your home's entry points with our premium smart locks that combine
              elegant design with advanced security features. Control access from anywhere
              and enjoy peace of mind knowing your home is secure.
            </Description>
            
            <FeatureGrid>
              {doorLockFeatures.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureContent>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </FeatureContent>
                </FeatureItem>
              ))}
            </FeatureGrid>
            
            <CTAButton onClick={() => scrollToSection('contact')}>
              Explore Smart Lock Options
            </CTAButton>
          </ContentContainer>
          
          <ImageContainer>
            <MainImage>
              <img src="/smar-door-lock.jpg" alt="Smart Door Lock" />
              <LogoBadge>
              </LogoBadge>
              <LiveIndicator>Armed & Secured</LiveIndicator>
            </MainImage>
            <RoundedAccent />
          </ImageContainer>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default SmartDoorLock; 