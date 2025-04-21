import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Styled Components
const SecuritySection = styled.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.1);
    top: -100px;
    right: -100px;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.15);
    bottom: -50px;
    left: -50px;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  animation: ${fadeIn} 1s ease-out;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.2s backwards;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.5s ease;
  animation: ${fadeIn} 1s ease-out 0.4s backwards;
  
  &:hover {
    transform: perspective(1000px) rotateY(0deg);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
    background-size: 200% 100%;
    animation: ${shimmer} 2s infinite;
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const Content = styled.div`
  animation: ${fadeIn} 1s ease-out 0.6s backwards;
`;

const FeatureList = styled.ul`
  margin-bottom: 40px;
  padding-left: 0;
  list-style: none;
`;

const Feature = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  font-size: 1.1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  svg {
    margin-right: 15px;
    min-width: 24px;
    color: rgba(203, 157, 118, 0.9);
  }
`;

const HighlightTag = styled.span`
  display: inline-block;
  background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: white;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 8px;
  box-shadow: 0 2px 5px rgba(203, 157, 118, 0.3);
`;

const SecuritySystem = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <SecuritySection id="security-system">
      <Container>
        <SectionTitle>Advanced Home Security System</SectionTitle>
        <SectionSubtitle>
          Protect what matters most with our integrated security solutions that monitor,
          alert, and secure your home 24/7.
        </SectionSubtitle>
        
        <Grid>
          <ImageContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src="/security-system.jpg" alt="Home Security System" />
          </ImageContainer>
          
          <Content>
            <FeatureList>
              <Feature>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <HighlightTag>24/7</HighlightTag>
                  Continuous monitoring with real-time alerts sent directly to your smartphone
                </div>
              </Feature>
              
              <Feature>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                  <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                </svg>
                <div>
                  <HighlightTag>HD</HighlightTag>
                  High-definition camera system with night vision and wide-angle coverage
                </div>
              </Feature>
              
              <Feature>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <div>
                  <HighlightTag>Smart</HighlightTag>
                  Advanced door/window sensors with tamper detection and instant notifications
                </div>
              </Feature>
              
              <Feature>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 2.1l4 4-4 4" />
                  <path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4" />
                  <path d="M21 11.8v2a4 4 0 0 1-4 4H4.2" />
                </svg>
                <div>
                  <HighlightTag>Integrated</HighlightTag>
                  Seamless integration with your existing smart home ecosystem for coordinated responses
                </div>
              </Feature>
              
              <Feature>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                </svg>
                <div>
                  <HighlightTag>Expandable</HighlightTag>
                  Modular system designed to grow with your needs and add additional security components
                </div>
              </Feature>
            </FeatureList>
            
            <Button onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>Learn More About Security</Button>
          </Content>
        </Grid>
      </Container>
    </SecuritySection>
  );
};

export default SecuritySystem; 